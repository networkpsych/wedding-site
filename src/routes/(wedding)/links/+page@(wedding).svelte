<script>
	let spotifyLink =
		'https://open.spotify.com/playlist/3cZWlFZhFbIsPRMxwE0Z0Z?si=feb4a52de40c4850&pt=069734137ccd443c481a7f71da35b3d5';
	let registrySiteOne = '/';
	let registrySiteTwo = '/';
	let error = "/404"
</script>

<div class="logo-cloud grid-cols-1 place-items-center content-center gap-5 p-3 lg:!grid-rows-3">
	<a
		class="logo-item variant-glass-surface size-2/4 rounded-xl duration-300 hover:variant-glass-primary hover:scale-110 hover:ease-in-out"
		href={error}
	>
		<span class="text-3xl text-primary-600">Registry Site</span>
	</a>
	<a
		class="logo-item variant-glass-surface size-2/4 rounded-xl duration-300 hover:variant-glass-primary hover:scale-110 hover:ease-in-out"
		href={error}
	>
		<span class="text-3xl text-primary-600">Registry Site</span>
	</a>
	<a
		class="logo-item variant-glass-surface size-2/4 rounded-xl duration-300 hover:variant-glass-primary hover:scale-110 hover:ease-in-out"
		href={spotifyLink}
	>
		<span class="text-3xl text-primary-600">Contribute to Spotify!</span>
	</a>
</div>
