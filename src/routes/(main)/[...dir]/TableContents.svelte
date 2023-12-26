<script lang="ts">
	import {
		tableOfContentsDrawer,
		type Headings,
		tableOfContentsClassGiver,
		lastDrawer
	} from '$lib/drawers'
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton'
	import ListIcon from '~icons/fluent/text-bullet-list-24-filled'

	const drawerStore = getDrawerStore()

	export let headings: Headings[]

	const drawerSettings = tableOfContentsDrawer(headings)
</script>

<button
	class="variant-filled-surface btn-icon fixed left-8 top-32 !rounded-lg p-2 md:hidden"
	on:click={() => {
		drawerStore.open(drawerSettings)
		$lastDrawer = 'table'
	}}
>
	<ListIcon class="-full aspect-square"></ListIcon>
</button>

<aside
	class="card mt-24 hidden h-max max-h-[75svh] overflow-x-hidden overflow-y-scroll rounded-2xl p-4 shadow-md md:sticky md:top-24 md:block md:w-56 md:min-w-56"
>
	<nav class="overflow-hidden">
		<ul class="flex flex-col">
			{#each headings as header}
				{#if header.depth != 1}
					<li class="{tableOfContentsClassGiver(header.depth)} max-w-full">
						<a href={`#${header.id}`}>{header.text}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</aside>
