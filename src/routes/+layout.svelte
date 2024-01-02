<script lang="ts">
	import '../app.postcss'

	import type { LayoutData } from './$types'

	import {
		AppShell,
		Drawer,
		initializeStores,
		getDrawerStore,
		Accordion,
		AccordionItem
	} from '@skeletonlabs/skeleton'
	import Header from '$lib/mainComponents/Header.svelte'
	import Footer from '$lib/mainComponents/Footer.svelte'
	import { tableOfContentsClassGiver } from '$lib/drawers'
	import { page } from '$app/stores'

	initializeStores()

	const drawerStore = getDrawerStore()

	export let data: LayoutData

	$: positionClasses = $drawerStore.open
		? $drawerStore.id == 'navigation'
			? 'translate-x-[-280px]'
			: 'translate-x-[280px]'
		: ''
</script>

<svelte:head>
	<link rel="canonical" href="https://compendio.quiqueso.com{data.url}" />
</svelte:head>

{#key $page.url}
	<Drawer>
		{#if $drawerStore.id === 'navigation'}
			{@const semestres = $drawerStore.meta.semestres}
			<a
				on:click={() => drawerStore.close()}
				href="/"
				class="mx-auto mb-4 block border-b pb-4 text-center text-2xl font-bold">Inicio</a
			>
			<Accordion spacing="space-y-6">
				{#each semestres as semestre}
					<AccordionItem>
						<svelte:fragment slot="summary">
							<span class="text-2xl font-bold">{semestre.numero}° Semestre</span>
						</svelte:fragment>
						<svelte:fragment slot="content">
							<ul class="list space-y-4">
								{#each semestre.materias as materia}
									<li>
										<a on:click={() => drawerStore.close()} href="{semestre.url}/{materia.url}"
											>{materia.nombre}</a
										>
									</li>
								{/each}
							</ul>
						</svelte:fragment>
					</AccordionItem>
				{/each}
			</Accordion>
		{:else if $drawerStore.id == 'table-contents'}
			{@const headings = $drawerStore.meta.headings}
			<nav class="overflow-hidden">
				<ul class="flex flex-col">
					{#each headings as header}
						{#if header.depth != 1}
							<li class="{tableOfContentsClassGiver(header.depth)} max-w-full">
								<a href={`#${header.id}`}>{header.text}</a>
							</li>
						{/if}
					{/each}
				</ul>
			</nav>
		{/if}
	</Drawer>
{/key}

<AppShell class="transition-transform {positionClasses}" regionPage="scroll-smooth">
	<svelte:fragment slot="pageHeader">
		<Header></Header>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer></Footer>
	</svelte:fragment>
</AppShell>
