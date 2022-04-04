<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
  import * as api from '$lib/api.js';
  import { onMount } from 'svelte';

  let spec = null
  onMount(async () => {
    spec = await api.spec()
  })

</script>

<div class="layout min-h-screen py-6 flex flex-col justify-center relative overflow-hidden">
  <div class="inset-0">
    <Header />

    <main>
      <slot />
    </main>
  </div>
  <footer>
  </footer>
</div>


<style>
</style>
