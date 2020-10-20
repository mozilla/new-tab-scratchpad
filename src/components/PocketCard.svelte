<script>
  import { randomColor } from '../utils';
  import MeatballIcon from './svg/MeatballIcon.svelte';
  const bg = randomColor();
  const handleClick = () => {
    window.location.href = url;
  }
</script>

<style>
.pocket-unit {
  background: white;
  border-radius: 8px;
  height: 338px;
  width: 296px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: box-shadow 250ms;
}

.pocket-unit:hover {
  box-shadow: 0 0 0 4px #0001;
}


.pocket-img {
  height: 148px;
  opacity: .5;
}

.pocket-control {
  background-position: center;
  background-repeat: no-repeat;
  height: var(--ts-pad);
  opacity: 0;
  position: absolute;
  transform: rotate(90deg);
  transition-delay: 250ms;
  transition: opacity 125ms;
  width:  var(--ts-pad);
  top: 4px;
  right: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pocket-unit:hover .pocket-control {
  opacity: 1;
  background: rgba(12, 12, 13, .1);
}
</style>

<div class="pocket-unit">
  <div class="pocket-img" style={`background: ${bg}`}></div>
  <div class="pocket-control"><MeatballIcon/></div>
</div>