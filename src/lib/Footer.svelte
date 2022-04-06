<script>
	import { bundle } from '$lib/stores';
  import SocialButtons from '$lib/SocialButtons.svelte';
</script>

{#if $bundle}
<div class="bg-blue-web-bg text-white">
  <div class="relative mx-auto px-6 pt-10 pb-8 max-w-6xl flex">
    <div class="flex-1">
      <div>
        <a href="/"><img src="/img/logo.png" alt="UTXO.22" class="w-28" /></a>
      </div>
      <div class="mt-4">
        Otevřená komunitní kryptoměnová konference
      </div>
      <div class="mt-4">
        <a href="{$bundle.links.docs}" class="hover:text-red-500"><i class="fas fa-book" />&nbsp; Dokumentace</a>
      </div>
    </div>
    <SocialButtons size="normal" />
  </div>
  <div class="relative mx-auto px-6 pt-10 pb-10 max-w-6xl text-xs opacity-50">
    <i class="fas fa-heart text-red-500" /> S láskou vytváří <a href="https://utxo.foundation" class="underline hover:no-underline">UTXO Foundation, z.s.</a>
  </div>
</div>
{/if}
