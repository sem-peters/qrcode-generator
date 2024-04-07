<script lang="ts">
  export let tag: "a" | "button" = "button";
  export let iconUrl: string | undefined = undefined;

  let ref: HTMLElement;
</script>

<svelte:element
  this={tag}
  role="button"
  tabindex="0"
  class="button"
  on:click
  {...$$restProps}
  bind:this={ref}
>
  <slot />
  {#if iconUrl}<img src={iconUrl} alt="" role="presentation" />{/if}
</svelte:element>

<style lang="scss">
  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    font-weight: 800;
    font-size: 1.1em;
    width: 100%;
    margin: 1em 0;
    padding: 1em;
    color: white;
    text-decoration: none;
    background-color: var(--color-purple);
    border: none;
    border-radius: 8px;

    &:hover {
      background-color: var(--color-purple-lighter);
    }

    img {
      width: 32px;
      height: 32px;
    }
  }
</style>
