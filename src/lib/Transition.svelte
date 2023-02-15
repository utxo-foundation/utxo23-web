<script>
    import { fly, fade, slide, crossfade } from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    
    export let key;
    export let type;
</script>


{#key key}
    {#if type == 'random'}
        <div
            in:fly={{ y: Math.random() * 100 - 50, duration: Math.random() * 2000 + 500, delay: Math.random() * 500, easing: quintOut}}
            
        >
            <slot />
        </div>
    {:else}
        <div
            in:fly={{ y: 50, duration: 1000, easing: quintOut}}
        >
            <slot />
        </div>
    {/if}
{/key}