import type { DrawerSettings } from '@skeletonlabs/skeleton'
import { semestres } from './materias'

import { writable } from 'svelte/store'

// let lastDrawer: null | 'table' | 'navigation' = null
export const lastDrawer = writable<null | 'table' | 'navigation'>(null)

export type Headings = {
	depth: number
	text: string
	id: string
}

export const tableOfContentsDrawer = (headings: Headings[]) => {
	const drawer: DrawerSettings = {
		id: 'table-contents',
		bgDrawer: 'bg-surface-200 bg-opacity-10 backdrop-blur-lg p-4 py-8',
		bgBackdrop: 'bg-transparent',
		width: 'w-[280px]',
		padding: 'p-0',
		rounded: 'rounded-l-xl',
		position: 'left',
		meta: {
			headings: headings
		}
	}
	return drawer
}

export const navigationDrawer = () => {
	const drawer: DrawerSettings = {
		id: 'navigation',
		bgDrawer: 'bg-surface-200 bg-opacity-10 backdrop-blur-lg p-4 py-8',
		bgBackdrop: 'bg-transparent',
		width: 'w-[280px]',
		padding: 'p-0',
		rounded: 'rounded-l-xl',
		position: 'right',
		meta: {
			semestres
		}
	}
	return drawer
}

export function tableOfContentsClassGiver(depth: number) {
	switch (depth) {
		case 2:
			return 'mt-1 pt-1 pb-1 dark:border-white border-black border-t font-bold  first:border-0 first:mt-0 first:pt-0'
		case 3:
			return 'ml-6 list-disc leading-4 mb-1 font-light'
		case 4:
			return 'ml-10 leading-4 mb-1 font-extralight italic'
		default:
			return 'hidden'
	}
}
