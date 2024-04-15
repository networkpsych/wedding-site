
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const wedding_theme: CustomThemeConfig = {
    name: 'wedding-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #0F2439 
		"--color-primary-50": "219 222 225", // #dbdee1
		"--color-primary-100": "207 211 215", // #cfd3d7
		"--color-primary-200": "195 200 206", // #c3c8ce
		"--color-primary-300": "159 167 176", // #9fa7b0
		"--color-primary-400": "87 102 116", // #576674
		"--color-primary-500": "15 36 57", // #0F2439
		"--color-primary-600": "14 32 51", // #0e2033
		"--color-primary-700": "11 27 43", // #0b1b2b
		"--color-primary-800": "9 22 34", // #091622
		"--color-primary-900": "7 18 28", // #07121c
		// secondary | #E8CD73 
		"--color-secondary-50": "252 248 234", // #fcf8ea
		"--color-secondary-100": "250 245 227", // #faf5e3
		"--color-secondary-200": "249 243 220", // #f9f3dc
		"--color-secondary-300": "246 235 199", // #f6ebc7
		"--color-secondary-400": "239 220 157", // #efdc9d
		"--color-secondary-500": "232 205 115", // #E8CD73
		"--color-secondary-600": "209 185 104", // #d1b968
		"--color-secondary-700": "174 154 86", // #ae9a56
		"--color-secondary-800": "139 123 69", // #8b7b45
		"--color-secondary-900": "114 100 56", // #726438
		// tertiary | #AB3F21 
		"--color-tertiary-50": "242 226 222", // #f2e2de
		"--color-tertiary-100": "238 217 211", // #eed9d3
		"--color-tertiary-200": "234 207 200", // #eacfc8
		"--color-tertiary-300": "221 178 166", // #ddb2a6
		"--color-tertiary-400": "196 121 100", // #c47964
		"--color-tertiary-500": "171 63 33", // #AB3F21
		"--color-tertiary-600": "154 57 30", // #9a391e
		"--color-tertiary-700": "128 47 25", // #802f19
		"--color-tertiary-800": "103 38 20", // #672614
		"--color-tertiary-900": "84 31 16", // #541f10
		// success | #98D102 
		"--color-success-50": "240 248 217", // #f0f8d9
		"--color-success-100": "234 246 204", // #eaf6cc
		"--color-success-200": "229 244 192", // #e5f4c0
		"--color-success-300": "214 237 154", // #d6ed9a
		"--color-success-400": "183 223 78", // #b7df4e
		"--color-success-500": "152 209 2", // #98D102
		"--color-success-600": "137 188 2", // #89bc02
		"--color-success-700": "114 157 2", // #729d02
		"--color-success-800": "91 125 1", // #5b7d01
		"--color-success-900": "74 102 1", // #4a6601
		// warning | #E0D232 
		"--color-warning-50": "250 248 224", // #faf8e0
		"--color-warning-100": "249 246 214", // #f9f6d6
		"--color-warning-200": "247 244 204", // #f7f4cc
		"--color-warning-300": "243 237 173", // #f3edad
		"--color-warning-400": "233 224 112", // #e9e070
		"--color-warning-500": "224 210 50", // #E0D232
		"--color-warning-600": "202 189 45", // #cabd2d
		"--color-warning-700": "168 158 38", // #a89e26
		"--color-warning-800": "134 126 30", // #867e1e
		"--color-warning-900": "110 103 25", // #6e6719
		// error | #B42400 
		"--color-error-50": "244 222 217", // #f4ded9
		"--color-error-100": "240 211 204", // #f0d3cc
		"--color-error-200": "236 200 191", // #ecc8bf
		"--color-error-300": "225 167 153", // #e1a799
		"--color-error-400": "203 102 77", // #cb664d
		"--color-error-500": "180 36 0", // #B42400
		"--color-error-600": "162 32 0", // #a22000
		"--color-error-700": "135 27 0", // #871b00
		"--color-error-800": "108 22 0", // #6c1600
		"--color-error-900": "88 18 0", // #581200
		// surface | #AF9AB2 
		"--color-surface-50": "243 240 243", // #f3f0f3
		"--color-surface-100": "239 235 240", // #efebf0
		"--color-surface-200": "235 230 236", // #ebe6ec
		"--color-surface-300": "223 215 224", // #dfd7e0
		"--color-surface-400": "199 184 201", // #c7b8c9
		"--color-surface-500": "175 154 178", // #AF9AB2
		"--color-surface-600": "158 139 160", // #9e8ba0
		"--color-surface-700": "131 116 134", // #837486
		"--color-surface-800": "105 92 107", // #695c6b
		"--color-surface-900": "86 75 87", // #564b57
		
	}
}