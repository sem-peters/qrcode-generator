<script lang="ts">
  import QrForm from "./components/QRForm/QRForm.svelte";
  import Header from "./components/Header/Header.svelte";
  import Footer from "./components/Footer/Footer.svelte";
</script>

<Header />
<main>
  <QrForm />
</main>
<Footer />

<style lang="scss">
  main {
    margin: 4em 0;

    @media screen and (max-width: 769px) {
      margin: 1em 0;
    }
  }
</style>
