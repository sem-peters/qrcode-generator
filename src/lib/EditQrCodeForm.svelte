<script lang="ts">
  import type { ApplicationDataType } from "../types/ApplicationDataType";
  export let formData: ApplicationDataType;
</script>

<form>
  <label>
    Text value
    <input type="text" bind:value={formData.text} />
  </label>

  <label>
    Scale
    <input
      type="range"
      min="1"
      max="40"
      bind:value={formData.qrOptions.scale}
    />
  </label>
</form>
