<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { format, formatDistanceToNow } from "date-fns";
  import { parsePeriod } from '$lib/periods.js';
  import EventTypeLabel from "$lib/EventTypeLabel.svelte";
  import Avatar from "$lib/Avatar.svelte";
  import YouTube from '$lib/YouTube.svelte';
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
  const renderers = { link: Link };

  const YToptions = {
    playerVars: {
      autoplay: 0
    }
  }
  const stageStatus = {}
  const stagePlayers = {}
  let events = []
  let cachedBundle = []

  function typeColor (type) {
    let color = null
    switch (type) {
      case 'talk':
        color = 'bg-custom-green/70'
        break
      case 'panel':
        color = 'bg-orange-400/70'
        break
      case 'lightning-series':
        color = 'bg-yellow-400/70'
        break
      case 'other':
        color = 'bg-rose-400/70'
        break
    }
    return color
  }

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

  function startStream (stageId) {
    const player = stagePlayers[stageId]
    if (!player) {
      return null
    }
    player.playVideo()
  }

  function youtubePlayed (stageId) {
    for (const pi of Object.keys(stagePlayers)) {
      if (pi !== stageId) {
        console.log(`stopping player: ${pi}`)
        stagePlayers[pi].stopVideo()
      }
    }
  }

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
    const now = new Date(`2022-06-04T${format(new Date(), 'HH:mm:ss')}`)
    //const now = new Date()
    //const now = new Date(`2022-06-04T13:25`)

    let globalNextEvents = events.filter(ev => {
      return new Date(ev.period.end).getTime() > now.getTime()
    })

    const stages = _bundle.spec.stages
    for (const stage of stages.filter(s => s.livestream)) {
      let nextEvents = [...globalNextEvents.filter(e => e.stage === stage.id)]
      let current = null
      if (nextEvents.length > 0 && new Date(nextEvents[0].period.start).getTime() <= now.getTime()) {
        current = nextEvents[0]
        nextEvents = nextEvents.slice(1)
      }

      const allStreams = stage.streams.map(st => parsePeriod(_bundle, st))
      const nextStreams = allStreams.filter(s => s.period.end.getTime() >= now.getTime())
      if (nextStreams.length === 0) {
        nextStreams.push(allStreams[allStreams.length-1])
      }
      let currentPercentage = null
      if (current) {
        let duration = (new Date(current.period.end).getTime() - new Date(current.period.start).getTime()) / 1000
        let elapsed = Math.floor((now.getTime() - new Date(current.period.start).getTime()) / 1000)
        currentPercentage = elapsed/(duration/100)
      }

      const day = format(new Date(nextStreams[0].period.start), 'yyyy-MM-dd')
      let ctime = 0
      if (day === '2022-06-05') {
        ctime = 2
      }
      const scheduleLink = `/program?time=${ctime}&stage=${stage.id}&desc=true`

      stageStatus[stage.id] = {
        current: current ? extendEvents([current], _bundle)[0] : null,
        currentPercentage,
        next: extendEvents(nextEvents.slice(0,2), _bundle),
        stream: nextStreams[0],
        scheduleLink
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
  {#if $bundle}
    <div class="px-16 py-4">
      <div class="flex w-full justify-center lg:pt-6 text-white gap-4 flex-wrap lg:flex-nowrap">
        {#each $bundle.spec.stages.filter(s => s.livestream) as stage, i}
          <div class="w-full md:w-1/3 lg:w-1/4 px-6 py-4 bg-blue-web-bg/70 hover:bg-blue-web-bg rounded-2xl text-center cursor-pointer transition-all shadow-xl" use:scrollTo={stage.id} on:click={() => startStream(stage.id)}>
            <div class="uppercase font-semibold text-white text-lg">#{i+1} {stage.name}</div>
            <div class="mt-2 text-sm">
              {#each [stageStatus[stage.id]] as ss}
                {#if ss.current}
                  <div class="text-center mb-2"><span class="uppercase text-xs mr-2 text-white/70"></span> <EventTypeLabel event={ss.current._event} black={true} /></div>
                  <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-4 mb-2 transition-all">
                    <div class="{typeColor(ss.current._event.type)} h-2 rounded-full" style="width: {ss.currentPercentage}%"></div>
                  </div>
                  <div><span class="text-white/70">{format(new Date(ss.current.period.start), 'HH:mm')}-{format(new Date(ss.current.period.end), 'HH:mm')}</span> {ss.current._event.name}</div>
                {:else}
                  <span class="italic">☕ Přestávka {#if ss.next[0]}do {format(new Date(ss.next[0].period.start), 'HH:mm')}{/if}</span>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
    <section class="relative mx-auto lg:py-6 px-6 text-white">
      {#each $bundle.spec.stages.filter(s => s.livestream) as stage, i}
        <div use:scrollRef={stage.id} id="{stage.id}" class="mb-8 bg-blue-web-bg/90 p-4 rounded-lg shadow-xl">
          <div class="md:flex gap-4">
            <h1 class="uppercase text-2xl font-bold"><a use:scrollTo={stage.id} on:click={() => startStream(stage.id) }>Stream #{i+1} - {stage.name}</a></h1>
            <div class="my-auto mt-2 md:mt-0 text-sm flex-1 md:text-right"><a href={stageStatus[stage.id].scheduleLink} class="hover:underline" target="_blank">Program tohoto sálu ({stage.name})</a></div>
          </div>
          <div class="flex gap-6 mt-4 flex-wrap xl:flex-nowrap">
            <div>
              <YouTube videoId={stageStatus[stage.id].stream.name} class="bg-blue-web-bg/60" id="player-{stage.id}" options={Object.assign({}, YToptions)} bind:player={stagePlayers[stage.id]} on:play={() => youtubePlayed(stage.id)} />
            </div>
            <div class="pr-2 w-full">
              {#each [stageStatus[stage.id]] as ss}
                <div>
                  {#if ss.current}
                    <div class="uppercase text-xs mb-2 font-semibold flex flex-wrap gap-2">
                      <div class="my-auto whitespace-nowrap">Právě probíhá</div>
                      <div class="my-auto"><EventTypeLabel event={ss.current._event} black={true} /></div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3 mt-3">
                      <div class="{typeColor(ss.current._event.type)} h-3 rounded-full transition-all" style="width: {ss.currentPercentage}%"></div>
                    </div>
                    <div class="text-xl"><span class="text-white/70">{format(new Date(ss.current.period.start), 'HH:mm')}-{format(new Date(ss.current.period.end), 'HH:mm')}</span> <a href="/udalosti?id={ss.current.event}" class="hover:underline" target="_blank">{ss.current._event.name}</a></div>
                    <div class="flex flex-wrap mt-2 gap-3">
                      {#each ss.current._event.speakers.map(sp => findSpeaker(sp, $bundle)) as speaker}
                        <div class="flex gap-2"><Avatar speaker={speaker} size="extra-small" /><div><a href="/lide?id={speaker.id}" target="_blank" class="hover:underline">{speaker.name} {#if speaker.nickname}({speaker.nickname}){/if}</a></div></div>
                      {/each}
                    </div>
                    {#if ss.current._event.description}
                      {#each [makeSpoiler(ss.current._event)] as spoiler} 
                        <div class="text-sm mt-2 text-white/80">
                          <SvelteMarkdown source={spoiler.md} {renderers} />
                          {#if spoiler.stripped}
                            <div class="text-sm text-white/30">
                              (<a href="/udalosti?id={ss.current.event}" target="_blank">Zobrazit celý popis</a>)
                            </div>
                          {/if}
                        </div>
                      {/each}
                    {/if}
                    <div class="text-sm mt-3 text-white/50">{@html ss.current._event.tags.map(t => `<a href="/seznam-udalosti?tag=${t}" target="_blank" class="hover:underline">#${t}</a>`).join(' ')}</div>

                  {:else}
                    <div class="text-xl italic">☕ Přestávka {#if ss.next[0]}do {format(new Date(ss.next[0].period.start), 'HH:mm')}{/if}</div>
                  {/if}
                </div>
              {/each}
              <div class="uppercase text-xs mb-2 font-semibold mt-6"><a href="{stageStatus[stage.id].scheduleLink}" target="_blank">Následuje</div>
              <div class="text-sm 2xl:text-base">
                {#each stageStatus[stage.id].next as ne}
                  <div><span class="text-white/70">{format(new Date(ne.period.start), 'HH:mm')}-{format(new Date(ne.period.end), 'HH:mm')}</span> <a href="/udalosti?id={ne.event}" target="_blank" class="hover:underline">{ne._event.name}</a></div>
                {/each}
              </div>
              <div class="mt-2 text-xs"><a href="{stageStatus[stage.id].scheduleLink}" class="hover:underline" target="_blank">Zobrazit následující program v tomto sále</a></div>
            </div>
          </div>
        </div>
      {/each}
    </section>
  {:else}
    Načítám ...
  {/if}
</div>
