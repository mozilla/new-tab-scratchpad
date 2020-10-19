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
    background: var(--element-background-color);
    border-radius: var(--base-border-radius);
    box-shadow: var(--search-box-shadow);
    display: flex;
    height: calc(var(--base-grid) * 7);
    margin-top: calc(var(--base-grid) * 4);
    transition: box-shadow 250ms, background 250ms, transform 75ms ease-out;
    width: var(--search-box-width);
  }

  .search-box.focus {
    background: #fff;
    transform: scale(1.01);
  }

  .search-box__provider {
    background: no-repeat center center;
    background-image: url(moz-extension://2dca0dff-baa2-0847-8175-53b7593496fe/favicon.ico);
    background-size: calc(var(--base-grid) * 3);
    flex: 0 0 calc(var(--base-grid) * 7);
  }

  .search-box__input {
    background: none;
    border: 0;
    flex: 1;
    font-size: 16px;
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
