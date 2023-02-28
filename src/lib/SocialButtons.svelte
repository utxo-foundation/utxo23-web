<script>
  export let size = "small";

  import bundle from "$lib/bundle.json";

  const socials = [
    { link: "twitter", ico: "fa-brands fa-twitter", name: "Twitter" },
    { link: "instagram", ico: "fab fa-instagram", name: "Instagram" },
    //{ link: "fbevent", ico: "fab fa-facebook", name: "Facebook" },
    { link: "telegram", ico: "fab fa-telegram", name: "Telegram" },
  ];
</script>

{#if bundle}
  {#if size === "small"}
    <div class="flex block space-x-6 md:space-x-2 m-auto w-full justify-end text-center">
      {#each socials as soc}
        <a
          href={bundle.links[soc.link]}
          class="w-6 h-6 bg-white rounded-lg hover:bg-utxo-gradient hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          <i class={soc.ico} />
        </a>
      {/each}
    </div>
  {/if}
  {#if size === "normal"}

    <div class="w-auto">
      <div class="sm:flex flex-wrap gap-3 justify-end">
        {#each socials as soc}
          <div class="mr-4 sm:mr-0 inline-block sm:block hover:text-custom-green">
            <a href={bundle.links[soc.link]} class="block flex" target="_blank" rel="noreferrer"
              ><i class="{soc.ico} mr-2 my-auto" />{soc.name}</a
            >
          </div>
        {/each}
      </div>
    </div>
  {/if}
{/if}
