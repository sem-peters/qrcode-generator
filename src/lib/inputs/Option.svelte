<script lang="ts">
    export let value: string;
    export let text: string;
</script>
<option on:click {value}>{text}</option>

<style lang="scss">
  option {
    font-family: var(--font-family), sans-serif;
    color: black;
    width: 100%;

  }
</style>
