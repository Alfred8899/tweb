import{M as w,j as L,h as I,I as k,L as y,bI as M,i as A}from"./index-419788d0.js";import{i as D,l as x,f as O}from"./page-8e8bb204.js";class P{constructor(){this.promises={},this.raf=L.bind(null),this.scheduled=!1}do(e,t){let a=this.promises[e];return a||(this.scheduleFlush(),a=this.promises[e]=I()),t!==void 0&&a.then(()=>t()),a}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const a=D(e),n=a?this.mutate():Promise.resolve();return t!==void 0&&(a?n.then(()=>t()):t()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}}const E=new P;w&&(w.sequentialDom=E);let U=0;function B(i,e=()=>Promise.resolve(),t=null,a=!1,n=i){if(i.querySelector(".c-ripple"))return;i.classList.add("rp");const l=document.createElement("div");l.classList.add("c-ripple"),i.classList.contains("rp-square")&&l.classList.add("is-square"),i[a?"prepend":"append"](l);let d;const v=(s,c)=>{const p=Date.now(),r=document.createElement("div"),f=U++,m=+window.getComputedStyle(l).getPropertyValue("--ripple-duration").replace("s","")*1e3,S=d=()=>{const o=Date.now()-p,h=()=>{E.mutate(()=>{r.remove()}),t?.(f)};if(o<m){const b=Math.max(m-o,m/2);setTimeout(()=>r.classList.add("hiding"),Math.max(b-m/2,0)),setTimeout(h,b)}else r.classList.add("hiding"),setTimeout(h,m/2);k||(window.removeEventListener("contextmenu",d),window.removeEventListener("mousemove",d)),d=null,u=!1};e?.(f),L(()=>{if(S!==d)return;const o=l.getBoundingClientRect();r.classList.add("c-ripple__circle");const h=s-o.left,b=c-o.top,_=Math.sqrt((Math.abs(b-o.height/2)+o.height/2)**2+(Math.abs(h-o.width/2)+o.width/2)**2),C=h-_/2,q=b-_/2;r.style.width=r.style.height=_+"px",r.style.left=C+"px",r.style.top=q+"px",l.append(r)})},g=s=>s.target!==i&&(["BUTTON","A"].includes(s.target.tagName)||y(s.target,"c-ripple")!==l)&&(n===i||!O(s.target,n))&&!y(s.target,"checkbox-field");let u=!1;if(k){const s=()=>{d?.()};n.addEventListener("touchstart",c=>{if(!x.isAvailable("animations")||c.touches.length>1||u||g(c))return;u=!0;const{clientX:p,clientY:r}=c.touches[0];v(p,r),n.addEventListener("touchend",s,{once:!0}),window.addEventListener("touchmove",f=>{f.cancelBubble=!0,f.stopPropagation(),s(),n.removeEventListener("touchend",s)},{once:!0})},{passive:!0})}else n.addEventListener("mousedown",s=>{if(![0,2].includes(s.button)||!x.isAvailable("animations")||n.dataset.ripple==="0"||g(s))return;if(u){u=!1;return}const{clientX:c,clientY:p}=s;v(c,p),window.addEventListener("mouseup",d,{once:!0,passive:!0}),window.addEventListener("contextmenu",d,{once:!0,passive:!0})},{passive:!0})}const R={check:"e900",checks:"e901",activesessions:"e902",add:"e903",add_reaction:"e904",addmember_filled:"e905",adduser:"e906",admin:"e907",animals:"e908",animations:"e909",archive:"e90a",arrow_down:"e90b",arrow_next:"e90c",arrowcircle:"e90d",attach:"e90e",audio_repeat:"e90f",audio_repeat_single:"e910",avatarnext:"e911",avatarprevious:"e912",binfilled:"e913",bold:"e914",bomb:"e915",botcom:"e916",bots:"e917",bug:"e918",calendar:"e919",calendarfilter:"e91a",camera:"e91b",cameraadd:"e91c",car:"e91d",card:"e91e",card_outline:"e91f",channel:"e920",channelviews:"e921",chatspinned:"e922",chatsplaceholder:"e923",check1:"e924",checkbox:"e925",checkboxblock:"e926",checkboxempty:"e927",checkboxon:"e928",checkretract:"e929",checkround:"e92a",checkround_filled:"e92b",clock:"e92c",close:"e92d",clouddownload:"e92e",colorize:"e92f",comments:"e930",commentssticker:"e931",copy:"e932",crossround:"e933",darkmode:"e934",data:"e935",delete:"e936",delete_filled:"e937",deletedaccount:"e938",deleteleft:"e939",deleteuser:"e93a",devices:"e93b",document:"e93c",down:"e93d",download:"e93e",dragfiles:"e93f",dragmedia:"e940",eats:"e941",edit:"e942",email:"e943",endcall_filled:"e944",enter:"e945",eye1:"e946",eye2:"e947",fast_forward:"e948",fast_rewind:"e949",favourites:"e94a",flag:"e94b",flip:"e94c",folder:"e94d",fontsize:"e94e",forward:"e94f",forward_filled:"e950",fullscreen:"e951",gc_microphone:"e952",gc_microphoneoff:"e953",gifs:"e954",gift:"e955",group:"e956",groupmedia:"e957",groupmediaoff:"e958",help:"e959",hide:"e95a",image:"e95b",info:"e95c",info2:"e95d",italic:"e95e",keyboard:"e95f",lamp:"e960",language:"e961",largepause:"e962",largeplay:"e963",left:"e964",limit_chat:"e965",limit_chats:"e966",limit_file:"e967",limit_folders:"e968",limit_link:"e969",limit_pin:"e96a",link:"e96b",list:"e96c",listscreenshare:"e96d",livelocation:"e96e",location:"e96f",lock:"e970",lockoff:"e971",loginlogodesktop:"e972",loginlogomobile:"e973",logout:"e974",mediaspoiler:"e975",mediaspoileroff:"e976",mention:"e977",menu:"e978",message:"e979",messageunread:"e97a",microphone:"e97b",microphone_crossed:"e97c",microphone_crossed_filled:"e97d",microphone_filled:"e97e",minus:"e97f",monospace:"e980",more:"e981",multistories:"e982",mute:"e983",muted:"e984",newchannel:"e985",newchannel_filled:"e986",newchat_filled:"e987",newgroup:"e988",newgroup_filled:"e989",newprivate:"e98a",newprivate_filled:"e98b",newtab:"e98c",next:"e98d",noncontacts:"e98e",nosound:"e98f",online:"e990",passwordoff:"e991",pause:"e992",permissions:"e993",phone:"e994",phone_filled:"e995",pin:"e996",pinlist:"e997",pinned_filled:"e998",pinnedchat:"e999",pip:"e99a",play:"e99b",playback_05:"e99c",playback_15:"e99d",playback_1x:"e99e",playback_2x:"e99f",plus:"e9a0",plusround:"e9a1",poll:"e9a2",premium_addone:"e9a3",premium_double:"e9a4",premium_lock:"e9a5",premium_unlock:"e9a6",previous:"e9a7",promote:"e9a8",radiooff:"e9a9",radioon:"e9aa",reactions:"e9ab",reactions_filled:"e9ac",readchats:"e9ad",recent:"e9ae",replace:"e9af",reply:"e9b0",reply_filled:"e9b1",restrict:"e9b2",rightpanel:"e9b3",rotate_left:"e9b4",rotate_right:"e9b5",saved:"e9b6",savedmessages:"e9b7",schedule:"e9b8",scheduled:"e9b9",search:"e9ba",select:"e9bb",send:"e9bc",send2:"e9bd",sending:"e9be",sendingerror:"e9bf",settings:"e9c0",settings_filled:"e9c1",sharescreen_filled:"e9c2",shipping:"e9c3",shuffle:"e9c4",smallscreen:"e9c5",smile:"e9c6",speaker:"e9c7",speakerfilled:"e9c8",speakeroff:"e9c9",speakerofffilled:"e9ca",spoiler:"e9cb",sport:"e9cc",star:"e9cd",star_filled:"e9ce",stickers:"e9cf",stickers_face:"e9d0",stop:"e9d1",stories:"e9d2",storyreply:"e9d3",strikethrough:"e9d4",textedit:"e9d5",timer:"e9d6",tip:"e9d7",tools:"e9d8",topics:"e9d9",transcribe:"e9da",unarchive:"e9db",underline:"e9dc",unmute:"e9dd",unpin:"e9de",unread:"e9df",up:"e9e0",user:"e9e1",username:"e9e2",videocamera:"e9e3",videocamera_crossed_filled:"e9e4",videocamera_filled:"e9e5",videochat:"e9e6",volume_down:"e9e7",volume_mute:"e9e8",volume_off:"e9e9",volume_up:"e9ea",webview:"e9eb",zoomin:"e9ec",zoomout:"e9ed"};function T(i,...e){const t=document.createElement("span");return t.classList.add(M,...e),t.textContent=String.fromCharCode(parseInt(R[i],16)),t}function j(i,e={}){const t=document.createElement(e.asLink?"a":e.asDiv?"div":"button");return t.className=i,e.noRipple||(e.rippleSquare&&t.classList.add("rp-square"),B(t)),e.icon&&z(t,e.icon),e.onlyMobile&&t.classList.add("only-handhelds"),e.disabled&&t.setAttribute("disabled","true"),e.text&&t.append(A(e.text,e.textArgs)),t}function z(i,e,t=i.querySelector(".button-icon")){const a=T(e,"button-icon");return t?t.replaceWith(a):i.append(a),a}export{j as B,T as I,z as a,B as r,E as s};
//# sourceMappingURL=button-71043fae.js.map