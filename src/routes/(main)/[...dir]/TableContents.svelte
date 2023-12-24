<script lang="ts">
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton'
	const drawerStore = getDrawerStore()

	export let headings: {
		depth: number
		text: string
		id: string
	}[]

	const drawerSettings: DrawerSettings = {
		id: 'table-contents',
		bgDrawer: 'bg-surface-200 bg-opacity-10 backdrop-blur-lg p-4 py-8',
		bgBackdrop: 'bg-transparent',
		width: 'w-[280px]',
		padding: 'p-0',
		rounded: 'rounded-l-xl',
		meta: {
			headings: headings
		}
	}

	function classGiver(depth: number) {
		switch (depth) {
			case 2:
				return 'mt-1 pt-1 pb-1 dark:border-white border-black border-t font-bold  first:border-0 first:mt-0 first:pt-0'
			case 3:
				return 'ml-6 list-disc leading-4 mb-1 font-light'
			case 4:
				return 'ml-10 leading-4 mb-1 font-extralight italic'
			default:
				return 'hidden'
		}
	}
</script>

<button class="fixed bg-black p-4" on:click={() => drawerStore.open(drawerSettings)}>
	Abrir el índice xd
</button>

<aside
	class="card mt-24 hidden h-max max-h-[75svh] overflow-x-hidden overflow-y-scroll rounded-2xl p-4 shadow-md md:sticky md:top-24 md:block md:w-56 md:min-w-56"
>
	<nav class="overflow-hidden">
		<ul class="flex flex-col">
			{#each headings as header}
				{#if header.depth != 1}
					<li class="{classGiver(header.depth)} max-w-full">
						<a href={`#${header.id}`}>{header.text}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</aside>
