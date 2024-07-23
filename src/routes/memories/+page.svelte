<script lang="ts">
	import { FileButton,  ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton'
	import Progress from "$lib/Progress.svelte"
	import {getToastStore, type ToastSettings} from '@skeletonlabs/skeleton'

	import { fade } from 'svelte/transition'

	// set a FileList for the Dropzone
	export let data
	
	const toast = getToastStore()
	const t: ToastSettings = {
		message: '',
		background: 'variant-filled-error'
	}
	
	let {supabase, session, bucket} = data

	let files: FileList
	let imageList: any
	let itemsMax: number
	let completion: number
	let uploading: boolean

	$: imageList = {}
	$: itemsMax = 0
	$: completion = 0
	$: uploading = false

	async function onUpload(e: Event) {
		e.preventDefault()
		itemsMax = files.length
		uploading = true
		if (files.length > 25){
			t.message = `You have more items than 25 items .\n${itemsMax}`
			toast.trigger(t)
			return
		}
		else {
			for (let i=0; i < files.length; i++){
				let size = Math.round(files[i].size / 1024 / 1024 * 100) / 100
				const {data, error } = await supabase.storage
					.from(bucket)
					.upload(
						files[i].name,
						files[i],
					)

				if (error) {
					// console.log(error)
					// @ts-ignore
					if (error.statusCode === "409"){
						// @ts-ignore
						imageList[files[i].name] = `${String(size)}MB`
					}
					else {
						t.message = `The following error occured. If this problem persists, please contact the site admin.\n${error.message}`
						toast.trigger(t)
						break
					}
				}
				else {
					imageList[files[i].name] = `${String(size)}MB`
				}
			completion += i
			}
			
		}
		
	}

	


</script>

<div class="grid grid-rows-2 md:grid-rows-[300px_minmax(900px,_1fr)_100px] min-h-screen md:h-[360px] w-1/2 md:w-[700px] m-auto">
	<div class="text-secondary-50 card h-fit bg-gradient-to-br variant-glass-tertiary">
		<div class="p-5 text-center">
			<h3 class="space-y-2 text-4xl font-semibold py-5 font-nfExtraBold text-black
			">Share Your Photos!</h3>
			<span class="text-black text-balance md:text-xl">
				<p>If you do, we would like to share those photos during the reception! These photos can include any moment that has Brayden and/or Madeline.</p>
			</span>
			<FileButton
			class="w-fill text-tertiary-900 p-5"
			border="border-solid"
			name="files"
			accept="image/*"
			method="POST"
			bind:files
			on:change={onUpload}
			multiple
			>
				Upload
			</FileButton>
		</div>
		
		{#if uploading}
		<div class="w-3/4 mx-auto p-1">
			<ProgressBar
			height="h-4"
			meter="bg-secondary-200"
			track="bg-tertiary-600/40"
			value={completion}
			max={itemsMax}
			/>
		</div>
		{/if}
		
	</div>
	{#if uploading}
	<div>
		<Progress uploadList={imageList}/>
	</div>
	{:else}
	<div></div>
	{/if}
</div>
