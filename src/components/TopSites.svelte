<script lang="ts">
  import TopSite from './TopSite.svelte'

  let tileNumber = 8

  const siteData = [
    {
      site: 'Google',
      url: 'https://google.com/',
      icon: {
        size: 'large',
        name: 'google.png',
      },
      pinned: true,
      sponsored: true,
    },
    {
      site: 'Amazon',
      url: 'https://amazon.com/',
      icon: {
        size: 'large',
        name: 'amazon.png',
      },
      pinned: true,
      sponsored: true,
    },
    {
      site: 'mail.google',
      url: 'https://mail.google.com/',
      icon: {
        size: 'large',
        name: 'googlemail.png',
      },
      pinned: true,
      sponsored: false,
    },
    {
      site: 'app.slack',
      url: 'https://jwels.berlin/',
      icon: {
        size: 'favicon',
        name: 'slack.png',
      },
      pinned: false,
      sponsored: false,
    },
    {
      site: 'addons.mozilla',
      url: 'https://addons.mozilla.org/',
      icon: null,
      pinned: false,
      sponsored: false,
    },
    {
      site: 'app.grammarly',
      url: 'https://app.grammarly.com/',
      icon: {
        size: 'large',
        name: 'gramamrly.png',
      },
      pinned: false,
      sponsored: false,
    },
  ]
</script>

<style lang="scss">
  section {
    display: flex;
    align-items: flex-start;
  }
</style>

<section>
  {#each siteData as data (data.url)}
    <TopSite {...data} />
  {/each}
  {#each { length: Math.max(0, tileNumber - siteData.length) } as _, i}
    <TopSite />
  {/each}
</section>
