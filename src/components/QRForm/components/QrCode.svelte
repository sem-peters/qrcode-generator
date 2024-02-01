<script lang="ts">
  import QRCode from "qrcode";
  import formData from "../../../stores/ApplicationDataStore";
  import DraggableOverflow, {
    HeightProp,
  } from "../../../lib/interactive/DraggableOverflow.svelte";

  $: {
    if ($formData.text) {
      QRCode.toDataURL($formData.text, $formData.qrOptions, (err, url) => {
        if (err) {
          console.log(err);
        }

        if (url) {
          $formData.dataUrl = url;
        }
      });
    }
  }
</script>

<div>
  <DraggableOverflow height={HeightProp.MEDIUM}>
    {#if $formData.text}
      <img
        src={$formData.dataUrl}
        title={$formData.text}
        alt="QRCode for value '{$formData.text}'"
        draggable="false"
      />
    {/if}
  </DraggableOverflow>
</div>

<style lang="scss">
  @import "@src/styles/variables";
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
      @media screen and (max-width: $breakpoint-medium) {
        height: 100%;
      }
    }
  }
</style>
