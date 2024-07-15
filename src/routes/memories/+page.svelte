<script lang="ts">
	import { FileDropzone, ProgressBar } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition'
	import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
	import {getModalStore, type ModalSettings} from '@skeletonlabs/skeleton'
	import Errors from '$lib/Errors.svelte';
	import Warnings from '$lib/Warnings.svelte';

	const storage = getStorage();
	const path = 'gs://wedding-site-12f71.appspot.com/wedding_photos/wedding_memories_upload/';
	const fileSizeLimit = 25000000; // 25 MB

	let files: FileList;
	let filesArr: any[] = [];
	let sacVal: any;

	$: triggeredEvent = false;
	$: images = [];
	$: uploadProgress = 0;
	$: uploadStatus = '';
	$: err = false;

	const modalStore = getModalStore();
    
    const modal: ModalSettings = {
        type: 'component',
        component: 'status',
		meta: {active:false}
    }

	function makeid(length: number) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	async function add_to_files_array() {
		filesArr = [...filesArr, ...files];
		Promise.all(filesArr.map(readImage)).then((values) => {
			//@ts-ignore
			images = values;
		});
	}

	function resetPage(): void {
		images = [];
		uploadProgress = 0;
		triggeredEvent = false;
	}

	function readImage(file: Blob) {
		return new Promise((resolve, reject) => {
			let viewer = new FileReader();
			viewer.onload = () => {
				resolve(viewer.result);
			};
			viewer.onerror = () => {
				reject(viewer);
			};
			viewer.readAsDataURL(file);
		});
	}

	async function onChangeHandler(e: Event): Promise<void> {
		e.preventDefault();

		//@ts-ignore
		let files = document.querySelector('input[type=file]')!.files;
		add_to_files_array();

		triggeredEvent = true;
		for (let i = 0; i < files.length; i++) {
			if (files[i].size > fileSizeLimit) {
				console.log(`File size too big: ${files.name}: ${files.size}`);
				return;
			}

			let uri = `${path}${makeid(7)}`;
			const storageRef = ref(storage, `${uri}`);
			let metadata = {
				contentType: files[i].type,
				dateUploaded: files[i].lastModifiedDate
			};
			console.log(metadata);

			const uploadTask = uploadBytesResumable(storageRef, files[i], metadata);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploadProgress = progress;
					console.log(`Upload is ${progress}% done`);
					switch (snapshot.state) {
						case 'paused':
							modal.title = "Paused"
							modal.body = "Upload has been paused."
							modalStore.trigger(modal)
							break;
						case 'running':
							console.log('Upload is running');
							break;
					}
				},
				(error) => {
					err = true
					modal.backdropClasses = '!variant-glass-error'
					// modal.title = "The submission had an error!"
					// modal.body = `${respData.errors.reason}`
					// modalStore.trigger(modal);
					switch (error.code) {
						case 'storage/unauthorized':
							modal.title = 'Unauthorized';
							modal.body = "You are not authorized to upload. Please contact site admin."
							break;
						case 'storage/canceled':
							modal.title = 'Cancellation';
							modal.body = "Upload has been canceled. If this was unintentional, then please contact site admin."
							uploadStatus = 'canceled';
							break;
						case 'storage/unknown':
							modal.title = 'Unknown';
							modal.body = "An unknown error occured. Please contact site admin."
							uploadStatus = 'unknown';
							break;
					}
				}
			);
		}
		if (!err){
		modal.backdropClasses = '!variant-glass-success'
		modal.title = "Files Uploaded"
		modal.meta = {active:true, files:filesArr}
		}
		modalStore.trigger(modal)
	}

</script>

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
		id="file-dropzone"
		border="border-solid"
		slotMeta="opacity-90 text-md text-primary-900"
		name="files"
		accept="image/*"
		bind:files
		on:change={onChangeHandler}
		multiple
	>
		<svelte:fragment slot="meta">PNG, JPG, and GIF are allowed</svelte:fragment>
	</FileDropzone>		
</div>
<!--
{#if triggeredEvent}
	<div class="w-auto h-auto variant-glass-surface">
		<ProgressBar
			value={uploadProgress}
			meter="bg-primary-900-50-token"
			track="bg-primary-300-600-token"
		/>
		<div class="p-3">
			<button
				type="button"
				class="variant-soft-primary btn text-lg font-bold text-surface-800 hover:variant-soft-secondary"
				on:click={resetPage}>Reset Screen</button
			>
		</div>
			<div class="grid grid-flow-row pb-3">
				{#each filesArr as file, i}
					<span>
						<img class="size-24 space-y-2 rounded-full" src={images[i]} alt="" />
					</span>
					<span class="flex-auto text-lg font-bold">
						{file.name} - {(file.size / (1024 * 1024)).toFixed(2)}MB
					</span>
				{/each}
			</div>
	</div>
{/if}
-->
