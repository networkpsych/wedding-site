<script>
	import venue from "$lib/assets/venue.svg"
	import map from "$lib/assets/map.svg"
	import food from "$lib/assets/food.svg"


</script>


<div class="flex flex-col justify-center items-center lg:text-tertiary-900 pb-10">
	<div class="card w-[400px] lg:w-3/5 mx-auto p-5 text-center variant-filled-primary">
		<div class="grid row-span-2 text-surface-700 text-balance">
			<span class="font-nfRegular text-3xl lg:text-6xl">We're getting married!</span>
			<span class="text-xl lg:text-3xl">Here is some of the information you will need!</span>
		</div>
	</div>
</div>
<div class="flex justify-between items-center">
	<div class="card flex flex-col size-24 lg:size-96 m-auto variant-filled-secondary text-center lg:variant-filled-primary">
		<header class="card-header">
			<a href="https://maps.app.goo.gl/sjpnAmiqD4HVWkph7" target="_blank">
				<img src={map} alt="train svg" class="
				transition ease-in-out duration-400
				flex-shrink size-fit lg:size-40 m-auto p-2 
				hover:origin-top-left hover:-rotate-12 hover:scale-110"/>
			</a>
		</header>
		<div class="hidden lg:flex flex-col flex-grow gap-5">
			<span class="text-xl lg:text-4xl">The Location</span>
			<span class="text-xl lg:text-2xl">
				Gale Woods Farm <br> Minnetrista, MN
			</span>
		</div>
	</div>
	<div class="card flex flex-col size-24 lg:size-96 m-auto variant-filled-secondary text-center lg:variant-filled-primary">
		<header class="card-header">
			<img src={venue} alt="building svg" class="
			transition ease-in-out duration-400
			flex-shrink size-fit lg:size-40 m-auto p-2 
			hover:origin-top-left hover:-translate-y-3 hover:scale-110"/>
		</header>
		<div class="hidden lg:flex flex-col flex-grow gap-5">
			<span class="text-xl lg:text-4xl">The Venue</span>
			<span class="text-xl lg:text-2xl">Temp Text</span>
		</div>
	</div>
	<div class="card flex flex-col size-24 lg:size-96 m-auto variant-filled-secondary text-center lg:variant-filled-primary">
		<header class="card-header">
			<img src={food} alt="train svg" class="
			transition ease-in-out duration-400
			flex-shrink size-fit lg:size-40 m-auto p-2 
			hover:origin-top-left hover:rotate-12 hover:scale-110"/>
		</header>
		<div class="hidden lg:flex flex-col flex-grow gap-5">
			<span class="text-xl lg:text-4xl">The Food</span>
			<span class="text-xl lg:text-2xl">Temp Text</span>
		</div>
	</div>
</div>
