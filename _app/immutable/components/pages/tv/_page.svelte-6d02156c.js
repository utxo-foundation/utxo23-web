import{S as ut,i as ct,s as _t,e as pe,b as V,B as fe,h as u,a as A,c as T,k as E,q as z,l as D,m as $,r as L,E as d,u as G,aa as Se,U as mt,n as k,t as Z,d as ae,f as j,C as bt,j as kt,o as gt,N as wt,g as ne,D as me,K as Et,ab as Dt,ac as $t,ad as It,w as be,x as ke,y as ge,ae as Vt,af as yt,X as Ht,z as we,p as Ve}from"../../../chunks/index-d013028e.js";import{b as Le}from"../../../chunks/stores-0b419ec7.js";import{f as _e}from"../../../chunks/utils-ee2cd4ad.js";import{g as Be}from"../../../chunks/schedule-6525d3a8.js";import{E as dt}from"../../../chunks/EventTypeLabel-4d92f7a9.js";import{A as St}from"../../../chunks/Avatar-49504f8a.js";import{Y as Nt}from"../../../chunks/YouTube-d2f91f98.js";import{L as Pt,S as At}from"../../../chunks/Link-ef91cfe6.js";import{w as pt}from"../../../chunks/index-a79cad31.js";import{a as Tt}from"../../../chunks/index-490756e4.js";import{f as de}from"../../../chunks/index-2bc8c2b5.js";function Ce(s){let e,t,l,r=s[0].breakType==="break"&&Me(s),n=s[0].breakType==="beforeStart"&&Ze(s),a=s[0].breakType==="afterEnd"&&qe();return{c(){r&&r.c(),e=A(),n&&n.c(),t=A(),a&&a.c(),l=pe()},l(o){r&&r.l(o),e=T(o),n&&n.l(o),t=T(o),a&&a.l(o),l=pe()},m(o,i){r&&r.m(o,i),V(o,e,i),n&&n.m(o,i),V(o,t,i),a&&a.m(o,i),V(o,l,i)},p(o,i){o[0].breakType==="break"?r?r.p(o,i):(r=Me(o),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o[0].breakType==="beforeStart"?n?n.p(o,i):(n=Ze(o),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null),o[0].breakType==="afterEnd"?a||(a=qe(),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},d(o){r&&r.d(o),o&&u(e),n&&n.d(o),o&&u(t),a&&a.d(o),o&&u(l)}}}function Me(s){let e,t,l=s[0].next[0]&&Oe(s);return{c(){e=E("span"),t=z("☕ Přestávka "),l&&l.c()},l(r){e=D(r,"SPAN",{});var n=$(e);t=L(n,"☕ Přestávka "),l&&l.l(n),n.forEach(u)},m(r,n){V(r,e,n),d(e,t),l&&l.m(e,null)},p(r,n){r[0].next[0]?l?l.p(r,n):(l=Oe(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&u(e),l&&l.d()}}}function Oe(s){let e,t=_e(new Date(s[0].next[0].period.start),"HH:mm")+"",l;return{c(){e=z("do "),l=z(t)},l(r){e=L(r,"do "),l=L(r,t)},m(r,n){V(r,e,n),V(r,l,n)},p(r,n){n&1&&t!==(t=_e(new Date(r[0].next[0].period.start),"HH:mm")+"")&&G(l,t)},d(r){r&&u(e),r&&u(l)}}}function Ze(s){let e,t,l=_e(new Date(s[0].next[0].period.start),"d.M. HH:mm")+"",r;return{c(){e=E("span"),t=z("Zahájení přenosu "),r=z(l)},l(n){e=D(n,"SPAN",{});var a=$(e);t=L(a,"Zahájení přenosu "),r=L(a,l),a.forEach(u)},m(n,a){V(n,e,a),d(e,t),d(e,r)},p(n,a){a&1&&l!==(l=_e(new Date(n[0].next[0].period.start),"d.M. HH:mm")+"")&&G(r,l)},d(n){n&&u(e)}}}function qe(s){let e,t;return{c(){e=E("span"),t=z("Stream skončil. Děkujeme za pozornost!")},l(l){e=D(l,"SPAN",{});var r=$(e);t=L(r,"Stream skončil. Děkujeme za pozornost!"),r.forEach(u)},m(l,r){V(l,e,r),d(e,t)},d(l){l&&u(e)}}}function jt(s){let e,t=s[0]&&Ce(s);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,r){t&&t.m(l,r),V(l,e,r)},p(l,[r]){l[0]?t?t.p(l,r):(t=Ce(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:fe,o:fe,d(l){t&&t.d(l),l&&u(e)}}}function zt(s,e,t){let{type:l="break"}=e,{ss:r=null}=e;return s.$$set=n=>{"type"in n&&t(1,l=n.type),"ss"in n&&t(0,r=n.ss)},[r,l]}class vt extends ut{constructor(e){super(),ct(this,e,zt,jt,_t,{type:1,ss:0})}}const ht=pt([]),Lt=pt({offset:0,duration:500,easing:Tt,onStart:fe,onDone:fe});Se(Lt);const Bt=s=>s.replace(/[^A-Z0-9]/gi,"").toLowerCase();Se(ht);const Ct=(s,e)=>{if(!e)throw new Error("scrollRef require a reference");const t=Se(ht);return t.push({node:s,reference:Bt(e)}),{destroy(){t.length=0}}};function We(s,e,t){const l=s.slice();return l[18]=e[t],l[19]=e,l[20]=t,l}function Re(s,e,t){const l=s.slice();return l[21]=e[t],l}function Ue(s,e,t){const l=s.slice();return l[24]=e[t],l}function Ye(s,e,t){const l=s.slice();return l[27]=e[t],l}function Xe(s,e,t){const l=s.slice();return l[30]=e[t],l}function Ke(s,e,t){const l=s.slice();return l[18]=e[t],l[20]=t,l}function Fe(s,e,t){const l=s.slice();return l[24]=e[t],l}function Mt(s){let e;return{c(){e=z("Načítám ...")},l(t){e=L(t,"Načítám ...")},m(t,l){V(t,e,l)},p:fe,i:fe,o:fe,d(t){t&&u(e)}}}function Ot(s){let e,t,l,r,n,a,o,i,c=s[4].spec.stages.filter(it),_=[];for(let f=0;f<c.length;f+=1)_[f]=Je(Ke(s,c,f));const m=f=>Z(_[f],1,1,()=>{_[f]=null});let p=s[4].spec.stages.filter(ot),h=[];for(let f=0;f<p.length;f+=1)h[f]=at(We(s,p,f));const g=f=>Z(h[f],1,1,()=>{h[f]=null});return{c(){e=E("div"),t=E("div");for(let f=0;f<_.length;f+=1)_[f].c();l=A(),r=E("section");for(let f=0;f<h.length;f+=1)h[f].c();n=A(),a=E("div"),o=z("Všechny časy jsou lokální - středoevropské časové pásmo CET (+02:00)."),this.h()},l(f){e=D(f,"DIV",{class:!0});var v=$(e);t=D(v,"DIV",{class:!0});var w=$(t);for(let H=0;H<_.length;H+=1)_[H].l(w);w.forEach(u),v.forEach(u),l=T(f),r=D(f,"SECTION",{class:!0});var N=$(r);for(let H=0;H<h.length;H+=1)h[H].l(N);N.forEach(u),n=T(f),a=D(f,"DIV",{class:!0});var P=$(a);o=L(P,"Všechny časy jsou lokální - středoevropské časové pásmo CET (+02:00)."),P.forEach(u),this.h()},h(){k(t,"class","flex w-full justify-center lg:pt-6 text-white gap-4 flex-wrap lg:flex-nowrap"),k(e,"class","px-16 py-4"),k(r,"class","relative mx-auto lg:py-6 px-2 lg:px-6 text-white"),k(a,"class","text-center text-white/50 pb-10")},m(f,v){V(f,e,v),d(e,t);for(let w=0;w<_.length;w+=1)_[w].m(t,null);V(f,l,v),V(f,r,v);for(let w=0;w<h.length;w+=1)h[w].m(r,null);V(f,n,v),V(f,a,v),d(a,o),i=!0},p(f,v){if(v[0]&80){c=f[4].spec.stages.filter(it);let w;for(w=0;w<c.length;w+=1){const N=Ke(f,c,w);_[w]?(_[w].p(N,v),j(_[w],1)):(_[w]=Je(N),_[w].c(),j(_[w],1),_[w].m(t,null))}for(ne(),w=c.length;w<_.length;w+=1)m(w);ae()}if(v[0]&255){p=f[4].spec.stages.filter(ot);let w;for(w=0;w<p.length;w+=1){const N=We(f,p,w);h[w]?(h[w].p(N,v),j(h[w],1)):(h[w]=at(N),h[w].c(),j(h[w],1),h[w].m(r,null))}for(ne(),w=p.length;w<h.length;w+=1)g(w);ae()}},i(f){if(!i){for(let v=0;v<c.length;v+=1)j(_[v]);for(let v=0;v<p.length;v+=1)j(h[v]);i=!0}},o(f){_=_.filter(Boolean);for(let v=0;v<_.length;v+=1)Z(_[v]);h=h.filter(Boolean);for(let v=0;v<h.length;v+=1)Z(h[v]);i=!1},d(f){f&&u(e),me(_,f),f&&u(l),f&&u(r),me(h,f),f&&u(n),f&&u(a)}}}function Zt(s){let e,t,l,r;return t=new vt({props:{ss:s[24]}}),{c(){e=E("span"),be(t.$$.fragment),l=A(),this.h()},l(n){e=D(n,"SPAN",{class:!0});var a=$(e);ke(t.$$.fragment,a),l=T(a),a.forEach(u),this.h()},h(){k(e,"class","italic")},m(n,a){V(n,e,a),ge(t,e,null),d(e,l),r=!0},p(n,a){const o={};a[0]&16&&(o.ss=n[24]),t.$set(o)},i(n){r||(j(t.$$.fragment,n),r=!0)},o(n){Z(t.$$.fragment,n),r=!1},d(n){n&&u(e),we(t)}}}function qt(s){let e,t,l,r,n,a,o,i,c,_,m,p=_e(new Date(s[24].current.period.start),"HH:mm")+"",h,g,f=_e(new Date(s[24].current.period.end),"HH:mm")+"",v,w,N=s[24].current._event.name+"",P,H,Y;return r=new dt({props:{event:s[24].current._event,black:!0}}),{c(){e=E("div"),t=E("span"),l=A(),be(r.$$.fragment),n=A(),a=E("div"),o=E("div"),c=A(),_=E("div"),m=E("span"),h=z(p),g=z("-"),v=z(f),w=A(),P=z(N),H=A(),this.h()},l(y){e=D(y,"DIV",{class:!0});var q=$(e);t=D(q,"SPAN",{class:!0}),$(t).forEach(u),l=T(q),ke(r.$$.fragment,q),q.forEach(u),n=T(y),a=D(y,"DIV",{class:!0});var X=$(a);o=D(X,"DIV",{class:!0,style:!0}),$(o).forEach(u),X.forEach(u),c=T(y),_=D(y,"DIV",{});var R=$(_);m=D(R,"SPAN",{class:!0});var ee=$(m);h=L(ee,p),g=L(ee,"-"),v=L(ee,f),ee.forEach(u),w=T(R),P=L(R,N),H=T(R),R.forEach(u),this.h()},h(){k(t,"class","uppercase text-xs mr-2 text-white/70"),k(e,"class","text-center mb-2"),k(o,"class",i=ye(s[24].current._event.type)+" h-2 rounded-full"),Ve(o,"width",s[24].currentPercentage+"%"),k(a,"class","w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-4 mb-2 transition-all"),k(m,"class","text-white/70")},m(y,q){V(y,e,q),d(e,t),d(e,l),ge(r,e,null),V(y,n,q),V(y,a,q),d(a,o),V(y,c,q),V(y,_,q),d(_,m),d(m,h),d(m,g),d(m,v),d(_,w),d(_,P),d(_,H),Y=!0},p(y,q){const X={};q[0]&16&&(X.event=y[24].current._event),r.$set(X),(!Y||q[0]&16&&i!==(i=ye(y[24].current._event.type)+" h-2 rounded-full"))&&k(o,"class",i),(!Y||q[0]&16)&&Ve(o,"width",y[24].currentPercentage+"%"),(!Y||q[0]&16)&&p!==(p=_e(new Date(y[24].current.period.start),"HH:mm")+"")&&G(h,p),(!Y||q[0]&16)&&f!==(f=_e(new Date(y[24].current.period.end),"HH:mm")+"")&&G(v,f),(!Y||q[0]&16)&&N!==(N=y[24].current._event.name+"")&&G(P,N)},i(y){Y||(j(r.$$.fragment,y),Y=!0)},o(y){Z(r.$$.fragment,y),Y=!1},d(y){y&&u(e),we(r),y&&u(n),y&&u(a),y&&u(c),y&&u(_)}}}function Ge(s){let e,t,l,r;const n=[qt,Zt],a=[];function o(i,c){return i[24].current?0:1}return e=o(s),t=a[e]=n[e](s),{c(){t.c(),l=pe()},l(i){t.l(i),l=pe()},m(i,c){a[e].m(i,c),V(i,l,c),r=!0},p(i,c){let _=e;e=o(i),e===_?a[e].p(i,c):(ne(),Z(a[_],1,1,()=>{a[_]=null}),ae(),t=a[e],t?t.p(i,c):(t=a[e]=n[e](i),t.c()),j(t,1),t.m(l.parentNode,l))},i(i){r||(j(t),r=!0)},o(i){Z(t),r=!1},d(i){a[e].d(i),i&&u(l)}}}function Je(s){let e,t,l,r,n=s[18].name+"",a,o,i,c,_,m=[s[6][s[18].id]],p=[];for(let g=0;g<1;g+=1)p[g]=Ge(Fe(s,m,g));const h=g=>Z(p[g],1,1,()=>{p[g]=null});return{c(){e=E("div"),t=E("div"),l=E("i"),r=A(),a=z(n),o=A(),i=E("div");for(let g=0;g<1;g+=1)p[g].c();c=A(),this.h()},l(g){e=D(g,"DIV",{class:!0});var f=$(e);t=D(f,"DIV",{class:!0});var v=$(t);l=D(v,"I",{class:!0}),$(l).forEach(u),r=T(v),a=L(v,n),v.forEach(u),o=T(f),i=D(f,"DIV",{class:!0});var w=$(i);for(let N=0;N<1;N+=1)p[N].l(w);w.forEach(u),c=T(f),f.forEach(u),this.h()},h(){k(l,"class","fa-solid fa-video mr-1 text-white/50"),k(t,"class","uppercase font-semibold text-white text-lg"),k(i,"class","mt-2 text-sm"),k(e,"class","w-full md:w-1/3 lg:w-1/4 px-6 py-4 bg-blue-web-bg/70 rounded-2xl text-center transition-all shadow-xl")},m(g,f){V(g,e,f),d(e,t),d(t,l),d(t,r),d(t,a),d(e,o),d(e,i);for(let v=0;v<1;v+=1)p[v].m(i,null);d(e,c),_=!0},p(g,f){if((!_||f[0]&16)&&n!==(n=g[18].name+"")&&G(a,n),f[0]&80){m=[g[6][g[18].id]];let v;for(v=0;v<1;v+=1){const w=Fe(g,m,v);p[v]?(p[v].p(w,f),j(p[v],1)):(p[v]=Ge(w),p[v].c(),j(p[v],1),p[v].m(i,null))}for(ne(),v=1;v<1;v+=1)h(v);ae()}},i(g){if(!_){for(let f=0;f<1;f+=1)j(p[f]);_=!0}},o(g){p=p.filter(Boolean);for(let f=0;f<1;f+=1)Z(p[f]);_=!1},d(g){g&&u(e),me(p,g)}}}function Wt(s){let e,t;return{c(){e=E("div"),t=z("Načitám video.."),this.h()},l(l){e=D(l,"DIV",{class:!0});var r=$(e);t=L(r,"Načitám video.."),r.forEach(u),this.h()},h(){k(e,"class","w-full h-full bg-blue-web-bg/60 my-2 py-2 text-center my-auo italic text-white/50")},m(l,r){V(l,e,r),d(e,t)},p:fe,i:fe,o:fe,d(l){l&&u(e)}}}function Rt(s){let e,t,l,r,n,a,o;function i(m){s[9](m,s[18])}function c(){return s[10](s[18])}let _={videoId:s[6][s[18].id].stream.name,class:"bg-blue-web-bg/60",id:"player-"+s[18].id,options:Object.assign({},s[3])};return s[2][s[18].id]!==void 0&&(_.player=s[2][s[18].id]),t=new Nt({props:_}),$t.push(()=>It(t,"player",i)),t.$on("play",c),{c(){e=E("div"),be(t.$$.fragment)},l(m){e=D(m,"DIV",{});var p=$(e);ke(t.$$.fragment,p),p.forEach(u)},m(m,p){V(m,e,p),ge(t,e,null),n=!0,a||(o=Vt(r=Ct.call(null,e,s[18].id)),a=!0)},p(m,p){s=m;const h={};p[0]&16&&(h.videoId=s[6][s[18].id].stream.name),p[0]&16&&(h.id="player-"+s[18].id),p[0]&8&&(h.options=Object.assign({},s[3])),!l&&p[0]&20&&(l=!0,h.player=s[2][s[18].id],yt(()=>l=!1)),t.$set(h),r&&Ht(r.update)&&p[0]&16&&r.update.call(null,s[18].id)},i(m){n||(j(t.$$.fragment,m),n=!0)},o(m){Z(t.$$.fragment,m),n=!1},d(m){m&&u(e),we(t),a=!1,o()}}}function Ut(s){let e,t,l;return t=new vt({props:{ss:s[24]}}),{c(){e=E("div"),be(t.$$.fragment),this.h()},l(r){e=D(r,"DIV",{class:!0});var n=$(e);ke(t.$$.fragment,n),n.forEach(u),this.h()},h(){k(e,"class","text-xl italic")},m(r,n){V(r,e,n),ge(t,e,null),l=!0},p(r,n){const a={};n[0]&16&&(a.ss=r[24]),t.$set(a)},i(r){l||(j(t.$$.fragment,r),l=!0)},o(r){Z(t.$$.fragment,r),l=!1},d(r){r&&u(e),we(t)}}}function Yt(s){let e,t,l,r,n,a,o,i,c,_,m,p,h,g=de(new Date(s[24].current.period.start),"HH:mm")+"",f,v,w=de(new Date(s[24].current.period.end),"HH:mm")+"",N,P,H,Y=s[24].current._event.name+"",y,q,X,R,ee,se,le,re=s[24].current._event.tags.map(ft).join(" ")+"",J;a=new dt({props:{event:s[24].current._event,black:!0}});let Q=s[24].current._event.speakers.map(s[11]),B=[];for(let b=0;b<Q.length;b+=1)B[b]=xe(Xe(s,Q,b));const De=b=>Z(B[b],1,1,()=>{B[b]=null});let W=s[24].current._event.description&&et(s);return{c(){e=E("div"),t=E("div"),l=z("Právě probíhá"),r=A(),n=E("div"),be(a.$$.fragment),o=A(),i=E("div"),c=E("div"),m=A(),p=E("div"),h=E("span"),f=z(g),v=z("-"),N=z(w),P=A(),H=E("a"),y=z(Y),X=A(),R=E("div");for(let b=0;b<B.length;b+=1)B[b].c();ee=A(),W&&W.c(),se=A(),le=E("div"),this.h()},l(b){e=D(b,"DIV",{class:!0});var S=$(e);t=D(S,"DIV",{class:!0});var x=$(t);l=L(x,"Právě probíhá"),x.forEach(u),r=T(S),n=D(S,"DIV",{class:!0});var M=$(n);ke(a.$$.fragment,M),M.forEach(u),S.forEach(u),o=T(b),i=D(b,"DIV",{class:!0});var ue=$(i);c=D(ue,"DIV",{class:!0,style:!0}),$(c).forEach(u),ue.forEach(u),m=T(b),p=D(b,"DIV",{class:!0});var te=$(p);h=D(te,"SPAN",{class:!0});var ve=$(h);f=L(ve,g),v=L(ve,"-"),N=L(ve,w),ve.forEach(u),P=T(te),H=D(te,"A",{href:!0,class:!0,target:!0});var Ee=$(H);y=L(Ee,Y),Ee.forEach(u),te.forEach(u),X=T(b),R=D(b,"DIV",{class:!0});var U=$(R);for(let ie=0;ie<B.length;ie+=1)B[ie].l(U);U.forEach(u),ee=T(b),W&&W.l(b),se=T(b),le=D(b,"DIV",{class:!0});var He=$(le);He.forEach(u),this.h()},h(){k(t,"class","my-auto whitespace-nowrap"),k(n,"class","my-auto"),k(e,"class","uppercase text-xs mb-2 font-semibold flex flex-wrap gap-2"),k(c,"class",_=ye(s[24].current._event.type)+" h-3 rounded-full transition-all"),Ve(c,"width",s[24].currentPercentage+"%"),k(i,"class","w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 mb-3 mt-3"),k(h,"class","text-white/70"),k(H,"href",q="/udalosti?id="+s[24].current.event),k(H,"class","hover:underline"),k(H,"target","_blank"),k(p,"class","text-xl"),k(R,"class","flex flex-wrap mt-2 gap-3"),k(le,"class","text-sm mt-3 text-white/50")},m(b,S){V(b,e,S),d(e,t),d(t,l),d(e,r),d(e,n),ge(a,n,null),V(b,o,S),V(b,i,S),d(i,c),V(b,m,S),V(b,p,S),d(p,h),d(h,f),d(h,v),d(h,N),d(p,P),d(p,H),d(H,y),V(b,X,S),V(b,R,S);for(let x=0;x<B.length;x+=1)B[x].m(R,null);V(b,ee,S),W&&W.m(b,S),V(b,se,S),V(b,le,S),le.innerHTML=re,J=!0},p(b,S){const x={};if(S[0]&16&&(x.event=b[24].current._event),a.$set(x),(!J||S[0]&16&&_!==(_=ye(b[24].current._event.type)+" h-3 rounded-full transition-all"))&&k(c,"class",_),(!J||S[0]&16)&&Ve(c,"width",b[24].currentPercentage+"%"),(!J||S[0]&16)&&g!==(g=de(new Date(b[24].current.period.start),"HH:mm")+"")&&G(f,g),(!J||S[0]&16)&&w!==(w=de(new Date(b[24].current.period.end),"HH:mm")+"")&&G(N,w),(!J||S[0]&16)&&Y!==(Y=b[24].current._event.name+"")&&G(y,Y),(!J||S[0]&16&&q!==(q="/udalosti?id="+b[24].current.event))&&k(H,"href",q),S[0]&80){Q=b[24].current._event.speakers.map(b[11]);let M;for(M=0;M<Q.length;M+=1){const ue=Xe(b,Q,M);B[M]?(B[M].p(ue,S),j(B[M],1)):(B[M]=xe(ue),B[M].c(),j(B[M],1),B[M].m(R,null))}for(ne(),M=Q.length;M<B.length;M+=1)De(M);ae()}b[24].current._event.description?W?(W.p(b,S),S[0]&16&&j(W,1)):(W=et(b),W.c(),j(W,1),W.m(se.parentNode,se)):W&&(ne(),Z(W,1,1,()=>{W=null}),ae()),(!J||S[0]&16)&&re!==(re=b[24].current._event.tags.map(ft).join(" ")+"")&&(le.innerHTML=re)},i(b){if(!J){j(a.$$.fragment,b);for(let S=0;S<Q.length;S+=1)j(B[S]);j(W),J=!0}},o(b){Z(a.$$.fragment,b),B=B.filter(Boolean);for(let S=0;S<B.length;S+=1)Z(B[S]);Z(W),J=!1},d(b){b&&u(e),we(a),b&&u(o),b&&u(i),b&&u(m),b&&u(p),b&&u(X),b&&u(R),me(B,b),b&&u(ee),W&&W.d(b),b&&u(se),b&&u(le)}}}function Qe(s){let e,t=s[30].nickname+"",l,r;return{c(){e=z("("),l=z(t),r=z(")")},l(n){e=L(n,"("),l=L(n,t),r=L(n,")")},m(n,a){V(n,e,a),V(n,l,a),V(n,r,a)},p(n,a){a[0]&16&&t!==(t=n[30].nickname+"")&&G(l,t)},d(n){n&&u(e),n&&u(l),n&&u(r)}}}function xe(s){let e,t,l,r,n,a=s[30].name+"",o,i,c,_,m;t=new St({props:{speaker:s[30],size:"extra-small"}});let p=s[30].nickname&&Qe(s);return{c(){e=E("div"),be(t.$$.fragment),l=A(),r=E("div"),n=E("a"),o=z(a),i=A(),p&&p.c(),_=A(),this.h()},l(h){e=D(h,"DIV",{class:!0});var g=$(e);ke(t.$$.fragment,g),l=T(g),r=D(g,"DIV",{});var f=$(r);n=D(f,"A",{href:!0,target:!0,class:!0});var v=$(n);o=L(v,a),i=T(v),p&&p.l(v),v.forEach(u),f.forEach(u),_=T(g),g.forEach(u),this.h()},h(){k(n,"href",c="/lide?id="+s[30].id),k(n,"target","_blank"),k(n,"class","hover:underline"),k(e,"class","flex gap-2")},m(h,g){V(h,e,g),ge(t,e,null),d(e,l),d(e,r),d(r,n),d(n,o),d(n,i),p&&p.m(n,null),d(e,_),m=!0},p(h,g){const f={};g[0]&16&&(f.speaker=h[30]),t.$set(f),(!m||g[0]&16)&&a!==(a=h[30].name+"")&&G(o,a),h[30].nickname?p?p.p(h,g):(p=Qe(h),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!m||g[0]&16&&c!==(c="/lide?id="+h[30].id))&&k(n,"href",c)},i(h){m||(j(t.$$.fragment,h),m=!0)},o(h){Z(t.$$.fragment,h),m=!1},d(h){h&&u(e),we(t),p&&p.d()}}}function et(s){let e,t,l=[nt(s[24].current._event)],r=[];for(let a=0;a<1;a+=1)r[a]=lt(Ye(s,l,a));const n=a=>Z(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<1;a+=1)r[a].c();e=pe()},l(a){for(let o=0;o<1;o+=1)r[o].l(a);e=pe()},m(a,o){for(let i=0;i<1;i+=1)r[i].m(a,o);V(a,e,o),t=!0},p(a,o){if(o[0]&112){l=[nt(a[24].current._event)];let i;for(i=0;i<1;i+=1){const c=Ye(a,l,i);r[i]?(r[i].p(c,o),j(r[i],1)):(r[i]=lt(c),r[i].c(),j(r[i],1),r[i].m(e.parentNode,e))}for(ne(),i=1;i<1;i+=1)n(i);ae()}},i(a){if(!t){for(let o=0;o<1;o+=1)j(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<1;o+=1)Z(r[o]);t=!1},d(a){me(r,a),a&&u(e)}}}function tt(s){let e,t,l,r,n,a;return{c(){e=E("div"),t=z("("),l=E("a"),r=z("Zobrazit celý popis"),a=z(")"),this.h()},l(o){e=D(o,"DIV",{class:!0});var i=$(e);t=L(i,"("),l=D(i,"A",{href:!0,target:!0});var c=$(l);r=L(c,"Zobrazit celý popis"),c.forEach(u),a=L(i,")"),i.forEach(u),this.h()},h(){k(l,"href",n="/udalosti?id="+s[24].current.event),k(l,"target","_blank"),k(e,"class","text-sm text-white/30")},m(o,i){V(o,e,i),d(e,t),d(e,l),d(l,r),d(e,a)},p(o,i){i[0]&16&&n!==(n="/udalosti?id="+o[24].current.event)&&k(l,"href",n)},d(o){o&&u(e)}}}function lt(s){let e,t,l,r,n;t=new At({props:{source:s[27].md,renderers:s[5]}});let a=s[27].stripped&&tt(s);return{c(){e=E("div"),be(t.$$.fragment),l=A(),a&&a.c(),r=A(),this.h()},l(o){e=D(o,"DIV",{class:!0});var i=$(e);ke(t.$$.fragment,i),l=T(i),a&&a.l(i),r=T(i),i.forEach(u),this.h()},h(){k(e,"class","text-sm mt-2 text-white/80")},m(o,i){V(o,e,i),ge(t,e,null),d(e,l),a&&a.m(e,null),d(e,r),n=!0},p(o,i){const c={};i[0]&16&&(c.source=o[27].md),t.$set(c),o[27].stripped?a?a.p(o,i):(a=tt(o),a.c(),a.m(e,r)):a&&(a.d(1),a=null)},i(o){n||(j(t.$$.fragment,o),n=!0)},o(o){Z(t.$$.fragment,o),n=!1},d(o){o&&u(e),we(t),a&&a.d()}}}function rt(s){let e,t,l,r;const n=[Yt,Ut],a=[];function o(i,c){return i[24].current?0:1}return t=o(s),l=a[t]=n[t](s),{c(){e=E("div"),l.c()},l(i){e=D(i,"DIV",{});var c=$(e);l.l(c),c.forEach(u)},m(i,c){V(i,e,c),a[t].m(e,null),r=!0},p(i,c){let _=t;t=o(i),t===_?a[t].p(i,c):(ne(),Z(a[_],1,1,()=>{a[_]=null}),ae(),l=a[t],l?l.p(i,c):(l=a[t]=n[t](i),l.c()),j(l,1),l.m(e,null))},i(i){r||(j(l),r=!0)},o(i){Z(l),r=!1},d(i){i&&u(e),a[t].d()}}}function st(s){let e,t,l=de(new Date(s[21].period.start),"HH:mm")+"",r,n,a=de(new Date(s[21].period.end),"HH:mm")+"",o,i,c,_=s[21]._event.name+"",m,p,h;return{c(){e=E("div"),t=E("span"),r=z(l),n=z("-"),o=z(a),i=A(),c=E("a"),m=z(_),h=A(),this.h()},l(g){e=D(g,"DIV",{});var f=$(e);t=D(f,"SPAN",{class:!0});var v=$(t);r=L(v,l),n=L(v,"-"),o=L(v,a),v.forEach(u),i=T(f),c=D(f,"A",{href:!0,target:!0,class:!0});var w=$(c);m=L(w,_),w.forEach(u),h=T(f),f.forEach(u),this.h()},h(){k(t,"class","text-white/70"),k(c,"href",p="/udalosti?id="+s[21].event),k(c,"target","_blank"),k(c,"class","hover:underline")},m(g,f){V(g,e,f),d(e,t),d(t,r),d(t,n),d(t,o),d(e,i),d(e,c),d(c,m),d(e,h)},p(g,f){f[0]&16&&l!==(l=de(new Date(g[21].period.start),"HH:mm")+"")&&G(r,l),f[0]&16&&a!==(a=de(new Date(g[21].period.end),"HH:mm")+"")&&G(o,a),f[0]&16&&_!==(_=g[21]._event.name+"")&&G(m,_),f[0]&16&&p!==(p="/udalosti?id="+g[21].event)&&k(c,"href",p)},d(g){g&&u(e)}}}function at(s){let e,t,l,r,n,a,o=s[18].name+"",i,c,_,m,p,h=s[18].name+"",g,f,v,w,N,P,H,Y,y,q,X,R,ee,se,le,re,J,Q,B,De,W,b,S,x,M;const ue=[Rt,Wt],te=[];function ve(I,O){return I[1]?1:0}P=ve(s),H=te[P]=ue[P](s);let Ee=[s[6][s[18].id]],U=[];for(let I=0;I<1;I+=1)U[I]=rt(Ue(s,Ee,I));const He=I=>Z(U[I],1,1,()=>{U[I]=null});let ie=s[6][s[18].id].next,K=[];for(let I=0;I<ie.length;I+=1)K[I]=st(Re(s,ie,I));return{c(){e=E("div"),t=E("div"),l=E("h1"),r=E("a"),n=E("i"),a=A(),i=z(o),c=A(),_=E("div"),m=E("a"),p=z("Program tohoto sálu ("),g=z(h),f=z(")"),w=A(),N=E("div"),H.c(),Y=A(),y=E("div");for(let I=0;I<1;I+=1)U[I].c();q=A(),X=E("div"),R=E("a"),ee=z("Následuje"),le=A(),re=E("div");for(let I=0;I<K.length;I+=1)K[I].c();J=A(),Q=E("div"),B=E("a"),De=z("Zobrazit následující program v tomto sále"),S=A(),this.h()},l(I){e=D(I,"DIV",{id:!0,class:!0});var O=$(e);t=D(O,"DIV",{class:!0});var F=$(t);l=D(F,"H1",{class:!0});var C=$(l);r=D(C,"A",{});var oe=$(r);n=D(oe,"I",{class:!0}),$(n).forEach(u),a=T(oe),i=L(oe,o),oe.forEach(u),C.forEach(u),c=T(F),_=D(F,"DIV",{class:!0});var Ne=$(_);m=D(Ne,"A",{href:!0,class:!0,target:!0});var $e=$(m);p=L($e,"Program tohoto sálu ("),g=L($e,h),f=L($e,")"),$e.forEach(u),Ne.forEach(u),F.forEach(u),w=T(O),N=D(O,"DIV",{class:!0});var Ie=$(N);H.l(Ie),Y=T(Ie),y=D(Ie,"DIV",{class:!0});var ce=$(y);for(let he=0;he<1;he+=1)U[he].l(ce);q=T(ce),X=D(ce,"DIV",{class:!0});var Pe=$(X);R=D(Pe,"A",{href:!0,target:!0});var Ae=$(R);ee=L(Ae,"Následuje"),Ae.forEach(u),Pe.forEach(u),le=T(ce),re=D(ce,"DIV",{class:!0});var Te=$(re);for(let he=0;he<K.length;he+=1)K[he].l(Te);Te.forEach(u),J=T(ce),Q=D(ce,"DIV",{class:!0});var je=$(Q);B=D(je,"A",{href:!0,class:!0,target:!0});var ze=$(B);De=L(ze,"Zobrazit následující program v tomto sále"),ze.forEach(u),je.forEach(u),ce.forEach(u),Ie.forEach(u),S=T(O),O.forEach(u),this.h()},h(){k(n,"class","fa-solid fa-video mr-1 text-white/50"),k(l,"class","uppercase text-2xl font-bold"),k(m,"href",v=s[6][s[18].id].scheduleLink),k(m,"class","hover:underline"),k(m,"target","_blank"),k(_,"class","my-auto mt-2 md:mt-0 text-sm flex-1 md:text-right"),k(t,"class","md:flex gap-4"),k(R,"href",se=s[6][s[18].id].scheduleLink),k(R,"target","_blank"),k(X,"class","uppercase text-xs mb-2 font-semibold mt-6"),k(re,"class","text-sm 2xl:text-base"),k(B,"href",W=s[6][s[18].id].scheduleLink),k(B,"class","hover:underline"),k(B,"target","_blank"),k(Q,"class","mt-2 text-xs"),k(y,"class","pr-2 w-full"),k(N,"class","flex gap-6 mt-4 flex-wrap md:flex-nowrap"),Et(()=>s[12].call(N)),k(e,"id",x=s[18].id),k(e,"class","mb-8 bg-blue-web-bg/90 p-4 rounded-lg shadow-xl")},m(I,O){V(I,e,O),d(e,t),d(t,l),d(l,r),d(r,n),d(r,a),d(r,i),d(t,c),d(t,_),d(_,m),d(m,p),d(m,g),d(m,f),d(e,w),d(e,N),te[P].m(N,null),d(N,Y),d(N,y);for(let F=0;F<1;F+=1)U[F].m(y,null);d(y,q),d(y,X),d(X,R),d(R,ee),d(y,le),d(y,re);for(let F=0;F<K.length;F+=1)K[F].m(re,null);d(y,J),d(y,Q),d(Q,B),d(B,De),b=Dt(N,s[12].bind(N)),d(e,S),M=!0},p(I,O){(!M||O[0]&16)&&o!==(o=I[18].name+"")&&G(i,o),(!M||O[0]&16)&&h!==(h=I[18].name+"")&&G(g,h),(!M||O[0]&16&&v!==(v=I[6][I[18].id].scheduleLink))&&k(m,"href",v);let F=P;if(P=ve(I),P===F?te[P].p(I,O):(ne(),Z(te[F],1,1,()=>{te[F]=null}),ae(),H=te[P],H?H.p(I,O):(H=te[P]=ue[P](I),H.c()),j(H,1),H.m(N,Y)),O[0]&112){Ee=[I[6][I[18].id]];let C;for(C=0;C<1;C+=1){const oe=Ue(I,Ee,C);U[C]?(U[C].p(oe,O),j(U[C],1)):(U[C]=rt(oe),U[C].c(),j(U[C],1),U[C].m(y,q))}for(ne(),C=1;C<1;C+=1)He(C);ae()}if((!M||O[0]&16&&se!==(se=I[6][I[18].id].scheduleLink))&&k(R,"href",se),O[0]&80){ie=I[6][I[18].id].next;let C;for(C=0;C<ie.length;C+=1){const oe=Re(I,ie,C);K[C]?K[C].p(oe,O):(K[C]=st(oe),K[C].c(),K[C].m(re,null))}for(;C<K.length;C+=1)K[C].d(1);K.length=ie.length}(!M||O[0]&16&&W!==(W=I[6][I[18].id].scheduleLink))&&k(B,"href",W),(!M||O[0]&16&&x!==(x=I[18].id))&&k(e,"id",x)},i(I){if(!M){j(H);for(let O=0;O<1;O+=1)j(U[O]);M=!0}},o(I){Z(H),U=U.filter(Boolean);for(let O=0;O<1;O+=1)Z(U[O]);M=!1},d(I){I&&u(e),te[P].d(),me(U,I),me(K,I),b()}}}function Xt(s){let e,t,l,r,n;const a=[Ot,Mt],o=[];function i(c,_){return c[4]?0:1}return l=i(s),r=o[l]=a[l](s),{c(){e=A(),t=E("div"),r.c(),this.h()},l(c){mt("svelte-f1v4mx",document.head).forEach(u),e=T(c),t=D(c,"DIV",{class:!0});var m=$(t);r.l(m),m.forEach(u),this.h()},h(){document.title="UTXO.TV",k(t,"class","w-full h-full bg-blue-web-bg/90")},m(c,_){V(c,e,_),V(c,t,_),o[l].m(t,null),n=!0},p(c,_){let m=l;l=i(c),l===m?o[l].p(c,_):(ne(),Z(o[m],1,1,()=>{o[m]=null}),ae(),r=o[l],r?r.p(c,_):(r=o[l]=a[l](c),r.c()),j(r,1),r.m(t,null))},i(c){n||(j(r),n=!0)},o(c){Z(r),n=!1},d(c){c&&u(e),c&&u(t),o[l].d()}}}const Kt=700;function ye(s){let e=null;switch(s){case"talk":e="bg-custom-green/70";break;case"panel":e="bg-orange-400/70";break;case"lightning-series":e="bg-yellow-400/70";break;case"other":e="bg-rose-400/70";break}return e}function Ft(s,e){return e.spec.speakers.find(t=>t.id===s)}function nt(s){if(!s.description)return{};const e=s.description.split(`

`),t=e.length>1;return{md:e[0],stripped:t}}const it=s=>s.livestream,ot=s=>s.livestream,ft=s=>`<a href="/seznam-udalosti?tag=${s}" target="_blank" class="hover:underline">#${s}</a>`;function Gt(s,e,t){let l,r,n;bt(s,Le,P=>t(4,n=P));const a={link:Pt};let o=!0,i=0,c=0;kt(async()=>{i>0&&o&&(t(1,o=!1),c=i),i!==c&&(t(1,o=!0),setTimeout(()=>{t(1,o=!1)},1e3))});const _={},m={};let p=[];Le.subscribe(P=>{P.spec.schedule,p=P,Be(p,_)});let h=null;gt(()=>{h=setInterval(()=>{Be(p,_)},5e3)}),wt(()=>{clearInterval(h)});function g(P){for(const H of Object.keys(m))H!==P&&(console.log(`stopping player: ${H}`),m[H].stopVideo())}function f(P,H){s.$$.not_equal(m[H.id],P)&&(m[H.id]=P,t(2,m))}const v=P=>g(P.id),w=P=>Ft(P,n);function N(){i=this.clientWidth,t(0,i)}return s.$$.update=()=>{s.$$.dirty[0]&1&&t(8,l=i<=Kt?i:Math.round(i/2)),s.$$.dirty[0]&256&&t(3,r={height:l/16*9,width:l,playerVars:{autoplay:0}})},[i,o,m,r,n,a,_,g,l,f,v,w,N]}class ol extends ut{constructor(e){super(),ct(this,e,Gt,Xt,_t,{},null,[-1,-1])}}export{ol as default};
