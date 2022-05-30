<script>
  import { formatCET } from "$lib/utils.js";
  import { parse } from "date-fns";

  export let item;
  export let e;
  export let bundle;

  $: stage = bundle
    ? bundle.spec.stages.find((s) => s.id === item.stage)
    : null;

  const start = typeof(item.period.start) === 'string' ? new Date(item.period.start) : item.period.start
  const end = typeof(item.period.end) === 'string' ? new Date(item.period.end) : item.period.end
</script>

<div class="font-semibold">
  {formatCET(start, "yyyy-MM-dd") === "2022-06-04" ? "SO" : "NE"}
  {formatCET(start, "HH:mm")}-{formatCET(end, "HH:mm")} ({stage ? stage.name : "n/a"})
</div>
