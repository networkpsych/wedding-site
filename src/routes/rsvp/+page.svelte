<script lang="ts">
    import {enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit'
    import {InputChip, ListBox, RadioGroup, RadioItem} from '@skeletonlabs/skeleton'
	import { assets } from '$app/paths';
    import wedding_icon from "$lib/assets/icons/wedding-svgrepo-com.svg";
    import hug_photo from "$lib/assets/aug_hug_2020.jpg";


    const defaults = {
        attendance: false,
    }

    const formData = {
        name: "",
        email: "",
        attendance: defaults.attendance,
        guests: 0,
    }

    $: attendance = false;

    const onFormSubmit: SubmitFunction = () => {
        formData.attendance = defaults.attendance;
        return async({update}) => {
            await update({reset:false});
        };
    };

</script>
<div class="flex flex-col justify-center p-4">
    <div class="flex justify-center text-wrap items-center pb-5">
        <span class="text-6xl font-inspiration font-bold">
            Received your invitation? 
        </span>
    </div>
    <div class="flex flex-wrap text-center justify-center text-2xl">
        <p>
            Well it's time to RSVP!
        </p>
    </div>
</div>
<div class="flex flex-col justify-center items-center">
    <div class="card box-content max-w-sm md:max-w-lg shadow-md rounded-3xl overflow-hidden variant-glass-primary dark:variant-ghost-primary-400">
            <img src={hug_photo} alt="" class="w-full aspect-[21/9]"/>
            <form method="POST" use:enhance={onFormSubmit} class="flex flex-col items-center space-y-4 py-4">
                <label for="attendance" class="label font-bold">
                    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" >
                        <RadioItem bind:group={attendance} name="attending" value={true}>Attending</RadioItem>
                        <RadioItem bind:group={attendance} name="not_attending" value={false}>Not Attending</RadioItem>
                    </RadioGroup>
                </label>
                <label class="label text-secondary-600"> 
                    <input class="input box-border h-[42px] w-[262.58px] text-black dark:bg-tertiary-300 placeholder:text-primary-800" name="name" type="text" placeholder=" Name " required>
                </label>        
                <label class="label text-secondary-600">
                    <input class="input box-border h-[42px] w-[262.58px] text-black dark:bg-tertiary-300 placeholder:text-primary-800" name="email" type="text" placeholder=" Email Address" required>
                </label>
                {#if attendance == true}
                    <label class="label text-secondary-600">
                        <input class="input box-border h-[42px] w-[262.58px] text-black dark:bg-tertiary-300 placeholder:text-primary-800" name="guests" type="text" placeholder=" Number of Guests ">
                    </label>
                {/if}
                <!-- type="button" breaks functionality. Don't know why though...-->
                <button class="btn variant-filled-tertiary mx-6 space-y-3 flex items-center">
                    <span class="font-bold text-2xl m-2">Submit</span>
                        <div>
                            <img src={wedding_icon} alt="" class="h-12 w-12"/>
                        </div>
                </button>
        </form>
    </div>
</div>
