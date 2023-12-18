<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { semestres } from '$lib/materias'
	import { scale } from 'svelte/transition'
	import HamburgerIcon from '~icons/fluent/line-horizontal-3-20-filled'
	import Close from '~icons/fluent/dismiss-16-filled'
	import Arrow from '~icons/fluent/triangle-down-12-filled'

	let activo = 0
	let mobile = true
	let innerWidth: number

	$: if (browser) {
		innerWidth

		mobile = !window.matchMedia('(min-width: 1024px)').matches
		if (!mobile) {
			abierto = false
		}
	}
	$: {
		$page.url.pathname
		abierto = false
		console.log('uwu2')
	}

	let abierto = false

	$: {
		$page.url.pathname
		activo = 0
	}
</script>

<svelte:window bind:innerWidth />

<button class="h-10 w-10 lg:hidden" on:click={() => (abierto = !abierto)}>
	<HamburgerIcon aria-label="Abrir Navegación primaria" class="h-10 w-10 text-primary-950" />
</button>

<nav
	class="{(!mobile || abierto) &&
		'scale-x-100'} absolute right-0 top-0 flex h-full max-w-xs origin-right scale-x-0 transform-gpu flex-col items-center gap-1 overflow-hidden overflow-y-scroll border-l-4 border-primary-800 bg-white bg-opacity-60 pb-16 pt-16 text-2xl backdrop-blur-sm transition-transform duration-200 lg:not-sr-only lg:static lg:h-auto lg:w-auto lg:max-w-none lg:translate-x-0 lg:scale-x-100 lg:flex-row lg:border-0 lg:bg-transparent lg:pb-0 lg:text-base lg:transition-none"
>
	<button on:click={() => (abierto = false)} class="absolute left-0 top-0 p-4 lg:hidden">
		<Close class="h-10 w-10 text-primary-950" />
	</button>

	<ul
		class="z-20 flex w-min flex-col content-center items-center justify-center gap-4 lg:flex-row lg:gap-2 lg:p-1"
	>
		<li
			class="mb-6 w-5/6 border-b-2 border-primary-950 pb-3 text-center font-bold text-primary-950 lg:m-0 lg:w-36 lg:border-0 lg:p-0"
		>
			<a tabindex="0" href="/">Inicio</a>
		</li>

		{#each semestres as semestre}
			<li class="relative m-0 w-64 text-center font-bold text-primary-950 lg:w-36">
				<button
					class="mx-auto flex gap-4"
					on:click={() => {
						if (activo === semestre.numero) {
							activo = 0
						} else {
							activo = semestre.numero
						}
					}}
				>
					<span>{semestre.numero}° Semestre</span>
					<Arrow
						class="{activo == semestre.numero &&
							'rotate-180'} transition-transform duration-150  lg:hidden"
					/>
				</button>

				{#if activo === semestre.numero}
					<ul
						transition:scale={{ duration: 100, delay: 20 }}
						class="left-0 right-0 top-8 m-0 h-max origin-top list-none flex-col overflow-hidden rounded-xl p-1 py-2 text-base font-normal leading-5 transition-opacity lg:absolute lg:bg-primary-700 lg:shadow-md"
					>
						{#each semestre.materias as materia}
							<li
								class="m-0 py-2 text-center first-of-type:pt-0 lg:border-b lg:pb-1 lg:pt-2 lg:last:border-b-0"
							>
								<a
									tabindex="0"
									class=" text-primary-950 no-underline drop-shadow-xl hover:text-primary-800 lg:text-primaryinverse-50 lg:hover:text-primary-50"
									href="{semestre.url}/{materia.url}">{materia.nombre}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
