<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { assets } from '$app/paths';
	import wedding_icon from '$lib/assets/icons/wedding-svgrepo-com.svg';

	$: attendance = false
	
	const onFormSubmit: SubmitFunction = () => {
		return async ({ update }) => {
			await update({ reset: false });
		};
	};
</script>


<div class="flex flex-col justify-center align-end m-auto h-[500px] lg:h-[500px] w-4/5 lg:w-3/5">
	<div class="flex justify-center pt-5 text-center text-primary-600 lg:text-tertiary-800 font-nfRegular">
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
							class="input box-border h-[42px] w-fit font-medium dark:bg-tertiary-300 text-black placeholder:text-primary-800"
							name="name"
							type="text"
							placeholder=" Name "
							maxlength="50"
							required
						/>
				</label>
				<label class="label text-secondary-600">
					<input
						class="input box-border h-[42px] w-fit font-medium dark:bg-tertiary-300 text-black placeholder:text-primary-800 font-nfPrintBold"
						name="email"
						type="text"
						placeholder=" Email Address"
						required
					/>
				</label>
				{#if attendance == true}
					<label class="label text-secondary-600">
						<input
							class="input box-border h-[42px] w-fit font-medium dark:bg-tertiary-300 text-black placeholder:text-primary-800 font-nfPrintBold"
							name="guests"
							type="text"
							placeholder=" Number of Guests "
							maxlength="2"
						/>
					</label>
				{/if}
				<!-- type="button" breaks functionality. Don't know why though...-->
				<button class="variant-filled-tertiary btn mx-4 flex items-center space-y-2">
					<span class="m-2 text-2xl font-bold">Submit</span>
					<div>
						<img src={wedding_icon} alt="" class="h-12 w-12" />
					</div>
				</button>
			</form>
		</div>
	</div>
</div>
