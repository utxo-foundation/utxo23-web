import{S as $,i as g,s as x,k as S,e as b,Y as E,d as u,m as C,c as v,a as w,b as y,g as p,n as L,o as f,p as N,q as d,L as O,v as q,t as T,h as G,E as _,w as I,x as M,y as U,B as X}from"../chunks/index-695b5929.js";import{b as z}from"../chunks/stores-ca1bbb18.js";import{L as A,S as B}from"../chunks/Link-9c9f68ae.js";import"../chunks/index-57c7a2a5.js";function D(l){let n;return{c(){n=T("Na\u010D\xEDt\xE1m..")},l(t){n=G(t,"Na\u010D\xEDt\xE1m..")},m(t,a){p(t,n,a)},p:_,i:_,o:_,d(t){t&&u(n)}}}function H(l){let n,t,a;return t=new B({props:{source:l[0],renderers:l[2]}}),{c(){n=b("div"),I(t.$$.fragment),this.h()},l(e){n=v(e,"DIV",{class:!0});var s=w(n);M(t.$$.fragment,s),s.forEach(u),this.h()},h(){y(n,"class","utxo-markdown")},m(e,s){p(e,n,s),U(t,n,null),a=!0},p(e,s){const r={};s&1&&(r.source=e[0]),t.$set(r)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),a=!1},d(e){e&&u(n),X(t)}}}function V(l){let n,t,a,e,s,r;document.title=n="Speci\xE1ln\xED vstupenky | "+(l[1]?l[1].name:"UTXO.23");const h=[H,D],c=[];function k(o,i){return o[0]?0:1}return e=k(l),s=c[e]=h[e](l),{c(){t=S(),a=b("section"),s.c(),this.h()},l(o){E('[data-svelte="svelte-1se9t3b"]',document.head).forEach(u),t=C(o),a=v(o,"SECTION",{class:!0});var m=w(a);s.l(m),m.forEach(u),this.h()},h(){y(a,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(o,i){p(o,t,i),p(o,a,i),c[e].m(a,null),r=!0},p(o,[i]){(!r||i&2)&&n!==(n="Speci\xE1ln\xED vstupenky | "+(o[1]?o[1].name:"UTXO.23"))&&(document.title=n);let m=e;e=k(o),e===m?c[e].p(o,i):(L(),f(c[m],1,1,()=>{c[m]=null}),N(),s=c[e],s?s.p(o,i):(s=c[e]=h[e](o),s.c()),d(s,1),s.m(a,null))},i(o){r||(d(s),r=!0)},o(o){f(s),r=!1},d(o){o&&u(t),o&&u(a),c[e].d()}}}const P=!0;function Y(l,n,t){let a;O(l,z,r=>t(1,a=r));const e={link:A};let s=null;return q(async()=>{const r=await fetch("https://spec.utxo.cz/23/CHANGELOG.md");t(0,s=await r.text())}),[s,a,e]}class Q extends ${constructor(n){super();g(this,n,Y,V,x,{})}}export{Q as default,P as prerender};
