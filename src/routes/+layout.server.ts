import type { LayoutServerLoad } from './$types'
export const load = (async ({ locals, url, fetch }) => {
	console.log(locals.headers)

	return {}
}) satisfies LayoutServerLoad
