<script lang="ts">
	import { onMount } from 'svelte';
	import { fbApp } from '$lib/firebase/firebase.app';
	import {
    initializeStores,
    Drawer, getDrawerStore,
	Toast, getToastStore,
	Modal, type ModalComponent
	} from '@skeletonlabs/skeleton';
	import modalStatus from '$lib/modalStatus.svelte'

	initializeStores();

	onMount(() => {
		fbApp;
	});

	import '../app.postcss';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import Navigation from '$lib/Navigation.svelte';


	export let data;
	$: pathname = data.pathname

	let wedding_links: string[][] = [
		['Home', '/'],
		['About', '/about'],
		['Reserve', '/rsvp'],
		['Memories', '/memories'],
		['Links', '/links']
	];
	
	const modalRegistry: Record<string, ModalComponent> = {
		status: { ref: modalStatus },
	}
	
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
	<Modal height="h-42" components={modalRegistry} />
	{#key pathname}
		<div
		in:fade={{ easing: cubicIn, duration:700, delay:500}} 
		out:fade={{ easing: cubicOut, duration:500, delay:100}}
		class="overflow-auto"
		>
			<slot />
		</div>
	{/key}
	<Toast position="t" />
</div>
</main>