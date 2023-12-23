<script lang="ts">
	import '../app.postcss'
	import 'katex/dist/katex.min.css'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { AppShell, storePopup } from '@skeletonlabs/skeleton'
	import Header from '$lib/mainComponents/Header.svelte'
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<Header></Header>
	</svelte:fragment>
	<slot />

	<!-- ... -->
</AppShell>
