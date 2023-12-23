<script lang="ts">
	import '../app.postcss'
	//import 'katex/dist/katex.min.css'
	import '$lib/mdToSvelte'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { storePopup } from '@skeletonlabs/skeleton'
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<slot />
