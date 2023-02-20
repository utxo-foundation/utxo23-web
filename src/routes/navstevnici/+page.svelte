<script>
  import { bundle, apiStatus } from "$lib/stores.js";
  import api from "$lib/api.js";
  import { format, formatDistanceToNow } from "date-fns";
  import { cs } from "date-fns/locale/index.js";
  import { onMount, onDestroy } from "svelte";
  import { loadOrders, loadApiStatus } from "$lib/orders";

  export let data;

  let tickets = null;
  let lastUpdate = null;
  let interval = null;

  onMount(() => {
    loadTickets();
    loadApiStatus();

    const interval = setInterval(() => {
      loadTickets();
      loadApiStatus();
    }, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  async function loadTickets() {
    tickets = await api.apiCall("tickets");
    lastUpdate = new Date();
  }

  const statsDef = [
    { name: "Vlna", fn: (as) => (!as.wave ? "?" : as.wave.id) },
    {
      name: "Zaplacených vstupenek",
      fn: (as) => (as.wave ? as.wave.live.issued : ""),
    },
    {
      name: "Naplnění vlny (%)",
      fn: (as) =>
        !as.wave
          ? "?"
          : Math.round(
              as.wave.live.issued /
                ((as.wave.live.issued +
                  as.wave.live.waiting +
                  as.wave.live.left) /
                  100)
            ) + "%",
    },
    {
      name: "Rezervovaných vstupenek",
      fn: (as) => (as.wave ? as.wave.live.waiting : "?"),
    },
    {
      name: "Volných vstupenek",
      fn: (as) =>
        as.wave
          ? as.wave.live.left +
            "/" +
            (as.wave.live.issued + as.wave.live.waiting + as.wave.live.left)
          : "?",
    },
    {
      name: "KryptoKino vstupenek",
      fn: (as) => as.kino.issued + "/" + as.kino.total,
    },
    {
      name: "BTC Vstupenky",
      fn: (as) => tickets.filter((t) => t.paymentMethod === "btcpay").length,
    },
  ];
</script>

<svelte:head>
  <title>Návštěvníci | {data.bundle ? data.bundle.name : "UTXO.22"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Návštěvníci</h1>

  {#if tickets && $apiStatus}
    <div class="flex flex-wrap gap-5 uppercase mt-5 w-full mb-10 text-right">
      {#each statsDef as def}
        <div class="flex-1">
          <div class="w-auto">
            <div class="text-3xl font-bold">{def.fn($apiStatus)}</div>
            <div class="text-sm">{def.name}</div>
          </div>
        </div>
      {/each}
    </div>
    <div>
      <table class="table-auto mt-6 w-full" cellpadding="6">
        <thead>
          <tr class="text-xs uppercase text-blue-web/80">
            <th align="left">ID</th>
            <th align="left">Obj.</th>
            <th align="left">Jmenovka</th>
            <th align="left">Kino?</th>
            <th align="left">BTC?</th>
            <th align="left">Vytvořeno</th>
          </tr>
        </thead>
        <tbody>
          {#each tickets as ticket}
            <tr
              class={[
                "speaker",
                "host",
                "partner",
                "organizator",
                "staff",
              ].includes(ticket.type)
                ? "bg-green-400/20 hover:bg-green-600/20"
                : ticket.id
                ? "hover:bg-blue-500/10"
                : "bg-yellow-400/20 hover:bg-yellow-600/20"}
            >
              <td class="border-b"><pre>{ticket.id}</pre></td>
              <td class="border-b text-sm"><pre>{ticket.orderId}</pre></td>
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
                >{#if ticket.paymentMethod === "card"}<span />{:else}<span
                    ><i
                      class="fa-brands fa-bitcoin text-green-800 text-lg"
                    /></span
                  >{/if}</td
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
