<script lang="ts">
let gif1 = "https://media1.tenor.com/m/pwyL3zbV_BkAAAAC/nothing-to-see-here-people-johnny-rose.gif";
let vine = "https://www.youtube.com/watch?v=ECrA05A1gHc";
let home = "$lib/assets/icons/return.svg";
let duck = "$lib/assets/icons/duck.svg";
</script>
<div class="flex lg:flex-col text-start lg:text-center m-auto font-bold">
    <span class="text-3xl lg:text-5xl text-error-900 font-bungeeshade">404 link not found</span>
    <span class="lg:text-3xl text-black lg:text-tertiary-900">
        Looks like you tried to access something that's not ready yet!
    </span>
    
</div>
<div class="flex flex-col p-3">
        <button class="btn variant-filled-secondary w-1/6 m-auto">
            <a href="/home">
                <img src={home} />
            </a>
        </button>
        <button class="btn variant-filled-tertiary w-1/6 m-auto">
            <a href={vine} target="_blank"></a>
                <div>
                    <img src={duck} />
                </div>
        </button>
    
</div>
<div class="flex justify-center m-auto p-8">
    <img src="{gif1}" alt="404 gif message"/>
</div>