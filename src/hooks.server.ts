import type { Handle } from '@sveltejs/kit'
import { parseHTML } from 'linkedom'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.headers = 0

	const response = resolve(event, {
		transformPageChunk: ({ html, done }) => {
			const { document } = parseHTML(html)
			const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6')

			headers.forEach((header) => {
				header.id = header.innerHTML.replace(/ /g, '-').toLowerCase()
			})

			event.locals.headers = headers.length

			const finishedHTML = document.documentElement.outerHTML

			if (done) {
				return finishedHTML
			}
		}
	})
	return response
}
