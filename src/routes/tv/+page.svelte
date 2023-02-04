<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { bundle, userData } from "$lib/stores.js";
  import { format, formatDistanceToNow } from "date-fns";
  import { formatCET } from "$lib/utils.js";
  import { genStatus } from '$lib/schedule.js';
  import EventTypeLabel from "$lib/EventTypeLabel.svelte";
  import TVScheduleDesc from "$lib/TVScheduleDesc.svelte";
  import Avatar from "$lib/Avatar.svelte";
  import YouTube from "$lib/YouTube.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  import { scrollTo, scrollRef, scrollTop } from "svelte-scrolling";
  const renderers = { link: Link };

  const maxSingleWidth = 700;

  let loading = true;
  let clientWidth = 0;
  let _clientWidth = 0;
  $: width =
    clientWidth <= maxSingleWidth ? clientWidth : Math.round(clientWidth / 2);

  $: YToptions = {
    height: (width / 16) * 9,
    width: width,
    playerVars: {
      autoplay: 0,
    },
  };

  afterUpdate(async () => {
    if (clientWidth > 0 && loading) {
      loading = false;
      _clientWidth = clientWidth;
    }
    if (clientWidth !== _clientWidth) {
      loading = true;
      setTimeout(() => {
        loading = false;
      }, 1000);
    }
  });

  const stageStatus = {};
  const stagePlayers = {};
  let events = [];
  let cachedBundle = [];

  function typeColor(type) {
    let color = null;
    switch (type) {
      case "talk":
        color = "bg-custom-green/70";
        break;
      case "panel":
        color = "bg-orange-400/70";
        break;
      case "lightning-series":
        color = "bg-yellow-400/70";
        break;
      case "other":
        color = "bg-rose-400/70";
        break;
    }
    return color;
  }

  bundle.subscribe((_bundle) => {
    events = _bundle.spec.schedule;
    cachedBundle = _bundle;
    genStatus(cachedBundle, stageStatus);
  });

  let interval = null;
  onMount(() => {
    interval = setInterval(() => {
      genStatus(cachedBundle, stageStatus);
    }, 5000);
  });
  onDestroy(() => {
    clearInterval(interval);
  });

  function startStream(stageId) {
    const player = stagePlayers[stageId];
    if (!player) {
      return null;
    }
    player.playVideo();
  }

  function youtubePlayed(stageId) {
    for (const pi of Object.keys(stagePlayers)) {
      if (pi !== stageId) {
        console.log(`stopping player: ${pi}`);
        stagePlayers[pi].stopVideo();
      }
    }
  }

  function findSpeaker(sp, _bundle) {
    return _bundle.spec.speakers.find((s) => s.id === sp);
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
      <div
        class="flex w-full justify-center lg:pt-6 text-white gap-4 flex-wrap lg:flex-nowrap"
      >
        {#each $bundle.spec.stages.filter((s) => s.livestream) as stage, i}
          <div
            class="w-full md:w-1/3 lg:w-1/4 px-6 py-4 bg-blue-web-bg/70 rounded-2xl text-center  transition-all shadow-xl"
          >
            <!--
            hover:bg-blue-web-bg 
            on:click={() => startStream(stage.id)}
            use:scrollTo={stage.id}
          -->
            <div class="uppercase font-semibold text-white text-lg">
              <i class="fa-solid fa-video mr-1 text-white/50" />
              {stage.name}
            </div>
            <div class="mt-2 text-sm">
              {#each [stageStatus[stage.id]] as ss}
                {#if ss.current}
                  <div class="text-center mb-2">
                    <span class="uppercase text-xs mr-2 text-white/70" />
                    <EventTypeLabel event={ss.current._event} black={true} />
                  </div>
                  <div
                    class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-4 mb-2 transition-all"
                  >
                    <div
                      class="{typeColor(
                        ss.current._event.type
                      )} h-2 rounded-full"
                      style="width: {ss.currentPercentage}%"
                    />
                  </div>
                  <div>
                    <span class="text-white/70"
                      >{formatCET(
                        new Date(ss.current.period.start),
                        "HH:mm"
                      )}-{formatCET(
                        new Date(ss.current.period.end),
                        "HH:mm"
                      )}</span
                    >
                    {ss.current._event.name}
                  </div>
                {:else}
                  <span class="italic">
                    <TVScheduleDesc {ss} />
                  </span>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
    <section class="relative mx-auto lg:py-6 px-2 lg:px-6 text-white">
      {#each $bundle.spec.stages.filter((s) => s.livestream) as stage, i}
        <div
          id={stage.id}
          class="mb-8 bg-blue-web-bg/90 p-4 rounded-lg shadow-xl"
        >
          <div class="md:flex gap-4">
            <h1 class="uppercase text-2xl font-bold">
              <a
                ><!-- use:scrollTo={stage.id} on:click={() => startStream(stage.id)}-->
                <i class="fa-solid fa-video mr-1 text-white/50" />
                {stage.name}</a
              >
            </h1>
            <div class="my-auto mt-2 md:mt-0 text-sm flex-1 md:text-right">
              <a
                href={stageStatus[stage.id].scheduleLink}
                class="hover:underline"
                target="_blank">Program tohoto sálu ({stage.name})</a
              >
            </div>
          </div>
          <div
            class="flex gap-6 mt-4 flex-wrap md:flex-nowrap"
            bind:clientWidth
          >
            {#if !loading}
              <div use:scrollRef={stage.id}>
                <YouTube
                  videoId={stageStatus[stage.id].stream.name}
                  class="bg-blue-web-bg/60"
                  id="player-{stage.id}"
                  options={Object.assign({}, YToptions)}
                  bind:player={stagePlayers[stage.id]}
                  on:play={() => youtubePlayed(stage.id)}
                />
              </div>
            {:else}
              <div
                class="w-full h-full bg-blue-web-bg/60 my-2 py-2 text-center my-auo italic text-white/50"
              >
                Načitám video..
              </div>
            {/if}
            <div class="pr-2 w-full">
              {#each [stageStatus[stage.id]] as ss}
                <div>
                  {#if ss.current}
                    <div
                      class="uppercase text-xs mb-2 font-semibold flex flex-wrap gap-2"
                    >
                      <div class="my-auto whitespace-nowrap">Právě probíhá</div>
                      <div class="my-auto">
                        <EventTypeLabel
                          event={ss.current._event}
                          black={true}
                        />
                      </div>
                    </div>
                    <div
                      class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3 mt-3"
                    >
                      <div
                        class="{typeColor(
                          ss.current._event.type
                        )} h-3 rounded-full transition-all"
                        style="width: {ss.currentPercentage}%"
                      />
                    </div>
                    <div class="text-xl">
                      <span class="text-white/70"
                        >{format(
                          new Date(ss.current.period.start),
                          "HH:mm"
                        )}-{format(
                          new Date(ss.current.period.end),
                          "HH:mm"
                        )}</span
                      >
                      <a
                        href="/udalosti?id={ss.current.event}"
                        class="hover:underline"
                        target="_blank">{ss.current._event.name}</a
                      >
                    </div>
                    <div class="flex flex-wrap mt-2 gap-3">
                      {#each ss.current._event.speakers.map( (sp) => findSpeaker(sp, $bundle) ) as speaker}
                        <div class="flex gap-2">
                          <Avatar {speaker} size="extra-small" />
                          <div>
                            <a
                              href="/lide?id={speaker.id}"
                              target="_blank"
                              class="hover:underline"
                              >{speaker.name}
                              {#if speaker.nickname}({speaker.nickname}){/if}</a
                            >
                          </div>
                        </div>
                      {/each}
                    </div>
                    {#if ss.current._event.description}
                      {#each [makeSpoiler(ss.current._event)] as spoiler}
                        <div class="text-sm mt-2 text-white/80">
                          <SvelteMarkdown source={spoiler.md} {renderers} />
                          {#if spoiler.stripped}
                            <div class="text-sm text-white/30">
                              (<a
                                href="/udalosti?id={ss.current.event}"
                                target="_blank">Zobrazit celý popis</a
                              >)
                            </div>
                          {/if}
                        </div>
                      {/each}
                    {/if}
                    <div class="text-sm mt-3 text-white/50">
                      {@html ss.current._event.tags
                        .map(
                          (t) =>
                            `<a href="/seznam-udalosti?tag=${t}" target="_blank" class="hover:underline">#${t}</a>`
                        )
                        .join(" ")}
                    </div>
                  {:else}
                    <div class="text-xl italic">
                      <TVScheduleDesc {ss} />
                    </div>
                  {/if}
                </div>
              {/each}
              <div class="uppercase text-xs mb-2 font-semibold mt-6">
                <a href={stageStatus[stage.id].scheduleLink} target="_blank"
                  >Následuje</a
                >
              </div>
              <div class="text-sm 2xl:text-base">
                {#each stageStatus[stage.id].next as ne}
                  <div>
                    <span class="text-white/70"
                      >{format(new Date(ne.period.start), "HH:mm")}-{format(
                        new Date(ne.period.end),
                        "HH:mm"
                      )}</span
                    >
                    <a
                      href="/udalosti?id={ne.event}"
                      target="_blank"
                      class="hover:underline">{ne._event.name}</a
                    >
                  </div>
                {/each}
              </div>
              <div class="mt-2 text-xs">
                <a
                  href={stageStatus[stage.id].scheduleLink}
                  class="hover:underline"
                  target="_blank">Zobrazit následující program v tomto sále</a
                >
              </div>
            </div>
          </div>
        </div>
      {/each}
    </section>
    <div class="text-center text-white/50 pb-10">
      Všechny časy jsou lokální - středoevropské časové pásmo CET (+02:00).
    </div>
  {:else}
    Načítám ...
  {/if}
</div>
