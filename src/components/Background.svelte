<script>
  import { colorway, bgImage } from "./../stores";
</script>

<style>
  div {
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: var(--bg-color);
  }
</style>

{#if bgImage.mage === null}
  <div style="--bg-color: {$colorway.newTab.backgroundColor};" />
{:else}
  <div style={`
    --bg-color: ${$colorway.newTab.backgroundColor};
    background-image: ${$bgImage.image};
    background-position: ${$bgImage.position};
  `}/>
{/if}