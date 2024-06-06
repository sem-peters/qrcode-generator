<script lang="ts">
</script>

<footer>
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
  footer {
    border-top: 1px solid black;

    .footer-inner {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1em 3em;

      @media (max-width: 768px) {
        padding: 1em 2em 2em;
      }

      @media (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
      }

      ul {
        list-style-type: ">";
        list-style-position: inside;

        & > span {
          font-weight: bold;
          font-size: 1.2em;
        }

        a {
          position: relative;
          text-decoration: none;
          color: black;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
