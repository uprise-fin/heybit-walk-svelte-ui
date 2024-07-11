<script lang="ts">
  import { Button, type ButtonOption } from '.';

  export let isVerticalLayout = false;
  export let footers: Partial<ButtonOption>[] | undefined = undefined;
</script>

<div class="group-button" class:is-vertical={isVerticalLayout}>
  <slot />
  {#if footers}
    {#each footers as footer}
      <Button {...footer} on:click={footer.handler} />
    {/each}
  {/if}
</div>

<style lang="scss">
  .group-button {
    --gap: 8px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: var(--gap);
    padding-block: 20px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);

    :global(.button--text:not(:first-child)) {
      margin-top: calc(-1 * var(--gap));
    }

    &:not(.is-vertical) :global(.button) {
      flex: 1 1 0;
    }

    &.is-vertical {
      flex-direction: column;
    }
  }
</style>
