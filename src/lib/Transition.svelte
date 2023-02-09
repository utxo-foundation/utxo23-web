<script>
    import { fly } from "svelte/transition";
    
    export let key;
    export let type = 'fly';
</script>


{#key key}
    {#if type == 'random'}
        <div
            in:fly={{ y: Math.random() * 100 - 50, duration: Math.random() * 2000 + 500, delay: Math.random() * 500}}
            
        >
            <slot />
        </div>
    {:else}
        <div
            in:fly={{ y: -50, duration: 250, delay: 300}}
            out:fly={{ y: -50, duration: 250}}
        >
            <slot />
        </div>
    {/if}
{/key}