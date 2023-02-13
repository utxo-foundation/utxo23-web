<script>
  import { goto } from "$app/navigation";
  import Avatar from "$lib/Avatar.svelte";
  import Event from "$lib/Event.svelte";
  import { onMount, beforeUpdate } from "svelte";
  import { page } from "$app/stores";
  import { bundle } from "$lib/stores.js";
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };

  $: id = getId($page.url.search);
  $: s = $bundle ? $bundle.spec.speakers.find((s) => s.id === id) : null;
  $: events = s && $bundle.spec.events
    ? $bundle.spec.events.filter(
        (ev) => ev.speakers && ev.speakers.includes(s.id)
      )
    : [];

  function getId(search) {
    const searchParams = new URLSearchParams(search);
    const cid = searchParams.get("id");
    if (!$bundle.spec.speakers.find((s) => s.id === cid)) {
      goto("/");
    }
    return cid;
  }

  function trackRender(trackId) {
    if (!trackId) {
      return "n/a";
    }
    const track = $bundle.spec.tracks.find((t) => t.id === trackId);
    return track.shortname || track.name;
  }

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }
</script>

<svelte:head>
  <title>{s ? s.name : ""} | Lidé | {$bundle ? $bundle.name : "UTXO.22"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  {#if $bundle && s}
    <div class="mb-6 uppercase text-gray-500">
      <a href="javascript:history.back()"
        ><i class="fa-solid fa-arrow-left" />&nbsp;Zpět</a
      >
    </div>
    <div class="sm:flex gap-10 mt-4">
      <div><Avatar speaker={s} size="big" /></div>
      <div class="mt-4 sm:mt-0">
        <div class="mb-4 text-md uppercase">Přednášející</div>
        <h1 class="text-2xl font-bold">{s.name} {getFlagEmoji(s.country)}</h1>
        {#if s.nickname}
          <div class="mt-1">
            <span class="text-xs">aka</span>
            <span class="font-bold">{s.nickname}</span>
          </div>
        {/if}
        {#if s.bio}
          <div class="mt-4 text-blue-web italic">
            <SvelteMarkdown source={s.bio} {renderers} />
          </div>
        {/if}
        {#if s.orgs}
          <div class="mt-4 text-blue-web links">
            <SvelteMarkdown source={s.orgs} {renderers} />
          </div>
        {/if}
        {#if s.tracks && s.tracks.length > 0}
          <div class="mt-4">
            Sekce: {s.tracks.map((t) => trackRender(t)).join(", ")}
          </div>
        {/if}
        {#if s.twitter}
          <div class="mt-2">
            Twitter: <a
              href="https://twitter.com/{s.twitter}"
              target="_blank"
              class="font-bold">@{s.twitter}</a
            >
          </div>
        {/if}
        {#if s.linkedin}
          <div class="mt-2">
            LinkedIn: <a
              href="https://linkedin.com/in/{s.linkedin}"
              target="_blank"
              class="font-bold">@{s.linkedin}</a
            >
          </div>
        {/if}
        {#if s.web && s.web.url}
          <div class="mt-2">
            Web: <a href={s.web.url} target="_blank" class="font-bold"
              >{s.web.name || s.web.url.replace(/^https?:\/\//, "")}</a
            >
          </div>
        {/if}
      </div>
    </div>
    {#if s.desc}
      <div class="mt-6 utxo-markdown">
        <SvelteMarkdown source={s.desc} {renderers} />
      </div>
    {/if}
    <div class="mt-6">
      <h2 class="uppercase mb-4 text-md">Události ({events.length})</h2>
      <div>
        {#if events.length > 0}
          {#each events as e}
            <Event event={e} />
          {/each}
        {:else}
          Tento člověk zatím nemá v programu žádnou událost.
        {/if}
      </div>
    </div>
  {/if}
</section>
