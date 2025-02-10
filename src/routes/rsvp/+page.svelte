<script lang="ts">
	/*import { enhance } from '$app/forms';
	import { redirect, type SubmitFunction } from '@sveltejs/kit';
	import { SlideToggle, getToastStore, RadioGroup, RadioItem, type ToastSettings } from '@skeletonlabs/skeleton';
	import wedding_icon from '$lib/assets/icons/wedding-svgrepo-com.svg';
	import type { ActionData } from './$types';*/
	import { fade } from 'svelte/transition'
	import Meal from '$lib/Meal.svelte';
	import RSVP from '$lib/RSVP.svelte';

	let { 
		
		trigger = $bindable(), 
		is_attending=$bindable(), 
		email = $bindable(),
		first_name = $bindable(),
	} = $props()

	function toggle(){
		if (!trigger){
			trigger = true
		} else {
			trigger = false
		}
	}
	console.log(trigger)
</script>


{#if !trigger}
<div transition:fade|global={{duration: 650}}>
	<RSVP bind:trigger bind:is_attending bind:email bind:first_name/>
</div>
{:else if is_attending && trigger}
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
