<script lang="ts">
  import formData from "../../../stores/ApplicationDataStore";

  import pngIcon from "@public/png-file-icon.svg";
  import webpIcon from "@public/webp-file-icon.svg";
  import jpegIcon from "@public/jpeg-file-icon.svg";

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
  <fieldset>
    <legend>File extension</legend>
    <label>
      <img src={pngIcon} alt="PNG" />
      <input
        type="radio"
        value="image/png"
        bind:group={$formData.qrOptions.type}
      />
      <span>PNG</span>
    </label>

    <label>
      <img src={jpegIcon} alt="JPEG" />
      <input
        type="radio"
        value="image/jpeg"
        bind:group={$formData.qrOptions.type}
      />
      <span>JPEG</span>
    </label>

    <label>
      <img src={webpIcon} alt="WEBP" />
      <input
        type="radio"
        value="image/webp"
        bind:group={$formData.qrOptions.type}
      />
      <span>WEBP</span>
    </label>
  </fieldset>

  {#if error !== null}
    <div class="error">{error}</div>
  {:else}
    <a href={$formData.dataUrl} download="true" class="button">Download</a>
  {/if}
{/if}

<style lang="scss">
  fieldset {
    display: flex;
    justify-content: space-between;
    border: none;
    label {
      position: relative;
      line-height: 1.5;
      img {
        width: 5rem;
        height: 5rem;
        display: block;
      }
      input {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

  a {
    font-weight: 800;
    font-size: 1.1em;
    display: block;
    position: relative;
    margin: 1em 0;
    padding: 1em;
    color: white;
    text-decoration: none;
    background-color: var(--color-purple);
    border-radius: 8px;

    &:hover {
      background-color: var(--color-purple-lighter);
    }

    &::after {
      content: url("/download-icon.svg");
      background-size: 32px 32px;
      width: 32px;
      height: 32px;
      position: absolute;
      top: 1.1em;
      right: 1em;
    }
  }

  .error {
    border: 1px solid red;
    border-radius: var(--border-radius);
    padding: var(--padding-small);
  }
</style>
