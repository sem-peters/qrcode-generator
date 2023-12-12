<script lang="ts">
  import type { FormDataType } from "../types/FormDataType";
  export let formData: FormDataType;
</script>

<form>
  <label>
    Text value
    <input type="text" bind:value={formData.text} />
  </label>

  <label>
    Scale
    <input type="range" min="1" max="40" bind:value={formData.options.scale} />
  </label>

  <fieldset>
    <legend>File extension</legend>
    <label>
      <input
        type="radio"
        value="image/png"
        bind:group={formData.options.type}
      />
      PNG
    </label>

    <label>
      <input
        type="radio"
        value="image/jpeg"
        bind:group={formData.options.type}
      />
      JPEG
    </label>

    <label>
      <input
        type="radio"
        value="image/webp"
        bind:group={formData.options.type}
      />
      WEBP
    </label>
  </fieldset>
</form>
