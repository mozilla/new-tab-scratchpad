<script>
  import { theme } from "./../stores";
  export let url = "https://example.com";
  export let icon = null;
  export let title = "example";

  const handleClick = () => {
    window.location.href = url;
  }
</script>

<style>
  .top-site {
    width: calc(var(--base-grid) * 6);
    cursor: pointer;
  }

  .top-site:hover .top-site__icon {
    box-shadow: var(--base-box-stroke-thin), var(--base-box-shadow-high);
  }

  .top-site__icon {
    display: block;
    width: calc(var(--base-grid) * 6);
    height: calc(var(--base-grid) * 6);
    transition: box-shadow 125ms;
    border-radius: var(--base-radius);
    background-repeat: no-repeat;
    background-position: center center;
    background-color: var(--base-tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: metropolis, sans-serif;
    font-size: 32px;
  }

  h4 {
    margin: var(--base-grid) 0 0;
    text-align: center;
    font-weight: normal;
    font-size: 14px;
  }
</style>

<div class="top-site" style="--base-box-stroke-thin: {$theme.secondary}" on:click={handleClick}>
  <div class="top-site__icon" href={url} style="background-color: {$theme.secondary}">
    {#if title && icon === null}{title.charAt(0)}{/if}
  </div>

  <h4>{title}</h4>
</div>
