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


</form>
