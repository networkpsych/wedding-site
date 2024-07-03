<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { fade, fly, blur, crossfade } from 'svelte/transition';
	import { sineIn, sineOut } from 'svelte/easing';
	import leftArrow from '$lib/assets/icons/previous-arrows-svgrepo-com.svg';
	import rightArrow from '$lib/assets/icons/next-arrows-svgrepo-com.svg';
	import image_1 from '$lib/assets/carousel/50th anniversary-1.jpg';
	import image_2 from '$lib/assets/carousel/ag_day_bbq.jpg';
	import image_3 from '$lib/assets/carousel/bees_game.jpg';
	import image_4 from '$lib/assets/carousel/ccdc_2023.jpg';
	import image_5 from '$lib/assets/carousel/hogle_zoo.jpg';
	import image_6 from '$lib/assets/carousel/bryce_canyon.jpg';
	import image_7 from '$lib/assets/carousel/lil_d_wedding.jpg';
	import { onMount } from 'svelte';

	// using enhanced:img will break this.
	let file_store: string[] = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];
	let elemCarousel: HTMLDivElement;
	
	$: currInner = 0;
	$: idx = 0;
	$: imgCurr = file_store[idx];
	$: imgPrev = file_store[idx];
	$: x = 100;

	function carouselLeft(): void {
		idx -= 1;
		if (idx < 0) {
			idx = 6;
		}
		if ( x > 0 ){
			x = x * -1
		}
		imgPrev = imgCurr
		imgCurr = file_store[idx];
	}

	function carouselRight(): void {
		idx += 1;
		if (idx > file_store.length - 1) {
			idx = 0;
		}
		if (x < 0){
			x = x * -1
		}
		imgPrev = imgCurr
		imgCurr = file_store[idx];
	}
	// console.log(currInner);
	if (currInner < 1024) {
		onMount(() => {
			const interval = setInterval(() => {
				idx += 1;
				if (idx > file_store.length - 1) {
					idx = 0;
				}
			}, 10000);

			return () => {
				clearInterval(interval);
			};
		});
	}
</script>

<svelte:body on:touchmove />
<div class="grid grid-cols-[auto_1fr_auto] items-center overflow-hidden">
	<button type="button" class="btn-icon static" on:click={carouselLeft}>
		<img src={leftArrow} alt="previous" />
	</button>
	<div
		bind:this={elemCarousel}
		class="flex flex-wrap h-[250px] w-[300px] 
		justify-center content-center bg-transparent lg:h-[600px] lg:w-[700px]"
	>
	<div class="size-2/3 items-baseline">
		{#key imgCurr}
			<img class="rounded-container-token"
			out:fade={{ duration: 300, }}
			in:fade={{ duration: 300, delay:400 }}
			src={imgCurr} alt="" />
		{/key}
		</div>
	</div>
	<button type="button" class="btn-icon static" on:click={carouselRight}>
		<img src={rightArrow} alt="next" />
	</button>
</div>