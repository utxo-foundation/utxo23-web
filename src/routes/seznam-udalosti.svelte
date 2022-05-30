<script context="module">
  export const prerender = true;
</script>

<script>
  import Event from "$lib/Event.svelte";
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { bundle, userData, loadInfo } from "$lib/stores.js";
  import { calcDuration } from "$lib/events.js";
  import WordCloud from "$lib/WordCloud.svelte";
  import Fuse from "fuse.js";

  $: tags = getTags($bundle);
  $: totalDuration = calcTotalDuration($bundle);

  let fuse = null;
  let searchText = "";

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
      goto(`/program?tag=${tag}`);
    }
    return true;
  }

  $: filters = makeFilters($page, $bundle);
  $: events = applyFilters(filters, $page, $bundle);
  $: ids = [];

  function makeFilters(pg, bd) {
    const search = pg.url.searchParams;
    let fl = [];

    // tags
    if (search.get("tag")) {
      fl.push({
        type: "tag",
        title: `Tag: #${search.get("tag")}`,
        key: search.get("tag"),
      });
    }
    // tracks
    if (search.get("track")) {
      const track = bd.spec.tracks.find((t) => t.id === search.get("track"));
      if (!track) {
        return goto("/program");
      }
      fl.push({ type: "track", title: `Sekce: ${track.name}`, key: track.id });
    }
    if (searchText) {
      fl.push({
        type: "text",
        title: `Text: "${searchText}"`,
        key: searchText,
      });
    }
    return fl;
  }

  function applyFilters(fl, pg, bd) {
    if (!pg || !bd) {
      return [];
    }
    let arr = bd.spec.events;
    for (const f of fl) {
      if (f.type === "tag") {
        arr = arr.filter((e) => e.tags && e.tags.includes(f.key));
      }
      if (f.type === "track") {
        arr = arr.filter((e) => e.track === f.key);
      }
      if (f.type === "text") {
        const sr = fuse.search(f.key);
        if (sr.length > 0) {
          arr = sr
            .map((sr) => arr.find((i) => i.id === sr.item.id))
            .filter((sr) => sr);
        } else {
          arr = [];
        }
      }
    }
    ids = arr.map((a) => a.id);
    return arr;
  }

  bundle.subscribe((bd) => {
    fuse = new Fuse(bd.spec.events, {
      //includeScore: true,
      //minMatchCharLength: 1,
      threshold: 0.4,
      keys: [
        { name: "name", weight: 10 },
        { name: "description", weight: 7 },
        { name: "speakers", weight: 5 },
        { name: "speakersInfo.nickname", weight: 5 },
        { name: "speakersInfo.twitter", weight: 4 },
        { name: "track", weight: 2 },
        { name: "tags", weight: 2 },
        { name: "speakersInfo.bio", weight: 1 },
        { name: "speakersInfo.orgs", weight: 1 },
        { name: "speakersInfo.description", weight: 1 },
      ],
    });
  });

  page.subscribe(() => {
    searchText = "";
  });

  function searchTextSubmit() {
    filters = makeFilters($page, $bundle);
  }

  function cancelFilter() {
    searchText = "";
    filters = makeFilters($page, $bundle);
    goto("/program");
  }
</script>

<svelte:head>
  <title>Seznam událostí | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">
    <a href="/program">Program</a> → Seznam událostí
  </h1>
  <div class="mt-2">
    <p>
      <a href="/program" class="underline hover:no-underline"
        >Časový rozpis (program)</a
      >
      | <a href="/changelog" class="underline hover:no-underline">Changelog</a>
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

  <!--div class="mt-6 bg-custom-green/30 rounded-lg px-4 py-3">
    <span class="font-semibold">🔥 Chcete kryptokomunitě něco říct? prezentovat svůj projekt nebo nápad? nebo snad prodiskutovat nějaké krypto téma? Každopádně potkat nové lidi?</span> Uspořádejte <a href="https://docs.utxo.cz/hlavni-program/formaty-programu#campfire-taborovy-ohen" target="_blank" class="font-semibold">Campfire session</a>! Jde o náš nový formát, kterým chceme dát možnost doplnit obsah na UTXO.22 i široké komunitě.<br/>
    Detaily o Campfire formátu a přihlášku naleznete <a href="https://docs.google.com/forms/d/e/1FAIpQLScYh21d2z3sVDXyE9b15HxG0fabTiW5jJ8qJlAJT_w_j4v23w/viewform?usp=sf_link" target="_blank" class="underline hover:no-underline">na tomto odkazu</a>.
  </div-->

  {#if filters.length > 0}
    <div class="mt-6 flex flex-wrap gap-3">
      <div class="my-auto">Filtry:</div>
      <div class="text-sm my-auto flex gap-1">
        {#each filters as filter}
          <div class="py-1 px-2 rounded bg-blue-web/60 text-white">
            {filter.title}
          </div>
        {/each}
      </div>
      <div class="ml-3 my-auto">
        <a href="" on:click={cancelFilter}
          ><i class="fa-solid fa-xmark text-red-500 mr-1" /> Zrušit filtr</a
        >
      </div>
    </div>
  {:else if $loadInfo.loaded}
    <div class="mt-6 lg:mt-10 flex sm:justify-center overflow-auto">
      <WordCloud words={tags} on:click={wordClick} />
    </div>
  {/if}

  <div class="mt-6 sm:flex">
    <div class="my-auto flex-1">
      <h1 class="uppercase text-lg font-semibold">
        Seznam událostí ({ids.length}/{$bundle.spec.events.length})
      </h1>
    </div>
    <div class="my-auto flex gap-2 mt-2 sm:mt-0">
      <div class="my-auto">Hledat:</div>
      <div>
        <input
          type="text"
          bind:value={searchText}
          on:input={searchTextSubmit}
          class="border rounded border-blue-web/30 px-1.5 py-1"
        />
      </div>
    </div>
  </div>
  <div class="mt-4">
    {#each ids as id}
      <Event event={$bundle.spec.events.find((e) => e.id === id)} hideDate="true" />
    {/each}
  </div>
  <!--div class="mt-4">
    {#each $bundle.spec.events as e}
      {#if ids.includes(e.id)}
        <Event event={e} />
      {/if}
    {/each}
  </div-->
</section>
