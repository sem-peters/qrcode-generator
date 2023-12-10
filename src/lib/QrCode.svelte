<script lang="ts">
  export let formData: FormDataType;
  import QRCode from "qrcode";
  import type { FormDataType } from "../types/FormDataType";

  let dataUrl = "";

  $: {
    if (formData.text) {
      QRCode.toDataURL(formData.text, formData.options, (err, url) => {
        if (err) {
          console.log(err);
        }

        if (url) {
          dataUrl = url;
        }
      });
    }
  }
</script>

{#if formData.text}
  <div class="qrcode-wrapper">
    <img
      src={dataUrl}
      title={formData.text}
      alt="QRCode for value '{formData.text}'"
    />
  </div>
  <a href={dataUrl} download="qrcode">Download</a>
{:else}
  <p>Enter some text to get started.</p>
{/if}
