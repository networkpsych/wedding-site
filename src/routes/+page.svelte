<script>
    import {onMount} from 'svelte';
  
    let curr_date = new Date();
    let wedding_date = new Date(2025,4,31,15,59,59);
    var display_date = wedding_date.toString();
    display_date = display_date.split(' ').slice(0, 4).join(' ');

    $: dates = [
        {id: "Year", time: Math.abs(wedding_date.getFullYear() - curr_date.getFullYear())},
        {id: "Month", time: Math.abs(wedding_date.getMonth() - curr_date.getMonth())},
        {id: "Day", time: Math.abs(wedding_date.getDate() - curr_date.getDate())},
        {id: "Hour", time: Math.abs(wedding_date.getHours() - curr_date.getHours())},
        {id: "Minute", time: Math.abs(wedding_date.getMinutes() - curr_date.getMinutes())},
        {id: "Second", time: Math.abs(wedding_date.getSeconds() - curr_date.getSeconds())},
    ]
    
    /*$: years = Math.abs(wedding_date.getFullYear() - curr_date.getFullYear());
    //$:years = 0;
    $: months = Math.abs(wedding_date.getMonth() - curr_date.getMonth());
    $: days = Math.abs(wedding_date.getDay() - curr_date.getDay());
    $: hours = Math.abs(wedding_date.getHours() - curr_date.getHours());
    $: minutes =Math.abs(wedding_date.getMinutes() - curr_date.getMinutes());
    $: seconds =Math.abs(wedding_date.getSeconds() - curr_date.getSeconds());
    $: end_date = null;

    $: date_type = [
        "Years", "Year",
        "Months", "Month",
        "Days", "Day",
        "Hours", "Hour",
        "Minutes", "Minute",
        "Seconds", "Second"
    ]*/
    
    onMount(() => {
        const interval = setInterval(() => {
            curr_date = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>
<div class="container mx-auto p-5 space-y-10 font-labelle">
    <p class="flex items-center justify-center text-5xl">{display_date}</p>
    <div>
        <ul class="flex flex-wrap items-baseline justify-center space-y-5 font-labelle">
            {#each dates as {id, time}}
            <li>
                <h3 class="text-center md:me-5 text-4xl align-baseline">
                {#if time > 1}
                    {time}<br>{id}s
                {:else if time == 1}
                    {time}<br>{id}
                {/if}
                </h3>
            </li>
            {/each}
        </ul>
    </div>
</div>