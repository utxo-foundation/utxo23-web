import{S as Te,i as Me,s as Le,e as me,b as F,B as Pe,h as o,C as ze,a as M,c as O,k as h,l as m,m as c,n as a,D as Xe,E as i,q as K,r as R,F as Ae,g as Be,t as ie,d as He,f as Y,w as xe,x as $e,G as Ze,y as Ie,z as De,H as mt,I as gt,J as pt,K as x,L as $,p as T,M as Ce,N as ye,u as Re,O as _t,P as bt,Q as kt,R as wt}from"../../chunks/index-c60e83de.js";import{p as Fe}from"../../chunks/stores-2c5a4d24.js";import{b as Et,a as Ct,u as yt}from"../../chunks/stores-f9334cd8.js";import{f as je,a as We,T as xt}from"../../chunks/Transition-e531d7ee.js";function Je(f,t,e){const r=f.slice();return r[3]=t[e],r}function Qe(f,t,e){const r=f.slice();return r[3]=t[e],r}function Ye(f){let t,e,r=f[0]==="small"&&et(f),l=f[0]==="normal"&&lt(f);return{c(){r&&r.c(),t=M(),l&&l.c(),e=me()},l(s){r&&r.l(s),t=O(s),l&&l.l(s),e=me()},m(s,n){r&&r.m(s,n),F(s,t,n),l&&l.m(s,n),F(s,e,n)},p(s,n){s[0]==="small"?r?r.p(s,n):(r=et(s),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),s[0]==="normal"?l?l.p(s,n):(l=lt(s),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(s){r&&r.d(s),s&&o(t),l&&l.d(s),s&&o(e)}}}function et(f){let t,e=f[2],r=[];for(let l=0;l<e.length;l+=1)r[l]=tt(Qe(f,e,l));return{c(){t=h("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){t=m(l,"DIV",{class:!0});var s=c(t);for(let n=0;n<r.length;n+=1)r[n].l(s);s.forEach(o),this.h()},h(){a(t,"class","flex block space-x-6 md:space-x-2 m-auto w-full justify-end text-center")},m(l,s){F(l,t,s);for(let n=0;n<r.length;n+=1)r[n].m(t,null)},p(l,s){if(s&6){e=l[2];let n;for(n=0;n<e.length;n+=1){const u=Qe(l,e,n);r[n]?r[n].p(u,s):(r[n]=tt(u),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=e.length}},d(l){l&&o(t),Xe(r,l)}}}function tt(f){let t,e,r,l;return{c(){t=h("a"),e=h("i"),r=M(),this.h()},l(s){t=m(s,"A",{href:!0,class:!0,target:!0});var n=c(t);e=m(n,"I",{class:!0}),c(e).forEach(o),r=O(n),n.forEach(o),this.h()},h(){a(e,"class",f[3].ico),a(t,"href",l=f[1].links[f[3].link]),a(t,"class","w-6 h-6 bg-white rounded-lg hover:bg-utxo-gradient hover:text-white"),a(t,"target","_blank")},m(s,n){F(s,t,n),i(t,e),i(t,r)},p(s,n){n&2&&l!==(l=s[1].links[s[3].link])&&a(t,"href",l)},d(s){s&&o(t)}}}function lt(f){let t,e,r=f[2],l=[];for(let s=0;s<r.length;s+=1)l[s]=rt(Je(f,r,s));return{c(){t=h("div"),e=h("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){t=m(s,"DIV",{class:!0});var n=c(t);e=m(n,"DIV",{class:!0});var u=c(e);for(let p=0;p<l.length;p+=1)l[p].l(u);u.forEach(o),n.forEach(o),this.h()},h(){a(e,"class","sm:flex flex-wrap gap-3 justify-end"),a(t,"class","w-auto")},m(s,n){F(s,t,n),i(t,e);for(let u=0;u<l.length;u+=1)l[u].m(e,null)},p(s,n){if(n&6){r=s[2];let u;for(u=0;u<r.length;u+=1){const p=Je(s,r,u);l[u]?l[u].p(p,n):(l[u]=rt(p),l[u].c(),l[u].m(e,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=r.length}},d(s){s&&o(t),Xe(l,s)}}}function rt(f){let t,e,r,l=f[3].name+"",s,n,u;return{c(){t=h("div"),e=h("a"),r=h("i"),s=K(l),u=M(),this.h()},l(p){t=m(p,"DIV",{class:!0});var d=c(t);e=m(d,"A",{href:!0,class:!0,target:!0});var v=c(e);r=m(v,"I",{class:!0}),c(r).forEach(o),s=R(v,l),v.forEach(o),u=O(d),d.forEach(o),this.h()},h(){a(r,"class",f[3].ico+" mr-2 my-auto"),a(e,"href",n=f[1].links[f[3].link]),a(e,"class","block flex"),a(e,"target","_blank"),a(t,"class","mr-4 sm:mr-0 inline-block sm:block hover:text-custom-green")},m(p,d){F(p,t,d),i(t,e),i(e,r),i(e,s),i(t,u)},p(p,d){d&2&&n!==(n=p[1].links[p[3].link])&&a(e,"href",n)},d(p){p&&o(t)}}}function $t(f){let t,e=f[1]&&Ye(f);return{c(){e&&e.c(),t=me()},l(r){e&&e.l(r),t=me()},m(r,l){e&&e.m(r,l),F(r,t,l)},p(r,[l]){r[1]?e?e.p(r,l):(e=Ye(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:Pe,o:Pe,d(r){e&&e.d(r),r&&o(t)}}}function It(f,t,e){let r;ze(f,Et,n=>e(1,r=n));let{size:l="small"}=t;const s=[{link:"twitter",ico:"fa-brands fa-twitter",name:"Twitter"},{link:"instagram",ico:"fab fa-instagram",name:"Instagram"},{link:"telegram",ico:"fab fa-telegram",name:"Telegram"}];return f.$$set=n=>{"size"in n&&e(0,l=n.size)},[l,r,s]}class vt extends Te{constructor(t){super(),Me(this,t,It,$t,Le,{size:0})}}const at=[{text:"Domů",url:"/",newWindow:!1,hideOnHomepage:!0},{text:"Záznamy",url:"https://utxo.tv/",newWindow:!0},{text:"Fotky 2022",url:"/fotky",newWindow:!1}];function st(f,t,e){const r=f.slice();return r[4]=t[e],r}function Dt(f){let t;return{c(){t=h("div"),this.h()},l(e){t=m(e,"DIV",{class:!0}),c(t).forEach(o),this.h()},h(){a(t,"class","flex")},m(e,r){F(e,t,r)},d(e){e&&o(t)}}}function Lt(f){let t,e,r;return{c(){t=h("a"),e=h("img"),this.h()},l(l){t=m(l,"A",{href:!0,class:!0});var s=c(t);e=m(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(o),this.h()},h(){Ze(e.src,r="/img/logo.svg")||a(e,"src",r),a(e,"class","h-6 mr-3 sm:h-9"),a(e,"alt","UTXO 23 Logo"),a(t,"href","/"),a(t,"class","flex")},m(l,s){F(l,t,s),i(t,e)},d(l){l&&o(t)}}}function it(f){let t,e,r=f[4].text+"",l,s,n=f[4].newWindow?'&nbsp;<i class="fa-solid fa-up-right-from-square fa-sm opacity-70"></i>':"",u,p,d,v,g,_;return{c(){t=h("li"),e=h("a"),l=K(r),s=new gt(!1),p=M(),d=h("div"),v=M(),this.h()},l(b){t=m(b,"LI",{class:!0});var D=c(t);e=m(D,"A",{"sveltekit:prefetch":!0,href:!0,target:!0,class:!0});var A=c(e);l=R(A,r),s=pt(A,!1),A.forEach(o),p=O(D),d=m(D,"DIV",{class:!0}),c(d).forEach(o),v=O(D),D.forEach(o),this.h()},h(){s.a=null,a(e,"sveltekit:prefetch",""),a(e,"href",f[4].url),a(e,"target",f[4].newWindow?"_blank":"_self"),a(e,"class",u="block py-4 pl-3 pr-4 text-white rounded hover:bg-white/20 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:decoration-custom-green md:hover:decoration-2 md:hover:underline-offset-4 md:p-0 "+(f[1].url.pathname===f[4].url&&"md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple")),a(d,"class","md:hidden border-b absolute bottom-0 left-1/4 border-custom-green/50 w-1/2"),a(t,"class","relative")},m(b,D){F(b,t,D),i(t,e),i(e,l),s.m(n,e),i(t,p),i(t,d),i(t,v),g||(_=Ae(e,"click",f[2]),g=!0)},p(b,D){D&2&&u!==(u="block py-4 pl-3 pr-4 text-white rounded hover:bg-white/20 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:decoration-custom-green md:hover:decoration-2 md:hover:underline-offset-4 md:p-0 "+(b[1].url.pathname===b[4].url&&"md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple"))&&a(e,"class",u)},d(b){b&&o(t),g=!1,_()}}}function ot(f){let t,e=!(f[1].url.pathname==="/"&&f[4].hideOnHomepage)&&it(f);return{c(){e&&e.c(),t=me()},l(r){e&&e.l(r),t=me()},m(r,l){e&&e.m(r,l),F(r,t,l)},p(r,l){r[1].url.pathname==="/"&&r[4].hideOnHomepage?e&&(e.d(1),e=null):e?e.p(r,l):(e=it(r),e.c(),e.m(t.parentNode,t))},d(r){e&&e.d(r),r&&o(t)}}}function nt(f){let t,e,r,l,s,n,u,p,d,v,g,_,b,D,A,w,y,E,V,N,U,S=at,L=[];for(let k=0;k<S.length;k+=1)L[k]=ot(st(f,S,k));return y=new vt({props:{size:"small"}}),{c(){t=h("div"),e=h("button"),r=h("span"),l=K("Zavřít menu"),s=M(),n=h("i"),p=M(),d=h("div"),v=h("a"),g=h("img"),b=M(),D=h("ul");for(let k=0;k<L.length;k+=1)L[k].c();A=M(),w=h("div"),xe(y.$$.fragment),this.h()},l(k){t=m(k,"DIV",{class:!0,id:!0});var z=c(t);e=m(z,"BUTTON",{type:!0,class:!0});var I=c(e);r=m(I,"SPAN",{class:!0});var j=c(r);l=R(j,"Zavřít menu"),j.forEach(o),s=O(I),n=m(I,"I",{class:!0}),c(n).forEach(o),I.forEach(o),p=O(z),d=m(z,"DIV",{class:!0});var P=c(d);v=m(P,"A",{href:!0,class:!0});var te=c(v);g=m(te,"IMG",{src:!0,class:!0,alt:!0}),te.forEach(o),b=O(P),D=m(P,"UL",{class:!0});var B=c(D);for(let W=0;W<L.length;W+=1)L[W].l(B);B.forEach(o),A=O(P),w=m(P,"DIV",{class:!0});var G=c(w);$e(y.$$.fragment,G),G.forEach(o),P.forEach(o),z.forEach(o),this.h()},h(){a(r,"class","sr-only"),a(n,"class","fa-solid fa-xmark fa-2x"),a(e,"type","button"),a(e,"class",u=(f[0]&&"hidden")+" absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"),Ze(g.src,_="/img/logo.svg")||a(g,"src",_),a(g,"class","h-10 m-auto"),a(g,"alt","UTXO 23 Logo"),a(v,"href","/"),a(v,"class","flex md:hidden"),a(D,"class","flex shrink-0 flex-col p-4 mt-4 text-center text-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"),a(w,"class","m-auto"),a(d,"class","flex flex-col md:flex-row my-auto w-full"),a(t,"class",E=(f[0]?"hidden":"block")+" fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto"),a(t,"id","navbar-default")},m(k,z){F(k,t,z),i(t,e),i(e,r),i(r,l),i(e,s),i(e,n),i(t,p),i(t,d),i(d,v),i(v,g),i(d,b),i(d,D);for(let I=0;I<L.length;I+=1)L[I].m(D,null);i(d,A),i(d,w),Ie(y,w,null),V=!0,N||(U=[Ae(e,"click",f[2]),Ae(v,"click",f[2])],N=!0)},p(k,z){if((!V||z&1&&u!==(u=(k[0]&&"hidden")+" absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"))&&a(e,"class",u),z&6){S=at;let I;for(I=0;I<S.length;I+=1){const j=st(k,S,I);L[I]?L[I].p(j,z):(L[I]=ot(j),L[I].c(),L[I].m(D,null))}for(;I<L.length;I+=1)L[I].d(1);L.length=S.length}(!V||z&1&&E!==(E=(k[0]?"hidden":"block")+" fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto"))&&a(t,"class",E)},i(k){V||(Y(y.$$.fragment,k),V=!0)},o(k){ie(y.$$.fragment,k),V=!1},d(k){k&&o(t),Xe(L,k),De(y),N=!1,mt(U)}}}function Vt(f){let t,e,r,l,s,n,u,p,d,v=f[0],g,_,b;function D(E,V){return E[1].url.pathname!=="/"?Lt:Dt}let A=D(f),w=A(f),y=nt(f);return{c(){t=h("nav"),e=h("div"),w.c(),r=M(),l=h("button"),s=h("span"),n=K("Otevřít menu"),u=M(),p=h("i"),d=M(),y.c(),this.h()},l(E){t=m(E,"NAV",{class:!0});var V=c(t);e=m(V,"DIV",{class:!0});var N=c(e);w.l(N),r=O(N),l=m(N,"BUTTON",{"data-collapse-toggle":!0,type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var U=c(l);s=m(U,"SPAN",{class:!0});var S=c(s);n=R(S,"Otevřít menu"),S.forEach(o),u=O(U),p=m(U,"I",{class:!0}),c(p).forEach(o),U.forEach(o),d=O(N),y.l(N),N.forEach(o),V.forEach(o),this.h()},h(){a(s,"class","sr-only"),a(p,"class","fa-sharp fa-solid fa-bars fa-2x"),a(l,"data-collapse-toggle","navbar-default"),a(l,"type","button"),a(l,"class","inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"),a(l,"aria-controls","navbar-default"),a(l,"aria-expanded","false"),a(e,"class","container flex flex-wrap items-center justify-between mx-auto max-w-7xl"),a(t,"class","px-2 sm:px-4 py-2.5")},m(E,V){F(E,t,V),i(t,e),w.m(e,null),i(e,r),i(e,l),i(l,s),i(s,n),i(l,u),i(l,p),i(e,d),y.m(e,null),g=!0,_||(b=Ae(l,"click",f[3]),_=!0)},p(E,[V]){A!==(A=D(E))&&(w.d(1),w=A(E),w&&(w.c(),w.m(e,r))),V&1&&Le(v,v=E[0])?(Be(),ie(y,1,1,Pe),He(),y=nt(E),y.c(),Y(y,1),y.m(e,null)):y.p(E,V)},i(E){g||(Y(y),g=!0)},o(E){ie(y),g=!1},d(E){E&&o(t),w.d(),y.d(E),_=!1,b()}}}function zt(f,t,e){let r;ze(f,Fe,u=>e(1,r=u));let l=!0;function s(){l==!1&&e(0,l=!0)}function n(){e(0,l=!1)}return[l,r,s,n]}class At extends Te{constructor(t){super(),Me(this,t,zt,Vt,Le,{})}}function Tt(f){let t,e,r,l,s,n,u,p,d,v,g,_,b,D,A,w,y,E,V,N,U,S,L,k,z,I,j,P,te,B,G,W,J,re,ae,ce,le,H,Z,C,q,X;return{c(){t=x("svg"),e=x("g"),r=x("g"),l=x("g"),s=x("path"),n=x("g"),u=x("path"),d=x("g"),v=x("g"),g=x("path"),_=x("g"),b=x("path"),A=x("g"),w=x("g"),y=x("g"),E=x("path"),N=x("g"),U=x("g"),S=x("g"),L=x("g"),k=x("g"),z=x("path"),j=x("g"),P=x("g"),te=x("g"),B=x("rect"),G=x("g"),W=x("g"),J=x("path"),re=x("g"),ae=x("path"),le=x("defs"),H=x("linearGradient"),Z=x("stop"),C=x("stop"),q=x("stop"),X=x("stop"),this.h()},l(ee){t=$(ee,"svg",{class:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0,"xml:space":!0,"xmlns:serif":!0,style:!0});var fe=c(t);e=$(fe,"g",{id:!0});var oe=c(e);r=$(oe,"g",{});var Q=c(r);l=$(Q,"g",{id:!0});var se=c(l);s=$(se,"path",{id:!0,d:!0,style:!0}),c(s).forEach(o),se.forEach(o),n=$(Q,"g",{id:!0});var ue=c(n);u=$(ue,"path",{id:!0,d:!0,style:!0}),c(u).forEach(o),ue.forEach(o),Q.forEach(o),d=$(oe,"g",{});var ne=c(d);v=$(ne,"g",{id:!0});var de=c(v);g=$(de,"path",{id:!0,d:!0,style:!0}),c(g).forEach(o),de.forEach(o),_=$(ne,"g",{id:!0});var pe=c(_);b=$(pe,"path",{id:!0,d:!0,style:!0}),c(b).forEach(o),pe.forEach(o),ne.forEach(o),A=$(oe,"g",{id:!0});var _e=c(A);w=$(_e,"g",{id:!0});var ve=c(w);y=$(ve,"g",{id:!0});var be=c(y);E=$(be,"path",{id:!0,d:!0,style:!0}),c(E).forEach(o),be.forEach(o),ve.forEach(o),_e.forEach(o),N=$(oe,"g",{});var ge=c(N);U=$(ge,"g",{id:!0});var Oe=c(U);S=$(Oe,"g",{id:!0});var ke=c(S);L=$(ke,"g",{id:!0});var we=c(L);k=$(we,"g",{id:!0});var Ne=c(k);z=$(Ne,"path",{id:!0,d:!0,style:!0}),c(z).forEach(o),Ne.forEach(o),we.forEach(o),ke.forEach(o),Oe.forEach(o),ge.forEach(o),j=$(oe,"g",{});var he=c(j);P=$(he,"g",{id:!0});var Se=c(P);te=$(Se,"g",{id:!0});var Ve=c(te);B=$(Ve,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,style:!0}),c(B).forEach(o),Ve.forEach(o),Se.forEach(o),G=$(he,"g",{transform:!0});var Ee=c(G);W=$(Ee,"g",{transform:!0});var Ge=c(W);J=$(Ge,"path",{d:!0,style:!0}),c(J).forEach(o),Ge.forEach(o),re=$(Ee,"g",{transform:!0});var qe=c(re);ae=$(qe,"path",{d:!0,style:!0}),c(ae).forEach(o),qe.forEach(o),Ee.forEach(o),he.forEach(o),oe.forEach(o),le=$(fe,"defs",{});var Ke=c(le);H=$(Ke,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0,gradientTransform:!0});var Ue=c(H);Z=$(Ue,"stop",{offset:!0,style:!0}),c(Z).forEach(o),C=$(Ue,"stop",{offset:!0,style:!0}),c(C).forEach(o),q=$(Ue,"stop",{offset:!0,style:!0}),c(q).forEach(o),X=$(Ue,"stop",{offset:!0,style:!0}),c(X).forEach(o),Ue.forEach(o),Ke.forEach(o),fe.forEach(o),this.h()},h(){a(s,"id","path16"),a(s,"d","M119.041,0.333L119.372,69.571L102.368,69.667L102.039,0.429L119.041,0.333Z"),T(s,"fill","white"),T(s,"fill-rule","nonzero"),a(l,"id","g14"),a(u,"id","path20"),a(u,"d","M144.606,27L144.705,43.997L76.805,44.333L76.705,27.336L144.606,27Z"),T(u,"fill","white"),T(u,"fill-rule","nonzero"),a(n,"id","g18"),a(g,"id","path24"),a(g,"d","M211.944,13.004L155.7,69.753L143.624,57.821L199.868,1.072L211.944,13.004Z"),T(g,"fill","white"),T(g,"fill-rule","nonzero"),a(v,"id","g22"),a(b,"id","path28"),a(b,"d","M212.787,56.826L200.863,68.902L144.115,12.666L156.038,0.59L212.787,56.826Z"),T(b,"fill","white"),T(b,"fill-rule","nonzero"),a(_,"id","g26"),a(E,"id","path40"),a(E,"d","M248.274,17.181C257.843,17.181 265.662,25.136 265.662,35.021C265.662,44.905 257.843,52.86 248.274,52.86C238.704,52.86 230.886,44.905 230.886,35.021C230.886,25.136 238.704,17.181 248.274,17.181M248.274,0.333C229.332,0.333 214.038,15.896 214.038,35.021C214.038,54.145 229.332,69.708 248.274,69.708C267.215,69.708 282.51,54.145 282.51,35.021C282.51,15.896 267.215,0.333 248.274,0.333"),T(E,"fill","white"),T(E,"fill-rule","nonzero"),a(y,"id","g38"),a(w,"id","g32"),a(A,"id","g30"),a(z,"id","path60"),a(z,"d","M44.877,19.683C49.465,22.955 52.328,28.351 52.328,34.288C52.328,44.137 44.521,52.081 34.941,52.081C25.361,52.081 17.555,44.137 17.555,34.288C17.555,28.399 20.372,23.043 24.893,19.764L13.645,7.085C5.619,13.555 0.705,23.48 0.705,34.288C0.705,53.451 16.011,69.024 34.941,69.024C53.871,69.024 69.177,53.451 69.177,34.288C69.177,23.433 64.22,13.468 56.129,7L44.877,19.683Z"),T(z,"fill","url(#_Linear1)"),T(z,"fill-rule","nonzero"),a(k,"id","g52"),a(L,"id","g50"),a(S,"id","g44"),a(U,"id","g42"),a(B,"id","path70"),a(B,"x","282.752"),a(B,"y","59.747"),a(B,"width","8.877"),a(B,"height","8.877"),T(B,"fill","white"),T(B,"fill-rule","nonzero"),a(te,"id","g64"),a(P,"id","g62"),a(J,"d","M0.059,-0.127L0.334,-0.393C0.342,-0.401 0.35,-0.409 0.359,-0.419C0.368,-0.428 0.376,-0.437 0.383,-0.447C0.39,-0.457 0.395,-0.468 0.4,-0.479C0.405,-0.49 0.407,-0.501 0.407,-0.513C0.407,-0.528 0.404,-0.541 0.399,-0.552C0.393,-0.563 0.385,-0.573 0.376,-0.581C0.367,-0.589 0.356,-0.595 0.344,-0.6C0.331,-0.604 0.318,-0.606 0.304,-0.606C0.274,-0.606 0.249,-0.597 0.23,-0.58C0.211,-0.563 0.199,-0.539 0.195,-0.51L0.069,-0.52C0.072,-0.553 0.08,-0.582 0.093,-0.607C0.106,-0.632 0.122,-0.652 0.143,-0.669C0.164,-0.686 0.188,-0.698 0.215,-0.707C0.242,-0.716 0.272,-0.72 0.304,-0.72C0.336,-0.72 0.366,-0.716 0.394,-0.708C0.421,-0.699 0.445,-0.687 0.466,-0.671C0.487,-0.654 0.503,-0.633 0.515,-0.608C0.527,-0.583 0.533,-0.553 0.533,-0.519C0.533,-0.474 0.523,-0.436 0.503,-0.404C0.482,-0.371 0.456,-0.34 0.424,-0.311L0.205,-0.108L0.533,-0.108L0.533,-0L0.059,-0L0.059,-0.127Z"),T(J,"fill","white"),T(J,"fill-rule","nonzero"),a(W,"transform","matrix(11.3461,0,0,11.3461,323.671,43.5138)"),a(ae,"d","M0.222,-0.423L0.253,-0.423C0.27,-0.423 0.287,-0.424 0.304,-0.426C0.32,-0.428 0.335,-0.432 0.348,-0.439C0.361,-0.446 0.371,-0.455 0.379,-0.468C0.387,-0.481 0.391,-0.498 0.391,-0.519C0.391,-0.546 0.382,-0.569 0.363,-0.586C0.344,-0.603 0.32,-0.612 0.29,-0.612C0.266,-0.612 0.245,-0.605 0.226,-0.592C0.207,-0.578 0.193,-0.559 0.184,-0.534L0.057,-0.568C0.065,-0.594 0.076,-0.617 0.091,-0.636C0.106,-0.655 0.123,-0.671 0.143,-0.684C0.163,-0.696 0.185,-0.705 0.209,-0.711C0.233,-0.717 0.258,-0.72 0.284,-0.72C0.315,-0.72 0.344,-0.716 0.371,-0.708C0.398,-0.7 0.422,-0.688 0.443,-0.673C0.464,-0.657 0.48,-0.637 0.493,-0.614C0.505,-0.59 0.511,-0.562 0.511,-0.531C0.511,-0.493 0.5,-0.459 0.479,-0.43C0.458,-0.4 0.428,-0.38 0.39,-0.371L0.39,-0.369C0.435,-0.362 0.47,-0.343 0.493,-0.311C0.516,-0.279 0.528,-0.241 0.528,-0.197C0.528,-0.163 0.522,-0.133 0.509,-0.107C0.496,-0.081 0.478,-0.059 0.456,-0.042C0.434,-0.024 0.409,-0.011 0.38,-0.002C0.351,0.008 0.32,0.012 0.289,0.012C0.26,0.012 0.232,0.009 0.206,0.003C0.18,-0.004 0.157,-0.014 0.136,-0.027C0.115,-0.04 0.096,-0.057 0.081,-0.079C0.066,-0.099 0.054,-0.125 0.046,-0.154L0.174,-0.188C0.181,-0.159 0.194,-0.136 0.213,-0.12C0.232,-0.104 0.257,-0.096 0.289,-0.096C0.305,-0.096 0.32,-0.099 0.335,-0.104C0.349,-0.109 0.362,-0.117 0.373,-0.127C0.384,-0.136 0.392,-0.148 0.399,-0.162C0.405,-0.175 0.408,-0.19 0.408,-0.207C0.408,-0.23 0.403,-0.248 0.394,-0.263C0.384,-0.277 0.372,-0.288 0.357,-0.296C0.341,-0.303 0.325,-0.308 0.306,-0.311C0.287,-0.314 0.269,-0.315 0.251,-0.315L0.222,-0.315L0.222,-0.423Z"),T(ae,"fill","white"),T(ae,"fill-rule","nonzero"),a(re,"transform","matrix(11.3461,0,0,11.3461,330.388,43.5138)"),a(G,"transform","matrix(8.383,0,0,8.383,-2415.97,-295.918)"),a(e,"id","g10"),a(Z,"offset","0"),T(Z,"stop-color","rgb(0,216,130)"),T(Z,"stop-opacity","1"),a(C,"offset","0"),T(C,"stop-color","rgb(5,187,188)"),T(C,"stop-opacity","1"),a(q,"offset","0.01"),T(q,"stop-color","rgb(0,216,130)"),T(q,"stop-opacity","1"),a(X,"offset","1"),T(X,"stop-color","rgb(193,105,219)"),T(X,"stop-opacity","1"),a(H,"id","_Linear1"),a(H,"x1","0"),a(H,"y1","0"),a(H,"x2","1"),a(H,"y2","0"),a(H,"gradientUnits","userSpaceOnUse"),a(H,"gradientTransform","matrix(58.1935,-21.0445,21.0445,58.1935,7.78231,45.1011)"),a(t,"class",f[1]),a(t,"height","100%"),a(t,"viewBox","0 0 405 70"),a(t,"version","1.1"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),a(t,"xml:space","preserve"),a(t,"xmlns:serif","http://www.serif.com/"),T(t,"fill-rule","evenodd"),T(t,"clip-rule","evenodd"),T(t,"stroke-linejoin","round"),T(t,"stroke-miterlimit","2")},m(ee,fe){F(ee,t,fe),i(t,e),i(e,r),i(r,l),i(l,s),i(r,n),i(n,u),i(e,d),i(d,v),i(v,g),i(d,_),i(_,b),i(e,A),i(A,w),i(w,y),i(y,E),i(e,N),i(N,U),i(U,S),i(S,L),i(L,k),i(k,z),i(e,j),i(j,P),i(P,te),i(te,B),i(j,G),i(G,W),i(W,J),i(G,re),i(re,ae),i(t,le),i(le,H),i(H,Z),i(H,C),i(H,q),i(H,X)},p(ee,[fe]){f=ee,fe&2&&a(t,"class",f[1])},i(ee){p||Ce(()=>{p=ye(r,je,{y:-50,duration:f[0]/4,delay:f[0]/12}),p.start()}),D||Ce(()=>{D=ye(d,je,{y:50,duration:f[0]/4,delay:f[0]/6}),D.start()}),V||Ce(()=>{V=ye(A,je,{x:50,duration:f[0]/4,delay:f[0]/4}),V.start()}),I||Ce(()=>{I=ye(N,je,{x:-50,duration:f[0]/4,delay:0}),I.start()}),ce||Ce(()=>{ce=ye(j,We,{duration:f[0]/2,delay:f[0]/2}),ce.start()})},o:Pe,d(ee){ee&&o(t)}}}function Mt(f,t,e){let{duration:r=2e3}=t,{classes:l}=t;return f.$$set=s=>{"duration"in s&&e(0,r=s.duration),"classes"in s&&e(1,l=s.classes)},[r,l]}class Ot extends Te{constructor(t){super(),Me(this,t,Mt,Tt,Le,{duration:0,classes:1})}}function ft(f){let t,e,r,l,s,n,u,p;l=new At({});let d=f[0].url.pathname==="/"&&ct(f);return{c(){t=h("header"),e=h("div"),r=h("div"),xe(l.$$.fragment),s=M(),d&&d.c(),this.h()},l(v){t=m(v,"HEADER",{class:!0});var g=c(t);e=m(g,"DIV",{class:!0});var _=c(e);r=m(_,"DIV",{});var b=c(r);$e(l.$$.fragment,b),b.forEach(o),s=O(_),d&&d.l(_),_.forEach(o),g.forEach(o),this.h()},h(){a(e,"class",n="flex flex-col "+(f[0].url.pathname=="/"?"min-h-[100vh] md:min-h-[70vh] bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-darkpurple/80":"bg-gradient-to-r from-black/40 via-custom-green/70 to-custom-darkpurple/80")),a(t,"class",u="relative bg-center bg-cover "+(f[0].url.pathname!=="/tv"?"bg-[url('/img/bg-utxo-05.jpg')]":"")+" bg-no-repeat bg-custom-darkestpurple print:hidden")},m(v,g){F(v,t,g),i(t,e),i(e,r),Ie(l,r,null),i(e,s),d&&d.m(e,null),p=!0},p(v,g){v[0].url.pathname==="/"?d?(d.p(v,g),g&1&&Y(d,1)):(d=ct(v),d.c(),Y(d,1),d.m(e,null)):d&&(Be(),ie(d,1,1,()=>{d=null}),He()),(!p||g&1&&n!==(n="flex flex-col "+(v[0].url.pathname=="/"?"min-h-[100vh] md:min-h-[70vh] bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-darkpurple/80":"bg-gradient-to-r from-black/40 via-custom-green/70 to-custom-darkpurple/80")))&&a(e,"class",n),(!p||g&1&&u!==(u="relative bg-center bg-cover "+(v[0].url.pathname!=="/tv"?"bg-[url('/img/bg-utxo-05.jpg')]":"")+" bg-no-repeat bg-custom-darkestpurple print:hidden"))&&a(t,"class",u)},i(v){p||(Y(l.$$.fragment,v),Y(d),p=!0)},o(v){ie(l.$$.fragment,v),ie(d),p=!1},d(v){v&&o(t),De(l),d&&d.d()}}}function ct(f){let t,e,r,l,s,n,u,p,d,v,g,_,b,D,A,w,y,E,V,N,U,S,L,k,z,I,j,P,te,B,G,W,J,re,ae,ce,le;d=new Ot({props:{duration:"1500",classes:"w-3/4 md:w-1/2 m-auto"}});let H=!1,Z=f[1]&&f[1].wave&&ut(f);return{c(){t=h("div"),e=h("div"),r=h("div"),l=K("Otevřená komunitní kryptoměnová konference"),n=M(),u=h("div"),p=h("a"),xe(d.$$.fragment),v=M(),g=h("div"),_=h("div"),b=h("div"),D=h("i"),A=M(),w=h("div"),y=K("3.-4. červen 2023"),E=M(),V=h("div"),N=h("div"),U=h("i"),S=M(),L=h("div"),k=K("Gabriel Loci, Praha"),I=M(),j=h("div"),P=M(),Z&&Z.c(),te=M(),B=h("div"),G=h("a"),W=h("i"),J=M(),re=h("div"),this.h()},l(C){t=m(C,"DIV",{class:!0});var q=c(t);e=m(q,"DIV",{class:!0});var X=c(e);r=m(X,"DIV",{class:!0});var ee=c(r);l=R(ee,"Otevřená komunitní kryptoměnová konference"),ee.forEach(o),n=O(X),u=m(X,"DIV",{class:!0});var fe=c(u);p=m(fe,"A",{href:!0});var oe=c(p);$e(d.$$.fragment,oe),oe.forEach(o),fe.forEach(o),v=O(X),g=m(X,"DIV",{class:!0});var Q=c(g);_=m(Q,"DIV",{class:!0});var se=c(_);b=m(se,"DIV",{class:!0});var ue=c(b);D=m(ue,"I",{class:!0}),c(D).forEach(o),ue.forEach(o),A=O(se),w=m(se,"DIV",{class:!0});var ne=c(w);y=R(ne,"3.-4. červen 2023"),ne.forEach(o),se.forEach(o),E=O(Q),V=m(Q,"DIV",{class:!0});var de=c(V);N=m(de,"DIV",{class:!0});var pe=c(N);U=m(pe,"I",{class:!0}),c(U).forEach(o),pe.forEach(o),S=O(de),L=m(de,"DIV",{class:!0});var _e=c(L);k=R(_e,"Gabriel Loci, Praha"),_e.forEach(o),de.forEach(o),Q.forEach(o),I=O(X),j=m(X,"DIV",{class:!0});var ve=c(j);P=O(ve),Z&&Z.l(ve),ve.forEach(o),X.forEach(o),q.forEach(o),te=O(C),B=m(C,"DIV",{class:!0});var be=c(B);G=m(be,"A",{href:!0});var ge=c(G);W=m(ge,"I",{class:!0}),c(W).forEach(o),ge.forEach(o),be.forEach(o),J=O(C),re=m(C,"DIV",{id:!0}),c(re).forEach(o),this.h()},h(){a(r,"class","uppercase font-semibold m-auto text-md text-center text-white/90"),a(p,"href","/"),a(u,"class","my-8"),a(D,"class","fa-regular fa-calendar-days text-custom-white"),a(b,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"),a(w,"class","text-white"),a(_,"class","flex items-center gap-3"),a(U,"class","fa-solid fa-location-dot text-white"),a(N,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"),a(L,"class","text-white"),a(V,"class","flex items-center gap-3"),a(g,"class","my-8 flex flex-wrap gap-3 lg:gap-10 text-lg lg:text-xl font-semibold justify-center"),a(j,"class","flex my-16 gap-4 flex-wrap"),a(e,"class","my-8"),a(t,"class","w-full m-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-left text-white"),a(W,"class","fa-regular fa-circle-down fa-2x text-white/70 hover:text-white"),a(G,"href","#below-header"),a(B,"class","md:hidden h-16 flex-none text-center py-4"),a(re,"id","below-header")},m(C,q){F(C,t,q),i(t,e),i(e,r),i(r,l),i(e,n),i(e,u),i(u,p),Ie(d,p,null),i(e,v),i(e,g),i(g,_),i(_,b),i(b,D),i(_,A),i(_,w),i(w,y),i(g,E),i(g,V),i(V,N),i(N,U),i(V,S),i(V,L),i(L,k),i(e,I),i(e,j),i(j,P),Z&&Z.m(j,null),F(C,te,q),F(C,B,q),i(B,G),i(G,W),F(C,J,q),F(C,re,q),ae=!0,ce||(le=[Ae(p,"click",f[2]),Ae(G,"click",St)],ce=!0)},p(C,q){C[1]&&C[1].wave?Z?Z.p(C,q):(Z=ut(C),Z.c(),Z.m(j,null)):Z&&(Z.d(1),Z=null)},i(C){ae||(s||Ce(()=>{s=ye(r,We,{duration:2e3,delay:500}),s.start()}),Y(d.$$.fragment,C),z||Ce(()=>{z=ye(g,We,{duration:2e3,delay:500}),z.start()}),Y(H),ae=!0)},o(C){ie(d.$$.fragment,C),ae=!1},d(C){C&&o(t),De(d),Z&&Z.d(),C&&o(te),C&&o(B),C&&o(J),C&&o(re),ce=!1,mt(le)}}}function ut(f){let t,e,r,l=f[1].wave.live.left+"",s,n,u=f[1].wave.price+"",p,d;return{c(){t=h("div"),e=K("Zbývá "),r=h("span"),s=K(l),n=K(`
              vstupenek (za `),p=K(u),d=K(" Kč)"),this.h()},l(v){t=m(v,"DIV",{class:!0});var g=c(t);e=R(g,"Zbývá "),r=m(g,"SPAN",{class:!0});var _=c(r);s=R(_,l),_.forEach(o),n=R(g,`
              vstupenek (za `),p=R(g,u),d=R(g," Kč)"),g.forEach(o),this.h()},h(){a(r,"class","font-bold"),a(t,"class","my-auto sm:mt-0 mt-2 sm:ml-0 ml-2 italic opacity-50")},m(v,g){F(v,t,g),i(t,e),i(t,r),i(r,s),i(t,n),i(t,p),i(t,d)},p(v,g){g&2&&l!==(l=v[1].wave.live.left+"")&&Re(s,l),g&2&&u!==(u=v[1].wave.price+"")&&Re(p,u)},d(v){v&&o(t)}}}function Nt(f){let t=!["/kiosk","/tv-screen"].includes(f[0].url.pathname),e,r,l=t&&ft(f);return{c(){l&&l.c(),e=me()},l(s){l&&l.l(s),e=me()},m(s,n){l&&l.m(s,n),F(s,e,n),r=!0},p(s,[n]){n&1&&(t=!["/kiosk","/tv-screen"].includes(s[0].url.pathname)),t?l?(l.p(s,n),n&1&&Y(l,1)):(l=ft(s),l.c(),Y(l,1),l.m(e.parentNode,e)):l&&(Be(),ie(l,1,1,()=>{l=null}),He())},i(s){r||(Y(l),r=!0)},o(s){ie(l),r=!1},d(s){l&&l.d(s),s&&o(e)}}}function St(f){f.preventDefault();const t=f.currentTarget,e=new URL(t.href).hash.replace("#",""),r=document.getElementById(e);window.scrollTo({top:r.offsetTop,behavior:"smooth"})}function Gt(f,t,e){let r,l;ze(f,Fe,n=>e(0,r=n)),ze(f,Ct,n=>e(1,l=n));function s(){yt.update(n=>(n.hpTrack="top",n))}return[r,l,s]}class Ut extends Te{constructor(t){super(),Me(this,t,Gt,Nt,Le,{})}}const dt="1.9.0";function ht(f){let t,e,r,l,s,n,u,p,d,v,g,_,b,D,A,w,y,E,V,N,U,S,L,k,z,I,j,P,te,B,G,W,J,re,ae,ce,le,H,Z,C,q,X,ee,fe,oe;return S=new vt({props:{size:"normal"}}),{c(){t=h("div"),e=h("div"),r=h("div"),l=h("div"),s=h("a"),n=h("img"),p=M(),d=h("div"),v=K("3.-4. červen 2023 @ Gabriel Loci, Praha"),g=M(),_=h("div"),b=K("Otevřená komunitní kryptoměnová konference"),D=M(),A=h("div"),w=h("a"),y=h("i"),E=K("  Dokumentace"),N=M(),U=h("div"),xe(S.$$.fragment),L=M(),k=h("div"),z=h("div"),I=h("i"),j=K(` S láskou organizuje
        `),P=h("a"),te=K("UTXO Foundation, z.s."),B=M(),G=h("div"),W=h("a"),J=h("span"),re=K("v"),ae=K(dt),ce=K(`
        | powered by
        `),le=h("a"),H=h("img"),C=K(" Svelte"),q=K(`
        | grafický návrh
        `),X=h("a"),ee=h("img"),this.h()},l(Q){t=m(Q,"DIV",{class:!0});var se=c(t);e=m(se,"DIV",{class:!0});var ue=c(e);r=m(ue,"DIV",{class:!0});var ne=c(r);l=m(ne,"DIV",{});var de=c(l);s=m(de,"A",{href:!0});var pe=c(s);n=m(pe,"IMG",{src:!0,alt:!0,class:!0}),pe.forEach(o),de.forEach(o),p=O(ne),d=m(ne,"DIV",{class:!0});var _e=c(d);v=R(_e,"3.-4. červen 2023 @ Gabriel Loci, Praha"),_e.forEach(o),g=O(ne),_=m(ne,"DIV",{class:!0});var ve=c(_);b=R(ve,"Otevřená komunitní kryptoměnová konference"),ve.forEach(o),D=O(ne),A=m(ne,"DIV",{class:!0});var be=c(A);w=m(be,"A",{href:!0,class:!0,target:!0});var ge=c(w);y=m(ge,"I",{class:!0}),c(y).forEach(o),E=R(ge,"  Dokumentace"),ge.forEach(o),be.forEach(o),ne.forEach(o),N=O(ue),U=m(ue,"DIV",{class:!0});var Oe=c(U);$e(S.$$.fragment,Oe),Oe.forEach(o),ue.forEach(o),L=O(se),k=m(se,"DIV",{class:!0});var ke=c(k);z=m(ke,"DIV",{class:!0});var we=c(z);I=m(we,"I",{class:!0}),c(I).forEach(o),j=R(we,` S láskou organizuje
        `),P=m(we,"A",{href:!0,class:!0,target:!0});var Ne=c(P);te=R(Ne,"UTXO Foundation, z.s."),Ne.forEach(o),we.forEach(o),B=O(ke),G=m(ke,"DIV",{});var he=c(G);W=m(he,"A",{href:!0,target:!0});var Se=c(W);J=m(Se,"SPAN",{class:!0});var Ve=c(J);re=R(Ve,"v"),ae=R(Ve,dt),Ve.forEach(o),Se.forEach(o),ce=R(he,`
        | powered by
        `),le=m(he,"A",{href:!0,class:!0,target:!0});var Ee=c(le);H=m(Ee,"IMG",{src:!0,class:!0,alt:!0}),C=R(Ee," Svelte"),Ee.forEach(o),q=R(he,`
        | grafický návrh
        `),X=m(he,"A",{href:!0,target:!0});var Ge=c(X);ee=m(Ge,"IMG",{src:!0,class:!0,alt:!0}),Ge.forEach(o),he.forEach(o),ke.forEach(o),se.forEach(o),this.h()},h(){Ze(n.src,u="/img/logo.svg")||a(n,"src",u),a(n,"alt","UTXO.23"),a(n,"class","w-32"),a(s,"href","/"),a(d,"class","mt-4 font-semibold"),a(_,"class","mt-2 font-thin"),a(y,"class","fas fa-book"),a(w,"href",V=f[0].bundle.links.docs),a(w,"class","hover:text-custom-green"),a(w,"target","_blank"),a(A,"class","mt-4"),a(r,"class","flex-1"),a(U,"class","sm:mt-0 mt-6 sm:w-1/3 mr-2"),a(e,"class","relative mx-auto px-6 pt-10 pb-2 sm:pb-6 max-w-7xl sm:flex pr-4"),a(I,"class","fas fa-heart text-red-500"),a(P,"href","https://utxo.foundation"),a(P,"class","underline hover:no-underline"),a(P,"target","_blank"),a(z,"class","flex-1 mt-2 mb-2"),a(J,"class","font-bold"),a(W,"href","https://github.com/utxo-foundation/utxo23-web"),a(W,"target","_blank"),Ze(H.src,Z="/img/svelte-logo.svg")||a(H,"src",Z),a(H,"class","w-5 inline"),a(H,"alt","Svelte"),a(le,"href","https://svelte.dev/"),a(le,"class","font-bold"),a(le,"target","_blank"),Ze(ee.src,fe="/img/pen-production-logo.svg")||a(ee,"src",fe),a(ee,"class","w-28 inline-block pb-2 ml-1"),a(ee,"alt","Pen&Production"),a(X,"href","https://www.ppmedia.cz/"),a(X,"target","_blank"),a(k,"class","relative mx-auto px-6 pt-10 pb-6 max-w-6xl text-xs opacity-50 sm:flex"),a(t,"class","bg-gradient-to-b from-custom-darkpurple to-custom-darkestpurple text-white print:hidden")},m(Q,se){F(Q,t,se),i(t,e),i(e,r),i(r,l),i(l,s),i(s,n),i(r,p),i(r,d),i(d,v),i(r,g),i(r,_),i(_,b),i(r,D),i(r,A),i(A,w),i(w,y),i(w,E),i(e,N),i(e,U),Ie(S,U,null),i(t,L),i(t,k),i(k,z),i(z,I),i(z,j),i(z,P),i(P,te),i(k,B),i(k,G),i(G,W),i(W,J),i(J,re),i(J,ae),i(G,ce),i(G,le),i(le,H),i(le,C),i(G,q),i(G,X),i(X,ee),oe=!0},p(Q,se){(!oe||se&1&&V!==(V=Q[0].bundle.links.docs))&&a(w,"href",V)},i(Q){oe||(Y(S.$$.fragment,Q),oe=!0)},o(Q){ie(S.$$.fragment,Q),oe=!1},d(Q){Q&&o(t),De(S)}}}function Zt(f){let t=f[0].bundle&&!["/kiosk","/tv-screen"].includes(f[1].url.pathname),e,r,l=t&&ht(f);return{c(){l&&l.c(),e=me()},l(s){l&&l.l(s),e=me()},m(s,n){l&&l.m(s,n),F(s,e,n),r=!0},p(s,[n]){n&3&&(t=s[0].bundle&&!["/kiosk","/tv-screen"].includes(s[1].url.pathname)),t?l?(l.p(s,n),n&3&&Y(l,1)):(l=ht(s),l.c(),Y(l,1),l.m(e.parentNode,e)):l&&(Be(),ie(l,1,1,()=>{l=null}),He())},i(s){r||(Y(l),r=!0)},o(s){ie(l),r=!1},d(s){l&&l.d(s),s&&o(e)}}}function jt(f,t,e){let r;ze(f,Fe,s=>e(1,r=s));let{data:l}=t;return f.$$set=s=>{"data"in s&&e(0,l=s.data)},[l,r]}class Pt extends Te{constructor(t){super(),Me(this,t,jt,Zt,Le,{data:0})}}function Bt(f){let t;const e=f[2].default,r=_t(e,f,f[3],null);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,s){r&&r.m(l,s),t=!0},p(l,s){r&&r.p&&(!t||s&8)&&bt(r,e,l,l[3],t?wt(e,l[3],s,null):kt(l[3]),null)},i(l){t||(Y(r,l),t=!0)},o(l){ie(r,l),t=!1},d(l){r&&r.d(l)}}}function Ht(f){let t,e,r,l,s,n,u,p,d;return r=new Ut({}),n=new xt({props:{key:f[1].url,$$slots:{default:[Bt]},$$scope:{ctx:f}}}),p=new Pt({props:{data:f[0]}}),{c(){t=h("div"),e=h("div"),xe(r.$$.fragment),l=M(),s=h("main"),xe(n.$$.fragment),u=M(),xe(p.$$.fragment),this.h()},l(v){t=m(v,"DIV",{class:!0});var g=c(t);e=m(g,"DIV",{class:!0});var _=c(e);$e(r.$$.fragment,_),l=O(_),s=m(_,"MAIN",{});var b=c(s);$e(n.$$.fragment,b),b.forEach(o),_.forEach(o),u=O(g),$e(p.$$.fragment,g),g.forEach(o),this.h()},h(){a(e,"class","inset-0 bg-white"),a(t,"class","layout min-h-screen bg-custom-darkestpurple print:bg-white")},m(v,g){F(v,t,g),i(t,e),Ie(r,e,null),i(e,l),i(e,s),Ie(n,s,null),i(t,u),Ie(p,t,null),d=!0},p(v,[g]){const _={};g&2&&(_.key=v[1].url),g&8&&(_.$$scope={dirty:g,ctx:v}),n.$set(_);const b={};g&1&&(b.data=v[0]),p.$set(b)},i(v){d||(Y(r.$$.fragment,v),Y(n.$$.fragment,v),Y(p.$$.fragment,v),d=!0)},o(v){ie(r.$$.fragment,v),ie(n.$$.fragment,v),ie(p.$$.fragment,v),d=!1},d(v){v&&o(t),De(r),De(n),De(p)}}}function Ft(f,t,e){let r;ze(f,Fe,u=>e(1,r=u));let{$$slots:l={},$$scope:s}=t,{data:n}=t;return f.$$set=u=>{"data"in u&&e(0,n=u.data),"$$scope"in u&&e(3,s=u.$$scope)},[n,r,l,s]}class Rt extends Te{constructor(t){super(),Me(this,t,Ft,Ht,Le,{data:0})}}export{Rt as default};
