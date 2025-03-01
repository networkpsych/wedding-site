<script lang="ts">
	import venue from "$lib/assets/venue.svg"
	import map from "$lib/assets/map.svg"
	import food from "$lib/assets/food.svg"
	import hotel from "$lib/assets/hotel.svg"
	import menu from "$lib/assets/wMenu.pdf"
	import Links from "$lib/Links.svelte";
	import { type AboutLinks } from "$lib/types";
	import { fade } from 'svelte/transition'
	import { cubicIn } from 'svelte/easing';
	import {cubicOut} from 'svelte/easing'


	let linkItems: AboutLinks[] = [
		{image: map, alt: "train svg",topic: "City",desc:"Minnetrista, MN",url: "https://maps.app.goo.gl/sjpnAmiqD4HVWkph7"},
		{image: venue , alt: "building svg" ,topic: "Venue",desc: "Gale Woods Farm Pavilion",url: "https://www.threeriversparks.org/location/gale-woods-farm-pavilion" },
		{image: food , alt: "food svg",topic: "Food",desc: "The Lookout Bar and Grill",url:menu },
		{image: hotel, alt: "hotel svg", topic: "Hotel",desc: "AmeriVu Inn Waconia",url:"/about/hotel"}
	]


</script>
<div in:fade={{easing: cubicIn, duration:700, delay:450}} out:fade={{easing: cubicOut, duration:300}}>
	<div class="flex flex-col justify-center items-center lg:text-tertiary-900 pb-10" >
		<div class="w-[400px] lg:w-3/5 mx-auto p-5 text-center">
			<div class="grid row-span-2 text-surface-700 dark:text-secondary-200 text-balance">
				<span class="font-nfRegular text-3xl lg:text-5xl">We're getting married!</span>
				<span class="text-xl lg:text-3xl">Here is some of the information you will need!</span>
			</div>
		</div>
	</div>
	<div class="flex justify-between items-center">
		<Links linkItems={linkItems} />
	</div>
</div>