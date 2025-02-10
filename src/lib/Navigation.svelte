<script lang="ts">
	import {type Snippet } from 'svelte'
	import {type NavLinks} from './types'

	interface Props {
		links: NavLinks[];
	}

	let { links }: Props = $props();

	let nav_container = "lg:flex lg:justify-start lg:m-3 lg:p-4 lg:pl-10 gap-x-2 text-left h-20 w-full"
	let nav_class = "size-fit p-4 text-start text-xl lg:text-2xl font-nfExtraBold text-surface-600 dark:text-secondary-700 rounded-3xl hover:preset-outlined-primary-600-400 hover:text-secondary-900-100 hover:scale-110 hover:translate-x-3 hover:translate-y-3 hover:-skew-y-6 hover:skew-x-3 hover:shadow-2xl hover:duration-500 hover:ease-in-out duration-700"

</script>
{#snippet div(navOpt: NavLinks)}
		<div class={nav_class}>
			<a  href={navOpt.link}>
				{navOpt.name}
			</a>
		</div>
{/snippet}

<div class={nav_container}>
{#each links as navLink}
	{@render div(navLink)}
{/each}

</div>
