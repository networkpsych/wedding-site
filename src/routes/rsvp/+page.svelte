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
<div class="flex flex-col justify-center items-center">
    <div class="card box-content max-w-lg shadow-md rounded-3xl overflow-hidden variant-ghost-primary dark:variant-ghost-primary-400">
            <img src={hug_photo} alt="" class="w-full aspect-[21/9]"/>
            <form method="POST" use:enhance={onFormSubmit} class="flex flex-col items-center space-y-5 mb-3">
                <label for="attendance" class="label">
                    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" >
                        <RadioItem bind:group={attendance} name="attending" value={true}>Attending</RadioItem>
                        <RadioItem bind:group={attendance} name="not_attending" value={false}>Not Attending</RadioItem>
                    </RadioGroup>
                </label>
                <label class="label"> 
                    <input class="input box-border h-10 w-72 dark:bg-surface-300 dark:text-primary-600" name="name" type="text" placeholder=" Name " required>
                </label>        
                <label class="label">
                    <input class="input box-border h-10 w-72 dark:bg-surface-300 dark:text-primary-600" name="email" type="text" placeholder=" Email Address" required>
                </label>
                {#if attendance == true}
                    <label class="label">
                        <input class="input box-border h-10 w-72 dark:bg-surface-300 dark:text-primary-600" name="guests" type="text" placeholder=" Number of Guests ">
                    </label>
                {/if}
                <!-- type="button" breaks functionality. Don't know why though...-->
                <button class="btn variant-filled-tertiary mx-6 space-y-3">
                    <span class="inline-flex space-x-3 align-bottom">
                        <p class="text-xl">Submit</p>
                        <img src={wedding_icon} alt="" class="h-10 w-10"/>
                    </span>
                </button>
        </form>
    </div>
</div>
