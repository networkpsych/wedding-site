<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { InputChip, ListBox, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { assets } from '$app/paths';
	import wedding_icon from '$lib/assets/icons/wedding-svgrepo-com.svg';
	import hug_photo from '$lib/assets/aug_hug_2020.jpg';

	const defaults = {
		attendance: false
	};

	const formData = {
		name: '',
		email: '',
		attendance: defaults.attendance,
		guests: 0
	};

	$: attendance = false;

	const onFormSubmit: SubmitFunction = () => {
		formData.attendance = defaults.attendance;
		return async ({ update }) => {
			await update({ reset: false });
		};
	};
</script>


<div class="flex flex-col justify-center align-end m-auto card h-[400px] lg:h-[500px] w-4/5 lg:w-3/5 variant-glass-primary">
	<div class="flex justify-center text-center text-secondary-600 lg:text-tertiary-900 font-bungeeshade p-5 lg:p-2">
		<span class="text-3xl md:text-6xl"> Come to our wedding! </span>
	</div>
	<div class="flex justify-center pt-6">
		<div
			class="dark:variant-ghost-primary-400 size-96 overflow-hidden rounded-3xl"
		>
			<form
				method="POST"
				use:enhance={onFormSubmit}
				class="flex flex-col items-center space-y-3 py-4"
			>
				<label for="attendance" class="label font-bold">
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={attendance} name="attending" value={true}>Attending</RadioItem>
						<RadioItem bind:group={attendance} name="not_attending" value={false}>Not Attending</RadioItem>
					</RadioGroup>
				</label>
				<label class="label text-secondary-600">
					<input
						class="input box-border h-[42px] w-fit font-medium text-black placeholder:text-primary-800 dark:bg-tertiary-300"
						name="name"
						type="text"
						placeholder=" Name "
						maxlength="50"
						required
					/>
				</label>
				<label class="label text-secondary-600">
					<input
						class="input box-border h-[42px] w-fit font-medium text-black placeholder:text-primary-800 dark:bg-tertiary-300"
						name="email"
						type="text"
						placeholder=" Email Address"
						required
					/>
				</label>
				{#if attendance == true}
					<label class="label text-secondary-600">
						<input
							class="input box-border h-[42px] w-fit font-medium text-black placeholder:text-primary-800 dark:bg-tertiary-300"
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
