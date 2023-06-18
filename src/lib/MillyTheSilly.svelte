<script lang="ts">
	let isSerious = false

	function toggleMilly(element: MouseEvent) {
		const milly = element.target as HTMLImageElement
		milly.src = isSerious ? '/icons/sillymilly.webp' : '/icons/seriousmilly.webp'
		isSerious = !isSerious
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<img
	src="/icons/sillymilly.webp"
	alt="Milly the Silly"
	height="50px"
	width="50px"
	class="rounded-xl shadow-lg"
	on:click={(e) => toggleMilly(e)}
/>

<style lang="postcss">
	img {
		transition: transform 0.25s;
		&:hover {
			transform: rotate(360deg);
		}
	}
</style>
