import { userDataLocal, apiStatus } from '$lib/stores';
import api from '$lib/api.js';

export async function loadOrders ($userData) {
  if (($userData.orders && $userData.orders.length > 0)
        || ($userData.tickets && $userData.tickets.length > 0)) {

    const resp = await api.apiCall('orders', { method: 'POST' }, { orders: $userData.orders, tickets: $userData.tickets })
    userDataLocal.update(dl => {
      dl.orders = resp.orders
      dl.tickets = resp.tickets
      return dl
    })
  }
}

export async function loadApiStatus () {
  apiStatus.set(await api.apiCall('status'))
}

