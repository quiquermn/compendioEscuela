<script>
	import { createEventDispatcher } from 'svelte';

	export let defaultOpen = false;

	const dispatch = createEventDispatcher();
	let isOpen = defaultOpen;

	function toggleSpoiler() {
		isOpen = !isOpen;
	}
</script>

<div
	class="spoileruwu"
	style={isOpen === true
		? 'background-color:transparent'
		: 'background-image:url("/imgs/unhide.svg");'}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={toggleSpoiler}>
		<div
			style={isOpen === false
				? 'user-select: none;color:transparent'
				: 'user-select: all;color:inherit'}
		>
			<slot />
		</div>
	</div>
</div>

<style>
	.spoileruwu {
		padding: 0.2em;
		background-color: white;
		background-image: none;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 0.2em;
		display: inline-block;
		cursor: pointer;
	}
</style>
