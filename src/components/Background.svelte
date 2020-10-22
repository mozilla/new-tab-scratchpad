<script lang="ts">
  import theme from '../stores/theme'
  import background from '../stores/background'
  import backgrounds from '../data/backgrounds'

  import BackgroundMono from '../assets/shapes/mono.svg'
  import BackgroundColor from '../assets/shapes/color.svg'

  $: selectedBackground = $background === 'auto' ? $theme.defaultBackground : $background
</script>

<style lang="scss">
  div {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: cover;
  }
  .noodlesMono {
    color: var(--background-secondary);
    :global(svg) {
      margin-top: -5em;
      min-width: 100vw;
      object-fit: cover;
    }
  }
  .noodleColor {
    :global(svg) {
      position: absolute;
      bottom: -5em;
      left: -10em;
    }
  }
  .alpenglow {
    background: linear-gradient(180deg, #ff6bba 0%, #ffc999 75%);
    @media (prefers-color-scheme: dark) {
      background: linear-gradient(180deg, #20123a 0%, #291d4f 75%);
    }
  }
</style>

{#if selectedBackground === 'noodlesMono'}
  <div class="noodlesMono">
    {@html BackgroundMono}
  </div>
{:else if selectedBackground === 'noodlesColor'}
  <div class="noodleColor">
    {@html BackgroundColor}
  </div>
{:else if selectedBackground === 'alpenglow'}
  <div class="alpenglow" />
{:else if backgrounds[selectedBackground] && backgrounds[selectedBackground].src}
  <div style="background-image: url('{backgrounds[selectedBackground].src}')" />
{/if}
