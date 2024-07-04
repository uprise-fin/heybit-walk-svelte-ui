<script lang="ts">
  import { Icon } from '$lib/icon';
</script>

<span class="checkbox">
  <input class="checkbox__input" type="checkbox" {...$$restProps} />
  <span class="checkbox__bg">
    <Icon src="ic/outline/checkmark" color="#fff" />
  </span>
</span>

<style lang="scss">
  .checkbox {
    display: inline-grid;
    place-content: center;
    position: relative;
    width: 24px;
    aspect-ratio: 1;

    &__input {
      position: absolute;
      z-index: 2;
      opacity: 0;
      inset: 0;

      &:not(:disabled) {
        cursor: pointer;
      }

      &:checked + .checkbox__bg {
        background: var(--walk__primary);
      }

      &:disabled {
        cursor: not-allowed;

        + .checkbox__bg {
          background: var(--walk__black--200);

          :global(.icon) {
            opacity: 0;
          }
        }
      }
    }

    &__bg {
      position: absolute;
      inset: 0;
      background: var(--walk__black--300);
      border-radius: 6px;
    }
  }
</style>
