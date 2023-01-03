(function(){var m=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[18],{iThW:function(T,o,i){"use strict";i.r(o),i.d(o,"init",function(){return d}),i.d(o,"changeState",function(){return u});var S=i("yXPU"),s=i.n(S),l=i("ddYX");const n={};function d(r){return Array.from(document.querySelectorAll(".dmLoginBar")).forEach(e=>{n[e.id]&&n[e.id].removeEventListeners(),n[e.id]=new h({container:e})}),n[(r||{}).id]||{}}function u(r,t){n[r].changeState(t)}class h{constructor({container:t}){this.STATES={empty:{},loginButton:{},profileBar:{}},this.updateText=({state:e,element:a,text:c})=>{this.STATES[e][a].textContent=c,a==="memberNameSpan"&&this.STATES[e][a].setAttribute("data-label",c)},this.container=t,this.bindMethods(),this.initStates()}changeState(t){this.hideAll(),this.STATES[t].div.style.display="flex",this.container.setAttribute("data-showstate",t)}hideAll(){for(const t in this.STATES)this.STATES[t].hasOwnProperty("div")&&this.STATES[t].div!==null&&(this.STATES[t].div.style.display="none")}bindMethods(){this.changeState=this.changeState.bind(this),this.hideAll=this.hideAll.bind(this),this.initStates=this.initStates.bind(this),this.initInitialState=this.initInitialState.bind(this)}initStates(){this.initEmptyState(),this.initLoginButtonState(),this.initProfileBarState(),this.initInitialState()}initInitialState(){var t=this;return s()(function*(){t.changeState("empty");try{const e=yield window.dmAPI.getLoggedInMember();t.updateText({state:"profileBar",element:"memberNameSpan",text:`${e.memberInfo.firstname} ${e.memberInfo.lastname}`}),t.changeState("profileBar")}catch(e){t.changeState("loginButton")}})()}initEmptyState(){this.STATES.empty.div=this.container.querySelector(".empty-state")}initLoginButtonState(){this.STATES.loginButton.div=this.container.querySelector(".login-button-state")}handleClickLogout(){return s()(function*(){try{yield fetch("/rts/auth/public/users/logout",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),window.location.reload()}catch(t){yield Object(l.b)({logLevel:l.a.WARN,dataString:{message:"Error logging out a user",error:t}})}})()}initProfileBarState(){const t=this.container.querySelector(".profile-bar-state");this.STATES.profileBar.div=t,this.STATES.profileBar.memberNameSpan=t.querySelector("#member-name"),this.STATES.profileBar.logoutLink=t.querySelector(".logout-link"),this.STATES.profileBar.logoutLink.addEventListener("click",this.handleClickLogout)}removeEventListeners(){this.STATES.profileBar.logoutLink.removeEventListener("click",this.handleClickLogout)}}h.displayName="LoginBar"}}])})();
