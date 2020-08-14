<script>
  import { theme } from "./../stores";

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
    background-image: var(--bg-image);
  }
</style>

<div style="--bg-color: {$theme.primary}; --bg-image: {$theme.image}">
</div>