<script>
  export let href = ''
  export let title = undefined
</script>

<a {href} {title} class="underline hover:no-underline" target="_blank"><slot></slot></a>
