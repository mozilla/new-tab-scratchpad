<script lang="ts">
  import theme from './stores/theme'
  import settings from './stores/general'

  import Button from './components/Button.svelte'
  import PreferencesIcon from './assets/icons/preferences.svg'

  import Background from './components/Background.svelte'
  import CustomizeMenu from './components/CustomizeMenu/index.svelte'

  import FirefoxLogo from './components/FirefoxLogo.svelte'
  import Search from './components/Search.svelte'
  import TopSites from './components/TopSites.svelte'
  import Pocket from './components/Pocket.svelte'
  import Snippets from './components/Snippets.svelte'

  $: document.dir = $settings.testing_rtl ? 'rtl' : 'auto'

  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)

  theme.subscribe((theme) => {
    let newStyle = ''

    if (theme.newtColors) {
      newStyle += ':root {\n'
      Object.entries(theme.newtColors).forEach(([key, value]) => {
        newStyle += `--${key}: ${value};\n`
      })
      newStyle += '}\n'
    }

    if (theme.newtColorsDark) {
      newStyle += '@media (prefers-color-scheme: dark) {\n'
      newStyle += ':root {\n'
      Object.entries(theme.newtColorsDark).forEach(([key, value]) => {
        newStyle += `--${key}: ${value};\n`
      })
      newStyle += '}}\n'
    }

    ;(styleElement as any).replaceChildren(document.createTextNode(newStyle))
  })

  let customizeMenuOpen = false

  $: document.documentElement.setAttribute('data-customize', String(customizeMenuOpen))
</script>

<style lang="scss">
  :global {
    @import './global.scss';
  }

  :global(body) {
    background: var(--background-primary);
  }

  .scrollWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  :global([data-customize='true']) .scrollWrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
  }

  header {
    align-self: stretch;
    padding: 16px;
    text-align: end;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    @media (max-width: 1224px) {
      position: relative;
    }
  }

  main {
    display: flex;
    align-items: center;
    max-width: 920px;
    flex-direction: column;
    // TODO: Something better
    margin: 5em 2em 0 2em;
    position: relative;
    :global {
      > * {
        margin-bottom: 3em;
      }
    }
    @media (max-height: 700px) {
      margin-top: 0;
    }
    @media (max-width: 900px) {
      margin-top: 0;
    }
  }
</style>

<Background />

<div class="scrollWrapper">
  {#if customizeMenuOpen}
    <CustomizeMenu on:close={() => (customizeMenuOpen = false)} />
  {/if}

  <header>
    <Button on:click={() => (customizeMenuOpen = true)} icon={PreferencesIcon}>Customize</Button>
  </header>
  <main class="moveWhenCustomize" class:asideOpen={customizeMenuOpen}>
    <FirefoxLogo />
    {#if $settings.search_enabled}
      <Search />
    {/if}
    {#if $settings.topSites_enabled}
      <TopSites />
    {/if}
    {#if $settings.pocket_enabled}
      <Pocket />
    {/if}
  </main>

  {#if $settings.snippets_enabled}
    <Snippets />
  {/if}
</div>
