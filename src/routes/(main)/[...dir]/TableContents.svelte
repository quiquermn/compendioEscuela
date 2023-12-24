<script lang="ts">
	export let headings: {
		depth: number
		text: string
		id: string
	}[]

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

<aside
	class="fixed left-5 right-5 top-20 z-10 mt-24 h-max max-h-[75svh] min-w-64 overflow-x-hidden overflow-y-scroll rounded-2xl bg-surface-200 p-0 opacity-0 shadow-md md:sticky md:top-24 md:block md:w-64 md:p-4 md:opacity-100 dark:bg-surface-900"
>
	<nav class="overflow-hidden">
		<ul class="flex flex-col">
			{#each headings as header}
				<li class="{classGiver(header.depth)} max-w-full">
					<a href={`#${header.id}`}>{header.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
