<script lang="ts">
  import Checkbox from '../Checkbox.svelte'
  import Select from '../Select.svelte'
  import AbstractUi from '../../assets/abstract-ui/pocket.svg'
  import settings from '../../stores/general'

</script>

<style lang="scss">
  .contentOption {
    :global > :not(:last-child) {
      margin-block-end: 12px;
    }
    .abstractUi {
      text-align: center;
    }
  }
</style>

<section class="contentOption">
  <label for="pocketSwitch" class="hBar">
    <h3 class="fillSpaceAfter">Best of the Web</h3>
    <Checkbox id="pocketSwitch" type="switch" bind:checked={$settings.pocket_enabled} />
  </label>
  <div class="abstractUi">
    {@html AbstractUi}
  </div>
  <p>Exceptional content from across the web, curated by Pocket</p>
  <Select bind:value={$settings.pocket_rows}>
    <option value={1} >1 row</option>
    <option value={2} >2 rows</option>
    <option value={3} >3 rows</option>
    <option value={4} >4 rows</option>
  </Select>
</section>
