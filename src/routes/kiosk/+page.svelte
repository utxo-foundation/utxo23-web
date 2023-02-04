<script>
  import { page } from "$app/stores";
  import { onDestroy } from "svelte";
  import { bundle } from "$lib/stores";
  import { genStatus } from '$lib/schedule.js';
  import { formatCET } from "$lib/utils.js";
  import { cs } from "date-fns/locale/index.js";

  const screens = [
    { type: 'main' },
    { type: 'program' },
  ]

  let pos = 0
  let stageStatus = {}

  $: stageId = getParam($page.url.search, 's')
  $: stage = stageId && $bundle ? $bundle.spec.stages.find(s => s.id === stageId) : null
  $: ss = stageId ? stageStatus[stageId] : null
  
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


{#if $bundle && stage}
  <div class="relative w-screen h-screen bg-[url('/img/bg-header.jpg')] bg-cover text-white/50 text-xl">
  {#each screens as sc}
    <div class="absolute top-0 uppercase text-md py-5 px-5">{stage.name}</div>
    <div class="absolute top-0 right-0 uppercase text-md py-5 px-5">{time}</div>
    <div class="absolute top-0 left-0 w-full h-full flex text-white text-xl transition-all duration-1000 {sc.type === screens[pos].type ? 'opacity-100' : 'opacity-0'}">
      <div class="absolute bottom-0 right-0 uppercase text-md py-5 px-5 w-64 h-36 bg-blue-web">
        <div></div>
      </div>
      {#if sc.type === 'main'}
        <div class="text-center m-auto">
          <div class="mb-10">Obrazovka I.</div>
          <div class="mb-10 text-4xl">{stage.name}</div>
          <img src="/img/logo-white.svg" class="w-100" />
          <div class="mt-10">Zde budou sponzoři, partneři, atp...</div>
        </div>
      {/if}
      {#if sc.type === 'program'}
        <div class="text-center m-auto">
          <div class="mb-10">Obrazovka II.</div>
          <img src="/img/utxo-tv.svg" class="w-32" />
          <div class="mt-10">
            {#if ss.current}
              <div>{ss.current.event}</div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  {/each}
  </div>
{/if}
