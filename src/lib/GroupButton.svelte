<script lang="ts">
  import { Button, type ButtonOption } from '.';

  export let isVerticalLayout = false;
  export let footers: Partial<ButtonOption>[] | undefined = undefined;
</script>

<div class="group-button" class:is-vertical={isVerticalLayout}>
  {#if !footers}
    <slot />
  {:else}
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
