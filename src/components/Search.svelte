<script lang="ts">
  let value = ''

  function search() {
    if (value.length < 1) {
      return
    }
    window.location.href = `https://www.google.com/search?client=firefox-b-d&q=${encodeURI(value)}`
  }
</script>

<style lang="scss">
  form {
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

<form on:submit|preventDefault={search}><input placeholder="Search the web" bind:value /></form>
