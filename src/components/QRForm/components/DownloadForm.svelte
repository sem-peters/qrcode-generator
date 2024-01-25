<script lang="ts">
  import formData from "../../../stores/ApplicationDataStore";

  let error: string | null = null;
  const isTransparent = (color: string) =>
    color.length === 9 && color.substring(7, 9) !== "FF";

  // If any selected colour contains transparency,
  // disable the download button if a non-transparent image format is selected
  $: bgColor = $formData.qrOptions.color?.light || "";
  $: fgColor = $formData.qrOptions.color?.dark || "";
  $: {
    const nonTransparentImageFormat =
      $formData.qrOptions.type !== "image/png" &&
      $formData.qrOptions.type !== "image/webp";

    if (nonTransparentImageFormat && isTransparent(bgColor)) {
      error =
        "You have selected an image format that does not support transparency, but you have selected a transparent background color.\n Please use a non-transparent background color or a different file format (such as PNG or WEBP)";
    } else if (nonTransparentImageFormat && isTransparent(fgColor)) {
      error =
        "You have selected an image format that does not support transparency, but you have selected a transparent foreground color.\n Please use a non-transparent foreground color or a different file format (such as PNG or WEBP)";
    } else {
      error = null;
    }
  }
</script>

{#if $formData.text}
  <fieldset class="form-section form-section--horizontal">
    <legend>File extension</legend>
    <label class="form-input" >
      PNG
      <input
        type="radio"
        value="image/png"
        bind:group={$formData.qrOptions.type}
      />
    </label>

    <label class="form-input">
      JPEG
      <input
        type="radio"
        value="image/jpeg"
        bind:group={$formData.qrOptions.type}
      />
    </label>

    <label class="form-input">
      <span>WEBP</span>
      <input
        type="radio"
        value="image/webp"
        bind:group={$formData.qrOptions.type}
      />
    </label>
  </fieldset>

  {#if error !== null}
    <div class="error">{error}</div>
  {:else}
    <a href={$formData.dataUrl} download="qrcode" class="button">Download</a>
  {/if}
{/if}

<style lang="scss">
  .error {
    border: 1px solid red;
    border-radius: var(--border-radius);
    padding: var(--padding-small);
  }

  label {
    flex-grow: 1;
  }
</style>
