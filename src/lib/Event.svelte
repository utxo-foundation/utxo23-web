<script>
  export let event;

  import Avatar from "$lib/Avatar.svelte";
  import Tooltip from "$lib/Tooltip.svelte";
  import EventTypeLabel from "$lib/EventTypeLabel.svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { calcDuration, addFavorite } from "$lib/events.js";

  $: e = event;
  $: duration = calcDuration(e, $bundle);

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

  function getChildrens(e) {
    return $bundle.spec.events.filter((i) => i.parent === e.id);
  }
</script>

<div
  class="transition-all mb-4 border px-3 py-2 rounded-md shadow {$userData.favoriteEvents.includes(
    e.id
  )
    ? 'bg-yellow-100'
    : ''}"
>
  <div class="float-right">
    <i
      class="fa-star {$userData.favoriteEvents.includes(e.id)
        ? 'fa-solid'
        : 'fa-regular'} cursor-pointer"
      on:click={() => addFavorite(e.id, userData)}
    />
  </div>
  <div class="text-lg font-semibold">
    <a href="/udalosti?id={e.id}">{e.name}</a>
  </div>
  {#if e.speakers && e.speakers.length > 0}
    <div class="mt-1 mb-2 flex flex-wrap gap-2">
      {#each speakersMap(e.speakers) as s}
        <div class="flex gap-1.5">
          <Avatar speaker={s} size="extra-small" />
          <div class="m-auto"><a href="/lide?id={s.id}">{s.name}</a></div>
        </div>
      {/each}
    </div>
  {/if}
  <div class="">
    <div class="text-sm flex flex-wrap gap-3 flex-1">
      <div><EventTypeLabel event={e} /></div>
      {#if duration}<div class="text-xs my-auto">{duration}m</div>{/if}
      {#if e.track}
        <div class="text-sm my-auto"><a href="/program?track={e.track}">{trackRender(e.track)}</a></div>
      {/if}
      {#if e.tags}
      <div class="flex text-xs gap-1 my-auto text-blue-web/60">
        {#each e.tags as tag}
          <div><a href="/program?tag={tag}">#{tag}</a></div>
        {/each}
      </div>
      {/if}
    </div>
  </div>
  {#if getChildrens(e).length > 0}
    <div class="mt-4 w-auto mb-2">
      <div class="flex flex-wrap gap-2" cellpadding="5">
        {#each getChildrens(e) as pe}
          <div
            class="border rounded py-1.5 px-2.5 text-sm transition-all {$userData.favoriteEvents.includes(
              pe.id
            )
              ? 'bg-yellow-100'
              : 'bg-gray-100'}"
          >
            <div class="font-bold">
              <a href="/udalosti?id={pe.id}">{pe.name}</a>
              <i
                class="fa-star {$userData.favoriteEvents.includes(pe.id)
                  ? 'fa-solid'
                  : 'fa-regular'} cursor-pointer"
                on:click={() => addFavorite(pe.id, userData)}
              />
            </div>
            <div class="mt-1">
              {#if pe.speakers.length === 0}
                <div>TBA</div>
              {:else}
                {#each speakersMap(pe.speakers) as s}
                  <div class="flex gap-1">
                    <Avatar speaker={s} size="micro" />
                    <div><a href="/lide?id={s.id}">{s.name}</a></div>
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
