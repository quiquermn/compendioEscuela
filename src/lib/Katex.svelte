<script lang="ts">
	import katex from 'katex'
	import 'katex/dist/katex.min.css'

	export let math: string
	let html: string

	let className: string | null = null
	export { className as class }

	if (math) {
		html = katex.renderToString(math, {
			throwOnError: true
		})
	} else {
		html = ''
	}
</script>

<div class={!className ? 'inline-block ' : className}>{@html html}</div>
