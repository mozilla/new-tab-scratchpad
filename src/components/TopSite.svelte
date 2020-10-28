<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import tippyTopMap from '../data/tippy-top'
  import PinIcon from '../assets/icons/glyph-pin.svg'
  import MoreIcon from '../assets/icons/more.svg'
  import NewIcon from '../assets/icons/new.svg'

  const dispatch = createEventDispatcher();

  export let site = null
</script>

<style lang="scss">
  .wrapper {
    background-color: #00000000;
    transition: background 250ms ease;
    border-radius: var(--border-radius-regular);
    position: relative;
    overflow: hidden;
    button {
      position: absolute;
      right: 2px;
      top: 20px;
      border: none;
      background: unset;
      padding: 0;
      width: 16px;
      height: 16px;
      transition: opacity 250ms ease 50ms;
      opacity: 0;
      &:focus {
        opacity: 1;
      }
    }
    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: var(--shadow-regular);
      border-radius: var(--border-radius-regular);
      background-color: var(--card-background);
      width: 80px;
      height: 80px;
      margin: 20px;
      margin-bottom: 8px;
      .icon {
        width: 48px;
        height: 48px;
        background-size: 100%;
        border-radius: var(--border-radius-small);
        fill: currentColor;
        &.heavy-upscale {
          image-rendering: crisp-edges;
        }
        &.favicon {
          width: 16px;
          height: 16px;
          position: relative;
          &::after {
            content: '';
            display: block;
            position: absolute;
            left: -8px;
            right: -8px;
            top: -8px;
            bottom: -8px;
            border: 2px solid var(--background-icon);
            border-radius: var(--border-radius-small);
          }
        }
        &.empty {
          background: #5e48e5;
          position: relative;
          overflow: hidden;
          > span {
            color: #ffffff;
            transform: rotate(-10deg);
            font-weight: 800;
            font-size: 64px;
            position: absolute;
            text-align: center;
            left: 0%;
            bottom: -40%;
          }
        }
      }
      .add {
        width: 28px;
        height: 28px;
        color: var(--background-icon);
        :global(svg) {
          width: 100%;
          height: 100%;
        }
      }
    }
    .labels {
      margin-top: 8px;
      font-size: var(--font-size-small);
      display: flex;
      flex-direction: column;
      align-items: center;
      align-items: center;
      margin-bottom: 12px;
      span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: calc(80px + 20px);
      }
      .name {
        color: var(--color-primary);
        font-weight: 500;
      }
      .sponsored {
        color: var(--color-secondary);
      }
      :global(svg) {
        top: 0.11em;
        fill: currentColor;
        position: relative;
      }
    }
    &.empty .card {
      margin-bottom: 20px;
    }
    &:hover {
      background-color: #00000009;
      button {
        opacity: 1;
      }
    }
  }
</style>

<div class="wrapper" class:empty={site.name === null}>
  {#if site.name === null}
    <div class="card">
      <div class="add">
        {@html NewIcon}
      </div>
    </div>
  {:else}
    <a draggable="false" href={site.url} class="card">
      {#if tippyTopMap.has(site.id)}
      <div
        class="icon"
        style="background-image: url({tippyTopMap.get(site.id)})" />
      {:else if site.favicon}
        <div
          class="icon"
          style="background-image: url({site.favicon})" />
      {:else}
        <div class="icon empty"><span>{site.name[0].toUpperCase()}</span></div>
      {/if}
    </a>
    <div class="labels">
      <span class="name">{#if site.pinned}
          {@html PinIcon}
        {/if}{site.name}</span>
      {#if site.sponsored}<span class="sponsored">Sponsored</span>{/if}
    </div>
    <button on:click={() => dispatch('unpin')}>{@html MoreIcon}</button>
  {/if}
</div>
