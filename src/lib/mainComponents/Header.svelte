<script lang="ts">
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton'
	import MillyTheSilly from '$lib/components/MillyTheSilly.svelte'
	import { semestres } from '$lib/materias'
	import { page } from '$app/stores'

	import Hamburger from '~icons/fluent/line-horizontal-3-20-filled'
	import { navigationDrawer } from '$lib/drawers'

	const drawerStore = getDrawerStore()

	const drawerSettings = navigationDrawer()

	let active: false | number = 1

	const toggleActive = (semestre: number) => {
		if (active === semestre) {
			active = false
		} else {
			active = semestre
		}
	}

	page.subscribe(() => {
		active = false
	})
</script>

<AppBar
	gridColumns="!flex items-stretch flex-wrap 2xl:flex-row gap-4"
	slotTrail="xl:mx-auto mx-0 2xl:mr-0"
	slotDefault="flex items-center xl:hidden"
	slotLead="flex gap-2 justify-stretch max-w-max w-auto mr-auto xl:mx-auto 2xl:mx-0"
>
	<svelte:fragment slot="lead">
		<MillyTheSilly />
		<a href="/" class="hidden w-min text-center text-3xl font-bold sm:w-max xl:inline">
			Compendio Bátiz
		</a>
	</svelte:fragment>

	<a href="/" class=" w-min text-center text-3xl font-bold sm:w-max"> Compendio Bátiz </a>

	<svelte:fragment slot="trail">
		<nav class="hidden xl:block">
			<ul class="flex flex-row gap-4">
				<li class="mr-8">
					<a href="/" class="font-semibold"><span>Inicio</span></a>
				</li>
				{#each semestres as semestre}
					<li class="relative w-36 text-center">
						<button aria-hidden class="font-semibold" on:click={() => toggleActive(semestre.numero)}
							>{semestre.numero}° Semestre</button
						>
						{#if active == semestre.numero}
							<ul class="card absolute top-8 z-20 flex flex-col !bg-surface-900 px-2 py-4">
								{#each semestre.materias as materia}
									<li
										class="line w-full border-b pb-1 pt-1 text-center leading-5 first-of-type:pt-0 last-of-type:border-b-0"
									>
										<a on:click={() => (active = false)} href="{semestre.url}/{materia.url}">
											<span>{materia.nombre}</span>
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
		<button
			on:click={() => drawerStore.open(drawerSettings)}
			class="btn-icon !bg-transparent xl:hidden"
		>
			<Hamburger class="h-8 w-8"></Hamburger>
		</button>
	</svelte:fragment>
</AppBar>
