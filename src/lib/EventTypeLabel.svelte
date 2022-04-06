<script>
  export let event = {};

  const config = {
    panel: { title: 'Panelová debata', style: 'bg-custom-red text-white' },
    talk: { title: 'Přednáška', style: 'bg-custom-green text-white' },
    workshop: { title: 'Workshop', style: 'bg-custom-blue text-white' },
    other: { title: 'Ostatní', style: 'bg-custom-yellow' },
  }

  const current = config[event.type];

</script>

<div class="text-xs flex h-5">
  <div class="w-1 rounded-l-sm {current.style}"></div>
  <div class="px-1.5 py-0.5 rounded-r-sm bg-gray-100 uppercase">{current.title}</div>
</div>

