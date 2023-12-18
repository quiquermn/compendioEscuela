<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import IndexIcon from '~icons/fluent/text-bullet-list-ltr-16-filled'

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	type Truplet<T, K, R> = [T, K, R]

	function classGiver(tag: string) {
		if (tag === 'H2') {
			return 'mt-1 pt-1 pb-1 border-t font-bold  first:border-0 first:mt-0 first:pt-0'
		} else if (tag === 'H3') {
			return 'ml-6 list-disc leading-4 mb-1 font-light'
		} else if (tag === 'H4') {
			return 'ml-10 leading-4 mb-1 font-extralight italic'
		} else {
			return 'hidden'
		}
	}

	function generateLinks() {
		if (browser) {
			let headers = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
			if (headers.length <= 0) {
				return null
			}
			let links: Truplet<string, string, string>[] = [['', '', '']]
			links.pop()

			headers.forEach((header) => {
				header.id = header.innerHTML.replace(/ /g, '-').toLowerCase()
				const classes = classGiver(header.tagName)
				links.push([classes, header.innerHTML, header.id])
			})
			return links
		}
		return null
	}

	let tableofcontents: any | null | Truplet<string, string, string>[] = null

	let gridHeight: HTMLElement
	let aside: HTMLElement
	let isOpen = false

	function toggleAside() {
		if (!isOpen) {
			gridHeight.classList.remove('grid-rows-fr0')
			gridHeight.classList.add('grid-rows-fr1')
			gridHeight.classList.toggle('p-4')
		} else {
			gridHeight.classList.remove('grid-rows-fr1')
			gridHeight.classList.add('grid-rows-fr0')
			delay(450).then(() => {
				gridHeight.classList.toggle('p-4')
			})
		}
		isOpen = !isOpen
	}

	onMount(() => {
		tableofcontents = generateLinks()
	})
</script>

{#if tableofcontents !== null && tableofcontents.length > 1}
	<button
		class="fixed left-5 top-32 flex h-10 w-10 content-center items-center justify-center rounded-lg bg-primary-800 md:hidden"
		on:click={() => toggleAside()}
	>
		<IndexIcon class="h-8 w-8" />
	</button>

	<aside
		class="fixed left-5 right-5 top-20 z-10 mt-24 h-max max-h-[75svh] overflow-x-hidden overflow-y-scroll rounded-2xl bg-primary-800 p-0 md:sticky md:top-24 md:block md:w-64 md:p-4"
		bind:this={aside}
	>
		<div
			class="grid grid-rows-fr0 transition-gridrows duration-500 md:contents"
			bind:this={gridHeight}
		>
			<nav class="overflow-hidden">
				<ul class="flex flex-col">
					{#if tableofcontents !== null}
						{#each tableofcontents as uwu}
							<li class="{uwu[0]} max-w-full">
								<a href={`#${uwu[2]}`}>{uwu[1]}</a>
							</li>
						{/each}
					{/if}
				</ul>
			</nav>
		</div>
	</aside>
{/if}

<style lang="postcss">
	aside {
		&::-webkit-scrollbar {
			width: 0.25rem;
		}

		&::-webkit-scrollbar-track {
			background: theme('colors.primary.800');
		}

		&::-webkit-scrollbar-thumb {
			background: theme('colors.primary.600');
		}
	}
</style>
