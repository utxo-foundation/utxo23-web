import{S as ie,i as ue,s as le,k as X,l as j,m as $,h as x,n as Y,b as se,E as fe,B as ee,o as ce,a2 as de,ac as ye}from"./index-d013028e.js";import{a as ve}from"./_commonjsHelpers-87174ba5.js";var O={},ge={get exports(){return O},set exports(t){O=t}},re;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/re=function(){var t={},e={};return t.on=function(r,o){var f={name:r,handler:o};return e[r]=e[r]||[],e[r].unshift(f),f},t.off=function(r){var o=e[r.name].indexOf(r);o!==-1&&e[r.name].splice(o,1)},t.trigger=function(r,o){var f=e[r],l;if(f)for(l=f.length;l--;)f[l].handler(o)},t};var he=re,L={},me={get exports(){return L},set exports(t){L=t}},pe=function(e,r,o){var f=document.head||document.getElementsByTagName("head")[0],l=document.createElement("script");typeof r=="function"&&(o=r,r={}),r=r||{},o=o||function(){},l.type=r.type||"text/javascript",l.charset=r.charset||"utf8",l.async="async"in r?!!r.async:!0,l.src=e,r.attrs&&be(l,r.attrs),r.text&&(l.text=""+r.text);var g="onload"in l?te:Ee;g(l,o),l.onload||te(l,o),f.appendChild(l)};function be(t,e){for(var r in e)t.setAttribute(r,e[r])}function te(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function Ee(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=pe,o=f(r);function f(l){return l&&l.__esModule?l:{default:l}}e.default=function(l){var g=new Promise(function(h){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){h(window.YT);return}else{var s=window.location.protocol==="http:"?"http:":"https:";(0,o.default)(s+"//www.youtube.com/iframe_api",function(a){a&&l.trigger("error",a)})}var u=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){u&&u(),h(window.YT)}});return g},t.exports=e.default})(me,L);var U={},we={get exports(){return U},set exports(t){U=t}},F={},Pe={get exports(){return F},set exports(t){F=t}},B={},Se={get exports(){return B},set exports(t){B=t}},T=1e3,N=T*60,R=N*60,M=R*24,_e=M*365.25,Ce=function(t,e){e=e||{};var r=typeof t;if(r==="string"&&t.length>0)return Ae(t);if(r==="number"&&isNaN(t)===!1)return e.long?Ie(t):De(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function Ae(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),o=(e[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return r*_e;case"days":case"day":case"d":return r*M;case"hours":case"hour":case"hrs":case"hr":case"h":return r*R;case"minutes":case"minute":case"mins":case"min":case"m":return r*N;case"seconds":case"second":case"secs":case"sec":case"s":return r*T;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function De(t){return t>=M?Math.round(t/M)+"d":t>=R?Math.round(t/R)+"h":t>=N?Math.round(t/N)+"m":t>=T?Math.round(t/T)+"s":t+"ms"}function Ie(t){return k(t,M,"day")||k(t,R,"hour")||k(t,N,"minute")||k(t,T,"second")||t+" ms"}function k(t,e,r){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}(function(t,e){e=t.exports=f.debug=f.default=f,e.coerce=s,e.disable=g,e.enable=l,e.enabled=h,e.humanize=Ce,e.names=[],e.skips=[],e.formatters={};var r;function o(u){var a=0,n;for(n in u)a=(a<<5)-a+u.charCodeAt(n),a|=0;return e.colors[Math.abs(a)%e.colors.length]}function f(u){function a(){if(a.enabled){var n=a,d=+new Date,y=d-(r||d);n.diff=y,n.prev=r,n.curr=d,r=d;for(var c=new Array(arguments.length),m=0;m<c.length;m++)c[m]=arguments[m];c[0]=e.coerce(c[0]),typeof c[0]!="string"&&c.unshift("%O");var v=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,function(i,E){if(i==="%%")return i;v++;var b=e.formatters[E];if(typeof b=="function"){var A=c[v];i=b.call(n,A),c.splice(v,1),v--}return i}),e.formatArgs.call(n,c);var p=a.log||e.log||console.log.bind(console);p.apply(n,c)}}return a.namespace=u,a.enabled=e.enabled(u),a.useColors=e.useColors(),a.color=o(u),typeof e.init=="function"&&e.init(a),a}function l(u){e.save(u),e.names=[],e.skips=[];for(var a=(typeof u=="string"?u:"").split(/[\s,]+/),n=a.length,d=0;d<n;d++)a[d]&&(u=a[d].replace(/\*/g,".*?"),u[0]==="-"?e.skips.push(new RegExp("^"+u.substr(1)+"$")):e.names.push(new RegExp("^"+u+"$")))}function g(){e.enable("")}function h(u){var a,n;for(a=0,n=e.skips.length;a<n;a++)if(e.skips[a].test(u))return!1;for(a=0,n=e.names.length;a<n;a++)if(e.names[a].test(u))return!0;return!1}function s(u){return u instanceof Error?u.stack||u.message:u}})(Se,B);(function(t,e){e=t.exports=B,e.log=f,e.formatArgs=o,e.save=l,e.load=g,e.useColors=r,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:h(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(s){try{return JSON.stringify(s)}catch(u){return"[UnexpectedJSONParseError]: "+u.message}};function o(s){var u=this.useColors;if(s[0]=(u?"%c":"")+this.namespace+(u?" %c":" ")+s[0]+(u?"%c ":" ")+"+"+e.humanize(this.diff),!!u){var a="color: "+this.color;s.splice(1,0,a,"color: inherit");var n=0,d=0;s[0].replace(/%[a-zA-Z%]/g,function(y){y!=="%%"&&(n++,y==="%c"&&(d=n))}),s.splice(d,0,a)}}function f(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function l(s){try{s==null?e.storage.removeItem("debug"):e.storage.debug=s}catch{}}function g(){var s;try{s=e.storage.debug}catch{}return!s&&typeof process<"u"&&"env"in process&&(s={}.DEBUG),s}e.enable(g());function h(){try{return window.localStorage}catch{}}})(Pe,F);var q={},Te={get exports(){return q},set exports(t){q=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(Te,q);var G={},Ne={get exports(){return G},set exports(t){G=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(Ne,G);var Q={},Re={get exports(){return Q},set exports(t){Q=t}},z={},Me={get exports(){return z},set exports(t){z=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(Me,z);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=z,o=f(r);function f(l){return l&&l.__esModule?l:{default:l}}e.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(Re,Q);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=F,o=a(r),f=q,l=a(f),g=G,h=a(g),s=Q,u=a(s);function a(y){return y&&y.__esModule?y:{default:y}}var n=(0,o.default)("youtube-player"),d={};d.proxyEvents=function(y){var c={},m=function(D){var P="on"+D.slice(0,1).toUpperCase()+D.slice(1);c[P]=function(_){n('event "%s"',P,_),y.trigger(D,_)}},v=!0,p=!1,i=void 0;try{for(var E=h.default[Symbol.iterator](),b;!(v=(b=E.next()).done);v=!0){var A=b.value;m(A)}}catch(V){p=!0,i=V}finally{try{!v&&E.return&&E.return()}finally{if(p)throw i}}return c},d.promisifyPlayer=function(y){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m={},v=function(P){c&&u.default[P]?m[P]=function(){for(var _=arguments.length,I=Array(_),S=0;S<_;S++)I[S]=arguments[S];return y.then(function(w){var C=u.default[P],ne=w.getPlayerState(),Z=w[P].apply(w,I);return C.stateChangeRequired||Array.isArray(C.acceptableStates)&&C.acceptableStates.indexOf(ne)===-1?new Promise(function(W){var ae=function H(){var oe=w.getPlayerState(),K=void 0;typeof C.timeout=="number"&&(K=setTimeout(function(){w.removeEventListener("onStateChange",H),W()},C.timeout)),Array.isArray(C.acceptableStates)&&C.acceptableStates.indexOf(oe)!==-1&&(w.removeEventListener("onStateChange",H),clearTimeout(K),W())};w.addEventListener("onStateChange",ae)}).then(function(){return Z}):Z})}:m[P]=function(){for(var _=arguments.length,I=Array(_),S=0;S<_;S++)I[S]=arguments[S];return y.then(function(w){return w[P].apply(w,I)})}},p=!0,i=!1,E=void 0;try{for(var b=l.default[Symbol.iterator](),A;!(p=(A=b.next()).done);p=!0){var V=A.value;v(V)}}catch(D){i=!0,E=D}finally{try{!p&&b.return&&b.return()}finally{if(i)throw E}}return m},e.default=d,t.exports=e.default})(we,U);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o=he,f=u(o),l=L,g=u(l),h=U,s=u(h);function u(n){return n&&n.__esModule?n:{default:n}}var a=void 0;e.default=function(n){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=(0,f.default)();if(a||(a=(0,g.default)(c)),d.events)throw new Error("Event handlers cannot be overwritten.");if(typeof n=="string"&&!document.getElementById(n))throw new Error('Element "'+n+'" does not exist.');d.events=s.default.proxyEvents(c);var m=new Promise(function(p){if((typeof n>"u"?"undefined":r(n))==="object"&&n.playVideo instanceof Function){var i=n;p(i)}else a.then(function(E){var b=new E.Player(n,d);return c.on("ready",function(){p(b)}),null})}),v=s.default.promisifyPlayer(m,y);return v.on=c.on,v.off=c.off,v},t.exports=e.default})(ge,O);const Ve=ve(O);function Ye(t){let e,r;return{c(){e=X("div"),r=X("div"),this.h()},l(o){e=j(o,"DIV",{class:!0});var f=$(e);r=j(f,"DIV",{id:!0}),$(r).forEach(x),f.forEach(x),this.h()},h(){Y(r,"id",t[0]),Y(e,"class",t[1])},m(o,f){se(o,e,f),fe(e,r),t[6](r)},p(o,[f]){f&1&&Y(r,"id",o[0]),f&2&&Y(e,"class",o[1])},i:ee,o:ee,d(o){o&&x(e),t[6](null)}}}const J={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function ke(t,e,r){let{id:o=void 0}=e,{videoId:f}=e,{options:l=void 0}=e,{class:g}=e,h,{player:s}=e;ce(()=>u());function u(){return r(3,s=Ve(h,l)),s.on("ready",d),s.on("error",y),s.on("stateChange",c),s.on("playbackRateChange",m),s.on("playbackQualityChange",v),()=>s.destroy()}function a(i){s&&i&&(l&&l.playerVars&&l.playerVars.autoplay===1?s.loadVideoById(i):s.cueVideoById(i))}const n=de();function d(i){n("ready",i),a(f)}function y(i){n("error",i)}function c(i){switch(n("stateChange",i),i.data){case J.ENDED:n("end",i);break;case J.PLAYING:n("play",i);break;case J.PAUSED:n("pause",i);break}}function m(i){n("playbackRateChange",i)}function v(i){n("playbackQualityChange",i)}function p(i){ye[i?"unshift":"push"](()=>{h=i,r(2,h)})}return t.$$set=i=>{"id"in i&&r(0,o=i.id),"videoId"in i&&r(4,f=i.videoId),"options"in i&&r(5,l=i.options),"class"in i&&r(1,g=i.class),"player"in i&&r(3,s=i.player)},t.$$.update=()=>{t.$$.dirty&16&&a(f)},[o,g,h,s,f,l,p]}class Ue extends ie{constructor(e){super(),ue(this,e,ke,Ye,le,{id:0,videoId:4,options:5,class:1,player:3})}}export{Ue as Y};
