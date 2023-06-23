import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
		SvelteKitPWA({
			outDir: '.svelte-kit/cloudflare',
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			srcDir: 'src',
			manifest: {
				name: 'Compendio Bátiz',
				short_name: 'Compendio Bátiz',
				description: 'Una aplicación creada para la ayuda de los alumnos',
				theme_color: '#070e18',
				background_color: '#070e18',
				display: 'standalone',
				lang: 'es-mx',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'pwa-64x64.png',
						sizes: '64x64',
						type: 'image/png'
					},
					{
						src: 'maskable-icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				]
			}
		})
	]
})
