(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(p){if(p.ep)return;p.ep=!0;const h=l(p);fetch(p.href,h)}})();function Gf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hl={exports:{}},gs={},$l={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function qf(){if(Wu)return ye;Wu=1;var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function C(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,j={};function H(k,A,ie){this.props=k,this.context=A,this.refs=j,this.updater=ie||N}H.prototype.isReactComponent={},H.prototype.setState=function(k,A){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,A,"setState")},H.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function J(){}J.prototype=H.prototype;function Q(k,A,ie){this.props=k,this.context=A,this.refs=j,this.updater=ie||N}var Y=Q.prototype=new J;Y.constructor=Q,I(Y,H.prototype),Y.isPureReactComponent=!0;var X=Array.isArray,le=Object.prototype.hasOwnProperty,R={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function de(k,A,ie){var ge,be={},ke=null,Ce=null;if(A!=null)for(ge in A.ref!==void 0&&(Ce=A.ref),A.key!==void 0&&(ke=""+A.key),A)le.call(A,ge)&&!K.hasOwnProperty(ge)&&(be[ge]=A[ge]);var Se=arguments.length-2;if(Se===1)be.children=ie;else if(1<Se){for(var ze=Array(Se),Oe=0;Oe<Se;Oe++)ze[Oe]=arguments[Oe+2];be.children=ze}if(k&&k.defaultProps)for(ge in Se=k.defaultProps,Se)be[ge]===void 0&&(be[ge]=Se[ge]);return{$$typeof:o,type:k,key:ke,ref:Ce,props:be,_owner:R.current}}function he(k,A){return{$$typeof:o,type:k.type,key:A,ref:k.ref,props:k.props,_owner:k._owner}}function ne(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function ae(k){var A={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ie){return A[ie]})}var B=/\/+/g;function T(k,A){return typeof k=="object"&&k!==null&&k.key!=null?ae(""+k.key):A.toString(36)}function $(k,A,ie,ge,be){var ke=typeof k;(ke==="undefined"||ke==="boolean")&&(k=null);var Ce=!1;if(k===null)Ce=!0;else switch(ke){case"string":case"number":Ce=!0;break;case"object":switch(k.$$typeof){case o:case i:Ce=!0}}if(Ce)return Ce=k,be=be(Ce),k=ge===""?"."+T(Ce,0):ge,X(be)?(ie="",k!=null&&(ie=k.replace(B,"$&/")+"/"),$(be,A,ie,"",function(Oe){return Oe})):be!=null&&(ne(be)&&(be=he(be,ie+(!be.key||Ce&&Ce.key===be.key?"":(""+be.key).replace(B,"$&/")+"/")+k)),A.push(be)),1;if(Ce=0,ge=ge===""?".":ge+":",X(k))for(var Se=0;Se<k.length;Se++){ke=k[Se];var ze=ge+T(ke,Se);Ce+=$(ke,A,ie,ze,be)}else if(ze=C(k),typeof ze=="function")for(k=ze.call(k),Se=0;!(ke=k.next()).done;)ke=ke.value,ze=ge+T(ke,Se++),Ce+=$(ke,A,ie,ze,be);else if(ke==="object")throw A=String(k),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return Ce}function xe(k,A,ie){if(k==null)return k;var ge=[],be=0;return $(k,ge,"","",function(ke){return A.call(ie,ke,be++)}),ge}function me(k){if(k._status===-1){var A=k._result;A=A(),A.then(function(ie){(k._status===0||k._status===-1)&&(k._status=1,k._result=ie)},function(ie){(k._status===0||k._status===-1)&&(k._status=2,k._result=ie)}),k._status===-1&&(k._status=0,k._result=A)}if(k._status===1)return k._result.default;throw k._result}var pe={current:null},W={transition:null},oe={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:W,ReactCurrentOwner:R};function G(){throw Error("act(...) is not supported in production builds of React.")}return ye.Children={map:xe,forEach:function(k,A,ie){xe(k,function(){A.apply(this,arguments)},ie)},count:function(k){var A=0;return xe(k,function(){A++}),A},toArray:function(k){return xe(k,function(A){return A})||[]},only:function(k){if(!ne(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ye.Component=H,ye.Fragment=l,ye.Profiler=p,ye.PureComponent=Q,ye.StrictMode=c,ye.Suspense=x,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ye.act=G,ye.cloneElement=function(k,A,ie){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ge=I({},k.props),be=k.key,ke=k.ref,Ce=k._owner;if(A!=null){if(A.ref!==void 0&&(ke=A.ref,Ce=R.current),A.key!==void 0&&(be=""+A.key),k.type&&k.type.defaultProps)var Se=k.type.defaultProps;for(ze in A)le.call(A,ze)&&!K.hasOwnProperty(ze)&&(ge[ze]=A[ze]===void 0&&Se!==void 0?Se[ze]:A[ze])}var ze=arguments.length-2;if(ze===1)ge.children=ie;else if(1<ze){Se=Array(ze);for(var Oe=0;Oe<ze;Oe++)Se[Oe]=arguments[Oe+2];ge.children=Se}return{$$typeof:o,type:k.type,key:be,ref:ke,props:ge,_owner:Ce}},ye.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:h,_context:k},k.Consumer=k},ye.createElement=de,ye.createFactory=function(k){var A=de.bind(null,k);return A.type=k,A},ye.createRef=function(){return{current:null}},ye.forwardRef=function(k){return{$$typeof:v,render:k}},ye.isValidElement=ne,ye.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:me}},ye.memo=function(k,A){return{$$typeof:L,type:k,compare:A===void 0?null:A}},ye.startTransition=function(k){var A=W.transition;W.transition={};try{k()}finally{W.transition=A}},ye.unstable_act=G,ye.useCallback=function(k,A){return pe.current.useCallback(k,A)},ye.useContext=function(k){return pe.current.useContext(k)},ye.useDebugValue=function(){},ye.useDeferredValue=function(k){return pe.current.useDeferredValue(k)},ye.useEffect=function(k,A){return pe.current.useEffect(k,A)},ye.useId=function(){return pe.current.useId()},ye.useImperativeHandle=function(k,A,ie){return pe.current.useImperativeHandle(k,A,ie)},ye.useInsertionEffect=function(k,A){return pe.current.useInsertionEffect(k,A)},ye.useLayoutEffect=function(k,A){return pe.current.useLayoutEffect(k,A)},ye.useMemo=function(k,A){return pe.current.useMemo(k,A)},ye.useReducer=function(k,A,ie){return pe.current.useReducer(k,A,ie)},ye.useRef=function(k){return pe.current.useRef(k)},ye.useState=function(k){return pe.current.useState(k)},ye.useSyncExternalStore=function(k,A,ie){return pe.current.useSyncExternalStore(k,A,ie)},ye.useTransition=function(){return pe.current.useTransition()},ye.version="18.3.1",ye}var Ku;function ti(){return Ku||(Ku=1,$l.exports=qf()),$l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu;function Yf(){if(Qu)return gs;Qu=1;var o=ti(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(v,x,L){var E,b={},C=null,N=null;L!==void 0&&(C=""+L),x.key!==void 0&&(C=""+x.key),x.ref!==void 0&&(N=x.ref);for(E in x)c.call(x,E)&&!h.hasOwnProperty(E)&&(b[E]=x[E]);if(v&&v.defaultProps)for(E in x=v.defaultProps,x)b[E]===void 0&&(b[E]=x[E]);return{$$typeof:i,type:v,key:C,ref:N,props:b,_owner:p.current}}return gs.Fragment=l,gs.jsx=m,gs.jsxs=m,gs}var Gu;function Jf(){return Gu||(Gu=1,Hl.exports=Yf()),Hl.exports}var f=Jf(),u=ti(),Po={},Tl={exports:{}},ct={},Rl={exports:{}},Vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function Xf(){return qu||(qu=1,(function(o){function i(W,oe){var G=W.length;W.push(oe);e:for(;0<G;){var k=G-1>>>1,A=W[k];if(0<p(A,oe))W[k]=oe,W[G]=A,G=k;else break e}}function l(W){return W.length===0?null:W[0]}function c(W){if(W.length===0)return null;var oe=W[0],G=W.pop();if(G!==oe){W[0]=G;e:for(var k=0,A=W.length,ie=A>>>1;k<ie;){var ge=2*(k+1)-1,be=W[ge],ke=ge+1,Ce=W[ke];if(0>p(be,G))ke<A&&0>p(Ce,be)?(W[k]=Ce,W[ke]=G,k=ke):(W[k]=be,W[ge]=G,k=ge);else if(ke<A&&0>p(Ce,G))W[k]=Ce,W[ke]=G,k=ke;else break e}}return oe}function p(W,oe){var G=W.sortIndex-oe.sortIndex;return G!==0?G:W.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var m=Date,v=m.now();o.unstable_now=function(){return m.now()-v}}var x=[],L=[],E=1,b=null,C=3,N=!1,I=!1,j=!1,H=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(W){for(var oe=l(L);oe!==null;){if(oe.callback===null)c(L);else if(oe.startTime<=W)c(L),oe.sortIndex=oe.expirationTime,i(x,oe);else break;oe=l(L)}}function X(W){if(j=!1,Y(W),!I)if(l(x)!==null)I=!0,me(le);else{var oe=l(L);oe!==null&&pe(X,oe.startTime-W)}}function le(W,oe){I=!1,j&&(j=!1,J(de),de=-1),N=!0;var G=C;try{for(Y(oe),b=l(x);b!==null&&(!(b.expirationTime>oe)||W&&!ae());){var k=b.callback;if(typeof k=="function"){b.callback=null,C=b.priorityLevel;var A=k(b.expirationTime<=oe);oe=o.unstable_now(),typeof A=="function"?b.callback=A:b===l(x)&&c(x),Y(oe)}else c(x);b=l(x)}if(b!==null)var ie=!0;else{var ge=l(L);ge!==null&&pe(X,ge.startTime-oe),ie=!1}return ie}finally{b=null,C=G,N=!1}}var R=!1,K=null,de=-1,he=5,ne=-1;function ae(){return!(o.unstable_now()-ne<he)}function B(){if(K!==null){var W=o.unstable_now();ne=W;var oe=!0;try{oe=K(!0,W)}finally{oe?T():(R=!1,K=null)}}else R=!1}var T;if(typeof Q=="function")T=function(){Q(B)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,xe=$.port2;$.port1.onmessage=B,T=function(){xe.postMessage(null)}}else T=function(){H(B,0)};function me(W){K=W,R||(R=!0,T())}function pe(W,oe){de=H(function(){W(o.unstable_now())},oe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){I||N||(I=!0,me(le))},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return C},o.unstable_getFirstCallbackNode=function(){return l(x)},o.unstable_next=function(W){switch(C){case 1:case 2:case 3:var oe=3;break;default:oe=C}var G=C;C=oe;try{return W()}finally{C=G}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,oe){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var G=C;C=W;try{return oe()}finally{C=G}},o.unstable_scheduleCallback=function(W,oe,G){var k=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?k+G:k):G=k,W){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=G+A,W={id:E++,callback:oe,priorityLevel:W,startTime:G,expirationTime:A,sortIndex:-1},G>k?(W.sortIndex=G,i(L,W),l(x)===null&&W===l(L)&&(j?(J(de),de=-1):j=!0,pe(X,G-k))):(W.sortIndex=A,i(x,W),I||N||(I=!0,me(le))),W},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(W){var oe=C;return function(){var G=C;C=oe;try{return W.apply(this,arguments)}finally{C=G}}}})(Vl)),Vl}var Yu;function e0(){return Yu||(Yu=1,Rl.exports=Xf()),Rl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function t0(){if(Ju)return ct;Ju=1;var o=ti(),i=e0();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},b={};function C(e){return x.call(b,e)?!0:x.call(E,e)?!1:L.test(e)?b[e]=!0:(E[e]=!0,!1)}function N(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||N(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function j(e,t,n,r,s,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new j(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(J,Q);H[t]=new j(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(J,Q);H[t]=new j(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(J,Q);H[t]=new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,n,r){var s=H.hasOwnProperty(t)?H[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,s,r)&&(n=null),r||s===null?C(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var X=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),R=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),ae=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),W=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,k;function A(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var ie=!1;function ge(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var r=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){r=M}e.call(t.prototype)}else{try{throw Error()}catch(M){r=M}e()}}catch(M){if(M&&r&&typeof M.stack=="string"){for(var s=M.stack.split(`
`),a=r.stack.split(`
`),d=s.length-1,g=a.length-1;1<=d&&0<=g&&s[d]!==a[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==a[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==a[g]){var y=`
`+s[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function be(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case R:return"Portal";case he:return"Profiler";case de:return"StrictMode";case T:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case ne:return(e._context.displayName||"Context")+".Provider";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xe:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=ze(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){r=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=Oe(e))}function ws(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ze(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jr(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Se(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Un(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function Wn(e,t){Un(e,t);var n=Se(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kn(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kn(e,t,n){(t!=="number"||Ln(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qt=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Se(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ar(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Se(n)}}function Fr(e,t){var n=Se(t.value),r=Se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function F(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var P,we=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(P=P||document.createElement("div"),P.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=P.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(e){rt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Le[t]=Le[e]})});function Vt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Le.hasOwnProperty(e)&&Le[e]?(""+t).trim():t+"px"}function Ls(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Vt(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Es=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t){if(t){if(Es[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,Qn=null,Gn=null;function ci(e){if(e=ts(e)){if(typeof Yo!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Qs(t),Yo(e.stateNode,e.type,t))}}function ui(e){Qn?Gn?Gn.push(e):Gn=[e]:Qn=e}function di(){if(Qn){var e=Qn,t=Gn;if(Gn=Qn=null,ci(e),t)for(e=0;e<t.length;e++)ci(t[e])}}function pi(e,t){return e(t)}function fi(){}var Jo=!1;function hi(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return pi(e,t,n)}finally{Jo=!1,(Qn!==null||Gn!==null)&&(fi(),di())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Xo=!1;if(v)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Xo=!1}function ep(e,t,n,r,s,a,d,g,y){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(D){this.onError(D)}}var $r=!1,Ss=null,zs=!1,ea=null,tp={onError:function(e){$r=!0,Ss=e}};function np(e,t,n,r,s,a,d,g,y){$r=!1,Ss=null,ep.apply(tp,arguments)}function rp(e,t,n,r,s,a,d,g,y){if(np.apply(this,arguments),$r){if($r){var M=Ss;$r=!1,Ss=null}else throw Error(l(198));zs||(zs=!0,ea=M)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gi(e){if(En(e)!==e)throw Error(l(188))}function sp(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return gi(s),e;if(a===r)return gi(s),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=s,r=a;else{for(var d=!1,g=s.child;g;){if(g===n){d=!0,n=s,r=a;break}if(g===r){d=!0,r=s,n=a;break}g=g.sibling}if(!d){for(g=a.child;g;){if(g===n){d=!0,n=a,r=s;break}if(g===r){d=!0,r=a,n=s;break}g=g.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function vi(e){return e=sp(e),e!==null?xi(e):null}function xi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xi(e);if(t!==null)return t;e=e.sibling}return null}var yi=i.unstable_scheduleCallback,wi=i.unstable_cancelCallback,op=i.unstable_shouldYield,ap=i.unstable_requestPaint,Te=i.unstable_now,lp=i.unstable_getCurrentPriorityLevel,ta=i.unstable_ImmediatePriority,bi=i.unstable_UserBlockingPriority,Ms=i.unstable_NormalPriority,ip=i.unstable_LowPriority,ki=i.unstable_IdlePriority,Cs=null,Ft=null;function cp(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:pp,up=Math.log,dp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(up(e)/dp|0)|0}var js=64,As=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~s;g!==0?r=Tr(g):(a&=d,a!==0&&(r=Tr(a)))}else d=n&~s,d!==0?r=Tr(d):a!==0&&(r=Tr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),s=1<<n,r|=e[n],t&=~s;return r}function fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-_t(a),g=1<<d,y=s[d];y===-1?((g&n)===0||(g&r)!==0)&&(s[d]=fp(g,t)):y<=t&&(e.expiredLanes|=g),a&=~g}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _i(){var e=js;return js<<=1,(js&4194240)===0&&(js=64),e}function ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-_t(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Me=0;function Li(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ei,oa,Si,zi,Mi,aa=!1,Fs=[],Jt=null,Xt=null,en=null,Vr=new Map,Or=new Map,tn=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ci(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function Dr(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ts(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function vp(e,t,n,r,s){switch(t){case"focusin":return Jt=Dr(Jt,e,t,n,r,s),!0;case"dragenter":return Xt=Dr(Xt,e,t,n,r,s),!0;case"mouseover":return en=Dr(en,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Vr.set(a,Dr(Vr.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,Or.set(a,Dr(Or.get(a)||null,e,t,n,r,s)),!0}return!1}function ji(e){var t=Sn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=mi(n),t!==null){e.blockedOn=t,Mi(e.priority,function(){Si(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Go=r,n.target.dispatchEvent(r),Go=null}else return t=ts(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ai(e,t,n){Ps(e)&&n.delete(t)}function xp(){aa=!1,Jt!==null&&Ps(Jt)&&(Jt=null),Xt!==null&&Ps(Xt)&&(Xt=null),en!==null&&Ps(en)&&(en=null),Vr.forEach(Ai),Or.forEach(Ai)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,aa||(aa=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,xp)))}function Zr(e){function t(s){return Ir(s,e)}if(0<Fs.length){Ir(Fs[0],e);for(var n=1;n<Fs.length;n++){var r=Fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Ir(Jt,e),Xt!==null&&Ir(Xt,e),en!==null&&Ir(en,e),Vr.forEach(t),Or.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)ji(n),n.blockedOn===null&&tn.shift()}var qn=X.ReactCurrentBatchConfig,Hs=!0;function yp(e,t,n,r){var s=Me,a=qn.transition;qn.transition=null;try{Me=1,la(e,t,n,r)}finally{Me=s,qn.transition=a}}function wp(e,t,n,r){var s=Me,a=qn.transition;qn.transition=null;try{Me=4,la(e,t,n,r)}finally{Me=s,qn.transition=a}}function la(e,t,n,r){if(Hs){var s=ia(e,t,n,r);if(s===null)Ea(e,t,r,$s,n),Ci(e,r);else if(vp(s,e,t,n,r))r.stopPropagation();else if(Ci(e,r),t&4&&-1<gp.indexOf(e)){for(;s!==null;){var a=ts(s);if(a!==null&&Ei(a),a=ia(e,t,n,r),a===null&&Ea(e,t,r,$s,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else Ea(e,t,r,null,n)}}var $s=null;function ia(e,t,n,r){if($s=null,e=qo(r),e=Sn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $s=e,null}function Ni(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case ta:return 1;case bi:return 4;case Ms:case ip:return 16;case ki:return 536870912;default:return 16}default:return 16}}var nn=null,ca=null,Ts=null;function Fi(){if(Ts)return Ts;var e,t=ca,n=t.length,r,s="value"in nn?nn.value:nn.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===s[a-r];r++);return Ts=s.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function Pi(){return!1}function ut(e){function t(n,r,s,a,d){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(a):a[g]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vs:Pi,this.isPropagationStopped=Pi,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=ut(Yn),Br=G({},Yn,{view:0,detail:0}),bp=ut(Br),da,pa,Ur,Os=G({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(da=e.screenX-Ur.screenX,pa=e.screenY-Ur.screenY):pa=da=0,Ur=e),da)},movementY:function(e){return"movementY"in e?e.movementY:pa}}),Hi=ut(Os),kp=G({},Os,{dataTransfer:0}),_p=ut(kp),Lp=G({},Br,{relatedTarget:0}),fa=ut(Lp),Ep=G({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=ut(Ep),zp=G({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=ut(zp),Cp=G({},Yn,{data:0}),$i=ut(Cp),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function ha(){return Fp}var Pp=G({},Br,{key:function(e){if(e.key){var t=jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ha,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hp=ut(Pp),$p=G({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ti=ut($p),Tp=G({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ha}),Rp=ut(Tp),Vp=G({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=ut(Vp),Dp=G({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=ut(Dp),Zp=[9,13,27,32],ma=v&&"CompositionEvent"in window,Wr=null;v&&"documentMode"in document&&(Wr=document.documentMode);var Bp=v&&"TextEvent"in window&&!Wr,Ri=v&&(!ma||Wr&&8<Wr&&11>=Wr),Vi=" ",Oi=!1;function Di(e,t){switch(e){case"keyup":return Zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ii(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Up(e,t){switch(e){case"compositionend":return Ii(t);case"keypress":return t.which!==32?null:(Oi=!0,Vi);case"textInput":return e=t.data,e===Vi&&Oi?null:e;default:return null}}function Wp(e,t){if(Jn)return e==="compositionend"||!ma&&Di(e,t)?(e=Fi(),Ts=ca=nn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ri&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Bi(e,t,n,r){ui(r),t=Us(t,"onChange"),0<t.length&&(n=new ua("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,Qr=null;function Qp(e){ic(e,0)}function Ds(e){var t=rr(e);if(ws(t))return e}function Gp(e,t){if(e==="change")return t}var Ui=!1;if(v){var ga;if(v){var va="oninput"in document;if(!va){var Wi=document.createElement("div");Wi.setAttribute("oninput","return;"),va=typeof Wi.oninput=="function"}ga=va}else ga=!1;Ui=ga&&(!document.documentMode||9<document.documentMode)}function Ki(){Kr&&(Kr.detachEvent("onpropertychange",Qi),Qr=Kr=null)}function Qi(e){if(e.propertyName==="value"&&Ds(Qr)){var t=[];Bi(t,Qr,e,qo(e)),hi(Qp,t)}}function qp(e,t,n){e==="focusin"?(Ki(),Kr=t,Qr=n,Kr.attachEvent("onpropertychange",Qi)):e==="focusout"&&Ki()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ds(Qr)}function Jp(e,t){if(e==="click")return Ds(t)}function Xp(e,t){if(e==="input"||e==="change")return Ds(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:ef;function Gr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!x.call(t,s)||!Lt(e[s],t[s]))return!1}return!0}function Gi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qi(e,t){var n=Gi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gi(n)}}function Yi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ji(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ln(e.document)}return t}function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=Ji(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yi(n.ownerDocument.documentElement,n)){if(r!==null&&xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=qi(n,a);var d=qi(n,r);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=v&&"documentMode"in document&&11>=document.documentMode,Xn=null,ya=null,qr=null,wa=!1;function Xi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||Xn==null||Xn!==Ln(r)||(r=Xn,"selectionStart"in r&&xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Gr(qr,r)||(qr=r,r=Us(ya,"onSelect"),0<r.length&&(t=new ua("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},ba={},ec={};v&&(ec=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Zs(e){if(ba[e])return ba[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ec)return ba[e]=t[n];return e}var tc=Zs("animationend"),nc=Zs("animationiteration"),rc=Zs("animationstart"),sc=Zs("transitionend"),oc=new Map,ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){oc.set(e,t),h(t,[e])}for(var ka=0;ka<ac.length;ka++){var _a=ac[ka],rf=_a.toLowerCase(),sf=_a[0].toUpperCase()+_a.slice(1);rn(rf,"on"+sf)}rn(tc,"onAnimationEnd"),rn(nc,"onAnimationIteration"),rn(rc,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(sc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function lc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var d=r.length-1;0<=d;d--){var g=r[d],y=g.instance,M=g.currentTarget;if(g=g.listener,y!==a&&s.isPropagationStopped())break e;lc(s,g,M),a=y}else for(d=0;d<r.length;d++){if(g=r[d],y=g.instance,M=g.currentTarget,g=g.listener,y!==a&&s.isPropagationStopped())break e;lc(s,g,M),a=y}}}if(zs)throw e=ea,zs=!1,ea=null,e}function Ae(e,t){var n=t[Aa];n===void 0&&(n=t[Aa]=new Set);var r=e+"__bubble";n.has(r)||(cc(t,e,2,!1),n.add(r))}function La(e,t,n){var r=0;t&&(r|=4),cc(n,e,r,t)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Bs]){e[Bs]=!0,c.forEach(function(n){n!=="selectionchange"&&(of.has(n)||La(n,!1,e),La(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bs]||(t[Bs]=!0,La("selectionchange",!1,t))}}function cc(e,t,n,r){switch(Ni(t)){case 1:var s=yp;break;case 4:s=wp;break;default:s=la}n=s.bind(null,t,n,e),s=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ea(e,t,n,r,s){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var g=r.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=r.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;d=d.return}for(;g!==null;){if(d=Sn(g),d===null)return;if(y=d.tag,y===5||y===6){r=a=d;continue e}g=g.parentNode}}r=r.return}hi(function(){var M=a,D=qo(n),Z=[];e:{var V=oc.get(e);if(V!==void 0){var q=ua,te=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":q=Hp;break;case"focusin":te="focus",q=fa;break;case"focusout":te="blur",q=fa;break;case"beforeblur":case"afterblur":q=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Hi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Rp;break;case tc:case nc:case rc:q=Sp;break;case sc:q=Op;break;case"scroll":q=bp;break;case"wheel":q=Ip;break;case"copy":case"cut":case"paste":q=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ti}var re=(t&4)!==0,Re=!re&&e==="scroll",S=re?V!==null?V+"Capture":null:V;re=[];for(var w=M,z;w!==null;){z=w;var U=z.stateNode;if(z.tag===5&&U!==null&&(z=U,S!==null&&(U=Pr(w,S),U!=null&&re.push(Xr(w,U,z)))),Re)break;w=w.return}0<re.length&&(V=new q(V,te,null,n,D),Z.push({event:V,listeners:re}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",V&&n!==Go&&(te=n.relatedTarget||n.fromElement)&&(Sn(te)||te[Ot]))break e;if((q||V)&&(V=D.window===D?D:(V=D.ownerDocument)?V.defaultView||V.parentWindow:window,q?(te=n.relatedTarget||n.toElement,q=M,te=te?Sn(te):null,te!==null&&(Re=En(te),te!==Re||te.tag!==5&&te.tag!==6)&&(te=null)):(q=null,te=M),q!==te)){if(re=Hi,U="onMouseLeave",S="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(re=Ti,U="onPointerLeave",S="onPointerEnter",w="pointer"),Re=q==null?V:rr(q),z=te==null?V:rr(te),V=new re(U,w+"leave",q,n,D),V.target=Re,V.relatedTarget=z,U=null,Sn(D)===M&&(re=new re(S,w+"enter",te,n,D),re.target=z,re.relatedTarget=Re,U=re),Re=U,q&&te)t:{for(re=q,S=te,w=0,z=re;z;z=tr(z))w++;for(z=0,U=S;U;U=tr(U))z++;for(;0<w-z;)re=tr(re),w--;for(;0<z-w;)S=tr(S),z--;for(;w--;){if(re===S||S!==null&&re===S.alternate)break t;re=tr(re),S=tr(S)}re=null}else re=null;q!==null&&uc(Z,V,q,re,!1),te!==null&&Re!==null&&uc(Z,Re,te,re,!0)}}e:{if(V=M?rr(M):window,q=V.nodeName&&V.nodeName.toLowerCase(),q==="select"||q==="input"&&V.type==="file")var se=Gp;else if(Zi(V))if(Ui)se=Xp;else{se=Yp;var ce=qp}else(q=V.nodeName)&&q.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(se=Jp);if(se&&(se=se(e,M))){Bi(Z,se,n,D);break e}ce&&ce(e,V,M),e==="focusout"&&(ce=V._wrapperState)&&ce.controlled&&V.type==="number"&&Kn(V,"number",V.value)}switch(ce=M?rr(M):window,e){case"focusin":(Zi(ce)||ce.contentEditable==="true")&&(Xn=ce,ya=M,qr=null);break;case"focusout":qr=ya=Xn=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,Xi(Z,n,D);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":Xi(Z,n,D)}var ue;if(ma)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Jn?Di(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(Ri&&n.locale!=="ko"&&(Jn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Jn&&(ue=Fi()):(nn=D,ca="value"in nn?nn.value:nn.textContent,Jn=!0)),ce=Us(M,fe),0<ce.length&&(fe=new $i(fe,e,null,n,D),Z.push({event:fe,listeners:ce}),ue?fe.data=ue:(ue=Ii(n),ue!==null&&(fe.data=ue)))),(ue=Bp?Up(e,n):Wp(e,n))&&(M=Us(M,"onBeforeInput"),0<M.length&&(D=new $i("onBeforeInput","beforeinput",null,n,D),Z.push({event:D,listeners:M}),D.data=ue))}ic(Z,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Us(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Pr(e,n),a!=null&&r.unshift(Xr(e,a,s)),a=Pr(e,t),a!=null&&r.push(Xr(e,a,s))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uc(e,t,n,r,s){for(var a=t._reactName,d=[];n!==null&&n!==r;){var g=n,y=g.alternate,M=g.stateNode;if(y!==null&&y===r)break;g.tag===5&&M!==null&&(g=M,s?(y=Pr(n,a),y!=null&&d.unshift(Xr(n,y,g))):s||(y=Pr(n,a),y!=null&&d.push(Xr(n,y,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var af=/\r\n?/g,lf=/\u0000|\uFFFD/g;function dc(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(lf,"")}function Ws(e,t,n){if(t=dc(t),dc(e)!==t&&n)throw Error(l(425))}function Ks(){}var Sa=null,za=null;function Ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,cf=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(e){return pc.resolve(null).then(e).catch(df)}:Ca;function df(e){setTimeout(function(){throw e})}function ja(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zr(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+nr,es="__reactProps$"+nr,Ot="__reactContainer$"+nr,Aa="__reactEvents$"+nr,pf="__reactListeners$"+nr,ff="__reactHandles$"+nr;function Sn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fc(e);e!==null;){if(n=e[Pt])return n;e=fc(e)}return t}e=n,n=e.parentNode}return null}function ts(e){return e=e[Pt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Qs(e){return e[es]||null}var Na=[],sr=-1;function on(e){return{current:e}}function Ne(e){0>sr||(e.current=Na[sr],Na[sr]=null,sr--)}function je(e,t){sr++,Na[sr]=e.current,e.current=t}var an={},Ge=on(an),st=on(!1),zn=an;function or(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ot(e){return e=e.childContextTypes,e!=null}function Gs(){Ne(st),Ne(Ge)}function hc(e,t,n){if(Ge.current!==an)throw Error(l(168));je(Ge,t),je(st,n)}function mc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(l(108,Ce(e)||"Unknown",s));return G({},n,r)}function qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,zn=Ge.current,je(Ge,e),je(st,st.current),!0}function gc(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=mc(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,Ne(st),Ne(Ge),je(Ge,e)):Ne(st),je(st,n)}var Dt=null,Ys=!1,Fa=!1;function vc(e){Dt===null?Dt=[e]:Dt.push(e)}function hf(e){Ys=!0,vc(e)}function ln(){if(!Fa&&Dt!==null){Fa=!0;var e=0,t=Me;try{var n=Dt;for(Me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Ys=!1}catch(s){throw Dt!==null&&(Dt=Dt.slice(e+1)),yi(ta,ln),s}finally{Me=t,Fa=!1}}return null}var ar=[],lr=0,Js=null,Xs=0,ht=[],mt=0,Mn=null,It=1,Zt="";function Cn(e,t){ar[lr++]=Xs,ar[lr++]=Js,Js=e,Xs=t}function xc(e,t,n){ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=Mn,Mn=e;var r=It;e=Zt;var s=32-_t(r)-1;r&=~(1<<s),n+=1;var a=32-_t(t)+s;if(30<a){var d=s-s%5;a=(r&(1<<d)-1).toString(32),r>>=d,s-=d,It=1<<32-_t(t)+s|n<<s|r,Zt=a+e}else It=1<<a|n<<s|r,Zt=e}function Pa(e){e.return!==null&&(Cn(e,1),xc(e,1,0))}function Ha(e){for(;e===Js;)Js=ar[--lr],ar[lr]=null,Xs=ar[--lr],ar[lr]=null;for(;e===Mn;)Mn=ht[--mt],ht[mt]=null,Zt=ht[--mt],ht[mt]=null,It=ht[--mt],ht[mt]=null}var dt=null,pt=null,Fe=!1,Et=null;function yc(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,pt=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:It,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,pt=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(Fe){var t=pt;if(t){var n=t;if(!wc(e,t)){if($a(e))throw Error(l(418));t=sn(n.nextSibling);var r=dt;t&&wc(e,t)?yc(r,n):(e.flags=e.flags&-4097|2,Fe=!1,dt=e)}}else{if($a(e))throw Error(l(418));e.flags=e.flags&-4097|2,Fe=!1,dt=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function eo(e){if(e!==dt)return!1;if(!Fe)return bc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ma(e.type,e.memoizedProps)),t&&(t=pt)){if($a(e))throw kc(),Error(l(418));for(;t;)yc(e,t),t=sn(t.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=dt?sn(e.stateNode.nextSibling):null;return!0}function kc(){for(var e=pt;e;)e=sn(e.nextSibling)}function ir(){pt=dt=null,Fe=!1}function Ra(e){Et===null?Et=[e]:Et.push(e)}var mf=X.ReactCurrentBatchConfig;function ns(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var g=s.refs;d===null?delete g[a]:g[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _c(e){var t=e._init;return t(e._payload)}function Lc(e){function t(S,w){if(e){var z=S.deletions;z===null?(S.deletions=[w],S.flags|=16):z.push(w)}}function n(S,w){if(!e)return null;for(;w!==null;)t(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(S,w){return S=gn(S,w),S.index=0,S.sibling=null,S}function a(S,w,z){return S.index=z,e?(z=S.alternate,z!==null?(z=z.index,z<w?(S.flags|=2,w):z):(S.flags|=2,w)):(S.flags|=1048576,w)}function d(S){return e&&S.alternate===null&&(S.flags|=2),S}function g(S,w,z,U){return w===null||w.tag!==6?(w=Cl(z,S.mode,U),w.return=S,w):(w=s(w,z),w.return=S,w)}function y(S,w,z,U){var se=z.type;return se===K?D(S,w,z.props.children,U,z.key):w!==null&&(w.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&_c(se)===w.type)?(U=s(w,z.props),U.ref=ns(S,w,z),U.return=S,U):(U=So(z.type,z.key,z.props,null,S.mode,U),U.ref=ns(S,w,z),U.return=S,U)}function M(S,w,z,U){return w===null||w.tag!==4||w.stateNode.containerInfo!==z.containerInfo||w.stateNode.implementation!==z.implementation?(w=jl(z,S.mode,U),w.return=S,w):(w=s(w,z.children||[]),w.return=S,w)}function D(S,w,z,U,se){return w===null||w.tag!==7?(w=Tn(z,S.mode,U,se),w.return=S,w):(w=s(w,z),w.return=S,w)}function Z(S,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Cl(""+w,S.mode,z),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case le:return z=So(w.type,w.key,w.props,null,S.mode,z),z.ref=ns(S,null,w),z.return=S,z;case R:return w=jl(w,S.mode,z),w.return=S,w;case me:var U=w._init;return Z(S,U(w._payload),z)}if(qt(w)||oe(w))return w=Tn(w,S.mode,z,null),w.return=S,w;to(S,w)}return null}function V(S,w,z,U){var se=w!==null?w.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return se!==null?null:g(S,w,""+z,U);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case le:return z.key===se?y(S,w,z,U):null;case R:return z.key===se?M(S,w,z,U):null;case me:return se=z._init,V(S,w,se(z._payload),U)}if(qt(z)||oe(z))return se!==null?null:D(S,w,z,U,null);to(S,z)}return null}function q(S,w,z,U,se){if(typeof U=="string"&&U!==""||typeof U=="number")return S=S.get(z)||null,g(w,S,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case le:return S=S.get(U.key===null?z:U.key)||null,y(w,S,U,se);case R:return S=S.get(U.key===null?z:U.key)||null,M(w,S,U,se);case me:var ce=U._init;return q(S,w,z,ce(U._payload),se)}if(qt(U)||oe(U))return S=S.get(z)||null,D(w,S,U,se,null);to(w,U)}return null}function te(S,w,z,U){for(var se=null,ce=null,ue=w,fe=w=0,Ue=null;ue!==null&&fe<z.length;fe++){ue.index>fe?(Ue=ue,ue=null):Ue=ue.sibling;var Ee=V(S,ue,z[fe],U);if(Ee===null){ue===null&&(ue=Ue);break}e&&ue&&Ee.alternate===null&&t(S,ue),w=a(Ee,w,fe),ce===null?se=Ee:ce.sibling=Ee,ce=Ee,ue=Ue}if(fe===z.length)return n(S,ue),Fe&&Cn(S,fe),se;if(ue===null){for(;fe<z.length;fe++)ue=Z(S,z[fe],U),ue!==null&&(w=a(ue,w,fe),ce===null?se=ue:ce.sibling=ue,ce=ue);return Fe&&Cn(S,fe),se}for(ue=r(S,ue);fe<z.length;fe++)Ue=q(ue,S,fe,z[fe],U),Ue!==null&&(e&&Ue.alternate!==null&&ue.delete(Ue.key===null?fe:Ue.key),w=a(Ue,w,fe),ce===null?se=Ue:ce.sibling=Ue,ce=Ue);return e&&ue.forEach(function(vn){return t(S,vn)}),Fe&&Cn(S,fe),se}function re(S,w,z,U){var se=oe(z);if(typeof se!="function")throw Error(l(150));if(z=se.call(z),z==null)throw Error(l(151));for(var ce=se=null,ue=w,fe=w=0,Ue=null,Ee=z.next();ue!==null&&!Ee.done;fe++,Ee=z.next()){ue.index>fe?(Ue=ue,ue=null):Ue=ue.sibling;var vn=V(S,ue,Ee.value,U);if(vn===null){ue===null&&(ue=Ue);break}e&&ue&&vn.alternate===null&&t(S,ue),w=a(vn,w,fe),ce===null?se=vn:ce.sibling=vn,ce=vn,ue=Ue}if(Ee.done)return n(S,ue),Fe&&Cn(S,fe),se;if(ue===null){for(;!Ee.done;fe++,Ee=z.next())Ee=Z(S,Ee.value,U),Ee!==null&&(w=a(Ee,w,fe),ce===null?se=Ee:ce.sibling=Ee,ce=Ee);return Fe&&Cn(S,fe),se}for(ue=r(S,ue);!Ee.done;fe++,Ee=z.next())Ee=q(ue,S,fe,Ee.value,U),Ee!==null&&(e&&Ee.alternate!==null&&ue.delete(Ee.key===null?fe:Ee.key),w=a(Ee,w,fe),ce===null?se=Ee:ce.sibling=Ee,ce=Ee);return e&&ue.forEach(function(Qf){return t(S,Qf)}),Fe&&Cn(S,fe),se}function Re(S,w,z,U){if(typeof z=="object"&&z!==null&&z.type===K&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case le:e:{for(var se=z.key,ce=w;ce!==null;){if(ce.key===se){if(se=z.type,se===K){if(ce.tag===7){n(S,ce.sibling),w=s(ce,z.props.children),w.return=S,S=w;break e}}else if(ce.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===me&&_c(se)===ce.type){n(S,ce.sibling),w=s(ce,z.props),w.ref=ns(S,ce,z),w.return=S,S=w;break e}n(S,ce);break}else t(S,ce);ce=ce.sibling}z.type===K?(w=Tn(z.props.children,S.mode,U,z.key),w.return=S,S=w):(U=So(z.type,z.key,z.props,null,S.mode,U),U.ref=ns(S,w,z),U.return=S,S=U)}return d(S);case R:e:{for(ce=z.key;w!==null;){if(w.key===ce)if(w.tag===4&&w.stateNode.containerInfo===z.containerInfo&&w.stateNode.implementation===z.implementation){n(S,w.sibling),w=s(w,z.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else t(S,w);w=w.sibling}w=jl(z,S.mode,U),w.return=S,S=w}return d(S);case me:return ce=z._init,Re(S,w,ce(z._payload),U)}if(qt(z))return te(S,w,z,U);if(oe(z))return re(S,w,z,U);to(S,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,w!==null&&w.tag===6?(n(S,w.sibling),w=s(w,z),w.return=S,S=w):(n(S,w),w=Cl(z,S.mode,U),w.return=S,S=w),d(S)):n(S,w)}return Re}var cr=Lc(!0),Ec=Lc(!1),no=on(null),ro=null,ur=null,Va=null;function Oa(){Va=ur=ro=null}function Da(e){var t=no.current;Ne(no),e._currentValue=t}function Ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){ro=e,Va=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Va!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(ro===null)throw Error(l(308));ur=e,ro.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var jn=null;function Za(e){jn===null?jn=[e]:jn.push(e)}function Sc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Za(t)):(n.next=s.next,s.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(_e&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Bt(e,n)}return s=r.interleaved,s===null?(t.next=t,Za(r)):(t.next=s.next,s.next=t),r.interleaved=t,Bt(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function Mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var s=e.updateQueue;cn=!1;var a=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var y=g,M=y.next;y.next=null,d===null?a=M:d.next=M,d=y;var D=e.alternate;D!==null&&(D=D.updateQueue,g=D.lastBaseUpdate,g!==d&&(g===null?D.firstBaseUpdate=M:g.next=M,D.lastBaseUpdate=y))}if(a!==null){var Z=s.baseState;d=0,D=M=y=null,g=a;do{var V=g.lane,q=g.eventTime;if((r&V)===V){D!==null&&(D=D.next={eventTime:q,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var te=e,re=g;switch(V=t,q=n,re.tag){case 1:if(te=re.payload,typeof te=="function"){Z=te.call(q,Z,V);break e}Z=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,V=typeof te=="function"?te.call(q,Z,V):te,V==null)break e;Z=G({},Z,V);break e;case 2:cn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,V=s.effects,V===null?s.effects=[g]:V.push(g))}else q={eventTime:q,lane:V,tag:g.tag,payload:g.payload,callback:g.callback,next:null},D===null?(M=D=q,y=Z):D=D.next=q,d|=V;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;V=g,g=V.next,V.next=null,s.lastBaseUpdate=V,s.shared.pending=null}}while(!0);if(D===null&&(y=Z),s.baseState=y,s.firstBaseUpdate=M,s.lastBaseUpdate=D,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Fn|=d,e.lanes=d,e.memoizedState=Z}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(l(191,s));s.call(r)}}}var rs={},Ht=on(rs),ss=on(rs),os=on(rs);function An(e){if(e===rs)throw Error(l(174));return e}function Ua(e,t){switch(je(os,t),je(ss,e),je(Ht,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:F(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=F(t,e)}Ne(Ht),je(Ht,t)}function pr(){Ne(Ht),Ne(ss),Ne(os)}function jc(e){An(os.current);var t=An(Ht.current),n=F(t,e.type);t!==n&&(je(ss,e),je(Ht,n))}function Wa(e){ss.current===e&&(Ne(Ht),Ne(ss))}var Pe=on(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function Qa(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var lo=X.ReactCurrentDispatcher,Ga=X.ReactCurrentBatchConfig,Nn=0,He=null,De=null,Ze=null,io=!1,as=!1,ls=0,gf=0;function qe(){throw Error(l(321))}function qa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Ya(e,t,n,r,s,a){if(Nn=a,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?wf:bf,e=n(r,s),as){a=0;do{if(as=!1,ls=0,25<=a)throw Error(l(301));a+=1,Ze=De=null,t.updateQueue=null,lo.current=kf,e=n(r,s)}while(as)}if(lo.current=po,t=De!==null&&De.next!==null,Nn=0,Ze=De=He=null,io=!1,t)throw Error(l(300));return e}function Ja(){var e=ls!==0;return ls=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?He.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function vt(){if(De===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ze===null?He.memoizedState:Ze.next;if(t!==null)Ze=t,De=e;else{if(e===null)throw Error(l(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ze===null?He.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function is(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=De,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var d=s.next;s.next=a.next,a.next=d}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var g=d=null,y=null,M=a;do{var D=M.lane;if((Nn&D)===D)y!==null&&(y=y.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),r=M.hasEagerState?M.eagerState:e(r,M.action);else{var Z={lane:D,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};y===null?(g=y=Z,d=r):y=y.next=Z,He.lanes|=D,Fn|=D}M=M.next}while(M!==null&&M!==a);y===null?d=r:y.next=g,Lt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=y,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,He.lanes|=a,Fn|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do a=e(a,d.action),d=d.next;while(d!==s);Lt(a,t.memoizedState)||(at=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ac(){}function Nc(e,t){var n=He,r=vt(),s=t(),a=!Lt(r.memoizedState,s);if(a&&(r.memoizedState=s,at=!0),r=r.queue,tl(Hc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,cs(9,Pc.bind(null,n,r,s,t),void 0,null),Be===null)throw Error(l(349));(Nn&30)!==0||Fc(n,t,s)}return s}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pc(e,t,n,r){t.value=n,t.getSnapshot=r,$c(t)&&Tc(e)}function Hc(e,t,n){return n(function(){$c(t)&&Tc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Tc(e){var t=Bt(e,1);t!==null&&Ct(t,e,1,-1)}function Rc(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=yf.bind(null,He,e),[t.memoizedState,e]}function cs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vc(){return vt().memoizedState}function co(e,t,n,r){var s=$t();He.flags|=e,s.memoizedState=cs(1|t,n,void 0,r===void 0?null:r)}function uo(e,t,n,r){var s=vt();r=r===void 0?null:r;var a=void 0;if(De!==null){var d=De.memoizedState;if(a=d.destroy,r!==null&&qa(r,d.deps)){s.memoizedState=cs(t,n,a,r);return}}He.flags|=e,s.memoizedState=cs(1|t,n,a,r)}function Oc(e,t){return co(8390656,8,e,t)}function tl(e,t){return uo(2048,8,e,t)}function Dc(e,t){return uo(4,2,e,t)}function Ic(e,t){return uo(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,Zc.bind(null,t,e),n)}function nl(){}function Uc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kc(e,t,n){return(Nn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(Lt(n,t)||(n=_i(),He.lanes|=n,Fn|=n,e.baseState=!0),t)}function vf(e,t){var n=Me;Me=n!==0&&4>n?n:4,e(!0);var r=Ga.transition;Ga.transition={};try{e(!1),t()}finally{Me=n,Ga.transition=r}}function Qc(){return vt().memoizedState}function xf(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))qc(t,n);else if(n=Sc(e,t,n,r),n!==null){var s=tt();Ct(n,e,r,s),Yc(n,t,r)}}function yf(e,t,n){var r=hn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))qc(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,g=a(d,n);if(s.hasEagerState=!0,s.eagerState=g,Lt(g,d)){var y=t.interleaved;y===null?(s.next=s,Za(t)):(s.next=y.next,y.next=s),t.interleaved=s;return}}catch{}finally{}n=Sc(e,t,s,r),n!==null&&(s=tt(),Ct(n,e,r,s),Yc(n,t,r))}}function Gc(e){var t=e.alternate;return e===He||t!==null&&t===He}function qc(e,t){as=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var po={readContext:gt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},wf={readContext:gt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,Zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xf.bind(null,He,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Rc,useDebugValue:nl,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Rc(!1),t=e[0];return e=vf.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=He,s=$t();if(Fe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Be===null)throw Error(l(349));(Nn&30)!==0||Fc(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Oc(Hc.bind(null,r,a,e),[e]),r.flags|=2048,cs(9,Pc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=$t(),t=Be.identifierPrefix;if(Fe){var n=Zt,r=It;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ls++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bf={readContext:gt,useCallback:Uc,useContext:gt,useEffect:tl,useImperativeHandle:Bc,useInsertionEffect:Dc,useLayoutEffect:Ic,useMemo:Wc,useReducer:Xa,useRef:Vc,useState:function(){return Xa(is)},useDebugValue:nl,useDeferredValue:function(e){var t=vt();return Kc(t,De.memoizedState,e)},useTransition:function(){var e=Xa(is)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Nc,useId:Qc,unstable_isNewReconciler:!1},kf={readContext:gt,useCallback:Uc,useContext:gt,useEffect:tl,useImperativeHandle:Bc,useInsertionEffect:Dc,useLayoutEffect:Ic,useMemo:Wc,useReducer:el,useRef:Vc,useState:function(){return el(is)},useDebugValue:nl,useDeferredValue:function(e){var t=vt();return De===null?t.memoizedState=e:Kc(t,De.memoizedState,e)},useTransition:function(){var e=el(is)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Nc,useId:Qc,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),s=hn(e),a=Ut(r,s);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,s),t!==null&&(Ct(t,e,s,r),so(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),s=hn(e),a=Ut(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,s),t!==null&&(Ct(t,e,s,r),so(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=hn(e),s=Ut(n,r);s.tag=2,t!=null&&(s.callback=t),t=un(e,s,r),t!==null&&(Ct(t,e,r,n),so(t,e,r))}};function Jc(e,t,n,r,s,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,d):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(s,a):!0}function Xc(e,t,n){var r=!1,s=an,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(s=ot(t)?zn:Ge.current,r=t.contextTypes,a=(r=r!=null)?or(e,s):an),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ba(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=gt(a):(a=ot(t)?zn:Ge.current,s.context=or(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rl(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&fo.enqueueReplaceState(s,s.state,null),oo(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=be(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function tu(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,bl=r),al(e,t)},n}function nu(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){al(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){al(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _f;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ou(e,t,n,r,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Lf=X.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?Ec(t,null,n,r):cr(t,e.child,n,r)}function au(e,t,n,r,s){n=n.render;var a=t.ref;return dr(t,s),r=Ya(e,t,n,r,a,s),n=Ja(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Wt(e,t,s)):(Fe&&n&&Pa(t),t.flags|=1,et(e,t,r,s),t.child)}function lu(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!Ml(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,iu(e,t,a,r,s)):(e=So(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(d,r)&&e.ref===t.ref)return Wt(e,t,s)}return t.flags|=1,e=gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function iu(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(Gr(a,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Wt(e,t,s)}return ll(e,t,n,r,s)}function cu(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(mr,ft),ft|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(mr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,je(mr,ft),ft|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,je(mr,ft),ft|=r;return et(e,t,s,n),t.child}function uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ll(e,t,n,r,s){var a=ot(n)?zn:Ge.current;return a=or(t,a),dr(t,s),n=Ya(e,t,n,r,a,s),r=Ja(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Wt(e,t,s)):(Fe&&r&&Pa(t),t.flags|=1,et(e,t,n,s),t.child)}function du(e,t,n,r,s){if(ot(n)){var a=!0;qs(t)}else a=!1;if(dr(t,s),t.stateNode===null)mo(e,t),Xc(t,n,r),sl(t,n,r,s),r=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,M=n.contextType;typeof M=="object"&&M!==null?M=gt(M):(M=ot(n)?zn:Ge.current,M=or(t,M));var D=n.getDerivedStateFromProps,Z=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function";Z||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==r||y!==M)&&eu(t,d,r,M),cn=!1;var V=t.memoizedState;d.state=V,oo(t,r,d,s),y=t.memoizedState,g!==r||V!==y||st.current||cn?(typeof D=="function"&&(rl(t,n,D,r),y=t.memoizedState),(g=cn||Jc(t,n,g,r,V,y,M))?(Z||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=y),d.props=r,d.state=y,d.context=M,r=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,zc(e,t),g=t.memoizedProps,M=t.type===t.elementType?g:St(t.type,g),d.props=M,Z=t.pendingProps,V=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=gt(y):(y=ot(n)?zn:Ge.current,y=or(t,y));var q=n.getDerivedStateFromProps;(D=typeof q=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==Z||V!==y)&&eu(t,d,r,y),cn=!1,V=t.memoizedState,d.state=V,oo(t,r,d,s);var te=t.memoizedState;g!==Z||V!==te||st.current||cn?(typeof q=="function"&&(rl(t,n,q,r),te=t.memoizedState),(M=cn||Jc(t,n,M,r,V,te,y)||!1)?(D||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,te,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,te,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=te),d.props=r,d.state=te,d.context=y,r=M):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),r=!1)}return il(e,t,n,r,a,s)}function il(e,t,n,r,s,a){uu(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return s&&gc(t,n,!1),Wt(e,t,a);r=t.stateNode,Lf.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=cr(t,e.child,null,a),t.child=cr(t,null,g,a)):et(e,t,g,a),t.memoizedState=r.state,s&&gc(t,n,!0),t.child}function pu(e){var t=e.stateNode;t.pendingContext?hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hc(e,t.context,!1),Ua(e,t.containerInfo)}function fu(e,t,n,r,s){return ir(),Ra(s),t.flags|=256,et(e,t,n,r),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function hu(e,t,n){var r=t.pendingProps,s=Pe.current,a=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),je(Pe,s&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,a?(r=t.mode,a=t.child,d={mode:"hidden",children:d},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=zo(d,r,0,null),e=Tn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ul(n),t.memoizedState=cl,e):dl(t,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return Ef(e,t,d,r,g,s,n);if(a){a=r.fallback,d=t.mode,s=e.child,g=s.sibling;var y={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=y,t.deletions=null):(r=gn(s,y),r.subtreeFlags=s.subtreeFlags&14680064),g!==null?a=gn(g,a):(a=Tn(a,d,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,d=e.child.memoizedState,d=d===null?ul(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,t.memoizedState=cl,r}return a=e.child,e=a.sibling,r=gn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dl(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&Ra(r),cr(t,e.child,null,n),e=dl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ef(e,t,n,r,s,a,d){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(l(422))),ho(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=zo({mode:"visible",children:r.children},s,0,null),a=Tn(a,s,d,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&cr(t,e.child,null,d),t.child.memoizedState=ul(d),t.memoizedState=cl,a);if((t.mode&1)===0)return ho(e,t,d,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var g=r.dgst;return r=g,a=Error(l(419)),r=ol(a,r,void 0),ho(e,t,d,r)}if(g=(d&e.childLanes)!==0,at||g){if(r=Be,r!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|d))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Bt(e,s),Ct(r,e,s,-1))}return zl(),r=ol(Error(l(421))),ho(e,t,d,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,pt=sn(s.nextSibling),dt=t,Fe=!0,Et=null,e!==null&&(ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=Mn,It=e.id,Zt=e.overflow,Mn=t),t=dl(t,r.children),t.flags|=4096,t)}function mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ia(e.return,t,n)}function pl(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function gu(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(et(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,n,t);else if(e.tag===19)mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),pl(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ao(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}pl(t,!0,n,null,a);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sf(e,t,n){switch(t.tag){case 3:pu(t),ir();break;case 5:jc(t);break;case 1:ot(t.type)&&qs(t);break;case 4:Ua(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;je(no,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?hu(e,t,n):(je(Pe,Pe.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);je(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return gu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),je(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,cu(e,t,n)}return Wt(e,t,n)}var vu,fl,xu,yu;vu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},fl=function(){},xu=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,An(Ht.current);var a=null;switch(n){case"input":s=jr(e,s),r=jr(e,r),a=[];break;case"select":s=G({},s,{value:void 0}),r=G({},r,{value:void 0}),a=[];break;case"textarea":s=Ar(e,s),r=Ar(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ks)}Ko(n,r);var d;n=null;for(M in s)if(!r.hasOwnProperty(M)&&s.hasOwnProperty(M)&&s[M]!=null)if(M==="style"){var g=s[M];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(p.hasOwnProperty(M)?a||(a=[]):(a=a||[]).push(M,null));for(M in r){var y=r[M];if(g=s!=null?s[M]:void 0,r.hasOwnProperty(M)&&y!==g&&(y!=null||g!=null))if(M==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(a||(a=[]),a.push(M,n)),n=y;else M==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(a=a||[]).push(M,y)):M==="children"?typeof y!="string"&&typeof y!="number"||(a=a||[]).push(M,""+y):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(p.hasOwnProperty(M)?(y!=null&&M==="onScroll"&&Ae("scroll",e),a||g===y||(a=[])):(a=a||[]).push(M,y))}n&&(a=a||[]).push("style",n);var M=a;(t.updateQueue=M)&&(t.flags|=4)}},yu=function(e,t,n,r){n!==r&&(t.flags|=4)};function us(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zf(e,t,n){var r=t.pendingProps;switch(Ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ot(t.type)&&Gs(),Ye(t),null;case 3:return r=t.stateNode,pr(),Ne(st),Ne(Ge),Qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Ll(Et),Et=null))),fl(e,t),Ye(t),null;case 5:Wa(t);var s=An(os.current);if(n=t.type,e!==null&&t.stateNode!=null)xu(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Ye(t),null}if(e=An(Ht.current),eo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Pt]=t,r[es]=a,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(s=0;s<Yr.length;s++)Ae(Yr[s],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":bs(r,a),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ae("invalid",r);break;case"textarea":Nr(r,a),Ae("invalid",r)}Ko(n,a),s=null;for(var d in a)if(a.hasOwnProperty(d)){var g=a[d];d==="children"?typeof g=="string"?r.textContent!==g&&(a.suppressHydrationWarning!==!0&&Ws(r.textContent,g,e),s=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(a.suppressHydrationWarning!==!0&&Ws(r.textContent,g,e),s=["children",""+g]):p.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Gt(r),ks(r,a,!0);break;case"textarea":Gt(r),_s(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ks)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[Pt]=t,e[es]=r,vu(e,t,!1,!1),t.stateNode=e;e:{switch(d=Qo(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),s=r;break;case"iframe":case"object":case"embed":Ae("load",e),s=r;break;case"video":case"audio":for(s=0;s<Yr.length;s++)Ae(Yr[s],e);s=r;break;case"source":Ae("error",e),s=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),s=r;break;case"details":Ae("toggle",e),s=r;break;case"input":bs(e,r),s=jr(e,r),Ae("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=G({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Nr(e,r),s=Ar(e,r),Ae("invalid",e);break;default:s=r}Ko(n,s),g=s;for(a in g)if(g.hasOwnProperty(a)){var y=g[a];a==="style"?Ls(e,y):a==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&we(e,y)):a==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&ve(e,y):typeof y=="number"&&ve(e,""+y):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?y!=null&&a==="onScroll"&&Ae("scroll",e):y!=null&&Y(e,a,y,d))}switch(n){case"input":Gt(e),ks(e,r,!1);break;case"textarea":Gt(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Se(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Yt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)yu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=An(os.current),An(Ht.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(a=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Ne(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)kc(),ir(),t.flags|=98560,a=!1;else if(a=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Pt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),a=!1}else Et!==null&&(Ll(Et),Et=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Ie===0&&(Ie=3):zl())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return pr(),fl(e,t),e===null&&Jr(t.stateNode.containerInfo),Ye(t),null;case 10:return Da(t.type._context),Ye(t),null;case 17:return ot(t.type)&&Gs(),Ye(t),null;case 19:if(Ne(Pe),a=t.memoizedState,a===null)return Ye(t),null;if(r=(t.flags&128)!==0,d=a.rendering,d===null)if(r)us(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=ao(e),d!==null){for(t.flags|=128,us(a,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Te()>gr&&(t.flags|=128,r=!0,us(a,!1),t.lanes=4194304)}else{if(!r)if(e=ao(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),us(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Fe)return Ye(t),null}else 2*Te()-a.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,us(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(n=a.last,n!==null?n.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Te(),t.sibling=null,n=Pe.current,je(Pe,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return Sl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Mf(e,t){switch(Ha(t),t.tag){case 1:return ot(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Ne(st),Ne(Ge),Qa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(Ne(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Pe),null;case 4:return pr(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var go=!1,Je=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,ee=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){$e(e,t,r)}}var wu=!1;function jf(e,t){if(Sa=Hs,e=Ji(),xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,M=0,D=0,Z=e,V=null;t:for(;;){for(var q;Z!==n||s!==0&&Z.nodeType!==3||(g=d+s),Z!==a||r!==0&&Z.nodeType!==3||(y=d+r),Z.nodeType===3&&(d+=Z.nodeValue.length),(q=Z.firstChild)!==null;)V=Z,Z=q;for(;;){if(Z===e)break t;if(V===n&&++M===s&&(g=d),V===a&&++D===r&&(y=d),(q=Z.nextSibling)!==null)break;Z=V,V=Z.parentNode}Z=q}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(za={focusedElem:e,selectionRange:n},Hs=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var te=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var re=te.memoizedProps,Re=te.memoizedState,S=t.stateNode,w=S.getSnapshotBeforeUpdate(t.elementType===t.type?re:St(t.type,re),Re);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var z=t.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(U){$e(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return te=wu,wu=!1,te}function ds(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&hl(t,n,a)}s=s.next}while(s!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bu(e){var t=e.alternate;t!==null&&(e.alternate=null,bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[es],delete t[Aa],delete t[pf],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ku(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}var We=null,zt=!1;function dn(e,t,n){for(n=n.child;n!==null;)Lu(e,t,n),n=n.sibling}function Lu(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Cs,n)}catch{}switch(n.tag){case 5:Je||hr(n,t);case 6:var r=We,s=zt;We=null,dn(e,t,n),We=r,zt=s,We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?ja(e.parentNode,n):e.nodeType===1&&ja(e,n),Zr(e)):ja(We,n.stateNode));break;case 4:r=We,s=zt,We=n.stateNode.containerInfo,zt=!0,dn(e,t,n),We=r,zt=s;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&hl(n,t,d),s=s.next}while(s!==r)}dn(e,t,n);break;case 1:if(!Je&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(g){$e(n,t,g)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,dn(e,t,n),Je=r):dn(e,t,n);break;default:dn(e,t,n)}}function Eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cf),t.forEach(function(r){var s=Vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:We=g.stateNode,zt=!1;break e;case 3:We=g.stateNode.containerInfo,zt=!0;break e;case 4:We=g.stateNode.containerInfo,zt=!0;break e}g=g.return}if(We===null)throw Error(l(160));Lu(a,d,s),We=null,zt=!1;var y=s.alternate;y!==null&&(y.return=null),s.return=null}catch(M){$e(s,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Su(t,e),t=t.sibling}function Su(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Tt(e),r&4){try{ds(3,e,e.return),vo(3,e)}catch(re){$e(e,e.return,re)}try{ds(5,e,e.return)}catch(re){$e(e,e.return,re)}}break;case 1:Mt(t,e),Tt(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(Mt(t,e),Tt(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var s=e.stateNode;try{ve(s,"")}catch(re){$e(e,e.return,re)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&a.type==="radio"&&a.name!=null&&Un(s,a),Qo(g,d);var M=Qo(g,a);for(d=0;d<y.length;d+=2){var D=y[d],Z=y[d+1];D==="style"?Ls(s,Z):D==="dangerouslySetInnerHTML"?we(s,Z):D==="children"?ve(s,Z):Y(s,D,Z,M)}switch(g){case"input":Wn(s,a);break;case"textarea":Fr(s,a);break;case"select":var V=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var q=a.value;q!=null?Yt(s,!!a.multiple,q,!1):V!==!!a.multiple&&(a.defaultValue!=null?Yt(s,!!a.multiple,a.defaultValue,!0):Yt(s,!!a.multiple,a.multiple?[]:"",!1))}s[es]=a}catch(re){$e(e,e.return,re)}}break;case 6:if(Mt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(re){$e(e,e.return,re)}}break;case 3:if(Mt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(re){$e(e,e.return,re)}break;case 4:Mt(t,e),Tt(e);break;case 13:Mt(t,e),Tt(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(wl=Te())),r&4&&Eu(e);break;case 22:if(D=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(M=Je)||D,Mt(t,e),Je=M):Mt(t,e),Tt(e),r&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!D&&(e.mode&1)!==0)for(ee=e,D=e.child;D!==null;){for(Z=ee=D;ee!==null;){switch(V=ee,q=V.child,V.tag){case 0:case 11:case 14:case 15:ds(4,V,V.return);break;case 1:hr(V,V.return);var te=V.stateNode;if(typeof te.componentWillUnmount=="function"){r=V,n=V.return;try{t=r,te.props=t.memoizedProps,te.state=t.memoizedState,te.componentWillUnmount()}catch(re){$e(r,n,re)}}break;case 5:hr(V,V.return);break;case 22:if(V.memoizedState!==null){Cu(Z);continue}}q!==null?(q.return=V,ee=q):Cu(Z)}D=D.sibling}e:for(D=null,Z=e;;){if(Z.tag===5){if(D===null){D=Z;try{s=Z.stateNode,M?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(g=Z.stateNode,y=Z.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Vt("display",d))}catch(re){$e(e,e.return,re)}}}else if(Z.tag===6){if(D===null)try{Z.stateNode.nodeValue=M?"":Z.memoizedProps}catch(re){$e(e,e.return,re)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===e)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===e)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===e)break e;D===Z&&(D=null),Z=Z.return}D===Z&&(D=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Mt(t,e),Tt(e),r&4&&Eu(e);break;case 21:break;default:Mt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ku(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ve(s,""),r.flags&=-33);var a=_u(e);vl(e,a,s);break;case 3:case 4:var d=r.stateNode.containerInfo,g=_u(e);gl(e,g,d);break;default:throw Error(l(161))}}catch(y){$e(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Af(e,t,n){ee=e,zu(e)}function zu(e,t,n){for(var r=(e.mode&1)!==0;ee!==null;){var s=ee,a=s.child;if(s.tag===22&&r){var d=s.memoizedState!==null||go;if(!d){var g=s.alternate,y=g!==null&&g.memoizedState!==null||Je;g=go;var M=Je;if(go=d,(Je=y)&&!M)for(ee=s;ee!==null;)d=ee,y=d.child,d.tag===22&&d.memoizedState!==null?ju(s):y!==null?(y.return=d,ee=y):ju(s);for(;a!==null;)ee=a,zu(a),a=a.sibling;ee=s,go=g,Je=M}Mu(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,ee=a):Mu(e)}}function Mu(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Cc(t,a,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var D=M.memoizedState;if(D!==null){var Z=D.dehydrated;Z!==null&&Zr(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||t.flags&512&&ml(t)}catch(V){$e(t,t.return,V)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Cu(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function ju(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(y){$e(t,n,y)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(y){$e(t,s,y)}}var a=t.return;try{ml(t)}catch(y){$e(t,a,y)}break;case 5:var d=t.return;try{ml(t)}catch(y){$e(t,d,y)}}}catch(y){$e(t,t.return,y)}if(t===e){ee=null;break}var g=t.sibling;if(g!==null){g.return=t.return,ee=g;break}ee=t.return}}var Nf=Math.ceil,xo=X.ReactCurrentDispatcher,xl=X.ReactCurrentOwner,xt=X.ReactCurrentBatchConfig,_e=0,Be=null,Ve=null,Ke=0,ft=0,mr=on(0),Ie=0,ps=null,Fn=0,yo=0,yl=0,fs=null,lt=null,wl=0,gr=1/0,Kt=null,wo=!1,bl=null,pn=null,bo=!1,fn=null,ko=0,hs=0,kl=null,_o=-1,Lo=0;function tt(){return(_e&6)!==0?Te():_o!==-1?_o:_o=Te()}function hn(e){return(e.mode&1)===0?1:(_e&2)!==0&&Ke!==0?Ke&-Ke:mf.transition!==null?(Lo===0&&(Lo=_i()),Lo):(e=Me,e!==0||(e=window.event,e=e===void 0?16:Ni(e.type)),e)}function Ct(e,t,n,r){if(50<hs)throw hs=0,kl=null,Error(l(185));Rr(e,n,r),((_e&2)===0||e!==Be)&&(e===Be&&((_e&2)===0&&(yo|=n),Ie===4&&mn(e,Ke)),it(e,r),n===1&&_e===0&&(t.mode&1)===0&&(gr=Te()+500,Ys&&ln()))}function it(e,t){var n=e.callbackNode;hp(e,t);var r=Ns(e,e===Be?Ke:0);if(r===0)n!==null&&wi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wi(n),t===1)e.tag===0?hf(Nu.bind(null,e)):vc(Nu.bind(null,e)),uf(function(){(_e&6)===0&&ln()}),n=null;else{switch(Li(r)){case 1:n=ta;break;case 4:n=bi;break;case 16:n=Ms;break;case 536870912:n=ki;break;default:n=Ms}n=Ou(n,Au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Au(e,t){if(_o=-1,Lo=0,(_e&6)!==0)throw Error(l(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ns(e,e===Be?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Eo(e,r);else{t=r;var s=_e;_e|=2;var a=Pu();(Be!==e||Ke!==t)&&(Kt=null,gr=Te()+500,Hn(e,t));do try{Hf();break}catch(g){Fu(e,g)}while(!0);Oa(),xo.current=a,_e=s,Ve!==null?t=0:(Be=null,Ke=0,t=Ie)}if(t!==0){if(t===2&&(s=na(e),s!==0&&(r=s,t=_l(e,s))),t===1)throw n=ps,Hn(e,0),mn(e,r),it(e,Te()),n;if(t===6)mn(e,r);else{if(s=e.current.alternate,(r&30)===0&&!Ff(s)&&(t=Eo(e,r),t===2&&(a=na(e),a!==0&&(r=a,t=_l(e,a))),t===1))throw n=ps,Hn(e,0),mn(e,r),it(e,Te()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:$n(e,lt,Kt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=wl+500-Te(),10<t)){if(Ns(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ca($n.bind(null,e,lt,Kt),t);break}$n(e,lt,Kt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var d=31-_t(r);a=1<<d,d=t[d],d>s&&(s=d),r&=~a}if(r=s,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nf(r/1960))-r,10<r){e.timeoutHandle=Ca($n.bind(null,e,lt,Kt),r);break}$n(e,lt,Kt);break;case 5:$n(e,lt,Kt);break;default:throw Error(l(329))}}}return it(e,Te()),e.callbackNode===n?Au.bind(null,e):null}function _l(e,t){var n=fs;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=Eo(e,t),e!==2&&(t=lt,lt=n,t!==null&&Ll(t)),e}function Ll(e){lt===null?lt=e:lt.push.apply(lt,e)}function Ff(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Lt(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~yl,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Nu(e){if((_e&6)!==0)throw Error(l(327));vr();var t=Ns(e,0);if((t&1)===0)return it(e,Te()),null;var n=Eo(e,t);if(e.tag!==0&&n===2){var r=na(e);r!==0&&(t=r,n=_l(e,r))}if(n===1)throw n=ps,Hn(e,0),mn(e,t),it(e,Te()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,lt,Kt),it(e,Te()),null}function El(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(gr=Te()+500,Ys&&ln())}}function Pn(e){fn!==null&&fn.tag===0&&(_e&6)===0&&vr();var t=_e;_e|=1;var n=xt.transition,r=Me;try{if(xt.transition=null,Me=1,e)return e()}finally{Me=r,xt.transition=n,_e=t,(_e&6)===0&&ln()}}function Sl(){ft=mr.current,Ne(mr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cf(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:pr(),Ne(st),Ne(Ge),Qa();break;case 5:Wa(r);break;case 4:pr();break;case 13:Ne(Pe);break;case 19:Ne(Pe);break;case 10:Da(r.type._context);break;case 22:case 23:Sl()}n=n.return}if(Be=e,Ve=e=gn(e.current,null),Ke=ft=t,Ie=0,ps=null,yl=yo=Fn=0,lt=fs=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var d=a.next;a.next=s,r.next=d}n.pending=r}jn=null}return e}function Fu(e,t){do{var n=Ve;try{if(Oa(),lo.current=po,io){for(var r=He.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}io=!1}if(Nn=0,Ze=De=He=null,as=!1,ls=0,xl.current=null,n===null||n.return===null){Ie=1,ps=t,Ve=null;break}e:{var a=e,d=n.return,g=n,y=t;if(t=Ke,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var M=y,D=g,Z=D.tag;if((D.mode&1)===0&&(Z===0||Z===11||Z===15)){var V=D.alternate;V?(D.updateQueue=V.updateQueue,D.memoizedState=V.memoizedState,D.lanes=V.lanes):(D.updateQueue=null,D.memoizedState=null)}var q=su(d);if(q!==null){q.flags&=-257,ou(q,d,g,a,t),q.mode&1&&ru(a,M,t),t=q,y=M;var te=t.updateQueue;if(te===null){var re=new Set;re.add(y),t.updateQueue=re}else te.add(y);break e}else{if((t&1)===0){ru(a,M,t),zl();break e}y=Error(l(426))}}else if(Fe&&g.mode&1){var Re=su(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),ou(Re,d,g,a,t),Ra(fr(y,g));break e}}a=y=fr(y,g),Ie!==4&&(Ie=2),fs===null?fs=[a]:fs.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var S=tu(a,y,t);Mc(a,S);break e;case 1:g=y;var w=a.type,z=a.stateNode;if((a.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(pn===null||!pn.has(z)))){a.flags|=65536,t&=-t,a.lanes|=t;var U=nu(a,g,t);Mc(a,U);break e}}a=a.return}while(a!==null)}$u(n)}catch(se){t=se,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Pu(){var e=xo.current;return xo.current=po,e===null?po:e}function zl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Be===null||(Fn&268435455)===0&&(yo&268435455)===0||mn(Be,Ke)}function Eo(e,t){var n=_e;_e|=2;var r=Pu();(Be!==e||Ke!==t)&&(Kt=null,Hn(e,t));do try{Pf();break}catch(s){Fu(e,s)}while(!0);if(Oa(),_e=n,xo.current=r,Ve!==null)throw Error(l(261));return Be=null,Ke=0,Ie}function Pf(){for(;Ve!==null;)Hu(Ve)}function Hf(){for(;Ve!==null&&!op();)Hu(Ve)}function Hu(e){var t=Vu(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?$u(e):Ve=t,xl.current=null}function $u(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=zf(n,t,ft),n!==null){Ve=n;return}}else{if(n=Mf(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ve=null;return}}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ie===0&&(Ie=5)}function $n(e,t,n){var r=Me,s=xt.transition;try{xt.transition=null,Me=1,$f(e,t,n,r)}finally{xt.transition=s,Me=r}return null}function $f(e,t,n,r){do vr();while(fn!==null);if((_e&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(mp(e,a),e===Be&&(Ve=Be=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bo||(bo=!0,Ou(Ms,function(){return vr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=xt.transition,xt.transition=null;var d=Me;Me=1;var g=_e;_e|=4,xl.current=null,jf(e,n),Su(n,e),tf(za),Hs=!!Sa,za=Sa=null,e.current=n,Af(n),ap(),_e=g,Me=d,xt.transition=a}else e.current=n;if(bo&&(bo=!1,fn=e,ko=s),a=e.pendingLanes,a===0&&(pn=null),cp(n.stateNode),it(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(wo)throw wo=!1,e=bl,bl=null,e;return(ko&1)!==0&&e.tag!==0&&vr(),a=e.pendingLanes,(a&1)!==0?e===kl?hs++:(hs=0,kl=e):hs=0,ln(),null}function vr(){if(fn!==null){var e=Li(ko),t=xt.transition,n=Me;try{if(xt.transition=null,Me=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,ko=0,(_e&6)!==0)throw Error(l(331));var s=_e;for(_e|=4,ee=e.current;ee!==null;){var a=ee,d=a.child;if((ee.flags&16)!==0){var g=a.deletions;if(g!==null){for(var y=0;y<g.length;y++){var M=g[y];for(ee=M;ee!==null;){var D=ee;switch(D.tag){case 0:case 11:case 15:ds(8,D,a)}var Z=D.child;if(Z!==null)Z.return=D,ee=Z;else for(;ee!==null;){D=ee;var V=D.sibling,q=D.return;if(bu(D),D===M){ee=null;break}if(V!==null){V.return=q,ee=V;break}ee=q}}}var te=a.alternate;if(te!==null){var re=te.child;if(re!==null){te.child=null;do{var Re=re.sibling;re.sibling=null,re=Re}while(re!==null)}}ee=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,ee=d;else e:for(;ee!==null;){if(a=ee,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ds(9,a,a.return)}var S=a.sibling;if(S!==null){S.return=a.return,ee=S;break e}ee=a.return}}var w=e.current;for(ee=w;ee!==null;){d=ee;var z=d.child;if((d.subtreeFlags&2064)!==0&&z!==null)z.return=d,ee=z;else e:for(d=w;ee!==null;){if(g=ee,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:vo(9,g)}}catch(se){$e(g,g.return,se)}if(g===d){ee=null;break e}var U=g.sibling;if(U!==null){U.return=g.return,ee=U;break e}ee=g.return}}if(_e=s,ln(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Cs,e)}catch{}r=!0}return r}finally{Me=n,xt.transition=t}}return!1}function Tu(e,t,n){t=fr(n,t),t=tu(e,t,1),e=un(e,t,1),t=tt(),e!==null&&(Rr(e,1,t),it(e,t))}function $e(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=fr(n,e),e=nu(t,e,1),t=un(t,e,1),e=tt(),t!==null&&(Rr(t,1,e),it(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ke&n)===n&&(Ie===4||Ie===3&&(Ke&130023424)===Ke&&500>Te()-wl?Hn(e,0):yl|=n),it(e,t)}function Ru(e,t){t===0&&((e.mode&1)===0?t=1:(t=As,As<<=1,(As&130023424)===0&&(As=4194304)));var n=tt();e=Bt(e,t),e!==null&&(Rr(e,t,n),it(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ru(e,n)}function Vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),Ru(e,n)}var Vu;Vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,Sf(e,t,n);at=(e.flags&131072)!==0}else at=!1,Fe&&(t.flags&1048576)!==0&&xc(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mo(e,t),e=t.pendingProps;var s=or(t,Ge.current);dr(t,n),s=Ya(null,t,r,e,s,n);var a=Ja();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(a=!0,qs(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ba(t),s.updater=fo,t.stateNode=s,s._reactInternals=t,sl(t,r,e,n),t=il(null,t,r,!0,a,n)):(t.tag=0,Fe&&a&&Pa(t),et(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Df(r),e=St(r,e),s){case 0:t=ll(null,t,r,e,n);break e;case 1:t=du(null,t,r,e,n);break e;case 11:t=au(null,t,r,e,n);break e;case 14:t=lu(null,t,r,St(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:St(r,s),ll(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:St(r,s),du(e,t,r,s,n);case 3:e:{if(pu(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,s=a.element,zc(e,t),oo(t,r,null,n);var d=t.memoizedState;if(r=d.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=fr(Error(l(423)),t),t=fu(e,t,r,n,s);break e}else if(r!==s){s=fr(Error(l(424)),t),t=fu(e,t,r,n,s);break e}else for(pt=sn(t.stateNode.containerInfo.firstChild),dt=t,Fe=!0,Et=null,n=Ec(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===s){t=Wt(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return jc(t),e===null&&Ta(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,d=s.children,Ma(r,s)?d=null:a!==null&&Ma(r,a)&&(t.flags|=32),uu(e,t),et(e,t,d,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return hu(e,t,n);case 4:return Ua(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:St(r,s),au(e,t,r,s,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,d=s.value,je(no,r._currentValue),r._currentValue=d,a!==null)if(Lt(a.value,d)){if(a.children===s.children&&!st.current){t=Wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var g=a.dependencies;if(g!==null){d=a.child;for(var y=g.firstContext;y!==null;){if(y.context===r){if(a.tag===1){y=Ut(-1,n&-n),y.tag=2;var M=a.updateQueue;if(M!==null){M=M.shared;var D=M.pending;D===null?y.next=y:(y.next=D.next,D.next=y),M.pending=y}}a.lanes|=n,y=a.alternate,y!==null&&(y.lanes|=n),Ia(a.return,n,t),g.lanes|=n;break}y=y.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),Ia(d,n,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}et(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dr(t,n),s=gt(s),r=r(s),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,s=St(r,t.pendingProps),s=St(r.type,s),lu(e,t,r,s,n);case 15:return iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:St(r,s),mo(e,t),t.tag=1,ot(r)?(e=!0,qs(t)):e=!1,dr(t,n),Xc(t,r,s),sl(t,r,s,n),il(null,t,r,!0,e,n);case 19:return gu(e,t,n);case 22:return cu(e,t,n)}throw Error(l(156,t.tag))};function Ou(e,t){return yi(e,t)}function Of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Of(e,t,n,r)}function Ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Df(e){if(typeof e=="function")return Ml(e)?1:0;if(e!=null){if(e=e.$$typeof,e===B)return 11;if(e===xe)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,s,a){var d=2;if(r=e,typeof e=="function")Ml(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case K:return Tn(n.children,s,a,t);case de:d=8,s|=8;break;case he:return e=yt(12,n,t,s|2),e.elementType=he,e.lanes=a,e;case T:return e=yt(13,n,t,s),e.elementType=T,e.lanes=a,e;case $:return e=yt(19,n,t,s),e.elementType=$,e.lanes=a,e;case pe:return zo(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:d=10;break e;case ae:d=9;break e;case B:d=11;break e;case xe:d=14;break e;case me:d=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(d,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function Tn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function zo(e,t,n,r){return e=yt(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function If(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Al(e,t,n,r,s,a,d,g,y){return e=new If(e,t,n,g,y),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(a),e}function Zf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Du(e){if(!e)return an;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ot(n))return mc(e,n,t)}return t}function Iu(e,t,n,r,s,a,d,g,y){return e=Al(n,r,!0,e,s,a,d,g,y),e.context=Du(null),n=e.current,r=tt(),s=hn(n),a=Ut(r,s),a.callback=t??null,un(n,a,s),e.current.lanes=s,Rr(e,s,r),it(e,r),e}function Mo(e,t,n,r){var s=t.current,a=tt(),d=hn(s);return n=Du(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(a,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(s,t,d),e!==null&&(Ct(e,s,d,a),so(e,s,d)),d}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function Bf(){return null}var Bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}jo.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Mo(e,t,null,null)},jo.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Mo(null,e,null,null)}),t[Ot]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=zi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&ji(e)}};function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function Uf(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var M=Co(d);a.call(M)}}var d=Iu(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=d,e[Ot]=d.current,Jr(e.nodeType===8?e.parentNode:e),Pn(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var g=r;r=function(){var M=Co(y);g.call(M)}}var y=Al(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=y,e[Ot]=y.current,Jr(e.nodeType===8?e.parentNode:e),Pn(function(){Mo(t,y,n,r)}),y}function No(e,t,n,r,s){var a=n._reactRootContainer;if(a){var d=a;if(typeof s=="function"){var g=s;s=function(){var y=Co(d);g.call(y)}}Mo(t,d,e,s)}else d=Uf(n,t,e,s,r);return Co(d)}Ei=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(sa(t,n|1),it(t,Te()),(_e&6)===0&&(gr=Te()+500,ln()))}break;case 13:Pn(function(){var r=Bt(e,1);if(r!==null){var s=tt();Ct(r,e,1,s)}}),Nl(e,1)}},oa=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=tt();Ct(t,e,134217728,n)}Nl(e,134217728)}},Si=function(e){if(e.tag===13){var t=hn(e),n=Bt(e,t);if(n!==null){var r=tt();Ct(n,e,t,r)}Nl(e,t)}},zi=function(){return Me},Mi=function(e,t){var n=Me;try{return Me=e,t()}finally{Me=n}},Yo=function(e,t,n){switch(t){case"input":if(Wn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Qs(r);if(!s)throw Error(l(90));ws(r),Wn(r,s)}}}break;case"textarea":Fr(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}},pi=El,fi=Pn;var Wf={usingClientEntryPoint:!1,Events:[ts,rr,Qs,ui,di,El]},ms={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vi(e),e===null?null:e.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||Bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Cs=Fo.inject(Kf),Ft=Fo}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf,ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pl(t))throw Error(l(200));return Zf(e,t,null,n)},ct.createRoot=function(e,t){if(!Pl(e))throw Error(l(299));var n=!1,r="",s=Bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Al(e,1,!1,null,null,n,!1,r,s),e[Ot]=t.current,Jr(e.nodeType===8?e.parentNode:e),new Fl(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=vi(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return Pn(e)},ct.hydrate=function(e,t,n){if(!Ao(t))throw Error(l(200));return No(null,e,t,!0,n)},ct.hydrateRoot=function(e,t,n){if(!Pl(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",d=Bu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Iu(t,null,e,1,n??null,s,!1,a,d),e[Ot]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new jo(t)},ct.render=function(e,t,n){if(!Ao(t))throw Error(l(200));return No(null,e,t,!1,n)},ct.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(l(40));return e._reactRootContainer?(Pn(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},ct.unstable_batchedUpdates=El,ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ao(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return No(e,t,n,!1,r)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var Xu;function n0(){if(Xu)return Tl.exports;Xu=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Tl.exports=t0(),Tl.exports}var ed;function r0(){if(ed)return Po;ed=1;var o=n0();return Po.createRoot=o.createRoot,Po.hydrateRoot=o.hydrateRoot,Po}var s0=r0();const o0=Gf(s0),a0="modulepreload",l0=function(o,i){return new URL(o,i).href},td={},xr=function(i,l,c){let p=Promise.resolve();if(l&&l.length>0){let m=function(E){return Promise.all(E.map(b=>Promise.resolve(b).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};const v=document.getElementsByTagName("link"),x=document.querySelector("meta[property=csp-nonce]"),L=(x==null?void 0:x.nonce)||(x==null?void 0:x.getAttribute("nonce"));p=m(l.map(E=>{if(E=l0(E,c),E in td)return;td[E]=!0;const b=E.endsWith(".css"),C=b?'[rel="stylesheet"]':"";if(!!c)for(let j=v.length-1;j>=0;j--){const H=v[j];if(H.href===E&&(!b||H.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${C}`))return;const I=document.createElement("link");if(I.rel=b?"stylesheet":a0,b||(I.as="script"),I.crossOrigin="",I.href=E,L&&I.setAttribute("nonce",L),document.head.appendChild(I),b)return new Promise((j,H)=>{I.addEventListener("load",j),I.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${E}`)))})}))}function h(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return p.then(m=>{for(const v of m||[])v.status==="rejected"&&h(v.reason);return i().catch(h)})},ql={toggle:()=>xr(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>xr(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>xr(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>xr(()=>import("./press-h_enDfSn.js"),[],import.meta.url),slide:()=>xr(()=>import("./slide-CxPKTNuS.js"),[],import.meta.url),reveal:()=>xr(()=>import("./reveal-DJs7Ppoh.js"),[],import.meta.url)};let _r=null,nd=!1;const Sd=new Set,Do=new Map,Ho=new Map;function ni(){if(_r)return _r;const o=window.AudioContext||window.webkitAudioContext;return o?(_r=new o,_r):null}function ri(o){if(Do.has(o))return Promise.resolve(Do.get(o));if(Ho.has(o))return Ho.get(o);const i=ni();if(!i||!ql[o])return Promise.resolve(null);const l=ql[o]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>i.decodeAudioData(c)).then(c=>(Do.set(o,c),c)).catch(()=>null).finally(()=>Ho.delete(o));return Ho.set(o,l),l}function i0(){const o=ni();o&&(o.state==="suspended"&&o.resume(),Sd.forEach(ri))}function c0(o){if(typeof window>"u"||!ql[o])return;if(Sd.add(o),_r&&_r.state!=="suspended"){ri(o);return}if(nd)return;nd=!0;const i={capture:!0,passive:!0},l=()=>{window.removeEventListener("pointerdown",l,i),window.removeEventListener("keydown",l,i),i0()};window.addEventListener("pointerdown",l,i),window.addEventListener("keydown",l,i)}const u0=120;function d0(o,i=1){if(typeof window>"u"||i<=0)return;const l=ni();if(!l)return;l.state==="suspended"&&l.resume();const c=Do.get(o);if(!c){const p=performance.now();ri(o).then(h=>{h&&performance.now()-p<=u0&&rd(l,h,i)});return}rd(l,c,i)}function rd(o,i,l){const c=o.createBufferSource(),p=o.createGain();p.gain.value=Math.min(1,l),c.buffer=i,c.connect(p).connect(o.destination),c.start()}const zd=.7,Md=u.createContext({enabled:!0,volume:zd});function p0({enabled:o=!0,volume:i=zd,children:l}){return f.jsx(Md.Provider,{value:{enabled:o,volume:i},children:l})}function Cr(o,i=!0){const{enabled:l,volume:c}=u.useContext(Md),p=l&&i;return u.useEffect(()=>{p&&c0(o)},[o,p]),u.useCallback(()=>{p&&d0(o,c)},[o,p,c])}const f0=`/* ============================================================
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
  --sc-p-color-black-rgb: 0 0 0;
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
  --sc-color-input-well-raised: rgb(var(--sc-p-color-ink-rgb) / 0.07);
  --sc-color-input-adornment: var(--sc-p-color-warm-gray-500);
  --sc-color-input-divider: var(--sc-p-color-warm-gray-300);
  --sc-color-card-flat: var(--sc-color-surface-floating);
  --sc-color-card-flat-hover: var(--sc-p-color-utility-white);
  --sc-color-card-glass-clear-light: rgb(var(--sc-p-color-white-rgb) / 0.16);
  --sc-color-card-glass-clear-dark: rgb(var(--sc-p-color-ink-rgb) / 0.06);
  --sc-color-card-glass-clear-auto: var(--sc-color-card-glass-clear-light);
  --sc-color-card-glass-frosted-light: rgb(var(--sc-p-color-white-rgb) / 0.24);
  --sc-color-card-glass-frosted-dark: rgb(var(--sc-p-color-ink-rgb) / 0.10);
  --sc-color-card-glass-frosted-auto: var(--sc-color-card-glass-frosted-light);
  --sc-color-card-glass-thick-light: rgb(var(--sc-p-color-white-rgb) / 0.36);
  --sc-color-card-glass-thick-dark: rgb(var(--sc-p-color-ink-rgb) / 0.16);
  --sc-color-card-glass-thick-auto: var(--sc-color-card-glass-thick-light);
  --sc-color-card-glass-hover-light: rgb(var(--sc-p-color-white-rgb) / 0.08);
  --sc-color-card-glass-hover-dark: rgb(var(--sc-p-color-ink-rgb) / 0.06);
  --sc-color-card-glass-hover-auto: var(--sc-color-card-glass-hover-light);
  --sc-color-status-pill-progress-fill: var(--sc-p-color-signal-progress);
  --sc-color-status-pill-progress-ink: var(--sc-color-signal-on-progress);
  --sc-color-status-pill-success-fill: var(--sc-color-status-success-ink);
  --sc-color-status-pill-success-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-warning-fill: var(--sc-color-status-warning);
  --sc-color-status-pill-warning-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-error-fill: var(--sc-color-status-error);
  --sc-color-status-pill-error-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-info-fill: var(--sc-color-status-info);
  --sc-color-status-pill-info-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-live-fill: var(--sc-p-color-signal-live);
  --sc-color-status-pill-live-ink: var(--sc-color-text-on-inverse);
  --sc-color-tooltip-surface: var(--sc-p-color-utility-white);
  --sc-color-tooltip-text: var(--sc-p-color-warm-gray-800);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-status-pill: var(--sc-radius-pill);
  --sc-radius-tooltip: var(--sc-p-space-4);
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
  --sc-shadow-card-glass-clear: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.20), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.1), 4px 4px 16px 0 rgb(100 91 79 / 0.12);
  --sc-shadow-card-glass-frosted: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.30), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.15), 6px 6px 24px 0 rgb(100 91 79 / 0.14);
  --sc-shadow-card-glass-thick: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.45), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.225), 10px 10px 32px 0 rgb(100 91 79 / 0.18);
  --sc-shadow-card-glass-text-light: 0 0 2px rgb(var(--sc-p-color-white-rgb) / 0.60);
  --sc-shadow-card-glass-text-dark: 0 0 2px rgb(var(--sc-p-color-white-rgb) / 0.50);
  --sc-shadow-card-glass-text-auto: var(--sc-shadow-card-glass-text-light);
  --sc-shadow-tooltip-plate: 2px 2px 6px 0 rgb(100 91 79 / 0.50);
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
  --sc-motion-status-pill-pulse-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-status-pill-pulse-easing: var(--sc-p-motion-easing-in-out);
  --sc-motion-status-pill-pulse-from: 0.25;
  --sc-motion-tooltip-travel-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-tooltip-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-tooltip-stretch: 2;
  --sc-motion-tooltip-squash: 2;
  --sc-motion-tooltip-grow-from: 0;
  --sc-motion-stepper-travel-duration: 1062ms;
  --sc-motion-stepper-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-stepper-glyph-press-scale: 0.85;
  --sc-motion-stepper-roll: 1;
  --sc-motion-stepper-stretch: 0.45;
  --sc-motion-stepper-squash: 0;
  --sc-motion-slider-travel-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-slider-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-slider-drag-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-drag-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-stretch: 0.45;
  --sc-motion-slider-squash: 0;
  --sc-motion-slider-thumb-press-scale: 0.985;
  --sc-motion-card-press-scale: var(--sc-motion-press-scale);
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
  --sc-size-status-pill-dash: var(--sc-p-border-width-accent);
  --sc-size-status-pill-dash-gap: var(--sc-p-border-width-accent);
  --sc-size-status-pill-dash-width: var(--sc-p-border-width-focus);
  --sc-size-status-pill-glow: var(--sc-p-space-8);
  --sc-size-status-pill-icon: var(--sc-p-space-12);
  --sc-size-tooltip-arrow: var(--sc-p-space-8);
  --sc-size-tooltip-arrow-tip: var(--sc-p-space-micro-2);
  --sc-size-tooltip-arrow-fillet: var(--sc-p-space-micro-2);
  --sc-size-tooltip-lift: var(--sc-p-space-4);
  --sc-size-card-glass-clear-frost: var(--sc-p-space-4);
  --sc-size-card-glass-clear-refraction: 40;
  --sc-size-card-glass-clear-depth: 40;
  --sc-size-card-glass-clear-splay: 57;
  --sc-size-card-glass-clear-saturation: 140;
  --sc-size-card-glass-clear-light: 20;
  --sc-size-card-glass-frosted-frost: 9px;
  --sc-size-card-glass-frosted-refraction: 65;
  --sc-size-card-glass-frosted-depth: 68;
  --sc-size-card-glass-frosted-splay: 57;
  --sc-size-card-glass-frosted-saturation: 160;
  --sc-size-card-glass-frosted-light: 30;
  --sc-size-card-glass-thick-frost: var(--sc-p-space-16);
  --sc-size-card-glass-thick-refraction: 85;
  --sc-size-card-glass-thick-depth: 85;
  --sc-size-card-glass-thick-splay: 57;
  --sc-size-card-glass-thick-saturation: 180;
  --sc-size-card-glass-thick-light: 45;
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
  --sc-size-input-icon: var(--sc-p-space-20);
  --sc-size-input-clear: var(--sc-p-space-16);
  --sc-size-input-clear-target: var(--sc-p-space-32);
  --sc-size-slider-track: var(--sc-p-space-4);
  --sc-size-slider-track-active: var(--sc-p-space-micro-6);
  --sc-size-slider-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-slider-thumb: var(--sc-p-space-16);
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
  --sc-space-component-padding-inline-tooltip: var(--sc-p-space-12);
  --sc-space-component-padding-inline-status-pill: var(--sc-p-space-12);
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-padding-block-tooltip: var(--sc-p-space-8);
  --sc-space-component-padding-block-status-pill: var(--sc-p-space-4);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-component-gap-tooltip: var(--sc-p-space-24);
  --sc-space-component-gap-status-pill: var(--sc-p-space-micro-6);
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
  --sc-color-input-well-raised: rgb(var(--sc-p-color-white-rgb) / 0.15);
  --sc-color-input-adornment: var(--sc-p-color-dark-text-secondary);
  --sc-color-input-divider: var(--sc-p-color-dark-raised2);
  --sc-color-card-flat: var(--sc-color-surface-floating);
  --sc-color-card-flat-hover: var(--sc-p-color-dark-raised3);
  --sc-color-card-glass-clear-light: rgb(var(--sc-p-color-white-rgb) / 0.05);
  --sc-color-card-glass-clear-dark: rgb(var(--sc-p-color-black-rgb) / 0.20);
  --sc-color-card-glass-clear-auto: var(--sc-color-card-glass-clear-dark);
  --sc-color-card-glass-frosted-light: rgb(var(--sc-p-color-white-rgb) / 0.08);
  --sc-color-card-glass-frosted-dark: rgb(var(--sc-p-color-black-rgb) / 0.32);
  --sc-color-card-glass-frosted-auto: var(--sc-color-card-glass-frosted-dark);
  --sc-color-card-glass-thick-light: rgb(var(--sc-p-color-white-rgb) / 0.12);
  --sc-color-card-glass-thick-dark: rgb(var(--sc-p-color-black-rgb) / 0.45);
  --sc-color-card-glass-thick-auto: var(--sc-color-card-glass-thick-dark);
  --sc-color-card-glass-hover-light: rgb(var(--sc-p-color-white-rgb) / 0.05);
  --sc-color-card-glass-hover-dark: rgb(var(--sc-p-color-black-rgb) / 0.12);
  --sc-color-card-glass-hover-auto: var(--sc-color-card-glass-hover-dark);
  --sc-color-status-pill-progress-fill: var(--sc-p-color-signal-progress);
  --sc-color-status-pill-progress-ink: var(--sc-color-signal-on-progress);
  --sc-color-status-pill-success-fill: var(--sc-color-status-success-ink);
  --sc-color-status-pill-success-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-warning-fill: var(--sc-color-status-warning);
  --sc-color-status-pill-warning-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-error-fill: var(--sc-color-status-error);
  --sc-color-status-pill-error-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-info-fill: var(--sc-color-status-info);
  --sc-color-status-pill-info-ink: var(--sc-color-text-on-inverse);
  --sc-color-status-pill-live-fill: var(--sc-p-color-signal-live);
  --sc-color-status-pill-live-ink: var(--sc-color-text-on-inverse);
  --sc-color-tooltip-surface: var(--sc-p-color-dark-raised1);
  --sc-color-tooltip-text: var(--sc-p-color-dark-text-primary);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-status-pill: var(--sc-radius-pill);
  --sc-radius-tooltip: var(--sc-p-space-4);
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
  --sc-shadow-card-glass-clear: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.20), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.1), 4px 4px 16px 0 rgb(0 0 0 / 0.24);
  --sc-shadow-card-glass-frosted: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.30), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.15), 6px 6px 24px 0 rgb(0 0 0 / 0.30);
  --sc-shadow-card-glass-thick: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.45), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.225), 10px 10px 32px 0 rgb(0 0 0 / 0.38);
  --sc-shadow-card-glass-text-light: 0 0 2px rgb(0 0 0 / 0.60);
  --sc-shadow-card-glass-text-dark: 0 0 2px rgb(0 0 0 / 0.70);
  --sc-shadow-card-glass-text-auto: var(--sc-shadow-card-glass-text-dark);
  --sc-shadow-tooltip-plate: 3px 3px 7px 0 rgb(0 0 0 / 0.50);
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
  --sc-motion-status-pill-pulse-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-status-pill-pulse-easing: var(--sc-p-motion-easing-in-out);
  --sc-motion-status-pill-pulse-from: 0.25;
  --sc-motion-tooltip-travel-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-tooltip-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-tooltip-stretch: 2;
  --sc-motion-tooltip-squash: 2;
  --sc-motion-tooltip-grow-from: 0;
  --sc-motion-stepper-travel-duration: 1062ms;
  --sc-motion-stepper-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-stepper-glyph-press-scale: 0.85;
  --sc-motion-stepper-roll: 1;
  --sc-motion-stepper-stretch: 0.45;
  --sc-motion-stepper-squash: 0;
  --sc-motion-slider-travel-duration: var(--sc-p-motion-duration-orchestrated);
  --sc-motion-slider-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-slider-drag-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-drag-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-stretch: 0.45;
  --sc-motion-slider-squash: 0;
  --sc-motion-slider-thumb-press-scale: 0.985;
  --sc-motion-card-press-scale: var(--sc-motion-press-scale);
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
  --sc-size-status-pill-dash: var(--sc-p-border-width-accent);
  --sc-size-status-pill-dash-gap: var(--sc-p-border-width-accent);
  --sc-size-status-pill-dash-width: var(--sc-p-border-width-focus);
  --sc-size-status-pill-glow: var(--sc-p-space-8);
  --sc-size-status-pill-icon: var(--sc-p-space-12);
  --sc-size-tooltip-arrow: var(--sc-p-space-8);
  --sc-size-tooltip-arrow-tip: var(--sc-p-space-micro-2);
  --sc-size-tooltip-arrow-fillet: var(--sc-p-space-micro-2);
  --sc-size-tooltip-lift: var(--sc-p-space-4);
  --sc-size-card-glass-clear-frost: var(--sc-p-space-4);
  --sc-size-card-glass-clear-refraction: 40;
  --sc-size-card-glass-clear-depth: 40;
  --sc-size-card-glass-clear-splay: 57;
  --sc-size-card-glass-clear-saturation: 140;
  --sc-size-card-glass-clear-light: 20;
  --sc-size-card-glass-frosted-frost: 9px;
  --sc-size-card-glass-frosted-refraction: 65;
  --sc-size-card-glass-frosted-depth: 68;
  --sc-size-card-glass-frosted-splay: 57;
  --sc-size-card-glass-frosted-saturation: 160;
  --sc-size-card-glass-frosted-light: 30;
  --sc-size-card-glass-thick-frost: var(--sc-p-space-16);
  --sc-size-card-glass-thick-refraction: 85;
  --sc-size-card-glass-thick-depth: 85;
  --sc-size-card-glass-thick-splay: 57;
  --sc-size-card-glass-thick-saturation: 180;
  --sc-size-card-glass-thick-light: 45;
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
  --sc-size-input-icon: var(--sc-p-space-20);
  --sc-size-input-clear: var(--sc-p-space-16);
  --sc-size-input-clear-target: var(--sc-p-space-32);
  --sc-size-slider-track: var(--sc-p-space-4);
  --sc-size-slider-track-active: var(--sc-p-space-micro-6);
  --sc-size-slider-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-slider-thumb: var(--sc-p-space-16);
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
  --sc-space-component-padding-inline-tooltip: var(--sc-p-space-12);
  --sc-space-component-padding-inline-status-pill: var(--sc-p-space-12);
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-padding-block-tooltip: var(--sc-p-space-8);
  --sc-space-component-padding-block-status-pill: var(--sc-p-space-4);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-component-gap-tooltip: var(--sc-p-space-24);
  --sc-space-component-gap-status-pill: var(--sc-p-space-micro-6);
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}
`,sd=5e-4,h0=6e3,od=60;function m0({stiffness:o,damping:i,mass:l}){let c=0,p=0;const h=.001,m=[0];let v=0,x=0;for(;v<h0;){const L=(-o*(c-1)-i*p)/l;if(p+=L*h,c+=p*h,v+=1,m.push(c),c>x&&(x=c),Math.abs(c-1)<sd&&Math.abs(p)<sd)break}return{trace:m,settleMs:v,overshoot:Math.max(0,x-1)}}function Zo(o){const{trace:i,settleMs:l,overshoot:c}=m0(o),p=[];for(let h=0;h<od;h+=1){const m=Math.round(h/(od-1)*(i.length-1));p.push(+i[m].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:l,overshoot:c}}const $o=60,ad={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function g0([o,i,l,c],p){const h=(x,L,E)=>3*(1-E)**2*E*x+3*(1-E)*E**2*L+E**3;let m=0,v=1;for(let x=0;x<40;x+=1){const L=(m+v)/2;h(o,l,L)<p?m=L:v=L}return h(i,c,(m+v)/2)}function v0(o){const i=[];for(const l of o.split(",")){const[c,...p]=l.trim().split(/\s+/);p.length||i.push({v:+c,x:null});for(const h of p)i.push({v:+c,x:parseFloat(h)/100})}i[0].x===null&&(i[0].x=0),i.at(-1).x===null&&(i.at(-1).x=1);for(let l=1;l<i.length;l+=1){if(i[l].x!==null){i[l].x=Math.max(i[l].x,i[l-1].x);continue}let c=l;for(;i[c].x===null;)c+=1;const p=(i[c].x-i[l-1].x)/(c-l+1);for(let h=l;h<c;h+=1)i[h].x=i[h-1].x+p}return i}function x0(o,i){for(let l=1;l<o.length;l+=1)if(i<=o[l].x){const c=o[l-1],p=o[l],h=p.x-c.x;return h?c.v+(i-c.x)/h*(p.v-c.v):p.v}return o.at(-1).v}function si(o){var p;const i=(o||"ease").trim(),l=i.match(/^linear\((.+)\)$/);if(l){const h=v0(l[1]);return Array.from({length:$o},(m,v)=>x0(h,v/($o-1)))}const c=((p=i.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||ad[i]||ad.ease;return Array.from({length:$o},(h,m)=>g0(c,m/($o-1)))}function oi(o){const i=o.map((c,p)=>Math.abs(o[Math.min(p+1,o.length-1)]-o[Math.max(p-1,0)]));i[0]=0,i[i.length-1]=0;const l=Math.max(...i)||1;return i.map(c=>c/l)}const y0=o=>(o.endsWith("ms")?parseFloat(o):parseFloat(o)*1e3)||0;function w0(o){const i=[];let l=0,c="";for(const p of o)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c.trim()),c=""):c+=p;return i.push(c.trim()),i}function _n(o,i){const l=`--sc-motion-${i}`,c=getComputedStyle(o),p=b=>parseFloat(c.getPropertyValue(b))||0,h=document.createElement("span");h.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${l}-travel-duration),var(${l}-press-lean-duration,0ms);transition-timing-function:var(${l}-travel-easing),var(--sc-motion-press-easing);`,o.appendChild(h);const m=getComputedStyle(h),[v,x]=m.transitionDuration.split(",").map(b=>y0(b.trim())),[L,E]=w0(m.transitionTimingFunction);return h.remove(),{travelDur:v,travelEasing:L,leanDur:x,leanEasing:E,stretch:p(`${l}-stretch`),squash:p(`${l}-squash`),lean:p(`${l}-press-lean`)}}const In=o=>!!o&&(o.stretch>0||o.squash>0||o.lean>0),Zn=()=>{var o;return typeof window<"u"&&!!((o=window.matchMedia)!=null&&o.call(window,"(prefers-reduced-motion: reduce)").matches)};function Bn({l:o,r:i,h:l},c,p=!0){return{transform:`translate(${o}px, ${p?(c-l)/2:0}px)`,width:`${i-o}px`,height:`${l}px`}}function Mr(o,i,l,c,p=!0){const h=si(o.travelEasing),m=oi(h);return h.map((v,x)=>{const L=o.stretch*c*m[x],E=i.l+(l.l-i.l)*v-L/2,b=i.r+(l.r-i.r)*v+L/2;return Bn({l:E,r:b,h:c*(1-o.squash*m[x])},c,p)})}function ai(o,i,l){const c=Math.sign(l.l+l.r-(i.l+i.r)),p=o.lean*.25*Math.abs((l.l+l.r-(i.l+i.r))/2);return c>0?{...i,r:i.r+p}:c<0?{...i,l:i.l-p}:i}function Lr(o,i,l,c,{hold:p=!1,onDone:h}={}){o.getAnimations().forEach(v=>v.cancel());const m=o.animate(i,{duration:l,easing:c,fill:"forwards"});return p||(m.onfinish=()=>{m.cancel(),h==null||h()}),m}function Nt(o){const i=o.getBoundingClientRect(),l=o.currentCSSZoom||1;return{left:i.left/l,right:i.right/l,width:i.width/l,top:i.top/l,height:i.height/l}}function li(o,i){const l=Nt(o);return{l:l.left-i.left,r:l.right-i.left}}function b0(o,i){const l=_n(o,"switch"),c=getComputedStyle(o),p=parseFloat(c.width),h=parseFloat(c.height),m=parseFloat(getComputedStyle(i).height),v=(h-m)/2;return{...l,knob:m,travel:p-m-2*v}}const ys=(o,i)=>({l:i?o.travel:0,r:(i?o.travel:0)+o.knob}),k0=(o,i)=>ai(o,ys(o,i),ys(o,!i)),_0=(o,i,l)=>Mr(o,i,l,o.knob,!1),L0=(o,i,l)=>[Bn({...i,h:o.knob},o.knob,!1),Bn({...l,h:o.knob},o.knob,!1)],E0="_field_tf6ns_39",S0="_disabled_tf6ns_49",z0="_controlWrapper_tf6ns_53",M0="_input_tf6ns_59",C0="_track_tf6ns_69",j0="_glyphs_tf6ns_84",A0="_glyphOn_tf6ns_99",N0="_glyphOff_tf6ns_105",F0="_thumb_tf6ns_115",P0="_label_tf6ns_190",Rt={field:E0,disabled:S0,controlWrapper:z0,input:M0,track:C0,glyphs:j0,glyphOn:A0,glyphOff:N0,thumb:F0,label:P0};function H0({checked:o=!1,disabled:i=!1,onChange:l,label:c,sound:p=!0,glyphs:h=!0,className:m=""}){const v=u.useId(),x=Cr("toggle",p),L=u.useRef(null),E=u.useRef(null),b=u.useRef(null),C=u.useRef(null),N=u.useRef(null),I=u.useRef(!1),j=()=>{if(i||Zn()||!E.current||!b.current)return null;const R=b0(E.current,b.current);return In(R)?R:null},H=()=>{var R,K;(R=C.current)==null||R.cancel(),C.current=null,N.current=null,(K=E.current)==null||K.removeAttribute("data-driven")},J=(R,K,de,he)=>{var ae;(ae=C.current)==null||ae.cancel(),E.current.setAttribute("data-driven","");const ne=b.current.animate(R,{duration:K,easing:de,fill:"forwards"});C.current=ne,he||(ne.onfinish=()=>{C.current===ne&&H()})},Q=(R,K,de)=>J(_0(R,K,ys(R,de)),R.travelDur,"linear",!1),Y=()=>{const R=j();if(!R||R.lean<=0)return;const K=L.current.checked,de=N.current||ys(R,K);N.current=k0(R,K),I.current=!1,J(L0(R,de,N.current),R.leanDur,R.leanEasing,!0)},X=()=>{if(!N.current)return;const R=j();if(!R){H();return}const K=N.current;N.current=null,Q(R,K,L.current.checked)},le=()=>setTimeout(()=>{I.current||X()},0);return f.jsxs("label",{htmlFor:v,className:`${Rt.field} ${i?Rt.disabled:""} ${m}`,onPointerDown:Y,onPointerUp:le,onPointerLeave:X,onPointerCancel:X,children:[f.jsxs("span",{className:Rt.controlWrapper,children:[f.jsx("input",{ref:L,id:v,type:"checkbox",role:"switch",className:Rt.input,checked:o,disabled:i,onChange:R=>{x(),I.current=!0;const K=j();if(K){const de=N.current||ys(K,!R.target.checked);N.current=null,Q(K,de,R.target.checked)}else H();l==null||l(R)}}),f.jsxs("span",{ref:E,className:Rt.track,"aria-hidden":"true",children:[h&&f.jsxs("span",{className:Rt.glyphs,children:[f.jsx("span",{className:Rt.glyphOn}),f.jsx("span",{className:Rt.glyphOff})]}),f.jsx("span",{ref:b,className:Rt.thumb})]})]}),c&&f.jsx("span",{className:Rt.label,children:c})]})}const $0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,44H32A20,20,0,0,0,12,64V88a20,20,0,0,0,16,19.6V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V107.6A20,20,0,0,0,244,88V64A20,20,0,0,0,224,44ZM36,68H220V84H36ZM52,188V108H204v80Zm112-52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,136Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z",opacity:"0.2"}),u.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224V88Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,50H32A14,14,0,0,0,18,64V88a14,14,0,0,0,14,14h2v90a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V102h2a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM210,192a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V102H210ZM226,88a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM98,136a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,52H32A12,12,0,0,0,20,64V88a12,12,0,0,0,12,12h4v92a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V100h4a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM212,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V100H212ZM228,88a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM100,136a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,136Z"}))]]),T0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),u.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),R0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),u.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),V0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),u.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),O0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),u.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),D0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),u.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),I0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),u.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),Z0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),u.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),B0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),u.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),U0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),u.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),W0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),u.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),K0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),u.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),Q0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",opacity:"0.2"}),u.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"}))]]),G0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),u.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),q0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",opacity:"0.2"}),u.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"}))]]),Y0=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),u.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),J0=u.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Qe=u.forwardRef((o,i)=>{const{alt:l,color:c,size:p,weight:h,mirrored:m,children:v,weights:x,...L}=o,{color:E="currentColor",size:b,weight:C="regular",mirrored:N=!1,...I}=u.useContext(J0);return u.createElement("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:p??b,height:p??b,fill:c??E,viewBox:"0 0 256 256",transform:m||N?"scale(-1, 1)":void 0,...I,...L},!!l&&u.createElement("title",null,l),v,x.get(h??C))});Qe.displayName="IconBase";const Cd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:$0}));Cd.displayName="ArchiveIcon";const X0=Cd,jd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:T0}));jd.displayName="ArrowRightIcon";const e1=jd,Ad=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:R0}));Ad.displayName="CalendarBlankIcon";const t1=Ad,Nd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:V0}));Nd.displayName="CaretDownIcon";const n1=Nd,Fd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:O0}));Fd.displayName="CheckIcon";const r1=Fd,Pd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:D0}));Pd.displayName="ClockIcon";const s1=Pd,Hd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:I0}));Hd.displayName="CopyIcon";const o1=Hd,$d=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:Z0}));$d.displayName="EnvelopeSimpleIcon";const a1=$d,Td=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:B0}));Td.displayName="EyeIcon";const l1=Td,Rd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:U0}));Rd.displayName="MagnifyingGlassIcon";const i1=Rd,Vd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:W0}));Vd.displayName="MapPinIcon";const c1=Vd,Od=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:K0}));Od.displayName="MinusIcon";const u1=Od,Dd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:Q0}));Dd.displayName="PauseIcon";const d1=Dd,Id=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:G0}));Id.displayName="PlusIcon";const p1=Id,Zd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:q0}));Zd.displayName="WarningIcon";const f1=Zd,Bd=u.forwardRef((o,i)=>u.createElement(Qe,{ref:i,...o,weights:Y0}));Bd.displayName="XIcon";const h1=Bd,m1="_icon_1vxzc_2",g1={icon:m1},v1={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Bo({glyph:o,weight:i="regular",size:l="1em",label:c,className:p="",...h}){if(!o)return null;const m=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},v=v1[l];return v?f.jsx("span",{className:`${g1.icon} ${p}`.trim(),style:{fontSize:v},children:f.jsx(o,{weight:i,size:"1em",...m,...h})}):f.jsx(o,{weight:i,size:l,className:p,...m,...h})}const x1="_stepper_1wvfb_28",y1="_button_1wvfb_38",w1="_glyph_1wvfb_79",b1="_readout_1wvfb_101",k1="_digits_1wvfb_123",_1="_disabled_1wvfb_134",xn={stepper:x1,button:y1,glyph:w1,readout:b1,digits:k1,disabled:_1},L1=400,E1=80;function S1({value:o,onChange:i,min:l=-1/0,max:c=1/0,step:p=1,label:h,disabled:m=!1,sound:v=!0,className:x=""}){const L=Cr("tick",v),E=u.useRef(o);E.current=o;const b=u.useRef(null),C=u.useRef(null),N=K=>Math.max(l,Math.min(c,K)),I=K=>{const de=N(E.current+K);de!==E.current&&(E.current=de,i==null||i(de),L())},j=()=>{b.current&&clearTimeout(b.current),C.current&&clearInterval(C.current),b.current=null,C.current=null};u.useEffect(()=>j,[]);const H=u.useRef(null),J=u.useRef(null),Q=u.useRef(o);u.useLayoutEffect(()=>{const K=Q.current;Q.current=o;const de=H.current,he=J.current;if(K===o||m||!de||!he||Zn())return;const ne=_n(de,"stepper"),ae=parseFloat(getComputedStyle(de).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ae>0||In(ne)))return;const B=(o>K?1:-1)*ae*Nt(de).height,T=si(ne.travelEasing),$=oi(T),xe=T.map((me,pe)=>({transform:`translateY(${B*(1-me)}px) scale(${1-.2*ne.squash*$[pe]}, ${1+.2*ne.stretch*$[pe]})`}));Lr(he,xe,ne.travelDur,"linear")},[o,m]);const Y=K=>{m||(I(K),j(),b.current=setTimeout(()=>{C.current=setInterval(()=>I(K),E1)},L1))},X=o<=l,le=o>=c,R=K=>{m||(K.key==="ArrowUp"?(K.preventDefault(),I(p)):K.key==="ArrowDown"?(K.preventDefault(),I(-p)):K.key==="Home"&&Number.isFinite(l)?(K.preventDefault(),E.current!==l&&L(),E.current=l,i==null||i(l)):K.key==="End"&&Number.isFinite(c)&&(K.preventDefault(),E.current!==c&&L(),E.current=c,i==null||i(c)))};return f.jsxs("div",{className:`${xn.stepper} ${m?xn.disabled:""} ${x}`,children:[f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Decrease ${h}`:"Decrease",disabled:m||X,onPointerDown:()=>Y(-p),onPointerUp:j,onPointerLeave:j,onPointerCancel:j,children:f.jsx(Bo,{glyph:u1,weight:"bold",size:"sm",className:xn.glyph})}),f.jsx("span",{ref:H,className:xn.readout,role:"spinbutton",tabIndex:m?-1:0,"aria-valuenow":o,"aria-valuemin":Number.isFinite(l)?l:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":h,"aria-disabled":m||void 0,onKeyDown:R,children:f.jsx("span",{ref:J,className:xn.digits,children:o})}),f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Increase ${h}`:"Increase",disabled:m||le,onPointerDown:()=>Y(p),onPointerUp:j,onPointerLeave:j,onPointerCancel:j,children:f.jsx(Bo,{glyph:p1,weight:"bold",size:"sm",className:xn.glyph})})]})}const z1="_track_s3qo0_27",M1="_indicator_s3qo0_38",C1="_segment_s3qo0_59",j1="_md_s3qo0_74",A1="_sm_s3qo0_84",N1="_lg_s3qo0_94",F1="_count_s3qo0_104",P1="_segmentSelected_s3qo0_113",H1="_disabled_s3qo0_127",yn={track:z1,indicator:M1,segment:C1,md:j1,sm:A1,lg:N1,count:F1,segmentSelected:P1,disabled:H1};function $1({options:o=[],value:i,onChange:l,disabled:c=!1,label:p,size:h="md",sound:m=!0,className:v=""}){const x=Cr("select",m),L=B=>{B!==i&&x(),l==null||l(B)},E=u.useRef(null),b=u.useRef({}),C=u.useRef(null),[N,I]=u.useState(null),j=u.useRef(null),H=u.useRef(null),J=u.useRef(i);J.current=i;const Q=B=>{const T=E.current,$=b.current[B];if(!T||!$)return null;const xe=Nt(T),me=Nt($);return{l:me.left-xe.left-T.clientLeft,r:me.right-xe.left-T.clientLeft}},Y=u.useCallback(()=>{const B=Q(i);I(B?{left:B.l,width:B.r-B.l}:null)},[i]);u.useLayoutEffect(()=>{Y()},[Y,o.length,h]);const X=()=>{if(c||Zn()||!E.current||!C.current)return null;const B=_n(E.current,"segmented-control");return In(B)?{...B,cap:parseFloat(getComputedStyle(C.current).height)}:null},le=(B,T,$,xe)=>{E.current.setAttribute("data-driven",""),Lr(C.current,B,T,$,{hold:xe,onDone:()=>{var me;return(me=E.current)==null?void 0:me.removeAttribute("data-driven")}})};u.useLayoutEffect(()=>{if(!N)return;const B={l:N.left,r:N.left+N.width},T=H.current||j.current;j.current=B,H.current=null;const $=X();!$||!T||T.l===B.l&&T.r===B.r||le(Mr($,T,B,$.cap),$.travelDur,"linear",!1)},[N==null?void 0:N.left,N==null?void 0:N.width]);const R=()=>{if(!H.current)return;const B=X(),T=H.current;H.current=null,B&&j.current&&le(Mr(B,T,j.current,B.cap),B.travelDur,"linear",!1)},K=B=>{if(B===i||!j.current)return;const T=X(),$=Q(B);if(!T||T.lean<=0||!$)return;const xe=C.current.getAnimations().length?li(C.current,{left:Nt(E.current).left+E.current.clientLeft}):j.current;H.current=ai(T,j.current,$);const me=i,pe=()=>setTimeout(()=>{J.current===me&&R()},0);window.addEventListener("pointerup",pe,{once:!0}),le([Bn({...xe,h:T.cap},T.cap),Bn({...H.current,h:T.cap},T.cap)],T.leanDur,T.leanEasing,!0)};u.useEffect(()=>(window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)),[Y]);const de=B=>{var T;(T=b.current[B])==null||T.focus()},he=B=>{if(c||o.length===0)return;const T=(B+o.length)%o.length,$=o[T];$&&(L($.value),de($.value))},ne=(B,T)=>{if(!c)switch(B.key){case"ArrowRight":case"ArrowDown":B.preventDefault(),he(T+1);break;case"ArrowLeft":case"ArrowUp":B.preventDefault(),he(T-1);break;case"Home":B.preventDefault(),he(0);break;case"End":B.preventDefault(),he(o.length-1);break}},ae=o.findIndex(B=>B.value===i);return f.jsxs("div",{ref:E,className:`${yn.track} ${yn[h]||yn.md} ${c?yn.disabled:""} ${v}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[N&&f.jsx("span",{ref:C,className:yn.indicator,"aria-hidden":"true",style:{transform:`translateX(${N.left}px)`,width:`${N.width}px`}}),o.map((B,T)=>{const $=B.value===i,xe=$||ae===-1&&T===0;return f.jsxs("button",{type:"button",ref:me=>{b.current[B.value]=me},role:"radio","aria-checked":$,tabIndex:c?-1:xe?0:-1,disabled:c,className:`${yn.segment} ${$?yn.segmentSelected:""}`,onClick:()=>L(B.value),onPointerDown:()=>K(B.value),onPointerLeave:R,onKeyDown:me=>ne(me,T),children:[B.label,B.count!==void 0&&f.jsx("span",{className:yn.count,children:B.count})]},B.value)})]})}const ld=16,Ol=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],T1="_mark_nniye_3",R1="_sm_nniye_24",V1="_md_nniye_1",O1="_lg_nniye_26",D1="_working_nniye_28",I1="_paused_nniye_29",Z1="_base_nniye_33",B1="_glint_nniye_34",U1="_spin_nniye_36",W1="_loop_nniye_37",bt={mark:T1,sm:R1,md:V1,lg:O1,working:D1,paused:I1,base:Z1,glint:B1,spin:U1,loop:W1},K1={sm:bt.sm,md:bt.md,lg:bt.lg},Q1=3.2;function G1(o,i){const l=o%2===0,p=-((l?1:-1)*(360*o)/i),h=p+360*(l?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${h.toFixed(2)} 8 8`}}function q1({working:o=!0,size:i="sm",label:l,className:c="",...p}){const h=`wm${u.useId().replace(/[^a-zA-Z0-9]/g,"")}`,m=Ol.length,v=l?{role:"img","aria-label":l}:{"aria-hidden":!0},x=[bt.mark,K1[i]??bt.sm,o?bt.working:bt.paused,c].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${ld} ${ld}`,className:x,focusable:"false",...v,...p,children:[o&&f.jsx("defs",{children:Ol.map((L,E)=>{const{from:b,to:C}=G1(E,m);return f.jsxs("linearGradient",{id:`${h}-s${E}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:bt.base}),f.jsx("stop",{offset:"0.45",className:bt.base}),f.jsx("stop",{offset:"1",className:bt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:b,to:C,dur:`${Q1}s`,repeatCount:"indefinite"})]},E)})}),Ol.map((L,E)=>f.jsx("g",{className:bt.spin,style:{"--wm-i":E},children:f.jsx("path",{d:L,className:bt.loop,style:{"--wm-i":E},stroke:o?`url(#${h}-s${E})`:void 0})},E))]})}const Y1="_button_1cn8j_34",J1="_label_1cn8j_74",X1="_arrow_1cn8j_84",eh="_sm_1cn8j_57",th="_primary_1cn8j_122",nh="_destructive_1cn8j_123",rh="_secondary_1cn8j_157",sh="_tertiary_1cn8j_173",oh="_loading_1cn8j_207",ah="_working_1cn8j_211",Vn={button:Y1,label:J1,arrow:X1,sm:eh,primary:th,destructive:nh,secondary:rh,tertiary:sh,loading:oh,working:ah},lh=["primary","secondary","tertiary","destructive"],ih=["lg","sm"];function ch(){return f.jsx(e1,{weight:"bold",className:Vn.arrow,"aria-hidden":"true"})}function id({variant:o="primary",size:i="lg",disabled:l=!1,loading:c=!1,arrow:p=!0,type:h="button",sound:m=!0,children:v,onClick:x,className:L="",...E}){const b=lh.includes(o)?o:"primary",C=ih.includes(i)?i:"lg",N=l||c,I=Cr("press",m);return f.jsxs("button",{type:h,className:`${Vn.button} ${Vn[b]} ${C==="sm"?Vn.sm:""} ${c?Vn.loading:""} ${L}`,disabled:N,"aria-busy":c||void 0,onClick:N?void 0:j=>{I(),x==null||x(j)},...E,children:[f.jsx("span",{className:Vn.label,children:v}),c?f.jsx(q1,{className:Vn.working}):p&&f.jsx(ch,{})]})}function uh(o,i=0,l=0,c=0){const p=Math.max(0,o),h=p;if(p===0)return{d:"",width:0,height:0};const m=Math.hypot(h,p),v=Math.PI-Math.atan2(p,h);let x=Math.max(0,i),L=Math.max(0,l),E=x*p/h,b=L/Math.tan(v/2);if(E+b>m){const Q=m/(E+b);x*=Q,L*=Q,E*=Q,b*=Q}const C=h+b,N=h/m,I=p/m,j=Q=>Math.round(Q*1e3)/1e3,H=(Q,Y)=>`${j(C+Q)} ${j(Y)}`;return{d:[`M ${H(-(h+b),-c)}`,`L ${H(-(h+b),0)}`,L?`A ${j(L)} ${j(L)} 0 0 1 ${H(-h+N*b,I*b)}`:"",`L ${H(-N*E,p-I*E)}`,x?`A ${j(x)} ${j(x)} 0 0 0 ${H(N*E,p-I*E)}`:"",`L ${H(h-N*b,I*b)}`,L?`A ${j(L)} ${j(L)} 0 0 1 ${H(h+b,0)}`:"",`L ${H(h+b,-c)}`,"Z"].filter(Boolean).join(" "),width:j(2*C),height:j(p+c)}}const dh=o=>{const i=[];let l=0,c="";for(const p of o)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c),c=""):c+=p;return c.trim()&&i.push(c),i.map(p=>p.trim()).filter(Boolean)};function ph(o){var l;if(!o||o.trim()==="none")return"none";const i=[];for(const c of dh(o)){if(/\binset\b/.test(c))continue;const p=(l=c.match(/(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b|\b(?:transparent|currentcolor|black|white)\b/i))==null?void 0:l[0],h=c.replace(p||""," ").match(/-?\d*\.?\d+(?:px)?/g)||[],[m="0",v="0",x="0"]=h.map(L=>/px$/.test(L)?L:`${L}px`);p&&(/\/\s*0(?:\.0*)?\s*\)$/.test(p)||/^transparent$/i.test(p)||i.push(`drop-shadow(${m} ${v} ${x} ${p})`))}return i.length?i.join(" "):"none"}const fh="_wrapper_1y9fh_21",hh="_tooltip_1y9fh_26",mh="_arrow_1y9fh_62",gh="_open_1y9fh_73",vh="_singleline_1y9fh_78",xh="_multiline_1y9fh_82",yr={wrapper:fh,tooltip:hh,arrow:mh,open:gh,singleline:vh,multiline:xh};function yh({content:o,multiline:i=!1,open:l,sound:c=!0,children:p}){const h=u.useId(),[m,v]=u.useState(!1),x=l??m,L=u.useRef(null),E=u.useRef(null),b=wh(E,x),C=Cr("reveal",c),N=u.useRef(x),I=u.useRef(0),j=u.useRef(null);u.useLayoutEffect(()=>{const Q=L.current,Y=E.current,X=N.current&&!x;if(N.current=x,!x&&!X||!Q||!Y||Zn())return;const le=_n(Y,"tooltip"),R=getComputedStyle(Y),K=parseFloat(R.getPropertyValue("--sc-motion-tooltip-grow-from")),de=Number.isFinite(K)?Math.min(1,Math.max(0,K)):1;if(!In(le)&&de===1)return;const he=parseFloat(R.getPropertyValue("--sc-size-tooltip-lift"))||0;let ne=X?1:0;const ae=j.current;if(ae&&ae.anim.playState==="running"){const A=Math.min(1,Math.max(0,(ae.anim.currentTime||0)/ae.duration));ne=ae.ys[Math.round(A*(ae.ys.length-1))]}const B=X?0:1;let T=si(le.travelEasing),$=le.travelDur;if(X){const A=T.findIndex(ie=>ie>=1);A>0&&($=Math.round($*A/(T.length-1)),T=T.slice(0,A+1).map(ie=>Math.min(1,ie)))}const xe=Math.abs(B-ne),me=oi(T).map(A=>A*xe),pe=T.map(A=>ne+(B-ne)*A),W=pe.map((A,ie)=>{const ge=Math.max(0,de+(1-de)*A);return{transform:`translate(-50%, ${-he*(1-A)}px) scale(${ge*(1-.2*le.squash*me[ie])}, ${ge*(1+.2*le.stretch*me[ie])})`,opacity:Math.min(1,Math.max(0,A))}});Y.getAnimations().forEach(A=>A.cancel());const oe=++I.current,G=()=>{I.current===oe&&Q.removeAttribute("data-driven")};Q.setAttribute("data-driven","");const k=Y.animate(W,{duration:$,easing:"linear"});k.onfinish=G,k.oncancel=G,j.current={anim:k,ys:pe,duration:$}},[x]);const H=()=>{l===void 0&&!m&&C(),v(!0)},J=()=>v(!1);return f.jsxs("span",{ref:L,className:yr.wrapper,onMouseEnter:H,onMouseLeave:J,onFocus:H,onBlur:J,children:[f.jsx("span",{"aria-describedby":x?h:void 0,children:p}),f.jsxs("span",{ref:E,role:"tooltip",id:h,className:`${yr.tooltip} ${x?yr.open:""} ${i?yr.multiline:yr.singleline}`,style:b.drop!=="none"?{"--tip-drop":b.drop}:void 0,children:[o,b.d&&f.jsx("svg",{className:yr.arrow,"aria-hidden":"true",focusable:"false",width:b.width,height:b.height,viewBox:`0 ${-b.overlap} ${b.width} ${b.height}`,style:{top:`calc(100% - ${b.overlap}px)`},children:f.jsx("path",{d:b.d})})]})]})}function wh(o,i){const[l,c]=u.useState({d:"",width:0,height:0,overlap:0,drop:"none"});return u.useLayoutEffect(()=>{const p=o.current;if(!p)return;const h=()=>{const m=getComputedStyle(p),v=b=>parseFloat(m.getPropertyValue(b))||0,x=1,L=uh(v("--sc-size-tooltip-arrow"),v("--sc-size-tooltip-arrow-tip"),v("--sc-size-tooltip-arrow-fillet"),x),E=ph(m.getPropertyValue("--sc-shadow-tooltip-plate"));c(b=>b.d===L.d&&b.drop===E&&b.overlap===x?b:{...L,overlap:x,drop:E})};return h(),window.addEventListener("sc-tokens-change",h),()=>window.removeEventListener("sc-tokens-change",h)},[o,i]),l}const bh=Math.PI*2,kh=new Set(["uskel","uloader","usplash"]),_h=new Set(["ucard"]),Lh={uskel:0,uloader:1.96,usplash:0},cd=new Set(["progress","active","current"]);function Eh(o){return function(){o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Sh(o){let i=2166136261;for(const l of String(o))i=Math.imul(i^l.charCodeAt(0),16777619);return i}const zh=(o,i,l,c)=>o.fillRect(i-c,l-c,c*2,c*2),Mh=(o,i,l,c)=>{o.beginPath(),o.arc(i,l,c,0,bh),o.fill()},Ud=(o,i,l,c)=>{c*=1.25;const p=Math.max(.7,c*.38);o.fillRect(i-c,l-p/2,c*2,p),o.fillRect(i-p/2,l-c,p,c*2)},Ch={plus:Ud,square:zh,round:Mh};function wt(o,i,l){const c=i.rng,p=(l.s||5)*i.S,h=l.x2-l.x1,m=l.y2-l.y1,v=Math.hypot(h,m);if(!v)return;const x=h/v,L=m/v,E=-L,b=x,C=l.w,N=l.ext??C*.35,I=l.r??.9,j=l.jit??.7;let H=0;for(let J=-N;J<=v+N;J+=p,H++){const Q=l.grid?0:H%2*p/2;let Y=1;if(l.taper){const X=(J+N)/(v+2*N);Y=Math.min(1,(l.fadeEnd?1-X:Math.min(X,1-X))/l.taper)}for(let X=-C/2+Q;X<=C/2+.01;X+=p){const le=l.crisp?Y:Math.min(1,(C/2-Math.abs(X))/(p*1.6)+.3)*Y;if(c()>le)continue;const R=l.x1+x*J+E*X+(c()-.5)*j,K=l.y1+L*J+b*X+(c()-.5)*j;o.globalAlpha=(l.a??.9)*(l.af?l.af(J+(l.u0||0),X,R,K):1),i.dot(o,R,K,I)}}o.globalAlpha=1}function Rn(o,i,l,c,p={}){let h=0;for(let m=0;m<l.length-1;m++)wt(o,i,{x1:l[m][0],y1:l[m][1],x2:l[m+1][0],y2:l[m+1][1],w:c,u0:h,...p}),h+=Math.hypot(l[m+1][0]-l[m][0],l[m+1][1]-l[m][1])}const jh=o=>Math.max(0,Math.min(1,Number.isFinite(+o)?+o:0)),Ah={udiv(o,i,l,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),h=7,m=c.opts.fade||"both";wt(o,c,{x1:2,y1:l/2,x2:i-2,y2:l/2,w:(p-1)*h*c.S,s:h,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:m==="none"?0:m==="end"?.7:.22,fadeEnd:m==="end"})},ucardhead(o,i,l,c){wt(o,c,{x1:-20,y1:l*.8,x2:i+20,y2:l*.15,w:44,s:7,r:1.6,ext:0}),wt(o,c,{x1:i*.4,y1:-20,x2:i*.78,y2:l+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(o,i,l,c){const p=12*c.S;for(let h=p/2;h<l;h+=p)for(let m=p/2;m<i;m+=p){let v=.14;c.hover&&(v+=.86*Math.exp(-((m-c.mx)**2+(h-c.my)**2)/5e3)),o.globalAlpha=v,c.dot(o,m,h,1.6)}o.globalAlpha=1},ucta(o,i,l,c){Rn(o,c,[[-.05*i,.1*l],[.22*i,.5*l],[.02*i,1.1*l]],46,{s:7,r:1.6,ext:0}),Rn(o,c,[[1.05*i,-.1*l],[.78*i,.5*l],[.98*i,1.1*l]],46,{s:7,r:1.6,ext:0})},uempty(o,i,l,c){Rn(o,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,h])=>[p*i,h*l]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(o,i,l,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,i-40,10],["r",20,108,i-40,10],["r",20,128,i*.55,10],["r",20,158,i-40,46]],h=6*c.S,m=c.t*240%(i+500)-250;for(let v=h/2;v<l;v+=h)for(let x=h/2;x<i;x+=h){if(!p.some(b=>b[0]==="c"?(x-b[1])**2+(v-b[2])**2<b[3]**2:x>=b[1]&&x<=b[1]+b[3]&&v>=b[2]&&v<=b[2]+b[4]))continue;const E=Math.exp(-((x+v*.5-m)**2)/4050);o.globalAlpha=.16+.6*E,c.dot(o,x,v,1.3)}o.globalAlpha=1},uprog(o,i,l,c){const p=7*c.S,h=Math.max(1,Math.round(+c.opts.rows||1)),m=jh(c.opts.progress),v=l/2-(h-1)*p/2,x=c.teal("progress");for(let L=0;L<h;L++)for(let E=4;E<i;E+=p){const b=E/i<m;o.fillStyle=b?x:c.fg,o.globalAlpha=b?1:.2,c.dot(o,E,v+L*p,1.6)}o.globalAlpha=1,o.fillStyle=c.fg},uloader(o,i,l,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([x,L])=>[x*i,L*l]);let h=0;for(let x=0;x<p.length-1;x++)h+=Math.hypot(p[x+1][0]-p[x][0],p[x+1][1]-p[x][1]);const m=c.t%2.8/2.8,v=Math.min(1,m/.7)*(h+30);Rn(o,c,p,26,{s:6,r:1.3,ext:0,a:1,af:x=>x<v?v-x<18&&m<.7?1:.85:.08})},uline(o,i,l,c){o.fillStyle=c.teal("active"),wt(o,c,{x1:3,y1:l/2,x2:i-3,y2:l/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),o.fillStyle=c.fg},umedia(o,i,l,c){const p=10*c.S;o.globalAlpha=.16;for(let h=p/2;h<l;h+=p)for(let m=p/2;m<i;m+=p)c.dot(o,m,h,1.3);o.globalAlpha=1,wt(o,c,{x1:-20,y1:l*.9,x2:i+20,y2:l*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(o,i,l,c){Rn(o,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,h])=>[p*i,h*l]),72,{s:7,r:1.6,ext:0})},ufooter(o,i,l,c){const h=7*c.S,m=c.rng;o.fillStyle=c.C.page,o.fillRect(0,0,i,90),o.fillStyle=c.C.inverse,o.fillRect(0,90,i,l-90);for(let v=h/2;v<90;v+=h)for(let x=h/2;x<i;x+=h)m()<Math.pow(v/90,1.6)&&c.dot(o,x,v,1.6)},uquote(o,i,l,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},h=24,m=130;wt(o,c,{...p,x1:h,y1:h,x2:h+m,y2:h}),wt(o,c,{...p,x1:h,y1:h,x2:h,y2:h+m}),wt(o,c,{...p,x1:i-h,y1:l-h,x2:i-h-m,y2:l-h}),wt(o,c,{...p,x1:i-h,y1:l-h,x2:i-h,y2:l-h-m})},utime(o,i,l,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),h=Math.round(+c.opts.current||0),m=l/p,v=i/2,x=7*c.S,L=Array.from({length:p},(E,b)=>m*(b+.5));for(let E=L[0];E<=L[p-1];E+=x)L.some(b=>Math.abs(E-b)<15)||(o.globalAlpha=E<L[Math.min(Math.max(h,0),p-1)]?.75:.18,c.dot(o,v,E,1.4));L.forEach((E,b)=>{o.fillStyle=b===h?c.teal("current"):c.fg,o.globalAlpha=b<=h?1:.25;for(let C=-1;C<=1;C++)for(let N=-1;N<=1;N++)c.dot(o,v+C*6,E+N*6,1.5)}),o.globalAlpha=1,o.fillStyle=c.fg},ubullet(o,i,l,c){const p=i/3;c.opts.accent&&(o.fillStyle=c.teal("current"));for(let h=0;h<3;h++)for(let m=0;m<3;m++)c.dot(o,p/2+h*p,p/2+m*p,p*.26);o.fillStyle=c.fg},usep(o,i,l,c){o.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(o,i*(.2+p*.3),l*(.8-p*.3),i*.1);o.globalAlpha=1},uthumb(o,i,l,c){const p=c.rng,h=2+Math.floor(p()*2),m=[];for(let v=0;v<=h;v++)m.push([(v%2?.72+.22*p():.06+.22*p())*i,(.12+v*(.76/h)+(p()-.5)*.08)*l]);p()>.5&&m.forEach(v=>{const x=v[0];v[0]=v[1],v[1]=x}),Rn(o,c,m,i*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(o,i,l,c){wt(o,c,{x1:i*.5,y1:-20,x2:i+30,y2:l*.42,w:42,s:7,r:1.6,ext:0}),wt(o,c,{x1:i*.76,y1:-20,x2:i+30,y2:l*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(o,i,l,c){const p=c.t;Rn(o,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([h,m])=>[h*i,m*l]),50,{s:7,r:1.6,af:h=>.28+.72*Math.pow(.5+.5*Math.sin(h*.016-p*2),2)})},type(o,i,l,c){if(!i||!l||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(i),p.height=Math.ceil(l);const h=p.getContext("2d"),m=c.opts.text||"Crafthouse";h.textAlign="center",h.textBaseline="middle";let v=l*(+c.opts.textScale||.62);h.font=`500 ${v}px ${c.font}`;const x=h.measureText(m).width;x>i*.88&&(v*=i*.88/x,h.font=`500 ${v}px ${c.font}`),h.fillText(m,i/2,l/2);const L=Math.min(9,Math.max(4.2,v/34))*c.S,E=L*.24,b=h.getImageData(0,0,p.width,p.height).data,C=-.14,N=Math.cos(C),I=Math.sin(C),j=Math.hypot(i,l)/2+10;let H=0;for(let J=-j;J<j;J+=L,H++)for(let Q=-j+H%2*L/2;Q<j;Q+=L){const Y=i/2+Q*N-J*I,X=l/2+Q*I+J*N;Y<0||X<0||Y>=p.width||X>=p.height||b[((X|0)*p.width+(Y|0))*4+3]>100&&c.dot(o,Y,X,E)}}};function Nh(o,i){const{art:l,w:c,h:p,dpr:h,colors:m,surface:v="inverse",shape:x="plus",density:L=1,seed:E=0,t:b=0,opts:C={},font:N,pointer:I}=i,j=Ah[l];if(!j||!c||!p)return;const{accent:H,...J}=m,Q=v==="inverse"?J.onInverse:J.text,Y={inverse:J.inverse,raised:J.raised,page:J.page,sunk:J.sunk};o.setTransform(h,0,0,h,0,0),o.globalAlpha=1,o.clearRect(0,0,c,p),v!=="none"&&(o.fillStyle=Y[v]??J.inverse,o.fillRect(0,0,c,p)),o.fillStyle=Q;const X=Math.min(1.6,Math.max(.6,+L||1)),le=R=>{if(!cd.has(R))throw new Error(`PlusField: teal is reserved for ${[...cd].join(", ")}; "${R}" is not one of them.`);return H};j(o,c,p,{C:J,fg:Q,S:1/X,rng:Eh(E),t:b,opts:C,font:N,teal:le,hover:!!(I!=null&&I.hover),mx:(I==null?void 0:I.x)??0,my:(I==null?void 0:I.y)??0,dot:Ch[x]??Ud}),o.globalAlpha=1}const Fh="_root_1jtbm_5",Ph="_backdrop_1jtbm_17",Hh="_canvas_1jtbm_25",$h="_srOnly_1jtbm_35",vs={root:Fh,backdrop:Ph,canvas:Hh,srOnly:$h},Th={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},Er=new Set,Dn=new Set;let Sr=0,On=null,kt=null,kn=null;const Rh=()=>typeof window<"u",Vh=()=>!!(kn!=null&&kn.matches);function Wd(o){const i=o/1e3;Dn.forEach(l=>l.paint(i)),Sr=Dn.size?requestAnimationFrame(Wd):0}function Oh(){!Sr&&Dn.size&&(Sr=requestAnimationFrame(Wd))}function Yl(){var o,i,l;Rh()&&(!On&&typeof MutationObserver<"u"&&(On=new MutationObserver(()=>Er.forEach(c=>c.refresh())),On.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!kt&&typeof IntersectionObserver<"u"&&(kt=new IntersectionObserver(c=>c.forEach(p=>{const h=p.target.__plusField;h&&(h.visible=p.isIntersecting,h.syncMotion())}))),!kn&&window.matchMedia&&(kn=window.matchMedia("(prefers-reduced-motion: reduce)"),(o=kn.addEventListener)==null||o.call(kn,"change",()=>Er.forEach(c=>c.syncMotion()))),document.fonts&&!Yl.fonts&&(Yl.fonts=!0,(l=(i=document.fonts).addEventListener)==null||l.call(i,"loadingdone",()=>Er.forEach(c=>c.refresh()))))}function Dh(){Er.size||(On==null||On.disconnect(),On=null,kt==null||kt.disconnect(),kt=null,Sr&&cancelAnimationFrame(Sr),Sr=0)}function Ih(o,i){const l={root:o,canvas:i,ctx:i.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(o),p=c.color,h={};for(const[m,v]of Object.entries(Th))h[m]=c.getPropertyValue(v).trim()||p;l.colors=h,l.font=c.fontFamily},resize(c,p){l.w=c,l.h=p,l.dpr=Math.min(2,window.devicePixelRatio||1);const h=Math.round(c*l.dpr),m=Math.round(p*l.dpr);i.width!==h&&(i.width=h),i.height!==m&&(i.height=m),l.refresh()},animated(){const c=l.props;return!!c&&kh.has(c.art)&&c.animate!==!1&&!Vh()},syncMotion(){var c;if(l.animated()&&l.visible&&l.w&&l.h){Dn.add(l),Oh();return}Dn.delete(l),l.paint(l.animated()?l.t:Lh[(c=l.props)==null?void 0:c.art]??0)},refresh(){!l.props||!l.w||!l.h||(l.readTokens(),l.syncMotion(),Dn.has(l)&&l.paint(l.t))},paint(c){const p=l.props;!p||!l.w||!l.h||(l.colors||l.readTokens(),l.t=c,Nh(l.ctx,{art:p.art,w:l.w,h:l.h,dpr:l.dpr,colors:l.colors,surface:p.surface,shape:p.shape,density:p.density,seed:Sh(p.seed??p.art),t:c,opts:p.opts,font:l.font,pointer:l.pointer}))}};return l}const Zh=new Set(["inverse","raised","page","sunk","none"]),Bh=new Set(["plus","square","round"]);function Uh({art:o,surface:i="inverse",shape:l="plus",density:c=1,animate:p=!0,seed:h,rows:m,fade:v,text:x,progress:L,accent:E=!1,steps:b,current:C,textScale:N,backdrop:I=!1,label:j,as:H="div",className:J="",...Q}){const Y=u.useRef(null),X=u.useRef(null),le=u.useRef(null),R={art:o,surface:Zh.has(i)?i:"inverse",shape:Bh.has(l)?l:"plus",density:c,animate:p,seed:h,opts:{rows:m,fade:v,text:x,progress:L,accent:E,steps:b,current:C,textScale:N}};u.useEffect(()=>{const he=Y.current,ne=X.current;if(!he||!ne||!ne.getContext)return;Yl();const ae=Ih(he,ne);ae.props=R,le.current=ae,he.__plusField=ae,Er.add(ae);const B=typeof ResizeObserver<"u"?new ResizeObserver(([me])=>{const{width:pe,height:W}=me.contentRect;(pe!==ae.w||W!==ae.h)&&ae.resize(pe,W)}):null;B==null||B.observe(he),kt==null||kt.observe(he);const T=_h.has(o)?he.parentElement||he:null,$=me=>{const pe=he.getBoundingClientRect();ae.pointer={hover:!0,x:me.clientX-pe.left,y:me.clientY-pe.top},ae.paint(ae.t)},xe=()=>{ae.pointer={hover:!1,x:0,y:0},ae.paint(ae.t)};return T==null||T.addEventListener("pointermove",$),T==null||T.addEventListener("pointerleave",xe),()=>{B==null||B.disconnect(),kt==null||kt.unobserve(he),T==null||T.removeEventListener("pointermove",$),T==null||T.removeEventListener("pointerleave",xe),Dn.delete(ae),Er.delete(ae),delete he.__plusField,le.current=null,Dh()}},[o]),u.useEffect(()=>{const he=le.current;he&&(he.props=R,he.refresh())});const K=[vs.root,I?vs.backdrop:"",J].filter(Boolean).join(" "),de=Math.round(Math.max(0,Math.min(1,Number(L)||0))*100);return f.jsxs(H,{ref:Y,className:K,...Q,children:[f.jsx("canvas",{ref:X,className:vs.canvas,"aria-hidden":"true"}),j&&(o==="uloader"||o==="uskel")&&f.jsx("span",{role:"status",className:vs.srOnly,children:j}),o==="uprog"&&f.jsx("span",{role:"progressbar",className:vs.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":de,"aria-label":j})]})}const Wh="_underline_w8mvb_3",Kh={underline:Wh},Dl=new WeakMap,ud=o=>{var i;return o.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((i=o.parentElement)==null?void 0:i.parentElement)||null};function Kd({active:o=!0,shape:i,density:l,motion:c="plus-underline",className:p="",...h}){const m=u.useRef(null);return u.useLayoutEffect(()=>{const v=m.current,x=v&&o?ud(v):null;if(!x)return;const L=Dl.get(x);if(Dl.set(x,v),!L||L===v||!L.isConnected||Zn())return;const E=_n(v,c);if(!In(E))return;const b=Nt(v),C=li(L,b);L.getAnimations().forEach(N=>N.cancel()),Lr(v,Mr(E,C,{l:0,r:b.width},b.height),E.travelDur,"linear")},[o,c]),u.useEffect(()=>{var v;o||(v=m.current)==null||v.getAnimations().forEach(x=>x.cancel())},[o]),u.useEffect(()=>{const v=m.current,x=v&&o?ud(v):null;if(!x)return;const L=E=>{var Y,X;const b=(X=(Y=E.target).closest)==null?void 0:X.call(Y,'a, button, [role="tab"], [role="radio"]');if(!b||!x.contains(b)||b.contains(v)||Zn())return;const C=_n(v,c);if(!In(C)||C.lean<=0)return;const N=Nt(v),I=Nt(b),j={l:0,r:N.width},H=ai(C,j,{l:I.left-N.left,r:I.right-N.left});Lr(v,[Bn({...j,h:N.height},N.height),Bn({...H,h:N.height},N.height)],C.leanDur,C.leanEasing,{hold:!0});let J=!1;const Q=()=>setTimeout(()=>{J||(J=!0,!(Dl.get(x)!==v||!v.isConnected)&&Lr(v,Mr(_n(v,c),H,j,N.height),C.travelDur,"linear"))},0);window.addEventListener("pointerup",Q,{once:!0}),b.addEventListener("pointerleave",Q,{once:!0})};return x.addEventListener("pointerdown",L),()=>x.removeEventListener("pointerdown",L)},[o,c]),f.jsx("span",{ref:m,className:`${Kh.underline} ${p}`,"aria-hidden":"true",...h,children:o&&f.jsx(Uh,{as:"span",art:"uline",surface:"none",shape:i,density:l})})}const Qh="_nav_lg753_18",Gh="_row_lg753_26",qh="_brand_lg753_35",Yh="_links_lg753_44",Jh="_linkItem_lg753_51",Xh="_link_lg753_44",em="_toggle_lg753_79",tm="_trailing_lg753_84",nm="_desktop_lg753_93",rm="_compact_lg753_100",sm="_menu_lg753_118",om="_menuOpen_lg753_128",Xe={nav:Qh,row:Gh,brand:qh,links:Yh,linkItem:Jh,link:Xh,toggle:em,trailing:tm,desktop:nm,compact:rm,menu:sm,menuOpen:om};function am({brand:o,links:i=[],trailing:l,compact:c=!1,underline:p=!1,className:h=""}){const[m,v]=u.useState(!1);return f.jsxs("nav",{className:`${Xe.nav} ${c?Xe.compact:Xe.desktop} ${h}`,"aria-label":"Primary",children:[f.jsxs("div",{className:Xe.row,children:[f.jsx("div",{className:Xe.brand,children:o}),c?f.jsx("button",{type:"button",className:Xe.toggle,"aria-expanded":m,"aria-controls":"navbar-menu",onClick:()=>v(x=>!x),children:m?"Close":"Menu"}):f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:Xe.links,children:i.map(x=>f.jsx("li",{className:Xe.linkItem,children:f.jsxs("a",{className:Xe.link,href:x.href,"aria-current":x.current?"page":void 0,children:[x.label,p&&f.jsx(Kd,{active:!!x.current,motion:"nav-bar"})]})},x.href))}),l&&f.jsx("div",{className:Xe.trailing,children:l})]})]}),c&&f.jsxs("div",{id:"navbar-menu",className:`${Xe.menu} ${m?Xe.menuOpen:""}`,children:[f.jsx("ul",{className:Xe.links,children:i.map(x=>f.jsx("li",{className:Xe.linkItem,children:f.jsx("a",{className:Xe.link,href:x.href,"aria-current":x.current?"page":void 0,children:x.label})},x.href))}),l&&f.jsx("div",{className:Xe.trailing,children:l})]})]})}const lm="_slider_18xic_30",im="_track_18xic_48",cm="_fill_18xic_59",um="_thumb_18xic_77",dm="_dragging_18xic_128",pm="_moving_18xic_138",wr={slider:lm,track:im,fill:cm,thumb:um,dragging:dm,moving:pm};function fm({value:o=.5,onChange:i,min:l=0,max:c=1,step:p=.01,bigStep:h=.05,label:m,disabled:v=!1,sound:x=!0,className:L=""}){const E=Cr("slide",x),b=u.useRef(null),C=u.useRef(null),[N,I]=u.useState(!1),[j,H]=u.useState(!1),J=u.useRef(null),Q=u.useCallback(T=>Math.max(l,Math.min(c,T)),[l,c]),Y=(Q(o)-l)/(c-l||1),X=Y*100,le=()=>parseFloat(getComputedStyle(b.current).getPropertyValue("--sc-size-slider-thumb"))||0,R=u.useCallback(T=>{const $=b.current;if(!$)return o;const xe=Nt($),me=le(),pe=xe.width-me,W=T/($.currentCSSZoom||1),oe=pe<=0?0:(W-xe.left-me/2)/pe;return Q(l+oe*(c-l))},[Q,l,c,o]),K=()=>{const T=b.current,$=C.current;T&&$&&(J.current=li($,Nt(T)))},de=()=>{var T,$;(T=C.current)==null||T.getAnimations().forEach(xe=>xe.cancel()),($=b.current)==null||$.removeAttribute("data-driven")};u.useLayoutEffect(()=>{const T=J.current;J.current=null;const $=b.current,xe=C.current;if(!T||!$||!xe||Zn())return;const me=_n(xe,"slider");if(!In(me))return;const pe=le(),W=(Nt($).width-pe)*Y;if(Math.abs(T.l-W)<.5)return;$.setAttribute("data-driven","");const oe=Mr(me,{l:T.l-W,r:T.r-W},{l:0,r:pe},pe);Lr(xe,oe,me.travelDur,"linear",{onDone:()=>$.removeAttribute("data-driven")})},[Y]),u.useEffect(()=>de,[]);const he=T=>{if(v)return;T.currentTarget.setPointerCapture(T.pointerId),I(!0);const $=R(T.clientX);$!==Q(o)&&K(),i==null||i($)},ne=T=>{v||!N||(j||(de(),H(!0)),i==null||i(R(T.clientX)))},ae=()=>{I(!1),H(!1)},B=T=>{if(v)return;let $;switch(T.key){case"ArrowRight":case"ArrowUp":$=o+(T.shiftKey?h:p);break;case"ArrowLeft":case"ArrowDown":$=o-(T.shiftKey?h:p);break;case"Home":$=l;break;case"End":$=c;break;default:return}T.preventDefault(),Q($)!==Q(o)&&(K(),E()),i==null||i(Q($))};return f.jsx("div",{className:`${wr.slider} ${L}`,role:"slider",tabIndex:v?-1:0,"aria-valuemin":Math.round(l*100),"aria-valuemax":Math.round(c*100),"aria-valuenow":Math.round(X),"aria-label":m,"aria-disabled":v||void 0,onPointerDown:he,onPointerMove:ne,onPointerUp:ae,onPointerCancel:ae,onKeyDown:B,children:f.jsxs("span",{ref:b,className:`${wr.track} ${N?wr.dragging:""} ${j?wr.moving:""}`,style:{"--value":Y},"aria-hidden":"true",children:[f.jsx("span",{className:wr.fill}),f.jsx("span",{ref:C,className:wr.thumb})]})})}const hm="_field_1a2p2_32",mm="_label_1a2p2_41",gm="_description_1a2p2_50",vm="_helper_1a2p2_51",xm="_box_1a2p2_61",ym="_input_1a2p2_75",wm="_icon_1a2p2_97",bm="_trailing_1a2p2_98",km="_prefix_1a2p2_105",_m="_suffix_1a2p2_106",Lm="_clear_1a2p2_129",Em="_helperError_1a2p2_170",Sm="_errored_1a2p2_176",zm="_raised_1a2p2_187",Mm="_disabled_1a2p2_193",nt={field:hm,label:mm,description:gm,helper:vm,box:xm,input:ym,icon:wm,trailing:bm,prefix:km,suffix:_m,clear:Lm,helperError:Em,errored:Sm,raised:zm,disabled:Mm},dd=o=>o&&!u.isValidElement(o)&&typeof o!="string"?f.jsx(Bo,{glyph:o,weight:"bold"}):o;function Cm({label:o,description:i,helper:l,error:c,disabled:p=!1,type:h="text",value:m,onChange:v,placeholder:x,icon:L,prefix:E,suffix:b,trailing:C,clearable:N=!1,surface:I="page",onClear:j,className:H="",...J}){const Q=u.useId(),Y=`${Q}-description`,X=`${Q}-helper`,le=u.useRef(null),R=!!c,K=[i&&Y,(c||l)&&X].filter(Boolean).join(" ")||void 0,de=m!==void 0?String(m).length>0:void 0,he=()=>{const ne=le.current;j?j():ne&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(ne,""),ne.dispatchEvent(new Event("input",{bubbles:!0}))),ne==null||ne.focus()};return f.jsxs("div",{className:`${nt.field} ${I==="raised"?nt.raised:""} ${p?nt.disabled:""} ${R?nt.errored:""} ${H}`,children:[o&&f.jsx("label",{htmlFor:Q,className:nt.label,children:o}),i&&f.jsx("span",{id:Y,className:nt.description,children:i}),f.jsxs("div",{className:nt.box,children:[E&&f.jsx("span",{className:nt.prefix,children:E}),L&&f.jsx("span",{className:nt.icon,"aria-hidden":"true",children:dd(L)}),f.jsx("input",{ref:le,id:Q,type:h,className:nt.input,value:m,onChange:v,placeholder:x,disabled:p,"aria-invalid":R||void 0,"aria-describedby":K,...J}),b&&f.jsx("span",{className:nt.suffix,children:b}),N&&!p&&de!==!1&&f.jsx("button",{type:"button",className:nt.clear,"aria-label":o?`Clear ${o}`:"Clear",onClick:he,children:f.jsx(Bo,{glyph:h1,weight:"bold"})}),C&&f.jsx("span",{className:nt.trailing,children:dd(C)})]}),(c||l)&&f.jsx("span",{id:X,className:`${nt.helper} ${R?nt.helperError:""}`,children:c||l})]})}function jm(){var l,c;if(typeof window>"u"||typeof navigator>"u"||!((c=(l=navigator.userAgentData)==null?void 0:l.brands)==null?void 0:c.some(p=>p.brand==="Chromium")))return!1;const i=p=>{var h;return(h=window.matchMedia)==null?void 0:h.call(window,p).matches};return!i("(prefers-reduced-transparency: reduce)")&&!i("(forced-colors: active)")}function Am(o,i,l,{depth:c,refraction:p,splay:h}){const m=Math.max(0,c)/100*(Math.min(o,i)/2),v=Math.max(0,p)/100*(m/2),x=1+3*(1-Math.min(100,Math.max(0,h))/100),L=Math.min(l,o/2,i/2),E=new Uint8ClampedArray(o*i*4);for(let b=0;b<i;b+=1)for(let C=0;C<o;C+=1){const N=C+.5-o/2,I=b+.5-i/2,j=Math.abs(N)-(o/2-L),H=Math.abs(I)-(i/2-L),Q=-(Math.hypot(Math.max(j,0),Math.max(H,0))+Math.min(Math.max(j,H),0)-L);let Y=0,X=0,le=0;if(Q>0&&m>0&&Q<m)if(le=(1-Q/m)**x,j>0&&H>0){const K=Math.hypot(j,H)||1;Y=Math.sign(N)*(j/K),X=Math.sign(I)*(H/K)}else j>H?Y=Math.sign(N):X=Math.sign(I);const R=(b*o+C)*4;E[R]=127.5*(1-Y*le),E[R+1]=127.5*(1-X*le),E[R+2]=128,E[R+3]=255}return{bytes:E,scale:2*v}}function Nm(o){const i=getComputedStyle(o),l=c=>parseFloat(i.getPropertyValue(c))||0;return{depth:l("--glass-depth"),refraction:l("--glass-refraction"),splay:l("--glass-splay"),radius:parseFloat(i.borderTopLeftRadius)||0}}function Fm(o,i,l){const c=`sc-glass-${u.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,[p,h]=u.useState(null);return u.useEffect(()=>{const m=o.current;if(!i||!m||!jm()){h(null);return}let v="";const x=()=>{const E=Math.round(m.offsetWidth),b=Math.round(m.offsetHeight),{radius:C,...N}=Nm(m),I=JSON.stringify([E,b,C,N]);if(I===v||E<2||b<2)return;v=I;const{bytes:j,scale:H}=Am(E,b,C,N),J=document.createElement("canvas");J.width=E,J.height=b,J.getContext("2d").putImageData(new ImageData(j,E,b),0,0),h({w:E,h:b,scale:H,href:J.toDataURL()})};x();const L=new ResizeObserver(x);return L.observe(m),window.addEventListener("sc-tokens-change",x),()=>{L.disconnect(),window.removeEventListener("sc-tokens-change",x)}},[o,i,l]),{id:c,filter:p}}const Pm="_card_gh9a1_25",Hm="_defs_gh9a1_38",$m="_flat_gh9a1_47",Tm="_interactive_gh9a1_48",Rm="_clear_gh9a1_51",Vm="_frosted_gh9a1_62",Om="_thick_gh9a1_73",Dm="_toneAuto_gh9a1_88",Im="_toneLight_gh9a1_93",Zm="_toneDark_gh9a1_98",Bm="_glass_gh9a1_103",br={card:Pm,defs:Hm,flat:$m,interactive:Tm,clear:Rm,frosted:Vm,thick:Om,toneAuto:Dm,toneLight:Im,toneDark:Zm,glass:Bm},Um=["clear","frosted","thick"],pd={auto:"toneAuto",light:"toneLight",dark:"toneDark"};function Wm({variant:o="flat",level:i="frosted",tone:l="auto",interactive:c=!1,as:p="div",onClick:h,children:m,className:v="",style:x,...L}){const E=o==="glass"?"glass":"flat",b=Um.includes(i)?i:"frosted",C=pd[l]??pd.auto,N=E==="glass",I=u.useRef(null),{id:j,filter:H}=Fm(I,N,b),J=c?"button":p,Q=[br.card,br[E],N?`${br[b]} ${br[C]}`:"",c?br.interactive:"",v].filter(Boolean).join(" ");return f.jsxs(J,{ref:I,type:c?"button":void 0,className:Q,onClick:c?h:void 0,style:H?{...x,"--glass-refract":`url(#${j})`}:x,...L,children:[H&&f.jsx("svg",{className:br.defs,"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:f.jsxs("filter",{id:j,x:"0",y:"0",width:H.w,height:H.h,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[f.jsx("feImage",{href:H.href,x:"0",y:"0",width:H.w,height:H.h,preserveAspectRatio:"none",result:"map"}),f.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:H.scale,xChannelSelector:"R",yChannelSelector:"G"})]})}),m]})}const Km="_pill_hlpza_17",Qm="_filled_hlpza_38",Gm="_progress_hlpza_38",qm="_success_hlpza_39",Ym="_warning_hlpza_40",Jm="_error_hlpza_41",Xm="_info_hlpza_42",eg="_live_hlpza_43",tg="_outline_hlpza_46",ng="_icon_hlpza_53",rg="_neutral_hlpza_60",sg="_dash_hlpza_65",og="_glow_hlpza_84",ag="_pulse_hlpza_1",kr={pill:Km,filled:Qm,progress:Gm,success:qm,warning:Ym,error:Jm,info:Xm,live:eg,outline:tg,icon:ng,neutral:rg,dash:sg,glow:og,pulse:ag},lg=["progress","success","warning","error","info","neutral","live"],ig=["filled","outline"];function cg(){const o=u.useRef(null),[i,l]=u.useState({w:0,h:0,sw:0,dash:0,gap:0});u.useLayoutEffect(()=>{const I=o.current&&o.current.parentElement;if(!I)return;const j=()=>{const J=getComputedStyle(I),Q=Y=>parseFloat(J.getPropertyValue(Y))||0;l({w:I.offsetWidth,h:I.offsetHeight,sw:Q("--sc-size-status-pill-dash-width"),dash:Q("--sc-size-status-pill-dash"),gap:Q("--sc-size-status-pill-dash-gap")})};j();const H=new ResizeObserver(j);return H.observe(I),window.addEventListener("sc-tokens-change",j),()=>{H.disconnect(),window.removeEventListener("sc-tokens-change",j)}},[]);const{w:c,h:p,sw:h,dash:m,gap:v}=i,x=Math.max(0,c-h),L=Math.max(0,p-h),E=Math.min(x,L)/2,b=2*(x-2*E)+2*(L-2*E)+2*Math.PI*E,C=m+v,N=C>0?Math.max(1,Math.round(b/C)):1;return f.jsx("svg",{ref:o,className:kr.dash,width:c,height:p,viewBox:`0 0 ${c} ${p}`,"aria-hidden":"true",focusable:"false",children:c>0?f.jsx("rect",{x:h/2,y:h/2,width:x,height:L,rx:E,ry:E,pathLength:N*C||void 0}):null})}function ug({tone:o="neutral",emphasis:i="filled",glow:l,icon:c,children:p,className:h=""}){const m=lg.includes(o)?o:"neutral",v=ig.includes(i)?i:"filled",x=l??(m==="progress"||m==="live");return f.jsxs("span",{className:`${kr.pill} ${kr[v]} ${kr[m]} ${x?kr.glow:""} ${h}`,children:[m==="neutral"?f.jsx(cg,{}):null,c?f.jsx(c,{className:kr.icon,weight:"bold","aria-hidden":"true"}):null,p]})}const dg=`/* tokens:
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
`,pg=`/* tokens:
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
`,fd=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,fg=`/* tokens:
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
`,hg=`/* tokens:
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
`,mg=`/* tokens (role tokens, physical-controls Tier 2; record Tooltip 2026-10-08-2007 A):
 *   --sc-color-tooltip-surface               · plate ground (white in light, the dark key in dark)
 *   --sc-color-tooltip-text                  · ink (text.primary values)
 *   --sc-shadow-tooltip-plate                · drop shadow, outer layers as a drop-shadow filter (Tooltip.jsx)
 *   --sc-space-component-padding-inline-tooltip · 12 inline
 *   --sc-space-component-padding-block-tooltip  · 8 block
 *   --sc-space-component-gap-tooltip         · offset (24) between the trigger and the arrow tip
 *   --sc-size-tooltip-arrow                  · arrow leg (8; 0 drops the arrow)
 *   --sc-size-tooltip-arrow-tip / -fillet    · arrow tip radius, fillet radius where it meets the bubble (2 / 2; Tooltip.jsx)
 *   --sc-size-tooltip-lift                   · travel of the open (4)
 *   --sc-radius-tooltip                      · 4 corner
 *   --sc-font-text-caption-*                 · 13 / regular / relaxed
 *   --sc-motion-tooltip-travel-duration / -easing · open and close (720ms, a spring with 3% overshoot)
 *   --sc-motion-tooltip-stretch / -squash · elastic scale at peak speed (Tooltip.jsx; 2 / 2)
 *   --sc-motion-tooltip-grow-from            · start scale of the open, about the arrow tip (Tooltip.jsx; 0)
 *   --sc-border-width-default                · forced-colors edge
 *
 * The plate's shadow snaps: only opacity and transform transition.
 */

.wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + var(--sc-space-component-gap-tooltip));
  left: 50%;
  transform: translate(-50%, calc(var(--sc-size-tooltip-lift) * -1));
  --tip-ground: var(--sc-color-tooltip-surface);
  background-color: var(--tip-ground);
  color: var(--sc-color-tooltip-text);
  /* The plate shadow arrives as a drop-shadow chain (Tooltip.jsx, from
     --sc-shadow-tooltip-plate) so it falls under the arrow too. */
  filter: var(--tip-drop, none);
  padding-inline: var(--sc-space-component-padding-inline-tooltip);
  padding-block: var(--sc-space-component-padding-block-tooltip);
  border-radius: var(--sc-radius-tooltip);
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
  /* Grow, stretch and squash scale about the arrow tip, the trigger point
     (Tooltip.jsx; shipped none, so the origin moves nothing). */
  transform-origin: 50% calc(100% + var(--sc-size-tooltip-arrow));
  z-index: 10;
}

/* While the elastic engine drives the open (stretch or squash above 0), its
   keyframes own transform and opacity; a CSS transition would outrank them. */
.wrapper[data-driven] .tooltip {
  transition: none;
}

.arrow {
  /* The arrow: an SVG path (Tooltip.jsx) with a rounded tip and concave
     fillets; top is set inline so it overlaps the bubble by the seam. */
  position: absolute;
  left: 50%;
  display: block;
  overflow: visible;
  transform: translateX(-50%);
  fill: var(--tip-ground);
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

/* Forced colors drop the ground and the shadow: an inset edge keeps the
 * bubble apart from the page, and the arrow is drawn in the same ink. */
@media (forced-colors: active) {
  .tooltip {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
    filter: none;
  }
  .arrow {
    forced-color-adjust: none;
    fill: CanvasText;
  }
}
`,gg=`/* tokens:
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
`,hd=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,vg=`/* tokens:
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
`,xg=`/* tokens:
 *   --sc-space-component-gap-input            · label ↔ description ↔ field ↔ helper (4)
 *   --sc-space-component-padding-inline-input · 16 inline, inside the field box
 *   --sc-space-component-padding-block-input  · 12 block, inside the field box
 *   --sc-space-component-gap-input-inline     · 16 between prefix, icon, value, suffix, clear, trailing
 *   --sc-radius-field                         · 8 field corner (role token, = radius.default; Levi)
 *   --sc-size-input-icon                      · 20 leading / trailing icon (Phosphor, bold)
 *   --sc-size-input-clear / -clear-target     · 16 clear mark (Phosphor X, bold) in a 32 button
 *   --sc-color-input-well / -well-hover / -well-focus / -well-disabled · field fill (white 46% light, white 15% dark)
 *   --sc-color-input-well-raised              · field fill on a raised surface, every state (ink 7% light, white 15% dark)
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

/* --- On a raised surface (surface="raised") ----------------------
   White 46% nearly vanishes on surface.raised and floating; the raised
   fill darkens instead, at the page field's contrast (decisions 2026-10-08). */

.raised .box,
.raised .box:hover,
.raised .box:has(.input:focus),
.raised.disabled .box {
  background-color: var(--sc-color-input-well-raised);
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
`,yg=`/* tokens:
 *   --sc-space-component-padding-card        · inner padding (role token, = padding.lg 24)
 *   --sc-radius-card                         · corner (role token, = radius.surface 8)
 *   --sc-color-card-flat / -flat-hover       · flat ground (surface.floating) / interactive hover
 *   --sc-color-card-glass-{clear,frosted,thick}-{light,dark,auto} · glass tint per level and tone
 *   --sc-color-card-glass-hover-{light,dark,auto} · interactive glass hover veil per tone
 *   --sc-shadow-card-glass-{level}           · rim (Figma light -45deg) + a subtle floating shade
 *   --sc-shadow-card-glass-text-{light,dark,auto} · text halo per tone (zero offset)
 *   --sc-size-card-glass-{level}-frost       · backdrop blur radius (Figma frost; CSS takes half)
 *   --sc-size-card-glass-{level}-saturation  · backdrop saturation in percent
 *   --sc-size-card-glass-{level}-refraction / -depth / -splay · read by glass.js (Figma units)
 *   --sc-motion-card-press-scale             · press scale (shipped 1: no press)
 *   --sc-motion-press-duration / -easing     · press timing (shared press pair)
 *   --sc-color-text-primary                  · text
 *   --sc-color-border-focus / -width-focus / -focus-offset · focus ring
 *   --sc-motion-hover-duration / -easing     · ground transition
 *
 * Two styles (Levi, 2026-10-08). Flat: a floating surface with no border and
 * no shadow. Glass, in three levels named for the surface (clear, frosted,
 * thick) and two tones (light lightens, dark darkens): frost, tint and a lit rim here; the refraction filter is
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
.clear {
  --glass-tint-l: var(--sc-color-card-glass-clear-light);
  --glass-tint-d: var(--sc-color-card-glass-clear-dark);
  --glass-tint-a: var(--sc-color-card-glass-clear-auto);
  --glass-rim: var(--sc-shadow-card-glass-clear);
  --glass-frost: var(--sc-size-card-glass-clear-frost);
  --glass-refraction: var(--sc-size-card-glass-clear-refraction);
  --glass-depth: var(--sc-size-card-glass-clear-depth);
  --glass-splay: var(--sc-size-card-glass-clear-splay);
  --glass-saturation: var(--sc-size-card-glass-clear-saturation);
}
.frosted {
  --glass-tint-l: var(--sc-color-card-glass-frosted-light);
  --glass-tint-d: var(--sc-color-card-glass-frosted-dark);
  --glass-tint-a: var(--sc-color-card-glass-frosted-auto);
  --glass-rim: var(--sc-shadow-card-glass-frosted);
  --glass-frost: var(--sc-size-card-glass-frosted-frost);
  --glass-refraction: var(--sc-size-card-glass-frosted-refraction);
  --glass-depth: var(--sc-size-card-glass-frosted-depth);
  --glass-splay: var(--sc-size-card-glass-frosted-splay);
  --glass-saturation: var(--sc-size-card-glass-frosted-saturation);
}
.thick {
  --glass-tint-l: var(--sc-color-card-glass-thick-light);
  --glass-tint-d: var(--sc-color-card-glass-thick-dark);
  --glass-tint-a: var(--sc-color-card-glass-thick-auto);
  --glass-rim: var(--sc-shadow-card-glass-thick);
  --glass-frost: var(--sc-size-card-glass-thick-frost);
  --glass-refraction: var(--sc-size-card-glass-thick-refraction);
  --glass-depth: var(--sc-size-card-glass-thick-depth);
  --glass-splay: var(--sc-size-card-glass-thick-splay);
  --glass-saturation: var(--sc-size-card-glass-thick-saturation);
}
/* Tone: light glass lightens what is behind it, dark glass darkens it. Auto
 * (the default) follows the theme: light glass behind dark text, dark glass
 * behind light text. Break it only where the backdrop already gives the
 * text its contrast. */
.toneAuto {
  --glass-tint: var(--glass-tint-a);
  --glass-halo: var(--sc-shadow-card-glass-text-auto);
  --glass-veil: var(--sc-color-card-glass-hover-auto);
}
.toneLight {
  --glass-tint: var(--glass-tint-l);
  --glass-halo: var(--sc-shadow-card-glass-text-light);
  --glass-veil: var(--sc-color-card-glass-hover-light);
}
.toneDark {
  --glass-tint: var(--glass-tint-d);
  --glass-halo: var(--sc-shadow-card-glass-text-dark);
  --glass-veil: var(--sc-color-card-glass-hover-dark);
}
.glass {
  background-color: var(--glass-tint);
  box-shadow: var(--glass-rim);
  text-shadow: var(--glass-halo);
  /* Figma frost is a blur radius; CSS blur() takes the standard deviation, half of it.
   * Saturation is in percent (100 = none). */
  -webkit-backdrop-filter: blur(calc(var(--glass-frost) / 2)) saturate(calc(var(--glass-saturation) / 100));
  backdrop-filter: var(--glass-refract, ) blur(calc(var(--glass-frost) / 2)) saturate(calc(var(--glass-saturation) / 100));
}
.glass.interactive:hover:not(:disabled) {
  background-image: linear-gradient(135deg, var(--glass-veil), var(--glass-veil));
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
`,wg=`/* tokens:
 *   --sc-space-component-padding-inline-status-pill        · inline padding, both sides (8)
 *   --sc-space-component-padding-block-status-pill         · block padding (2)
 *   --sc-space-component-gap-status-pill                   · glyph to label (6)
 *   --sc-radius-status-pill                                · capsule
 *   --sc-border-width-default                              · outline edge (drawn inside, no size change)
 *   --sc-font-text-label-chrome-*                          · label
 *   --sc-color-status-pill-<tone>-fill / -ink              · filled ground and label (AA, FILL_PAIRS)
 *   --sc-color-text-primary, status-*-ink, status-error    · outline labels (AA on surfaces)
 *   --sc-color-text-secondary                              · neutral label and dashed edge (AA on surfaces)
 *   --sc-color-border-strong, signal-live                  · outline edges without an ink
 *   --sc-size-status-pill-glow / -icon                     · the glow blur, the glyph
 *   --sc-size-status-pill-dash / -dash-gap / -dash-width   · the neutral pill dashed edge (3 / 3 / 2)
 *   --sc-motion-status-pill-pulse-*                        · the glow breathing (duration, easing, low opacity)
 */

.pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-status-pill);
  padding-inline: var(--sc-space-component-padding-inline-status-pill);
  padding-block: var(--sc-space-component-padding-block-status-pill);
  border-radius: var(--sc-radius-status-pill);
  outline: var(--sc-border-width-default) solid var(--pill-edge, transparent);
  outline-offset: calc(-1 * var(--sc-border-width-default));
  background-color: var(--pill-fill, transparent);
  color: var(--pill-ink);
  font-family: var(--sc-font-text-label-chrome-family);
  font-size: var(--sc-font-text-label-chrome-size);
  font-weight: var(--sc-font-text-label-chrome-weight);
  line-height: var(--sc-font-text-label-chrome-line-height);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  white-space: nowrap;
}

/* Filled: the tone's own ground and label. */
.filled.progress { --pill-fill: var(--sc-color-status-pill-progress-fill); --pill-ink: var(--sc-color-status-pill-progress-ink); }
.filled.success { --pill-fill: var(--sc-color-status-pill-success-fill); --pill-ink: var(--sc-color-status-pill-success-ink); }
.filled.warning { --pill-fill: var(--sc-color-status-pill-warning-fill); --pill-ink: var(--sc-color-status-pill-warning-ink); }
.filled.error { --pill-fill: var(--sc-color-status-pill-error-fill); --pill-ink: var(--sc-color-status-pill-error-ink); }
.filled.info { --pill-fill: var(--sc-color-status-pill-info-fill); --pill-ink: var(--sc-color-status-pill-info-ink); }
.filled.live { --pill-fill: var(--sc-color-status-pill-live-fill); --pill-ink: var(--sc-color-status-pill-live-ink); }

/* Outline: the hue on the edge, the label on the hue's AA ink (text.primary where the hue has none). */
.outline.progress { --pill-ink: var(--sc-color-text-primary); --pill-edge: var(--sc-color-border-strong); --pill-hue: var(--sc-color-signal-progress); }
.outline.success { --pill-ink: var(--sc-color-status-success-ink); --pill-edge: var(--sc-color-status-success-ink); }
.outline.warning { --pill-ink: var(--sc-color-status-warning-ink); --pill-edge: var(--sc-color-status-warning-ink); }
.outline.error { --pill-ink: var(--sc-color-status-error); --pill-edge: var(--sc-color-status-error); }
.outline.info { --pill-ink: var(--sc-color-status-info-ink); --pill-edge: var(--sc-color-status-info-ink); }
.outline.live { --pill-ink: var(--sc-color-text-primary); --pill-edge: var(--sc-color-signal-live); }

.icon {
  flex: none;
  inline-size: var(--sc-size-status-pill-icon);
  block-size: var(--sc-size-status-pill-icon);
}

/* Neutral (planned): no fill, a dashed edge in the text colour, either emphasis. */
.neutral {
  --pill-ink: var(--sc-color-text-secondary);
  --pill-hue: var(--sc-color-text-secondary);
}

.dash {
  position: absolute;
  inset: 0;
  overflow: visible;
  pointer-events: none;
  fill: none;
  stroke: currentColor;
  stroke-width: var(--sc-size-status-pill-dash-width);
  stroke-dasharray: var(--sc-size-status-pill-dash) var(--sc-size-status-pill-dash-gap);
}

/* Live caps: only the live tone sets its label in capitals (LIVE). */
.live {
  text-transform: uppercase;
}

/* The glow: the whole pill glows in its hue (the fill, or the edge on an
 * outline pill) and breathes. The halo is an outer shadow on a pseudo-element,
 * so it paints once and only its opacity animates. */
.glow::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 var(--sc-size-status-pill-glow) var(--pill-hue, var(--pill-fill, var(--pill-edge)));
  pointer-events: none;
  animation: pulse var(--sc-motion-status-pill-pulse-duration) var(--sc-motion-status-pill-pulse-easing) infinite alternate;
}

@keyframes pulse {
  from { opacity: var(--sc-motion-status-pill-pulse-from); }
  to { opacity: 1; }
}

/* Reduced motion: the glow holds still, lit. */
@media (prefers-reduced-motion: reduce) {
  .glow::after {
    animation: none;
    opacity: 1;
  }
}

/* Forced colors drop fills: every pill draws its edge; the glow goes, and a
 * glowing pill doubles its edge so the state still reads. */
@media (forced-colors: active) {
  .pill {
    outline-color: CanvasText;
  }
  .glow {
    outline-width: calc(2 * var(--sc-border-width-default));
    outline-offset: calc(-2 * var(--sc-border-width-default));
  }
  .glow::after,
  .dash {
    display: none;
  }
}
`,bg="_app_drnf6_6",kg="_bar_drnf6_18",_g="_brand_drnf6_27",Lg="_meta_drnf6_34",Eg="_readout_drnf6_35",Sg="_values_drnf6_36",zg="_spacer_drnf6_42",Mg="_stages_drnf6_46",Cg="_stageWrap_drnf6_54",jg="_activeStage_drnf6_61",Ag="_stageSelect_drnf6_65",Ng="_stageLabel_drnf6_75",Fg="_stage_drnf6_46",Pg="_panel_drnf6_94",Hg="_group_drnf6_103",$g="_prop_drnf6_121",Tg="_editor_drnf6_122",Rg="_token_drnf6_132",Vg="_changed_drnf6_140",Og="_tokenHead_drnf6_144",Dg="_tokenName_drnf6_150",Ig="_num_drnf6_162",Zg="_mini_drnf6_166",Bg="_curve_drnf6_173",Ug="_sounds_drnf6_187",Wg="_sound_drnf6_187",Kg="_shippedSound_drnf6_210",Qg="_reset_drnf6_214",Gg="_notes_drnf6_267",qg="_tabs_drnf6_279",Yg="_tab_drnf6_279",Jg="_pin_drnf6_308",Xg="_pick_drnf6_313",ev="_propBlock_drnf6_320",tv="_easing_drnf6_321",nv="_springRows_drnf6_322",rv="_propLabel_drnf6_328",sv="_tokenActions_drnf6_332",ov="_motionTiles_drnf6_347",av="_motionTile_drnf6_347",lv="_layers_drnf6_407",iv="_layer_drnf6_407",cv="_layerHead_drnf6_420",uv="_layerGrid_drnf6_425",dv="_scope_drnf6_430",pv="_steps_drnf6_439",fv="_step_drnf6_439",hv="_stepRole_drnf6_473",O={app:bg,bar:kg,brand:_g,meta:Lg,readout:Eg,values:Sg,spacer:zg,stages:Mg,stageWrap:Cg,activeStage:jg,stageSelect:Ag,stageLabel:Ng,stage:Fg,panel:Pg,group:Hg,prop:$g,editor:Tg,token:Rg,changed:Vg,tokenHead:Og,tokenName:Dg,num:Ig,mini:Zg,curve:Bg,sounds:Ug,sound:Wg,shippedSound:Kg,reset:Qg,notes:Gg,tabs:qg,tab:Yg,pin:Jg,pick:Xg,propBlock:ev,easing:tv,springRows:nv,propLabel:rv,tokenActions:sv,motionTiles:ov,motionTile:av,layers:lv,layer:iv,layerHead:cv,layerGrid:uv,scope:dv,steps:pv,step:fv,stepRole:hv},Qt=["day","week","month"],xs=["work","studio","journal"],jt=(o,{press:i=!0}={})=>{const l=`--sc-motion-${o}`;return{jsTokens:[`${l}-stretch`,`${l}-squash`,...i?[`${l}-press-lean`,`${l}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${l}-stretch`]:"0.45",[`${l}-squash`]:"0",...i?{[`${l}-press-lean`]:"0.83",[`${l}-press-lean-duration`]:"150ms"}:{}},springs:{[`${l}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},Jl={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},md=o=>({light:o(Jl.light),dark:o(Jl.dark)}),gd={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}},vd={none:void 0,search:i1,mail:a1,location:c1},xd={none:void 0,eye:l1,copy:o1,calendar:t1,clock:s1,caret:n1},Il={flat:{variant:"flat"},"clear · light":{variant:"glass",level:"clear",tone:"light"},"frosted · light":{variant:"glass",level:"frosted",tone:"light"},"thick · light":{variant:"glass",level:"thick",tone:"light"},"clear · dark":{variant:"glass",level:"clear",tone:"dark"},"frosted · dark":{variant:"glass",level:"frosted",tone:"dark"},"thick · dark":{variant:"glass",level:"thick",tone:"dark"}},Zl={position:"absolute",inset:0,overflow:"hidden",borderRadius:"var(--sc-radius-card)"},yd={"page (follows theme)":f.jsxs("div",{"aria-hidden":"true",style:{...Zl,background:"var(--sc-color-surface-page)"},children:[f.jsx("div",{style:{position:"absolute",inset:"0 50% 0 0",background:"var(--sc-color-surface-sunk)"}}),f.jsx("div",{style:{position:"absolute",inset:"30% 0 30% 25%",background:"var(--sc-color-surface-floating)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),"type and colour":f.jsxs("div",{"aria-hidden":"true",style:Zl,children:[f.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 24px, var(--sc-color-atmosphere-river) 24px 48px, var(--sc-color-atmosphere-lapis) 48px 72px)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),type:f.jsx("div",{"aria-hidden":"true",style:{...Zl,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-title-card)",color:"var(--sc-color-text-primary)",wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"}),none:null},Bl={progress:"In progress",live:"Live",success:"Complete",warning:"Pending",error:"Failed",info:"Info",neutral:"Planned"},wd={none:void 0,check:r1,pause:d1,archive:X0,warning:f1};let Ul=!1;function mv({p:o,ctx:i}){const l=u.useRef(null);return u.useEffect(()=>{var L;const c=[...((L=l.current)==null?void 0:L.children)||[]],p=i.slow||1,h=o.reduced,m=h==="opacity only"?{opacity:o.opacityFrom,transform:"none",filter:"none"}:{opacity:o.opacityFrom,transform:`translateY(${o.distance}px) scale(${o.scaleFrom}) rotate(${o.rotateFrom}deg)`,filter:`blur(${o.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},x=c.map((E,b)=>E.animate([m,v],{duration:h==="none"?0:o.duration*p,delay:h==="none"?0:(o.delay+b*o.stagger)*p,easing:o.easing,fill:"both"}));return()=>x.forEach(E=>E.cancel())},[o,i.replay,i.slow]),f.jsx("div",{className:O.motionTiles,ref:l,children:Array.from({length:o.count},(c,p)=>f.jsx("span",{className:O.motionTile},p))})}const Wl=o=>o.reduced==="none"?0:o.delay+o.stagger*(o.count-1)+o.duration,zr={Switch:{css:[dg],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(o,i)=>i("checked",!o.checked),render:(o,i,l)=>f.jsx(H0,{checked:o.checked,disabled:o.disabled,glyphs:o.glyphs,label:o.label,sound:!1,onChange:c=>{i("checked",c.target.checked),l()}})},Stepper:{css:[pg,fd],jsTokens:[...jt("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...jt("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:jt("stepper",{press:!1}).seed.springs,scoped:md(o=>({"--sc-shadow-stepper-track":o.recess,"--sc-color-stepper-key":o.keyFill,"--sc-color-stepper-key-shade":o.keyShade,"--sc-shadow-stepper-key":o.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(o,i)=>i("value",o.value+o.step>o.max?o.min:o.value+o.step),render:(o,i,l)=>f.jsx(S1,{value:o.value,min:o.min,max:o.max,step:o.step,disabled:o.disabled,label:o.label,sound:!1,onChange:c=>{i("value",c),l()}})},SegmentedControl:{css:[fg],...jt("segmented-control"),seed:{...jt("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Qt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(o,i)=>i("value",Qt[(Qt.indexOf(o.value)+1)%Qt.length]),render:(o,i,l)=>f.jsx($1,{label:"Range",value:o.value,size:o.size,disabled:o.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==o.value&&l(),i("value",c)}})},Tooltip:{css:[mg],jsTokens:[...jt("tooltip",{press:!1}).jsTokens,"--sc-motion-tooltip-grow-from","--sc-shadow-tooltip-plate","--sc-size-tooltip-arrow-tip","--sc-size-tooltip-arrow-fillet"],shippedSound:"drams-031-01.wav",trigger:"the tooltip opens (pointer enters or focus lands on the trigger)",props:[{name:"show",type:"enum",options:["hover","open","closed"],default:"hover"},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(o,i)=>i("show",o.show==="open"?"closed":"open"),render:(o,i,l)=>f.jsx("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-md) var(--sc-space-layout-stack-sm) var(--sc-space-layout-stack-sm)"},children:f.jsx("span",{style:{position:"relative",display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:f.jsx(yh,{content:o.content,multiline:o.multiline,open:o.show==="hover"?void 0:o.show==="open",sound:!1,children:f.jsx("span",{style:{display:"inline-block"},onMouseEnter:()=>{o.show==="hover"&&l()},onFocus:()=>{o.show==="hover"&&l()},children:f.jsx(id,{variant:"primary",size:"sm",arrow:!1,sound:!1,children:"Copy"})})})})})},NavBar:{css:[gg,hd],...jt("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:xs,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(o,i)=>i("current",xs[(xs.indexOf(o.current)+1)%xs.length]),render:(o,i)=>f.jsx("div",{onClickCapture:l=>{const c=l.target.closest("a");c&&(l.preventDefault(),i("current",c.textContent.trim().toLowerCase()))},children:f.jsx(am,{brand:f.jsx("span",{children:"Shokunin"}),underline:o.underline,links:xs.map(l=>({href:`#${l}`,label:l[0].toUpperCase()+l.slice(1),current:l===o.current}))})})},PlusUnderline:{css:[hd],...jt("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Qt,default:"day"}],play:(o,i)=>i("active",Qt[(Qt.indexOf(o.active)+1)%Qt.length]),render:(o,i)=>f.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Qt.map(l=>f.jsxs("button",{type:"button",role:"tab","aria-selected":l===o.active,onClick:()=>i("active",l),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[l[0].toUpperCase()+l.slice(1),f.jsx(Kd,{active:l===o.active})]},l))})},Slider:{css:[vg],jsTokens:jt("slider",{press:!1}).jsTokens,seed:{overrides:{...jt("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:jt("slider",{press:!1}).seed.springs,scoped:md(o=>{const i=o===Jl.light?gd.light:gd.dark;return{"--sc-shadow-slider-track":o.recess,"--sc-color-slider-thumb-rim-top":i.rimTop,"--sc-color-slider-thumb-rim-bottom":i.rimBottom,"--sc-color-slider-thumb-face-top":i.faceTop,"--sc-color-slider-thumb-face-bottom":i.faceBottom,"--sc-shadow-slider-thumb":o.key,"--sc-shadow-slider-thumb-pressed":o.keyPressed}})},shippedSound:"drams-009-01.wav",trigger:"a keyboard step that changes the value; a drag is silent",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(o,i)=>i("value",o.value>=.75?.25:.75),render:(o,i,l)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Ul=!0},onKeyUpCapture:()=>{Ul=!1},children:f.jsx(fm,{value:o.value,disabled:o.disabled,label:o.label,sound:!1,onChange:c=>{const p=Math.round(c*100)/100;Ul&&p!==o.value&&l(),i("value",p)}})})},Input:{css:[xg,fd],shippedSound:null,trigger:"ships silent",props:[{name:"label",type:"text",default:"Email address"},{name:"description",type:"text",default:""},{name:"placeholder",type:"text",default:"you@studio.com"},{name:"value",type:"text",default:"levi@levibahn.com"},{name:"icon",type:"enum",options:Object.keys(vd),default:"mail"},{name:"prefix",type:"text",default:""},{name:"suffix",type:"text",default:""},{name:"trailing",type:"enum",options:Object.keys(xd),default:"none"},{name:"clearable",type:"boolean",default:!0},{name:"helper",type:"text",default:""},{name:"error",type:"text",default:""},{name:"disabled",type:"boolean",default:!1},{name:"surface",type:"enum",options:["page","raised"],default:"page"}],play:null,render:(o,i)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 4)",...o.surface==="raised"?{background:"var(--sc-color-surface-raised)",padding:"var(--sc-space-component-padding-md)"}:{}},children:f.jsx(Cm,{surface:o.surface,label:o.label,description:o.description||void 0,placeholder:o.placeholder,value:o.value,icon:vd[o.icon],prefix:o.prefix||void 0,suffix:o.suffix||void 0,trailing:xd[o.trailing],clearable:o.clearable,onClear:()=>i("value",""),helper:o.helper||void 0,error:o.error||void 0,disabled:o.disabled,onChange:l=>i("value",l.target.value)})})},Card:{css:[yg],jsTokens:["clear","frosted","thick"].flatMap(o=>["refraction","depth","splay"].map(i=>`--sc-size-card-glass-${o}-${i}`)),shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Il)],default:"all"},{name:"backdrop",type:"enum",options:Object.keys(yd),default:"page (follows theme)"},{name:"interactive",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"title",type:"text",default:"Studio journal"},{name:"body",type:"text",default:"Notes from the bench."}],play:null,render:o=>{const i=o.show==="all"?Object.keys(Il):[o.show];return f.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-sm)"},children:[yd[o.backdrop],f.jsx("div",{style:{position:"relative",display:"grid",gridTemplateColumns:`repeat(${Math.min(i.length,4)}, calc(var(--sc-space-layout-stack-xl) * 2.5))`,gap:"var(--sc-space-layout-stack-sm)"},children:i.map(l=>[o.show==="all"&&l==="clear · dark"?f.jsx("span",{},"gap"):null,f.jsxs(Wm,{...Il[l],interactive:o.interactive,disabled:o.interactive?o.disabled:void 0,onClick:()=>{},children:[f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-label-ui)",color:"var(--sc-color-text-secondary)"},children:l}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-default)"},children:o.title}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-dense)",color:"var(--sc-color-text-secondary)"},children:o.body})]},l)])})]})}},StatusPill:{css:[wg],shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Bl)],default:"all"},{name:"emphasis",type:"enum",options:["filled","outline"],default:"filled"},{name:"glow",type:"enum",options:["by tone","on","off"],default:"by tone"},{name:"icon",type:"enum",options:Object.keys(wd),default:"none"},{name:"content",type:"text",default:"In progress"}],play:(o,i)=>i("glow",o.glow==="off"?"on":"off"),render:o=>{const i=o.show==="all"?Object.keys(Bl):[o.show],l=o.glow==="by tone"?void 0:o.glow==="on";return f.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--sc-space-layout-stack-sm)"},children:i.map(c=>f.jsx(ug,{tone:c,emphasis:o.emphasis,glow:l,icon:wd[o.icon],children:o.show==="all"?Bl[c]:o.content},c))})}},Button:{css:[hg],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(o,i,l)=>f.jsx(id,{variant:o.variant,size:o.size,disabled:o.disabled,loading:o.loading,arrow:o.arrow,sound:!1,onClick:()=>l(),children:o.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(o,i,l,c)=>f.jsx(mv,{p:o,ctx:c})}},Qd=o=>{var i;return((i=o==null?void 0:o.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:i[1].split(",").map(Number))||null};function gv(o){var c;const i=Qd(o);if(i){const p=[];for(let h=0;h<=40;h+=1){const m=h/40,v=3*(1-m)**2*m*i[0]+3*(1-m)*m**2*i[2]+m**3,x=3*(1-m)**2*m*i[1]+3*(1-m)*m**2*i[3]+m**3;p.push([v,x])}return p}const l=(c=o==null?void 0:o.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return l?l.map((p,h)=>[h/(l.length-1),p]):[[0,0],[1,1]]}function vv(o){const i=gv(o),l=i.map(m=>m[1]),c=Math.min(0,...l),h=Math.max(1,...l)-c||1;return i.map(([m,v],x)=>`${x?"L":"M"}${m.toFixed(3)} ${(1-(v-c)/h).toFixed(3)}`).join(" ")}const At=(o,i=2)=>+(+o).toFixed(i),Kl=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function Gd(o){Kl.fillStyle="#000",Kl.fillStyle=o;const i=Kl.fillStyle;if(i.startsWith("#"))return{hex:i,a:1};const l=i.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return l?{hex:"#"+[l[1],l[2],l[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:l[4]!==void 0?+l[4]:1}:{hex:"#000000",a:1}}function Uo(o,i){if(i>=1)return o.toUpperCase();const l=parseInt(o.slice(1),16);return`rgb(${l>>16&255} ${l>>8&255} ${l&255} / ${+i.toFixed(3)})`}const xv=o=>String(o).endsWith("ms")?parseFloat(o):parseFloat(o)*1e3;function qd({label:o,value:i,spring:l,presets:c,asRef:p,onChange:h}){const[m,v]=u.useState(l?"spring":"bezier"),x=Qd(i)||[.25,.1,.25,1],L=l||{stiffness:260,damping:22,mass:1},E=C=>{const N=Zo(C);h(N.easing,C,N.settleMs)},b=l?Zo(l):null;return f.jsxs("div",{className:O.easing,children:[f.jsxs("div",{className:O.editor,children:[f.jsx("svg",{className:O.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:vv(i)})}),f.jsxs("select",{"aria-label":`${o} mode`,value:m,onChange:C=>{v(C.target.value),C.target.value==="spring"?E(L):h(`cubic-bezier(${x.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&f.jsxs("select",{"aria-label":`${o} preset`,value:"",onChange:C=>{const N=c.find(I=>I.name===C.target.value);N&&(v("bezier"),h(p?`var(${N.name})`:N.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),c.map(C=>f.jsx("option",{value:C.name,children:C.name.replace("--sc-p-motion-easing-","")},C.name))]})]}),m==="bezier"?f.jsx("div",{className:O.editor,children:x.map((C,N)=>f.jsx("input",{type:"number","aria-label":`${o} bezier point ${N+1}`,className:O.num,step:"0.01",value:C,onChange:I=>{const j=[...x];j[N]=+I.target.value,h(`cubic-bezier(${j.join(", ")})`,null,null)}},N))}):f.jsxs("div",{className:O.springRows,children:[(()=>{const C=2*Math.PI*Math.sqrt(L.mass/L.stiffness),N=1-L.damping*C/(4*Math.PI*L.mass),I=(j,H)=>E({...L,stiffness:+((2*Math.PI/j)**2*L.mass).toFixed(1),damping:+(4*Math.PI*(1-H)*L.mass/j).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:O.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${o} spring duration`,min:50,max:2e3,step:10,value:Math.round(C*1e3),onChange:j=>I(+j.target.value/1e3,N)}),f.jsxs("span",{className:O.readout,children:[Math.round(C*1e3),"ms"]})]}),f.jsxs("label",{className:O.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${o} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+N.toFixed(2)),onChange:j=>I(C,+j.target.value)}),f.jsx("span",{className:O.readout,children:N.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([C,N,I,j])=>f.jsxs("label",{className:O.mini,children:[C,f.jsx("input",{type:"range",min:N,max:I,step:j,value:L[C],onChange:H=>E({...L,[C]:+H.target.value})}),f.jsx("span",{className:O.readout,children:L[C]})]},C)),b&&f.jsxs("span",{className:O.readout,children:["settles ",b.settleMs,"ms · overshoot ",Math.round(b.overshoot*100),"%"]})]})]})}function yv(o){const i=[];let l=0,c="";for(const p of o||"")p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c.trim()),c=""):c+=p;return c.trim()&&i.push(c.trim()),i.filter(p=>p&&p!=="none").map(p=>{var C;const h=/\binset\b/.test(p),m=((C=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:C[0])||"rgb(0 0 0 / 0.2)",v=p.replace(m,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(N=>parseFloat(N)||0),[x=0,L=0,E=0,b=0]=v;return{inset:h,x,y:L,blur:E,spread:b,color:m}})}const wv=o=>o.map(i=>`${i.inset?"inset ":""}${At(i.x)}px ${At(i.y)}px ${At(i.blur)}px ${At(i.spread)}px ${i.color}`).join(", ");function bv({name:o,value:i,onSet:l}){const c=yv(i),p=(h,m)=>l(wv(c.map((v,x)=>x===h?{...v,...m}:v)));return f.jsx("div",{className:O.layers,children:c.map((h,m)=>{const v=Gd(h.color),x=h.inset?"inner edge":(h.x<0||h.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:O.layer,children:[f.jsxs("span",{className:O.layerHead,children:["layer ",m+1," · ",x]}),f.jsx("div",{className:O.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([L,E,b,C])=>f.jsxs("label",{className:O.mini,children:[L,f.jsx("input",{type:"number",className:O.num,"aria-label":`${o} layer ${m+1} ${L}`,min:E,max:b,step:C,value:At(h[L]),onChange:N=>p(m,{[L]:+N.target.value})})]},L))}),f.jsxs("div",{className:O.editor,children:[f.jsx("input",{type:"color","aria-label":`${o} layer ${m+1} colour`,value:v.hex,onChange:L=>p(m,{color:Uo(L.target.value,v.a)})}),f.jsxs("label",{className:O.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${o} layer ${m+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:L=>p(m,{color:Uo(v.hex,+L.target.value)})}),f.jsx("span",{className:O.readout,children:At(v.a)})]})]})]},m)})})}const kv=[11,12,13,14,16,20].map((o,i)=>[o,["chrome","ui","caption","dense","body","lead"][i],`--sc-p-font-size-${o}`]),_v=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],Lv=o=>/^--sc-font-.*-size$/.test(o)?kv:/^--sc-size-.*icon/.test(o)?_v:null;function Ev({name:o,kind:i,shipped:l,value:c,override:p,scope:h,adj:m,spring:v,pin:x,refs:L,easingPresets:E,onSet:b,onAdj:C,onSpring:N,onReset:I,onPin:j,restOf:H,onCopyRest:J}){const Q=p!==void 0,[Y,X]=u.useState(!!x);let le=null;if(i==="color"){const R=Gd(c);le=f.jsxs("div",{className:O.editor,children:[f.jsx("input",{type:"color","aria-label":`${o} colour`,value:R.hex,onChange:K=>b(Uo(K.target.value,R.a))}),f.jsx("input",{type:"range","aria-label":`${o} alpha`,min:"0",max:"1",step:"0.01",value:R.a,onChange:K=>b(Uo(R.hex,+K.target.value))})]})}else if(i==="length"||i==="number"){const R=parseFloat(c)||0,K=Math.abs(parseFloat(l)||1),de=i==="length"?Math.max(64,K*4):Math.max(2,K*2),he=i==="length"?"px":"",ne=i==="length"?.5:.005;le=f.jsxs("div",{className:O.editor,children:[f.jsx("input",{type:"range","aria-label":o,min:"0",max:de,step:ne,value:R,onChange:B=>b(`${B.target.value}${he}`)}),f.jsx("input",{type:"number","aria-label":`${o} value`,className:O.num,step:ne,value:At(R,3),onChange:B=>b(`${B.target.value}${he}`)})]});const ae=Lv(o);ae&&(le=f.jsxs(f.Fragment,{children:[le,f.jsx("div",{className:O.steps,role:"group","aria-label":`${o} scale`,children:ae.map(([B,T,$])=>f.jsxs("button",{type:"button",className:O.step,"aria-pressed":R===B,onClick:()=>b(`var(${$})`),children:[B,T&&f.jsx("span",{className:O.stepRole,children:T})]},B))})]}))}else if(i==="time"){const R=xv(c);le=f.jsxs("div",{className:O.editor,children:[f.jsx("input",{type:"range","aria-label":o,min:"0",max:"1200",step:"10",value:R,onChange:K=>b(`${K.target.value}ms`)}),f.jsxs("span",{className:O.readout,children:[Math.round(R),"ms"]})]})}else i==="easing"?le=f.jsx(qd,{label:o,value:c,spring:v,presets:E,asRef:!0,onChange:(R,K,de)=>{b(R),N(K,de)}}):i==="shadow"?le=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:O.editor,children:[f.jsxs("label",{className:O.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.scale)??1,onChange:R=>C({...m,scale:+R.target.value})})]}),f.jsxs("label",{className:O.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.strength)??1,onChange:R=>C({...m,strength:+R.target.value})})]})]}),f.jsx(bv,{name:o,value:c,onSet:b})]}):le=f.jsx("input",{type:"text","aria-label":o,value:c,onChange:R=>b(R.target.value)});return f.jsxs("div",{className:`${O.token} ${Q?O.changed:""}`,children:[f.jsxs("div",{className:O.tokenHead,children:[f.jsxs("code",{className:O.tokenName,children:[o.replace("--sc-",""),Q&&h&&f.jsx("span",{className:O.scope,children:h==="all"?"both modes":`${h} only`})]}),f.jsxs("span",{className:O.tokenActions,children:[H&&f.jsx("button",{type:"button",className:O.reset,title:`Set to this concept's ${H.replace("--sc-","")} value`,onClick:J,children:"copy rest"}),f.jsx("button",{type:"button",className:O.reset,"aria-pressed":Y,onClick:()=>X(R=>!R),children:"note"}),Q&&f.jsx("button",{type:"button",className:O.reset,onClick:I,"aria-label":`Reset ${o}`,children:"reset"})]})]}),le,(L==null?void 0:L.length)>0&&i!=="easing"&&f.jsxs("select",{"aria-label":`${o} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:R=>R.target.value&&b(`var(${R.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),L.map(R=>f.jsx("option",{value:R,children:R.replace("--sc-p-","")},R))]}),Y&&f.jsx("input",{type:"text",className:O.pin,"aria-label":`Note on ${o}`,placeholder:"Note on this value…",value:x||"",onChange:R=>j(R.target.value)}),f.jsxs("div",{className:O.values,children:[f.jsxs("span",{title:l,children:["shipped ",l]}),Q&&f.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function Sv({def:o,value:i,spring:l,easingPresets:c,onChange:p,onSpring:h}){const m=`prop-${o.name}`;let v;if(o.type==="boolean")v=f.jsx("input",{id:m,type:"checkbox",checked:!!i,onChange:x=>p(x.target.checked)});else if(o.type==="enum")v=f.jsx("select",{id:m,value:i,onChange:x=>p(x.target.value),children:o.options.map(x=>f.jsx("option",{children:x},x))});else if(o.type==="number")v=f.jsx("input",{id:m,type:"number",className:O.num,min:o.min,max:o.max,value:i,onChange:x=>p(+x.target.value)});else if(o.type==="range")v=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:m,type:"range",min:o.min,max:o.max,step:o.step,value:i,onChange:x=>p(+x.target.value)}),f.jsxs("span",{className:O.readout,children:[i,o.unit||""]})]});else{if(o.type==="easing")return f.jsxs("div",{className:O.propBlock,children:[f.jsx("span",{className:O.propLabel,children:f.jsx("code",{children:o.name})}),f.jsx(qd,{label:o.name,value:i,spring:l,presets:c,onChange:(x,L,E)=>h(x,L,E)})]});v=f.jsx("input",{id:m,type:"text",value:i,onChange:x=>p(x.target.value)})}return f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:m,children:f.jsx("code",{children:o.name})}),v]})}const wn=!0,zv="./sounds/",Mv=3,Cv=o=>`sc-tune:v2:${o}`,jv=["all","light","dark"],Yd=o=>/^--sc-(color|shadow)-/.test(o),To=(o,i)=>Yd(o)?i:"all",Wo=()=>({all:{},light:{},dark:{}}),Ro=(o,i)=>({...o.overrides.all,...o.overrides[i]}),Ql=["A","B","C","D"],Xl=o=>[...new Set(o)],Io=Xl(f0.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Av={color:Io.filter(o=>o.startsWith("--sc-p-color-")&&!o.endsWith("-rgb")),length:Io.filter(o=>/^--sc-p-(space|size|radius|border-width)-/.test(o)),time:Io.filter(o=>o.startsWith("--sc-p-motion-duration-"))},Nv=Io.filter(o=>o.startsWith("--sc-p-motion-easing-"));function Fv(o){var p;const i=o.join(`
`),l=Xl(((p=i.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(h=>h.slice(4)))||[]),c=Xl(i.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:l.sort(),derived:c}}const bd=o=>{var i;return((i=o.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:i[1])||"other"};function Vo(o){return o?/^(cubic-bezier|ease|linear|steps)/.test(o)?"easing":/^-?[\d.]+m?s$/.test(o)?"time":/px/.test(o)&&/(rgb|#|hsl|color\(|inset)/.test(o)||/(rgb|#|hsl|color\()/.test(o)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(o.trim())?"shadow":CSS.supports("color",o)?"color":/^-?[\d.]+px$/.test(o)?"length":/^-?[\d.]+$/.test(o)?"number":"text":"text"}const ei=(o,i)=>{if(!o)return{};const l=getComputedStyle(o);return Object.fromEntries(i.map(c=>[c,l.getPropertyValue(c).trim()]))},Pv=(o,i)=>{if(!o)return{};const l=document.createElement("span");l.style.cssText="position:absolute;visibility:hidden;height:0;",o.appendChild(l);const c=Object.fromEntries(i.map(p=>(l.style.width=`var(${p})`,[p,getComputedStyle(l).width])));return l.remove(),c},kd=(o,i)=>{if(!o)return{};const l=document.createElement("div");l.style.display="none";for(const[p,h]of Object.entries(i))l.style.setProperty(p,h);o.appendChild(l);const c=ei(l,Object.keys(i));return l.remove(),c};function Hv(o,i,l){return o.replace(/(-?[\d.]+)px/g,(c,p)=>`${At(p*i)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,h)=>`rgba(${p}, ${At(Math.min(1,h*l),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${At(Math.min(1,p*l),3)})`)}let bn=null;const _d=new Map;async function Oo(o,i,l){if(!o)return;bn=bn||new(window.AudioContext||window.webkitAudioContext),bn.state==="suspended"&&await bn.resume();let c=_d.get(o);if(!c){const m=await(await fetch(zv+o)).arrayBuffer();c=await bn.decodeAudioData(m),_d.set(o,c)}const p=bn.createBufferSource(),h=bn.createGain();h.gain.value=i,p.buffer=c,p.playbackRate.value=l,p.connect(h).connect(bn.destination),p.start()}const $v=["rest","hover","focus","active"],Tv={hover:":hover",focus:":focus-visible",active:":active"};function Rv(o){var p;const i=Tv[o];if(!i)return"";const l=[],c=(h,m)=>{for(const v of h){if(v.cssRules&&v.media){c(v.cssRules,L=>m(`@media ${v.media.mediaText}{${L}}`));continue}if(!v.selectorText||!v.selectorText.includes(i))continue;const x=v.selectorText.split(",").map(L=>L.trim()).filter(L=>L.includes(i)).map(L=>`[data-force='${o}'] ${L.split(i).join("")}`).join(", ");l.push(m(`${x}{${v.style.cssText}}`))}};for(const h of document.styleSheets)if(((p=h.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(h.cssRules,m=>m)}catch{}return l.join(`
`)}const ii=o=>Object.fromEntries(o.props.map(i=>[i.name,i.default]));function Jd(o,i){var l,c,p;for(const[h,m]of Object.entries(((l=o.seed)==null?void 0:l.overrides)||{}))Object.values(i.overrides).some(v=>h in v)||(i.overrides.all[h]=m);for(const[h,m]of Object.entries(((c=o.seed)==null?void 0:c.scoped)||{}))for(const[v,x]of Object.entries(m))!(v in i.overrides[h])&&!(v in i.overrides.all)&&(i.overrides[h][v]=x);for(const[h,m]of Object.entries(((p=o.seed)==null?void 0:p.springs)||{})){if(i.springs[h]||Object.values(i.overrides).some(x=>h in x))continue;const v=Zo(m);i.springs[h]=m,i.overrides.all[h]=v.easing,i.overrides.all[h.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return i}const Xd=(o,i)=>Jd(o,{id:i,overrides:Wo(),shadowAdj:Wo(),springs:{},pins:{},notes:"",props:ii(o),sound:{file:o.shippedSound,volume:.7,rate:1}});function Vv(o){const i=zr[o];return{component:o,notes:"",active:"A",concepts:[Xd(i,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:i.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function Ld(o){var i;try{const l=JSON.parse(localStorage.getItem(Cv(o))||"null");if((l==null?void 0:l.component)===o&&Array.isArray(l.concepts)){for(const c of l.concepts){if(c.props={...ii(zr[o]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=Wo();for(const[m,v]of Object.entries(c.overrides))p[Yd(m)?"dark":"all"][m]=v;const h=Wo();for(const[m,v]of Object.entries(c.shadowAdj||{}))h.dark[m]=v;c.overrides=p,c.shadowAdj=h}if(o==="Button")for(const p of Object.values(c.overrides))for(const h of Object.keys(p)){if(!h.startsWith("--sc-font-text-label-chrome-"))continue;const m=h.replace("label-chrome-","label-button-lg-");m in p||(p[m]=p[h]),delete p[h]}}((i=l.view)==null?void 0:i.ground)==="#E3DFD8"&&(l.view.ground="--sc-color-surface-page");for(const c of l.concepts)Jd(zr[o],c);return l}}catch{}return Vv(o)}function Ov(){const o=new URLSearchParams(location.search).get("c"),[i,l]=u.useState(zr[o]?o:"Switch"),[c,p]=u.useState(()=>Ld(i)),[h,m]=u.useState(null),[v,x]=u.useState([]),[L,E]=u.useState(!0),[b,C]=u.useState({}),[N,I]=u.useState({}),[j,H]=u.useState({}),[J,Q]=u.useState(0),[Y,X]=u.useState(!1),[le,R]=u.useState(!1),K=u.useRef(null),de=u.useRef({}),he=u.useRef(null),ne=zr[i],ae=ne.kind==="motion",{tokens:B,derived:T}=u.useMemo(()=>{const _=Fv(ne.css);return{..._,tokens:[...new Set([..._.tokens,...ne.jsTokens||[]])].sort()}},[ne]),$=c.concepts.find(_=>_.id===c.active)||c.concepts[0],xe=u.useMemo(()=>{const _=getComputedStyle(document.documentElement);return Nv.map(F=>({name:F,value:_.getPropertyValue(F).trim()}))},[]);u.useEffect(()=>{fetch("./spec.json").then(_=>_.json()).then(_=>{l(_.component),p(_.state),m({recorded:_.recorded})})},[]),u.useEffect(()=>{},[]);const me=_=>{l(_),p(Ld(_)),history.replaceState(null,"",`?c=${_}`)};u.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const pe=c.view.force||"rest";u.useEffect(()=>{let _=document.getElementById("sc-tune-force");_||(_=document.createElement("style"),_.id="sc-tune-force",document.head.appendChild(_)),_.textContent=Rv(pe)},[pe]),u.useLayoutEffect(()=>{var P;C(ei(K.current,B));const _=ei(K.current,B);de.current[c.view.theme]=_,I({..._,...kd(K.current,Ro($,c.view.theme))});const F=(P=he.current)==null?void 0:P.querySelector("[class]");H(Pv(F?F.closest("label")||F:null,T))},[B,T,$.overrides,c.view.theme,$.props]),u.useEffect(()=>{},[c,i]);const W=u.useCallback(_=>p(F=>F),[]),oe=u.useCallback((_,F)=>p(P=>({...P,concepts:P.concepts.map(we=>we.id===_?F(we):we)})),[]),G=u.useCallback(_=>(F,P)=>oe(_,we=>({...we,props:{...we.props,[F]:P}})),[oe]),k=_=>W(F=>({...F,concepts:F.concepts.map(P=>P.id===F.active?_(P):P)})),A=c.view.theme,ie=(_,F,P)=>{const we=To(F,A),ve={..._,[we]:{..._[we]}};return P===void 0?delete ve[we][F]:ve[we][F]=P,ve},ge=(_,F)=>k(P=>({...P,overrides:ie(P.overrides,_,F)})),be=_=>k(F=>{const P={...F.springs};return delete P[_],{...F,overrides:ie(F.overrides,_,void 0),shadowAdj:ie(F.shadowAdj,_,void 0),springs:P}}),ke=(_,F,P)=>k(we=>{const ve={...we.springs};let Le=we.overrides;if(F){ve[_]=F;const rt=_.replace(/-easing$/,"-duration");rt!==_&&B.includes(rt)&&(Le=ie(Le,rt,`${P}ms`))}else delete ve[_];return{...we,springs:ve,overrides:Le}}),Ce=(_,F)=>k(P=>({...P,shadowAdj:ie(P.shadowAdj,_,F),overrides:ie(P.overrides,_,Hv(b[_],F.scale??1,F.strength??1))})),Se=(_,F)=>k(P=>({...P,pins:{...P.pins,[_]:F}})),ze=(_,F)=>k(P=>({...P,sound:{...P.sound,[_]:F}})),Oe=(_,F)=>p(P=>({...P,view:{...P.view,[_]:F}})),Gt=ne.props.some(_=>_.name==="disabled"),ws=_=>p(F=>({...F,view:{...F.view,force:_==="disabled"?"rest":_},concepts:Gt?F.concepts.map(P=>({...P,props:{...P.props,disabled:_==="disabled"}})):F.concepts})),Ln=_=>W(F=>{const P=Ql.find(Le=>!F.concepts.some(rt=>rt.id===Le));if(!P)return F;const we=F.concepts.find(Le=>Le.id===F.active),ve=_?{...structuredClone(we),id:P,notes:""}:Xd(ne,P);return{...F,concepts:[...F.concepts,ve],active:P}}),jr=_=>W(F=>{if(F.concepts.length<2)return F;const P=F.concepts.filter(we=>we.id!==_);return{...F,concepts:P,active:P[0].id,pick:F.pick.id===_?{id:null,reason:F.pick.reason}:F.pick}}),bs=()=>p(_=>{const F=!_.view.blind,P=F?[..._.concepts.map(we=>we.id)].sort(()=>Math.random()-.5):null;return{..._,view:{..._.view,blind:F,order:P,compare:F?!0:_.view.compare}}}),Un=u.useCallback(()=>{Q(F=>F+1),ne.play&&c.concepts.forEach(F=>ne.play(F.props,G(F.id)));const _=c.concepts.find(F=>F.id===c.active);_!=null&&_.sound.file&&Oo(_.sound.file,_.sound.volume,_.sound.rate)},[ne,c.concepts,c.active,G]),Wn=ae?Math.max(1200,Wl($.props)*c.view.slow+900):1400*c.view.slow;u.useEffect(()=>{if(!Y)return;const _=setInterval(Un,Wn);return()=>clearInterval(_)},[Y,Un,Wn]);const ks=B.filter(_=>Vo(b[_])==="time"),Kn=_=>{const F=c.view.ground,P=F.startsWith("--")?{background:`var(${F})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:F,"--sc-color-surface-page":F},we={zoom:c.view.zoom,...P,..._};if(c.view.slow!==1)for(const ve of ks)we[ve]=`calc(${_[ve]??b[ve]} * ${c.view.slow})`;return we};u.useEffect(()=>{window.dispatchEvent(new Event("sc-tokens-change"))},[c.concepts,c.view.theme]);const qt=u.useCallback(()=>{const _=K.current,F=P=>P.id;return{tool:"sc-tune",version:Mv,component:i,kind:ne.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(P=>{const we=kd(_,Ro(P,c.view.theme));return{id:F(P),notes:P.notes,props:P.props,sound:{...P.sound,shipped:ne.shippedSound,trigger:ne.trigger},tokens:jv.flatMap(ve=>Object.keys(P.overrides[ve]).map(Le=>{var Es;const rt=ve==="all"?b:de.current[ve]||{},Vt=P.overrides[ve][Le],Ls=ve==="all"||ve===c.view.theme;return{name:Le,mode:ve,category:bd(Le),kind:Vo(rt[Le]||b[Le]),shipped:rt[Le]??null,tuned:Ls?we[Le]??Vt:Vt,override:Vt,...(Es=P.shadowAdj[ve])!=null&&Es[Le]?{shadowAdjust:P.shadowAdj[ve][Le]}:{},...P.springs[Le]?{spring:{...P.springs[Le],...Ed(P.springs[Le])}}:{}}})),pins:Object.fromEntries(Object.entries(P.pins).filter(([,ve])=>ve)),...ae?{motion:{lastFrameMs:Wl(P.props),...P.springs["prop:easing"]?{spring:{...P.springs["prop:easing"],...Ed(P.springs["prop:easing"])}}:{}}}:{}}}),derived:j,tokenCount:B.length,state:c}},[i,ne,ae,c,b,j,B]);u.useEffect(()=>{window.scTune={export:qt,component:i}},[qt,i]);const Yt=u.useMemo(()=>{var F;const _={};for(const P of B)(_[F=bd(P)]||(_[F]=[])).push(P);return _},[B]),Ar=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(_=>c.concepts.find(F=>F.id===_)).filter(Boolean):c.concepts:[$],Nr={replay:J,slow:c.view.slow};v.filter(_=>!L||_.seconds<=1);const Fr=Ro($,c.view.theme),_s=Object.keys(Fr).length;return f.jsxs("div",{className:O.app,children:[f.jsxs("header",{className:O.bar,children:[f.jsx("span",{className:O.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:i,disabled:wn,onChange:_=>me(_.target.value),children:Object.keys(zr).map(_=>f.jsx("option",{children:_},_))}),f.jsxs("span",{className:O.meta,children:[ae?"choreography":`${B.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),h&&f.jsxs("span",{className:O.meta,children:["snapshot · recorded ",h.recorded]}),f.jsx("span",{className:O.spacer}),f.jsx("button",{type:"button",onClick:Un,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":Y,onClick:()=>X(_=>!_),children:Y?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:_=>Oe("slow",+_.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>Oe("compare",!c.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:bs,children:c.view.blind?"Reveal":"Blind"}),!wn]}),f.jsx("main",{className:O.stages,children:f.jsxs(p0,{enabled:!1,children:[!c.view.blind&&f.jsxs("section",{className:O.stageWrap,"aria-label":ae?"Default":"Shipped",children:[f.jsx("h2",{className:O.stageLabel,children:ae?"Default":"Shipped"}),f.jsx("div",{className:O.stage,style:Kn({}),ref:K,inert:"","data-force":pe,children:ne.render(ae?ii(ne):$.props,()=>{},()=>{},Nr)})]}),c.view.blind&&f.jsx("div",{ref:K,hidden:!0}),Ar.map((_,F)=>{const P=c.view.blind?`Concept ${F+1}`:`${_.id}${_.id===c.active?" · editing":""}${c.pick.id===_.id?" · picked":""}`;return f.jsxs("section",{className:`${O.stageWrap} ${_.id===c.active&&!c.view.blind?O.activeStage:""}`,"aria-label":P,children:[f.jsxs("h2",{className:O.stageLabel,children:[c.view.compare&&!c.view.blind?f.jsx("button",{type:"button",className:O.stageSelect,onClick:()=>p(we=>({...we,active:_.id})),children:P}):P,ae&&f.jsxs("span",{className:O.readout,children:[" · last frame ",Wl(_.props),"ms"]})]}),f.jsx("div",{className:O.stage,style:Kn(Ro(_,A)),ref:_.id===c.active?he:void 0,"data-force":pe,children:ne.render(_.props,G(_.id),()=>Oo(_.sound.file,_.sound.volume,_.sound.rate),Nr)})]},_.id)})]})}),f.jsxs("aside",{className:O.panel,children:[f.jsxs("fieldset",{className:O.group,disabled:wn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:O.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:_=>p(F=>({...F,notes:_.target.value}))})]}),f.jsxs("fieldset",{className:O.group,disabled:wn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:O.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(_=>f.jsx("button",{type:"button",role:"tab","aria-selected":_.id===c.active,className:O.tab,onClick:()=>p(F=>({...F,active:_.id})),children:_.id},_.id)),f.jsx("button",{type:"button",className:O.tab,disabled:c.concepts.length>=Ql.length,onClick:()=>Ln(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:O.tab,disabled:c.concepts.length>=Ql.length,onClick:()=>Ln(!1),children:"new"}),f.jsxs("button",{type:"button",className:O.tab,disabled:c.concepts.length<2,onClick:()=>jr($.id),children:["remove ",$.id]})]}),f.jsx("textarea",{className:O.notes,"aria-label":`Notes on concept ${$.id}`,placeholder:`What concept ${$.id} is trying…`,value:$.notes,onChange:_=>k(F=>({...F,notes:_.target.value}))}),c.concepts.length>1&&f.jsxs("div",{className:O.pick,children:[f.jsx("span",{className:O.propLabel,children:f.jsx("code",{children:"pick"})}),c.concepts.map(_=>f.jsxs("label",{className:O.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===_.id,onChange:()=>p(F=>({...F,pick:{...F.pick,id:_.id}}))})," ",_.id]},_.id)),f.jsx("textarea",{className:O.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:_=>p(F=>({...F,pick:{...F.pick,reason:_.target.value}}))})]})]}),f.jsxs("fieldset",{className:O.group,disabled:wn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:_=>Oe("theme",_.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:_=>Oe("zoom",+_.target.value)}),f.jsxs("span",{className:O.readout,children:[c.view.zoom,"×"]})]}),f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:c.view.ground,onChange:_=>Oe("ground",_.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(_=>f.jsx("option",{value:_,children:_.replace("--sc-color-","")},_))})]})]}),f.jsxs("fieldset",{className:O.group,disabled:wn,children:[f.jsxs("legend",{children:[ae?"Motion":"Props"," · concept ",$.id]}),(()=>{const _=ne.props.map(F=>f.jsx(Sv,{def:F,value:$.props[F.name],spring:$.springs[`prop:${F.name}`],easingPresets:xe,onChange:P=>G($.id)(F.name,P),onSpring:(P,we,ve)=>k(Le=>{const rt={...Le.springs},Vt={...Le.props,[F.name]:P};return we?(rt[`prop:${F.name}`]=we,F.durationProp&&(Vt[F.durationProp]=ve)):delete rt[`prop:${F.name}`],{...Le,springs:rt,props:Vt}})},F.name));return ae||_.splice(Math.min(3,_.length),0,f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Gt&&$.props.disabled?"disabled":pe,onChange:F=>ws(F.target.value),children:[$v.map(F=>f.jsx("option",{value:F,children:F==="rest"?"default":F},F)),Gt&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),_})()]}),f.jsxs("fieldset",{className:O.group,disabled:wn,children:[f.jsxs("legend",{children:["Sound · ",ne.trigger]}),f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:$.sound.volume,onChange:_=>ze("volume",+_.target.value)}),f.jsx("span",{className:O.readout,children:$.sound.volume})]}),f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:$.sound.rate,onChange:_=>ze("rate",+_.target.value)}),f.jsxs("span",{className:O.readout,children:[$.sound.rate,"×"]})]}),f.jsxs("div",{className:O.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:L,onChange:_=>E(_.target.checked)})]}),f.jsxs("ul",{className:O.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:O.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!$.sound.file,onChange:()=>ze("file",null)})," silent"]})}),($.sound.file?[{file:$.sound.file,seconds:""}]:[]).map(_=>f.jsxs("li",{className:`${O.sound} ${_.file===ne.shippedSound?O.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:$.sound.file===_.file,onChange:()=>{ze("file",_.file),Oo(_.file,$.sound.volume,$.sound.rate)}}),_.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:O.readout,children:[_.seconds&&`${_.seconds}s`,_.file===ne.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${_.file}`,onClick:()=>Oo(_.file,$.sound.volume,$.sound.rate),children:"play"})]},_.file))]})]}),!ae&&f.jsxs("p",{className:O.meta,children:[_s," of ",B.length," tokens tuned in concept ",$.id,", ",A," mode. Colour and shadow edits apply to ",A," only; size, type and motion apply to both modes."]}),Object.entries(Yt).map(([_,F])=>f.jsxs("fieldset",{className:O.group,disabled:wn,children:[f.jsxs("legend",{children:[_," · ",F.length]}),F.map(P=>{var we;return f.jsx(Ev,{name:P,kind:Vo(b[P]),shipped:b[P],value:N[P]||b[P]||"",override:Fr[P],scope:$.overrides[To(P,A)][P]!==void 0?To(P,A):$.overrides.all[P]!==void 0?"all":null,adj:(we=$.shadowAdj[To(P,A)])==null?void 0:we[P],spring:$.springs[P],pin:$.pins[P],refs:Av[Vo(b[P])],easingPresets:xe,onSet:ve=>ge(P,ve),onAdj:ve=>Ce(P,ve),onSpring:(ve,Le)=>ke(P,ve,Le),onReset:()=>be(P),restOf:P.endsWith("-hover")&&B.includes(P.slice(0,-6))?P.slice(0,-6):null,onCopyRest:()=>ge(P,N[P.slice(0,-6)]||b[P.slice(0,-6)]),onPin:ve=>Se(P,ve)},`${$.id}${A}${P}`)})]},_)),T.length>0&&f.jsxs("fieldset",{className:O.group,children:[f.jsx("legend",{children:"derived · read-only"}),T.map(_=>f.jsxs("div",{className:O.values,children:[f.jsx("code",{children:_})," ",j[_]]},_))]})]})]})}function Ed(o){const i=Zo(o);return{settleMs:i.settleMs,overshoot:At(i.overshoot,3),framerMotion:{type:"spring",stiffness:o.stiffness,damping:o.damping,mass:o.mass}}}function Dv(){return new URLSearchParams(location.search).get("c"),f.jsx(Ov,{})}const Gl=document.getElementById("root");Gl.dataset.mounted||(Gl.dataset.mounted="true",o0.createRoot(Gl).render(f.jsx(Dv,{})));
