<script>
  export let event = {};
  export let size = null;
  export let black = false;

  const textColor = black ? 'text-black' : 'text-white'

  const config = {
    panel: { title: "Panelová debata", style: "bg-orange-400" },
    talk: { title: "Přednáška", style: "bg-custom-green" },
    workshop: { title: "Workshop", style: "bg-custom-blue" },
    lightning: { title: "Blesková přednáška", style: "bg-pink-400" },
    "lightning-series": {
      title: "Pásmo bleskových přednášek",
      style: "bg-yellow-400",
    },
    campfire: { title: "Campfire", style: "bg-purple-400" },
    other: { title: "Ostatní", style: "bg-rose-400" },
  };

  $: current = config[event.type];
</script>

<div class="flex {size === 'big' ? 'h-6 text-sm' : 'h-5 text-xs'}">
  <div
    class="{size === 'big'
      ? 'px-2 py-0.5'
      : 'px-1.5 py-0.5'} {current.style} rounded-sm bg-gray-100 uppercase {textColor}"
  >
    {current.title}
  </div>
</div>
