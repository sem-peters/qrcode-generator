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
    padding: 1rem 2rem;
    display: inline-block;

    border-top: 4px solid transparent;

    @media (min-width: 1025px) {
      margin: 0 2rem;
    }

    @media (max-width: 768px) {
      padding: 1rem 0;
    }

    &:hover,
    &:active,
    &.active {
      border-color: var(--color-bg-light);
    }
  }
</style>
