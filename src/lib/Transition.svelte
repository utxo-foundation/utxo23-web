<script>
    import { fly } from "svelte/transition";
    
    export let key;
</script>

{#key key}
    <div
        in:fly={{ x: -50, duration: 250, delay: 300}}
        out:fly={{ x: -50, duration: 250}}
    >
        <slot />
    </div>
{/key}