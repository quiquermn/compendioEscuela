<script lang="ts">
	import '../app.postcss'
	import 'katex/dist/katex.min.css'

	import type { LayoutData } from './$types'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { AppShell, storePopup } from '@skeletonlabs/skeleton'
	import Header from '$lib/mainComponents/Header.svelte'
	import Footer from '$lib/mainComponents/Footer.svelte'

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })

	export let data: LayoutData
</script>

<svelte:head>
	<link rel="canonical" href="https://compendio.quiqueso.com{data.url}" />
</svelte:head>

<AppShell regionPage="scroll-smooth">
	<svelte:fragment slot="pageHeader">
		<Header></Header>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer></Footer>
	</svelte:fragment>
	<!-- ... -->
</AppShell>
