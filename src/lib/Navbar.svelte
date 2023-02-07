<script>
    import { page } from "$app/stores";
    import SocialButtons from "$lib/SocialButtons.svelte";
  
    function logoClick() {
      userData.update((ud) => {
        ud.hpTrack = "top";
        return ud;
      });
    }
  </script>

<nav
      class="relative mx-auto lg:px-6 px-4 py-4 sm:pt-6 pb-2 sm:pb-6 max-w-6xl text-center"
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
                    src="/img/logo-utxo23-light-on-transparent.svg"
                    class="w-full"
                    alt="UTXO.23"
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
            {#if $page.url.pathname !== "/tv"}
              <!--a
              sveltekit:prefetch
              href="/mapa"
              class="m-auto hover:text-[#E16A61]"
              class:text-blue-400={$page.url.pathname === "/mapa"}>Mapa</a
            >
              <a
                sveltekit:prefetch
                href="/prakticke"
                class="m-auto hover:text-[#E16A61]"
                class:text-blue-400={$page.url.pathname === "/prakticke"}
                >Praktické</a
              !-->
              <a
                sveltekit:prefetch
                href="https://utxo.tv"
                target="_blank"
                class="m-auto hover:text-[#E16A61]"
                >Záznamy - utxo.tv</a
              >
              <a
                sveltekit:prefetch
                href="/fotky"
                class="m-auto hover:text-[#E16A61]"
                class:text-blue-400={$page.url.pathname === "/fotky"}
                >Fotky</a
              >
              <!--a
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
              -->
            {/if}
            <a
              sveltekit:prefetch
              href="/program"
              class="m-auto hover:text-[#E16A61]"
              class:text-blue-400={$page.url.pathname === "/program"}>Program</a
            >
            <a
              sveltekit:prefetch
              href="/navstevnici"
              class="m-auto hover:text-[#E16A61]"
              class:text-blue-400={$page.url.pathname === "/navstevici"}>Návštěvníci</a
            >
            <a
              sveltekit:prefetch
              href="/gratulujeme"
              class="m-auto hover:text-[#E16A61]"
              class:text-blue-400={$page.url.pathname === "/gratulujeme"}>Gratulujeme</a
            >
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