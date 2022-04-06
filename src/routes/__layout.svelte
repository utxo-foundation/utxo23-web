<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
  import api from '$lib/api.js';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let bundle = null

  onMount(async () => {
    bundle = await api.loadBundle($page.url.hostname === 'localhost')
  })

</script>

{#if bundle}
<div class="layout min-h-screen">
  <div class="inset-0">
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
