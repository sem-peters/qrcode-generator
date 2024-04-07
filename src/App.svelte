<script lang="ts">
  import QrForm from "./components/QRForm/QRForm.svelte";
  import Header from "./components/Header/Header.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import LocalStorageForm from "./components/LocalStoreForm/LocalStorageForm.svelte";
</script>

<Header />
<main>
  <LocalStorageForm />
  <QrForm />
</main>
<Footer />

<style lang="scss">
  main {
    margin: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;



    @media screen and (max-width: 1024px) {
      margin: 2em;
    }

    @media screen and (max-width: 769px) {
      margin: 1em 0;
      flex-direction: column;
    }
  }
</style>
