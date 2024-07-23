<script lang="ts">
	import Countdown from '$lib/countdown.svelte';
</script>

<div class="w-2/4 m-auto p-4">
	<div class="flex flex-col justify-center items-center text-center">
		<div class="
			card
			variant-glass-secondary
			rounded-lg
			justify-center text-wrap text-6xl 
			">
			<p class="hidden lg:flex p-2 drop-shadow-xl font-nfRegular text-primary-700 invisible lg:visible">Brayden & Madeline</p>
			<p class="p-2 drop-shadow-xl font-nfPrintBold text-tertiary-800 lg:text-primary-700">5/31/2025</p>
			
		</div>
		<div>
			<Countdown />
		</div>
	</div>
</div>