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
        const resp = await fetch('https://spec.utxo.cz/23/bundle.json')
        this.bundle = await resp.json()
      }
      bundle.set(this.bundle)

      // add speaker info to events
      for (const ev of this.bundle.spec.events) {
        ev.speakersInfo = ev.speakers.map(sId => {
          const sp = this.bundle.spec.speakers.find(s => s.id === sId)
          if (!sp) {
            return null
          }
          return {
            name: sp.name,
            nickname: sp.nickname,
            bio: sp.bio,
            orgs: sp.orgs,
            description: sp.desc
          }
        })
        if (this.bundle.schedule) {
          const schedule = this.bundle.schedule.find(s => s.event === ev.id)
          if (schedule) {
            ev.scheduleId = '@' + schedule.id
          }
        }
      }
    }
    return this.bundle
  }

  async apiCall (path, opts={ method: 'get' }, body = null) {
    if (body) {
      opts.headers = { 'Content-Type': 'application/json', }
      opts.body = JSON.stringify(body)
    }
    const resp = await fetch(`https://api.utxo.cz/${path}`, opts)
    if (resp.status !== 200) {
      return null
    }
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
