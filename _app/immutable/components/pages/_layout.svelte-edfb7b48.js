import{S as Ue,i as je,s as Me,e as Ee,b as W,B as Ge,h as i,a as T,c as O,k as d,l as h,m as f,n as a,C as Re,D as o,q as B,r as Z,E as Pe,g as Fe,t as fe,d as qe,f as le,F as Ze,w as ze,x as Ae,G as Be,y as Te,z as Oe,H as vt,I as pt,J as _t,K as C,L as $,p as N,M as Le,N as Ve,u as Qe,O as bt,P as kt,Q as wt,R as Et}from"../../chunks/index-6738d5d5.js";import{p as Ke}from"../../chunks/stores-c14b6e90.js";import{a as xt,u as yt}from"../../chunks/stores-4b2dd576.js";import{s as Xe}from"../../chunks/bundle-7848b8d0.js";import{f as We,a as He,T as Ct}from"../../chunks/Transition-c93588f5.js";function Ye(n,t,e){const l=n.slice();return l[2]=t[e],l}function et(n,t,e){const l=n.slice();return l[2]=t[e],l}function $t(n){let t,e,l=n[0]==="small"&&tt(n),r=n[0]==="normal"&&lt(n);return{c(){l&&l.c(),t=T(),r&&r.c(),e=Ee()},l(s){l&&l.l(s),t=O(s),r&&r.l(s),e=Ee()},m(s,c){l&&l.m(s,c),W(s,t,c),r&&r.m(s,c),W(s,e,c)},p(s,c){s[0]==="small"?l?l.p(s,c):(l=tt(s),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),s[0]==="normal"?r?r.p(s,c):(r=lt(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(s){l&&l.d(s),s&&i(t),r&&r.d(s),s&&i(e)}}}function tt(n){let t,e=n[1],l=[];for(let r=0;r<e.length;r+=1)l[r]=rt(et(n,e,r));return{c(){t=d("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=h(r,"DIV",{class:!0});var s=f(t);for(let c=0;c<l.length;c+=1)l[c].l(s);s.forEach(i),this.h()},h(){a(t,"class","flex block space-x-6 md:space-x-2 m-auto w-full justify-end text-center")},m(r,s){W(r,t,s);for(let c=0;c<l.length;c+=1)l[c].m(t,null)},p(r,s){if(s&2){e=r[1];let c;for(c=0;c<e.length;c+=1){const u=et(r,e,c);l[c]?l[c].p(u,s):(l[c]=rt(u),l[c].c(),l[c].m(t,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=e.length}},d(r){r&&i(t),Re(l,r)}}}function rt(n){let t,e,l;return{c(){t=d("a"),e=d("i"),l=T(),this.h()},l(r){t=h(r,"A",{href:!0,class:!0,target:!0,rel:!0});var s=f(t);e=h(s,"I",{class:!0}),f(e).forEach(i),l=O(s),s.forEach(i),this.h()},h(){a(e,"class",n[2].ico),a(t,"href",Xe.links[n[2].link]),a(t,"class","w-6 h-6 bg-white rounded-lg hover:bg-utxo-gradient hover:text-white"),a(t,"target","_blank"),a(t,"rel","noreferrer")},m(r,s){W(r,t,s),o(t,e),o(t,l)},p:Ge,d(r){r&&i(t)}}}function lt(n){let t,e,l=n[1],r=[];for(let s=0;s<l.length;s+=1)r[s]=at(Ye(n,l,s));return{c(){t=d("div"),e=d("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=h(s,"DIV",{class:!0});var c=f(t);e=h(c,"DIV",{class:!0});var u=f(e);for(let p=0;p<r.length;p+=1)r[p].l(u);u.forEach(i),c.forEach(i),this.h()},h(){a(e,"class","sm:flex flex-wrap gap-3 justify-end"),a(t,"class","w-auto")},m(s,c){W(s,t,c),o(t,e);for(let u=0;u<r.length;u+=1)r[u].m(e,null)},p(s,c){if(c&2){l=s[1];let u;for(u=0;u<l.length;u+=1){const p=Ye(s,l,u);r[u]?r[u].p(p,c):(r[u]=at(p),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=l.length}},d(s){s&&i(t),Re(r,s)}}}function at(n){let t,e,l,r=n[2].name+"",s,c;return{c(){t=d("div"),e=d("a"),l=d("i"),s=B(r),c=T(),this.h()},l(u){t=h(u,"DIV",{class:!0});var p=f(t);e=h(p,"A",{href:!0,class:!0,target:!0,rel:!0});var m=f(e);l=h(m,"I",{class:!0}),f(l).forEach(i),s=Z(m,r),m.forEach(i),c=O(p),p.forEach(i),this.h()},h(){a(l,"class",n[2].ico+" mr-2 my-auto"),a(e,"href",Xe.links[n[2].link]),a(e,"class","block flex"),a(e,"target","_blank"),a(e,"rel","noreferrer"),a(t,"class","mr-4 sm:mr-0 inline-block sm:block hover:text-custom-green")},m(u,p){W(u,t,p),o(t,e),o(e,l),o(e,s),o(t,c)},p:Ge,d(u){u&&i(t)}}}function It(n){let t,e=Xe&&$t(n);return{c(){e&&e.c(),t=Ee()},l(l){e&&e.l(l),t=Ee()},m(l,r){e&&e.m(l,r),W(l,t,r)},p(l,[r]){Xe&&e.p(l,r)},i:Ge,o:Ge,d(l){e&&e.d(l),l&&i(t)}}}function Dt(n,t,e){let{size:l="small"}=t;const r=[{link:"twitter",ico:"fa-brands fa-twitter",name:"Twitter"},{link:"instagram",ico:"fab fa-instagram",name:"Instagram"},{link:"fbpage",ico:"fab fa-facebook",name:"Facebook"},{link:"telegram",ico:"fab fa-telegram",name:"Telegram"}];return n.$$set=s=>{"size"in s&&e(0,l=s.size)},[l,r]}class gt extends Ue{constructor(t){super(),je(this,t,Dt,It,Me,{size:0})}}const st=[{text:"Domů",url:"/",newWindow:!1,hideOnHomepage:!0},{text:"Vstupenky",url:"https://vstupenky.utxo.cz/23/",newWindow:!0},{text:"Záznamy",url:"https://utxo.tv/",newWindow:!0},{text:"Fotky 2022",url:"/fotky",newWindow:!1},{text:"#PBW23",url:"https://prgblockweek.com/",newWindow:!0}];function ot(n,t,e){const l=n.slice();return l[4]=t[e],l}function Lt(n){let t;return{c(){t=d("div"),this.h()},l(e){t=h(e,"DIV",{class:!0}),f(t).forEach(i),this.h()},h(){a(t,"class","flex")},m(e,l){W(e,t,l)},d(e){e&&i(t)}}}function Vt(n){let t,e,l;return{c(){t=d("a"),e=d("img"),this.h()},l(r){t=h(r,"A",{href:!0,class:!0});var s=f(t);e=h(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(i),this.h()},h(){Be(e.src,l="/img/logo.svg")||a(e,"src",l),a(e,"class","h-6 mr-3 sm:h-9"),a(e,"alt","UTXO 23 Logo"),a(t,"href","/"),a(t,"class","flex")},m(r,s){W(r,t,s),o(t,e)},d(r){r&&i(t)}}}function it(n){let t,e,l=n[4].text+"",r,s,c=n[4].newWindow?'&nbsp;<i class="fa-solid fa-up-right-from-square fa-sm opacity-70"></i>':"",u,p,m,v,g,_;return{c(){t=d("li"),e=d("a"),r=B(l),s=new pt(!1),p=T(),m=d("div"),v=T(),this.h()},l(b){t=h(b,"LI",{class:!0});var D=f(t);e=h(D,"A",{"sveltekit:prefetch":!0,href:!0,target:!0,class:!0});var A=f(e);r=Z(A,l),s=_t(A,!1),A.forEach(i),p=O(D),m=h(D,"DIV",{class:!0}),f(m).forEach(i),v=O(D),D.forEach(i),this.h()},h(){s.a=null,a(e,"sveltekit:prefetch",""),a(e,"href",n[4].url),a(e,"target",n[4].newWindow?"_blank":"_self"),a(e,"class",u="block py-4 pl-3 pr-4 text-white rounded hover:bg-white/20 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:decoration-custom-green md:hover:decoration-2 md:hover:underline-offset-4 md:p-0 "+(n[1].url.pathname===n[4].url&&"md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple")),a(m,"class","md:hidden border-b absolute bottom-0 left-1/4 border-custom-green/50 w-1/2"),a(t,"class","relative")},m(b,D){W(b,t,D),o(t,e),o(e,r),s.m(c,e),o(t,p),o(t,m),o(t,v),g||(_=Pe(e,"click",n[2]),g=!0)},p(b,D){D&2&&u!==(u="block py-4 pl-3 pr-4 text-white rounded hover:bg-white/20 md:hover:bg-transparent md:border-0 md:hover:underline md:hover:decoration-custom-green md:hover:decoration-2 md:hover:underline-offset-4 md:p-0 "+(b[1].url.pathname===b[4].url&&"md:underline-offset-4 md:decoration-2 md:underline md:decoration-custom-purple"))&&a(e,"class",u)},d(b){b&&i(t),g=!1,_()}}}function nt(n){let t,e=!(n[1].url.pathname==="/"&&n[4].hideOnHomepage)&&it(n);return{c(){e&&e.c(),t=Ee()},l(l){e&&e.l(l),t=Ee()},m(l,r){e&&e.m(l,r),W(l,t,r)},p(l,r){l[1].url.pathname==="/"&&l[4].hideOnHomepage?e&&(e.d(1),e=null):e?e.p(l,r):(e=it(l),e.c(),e.m(t.parentNode,t))},d(l){e&&e.d(l),l&&i(t)}}}function ct(n){let t,e,l,r,s,c,u,p,m,v,g,_,b,D,A,w,y,x,V,G,U,P=st,L=[];for(let k=0;k<P.length;k+=1)L[k]=nt(ot(n,P,k));return y=new gt({props:{size:"small"}}),{c(){t=d("div"),e=d("button"),l=d("span"),r=B("Zavřít menu"),s=T(),c=d("i"),p=T(),m=d("div"),v=d("a"),g=d("img"),b=T(),D=d("ul");for(let k=0;k<L.length;k+=1)L[k].c();A=T(),w=d("div"),ze(y.$$.fragment),this.h()},l(k){t=h(k,"DIV",{class:!0,id:!0});var z=f(t);e=h(z,"BUTTON",{type:!0,class:!0});var I=f(e);l=h(I,"SPAN",{class:!0});var j=f(l);r=Z(j,"Zavřít menu"),j.forEach(i),s=O(I),c=h(I,"I",{class:!0}),f(c).forEach(i),I.forEach(i),p=O(z),m=h(z,"DIV",{class:!0});var M=f(m);v=h(M,"A",{href:!0,class:!0});var H=f(v);g=h(H,"IMG",{src:!0,class:!0,alt:!0}),H.forEach(i),b=O(M),D=h(M,"UL",{class:!0});var K=f(D);for(let q=0;q<L.length;q+=1)L[q].l(K);K.forEach(i),A=O(M),w=h(M,"DIV",{class:!0});var X=f(w);Ae(y.$$.fragment,X),X.forEach(i),M.forEach(i),z.forEach(i),this.h()},h(){a(l,"class","sr-only"),a(c,"class","fa-solid fa-xmark fa-2x"),a(e,"type","button"),a(e,"class",u=(n[0]&&"hidden")+" absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"),Be(g.src,_="/img/logo.svg")||a(g,"src",_),a(g,"class","h-10 m-auto"),a(g,"alt","UTXO 23 Logo"),a(v,"href","/"),a(v,"class","flex md:hidden"),a(D,"class","flex shrink-0 flex-col p-4 mt-4 text-center text-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"),a(w,"class","m-auto"),a(m,"class","flex flex-col md:flex-row my-auto w-full"),a(t,"class",x=(n[0]?"hidden":"block")+" fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto"),a(t,"id","navbar-default")},m(k,z){W(k,t,z),o(t,e),o(e,l),o(l,r),o(e,s),o(e,c),o(t,p),o(t,m),o(m,v),o(v,g),o(m,b),o(m,D);for(let I=0;I<L.length;I+=1)L[I].m(D,null);o(m,A),o(m,w),Te(y,w,null),V=!0,G||(U=[Pe(e,"click",n[2]),Pe(v,"click",n[2])],G=!0)},p(k,z){if((!V||z&1&&u!==(u=(k[0]&&"hidden")+" absolute top-5 right-5 text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"))&&a(e,"class",u),z&6){P=st;let I;for(I=0;I<P.length;I+=1){const j=ot(k,P,I);L[I]?L[I].p(j,z):(L[I]=nt(j),L[I].c(),L[I].m(D,null))}for(;I<L.length;I+=1)L[I].d(1);L.length=P.length}(!V||z&1&&x!==(x=(k[0]?"hidden":"block")+" fixed top-0 left-0 z-10 flex md:relative w-full min-h-[100vh] md:min-h-0 bg-gradient-to-br from-custom-darkpurple to-custom-darkestpurple md:bg-none md:block md:w-auto"))&&a(t,"class",x)},i(k){V||(le(y.$$.fragment,k),V=!0)},o(k){fe(y.$$.fragment,k),V=!1},d(k){k&&i(t),Re(L,k),Oe(y),G=!1,vt(U)}}}function zt(n){let t,e,l,r,s,c,u,p,m,v=n[0],g,_,b;function D(x,V){return x[1].url.pathname!=="/"?Vt:Lt}let A=D(n),w=A(n),y=ct(n);return{c(){t=d("nav"),e=d("div"),w.c(),l=T(),r=d("button"),s=d("span"),c=B("Otevřít menu"),u=T(),p=d("i"),m=T(),y.c(),this.h()},l(x){t=h(x,"NAV",{class:!0});var V=f(t);e=h(V,"DIV",{class:!0});var G=f(e);w.l(G),l=O(G),r=h(G,"BUTTON",{"data-collapse-toggle":!0,type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var U=f(r);s=h(U,"SPAN",{class:!0});var P=f(s);c=Z(P,"Otevřít menu"),P.forEach(i),u=O(U),p=h(U,"I",{class:!0}),f(p).forEach(i),U.forEach(i),m=O(G),y.l(G),G.forEach(i),V.forEach(i),this.h()},h(){a(s,"class","sr-only"),a(p,"class","fa-sharp fa-solid fa-bars fa-2x"),a(r,"data-collapse-toggle","navbar-default"),a(r,"type","button"),a(r,"class","inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200"),a(r,"aria-controls","navbar-default"),a(r,"aria-expanded","false"),a(e,"class","container flex flex-wrap items-center justify-between mx-auto max-w-7xl"),a(t,"class","px-2 sm:px-4 py-2.5")},m(x,V){W(x,t,V),o(t,e),w.m(e,null),o(e,l),o(e,r),o(r,s),o(s,c),o(r,u),o(r,p),o(e,m),y.m(e,null),g=!0,_||(b=Pe(r,"click",n[3]),_=!0)},p(x,[V]){A!==(A=D(x))&&(w.d(1),w=A(x),w&&(w.c(),w.m(e,l))),V&1&&Me(v,v=x[0])?(Fe(),fe(y,1,1,Ge),qe(),y=ct(x),y.c(),le(y,1),y.m(e,null)):y.p(x,V)},i(x){g||(le(y),g=!0)},o(x){fe(y),g=!1},d(x){x&&i(t),w.d(),y.d(x),_=!1,b()}}}function At(n,t,e){let l;Ze(n,Ke,u=>e(1,l=u));let r=!0;function s(){r==!1&&e(0,r=!0)}function c(){e(0,r=!1)}return[r,l,s,c]}class Tt extends Ue{constructor(t){super(),je(this,t,At,zt,Me,{})}}function Ot(n){let t,e,l,r,s,c,u,p,m,v,g,_,b,D,A,w,y,x,V,G,U,P,L,k,z,I,j,M,H,K,X,q,Y,ae,ue,se,Q,S,de,ee,te,R;return{c(){t=C("svg"),e=C("g"),l=C("g"),r=C("g"),s=C("path"),c=C("g"),u=C("path"),m=C("g"),v=C("g"),g=C("path"),_=C("g"),b=C("path"),A=C("g"),w=C("g"),y=C("g"),x=C("path"),G=C("g"),U=C("g"),P=C("g"),L=C("g"),k=C("g"),z=C("path"),j=C("g"),M=C("g"),H=C("g"),K=C("rect"),X=C("g"),q=C("g"),Y=C("path"),ae=C("g"),ue=C("path"),Q=C("defs"),S=C("linearGradient"),de=C("stop"),ee=C("stop"),te=C("stop"),R=C("stop"),this.h()},l(J){t=$(J,"svg",{class:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0,"xml:space":!0,"xmlns:serif":!0,style:!0});var oe=f(t);e=$(oe,"g",{id:!0});var ie=f(e);l=$(ie,"g",{});var re=f(l);r=$(re,"g",{id:!0});var he=f(r);s=$(he,"path",{id:!0,d:!0,style:!0}),f(s).forEach(i),he.forEach(i),c=$(re,"g",{id:!0});var F=f(c);u=$(F,"path",{id:!0,d:!0,style:!0}),f(u).forEach(i),F.forEach(i),re.forEach(i),m=$(ie,"g",{});var E=f(m);v=$(E,"g",{id:!0});var ne=f(v);g=$(ne,"path",{id:!0,d:!0,style:!0}),f(g).forEach(i),ne.forEach(i),_=$(E,"g",{id:!0});var ce=f(_);b=$(ce,"path",{id:!0,d:!0,style:!0}),f(b).forEach(i),ce.forEach(i),E.forEach(i),A=$(ie,"g",{id:!0});var xe=f(A);w=$(xe,"g",{id:!0});var ye=f(w);y=$(ye,"g",{id:!0});var Ce=f(y);x=$(Ce,"path",{id:!0,d:!0,style:!0}),f(x).forEach(i),Ce.forEach(i),ye.forEach(i),xe.forEach(i),G=$(ie,"g",{});var ve=f(G);U=$(ve,"g",{id:!0});var pe=f(U);P=$(pe,"g",{id:!0});var _e=f(P);L=$(_e,"g",{id:!0});var be=f(L);k=$(be,"g",{id:!0});var ke=f(k);z=$(ke,"path",{id:!0,d:!0,style:!0}),f(z).forEach(i),ke.forEach(i),be.forEach(i),_e.forEach(i),pe.forEach(i),ve.forEach(i),j=$(ie,"g",{});var me=f(j);M=$(me,"g",{id:!0});var $e=f(M);H=$($e,"g",{id:!0});var ge=f(H);K=$(ge,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,style:!0}),f(K).forEach(i),ge.forEach(i),$e.forEach(i),X=$(me,"g",{transform:!0});var we=f(X);q=$(we,"g",{transform:!0});var Ie=f(q);Y=$(Ie,"path",{d:!0,style:!0}),f(Y).forEach(i),Ie.forEach(i),ae=$(we,"g",{transform:!0});var Ne=f(ae);ue=$(Ne,"path",{d:!0,style:!0}),f(ue).forEach(i),Ne.forEach(i),we.forEach(i),me.forEach(i),ie.forEach(i),Q=$(oe,"defs",{});var Se=f(Q);S=$(Se,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0,gradientTransform:!0});var De=f(S);de=$(De,"stop",{offset:!0,style:!0}),f(de).forEach(i),ee=$(De,"stop",{offset:!0,style:!0}),f(ee).forEach(i),te=$(De,"stop",{offset:!0,style:!0}),f(te).forEach(i),R=$(De,"stop",{offset:!0,style:!0}),f(R).forEach(i),De.forEach(i),Se.forEach(i),oe.forEach(i),this.h()},h(){a(s,"id","path16"),a(s,"d","M119.041,0.333L119.372,69.571L102.368,69.667L102.039,0.429L119.041,0.333Z"),N(s,"fill","white"),N(s,"fill-rule","nonzero"),a(r,"id","g14"),a(u,"id","path20"),a(u,"d","M144.606,27L144.705,43.997L76.805,44.333L76.705,27.336L144.606,27Z"),N(u,"fill","white"),N(u,"fill-rule","nonzero"),a(c,"id","g18"),a(g,"id","path24"),a(g,"d","M211.944,13.004L155.7,69.753L143.624,57.821L199.868,1.072L211.944,13.004Z"),N(g,"fill","white"),N(g,"fill-rule","nonzero"),a(v,"id","g22"),a(b,"id","path28"),a(b,"d","M212.787,56.826L200.863,68.902L144.115,12.666L156.038,0.59L212.787,56.826Z"),N(b,"fill","white"),N(b,"fill-rule","nonzero"),a(_,"id","g26"),a(x,"id","path40"),a(x,"d","M248.274,17.181C257.843,17.181 265.662,25.136 265.662,35.021C265.662,44.905 257.843,52.86 248.274,52.86C238.704,52.86 230.886,44.905 230.886,35.021C230.886,25.136 238.704,17.181 248.274,17.181M248.274,0.333C229.332,0.333 214.038,15.896 214.038,35.021C214.038,54.145 229.332,69.708 248.274,69.708C267.215,69.708 282.51,54.145 282.51,35.021C282.51,15.896 267.215,0.333 248.274,0.333"),N(x,"fill","white"),N(x,"fill-rule","nonzero"),a(y,"id","g38"),a(w,"id","g32"),a(A,"id","g30"),a(z,"id","path60"),a(z,"d","M44.877,19.683C49.465,22.955 52.328,28.351 52.328,34.288C52.328,44.137 44.521,52.081 34.941,52.081C25.361,52.081 17.555,44.137 17.555,34.288C17.555,28.399 20.372,23.043 24.893,19.764L13.645,7.085C5.619,13.555 0.705,23.48 0.705,34.288C0.705,53.451 16.011,69.024 34.941,69.024C53.871,69.024 69.177,53.451 69.177,34.288C69.177,23.433 64.22,13.468 56.129,7L44.877,19.683Z"),N(z,"fill","url(#_Linear1)"),N(z,"fill-rule","nonzero"),a(k,"id","g52"),a(L,"id","g50"),a(P,"id","g44"),a(U,"id","g42"),a(K,"id","path70"),a(K,"x","282.752"),a(K,"y","59.747"),a(K,"width","8.877"),a(K,"height","8.877"),N(K,"fill","white"),N(K,"fill-rule","nonzero"),a(H,"id","g64"),a(M,"id","g62"),a(Y,"d","M0.059,-0.127L0.334,-0.393C0.342,-0.401 0.35,-0.409 0.359,-0.419C0.368,-0.428 0.376,-0.437 0.383,-0.447C0.39,-0.457 0.395,-0.468 0.4,-0.479C0.405,-0.49 0.407,-0.501 0.407,-0.513C0.407,-0.528 0.404,-0.541 0.399,-0.552C0.393,-0.563 0.385,-0.573 0.376,-0.581C0.367,-0.589 0.356,-0.595 0.344,-0.6C0.331,-0.604 0.318,-0.606 0.304,-0.606C0.274,-0.606 0.249,-0.597 0.23,-0.58C0.211,-0.563 0.199,-0.539 0.195,-0.51L0.069,-0.52C0.072,-0.553 0.08,-0.582 0.093,-0.607C0.106,-0.632 0.122,-0.652 0.143,-0.669C0.164,-0.686 0.188,-0.698 0.215,-0.707C0.242,-0.716 0.272,-0.72 0.304,-0.72C0.336,-0.72 0.366,-0.716 0.394,-0.708C0.421,-0.699 0.445,-0.687 0.466,-0.671C0.487,-0.654 0.503,-0.633 0.515,-0.608C0.527,-0.583 0.533,-0.553 0.533,-0.519C0.533,-0.474 0.523,-0.436 0.503,-0.404C0.482,-0.371 0.456,-0.34 0.424,-0.311L0.205,-0.108L0.533,-0.108L0.533,-0L0.059,-0L0.059,-0.127Z"),N(Y,"fill","white"),N(Y,"fill-rule","nonzero"),a(q,"transform","matrix(11.3461,0,0,11.3461,323.671,43.5138)"),a(ue,"d","M0.222,-0.423L0.253,-0.423C0.27,-0.423 0.287,-0.424 0.304,-0.426C0.32,-0.428 0.335,-0.432 0.348,-0.439C0.361,-0.446 0.371,-0.455 0.379,-0.468C0.387,-0.481 0.391,-0.498 0.391,-0.519C0.391,-0.546 0.382,-0.569 0.363,-0.586C0.344,-0.603 0.32,-0.612 0.29,-0.612C0.266,-0.612 0.245,-0.605 0.226,-0.592C0.207,-0.578 0.193,-0.559 0.184,-0.534L0.057,-0.568C0.065,-0.594 0.076,-0.617 0.091,-0.636C0.106,-0.655 0.123,-0.671 0.143,-0.684C0.163,-0.696 0.185,-0.705 0.209,-0.711C0.233,-0.717 0.258,-0.72 0.284,-0.72C0.315,-0.72 0.344,-0.716 0.371,-0.708C0.398,-0.7 0.422,-0.688 0.443,-0.673C0.464,-0.657 0.48,-0.637 0.493,-0.614C0.505,-0.59 0.511,-0.562 0.511,-0.531C0.511,-0.493 0.5,-0.459 0.479,-0.43C0.458,-0.4 0.428,-0.38 0.39,-0.371L0.39,-0.369C0.435,-0.362 0.47,-0.343 0.493,-0.311C0.516,-0.279 0.528,-0.241 0.528,-0.197C0.528,-0.163 0.522,-0.133 0.509,-0.107C0.496,-0.081 0.478,-0.059 0.456,-0.042C0.434,-0.024 0.409,-0.011 0.38,-0.002C0.351,0.008 0.32,0.012 0.289,0.012C0.26,0.012 0.232,0.009 0.206,0.003C0.18,-0.004 0.157,-0.014 0.136,-0.027C0.115,-0.04 0.096,-0.057 0.081,-0.079C0.066,-0.099 0.054,-0.125 0.046,-0.154L0.174,-0.188C0.181,-0.159 0.194,-0.136 0.213,-0.12C0.232,-0.104 0.257,-0.096 0.289,-0.096C0.305,-0.096 0.32,-0.099 0.335,-0.104C0.349,-0.109 0.362,-0.117 0.373,-0.127C0.384,-0.136 0.392,-0.148 0.399,-0.162C0.405,-0.175 0.408,-0.19 0.408,-0.207C0.408,-0.23 0.403,-0.248 0.394,-0.263C0.384,-0.277 0.372,-0.288 0.357,-0.296C0.341,-0.303 0.325,-0.308 0.306,-0.311C0.287,-0.314 0.269,-0.315 0.251,-0.315L0.222,-0.315L0.222,-0.423Z"),N(ue,"fill","white"),N(ue,"fill-rule","nonzero"),a(ae,"transform","matrix(11.3461,0,0,11.3461,330.388,43.5138)"),a(X,"transform","matrix(8.383,0,0,8.383,-2415.97,-295.918)"),a(e,"id","g10"),a(de,"offset","0"),N(de,"stop-color","rgb(0,216,130)"),N(de,"stop-opacity","1"),a(ee,"offset","0"),N(ee,"stop-color","rgb(5,187,188)"),N(ee,"stop-opacity","1"),a(te,"offset","0.01"),N(te,"stop-color","rgb(0,216,130)"),N(te,"stop-opacity","1"),a(R,"offset","1"),N(R,"stop-color","rgb(193,105,219)"),N(R,"stop-opacity","1"),a(S,"id","_Linear1"),a(S,"x1","0"),a(S,"y1","0"),a(S,"x2","1"),a(S,"y2","0"),a(S,"gradientUnits","userSpaceOnUse"),a(S,"gradientTransform","matrix(58.1935,-21.0445,21.0445,58.1935,7.78231,45.1011)"),a(t,"class",n[1]),a(t,"height","100%"),a(t,"viewBox","0 0 405 70"),a(t,"version","1.1"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),a(t,"xml:space","preserve"),a(t,"xmlns:serif","http://www.serif.com/"),N(t,"fill-rule","evenodd"),N(t,"clip-rule","evenodd"),N(t,"stroke-linejoin","round"),N(t,"stroke-miterlimit","2")},m(J,oe){W(J,t,oe),o(t,e),o(e,l),o(l,r),o(r,s),o(l,c),o(c,u),o(e,m),o(m,v),o(v,g),o(m,_),o(_,b),o(e,A),o(A,w),o(w,y),o(y,x),o(e,G),o(G,U),o(U,P),o(P,L),o(L,k),o(k,z),o(e,j),o(j,M),o(M,H),o(H,K),o(j,X),o(X,q),o(q,Y),o(X,ae),o(ae,ue),o(t,Q),o(Q,S),o(S,de),o(S,ee),o(S,te),o(S,R)},p(J,[oe]){n=J,oe&2&&a(t,"class",n[1])},i(J){p||Le(()=>{p=Ve(l,We,{y:-50,duration:n[0]/4,delay:n[0]/12}),p.start()}),D||Le(()=>{D=Ve(m,We,{y:50,duration:n[0]/4,delay:n[0]/6}),D.start()}),V||Le(()=>{V=Ve(A,We,{x:50,duration:n[0]/4,delay:n[0]/4}),V.start()}),I||Le(()=>{I=Ve(G,We,{x:-50,duration:n[0]/4,delay:0}),I.start()}),se||Le(()=>{se=Ve(j,He,{duration:n[0]/2,delay:n[0]/2}),se.start()})},o:Ge,d(J){J&&i(t)}}}function Mt(n,t,e){let{duration:l=2e3}=t,{classes:r}=t;return n.$$set=s=>{"duration"in s&&e(0,l=s.duration),"classes"in s&&e(1,r=s.classes)},[l,r]}class Nt extends Ue{constructor(t){super(),je(this,t,Mt,Ot,Me,{duration:0,classes:1})}}function ft(n){let t,e,l,r,s,c,u,p;r=new Tt({});let m=n[0].url.pathname==="/"&&ut(n);return{c(){t=d("header"),e=d("div"),l=d("div"),ze(r.$$.fragment),s=T(),m&&m.c(),this.h()},l(v){t=h(v,"HEADER",{class:!0});var g=f(t);e=h(g,"DIV",{class:!0});var _=f(e);l=h(_,"DIV",{});var b=f(l);Ae(r.$$.fragment,b),b.forEach(i),s=O(_),m&&m.l(_),_.forEach(i),g.forEach(i),this.h()},h(){a(e,"class",c="flex flex-col "+(n[0].url.pathname=="/"?"min-h-[100vh] md:min-h-[70vh] bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-darkpurple/80":"bg-gradient-to-r from-black/40 via-custom-green/70 to-custom-darkpurple/80")),a(t,"class",u="relative bg-center bg-cover "+(n[0].url.pathname!=="/tv"?"bg-[url('/img/bg-utxo-05.jpg')]":"")+" bg-no-repeat bg-custom-darkestpurple print:hidden")},m(v,g){W(v,t,g),o(t,e),o(e,l),Te(r,l,null),o(e,s),m&&m.m(e,null),p=!0},p(v,g){v[0].url.pathname==="/"?m?(m.p(v,g),g&1&&le(m,1)):(m=ut(v),m.c(),le(m,1),m.m(e,null)):m&&(Fe(),fe(m,1,1,()=>{m=null}),qe()),(!p||g&1&&c!==(c="flex flex-col "+(v[0].url.pathname=="/"?"min-h-[100vh] md:min-h-[70vh] bg-gradient-to-br from-custom-green/70 via-black/40 to-custom-darkpurple/80":"bg-gradient-to-r from-black/40 via-custom-green/70 to-custom-darkpurple/80")))&&a(e,"class",c),(!p||g&1&&u!==(u="relative bg-center bg-cover "+(v[0].url.pathname!=="/tv"?"bg-[url('/img/bg-utxo-05.jpg')]":"")+" bg-no-repeat bg-custom-darkestpurple print:hidden"))&&a(t,"class",u)},i(v){p||(le(r.$$.fragment,v),le(m),p=!0)},o(v){fe(r.$$.fragment,v),fe(m),p=!1},d(v){v&&i(t),Oe(r),m&&m.d()}}}function ut(n){let t,e,l,r,s,c,u,p,m,v,g,_,b,D,A,w,y,x,V,G,U,P,L,k,z,I,j,M,H,K,X,q,Y,ae,ue,se,Q,S,de,ee,te,R,J,oe,ie,re,he;m=new Nt({props:{duration:"1500",classes:"w-3/4 md:w-1/2 m-auto"}});let F=n[1]&&n[1].wave&&dt(n);return{c(){t=d("div"),e=d("div"),l=d("div"),r=B("Otevřená komunitní kryptoměnová konference"),c=T(),u=d("div"),p=d("a"),ze(m.$$.fragment),v=T(),g=d("div"),_=d("div"),b=d("div"),D=d("i"),A=T(),w=d("div"),y=B("3.-4. červen 2023"),x=T(),V=d("div"),G=d("div"),U=d("i"),P=T(),L=d("div"),k=B("Gabriel Loci, Praha"),I=T(),j=d("div"),M=d("div"),H=d("a"),K=B("Koupit vstupenky"),q=T(),F&&F.c(),Y=T(),ae=d("div"),ue=B("UTXO je součástí "),se=d("a"),Q=B("Prague Blockchain Week "),S=d("i"),de=T(),ee=d("div"),te=d("a"),R=d("i"),J=T(),oe=d("div"),this.h()},l(E){t=h(E,"DIV",{class:!0});var ne=f(t);e=h(ne,"DIV",{class:!0});var ce=f(e);l=h(ce,"DIV",{class:!0});var xe=f(l);r=Z(xe,"Otevřená komunitní kryptoměnová konference"),xe.forEach(i),c=O(ce),u=h(ce,"DIV",{class:!0});var ye=f(u);p=h(ye,"A",{href:!0});var Ce=f(p);Ae(m.$$.fragment,Ce),Ce.forEach(i),ye.forEach(i),v=O(ce),g=h(ce,"DIV",{class:!0});var ve=f(g);_=h(ve,"DIV",{class:!0});var pe=f(_);b=h(pe,"DIV",{class:!0});var _e=f(b);D=h(_e,"I",{class:!0}),f(D).forEach(i),_e.forEach(i),A=O(pe),w=h(pe,"DIV",{class:!0});var be=f(w);y=Z(be,"3.-4. červen 2023"),be.forEach(i),pe.forEach(i),x=O(ve),V=h(ve,"DIV",{class:!0});var ke=f(V);G=h(ke,"DIV",{class:!0});var me=f(G);U=h(me,"I",{class:!0}),f(U).forEach(i),me.forEach(i),P=O(ke),L=h(ke,"DIV",{class:!0});var $e=f(L);k=Z($e,"Gabriel Loci, Praha"),$e.forEach(i),ke.forEach(i),ve.forEach(i),I=O(ce),j=h(ce,"DIV",{class:!0});var ge=f(j);M=h(ge,"DIV",{class:!0});var we=f(M);H=h(we,"A",{href:!0,target:!0,rel:!0,class:!0});var Ie=f(H);K=Z(Ie,"Koupit vstupenky"),Ie.forEach(i),we.forEach(i),q=O(ge),F&&F.l(ge),ge.forEach(i),Y=O(ce),ae=h(ce,"DIV",{class:!0});var Ne=f(ae);ue=Z(Ne,"UTXO je součástí "),se=h(Ne,"A",{href:!0,target:!0,rel:!0,class:!0});var Se=f(se);Q=Z(Se,"Prague Blockchain Week "),S=h(Se,"I",{class:!0}),f(S).forEach(i),Se.forEach(i),Ne.forEach(i),ce.forEach(i),ne.forEach(i),de=O(E),ee=h(E,"DIV",{class:!0});var De=f(ee);te=h(De,"A",{href:!0});var Je=f(te);R=h(Je,"I",{class:!0}),f(R).forEach(i),Je.forEach(i),De.forEach(i),J=O(E),oe=h(E,"DIV",{id:!0}),f(oe).forEach(i),this.h()},h(){a(l,"class","uppercase font-semibold m-auto text-md text-center text-white/90"),a(p,"href","/"),a(u,"class","my-8"),a(D,"class","fa-regular fa-calendar-days text-custom-white"),a(b,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"),a(w,"class","text-white"),a(_,"class","flex items-center gap-3"),a(U,"class","fa-solid fa-location-dot text-white"),a(G,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 text-center rounded-2xl flex items-center justify-center"),a(L,"class","text-white"),a(V,"class","flex items-center gap-3"),a(g,"class","my-8 flex flex-wrap gap-3 lg:gap-10 text-lg lg:text-xl font-semibold justify-center"),a(H,"href","https://vstupenky.utxo.cz/23/"),a(H,"target","_blank"),a(H,"rel","noreferrer"),a(H,"class","rounded-2xl bg-utxo-gradient uppercase shadow-lg text-sm py-6 px-10 hover:text-base hover:font-bold transition-all"),a(M,"class","text-center w-full"),a(j,"class","flex my-16 gap-4 flex-wrap"),a(S,"class","fa-solid fa-up-right-from-square fa-sm opacity-70"),a(se,"href","https://prgblockweek.com/"),a(se,"target","_blank"),a(se,"rel","noreferrer"),a(se,"class","decoration-white/40 md:hover:decoration-custom-green decoration-dotted hover:decoration-solid decoration-1 hover:decoration-2 underline-offset-4 underline"),a(ae,"class","text-center"),a(e,"class","my-8"),a(t,"class","w-full m-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-left text-white"),a(R,"class","fa-regular fa-circle-down fa-2x text-white/70 hover:text-white"),a(te,"href","#below-header"),a(ee,"class","md:hidden h-16 flex-none text-center py-4"),a(oe,"id","below-header")},m(E,ne){W(E,t,ne),o(t,e),o(e,l),o(l,r),o(e,c),o(e,u),o(u,p),Te(m,p,null),o(e,v),o(e,g),o(g,_),o(_,b),o(b,D),o(_,A),o(_,w),o(w,y),o(g,x),o(g,V),o(V,G),o(G,U),o(V,P),o(V,L),o(L,k),o(e,I),o(e,j),o(j,M),o(M,H),o(H,K),o(j,q),F&&F.m(j,null),o(e,Y),o(e,ae),o(ae,ue),o(ae,se),o(se,Q),o(se,S),W(E,de,ne),W(E,ee,ne),o(ee,te),o(te,R),W(E,J,ne),W(E,oe,ne),ie=!0,re||(he=[Pe(p,"click",n[2]),Pe(te,"click",Gt)],re=!0)},p(E,ne){E[1]&&E[1].wave?F?F.p(E,ne):(F=dt(E),F.c(),F.m(j,null)):F&&(F.d(1),F=null)},i(E){ie||(s||Le(()=>{s=Ve(l,He,{duration:2e3,delay:500}),s.start()}),le(m.$$.fragment,E),z||Le(()=>{z=Ve(g,He,{duration:2e3,delay:500}),z.start()}),X||Le(()=>{X=Ve(H,He,{duration:2e3,delay:500}),X.start()}),ie=!0)},o(E){fe(m.$$.fragment,E),ie=!1},d(E){E&&i(t),Oe(m),F&&F.d(),E&&i(de),E&&i(ee),E&&i(J),E&&i(oe),re=!1,vt(he)}}}function dt(n){let t,e,l,r=n[1].wave.live.left+"",s,c,u=n[1].wave.price+"",p,m;return{c(){t=d("div"),e=B("Zbývá "),l=d("span"),s=B(r),c=B(`
              vstupenek (za `),p=B(u),m=B(" Kč)"),this.h()},l(v){t=h(v,"DIV",{class:!0});var g=f(t);e=Z(g,"Zbývá "),l=h(g,"SPAN",{class:!0});var _=f(l);s=Z(_,r),_.forEach(i),c=Z(g,`
              vstupenek (za `),p=Z(g,u),m=Z(g," Kč)"),g.forEach(i),this.h()},h(){a(l,"class","font-bold"),a(t,"class","my-auto sm:mt-0 mt-2 sm:ml-0 ml-2 italic opacity-50")},m(v,g){W(v,t,g),o(t,e),o(t,l),o(l,s),o(t,c),o(t,p),o(t,m)},p(v,g){g&2&&r!==(r=v[1].wave.live.left+"")&&Qe(s,r),g&2&&u!==(u=v[1].wave.price+"")&&Qe(p,u)},d(v){v&&i(t)}}}function St(n){let t=!["/kiosk","/tv-screen"].includes(n[0].url.pathname),e,l,r=t&&ft(n);return{c(){r&&r.c(),e=Ee()},l(s){r&&r.l(s),e=Ee()},m(s,c){r&&r.m(s,c),W(s,e,c),l=!0},p(s,[c]){c&1&&(t=!["/kiosk","/tv-screen"].includes(s[0].url.pathname)),t?r?(r.p(s,c),c&1&&le(r,1)):(r=ft(s),r.c(),le(r,1),r.m(e.parentNode,e)):r&&(Fe(),fe(r,1,1,()=>{r=null}),qe())},i(s){l||(le(r),l=!0)},o(s){fe(r),l=!1},d(s){r&&r.d(s),s&&i(e)}}}function Gt(n){n.preventDefault();const t=n.currentTarget,e=new URL(t.href).hash.replace("#",""),l=document.getElementById(e);window.scrollTo({top:l.offsetTop,behavior:"smooth"})}function Pt(n,t,e){let l,r;Ze(n,Ke,c=>e(0,l=c)),Ze(n,xt,c=>e(1,r=c));function s(){yt.update(c=>(c.hpTrack="top",c))}return[l,r,s]}class Ut extends Ue{constructor(t){super(),je(this,t,Pt,St,Me,{})}}const ht="1.9.0";function mt(n){let t,e,l,r,s,c,u,p,m,v,g,_,b,D,A,w,y,x,V,G,U,P,L,k,z,I,j,M,H,K,X,q,Y,ae,ue,se,Q,S,de,ee,te,R,J,oe,ie;return P=new gt({props:{size:"normal"}}),{c(){t=d("div"),e=d("div"),l=d("div"),r=d("div"),s=d("a"),c=d("img"),p=T(),m=d("div"),v=B("3.-4. červen 2023 @ Gabriel Loci, Praha"),g=T(),_=d("div"),b=B("Otevřená komunitní kryptoměnová konference"),D=T(),A=d("div"),w=d("a"),y=d("i"),x=B("  Dokumentace"),G=T(),U=d("div"),ze(P.$$.fragment),L=T(),k=d("div"),z=d("div"),I=d("i"),j=B(` S láskou organizuje
        `),M=d("a"),H=B("UTXO Foundation, z.s."),K=T(),X=d("div"),q=d("a"),Y=d("span"),ae=B("v"),ue=B(ht),se=B(`
        | powered by
        `),Q=d("a"),S=d("img"),ee=B(" Svelte"),te=B(`
        | grafický návrh
        `),R=d("a"),J=d("img"),this.h()},l(re){t=h(re,"DIV",{class:!0});var he=f(t);e=h(he,"DIV",{class:!0});var F=f(e);l=h(F,"DIV",{class:!0});var E=f(l);r=h(E,"DIV",{});var ne=f(r);s=h(ne,"A",{href:!0});var ce=f(s);c=h(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(i),ne.forEach(i),p=O(E),m=h(E,"DIV",{class:!0});var xe=f(m);v=Z(xe,"3.-4. červen 2023 @ Gabriel Loci, Praha"),xe.forEach(i),g=O(E),_=h(E,"DIV",{class:!0});var ye=f(_);b=Z(ye,"Otevřená komunitní kryptoměnová konference"),ye.forEach(i),D=O(E),A=h(E,"DIV",{class:!0});var Ce=f(A);w=h(Ce,"A",{href:!0,class:!0,target:!0,rel:!0});var ve=f(w);y=h(ve,"I",{class:!0}),f(y).forEach(i),x=Z(ve,"  Dokumentace"),ve.forEach(i),Ce.forEach(i),E.forEach(i),G=O(F),U=h(F,"DIV",{class:!0});var pe=f(U);Ae(P.$$.fragment,pe),pe.forEach(i),F.forEach(i),L=O(he),k=h(he,"DIV",{class:!0});var _e=f(k);z=h(_e,"DIV",{class:!0});var be=f(z);I=h(be,"I",{class:!0}),f(I).forEach(i),j=Z(be,` S láskou organizuje
        `),M=h(be,"A",{href:!0,class:!0,target:!0,rel:!0});var ke=f(M);H=Z(ke,"UTXO Foundation, z.s."),ke.forEach(i),be.forEach(i),K=O(_e),X=h(_e,"DIV",{});var me=f(X);q=h(me,"A",{href:!0,target:!0,rel:!0});var $e=f(q);Y=h($e,"SPAN",{class:!0});var ge=f(Y);ae=Z(ge,"v"),ue=Z(ge,ht),ge.forEach(i),$e.forEach(i),se=Z(me,`
        | powered by
        `),Q=h(me,"A",{href:!0,class:!0,target:!0,rel:!0});var we=f(Q);S=h(we,"IMG",{src:!0,class:!0,alt:!0}),ee=Z(we," Svelte"),we.forEach(i),te=Z(me,`
        | grafický návrh
        `),R=h(me,"A",{href:!0,target:!0,rel:!0});var Ie=f(R);J=h(Ie,"IMG",{src:!0,class:!0,alt:!0}),Ie.forEach(i),me.forEach(i),_e.forEach(i),he.forEach(i),this.h()},h(){Be(c.src,u="/img/logo.svg")||a(c,"src",u),a(c,"alt","UTXO.23"),a(c,"class","w-32"),a(s,"href","/"),a(m,"class","mt-4 font-semibold"),a(_,"class","mt-2 font-thin"),a(y,"class","fas fa-book"),a(w,"href",V=n[0].bundle.links.docs),a(w,"class","hover:text-custom-green"),a(w,"target","_blank"),a(w,"rel","noreferrer"),a(A,"class","mt-4"),a(l,"class","flex-1"),a(U,"class","sm:mt-0 mt-6 sm:w-1/3 mr-2"),a(e,"class","relative mx-auto px-6 pt-10 pb-2 sm:pb-6 max-w-7xl sm:flex pr-4"),a(I,"class","fas fa-heart text-red-500"),a(M,"href","https://utxo.foundation"),a(M,"class","underline hover:no-underline"),a(M,"target","_blank"),a(M,"rel","noreferrer"),a(z,"class","flex-1 mt-2 mb-2"),a(Y,"class","font-bold"),a(q,"href","https://github.com/utxo-foundation/utxo23-web"),a(q,"target","_blank"),a(q,"rel","noreferrer"),Be(S.src,de="/img/svelte-logo.svg")||a(S,"src",de),a(S,"class","w-5 inline"),a(S,"alt","Svelte"),a(Q,"href","https://svelte.dev/"),a(Q,"class","font-bold"),a(Q,"target","_blank"),a(Q,"rel","noreferrer"),Be(J.src,oe="/img/pen-production-logo.svg")||a(J,"src",oe),a(J,"class","w-28 inline-block pb-2 ml-1"),a(J,"alt","Pen&Production"),a(R,"href","https://www.ppmedia.cz/"),a(R,"target","_blank"),a(R,"rel","noreferrer"),a(k,"class","relative mx-auto px-6 pt-10 pb-6 max-w-7xl text-xs opacity-50 sm:flex"),a(t,"class","bg-gradient-to-b from-custom-darkpurple to-custom-darkestpurple text-white print:hidden")},m(re,he){W(re,t,he),o(t,e),o(e,l),o(l,r),o(r,s),o(s,c),o(l,p),o(l,m),o(m,v),o(l,g),o(l,_),o(_,b),o(l,D),o(l,A),o(A,w),o(w,y),o(w,x),o(e,G),o(e,U),Te(P,U,null),o(t,L),o(t,k),o(k,z),o(z,I),o(z,j),o(z,M),o(M,H),o(k,K),o(k,X),o(X,q),o(q,Y),o(Y,ae),o(Y,ue),o(X,se),o(X,Q),o(Q,S),o(Q,ee),o(X,te),o(X,R),o(R,J),ie=!0},p(re,he){(!ie||he&1&&V!==(V=re[0].bundle.links.docs))&&a(w,"href",V)},i(re){ie||(le(P.$$.fragment,re),ie=!0)},o(re){fe(P.$$.fragment,re),ie=!1},d(re){re&&i(t),Oe(P)}}}function jt(n){let t=n[0].bundle&&!["/kiosk","/tv-screen"].includes(n[1].url.pathname),e,l,r=t&&mt(n);return{c(){r&&r.c(),e=Ee()},l(s){r&&r.l(s),e=Ee()},m(s,c){r&&r.m(s,c),W(s,e,c),l=!0},p(s,[c]){c&3&&(t=s[0].bundle&&!["/kiosk","/tv-screen"].includes(s[1].url.pathname)),t?r?(r.p(s,c),c&3&&le(r,1)):(r=mt(s),r.c(),le(r,1),r.m(e.parentNode,e)):r&&(Fe(),fe(r,1,1,()=>{r=null}),qe())},i(s){l||(le(r),l=!0)},o(s){fe(r),l=!1},d(s){r&&r.d(s),s&&i(e)}}}function Bt(n,t,e){let l;Ze(n,Ke,s=>e(1,l=s));let{data:r}=t;return n.$$set=s=>{"data"in s&&e(0,r=s.data)},[r,l]}class Zt extends Ue{constructor(t){super(),je(this,t,Bt,jt,Me,{data:0})}}function Wt(n){let t;const e=n[2].default,l=bt(e,n,n[3],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,s){l&&l.m(r,s),t=!0},p(r,s){l&&l.p&&(!t||s&8)&&kt(l,e,r,r[3],t?Et(e,r[3],s,null):wt(r[3]),null)},i(r){t||(le(l,r),t=!0)},o(r){fe(l,r),t=!1},d(r){l&&l.d(r)}}}function Ht(n){let t,e,l,r,s,c,u,p,m;return l=new Ut({}),c=new Ct({props:{key:n[1].url,$$slots:{default:[Wt]},$$scope:{ctx:n}}}),p=new Zt({props:{data:n[0]}}),{c(){t=d("div"),e=d("div"),ze(l.$$.fragment),r=T(),s=d("main"),ze(c.$$.fragment),u=T(),ze(p.$$.fragment),this.h()},l(v){t=h(v,"DIV",{class:!0});var g=f(t);e=h(g,"DIV",{class:!0});var _=f(e);Ae(l.$$.fragment,_),r=O(_),s=h(_,"MAIN",{});var b=f(s);Ae(c.$$.fragment,b),b.forEach(i),_.forEach(i),u=O(g),Ae(p.$$.fragment,g),g.forEach(i),this.h()},h(){a(e,"class","inset-0 bg-white"),a(t,"class","layout min-h-screen bg-custom-darkestpurple print:bg-white")},m(v,g){W(v,t,g),o(t,e),Te(l,e,null),o(e,r),o(e,s),Te(c,s,null),o(t,u),Te(p,t,null),m=!0},p(v,[g]){const _={};g&2&&(_.key=v[1].url),g&8&&(_.$$scope={dirty:g,ctx:v}),c.$set(_);const b={};g&1&&(b.data=v[0]),p.$set(b)},i(v){m||(le(l.$$.fragment,v),le(c.$$.fragment,v),le(p.$$.fragment,v),m=!0)},o(v){fe(l.$$.fragment,v),fe(c.$$.fragment,v),fe(p.$$.fragment,v),m=!1},d(v){v&&i(t),Oe(l),Oe(c),Oe(p)}}}function Xt(n,t,e){let l;Ze(n,Ke,u=>e(1,l=u));let{$$slots:r={},$$scope:s}=t,{data:c}=t;return n.$$set=u=>{"data"in u&&e(0,c=u.data),"$$scope"in u&&e(3,s=u.$$scope)},[c,l,r,s]}class Qt extends Ue{constructor(t){super(),je(this,t,Xt,Ht,Me,{data:0})}}export{Qt as default};
