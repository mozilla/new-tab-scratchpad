<script lang="ts">
  import background from '../../stores/background'
  import backgrounds from '../../data/backgrounds'

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
  {#each Object.entries(backgrounds) as [bgid, bg] (bgid)}
    <ThemeButton
      name={bg.name}
      on:click={() => {
        $background = bgid
      }}
      selected={bgid == $background} />
  {/each}
</div>
