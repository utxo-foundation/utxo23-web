import{S as Ae,i as Me,s as Ve,e as ce,b as H,B as Xe,h as i,C as pe,a as M,c as S,k as m,l as v,m as c,n as s,D as Je,E as o,q as R,r as W,F as Te,g as Pe,t as le,d as Ze,f as J,w as xe,x as Ie,G as je,y as De,z as Le,H as pt,I as bt,J as kt,K as $,L as x,p as A,M as Ce,N as $e,u as Qe,o as Et,O as wt,P as yt,Q as Ct,R as $t,T as xt}from"../../chunks/index-aeb3fa06.js";import{p as qe}from"../../chunks/stores-6b0fab72.js";import{b as Ke,a as It,u as He,l as Dt}from"../../chunks/stores-6b77bacd.js";import{n as Ye}from"../../chunks/config-455f5b6c.js";import{f as Be,a as Fe,T as Lt}from"../../chunks/Transition-b4d62347.js";import{a as Vt}from"../../chunks/api-32a7a006.js";function et(f,t,e){const l=f.slice();return l[3]=t[e],l}function tt(f,t,e){const l=f.slice();return l[3]=t[e],l}function rt(f){let t,e,l=f[0]==="small"&&lt(f),r=f[0]==="normal"&&st(f);return{c(){l&&l.c(),t=M(),r&&r.c(),e=ce()},l(a){l&&l.l(a),t=S(a),r&&r.l(a),e=ce()},m(a,n){l&&l.m(a,n),H(a,t,n),r&&r.m(a,n),H(a,e,n)},p(a,n){a[0]==="small"?l?l.p(a,n):(l=lt(a),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),a[0]==="normal"?r?r.p(a,n):(r=st(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(a){l&&l.d(a),a&&i(t),r&&r.d(a),a&&i(e)}}}function lt(f){let t,e=f[2],l=[];for(let r=0;r<e.length;r+=1)l[r]=at(tt(f,e,r));return{c(){t=m("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=v(r,"DIV",{class:!0});var a=c(t);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(i),this.h()},h(){s(t,"class","flex block space-x-6 md:space-x-2 m-auto w-full justify-end text-center")},m(r,a){H(r,t,a);for(let n=0;n<l.length;n+=1)l[n].m(t,null)},p(r,a){if(a&6){e=r[2];let n;for(n=0;n<e.length;n+=1){const d=tt(r,e,n);l[n]?l[n].p(d,a):(l[n]=at(d),l[n].c(),l[n].m(t,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=e.length}},d(r){r&&i(t),Je(l,r)}}}function at(f){let t,e,l,r;return{c(){t=m("a"),e=m("i"),l=M(),this.h()},l(a){t=v(a,"A",{href:!0,class:!0,target:!0});var n=c(t);e=v(n,"I",{class:!0}),c(e).forEach(i),l=S(n),n.forEach(i),this.h()},h(){s(e,"class",f[3].ico),s(t,"href",r=f[1].links[f[3].link]),s(t,"class","w-6 h-6 bg-white rounded-lg hover:bg-utxo-gradient hover:text-white"),s(t,"target","_blank")},m(a,n){H(a,t,n),o(t,e),o(t,l)},p(a,n){n&2&&r!==(r=a[1].links[a[3].link])&&s(t,"href",r)},d(a){a&&i(t)}}}function st(f){let t,e,l=f[2],r=[];for(let a=0;a<l.length;a+=1)r[a]=ot(et(f,l,a));return{c(){t=m("div"),e=m("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=v(a,"DIV",{class:!0});var n=c(t);e=v(n,"DIV",{class:!0});var d=c(e);for(let p=0;p<r.length;p+=1)r[p].l(d);d.forEach(i),n.forEach(i),this.h()},h(){s(e,"class","sm:flex flex-wrap gap-3 justify-end"),s(t,"class","w-auto")},m(a,n){H(a,t,n),o(t,e);for(let d=0;d<r.length;d+=1)r[d].m(e,null)},p(a,n){if(n&6){l=a[2];let d;for(d=0;d<l.length;d+=1){const p=et(a,l,d);r[d]?r[d].p(p,n):(r[d]=ot(p),r[d].c(),r[d].m(e,null))}for(;d<r.length;d+=1)r[d].d(1);r.length=l.length}},d(a){a&&i(t),Je(r,a)}}}function ot(f){let t,e,l,r=f[3].name+"",a,n,d;return{c(){t=m("div"),e=m("a"),l=m("i"),a=R(r),d=M(),this.h()},l(p){t=v(p,"DIV",{class:!0});var u=c(t);e=v(u,"A",{href:!0,class:!0,target:!0});var h=c(e);l=v(h,"I",{class:!0}),c(l).forEach(i),a=W(h,r),h.forEach(i),d=S(u),u.forEach(i),this.h()},h(){s(l,"class",f[3].ico+" mr-2 my-auto"),s(e,"href",n=f[1].links[f[3].link]),s(e,"class","block flex"),s(e,"target","_blank"),s(t,"class","mr-4 sm:mr-0 inline-block sm:block hover:text-custom-green")},m(p,u){H(p,t,u),o(t,e),o(e,l),o(e,a),o(t,d)},p(p,u){u&2&&n!==(n=p[1].links[p[3].link])&&s(e,"href",n)},d(p){p&&i(t)}}}function zt(f){let t,e=f[1]&&rt(f);return{c(){e&&e.c(),t=ce()},l(l){e&&e.l(l),t=ce()},m(l,r){e&&e.m(l,r),H(l,t,r)},p(l,[r]){l[1]?e?e.p(l,r):(e=rt(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:Xe,o:Xe,d(l){e&&e.d(l),l&&i(t)}}}function Tt(f,t,e){let l;pe(f,Ke,n=>e(1,l=n));let{size:r="small"}=t;const a=[{link:"twitter",ico:"fa-brands fa-twitter",name:"Twitter"},{link:"instagram",ico:"fab fa-instagram",name:"Instagram"},{link:"telegram",ico:"fab fa-telegram",name:"Telegram"}];return f.$$set=n=>{"size"in n&&e(0,r=n.size)},[r,l,a]}class _t extends Ae{constructor(t){super(),Me(this,t,Tt,zt,Ve,{size:0})}}function it(f,t,e){const l=f.slice();return l[4]=t[e],l}function At(f){let t;return{c(){t=m("div"),this.h()},l(e){t=v(e,"DIV",{class:!0}),c(t).forEach(i),this.h()},h(){s(t,"class","flex")},m(e,l){H(e,t,l)},d(e){e&&i(t)}}}function Mt(f){let t,e,l;return{c(){t=m("a"),e=m("img"),this.h()},l(r){t=v(r,"A",{href:!0,class:!0});var a=c(t);e=v(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(i),this.h()},h(){je(e.src,l="/img/logo.svg")||s(e,"src",l),s(e,"class","h-6 mr-3 sm:h-9"),s(e,"alt","UTXO 23 Logo"),s(t,"href","/"),s(t,"class","flex")},m(r,a){H(r,t,a),o(t,e)},d(r){r&&i(t)}}}function nt(f){let t,e,l=f[4].text+"",r,a,n=f[4].newWindow?'&nbsp;<i class="fa-solid fa-up-right-from-square fa-sm opacity-70"></i>':"",d,p,u,h,g,_;return{c(){t=m("li"),e=m("a"),r=R(l),a=new bt(!1),p=M(),u=m("div"),h=M(),this.h()},l(k){t=v(k,"LI",{class:!0});var D=c(t);e=v(D,"A",{"sveltekit:prefetch":!0,href:!0,target:!0,class:!0});var T=c(e);r=W(T,l),a=kt(T,!1),T.forEach(i),p=S(D),u=v(D,"DIV",{class:!0}),c(u).forEach(i),h=S(D),D.forEach(i),this.h()},h(){a.a=null,s(e,"sveltekit:prefetch",""),s(e,"href",f[4].url),s(e,"target",f[4].newWindow?"_blank":"_self"),s(e,"class",d="block py-4 pl-3 pr-4 text-white rounded hover:bg-white/20 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:decoration-custom-green md:hover:decoration-2 md:hover:underline-offset-4 md:p-0 "+(f[1].url.pathname===f[4].url&&"md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple")),s(u,"class","md:hidden border-b absolute bottom-0 left-1/4 border-custom-green/50 w-1/2"),s(t,"class","relative")},m(k,D){H(k,t,D),o(t,e),o(e,r),a.m(n,e),o(t,p),o(t,u),o(t,h),g||(_=Te(e,"click",f[2]),g=!0)},p(k,D){D&2&&d!==(d="block py-4 pl-3 pr-4 text-white rounded hover:bg-white/20 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:decoration-custom-green md:hover:decoration-2 md:hover:underline-offset-4 md:p-0 "+(k[1].url.pathname===k[4].url&&"md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple"))&&s(e,"class",d)},d(k){k&&i(t),g=!1,_()}}}function ft(f){let t,e=!(f[1].url.pathname==="/"&&f[4].hideOnHomepage)&&nt(f);return{c(){e&&e.c(),t=ce()},l(l){e&&e.l(l),t=ce()},m(l,r){e&&e.m(l,r),H(l,t,r)},p(l,r){l[1].url.pathname==="/"&&l[4].hideOnHomepage?e&&(e.d(1),e=null):e?e.p(l,r):(e=nt(l),e.c(),e.m(t.parentNode,t))},d(l){e&&e.d(l),l&&i(t)}}}function ct(f){let t,e,l,r,a,n,d,p,u,h,g,_,k,D,T,E,C,w,V,N,U,O=Ye,L=[];for(let b=0;b<O.length;b+=1)L[b]=ft(it(f,O,b));return C=new _t({props:{size:"small"}}),{c(){t=m("div"),e=m("button"),l=m("span"),r=R("Zavřít menu"),a=M(),n=m("i"),p=M(),u=m("div"),h=m("a"),g=m("img"),k=M(),D=m("ul");for(let b=0;b<L.length;b+=1)L[b].c();T=M(),E=m("div"),xe(C.$$.fragment),this.h()},l(b){t=v(b,"DIV",{class:!0,id:!0});var z=c(t);e=v(z,"BUTTON",{type:!0,class:!0});var I=c(e);l=v(I,"SPAN",{class:!0});var P=c(l);r=W(P,"Zavřít menu"),P.forEach(i),a=S(I),n=v(I,"I",{class:!0}),c(n).forEach(i),I.forEach(i),p=S(z),u=v(z,"DIV",{class:!0});var Z=c(u);h=v(Z,"A",{href:!0,class:!0});var te=c(h);g=v(te,"IMG",{src:!0,class:!0,alt:!0}),te.forEach(i),k=S(Z),D=v(Z,"UL",{class:!0});var B=c(D);for(let q=0;q<L.length;q+=1)L[q].l(B);B.forEach(i),T=S(Z),E=v(Z,"DIV",{class:!0});var G=c(E);Ie(C.$$.fragment,G),G.forEach(i),Z.forEach(i),z.forEach(i),this.h()},h(){s(l,"class","sr-only"),s(n,"class","fa-solid fa-xmark fa-2x"),s(e,"type","button"),s(e,"class",d=(f[0]&&"hidden")+" absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"),je(g.src,_="/img/logo.svg")||s(g,"src",_),s(g,"class","h-10 m-auto"),s(g,"alt","UTXO 23 Logo"),s(h,"href","/"),s(h,"class","flex md:hidden"),s(D,"class","flex shrink-0 flex-col p-4 mt-4 text-center text-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"),s(E,"class","m-auto"),s(u,"class","flex flex-col md:flex-row my-auto w-full"),s(t,"class",w=(f[0]?"hidden":"block")+" fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto"),s(t,"id","navbar-default")},m(b,z){H(b,t,z),o(t,e),o(e,l),o(l,r),o(e,a),o(e,n),o(t,p),o(t,u),o(u,h),o(h,g),o(u,k),o(u,D);for(let I=0;I<L.length;I+=1)L[I].m(D,null);o(u,T),o(u,E),De(C,E,null),V=!0,N||(U=[Te(e,"click",f[2]),Te(h,"click",f[2])],N=!0)},p(b,z){if((!V||z&1&&d!==(d=(b[0]&&"hidden")+" absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"))&&s(e,"class",d),z&6){O=Ye;let I;for(I=0;I<O.length;I+=1){const P=it(b,O,I);L[I]?L[I].p(P,z):(L[I]=ft(P),L[I].c(),L[I].m(D,null))}for(;I<L.length;I+=1)L[I].d(1);L.length=O.length}(!V||z&1&&w!==(w=(b[0]?"hidden":"block")+" fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto"))&&s(t,"class",w)},i(b){V||(J(C.$$.fragment,b),V=!0)},o(b){le(C.$$.fragment,b),V=!1},d(b){b&&i(t),Je(L,b),Le(C),N=!1,pt(U)}}}function St(f){let t,e,l,r,a,n,d,p,u,h=f[0],g,_,k;function D(w,V){return w[1].url.pathname!=="/"?Mt:At}let T=D(f),E=T(f),C=ct(f);return{c(){t=m("nav"),e=m("div"),E.c(),l=M(),r=m("button"),a=m("span"),n=R("Otevřít menu"),d=M(),p=m("i"),u=M(),C.c(),this.h()},l(w){t=v(w,"NAV",{class:!0});var V=c(t);e=v(V,"DIV",{class:!0});var N=c(e);E.l(N),l=S(N),r=v(N,"BUTTON",{"data-collapse-toggle":!0,type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var U=c(r);a=v(U,"SPAN",{class:!0});var O=c(a);n=W(O,"Otevřít menu"),O.forEach(i),d=S(U),p=v(U,"I",{class:!0}),c(p).forEach(i),U.forEach(i),u=S(N),C.l(N),N.forEach(i),V.forEach(i),this.h()},h(){s(a,"class","sr-only"),s(p,"class","fa-sharp fa-solid fa-bars fa-2x"),s(r,"data-collapse-toggle","navbar-default"),s(r,"type","button"),s(r,"class","inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"),s(r,"aria-controls","navbar-default"),s(r,"aria-expanded","false"),s(e,"class","container flex flex-wrap items-center justify-between mx-auto max-w-7xl"),s(t,"class","px-2 sm:px-4 py-2.5")},m(w,V){H(w,t,V),o(t,e),E.m(e,null),o(e,l),o(e,r),o(r,a),o(a,n),o(r,d),o(r,p),o(e,u),C.m(e,null),g=!0,_||(k=Te(r,"click",f[3]),_=!0)},p(w,[V]){T!==(T=D(w))&&(E.d(1),E=T(w),E&&(E.c(),E.m(e,l))),V&1&&Ve(h,h=w[0])?(Pe(),le(C,1,1,Xe),Ze(),C=ct(w),C.c(),J(C,1),C.m(e,null)):C.p(w,V)},i(w){g||(J(C),g=!0)},o(w){le(C),g=!1},d(w){w&&i(t),E.d(),C.d(w),_=!1,k()}}}function Nt(f,t,e){let l;pe(f,qe,d=>e(1,l=d));let r=!0;function a(){r==!1&&e(0,r=!0)}function n(){e(0,r=!1)}return[r,l,a,n]}class Ot extends Ae{constructor(t){super(),Me(this,t,Nt,St,Ve,{})}}function Gt(f){let t,e,l,r,a,n,d,p,u,h,g,_,k,D,T,E,C,w,V,N,U,O,L,b,z,I,P,Z,te,B,G,q,Q,ae,se,ue,re,X,j,y,K,F;return{c(){t=$("svg"),e=$("g"),l=$("g"),r=$("g"),a=$("path"),n=$("g"),d=$("path"),u=$("g"),h=$("g"),g=$("path"),_=$("g"),k=$("path"),T=$("g"),E=$("g"),C=$("g"),w=$("path"),N=$("g"),U=$("g"),O=$("g"),L=$("g"),b=$("g"),z=$("path"),P=$("g"),Z=$("g"),te=$("g"),B=$("rect"),G=$("g"),q=$("g"),Q=$("path"),ae=$("g"),se=$("path"),re=$("defs"),X=$("linearGradient"),j=$("stop"),y=$("stop"),K=$("stop"),F=$("stop"),this.h()},l(ee){t=x(ee,"svg",{class:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0,"xml:space":!0,"xmlns:serif":!0,style:!0});var fe=c(t);e=x(fe,"g",{id:!0});var ie=c(e);l=x(ie,"g",{});var Y=c(l);r=x(Y,"g",{id:!0});var oe=c(r);a=x(oe,"path",{id:!0,d:!0,style:!0}),c(a).forEach(i),oe.forEach(i),n=x(Y,"g",{id:!0});var de=c(n);d=x(de,"path",{id:!0,d:!0,style:!0}),c(d).forEach(i),de.forEach(i),Y.forEach(i),u=x(ie,"g",{});var ne=c(u);h=x(ne,"g",{id:!0});var he=c(h);g=x(he,"path",{id:!0,d:!0,style:!0}),c(g).forEach(i),he.forEach(i),_=x(ne,"g",{id:!0});var _e=c(_);k=x(_e,"path",{id:!0,d:!0,style:!0}),c(k).forEach(i),_e.forEach(i),ne.forEach(i),T=x(ie,"g",{id:!0});var be=c(T);E=x(be,"g",{id:!0});var ve=c(E);C=x(ve,"g",{id:!0});var ke=c(C);w=x(ke,"path",{id:!0,d:!0,style:!0}),c(w).forEach(i),ke.forEach(i),ve.forEach(i),be.forEach(i),N=x(ie,"g",{});var ge=c(N);U=x(ge,"g",{id:!0});var Se=c(U);O=x(Se,"g",{id:!0});var Ee=c(O);L=x(Ee,"g",{id:!0});var we=c(L);b=x(we,"g",{id:!0});var Ne=c(b);z=x(Ne,"path",{id:!0,d:!0,style:!0}),c(z).forEach(i),Ne.forEach(i),we.forEach(i),Ee.forEach(i),Se.forEach(i),ge.forEach(i),P=x(ie,"g",{});var me=c(P);Z=x(me,"g",{id:!0});var Oe=c(Z);te=x(Oe,"g",{id:!0});var ze=c(te);B=x(ze,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,style:!0}),c(B).forEach(i),ze.forEach(i),Oe.forEach(i),G=x(me,"g",{transform:!0});var ye=c(G);q=x(ye,"g",{transform:!0});var Ge=c(q);Q=x(Ge,"path",{d:!0,style:!0}),c(Q).forEach(i),Ge.forEach(i),ae=x(ye,"g",{transform:!0});var Re=c(ae);se=x(Re,"path",{d:!0,style:!0}),c(se).forEach(i),Re.forEach(i),ye.forEach(i),me.forEach(i),ie.forEach(i),re=x(fe,"defs",{});var We=c(re);X=x(We,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0,gradientTransform:!0});var Ue=c(X);j=x(Ue,"stop",{offset:!0,style:!0}),c(j).forEach(i),y=x(Ue,"stop",{offset:!0,style:!0}),c(y).forEach(i),K=x(Ue,"stop",{offset:!0,style:!0}),c(K).forEach(i),F=x(Ue,"stop",{offset:!0,style:!0}),c(F).forEach(i),Ue.forEach(i),We.forEach(i),fe.forEach(i),this.h()},h(){s(a,"id","path16"),s(a,"d","M119.041,0.333L119.372,69.571L102.368,69.667L102.039,0.429L119.041,0.333Z"),A(a,"fill","white"),A(a,"fill-rule","nonzero"),s(r,"id","g14"),s(d,"id","path20"),s(d,"d","M144.606,27L144.705,43.997L76.805,44.333L76.705,27.336L144.606,27Z"),A(d,"fill","white"),A(d,"fill-rule","nonzero"),s(n,"id","g18"),s(g,"id","path24"),s(g,"d","M211.944,13.004L155.7,69.753L143.624,57.821L199.868,1.072L211.944,13.004Z"),A(g,"fill","white"),A(g,"fill-rule","nonzero"),s(h,"id","g22"),s(k,"id","path28"),s(k,"d","M212.787,56.826L200.863,68.902L144.115,12.666L156.038,0.59L212.787,56.826Z"),A(k,"fill","white"),A(k,"fill-rule","nonzero"),s(_,"id","g26"),s(w,"id","path40"),s(w,"d","M248.274,17.181C257.843,17.181 265.662,25.136 265.662,35.021C265.662,44.905 257.843,52.86 248.274,52.86C238.704,52.86 230.886,44.905 230.886,35.021C230.886,25.136 238.704,17.181 248.274,17.181M248.274,0.333C229.332,0.333 214.038,15.896 214.038,35.021C214.038,54.145 229.332,69.708 248.274,69.708C267.215,69.708 282.51,54.145 282.51,35.021C282.51,15.896 267.215,0.333 248.274,0.333"),A(w,"fill","white"),A(w,"fill-rule","nonzero"),s(C,"id","g38"),s(E,"id","g32"),s(T,"id","g30"),s(z,"id","path60"),s(z,"d","M44.877,19.683C49.465,22.955 52.328,28.351 52.328,34.288C52.328,44.137 44.521,52.081 34.941,52.081C25.361,52.081 17.555,44.137 17.555,34.288C17.555,28.399 20.372,23.043 24.893,19.764L13.645,7.085C5.619,13.555 0.705,23.48 0.705,34.288C0.705,53.451 16.011,69.024 34.941,69.024C53.871,69.024 69.177,53.451 69.177,34.288C69.177,23.433 64.22,13.468 56.129,7L44.877,19.683Z"),A(z,"fill","url(#_Linear1)"),A(z,"fill-rule","nonzero"),s(b,"id","g52"),s(L,"id","g50"),s(O,"id","g44"),s(U,"id","g42"),s(B,"id","path70"),s(B,"x","282.752"),s(B,"y","59.747"),s(B,"width","8.877"),s(B,"height","8.877"),A(B,"fill","white"),A(B,"fill-rule","nonzero"),s(te,"id","g64"),s(Z,"id","g62"),s(Q,"d","M0.059,-0.127L0.334,-0.393C0.342,-0.401 0.35,-0.409 0.359,-0.419C0.368,-0.428 0.376,-0.437 0.383,-0.447C0.39,-0.457 0.395,-0.468 0.4,-0.479C0.405,-0.49 0.407,-0.501 0.407,-0.513C0.407,-0.528 0.404,-0.541 0.399,-0.552C0.393,-0.563 0.385,-0.573 0.376,-0.581C0.367,-0.589 0.356,-0.595 0.344,-0.6C0.331,-0.604 0.318,-0.606 0.304,-0.606C0.274,-0.606 0.249,-0.597 0.23,-0.58C0.211,-0.563 0.199,-0.539 0.195,-0.51L0.069,-0.52C0.072,-0.553 0.08,-0.582 0.093,-0.607C0.106,-0.632 0.122,-0.652 0.143,-0.669C0.164,-0.686 0.188,-0.698 0.215,-0.707C0.242,-0.716 0.272,-0.72 0.304,-0.72C0.336,-0.72 0.366,-0.716 0.394,-0.708C0.421,-0.699 0.445,-0.687 0.466,-0.671C0.487,-0.654 0.503,-0.633 0.515,-0.608C0.527,-0.583 0.533,-0.553 0.533,-0.519C0.533,-0.474 0.523,-0.436 0.503,-0.404C0.482,-0.371 0.456,-0.34 0.424,-0.311L0.205,-0.108L0.533,-0.108L0.533,-0L0.059,-0L0.059,-0.127Z"),A(Q,"fill","white"),A(Q,"fill-rule","nonzero"),s(q,"transform","matrix(11.3461,0,0,11.3461,323.671,43.5138)"),s(se,"d","M0.222,-0.423L0.253,-0.423C0.27,-0.423 0.287,-0.424 0.304,-0.426C0.32,-0.428 0.335,-0.432 0.348,-0.439C0.361,-0.446 0.371,-0.455 0.379,-0.468C0.387,-0.481 0.391,-0.498 0.391,-0.519C0.391,-0.546 0.382,-0.569 0.363,-0.586C0.344,-0.603 0.32,-0.612 0.29,-0.612C0.266,-0.612 0.245,-0.605 0.226,-0.592C0.207,-0.578 0.193,-0.559 0.184,-0.534L0.057,-0.568C0.065,-0.594 0.076,-0.617 0.091,-0.636C0.106,-0.655 0.123,-0.671 0.143,-0.684C0.163,-0.696 0.185,-0.705 0.209,-0.711C0.233,-0.717 0.258,-0.72 0.284,-0.72C0.315,-0.72 0.344,-0.716 0.371,-0.708C0.398,-0.7 0.422,-0.688 0.443,-0.673C0.464,-0.657 0.48,-0.637 0.493,-0.614C0.505,-0.59 0.511,-0.562 0.511,-0.531C0.511,-0.493 0.5,-0.459 0.479,-0.43C0.458,-0.4 0.428,-0.38 0.39,-0.371L0.39,-0.369C0.435,-0.362 0.47,-0.343 0.493,-0.311C0.516,-0.279 0.528,-0.241 0.528,-0.197C0.528,-0.163 0.522,-0.133 0.509,-0.107C0.496,-0.081 0.478,-0.059 0.456,-0.042C0.434,-0.024 0.409,-0.011 0.38,-0.002C0.351,0.008 0.32,0.012 0.289,0.012C0.26,0.012 0.232,0.009 0.206,0.003C0.18,-0.004 0.157,-0.014 0.136,-0.027C0.115,-0.04 0.096,-0.057 0.081,-0.079C0.066,-0.099 0.054,-0.125 0.046,-0.154L0.174,-0.188C0.181,-0.159 0.194,-0.136 0.213,-0.12C0.232,-0.104 0.257,-0.096 0.289,-0.096C0.305,-0.096 0.32,-0.099 0.335,-0.104C0.349,-0.109 0.362,-0.117 0.373,-0.127C0.384,-0.136 0.392,-0.148 0.399,-0.162C0.405,-0.175 0.408,-0.19 0.408,-0.207C0.408,-0.23 0.403,-0.248 0.394,-0.263C0.384,-0.277 0.372,-0.288 0.357,-0.296C0.341,-0.303 0.325,-0.308 0.306,-0.311C0.287,-0.314 0.269,-0.315 0.251,-0.315L0.222,-0.315L0.222,-0.423Z"),A(se,"fill","white"),A(se,"fill-rule","nonzero"),s(ae,"transform","matrix(11.3461,0,0,11.3461,330.388,43.5138)"),s(G,"transform","matrix(8.383,0,0,8.383,-2415.97,-295.918)"),s(e,"id","g10"),s(j,"offset","0"),A(j,"stop-color","rgb(0,216,130)"),A(j,"stop-opacity","1"),s(y,"offset","0"),A(y,"stop-color","rgb(5,187,188)"),A(y,"stop-opacity","1"),s(K,"offset","0.01"),A(K,"stop-color","rgb(0,216,130)"),A(K,"stop-opacity","1"),s(F,"offset","1"),A(F,"stop-color","rgb(193,105,219)"),A(F,"stop-opacity","1"),s(X,"id","_Linear1"),s(X,"x1","0"),s(X,"y1","0"),s(X,"x2","1"),s(X,"y2","0"),s(X,"gradientUnits","userSpaceOnUse"),s(X,"gradientTransform","matrix(58.1935,-21.0445,21.0445,58.1935,7.78231,45.1011)"),s(t,"class",f[1]),s(t,"height","100%"),s(t,"viewBox","0 0 405 70"),s(t,"version","1.1"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(t,"xml:space","preserve"),s(t,"xmlns:serif","http://www.serif.com/"),A(t,"fill-rule","evenodd"),A(t,"clip-rule","evenodd"),A(t,"stroke-linejoin","round"),A(t,"stroke-miterlimit","2")},m(ee,fe){H(ee,t,fe),o(t,e),o(e,l),o(l,r),o(r,a),o(l,n),o(n,d),o(e,u),o(u,h),o(h,g),o(u,_),o(_,k),o(e,T),o(T,E),o(E,C),o(C,w),o(e,N),o(N,U),o(U,O),o(O,L),o(L,b),o(b,z),o(e,P),o(P,Z),o(Z,te),o(te,B),o(P,G),o(G,q),o(q,Q),o(G,ae),o(ae,se),o(t,re),o(re,X),o(X,j),o(X,y),o(X,K),o(X,F)},p(ee,[fe]){f=ee,fe&2&&s(t,"class",f[1])},i(ee){p||Ce(()=>{p=$e(l,Be,{y:-50,duration:f[0]/4,delay:f[0]/12}),p.start()}),D||Ce(()=>{D=$e(u,Be,{y:50,duration:f[0]/4,delay:f[0]/6}),D.start()}),V||Ce(()=>{V=$e(T,Be,{x:50,duration:f[0]/4,delay:f[0]/4}),V.start()}),I||Ce(()=>{I=$e(N,Be,{x:-50,duration:f[0]/4,delay:0}),I.start()}),ue||Ce(()=>{ue=$e(P,Fe,{duration:f[0]/2,delay:f[0]/2}),ue.start()})},o:Xe,d(ee){ee&&i(t)}}}function Ut(f,t,e){let{duration:l=2e3}=t,{classes:r}=t;return f.$$set=a=>{"duration"in a&&e(0,l=a.duration),"classes"in a&&e(1,r=a.classes)},[l,r]}class jt extends Ae{constructor(t){super(),Me(this,t,Ut,Gt,Ve,{duration:0,classes:1})}}function ut(f){let t,e,l,r,a,n,d,p;r=new Ot({});let u=f[0].url.pathname==="/"&&dt(f);return{c(){t=m("header"),e=m("div"),l=m("div"),xe(r.$$.fragment),a=M(),u&&u.c(),this.h()},l(h){t=v(h,"HEADER",{class:!0});var g=c(t);e=v(g,"DIV",{class:!0});var _=c(e);l=v(_,"DIV",{});var k=c(l);Ie(r.$$.fragment,k),k.forEach(i),a=S(_),u&&u.l(_),_.forEach(i),g.forEach(i),this.h()},h(){s(e,"class",n="flex flex-col "+(f[0].url.pathname=="/"?"min-h-[100vh] md:min-h-[70vh] bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-darkpurple/80":"bg-gradient-to-r from-black/40 via-custom-green/70 to-custom-darkpurple/80")),s(t,"class",d="relative bg-center bg-cover "+(f[0].url.pathname!=="/tv"?"bg-[url('/img/bg-utxo-05.jpg')]":"")+" bg-no-repeat bg-custom-darkestpurple print:hidden")},m(h,g){H(h,t,g),o(t,e),o(e,l),De(r,l,null),o(e,a),u&&u.m(e,null),p=!0},p(h,g){h[0].url.pathname==="/"?u?(u.p(h,g),g&1&&J(u,1)):(u=dt(h),u.c(),J(u,1),u.m(e,null)):u&&(Pe(),le(u,1,1,()=>{u=null}),Ze()),(!p||g&1&&n!==(n="flex flex-col "+(h[0].url.pathname=="/"?"min-h-[100vh] md:min-h-[70vh] bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-darkpurple/80":"bg-gradient-to-r from-black/40 via-custom-green/70 to-custom-darkpurple/80")))&&s(e,"class",n),(!p||g&1&&d!==(d="relative bg-center bg-cover "+(h[0].url.pathname!=="/tv"?"bg-[url('/img/bg-utxo-05.jpg')]":"")+" bg-no-repeat bg-custom-darkestpurple print:hidden"))&&s(t,"class",d)},i(h){p||(J(r.$$.fragment,h),J(u),p=!0)},o(h){le(r.$$.fragment,h),le(u),p=!1},d(h){h&&i(t),Le(r),u&&u.d()}}}function dt(f){let t,e,l,r,a,n,d,p,u,h,g,_,k,D,T,E,C,w,V,N,U,O,L,b,z,I,P,Z,te,B,G,q,Q,ae,se,ue,re;u=new jt({props:{duration:"1500",classes:"w-3/4 md:w-1/2 m-auto"}});let X=!1,j=f[1]&&f[1].wave&&ht(f);return{c(){t=m("div"),e=m("div"),l=m("div"),r=R("Otevřená komunitní kryptoměnová konference"),n=M(),d=m("div"),p=m("a"),xe(u.$$.fragment),h=M(),g=m("div"),_=m("div"),k=m("div"),D=m("i"),T=M(),E=m("div"),C=R("2.-4. červen 2023"),w=M(),V=m("div"),N=m("div"),U=m("i"),O=M(),L=m("div"),b=R("Gabriel Loci, Praha"),I=M(),P=m("div"),Z=M(),j&&j.c(),te=M(),B=m("div"),G=m("a"),q=m("i"),Q=M(),ae=m("div"),this.h()},l(y){t=v(y,"DIV",{class:!0});var K=c(t);e=v(K,"DIV",{class:!0});var F=c(e);l=v(F,"DIV",{class:!0});var ee=c(l);r=W(ee,"Otevřená komunitní kryptoměnová konference"),ee.forEach(i),n=S(F),d=v(F,"DIV",{class:!0});var fe=c(d);p=v(fe,"A",{href:!0});var ie=c(p);Ie(u.$$.fragment,ie),ie.forEach(i),fe.forEach(i),h=S(F),g=v(F,"DIV",{class:!0});var Y=c(g);_=v(Y,"DIV",{class:!0});var oe=c(_);k=v(oe,"DIV",{class:!0});var de=c(k);D=v(de,"I",{class:!0}),c(D).forEach(i),de.forEach(i),T=S(oe),E=v(oe,"DIV",{class:!0});var ne=c(E);C=W(ne,"2.-4. červen 2023"),ne.forEach(i),oe.forEach(i),w=S(Y),V=v(Y,"DIV",{class:!0});var he=c(V);N=v(he,"DIV",{class:!0});var _e=c(N);U=v(_e,"I",{class:!0}),c(U).forEach(i),_e.forEach(i),O=S(he),L=v(he,"DIV",{class:!0});var be=c(L);b=W(be,"Gabriel Loci, Praha"),be.forEach(i),he.forEach(i),Y.forEach(i),I=S(F),P=v(F,"DIV",{class:!0});var ve=c(P);Z=S(ve),j&&j.l(ve),ve.forEach(i),F.forEach(i),K.forEach(i),te=S(y),B=v(y,"DIV",{class:!0});var ke=c(B);G=v(ke,"A",{href:!0});var ge=c(G);q=v(ge,"I",{class:!0}),c(q).forEach(i),ge.forEach(i),ke.forEach(i),Q=S(y),ae=v(y,"DIV",{id:!0}),c(ae).forEach(i),this.h()},h(){s(l,"class","uppercase font-semibold m-auto text-md text-center text-white/90"),s(p,"href","/"),s(d,"class","my-8"),s(D,"class","fa-regular fa-calendar-days text-custom-white"),s(k,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"),s(E,"class","text-white"),s(_,"class","flex items-center gap-3"),s(U,"class","fa-solid fa-location-dot text-white"),s(N,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"),s(L,"class","text-white"),s(V,"class","flex items-center gap-3"),s(g,"class","my-8 flex flex-wrap gap-3 lg:gap-10 text-lg lg:text-xl font-semibold justify-center"),s(P,"class","flex my-16 gap-4 flex-wrap"),s(e,"class","my-8"),s(t,"class","w-full m-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-left text-white"),s(q,"class","fa-regular fa-circle-down fa-2x text-white/70 hover:text-white"),s(G,"href","#below-header"),s(B,"class","md:hidden h-16 flex-none text-center py-4"),s(ae,"id","below-header")},m(y,K){H(y,t,K),o(t,e),o(e,l),o(l,r),o(e,n),o(e,d),o(d,p),De(u,p,null),o(e,h),o(e,g),o(g,_),o(_,k),o(k,D),o(_,T),o(_,E),o(E,C),o(g,w),o(g,V),o(V,N),o(N,U),o(V,O),o(V,L),o(L,b),o(e,I),o(e,P),o(P,Z),j&&j.m(P,null),H(y,te,K),H(y,B,K),o(B,G),o(G,q),H(y,Q,K),H(y,ae,K),se=!0,ue||(re=[Te(p,"click",f[2]),Te(G,"click",Zt)],ue=!0)},p(y,K){y[1]&&y[1].wave?j?j.p(y,K):(j=ht(y),j.c(),j.m(P,null)):j&&(j.d(1),j=null)},i(y){se||(a||Ce(()=>{a=$e(l,Fe,{duration:2e3,delay:500}),a.start()}),J(u.$$.fragment,y),z||Ce(()=>{z=$e(g,Fe,{duration:2e3,delay:500}),z.start()}),J(X),se=!0)},o(y){le(u.$$.fragment,y),se=!1},d(y){y&&i(t),Le(u),j&&j.d(),y&&i(te),y&&i(B),y&&i(Q),y&&i(ae),ue=!1,pt(re)}}}function ht(f){let t,e,l,r=f[1].wave.live.left+"",a,n,d=f[1].wave.price+"",p,u;return{c(){t=m("div"),e=R("Zbývá "),l=m("span"),a=R(r),n=R(`
              vstupenek (za `),p=R(d),u=R(" Kč)"),this.h()},l(h){t=v(h,"DIV",{class:!0});var g=c(t);e=W(g,"Zbývá "),l=v(g,"SPAN",{class:!0});var _=c(l);a=W(_,r),_.forEach(i),n=W(g,`
              vstupenek (za `),p=W(g,d),u=W(g," Kč)"),g.forEach(i),this.h()},h(){s(l,"class","font-bold"),s(t,"class","my-auto sm:mt-0 mt-2 sm:ml-0 ml-2 italic opacity-50")},m(h,g){H(h,t,g),o(t,e),o(t,l),o(l,a),o(t,n),o(t,p),o(t,u)},p(h,g){g&2&&r!==(r=h[1].wave.live.left+"")&&Qe(a,r),g&2&&d!==(d=h[1].wave.price+"")&&Qe(p,d)},d(h){h&&i(t)}}}function Pt(f){let t=!["/kiosk","/tv-screen"].includes(f[0].url.pathname),e,l,r=t&&ut(f);return{c(){r&&r.c(),e=ce()},l(a){r&&r.l(a),e=ce()},m(a,n){r&&r.m(a,n),H(a,e,n),l=!0},p(a,[n]){n&1&&(t=!["/kiosk","/tv-screen"].includes(a[0].url.pathname)),t?r?(r.p(a,n),n&1&&J(r,1)):(r=ut(a),r.c(),J(r,1),r.m(e.parentNode,e)):r&&(Pe(),le(r,1,1,()=>{r=null}),Ze())},i(a){l||(J(r),l=!0)},o(a){le(r),l=!1},d(a){r&&r.d(a),a&&i(e)}}}function Zt(f){f.preventDefault();const t=f.currentTarget,e=new URL(t.href).hash.replace("#",""),l=document.getElementById(e);window.scrollTo({top:l.offsetTop,behavior:"smooth"})}function Bt(f,t,e){let l,r;pe(f,qe,n=>e(0,l=n)),pe(f,It,n=>e(1,r=n));function a(){He.update(n=>(n.hpTrack="top",n))}return[l,r,a]}class Ht extends Ae{constructor(t){super(),Me(this,t,Bt,Pt,Ve,{})}}const mt="1.9.0";function vt(f){let t,e,l,r,a,n,d,p,u,h,g,_,k,D,T,E,C,w,V,N,U,O,L,b,z,I,P,Z,te,B,G,q,Q,ae,se,ue,re,X,j,y,K,F,ee,fe,ie;return O=new _t({props:{size:"normal"}}),{c(){t=m("div"),e=m("div"),l=m("div"),r=m("div"),a=m("a"),n=m("img"),p=M(),u=m("div"),h=R("2.-4. červen 2023 @ Gabriel Loci, Praha"),g=M(),_=m("div"),k=R("Otevřená komunitní kryptoměnová konference"),D=M(),T=m("div"),E=m("a"),C=m("i"),w=R("  Dokumentace"),N=M(),U=m("div"),xe(O.$$.fragment),L=M(),b=m("div"),z=m("div"),I=m("i"),P=R(` S láskou organizuje
        `),Z=m("a"),te=R("UTXO Foundation, z.s."),B=M(),G=m("div"),q=m("a"),Q=m("span"),ae=R("v"),se=R(mt),ue=R(`
        | powered by
        `),re=m("a"),X=m("img"),y=R(" Svelte"),K=R(`
        | grafický návrh
        `),F=m("a"),ee=m("img"),this.h()},l(Y){t=v(Y,"DIV",{class:!0});var oe=c(t);e=v(oe,"DIV",{class:!0});var de=c(e);l=v(de,"DIV",{class:!0});var ne=c(l);r=v(ne,"DIV",{});var he=c(r);a=v(he,"A",{href:!0});var _e=c(a);n=v(_e,"IMG",{src:!0,alt:!0,class:!0}),_e.forEach(i),he.forEach(i),p=S(ne),u=v(ne,"DIV",{class:!0});var be=c(u);h=W(be,"2.-4. červen 2023 @ Gabriel Loci, Praha"),be.forEach(i),g=S(ne),_=v(ne,"DIV",{class:!0});var ve=c(_);k=W(ve,"Otevřená komunitní kryptoměnová konference"),ve.forEach(i),D=S(ne),T=v(ne,"DIV",{class:!0});var ke=c(T);E=v(ke,"A",{href:!0,class:!0,target:!0});var ge=c(E);C=v(ge,"I",{class:!0}),c(C).forEach(i),w=W(ge,"  Dokumentace"),ge.forEach(i),ke.forEach(i),ne.forEach(i),N=S(de),U=v(de,"DIV",{class:!0});var Se=c(U);Ie(O.$$.fragment,Se),Se.forEach(i),de.forEach(i),L=S(oe),b=v(oe,"DIV",{class:!0});var Ee=c(b);z=v(Ee,"DIV",{class:!0});var we=c(z);I=v(we,"I",{class:!0}),c(I).forEach(i),P=W(we,` S láskou organizuje
        `),Z=v(we,"A",{href:!0,class:!0,target:!0});var Ne=c(Z);te=W(Ne,"UTXO Foundation, z.s."),Ne.forEach(i),we.forEach(i),B=S(Ee),G=v(Ee,"DIV",{});var me=c(G);q=v(me,"A",{href:!0,target:!0});var Oe=c(q);Q=v(Oe,"SPAN",{class:!0});var ze=c(Q);ae=W(ze,"v"),se=W(ze,mt),ze.forEach(i),Oe.forEach(i),ue=W(me,`
        | powered by
        `),re=v(me,"A",{href:!0,class:!0,target:!0});var ye=c(re);X=v(ye,"IMG",{src:!0,class:!0,alt:!0}),y=W(ye," Svelte"),ye.forEach(i),K=W(me,`
        | grafický návrh
        `),F=v(me,"A",{href:!0,target:!0});var Ge=c(F);ee=v(Ge,"IMG",{src:!0,class:!0,alt:!0}),Ge.forEach(i),me.forEach(i),Ee.forEach(i),oe.forEach(i),this.h()},h(){je(n.src,d="/img/logo.svg")||s(n,"src",d),s(n,"alt","UTXO.23"),s(n,"class","w-32"),s(a,"href","/"),s(u,"class","mt-4 font-semibold"),s(_,"class","mt-2 font-thin"),s(C,"class","fas fa-book"),s(E,"href",V=f[0].links.docs),s(E,"class","hover:text-custom-green"),s(E,"target","_blank"),s(T,"class","mt-4"),s(l,"class","flex-1"),s(U,"class","sm:mt-0 mt-6 sm:w-1/3 mr-2"),s(e,"class","relative mx-auto px-6 pt-10 pb-2 sm:pb-6 max-w-7xl sm:flex pr-4"),s(I,"class","fas fa-heart text-red-500"),s(Z,"href","https://utxo.foundation"),s(Z,"class","underline hover:no-underline"),s(Z,"target","_blank"),s(z,"class","flex-1 mt-2 mb-2"),s(Q,"class","font-bold"),s(q,"href","https://github.com/utxo-foundation/utxo23-web"),s(q,"target","_blank"),je(X.src,j="/img/svelte-logo.svg")||s(X,"src",j),s(X,"class","w-5 inline"),s(X,"alt","Svelte"),s(re,"href","https://svelte.dev/"),s(re,"class","font-bold"),s(re,"target","_blank"),je(ee.src,fe="/img/pen-production-logo.svg")||s(ee,"src",fe),s(ee,"class","w-28 inline-block pb-2 ml-1"),s(ee,"alt","Pen&Production"),s(F,"href","https://www.ppmedia.cz/"),s(F,"target","_blank"),s(b,"class","relative mx-auto px-6 pt-10 pb-6 max-w-6xl text-xs opacity-50 sm:flex"),s(t,"class","bg-gradient-to-b from-custom-darkpurple to-custom-darkestpurple text-white print:hidden")},m(Y,oe){H(Y,t,oe),o(t,e),o(e,l),o(l,r),o(r,a),o(a,n),o(l,p),o(l,u),o(u,h),o(l,g),o(l,_),o(_,k),o(l,D),o(l,T),o(T,E),o(E,C),o(E,w),o(e,N),o(e,U),De(O,U,null),o(t,L),o(t,b),o(b,z),o(z,I),o(z,P),o(z,Z),o(Z,te),o(b,B),o(b,G),o(G,q),o(q,Q),o(Q,ae),o(Q,se),o(G,ue),o(G,re),o(re,X),o(re,y),o(G,K),o(G,F),o(F,ee),ie=!0},p(Y,oe){(!ie||oe&1&&V!==(V=Y[0].links.docs))&&s(E,"href",V)},i(Y){ie||(J(O.$$.fragment,Y),ie=!0)},o(Y){le(O.$$.fragment,Y),ie=!1},d(Y){Y&&i(t),Le(O)}}}function Xt(f){let t=f[0]&&!["/kiosk","/tv-screen"].includes(f[1].url.pathname),e,l,r=t&&vt(f);return{c(){r&&r.c(),e=ce()},l(a){r&&r.l(a),e=ce()},m(a,n){r&&r.m(a,n),H(a,e,n),l=!0},p(a,[n]){n&3&&(t=a[0]&&!["/kiosk","/tv-screen"].includes(a[1].url.pathname)),t?r?(r.p(a,n),n&3&&J(r,1)):(r=vt(a),r.c(),J(r,1),r.m(e.parentNode,e)):r&&(Pe(),le(r,1,1,()=>{r=null}),Ze())},i(a){l||(J(r),l=!0)},o(a){le(r),l=!1},d(a){r&&r.d(a),a&&i(e)}}}function qt(f,t,e){let l,r;return pe(f,Ke,a=>e(0,l=a)),pe(f,qe,a=>e(1,r=a)),[l,r]}class Ft extends Ae{constructor(t){super(),Me(this,t,qt,Xt,Ve,{})}}function gt(f){let t,e,l,r,a,n,d,p,u;return l=new Ht({}),n=new Lt({props:{key:f[0].url,$$slots:{default:[Jt]},$$scope:{ctx:f}}}),p=new Ft({}),{c(){t=m("div"),e=m("div"),xe(l.$$.fragment),r=M(),a=m("main"),xe(n.$$.fragment),d=M(),xe(p.$$.fragment),this.h()},l(h){t=v(h,"DIV",{class:!0});var g=c(t);e=v(g,"DIV",{class:!0});var _=c(e);Ie(l.$$.fragment,_),r=S(_),a=v(_,"MAIN",{});var k=c(a);Ie(n.$$.fragment,k),k.forEach(i),_.forEach(i),d=S(g),Ie(p.$$.fragment,g),g.forEach(i),this.h()},h(){s(e,"class","inset-0 bg-white"),s(t,"class","layout min-h-screen bg-custom-darkestpurple print:bg-white")},m(h,g){H(h,t,g),o(t,e),De(l,e,null),o(e,r),o(e,a),De(n,a,null),o(t,d),De(p,t,null),u=!0},p(h,g){const _={};g&1&&(_.key=h[0].url),g&8&&(_.$$scope={dirty:g,ctx:h}),n.$set(_)},i(h){u||(J(l.$$.fragment,h),J(n.$$.fragment,h),J(p.$$.fragment,h),u=!0)},o(h){le(l.$$.fragment,h),le(n.$$.fragment,h),le(p.$$.fragment,h),u=!1},d(h){h&&i(t),Le(l),Le(n),Le(p)}}}function Jt(f){let t;const e=f[2].default,l=yt(e,f,f[3],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,a){l&&l.m(r,a),t=!0},p(r,a){l&&l.p&&(!t||a&8)&&Ct(l,e,r,r[3],t?xt(e,r[3],a,null):$t(r[3]),null)},i(r){t||(J(l,r),t=!0)},o(r){le(l,r),t=!1},d(r){l&&l.d(r)}}}function Kt(f){let t,e,l=f[1]&&gt(f);return{c(){l&&l.c(),t=ce()},l(r){l&&l.l(r),t=ce()},m(r,a){l&&l.m(r,a),H(r,t,a),e=!0},p(r,[a]){r[1]?l?(l.p(r,a),a&2&&J(l,1)):(l=gt(r),l.c(),J(l,1),l.m(t.parentNode,t)):l&&(Pe(),le(l,1,1,()=>{l=null}),Ze())},i(r){e||(J(l),e=!0)},o(r){le(l),e=!1},d(r){l&&l.d(r),r&&i(t)}}}function Rt(f,t,e){let l,r;pe(f,qe,u=>e(0,l=u)),pe(f,He,u=>e(8,u)),pe(f,Ke,u=>e(1,r=u));let{$$slots:a={},$$scope:n}=t,d=null;async function p(){return Vt.loadBundle(l.url.hostname==="localhost"),!0}return Et(async()=>{p(),d=setInterval(()=>{p()},60*2e3);const u=localStorage.getItem("userData");u&&He.set(JSON.parse(u)),He.subscribe(h=>{localStorage.setItem("userData",JSON.stringify(h))}),setTimeout(()=>{Dt.set({loaded:!0})},300)}),wt(()=>{clearInterval(d)}),f.$$set=u=>{"$$scope"in u&&e(3,n=u.$$scope)},[l,r,a,n]}class lr extends Ae{constructor(t){super(),Me(this,t,Rt,Kt,Ve,{})}}export{lr as default};
