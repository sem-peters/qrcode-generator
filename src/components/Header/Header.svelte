<script lang="ts">
    import HeaderLink from "./components/_HeaderLink.svelte";
    import LocalStorageForm from "../LocalStoreForm/LocalStorageForm.svelte";
</script>

<header>
    <HeaderLink href="https://qrcode.sempeters.nl">
        sempeters
    </HeaderLink>
    <LocalStorageForm/>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    height: 6rem;
    padding: 0 3rem;
    border-bottom: 1px solid black;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: unset;
      height: unset;
      padding: 1em 2em 2em;
    }
  }
</style>
