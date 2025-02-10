<script lang="ts">
	import { createBubbler } from 'svelte/legacy';
	import {type CustomImage} from './types'

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
	let file_store: CustomImage[] = [
		{uri: image_1, desc:"Snowbird 50th" },
		{uri: image_2, desc: "Ag day bbq at USU"}, 
		{uri: image_3, desc: "Bees Game photo"},
		{uri:image_4, desc: "CCDC competition"},
		{uri:image_5, desc: "Hogle Zoo trip"},
		{uri:image_6, desc: "Bryce canyon trip"}, 
		{uri:image_7, desc: "Wedding photo"},
		{uri:image_8, desc: "Valentines 2021"},
];

	let img_desc = "ease-in-out duration-300 size-4/5 rounded-xl object-contain m-auto hover:scale-110"
</script>

{#snippet div(image: CustomImage)}
	<div class="items-start m-auto">
		<img class={img_desc} in:fade={{ duration: 500, delay:200 }} src={image.uri} alt={image.desc} />
	</div>
{/snippet}

<div class="grid grid-cols-4 content-start gap-2">
	{#each file_store as image}
		{@render div(image)}	
	{/each}
</div>
