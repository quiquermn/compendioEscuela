<script lang="ts">
	import '../app.css'

	import Header from '$lib/Header.svelte'
</script>

<div class="min-h-[100svh] flex flex-col relative">
	<Header />

	<div>
		<slot />
	</div>

	<footer class="bg-primaryinverse-50 mt-auto">ola</footer>
</div>

<style lang="postcss">
</style>
