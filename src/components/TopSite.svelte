<script>
  export let url = "https://example.com";
  export let icon = null;
  export let title = "Example";
  export let sponsored = false

  import MeatballIcon from './svg/MeatballIcon.svelte';
  import {randomColor} from '../utils';
  const bg = randomColor();
  const handleClick = () => {
    window.location.href = url;
  }
</script>

<style>
  .top-site {
    position: relative;
    padding: var(--ts-pad) 0 0;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background 125ms;
  }

  .top-site:hover {
    background: #0001;
  }

  .ts-icon {
    width: var(--ts-icon-box);
    height: var(--ts-icon-box);
    background: salmon;
    border-radius: var(--base-border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ts-icon-inner {
    color: white;
    font-size: 48px;
    font-family: sans-serif;
    margin-top: 8px;
  }

.ts-text {
  font: message-box;
  font-size: 12px;
  margin: 8px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.ts-sponsored {
  opacity: .4;
}
.ts-control {
  opacity: 0;
  transition: opacity 125ms;
  transition-delay: 250ms;
  position: absolute;
  transform: rotate(90deg);
  width:  var(--ts-pad);
  height: var(--ts-pad);
  background-repeat: no-repeat;
  background-position: center;
  top: var(--ts-pad);
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-site:hover .ts-control {
  opacity: 1;
}

</style>

<div class="top-site" on:click={handleClick}>
  <div class="ts-icon" style={`background: ${bg}`}>
    <div class="ts-icon-inner">{title.substr(0,1)}</div>
  </div>
  <div class="ts-text">
    <div class="ts-title">{title}</div>
    {#if sponsored}<div class="ts-sponsored">Sponsored</div>{/if}
  </div>
  <div class="ts-control"><MeatballIcon/></div>
</div>

