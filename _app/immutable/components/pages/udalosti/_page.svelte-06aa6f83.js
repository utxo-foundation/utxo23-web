import{S as Ce,i as Re,s as qe,O as Me,k as E,l as I,m as D,h as u,n as $,b as k,P as Xe,Q as Ye,R as Fe,f as v,t as w,a as U,U as Qe,c as j,d as F,C as _e,q as L,w as J,e as ke,r as Z,x as K,E as b,y as W,H as Ge,g as Q,u as y,z as x,D as de}from"../../../chunks/index-d013028e.js";import{p as Je}from"../../../chunks/stores-b1cfe59c.js";import{g as Ke}from"../../../chunks/navigation-71d603d3.js";import{b as We,u as $e}from"../../../chunks/stores-0b419ec7.js";import{c as ye,a as xe,E as Be,b as el}from"../../../chunks/Event-9bc8aeca.js";import{E as ll}from"../../../chunks/EventTypeLabel-4d92f7a9.js";import{A as tl}from"../../../chunks/Avatar-49504f8a.js";import{S as il,L as sl}from"../../../chunks/Link-ef91cfe6.js";import{Y as fl}from"../../../chunks/YouTube-d2f91f98.js";function rl(r){let e,s;const f=r[1].default,l=Me(f,r,r[0],null);return{c(){e=E("p"),l&&l.c(),this.h()},l(i){e=I(i,"P",{class:!0});var t=D(e);l&&l.l(t),t.forEach(u),this.h()},h(){$(e,"class","mb-2")},m(i,t){k(i,e,t),l&&l.m(e,null),s=!0},p(i,[t]){l&&l.p&&(!s||t&1)&&Xe(l,f,i,i[0],s?Fe(f,i[0],t,null):Ye(i[0]),null)},i(i){s||(v(l,i),s=!0)},o(i){w(l,i),s=!1},d(i){i&&u(e),l&&l.d(i)}}}function al(r,e,s){let{$$slots:f={},$$scope:l}=e;return r.$$set=i=>{"$$scope"in i&&s(0,l=i.$$scope)},[l,f]}class nl extends Ce{constructor(e){super(),Re(this,e,al,rl,qe,{})}}function ge(r,e,s){const f=r.slice();return f[14]=e[s],f}function Ee(r,e,s){const f=r.slice();return f[17]=e[s],f}function Ie(r,e,s){const f=r.slice();return f[20]=e[s],f}function De(r){let e,s,f,l,i,t,o,n,h,z,p,V,c,_,m,H,g,Y,M=r[5].favoriteEvents.includes(r[0].id),ee,G,ne=r[0].name+"",oe,ue,le,te,ie,se,fe,re,me,he;n=new ll({props:{event:r[0],size:"big"}});let S=r[2]&&we(r),C=r[4]&&Ve(r),R=r[0].track&&Se(r),q=r[0].tags&&Pe(r),B=M&&Ae(),P=r[0].speakers&&r[0].speakers.length>0&&Ne(r),T=r[0].description&&je(r),A=r[0].video&&r[0].video.youtube&&ze(r),N=r[0].parent&&He(r),O=r[3].length&&Le(r);return{c(){e=E("div"),s=E("a"),f=E("i"),l=L(" Zpět"),i=U(),t=E("div"),o=E("div"),J(n.$$.fragment),h=U(),S&&S.c(),z=U(),C&&C.c(),p=U(),R&&R.c(),V=U(),q&&q.c(),c=U(),_=E("div"),m=E("div"),H=E("i"),Y=U(),B&&B.c(),ee=U(),G=E("h1"),oe=L(ne),ue=U(),P&&P.c(),le=U(),T&&T.c(),te=U(),A&&A.c(),ie=U(),N&&N.c(),se=U(),O&&O.c(),fe=ke(),this.h()},l(a){e=I(a,"DIV",{class:!0});var d=D(e);s=I(d,"A",{href:!0});var ae=D(s);f=I(ae,"I",{class:!0}),D(f).forEach(u),l=Z(ae," Zpět"),ae.forEach(u),d.forEach(u),i=j(a),t=I(a,"DIV",{class:!0});var X=D(t);o=I(X,"DIV",{});var pe=D(o);K(n.$$.fragment,pe),pe.forEach(u),h=j(X),S&&S.l(X),z=j(X),C&&C.l(X),p=j(X),R&&R.l(X),V=j(X),q&&q.l(X),X.forEach(u),c=j(a),_=I(a,"DIV",{class:!0});var ve=D(_);m=I(ve,"DIV",{class:!0});var ce=D(m);H=I(ce,"I",{class:!0}),D(H).forEach(u),Y=j(ce),B&&B.l(ce),ce.forEach(u),ve.forEach(u),ee=j(a),G=I(a,"H1",{class:!0});var be=D(G);oe=Z(be,ne),be.forEach(u),ue=j(a),P&&P.l(a),le=j(a),T&&T.l(a),te=j(a),A&&A.l(a),ie=j(a),N&&N.l(a),se=j(a),O&&O.l(a),fe=ke(),this.h()},h(){$(f,"class","fa-solid fa-arrow-left"),$(s,"href","javascript:history.back()"),$(e,"class","mb-6 uppercase text-gray-500"),$(t,"class","mb-6 flex flex-wrap gap-4"),$(H,"class",g="fa-star "+(r[5].favoriteEvents.includes(r[0].id)?"fa-solid":"fa-regular")),$(m,"class","cursor-pointer"),$(_,"class","float-right"),$(G,"class","text-2xl font-bold")},m(a,d){k(a,e,d),b(e,s),b(s,f),b(s,l),k(a,i,d),k(a,t,d),b(t,o),W(n,o,null),b(t,h),S&&S.m(t,null),b(t,z),C&&C.m(t,null),b(t,p),R&&R.m(t,null),b(t,V),q&&q.m(t,null),k(a,c,d),k(a,_,d),b(_,m),b(m,H),b(m,Y),B&&B.m(m,null),k(a,ee,d),k(a,G,d),b(G,oe),k(a,ue,d),P&&P.m(a,d),k(a,le,d),T&&T.m(a,d),k(a,te,d),A&&A.m(a,d),k(a,ie,d),N&&N.m(a,d),k(a,se,d),O&&O.m(a,d),k(a,fe,d),re=!0,me||(he=Ge(m,"click",r[11]),me=!0)},p(a,d){const ae={};d&1&&(ae.event=a[0]),n.$set(ae),a[2]?S?(S.p(a,d),d&4&&v(S,1)):(S=we(a),S.c(),v(S,1),S.m(t,z)):S&&(Q(),w(S,1,1,()=>{S=null}),F()),a[4]?C?C.p(a,d):(C=Ve(a),C.c(),C.m(t,p)):C&&(C.d(1),C=null),a[0].track?R?R.p(a,d):(R=Se(a),R.c(),R.m(t,V)):R&&(R.d(1),R=null),a[0].tags?q?q.p(a,d):(q=Pe(a),q.c(),q.m(t,null)):q&&(q.d(1),q=null),(!re||d&33&&g!==(g="fa-star "+(a[5].favoriteEvents.includes(a[0].id)?"fa-solid":"fa-regular")))&&$(H,"class",g),d&33&&(M=a[5].favoriteEvents.includes(a[0].id)),M?B||(B=Ae(),B.c(),B.m(m,null)):B&&(B.d(1),B=null),(!re||d&1)&&ne!==(ne=a[0].name+"")&&y(oe,ne),a[0].speakers&&a[0].speakers.length>0?P?(P.p(a,d),d&1&&v(P,1)):(P=Ne(a),P.c(),v(P,1),P.m(le.parentNode,le)):P&&(Q(),w(P,1,1,()=>{P=null}),F()),a[0].description?T?(T.p(a,d),d&1&&v(T,1)):(T=je(a),T.c(),v(T,1),T.m(te.parentNode,te)):T&&(Q(),w(T,1,1,()=>{T=null}),F()),a[0].video&&a[0].video.youtube?A?(A.p(a,d),d&1&&v(A,1)):(A=ze(a),A.c(),v(A,1),A.m(ie.parentNode,ie)):A&&(Q(),w(A,1,1,()=>{A=null}),F()),a[0].parent?N?(N.p(a,d),d&1&&v(N,1)):(N=He(a),N.c(),v(N,1),N.m(se.parentNode,se)):N&&(Q(),w(N,1,1,()=>{N=null}),F()),a[3].length?O?(O.p(a,d),d&8&&v(O,1)):(O=Le(a),O.c(),v(O,1),O.m(fe.parentNode,fe)):O&&(Q(),w(O,1,1,()=>{O=null}),F())},i(a){re||(v(n.$$.fragment,a),v(S),v(P),v(T),v(A),v(N),v(O),re=!0)},o(a){w(n.$$.fragment,a),w(S),w(P),w(T),w(A),w(N),w(O),re=!1},d(a){a&&u(e),a&&u(i),a&&u(t),x(n),S&&S.d(),C&&C.d(),R&&R.d(),q&&q.d(),a&&u(c),a&&u(_),B&&B.d(),a&&u(ee),a&&u(G),a&&u(ue),P&&P.d(a),a&&u(le),T&&T.d(a),a&&u(te),A&&A.d(a),a&&u(ie),N&&N.d(a),a&&u(se),O&&O.d(a),a&&u(fe),me=!1,he()}}}function we(r){let e,s;return e=new xe({props:{item:r[2],event:r[0],bundle:r[1]}}),{c(){J(e.$$.fragment)},l(f){K(e.$$.fragment,f)},m(f,l){W(e,f,l),s=!0},p(f,l){const i={};l&4&&(i.item=f[2]),l&1&&(i.event=f[0]),l&2&&(i.bundle=f[1]),e.$set(i)},i(f){s||(v(e.$$.fragment,f),s=!0)},o(f){w(e.$$.fragment,f),s=!1},d(f){x(e,f)}}}function Ve(r){let e,s,f;return{c(){e=E("div"),s=L(r[4]),f=L("m"),this.h()},l(l){e=I(l,"DIV",{class:!0});var i=D(e);s=Z(i,r[4]),f=Z(i,"m"),i.forEach(u),this.h()},h(){$(e,"class","text-sm my-auto")},m(l,i){k(l,e,i),b(e,s),b(e,f)},p(l,i){i&16&&y(s,l[4])},d(l){l&&u(e)}}}function Se(r){let e,s,f=r[8](r[0].track)+"",l,i;return{c(){e=E("div"),s=E("a"),l=L(f),this.h()},l(t){e=I(t,"DIV",{class:!0});var o=D(e);s=I(o,"A",{href:!0});var n=D(s);l=Z(n,f),n.forEach(u),o.forEach(u),this.h()},h(){$(s,"href",i="/program?track="+r[0].track),$(e,"class","text-md my-auto")},m(t,o){k(t,e,o),b(e,s),b(s,l)},p(t,o){o&1&&f!==(f=t[8](t[0].track)+"")&&y(l,f),o&1&&i!==(i="/program?track="+t[0].track)&&$(s,"href",i)},d(t){t&&u(e)}}}function Pe(r){let e,s=r[0].tags,f=[];for(let l=0;l<s.length;l+=1)f[l]=Te(Ie(r,s,l));return{c(){e=E("div");for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){e=I(l,"DIV",{class:!0});var i=D(e);for(let t=0;t<f.length;t+=1)f[t].l(i);i.forEach(u),this.h()},h(){$(e,"class","flex text-xs gap-1 my-auto text-blue-web/60")},m(l,i){k(l,e,i);for(let t=0;t<f.length;t+=1)f[t].m(e,null)},p(l,i){if(i&1){s=l[0].tags;let t;for(t=0;t<s.length;t+=1){const o=Ie(l,s,t);f[t]?f[t].p(o,i):(f[t]=Te(o),f[t].c(),f[t].m(e,null))}for(;t<f.length;t+=1)f[t].d(1);f.length=s.length}},d(l){l&&u(e),de(f,l)}}}function Te(r){let e,s,f,l=r[20]+"",i,t;return{c(){e=E("div"),s=E("a"),f=L("#"),i=L(l),this.h()},l(o){e=I(o,"DIV",{});var n=D(e);s=I(n,"A",{href:!0});var h=D(s);f=Z(h,"#"),i=Z(h,l),h.forEach(u),n.forEach(u),this.h()},h(){$(s,"href",t="/program?tag="+r[20])},m(o,n){k(o,e,n),b(e,s),b(s,f),b(s,i)},p(o,n){n&1&&l!==(l=o[20]+"")&&y(i,l),n&1&&t!==(t="/program?tag="+o[20])&&$(s,"href",t)},d(o){o&&u(e)}}}function Ae(r){let e;return{c(){e=L(` Tvoje oblíbená
          událost`)},l(s){e=Z(s,` Tvoje oblíbená
          událost`)},m(s,f){k(s,e,f)},d(s){s&&u(e)}}}function Ne(r){let e,s,f=r[7](r[0].speakers),l=[];for(let t=0;t<f.length;t+=1)l[t]=Ue(Ee(r,f,t));const i=t=>w(l[t],1,1,()=>{l[t]=null});return{c(){e=E("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=I(t,"DIV",{class:!0});var o=D(e);for(let n=0;n<l.length;n+=1)l[n].l(o);o.forEach(u),this.h()},h(){$(e,"class","mt-4 mb-2 flex flex-wrap gap-4")},m(t,o){k(t,e,o);for(let n=0;n<l.length;n+=1)l[n].m(e,null);s=!0},p(t,o){if(o&129){f=t[7](t[0].speakers);let n;for(n=0;n<f.length;n+=1){const h=Ee(t,f,n);l[n]?(l[n].p(h,o),v(l[n],1)):(l[n]=Ue(h),l[n].c(),v(l[n],1),l[n].m(e,null))}for(Q(),n=f.length;n<l.length;n+=1)i(n);F()}},i(t){if(!s){for(let o=0;o<f.length;o+=1)v(l[o]);s=!0}},o(t){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)w(l[o]);s=!1},d(t){t&&u(e),de(l,t)}}}function Oe(r){let e,s=r[17].nickname+"",f,l;return{c(){e=L("("),f=L(s),l=L(")")},l(i){e=Z(i,"("),f=Z(i,s),l=Z(i,")")},m(i,t){k(i,e,t),k(i,f,t),k(i,l,t)},p(i,t){t&1&&s!==(s=i[17].nickname+"")&&y(f,s)},d(i){i&&u(e),i&&u(f),i&&u(l)}}}function Ue(r){let e,s,f,l,i,t=r[17].name+"",o,n,h,z,p;s=new tl({props:{speaker:r[17],size:"semi-small"}});let V=r[17].nickname&&Oe(r);return{c(){e=E("div"),J(s.$$.fragment),f=U(),l=E("div"),i=E("a"),o=L(t),n=U(),V&&V.c(),z=U(),this.h()},l(c){e=I(c,"DIV",{class:!0});var _=D(e);K(s.$$.fragment,_),f=j(_),l=I(_,"DIV",{class:!0});var m=D(l);i=I(m,"A",{href:!0,class:!0});var H=D(i);o=Z(H,t),n=j(H),V&&V.l(H),H.forEach(u),m.forEach(u),z=j(_),_.forEach(u),this.h()},h(){$(i,"href",h="/lide?id="+r[17].id),$(i,"class","text-xl"),$(l,"class","m-auto"),$(e,"class","flex gap-2")},m(c,_){k(c,e,_),W(s,e,null),b(e,f),b(e,l),b(l,i),b(i,o),b(i,n),V&&V.m(i,null),b(e,z),p=!0},p(c,_){const m={};_&1&&(m.speaker=c[17]),s.$set(m),(!p||_&1)&&t!==(t=c[17].name+"")&&y(o,t),c[17].nickname?V?V.p(c,_):(V=Oe(c),V.c(),V.m(i,null)):V&&(V.d(1),V=null),(!p||_&1&&h!==(h="/lide?id="+c[17].id))&&$(i,"href",h)},i(c){p||(v(s.$$.fragment,c),p=!0)},o(c){w(s.$$.fragment,c),p=!1},d(c){c&&u(e),x(s),V&&V.d()}}}function je(r){let e,s,f;return s=new il({props:{source:r[0].description,renderers:r[6]}}),{c(){e=E("div"),J(s.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0});var i=D(e);K(s.$$.fragment,i),i.forEach(u),this.h()},h(){$(e,"class","mt-6 mb-6 utxo-markdown")},m(l,i){k(l,e,i),W(s,e,null),f=!0},p(l,i){const t={};i&1&&(t.source=l[0].description),s.$set(t)},i(l){f||(v(s.$$.fragment,l),f=!0)},o(l){w(s.$$.fragment,l),f=!1},d(l){l&&u(e),x(s)}}}function ze(r){let e,s,f,l,i,t;return i=new fl({props:{videoId:r[0].video.youtube,id:"player-"+r[0].id}}),{c(){e=E("div"),s=E("div"),f=L("Záznam"),l=U(),J(i.$$.fragment),this.h()},l(o){e=I(o,"DIV",{class:!0});var n=D(e);s=I(n,"DIV",{class:!0});var h=D(s);f=Z(h,"Záznam"),h.forEach(u),l=j(n),K(i.$$.fragment,n),n.forEach(u),this.h()},h(){$(s,"class","mb-4 text-xl font-semibold"),$(e,"class","mb-10 mt-10")},m(o,n){k(o,e,n),b(e,s),b(s,f),b(e,l),W(i,e,null),t=!0},p(o,n){const h={};n&1&&(h.videoId=o[0].video.youtube),n&1&&(h.id="player-"+o[0].id),i.$set(h)},i(o){t||(v(i.$$.fragment,o),t=!0)},o(o){w(i.$$.fragment,o),t=!1},d(o){o&&u(e),x(i)}}}function He(r){let e,s,f,l,i,t;return i=new Be({props:{event:r[1].spec.events.find(r[12])}}),{c(){e=E("div"),s=E("h2"),f=L("Součást události:"),l=U(),J(i.$$.fragment),this.h()},l(o){e=I(o,"DIV",{class:!0});var n=D(e);s=I(n,"H2",{class:!0});var h=D(s);f=Z(h,"Součást události:"),h.forEach(u),l=j(n),K(i.$$.fragment,n),n.forEach(u),this.h()},h(){$(s,"class","text uppercase mb-4 font-semibold"),$(e,"class","mt-6")},m(o,n){k(o,e,n),b(e,s),b(s,f),b(e,l),W(i,e,null),t=!0},p(o,n){const h={};n&3&&(h.event=o[1].spec.events.find(o[12])),i.$set(h)},i(o){t||(v(i.$$.fragment,o),t=!0)},o(o){w(i.$$.fragment,o),t=!1},d(o){o&&u(e),x(i)}}}function Le(r){let e,s,f,l=r[3].length+"",i,t,o,n,h,z=r[3],p=[];for(let c=0;c<z.length;c+=1)p[c]=Ze(ge(r,z,c));const V=c=>w(p[c],1,1,()=>{p[c]=null});return{c(){e=E("div"),s=E("h2"),f=L("Obsahuje události ("),i=L(l),t=L(")"),o=U(),n=E("div");for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){e=I(c,"DIV",{class:!0});var _=D(e);s=I(_,"H2",{class:!0});var m=D(s);f=Z(m,"Obsahuje události ("),i=Z(m,l),t=Z(m,")"),m.forEach(u),_.forEach(u),o=j(c),n=I(c,"DIV",{});var H=D(n);for(let g=0;g<p.length;g+=1)p[g].l(H);H.forEach(u),this.h()},h(){$(s,"class","text uppercase mb-4"),$(e,"class","mt-6")},m(c,_){k(c,e,_),b(e,s),b(s,f),b(s,i),b(s,t),k(c,o,_),k(c,n,_);for(let m=0;m<p.length;m+=1)p[m].m(n,null);h=!0},p(c,_){if((!h||_&8)&&l!==(l=c[3].length+"")&&y(i,l),_&8){z=c[3];let m;for(m=0;m<z.length;m+=1){const H=ge(c,z,m);p[m]?(p[m].p(H,_),v(p[m],1)):(p[m]=Ze(H),p[m].c(),v(p[m],1),p[m].m(n,null))}for(Q(),m=z.length;m<p.length;m+=1)V(m);F()}},i(c){if(!h){for(let _=0;_<z.length;_+=1)v(p[_]);h=!0}},o(c){p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)w(p[_]);h=!1},d(c){c&&u(e),c&&u(o),c&&u(n),de(p,c)}}}function Ze(r){let e,s;return e=new Be({props:{event:r[14]}}),{c(){J(e.$$.fragment)},l(f){K(e.$$.fragment,f)},m(f,l){W(e,f,l),s=!0},p(f,l){const i={};l&8&&(i.event=f[14]),e.$set(i)},i(f){s||(v(e.$$.fragment,f),s=!0)},o(f){w(e.$$.fragment,f),s=!1},d(f){x(e,f)}}}function ol(r){let e,s,f,l;document.title=e=(r[0]?r[0].name:"")+" | Události | "+(r[1]?r[1].name:"UTXO.22");let i=r[1]&&r[0]&&De(r);return{c(){s=U(),f=E("section"),i&&i.c(),this.h()},l(t){Qe("svelte-v4msem",document.head).forEach(u),s=j(t),f=I(t,"SECTION",{class:!0});var n=D(f);i&&i.l(n),n.forEach(u),this.h()},h(){$(f,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(t,o){k(t,s,o),k(t,f,o),i&&i.m(f,null),l=!0},p(t,[o]){(!l||o&3)&&e!==(e=(t[0]?t[0].name:"")+" | Události | "+(t[1]?t[1].name:"UTXO.22"))&&(document.title=e),t[1]&&t[0]?i?(i.p(t,o),o&3&&v(i,1)):(i=De(t),i.c(),v(i,1),i.m(f,null)):i&&(Q(),w(i,1,1,()=>{i=null}),F())},i(t){l||(v(i),l=!0)},o(t){w(i),l=!1},d(t){t&&u(s),t&&u(f),i&&i.d()}}}function ul(r,e,s){let f,l,i,t,o,n,h,z;_e(r,We,g=>s(1,n=g)),_e(r,Je,g=>s(10,h=g)),_e(r,$e,g=>s(5,z=g));const p={link:sl,paragraph:nl};function V(g){const M=new URLSearchParams(g).get("id");return n.spec.events.find(ee=>ee.id===M)||Ke("/"),M}function c(g){if(g)return g.map(Y=>n.spec.speakers.find(M=>M.id===Y))}function _(g){const Y=n.spec.tracks.find(M=>M.id===g);return Y.shortname||Y.name}const m=()=>el(l.id,$e),H=g=>g.id===l.parent;return r.$$.update=()=>{r.$$.dirty&1024&&s(9,f=V(h.url.search)),r.$$.dirty&514&&s(0,l=n?n.spec.events.find(g=>g.id===f):null),r.$$.dirty&3&&s(4,i=l?ye(l,n):null),r.$$.dirty&3&&s(3,t=l?n.spec.events.filter(g=>g.parent===l.id):[]),r.$$.dirty&514&&s(2,o=n?n.spec.schedule.find(g=>g.event===f):null)},[l,n,o,t,i,z,p,c,_,f,h,m,H]}class $l extends Ce{constructor(e){super(),Re(this,e,ul,ol,qe,{})}}export{$l as default};
