import bundle from '$lib/bundle.json';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
   if ((!bundle.spec.speakers.find((s) => s.id === params.slug))) {
      throw error(404, '404 Not found');
   }
 }