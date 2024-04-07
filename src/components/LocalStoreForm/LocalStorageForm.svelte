<script lang="ts">
  import Button from "@src/lib/Button.svelte";
  import Form from "@src/lib/form/Form.svelte";
  import applicationData, {
    saveToLocalStorage,
    getDefaultQr,
  } from "@src/stores/ApplicationDataStore";
  import localStorageSettings from "@src/stores/LocalStorageSettings";

  const handleEnableClick = (e: Event) => {
    e.preventDefault();

    if ($localStorageSettings) {
      // Disable local storage
      if ($applicationData.qrCodeData.length > 0) {
        // Confirm that's what the user wants
        if (
          window.confirm(
            "Are you sure you want to delete all your saved qr codes?",
          )
        ) {
          localStorage.clear();
          $localStorageSettings = !$localStorageSettings;
        } else {
          // User doesn't want to delete
          return;
        }
      } else {
        // Nothing lost if user wants to delete
        $localStorageSettings = !$localStorageSettings;
      }
    } else {
      // Enable local storage
      $localStorageSettings = !$localStorageSettings;
      saveToLocalStorage();
    }
  };
  const switchToCode = (e: Event) => {
    const id = (e.target as HTMLElement).parentElement!.dataset
      .codeId as string;
    $applicationData.currentlySelectedId = Number.parseInt(id);
    saveToLocalStorage();
  };

  const deleteCode = (e: Event) => {
    // Can't delete last qr code
    if ($applicationData.qrCodeData.length === 1) return;
    const id = (e.target as HTMLElement).parentElement!.dataset
      .codeId as string;
    $applicationData.qrCodeData = $applicationData.qrCodeData.filter(
      (code) => code.id !== Number.parseInt(id),
    );
  };

  const newQrCode = () => {
    const newQr = getDefaultQr();
    newQr.id = $applicationData.qrCodeData.length;

    $applicationData.qrCodeData = [...$applicationData.qrCodeData, newQr];
    $applicationData.currentlySelectedId = newQr.id;
    saveToLocalStorage();
  };
</script>

<div class="wrapper">
  <Form on:submit={(e) => e.preventDefault()}>
    <h2>Save to browser</h2>
    <Button on:click={handleEnableClick}>
      {$localStorageSettings ? "Disable" : "Enable"}
    </Button>

    {#if $localStorageSettings}
      <ul class="qrcode-list">
        {#each $applicationData.qrCodeData as code}
          <li class="qrcode-list-item" data-code-id={code.id}>
            <button on:click={switchToCode} class="qrcode-button">
              {code.text || "No value"}
            </button>
            <button on:click={deleteCode} class="delete-button">Delete</button>
          </li>
        {/each}
      </ul>
      <div class="button-group">
        <Button on:click={newQrCode}>New QR Code</Button>
      </div>
    {/if}
  </Form>
</div>

<style lang="scss">
  .wrapper {
    width: 30%;

    .qrcode-list {
      display: flex;
      flex-direction: column;
      gap: .5em;
      .qrcode-list-item {
        &::marker {
          content: "> ";
        }

        display: flex;
        align-items: center;

        button {
          border: none;
          font-family: inherit;
          cursor: pointer;
          text-align: left;
          padding: 0.5em;

          &:hover {
            background-color: var(--color-gray);
          }

          &.qrcode-button {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 100%;
          }

          &.delete-button {
            border-left: 1px solid black;
          }
        }
      }
    }

    @media screen and (max-width: 769px) {
      width: auto;
    }
  }
</style>
