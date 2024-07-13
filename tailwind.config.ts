import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { wedding_theme } from './src/wedding_theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			backgroundImage: {
				'bnm-bg': "url('./src/lib/assets/bnm_bg.jpg')",
				'bnm-mobile': "url('./src/lib/assets/bnm_bg_mobile.jpg')"
			}
		},
		fontFamily: {
			bungeeshade: ['BungeeShade'],
			nfRegular: ['NationalForestRegular'],
			nfPrintRegular: ['NationalForestPrintRegular'],
			nfPrintBold: ['NationalForestExtraBold'],
			nfExtraBold: ['NationalForestExtraBold']
		},
		transformOrigin: {
			'top-left-1/3-3/4': '33% 75%'
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [wedding_theme]
			}
		})
	]
} satisfies Config;
