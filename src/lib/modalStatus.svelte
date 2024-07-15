<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import  { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";

    export let parent: SvelteComponent;


    const modalStore = getModalStore();
    
    const modal: ModalSettings = {
        type: 'component',
        component: 'modalSuccess'
    }

    const cBase = 'card bg-primary-300-600-token m-3 p-4 w-modal space-y-4 text-center text-black font-nfPrintBold';
	const cHeader = 'text-3xl';
    const cError = 'text-2xl m-3'

</script>

{#if $modalStore[0]}
    <div class={cBase}>
        <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
        {#if $modalStore[0].meta.active}
            {#each $modalStore[0].meta.files as file, i}
                <ul class="flex-auto text-lg font-bold">
                    <li>
                        <p>{file.name} - {(file.size / (1024 * 1024)).toFixed(2)}MB</p>
                    </li>
                </ul>
            {/each}
        {:else}
            <article class={cError}>{$modalStore[0].body ?? '(body missing)'}</article>
        {/if}
    </div>
{/if}