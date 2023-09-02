export const prerender = true
export const ssr = true
export function load({ url }) {
	return {
		url: url.pathname
	}
}
