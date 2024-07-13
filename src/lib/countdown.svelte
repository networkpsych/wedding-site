<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';

	let curr_date = new Date();
	let wedding_date = new Date(2025, 4, 31, 15, 59, 59);
	let curr_month = curr_date.getMonth();
	let dst: Boolean = curr_month > 2 && curr_month < 10 ? true : false;

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

	$: percent_done = (wedding_date.getTime() - curr_date.getTime()) / wedding_date.getTime();
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
	<div class="grid grid-cols-[repeat(4,minmax(200px,_120px))] text-3xl font-nfPrintRegular text-primary-700">
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

<!--<div class="text-3xl">
    {Math.floor(days_left)}
    <br>
    {#each dates as {id, time}}
            <br>{id}<br>{time}
    {/each}
    <br>
    {dst}
</div>-->

<!--<div class="container size-1/2 m-3 p-5 font-quicksand">
    <canvas id="canvas"></canvas>
    <div>
        <p class="flex-1 text-5xl">{display_date}</p>
        <ul class="flex items-baseline space-y-5 font-bold">
            {#each dates as {id, time}}
            <li>
                <h3 class="text-center md:me-5 text-3xl align-baseline">
                {#if time > 1}
                    {id}s<br>{time}
                {:else if time == 1}
                    {id}<br>{time}
                {:else if time == 0 && id == "Second"}
                    {id}<br>{time}
                {/if}
                </h3>
            </li>
            {/each}
        </ul>
    </div>
</div>
-->
