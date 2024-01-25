<script lang="ts">
  export let value: number = 1;
  export let label: string;
  export let min: number = 1;
  export let max: number = 10;
</script>

<label>
  {label}
  <input type="range" bind:value {min} {max} />
</label>

<style lang="scss">
  label {
    font-weight: 500;

    input {
      display: block;
      width: 100%;
      min-width: 35rem;

      outline: none;
      border: 1px solid var(--color-gray);
      padding: 4px;
      border-radius: 4px;
    }
  }
</style>
