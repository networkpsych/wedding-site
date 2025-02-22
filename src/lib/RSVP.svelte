<script lang="ts">
	
import { enhance } from '$app/forms';
import { getContext } from 'svelte';
import { type SubmitFunction } from '@sveltejs/kit';
import { Switch, type ToastContext } from '@skeletonlabs/skeleton-svelte';
import wedding_icon from '$lib/assets/icons/wedding-svgrepo-com.svg';
import going from '$lib/assets/icons/going.svg'
import not_going from '$lib/assets/icons/not_going.svg'


	export const toast: ToastContext = getContext('toast');
	
	function triggerMsg(
        title: string | undefined, message: string | undefined, 
        status: 'info'|'error'|'success'|undefined){
        toast.create({ 
            title: title,
            description: message,
            type: status,
        })
    }

let { 
	trigger = $bindable(),
	is_attending = $bindable(),
	email = $bindable(),
	first_name = $bindable(),
 } = $props()

let last_name = $state('');
let userMsg: string = $state('');
let attendance: boolean = $state(true);
let charMax: number = $derived(250 - userMsg.length);
let attendMsg: string = $derived(attendance ? 'I Am Attending' : 'I Am Not Attending');
let num = $state();
	

const onFormSubmit: SubmitFunction = () => {
	let title: string | undefined;
	let message: string | undefined;
		return async ({ result, update }) => {
			console.log(attendance)
			is_attending = attendance
			email = email
			// @ts-expect-error
			let respData = await result.data
			//if (!attendance){
			//	await update({ reset:true })
			//} else {
			//	await update({reset:false})
			//}
			attendance = false;
			console.log(respData)
			
            switch (respData.success) {
				case true:
					title = "Success"
					message = "Form Submitted Successfully"
					triggerMsg(title, message, "success")
					trigger = true
					await update({reset:false})
					break;
				case false:
					title = "An error occurred"
					message = `${respData.errors.reason}`
					triggerMsg(title, message, "error")
					await update({reset:true})
					break;
				default:
					console.log(result.type, result.status)
					break;
			}
		};
	};
</script>

<div class="flex flex-col justify-start m-auto h-svh lg:h-[500px] w-4/5">
	<div class="flex flex-col justify-center gap-2 text-center text-secondary-700 dark:text-secondary-300 text-balance lg:text-nowrap">
		<span class="text-4xl lg:text-6xl font-nfRegular"> Come to Our Reception! </span>
	</div>
	<div class="flex justify-center">
		<div
			class="h-[900px] w-3/4 overflow-hidden rounded-2xl text-nfPrintBold"
		>
			<form
				id="guest_form"
				method="POST"
				action="/rsvp?/guest"
				use:enhance={onFormSubmit}
				class="flex flex-col items-center space-y-2 py-2"
			>
			<span class="text-3xl text-secondary-200 font-nfPrintBold">{attendMsg}</span>
				<label for="attending" class="flex font-bold">
					<Switch name="compact" bind:checked={attendance} controlActive="preset-filled-surface-600" controlInactive="preset-filled-surface-600" compact>
						 {#snippet inactiveChild()}<img src="{not_going}" alt="not going">{/snippet}
						 {#snippet activeChild()}<img src="{going}" alt="going">{/snippet}
					</Switch>
				</label>
				<label class="block text-secondary-700 font-nfPrintBold rounded-4xl">
						<input
							class="input box-border h-[20px] w-fit font-medium dark:bg-primary-400 text-black placeholder:text-secondary-700 font-nfPrintBold"
							name="first_name"
							bind:value={first_name}
							type="text"
							placeholder=" First Name "
							maxlength="50"
							required
						/>
				</label>
				<label class="block text-secondary-700 font-nfPrintBold rounded-4xl">
					<input
						class="input box-border h-[20px] w-fit font-medium dark:bg-primary-400 text-black placeholder:text-secondary-700 font-nfPrintBold"
						name="last_name"
						bind:value={last_name}
						type="text"
						placeholder=" Last Name "
						maxlength="50"
						required
					/>
				</label>
				<label class="block text-secondary-700 font-nfPrintBold rounded-4xl">
					<input
						class="input box-border h-[20px] w-fit font-medium dark:bg-primary-400 text-black placeholder:text-secondary-700 font-nfPrintBold"
						name="email"
						type="text"
						placeholder=" Email Address "
						required
					/>
				</label>
				{#if attendance == true}
				<label class="block text-secondary-700 font-nfPrintBold rounded-2xl">
					<input
						class="input box-border h-[20px] w-fit font-medium dark:bg-primary-400 text-black placeholder:text-secondary-900 font-nfPrintBold"
						name="guests"
						type="number"
						pattern="\d+"
						placeholder=" Group size "
						maxlength="2"
						bind:value={num}
						required
					/>
				</label>
				{:else}
					<label for="note" class="block text-secondary-600 font-nfPrintBold rounded-2xl">
						<textarea bind:value={userMsg} maxlength="250" class="w-fit 
						h-[75px] 
						bg-primary-300
						placeholder:text-secondary-900
						text-black
						order-none rounded-xl p-2"
						name="note"
						placeholder="Add a note!"></textarea>
					</label>
				{/if}
				<!-- type="button" breaks functionality. Don't know why though...-->				
				<button class="
							preset-outlined-primary-700-300 btn mx-4 flex
							items-center 
							space-y-2
							transition
							ease-out
							duration-200
							hover:scale-105
							hover:translate-y-1
							hover:shadow-2xl
							hover:bg-primary-300
							"
							onsubmit={()=>console.log(Event)}
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