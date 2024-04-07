<script lang="ts">
  export let value: number = 1;
  export let label: string;
  export let min: number = 1;
  export let max: number = 10;
</script>

<label>
  <span>{label}</span>
  <input type="range" bind:value {min} {max} on:change on:blur />
</label>

<style lang="scss">
  label {

    display: flex;
    flex-direction: column;


    span {
      margin-bottom: -.5em;
    }

    input {
      display: block;
      width: 100%;

      outline: none;
      border: 1px solid var(--color-gray);
      border-radius: 4px;
      margin: 4px 0;

    }
  }
</style>

