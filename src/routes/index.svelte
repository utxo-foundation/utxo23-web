<script context="module">
  export const prerender = true;
</script>

<script>
  import { bundle, userData } from "$lib/stores.js";
  import Avatar from "$lib/Avatar.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };

  let onlyLead = true;
  let onlyLeadPreview = false;

  $: currentBundle = $bundle;
  $: leadSpeakersCount = currentBundle
    ? currentBundle.spec.speakers.filter((s) => !!s.lead).length
    : 0;
  $: tracks = currentBundle
    ? [
        { name: "Hlavní přednášející (" + leadSpeakersCount + ")", id: "top" },
        { name: "Vše", id: null },
      ].concat(currentBundle.spec.tracks)
    : null;

  function changeTrack(tId) {
    return function () {
      userData.update((ud) => {
        ud.hpTrack = tId;
        return ud;
      });
      onlyLead = !tId;
    };
  }

  function handleShowFull() {
    userData.update((ud) => {
      ud.hpTrack = null;
      return ud;
    });
  }
</script>

<svelte:head>
  <title
    >UTXO.22 - 4-5. červen 2022 {$bundle
      ? "- " + $bundle.description
      : ""}</title
  >
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl">
  {#if $bundle}
    <div
      class="flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-blue-web justify-left"
    >
      {#each tracks as track}
        <div
          class="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid {$userData.hpTrack ===
          track.id
            ? 'bg-utxo-gradient border-0 text-white'
            : 'border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer'}"
          on:click={changeTrack(track.id)}
        >
          {track.shortname || track.name}
          {#if !track.id}({$bundle.spec.speakers.length}){/if}
        </div>
      {/each}
    </div>

    <div class="flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center">
      {#each $bundle.spec.speakers as speaker}
        {#if ($userData.hpTrack === "top" && speaker.lead === true) || $userData.hpTrack !== "top"}
          {#if !$userData.hpTrack || (speaker.tracks && speaker.tracks.includes($userData.hpTrack)) || $userData.hpTrack === "top"}
            <Avatar {speaker} />
          {/if}
        {/if}
      {/each}
    </div>
    {#if $userData.hpTrack === "top"}
      <div class="relative cursor-pointer mb-10">
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent to-white flex"
          on:click={handleShowFull}
        />
        <div class="flex flex-wrap gap-3 mt-10 justify-center">
          {#each $bundle.spec.speakers
            .filter((s) => !s.lead)
            .sort(() => 0.5 - Math.random())
            .slice(0, 27) as speaker}
            <Avatar {speaker} size="small" />
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
        <img
          src="/photos/gabriel-loci.jpeg"
          class="flex rounded-xl shadow-xl"
          alt="Gabriel Loci"
        />
        <div class="flex mt-3 gap-3">
          <div class="w-1/2">
            <img
              src="/photos/rajska-zahrada.jpeg"
              class="rounded-lg shadow-lg"
              alt="Gabriel Loci - Rajská zahrada"
            />
          </div>
          <div class="w-1/2">
            <img
              src="/photos/knihovna.jpeg"
              class="rounded-lg shadow-lg"
              alt="Gabriel Loci - Knihovna"
            />
          </div>
        </div>
      </div>
      <div class="text-white md:w-1/2 md:pt-0 pt-6">
        <div class="uppercase">Místo</div>
        <div class="uppercase mt-3 text-4xl font-bold">Gabriel Loci</div>
        <div class="mt-4 font-bold">
          Holečkova 106/10, 150 00 Praha 5 - Smíchov 🇨🇿<br /><span
            class="font-normal"
            ><a
              href="https://goo.gl/maps/u1aY4RxXMgcm889V7"
              class="underline hover:no-underline"
              target="_blank">Google Maps</a
            >,
            <a
              href="https://mapy.cz/s/cuvetubafo"
              class="underline hover:no-underline"
              target="_blank">Mapy.cz</a
            ></span
          >
        </div>
        <div class="mt-4">
          Benediktinky. Kulturní památka. Česká Pošta. Poštovní muzeum. Na první
          pohled nesouvisející názvy, které jsou ale neodmyslitelnou součástí
          unikátního komplexu Gabriel Loci na pražském Smíchově doslova pár
          minut od centra. Na konci 19.století v klášteře sídlily řeholnice,
          ženské opatství řádu benediktinek beuronské kongregace. Později
          prostory spravovalo československé Ministerstvo pošt a telegrafů. Dnes
          komplex využívají hlavně natáčecí studia jako HBO, Netflix nebo i ČT.
          No a my! 💪<br /><br />
          Zažijte mysteriózní atmosféru komplexu na 1.ročníku konference UTXO.22.
          Část after-party si užijete doslova v pitevně ze seriálu Devadesátky 👌😀
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative mx-auto py-10 px-6 max-w-6xl">
  <div class="text-blue-web lg:mt-10">
    <div class="text-2xl uppercase font-bold text-center">Partneři</div>
    <div class="mt-6 text-center">Sponzoři</div>
    <div class="mt-6 flex flex-wrap gap-8 justify-center">
      {#each $bundle.spec.partners.filter((p) => p.type === "sponsor") as p}
        <div class="w-28">
          <a href={p.web.url} target="_blank"
            ><Avatar
              speaker={p}
              col="partners"
              size="custom"
              customSize="w-24 shadow-xl"
            /></a
          >
          <div class="text-center text-sm uppercase font-bold">{p.name}</div>
        </div>
      {/each}
    </div>
    <div class="mt-10 text-center">Komunity</div>
    <div class="mt-6 flex flex-wrap gap-6 justify-center">
      {#each $bundle.spec.partners.filter((p) => p.type === "community") as p}
        <div>
          <a
            href={p.web
              ? p.web.url
              : p.twitter
              ? `https://twitter.com/${p.twitter}`
              : ""}
            target="_blank"
            ><Avatar
              speaker={p}
              col="partners"
              size="custom"
              customSize="w-20 shadow-lg"
            /></a
          >
        </div>
      {/each}
    </div>
    <div class="mt-10 text-center">Mediální partneři</div>
    <div class="mt-6 flex flex-wrap gap-4 justify-center">
      {#each $bundle.spec.partners.filter((p) => p.type === "medium") as p}
        <div>
          <a
            href={p.web
              ? p.web.url
              : p.twitter
              ? `https://twitter.com/${p.twitter}`
              : ""}
            target="_blank"
            ><Avatar
              speaker={p}
              col="partners"
              size="custom"
              customSize="w-16 shadow-lg"
            /></a
          >
        </div>
      {/each}
    </div>
  </div>
</section>

{#if $bundle}
  <section class="relative mx-auto py-10 px-6 max-w-6xl">
    <div class="text-blue-web">
      <h2 class="uppercase pt-5 text-center" id="faq">Často kladené dotazy (FAQ)</h2>
      <div class="md:columns-2 columns-1 mt-8 h-auto">
        {#each $bundle.spec.faqs as item}
          <div
            class="mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible"
          >
            <div class="mb-4 font-bold">{item.question}</div>
            <SvelteMarkdown source={item.answer} {renderers} />
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
</style>
