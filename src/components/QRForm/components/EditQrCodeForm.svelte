<script lang="ts">
  import ColorPicker, { type RgbaColor } from "svelte-awesome-color-picker";
  import ColorPickerButton from "../../../lib/ColorPickerButton.svelte";
  import formData from "../../../stores/ApplicationDataStore";
  import TextInput from "../../../lib/inputs/TextInput.svelte";
  import RangeInput from "../../../lib/inputs/RangeInput.svelte";

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
<div>
  <TextInput
    label="QRCode value"
    bind:value={$formData.text}
    placeholder="Enter some data to get started"
  />

  <RangeInput
    label="Image scale"
    bind:value={$formData.qrOptions.scale}
    min={1}
    max={40}
  />

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
</div>

<style lang="scss">
  div {
    --input-size: 0;
  }
</style>
