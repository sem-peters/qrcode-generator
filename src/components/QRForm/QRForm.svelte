<script lang="ts">
  import EditQrCodeForm from "./components/EditQrCodeForm.svelte";
  import QrCode from "./components/QrCode.svelte";
  import DownloadForm  from "./components/DownloadForm.svelte";

</script>

<div class="form-wrapper">
  <form on:submit|preventDefault={() => {}}>
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
    }
  }
</style>
