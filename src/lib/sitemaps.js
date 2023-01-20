
import { readFileSync, writeFileSync } from 'fs';

const bundle = JSON.parse(readFileSync('./src/lib/bundle.json'))

function makeItem ({ url, lastmod }) {
  if (!lastmod) {
    lastmod = new Date().toISOString()
  }
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
}

const items = []
const link = p => items.push(makeItem({ url: `https://utxo.cz/${p}` }))

// add links
link('program')
link('vstupenky')

for (const x of bundle.spec.speakers) {
  link(`prednasejici?id=${x.id}`)
}

if (bundle.spec.events) {
  for (const x of bundle.spec.events) {
    link(`udalosti?id=${x.id}`)
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items.join("\n")}
</urlset>`

//console.log(sitemap)
const outputFn = './build/sitemap.xml'
writeFileSync(outputFn, sitemap)

console.log(`Sitemap writed: ${outputFn}`)

