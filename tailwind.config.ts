import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin';
import { wedding_theme } from './src/wedding_theme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			backgroundImage: {
				'idaho-trip': "url('./src/lib/assets/valentines_2021.jpg)"
			}
		},
		fontFamily: {
			'labelle': ['LaBelleAurore'],
			'inspiration': ['Inspiration'],
			'base':['Quicksand']
		},
		transformOrigin: {
			'top-left-1/3-3/4': '33% 75%',
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					wedding_theme,
				],
			},
		}),
	],
} satisfies Config;
