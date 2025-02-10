<script lang="ts">
	
	import amazon from "$lib/assets/amazon.svg"
	import target from "$lib/assets/target.svg"
	import spotify from "$lib/assets/spotify.svg"
	

	
	let spotifyLink ='https://open.spotify.com/playlist/3cZWlFZhFbIsPRMxwE0Z0Z?si=feb4a52de40c4850&pt=069734137ccd443c481a7f71da35b3d5';
	let registrySiteOne = 'https://www.amazon.com/wedding/share/bnm2025';
	let registrySiteTwo = 'https://www.target.com/gift-registry/gift/bnm2025';


	let curr_date = new Date();
	let wedding_date = new Date(2025, 4, 31, 15, 59, 59);
	let d = Math.floor((wedding_date.getTime() - curr_date.getTime()) / 1000 / 60 / 60 / 24);

</script>
{#if d > 180}
	<div class="grid grid-cols-1 place-items-center content-center">
		<span class="content-center text-center text-6xl text-error-400 font-nfRegular">
			Registries are coming soon!
		</span>
	</div>
{:else}
<div class="grid grid-cols-1 place-items-center content-center gap-5 p-3 lg:!grid-rows-3">
		<a href={registrySiteTwo}>
			<img src={target} alt="link to target registry" 
				class="ease-in-out duration-500 hover:scale-125 hover:-translate-x-4 hover:translate-y-4 hover:skew-x-6"
			/>
		</a>
		<a href={registrySiteOne}>
		<img src={amazon} alt="link to amazon registry" 
			class="ease-in-out duration-500 hover:scale-125 hover:-translate-x-4 hover:translate-y-4 hover:skew-x-6"
		/>
		
		</a>
		<a href={spotifyLink}>
			<img src={spotify} alt="link to spotify playlist" 
				class="ease-in-out duration-500 hover:scale-125 hover:-translate-x-4 hover:translate-y-4 hover:skew-x-6"
			/>
		</a>
	</div>
{/if}
