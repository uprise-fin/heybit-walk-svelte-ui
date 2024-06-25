<script lang="ts">
	import type { Size } from '..';
	import { svgs, type IconName } from '.';

	export let src: IconName;
	export let color = 'var(--walk__black)';
	export let size: Exclude<Size, 'x-small' | 'x-large'> = 'medium';
</script>

<i class={`icon icon--${size}`} style={`--color: ${color};`}>
	{@html svgs[src]}
</i>

<style lang="scss">
	.icon {
		display: inline-grid;
		place-items: center;
		width: var(--size);
		aspect-ratio: 1;

		&--small {
			--size: 18px;
		}

		&--medium {
			--size: 24px;
		}

		&--large {
			--size: 32px;
		}

		:global(svg) {
			width: 100%;
			height: 100%;
		}

		:global(path) {
			fill: var(--color);
		}
	}
</style>
