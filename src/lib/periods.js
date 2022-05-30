import { format, addDays } from "date-fns";
import { formatCET } from '$lib/utils.js';

const TZoffset = new Date().getTimezoneOffset()

export function parsePeriod(bundle, str) {
    const [dayNumber, times, name] = str.split("/");
    const [start, end] = times.split("-");
    const date = bundle.dates[dayNumber - 1];

    const endDate = end > start ? date : formatCET(addDays(new Date(date), 1), 'yyyy-MM-dd')
    return {
      date,
      name,
      period: {
        start: new Date(`${date}T${start}:00.000+02:00`),
        end: new Date(`${endDate}T${end}:00.000+02:00`),
      },
    };
  }
