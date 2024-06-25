<script lang="ts">
	import { Icon, type IconName } from '$lib';

	export let list: IconName[] = [];

	const copyContent = async (src: string) => {
		try {
			await navigator.clipboard.writeText(src);
			alert('This is the src to be copied');
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};
</script>

<ul class="list">
	{#each list as src}
		<li class="list__item">
			<button class="list__button" on:click={() => copyContent(src)}>
				<Icon {src} />
				<span class="list__name">
					{src.split('/').pop()}
				</span>
			</button>
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
			display: contents;
		}

		&__button {
			display: flex;
			gap: 10px;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			padding: 5px;
			border: 1px solid hsla(203, 50%, 30%, 0.15);
			cursor: pointer;
			background: #fff;

			&:hover {
				transition: 0.3s ease-in-out;
			}

			&:hover :global(.icon) {
				transition: inherit;
				transform: scale(1.5);
			}
		}

		&__name {
			display: block;
		}
	}
</style>
