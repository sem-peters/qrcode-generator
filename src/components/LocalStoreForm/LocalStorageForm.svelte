<script lang="ts">
  import Form from "@src/lib/form/Form.svelte";
  import Checkbox from "@src/lib/inputs/Checkbox.svelte";
  import Select from "@src/lib/inputs/Select.svelte";
  import Option from "@src/lib/inputs/Option.svelte";
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
            "Are you sure you want to delete all your saved qr codes?"
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
    const codeId = (e.target as HTMLOptionElement).value as string;
    $applicationData.currentlySelectedId = codeId;
    saveToLocalStorage();
  };

  const deleteCode = (id: string) => {
    // Can't delete last qr code
    if ($applicationData.qrCodeData.length === 1) return;

    $applicationData.qrCodeData = $applicationData.qrCodeData.filter(
      (code) => code.id !== id
    );

    $applicationData.currentlySelectedId = $applicationData.qrCodeData[0].id;
    saveToLocalStorage();
  };

  const newQrCode = (e: Event) => {
    e.preventDefault();
    const newQr = getDefaultQr();
    newQr.id = "id-" + Math.random().toString(36).substring(2);

    $applicationData.qrCodeData = [...$applicationData.qrCodeData, newQr];
    $applicationData.currentlySelectedId = newQr.id;
    saveToLocalStorage();
  };

  const onChange = (e: Event) => {
    if ((e.target as HTMLSelectElement).value === "") {
      newQrCode(e);
    } else {
      switchToCode(e);
    }
  }
</script>

<div class="wrapper">
  <Checkbox
    name="local-storage-enabled"
    checked={$localStorageSettings}
    on:change={handleEnableClick}
  >
    {#if $localStorageSettings}
      Stop remembering QR Codes
    {:else}
      Remember QR Codes
    {/if}
  </Checkbox>

  {#if $localStorageSettings}
    <div class="select-and-delete-wrapper">
      <Select bind:value={$applicationData.currentlySelectedId} on:change={onChange}>
        {#each $applicationData.qrCodeData as code}
          <Option value={code.id} text={code.text || "No value"} />
        {/each}
        <Option value="" text="Create new QR" />
      </Select>

      <button
        type="button"
        on:click={() => deleteCode($applicationData.currentlySelectedId)}
        >Delete</button
      >
    </div>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    color: var(--color-font-grey);
    background: white;
    display: flex;
    gap: 1em;
    max-height: 3em;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      max-height: none;
      margin: 0 1em;
    }

    button {
      background: none;
      border: none;
      font-size: 1em;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .select-and-delete-wrapper {
    display: flex;
    gap: 1em;
    
  }
</style>
