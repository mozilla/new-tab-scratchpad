<!-- svelte-ignore a11y-missing-attribute -->
<script lang="ts">
  export let article
</script>

<style lang="scss">
  .article {
    color: var(--card-color-primary);
    box-shadow: var(--shadow-regular);
    border-radius: var(--border-radius-regular);
    background-color: var(--card-background);
    overflow: hidden;
    .thumbnail {
      height: 148px;
      background-size: cover;
    }
    .info {
      margin: 12px 16px 32px 16px;
      p,
      header {
        margin: 6px 0;
      }
      .domain {
        color: var(--card-color-secondary);
        font-weight: 500;
        font-size: var(--font-size-regular);
      }
      header {
        font-weight: 600;
        font-size: var(--font-size-large);
      }
      .excerpt {
        line-height: 1.4;
        font-size: var(--font-size-regular);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
</style>

<div class="article">
  <div class="thumbnail" style="background-image: url('{article.image_src}')" />
  <div class="info">
    <p class="domain">{article.domain}</p>
    <header>{article.title}</header>
    <p class="excerpt">{article.excerpt}</p>
  </div>
</div>
