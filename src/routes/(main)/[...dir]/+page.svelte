<script lang="ts">
	import TableContents from './TableContents.svelte'
	import type { PageData } from './$types'
	import { swipe } from 'svelte-gestures'
	import { getDrawerStore } from '@skeletonlabs/skeleton'
	import { navigationDrawer, tableOfContentsDrawer, lastDrawer } from '$lib/drawers'

	export let data: PageData

	const drawerStore = getDrawerStore()

	let direction = ''

	function swipeHandler(event) {
		direction = event.detail.direction

		if (direction == 'left') {
			if ($lastDrawer != 'table') drawerStore.open(navigationDrawer())
			else drawerStore.close()
			$lastDrawer = 'navigation'
		} else if (direction == 'right') {
			if ($lastDrawer != 'navigation') drawerStore.open(tableOfContentsDrawer(data.headings))
			else drawerStore.close()
			$lastDrawer = 'table'
		}
	}
</script>

<svelte:body
	use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
	on:swipe={swipeHandler}
/>

<div class="relative mx-auto flex justify-center gap-8 p-4">
	<TableContents headings={data.headings}></TableContents>
	<div class="mt-8 flex h-full w-full max-w-xl items-center justify-center">
		<article>
			{@html data.html}
		</article>
	</div>
</div>
