<script lang="ts">
	let isSerious = false
	let isJolly = false

	function toggleMilly(element: MouseEvent) {
		const milly = element.target as HTMLImageElement

		milly.src = isSerious ? '/icons/jollymilly.webp' : '/icons/seriousmilly.webp'
		isSerious = !isSerious
	}
	function jollyMilly(element: MouseEvent) {
		const milly = element.target as HTMLImageElement

		if (isSerious) return

		milly.src = isJolly ? '/icons/sillymilly.webp' : '/icons/jollymilly.webp'
		isJolly = !isJolly
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
	on:mouseenter={(e) => jollyMilly(e)}
	on:mouseleave={(e) => jollyMilly(e)}
/>
