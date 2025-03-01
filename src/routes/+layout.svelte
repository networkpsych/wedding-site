<script lang="ts">
	import { onMount } from 'svelte';
	import { Modal, ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import { page } from '$app/state'

	let modalState = $state(false);
	
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
	import { cubicOut } from 'svelte/easing';
	import Navigation from '$lib/Navigation.svelte';
	import { type NavLinks } from '$lib/types';

	interface Props {
		data: any;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();


	let wedding_links: NavLinks[] = [
		{name:'Home', link: '/'},
		{name:'About', link: '/about'},
		{name:'Reserve', link: '/rsvp'},
		{name:'Memories', link: '/memories'},
		{name:'Registry', link: '/registry'}
	];
	
	function modalToggle(): void {
		if (!modalState){
			modalState = true;
		} else {
			modalState = false;
		}
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
	
	let { session, supabase } = $derived(data);
	let pathname = $state(page.url.pathname)
</script>

<header class="sticky m-1 p-1">
	<div class="visible lg:invisible">
		<Modal
			bind:open={modalState}
			triggerBase="btn preset-tonal"
			contentBase='bg-surface-600-400 p-10'
			positionerJustify="justify-start"
			positionerAlign=""
			positionerPadding=""
			transitionsPositionerIn={{ x: -480, duration: 200 }}
			transitionsPositionerOut={{ x: -480, duration: 200 }}
			>
			{#snippet trigger()}
			<svg viewBox="0 0 100 80" class="fill-secondary-600 w-8 h-8">
				<rect y="0" width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
			{/snippet}
			{#snippet content()}
			<Navigation links={wedding_links} />
			{/snippet}
		</Modal>
	</div>
	<div class="invisible lg:visible">
		<Navigation links={wedding_links}/>
	</div>
</header>
<main>
	<div>
		{#key pathname}
			<div
			in:fade|global={{easing: cubicIn, duration:700, delay:450}} out:fade|global={{easing: cubicOut, duration:400}}
			>
			<ToastProvider placement="top-start">
				{@render children?.()}
			</ToastProvider>
			</div>
		{/key}
	</div>
</main>