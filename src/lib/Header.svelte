<script lang="ts">
	import { links } from '$lib/materias'
	import HamburgerIcon from '~icons/fluent/line-horizontal-3-20-filled'

	import Close from '~icons/fluent/dismiss-16-filled'

	let navigation: HTMLUListElement
	function toggleMenu() {
		console.log(navigation.classList.toggle('sr-only'))
	}
</script>

<header
	class="bg-primaryinverse-50 w-full p-5 h-30 flex items-center flex-row min-h-max lg:flex-col xl:flex-row"
>
	<div class="flex items-center gap-4 mr-auto mb-0 lg:mr-0 lg:mb-2 xl:mr-auto xl:mb-0">
		<img
			src="/icons/sillymilly.webp"
			alt="Milly the Silly"
			height="50px"
			width="50px"
			class="rounded-xl shadow-lg"
		/>
		<span class="text-primary-950 font-bold text-3xl text-center"> Compendio Bátiz </span>
	</div>

	<!-- Desktop -->
	<div class="text-primary-900 flex items-center lg:contents">
		<button class="lg:hidden w-10 h-10" on:click={() => toggleMenu()}>
			<HamburgerIcon class="w-10 h-10" />
		</button>

		<nav aria-label="Navegación primaria" class="contents">
			<ul
				class="flex flex-col gap-1 items-center absolute right-0 top-0 bg-white bg-opacity-60 backdrop-blur-sm w-9/12 max-w-[300px] h-full border-l-4 border-primary-800 pt-16 text-2xl lg:not-sr-only lg:static lg:flex-row lg:bg-transparent lg:h-auto lg:w-auto lg:max-w-none lg:border-0 lg:text-base"
				bind:this={navigation}
			>
				<button on:click={() => toggleMenu()} class="absolute left-0 top-0 p-4 lg:hidden"
					><Close class="w-10 h-10" /></button
				>

				<li>
					<a tabindex="0" href="/" class="pr-5 pl-5 font-semibold hover:text-primary-700">Inicio</a>
				</li>
				{#each Object.values(links) as link}
					<li>
						<button
							tabindex="0"
							class="pr-5 pl-5 font-semibold relative group hover:text-primary-700"
						>
							<span>
								{link.name}° Semestre
							</span>
							<div
								class="absolute cursor-default duration-500 bg-primary-700 grid grid-rows-fr0 transition-gridrows rounded-xl shadow-md mt-2 left-0 right-0 group-focus:grid-rows-fr1"
							>
								<div class="overflow-hidden text-primaryinverse-50 font-normal text-base leading-5">
									<ul class="flex flex-col gap-0">
										{#each Object.entries(link.materias) as [key2, sublink]}
											<li class="pt-1 pb-1 border-b last:border-b-0">
												<a
													tabindex="0"
													class="hover:text-primary-50 drop-shadow-xl"
													href={link.url + '/' + key2}>{sublink.name}</a
												>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
</style>
