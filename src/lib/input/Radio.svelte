<script lang="ts">
</script>

<span class="radio">
  <input class="radio__input" type="radio" {...$$restProps} />
  <span class="radio__bg"></span>
</span>

<style lang="scss">
  .radio {
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

      &:checked + .radio__bg {
        background: var(--walk__primary);

        &::before {
          content: '';
          width: 13px;
          aspect-ratio: 1;
          background: #fff;
          border-radius: inherit;
        }
      }

      &:disabled {
        cursor: not-allowed;

        + .radio__bg {
          background: var(--walk__black--200);

          &::before {
            content: none;
          }
        }
      }
    }

    &__bg {
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      background: var(--walk__black--300);
      border-radius: 50%;
    }
  }
</style>
