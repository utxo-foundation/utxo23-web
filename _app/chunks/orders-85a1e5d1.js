import{a as o,c as e}from"./stores-ca1bbb18.js";import{a}from"./api-f637a6d7.js";async function d(t){if(t.orders&&t.orders.length>0||t.tickets&&t.tickets.length>0){const r=await a.apiCall("orders",{method:"POST"},{orders:t.orders,tickets:t.tickets});o.update(s=>(s.orders=r.orders,s.tickets=r.tickets,s))}}async function n(){e.set(await a.apiCall("status"))}export{d as a,n as l};
