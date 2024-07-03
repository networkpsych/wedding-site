<script lang="ts">
	import { fade } from 'svelte/transition';
	import warning_icon from '$lib/assets/icons/warning-alert-svgrepo-com.svg';
	import { onDestroy } from 'svelte';

	onDestroy(() => console.log('Error ack'));
</script>

<div class="static flex justify-center">
	<aside
		class="alert variant-glass-warning h-[200px] w-[400px]"
		transition:fade|local={{ duration: 300 }}
	>
		<div>
			<img class="size-14" src={warning_icon} alt="warning symbol" />
		</div>
		<div>
			<span class="text-2xl font-bold">Warning</span>
			<p class="font-bold">
				The uploads have paused. Please wait to upload the photos, or try again later.
			</p>
		</div>
		<slot />
	</aside>
</div>
