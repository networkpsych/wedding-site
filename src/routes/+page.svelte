<script lang="ts">
	import Countdown from '$lib/countdown.svelte';
	import { fade } from 'svelte/transition'
	import { cubicIn } from 'svelte/easing';
	import { cubicOut } from 'svelte/easing';
	import hero from "$lib/assets/bnm_bg3.jpg"
	import hero_mobile from "$lib/assets/bnm_bg_mobile_2.jpg"


	//let img_class1 = "absolute -inset-y-0 top-80 left-40 m-auto h-1/2 -z-10 object-contain rounded-xl"
	let img_class2 = "absolute -inset-y-2 top-80 left-0 right-0 m-auto h-3/5 -z-20 rounded-3xl" 
	// <img class={img_class1} src={hero} alt="background for site"/>
</script>
<div in:fade|global={{easing: cubicIn, duration:700, delay:450}} out:fade|global={{easing: cubicOut, duration:400, delay:200}}>
<div class="hidden lg:flex">
	<img class={img_class2} src={hero} alt="background for site"/>
</div>
<div class="flex flex-col items-center content-center mx-auto p-2 text-nowrap">
	<div class="drop-shadow-xl text-primary-500 dark:text-secondary-300 lg:text-surface-500 font-nfRegular text-4xl lg:text-5xl">Brayden & Madeline</div>
	<div class="text-center drop-shadow-xl text-primary-500 dark:text-secondary-300 lg:text-surface-500 font-nfPrintRegular text-2xl lg:text-4xl">
		<span>5/31/2025</span>
		<div class="grid text-xl">
			<span>Private Ceremony</span>
			<span>Cocktail hour @ 4:30pm</span>
			<span>Dinner @ 5:30pm</span>
		</div>
	</div>
	<div class="hidden lg:block p-10">
		<Countdown />
	</div>
</div>

<div class="relative h-screen m-auto lg:hidden" transition:fade|global={{duration: 550}}>
	<img class="absolute top-0 inset-x-0 z-10 h-2/3 m-auto object-fit rounded-full" src={hero_mobile} alt="background for site"/>
</div>
</div>