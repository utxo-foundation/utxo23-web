<script context="module">
  export const prerender = true;
</script>

<script>
  import { bundle, apiStatus } from "$lib/stores.js";
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { faker } from "@faker-js/faker";
  import api from "$lib/api.js";
  import Avatar from "$lib/Avatar.svelte";
  import removeMd from "remove-markdown";
  import { userData } from "$lib/stores";

  let claim = null;
  let form = {
    email: "",
    name: "",
    org: "",
    twitter: "",
  };
  let formProcessing = false;
  let formError = null;

  $: target = $bundle && claim ? findTarget(claim.link) : null;

  function findTarget(link) {
    if (link.type === "speaker") {
      return $bundle.spec.speakers.find((s) => s.id === link.id);
    }
    if (link.type === "partner") {
      return $bundle.spec.partners.find((s) => s.id === link.id);
    }
    return null;
  }

  async function loadClaim(code) {
    const resp = await api.apiCall("claimInfo", { method: "post" }, { code });
    return resp;
  }

  onMount(async () => {
    const search = new URLSearchParams($page.url.search);
    claim = await loadClaim(search.get("kod"));
    if (!claim) {
      goto("/");
    }
    if (
      $bundle &&
      claim.type === "speaker" &&
      claim.link &&
      claim.link.type === "speaker"
    ) {
      const sp = $bundle.spec.speakers.find((s) => s.id === claim.link.id);
      if (sp) {
        form.name = sp.name || "";
        form.org = sp.orgs ? removeMd(sp.orgs).substring(0, 25) : "";
        form.twitter = sp.twitter ? "@" + sp.twitter : "";
      }
    }
  });

  const ticketTypes = {
    speaker: {
      title: "Přednášející",
      hostTitle: "Host přednášejícího",
      col: "speakers",
    },
    organizator: {
      title: "Organizátor",
      hostTitle: "Host organizátora",
      col: "speakers",
    },
    partner: { title: "Partner", hostTitle: "Host partnera", col: "partners" },
    host: { title: "Host" },
  };

  function makeTicketTypeInfo(c) {
    if (!c) {
      return null;
    }
    const out = { title: null, col: null };
    if (c.type === "host") {
      const tt = ticketTypes[c.link.type];
      out.title = tt.hostTitle;
      out.col = tt.col;
    } else {
      const tt = ticketTypes[c.type];
      out.title = tt.title;
      out.col = tt.col;
    }
    return out;
  }

  $: ticketTypeInfo = makeTicketTypeInfo(claim);

  function processErrors(error) {
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
          (fe) => (ticket = fe.instancePath.match(/\/twitter/))
        )
      ) {
        suberrs.push(`Neplatný Twitter účet.`);
      }
      out.title =
        "Nesprávně vyplněný formulář: " +
        (suberrs.length > 0 ? suberrs.join(",") : "neznámá chyba");
      out.debug = error.formErrors;
    }
    if (!out.title) {
      out.title = "Neznámá chyba, zkuste to prosím později.";
    }
    return out;
  }

  async function submitClaim() {
    formProcessing = true;
    let resp;
    try {
      resp = await api.apiCall(
        "claim",
        { method: "post" },
        { code: claim.code, form }
      );
    } catch (e) {
      console.error(e);
    }
    if (resp.error) {
      formError = processErrors(resp.error);
      formProcessing = false;
      return null;
    }

    if (!resp.ok || !resp.ticket) {
      formError = { title: "Neznámá chyba" };
      formProcessing = false;
      return null;
    }

    // add order to user data
    userData.update((ud) => {
      if (!ud.tickets) {
        ud.tickets = [];
      }
      ud.tickets.push([resp.ticket.id, resp.ticket.secret].join(":"));
      return ud;
    });

    window.location.replace("/vstupenky");
  }
</script>

<svelte:head>
  <title>Vyzvednutí vstupenky | {$bundle ? $bundle.name : "UTXO.22"}</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <h1 class="uppercase text-2xl font-bold">Vyzvednutí vstupenky</h1>
  <div class="mt-6 mb-10">
    {#if claim && $bundle}
      <div
        class="p-3 bg-blue-web-light rounded-md mt-6 text-blue-web shadow-md"
      >
        <div class="p-2">
          <div>
            <div class="uppercase text-sm font-bold">Kód vyzvednutí</div>
            <div class="mt-2 font-mono">
              {claim.code}
            </div>
          </div>
          <div class="mt-6">
            <div class="uppercase text-sm font-bold">Typ vstupenky</div>
            <div class="mt-2">
              <span class="">{ticketTypeInfo ? ticketTypeInfo.title : ""}</span>
              {#if target}
                (<Avatar
                  speaker={target}
                  size="extra-small"
                  inline="true"
                  col={ticketTypeInfo.col}
                />
                <a href="/lide?id={target.id}">{target.name}</a>)
              {/if}
            </div>
          </div>
          {#if claim.claimed}
            <div class="mt-6">
              <div class="text-lg font-bold">Již vyzvednuto!</div>
            </div>
          {:else}
            <div class="mt-6">
              <div class="uppercase text-sm font-bold">Email</div>
              <div class="mt-2 text-sm">
                Kontaktní email, na který budou zaslány vstupenky.
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  class="border border-blue-web rounded-md p-2 w-full lg:w-1/2 text-blue-web"
                  bind:value={form.email}
                />
              </div>
            </div>
            <div class="mt-6">
              <div class="uppercase text-sm font-bold">Vstupenka</div>
              <div class="mt-2 text-sm">
                Informace, které budou vytištěné na Vaší konferenční jmenovku.
                Tyto údaje jsou nepovinné a bude možné je změnit později.
              </div>
            </div>
            <div class="mt-2">
              <div
                class="p-4 bg-utxo-gradient text-white rounded-md mb-6 shadow-md"
              >
                <div class="">
                  <div class="md:flex gap-2">
                    <div class="flex-1">
                      <div class="uppercase text-sm">Jméno (Přezdívka)</div>
                      <div class="mt-2">
                        <input
                          type="text"
                          maxlength="25"
                          class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                          bind:value={form.name}
                          placeholder={claim.type !== "speaker"
                            ? faker.name.findName()
                            : ""}
                        />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div class="uppercase text-sm">Organizace (Firma)</div>
                      <div class="mt-2">
                        <input
                          type="text"
                          maxlength="25"
                          class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                          bind:value={form.org}
                          placeholder={claim.type !== "speaker"
                            ? faker.company.companyName()
                            : ""}
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="uppercase text-sm">Twitter účet</div>
                      <div class="mt-2">
                        <input
                          type="text"
                          maxlength="25"
                          class="border border-blue-web rounded-md p-2 w-full text-blue-web"
                          bind:value={form.twitter}
                          placeholder={claim.type !== "speaker"
                            ? faker.internet.userName()
                            : ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {#if !formProcessing}
                  <div>
                    <button
                      class="hover:bg-utxo-gradient bg-[#E16A61] text-white font-semibold rounded-full shadow-md"
                      disabled={formProcessing}
                      on:click={submitClaim}
                      ><div class="py-2 px-4">Získat vstupenku</div></button
                    >
                  </div>
                  {#if formError}
                    <div class="mt-4 text-red-500">
                      {formError.title}
                    </div>
                  {/if}
                {:else}
                  <div class="flex gap-3">
                    <div class="">
                      <img src="/img/Spin-1s-200px.gif" class="w-10" />
                    </div>
                    <div class="my-auto text-red-600 font-bold">
                      Odesílám žádost ..
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      </div>
    {:else}
      <div>Načítám ...</div>
    {/if}
  </div>
</section>
