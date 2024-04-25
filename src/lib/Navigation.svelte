<script lang="ts">
	import {onNavigate} from '$app/navigation';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Page from '../routes/+page.svelte';
	//import {LightSwitch} from '@skeletonlabs/skeleton';
	//import {AppShell } from '@skeletonlabs/skeleton'
	//import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	//import { page } from '$app/stores';
	//import Header from '$lib/header.svelte';
	// import {page} from '$app/stores';
	
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

</script>

<nav class="list-nav p-5 py-20">
	<ul class="text-xl font-medium align-middle">
		<li class="hover:translate-x-3 hover:-translate-y-2 hover:ease-in-out duration-300 hover:variant-filled-surface hover:opacity-50 dark:hover:variant-filled-primary rounded-lg"><a href="/" on:click={drawerClose} >Home</a></li>
		<li class="hover:translate-x-3 hover:-translate-y-2 hover:ease-in-out duration-300 hover:variant-filled-surface hover:opacity-50 dark:hover:variant-filled-primary rounded-lg"><a href="/about" on:click={drawerClose}>About</a></li>
		<li class="hover:translate-x-3 hover:-translate-y-2 hover:ease-in-out duration-300 hover:variant-filled-surface hover:opacity-50 dark:hover:variant-filled-primary rounded-lg"><a href="/rsvp" on:click={drawerClose}>Reservation</a></li>
		<li class="hover:translate-x-3 hover:-translate-y-2 hover:ease-in-out duration-300 hover:variant-filled-surface hover:opacity-50 dark:hover:variant-filled-primary rounded-lg"><a href="/memories" on:click={drawerClose}>Memories</a></li>
		<li class="hover:translate-x-3 hover:-translate-y-2 hover:ease-in-out duration-300 hover:variant-filled-surface hover:opacity-50 dark:hover:variant-filled-primary rounded-lg"><a href="/links" on:click={drawerClose}>Links</a></li>
	</ul>
</nav>

<!--
<AppShell class="flex justify-center">
	<svelte:fragment slot="header">
		<TabGroup justify='justify-center' padding='px-10 py-4' spacing='space-y-3'>
			<TabAnchor href='/' selected={$page.url.pathname === '/'}>
					<svelte:fragment slot='lead'><a id='nav-home'  href='/' class='h3'>Days Left</a></svelte:fragment>
			</TabAnchor>
			<TabAnchor href='/about' selected={$page.url.pathname === '/about'}>
					<svelte:fragment slot='lead'><a id='nav-venue' href='/about' class='h3'>About</a></svelte:fragment>
			</TabAnchor>
			<TabAnchor href='/registry' selected={$page.url.pathname === '/registry'}>
					<svelte:fragment slot='lead'><a id='nav-registry' href='/registry' class='h3'>Registry</a></svelte:fragment>
			</TabAnchor>
			<TabAnchor href='/memories' selected={$page.url.pathname === '/memories'}>
					<svelte:fragment slot='lead'><a id='nav-registry' href='/memories' class='h3'>Memories</a></svelte:fragment>
			</TabAnchor>
			 
			<TabAnchor href='/rsvp' selected={$page.url.pathname === '/rsvp'}>
					<svelte:fragment slot='lead'><a id='nav-registry' href='/rsvp' class='h3'>Reservation</a></svelte:fragment>
			</TabAnchor>
		</TabGroup>
		<LightSwitch />
	</svelte:fragment>
</AppShell>
-->
<!--href needs to match, otherwise it will occasionally show a 404-->
	<!--<ViewTransition url={$page.url}>
	</ViewTransition>
	-->
	<slot />
	<!--Router Slot-->
