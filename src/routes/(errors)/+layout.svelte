<script lang="ts">
    import '../../app.postcss';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
    import {
		initializeStores,
		getDrawerStore,
	} from '@skeletonlabs/skeleton';

    initializeStores();
	const weddingDrawer = getDrawerStore();

	function drawerOpen(): void {
		weddingDrawer.open({});
	}
	onNavigate((navigation) => {
		//@ts-ignore
		if (!document.startViewTransition) {
			return;
		}
		return new Promise((resolve) => {
			//@ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

</script>
<style lang="postcss">
	:global(body){
		@apply bg-bnm-mobile lg:bg-bnm-bg bg-cover;
	}

</style>

<div class="m-auto p-40">

    <slot />

</div>