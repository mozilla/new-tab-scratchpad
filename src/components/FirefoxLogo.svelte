<script lang="ts">
  import BrowserLogo from '../assets/firefox-browser-logo.svg'
  import Logo from '../assets/firefox-logo.svg'
  import settings from '../stores/general'
</script>

<style lang="scss">
  div {
    color: var(--color-primary);
    line-height: 0;
  }
</style>

{#if $settings.testing_logo === 0}
  <div>
    {@html BrowserLogo}
  </div>
{:else if $settings.testing_logo === 1}
  <div>
    {@html Logo}
  </div>
{/if}
