"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[53,810],{810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(279),i=n(4874),o=n(9807),r=n(4494),s=n(5432),c=n(4159),d=n(2325),l=n(2384),u=n(1405),h=n(9709),g=n(9638),p=n(3910),v=n(2738),y=n(5565),m=n(1656),Z=n(7487),b=n(2398),k=n(6669),L=n(7922),f=n(3512),_=n(709),S=n(3789),w=n(5431);let x,E=null;const N=new i.Z("page-sign",!0,(()=>{const e=document.createElement("div");let t,i;e.classList.add("input-wrapper");const u=new w.Z({onCountryChange:(e,n)=>{t=e,i=n,n&&(C.value=C.lastValue="+"+n.country_code,setTimeout((()=>{P.focus(),(0,b.Z)(P,!0)}),0))}}),C=new _.Z({onInput:e=>{l.Z.loadLottieWorkers();const{country:n,code:a}=e||{},o=n?n.name||n.default_name:"";o===u.value||t&&n&&a&&(t===n||i.country_code===a.country_code)||u.override(n,a,o),n||C.value.length-1>1?E.style.visibility="":E.style.visibility="hidden"}}),P=C.input;P.addEventListener("keypress",(e=>{if(!E.style.visibility&&"Enter"===e.key)return M()}));const T=new o.Z({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});T.input.addEventListener("change",(()=>{const e=T.checked;f.Z.managers.appStateManager.pushToState("keepSigned",e),S.Z.toggleStorages(e,!0)})),S.Z.getState().then((e=>{L.Z.isAvailable()?T.checked=e.keepSigned:(T.checked=!1,T.label.classList.add("checkbox-disabled"))})),E=(0,r.Z)("btn-primary btn-color-primary",{text:"Login.Next"}),E.style.visibility="hidden";const M=e=>{e&&(0,p.Z)(e);const t=(0,m.Z)([E,x],!0);(0,y.Z)(E,(0,d.ag)("PleaseWait")),(0,a.y)(E);const i=C.value;f.Z.managers.apiManager.invokeApi("auth.sendCode",{phone_number:i,api_id:c.Z.id,api_hash:c.Z.hash,settings:{_:"codeSettings"}}).then((e=>{n.e(392).then(n.bind(n,6392)).then((t=>t.default.mount(Object.assign(e,{phone_number:i}))))})).catch((e=>{t(),"PHONE_NUMBER_INVALID"===e.type?(C.setError(),(0,y.Z)(C.label,(0,d.ag)("Login.PhoneLabelInvalid")),P.classList.add("error"),(0,y.Z)(E,(0,d.ag)("Login.Next"))):(console.error("auth.sendCode error:",e),E.innerText=e.type)}))};(0,v.fc)(E,M),x=(0,r.Z)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"}),x.addEventListener("click",(()=>{h.default.mount()})),e.append(u.container,C.container,T.label,E,x);const A=document.createElement("h4");A.classList.add("text-center"),(0,d.$d)(A,"Login.Title");const I=document.createElement("div");I.classList.add("subtitle","text-center"),(0,d.$d)(I,"Login.StartText"),N.pageEl.querySelector(".container").append(A,I,e),s.Z||setTimeout((()=>{P.focus()}),0),(0,g.Z)(e),f.Z.managers.apiManager.invokeApi("help.getNearestDc").then((e=>{var t;const n=L.Z.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&d.ZP.getLangPack(n.lang_code).then((()=>{(0,k.Z)(P,"input")}));const a=new Set([1,2,3,4,5]),i=[e.this_dc];let o;return e.nearest_dc!==e.this_dc&&(o=f.Z.managers.apiManager.getNetworkerVoid(e.nearest_dc).then((()=>{i.push(e.nearest_dc)}))),(o||Promise.resolve()).then((()=>{i.forEach((e=>{a.delete(e)}));const e=[...a],t=()=>{return n=void 0,a=void 0,o=function*(){const n=e.shift();if(!n)return;const a=`dc${n}_auth_key`;if(yield Z.Z.get(a))return t();setTimeout((()=>{f.Z.managers.apiManager.getNetworkerVoid(n).finally(t)}),3e3)},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{c(o.next(e))}catch(e){t(e)}}function s(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,s)}c((o=o.apply(n,a||[])).next())}));var n,a,i,o};t()})),e})).then((e=>{u.value.length||C.value.length||u.selectCountryByIso2(e.country)}))}),(()=>{E&&((0,y.Z)(E,(0,d.ag)("Login.Next")),(0,u.Z)(E,void 0,void 0,!0),E.removeAttribute("disabled")),x&&x.removeAttribute("disabled"),f.Z.managers.appStateManager.pushToState("authState",{_:"authStateSignIn"})})),C=N}}]);
//# sourceMappingURL=53.64ea484cf91c9ae29792.chunk.js.map