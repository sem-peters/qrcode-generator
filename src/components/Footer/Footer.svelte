<script lang="ts">
</script>

<footer class="bg-dark full-width">
  <div class="footer-inner">
    <div class="list">
      <ul>
        <span>Credits</span>
        <a href="https://sempeters.nl">
          <li>
            <span> Website created by Sem Peters </span>
          </li>
        </a>
        <a href="https://github.com/soldair/node-qrcode">
          <li>
            <span> Uses node-qrcode by soldair </span>
          </li>
        </a>
      </ul>
    </div>
    <div class="list">
      <ul>
        <span>QRCode Generator</span>
        <a href="https://github.com/sem-peters/qrcode-generator">
          <li>
            <span> GitHub repository </span>
          </li>
        </a>
      </ul>
    </div>
  </div>
</footer>

<style lang="scss">
  @import "@src/styles/variables";
  footer {
    margin-top: auto;

    .footer-inner {
      margin: auto;
      padding: 2rem;
      width: 80%;
      display: flex;
      justify-content: space-around;

      @media screen and (max-width: $breakpoint-small) {
        flex-direction: column;
      }

      .list {
        width: 35em;

        @media screen and (max-width: $breakpoint-small) {
          width: 15em;
        }

        ul {
          width: max-content;
          margin: auto;

          @media screen and (max-width: $breakpoint-small) {
            width: 100%;
          }

          > span {
            font-size: 1.3em;
          }
          a {
            color: white;
            li {
              margin-left: 1em;
              transition: margin-left 0.2s;

              &::marker {
                content: "> ";
              }

              &:hover {
                margin-left: 1.5em;
              }
            }
          }
        }
      }
    }
  }
</style>
