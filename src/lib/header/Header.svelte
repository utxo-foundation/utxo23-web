<script>
  import { page } from "$app/stores";
  import { bundle, userData, userDataLocal, apiStatus } from "$lib/stores";
  import SocialButtons from "$lib/SocialButtons.svelte";
  import Countdown from "$lib/Countdown.svelte";

  function logoClick() {
    userData.update((ud) => {
      ud.hpTrack = "top";
      return ud;
    });
  }
</script>

{#if !['/kiosk'].includes($page.url.pathname)}
<header
  class="relative bg-center bg-cover {$page.url.pathname !== '/tv'
    ? "bg-[url('/img/bg-header.jpg')]"
    : ''} bg-no-repeat bg-blue-web-bg print:hidden"
>
  <!--		<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li> -->
  <div>
    <nav
      class="relative mx-auto lg:px-6 px-4 pt-4 pt-2 sm:pt-6 pb-2 sm:pb-6 pb-2 max-w-6xl text-center"
    >
      <div class="">
        <div class="lg:flex lg:flex-wrap lg:space-x-10">
          {#if !["/", "/tv"].includes($page.url.pathname)}
            <div
              class="block justify-start lg:flex-1 my-auto text-center pb-3 lg:pb-0 pt-3 lg:pt-0"
            >
              <div class="w-40 lg:w-32 inline-block lg:block">
                <a href="/" on:click={logoClick}
                  ><img
                    src="/img/logo-white.svg"
                    class="w-full"
                    alt="UTXO.22"
                  /></a
                >
              </div>
            </div>
          {:else if $page.url.pathname === "/tv"}
            <div
              class="block justify-start lg:flex-1 my-auto text-center pb-3 lg:pb-0 pt-3 lg:pt-0"
            >
              <div class="w-40 lg:w-32 inline-block lg:block">
                <a href="/tv"
                  ><img
                    src="/img/utxo-tv.svg"
                    class="w-full"
                    alt="UTXO.TV"
                  /></a
                >
              </div>
            </div>
          {:else}
            <div class="flex-1" />
          {/if}
          <div
            class="flex lg:space-x-10 uppercase text-sm font-bold text-white flex-wrap gap-3"
          >
            {#if $page.url.pathname === "/tv"}
              <a
                sveltekit:prefetch
                href="/"
                class="m-auto hover:text-[#E16A61] "
                class:text-blue-400={$page.url.pathname === "/"}>O konferenci</a
              >
            {:else}
              <a
                sveltekit:prefetch
                href="/"
                class="m-auto hover:text-[#E16A61] "
                class:text-blue-400={$page.url.pathname === "/"}>Úvod</a
              >
            {/if}
            {#if $page.url.pathname !== "/tv"}
              <!--a
                sveltekit:prefetch
                href="/tv"
                class="m-auto hover:text-[#E16A61] text-custom-green"
                class:text-blue-400={$page.url.pathname === "/tv"}
                ><i class="fa-solid fa-video mr-1.5" /> Livestreamy</a
              -->
            {/if}
            <a
              sveltekit:prefetch
              href="/program"
              class="m-auto hover:text-[#E16A61]"
              class:text-blue-400={$page.url.pathname === "/program"}>Program</a
            >
            {#if $page.url.pathname !== "/tv"}
              <!--a
              sveltekit:prefetch
              href="/mapa"
              class="m-auto hover:text-[#E16A61]"
              class:text-blue-400={$page.url.pathname === "/mapa"}>Mapa</a
            -->
              <a
                sveltekit:prefetch
                href="/prakticke"
                class="m-auto hover:text-[#E16A61]"
                class:text-blue-400={$page.url.pathname === "/prakticke"}
                >Praktické</a
              >
              <a
                sveltekit:prefetch
                href="/vstupenky"
                class="m-auto border-solid border border-[#E16A61] rounded-full {$page
                  .url.pathname === '/vstupenky'
                  ? 'border-0 bg-utxo-gradient m-px'
                  : 'hover:border-0 hover:bg-utxo-gradient hover:p-px'}"
                ><div class="py-1.5 px-2 lg:px-6">
                  Vstupenky{#if $userDataLocal.tickets && $userDataLocal.tickets.length > 0}&nbsp;({$userDataLocal
                      .tickets.length}){/if}
                </div></a
              >
            {/if}
          </div>
          {#if $page.url.pathname === "/"}
            <div
              class="hidden lg:block my-auto lg:flex-1 lg:pt-0 pt-4 lg:justify-end justify-center"
            >
              <SocialButtons />
            </div>
          {/if}
        </div>
      </div>
    </nav>
  </div>
  {#if $page.url.pathname === "/"}
    <div
      class="relative mx-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-left text-white"
    >
      <div class="pl-2 sm:pl-6 lg:pl-10">
        <div
          class="uppercase font-semibold text-md lg:text-lg lg:w-1/3 text-white/70"
        >
          Otevřená komunitní kryptoměnová konference
        </div>
        <div class="mt-6">
          <a href="/" on:click={logoClick}
            ><img
              src="/img/logo-white.svg"
              class="w-3/4 md:w-1/2"
              alt="UTXO.22"
            /></a
          >
        </div>
        <div
          class="mt-6 flex flex-wrap gap-3 lg:gap-10 text-lg lg:text-xl font-semibold"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 border-white text-center rounded-full flex items-center justify-center"
            >
              <i class="fa-regular fa-calendar-days" />
            </div>
            <div class="">4.-5. červen 2022</div>
          </div>
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 border-white text-center rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-location-dot" />
            </div>
            <div class="">Gabriel Loci, Praha</div>
          </div>
        </div>
        <div class="flex mt-10 gap-4 flex-wrap">
          <div class="text-left">
            <div class="">
              <a
                href="/vstupenky"
                class="rounded-3xl bg-utxo-gradient uppercase text-sm py-4 px-10 hover:text-base hover:font-bold transition-all"
                >Koupit vstupenky</a
              >
            </div>
          </div>
          {#if $apiStatus && $apiStatus.wave}
            <div class="my-auto sm:mt-0 mt-2 sm:ml-0 ml-2 italic opacity-50">
              Zbývá <span class="font-bold">{$apiStatus.wave.live.left}</span>
              vstupenek (za {$apiStatus.wave.price} Kč)
            </div>
          {/if}
        </div>
        <div class="mt-8 ml-3 lg:ml-6 text-left flex m-auto">
          <a
            href="https://twitter.com/utxoprague"
            target="_blank"
            class="hover:underline"
            ><span
              class="inline-block w-6 h-6 bg-white text-center rounded-full text-blue-web mr-1"
              ><i class="fa-brands fa-twitter m-auto" /></span
            > Sledovat novinky</a
          >
        </div>
      </div>
      <div class="mt-6 lg:mt-0 text-left sm:text-right lg:pr-20 mb-2 text-xl">
        <Countdown />
      </div>
    </div>
  {/if}
</header>
{/if}

<style>
</style>
