import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		/* take my massive 200kb CSS file and strip it so that only the relevant classes remain and my app looks and works EXCATLY the same as expected */
    postcss: './postcss.config.mjs', // or .js
  }
});
