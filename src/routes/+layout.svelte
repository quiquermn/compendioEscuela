<script lang="ts">
	import '../app.css'

	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import TablaDeContenidos from '$lib/TablaDeContenidos.svelte'

	import { pwaInfo } from 'virtual:pwa-info'
	import { onMount } from 'svelte'

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register')
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: ${r}`)
				},
				onRegisterError(error) {
					console.log('SW registration error', error)
				}
			})
		}
	})

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''

	export let data
</script>

<svelte:head>
	<link rel="canonical" href="https://compendio.quiqueso.com{data.url}" />
	{@html webManifestLink}
</svelte:head>

<div class="relative flex min-h-[100svh] flex-col">
	<Header />

	<div class="mx-auto">
		<div class="min56rem mr-auto mt-8 flex justify-center gap-5">
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
