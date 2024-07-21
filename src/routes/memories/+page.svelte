<script lang="ts">
	import { FileDropzone, Modal, ProgressBar } from '@skeletonlabs/skeleton';
	import type { SubmitFunction } from '@sveltejs/kit';
	import {getToastStore, type ToastSettings} from '@skeletonlabs/skeleton'
	import Errors from '$lib/Errors.svelte';
	import Warnings from '$lib/Warnings.svelte';
	
	// set a FileList for the Dropzone
	export let data
	const toast = getToastStore();
	let {supabase, session, bucket} = data

	let files: FileList;
	let formData: FormData;
	let imageList: string[]

	const t: ToastSettings = {
		message: '',
		background: 'variant-filled-error'
	}

	$: triggeredEvent = false;
	$: imageList = [];

	function reset(): void {
		triggeredEvent = false;
	}


	async function onUpload(e: Event) {
		e.preventDefault()
		for (let i=0; i < files.length; i++){
			
			const {data, error } = await supabase.storage
				.from(bucket)
				.upload(
					files[i].name,
					files[i],
				)

			if (error) {
				console.log(error)
				// @ts-ignore
				if (error.statusCode === "409"){
					// @ts-ignore
					imageList.push(`${files[i].name} -- ${error.error}`)	
				}
				else {
					t.message = `The following error occured. If this problem persists, please contact the site admin.\n${error.message}`
					toast.trigger(t)
					break;
				}
			}
			console.log(data)
		}
		if (imageList.length > 0)
			triggeredEvent = true
	}


</script>
{#if !triggeredEvent}
<div class="flex flex-col items-center justify-center px-12 pb-52">
	<div class="flex flex-col items-center text-black">
		<div class="space-y-2 text-4xl font-semibold">Want to share a photo?</div>
		<div class="w-3/4 text-balance text-center text-2xl m-5">
			<span>
				If you do, we would like to share those photos during the reception! These photos can
				include any moment that has Brayden and/or Madeline.
			</span>
		</div>
	</div>
	<hr />
		<FileDropzone
			class="variant-glass-surface w-[200px] md:w-[700px] text-primary-900"
			border="border-solid"
			slotMeta="opacity-90 text-md text-primary-900"
			name="files"
			accept="image/*"
			method="POST"
			bind:files
			on:change={onUpload}
			multiple
		>
	
			<svelte:fragment slot="meta">PNG, JPG, and GIF are allowed</svelte:fragment>
		</FileDropzone>	
	</div>
	{:else}
	<div class="relative card size-96 m-auto p-4 variant-soft-tertiary shadow-xl">
		<div class="text-primary-500 font-nfPrintBold">
			<h3 class="py-5 text-2xl">Uploaded Files</h3>
			<ul class="flex flex-col justify-left p10">
				{#each imageList as f}
					<li>
						{f}
					</li>
				{/each}
			</ul>
		</div>
		<button class="button bg-primary-400 rounded-2xl h-12 w-24 m-auto absolute inset-x-0 bottom-10" 
			on:click={reset}>Continue</button>
	</div>
{/if}