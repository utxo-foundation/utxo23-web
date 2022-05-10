<script>
  export let event = {};
  export let size = null;

  const config = {
    panel: { title: "Panelová debata", style: "bg-custom-red text-white" },
    talk: { title: "Přednáška", style: "bg-custom-green text-white" },
    workshop: { title: "Workshop", style: "bg-custom-blue text-white" },
    lightning: { title: "Blesková přednáška", style: "bg-pink-400" },
    "lightning-series": {
      title: "Pásmo bleskových přednášek",
      style: "bg-pink-400",
    },
    campfire: { title: "Campfire", style: "bg-purple-500" },
    other: { title: "Ostatní", style: "bg-custom-yellow" },
  };

  $: current = config[event.type];
</script>

<div class="flex {size === 'big' ? 'h-6 text-sm' : 'h-5 text-xs'}">
  <div class="w-1 rounded-l-sm {current.style}" />
  <div
    class="{size === 'big'
      ? 'px-2 py-0.5'
      : 'px-1.5 py-0.5'} rounded-r-sm bg-gray-100 uppercase"
  >
    {current.title}
  </div>
</div>
