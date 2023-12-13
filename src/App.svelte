<script lang="ts">
  import type { QRCodeToDataURLOptionsOther } from "qrcode";
  import EditQrCodeForm from "./lib/EditQrCodeForm.svelte";
  import QrCode from "./lib/QrCode.svelte";
  import type { ApplicationDataType } from "./types/ApplicationDataType";
  import DownloadForm from "./lib/DownloadForm.svelte";
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

  <EditQrCodeForm />
  <QrCode />
  <DownloadForm />
</main>

<style lang="scss">
  main {
    margin: 0 var(--margin-medium);

    @media screen and (min-width: 1200px) {
      margin: 0 15%;
    }
    
    @media screen and (min-width: 1800px) {
      margin: 0 25%;
    }
  }
</style>
