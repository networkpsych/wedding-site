<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { getToastStore, RadioGroup, RadioItem, type ToastSettings } from '@skeletonlabs/skeleton';
	import wedding_icon from '$lib/assets/icons/wedding-svgrepo-com.svg';
	import type { ActionData } from './$types';
	
	// svelte-ignore unused-export-let
	export let form: ActionData; form;
	//export let formData: PageData;
	
	const toastStore = getToastStore();
	
	const msg: ToastSettings = {
		message: ''
	}

	$: attendance = false
	
	const onFormSubmit: SubmitFunction = () => {
		return async ({ result, update }) => {

			// @ts-expect-error
			let respData = await result.data

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


<div class="card flex flex-col justify-center align-end m-auto h-[500px] lg:h-[500px] w-4/5 lg:w-2/5 variant-glass-secondary">
	<div class="flex justify-center pt-5 text-center text-tertiary-500 lg:text-tertiary-800 font-nfRegular">
		<span class="text-5xl lg:text-7xl"> Come to our wedding! </span>
	</div>
	<div class="flex justify-center">
		<div
			class="size-96 overflow-hidden rounded-3xl text-nfPrintBold"
		>
			<form
				method="POST"
				use:enhance={onFormSubmit}
				class="flex flex-col items-center space-y-3 py-4"
			>
				<label for="attendance" class="label font-bold">
					<RadioGroup active="variant-filled-primary" hover="hover:variant-filled-tertiary">
						<RadioItem bind:group={attendance} name="attending" value={true}>Attending</RadioItem>
						<RadioItem bind:group={attendance} name="attending" value={false}>Not Attending</RadioItem>
					</RadioGroup>
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
							placeholder=" Number of Guests "
							maxlength="2"
						/>
					</label>
				{/if}
				<!-- type="button" breaks functionality. Don't know why though...-->
				<button class="variant-filled-primary btn mx-4 flex items-center space-y-2">
					<span class="m-2 text-2xl font-bold">Submit</span>
					<div>
						<img src={wedding_icon} alt="two glasses clinking together" class="h-12 w-12" />
					</div>
				</button>
			</form>
		</div>
	</div>
</div>