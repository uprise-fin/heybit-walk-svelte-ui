<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { GroupButton, type ButtonOption, type IconSource, type Layout } from '.';

  export let open = false;
  export let width = '310px';
  export let toast = false;
  export let title = '';
  export let content = '';
  export let keepDialog = false;
  export let isVerticalLayout = false;
  export let layout: Layout = 'centered';
  export let showCloseButton = true;
  export let footers: Partial<ButtonOption>[] | undefined = undefined;
  export let background = layout === 'fullscreen' ? 'transparent' : '#fff';
  export let icon: Partial<IconSource> | undefined = undefined;
  export { additionalClass as class };

  let additionalClass = '';

  let shakeAnimation = false;

  const defaultIconSize = 100;

  const dispatch = createEventDispatcher<{ close: undefined }>();

  $: availableCloseButton = !keepDialog && showCloseButton;

  const closeModal = () => {
    open = false;
    dispatch('close');
  };

  const unableToClose = () => {
    shakeAnimation = true;
  };

  const handleClick = () => {
    keepDialog ? unableToClose() : closeModal();
  };
</script>

{#if open}
  <div
    class={['dialog', `is-${layout}`, additionalClass].join(' ')}
    class:is-shake={shakeAnimation}
    class:dialog--toast={toast}
    style={`--width: ${width}; --background: ${background};`}
  >
    <span class="dialog__backdrop" aria-hidden="true" on:click={handleClick} />

    <article class="dialog__container">
      <header class="dialog__header">
        {#if layout !== 'fullscreen' && availableCloseButton}
          <button class="dialog__close" on:click={closeModal}>
            <span class="dialog__close-inner">close</span>
          </button>
        {/if}
        <slot name="icon"></slot>
        {#if icon?.src}
          <i class="dialog__icon">
            <img
              src={icon.src}
              alt=""
              width={icon.width || defaultIconSize}
              height={icon.height || defaultIconSize}
            />
          </i>
        {/if}
        <h1 class="dialog__title">{@html title}</h1>
      </header>

      <div class="dialog__body">
        {@html content}
        <slot></slot>
      </div>

      {#if footers?.length}
        <GroupButton {footers} {isVerticalLayout} background="none" />
      {/if}

      {#if layout === 'fullscreen' && availableCloseButton}
        <button class="dialog__close dialog__close--fullscreen" on:click={closeModal}>
          <span class="dialog__close-inner">close</span>
        </button>
      {/if}
    </article>
  </div>
{/if}

<style lang="scss">
  .dialog {
    --padding-block: 24px;

    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    &--toast {
      margin-top: env(safe-area-inset-top);
    }

    &__backdrop {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: #000;
      opacity: 0.4;

      .is-fullscreen & {
        opacity: 0.8;
      }
    }

    &.is-fullscreen {
      :global(.group-button__inner.is-vertical) {
        display: inline-flex;
        min-width: 120px;
      }
    }

    &__container {
      display: flex;
      flex-flow: column;
      box-sizing: border-box;
      position: relative;
      width: min(calc((100% - 6px) - 2em), var(--width));
      max-height: calc((100% - 6px) - 2em);
      margin: auto;
      padding: var(--padding-block) 20px;
      border-radius: 28px;
      background: var(--background);

      :not(.is-padded) & {
        text-align: center;
      }

      .dialog--toast & {
        align-self: flex-end;
        width: 100%;
        margin-bottom: 0;
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      .is-shake & {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
      }
    }

    &__icon {
      display: block;
      margin: 0 0 16px;
    }

    &__title {
      margin: 0 0 8px;
      font-weight: 700;
      font-size: 22px;
      line-height: 1.4;
      color: var(--walk__black);

      &:empty {
        display: none;
      }

      .is-fullscreen & {
        color: #fff;
      }
    }

    &__close {
      --size: 32px;
      all: unset;
      cursor: pointer;
      position: relative;
      width: var(--size);
      height: var(--size);
      margin: -10px -6px 0 0;
      padding: 2.67px;
      box-sizing: border-box;
      float: right;
      vertical-align: middle;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 2.4px;
        height: 14px;
        margin: auto;
        background: var(--walk__black--600);
        border-radius: 4px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }

      + :global(*) {
        clear: both;
      }

      &--fullscreen {
        flex: 0 0 auto;
        float: none;
        display: block;
        margin: 24px auto 0;

        &::before,
        &::after {
          background: #fff;
        }

        .dialog__close-inner {
          background: var(--walk__black--700);
        }
      }
    }

    &__close-inner {
      display: block;
      height: 100%;
      background: var(--walk__black--200);
      border-radius: 100%;
      color: transparent;
      font-size: 0.1em;
    }

    &__body {
      overflow: auto;
      font-weight: 400;
      font-size: 13px;
      line-height: 1.5;
      color: var(--walk__black--700);

      .is-fullscreen & {
        color: #fff;
      }
    }

    :global(.group-button) {
      padding: 0;
    }

    :global(.group-button:not(:empty)) {
      margin-top: 24px;
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
