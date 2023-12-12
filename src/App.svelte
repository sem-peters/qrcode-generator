<script lang="ts">
  import type { QRCodeToDataURLOptionsOther } from "qrcode";
  import EditQrCodeForm from "./lib/EditQrCodeForm.svelte";
  import QrCode from "./lib/QrCode.svelte";
  import type { ApplicationDataType } from "./types/ApplicationDataType";
  import DownloadForm from "./lib/DownloadForm.svelte";

  const qrcodeOptions: QRCodeToDataURLOptionsOther = {
    type: "image/png",
    color: {
      light: "#ffffff",
      dark: "#000000",
    },
  };

  let formData: ApplicationDataType = {
    qrOptions: qrcodeOptions,
    text: "",
    dataUrl: "",
  };
</script>

<main>
  <div>
    <h1>QRCode generator</h1>
    <div>
      <p>Github page created by <a href="http://sempeters.nl">Sem Peters</a></p>
      <p>
        Uses <a href="https://github.com/soldair/node-qrcode">node-qrcode</a> by
        <a href="https://github.com/soldair">soldair</a>
      </p>
    </div>
  </div>

  <EditQrCodeForm bind:formData />
  <QrCode bind:formData />
  <DownloadForm bind:formData />
</main>
