<script lang="ts">
	import venue from "$lib/assets/venue.svg"
	import map from "$lib/assets/map.svg"
	import food from "$lib/assets/food.svg"
	import hotel from "$lib/assets/hotel.svg"
	import menu from "$lib/assets/wMenu.pdf"
	import Links from "$lib/Links.svelte";
	import { type AboutLinks } from "$lib/types";


	let linkItems: AboutLinks[] = [
		{image: map, alt: "train svg",topic: "City",desc:"Minnetrista, MN",url: "https://maps.app.goo.gl/sjpnAmiqD4HVWkph7"},
		{image: venue , alt: "building svg" ,topic: "Venue",desc: "Gale Woods Farm Pavilion",url: "https://www.threeriversparks.org/location/gale-woods-farm-pavilion" },
		{image: food , alt: "food svg",topic: "Food",desc: "The Lookout Bar and Grill",url:menu },
		{image: hotel, alt: "hotel svg", topic: "Hotel",desc: "AmeriVu Inn Waconia",url:"/about/hotel"}
	]

/*
  Call or email hotel prior May 1st, 2025 for 10% off. Ask for Peterson-Christensen Block
  wachoniahotel@gmail.com, (952) 442-8787
 */
</script>
	<div class="flex flex-col justify-center items-center lg:text-tertiary-900 pb-10">
		<div class="w-[400px] lg:w-3/5 mx-auto p-5 text-center">
			<div class="grid row-span-2 text-surface-700 dark:text-secondary-200 text-balance">
				<span class="font-nfRegular text-3xl lg:text-6xl">We're getting married!</span>
				<span class="text-xl lg:text-3xl">Here is some of the information you will need!</span>
			</div>
		</div>
	</div>
	<div class="flex justify-between items-center">
		<Links linkItems={linkItems} />
	</div>