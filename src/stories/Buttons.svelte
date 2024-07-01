<script lang="ts">
	import { Button, sizes, themes as walkButtonThemes, type AsyncCallbackParams } from '$lib';

	const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

	const syncFn = () => {
		console.log('syncFn');
	};

	const asyncFn = async ({ detail }: CustomEvent<AsyncCallbackParams>) => {
		detail.loading = true;
		try {
			await delay(1000);
			console.log('asyncFn');
		} finally {
			detail.done(null);
		}
	};
</script>

<article class="article">
	<Button on:click={asyncFn}>async</Button>
	<Button on:click={syncFn}>sync</Button>

	<section class="section">
		<h2 class="section__title">theme</h2>
		{#each walkButtonThemes as theme}
			<Button {theme}>{theme}</Button>
		{/each}
	</section>

	<section class="section">
		<h2 class="section__title">disabled</h2>
		{#each walkButtonThemes as theme}
			<Button {theme} disabled>{theme}</Button>
		{/each}
	</section>

	<section class="section">
		<h2 class="section__title">loading</h2>
		{#each walkButtonThemes as theme}
			<Button {theme} loading>{theme}</Button>
		{/each}
	</section>

	<section class="section">
		<h2 class="section__title">size</h2>
		{#each sizes as size}
			<Button {size}>{size}</Button>
		{/each}
	</section>
</article>

<style lang="scss">
	.article {
		display: flex;
		flex-flow: wrap column;
		gap: 30px;
	}

	.section {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 10px;

		&__title {
			margin: 0 0 10px;
			text-transform: capitalize;
			flex: 1 0 100%;
		}
	}
</style>
