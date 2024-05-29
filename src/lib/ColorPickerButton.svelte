<script lang="ts">
  import { hexToRgba } from "../utils/color-util";
  export let labelElement: HTMLLabelElement;
  export let hex: string | undefined;
  export let label: string;
  export const name: string | undefined = undefined;
  export let isOpen: boolean

  let buttonContainer: HTMLElement;
  let bgColorValue: string | undefined;

  $: {
    if (hex) {
      const bgHex = hex.substring(0, 7);
      const alphaHex = hex.substring(7, 9);
      const opacity = parseInt(alphaHex, 16) / 255;
      bgColorValue =
        opacity || opacity === 0
          ? hexToRgba(bgHex, String(opacity))
          : hexToRgba(bgHex);
    }
  }
</script>

<label class:open={isOpen} bind:this={labelElement}>
  <span>{label}</span>
  <div bind:this={buttonContainer}>
    <button
      style:background={bgColorValue}
      on:click|preventDefault={() => {
        /* prevent default behavior on most browsers */
      }}
      on:mousedown|preventDefault={() => {
        /* prevent default behavior on safari */
      }}
      aria-haspopup="dialog"
    />
  </div>
</label>

<style lang="scss">
  label {
    button {
      position: relative;
      height: 2em;
      width: 100%;
      border: none;
      border-radius: var(--border-radius);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2em;
        border: 1px solid var(--color-gray);
        border-radius: var(--border-radius);
        pointer-events: none;
      }
    }
  }
</style>
