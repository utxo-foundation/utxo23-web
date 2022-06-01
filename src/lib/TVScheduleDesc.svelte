<script>
  import { formatCET } from "$lib/utils.js";

  export let type = "break";
  export let ss = null;
</script>

{#if ss}
  {#if ss.breakType === "break"}
    <span
      >☕ Přestávka {#if ss.next[0]}do {formatCET(
          new Date(ss.next[0].period.start),
          "HH:mm"
        )}{/if}</span
    >
  {/if}

  {#if ss.breakType === "beforeStart"}
    <span
      >Zahájení přenosu {formatCET(
        new Date(ss.next[0].period.start),
        "d.M. HH:mm"
      )}</span
    >
  {/if}

  {#if ss.breakType === "afterEnd"}
    <span>Stream skončil. Děkujeme za pozornost!</span>
  {/if}
{/if}
