import { format, compareAsc, compareDesc } from "date-fns";

export function formatCET (...args) {

  const TZoffset = new Date().getTimezoneOffset()
  if (TZoffset !== -120) {
    const co = (120-(-TZoffset))
    args[0] = args[0].getTime() + (co*60*1000)
  }
  return format(...args)
}
