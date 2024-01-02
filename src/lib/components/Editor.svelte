<script lang="ts">
	import Viewer from './Viewer.svelte'
	let markdown = String.raw`## Markdown Basic Syntax

I just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type ${'`'}nano${'`'}.

My favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).

1. First item
2. Second item
3. Third item

> Dorothy followed her through many of the beautiful rooms in her castle.
`
</script>

<div class="flex w-full flex-col gap-2 xl:flex-row">
	<div class="w-full">
		<h2 class="h3 mb-2">Editor:</h2>
		<textarea cols="100" class="textarea h-96" bind:value={markdown}></textarea>
	</div>

	<div class="w-full">
		<h2 class="h3 mb-2">Vista Previa:</h2>
		<Viewer {markdown}></Viewer>
	</div>
</div>
