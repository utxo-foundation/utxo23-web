import{S as Ut,i as Xt,s as Qt,O as Zt,k as g,a as T,l as b,m as k,h,c as z,n as _,U as ee,b as V,E as d,P as Jt,Q as Wt,R as Yt,g as U,t as D,d as X,f as w,B as nt,q as N,e as Ee,V as tl,r as B,G as Ke,C as ot,D as de,I as Ue,J as Xe,u as he,F as Ge,H as xt,w as te,x as le,y as re,z as se,W as it}from"../../chunks/index-f71fcd82.js";import{u as Qe,a as ll}from"../../chunks/stores-c713c1dd.js";import{A as $e}from"../../chunks/Avatar-f340785b.js";import{S as rl,L as sl}from"../../chunks/Link-53db9fe6.js";/* empty css                                                               */import{T as al}from"../../chunks/Transition-adb530ea.js";const nl=o=>({}),ft=o=>({});function ol(o){let e;const a=o[9]["custom-tip"],r=Zt(a,o,o[8],ft);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,n){r&&r.m(s,n),e=!0},p(s,n){r&&r.p&&(!e||n&256)&&Jt(r,a,s,s[8],e?Yt(a,s[8],n,nl):Wt(s[8]),ft)},i(s){e||(w(r,s),e=!0)},o(s){D(r,s),e=!1},d(s){r&&r.d(s)}}}function il(o){let e;return{c(){e=g("div"),this.h()},l(a){e=b(a,"DIV",{class:!0,style:!0});var r=k(e);r.forEach(h),this.h()},h(){_(e,"class","default-tip svelte-uasnpl"),_(e,"style",o[6])},m(a,r){V(a,e,r),e.innerHTML=o[0]},p(a,r){r&1&&(e.innerHTML=a[0])},i:nt,o:nt,d(a){a&&h(e)}}}function fl(o){let e,a,r,s,n,f,i;const v=o[9].default,t=Zt(v,o,o[8],null),u=[il,ol],l=[];function p(c,$){return c[0]?0:1}return n=p(o),f=l[n]=u[n](o),{c(){e=g("div"),a=g("span"),t&&t.c(),r=T(),s=g("div"),f.c(),this.h()},l(c){e=b(c,"DIV",{class:!0});var $=k(e);a=b($,"SPAN",{class:!0});var S=k(a);t&&t.l(S),S.forEach(h),r=z($),s=b($,"DIV",{class:!0});var m=k(s);f.l(m),m.forEach(h),$.forEach(h),this.h()},h(){_(a,"class","tooltip-slot svelte-uasnpl"),_(s,"class","tooltip svelte-uasnpl"),ee(s,"active",o[5]),ee(s,"left",o[4]),ee(s,"right",o[2]),ee(s,"bottom",o[3]),ee(s,"top",o[1]),_(e,"class","tooltip-wrapper svelte-uasnpl")},m(c,$){V(c,e,$),d(e,a),t&&t.m(a,null),d(e,r),d(e,s),l[n].m(s,null),i=!0},p(c,[$]){t&&t.p&&(!i||$&256)&&Jt(t,v,c,c[8],i?Yt(v,c[8],$,null):Wt(c[8]),null);let S=n;n=p(c),n===S?l[n].p(c,$):(U(),D(l[S],1,1,()=>{l[S]=null}),X(),f=l[n],f?f.p(c,$):(f=l[n]=u[n](c),f.c()),w(f,1),f.m(s,null)),(!i||$&32)&&ee(s,"active",c[5]),(!i||$&16)&&ee(s,"left",c[4]),(!i||$&4)&&ee(s,"right",c[2]),(!i||$&8)&&ee(s,"bottom",c[3]),(!i||$&2)&&ee(s,"top",c[1])},i(c){i||(w(t,c),w(f),i=!0)},o(c){D(t,c),D(f),i=!1},d(c){c&&h(e),t&&t.d(c),l[n].d()}}}function cl(o,e,a){let{$$slots:r={},$$scope:s}=e,{tip:n=""}=e,{top:f=!1}=e,{right:i=!1}=e,{bottom:v=!1}=e,{left:t=!1}=e,{active:u=!1}=e,{color:l="#393F67"}=e,p=`background-color: ${l};`;return o.$$set=c=>{"tip"in c&&a(0,n=c.tip),"top"in c&&a(1,f=c.top),"right"in c&&a(2,i=c.right),"bottom"in c&&a(3,v=c.bottom),"left"in c&&a(4,t=c.left),"active"in c&&a(5,u=c.active),"color"in c&&a(7,l=c.color),"$$scope"in c&&a(8,s=c.$$scope)},[n,f,i,v,t,u,p,l,s,r]}class el extends Ut{constructor(e){super(),Xt(this,e,cl,fl,Qt,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function ct(o,e,a){const r=o.slice();return r[11]=e[a],r}function ut(o,e,a){const r=o.slice();return r[14]=e[a],r}function pt(o,e,a){const r=o.slice();return r[14]=e[a],r}function ht(o,e,a){const r=o.slice();return r[14]=e[a],r}function dt(o,e,a){const r=o.slice();return r[14]=e[a],r}function _t(o,e,a){const r=o.slice();return r[23]=e[a],r}function mt(o,e,a){const r=o.slice();return r[23]=e[a],r}function vt(o,e,a){const r=o.slice();return r[28]=e[a],r}function gt(o){let e,a,r,s,n,f,i,v,t=o[2]&&bt(o),u=o[1],l=[];for(let m=0;m<u.length;m+=1)l[m]=wt(vt(o,u,m));let p=o[0].bundle.spec.speakers,c=[];for(let m=0;m<p.length;m+=1)c[m]=It(mt(o,p,m));const $=m=>D(c[m],1,1,()=>{c[m]=null});let S=o[3].hpTrack==="top"&&Dt(o);return{c(){t&&t.c(),e=T(),a=g("section"),r=g("div");for(let m=0;m<l.length;m+=1)l[m].c();s=T(),n=g("section"),f=g("div");for(let m=0;m<c.length;m+=1)c[m].c();i=T(),S&&S.c(),this.h()},l(m){t&&t.l(m),e=z(m),a=b(m,"SECTION",{class:!0});var j=k(a);r=b(j,"DIV",{class:!0});var I=k(r);for(let q=0;q<l.length;q+=1)l[q].l(I);I.forEach(h),j.forEach(h),s=z(m),n=b(m,"SECTION",{class:!0});var L=k(n);f=b(L,"DIV",{class:!0});var C=k(f);for(let q=0;q<c.length;q+=1)c[q].l(C);C.forEach(h),i=z(L),S&&S.l(L),L.forEach(h),this.h()},h(){_(r,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-custom-darkpurple justify-center"),_(a,"class","relative mx-auto pt-6 sm:pt-10 px-6"),_(f,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center"),_(n,"class","pb-6 sm:-pb-10 mx-auto sm:px-2 lg:px-6 2xl:px-16")},m(m,j){t&&t.m(m,j),V(m,e,j),V(m,a,j),d(a,r);for(let I=0;I<l.length;I+=1)l[I].m(r,null);V(m,s,j),V(m,n,j),d(n,f);for(let I=0;I<c.length;I+=1)c[I].m(f,null);d(n,i),S&&S.m(n,null),v=!0},p(m,j){if(m[2]?t?t.p(m,j):(t=bt(m),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),j[0]&43){u=m[1];let I;for(I=0;I<u.length;I+=1){const L=vt(m,u,I);l[I]?l[I].p(L,j):(l[I]=wt(L),l[I].c(),l[I].m(r,null))}for(;I<l.length;I+=1)l[I].d(1);l.length=u.length}if(j[0]&9){p=m[0].bundle.spec.speakers;let I;for(I=0;I<p.length;I+=1){const L=mt(m,p,I);c[I]?(c[I].p(L,j),w(c[I],1)):(c[I]=It(L),c[I].c(),w(c[I],1),c[I].m(f,null))}for(U(),I=p.length;I<c.length;I+=1)$(I);X()}m[3].hpTrack==="top"?S?(S.p(m,j),j[0]&8&&w(S,1)):(S=Dt(m),S.c(),w(S,1),S.m(n,null)):S&&(U(),D(S,1,1,()=>{S=null}),X())},i(m){if(!v){for(let j=0;j<p.length;j+=1)w(c[j]);w(S),v=!0}},o(m){c=c.filter(Boolean);for(let j=0;j<c.length;j+=1)D(c[j]);D(S),v=!1},d(m){t&&t.d(m),m&&h(e),m&&h(a),de(l,m),m&&h(s),m&&h(n),de(c,m),S&&S.d()}}}function bt(o){let e,a,r,s,n,f=Ze("fa-solid fa-user-check")+"",i,v,t=o[0].bundle.spec.speakers.length+"",u,l,p,c,$,S=Ze("fa-regular fa-calendar")+"",m,j,I=o[0].bundle.spec.events.length+"",L,C,q,J,ie,fe=Ze("fa-solid fa-users")+"",ce,ae,Z=o[2].global.tickets+"",ue,_e;return{c(){e=g("section"),a=g("div"),r=g("div"),s=g("div"),n=new Ue(!1),i=T(),v=g("b"),u=N(t),l=N(" přednášejících"),p=T(),c=g("div"),$=new Ue(!1),m=T(),j=g("b"),L=N(I),C=N(" událostí"),q=T(),J=g("div"),ie=new Ue(!1),ce=T(),ae=g("b"),ue=N(Z),_e=N(" návstěvníků"),this.h()},l(R){e=b(R,"SECTION",{class:!0});var F=k(e);a=b(F,"DIV",{class:!0});var ve=k(a);r=b(ve,"DIV",{class:!0});var Y=k(r);s=b(Y,"DIV",{});var Q=k(s);n=Xe(Q,!1),i=z(Q),v=b(Q,"B",{});var ge=k(v);u=B(ge,t),ge.forEach(h),l=B(Q," přednášejících"),Q.forEach(h),p=z(Y),c=b(Y,"DIV",{});var ne=k(c);$=Xe(ne,!1),m=z(ne),j=b(ne,"B",{});var W=k(j);L=B(W,I),W.forEach(h),C=B(ne," událostí"),ne.forEach(h),q=z(Y),J=b(Y,"DIV",{});var oe=k(J);ie=Xe(oe,!1),ce=z(oe),ae=b(oe,"B",{});var be=k(ae);ue=B(be,Z),be.forEach(h),_e=B(oe," návstěvníků"),oe.forEach(h),Y.forEach(h),ve.forEach(h),F.forEach(h),this.h()},h(){n.a=i,$.a=m,ie.a=ce,_(r,"class","text-center text-xl sm:text-xl lg:text-2xl text-custom-darkpurple px-8 flex flex-wrap gap-4 lg:gap-8 justify-center"),_(a,"class","pb-4 pt-4 lg:pt-4 lg:pb-4 mx-auto sm:px-2 lg:px-6 2xl:px-16"),_(e,"class","bg-blue-web-light")},m(R,F){V(R,e,F),d(e,a),d(a,r),d(r,s),n.m(f,s),d(s,i),d(s,v),d(v,u),d(s,l),d(r,p),d(r,c),$.m(S,c),d(c,m),d(c,j),d(j,L),d(c,C),d(r,q),d(r,J),ie.m(fe,J),d(J,ce),d(J,ae),d(ae,ue),d(J,_e)},p(R,F){F[0]&1&&t!==(t=R[0].bundle.spec.speakers.length+"")&&he(u,t),F[0]&1&&I!==(I=R[0].bundle.spec.events.length+"")&&he(L,I),F[0]&4&&Z!==(Z=R[2].global.tickets+"")&&he(ue,Z)},d(R){R&&h(e)}}}function kt(o){let e,a=o[0].bundle.spec.speakers.length+"",r,s;return{c(){e=N("("),r=N(a),s=N(")")},l(n){e=B(n,"("),r=B(n,a),s=B(n,")")},m(n,f){V(n,e,f),V(n,r,f),V(n,s,f)},p(n,f){f[0]&1&&a!==(a=n[0].bundle.spec.speakers.length+"")&&he(r,a)},d(n){n&&h(e),n&&h(r),n&&h(s)}}}function wt(o){let e,a=(o[28].shortname||o[28].name)+"",r,s,n,f,i,v,t=!o[28].id&&kt(o);return{c(){e=g("div"),r=N(a),s=T(),t&&t.c(),n=T(),this.h()},l(u){e=b(u,"DIV",{class:!0});var l=k(e);r=B(l,a),s=z(l),t&&t.l(l),n=z(l),l.forEach(h),this.h()},h(){_(e,"class",f="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-lg shadow border border-solid "+(o[3].hpTrack===o[28].id?"bg-utxo-gradient border-0 text-white":"border-custom-darkpurple  hover:bg-custom-darkpurple hover:text-white hover:border-transparent cursor-pointer"))},m(u,l){V(u,e,l),d(e,r),d(e,s),t&&t.m(e,null),d(e,n),i||(v=[Ge(e,"click",function(){it(o[5](o[28].id))&&o[5](o[28].id).apply(this,arguments)}),Ge(e,"keydown",function(){it(o[5](o[28].id))&&o[5](o[28].id).apply(this,arguments)})],i=!0)},p(u,l){o=u,l[0]&2&&a!==(a=(o[28].shortname||o[28].name)+"")&&he(r,a),o[28].id?t&&(t.d(1),t=null):t?t.p(o,l):(t=kt(o),t.c(),t.m(e,n)),l[0]&10&&f!==(f="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-lg shadow border border-solid "+(o[3].hpTrack===o[28].id?"bg-utxo-gradient border-0 text-white":"border-custom-darkpurple  hover:bg-custom-darkpurple hover:text-white hover:border-transparent cursor-pointer"))&&_(e,"class",f)},d(u){u&&h(e),t&&t.d(),i=!1,xt(v)}}}function Et(o){let e=!o[3].hpTrack||o[23].tracks&&o[23].tracks.includes(o[3].hpTrack)||o[3].hpTrack==="top",a,r,s=e&&$t(o);return{c(){s&&s.c(),a=Ee()},l(n){s&&s.l(n),a=Ee()},m(n,f){s&&s.m(n,f),V(n,a,f),r=!0},p(n,f){f[0]&9&&(e=!n[3].hpTrack||n[23].tracks&&n[23].tracks.includes(n[3].hpTrack)||n[3].hpTrack==="top"),e?s?(s.p(n,f),f[0]&9&&w(s,1)):(s=$t(n),s.c(),w(s,1),s.m(a.parentNode,a)):s&&(U(),D(s,1,1,()=>{s=null}),X())},i(n){r||(w(s),r=!0)},o(n){D(s),r=!1},d(n){s&&s.d(n),n&&h(a)}}}function $t(o){let e,a;return e=new al({props:{key:o[3].hpTrack,type:"random",$$slots:{default:[ul]},$$scope:{ctx:o}}}),{c(){te(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,s){re(e,r,s),a=!0},p(r,s){const n={};s[0]&8&&(n.key=r[3].hpTrack),s[0]&1|s[1]&1&&(n.$$scope={dirty:s,ctx:r}),e.$set(n)},i(r){a||(w(e.$$.fragment,r),a=!0)},o(r){D(e.$$.fragment,r),a=!1},d(r){se(e,r)}}}function ul(o){let e,a,r;return e=new $e({props:{speaker:o[23],size:"normal"}}),{c(){te(e.$$.fragment),a=T()},l(s){le(e.$$.fragment,s),a=z(s)},m(s,n){re(e,s,n),V(s,a,n),r=!0},p(s,n){const f={};n[0]&1&&(f.speaker=s[23]),e.$set(f)},i(s){r||(w(e.$$.fragment,s),r=!0)},o(s){D(e.$$.fragment,s),r=!1},d(s){se(e,s),s&&h(a)}}}function It(o){let e,a,r=(o[3].hpTrack==="top"&&o[23].lead===!0||o[3].hpTrack!=="top")&&Et(o);return{c(){r&&r.c(),e=Ee()},l(s){r&&r.l(s),e=Ee()},m(s,n){r&&r.m(s,n),V(s,e,n),a=!0},p(s,n){s[3].hpTrack==="top"&&s[23].lead===!0||s[3].hpTrack!=="top"?r?(r.p(s,n),n[0]&9&&w(r,1)):(r=Et(s),r.c(),w(r,1),r.m(e.parentNode,e)):r&&(U(),D(r,1,1,()=>{r=null}),X())},i(s){a||(w(r),a=!0)},o(s){D(r),a=!1},d(s){r&&r.d(s),s&&h(e)}}}function Dt(o){let e,a,r,s,n,f,i,v=o[0].bundle.spec.speakers.filter(Ct).sort(o[9]).slice(0,27),t=[];for(let l=0;l<v.length;l+=1)t[l]=Vt(_t(o,v,l));const u=l=>D(t[l],1,1,()=>{t[l]=null});return{c(){e=g("div"),a=g("div"),r=T(),s=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var p=k(e);a=b(p,"DIV",{class:!0}),k(a).forEach(h),r=z(p),s=b(p,"DIV",{class:!0});var c=k(s);for(let $=0;$<t.length;$+=1)t[$].l(c);c.forEach(h),p.forEach(h),this.h()},h(){_(a,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),_(s,"class","flex flex-wrap gap-3 mt-10 justify-center"),_(e,"class","relative cursor-pointer mb-10 max-w-screen-2xl mx-auto")},m(l,p){V(l,e,p),d(e,a),d(e,r),d(e,s);for(let c=0;c<t.length;c+=1)t[c].m(s,null);n=!0,f||(i=[Ge(a,"click",o[6]),Ge(a,"keydown",o[6])],f=!0)},p(l,p){if(p[0]&1){v=l[0].bundle.spec.speakers.filter(Ct).sort(l[9]).slice(0,27);let c;for(c=0;c<v.length;c+=1){const $=_t(l,v,c);t[c]?(t[c].p($,p),w(t[c],1)):(t[c]=Vt($),t[c].c(),w(t[c],1),t[c].m(s,null))}for(U(),c=v.length;c<t.length;c+=1)u(c);X()}},i(l){if(!n){for(let p=0;p<v.length;p+=1)w(t[p]);n=!0}},o(l){t=t.filter(Boolean);for(let p=0;p<t.length;p+=1)D(t[p]);n=!1},d(l){l&&h(e),de(t,l),f=!1,xt(i)}}}function Vt(o){let e,a;return e=new $e({props:{speaker:o[23],size:"small"}}),{c(){te(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,s){re(e,r,s),a=!0},p(r,s){const n={};s[0]&1&&(n.speaker=r[23]),e.$set(n)},i(r){a||(w(e.$$.fragment,r),a=!0)},o(r){D(e.$$.fragment,r),a=!1},d(r){se(e,r)}}}function Tt(o){let e,a,r,s,n,f=o[0].bundle.spec.partners.filter(qt).slice(0,4),i=[];for(let t=0;t<f.length;t+=1)i[t]=zt(dt(o,f,t));const v=t=>D(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),a=N("Hlavní sponzoři"),r=T(),s=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=b(t,"DIV",{class:!0});var u=k(e);a=B(u,"Hlavní sponzoři"),u.forEach(h),r=z(t),s=b(t,"DIV",{class:!0});var l=k(s);for(let p=0;p<i.length;p+=1)i[p].l(l);l.forEach(h),this.h()},h(){_(e,"class","mt-6 text-center"),_(s,"class","mt-6 flex flex-wrap gap-8 justify-center")},m(t,u){V(t,e,u),d(e,a),V(t,r,u),V(t,s,u);for(let l=0;l<i.length;l+=1)i[l].m(s,null);n=!0},p(t,u){if(u[0]&1){f=t[0].bundle.spec.partners.filter(qt).slice(0,4);let l;for(l=0;l<f.length;l+=1){const p=dt(t,f,l);i[l]?(i[l].p(p,u),w(i[l],1)):(i[l]=zt(p),i[l].c(),w(i[l],1),i[l].m(s,null))}for(U(),l=f.length;l<i.length;l+=1)v(l);X()}},i(t){if(!n){for(let u=0;u<f.length;u+=1)w(i[u]);n=!0}},o(t){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)D(i[u]);n=!1},d(t){t&&h(e),t&&h(r),t&&h(s),de(i,t)}}}function zt(o){let e,a,r,s,n,f,i=o[14].name+"",v,t,u;return r=new $e({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-28 shadow-xl"}}),{c(){e=g("div"),a=g("a"),te(r.$$.fragment),n=T(),f=g("div"),v=N(i),t=T(),this.h()},l(l){e=b(l,"DIV",{class:!0});var p=k(e);a=b(p,"A",{href:!0,target:!0,rel:!0});var c=k(a);le(r.$$.fragment,c),c.forEach(h),n=z(p),f=b(p,"DIV",{class:!0});var $=k(f);v=B($,i),$.forEach(h),t=z(p),p.forEach(h),this.h()},h(){_(a,"href",s=o[14].web.url),_(a,"target","_blank"),_(a,"rel","noreferrer"),_(f,"class","text-center text-sm uppercase font-bold"),_(e,"class","w-32")},m(l,p){V(l,e,p),d(e,a),re(r,a,null),d(e,n),d(e,f),d(f,v),d(e,t),u=!0},p(l,p){const c={};p[0]&1&&(c.speaker=l[14]),r.$set(c),(!u||p[0]&1&&s!==(s=l[14].web.url))&&_(a,"href",s),(!u||p[0]&1)&&i!==(i=l[14].name+"")&&he(v,i)},i(l){u||(w(r.$$.fragment,l),u=!0)},o(l){D(r.$$.fragment,l),u=!1},d(l){l&&h(e),se(r)}}}function jt(o){let e,a,r,s,n,f=o[0].bundle.spec.partners.filter(Rt).slice(4),i=[];for(let t=0;t<f.length;t+=1)i[t]=St(ht(o,f,t));const v=t=>D(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),a=N("Sponzoři"),r=T(),s=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=b(t,"DIV",{class:!0});var u=k(e);a=B(u,"Sponzoři"),u.forEach(h),r=z(t),s=b(t,"DIV",{class:!0});var l=k(s);for(let p=0;p<i.length;p+=1)i[p].l(l);l.forEach(h),this.h()},h(){_(e,"class","mt-6 text-center"),_(s,"class","mt-6 flex flex-wrap gap-8 justify-center")},m(t,u){V(t,e,u),d(e,a),V(t,r,u),V(t,s,u);for(let l=0;l<i.length;l+=1)i[l].m(s,null);n=!0},p(t,u){if(u[0]&1){f=t[0].bundle.spec.partners.filter(Rt).slice(4);let l;for(l=0;l<f.length;l+=1){const p=ht(t,f,l);i[l]?(i[l].p(p,u),w(i[l],1)):(i[l]=St(p),i[l].c(),w(i[l],1),i[l].m(s,null))}for(U(),l=f.length;l<i.length;l+=1)v(l);X()}},i(t){if(!n){for(let u=0;u<f.length;u+=1)w(i[u]);n=!0}},o(t){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)D(i[u]);n=!1},d(t){t&&h(e),t&&h(r),t&&h(s),de(i,t)}}}function St(o){let e,a,r,s,n,f,i=o[14].name+"",v,t,u;return r=new $e({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-20 shadow-xl"}}),{c(){e=g("div"),a=g("a"),te(r.$$.fragment),n=T(),f=g("div"),v=N(i),t=T(),this.h()},l(l){e=b(l,"DIV",{class:!0});var p=k(e);a=b(p,"A",{href:!0,target:!0,rel:!0});var c=k(a);le(r.$$.fragment,c),c.forEach(h),n=z(p),f=b(p,"DIV",{class:!0});var $=k(f);v=B($,i),$.forEach(h),t=z(p),p.forEach(h),this.h()},h(){_(a,"href",s=o[14].web.url),_(a,"target","_blank"),_(a,"rel","noreferrer"),_(f,"class","text-center text-sm uppercase font-bold"),_(e,"class","w-32")},m(l,p){V(l,e,p),d(e,a),re(r,a,null),d(e,n),d(e,f),d(f,v),d(e,t),u=!0},p(l,p){const c={};p[0]&1&&(c.speaker=l[14]),r.$set(c),(!u||p[0]&1&&s!==(s=l[14].web.url))&&_(a,"href",s),(!u||p[0]&1)&&i!==(i=l[14].name+"")&&he(v,i)},i(l){u||(w(r.$$.fragment,l),u=!0)},o(l){D(r.$$.fragment,l),u=!1},d(l){l&&h(e),se(r)}}}function yt(o){let e,a,r,s,n,f=o[0].bundle.spec.partners.filter(Ft),i=[];for(let t=0;t<f.length;t+=1)i[t]=Nt(pt(o,f,t));const v=t=>D(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),a=N("Komunity"),r=T(),s=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=b(t,"DIV",{class:!0});var u=k(e);a=B(u,"Komunity"),u.forEach(h),r=z(t),s=b(t,"DIV",{class:!0});var l=k(s);for(let p=0;p<i.length;p+=1)i[p].l(l);l.forEach(h),this.h()},h(){_(e,"class","mt-10 text-center"),_(s,"class","mt-6 flex flex-wrap gap-6 justify-center")},m(t,u){V(t,e,u),d(e,a),V(t,r,u),V(t,s,u);for(let l=0;l<i.length;l+=1)i[l].m(s,null);n=!0},p(t,u){if(u[0]&1){f=t[0].bundle.spec.partners.filter(Ft);let l;for(l=0;l<f.length;l+=1){const p=pt(t,f,l);i[l]?(i[l].p(p,u),w(i[l],1)):(i[l]=Nt(p),i[l].c(),w(i[l],1),i[l].m(s,null))}for(U(),l=f.length;l<i.length;l+=1)v(l);X()}},i(t){if(!n){for(let u=0;u<f.length;u+=1)w(i[u]);n=!0}},o(t){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)D(i[u]);n=!1},d(t){t&&h(e),t&&h(r),t&&h(s),de(i,t)}}}function pl(o){let e,a,r,s;return a=new $e({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-20 shadow-lg"}}),{c(){e=g("a"),te(a.$$.fragment),this.h()},l(n){e=b(n,"A",{href:!0,target:!0,rel:!0});var f=k(e);le(a.$$.fragment,f),f.forEach(h),this.h()},h(){_(e,"href",r=o[14].web?o[14].web.url:o[14].twitter?`https://twitter.com/${o[14].twitter}`:""),_(e,"target","_blank"),_(e,"rel","noreferrer")},m(n,f){V(n,e,f),re(a,e,null),s=!0},p(n,f){const i={};f[0]&1&&(i.speaker=n[14]),a.$set(i),(!s||f[0]&1&&r!==(r=n[14].web?n[14].web.url:n[14].twitter?`https://twitter.com/${n[14].twitter}`:""))&&_(e,"href",r)},i(n){s||(w(a.$$.fragment,n),s=!0)},o(n){D(a.$$.fragment,n),s=!1},d(n){n&&h(e),se(a)}}}function Nt(o){let e,a,r,s;return a=new el({props:{tip:o[14].name,bottom:"true",$$slots:{default:[pl]},$$scope:{ctx:o}}}),{c(){e=g("div"),te(a.$$.fragment),r=T()},l(n){e=b(n,"DIV",{});var f=k(e);le(a.$$.fragment,f),r=z(f),f.forEach(h)},m(n,f){V(n,e,f),re(a,e,null),d(e,r),s=!0},p(n,f){const i={};f[0]&1&&(i.tip=n[14].name),f[0]&1|f[1]&1&&(i.$$scope={dirty:f,ctx:n}),a.$set(i)},i(n){s||(w(a.$$.fragment,n),s=!0)},o(n){D(a.$$.fragment,n),s=!1},d(n){n&&h(e),se(a)}}}function Bt(o){let e,a,r,s,n,f=o[0].bundle.spec.partners.filter(Kt),i=[];for(let t=0;t<f.length;t+=1)i[t]=Mt(ut(o,f,t));const v=t=>D(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),a=N("Mediální partneři"),r=T(),s=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=b(t,"DIV",{class:!0});var u=k(e);a=B(u,"Mediální partneři"),u.forEach(h),r=z(t),s=b(t,"DIV",{class:!0});var l=k(s);for(let p=0;p<i.length;p+=1)i[p].l(l);l.forEach(h),this.h()},h(){_(e,"class","mt-10 text-center"),_(s,"class","mt-6 flex flex-wrap gap-4 justify-center")},m(t,u){V(t,e,u),d(e,a),V(t,r,u),V(t,s,u);for(let l=0;l<i.length;l+=1)i[l].m(s,null);n=!0},p(t,u){if(u[0]&1){f=t[0].bundle.spec.partners.filter(Kt);let l;for(l=0;l<f.length;l+=1){const p=ut(t,f,l);i[l]?(i[l].p(p,u),w(i[l],1)):(i[l]=Mt(p),i[l].c(),w(i[l],1),i[l].m(s,null))}for(U(),l=f.length;l<i.length;l+=1)v(l);X()}},i(t){if(!n){for(let u=0;u<f.length;u+=1)w(i[u]);n=!0}},o(t){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)D(i[u]);n=!1},d(t){t&&h(e),t&&h(r),t&&h(s),de(i,t)}}}function hl(o){let e,a,r,s;return a=new $e({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-16 shadow-lg"}}),{c(){e=g("a"),te(a.$$.fragment),this.h()},l(n){e=b(n,"A",{href:!0,target:!0,rel:!0});var f=k(e);le(a.$$.fragment,f),f.forEach(h),this.h()},h(){_(e,"href",r=o[14].web?o[14].web.url:o[14].twitter?`https://twitter.com/${o[14].twitter}`:""),_(e,"target","_blank"),_(e,"rel","noreferrer")},m(n,f){V(n,e,f),re(a,e,null),s=!0},p(n,f){const i={};f[0]&1&&(i.speaker=n[14]),a.$set(i),(!s||f[0]&1&&r!==(r=n[14].web?n[14].web.url:n[14].twitter?`https://twitter.com/${n[14].twitter}`:""))&&_(e,"href",r)},i(n){s||(w(a.$$.fragment,n),s=!0)},o(n){D(a.$$.fragment,n),s=!1},d(n){n&&h(e),se(a)}}}function Mt(o){let e,a,r,s;return a=new el({props:{tip:o[14].name,bottom:"true",$$slots:{default:[hl]},$$scope:{ctx:o}}}),{c(){e=g("div"),te(a.$$.fragment),r=T()},l(n){e=b(n,"DIV",{});var f=k(e);le(a.$$.fragment,f),r=z(f),f.forEach(h)},m(n,f){V(n,e,f),re(a,e,null),d(e,r),s=!0},p(n,f){const i={};f[0]&1&&(i.tip=n[14].name),f[0]&1|f[1]&1&&(i.$$scope={dirty:f,ctx:n}),a.$set(i)},i(n){s||(w(a.$$.fragment,n),s=!0)},o(n){D(a.$$.fragment,n),s=!1},d(n){n&&h(e),se(a)}}}function Pt(o){let e,a,r,s,n,f,i,v=o[0].bundle.spec.faqs,t=[];for(let l=0;l<v.length;l+=1)t[l]=Gt(ct(o,v,l));const u=l=>D(t[l],1,1,()=>{t[l]=null});return{c(){e=g("section"),a=g("div"),r=g("h2"),s=N("Často kladené dotazy (FAQ)"),n=T(),f=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=b(l,"SECTION",{class:!0});var p=k(e);a=b(p,"DIV",{class:!0});var c=k(a);r=b(c,"H2",{class:!0,id:!0});var $=k(r);s=B($,"Často kladené dotazy (FAQ)"),$.forEach(h),n=z(c),f=b(c,"DIV",{class:!0});var S=k(f);for(let m=0;m<t.length;m+=1)t[m].l(S);S.forEach(h),c.forEach(h),p.forEach(h),this.h()},h(){_(r,"class","uppercase pt-5 text-center"),_(r,"id","faq"),_(f,"class","md:columns-2 columns-1 mt-8 h-auto"),_(a,"class","text-custom-darkpurple"),_(e,"class","relative mx-auto py-10 px-6 max-w-7xl")},m(l,p){V(l,e,p),d(e,a),d(a,r),d(r,s),d(a,n),d(a,f);for(let c=0;c<t.length;c+=1)t[c].m(f,null);i=!0},p(l,p){if(p[0]&17){v=l[0].bundle.spec.faqs;let c;for(c=0;c<v.length;c+=1){const $=ct(l,v,c);t[c]?(t[c].p($,p),w(t[c],1)):(t[c]=Gt($),t[c].c(),w(t[c],1),t[c].m(f,null))}for(U(),c=v.length;c<t.length;c+=1)u(c);X()}},i(l){if(!i){for(let p=0;p<v.length;p+=1)w(t[p]);i=!0}},o(l){t=t.filter(Boolean);for(let p=0;p<t.length;p+=1)D(t[p]);i=!1},d(l){l&&h(e),de(t,l)}}}function Gt(o){let e,a,r=o[11].question+"",s,n,f,i,v;return f=new rl({props:{source:o[11].answer,renderers:o[4]}}),{c(){e=g("div"),a=g("div"),s=N(r),n=T(),te(f.$$.fragment),i=T(),this.h()},l(t){e=b(t,"DIV",{class:!0});var u=k(e);a=b(u,"DIV",{class:!0});var l=k(a);s=B(l,r),l.forEach(h),n=z(u),le(f.$$.fragment,u),i=z(u),u.forEach(h),this.h()},h(){_(a,"class","mb-4 font-bold"),_(e,"class","mb-5 break-inside-avoid-column text-custom-darkgreen bg-custom-lightgreen rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(t,u){V(t,e,u),d(e,a),d(a,s),d(e,n),re(f,e,null),d(e,i),v=!0},p(t,u){(!v||u[0]&1)&&r!==(r=t[11].question+"")&&he(s,r);const l={};u[0]&1&&(l.source=t[11].answer),f.$set(l)},i(t){v||(w(f.$$.fragment,t),v=!0)},o(t){D(f.$$.fragment,t),v=!1},d(t){t&&h(e),se(f)}}}function dl(o){let e,a,r,s,n,f,i,v,t,u,l,p,c,$,S,m,j,I,L,C,q,J,ie,fe,ce,ae,Z,ue,_e,R,F,ve,Y,Q,ge,ne,W,oe,be,He,Oe,Ve,me,K,ke,Ae,Le,Ce=o[0].bundle.spec.partners.filter(Lt).slice(0,4).length,Te,qe=o[0].bundle.spec.partners.filter(At).slice(4).length,ze,Re=o[0].bundle.spec.partners.filter(Ot).length,je,Fe=o[0].bundle.spec.partners.filter(Ht).length,Se,we,Ie;document.title=e="UTXO.23 "+(o[0].bundle?"- "+o[0].bundle.description:"");let M=o[0].bundle&&gt(o),P=Ce&&Tt(o),G=qe&&jt(o),H=Re&&yt(o),O=Fe&&Bt(o),A=o[0].bundle&&Pt(o);return{c(){a=T(),M&&M.c(),r=T(),s=g("section"),n=g("div"),f=g("div"),i=g("div"),v=g("img"),u=T(),l=g("div"),p=g("div"),c=g("img"),S=T(),m=g("div"),j=g("img"),L=T(),C=g("div"),q=g("div"),J=N("Místo"),ie=T(),fe=g("div"),ce=N("Gabriel Loci"),ae=T(),Z=g("div"),ue=N("Holečkova 106/10, 150 00 Praha 5 - Smíchov 🇨🇿"),_e=g("br"),R=g("span"),F=g("a"),ve=N("Google Maps"),Y=N(`,
            `),Q=g("a"),ge=N("Mapy.cz"),ne=T(),W=g("div"),oe=N(`Benediktinky. Kulturní památka. Česká Pošta. Poštovní muzeum. Na první
          pohled nesouvisející názvy, které jsou ale neodmyslitelnou součástí
          unikátního komplexu Gabriel Loci na pražském Smíchově doslova pár
          minut od centra. Na konci 19.století v klášteře sídlily řeholnice,
          ženské opatství řádu benediktinek beuronské kongregace. Později
          prostory spravovalo československé Ministerstvo pošt a telegrafů. Dnes
          komplex využívají hlavně natáčecí studia jako HBO, Netflix nebo i ČT.
          No a my! 💪`),be=g("br"),He=g("br"),Oe=N(`
          Zažijte mysteriózní atmosféru komplexu na 2.ročníku konference UTXO.23.
          Část after-party si užijete doslova v pitevně ze seriálu Devadesátky 👌😀`),Ve=T(),me=g("section"),K=g("div"),ke=g("div"),Ae=N("Partneři"),Le=T(),P&&P.c(),Te=T(),G&&G.c(),ze=T(),H&&H.c(),je=T(),O&&O.c(),Se=T(),A&&A.c(),we=Ee(),this.h()},l(E){tl("svelte-1y6gd31",document.head).forEach(h),a=z(E),M&&M.l(E),r=z(E),s=b(E,"SECTION",{class:!0});var Je=k(s);n=b(Je,"DIV",{class:!0});var We=k(n);f=b(We,"DIV",{class:!0});var ye=k(f);i=b(ye,"DIV",{class:!0});var Ne=k(i);v=b(Ne,"IMG",{src:!0,class:!0,alt:!0}),u=z(Ne),l=b(Ne,"DIV",{class:!0});var Be=k(l);p=b(Be,"DIV",{class:!0});var Ye=k(p);c=b(Ye,"IMG",{src:!0,class:!0,alt:!0}),Ye.forEach(h),S=z(Be),m=b(Be,"DIV",{class:!0});var xe=k(m);j=b(xe,"IMG",{src:!0,class:!0,alt:!0}),xe.forEach(h),Be.forEach(h),Ne.forEach(h),L=z(ye),C=b(ye,"DIV",{class:!0});var pe=k(C);q=b(pe,"DIV",{class:!0});var et=k(q);J=B(et,"Místo"),et.forEach(h),ie=z(pe),fe=b(pe,"DIV",{class:!0});var tt=k(fe);ce=B(tt,"Gabriel Loci"),tt.forEach(h),ae=z(pe),Z=b(pe,"DIV",{class:!0});var Me=k(Z);ue=B(Me,"Holečkova 106/10, 150 00 Praha 5 - Smíchov 🇨🇿"),_e=b(Me,"BR",{}),R=b(Me,"SPAN",{class:!0});var Pe=k(R);F=b(Pe,"A",{href:!0,class:!0,target:!0,rel:!0});var lt=k(F);ve=B(lt,"Google Maps"),lt.forEach(h),Y=B(Pe,`,
            `),Q=b(Pe,"A",{href:!0,class:!0,target:!0,rel:!0});var rt=k(Q);ge=B(rt,"Mapy.cz"),rt.forEach(h),Pe.forEach(h),Me.forEach(h),ne=z(pe),W=b(pe,"DIV",{class:!0});var De=k(W);oe=B(De,`Benediktinky. Kulturní památka. Česká Pošta. Poštovní muzeum. Na první
          pohled nesouvisející názvy, které jsou ale neodmyslitelnou součástí
          unikátního komplexu Gabriel Loci na pražském Smíchově doslova pár
          minut od centra. Na konci 19.století v klášteře sídlily řeholnice,
          ženské opatství řádu benediktinek beuronské kongregace. Později
          prostory spravovalo československé Ministerstvo pošt a telegrafů. Dnes
          komplex využívají hlavně natáčecí studia jako HBO, Netflix nebo i ČT.
          No a my! 💪`),be=b(De,"BR",{}),He=b(De,"BR",{}),Oe=B(De,`
          Zažijte mysteriózní atmosféru komplexu na 2.ročníku konference UTXO.23.
          Část after-party si užijete doslova v pitevně ze seriálu Devadesátky 👌😀`),De.forEach(h),pe.forEach(h),ye.forEach(h),We.forEach(h),Je.forEach(h),Ve=z(E),me=b(E,"SECTION",{class:!0});var st=k(me);K=b(st,"DIV",{class:!0});var x=k(K);ke=b(x,"DIV",{class:!0});var at=k(ke);Ae=B(at,"Partneři"),at.forEach(h),Le=z(x),P&&P.l(x),Te=z(x),G&&G.l(x),ze=z(x),H&&H.l(x),je=z(x),O&&O.l(x),x.forEach(h),st.forEach(h),Se=z(E),A&&A.l(E),we=Ee(),this.h()},h(){Ke(v.src,t="/photos/optimized/gabriel-loci.jpeg")||_(v,"src",t),_(v,"class","flex rounded-xl shadow-xl"),_(v,"alt","Gabriel Loci"),Ke(c.src,$="/photos/optimized/rajska-zahrada.jpeg")||_(c,"src",$),_(c,"class","rounded-lg shadow-lg"),_(c,"alt","Gabriel Loci - Rajská zahrada"),_(p,"class","w-1/2"),Ke(j.src,I="/photos/optimized/knihovna.jpeg")||_(j,"src",I),_(j,"class","rounded-lg shadow-lg"),_(j,"alt","Gabriel Loci - Knihovna"),_(m,"class","w-1/2"),_(l,"class","flex mt-3 gap-3"),_(i,"class","block flex-1"),_(q,"class","uppercase"),_(fe,"class","uppercase mt-3 text-4xl font-bold"),_(F,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),_(F,"class","underline hover:no-underline"),_(F,"target","_blank"),_(F,"rel","noreferrer"),_(Q,"href","https://mapy.cz/s/cuvetubafo"),_(Q,"class","underline hover:no-underline"),_(Q,"target","_blank"),_(Q,"rel","noreferrer"),_(R,"class","font-normal"),_(Z,"class","mt-4 font-bold"),_(W,"class","mt-4"),_(C,"class","text-white md:w-1/2 md:pt-0 pt-6"),_(f,"class","py-6 md:py-10 md:flex gap-12"),_(n,"class","relative mx-auto py-6 px-6 max-w-7xl"),_(s,"class","bg-utxo-gradient"),_(ke,"class","text-2xl uppercase font-bold text-center"),_(K,"class","text-custom-darkpurple lg:mt-10"),_(me,"class","mx-auto py-10 px-6 max-w-auto overflow-hidden")},m(E,y){V(E,a,y),M&&M.m(E,y),V(E,r,y),V(E,s,y),d(s,n),d(n,f),d(f,i),d(i,v),d(i,u),d(i,l),d(l,p),d(p,c),d(l,S),d(l,m),d(m,j),d(f,L),d(f,C),d(C,q),d(q,J),d(C,ie),d(C,fe),d(fe,ce),d(C,ae),d(C,Z),d(Z,ue),d(Z,_e),d(Z,R),d(R,F),d(F,ve),d(R,Y),d(R,Q),d(Q,ge),d(C,ne),d(C,W),d(W,oe),d(W,be),d(W,He),d(W,Oe),V(E,Ve,y),V(E,me,y),d(me,K),d(K,ke),d(ke,Ae),d(K,Le),P&&P.m(K,null),d(K,Te),G&&G.m(K,null),d(K,ze),H&&H.m(K,null),d(K,je),O&&O.m(K,null),V(E,Se,y),A&&A.m(E,y),V(E,we,y),Ie=!0},p(E,y){(!Ie||y[0]&1)&&e!==(e="UTXO.23 "+(E[0].bundle?"- "+E[0].bundle.description:""))&&(document.title=e),E[0].bundle?M?(M.p(E,y),y[0]&1&&w(M,1)):(M=gt(E),M.c(),w(M,1),M.m(r.parentNode,r)):M&&(U(),D(M,1,1,()=>{M=null}),X()),y[0]&1&&(Ce=E[0].bundle.spec.partners.filter(Lt).slice(0,4).length),Ce?P?(P.p(E,y),y[0]&1&&w(P,1)):(P=Tt(E),P.c(),w(P,1),P.m(K,Te)):P&&(U(),D(P,1,1,()=>{P=null}),X()),y[0]&1&&(qe=E[0].bundle.spec.partners.filter(At).slice(4).length),qe?G?(G.p(E,y),y[0]&1&&w(G,1)):(G=jt(E),G.c(),w(G,1),G.m(K,ze)):G&&(U(),D(G,1,1,()=>{G=null}),X()),y[0]&1&&(Re=E[0].bundle.spec.partners.filter(Ot).length),Re?H?(H.p(E,y),y[0]&1&&w(H,1)):(H=yt(E),H.c(),w(H,1),H.m(K,je)):H&&(U(),D(H,1,1,()=>{H=null}),X()),y[0]&1&&(Fe=E[0].bundle.spec.partners.filter(Ht).length),Fe?O?(O.p(E,y),y[0]&1&&w(O,1)):(O=Bt(E),O.c(),w(O,1),O.m(K,null)):O&&(U(),D(O,1,1,()=>{O=null}),X()),E[0].bundle?A?(A.p(E,y),y[0]&1&&w(A,1)):(A=Pt(E),A.c(),w(A,1),A.m(we.parentNode,we)):A&&(U(),D(A,1,1,()=>{A=null}),X())},i(E){Ie||(w(M),w(P),w(G),w(H),w(O),w(A),Ie=!0)},o(E){D(M),D(P),D(G),D(H),D(O),D(A),Ie=!1},d(E){E&&h(a),M&&M.d(E),E&&h(r),E&&h(s),E&&h(Ve),E&&h(me),P&&P.d(),G&&G.d(),H&&H.d(),O&&O.d(),E&&h(Se),A&&A.d(E),E&&h(we)}}}function Ze(o="fa-regular fa-calendar"){return`<i class="${o} inline-block align-baseline pr-1.5 sm:pr-2.5 text-custom-darkpurple/40"></i>`}const Ht=o=>o.type==="medium",Ot=o=>o.type==="community",At=o=>o.type==="sponsor",Lt=o=>o.type==="sponsor",Ct=o=>!o.lead,qt=o=>o.type==="sponsor",Rt=o=>o.type==="sponsor",Ft=o=>o.type==="community",Kt=o=>o.type==="medium";function _l(o,e,a){let r,s,n,f,i;ot(o,ll,c=>a(2,f=c)),ot(o,Qe,c=>a(3,i=c));const v={link:sl};let{data:t}=e;function u(c){return function(){Qe.update($=>($.hpTrack=c,$))}}function l(){Qe.update(c=>(c.hpTrack=null,c))}const p=()=>.5-Math.random();return o.$$set=c=>{"data"in c&&a(0,t=c.data)},o.$$.update=()=>{o.$$.dirty[0]&1&&a(7,r=t.bundle),o.$$.dirty[0]&128&&a(8,s=r?r.spec.speakers.filter(c=>!!c.lead).length:0),o.$$.dirty[0]&384&&a(1,n=r?[{name:"Hlavní přednášející ("+s+")",id:"top"},{name:"Vše",id:null}].concat(r.spec.tracks.filter(c=>c.hidden===void 0||c.hidden!==!0)):null)},[t,n,f,i,v,u,l,r,s,p]}class El extends Ut{constructor(e){super(),Xt(this,e,_l,dl,Qt,{data:0},null,[-1,-1])}}export{El as default};