<script context="module">
  export const prerender = true;
</script>

<script>
  import { bundle, userData } from "$lib/stores.js";
  import SvelteMarkdown from "svelte-markdown";

  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };
</script>

<svelte:head>
  <title>Praktické informace | {$bundle ? $bundle.name : "UTXO.22"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Praktické informace</h1>

  {#if bundle}
    {#each $bundle.spec['practical-info'] as item}
      <div class="mt-8">
        <div><a id={item.id} href="#{item.id}"><h2 class="text-xl uppercase font-bold">{item.name}</h2></div>
        <div class="mt-4">
          <SvelteMarkdown source={item.text} {renderers} />
        </div>
      </div>
    {/each}
  {:else}
    Načítám ..
  {/if}
</section>
