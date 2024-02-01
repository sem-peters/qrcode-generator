<script lang="ts">
  export let value: string;
  export let label: string;
  export let placeholder: string | undefined;
</script>

<label>
  <span>{label}</span>
  <input type="text" bind:value {placeholder} />
</label>

<style lang="scss">
  @import '@src/styles/variables';

  label {
    input {
      font-size: 1.1rem;
      display: block;
      max-width: 100%;
      width: 100%;
      min-width: 35rem;

      outline: none;
      border: 1px solid var(--color-gray);
      padding: 4px;
      border-radius: var(--border-radius);

      @media screen and (max-width: $breakpoint-small) {
        min-width: 15rem;
      }

      @media screen and (max-width: $breakpoint-xsmall) {
        min-width: 0;
      }
    }
  }
</style>
