<script lang="ts">
  import QRCode from "qrcode";
  import appData from "../../../stores/ApplicationDataStore";
  import DraggableOverflow, {
    HeightProp,
  } from "../../../lib/interactive/DraggableOverflow.svelte";
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
  <DraggableOverflow height={HeightProp.MEDIUM}>
    {#if formData.text}
      <img
        src={formData.dataUrl}
        title={formData.text}
        alt="QRCode for value '{formData.text}'"
        draggable="false"
      />
    {/if}
  </DraggableOverflow>
</div>

<style lang="scss">
  div {
    margin: 1rem -1rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;

    img {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 100%;
      @media screen and (max-width: 769px) {
        height: 100%;
      }
    }
  }
</style>
