
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #23a5ff 
		"--color-primary-50": "222 242 255", // #def2ff
		"--color-primary-100": "211 237 255", // #d3edff
		"--color-primary-200": "200 233 255", // #c8e9ff
		"--color-primary-300": "167 219 255", // #a7dbff
		"--color-primary-400": "101 192 255", // #65c0ff
		"--color-primary-500": "35 165 255", // #23a5ff
		"--color-primary-600": "32 149 230", // #2095e6
		"--color-primary-700": "26 124 191", // #1a7cbf
		"--color-primary-800": "21 99 153", // #156399
		"--color-primary-900": "17 81 125", // #11517d
		// secondary | #aac820 
		"--color-secondary-50": "242 247 222", // #f2f7de
		"--color-secondary-100": "238 244 210", // #eef4d2
		"--color-secondary-200": "234 241 199", // #eaf1c7
		"--color-secondary-300": "221 233 166", // #dde9a6
		"--color-secondary-400": "196 217 99", // #c4d963
		"--color-secondary-500": "170 200 32", // #aac820
		"--color-secondary-600": "153 180 29", // #99b41d
		"--color-secondary-700": "128 150 24", // #809618
		"--color-secondary-800": "102 120 19", // #667813
		"--color-secondary-900": "83 98 16", // #536210
		// tertiary | #ce85cd 
		"--color-tertiary-50": "248 237 248", // #f8edf8
		"--color-tertiary-100": "245 231 245", // #f5e7f5
		"--color-tertiary-200": "243 225 243", // #f3e1f3
		"--color-tertiary-300": "235 206 235", // #ebceeb
		"--color-tertiary-400": "221 170 220", // #ddaadc
		"--color-tertiary-500": "206 133 205", // #ce85cd
		"--color-tertiary-600": "185 120 185", // #b978b9
		"--color-tertiary-700": "155 100 154", // #9b649a
		"--color-tertiary-800": "124 80 123", // #7c507b
		"--color-tertiary-900": "101 65 100", // #654164
		// success | #00bb05 
		"--color-success-50": "217 245 218", // #d9f5da
		"--color-success-100": "204 241 205", // #ccf1cd
		"--color-success-200": "191 238 193", // #bfeec1
		"--color-success-300": "153 228 155", // #99e49b
		"--color-success-400": "77 207 80", // #4dcf50
		"--color-success-500": "0 187 5", // #00bb05
		"--color-success-600": "0 168 5", // #00a805
		"--color-success-700": "0 140 4", // #008c04
		"--color-success-800": "0 112 3", // #007003
		"--color-success-900": "0 92 2", // #005c02
		// warning | #ffc121 
		"--color-warning-50": "255 246 222", // #fff6de
		"--color-warning-100": "255 243 211", // #fff3d3
		"--color-warning-200": "255 240 200", // #fff0c8
		"--color-warning-300": "255 230 166", // #ffe6a6
		"--color-warning-400": "255 212 100", // #ffd464
		"--color-warning-500": "255 193 33", // #ffc121
		"--color-warning-600": "230 174 30", // #e6ae1e
		"--color-warning-700": "191 145 25", // #bf9119
		"--color-warning-800": "153 116 20", // #997414
		"--color-warning-900": "125 95 16", // #7d5f10
		// error | #db0000 
		"--color-error-50": "250 217 217", // #fad9d9
		"--color-error-100": "248 204 204", // #f8cccc
		"--color-error-200": "246 191 191", // #f6bfbf
		"--color-error-300": "241 153 153", // #f19999
		"--color-error-400": "230 77 77", // #e64d4d
		"--color-error-500": "219 0 0", // #db0000
		"--color-error-600": "197 0 0", // #c50000
		"--color-error-700": "164 0 0", // #a40000
		"--color-error-800": "131 0 0", // #830000
		"--color-error-900": "107 0 0", // #6b0000
		// surface | #04034b 
		"--color-surface-50": "217 217 228", // #d9d9e4
		"--color-surface-100": "205 205 219", // #cdcddb
		"--color-surface-200": "192 192 210", // #c0c0d2
		"--color-surface-300": "155 154 183", // #9b9ab7
		"--color-surface-400": "79 79 129", // #4f4f81
		"--color-surface-500": "4 3 75", // #04034b
		"--color-surface-600": "4 3 68", // #040344
		"--color-surface-700": "3 2 56", // #030238
		"--color-surface-800": "2 2 45", // #02022d
		"--color-surface-900": "2 1 37", // #020125
		
	}
}