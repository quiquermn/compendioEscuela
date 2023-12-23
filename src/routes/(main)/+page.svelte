<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="relative mx-auto flex justify-center gap-8 p-4">
	<!-- (header) -->
	<aside
		class="fixed left-5 right-5 top-20 z-10 mt-24 h-max max-h-[75svh] min-w-64 overflow-x-hidden overflow-y-scroll rounded-2xl bg-surface-200 p-0 opacity-0 shadow-md md:sticky md:top-24 md:block md:w-64 md:p-4 md:opacity-100 dark:bg-surface-900"
	>
		{#if data.headings.length > 0}
			<pre class="w-20 text-wrap">{JSON.stringify(data.headings, null, 2)}</pre>
		{/if}
	</aside>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="container mt-8 flex h-full max-w-2xl items-center justify-center">
		<article class="space-y-5 text-justify">
			{@html data.html}
		</article>
	</div>
</div>
