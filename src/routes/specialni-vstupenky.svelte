<script context="module">
  export const prerender = true;
</script>

<script>
  import { bundle } from "$lib/stores.js";
  import { onMount, onDestroy } from "svelte";
  import { format, formatDistanceToNow } from "date-fns";
  import Avatar from "$lib/Avatar.svelte";
  import api from "$lib/api.js";

  let lastUpdate = null;
  let data = null;
  let speakersWithoutTicket = null;

  async function loadData() {
    data = await api.apiCall("claims");
    speakersWithoutTicket = speakersWithoutTicketGen()

    lastUpdate = new Date();
  }

  function fdate(d) {
    return format(new Date(d), "d.M HH:mm");
  }

  function linkInfo(link) {
    const map = {
      speaker: { col: "speakers", url: "/lide?id=" },
      partner: { col: "partners", suffix: "partner" },
    };
    const ltype = map[link.type];
    if (!ltype) {
      return null;
    }
    const item = $bundle.spec[ltype.col].find((i) => i.id === link.id);
    if (!item) {
      return "not exists!";
    }
    return {
      title: item.name,
      url: ltype.url ? ltype.url + link.id : null,
      col: ltype.col,
      suffix: ltype.suffix,
    };
  }

  function claimsMap(arr) {
    for (const i of arr) {
      i.linkInfo = linkInfo(i.link);
    }
    return arr;
  }

  function speakersWithoutTicketGen () {
    if (!data) {
      return null
    }
    const wt = []
    $bundle.spec.speakers.forEach(sp => {
      if (!data.find(i => i.link.type === 'speaker' && i.link.id === sp.id)) {
        wt.push(sp)
      }
    })
    return wt
  }

  onMount(() => {
    loadData();
  });
</script>

<svelte:head>
  <title>Speciální vstupenky | {$bundle ? $bundle.name : "UTXO.22"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Speciální vstupenky</h1>
  {#if data}
    <div class="mt-4">
      Celkem: {data.length}, vyzvednuto: {data.filter((x) => x.claimed)
        .length}/{data.length}
    </div>
    {#if speakersWithoutTicket}
      <div class="mt-10">
        <h2 class="text-lg font-semibold uppercase">Přednášející bez kódu ({speakersWithoutTicket.length})</h2>
        <div class="flex gap-4 flex-wrap mt-4">
        {#each speakersWithoutTicket as sp}
          <div><a href="/lide?id={sp.id}"><div class="inline-block align-middle"><Avatar speaker={sp} size="extra-small" /></div>&nbsp;{sp.name}</a></div>
        {/each}
        </div>
      </div>
    {/if}
    <div class="mt-10">
      <h2 class="text-lg font-semibold uppercase">Seznam všech speciálních vstupenek ({data.length})</h2>
      <table class="table-auto mt-6 w-full" cellpadding="6">
        <thead>
          <tr class="text-xs uppercase text-blue-web/80">
            <th align="left">Typ</th>
            <th align="left">Odkaz</th>
            <th align="left">Vyzvednuto</th>
            <th align="left">Jmenovka</th>
          </tr>
        </thead>
        <tbody>
          {#each claimsMap(data) as claim}
            <tr
              class={claim.claimed
                ? "hover:bg-blue-500/10"
                : "bg-yellow-400/20 hover:bg-yello-600/20"}
            >
              <td class="border-b font-bold">{claim.type}</td>
              <td class="border-b">
                <a href={claim.linkInfo.url}>
                  <div class="inline-block align-middle">
                    <Avatar
                      speaker={$bundle.spec[claim.linkInfo.col].find(
                        (i) => i.id === claim.link.id
                      )}
                      col={claim.linkInfo.col}
                      size="extra-small"
                    />
                  </div>
                  {claim.linkInfo.title}
                  {#if claim.linkInfo.suffix}&nbsp;({claim.linkInfo
                      .suffix}){/if}
                </a>
              </td>
              <td class="border-b">
                {#if claim.claimed}
                  <code>{claim.ticketId}</code> ({fdate(
                    claim.claimedOn
                  )}){:else}-{/if}
              </td>
              <td class="border-b">
                {#if claim.claimed && claim.ticketData}
                  {#if claim.ticketData.name}
                    {claim.ticketData.name}
                  {:else}
                    <span class="italic">Anonym</span>
                  {/if}
                  {#if claim.ticketData.org}
                    &nbsp;({claim.ticketData.org})
                  {/if}
                  {#if claim.ticketData.twitter}
                    &nbsp;<a href="https://twitter/{claim.ticketData.twitter}"
                      ><i class="fa-brands fa-twitter" /></a
                    >
                  {/if}
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div>Načítám ..</div>
  {/if}
</section>
<section class="h-20"></section>
