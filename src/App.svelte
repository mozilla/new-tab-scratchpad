<script>
  import FirefoxLogo from "./components/svg/FirefoxLogo.svelte";
  import Background from "./components/Background.svelte";
  import SearchBox from "./components/SearchBox.svelte";
  import TopSite from "./components/TopSite.svelte";
  import Customize from "./components/Customize.svelte";
  import {onMount} from 'svelte';

  import { theme } from "./stores";
  import { colorWays } from './data'

  // initialize app
  onMount(async () => {
    const res = await browser.storage.local.get();
    const { colorWayIndex } = res;
    console.log(colorWayIndex);
    if(colorWayIndex === undefined) return;
    else  {
      $theme.brightText = colorWays[colorWayIndex].brightText;
      $theme.primary = colorWays[colorWayIndex].primary;
      $theme.secondary = colorWays[colorWayIndex].secondary;
      $theme.tertiary = colorWays[colorWayIndex].tertiary == null ? colorWays[colorWayIndex].secondary : colorWays[colorWayIndex].tertiary;
    }
  });

  // temp
  const tiles = () => {
    const t = [];
    for(let i  = 0; i < 21; i++) {
      t.push({
        box: 1 + Math.floor(Math.random() * 2),
      })
    }
    return t;
  }


  const tops = [
    {
      url: 'https://mail.google.com',
      title: 'Gmail',
    },
    {
      url: 'https://drive.google.com',
      title: 'Drive',
    },
    {
      url: 'https://github.com',
      title: 'GitHub',
    },
    {
      url: 'https://jira.mozilla.com/secure/Dashboard.jspa',
      title: 'Jira'
    }
  ];
</script>

<style>
  main {
    display: grid;
    grid-template-rows: 96px 48px auto 1fr;
    position: relative;
    grid-gap: 48px;
    min-height: 100vh;
    padding-top: calc(var(--base-grid) * 2);
    align-items: flex-start;
  }

  .h-group {
    padding: 0 48px;
  }

  .top-site-grid {
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(auto-fit, calc(var(--base-grid) * 6));
    grid-gap: 32px;
  }

  .mason {
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    grid-auto-rows: 240px;
    grid-gap: 32px;
    grid-auto-flow: row dense;
    background: #fff3;
    max-width: 1440px;
    padding: 48px;
  }

  .bit {
    border-radius: var(--base-radius);
  }
</style>

<main data-text={$theme.brightText ? 'bright' : 'normal'}>
  <Background />
  <div class="h-group">
    <FirefoxLogo box="96px" />
  </div>
  <div class="h-group">
    <SearchBox />
  </div>
  <div class="top-site-grid h-group">
    {#each tops as top}
      <TopSite {...top} />
    {/each}
  </div>

  <div class="mason h-group">
    {#each tiles() as tile}
      <div class="bit" style="grid-row: span {tile.box}; grid-column: span {tile.box}; background:{$theme.secondary}"></div>
    {/each}
  </div>

  <Customize />
</main>
