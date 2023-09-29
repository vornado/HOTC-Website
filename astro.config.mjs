import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
  	outDir: 'public',
  	publicDir: 'static',
	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});