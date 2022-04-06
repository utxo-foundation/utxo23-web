import { writable } from 'svelte/store';

export const bundle = writable(null);

export const orderTicketForm = writable({
  count: 1,
  email: '',
  tickets: [],
  paymentMethod: 'card',
});

export const userData = writable({
  favoriteEvents: [],
  hpTrack: 'top',
});
