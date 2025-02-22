<script lang="ts">
    import { enhance } from '$app/forms';
    import { getContext } from 'svelte';
    import { redirect, type SubmitFunction } from '@sveltejs/kit';
    import { Switch, Segment, type ToastContext} from "@skeletonlabs/skeleton-svelte";
    import pdf from "$lib/assets/wMenu.pdf"
    import dinner from "$lib/assets/icons/dinner.svg"
    
    export const toast: ToastContext = getContext('toast');
    let { 
        trigger = $bindable(),
        email = $bindable(),
    
    } = $props()
    let userMsg: string = $state('');

    let entree: string = $state('')
    function triggerMsg(
        title: string | undefined, message: string | undefined, 
        status: 'info'|'error'|'success'|undefined){
        toast.create({ 
            title: title,
            description: message,
            type: status,
        })
    }
    const onFormSubmit: SubmitFunction = () => {
        let title: string;
        let message: string;
        //let status: 'info'|'error'|'success'|undefined
		return async ({ result, update }) => {
			// @ts-expect-error
			let respData = await result.data
			await update({ reset:true })
			console.log("results ", respData)
            console.log(entree)
			
            switch (respData.success) {
				case true:
					title = "Success"
					message = "Form Submitted Successfully"
					triggerMsg(title, message, "success")
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
	<div class="flex flex-col justify-center gap-2 text-center text-balance lg:text-nowrap">
		<span class="text-4xl lg:text-6xl font-nfRegular text-secondary-700 dark:text-secondary-300"> Thank you for attending! </span>
		<span class="lg:text-xl font-nfPrintRegular whitespace-pre-line text-pretty text-secondary-700 dark:text-secondary-300">
			 We ask that you select the meal option for the reception.
		</span>
        <span class="text-error-300">
            Please complete the form for the amount of guests that you have.
        </span>
	</div>
	<div class="flex justify-center">
		<div
			class="h-[700px] w-3/4 rounded-3xl text-nfPrintBold"
		>
            <form 
            id="meal_form"
            method="POST"
            action="/rsvp?/meal"
            use:enhance={onFormSubmit}
            class="flex flex-col items-center w-full space-y-1 py-2">
            <label for="guest_email" class="label text-secondary-600 w-full">
                <input
                        class="input box-border h-[42px] font-medium dark:bg-surface-300 placeholder:text-primary-50 text-black text-center"
                        name="email"
                        type="text"
                        placeholder=" Email "
                        bind:value={email}
                        maxlength="50"
                        required
                    />
            </label>
                <label for="entree" class="label text-secondary-600 w-full text-pretty">
                    <Segment base="md:flex variant-filled-primary hover:variant-filled-tertiary" name="entree" orientation="vertical" bind:value={entree}>
                        <Segment.Item value="turkey">Turkey</Segment.Item>
                        <Segment.Item value="meatloaf">Wild Rice Meatloaf</Segment.Item>
                        <Segment.Item value="ravioli">Vegan Ravioli</Segment.Item>
                    </Segment>
                </label>
                <button class="preset-filled-primary-500 btn mx-4 flex items-center space-y-2
							transition
							ease-out
							duration-200
							hover:scale-105
							hover:-translate-y-3
							hover:shadow-2xl
                            hover:preset-filled-secondary-500
							"
							onsubmit={()=>console.log(Event)}
							>
					<span class="m-2 text-2xl font-bold">Submit</span>
					<div>
						<img src={dinner} alt="food holder thingy" class="h-12 w-12" />
					</div>
				</button>
            </form>
        </div>
    </div>
</div>