<script>
  import { bundle } from "$lib/stores";
  import SocialButtons from "$lib/SocialButtons.svelte";
  import { version } from "$lib/version.js";
</script>

{#if $bundle}
  <div class="bg-blue-web-bg text-white">
    <div
      class="relative mx-auto px-6 pt-10 pb-2 sm:pb-6 max-w-6xl sm:flex pr-4"
    >
      <div class="flex-1">
        <div>
          <a href="/"
            ><img src="/img/logo-white.svg" alt="UTXO.22" class="w-32" /></a
          >
        </div>
        <div class="mt-4 font-semibold">
          4.-5. červen 2022 @ Gabriel Loci, Praha
        </div>
        <div class="mt-2 font-thin">
          Otevřená komunitní kryptoměnová konference
        </div>
        <div class="mt-4">
          <a
            href={$bundle.links.docs}
            class="hover:text-red-500"
            target="_blank"><i class="fas fa-book" />&nbsp; Dokumentace</a
          >
        </div>
      </div>
      <div class="sm:mt-0 mt-6 sm:w-1/3 mr-2">
        <SocialButtons size="normal" />
      </div>
    </div>
    <div
      class="relative mx-auto px-6 pt-10 pb-6 max-w-6xl text-xs opacity-50 sm:flex"
    >
      <div class="flex-1 mt-2 mb-2">
        <i class="fas fa-heart text-red-500" /> S láskou organizuje
        <a
          href="https://utxo.foundation"
          class="underline hover:no-underline"
          target="_blank">UTXO Foundation, z.s.</a
        >
      </div>
      <div>
        <a href="https://github.com/utxo-foundation/utxo22-web" target="_blank"
          ><span class="font-bold">v{version}</span></a
        >
        | powered by
        <a href="https://svelte.dev/" class="font-bold" target="_blank"
          ><img src="/img/svelte-logo.svg" class="w-5 inline" alt="Svelte" /> Svelte</a
        >
        | grafický návrh
        <a href="https://www.ppmedia.cz/" target="_blank"
          ><img
            src="/img/pen-production-logo.svg"
            class="w-28 inline-block pb-2 ml-1"
            alt="Pen&Production"
          /></a
        >
      </div>
    </div>
  </div>
{/if}
