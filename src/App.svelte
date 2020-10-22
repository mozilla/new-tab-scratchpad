<script lang="ts">
  import theme from './stores/theme'

  import Button from './components/Button.svelte'
  import PreferencesIcon from './assets/icons/preferences.svg'

  import Background from './components/Background.svelte'
  import CustomizeMenu from './components/CustomizeMenu/index.svelte'

  import FirefoxLogo from './components/FirefoxLogo.svelte'
  import Search from './components/Search.svelte'
  import TopSites from './components/TopSites.svelte'
  import Pocket from './components/Pocket.svelte'

  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)
  console.log(styleElement)

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

  let customizeMenuOpen = true
</script>

<style lang="scss">
  :global {
    @import './global.scss';
  }

  :global(body) {
    background: var(--background-primary);
  }

  header {
    padding: 16px;
    text-align: right;
    position: relative;
  }

  main {
    display: flex;
    align-items: center;
    max-width: 920px;
    flex-direction: column;
    // TODO: Something better
    margin: 6em auto 0 auto;
    position: relative;
    :global {
      > * {
        margin-bottom: 3em;
      }
    }
    transition: transform 200ms ease;
    &.asideOpen {
      transform: translateX(-216px);
    }
  }
</style>

<!-- {#if $theme.newtColorsDark}<style>
  @media (prefers-color-scheme: dark) {
  }
</style>{/if} -->

<Background />

{#if customizeMenuOpen}
  <CustomizeMenu on:close={() => (customizeMenuOpen = false)} />
{/if}

<header>
  <Button on:click={() => (customizeMenuOpen = true)} icon={PreferencesIcon}>Customize</Button>
</header>
<main class:asideOpen={customizeMenuOpen}>
  <FirefoxLogo />
  <Search />
  <TopSites />
  <Pocket />
</main>
