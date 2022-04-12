<script>
  export let target = new Date("2022-06-04T09:00+02:00");

  import { format, formatDistanceToNow } from "date-fns";

  const units = {
    day: 86400 * 1000,
    hour: 3600 * 1000,
    minute: 60 * 1000,
    second: 1 * 1000,
  };

  function cz(type, num) {
    let s;
    switch (type) {
      case "den":
        s = num === 1 ? "den" : num < 5 ? "dny" : "dní";
        break;
      default:
        s =
          type.substring(0, type.length - 1) +
          (num === 1 ? "a" : num > 1 && num < 5 ? "y" : "");
        break;
    }
    return [num, s];
  }

  let str;
  const conf = [
    ["den", "day"],
    ["hodina", "hour"],
    ["minuta", "minute"],
    ["vteřina", "second"],
  ];
  function updateTime() {
    const now = new Date();
    const diff = Number(target) - Number(now);

    const out = {};
    let used = 0;
    for (const unit of Object.keys(units)) {
      out[unit] = Math.floor((diff - used) / units[unit]);
      used += out[unit] * units[unit];
    }
    str = conf.map(([x, y]) => cz(x, out[y]));
  }
  updateTime();
  setInterval(updateTime, 1000);
</script>

<div class="w-full text-xs lg:text-sm">
  <i class="fa-regular fa-clock text-3xl mr-4" />
  {#each str as item}
    <div class="inline-block mr-2 lg:mr-4">
      <span class="text-xl lg:text-3xl font-bold">{item[0]}</span>
      <span>{item[1]}</span>
    </div>
  {/each}
</div>
