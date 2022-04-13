<script context="module">
  export const prerender = true;
</script>

<script>
  import Event from "$lib/Event.svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { calcDuration } from "$lib/events.js";
  import WordCloud from "$lib/WordCloud.svelte";

  $: tags = getTags($bundle);
  $: totalDuration = calcTotalDuration($bundle);

  function getTags(data) {
    let res = {};
    data.spec.events.forEach((e) => {
      if (!e.tags) {
        return;
      }
      e.tags.forEach((t) => {
        if (!res[t]) {
          res[t] = { text: t, count: 0 };
        }
        //res[t].count++
        res[t].count += 1;
      });
    });
    let arr = Object.keys(res).map((k) => res[k]);
    const max = arr.reduce((p, c) => (c.count > p ? c.count : p), 0);
    arr = arr.map((i) => {
      i.count = Math.round(i.count / (max / 40));
      return i;
    });
    return arr;
  }

  function calcTotalDuration(bundle) {
    if (!bundle) {
      return null;
    }
    return bundle.spec.events.reduce(
      (p, e) => p + (calcDuration(e, bundle) || 0),
      0
    );
  }

  function wordClick(e) {
    console.log(e.detail.path[0].innerHTML);
  }
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
  <!--div class="mt-6 flex flex-wrap gap-3 px-4 text-center">
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
  </div-->
  <div class="mt-10 flex sm:justify-center overflow-auto">
    <WordCloud words={tags} on:click={wordClick} />
  </div>

  <h1 class="mt-6 uppercase text-lg font-semibold">Seznam událostí</h1>
  <div class="mt-4">
    {#each $bundle.spec.events.filter((e) => !e.parent) as e}
      <Event event={e} />
    {/each}
  </div>
</section>
