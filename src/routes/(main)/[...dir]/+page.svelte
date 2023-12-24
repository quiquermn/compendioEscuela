<script lang="ts">
	import TableContents from './TableContents.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="relative mx-auto flex justify-center gap-8 p-4">
	<TableContents headings={data.headings}></TableContents>
	<div class="mt-8 flex h-full w-full max-w-xl items-center justify-center">
		<article>
			{@html data.html}
		</article>
	</div>
</div>
