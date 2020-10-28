<script lang="ts">
  import cachedFetch from '../cachedFetch'
  import { fly } from 'svelte/transition'

  import Button from './Button.svelte'
  import CloseIcon from '../assets/icons/close.svg'

  const snippetUrl =
    'https://snippets.cdn.mozilla.net/us-west/bundles-pregen/Firefox/release/en-us/default.json'

  function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const snippetPromise = (async () => {
    const res = await cachedFetch(snippetUrl, {
      expiryTime: 24,
    })

    while (true) {
      const randomIndex = randomInt(0, res.messages.length - 1)
      if (res.messages[randomIndex].template === 'simple_snippet') {
        return res.messages[randomIndex].content
      }
    }
  })()
</script>

<style lang="scss">
  .wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    color: var(--card-color-primary);
    box-shadow: var(--shadow-verylarge);
    background-color: var(--card-background);
  }
  section {
    max-width: calc(var(--widget-max-width) + 32px * 2);
    margin: 0 auto;
    padding: 16px 32px;
    img {
      width: 42px;
      height: 42px;
    }
    .textContent {
      a {
        display: block;
        margin: 4px 0;
        color: var(--card-color-secondary);
      }
      p {
        margin: 4px 0;
      }
    }
    :global(.snippetButton) {
      flex-shrink: 0;
    }
    .closeButton {
      width: 16px;
      height: 16px;
      background: unset;
      border: none;
    }
  }
  .snippetMargin {
    height: 3em;
  }
</style>

<div transition:fly={{ duration: 250, y: 200 }} class="wrapper">
  {#await snippetPromise then snip}
    <section class="hBar bigMargin moveWhenCustomize">
      {#if snip.icon}<img src={snip.icon} alt="" />{/if}
      <div class="textContent fillSpaceAfter">
        <a href={snip.section_title_url}>{snip.section_title_text}</a>
        <p>{snip.text}</p>
      </div>
      {#if snip.button_label}
        <Button class="snippetButton">{snip.button_label}</Button>
      {/if}
      <button class="closeButton">{@html CloseIcon}</button>
    </section>
  {/await}
</div>
<div class="snippetMargin" />
