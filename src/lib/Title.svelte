<script lang="ts">
	// TODO :: Evaluate need of file

	import { onMount } from 'svelte';
	import logo from '$lib/assets/B&M.png';
	import title from '$lib/assets/icons/title.svg';

	let canvas: any = $state();

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

	let innerWidth = $derived(0);
</script>

<canvas bind:this={canvas} width={400} height={350}></canvas>

<style>
	canvas {
		width: 200%;
		height: 200%;
		opacity: 100%;
		filter: drop-shadow(5px 5px 3px #e8cd73);
		background-color: #af9ab2;
		-webkit-mask: url($lib/assets/icons/title.svg) no-repeat;
		mask: url($lib/assets/icons/title.svg) no-repeat;
	}
</style>
