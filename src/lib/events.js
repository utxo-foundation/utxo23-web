
export function calcDuration(e, bundle) {
  if (!bundle) {
    return 0
  }
  console.log(e.duration)
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

export function addFavorite(eventId, userData) {
  userData.update((data) => {
    const fe = data.favoriteEvents;
    let output = null;
    if (fe.includes(eventId)) {
      output = Object.assign({}, data, {
        favoriteEvents: fe.filter((f) => f !== eventId),
      });
    } else {
      fe.push(eventId);
      output = Object.assign(data, { favoriteEvents: fe });
    }
    //localStorage.setItem('userData', JSON.stringify(output))
    return output;
  })
}

export default function () {}

