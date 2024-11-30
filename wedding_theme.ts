import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const wedding_theme: CustomThemeConfig = {
	name: 'wedding-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '16px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #83984d 
		"--color-primary-50": "236 240 228", // #ecf0e4
		"--color-primary-100": "230 234 219", // #e6eadb
		"--color-primary-200": "224 229 211", // #e0e5d3
		"--color-primary-300": "205 214 184", // #cdd6b8
		"--color-primary-400": "168 183 130", // #a8b782
		"--color-primary-500": "131 152 77", // #83984d
		"--color-primary-600": "118 137 69", // #768945
		"--color-primary-700": "98 114 58", // #62723a
		"--color-primary-800": "79 91 46", // #4f5b2e
		"--color-primary-900": "64 74 38", // #404a26
		// secondary | #f0b51f 
		"--color-secondary-50": "253 244 221", // #fdf4dd
		"--color-secondary-100": "252 240 210", // #fcf0d2
		"--color-secondary-200": "251 237 199", // #fbedc7
		"--color-secondary-300": "249 225 165", // #f9e1a5
		"--color-secondary-400": "245 203 98", // #f5cb62
		"--color-secondary-500": "240 181 31", // #f0b51f
		"--color-secondary-600": "216 163 28", // #d8a31c
		"--color-secondary-700": "180 136 23", // #b48817
		"--color-secondary-800": "144 109 19", // #906d13
		"--color-secondary-900": "118 89 15", // #76590f
		// tertiary | #ea700b 
		"--color-tertiary-50": "252 234 218", // #fceada
		"--color-tertiary-100": "251 226 206", // #fbe2ce
		"--color-tertiary-200": "250 219 194", // #fadbc2
		"--color-tertiary-300": "247 198 157", // #f7c69d
		"--color-tertiary-400": "240 155 84", // #f09b54
		"--color-tertiary-500": "234 112 11", // #ea700b
		"--color-tertiary-600": "211 101 10", // #d3650a
		"--color-tertiary-700": "176 84 8", // #b05408
		"--color-tertiary-800": "140 67 7", // #8c4307
		"--color-tertiary-900": "115 55 5", // #733705
		// success | #d1dd93 
		"--color-success-50": "248 250 239", // #f8faef
		"--color-success-100": "246 248 233", // #f6f8e9
		"--color-success-200": "244 247 228", // #f4f7e4
		"--color-success-300": "237 241 212", // #edf1d4
		"--color-success-400": "223 231 179", // #dfe7b3
		"--color-success-500": "209 221 147", // #d1dd93
		"--color-success-600": "188 199 132", // #bcc784
		"--color-success-700": "157 166 110", // #9da66e
		"--color-success-800": "125 133 88", // #7d8558
		"--color-success-900": "102 108 72", // #666c48
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #f3460c 
		"--color-error-50": "253 227 219", // #fde3db
		"--color-error-100": "253 218 206", // #fddace
		"--color-error-200": "252 209 194", // #fcd1c2
		"--color-error-300": "250 181 158", // #fab59e
		"--color-error-400": "247 126 85", // #f77e55
		"--color-error-500": "243 70 12", // #f3460c
		"--color-error-600": "219 63 11", // #db3f0b
		"--color-error-700": "182 53 9", // #b63509
		"--color-error-800": "146 42 7", // #922a07
		"--color-error-900": "119 34 6", // #772206
		// surface | #336b8b 
		"--color-surface-50": "224 233 238", // #e0e9ee
		"--color-surface-100": "214 225 232", // #d6e1e8
		"--color-surface-200": "204 218 226", // #ccdae2
		"--color-surface-300": "173 196 209", // #adc4d1
		"--color-surface-400": "112 151 174", // #7097ae
		"--color-surface-500": "51 107 139", // #336b8b
		"--color-surface-600": "46 96 125", // #2e607d
		"--color-surface-700": "38 80 104", // #265068
		"--color-surface-800": "31 64 83", // #1f4053
		"--color-surface-900": "25 52 68", // #193444
	}
};
