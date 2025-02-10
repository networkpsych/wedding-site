<script lang="ts">
	import { getContext } from 'svelte'
	import {type ToastContext} from '@skeletonlabs/skeleton-svelte'
	import Progress from "$lib/Progress.svelte"
	import Carousel from '$lib/carousel.svelte';
	
	// set a FileList for the Dropzone

	let { data }: any = $props();
	export const toast: ToastContext = getContext('toast');
	
	let {supabase, session, bucket} = data

	let files: FileList | undefined = $state(undefined)
	let imageList: any = $state({})
	let itemsMax: number = $state(0)
	let completion: number = $state(0)
	let uploading: boolean = $state(false)
	let testing: boolean = false;
	let imgStyle: string = "hidden lg:flex justify-start transition ease-in-out duration-300 origin-left size-20 lg:size-28 object-fit hover:scale-110 hover:rotate-6 hover:-translate-x-3 hover:shadow-2xl"
	
	function triggerMsg(
        title: string | undefined, message: string | undefined, 
        status: 'info'|'error'|'success'|undefined){
        toast.create({ 
            title: title,
            description: message,
            type: status,
        })
    }
	
	async function onUpload(e: Event) {
		let title: string | undefined;
		let message: string | undefined;

		e.preventDefault()
		itemsMax = files!.length
		uploading = true
		if (files!.length > 25){
			title = 'Item Limit'
			message = `You have more items than 25 items .\n${itemsMax}`
			triggerMsg(title, message, "error")
			return
		}
		else {
			if (testing){
				for (let i=0; i<files!.length; i++){
					let name = files![i].name;
					console.log(name)
					let size = Math.round(files![i].size / 1024 / 1024 * 100) / 100
					imageList[name] = `${String(size)}MB`
					completion += i
				}
			}
			else{
			for (let i=0; i < files!.length; i++){
				let size = Math.round(files![i].size / 1024 / 1024 * 100) / 100
				const {data, error } = await supabase.storage
					.from(bucket)
					.upload(
						files![i].name,
						files![i],
					)
				console.log(data)
				if (error) {
					// @ts-ignore
					if (error.statusCode === "409"){
						// @ts-ignore
						imageList[files![i].name] = `${String(size)}MB`
					}
					else {
						title = 'An Error Occurred'
						message = `The following error occured. If this problem persists, please contact the site admin.\n${error.message}`
						triggerMsg(title, message, "error")
						break
					}
				}
				else {
					imageList[files![i].name] = `${String(size)}MB`
				}
			completion += i
			}
		}
		await new Promise(r => setTimeout(r, 300))
		for (let i=0; i<files!.length; i++){
			let name = files![i].name;
			const imageContainer = document.getElementById(`cell-${name}`);
			const img = document.createElement('img');
			img.className = imgStyle
			img.src = URL.createObjectURL(files![i])
			imageContainer?.appendChild(img)
		}
			
		}
		
	}

</script>

<div class="flex flex-col gap-4">
	<div class="flex justify-center text-secondary-50 h-fit">
		<div class="p-5 text-center">
			<h3 class="space-y-2 text-4xl font-semibold py-5 font-nfExtraBold text-primary-500 dark:text-primary-100
			">Share Your Photos!</h3>
			<span class="text-primary-500 dark:text-primary-100 text-balance md:text-xl">
				Share some of your favorite photos of the couple!
			</span>
			<form
			class="w-fill text-tertiary-900 p-5 border-solid"
			name="files"
			method="POST"
			onchange={onUpload}
			>
			<input type='file' accept="image/*" bind:files multiple>
		</form>
		</div>
	</div>
	{#if !uploading}
		<Carousel />
	{:else}
		<div class="flex lg:col-span-2">
			<Progress uploadList={imageList}/>
		</div>
		<button class="button-base-styles" onclick={() => {uploading = false; imageList = {};}}>
			Clear
		</button>
	{/if}
	<div></div>

</div>
