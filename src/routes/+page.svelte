<script lang="ts">
	import Countdown from '$lib/countdown.svelte';
	import hero from "$lib/assets/bnm_hero.jpg"
	import hero2 from "$lib/assets/bnm_hero2.jpg"
	import hero_mobile from "$lib/assets/bnm_bg_mobile_2.jpg"


	let img_class1 = "absolute -inset-y-0 top-80 left-40 m-auto h-1/2 -z-10 object-contain rounded-xl"
	let img_class2 = "absolute -inset-y-0 top-80 right-40 m-auto h-1/2 -z-10 object-contain rounded-xl" 
</script>

<div class="flex flex-col items-center content-center mx-auto text-nowrap">
	<div class="hidden lg:block p-4">
		<Countdown />
	</div>
	<div class="drop-shadow-xl text-primary-500 dark:text-secondary-500 lg:text-surface-500 font-nfRegular text-4xl lg:text-6xl">Brayden & Madeline</div>
	<div class="drop-shadow-xl text-primary-500 dark:text-secondary-500 lg:text-surface-500 font-nfPrintBold text-4xl lg:text-6xl ">
		5/31/2025
	</div>
</div>
<div>
<div class="hidden lg:flex lg:h-3/4">
	<img class={img_class1} src={hero} alt="background for site"/>
	<img class={img_class2} src={hero2} alt="background for site"/>
</div>
</div>

<div class="relative h-screen m-auto lg:hidden">
	<img class="absolute top-0 inset-x-0 z-10 h-2/3 m-auto object-fit rounded-full" src={hero_mobile} alt="background for site"/>
</div>
