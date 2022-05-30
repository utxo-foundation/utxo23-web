import { format, compareAsc, compareDesc } from "date-fns";

const TZoffset = (new Date()).getTimezoneOffset()

export function formatCET (...args) {

  if (TZoffset !== -120) {
    const co = (120-(-TZoffset))
    args[0] = args[0].getTime() + (co*60*1000)
  }
  return format(...args)
}
