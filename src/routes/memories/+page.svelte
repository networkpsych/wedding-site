<script lang="ts">
    import {FileDropzone, FileButton} from '@skeletonlabs/skeleton';
    import Carousel from '$lib/carousel.svelte';
    import { onMount } from 'svelte';

    let ready: boolean = false
    let files: FileList;
    const fileSizeLimit = 26843545600; // 25 MB

    function onChangeHandler(e: Event): void {
        for (let i = 0; i < files.length; i++){
            var x = files[i];
            console.log(x.size < fileSizeLimit ? x.size : "file too big")
            console.log(x.name)
        }
        console.log('file data: ', files);
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
    <FileDropzone class="content-center variant-glass-secondary border-none size-8/12"
        name="files" 
        accept="image/*"
        bind:files={files}
        multiple
        on:change={onChangeHandler}
        >
        <svelte:fragment slot="meta">PNG, JPG, and GIF are allowed</svelte:fragment>
    </FileDropzone>
</div>


