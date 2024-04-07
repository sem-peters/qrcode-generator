<script lang="ts">
  import EditQrCodeForm from "./components/EditQrCodeForm.svelte";
  import QrCode from "./components/QrCode.svelte";
  import DownloadForm from "./components/DownloadForm.svelte";
  import Form from "@src/lib/form/Form.svelte";
</script>

<div class="wrapper">
  <Form
    on:submit={(e) => {
      e.preventDefault();
    }}
  >
    <h2>QRCode Generation Form</h2>
    <EditQrCodeForm />
    <QrCode />
    <DownloadForm />
  </Form>
</div>

<style lang="scss">
  .wrapper {
    width: 70%;

    @media screen and (max-width: 769px) {
      width: auto;
    }

  }
</style>
