<script lang="ts">
	import { fade } from 'svelte/transition';
	import image_1 from '$lib/assets/carousel/50th anniversary-1.jpg';
	import image_2 from '$lib/assets/carousel/ag_day_bbq.jpg';
	import image_3 from '$lib/assets/carousel/bees_game.jpg';
	import image_4 from '$lib/assets/carousel/ccdc_2023.jpg';
	import image_5 from '$lib/assets/carousel/hogle_zoo.jpg';
	import image_6 from '$lib/assets/carousel/bryce_canyon.jpg';
	import image_7 from '$lib/assets/carousel/lil_d_wedding.jpg';
	import image_8 from '$lib/assets/valentines_2021.jpg'

	// using enhanced:img will break this.
	let file_store: {[id: string]: any;} = {
		"Snowbird 50th": image_1,
		"Ag day bbq at USU": image_2, 
		"Bees Game photo": image_3, 
		"CCDC competition": image_4, 
		"Hogle Zoo trip": image_5, 
		"Bryce canyon trip": image_6, 
		"Wedding photo": image_7,
		"Valentines 2021": image_8
	};
</script>

<svelte:body on:touchmove />
<div class="grid grid-cols-4 content-start gap-2">
		{#each Object.entries(file_store) as [key, val]}
		<div class="items-start m-auto">
				<img class="ease-in-out duration-300 size-3/4 rounded-xl object-contain m-auto
				hover:scale-110
				"
				in:fade={{ duration: 500, delay:200 }}
				src={val} alt={key} />
		</div>
		{/each}

</div>
