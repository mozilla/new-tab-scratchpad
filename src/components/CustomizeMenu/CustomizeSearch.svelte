<script lang="ts">
  import Checkbox from '../Checkbox.svelte'
  import AbstractUi from '../../assets/abstract-ui/search.svg'
  import settings from '../../stores/general'

</script>

<style lang="scss">
  .contentOption {
    :global > :not(:last-child) {
      margin-block-end: 12px;
    }
    p {
      margin-block: 0;
    }
    .abstractUi {
      text-align: center;
    }
  }
</style>

<section class="contentOption">
  <label for="searchSwitch" class="hBar">
    <h3 class="fillSpaceAfter">Web Search</h3>
    <Checkbox id="searchSwitch" type="switch" bind:checked={$settings.search_enabled} />
  </label>
  <div class="abstractUi">
    {@html AbstractUi}
  </div>
  <p>Quick access to your default search engine</p>
</section>
