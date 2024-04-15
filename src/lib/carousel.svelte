<script lang="ts">
    import { onMount } from 'svelte';
    import { ProgressBar } from '@skeletonlabs/skeleton';
    import { getStorage, ref } from 'firebase/storage';

    function loadImage(url: string){

        let img = new Image();
        img.src = url
        return img
    }

    let images: any = []

    onMount(async () => {
        const res = await fetch('gs://wedding-site-12f71.appspot.com/wedding_photos/carousel')
        images = await res.json()
    })
    //const handleNextClick = () => {
    //    carousel.goToNext();
    //}
</script>

{#each images as src}
    <div class="">
        <img src={src.url} alt={src.description} class="w-1/3 h-1/3" />
    </div>
{:else}
    <div>
        <ProgressBar />
    </div>
{/each}

