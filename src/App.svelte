<script>
import FirefoxLogo from './components/FirefoxLogo.svelte'
import SearchBox from './components/SearchBox.svelte'
import Customizer from './components/Customizer.svelte';
import Background from './components/Background.svelte';
import TopSite from './components/TopSite.svelte';

import { topSitesData } from './data/index.js'

</script>

<style>
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    min-height: 100vh;
    position: relative;
    width: 960px;
  }

  .top-site-grid {
    display: grid;
    grid-template-columns: repeat(var(--ts-column-count), var(--ts-width));
    grid-template-rows: repeat(2, 166px);
    margin: calc(5 * var(--base-grid)) 0 calc(5 * var(--base-grid));
  }
</style>

<Customizer />

<main>
  <Background/>
  <FirefoxLogo/>
  <SearchBox />
  <div class="top-site-grid">
    {#each topSitesData as ts}
      <TopSite title={ts.title} url={ts.url} />
    {/each}
  </div>
  <!--TOP SITES-->
  <!--POCKET-->
  <!--HIGHLIGHTS-->
  <!--SNIPPET-->
</main>
