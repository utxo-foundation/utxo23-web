<script>
    import { bundle, userData, apiStatus } from "$lib/stores.js";
    import Avatar from "$lib/Avatar.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Link from "$lib/Link.svelte";
    import SvelteTooltip from "$lib/SvelteTooltip.svelte";
    import Transition from "$lib/Transition.svelte";
    const renderers = { link: Link };
  
    export let data;
  
  </script>
  
  <svelte:head>
    <title>UTXO.23 {data.bundle ? "- " + data.bundle.description : ""}</title>
  </svelte:head>
  
  {#if data.bundle}
    <ul>
      {#each data.bundle.spec.speakers as speaker}
        <li><a href="/lide/{speaker.id}" class="href">{speaker.name}</a></li>
      {/each}
    </ul>
  {/if}