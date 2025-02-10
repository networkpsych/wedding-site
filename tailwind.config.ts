//import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes'
import weddingtheme from './wedding_theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		contentPath(import.meta.url, 'svelte')
	],
	theme: {
		extend: {
			backgroundImage: {
				'bnm-bg': "url('/src/lib/assets/bnm_bg.jpg')",
				'bnm-bg-2': "url('/src/lib/assets/bnm_bg_2.jpg')",
				'bnm-mobile': "url('/src/lib/assets/bnm_bg_mobile.jpg')",
				'bnm-mobile-2': "url('/src/lib/assets/bnm_bg_mobile_2.jpg')"
			},
		fontFamily: {
			nfRegular: ['NationalForestRegular'],
			nfPrintRegular: ['NationalForestPrintRegular'],
			nfPrintBold: ['NationalForestExtraBold'],
			nfExtraBold: ['NationalForestExtraBold']
		},
	},
		transformOrigin: {
			'top-left-1/3-3/4': '33% 75%'
		}
	},
	plugins: [
		skeleton({
			themes: [
				themes.rose, weddingtheme
			]
		})
	]
} satisfies Config;
