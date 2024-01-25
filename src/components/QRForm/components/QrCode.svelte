<script lang="ts">
  import QRCode from "qrcode";
  import formData from "../../../stores/ApplicationDataStore";
  import DraggableOverflow from "../../../lib/interactive/DraggableOverflow.svelte";

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
  <DraggableOverflow>
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
  div {
    margin: 1rem -1rem ;
    padding: 1rem;
    border: 1px solid black ;

    img {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }
</style>
