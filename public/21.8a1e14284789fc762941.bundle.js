"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[21],{4159:(d,e,u)=>{u.d(e,{Z:()=>r});const t="web.telegram.org",f={id:1025907,hash:"452b0359b988148995f22ff0f4229750",version:"1.5.0",versionFull:"1.5.0 (216)",build:216,langPackVersion:"0.4.4",langPack:"macos",langPackCode:"en",domains:[t],baseDcId:2,isMainDomain:location.hostname===t,suffix:"K",cryptoWorkers:4};f.isMainDomain&&(f.id=2496,f.hash="8da85b0d5bfe62527e5b244c209159c3");const r=f},3127:(d,e,u)=>{u.d(e,{Z:()=>t});const t={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]}},2219:(d,e,u)=>{u.d(e,{Z:()=>t});const t=Date.now()%Math.random()*1e8|0},8975:(d,e,u)=>{u.d(e,{Z:()=>f});var t=u(7119);function f(d,e=""){Array.isArray(d)||(d=[d]);const u=(0,t.Z)(e);return new Blob(d,{type:u})}},7119:(d,e,u)=>{function t(d){return-1===["image/jpeg","image/png","image/gif","image/svg+xml","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","audio/wav","application/json","application/pdf"].indexOf(d)?"application/octet-stream":d}u.d(e,{Z:()=>t})},4903:(d,e,u)=>{function t(...d){const e=d.reduce(((d,e)=>d+(e.byteLength||e.length)),0),u=new Uint8Array(e);let t=0;return d.forEach((d=>{u.set(d instanceof ArrayBuffer?new Uint8Array(d):d,t),t+=d.byteLength||d.length})),u}u.d(e,{Z:()=>t})},3725:(d,e,u)=>{u.d(e,{Z:()=>f});var t=u(319);function f(){const d={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...e)=>{d.lastNotify=e,d.listeners.forEach((d=>d(...e)))},listeners:[],addNotifyListener:e=>{d.lastNotify&&e(...d.lastNotify),d.listeners.push(e)}},e=new Promise(((u,t)=>{d.resolve=d=>{e.isFulfilled||e.isRejected||(e.isFulfilled=!0,u(d))},d.reject=(...d)=>{e.isRejected||e.isFulfilled||(e.isRejected=!0,t(...d))}}));return e.catch(t.Z).finally((()=>{e.notify=e.notifyAll=e.lastNotify=null,e.listeners.length=0,e.cancel&&(e.cancel=t.Z)})),Object.assign(e,d),e}},1352:(d,e,u)=>{u.d(e,{N5:()=>f,SU:()=>t,kC:()=>r});const t="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,f="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&!t,r=f||t,c=(d,...e)=>{try{d.postMessage(...e)}catch(d){console.error("[worker] postMessage error:",d,e)}},s=(d,...e)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then((u=>{u.length&&u.slice(d?0:-1).forEach((d=>{c(d,...e)}))}))};t&&s.bind(null,!1),t&&s.bind(null,!0)},5659:(d,e,u)=>{function t(d){const e=document.createElement("script"),u=new Promise((d=>{e.onload=e.onerror=()=>{d(e)}}));return e.src=d,document.body.appendChild(e),u}u.d(e,{Z:()=>t})},5471:(d,e,u)=>{function t(d){return{type:d}}u.d(e,{Z:()=>t})},319:(d,e,u)=>{function t(){}u.d(e,{Z:()=>t})},8479:(d,e,u)=>{function t(d){if(null===d||"object"!=typeof d)return d;if(d instanceof Date)return new Date(d.getTime());if(Array.isArray(d))return d.map((d=>t(d)));const e=new d.constructor;for(var u in d)d.hasOwnProperty(u)&&(e[u]=t(d[u]));return e}u.d(e,{Z:()=>t})},6848:(d,e,u)=>{function t(d,e){const u=Object.keys,f=typeof d;return d&&e&&"object"===f&&f===typeof e?u(d).length===u(e).length&&u(d).every((u=>t(d[u],e[u]))):d===e}u.d(e,{Z:()=>t})},5880:(d,e,u)=>{function t(d){return"object"==typeof d&&null!==d}u.d(e,{Z:()=>t})},5953:(d,e,u)=>{function t(d,e){if(e)for(const u in e)void 0!==e[u]&&(d[u]=e[u]);return d}u.d(e,{Z:()=>t})},946:(d,e,u)=>{u.d(e,{Z:()=>r});var t=u(8479),f=u(5880);function r(d,e,u,c){for(const s in d)typeof e[s]!=typeof d[s]?(e[s]=(0,t.Z)(d[s]),u&&u(c||s)):(0,f.Z)(d[s])&&r(d[s],e[s],u,c||s)}},4110:(d,e,u)=>{var t=u(7361),f=u(617);String.prototype.toUserId=function(){return(+this).toUserId()},String.prototype.toChatId=function(){return(+this).toChatId()},String.prototype.toPeerId=function(d){return(+this).toPeerId(d)},String.prototype.isPeerId=function(){return/^[\d-]/.test(this.toString())},Number.prototype.toUserId=function(){return this},Number.prototype.toChatId=function(){return Math.abs(this)},Number.prototype.toPeerId=function(d){return void 0===d?this:d?-Math.abs(this):this},Number.prototype.isPeerId=function(){return!0},[["isUser",f.Z],["isAnyChat",t.Z]].forEach((d=>{const e=Array.isArray(d)?d[0]:d,u=Array.isArray(d)?d[1]:d;String.prototype[e]=function(){return u.call(null,this.toString())},Number.prototype[e]=function(){return u.call(null,this)}}))},144:(d,e,u)=>{u.d(e,{a:()=>r,d:()=>f});const t={8:new Uint8Array(1),16:new Uint16Array(1),32:new Uint32Array(1)};function f(d){const e=t[d];return crypto.getRandomValues(e),e[0]}function r(){return""+f(32)+f(32)%16777215}},5466:(d,e,u)=>{u.d(e,{$:()=>f});var t=u(5289);function f(d){return(...e)=>function(d,e,u){const f=performance.now();return(u||console).warn((0,t.Z)(),"start",e),d.then((()=>{(u||console).warn((0,t.Z)(),"end",e,performance.now()-f)})),d}(...e,d)}},5418:(d,e,u)=>{function t(d){return new Promise((e=>{setTimeout(e,d)}))}u.d(e,{Z:()=>t})},6724:(d,e,u)=>{function t(d,e,u=!0){let t,f,r=null;return(...c)=>{t=!0,f=c,r||(u&&(t=!1,d(...f)),r=setInterval((()=>{if(!t)return clearInterval(r),void(r=null);t=!1,d(...f)}),e))}}u.d(e,{Z:()=>t})},9005:(d,e,u)=>{function t(d){return d.charAt(0).toUpperCase()+d.slice(1)}u.d(e,{Z:()=>t})},8453:(d,e,u)=>{u.d(e,{Z:()=>s});var t=u(5936),f=u(3989),r=u(7487),c=u(319);function s(d,e){return Promise.all([f.Z.toggleStorage(d,e),t.Z.toggleStorage(d,e),r.Z.toggleStorage(d,e)]).then(c.Z,c.Z)}},7298:(d,e,u)=>{function t(d){const e=Date.now();return d?e/1e3|0:e}u.d(e,{Z:()=>t})},7361:(d,e,u)=>{function t(d){return+d<0}u.d(e,{Z:()=>t})},617:(d,e,u)=>{function t(d){return+d>=0}u.d(e,{Z:()=>t})},8630:(d,e,u)=>{u.d(e,{Z:()=>n});var t=u(153),f=u(410),r=u(1352);class c extends t.Z{constructor(){super("CRYPTO"),this.lastIndex=-1}invokeCryptoNew({method:d,args:e,transfer:u}){const t={method:d,args:e},f=this.listeners.invoke;if(null==f?void 0:f.length){let d=f[0].callback(t);return r.kC||d instanceof Promise||(d=Promise.resolve(d)),d}const c="aes-encrypt"===d||"aes-decrypt"===d?this.lastIndex=(this.lastIndex+1)%this.sendPorts.length:0;return this.invoke("invoke",t,void 0,this.sendPorts[c],u)}invokeCrypto(d,...e){return this.invokeCryptoNew({method:d,args:e})}}const s=new c;f.GO&&(f.GO.cryptoMessagePort=s);const n=s},5936:(d,e,u)=>{u.d(e,{Z:()=>n});var t=u(1267),f=u(8975),r=u(5753),c=u(5471),s=u(3725);class n{constructor(d){this.dbName=d,this.useStorage=!0,t.Z.test&&(this.dbName+="_test"),n.STORAGES.length&&(this.useStorage=n.STORAGES[0].useStorage),this.openDatabase(),n.STORAGES.push(this)}openDatabase(){var d;return null!==(d=this.openDbPromise)&&void 0!==d?d:this.openDbPromise=caches.open(this.dbName)}delete(d){return this.timeoutOperation((e=>e.delete("/"+d)))}deleteAll(){return caches.delete(this.dbName)}get(d){return this.timeoutOperation((e=>e.match("/"+d)))}save(d,e){return this.timeoutOperation((u=>u.put("/"+d,e)))}getFile(d,e="blob"){return this.get(d).then((d=>{if(!d)throw(0,c.Z)("NO_ENTRY_FOUND");return d[e]()}))}saveFile(d,e){e instanceof Blob||(e=(0,f.Z)(e));const u=new Response(e,{headers:{"Content-Length":""+e.size}});return this.save(d,u).then((()=>e))}timeoutOperation(d){return this.useStorage?new Promise(((e,u)=>{return t=this,f=void 0,c=function*(){let t=!1;const f=setTimeout((()=>{u(),t=!0}),15e3);try{const u=yield this.openDatabase();if(!u)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const f=yield d(u);if(t)return;e(f)}catch(d){u(d)}clearTimeout(f)},new((r=void 0)||(r=Promise))((function(d,e){function u(d){try{n(c.next(d))}catch(d){e(d)}}function s(d){try{n(c.throw(d))}catch(d){e(d)}}function n(e){var t;e.done?d(e.value):(t=e.value,t instanceof r?t:new r((function(d){d(t)}))).then(u,s)}n((c=c.apply(t,f||[])).next())}));var t,f,r,c})):Promise.reject((0,c.Z)("STORAGE_OFFLINE"))}prepareWriting(d,e,u){return{deferred:(0,s.Z)(),getWriter:()=>new r.Z(u,e,(e=>this.saveFile(d,e).catch((()=>e))))}}static toggleStorage(d,e){return Promise.all(this.STORAGES.map((u=>{if(u.useStorage=d,e)return d?void 0:u.deleteAll()})))}}n.STORAGES=[]},5753:(d,e,u)=>{u.d(e,{Z:()=>f});var t=u(8975);class f{constructor(d,e,u){this.mimeType=d,this.size=e,this.saveFileCallback=u,this.bytes=new Uint8Array(e)}write(d,e){return u=this,t=void 0,r=function*(){const u=e+d.byteLength;if(u>this.bytes.byteLength){const d=new Uint8Array(u);d.set(this.bytes,0),this.bytes=d}this.bytes.set(d,e)},new((f=void 0)||(f=Promise))((function(d,e){function c(d){try{n(r.next(d))}catch(d){e(d)}}function s(d){try{n(r.throw(d))}catch(d){e(d)}}function n(e){var u;e.done?d(e.value):(u=e.value,u instanceof f?u:new f((function(d){d(u)}))).then(c,s)}n((r=r.apply(u,t||[])).next())}));var u,t,f,r}truncate(){this.bytes=new Uint8Array}trim(d){this.bytes=this.bytes.slice(0,d)}finalize(d=!0){const e=(0,t.Z)(this.bytes,this.mimeType);return d&&this.saveFileCallback&&this.saveFileCallback(e),e}getParts(){return this.bytes}replaceParts(d){this.bytes=d}}},5003:(d,e,u)=>{u.d(e,{kg:()=>l,v9:()=>t});var t,f=u(410),r=u(4762),c=u(1352),s=u(5289);!function(d){d[d.None=0]="None",d[d.Error=1]="Error",d[d.Warn=2]="Warn",d[d.Log=4]="Log",d[d.Debug=8]="Debug"}(t||(t={}));const n=[t.None,t.Error,t.Warn,t.Log,t.Debug],o=!(r.IS_SAFARI||r.IS_FIREFOX),i="[33m",a="[36m",h=[["debug",t.Debug],["info",t.Log],["warn",t.Warn],["error",t.Error],["assert",t.Error],["trace",t.Log],["group",t.Log],["groupCollapsed",t.Log],["groupEnd",t.Log]];function l(d,e=t.Log|t.Warn|t.Error,u=!1,r=""){let b;f.ZP||u||(e=t.Error),o?r||(c.SU?r=i:c.N5&&(r=a)):r="";const g=r;r=r?`%s ${r}%s`:"%s";const p=function(...u){return e&t.Log&&console.log(r,(0,s.Z)(),d,...u)};return h.forEach((([u,t])=>{p[u]=function(...f){return e&t&&console[u](r,(0,s.Z)(),d,...f)}})),p.setPrefix=function(e){b=e,d="["+e+"]"},p.setPrefix(d),p.setLevel=function(d){e=n.slice(0,d+1).reduce(((d,e)=>d|e),0)},p.bindPrefix=function(d){return l(`${b}] [${d}`,e,u,g)},p}},3206:(d,e,u)=>{u.d(e,{Z:()=>r});var t=u(410),f=u(153);class r extends f.Z{constructor(){super("MTPROTO"),r.INSTANCE=this,t.GO&&(t.GO.mtprotoMessagePort=this)}static getInstance(){return this.INSTANCE}}},690:(d,e,u)=>{var t=u(4903);Uint8Array.prototype.concat=function(...d){return(0,t.Z)(this,...d)},Uint8Array.prototype.toJSON=function(){return[...this]},Promise.prototype.finally=Promise.prototype.finally||function(d){const e=e=>Promise.resolve(d()).then(e);return this.then((d=>e((()=>d))),(d=>e((()=>Promise.reject(d)))))}},6637:(d,e,u)=>{u.d(e,{Z:()=>f});var t=u(2423);function f(d){return d?d.match(t.bu):null}},3591:(d,e,u)=>{u.d(e,{Z:()=>r});var t=u(2423),f=u(6637);function r(d,e){let u,r,c,s;if((0,f.Z)(d)||(d="https://"+d),u=d.match(/^(?:https?:\/\/)?t(?:elegram)?\.me\/(.+)/)){const e=u[1],f=e.split("/");if(f[0]&&"$"===f[0][0]&&f[0].length>1)return s="invoice",{url:d,onclick:s};if(/^\W/.test(e)&&!t.kO.test(e))return s="joinchat",{url:d,onclick:s};switch(f[0]){case"joinchat":case"addstickers":case"voicechat":case"invoice":s=f[0];break;default:if(f[1]&&f[1].match(/^\d+(?:\?(?:comment|thread)=\d+)?$/)||1===f.length){s="im";break}}}else(r=d.match(/^(?:https?:\/\/)?telesco\.pe\/([^/?]+)\/(\d+)/))?s="im":(c=d.match(/tg:(?:\/\/)?(.+?)(?:\?|$)/))&&(s="tg_"+c[1]);return window[s]||(s=void 0),{url:d,onclick:s}}},3655:(d,e,u)=>{u.d(e,{Z:()=>r});var t=u(153),f=u(410);class r extends t.Z{constructor(){super("SERVICE"),f.GO&&(f.GO.serviceMessagePort=this)}}},7487:(d,e,u)=>{u.d(e,{Z:()=>i});var t=u(410),f=u(1267),r=u(1352),c=u(3206);class s{constructor(){this.prefix="",this.cache={},this.useStorage=!0,f.Z.test&&(this.prefix="t_")}get(d,e=!0){if(this.cache.hasOwnProperty(d)&&e)return this.cache[d];if(this.useStorage){let e;try{e=localStorage.getItem(this.prefix+d)}catch(d){this.useStorage=!1}if(null!==e)try{e=JSON.parse(e)}catch(d){}else e=void 0;return e}}set(d,e=!1){for(const u in d)if(d.hasOwnProperty(u)){const t=d[u];if(this.cache[u]=t,this.useStorage&&!e)try{const d=JSON.stringify(t);localStorage.setItem(this.prefix+u,d)}catch(d){this.useStorage=!1}}}delete(d,e=!1){d=""+d,e||delete this.cache[d];try{localStorage.removeItem(this.prefix+d)}catch(d){}}clear(){const d=["dc","server_time_offset","xt_instance","user_auth","state_id","k_build"];for(let e=1;e<=5;++e)d.push(`dc${e}_server_salt`),d.push(`dc${e}_auth_key`);for(const e of d)this.delete(e,!0)}toggleStorage(d,e){if(this.useStorage=d,e)return d?this.set(this.cache):void this.clear()}}class n{constructor(){n.STORAGES.push(this),r.kC||(this.storage=new s)}proxy(d,...e){return u=this,t=void 0,s=function*(){return r.kC?c.Z.getInstance().invoke("localStorageProxy",{type:d,args:e}):(e=Array.prototype.slice.call(e),this.storage[d].apply(this.storage,e))},new((f=void 0)||(f=Promise))((function(d,e){function r(d){try{n(s.next(d))}catch(d){e(d)}}function c(d){try{n(s.throw(d))}catch(d){e(d)}}function n(e){var u;e.done?d(e.value):(u=e.value,u instanceof f?u:new f((function(d){d(u)}))).then(r,c)}n((s=s.apply(u,t||[])).next())}));var u,t,f,s}get(d,e){return this.proxy("get",d,e)}set(d,e){return this.proxy("set",d,e)}delete(d,e){return this.proxy("delete",d,e)}clear(){return this.proxy("clear")}toggleStorage(d,e){return this.proxy("toggleStorage",d,e)}}n.STORAGES=[];const o=new n;t.GO.appStorage=o;const i=o},7922:(d,e,u)=>{u.d(e,{Z:()=>n});var t=u(410),f=u(3989),r=u(3127);class c extends f.Z{constructor(){super(r.Z,"session")}}const s=new c;t.GO.stateStorage=s;const n=s},3989:(d,e,u)=>{u.d(e,{Z:()=>i});var t=u(410),f=u(3725),r=u(1352),c=u(6724),s=u(6666),n=function(d,e,u,t){return new(u||(u=Promise))((function(f,r){function c(d){try{n(t.next(d))}catch(d){r(d)}}function s(d){try{n(t.throw(d))}catch(d){r(d)}}function n(d){var e;d.done?f(d.value):(e=d.value,e instanceof u?e:new u((function(d){d(e)}))).then(c,s)}n((t=t.apply(d,e||[])).next())}))};function o(){}class i{constructor(d,e){this.db=d,this.storeName=e,this.cache={},this.getPromises=new Map,this.keysToSet=new Set,this.saveDeferred=(0,f.Z)(),this.keysToDelete=new Set,this.deleteDeferred=(0,f.Z)(),this.storage=new s.Z(d,e),i.STORAGES.length?this.useStorage=i.STORAGES[0].useStorage:this.useStorage=!0,this.savingFreezed=!1,i.STORAGES.push(this),this.saveThrottled=(0,c.Z)((()=>n(this,void 0,void 0,(function*(){const d=this.saveDeferred;this.saveDeferred=(0,f.Z)();const e=this.keysToSet;if(e.size){const d=Array.from(e.values());e.clear();const u=d.map((d=>this.cache[d]));try{yield this.storage.save(d,u)}catch(e){console.error("[AS]: set error:",e,d,u)}}d.resolve(),e.size&&this.saveThrottled()}))),16,!1),this.deleteThrottled=(0,c.Z)((()=>n(this,void 0,void 0,(function*(){const d=this.deleteDeferred;this.deleteDeferred=(0,f.Z)();const e=this.keysToDelete;if(e.size){const d=Array.from(e.values());e.clear();try{yield this.storage.delete(d)}catch(e){console.error("[AS]: delete error:",e,d)}}d.resolve(),e.size&&this.deleteThrottled()}))),16,!1),this.getThrottled=(0,c.Z)((()=>n(this,void 0,void 0,(function*(){const d=Array.from(this.getPromises.keys());this.storage.get(d).then((e=>{for(let u=0,t=d.length;u<t;++u){const t=d[u],f=this.getPromises.get(t);f&&(f.resolve(this.cache[t]=e[u]),this.getPromises.delete(t))}}),(u=>{new Set(["NO_ENTRY_FOUND","STORAGE_OFFLINE"]).has(u.type)||(this.useStorage=!1,console.error("[AS]: get error:",u,d,e));for(let e=0,u=d.length;e<u;++e){const u=d[e],t=this.getPromises.get(u);t&&(t.resolve(void 0),this.getPromises.delete(u))}})).finally((()=>{this.getPromises.size&&this.getThrottled()}))}))),16,!1)}isAvailable(){return this.useStorage}getCache(){return this.cache}getFromCache(d){return this.cache[d]}setToCache(d,e){return this.cache[d]=e}get(d,e=!0){return n(this,void 0,void 0,(function*(){if(this.cache.hasOwnProperty(d)&&e)return this.getFromCache(d);if(this.useStorage){const e=this.getPromises.get(d);if(e)return e;const u=(0,f.Z)();return this.getPromises.set(d,u),this.getThrottled(),u}}))}getAll(){return this.storage.getAll().catch((()=>[]))}set(d,e=!1){const u=this.useStorage&&!e&&!this.savingFreezed;for(const e in d)if(d.hasOwnProperty(e)){const t=d[e];this.setToCache(e,t),u&&(this.keysToSet.add(e),this.keysToDelete.delete(e),this.saveThrottled())}return u?this.saveDeferred:Promise.resolve()}delete(d,e=!1){return d=""+d,e||delete this.cache[d],this.useStorage&&(this.keysToSet.delete(d),this.keysToDelete.add(d),this.deleteThrottled()),this.useStorage?this.deleteDeferred:Promise.resolve()}clear(d=!1){if(!d)for(const d in this.cache)delete this.cache[d];return this.storage.clear().catch(o)}static toggleStorage(d,e){return Promise.all(this.STORAGES.map((u=>{if(u.useStorage=d,r.kC&&e)return d?u.set(u.cache):(u.keysToSet.clear(),u.keysToDelete.clear(),u.getPromises.forEach((d=>d.resolve(void 0))),u.getPromises.clear(),u.clear(!0))}))).catch(o)}static freezeSaving(d,e){this.STORAGES.forEach((d=>d.savingFreezed=!0));try{d()}catch(d){console.error("freezeSaving callback error:",d)}this.STORAGES.forEach((d=>d.savingFreezed=!1))}}i.STORAGES=[],t.GO&&(t.GO.AppStorage=i)},1229:(d,e,u)=>{u.d(e,{Z:()=>t});const t="((?:👨🏻‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👨🏼‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👨🏽‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👨🏾‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👨🏿‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👩🏻‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👩🏻‍❤️?‍💋‍👩\ud83c[\udffb-\udfff]|👩🏼‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👩🏼‍❤️?‍💋‍👩\ud83c[\udffb-\udfff]|👩🏽‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👩🏽‍❤️?‍💋‍👩\ud83c[\udffb-\udfff]|👩🏾‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👩🏾‍❤️?‍💋‍👩\ud83c[\udffb-\udfff]|👩🏿‍❤️?‍💋‍👨\ud83c[\udffb-\udfff]|👩🏿‍❤️?‍💋‍👩\ud83c[\udffb-\udfff]|🧑🏻‍❤️?‍💋‍🧑\ud83c[\udffc-\udfff]|🧑🏼‍❤️?‍💋‍🧑\ud83c[\udffb\udffd-\udfff]|🧑🏽‍❤️?‍💋‍🧑\ud83c[\udffb\udffc\udffe\udfff]|🧑🏾‍❤️?‍💋‍🧑\ud83c[\udffb-\udffd\udfff]|🧑🏿‍❤️?‍💋‍🧑\ud83c[\udffb-\udffe]|👨🏻‍❤️?‍👨\ud83c[\udffb-\udfff]|👨🏻‍🤝‍👨\ud83c[\udffc-\udfff]|👨🏼‍❤️?‍👨\ud83c[\udffb-\udfff]|👨🏼‍🤝‍👨\ud83c[\udffb\udffd-\udfff]|👨🏽‍❤️?‍👨\ud83c[\udffb-\udfff]|👨🏽‍🤝‍👨\ud83c[\udffb\udffc\udffe\udfff]|👨🏾‍❤️?‍👨\ud83c[\udffb-\udfff]|👨🏾‍🤝‍👨\ud83c[\udffb-\udffd\udfff]|👨🏿‍❤️?‍👨\ud83c[\udffb-\udfff]|👨🏿‍🤝‍👨\ud83c[\udffb-\udffe]|👩🏻‍❤️?‍👨\ud83c[\udffb-\udfff]|👩🏻‍❤️?‍👩\ud83c[\udffb-\udfff]|👩🏻‍🤝‍👨\ud83c[\udffc-\udfff]|👩🏻‍🤝‍👩\ud83c[\udffc-\udfff]|👩🏼‍❤️?‍👨\ud83c[\udffb-\udfff]|👩🏼‍❤️?‍👩\ud83c[\udffb-\udfff]|👩🏼‍🤝‍👨\ud83c[\udffb\udffd-\udfff]|👩🏼‍🤝‍👩\ud83c[\udffb\udffd-\udfff]|👩🏽‍❤️?‍👨\ud83c[\udffb-\udfff]|👩🏽‍❤️?‍👩\ud83c[\udffb-\udfff]|👩🏽‍🤝‍👨\ud83c[\udffb\udffc\udffe\udfff]|👩🏽‍🤝‍👩\ud83c[\udffb\udffc\udffe\udfff]|👩🏾‍❤️?‍👨\ud83c[\udffb-\udfff]|👩🏾‍❤️?‍👩\ud83c[\udffb-\udfff]|👩🏾‍🤝‍👨\ud83c[\udffb-\udffd\udfff]|👩🏾‍🤝‍👩\ud83c[\udffb-\udffd\udfff]|👩🏿‍❤️?‍👨\ud83c[\udffb-\udfff]|👩🏿‍❤️?‍👩\ud83c[\udffb-\udfff]|👩🏿‍🤝‍👨\ud83c[\udffb-\udffe]|👩🏿‍🤝‍👩\ud83c[\udffb-\udffe]|🧑🏻‍❤️?‍🧑\ud83c[\udffc-\udfff]|🧑🏻‍🤝‍🧑\ud83c[\udffb-\udfff]|🧑🏼‍❤️?‍🧑\ud83c[\udffb\udffd-\udfff]|🧑🏼‍🤝‍🧑\ud83c[\udffb-\udfff]|🧑🏽‍❤️?‍🧑\ud83c[\udffb\udffc\udffe\udfff]|🧑🏽‍🤝‍🧑\ud83c[\udffb-\udfff]|🧑🏾‍❤️?‍🧑\ud83c[\udffb-\udffd\udfff]|🧑🏾‍🤝‍🧑\ud83c[\udffb-\udfff]|🧑🏿‍❤️?‍🧑\ud83c[\udffb-\udffe]|🧑🏿‍🤝‍🧑\ud83c[\udffb-\udfff]|👨‍❤️?‍💋‍👨|👩‍❤️?‍💋‍\ud83d[\udc68\udc69]|🫱🏻‍🫲\ud83c[\udffc-\udfff]|🫱🏼‍🫲\ud83c[\udffb\udffd-\udfff]|🫱🏽‍🫲\ud83c[\udffb\udffc\udffe\udfff]|🫱🏾‍🫲\ud83c[\udffb-\udffd\udfff]|🫱🏿‍🫲\ud83c[\udffb-\udffe]|👨‍❤️?‍👨|👩‍❤️?‍\ud83d[\udc68\udc69]|🧑‍🤝‍🧑|👫\ud83c[\udffb-\udfff]|👬\ud83c[\udffb-\udfff]|👭\ud83c[\udffb-\udfff]|💏\ud83c[\udffb-\udfff]|💑\ud83c[\udffb-\udfff]|🤝\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|🤝)|(?:\ud83d[\udc68\udc69]|🧑)(?:\ud83c[\udffb-\udfff])?‍(?:⚕️?|⚖️?|✈️?|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|⛹)(?:(?:\ud83c[\udffb-\udfff]|️?)‍[♀♂]️?)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?‍[♀♂]️?|(?:👨‍👨‍👦‍👦|👨‍👨‍👧‍\ud83d[\udc66\udc67]|👨‍👩‍👦‍👦|👨‍👩‍👧‍\ud83d[\udc66\udc67]|👩‍👩‍👦‍👦|👩‍👩‍👧‍\ud83d[\udc66\udc67]|👨‍👦‍👦|👨‍👧‍\ud83d[\udc66\udc67]|👨‍👨‍\ud83d[\udc66\udc67]|👨‍👩‍\ud83d[\udc66\udc67]|👩‍👦‍👦|👩‍👧‍\ud83d[\udc66\udc67]|👩‍👩‍\ud83d[\udc66\udc67]|🏳️?‍⚧️?|🏳️?‍🌈|😶‍🌫️?|❤️?‍🔥|❤️?‍🩹|🏴‍☠️?|🐕‍🦺|🐻‍❄️?|👁‍🗨|👨‍\ud83d[\udc66\udc67]|👩‍\ud83d[\udc66\udc67]|👯‍♀️?|👯‍♂️?|😮‍💨|😵‍💫|🤼‍♀️?|🤼‍♂️?|🧞‍♀️?|🧞‍♂️?|🧟‍♀️?|🧟‍♂️?|🐈‍⬛)|[#*0-9]️??⃣|(?:[©®™♟]️?)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[‼⁉ℹ↔-↙↩↪⌚⌛⌨⏏⏭-⏯⏱⏲⏸-⏺Ⓜ▪▫▶◀◻-◾☀-☄☎☑☔☕☘☠☢☣☦☪☮☯☸-☺♀♂♈-♓♠♣♥♦♨♻♿⚒-⚗⚙⚛⚜⚠⚡⚧⚪⚫⚰⚱⚽⚾⛄⛅⛈⛏⛑⛓⛔⛩⛪⛰-⛵⛸⛺⛽✂✈✉✏✒✔✖✝✡✳✴❄❇❗❣❤➡⤴⤵⬅-⬇⬛⬜⭐⭕〰〽㊗㊙])(?:️?|(?!︎))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[☝⛷⛹✌✍])(?:️?|(?!︎))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[✊✋]))(?:\ud83c[\udffb-\udfff])?|(?:🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿|🇦\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|🇧\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|🇨\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|🇩\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|🇪\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|🇫\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|🇬\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|🇭\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|🇮\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|🇯\ud83c[\uddea\uddf2\uddf4\uddf5]|🇰\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|🇱\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|🇲\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|🇳\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|🇴🇲|🇵\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|🇶🇦|🇷\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|🇸\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|🇹\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|🇺\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|🇻\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|🇼\ud83c[\uddeb\uddf8]|🇽🇰|🇾\ud83c[\uddea\uddf9]|🇿\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[⏩-⏬⏰⏳♾⛎✅✨❌❎❓-❕➕-➗➰➿])|️)"}}]);
//# sourceMappingURL=21.8a1e14284789fc762941.bundle.js.map