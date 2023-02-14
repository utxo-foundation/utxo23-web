<script>
    import { page } from "$app/stores";
    import SocialButtons from "$lib/SocialButtons.svelte";

    let hiddenMenu = true;

    let links=[
      {
        text: "Vstupenky",
        url: "https://vstupenky.utxo.cz/23/",
        newWindow: true
      },
      {
        text: "Program",
        url: "/program",
        newWindow: false
      },
      {
        text: "Praktické",
        url: "/prakticke",
        newWindow: false
      },
      {
        text: "Mapa",
        url: "/mapa",
        newWindow: false
      },
      {
        text: "Záznamy",
        url: "https://utxo.tv/",
        newWindow: true
      },
      {
        text: "Fotky 2022",
        url: "/fotky",
        newWindow: false
      }
    ]
  
    function logoClick() {
      userData.update((ud) => {
        ud.hpTrack = "top";
        return ud;
      });
    }

    function hideMenu(){
      if(hiddenMenu == false) hiddenMenu=true;
    }

    function showMenu(){
      hiddenMenu=false;
    }
  </script>



<nav class="px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap items-center justify-between mx-auto max-w-7xl">
    {#if $page.url.pathname !== "/"}
      <a href="/" class="flex">
          <img src="/img/logo-only-white.svg" class="h-6 mr-3 sm:h-9" alt="UTXO 23 Logo" />
      </a>
    {:else}
      <div class="flex"></div>
    {/if}
    <button on:click={showMenu} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Otevřít menu</span>
      <i class="fa-sharp fa-solid fa-bars fa-2x"></i>
    </button>
    
    <div
      class="{hiddenMenu ? 'hidden' : 'block' } fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto" id="navbar-default"
    >
      <button on:click={hideMenu}  type="button" class="{hiddenMenu && 'hidden' } absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Zavřít menu</span>
        <i class="fa-solid fa-xmark fa-2x"></i>
      </button>
      <div class="flex flex-col md:flex-row my-auto w-full">
        <a on:click={hideMenu} href="/" class="flex md:hidden">
          <img src="/img/logo.svg" class="h-10 m-auto" alt="UTXO 23 Logo" />
        </a>
        <ul class="flex shrink-0 flex-col p-4 mt-4 text-center text-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {#each links as el}
                <li class="relative">
                  <a
                      sveltekit:prefetch
                      href={el.url}
                      target="{el.newWindow ? "_blank" : "_self"}"
                      on:click={hideMenu}
                      class="
                        block py-4 pl-3 pr-4 text-white rounded 
                        hover:bg-white/20 md:hover:bg-transparent 
                        md:border-0 md:hover:underline 
                        md:hover:decoration-custom-green md:hover:decoration-2 
                        md:hover:underline-offset-4 md:p-0
                        {$page.url.pathname === el.url && "md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple"}
                        "
                      >{el.text}</a
                    >
                    <div class="md:hidden border-b absolute bottom-0 left-1/4 border-custom-green/50 w-1/2"></div>
                    
                </li>
              
            {/each}
          </ul>
          <div class="m-auto">
            <SocialButtons size="small" />
          </div>
        </div>
      </div>
  </div>
</nav>
