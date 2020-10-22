<script lang="ts">
  import PreviewSvg from '../../assets/theme-preview.svg'

  export let selected = false
  export let colors: any = null
  export let name = ''
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    button {
      border: 2px solid var(--background-icon);
      padding: 3px;
      background: unset;
      height: 76px;
      border-radius: var(--border-radius-large);
      > div {
        background-color: var(--background-primary);
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: calc(var(--border-radius-large) - 4px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size-verylarge);
      }
      &.selected {
        border-color: var(--card-color-primary);
      }
    }
    .label {
      text-align: center;
      margin-top: 4px;
      font-weight: 500;
    }
  }
</style>

<div class="wrapper">
  <button on:click class:selected>
    {#if colors}
      <div
        class:customColors={colors.toolbarBg}
        style="--toolbarBg: {colors.toolbarBg};
               --toolbarFieldBg: {colors.toolbarFieldBg};
               --background: {colors.background};
               --tabLine: {colors.tabLine};
               --toolbarFieldColor: {colors.toolbarFieldColor};
               --iconColor: {colors.iconColor}">
        {@html PreviewSvg}
      </div>
    {:else}
      <div />
    {/if}
  </button>
  <div class="label">{name}</div>
</div>
