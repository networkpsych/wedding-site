<script lang="ts">
    import {FileDropzone} from '@skeletonlabs/skeleton';
    import wed_photo from "$lib/assets/icons/wedding-photos-svgrepo-com.svg"
    import bg_photo from "$lib/assets/carousel/50th anniversary-1.jpg"
    import Carousel from '$lib/carousel.svelte';
    const lines: string[] = [
    
    ]
    let ready: boolean = false
    let files: FileList;

</script>

<div class="flex flex-col items-center justify-center h-screen">
    <div class="flex card shadow-md w-1/3 h-1/3 p-4">
        <div>
            <div class="text-3xl font-semibold text-center space-y-3 card-header">
                Have any Memories<br>of the Couple?
            </div>
            <img class="p-4 " src={bg_photo} alt="beer drink" />
        </div>
    </div>
    <div class="m-5 text-primary-500 dark:text-primary-200">
        <span class="text-center">
                If you do, we would like to share those memories during the reception!<br>
                These memories can include any moment that has Brayden and/or Madeline.
        </span>
    </div>
    <div class="flex items-center size-1/2">
        <FileDropzone name="files" accept="image/*" bind:files={files} class="content-center bg-opacity-50">
            <svelte:fragment slot="meta">PNG, JPG, and GIF are allowed</svelte:fragment>
        </FileDropzone>
    </div>
    <Carousel />
</div>

