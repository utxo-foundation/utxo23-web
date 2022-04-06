<script context="module">
	export const prerender = true;
</script>

<script>
  import SvelteMarkdown from 'svelte-markdown';

	import { page } from '$app/stores';
  import { bundle } from '$lib/stores.js';
  import EventTypeLabel from '$lib/EventTypeLabel.svelte';
  import Avatar from '$lib/Avatar.svelte';

  $: e = $bundle ? $bundle.spec.events.find(ev => ev.id === $page.params.id) : null

  function speakersMap (arr) {
    if (!arr) return;
    return arr.map(sId => {
      return $bundle.spec.speakers.find(sp => sp.id === sId)
    })
  }

  function trackRender (trackId) {
    const track = $bundle.spec.tracks.find(t => t.id === trackId)
    return track.shortname || track.name
  }

</script>

<section class="relative mx-auto py-10 px-6 max-w-6xl mb-10 text-blue-web">
  {#if $bundle}
    <div class="mb-4 flex flex-wrap gap-4">
      <div><EventTypeLabel event={e} size="big" /></div>
      <div class="text-md my-auto">{trackRender(e.track)}</div>
      <div class="text-sm my-auto">{e.duration}m</div>
    </div>
    <h1 class="text-2xl font-bold">{e.name}</h1>
    {#if e.speakers && e.speakers.length > 0}
      <div class="mt-4 mb-2 flex flex-wrap gap-4">
        {#each speakersMap(e.speakers) as s}
          <div class="flex gap-1.5">
            <Avatar speaker={s} size='semi-small' />
            <div class="m-auto"><a href="/lide/{s.id}" class="text-xl">{s.name}</a></div>
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</section>
