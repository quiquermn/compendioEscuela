/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.slate,
				primaryinverse: colors.neutral,
			},
			transitionProperty: {
				gridrows: 'grid-template-rows'
			},
			gridTemplateRows: {
				fr0: '0fr',
				fr1: '1fr'
			},
			fontFamily: {
				sans: ['Lexend', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
