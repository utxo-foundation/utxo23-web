<script>
  export let event;
  export let hideDate = false;

  import Avatar from "$lib/Avatar.svelte";
  import Tooltip from "$lib/Tooltip.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import EventTypeLabel from "$lib/EventTypeLabel.svelte";
  import EventSchedule from "$lib/EventSchedule.svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { calcDuration, addFavorite } from "$lib/events.js";

  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };

  export let data;

  $: e = event;
  $: duration = calcDuration(e, data.bundle);
  $: spoiler = makeSpoiler(e);
  $: schedule = data.bundle && data.bundle.spec.schedule
    ? data.bundle.spec.schedule.find((s) => s.event === e.id)
    : null;

  function makeSpoiler(_e) {
    if (!_e.description) {
      return {};
    }
    const parts = _e.description.split("\n\n");
    const stripped = parts.length > 1;
    return {
      md: parts[0], // + ` ([Zobrazit celý popis](/udalosti?id=${_e.id}))`,
      stripped,
    };
  }

  function speakersMap(arr) {
    if (!arr) return;
    return arr.map((sId) => {
      return data.bundle.spec.speakers.find((sp) => sp.id === sId);
    });
  }

  function trackRender(trackId) {
    const track = data.bundle.spec.tracks.find((t) => t.id === trackId);
    return track.shortname || track.name;
  }

  function getChildrens(e) {
    return data.bundle.spec.events.filter((i) => i.parent === e.id);
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
          <div class="m-auto">
            <a href="/lide?id={s.id}"
              >{s.name}{#if s.nickname}&nbsp;({s.nickname}){/if}</a
            >
          </div>
        </div>
      {/each}
    </div>
  {/if}
  <div class="">
    <div class="text-sm flex flex-wrap gap-3 flex-1">
      <div class="opacity-80"><EventTypeLabel event={e} /></div>
      {#if schedule && !hideDate}
        <EventSchedule item={schedule} {e} bundle={data.bundle} />
      {/if}
      {#if duration}<div class="text-xs my-auto">{duration}m</div>{/if}
      {#if e.track}
        <div class="text-sm my-auto">
          <a href="/program?track={e.track}">{trackRender(e.track)}</a>
        </div>
      {/if}
      {#if e.tags}
        <div
          class="flex flex-wrap text-xs gap-1 my-auto text-blue-web/60 whitespace-nowrap"
        >
          {#each e.tags as tag}
            <div><a href="/program?tag={tag}">#{tag}</a></div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  {#if e.description}
    <div class="mt-2 overflow-hidden">
      <SvelteMarkdown source={spoiler.md} {renderers} />
      {#if spoiler.stripped}
        <div class="text-sm text-blue-web/60">
          (<a href="/udalosti?id={e.id}">Zobrazit celý popis</a>)
        </div>
      {/if}
    </div>
  {/if}
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
                    <div>
                      <a href="/lide?id={s.id}"
                        >{s.name}{#if s.nickname}&nbsp;({s.nickname}){/if}</a
                      >
                    </div>
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
