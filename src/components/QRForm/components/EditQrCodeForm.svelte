<script lang="ts">
    import ColorPicker from "svelte-awesome-color-picker";
    import ColorPickerButton from "../../../lib/ColorPickerButton.svelte";
    import appData, {saveToLocalStorage,} from "../../../stores/ApplicationDataStore";
    import TextInput from "../../../lib/inputs/TextInput.svelte";
    import type {QrCodeDataType} from "@src/types/ApplicationDataType";

    let formData: QrCodeDataType;

    const DEFAULT_FOREGROUND = "#000000";
    const DEFAULT_BACKGROUND = "#FFFFFF";

    $: formData =
        $appData.qrCodeData.find((qr) => qr.id === $appData.currentlySelectedId) ||
        $appData.qrCodeData[0];

    $: {
        if (formData) {
            if (!formData.qrOptions.color) {
                formData.qrOptions.color = {
                    light: DEFAULT_BACKGROUND,
                    dark: DEFAULT_FOREGROUND,
                };
            }
            $appData = $appData;
            saveToLocalStorage();
        }
    }
</script>

<!-- Prevent default to prevent that clicking buttons inside this form will reload the page -->
<div class="wrapper">
    <TextInput
            bind:value={formData.text}
            label="QRCode value"
            placeholder="Enter some data to get started"
    />

    {#if formData.qrOptions.color !== undefined}
        <div class="colorpicker-wrapper">
            <ColorPicker
                    label="Foreground color"
                    bind:hex={formData.qrOptions.color.dark}
                    components={{ input: ColorPickerButton }}
            />

            <ColorPicker
                    label="Background Color"
                    bind:hex={formData.qrOptions.color.light}
                    components={{ input: ColorPickerButton }}
            />
        </div>
    {/if}
</div>

<style lang="scss">
  .wrapper {
    --input-size: 0;
  }

  .colorpicker-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
</style>
