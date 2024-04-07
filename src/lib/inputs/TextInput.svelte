<script lang="ts">
  export let value: string;
  export let label: string;
  export let placeholder: string | undefined;
</script>

<label>
  <span>{label}</span>
  <input type="text" bind:value {placeholder} on:change on:blur />
</label>

<style lang="scss">

  label {

    display: flex;
    flex-direction: column;
    input {
      font-size: 1.1rem;
      display: block;

      outline: none;
      border: 1px solid var(--color-gray);
      padding: 6px;
      border-radius: var(--border-radius);
    }
  }
</style>
