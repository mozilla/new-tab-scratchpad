<script lang="ts">
  import { fly } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  import Button from '../Button.svelte'
  import CustomizeBackground from './CustomizeBackground.svelte'
  import CustomizeTheme from './CustomizeTheme.svelte'
</script>

<style lang="scss">
  aside {
    position: fixed;
    z-index: 100;
    right: 0;
    top: 0;
    bottom: 0;
    width: 432px;
    max-width: 100vw;
    color: var(--card-color-primary);
    background: var(--card-background);
    box-shadow: var(--shadow-verylarge);
    // This is gonna look ugly (2 scrollbars side by side)
    overflow: auto;
  }

  section {
    margin: 32px;
    margin-top: 0;
    h2 {
      font-weight: 600;
      font-size: var(--font-size-large);
    }
  }

  .buttonRow {
    padding: 12px;
    text-align: right;
  }
</style>

<aside transition:fly={{ duration: 250, x: 200 }}>
  <div class="buttonRow">
    <Button on:click={() => dispatch('close')} type="primary">Done</Button>
  </div>
  <section>
    <h2>Theme</h2>
    <CustomizeTheme />
  </section>
  <section>
    <h2>Home Background</h2>
    <CustomizeBackground />
  </section>
  <section>
    <h2>Home Content</h2>
  </section>
</aside>
