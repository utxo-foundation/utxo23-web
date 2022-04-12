import { bundle } from '$lib/stores.js';
import staticBundle from '$lib/bundle.json';

class API {
  constructor () {
    this.bundle = null
  }

  async load () {
    await this.loadBundle()
  }

  async loadBundle (local = false) {
    if (!this.bundle) {
      if (local) {
        this.bundle = staticBundle
        //const resp = await fetch('http://localhost:8000/22/bundle.json')
        //this.bundle = await resp.json()
      } else {
        const resp = await fetch('https://spec.utxo.cz/22/bundle.json')
        this.bundle = await resp.json()
      }
      bundle.set(this.bundle)
    }
    return this.bundle
  }

  async apiCall (path, opts={ method: 'get' }, body = null) {
    if (body) {
      opts.headers = { 'Content-Type': 'application/json', }
      opts.body = JSON.stringify(body)
    }
    const resp = await fetch(`https://api.utxo.cz/${path}`, opts)
    return resp.json()
  }

  async submitOrder (data) {
    const resp = await fetch('https://api.utxo.cz/submitOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(data),
    })
    return resp.json()
  }
}

const api = new API();

export default api;
