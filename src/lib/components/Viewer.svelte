<script lang="ts">
	export let markdown: string
	import { mdToSvelte } from '$lib/mdToSvelte'
</script>

<article class="space-y-5 rounded-2xl bg-surface-800 p-4 shadow-md">
	{#await mdToSvelte(markdown)}
		cargando...
	{:then html}
		{@html html}
	{/await}
</article>
