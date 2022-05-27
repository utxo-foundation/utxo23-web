import { format, addDays } from "date-fns";

export function parsePeriod(bundle, str) {
    const [dayNumber, times, name] = str.split("/");
    const [start, end] = times.split("-");
    const date = bundle.dates[dayNumber - 1];

    const endDate = end > start ? date : format(addDays(new Date(date), 1), 'yyyy-MM-dd')
    return {
      date,
      name,
      period: {
        start: new Date(`${date}T${start}`),
        end: new Date(`${endDate}T${end}`),
      },
    };
  }
