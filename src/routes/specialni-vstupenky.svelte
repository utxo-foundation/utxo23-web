<script context="module">
  export const prerender = true;
</script>

<script>
  import { bundle } from "$lib/stores.js";
  import { onMount, onDestroy } from "svelte";
  import { format, formatDistanceToNow } from "date-fns";
  import api from "$lib/api.js";

  let lastUpdate = null;
  let data = null;

  async function loadData() {
    data = await api.apiCall("claims");
    lastUpdate = new Date();
  }

  function fdate(d) {
    return format(new Date(d), "d.M HH:mm");
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
    <div class="mt-4">
      <table class="table-auto mt-6 w-full" cellpadding="6">
        <thead>
          <tr class="text-xs uppercase text-blue-web/80">
            <th align="left">Typ</th>
            <th align="left">Odkaz</th>
            <th align="left">Vytvořeno</th>
            <th align="left">Vyzvednuto</th>
          </tr>
        </thead>
        <tbody>
          {#each data as claim}
            <tr
              class={claim.claimed
                ? "hover:bg-blue-500/10"
                : "bg-yellow-400/20 hover:bg-yello-600/20"}
            >
              <td class="border-b font-bold">{claim.type}</td>
              <td class="border-b">{claim.link.type}:{claim.link.id}</td>
              <td class="border-b">{fdate(claim.created)}</td>
              <td class="border-b">
                {#if claim.claimed}{fdate(claim.claimedOn)} |
                  <code>{claim.ticketId}</code>{:else}-{/if}
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
