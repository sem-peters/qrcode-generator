<script lang="ts">
  import { type ApplicationDataType } from "../types/ApplicationDataType";
  import QRCode from "qrcode";
  export let formData: ApplicationDataType;

  $: {
    if (formData.text) {
      QRCode.toDataURL(formData.text, formData.qrOptions, (err, url) => {
        if (err) {
          console.log(err);
        }

        if (url) {
          formData.dataUrl = url;
        }
      });
    }
  }
</script>

{#if formData.text}
  <div class="qrcode-wrapper">
    <img
      src={formData.dataUrl}
      title={formData.text}
      alt="QRCode for value '{formData.text}'"
    />
  </div>
{:else}
  <p>Enter some text to get started.</p>
{/if}
