<script lang="ts">
	import Countdown from '$lib/countdown.svelte';
	import hero from "$lib/assets/bnm_hero.jpg"
	import hero2 from "$lib/assets/bnm_hero2.jpg"
	import hero_mobile from "$lib/assets/bnm_bg_mobile_2.jpg"

</script>

<div class="flex flex-col items-center content-center mx-auto text-nowrap">
	<div class="drop-shadow-xl text-primary-500 dark:text-secondary-500 lg:text-surface-500 font-nfRegular text-4xl lg:text-6xl">Brayden & Madeline</div>
	<div class="drop-shadow-xl text-primary-500 dark:text-secondary-500 lg:text-surface-500 font-nfPrintBold text-4xl lg:text-6xl ">
		5/31/2025
	</div>
	<div class="hidden lg:block p-4">
		<Countdown />
	</div>
</div>
<div class="hidden lg:flex lg:h-screen ">
	<img class="absolute inset-y-0 top-40 left-5 -z-10 m-auto h-4/6 object-contain rounded-xl" src={hero} alt="background for site"/>
	<img class="absolute inset-y-0 top-40 right-5 -z-10 m-auto h-4/6 object-contain rounded-xl" src={hero2} alt="background for site"/>
</div>

<div class="relative h-screen m-auto lg:hidden">
	<img class="absolute top-0 inset-x-0 z-10 h-2/3 m-auto object-fit rounded-full" src={hero_mobile} alt="background for site"/>
</div>





