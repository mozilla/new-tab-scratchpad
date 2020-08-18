<script>
  export let url = "https://example.com";
  export let icon = null;
  export let title = "example";
  import { colorway } from './../stores';

  const handleClick = () => {
    window.location.href = url;
  }
</script>

<style>
  .top-site {
    width: calc(var(--base-grid) * 6);
    cursor: pointer;
  }

  .top-site__icon[data-brighttext=true] {
    --primary-element-color: white !important;
  }

  .top-site__icon[data-brighttext=false] {
    --primary-element-color: var(--base-color) !important;
  }

  .top-site:hover .top-site__icon {
    box-shadow: var(--box-hover-outline);
  }

  .top-site__icon {
    display: block;
    width: calc(var(--base-grid) * 6);
    height: calc(var(--base-grid) * 6);
    transition: box-shadow 125ms;
    border-radius: var(--base-radius);
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: metropolis, sans-serif;
    font-size: 32px;
    color: var(--primary-element-color);
    background-color: var(--accentColor);
  }

  h4 {
    margin: var(--base-grid) 0 0;
    color: var(--primary-element-color);
    text-align: center;
    font-weight: normal;
    font-size: 14px;
  }
</style>

<div class="top-site" on:click={handleClick} style="--accentColor: {$colorway.newTab.accentColor}">
  <div class="top-site__icon" href={url} data-brighttext={$colorway.newTab.brightText}>
    {#if title && icon === null}{title.charAt(0)}{/if}
  </div>

  <h4>{title}</h4>
</div>
