<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Icon } from '..';

  export let id = '';
  export let disabled = false;
  export let readonly = false;
  export let value = '';
  export let errorMessages: string[] = [];
  export let label = '';
  export let clearable = true;
  export let descriptions: string[] = [];
  export let required = false;
  export let height = '48px';

  const dispatcher = createEventDispatcher<{
    input: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    };
  }>();

  $: hasError = errorMessages?.length;

  let inputEl: HTMLInputElement;

  const randomId = Math.random().toString(36).slice(2);
  const _id = id || randomId;

  const clear = () => {
    value = '';
    inputEl.focus();
  };

  $: messages = errorMessages?.length ? errorMessages : descriptions;
</script>

<div class="input-wrap" style={`--height: ${height}`}>
  {#if label}
    <label class="input-wrap__label" class:input-wrap__label--error={hasError} for={_id}>
      {label}
      {#if required}
        <em class="input-wrap__required">
          <Icon src="img/fill/important" color="var(--walk__warning--600)" />
        </em>
      {/if}
    </label>
  {/if}
  <div class="input" class:input--error={hasError} class:input--disabled={disabled || readonly}>
    <span class="input__prefix">
      <input
        bind:this={inputEl}
        bind:value
        {...$$restProps}
        class="input__el"
        id={_id}
        {disabled}
        {readonly}
        {required}
        on:input={(event) => dispatcher('input', event)}
        on:focus
        on:blur
      />
      {#if clearable && value && !disabled && !readonly}
        <button type="button" class="input__clear" on:click={clear}>
          <span class="input__clear-inner">clear</span>
        </button>
      {/if}
    </span>
    <span class="input__suffix"><slot /></span>
  </div>

  {#if !!messages?.length}
    <div class="messages" class:messages--error={hasError}>
      {#each messages as message}
        <p class="messages__item">{message}</p>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-wrap {
    --color: var(--walk__black);
    color: var(--color);

    &__label {
      display: flex;
      align-items: center;
      gap: 4px;
      margin: 0 0 4px;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5;
    }

    &__required {
      display: contents;

      :global(.icon) {
        width: 6px;
      }
    }
  }

  .input {
    --padding: 16px;
    display: flex;
    align-items: center;
    padding-inline: var(--padding);
    outline: 1px solid var(--walk__black--300);
    border-radius: 12px;
    background: #fff;
    transition: outline 0.1s;

    &:focus-within:not(.input--disabled) {
      outline-color: var(--walk__black);
    }

    &--disabled {
      background: var(--walk__black--100);
    }

    &--error {
      outline: 1px solid var(--walk__warning--500) !important;
    }

    &__prefix {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
    }

    &__el {
      box-sizing: border-box;
      width: 100%;
      height: var(--height);
      padding-block: var(--padding);
      background: none;
      border: 0;
      outline: 0;
      font-size: 15px;
      line-height: 1.2;
      color: inherit;
      caret-color: var(--walk__black);

      &::placeholder {
        -webkit-text-fill-color: var(--walk__black--400);
      }

      &:read-only,
      &:disabled {
        -webkit-text-fill-color: var(--walk__black--500);
      }
    }

    &__clear {
      all: unset;
      opacity: 0;
      flex: 0 0 auto;
      margin: 0 0 0 10px;
      padding: 4px;
      font-size: 0.1em;
      color: var(--walk__black--200);
      cursor: pointer;

      .input:focus-within & {
        opacity: 1;
      }
    }

    &__clear-inner {
      display: inline-grid;
      place-items: center;
      position: relative;
      width: 20px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: var(--walk__black--500);
      text-indent: -9999px;
      font-size: 0.1em;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 10px;
        border-radius: 4px;
        background: #fff;
      }

      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }

    &__suffix {
      display: grid;
      place-items: center;
      color: var(--on-neutral-caption);

      &:not(:empty) {
        margin: 0 0 0 8px;
      }
    }
  }

  .messages {
    --color: var(--walk__black);
    margin: 4px 0 0;
    color: var(--color);
    font-size: 12px;
    line-height: 1.5;

    &--error {
      --color: var(--walk__warning--500);
    }

    &__item {
      position: relative;
      margin: 0;
      padding: 0 0 0 14px;

      &::before {
        content: '';
        position: absolute;
        left: 4px;
        top: 7px;
        width: 3px;
        aspect-ratio: 1;
        border-radius: 100%;
        background: var(--color);
      }
    }
  }
</style>
