<script>
	import venue from "$lib/assets/venue.svg"
	import map from "$lib/assets/map.svg"
	import food from "$lib/assets/food.svg"


</script>
	<div class="flex flex-col justify-center items-center lg:text-tertiary-900 pb-10">
		<div class="w-[400px] lg:w-3/5 mx-auto p-5 text-center">
			<div class="grid row-span-2 text-surface-700 dark:text-primary-200 text-balance">
				<span class="font-nfRegular text-3xl lg:text-6xl">We're getting married!</span>
				<span class="text-xl lg:text-3xl">Here is some of the information you will need!</span>
			</div>
		</div>
	</div>
	<div class="flex justify-between items-center">
		
		<div class="transition ease-in-out duration-500 origin-bottom card size-1/6 p-1
					m-auto text-center variant-ghost-primary dark:variant-ghost-secondary
					hover:translate-y-6 hover:translate-x-6 hover:-skew-y-6 hover:shadow-2xl hover:scale-110">
		<a href="https://maps.app.goo.gl/sjpnAmiqD4HVWkph7" target="_blank">
				<header class="card-header">
						<img src={map} alt="train svg" class="m-auto p-2 content-none"/>
				</header>
				<section>
					<span class="lg:text-4xl p-1">City</span>
				</section>
				<footer class="card-footer">
					<span class="hidden lg:flex lg:justify-center lg:text-lg p-1">Minnetrista, MN</span>
				</footer>
			</a>
		</div>
		<div class="transition ease-in-out duration-500 card flex flex-col size-1/6 p-1
					m-auto text-center variant-ghost-primary dark:variant-ghost-secondary
					hover:translate-y-6 hover:shadow-2xl hover:scale-110">
		<a href="https://www.threeriversparks.org/location/gale-woods-farm-pavilion" target="_blank">
			<header class="card-header">
					<img src={venue} alt="building svg" class="m-auto p-2 content-none"/>
				</header>
				<section>
					<span class="lg:text-4xl">Venue</span>
				</section>
				<footer class="card-footer text-nowrap text-center">
					<span class="hidden lg:flex lg:justify-center lg:text-lg p-1">Gale Woods Farm Pavilion</span>
				</footer>
			</a>
		</div>
		<div class="transition ease-in-out duration-500 card flex flex-col size-1/6 p-1
					m-auto text-center variant-ghost-primary dark:variant-ghost-secondary
					hover:translate-y-6 hover:-translate-x-6 hover:skew-y-6 hover:shadow-2xl hover:scale-110">
			<a href="https://lookoutbarandgrill.com/" target="_blank">
			<header class="card-header">
					<img src={food} alt="train svg" class="m-auto p-2"/>
				</header>
				<section>
					<span class="lg:text-4xl">Food</span>
				</section>
				<footer class="card-footer text-nowrap text-center">
					<span class="hidden lg:flex lg:justify-center lg:text-lg p-1">The Lookout Bar and Grill</span>
				</footer>
			</a>
		</div>
	</div>