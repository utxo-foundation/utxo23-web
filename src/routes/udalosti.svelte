<script context="module">
  export const prerender = true;
</script>

<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { addFavorite } from "$lib/events.js";
  import EventTypeLabel from "$lib/EventTypeLabel.svelte";
  import Avatar from "$lib/Avatar.svelte";
  import Event from "$lib/Event.svelte";
  import { calcDuration } from "$lib/events.js";
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  import Paragraph from "$lib/Paragraph.svelte";

  const renderers = { link: Link, paragraph: Paragraph };

  $: id = getId($page.url.search);
  $: e = $bundle ? $bundle.spec.events.find((ev) => ev.id === id) : null;
  $: duration = e ? calcDuration(e, $bundle) : null;
  $: childrens = $bundle.spec.events.filter((i) => i.parent === e.id);

  function getId(search) {
    const searchParams = new URLSearchParams(search);
    const cid = searchParams.get("id");
    if (!$bundle.spec.events.find((s) => s.id === cid)) {
      goto("/");
    }
    return cid;
  }

  function speakersMap(arr) {
    if (!arr) return;
    return arr.map((sId) => {
      return $bundle.spec.speakers.find((sp) => sp.id === sId);
    });
  }

  function trackRender(trackId) {
    const track = $bundle.spec.tracks.find((t) => t.id === trackId);
    return track.shortname || track.name;
  }
</script>

<svelte:head>
  <title
    >{e ? e.name : ""} | Události | {$bundle ? $bundle.name : "UTXO.22"}</title
  >
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  {#if $bundle && e}
    <div class="mb-6 uppercase text-gray-500">
      <a href="javascript:history.back()"
        ><i class="fa-solid fa-arrow-left" />&nbsp;Zpět</a
      >
    </div>
    <div class="mb-6 flex flex-wrap gap-4">
      <div><EventTypeLabel event={e} size="big" /></div>
      {#if duration}
        <div class="text-sm my-auto">{duration}m</div>
      {/if}
      {#if e.track}
        <div class="text-md my-auto"><a href="/program?track={e.track}">{trackRender(e.track)}</a></div>
      {/if}
      {#if e.tags}
      <div class="flex text-xs gap-1 my-auto text-blue-web/60">
        {#each e.tags as tag}
          <div><a href="/program?tag={tag}">#{tag}</a></div>
        {/each}
      </div>
      {/if}
    </div>
    <div class="float-right">
      <div class="cursor-pointer" on:click={() => addFavorite(e.id, userData)}>
        <i
          class="fa-star {$userData.favoriteEvents.includes(e.id)
            ? 'fa-solid'
            : 'fa-regular'}"
        />
        {#if $userData.favoriteEvents.includes(e.id)}&nbsp;Tvoje oblíbená
          událost{/if}
      </div>
    </div>
    <h1 class="text-2xl font-bold">{e.name}</h1>
    {#if e.speakers && e.speakers.length > 0}
      <div class="mt-4 mb-2 flex flex-wrap gap-4">
        {#each speakersMap(e.speakers) as s}
          <div class="flex gap-2">
            <Avatar speaker={s} size="semi-small" />
            <div class="m-auto">
              <a href="/lide?id={s.id}" class="text-xl">{s.name}</a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
    {#if e.description}
      <div class="mt-6 mb-6">
        <SvelteMarkdown source={e.description} {renderers} />
      </div>
    {/if}
    {#if e.parent}
      <div class="mt-6">
        <h2 class="text uppercase mb-4 font-semibold">Součást události:</h2>
        <Event event={$bundle.spec.events.find((ev) => ev.id === e.parent)} />
      </div>
    {/if}
    {#if childrens.length}
      <div class="mt-6">
        <h2 class="text uppercase mb-4">
          Obsahuje události ({childrens.length})
        </h2>
      </div>
      <div>
        {#each childrens as child}
          <Event event={child} />
        {/each}
      </div>
    {/if}
  {/if}
</section>
