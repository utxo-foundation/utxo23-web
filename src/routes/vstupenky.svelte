<script context="module">
	export const prerender = true;
</script>

<script>
  import { onMount } from 'svelte';
  import { faker } from '@faker-js/faker';
  import { orderTicketForm, apiStatus } from '$lib/stores';
  //import btcPay from 'https://btcpay.utxo.cz/modal/btcpay.js';
  import api from '$lib/api.js';

  const orderTicketFormLS = localStorage.getItem('orderTicketForm')
  let parsed = JSON.parse(orderTicketFormLS)
  if (parsed.__v === $orderTicketForm.__v) {
    orderTicketForm.set(parsed)
  }
 
  onMount(async () => {
    apiStatus.set(await api.apiCall('status'))
  })

  faker.locale = 'cz';
  let orderError = null

  $: count = $apiStatus ? [...Array($apiStatus.config.maxTickets).keys()].map(i => i+1) : [];

  function selectPaymentMethod (el) {
    orderTicketForm.update(f => {
      f.paymentMethod = el.target.value
      return f
    })
  }

  function ticketFormCountArray (count) {
    return [...Array(count).keys()].map(i => i)
  }

  function processOrderError (error) {
    if (typeof error === 'string') {
      return { title: error }
    }
    const out = { title: error.title }
    if (error.formErrors && error.formErrors.length > 0) {
      let suberrs = []
      if (error.formErrors.find(fe => fe.instancePath === '/email')) {
        suberrs.push(`Neplatný email`)
      }
     
      let ticket = null
      if (error.formErrors.find(fe => ticket = fe.instancePath.match(/\/tickets\/(\d+)\/twitter/))) {
        suberrs.push(`Neplatný Twitter účet (Vstupenka #${Number(ticket[1])+1}).`)
      }
      out.title = 'Nesprávně vyplněný formulář: ' + (suberrs.length > 0 ? suberrs.join(',') : 'neznámá chyba')
      out.debug = error.formErrors

    }
    if (!out.title) {
      out.title = 'Neznámá chyba, zkuste to prosím později.'
    }
    console.log(out)
    return out
  }

  async function submitOrderHandler () {
    // order process

    // clean previous errors
    $: orderError = null

    const cloned = Object.assign({}, $orderTicketForm)
    cloned.tipCustom = Number(cloned.tipCustom)
    cloned.totalPrice = totalPrice
    const resp = await api.submitOrder(cloned)

    if (resp.error) {
      $: orderError = processOrderError(resp.error)
      return null;
    }
    if (!resp.ok || !resp.payment.checkoutUrl) {
      return null
    }

    window.location.replace(resp.payment.checkoutUrl)
  }

  let tickets = 0

  orderTicketForm.subscribe(f => {
    if (f.count !== tickets) {
      tickets = f.count
      orderTicketForm.update(cf => {
        f.tickets = f.tickets.slice(0, f.count)
        for (let i = 0; i < f.count; i++) {
          console.log(i)
          if (!f.tickets[i]) {
              f.tickets[i] = { name: '', org: '', twitter: '', extras: { kino: false } }
          }
        }
        return f
      })
    }
    localStorage.setItem('orderTicketForm', JSON.stringify(f))
  })

  function changeTip (perc) {
    return () => {
      orderTicketForm.update(of => {
        of.tipPercent = perc
        of.tipCustom = ''
        return of
      })
    }
  }

  orderTicketForm.subscribe(of => {
    const val = Number(of.tipCustom)
      if (val === NaN || !val || val < 1 || !String(val).match(/^\d+$/)) {
      of.tipCustom = ''
    }
    else if (val && val > 0 && of.tipPercent > 0) {
      of.tipPercent = 0
    }
    return of
  })

  function roundPrice (num) {
    return Math.round(num * 100) / 100
  }

  function extrasStatsRender (form) {
    let obj = {}
    $apiStatus.config.extras.forEach(ex => {
      obj[ex.id] = { count: 0, sum: 0, price: ex.price }
      form.tickets.forEach(t => {
        if (t.extras[ex.id]) {
          obj[ex.id].count++
          obj[ex.id].sum = obj[ex.id].count * ex.price
        }
      })
    })
    let arr = Object.keys(obj).map(key => Object.assign({ id: key }, obj[key]))
    return {
      sum: arr.reduce((p, c) => p + c.sum, 0),
      arr
    }
  }

  $: extrasStats = $apiStatus ? extrasStatsRender($orderTicketForm) : {}
  $: ticketPrice = $apiStatus && $apiStatus.wave ? $orderTicketForm.count * $apiStatus.wave.price : 0
  $: totalBeforeTip = ticketPrice + extrasStats.sum
  $: tip = roundPrice($orderTicketForm.tipPercent > 0 ? $orderTicketForm.tipPercent * (totalBeforeTip/100) : Number($orderTicketForm.tipCustom))
  $: totalPrice = totalBeforeTip + tip

