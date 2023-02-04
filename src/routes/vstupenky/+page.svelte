<script>
  import { onMount, onDestroy } from "svelte";
  import { faker } from "@faker-js/faker";
  import SvelteMarkdown from "svelte-markdown";
  import Link from "$lib/Link.svelte";
  import * as _ from "lodash";
  import QRCode from "$lib/QRCode.svelte";
  import {
    orderTicketForm,
    bundle,
    apiStatus,
    userData,
    userDataLocal,
  } from "$lib/stores";
  //import btcPay from 'https://btcpay.utxo.cz/modal/btcpay.js';
  import api from "$lib/api.js";
  import makeBlockie from "ethereum-blockies-base64";
  import { format, formatDistanceToNow } from "date-fns";
  import { cs } from "date-fns/locale/index.js";

  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { loadOrders, loadApiStatus } from "$lib/orders";
  import Avatar from "$lib/Avatar.svelte";

  const renderers = { link: Link };
  const orderTicketFormLS = localStorage.getItem("orderTicketForm");
  let parsed = JSON.parse(orderTicketFormLS);
  if (parsed && parsed.__v === $orderTicketForm.__v) {
    orderTicketForm.set(parsed);
  }

  const ticketTypes = {
    public: "Běžná vstupenka",
    speaker: "Přednášející",
    organizator: "Organizátor",
    staff: "Obsluha",
    partner: "Partner",
    host: "Host",
  };

  let forceShow = false;
  let loading = true;
  let formProcessing = false;
  $: showOrder = !(
    ($userDataLocal.orders && $userDataLocal.orders.length > 0) ||
    ($userDataLocal.tickets && $userDataLocal.tickets.length > 0)
  );
  $: orders = $userDataLocal.orders;
  $: tickets = $userDataLocal.tickets;

  let periodic15 = null;
  let periodic60 = null;

  onMount(async () => {
    const sp = $page.url.searchParams;
    if (sp.get("done")) {
      goto("/gratulujeme");
    }
    if (sp.get("id") && sp.get("secret")) {
      userData.update((ud) => {
        if (!ud.tickets) ud.tickets = [];
        ud.tickets.push([sp.get("id"), sp.get("secret")].join(":"));
        return ud;
      });
      await loadOrders($userData);
      goto("/vstupenky");
    }
    loading = false;

    periodic15 = setInterval(() => {
      loadApiStatus();
    }, 15 * 1000);

    periodic60 = setInterval(() => {
      loadOrders($userData);
    }, 60 * 1000);
  });

  onDestroy(() => {
    clearInterval(periodic15);
    clearInterval(periodic60);
  });

  faker.locale = "cz";
  let orderError = null;

  $: count = $apiStatus
    ? [...Array($apiStatus.config.maxTickets).keys()].map((i) => i + 1)
    : [];

  function selectPaymentMethod(el) {
    orderTicketForm.update((f) => {
      f.paymentMethod = el.target.value;
      return f;
    });
  }

  function ticketFormCountArray(count) {
    return [...Array(count).keys()].map((i) => i);
  }

  function processOrderError(error) {
    if (typeof error === "string") {
      return { title: error };
    }
    const out = { title: error.title };
    if (error.formErrors && error.formErrors.length > 0) {
      let suberrs = [];
      if (error.formErrors.find((fe) => fe.instancePath === "/email")) {
        suberrs.push(`Neplatný email`);
      }

      let ticket = null;
      if (
        error.formErrors.find(
          (fe) => (ticket = fe.instancePath.match(/\/tickets\/(\d+)\/twitter/))
        )
      ) {
        suberrs.push(
          `Neplatný Twitter účet (Vstupenka #${Number(ticket[1]) + 1}).`
        );
      }
      out.title =
        "Nesprávně vyplněný formulář: " +
        (suberrs.length > 0 ? suberrs.join(",") : "neznámá chyba");
      out.debug = error.formErrors;
    }
    if (!out.title) {
      out.title = "Neznámá chyba, zkuste to prosím později.";
    }
    console.log(out);
    return out;
  }

  async function submitOrderHandler() {
    // order process
    formProcessing = true;

    // clean previous errors
    $: orderError = null;

    const cloned = Object.assign({}, $orderTicketForm);
    cloned.tipCustom = Number(cloned.tipCustom);
    cloned.totalPrice = totalPrice;
    const resp = await api.submitOrder(cloned);

    if (resp.error) {
      $: orderError = processOrderError(resp.error);
      formProcessing = false;
      return null;
    }
    if (!resp.ok || !resp.payment.url) {
      return null;
    }

    // reset tickets in form
    orderTicketForm.update((of) => {
      of.count = 1;
      of.tickets = [];
      return of;
    });

    // add order to user data
    userData.update((ud) => {
      if (!ud.orders) {
        ud.orders = [];
      }
      ud.orders.push(resp.orderId);
      return ud;
    });

    window.location.replace(resp.payment.url);
  }

  let ticketsNum = 0;

  orderTicketForm.subscribe((f) => {
    if (f.count !== ticketsNum) {
      ticketsNum = f.count;
      orderTicketForm.update((cf) => {
        f.tickets = f.tickets.slice(0, f.count);
        for (let i = 0; i < f.count; i++) {
          console.log(i);
          if (!f.tickets[i]) {
            f.tickets[i] = {
              name: "",
              org: "",
              twitter: "",
              extras: { kino: false },
            };
          }
        }
        return f;
      });
    }
    localStorage.setItem("orderTicketForm", JSON.stringify(f));
  });

  function changeTip(perc) {
    return () => {
      orderTicketForm.update((of) => {
        of.tipPercent = perc;
        of.tipCustom = "";
        return of;
      });
    };
  }

  orderTicketForm.subscribe((of) => {
    const val = Number(of.tipCustom);
    if (val === NaN || !val || val < 1 || !String(val).match(/^\d+$/)) {
      of.tipCustom = "";
    } else if (val && val > 0 && of.tipPercent > 0) {
      of.tipPercent = 0;
    }
    if (orderError) {
      orderError = false;
    }
    return of;
  });

  function roundPrice(num) {
    return Math.round(num * 100) / 100;
  }

  function extrasStatsRender(form) {
    let obj = {};
    $apiStatus.config.extras.forEach((ex) => {
      obj[ex.id] = { count: 0, sum: 0, price: ex.price };
      form.tickets.forEach((t) => {
        if (t.extras[ex.id]) {
          obj[ex.id].count++;
          obj[ex.id].sum = obj[ex.id].count * ex.price;
        }
      });
    });
    let arr = Object.keys(obj).map((key) =>
      Object.assign({ id: key }, obj[key])
    );
    return {
      sum: arr.reduce((p, c) => p + c.sum, 0),
      arr,
    };
  }

  $: extrasStats = $apiStatus ? extrasStatsRender($orderTicketForm) : {};
  $: ticketPrice =
    $apiStatus && $apiStatus.wave
      ? $orderTicketForm.count * $apiStatus.wave.price
      : 0;
  $: totalBeforeTip = ticketPrice + extrasStats.sum;
  $: tip = roundPrice(
    $orderTicketForm.tipPercent > 0
      ? $orderTicketForm.tipPercent * (totalBeforeTip / 100)
      : Number($orderTicketForm.tipCustom)
  );
  $: totalPrice = totalBeforeTip + tip;

  $: enabled = false;

  const orderStatuses = {
    new: {
      name: "Čeká na platbu",
      icon: "fa-solid fa-clock",
      color: "text-yellow-600",
      text: (o) => {
        return "Tato objednávka čeká na platbu";
      },
    },
    done: {
      name: "Zaplacená",
      icon: "fa-solid fa-check",
      color: "text-green-600",
    },
    cancelled: {
      name: "Zrušená",
      icon: "fa-solid fa-ban",
      color: "text-gray-600",
    },
    expired: {
      name: "Expirovaná",
      icon: "fa-solid fa-clock",
      color: "text-gray-600",
    },
    refunded: {
      name: "Refundovaná",
      icon: "fa-solid fa-arrow-rotate-left",
      color: "text-orange-600",
    },
  };

  async function orderActionHandler(id, action) {
    const resp = await api.apiCall(
      "updateOrder",
      { method: "POST" },
      { id, action }
    );
    loadOrders($userData);
    loadApiStatus();
  }

  function removeOrder(id) {
    userData.update((ud) => {
      console.log("change", ud.orders, id);
      let index = ud.orders.indexOf(id);
      if (index >= 0) {
        if (ud.orders.length === 1) {
          ud.orders = [];
        } else {
          ud.orders.splice(index, 1);
        }
      }
      return ud;
    });
    loadOrders($userData);
  }

  let ticketEdit = null;
  let ticketEditSecret = null;
  let ticketEditData = {};
  let ticketEditProcessing = null;
  let ticketEditError = null;

  function handleTicketEditShow(
    ticketId,
    ticketData = {},
    orderId = null,
    ud = null
  ) {
    return () => {
      ticketEdit = ticketId;
      ticketEditData = _.pick(ticketData, ["name", "org", "twitter"]);
      const tsecret = ud.tickets.find((t) =>
        t.match(new RegExp(`^${ticketId}:`))
      );
      ticketEditSecret = orderId
        ? `order:${orderId}`
        : tsecret
        ? `ticket:${tsecret.split(":")[1]}`
        : "error";
    };
  }

  async function changeEditForm() {
    ticketEditError = false;
  }

  async function handleTicketEdit() {
    if (!ticketEdit || ticketEditProcessing) {
      return null;
    }
    ticketEditProcessing = true;
    console.log(ticketEdit, ticketEditData);

    const resp = await api.apiCall(
      "updateTicket",
      { method: "POST" },
      {
        id: ticketEdit,
        data: ticketEditData,
        secret: ticketEditSecret,
      }
    );
    ticketEditProcessing = false;
    if (resp.error) {
      let msg = "";
      if (resp.error.formErrors) {
        switch (resp.error.formErrors[0].instancePath) {
          case "/twitter":
            msg = "Neplatný twitter účet";
            break;
          case "/name":
            msg = "Nesprávně vyplněné jméno (max. počet znaků je 25)";
            break;
          case "/org":
            msg = "Nesprávně vyplněná organizace (max. počet znaků je 25)";
            break;
        }
      }
      ticketEditError = msg || "Neznámá chyba";
    } else {
      ticketEdit = false;
      await loadOrders($userData);
    }
  }

  let qrVisible = null;
