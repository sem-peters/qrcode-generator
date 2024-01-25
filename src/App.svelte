<script lang="ts">
  import QrForm from "./components/QRForm/QRForm.svelte";
  import Header from "./components/Header/Header.svelte";
</script>

<Header />
  <!-- <div> -->
  <!--   <h1>QRCode generator</h1> -->
  <!--   <div> -->
  <!--     <p>Github page created by <a href="http://sempeters.nl">Sem Peters</a></p> -->
  <!--     <p> -->
  <!--       Uses <a href="https://github.com/soldair/node-qrcode">node-qrcode</a> by -->
  <!--       <a href="https://github.com/soldair">soldair</a> -->
  <!--     </p> -->
  <!--   </div> -->
  <!-- </div> -->

<main>
  <QrForm />
</main>

<style lang="scss">
  main {
    margin: 4em 0;
  }
</style>
