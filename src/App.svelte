<script lang="ts">
  import type { QRCodeToDataURLOptionsOther } from "qrcode";
  import Form from "./lib/Form.svelte";
  import QrCode from "./lib/QrCode.svelte";
    import type { FormDataType } from "./types/FormDataType";

  const qrcodeOptions: QRCodeToDataURLOptionsOther = {
    type: "image/png",
    color: {
      light: "#ffffff",
      dark: "#000000",
    },
  };

  let formData: FormDataType = {
    options: qrcodeOptions,
    text: '',
  };

</script>

<main>
  <div>
    <h1>QRCode generator</h1>
    <div>
      <p>Github page created by <a href='http://sempeters.nl'>Sem Peters</a></p>
      <p>Uses <a href='https://github.com/soldair/node-qrcode'>node-qrcode</a> by <a href='https://github.com/soldair'>soldair</a></p>
    </div>
  </div>

  <Form bind:formData={formData} />
  <QrCode bind:formData={formData} />
</main>
