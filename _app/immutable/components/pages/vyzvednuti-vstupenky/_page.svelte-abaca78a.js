import{S as Ge,i as Xe,s as Ze,a as N,k as c,q as j,V as Re,h as n,c as P,l as f,m,r as O,n as o,b as C,E as a,t as $,d as Ee,f as Z,C as Qe,o as We,g as Ie,B as ne,u as he,w as Ye,x as xe,y as $e,z as et,a9 as x,F as ie,H as tt,G as lt,e as Ke}from"../../../chunks/index-80404206.js";import{u as st}from"../../../chunks/stores-fe543342.js";import{g as rt}from"../../../chunks/navigation-4e8ea102.js";import{p as at}from"../../../chunks/stores-64e8bb94.js";import{d as ae}from"../../../chunks/index-08174bcb.js";import{a as qe}from"../../../chunks/api-fa5beb1e.js";import{A as it}from"../../../chunks/Avatar-e4610699.js";var nt=function(i,e){e=e||{},e.listUnicodeChar=e.hasOwnProperty("listUnicodeChar")?e.listUnicodeChar:!1,e.stripListLeaders=e.hasOwnProperty("stripListLeaders")?e.stripListLeaders:!0,e.gfm=e.hasOwnProperty("gfm")?e.gfm:!0,e.useImgAltText=e.hasOwnProperty("useImgAltText")?e.useImgAltText:!0;var t=i||"";t=t.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(e.listUnicodeChar?t=t.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):t=t.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(t=t.replace(/\n={2,}/g,`
`).replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),t=t.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,`

`)}catch(s){return console.error(s),i}return t};function ot(i){let e,t;return{c(){e=c("div"),t=j("Načítám ...")},l(s){e=f(s,"DIV",{});var u=m(e);t=O(u,"Načítám ..."),u.forEach(n)},m(s,u){C(s,e,u),a(e,t)},p:ne,i:ne,o:ne,d(s){s&&n(e)}}}function ut(i){let e,t,s,u,p,h,v,r=i[1].code+"",l,d,k,I,S,E,w,z,A=(i[5]?i[5].title:"")+"",U,J,b,_,y=i[6]&&Fe(i);function G(V,D){return V[1].claimed?ct:dt}let R=G(i),L=R(i);return{c(){e=c("div"),t=c("div"),s=c("div"),u=c("div"),p=j("Kód vyzvednutí"),h=N(),v=c("div"),l=j(r),d=N(),k=c("div"),I=c("div"),S=j("Typ vstupenky"),E=N(),w=c("div"),z=c("span"),U=j(A),J=N(),y&&y.c(),b=N(),L.c(),this.h()},l(V){e=f(V,"DIV",{class:!0});var D=m(e);t=f(D,"DIV",{class:!0});var q=m(t);s=f(q,"DIV",{});var Q=m(s);u=f(Q,"DIV",{class:!0});var F=m(u);p=O(F,"Kód vyzvednutí"),F.forEach(n),h=P(Q),v=f(Q,"DIV",{class:!0});var X=m(v);l=O(X,r),X.forEach(n),Q.forEach(n),d=P(q),k=f(q,"DIV",{class:!0});var W=m(k);I=f(W,"DIV",{class:!0});var ee=m(I);S=O(ee,"Typ vstupenky"),ee.forEach(n),E=P(W),w=f(W,"DIV",{class:!0});var M=m(w);z=f(M,"SPAN",{class:!0});var H=m(z);U=O(H,A),H.forEach(n),J=P(M),y&&y.l(M),M.forEach(n),W.forEach(n),b=P(q),L.l(q),q.forEach(n),D.forEach(n),this.h()},h(){o(u,"class","uppercase text-sm font-bold"),o(v,"class","mt-2 font-mono"),o(I,"class","uppercase text-sm font-bold"),o(z,"class",""),o(w,"class","mt-2"),o(k,"class","mt-6"),o(t,"class","p-2"),o(e,"class","p-3 bg-blue-web-light rounded-md mt-6 text-blue-web shadow-md")},m(V,D){C(V,e,D),a(e,t),a(t,s),a(s,u),a(u,p),a(s,h),a(s,v),a(v,l),a(t,d),a(t,k),a(k,I),a(I,S),a(k,E),a(k,w),a(w,z),a(z,U),a(w,J),y&&y.m(w,null),a(t,b),L.m(t,null),_=!0},p(V,D){(!_||D&2)&&r!==(r=V[1].code+"")&&he(l,r),(!_||D&32)&&A!==(A=(V[5]?V[5].title:"")+"")&&he(U,A),V[6]?y?(y.p(V,D),D&64&&Z(y,1)):(y=Fe(V),y.c(),Z(y,1),y.m(w,null)):y&&(Ie(),$(y,1,1,()=>{y=null}),Ee()),R===(R=G(V))&&L?L.p(V,D):(L.d(1),L=R(V),L&&(L.c(),L.m(t,null)))},i(V){_||(Z(y),_=!0)},o(V){$(y),_=!1},d(V){V&&n(e),y&&y.d(),L.d()}}}function Fe(i){let e,t,s=i[6].name+"",u,p,h,v,r=i[6].photos&&Me(i);return{c(){e=j("("),r&&r.c(),t=c("a"),u=j(s),h=j(")"),this.h()},l(l){e=O(l,"("),r&&r.l(l),t=f(l,"A",{href:!0});var d=m(t);u=O(d,s),d.forEach(n),h=O(l,")"),this.h()},h(){o(t,"href",p="/lide?id="+i[6].id)},m(l,d){C(l,e,d),r&&r.m(l,d),C(l,t,d),a(t,u),C(l,h,d),v=!0},p(l,d){l[6].photos?r?(r.p(l,d),d&64&&Z(r,1)):(r=Me(l),r.c(),Z(r,1),r.m(t.parentNode,t)):r&&(Ie(),$(r,1,1,()=>{r=null}),Ee()),(!v||d&64)&&s!==(s=l[6].name+"")&&he(u,s),(!v||d&64&&p!==(p="/lide?id="+l[6].id))&&o(t,"href",p)},i(l){v||(Z(r),v=!0)},o(l){$(r),v=!1},d(l){l&&n(e),r&&r.d(l),l&&n(t),l&&n(h)}}}function Me(i){let e,t;return e=new it({props:{speaker:i[6],size:"extra-small",inline:"true",col:i[5].col}}),{c(){Ye(e.$$.fragment)},l(s){xe(e.$$.fragment,s)},m(s,u){$e(e,s,u),t=!0},p(s,u){const p={};u&64&&(p.speaker=s[6]),u&32&&(p.col=s[5].col),e.$set(p)},i(s){t||(Z(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){et(e,s)}}}function dt(i){let e,t,s,u,p,h,v,r,l,d,k,I,S,E,w,z,A,U,J,b,_,y,G,R,L,V,D,q,Q,F,X,W,ee,M,H,oe,_e,Y,te,be,ke,le,K,ue,ye,se,ge,we;function Ve(g,T){return g[3]?ft:pt}let de=Ve(i),B=de(i);return{c(){e=c("div"),t=c("div"),s=j("Email"),u=N(),p=c("div"),h=j("Kontaktní email, na který budou zaslány vstupenky."),v=N(),r=c("div"),l=c("input"),d=N(),k=c("div"),I=c("div"),S=j("Vstupenka"),E=N(),w=c("div"),z=j(`Informace, které budou vytištěné na Vaší konferenční jmenovku.
                Tyto údaje jsou nepovinné a bude možné je změnit později.`),A=N(),U=c("div"),J=c("div"),b=c("div"),_=c("div"),y=c("div"),G=c("div"),R=j("Jméno (Přezdívka)"),L=N(),V=c("div"),D=c("input"),Q=N(),F=c("div"),X=c("div"),W=j("Organizace (Firma)"),ee=N(),M=c("div"),H=c("input"),_e=N(),Y=c("div"),te=c("div"),be=j("Twitter účet"),ke=N(),le=c("div"),K=c("input"),ye=N(),se=c("div"),B.c(),this.h()},l(g){e=f(g,"DIV",{class:!0});var T=m(e);t=f(T,"DIV",{class:!0});var De=m(t);s=O(De,"Email"),De.forEach(n),u=P(T),p=f(T,"DIV",{class:!0});var Te=m(p);h=O(Te,"Kontaktní email, na který budou zaslány vstupenky."),Te.forEach(n),v=P(T),r=f(T,"DIV",{class:!0});var ze=m(r);l=f(ze,"INPUT",{type:!0,class:!0}),ze.forEach(n),T.forEach(n),d=P(g),k=f(g,"DIV",{class:!0});var ce=m(k);I=f(ce,"DIV",{class:!0});var Ne=m(I);S=O(Ne,"Vstupenka"),Ne.forEach(n),E=P(ce),w=f(ce,"DIV",{class:!0});var Pe=m(w);z=O(Pe,`Informace, které budou vytištěné na Vaší konferenční jmenovku.
                Tyto údaje jsou nepovinné a bude možné je změnit později.`),Pe.forEach(n),ce.forEach(n),A=P(g),U=f(g,"DIV",{class:!0});var fe=m(U);J=f(fe,"DIV",{class:!0});var je=m(J);b=f(je,"DIV",{class:!0});var Oe=m(b);_=f(Oe,"DIV",{class:!0});var re=m(_);y=f(re,"DIV",{class:!0});var pe=m(y);G=f(pe,"DIV",{class:!0});var Ue=m(G);R=O(Ue,"Jméno (Přezdívka)"),Ue.forEach(n),L=P(pe),V=f(pe,"DIV",{class:!0});var Ce=m(V);D=f(Ce,"INPUT",{type:!0,maxlength:!0,class:!0,placeholder:!0}),Ce.forEach(n),pe.forEach(n),Q=P(re),F=f(re,"DIV",{class:!0});var ve=m(F);X=f(ve,"DIV",{class:!0});var Se=m(X);W=O(Se,"Organizace (Firma)"),Se.forEach(n),ee=P(ve),M=f(ve,"DIV",{class:!0});var Ae=m(M);H=f(Ae,"INPUT",{type:!0,maxlength:!0,class:!0,placeholder:!0}),Ae.forEach(n),ve.forEach(n),_e=P(re),Y=f(re,"DIV",{class:!0});var me=m(Y);te=f(me,"DIV",{class:!0});var Le=m(te);be=O(Le,"Twitter účet"),Le.forEach(n),ke=P(me),le=f(me,"DIV",{class:!0});var He=m(le);K=f(He,"INPUT",{type:!0,maxlength:!0,class:!0,placeholder:!0}),He.forEach(n),me.forEach(n),re.forEach(n),Oe.forEach(n),je.forEach(n),ye=P(fe),se=f(fe,"DIV",{});var Je=m(se);B.l(Je),Je.forEach(n),fe.forEach(n),this.h()},h(){o(t,"class","uppercase text-sm font-bold"),o(p,"class","mt-2 text-sm"),o(l,"type","text"),o(l,"class","border border-blue-web rounded-md p-2 w-full lg:w-1/2 text-blue-web"),o(r,"class","mt-2"),o(e,"class","mt-6"),o(I,"class","uppercase text-sm font-bold"),o(w,"class","mt-2 text-sm"),o(k,"class","mt-6"),o(G,"class","uppercase text-sm"),o(D,"type","text"),o(D,"maxlength","25"),o(D,"class","border border-blue-web rounded-md p-2 w-full text-blue-web"),o(D,"placeholder",q=i[1].type!=="speaker"?ae.name.findName():""),o(V,"class","mt-2"),o(y,"class","flex-1"),o(X,"class","uppercase text-sm"),o(H,"type","text"),o(H,"maxlength","25"),o(H,"class","border border-blue-web rounded-md p-2 w-full text-blue-web"),o(H,"placeholder",oe=i[1].type!=="speaker"?ae.company.companyName():""),o(M,"class","mt-2"),o(F,"class","flex-1"),o(te,"class","uppercase text-sm"),o(K,"type","text"),o(K,"maxlength","25"),o(K,"class","border border-blue-web rounded-md p-2 w-full text-blue-web"),o(K,"placeholder",ue=i[1].type!=="speaker"?ae.internet.userName():""),o(le,"class","mt-2"),o(Y,"class",""),o(_,"class","md:flex gap-2"),o(b,"class",""),o(J,"class","p-4 bg-utxo-gradient text-white rounded-md mb-6 shadow-md"),o(U,"class","mt-2")},m(g,T){C(g,e,T),a(e,t),a(t,s),a(e,u),a(e,p),a(p,h),a(e,v),a(e,r),a(r,l),x(l,i[2].email),C(g,d,T),C(g,k,T),a(k,I),a(I,S),a(k,E),a(k,w),a(w,z),C(g,A,T),C(g,U,T),a(U,J),a(J,b),a(b,_),a(_,y),a(y,G),a(G,R),a(y,L),a(y,V),a(V,D),x(D,i[2].name),a(_,Q),a(_,F),a(F,X),a(X,W),a(F,ee),a(F,M),a(M,H),x(H,i[2].org),a(_,_e),a(_,Y),a(Y,te),a(te,be),a(Y,ke),a(Y,le),a(le,K),x(K,i[2].twitter),a(U,ye),a(U,se),B.m(se,null),ge||(we=[ie(l,"input",i[8]),ie(D,"input",i[9]),ie(H,"input",i[10]),ie(K,"input",i[11])],ge=!0)},p(g,T){T&4&&l.value!==g[2].email&&x(l,g[2].email),T&2&&q!==(q=g[1].type!=="speaker"?ae.name.findName():"")&&o(D,"placeholder",q),T&4&&D.value!==g[2].name&&x(D,g[2].name),T&2&&oe!==(oe=g[1].type!=="speaker"?ae.company.companyName():"")&&o(H,"placeholder",oe),T&4&&H.value!==g[2].org&&x(H,g[2].org),T&2&&ue!==(ue=g[1].type!=="speaker"?ae.internet.userName():"")&&o(K,"placeholder",ue),T&4&&K.value!==g[2].twitter&&x(K,g[2].twitter),de===(de=Ve(g))&&B?B.p(g,T):(B.d(1),B=de(g),B&&(B.c(),B.m(se,null)))},d(g){g&&n(e),g&&n(d),g&&n(k),g&&n(A),g&&n(U),B.d(),ge=!1,tt(we)}}}function ct(i){let e,t,s;return{c(){e=c("div"),t=c("div"),s=j("Již vyzvednuto!"),this.h()},l(u){e=f(u,"DIV",{class:!0});var p=m(e);t=f(p,"DIV",{class:!0});var h=m(t);s=O(h,"Již vyzvednuto!"),h.forEach(n),p.forEach(n),this.h()},h(){o(t,"class","text-lg font-bold"),o(e,"class","mt-6")},m(u,p){C(u,e,p),a(e,t),a(t,s)},p:ne,d(u){u&&n(e)}}}function ft(i){let e,t,s,u,p,h,v;return{c(){e=c("div"),t=c("div"),s=c("img"),p=N(),h=c("div"),v=j("Odesílám žádost .."),this.h()},l(r){e=f(r,"DIV",{class:!0});var l=m(e);t=f(l,"DIV",{class:!0});var d=m(t);s=f(d,"IMG",{src:!0,class:!0}),d.forEach(n),p=P(l),h=f(l,"DIV",{class:!0});var k=m(h);v=O(k,"Odesílám žádost .."),k.forEach(n),l.forEach(n),this.h()},h(){lt(s.src,u="/img/Spin-1s-200px.gif")||o(s,"src",u),o(s,"class","w-10"),o(t,"class",""),o(h,"class","my-auto text-red-600 font-bold"),o(e,"class","flex gap-3")},m(r,l){C(r,e,l),a(e,t),a(t,s),a(e,p),a(e,h),a(h,v)},p:ne,d(r){r&&n(e)}}}function pt(i){let e,t,s,u,p,h,v,r,l=i[4]&&Be(i);return{c(){e=c("div"),t=c("button"),s=c("div"),u=j("Získat vstupenku"),p=N(),l&&l.c(),h=Ke(),this.h()},l(d){e=f(d,"DIV",{});var k=m(e);t=f(k,"BUTTON",{class:!0});var I=m(t);s=f(I,"DIV",{class:!0});var S=m(s);u=O(S,"Získat vstupenku"),S.forEach(n),I.forEach(n),k.forEach(n),p=P(d),l&&l.l(d),h=Ke(),this.h()},h(){o(s,"class","py-2 px-4"),o(t,"class","hover:bg-utxo-gradient bg-[#E16A61] text-white font-semibold rounded-full shadow-md"),t.disabled=i[3]},m(d,k){C(d,e,k),a(e,t),a(t,s),a(s,u),C(d,p,k),l&&l.m(d,k),C(d,h,k),v||(r=ie(t,"click",i[7]),v=!0)},p(d,k){k&8&&(t.disabled=d[3]),d[4]?l?l.p(d,k):(l=Be(d),l.c(),l.m(h.parentNode,h)):l&&(l.d(1),l=null)},d(d){d&&n(e),d&&n(p),l&&l.d(d),d&&n(h),v=!1,r()}}}function Be(i){let e,t=i[4].title+"",s;return{c(){e=c("div"),s=j(t),this.h()},l(u){e=f(u,"DIV",{class:!0});var p=m(e);s=O(p,t),p.forEach(n),this.h()},h(){o(e,"class","mt-4 text-red-500")},m(u,p){C(u,e,p),a(e,s)},p(u,p){p&16&&t!==(t=u[4].title+"")&&he(s,t)},d(u){u&&n(e)}}}function vt(i){let e,t,s,u,p,h,v,r,l,d;document.title=e="Vyzvednutí vstupenky | "+(i[0].bundle?i[0].bundle.name:"UTXO.22");const k=[ut,ot],I=[];function S(E,w){return E[1]&&E[0].bundle?0:1}return r=S(i),l=I[r]=k[r](i),{c(){t=N(),s=c("section"),u=c("h1"),p=j("Vyzvednutí vstupenky"),h=N(),v=c("div"),l.c(),this.h()},l(E){Re("svelte-ceaaeo",document.head).forEach(n),t=P(E),s=f(E,"SECTION",{class:!0});var z=m(s);u=f(z,"H1",{class:!0});var A=m(u);p=O(A,"Vyzvednutí vstupenky"),A.forEach(n),h=P(z),v=f(z,"DIV",{class:!0});var U=m(v);l.l(U),U.forEach(n),z.forEach(n),this.h()},h(){o(u,"class","uppercase text-2xl font-bold"),o(v,"class","mt-6 mb-10"),o(s,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(E,w){C(E,t,w),C(E,s,w),a(s,u),a(u,p),a(s,h),a(s,v),I[r].m(v,null),d=!0},p(E,[w]){(!d||w&1)&&e!==(e="Vyzvednutí vstupenky | "+(E[0].bundle?E[0].bundle.name:"UTXO.22"))&&(document.title=e);let z=r;r=S(E),r===z?I[r].p(E,w):(Ie(),$(I[z],1,1,()=>{I[z]=null}),Ee(),l=I[r],l?l.p(E,w):(l=I[r]=k[r](E),l.c()),Z(l,1),l.m(v,null))},i(E){d||(Z(l),d=!0)},o(E){$(l),d=!1},d(E){E&&n(t),E&&n(s),I[r].d()}}}function mt(i){if(typeof i=="string")return{title:i};const e={title:i.title};if(i.formErrors&&i.formErrors.length>0){let t=[];i.formErrors.find(s=>s.instancePath==="/email")&&t.push("Neplatný email"),i.formErrors.find(s=>s.instancePath.match(/\/twitter/))&&t.push("Neplatný Twitter účet."),e.title="Nesprávně vyplněný formulář: "+(t.length>0?t.join(","):"neznámá chyba"),e.debug=i.formErrors}return e.title||(e.title="Neznámá chyba, zkuste to prosím později."),e}function ht(i,e,t){let s,u,p;Qe(i,at,b=>t(12,p=b));let{data:h}=e,v=null,r={email:"",name:"",org:"",twitter:""},l=!1,d=null;function k(b){return b.type==="speaker"?h.bundle.spec.speakers.find(_=>_.id===b.id):b.type==="partner"?h.bundle.spec.partners.find(_=>_.id===b.id):b.type==="team"?h.bundle.spec.team.persons[b.id]:null}async function I(b){return await qe.apiCall("claimInfo",{method:"post"},{code:b})}We(async()=>{const b=new URLSearchParams(p.url.search);if(t(1,v=await I(b.get("kod"))),v||rt("/"),h.bundle&&v.type==="speaker"&&v.link&&v.link.type==="speaker"){const _=h.bundle.spec.speakers.find(y=>y.id===v.link.id);_&&(t(2,r.name=_.name||"",r),t(2,r.org=_.orgs?nt(_.orgs).substring(0,25):"",r),t(2,r.twitter=_.twitter?"@"+_.twitter:"",r))}});const S={speaker:{title:"Přednášející",hostTitle:"Host přednášejícího",col:"speakers"},organizator:{title:"Organizátor",hostTitle:"Host organizátora",col:"speakers"},partner:{title:"Partner",hostTitle:"Host partnera",col:"partners"},host:{title:"Host"},team:{title:"Team",hostTitle:"Host organizátora"}};function E(b){if(!b)return null;const _={title:null,col:null};if(b.type==="host"){const y=S[b.link.type];_.title=y.hostTitle,_.col=y.col}else{const y=S[b.type];_.title=y.title,_.col=y.col}return _}async function w(){t(3,l=!0);let b;try{b=await qe.apiCall("claim",{method:"post"},{code:v.code,form:r})}catch(_){console.error(_)}if(b.error)return t(4,d=mt(b.error)),t(3,l=!1),null;if(!b.ok||!b.ticket)return t(4,d={title:"Neznámá chyba"}),t(3,l=!1),null;st.update(_=>(_.tickets||(_.tickets=[]),_.tickets.push([b.ticket.id,b.ticket.secret].join(":")),_)),window.location.replace("/vstupenky")}function z(){r.email=this.value,t(2,r)}function A(){r.name=this.value,t(2,r)}function U(){r.org=this.value,t(2,r)}function J(){r.twitter=this.value,t(2,r)}return i.$$set=b=>{"data"in b&&t(0,h=b.data)},i.$$.update=()=>{i.$$.dirty&3&&t(6,s=h.bundle&&v?k(v.link):null),i.$$.dirty&2&&t(5,u=E(v))},[h,v,r,l,d,u,s,w,z,A,U,J]}class wt extends Ge{constructor(e){super(),Xe(this,e,ht,vt,Ze,{data:0})}}export{wt as default};
