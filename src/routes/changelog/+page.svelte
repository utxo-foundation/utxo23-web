<script>
  import { bundle } from "$lib/stores.js";
  import { onMount, onDestroy } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };

  let text = null;

  onMount(async () => {
    const resp = await fetch("https://spec.utxo.cz/23/CHANGELOG.md");
    text = await resp.text();
  });
</script>

<svelte:head>
  <title>Speciální vstupenky | {$bundle ? $bundle.name : "UTXO.23"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  {#if text}
    <div class="utxo-markdown">
      <SvelteMarkdown source={text} {renderers} />
    </div>
  {:else}
    Načítám..
  {/if}
</section>
