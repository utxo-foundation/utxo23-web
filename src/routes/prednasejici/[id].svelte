<script context="module">
	export const prerender = true;
</script>

<script>
  import SvelteMarkdown from 'svelte-markdown';

	import { page } from '$app/stores';
  import { bundle } from '$lib/stores.js';
  import Avatar from '$lib/Avatar.svelte';

  $: s = $bundle ? $bundle.spec.speakers.find(s => s.id === $page.params.id) : null

  function trackRender (trackId) {
    const track = $bundle.spec.tracks.find(t => t.id === trackId)
    return track.shortname || track.name
  }

</script>

<section class="relative mx-auto py-10 px-6 max-w-6xl mb-10 text-blue-web">
  {#if $bundle}
    <div class="sm:flex gap-10 mt-4">
      <div><Avatar speaker={s} size="big" /></div>
      <div class="mt-4">
        <h1 class="uppercase text-2xl font-bold">{s.name}</h1>
        {#if s.bio}
          <div class="mt-4 text-blue-web italic"><SvelteMarkdown source={s.bio} /></div>
        {/if}
        {#if s.orgs}
          <div class="mt-2 text-blue-web links"><SvelteMarkdown source={s.orgs} /></div>
        {/if}
        <div class="mt-4">Sekce: {s.tracks.map(t => trackRender(t)).join(', ')}</div>
        {#if s.twitter}
          <div class="mt-2">Twitter: <a href="https://twitter.com/{s.twitter}" target="_blank">@{s.twitter}</a></div>
        {/if}
        {#if s.web && s.web.url}
          <div class="mt-2">Web: <a href="{s.web.url}" target="_blank">{s.web.name || s.web.url}</a></div>
        {/if}
      </div>
    </div>
  {/if}
</section>
