import { writable } from 'svelte/store';

export const bundle = writable(null);
export const apiStatus = writable(null);

export const orderTicketForm = writable({
  count: 1,
  email: '',
  tickets: [],
  paymentMethod: 'btcpay',
  tipPercent: 10,
  tipCustom: '',
  __v: 2
});

export const userData = writable({
  favoriteEvents: [],
  hpTrack: 'top',
});
