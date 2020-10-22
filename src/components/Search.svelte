<script lang="ts">
</script>

<style lang="scss">
  section {
    box-shadow: var(--shadow-large);
    width: 75%;
    height: 52px;
    border-radius: var(--border-radius-regular);
    display: flex;
    background: var(--card-background);

    input {
      flex: 1;
      border: none;
      background: unset;
      font-size: var(--font-size-regular);
      border-radius: var(--border-radius-regular);
      padding: 0;
      padding-left: calc(16px + 24px + 16px);
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 16px center;
      background-image: url('/search-providers/google.ico');
      &:focus {
        box-shadow: inset 0 0 0 2px highlight;
        outline: none;
      }
    }
  }
</style>

<section><input placeholder="Search the web" /></section>
