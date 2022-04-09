<script>
  export let speaker;
  export let col = 'speakers';
  export let size = 'normal';

  import SvelteMarkdown from 'svelte-markdown';
  import { page } from '$app/stores';

  let imagesRoot = 'https://spec.utxo.cz/22/photos'
  /*if ($page.url.hostname === 'localhost') {
    imagesRoot = 'http://localhost:8000/22/photos'
  }*/
  const priority = [ 'web:svg', 'web:webp', 'web:png', 'web:jpg', 'twitter:jpg' ]

  let speakerImg = null
  let speakerImgAlt = null

  if (speaker.photos && speaker.photos.length > 0) {
    for (const prio of priority) {
      if (speaker.photos.includes(prio)) {
        const [ ext, format ] = prio.split(':')
        const fn = `${imagesRoot}/${col}/${speaker.id}-${ext}.${format}`
        if (speakerImg) {
          $: speakerImgAlt = fn
          break
        }
        $: speakerImg = fn
      }
    }
  }

  if (!speakerImg) {
    speakerImg = '/img/twitter-avatar.png'
  }

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  $: country = getFlagEmoji(speaker.country)
  $: currentImg = speakerImg

  function mouseOver () {
    if (speakerImgAlt) {
      $: currentImg = speakerImgAlt
    }
  }
  function mouseLeave () {
    $: currentImg = speakerImg
  }

</script>

{#if size === 'big'}
<div class="w-64 text-center pb-4 m-auto">
  <img src={currentImg} class="w-64 rounded-full m-auto shadow-xl" alt={speaker.name}  on:mouseover={mouseOver} on:mouseleave={mouseLeave} />
</div>
{/if}

{#if size === 'normal'}
<div class="w-36 sm:w-44 text-center pb-4">
  <a href="/lide?id={speaker.id}" on:mouseover={mouseOver} on:mouseleave={mouseLeave}><img src={currentImg} class="w-36 sm:w-40 rounded-full m-auto shadow-xl" alt={speaker.name} /></a>
  <div class="mt-4 text-sm text-blue-web uppercase font-bold"><a href="/lide?id={speaker.id}">{speaker.name}</a> {country}</div>
  {#if speaker.bio || speaker.orgs}
    <div class="mt-1 text-xs text-blue-web italic"><SvelteMarkdown source={speaker.bio || speaker.orgs} /></div>
  {/if}
</div>
{/if}

{#if size === 'small'}
<div class="w-16 text-center">
  <img src={currentImg} class="w-16 rounded-full m-auto" alt="{speaker.name}" />
</div>
{/if}

{#if size === 'semi-small'}
<div class="w-10 text-center">
  <img src={currentImg} class="w-10 rounded-full m-auto shadow-md" alt="{speaker.name}" />
</div>
{/if}

{#if size === 'extra-small'}
<div class="w-6 h-6 text-center">
  <a href="/lide?id={speaker.id}"><img src={currentImg} class="w-6 rounded-full m-auto" alt="{speaker.name}" /></a>
</div>
{/if}

{#if size === 'micro'}
<div class="w-4 h-4 text-center">
  <a href="/lide?id={speaker.id}"><img src={currentImg} class="w-4 rounded-full m-auto" alt="{speaker.name}" /></a>
</div>
{/if}

