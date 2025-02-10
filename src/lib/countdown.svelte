<script lang="ts">
	import { onMount } from 'svelte';
	import { type CDTimer} from './types'

	let curr_date = $state(new Date());
	let wedding_date = new Date(2025, 4, 31, 15, 59, 59);
	let curr_month = () => {return curr_date.getMonth();}
	let dst: Boolean = curr_month() > 2 && curr_month() < 10 ? true : false;
	let last_day = wedding_date.getTime() / 1000

	// refactored to look "prettier"
	let d = $derived(Math.floor((wedding_date.getTime() - curr_date.getTime()) / 1000 / 60 / 60 / 24));
	let h = $derived(Math.abs(wedding_date.getHours() - curr_date.getHours()));
	let m = $derived(Math.abs(wedding_date.getMinutes() - curr_date.getMinutes()));
	let s = $derived(Math.abs(wedding_date.getSeconds() - curr_date.getSeconds()));

	let display_date = wedding_date.toString();
	display_date = display_date.split(' ').slice(0, 4).join(' ');

	let dates: CDTimer[] = $derived([
		{ id: 'Day', time: d },
		{ id: 'Hour', time: dst ? h + 1 : h },
		{ id: 'Minute', time: m },
		{ id: 'Second', time: s }
	]);
	console.log(wedding_date)
	let percent_done = $derived(Math.floor(last_day - (curr_date.getTime() / 1000)));
	onMount(() => {
		const interval = setInterval(() => {
			curr_date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	let dt_id_class = "row-start-1 text-center align-baseline"
	let dt_time_class = "row-start-2 text-center"
</script>

{#snippet span(dt: CDTimer)}
	<span class={dt_id_class}>{dt.id}</span>
	<span class={dt_time_class}>{dt.time}</span>
{/snippet}

<div class="hidden lg:block">
	<div class="grid grid-cols-[repeat(4,minmax(200px,_120px))] text-3xl font-nfExtraBold text-tertiary-700">
		{#each dates as dt}
			{@render span(dt)}
		{/each}
	</div>
</div>

