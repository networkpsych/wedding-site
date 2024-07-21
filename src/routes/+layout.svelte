<script lang="ts">
	import { onMount } from 'svelte';
	import {
    initializeStores,
    Drawer, getDrawerStore,
	Toast,
	} from '@skeletonlabs/skeleton';
	import { page } from '$app/stores'

	export let data;
	$: ({ session, supabase } = data);
	initializeStores();

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		});

		return () => data.subscription.unsubscribe();

	});

	import '../app.postcss';
	import { invalidate, onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import Navigation from '$lib/Navigation.svelte';


	
	$: pathname = $page.url.pathname
	
	let wedding_links: string[][] = [
		['Home', '/'],
		['About', '/about'],
		['Reserve', '/rsvp'],
		['Memories', '/memories'],
		['Registry', '/registry']
	];

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
		@apply bg-cover bg-bnm-mobile lg:bg-bnm-bg;
	}
</style>
<Drawer
	position='top'
	bgDrawer='variant-glass-surface'
	bgBackdrop='bg-none'
	opacityTransition={true}
	>
<Navigation links={wedding_links} />
</Drawer>
<header class="m-3 py-5">
	<div class="flex items-center lg:invisible">
		<button class="lg:hidden btn btn-lg mr-4" on:click={drawerOpen}>
		<span>
			<svg viewBox="0 0 100 80" class="fill-tertiary-800 w-8 h-8">
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
		</span>
		</button>
	</div>
	<div class="invisible lg:visible">
		<Navigation links={wedding_links}/>
	</div>
</header>
<main>
<div >
	{#key pathname}
		<div
		in:fade={{ easing: cubicIn, duration:500, delay:400}}
		class="overflow-auto"
		>
			<slot />
		</div>
	{/key}
	<Toast position="t" />
</div>
</main>