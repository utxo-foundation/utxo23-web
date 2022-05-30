<script>
  import { format, formatDistanceToNow } from "date-fns";
  import { cs } from "date-fns/locale/index.js";

  export let item;
  export let e;
  export let bundle;

  $: stage = bundle ? bundle.spec.stages.find(s => s.id === item.stage) : null
  const start = new Date(item.period.start)
  const end = new Date(item.period.end)
</script>

<div class="font-semibold">{format(start, 'iiii', { locale: cs }).substring(0,2).toUpperCase()} {format(start, 'HH:mm')}-{format(end, 'HH:mm')} ({stage ? stage.name : 'n/a'})</div>
