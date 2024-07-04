<script lang="ts">
  import { Icon, sizes } from '$lib';

  const src = 'ic/outline/arrow-right';

  const width = {
    'x-small': 18,
    small: 24,
    medium: 26,
    large: 32,
    'x-large': 44
  };
</script>

<ul class="list">
  {#each sizes as size}
    <li class="list__item">
      <Icon {src} {size} />
      <span class="list__name">
        {size}
      </span>
      <span class="list__width">
        {`${width[size]}px`}
      </span>
    </li>
  {/each}
</ul>

<style lang="scss">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-auto-rows: minmax(80px, auto);
    grid-gap: 5px;
    list-style: none;
    margin: -1px;
    padding: 0;

    &__item {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
  }
</style>
