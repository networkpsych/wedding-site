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
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [3];

export const dictionary = {
		"/": [~4],
		"/(errors)/404": [5,[2]],
		"/(wedding)/about": [6,[3]],
		"/(wedding)/home": [7,[3]],
		"/(wedding)/links": [8,[3]],
		"/(wedding)/memories": [9,[3]],
		"/(wedding)/rsvp": [~10,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';