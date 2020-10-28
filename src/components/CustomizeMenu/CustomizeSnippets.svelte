<script lang="ts">
  import Checkbox from '../Checkbox.svelte'
  import AbstractUi from '../../assets/abstract-ui/snippets.svg'
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
  <label for="snippetsSwitch" class="hBar">
    <h3 class="fillSpaceAfter">Snippets</h3>
    <Checkbox id="snippetsSwitch" type="switch" bind:checked={$settings.snippets_enabled} />
  </label>
  <div class="abstractUi">
    {@html AbstractUi}
  </div>
  <p>Updates from Mozilla and Firefox</p>
</section>
