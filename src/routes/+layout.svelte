<script lang="ts">
	import '../app.postcss';
	import { onNavigate } from '$app/navigation';
	import {
		initializeStores,
		Modal,
		Drawer,
		getDrawerStore,
	} from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fbApp } from '$lib/firebase/firebase.app';
	import Navigation from '$lib/Navigation.svelte';
	import bg_standard from '$lib/assets/bnm_bg.jpg';
	import bg_mobile from '$lib/assets/bnm_bg_mobile.jpg';

	export let data;
	$: pathname = data.pathname

	let wedding_links: string[][] = [
		['Home', '/'],
		['About', '/about'],
		['Reserve', '/rsvp'],
		['Memories', '/memories'],
		['Links', '/links']
	];
	// console.log(wedding_links);

	initializeStores();
	const weddingDrawer = getDrawerStore();

	function drawerOpen(): void {
		weddingDrawer.open({});
	}

	onMount(() => {
		fbApp;
	});

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
<div>
{#key pathname}
	<div
	in:fade={{ easing: cubicIn, duration:700, delay:500}} 
	out:fade={{ easing: cubicOut, duration:500, delay:100}}
	>
		<slot />
	</div>
{/key}
</div>
</main>