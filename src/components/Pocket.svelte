<script lang="ts">
  import Article from './Article.svelte'
  import articles from '../data/articles'
</script>

<style lang="scss">
  section {
    max-width: 920px;
  }
  .articleGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 19px;
  }
</style>

<section>
  <header>
    <h2 class="sectionHeader">Best of the Web</h2>
  </header>
  <div class="articleGrid">
    {#each articles.slice(0, 6) as article (article.id)}
      <Article {article} />
    {/each}
  </div>
</section>
