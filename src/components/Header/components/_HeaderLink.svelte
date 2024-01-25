<script lang="ts">
  export let href: string;
  export let active: boolean = false;
</script>

<a {href} class:active><slot /></a>

<style lang="scss">
  a {
    font-size: 1.8rem;
    color: inherit;
    text-decoration: none;
    padding: 1rem;
    display: inline-block;

    border-top: 4px solid transparent;

    &:hover,
    &:active,
    &.active {
      border-color: var(--color-bg-light);
    }
  }
</style>
