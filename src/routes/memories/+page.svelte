<script lang="ts">
    import {FileDropzone, FileButton} from '@skeletonlabs/skeleton';
    import Carousel from '$lib/carousel.svelte';
    import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
    import { onMount } from 'svelte';
    import { fbApp, fbConfig } from '$lib/firebase/firebase.app';
	import type { ActionData } from '../$types';

    const storage = getStorage();
    console.log(fbConfig)
    let files: FileList;
    const fileSizeLimit = 26843545600; // 25 MB
    let res = 0;

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

    async function onChangeHandler(e: Event): Promise<void> {
        e.preventDefault();
        //@ts-ignore
        let file = document.querySelector("input[type=file]")!.files;
        
        for (let i = 0; i < file.length; i++){
            if (file[i].size > fileSizeLimit){
                console.log(`File size too big: ${file.name}: ${file.size}`)
            }

            let uri = `gs://wedding-site-12f71.appspot.com/wedding_photos/wedding_memories_upload/${makeid(7)}`
            const storageRef = ref(storage, `${uri}`)
            let metadata = {
                contentType: file[i].type,
                dateUploaded: file[i].lastModifiedDate
            }
            console.log(metadata)

            const uploadTask = uploadBytesResumable(storageRef, file[i], metadata)

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload in paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;

                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        console.log('User cancelled upload');
                        break;
                    case 'storage/unknown':
                        console.log('an unknown error occured');
                        break;
                }
            })
        }

    }


</script>
<div class="flex flex-col items-center justify-center gap-3 px-11 pb-52">
    <div class="flex flex-col items-center">
        <div class="text-4xl font-semibold space-y-3">
            Want to share a photo?
        </div>
        <div class="m-5 dark:text-primary-200">
            <span class="text-lg text-center">
                If you do, we would like to share those photos during the reception!
                These photos can include any moment that has Brayden and/or Madeline.
            </span>
        </div>
    </div>
    <hr />
    <div>
        <Carousel />
    </div>
    <div>

    </div>
    <FileDropzone 
        class="variant-glass-tertiary border-none"
        id="file-dropzone"
        name="files" 
        accept="image/*"
        bind:files={files}
        on:change={onChangeHandler}
        multiple
        >
        <svelte:fragment slot="meta">PNG, JPG, and GIF are allowed</svelte:fragment>
    </FileDropzone>
</div>


