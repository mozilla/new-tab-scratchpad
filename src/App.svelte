<script>
  import FirefoxLogo from "./components/svg/FirefoxLogo.svelte";
  import Background from "./components/Background.svelte";
  import SearchBox from "./components/SearchBox.svelte";
  import TopSite from "./components/TopSite.svelte";
  import Customize from "./components/Customize.svelte";
  import {onMount} from 'svelte';

  import { colorway, bgImage } from "./stores";
  import { colorways, topSites, bgImages } from './data'

  $: brightText = $bgImage.brightText || (typeof $bgImage.brightText === 'undefined' && $colorway.newTab.brightText);
  // initialize app
  onMount(async () => {
    if (browser !== 'undefined') {
      const res = await browser.storage.local.get();
      const { colorwayIndex, bgImageIndex } = res;
      if(typeof colorwayIndex === 'undefined') return;
      else {
        colorway.update(() => colorways[colorwayIndex]);
        bgImage.update(() => bgImages[bgImageIndex]);
      }
    }
  });
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

  :global(main[data-brighttext=true]) {
    --primary-element-color: white;
    --box-hover-outline: 0 0 0 4px rgba(255,255,255,.2);
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
</style>

<main data-brighttext={brightText}>
  <Background />
  <div class="h-group">
    <FirefoxLogo box="96px" />
  </div>
  <div class="h-group">
    <SearchBox />
  </div>
  <div class="top-site-grid h-group">
    {#each topSites as topsite}
      <TopSite {...topsite} />
    {/each}
  </div>
  <Customize />
</main>
