<script lang="ts">

	import Meal from '$lib/Meal.svelte';
	import RSVP from '$lib/RSVP.svelte';
	import CheckEmail from '$lib/CheckEmail.svelte'
	import { cubicIn } from 'svelte/easing';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let { 
		email_check = $bindable(),
		toFood = $bindable(),
		rsvpCheck = $bindable(),
		is_attending= $bindable(), 
		email = $bindable(),
		first_name = $bindable(),
	} = $props()

	function toggle(){
		if (!email_check){
			email_check = true
		} else {
			email_check = false
		}
		if (!rsvpCheck){
			rsvpCheck = true
		} else {
			rsvpCheck = false
		}
	}
	console.log(rsvpCheck)
	console.log(email_check)
	console.log(toFood)
</script>
<div in:fade={{easing: cubicIn, duration:700, delay:350}} out:fade={{easing: cubicOut, duration:300}}>
	{#if !email_check}
	<div transition:fade={{duration: 650}}>
		<CheckEmail bind:email bind:email_check bind:toFood/>
	</div>
	{:else if email_check && !rsvpCheck && !toFood}
	<div transition:fade={{duration: 650}}>
		<RSVP bind:rsvpCheck bind:is_attending bind:email bind:first_name/>
	</div>
	{:else if is_attending && rsvpCheck && email_check || toFood}
	<div transition:fade={{duration: 650}}>
		<Meal bind:email/>
	</div>
	{:else}
		<div>
			<div class="flex flex-col justify-center gap-2 text-center text-secondary-700 dark:text-secondary-300 text-balance lg:text-nowrap">
				<span class="text-4xl lg:text-6xl font-nfRegular">Thank you {first_name}!</span>
				<span class="lg:text-xl font-nfPrintRegular whitespace-pre-line text-pretty">
					We appreciate you filling out the form. 
					Have a wonderful day!
				</span>
			</div>
		</div>
	{/if}
</div>
