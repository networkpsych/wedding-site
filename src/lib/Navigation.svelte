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
	<div class="size-fit p-4 text-start text-xl lg:text-2xl
	font-nfExtraBold
	text-surface-500
	dark:text-secondary-500
	rounded-3xl
	hover:variant-ringed-primary
	hover:text-secondary-700
	hover:scale-110
	hover:translate-x-3
	hover:translate-y-3
	hover:-skew-y-6
	hover:skew-x-3
	hover:shadow-2xl
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
