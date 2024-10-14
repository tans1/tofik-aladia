import{h as H,j as M,m as q,k as G,w as $,l as T,p as g,q as z,s as tt,u as et,v as st,x as nt,y as ot,z as ct,A as rt}from"./vue.esm-bundler-CZ3ueO3F.js";var ut=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let B;const E=t=>B=t,D=Symbol();function I(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function vt(){const t=H(!0),c=t.run(()=>M({}));let s=[],e=[];const r=q({install(u){E(r),r._a=u,u.provide(D,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ut?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const J=()=>{};function F(t,c,s,e=J){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),V=Symbol(),k=Symbol();function L(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];I(r)&&I(e)&&t.hasOwnProperty(s)&&!g(e)&&!z(e)?t[s]=L(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!I(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function lt(t){return!!(g(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let p;function b(){a||(s.state.value[t]=r?r():{});const v=ct(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((S,d)=>(S[d]=q(rt(()=>{E(s);const m=s._s.get(t);return f[d].call(m,m)})),S),{}))}return p=K(t,b,c,s,e,!0),p}function K(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),p={deep:!0};let b,v,S=[],d=[],m;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),M({});let W;function N(o){let n;b=v=!1,typeof o=="function"?(o(e.state.value[t]),n={type:x.patchFunction,storeId:t,events:m}):(L(e.state.value[t],o),n={type:x.patchObject,payload:o,storeId:t,events:m});const i=W=Symbol();ot().then(()=>{W===i&&(b=!0)}),v=!0,P(S,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:J;function U(){f.stop(),S=[],d=[],e._s.delete(t)}const A=(o,n="")=>{if(V in o)return o[k]=n,o;const i=function(){E(e);const j=Array.from(arguments),O=[],R=[];function Y(l){O.push(l)}function Z(l){R.push(l)}P(d,{args:j,name:i[k],store:h,after:Y,onError:Z});let w;try{w=o.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(R,l),l}return w instanceof Promise?w.then(l=>(P(O,l),l)).catch(l=>(P(R,l),Promise.reject(l))):(P(O,w),w)};return i[V]=!0,i[k]=n,i},X={_p:e,$id:t,$onAction:F.bind(null,d),$patch:N,$reset:Q,$subscribe(o,n={}){const i=F(S,o,n.detached,()=>j()),j=f.run(()=>$(()=>e.state.value[t],O=>{(n.flush==="sync"?v:b)&&o({storeId:t,type:x.direct,events:m},O)},y({},p,n)));return i},$dispose:U},h=T(X);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=H()).run(()=>c({action:A}))));for(const o in C){const n=C[o];if(g(n)&&!lt(n)||z(n))u||(_&&it(n)&&(g(n)?n.value=_[o]:L(n,_[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const i=A(n,o);C[o]=i,a.actions[o]=n}}return y(h,C),y(tt(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),_&&u&&s.hydrate&&s.hydrate(h.$state,_),b=!0,v=!0,h}function St(t,c,s){let e,r;const u=typeof c=="function";e=t,r=u?s:c;function f(a,p){const b=et();return a=a||(b?G(D,null):null),a&&E(a),a=B,a._s.has(e)||(u?K(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{vt as c,St as d};
