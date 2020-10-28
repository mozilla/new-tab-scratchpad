<script lang="ts">
  export let type = 'checkbox'
  export let id = ''
  export let checked = false
  export let disabled = false
</script>

<style lang="scss">
  input {
    appearance: none;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);

    &.radio,
    &.checkbox,
    &.switch {
      height: 16px;
      background: #e9e9e9;
      padding: 4px;
      &::before {
        content: '';
        display: block;
      }
      &:checked {
        background: highlight;
      }
    }

    &.radio,
    &.checkbox {
      width: 16px;
      background: #e9e9e9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.radio,
    &.switch {
      border-radius: 8px;
      &:checked::before {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #ffffff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
      }
    }
    &.checkbox {
      padding: 2px;
      &:checked::before {
        width: 12px;
        height: 12px;
        background: url('/checkmark.svg');
      }
    }

    &.switch {
      width: 26px;
      &::before {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #ffffff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
        transition: margin-inline-start 250ms ease;
      }
      &:checked::before {
        margin-inline-start: 10px;
      }
      &:active::before {
        margin-inline-start: 5px;
      }
    }
  }
</style>

<input {id} bind:checked {disabled} on:change class={type} type="checkbox" />