</script>

<svelte:head>
  <title>Vstupenky | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  {#if loading}
    <div>Načítám...</div>
  {:else}
    <div class="">
      <h1 class="uppercase text-2xl font-bold">Vaše vstupenky</h1>
      {#if tickets.length > 0}
        <div class="mt-4 flex flex-wrap gap-3">
          {#each tickets as ticket}
            <div class="utxo-ticket w-full sm:w-80">
              <div class="h-2 bg-blue-web rounded-t-md shadow-md" />
              <div
                class="border-l border-b border-r p-4 rounded-b-md shadow-md border-blue-web"
              >
                {#if ticketEdit !== ticket.id}
                  <div
                    class="utxo-ticket-edit-button float-right transition-all"
                  >
                    <!--button
                      class="text-blue-web/60 hover:text-blue-web/100"
                      on:click={handleTicketEditShow(
                        ticket.id,
                        ticket.data,
                        ticket.orderId,
                        $userData
                      )}><i class="fas fa-edit" /></button
                    -->
                  </div>
                {/if}
                <div class="flex gap-3 text-sm">
                  {#if (ticket.type === "speaker" || ticket.type === "organizator") && ticket.link && ticket.link.id && ticket.link.type === "speaker"}
                    <a href="/lide?id={ticket.link.id}"
                      ><Avatar
                        speaker={$bundle.spec.speakers.find(
                          (s) => s.id === ticket.link.id
                        )}
                        size="semi-small"
                      /></a
                    >
                  {:else}
                    <div
                      class="w-10 h-10 rounded-md"
                      style="background-image: url({makeBlockie(
                        ticket.avatarHash
                      )}); background-size: 100% 100%;"
                    />
                  {/if}
                  <div class="w-auto">
                    <div class="no-flex">
                      <span
                        class="px-2 py-1 bg-blue-web text-white rounded w-auto font-mono"
                        >#{ticket.id}</span
                      >
                    </div>
                    <div class="mt-1.5">
                      {ticketTypes[ticket.type || "public"]}
                    </div>
                  </div>
                </div>
                {#if ticket.data && ticketEdit !== ticket.id}
                  <div class="mt-2">
                    {#if ticket.data.name}{ticket.data.name}{:else}<span
                        class="italic">Anonym</span
                      >{/if}
                    {#if ticket.data.org}({ticket.data.org}){/if}
                    {#if ticket.data.twitter}<a
                        href="https://twitter.com/{ticket.data.twitter.replace(
                          /^@/,
                          ''
                        )}"
                        target="_blank"><i class="fa-brands fa-twitter" /></a
                      >{/if}
                  </div>
                {/if}
                {#if ticketEdit === ticket.id}
                  <div
                    class="mt-2 border rounded border-blue-web/20 py-2 px-2 bg-blue-web-light"
                  >
                    <div class="text-sm uppercase font-bold">Úprava údajů</div>

                    <div class="">
                      <div class="mt-2 flex-1 w-full">
                        <div class="uppercase text-sm">Jméno (Přezdívka)</div>
                        <div class="mt-2">
                          <input
                            type="text"
                            maxlength="25"
                            class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                            bind:value={ticketEditData.name}
                            on:input={changeEditForm}
                            placeholder="Anonym"
                          />
                        </div>
                      </div>
                      <div class="mt-2 flex-1">
                        <div class="uppercase text-sm">Organizace (Firma)</div>
                        <div class="mt-2">
                          <input
                            type="text"
                            maxlength="25"
                            class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                            bind:value={ticketEditData.org}
                            on:input={changeEditForm}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="mt-2">
                        <div class="uppercase text-sm">Twitter účet</div>
                        <div class="mt-2">
                          <input
                            type="text"
                            maxlength="25"
                            class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                            bind:value={ticketEditData.twitter}
                            on:input={changeEditForm}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="mt-4 flex gap-4">
                        <button
                          class="{ticketEditProcessing
                            ? 'cursor-not-allowed bg-utxo-gradient'
                            : 'bg-blue-web hover:bg-utxo-gradient'} rounded-lg text-white px-4 py-2 inline-flex items-center leading-6 transition ease-in-out duration-150"
                          on:click={handleTicketEdit}
                          disabled={ticketEditProcessing}
                        >
                          {#if ticketEditProcessing}
                            <svg
                              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                              />
                              <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Ukládám ..
                          {:else}
                            Uložit
                          {/if}
                        </button>
                        {#if !ticketEditProcessing}
                          <button
                            class="my-auto hover:underline"
                            on:click={() => (ticketEdit = null)}>Zrušit</button
                          >
                        {/if}
                      </div>
                      {#if ticketEditError}
                        <div class="text-red-700 mt-3 text-sm m-1">
                          <i class="fa-solid fa-triangle-exclamation" />
                          {ticketEditError}
                        </div>
                      {/if}
                    </div>
                  </div>
                {/if}
                {#if ticket.type === "speaker" && ticketEdit !== ticket.id}
                  <div class="mt-4">
                    <a
                      href="https://docs.utxo.cz/pro-prednasejici"
                      target="_blank"
                      class="underline hover:no-underline"
                      >Informace pro přednášející</a
                    >
                  </div>
                {/if}
                <div class="mt-2">
                  {#if qrVisible === ticket.id}
                    <div class="mt-2">
                      <QRCode value="{ticket.id}:{ticket.secret}" />
                      <div class="mt-2">
                        <a
                          href="#"
                          class="underline hover:no-underline"
                          on:click={() => (qrVisible = null)}>Schovat QR kód</a
                        >
                      </div>
                    </div>
                  {:else}
                    <a
                      href="#"
                      class="underline hover:no-underline"
                      on:click={() => (qrVisible = ticket.id)}
                      >Zobrazit QR kód</a
                    >
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
        <!--div class="mt-4 text-sm">
          * Úprava údajů na vstupence bude možná od 27. dubna (společně se
          spuštením druhé vlny). Omlouváme se za komplikace 🙏.
        </div-->
      {:else}
        <div class="mt-4">Nemáte žádnou vstupenku</div>
      {/if}
    </div>
    {#if $apiStatus && enabled}
      {#if orders.length > 0}
        <div class="mt-10">
          <h1 class="uppercase text-2xl font-bold">Vaše objednávky</h1>
          <div class="mt-4">
            {#each orders as order}
              <div class="mb-2 px-3 py-2 border rounded-lg">
                {#if ["expired", "cancelled"].includes(order.status)}
                  <div class="float-right">
                    <a
                      class="cursor-pointer"
                      on:click={() => removeOrder(order.id)}
                      ><i class="fa-solid fa-xmark" /></a
                    >
                  </div>
                {/if}
                <div class="flex flex-wrap gap-3 text-sm">
                  <div class="px-2 py-1 bg-gray-200 rounded text-xs font-mono">
                    #{order.id}
                  </div>
                  <div
                    class="my-auto uppercase {orderStatuses[order.status].color
                      ? orderStatuses[order.status].color
                      : ''}"
                  >
                    {#if orderStatuses[order.status].icon}
                      <i class="{orderStatuses[order.status].icon} mr-0.5" />
                    {/if}
                    {orderStatuses[order.status].name}
                    {#if order.status === "new"}
                      &nbsp;- expirace {format(
                        new Date(order.expiration),
                        "d.M. H:mm"
                      )} (zbývá {formatDistanceToNow(
                        new Date(order.expiration),
                        { locale: cs, includeSeconds: true }
                      )})
                    {/if}
                  </div>
                </div>
                <div class="mt-2 text-sm flex gap-2">
                  <div>
                    Vytvořeno: <span class="font-bold"
                      >{format(new Date(order.created), "d.M.y H:mm")}</span
                    ><br />
                  </div>
                  <div>
                    Částka: <span class="font-bold">{order.amount} Kč</span><br
                    />
                  </div>
                  <div>
                    Platební metoda: <span class="font-bold"
                      >{$apiStatus.config.paymentMethods.find(
                        (pm) => pm.id === order.paymentMethod
                      )
                        ? $apiStatus.config.paymentMethods.find(
                            (pm) => pm.id === order.paymentMethod
                          ).shortname
                        : "null (?)"}</span
                    >
                  </div>
                </div>
                {#if orderStatuses[order.status].text}
                  <div class="mt-2 italic">
                    {orderStatuses[order.status].text(order)}
                  </div>
                  {#if order.actions}
                    <div class="flex gap-3">
                      {#each order.actions as action}
                        <div class="mt-2">
                          <a
                            href={action.url}
                            class="underline hover:no-underline cursor-pointer"
                            on:click={() =>
                              orderActionHandler(order.id, action.remote)}
                            >{action.name}</a
                          >
                        </div>
                      {/each}
                    </div>
                  {/if}
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}
      <div class="mt-10 mb-10">
        <h1 class="uppercase text-2xl font-bold">Nákup vstupenek</h1>

        {#if !$apiStatus.wave}
          <div class="mt-4">
            Není aktivní žádná prodejní vlna. První vlna bude spuštěna 13.4. v
            13:00.<br /><br />
            Sledujte naše sociální sítě -
            <a
              href={$bundle.links.twitter}
              target="_blank"
              class="underline hover:no-underline">Twitter</a
            >,
            <a
              href={$bundle.links.instagram}
              target="_blank"
              class="underline hover:no-underline">Instagram</a
            >,
            <a
              href={$bundle.links.fbevent}
              target="_blank"
              class="underline hover:no-underline">Facebook</a
            >
            nebo odebírejte náš
            <a
              href={$bundle.links.substack}
              target="_blank"
              class="underline hover:no-underline">Newsletter</a
            >.
          </div>
        {:else}
          <div class="mt-4 mb-8">
            <div class="flex w-full uppercase text-sm mb-2">
              <div class="flex-1">
                {$apiStatus.wave.name} ({$apiStatus.wave.price} Kč)
              </div>
              <div class="justify-end">
                Zbývá {$apiStatus.wave.live.left} / {$apiStatus.wave.count}
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div
                class="bg-utxo-gradient h-2.5 rounded-full transition-all"
                style="width: {$apiStatus.wave.live.perc}%"
              />
            </div>
          </div>
          {#if $apiStatus.wave.live.left <= 0}
            <div class="mt-2">
              {#if $apiStatus.wave.live.waiting > 0}
                Aktuální vlna je vyprodaná. Zarezervované a nezaplacené
                vstupenky ({$apiStatus.wave.live.waiting}) se postupně vrací do
                prodeje.
              {:else}
                Vyprodáno!
              {/if}
            </div>
          {:else if !showOrder && !forceShow}
            <div class="mt-4">
              <button
                class="border rounded-full border-[#E16A61] hover:border-0 hover:p-px hover:bg-utxo-gradient hover:text-white"
                on:click={() => (forceShow = true)}
                ><div class="px-6 py-2">Nakoupit další vstupenky</div></button
              >
            </div>
          {:else if !$apiStatus.wave}
            <div class="mt-4">V současné době nelze zakoupit vstupenky.</div>
          {:else}
            <div
              class="p-3 bg-blue-web-light rounded-md mt-6 text-blue-web shadow-md"
            >
              <div class="sm:m-2 border rounded-md p-4 shadow bg-white mb-6">
                <div class="mb-4">
                  Název akce: <span class="font-bold">UTXO.22</span><br />
                  Datum konání:
                  <span class="font-bold">4. - 5. červen 2022</span>
                  (sobota - neděle)<br />
                  Místo: <span class="font-bold">Gabriel Loci</span>, Praha 5<br
                  /><br />
                  Aktuální cena vstupenky:
                  <span class="font-bold">{$apiStatus.wave.price} Kč</span>
                  / osobu ({$apiStatus.wave.name})
                </div>
                <div class="md:flex gap-3">
                  <div class="md:w-1/2 p-2">
                    <div class="font-bold uppercase">
                      ✅ &nbsp;Vstupenka obsahuje:
                    </div>
                    <div class="mt-4">
                      <div class="mb-2">
                        • přístup na všechny přednášky, workshopy a další
                        události v rámci konference
                      </div>
                      <div class="mb-2">
                        • platnost oba dva konferenční dny (sobota + neděle)
                      </div>
                      <div class="mb-2">
                        • přístup na <span class="font-bold">UTXO.Party</span> v
                        sobotu večer
                      </div>
                      <div class="mb-2">
                        • unikátní <a
                          href="https://poap.xyz/"
                          target="_blank"
                          title="Proof of Attendance Protocol">POAP</a
                        > odznak na památku (k dispozici po konferenci)
                      </div>
                    </div>
                  </div>
                  <div class="md:w-1/2 p-2 md:mt-0 mt-3">
                    <div class="font-bold uppercase">
                      ❌ &nbsp;Vstupenka NEobsahuje:
                    </div>
                    <div class="mt-4">
                      <div class="mb-2">
                        • jídlo a pití - občerstvení bude možné zakoupit na
                        místě (platba kartou nebo Lightning)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div>
                  <div class="uppercase text-sm font-bold">Email</div>
                  <div class="mt-2 text-sm">
                    Kontaktní email, na který budou zaslány vstupenky.
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="border border-blue-web rounded-md p-2 w-full lg:w-1/2 text-blue-web"
                      bind:value={$orderTicketForm.email}
                    />
                  </div>
                </div>
                <div class="mt-6">
                  <div class="uppercase text-sm font-bold">Počet vstupenek</div>
                  <div class="mt-2 flex gap-3">
                    <select
                      name="count"
                      class="border border-blue-web rounded-md p-2 text-blue-web bg-white"
                      bind:value={$orderTicketForm.count}
                    >
                      {#each count as i}
                        <option value={i}>{i}</option>
                      {/each}
                    </select>
                    <div class="my-auto">
                      × <span class="font-bold">{$apiStatus.wave.price} Kč</span
                      > (cena vstupenky)
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <div class="uppercase text-sm font-bold">
                    Vstupenky a příplatky
                  </div>
                  <div class="mt-2 text-sm">
                    Informace, které budou vytištěné na Vaší konferenční
                    jmenovku. Tyto údaje jsou nepovinné a bude možné je změnit
                    později.
                  </div>
                </div>
                <div class="mt-2">
                  {#each ticketFormCountArray($orderTicketForm.count) as i}
                    <div
                      class="p-4 bg-utxo-gradient text-white rounded-md mb-6 shadow-md"
                    >
                      <div class="">
                        <div class="uppercase font-bold">
                          Vstupenka #{i + 1}
                        </div>
                        <div class="md:flex gap-2">
                          <div class="mt-2 flex-1">
                            <div class="uppercase text-sm">
                              Jméno (Přezdívka)
                            </div>
                            <div class="mt-2">
                              <input
                                type="text"
                                maxlength="25"
                                class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                                bind:value={$orderTicketForm.tickets[i].name}
                                placeholder={faker.name.findName()}
                              />
                            </div>
                          </div>
                          <div class="mt-2 flex-1">
                            <div class="uppercase text-sm">
                              Organizace (Firma)
                            </div>
                            <div class="mt-2">
                              <input
                                type="text"
                                maxlength="25"
                                class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                                bind:value={$orderTicketForm.tickets[i].org}
                                placeholder={faker.company.companyName()}
                              />
                            </div>
                          </div>
                          <div class="mt-2">
                            <div class="uppercase text-sm">Twitter účet</div>
                            <div class="mt-2">
                              <input
                                type="text"
                                maxlength="25"
                                class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                                bind:value={$orderTicketForm.tickets[i].twitter}
                                placeholder="@{faker.internet.userName()}"
                              />
                            </div>
                          </div>
                        </div>
                        {#if $apiStatus.kino.left > 0}
                          <div class="uppercase text-sm font-bold mt-3">
                            Volitelné příplatky
                          </div>
                          <div class="mt-1">
                            {#each $apiStatus.config.extras as ex}
                              <div>
                                <label class="cursor-pointer"
                                  ><input
                                    type="checkbox"
                                    class="mr-0.5 cursor-pointer"
                                    bind:checked={$orderTicketForm.tickets[i]
                                      .extras[ex.id]}
                                  />
                                  <span class="font-semibold"
                                    >{ex.name} ({ex.price} Kč) {ex.id === "kino"
                                      ? `zbývá ${$apiStatus.kino.left}/${$apiStatus.kino.total}`
                                      : ""}</span
                                  ></label
                                >
                                <div class="text-sm">
                                  <SvelteMarkdown
                                    source={ex.desc}
                                    {renderers}
                                  />
                                </div>
                              </div>
                            {/each}
                          </div>
                        {/if}
                      </div>
                    </div>
                  {/each}
                </div>
                <div class="mt-6">
                  <div class="uppercase text-sm font-bold">
                    Příspěvek pro organizátory (dýško)
                  </div>
                  <div class="mt-2 flex flex-wrap gap-2">
                    {#each $apiStatus.config.tipPercentages as tp}
                      <button
                        class="block py-1.5 px-4 min-w-16 {$orderTicketForm.tipPercent ===
                          tp[0] && $orderTicketForm.tipCustom < 1
                          ? (tp[0] === 0 ? 'bg-gray-400' : 'bg-blue-web') +
                            ' rounded-full text-white shadow-lg'
                          : 'border border-solid border-blue-web rounded-full'}"
                        on:click={changeTip(tp[0])}
                        >{tp[0] === 0 ? "Nechci přispět" : tp[0] + "%"}</button
                      >
                    {/each}
                    <div
                      class="px-2 py-1 {$orderTicketForm.tipCustom > 0
                        ? 'px-5 border border-blue-web rounded-full bg-blue-web text-white'
                        : ''}"
                    >
                      Jiná částka: <input
                        class="border border border-blue-web rounded-md px-2 py-1 text-blue-web w-16"
                        bind:value={$orderTicketForm.tipCustom}
                      /> Kč
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <div class="uppercase text-sm font-bold">Platební metoda</div>
                  <div class="mt-2">
                    {#if $apiStatus.config.paymentMethods.find((pm) => pm.id === "btcpay") && $apiStatus.config.paymentMethods.find((pm) => pm.id === "btcpay").hidden === true}
                      <div class="mb-4 text-sm">
                        Platba pomocí BTC není dočasně k dispozici, zkuste to
                        prosím později. Omlouváme se :(
                      </div>
                    {/if}
                    {#each $apiStatus.config.paymentMethods as pm}
                      {#if !pm.hidden}
                        <div class="mb-2">
                          <label class="cursor-pointer"
                            ><input
                              checked={$orderTicketForm.paymentMethod === pm.id}
                              name="paymentMethod"
                              value={pm.id}
                              type="radio"
                              on:change={selectPaymentMethod}
                              class="cursor-pointer"
                            />
                            {pm.name}
                            {#if pm.id === "btcpay"}<span class="ml-4 text-xs"
                                ><i class="fas fa-heart text-red-500" /> Doporučujeme</span
                              >{/if}
                            {#if pm.id === "card"}<img
                                src="/img/credit-card-logos.png"
                                class="h-6 leading-7 inline ml-2"
                              />{/if}
                          </label>
                        </div>
                      {/if}
                    {/each}
                  </div>
                </div>
                <div
                  class="mt-6 py-3 px-4 bg-white rounded-md shadow-md text-sm"
                >
                  <div class="uppercase text-sm font-bold">
                    Shrnutí objednávky
                  </div>
                  <div class="mt-1.5">
                    <table cellpadding="5" class="table-auto">
                      <tr>
                        <td
                          >{$orderTicketForm.count}× UTXO.22 vstupenka ({$apiStatus
                            .wave.price} Kč)</td
                        >
                        <td>{ticketPrice} Kč</td>
                      </tr>
                      {#if extrasStats.sum > 0}
                        {#each extrasStats.arr as es}
                          <tr>
                            <td
                              >{es.count}× {$apiStatus.config.extras.find(
                                (e) => e.id === es.id
                              ).shortname} ({es.price} Kč)</td
                            >
                            <td>{es.sum} Kč</td>
                          </tr>
                        {/each}
                      {/if}
                      {#if tip > 0}
                        <tr>
                          <td
                            >dýško pro organizátory ({$orderTicketForm.tipPercent >
                            0
                              ? $orderTicketForm.tipPercent + "%"
                              : $orderTicketForm.tipCustom + " Kč"})</td
                          >
                          <td>{tip} Kč</td>
                        </tr>
                      {/if}
                      <tr>
                        <th align="right">Celkem:</th>
                        <th class="font-bold">{totalPrice} Kč</th><th /></tr
                      >
                    </table>
                  </div>
                  <div class="mt-1.5">
                    Platební metoda: <span class="font-bold"
                      >{#if $orderTicketForm.paymentMethod === "btcpay"}Bitcoin{:else}Platební
                        karta{/if}</span
                    >
                  </div>
                </div>
                <div class="mt-6">
                  <div class="flex gap-3">
                    {#if !formProcessing}
                      <div>
                        <button
                          class="{formProcessing
                            ? 'bg-gray-800'
                            : 'hover:bg-utxo-gradient bg-[#E16A61]'} text-white font-semibold rounded-full shadow-md"
                          disabled={formProcessing}
                          on:click={submitOrderHandler}
                          ><div class="py-2 px-4">
                            Odeslat objednávku - zaplatit {totalPrice} Kč {#if $orderTicketForm.paymentMethod === "btcpay"}bitcoinem{:else}platební
                              kartou{/if}
                          </div></button
                        >
                      </div>
                    {/if}

                    {#if formProcessing}
                      <div class="flex gap-3">
                        <div class="">
                          <img src="/img/Spin-1s-200px.gif" class="w-10" />
                        </div>
                        <div class="my-auto text-red-600 font-bold">
                          Odesílám objednávku ..
                        </div>
                      </div>
                    {/if}
                  </div>
                  {#if orderError}
                    <div
                      class="py-2 px-3 mt-4 text-red-600 bg-red-200 rounded-xl shadow-md"
                    >
                      Chyba: {orderError.title}
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          {/if}
        {/if}
      </div>
      <!--pre>{JSON.stringify($orderTicketForm, null, 2)}</pre>
  <pre>{JSON.stringify(extrasStats, null, 2)}</pre -->
    {/if}
  {/if}
</section>

<style>
  .utxo-ticket .utxo-ticket-edit-button {
    opacity: 0.3;
  }
  .utxo-ticket:hover .utxo-ticket-edit-button {
    opacity: 1;
  }
</style>
