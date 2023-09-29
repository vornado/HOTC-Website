import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://vornado.github.io'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI,
	integrations: [
		tailwind(),
	],
});
