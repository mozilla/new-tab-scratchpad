<script>
  import { colorWays } from './../data';
  import { setBrowserTheme, storeColorWay } from './../sideEffects';
  import { theme } from './../stores';

  import { fade, fly } from "svelte/transition";

  import Settings from "./svg/Settings.svelte";
  import Close from "./svg/Close.svelte";

  let display = null;
  let showSettings = false;

  const handleSettingsToggle = () => {
    showSettings = !showSettings;
  };

  const handleColorWayClick = (colorWay, index) => {
    setBrowserTheme(colorWay);
    storeColorWay(index);
    $theme.brightText = colorWay.brightText;
    $theme.primary = colorWay.primary;
    $theme.secondary = colorWay.secondary;
    $theme.tertiary = colorWay.tertiary == null ? colorWay.secondary : colorWay.tertiary;
  }
</script>

<style>
  .settings-toggle {
    position: fixed;
  }

  .settings-close {
    position: absolute;
  }

  .settings-close:focus,
  .settings-close:active,
  .settings-toggle:focus,
  .settings-toggle:active {
    outline: none;
  }

  .settings-toggle,
  .settings-close {
    background: none;
    border: 0;
    height: 64px;
    padding: 0;
    right: 0;
    top: 0;
    width: 64px;
  }

  .settings {
    background: white;
    border-radius: var(--base-radius);
    bottom: 0;
    box-shadow: 0 5px 24px #0004;
    margin: 32px;
    padding: 32px;
    position: fixed;
    right: 0;
    top: 0;
    width: 360px;
  }

  .colorways {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, 90px);
    grid-template-rows: repeat(auto-fit, 90px);
  }

  .colorway {
    border-radius: var(--base-radius);
    display: flex;
    flex-direction: column;
    height: 90px;
    overflow: hidden;
    width: 90px;
    box-shadow: 0 0 0 2px rgba(12, 12, 13, .1) inset;
  }

  .colorway div:first-child {
    flex: 0 0 30px;
  }

  .colorway div:nth-child(2) {
    flex: 1;
  }
</style>

{#if !showSettings}
  <button
    class="settings-toggle"
    on:click={handleSettingsToggle}
    transition:fade={{ duration: 150 }}>
    <Settings color={$theme.tertiary} />
  </button>
{/if}

{#if showSettings}
  <div class="settings" transition:fly={{ duration: 250, x: 400 }}>
    <button
      class="settings-close"
      on:click={handleSettingsToggle}
      transition:fade={{ duration: 150 }}>
      <Close color={$theme.tertiary} />
    </button>
    <div class="colorways">
      {#each colorWays as colorWay, index}
        <div class="colorway" on:click={() => handleColorWayClick(colorWay, index)}>
          <div style="background: {colorWay.tertiary ? colorWay.tertiary : colorWay.secondary}"/>
          <div style="background: {colorWay.primary}"/>
        </div>
      {/each}
    </div>
  </div>
{/if}
