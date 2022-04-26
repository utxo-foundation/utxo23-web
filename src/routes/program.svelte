<script context="module">
  export const prerender = true;
</script>

<script>
  import Event from "$lib/Event.svelte";
  import { onMount, onDestroy } from 'svelte';
  import { page } from "$app/stores";
  import { goto } from '$app/navigation';
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
    const tag = e.detail.path[0].innerHTML;
    if (tag) {
      goto(`/program?tag=${tag}`)
    }
    return true
  }

  $: events = applyFilters($page, $bundle)
  $: ids = []
  $: filters = makeFilters($page, $bundle)

  function makeFilters (pg, bd) {
    const search = pg.url.searchParams
    let fl = []

    // tags
    if (search.get('tag')) {
      fl.push({ type: 'tag', title: `Tag: #${search.get('tag')}` })
    }
    // tracks
    if (search.get('track')) {
      const track = bd.spec.tracks.find(t => t.id === search.get('track'))
      if (!track) {
        return goto('/program')
      }
      fl.push({ type: 'track', title: `Sekce: ${track.name}` })
    }
    return fl
  }

  function applyFilters (pg, bd) {
    if (!pg || !bd) {
      return []
    }
    const search = pg.url.searchParams
    let arr = bd.spec.events
    if (search.get('tag')) {
      arr = arr.filter(e => e.tags && e.tags.includes(search.get('tag')))
    }
    if (search.get('track')) {
      arr = arr.filter(e => e.track === search.get('track'))
    }
    ids = arr.map(a => a.id)
    return arr
  }

</script>

<svelte:head>
  <title>Program | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Program</h1>
  <div class="mt-2 text-sm">
    <p>
      Program stále připravujeme, aktuálně je zde vypsána jenom část obsahu.
      Časový rozpis bude zveřejněn cca 2 týdny před konferencí.
    </p>
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
  {#if filters.length > 0}
    <div class="mt-6 flex flex-wrap gap-3">
      <div class="my-auto">Filtry:</div>
      <div class="text-sm my-auto">
        {#each filters as filter}
          <div class="py-1 px-2 rounded bg-blue-web/60 text-white">{filter.title}</div>
        {/each}
      </div>
      <div class="ml-3 my-auto">
        <a href="/program"><i class="fa-solid fa-xmark text-red-500 mr-1" /> Zrušit filtr</a>
      </div>
    </div>
  {:else}
    <div class="mt-6 lg:mt-10 flex sm:justify-center overflow-auto">
      <WordCloud words={tags} on:click={wordClick} />
    </div>
  {/if}

  <h1 class="mt-6 uppercase text-lg font-semibold">
    Seznam událostí ({ids.length}/{$bundle.spec.events.length})
  </h1>
  <div class="mt-4">
    {#each $bundle.spec.events as e}
      {#if ids.includes(e.id)}
        <Event event={e} />
      {/if}
    {/each}
  </div>
</section>

