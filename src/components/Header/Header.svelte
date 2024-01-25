<script lang="ts">
  import HeaderLink from "./components/_HeaderLink.svelte";
</script>

<header class="bg-dark">
  <div class="header-container">
    <div class="logo-wrapper">
      <HeaderLink href="http://qrcode.sempeters.nl">
        QRCode Generator
      </HeaderLink>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
    background: var(--color-bg-dark);

    .header-container {
      display: flex;
      margin: 0 1rem;

      .logo-wrapper {
        flex-grow: 1;
      }
    }
  }
</style>
