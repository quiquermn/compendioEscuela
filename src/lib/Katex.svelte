<script lang="ts">
	import katex from 'katex'
	import './katexstyle.css'
	import 'katex/dist/katex.min.css'
	export let math: string
	let html: string

	if (math) {
		html = katex.renderToString(math, {
			throwOnError: true
		})
	} else {
		html = ''
	}
</script>

{@html html}
