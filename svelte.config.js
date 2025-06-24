import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
	],
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'),
			$lib: path.resolve('./src/lib'),
			$src: path.resolve('./src/')
    },

	},

	// plugin options
  vitePlugin: {
    exclude: []
  }, 
	// vite: {
	// 	build: {
	// 		sourcemap: false
	// 	},
	// 	css: {
	// 		devSourcemap: false
	// 	},
	// 	esbuild: {
	// 		sourcemap: false
	// 	}
	// }

};

export default config;
