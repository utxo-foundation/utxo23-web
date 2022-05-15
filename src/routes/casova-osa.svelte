<script context="module">
  export const prerender = true;

</script>

<script>

  import { bundle, userData, loadInfo } from "$lib/stores.js";
  import { format, formatDistanceToNow, compareAsc } from "date-fns"

  let planNumber = 0
  $: plan = $bundle ? $bundle.spec['schedule-candidates'][planNumber] : null

  function filterDateStage (arr, date, stageId) {
    return arr
      .filter(i => i.date === date)
      .filter(i => i.stage === stageId)
  }

  function dateSlots (pl, dt, bundle) {
    let time = new Date(`${dt}T09:00`)
    const endTime = new Date(`${dt}T22:00`)
    const arr = []
    const rowspans = {}

    while (compareAsc(time, endTime) === -1) {
      const stages = {}
      for (const stage of bundle.spec.stages) {
        if (rowspans[stage.id] > 0) {
          stages[stage.id] = null
          rowspans[stage.id]--
          continue
        }

        const si = pl.schedule.find(pi => (new Date(pi.period.start).getTime() === new Date(time).getTime()) && pi.stage === stage.id)
        stages[stage.id] = si
        if (si) {
          const span = Math.floor((new Date(si.period.end).getTime() - new Date(si.period.start).getTime())/(1000 * 60) / 30)
          si.span = span
          if (span > 1) {
            rowspans[stage.id] = span - 1
          }
        }
      }
      arr.push({ title: format(time, 'HH:mm'), stages })
      time = new Date(time.getTime() + (30 * 60 * 1000))
    }
    return arr
  }

  function showSpeakers (bundle, event) {
    return event.speakers.map(sp => {
      return bundle.spec.speakers.find(s => s.id === sp).name
    }).join(', ')
  }

  function findEvent (bundle, eventId) {
    const ev = bundle.spec.events.find(ev => ev.id === eventId)
    if (!ev) {
      return null
    }
    switch (ev.type) {
      case 'panel':
        ev.color = 'bg-orange-500/20'
        break
      case 'talk':
        ev.color = 'bg-custom-green/20'
        break
      case 'workshop':
        ev.color = 'bg-custom-blue/20'
        break
      case 'campfire':
        ev.color = 'bg-purple-500/20'
        break
      case 'lightning-series':
        ev.color = 'bg-yellow-400/20'
        break
      case 'other':
        break
      default:
        ev.color = 'bg-gray-100'
    }
    return ev
  }

</script>

<svelte:head>
  <title>Časová osa | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Časová osa</h1>
  {#if $bundle}
    <div class=""> 
    {#each $bundle.spec['schedule-candidates'] as p, i}
      <div>
        <a href="#" class="hover:underline" on:click={() => planNumber = i}>Plán {i}</a>
        <span class="text-sm">[{[ 'score', 'themeCrossing', 'tagsCrossing' ].map(key => { return `${key}=${Math.round(p.metrics[key]*1000)/1000}` }).join(', ')}]</span>
      </div>
    {/each}
    </div>
  {/if}
  <div class="mt-4">Current plan: {planNumber}</div>
</section>
<section class="relative mx-auto pb-6 sm:pb-10 px-6 text-blue-web overflow-scroll">
  {#if $bundle}
    {#each $bundle.dates as date}
      <div class="mt-4">
        <h2 class="uppercase text-xl font-bold">{date}</h2>
        <table width="100%" class="table">
          <thead>
            <tr>
              <th></th>
              {#each $bundle.spec.stages as stage}
                <th>{stage.id}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each dateSlots(plan, date, $bundle) as ds}
            <tr>
              <th valign="top" class="pr-2 pt-1 text-sm" height="70">{ds.title}</th>
              {#each $bundle.spec.stages as stage}
                {#if ds.stages[stage.id] === undefined}
                  <td class="bg-gray-200/70"></td>
                {:else if ds.stages[stage.id] !== null}
                  {#each [[ds.stages[stage.id], findEvent($bundle, ds.stages[stage.id].event)]] as [si, event]}
                    <td class="text-sm h-full {event.color} border border-blue-web/50" valign="top" rowspan={ds.stages[stage.id].span}>
                      <div class="px-2 py-1 mb-1 mt-1">
                        <div class="text-xs">{format(new Date(si.period.start), 'HH:mm')}-{format(new Date(si.period.end), 'HH:mm')} [{event.track}]</div>
                        <div class="font-semibold mt-1"><a href="/udalosti?id={event.id}">{event.name}</a></div>
                        <div class="text-xs mt-1">
                          {showSpeakers($bundle, event)}
                        </div>
                      </div>
                    </td>
                  {/each}
                {/if}
              {/each}
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/each}
  {:else}
    Načítám ..
  {/if}
</section>
