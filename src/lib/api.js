
export async function spec () {

  const resp = await fetch('https://spec.utxo.cz/22/bundle.json')
  return resp.json()

}
