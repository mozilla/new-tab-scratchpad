<script lang="ts">
  import { flip } from 'svelte/animate';
  import { tick } from 'svelte';
  import { dndzone } from 'svelte-dnd-action'

  import TopSite from './TopSite.svelte'
  import topSites from '../stores/top-sites'
  import settings from '../stores/general'

  import watchMedia from '../watchMedia'

  const watchWidthLarge = watchMedia('(max-width: 1024px)')
  const watchWidthMedium = watchMedia('(max-width: 760px)')

  let tileNumber
  $: if ($watchWidthMedium) {
    tileNumber = 8 * $settings.topSites_rows
  } else if ($watchWidthLarge) {
    tileNumber = 6 * $settings.topSites_rows
  } else {
    tileNumber = 8 * $settings.topSites_rows
  }

  // Everything below is horrible
  function handleDndConsider(e) {
    localTopSites = e.detail.items
  }
  function handleDndFinalize(e) {
    // Discard action f a null-object was dropped
    if (e.detail.info.id.startsWith('__null')) {
      localTopSites = localTopSites
      return
    }

    // If the new index is the same as the old one, don't pin it
    const findFn = (item) => item.id === e.detail.info.id
    const index = (e.detail.items as any).findIndex(findFn)
    if (index === $topSites.findIndex(findFn)) {
      localTopSites = localTopSites
      return
    }

    e.detail.items[index].pinned = true
    $topSites = e.detail.items
  }

  function unpin(index) {
    (localTopSites as any)[index].pinned = false
    $topSites = (localTopSites as any)
  }

  function generateEmpty(number) {
    if (number < 1) {
      return []
    }
    return Array(number + 1)
      .fill()
      .map((item, index) => ({ id: `__null${index}__`, name: null }))
  }

  let localTopSites = []
  let flipDurationMs = 0

  $: {
    let ts = [...$topSites]
    if (!$settings.topSites_addedItem && $topSites[tileNumber - 1] && !$topSites[tileNumber - 1].pinned) {
      ts = ts.splice(0, tileNumber - 1)
    }
    localTopSites = [...ts, ...generateEmpty(tileNumber - ts.length)]
    // Prevents weird animation on start
    if ($topSites.length > 0) {
      tick().then(() => flipDurationMs = 250)
    }
  }
</script>

<style lang="scss">
  section {
    display: grid;
    align-items: flex-start;

    grid-template-columns: repeat(8, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
    }
    @media (max-width: 760px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 370px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &:focus, > div:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px highlight;
      border-radius: var(--border-radius-regular);
    }
  }
</style>

<section
  use:dndzone={{ items: localTopSites, flipDurationMs, dropTargetStyle: {} }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}>
  {#each localTopSites.slice(0, tileNumber) as data, i (data.id)}
    <div animate:flip="{{duration: flipDurationMs}}">
      <TopSite on:unpin={() => unpin(i)} site={data} />
    </div>
  {/each}
</section>
