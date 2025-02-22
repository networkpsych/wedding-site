<script lang="ts">
    import { enhance } from '$app/forms';
    import { getContext } from 'svelte';
    import { redirect, type SubmitFunction } from '@sveltejs/kit';
    import { Switch, Segment, type ToastContext} from "@skeletonlabs/skeleton-svelte";

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
        email = $bindable(),
        email_check = $bindable(),
		toFood = $bindable(),
    } = $props()

    email_check = false
	toFood = false
    

 const onFormSubmit: SubmitFunction = () => {
        let title: string;
        let message: string;
        //let status: 'info'|'error'|'success'|undefined
		return async ({ result, update }) => {
			// @ts-expect-error
			let respData = await result.data
			await update({ reset:true })
			console.log("results ", respData)
			
            switch (respData.success) {
				case true:
					if (respData.errors.reason == "Email exists"){
						title = "Success"
						message = "Form Submitted Successfully"
						triggerMsg(title, message, "success")
						toFood = true
						email_check = true
					} else {
						title = "Success"
						message = "Form Submitted Successfully"
						triggerMsg(title, message, "success")
						email_check = true
					}
					break;
				case false:
					title = "An error occurred"
					message = `${respData.errors.reason}`
					triggerMsg(title, message, "error")
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
		<span class="text-2xl lg:text-4xl font-nfPrintRegular">Please enter email</span>
	</div>
	<div class="flex justify-center">
		<div
			class="h-[900px] w-3/4 overflow-hidden rounded-2xl text-nfPrintBold"
		>
	<form 
			id="email_check"
			method="POST"
			action="/rsvp?/emailCheck"
			use:enhance={onFormSubmit}
			class="flex flex-col items-center w-full space-y-1 py-2">
			<label class="block text-secondary-700 font-nfPrintBold rounded-4xl">
				<input
					class="input box-border h-[20px] w-fit font-medium dark:bg-primary-400 text-black placeholder:text-secondary-700 font-nfPrintBold"
					name="email"
					type="text"
					bind:value={email}
					placeholder=" Email Address "
					required
				/>
			</label>
			<button class="preset-filled-primary-500 btn mx-4 flex items-center space-y-2
			transition
			ease-out
			duration-200
			hover:scale-105
			hover:translate-y-1
			hover:shadow-2xl
			hover:preset-filled-secondary-500
			"
			onsubmit={()=>console.log(Event)}
			>
			<span class="m-2 text-2xl font-bold">Check Email</span>
	</form>
</div>
</div>
</div>