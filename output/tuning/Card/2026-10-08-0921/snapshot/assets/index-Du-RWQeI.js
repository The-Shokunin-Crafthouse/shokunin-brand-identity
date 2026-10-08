(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function l(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(p){if(p.ep)return;p.ep=!0;const h=l(p);fetch(p.href,h)}})();function Df(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pl={exports:{}},po={},Rl={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function Vf(){if(Bu)return xe;Bu=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),L=Symbol.iterator;function j(k){return k===null||typeof k!="object"?null:(k=L&&k[L]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,P={};function U(k,F,fe){this.props=k,this.context=F,this.refs=P,this.updater=fe||N}U.prototype.isReactComponent={},U.prototype.setState=function(k,F){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,F,"setState")},U.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Y(){}Y.prototype=U.prototype;function re(k,F,fe){this.props=k,this.context=F,this.refs=P,this.updater=fe||N}var ee=re.prototype=new Y;ee.constructor=re,V(ee,U.prototype),ee.isPureReactComponent=!0;var q=Array.isArray,se=Object.prototype.hasOwnProperty,O={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function he(k,F,fe){var ve,be={},ke=null,je=null;if(F!=null)for(ve in F.ref!==void 0&&(je=F.ref),F.key!==void 0&&(ke=""+F.key),F)se.call(F,ve)&&!K.hasOwnProperty(ve)&&(be[ve]=F[ve]);var Ee=arguments.length-2;if(Ee===1)be.children=fe;else if(1<Ee){for(var ze=Array(Ee),De=0;De<Ee;De++)ze[De]=arguments[De+2];be.children=ze}if(k&&k.defaultProps)for(ve in Ee=k.defaultProps,Ee)be[ve]===void 0&&(be[ve]=Ee[ve]);return{$$typeof:s,type:k,key:ke,ref:je,props:be,_owner:O.current}}function ue(k,F){return{$$typeof:s,type:k.type,key:F,ref:k.ref,props:k.props,_owner:k._owner}}function ie(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function ce(k){var F={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(fe){return F[fe]})}var Z=/\/+/g;function D(k,F){return typeof k=="object"&&k!==null&&k.key!=null?ce(""+k.key):F.toString(36)}function $(k,F,fe,ve,be){var ke=typeof k;(ke==="undefined"||ke==="boolean")&&(k=null);var je=!1;if(k===null)je=!0;else switch(ke){case"string":case"number":je=!0;break;case"object":switch(k.$$typeof){case s:case i:je=!0}}if(je)return je=k,be=be(je),k=ve===""?"."+D(je,0):ve,q(be)?(fe="",k!=null&&(fe=k.replace(Z,"$&/")+"/"),$(be,F,fe,"",function(De){return De})):be!=null&&(ie(be)&&(be=ue(be,fe+(!be.key||je&&je.key===be.key?"":(""+be.key).replace(Z,"$&/")+"/")+k)),F.push(be)),1;if(je=0,ve=ve===""?".":ve+":",q(k))for(var Ee=0;Ee<k.length;Ee++){ke=k[Ee];var ze=ve+D(ke,Ee);je+=$(ke,F,fe,ze,be)}else if(ze=j(k),typeof ze=="function")for(k=ze.call(k),Ee=0;!(ke=k.next()).done;)ke=ke.value,ze=ve+D(ke,Ee++),je+=$(ke,F,fe,ze,be);else if(ke==="object")throw F=String(k),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return je}function we(k,F,fe){if(k==null)return k;var ve=[],be=0;return $(k,ve,"","",function(ke){return F.call(fe,ke,be++)}),ve}function me(k){if(k._status===-1){var F=k._result;F=F(),F.then(function(fe){(k._status===0||k._status===-1)&&(k._status=1,k._result=fe)},function(fe){(k._status===0||k._status===-1)&&(k._status=2,k._result=fe)}),k._status===-1&&(k._status=0,k._result=F)}if(k._status===1)return k._result.default;throw k._result}var pe={current:null},W={transition:null},oe={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:W,ReactCurrentOwner:O};function Q(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:we,forEach:function(k,F,fe){we(k,function(){F.apply(this,arguments)},fe)},count:function(k){var F=0;return we(k,function(){F++}),F},toArray:function(k){return we(k,function(F){return F})||[]},only:function(k){if(!ie(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xe.Component=U,xe.Fragment=l,xe.Profiler=p,xe.PureComponent=re,xe.StrictMode=c,xe.Suspense=w,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,xe.act=Q,xe.cloneElement=function(k,F,fe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ve=V({},k.props),be=k.key,ke=k.ref,je=k._owner;if(F!=null){if(F.ref!==void 0&&(ke=F.ref,je=O.current),F.key!==void 0&&(be=""+F.key),k.type&&k.type.defaultProps)var Ee=k.type.defaultProps;for(ze in F)se.call(F,ze)&&!K.hasOwnProperty(ze)&&(ve[ze]=F[ze]===void 0&&Ee!==void 0?Ee[ze]:F[ze])}var ze=arguments.length-2;if(ze===1)ve.children=fe;else if(1<ze){Ee=Array(ze);for(var De=0;De<ze;De++)Ee[De]=arguments[De+2];ve.children=Ee}return{$$typeof:s,type:k.type,key:be,ref:ke,props:ve,_owner:je}},xe.createContext=function(k){return k={$$typeof:g,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:h,_context:k},k.Consumer=k},xe.createElement=he,xe.createFactory=function(k){var F=he.bind(null,k);return F.type=k,F},xe.createRef=function(){return{current:null}},xe.forwardRef=function(k){return{$$typeof:v,render:k}},xe.isValidElement=ie,xe.lazy=function(k){return{$$typeof:z,_payload:{_status:-1,_result:k},_init:me}},xe.memo=function(k,F){return{$$typeof:E,type:k,compare:F===void 0?null:F}},xe.startTransition=function(k){var F=W.transition;W.transition={};try{k()}finally{W.transition=F}},xe.unstable_act=Q,xe.useCallback=function(k,F){return pe.current.useCallback(k,F)},xe.useContext=function(k){return pe.current.useContext(k)},xe.useDebugValue=function(){},xe.useDeferredValue=function(k){return pe.current.useDeferredValue(k)},xe.useEffect=function(k,F){return pe.current.useEffect(k,F)},xe.useId=function(){return pe.current.useId()},xe.useImperativeHandle=function(k,F,fe){return pe.current.useImperativeHandle(k,F,fe)},xe.useInsertionEffect=function(k,F){return pe.current.useInsertionEffect(k,F)},xe.useLayoutEffect=function(k,F){return pe.current.useLayoutEffect(k,F)},xe.useMemo=function(k,F){return pe.current.useMemo(k,F)},xe.useReducer=function(k,F,fe){return pe.current.useReducer(k,F,fe)},xe.useRef=function(k){return pe.current.useRef(k)},xe.useState=function(k){return pe.current.useState(k)},xe.useSyncExternalStore=function(k,F,fe){return pe.current.useSyncExternalStore(k,F,fe)},xe.useTransition=function(){return pe.current.useTransition()},xe.version="18.3.1",xe}var Uu;function Xl(){return Uu||(Uu=1,Rl.exports=Vf()),Rl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function If(){if(Wu)return po;Wu=1;var s=Xl(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function g(v,w,E){var z,L={},j=null,N=null;E!==void 0&&(j=""+E),w.key!==void 0&&(j=""+w.key),w.ref!==void 0&&(N=w.ref);for(z in w)c.call(w,z)&&!h.hasOwnProperty(z)&&(L[z]=w[z]);if(v&&v.defaultProps)for(z in w=v.defaultProps,w)L[z]===void 0&&(L[z]=w[z]);return{$$typeof:i,type:v,key:j,ref:N,props:L,_owner:p.current}}return po.Fragment=l,po.jsx=g,po.jsxs=g,po}var Ku;function Zf(){return Ku||(Ku=1,Pl.exports=If()),Pl.exports}var f=Zf(),d=Xl(),Fs={},Tl={exports:{}},lt={},$l={exports:{}},Hl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu;function Bf(){return Qu||(Qu=1,(function(s){function i(W,oe){var Q=W.length;W.push(oe);e:for(;0<Q;){var k=Q-1>>>1,F=W[k];if(0<p(F,oe))W[k]=oe,W[Q]=F,Q=k;else break e}}function l(W){return W.length===0?null:W[0]}function c(W){if(W.length===0)return null;var oe=W[0],Q=W.pop();if(Q!==oe){W[0]=Q;e:for(var k=0,F=W.length,fe=F>>>1;k<fe;){var ve=2*(k+1)-1,be=W[ve],ke=ve+1,je=W[ke];if(0>p(be,Q))ke<F&&0>p(je,be)?(W[k]=je,W[ke]=Q,k=ke):(W[k]=be,W[ve]=Q,k=ve);else if(ke<F&&0>p(je,Q))W[k]=je,W[ke]=Q,k=ke;else break e}}return oe}function p(W,oe){var Q=W.sortIndex-oe.sortIndex;return Q!==0?Q:W.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var g=Date,v=g.now();s.unstable_now=function(){return g.now()-v}}var w=[],E=[],z=1,L=null,j=3,N=!1,V=!1,P=!1,U=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(W){for(var oe=l(E);oe!==null;){if(oe.callback===null)c(E);else if(oe.startTime<=W)c(E),oe.sortIndex=oe.expirationTime,i(w,oe);else break;oe=l(E)}}function q(W){if(P=!1,ee(W),!V)if(l(w)!==null)V=!0,me(se);else{var oe=l(E);oe!==null&&pe(q,oe.startTime-W)}}function se(W,oe){V=!1,P&&(P=!1,Y(he),he=-1),N=!0;var Q=j;try{for(ee(oe),L=l(w);L!==null&&(!(L.expirationTime>oe)||W&&!ce());){var k=L.callback;if(typeof k=="function"){L.callback=null,j=L.priorityLevel;var F=k(L.expirationTime<=oe);oe=s.unstable_now(),typeof F=="function"?L.callback=F:L===l(w)&&c(w),ee(oe)}else c(w);L=l(w)}if(L!==null)var fe=!0;else{var ve=l(E);ve!==null&&pe(q,ve.startTime-oe),fe=!1}return fe}finally{L=null,j=Q,N=!1}}var O=!1,K=null,he=-1,ue=5,ie=-1;function ce(){return!(s.unstable_now()-ie<ue)}function Z(){if(K!==null){var W=s.unstable_now();ie=W;var oe=!0;try{oe=K(!0,W)}finally{oe?D():(O=!1,K=null)}}else O=!1}var D;if(typeof re=="function")D=function(){re(Z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,we=$.port2;$.port1.onmessage=Z,D=function(){we.postMessage(null)}}else D=function(){U(Z,0)};function me(W){K=W,O||(O=!0,D())}function pe(W,oe){he=U(function(){W(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){V||N||(V=!0,me(se))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return j},s.unstable_getFirstCallbackNode=function(){return l(w)},s.unstable_next=function(W){switch(j){case 1:case 2:case 3:var oe=3;break;default:oe=j}var Q=j;j=oe;try{return W()}finally{j=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,oe){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Q=j;j=W;try{return oe()}finally{j=Q}},s.unstable_scheduleCallback=function(W,oe,Q){var k=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?k+Q:k):Q=k,W){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Q+F,W={id:z++,callback:oe,priorityLevel:W,startTime:Q,expirationTime:F,sortIndex:-1},Q>k?(W.sortIndex=Q,i(E,W),l(w)===null&&W===l(E)&&(P?(Y(he),he=-1):P=!0,pe(q,Q-k))):(W.sortIndex=F,i(w,W),V||N||(V=!0,me(se))),W},s.unstable_shouldYield=ce,s.unstable_wrapCallback=function(W){var oe=j;return function(){var Q=j;j=oe;try{return W.apply(this,arguments)}finally{j=Q}}}})(Hl)),Hl}var Gu;function Uf(){return Gu||(Gu=1,$l.exports=Bf()),$l.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function Wf(){if(qu)return lt;qu=1;var s=Xl(),i=Uf();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function h(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},L={};function j(e){return w.call(L,e)?!0:w.call(z,e)?!1:E.test(e)?L[e]=!0:(z[e]=!0,!1)}function N(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||N(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function P(e,t,n,r,o,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new P(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function re(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y,re);U[t]=new P(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y,re);U[t]=new P(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y,re);U[t]=new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var o=U.hasOwnProperty(t)?U[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,o,r)&&(n=null),r||o===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var q=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),O=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),ce=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),W=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,k;function F(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var fe=!1;function ve(e,t){if(!e||fe)return"";fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var o=C.stack.split(`
`),a=r.stack.split(`
`),u=o.length-1,m=a.length-1;1<=u&&0<=m&&o[u]!==a[m];)m--;for(;1<=u&&0<=m;u--,m--)if(o[u]!==a[m]){if(u!==1||m!==1)do if(u--,m--,0>m||o[u]!==a[m]){var x=`
`+o[u].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=u&&0<=m);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function be(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case O:return"Portal";case ue:return"Profiler";case he:return"StrictMode";case D:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ce:return(e.displayName||"Context")+".Consumer";case ie:return(e._context.displayName||"Context")+".Provider";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=ze(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=De(e))}function wo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ze(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sr(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ee(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Un(e,t){t=t.checked,t!=null&&ee(e,"checked",t,!1)}function Wn(e,t){Un(e,t);var n=Ee(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kn(e,t.type,Ee(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ko(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kn(e,t,n){(t!=="number"||Ln(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qt=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ee(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Er(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ee(n)}}function Cr(e,t){var n=Ee(t.value),r=Ee(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _o(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function b(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?b(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var A,ye=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(A=A||document.createElement("div"),A.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=A.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ge(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(e){tt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Le[t]=Le[e]})});function Ot(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Le.hasOwnProperty(e)&&Le[e]?(""+t).trim():t+"px"}function Lo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ot(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var So=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ws(e,t){if(t){if(So[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Qn=null,Gn=null;function li(e){if(e=qr(e)){if(typeof qs!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Qo(t),qs(e.stateNode,e.type,t))}}function ii(e){Qn?Gn?Gn.push(e):Gn=[e]:Qn=e}function ci(){if(Qn){var e=Qn,t=Gn;if(Gn=Qn=null,li(e),t)for(e=0;e<t.length;e++)li(t[e])}}function ui(e,t){return e(t)}function di(){}var Ys=!1;function pi(e,t,n){if(Ys)return e(t,n);Ys=!0;try{return ui(e,t,n)}finally{Ys=!1,(Qn!==null||Gn!==null)&&(di(),ci())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Js=!1;if(v)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Js=!1}function Ud(e,t,n,r,o,a,u,m,x){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(H){this.onError(H)}}var Nr=!1,Eo=null,zo=!1,Xs=null,Wd={onError:function(e){Nr=!0,Eo=e}};function Kd(e,t,n,r,o,a,u,m,x){Nr=!1,Eo=null,Ud.apply(Wd,arguments)}function Qd(e,t,n,r,o,a,u,m,x){if(Kd.apply(this,arguments),Nr){if(Nr){var C=Eo;Nr=!1,Eo=null}else throw Error(l(198));zo||(zo=!0,Xs=C)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hi(e){if(Sn(e)!==e)throw Error(l(188))}function Gd(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return hi(o),e;if(a===r)return hi(o),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=o,r=a;else{for(var u=!1,m=o.child;m;){if(m===n){u=!0,n=o,r=a;break}if(m===r){u=!0,r=o,n=a;break}m=m.sibling}if(!u){for(m=a.child;m;){if(m===n){u=!0,n=a,r=o;break}if(m===r){u=!0,r=a,n=o;break}m=m.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function mi(e){return e=Gd(e),e!==null?gi(e):null}function gi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gi(e);if(t!==null)return t;e=e.sibling}return null}var vi=i.unstable_scheduleCallback,xi=i.unstable_cancelCallback,qd=i.unstable_shouldYield,Yd=i.unstable_requestPaint,$e=i.unstable_now,Jd=i.unstable_getCurrentPriorityLevel,ea=i.unstable_ImmediatePriority,yi=i.unstable_UserBlockingPriority,Co=i.unstable_NormalPriority,Xd=i.unstable_LowPriority,wi=i.unstable_IdlePriority,jo=null,Ft=null;function ep(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:rp,tp=Math.log,np=Math.LN2;function rp(e){return e>>>=0,e===0?32:31-(tp(e)/np|0)|0}var Mo=64,No=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,u=n&268435455;if(u!==0){var m=u&~o;m!==0?r=Ar(m):(a&=u,a!==0&&(r=Ar(a)))}else u=n&~o,u!==0?r=Ar(u):a!==0&&(r=Ar(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),o=1<<n,r|=e[n],t&=~o;return r}function op(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-_t(a),m=1<<u,x=o[u];x===-1?((m&n)===0||(m&r)!==0)&&(o[u]=op(m,t)):x<=t&&(e.expiredLanes|=m),a&=~m}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bi(){var e=Mo;return Mo<<=1,(Mo&4194240)===0&&(Mo=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-_t(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ce=0;function ki(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var _i,oa,Li,Si,Ei,sa=!1,Fo=[],Jt=null,Xt=null,en=null,Pr=new Map,Rr=new Map,tn=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zi(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Tr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ip(e,t,n,r,o){switch(t){case"focusin":return Jt=Tr(Jt,e,t,n,r,o),!0;case"dragenter":return Xt=Tr(Xt,e,t,n,r,o),!0;case"mouseover":return en=Tr(en,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Pr.set(a,Tr(Pr.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Rr.set(a,Tr(Rr.get(a)||null,e,t,n,r,o)),!0}return!1}function Ci(e){var t=En(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=fi(n),t!==null){e.blockedOn=t,Ei(e.priority,function(){Li(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=la(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=qr(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function ji(e,t,n){Po(e)&&n.delete(t)}function cp(){sa=!1,Jt!==null&&Po(Jt)&&(Jt=null),Xt!==null&&Po(Xt)&&(Xt=null),en!==null&&Po(en)&&(en=null),Pr.forEach(ji),Rr.forEach(ji)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,sa||(sa=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,cp)))}function Hr(e){function t(o){return $r(o,e)}if(0<Fo.length){$r(Fo[0],e);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&$r(Jt,e),Xt!==null&&$r(Xt,e),en!==null&&$r(en,e),Pr.forEach(t),Rr.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Ci(n),n.blockedOn===null&&tn.shift()}var qn=q.ReactCurrentBatchConfig,Ro=!0;function up(e,t,n,r){var o=Ce,a=qn.transition;qn.transition=null;try{Ce=1,aa(e,t,n,r)}finally{Ce=o,qn.transition=a}}function dp(e,t,n,r){var o=Ce,a=qn.transition;qn.transition=null;try{Ce=4,aa(e,t,n,r)}finally{Ce=o,qn.transition=a}}function aa(e,t,n,r){if(Ro){var o=la(e,t,n,r);if(o===null)La(e,t,r,To,n),zi(e,r);else if(ip(o,e,t,n,r))r.stopPropagation();else if(zi(e,r),t&4&&-1<lp.indexOf(e)){for(;o!==null;){var a=qr(o);if(a!==null&&_i(a),a=la(e,t,n,r),a===null&&La(e,t,r,To,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else La(e,t,r,null,n)}}var To=null;function la(e,t,n,r){if(To=null,e=Gs(r),e=En(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function Mi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jd()){case ea:return 1;case yi:return 4;case Co:case Xd:return 16;case wi:return 536870912;default:return 16}default:return 16}}var nn=null,ia=null,$o=null;function Ni(){if($o)return $o;var e,t=ia,n=t.length,r,o="value"in nn?nn.value:nn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[a-r];r++);return $o=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Ai(){return!1}function ct(e){function t(n,r,o,a,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Oo:Ai,this.isPropagationStopped=Ai,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=ct(Yn),Or=Q({},Yn,{view:0,detail:0}),pp=ct(Or),ua,da,Dr,Do=Q({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(ua=e.screenX-Dr.screenX,da=e.screenY-Dr.screenY):da=ua=0,Dr=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Fi=ct(Do),fp=Q({},Do,{dataTransfer:0}),hp=ct(fp),mp=Q({},Or,{relatedTarget:0}),pa=ct(mp),gp=Q({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=ct(gp),xp=Q({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yp=ct(xp),wp=Q({},Yn,{data:0}),Pi=ct(wp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_p[e])?!!t[e]:!1}function fa(){return Lp}var Sp=Q({},Or,{key:function(e){if(e.key){var t=bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ep=ct(Sp),zp=Q({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ri=ct(zp),Cp=Q({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),jp=ct(Cp),Mp=Q({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Np=ct(Mp),Ap=Q({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fp=ct(Ap),Pp=[9,13,27,32],ha=v&&"CompositionEvent"in window,Vr=null;v&&"documentMode"in document&&(Vr=document.documentMode);var Rp=v&&"TextEvent"in window&&!Vr,Ti=v&&(!ha||Vr&&8<Vr&&11>=Vr),$i=" ",Hi=!1;function Oi(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Di(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Tp(e,t){switch(e){case"compositionend":return Di(t);case"keypress":return t.which!==32?null:(Hi=!0,$i);case"textInput":return e=t.data,e===$i&&Hi?null:e;default:return null}}function $p(e,t){if(Jn)return e==="compositionend"||!ha&&Oi(e,t)?(e=Ni(),$o=ia=nn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ti&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hp[e.type]:t==="textarea"}function Ii(e,t,n,r){ii(r),t=Uo(t,"onChange"),0<t.length&&(n=new ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Zr=null;function Op(e){ac(e,0)}function Vo(e){var t=rr(e);if(wo(t))return e}function Dp(e,t){if(e==="change")return t}var Zi=!1;if(v){var ma;if(v){var ga="oninput"in document;if(!ga){var Bi=document.createElement("div");Bi.setAttribute("oninput","return;"),ga=typeof Bi.oninput=="function"}ma=ga}else ma=!1;Zi=ma&&(!document.documentMode||9<document.documentMode)}function Ui(){Ir&&(Ir.detachEvent("onpropertychange",Wi),Zr=Ir=null)}function Wi(e){if(e.propertyName==="value"&&Vo(Zr)){var t=[];Ii(t,Zr,e,Gs(e)),pi(Op,t)}}function Vp(e,t,n){e==="focusin"?(Ui(),Ir=t,Zr=n,Ir.attachEvent("onpropertychange",Wi)):e==="focusout"&&Ui()}function Ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(Zr)}function Zp(e,t){if(e==="click")return Vo(t)}function Bp(e,t){if(e==="input"||e==="change")return Vo(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Up;function Br(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!w.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function Ki(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qi(e,t){var n=Ki(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ki(n)}}function Gi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qi(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ln(e.document)}return t}function va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wp(e){var t=qi(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gi(n.ownerDocument.documentElement,n)){if(r!==null&&va(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Qi(n,a);var u=Qi(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kp=v&&"documentMode"in document&&11>=document.documentMode,Xn=null,xa=null,Ur=null,ya=!1;function Yi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||Xn==null||Xn!==Ln(r)||(r=Xn,"selectionStart"in r&&va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Br(Ur,r)||(Ur=r,r=Uo(xa,"onSelect"),0<r.length&&(t=new ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},wa={},Ji={};v&&(Ji=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Zo(e){if(wa[e])return wa[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ji)return wa[e]=t[n];return e}var Xi=Zo("animationend"),ec=Zo("animationiteration"),tc=Zo("animationstart"),nc=Zo("transitionend"),rc=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){rc.set(e,t),h(t,[e])}for(var ba=0;ba<oc.length;ba++){var ka=oc[ba],Qp=ka.toLowerCase(),Gp=ka[0].toUpperCase()+ka.slice(1);rn(Qp,"on"+Gp)}rn(Xi,"onAnimationEnd"),rn(ec,"onAnimationIteration"),rn(tc,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(nc,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function sc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qd(r,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var m=r[u],x=m.instance,C=m.currentTarget;if(m=m.listener,x!==a&&o.isPropagationStopped())break e;sc(o,m,C),a=x}else for(u=0;u<r.length;u++){if(m=r[u],x=m.instance,C=m.currentTarget,m=m.listener,x!==a&&o.isPropagationStopped())break e;sc(o,m,C),a=x}}}if(zo)throw e=Xs,zo=!1,Xs=null,e}function Ne(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var r=e+"__bubble";n.has(r)||(lc(t,e,2,!1),n.add(r))}function _a(e,t,n){var r=0;t&&(r|=4),lc(n,e,r,t)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[Bo]){e[Bo]=!0,c.forEach(function(n){n!=="selectionchange"&&(qp.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bo]||(t[Bo]=!0,_a("selectionchange",!1,t))}}function lc(e,t,n,r){switch(Mi(t)){case 1:var o=up;break;case 4:o=dp;break;default:o=aa}n=o.bind(null,t,n,e),o=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function La(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var m=r.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var x=u.tag;if((x===3||x===4)&&(x=u.stateNode.containerInfo,x===o||x.nodeType===8&&x.parentNode===o))return;u=u.return}for(;m!==null;){if(u=En(m),u===null)return;if(x=u.tag,x===5||x===6){r=a=u;continue e}m=m.parentNode}}r=r.return}pi(function(){var C=a,H=Gs(n),I=[];e:{var R=rc.get(e);if(R!==void 0){var G=ca,X=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":G=Ep;break;case"focusin":X="focus",G=pa;break;case"focusout":X="blur",G=pa;break;case"beforeblur":case"afterblur":G=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=jp;break;case Xi:case ec:case tc:G=vp;break;case nc:G=Np;break;case"scroll":G=pp;break;case"wheel":G=Fp;break;case"copy":case"cut":case"paste":G=yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Ri}var te=(t&4)!==0,He=!te&&e==="scroll",_=te?R!==null?R+"Capture":null:R;te=[];for(var y=C,S;y!==null;){S=y;var B=S.stateNode;if(S.tag===5&&B!==null&&(S=B,_!==null&&(B=jr(y,_),B!=null&&te.push(Qr(y,B,S)))),He)break;y=y.return}0<te.length&&(R=new G(R,X,null,n,H),I.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",R&&n!==Qs&&(X=n.relatedTarget||n.fromElement)&&(En(X)||X[Dt]))break e;if((G||R)&&(R=H.window===H?H:(R=H.ownerDocument)?R.defaultView||R.parentWindow:window,G?(X=n.relatedTarget||n.toElement,G=C,X=X?En(X):null,X!==null&&(He=Sn(X),X!==He||X.tag!==5&&X.tag!==6)&&(X=null)):(G=null,X=C),G!==X)){if(te=Fi,B="onMouseLeave",_="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ri,B="onPointerLeave",_="onPointerEnter",y="pointer"),He=G==null?R:rr(G),S=X==null?R:rr(X),R=new te(B,y+"leave",G,n,H),R.target=He,R.relatedTarget=S,B=null,En(H)===C&&(te=new te(_,y+"enter",X,n,H),te.target=S,te.relatedTarget=He,B=te),He=B,G&&X)t:{for(te=G,_=X,y=0,S=te;S;S=tr(S))y++;for(S=0,B=_;B;B=tr(B))S++;for(;0<y-S;)te=tr(te),y--;for(;0<S-y;)_=tr(_),S--;for(;y--;){if(te===_||_!==null&&te===_.alternate)break t;te=tr(te),_=tr(_)}te=null}else te=null;G!==null&&ic(I,R,G,te,!1),X!==null&&He!==null&&ic(I,He,X,te,!0)}}e:{if(R=C?rr(C):window,G=R.nodeName&&R.nodeName.toLowerCase(),G==="select"||G==="input"&&R.type==="file")var ne=Dp;else if(Vi(R))if(Zi)ne=Bp;else{ne=Ip;var ae=Vp}else(G=R.nodeName)&&G.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(ne=Zp);if(ne&&(ne=ne(e,C))){Ii(I,ne,n,H);break e}ae&&ae(e,R,C),e==="focusout"&&(ae=R._wrapperState)&&ae.controlled&&R.type==="number"&&Kn(R,"number",R.value)}switch(ae=C?rr(C):window,e){case"focusin":(Vi(ae)||ae.contentEditable==="true")&&(Xn=ae,xa=C,Ur=null);break;case"focusout":Ur=xa=Xn=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Yi(I,n,H);break;case"selectionchange":if(Kp)break;case"keydown":case"keyup":Yi(I,n,H)}var le;if(ha)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Jn?Oi(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(Ti&&n.locale!=="ko"&&(Jn||de!=="onCompositionStart"?de==="onCompositionEnd"&&Jn&&(le=Ni()):(nn=H,ia="value"in nn?nn.value:nn.textContent,Jn=!0)),ae=Uo(C,de),0<ae.length&&(de=new Pi(de,e,null,n,H),I.push({event:de,listeners:ae}),le?de.data=le:(le=Di(n),le!==null&&(de.data=le)))),(le=Rp?Tp(e,n):$p(e,n))&&(C=Uo(C,"onBeforeInput"),0<C.length&&(H=new Pi("onBeforeInput","beforeinput",null,n,H),I.push({event:H,listeners:C}),H.data=le))}ac(I,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=jr(e,n),a!=null&&r.unshift(Qr(e,a,o)),a=jr(e,t),a!=null&&r.push(Qr(e,a,o))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ic(e,t,n,r,o){for(var a=t._reactName,u=[];n!==null&&n!==r;){var m=n,x=m.alternate,C=m.stateNode;if(x!==null&&x===r)break;m.tag===5&&C!==null&&(m=C,o?(x=jr(n,a),x!=null&&u.unshift(Qr(n,x,m))):o||(x=jr(n,a),x!=null&&u.push(Qr(n,x,m)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Yp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function cc(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Jp,"")}function Wo(e,t,n){if(t=cc(t),cc(e)!==t&&n)throw Error(l(425))}function Ko(){}var Sa=null,Ea=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(e){return uc.resolve(null).then(e).catch(tf)}:Ca;function tf(e){setTimeout(function(){throw e})}function ja(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+nr,Gr="__reactProps$"+nr,Dt="__reactContainer$"+nr,Ma="__reactEvents$"+nr,nf="__reactListeners$"+nr,rf="__reactHandles$"+nr;function En(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dc(e);e!==null;){if(n=e[Pt])return n;e=dc(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[Pt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Qo(e){return e[Gr]||null}var Na=[],or=-1;function sn(e){return{current:e}}function Ae(e){0>or||(e.current=Na[or],Na[or]=null,or--)}function Me(e,t){or++,Na[or]=e.current,e.current=t}var an={},Qe=sn(an),nt=sn(!1),zn=an;function sr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function Go(){Ae(nt),Ae(Qe)}function pc(e,t,n){if(Qe.current!==an)throw Error(l(168));Me(Qe,t),Me(nt,n)}function fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(l(108,je(e)||"Unknown",o));return Q({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,zn=Qe.current,Me(Qe,e),Me(nt,nt.current),!0}function hc(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=fc(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,Ae(nt),Ae(Qe),Me(Qe,e)):Ae(nt),Me(nt,n)}var Vt=null,Yo=!1,Aa=!1;function mc(e){Vt===null?Vt=[e]:Vt.push(e)}function of(e){Yo=!0,mc(e)}function ln(){if(!Aa&&Vt!==null){Aa=!0;var e=0,t=Ce;try{var n=Vt;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Yo=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),vi(ea,ln),o}finally{Ce=t,Aa=!1}}return null}var ar=[],lr=0,Jo=null,Xo=0,ht=[],mt=0,Cn=null,It=1,Zt="";function jn(e,t){ar[lr++]=Xo,ar[lr++]=Jo,Jo=e,Xo=t}function gc(e,t,n){ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=Cn,Cn=e;var r=It;e=Zt;var o=32-_t(r)-1;r&=~(1<<o),n+=1;var a=32-_t(t)+o;if(30<a){var u=o-o%5;a=(r&(1<<u)-1).toString(32),r>>=u,o-=u,It=1<<32-_t(t)+o|n<<o|r,Zt=a+e}else It=1<<a|n<<o|r,Zt=e}function Fa(e){e.return!==null&&(jn(e,1),gc(e,1,0))}function Pa(e){for(;e===Jo;)Jo=ar[--lr],ar[lr]=null,Xo=ar[--lr],ar[lr]=null;for(;e===Cn;)Cn=ht[--mt],ht[mt]=null,Zt=ht[--mt],ht[mt]=null,It=ht[--mt],ht[mt]=null}var ut=null,dt=null,Fe=!1,St=null;function vc(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:It,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,dt=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(Fe){var t=dt;if(t){var n=t;if(!xc(e,t)){if(Ra(e))throw Error(l(418));t=on(n.nextSibling);var r=ut;t&&xc(e,t)?vc(r,n):(e.flags=e.flags&-4097|2,Fe=!1,ut=e)}}else{if(Ra(e))throw Error(l(418));e.flags=e.flags&-4097|2,Fe=!1,ut=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function es(e){if(e!==ut)return!1;if(!Fe)return yc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=dt)){if(Ra(e))throw wc(),Error(l(418));for(;t;)vc(e,t),t=on(t.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?on(e.stateNode.nextSibling):null;return!0}function wc(){for(var e=dt;e;)e=on(e.nextSibling)}function ir(){dt=ut=null,Fe=!1}function $a(e){St===null?St=[e]:St.push(e)}var sf=q.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var m=o.refs;u===null?delete m[a]:m[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function kc(e){function t(_,y){if(e){var S=_.deletions;S===null?(_.deletions=[y],_.flags|=16):S.push(y)}}function n(_,y){if(!e)return null;for(;y!==null;)t(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function o(_,y){return _=gn(_,y),_.index=0,_.sibling=null,_}function a(_,y,S){return _.index=S,e?(S=_.alternate,S!==null?(S=S.index,S<y?(_.flags|=2,y):S):(_.flags|=2,y)):(_.flags|=1048576,y)}function u(_){return e&&_.alternate===null&&(_.flags|=2),_}function m(_,y,S,B){return y===null||y.tag!==6?(y=Cl(S,_.mode,B),y.return=_,y):(y=o(y,S),y.return=_,y)}function x(_,y,S,B){var ne=S.type;return ne===K?H(_,y,S.props.children,B,S.key):y!==null&&(y.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===me&&bc(ne)===y.type)?(B=o(y,S.props),B.ref=Yr(_,y,S),B.return=_,B):(B=Ss(S.type,S.key,S.props,null,_.mode,B),B.ref=Yr(_,y,S),B.return=_,B)}function C(_,y,S,B){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=jl(S,_.mode,B),y.return=_,y):(y=o(y,S.children||[]),y.return=_,y)}function H(_,y,S,B,ne){return y===null||y.tag!==7?(y=$n(S,_.mode,B,ne),y.return=_,y):(y=o(y,S),y.return=_,y)}function I(_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Cl(""+y,_.mode,S),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case se:return S=Ss(y.type,y.key,y.props,null,_.mode,S),S.ref=Yr(_,null,y),S.return=_,S;case O:return y=jl(y,_.mode,S),y.return=_,y;case me:var B=y._init;return I(_,B(y._payload),S)}if(qt(y)||oe(y))return y=$n(y,_.mode,S,null),y.return=_,y;ts(_,y)}return null}function R(_,y,S,B){var ne=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return ne!==null?null:m(_,y,""+S,B);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case se:return S.key===ne?x(_,y,S,B):null;case O:return S.key===ne?C(_,y,S,B):null;case me:return ne=S._init,R(_,y,ne(S._payload),B)}if(qt(S)||oe(S))return ne!==null?null:H(_,y,S,B,null);ts(_,S)}return null}function G(_,y,S,B,ne){if(typeof B=="string"&&B!==""||typeof B=="number")return _=_.get(S)||null,m(y,_,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case se:return _=_.get(B.key===null?S:B.key)||null,x(y,_,B,ne);case O:return _=_.get(B.key===null?S:B.key)||null,C(y,_,B,ne);case me:var ae=B._init;return G(_,y,S,ae(B._payload),ne)}if(qt(B)||oe(B))return _=_.get(S)||null,H(y,_,B,ne,null);ts(y,B)}return null}function X(_,y,S,B){for(var ne=null,ae=null,le=y,de=y=0,Ue=null;le!==null&&de<S.length;de++){le.index>de?(Ue=le,le=null):Ue=le.sibling;var Se=R(_,le,S[de],B);if(Se===null){le===null&&(le=Ue);break}e&&le&&Se.alternate===null&&t(_,le),y=a(Se,y,de),ae===null?ne=Se:ae.sibling=Se,ae=Se,le=Ue}if(de===S.length)return n(_,le),Fe&&jn(_,de),ne;if(le===null){for(;de<S.length;de++)le=I(_,S[de],B),le!==null&&(y=a(le,y,de),ae===null?ne=le:ae.sibling=le,ae=le);return Fe&&jn(_,de),ne}for(le=r(_,le);de<S.length;de++)Ue=G(le,_,de,S[de],B),Ue!==null&&(e&&Ue.alternate!==null&&le.delete(Ue.key===null?de:Ue.key),y=a(Ue,y,de),ae===null?ne=Ue:ae.sibling=Ue,ae=Ue);return e&&le.forEach(function(vn){return t(_,vn)}),Fe&&jn(_,de),ne}function te(_,y,S,B){var ne=oe(S);if(typeof ne!="function")throw Error(l(150));if(S=ne.call(S),S==null)throw Error(l(151));for(var ae=ne=null,le=y,de=y=0,Ue=null,Se=S.next();le!==null&&!Se.done;de++,Se=S.next()){le.index>de?(Ue=le,le=null):Ue=le.sibling;var vn=R(_,le,Se.value,B);if(vn===null){le===null&&(le=Ue);break}e&&le&&vn.alternate===null&&t(_,le),y=a(vn,y,de),ae===null?ne=vn:ae.sibling=vn,ae=vn,le=Ue}if(Se.done)return n(_,le),Fe&&jn(_,de),ne;if(le===null){for(;!Se.done;de++,Se=S.next())Se=I(_,Se.value,B),Se!==null&&(y=a(Se,y,de),ae===null?ne=Se:ae.sibling=Se,ae=Se);return Fe&&jn(_,de),ne}for(le=r(_,le);!Se.done;de++,Se=S.next())Se=G(le,_,de,Se.value,B),Se!==null&&(e&&Se.alternate!==null&&le.delete(Se.key===null?de:Se.key),y=a(Se,y,de),ae===null?ne=Se:ae.sibling=Se,ae=Se);return e&&le.forEach(function(Of){return t(_,Of)}),Fe&&jn(_,de),ne}function He(_,y,S,B){if(typeof S=="object"&&S!==null&&S.type===K&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case se:e:{for(var ne=S.key,ae=y;ae!==null;){if(ae.key===ne){if(ne=S.type,ne===K){if(ae.tag===7){n(_,ae.sibling),y=o(ae,S.props.children),y.return=_,_=y;break e}}else if(ae.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===me&&bc(ne)===ae.type){n(_,ae.sibling),y=o(ae,S.props),y.ref=Yr(_,ae,S),y.return=_,_=y;break e}n(_,ae);break}else t(_,ae);ae=ae.sibling}S.type===K?(y=$n(S.props.children,_.mode,B,S.key),y.return=_,_=y):(B=Ss(S.type,S.key,S.props,null,_.mode,B),B.ref=Yr(_,y,S),B.return=_,_=B)}return u(_);case O:e:{for(ae=S.key;y!==null;){if(y.key===ae)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(_,y.sibling),y=o(y,S.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else t(_,y);y=y.sibling}y=jl(S,_.mode,B),y.return=_,_=y}return u(_);case me:return ae=S._init,He(_,y,ae(S._payload),B)}if(qt(S))return X(_,y,S,B);if(oe(S))return te(_,y,S,B);ts(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(_,y.sibling),y=o(y,S),y.return=_,_=y):(n(_,y),y=Cl(S,_.mode,B),y.return=_,_=y),u(_)):n(_,y)}return He}var cr=kc(!0),_c=kc(!1),ns=sn(null),rs=null,ur=null,Ha=null;function Oa(){Ha=ur=rs=null}function Da(e){var t=ns.current;Ae(ns),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){rs=e,Ha=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(rs===null)throw Error(l(308));ur=e,rs.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Mn=null;function Ia(e){Mn===null?Mn=[e]:Mn.push(e)}function Lc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(_e&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,Bt(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ra(e,n)}}function Ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=u:a=a.next=u,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ss(e,t,n,r){var o=e.updateQueue;cn=!1;var a=o.firstBaseUpdate,u=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var x=m,C=x.next;x.next=null,u===null?a=C:u.next=C,u=x;var H=e.alternate;H!==null&&(H=H.updateQueue,m=H.lastBaseUpdate,m!==u&&(m===null?H.firstBaseUpdate=C:m.next=C,H.lastBaseUpdate=x))}if(a!==null){var I=o.baseState;u=0,H=C=x=null,m=a;do{var R=m.lane,G=m.eventTime;if((r&R)===R){H!==null&&(H=H.next={eventTime:G,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var X=e,te=m;switch(R=t,G=n,te.tag){case 1:if(X=te.payload,typeof X=="function"){I=X.call(G,I,R);break e}I=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=te.payload,R=typeof X=="function"?X.call(G,I,R):X,R==null)break e;I=Q({},I,R);break e;case 2:cn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,R=o.effects,R===null?o.effects=[m]:R.push(m))}else G={eventTime:G,lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},H===null?(C=H=G,x=I):H=H.next=G,u|=R;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;R=m,m=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);if(H===null&&(x=I),o.baseState=x,o.firstBaseUpdate=C,o.lastBaseUpdate=H,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Fn|=u,e.lanes=u,e.memoizedState=I}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var Jr={},Rt=sn(Jr),Xr=sn(Jr),eo=sn(Jr);function Nn(e){if(e===Jr)throw Error(l(174));return e}function Ba(e,t){switch(Me(eo,t),Me(Xr,e),Me(Rt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:M(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=M(t,e)}Ae(Rt),Me(Rt,t)}function pr(){Ae(Rt),Ae(Xr),Ae(eo)}function Cc(e){Nn(eo.current);var t=Nn(Rt.current),n=M(t,e.type);t!==n&&(Me(Xr,e),Me(Rt,n))}function Ua(e){Xr.current===e&&(Ae(Rt),Ae(Xr))}var Pe=sn(0);function as(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wa=[];function Ka(){for(var e=0;e<Wa.length;e++)Wa[e]._workInProgressVersionPrimary=null;Wa.length=0}var ls=q.ReactCurrentDispatcher,Qa=q.ReactCurrentBatchConfig,An=0,Re=null,Ve=null,Ze=null,is=!1,to=!1,no=0,af=0;function Ge(){throw Error(l(321))}function Ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function qa(e,t,n,r,o,a){if(An=a,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=e===null||e.memoizedState===null?df:pf,e=n(r,o),to){a=0;do{if(to=!1,no=0,25<=a)throw Error(l(301));a+=1,Ze=Ve=null,t.updateQueue=null,ls.current=ff,e=n(r,o)}while(to)}if(ls.current=ds,t=Ve!==null&&Ve.next!==null,An=0,Ze=Ve=Re=null,is=!1,t)throw Error(l(300));return e}function Ya(){var e=no!==0;return no=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Re.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function vt(){if(Ve===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ze===null?Re.memoizedState:Ze.next;if(t!==null)Ze=t,Ve=e;else{if(e===null)throw Error(l(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ze===null?Re.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ro(e,t){return typeof t=="function"?t(e):t}function Ja(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Ve,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var u=o.next;o.next=a.next,a.next=u}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var m=u=null,x=null,C=a;do{var H=C.lane;if((An&H)===H)x!==null&&(x=x.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var I={lane:H,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};x===null?(m=x=I,u=r):x=x.next=I,Re.lanes|=H,Fn|=H}C=C.next}while(C!==null&&C!==a);x===null?u=r:x.next=m,Lt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=x,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Re.lanes|=a,Fn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xa(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do a=e(a,u.action),u=u.next;while(u!==o);Lt(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function jc(){}function Mc(e,t){var n=Re,r=vt(),o=t(),a=!Lt(r.memoizedState,o);if(a&&(r.memoizedState=o,ot=!0),r=r.queue,el(Fc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,oo(9,Ac.bind(null,n,r,o,t),void 0,null),Be===null)throw Error(l(349));(An&30)!==0||Nc(n,t,o)}return o}function Nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ac(e,t,n,r){t.value=n,t.getSnapshot=r,Pc(t)&&Rc(e)}function Fc(e,t,n){return n(function(){Pc(t)&&Rc(e)})}function Pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Rc(e){var t=Bt(e,1);t!==null&&jt(t,e,1,-1)}function Tc(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,Re,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $c(){return vt().memoizedState}function cs(e,t,n,r){var o=Tt();Re.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function us(e,t,n,r){var o=vt();r=r===void 0?null:r;var a=void 0;if(Ve!==null){var u=Ve.memoizedState;if(a=u.destroy,r!==null&&Ga(r,u.deps)){o.memoizedState=oo(t,n,a,r);return}}Re.flags|=e,o.memoizedState=oo(1|t,n,a,r)}function Hc(e,t){return cs(8390656,8,e,t)}function el(e,t){return us(2048,8,e,t)}function Oc(e,t){return us(4,2,e,t)}function Dc(e,t){return us(4,4,e,t)}function Vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,n){return n=n!=null?n.concat([e]):null,us(4,4,Vc.bind(null,t,e),n)}function tl(){}function Zc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uc(e,t,n){return(An&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(Lt(n,t)||(n=bi(),Re.lanes|=n,Fn|=n,e.baseState=!0),t)}function lf(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=Qa.transition;Qa.transition={};try{e(!1),t()}finally{Ce=n,Qa.transition=r}}function Wc(){return vt().memoizedState}function cf(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kc(e))Qc(t,n);else if(n=Lc(e,t,n,r),n!==null){var o=et();jt(n,e,r,o),Gc(n,t,r)}}function uf(e,t,n){var r=hn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Qc(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,m=a(u,n);if(o.hasEagerState=!0,o.eagerState=m,Lt(m,u)){var x=t.interleaved;x===null?(o.next=o,Ia(t)):(o.next=x.next,x.next=o),t.interleaved=o;return}}catch{}finally{}n=Lc(e,t,o,r),n!==null&&(o=et(),jt(n,e,r,o),Gc(n,t,r))}}function Kc(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Qc(e,t){to=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ra(e,n)}}var ds={readContext:gt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},df={readContext:gt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cs(4194308,4,Vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return cs(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:tl,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=lf.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=Tt();if(Fe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Be===null)throw Error(l(349));(An&30)!==0||Nc(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Hc(Fc.bind(null,r,a,e),[e]),r.flags|=2048,oo(9,Ac.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Be.identifierPrefix;if(Fe){var n=Zt,r=It;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pf={readContext:gt,useCallback:Zc,useContext:gt,useEffect:el,useImperativeHandle:Ic,useInsertionEffect:Oc,useLayoutEffect:Dc,useMemo:Bc,useReducer:Ja,useRef:$c,useState:function(){return Ja(ro)},useDebugValue:tl,useDeferredValue:function(e){var t=vt();return Uc(t,Ve.memoizedState,e)},useTransition:function(){var e=Ja(ro)[0],t=vt().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Mc,useId:Wc,unstable_isNewReconciler:!1},ff={readContext:gt,useCallback:Zc,useContext:gt,useEffect:el,useImperativeHandle:Ic,useInsertionEffect:Oc,useLayoutEffect:Dc,useMemo:Bc,useReducer:Xa,useRef:$c,useState:function(){return Xa(ro)},useDebugValue:tl,useDeferredValue:function(e){var t=vt();return Ve===null?t.memoizedState=e:Uc(t,Ve.memoizedState,e)},useTransition:function(){var e=Xa(ro)[0],t=vt().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Mc,useId:Wc,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ps={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=hn(e),a=Ut(r,o);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(jt(t,e,o,r),os(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=hn(e),a=Ut(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(jt(t,e,o,r),os(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=hn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(jt(t,e,r,n),os(t,e,r))}};function qc(e,t,n,r,o,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(o,a):!0}function Yc(e,t,n){var r=!1,o=an,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(o=rt(t)?zn:Qe.current,r=t.contextTypes,a=(r=r!=null)?sr(e,o):an),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Za(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=gt(a):(a=rt(t)?zn:Qe.current,o.context=sr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(nl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ps.enqueueReplaceState(o,o.state,null),ss(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=be(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Xc(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,wl=r),sl(e,t)},n}function eu(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){sl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cf.bind(null,e,t,n),t.then(e,e))}function nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ru(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var mf=q.ReactCurrentOwner,ot=!1;function Xe(e,t,n,r){t.child=e===null?_c(t,null,n,r):cr(t,e.child,n,r)}function ou(e,t,n,r,o){n=n.render;var a=t.ref;return dr(t,o),r=qa(e,t,n,r,a,o),n=Ya(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&n&&Fa(t),t.flags|=1,Xe(e,t,r,o),t.child)}function su(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!zl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,au(e,t,a,r,o)):(e=Ss(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var u=a.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(u,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function au(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Br(a,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return al(e,t,n,r,o)}function lu(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(mr,pt),pt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(mr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Me(mr,pt),pt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Me(mr,pt),pt|=r;return Xe(e,t,o,n),t.child}function iu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,r,o){var a=rt(n)?zn:Qe.current;return a=sr(t,a),dr(t,o),n=qa(e,t,n,r,a,o),r=Ya(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&r&&Fa(t),t.flags|=1,Xe(e,t,n,o),t.child)}function cu(e,t,n,r,o){if(rt(n)){var a=!0;qo(t)}else a=!1;if(dr(t,o),t.stateNode===null)hs(e,t),Yc(t,n,r),rl(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,m=t.memoizedProps;u.props=m;var x=u.context,C=n.contextType;typeof C=="object"&&C!==null?C=gt(C):(C=rt(n)?zn:Qe.current,C=sr(t,C));var H=n.getDerivedStateFromProps,I=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function";I||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==r||x!==C)&&Jc(t,u,r,C),cn=!1;var R=t.memoizedState;u.state=R,ss(t,r,u,o),x=t.memoizedState,m!==r||R!==x||nt.current||cn?(typeof H=="function"&&(nl(t,n,H,r),x=t.memoizedState),(m=cn||qc(t,n,m,r,R,x,C))?(I||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=x),u.props=r,u.state=x,u.context=C,r=m):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Sc(e,t),m=t.memoizedProps,C=t.type===t.elementType?m:Et(t.type,m),u.props=C,I=t.pendingProps,R=u.context,x=n.contextType,typeof x=="object"&&x!==null?x=gt(x):(x=rt(n)?zn:Qe.current,x=sr(t,x));var G=n.getDerivedStateFromProps;(H=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==I||R!==x)&&Jc(t,u,r,x),cn=!1,R=t.memoizedState,u.state=R,ss(t,r,u,o);var X=t.memoizedState;m!==I||R!==X||nt.current||cn?(typeof G=="function"&&(nl(t,n,G,r),X=t.memoizedState),(C=cn||qc(t,n,C,r,R,X,x)||!1)?(H||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,X,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,X,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=X),u.props=r,u.state=X,u.context=x,r=C):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return ll(e,t,n,r,a,o)}function ll(e,t,n,r,o,a){iu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&hc(t,n,!1),Wt(e,t,a);r=t.stateNode,mf.current=t;var m=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=cr(t,e.child,null,a),t.child=cr(t,null,m,a)):Xe(e,t,m,a),t.memoizedState=r.state,o&&hc(t,n,!0),t.child}function uu(e){var t=e.stateNode;t.pendingContext?pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pc(e,t.context,!1),Ba(e,t.containerInfo)}function du(e,t,n,r,o){return ir(),$a(o),t.flags|=256,Xe(e,t,n,r),t.child}var il={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pu(e,t,n){var r=t.pendingProps,o=Pe.current,a=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(o&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Me(Pe,o&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,a?(r=t.mode,a=t.child,u={mode:"hidden",children:u},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=u):a=Es(u,r,0,null),e=$n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=cl(n),t.memoizedState=il,e):ul(t,u));if(o=e.memoizedState,o!==null&&(m=o.dehydrated,m!==null))return gf(e,t,u,r,m,o,n);if(a){a=r.fallback,u=t.mode,o=e.child,m=o.sibling;var x={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=x,t.deletions=null):(r=gn(o,x),r.subtreeFlags=o.subtreeFlags&14680064),m!==null?a=gn(m,a):(a=$n(a,u,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,u=e.child.memoizedState,u=u===null?cl(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=il,r}return a=e.child,e=a.sibling,r=gn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ul(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,n,r){return r!==null&&$a(r),cr(t,e.child,null,n),e=ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,o,a,u){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(l(422))),fs(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Es({mode:"visible",children:r.children},o,0,null),a=$n(a,o,u,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&cr(t,e.child,null,u),t.child.memoizedState=cl(u),t.memoizedState=il,a);if((t.mode&1)===0)return fs(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var m=r.dgst;return r=m,a=Error(l(419)),r=ol(a,r,void 0),fs(e,t,u,r)}if(m=(u&e.childLanes)!==0,ot||m){if(r=Be,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Bt(e,o),jt(r,e,o,-1))}return El(),r=ol(Error(l(421))),fs(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jf.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,dt=on(o.nextSibling),ut=t,Fe=!0,St=null,e!==null&&(ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=Cn,It=e.id,Zt=e.overflow,Cn=t),t=ul(t,r.children),t.flags|=4096,t)}function fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function dl(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function hu(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,n,t);else if(e.tag===19)fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&as(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),dl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&as(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}dl(t,!0,n,null,a);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vf(e,t,n){switch(t.tag){case 3:uu(t),ir();break;case 5:Cc(t);break;case 1:rt(t.type)&&qo(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Me(ns,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?pu(e,t,n):(Me(Pe,Pe.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Me(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return hu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Me(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,lu(e,t,n)}return Wt(e,t,n)}var mu,pl,gu,vu;mu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},pl=function(){},gu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn(Rt.current);var a=null;switch(n){case"input":o=Sr(e,o),r=Sr(e,r),a=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":o=Er(e,o),r=Er(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}Ws(n,r);var u;n=null;for(C in o)if(!r.hasOwnProperty(C)&&o.hasOwnProperty(C)&&o[C]!=null)if(C==="style"){var m=o[C];for(u in m)m.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(p.hasOwnProperty(C)?a||(a=[]):(a=a||[]).push(C,null));for(C in r){var x=r[C];if(m=o!=null?o[C]:void 0,r.hasOwnProperty(C)&&x!==m&&(x!=null||m!=null))if(C==="style")if(m){for(u in m)!m.hasOwnProperty(u)||x&&x.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in x)x.hasOwnProperty(u)&&m[u]!==x[u]&&(n||(n={}),n[u]=x[u])}else n||(a||(a=[]),a.push(C,n)),n=x;else C==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,m=m?m.__html:void 0,x!=null&&m!==x&&(a=a||[]).push(C,x)):C==="children"?typeof x!="string"&&typeof x!="number"||(a=a||[]).push(C,""+x):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(p.hasOwnProperty(C)?(x!=null&&C==="onScroll"&&Ne("scroll",e),a||m===x||(a=[])):(a=a||[]).push(C,x))}n&&(a=a||[]).push("style",n);var C=a;(t.updateQueue=C)&&(t.flags|=4)}},vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function so(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(Pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return rt(t.type)&&Go(),qe(t),null;case 3:return r=t.stateNode,pr(),Ae(nt),Ae(Qe),Ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(_l(St),St=null))),pl(e,t),qe(t),null;case 5:Ua(t);var o=Nn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)gu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=Nn(Rt.current),es(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Pt]=t,r[Gr]=a,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)Ne(Wr[o],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":bo(r,a),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ne("invalid",r);break;case"textarea":zr(r,a),Ne("invalid",r)}Ws(n,a),o=null;for(var u in a)if(a.hasOwnProperty(u)){var m=a[u];u==="children"?typeof m=="string"?r.textContent!==m&&(a.suppressHydrationWarning!==!0&&Wo(r.textContent,m,e),o=["children",m]):typeof m=="number"&&r.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Wo(r.textContent,m,e),o=["children",""+m]):p.hasOwnProperty(u)&&m!=null&&u==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Gt(r),ko(r,a,!0);break;case"textarea":Gt(r),_o(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=b(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Pt]=t,e[Gr]=r,mu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ks(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),o=r;break;case"iframe":case"object":case"embed":Ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)Ne(Wr[o],e);o=r;break;case"source":Ne("error",e),o=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),o=r;break;case"details":Ne("toggle",e),o=r;break;case"input":bo(e,r),o=Sr(e,r),Ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":zr(e,r),o=Er(e,r),Ne("invalid",e);break;default:o=r}Ws(n,o),m=o;for(a in m)if(m.hasOwnProperty(a)){var x=m[a];a==="style"?Lo(e,x):a==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ye(e,x)):a==="children"?typeof x=="string"?(n!=="textarea"||x!=="")&&ge(e,x):typeof x=="number"&&ge(e,""+x):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?x!=null&&a==="onScroll"&&Ne("scroll",e):x!=null&&ee(e,a,x,u))}switch(n){case"input":Gt(e),ko(e,r,!1);break;case"textarea":Gt(e),_o(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ee(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Yt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=Nn(eo.current),Nn(Rt.current),es(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(a=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return qe(t),null;case 13:if(Ae(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wc(),ir(),t.flags|=98560,a=!1;else if(a=es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Pt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else St!==null&&(_l(St),St=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Ie===0&&(Ie=3):El())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return pr(),pl(e,t),e===null&&Kr(t.stateNode.containerInfo),qe(t),null;case 10:return Da(t.type._context),qe(t),null;case 17:return rt(t.type)&&Go(),qe(t),null;case 19:if(Ae(Pe),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)so(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=as(e),u!==null){for(t.flags|=128,so(a,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&$e()>gr&&(t.flags|=128,r=!0,so(a,!1),t.lanes=4194304)}else{if(!r)if(e=as(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),so(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Fe)return qe(t),null}else 2*$e()-a.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,so(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$e(),t.sibling=null,n=Pe.current,Me(Pe,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Sl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function yf(e,t){switch(Pa(t),t.tag){case 1:return rt(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Ae(nt),Ae(Qe),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ua(t),null;case 13:if(Ae(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Pe),null;case 4:return pr(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var ms=!1,Ye=!1,wf=typeof WeakSet=="function"?WeakSet:Set,J=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){Te(e,t,r)}}var xu=!1;function bf(e,t){if(Sa=Ro,e=qi(),va(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var u=0,m=-1,x=-1,C=0,H=0,I=e,R=null;t:for(;;){for(var G;I!==n||o!==0&&I.nodeType!==3||(m=u+o),I!==a||r!==0&&I.nodeType!==3||(x=u+r),I.nodeType===3&&(u+=I.nodeValue.length),(G=I.firstChild)!==null;)R=I,I=G;for(;;){if(I===e)break t;if(R===n&&++C===o&&(m=u),R===a&&++H===r&&(x=u),(G=I.nextSibling)!==null)break;I=R,R=I.parentNode}I=G}n=m===-1||x===-1?null:{start:m,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Ro=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var te=X.memoizedProps,He=X.memoizedState,_=t.stateNode,y=_.getSnapshotBeforeUpdate(t.elementType===t.type?te:Et(t.type,te),He);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(B){Te(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return X=xu,xu=!1,X}function ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&fl(t,n,a)}o=o.next}while(o!==r)}}function gs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Gr],delete t[Ma],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wu(e){return e.tag===5||e.tag===3||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}var We=null,zt=!1;function dn(e,t,n){for(n=n.child;n!==null;)ku(e,t,n),n=n.sibling}function ku(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:Ye||hr(n,t);case 6:var r=We,o=zt;We=null,dn(e,t,n),We=r,zt=o,We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?ja(e.parentNode,n):e.nodeType===1&&ja(e,n),Hr(e)):ja(We,n.stateNode));break;case 4:r=We,o=zt,We=n.stateNode.containerInfo,zt=!0,dn(e,t,n),We=r,zt=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,u=a.destroy;a=a.tag,u!==void 0&&((a&2)!==0||(a&4)!==0)&&fl(n,t,u),o=o.next}while(o!==r)}dn(e,t,n);break;case 1:if(!Ye&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(m){Te(n,t,m)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,dn(e,t,n),Ye=r):dn(e,t,n);break;default:dn(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var o=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,u=t,m=u;e:for(;m!==null;){switch(m.tag){case 5:We=m.stateNode,zt=!1;break e;case 3:We=m.stateNode.containerInfo,zt=!0;break e;case 4:We=m.stateNode.containerInfo,zt=!0;break e}m=m.return}if(We===null)throw Error(l(160));ku(a,u,o),We=null,zt=!1;var x=o.alternate;x!==null&&(x.return=null),o.return=null}catch(C){Te(o,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling}function Lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),$t(e),r&4){try{ao(3,e,e.return),gs(3,e)}catch(te){Te(e,e.return,te)}try{ao(5,e,e.return)}catch(te){Te(e,e.return,te)}}break;case 1:Ct(t,e),$t(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(Ct(t,e),$t(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var o=e.stateNode;try{ge(o,"")}catch(te){Te(e,e.return,te)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,u=n!==null?n.memoizedProps:a,m=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&Un(o,a),Ks(m,u);var C=Ks(m,a);for(u=0;u<x.length;u+=2){var H=x[u],I=x[u+1];H==="style"?Lo(o,I):H==="dangerouslySetInnerHTML"?ye(o,I):H==="children"?ge(o,I):ee(o,H,I,C)}switch(m){case"input":Wn(o,a);break;case"textarea":Cr(o,a);break;case"select":var R=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var G=a.value;G!=null?Yt(o,!!a.multiple,G,!1):R!==!!a.multiple&&(a.defaultValue!=null?Yt(o,!!a.multiple,a.defaultValue,!0):Yt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Gr]=a}catch(te){Te(e,e.return,te)}}break;case 6:if(Ct(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(te){Te(e,e.return,te)}}break;case 3:if(Ct(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(te){Te(e,e.return,te)}break;case 4:Ct(t,e),$t(e);break;case 13:Ct(t,e),$t(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(yl=$e())),r&4&&_u(e);break;case 22:if(H=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(C=Ye)||H,Ct(t,e),Ye=C):Ct(t,e),$t(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!H&&(e.mode&1)!==0)for(J=e,H=e.child;H!==null;){for(I=J=H;J!==null;){switch(R=J,G=R.child,R.tag){case 0:case 11:case 14:case 15:ao(4,R,R.return);break;case 1:hr(R,R.return);var X=R.stateNode;if(typeof X.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(te){Te(r,n,te)}}break;case 5:hr(R,R.return);break;case 22:if(R.memoizedState!==null){zu(I);continue}}G!==null?(G.return=R,J=G):zu(I)}H=H.sibling}e:for(H=null,I=e;;){if(I.tag===5){if(H===null){H=I;try{o=I.stateNode,C?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=I.stateNode,x=I.memoizedProps.style,u=x!=null&&x.hasOwnProperty("display")?x.display:null,m.style.display=Ot("display",u))}catch(te){Te(e,e.return,te)}}}else if(I.tag===6){if(H===null)try{I.stateNode.nodeValue=C?"":I.memoizedProps}catch(te){Te(e,e.return,te)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;H===I&&(H=null),I=I.return}H===I&&(H=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:Ct(t,e),$t(e),r&4&&_u(e);break;case 21:break;default:Ct(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ge(o,""),r.flags&=-33);var a=bu(e);gl(e,a,o);break;case 3:case 4:var u=r.stateNode.containerInfo,m=bu(e);ml(e,m,u);break;default:throw Error(l(161))}}catch(x){Te(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){J=e,Su(e)}function Su(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var o=J,a=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||ms;if(!u){var m=o.alternate,x=m!==null&&m.memoizedState!==null||Ye;m=ms;var C=Ye;if(ms=u,(Ye=x)&&!C)for(J=o;J!==null;)u=J,x=u.child,u.tag===22&&u.memoizedState!==null?Cu(o):x!==null?(x.return=u,J=x):Cu(o);for(;a!==null;)J=a,Su(a),a=a.sibling;J=o,ms=m,Ye=C}Eu(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,J=a):Eu(e)}}function Eu(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||gs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&zc(t,a,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,u,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&n.focus();break;case"img":x.src&&(n.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var H=C.memoizedState;if(H!==null){var I=H.dehydrated;I!==null&&Hr(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||t.flags&512&&hl(t)}catch(R){Te(t,t.return,R)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function zu(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Cu(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gs(4,t)}catch(x){Te(t,n,x)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(x){Te(t,o,x)}}var a=t.return;try{hl(t)}catch(x){Te(t,a,x)}break;case 5:var u=t.return;try{hl(t)}catch(x){Te(t,u,x)}}}catch(x){Te(t,t.return,x)}if(t===e){J=null;break}var m=t.sibling;if(m!==null){m.return=t.return,J=m;break}J=t.return}}var _f=Math.ceil,vs=q.ReactCurrentDispatcher,vl=q.ReactCurrentOwner,xt=q.ReactCurrentBatchConfig,_e=0,Be=null,Oe=null,Ke=0,pt=0,mr=sn(0),Ie=0,lo=null,Fn=0,xs=0,xl=0,io=null,st=null,yl=0,gr=1/0,Kt=null,ys=!1,wl=null,pn=null,ws=!1,fn=null,bs=0,co=0,bl=null,ks=-1,_s=0;function et(){return(_e&6)!==0?$e():ks!==-1?ks:ks=$e()}function hn(e){return(e.mode&1)===0?1:(_e&2)!==0&&Ke!==0?Ke&-Ke:sf.transition!==null?(_s===0&&(_s=bi()),_s):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Mi(e.type)),e)}function jt(e,t,n,r){if(50<co)throw co=0,bl=null,Error(l(185));Fr(e,n,r),((_e&2)===0||e!==Be)&&(e===Be&&((_e&2)===0&&(xs|=n),Ie===4&&mn(e,Ke)),at(e,r),n===1&&_e===0&&(t.mode&1)===0&&(gr=$e()+500,Yo&&ln()))}function at(e,t){var n=e.callbackNode;sp(e,t);var r=Ao(e,e===Be?Ke:0);if(r===0)n!==null&&xi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xi(n),t===1)e.tag===0?of(Mu.bind(null,e)):mc(Mu.bind(null,e)),ef(function(){(_e&6)===0&&ln()}),n=null;else{switch(ki(r)){case 1:n=ea;break;case 4:n=yi;break;case 16:n=Co;break;case 536870912:n=wi;break;default:n=Co}n=Hu(n,ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ju(e,t){if(ks=-1,_s=0,(_e&6)!==0)throw Error(l(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ao(e,e===Be?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ls(e,r);else{t=r;var o=_e;_e|=2;var a=Au();(Be!==e||Ke!==t)&&(Kt=null,gr=$e()+500,Rn(e,t));do try{Ef();break}catch(m){Nu(e,m)}while(!0);Oa(),vs.current=a,_e=o,Oe!==null?t=0:(Be=null,Ke=0,t=Ie)}if(t!==0){if(t===2&&(o=ta(e),o!==0&&(r=o,t=kl(e,o))),t===1)throw n=lo,Rn(e,0),mn(e,r),at(e,$e()),n;if(t===6)mn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Lf(o)&&(t=Ls(e,r),t===2&&(a=ta(e),a!==0&&(r=a,t=kl(e,a))),t===1))throw n=lo,Rn(e,0),mn(e,r),at(e,$e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:Tn(e,st,Kt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=yl+500-$e(),10<t)){if(Ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ca(Tn.bind(null,e,st,Kt),t);break}Tn(e,st,Kt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-_t(r);a=1<<u,u=t[u],u>o&&(o=u),r&=~a}if(r=o,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_f(r/1960))-r,10<r){e.timeoutHandle=Ca(Tn.bind(null,e,st,Kt),r);break}Tn(e,st,Kt);break;case 5:Tn(e,st,Kt);break;default:throw Error(l(329))}}}return at(e,$e()),e.callbackNode===n?ju.bind(null,e):null}function kl(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Ls(e,t),e!==2&&(t=st,st=n,t!==null&&_l(t)),e}function _l(e){st===null?st=e:st.push.apply(st,e)}function Lf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Lt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~xl,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Mu(e){if((_e&6)!==0)throw Error(l(327));vr();var t=Ao(e,0);if((t&1)===0)return at(e,$e()),null;var n=Ls(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=lo,Rn(e,0),mn(e,t),at(e,$e()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,st,Kt),at(e,$e()),null}function Ll(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(gr=$e()+500,Yo&&ln())}}function Pn(e){fn!==null&&fn.tag===0&&(_e&6)===0&&vr();var t=_e;_e|=1;var n=xt.transition,r=Ce;try{if(xt.transition=null,Ce=1,e)return e()}finally{Ce=r,xt.transition=n,_e=t,(_e&6)===0&&ln()}}function Sl(){pt=mr.current,Ae(mr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xp(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:pr(),Ae(nt),Ae(Qe),Ka();break;case 5:Ua(r);break;case 4:pr();break;case 13:Ae(Pe);break;case 19:Ae(Pe);break;case 10:Da(r.type._context);break;case 22:case 23:Sl()}n=n.return}if(Be=e,Oe=e=gn(e.current,null),Ke=pt=t,Ie=0,lo=null,xl=xs=Fn=0,st=io=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var u=a.next;a.next=o,r.next=u}n.pending=r}Mn=null}return e}function Nu(e,t){do{var n=Oe;try{if(Oa(),ls.current=ds,is){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}is=!1}if(An=0,Ze=Ve=Re=null,to=!1,no=0,vl.current=null,n===null||n.return===null){Ie=1,lo=t,Oe=null;break}e:{var a=e,u=n.return,m=n,x=t;if(t=Ke,m.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=x,H=m,I=H.tag;if((H.mode&1)===0&&(I===0||I===11||I===15)){var R=H.alternate;R?(H.updateQueue=R.updateQueue,H.memoizedState=R.memoizedState,H.lanes=R.lanes):(H.updateQueue=null,H.memoizedState=null)}var G=nu(u);if(G!==null){G.flags&=-257,ru(G,u,m,a,t),G.mode&1&&tu(a,C,t),t=G,x=C;var X=t.updateQueue;if(X===null){var te=new Set;te.add(x),t.updateQueue=te}else X.add(x);break e}else{if((t&1)===0){tu(a,C,t),El();break e}x=Error(l(426))}}else if(Fe&&m.mode&1){var He=nu(u);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),ru(He,u,m,a,t),$a(fr(x,m));break e}}a=x=fr(x,m),Ie!==4&&(Ie=2),io===null?io=[a]:io.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var _=Xc(a,x,t);Ec(a,_);break e;case 1:m=x;var y=a.type,S=a.stateNode;if((a.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(pn===null||!pn.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var B=eu(a,m,t);Ec(a,B);break e}}a=a.return}while(a!==null)}Pu(n)}catch(ne){t=ne,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Au(){var e=vs.current;return vs.current=ds,e===null?ds:e}function El(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Be===null||(Fn&268435455)===0&&(xs&268435455)===0||mn(Be,Ke)}function Ls(e,t){var n=_e;_e|=2;var r=Au();(Be!==e||Ke!==t)&&(Kt=null,Rn(e,t));do try{Sf();break}catch(o){Nu(e,o)}while(!0);if(Oa(),_e=n,vs.current=r,Oe!==null)throw Error(l(261));return Be=null,Ke=0,Ie}function Sf(){for(;Oe!==null;)Fu(Oe)}function Ef(){for(;Oe!==null&&!qd();)Fu(Oe)}function Fu(e){var t=$u(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Pu(e):Oe=t,vl.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=xf(n,t,pt),n!==null){Oe=n;return}}else{if(n=yf(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Ie===0&&(Ie=5)}function Tn(e,t,n){var r=Ce,o=xt.transition;try{xt.transition=null,Ce=1,zf(e,t,n,r)}finally{xt.transition=o,Ce=r}return null}function zf(e,t,n,r){do vr();while(fn!==null);if((_e&6)!==0)throw Error(l(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ap(e,a),e===Be&&(Oe=Be=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ws||(ws=!0,Hu(Co,function(){return vr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=xt.transition,xt.transition=null;var u=Ce;Ce=1;var m=_e;_e|=4,vl.current=null,bf(e,n),Lu(n,e),Wp(Ea),Ro=!!Sa,Ea=Sa=null,e.current=n,kf(n),Yd(),_e=m,Ce=u,xt.transition=a}else e.current=n;if(ws&&(ws=!1,fn=e,bs=o),a=e.pendingLanes,a===0&&(pn=null),ep(n.stateNode),at(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ys)throw ys=!1,e=wl,wl=null,e;return(bs&1)!==0&&e.tag!==0&&vr(),a=e.pendingLanes,(a&1)!==0?e===bl?co++:(co=0,bl=e):co=0,ln(),null}function vr(){if(fn!==null){var e=ki(bs),t=xt.transition,n=Ce;try{if(xt.transition=null,Ce=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,bs=0,(_e&6)!==0)throw Error(l(331));var o=_e;for(_e|=4,J=e.current;J!==null;){var a=J,u=a.child;if((J.flags&16)!==0){var m=a.deletions;if(m!==null){for(var x=0;x<m.length;x++){var C=m[x];for(J=C;J!==null;){var H=J;switch(H.tag){case 0:case 11:case 15:ao(8,H,a)}var I=H.child;if(I!==null)I.return=H,J=I;else for(;J!==null;){H=J;var R=H.sibling,G=H.return;if(yu(H),H===C){J=null;break}if(R!==null){R.return=G,J=R;break}J=G}}}var X=a.alternate;if(X!==null){var te=X.child;if(te!==null){X.child=null;do{var He=te.sibling;te.sibling=null,te=He}while(te!==null)}}J=a}}if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,J=u;else e:for(;J!==null;){if(a=J,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ao(9,a,a.return)}var _=a.sibling;if(_!==null){_.return=a.return,J=_;break e}J=a.return}}var y=e.current;for(J=y;J!==null;){u=J;var S=u.child;if((u.subtreeFlags&2064)!==0&&S!==null)S.return=u,J=S;else e:for(u=y;J!==null;){if(m=J,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:gs(9,m)}}catch(ne){Te(m,m.return,ne)}if(m===u){J=null;break e}var B=m.sibling;if(B!==null){B.return=m.return,J=B;break e}J=m.return}}if(_e=o,ln(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{Ce=n,xt.transition=t}}return!1}function Ru(e,t,n){t=fr(n,t),t=Xc(e,t,1),e=un(e,t,1),t=et(),e!==null&&(Fr(e,1,t),at(e,t))}function Te(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=fr(n,e),e=eu(t,e,1),t=un(t,e,1),e=et(),t!==null&&(Fr(t,1,e),at(t,e));break}}t=t.return}}function Cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ke&n)===n&&(Ie===4||Ie===3&&(Ke&130023424)===Ke&&500>$e()-yl?Rn(e,0):xl|=n),at(e,t)}function Tu(e,t){t===0&&((e.mode&1)===0?t=1:(t=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=et();e=Bt(e,t),e!==null&&(Fr(e,t,n),at(e,n))}function jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tu(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),Tu(e,n)}var $u;$u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,vf(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Fe&&(t.flags&1048576)!==0&&gc(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hs(e,t),e=t.pendingProps;var o=sr(t,Qe.current);dr(t,n),o=qa(null,t,r,e,o,n);var a=Ya();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(a=!0,qo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Za(t),o.updater=ps,t.stateNode=o,o._reactInternals=t,rl(t,r,e,n),t=ll(null,t,r,!0,a,n)):(t.tag=0,Fe&&a&&Fa(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Af(r),e=Et(r,e),o){case 0:t=al(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=ou(null,t,r,e,n);break e;case 14:t=su(null,t,r,Et(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),al(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),cu(e,t,r,o,n);case 3:e:{if(uu(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Sc(e,t),ss(t,r,null,n);var u=t.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=fr(Error(l(423)),t),t=du(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(l(424)),t),t=du(e,t,r,n,o);break e}else for(dt=on(t.stateNode.containerInfo.firstChild),ut=t,Fe=!0,St=null,n=_c(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===o){t=Wt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Cc(t),e===null&&Ta(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,u=o.children,za(r,o)?u=null:a!==null&&za(r,a)&&(t.flags|=32),iu(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return pu(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),ou(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,u=o.value,Me(ns,r._currentValue),r._currentValue=u,a!==null)if(Lt(a.value,u)){if(a.children===o.children&&!nt.current){t=Wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){u=a.child;for(var x=m.firstContext;x!==null;){if(x.context===r){if(a.tag===1){x=Ut(-1,n&-n),x.tag=2;var C=a.updateQueue;if(C!==null){C=C.shared;var H=C.pending;H===null?x.next=x:(x.next=H.next,H.next=x),C.pending=x}}a.lanes|=n,x=a.alternate,x!==null&&(x.lanes|=n),Va(a.return,n,t),m.lanes|=n;break}x=x.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(l(341));u.lanes|=n,m=u.alternate,m!==null&&(m.lanes|=n),Va(u,n,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dr(t,n),o=gt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=Et(r,t.pendingProps),o=Et(r.type,o),su(e,t,r,o,n);case 15:return au(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),hs(e,t),t.tag=1,rt(r)?(e=!0,qo(t)):e=!1,dr(t,n),Yc(t,r,o),rl(t,r,o,n),ll(null,t,r,!0,e,n);case 19:return hu(e,t,n);case 22:return lu(e,t,n)}throw Error(l(156,t.tag))};function Hu(e,t){return vi(e,t)}function Nf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Nf(e,t,n,r)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Z)return 11;if(e===we)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ss(e,t,n,r,o,a){var u=2;if(r=e,typeof e=="function")zl(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case K:return $n(n.children,o,a,t);case he:u=8,o|=8;break;case ue:return e=yt(12,n,t,o|2),e.elementType=ue,e.lanes=a,e;case D:return e=yt(13,n,t,o),e.elementType=D,e.lanes=a,e;case $:return e=yt(19,n,t,o),e.elementType=$,e.lanes=a,e;case pe:return Es(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:u=10;break e;case ce:u=9;break e;case Z:u=11;break e;case we:u=14;break e;case me:u=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(u,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function $n(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Es(e,t,n,r){return e=yt(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ff(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ml(e,t,n,r,o,a,u,m,x){return e=new Ff(e,t,n,m,x),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(a),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ou(e){if(!e)return an;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(rt(n))return fc(e,n,t)}return t}function Du(e,t,n,r,o,a,u,m,x){return e=Ml(n,r,!0,e,o,a,u,m,x),e.context=Ou(null),n=e.current,r=et(),o=hn(n),a=Ut(r,o),a.callback=t??null,un(n,a,o),e.current.lanes=o,Fr(e,o,r),at(e,r),e}function zs(e,t,n,r){var o=t.current,a=et(),u=hn(o);return n=Ou(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(a,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,u),e!==null&&(jt(e,o,u,a),os(e,o,u)),u}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Rf(){return null}var Iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Al(e){this._internalRoot=e}js.prototype.render=Al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));zs(e,t,null,null)},js.prototype.unmount=Al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){zs(null,e,null,null)}),t[Dt]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=Si();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Ci(e)}};function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zu(){}function Tf(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var C=Cs(u);a.call(C)}}var u=Du(t,r,e,0,null,!1,!1,"",Zu);return e._reactRootContainer=u,e[Dt]=u.current,Kr(e.nodeType===8?e.parentNode:e),Pn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var m=r;r=function(){var C=Cs(x);m.call(C)}}var x=Ml(e,0,!1,null,null,!1,!1,"",Zu);return e._reactRootContainer=x,e[Dt]=x.current,Kr(e.nodeType===8?e.parentNode:e),Pn(function(){zs(t,x,n,r)}),x}function Ns(e,t,n,r,o){var a=n._reactRootContainer;if(a){var u=a;if(typeof o=="function"){var m=o;o=function(){var x=Cs(u);m.call(x)}}zs(t,u,e,o)}else u=Tf(n,t,e,o,r);return Cs(u)}_i=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(ra(t,n|1),at(t,$e()),(_e&6)===0&&(gr=$e()+500,ln()))}break;case 13:Pn(function(){var r=Bt(e,1);if(r!==null){var o=et();jt(r,e,1,o)}}),Nl(e,1)}},oa=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=et();jt(t,e,134217728,n)}Nl(e,134217728)}},Li=function(e){if(e.tag===13){var t=hn(e),n=Bt(e,t);if(n!==null){var r=et();jt(n,e,t,r)}Nl(e,t)}},Si=function(){return Ce},Ei=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}},qs=function(e,t,n){switch(t){case"input":if(Wn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qo(r);if(!o)throw Error(l(90));wo(r),Wn(r,o)}}}break;case"textarea":Cr(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}},ui=Ll,di=Pn;var $f={usingClientEntryPoint:!1,Events:[qr,rr,Qo,ii,ci,Ll]},uo={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mi(e),e===null?null:e.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{jo=As.inject(Hf),Ft=As}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$f,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fl(t))throw Error(l(200));return Pf(e,t,null,n)},lt.createRoot=function(e,t){if(!Fl(e))throw Error(l(299));var n=!1,r="",o=Iu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ml(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,Kr(e.nodeType===8?e.parentNode:e),new Al(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=mi(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Pn(e)},lt.hydrate=function(e,t,n){if(!Ms(t))throw Error(l(200));return Ns(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Fl(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",u=Iu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Du(t,null,e,1,n??null,o,!1,a,u),e[Dt]=t.current,Kr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new js(t)},lt.render=function(e,t,n){if(!Ms(t))throw Error(l(200));return Ns(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!Ms(e))throw Error(l(40));return e._reactRootContainer?(Pn(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},lt.unstable_batchedUpdates=Ll,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ms(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ns(e,t,n,!1,r)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Yu;function Kf(){if(Yu)return Tl.exports;Yu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Tl.exports=Wf(),Tl.exports}var Ju;function Qf(){if(Ju)return Fs;Ju=1;var s=Kf();return Fs.createRoot=s.createRoot,Fs.hydrateRoot=s.hydrateRoot,Fs}var Gf=Qf();const qf=Df(Gf),Yf="modulepreload",Jf=function(s,i){return new URL(s,i).href},Xu={},fo=function(i,l,c){let p=Promise.resolve();if(l&&l.length>0){let g=function(z){return Promise.all(z.map(L=>Promise.resolve(L).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};const v=document.getElementsByTagName("link"),w=document.querySelector("meta[property=csp-nonce]"),E=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));p=g(l.map(z=>{if(z=Jf(z,c),z in Xu)return;Xu[z]=!0;const L=z.endsWith(".css"),j=L?'[rel="stylesheet"]':"";if(!!c)for(let P=v.length-1;P>=0;P--){const U=v[P];if(U.href===z&&(!L||U.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${z}"]${j}`))return;const V=document.createElement("link");if(V.rel=L?"stylesheet":Yf,L||(V.as="script"),V.crossOrigin="",V.href=z,E&&V.setAttribute("nonce",E),document.head.appendChild(V),L)return new Promise((P,U)=>{V.addEventListener("load",P),V.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${z}`)))})}))}function h(g){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=g,window.dispatchEvent(v),!v.defaultPrevented)throw g}return p.then(g=>{for(const v of g||[])v.status==="rejected"&&h(v.reason);return i().catch(h)})},Ql={toggle:()=>fo(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>fo(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>fo(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>fo(()=>import("./press-h_enDfSn.js"),[],import.meta.url),slide:()=>fo(()=>import("./slide-CxPKTNuS.js"),[],import.meta.url)};let yr=null,ed=!1;const bd=new Set,Ds=new Map,Ps=new Map;function ei(){if(yr)return yr;const s=window.AudioContext||window.webkitAudioContext;return s?(yr=new s,yr):null}function ti(s){if(Ds.has(s))return Promise.resolve(Ds.get(s));if(Ps.has(s))return Ps.get(s);const i=ei();if(!i||!Ql[s])return Promise.resolve(null);const l=Ql[s]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>i.decodeAudioData(c)).then(c=>(Ds.set(s,c),c)).catch(()=>null).finally(()=>Ps.delete(s));return Ps.set(s,l),l}function Xf(){const s=ei();s&&(s.state==="suspended"&&s.resume(),bd.forEach(ti))}function e0(s){if(typeof window>"u"||!Ql[s])return;if(bd.add(s),yr&&yr.state!=="suspended"){ti(s);return}if(ed)return;ed=!0;const i={capture:!0,passive:!0},l=()=>{window.removeEventListener("pointerdown",l,i),window.removeEventListener("keydown",l,i),Xf()};window.addEventListener("pointerdown",l,i),window.addEventListener("keydown",l,i)}const t0=120;function n0(s,i=1){if(typeof window>"u"||i<=0)return;const l=ei();if(!l)return;l.state==="suspended"&&l.resume();const c=Ds.get(s);if(!c){const p=performance.now();ti(s).then(h=>{h&&performance.now()-p<=t0&&td(l,h,i)});return}td(l,c,i)}function td(s,i,l){const c=s.createBufferSource(),p=s.createGain();p.gain.value=Math.min(1,l),c.buffer=i,c.connect(p).connect(s.destination),c.start()}const kd=.7,_d=d.createContext({enabled:!0,volume:kd});function r0({enabled:s=!0,volume:i=kd,children:l}){return f.jsx(_d.Provider,{value:{enabled:s,volume:i},children:l})}function yo(s,i=!0){const{enabled:l,volume:c}=d.useContext(_d),p=l&&i;return d.useEffect(()=>{p&&e0(s)},[s,p]),d.useCallback(()=>{p&&n0(s,c)},[s,p,c])}const o0=`/* ============================================================
 * tokens.css — GENERATED · do not edit by hand.
 *
 * Generated by scripts/tokens-to-css.mjs from:
 *   - tokens/primitives.json
 *   - tokens/semantic.json
 *
 * Run \`npm run tokens:build\` to regenerate.
 *
 * Layer order:
 *   1. :root { primitives + light-mode semantic }
 *   2. [data-theme="dark"] { dark-mode semantic overrides }
 *
 * Every component CSS module references --sc-* semantic vars
 * (Sprint 4 contract resolution 1). Primitive vars are present
 * to satisfy alias resolution; component code that references
 * them directly is a bug.
 * ============================================================ */


:root {
  /* --- Primitives (--sc-p-*) ----------------------------- */
  --sc-p-color-warm-gray-25: #F8F6F2;
  --sc-p-color-warm-gray-40: #F5F0E9;
  --sc-p-color-warm-gray-50: #F1EFEB;
  --sc-p-color-warm-gray-100: #E3DFD8;
  --sc-p-color-warm-gray-200: #D8D1CC;
  --sc-p-color-warm-gray-250: #C4BCB4;
  --sc-p-color-warm-gray-300: #B0A69C;
  --sc-p-color-warm-gray-350: #9A9186;
  --sc-p-color-warm-gray-400: #847C71;
  --sc-p-color-warm-gray-450: #66615A;
  --sc-p-color-warm-gray-500: #5A5750;
  --sc-p-color-warm-gray-600: #484640;
  --sc-p-color-warm-gray-700: #312F2A;
  --sc-p-color-warm-gray-800: #1A1815;
  --sc-p-color-warm-gray-900: #0D0C0B;
  --sc-p-color-teal-50: #E7F4F5;
  --sc-p-color-teal-100: #C4E7E8;
  --sc-p-color-teal-200: #8FD2D5;
  --sc-p-color-teal-300: #52B8BC;
  --sc-p-color-teal-400: #1C9DA2;
  --sc-p-color-teal-500: #038E93;
  --sc-p-color-teal-600: #04797D;
  --sc-p-color-teal-700: #056268;
  --sc-p-color-teal-800: #05484C;
  --sc-p-color-teal-900: #05282B;
  --sc-p-color-status-success-light: #2F855A;
  --sc-p-color-status-success-dark: #57AD7F;
  --sc-p-color-status-success-ink-light: #246E4A;
  --sc-p-color-status-success-ink-dark: #6AC090;
  --sc-p-color-status-warning-light: #C2410C;
  --sc-p-color-status-warning-dark: #F67751;
  --sc-p-color-status-warning-ink-light: #B13700;
  --sc-p-color-status-warning-ink-dark: #FE9374;
  --sc-p-color-status-info-light: #2D5AD8;
  --sc-p-color-status-info-dark: #709AFD;
  --sc-p-color-status-info-ink-light: #2B57D5;
  --sc-p-color-status-info-ink-dark: #8DAFFD;
  --sc-p-color-status-error-light: #7F1D1D;
  --sc-p-color-status-error-dark: #FE6B67;
  --sc-p-color-signal-live: #C8281C;
  --sc-p-color-signal-live-bright: #DA5C4D;
  --sc-p-color-signal-progress: #FBFF00;
  --sc-p-color-atmosphere-celadon: #EAFBF7;
  --sc-p-color-atmosphere-pale-blue-green: #00A3AF;
  --sc-p-color-atmosphere-river: #5CE3E6;
  --sc-p-color-atmosphere-river-deep: #0F9CC2;
  --sc-p-color-atmosphere-indigo: #274A78;
  --sc-p-color-dark-well: #1F252C;
  --sc-p-color-dark-floor: #252B32;
  --sc-p-color-dark-surface-page: #2C3239;
  --sc-p-color-dark-raised1: #343A41;
  --sc-p-color-dark-raised2: #3B4249;
  --sc-p-color-dark-raised3: #434A51;
  --sc-p-color-dark-raised4: #4D535B;
  --sc-p-color-dark-raised5: #565D65;
  --sc-p-color-dark-border: #4D535B;
  --sc-p-color-dark-border-subtle: #3B4249;
  --sc-p-color-dark-text-primary: #EAE8E3;
  --sc-p-color-dark-text-secondary: #C9C7C3;
  --sc-p-color-dark-text-tertiary: #B3B1AD;
  --sc-p-color-dark-text-disabled: #7C7A76;
  --sc-p-color-utility-white: #FFFFFF;
  --sc-p-color-utility-black: #000000;
  --sc-p-color-white-rgb: 255 255 255;
  --sc-p-color-ink-rgb: 26 24 21;
  --sc-p-color-focus-ring-light: #1F2024;
  --sc-p-color-focus-ring-dark: #E9EBEE;
  --sc-p-color-interactive-hover-ink-light: #006D72;
  --sc-p-font-family-sans: 'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Inter, system-ui, sans-serif;
  --sc-p-font-family-display: 'Neue Haas Grotesk Display Pro', 'Helvetica Neue', Inter, system-ui, sans-serif;
  --sc-p-font-family-text: 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', Inter, system-ui, sans-serif;
  --sc-p-font-family-mono: 'Cascadia Mono', 'Cascadia Code', ui-monospace, 'SF Mono', Menlo, monospace;
  --sc-p-font-size-11: 11px;
  --sc-p-font-size-12: 12px;
  --sc-p-font-size-13: 13px;
  --sc-p-font-size-14: 14px;
  --sc-p-font-size-16: 16px;
  --sc-p-font-size-20: 20px;
  --sc-p-font-size-24: 24px;
  --sc-p-font-size-32: 32px;
  --sc-p-font-size-44: 44px;
  --sc-p-font-size-60: 60px;
  --sc-p-font-size-84: 84px;
  --sc-p-font-size-120: 120px;
  --sc-p-font-size-offscale-18: 18px;
  --sc-p-font-size-offscale-22: 22px;
  --sc-p-font-size-offscale-200: 200px;
  --sc-p-font-weight-thin: 250;
  --sc-p-font-weight-light: 300;
  --sc-p-font-weight-regular: 400;
  --sc-p-font-weight-medium: 500;
  --sc-p-font-weight-semibold: 600;
  --sc-p-font-weight-bold: 700;
  --sc-p-font-weight-black: 900;
  --sc-p-font-line-height-flat: 1;
  --sc-p-font-line-height-tight: 1.1;
  --sc-p-font-line-height-snug: 1.2;
  --sc-p-font-line-height-base: 1.5;
  --sc-p-font-line-height-relaxed: 1.55;
  --sc-p-font-line-height-loose: 2;
  --sc-p-font-tracking-tightest: -0.04em;
  --sc-p-font-tracking-tighter: -0.025em;
  --sc-p-font-tracking-tight: -0.018em;
  --sc-p-font-tracking-snug: -0.012em;
  --sc-p-font-tracking-normal: 0em;
  --sc-p-font-tracking-slight: 0.02em;
  --sc-p-font-tracking-wide: 0.04em;
  --sc-p-font-tracking-wider: 0.06em;
  --sc-p-font-tracking-widest: 0.08em;
  --sc-p-font-tracking-caps: 0.1em;
  --sc-p-font-text-11-family: var(--sc-p-font-family-text);
  --sc-p-font-text-11-size: var(--sc-p-font-size-11);
  --sc-p-font-text-11-weight: var(--sc-p-font-weight-medium);
  --sc-p-font-text-11-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-11-letter-spacing: var(--sc-p-font-tracking-widest);
  --sc-p-font-text-11: var(--sc-p-font-weight-medium) var(--sc-p-font-size-11)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-12-family: var(--sc-p-font-family-text);
  --sc-p-font-text-12-size: var(--sc-p-font-size-12);
  --sc-p-font-text-12-weight: var(--sc-p-font-weight-bold);
  --sc-p-font-text-12-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-12-letter-spacing: var(--sc-p-font-tracking-wide);
  --sc-p-font-text-12: var(--sc-p-font-weight-bold) var(--sc-p-font-size-12)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-13-family: var(--sc-p-font-family-text);
  --sc-p-font-text-13-size: var(--sc-p-font-size-13);
  --sc-p-font-text-13-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-13-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-13-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-13: var(--sc-p-font-weight-regular) var(--sc-p-font-size-13)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-text);
  --sc-p-font-text-14-family: var(--sc-p-font-family-text);
  --sc-p-font-text-14-size: var(--sc-p-font-size-14);
  --sc-p-font-text-14-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-14-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-14-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-14: var(--sc-p-font-weight-regular) var(--sc-p-font-size-14)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-16-family: var(--sc-p-font-family-text);
  --sc-p-font-text-16-size: var(--sc-p-font-size-16);
  --sc-p-font-text-16-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-16-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-16-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-16: var(--sc-p-font-weight-regular) var(--sc-p-font-size-16)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-20-family: var(--sc-p-font-family-text);
  --sc-p-font-text-20-size: var(--sc-p-font-size-20);
  --sc-p-font-text-20-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-20-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-20-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-20: var(--sc-p-font-weight-regular) var(--sc-p-font-size-20)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-text);
  --sc-p-font-text-24-family: var(--sc-p-font-family-display);
  --sc-p-font-text-24-size: var(--sc-p-font-size-24);
  --sc-p-font-text-24-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-24-line-height: var(--sc-p-font-line-height-snug);
  --sc-p-font-text-24-letter-spacing: var(--sc-p-font-tracking-snug);
  --sc-p-font-text-24: var(--sc-p-font-weight-black) var(--sc-p-font-size-24)/var(--sc-p-font-line-height-snug) var(--sc-p-font-family-display);
  --sc-p-font-text-32-family: var(--sc-p-font-family-display);
  --sc-p-font-text-32-size: var(--sc-p-font-size-32);
  --sc-p-font-text-32-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-32-line-height: var(--sc-p-font-line-height-snug);
  --sc-p-font-text-32-letter-spacing: var(--sc-p-font-tracking-tight);
  --sc-p-font-text-32: var(--sc-p-font-weight-black) var(--sc-p-font-size-32)/var(--sc-p-font-line-height-snug) var(--sc-p-font-family-display);
  --sc-p-font-text-44-family: var(--sc-p-font-family-display);
  --sc-p-font-text-44-size: var(--sc-p-font-size-44);
  --sc-p-font-text-44-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-44-line-height: var(--sc-p-font-line-height-tight);
  --sc-p-font-text-44-letter-spacing: var(--sc-p-font-tracking-tight);
  --sc-p-font-text-44: var(--sc-p-font-weight-black) var(--sc-p-font-size-44)/var(--sc-p-font-line-height-tight) var(--sc-p-font-family-display);
  --sc-p-font-text-60-family: var(--sc-p-font-family-display);
  --sc-p-font-text-60-size: var(--sc-p-font-size-60);
  --sc-p-font-text-60-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-60-line-height: var(--sc-p-font-line-height-tight);
  --sc-p-font-text-60-letter-spacing: var(--sc-p-font-tracking-tighter);
  --sc-p-font-text-60: var(--sc-p-font-weight-black) var(--sc-p-font-size-60)/var(--sc-p-font-line-height-tight) var(--sc-p-font-family-display);
  --sc-p-font-text-84-family: var(--sc-p-font-family-display);
  --sc-p-font-text-84-size: var(--sc-p-font-size-84);
  --sc-p-font-text-84-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-84-line-height: var(--sc-p-font-line-height-tight);
  --sc-p-font-text-84-letter-spacing: var(--sc-p-font-tracking-tightest);
  --sc-p-font-text-84: var(--sc-p-font-weight-black) var(--sc-p-font-size-84)/var(--sc-p-font-line-height-tight) var(--sc-p-font-family-display);
  --sc-p-font-text-120-family: var(--sc-p-font-family-display);
  --sc-p-font-text-120-size: var(--sc-p-font-size-120);
  --sc-p-font-text-120-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-120-line-height: var(--sc-p-font-line-height-flat);
  --sc-p-font-text-120-letter-spacing: var(--sc-p-font-tracking-tightest);
  --sc-p-font-text-120: var(--sc-p-font-weight-black) var(--sc-p-font-size-120)/var(--sc-p-font-line-height-flat) var(--sc-p-font-family-display);
  --sc-p-font-text-medium-12-family: var(--sc-p-font-family-text);
  --sc-p-font-text-medium-12-size: var(--sc-p-font-size-12);
  --sc-p-font-text-medium-12-weight: var(--sc-p-font-weight-medium);
  --sc-p-font-text-medium-12-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-medium-12-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-medium-12: var(--sc-p-font-weight-medium) var(--sc-p-font-size-12)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-medium-13-family: var(--sc-p-font-family-text);
  --sc-p-font-text-medium-13-size: var(--sc-p-font-size-13);
  --sc-p-font-text-medium-13-weight: var(--sc-p-font-weight-medium);
  --sc-p-font-text-medium-13-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-medium-13-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-medium-13: var(--sc-p-font-weight-medium) var(--sc-p-font-size-13)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-button-12-family: var(--sc-p-font-family-text);
  --sc-p-font-text-button-12-size: var(--sc-p-font-size-12);
  --sc-p-font-text-button-12-weight: var(--sc-p-font-weight-medium);
  --sc-p-font-text-button-12-line-height: var(--sc-p-font-line-height-loose);
  --sc-p-font-text-button-12-letter-spacing: var(--sc-p-font-tracking-slight);
  --sc-p-font-text-button-12: var(--sc-p-font-weight-medium) var(--sc-p-font-size-12)/var(--sc-p-font-line-height-loose) var(--sc-p-font-family-text);
  --sc-p-font-text-button-14-family: var(--sc-p-font-family-text);
  --sc-p-font-text-button-14-size: var(--sc-p-font-size-14);
  --sc-p-font-text-button-14-weight: var(--sc-p-font-weight-medium);
  --sc-p-font-text-button-14-line-height: var(--sc-p-font-line-height-loose);
  --sc-p-font-text-button-14-letter-spacing: var(--sc-p-font-tracking-slight);
  --sc-p-font-text-button-14: var(--sc-p-font-weight-medium) var(--sc-p-font-size-14)/var(--sc-p-font-line-height-loose) var(--sc-p-font-family-text);
  --sc-p-font-text-bold-12-family: var(--sc-p-font-family-text);
  --sc-p-font-text-bold-12-size: var(--sc-p-font-size-12);
  --sc-p-font-text-bold-12-weight: var(--sc-p-font-weight-bold);
  --sc-p-font-text-bold-12-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-bold-12-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-bold-12: var(--sc-p-font-weight-bold) var(--sc-p-font-size-12)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-bold-13-family: var(--sc-p-font-family-text);
  --sc-p-font-text-bold-13-size: var(--sc-p-font-size-13);
  --sc-p-font-text-bold-13-weight: var(--sc-p-font-weight-bold);
  --sc-p-font-text-bold-13-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-bold-13-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-bold-13: var(--sc-p-font-weight-bold) var(--sc-p-font-size-13)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-bold-14-family: var(--sc-p-font-family-text);
  --sc-p-font-text-bold-14-size: var(--sc-p-font-size-14);
  --sc-p-font-text-bold-14-weight: var(--sc-p-font-weight-bold);
  --sc-p-font-text-bold-14-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-bold-14-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-bold-14: var(--sc-p-font-weight-bold) var(--sc-p-font-size-14)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-bold-16-family: var(--sc-p-font-family-text);
  --sc-p-font-text-bold-16-size: var(--sc-p-font-size-16);
  --sc-p-font-text-bold-16-weight: var(--sc-p-font-weight-bold);
  --sc-p-font-text-bold-16-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-bold-16-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-bold-16: var(--sc-p-font-weight-bold) var(--sc-p-font-size-16)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-text);
  --sc-p-font-text-bold-20-family: var(--sc-p-font-family-text);
  --sc-p-font-text-bold-20-size: var(--sc-p-font-size-20);
  --sc-p-font-text-bold-20-weight: var(--sc-p-font-weight-bold);
  --sc-p-font-text-bold-20-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-bold-20-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-bold-20: var(--sc-p-font-weight-bold) var(--sc-p-font-size-20)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-text);
  --sc-p-font-text-display-tight-11-family: var(--sc-p-font-family-display);
  --sc-p-font-text-display-tight-11-size: var(--sc-p-font-size-11);
  --sc-p-font-text-display-tight-11-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-display-tight-11-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-display-tight-11-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-display-tight-11: var(--sc-p-font-weight-black) var(--sc-p-font-size-11)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-display);
  --sc-p-font-text-display-tight-12-family: var(--sc-p-font-family-display);
  --sc-p-font-text-display-tight-12-size: var(--sc-p-font-size-12);
  --sc-p-font-text-display-tight-12-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-display-tight-12-line-height: var(--sc-p-font-line-height-tight);
  --sc-p-font-text-display-tight-12-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-display-tight-12: var(--sc-p-font-weight-black) var(--sc-p-font-size-12)/var(--sc-p-font-line-height-tight) var(--sc-p-font-family-display);
  --sc-p-font-text-display-tight-32-family: var(--sc-p-font-family-display);
  --sc-p-font-text-display-tight-32-size: var(--sc-p-font-size-32);
  --sc-p-font-text-display-tight-32-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-display-tight-32-line-height: var(--sc-p-font-line-height-tight);
  --sc-p-font-text-display-tight-32-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-display-tight-32: var(--sc-p-font-weight-black) var(--sc-p-font-size-32)/var(--sc-p-font-line-height-tight) var(--sc-p-font-family-display);
  --sc-p-font-text-text-tight-13-family: var(--sc-p-font-family-text);
  --sc-p-font-text-text-tight-13-size: var(--sc-p-font-size-13);
  --sc-p-font-text-text-tight-13-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-text-tight-13-line-height: var(--sc-p-font-line-height-tight);
  --sc-p-font-text-text-tight-13-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-text-tight-13: var(--sc-p-font-weight-regular) var(--sc-p-font-size-13)/var(--sc-p-font-line-height-tight) var(--sc-p-font-family-text);
  --sc-p-font-text-mono-11-family: var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-11-size: var(--sc-p-font-size-11);
  --sc-p-font-text-mono-11-weight: var(--sc-p-font-weight-semibold);
  --sc-p-font-text-mono-11-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-mono-11-letter-spacing: var(--sc-p-font-tracking-wider);
  --sc-p-font-text-mono-11: var(--sc-p-font-weight-semibold) var(--sc-p-font-size-11)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-12-family: var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-12-size: var(--sc-p-font-size-12);
  --sc-p-font-text-mono-12-weight: var(--sc-p-font-weight-medium);
  --sc-p-font-text-mono-12-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-mono-12-letter-spacing: var(--sc-p-font-tracking-wide);
  --sc-p-font-text-mono-12: var(--sc-p-font-weight-medium) var(--sc-p-font-size-12)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-13-family: var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-13-size: var(--sc-p-font-size-13);
  --sc-p-font-text-mono-13-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-mono-13-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-mono-13-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-mono-13: var(--sc-p-font-weight-regular) var(--sc-p-font-size-13)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-14-family: var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-14-size: var(--sc-p-font-size-14);
  --sc-p-font-text-mono-14-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-mono-14-line-height: var(--sc-p-font-line-height-base);
  --sc-p-font-text-mono-14-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-mono-14: var(--sc-p-font-weight-regular) var(--sc-p-font-size-14)/var(--sc-p-font-line-height-base) var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-16-family: var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-16-size: var(--sc-p-font-size-16);
  --sc-p-font-text-mono-16-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-mono-16-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-mono-16-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-mono-16: var(--sc-p-font-weight-regular) var(--sc-p-font-size-16)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-14-loose-family: var(--sc-p-font-family-mono);
  --sc-p-font-text-mono-14-loose-size: var(--sc-p-font-size-14);
  --sc-p-font-text-mono-14-loose-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-mono-14-loose-line-height: var(--sc-p-font-line-height-loose);
  --sc-p-font-text-mono-14-loose-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-mono-14-loose: var(--sc-p-font-weight-regular) var(--sc-p-font-size-14)/var(--sc-p-font-line-height-loose) var(--sc-p-font-family-mono);
  --sc-p-font-text-offscale-body-18-family: var(--sc-p-font-family-text);
  --sc-p-font-text-offscale-body-18-size: var(--sc-p-font-size-offscale-18);
  --sc-p-font-text-offscale-body-18-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-offscale-body-18-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-offscale-body-18-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-offscale-body-18: var(--sc-p-font-weight-regular) var(--sc-p-font-size-offscale-18)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-text);
  --sc-p-font-text-offscale-body-22-family: var(--sc-p-font-family-text);
  --sc-p-font-text-offscale-body-22-size: var(--sc-p-font-size-offscale-22);
  --sc-p-font-text-offscale-body-22-weight: var(--sc-p-font-weight-regular);
  --sc-p-font-text-offscale-body-22-line-height: var(--sc-p-font-line-height-relaxed);
  --sc-p-font-text-offscale-body-22-letter-spacing: var(--sc-p-font-tracking-normal);
  --sc-p-font-text-offscale-body-22: var(--sc-p-font-weight-regular) var(--sc-p-font-size-offscale-22)/var(--sc-p-font-line-height-relaxed) var(--sc-p-font-family-text);
  --sc-p-font-text-offscale-display-200-family: var(--sc-p-font-family-display);
  --sc-p-font-text-offscale-display-200-size: var(--sc-p-font-size-offscale-200);
  --sc-p-font-text-offscale-display-200-weight: var(--sc-p-font-weight-black);
  --sc-p-font-text-offscale-display-200-line-height: 0.9;
  --sc-p-font-text-offscale-display-200-letter-spacing: var(--sc-p-font-tracking-tightest);
  --sc-p-font-text-offscale-display-200: var(--sc-p-font-weight-black) var(--sc-p-font-size-offscale-200)/0.9 var(--sc-p-font-family-display);
  --sc-p-space-4: 4px;
  --sc-p-space-8: 8px;
  --sc-p-space-12: 12px;
  --sc-p-space-16: 16px;
  --sc-p-space-20: 20px;
  --sc-p-space-24: 24px;
  --sc-p-space-28: 28px;
  --sc-p-space-32: 32px;
  --sc-p-space-48: 48px;
  --sc-p-space-64: 64px;
  --sc-p-space-80: 80px;
  --sc-p-space-96: 96px;
  --sc-p-space-120: 120px;
  --sc-p-space-micro-2: 2px;
  --sc-p-space-micro-6: 6px;
  --sc-p-space-micro-10: 10px;
  --sc-p-space-micro-14: 14px;
  --sc-p-space-micro-18: 18px;
  --sc-p-space-micro-22: 22px;
  --sc-p-radius-none: 0px;
  --sc-p-radius-input: 3px;
  --sc-p-radius-default: 8px;
  --sc-p-radius-large: 16px;
  --sc-p-radius-circle: 9999px;
  --sc-p-border-width-hairline: 1px;
  --sc-p-border-width-focus: 2px;
  --sc-p-border-width-accent: 3px;
  --sc-p-motion-duration-micro: 200ms;
  --sc-p-motion-duration-press: 160ms;
  --sc-p-motion-duration-press-release: 220ms;
  --sc-p-motion-duration-standard: 380ms;
  --sc-p-motion-duration-orchestrated: 720ms;
  --sc-p-motion-easing-out: cubic-bezier(0.22, 1, 0.36, 1);
  --sc-p-motion-easing-out-strong: cubic-bezier(0.23, 1, 0.32, 1);
  --sc-p-motion-easing-spring-out: cubic-bezier(0.34, 1.56, 0.64, 1);
  --sc-p-motion-easing-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --sc-p-motion-easing-cinematic: cubic-bezier(0.32, 0.08, 0.12, 1);
  --sc-p-motion-scale-press-button: 0.985;
  --sc-p-motion-scale-press-tap: 0.92;
  --sc-p-motion-scale-press-card: 0.995;
  --sc-p-motion-scale-recede-board: 0.98;
  --sc-p-motion-opacity-recede-board: 0.6;

  /* --- Semantic · light mode (default) (--sc-*) --------- */
  --sc-color-surface-page: var(--sc-p-color-warm-gray-100);
  --sc-color-surface-sunk: var(--sc-p-color-warm-gray-200);
  --sc-color-surface-deep-sunk: var(--sc-p-color-warm-gray-300);
  --sc-color-surface-raised: var(--sc-p-color-warm-gray-50);
  --sc-color-surface-floating: var(--sc-p-color-warm-gray-25);
  --sc-color-surface-rail: var(--sc-p-color-warm-gray-300);
  --sc-color-surface-nav: var(--sc-p-color-warm-gray-40);
  --sc-color-surface-nav-hover: var(--sc-p-color-utility-white);
  --sc-color-surface-hover: var(--sc-p-color-warm-gray-250);
  --sc-color-text-primary: var(--sc-p-color-warm-gray-800);
  --sc-color-text-secondary: var(--sc-p-color-warm-gray-500);
  --sc-color-text-tertiary: var(--sc-p-color-warm-gray-450);
  --sc-color-text-disabled: var(--sc-p-color-warm-gray-400);
  --sc-color-text-on-accent: var(--sc-p-color-utility-white);
  --sc-color-border-default: var(--sc-p-color-warm-gray-350);
  --sc-color-border-subtle: var(--sc-p-color-warm-gray-250);
  --sc-color-border-strong: var(--sc-p-color-warm-gray-800);
  --sc-color-border-focus: var(--sc-p-color-focus-ring-light);
  --sc-color-divider-subtle: rgb(var(--sc-p-color-ink-rgb) / 0.06);
  --sc-color-divider-default: rgb(var(--sc-p-color-ink-rgb) / 0.10);
  --sc-color-divider-strong: rgb(var(--sc-p-color-ink-rgb) / 0.16);
  --sc-color-interactive-default: var(--sc-p-color-warm-gray-800);
  --sc-color-interactive-hover: var(--sc-p-color-teal-600);
  --sc-color-interactive-hover-ink: var(--sc-p-color-interactive-hover-ink-light);
  --sc-color-interactive-selected: #038E931A;
  --sc-color-interactive-active: var(--sc-p-color-teal-700);
  --sc-color-status-success: var(--sc-p-color-status-success-light);
  --sc-color-status-warning: var(--sc-p-color-status-warning-light);
  --sc-color-status-error: var(--sc-p-color-status-error-light);
  --sc-color-status-info: var(--sc-p-color-status-info-light);
  --sc-color-status-success-ink: var(--sc-p-color-status-success-ink-light);
  --sc-color-status-warning-ink: var(--sc-p-color-status-warning-ink-light);
  --sc-color-status-info-ink: var(--sc-p-color-status-info-ink-light);
  --sc-color-signal-live: var(--sc-p-color-signal-live);
  --sc-color-signal-on-live: var(--sc-p-color-warm-gray-100);
  --sc-color-signal-progress: var(--sc-p-color-signal-progress);
  --sc-color-signal-on-progress: var(--sc-p-color-warm-gray-900);
  --sc-color-atmosphere-celadon: var(--sc-p-color-atmosphere-pale-blue-green);
  --sc-color-atmosphere-river: var(--sc-p-color-atmosphere-river);
  --sc-color-atmosphere-lapis: var(--sc-p-color-atmosphere-river-deep);
  --sc-color-atmosphere-indigo: var(--sc-p-color-atmosphere-indigo);
  --sc-color-atmosphere-mark: var(--sc-p-color-teal-700);
  --sc-color-brand-accent: var(--sc-p-color-teal-500);
  --sc-color-brand-accent-deep: var(--sc-p-color-teal-700);
  --sc-color-brand-accent-ink: var(--sc-p-color-teal-700);
  --sc-color-brand-accent-fill: var(--sc-p-color-teal-600);
  --sc-color-text-on-inverse: var(--sc-p-color-warm-gray-50);
  --sc-color-surface-inverse: var(--sc-p-color-warm-gray-800);
  --sc-color-control-key-shade: rgb(var(--sc-p-color-ink-rgb) / 0.05);
  --sc-color-control-key-hover-fill: var(--sc-p-color-teal-600);
  --sc-color-control-key-hover-ink: var(--sc-p-color-utility-white);
  --sc-color-switch-thumb-rim-top: var(--sc-p-color-utility-white);
  --sc-color-switch-thumb-rim-bottom: var(--sc-p-color-warm-gray-200);
  --sc-color-switch-thumb-face-top: var(--sc-p-color-warm-gray-50);
  --sc-color-switch-thumb-face-bottom: var(--sc-p-color-warm-gray-100);
  --sc-color-switch-glyph-on: var(--sc-p-color-utility-white);
  --sc-color-switch-glyph-off: var(--sc-p-color-warm-gray-25);
  --sc-color-switch-track-off: var(--sc-p-color-warm-gray-300);
  --sc-color-switch-track-off-hover: var(--sc-p-color-warm-gray-250);
  --sc-color-segmented-control-track: var(--sc-p-color-warm-gray-200);
  --sc-color-segmented-control-indicator: var(--sc-p-color-warm-gray-25);
  --sc-color-segmented-control-indicator-shade: rgb(var(--sc-p-color-ink-rgb) / 0.05);
  --sc-color-stepper-track: var(--sc-p-color-warm-gray-200);
  --sc-color-stepper-key: var(--sc-color-surface-raised);
  --sc-color-stepper-key-hover: var(--sc-color-control-key-hover-fill);
  --sc-color-stepper-key-hover-ink: var(--sc-color-control-key-hover-ink);
  --sc-color-stepper-key-pressed: var(--sc-color-brand-accent-deep);
  --sc-color-stepper-key-pressed-ink: var(--sc-color-text-on-accent);
  --sc-color-stepper-key-shade: var(--sc-color-control-key-shade);
  --sc-color-slider-track: var(--sc-p-color-warm-gray-300);
  --sc-color-slider-track-disabled: var(--sc-p-color-warm-gray-200);
  --sc-color-slider-fill: var(--sc-p-color-teal-500);
  --sc-color-slider-fill-hover: var(--sc-p-color-teal-600);
  --sc-color-slider-fill-disabled: var(--sc-p-color-warm-gray-400);
  --sc-color-slider-thumb-rim-top: var(--sc-p-color-utility-white);
  --sc-color-slider-thumb-rim-bottom: var(--sc-p-color-warm-gray-200);
  --sc-color-slider-thumb-face-top: var(--sc-p-color-warm-gray-50);
  --sc-color-slider-thumb-face-bottom: var(--sc-p-color-warm-gray-100);
  --sc-color-input-well: rgb(var(--sc-p-color-white-rgb) / 0.46);
  --sc-color-input-well-hover: rgb(var(--sc-p-color-white-rgb) / 0.46);
  --sc-color-input-well-focus: rgb(var(--sc-p-color-white-rgb) / 0.46);
  --sc-color-input-well-disabled: rgb(var(--sc-p-color-white-rgb) / 0.46);
  --sc-color-input-adornment: var(--sc-p-color-warm-gray-500);
  --sc-color-input-divider: var(--sc-p-color-warm-gray-300);
  --sc-color-card-flat: var(--sc-color-surface-floating);
  --sc-color-card-flat-hover: var(--sc-color-surface-raised);
  --sc-color-card-glass-subtle: rgb(var(--sc-p-color-white-rgb) / 0.12);
  --sc-color-card-glass-regular: rgb(var(--sc-p-color-white-rgb) / 0.20);
  --sc-color-card-glass-heavy: rgb(var(--sc-p-color-white-rgb) / 0.30);
  --sc-color-card-glass-hover: rgb(var(--sc-p-color-white-rgb) / 0.08);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-control: var(--sc-p-radius-input);
  --sc-radius-surface: var(--sc-p-radius-default);
  --sc-radius-surface-large: var(--sc-p-radius-large);
  --sc-radius-pill: var(--sc-p-radius-circle);
  --sc-radius-none: var(--sc-p-radius-none);
  --sc-shadow-control-raised: -4px 4px 8px rgb(var(--sc-p-color-ink-rgb) / 0.10), -2px 2px 4px rgb(var(--sc-p-color-ink-rgb) / 0.08), 4px -4px 8px rgb(var(--sc-p-color-white-rgb) / 0.90), 2px -2px 4px rgb(var(--sc-p-color-white-rgb) / 0.70);
  --sc-shadow-control-inset: inset 0 1px 3px rgb(var(--sc-p-color-ink-rgb) / 0.08), inset 0 0 0 1px rgb(var(--sc-p-color-ink-rgb) / 0.06);
  --sc-shadow-control-key: 2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1);
  --sc-shadow-control-key-hover: 2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1);
  --sc-shadow-control-key-pressed: 2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(var(--sc-p-color-white-rgb) / 0.30);
  --sc-shadow-switch-track: inset 0 0.45px 0.9px rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-shadow-switch-thumb: 0 0.37px 0.52px -0.28px rgb(var(--sc-p-color-ink-rgb) / 0.26), 0 0.95px 1.33px -0.56px rgb(var(--sc-p-color-ink-rgb) / 0.25), 0 1.9px 2.66px -0.84px rgb(var(--sc-p-color-ink-rgb) / 0.24), 0 3.6px 5.05px -1.13px rgb(var(--sc-p-color-ink-rgb) / 0.22), 0 7.16px 10.03px -1.41px rgb(var(--sc-p-color-ink-rgb) / 0.18), 0 15.75px 22.05px 0 rgb(var(--sc-p-color-ink-rgb) / 0.09);
  --sc-shadow-segmented-control-track: inset 0.71px 0.71px 2px 0 rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-shadow-segmented-control-indicator: 2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1);
  --sc-shadow-stepper-track: inset 0.71px 0.71px 2px 0 rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-shadow-stepper-key: var(--sc-shadow-control-key);
  --sc-shadow-stepper-key-hover: var(--sc-shadow-control-key-hover);
  --sc-shadow-stepper-key-pressed: var(--sc-shadow-control-key-pressed);
  --sc-shadow-slider-track: inset 0.71px 0.71px 2px 0 rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-shadow-slider-thumb: var(--sc-shadow-control-key);
  --sc-shadow-slider-thumb-pressed: var(--sc-shadow-control-key-pressed);
  --sc-shadow-input-well: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-card-glass-subtle: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.20), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.1);
  --sc-shadow-card-glass-regular: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.30), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-shadow-card-glass-heavy: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.45), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.225);
  --sc-shadow-card-glass-text: 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-motion-hover-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-hover-easing: var(--sc-p-motion-easing-out);
  --sc-motion-press-duration: var(--sc-p-motion-duration-press);
  --sc-motion-press-easing: var(--sc-p-motion-easing-out-strong);
  --sc-motion-press-scale: var(--sc-p-motion-scale-press-button);
  --sc-motion-press-card-scale: var(--sc-p-motion-scale-press-card);
  --sc-motion-press-release-duration: var(--sc-p-motion-duration-press-release);
  --sc-motion-press-release-easing: var(--sc-p-motion-easing-spring-out);
  --sc-motion-recede-scale: var(--sc-p-motion-scale-recede-board);
  --sc-motion-recede-opacity: var(--sc-p-motion-opacity-recede-board);
  --sc-motion-mode-duration: var(--sc-p-motion-duration-standard);
  --sc-motion-mode-easing: var(--sc-p-motion-easing-in-out);
  --sc-motion-entrance-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-entrance-easing: var(--sc-p-motion-easing-cinematic);
  --sc-motion-cut-duration: var(--sc-p-motion-duration-standard);
  --sc-motion-cut-easing: var(--sc-p-motion-easing-in-out);
  --sc-motion-reveal-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-reveal-easing: var(--sc-p-motion-easing-out);
  --sc-motion-switch-travel-duration: 600ms;
  --sc-motion-switch-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-switch-stretch: 1.06;
  --sc-motion-switch-squash: 0.15;
  --sc-motion-switch-press-lean: 0.12;
  --sc-motion-switch-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-segmented-control-travel-duration: 600ms;
  --sc-motion-segmented-control-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-segmented-control-stretch: 0.45;
  --sc-motion-segmented-control-squash: 0.2;
  --sc-motion-segmented-control-press-lean: 0.15;
  --sc-motion-segmented-control-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-plus-underline-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-plus-underline-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-plus-underline-stretch: 0;
  --sc-motion-plus-underline-squash: 0;
  --sc-motion-plus-underline-press-lean: 0;
  --sc-motion-plus-underline-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-nav-bar-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-nav-bar-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-nav-bar-stretch: 0;
  --sc-motion-nav-bar-squash: 0;
  --sc-motion-nav-bar-press-lean: 0;
  --sc-motion-nav-bar-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-tooltip-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-tooltip-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-tooltip-stretch: 0;
  --sc-motion-tooltip-squash: 0;
  --sc-motion-stepper-travel-duration: 1062ms;
  --sc-motion-stepper-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-stepper-glyph-press-scale: 0.85;
  --sc-motion-stepper-roll: 1;
  --sc-motion-stepper-stretch: 0.45;
  --sc-motion-stepper-squash: 0;
  --sc-motion-slider-travel-duration: 1062ms;
  --sc-motion-slider-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-slider-drag-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-drag-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-stretch: 0.45;
  --sc-motion-slider-squash: 0;
  --sc-motion-slider-thumb-press-scale: 0.985;
  --sc-motion-card-press-scale: 1;
  --sc-font-text-label-chrome-family: var(--sc-p-font-text-11-family);
  --sc-font-text-label-chrome-size: var(--sc-p-font-text-11-size);
  --sc-font-text-label-chrome-weight: var(--sc-p-font-text-11-weight);
  --sc-font-text-label-chrome-line-height: var(--sc-p-font-text-11-line-height);
  --sc-font-text-label-chrome-letter-spacing: var(--sc-p-font-text-11-letter-spacing);
  --sc-font-text-label-chrome: var(--sc-p-font-text-11);
  --sc-font-text-label-ui-family: var(--sc-p-font-text-12-family);
  --sc-font-text-label-ui-size: var(--sc-p-font-text-12-size);
  --sc-font-text-label-ui-weight: var(--sc-p-font-text-12-weight);
  --sc-font-text-label-ui-line-height: var(--sc-p-font-text-12-line-height);
  --sc-font-text-label-ui-letter-spacing: var(--sc-p-font-text-12-letter-spacing);
  --sc-font-text-label-ui: var(--sc-p-font-text-12);
  --sc-font-text-label-ui-tight-family: var(--sc-p-font-text-bold-12-family);
  --sc-font-text-label-ui-tight-size: var(--sc-p-font-text-bold-12-size);
  --sc-font-text-label-ui-tight-weight: var(--sc-p-font-text-bold-12-weight);
  --sc-font-text-label-ui-tight-line-height: var(--sc-p-font-text-bold-12-line-height);
  --sc-font-text-label-ui-tight-letter-spacing: var(--sc-p-font-text-bold-12-letter-spacing);
  --sc-font-text-label-ui-tight: var(--sc-p-font-text-bold-12);
  --sc-font-text-label-ui-medium-family: var(--sc-p-font-text-medium-12-family);
  --sc-font-text-label-ui-medium-size: var(--sc-p-font-text-medium-12-size);
  --sc-font-text-label-ui-medium-weight: var(--sc-p-font-text-medium-12-weight);
  --sc-font-text-label-ui-medium-line-height: var(--sc-p-font-text-medium-12-line-height);
  --sc-font-text-label-ui-medium-letter-spacing: var(--sc-p-font-text-medium-12-letter-spacing);
  --sc-font-text-label-ui-medium: var(--sc-p-font-text-medium-12);
  --sc-font-text-label-button-sm-family: var(--sc-p-font-text-button-12-family);
  --sc-font-text-label-button-sm-size: var(--sc-p-font-text-button-12-size);
  --sc-font-text-label-button-sm-weight: var(--sc-p-font-text-button-12-weight);
  --sc-font-text-label-button-sm-line-height: var(--sc-p-font-text-button-12-line-height);
  --sc-font-text-label-button-sm-letter-spacing: var(--sc-p-font-text-button-12-letter-spacing);
  --sc-font-text-label-button-sm: var(--sc-p-font-text-button-12);
  --sc-font-text-label-button-lg-family: var(--sc-p-font-text-button-14-family);
  --sc-font-text-label-button-lg-size: var(--sc-p-font-text-button-14-size);
  --sc-font-text-label-button-lg-weight: var(--sc-p-font-text-button-14-weight);
  --sc-font-text-label-button-lg-line-height: var(--sc-p-font-text-button-14-line-height);
  --sc-font-text-label-button-lg-letter-spacing: var(--sc-p-font-text-button-14-letter-spacing);
  --sc-font-text-label-button-lg: var(--sc-p-font-text-button-14);
  --sc-font-text-label-tab-family: var(--sc-p-font-text-medium-13-family);
  --sc-font-text-label-tab-size: var(--sc-p-font-text-medium-13-size);
  --sc-font-text-label-tab-weight: var(--sc-p-font-text-medium-13-weight);
  --sc-font-text-label-tab-line-height: var(--sc-p-font-text-medium-13-line-height);
  --sc-font-text-label-tab-letter-spacing: var(--sc-p-font-text-medium-13-letter-spacing);
  --sc-font-text-label-tab: var(--sc-p-font-text-medium-13);
  --sc-font-text-label-nav-heading-family: var(--sc-p-font-text-display-tight-11-family);
  --sc-font-text-label-nav-heading-size: var(--sc-p-font-text-display-tight-11-size);
  --sc-font-text-label-nav-heading-weight: var(--sc-p-font-text-display-tight-11-weight);
  --sc-font-text-label-nav-heading-line-height: var(--sc-p-font-text-display-tight-11-line-height);
  --sc-font-text-label-nav-heading-letter-spacing: var(--sc-p-font-text-display-tight-11-letter-spacing);
  --sc-font-text-label-nav-heading: var(--sc-p-font-text-display-tight-11);
  --sc-font-text-label-nav-current-family: var(--sc-p-font-text-bold-13-family);
  --sc-font-text-label-nav-current-size: var(--sc-p-font-text-bold-13-size);
  --sc-font-text-label-nav-current-weight: var(--sc-p-font-text-bold-13-weight);
  --sc-font-text-label-nav-current-line-height: var(--sc-p-font-text-bold-13-line-height);
  --sc-font-text-label-nav-current-letter-spacing: var(--sc-p-font-text-bold-13-letter-spacing);
  --sc-font-text-label-nav-current: var(--sc-p-font-text-bold-13);
  --sc-font-text-caption-family: var(--sc-p-font-text-13-family);
  --sc-font-text-caption-size: var(--sc-p-font-text-13-size);
  --sc-font-text-caption-weight: var(--sc-p-font-text-13-weight);
  --sc-font-text-caption-line-height: var(--sc-p-font-text-13-line-height);
  --sc-font-text-caption-letter-spacing: var(--sc-p-font-text-13-letter-spacing);
  --sc-font-text-caption: var(--sc-p-font-text-13);
  --sc-font-text-body-dense-family: var(--sc-p-font-text-14-family);
  --sc-font-text-body-dense-size: var(--sc-p-font-text-14-size);
  --sc-font-text-body-dense-weight: var(--sc-p-font-text-14-weight);
  --sc-font-text-body-dense-line-height: var(--sc-p-font-text-14-line-height);
  --sc-font-text-body-dense-letter-spacing: var(--sc-p-font-text-14-letter-spacing);
  --sc-font-text-body-dense: var(--sc-p-font-text-14);
  --sc-font-text-body-default-family: var(--sc-p-font-text-16-family);
  --sc-font-text-body-default-size: var(--sc-p-font-text-16-size);
  --sc-font-text-body-default-weight: var(--sc-p-font-text-16-weight);
  --sc-font-text-body-default-line-height: var(--sc-p-font-text-16-line-height);
  --sc-font-text-body-default-letter-spacing: var(--sc-p-font-text-16-letter-spacing);
  --sc-font-text-body-default: var(--sc-p-font-text-16);
  --sc-font-text-body-lead-family: var(--sc-p-font-text-20-family);
  --sc-font-text-body-lead-size: var(--sc-p-font-text-20-size);
  --sc-font-text-body-lead-weight: var(--sc-p-font-text-20-weight);
  --sc-font-text-body-lead-line-height: var(--sc-p-font-text-20-line-height);
  --sc-font-text-body-lead-letter-spacing: var(--sc-p-font-text-20-letter-spacing);
  --sc-font-text-body-lead: var(--sc-p-font-text-20);
  --sc-font-text-body-dense-bold-family: var(--sc-p-font-text-bold-14-family);
  --sc-font-text-body-dense-bold-size: var(--sc-p-font-text-bold-14-size);
  --sc-font-text-body-dense-bold-weight: var(--sc-p-font-text-bold-14-weight);
  --sc-font-text-body-dense-bold-line-height: var(--sc-p-font-text-bold-14-line-height);
  --sc-font-text-body-dense-bold-letter-spacing: var(--sc-p-font-text-bold-14-letter-spacing);
  --sc-font-text-body-dense-bold: var(--sc-p-font-text-bold-14);
  --sc-font-text-body-default-bold-family: var(--sc-p-font-text-bold-16-family);
  --sc-font-text-body-default-bold-size: var(--sc-p-font-text-bold-16-size);
  --sc-font-text-body-default-bold-weight: var(--sc-p-font-text-bold-16-weight);
  --sc-font-text-body-default-bold-line-height: var(--sc-p-font-text-bold-16-line-height);
  --sc-font-text-body-default-bold-letter-spacing: var(--sc-p-font-text-bold-16-letter-spacing);
  --sc-font-text-body-default-bold: var(--sc-p-font-text-bold-16);
  --sc-font-text-body-lead-bold-family: var(--sc-p-font-text-bold-20-family);
  --sc-font-text-body-lead-bold-size: var(--sc-p-font-text-bold-20-size);
  --sc-font-text-body-lead-bold-weight: var(--sc-p-font-text-bold-20-weight);
  --sc-font-text-body-lead-bold-line-height: var(--sc-p-font-text-bold-20-line-height);
  --sc-font-text-body-lead-bold-letter-spacing: var(--sc-p-font-text-bold-20-letter-spacing);
  --sc-font-text-body-lead-bold: var(--sc-p-font-text-bold-20);
  --sc-font-text-title-card-family: var(--sc-p-font-text-24-family);
  --sc-font-text-title-card-size: var(--sc-p-font-text-24-size);
  --sc-font-text-title-card-weight: var(--sc-p-font-text-24-weight);
  --sc-font-text-title-card-line-height: var(--sc-p-font-text-24-line-height);
  --sc-font-text-title-card-letter-spacing: var(--sc-p-font-text-24-letter-spacing);
  --sc-font-text-title-card: var(--sc-p-font-text-24);
  --sc-font-text-title-section-family: var(--sc-p-font-text-32-family);
  --sc-font-text-title-section-size: var(--sc-p-font-text-32-size);
  --sc-font-text-title-section-weight: var(--sc-p-font-text-32-weight);
  --sc-font-text-title-section-line-height: var(--sc-p-font-text-32-line-height);
  --sc-font-text-title-section-letter-spacing: var(--sc-p-font-text-32-letter-spacing);
  --sc-font-text-title-section: var(--sc-p-font-text-32);
  --sc-font-text-display-xs-family: var(--sc-p-font-text-display-tight-32-family);
  --sc-font-text-display-xs-size: var(--sc-p-font-text-display-tight-32-size);
  --sc-font-text-display-xs-weight: var(--sc-p-font-text-display-tight-32-weight);
  --sc-font-text-display-xs-line-height: var(--sc-p-font-text-display-tight-32-line-height);
  --sc-font-text-display-xs-letter-spacing: var(--sc-p-font-text-display-tight-32-letter-spacing);
  --sc-font-text-display-xs: var(--sc-p-font-text-display-tight-32);
  --sc-font-text-display-sm-family: var(--sc-p-font-text-44-family);
  --sc-font-text-display-sm-size: var(--sc-p-font-text-44-size);
  --sc-font-text-display-sm-weight: var(--sc-p-font-text-44-weight);
  --sc-font-text-display-sm-line-height: var(--sc-p-font-text-44-line-height);
  --sc-font-text-display-sm-letter-spacing: var(--sc-p-font-text-44-letter-spacing);
  --sc-font-text-display-sm: var(--sc-p-font-text-44);
  --sc-font-text-display-md-family: var(--sc-p-font-text-60-family);
  --sc-font-text-display-md-size: var(--sc-p-font-text-60-size);
  --sc-font-text-display-md-weight: var(--sc-p-font-text-60-weight);
  --sc-font-text-display-md-line-height: var(--sc-p-font-text-60-line-height);
  --sc-font-text-display-md-letter-spacing: var(--sc-p-font-text-60-letter-spacing);
  --sc-font-text-display-md: var(--sc-p-font-text-60);
  --sc-font-text-display-lg-family: var(--sc-p-font-text-84-family);
  --sc-font-text-display-lg-size: var(--sc-p-font-text-84-size);
  --sc-font-text-display-lg-weight: var(--sc-p-font-text-84-weight);
  --sc-font-text-display-lg-line-height: var(--sc-p-font-text-84-line-height);
  --sc-font-text-display-lg-letter-spacing: var(--sc-p-font-text-84-letter-spacing);
  --sc-font-text-display-lg: var(--sc-p-font-text-84);
  --sc-font-text-display-xl-family: var(--sc-p-font-text-120-family);
  --sc-font-text-display-xl-size: var(--sc-p-font-text-120-size);
  --sc-font-text-display-xl-weight: var(--sc-p-font-text-120-weight);
  --sc-font-text-display-xl-line-height: var(--sc-p-font-text-120-line-height);
  --sc-font-text-display-xl-letter-spacing: var(--sc-p-font-text-120-letter-spacing);
  --sc-font-text-display-xl: var(--sc-p-font-text-120);
  --sc-font-text-mono-chrome-family: var(--sc-p-font-text-mono-11-family);
  --sc-font-text-mono-chrome-size: var(--sc-p-font-text-mono-11-size);
  --sc-font-text-mono-chrome-weight: var(--sc-p-font-text-mono-11-weight);
  --sc-font-text-mono-chrome-line-height: var(--sc-p-font-text-mono-11-line-height);
  --sc-font-text-mono-chrome-letter-spacing: var(--sc-p-font-text-mono-11-letter-spacing);
  --sc-font-text-mono-chrome: var(--sc-p-font-text-mono-11);
  --sc-font-text-mono-caption-family: var(--sc-p-font-text-mono-13-family);
  --sc-font-text-mono-caption-size: var(--sc-p-font-text-mono-13-size);
  --sc-font-text-mono-caption-weight: var(--sc-p-font-text-mono-13-weight);
  --sc-font-text-mono-caption-line-height: var(--sc-p-font-text-mono-13-line-height);
  --sc-font-text-mono-caption-letter-spacing: var(--sc-p-font-text-mono-13-letter-spacing);
  --sc-font-text-mono-caption: var(--sc-p-font-text-mono-13);
  --sc-font-text-mono-body-family: var(--sc-p-font-text-mono-16-family);
  --sc-font-text-mono-body-size: var(--sc-p-font-text-mono-16-size);
  --sc-font-text-mono-body-weight: var(--sc-p-font-text-mono-16-weight);
  --sc-font-text-mono-body-line-height: var(--sc-p-font-text-mono-16-line-height);
  --sc-font-text-mono-body-letter-spacing: var(--sc-p-font-text-mono-16-letter-spacing);
  --sc-font-text-mono-body: var(--sc-p-font-text-mono-16);
  --sc-font-text-mono-flow-family: var(--sc-p-font-text-mono-14-loose-family);
  --sc-font-text-mono-flow-size: var(--sc-p-font-text-mono-14-loose-size);
  --sc-font-text-mono-flow-weight: var(--sc-p-font-text-mono-14-loose-weight);
  --sc-font-text-mono-flow-line-height: var(--sc-p-font-text-mono-14-loose-line-height);
  --sc-font-text-mono-flow-letter-spacing: var(--sc-p-font-text-mono-14-loose-letter-spacing);
  --sc-font-text-mono-flow: var(--sc-p-font-text-mono-14-loose);
  --sc-font-text-nav-header-family: var(--sc-p-font-text-display-tight-12-family);
  --sc-font-text-nav-header-size: var(--sc-p-font-text-display-tight-12-size);
  --sc-font-text-nav-header-weight: var(--sc-p-font-text-display-tight-12-weight);
  --sc-font-text-nav-header-line-height: var(--sc-p-font-text-display-tight-12-line-height);
  --sc-font-text-nav-header-letter-spacing: var(--sc-p-font-text-display-tight-12-letter-spacing);
  --sc-font-text-nav-header: var(--sc-p-font-text-display-tight-12);
  --sc-font-text-nav-node-family: var(--sc-p-font-text-text-tight-13-family);
  --sc-font-text-nav-node-size: var(--sc-p-font-text-text-tight-13-size);
  --sc-font-text-nav-node-weight: var(--sc-p-font-text-text-tight-13-weight);
  --sc-font-text-nav-node-line-height: var(--sc-p-font-text-text-tight-13-line-height);
  --sc-font-text-nav-node-letter-spacing: var(--sc-p-font-text-text-tight-13-letter-spacing);
  --sc-font-text-nav-node: var(--sc-p-font-text-text-tight-13);
  --sc-size-card-glass-subtle-frost: var(--sc-p-space-4);
  --sc-size-card-glass-subtle-refraction: 40;
  --sc-size-card-glass-subtle-depth: 40;
  --sc-size-card-glass-subtle-splay: 57;
  --sc-size-card-glass-subtle-saturation: 100;
  --sc-size-card-glass-regular-frost: 9px;
  --sc-size-card-glass-regular-refraction: 65;
  --sc-size-card-glass-regular-depth: 68;
  --sc-size-card-glass-regular-splay: 57;
  --sc-size-card-glass-regular-saturation: 100;
  --sc-size-card-glass-heavy-frost: var(--sc-p-space-16);
  --sc-size-card-glass-heavy-refraction: 85;
  --sc-size-card-glass-heavy-depth: 85;
  --sc-size-card-glass-heavy-splay: 57;
  --sc-size-card-glass-heavy-saturation: 100;
  --sc-size-icon-xs: var(--sc-p-space-12);
  --sc-size-icon-sm: var(--sc-p-space-16);
  --sc-size-icon-md: var(--sc-p-space-24);
  --sc-size-icon-lg: var(--sc-p-space-32);
  --sc-size-avatar-xs: var(--sc-p-space-24);
  --sc-size-avatar-sm: var(--sc-p-space-32);
  --sc-size-avatar-md: var(--sc-p-space-48);
  --sc-size-avatar-lg: var(--sc-p-space-64);
  --sc-size-switch-track-width: 40px;
  --sc-size-switch-track-height: 22px;
  --sc-size-switch-thumb: 15px;
  --sc-size-switch-glyph: var(--sc-p-space-micro-6);
  --sc-size-switch-label-offset: 0px;
  --sc-size-progress-bar-height: var(--sc-p-space-4);
  --sc-size-progress-circular: var(--sc-p-space-48);
  --sc-size-progress-circular-stroke: var(--sc-p-space-4);
  --sc-size-progress-bar-height-active: var(--sc-p-space-micro-6);
  --sc-size-progress-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-input-icon: var(--sc-p-space-20);
  --sc-size-input-clear: var(--sc-p-space-16);
  --sc-size-input-clear-target: var(--sc-p-space-32);
  --sc-size-slider-track: var(--sc-p-space-4);
  --sc-size-slider-track-active: var(--sc-p-space-micro-6);
  --sc-size-slider-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-slider-thumb: 15px;
  --sc-size-button-icon-lg: var(--sc-p-space-micro-14);
  --sc-size-button-icon-sm: var(--sc-p-space-12);
  --sc-size-touch-target: var(--sc-p-space-48);
  --sc-space-component-padding-sm: var(--sc-p-space-8);
  --sc-space-component-padding-md: var(--sc-p-space-16);
  --sc-space-component-padding-lg: var(--sc-p-space-24);
  --sc-space-component-padding-card: var(--sc-p-space-24);
  --sc-space-component-padding-inline-sm: var(--sc-p-space-micro-6);
  --sc-space-component-padding-inline-md: var(--sc-p-space-12);
  --sc-space-component-padding-inline-lg: var(--sc-p-space-16);
  --sc-space-component-padding-inline-button-lg: var(--sc-p-space-24);
  --sc-space-component-padding-inline-button-sm: var(--sc-p-space-16);
  --sc-space-component-padding-inline-input: var(--sc-p-space-16);
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}

[data-theme="dark"] {
  /* --- Semantic · dark mode overrides ------------------- */
  --sc-color-surface-page: var(--sc-p-color-dark-surface-page);
  --sc-color-surface-sunk: var(--sc-p-color-dark-well);
  --sc-color-surface-deep-sunk: var(--sc-p-color-dark-raised2);
  --sc-color-surface-raised: var(--sc-p-color-dark-raised1);
  --sc-color-surface-floating: var(--sc-p-color-dark-raised2);
  --sc-color-surface-rail: var(--sc-p-color-dark-floor);
  --sc-color-surface-nav: var(--sc-p-color-dark-raised1);
  --sc-color-surface-nav-hover: var(--sc-p-color-dark-raised2);
  --sc-color-surface-hover: var(--sc-p-color-dark-raised1);
  --sc-color-text-primary: var(--sc-p-color-dark-text-primary);
  --sc-color-text-secondary: var(--sc-p-color-dark-text-secondary);
  --sc-color-text-tertiary: var(--sc-p-color-dark-text-tertiary);
  --sc-color-text-disabled: var(--sc-p-color-dark-text-disabled);
  --sc-color-text-on-accent: var(--sc-p-color-utility-white);
  --sc-color-border-default: var(--sc-p-color-dark-border);
  --sc-color-border-subtle: var(--sc-p-color-dark-border-subtle);
  --sc-color-border-strong: var(--sc-p-color-warm-gray-50);
  --sc-color-border-focus: var(--sc-p-color-focus-ring-dark);
  --sc-color-divider-subtle: rgb(var(--sc-p-color-white-rgb) / 0.05);
  --sc-color-divider-default: rgb(var(--sc-p-color-white-rgb) / 0.09);
  --sc-color-divider-strong: rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-color-interactive-default: var(--sc-p-color-warm-gray-50);
  --sc-color-interactive-hover: var(--sc-p-color-teal-300);
  --sc-color-interactive-hover-ink: var(--sc-p-color-teal-200);
  --sc-color-interactive-selected: #038E931A;
  --sc-color-interactive-active: var(--sc-p-color-teal-500);
  --sc-color-status-success: var(--sc-p-color-status-success-dark);
  --sc-color-status-warning: var(--sc-p-color-status-warning-dark);
  --sc-color-status-error: var(--sc-p-color-status-error-dark);
  --sc-color-status-info: var(--sc-p-color-status-info-dark);
  --sc-color-status-success-ink: var(--sc-p-color-status-success-ink-dark);
  --sc-color-status-warning-ink: var(--sc-p-color-status-warning-ink-dark);
  --sc-color-status-info-ink: var(--sc-p-color-status-info-ink-dark);
  --sc-color-signal-live: var(--sc-p-color-signal-live-bright);
  --sc-color-signal-on-live: var(--sc-p-color-dark-surface-page);
  --sc-color-signal-progress: var(--sc-p-color-signal-progress);
  --sc-color-signal-on-progress: var(--sc-p-color-warm-gray-900);
  --sc-color-atmosphere-celadon: var(--sc-p-color-atmosphere-pale-blue-green);
  --sc-color-atmosphere-river: var(--sc-p-color-atmosphere-river);
  --sc-color-atmosphere-lapis: var(--sc-p-color-atmosphere-river-deep);
  --sc-color-atmosphere-indigo: var(--sc-p-color-atmosphere-indigo);
  --sc-color-atmosphere-mark: var(--sc-p-color-warm-gray-100);
  --sc-color-brand-accent: var(--sc-p-color-teal-500);
  --sc-color-brand-accent-deep: var(--sc-p-color-teal-700);
  --sc-color-brand-accent-ink: var(--sc-p-color-teal-200);
  --sc-color-brand-accent-fill: var(--sc-p-color-teal-600);
  --sc-color-text-on-inverse: var(--sc-p-color-warm-gray-800);
  --sc-color-surface-inverse: var(--sc-p-color-warm-gray-50);
  --sc-color-control-key-shade: rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-color-control-key-hover-fill: var(--sc-p-color-teal-600);
  --sc-color-control-key-hover-ink: var(--sc-p-color-utility-white);
  --sc-color-switch-thumb-rim-top: var(--sc-p-color-dark-text-primary);
  --sc-color-switch-thumb-rim-bottom: var(--sc-p-color-warm-gray-350);
  --sc-color-switch-thumb-face-top: var(--sc-p-color-warm-gray-200);
  --sc-color-switch-thumb-face-bottom: var(--sc-p-color-dark-text-tertiary);
  --sc-color-switch-glyph-on: var(--sc-p-color-utility-white);
  --sc-color-switch-glyph-off: var(--sc-p-color-dark-text-disabled);
  --sc-color-switch-track-off: var(--sc-p-color-dark-well);
  --sc-color-switch-track-off-hover: var(--sc-p-color-dark-floor);
  --sc-color-segmented-control-track: var(--sc-p-color-dark-well);
  --sc-color-segmented-control-indicator: var(--sc-p-color-dark-raised2);
  --sc-color-segmented-control-indicator-shade: rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-color-stepper-track: var(--sc-p-color-dark-well);
  --sc-color-stepper-key: var(--sc-color-surface-raised);
  --sc-color-stepper-key-hover: var(--sc-color-control-key-hover-fill);
  --sc-color-stepper-key-hover-ink: var(--sc-color-control-key-hover-ink);
  --sc-color-stepper-key-pressed: var(--sc-color-brand-accent-deep);
  --sc-color-stepper-key-pressed-ink: var(--sc-color-text-on-accent);
  --sc-color-stepper-key-shade: var(--sc-color-control-key-shade);
  --sc-color-slider-track: var(--sc-p-color-dark-raised2);
  --sc-color-slider-track-disabled: var(--sc-p-color-dark-well);
  --sc-color-slider-fill: var(--sc-p-color-teal-500);
  --sc-color-slider-fill-hover: var(--sc-p-color-teal-300);
  --sc-color-slider-fill-disabled: var(--sc-p-color-dark-text-disabled);
  --sc-color-slider-thumb-rim-top: var(--sc-p-color-dark-text-primary);
  --sc-color-slider-thumb-rim-bottom: var(--sc-p-color-warm-gray-350);
  --sc-color-slider-thumb-face-top: var(--sc-p-color-warm-gray-200);
  --sc-color-slider-thumb-face-bottom: var(--sc-p-color-dark-text-tertiary);
  --sc-color-input-well: rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-color-input-well-hover: rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-color-input-well-focus: rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-color-input-well-disabled: rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-color-input-adornment: var(--sc-p-color-dark-text-secondary);
  --sc-color-input-divider: var(--sc-p-color-dark-raised2);
  --sc-color-card-flat: var(--sc-color-surface-floating);
  --sc-color-card-flat-hover: var(--sc-color-surface-raised);
  --sc-color-card-glass-subtle: rgb(var(--sc-p-color-white-rgb) / 0.04);
  --sc-color-card-glass-regular: rgb(var(--sc-p-color-white-rgb) / 0.06);
  --sc-color-card-glass-heavy: rgb(var(--sc-p-color-white-rgb) / 0.10);
  --sc-color-card-glass-hover: rgb(var(--sc-p-color-white-rgb) / 0.05);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-control: var(--sc-p-radius-input);
  --sc-radius-surface: var(--sc-p-radius-default);
  --sc-radius-surface-large: var(--sc-p-radius-large);
  --sc-radius-pill: var(--sc-p-radius-circle);
  --sc-radius-none: var(--sc-p-radius-none);
  --sc-shadow-control-raised: -4px 4px 8px rgb(0 0 0 / 0.24), -2px 2px 4px rgb(0 0 0 / 0.16), 4px -4px 8px rgb(var(--sc-p-color-white-rgb) / 0.06), 2px -2px 4px rgb(var(--sc-p-color-white-rgb) / 0.04);
  --sc-shadow-control-inset: inset 0 1px 3px rgb(0 0 0 / 0.40), inset 0 0 0 1px rgb(var(--sc-p-color-white-rgb) / 0.05);
  --sc-shadow-control-key: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
  --sc-shadow-control-key-hover: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
  --sc-shadow-control-key-pressed: 3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(var(--sc-p-color-white-rgb) / 0.06);
  --sc-shadow-switch-track: inset 0 0.45px 0.9px rgb(0 0 0 / 0.45);
  --sc-shadow-switch-thumb: 0 0.37px 0.52px -0.28px rgb(0 0 0 / 0.42), 0 0.95px 1.33px -0.56px rgb(0 0 0 / 0.40), 0 1.9px 2.66px -0.84px rgb(0 0 0 / 0.38), 0 3.6px 5.05px -1.13px rgb(0 0 0 / 0.35), 0 7.16px 10.03px -1.41px rgb(0 0 0 / 0.29), 0 15.75px 22.05px 0 rgb(0 0 0 / 0.14);
  --sc-shadow-segmented-control-track: inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45);
  --sc-shadow-segmented-control-indicator: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
  --sc-shadow-stepper-track: inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45);
  --sc-shadow-stepper-key: var(--sc-shadow-control-key);
  --sc-shadow-stepper-key-hover: var(--sc-shadow-control-key-hover);
  --sc-shadow-stepper-key-pressed: var(--sc-shadow-control-key-pressed);
  --sc-shadow-slider-track: inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45);
  --sc-shadow-slider-thumb: var(--sc-shadow-control-key);
  --sc-shadow-slider-thumb-pressed: var(--sc-shadow-control-key-pressed);
  --sc-shadow-input-well: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-card-glass-subtle: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.20), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.1);
  --sc-shadow-card-glass-regular: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.30), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-shadow-card-glass-heavy: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.45), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.225);
  --sc-shadow-card-glass-text: 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-motion-hover-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-hover-easing: var(--sc-p-motion-easing-out);
  --sc-motion-press-duration: var(--sc-p-motion-duration-press);
  --sc-motion-press-easing: var(--sc-p-motion-easing-out-strong);
  --sc-motion-press-scale: var(--sc-p-motion-scale-press-button);
  --sc-motion-press-card-scale: var(--sc-p-motion-scale-press-card);
  --sc-motion-press-release-duration: var(--sc-p-motion-duration-press-release);
  --sc-motion-press-release-easing: var(--sc-p-motion-easing-spring-out);
  --sc-motion-recede-scale: var(--sc-p-motion-scale-recede-board);
  --sc-motion-recede-opacity: var(--sc-p-motion-opacity-recede-board);
  --sc-motion-mode-duration: var(--sc-p-motion-duration-standard);
  --sc-motion-mode-easing: var(--sc-p-motion-easing-in-out);
  --sc-motion-entrance-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-entrance-easing: var(--sc-p-motion-easing-cinematic);
  --sc-motion-cut-duration: var(--sc-p-motion-duration-standard);
  --sc-motion-cut-easing: var(--sc-p-motion-easing-in-out);
  --sc-motion-reveal-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-reveal-easing: var(--sc-p-motion-easing-out);
  --sc-motion-switch-travel-duration: 600ms;
  --sc-motion-switch-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-switch-stretch: 1.06;
  --sc-motion-switch-squash: 0.15;
  --sc-motion-switch-press-lean: 0.12;
  --sc-motion-switch-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-segmented-control-travel-duration: 600ms;
  --sc-motion-segmented-control-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-segmented-control-stretch: 0.45;
  --sc-motion-segmented-control-squash: 0.2;
  --sc-motion-segmented-control-press-lean: 0.15;
  --sc-motion-segmented-control-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-plus-underline-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-plus-underline-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-plus-underline-stretch: 0;
  --sc-motion-plus-underline-squash: 0;
  --sc-motion-plus-underline-press-lean: 0;
  --sc-motion-plus-underline-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-nav-bar-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-nav-bar-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-nav-bar-stretch: 0;
  --sc-motion-nav-bar-squash: 0;
  --sc-motion-nav-bar-press-lean: 0;
  --sc-motion-nav-bar-press-lean-duration: var(--sc-p-motion-duration-press);
  --sc-motion-tooltip-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-tooltip-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-tooltip-stretch: 0;
  --sc-motion-tooltip-squash: 0;
  --sc-motion-stepper-travel-duration: 1062ms;
  --sc-motion-stepper-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-stepper-glyph-press-scale: 0.85;
  --sc-motion-stepper-roll: 1;
  --sc-motion-stepper-stretch: 0.45;
  --sc-motion-stepper-squash: 0;
  --sc-motion-slider-travel-duration: 1062ms;
  --sc-motion-slider-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-slider-drag-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-drag-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-stretch: 0.45;
  --sc-motion-slider-squash: 0;
  --sc-motion-slider-thumb-press-scale: 0.985;
  --sc-motion-card-press-scale: 1;
  --sc-font-text-label-chrome-family: var(--sc-p-font-text-11-family);
  --sc-font-text-label-chrome-size: var(--sc-p-font-text-11-size);
  --sc-font-text-label-chrome-weight: var(--sc-p-font-text-11-weight);
  --sc-font-text-label-chrome-line-height: var(--sc-p-font-text-11-line-height);
  --sc-font-text-label-chrome-letter-spacing: var(--sc-p-font-text-11-letter-spacing);
  --sc-font-text-label-chrome: var(--sc-p-font-text-11);
  --sc-font-text-label-ui-family: var(--sc-p-font-text-12-family);
  --sc-font-text-label-ui-size: var(--sc-p-font-text-12-size);
  --sc-font-text-label-ui-weight: var(--sc-p-font-text-12-weight);
  --sc-font-text-label-ui-line-height: var(--sc-p-font-text-12-line-height);
  --sc-font-text-label-ui-letter-spacing: var(--sc-p-font-text-12-letter-spacing);
  --sc-font-text-label-ui: var(--sc-p-font-text-12);
  --sc-font-text-label-ui-tight-family: var(--sc-p-font-text-bold-12-family);
  --sc-font-text-label-ui-tight-size: var(--sc-p-font-text-bold-12-size);
  --sc-font-text-label-ui-tight-weight: var(--sc-p-font-text-bold-12-weight);
  --sc-font-text-label-ui-tight-line-height: var(--sc-p-font-text-bold-12-line-height);
  --sc-font-text-label-ui-tight-letter-spacing: var(--sc-p-font-text-bold-12-letter-spacing);
  --sc-font-text-label-ui-tight: var(--sc-p-font-text-bold-12);
  --sc-font-text-label-ui-medium-family: var(--sc-p-font-text-medium-12-family);
  --sc-font-text-label-ui-medium-size: var(--sc-p-font-text-medium-12-size);
  --sc-font-text-label-ui-medium-weight: var(--sc-p-font-text-medium-12-weight);
  --sc-font-text-label-ui-medium-line-height: var(--sc-p-font-text-medium-12-line-height);
  --sc-font-text-label-ui-medium-letter-spacing: var(--sc-p-font-text-medium-12-letter-spacing);
  --sc-font-text-label-ui-medium: var(--sc-p-font-text-medium-12);
  --sc-font-text-label-button-sm-family: var(--sc-p-font-text-button-12-family);
  --sc-font-text-label-button-sm-size: var(--sc-p-font-text-button-12-size);
  --sc-font-text-label-button-sm-weight: var(--sc-p-font-text-button-12-weight);
  --sc-font-text-label-button-sm-line-height: var(--sc-p-font-text-button-12-line-height);
  --sc-font-text-label-button-sm-letter-spacing: var(--sc-p-font-text-button-12-letter-spacing);
  --sc-font-text-label-button-sm: var(--sc-p-font-text-button-12);
  --sc-font-text-label-button-lg-family: var(--sc-p-font-text-button-14-family);
  --sc-font-text-label-button-lg-size: var(--sc-p-font-text-button-14-size);
  --sc-font-text-label-button-lg-weight: var(--sc-p-font-text-button-14-weight);
  --sc-font-text-label-button-lg-line-height: var(--sc-p-font-text-button-14-line-height);
  --sc-font-text-label-button-lg-letter-spacing: var(--sc-p-font-text-button-14-letter-spacing);
  --sc-font-text-label-button-lg: var(--sc-p-font-text-button-14);
  --sc-font-text-label-tab-family: var(--sc-p-font-text-medium-13-family);
  --sc-font-text-label-tab-size: var(--sc-p-font-text-medium-13-size);
  --sc-font-text-label-tab-weight: var(--sc-p-font-text-medium-13-weight);
  --sc-font-text-label-tab-line-height: var(--sc-p-font-text-medium-13-line-height);
  --sc-font-text-label-tab-letter-spacing: var(--sc-p-font-text-medium-13-letter-spacing);
  --sc-font-text-label-tab: var(--sc-p-font-text-medium-13);
  --sc-font-text-label-nav-heading-family: var(--sc-p-font-text-display-tight-11-family);
  --sc-font-text-label-nav-heading-size: var(--sc-p-font-text-display-tight-11-size);
  --sc-font-text-label-nav-heading-weight: var(--sc-p-font-text-display-tight-11-weight);
  --sc-font-text-label-nav-heading-line-height: var(--sc-p-font-text-display-tight-11-line-height);
  --sc-font-text-label-nav-heading-letter-spacing: var(--sc-p-font-text-display-tight-11-letter-spacing);
  --sc-font-text-label-nav-heading: var(--sc-p-font-text-display-tight-11);
  --sc-font-text-label-nav-current-family: var(--sc-p-font-text-bold-13-family);
  --sc-font-text-label-nav-current-size: var(--sc-p-font-text-bold-13-size);
  --sc-font-text-label-nav-current-weight: var(--sc-p-font-text-bold-13-weight);
  --sc-font-text-label-nav-current-line-height: var(--sc-p-font-text-bold-13-line-height);
  --sc-font-text-label-nav-current-letter-spacing: var(--sc-p-font-text-bold-13-letter-spacing);
  --sc-font-text-label-nav-current: var(--sc-p-font-text-bold-13);
  --sc-font-text-caption-family: var(--sc-p-font-text-13-family);
  --sc-font-text-caption-size: var(--sc-p-font-text-13-size);
  --sc-font-text-caption-weight: var(--sc-p-font-text-13-weight);
  --sc-font-text-caption-line-height: var(--sc-p-font-text-13-line-height);
  --sc-font-text-caption-letter-spacing: var(--sc-p-font-text-13-letter-spacing);
  --sc-font-text-caption: var(--sc-p-font-text-13);
  --sc-font-text-body-dense-family: var(--sc-p-font-text-14-family);
  --sc-font-text-body-dense-size: var(--sc-p-font-text-14-size);
  --sc-font-text-body-dense-weight: var(--sc-p-font-text-14-weight);
  --sc-font-text-body-dense-line-height: var(--sc-p-font-text-14-line-height);
  --sc-font-text-body-dense-letter-spacing: var(--sc-p-font-text-14-letter-spacing);
  --sc-font-text-body-dense: var(--sc-p-font-text-14);
  --sc-font-text-body-default-family: var(--sc-p-font-text-16-family);
  --sc-font-text-body-default-size: var(--sc-p-font-text-16-size);
  --sc-font-text-body-default-weight: var(--sc-p-font-text-16-weight);
  --sc-font-text-body-default-line-height: var(--sc-p-font-text-16-line-height);
  --sc-font-text-body-default-letter-spacing: var(--sc-p-font-text-16-letter-spacing);
  --sc-font-text-body-default: var(--sc-p-font-text-16);
  --sc-font-text-body-lead-family: var(--sc-p-font-text-20-family);
  --sc-font-text-body-lead-size: var(--sc-p-font-text-20-size);
  --sc-font-text-body-lead-weight: var(--sc-p-font-text-20-weight);
  --sc-font-text-body-lead-line-height: var(--sc-p-font-text-20-line-height);
  --sc-font-text-body-lead-letter-spacing: var(--sc-p-font-text-20-letter-spacing);
  --sc-font-text-body-lead: var(--sc-p-font-text-20);
  --sc-font-text-body-dense-bold-family: var(--sc-p-font-text-bold-14-family);
  --sc-font-text-body-dense-bold-size: var(--sc-p-font-text-bold-14-size);
  --sc-font-text-body-dense-bold-weight: var(--sc-p-font-text-bold-14-weight);
  --sc-font-text-body-dense-bold-line-height: var(--sc-p-font-text-bold-14-line-height);
  --sc-font-text-body-dense-bold-letter-spacing: var(--sc-p-font-text-bold-14-letter-spacing);
  --sc-font-text-body-dense-bold: var(--sc-p-font-text-bold-14);
  --sc-font-text-body-default-bold-family: var(--sc-p-font-text-bold-16-family);
  --sc-font-text-body-default-bold-size: var(--sc-p-font-text-bold-16-size);
  --sc-font-text-body-default-bold-weight: var(--sc-p-font-text-bold-16-weight);
  --sc-font-text-body-default-bold-line-height: var(--sc-p-font-text-bold-16-line-height);
  --sc-font-text-body-default-bold-letter-spacing: var(--sc-p-font-text-bold-16-letter-spacing);
  --sc-font-text-body-default-bold: var(--sc-p-font-text-bold-16);
  --sc-font-text-body-lead-bold-family: var(--sc-p-font-text-bold-20-family);
  --sc-font-text-body-lead-bold-size: var(--sc-p-font-text-bold-20-size);
  --sc-font-text-body-lead-bold-weight: var(--sc-p-font-text-bold-20-weight);
  --sc-font-text-body-lead-bold-line-height: var(--sc-p-font-text-bold-20-line-height);
  --sc-font-text-body-lead-bold-letter-spacing: var(--sc-p-font-text-bold-20-letter-spacing);
  --sc-font-text-body-lead-bold: var(--sc-p-font-text-bold-20);
  --sc-font-text-title-card-family: var(--sc-p-font-text-24-family);
  --sc-font-text-title-card-size: var(--sc-p-font-text-24-size);
  --sc-font-text-title-card-weight: var(--sc-p-font-text-24-weight);
  --sc-font-text-title-card-line-height: var(--sc-p-font-text-24-line-height);
  --sc-font-text-title-card-letter-spacing: var(--sc-p-font-text-24-letter-spacing);
  --sc-font-text-title-card: var(--sc-p-font-text-24);
  --sc-font-text-title-section-family: var(--sc-p-font-text-32-family);
  --sc-font-text-title-section-size: var(--sc-p-font-text-32-size);
  --sc-font-text-title-section-weight: var(--sc-p-font-text-32-weight);
  --sc-font-text-title-section-line-height: var(--sc-p-font-text-32-line-height);
  --sc-font-text-title-section-letter-spacing: var(--sc-p-font-text-32-letter-spacing);
  --sc-font-text-title-section: var(--sc-p-font-text-32);
  --sc-font-text-display-xs-family: var(--sc-p-font-text-display-tight-32-family);
  --sc-font-text-display-xs-size: var(--sc-p-font-text-display-tight-32-size);
  --sc-font-text-display-xs-weight: var(--sc-p-font-text-display-tight-32-weight);
  --sc-font-text-display-xs-line-height: var(--sc-p-font-text-display-tight-32-line-height);
  --sc-font-text-display-xs-letter-spacing: var(--sc-p-font-text-display-tight-32-letter-spacing);
  --sc-font-text-display-xs: var(--sc-p-font-text-display-tight-32);
  --sc-font-text-display-sm-family: var(--sc-p-font-text-44-family);
  --sc-font-text-display-sm-size: var(--sc-p-font-text-44-size);
  --sc-font-text-display-sm-weight: var(--sc-p-font-text-44-weight);
  --sc-font-text-display-sm-line-height: var(--sc-p-font-text-44-line-height);
  --sc-font-text-display-sm-letter-spacing: var(--sc-p-font-text-44-letter-spacing);
  --sc-font-text-display-sm: var(--sc-p-font-text-44);
  --sc-font-text-display-md-family: var(--sc-p-font-text-60-family);
  --sc-font-text-display-md-size: var(--sc-p-font-text-60-size);
  --sc-font-text-display-md-weight: var(--sc-p-font-text-60-weight);
  --sc-font-text-display-md-line-height: var(--sc-p-font-text-60-line-height);
  --sc-font-text-display-md-letter-spacing: var(--sc-p-font-text-60-letter-spacing);
  --sc-font-text-display-md: var(--sc-p-font-text-60);
  --sc-font-text-display-lg-family: var(--sc-p-font-text-84-family);
  --sc-font-text-display-lg-size: var(--sc-p-font-text-84-size);
  --sc-font-text-display-lg-weight: var(--sc-p-font-text-84-weight);
  --sc-font-text-display-lg-line-height: var(--sc-p-font-text-84-line-height);
  --sc-font-text-display-lg-letter-spacing: var(--sc-p-font-text-84-letter-spacing);
  --sc-font-text-display-lg: var(--sc-p-font-text-84);
  --sc-font-text-display-xl-family: var(--sc-p-font-text-120-family);
  --sc-font-text-display-xl-size: var(--sc-p-font-text-120-size);
  --sc-font-text-display-xl-weight: var(--sc-p-font-text-120-weight);
  --sc-font-text-display-xl-line-height: var(--sc-p-font-text-120-line-height);
  --sc-font-text-display-xl-letter-spacing: var(--sc-p-font-text-120-letter-spacing);
  --sc-font-text-display-xl: var(--sc-p-font-text-120);
  --sc-font-text-mono-chrome-family: var(--sc-p-font-text-mono-11-family);
  --sc-font-text-mono-chrome-size: var(--sc-p-font-text-mono-11-size);
  --sc-font-text-mono-chrome-weight: var(--sc-p-font-text-mono-11-weight);
  --sc-font-text-mono-chrome-line-height: var(--sc-p-font-text-mono-11-line-height);
  --sc-font-text-mono-chrome-letter-spacing: var(--sc-p-font-text-mono-11-letter-spacing);
  --sc-font-text-mono-chrome: var(--sc-p-font-text-mono-11);
  --sc-font-text-mono-caption-family: var(--sc-p-font-text-mono-13-family);
  --sc-font-text-mono-caption-size: var(--sc-p-font-text-mono-13-size);
  --sc-font-text-mono-caption-weight: var(--sc-p-font-text-mono-13-weight);
  --sc-font-text-mono-caption-line-height: var(--sc-p-font-text-mono-13-line-height);
  --sc-font-text-mono-caption-letter-spacing: var(--sc-p-font-text-mono-13-letter-spacing);
  --sc-font-text-mono-caption: var(--sc-p-font-text-mono-13);
  --sc-font-text-mono-body-family: var(--sc-p-font-text-mono-16-family);
  --sc-font-text-mono-body-size: var(--sc-p-font-text-mono-16-size);
  --sc-font-text-mono-body-weight: var(--sc-p-font-text-mono-16-weight);
  --sc-font-text-mono-body-line-height: var(--sc-p-font-text-mono-16-line-height);
  --sc-font-text-mono-body-letter-spacing: var(--sc-p-font-text-mono-16-letter-spacing);
  --sc-font-text-mono-body: var(--sc-p-font-text-mono-16);
  --sc-font-text-mono-flow-family: var(--sc-p-font-text-mono-14-loose-family);
  --sc-font-text-mono-flow-size: var(--sc-p-font-text-mono-14-loose-size);
  --sc-font-text-mono-flow-weight: var(--sc-p-font-text-mono-14-loose-weight);
  --sc-font-text-mono-flow-line-height: var(--sc-p-font-text-mono-14-loose-line-height);
  --sc-font-text-mono-flow-letter-spacing: var(--sc-p-font-text-mono-14-loose-letter-spacing);
  --sc-font-text-mono-flow: var(--sc-p-font-text-mono-14-loose);
  --sc-font-text-nav-header-family: var(--sc-p-font-text-display-tight-12-family);
  --sc-font-text-nav-header-size: var(--sc-p-font-text-display-tight-12-size);
  --sc-font-text-nav-header-weight: var(--sc-p-font-text-display-tight-12-weight);
  --sc-font-text-nav-header-line-height: var(--sc-p-font-text-display-tight-12-line-height);
  --sc-font-text-nav-header-letter-spacing: var(--sc-p-font-text-display-tight-12-letter-spacing);
  --sc-font-text-nav-header: var(--sc-p-font-text-display-tight-12);
  --sc-font-text-nav-node-family: var(--sc-p-font-text-text-tight-13-family);
  --sc-font-text-nav-node-size: var(--sc-p-font-text-text-tight-13-size);
  --sc-font-text-nav-node-weight: var(--sc-p-font-text-text-tight-13-weight);
  --sc-font-text-nav-node-line-height: var(--sc-p-font-text-text-tight-13-line-height);
  --sc-font-text-nav-node-letter-spacing: var(--sc-p-font-text-text-tight-13-letter-spacing);
  --sc-font-text-nav-node: var(--sc-p-font-text-text-tight-13);
  --sc-size-card-glass-subtle-frost: var(--sc-p-space-4);
  --sc-size-card-glass-subtle-refraction: 40;
  --sc-size-card-glass-subtle-depth: 40;
  --sc-size-card-glass-subtle-splay: 57;
  --sc-size-card-glass-subtle-saturation: 100;
  --sc-size-card-glass-regular-frost: 9px;
  --sc-size-card-glass-regular-refraction: 65;
  --sc-size-card-glass-regular-depth: 68;
  --sc-size-card-glass-regular-splay: 57;
  --sc-size-card-glass-regular-saturation: 100;
  --sc-size-card-glass-heavy-frost: var(--sc-p-space-16);
  --sc-size-card-glass-heavy-refraction: 85;
  --sc-size-card-glass-heavy-depth: 85;
  --sc-size-card-glass-heavy-splay: 57;
  --sc-size-card-glass-heavy-saturation: 100;
  --sc-size-icon-xs: var(--sc-p-space-12);
  --sc-size-icon-sm: var(--sc-p-space-16);
  --sc-size-icon-md: var(--sc-p-space-24);
  --sc-size-icon-lg: var(--sc-p-space-32);
  --sc-size-avatar-xs: var(--sc-p-space-24);
  --sc-size-avatar-sm: var(--sc-p-space-32);
  --sc-size-avatar-md: var(--sc-p-space-48);
  --sc-size-avatar-lg: var(--sc-p-space-64);
  --sc-size-switch-track-width: 40px;
  --sc-size-switch-track-height: 22px;
  --sc-size-switch-thumb: 15px;
  --sc-size-switch-glyph: var(--sc-p-space-micro-6);
  --sc-size-switch-label-offset: 0px;
  --sc-size-progress-bar-height: var(--sc-p-space-4);
  --sc-size-progress-circular: var(--sc-p-space-48);
  --sc-size-progress-circular-stroke: var(--sc-p-space-4);
  --sc-size-progress-bar-height-active: var(--sc-p-space-micro-6);
  --sc-size-progress-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-input-icon: var(--sc-p-space-20);
  --sc-size-input-clear: var(--sc-p-space-16);
  --sc-size-input-clear-target: var(--sc-p-space-32);
  --sc-size-slider-track: var(--sc-p-space-4);
  --sc-size-slider-track-active: var(--sc-p-space-micro-6);
  --sc-size-slider-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-slider-thumb: 15px;
  --sc-size-button-icon-lg: var(--sc-p-space-micro-14);
  --sc-size-button-icon-sm: var(--sc-p-space-12);
  --sc-size-touch-target: var(--sc-p-space-48);
  --sc-space-component-padding-sm: var(--sc-p-space-8);
  --sc-space-component-padding-md: var(--sc-p-space-16);
  --sc-space-component-padding-lg: var(--sc-p-space-24);
  --sc-space-component-padding-card: var(--sc-p-space-24);
  --sc-space-component-padding-inline-sm: var(--sc-p-space-micro-6);
  --sc-space-component-padding-inline-md: var(--sc-p-space-12);
  --sc-space-component-padding-inline-lg: var(--sc-p-space-16);
  --sc-space-component-padding-inline-button-lg: var(--sc-p-space-24);
  --sc-space-component-padding-inline-button-sm: var(--sc-p-space-16);
  --sc-space-component-padding-inline-input: var(--sc-p-space-16);
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}
`,nd=5e-4,s0=6e3,rd=60;function a0({stiffness:s,damping:i,mass:l}){let c=0,p=0;const h=.001,g=[0];let v=0,w=0;for(;v<s0;){const E=(-s*(c-1)-i*p)/l;if(p+=E*h,c+=p*h,v+=1,g.push(c),c>w&&(w=c),Math.abs(c-1)<nd&&Math.abs(p)<nd)break}return{trace:g,settleMs:v,overshoot:Math.max(0,w-1)}}function Is(s){const{trace:i,settleMs:l,overshoot:c}=a0(s),p=[];for(let h=0;h<rd;h+=1){const g=Math.round(h/(rd-1)*(i.length-1));p.push(+i[g].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:l,overshoot:c}}const Rs=60,od={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function l0([s,i,l,c],p){const h=(w,E,z)=>3*(1-z)**2*z*w+3*(1-z)*z**2*E+z**3;let g=0,v=1;for(let w=0;w<40;w+=1){const E=(g+v)/2;h(s,l,E)<p?g=E:v=E}return h(i,c,(g+v)/2)}function i0(s){const i=[];for(const l of s.split(",")){const[c,...p]=l.trim().split(/\s+/);p.length||i.push({v:+c,x:null});for(const h of p)i.push({v:+c,x:parseFloat(h)/100})}i[0].x===null&&(i[0].x=0),i.at(-1).x===null&&(i.at(-1).x=1);for(let l=1;l<i.length;l+=1){if(i[l].x!==null){i[l].x=Math.max(i[l].x,i[l-1].x);continue}let c=l;for(;i[c].x===null;)c+=1;const p=(i[c].x-i[l-1].x)/(c-l+1);for(let h=l;h<c;h+=1)i[h].x=i[h-1].x+p}return i}function c0(s,i){for(let l=1;l<s.length;l+=1)if(i<=s[l].x){const c=s[l-1],p=s[l],h=p.x-c.x;return h?c.v+(i-c.x)/h*(p.v-c.v):p.v}return s.at(-1).v}function ni(s){var p;const i=(s||"ease").trim(),l=i.match(/^linear\((.+)\)$/);if(l){const h=i0(l[1]);return Array.from({length:Rs},(g,v)=>c0(h,v/(Rs-1)))}const c=((p=i.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||od[i]||od.ease;return Array.from({length:Rs},(h,g)=>l0(c,g/(Rs-1)))}function ri(s){const i=s.map((c,p)=>Math.abs(s[Math.min(p+1,s.length-1)]-s[Math.max(p-1,0)]));i[0]=0,i[i.length-1]=0;const l=Math.max(...i)||1;return i.map(c=>c/l)}const u0=s=>(s.endsWith("ms")?parseFloat(s):parseFloat(s)*1e3)||0;function d0(s){const i=[];let l=0,c="";for(const p of s)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c.trim()),c=""):c+=p;return i.push(c.trim()),i}function _n(s,i){const l=`--sc-motion-${i}`,c=getComputedStyle(s),p=L=>parseFloat(c.getPropertyValue(L))||0,h=document.createElement("span");h.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${l}-travel-duration),var(${l}-press-lean-duration,0ms);transition-timing-function:var(${l}-travel-easing),var(--sc-motion-press-easing);`,s.appendChild(h);const g=getComputedStyle(h),[v,w]=g.transitionDuration.split(",").map(L=>u0(L.trim())),[E,z]=d0(g.transitionTimingFunction);return h.remove(),{travelDur:v,travelEasing:E,leanDur:w,leanEasing:z,stretch:p(`${l}-stretch`),squash:p(`${l}-squash`),lean:p(`${l}-press-lean`)}}const In=s=>!!s&&(s.stretch>0||s.squash>0||s.lean>0),Zn=()=>{var s;return typeof window<"u"&&!!((s=window.matchMedia)!=null&&s.call(window,"(prefers-reduced-motion: reduce)").matches)};function Bn({l:s,r:i,h:l},c,p=!0){return{transform:`translate(${s}px, ${p?(c-l)/2:0}px)`,width:`${i-s}px`,height:`${l}px`}}function Lr(s,i,l,c,p=!0){const h=ni(s.travelEasing),g=ri(h);return h.map((v,w)=>{const E=s.stretch*c*g[w],z=i.l+(l.l-i.l)*v-E/2,L=i.r+(l.r-i.r)*v+E/2;return Bn({l:z,r:L,h:c*(1-s.squash*g[w])},c,p)})}function oi(s,i,l){const c=Math.sign(l.l+l.r-(i.l+i.r)),p=s.lean*.25*Math.abs((l.l+l.r-(i.l+i.r))/2);return c>0?{...i,r:i.r+p}:c<0?{...i,l:i.l-p}:i}function wr(s,i,l,c,{hold:p=!1,onDone:h}={}){s.getAnimations().forEach(v=>v.cancel());const g=s.animate(i,{duration:l,easing:c,fill:"forwards"});return p||(g.onfinish=()=>{g.cancel(),h==null||h()}),g}function At(s){const i=s.getBoundingClientRect(),l=s.currentCSSZoom||1;return{left:i.left/l,right:i.right/l,width:i.width/l,top:i.top/l,height:i.height/l}}function si(s,i){const l=At(s);return{l:l.left-i.left,r:l.right-i.left}}function p0(s,i){const l=_n(s,"switch"),c=getComputedStyle(s),p=parseFloat(c.width),h=parseFloat(c.height),g=parseFloat(getComputedStyle(i).height),v=(h-g)/2;return{...l,knob:g,travel:p-g-2*v}}const xo=(s,i)=>({l:i?s.travel:0,r:(i?s.travel:0)+s.knob}),f0=(s,i)=>oi(s,xo(s,i),xo(s,!i)),h0=(s,i,l)=>Lr(s,i,l,s.knob,!1),m0=(s,i,l)=>[Bn({...i,h:s.knob},s.knob,!1),Bn({...l,h:s.knob},s.knob,!1)],g0="_field_tf6ns_39",v0="_disabled_tf6ns_49",x0="_controlWrapper_tf6ns_53",y0="_input_tf6ns_59",w0="_track_tf6ns_69",b0="_glyphs_tf6ns_84",k0="_glyphOn_tf6ns_99",_0="_glyphOff_tf6ns_105",L0="_thumb_tf6ns_115",S0="_label_tf6ns_190",Ht={field:g0,disabled:v0,controlWrapper:x0,input:y0,track:w0,glyphs:b0,glyphOn:k0,glyphOff:_0,thumb:L0,label:S0};function E0({checked:s=!1,disabled:i=!1,onChange:l,label:c,sound:p=!0,glyphs:h=!0,className:g=""}){const v=d.useId(),w=yo("toggle",p),E=d.useRef(null),z=d.useRef(null),L=d.useRef(null),j=d.useRef(null),N=d.useRef(null),V=d.useRef(!1),P=()=>{if(i||Zn()||!z.current||!L.current)return null;const O=p0(z.current,L.current);return In(O)?O:null},U=()=>{var O,K;(O=j.current)==null||O.cancel(),j.current=null,N.current=null,(K=z.current)==null||K.removeAttribute("data-driven")},Y=(O,K,he,ue)=>{var ce;(ce=j.current)==null||ce.cancel(),z.current.setAttribute("data-driven","");const ie=L.current.animate(O,{duration:K,easing:he,fill:"forwards"});j.current=ie,ue||(ie.onfinish=()=>{j.current===ie&&U()})},re=(O,K,he)=>Y(h0(O,K,xo(O,he)),O.travelDur,"linear",!1),ee=()=>{const O=P();if(!O||O.lean<=0)return;const K=E.current.checked,he=N.current||xo(O,K);N.current=f0(O,K),V.current=!1,Y(m0(O,he,N.current),O.leanDur,O.leanEasing,!0)},q=()=>{if(!N.current)return;const O=P();if(!O){U();return}const K=N.current;N.current=null,re(O,K,E.current.checked)},se=()=>setTimeout(()=>{V.current||q()},0);return f.jsxs("label",{htmlFor:v,className:`${Ht.field} ${i?Ht.disabled:""} ${g}`,onPointerDown:ee,onPointerUp:se,onPointerLeave:q,onPointerCancel:q,children:[f.jsxs("span",{className:Ht.controlWrapper,children:[f.jsx("input",{ref:E,id:v,type:"checkbox",role:"switch",className:Ht.input,checked:s,disabled:i,onChange:O=>{w(),V.current=!0;const K=P();if(K){const he=N.current||xo(K,!O.target.checked);N.current=null,re(K,he,O.target.checked)}else U();l==null||l(O)}}),f.jsxs("span",{ref:z,className:Ht.track,"aria-hidden":"true",children:[h&&f.jsxs("span",{className:Ht.glyphs,children:[f.jsx("span",{className:Ht.glyphOn}),f.jsx("span",{className:Ht.glyphOff})]}),f.jsx("span",{ref:L,className:Ht.thumb})]})]}),c&&f.jsx("span",{className:Ht.label,children:c})]})}const z0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),d.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),C0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),j0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),d.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),M0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),N0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),d.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),A0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),F0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),d.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),P0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),d.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),R0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),d.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),T0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),$0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),H0=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),O0=d.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ft=d.forwardRef((s,i)=>{const{alt:l,color:c,size:p,weight:h,mirrored:g,children:v,weights:w,...E}=s,{color:z="currentColor",size:L,weight:j="regular",mirrored:N=!1,...V}=d.useContext(O0);return d.createElement("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:p??L,height:p??L,fill:c??z,viewBox:"0 0 256 256",transform:g||N?"scale(-1, 1)":void 0,...V,...E},!!l&&d.createElement("title",null,l),v,w.get(h??j))});ft.displayName="IconBase";const Ld=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:z0}));Ld.displayName="ArrowRightIcon";const D0=Ld,Sd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:C0}));Sd.displayName="CalendarBlankIcon";const V0=Sd,Ed=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:j0}));Ed.displayName="CaretDownIcon";const I0=Ed,zd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:M0}));zd.displayName="ClockIcon";const Z0=zd,Cd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:N0}));Cd.displayName="CopyIcon";const B0=Cd,jd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:A0}));jd.displayName="EnvelopeSimpleIcon";const U0=jd,Md=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:F0}));Md.displayName="EyeIcon";const W0=Md,Nd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:P0}));Nd.displayName="MagnifyingGlassIcon";const K0=Nd,Ad=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:R0}));Ad.displayName="MapPinIcon";const Q0=Ad,Fd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:T0}));Fd.displayName="MinusIcon";const G0=Fd,Pd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:$0}));Pd.displayName="PlusIcon";const q0=Pd,Rd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:H0}));Rd.displayName="XIcon";const Y0=Rd,J0="_icon_1vxzc_2",X0={icon:J0},e1={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Zs({glyph:s,weight:i="regular",size:l="1em",label:c,className:p="",...h}){if(!s)return null;const g=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},v=e1[l];return v?f.jsx("span",{className:`${X0.icon} ${p}`.trim(),style:{fontSize:v},children:f.jsx(s,{weight:i,size:"1em",...g,...h})}):f.jsx(s,{weight:i,size:l,className:p,...g,...h})}const t1="_stepper_1wvfb_28",n1="_button_1wvfb_38",r1="_glyph_1wvfb_79",o1="_readout_1wvfb_101",s1="_digits_1wvfb_123",a1="_disabled_1wvfb_134",xn={stepper:t1,button:n1,glyph:r1,readout:o1,digits:s1,disabled:a1},l1=400,i1=80;function c1({value:s,onChange:i,min:l=-1/0,max:c=1/0,step:p=1,label:h,disabled:g=!1,sound:v=!0,className:w=""}){const E=yo("tick",v),z=d.useRef(s);z.current=s;const L=d.useRef(null),j=d.useRef(null),N=K=>Math.max(l,Math.min(c,K)),V=K=>{const he=N(z.current+K);he!==z.current&&(z.current=he,i==null||i(he),E())},P=()=>{L.current&&clearTimeout(L.current),j.current&&clearInterval(j.current),L.current=null,j.current=null};d.useEffect(()=>P,[]);const U=d.useRef(null),Y=d.useRef(null),re=d.useRef(s);d.useLayoutEffect(()=>{const K=re.current;re.current=s;const he=U.current,ue=Y.current;if(K===s||g||!he||!ue||Zn())return;const ie=_n(he,"stepper"),ce=parseFloat(getComputedStyle(he).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ce>0||In(ie)))return;const Z=(s>K?1:-1)*ce*At(he).height,D=ni(ie.travelEasing),$=ri(D),we=D.map((me,pe)=>({transform:`translateY(${Z*(1-me)}px) scale(${1-.2*ie.squash*$[pe]}, ${1+.2*ie.stretch*$[pe]})`}));wr(ue,we,ie.travelDur,"linear")},[s,g]);const ee=K=>{g||(V(K),P(),L.current=setTimeout(()=>{j.current=setInterval(()=>V(K),i1)},l1))},q=s<=l,se=s>=c,O=K=>{g||(K.key==="ArrowUp"?(K.preventDefault(),V(p)):K.key==="ArrowDown"?(K.preventDefault(),V(-p)):K.key==="Home"&&Number.isFinite(l)?(K.preventDefault(),z.current!==l&&E(),z.current=l,i==null||i(l)):K.key==="End"&&Number.isFinite(c)&&(K.preventDefault(),z.current!==c&&E(),z.current=c,i==null||i(c)))};return f.jsxs("div",{className:`${xn.stepper} ${g?xn.disabled:""} ${w}`,children:[f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Decrease ${h}`:"Decrease",disabled:g||q,onPointerDown:()=>ee(-p),onPointerUp:P,onPointerLeave:P,onPointerCancel:P,children:f.jsx(Zs,{glyph:G0,weight:"bold",size:"sm",className:xn.glyph})}),f.jsx("span",{ref:U,className:xn.readout,role:"spinbutton",tabIndex:g?-1:0,"aria-valuenow":s,"aria-valuemin":Number.isFinite(l)?l:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":h,"aria-disabled":g||void 0,onKeyDown:O,children:f.jsx("span",{ref:Y,className:xn.digits,children:s})}),f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Increase ${h}`:"Increase",disabled:g||se,onPointerDown:()=>ee(p),onPointerUp:P,onPointerLeave:P,onPointerCancel:P,children:f.jsx(Zs,{glyph:q0,weight:"bold",size:"sm",className:xn.glyph})})]})}const u1="_track_s3qo0_27",d1="_indicator_s3qo0_38",p1="_segment_s3qo0_59",f1="_md_s3qo0_74",h1="_sm_s3qo0_84",m1="_lg_s3qo0_94",g1="_count_s3qo0_104",v1="_segmentSelected_s3qo0_113",x1="_disabled_s3qo0_127",yn={track:u1,indicator:d1,segment:p1,md:f1,sm:h1,lg:m1,count:g1,segmentSelected:v1,disabled:x1};function y1({options:s=[],value:i,onChange:l,disabled:c=!1,label:p,size:h="md",sound:g=!0,className:v=""}){const w=yo("select",g),E=Z=>{Z!==i&&w(),l==null||l(Z)},z=d.useRef(null),L=d.useRef({}),j=d.useRef(null),[N,V]=d.useState(null),P=d.useRef(null),U=d.useRef(null),Y=d.useRef(i);Y.current=i;const re=Z=>{const D=z.current,$=L.current[Z];if(!D||!$)return null;const we=At(D),me=At($);return{l:me.left-we.left-D.clientLeft,r:me.right-we.left-D.clientLeft}},ee=d.useCallback(()=>{const Z=re(i);V(Z?{left:Z.l,width:Z.r-Z.l}:null)},[i]);d.useLayoutEffect(()=>{ee()},[ee,s.length,h]);const q=()=>{if(c||Zn()||!z.current||!j.current)return null;const Z=_n(z.current,"segmented-control");return In(Z)?{...Z,cap:parseFloat(getComputedStyle(j.current).height)}:null},se=(Z,D,$,we)=>{z.current.setAttribute("data-driven",""),wr(j.current,Z,D,$,{hold:we,onDone:()=>{var me;return(me=z.current)==null?void 0:me.removeAttribute("data-driven")}})};d.useLayoutEffect(()=>{if(!N)return;const Z={l:N.left,r:N.left+N.width},D=U.current||P.current;P.current=Z,U.current=null;const $=q();!$||!D||D.l===Z.l&&D.r===Z.r||se(Lr($,D,Z,$.cap),$.travelDur,"linear",!1)},[N==null?void 0:N.left,N==null?void 0:N.width]);const O=()=>{if(!U.current)return;const Z=q(),D=U.current;U.current=null,Z&&P.current&&se(Lr(Z,D,P.current,Z.cap),Z.travelDur,"linear",!1)},K=Z=>{if(Z===i||!P.current)return;const D=q(),$=re(Z);if(!D||D.lean<=0||!$)return;const we=j.current.getAnimations().length?si(j.current,{left:At(z.current).left+z.current.clientLeft}):P.current;U.current=oi(D,P.current,$);const me=i,pe=()=>setTimeout(()=>{Y.current===me&&O()},0);window.addEventListener("pointerup",pe,{once:!0}),se([Bn({...we,h:D.cap},D.cap),Bn({...U.current,h:D.cap},D.cap)],D.leanDur,D.leanEasing,!0)};d.useEffect(()=>(window.addEventListener("resize",ee),()=>window.removeEventListener("resize",ee)),[ee]);const he=Z=>{var D;(D=L.current[Z])==null||D.focus()},ue=Z=>{if(c||s.length===0)return;const D=(Z+s.length)%s.length,$=s[D];$&&(E($.value),he($.value))},ie=(Z,D)=>{if(!c)switch(Z.key){case"ArrowRight":case"ArrowDown":Z.preventDefault(),ue(D+1);break;case"ArrowLeft":case"ArrowUp":Z.preventDefault(),ue(D-1);break;case"Home":Z.preventDefault(),ue(0);break;case"End":Z.preventDefault(),ue(s.length-1);break}},ce=s.findIndex(Z=>Z.value===i);return f.jsxs("div",{ref:z,className:`${yn.track} ${yn[h]||yn.md} ${c?yn.disabled:""} ${v}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[N&&f.jsx("span",{ref:j,className:yn.indicator,"aria-hidden":"true",style:{transform:`translateX(${N.left}px)`,width:`${N.width}px`}}),s.map((Z,D)=>{const $=Z.value===i,we=$||ce===-1&&D===0;return f.jsxs("button",{type:"button",ref:me=>{L.current[Z.value]=me},role:"radio","aria-checked":$,tabIndex:c?-1:we?0:-1,disabled:c,className:`${yn.segment} ${$?yn.segmentSelected:""}`,onClick:()=>E(Z.value),onPointerDown:()=>K(Z.value),onPointerLeave:O,onKeyDown:me=>ie(me,D),children:[Z.label,Z.count!==void 0&&f.jsx("span",{className:yn.count,children:Z.count})]},Z.value)})]})}const sd=16,Ol=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],w1="_mark_nniye_3",b1="_sm_nniye_24",k1="_md_nniye_1",_1="_lg_nniye_26",L1="_working_nniye_28",S1="_paused_nniye_29",E1="_base_nniye_33",z1="_glint_nniye_34",C1="_spin_nniye_36",j1="_loop_nniye_37",bt={mark:w1,sm:b1,md:k1,lg:_1,working:L1,paused:S1,base:E1,glint:z1,spin:C1,loop:j1},M1={sm:bt.sm,md:bt.md,lg:bt.lg},N1=3.2;function A1(s,i){const l=s%2===0,p=-((l?1:-1)*(360*s)/i),h=p+360*(l?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${h.toFixed(2)} 8 8`}}function F1({working:s=!0,size:i="sm",label:l,className:c="",...p}){const h=`wm${d.useId().replace(/[^a-zA-Z0-9]/g,"")}`,g=Ol.length,v=l?{role:"img","aria-label":l}:{"aria-hidden":!0},w=[bt.mark,M1[i]??bt.sm,s?bt.working:bt.paused,c].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${sd} ${sd}`,className:w,focusable:"false",...v,...p,children:[s&&f.jsx("defs",{children:Ol.map((E,z)=>{const{from:L,to:j}=A1(z,g);return f.jsxs("linearGradient",{id:`${h}-s${z}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:bt.base}),f.jsx("stop",{offset:"0.45",className:bt.base}),f.jsx("stop",{offset:"1",className:bt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:L,to:j,dur:`${N1}s`,repeatCount:"indefinite"})]},z)})}),Ol.map((E,z)=>f.jsx("g",{className:bt.spin,style:{"--wm-i":z},children:f.jsx("path",{d:E,className:bt.loop,style:{"--wm-i":z},stroke:s?`url(#${h}-s${z})`:void 0})},z))]})}const P1="_button_1cn8j_34",R1="_label_1cn8j_74",T1="_arrow_1cn8j_84",$1="_sm_1cn8j_57",H1="_primary_1cn8j_122",O1="_destructive_1cn8j_123",D1="_secondary_1cn8j_157",V1="_tertiary_1cn8j_173",I1="_loading_1cn8j_207",Z1="_working_1cn8j_211",On={button:P1,label:R1,arrow:T1,sm:$1,primary:H1,destructive:O1,secondary:D1,tertiary:V1,loading:I1,working:Z1},B1=["primary","secondary","tertiary","destructive"],U1=["lg","sm"];function W1(){return f.jsx(D0,{weight:"bold",className:On.arrow,"aria-hidden":"true"})}function K1({variant:s="primary",size:i="lg",disabled:l=!1,loading:c=!1,arrow:p=!0,type:h="button",sound:g=!0,children:v,onClick:w,className:E="",...z}){const L=B1.includes(s)?s:"primary",j=U1.includes(i)?i:"lg",N=l||c,V=yo("press",g);return f.jsxs("button",{type:h,className:`${On.button} ${On[L]} ${j==="sm"?On.sm:""} ${c?On.loading:""} ${E}`,disabled:N,"aria-busy":c||void 0,onClick:N?void 0:P=>{V(),w==null||w(P)},...z,children:[f.jsx("span",{className:On.label,children:v}),c?f.jsx(F1,{className:On.working}):p&&f.jsx(W1,{})]})}const Q1="_wrapper_1owvf_14",G1="_tooltip_1owvf_19",q1="_open_1owvf_62",Y1="_singleline_1owvf_67",J1="_multiline_1owvf_71",ho={wrapper:Q1,tooltip:G1,open:q1,singleline:Y1,multiline:J1};function X1({content:s,multiline:i=!1,open:l,children:c}){const p=d.useId(),[h,g]=d.useState(!1),v=l??h,w=d.useRef(null),E=d.useRef(null);d.useLayoutEffect(()=>{const j=w.current,N=E.current;if(!v||!j||!N||Zn())return;const V=_n(N,"tooltip");if(!In(V))return;const P=parseFloat(getComputedStyle(N).getPropertyValue("--sc-space-component-gap-sm"))||0,U=ni(V.travelEasing),Y=ri(U),re=U.map((q,se)=>({transform:`translate(-50%, ${-P*(1-q)}px) scale(${1-.2*V.squash*Y[se]}, ${1+.2*V.stretch*Y[se]})`,opacity:Math.min(1,Math.max(0,q))}));N.getAnimations().forEach(q=>q.cancel()),j.setAttribute("data-driven","");const ee=N.animate(re,{duration:V.travelDur,easing:"linear"});ee.onfinish=()=>j.removeAttribute("data-driven"),ee.oncancel=()=>j.removeAttribute("data-driven")},[v]);const z=()=>g(!0),L=()=>g(!1);return f.jsxs("span",{ref:w,className:ho.wrapper,onMouseEnter:z,onMouseLeave:L,onFocus:z,onBlur:L,children:[f.jsx("span",{"aria-describedby":v?p:void 0,children:c}),f.jsx("span",{ref:E,role:"tooltip",id:p,className:`${ho.tooltip} ${v?ho.open:""} ${i?ho.multiline:ho.singleline}`,children:s})]})}const eh=Math.PI*2,th=new Set(["uskel","uloader","usplash"]),nh=new Set(["ucard"]),rh={uskel:0,uloader:1.96,usplash:0},ad=new Set(["progress","active","current"]);function oh(s){return function(){s|=0,s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function sh(s){let i=2166136261;for(const l of String(s))i=Math.imul(i^l.charCodeAt(0),16777619);return i}const ah=(s,i,l,c)=>s.fillRect(i-c,l-c,c*2,c*2),lh=(s,i,l,c)=>{s.beginPath(),s.arc(i,l,c,0,eh),s.fill()},Td=(s,i,l,c)=>{c*=1.25;const p=Math.max(.7,c*.38);s.fillRect(i-c,l-p/2,c*2,p),s.fillRect(i-p/2,l-c,p,c*2)},ih={plus:Td,square:ah,round:lh};function wt(s,i,l){const c=i.rng,p=(l.s||5)*i.S,h=l.x2-l.x1,g=l.y2-l.y1,v=Math.hypot(h,g);if(!v)return;const w=h/v,E=g/v,z=-E,L=w,j=l.w,N=l.ext??j*.35,V=l.r??.9,P=l.jit??.7;let U=0;for(let Y=-N;Y<=v+N;Y+=p,U++){const re=l.grid?0:U%2*p/2;let ee=1;if(l.taper){const q=(Y+N)/(v+2*N);ee=Math.min(1,(l.fadeEnd?1-q:Math.min(q,1-q))/l.taper)}for(let q=-j/2+re;q<=j/2+.01;q+=p){const se=l.crisp?ee:Math.min(1,(j/2-Math.abs(q))/(p*1.6)+.3)*ee;if(c()>se)continue;const O=l.x1+w*Y+z*q+(c()-.5)*P,K=l.y1+E*Y+L*q+(c()-.5)*P;s.globalAlpha=(l.a??.9)*(l.af?l.af(Y+(l.u0||0),q,O,K):1),i.dot(s,O,K,V)}}s.globalAlpha=1}function Hn(s,i,l,c,p={}){let h=0;for(let g=0;g<l.length-1;g++)wt(s,i,{x1:l[g][0],y1:l[g][1],x2:l[g+1][0],y2:l[g+1][1],w:c,u0:h,...p}),h+=Math.hypot(l[g+1][0]-l[g][0],l[g+1][1]-l[g][1])}const ch=s=>Math.max(0,Math.min(1,Number.isFinite(+s)?+s:0)),uh={udiv(s,i,l,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),h=7,g=c.opts.fade||"both";wt(s,c,{x1:2,y1:l/2,x2:i-2,y2:l/2,w:(p-1)*h*c.S,s:h,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:g==="none"?0:g==="end"?.7:.22,fadeEnd:g==="end"})},ucardhead(s,i,l,c){wt(s,c,{x1:-20,y1:l*.8,x2:i+20,y2:l*.15,w:44,s:7,r:1.6,ext:0}),wt(s,c,{x1:i*.4,y1:-20,x2:i*.78,y2:l+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(s,i,l,c){const p=12*c.S;for(let h=p/2;h<l;h+=p)for(let g=p/2;g<i;g+=p){let v=.14;c.hover&&(v+=.86*Math.exp(-((g-c.mx)**2+(h-c.my)**2)/5e3)),s.globalAlpha=v,c.dot(s,g,h,1.6)}s.globalAlpha=1},ucta(s,i,l,c){Hn(s,c,[[-.05*i,.1*l],[.22*i,.5*l],[.02*i,1.1*l]],46,{s:7,r:1.6,ext:0}),Hn(s,c,[[1.05*i,-.1*l],[.78*i,.5*l],[.98*i,1.1*l]],46,{s:7,r:1.6,ext:0})},uempty(s,i,l,c){Hn(s,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,h])=>[p*i,h*l]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(s,i,l,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,i-40,10],["r",20,108,i-40,10],["r",20,128,i*.55,10],["r",20,158,i-40,46]],h=6*c.S,g=c.t*240%(i+500)-250;for(let v=h/2;v<l;v+=h)for(let w=h/2;w<i;w+=h){if(!p.some(L=>L[0]==="c"?(w-L[1])**2+(v-L[2])**2<L[3]**2:w>=L[1]&&w<=L[1]+L[3]&&v>=L[2]&&v<=L[2]+L[4]))continue;const z=Math.exp(-((w+v*.5-g)**2)/4050);s.globalAlpha=.16+.6*z,c.dot(s,w,v,1.3)}s.globalAlpha=1},uprog(s,i,l,c){const p=7*c.S,h=Math.max(1,Math.round(+c.opts.rows||1)),g=ch(c.opts.progress),v=l/2-(h-1)*p/2,w=c.teal("progress");for(let E=0;E<h;E++)for(let z=4;z<i;z+=p){const L=z/i<g;s.fillStyle=L?w:c.fg,s.globalAlpha=L?1:.2,c.dot(s,z,v+E*p,1.6)}s.globalAlpha=1,s.fillStyle=c.fg},uloader(s,i,l,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([w,E])=>[w*i,E*l]);let h=0;for(let w=0;w<p.length-1;w++)h+=Math.hypot(p[w+1][0]-p[w][0],p[w+1][1]-p[w][1]);const g=c.t%2.8/2.8,v=Math.min(1,g/.7)*(h+30);Hn(s,c,p,26,{s:6,r:1.3,ext:0,a:1,af:w=>w<v?v-w<18&&g<.7?1:.85:.08})},uline(s,i,l,c){s.fillStyle=c.teal("active"),wt(s,c,{x1:3,y1:l/2,x2:i-3,y2:l/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),s.fillStyle=c.fg},umedia(s,i,l,c){const p=10*c.S;s.globalAlpha=.16;for(let h=p/2;h<l;h+=p)for(let g=p/2;g<i;g+=p)c.dot(s,g,h,1.3);s.globalAlpha=1,wt(s,c,{x1:-20,y1:l*.9,x2:i+20,y2:l*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(s,i,l,c){Hn(s,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,h])=>[p*i,h*l]),72,{s:7,r:1.6,ext:0})},ufooter(s,i,l,c){const h=7*c.S,g=c.rng;s.fillStyle=c.C.page,s.fillRect(0,0,i,90),s.fillStyle=c.C.inverse,s.fillRect(0,90,i,l-90);for(let v=h/2;v<90;v+=h)for(let w=h/2;w<i;w+=h)g()<Math.pow(v/90,1.6)&&c.dot(s,w,v,1.6)},uquote(s,i,l,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},h=24,g=130;wt(s,c,{...p,x1:h,y1:h,x2:h+g,y2:h}),wt(s,c,{...p,x1:h,y1:h,x2:h,y2:h+g}),wt(s,c,{...p,x1:i-h,y1:l-h,x2:i-h-g,y2:l-h}),wt(s,c,{...p,x1:i-h,y1:l-h,x2:i-h,y2:l-h-g})},utime(s,i,l,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),h=Math.round(+c.opts.current||0),g=l/p,v=i/2,w=7*c.S,E=Array.from({length:p},(z,L)=>g*(L+.5));for(let z=E[0];z<=E[p-1];z+=w)E.some(L=>Math.abs(z-L)<15)||(s.globalAlpha=z<E[Math.min(Math.max(h,0),p-1)]?.75:.18,c.dot(s,v,z,1.4));E.forEach((z,L)=>{s.fillStyle=L===h?c.teal("current"):c.fg,s.globalAlpha=L<=h?1:.25;for(let j=-1;j<=1;j++)for(let N=-1;N<=1;N++)c.dot(s,v+j*6,z+N*6,1.5)}),s.globalAlpha=1,s.fillStyle=c.fg},ubullet(s,i,l,c){const p=i/3;c.opts.accent&&(s.fillStyle=c.teal("current"));for(let h=0;h<3;h++)for(let g=0;g<3;g++)c.dot(s,p/2+h*p,p/2+g*p,p*.26);s.fillStyle=c.fg},usep(s,i,l,c){s.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(s,i*(.2+p*.3),l*(.8-p*.3),i*.1);s.globalAlpha=1},uthumb(s,i,l,c){const p=c.rng,h=2+Math.floor(p()*2),g=[];for(let v=0;v<=h;v++)g.push([(v%2?.72+.22*p():.06+.22*p())*i,(.12+v*(.76/h)+(p()-.5)*.08)*l]);p()>.5&&g.forEach(v=>{const w=v[0];v[0]=v[1],v[1]=w}),Hn(s,c,g,i*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(s,i,l,c){wt(s,c,{x1:i*.5,y1:-20,x2:i+30,y2:l*.42,w:42,s:7,r:1.6,ext:0}),wt(s,c,{x1:i*.76,y1:-20,x2:i+30,y2:l*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(s,i,l,c){const p=c.t;Hn(s,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([h,g])=>[h*i,g*l]),50,{s:7,r:1.6,af:h=>.28+.72*Math.pow(.5+.5*Math.sin(h*.016-p*2),2)})},type(s,i,l,c){if(!i||!l||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(i),p.height=Math.ceil(l);const h=p.getContext("2d"),g=c.opts.text||"Crafthouse";h.textAlign="center",h.textBaseline="middle";let v=l*(+c.opts.textScale||.62);h.font=`500 ${v}px ${c.font}`;const w=h.measureText(g).width;w>i*.88&&(v*=i*.88/w,h.font=`500 ${v}px ${c.font}`),h.fillText(g,i/2,l/2);const E=Math.min(9,Math.max(4.2,v/34))*c.S,z=E*.24,L=h.getImageData(0,0,p.width,p.height).data,j=-.14,N=Math.cos(j),V=Math.sin(j),P=Math.hypot(i,l)/2+10;let U=0;for(let Y=-P;Y<P;Y+=E,U++)for(let re=-P+U%2*E/2;re<P;re+=E){const ee=i/2+re*N-Y*V,q=l/2+re*V+Y*N;ee<0||q<0||ee>=p.width||q>=p.height||L[((q|0)*p.width+(ee|0))*4+3]>100&&c.dot(s,ee,q,z)}}};function dh(s,i){const{art:l,w:c,h:p,dpr:h,colors:g,surface:v="inverse",shape:w="plus",density:E=1,seed:z=0,t:L=0,opts:j={},font:N,pointer:V}=i,P=uh[l];if(!P||!c||!p)return;const{accent:U,...Y}=g,re=v==="inverse"?Y.onInverse:Y.text,ee={inverse:Y.inverse,raised:Y.raised,page:Y.page,sunk:Y.sunk};s.setTransform(h,0,0,h,0,0),s.globalAlpha=1,s.clearRect(0,0,c,p),v!=="none"&&(s.fillStyle=ee[v]??Y.inverse,s.fillRect(0,0,c,p)),s.fillStyle=re;const q=Math.min(1.6,Math.max(.6,+E||1)),se=O=>{if(!ad.has(O))throw new Error(`PlusField: teal is reserved for ${[...ad].join(", ")}; "${O}" is not one of them.`);return U};P(s,c,p,{C:Y,fg:re,S:1/q,rng:oh(z),t:L,opts:j,font:N,teal:se,hover:!!(V!=null&&V.hover),mx:(V==null?void 0:V.x)??0,my:(V==null?void 0:V.y)??0,dot:ih[w]??Td}),s.globalAlpha=1}const ph="_root_1jtbm_5",fh="_backdrop_1jtbm_17",hh="_canvas_1jtbm_25",mh="_srOnly_1jtbm_35",mo={root:ph,backdrop:fh,canvas:hh,srOnly:mh},gh={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},br=new Set,Vn=new Set;let kr=0,Dn=null,kt=null,kn=null;const vh=()=>typeof window<"u",xh=()=>!!(kn!=null&&kn.matches);function $d(s){const i=s/1e3;Vn.forEach(l=>l.paint(i)),kr=Vn.size?requestAnimationFrame($d):0}function yh(){!kr&&Vn.size&&(kr=requestAnimationFrame($d))}function Gl(){var s,i,l;vh()&&(!Dn&&typeof MutationObserver<"u"&&(Dn=new MutationObserver(()=>br.forEach(c=>c.refresh())),Dn.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!kt&&typeof IntersectionObserver<"u"&&(kt=new IntersectionObserver(c=>c.forEach(p=>{const h=p.target.__plusField;h&&(h.visible=p.isIntersecting,h.syncMotion())}))),!kn&&window.matchMedia&&(kn=window.matchMedia("(prefers-reduced-motion: reduce)"),(s=kn.addEventListener)==null||s.call(kn,"change",()=>br.forEach(c=>c.syncMotion()))),document.fonts&&!Gl.fonts&&(Gl.fonts=!0,(l=(i=document.fonts).addEventListener)==null||l.call(i,"loadingdone",()=>br.forEach(c=>c.refresh()))))}function wh(){br.size||(Dn==null||Dn.disconnect(),Dn=null,kt==null||kt.disconnect(),kt=null,kr&&cancelAnimationFrame(kr),kr=0)}function bh(s,i){const l={root:s,canvas:i,ctx:i.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(s),p=c.color,h={};for(const[g,v]of Object.entries(gh))h[g]=c.getPropertyValue(v).trim()||p;l.colors=h,l.font=c.fontFamily},resize(c,p){l.w=c,l.h=p,l.dpr=Math.min(2,window.devicePixelRatio||1);const h=Math.round(c*l.dpr),g=Math.round(p*l.dpr);i.width!==h&&(i.width=h),i.height!==g&&(i.height=g),l.refresh()},animated(){const c=l.props;return!!c&&th.has(c.art)&&c.animate!==!1&&!xh()},syncMotion(){var c;if(l.animated()&&l.visible&&l.w&&l.h){Vn.add(l),yh();return}Vn.delete(l),l.paint(l.animated()?l.t:rh[(c=l.props)==null?void 0:c.art]??0)},refresh(){!l.props||!l.w||!l.h||(l.readTokens(),l.syncMotion(),Vn.has(l)&&l.paint(l.t))},paint(c){const p=l.props;!p||!l.w||!l.h||(l.colors||l.readTokens(),l.t=c,dh(l.ctx,{art:p.art,w:l.w,h:l.h,dpr:l.dpr,colors:l.colors,surface:p.surface,shape:p.shape,density:p.density,seed:sh(p.seed??p.art),t:c,opts:p.opts,font:l.font,pointer:l.pointer}))}};return l}const kh=new Set(["inverse","raised","page","sunk","none"]),_h=new Set(["plus","square","round"]);function Lh({art:s,surface:i="inverse",shape:l="plus",density:c=1,animate:p=!0,seed:h,rows:g,fade:v,text:w,progress:E,accent:z=!1,steps:L,current:j,textScale:N,backdrop:V=!1,label:P,as:U="div",className:Y="",...re}){const ee=d.useRef(null),q=d.useRef(null),se=d.useRef(null),O={art:s,surface:kh.has(i)?i:"inverse",shape:_h.has(l)?l:"plus",density:c,animate:p,seed:h,opts:{rows:g,fade:v,text:w,progress:E,accent:z,steps:L,current:j,textScale:N}};d.useEffect(()=>{const ue=ee.current,ie=q.current;if(!ue||!ie||!ie.getContext)return;Gl();const ce=bh(ue,ie);ce.props=O,se.current=ce,ue.__plusField=ce,br.add(ce);const Z=typeof ResizeObserver<"u"?new ResizeObserver(([me])=>{const{width:pe,height:W}=me.contentRect;(pe!==ce.w||W!==ce.h)&&ce.resize(pe,W)}):null;Z==null||Z.observe(ue),kt==null||kt.observe(ue);const D=nh.has(s)?ue.parentElement||ue:null,$=me=>{const pe=ue.getBoundingClientRect();ce.pointer={hover:!0,x:me.clientX-pe.left,y:me.clientY-pe.top},ce.paint(ce.t)},we=()=>{ce.pointer={hover:!1,x:0,y:0},ce.paint(ce.t)};return D==null||D.addEventListener("pointermove",$),D==null||D.addEventListener("pointerleave",we),()=>{Z==null||Z.disconnect(),kt==null||kt.unobserve(ue),D==null||D.removeEventListener("pointermove",$),D==null||D.removeEventListener("pointerleave",we),Vn.delete(ce),br.delete(ce),delete ue.__plusField,se.current=null,wh()}},[s]),d.useEffect(()=>{const ue=se.current;ue&&(ue.props=O,ue.refresh())});const K=[mo.root,V?mo.backdrop:"",Y].filter(Boolean).join(" "),he=Math.round(Math.max(0,Math.min(1,Number(E)||0))*100);return f.jsxs(U,{ref:ee,className:K,...re,children:[f.jsx("canvas",{ref:q,className:mo.canvas,"aria-hidden":"true"}),P&&(s==="uloader"||s==="uskel")&&f.jsx("span",{role:"status",className:mo.srOnly,children:P}),s==="uprog"&&f.jsx("span",{role:"progressbar",className:mo.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":he,"aria-label":P})]})}const Sh="_underline_w8mvb_3",Eh={underline:Sh},Dl=new WeakMap,ld=s=>{var i;return s.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((i=s.parentElement)==null?void 0:i.parentElement)||null};function Hd({active:s=!0,shape:i,density:l,motion:c="plus-underline",className:p="",...h}){const g=d.useRef(null);return d.useLayoutEffect(()=>{const v=g.current,w=v&&s?ld(v):null;if(!w)return;const E=Dl.get(w);if(Dl.set(w,v),!E||E===v||!E.isConnected||Zn())return;const z=_n(v,c);if(!In(z))return;const L=At(v),j=si(E,L);E.getAnimations().forEach(N=>N.cancel()),wr(v,Lr(z,j,{l:0,r:L.width},L.height),z.travelDur,"linear")},[s,c]),d.useEffect(()=>{var v;s||(v=g.current)==null||v.getAnimations().forEach(w=>w.cancel())},[s]),d.useEffect(()=>{const v=g.current,w=v&&s?ld(v):null;if(!w)return;const E=z=>{var ee,q;const L=(q=(ee=z.target).closest)==null?void 0:q.call(ee,'a, button, [role="tab"], [role="radio"]');if(!L||!w.contains(L)||L.contains(v)||Zn())return;const j=_n(v,c);if(!In(j)||j.lean<=0)return;const N=At(v),V=At(L),P={l:0,r:N.width},U=oi(j,P,{l:V.left-N.left,r:V.right-N.left});wr(v,[Bn({...P,h:N.height},N.height),Bn({...U,h:N.height},N.height)],j.leanDur,j.leanEasing,{hold:!0});let Y=!1;const re=()=>setTimeout(()=>{Y||(Y=!0,!(Dl.get(w)!==v||!v.isConnected)&&wr(v,Lr(_n(v,c),U,P,N.height),j.travelDur,"linear"))},0);window.addEventListener("pointerup",re,{once:!0}),L.addEventListener("pointerleave",re,{once:!0})};return w.addEventListener("pointerdown",E),()=>w.removeEventListener("pointerdown",E)},[s,c]),f.jsx("span",{ref:g,className:`${Eh.underline} ${p}`,"aria-hidden":"true",...h,children:s&&f.jsx(Lh,{as:"span",art:"uline",surface:"none",shape:i,density:l})})}const zh="_nav_lg753_18",Ch="_row_lg753_26",jh="_brand_lg753_35",Mh="_links_lg753_44",Nh="_linkItem_lg753_51",Ah="_link_lg753_44",Fh="_toggle_lg753_79",Ph="_trailing_lg753_84",Rh="_desktop_lg753_93",Th="_compact_lg753_100",$h="_menu_lg753_118",Hh="_menuOpen_lg753_128",Je={nav:zh,row:Ch,brand:jh,links:Mh,linkItem:Nh,link:Ah,toggle:Fh,trailing:Ph,desktop:Rh,compact:Th,menu:$h,menuOpen:Hh};function Oh({brand:s,links:i=[],trailing:l,compact:c=!1,underline:p=!1,className:h=""}){const[g,v]=d.useState(!1);return f.jsxs("nav",{className:`${Je.nav} ${c?Je.compact:Je.desktop} ${h}`,"aria-label":"Primary",children:[f.jsxs("div",{className:Je.row,children:[f.jsx("div",{className:Je.brand,children:s}),c?f.jsx("button",{type:"button",className:Je.toggle,"aria-expanded":g,"aria-controls":"navbar-menu",onClick:()=>v(w=>!w),children:g?"Close":"Menu"}):f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:Je.links,children:i.map(w=>f.jsx("li",{className:Je.linkItem,children:f.jsxs("a",{className:Je.link,href:w.href,"aria-current":w.current?"page":void 0,children:[w.label,p&&f.jsx(Hd,{active:!!w.current,motion:"nav-bar"})]})},w.href))}),l&&f.jsx("div",{className:Je.trailing,children:l})]})]}),c&&f.jsxs("div",{id:"navbar-menu",className:`${Je.menu} ${g?Je.menuOpen:""}`,children:[f.jsx("ul",{className:Je.links,children:i.map(w=>f.jsx("li",{className:Je.linkItem,children:f.jsx("a",{className:Je.link,href:w.href,"aria-current":w.current?"page":void 0,children:w.label})},w.href))}),l&&f.jsx("div",{className:Je.trailing,children:l})]})]})}const Dh="_slider_18xic_30",Vh="_track_18xic_48",Ih="_fill_18xic_59",Zh="_thumb_18xic_77",Bh="_dragging_18xic_128",Uh="_moving_18xic_138",xr={slider:Dh,track:Vh,fill:Ih,thumb:Zh,dragging:Bh,moving:Uh};function Wh({value:s=.5,onChange:i,min:l=0,max:c=1,step:p=.01,bigStep:h=.05,label:g,disabled:v=!1,sound:w=!0,className:E=""}){const z=yo("slide",w),L=d.useRef(null),j=d.useRef(null),[N,V]=d.useState(!1),[P,U]=d.useState(!1),Y=d.useRef(null),re=d.useCallback(D=>Math.max(l,Math.min(c,D)),[l,c]),ee=(re(s)-l)/(c-l||1),q=ee*100,se=()=>parseFloat(getComputedStyle(L.current).getPropertyValue("--sc-size-slider-thumb"))||0,O=d.useCallback(D=>{const $=L.current;if(!$)return s;const we=At($),me=se(),pe=we.width-me,W=D/($.currentCSSZoom||1),oe=pe<=0?0:(W-we.left-me/2)/pe;return re(l+oe*(c-l))},[re,l,c,s]),K=()=>{const D=L.current,$=j.current;D&&$&&(Y.current=si($,At(D)))},he=()=>{var D,$;(D=j.current)==null||D.getAnimations().forEach(we=>we.cancel()),($=L.current)==null||$.removeAttribute("data-driven")};d.useLayoutEffect(()=>{const D=Y.current;Y.current=null;const $=L.current,we=j.current;if(!D||!$||!we||Zn())return;const me=_n(we,"slider");if(!In(me))return;const pe=se(),W=(At($).width-pe)*ee;if(Math.abs(D.l-W)<.5)return;$.setAttribute("data-driven","");const oe=Lr(me,{l:D.l-W,r:D.r-W},{l:0,r:pe},pe);wr(we,oe,me.travelDur,"linear",{onDone:()=>$.removeAttribute("data-driven")})},[ee]),d.useEffect(()=>he,[]);const ue=D=>{if(v)return;D.currentTarget.setPointerCapture(D.pointerId),V(!0);const $=O(D.clientX);$!==re(s)&&K(),i==null||i($)},ie=D=>{v||!N||(P||(he(),U(!0)),i==null||i(O(D.clientX)))},ce=()=>{V(!1),U(!1)},Z=D=>{if(v)return;let $;switch(D.key){case"ArrowRight":case"ArrowUp":$=s+(D.shiftKey?h:p);break;case"ArrowLeft":case"ArrowDown":$=s-(D.shiftKey?h:p);break;case"Home":$=l;break;case"End":$=c;break;default:return}D.preventDefault(),re($)!==re(s)&&(K(),z()),i==null||i(re($))};return f.jsx("div",{className:`${xr.slider} ${E}`,role:"slider",tabIndex:v?-1:0,"aria-valuemin":Math.round(l*100),"aria-valuemax":Math.round(c*100),"aria-valuenow":Math.round(q),"aria-label":g,"aria-disabled":v||void 0,onPointerDown:ue,onPointerMove:ie,onPointerUp:ce,onPointerCancel:ce,onKeyDown:Z,children:f.jsxs("span",{ref:L,className:`${xr.track} ${N?xr.dragging:""} ${P?xr.moving:""}`,style:{"--value":ee},"aria-hidden":"true",children:[f.jsx("span",{className:xr.fill}),f.jsx("span",{ref:j,className:xr.thumb})]})})}const Kh="_field_iylkk_31",Qh="_label_iylkk_40",Gh="_description_iylkk_49",qh="_helper_iylkk_50",Yh="_box_iylkk_60",Jh="_input_iylkk_74",Xh="_icon_iylkk_96",em="_trailing_iylkk_97",tm="_prefix_iylkk_104",nm="_suffix_iylkk_105",rm="_clear_iylkk_128",om="_helperError_iylkk_169",sm="_errored_iylkk_175",am="_disabled_iylkk_188",it={field:Kh,label:Qh,description:Gh,helper:qh,box:Yh,input:Jh,icon:Xh,trailing:em,prefix:tm,suffix:nm,clear:rm,helperError:om,errored:sm,disabled:am},id=s=>s&&!d.isValidElement(s)&&typeof s!="string"?f.jsx(Zs,{glyph:s,weight:"bold"}):s;function lm({label:s,description:i,helper:l,error:c,disabled:p=!1,type:h="text",value:g,onChange:v,placeholder:w,icon:E,prefix:z,suffix:L,trailing:j,clearable:N=!1,onClear:V,className:P="",...U}){const Y=d.useId(),re=`${Y}-description`,ee=`${Y}-helper`,q=d.useRef(null),se=!!c,O=[i&&re,(c||l)&&ee].filter(Boolean).join(" ")||void 0,K=g!==void 0?String(g).length>0:void 0,he=()=>{const ue=q.current;V?V():ue&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(ue,""),ue.dispatchEvent(new Event("input",{bubbles:!0}))),ue==null||ue.focus()};return f.jsxs("div",{className:`${it.field} ${p?it.disabled:""} ${se?it.errored:""} ${P}`,children:[s&&f.jsx("label",{htmlFor:Y,className:it.label,children:s}),i&&f.jsx("span",{id:re,className:it.description,children:i}),f.jsxs("div",{className:it.box,children:[z&&f.jsx("span",{className:it.prefix,children:z}),E&&f.jsx("span",{className:it.icon,"aria-hidden":"true",children:id(E)}),f.jsx("input",{ref:q,id:Y,type:h,className:it.input,value:g,onChange:v,placeholder:w,disabled:p,"aria-invalid":se||void 0,"aria-describedby":O,...U}),L&&f.jsx("span",{className:it.suffix,children:L}),N&&!p&&K!==!1&&f.jsx("button",{type:"button",className:it.clear,"aria-label":s?`Clear ${s}`:"Clear",onClick:he,children:f.jsx(Zs,{glyph:Y0,weight:"bold"})}),j&&f.jsx("span",{className:it.trailing,children:id(j)})]}),(c||l)&&f.jsx("span",{id:ee,className:`${it.helper} ${se?it.helperError:""}`,children:c||l})]})}function im(){var l,c;if(typeof window>"u"||typeof navigator>"u"||!((c=(l=navigator.userAgentData)==null?void 0:l.brands)==null?void 0:c.some(p=>p.brand==="Chromium")))return!1;const i=p=>{var h;return(h=window.matchMedia)==null?void 0:h.call(window,p).matches};return!i("(prefers-reduced-transparency: reduce)")&&!i("(forced-colors: active)")}function cm(s,i,l,{depth:c,refraction:p,splay:h}){const g=Math.max(0,c)/100*(Math.min(s,i)/2),v=Math.max(0,p)/100*(g/2),w=1+3*(1-Math.min(100,Math.max(0,h))/100),E=Math.min(l,s/2,i/2),z=new Uint8ClampedArray(s*i*4);for(let L=0;L<i;L+=1)for(let j=0;j<s;j+=1){const N=j+.5-s/2,V=L+.5-i/2,P=Math.abs(N)-(s/2-E),U=Math.abs(V)-(i/2-E),re=-(Math.hypot(Math.max(P,0),Math.max(U,0))+Math.min(Math.max(P,U),0)-E);let ee=0,q=0,se=0;if(re>0&&g>0&&re<g)if(se=(1-re/g)**w,P>0&&U>0){const K=Math.hypot(P,U)||1;ee=Math.sign(N)*(P/K),q=Math.sign(V)*(U/K)}else P>U?ee=Math.sign(N):q=Math.sign(V);const O=(L*s+j)*4;z[O]=127.5*(1-ee*se),z[O+1]=127.5*(1-q*se),z[O+2]=128,z[O+3]=255}return{bytes:z,scale:2*v}}function um(s){const i=getComputedStyle(s),l=c=>parseFloat(i.getPropertyValue(c))||0;return{depth:l("--glass-depth"),refraction:l("--glass-refraction"),splay:l("--glass-splay"),radius:parseFloat(i.borderTopLeftRadius)||0}}function dm(s,i,l){const c=`sc-glass-${d.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,[p,h]=d.useState(null);return d.useEffect(()=>{const g=s.current;if(!i||!g||!im()){h(null);return}let v="";const w=()=>{const z=Math.round(g.offsetWidth),L=Math.round(g.offsetHeight),{radius:j,...N}=um(g),V=JSON.stringify([z,L,j,N]);if(V===v||z<2||L<2)return;v=V;const{bytes:P,scale:U}=cm(z,L,j,N),Y=document.createElement("canvas");Y.width=z,Y.height=L,Y.getContext("2d").putImageData(new ImageData(P,z,L),0,0),h({w:z,h:L,scale:U,href:Y.toDataURL()})};w();const E=new ResizeObserver(w);return E.observe(g),window.addEventListener("sc-tokens-change",w),()=>{E.disconnect(),window.removeEventListener("sc-tokens-change",w)}},[s,i,l]),{id:c,filter:p}}const pm="_card_tuxqx_24",fm="_defs_tuxqx_37",hm="_flat_tuxqx_46",mm="_interactive_tuxqx_47",gm="_subtle_tuxqx_50",vm="_regular_tuxqx_59",xm="_heavy_tuxqx_68",ym="_glass_tuxqx_77",go={card:pm,defs:fm,flat:hm,interactive:mm,subtle:gm,regular:vm,heavy:xm,glass:ym},wm={default:"flat",elevated:"flat",interactive:"flat"},bm=["subtle","regular","heavy"];function km({variant:s="flat",level:i="regular",interactive:l=s==="interactive",as:c="div",onClick:p,children:h,className:g="",style:v,...w}){const E=s==="glass"?"glass":wm[s]??"flat",z=bm.includes(i)?i:"regular",L=E==="glass",j=d.useRef(null),{id:N,filter:V}=dm(j,L,z),P=l?"button":c,U=[go.card,go[E],L?go[z]:"",l?go.interactive:"",g].filter(Boolean).join(" ");return f.jsxs(P,{ref:j,type:l?"button":void 0,className:U,onClick:l?p:void 0,style:V?{...v,"--glass-refract":`url(#${N})`}:v,...w,children:[V&&f.jsx("svg",{className:go.defs,"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:f.jsxs("filter",{id:N,x:"0",y:"0",width:V.w,height:V.h,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[f.jsx("feImage",{href:V.href,x:"0",y:"0",width:V.w,height:V.h,preserveAspectRatio:"none",result:"map"}),f.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:V.scale,xChannelSelector:"R",yChannelSelector:"G"})]})}),h]})}const _m=`/* tokens:
 *   --sc-size-switch-track-width   · 40 track (record Switch 2026-10-07-1539 B)
 *   --sc-size-switch-track-height  · 22 track
 *   --sc-size-switch-thumb         · 15 thumb (3.5 inset)
 *   --sc-size-switch-glyph         · 6 I bar height / O ring diameter
 *   --sc-radius-pill               · 9999 pill
 *   --sc-color-switch-track-off       · off track floor (role token, = surface.deepSunk)
 *   --sc-color-switch-track-off-hover · off track floor, hover (role token, = surface.hover)
 *   --sc-color-brand-accent        · on track ground
 *   --sc-color-brand-accent-fill   · on track ground, hover
 *   --sc-color-surface-sunk        · disabled track ground
 *   --sc-color-switch-thumb-rim-top / -rim-bottom    · knob rim gradient
 *   --sc-color-switch-thumb-face-top / -face-bottom  · knob face gradient
 *   --sc-color-switch-glyph-on / -off                · I mark / O ring
 *   --sc-shadow-switch-track       · recessed track (inset)
 *   --sc-shadow-switch-thumb       · knob lift (six layers)
 *   --sc-color-text-primary        · label
 *   --sc-color-text-disabled       · disabled label
 *   --sc-border-width-default      · O ring stroke; rim = half of it
 *   --sc-font-text-body-default-*  · label
 *   --sc-space-component-gap-md    · switch ↔ label gap
 *   --sc-motion-switch-travel-duration / -easing · knob + glyph travel, track ground (role tokens, = motion.reveal)
 *   --sc-motion-switch-stretch / -squash   · knob length and flattening at peak speed (Switch.jsx; 0 = rigid)
 *   --sc-motion-switch-press-lean / -lean-duration · knob leans toward its target on pointer down (Switch.jsx; 0 = off)
 *   --sc-size-switch-label-offset  · vertical label nudge (0 = centred)
 *   --sc-motion-hover-duration / -easing   · track ground change
 *   --sc-motion-press-duration / -easing / -scale · knob press
 *
 * Geometry (all derived, no magic values):
 *   inset  = (track-height − thumb) / 2            → 3.5
 *   travel = track-width − thumb − 2 × inset       → 18
 *   The I mark sits centred in the free zone left of the knob when on
 *   (inset + travel/2 → 12.5); the O ring centred in the free zone right of
 *   the knob when off (inset + thumb + travel/2 → 27.5). Both ride one row
 *   that translates by \`travel\` with the knob, so the outgoing glyph slides
 *   out under the track edge exactly as the Drams original does.
 */

.field {
  --inset: calc((var(--sc-size-switch-track-height) - var(--sc-size-switch-thumb)) / 2);
  --travel: calc(var(--sc-size-switch-track-width) - var(--sc-size-switch-thumb) - 2 * var(--inset));
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-md);
  cursor: pointer;
  user-select: none;
}

.disabled {
  cursor: not-allowed;
}

.controlWrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.input {
  /* Visually-hidden native checkbox · stays focusable for keyboard + a11y */
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: inherit;
  margin: 0;
  z-index: 1;
}

.track {
  width: var(--sc-size-switch-track-width);
  height: var(--sc-size-switch-track-height);
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-switch-track-off);
  box-shadow: var(--sc-shadow-switch-track);
  display: inline-flex;
  align-items: center;
  position: relative;
  transition: background-color var(--sc-motion-switch-travel-duration) var(--sc-motion-switch-travel-easing);
}

/* Glyph row · clipped to the track so the outgoing glyph slides out
   under the track edge. Separate from the knob, which must not clip:
   its lift shadow extends well past the track. */
.glyphs {
  position: absolute;
  inset: 0;
  border-radius: var(--sc-radius-pill);
  overflow: hidden;
  pointer-events: none;
}

.glyphs > span {
  position: absolute;
  top: calc((var(--sc-size-switch-track-height) - var(--sc-size-switch-glyph)) / 2);
  height: var(--sc-size-switch-glyph);
  transition: transform var(--sc-motion-switch-travel-duration) var(--sc-motion-switch-travel-easing);
}

.glyphOn {
  width: var(--sc-border-width-default);
  left: calc(var(--inset) + var(--travel) / 2 - var(--travel) - var(--sc-border-width-default) / 2);
  background-color: var(--sc-color-switch-glyph-on);
}

.glyphOff {
  width: var(--sc-size-switch-glyph);
  left: calc(var(--inset) + var(--sc-size-switch-thumb) + var(--travel) / 2 - var(--sc-size-switch-glyph) / 2);
  border-radius: var(--sc-radius-pill);
  border: var(--sc-border-width-default) solid var(--sc-color-switch-glyph-off);
  box-sizing: border-box;
}

/* Knob · the element is the rim (light-catching gradient); ::after is the
   face, inset by half a hairline so a sliver of rim shows at the top. */
.thumb {
  width: var(--sc-size-switch-thumb);
  height: var(--sc-size-switch-thumb);
  border-radius: var(--sc-radius-pill);
  background-image: linear-gradient(
    var(--sc-color-switch-thumb-rim-top),
    var(--sc-color-switch-thumb-rim-bottom)
  );
  box-shadow: var(--sc-shadow-switch-thumb);
  position: absolute;
  left: var(--inset);
  transition:
    transform var(--sc-motion-switch-travel-duration) var(--sc-motion-switch-travel-easing),
    scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

/* While Switch.jsx drives the knob (stretch, squash or press lean above 0),
   its own animation owns transform, width and height; a CSS transition
   would outrank it in the cascade. */
.track[data-driven] .thumb {
  transition: scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

.thumb::after {
  content: '';
  position: absolute;
  inset: calc(var(--sc-border-width-default) / 2);
  border-radius: var(--sc-radius-pill);
  background-image: linear-gradient(
    var(--sc-color-switch-thumb-face-top),
    var(--sc-color-switch-thumb-face-bottom)
  );
}

/* On state — track flips to accent, knob and glyph row travel right */
.input:checked ~ .track {
  background-color: var(--sc-color-brand-accent);
}
.input:checked ~ .track .thumb,
.input:checked ~ .track .glyphs > span {
  transform: translateX(var(--travel));
}

/* Hover — the ground shifts one ladder step; the knob does not move */
.field:hover .input:not(:disabled) ~ .track {
  background-color: var(--sc-color-switch-track-off-hover);
}
.field:hover .input:not(:disabled):checked ~ .track {
  background-color: var(--sc-color-brand-accent-fill);
}

/* Active — the knob presses in, reusing Button's press pair */
.field:active .input:not(:disabled) ~ .track .thumb {
  scale: var(--sc-motion-press-scale);
}

/* Focus ring — native input focus surfaces through the track */
.input:focus-visible ~ .track {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

/* Disabled — flat: no recess, no lift, no glyphs */
.input:disabled ~ .track {
  background-color: var(--sc-color-surface-sunk);
  box-shadow: none;
}
.input:disabled ~ .track .thumb {
  box-shadow: none;
  opacity: 0.6; /* matches Stepper's disabled dim */
}
.input:disabled ~ .track .glyphs {
  visibility: hidden;
}

.label {
  font-family: var(--sc-font-text-body-default-family);
  font-size: var(--sc-font-text-body-default-size);
  font-weight: var(--sc-font-text-body-default-weight);
  line-height: var(--sc-font-text-body-default-line-height);
  letter-spacing: var(--sc-font-text-body-default-letter-spacing);
  color: var(--sc-color-text-primary);
  translate: 0 var(--sc-size-switch-label-offset);
}

.disabled .label {
  color: var(--sc-color-text-disabled);
}

/* Forced colors (Windows high contrast) only; normal rendering is untouched
   (the Switch is final). The recess, the knob lift and both gradients drop,
   so the track gets an edge, the knob becomes a solid system-ink disc, and
   the on track takes Highlight. Knob position still carries state. */
@media (forced-colors: active) {
  .track {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
  }
  .input:checked ~ .track {
    forced-color-adjust: none;
    background-color: Highlight;
    outline-color: Highlight;
  }
  .thumb,
  .thumb::after {
    forced-color-adjust: none;
    background-image: none;
    background-color: CanvasText;
  }
  .input:checked ~ .track .thumb,
  .input:checked ~ .track .thumb::after { background-color: HighlightText; }
  .input:disabled ~ .track { outline-color: GrayText; }
  .input:disabled ~ .track .thumb,
  .input:disabled ~ .track .thumb::after { background-color: GrayText; }
}

@media (prefers-reduced-motion: reduce) {
  .track, .thumb, .glyphs > span { transition: none; }
  .field:active .input:not(:disabled) ~ .track .thumb { scale: none; }
}
`,Lm=`/* tokens:
 *   --sc-color-stepper-track        · recessed pill ground (role token, = surface.sunk)
 *   --sc-color-stepper-key          · ± key face at rest (= surface.raised, the Button key fill)
 *   --sc-color-stepper-key-hover / -key-hover-ink · hover face and glyph (= Button primary hover: teal.600, white)
 *   --sc-color-stepper-key-pressed / -key-pressed-ink · pressed face and glyph (= brand.accentDeep teal.700, white)
 *   --sc-color-stepper-key-shade    · 135deg face shade on each key (= control.keyShade, the Button key face)
 *   --sc-shadow-stepper-track       · recess of the pill, top left (record Stepper 2026-10-07-1847 A)
 *   --sc-shadow-stepper-key         · key lift at rest (= shadow.control.key, the Button key)
 *   --sc-shadow-stepper-key-hover / -key-pressed · hover lift and press (= Button primary: control.keyHover / keyPressed)
 *   --sc-motion-stepper-travel-duration / -easing · readout roll: 1062ms spring (Stepper.jsx)
 *   --sc-motion-stepper-roll / -stretch / -squash  · roll 1 height, stretch 0.45, squash 0 (Stepper.jsx; 0 = off)
 *   --sc-motion-stepper-glyph-press-scale · ± glyph's own press scale, 0.85, on top of the key's 0.985
 *   --sc-color-text-primary         · button ink + readout numeral
 *   --sc-color-text-disabled        · disabled button + readout
 *   --sc-color-border-focus         · focus ring
 *   --sc-border-width-focus         · focus ring weight
 *   --sc-border-focus-offset        · focus ring offset
 *   --sc-radius-pill                · control + button radius
 *   --sc-radius-control             · readout focus-ring radius
 *   --sc-size-icon-md               · glyph box (buttons sized off this via calc, no new size token)
 *   --sc-space-component-gap-stepper · key → readout gaps and readout inline padding (role token, 8)
 *   --sc-space-component-padding-sm · control inset + button hit-area padding
 *   --sc-font-text-mono-body-*      · numeral readout (mono)
 *   --sc-motion-hover-duration / -easing  · key bg/color transition (shadow changes snap)
 *   --sc-motion-press-duration / -easing / -scale  · button press feedback (reuses Button's press pair)
 */

.stepper {
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-stepper);
  padding: var(--sc-space-component-padding-sm);
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-stepper-track);
  box-shadow: var(--sc-shadow-stepper-track);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Hit area derived from the icon token + the control's own inset
     padding — no dedicated Stepper size token needed. */
  width: calc(var(--sc-size-icon-md) + 2 * var(--sc-space-component-padding-sm));
  height: calc(var(--sc-size-icon-md) + 2 * var(--sc-space-component-padding-sm));
  border: none;
  border-radius: var(--sc-radius-pill);
  /* A small Drams 036 key: the Button key's fill, 135deg face shade and
     top-left lift (record Stepper 2026-10-07-1847 A). */
  background-color: var(--sc-color-stepper-key);
  background-image: linear-gradient(135deg, transparent, var(--sc-color-stepper-key-shade));
  box-shadow: var(--sc-shadow-stepper-key);
  color: var(--sc-color-text-primary);
  cursor: pointer;
  transition:
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    transform var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

/* Hover is the Button primary's hover (Levi, 2026-10-07): the accent face,
   and the glyph fades to white on the colour transition above. */
.button:hover:not(:disabled) {
  background-color: var(--sc-color-stepper-key-hover);
  color: var(--sc-color-stepper-key-hover-ink);
  box-shadow: var(--sc-shadow-stepper-key-hover);
}

/* Pressed: one accent step darker. */
.button:active:not(:disabled) {
  background-color: var(--sc-color-stepper-key-pressed);
  color: var(--sc-color-stepper-key-pressed-ink);
  box-shadow: var(--sc-shadow-stepper-key-pressed);
  transform: scale(var(--sc-motion-press-scale));
}

/* The ± glyph presses on its own scale too, on top of the key's (Levi:
   the key's 0.985 alone is too small to see on a 16px glyph). */
.glyph {
  transition: scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}
.button:active:not(:disabled) .glyph {
  scale: var(--sc-motion-stepper-glyph-press-scale);
}

.button:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

/* Disabled (and a key at its bound) is flat: losing the material is the
   unavailable signal (directive 5). */
.button:disabled {
  color: var(--sc-color-text-disabled);
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  cursor: not-allowed;
}

.readout {
  /* Fixed to two digits, so 9 → 10 never moves the keys (Levi,
     2026-10-07). border-box: the padding and the tracking after each digit
     sit inside the width. A third character (−10, 100) still grows it. */
  min-width: calc(2ch + 2 * var(--sc-font-text-mono-body-letter-spacing) + 2 * var(--sc-space-component-gap-stepper));
  text-align: center;
  font-variant-numeric: tabular-nums;
  font-family: var(--sc-font-text-mono-body-family);
  font-size: var(--sc-font-text-mono-body-size);
  font-weight: var(--sc-font-text-mono-body-weight);
  line-height: var(--sc-font-text-mono-body-line-height);
  letter-spacing: var(--sc-font-text-mono-body-letter-spacing);
  color: var(--sc-color-text-primary);
  padding-inline: var(--sc-space-component-gap-stepper);
  user-select: none;
  /* No window, no inset (Levi, 2026-10-07): the numeral sits flat on the
     pill. Its box still clips the roll. */
  position: relative;
  overflow: hidden;
  border-radius: var(--sc-radius-control);
}

.digits {
  display: inline-block;
}

.readout:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

/* Disabled: the whole control dims to 0.6 (Levi, 2026-10-07) and the
   material goes flat underneath it. */
.disabled {
  opacity: 0.6;
}
.disabled.stepper {
  box-shadow: none;
}
.disabled .readout {
  color: var(--sc-color-text-disabled);
}

/* Forced colors (Windows high contrast): recesses, lifts and the key face
   drop. The pill keeps an edge; keys keep the system
   button border. */
@media (forced-colors: active) {
  .stepper {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
  }
  .button {
    outline: var(--sc-border-width-default) solid ButtonBorder;
    outline-offset: calc(-1 * var(--sc-border-width-default));
  }
  .button:disabled,
  .disabled.stepper { outline-color: GrayText; }
  .readout:focus-visible { outline: var(--sc-border-width-focus) solid Highlight; }
}

@media (prefers-reduced-motion: reduce) {
  .button, .glyph { transition: none; }
  .button:active:not(:disabled) { transform: none; }
  .button:active:not(:disabled) .glyph { scale: none; }
}
`,cd=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,Sm=`/* tokens:
 *   --sc-color-segmented-control-track    · track ground (role token, = surface.sunk)
 *   --sc-color-segmented-control-indicator · selected segment fill (role token, = surface.floating)
 *   --sc-color-segmented-control-indicator-shade · 135deg face shade on the indicator (Button key face; shipped transparent)
 *   --sc-shadow-segmented-control-track / -indicator · recess and key lift (shipped zero alpha; tuned in sc-tune)
 *   --sc-color-text-secondary             · unselected segment text
 *   --sc-color-text-primary               · selected segment text ("ink")
 *   --sc-color-text-disabled              · disabled segment text
 *   --sc-color-border-focus               · focus ring
 *   --sc-border-width-focus               · focus ring weight
 *   --sc-border-focus-offset              · focus ring offset
 *   --sc-radius-pill                      · track + indicator + segment radius
 *   --sc-space-component-gap-sm           · inter-segment gap
 *   --sc-space-component-padding-sm       · track inset (also the indicator's vertical inset)
 *   --sc-space-component-padding-inline-md / -sm   · segment inline padding (md / sm size)
 *   --sc-space-component-padding-block-md / -sm    · segment block padding (md / sm size)
 *   --sc-font-text-body-dense-*           · segment label (md size)
 *   --sc-font-text-label-ui-*             · segment label (sm size)
 *   --sc-space-component-padding-inline-lg / --sc-space-component-padding-block-md · lg segment padding
 *   --sc-font-text-label-tab-*            · segment label (lg size)
 *   --sc-space-component-gap-lg           · label ↔ count gap
 *   --sc-motion-segmented-control-travel-duration / -easing · indicator slide (role tokens, = motion.reveal)
 *   --sc-motion-segmented-control-stretch / -squash / -press-lean / -press-lean-duration · elastic motion (SegmentedControl.jsx; 0 = off)
 *   --sc-motion-hover-duration / -easing  · text color transition
 */

.track {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-sm);
  padding: var(--sc-space-component-padding-sm);
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-segmented-control-track);
  box-shadow: var(--sc-shadow-segmented-control-track);
}

.indicator {
  position: absolute;
  top: var(--sc-space-component-padding-sm);
  bottom: var(--sc-space-component-padding-sm);
  left: 0;
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-segmented-control-indicator);
  background-image: linear-gradient(135deg, transparent, var(--sc-color-segmented-control-indicator-shade));
  box-shadow: var(--sc-shadow-segmented-control-indicator);
  transition:
    transform var(--sc-motion-segmented-control-travel-duration) var(--sc-motion-segmented-control-travel-easing),
    width var(--sc-motion-segmented-control-travel-duration) var(--sc-motion-segmented-control-travel-easing);
}

/* While the elastic engine drives the indicator (stretch, squash or lean
   above 0), its keyframes own transform, width and height; a CSS
   transition would outrank them in the cascade. */
.track[data-driven] .indicator {
  transition: none;
}

.segment {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: var(--sc-radius-pill);
  color: var(--sc-color-text-secondary);
  cursor: pointer;
  white-space: nowrap;
  transition: color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}

.md .segment {
  padding-inline: var(--sc-space-component-padding-inline-md);
  padding-block: var(--sc-space-component-padding-block-md);
  font-family: var(--sc-font-text-body-dense-family);
  font-size: var(--sc-font-text-body-dense-size);
  font-weight: var(--sc-font-text-body-dense-weight);
  line-height: var(--sc-font-text-body-dense-line-height);
  letter-spacing: var(--sc-font-text-body-dense-letter-spacing);
}

.sm .segment {
  padding-inline: var(--sc-space-component-padding-inline-sm);
  padding-block: var(--sc-space-component-padding-block-sm);
  font-family: var(--sc-font-text-label-ui-family);
  font-size: var(--sc-font-text-label-ui-size);
  font-weight: var(--sc-font-text-label-ui-weight);
  line-height: var(--sc-font-text-label-ui-line-height);
  letter-spacing: var(--sc-font-text-label-ui-letter-spacing);
}

.lg .segment {
  padding-inline: var(--sc-space-component-padding-inline-lg);
  padding-block: var(--sc-space-component-padding-block-md);
  font-family: var(--sc-font-text-label-tab-family);
  font-size: var(--sc-font-text-label-tab-size);
  font-weight: var(--sc-font-text-label-tab-weight);
  line-height: var(--sc-font-text-label-tab-line-height);
  letter-spacing: var(--sc-font-text-label-tab-letter-spacing);
}

.count {
  margin-inline-start: var(--sc-space-component-gap-lg);
  font-variant-numeric: tabular-nums;
}

.segment:hover:not(:disabled) {
  color: var(--sc-color-text-primary);
}

.segmentSelected {
  color: var(--sc-color-text-primary);
}

.segment:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

.segment:disabled {
  cursor: not-allowed;
  color: var(--sc-color-text-disabled);
}

.disabled {
  cursor: not-allowed;
}

/* Disabled is flat: losing the material is the unavailable signal. */
.disabled.track,
.disabled .indicator {
  box-shadow: none;
  background-image: none;
}

/* Forced colors (Windows high contrast): the recess, the key lift and the
   face drop, and the indicator's fill is forced to the track's. The track
   keeps an edge; the selected segment keeps a Highlight frame inside it. */
@media (forced-colors: active) {
  .track {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
  }
  .indicator {
    outline: var(--sc-border-width-focus) solid Highlight;
    outline-offset: calc(-1 * var(--sc-border-width-focus));
  }
  .disabled.track { outline-color: GrayText; }
  .disabled .indicator { outline-color: GrayText; }
}

@media (prefers-reduced-motion: reduce) {
  .indicator { transition: none; }
  .segment { transition: none; }
}
`,Em=`/* tokens:
 *   --sc-space-component-padding-inline-button-lg · inline (24)
 *   --sc-space-component-padding-block-md   · block
 *   --sc-space-component-gap-md             · label ↔ arrow gap (8, both sizes)
 *   --sc-radius-pill                        · pill corner
 *   --sc-border-width-default               · border
 *   --sc-color-border-focus / -focus-offset · focus ring
 *   --sc-font-text-label-button-lg-*        · 14/medium/loose/slight label (lg)
 *   --sc-font-text-label-button-sm-*        · 12/medium/loose/slight label (sm)
 *   --sc-space-component-padding-inline-button-sm · sm inline (16)
 *   --sc-space-component-padding-block-button-sm  · sm block (4)
 *   --sc-color-border-strong                · secondary outline
 *   --sc-color-surface-raised               · primary resting fill (neutral)
 *   --sc-color-control-key-shade            · 135° face shade over any fill (Drams OP-1 Keys)
 *   --sc-shadow-control-key                 · resting key: shade down-right, highlight up-left
 *   --sc-shadow-control-key-pressed         · pressed key: softer, with an inner light
 *   --sc-size-button-icon-lg / -sm          · arrow and working mark: 14 lg, 12 sm (matches label)
 *   --sc-color-control-key-hover-fill / -ink · primary hover face and label (teal.600 / white)
 *   --sc-shadow-control-key-hover           · primary hover shadow (= key until tuned)
 *   --sc-color-brand-accent-deep            · primary press + tertiary resting text (teal.700, AA)
 *   --sc-color-surface-sunk                 · disabled fill
 *   --sc-color-surface-hover                · secondary hover/focus fill
 *   --sc-color-interactive-hover            · teal hover label (documented AA exception, transient)
 *   --sc-color-interactive-active           · teal press
 *   --sc-color-text-primary                 · primary resting label (ink)
 *   --sc-color-text-on-accent               · white label on teal fill
 *   --sc-color-text-disabled                · disabled label
 *   --sc-color-status-error                 · destructive fill
 *   --sc-motion-hover-* / -press-*          · transitions (colour and transform only;
 *                                             shadow changes snap: a Button repeats in
 *                                             toolbars and tables, Phase 0)
 */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sc-space-component-gap-md);
  padding-inline: var(--sc-space-component-padding-inline-button-lg);
  padding-block: var(--sc-space-component-padding-block-md);
  border-radius: var(--sc-radius-pill);
  border-width: var(--sc-border-width-default);
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  /* Press-spring (Drams #6 Pushin' Click Button) — two-phase transform
     transition via custom properties, not two competing rules: pressing
     down uses the fast press pair (--sc-motion-press-*, 160ms outStrong);
     releasing swaps to the slower spring-overshoot pair
     (--sc-motion-press-release-*, 220ms springOut) the instant :active
     drops. Resting value below is the release pair so the *up* motion —
     which is what a user actually watches settle — carries the spring. */
  --sc-btn-transform-duration: var(--sc-motion-press-release-duration);
  --sc-btn-transform-easing: var(--sc-motion-press-release-easing);
  /* Arrow and loading mark size; .sm swaps it. */
  --sc-btn-icon: var(--sc-size-button-icon-lg);
  transition:
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    border-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    transform var(--sc-btn-transform-duration) var(--sc-btn-transform-easing);
}

/* Swap to the fast press pair only while :active — this is what makes the
   press feel snappy (160ms) while the release (governed by the base rule
   above, once :active drops) reads as the spring settle (220ms overshoot). */
.button:active:not(:disabled) {
  --sc-btn-transform-duration: var(--sc-motion-press-duration);
  --sc-btn-transform-easing: var(--sc-motion-press-easing);
}

.label {
  font-family: var(--sc-font-text-label-button-lg-family);
  font-size: var(--sc-font-text-label-button-lg-size);
  font-weight: var(--sc-font-text-label-button-lg-weight);
  line-height: var(--sc-font-text-label-button-lg-line-height);
  letter-spacing: var(--sc-font-text-label-button-lg-letter-spacing);
}

/* Trailing arrow — per-size role token, the label's size: 14px large,
   12px small (sc-tune 2026-10-07). Inherits colour. */
.arrow {
  flex: none;
  width: var(--sc-btn-icon);
  height: var(--sc-btn-icon);
}

/* --- Size · sm (ADR scds-button-size-small) ------------------------
   12/medium/loose label, 16 × 4 padding, 8px gap (shared with lg),
   12px icon: 34px tall with the 1px border. Large is 14/loose, 24 × 8,
   14px icon: 46px.
   sc-tune record Button 2026-10-07-1418. The variants below set only
   colour, so every variant and state carries over unchanged. */
.sm {
  --sc-btn-icon: var(--sc-size-button-icon-sm);
  padding-inline: var(--sc-space-component-padding-inline-button-sm);
  padding-block: var(--sc-space-component-padding-block-button-sm);
}
.sm .label {
  font-family: var(--sc-font-text-label-button-sm-family);
  font-size: var(--sc-font-text-label-button-sm-size);
  font-weight: var(--sc-font-text-label-button-sm-weight);
  line-height: var(--sc-font-text-label-button-sm-line-height);
  letter-spacing: var(--sc-font-text-label-button-sm-letter-spacing);
}

/* --- Focus · cross-variant (styled ring, never the UA default) ---- */
.button:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

/* --- Key face · filled variants (primary, destructive) -------------
   The Drams OP-1 Keys key, horizontal, sitting on the page surface
   (Levi, 2026-10-07): lit from the top left. The face shades toward the
   bottom-right corner over whatever the fill is; a soft shade falls
   down-right and a white highlight lifts the top-left edge. Pressing
   softens both and adds a soft inner light while the press-spring scales
   the key, so it reads as pushed in. */
.primary,
.destructive {
  background-image: linear-gradient(135deg, transparent, var(--sc-color-control-key-shade));
  box-shadow: var(--sc-shadow-control-key);
}
.primary:active:not(:disabled),
.destructive:active:not(:disabled) {
  box-shadow: var(--sc-shadow-control-key-pressed);
}

/* --- Primary · rests neutral (key), turns teal on hover ----------- */
.primary {
  background-color: var(--sc-color-surface-raised);
  border-color: var(--sc-color-surface-raised);
  color: var(--sc-color-text-primary);
}
.primary:hover:not(:disabled) {
  background-color: var(--sc-color-control-key-hover-fill);
  border-color: var(--sc-color-control-key-hover-fill);
  color: var(--sc-color-control-key-hover-ink);
  box-shadow: var(--sc-shadow-control-key-hover);
}
.primary:active:not(:disabled) {
  background-color: var(--sc-color-brand-accent-deep);
  border-color: var(--sc-color-brand-accent-deep);
  color: var(--sc-color-text-on-accent);
  transform: scale(var(--sc-motion-press-scale));
}

/* --- Secondary · ink outline pill → teal ink on hover/focus -------
   The outline returns (ADR studio-pm-shell-blocklist-exception,
   2026-10-05, superseding the scds-v2 Phase 2 fill-only chip): the
   library's Secondary kept its 1px border/strong stroke, and the Studio
   PM shell builds on it. Transparent ground at rest; surface-hover with a
   teal label on hover/focus (the documented transient accent exception). */
.secondary {
  border-color: var(--sc-color-border-strong);
  color: var(--sc-color-text-primary);
}
.secondary:hover:not(:disabled),
.secondary:focus-visible:not(:disabled) {
  background-color: var(--sc-color-surface-hover);
  color: var(--sc-color-interactive-hover);
}
.secondary:active:not(:disabled) {
  background-color: var(--sc-color-surface-hover);
  color: var(--sc-color-interactive-active);
  transform: scale(var(--sc-motion-press-scale));
}

/* --- Tertiary · teal ghost (resting text = accentDeep for AA) ----- */
.tertiary {
  border-color: transparent;
  color: var(--sc-color-brand-accent-deep);
}
.tertiary:hover:not(:disabled) {
  color: var(--sc-color-interactive-hover);
}
.tertiary:active:not(:disabled) {
  color: var(--sc-color-interactive-active);
  transform: scale(var(--sc-motion-press-scale));
}

/* --- Destructive · error fill (not in the mock; kept for parity) --- */
.destructive {
  background-color: var(--sc-color-status-error);
  border-color: var(--sc-color-status-error);
  color: var(--sc-color-text-on-accent);
}
.destructive:active:not(:disabled) {
  transform: scale(var(--sc-motion-press-scale));
}

/* --- Disabled · cross-variant (fill-only, no stroke frame) --------- */
.button:disabled {
  color: var(--sc-color-text-disabled);
  border-color: transparent;
  background-color: var(--sc-color-surface-sunk);
  background-image: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

/* --- Loading ------------------------------------------------------ */
.loading .label { opacity: 0.6; }

/* Loading mark — the studio's WorkingMark, at the arrow's size. Two
   classes so it wins over WorkingMark's own size class. */
.button .working {
  flex: none;
  width: var(--sc-btn-icon);
  height: var(--sc-btn-icon);
}

/* --- Forced colors (Windows high contrast) ------------------------
   Shadows and the face gradient drop, and the key's border matches its
   fill, so the key would lose its edge. The border takes the system
   button border; the press still reads by scale. */
@media (forced-colors: active) {
  .primary,
  .destructive { border-color: ButtonBorder; }
}

@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
  .button:active:not(:disabled) { transform: none; }
}
`,zm=`/* tokens:
 *   --sc-color-surface-inverse              · inverted ground (ink in light / near-white in dark)
 *   --sc-color-text-on-inverse              · inverted ink
 *   --sc-space-component-padding-inline-md  · 12 inline
 *   --sc-space-component-padding-block-md   · 8 block
 *   --sc-space-component-gap-md             · arrow offset (8) below trigger
 *   --sc-radius-control                     · 3 corner
 *   --sc-font-text-caption-*                · 13 / regular / relaxed
 *   --sc-motion-tooltip-travel-duration / -easing · enter lift (role tokens, = motion.reveal)
 *   --sc-motion-tooltip-stretch / -squash · elastic scale on open (Tooltip.jsx; 0 = off)
 *   --sc-border-width-default               · arrow stroke (reused as triangle leg)
 */

.wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + var(--sc-space-component-gap-md));
  left: 50%;
  transform: translate(-50%, calc(var(--sc-space-component-gap-sm) * -1));
  background-color: var(--sc-color-surface-inverse);
  color: var(--sc-color-text-on-inverse);
  padding-inline: var(--sc-space-component-padding-inline-md);
  padding-block: var(--sc-space-component-padding-block-md);
  border-radius: var(--sc-radius-control);
  font-family: var(--sc-font-text-caption-family);
  font-size: var(--sc-font-text-caption-size);
  font-weight: var(--sc-font-text-caption-weight);
  line-height: var(--sc-font-text-caption-line-height);
  letter-spacing: var(--sc-font-text-caption-letter-spacing);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity var(--sc-motion-tooltip-travel-duration) var(--sc-motion-tooltip-travel-easing),
    transform var(--sc-motion-tooltip-travel-duration) var(--sc-motion-tooltip-travel-easing);
  /* Stretch and squash scale from the arrow (Tooltip.jsx; 0 = none). */
  transform-origin: 50% 100%;
  z-index: 10;
}

/* While the elastic engine drives the open (stretch or squash above 0), its
   keyframes own transform and opacity; a CSS transition would outrank them. */
.wrapper[data-driven] .tooltip {
  transition: none;
}

.tooltip::after {
  /* Arrow · inherits surface-inverse via border-color */
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: var(--sc-space-component-gap-sm);
  border-style: solid;
  border-color: var(--sc-color-surface-inverse) transparent transparent transparent;
}

.open {
  opacity: 1;
  transform: translate(-50%, 0);
}

.singleline {
  white-space: nowrap;
}

.multiline {
  white-space: normal;
  /* Absolute + left: 50% shrinks the box to half the trigger · max-content
     lets it grow to the cap instead of wrapping one word per line */
  width: max-content;
  /* 240 readability cap · built from semantic layout-stack-xl (80) · 3 */
  max-width: calc(var(--sc-space-layout-stack-xl) * 3);
}

@media (prefers-reduced-motion: reduce) {
  .tooltip { transition: none; }
}
`,Cm=`/* tokens:
 *   --sc-space-component-padding-inline-md  · 12 inline padding on links
 *   --sc-space-component-padding-block-md   · 8 block padding
 *   --sc-space-layout-inset-md              · 24 nav inset
 *   --sc-space-component-gap-lg             · 12 inter-link gap
 *   --sc-border-width-default               · 1 bottom hairline
 *   --sc-color-border-default               · bottom hairline color
 *   --sc-color-surface-page                 · nav bg (matches page so nav reads as floating)
 *   --sc-color-text-primary                 · link rest
 *   --sc-color-interactive-hover            · link hover
 *   --sc-color-brand-accent-ink             · current link (teal.700 / teal.200, AA)
 *   --sc-border-width-focus / --sc-color-border-focus / --sc-border-focus-offset · focus ring
 *   --sc-font-text-body-dense-*             · link type (14)
 *   --sc-font-text-label-chrome-*           · toggle button (11 caps)
 *   --sc-motion-hover-duration / -easing
 */

.nav {
  width: 100%;
  background-color: var(--sc-color-surface-page);
  border-bottom-width: var(--sc-border-width-default);
  border-bottom-style: solid;
  border-bottom-color: var(--sc-color-border-default);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sc-space-component-gap-lg);
  padding-inline: var(--sc-space-layout-inset-md);
  padding-block: var(--sc-space-component-padding-block-md);
}

.brand {
  font-family: var(--sc-font-text-label-chrome-family);
  font-weight: var(--sc-font-text-label-chrome-weight);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  font-size: var(--sc-font-text-label-chrome-size);
  color: var(--sc-color-text-primary);
  text-transform: uppercase;
}

.links {
  display: flex;
  align-items: center;
  gap: var(--sc-space-component-gap-lg);
  flex: 1;
}

.linkItem {
  display: inline-block;
}

.link {
  display: inline-block;
  padding-inline: var(--sc-space-component-padding-inline-md);
  padding-block: var(--sc-space-component-padding-block-md);
  font-family: var(--sc-font-text-body-dense-family);
  font-size: var(--sc-font-text-body-dense-size);
  font-weight: var(--sc-font-text-body-dense-weight);
  line-height: var(--sc-font-text-body-dense-line-height);
  letter-spacing: var(--sc-font-text-body-dense-letter-spacing);
  color: var(--sc-color-text-primary);
  text-decoration: none;
  transition: color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}

.link:hover {
  color: var(--sc-color-interactive-hover);
}

.link[aria-current="page"] {
  color: var(--sc-color-brand-accent-ink);
}

/* Focus · styled ring on links and the menu toggle, never the UA default */
.link:focus-visible,
.toggle:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

.trailing {
  display: flex;
  align-items: center;
  gap: var(--sc-space-component-gap-md);
  flex-shrink: 0;
}

/* --- Desktop variant ---------------------------------------------- */

.desktop .links {
  justify-content: flex-start;
  margin-inline-start: var(--sc-space-component-gap-lg);
}

/* --- Compact variant ---------------------------------------------- */

.compact .row {
  justify-content: space-between;
}

.toggle {
  font-family: var(--sc-font-text-label-chrome-family);
  font-size: var(--sc-font-text-label-chrome-size);
  font-weight: var(--sc-font-text-label-chrome-weight);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  color: var(--sc-color-text-primary);
  background: transparent;
  border: 0;
  padding-inline: var(--sc-space-component-padding-inline-md);
  padding-block: var(--sc-space-component-padding-block-md);
  cursor: pointer;
  text-transform: uppercase;
}

.menu {
  display: none;
  flex-direction: column;
  padding-inline: var(--sc-space-layout-inset-md);
  padding-block: var(--sc-space-component-padding-block-md);
  border-top-width: var(--sc-border-width-default);
  border-top-style: solid;
  border-top-color: var(--sc-color-border-default);
}

.menuOpen {
  display: flex;
}

.compact .menu .links {
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}

.compact .menu .link {
  padding-block: var(--sc-space-component-padding-block-md);
}

@media (prefers-reduced-motion: reduce) {
  .link { transition: none; }
}
`,ud=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,jm=`/* tokens:
 *   --sc-size-slider-track / -track-active · track height at rest / while dragged (4 / 6)
 *   --sc-size-slider-hit-slop              · 22 invisible hit-slop block padding (48 total with the track)
 *   --sc-size-slider-thumb                 · thumb diameter
 *   --sc-color-slider-track / -track-disabled · track ground
 *   --sc-color-slider-fill / -fill-hover / -fill-disabled · fill; the disabled thumb is a flat fill-disabled disc
 *   --sc-color-slider-thumb-rim-top / -rim-bottom   · thumb rim, 135deg
 *   --sc-color-slider-thumb-face-top / -face-bottom · thumb face, 135deg
 *   --sc-shadow-slider-track               · recess of the track
 *   --sc-shadow-slider-thumb / -thumb-pressed · thumb lift at rest / while dragged
 *   --sc-motion-slider-travel-duration / -easing · fill + thumb on a seek (click, key)
 *   --sc-motion-slider-drag-duration / -easing   · fill + thumb trailing the pointer
 *   --sc-motion-slider-stretch / -squash   · thumb stretch with travel speed (Slider.jsx; 0 = rigid)
 *   --sc-motion-slider-thumb-press-scale   · thumb scale while dragged (1 = none)
 *   --sc-motion-press-duration / -easing   · thumb press scale transition
 *   --sc-motion-reveal-duration / -easing  · track thickening on drag
 *   --sc-motion-hover-duration / -easing   · fill colour on hover
 *   --sc-radius-pill                       · track, fill and thumb caps
 *   --sc-border-width-default              · thumb rim (half a hairline shows around the face); forced-colors edge
 *   --sc-color-border-focus, --sc-border-width-focus, --sc-border-focus-offset · focus ring
 *
 * Geometry: the thumb rides inside the track, its centre running from
 * thumb/2 to width − thumb/2, and the fill ends under its centre, floored
 * at the track height so a 0 still reads as a small pill (Drams #3/#4).
 * \`--value\` (0..1) is set on the track by Slider.jsx.
 */

/* The wrapper carries the ARIA + pointer/keyboard contract and a 44px-class
   invisible hit-slop via block padding; the visual track sits inside. */
.slider {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-block: var(--sc-size-slider-hit-slop);
  touch-action: none;
  cursor: pointer;
}

.slider[aria-disabled='true'] {
  cursor: not-allowed;
}

.slider:focus-visible {
  outline: none;
}

.track {
  position: relative;
  display: block;
  width: 100%;
  height: var(--sc-size-slider-track);
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-slider-track);
  box-shadow: var(--sc-shadow-slider-track);
  transition: height var(--sc-motion-reveal-duration) var(--sc-motion-reveal-easing);
}

.fill {
  position: absolute;
  inset-block: 0;
  left: 0;
  display: block;
  width: max(
    calc(var(--sc-size-slider-thumb) / 2 + (100% - var(--sc-size-slider-thumb)) * var(--value)),
    var(--sc-size-slider-track)
  );
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-slider-fill);
  transition:
    width var(--sc-motion-slider-travel-duration) var(--sc-motion-slider-travel-easing),
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}

/* Thumb · the element is the rim, ::after the face inset by half a hairline;
   both gradients run at 135deg (the system light, top left). */
.thumb {
  position: absolute;
  top: calc(50% - var(--sc-size-slider-thumb) / 2);
  left: calc((100% - var(--sc-size-slider-thumb)) * var(--value));
  width: var(--sc-size-slider-thumb);
  height: var(--sc-size-slider-thumb);
  border-radius: var(--sc-radius-pill);
  background-image: linear-gradient(
    135deg,
    var(--sc-color-slider-thumb-rim-top),
    var(--sc-color-slider-thumb-rim-bottom)
  );
  box-shadow: var(--sc-shadow-slider-thumb);
  pointer-events: none;
  transition:
    left var(--sc-motion-slider-travel-duration) var(--sc-motion-slider-travel-easing),
    scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

.thumb::after {
  content: '';
  position: absolute;
  inset: calc(var(--sc-border-width-default) / 2);
  border-radius: var(--sc-radius-pill);
  background-image: linear-gradient(
    135deg,
    var(--sc-color-slider-thumb-face-top),
    var(--sc-color-slider-thumb-face-bottom)
  );
}

/* While Slider.jsx drives the thumb (stretch or squash above 0), its
   animation owns the travel; a CSS transition on left would double it. */
.track[data-driven] .thumb {
  transition: scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

/* Hover — the fill brightens. */
.slider:hover:not([aria-disabled='true']) .fill {
  background-color: var(--sc-color-slider-fill-hover);
}

/* Focus — the ring surfaces on the visual track, not the padded hit-slop
   box, so it reads as a 4px control getting focus, not a 48px band. */
.slider:focus-visible .track {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

/* Active / dragging — the track thickens, the thumb is held: it scales and
   its lift softens (press felt as shadow and scale, directive 4). */
.track.dragging {
  height: var(--sc-size-slider-track-active);
}
.track.dragging .thumb {
  scale: var(--sc-motion-slider-thumb-press-scale);
  box-shadow: var(--sc-shadow-slider-thumb-pressed);
}

/* Moving — once the pointer moves, fill and thumb trail it by the drag
   curve instead of the travel curve. */
.track.moving .fill {
  transition:
    width var(--sc-motion-slider-drag-duration) var(--sc-motion-slider-drag-easing),
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}
.track.moving .thumb {
  transition:
    left var(--sc-motion-slider-drag-duration) var(--sc-motion-slider-drag-easing),
    scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

/* Disabled is flat (directive 5): no recess, no lift, no face. */
.slider[aria-disabled='true'] .track {
  background-color: var(--sc-color-slider-track-disabled);
  box-shadow: none;
}
.slider[aria-disabled='true'] .fill {
  background-color: var(--sc-color-slider-fill-disabled);
}
.slider[aria-disabled='true'] .thumb {
  background-image: none;
  background-color: var(--sc-color-slider-fill-disabled);
  box-shadow: none;
}
.slider[aria-disabled='true'] .thumb::after {
  background-image: none;
}

/* Forced colors (Windows high contrast): the recess, the lift and both
   gradients drop. The track keeps an edge, the fill is the system
   highlight and the thumb a solid system-ink disc. */
@media (forced-colors: active) {
  .track {
    box-sizing: border-box;
    border: var(--sc-border-width-default) solid CanvasText;
  }
  .fill {
    background-color: Highlight;
  }
  .thumb,
  .thumb::after {
    background-image: none;
    background-color: ButtonText;
  }
  .slider[aria-disabled='true'] .track {
    border-color: GrayText;
  }
  .slider[aria-disabled='true'] .fill,
  .slider[aria-disabled='true'] .thumb,
  .slider[aria-disabled='true'] .thumb::after {
    background-color: GrayText;
  }
}

@media (prefers-reduced-motion: reduce) {
  .track,
  .fill,
  .thumb,
  .track.moving .fill,
  .track.moving .thumb { transition: none; }
  .track.dragging .thumb { scale: none; }
}
`,Mm=`/* tokens:
 *   --sc-space-component-gap-input            · label ↔ description ↔ field ↔ helper (4)
 *   --sc-space-component-padding-inline-input · 16 inline, inside the field box
 *   --sc-space-component-padding-block-input  · 12 block, inside the field box
 *   --sc-space-component-gap-input-inline     · 16 between prefix, icon, value, suffix, clear, trailing
 *   --sc-radius-field                         · 8 field corner (role token, = radius.default; Levi)
 *   --sc-size-input-icon                      · 20 leading / trailing icon (Phosphor, bold)
 *   --sc-size-input-clear / -clear-target     · 16 clear mark (Phosphor X, bold) in a 32 button
 *   --sc-color-input-well / -well-hover / -well-focus / -well-disabled · field fill (white 46% light, white 15% dark)
 *   --sc-shadow-input-well                    · recess of the field (shipped zero alpha: the reference is flat)
 *   --sc-color-input-adornment                · icons, suffix, clear (= text.secondary)
 *   --sc-color-input-divider                  · rule after a prefix segment
 *   --sc-font-text-body-default-*             · 16 value, prefix, suffix
 *   --sc-font-text-label-ui-*                 · 12 label (form title)
 *   --sc-font-text-caption-*                  · 13 description, helper, error
 *   --sc-color-text-primary                   · value ink
 *   --sc-color-text-secondary                 · label, description, helper
 *   --sc-color-text-disabled                  · placeholder, disabled ink
 *   --sc-color-status-error                   · error edge + error text
 *   --sc-color-border-focus, --sc-border-width-focus, --sc-border-focus-offset · focus ring
 *   --sc-border-width-default                 · error edge, prefix rule
 *   --sc-motion-hover-duration / -easing      · fill and clear-ink transitions
 *
 * Levi's filled-field reference (2026-10-07): a tinted box with no rule and
 * no frame, a leading icon, a clear button and trailing slots. One change:
 * the label stays above the field, left-aligned, with optional subcopy
 * (description) between it and the field. Focus is the system focus ring on
 * the box; an error draws a hairline edge in the status colour.
 */

.field {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--sc-space-component-gap-input);
  width: 100%;
  text-align: start;
}

.label {
  font-family: var(--sc-font-text-label-ui-family);
  font-size: var(--sc-font-text-label-ui-size);
  font-weight: var(--sc-font-text-label-ui-weight);
  line-height: var(--sc-font-text-label-ui-line-height);
  letter-spacing: var(--sc-font-text-label-ui-letter-spacing);
  color: var(--sc-color-text-secondary);
}

.description,
.helper {
  font-family: var(--sc-font-text-caption-family);
  font-size: var(--sc-font-text-caption-size);
  font-weight: var(--sc-font-text-caption-weight);
  line-height: var(--sc-font-text-caption-line-height);
  letter-spacing: var(--sc-font-text-caption-letter-spacing);
  color: var(--sc-color-text-secondary);
}

/* The field box carries the fill, the corner and the slots. */
.box {
  display: flex;
  align-items: center;
  gap: var(--sc-space-component-gap-input-inline);
  padding-inline: var(--sc-space-component-padding-inline-input);
  padding-block: var(--sc-space-component-padding-block-input);
  border-radius: var(--sc-radius-field);
  background-color: var(--sc-color-input-well);
  box-shadow: var(--sc-shadow-input-well);
  color: var(--sc-color-input-adornment);
  cursor: text;
  transition: background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}

.input {
  flex: 1;
  min-width: 0;
  padding: 0;
  border: none;
  background: none;
  color: var(--sc-color-text-primary);
  font-family: var(--sc-font-text-body-default-family);
  font-size: var(--sc-font-text-body-default-size);
  font-weight: var(--sc-font-text-body-default-weight);
  line-height: var(--sc-font-text-body-default-line-height);
  letter-spacing: var(--sc-font-text-body-default-letter-spacing);
}

.input:focus {
  outline: none;
}

.input::placeholder {
  color: var(--sc-color-text-disabled);
}

.icon,
.trailing {
  display: inline-flex;
  flex: none;
  font-size: var(--sc-size-input-icon);
  line-height: 0;
}

.prefix,
.suffix {
  flex: none;
  font-family: var(--sc-font-text-body-default-family);
  font-size: var(--sc-font-text-body-default-size);
  line-height: var(--sc-font-text-body-default-line-height);
  letter-spacing: var(--sc-font-text-body-default-letter-spacing);
}

/* A prefix segment (currency, country code) is set off by a full-height
   rule: it reaches the box edges through the block padding. */
.prefix {
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-sm);
  align-self: stretch;
  margin-block: calc(-1 * var(--sc-space-component-padding-block-input));
  padding-inline-end: var(--sc-space-component-gap-input-inline);
  border-inline-end: var(--sc-border-width-default) solid var(--sc-color-input-divider);
  color: var(--sc-color-text-primary);
}

/* Clear · a 16px mark with a 32px button around it; the negative margin
   keeps the mark on the inline padding line. */
.clear {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  inline-size: var(--sc-size-input-clear-target);
  block-size: var(--sc-size-input-clear-target);
  margin-block: calc(-1 * var(--sc-space-component-gap-sm));
  margin-inline: calc(-1 * var(--sc-space-component-gap-md));
  padding: 0;
  border: none;
  border-radius: var(--sc-radius-pill);
  background: none;
  color: var(--sc-color-input-adornment);
  font-size: var(--sc-size-input-clear);
  line-height: 0;
  cursor: pointer;
  transition: color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}

.clear:hover {
  color: var(--sc-color-text-primary);
}

.clear:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: calc(-1 * var(--sc-border-width-focus));
}

/* Hover */
.box:hover {
  background-color: var(--sc-color-input-well-hover);
}

/* Focus — the system focus ring on the box. */
.box:has(.input:focus) {
  background-color: var(--sc-color-input-well-focus);
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

.helperError {
  color: var(--sc-color-status-error);
}

/* --- Error state -------------------------------------------------- */

.errored .box {
  outline: var(--sc-border-width-default) solid var(--sc-color-status-error);
  outline-offset: calc(-1 * var(--sc-border-width-default));
}

.errored .box:has(.input:focus) {
  outline: var(--sc-border-width-focus) solid var(--sc-color-status-error);
  outline-offset: var(--sc-border-focus-offset);
}

/* --- Disabled state -----------------------------------------------
   Disabled is flat (directive 5): no recess; ink and icons go disabled. */

.disabled .label,
.disabled .description {
  color: var(--sc-color-text-disabled);
}

.disabled .box {
  background-color: var(--sc-color-input-well-disabled);
  box-shadow: none;
  color: var(--sc-color-text-disabled);
  cursor: not-allowed;
}

.input:disabled {
  color: var(--sc-color-text-disabled);
  cursor: not-allowed;
}

.disabled .prefix {
  color: var(--sc-color-text-disabled);
}

/* Forced colors (Windows high contrast): the fill and the recess drop. The
   box keeps a full edge; focus is a Highlight outline; disabled is
   GrayText. */
@media (forced-colors: active) {
  .box {
    border: var(--sc-border-width-default) solid CanvasText;
  }
  .box:has(.input:focus) {
    outline-color: Highlight;
  }
  .disabled .box {
    border-color: GrayText;
  }
}

@media (prefers-reduced-motion: reduce) {
  .box,
  .clear { transition: none; }
}
`,Nm=`/* tokens:
 *   --sc-space-component-padding-card        · inner padding (role token, = padding.lg 24)
 *   --sc-radius-card                         · corner (role token, = radius.surface 8)
 *   --sc-color-card-flat / -flat-hover       · flat ground (surface.floating) / interactive hover
 *   --sc-color-card-glass-{subtle,regular,heavy} · glass tint over the refracted backdrop
 *   --sc-color-card-glass-hover              · interactive glass hover veil
 *   --sc-shadow-card-glass-{level}           · glass rim, lit from the top left (Figma light -45deg)
 *   --sc-size-card-glass-{level}-frost       · backdrop blur radius (Figma frost; CSS takes half)
 *   --sc-size-card-glass-{level}-saturation  · backdrop saturation in percent (100 = none)
 *   --sc-shadow-card-glass-text              · text halo on glass (zero offset)
 *   --sc-size-card-glass-{level}-refraction / -depth / -splay · read by glass.js (Figma units)
 *   --sc-motion-card-press-scale             · press scale (shipped 1: no press)
 *   --sc-motion-press-duration / -easing     · press timing (shared press pair)
 *   --sc-color-text-primary                  · text
 *   --sc-color-border-focus / -width-focus / -focus-offset · focus ring
 *   --sc-motion-hover-duration / -easing     · ground transition
 *
 * Two styles (Levi, 2026-10-08). Flat: a floating surface with no border and
 * no shadow. Glass: frost, tint and a lit rim here; the refraction filter is
 * built per card by glass.js and arrives as --glass-refract (Chromium only).
 * Shadow and filter changes snap: cards repeat in grids.
 */

.card {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: var(--sc-space-component-padding-card);
  border-radius: var(--sc-radius-card);
  color: var(--sc-color-text-primary);
  transition:
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    transform var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

.defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
}

/* ── flat ── */
.flat { background-color: var(--sc-color-card-flat); }
.flat.interactive:hover:not(:disabled) { background-color: var(--sc-color-card-flat-hover); }

/* ── glass ── */
.subtle {
  --glass-tint: var(--sc-color-card-glass-subtle);
  --glass-rim: var(--sc-shadow-card-glass-subtle);
  --glass-frost: var(--sc-size-card-glass-subtle-frost);
  --glass-refraction: var(--sc-size-card-glass-subtle-refraction);
  --glass-depth: var(--sc-size-card-glass-subtle-depth);
  --glass-splay: var(--sc-size-card-glass-subtle-splay);
  --glass-saturation: var(--sc-size-card-glass-subtle-saturation);
}
.regular {
  --glass-tint: var(--sc-color-card-glass-regular);
  --glass-rim: var(--sc-shadow-card-glass-regular);
  --glass-frost: var(--sc-size-card-glass-regular-frost);
  --glass-refraction: var(--sc-size-card-glass-regular-refraction);
  --glass-depth: var(--sc-size-card-glass-regular-depth);
  --glass-splay: var(--sc-size-card-glass-regular-splay);
  --glass-saturation: var(--sc-size-card-glass-regular-saturation);
}
.heavy {
  --glass-tint: var(--sc-color-card-glass-heavy);
  --glass-rim: var(--sc-shadow-card-glass-heavy);
  --glass-frost: var(--sc-size-card-glass-heavy-frost);
  --glass-refraction: var(--sc-size-card-glass-heavy-refraction);
  --glass-depth: var(--sc-size-card-glass-heavy-depth);
  --glass-splay: var(--sc-size-card-glass-heavy-splay);
  --glass-saturation: var(--sc-size-card-glass-heavy-saturation);
}
.glass {
  background-color: var(--glass-tint);
  box-shadow: var(--glass-rim);
  text-shadow: var(--sc-shadow-card-glass-text);
  /* Figma frost is a blur radius; CSS blur() takes the standard deviation, half of it.
   * Saturation is in percent (100 = none). */
  -webkit-backdrop-filter: blur(calc(var(--glass-frost) / 2)) saturate(calc(var(--glass-saturation) / 100));
  backdrop-filter: var(--glass-refract, ) blur(calc(var(--glass-frost) / 2)) saturate(calc(var(--glass-saturation) / 100));
}
.glass.interactive:hover:not(:disabled) {
  background-image: linear-gradient(135deg, var(--sc-color-card-glass-hover), var(--sc-color-card-glass-hover));
}

/* ── interactive ── */
.interactive {
  cursor: pointer;
  font: inherit;
}
.interactive:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}
.interactive:active:not(:disabled) {
  transform: scale(var(--sc-motion-card-press-scale));
}
/* Disabled is flat (directive 5): the glass loses its rim and refraction, keeps the frost. */
.interactive:disabled {
  cursor: not-allowed;
}
.glass.interactive:disabled {
  box-shadow: none;
  backdrop-filter: blur(calc(var(--glass-frost) / 2)) saturate(calc(var(--glass-saturation) / 100));
}

@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
  .interactive:active:not(:disabled) { transform: none; }
}

/* Opaque fallbacks: glass becomes the flat card when transparency is turned
 * off, when more contrast is asked for, and on an engine with no backdrop-filter
 * (a bare tint over unknown content is not readable). */
@media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
  .glass {
    background-color: var(--sc-color-card-flat);
    background-image: none;
    box-shadow: none;
    text-shadow: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass {
    background-color: var(--sc-color-card-flat);
    box-shadow: none;
    text-shadow: none;
  }
}

/* Forced colors drop every ground, rim and filter: an inset edge keeps each card. */
@media (forced-colors: active) {
  .card {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  .interactive { outline-color: ButtonBorder; }
  .interactive:disabled { outline-color: GrayText; }
  .interactive:focus-visible {
    outline: var(--sc-border-width-focus) solid Highlight;
    outline-offset: var(--sc-border-focus-offset);
  }
}
`,Am="_app_drnf6_6",Fm="_bar_drnf6_18",Pm="_brand_drnf6_27",Rm="_meta_drnf6_34",Tm="_readout_drnf6_35",$m="_values_drnf6_36",Hm="_spacer_drnf6_42",Om="_stages_drnf6_46",Dm="_stageWrap_drnf6_54",Vm="_activeStage_drnf6_61",Im="_stageSelect_drnf6_65",Zm="_stageLabel_drnf6_75",Bm="_stage_drnf6_46",Um="_panel_drnf6_94",Wm="_group_drnf6_103",Km="_prop_drnf6_121",Qm="_editor_drnf6_122",Gm="_token_drnf6_132",qm="_changed_drnf6_140",Ym="_tokenHead_drnf6_144",Jm="_tokenName_drnf6_150",Xm="_num_drnf6_162",eg="_mini_drnf6_166",tg="_curve_drnf6_173",ng="_sounds_drnf6_187",rg="_sound_drnf6_187",og="_shippedSound_drnf6_210",sg="_reset_drnf6_214",ag="_notes_drnf6_267",lg="_tabs_drnf6_279",ig="_tab_drnf6_279",cg="_pin_drnf6_308",ug="_pick_drnf6_313",dg="_propBlock_drnf6_320",pg="_easing_drnf6_321",fg="_springRows_drnf6_322",hg="_propLabel_drnf6_328",mg="_tokenActions_drnf6_332",gg="_motionTiles_drnf6_347",vg="_motionTile_drnf6_347",xg="_layers_drnf6_407",yg="_layer_drnf6_407",wg="_layerHead_drnf6_420",bg="_layerGrid_drnf6_425",kg="_scope_drnf6_430",_g="_steps_drnf6_439",Lg="_step_drnf6_439",Sg="_stepRole_drnf6_473",T={app:Am,bar:Fm,brand:Pm,meta:Rm,readout:Tm,values:$m,spacer:Hm,stages:Om,stageWrap:Dm,activeStage:Vm,stageSelect:Im,stageLabel:Zm,stage:Bm,panel:Um,group:Wm,prop:Km,editor:Qm,token:Gm,changed:qm,tokenHead:Ym,tokenName:Jm,num:Xm,mini:eg,curve:tg,sounds:ng,sound:rg,shippedSound:og,reset:sg,notes:ag,tabs:lg,tab:ig,pin:cg,pick:ug,propBlock:dg,easing:pg,springRows:fg,propLabel:hg,tokenActions:mg,motionTiles:gg,motionTile:vg,layers:xg,layer:yg,layerHead:wg,layerGrid:bg,scope:kg,steps:_g,step:Lg,stepRole:Sg},Qt=["day","week","month"],vo=["work","studio","journal"],Mt=(s,{press:i=!0}={})=>{const l=`--sc-motion-${s}`;return{jsTokens:[`${l}-stretch`,`${l}-squash`,...i?[`${l}-press-lean`,`${l}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${l}-stretch`]:"0.45",[`${l}-squash`]:"0",...i?{[`${l}-press-lean`]:"0.83",[`${l}-press-lean-duration`]:"150ms"}:{}},springs:{[`${l}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},ql={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},dd=s=>({light:s(ql.light),dark:s(ql.dark)}),pd={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}},fd={none:void 0,search:K0,mail:U0,location:Q0},hd={none:void 0,eye:W0,copy:B0,calendar:V0,clock:Z0,caret:I0},Vl={flat:{variant:"flat"},"glass subtle":{variant:"glass",level:"subtle"},"glass regular":{variant:"glass",level:"regular"},"glass heavy":{variant:"glass",level:"heavy"}},Il={position:"absolute",inset:0,overflow:"hidden",borderRadius:"var(--sc-radius-card)"},md={"page (follows theme)":f.jsxs("div",{"aria-hidden":"true",style:{...Il,background:"var(--sc-color-surface-page)"},children:[f.jsx("div",{style:{position:"absolute",inset:"0 50% 0 0",background:"var(--sc-color-surface-sunk)"}}),f.jsx("div",{style:{position:"absolute",inset:"30% 0 30% 25%",background:"var(--sc-color-surface-floating)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),"type and colour":f.jsxs("div",{"aria-hidden":"true",style:Il,children:[f.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 24px, var(--sc-color-atmosphere-river) 24px 48px, var(--sc-color-atmosphere-lapis) 48px 72px)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),type:f.jsx("div",{"aria-hidden":"true",style:{...Il,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-title-card)",color:"var(--sc-color-text-primary)",wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"}),none:null};let Zl=!1;function Eg({p:s,ctx:i}){const l=d.useRef(null);return d.useEffect(()=>{var E;const c=[...((E=l.current)==null?void 0:E.children)||[]],p=i.slow||1,h=s.reduced,g=h==="opacity only"?{opacity:s.opacityFrom,transform:"none",filter:"none"}:{opacity:s.opacityFrom,transform:`translateY(${s.distance}px) scale(${s.scaleFrom}) rotate(${s.rotateFrom}deg)`,filter:`blur(${s.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},w=c.map((z,L)=>z.animate([g,v],{duration:h==="none"?0:s.duration*p,delay:h==="none"?0:(s.delay+L*s.stagger)*p,easing:s.easing,fill:"both"}));return()=>w.forEach(z=>z.cancel())},[s,i.replay,i.slow]),f.jsx("div",{className:T.motionTiles,ref:l,children:Array.from({length:s.count},(c,p)=>f.jsx("span",{className:T.motionTile},p))})}const Bl=s=>s.reduced==="none"?0:s.delay+s.stagger*(s.count-1)+s.duration,_r={Switch:{css:[_m],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(s,i)=>i("checked",!s.checked),render:(s,i,l)=>f.jsx(E0,{checked:s.checked,disabled:s.disabled,glyphs:s.glyphs,label:s.label,sound:!1,onChange:c=>{i("checked",c.target.checked),l()}})},Stepper:{css:[Lm,cd],jsTokens:[...Mt("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...Mt("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:Mt("stepper",{press:!1}).seed.springs,scoped:dd(s=>({"--sc-shadow-stepper-track":s.recess,"--sc-color-stepper-key":s.keyFill,"--sc-color-stepper-key-shade":s.keyShade,"--sc-shadow-stepper-key":s.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(s,i)=>i("value",s.value+s.step>s.max?s.min:s.value+s.step),render:(s,i,l)=>f.jsx(c1,{value:s.value,min:s.min,max:s.max,step:s.step,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{i("value",c),l()}})},SegmentedControl:{css:[Sm],...Mt("segmented-control"),seed:{...Mt("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Qt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(s,i)=>i("value",Qt[(Qt.indexOf(s.value)+1)%Qt.length]),render:(s,i,l)=>f.jsx(y1,{label:"Range",value:s.value,size:s.size,disabled:s.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==s.value&&l(),i("value",c)}})},Tooltip:{css:[zm],...Mt("tooltip",{press:!1}),shippedSound:null,trigger:"ships silent",props:[{name:"open",type:"boolean",default:!0},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(s,i)=>i("open",!s.open),render:s=>f.jsx("span",{style:{display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:f.jsx(X1,{content:s.content,multiline:s.multiline,open:s.open,children:f.jsx("span",{style:{font:"inherit"},children:"Hover or press Play"})})})},NavBar:{css:[Cm,ud],...Mt("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:vo,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(s,i)=>i("current",vo[(vo.indexOf(s.current)+1)%vo.length]),render:(s,i)=>f.jsx("div",{onClickCapture:l=>{const c=l.target.closest("a");c&&(l.preventDefault(),i("current",c.textContent.trim().toLowerCase()))},children:f.jsx(Oh,{brand:f.jsx("span",{children:"Shokunin"}),underline:s.underline,links:vo.map(l=>({href:`#${l}`,label:l[0].toUpperCase()+l.slice(1),current:l===s.current}))})})},PlusUnderline:{css:[ud],...Mt("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Qt,default:"day"}],play:(s,i)=>i("active",Qt[(Qt.indexOf(s.active)+1)%Qt.length]),render:(s,i)=>f.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Qt.map(l=>f.jsxs("button",{type:"button",role:"tab","aria-selected":l===s.active,onClick:()=>i("active",l),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[l[0].toUpperCase()+l.slice(1),f.jsx(Hd,{active:l===s.active})]},l))})},Slider:{css:[jm],jsTokens:Mt("slider",{press:!1}).jsTokens,seed:{overrides:{...Mt("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:Mt("slider",{press:!1}).seed.springs,scoped:dd(s=>{const i=s===ql.light?pd.light:pd.dark;return{"--sc-shadow-slider-track":s.recess,"--sc-color-slider-thumb-rim-top":i.rimTop,"--sc-color-slider-thumb-rim-bottom":i.rimBottom,"--sc-color-slider-thumb-face-top":i.faceTop,"--sc-color-slider-thumb-face-bottom":i.faceBottom,"--sc-shadow-slider-thumb":s.key,"--sc-shadow-slider-thumb-pressed":s.keyPressed}})},shippedSound:"drams-009-01.wav",trigger:"a keyboard step that changes the value; a drag is silent",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(s,i)=>i("value",s.value>=.75?.25:.75),render:(s,i,l)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Zl=!0},onKeyUpCapture:()=>{Zl=!1},children:f.jsx(Wh,{value:s.value,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{const p=Math.round(c*100)/100;Zl&&p!==s.value&&l(),i("value",p)}})})},Input:{css:[Mm,cd],shippedSound:null,trigger:"ships silent",props:[{name:"label",type:"text",default:"Email address"},{name:"description",type:"text",default:""},{name:"placeholder",type:"text",default:"you@studio.com"},{name:"value",type:"text",default:"levi@levibahn.com"},{name:"icon",type:"enum",options:Object.keys(fd),default:"mail"},{name:"prefix",type:"text",default:""},{name:"suffix",type:"text",default:""},{name:"trailing",type:"enum",options:Object.keys(hd),default:"none"},{name:"clearable",type:"boolean",default:!0},{name:"helper",type:"text",default:""},{name:"error",type:"text",default:""},{name:"disabled",type:"boolean",default:!1}],play:null,render:(s,i)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 4)"},children:f.jsx(lm,{label:s.label,description:s.description||void 0,placeholder:s.placeholder,value:s.value,icon:fd[s.icon],prefix:s.prefix||void 0,suffix:s.suffix||void 0,trailing:hd[s.trailing],clearable:s.clearable,onClear:()=>i("value",""),helper:s.helper||void 0,error:s.error||void 0,disabled:s.disabled,onChange:l=>i("value",l.target.value)})})},Card:{css:[Nm],jsTokens:["subtle","regular","heavy"].flatMap(s=>["refraction","depth","splay"].map(i=>`--sc-size-card-glass-${s}-${i}`)),shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Vl)],default:"all"},{name:"backdrop",type:"enum",options:Object.keys(md),default:"page (follows theme)"},{name:"interactive",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"title",type:"text",default:"Studio journal"},{name:"body",type:"text",default:"Notes from the bench."}],play:null,render:s=>{const i=s.show==="all"?Object.keys(Vl):[s.show];return f.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-sm)"},children:[md[s.backdrop],f.jsx("div",{style:{position:"relative",display:"grid",gridTemplateColumns:`repeat(${Math.min(i.length,2)}, calc(var(--sc-space-layout-stack-xl) * 2.5))`,gap:"var(--sc-space-layout-stack-sm)"},children:i.map(l=>f.jsxs(km,{...Vl[l],interactive:s.interactive,disabled:s.interactive?s.disabled:void 0,onClick:()=>{},children:[f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-label-ui)",color:"var(--sc-color-text-secondary)"},children:l}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-default)"},children:s.title}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-dense)",color:"var(--sc-color-text-secondary)"},children:s.body})]},l))})]})}},Button:{css:[Em],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(s,i,l)=>f.jsx(K1,{variant:s.variant,size:s.size,disabled:s.disabled,loading:s.loading,arrow:s.arrow,sound:!1,onClick:()=>l(),children:s.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(s,i,l,c)=>f.jsx(Eg,{p:s,ctx:c})}},Od=s=>{var i;return((i=s==null?void 0:s.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:i[1].split(",").map(Number))||null};function zg(s){var c;const i=Od(s);if(i){const p=[];for(let h=0;h<=40;h+=1){const g=h/40,v=3*(1-g)**2*g*i[0]+3*(1-g)*g**2*i[2]+g**3,w=3*(1-g)**2*g*i[1]+3*(1-g)*g**2*i[3]+g**3;p.push([v,w])}return p}const l=(c=s==null?void 0:s.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return l?l.map((p,h)=>[h/(l.length-1),p]):[[0,0],[1,1]]}function Cg(s){const i=zg(s),l=i.map(g=>g[1]),c=Math.min(0,...l),h=Math.max(1,...l)-c||1;return i.map(([g,v],w)=>`${w?"L":"M"}${g.toFixed(3)} ${(1-(v-c)/h).toFixed(3)}`).join(" ")}const Nt=(s,i=2)=>+(+s).toFixed(i),Ul=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function Dd(s){Ul.fillStyle="#000",Ul.fillStyle=s;const i=Ul.fillStyle;if(i.startsWith("#"))return{hex:i,a:1};const l=i.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return l?{hex:"#"+[l[1],l[2],l[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:l[4]!==void 0?+l[4]:1}:{hex:"#000000",a:1}}function Bs(s,i){if(i>=1)return s.toUpperCase();const l=parseInt(s.slice(1),16);return`rgb(${l>>16&255} ${l>>8&255} ${l&255} / ${+i.toFixed(3)})`}const jg=s=>String(s).endsWith("ms")?parseFloat(s):parseFloat(s)*1e3;function Vd({label:s,value:i,spring:l,presets:c,asRef:p,onChange:h}){const[g,v]=d.useState(l?"spring":"bezier"),w=Od(i)||[.25,.1,.25,1],E=l||{stiffness:260,damping:22,mass:1},z=j=>{const N=Is(j);h(N.easing,j,N.settleMs)},L=l?Is(l):null;return f.jsxs("div",{className:T.easing,children:[f.jsxs("div",{className:T.editor,children:[f.jsx("svg",{className:T.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:Cg(i)})}),f.jsxs("select",{"aria-label":`${s} mode`,value:g,onChange:j=>{v(j.target.value),j.target.value==="spring"?z(E):h(`cubic-bezier(${w.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&f.jsxs("select",{"aria-label":`${s} preset`,value:"",onChange:j=>{const N=c.find(V=>V.name===j.target.value);N&&(v("bezier"),h(p?`var(${N.name})`:N.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),c.map(j=>f.jsx("option",{value:j.name,children:j.name.replace("--sc-p-motion-easing-","")},j.name))]})]}),g==="bezier"?f.jsx("div",{className:T.editor,children:w.map((j,N)=>f.jsx("input",{type:"number","aria-label":`${s} bezier point ${N+1}`,className:T.num,step:"0.01",value:j,onChange:V=>{const P=[...w];P[N]=+V.target.value,h(`cubic-bezier(${P.join(", ")})`,null,null)}},N))}):f.jsxs("div",{className:T.springRows,children:[(()=>{const j=2*Math.PI*Math.sqrt(E.mass/E.stiffness),N=1-E.damping*j/(4*Math.PI*E.mass),V=(P,U)=>z({...E,stiffness:+((2*Math.PI/P)**2*E.mass).toFixed(1),damping:+(4*Math.PI*(1-U)*E.mass/P).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:T.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${s} spring duration`,min:50,max:2e3,step:10,value:Math.round(j*1e3),onChange:P=>V(+P.target.value/1e3,N)}),f.jsxs("span",{className:T.readout,children:[Math.round(j*1e3),"ms"]})]}),f.jsxs("label",{className:T.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${s} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+N.toFixed(2)),onChange:P=>V(j,+P.target.value)}),f.jsx("span",{className:T.readout,children:N.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([j,N,V,P])=>f.jsxs("label",{className:T.mini,children:[j,f.jsx("input",{type:"range",min:N,max:V,step:P,value:E[j],onChange:U=>z({...E,[j]:+U.target.value})}),f.jsx("span",{className:T.readout,children:E[j]})]},j)),L&&f.jsxs("span",{className:T.readout,children:["settles ",L.settleMs,"ms · overshoot ",Math.round(L.overshoot*100),"%"]})]})]})}function Mg(s){const i=[];let l=0,c="";for(const p of s||"")p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c.trim()),c=""):c+=p;return c.trim()&&i.push(c.trim()),i.filter(p=>p&&p!=="none").map(p=>{var j;const h=/\binset\b/.test(p),g=((j=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:j[0])||"rgb(0 0 0 / 0.2)",v=p.replace(g,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(N=>parseFloat(N)||0),[w=0,E=0,z=0,L=0]=v;return{inset:h,x:w,y:E,blur:z,spread:L,color:g}})}const Ng=s=>s.map(i=>`${i.inset?"inset ":""}${Nt(i.x)}px ${Nt(i.y)}px ${Nt(i.blur)}px ${Nt(i.spread)}px ${i.color}`).join(", ");function Ag({name:s,value:i,onSet:l}){const c=Mg(i),p=(h,g)=>l(Ng(c.map((v,w)=>w===h?{...v,...g}:v)));return f.jsx("div",{className:T.layers,children:c.map((h,g)=>{const v=Dd(h.color),w=h.inset?"inner edge":(h.x<0||h.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:T.layer,children:[f.jsxs("span",{className:T.layerHead,children:["layer ",g+1," · ",w]}),f.jsx("div",{className:T.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([E,z,L,j])=>f.jsxs("label",{className:T.mini,children:[E,f.jsx("input",{type:"number",className:T.num,"aria-label":`${s} layer ${g+1} ${E}`,min:z,max:L,step:j,value:Nt(h[E]),onChange:N=>p(g,{[E]:+N.target.value})})]},E))}),f.jsxs("div",{className:T.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} layer ${g+1} colour`,value:v.hex,onChange:E=>p(g,{color:Bs(E.target.value,v.a)})}),f.jsxs("label",{className:T.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${s} layer ${g+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:E=>p(g,{color:Bs(v.hex,+E.target.value)})}),f.jsx("span",{className:T.readout,children:Nt(v.a)})]})]})]},g)})})}const Fg=[11,12,13,14,16,20].map((s,i)=>[s,["chrome","ui","caption","dense","body","lead"][i],`--sc-p-font-size-${s}`]),Pg=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],Rg=s=>/^--sc-font-.*-size$/.test(s)?Fg:/^--sc-size-.*icon/.test(s)?Pg:null;function Tg({name:s,kind:i,shipped:l,value:c,override:p,scope:h,adj:g,spring:v,pin:w,refs:E,easingPresets:z,onSet:L,onAdj:j,onSpring:N,onReset:V,onPin:P,restOf:U,onCopyRest:Y}){const re=p!==void 0,[ee,q]=d.useState(!!w);let se=null;if(i==="color"){const O=Dd(c);se=f.jsxs("div",{className:T.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} colour`,value:O.hex,onChange:K=>L(Bs(K.target.value,O.a))}),f.jsx("input",{type:"range","aria-label":`${s} alpha`,min:"0",max:"1",step:"0.01",value:O.a,onChange:K=>L(Bs(O.hex,+K.target.value))})]})}else if(i==="length"||i==="number"){const O=parseFloat(c)||0,K=Math.abs(parseFloat(l)||1),he=i==="length"?Math.max(64,K*4):Math.max(2,K*2),ue=i==="length"?"px":"",ie=i==="length"?.5:.005;se=f.jsxs("div",{className:T.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:he,step:ie,value:O,onChange:Z=>L(`${Z.target.value}${ue}`)}),f.jsx("input",{type:"number","aria-label":`${s} value`,className:T.num,step:ie,value:Nt(O,3),onChange:Z=>L(`${Z.target.value}${ue}`)})]});const ce=Rg(s);ce&&(se=f.jsxs(f.Fragment,{children:[se,f.jsx("div",{className:T.steps,role:"group","aria-label":`${s} scale`,children:ce.map(([Z,D,$])=>f.jsxs("button",{type:"button",className:T.step,"aria-pressed":O===Z,onClick:()=>L(`var(${$})`),children:[Z,D&&f.jsx("span",{className:T.stepRole,children:D})]},Z))})]}))}else if(i==="time"){const O=jg(c);se=f.jsxs("div",{className:T.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:"1200",step:"10",value:O,onChange:K=>L(`${K.target.value}ms`)}),f.jsxs("span",{className:T.readout,children:[Math.round(O),"ms"]})]})}else i==="easing"?se=f.jsx(Vd,{label:s,value:c,spring:v,presets:z,asRef:!0,onChange:(O,K,he)=>{L(O),N(K,he)}}):i==="shadow"?se=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:T.editor,children:[f.jsxs("label",{className:T.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(g==null?void 0:g.scale)??1,onChange:O=>j({...g,scale:+O.target.value})})]}),f.jsxs("label",{className:T.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(g==null?void 0:g.strength)??1,onChange:O=>j({...g,strength:+O.target.value})})]})]}),f.jsx(Ag,{name:s,value:c,onSet:L})]}):se=f.jsx("input",{type:"text","aria-label":s,value:c,onChange:O=>L(O.target.value)});return f.jsxs("div",{className:`${T.token} ${re?T.changed:""}`,children:[f.jsxs("div",{className:T.tokenHead,children:[f.jsxs("code",{className:T.tokenName,children:[s.replace("--sc-",""),re&&h&&f.jsx("span",{className:T.scope,children:h==="all"?"both modes":`${h} only`})]}),f.jsxs("span",{className:T.tokenActions,children:[U&&f.jsx("button",{type:"button",className:T.reset,title:`Set to this concept's ${U.replace("--sc-","")} value`,onClick:Y,children:"copy rest"}),f.jsx("button",{type:"button",className:T.reset,"aria-pressed":ee,onClick:()=>q(O=>!O),children:"note"}),re&&f.jsx("button",{type:"button",className:T.reset,onClick:V,"aria-label":`Reset ${s}`,children:"reset"})]})]}),se,(E==null?void 0:E.length)>0&&i!=="easing"&&f.jsxs("select",{"aria-label":`${s} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:O=>O.target.value&&L(`var(${O.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),E.map(O=>f.jsx("option",{value:O,children:O.replace("--sc-p-","")},O))]}),ee&&f.jsx("input",{type:"text",className:T.pin,"aria-label":`Note on ${s}`,placeholder:"Note on this value…",value:w||"",onChange:O=>P(O.target.value)}),f.jsxs("div",{className:T.values,children:[f.jsxs("span",{title:l,children:["shipped ",l]}),re&&f.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function $g({def:s,value:i,spring:l,easingPresets:c,onChange:p,onSpring:h}){const g=`prop-${s.name}`;let v;if(s.type==="boolean")v=f.jsx("input",{id:g,type:"checkbox",checked:!!i,onChange:w=>p(w.target.checked)});else if(s.type==="enum")v=f.jsx("select",{id:g,value:i,onChange:w=>p(w.target.value),children:s.options.map(w=>f.jsx("option",{children:w},w))});else if(s.type==="number")v=f.jsx("input",{id:g,type:"number",className:T.num,min:s.min,max:s.max,value:i,onChange:w=>p(+w.target.value)});else if(s.type==="range")v=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:g,type:"range",min:s.min,max:s.max,step:s.step,value:i,onChange:w=>p(+w.target.value)}),f.jsxs("span",{className:T.readout,children:[i,s.unit||""]})]});else{if(s.type==="easing")return f.jsxs("div",{className:T.propBlock,children:[f.jsx("span",{className:T.propLabel,children:f.jsx("code",{children:s.name})}),f.jsx(Vd,{label:s.name,value:i,spring:l,presets:c,onChange:(w,E,z)=>h(w,E,z)})]});v=f.jsx("input",{id:g,type:"text",value:i,onChange:w=>p(w.target.value)})}return f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:g,children:f.jsx("code",{children:s.name})}),v]})}const wn=!0,Hg="./sounds/",Og=3,Dg=s=>`sc-tune:v2:${s}`,Vg=["all","light","dark"],Id=s=>/^--sc-(color|shadow)-/.test(s),Ts=(s,i)=>Id(s)?i:"all",Us=()=>({all:{},light:{},dark:{}}),$s=(s,i)=>({...s.overrides.all,...s.overrides[i]}),Wl=["A","B","C","D"],Yl=s=>[...new Set(s)],Vs=Yl(o0.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Ig={color:Vs.filter(s=>s.startsWith("--sc-p-color-")&&!s.endsWith("-rgb")),length:Vs.filter(s=>/^--sc-p-(space|size|radius|border-width)-/.test(s)),time:Vs.filter(s=>s.startsWith("--sc-p-motion-duration-"))},Zg=Vs.filter(s=>s.startsWith("--sc-p-motion-easing-"));function Bg(s){var p;const i=s.join(`
`),l=Yl(((p=i.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(h=>h.slice(4)))||[]),c=Yl(i.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:l.sort(),derived:c}}const gd=s=>{var i;return((i=s.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:i[1])||"other"};function Hs(s){return s?/^(cubic-bezier|ease|linear|steps)/.test(s)?"easing":/^-?[\d.]+m?s$/.test(s)?"time":/px/.test(s)&&/(rgb|#|hsl|color\(|inset)/.test(s)||/(rgb|#|hsl|color\()/.test(s)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(s.trim())?"shadow":CSS.supports("color",s)?"color":/^-?[\d.]+px$/.test(s)?"length":/^-?[\d.]+$/.test(s)?"number":"text":"text"}const Jl=(s,i)=>{if(!s)return{};const l=getComputedStyle(s);return Object.fromEntries(i.map(c=>[c,l.getPropertyValue(c).trim()]))},Ug=(s,i)=>{if(!s)return{};const l=document.createElement("span");l.style.cssText="position:absolute;visibility:hidden;height:0;",s.appendChild(l);const c=Object.fromEntries(i.map(p=>(l.style.width=`var(${p})`,[p,getComputedStyle(l).width])));return l.remove(),c},vd=(s,i)=>{if(!s)return{};const l=document.createElement("div");l.style.display="none";for(const[p,h]of Object.entries(i))l.style.setProperty(p,h);s.appendChild(l);const c=Jl(l,Object.keys(i));return l.remove(),c};function Wg(s,i,l){return s.replace(/(-?[\d.]+)px/g,(c,p)=>`${Nt(p*i)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,h)=>`rgba(${p}, ${Nt(Math.min(1,h*l),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${Nt(Math.min(1,p*l),3)})`)}let bn=null;const xd=new Map;async function Os(s,i,l){if(!s)return;bn=bn||new(window.AudioContext||window.webkitAudioContext),bn.state==="suspended"&&await bn.resume();let c=xd.get(s);if(!c){const g=await(await fetch(Hg+s)).arrayBuffer();c=await bn.decodeAudioData(g),xd.set(s,c)}const p=bn.createBufferSource(),h=bn.createGain();h.gain.value=i,p.buffer=c,p.playbackRate.value=l,p.connect(h).connect(bn.destination),p.start()}const Kg=["rest","hover","focus","active"],Qg={hover:":hover",focus:":focus-visible",active:":active"};function Gg(s){var p;const i=Qg[s];if(!i)return"";const l=[],c=(h,g)=>{for(const v of h){if(v.cssRules&&v.media){c(v.cssRules,E=>g(`@media ${v.media.mediaText}{${E}}`));continue}if(!v.selectorText||!v.selectorText.includes(i))continue;const w=v.selectorText.split(",").map(E=>E.trim()).filter(E=>E.includes(i)).map(E=>`[data-force='${s}'] ${E.split(i).join("")}`).join(", ");l.push(g(`${w}{${v.style.cssText}}`))}};for(const h of document.styleSheets)if(((p=h.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(h.cssRules,g=>g)}catch{}return l.join(`
`)}const ai=s=>Object.fromEntries(s.props.map(i=>[i.name,i.default]));function Zd(s,i){var l,c,p;for(const[h,g]of Object.entries(((l=s.seed)==null?void 0:l.overrides)||{}))Object.values(i.overrides).some(v=>h in v)||(i.overrides.all[h]=g);for(const[h,g]of Object.entries(((c=s.seed)==null?void 0:c.scoped)||{}))for(const[v,w]of Object.entries(g))!(v in i.overrides[h])&&!(v in i.overrides.all)&&(i.overrides[h][v]=w);for(const[h,g]of Object.entries(((p=s.seed)==null?void 0:p.springs)||{})){if(i.springs[h]||Object.values(i.overrides).some(w=>h in w))continue;const v=Is(g);i.springs[h]=g,i.overrides.all[h]=v.easing,i.overrides.all[h.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return i}const Bd=(s,i)=>Zd(s,{id:i,overrides:Us(),shadowAdj:Us(),springs:{},pins:{},notes:"",props:ai(s),sound:{file:s.shippedSound,volume:.7,rate:1}});function qg(s){const i=_r[s];return{component:s,notes:"",active:"A",concepts:[Bd(i,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:i.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function yd(s){var i;try{const l=JSON.parse(localStorage.getItem(Dg(s))||"null");if((l==null?void 0:l.component)===s&&Array.isArray(l.concepts)){for(const c of l.concepts){if(c.props={...ai(_r[s]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=Us();for(const[g,v]of Object.entries(c.overrides))p[Id(g)?"dark":"all"][g]=v;const h=Us();for(const[g,v]of Object.entries(c.shadowAdj||{}))h.dark[g]=v;c.overrides=p,c.shadowAdj=h}if(s==="Button")for(const p of Object.values(c.overrides))for(const h of Object.keys(p)){if(!h.startsWith("--sc-font-text-label-chrome-"))continue;const g=h.replace("label-chrome-","label-button-lg-");g in p||(p[g]=p[h]),delete p[h]}}((i=l.view)==null?void 0:i.ground)==="#E3DFD8"&&(l.view.ground="--sc-color-surface-page");for(const c of l.concepts)Zd(_r[s],c);return l}}catch{}return qg(s)}function Yg(){const s=new URLSearchParams(location.search).get("c"),[i,l]=d.useState(_r[s]?s:"Switch"),[c,p]=d.useState(()=>yd(i)),[h,g]=d.useState(null),[v,w]=d.useState([]),[E,z]=d.useState(!0),[L,j]=d.useState({}),[N,V]=d.useState({}),[P,U]=d.useState({}),[Y,re]=d.useState(0),[ee,q]=d.useState(!1),[se,O]=d.useState(!1),K=d.useRef(null),he=d.useRef({}),ue=d.useRef(null),ie=_r[i],ce=ie.kind==="motion",{tokens:Z,derived:D}=d.useMemo(()=>{const b=Bg(ie.css);return{...b,tokens:[...new Set([...b.tokens,...ie.jsTokens||[]])].sort()}},[ie]),$=c.concepts.find(b=>b.id===c.active)||c.concepts[0],we=d.useMemo(()=>{const b=getComputedStyle(document.documentElement);return Zg.map(M=>({name:M,value:b.getPropertyValue(M).trim()}))},[]);d.useEffect(()=>{fetch("./spec.json").then(b=>b.json()).then(b=>{l(b.component),p(b.state),g({recorded:b.recorded})})},[]),d.useEffect(()=>{},[]);const me=b=>{l(b),p(yd(b)),history.replaceState(null,"",`?c=${b}`)};d.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const pe=c.view.force||"rest";d.useEffect(()=>{let b=document.getElementById("sc-tune-force");b||(b=document.createElement("style"),b.id="sc-tune-force",document.head.appendChild(b)),b.textContent=Gg(pe)},[pe]),d.useLayoutEffect(()=>{var A;j(Jl(K.current,Z));const b=Jl(K.current,Z);he.current[c.view.theme]=b,V({...b,...vd(K.current,$s($,c.view.theme))});const M=(A=ue.current)==null?void 0:A.querySelector("[class]");U(Ug(M?M.closest("label")||M:null,D))},[Z,D,$.overrides,c.view.theme,$.props]),d.useEffect(()=>{},[c,i]);const W=d.useCallback(b=>p(M=>M),[]),oe=d.useCallback((b,M)=>p(A=>({...A,concepts:A.concepts.map(ye=>ye.id===b?M(ye):ye)})),[]),Q=d.useCallback(b=>(M,A)=>oe(b,ye=>({...ye,props:{...ye.props,[M]:A}})),[oe]),k=b=>W(M=>({...M,concepts:M.concepts.map(A=>A.id===M.active?b(A):A)})),F=c.view.theme,fe=(b,M,A)=>{const ye=Ts(M,F),ge={...b,[ye]:{...b[ye]}};return A===void 0?delete ge[ye][M]:ge[ye][M]=A,ge},ve=(b,M)=>k(A=>({...A,overrides:fe(A.overrides,b,M)})),be=b=>k(M=>{const A={...M.springs};return delete A[b],{...M,overrides:fe(M.overrides,b,void 0),shadowAdj:fe(M.shadowAdj,b,void 0),springs:A}}),ke=(b,M,A)=>k(ye=>{const ge={...ye.springs};let Le=ye.overrides;if(M){ge[b]=M;const tt=b.replace(/-easing$/,"-duration");tt!==b&&Z.includes(tt)&&(Le=fe(Le,tt,`${A}ms`))}else delete ge[b];return{...ye,springs:ge,overrides:Le}}),je=(b,M)=>k(A=>({...A,shadowAdj:fe(A.shadowAdj,b,M),overrides:fe(A.overrides,b,Wg(L[b],M.scale??1,M.strength??1))})),Ee=(b,M)=>k(A=>({...A,pins:{...A.pins,[b]:M}})),ze=(b,M)=>k(A=>({...A,sound:{...A.sound,[b]:M}})),De=(b,M)=>p(A=>({...A,view:{...A.view,[b]:M}})),Gt=ie.props.some(b=>b.name==="disabled"),wo=b=>p(M=>({...M,view:{...M.view,force:b==="disabled"?"rest":b},concepts:Gt?M.concepts.map(A=>({...A,props:{...A.props,disabled:b==="disabled"}})):M.concepts})),Ln=b=>W(M=>{const A=Wl.find(Le=>!M.concepts.some(tt=>tt.id===Le));if(!A)return M;const ye=M.concepts.find(Le=>Le.id===M.active),ge=b?{...structuredClone(ye),id:A,notes:""}:Bd(ie,A);return{...M,concepts:[...M.concepts,ge],active:A}}),Sr=b=>W(M=>{if(M.concepts.length<2)return M;const A=M.concepts.filter(ye=>ye.id!==b);return{...M,concepts:A,active:A[0].id,pick:M.pick.id===b?{id:null,reason:M.pick.reason}:M.pick}}),bo=()=>p(b=>{const M=!b.view.blind,A=M?[...b.concepts.map(ye=>ye.id)].sort(()=>Math.random()-.5):null;return{...b,view:{...b.view,blind:M,order:A,compare:M?!0:b.view.compare}}}),Un=d.useCallback(()=>{re(M=>M+1),ie.play&&c.concepts.forEach(M=>ie.play(M.props,Q(M.id)));const b=c.concepts.find(M=>M.id===c.active);b!=null&&b.sound.file&&Os(b.sound.file,b.sound.volume,b.sound.rate)},[ie,c.concepts,c.active,Q]),Wn=ce?Math.max(1200,Bl($.props)*c.view.slow+900):1400*c.view.slow;d.useEffect(()=>{if(!ee)return;const b=setInterval(Un,Wn);return()=>clearInterval(b)},[ee,Un,Wn]);const ko=Z.filter(b=>Hs(L[b])==="time"),Kn=b=>{const M=c.view.ground,A=M.startsWith("--")?{background:`var(${M})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:M,"--sc-color-surface-page":M},ye={zoom:c.view.zoom,...A,...b};if(c.view.slow!==1)for(const ge of ko)ye[ge]=`calc(${b[ge]??L[ge]} * ${c.view.slow})`;return ye};d.useEffect(()=>{window.dispatchEvent(new Event("sc-tokens-change"))},[c.concepts,c.view.theme]);const qt=d.useCallback(()=>{const b=K.current,M=A=>A.id;return{tool:"sc-tune",version:Og,component:i,kind:ie.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(A=>{const ye=vd(b,$s(A,c.view.theme));return{id:M(A),notes:A.notes,props:A.props,sound:{...A.sound,shipped:ie.shippedSound,trigger:ie.trigger},tokens:Vg.flatMap(ge=>Object.keys(A.overrides[ge]).map(Le=>{var So;const tt=ge==="all"?L:he.current[ge]||{},Ot=A.overrides[ge][Le],Lo=ge==="all"||ge===c.view.theme;return{name:Le,mode:ge,category:gd(Le),kind:Hs(tt[Le]||L[Le]),shipped:tt[Le]??null,tuned:Lo?ye[Le]??Ot:Ot,override:Ot,...(So=A.shadowAdj[ge])!=null&&So[Le]?{shadowAdjust:A.shadowAdj[ge][Le]}:{},...A.springs[Le]?{spring:{...A.springs[Le],...wd(A.springs[Le])}}:{}}})),pins:Object.fromEntries(Object.entries(A.pins).filter(([,ge])=>ge)),...ce?{motion:{lastFrameMs:Bl(A.props),...A.springs["prop:easing"]?{spring:{...A.springs["prop:easing"],...wd(A.springs["prop:easing"])}}:{}}}:{}}}),derived:P,tokenCount:Z.length,state:c}},[i,ie,ce,c,L,P,Z]);d.useEffect(()=>{window.scTune={export:qt,component:i}},[qt,i]);const Yt=d.useMemo(()=>{var M;const b={};for(const A of Z)(b[M=gd(A)]||(b[M]=[])).push(A);return b},[Z]),Er=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(b=>c.concepts.find(M=>M.id===b)).filter(Boolean):c.concepts:[$],zr={replay:Y,slow:c.view.slow};v.filter(b=>!E||b.seconds<=1);const Cr=$s($,c.view.theme),_o=Object.keys(Cr).length;return f.jsxs("div",{className:T.app,children:[f.jsxs("header",{className:T.bar,children:[f.jsx("span",{className:T.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:i,disabled:wn,onChange:b=>me(b.target.value),children:Object.keys(_r).map(b=>f.jsx("option",{children:b},b))}),f.jsxs("span",{className:T.meta,children:[ce?"choreography":`${Z.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),h&&f.jsxs("span",{className:T.meta,children:["snapshot · recorded ",h.recorded]}),f.jsx("span",{className:T.spacer}),f.jsx("button",{type:"button",onClick:Un,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":ee,onClick:()=>q(b=>!b),children:ee?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:b=>De("slow",+b.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>De("compare",!c.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:bo,children:c.view.blind?"Reveal":"Blind"}),!wn]}),f.jsx("main",{className:T.stages,children:f.jsxs(r0,{enabled:!1,children:[!c.view.blind&&f.jsxs("section",{className:T.stageWrap,"aria-label":ce?"Default":"Shipped",children:[f.jsx("h2",{className:T.stageLabel,children:ce?"Default":"Shipped"}),f.jsx("div",{className:T.stage,style:Kn({}),ref:K,inert:"","data-force":pe,children:ie.render(ce?ai(ie):$.props,()=>{},()=>{},zr)})]}),c.view.blind&&f.jsx("div",{ref:K,hidden:!0}),Er.map((b,M)=>{const A=c.view.blind?`Concept ${M+1}`:`${b.id}${b.id===c.active?" · editing":""}${c.pick.id===b.id?" · picked":""}`;return f.jsxs("section",{className:`${T.stageWrap} ${b.id===c.active&&!c.view.blind?T.activeStage:""}`,"aria-label":A,children:[f.jsxs("h2",{className:T.stageLabel,children:[c.view.compare&&!c.view.blind?f.jsx("button",{type:"button",className:T.stageSelect,onClick:()=>p(ye=>({...ye,active:b.id})),children:A}):A,ce&&f.jsxs("span",{className:T.readout,children:[" · last frame ",Bl(b.props),"ms"]})]}),f.jsx("div",{className:T.stage,style:Kn($s(b,F)),ref:b.id===c.active?ue:void 0,"data-force":pe,children:ie.render(b.props,Q(b.id),()=>Os(b.sound.file,b.sound.volume,b.sound.rate),zr)})]},b.id)})]})}),f.jsxs("aside",{className:T.panel,children:[f.jsxs("fieldset",{className:T.group,disabled:wn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:T.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:b=>p(M=>({...M,notes:b.target.value}))})]}),f.jsxs("fieldset",{className:T.group,disabled:wn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:T.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(b=>f.jsx("button",{type:"button",role:"tab","aria-selected":b.id===c.active,className:T.tab,onClick:()=>p(M=>({...M,active:b.id})),children:b.id},b.id)),f.jsx("button",{type:"button",className:T.tab,disabled:c.concepts.length>=Wl.length,onClick:()=>Ln(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:T.tab,disabled:c.concepts.length>=Wl.length,onClick:()=>Ln(!1),children:"new"}),f.jsxs("button",{type:"button",className:T.tab,disabled:c.concepts.length<2,onClick:()=>Sr($.id),children:["remove ",$.id]})]}),f.jsx("textarea",{className:T.notes,"aria-label":`Notes on concept ${$.id}`,placeholder:`What concept ${$.id} is trying…`,value:$.notes,onChange:b=>k(M=>({...M,notes:b.target.value}))}),c.concepts.length>1&&f.jsxs("div",{className:T.pick,children:[f.jsx("span",{className:T.propLabel,children:f.jsx("code",{children:"pick"})}),c.concepts.map(b=>f.jsxs("label",{className:T.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===b.id,onChange:()=>p(M=>({...M,pick:{...M.pick,id:b.id}}))})," ",b.id]},b.id)),f.jsx("textarea",{className:T.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:b=>p(M=>({...M,pick:{...M.pick,reason:b.target.value}}))})]})]}),f.jsxs("fieldset",{className:T.group,disabled:wn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:b=>De("theme",b.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:b=>De("zoom",+b.target.value)}),f.jsxs("span",{className:T.readout,children:[c.view.zoom,"×"]})]}),f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:c.view.ground,onChange:b=>De("ground",b.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(b=>f.jsx("option",{value:b,children:b.replace("--sc-color-","")},b))})]})]}),f.jsxs("fieldset",{className:T.group,disabled:wn,children:[f.jsxs("legend",{children:[ce?"Motion":"Props"," · concept ",$.id]}),(()=>{const b=ie.props.map(M=>f.jsx($g,{def:M,value:$.props[M.name],spring:$.springs[`prop:${M.name}`],easingPresets:we,onChange:A=>Q($.id)(M.name,A),onSpring:(A,ye,ge)=>k(Le=>{const tt={...Le.springs},Ot={...Le.props,[M.name]:A};return ye?(tt[`prop:${M.name}`]=ye,M.durationProp&&(Ot[M.durationProp]=ge)):delete tt[`prop:${M.name}`],{...Le,springs:tt,props:Ot}})},M.name));return ce||b.splice(Math.min(3,b.length),0,f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Gt&&$.props.disabled?"disabled":pe,onChange:M=>wo(M.target.value),children:[Kg.map(M=>f.jsx("option",{value:M,children:M==="rest"?"default":M},M)),Gt&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),b})()]}),f.jsxs("fieldset",{className:T.group,disabled:wn,children:[f.jsxs("legend",{children:["Sound · ",ie.trigger]}),f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:$.sound.volume,onChange:b=>ze("volume",+b.target.value)}),f.jsx("span",{className:T.readout,children:$.sound.volume})]}),f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:$.sound.rate,onChange:b=>ze("rate",+b.target.value)}),f.jsxs("span",{className:T.readout,children:[$.sound.rate,"×"]})]}),f.jsxs("div",{className:T.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:E,onChange:b=>z(b.target.checked)})]}),f.jsxs("ul",{className:T.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:T.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!$.sound.file,onChange:()=>ze("file",null)})," silent"]})}),($.sound.file?[{file:$.sound.file,seconds:""}]:[]).map(b=>f.jsxs("li",{className:`${T.sound} ${b.file===ie.shippedSound?T.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:$.sound.file===b.file,onChange:()=>{ze("file",b.file),Os(b.file,$.sound.volume,$.sound.rate)}}),b.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:T.readout,children:[b.seconds&&`${b.seconds}s`,b.file===ie.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${b.file}`,onClick:()=>Os(b.file,$.sound.volume,$.sound.rate),children:"play"})]},b.file))]})]}),!ce&&f.jsxs("p",{className:T.meta,children:[_o," of ",Z.length," tokens tuned in concept ",$.id,", ",F," mode. Colour and shadow edits apply to ",F," only; size, type and motion apply to both modes."]}),Object.entries(Yt).map(([b,M])=>f.jsxs("fieldset",{className:T.group,disabled:wn,children:[f.jsxs("legend",{children:[b," · ",M.length]}),M.map(A=>{var ye;return f.jsx(Tg,{name:A,kind:Hs(L[A]),shipped:L[A],value:N[A]||L[A]||"",override:Cr[A],scope:$.overrides[Ts(A,F)][A]!==void 0?Ts(A,F):$.overrides.all[A]!==void 0?"all":null,adj:(ye=$.shadowAdj[Ts(A,F)])==null?void 0:ye[A],spring:$.springs[A],pin:$.pins[A],refs:Ig[Hs(L[A])],easingPresets:we,onSet:ge=>ve(A,ge),onAdj:ge=>je(A,ge),onSpring:(ge,Le)=>ke(A,ge,Le),onReset:()=>be(A),restOf:A.endsWith("-hover")&&Z.includes(A.slice(0,-6))?A.slice(0,-6):null,onCopyRest:()=>ve(A,N[A.slice(0,-6)]||L[A.slice(0,-6)]),onPin:ge=>Ee(A,ge)},`${$.id}${F}${A}`)})]},b)),D.length>0&&f.jsxs("fieldset",{className:T.group,children:[f.jsx("legend",{children:"derived · read-only"}),D.map(b=>f.jsxs("div",{className:T.values,children:[f.jsx("code",{children:b})," ",P[b]]},b))]})]})]})}function wd(s){const i=Is(s);return{settleMs:i.settleMs,overshoot:Nt(i.overshoot,3),framerMotion:{type:"spring",stiffness:s.stiffness,damping:s.damping,mass:s.mass}}}function Jg(){return new URLSearchParams(location.search).get("c"),f.jsx(Yg,{})}const Kl=document.getElementById("root");Kl.dataset.mounted||(Kl.dataset.mounted="true",qf.createRoot(Kl).render(f.jsx(Jg,{})));
