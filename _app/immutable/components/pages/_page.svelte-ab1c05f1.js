import{S as Xt,i as Ft,s as Kt,O as Ut,k as g,a as T,l as k,m as b,h,c as z,n as d,U as ee,b as V,E as _,P as Qt,Q as Yt,R as Zt,g as K,t as D,d as U,f as w,B as ot,q as y,e as Ee,V as xt,r as B,G as Xe,C as Fe,D as _e,W as Ke,X as Ue,u as he,F as Wt,Y as el,w as te,x as le,y as se,z as re}from"../../chunks/index-abc7f1ba.js";import{b as tl,a as ll,u as Qe}from"../../chunks/stores-3e9c0a70.js";import{A as $e}from"../../chunks/Avatar-afb61cf9.js";import{S as sl,L as rl}from"../../chunks/Link-d13ee592.js";import{T as al}from"../../chunks/Transition-c916f4be.js";const ol=i=>({}),it=i=>({});function il(i){let e;const a=i[9]["custom-tip"],s=Ut(a,i,i[8],it);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,o){s&&s.m(r,o),e=!0},p(r,o){s&&s.p&&(!e||o&256)&&Qt(s,a,r,r[8],e?Zt(a,r[8],o,ol):Yt(r[8]),it)},i(r){e||(w(s,r),e=!0)},o(r){D(s,r),e=!1},d(r){s&&s.d(r)}}}function nl(i){let e;return{c(){e=g("div"),this.h()},l(a){e=k(a,"DIV",{class:!0,style:!0});var s=b(e);s.forEach(h),this.h()},h(){d(e,"class","default-tip svelte-uasnpl"),d(e,"style",i[6])},m(a,s){V(a,e,s),e.innerHTML=i[0]},p(a,s){s&1&&(e.innerHTML=a[0])},i:ot,o:ot,d(a){a&&h(e)}}}function fl(i){let e,a,s,r,o,f,n;const m=i[9].default,t=Ut(m,i,i[8],null),u=[nl,il],l=[];function p(c,$){return c[0]?0:1}return o=p(i),f=l[o]=u[o](i),{c(){e=g("div"),a=g("span"),t&&t.c(),s=T(),r=g("div"),f.c(),this.h()},l(c){e=k(c,"DIV",{class:!0});var $=b(e);a=k($,"SPAN",{class:!0});var S=b(a);t&&t.l(S),S.forEach(h),s=z($),r=k($,"DIV",{class:!0});var v=b(r);f.l(v),v.forEach(h),$.forEach(h),this.h()},h(){d(a,"class","tooltip-slot svelte-uasnpl"),d(r,"class","tooltip svelte-uasnpl"),ee(r,"active",i[5]),ee(r,"left",i[4]),ee(r,"right",i[2]),ee(r,"bottom",i[3]),ee(r,"top",i[1]),d(e,"class","tooltip-wrapper svelte-uasnpl")},m(c,$){V(c,e,$),_(e,a),t&&t.m(a,null),_(e,s),_(e,r),l[o].m(r,null),n=!0},p(c,[$]){t&&t.p&&(!n||$&256)&&Qt(t,m,c,c[8],n?Zt(m,c[8],$,null):Yt(c[8]),null);let S=o;o=p(c),o===S?l[o].p(c,$):(K(),D(l[S],1,1,()=>{l[S]=null}),U(),f=l[o],f?f.p(c,$):(f=l[o]=u[o](c),f.c()),w(f,1),f.m(r,null)),(!n||$&32)&&ee(r,"active",c[5]),(!n||$&16)&&ee(r,"left",c[4]),(!n||$&4)&&ee(r,"right",c[2]),(!n||$&8)&&ee(r,"bottom",c[3]),(!n||$&2)&&ee(r,"top",c[1])},i(c){n||(w(t,c),w(f),n=!0)},o(c){D(t,c),D(f),n=!1},d(c){c&&h(e),t&&t.d(c),l[o].d()}}}function cl(i,e,a){let{$$slots:s={},$$scope:r}=e,{tip:o=""}=e,{top:f=!1}=e,{right:n=!1}=e,{bottom:m=!1}=e,{left:t=!1}=e,{active:u=!1}=e,{color:l="#393F67"}=e,p=`background-color: ${l};`;return i.$$set=c=>{"tip"in c&&a(0,o=c.tip),"top"in c&&a(1,f=c.top),"right"in c&&a(2,n=c.right),"bottom"in c&&a(3,m=c.bottom),"left"in c&&a(4,t=c.left),"active"in c&&a(5,u=c.active),"color"in c&&a(7,l=c.color),"$$scope"in c&&a(8,r=c.$$scope)},[o,f,n,m,t,u,p,l,r,s]}class Jt extends Xt{constructor(e){super(),Ft(this,e,cl,fl,Kt,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function nt(i,e,a){const s=i.slice();return s[11]=e[a],s}function ft(i,e,a){const s=i.slice();return s[14]=e[a],s}function ct(i,e,a){const s=i.slice();return s[14]=e[a],s}function ut(i,e,a){const s=i.slice();return s[14]=e[a],s}function pt(i,e,a){const s=i.slice();return s[14]=e[a],s}function ht(i,e,a){const s=i.slice();return s[23]=e[a],s}function _t(i,e,a){const s=i.slice();return s[23]=e[a],s}function dt(i,e,a){const s=i.slice();return s[28]=e[a],s}function vt(i){let e,a,s,r,o,f,n,m,t=i[2]&&mt(i),u=i[1],l=[];for(let v=0;v<u.length;v+=1)l[v]=kt(dt(i,u,v));let p=i[0].spec.speakers,c=[];for(let v=0;v<p.length;v+=1)c[v]=Et(_t(i,p,v));const $=v=>D(c[v],1,1,()=>{c[v]=null});let S=i[3].hpTrack==="top"&&$t(i);return{c(){t&&t.c(),e=T(),a=g("section"),s=g("div");for(let v=0;v<l.length;v+=1)l[v].c();r=T(),o=g("section"),f=g("div");for(let v=0;v<c.length;v+=1)c[v].c();n=T(),S&&S.c(),this.h()},l(v){t&&t.l(v),e=z(v),a=k(v,"SECTION",{class:!0});var j=b(a);s=k(j,"DIV",{class:!0});var I=b(s);for(let q=0;q<l.length;q+=1)l[q].l(I);I.forEach(h),j.forEach(h),r=z(v),o=k(v,"SECTION",{class:!0});var L=b(o);f=k(L,"DIV",{class:!0});var C=b(f);for(let q=0;q<c.length;q+=1)c[q].l(C);C.forEach(h),n=z(L),S&&S.l(L),L.forEach(h),this.h()},h(){d(s,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-custom-darkpurple justify-center"),d(a,"class","relative mx-auto pt-6 sm:pt-10 px-6"),d(f,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center"),d(o,"class","pb-6 sm:-pb-10 mx-auto sm:px-2 lg:px-6 2xl:px-16")},m(v,j){t&&t.m(v,j),V(v,e,j),V(v,a,j),_(a,s);for(let I=0;I<l.length;I+=1)l[I].m(s,null);V(v,r,j),V(v,o,j),_(o,f);for(let I=0;I<c.length;I+=1)c[I].m(f,null);_(o,n),S&&S.m(o,null),m=!0},p(v,j){if(v[2]?t?t.p(v,j):(t=mt(v),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),j[0]&43){u=v[1];let I;for(I=0;I<u.length;I+=1){const L=dt(v,u,I);l[I]?l[I].p(L,j):(l[I]=kt(L),l[I].c(),l[I].m(s,null))}for(;I<l.length;I+=1)l[I].d(1);l.length=u.length}if(j[0]&9){p=v[0].spec.speakers;let I;for(I=0;I<p.length;I+=1){const L=_t(v,p,I);c[I]?(c[I].p(L,j),w(c[I],1)):(c[I]=Et(L),c[I].c(),w(c[I],1),c[I].m(f,null))}for(K(),I=p.length;I<c.length;I+=1)$(I);U()}v[3].hpTrack==="top"?S?(S.p(v,j),j[0]&8&&w(S,1)):(S=$t(v),S.c(),w(S,1),S.m(o,null)):S&&(K(),D(S,1,1,()=>{S=null}),U())},i(v){if(!m){for(let j=0;j<p.length;j+=1)w(c[j]);w(S),m=!0}},o(v){c=c.filter(Boolean);for(let j=0;j<c.length;j+=1)D(c[j]);D(S),m=!1},d(v){t&&t.d(v),v&&h(e),v&&h(a),_e(l,v),v&&h(r),v&&h(o),_e(c,v),S&&S.d()}}}function mt(i){let e,a,s,r,o,f=Ye("fa-solid fa-user-check")+"",n,m,t=i[0].spec.speakers.length+"",u,l,p,c,$,S=Ye("fa-regular fa-calendar")+"",v,j,I=i[0].spec.events.length+"",L,C,q,Z,ne,fe=Ye("fa-solid fa-users")+"",ce,ae,Q=i[2].global.tickets+"",ue,de;return{c(){e=g("section"),a=g("div"),s=g("div"),r=g("div"),o=new Ke(!1),n=T(),m=g("b"),u=y(t),l=y(" přednášejících"),p=T(),c=g("div"),$=new Ke(!1),v=T(),j=g("b"),L=y(I),C=y(" událostí"),q=T(),Z=g("div"),ne=new Ke(!1),ce=T(),ae=g("b"),ue=y(Q),de=y(" návstěvníků"),this.h()},l(R){e=k(R,"SECTION",{class:!0});var F=b(e);a=k(F,"DIV",{class:!0});var me=b(a);s=k(me,"DIV",{class:!0});var J=b(s);r=k(J,"DIV",{});var Y=b(r);o=Ue(Y,!1),n=z(Y),m=k(Y,"B",{});var ge=b(m);u=B(ge,t),ge.forEach(h),l=B(Y," přednášejících"),Y.forEach(h),p=z(J),c=k(J,"DIV",{});var oe=b(c);$=Ue(oe,!1),v=z(oe),j=k(oe,"B",{});var W=b(j);L=B(W,I),W.forEach(h),C=B(oe," událostí"),oe.forEach(h),q=z(J),Z=k(J,"DIV",{});var ie=b(Z);ne=Ue(ie,!1),ce=z(ie),ae=k(ie,"B",{});var ke=b(ae);ue=B(ke,Q),ke.forEach(h),de=B(ie," návstěvníků"),ie.forEach(h),J.forEach(h),me.forEach(h),F.forEach(h),this.h()},h(){o.a=n,$.a=v,ne.a=ce,d(s,"class","text-center text-xl sm:text-xl lg:text-2xl text-custom-darkpurple px-8 flex flex-wrap gap-4 lg:gap-8 justify-center"),d(a,"class","pb-4 pt-4 lg:pt-4 lg:pb-4 mx-auto sm:px-2 lg:px-6 2xl:px-16"),d(e,"class","bg-blue-web-light")},m(R,F){V(R,e,F),_(e,a),_(a,s),_(s,r),o.m(f,r),_(r,n),_(r,m),_(m,u),_(r,l),_(s,p),_(s,c),$.m(S,c),_(c,v),_(c,j),_(j,L),_(c,C),_(s,q),_(s,Z),ne.m(fe,Z),_(Z,ce),_(Z,ae),_(ae,ue),_(Z,de)},p(R,F){F[0]&1&&t!==(t=R[0].spec.speakers.length+"")&&he(u,t),F[0]&1&&I!==(I=R[0].spec.events.length+"")&&he(L,I),F[0]&4&&Q!==(Q=R[2].global.tickets+"")&&he(ue,Q)},d(R){R&&h(e)}}}function gt(i){let e,a=i[0].spec.speakers.length+"",s,r;return{c(){e=y("("),s=y(a),r=y(")")},l(o){e=B(o,"("),s=B(o,a),r=B(o,")")},m(o,f){V(o,e,f),V(o,s,f),V(o,r,f)},p(o,f){f[0]&1&&a!==(a=o[0].spec.speakers.length+"")&&he(s,a)},d(o){o&&h(e),o&&h(s),o&&h(r)}}}function kt(i){let e,a=(i[28].shortname||i[28].name)+"",s,r,o,f,n,m,t=!i[28].id&&gt(i);return{c(){e=g("div"),s=y(a),r=T(),t&&t.c(),o=T(),this.h()},l(u){e=k(u,"DIV",{class:!0});var l=b(e);s=B(l,a),r=z(l),t&&t.l(l),o=z(l),l.forEach(h),this.h()},h(){d(e,"class",f="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-lg shadow border border-solid "+(i[3].hpTrack===i[28].id?"bg-utxo-gradient border-0 text-white":"border-custom-darkpurple  hover:bg-custom-darkpurple hover:text-white hover:border-transparent cursor-pointer"))},m(u,l){V(u,e,l),_(e,s),_(e,r),t&&t.m(e,null),_(e,o),n||(m=Wt(e,"click",function(){el(i[5](i[28].id))&&i[5](i[28].id).apply(this,arguments)}),n=!0)},p(u,l){i=u,l[0]&2&&a!==(a=(i[28].shortname||i[28].name)+"")&&he(s,a),i[28].id?t&&(t.d(1),t=null):t?t.p(i,l):(t=gt(i),t.c(),t.m(e,o)),l[0]&10&&f!==(f="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-lg shadow border border-solid "+(i[3].hpTrack===i[28].id?"bg-utxo-gradient border-0 text-white":"border-custom-darkpurple  hover:bg-custom-darkpurple hover:text-white hover:border-transparent cursor-pointer"))&&d(e,"class",f)},d(u){u&&h(e),t&&t.d(),n=!1,m()}}}function bt(i){let e=!i[3].hpTrack||i[23].tracks&&i[23].tracks.includes(i[3].hpTrack)||i[3].hpTrack==="top",a,s,r=e&&wt(i);return{c(){r&&r.c(),a=Ee()},l(o){r&&r.l(o),a=Ee()},m(o,f){r&&r.m(o,f),V(o,a,f),s=!0},p(o,f){f[0]&9&&(e=!o[3].hpTrack||o[23].tracks&&o[23].tracks.includes(o[3].hpTrack)||o[3].hpTrack==="top"),e?r?(r.p(o,f),f[0]&9&&w(r,1)):(r=wt(o),r.c(),w(r,1),r.m(a.parentNode,a)):r&&(K(),D(r,1,1,()=>{r=null}),U())},i(o){s||(w(r),s=!0)},o(o){D(r),s=!1},d(o){r&&r.d(o),o&&h(a)}}}function wt(i){let e,a;return e=new al({props:{key:i[3].hpTrack,type:"random",$$slots:{default:[ul]},$$scope:{ctx:i}}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){se(e,s,r),a=!0},p(s,r){const o={};r[0]&8&&(o.key=s[3].hpTrack),r[0]&1|r[1]&1&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){a||(w(e.$$.fragment,s),a=!0)},o(s){D(e.$$.fragment,s),a=!1},d(s){re(e,s)}}}function ul(i){let e,a,s;return e=new $e({props:{speaker:i[23],size:"normal"}}),{c(){te(e.$$.fragment),a=T()},l(r){le(e.$$.fragment,r),a=z(r)},m(r,o){se(e,r,o),V(r,a,o),s=!0},p(r,o){const f={};o[0]&1&&(f.speaker=r[23]),e.$set(f)},i(r){s||(w(e.$$.fragment,r),s=!0)},o(r){D(e.$$.fragment,r),s=!1},d(r){re(e,r),r&&h(a)}}}function Et(i){let e,a,s=(i[3].hpTrack==="top"&&i[23].lead===!0||i[3].hpTrack!=="top")&&bt(i);return{c(){s&&s.c(),e=Ee()},l(r){s&&s.l(r),e=Ee()},m(r,o){s&&s.m(r,o),V(r,e,o),a=!0},p(r,o){r[3].hpTrack==="top"&&r[23].lead===!0||r[3].hpTrack!=="top"?s?(s.p(r,o),o[0]&9&&w(s,1)):(s=bt(r),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(K(),D(s,1,1,()=>{s=null}),U())},i(r){a||(w(s),a=!0)},o(r){D(s),a=!1},d(r){s&&s.d(r),r&&h(e)}}}function $t(i){let e,a,s,r,o,f,n,m=i[0].spec.speakers.filter(Ht).sort(i[9]).slice(0,27),t=[];for(let l=0;l<m.length;l+=1)t[l]=It(ht(i,m,l));const u=l=>D(t[l],1,1,()=>{t[l]=null});return{c(){e=g("div"),a=g("div"),s=T(),r=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var p=b(e);a=k(p,"DIV",{class:!0}),b(a).forEach(h),s=z(p),r=k(p,"DIV",{class:!0});var c=b(r);for(let $=0;$<t.length;$+=1)t[$].l(c);c.forEach(h),p.forEach(h),this.h()},h(){d(a,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),d(r,"class","flex flex-wrap gap-3 mt-10 justify-center"),d(e,"class","relative cursor-pointer mb-10 max-w-screen-2xl mx-auto")},m(l,p){V(l,e,p),_(e,a),_(e,s),_(e,r);for(let c=0;c<t.length;c+=1)t[c].m(r,null);o=!0,f||(n=Wt(a,"click",i[6]),f=!0)},p(l,p){if(p[0]&1){m=l[0].spec.speakers.filter(Ht).sort(l[9]).slice(0,27);let c;for(c=0;c<m.length;c+=1){const $=ht(l,m,c);t[c]?(t[c].p($,p),w(t[c],1)):(t[c]=It($),t[c].c(),w(t[c],1),t[c].m(r,null))}for(K(),c=m.length;c<t.length;c+=1)u(c);U()}},i(l){if(!o){for(let p=0;p<m.length;p+=1)w(t[p]);o=!0}},o(l){t=t.filter(Boolean);for(let p=0;p<t.length;p+=1)D(t[p]);o=!1},d(l){l&&h(e),_e(t,l),f=!1,n()}}}function It(i){let e,a;return e=new $e({props:{speaker:i[23],size:"small"}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){se(e,s,r),a=!0},p(s,r){const o={};r[0]&1&&(o.speaker=s[23]),e.$set(o)},i(s){a||(w(e.$$.fragment,s),a=!0)},o(s){D(e.$$.fragment,s),a=!1},d(s){re(e,s)}}}function Dt(i){let e,a,s,r,o,f=i[0].spec.partners.filter(Lt).slice(0,4),n=[];for(let t=0;t<f.length;t+=1)n[t]=Vt(pt(i,f,t));const m=t=>D(n[t],1,1,()=>{n[t]=null});return{c(){e=g("div"),a=y("Hlavní sponzoři"),s=T(),r=g("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var u=b(e);a=B(u,"Hlavní sponzoři"),u.forEach(h),s=z(t),r=k(t,"DIV",{class:!0});var l=b(r);for(let p=0;p<n.length;p+=1)n[p].l(l);l.forEach(h),this.h()},h(){d(e,"class","mt-6 text-center"),d(r,"class","mt-6 flex flex-wrap gap-8 justify-center")},m(t,u){V(t,e,u),_(e,a),V(t,s,u),V(t,r,u);for(let l=0;l<n.length;l+=1)n[l].m(r,null);o=!0},p(t,u){if(u[0]&1){f=t[0].spec.partners.filter(Lt).slice(0,4);let l;for(l=0;l<f.length;l+=1){const p=pt(t,f,l);n[l]?(n[l].p(p,u),w(n[l],1)):(n[l]=Vt(p),n[l].c(),w(n[l],1),n[l].m(r,null))}for(K(),l=f.length;l<n.length;l+=1)m(l);U()}},i(t){if(!o){for(let u=0;u<f.length;u+=1)w(n[u]);o=!0}},o(t){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)D(n[u]);o=!1},d(t){t&&h(e),t&&h(s),t&&h(r),_e(n,t)}}}function Vt(i){let e,a,s,r,o,f,n=i[14].name+"",m,t,u;return s=new $e({props:{speaker:i[14],col:"partners",size:"custom",customSize:"w-28 shadow-xl"}}),{c(){e=g("div"),a=g("a"),te(s.$$.fragment),o=T(),f=g("div"),m=y(n),t=T(),this.h()},l(l){e=k(l,"DIV",{class:!0});var p=b(e);a=k(p,"A",{href:!0,target:!0});var c=b(a);le(s.$$.fragment,c),c.forEach(h),o=z(p),f=k(p,"DIV",{class:!0});var $=b(f);m=B($,n),$.forEach(h),t=z(p),p.forEach(h),this.h()},h(){d(a,"href",r=i[14].web.url),d(a,"target","_blank"),d(f,"class","text-center text-sm uppercase font-bold"),d(e,"class","w-32")},m(l,p){V(l,e,p),_(e,a),se(s,a,null),_(e,o),_(e,f),_(f,m),_(e,t),u=!0},p(l,p){const c={};p[0]&1&&(c.speaker=l[14]),s.$set(c),(!u||p[0]&1&&r!==(r=l[14].web.url))&&d(a,"href",r),(!u||p[0]&1)&&n!==(n=l[14].name+"")&&he(m,n)},i(l){u||(w(s.$$.fragment,l),u=!0)},o(l){D(s.$$.fragment,l),u=!1},d(l){l&&h(e),re(s)}}}function Tt(i){let e,a,s,r,o,f=i[0].spec.partners.filter(Ct).slice(4),n=[];for(let t=0;t<f.length;t+=1)n[t]=zt(ut(i,f,t));const m=t=>D(n[t],1,1,()=>{n[t]=null});return{c(){e=g("div"),a=y("Sponzoři"),s=T(),r=g("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var u=b(e);a=B(u,"Sponzoři"),u.forEach(h),s=z(t),r=k(t,"DIV",{class:!0});var l=b(r);for(let p=0;p<n.length;p+=1)n[p].l(l);l.forEach(h),this.h()},h(){d(e,"class","mt-6 text-center"),d(r,"class","mt-6 flex flex-wrap gap-8 justify-center")},m(t,u){V(t,e,u),_(e,a),V(t,s,u),V(t,r,u);for(let l=0;l<n.length;l+=1)n[l].m(r,null);o=!0},p(t,u){if(u[0]&1){f=t[0].spec.partners.filter(Ct).slice(4);let l;for(l=0;l<f.length;l+=1){const p=ut(t,f,l);n[l]?(n[l].p(p,u),w(n[l],1)):(n[l]=zt(p),n[l].c(),w(n[l],1),n[l].m(r,null))}for(K(),l=f.length;l<n.length;l+=1)m(l);U()}},i(t){if(!o){for(let u=0;u<f.length;u+=1)w(n[u]);o=!0}},o(t){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)D(n[u]);o=!1},d(t){t&&h(e),t&&h(s),t&&h(r),_e(n,t)}}}function zt(i){let e,a,s,r,o,f,n=i[14].name+"",m,t,u;return s=new $e({props:{speaker:i[14],col:"partners",size:"custom",customSize:"w-20 shadow-xl"}}),{c(){e=g("div"),a=g("a"),te(s.$$.fragment),o=T(),f=g("div"),m=y(n),t=T(),this.h()},l(l){e=k(l,"DIV",{class:!0});var p=b(e);a=k(p,"A",{href:!0,target:!0});var c=b(a);le(s.$$.fragment,c),c.forEach(h),o=z(p),f=k(p,"DIV",{class:!0});var $=b(f);m=B($,n),$.forEach(h),t=z(p),p.forEach(h),this.h()},h(){d(a,"href",r=i[14].web.url),d(a,"target","_blank"),d(f,"class","text-center text-sm uppercase font-bold"),d(e,"class","w-32")},m(l,p){V(l,e,p),_(e,a),se(s,a,null),_(e,o),_(e,f),_(f,m),_(e,t),u=!0},p(l,p){const c={};p[0]&1&&(c.speaker=l[14]),s.$set(c),(!u||p[0]&1&&r!==(r=l[14].web.url))&&d(a,"href",r),(!u||p[0]&1)&&n!==(n=l[14].name+"")&&he(m,n)},i(l){u||(w(s.$$.fragment,l),u=!0)},o(l){D(s.$$.fragment,l),u=!1},d(l){l&&h(e),re(s)}}}function jt(i){let e,a,s,r,o,f=i[0].spec.partners.filter(qt),n=[];for(let t=0;t<f.length;t+=1)n[t]=St(ct(i,f,t));const m=t=>D(n[t],1,1,()=>{n[t]=null});return{c(){e=g("div"),a=y("Komunity"),s=T(),r=g("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var u=b(e);a=B(u,"Komunity"),u.forEach(h),s=z(t),r=k(t,"DIV",{class:!0});var l=b(r);for(let p=0;p<n.length;p+=1)n[p].l(l);l.forEach(h),this.h()},h(){d(e,"class","mt-10 text-center"),d(r,"class","mt-6 flex flex-wrap gap-6 justify-center")},m(t,u){V(t,e,u),_(e,a),V(t,s,u),V(t,r,u);for(let l=0;l<n.length;l+=1)n[l].m(r,null);o=!0},p(t,u){if(u[0]&1){f=t[0].spec.partners.filter(qt);let l;for(l=0;l<f.length;l+=1){const p=ct(t,f,l);n[l]?(n[l].p(p,u),w(n[l],1)):(n[l]=St(p),n[l].c(),w(n[l],1),n[l].m(r,null))}for(K(),l=f.length;l<n.length;l+=1)m(l);U()}},i(t){if(!o){for(let u=0;u<f.length;u+=1)w(n[u]);o=!0}},o(t){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)D(n[u]);o=!1},d(t){t&&h(e),t&&h(s),t&&h(r),_e(n,t)}}}function pl(i){let e,a,s,r;return a=new $e({props:{speaker:i[14],col:"partners",size:"custom",customSize:"w-20 shadow-lg"}}),{c(){e=g("a"),te(a.$$.fragment),this.h()},l(o){e=k(o,"A",{href:!0,target:!0});var f=b(e);le(a.$$.fragment,f),f.forEach(h),this.h()},h(){d(e,"href",s=i[14].web?i[14].web.url:i[14].twitter?`https://twitter.com/${i[14].twitter}`:""),d(e,"target","_blank")},m(o,f){V(o,e,f),se(a,e,null),r=!0},p(o,f){const n={};f[0]&1&&(n.speaker=o[14]),a.$set(n),(!r||f[0]&1&&s!==(s=o[14].web?o[14].web.url:o[14].twitter?`https://twitter.com/${o[14].twitter}`:""))&&d(e,"href",s)},i(o){r||(w(a.$$.fragment,o),r=!0)},o(o){D(a.$$.fragment,o),r=!1},d(o){o&&h(e),re(a)}}}function St(i){let e,a,s,r;return a=new Jt({props:{tip:i[14].name,bottom:"true",$$slots:{default:[pl]},$$scope:{ctx:i}}}),{c(){e=g("div"),te(a.$$.fragment),s=T()},l(o){e=k(o,"DIV",{});var f=b(e);le(a.$$.fragment,f),s=z(f),f.forEach(h)},m(o,f){V(o,e,f),se(a,e,null),_(e,s),r=!0},p(o,f){const n={};f[0]&1&&(n.tip=o[14].name),f[0]&1|f[1]&1&&(n.$$scope={dirty:f,ctx:o}),a.$set(n)},i(o){r||(w(a.$$.fragment,o),r=!0)},o(o){D(a.$$.fragment,o),r=!1},d(o){o&&h(e),re(a)}}}function Nt(i){let e,a,s,r,o,f=i[0].spec.partners.filter(Rt),n=[];for(let t=0;t<f.length;t+=1)n[t]=yt(ft(i,f,t));const m=t=>D(n[t],1,1,()=>{n[t]=null});return{c(){e=g("div"),a=y("Mediální partneři"),s=T(),r=g("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var u=b(e);a=B(u,"Mediální partneři"),u.forEach(h),s=z(t),r=k(t,"DIV",{class:!0});var l=b(r);for(let p=0;p<n.length;p+=1)n[p].l(l);l.forEach(h),this.h()},h(){d(e,"class","mt-10 text-center"),d(r,"class","mt-6 flex flex-wrap gap-4 justify-center")},m(t,u){V(t,e,u),_(e,a),V(t,s,u),V(t,r,u);for(let l=0;l<n.length;l+=1)n[l].m(r,null);o=!0},p(t,u){if(u[0]&1){f=t[0].spec.partners.filter(Rt);let l;for(l=0;l<f.length;l+=1){const p=ft(t,f,l);n[l]?(n[l].p(p,u),w(n[l],1)):(n[l]=yt(p),n[l].c(),w(n[l],1),n[l].m(r,null))}for(K(),l=f.length;l<n.length;l+=1)m(l);U()}},i(t){if(!o){for(let u=0;u<f.length;u+=1)w(n[u]);o=!0}},o(t){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)D(n[u]);o=!1},d(t){t&&h(e),t&&h(s),t&&h(r),_e(n,t)}}}function hl(i){let e,a,s,r;return a=new $e({props:{speaker:i[14],col:"partners",size:"custom",customSize:"w-16 shadow-lg"}}),{c(){e=g("a"),te(a.$$.fragment),this.h()},l(o){e=k(o,"A",{href:!0,target:!0});var f=b(e);le(a.$$.fragment,f),f.forEach(h),this.h()},h(){d(e,"href",s=i[14].web?i[14].web.url:i[14].twitter?`https://twitter.com/${i[14].twitter}`:""),d(e,"target","_blank")},m(o,f){V(o,e,f),se(a,e,null),r=!0},p(o,f){const n={};f[0]&1&&(n.speaker=o[14]),a.$set(n),(!r||f[0]&1&&s!==(s=o[14].web?o[14].web.url:o[14].twitter?`https://twitter.com/${o[14].twitter}`:""))&&d(e,"href",s)},i(o){r||(w(a.$$.fragment,o),r=!0)},o(o){D(a.$$.fragment,o),r=!1},d(o){o&&h(e),re(a)}}}function yt(i){let e,a,s,r;return a=new Jt({props:{tip:i[14].name,bottom:"true",$$slots:{default:[hl]},$$scope:{ctx:i}}}),{c(){e=g("div"),te(a.$$.fragment),s=T()},l(o){e=k(o,"DIV",{});var f=b(e);le(a.$$.fragment,f),s=z(f),f.forEach(h)},m(o,f){V(o,e,f),se(a,e,null),_(e,s),r=!0},p(o,f){const n={};f[0]&1&&(n.tip=o[14].name),f[0]&1|f[1]&1&&(n.$$scope={dirty:f,ctx:o}),a.$set(n)},i(o){r||(w(a.$$.fragment,o),r=!0)},o(o){D(a.$$.fragment,o),r=!1},d(o){o&&h(e),re(a)}}}function Bt(i){let e,a,s,r,o,f,n,m=i[0].spec.faqs,t=[];for(let l=0;l<m.length;l+=1)t[l]=Mt(nt(i,m,l));const u=l=>D(t[l],1,1,()=>{t[l]=null});return{c(){e=g("section"),a=g("div"),s=g("h2"),r=y("Často kladené dotazy (FAQ)"),o=T(),f=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=k(l,"SECTION",{class:!0});var p=b(e);a=k(p,"DIV",{class:!0});var c=b(a);s=k(c,"H2",{class:!0,id:!0});var $=b(s);r=B($,"Často kladené dotazy (FAQ)"),$.forEach(h),o=z(c),f=k(c,"DIV",{class:!0});var S=b(f);for(let v=0;v<t.length;v+=1)t[v].l(S);S.forEach(h),c.forEach(h),p.forEach(h),this.h()},h(){d(s,"class","uppercase pt-5 text-center"),d(s,"id","faq"),d(f,"class","md:columns-2 columns-1 mt-8 h-auto"),d(a,"class","text-custom-darkpurple"),d(e,"class","relative mx-auto py-10 px-6 max-w-7xl")},m(l,p){V(l,e,p),_(e,a),_(a,s),_(s,r),_(a,o),_(a,f);for(let c=0;c<t.length;c+=1)t[c].m(f,null);n=!0},p(l,p){if(p[0]&17){m=l[0].spec.faqs;let c;for(c=0;c<m.length;c+=1){const $=nt(l,m,c);t[c]?(t[c].p($,p),w(t[c],1)):(t[c]=Mt($),t[c].c(),w(t[c],1),t[c].m(f,null))}for(K(),c=m.length;c<t.length;c+=1)u(c);U()}},i(l){if(!n){for(let p=0;p<m.length;p+=1)w(t[p]);n=!0}},o(l){t=t.filter(Boolean);for(let p=0;p<t.length;p+=1)D(t[p]);n=!1},d(l){l&&h(e),_e(t,l)}}}function Mt(i){let e,a,s=i[11].question+"",r,o,f,n,m;return f=new sl({props:{source:i[11].answer,renderers:i[4]}}),{c(){e=g("div"),a=g("div"),r=y(s),o=T(),te(f.$$.fragment),n=T(),this.h()},l(t){e=k(t,"DIV",{class:!0});var u=b(e);a=k(u,"DIV",{class:!0});var l=b(a);r=B(l,s),l.forEach(h),o=z(u),le(f.$$.fragment,u),n=z(u),u.forEach(h),this.h()},h(){d(a,"class","mb-4 font-bold"),d(e,"class","mb-5 break-inside-avoid-column text-custom-darkgreen bg-custom-lightgreen rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(t,u){V(t,e,u),_(e,a),_(a,r),_(e,o),se(f,e,null),_(e,n),m=!0},p(t,u){(!m||u[0]&1)&&s!==(s=t[11].question+"")&&he(r,s);const l={};u[0]&1&&(l.source=t[11].answer),f.$set(l)},i(t){m||(w(f.$$.fragment,t),m=!0)},o(t){D(f.$$.fragment,t),m=!1},d(t){t&&h(e),re(f)}}}function _l(i){let e,a,s,r,o,f,n,m,t,u,l,p,c,$,S,v,j,I,L,C,q,Z,ne,fe,ce,ae,Q,ue,de,R,F,me,J,Y,ge,oe,W,ie,ke,Ge,Oe,Ve,ve,X,be,Ae,He,Le=i[0].spec.partners.filter(At).slice(0,4).length,Te,Ce=i[0].spec.partners.filter(Ot).slice(4).length,ze,qe=i[0].spec.partners.filter(Gt).length,je,Re=i[0].spec.partners.filter(Pt).length,Se,we,Ie;document.title=e="UTXO.23 "+(i[0]?"- "+i[0].description:"");let M=i[0]&&vt(i),P=Le&&Dt(i),G=Ce&&Tt(i),O=qe&&jt(i),A=Re&&Nt(i),H=i[0]&&Bt(i);return{c(){a=T(),M&&M.c(),s=T(),r=g("section"),o=g("div"),f=g("div"),n=g("div"),m=g("img"),u=T(),l=g("div"),p=g("div"),c=g("img"),S=T(),v=g("div"),j=g("img"),L=T(),C=g("div"),q=g("div"),Z=y("Místo"),ne=T(),fe=g("div"),ce=y("Gabriel Loci"),ae=T(),Q=g("div"),ue=y("Holečkova 106/10, 150 00 Praha 5 - Smíchov 🇨🇿"),de=g("br"),R=g("span"),F=g("a"),me=y("Google Maps"),J=y(`,
            `),Y=g("a"),ge=y("Mapy.cz"),oe=T(),W=g("div"),ie=y(`Benediktinky. Kulturní památka. Česká Pošta. Poštovní muzeum. Na první
          pohled nesouvisející názvy, které jsou ale neodmyslitelnou součástí
          unikátního komplexu Gabriel Loci na pražském Smíchově doslova pár
          minut od centra. Na konci 19.století v klášteře sídlily řeholnice,
          ženské opatství řádu benediktinek beuronské kongregace. Později
          prostory spravovalo československé Ministerstvo pošt a telegrafů. Dnes
          komplex využívají hlavně natáčecí studia jako HBO, Netflix nebo i ČT.
          No a my! 💪`),ke=g("br"),Ge=g("br"),Oe=y(`
          Zažijte mysteriózní atmosféru komplexu na 2.ročníku konference UTXO.23.
          Část after-party si užijete doslova v pitevně ze seriálu Devadesátky 👌😀`),Ve=T(),ve=g("section"),X=g("div"),be=g("div"),Ae=y("Partneři"),He=T(),P&&P.c(),Te=T(),G&&G.c(),ze=T(),O&&O.c(),je=T(),A&&A.c(),Se=T(),H&&H.c(),we=Ee(),this.h()},l(E){xt("svelte-17dyzgd",document.head).forEach(h),a=z(E),M&&M.l(E),s=z(E),r=k(E,"SECTION",{class:!0});var Ze=b(r);o=k(Ze,"DIV",{class:!0});var We=b(o);f=k(We,"DIV",{class:!0});var Ne=b(f);n=k(Ne,"DIV",{class:!0});var ye=b(n);m=k(ye,"IMG",{src:!0,class:!0,alt:!0}),u=z(ye),l=k(ye,"DIV",{class:!0});var Be=b(l);p=k(Be,"DIV",{class:!0});var Je=b(p);c=k(Je,"IMG",{src:!0,class:!0,alt:!0}),Je.forEach(h),S=z(Be),v=k(Be,"DIV",{class:!0});var xe=b(v);j=k(xe,"IMG",{src:!0,class:!0,alt:!0}),xe.forEach(h),Be.forEach(h),ye.forEach(h),L=z(Ne),C=k(Ne,"DIV",{class:!0});var pe=b(C);q=k(pe,"DIV",{class:!0});var et=b(q);Z=B(et,"Místo"),et.forEach(h),ne=z(pe),fe=k(pe,"DIV",{class:!0});var tt=b(fe);ce=B(tt,"Gabriel Loci"),tt.forEach(h),ae=z(pe),Q=k(pe,"DIV",{class:!0});var Me=b(Q);ue=B(Me,"Holečkova 106/10, 150 00 Praha 5 - Smíchov 🇨🇿"),de=k(Me,"BR",{}),R=k(Me,"SPAN",{class:!0});var Pe=b(R);F=k(Pe,"A",{href:!0,class:!0,target:!0});var lt=b(F);me=B(lt,"Google Maps"),lt.forEach(h),J=B(Pe,`,
            `),Y=k(Pe,"A",{href:!0,class:!0,target:!0});var st=b(Y);ge=B(st,"Mapy.cz"),st.forEach(h),Pe.forEach(h),Me.forEach(h),oe=z(pe),W=k(pe,"DIV",{class:!0});var De=b(W);ie=B(De,`Benediktinky. Kulturní památka. Česká Pošta. Poštovní muzeum. Na první
          pohled nesouvisející názvy, které jsou ale neodmyslitelnou součástí
          unikátního komplexu Gabriel Loci na pražském Smíchově doslova pár
          minut od centra. Na konci 19.století v klášteře sídlily řeholnice,
          ženské opatství řádu benediktinek beuronské kongregace. Později
          prostory spravovalo československé Ministerstvo pošt a telegrafů. Dnes
          komplex využívají hlavně natáčecí studia jako HBO, Netflix nebo i ČT.
          No a my! 💪`),ke=k(De,"BR",{}),Ge=k(De,"BR",{}),Oe=B(De,`
          Zažijte mysteriózní atmosféru komplexu na 2.ročníku konference UTXO.23.
          Část after-party si užijete doslova v pitevně ze seriálu Devadesátky 👌😀`),De.forEach(h),pe.forEach(h),Ne.forEach(h),We.forEach(h),Ze.forEach(h),Ve=z(E),ve=k(E,"SECTION",{class:!0});var rt=b(ve);X=k(rt,"DIV",{class:!0});var x=b(X);be=k(x,"DIV",{class:!0});var at=b(be);Ae=B(at,"Partneři"),at.forEach(h),He=z(x),P&&P.l(x),Te=z(x),G&&G.l(x),ze=z(x),O&&O.l(x),je=z(x),A&&A.l(x),x.forEach(h),rt.forEach(h),Se=z(E),H&&H.l(E),we=Ee(),this.h()},h(){Xe(m.src,t="/photos/optimized/gabriel-loci.jpeg")||d(m,"src",t),d(m,"class","flex rounded-xl shadow-xl"),d(m,"alt","Gabriel Loci"),Xe(c.src,$="/photos/optimized/rajska-zahrada.jpeg")||d(c,"src",$),d(c,"class","rounded-lg shadow-lg"),d(c,"alt","Gabriel Loci - Rajská zahrada"),d(p,"class","w-1/2"),Xe(j.src,I="/photos/optimized/knihovna.jpeg")||d(j,"src",I),d(j,"class","rounded-lg shadow-lg"),d(j,"alt","Gabriel Loci - Knihovna"),d(v,"class","w-1/2"),d(l,"class","flex mt-3 gap-3"),d(n,"class","block flex-1"),d(q,"class","uppercase"),d(fe,"class","uppercase mt-3 text-4xl font-bold"),d(F,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),d(F,"class","underline hover:no-underline"),d(F,"target","_blank"),d(Y,"href","https://mapy.cz/s/cuvetubafo"),d(Y,"class","underline hover:no-underline"),d(Y,"target","_blank"),d(R,"class","font-normal"),d(Q,"class","mt-4 font-bold"),d(W,"class","mt-4"),d(C,"class","text-white md:w-1/2 md:pt-0 pt-6"),d(f,"class","py-6 md:py-10 md:flex gap-12"),d(o,"class","relative mx-auto py-6 px-6 max-w-7xl"),d(r,"class","bg-utxo-gradient"),d(be,"class","text-2xl uppercase font-bold text-center"),d(X,"class","text-custom-darkpurple lg:mt-10"),d(ve,"class","mx-auto py-10 px-6 max-w-auto overflow-hidden")},m(E,N){V(E,a,N),M&&M.m(E,N),V(E,s,N),V(E,r,N),_(r,o),_(o,f),_(f,n),_(n,m),_(n,u),_(n,l),_(l,p),_(p,c),_(l,S),_(l,v),_(v,j),_(f,L),_(f,C),_(C,q),_(q,Z),_(C,ne),_(C,fe),_(fe,ce),_(C,ae),_(C,Q),_(Q,ue),_(Q,de),_(Q,R),_(R,F),_(F,me),_(R,J),_(R,Y),_(Y,ge),_(C,oe),_(C,W),_(W,ie),_(W,ke),_(W,Ge),_(W,Oe),V(E,Ve,N),V(E,ve,N),_(ve,X),_(X,be),_(be,Ae),_(X,He),P&&P.m(X,null),_(X,Te),G&&G.m(X,null),_(X,ze),O&&O.m(X,null),_(X,je),A&&A.m(X,null),V(E,Se,N),H&&H.m(E,N),V(E,we,N),Ie=!0},p(E,N){(!Ie||N[0]&1)&&e!==(e="UTXO.23 "+(E[0]?"- "+E[0].description:""))&&(document.title=e),E[0]?M?(M.p(E,N),N[0]&1&&w(M,1)):(M=vt(E),M.c(),w(M,1),M.m(s.parentNode,s)):M&&(K(),D(M,1,1,()=>{M=null}),U()),N[0]&1&&(Le=E[0].spec.partners.filter(At).slice(0,4).length),Le?P?(P.p(E,N),N[0]&1&&w(P,1)):(P=Dt(E),P.c(),w(P,1),P.m(X,Te)):P&&(K(),D(P,1,1,()=>{P=null}),U()),N[0]&1&&(Ce=E[0].spec.partners.filter(Ot).slice(4).length),Ce?G?(G.p(E,N),N[0]&1&&w(G,1)):(G=Tt(E),G.c(),w(G,1),G.m(X,ze)):G&&(K(),D(G,1,1,()=>{G=null}),U()),N[0]&1&&(qe=E[0].spec.partners.filter(Gt).length),qe?O?(O.p(E,N),N[0]&1&&w(O,1)):(O=jt(E),O.c(),w(O,1),O.m(X,je)):O&&(K(),D(O,1,1,()=>{O=null}),U()),N[0]&1&&(Re=E[0].spec.partners.filter(Pt).length),Re?A?(A.p(E,N),N[0]&1&&w(A,1)):(A=Nt(E),A.c(),w(A,1),A.m(X,null)):A&&(K(),D(A,1,1,()=>{A=null}),U()),E[0]?H?(H.p(E,N),N[0]&1&&w(H,1)):(H=Bt(E),H.c(),w(H,1),H.m(we.parentNode,we)):H&&(K(),D(H,1,1,()=>{H=null}),U())},i(E){Ie||(w(M),w(P),w(G),w(O),w(A),w(H),Ie=!0)},o(E){D(M),D(P),D(G),D(O),D(A),D(H),Ie=!1},d(E){E&&h(a),M&&M.d(E),E&&h(s),E&&h(r),E&&h(Ve),E&&h(ve),P&&P.d(),G&&G.d(),O&&O.d(),A&&A.d(),E&&h(Se),H&&H.d(E),E&&h(we)}}}function Ye(i="fa-regular fa-calendar"){return`<i class="${i} inline-block align-baseline pr-1.5 sm:pr-2.5 text-custom-darkpurple/40"></i>`}const Pt=i=>i.type==="medium",Gt=i=>i.type==="community",Ot=i=>i.type==="sponsor",At=i=>i.type==="sponsor",Ht=i=>!i.lead,Lt=i=>i.type==="sponsor",Ct=i=>i.type==="sponsor",qt=i=>i.type==="community",Rt=i=>i.type==="medium";function dl(i,e,a){let s,r,o,f,n,m;Fe(i,tl,c=>a(0,f=c)),Fe(i,ll,c=>a(2,n=c)),Fe(i,Qe,c=>a(3,m=c));const t={link:rl};function u(c){return function(){Qe.update($=>($.hpTrack=c,$))}}function l(){Qe.update(c=>(c.hpTrack=null,c))}const p=()=>.5-Math.random();return i.$$.update=()=>{i.$$.dirty[0]&1&&a(7,s=f),i.$$.dirty[0]&128&&a(8,r=s?s.spec.speakers.filter(c=>!!c.lead).length:0),i.$$.dirty[0]&384&&a(1,o=s?[{name:"Hlavní přednášející ("+r+")",id:"top"},{name:"Vše",id:null}].concat(s.spec.tracks.filter(c=>c.hidden===void 0||c.hidden!==!0)):null)},[f,o,n,m,t,u,l,s,r,p]}class wl extends Xt{constructor(e){super(),Ft(this,e,dl,_l,Kt,{},null,[-1,-1])}}export{wl as default};
