<script>
  import { page } from "$app/stores";
  import { bundle, userData, userDataLocal, apiStatus } from "$lib/stores";
  import Navbar from "$lib/Navbar.svelte";
  import Logo from "$lib/Logo.svelte";
  import { fade } from 'svelte/transition';


  function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}


  function logoClick() {
    userData.update((ud) => {
      ud.hpTrack = "top";
      return ud;
    });
  }
</script>

{#if !['/kiosk', '/tv-screen'].includes($page.url.pathname)}
<header
class="relative bg-center bg-cover {$page.url.pathname !== '/tv'
    ? "bg-[url('/img/utxo23-bg.jpg')]"
    : ''} bg-no-repeat bg-custom-darkestpurple print:hidden"
>
<div class="flex flex-col bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-purple/80 {$page.url.pathname == '/' ? 'min-h-[100vh]' : 'bg-gradient-to-r to-custom-purple/60'}">
  <div>
    <Navbar />
  </div>
  {#if $page.url.pathname === "/"}
  <div
      
      class="w-full m-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-left text-white"
    >
      <div class="my-8">
        <div
        in:fade={{ duration: 2000, delay: 500}}
          class="uppercase font-semibold m-auto text-md text-center text-white/90"
        >
          Otevřená komunitní kryptoměnová konference
        </div>
        <div class="my-8">
          <a href="/" on:click={logoClick}
            ><Logo duration="1500" classes="w-3/4 md:w-1/2 m-auto" /></a
          >
        </div>
        <div
        in:fade={{ duration: 2000, delay: 500}}
          class="my-8 flex flex-wrap gap-3 lg:gap-10 text-lg lg:text-xl font-semibold justify-center"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"
            >
              <i class="fa-regular fa-calendar-days text-custom-white" />
            </div>
            <div class="text-white">2.-4. červen 2023</div>
          </div>
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"
            >
              <i class="fa-solid fa-location-dot text-white" />
            </div>
            <div class="text-white">Gabriel Loci, Praha</div>
          </div>
        </div>
        <div class="flex my-16 gap-4 flex-wrap">
          <div class="text-center w-full">
              <a
              in:fade={{ duration: 2000, delay: 500}}
                href="https://vstupenky.utxo.cz/23/"
                class="rounded-2xl bg-utxo-gradient uppercase shadow-lg text-sm py-6 px-10 hover:text-base hover:font-bold transition-all"
                >Koupit vstupenky</a
              >
          </div>
          {#if $apiStatus && $apiStatus.wave}
            <div class="my-auto sm:mt-0 mt-2 sm:ml-0 ml-2 italic opacity-50">
              Zbývá <span class="font-bold">{$apiStatus.wave.live.left}</span>
              vstupenek (za {$apiStatus.wave.price} Kč)
            </div>
          {/if}
          </div>
      </div>
      <!--div class="mt-6 lg:mt-0 text-left sm:text-right lg:pr-20 mb-2 text-xl">
        <Countdown />
      </div-->
    </div>
    <div class="h-16 flex-none text-center py-4">
      <a href="#below-header" on:click={handleAnchorClick}><i class="fa-regular fa-circle-down fa-2x text-white/70 hover:text-white"></i></a>
    </div>
    <div id="below-header"></div>
  {/if}
</div>
</header>
{/if}