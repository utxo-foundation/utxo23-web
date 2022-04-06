<script>
	import { page } from '$app/stores';
	import { bundle, userData } from '$lib/stores';
  import SocialButtons from '$lib/SocialButtons.svelte';

  function logoClick () {
    userData.update(ud => {
      ud.hpTrack = 'top'
      return ud
    })
  }

</script>

<header class="relative" style="background-color: #32375C;">
  <!--		<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li> -->
	<nav class="relative mx-auto py-6 px-6 max-w-6xl text-center">
    <div class="">
      <div class="sm:flex flex-wrap space-x-10">
        <div class="block justify-start flex-1 my-auto">
          <a href="/" on:click={logoClick}><img src="/img/logo-white.svg" class="w-26" alt="UTXO.22" /></a>
        </div>
        <div class="sm:flex sm:space-x-10 uppercase text-sm font-bold text-white">
          <a sveltekit:prefetch href="/" class="m-auto hover:text-[#E16A61]" class:text-blue-400={$page.url.pathname === '/'}>O konferenci</a>
          <a sveltekit:prefetch href="/program" class="m-auto hover:text-[#E16A61]"  class:text-blue-400={$page.url.pathname === '/program'}>Program</a>
          <a sveltekit:prefetch href="/vstupenky" class="border-solid border border-[#E16A61] rounded-full py-2 px-8 {$page.url.pathname === '/vstupenky' ? 'border-0 bg-utxo-gradient' : 'hover:border-0 hover:my-px hover:bg-utxo-gradient' }">Vstupenky</a>
        </div>
        <SocialButtons />
      </div>
    </div>
	</nav>
</header>

<style>
</style>
