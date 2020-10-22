<script lang="ts">
  export let icon = null
  export let type = 'secondary'
</script>

<style lang="scss">
  button {
    border-radius: var(--border-radius-regular);
    background: var(--button-secondary-background);
    color: var(--button-secondary-color);
    border: none;
    font-weight: 500;
    padding: 8px 12px;
    display: inline-flex;
    :global(svg) {
      margin-right: 4px;
    }
    &.primary {
      background: var(--button-primary-background);
      color: var(--button-primary-color);
    }
  }
</style>

<button on:click class={type}>
  {#if icon}
    {@html icon}
  {/if}
  <slot />
</button>
