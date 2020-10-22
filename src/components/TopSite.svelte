<script lang="ts">
  import { bubble } from 'svelte/internal'
  import PinIcon from '../assets/icons/glyph-pin.svg'
  import MoreIcon from '../assets/icons/more.svg'
  import NewIcon from '../assets/icons/new.svg'

  export let site = ''
  export let url = null
  export let icon = null
  export let pinned = false
  export let sponsored = false
</script>

<style lang="scss">
  .wrapper {
    background-color: #00000000;
    transition: background 250ms ease;
    border-radius: var(--border-radius-regular);
    position: relative;
    button {
      position: absolute;
      right: 2px;
      top: 20px;
      border: none;
      background: unset;
      padding: 0;
      width: 16px;
      height: 16px;
      transition: opacity 250ms ease 250ms;
      opacity: 0;
    }
    button:focus {
      opacity: 1;
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

<div class="wrapper" class:empty={url === null}>
  <div class="card">
    {#if url === null}
      <div class="add">
        {@html NewIcon}
      </div>
    {:else if icon}
      <div class="icon {icon.size}" style="background-image: url('/sites/{icon.name}')" />
    {:else}
      <div class="icon empty"><span>{site[0].toUpperCase()}</span></div>
    {/if}
  </div>
  {#if url !== null}
    <div class="labels">
      <span class="name">{#if pinned}
          {@html PinIcon}
        {/if}{site}</span>
      {#if sponsored}<span class="sponsored">Sponsored</span>{/if}
    </div>
    <button>{@html MoreIcon}</button>
  {/if}
</div>
