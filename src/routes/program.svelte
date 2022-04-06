<script context="module">
	export const prerender = true;
</script>

<script>
  import { bundle, userData } from '$lib/stores.js';
  import EventTypeLabel from '$lib/EventTypeLabel.svelte';
  import Avatar from '$lib/Avatar.svelte';

  const userDataLS = localStorage.getItem('userData')
  if (userDataLS) {
    userData.set(JSON.parse(userDataLS))
  }

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
      localStorage.setItem('userData', JSON.stringify(output))
      return output
    })
  }

</script>

<svelte:head>
  <title>Program | UTXO.22</title>
</svelte:head>


<section class="relative mx-auto py-10 px-6 max-w-6xl mb-10 text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Program</h1>
  <div class="mt-2 text-sm">Program stále připravujeme. Jeho konečná podoba bude zveřejněna par týdnů před konferencí.</div>

  <div class="mt-6">
    {#each $bundle.spec.events.filter(e => !e.parent) as e}
      <div class="transition-all mb-4 border px-3 py-2 rounded-md shadow {$userData.favoriteEvents.includes(e.id) ? 'bg-yellow-100' : '' }">
        <div class="float-right"><i class="fa-star {$userData.favoriteEvents.includes(e.id) ? 'fa-solid' : 'fa-regular'} cursor-pointer" utxo-event-id="{e.id}" on:click={handleFavorite}></i></div>
        <div class="text-lg font-semibold">{e.name}</div>
        {#if e.speakers && e.speakers.length > 0}
          <div class="mt-1 mb-2 flex flex-wrap gap-2">
            {#each speakersMap(e.speakers) as s}
              <div class="flex gap-1.5">
                <Avatar speaker={s} size='extra-small' />
                <div class="m-auto">{s.name}</div>
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
          <div class="mt-4 w-auto">
            <div class="flex flex-wrap gap-2" cellpadding="5">
              {#each getParents(e) as pe}
                <div class="mb-2 border rounded py-1.5 px-2.5 bg-gray-100 text-sm">
                  <div class="font-bold">{pe.name}</div>
                  <div class="mt-1">
                    {#if pe.speakers.length === 0}
                      <div>TBA</div>
                    {:else}
                      {#each speakersMap(pe.speakers) as s}
                        <div class="flex gap-1"><Avatar speaker={s} size='micro' /><div>{s.name}</div></div>
                      {/each}
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
