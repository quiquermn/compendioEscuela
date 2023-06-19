<script lang="ts">
	import { links } from '$lib/materias'
	import HamburgerIcon from '~icons/fluent/line-horizontal-3-20-filled'

	import Close from '~icons/fluent/dismiss-16-filled'
	import Arrow from '~icons/fluent/triangle-down-12-filled'
	import { onMount } from 'svelte'
	import MillyTheSilly from './MillyTheSilly.svelte'

	let navigation: HTMLUListElement
	let isOpen = false

	function toggleMenu() {
		if (isOpen) {
			navigation.style.maxWidth = '0px'
		} else {
			navigation.style.maxWidth = '300px'
		}
		isOpen = !isOpen
	}

	onMount(() => {
		Object.values(links).forEach((link) => {
			const arrow = document.getElementById(`arrow-${link.name}`)
			const sub = <HTMLInputElement>document.getElementById(`${link.name}-sub`)
			if (!arrow) {
				throw new Error(`Arrow not found for link: ${link.name}`)
			}
			if (!sub) {
				throw new Error(`Sub not found for link: ${link.name}`)
			}
			sub.addEventListener('change', () => {
				if (sub.checked) {
					arrow.style.transform = 'rotate(180deg)'
				} else {
					arrow.style.transform = 'rotate(0deg)'
				}
			})
		})
	})
</script>

<header
	class="h-30 flex min-h-max w-full flex-row items-center bg-primaryinverse-50 p-5 z-10 lg:flex-col xl:flex-row"
>
	<div class="mb-0 mr-auto flex items-center gap-4 lg:mb-2 lg:mr-0 xl:mb-0 xl:mr-auto">
		<MillyTheSilly />
		<span class="text-center text-3xl font-bold text-primary-950"> Compendio Bátiz </span>
	</div>

	<!-- Desktop -->
	<div class="flex items-center text-primary-900 lg:contents">
		<button class="h-10 w-10 lg:hidden" on:click={() => toggleMenu()}>
			<HamburgerIcon aria-label="Abrir Navegación primaria" class="h-10 w-10" />
		</button>

		<nav aria-label="Navegación primaria" class="contents">
			<ul
				class="absolute right-0 top-0 flex h-full max-w-0 flex-col items-center gap-1 overflow-hidden overflow-y-scroll border-l-4 border-primary-800 bg-white bg-opacity-60 pb-16 pt-16 text-2xl backdrop-blur-sm transition-[max-width] lg:not-sr-only lg:static lg:h-auto lg:w-auto lg:max-w-none lg:translate-x-0 lg:flex-row lg:border-0 lg:bg-transparent lg:pb-0 lg:text-base"
				bind:this={navigation}
			>
				<li>
					<button on:click={() => toggleMenu()} class="absolute left-0 top-0 p-4 lg:hidden">
						<Close class="h-10 w-10" />
					</button>
				</li>

				<li
					class="mb-6 w-5/6 border-b-2 border-primary-950 pb-3 text-center lg:m-0 lg:w-auto lg:border-0 lg:p-0"
				>
					<a tabindex="0" href="/" class="pl-5 pr-5 font-semibold hover:text-primary-700">Inicio</a>
				</li>
				{#each Object.values(links) as link}
					<li class="w-full">
						<div
							class="relative flex flex-col items-center pl-5 pr-5 font-semibold hover:text-primary-700"
						>
							<input id="{link.name}-sub" type="checkbox" class="peer hidden" />
							<label
								for="{link.name}-sub"
								class="flex w-full cursor-pointer flex-row items-center justify-center"
							>
								<span class="block w-9/12 text-left lg:w-max">
									{link.name}° Semestre
								</span>
								<Arrow class="transition-transform duration-500 lg:hidden" id="arrow-{link.name}" />
							</label>

							<div
								class="static left-0 right-0 top-6 mt-2 grid cursor-default grid-rows-fr0 rounded-xl transition-gridrows duration-500 peer-checked:grid-rows-fr1 lg:absolute lg:bg-primary-700 lg:shadow-md"
							>
								<div class="overflow-hidden text-base font-normal leading-5">
									<ul class="flex flex-col gap-0">
										{#each Object.entries(link.materias) as [key2, sublink]}
											<li class="pb-1 pt-1 text-center lg:border-b lg:last:border-b-0">
												<a
													tabindex="0"
													class="text-primary-950 drop-shadow-xl hover:text-primary-800 lg:text-primaryinverse-50 lg:hover:text-primary-50"
													href={link.url + '/' + key2}>{sublink.name}</a
												>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
</style>
