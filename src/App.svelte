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
    @import '@src/styles/variables';
    margin: 4em 0;

    @media screen and (max-width: $breakpoint-medium) {
      margin: 1em 0;
    }
  }
</style>
