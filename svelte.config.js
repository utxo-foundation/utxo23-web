import adapter from '@sveltejs/adapter-static'

import bundle from './src/lib/bundle.json' assert {type: "json"}
const entries = []

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    prerender: {
      crawl: true,
      entries: [
        '*',
        ...entries
      ]
    }
	}
};

export default config;
