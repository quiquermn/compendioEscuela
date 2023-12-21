<script lang="ts">
	import { page } from '$app/stores'
	import sillyMilly from './sillymilly.png?enhanced'
	import jollyMilly from './jollymilly.png?enhanced'
	import seriousMilly from './seriousmilly.png?enhanced'
	let isSerious = false
	let isJolly = false

	let curMilly = sillyMilly

	function toggleMilly() {
		curMilly = isSerious ? jollyMilly : seriousMilly
		isSerious = !isSerious
	}

	function makeJollyMilly() {
		if (isSerious) return

		curMilly = isJolly ? sillyMilly : jollyMilly
		isJolly = !isJolly
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<enhanced:img
	src={curMilly}
	alt="Milly the Silly"
	class="h-[50px] w-[50px] rounded-xl shadow-lg"
	on:click={(e) => toggleMilly()}
	on:mouseenter={(e) => makeJollyMilly()}
	on:mouseleave={(e) => makeJollyMilly()}
/>
