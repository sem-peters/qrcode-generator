<script lang="ts">
  export let value: number = 1;
  export let label: string;
  export let min: number = 1;
  export let max: number = 10;
</script>

<label>
  <span>{label}</span>
  <input type="range" bind:value {min} {max} />
</label>

<style lang="scss">
  @import '@src/styles/variables';
  label {

    span {
      margin-bottom: -.5em;
    }

    input {
      display: block;
      width: 100%;
      min-width: 35rem;

      outline: none;
      border: 1px solid var(--color-gray);
      padding: 4px;
      border-radius: 4px;

      @media screen and (max-width: $breakpoint-small) {
        min-width: 15rem;
      }

      @media screen and (max-width: $breakpoint-xsmall) {
        min-width: 0;
      }
    }
  }
</style>

