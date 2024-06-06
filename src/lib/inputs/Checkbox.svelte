<script lang="ts">
  export let name: string;
  export let checked: boolean;
</script>

<label class="form-control">
  <input type="checkbox" {name} bind:checked={checked} on:change on:click />
  <slot></slot>
</label>

<style lang="scss">

  .form-control {
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .25em;

    input[type="checkbox"]:checked {
      background-color: var(--color-purple);
      accent-color: var(--color-purple)
    }
  }

</style>
