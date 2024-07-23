<script lang="ts">
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	export let links: string[][];
	// console.log(links, 2);
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<div class="lg:flex lg:justify-start lg:m-3 lg:p-4 lg:pl-10 gap-x-2 text-left h-20 w-full">
{#each links as [key, val]}
	<div class="size-fit p-4 text-left text-2xl
	font-nfExtraBold
	text-primary-300 lg:text-tertiary-500
	rounded-2xl
	hover:variant-ghost-primary
	hover:scale-110
	hover:translate-y-2
	hover:duration-500
	hover:ease-in-out
	duration-700
	">
		<a
			href={val}
			on:click={drawerClose}>
			{key}
		</a>
	</div>
	{/each}
</div>
<!--Router Slot

			>
-->
<slot />
