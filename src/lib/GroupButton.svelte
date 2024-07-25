<script lang="ts">
  import { Button, type ButtonOption } from '.';

  export let isVerticalLayout = false;
  export let footers: Partial<ButtonOption>[] | undefined = undefined;
  export let background = 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)';
</script>

<div class="group-button" style={`--background: ${background}`}>
  <slot />
  <div class="group-button__inner" class:is-vertical={isVerticalLayout}>
    {#if footers}
      {#each footers as footer}
        <Button {...footer} on:click={footer.handler} />
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .group-button {
    --gap: 8px;
    padding-block: 20px;
    background: var(--background);
    text-align: center;

    &__inner {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      gap: var(--gap);

      &.is-vertical {
        flex-direction: column;
      }

      &:not(.is-vertical) :global(.button) {
        flex: 1 1 0;
      }
    }

    :global(.button--text:not(:first-child)) {
      margin-top: calc(-1 * var(--gap));
    }
  }
</style>
