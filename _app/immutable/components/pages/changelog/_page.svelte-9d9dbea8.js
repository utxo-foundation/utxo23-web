import{S as y,i as g,s as S,a as $,k as b,V as E,h as u,c as N,l as v,m as w,n as x,b as d,t as _,d as O,f as p,o as C,g as L,q as T,r as j,B as f,w as q,x as z,y as G,z as I}from"../../../chunks/index-80404206.js";import{L as M,S as U}from"../../../chunks/Link-141f1cdf.js";function V(r){let s;return{c(){s=T("Načítám..")},l(t){s=j(t,"Načítám..")},m(t,o){d(t,s,o)},p:f,i:f,o:f,d(t){t&&u(s)}}}function X(r){let s,t,o;return t=new U({props:{source:r[1],renderers:r[2]}}),{c(){s=b("div"),q(t.$$.fragment),this.h()},l(e){s=v(e,"DIV",{class:!0});var n=w(s);z(t.$$.fragment,n),n.forEach(u),this.h()},h(){x(s,"class","utxo-markdown")},m(e,n){d(e,s,n),G(t,s,null),o=!0},p(e,n){const l={};n&2&&(l.source=e[1]),t.$set(l)},i(e){o||(p(t.$$.fragment,e),o=!0)},o(e){_(t.$$.fragment,e),o=!1},d(e){e&&u(s),I(t)}}}function A(r){let s,t,o,e,n,l;document.title=s="Speciální vstupenky | "+(r[0].bundle?r[0].bundle.name:"UTXO.23");const h=[X,V],c=[];function k(a,i){return a[1]?0:1}return e=k(r),n=c[e]=h[e](r),{c(){t=$(),o=b("section"),n.c(),this.h()},l(a){E("svelte-1xjeljb",document.head).forEach(u),t=N(a),o=v(a,"SECTION",{class:!0});var m=w(o);n.l(m),m.forEach(u),this.h()},h(){x(o,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(a,i){d(a,t,i),d(a,o,i),c[e].m(o,null),l=!0},p(a,[i]){(!l||i&1)&&s!==(s="Speciální vstupenky | "+(a[0].bundle?a[0].bundle.name:"UTXO.23"))&&(document.title=s);let m=e;e=k(a),e===m?c[e].p(a,i):(L(),_(c[m],1,1,()=>{c[m]=null}),O(),n=c[e],n?n.p(a,i):(n=c[e]=h[e](a),n.c()),p(n,1),n.m(o,null))},i(a){l||(p(n),l=!0)},o(a){_(n),l=!1},d(a){a&&u(t),a&&u(o),c[e].d()}}}function B(r,s,t){const o={link:M};let{data:e}=s,n=null;return C(async()=>{const l=await fetch("https://spec.utxo.cz/23/CHANGELOG.md");t(1,n=await l.text())}),r.$$set=l=>{"data"in l&&t(0,e=l.data)},[e,n,o]}class P extends y{constructor(s){super(),g(this,s,B,A,S,{data:0})}}export{P as default};
