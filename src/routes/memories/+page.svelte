<script lang="ts">
	import { FileButton } from '@skeletonlabs/skeleton'
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
	let testing: boolean = true;
	let imgStyle: string = "hidden lg:flex justify-start transition ease-in-out duration-300 origin-left size-20 lg:size-28 object-fit hover:scale-110 hover:rotate-6 hover:-translate-x-3 hover:shadow-2xl"
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
			if (testing){
				for (let i=0; i<files.length; i++){
					let name = files[i].name;
					console.log(name)
					let size = Math.round(files[i].size / 1024 / 1024 * 100) / 100
					imageList[name] = `${String(size)}MB`
					completion += i
				}
			}
			else{
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
		await new Promise(r => setTimeout(r, 300))
		for (let i=0; i<files.length; i++){
			let name = files[i].name;
			const imageContainer = document.getElementById(`cell-${name}`);
			const img = document.createElement('img');
			img.className = imgStyle
			img.src = URL.createObjectURL(files[i])
			imageContainer?.appendChild(img)
		}
			
		}
		
	}

</script>

<div class="flex flex-col gap-4">
	<div class="flex justify-center text-secondary-50 h-fit">
		<div class="p-5 text-center">
			<h3 class="space-y-2 text-4xl font-semibold py-5 font-nfExtraBold text-black
			">Share Your Photos!</h3>
			<span class="text-black text-balance md:text-xl">
				Share some of your favorite photos of the couple!
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
	</div>
	
	<div class="flex lg:col-span-2">
		<Progress uploadList={imageList}/>
	</div>
</div>
