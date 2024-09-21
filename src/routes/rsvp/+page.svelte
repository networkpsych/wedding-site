<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { SlideToggle, getToastStore, RadioGroup, RadioItem, type ToastSettings } from '@skeletonlabs/skeleton';
	import wedding_icon from '$lib/assets/icons/wedding-svgrepo-com.svg';
	import type { ActionData } from './$types';
	import hero2 from '$lib/assets/carousel/lil_d_wedding.jpg'
	
	// svelte-ignore unused-export-let
	export let form: ActionData; form;
	//export let formData: PageData;
	
	const toastStore = getToastStore();
	
	const msg: ToastSettings = {
		message: ''
	}

	let userMsg: string;
	let attendance: boolean;
	let entree: string;
	let charMax: number;
	let attendMsg: string;
	
	$: userMsg = ''
	$: attendance = false;
	$: entree = "cod";
	// $: side = false;
	// $: starch = false;
	$: charMax = 250 - userMsg.length
	$: attendMsg = attendance ? 'Attending' : 'Not Attending';

	
	const onFormSubmit: SubmitFunction = () => {
		return async ({ result, update }) => {
			// @ts-expect-error
			let respData = await result.data
			attendance = false;
			await update({ reset:true })
			console.log(respData)
			
            switch (respData.success) {
				case true:
					msg.message = "Form Submitted Successfully"
					msg.background = "variant-filled-success"
					toastStore.trigger(msg)
					break;
				case false:
					msg.message = `${respData.errors.reason}`
					msg.background = "variant-filled-error"
					toastStore.trigger(msg)
					break;
				default:
					console.log(result.type, result.status)
					break;
			}

		};
	};
</script>

<!--<div class="flex">
	<img class="h-2/5 lg:h-3/5 absolute -z-50 inset-y-[400px] lg:left-16 lg:top-40 mx-auto rounded-xl" src={hero2} alt="background p i c t u r e" />
</div>
-->
<div class="flex flex-col justify-start m-auto h-svh lg:h-[500px] w-4/5">
	<div class="flex flex-col justify-center gap-2 text-center text-secondary-700 dark:text-secondary-300 text-balance lg:text-nowrap">
		<span class="text-4xl lg:text-6xl font-nfRegular"> Come to our Reception! </span>
		<span class="lg:text-xl font-nfPrintRegular whitespace-pre-line text-pretty">
			Attending?
			Include the number of guests you are bringing!
		</span>
		<span class="lg:text-xl font-nfPrintRegular whitespace-pre-line text-pretty">
			Not attending?
			Add a note for our guest book!
		</span>
	</div>
	<div class="flex justify-center">
		<div
			class="h-[700px] w-3/4 overflow-hidden rounded-3xl text-nfPrintBold"
		>
			<form
				method="POST"
				use:enhance={onFormSubmit}
				class="flex flex-col items-center space-y-3 py-4"
			>

				<label for="attending" class="flex m-auto font-bold">
					<SlideToggle name="slider" on:change={() => console.log(attendance)} bind:checked={attendance} value={false} 
						 active="bg-primary-400 dark:bg-secondary-500" background="bg-primary-700">
						{attendMsg}
					</SlideToggle>
				</label>
				<label class="block text-secondary-600 font-nfPrintBold bg-tertiary-300 rounded-2xl">
						<input
							class="input box-border h-[42px] w-fit font-medium dark:bg-primary-300 text-black placeholder:text-secondary-700"
							name="name"
							type="text"
							placeholder=" Name "
							maxlength="50"
							required
						/>
				</label>
				<label class="label text-secondary-600">
					<input
						class="input box-border h-[42px] w-fit font-medium dark:bg-primary-300 text-black placeholder:text-secondary-700 font-nfPrintBold"
						name="email"
						type="text"
						placeholder=" Email Address"
						required
					/>
				</label>
				{#if attendance == true}
					<label class="label text-secondary-600">
						<input
							class="input box-border h-[42px] w-fit font-medium dark:bg-primary-300 text-black placeholder:text-secondary-700 font-nfPrintBold"
							name="guests"
							type="text"
							placeholder=" Group size "
							maxlength="2"
						/>
					</label>
					<label for="entree" class="label text-secondary-600">
						<RadioGroup active="variant-filled-primary" hover="hover:variant-filled-tertiary">
							<RadioItem on:change={() => console.log(entree)} bind:group={entree} name="entree" value={"cod"}>Baked Cod</RadioItem>
							<RadioItem on:change={() => console.log(entree)} bind:group={entree} name="entree" value={"turkey"}>Roast Turkey</RadioItem>
						</RadioGroup>
					</label>
					<!--
					<label for="vegetable" class="label text-secondary-600">
						<RadioGroup active="variant-filled-primary" hover="hover:variant-filled-tertiary">
							<RadioItem bind:group={side} name="vegetable_1" value={true}>Parsleyed Corn</RadioItem>
							<RadioItem bind:group={side} name="vegetable_2" value={false}>Not Attending</RadioItem>
						</RadioGroup>
					</label>
					<label for="starch" class="label text-secondary-600">
						<RadioGroup active="variant-filled-primary" hover="hover:variant-filled-tertiary">
							<RadioItem bind:group={starch} name="starch_1" value={true}>Attending</RadioItem>
							<RadioItem bind:group={starch} name="starch_2" value={false}>Not Attending</RadioItem>
						</RadioGroup>
					</label>
					-->
				{:else}
					<label for="note" class="label relative inline-block text-black font-nfPrintBold">
						<span class="badge-icon size-10 variant-glass-primary absolute -bottom-2 -right-4 z-10 text-lg">{charMax}</span>
						<textarea bind:value={userMsg} maxlength="250" class="w-fit h-[200px] bg-primary-300 placeholder:text-secondary-700 border-none rounded-xl p-2"
						name="note"
						placeholder="Add a note for the couple!"/>
					</label>
				{/if}
				<!-- type="button" breaks functionality. Don't know why though...-->
				<button class="variant-filled-primary btn mx-4 flex items-center space-y-2
							transition
							ease-out
							duration-200
							hover:scale-105
							hover:-translate-y-3
							hover:shadow-2xl
							"
							on:submit={()=>console.log(Event)}
							>
					<span class="m-2 text-2xl font-bold">Submit</span>
					<div>
						<img src={wedding_icon} alt="two glasses clinking together" class="h-12 w-12" />
					</div>
				</button>
			</form>
		</div>
	</div>
</div>

