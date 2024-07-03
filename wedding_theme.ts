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
		// primary | #94ac78
		'--color-primary-50': '239 243 235', // #eff3eb
		'--color-primary-100': '234 238 228', // #eaeee4
		'--color-primary-200': '228 234 221', // #e4eadd
		'--color-primary-300': '212 222 201', // #d4dec9
		'--color-primary-400': '180 197 161', // #b4c5a1
		'--color-primary-500': '148 172 120', // #94ac78
		'--color-primary-600': '133 155 108', // #859b6c
		'--color-primary-700': '111 129 90', // #6f815a
		'--color-primary-800': '89 103 72', // #596748
		'--color-primary-900': '73 84 59', // #49543b
		// secondary | #f8b67c
		'--color-secondary-50': '254 244 235', // #fef4eb
		'--color-secondary-100': '254 240 229', // #fef0e5
		'--color-secondary-200': '253 237 222', // #fdedde
		'--color-secondary-300': '252 226 203', // #fce2cb
		'--color-secondary-400': '250 204 163', // #facca3
		'--color-secondary-500': '248 182 124', // #f8b67c
		'--color-secondary-600': '223 164 112', // #dfa470
		'--color-secondary-700': '186 137 93', // #ba895d
		'--color-secondary-800': '149 109 74', // #956d4a
		'--color-secondary-900': '122 89 61', // #7a593d
		// tertiary | #769293
		'--color-tertiary-50': '234 239 239', // #eaefef
		'--color-tertiary-100': '228 233 233', // #e4e9e9
		'--color-tertiary-200': '221 228 228', // #dde4e4
		'--color-tertiary-300': '200 211 212', // #c8d3d4
		'--color-tertiary-400': '159 179 179', // #9fb3b3
		'--color-tertiary-500': '118 146 147', // #769293
		'--color-tertiary-600': '106 131 132', // #6a8384
		'--color-tertiary-700': '89 110 110', // #596e6e
		'--color-tertiary-800': '71 88 88', // #475858
		'--color-tertiary-900': '58 72 72', // #3a4848
		// success | #d1dd93
		'--color-success-50': '248 250 239', // #f8faef
		'--color-success-100': '246 248 233', // #f6f8e9
		'--color-success-200': '244 247 228', // #f4f7e4
		'--color-success-300': '237 241 212', // #edf1d4
		'--color-success-400': '223 231 179', // #dfe7b3
		'--color-success-500': '209 221 147', // #d1dd93
		'--color-success-600': '188 199 132', // #bcc784
		'--color-success-700': '157 166 110', // #9da66e
		'--color-success-800': '125 133 88', // #7d8558
		'--color-success-900': '102 108 72', // #666c48
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #fad7d5
		'--color-error-50': '254 249 249', // #fef9f9
		'--color-error-100': '254 247 247', // #fef7f7
		'--color-error-200': '254 245 245', // #fef5f5
		'--color-error-300': '253 239 238', // #fdefee
		'--color-error-400': '252 227 226', // #fce3e2
		'--color-error-500': '250 215 213', // #fad7d5
		'--color-error-600': '225 194 192', // #e1c2c0
		'--color-error-700': '188 161 160', // #bca1a0
		'--color-error-800': '150 129 128', // #968180
		'--color-error-900': '123 105 104', // #7b6968
		// surface | #bababa
		'--color-surface-50': '245 245 245', // #f5f5f5
		'--color-surface-100': '241 241 241', // #f1f1f1
		'--color-surface-200': '238 238 238', // #eeeeee
		'--color-surface-300': '227 227 227', // #e3e3e3
		'--color-surface-400': '207 207 207', // #cfcfcf
		'--color-surface-500': '186 186 186', // #bababa
		'--color-surface-600': '167 167 167', // #a7a7a7
		'--color-surface-700': '140 140 140', // #8c8c8c
		'--color-surface-800': '112 112 112', // #707070
		'--color-surface-900': '91 91 91' // #5b5b5b
	}
};
