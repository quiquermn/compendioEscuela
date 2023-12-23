<script lang="ts">
	import { page } from '$app/stores'

	import jollyMilly from './milly_imgs/jollymilly.webp'
	import seriousMilly from './milly_imgs/seriousmilly.webp'
	import sillyMilly from './milly_imgs/sillymilly.webp'

	let isSerious = false
	let isJolly = false

	function toggleMilly(element: MouseEvent) {
		const milly = element.target as HTMLImageElement

		milly.src = isSerious ? jollyMilly : seriousMilly
		isSerious = !isSerious
	}
	function jollyMillyToggle(element: MouseEvent) {
		const milly = element.target as HTMLImageElement

		if (isSerious) return

		milly.src = isJolly ? sillyMilly : jollyMilly
		isJolly = !isJolly
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
	src={sillyMilly}
	alt="Milly the Silly"
	height="50px"
	width="50px"
	class="rounded-xl shadow-lg"
	on:click={(e) => toggleMilly(e)}
	on:mouseenter={(e) => jollyMillyToggle(e)}
	on:mouseleave={(e) => jollyMillyToggle(e)}
/>
