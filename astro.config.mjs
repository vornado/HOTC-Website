import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const DEV_PORT = 4321;

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://vornado.github.io'
		: `http://localhost:${DEV_PORT}`,
	base: './',
	integrations: [
		tailwind(),
	],
});