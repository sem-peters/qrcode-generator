<script lang="ts">
  export let labelWrapper: HTMLLabelElement;
  export let hex: string;
  export let label: string;
  export let isOpen: boolean;

  let buttonContainer: HTMLElement;

  $: bgHex = hex.substring(0, 7);
  $: alphaHex = hex.substring(7, 9);
  $: opacity = parseInt(alphaHex, 16) / 255;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
  bind:this={labelWrapper}
  on:click|preventDefault={() => {
    /* prevent default behavior on safari */
  }}
  on:mousedown|preventDefault={() => {
    /* prevent default behavior on safari */
  }}
>
  <div class="container" bind:this={buttonContainer}>
    <input
      type="button"
      style="background: {bgHex}; opacity: {opacity}"
      on:click|preventDefault={() => {
        /* prevent default behavior on most browsers */
      }}
      on:mousedown|preventDefault={() => {
        /* prevent default behavior on safari */
      }}
      aria-haspopup="dialog"
    />
  </div>
  {label}
</label>

<style lang="scss">
  .container {
    display: inline-block;
    border: 1px solid black;
    border-radius: var(--border-radius);

    input[type="button"] {
      padding: var(--padding-default);
      border-radius: var(--border-radius);
      color: transparent;
      display: block;
      width: 48px;
      height: 32px;
    }
  }
</style>
