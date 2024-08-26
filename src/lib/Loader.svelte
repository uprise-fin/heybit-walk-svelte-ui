<script lang="ts">
  export let color = '#fff';
  export let background = 'transparent';
</script>

<i class="loader" style={`--color: ${color}; --background: ${background}`}>
  <svg class="loader__svg" viewBox="0 0 50 50">
    <circle class="loader__circle" cx="25" cy="25" r="20" fill="none" stroke-width="7" />
  </svg>
</i>

<style lang="scss">
  .loader {
    display: inline-grid;
    place-items: center;
    width: min(100%, 40px);
    aspect-ratio: 1;
    background: var(--background);
    border-radius: 100%;

    &__svg {
      width: 55%;
      animation: rotate 2s linear infinite;
    }
    &__circle {
      stroke: var(--color);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>
