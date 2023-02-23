import{S as le,i as ae,s as se,e as W,b as F,f as z,t as H,d as $,h as k,C as re,a7 as ie,k as I,a as A,q as N,l as y,m as E,c as G,r as R,G as ne,n as b,p as M,E as h,u as U,g as ee,D as oe,w as ce,x as ue,y as de,z as fe}from"../../../chunks/index-80404206.js";import{p as pe}from"../../../chunks/stores-64e8bb94.js";import{b as me}from"../../../chunks/stores-fe543342.js";import{g as ve}from"../../../chunks/schedule-6525d3a8.js";import{f as he}from"../../../chunks/utils-ee2cd4ad.js";import{A as _e}from"../../../chunks/Avatar-e4610699.js";import{E as j}from"../../../chunks/config-455f5b6c.js";import{l as ge}from"../../../chunks/index-7b01ff20.js";function X(l,t,a){const e=l.slice();return e[17]=t[a],e}function Y(l){let t,a,e,r,u,m,v,_,i,g=j[l[1].type].text+"",d,f,x,w,o=l[1].name+"",T,C,D,V,S=l[2](l[1].speakers),n=[];for(let s=0;s<S.length;s+=1)n[s]=Z(X(l,S,s));const te=s=>H(n[s],1,1,()=>{n[s]=null});return{c(){t=I("div"),a=I("div"),e=I("img"),u=A(),m=I("div"),v=I("div"),_=I("div"),i=I("div"),d=N(g),x=A(),w=I("div"),T=N(o),C=A(),D=I("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=y(s,"DIV",{style:!0,class:!0,id:!0});var p=E(t);a=y(p,"DIV",{class:!0});var c=E(a);e=y(c,"IMG",{src:!0,style:!0}),c.forEach(k),u=G(p),m=y(p,"DIV",{class:!0,style:!0});var P=E(m);v=y(P,"DIV",{class:!0});var q=E(v);_=y(q,"DIV",{class:!0});var J=E(_);i=y(J,"DIV",{class:!0});var K=E(i);d=R(K,g),K.forEach(k),J.forEach(k),x=G(q),w=y(q,"DIV",{class:!0});var O=E(w);T=R(O,o),O.forEach(k),C=G(q),D=y(q,"DIV",{class:!0});var Q=E(D);for(let B=0;B<n.length;B+=1)n[B].l(Q);Q.forEach(k),q.forEach(k),P.forEach(k),p.forEach(k),this.h()},h(){ne(e.src,r="/img/logo.svg")||b(e,"src",r),M(e,"width","520px"),b(a,"class","absolute bottom-20 left-20"),b(i,"class",f="inline-block px-4 py-3 rounded-xl text-black uppercase "+j[l[1].type].color+" w-auto"),b(_,"class","text-5xl mb-10 flex"),b(w,"class","font-semibold"),b(D,"class","text-6xl flex flex-wrap mt-12 gap-6"),b(v,"class","my-auto text-white text-8xl pl-20 pr-20"),b(m,"class","flex"),M(m,"height","900px"),M(t,"width","1920px"),M(t,"height","1080px"),b(t,"class","relative bg-[url('/img/tv-bg.jpg')] text-white/50 text-xl"),b(t,"id","utxo-tv")},m(s,p){F(s,t,p),h(t,a),h(a,e),h(t,u),h(t,m),h(m,v),h(v,_),h(_,i),h(i,d),h(v,x),h(v,w),h(w,T),h(v,C),h(v,D);for(let c=0;c<n.length;c+=1)n[c].m(D,null);V=!0},p(s,p){if((!V||p&2)&&g!==(g=j[s[1].type].text+"")&&U(d,g),(!V||p&2&&f!==(f="inline-block px-4 py-3 rounded-xl text-black uppercase "+j[s[1].type].color+" w-auto"))&&b(i,"class",f),(!V||p&2)&&o!==(o=s[1].name+"")&&U(T,o),p&6){S=s[2](s[1].speakers);let c;for(c=0;c<S.length;c+=1){const P=X(s,S,c);n[c]?(n[c].p(P,p),z(n[c],1)):(n[c]=Z(P),n[c].c(),z(n[c],1),n[c].m(D,null))}for(ee(),c=S.length;c<n.length;c+=1)te(c);$()}},i(s){if(!V){for(let p=0;p<S.length;p+=1)z(n[p]);V=!0}},o(s){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)H(n[p]);V=!1},d(s){s&&k(t),oe(n,s)}}}function Z(l){let t,a,e,r,u,m=l[17].name+"",v,_,i,g;return e=new _e({props:{speaker:l[17],size:"custom",customSize:l[1].speakers.length===1?"w-32":"w-20"}}),{c(){t=I("div"),a=I("div"),ce(e.$$.fragment),r=A(),u=I("div"),v=N(m),_=A(),this.h()},l(d){t=y(d,"DIV",{class:!0});var f=E(t);a=y(f,"DIV",{class:!0});var x=E(a);ue(e.$$.fragment,x),x.forEach(k),r=G(f),u=y(f,"DIV",{class:!0});var w=E(u);v=R(w,m),w.forEach(k),_=G(f),f.forEach(k),this.h()},h(){b(a,"class","m-auto"),b(u,"class","m-auto"),b(t,"class",i="flex "+(l[1].speakers.length===1?"text-8xl gap-10":"gap-4"))},m(d,f){F(d,t,f),h(t,a),de(e,a,null),h(t,r),h(t,u),h(u,v),h(t,_),g=!0},p(d,f){const x={};f&2&&(x.speaker=d[17]),f&2&&(x.customSize=d[1].speakers.length===1?"w-32":"w-20"),e.$set(x),(!g||f&2)&&m!==(m=d[17].name+"")&&U(v,m),(!g||f&2&&i!==(i="flex "+(d[1].speakers.length===1?"text-8xl gap-10":"gap-4")))&&b(t,"class",i)},i(d){g||(z(e.$$.fragment,d),g=!0)},o(d){H(e.$$.fragment,d),g=!1},d(d){d&&k(t),fe(e)}}}function be(l){let t,a,e=l[0].bundle&&l[1]&&Y(l);return{c(){e&&e.c(),t=W()},l(r){e&&e.l(r),t=W()},m(r,u){e&&e.m(r,u),F(r,t,u),a=!0},p(r,[u]){r[0].bundle&&r[1]?e?(e.p(r,u),u&3&&z(e,1)):(e=Y(r),e.c(),z(e,1),e.m(t.parentNode,t)):e&&(ee(),H(e,1,1,()=>{e=null}),$())},i(r){a||(z(e),a=!0)},o(r){H(e),a=!1},d(r){e&&e.d(r),r&&k(t)}}}function L(l,t="s"){return new URLSearchParams(l).get(t)}function ke(l,t,a){let e,r,u,m,v,_;re(l,pe,o=>a(7,_=o));let{data:i}=t,g={};function d(o){return o.map(T=>i.bundle.spec.speakers.find(C=>C.id===T))}f();function f(){return he(new Date,"iiiiii HH:mm:ss",{locale:ge.cs})}const x=setInterval(()=>{},2e3),w=setInterval(()=>{f()},1e3);return me.subscribe(o=>{ve(o,g)}),ie(()=>{clearInterval(x),clearInterval(w)}),l.$$set=o=>{"data"in o&&a(0,i=o.data)},l.$$.update=()=>{l.$$.dirty&128&&a(6,e=L(_.url.search,"s")),l.$$.dirty&65&&e&&i.bundle&&i.bundle.spec.stages.find(o=>o.id===e),l.$$.dirty&64&&e&&g[e],l.$$.dirty&128&&a(5,r=L(_.url.search,"id")),l.$$.dirty&128&&a(3,u=L(_.url.search,"event")),l.$$.dirty&33&&a(4,m=i.bundle?i.bundle.spec.schedule.find(o=>o.id===r):null),l.$$.dirty&25&&a(1,v=m?i.bundle.spec.events.find(o=>o.id===m.event):u&&i.bundle?i.bundle.spec.events.find(o=>o.id===u):null)},[i,v,d,u,m,r,e,_]}class ze extends le{constructor(t){super(),ae(this,t,ke,be,se,{data:0})}}export{ze as default};
