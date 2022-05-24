<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { format, compareAsc, compareDesc } from "date-fns";
  import { bundle, userData, loadInfo, schedulePref } from "$lib/stores.js";
  import { cs } from "date-fns/locale/index.js";

  let planNumber = 0;
  $: plan = $bundle ? $bundle.spec["schedule-candidates"][planNumber] : null;

  onMount(async () => {
    bundle.subscribe((bundle) => {
      const pref = {};
      pref.stages = bundle.spec.stages.map((s) => s.id);
      pref.tracks = bundle.spec.tracks.map((s) => s.id);
      schedulePref.set(pref);
    });
  });

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
        if (schedulePref && !schedulePref.stages.includes(stage.id)) {
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

  function parsePeriod(bundle, str) {
    const [dayNumber, times] = str.split("/");
    const [start, end] = times.split("-");
    const date = bundle.dates[dayNumber - 1];
    return {
      date,
      period: {
        start: new Date(`${date}T${start}`),
        end: new Date(`${date}T${end}`),
      },
    };
  }

  function scheduleTimes(bundle) {
    return bundle.scheduleTimes.map((item) => {
      return parsePeriod(bundle, item);
    });
  }

  function eventTrackClasses(bundle, ev, selectedTracks) {
    if (!selectedTracks.includes(ev.track || "")) {
      return "opacity-20";
    }
    return "border border-blue-web/50";
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
        ev.color = "bg-utxo-gradient text-white";
    }
    return ev;
  }
</script>

<svelte:head>
  <title>Časová osa | UTXO.22</title>
</svelte:head>

<section
  class="relative mx-auto pt-6 sm:pt-10 pb-6 px-6 max-w-6xl text-blue-web"
>
  <h1 class="uppercase text-2xl font-bold mb-6">Časová osa</h1>
  {#if $bundle}
    <div class="font-semibold uppercase mb-1">Plán (řešení)</div>
    <div class="flex flex-wrap gap-1">
      <select
        class="border border-blue-web rounded-md p-1.5 text-blue-web bg-white"
        bind:value={planNumber}
      >
        {#each $bundle.spec["schedule-candidates"] as p, i}
          <option value={i}
            >#{i} [{["score", "thc:themeCrossing", "tgc:tagsCrossing"]
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
</section>
<section class="relative mx-auto pb-6 sm:pb-10 px-0 text-blue-web">
  {#if $bundle}
    <div class="max-w-6xl mx-auto px-6 mb-10">
      <div class="">
        <div class="font-semibold uppercase mb-1">Sál / Místo</div>
        <div class="flex gap-1 flex-wrap">
          <div class="m-0.5">
            <a
              href="#"
              class="hover:underline"
              on:click={() =>
                ($schedulePref.stages = $bundle.spec.stages.map((s) => s.id))}
              >Všechny sály</a
            >
          </div>
          {#each $bundle.spec.stages as et}
            <div class="u-choose-div m-0.5">
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
            </div>
          {/each}
        </div>
      </div>
      <div class="mt-4">
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
      </div>
    </div>
    {#each scheduleTimes($bundle) as st}
      <div class="max-w-6xl mx-auto px-6 mb-4">
        <h2 class="uppercase text-xl font-bold">
          {format(new Date(st.date), "iiii d.M.y", { locale: cs })}
        </h2>
      </div>
      <div class="relative">
        <div class="mt-4 mb-10 overflow-scroll sm:overflow-clip">
          <table width="100%" class="table table-auto xl:table-fixed relative">
            <thead class="">
              <tr>
                <th class="xl:w-16" />
                {#each $bundle.spec.stages as stage}
                  {#if $schedulePref && $schedulePref.stages.includes(stage.id)}
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
                    class="w-auto pl-2 pr-2 pt-1 text-sm sticky left-0 bg-white"
                    height="110">{ds.title}</th
                  >
                  {#each $bundle.spec.stages as stage}
                    {#if $schedulePref && $schedulePref.stages.includes(stage.id)}
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
                                )}-{format(new Date(si.period.end), "HH:mm")}
                                {#if event.track}[{#each [$bundle.spec.tracks.find((t) => t.id === event.track)] as track}{track.shortname ||
                                      track.name}{/each}]{/if}
                              </div>
                              <div class="font-semibold mt-1">
                                <a href="/udalosti?id={event.id}"
                                  >{event.name}</a
                                >
                              </div>
                              <div class="text-xs mt-1">
                                {@html showEventDetail($bundle, event)}
                              </div>
                              <div class="text-xs mt-2 text-blue-web/50">
                                {event.tags.map((t) => `#${t}`).join(", ")}
                              </div>
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
