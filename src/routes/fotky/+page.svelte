<script>
  import { onMount } from "svelte";
  import {Album1} from './albums.js';

  onMount(() => {
    var player1 = new GalleryPlayerWidget();
    player1.decorate(document.getElementById('album1'));

  })

</script>
<svelte:head>
  <title>Fotky | UTXO.23</title>
</svelte:head>


<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-custom-darkpurple">
  <h1 class="uppercase text-2xl font-bold mb-4"><a href={Album1.url} target="_blank" rel="noreferrer">Fotky</a></h1>
  <!-- <div class="mb-4"><a href={Album1.url} target="_blank" class="underline hover:no-underline" rel="noreferrer">Zobrazit všech {Album1.photos.length} fotek</a></div> -->
  <div class="mb-4"><a href={Album1.url} target="_blank" class="underline hover:no-underline" rel="noreferrer">Zobrazit všech 566 fotek</a></div>

  <div class="aspect-video">
    <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script>
<div style="width:100%; height:100%; display:none;"
  id="album1"
  data-link={Album1.url}
  data-title="UTXO.23"
  data-description="357 new items · Album by Tereza Starostová"
  data-delay="3">
  {#each Album1.photos as foto}
    <object data="{foto.url}" title="foto.title"></object>
  {/each}
</div>

  </div>
</section>
