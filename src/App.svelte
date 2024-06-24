<script lang="ts">
    import QrForm from "./components/QRForm/QRForm.svelte";
    import Header from "./components/Header/Header.svelte";
    import Footer from "./components/Footer/Footer.svelte";
    import About from './components/Section/About.svelte';
</script>

<div class="page-wrapper">
    <Header/>
    <main class="column">
        <QrForm/>
    </main>

    <About/>

    <Footer/>
</div>

<style lang="scss">
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :global(.column) {
    margin: 2em 6em 0;
    display: flex;
    justify-content: center;
    gap: 2rem;

    flex-grow: 1;

    @media screen and (max-width: 1024px) {
      margin: 2em 2em 0;
    }

    @media screen and (max-width: 769px) {
      margin: 1em 1em 0;
      flex-direction: column;
    }

    :global(.wrapper) {
      width: 70%;

      @media screen and (max-width: 769px) {
        width: auto;
      }

    }
  }

</style>
