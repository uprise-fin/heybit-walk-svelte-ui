<script lang="ts">
  import Loader from './Loader.svelte';

  export let checked = false;
  export let disabled = false;
  export let loading = false;

  $: _disabled = disabled || loading;
</script>

<label class="switch">
  <input
    class="switch__input"
    type="checkbox"
    {checked}
    {...$$restProps}
    disabled={_disabled}
    on:change
  />
  <span class="switch__slider"></span>
  {#if loading}
    <Loader color={checked ? '#fff' : 'var(--walk__primary)'} />
  {/if}
</label>

<style lang="scss">
  .switch {
    overflow: hidden;
    position: relative;
    display: inline-grid;
    vertical-align: middle;
    width: 40px;
    height: 24px;

    &__input {
      opacity: 0;
      width: 0;
      height: 0;

      &:disabled + .switch__slider {
        background: var(--walk__black--200);
        cursor: not-allowed;

        &::before {
          content: none;
        }
      }

      &:checked + .switch__slider {
        background-color: var(--walk__primary);

        &::before {
          transform: translateX(16px);
        }
      }
    }
    &__slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--walk__black--300);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 20px;

      &::before {
        position: absolute;
        content: '';
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: #fff;
        transition: 0.4s;
        border-radius: 100%;
        box-shadow: 0 -2px 5px 0 #00000008;
      }
    }

    :global(.loader) {
      position: absolute;
      inset: 0;
      margin: auto;
    }

    :global(.loader__svg) {
      width: 12px;
    }
  }
</style>
