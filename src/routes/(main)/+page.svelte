<script lang="ts">
	import { mdToSvelte } from '$lib/mdToSvelte'
	let value = String.raw`## Markdown Basic Syntax

I just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type ${'`'}nano${'`'}.

My favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).

1. First item
2. Second item
3. Third item

> Dorothy followed her through many of the beautiful rooms in her castle.
`
</script>

<h1 class="h1">Let's get cracking bones!</h1>
<p>Start by exploring:</p>
<ul>
	<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
	<li><code class="code">/src/app.postcss</code> - app wide css</li>
	<li>
		<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
	</li>
</ul>
<textarea class="textarea" bind:value />
{@html mdToSvelte(value)}
