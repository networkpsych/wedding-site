<script lang="ts">
	import { onMount } from 'svelte';

	let curr_date = new Date();
	let wedding_date = new Date(2025, 4, 31, 15, 59, 59);
	let curr_month = curr_date.getMonth();
	let dst: Boolean = curr_month > 2 && curr_month < 10 ? true : false;
	let last_day = wedding_date.getTime() / 1000

	// refactored to look "prettier"
	$: d = Math.floor((wedding_date.getTime() - curr_date.getTime()) / 1000 / 60 / 60 / 24);
	$: h = Math.abs(wedding_date.getHours() - curr_date.getHours());
	$: m = Math.abs(wedding_date.getMinutes() - curr_date.getMinutes());
	$: s = Math.abs(wedding_date.getSeconds() - curr_date.getSeconds());

	let display_date = wedding_date.toString();
	display_date = display_date.split(' ').slice(0, 4).join(' ');

	$: dates = [
		{ id: 'Day', time: d },
		{ id: 'Hour', time: dst ? h + 1 : h },
		{ id: 'Minute', time: m },
		{ id: 'Second', time: s }
	];
	console.log(wedding_date)
	$: percent_done = Math.floor(last_day - (curr_date.getTime() / 1000));
	onMount(() => {
		const interval = setInterval(() => {
			curr_date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="hidden lg:block">
	<div class="grid grid-cols-[repeat(4,minmax(200px,_120px))] text-3xl font-nfExtraBold text-tertiary-700">
		{#each dates as { id, time }}
			{#if time > 1}
				<span class="row-start-1 text-center align-baseline">{id}s</span>
				<span class="row-start-2 text-center">{time}</span>
			{:else if time == 1}
				<span class="row-start-1 text-center align-baseline">{id}</span>
				<span class="row-start-2 text-center ">{time}</span>
			{:else if time == 0 && id == 'Second'}
				<span class="row-start-1 text-center align-baseline">{id}</span>
				<span class="row-start-2 text-center">{time}</span>
			{/if}
		{/each}
	</div>
</div>

