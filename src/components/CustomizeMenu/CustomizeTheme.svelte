<script lang="ts">
  import theme from '../../stores/theme'
  import themes from '../../data/themes'

  import ThemeButton from './ThemeButton.svelte'
</script>

<style lang="scss">
  .buttonGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 19px;
  }
</style>

<div class="buttonGrid">
  {#each Object.entries(themes) as [_themeid, _theme] (_themeid)}
    <ThemeButton
      name={_theme.name}
      colors={_theme.previewColors}
      on:click={() => {
        $theme = _themeid
      }}
      selected={_themeid == $theme.id} />
  {/each}
</div>
