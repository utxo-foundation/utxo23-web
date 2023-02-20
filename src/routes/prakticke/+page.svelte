<script>
  import { bundle, userData } from "$lib/stores.js";
  import SvelteMarkdown from "svelte-markdown";

  export let data;

  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };
</script>

<svelte:head>
  <title>Praktické informace | {data.bundle ? data.bundle.name : "UTXO.22"}</title>
</svelte:head>

<h1 class="max-w-7xl mx-auto py-8 text-3xl">Praktické informace</h1>

<!-- <section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Praktické informace</h1>

  {#if bundle}
    {#each data.bundle.spec["practical-info"] as item}
      <div class="mt-8">
        <div>
          <a id={item.id} href="#{item.id}"
            ><h2 class="text-xl uppercase font-bold">{item.name}</h2></a
          >
        </div>
        <div class="mt-4 utxo-markdown">
          <SvelteMarkdown source={item.text} {renderers} />
        </div>
      </div>
    {/each}
  {:else}
    Načítám ..
  {/if}
</section> -->
