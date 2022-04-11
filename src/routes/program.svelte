<script context="module">
  export const prerender = true;
</script>

<script>
  import Event from "$lib/Event.svelte";
  import { bundle, userData } from "$lib/stores.js";
</script>

<svelte:head>
  <title>Program | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Program</h1>
  <div class="mt-2 text-sm">
    Program stále připravujeme. Jeho konečná podoba bude zveřejněna pár týdnů
    před konferencí.
  </div>

  <div class="mt-6">
    {#each $bundle.spec.events.filter((e) => !e.parent) as e}
      <Event event={e} />
    {/each}
  </div>
</section>
