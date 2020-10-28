<script lang="ts">
  import Checkbox from '../Checkbox.svelte'
  import Select from '../Select.svelte'
  import Glados from '../../assets/glados.svg'
  import settings from '../../stores/general'

</script>

<style lang="scss">
  .contentOption {
    :global > :not(:last-child) {
      margin-block-end: 12px;
    }
    .message {
      display: flex;
      align-items: center;
      :global(svg) {
        margin-left: 16px;
      }
      .bubble {
        flex: 1;
        background: var(--card-background);
        border: 1px solid var(--card-color-secondary);
        border-radius: 8px;
        margin: 0 16px;
        padding: 12px;
        line-height: 1.6;
      }
    }
    .optionsGrid {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: 1fr auto;
      align-items: center;
    }
  }
  .enableEnrichment p {
    margin-block: 0;
  }
</style>

{#if $settings.testing_enabled}
<section class="contentOption">
  <label for="testSwitch" class="hBar">
    <h3 class="fillSpaceAfter">Computer-Aided Enrichment</h3>
    <Checkbox id="testSwitch" type="switch" bind:checked={$settings.testing_enabled} />
  </label>
  <div class="message">
    {@html Glados}
    <div class="bubble">Please note that any appearance of danger is merely a device to enhance your testing experience.</div>
  </div>
  <div class="optionsGrid">
    <span>Added site to TopSites</span>
    <Checkbox id="rtl-switch" bind:checked={$settings.topSites_addedItem} />
    <span>RTL</span>
    <Checkbox id="rtl-switch" bind:checked={$settings.testing_rtl} />
    <span>Firefox Logo</span>
    <Select bind:value={$settings.testing_logo}>
      <option value={0} >Firefox Browser</option>
      <option value={1} >Firefox</option>
      <option value={2} >(no logo)</option>
    </Select>
  </div>
</section>
{:else}
  <label for="snippetsSwitch" class="hBar enableEnrichment">
    <p class="fillSpaceAfter">Computer-Aided Enrichment</p>
    <Checkbox id="snippetsSwitch" type="switch" bind:checked={$settings.testing_enabled} />
  </label>
{/if}
