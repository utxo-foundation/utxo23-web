<script>
  import { page } from "$app/stores";
  import { onDestroy } from "svelte";
  import { bundle } from "$lib/stores";
  import { genStatus } from '$lib/schedule.js';
  import { formatCET } from "$lib/utils.js";
  import { cs } from "date-fns/locale/index.js";
  import Avatar from "$lib/Avatar.svelte";
  import { EventTypes } from "$lib/config.js"

  export let data;

  const screens = [
    { type: 'main' },
    { type: 'program' },
  ]

  let pos = 0
  let stageStatus = {}

  $: stageId = getParam($page.url.search, 's')
  $: stage = stageId && data.bundle ? data.bundle.spec.stages.find(s => s.id === stageId) : null
  $: ss = stageId ? stageStatus[stageId] : null

  $: scheduleId = getParam($page.url.search, 'id')
  $: eventId = getParam($page.url.search, 'event')
  $: si = data.bundle ? data.bundle.spec.schedule.find(i => i.id === scheduleId) : null
  $: event = si ? data.bundle.spec.events.find(e => e.id === si.event) : (eventId && data.bundle ? data.bundle.spec.events.find(e => e.id === eventId) : null)
 
  function getSpeakers (speakers) {
    return speakers.map(sId => {
      return data.bundle.spec.speakers.find(s => s.id === sId)
    })
  }
  
  let time = getTime()

  function getTime() {
    return formatCET(new Date(), 'iiiiii HH:mm:ss', { locale: cs })
  }

  const intMain = setInterval(() => {
    if (pos+1 > screens.length-1) {
      pos = 0
    } else {
      pos++
    }
    //console.log(pos)

  }, 2000)

  const intTime = setInterval(() => { time = getTime() }, 1000)

  bundle.subscribe((_bundle) => {
    genStatus(_bundle, stageStatus);
  });

  onDestroy(() => {
    clearInterval(intMain)
    clearInterval(intTime)
  })

  function getParam(search, param = 's') {
    return new URLSearchParams(search).get(param)
  }

</script>


{#if data.bundle && event}
  <div style="width: 1920px; height: 1080px;" class="relative bg-[url('/img/tv-bg.jpg')] text-white/50 text-xl" id="utxo-tv">
    <div class="absolute bottom-20 left-20">
      <img src="/img/logo.svg" style="width: 520px;" />
    </div>
    <div class="flex" style="height: 900px;">
      <div class="my-auto text-white text-8xl pl-20 pr-20">
        <div class="text-5xl mb-10 flex">
          <div class="inline-block px-4 py-3 rounded-xl text-black uppercase {EventTypes[event.type].color} w-auto">{EventTypes[event.type].text}</div>
        </div>
        <div class="font-semibold">{event.name}</div>
        <div class="text-6xl flex flex-wrap mt-12 gap-6">
          {#each getSpeakers(event.speakers) as speaker}
            <div class="flex {event.speakers.length === 1 ? 'text-8xl gap-10' : 'gap-4'}">
              <div class="m-auto">
                <Avatar speaker={speaker} size="custom" customSize={event.speakers.length === 1 ? 'w-32' : 'w-20'} />
              </div>
              <div class="m-auto">{speaker.name}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
