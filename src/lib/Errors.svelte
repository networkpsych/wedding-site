<script lang="ts">
    import { fade } from 'svelte/transition'
    import error_icon from "$lib/assets/icons/banned-wrong-svgrepo-com.svg"
    import { onDestroy } from "svelte";


    export let status: string;
    
    $: status = '';
    let error: string;

    switch (status){
        case 'unknown':
            error = "An unknown error has occured. Please try again later."
            break;
        case 'canceled':
            error = "The user has canceled the upload. If this was an error, please try again."
            break;
        case 'unauthorized':
            error = "You are unauthorized to upload. If you believe this is a mistake, please contact the site admin."
            break;
        default:
            error = ''
    }

    onDestroy(() => console.log("Error ack"))
    
</script>
<div class="flex justify-center static">
    <aside class="alert variant-glass-error w-[400px] h-[200px] text-black font-bold" transition:fade|local={{duration:300}}>
        <div>
            <img class="size-10 md:size-14" src={error_icon} alt="warning symbol" />
        </div>
        <div>
            <span class="text-xl md:text-2xl">Warning</span>
            <p>{error}</p>
        </div>
        <slot />
    </aside>
</div>