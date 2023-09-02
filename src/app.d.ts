// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/svelte" />
/// <reference types="vite-plugin-pwa/info" />
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			headers: number
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
