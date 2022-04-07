<script context="module">
	export const prerender = true;
</script>

<script>
  import { faker } from '@faker-js/faker';
  import { orderTicketForm } from '$lib/stores';
  import api from '$lib/api.js';

  const orderTicketFormLS = localStorage.getItem('orderTicketForm')
  if (orderTicketFormLS) {
    orderTicketForm.set(JSON.parse(orderTicketFormLS))
  }

  faker.locale = 'cz';

  const paymentMethods = [
    { id: 'card', name: 'Platební karta' },
    { id: 'btcpay', name: 'Bitcoin (BTC) / Lightning Network (LNBTC)' },
  ]

  const maxTickets = 10
  const ticketPrice = 400

  const count = [...Array(maxTickets).keys()].map(i => i+1);

  function selectPaymentMethod (el) {
    orderTicketForm.update(f => {
      f.paymentMethod = el.target.value
      return f
    })
  }

  function ticketFormCountArray (count) {
    return [...Array(count).keys()].map(i => i)
  }

  async function submitOrderHandler () {
    console.log($orderTicketForm)
    const resp = await api.submitOrder($orderTicketForm)
    console.log(resp)
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
            f.tickets[i] = { name: '', org: '', twitter: '' }
          }
        }
        return f
      })
    }
    localStorage.setItem('orderTicketForm', JSON.stringify(f))
  })

</script>

<svelte:head>
  <title>Vstupenky | UTXO.22</title>
</svelte:head>

<section class="relative mx-auto py-6 sm:py-10 px-6 max-w-6xl mb-10 text-blue-web">
  <div class="">
    <h1 class="uppercase text-2xl font-bold">Vaše vstupenky</h1>
    <div class="mt-6">Nemáte žádnou vstupenku</div>
  </div>
  <div class="mt-10">
    <h1 class="uppercase text-2xl font-bold">Nákup vstupenek</h1>
    <div class="border rounded-md p-4 shadow-md mt-4">
      <div class="mb-4">
        Aktuální cena vstupenky: <span class="font-bold">{ticketPrice} Kč</span> / osobu
      </div>
      <div class="md:flex">
        <div class="md:w-1/2 p-2">
          <div class="font-bold">✅ &nbsp;Vstupenka obsahuje</div>
          <div class="mt-4">
            <div class="mb-2"> přístup na všechny přednášky, workshopy a další události v rámci konference (do naplnění kapacity sálu)</div>
            <div class="mb-2">• platnost oba dva konferenční dny (sobota + neděle)</div>
            <div class="mb-2">• přístup na <span class="font-bold">UTXO.Party</span> během sobotního večera/noci</div>
            <div>• skvělou možnost networkingu v rámci lokální kryptokomunity</div>
          </div>
        </div>
        <div class="md:w-1/2 p-2 md:mt-0 mt-3">
          <div class="font-bold">❌ &nbsp;Vstupenka NEobsahuje</div>
          <div class="mt-4 ml-4">
            <div class="mb-2">• jídlo nebo pití - teplé i studené občerstvení bude možné zakoupit na místě, platba kartou nebo Lightning Network (LN)</div>
            <div>• v případě menších přednášejících sálů negarantujeme místo pro každého</div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 bg-blue-web-light rounded-md mt-6 text-blue-web shadow-md">
      <div>
        <div class="uppercase text-sm font-bold">Počet vstupenek</div>
        <div class="mt-2">
          <select name="count" id="count" class="border border-blue-web rounded-md p-2 text-blue-web" bind:value={$orderTicketForm.count}>
            {#each count as i}
              <option value={i}>{i}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="mt-4">
        <div class="uppercase text-sm font-bold">Email</div>
        <div class="mt-2 text-sm">Kontaktní email, na který budou zaslány vstupenky.</div>
        <div class="mt-2"><input type="text" class="border border-blue-web rounded-md p-2 w-1/2 text-blue-web" bind:value={$orderTicketForm.email} /></div>
      </div>
      <div class="mt-4">
        <div class="uppercase text-sm font-bold">Údaje na jmenovku</div>
        <div class="mt-2 text-sm">Informace, které budou vytištěné na Vaší konferenční jmenovku. Tyto údaje jsou nepovinné a je možné je změnit později.</div>
      </div>
      <div class="mt-2">
        {#each ticketFormCountArray($orderTicketForm.count) as i}
          <div class="p-4 bg-utxo-gradient text-white rounded-md mb-6 shadow-md">
            <div class="">
              <div class="uppercase font-bold">Vstupenka #{i+1}</div>
              <div class="md:flex gap-2">
                <div class="mt-2 flex-1">
                  <div class="uppercase text-sm">Jméno</div>
                  <div class="mt-2"><input type="text" class="border border-blue-web rounded-md p-2 w-full text-blue-web" bind:value={$orderTicketForm.tickets[i].name} placeholder="{faker.name.findName()}" /></div>
                </div>
                <div class="mt-2 flex-1">
                  <div class="uppercase text-sm">Organizace</div>
                  <div class="mt-2"><input type="text" class="border border-blue-web rounded-md p-2 w-full text-blue-web" bind:value={$orderTicketForm.tickets[i].org} placeholder="{faker.company.companyName()}" /></div>
                </div>
                <div class="mt-2">
                  <div class="uppercase text-sm">Twitter handle</div>
                  <div class="mt-2"><input type="text" class="border border-blue-web rounded-md p-2 w-full text-blue-web" bind:value={$orderTicketForm.tickets[i].twitter} placeholder="@{faker.internet.userName()}" /></div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-4">
        <div class="uppercase text-sm font-bold">Platební metoda</div>
        <div class="mt-2">
          {#each paymentMethods as pm}
            <div class="mb-2">
              <label class="cursor-pointer"><input checked={$orderTicketForm.paymentMethod === pm.id} name="paymentMethod" value="{pm.id}" type="radio" on:change={selectPaymentMethod} /> {pm.name}</label>
            </div>
          {/each}
        </div>
      </div>
      <div class="mt-10">
        Celkem: <span class="font-bold">{$orderTicketForm.count * ticketPrice} Kč</span>
      </div>
      <div class="mt-4">
        <button class="bg-utxo-gradient hover:drop-shadow-md text-white font-bold py-2 px-4 rounded-full" on:click={submitOrderHandler}>Odeslat objednávku - přejít k platbě</button>
      </div>
    </div>
  </div>
</section>

