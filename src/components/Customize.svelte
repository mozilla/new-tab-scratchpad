<script>
  import { colorways } from "./../data";
  import { setBrowserTheme, storeColorwayIndex } from "./../sideEffects";
  import { colorway } from "./../stores";

  import { fade, fly } from "svelte/transition";

  import Settings from "./svg/Settings.svelte";
  import Close from "./svg/Close.svelte";

  let display = null;
  let showSettings = false;

  const handleSettingsToggle = () => {
    showSettings = !showSettings;
  };

  const handleColorwayClick = index => {
    colorway.update(() => colorways[index]);
    setBrowserTheme(colorways[index].browserTheme);
    storeColorwayIndex(index);
  };
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
    grid-gap: 22px;
    grid-template-columns: repeat(auto-fit, 84px);
    grid-template-rows: repeat(auto-fit, 84px);
  }

  .colorway-preview {
    border-radius: var(--base-radius);
    display: flex;
    flex-direction: column;
    height: 84px;
    overflow: hidden;
    width: 84px;
    box-shadow: 0 0 0 2px rgba(12, 12, 13, 0.1) inset;
  }

  .colorway-preview:hover {
    box-shadow: 0 0 0 4px rgba(12, 12, 13, .2);
  }

  .frame {
    flex: 0 0 24px;
  }

  .page {
    flex: 1;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .element {
    border-radius: calc(var(--base-radius) * 0.5);
    height: 16px;
    width: 90%;
  }
</style>

{#if !showSettings}
  <button
    class="settings-toggle"
    on:click={handleSettingsToggle}
    transition:fade={{ duration: 150 }}>
    <Settings />
  </button>
{/if}

{#if showSettings}
  <div class="settings" transition:fly={{ duration: 250, x: 400 }}>
    <header>
      <h3>Quick Customize</h3>
      <button
        class="settings-close"
        on:click={handleSettingsToggle}
        transition:fade={{ duration: 150 }}>
        <Close />
      </button>
    </header>

    <div class="colorways">
      {#each colorways as cw, index}
        <div
          class="colorway-preview"
          on:click={() => handleColorwayClick(index)}>
          <div
            class="frame"
            style="background: {cw.browserTheme.colors.frame}" />
          <div class="page" style="background: {cw.newTab.backgroundColor}">
            <div class="element" style="background: {cw.newTab.accentColor}" />
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
