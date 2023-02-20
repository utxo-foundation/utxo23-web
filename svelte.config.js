import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: 'warn',
    }
  },
  preprocess: vitePreprocess()
};

export default config;
