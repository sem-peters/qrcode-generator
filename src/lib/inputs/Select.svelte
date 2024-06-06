<script lang="ts">
    export let value: string;
</script>

<div class="select-wrapper">
    <select bind:value name="qrcode-list" on:change>
        <slot></slot>
    </select>
</div>

<style lang="scss">
  .select-wrapper {
    display: grid;
    position: relative;
    outline: 1px solid var(--color-font-gray-light);
    border-radius: 4px;

    select {
      appearance: none;
      -webkit-appearance: none;
      background-color: var(--color-bg-light);
      padding: 0.5em 3em 0.5em 1em;
      border: none;
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      outline: none;
      color: var(--color-font-gray);

      text-overflow: ellipsis;
      width: 30ch;
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 0.25em);
      right: 1em;
      width: 0.8em;
      height: 0.5em;
      background-color: transparent;
      background-image: url("/select-icon.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
</style>
