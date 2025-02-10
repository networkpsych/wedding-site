<script lang="ts">
    import { type AboutLinks } from './types';
    
    let {linkItems} = $props()

    let div_class = "transition ease-in-out duration-500 origin-bottom card size-1/6 p-1 m-auto text-center variant-ghost-primary dark:variant-ghost-secondary hover:translate-y-6 hover:-skew-y-3 hover:shadow-2xl hover:scale-110 hover:bg-primary-500"
    let head_class = "card-header"
    let sect_class = "lg:text-4xl p-1"
    let foot_class = "hidden lg:flex lg:justify-center lg:text-lg p-1"

</script>

{#snippet div(item: AboutLinks)}
    <div class={div_class}>
        <a href={item.url} target="_blank">
            <header class={head_class}>
                <img src={item.image} alt={item.alt}/>
            </header>
            <section class={sect_class}>
                <span>{item.topic}</span>
            </section>
            <footer class={foot_class}>
                <span>{item.desc}</span>
            </footer>
        </a>
    </div>
{/snippet}

{#each linkItems as item}
    {@render div(item)}
{/each}