<script lang="ts">
	import { FileDropzone, ProgressBar } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition'
	import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
	import Carousel from '$lib/carousel.svelte';
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
							uploadStatus = 'paused';
							break;
						case 'running':
							console.log('Upload is running');
							break;
					}
				},
				(error) => {
					switch (error.code) {
						case 'storage/unauthorized':
							uploadStatus = 'unauthorized';
							break;
						case 'storage/canceled':
							uploadStatus = 'canceled';
							break;
						case 'storage/unknown':
							uploadStatus = 'unknown';
							break;
					}
				}
			);
		}
	}
</script>

{#if triggeredEvent}
	{#if uploadStatus !== ''}
		{#if uploadStatus === 'paused'}
			<Warnings bind:this={sacVal}>
				<div class="alert-actions">
					<button
						type="button"
						class="variant-filled-warning absolute inset-x-32 bottom-0 rounded-lg p-1 font-bold shadow-md duration-300 hover:variant-filled-warning hover:scale-110 hover:opacity-75 hover:ease-in-out"
						on:click={() => sacVal.$destroy()}>Close</button
					>
				</div>
			</Warnings>
		{:else if uploadStatus === 'unauthorized' || uploadStatus === 'canceled' || uploadStatus === 'unknown'}
			<Errors status={uploadStatus} bind:this={sacVal}>
				<div class="alert-actions">
					<button
						type="button"
						class="variant-filled-error absolute inset-x-32 bottom-0 rounded-lg p-1 font-bold shadow-md duration-300 hover:variant-filled-error hover:scale-110 hover:opacity-75 hover:ease-in-out"
						on:click={() => sacVal.$destroy()}>Close</button
					>
				</div>
			</Errors>
		{/if}
	{/if}
	<div transition:fade={{duration:400, delay:400}}>
		<div class="w-96">
			<ProgressBar
				value={uploadProgress}
				meter="bg-primary-900-50-token"
				track="bg-primary-300-600-token"
			/>
		</div>
		<div class="p-3">
			<button
				type="button"
				class="variant-soft-primary btn text-lg font-bold text-surface-800 hover:variant-soft-secondary"
				on:click={resetPage}>Reset Screen</button
			>
		</div>
		<div>
			<div class="size-1/2 pb-3">
				{#each filesArr as file, i}
					<ul class="list">
						<li class="p-4">
							<span><img class="size-24 space-y-2 rounded-full" src={images[i]} alt="" /></span>
							<span class="flex-auto text-lg font-bold"
								>{file.name} - {(file.size / (1024 * 1024)).toFixed(2)}MB</span
							>
						</li>
					</ul>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center px-12 pb-52">
		<div class="flex flex-col items-center text-black">
			<div class="space-y-2 text-4xl font-semibold">Want to share a photo?</div>
			<div class="w-3/4 text-balance text-center text-2xl m-5 ">
				<span>
					If you do, we would like to share those photos during the reception! These photos can
					include any moment that has Brayden and/or Madeline.
				</span>
			</div>
		</div>
		<hr />
		<div class="pb-1">
			<Carousel />
		</div>
		<FileDropzone
			class="variant-glass-surface dark:variant-glass-tertiary 
			dark:border-tertiary-600 w-[200px] md:w-[700px] text-primary-900 dark:text-surface-200"
			id="file-dropzone"
			border="border-solid"
			slotMeta="opacity-90 text-md text-primary-900 dark:text-surface-200"
			name="files"
			accept="image/*"
			bind:files
			on:change={onChangeHandler}
			multiple
		>
			<svelte:fragment slot="meta">PNG, JPG, and GIF are allowed</svelte:fragment>
		</FileDropzone>
	</div>
{/if}
