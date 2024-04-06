<script lang="ts">
  import Form from "@src/lib/form/Form.svelte";

  let localStorageEnabled = false;
</script>

<div class="wrapper">
  <Form on:submit={(e) => e.preventDefault()}>
    <h2>Save to browser</h2>
    <button on:click={() => (localStorageEnabled = !localStorageEnabled)}>
      {#if localStorageEnabled}
        Disable saving to browser
      {:else}
        Enable saving to browser
      {/if}
    </button>
  </Form>
</div>

<style lang="scss">
  .wrapper {
    width: 30%;

    @media screen and (max-width: 769px) {
      width: auto;
    }


    button {
      padding: 0.5em;
    }
  }
</style>
