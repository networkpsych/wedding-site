<script lang="ts">
	let spotifyLink =
		'https://open.spotify.com/playlist/3cZWlFZhFbIsPRMxwE0Z0Z?si=feb4a52de40c4850&pt=069734137ccd443c481a7f71da35b3d5';
	let registrySiteOne = '/';
	let registrySiteTwo = '/';

	let curr_date = new Date();
	let wedding_date = new Date(2025, 4, 31, 15, 59, 59);

	let d = Math.floor((wedding_date.getTime() - curr_date.getTime()) / 1000 / 60 / 60 / 24);

</script>
{#if d > 180}
	<div class="logo-cloud grid-cols-1 place-items-center content-center gap-5 p-3 lg:!grid-rows-3">
		<span class="content-center text-center text-6xl text-error-400 font-nfRegular">
			Registries are coming soon!
		</span>
	</div>
{:else}
	<div class="logo-cloud grid-cols-1 place-items-center content-center gap-5 p-3 lg:!grid-rows-3">
		<a
			class="logo-item variant-glass-surface size-2/4 rounded-xl duration-300 hover:variant-glass-primary hover:scale-110 hover:ease-in-out"
			href={registrySiteOne}
		>
			<span class="text-3xl text-primary-500">Registry Site</span>
		</a>
		<a
			class="logo-item variant-glass-surface size-2/4 rounded-xl duration-300 hover:variant-glass-primary hover:scale-110 hover:ease-in-out"
			href={registrySiteTwo}
		>
			<span class="text-3xl text-primary-500">Registry Site</span>
		</a>
		<a
			class="logo-item variant-glass-surface size-2/4 rounded-xl duration-300 hover:variant-glass-primary hover:scale-110 hover:ease-in-out"
			href={spotifyLink}
		>
			<span class="text-3xl text-primary-500">Contribute to Spotify!</span>
		</a>
	</div>
{/if}
