<script context="module">
	export const prerender = true;
</script>

<script>
  import { bundle } from '$lib/stores.js';
  import Avatar from '$lib/Avatar.svelte';
  import SvelteMarkdown from 'svelte-markdown';

  let currentTrack = 'top'
  let onlyLead = true
  let onlyLeadPreview = false

  $: currentBundle = $bundle;
  $: leadSpeakersCount = currentBundle ? currentBundle.spec.speakers.filter(s => !!s.lead).length : 0
  $: tracks = currentBundle ? [{ name: 'Hlavní přednášející ('+leadSpeakersCount+')', id: 'top' }, { name: 'Vše', id: null }].concat(currentBundle.spec.tracks) : null

  function changeTrack (tId) {
    return function () {
      currentTrack = tId
      onlyLead = !tId
    }
  }

  function handleShowFull () {
    $: currentTrack = null
  }

</script>

<svelte:head>
  <title>UTXO.22 - 4-5. červen 2022 - {$bundle.description}</title>
</svelte:head>

<section class="relative mx-auto py-10 px-6 max-w-6xl">
  {#if $bundle}
    <div class="flex flex-wrap gap-3 text-xs uppercase font-bold text-blue-web justify-left">
      {#each tracks as track}
        <div class="py-2 px-8 rounded-full border border-solid {currentTrack === track.id ? 'bg-utxo-gradient border-0 text-white' : 'border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer'}" on:click={changeTrack(track.id)}>{track.shortname || track.name} {#if !track.id}({$bundle.spec.speakers.length}){/if}</div>
      {/each}
    </div>

    <div class="flex flex-wrap gap-6 mt-14 justify-center">
      {#each $bundle.spec.speakers as speaker}
        {#if (currentTrack === 'top' && speaker.lead === true) || currentTrack !== 'top'}
          {#if (!currentTrack || speaker.tracks.includes(currentTrack)) || currentTrack === 'top'}
            <Avatar speaker={speaker} />
          {/if}
        {/if}
      {/each}
    </div>
    {#if currentTrack === 'top'}
      <div class="relative cursor-pointer mb-10">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white flex" on:click={handleShowFull}></div>
        <div class="flex flex-wrap gap-3 mt-10 justify-center">
          {#each $bundle.spec.speakers as speaker}
            {#if !speaker.lead}
              <Avatar speaker={speaker} size="small" />
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</section>

<section class="bg-utxo-gradient">
  <div class="relative mx-auto py-6 px-6 max-w-6xl">
    <div class="py-6 md:py-10 md:flex gap-12">
      <div class="block flex-1">
        <img src="/photos/gabriel-loci.jpeg" class="flex rounded-xl shadow-xl" alt="Gabriel Loci" />
      </div>
      <div class="text-white md:w-1/2 md:pt-0 pt-6">
        <div class="uppercase">Místo</div>
        <div class="uppercase mt-4 text-4xl font-bold">Gabriel Loci</div>
        <div class="mt-4 font-bold">
          Holečkova 106/10<br/>
          150 00 Praha 5 - Smíchov
        </div>
        <div class="mt-4">
          Benediktinky. Kulturní památka. Česká Pošta. Poštovní muzeum.
Na první pohled nesouvisející názvy, které jsou ale neodmyslitelnou součástí unikátního komplexu Gabriel Loci na pražském Smíchově doslova pár minut od centra.
Na konci 19.století v klášteře sídlily řeholnice, ženské opatství řádu benediktinek beuronské kongregace. Později prostory spravovalo československé Ministerstvo pošt a telegrafů.
Dnes komplex využívají hlavně natáčecí studia jako HBO, Netflix nebo i ČT. No a my! 💪<br/><br/>
Zažijte mysteriózní atmosféru komplexu na 1.ročníku konference UTXO.22. Část after-party si užijete doslova v pitevně ze seriálu Devadesátky 👌😀
        </div>
      </div>
    </div>
  </div>
</section>

{#if $bundle}
<section class="relative mx-auto py-10 px-6 max-w-6xl">
  <div class="text-blue-web">
    <h2 class="uppercase pt-5" id="faq">Často kladené dotazy (FAQ)</h2>
    <div class="md:columns-2 columns-1 mt-8 h-auto">
       {#each $bundle.spec.faqs as item}
         <div class="mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible">
           <div class="mb-4 font-bold">{item.question}</div>
           <SvelteMarkdown source={item.answer} />
         </div>
       {/each}
    </div>
  </div>
</section>
{/if}

<style>
</style>
