<script lang="ts">
  import { svgs, type IconName } from '.';
  import type { Size } from '..';

  export let src: IconName;
  export let color = 'var(--walk__black)';
  export let size: Size = 'small';
</script>

<i class={`icon icon--${size}`} style={`--color: ${color};`}>
  {@html svgs[src]}
</i>

<style lang="scss">
  .icon {
    display: inline-grid;
    place-items: center;
    width: var(--size);
    aspect-ratio: 1;

    &--x-small {
      --size: 18px;
    }

    &--small {
      --size: 24px;
    }

    &--medium {
      --size: 26px;
    }

    &--large {
      --size: 32px;
    }

    &--x-large {
      --size: 44px;
    }

    :global(svg) {
      width: 100%;
      height: 100%;
    }

    :global(path) {
      fill: var(--color);
    }
  }
</style>
