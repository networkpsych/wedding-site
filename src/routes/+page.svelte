<script lang="ts">
	import Countdown from '$lib/countdown.svelte';
	import hero from "$lib/assets/bnm_bg.jpg"

</script>

<div class="card h-[165px] lg:h-72 w-fit lg:w-[800px] variant-filled-primary lg:variant-glass-primary flex flex-col items-center mx-auto p-10 text-center text-nowrap ">
	<div class="drop-shadow-xl text-secondary-500 lg:text-surface-500 font-nfRegular text-5xl lg:text-6xl">Brayden & Madeline</div>
	<div class="drop-shadow-xl text-secondary-500 lg:text-surface-500 font-nfPrintBold text-5xl lg:text-6xl ">
		5/31/2025
	</div>
	<div class="hidden lg:block p-4">
		<Countdown />
	</div>
</div>


