<script>
  export let event;

  const e = event;

  import Avatar from '$lib/Avatar.svelte';
  import EventTypeLabel from '$lib/EventTypeLabel.svelte';

  import { bundle, userData } from '$lib/stores.js';

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

  function getParents (e) {
    return $bundle.spec.events.filter(i => i.parent === e.id)
  }

  function handleFavorite (el) {
    const t = el.target.getAttribute('utxo-event-id')
    userData.update(data => {
      const fe = data.favoriteEvents
      let output = null
      if (fe.includes(t)) {
        output = Object.assign($userData, { favoriteEvents: fe.filter(f => f !== t) } )
      } else {
        fe.push(t)
        output = Object.assign($userData, { favoriteEvents: fe })
      }
      //localStorage.setItem('userData', JSON.stringify(output))
      return output
    })
  }
</script>


<div class="transition-all mb-4 border px-3 py-2 rounded-md shadow {$userData.favoriteEvents.includes(e.id) ? 'bg-yellow-100' : '' }" >
  <div class="float-right"><i class="fa-star {$userData.favoriteEvents.includes(e.id) ? 'fa-solid' : 'fa-regular'} cursor-pointer" utxo-event-id="{e.id}" on:click={handleFavorite}></i></div>
  <div class="text-lg font-semibold"><a href="/udalosti/{e.id}">{e.name}</a></div>
  {#if e.speakers && e.speakers.length > 0}
    <div class="mt-1 mb-2 flex flex-wrap gap-2">
      {#each speakersMap(e.speakers) as s}
        <div class="flex gap-1.5">
          <Avatar speaker={s} size='extra-small' />
          <div class="m-auto"><a href="/lide?id={s.id}">{s.name}</a></div>
        </div>
      {/each}
    </div>
  {/if}
  <div class="mt-2 text-sm flex flex-wrap gap-2">
    <div><EventTypeLabel event={e} /></div>
    <div class="text-sm my-auto">{trackRender(e.track)}</div>
    <div class="text-xs my-auto">{e.duration}m</div>
  </div>
  {#if getParents(e).length > 0}
    <div class="mt-4 w-auto mb-2">
      <div class="flex flex-wrap gap-2" cellpadding="5">
        {#each getParents(e) as pe}
          <div class="border rounded py-1.5 px-2.5 bg-gray-100 text-sm">
            <div class="font-bold"><a href="/udalosti/{pe.id}">{pe.name}</a></div>
            <div class="mt-1">
              {#if pe.speakers.length === 0}
                <div>TBA</div>
              {:else}
                {#each speakersMap(pe.speakers) as s}
                  <div class="flex gap-1"><Avatar speaker={s} size='micro' /><div><a href="/lide?id={s.id}">{s.name}</a></div></div>
                {/each}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
