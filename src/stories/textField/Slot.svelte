<script lang="ts">
  import { Icon, TextField } from '$lib';
</script>

<TextField>
  <div class="suffix">
    <span class="timer"> 00:55 </span>
    <button type="button">
      <Icon src="ic/outline/send" />
    </button>
  </div>
</TextField>

<style lang="scss">
  .suffix {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .timer {
    color: var(--walk__warning--600);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }

  button {
    all: unset;
    cursor: pointer;
    line-height: 0.1em;
  }
</style>
