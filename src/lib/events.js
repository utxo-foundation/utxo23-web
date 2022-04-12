
export default function calcDuration(e, bundle) {
  if (!bundle) {
    return 0
  }
  if (e.duration) {
    return e.duration
  }
  const childrens = bundle.spec.events.filter((i) => i.parent === e.id);
  if (childrens.length > 0) {
    let total = childrens.reduce((p, c) => p + (c.duration ? c.duration : 0), 0)
    total += 5 * (childrens.length-1)
    return total
  }
}
