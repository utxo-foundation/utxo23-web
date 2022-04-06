<script>
  export let size = 'small';

	import { bundle } from '$lib/stores';
	import { page } from '$app/stores';

  const socials = [
    { link: 'twitter', ico: 'fa-brands fa-twitter', name: 'Twitter' },
    { link: 'instagram', ico: 'fab fa-instagram', name: 'Instagram' },
    { link: 'fbevent', ico: 'fab fa-facebook', name: 'Facebook' },
    { link: 'discord', ico: 'fab fa-discord', name: 'Discord' },
    { link: 'telegram', ico: 'fab fa-telegram', name: 'Telegram' },
  ]
</script>

{#if $bundle}
  {#if size === 'small'}
    <div class="flex block space-x-2 m-auto w-full justify-center">
      {#each socials as soc}
        <a href="{$bundle.links[soc.link]}" class="w-6 h-6 bg-white rounded-full hover:bg-utxo-gradient hover:text-white" target="_blank">
          <i class="{soc.ico}" />
        </a>
      {/each}
    </div>
  {/if}
  {#if size === 'normal'}
    <div class="w-1/4">
      <div class="flex flex-wrap gap-3 justify-between">
        {#each socials as soc}
          <div class="block  hover:text-red-500"><a href="{$bundle.links[soc.link]}" class="" target="_blank"><i class="{soc.ico}" />&nbsp;&nbsp;{soc.name}</a></div>
        {/each}
      </div>
    </div>
  {/if}
{/if}
