<script lang="ts">
  import cachedFetch from '../cachedFetch'
  import Article from './Article.svelte'
  import PocketLogo from '../assets/powered-by-pocket.svg'

  import settings from '../stores/general'

  const AUTH_KEY = '40249-e88c401e1b1f2242d9e441c4'
  const layoutUrl = `https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=${AUTH_KEY}&layout_variant=basic`
  const feedUrl = `https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=${AUTH_KEY}&locale_lang=en-US&count=`

  const topicsPromise = (async () => {
    const res = await cachedFetch(layoutUrl)
    return res.layout[2].components[1].properties.links as { name: string; url: string }[]
  })()

  let articlesPromise

  $: articlesPromise = (async () => {
    const res = await cachedFetch(feedUrl + $settings.pocket_rows * 3)
    return res.recommendations as any
  })()
</script>

<style lang="scss">
  section {
    max-width: var(--widget-max-width);
  }
  .articleGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 19px;
  }

  ul {
    padding: 0;
    li {
      display: inline-block;
      margin: 0;
      &:not(:last-child)::after {
        content: ' ·';
        padding: 6px;
      }
    }
  }
</style>

<section>
  <header class="hBar">
    <h2 class="sectionHeader">Best of the Web</h2>
    <a href="https://getpocket.com/firefox/new_tab_learn_more">Learn more</a>
    <div class="fillSpace">
      {@html PocketLogo}
    </div>
  </header>
  <div class="articleGrid">
    {#await articlesPromise then articles}
      {#each articles as article (article.id)}
        <Article {article} />
      {/each}
    {/await}
  </div>
  <div class="hBar">
    {#await topicsPromise then topics}
      <span>Popular Topics:</span>
      <ul>
        {#each topics as topic (topic.name)}
          <li><a href={topic.url}>{topic.name}</a></li>
        {/each}
      </ul>
    {/await}
    <a
      class="fillSpace"
      href="https://www.mozilla.org/en-US/privacy/firefox/#suggest-relevant-content">Privacy Notice</a>
  </div>
</section>
