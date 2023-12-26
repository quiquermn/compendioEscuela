import { mdToSvelte } from '$lib/mdToSvelte'
import type { PageServerLoad } from './$types'
import { promises as fsPromises } from 'fs'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	const curDir = process.cwd()
	let file = 'index.md'

	if (params.dir) {
		file = params.dir + '.md'
	}
	const filePath = `${curDir}/src_md/${file}`

	try {
		const contenido = await fsPromises.readFile(filePath, { encoding: 'utf-8' })
		const { html, headings } = await mdToSvelte(contenido)
		return {
			html,
			headings
		}
	} catch (e) {
		console.error('Error leyendo archivo:', e)
		error(404, { message: 'Not found' })
	}
}) satisfies PageServerLoad
