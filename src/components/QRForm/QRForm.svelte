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
        <h2>QR Code Generation Form</h2>
        <EditQrCodeForm/>
        <QrCode/>
        <DownloadForm/>
    </Form>
</div>
