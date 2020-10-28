<script lang="ts">
  import Checkbox from '../Checkbox.svelte'
  import Select from '../Select.svelte'
  import AbstractUi from '../../assets/abstract-ui/sites.svg'
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
  <label for="topSitesSwitch" class="hBar">
    <h3 class="fillSpaceAfter">Top Sites</h3>
    <Checkbox id="topSitesSwitch" type="switch" bind:checked={$settings.topSites_enabled} />
  </label>
  <div class="abstractUi">
    {@html AbstractUi}
  </div>
  <p>The sites you visit most</p>
  <Select bind:value={$settings.topSites_rows}>
    <option value={1} >1 row</option>
    <option value={2} >2 rows</option>
    <option value={3} >3 rows</option>
    <option value={4} >4 rows</option>
  </Select>
</section>
