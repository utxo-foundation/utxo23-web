<script context="module">
  export const prerender = true;
</script>

<script>
  import { bundle } from "$lib/stores.js";
  import api from "$lib/api.js";
  import { format, formatDistanceToNow } from "date-fns";
  import { cs } from "date-fns/locale/index.js";
  import { onMount, onDestroy } from "svelte";

  let tickets = null;
  let lastUpdate = null;
  let interval = null;

  onMount(() => {
    loadTickets();

    const interval = setInterval(() => {
      loadTickets();
    }, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  async function loadTickets() {
    tickets = await api.apiCall("tickets");
    lastUpdate = new Date();
  }
</script>

<svelte:head>
  <title>Návštěvníci | {$bundle ? $bundle.name : "UTXO.22"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Návštěvníci</h1>

  {#if tickets}
    <div>
      <table class="table-auto mt-6 w-full" cellpadding="6">
        <thead>
          <tr class="text-xs uppercase text-blue-web/80">
            <th align="left">ID</th>
            <th align="left">Jmenovka</th>
            <th align="left">Kino?</th>
            <th align="left">Vytvořeno</th>
          </tr>
        </thead>
        <tbody>
          {#each tickets as ticket}
            <tr class="hover:bg-blue-500/10">
              <td class="border-b"><pre>{ticket.id}</pre></td>
              <td class="border-b"
                >{#if ticket.data.name}<span class="font-semibold"
                    >{ticket.data.name}</span
                  >{:else}<span class="italic opacity-40">anonym</span
                  >{/if}&nbsp;{#if ticket.data.org}({ticket.data.org}){/if}
                {#if ticket.data.twitter}({ticket.data.twitter.trim(
                    "@"
                  )}){/if}</td
              >
              <td class="border-b"
                >{#if ticket.data.extras && ticket.data.extras.kino}<span
                    class="text-green-700"><i class="fa-solid fa-check" /></span
                  >{:else}<span class="opacity-40" />{/if}</td
              >
              <td class="border-b"
                >{#if ticket.created}<span
                    title={ticket.created}
                    class="text-sm"
                    >{formatDistanceToNow(new Date(ticket.created), {
                      locale: cs,
                      includeSeconds: true,
                    })} zpět</span
                  >{/if}</td
              >
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="mt-6 text-sm">
      Poslední aktualizace: {format(new Date(lastUpdate), "d.M.y HH:mm:ss")}
    </div>
  {/if}
</section>
