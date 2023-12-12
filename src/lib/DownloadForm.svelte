<script lang="ts">
  import { type ApplicationDataType } from "../types/ApplicationDataType";

  export let formData: ApplicationDataType;
</script>

{#if formData.text}
  <form>
    <fieldset>
      <legend>File extension</legend>
      <label>
        <input
          type="radio"
          value="image/png"
          bind:group={formData.qrOptions.type}
        />
        PNG
      </label>

      <label>
        <input
          type="radio"
          value="image/jpeg"
          bind:group={formData.qrOptions.type}
        />
        JPEG
      </label>

      <label>
        <input
          type="radio"
          value="image/webp"
          bind:group={formData.qrOptions.type}
        />
        WEBP
      </label>
    </fieldset>

    <a href={formData.dataUrl} download="qrcode">Download</a>
  </form>
{/if}
