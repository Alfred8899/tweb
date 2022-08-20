"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[774,836],{4425:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(2384);class a{constructor(t,e){this.passwordInputField=t,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=s.Z.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"TwoFactorSetupMonkeyPeek").then((t=>(this.animation=t,this.animation.addEventListener("enterFrame",(t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())})),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},s.Z.waitForFirstFrame(t))))}remove(){this.animation&&this.animation.remove()}}},6830:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(3910),a=i(503);class n extends a.Z{constructor(t={}){super(Object.assign({plainText:!0},t)),this.passwordVisible=!1,this.onVisibilityClick=t=>{(0,s.Z)(t),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const e=this.input;e.type="password",e.setAttribute("required",""),e.name="notsearch_password",e.autocomplete="off";const i=document.createElement("input");i.classList.add("stealthy"),i.tabIndex=-1,i.type="password",e.parentElement.prepend(i),e.parentElement.insertBefore(i.cloneNode(),e.nextSibling);const a=this.toggleVisible=document.createElement("span");a.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(a),a.addEventListener("click",this.onVisibilityClick),a.addEventListener("touchend",this.onVisibilityClick)}}},2614:(t,e,i)=>{function s(t){const e=document.createElement("span");return"string"==typeof t?e.innerHTML=t:e.append(t),e}i.d(e,{Z:()=>s})},1656:(t,e,i)=>{function s(t,e){return e?t.forEach((t=>t.setAttribute("disabled","true"))):t.forEach((t=>t.removeAttribute("disabled"))),()=>s(t,!e)}i.d(e,{Z:()=>s})},2582:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(2325);class a{constructor(t){this.element=document.body.querySelector("."+t.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),t.titleLangKey&&this.title.append((0,s.ag)(t.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",t.subtitleLangKey&&this.subtitle.append((0,s.ag)(t.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),t.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},9437:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var s=i(279),a=i(4755),n=i(4874),r=i(4494),o=i(6830),l=i(4425),d=i(2325),c=i(2582),p=i(3910),h=i(2738),u=i(2614),m=i(5565),b=i(1656),g=i(8115),w=i(3512);let y;const v=new n.Z("page-password",!0,(()=>{const t=new c.Z({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),e=(0,r.Z)("btn-primary btn-color-primary"),n=new d.ZP.IntlElement({key:"Login.Next"});e.append(n.element);const v=new o.Z({label:"LoginPassword",name:"password"});let L;y=v.input,t.inputWrapper.append(v.container,e);const Z=()=>(L||(L=window.setInterval(Z,1e4)),w.Z.managers.passwordManager.getState().then((t=>{k=t,k.hint?(0,m.Z)(v.label,(0,u.Z)((0,g.Z)(k.hint))):v.setLabel()})));let k;const E=t=>{if(t&&(0,p.Z)(t),!y.value.length)return void y.classList.add("error");const a=(0,b.Z)([y,e],!0),r=y.value;n.update({key:"PleaseWait"});const o=(0,s.y)(e);v.setValueSilently(""+Math.random()),v.setValueSilently(r),w.Z.managers.passwordManager.check(r,k).then((t=>{"auth.authorization"===t._?(clearInterval(L),i.e(781).then(i.bind(i,5436)).then((t=>{t.default.mount()})),f&&f.remove()):(e.removeAttribute("disabled"),n.update({key:t._}),o.remove())})).catch((t=>{a(),v.input.classList.add("error"),t.type,n.update({key:"PASSWORD_HASH_INVALID"}),y.select(),o.remove(),Z()}))};(0,h.fc)(e,E),y.addEventListener("keypress",(function(t){if(this.classList.remove("error"),n.update({key:"Login.Next"}),"Enter"===t.key)return E()}));const V=a.Z.isMobile?100:166,f=new l.Z(v,V);return t.imageDiv.append(f.container),Promise.all([f.load(),Z()])}),null,(()=>{y.focus(),w.Z.managers.appStateManager.pushToState("authState",{_:"authStatePassword"})}))}}]);
//# sourceMappingURL=774.dfdd32ba1b66733e84bc.chunk.js.map