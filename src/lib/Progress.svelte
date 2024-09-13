<script lang="ts">
    import testImg from "$lib/assets/capitol_reef.jpg"
    export let uploadList: any

    let imgList: any;
    let img: any;
    $: imgList = {};

    let imgStyle: string = "absolute z-10 transition ease-in-out duration-300 size-52 object-fit rounded-full hover:scale-110 hover:skew-y-3 hover:-skew-x-3 hover:-translate-x-3 hover:"


    

</script>

<div class="w-3/5 m-auto p-5 variant-soft-tertiary rounded-2xl">
    <div class="grid grid-cols-3 content-center gap-x-28 lg:gap-5p-1 lg:text-4xl font-nfExtraBold text-nowrap">
        <div class="hidden lg:flex justify-start items-center m-auto">Image</div>
        <div class="size-20 lg:size-28 flex justify-center items-center m-auto">Name</div>
        <div class="size-20 lg:size-28 flex justify-center items-center m-auto">Size</div>
    </div>
    <div class="">
        {#each Object.entries(uploadList) as [key, val]}
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:text-2xl pb-2 font-nfExtraBold text-wrap">
            <div id="cell-{key}" class="hidden lg:flex justify-center">
            </div>
            <div id="key" class='w-15 lg:size-28 flex justify-center items-center m-auto text-center'>
                {#if key.length > 10}
                {key.slice(0,3)+"..."+key.slice(-6)}
                {:else}
                    {key}
                {/if}
            </div>
            <div class="w-15 lg:size-28 flex justify-start items-center m-auto">{val}</div>
        </div>
        {/each}
    </div>
</div>

