<script lang="ts">
	import '../app.postcss';
	import {onNavigate} from '$app/navigation';
	import { AppShell, AppBar, initializeStores, Drawer, getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation.svelte';
	import logo from "$lib/assets/B&M.png"
	import {fbApp} from "$lib/firebase/firebase.app"
	import { onMount } from 'svelte';
	//import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	//import { page } from '$app/stores';
	//import Header from '$lib/header.svelte';
	// import {page} from '$app/stores';
	initializeStores();
	const weddingDrawer = getDrawerStore();

	function drawerOpen(): void {
		weddingDrawer.open({});
	}

	onMount(() => {
		fbApp
	})

	onNavigate((navigation) => {
        //@ts-ignore
        if (!document.startViewTransition){
            return 
            }
        return new Promise(resolve =>{
            //@ts-ignore
            document.startViewTransition(async () =>{
                resolve()
                await navigation.complete
            })
        })
        }
    )
	let tabSet = 0;

</script>
<Drawer>
	<Navigation />
</Drawer>


<AppShell class="flex justify-center" slotSidebarLeft="w-56 p-4 hidden lg:block" slotPageHeader="p-4 bg-transparent">
	<svelte:fragment slot="pageHeader">
		<AppBar slotDefault="place-self-center" background="bg-transparent">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
				<img src="{logo}" alt="logo pic" class="size-fit"/>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<slot />
</AppShell>
<!--
<AppShell >
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
<!--<ViewTransition url={$page.url}>
	</ViewTransition>
	-->
	<!--href needs to match, otherwise it will occasionally show a 404--> 

<!--<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both
				slide-from-right;
	}
</style>
-->