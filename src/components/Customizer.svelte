<script>
  import CustomizeIcon from "./svg/CustomizeIcon.svelte";
  import { fly, fade } from 'svelte/transition';
  let customizing = false;

  function toggle() {
    customizing = !customizing;
  }
</script>

<style>
  aside {
    bottom: 0;
    box-shadow: var(--customizer-box-shadow);
    position: fixed;
    right: 0;
    top: 0;
    width: calc(var(--base-grid) * 54);
    z-index: 1;
    background: var(--element-background-color);
  }

  .customize-button,
  .dismiss-button {
    align-items: center;
    background: var(--button-background-default);
    border-radius: var(--base-border-radius);
    border: none;
    color: var(--text-color-primary);
    display: flex;
    font-size: 1rem;
    height: calc(var(--base-grid) * 4);
    justify-content: center;
    padding: 0 var(--base-grid);
    position: absolute;
    right: calc(var(--base-grid) * 2);
    top: calc(var(--base-grid) * 2);
    z-index: 1;
  }

  .dismiss-button {
    background: var(--button-background-primary);
    color: var(--text-color-inverse);
  }

  span {
    margin-left: 5px;
  }
</style>

{#if customizing}
  <aside transition:fly="{{duration: 100, x:200}}">
    <button class="dismiss-button" on:click={toggle}>Done</button>
  </aside>
{:else}
  <button class="customize-button" on:click={toggle} transition:fade="{{duration: 100}}">
    <CustomizeIcon />
    <span>Style</span>
  </button>
{/if}
