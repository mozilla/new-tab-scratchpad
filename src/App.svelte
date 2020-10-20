<script>
  import { topSitesData, pocketData } from './data/index.js'
  import Background from './components/Background.svelte';
  import Customizer from './components/Customizer.svelte';
  import FirefoxLogo from './components/FirefoxLogo.svelte'
  import PocketCard from './components/PocketCard.svelte';
  import SearchBox from './components/SearchBox.svelte'
  import TopSite from './components/TopSite.svelte';
  import PocketIcon from './components/svg/PocketIcon.svelte';
</script>

<style>
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 184px auto;
    min-height: 100vh;
    position: relative;
    width: 960px;
  }

  .top-site-grid {
    display: grid;
    grid-template-columns: repeat(var(--ts-column-count), var(--ts-width));
    grid-template-rows: repeat(1, 166px);
    margin: calc(5 * var(--base-grid)) 0 calc(5 * var(--base-grid));
  }

  .pocket-grid {
    padding: 0 var(--ts-pad);
    display: grid;
    grid-gap: 36px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .pocket-section-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 calc(var(--base-grid) * 1.5);
  }

  h3,
  h4 {
    margin: 0;
  }

  h3 {
    font-size: 15px;
  }

  h3 a {
    margin-left: 10px;
    font-size: 14px;
  }

  h4 {
    font-size: 12px;
    font-weight: normal;
  }

  h4 span {
    font-weight: 700;
  }

  .pi {
    position: relative;
    top: 4px;
    margin: 0 4px 0 2px;
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
  <div class="pocket-section-header">
    <h3>Best of the Web<a href="#">Learn More</a></h3>
    <h4>Powered by <span class="pi"><PocketIcon/></span><span>Pocket</span></h4>
  </div>
  <div class="pocket-grid">
    {#each pocketData as pocket}
      <PocketCard />
    {/each}
  </div>
</main>
