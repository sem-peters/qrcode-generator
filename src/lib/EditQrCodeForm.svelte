<script lang="ts">
  import ColorPicker, { type RgbaColor } from "svelte-awesome-color-picker";
  import ColorPickerButton from "./ColorPickerButton.svelte";
  import formData from "../stores/ApplicationDataStore";

  let background = "#ffffffff";
  let foreground = "#000000ff";

  $: {
    $formData.qrOptions.color = {
      light: background,
      dark: foreground,
    };
  }
</script>

<!-- Prevent default to prevent that clicking buttons inside this form will reload the page -->
<form on:submit|preventDefault={() => {}}>
  <label>
    Text value
    <input type="text" bind:value={$formData.text} />
  </label>

  <label>
    Scale
    <input
      type="range"
      min="1"
      max="40"
      bind:value={$formData.qrOptions.scale}
    />
  </label>

  <ColorPicker
    label="Foreground color"
    bind:hex={foreground}
    components={{ input: ColorPickerButton }}
  />

  <ColorPicker
    label="Background Color"
    bind:hex={background}
    components={{ input: ColorPickerButton }}
  />
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
  }
</style>
