<script lang="ts" context="module">
  export const walkButtonShapes = ['rounded'] as const;
  export type WalkButtonShape = (typeof walkButtonShapes)[number];
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {
    Loader,
    type HTMLAttributeAnchorTarget,
    type IconSource,
    type Size,
    type Theme
  } from '.';

  export let shape: WalkButtonShape = 'rounded';
  export let size: Size = 'medium';
  export let theme: Theme = 'primary';
  export let label = '';
  export let loading = false;
  export let disabled = false;
  export let href: string | undefined = undefined;
  export let target: HTMLAttributeAnchorTarget | undefined = undefined;
  export let rel: string | undefined = target === '_blank' ? 'noreferrer noopener' : undefined;
  export let icon: IconSource | undefined = undefined;
  export let color = '';

  const el = href ? 'a' : 'button';

  const dispatch = createEventDispatcher<{
    click: Event;
  }>();

  const TRANSITION_DURATION = 300;

  const handleClick = async (e: Event) => {
    dispatch('click', e);
  };

  $: _isDarkTheme = ['primary'].includes(theme);
  $: _color = color || (_isDarkTheme ? '#fff' : 'var(--walk__black)');
  $: _disabled = disabled || loading;
</script>

<svelte:element
  this={el}
  {...$$restProps}
  {href}
  {target}
  {rel}
  disabled={_disabled}
  class={['button', `button--${size}`, `button--${theme}`, `button--${shape}`].join(' ')}
  class:is-loading={loading}
  style={`--color: ${_color}; --border-color: ${color || 'var(--walk__black--300)'}; --transition-duration: ${TRANSITION_DURATION}ms;`}
  role="presentation"
  on:click={handleClick}
>
  {#if loading}
    <Loader color={_color} />
  {/if}
  {#if icon}
    <i class="button__icon">
      <img src={icon.src} alt="" width={icon.width} height={icon.height} />
    </i>
  {/if}
  <slot>
    {label}
  </slot>
</svelte:element>

<style lang="scss">
  @mixin button($color, $hover: $color, $press: $color) {
    background: $color;

    &:hover {
      background: $hover;
    }

    &:active {
      background: $press;
    }
  }

  .button {
    all: unset;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    position: relative;
    white-space: nowrap;
    box-sizing: border-box;
    color: var(--color);
    font-weight: 700;
    text-align: center;
    transition:
      background var(--transition-duration),
      color var(--transition-duration),
      opacity var(--transition-duration);

    &:not(:disabled) {
      cursor: pointer;
    }

    &.is-loading {
      cursor: progress;
      color: transparent !important;

      :global(> *:not(.loader)) {
        visibility: hidden;
      }
    }

    &:disabled:not(.is-loading) {
      color: var(--walk__black--400);
      border: 0;
      pointer-events: none;

      &:not(.button--text) {
        background: var(--walk__black--100);
      }
    }

    &:focus-visible {
      outline: 2px solid -webkit-focus-ring-color;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &--rounded {
      border-radius: 40px;
    }

    &--x-small {
      height: 36px;
      padding-inline: 12px;
      font-size: 13px;
    }

    &--small {
      height: 48px;
      padding-inline: 20px;
      font-size: 15px;
    }

    &--medium {
      height: 52px;
      padding-inline: 24px;
      font-size: 16px;
    }

    &--large {
      gap: 8px;
      height: 60px;
      padding-inline: 28px;
      font-size: 20px;
    }

    &--x-large {
      gap: 8px;
      height: 68px;
      padding-inline: 32px;
      font-size: 24px;
    }

    &--primary {
      @include button(var(--walk__purple), var(--walk__purple--500), var(--walk__purple--700));
    }

    &--secondary {
      @include button(#fff, var(--walk__black--50), var(--walk__black--200));
      border: 1px solid var(--border-color);
    }

    &--tertiary {
      @include button(var(--walk__black--200), var(--walk__black--50), var(--walk__black--200));
    }

    &--text {
      @include button(#fff, var(--walk__black--50), var(--walk__black--100));
    }

    &__icon {
      flex: 0 0 auto;
      font-size: 0;
    }

    :global(.loader) {
      position: absolute;
    }
  }
</style>
