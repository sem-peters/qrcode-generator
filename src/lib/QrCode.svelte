<script lang="ts">
  import QRCode from "qrcode";
  import formData from "../stores/ApplicationDataStore";

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

{#if $formData.text}
  <div class="qrcode-wrapper">
    <img
      src={$formData.dataUrl}
      title={$formData.text}
      alt="QRCode for value '{$formData.text}'"
    />
  </div>
{:else}
  <p>Enter some text to get started.</p>
{/if}

<style lang="scss">
  img {
    border: 1px solid black;
  }
</style>
