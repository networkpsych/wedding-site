<script lang="ts">
    // TODO :: Evaluate need of file
    
    import { onMount } from 'svelte';
    import logo from "$lib/assets/B&M.png"
    import title from '$lib/assets/icons/title.svg'

    let canvas: any;
    

    onMount(() => {
        const ctx = canvas.getContext('2d');
        let frame: any;

        (function loop() {
            frame = requestAnimationFrame(loop);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = (i / canvas.height) >>> 0;

				const t = window.performance.now();

				const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
				const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1400);
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}
            ctx.putImageData(imageData, 0, 0);
        })();

        return () => {
            cancelAnimationFrame(frame);
        };
    });

    $: innerWidth = 0;
</script>
<svelte:window bind:innerWidth />

<canvas bind:this={canvas} width={350} height={200} class=""/>

{#if innerWidth <= 1024}
    <img src="{logo}" alt="title pic" />
    <style>
        canvas {display: hidden;}
    </style>
{/if}
<style>
    canvas {
        width: 100%;
        height: 100%;
        opacity: 100%;
        filter: drop-shadow(5px 5px 3px #E8CD73);
        background-color: #AF9AB2;
        -webkit-mask: url($lib/assets/B&M.png) no-repeat;
        mask: url($lib/assets/B&M.png) no-repeat;
    }
</style>





