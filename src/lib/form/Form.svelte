<div class="form-wrapper">
  <slot name="pre-form" />
  <form on:submit>
    <slot />
  </form>
  <slot name="post-form" />
</div>

<style lang="scss">
  .form-wrapper {
    display: flex;
    justify-content: center;

    form {
      width: 100%;
      border-radius: var(--border-radius);
      background-color: var(--color-bg-lighter);

      @media screen and (max-width: 1024px) {
        padding: 1em ;
      }
    }
  }
</style>
