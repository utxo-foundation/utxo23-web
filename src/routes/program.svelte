<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { format, compareAsc, compareDesc } from "date-fns";
  import { bundle, userData, loadInfo, schedulePref } from "$lib/stores.js";
  import { cs } from "date-fns/locale/index.js";
  import { parsePeriod } from '$lib/periods.js';
  import SvelteMarkdown from "svelte-markdown";
  const renderers = { link: Link };
  import Link from "$lib/Link.svelte";

  let scheduleTimesArr = null
  let stagesArr = null

  let planNumber = 0;
  $: plan = $bundle ? $bundle.spec["schedule-candidates"][planNumber] : null;

  const params = {
    time: { key: 'time' },
    stage: { key: 'stage' },
    desc: { key: 'showDescriptions', type: 'boolean' }
  }


  let subs = []

  subs.push(page.subscribe(() => {

    schedulePref.update(sp => {
      for (const upk of Object.keys(params)) {
        const up = params[upk]
        const _sp = $page.url.searchParams.get(upk)
        if (up.type === 'boolean') {
          if (_sp !== undefined) {
            sp[up.key] = Boolean(_sp)
          }
        } else {
          sp[up.key] = _sp ? _sp : 'all'
        }
      }
      return sp
    })
  }))

  onMount(async () => {
    
    const bsub = bundle.subscribe((bundle) => {

      scheduleTimesArr = scheduleTimes(bundle)
      stagesArr = bundle.spec.stages
      const pref = {};
      //pref.stages = bundle.spec.stages.map((s) => s.id);
      //pref.tracks = bundle.spec.tracks.map((s) => s.id);
      //pref.times = scheduleTimesArr.map((s) => s.id);
      //schedulePref.set(pref);
    });
    subs.push(bsub)

    const pref = {}
    let schedulePrefInicialized = null

    const spsub = schedulePref.subscribe((sp) => {
      const updates = []
      updates.push([ 'time', sp.time === 'all' ? undefined : sp.time ])
      updates.push([ 'stage', sp.stage === 'all' ? undefined : sp.stage ])
      updates.push([ 'desc', sp.showDescriptions === null || sp.showDescriptions === false || sp.showDescriptions === undefined ? undefined : true ])

      let target = '?'
      if (updates.length > 0) {
        for (const up of updates) {
          if (up[1] === undefined && $page.url.searchParams.get(up[0]) !== undefined) {
            $page.url.searchParams.delete(up[0])
          } else {
            $page.url.searchParams.set(up[0], up[1])
          }
        }
        target = `?${$page.url.searchParams.toString()}`
      }
      goto(target);

      return false
    })
    subs.push(spsub)
  });

  onDestroy(() => {
    for (const unsub of subs) {
      unsub()
    }
  })

  function filterDateStage(arr, date, stageId) {
    return arr
      .filter((i) => i.date === date)
      .filter((i) => i.stage === stageId);
  }

  function findSegment(bundle, stage, period) {
    for (const st of stage.times) {
      const p = parsePeriod(bundle, st);
      if (
        compareAsc(period.start, p.period.end) !== -1 &&
        compareDesc(period.end, p.period.start) !== 1
      ) {
        continue;
      }
      return p;
    }

    return null;
  }

  function dateSlots(pl, period, bundle, schedulePref = null) {
    let time = period.start;
    const endTime = period.end;
    const arr = [];
    const rowspans = {};

    while (compareAsc(time, endTime) === -1) {
      const stages = {};
      for (const stage of bundle.spec.stages) {
        if (rowspans[stage.id] > 0) {
          stages[stage.id] = null;
          rowspans[stage.id]--;
          continue;
        }
        if (schedulePref && (schedulePref.stage !== stage.id && schedulePref.stage !== 'all')) {
          continue;
        }
        let si = pl.schedule.find(
          (pi) =>
            new Date(pi.period.start).getTime() === new Date(time).getTime() &&
            pi.stage === stage.id
        );
        stages[stage.id] = si;

        if (si) {
          const span = Math.floor(
            (new Date(si.period.end).getTime() -
              new Date(si.period.start).getTime()) /
              (1000 * 60) /
              30
          );
          si.span = span;
          if (span > 1) {
            rowspans[stage.id] = span - 1;
          }
        }
      }
      arr.push({ title: format(time, "HH:mm"), stages });
      time = new Date(time.getTime() + 30 * 60 * 1000);
    }
    return arr;
  }

  function showSpeakers(bundle, ev) {
    return ev.speakers
      .map((sId) => {
        const sp = bundle.spec.speakers.find((s) => s.id === sId);
        return sp.name + (sp.nickname ? ` (${sp.nickname})` : "");
      })
      .join(", ");
  }

  function showEventDetail(bundle, ev) {
    if (ev.type === "lightning-series") {
      return bundle.spec.events
        .filter((e) => e.parent === ev.id)
        .map(
          (e) =>
            `<span class="font-semibold"><a href="/udalosti?id=${e.id}">${
              e.name
            }</a></span> - ${showSpeakers(bundle, e) || "TBD"}`
        )
        .join("<br>");
    }
    return showSpeakers(bundle, ev);
  }

  function scheduleTimes(bundle, filter = false) {
    let arr = bundle.scheduleTimes.map((item, i) => {
      const out = parsePeriod(bundle, item);
      out.id = String(i)
      return out
    });

    if (filter) {
      arr = arr.filter(st => st.id === filter || filter === 'all')
    }

    return arr
  }

  function eventTrackClasses(bundle, ev, selectedTracks) {
    /*if (!selectedTracks.includes(ev.track || "")) {
      return "opacity-20";
    }*/
    return "border border-blue-web/50";
  }

   function isPeriodOverlap(x, y) {
     const xstart = new Date(x.start)
     const xend = new Date(x.end)
     const ystart = new Date(y.start)
     const yend = new Date(y.end)
     return (xstart.getTime() < yend.getTime() &&
       xend.getTime() > ystart.getTime());
  }

  function activeStages (bundle, stages, st, pl) {
    return stages.filter(stage => {
      return Boolean(pl.schedule.filter(i => i.stage === stage.id).find(i => isPeriodOverlap(st.period, i.period))

      )
    })
  }

  function allScheduleTimes (bundle) {
    return [
      { id: 'all', name: 'Všechny dny' },
      ...scheduleTimes(bundle)
    ]
  }

  function allStages (bundle) {
    return [
      { id: 'all', name: 'Všechny sály' },
      ...bundle.spec.stages
    ]
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

  function findEvent(bundle, eventId) {
    const ev = bundle.spec.events.find((ev) => ev.id === eventId);
    if (!ev) {
      console.log(`Event not found: ${eventId}`);
      return null;
    }
    switch (ev.type) {
      case "panel":
        ev.color = "bg-orange-400/20 hover:bg-orange-400/40";
        break;
      case "talk":
        ev.color = "bg-custom-green/20 hover:bg-custom-green/40";
        break;
      case "workshop":
        ev.color = "bg-custom-blue/20 hover:bg-custom-blue/40";
        break;
      case "campfire":
        ev.color = "bg-purple-400/20 hover:bg-purple-400/40";
        break;
      case "lightning-series":
        ev.color = "bg-yellow-400/20 hover:bg-yellow-400/40";
        break;
      default:
        ev.color = "bg-rose-400/20 hover:bg-rose-400/40";
    }
    return ev;
  }
</script>

<svelte:head>
  <title>Program | UTXO.22</title>
</svelte:head>

<section
  class="relative mx-auto pt-6 sm:pt-10 pb-6 px-6 max-w-6xl text-blue-web"
>
  <div class="mb-6">
    {#if $bundle}
      <div class="font-semibold uppercase mb-1">Plán (řešení)</div>
      <div class="flex flex-wrap gap-1">
        <select
          class="border border-blue-web rounded-md p-1.5 text-blue-web bg-white"
          bind:value={planNumber}
        >
          {#each $bundle.spec["schedule-candidates"] as p, i}
            <option value={i}
              >#{i} [{["score", "thc:themeCrossing", "tgc:tagsCrossing", "exd:exclusivityDev"]
                .map((key) => {
                  const [title, rkey] = key.split(":");
                  return `${title}:${
                    Math.round(p.metrics[rkey || title] * 1000) / 1000
                  }`;
                })
                .join(", ")}]</option
            >
          {/each}
        </select>
      </div>
    {/if}
  </div>
  <h1 class="uppercase text-2xl font-bold mb-2">Program</h1>
  <div class="mb-4">
    <a href="/seznam-udalosti" class="underline hover:no-underline">Seznam všech událostí</a>
  </div>
  <div>
    {#if $bundle}
      <div class="mb-4">
        <div class="flex gap-1 flex-wrap">
          <div class="font-semibold uppercase my-auto mx-3">Den</div>
          {#each allScheduleTimes($bundle) as st}
            <button class="{($schedulePref.time === st.id) ? 'bg-utxo-gradient text-white' : 'text-blue-web bg-blue-web-light hover:text-[#E16A61] hover:bg-[#E16A61]/20'} font-bold py-2 px-4 rounded-full"
                    on:click={() => $schedulePref.time = st.id}
              >{st.name}</button>
          {/each}
        </div>
      </div>
      <div class="mb-4">
        <div class="flex gap-1 flex-wrap">
          <div class="font-semibold uppercase my-auto mx-3">Sál</div>
          {#each allStages($bundle) as et}
            <button class="{($schedulePref.stage === et.id) ? 'bg-utxo-gradient text-white' : 'text-blue-web bg-blue-web-light hover:text-[#E16A61] hover:bg-[#E16A61]/20'} font-bold py-1.5 px-3 rounded-full text-sm"
                    on:click={() => $schedulePref.stage = et.id}
              >{et.name}</button>
            <!--div class="u-choose-div m-0.5">
              <label class="cursor-pointer"
                ><input
                  type="checkbox"
                  bind:group={$schedulePref.stages}
                  value={et.id}
                /></label
              >
              <span
                class="cursor-pointer"
                on:click={() => ($schedulePref.stages = [et.id])}
                >{et.name}</span
              >
            </div-->
          {/each}
        </div>
      </div>
      <div class="mb-4">
        <label><input type="checkbox" bind:checked={$schedulePref.showDescriptions} /> Zobrazit popisy</label>
      </div>

      <!--div class="mb-4">
        <div class="font-semibold uppercase mb-1">Kategorie</div>
        <div class="flex gap-2 flex-wrap">
          <div class="m-0.5">
            <a
              href="#"
              class="hover:underline"
              on:click={() =>
                ($schedulePref.tracks = $bundle.spec.tracks.map((s) => s.id))}
              >Všechny kategorie</a
            >
          </div>
          {#each $bundle.spec.tracks as et}
            <div class="u-choose-div m-0.5">
              <label class="cursor-pointer"
                ><input
                  type="checkbox"
                  bind:group={$schedulePref.tracks}
                  value={et.id}
                /></label
              >
              <span
                class="cursor-pointer"
                on:click={() => ($schedulePref.tracks = [et.id])}
              >
                {et.shortname || et.name}</span
              >
            </div>
          {/each}
        </div>
      </div-->
    {/if}
  </div>

</section>
<section class="relative mx-auto pb-6 sm:pb-10 px-0 text-blue-web">
  {#if $bundle}
    {#each scheduleTimes($bundle, $schedulePref.time) as st}
      <div class="max-w-6xl mx-auto px-6 mb-4">
        <h2 class="uppercase text-xl font-bold">
          {#if st.name}
            {st.name}
          {:else}
            {format(new Date(st.date), "iiii d.M.y", { locale: cs })}
          {/if}
        </h2>
      </div>
      <div class="relative">
        <div class="mt-4 mb-10 overflow-scroll sm:overflow-clip">
          <table width="100%" class="table table-auto xl:table-fixed relative">
            <thead class="">
              <tr>
                <th class="xl:w-16 top-0 sticky bg-white uppercase text-sm px-0.5 text-custom-blue">{format(new Date(st.date), "iiiiii", { locale: cs })}<br />{format(new Date(st.date), "d.M.")}</th>
                {#each activeStages($bundle, $bundle.spec.stages, st, plan) as stage}
                  {#if $schedulePref && ($schedulePref.stage === stage.id || $schedulePref.stage === 'all')}
                    <th class="text-md py-1.5 px-1 sticky top-0 bg-white align-bottom">
                        <div class="text-xs font-normal text-blue-web/60 mb-2.5">{stage.capacity.seat} <i class="fa-solid fa-chair"></i> + {stage.capacity.stand} <i class="fa-solid fa-person"></div>
                        <div>{stage.name}</div>
                    </th>
                  {/if}
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each dateSlots(plan, st.period, $bundle, $schedulePref) as ds}
                <tr class="bg-gray-100">
                  <th
                    valign="top"
                    class="w-auto pl-2 pr-2 pt-1 text-sm left-0 bg-white"
                    height="40">{ds.title}</th
                  >
                  {#each activeStages($bundle, $bundle.spec.stages, st, plan) as stage}
                    {#if $schedulePref && ($schedulePref.stage === stage.id || $schedulePref.stage === 'all')}
                      {#if ds.stages[stage.id] === undefined}
                        <td />
                      {:else if ds.stages[stage.id] !== null}
                        {#each [[ds.stages[stage.id], findEvent($bundle, ds.stages[stage.id].event)]] as [si, event]}
                          <td
                            class="text-sm h-full transition-all {event.color} {eventTrackClasses(
                              $bundle,
                              event,
                              $schedulePref.tracks
                            )}"
                            valign="top"
                            rowspan={ds.stages[stage.id].span}
                          >
                            <div class="px-2 py-1 mb-1 mt-1">
                              <div class="text-xs">
                                {format(
                                  new Date(si.period.start),
                                  "HH:mm"
                                )}-{format(new Date(si.period.end), "HH:mm")} <span class="text-blue-web/80">@{si.id}</span>
                                {#if event.track}[{#each [$bundle.spec.tracks.find((t) => t.id === event.track)] as track}{track.shortname ||
                                      track.name}{/each}]{/if}
                              </div>
                              <div class="font-semibold mt-1">
                                <a href="/udalosti?id={event.id}" class="hover:underline"
                                  >{event.name}</a
                                >
                              </div>
                              <div class="text-xs mt-1">
                                {@html showEventDetail($bundle, event)}
                              </div>
                              <div class="text-xs mt-2 text-blue-web/50">
                                {event.tags.map((t) => `#${t}`).join(", ")}
                              </div>
                              {#if event.description && $schedulePref.showDescriptions}
                                {#each [makeSpoiler(event)] as spoiler}
                                  <div class="mt-2 overflow-hidden text-sm text-blue-web/90">
                                    <SvelteMarkdown source={spoiler.md} {renderers} />
                                    {#if spoiler.stripped}
                                      <div class="text-xs text-blue-web/60">
                                        (<a href="/udalosti?id={event.id}">Zobrazit celý popis</a>)
                                      </div>
                                    {/if}
                                  </div>
                                {/each}
                              {/if}
                            </div>
                          </td>
                        {/each}
                      {/if}
                    {/if}
                  {/each}
                  <!--th valign="top" class="pl-2 pt-1 text-sm" height="70">{ds.title}</th-->
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/each}
  {:else}
    Načítám ..
  {/if}
</section>

<style>
</style>
