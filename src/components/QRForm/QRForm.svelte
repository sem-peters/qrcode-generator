<script lang="ts">
  import EditQrCodeForm from "./components/EditQrCodeForm.svelte";
  import QrCode from "./components/QrCode.svelte";
  import DownloadForm from "./components/DownloadForm.svelte";
</script>

<div class="form-wrapper">
  <form on:submit|preventDefault={() => {}}>
    <h2>QRCode Generation Form</h2>
    <EditQrCodeForm />
    <QrCode />
    <DownloadForm />
  </form>
</div>

<style lang="scss">
  .form-wrapper {
    display: flex;
    justify-content: center;

    form {
      width: 35rem;
      max-width: 100%;
      padding: 2em 3em;
      border-radius: var(--border-radius);
      background-color: var(--color-bg-lighter);

      @media screen and (max-width: 769px) {
        padding: 1em;
      }
    }
  }
</style>
