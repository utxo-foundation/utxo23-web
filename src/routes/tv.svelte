<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { format, formatDistanceToNow } from "date-fns";
  import EventTypeLabel from "$lib/EventTypeLabel.svelte";
  import Avatar from "$lib/Avatar.svelte";
  import YouTube from 'svelte-youtube';
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  const renderers = { link: Link };

  const stageStatus = {}
  let events = []
  let cachedBundle = []

  bundle.subscribe(_bundle => {
    events = _bundle.spec['schedule-candidates'][0].schedule
    cachedBundle = _bundle
    genStatus(cachedBundle)
  })

  let interval = null
  onMount(() => {

    interval = setInterval(() => {
      genStatus(cachedBundle)
    }, 5000)
  })
  onDestroy(() => {
    clearInterval(interval)
  })

  function findSpeaker (sp, _bundle) {
    return _bundle.spec.speakers.find(s => s.id === sp)
  }

  function extendEvents (arr, _bundle) {
    for (const ev of arr) {
      ev._event = _bundle.spec.events.find(e => e.id === ev.event)
    }
    return arr
  }

  function genStatus(_bundle) {
    const now = new Date(`2022-06-04T${format(new Date(), 'HH:mm')}`)

    let globalNextEvents = events.filter(ev => {
      return new Date(ev.period.end).getTime() > now.getTime()
    })

    const stages = _bundle.spec.stages
    for (const stage of stages.filter(s => s.livestream)) {
      let nextEvents = [...globalNextEvents.filter(e => e.stage === stage.id)]
      let current = null
      if (new Date(nextEvents[0].period.start).getTime() <= now.getTime()) {
        current = nextEvents[0]
        nextEvents = nextEvents.slice(1)
      }
      stageStatus[stage.id] = {
        current: current ? extendEvents([current], _bundle)[0] : null,
        next: extendEvents(nextEvents.slice(0,2), _bundle)
      }
    }
    console.log(stageStatus)
  }

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
</script>

<svelte:head>
  <title>UTXO.TV</title>
</svelte:head>

<div class="w-full h-full bg-blue-web-bg/90">
  <section class="relative mx-auto py-6 sm:py-10 px-6 text-white">
    {#if $bundle}
      {#each $bundle.spec.stages.filter(s => s.livestream) as stage, i}
        <div class="mb-8 bg-blue-web-bg/90 p-4 rounded-lg">
          <h1 class="uppercase text-2xl font-bold">#{i+1} | {stage.name}</h1>
          <div class="flex gap-6 mt-4 flex-wrap xl:flex-nowrap">
            <div>
              <YouTube videoId="bqiZ2xih6Jk" class="bg-blue-web-bg" />
            </div>
            <div class="pr-2">
              {#each [stageStatus[stage.id]] as ss}
                <div>
                  {#if ss.current}
                    <div class="uppercase text-xs mb-2 font-semibold flex gap-2"><div class="my-auto">Právě probíhá</div> <EventTypeLabel event={ss.current._event} black={true} /></div>
                    <div class="text-xl"><span class="text-white/70">{format(new Date(ss.current.period.start), 'HH:mm')}-{format(new Date(ss.current.period.end), 'HH:mm')}</span> <a href="/udalosti?id={ss.current.event}" class="hover:underline">{ss.current._event.name}</a></div>
                    <div class="flex flex-wrap mt-2 gap-3">
                      {#each ss.current._event.speakers.map(sp => findSpeaker(sp, $bundle)) as speaker}
                        <div class="flex gap-2"><Avatar speaker={speaker} size="extra-small" /><div><a href="/lide?id={speaker.id}" class="hover:underline">{speaker.name} {#if speaker.nickname}({speaker.nickname}){/if}</a></div></div>
                      {/each}
                    </div>
                    {#if ss.current._event.description}
                      {#each [makeSpoiler(ss.current._event)] as spoiler} 
                        <div class="text-sm mt-2 text-white/80">
                          <SvelteMarkdown source={spoiler.md} {renderers} />
                          {#if spoiler.stripped}
                            <div class="text-sm text-white/30">
                              (<a href="/udalosti?id={ss.current.event}">Zobrazit celý popis</a>)
                            </div>
                          {/if}
                        </div>
                      {/each}
                    {/if}
                    <div class="text-sm mt-3 text-white/50">{@html ss.current._event.tags.map(t => `<a href="/seznam-udalosti?tag=${t}" class="hover:underline">#${t}</a>`).join(' ')}</div>
                  {:else}
                    <div class="text-xl">☕ Přestávka</div>
                  {/if}
                </div>
              {/each}
              <div class="uppercase text-xs mb-2 font-semibold mt-6">Následuje</div>
              <div class="text-sm">
                {#each stageStatus[stage.id].next as ne}
                  <div><span class="text-white/70">{format(new Date(ne.period.start), 'HH:mm')}-{format(new Date(ne.period.end), 'HH:mm')}</span> <a href="/udalosti?id={ne.event}" class="hover:underline">{ne._event.name}</a></div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    {:else}
      Načítám ...
    {/if}
  </section>
</div>
