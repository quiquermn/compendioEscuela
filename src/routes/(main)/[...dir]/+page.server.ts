import { mdToSvelte } from '$lib/mdToSvelte'
import type { PageServerLoad } from './$types'
import { promises as fsPromises } from 'fs'
import { error } from '@sveltejs/kit'
import type { EntryGenerator } from './$types'
import { semestres } from '$lib/materias'

const dirs = semestres.flatMap((sem) => {
	return sem.materias.map((materia) => {
		const dir = `${sem.url}/${materia.url}`.substring(1)
		return { dir }
	})
})

export const entries: EntryGenerator = () => {
	return dirs
}

export const prerender = true

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
		error(404, { message: 'Not found' })
	}
}) satisfies PageServerLoad
