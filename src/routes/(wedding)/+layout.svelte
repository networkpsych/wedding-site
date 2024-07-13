<script lang="ts">
	import '../../app.postcss';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import {
		initializeStores,
		Drawer,
		getDrawerStore,
	} from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fbApp } from '$lib/firebase/firebase.app';
	import Navigation from '$lib/Navigation.svelte';

	$: currMode = 'fuck';
	export let data;
	$: pathname = data.pathname

	let wedding_links: string[][] = [
		['Home', '/home'],
		['About', '/about'],
		['Reserve', '/rsvp'],
		['Memories', '/memories'],
		['Links', '/links']
	];
	// console.log(wedding_links);

	function currModeChange() {
		// This is pure jank..?
		if (browser) {
			let elem = document.getElementsByClassName('dark').item(0);
			if (!elem) currMode = '';
			else currMode = 'dark';
		}
	}

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
		@apply bg-bnm-mobile lg:bg-bnm-bg bg-cover;
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