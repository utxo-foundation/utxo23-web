import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(307, 'https://cfp.utxo.cz/23/schedule/');
}