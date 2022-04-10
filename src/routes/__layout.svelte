<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
  import api from '$lib/api.js';
  import { page } from '$app/stores';
  import { userData, userDataLocal, apiStatus } from '$lib/stores';
  import { loadOrders, loadApiStatus } from '$lib/orders';
  import { onMount } from 'svelte';

  let bundle = null

  onMount(async () => {
    bundle = await api.loadBundle($page.url.hostname === 'localhost')

    const userDataLS = localStorage.getItem('userData')
    if (userDataLS) {
      userData.set(JSON.parse(userDataLS))
    }

    userData.subscribe(ud => {
      localStorage.setItem('userData', JSON.stringify(ud))
    })

    await loadApiStatus()
    await loadOrders($userData)
  })

  // load orders

</script>

{#if bundle}
<div class="layout min-h-screen bg-gray-900">
  <div class="inset-0 bg-white">
    <Header />

    <main>
      <slot />
    </main>
  </div>
  <Footer />
</div>
{/if}

<style>
</style>
