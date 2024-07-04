<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Button, GroupButton, type ButtonOption, type IconSource, type Layout } from '.';

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

  const dispatch = createEventDispatcher<{ close: undefined }>();

  $: availableCloseButton = !keepDialog && showCloseButton;

  const closeModal = () => {
    open = false;
    dispatch('close');
  };

  const handleClick = () => {
    !keepDialog && closeModal();
  };
</script>

{#if open}
  <div
    class={['dialog', `is-${layout}`, additionalClass].join(' ')}
    class:is-open={open}
    class:dialog--toast={toast}
    style={`--width: ${width}; --background: ${background};`}
    transition:fade={{ duration: 100 }}
  >
    <span class="dialog__backdrop" aria-hidden="true" on:click={handleClick} />

    <article class="dialog__container">
      <header class="dialog__header">
        {#if layout !== 'fullscreen' && availableCloseButton}
          <button class="dialog__close" on:click={handleClick}>
            <span class="dialog__close-inner">close</span>
          </button>
        {/if}
        <slot name="icon"></slot>
        {#if icon?.src}
          <i class="dialog__icon">
            <img src={icon.src} alt="" width={icon.width} height={icon.height} />
          </i>
        {/if}
        <h1 class="dialog__title">{@html title}</h1>
      </header>

      <div class="dialog__body">
        <slot>
          {@html content}
        </slot>
      </div>

      <GroupButton {footers} {isVerticalLayout}>
        {#if !footers}
          <slot name="footer">
            <Button on:click={closeModal} variant="outline">Confirm</Button>
          </slot>
        {/if}
      </GroupButton>
    </article>

    {#if layout === 'fullscreen' && availableCloseButton}
      <button class="dialog__close dialog__close--fixed" on:click={handleClick}>
        <span class="dialog__close-inner">close</span>
      </button>
    {/if}
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

    &__container {
      overflow: auto;
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

      .is-open & {
        animation: blowUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }

      .dialog--toast & {
        align-self: flex-end;
        width: 100%;
        margin-bottom: 0;
        padding-bottom: env(safe-area-inset-bottom);
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      .is-open.dialog--toast & {
        animation-name: toast;
      }
    }

    &__icon {
      display: block;
      margin: 0 0 16px;
    }

    &__title {
      margin: 0 0 8px;
      font-weight: 700;
      font-size: 20px;
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

      &--fixed {
        position: fixed;
        right: 12px;
        top: 12px;
        margin: 0;

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
      font-weight: 400;
      font-size: 13px;
      line-height: 1.5;
      color: var(--walk__black--700);

      .is-fullscreen & {
        color: #fff;
      }
    }

    :global(.group-button:not(:empty)) {
      margin-top: 24px;
    }
  }

  @keyframes blowUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes toast {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
