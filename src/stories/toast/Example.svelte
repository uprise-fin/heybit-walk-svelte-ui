<script lang="ts">
	import { Button, Toast, showToast } from '$lib';
</script>

<Button label="Click" on:click={() => showToast('Show toast')} />

<Toast />
