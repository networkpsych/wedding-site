export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [3];

export const dictionary = {
		"/(errors)/404": [4,[2]],
		"/(wedding)/about": [5,[3]],
		"/(wedding)/home": [6,[3]],
		"/(wedding)/links": [7,[3]],
		"/(wedding)/memories": [8,[3]],
		"/(wedding)/rsvp": [~9,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';