<script>
  import { colorway } from "./../stores";
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
    /* background-image: var(--bg-image); */
    background-position: center 60%;
  }
</style>

<div style="--bg-color: {$colorway.newTab.backgroundColor};" />
