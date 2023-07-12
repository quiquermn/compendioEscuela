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
				start_url: './',
				display: 'standalone',
				background_color: '#070e18',
				lang: 'es-mx',
				scope: './',
				description: 'Una aplicación creada para la ayuda de los alumnos',
				theme_color: '#070e18',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
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
				],
				dir: 'ltr',
				orientation: 'portrait',
				shortcuts: [
					{
						name: 'Algebra',
						url: '/semestres/1primero/algebra',
						description: 'Ingresar a Álgebra',

						icons: [
							{
								src: 'pwa-64x64.png',
								sizes: '64x64',
								type: 'image/png'
							}
						]
					}
				],
				categories: ['education', 'entertainment']
			}
		})
	]
})
