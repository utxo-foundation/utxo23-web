import{S as y,i as x,s as g,a as S,k as b,W as E,h as u,c as C,l as v,m as w,n as $,b as _,t as p,d as N,f as d,C as O,o as L,g as T,q,r as z,B as f,w as G,x as I,y as M,z as U}from"../../../chunks/index-aeb3fa06.js";import{b as X}from"../../../chunks/stores-6b77bacd.js";import{L as A,S as B}from"../../../chunks/Link-c7946ba5.js";function D(l){let n;return{c(){n=q("Načítám..")},l(t){n=z(t,"Načítám..")},m(t,o){_(t,n,o)},p:f,i:f,o:f,d(t){t&&u(n)}}}function H(l){let n,t,o;return t=new B({props:{source:l[0],renderers:l[2]}}),{c(){n=b("div"),G(t.$$.fragment),this.h()},l(e){n=v(e,"DIV",{class:!0});var s=w(n);I(t.$$.fragment,s),s.forEach(u),this.h()},h(){$(n,"class","utxo-markdown")},m(e,s){_(e,n,s),M(t,n,null),o=!0},p(e,s){const r={};s&1&&(r.source=e[0]),t.$set(r)},i(e){o||(d(t.$$.fragment,e),o=!0)},o(e){p(t.$$.fragment,e),o=!1},d(e){e&&u(n),U(t)}}}function P(l){let n,t,o,e,s,r;document.title=n="Speciální vstupenky | "+(l[1]?l[1].name:"UTXO.23");const h=[H,D],c=[];function k(a,i){return a[0]?0:1}return e=k(l),s=c[e]=h[e](l),{c(){t=S(),o=b("section"),s.c(),this.h()},l(a){E("svelte-1se9t3b",document.head).forEach(u),t=C(a),o=v(a,"SECTION",{class:!0});var m=w(o);s.l(m),m.forEach(u),this.h()},h(){$(o,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(a,i){_(a,t,i),_(a,o,i),c[e].m(o,null),r=!0},p(a,[i]){(!r||i&2)&&n!==(n="Speciální vstupenky | "+(a[1]?a[1].name:"UTXO.23"))&&(document.title=n);let m=e;e=k(a),e===m?c[e].p(a,i):(T(),p(c[m],1,1,()=>{c[m]=null}),N(),s=c[e],s?s.p(a,i):(s=c[e]=h[e](a),s.c()),d(s,1),s.m(o,null))},i(a){r||(d(s),r=!0)},o(a){p(s),r=!1},d(a){a&&u(t),a&&u(o),c[e].d()}}}function V(l,n,t){let o;O(l,X,r=>t(1,o=r));const e={link:A};let s=null;return L(async()=>{const r=await fetch("https://spec.utxo.cz/23/CHANGELOG.md");t(0,s=await r.text())}),[s,o,e]}class J extends y{constructor(n){super(),x(this,n,V,P,g,{})}}export{J as default};
