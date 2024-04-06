<script lang="ts">
  import Button from "@src/lib/Button.svelte";
import Form from "@src/lib/form/Form.svelte";

</script>

<div class="wrapper">
  <Form on:submit={(e) => e.preventDefault()}>
    <h2>Save to browser</h2>


  </Form>
</div>

<style lang="scss">
  .wrapper {
    width: 30%;

    @media screen and (max-width: 769px) {
      width: auto;
    }
  }
</style>
