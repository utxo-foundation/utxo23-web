<script>
	import { page } from '$app/stores';
	import { bundle, userData, userDataLocal } from '$lib/stores';
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
	<nav class="relative mx-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-center">
    <div class="">
      <div class="lg:flex lg:flex-wrap lg:space-x-10">
        <div class="block justify-start lg:flex-1 my-auto text-center pb-3 lg:pb-0">
          <div class="w-36 lg:w-24 inline-block lg:block"><a href="/" on:click={logoClick}><img src="/img/logo-white.svg" class="w-full" alt="UTXO.22" /></a></div>
        </div>
        <div class="flex lg:space-x-10 uppercase text-sm font-bold text-white">
          <a sveltekit:prefetch href="/" class="lg:w-auto w-1/3 m-auto hover:text-[#E16A61]" class:text-blue-400={$page.url.pathname === '/'}>O konferenci</a>
          <a sveltekit:prefetch href="/program" class="lg:w-auto w-1/3 m-auto hover:text-[#E16A61]"  class:text-blue-400={$page.url.pathname === '/program'}>Program</a>
          <a sveltekit:prefetch href="/vstupenky" class="lg:w-auto w-1/3 m-auto border-solid border border-[#E16A61] rounded-full {$page.url.pathname === '/vstupenky' ? 'border-0 bg-utxo-gradient m-px' : 'hover:border-0 hover:bg-utxo-gradient hover:p-px' }"><div class="py-2 px-1 lg:px-8">Vstupenky{#if $userDataLocal.tickets && $userDataLocal.tickets.length > 0}&nbsp;({$userDataLocal.tickets.length}){/if}</div></a>
        </div>
        <div class="hidden lg:block my-auto lg:flex-1 lg:pt-0 pt-4 lg:justify-end justify-center">
          <SocialButtons />
        </div>
      </div>
    </div>
	</nav>
</header>

<style>
</style>
