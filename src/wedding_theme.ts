import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const wedding_theme: CustomThemeConfig = {
	name: 'wedding-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
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
	/*properties: {
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
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #479AF5
		"--color-primary-50": "227 240 254", // #e3f0fe
		"--color-primary-100": "218 235 253", // #daebfd
		"--color-primary-200": "209 230 253", // #d1e6fd
		"--color-primary-300": "181 215 251", // #b5d7fb
		"--color-primary-400": "126 184 248", // #7eb8f8
		"--color-primary-500": "71 154 245", // #479AF5
		"--color-primary-600": "64 139 221", // #408bdd
		"--color-primary-700": "53 116 184", // #3574b8
		"--color-primary-800": "43 92 147", // #2b5c93
		"--color-primary-900": "35 75 120", // #234b78
		// secondary | #F5D62D
		'--color-secondary-50': '254 249 224', // #fef9e0
		'--color-secondary-100': '253 247 213', // #fdf7d5
		'--color-secondary-200': '253 245 203', // #fdf5cb
		'--color-secondary-300': '251 239 171', // #fbefab
		'--color-secondary-400': '248 226 108', // #f8e26c
		'--color-secondary-500': '245 214 45', // #F5D62D
		'--color-secondary-600': '221 193 41', // #ddc129
		'--color-secondary-700': '184 161 34', // #b8a122
		'--color-secondary-800': '147 128 27', // #93801b
		'--color-secondary-900': '120 105 22', // #786916
		// tertiary | #B9B950
		'--color-tertiary-50': '245 245 229', // #f5f5e5
		'--color-tertiary-100': '241 241 220', // #f1f1dc
		'--color-tertiary-200': '238 238 211', // #eeeed3
		'--color-tertiary-300': '227 227 185', // #e3e3b9
		'--color-tertiary-400': '206 206 133', // #cece85
		'--color-tertiary-500': '185 185 80', // #B9B950
		'--color-tertiary-600': '167 167 72', // #a7a748
		'--color-tertiary-700': '139 139 60', // #8b8b3c
		'--color-tertiary-800': '111 111 48', // #6f6f30
		'--color-tertiary-900': '91 91 39', // #5b5b27
		// success | #98D102
		'--color-success-50': '240 248 217', // #f0f8d9
		'--color-success-100': '234 246 204', // #eaf6cc
		'--color-success-200': '229 244 192', // #e5f4c0
		'--color-success-300': '214 237 154', // #d6ed9a
		'--color-success-400': '183 223 78', // #b7df4e
		'--color-success-500': '152 209 2', // #98D102
		'--color-success-600': '137 188 2', // #89bc02
		'--color-success-700': '114 157 2', // #729d02
		'--color-success-800': '91 125 1', // #5b7d01
		'--color-success-900': '74 102 1', // #4a6601
		// warning | #ff8040
		'--color-warning-50': '255 236 226', // #ffece2
		'--color-warning-100': '255 230 217', // #ffe6d9
		'--color-warning-200': '255 223 207', // #ffdfcf
		'--color-warning-300': '255 204 179', // #ffccb3
		'--color-warning-400': '255 166 121', // #ffa679
		'--color-warning-500': '255 128 64', // #ff8040
		'--color-warning-600': '230 115 58', // #e6733a
		'--color-warning-700': '191 96 48', // #bf6030
		'--color-warning-800': '153 77 38', // #994d26
		'--color-warning-900': '125 63 31', // #7d3f1f
		// error | #B42400
		'--color-error-50': '244 222 217', // #f4ded9
		'--color-error-100': '240 211 204', // #f0d3cc
		'--color-error-200': '236 200 191', // #ecc8bf
		'--color-error-300': '225 167 153', // #e1a799
		'--color-error-400': '203 102 77', // #cb664d
		'--color-error-500': '180 36 0', // #B42400
		'--color-error-600': '162 32 0', // #a22000
		'--color-error-700': '135 27 0', // #871b00
		'--color-error-800': '108 22 0', // #6c1600
		'--color-error-900': '88 18 0', // #581200
		// surface | #E07615
		'--color-surface-50': '250 234 220', // #faeadc
		'--color-surface-100': '249 228 208', // #f9e4d0
		'--color-surface-200': '247 221 197', // #f7ddc5
		'--color-surface-300': '243 200 161', // #f3c8a1
		'--color-surface-400': '233 159 91', // #e99f5b
		'--color-surface-500': '224 118 21', // #E07615
		'--color-surface-600': '202 106 19', // #ca6a13
		'--color-surface-700': '168 89 16', // #a85910
		'--color-surface-800': '134 71 13', // #86470d
		'--color-surface-900': '110 58 10' // #6e3a0a
	}*/
};
