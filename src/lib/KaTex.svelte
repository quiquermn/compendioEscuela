<script lang="ts">
	import katex from 'katex'
	import 'katex/dist/katex.min.css'

	let html = katex.renderToString('c = \\pm\\sqrt{a^2 + b^2}', {
		throwOnError: true
	})

	console.log('Rendering to HTML -- KaTex')
</script>

{@html html}

<style>
	:global(.katex-display > .katex) {
		white-space: normal;
	}
	/* Add space between broken lines: */
	:global(.katex-display > .base) {
		margin: 0.25em 0;
	}
	/* Compensate by reducing space around display math */
	:global(.katex-display) {
		margin: 0.5em 0;
	}
</style>
