<script>
  import { formatCET } from "$lib/utils.js";
  import { cs } from "date-fns/locale/index.js";

  export let item;
  export let e;
  export let bundle;

  $: stage = bundle
    ? bundle.spec.stages.find((s) => s.id === item.stage)
    : null;
  const start = new Date(item.period.start);
  const end = new Date(item.period.end);
</script>

<div class="font-semibold">
  {formatCET(start, "yyyy-MM-dd") === "2022-06-04" ? "SO" : "NE"}
  {formatCET(start, "HH:mm")}-{formatCET(end, "HH:mm")} ({stage ? stage.name : "n/a"})
</div>
