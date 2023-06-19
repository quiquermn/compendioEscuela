<script lang="ts">
	import '../app.css'

	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import TablaDeContenidos from '$lib/TablaDeContenidos.svelte'

	export let data
</script>

<svelte:head>
	<link rel="canonical" href="https://compendio.quiqueso.com{data.url}" />
</svelte:head>

<div class="relative flex min-h-[100svh] flex-col">
	<Header />

	<div class="mx-auto">
		<div class="flex gap-5 justify-center mr-auto mt-8 min56rem">
			{#key data.url}
				<TablaDeContenidos />
			{/key}
			<main class="p-5">
				<slot />
			</main>
		</div>
	</div>

	<Footer />
</div>

<style lang="postcss">
</style>
