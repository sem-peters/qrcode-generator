<script lang="ts">
  export let value: string;
  export let label: string;
  export let placeholder: string | undefined
</script>

<label>
  {label}
  <input
    type="text"
    bind:value={value}
    placeholder={placeholder}
  />
</label>

<style lang="scss">
  label {
    font-weight: 500;

    input {
      font-size: 1.10rem;
      display: block;
      max-width: 100%;
      width: 100%;
      min-width: 35rem;

      outline: none;
      border: 1px solid var(--color-gray);
      padding: 4px;
      border-radius: 4px;

    }
  }
</style>
