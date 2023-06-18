<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

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
			let links: Truplet<string, string, string>[] = [['', '', '']]
			links.pop()

			headers.forEach((header) => {
				header.id = header.innerHTML.replace(/ /g, '-').toLowerCase()
				const classes = classGiver(header.tagName)
				links.push([classes, header.innerHTML, header.id])
			})
			console.log(links)
			return links
		}
		return null
	}

	let tableofcontents: null | Truplet<string, string, string>[] = null

	onMount(() => {
		tableofcontents = generateLinks()
	})
	console.log(tableofcontents)
</script>

<aside
	class="mt-24 hidden w-64 bg-primary-800 rounded-2xl p-4 h-max sticky top-24 left-5 max-h-[75svh] overflow-y-scroll overflow-x-hidden md:block"
>
	<nav>
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
</aside>

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