</script>

<svelte:head>
  <title>Vstupenky | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web">
  <div class="">
    <h1 class="uppercase text-2xl font-bold">Vaše vstupenky</h1>
    <div class="mt-4">Nemáte žádnou vstupenku</div>
  </div>
  {#if $apiStatus}
  <div class="mt-10 mb-10">
    <h1 class="uppercase text-2xl font-bold">Nákup vstupenek</h1>
    {#if !$apiStatus.wave}
      <div class="mt-4">V současné době nelze zakoupit vstupenky.</div>
    {:else}
    <div class="border rounded-md p-4 shadow-md mt-4">
      <div class="mb-4">
        Datum konání: <span class="font-bold">4. - 5. červen 2022</span> (sobota - neděle)<br/>
        Místo: <span class="font-bold">Gabriel Loci</span>, Praha 5<br/><br/>
        Aktuální cena vstupenky: <span class="font-bold">{$apiStatus.wave.price} Kč</span> / osobu ({ $apiStatus.wave.name })
      </div>
      <div class="md:flex gap-3">
        <div class="md:w-1/2 p-2">
          <div class="font-bold uppercase">✅ &nbsp;Vstupenka obsahuje:</div>
          <div class="mt-4">
            <div class="mb-2">• přístup na všechny přednášky, workshopy a další události v rámci konference (do naplnění kapacity sálu)</div>
            <div class="mb-2">• platnost oba dva konferenční dny (sobota + neděle)</div>
            <div class="mb-2">• přístup na <span class="font-bold">UTXO.Party</span> během sobotního večera/noci</div>
            <div>• skvělou možnost networkingu v rámci lokální kryptokomunity</div>
          </div>
        </div>
        <div class="md:w-1/2 p-2 md:mt-0 mt-3">
          <div class="font-bold uppercase">❌ &nbsp;Vstupenka NEobsahuje:</div>
          <div class="mt-4">
            <div class="mb-2">• jídlo nebo pití - teplé i studené občerstvení bude možné zakoupit na místě, platba kartou nebo Lightning Network (LN)</div>
            <div>• v případě menších přednášejících sálů negarantujeme místo pro každého</div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 bg-blue-web-light rounded-md mt-6 text-blue-web shadow-md">
      <div>
        <div class="uppercase text-sm font-bold">Email</div>
        <div class="mt-2 text-sm">Kontaktní email, na který budou zaslány vstupenky.</div>
        <div class="mt-2"><input type="text" class="border border-blue-web rounded-md p-2 w-full lg:w-1/2 text-blue-web" bind:value={$orderTicketForm.email} /></div>
      </div>
      <div class="mt-6">
        <div class="uppercase text-sm font-bold">Počet vstupenek</div>
        <div class="mt-2 flex gap-3">
          <select name="count" id="count" class="border border-blue-web rounded-md p-2 text-blue-web" bind:value={$orderTicketForm.count}>
            {#each count as i}
              <option value={i}>{i}</option>
            {/each}
          </select>
          <div class="my-auto">
            × <span class="font-bold">{$apiStatus.wave.price} Kč</span> (cena vstupenky)
          </div>
        </div>
        </div>
      <div class="mt-6">
        <div class="uppercase text-sm font-bold">Vstupenky a příplatky</div>
        <div class="mt-2 text-sm">Informace, které budou vytištěné na Vaší konferenční jmenovku. Tyto údaje jsou nepovinné a je možné je změnit později.</div>
      </div>
      <div class="mt-2">
        {#each ticketFormCountArray($orderTicketForm.count) as i}
          <div class="p-4 bg-utxo-gradient text-white rounded-md mb-6 shadow-md">
            <div class="">
              <div class="uppercase font-bold">Vstupenka #{i+1}</div>
              <div class="md:flex gap-2">
                <div class="mt-2 flex-1">
                  <div class="uppercase text-sm">Jméno (Přezdívka)</div>
                  <div class="mt-2"><input type="text" maxlength="25" class="border border-blue-web rounded-md p-2 w-full text-blue-web" bind:value={$orderTicketForm.tickets[i].name} placeholder="{faker.name.findName()}" /></div>
                </div>
                <div class="mt-2 flex-1">
                  <div class="uppercase text-sm">Organizace (Firma)</div>
                  <div class="mt-2"><input type="text" maxlength="25" class="border border-blue-web rounded-md p-2 w-full text-blue-web" bind:value={$orderTicketForm.tickets[i].org} placeholder="{faker.company.companyName()}" /></div>
                </div>
                <div class="mt-2">
                  <div class="uppercase text-sm">Twitter účet</div>
                  <div class="mt-2"><input type="text" maxlength="25" class="border border-blue-web rounded-md p-2 w-full text-blue-web" bind:value={$orderTicketForm.tickets[i].twitter} placeholder="@{faker.internet.userName()}" /></div>
                </div>
              </div>
              <div class="uppercase text-sm font-bold mt-3">Volitelné příplatky</div>
              <div class="mt-1">
                {#each $apiStatus.config.extras as ex}
                  <div><label class="cursor-pointer"><input type="checkbox" class="mr-0.5 cursor-pointer" bind:checked={$orderTicketForm.tickets[i].extras[ex.id]} /> <span class="font-semibold">{ex.name} ({ex.price} Kč)</span></label> - <span class="text-sm">{ex.desc}</span></div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-6">
        <div class="uppercase text-sm font-bold">Dýško pro organizátory</div>
        <div class="mt-2 flex flex-wrap gap-2">
          {#each $apiStatus.config.tipPercentages as tp}
            <button class="block py-1.5 px-4 min-w-16 {$orderTicketForm.tipPercent === tp[0] && $orderTicketForm.tipCustom < 1  ? (tp[0] === 0 ? 'bg-gray-400' : 'bg-blue-web' )+' rounded-full text-white shadow-lg' : 'border border-solid border-blue-web rounded-full'}" on:click={changeTip(tp[0])}>{tp[1] || tp[0] + '%'}</button>
          {/each}
          <div class="px-2 py-1 {$orderTicketForm.tipCustom > 0 ? 'px-5 border border-blue-web rounded-full bg-blue-web text-white' : ''}">Jiná částka: <input class="border border border-blue-web rounded-md px-2 py-1 text-blue-web w-16" bind:value={$orderTicketForm.tipCustom} /> Kč</div>
        </div>
      </div>
      <div class="mt-8">
        <div class="uppercase text-sm font-bold">Platební metoda</div>
        <div class="mt-2">
          {#each $apiStatus.config.paymentMethods as pm}
            <div class="mb-2">
              <label class="cursor-pointer"><input checked={$orderTicketForm.paymentMethod === pm.id} name="paymentMethod" value="{pm.id}" type="radio" on:change={selectPaymentMethod} class="cursor-pointer" /> {pm.name}</label>
            </div>
          {/each}
        </div>
      </div>
      <div class="mt-6 py-3 px-4 bg-white rounded-md shadow-md text-sm">
        <div class="uppercase text-sm font-bold">Shrnutí objednávky</div>
        <div class="mt-1.5">
          <table cellpadding="5" class="table-auto">
            <tr>
              <td>{$orderTicketForm.count}× UTXO.22 vstupenka ({$apiStatus.wave.price} Kč)</td>
              <td>{ticketPrice} Kč</td>
            </tr>
            {#if extrasStats.sum > 0}
              {#each extrasStats.arr as es}
                <tr>
                  <td>{es.count}× {$apiStatus.config.extras.find(e => e.id === es.id).shortname} ({es.price} Kč)</td>
                  <td>{es.sum} Kč</td>
                </tr>
              {/each}
            {/if}
            {#if tip > 0}
              <tr>
                <td>dýško pro organizátory ({$orderTicketForm.tipPercent > 0 ? $orderTicketForm.tipPercent + '%' : $orderTicketForm.tipCustom + ' Kč'})</td>
                <td>{tip} Kč</td>
              </tr>
            {/if}
            <tr>
              <th align="right">Celkem:</th>
              <th class="font-bold">{totalPrice} Kč<th>
            </tr>
          </table>
        </div>
        <div class="mt-1.5">Platební metoda: <span class="font-bold">{#if $orderTicketForm.paymentMethod === 'btcpay'}Bitcoin{:else}Platební karta{/if}</span></div>
      </div>
      <div class="mt-6">
        <button class="hover:bg-utxo-gradient bg-[#E16A61] text-white font-semibold rounded-full shadow-md" on:click={submitOrderHandler}><div class="py-2 px-4">Odeslat objednávku - zaplatit {totalPrice} Kč {#if $orderTicketForm.paymentMethod === 'btcpay'}bitcoinem{:else}platební kartou{/if}</div></button>
        {#if orderError}
          <div class="py-2 px-3 mt-4 text-red-600 bg-red-200 rounded-xl shadow-md">Chyba: {orderError.title}</div>
        {/if}
      </div>
    </div>
    {/if}
  </div>
  <!--pre>{JSON.stringify($orderTicketForm, null, 2)}</pre>
  <pre>{JSON.stringify(extrasStats, null, 2)}</pre -->
  {/if}
</section>

