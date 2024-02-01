<script lang="ts">
  import { hexToRgba } from "../utils/color-util";
  export let labelElement: HTMLLabelElement;
  export let hex: string;
  export let label: string;
  export let isOpen: boolean;

  let buttonContainer: HTMLElement;
  let bgColorValue: string | undefined;

  $: {
    const bgHex = hex.substring(0, 7);
    const alphaHex = hex.substring(7, 9);
    const opacity = parseInt(alphaHex, 16) / 255;
    bgColorValue = opacity || opacity === 0
      ? hexToRgba(bgHex, String(opacity))
      : hexToRgba(bgHex);
  }
</script>

<label bind:this={labelElement}>
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
      width: 15em;
      border: none;
      border-radius: var(--border-radius);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15em;
        height: 2em;
        border: 1px solid var(--color-gray);
        border-radius: var(--border-radius);
        pointer-events: none;
      }
    }
  }
</style>
