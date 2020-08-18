<script>
  import { fade } from 'svelte/transition';
  export let placeholder = "Search the web";
  export let hasFocus = false;
  export let handoffToOmnibar = false;

  const handleClick = () => {
    hasFocus = true;
  }

  const handleBlur = (evt) => {
    //HACK: don't blur if search-box is in the class string
    if (toString(evt.target.classList).includes('search-box')) return;
    evt.target.value = '';
    hasFocus = false;
    handoffToOmnibar = false;
  }

  const handleChange = () => {
    handoffToOmnibar = true;
  }
</script>

<style>
  .search-box {
    background: var(--search-box-background);
    border-radius: var(--base-radius);
    display: flex;
    box-shadow: 0 5px 24px #0004;
    height: calc(var(--base-grid) * 3);
    max-width: calc(100vw - 64px);
    transition: box-shadow 250ms, background 250ms, transform 75ms ease-out;
    width: 800px;
  }

  .search-box.focus {
    box-shadow: 0 5px 32px #0004;
    transform: scale(1.03);
    background: #fff;
  }

  .search-box__provider {
    flex: 0 0 calc(var(--base-grid) * 3);
    background: no-repeat center center;
    background-image: url(moz-extension://2dca0dff-baa2-0847-8175-53b7593496fe/favicon.ico);
  }

  .search-box__input {
    flex: 1;
    border: 0;
    font-size: 16px;
    background: none;
  }

  .search-box__input:focus {
    outline: none;
  }

</style>

{#if !handoffToOmnibar}
<div class="search-box {hasFocus ? 'focus' : ''}" on:click={handleClick}>
  <div class="search-box__provider"></div>
  <input class="search-box__input" type="text" placeholder={placeholder} on:blur={handleBlur} on:keydown={handleChange}/>
</div>
{/if}
