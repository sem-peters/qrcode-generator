<script lang="ts">
  export let href: string;
  export let active: boolean = false;
</script>

<a {href} class:active><slot /></a>

<style lang="scss">
  a {
    color: black;
    text-decoration: none;
    font-size: 2em;
    
    &:hover {
      text-decoration: underline;
    }
  }
</style>
