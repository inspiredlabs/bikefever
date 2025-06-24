import path from 'path';
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        // vitePreprocess(),
        /* stackoverflow.com/questions/75056422/how-to-use-vitepreprocess-with-global-scss-mixins-in-sveltekit#75555487 */
        mdsvex() ],

    kit: {
        adapter: adapter(),
        alias: {
            $routes: path.resolve('./src/routes'),
            $lib: path.resolve('./src/lib'),
            $src: path.resolve('./src/')
        },
    },

    extensions: [".svelte", ".svx"]
};

export default config;
