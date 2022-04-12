<script context="module">
  export const prerender = true;
</script>

<script>
  import Event from "$lib/Event.svelte";
  import { bundle, userData } from "$lib/stores.js";
  import calcDuration from "$lib/events.js";

  $: totalDuration = (() => {
    if (!$bundle) {
      return null;
    }
    return $bundle.spec.events.reduce(
      (p, c) => p + (c ? calcDuration(c, $bundle) : 0),
      0
    );
  })();
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
  <div class="mt-6 flex flex-wrap gap-3 px-4 text-center">
    <div class="flex-1">
      <div class="text-4xl">{$bundle.spec.events.length}</div>
      <div class="uppercase font-sm mt-1">událostí</div>
    </div>
    <div class="flex-1">
      <div class="text-4xl">{$bundle.spec.speakers.length}</div>
      <div class="uppercase font-sm mt-1">přednášejících</div>
    </div>
    <div class="flex-1">
      <div class="text-4xl">{Math.round((totalDuration / 60) * 100) / 100}</div>
      <div class="uppercase font-sm mt-1">hodin obsahu</div>
    </div>
  </div>

  <h1 class="mt-10 uppercase text-lg font-semibold">Seznam událostí</h1>
  <div class="mt-4">
    {#each $bundle.spec.events.filter((e) => !e.parent) as e}
      <Event event={e} />
    {/each}
  </div>
</section>
