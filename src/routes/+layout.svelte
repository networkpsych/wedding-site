<script lang="ts">
	import '../app.postcss';
	import { afterNavigate } from '$app/navigation';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing'

	let visible = false;
	let dur: number;
	let delay: number;

	afterNavigate(({from}) =>{
		dur = from === null ? 1 : 0;
		delay = from === null ? 1 : 0;
		visible = true;
	})

</script>

<AppShell>
	{#if visible}
	<div transition:fade={{ duration: dur, delay: delay, easing: sineInOut }}>
		<slot />
	</div>
	{:else}
		<slot />
	{/if}
</AppShell>
