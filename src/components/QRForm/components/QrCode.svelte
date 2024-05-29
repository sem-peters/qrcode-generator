<script lang="ts">
  import QRCode from "qrcode";
  import appData from "../../../stores/ApplicationDataStore";
  import type { QrCodeDataType } from "@src/types/ApplicationDataType";

  let formData: QrCodeDataType;

  $: {
    formData =
      $appData.qrCodeData.find(
        (qr) => qr.id === $appData.currentlySelectedId,
      ) || $appData.qrCodeData[0];
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

<div>
    {#if formData.text}
      <img
        src={formData.dataUrl}
        title={formData.text}
        alt="QRCode for value '{formData.text}'"
        draggable="false"
      />
    {/if}
</div>

<style lang="scss">

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2em;

    img {
      width: 300px;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
</style>
