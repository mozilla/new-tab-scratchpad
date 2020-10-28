<script lang="ts">
  import ArrowheadIcon from '../assets/icons/arrowhead-down.svg'

  export let value
  export let size = 'thin'
</script>

<style lang="scss">
  .wrapper {
    position: relative;
    box-sizing: border-box;
    border: 1px solid var(--card-color-secondary);
    border-radius: 4px;
    display: inline-block;
    select {
      padding: 3px;
      padding-inline-start: 6px;
      padding-inline-end: 24px;
      appearance: none;
      background: unset;
      width: 100%;
      border: none;
      :global(option) {
        color: initial;
      }
    }
    .arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      &:dir(rtl) {
        right: initial;
        left: 0;
      }
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events:none;
    }
    &.large select {
      padding: 7px;
      padding-inline-start: 10px;
      padding-inline-end: 24px;
    }
  }
</style>

<div class="wrapper {size}">
  <select bind:value={value}>
    <slot />
  </select>
  <div class="arrow">{@html ArrowheadIcon}</div>
</div>
