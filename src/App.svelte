<script lang="ts">
  import QrForm from "./components/QRForm/QRForm.svelte";
  import Header from "./components/Header/Header.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import Form from "./lib/form/Form.svelte";
</script>

<Header />
<main>
  <Form><p>Hiya</p></Form>
  <QrForm />
</main>
<Footer />

<style lang="scss">
  main {
    margin: 4em 0;
    display: flex;
    justify-content: flex-start;
    gap: 15em;

    @media screen and (max-width: 769px) {
      margin: 1em 0;
    }
  }
</style>
