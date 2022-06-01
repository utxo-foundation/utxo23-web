import { parsePeriod } from "$lib/periods.js";
import { formatCET } from "$lib/utils.js";

function extendEvents(arr, _bundle) {
  for (const ev of arr) {
    ev._event = _bundle.spec.events.find((e) => e.id === ev.event);
  }
  return arr;
}

export function genStatus(_bundle, stageStatus) {
  //const now = new Date(`2022-06-05T${format(new Date(), "HH:mm:ss")}`);
  //const now = new Date();
  const now = new Date(`2022-06-04T13:25`)

  let globalNextEvents = _bundle.spec.schedule.filter((ev) => {
    return new Date(ev.period.end).getTime() > now.getTime();
  });

  const stages = _bundle.spec.stages;
  for (const stage of stages.filter((s) => s.livestream)) {
    let allEvents = globalNextEvents.filter((e) => e.stage === stage.id);
    let nextEvents = [...allEvents];
    let current = null;
    if (
      nextEvents.length > 0 &&
      new Date(nextEvents[0].period.start).getTime() <= now.getTime()
    ) {
      current = nextEvents[0];
      nextEvents = nextEvents.slice(1);
    }

    let breakType = "break";

    const allStreams = stage.streams.map((st) => parsePeriod(_bundle, st));
    const nextStreams = allStreams.filter(
      (s) => s.period.end.getTime() >= now.getTime()
    );
    if (nextStreams.length === 0) {
      nextStreams.push(allStreams[allStreams.length - 1]);
    }
    let currentPercentage = null;
    if (current) {
      let duration =
        (new Date(current.period.end).getTime() -
          new Date(current.period.start).getTime()) /
        1000;
      let elapsed = Math.floor(
        (now.getTime() - new Date(current.period.start).getTime()) / 1000
      );
      currentPercentage = elapsed / (duration / 100);
    }

    if (!current && nextEvents[0] && allEvents[0].id === nextEvents[0].id) {
      breakType = "beforeStart";
    }
    if (!current && nextEvents.length === 0) {
      breakType = "afterEnd";
    }

    const day = formatCET(
      new Date(nextStreams[0].period.start),
      "yyyy-MM-dd"
    );
    let ctime = 0;
    if (day === "2022-06-05") {
      ctime = 2;
    }
    const scheduleLink = `/program?time=${ctime}&stage=${stage.id}&desc=true`;

    stageStatus[stage.id] = {
      current: current ? extendEvents([current], _bundle)[0] : null,
      currentPercentage,
      next: extendEvents(nextEvents.slice(0, 2), _bundle),
      stream: nextStreams[0],
      scheduleLink,
      breakType,
    };
  }
  return stageStatus
}

