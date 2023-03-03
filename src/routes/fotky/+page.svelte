<script>
  import { onMount } from "svelte";
  import {Album1, Album2 } from './albums.js';

  onMount(() => {
    var player1 = new GalleryPlayerWidget();
    player1.decorate(document.getElementById('album1'));
    var player2 = new GalleryPlayerWidget();
    player2.decorate(document.getElementById('album2'));
  })

</script>
<svelte:head>
  <title>Fotky | UTXO.22</title>
</svelte:head>


<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-custom-darkpurple">
  <h1 class="uppercase text-2xl font-bold mb-4"><a href="https://photos.app.goo.gl/8ogj2Y3cdUGwMAc4A">Fotky</a></h1>
  <div class="mb-4"><a href="https://photos.app.goo.gl/8ogj2Y3cdUGwMAc4A" target="_blank" class="underline hover:no-underline">Zobrazit všechny fotky</a></div>

  <div class="aspect-video">
    <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script>
<div style="width:100%; height:100%; display:none;"
  id="album1"
  data-link="https://photos.app.goo.gl/8ogj2Y3cdUGwMAc4A"
  data-title="UTXO.22"
  data-description="357 new items · Album by Tereza Starostová"
  data-delay="3">
  {#each Album1 as foto}
    <object data="{foto.url}" title="foto.title"></object>
  {/each}
</div>

  </div>

  <h1 class="uppercase text-2xl font-bold mt-10 mb-4"><a href="https://photos.app.goo.gl/CmLgcgntsmBgMyNd9">Komunitní fotky a videa</a></h1>
  <div class="mb-4">Po přihlášení Google účtem můžete přidat svoje fotky do sdíleného alba! <a href="https://photos.app.goo.gl/CmLgcgntsmBgMyNd9" target="_blank" class="underline hover:no-underline">Odkaz na album</a></div>
  <div class="aspect-video">
    <div style="width:100%; height:100%; display:none;"
      id="album2"
      data-link="https://photos.app.goo.gl/CmLgcgntsmBgMyNd9"
      data-title="UTXO.22 - komunitní fotky"
      data-description="12 new items added to shared album"
      data-delay="3">
      {#each Album2 as foto}
        <object data="{foto.url}" title="foto.title"></object>
      {/each} 
    </div>
  </div>

</section>
