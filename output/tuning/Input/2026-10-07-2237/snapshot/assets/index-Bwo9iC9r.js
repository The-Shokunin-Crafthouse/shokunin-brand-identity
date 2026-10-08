(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function l(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(p){if(p.ep)return;p.ep=!0;const h=l(p);fetch(p.href,h)}})();function Tf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fl={exports:{}},po={},Pl={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function $f(){if(Ou)return xe;Ou=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),E=Symbol.iterator;function j(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,H={};function Q(b,A,fe){this.props=b,this.context=A,this.refs=H,this.updater=fe||F}Q.prototype.isReactComponent={},Q.prototype.setState=function(b,A){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,A,"setState")},Q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ee(){}ee.prototype=Q.prototype;function oe(b,A,fe){this.props=b,this.context=A,this.refs=H,this.updater=fe||F}var ne=oe.prototype=new ee;ne.constructor=oe,U(ne,Q.prototype),ne.isPureReactComponent=!0;var Y=Array.isArray,ce=Object.prototype.hasOwnProperty,O={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function he(b,A,fe){var ve,be={},ke=null,je=null;if(A!=null)for(ve in A.ref!==void 0&&(je=A.ref),A.key!==void 0&&(ke=""+A.key),A)ce.call(A,ve)&&!W.hasOwnProperty(ve)&&(be[ve]=A[ve]);var Ee=arguments.length-2;if(Ee===1)be.children=fe;else if(1<Ee){for(var ze=Array(Ee),Ve=0;Ve<Ee;Ve++)ze[Ve]=arguments[Ve+2];be.children=ze}if(b&&b.defaultProps)for(ve in Ee=b.defaultProps,Ee)be[ve]===void 0&&(be[ve]=Ee[ve]);return{$$typeof:s,type:b,key:ke,ref:je,props:be,_owner:O.current}}function ue(b,A){return{$$typeof:s,type:b.type,key:A,ref:b.ref,props:b.props,_owner:b._owner}}function le(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function ie(b){var A={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return A[fe]})}var I=/\/+/g;function D(b,A){return typeof b=="object"&&b!==null&&b.key!=null?ie(""+b.key):A.toString(36)}function T(b,A,fe,ve,be){var ke=typeof b;(ke==="undefined"||ke==="boolean")&&(b=null);var je=!1;if(b===null)je=!0;else switch(ke){case"string":case"number":je=!0;break;case"object":switch(b.$$typeof){case s:case i:je=!0}}if(je)return je=b,be=be(je),b=ve===""?"."+D(je,0):ve,Y(be)?(fe="",b!=null&&(fe=b.replace(I,"$&/")+"/"),T(be,A,fe,"",function(Ve){return Ve})):be!=null&&(le(be)&&(be=ue(be,fe+(!be.key||je&&je.key===be.key?"":(""+be.key).replace(I,"$&/")+"/")+b)),A.push(be)),1;if(je=0,ve=ve===""?".":ve+":",Y(b))for(var Ee=0;Ee<b.length;Ee++){ke=b[Ee];var ze=ve+D(ke,Ee);je+=T(ke,A,fe,ze,be)}else if(ze=j(b),typeof ze=="function")for(b=ze.call(b),Ee=0;!(ke=b.next()).done;)ke=ke.value,ze=ve+D(ke,Ee++),je+=T(ke,A,fe,ze,be);else if(ke==="object")throw A=String(b),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return je}function we(b,A,fe){if(b==null)return b;var ve=[],be=0;return T(b,ve,"","",function(ke){return A.call(fe,ke,be++)}),ve}function me(b){if(b._status===-1){var A=b._result;A=A(),A.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=A)}if(b._status===1)return b._result.default;throw b._result}var pe={current:null},B={transition:null},re={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function K(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:we,forEach:function(b,A,fe){we(b,function(){A.apply(this,arguments)},fe)},count:function(b){var A=0;return we(b,function(){A++}),A},toArray:function(b){return we(b,function(A){return A})||[]},only:function(b){if(!le(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},xe.Component=Q,xe.Fragment=l,xe.Profiler=p,xe.PureComponent=oe,xe.StrictMode=c,xe.Suspense=k,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,xe.act=K,xe.cloneElement=function(b,A,fe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ve=U({},b.props),be=b.key,ke=b.ref,je=b._owner;if(A!=null){if(A.ref!==void 0&&(ke=A.ref,je=O.current),A.key!==void 0&&(be=""+A.key),b.type&&b.type.defaultProps)var Ee=b.type.defaultProps;for(ze in A)ce.call(A,ze)&&!W.hasOwnProperty(ze)&&(ve[ze]=A[ze]===void 0&&Ee!==void 0?Ee[ze]:A[ze])}var ze=arguments.length-2;if(ze===1)ve.children=fe;else if(1<ze){Ee=Array(ze);for(var Ve=0;Ve<ze;Ve++)Ee[Ve]=arguments[Ve+2];ve.children=Ee}return{$$typeof:s,type:b.type,key:be,ref:ke,props:ve,_owner:je}},xe.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:h,_context:b},b.Consumer=b},xe.createElement=he,xe.createFactory=function(b){var A=he.bind(null,b);return A.type=b,A},xe.createRef=function(){return{current:null}},xe.forwardRef=function(b){return{$$typeof:x,render:b}},xe.isValidElement=le,xe.lazy=function(b){return{$$typeof:C,_payload:{_status:-1,_result:b},_init:me}},xe.memo=function(b,A){return{$$typeof:z,type:b,compare:A===void 0?null:A}},xe.startTransition=function(b){var A=B.transition;B.transition={};try{b()}finally{B.transition=A}},xe.unstable_act=K,xe.useCallback=function(b,A){return pe.current.useCallback(b,A)},xe.useContext=function(b){return pe.current.useContext(b)},xe.useDebugValue=function(){},xe.useDeferredValue=function(b){return pe.current.useDeferredValue(b)},xe.useEffect=function(b,A){return pe.current.useEffect(b,A)},xe.useId=function(){return pe.current.useId()},xe.useImperativeHandle=function(b,A,fe){return pe.current.useImperativeHandle(b,A,fe)},xe.useInsertionEffect=function(b,A){return pe.current.useInsertionEffect(b,A)},xe.useLayoutEffect=function(b,A){return pe.current.useLayoutEffect(b,A)},xe.useMemo=function(b,A){return pe.current.useMemo(b,A)},xe.useReducer=function(b,A,fe){return pe.current.useReducer(b,A,fe)},xe.useRef=function(b){return pe.current.useRef(b)},xe.useState=function(b){return pe.current.useState(b)},xe.useSyncExternalStore=function(b,A,fe){return pe.current.useSyncExternalStore(b,A,fe)},xe.useTransition=function(){return pe.current.useTransition()},xe.version="18.3.1",xe}var Iu;function ql(){return Iu||(Iu=1,Pl.exports=$f()),Pl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function Df(){if(Zu)return po;Zu=1;var s=ql(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function g(x,k,z){var C,E={},j=null,F=null;z!==void 0&&(j=""+z),k.key!==void 0&&(j=""+k.key),k.ref!==void 0&&(F=k.ref);for(C in k)c.call(k,C)&&!h.hasOwnProperty(C)&&(E[C]=k[C]);if(x&&x.defaultProps)for(C in k=x.defaultProps,k)E[C]===void 0&&(E[C]=k[C]);return{$$typeof:i,type:x,key:j,ref:F,props:E,_owner:p.current}}return po.Fragment=l,po.jsx=g,po.jsxs=g,po}var Bu;function Hf(){return Bu||(Bu=1,Fl.exports=Df()),Fl.exports}var f=Hf(),d=ql(),As={},Rl={exports:{}},lt={},Tl={exports:{}},$l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function Vf(){return Uu||(Uu=1,(function(s){function i(B,re){var K=B.length;B.push(re);e:for(;0<K;){var b=K-1>>>1,A=B[b];if(0<p(A,re))B[b]=re,B[K]=A,K=b;else break e}}function l(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var re=B[0],K=B.pop();if(K!==re){B[0]=K;e:for(var b=0,A=B.length,fe=A>>>1;b<fe;){var ve=2*(b+1)-1,be=B[ve],ke=ve+1,je=B[ke];if(0>p(be,K))ke<A&&0>p(je,be)?(B[b]=je,B[ke]=K,b=ke):(B[b]=be,B[ve]=K,b=ve);else if(ke<A&&0>p(je,K))B[b]=je,B[ke]=K,b=ke;else break e}}return re}function p(B,re){var K=B.sortIndex-re.sortIndex;return K!==0?K:B.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var g=Date,x=g.now();s.unstable_now=function(){return g.now()-x}}var k=[],z=[],C=1,E=null,j=3,F=!1,U=!1,H=!1,Q=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(B){for(var re=l(z);re!==null;){if(re.callback===null)c(z);else if(re.startTime<=B)c(z),re.sortIndex=re.expirationTime,i(k,re);else break;re=l(z)}}function Y(B){if(H=!1,ne(B),!U)if(l(k)!==null)U=!0,me(ce);else{var re=l(z);re!==null&&pe(Y,re.startTime-B)}}function ce(B,re){U=!1,H&&(H=!1,ee(he),he=-1),F=!0;var K=j;try{for(ne(re),E=l(k);E!==null&&(!(E.expirationTime>re)||B&&!ie());){var b=E.callback;if(typeof b=="function"){E.callback=null,j=E.priorityLevel;var A=b(E.expirationTime<=re);re=s.unstable_now(),typeof A=="function"?E.callback=A:E===l(k)&&c(k),ne(re)}else c(k);E=l(k)}if(E!==null)var fe=!0;else{var ve=l(z);ve!==null&&pe(Y,ve.startTime-re),fe=!1}return fe}finally{E=null,j=K,F=!1}}var O=!1,W=null,he=-1,ue=5,le=-1;function ie(){return!(s.unstable_now()-le<ue)}function I(){if(W!==null){var B=s.unstable_now();le=B;var re=!0;try{re=W(!0,B)}finally{re?D():(O=!1,W=null)}}else O=!1}var D;if(typeof oe=="function")D=function(){oe(I)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,we=T.port2;T.port1.onmessage=I,D=function(){we.postMessage(null)}}else D=function(){Q(I,0)};function me(B){W=B,O||(O=!0,D())}function pe(B,re){he=Q(function(){B(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){U||F||(U=!0,me(ce))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return j},s.unstable_getFirstCallbackNode=function(){return l(k)},s.unstable_next=function(B){switch(j){case 1:case 2:case 3:var re=3;break;default:re=j}var K=j;j=re;try{return B()}finally{j=K}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,re){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=j;j=B;try{return re()}finally{j=K}},s.unstable_scheduleCallback=function(B,re,K){var b=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?b+K:b):K=b,B){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=K+A,B={id:C++,callback:re,priorityLevel:B,startTime:K,expirationTime:A,sortIndex:-1},K>b?(B.sortIndex=K,i(z,B),l(k)===null&&B===l(z)&&(H?(ee(he),he=-1):H=!0,pe(Y,K-b))):(B.sortIndex=A,i(k,B),U||F||(U=!0,me(ce))),B},s.unstable_shouldYield=ie,s.unstable_wrapCallback=function(B){var re=j;return function(){var K=j;j=re;try{return B.apply(this,arguments)}finally{j=K}}}})($l)),$l}var Wu;function Of(){return Wu||(Wu=1,Tl.exports=Vf()),Tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu;function If(){if(Qu)return lt;Qu=1;var s=ql(),i=Of();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function h(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},E={};function j(e){return k.call(E,e)?!0:k.call(C,e)?!1:z.test(e)?E[e]=!0:(C[e]=!0,!1)}function F(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,t,n,r){if(t===null||typeof t>"u"||F(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,r,o,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function oe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ee,oe);Q[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ee,oe);Q[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ee,oe);Q[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U(t,n,o,r)&&(n=null),r||o===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Y=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),O=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),ie=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),B=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,b;function A(e){if(b===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var fe=!1;function ve(e,t){if(!e||fe)return"";fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var o=S.stack.split(`
`),a=r.stack.split(`
`),u=o.length-1,m=a.length-1;1<=u&&0<=m&&o[u]!==a[m];)m--;for(;1<=u&&0<=m;u--,m--)if(o[u]!==a[m]){if(u!==1||m!==1)do if(u--,m--,0>m||o[u]!==a[m]){var v=`
`+o[u].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=u&&0<=m);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function be(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case O:return"Portal";case ue:return"Profiler";case he:return"StrictMode";case D:return"Suspense";case T:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case le:return(e._context.displayName||"Context")+".Provider";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(e){var t=ze(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=Ve(e))}function yo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ze(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sr(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ee(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Un(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Wn(e,t){Un(e,t);var n=Ee(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qn(e,t.type,Ee(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qn(e,t,n){(t!=="number"||_n(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qt=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ee(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Er(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ee(n)}}function Cr(e,t){var n=Ee(t.value),r=Ee(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function w(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?w(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var N,ye=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(N=N||document.createElement("div"),N.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=N.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ge(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(e){tt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]})});function Ht(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function Lo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ht(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var _o=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(_o[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Kn=null,Gn=null;function oi(e){if(e=qr(e)){if(typeof Gs!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Qo(t),Gs(e.stateNode,e.type,t))}}function si(e){Kn?Gn?Gn.push(e):Gn=[e]:Kn=e}function ai(){if(Kn){var e=Kn,t=Gn;if(Gn=Kn=null,oi(e),t)for(e=0;e<t.length;e++)oi(t[e])}}function li(e,t){return e(t)}function ii(){}var qs=!1;function ci(e,t,n){if(qs)return e(t,n);qs=!0;try{return li(e,t,n)}finally{qs=!1,(Kn!==null||Gn!==null)&&(ii(),ai())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Ys=!1;if(x)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Ys=!1}function Od(e,t,n,r,o,a,u,m,v){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch($){this.onError($)}}var Nr=!1,So=null,Eo=!1,Js=null,Id={onError:function(e){Nr=!0,So=e}};function Zd(e,t,n,r,o,a,u,m,v){Nr=!1,So=null,Od.apply(Id,arguments)}function Bd(e,t,n,r,o,a,u,m,v){if(Zd.apply(this,arguments),Nr){if(Nr){var S=So;Nr=!1,So=null}else throw Error(l(198));Eo||(Eo=!0,Js=S)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ui(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function di(e){if(Sn(e)!==e)throw Error(l(188))}function Ud(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return di(o),e;if(a===r)return di(o),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=o,r=a;else{for(var u=!1,m=o.child;m;){if(m===n){u=!0,n=o,r=a;break}if(m===r){u=!0,r=o,n=a;break}m=m.sibling}if(!u){for(m=a.child;m;){if(m===n){u=!0,n=a,r=o;break}if(m===r){u=!0,r=a,n=o;break}m=m.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function pi(e){return e=Ud(e),e!==null?fi(e):null}function fi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fi(e);if(t!==null)return t;e=e.sibling}return null}var hi=i.unstable_scheduleCallback,mi=i.unstable_cancelCallback,Wd=i.unstable_shouldYield,Qd=i.unstable_requestPaint,$e=i.unstable_now,Kd=i.unstable_getCurrentPriorityLevel,Xs=i.unstable_ImmediatePriority,gi=i.unstable_UserBlockingPriority,zo=i.unstable_NormalPriority,Gd=i.unstable_LowPriority,vi=i.unstable_IdlePriority,Co=null,Ft=null;function qd(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Xd,Yd=Math.log,Jd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Yd(e)/Jd|0)|0}var jo=64,Mo=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function No(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,u=n&268435455;if(u!==0){var m=u&~o;m!==0?r=Ar(m):(a&=u,a!==0&&(r=Ar(a)))}else u=n&~o,u!==0?r=Ar(u):a!==0&&(r=Ar(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-Lt(a),m=1<<u,v=o[u];v===-1?((m&n)===0||(m&r)!==0)&&(o[u]=ep(m,t)):v<=t&&(e.expiredLanes|=m),a&=~m}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xi(){var e=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),e}function ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function np(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function na(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ce=0;function yi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wi,ra,bi,ki,Li,oa=!1,Ao=[],Jt=null,Xt=null,en=null,Pr=new Map,Rr=new Map,tn=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _i(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Tr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function op(e,t,n,r,o){switch(t){case"focusin":return Jt=Tr(Jt,e,t,n,r,o),!0;case"dragenter":return Xt=Tr(Xt,e,t,n,r,o),!0;case"mouseover":return en=Tr(en,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Pr.set(a,Tr(Pr.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Rr.set(a,Tr(Rr.get(a)||null,e,t,n,r,o)),!0}return!1}function Si(e){var t=En(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=ui(n),t!==null){e.blockedOn=t,Li(e.priority,function(){bi(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=qr(n),t!==null&&ra(t),e.blockedOn=n,!1;t.shift()}return!0}function Ei(e,t,n){Fo(e)&&n.delete(t)}function sp(){oa=!1,Jt!==null&&Fo(Jt)&&(Jt=null),Xt!==null&&Fo(Xt)&&(Xt=null),en!==null&&Fo(en)&&(en=null),Pr.forEach(Ei),Rr.forEach(Ei)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,oa||(oa=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,sp)))}function Dr(e){function t(o){return $r(o,e)}if(0<Ao.length){$r(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&$r(Jt,e),Xt!==null&&$r(Xt,e),en!==null&&$r(en,e),Pr.forEach(t),Rr.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Si(n),n.blockedOn===null&&tn.shift()}var qn=Y.ReactCurrentBatchConfig,Po=!0;function ap(e,t,n,r){var o=Ce,a=qn.transition;qn.transition=null;try{Ce=1,sa(e,t,n,r)}finally{Ce=o,qn.transition=a}}function lp(e,t,n,r){var o=Ce,a=qn.transition;qn.transition=null;try{Ce=4,sa(e,t,n,r)}finally{Ce=o,qn.transition=a}}function sa(e,t,n,r){if(Po){var o=aa(e,t,n,r);if(o===null)La(e,t,r,Ro,n),_i(e,r);else if(op(o,e,t,n,r))r.stopPropagation();else if(_i(e,r),t&4&&-1<rp.indexOf(e)){for(;o!==null;){var a=qr(o);if(a!==null&&wi(a),a=aa(e,t,n,r),a===null&&La(e,t,r,Ro,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else La(e,t,r,null,n)}}var Ro=null;function aa(e,t,n,r){if(Ro=null,e=Ks(r),e=En(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ui(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function zi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case Xs:return 1;case gi:return 4;case zo:case Gd:return 16;case vi:return 536870912;default:return 16}default:return 16}}var nn=null,la=null,To=null;function Ci(){if(To)return To;var e,t=la,n=t.length,r,o="value"in nn?nn.value:nn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[a-r];r++);return To=o.slice(e,1<r?1-r:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function ji(){return!1}function ct(e){function t(n,r,o,a,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Do:ji,this.isPropagationStopped=ji,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=ct(Yn),Hr=K({},Yn,{view:0,detail:0}),ip=ct(Hr),ca,ua,Vr,Ho=K({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(ca=e.screenX-Vr.screenX,ua=e.screenY-Vr.screenY):ua=ca=0,Vr=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Mi=ct(Ho),cp=K({},Ho,{dataTransfer:0}),up=ct(cp),dp=K({},Hr,{relatedTarget:0}),da=ct(dp),pp=K({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=ct(pp),hp=K({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mp=ct(hp),gp=K({},Yn,{data:0}),Ni=ct(gp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function pa(){return wp}var bp=K({},Hr,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=ct(bp),Lp=K({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ai=ct(Lp),_p=K({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Sp=ct(_p),Ep=K({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=ct(Ep),Cp=K({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=ct(Cp),Mp=[9,13,27,32],fa=x&&"CompositionEvent"in window,Or=null;x&&"documentMode"in document&&(Or=document.documentMode);var Np=x&&"TextEvent"in window&&!Or,Fi=x&&(!fa||Or&&8<Or&&11>=Or),Pi=" ",Ri=!1;function Ti(e,t){switch(e){case"keyup":return Mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $i(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Ap(e,t){switch(e){case"compositionend":return $i(t);case"keypress":return t.which!==32?null:(Ri=!0,Pi);case"textInput":return e=t.data,e===Pi&&Ri?null:e;default:return null}}function Fp(e,t){if(Jn)return e==="compositionend"||!fa&&Ti(e,t)?(e=Ci(),To=la=nn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fi&&t.locale!=="ko"?null:t.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pp[e.type]:t==="textarea"}function Hi(e,t,n,r){si(r),t=Bo(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Zr=null;function Rp(e){rc(e,0)}function Vo(e){var t=rr(e);if(yo(t))return e}function Tp(e,t){if(e==="change")return t}var Vi=!1;if(x){var ha;if(x){var ma="oninput"in document;if(!ma){var Oi=document.createElement("div");Oi.setAttribute("oninput","return;"),ma=typeof Oi.oninput=="function"}ha=ma}else ha=!1;Vi=ha&&(!document.documentMode||9<document.documentMode)}function Ii(){Ir&&(Ir.detachEvent("onpropertychange",Zi),Zr=Ir=null)}function Zi(e){if(e.propertyName==="value"&&Vo(Zr)){var t=[];Hi(t,Zr,e,Ks(e)),ci(Rp,t)}}function $p(e,t,n){e==="focusin"?(Ii(),Ir=t,Zr=n,Ir.attachEvent("onpropertychange",Zi)):e==="focusout"&&Ii()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(Zr)}function Hp(e,t){if(e==="click")return Vo(t)}function Vp(e,t){if(e==="input"||e==="change")return Vo(t)}function Op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Op;function Br(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function Bi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ui(e,t){var n=Bi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bi(n)}}function Wi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qi(){for(var e=window,t=_n();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_n(e.document)}return t}function ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ip(e){var t=Qi(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wi(n.ownerDocument.documentElement,n)){if(r!==null&&ga(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Ui(n,a);var u=Ui(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zp=x&&"documentMode"in document&&11>=document.documentMode,Xn=null,va=null,Ur=null,xa=!1;function Ki(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xa||Xn==null||Xn!==_n(r)||(r=Xn,"selectionStart"in r&&ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Br(Ur,r)||(Ur=r,r=Bo(va,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},ya={},Gi={};x&&(Gi=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Io(e){if(ya[e])return ya[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gi)return ya[e]=t[n];return e}var qi=Io("animationend"),Yi=Io("animationiteration"),Ji=Io("animationstart"),Xi=Io("transitionend"),ec=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){ec.set(e,t),h(t,[e])}for(var wa=0;wa<tc.length;wa++){var ba=tc[wa],Bp=ba.toLowerCase(),Up=ba[0].toUpperCase()+ba.slice(1);rn(Bp,"on"+Up)}rn(qi,"onAnimationEnd"),rn(Yi,"onAnimationIteration"),rn(Ji,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Xi,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bd(r,t,void 0,e),e.currentTarget=null}function rc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var m=r[u],v=m.instance,S=m.currentTarget;if(m=m.listener,v!==a&&o.isPropagationStopped())break e;nc(o,m,S),a=v}else for(u=0;u<r.length;u++){if(m=r[u],v=m.instance,S=m.currentTarget,m=m.listener,v!==a&&o.isPropagationStopped())break e;nc(o,m,S),a=v}}}if(Eo)throw e=Js,Eo=!1,Js=null,e}function Ne(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var r=e+"__bubble";n.has(r)||(oc(t,e,2,!1),n.add(r))}function ka(e,t,n){var r=0;t&&(r|=4),oc(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Zo]){e[Zo]=!0,c.forEach(function(n){n!=="selectionchange"&&(Wp.has(n)||ka(n,!1,e),ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,ka("selectionchange",!1,t))}}function oc(e,t,n,r){switch(zi(t)){case 1:var o=ap;break;case 4:o=lp;break;default:o=sa}n=o.bind(null,t,n,e),o=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function La(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var m=r.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var v=u.tag;if((v===3||v===4)&&(v=u.stateNode.containerInfo,v===o||v.nodeType===8&&v.parentNode===o))return;u=u.return}for(;m!==null;){if(u=En(m),u===null)return;if(v=u.tag,v===5||v===6){r=a=u;continue e}m=m.parentNode}}r=r.return}ci(function(){var S=a,$=Ks(n),V=[];e:{var P=ec.get(e);if(P!==void 0){var G=ia,J=e;switch(e){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":G=kp;break;case"focusin":J="focus",G=da;break;case"focusout":J="blur",G=da;break;case"beforeblur":case"afterblur":G=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Mi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Sp;break;case qi:case Yi:case Ji:G=fp;break;case Xi:G=zp;break;case"scroll":G=ip;break;case"wheel":G=jp;break;case"copy":case"cut":case"paste":G=mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Ai}var X=(t&4)!==0,De=!X&&e==="scroll",L=X?P!==null?P+"Capture":null:P;X=[];for(var y=S,_;y!==null;){_=y;var Z=_.stateNode;if(_.tag===5&&Z!==null&&(_=Z,L!==null&&(Z=jr(y,L),Z!=null&&X.push(Kr(y,Z,_)))),De)break;y=y.return}0<X.length&&(P=new G(P,J,null,n,$),V.push({event:P,listeners:X}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",P&&n!==Qs&&(J=n.relatedTarget||n.fromElement)&&(En(J)||J[Vt]))break e;if((G||P)&&(P=$.window===$?$:(P=$.ownerDocument)?P.defaultView||P.parentWindow:window,G?(J=n.relatedTarget||n.toElement,G=S,J=J?En(J):null,J!==null&&(De=Sn(J),J!==De||J.tag!==5&&J.tag!==6)&&(J=null)):(G=null,J=S),G!==J)){if(X=Mi,Z="onMouseLeave",L="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(X=Ai,Z="onPointerLeave",L="onPointerEnter",y="pointer"),De=G==null?P:rr(G),_=J==null?P:rr(J),P=new X(Z,y+"leave",G,n,$),P.target=De,P.relatedTarget=_,Z=null,En($)===S&&(X=new X(L,y+"enter",J,n,$),X.target=_,X.relatedTarget=De,Z=X),De=Z,G&&J)t:{for(X=G,L=J,y=0,_=X;_;_=tr(_))y++;for(_=0,Z=L;Z;Z=tr(Z))_++;for(;0<y-_;)X=tr(X),y--;for(;0<_-y;)L=tr(L),_--;for(;y--;){if(X===L||L!==null&&X===L.alternate)break t;X=tr(X),L=tr(L)}X=null}else X=null;G!==null&&sc(V,P,G,X,!1),J!==null&&De!==null&&sc(V,De,J,X,!0)}}e:{if(P=S?rr(S):window,G=P.nodeName&&P.nodeName.toLowerCase(),G==="select"||G==="input"&&P.type==="file")var te=Tp;else if(Di(P))if(Vi)te=Vp;else{te=Dp;var se=$p}else(G=P.nodeName)&&G.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(te=Hp);if(te&&(te=te(e,S))){Hi(V,te,n,$);break e}se&&se(e,P,S),e==="focusout"&&(se=P._wrapperState)&&se.controlled&&P.type==="number"&&Qn(P,"number",P.value)}switch(se=S?rr(S):window,e){case"focusin":(Di(se)||se.contentEditable==="true")&&(Xn=se,va=S,Ur=null);break;case"focusout":Ur=va=Xn=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Ki(V,n,$);break;case"selectionchange":if(Zp)break;case"keydown":case"keyup":Ki(V,n,$)}var ae;if(fa)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Jn?Ti(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(Fi&&n.locale!=="ko"&&(Jn||de!=="onCompositionStart"?de==="onCompositionEnd"&&Jn&&(ae=Ci()):(nn=$,la="value"in nn?nn.value:nn.textContent,Jn=!0)),se=Bo(S,de),0<se.length&&(de=new Ni(de,e,null,n,$),V.push({event:de,listeners:se}),ae?de.data=ae:(ae=$i(n),ae!==null&&(de.data=ae)))),(ae=Np?Ap(e,n):Fp(e,n))&&(S=Bo(S,"onBeforeInput"),0<S.length&&($=new Ni("onBeforeInput","beforeinput",null,n,$),V.push({event:$,listeners:S}),$.data=ae))}rc(V,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=jr(e,n),a!=null&&r.unshift(Kr(e,a,o)),a=jr(e,t),a!=null&&r.push(Kr(e,a,o))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sc(e,t,n,r,o){for(var a=t._reactName,u=[];n!==null&&n!==r;){var m=n,v=m.alternate,S=m.stateNode;if(v!==null&&v===r)break;m.tag===5&&S!==null&&(m=S,o?(v=jr(n,a),v!=null&&u.unshift(Kr(n,v,m))):o||(v=jr(n,a),v!=null&&u.push(Kr(n,v,m)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Qp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(Qp,`
`).replace(Kp,"")}function Uo(e,t,n){if(t=ac(t),ac(e)!==t&&n)throw Error(l(425))}function Wo(){}var _a=null,Sa=null;function Ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,qp=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(Yp)}:za;function Yp(e){setTimeout(function(){throw e})}function Ca(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+nr,Gr="__reactProps$"+nr,Vt="__reactContainer$"+nr,ja="__reactEvents$"+nr,Jp="__reactListeners$"+nr,Xp="__reactHandles$"+nr;function En(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[Pt])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[Pt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Qo(e){return e[Gr]||null}var Ma=[],or=-1;function sn(e){return{current:e}}function Ae(e){0>or||(e.current=Ma[or],Ma[or]=null,or--)}function Me(e,t){or++,Ma[or]=e.current,e.current=t}var an={},Ke=sn(an),nt=sn(!1),zn=an;function sr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function Ko(){Ae(nt),Ae(Ke)}function cc(e,t,n){if(Ke.current!==an)throw Error(l(168));Me(Ke,t),Me(nt,n)}function uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(l(108,je(e)||"Unknown",o));return K({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,zn=Ke.current,Me(Ke,e),Me(nt,nt.current),!0}function dc(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=uc(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,Ae(nt),Ae(Ke),Me(Ke,e)):Ae(nt),Me(nt,n)}var Ot=null,qo=!1,Na=!1;function pc(e){Ot===null?Ot=[e]:Ot.push(e)}function ef(e){qo=!0,pc(e)}function ln(){if(!Na&&Ot!==null){Na=!0;var e=0,t=Ce;try{var n=Ot;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,qo=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),hi(Xs,ln),o}finally{Ce=t,Na=!1}}return null}var ar=[],lr=0,Yo=null,Jo=0,ht=[],mt=0,Cn=null,It=1,Zt="";function jn(e,t){ar[lr++]=Jo,ar[lr++]=Yo,Yo=e,Jo=t}function fc(e,t,n){ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=Cn,Cn=e;var r=It;e=Zt;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var a=32-Lt(t)+o;if(30<a){var u=o-o%5;a=(r&(1<<u)-1).toString(32),r>>=u,o-=u,It=1<<32-Lt(t)+o|n<<o|r,Zt=a+e}else It=1<<a|n<<o|r,Zt=e}function Aa(e){e.return!==null&&(jn(e,1),fc(e,1,0))}function Fa(e){for(;e===Yo;)Yo=ar[--lr],ar[lr]=null,Jo=ar[--lr],ar[lr]=null;for(;e===Cn;)Cn=ht[--mt],ht[mt]=null,Zt=ht[--mt],ht[mt]=null,It=ht[--mt],ht[mt]=null}var ut=null,dt=null,Fe=!1,St=null;function hc(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:It,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,dt=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(Fe){var t=dt;if(t){var n=t;if(!mc(e,t)){if(Pa(e))throw Error(l(418));t=on(n.nextSibling);var r=ut;t&&mc(e,t)?hc(r,n):(e.flags=e.flags&-4097|2,Fe=!1,ut=e)}}else{if(Pa(e))throw Error(l(418));e.flags=e.flags&-4097|2,Fe=!1,ut=e}}}function gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Xo(e){if(e!==ut)return!1;if(!Fe)return gc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ea(e.type,e.memoizedProps)),t&&(t=dt)){if(Pa(e))throw vc(),Error(l(418));for(;t;)hc(e,t),t=on(t.nextSibling)}if(gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?on(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=dt;e;)e=on(e.nextSibling)}function ir(){dt=ut=null,Fe=!1}function Ta(e){St===null?St=[e]:St.push(e)}var tf=Y.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var m=o.refs;u===null?delete m[a]:m[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xc(e){var t=e._init;return t(e._payload)}function yc(e){function t(L,y){if(e){var _=L.deletions;_===null?(L.deletions=[y],L.flags|=16):_.push(y)}}function n(L,y){if(!e)return null;for(;y!==null;)t(L,y),y=y.sibling;return null}function r(L,y){for(L=new Map;y!==null;)y.key!==null?L.set(y.key,y):L.set(y.index,y),y=y.sibling;return L}function o(L,y){return L=gn(L,y),L.index=0,L.sibling=null,L}function a(L,y,_){return L.index=_,e?(_=L.alternate,_!==null?(_=_.index,_<y?(L.flags|=2,y):_):(L.flags|=2,y)):(L.flags|=1048576,y)}function u(L){return e&&L.alternate===null&&(L.flags|=2),L}function m(L,y,_,Z){return y===null||y.tag!==6?(y=zl(_,L.mode,Z),y.return=L,y):(y=o(y,_),y.return=L,y)}function v(L,y,_,Z){var te=_.type;return te===W?$(L,y,_.props.children,Z,_.key):y!==null&&(y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===me&&xc(te)===y.type)?(Z=o(y,_.props),Z.ref=Yr(L,y,_),Z.return=L,Z):(Z=_s(_.type,_.key,_.props,null,L.mode,Z),Z.ref=Yr(L,y,_),Z.return=L,Z)}function S(L,y,_,Z){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Cl(_,L.mode,Z),y.return=L,y):(y=o(y,_.children||[]),y.return=L,y)}function $(L,y,_,Z,te){return y===null||y.tag!==7?(y=$n(_,L.mode,Z,te),y.return=L,y):(y=o(y,_),y.return=L,y)}function V(L,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=zl(""+y,L.mode,_),y.return=L,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ce:return _=_s(y.type,y.key,y.props,null,L.mode,_),_.ref=Yr(L,null,y),_.return=L,_;case O:return y=Cl(y,L.mode,_),y.return=L,y;case me:var Z=y._init;return V(L,Z(y._payload),_)}if(qt(y)||re(y))return y=$n(y,L.mode,_,null),y.return=L,y;es(L,y)}return null}function P(L,y,_,Z){var te=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return te!==null?null:m(L,y,""+_,Z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ce:return _.key===te?v(L,y,_,Z):null;case O:return _.key===te?S(L,y,_,Z):null;case me:return te=_._init,P(L,y,te(_._payload),Z)}if(qt(_)||re(_))return te!==null?null:$(L,y,_,Z,null);es(L,_)}return null}function G(L,y,_,Z,te){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return L=L.get(_)||null,m(y,L,""+Z,te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ce:return L=L.get(Z.key===null?_:Z.key)||null,v(y,L,Z,te);case O:return L=L.get(Z.key===null?_:Z.key)||null,S(y,L,Z,te);case me:var se=Z._init;return G(L,y,_,se(Z._payload),te)}if(qt(Z)||re(Z))return L=L.get(_)||null,$(y,L,Z,te,null);es(y,Z)}return null}function J(L,y,_,Z){for(var te=null,se=null,ae=y,de=y=0,Ue=null;ae!==null&&de<_.length;de++){ae.index>de?(Ue=ae,ae=null):Ue=ae.sibling;var Se=P(L,ae,_[de],Z);if(Se===null){ae===null&&(ae=Ue);break}e&&ae&&Se.alternate===null&&t(L,ae),y=a(Se,y,de),se===null?te=Se:se.sibling=Se,se=Se,ae=Ue}if(de===_.length)return n(L,ae),Fe&&jn(L,de),te;if(ae===null){for(;de<_.length;de++)ae=V(L,_[de],Z),ae!==null&&(y=a(ae,y,de),se===null?te=ae:se.sibling=ae,se=ae);return Fe&&jn(L,de),te}for(ae=r(L,ae);de<_.length;de++)Ue=G(ae,L,de,_[de],Z),Ue!==null&&(e&&Ue.alternate!==null&&ae.delete(Ue.key===null?de:Ue.key),y=a(Ue,y,de),se===null?te=Ue:se.sibling=Ue,se=Ue);return e&&ae.forEach(function(vn){return t(L,vn)}),Fe&&jn(L,de),te}function X(L,y,_,Z){var te=re(_);if(typeof te!="function")throw Error(l(150));if(_=te.call(_),_==null)throw Error(l(151));for(var se=te=null,ae=y,de=y=0,Ue=null,Se=_.next();ae!==null&&!Se.done;de++,Se=_.next()){ae.index>de?(Ue=ae,ae=null):Ue=ae.sibling;var vn=P(L,ae,Se.value,Z);if(vn===null){ae===null&&(ae=Ue);break}e&&ae&&vn.alternate===null&&t(L,ae),y=a(vn,y,de),se===null?te=vn:se.sibling=vn,se=vn,ae=Ue}if(Se.done)return n(L,ae),Fe&&jn(L,de),te;if(ae===null){for(;!Se.done;de++,Se=_.next())Se=V(L,Se.value,Z),Se!==null&&(y=a(Se,y,de),se===null?te=Se:se.sibling=Se,se=Se);return Fe&&jn(L,de),te}for(ae=r(L,ae);!Se.done;de++,Se=_.next())Se=G(ae,L,de,Se.value,Z),Se!==null&&(e&&Se.alternate!==null&&ae.delete(Se.key===null?de:Se.key),y=a(Se,y,de),se===null?te=Se:se.sibling=Se,se=Se);return e&&ae.forEach(function(Rf){return t(L,Rf)}),Fe&&jn(L,de),te}function De(L,y,_,Z){if(typeof _=="object"&&_!==null&&_.type===W&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ce:e:{for(var te=_.key,se=y;se!==null;){if(se.key===te){if(te=_.type,te===W){if(se.tag===7){n(L,se.sibling),y=o(se,_.props.children),y.return=L,L=y;break e}}else if(se.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===me&&xc(te)===se.type){n(L,se.sibling),y=o(se,_.props),y.ref=Yr(L,se,_),y.return=L,L=y;break e}n(L,se);break}else t(L,se);se=se.sibling}_.type===W?(y=$n(_.props.children,L.mode,Z,_.key),y.return=L,L=y):(Z=_s(_.type,_.key,_.props,null,L.mode,Z),Z.ref=Yr(L,y,_),Z.return=L,L=Z)}return u(L);case O:e:{for(se=_.key;y!==null;){if(y.key===se)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(L,y.sibling),y=o(y,_.children||[]),y.return=L,L=y;break e}else{n(L,y);break}else t(L,y);y=y.sibling}y=Cl(_,L.mode,Z),y.return=L,L=y}return u(L);case me:return se=_._init,De(L,y,se(_._payload),Z)}if(qt(_))return J(L,y,_,Z);if(re(_))return X(L,y,_,Z);es(L,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(L,y.sibling),y=o(y,_),y.return=L,L=y):(n(L,y),y=zl(_,L.mode,Z),y.return=L,L=y),u(L)):n(L,y)}return De}var cr=yc(!0),wc=yc(!1),ts=sn(null),ns=null,ur=null,$a=null;function Da(){$a=ur=ns=null}function Ha(e){var t=ts.current;Ae(ts),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){ns=e,$a=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(ns===null)throw Error(l(308));ur=e,ns.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Mn=null;function Oa(e){Mn===null?Mn=[e]:Mn.push(e)}function bc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Bt(e,n)}function rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=u:a=a.next=u,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function os(e,t,n,r){var o=e.updateQueue;cn=!1;var a=o.firstBaseUpdate,u=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var v=m,S=v.next;v.next=null,u===null?a=S:u.next=S,u=v;var $=e.alternate;$!==null&&($=$.updateQueue,m=$.lastBaseUpdate,m!==u&&(m===null?$.firstBaseUpdate=S:m.next=S,$.lastBaseUpdate=v))}if(a!==null){var V=o.baseState;u=0,$=S=v=null,m=a;do{var P=m.lane,G=m.eventTime;if((r&P)===P){$!==null&&($=$.next={eventTime:G,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var J=e,X=m;switch(P=t,G=n,X.tag){case 1:if(J=X.payload,typeof J=="function"){V=J.call(G,V,P);break e}V=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=X.payload,P=typeof J=="function"?J.call(G,V,P):J,P==null)break e;V=K({},V,P);break e;case 2:cn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,P=o.effects,P===null?o.effects=[m]:P.push(m))}else G={eventTime:G,lane:P,tag:m.tag,payload:m.payload,callback:m.callback,next:null},$===null?(S=$=G,v=V):$=$.next=G,u|=P;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;P=m,m=P.next,P.next=null,o.lastBaseUpdate=P,o.shared.pending=null}}while(!0);if($===null&&(v=V),o.baseState=v,o.firstBaseUpdate=S,o.lastBaseUpdate=$,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Fn|=u,e.lanes=u,e.memoizedState=V}}function _c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var Jr={},Rt=sn(Jr),Xr=sn(Jr),eo=sn(Jr);function Nn(e){if(e===Jr)throw Error(l(174));return e}function Za(e,t){switch(Me(eo,t),Me(Xr,e),Me(Rt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:M(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=M(t,e)}Ae(Rt),Me(Rt,t)}function pr(){Ae(Rt),Ae(Xr),Ae(eo)}function Sc(e){Nn(eo.current);var t=Nn(Rt.current),n=M(t,e.type);t!==n&&(Me(Xr,e),Me(Rt,n))}function Ba(e){Xr.current===e&&(Ae(Rt),Ae(Xr))}var Pe=sn(0);function ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=[];function Wa(){for(var e=0;e<Ua.length;e++)Ua[e]._workInProgressVersionPrimary=null;Ua.length=0}var as=Y.ReactCurrentDispatcher,Qa=Y.ReactCurrentBatchConfig,An=0,Re=null,Oe=null,Ze=null,ls=!1,to=!1,no=0,nf=0;function Ge(){throw Error(l(321))}function Ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Ga(e,t,n,r,o,a){if(An=a,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?af:lf,e=n(r,o),to){a=0;do{if(to=!1,no=0,25<=a)throw Error(l(301));a+=1,Ze=Oe=null,t.updateQueue=null,as.current=cf,e=n(r,o)}while(to)}if(as.current=us,t=Oe!==null&&Oe.next!==null,An=0,Ze=Oe=Re=null,ls=!1,t)throw Error(l(300));return e}function qa(){var e=no!==0;return no=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Re.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function vt(){if(Oe===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ze===null?Re.memoizedState:Ze.next;if(t!==null)Ze=t,Oe=e;else{if(e===null)throw Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ze===null?Re.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ro(e,t){return typeof t=="function"?t(e):t}function Ya(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Oe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var u=o.next;o.next=a.next,a.next=u}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var m=u=null,v=null,S=a;do{var $=S.lane;if((An&$)===$)v!==null&&(v=v.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var V={lane:$,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};v===null?(m=v=V,u=r):v=v.next=V,Re.lanes|=$,Fn|=$}S=S.next}while(S!==null&&S!==a);v===null?u=r:v.next=m,_t(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=v,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Re.lanes|=a,Fn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ja(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do a=e(a,u.action),u=u.next;while(u!==o);_t(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ec(){}function zc(e,t){var n=Re,r=vt(),o=t(),a=!_t(r.memoizedState,o);if(a&&(r.memoizedState=o,ot=!0),r=r.queue,Xa(Mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,oo(9,jc.bind(null,n,r,o,t),void 0,null),Be===null)throw Error(l(349));(An&30)!==0||Cc(n,t,o)}return o}function Cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jc(e,t,n,r){t.value=n,t.getSnapshot=r,Nc(t)&&Ac(e)}function Mc(e,t,n){return n(function(){Nc(t)&&Ac(e)})}function Nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Ac(e){var t=Bt(e,1);t!==null&&jt(t,e,1,-1)}function Fc(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=sf.bind(null,Re,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pc(){return vt().memoizedState}function is(e,t,n,r){var o=Tt();Re.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function cs(e,t,n,r){var o=vt();r=r===void 0?null:r;var a=void 0;if(Oe!==null){var u=Oe.memoizedState;if(a=u.destroy,r!==null&&Ka(r,u.deps)){o.memoizedState=oo(t,n,a,r);return}}Re.flags|=e,o.memoizedState=oo(1|t,n,a,r)}function Rc(e,t){return is(8390656,8,e,t)}function Xa(e,t){return cs(2048,8,e,t)}function Tc(e,t){return cs(4,2,e,t)}function $c(e,t){return cs(4,4,e,t)}function Dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,4,Dc.bind(null,t,e),n)}function el(){}function Vc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ic(e,t,n){return(An&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(_t(n,t)||(n=xi(),Re.lanes|=n,Fn|=n,e.baseState=!0),t)}function rf(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=Qa.transition;Qa.transition={};try{e(!1),t()}finally{Ce=n,Qa.transition=r}}function Zc(){return vt().memoizedState}function of(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bc(e))Uc(t,n);else if(n=bc(e,t,n,r),n!==null){var o=et();jt(n,e,r,o),Wc(n,t,r)}}function sf(e,t,n){var r=hn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Uc(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,m=a(u,n);if(o.hasEagerState=!0,o.eagerState=m,_t(m,u)){var v=t.interleaved;v===null?(o.next=o,Oa(t)):(o.next=v.next,v.next=o),t.interleaved=o;return}}catch{}finally{}n=bc(e,t,o,r),n!==null&&(o=et(),jt(n,e,r,o),Wc(n,t,r))}}function Bc(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Uc(e,t){to=ls=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}var us={readContext:gt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},af={readContext:gt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,is(4194308,4,Dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=of.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:el,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=rf.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=Tt();if(Fe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Be===null)throw Error(l(349));(An&30)!==0||Cc(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Rc(Mc.bind(null,r,a,e),[e]),r.flags|=2048,oo(9,jc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Be.identifierPrefix;if(Fe){var n=Zt,r=It;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:gt,useCallback:Vc,useContext:gt,useEffect:Xa,useImperativeHandle:Hc,useInsertionEffect:Tc,useLayoutEffect:$c,useMemo:Oc,useReducer:Ya,useRef:Pc,useState:function(){return Ya(ro)},useDebugValue:el,useDeferredValue:function(e){var t=vt();return Ic(t,Oe.memoizedState,e)},useTransition:function(){var e=Ya(ro)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:zc,useId:Zc,unstable_isNewReconciler:!1},cf={readContext:gt,useCallback:Vc,useContext:gt,useEffect:Xa,useImperativeHandle:Hc,useInsertionEffect:Tc,useLayoutEffect:$c,useMemo:Oc,useReducer:Ja,useRef:Pc,useState:function(){return Ja(ro)},useDebugValue:el,useDeferredValue:function(e){var t=vt();return Oe===null?t.memoizedState=e:Ic(t,Oe.memoizedState,e)},useTransition:function(){var e=Ja(ro)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:zc,useId:Zc,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ds={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=hn(e),a=Ut(r,o);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(jt(t,e,o,r),rs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=hn(e),a=Ut(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(jt(t,e,o,r),rs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=hn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(jt(t,e,r,n),rs(t,e,r))}};function Qc(e,t,n,r,o,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(o,a):!0}function Kc(e,t,n){var r=!1,o=an,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(o=rt(t)?zn:Ke.current,r=t.contextTypes,a=(r=r!=null)?sr(e,o):an),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ds,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ds.enqueueReplaceState(t,t.state,null)}function nl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ia(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=gt(a):(a=rt(t)?zn:Ke.current,o.context=sr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(tl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ds.enqueueReplaceState(o,o.state,null),os(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=be(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function qc(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xs||(xs=!0,yl=r),ol(e,t)},n}function Yc(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ol(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ol(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Jc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var df=Y.ReactCurrentOwner,ot=!1;function Xe(e,t,n,r){t.child=e===null?wc(t,null,n,r):cr(t,e.child,n,r)}function tu(e,t,n,r,o){n=n.render;var a=t.ref;return dr(t,o),r=Ga(e,t,n,r,a,o),n=qa(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&n&&Aa(t),t.flags|=1,Xe(e,t,r,o),t.child)}function nu(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!El(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ru(e,t,a,r,o)):(e=_s(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var u=a.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(u,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Br(a,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return sl(e,t,n,r,o)}function ou(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(mr,pt),pt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(mr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Me(mr,pt),pt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Me(mr,pt),pt|=r;return Xe(e,t,o,n),t.child}function su(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sl(e,t,n,r,o){var a=rt(n)?zn:Ke.current;return a=sr(t,a),dr(t,o),n=Ga(e,t,n,r,a,o),r=qa(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&r&&Aa(t),t.flags|=1,Xe(e,t,n,o),t.child)}function au(e,t,n,r,o){if(rt(n)){var a=!0;Go(t)}else a=!1;if(dr(t,o),t.stateNode===null)fs(e,t),Kc(t,n,r),nl(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,m=t.memoizedProps;u.props=m;var v=u.context,S=n.contextType;typeof S=="object"&&S!==null?S=gt(S):(S=rt(n)?zn:Ke.current,S=sr(t,S));var $=n.getDerivedStateFromProps,V=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function";V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==r||v!==S)&&Gc(t,u,r,S),cn=!1;var P=t.memoizedState;u.state=P,os(t,r,u,o),v=t.memoizedState,m!==r||P!==v||nt.current||cn?(typeof $=="function"&&(tl(t,n,$,r),v=t.memoizedState),(m=cn||Qc(t,n,m,r,P,v,S))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=v),u.props=r,u.state=v,u.context=S,r=m):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,kc(e,t),m=t.memoizedProps,S=t.type===t.elementType?m:Et(t.type,m),u.props=S,V=t.pendingProps,P=u.context,v=n.contextType,typeof v=="object"&&v!==null?v=gt(v):(v=rt(n)?zn:Ke.current,v=sr(t,v));var G=n.getDerivedStateFromProps;($=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==V||P!==v)&&Gc(t,u,r,v),cn=!1,P=t.memoizedState,u.state=P,os(t,r,u,o);var J=t.memoizedState;m!==V||P!==J||nt.current||cn?(typeof G=="function"&&(tl(t,n,G,r),J=t.memoizedState),(S=cn||Qc(t,n,S,r,P,J,v)||!1)?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,J,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,J,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=J),u.props=r,u.state=J,u.context=v,r=S):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),r=!1)}return al(e,t,n,r,a,o)}function al(e,t,n,r,o,a){su(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&dc(t,n,!1),Wt(e,t,a);r=t.stateNode,df.current=t;var m=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=cr(t,e.child,null,a),t.child=cr(t,null,m,a)):Xe(e,t,m,a),t.memoizedState=r.state,o&&dc(t,n,!0),t.child}function lu(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,!1),Za(e,t.containerInfo)}function iu(e,t,n,r,o){return ir(),Ta(o),t.flags|=256,Xe(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function il(e){return{baseLanes:e,cachePool:null,transitions:null}}function cu(e,t,n){var r=t.pendingProps,o=Pe.current,a=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(o&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Me(Pe,o&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,a?(r=t.mode,a=t.child,u={mode:"hidden",children:u},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=u):a=Ss(u,r,0,null),e=$n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=il(n),t.memoizedState=ll,e):cl(t,u));if(o=e.memoizedState,o!==null&&(m=o.dehydrated,m!==null))return pf(e,t,u,r,m,o,n);if(a){a=r.fallback,u=t.mode,o=e.child,m=o.sibling;var v={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=v,t.deletions=null):(r=gn(o,v),r.subtreeFlags=o.subtreeFlags&14680064),m!==null?a=gn(m,a):(a=$n(a,u,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,u=e.child.memoizedState,u=u===null?il(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return a=e.child,e=a.sibling,r=gn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cl(e,t){return t=Ss({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,r){return r!==null&&Ta(r),cr(t,e.child,null,n),e=cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,r,o,a,u){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(l(422))),ps(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Ss({mode:"visible",children:r.children},o,0,null),a=$n(a,o,u,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&cr(t,e.child,null,u),t.child.memoizedState=il(u),t.memoizedState=ll,a);if((t.mode&1)===0)return ps(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var m=r.dgst;return r=m,a=Error(l(419)),r=rl(a,r,void 0),ps(e,t,u,r)}if(m=(u&e.childLanes)!==0,ot||m){if(r=Be,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Bt(e,o),jt(r,e,o,-1))}return Sl(),r=rl(Error(l(421))),ps(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,dt=on(o.nextSibling),ut=t,Fe=!0,St=null,e!==null&&(ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=Cn,It=e.id,Zt=e.overflow,Cn=t),t=cl(t,r.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function ul(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function du(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ss(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ul(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ss(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ul(t,!0,n,null,a);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:lu(t),ir();break;case 5:Sc(t);break;case 1:rt(t.type)&&Go(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Me(ts,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?cu(e,t,n):(Me(Pe,Pe.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Me(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return du(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Me(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,ou(e,t,n)}return Wt(e,t,n)}var pu,dl,fu,hu;pu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},dl=function(){},fu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn(Rt.current);var a=null;switch(n){case"input":o=Sr(e,o),r=Sr(e,r),a=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),a=[];break;case"textarea":o=Er(e,o),r=Er(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wo)}Us(n,r);var u;n=null;for(S in o)if(!r.hasOwnProperty(S)&&o.hasOwnProperty(S)&&o[S]!=null)if(S==="style"){var m=o[S];for(u in m)m.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(p.hasOwnProperty(S)?a||(a=[]):(a=a||[]).push(S,null));for(S in r){var v=r[S];if(m=o!=null?o[S]:void 0,r.hasOwnProperty(S)&&v!==m&&(v!=null||m!=null))if(S==="style")if(m){for(u in m)!m.hasOwnProperty(u)||v&&v.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in v)v.hasOwnProperty(u)&&m[u]!==v[u]&&(n||(n={}),n[u]=v[u])}else n||(a||(a=[]),a.push(S,n)),n=v;else S==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(a=a||[]).push(S,v)):S==="children"?typeof v!="string"&&typeof v!="number"||(a=a||[]).push(S,""+v):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(p.hasOwnProperty(S)?(v!=null&&S==="onScroll"&&Ne("scroll",e),a||m===v||(a=[])):(a=a||[]).push(S,v))}n&&(a=a||[]).push("style",n);var S=a;(t.updateQueue=S)&&(t.flags|=4)}},hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function so(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return rt(t.type)&&Ko(),qe(t),null;case 3:return r=t.stateNode,pr(),Ae(nt),Ae(Ke),Wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(kl(St),St=null))),dl(e,t),qe(t),null;case 5:Ba(t);var o=Nn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)fu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=Nn(Rt.current),Xo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Pt]=t,r[Gr]=a,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)Ne(Wr[o],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":wo(r,a),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ne("invalid",r);break;case"textarea":zr(r,a),Ne("invalid",r)}Us(n,a),o=null;for(var u in a)if(a.hasOwnProperty(u)){var m=a[u];u==="children"?typeof m=="string"?r.textContent!==m&&(a.suppressHydrationWarning!==!0&&Uo(r.textContent,m,e),o=["children",m]):typeof m=="number"&&r.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Uo(r.textContent,m,e),o=["children",""+m]):p.hasOwnProperty(u)&&m!=null&&u==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Gt(r),bo(r,a,!0);break;case"textarea":Gt(r),ko(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Wo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=w(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Pt]=t,e[Gr]=r,pu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ws(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),o=r;break;case"iframe":case"object":case"embed":Ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)Ne(Wr[o],e);o=r;break;case"source":Ne("error",e),o=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),o=r;break;case"details":Ne("toggle",e),o=r;break;case"input":wo(e,r),o=Sr(e,r),Ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":zr(e,r),o=Er(e,r),Ne("invalid",e);break;default:o=r}Us(n,o),m=o;for(a in m)if(m.hasOwnProperty(a)){var v=m[a];a==="style"?Lo(e,v):a==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&ye(e,v)):a==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&ge(e,v):typeof v=="number"&&ge(e,""+v):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?v!=null&&a==="onScroll"&&Ne("scroll",e):v!=null&&ne(e,a,v,u))}switch(n){case"input":Gt(e),bo(e,r,!1);break;case"textarea":Gt(e),ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ee(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Yt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=Nn(eo.current),Nn(Rt.current),Xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(a=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return qe(t),null;case 13:if(Ae(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vc(),ir(),t.flags|=98560,a=!1;else if(a=Xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Pt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else St!==null&&(kl(St),St=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Ie===0&&(Ie=3):Sl())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return pr(),dl(e,t),e===null&&Qr(t.stateNode.containerInfo),qe(t),null;case 10:return Ha(t.type._context),qe(t),null;case 17:return rt(t.type)&&Ko(),qe(t),null;case 19:if(Ae(Pe),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)so(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ss(e),u!==null){for(t.flags|=128,so(a,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&$e()>gr&&(t.flags|=128,r=!0,so(a,!1),t.lanes=4194304)}else{if(!r)if(e=ss(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),so(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Fe)return qe(t),null}else 2*$e()-a.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,so(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$e(),t.sibling=null,n=Pe.current,Me(Pe,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return _l(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function mf(e,t){switch(Fa(t),t.tag){case 1:return rt(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Ae(nt),Ae(Ke),Wa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ba(t),null;case 13:if(Ae(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Pe),null;case 4:return pr(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return _l(),null;case 24:return null;default:return null}}var hs=!1,Ye=!1,gf=typeof WeakSet=="function"?WeakSet:Set,q=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function pl(e,t,n){try{n()}catch(r){Te(e,t,r)}}var mu=!1;function vf(e,t){if(_a=Po,e=Qi(),ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var u=0,m=-1,v=-1,S=0,$=0,V=e,P=null;t:for(;;){for(var G;V!==n||o!==0&&V.nodeType!==3||(m=u+o),V!==a||r!==0&&V.nodeType!==3||(v=u+r),V.nodeType===3&&(u+=V.nodeValue.length),(G=V.firstChild)!==null;)P=V,V=G;for(;;){if(V===e)break t;if(P===n&&++S===o&&(m=u),P===a&&++$===r&&(v=u),(G=V.nextSibling)!==null)break;V=P,P=V.parentNode}V=G}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},Po=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var J=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var X=J.memoizedProps,De=J.memoizedState,L=t.stateNode,y=L.getSnapshotBeforeUpdate(t.elementType===t.type?X:Et(t.type,X),De);L.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(Z){Te(t,t.return,Z)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return J=mu,mu=!1,J}function ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&pl(t,n,a)}o=o.next}while(o!==r)}}function ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gu(e){var t=e.alternate;t!==null&&(e.alternate=null,gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Gr],delete t[ja],delete t[Jp],delete t[Xp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vu(e){return e.tag===5||e.tag===3||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wo));else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}var We=null,zt=!1;function dn(e,t,n){for(n=n.child;n!==null;)yu(e,t,n),n=n.sibling}function yu(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:Ye||hr(n,t);case 6:var r=We,o=zt;We=null,dn(e,t,n),We=r,zt=o,We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?Ca(e.parentNode,n):e.nodeType===1&&Ca(e,n),Dr(e)):Ca(We,n.stateNode));break;case 4:r=We,o=zt,We=n.stateNode.containerInfo,zt=!0,dn(e,t,n),We=r,zt=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,u=a.destroy;a=a.tag,u!==void 0&&((a&2)!==0||(a&4)!==0)&&pl(n,t,u),o=o.next}while(o!==r)}dn(e,t,n);break;case 1:if(!Ye&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(m){Te(n,t,m)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,dn(e,t,n),Ye=r):dn(e,t,n);break;default:dn(e,t,n)}}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gf),t.forEach(function(r){var o=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,u=t,m=u;e:for(;m!==null;){switch(m.tag){case 5:We=m.stateNode,zt=!1;break e;case 3:We=m.stateNode.containerInfo,zt=!0;break e;case 4:We=m.stateNode.containerInfo,zt=!0;break e}m=m.return}if(We===null)throw Error(l(160));yu(a,u,o),We=null,zt=!1;var v=o.alternate;v!==null&&(v.return=null),o.return=null}catch(S){Te(o,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bu(t,e),t=t.sibling}function bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),$t(e),r&4){try{ao(3,e,e.return),ms(3,e)}catch(X){Te(e,e.return,X)}try{ao(5,e,e.return)}catch(X){Te(e,e.return,X)}}break;case 1:Ct(t,e),$t(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(Ct(t,e),$t(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var o=e.stateNode;try{ge(o,"")}catch(X){Te(e,e.return,X)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,u=n!==null?n.memoizedProps:a,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&Un(o,a),Ws(m,u);var S=Ws(m,a);for(u=0;u<v.length;u+=2){var $=v[u],V=v[u+1];$==="style"?Lo(o,V):$==="dangerouslySetInnerHTML"?ye(o,V):$==="children"?ge(o,V):ne(o,$,V,S)}switch(m){case"input":Wn(o,a);break;case"textarea":Cr(o,a);break;case"select":var P=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var G=a.value;G!=null?Yt(o,!!a.multiple,G,!1):P!==!!a.multiple&&(a.defaultValue!=null?Yt(o,!!a.multiple,a.defaultValue,!0):Yt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Gr]=a}catch(X){Te(e,e.return,X)}}break;case 6:if(Ct(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(X){Te(e,e.return,X)}}break;case 3:if(Ct(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(X){Te(e,e.return,X)}break;case 4:Ct(t,e),$t(e);break;case 13:Ct(t,e),$t(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(xl=$e())),r&4&&wu(e);break;case 22:if($=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(S=Ye)||$,Ct(t,e),Ye=S):Ct(t,e),$t(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!$&&(e.mode&1)!==0)for(q=e,$=e.child;$!==null;){for(V=q=$;q!==null;){switch(P=q,G=P.child,P.tag){case 0:case 11:case 14:case 15:ao(4,P,P.return);break;case 1:hr(P,P.return);var J=P.stateNode;if(typeof J.componentWillUnmount=="function"){r=P,n=P.return;try{t=r,J.props=t.memoizedProps,J.state=t.memoizedState,J.componentWillUnmount()}catch(X){Te(r,n,X)}}break;case 5:hr(P,P.return);break;case 22:if(P.memoizedState!==null){_u(V);continue}}G!==null?(G.return=P,q=G):_u(V)}$=$.sibling}e:for($=null,V=e;;){if(V.tag===5){if($===null){$=V;try{o=V.stateNode,S?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=V.stateNode,v=V.memoizedProps.style,u=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=Ht("display",u))}catch(X){Te(e,e.return,X)}}}else if(V.tag===6){if($===null)try{V.stateNode.nodeValue=S?"":V.memoizedProps}catch(X){Te(e,e.return,X)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;$===V&&($=null),V=V.return}$===V&&($=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Ct(t,e),$t(e),r&4&&wu(e);break;case 21:break;default:Ct(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ge(o,""),r.flags&=-33);var a=xu(e);ml(e,a,o);break;case 3:case 4:var u=r.stateNode.containerInfo,m=xu(e);hl(e,m,u);break;default:throw Error(l(161))}}catch(v){Te(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e,t,n){q=e,ku(e)}function ku(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var o=q,a=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||hs;if(!u){var m=o.alternate,v=m!==null&&m.memoizedState!==null||Ye;m=hs;var S=Ye;if(hs=u,(Ye=v)&&!S)for(q=o;q!==null;)u=q,v=u.child,u.tag===22&&u.memoizedState!==null?Su(o):v!==null?(v.return=u,q=v):Su(o);for(;a!==null;)q=a,ku(a),a=a.sibling;q=o,hs=m,Ye=S}Lu(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,q=a):Lu(e)}}function Lu(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||ms(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&_c(t,a,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_c(t,u,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var $=S.memoizedState;if($!==null){var V=$.dehydrated;V!==null&&Dr(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||t.flags&512&&fl(t)}catch(P){Te(t,t.return,P)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function _u(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Su(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ms(4,t)}catch(v){Te(t,n,v)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(v){Te(t,o,v)}}var a=t.return;try{fl(t)}catch(v){Te(t,a,v)}break;case 5:var u=t.return;try{fl(t)}catch(v){Te(t,u,v)}}}catch(v){Te(t,t.return,v)}if(t===e){q=null;break}var m=t.sibling;if(m!==null){m.return=t.return,q=m;break}q=t.return}}var yf=Math.ceil,gs=Y.ReactCurrentDispatcher,gl=Y.ReactCurrentOwner,xt=Y.ReactCurrentBatchConfig,Le=0,Be=null,He=null,Qe=0,pt=0,mr=sn(0),Ie=0,lo=null,Fn=0,vs=0,vl=0,io=null,st=null,xl=0,gr=1/0,Qt=null,xs=!1,yl=null,pn=null,ys=!1,fn=null,ws=0,co=0,wl=null,bs=-1,ks=0;function et(){return(Le&6)!==0?$e():bs!==-1?bs:bs=$e()}function hn(e){return(e.mode&1)===0?1:(Le&2)!==0&&Qe!==0?Qe&-Qe:tf.transition!==null?(ks===0&&(ks=xi()),ks):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:zi(e.type)),e)}function jt(e,t,n,r){if(50<co)throw co=0,wl=null,Error(l(185));Fr(e,n,r),((Le&2)===0||e!==Be)&&(e===Be&&((Le&2)===0&&(vs|=n),Ie===4&&mn(e,Qe)),at(e,r),n===1&&Le===0&&(t.mode&1)===0&&(gr=$e()+500,qo&&ln()))}function at(e,t){var n=e.callbackNode;tp(e,t);var r=No(e,e===Be?Qe:0);if(r===0)n!==null&&mi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mi(n),t===1)e.tag===0?ef(zu.bind(null,e)):pc(zu.bind(null,e)),qp(function(){(Le&6)===0&&ln()}),n=null;else{switch(yi(r)){case 1:n=Xs;break;case 4:n=gi;break;case 16:n=zo;break;case 536870912:n=vi;break;default:n=zo}n=Ru(n,Eu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Eu(e,t){if(bs=-1,ks=0,(Le&6)!==0)throw Error(l(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=No(e,e===Be?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ls(e,r);else{t=r;var o=Le;Le|=2;var a=ju();(Be!==e||Qe!==t)&&(Qt=null,gr=$e()+500,Rn(e,t));do try{kf();break}catch(m){Cu(e,m)}while(!0);Da(),gs.current=a,Le=o,He!==null?t=0:(Be=null,Qe=0,t=Ie)}if(t!==0){if(t===2&&(o=ea(e),o!==0&&(r=o,t=bl(e,o))),t===1)throw n=lo,Rn(e,0),mn(e,r),at(e,$e()),n;if(t===6)mn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!wf(o)&&(t=Ls(e,r),t===2&&(a=ea(e),a!==0&&(r=a,t=bl(e,a))),t===1))throw n=lo,Rn(e,0),mn(e,r),at(e,$e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:Tn(e,st,Qt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=xl+500-$e(),10<t)){if(No(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=za(Tn.bind(null,e,st,Qt),t);break}Tn(e,st,Qt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-Lt(r);a=1<<u,u=t[u],u>o&&(o=u),r&=~a}if(r=o,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=za(Tn.bind(null,e,st,Qt),r);break}Tn(e,st,Qt);break;case 5:Tn(e,st,Qt);break;default:throw Error(l(329))}}}return at(e,$e()),e.callbackNode===n?Eu.bind(null,e):null}function bl(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Ls(e,t),e!==2&&(t=st,st=n,t!==null&&kl(t)),e}function kl(e){st===null?st=e:st.push.apply(st,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!_t(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~vl,t&=~vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function zu(e){if((Le&6)!==0)throw Error(l(327));vr();var t=No(e,0);if((t&1)===0)return at(e,$e()),null;var n=Ls(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=lo,Rn(e,0),mn(e,t),at(e,$e()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,st,Qt),at(e,$e()),null}function Ll(e,t){var n=Le;Le|=1;try{return e(t)}finally{Le=n,Le===0&&(gr=$e()+500,qo&&ln())}}function Pn(e){fn!==null&&fn.tag===0&&(Le&6)===0&&vr();var t=Le;Le|=1;var n=xt.transition,r=Ce;try{if(xt.transition=null,Ce=1,e)return e()}finally{Ce=r,xt.transition=n,Le=t,(Le&6)===0&&ln()}}function _l(){pt=mr.current,Ae(mr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gp(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:pr(),Ae(nt),Ae(Ke),Wa();break;case 5:Ba(r);break;case 4:pr();break;case 13:Ae(Pe);break;case 19:Ae(Pe);break;case 10:Ha(r.type._context);break;case 22:case 23:_l()}n=n.return}if(Be=e,He=e=gn(e.current,null),Qe=pt=t,Ie=0,lo=null,vl=vs=Fn=0,st=io=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var u=a.next;a.next=o,r.next=u}n.pending=r}Mn=null}return e}function Cu(e,t){do{var n=He;try{if(Da(),as.current=us,ls){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ls=!1}if(An=0,Ze=Oe=Re=null,to=!1,no=0,gl.current=null,n===null||n.return===null){Ie=1,lo=t,He=null;break}e:{var a=e,u=n.return,m=n,v=t;if(t=Qe,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var S=v,$=m,V=$.tag;if(($.mode&1)===0&&(V===0||V===11||V===15)){var P=$.alternate;P?($.updateQueue=P.updateQueue,$.memoizedState=P.memoizedState,$.lanes=P.lanes):($.updateQueue=null,$.memoizedState=null)}var G=Xc(u);if(G!==null){G.flags&=-257,eu(G,u,m,a,t),G.mode&1&&Jc(a,S,t),t=G,v=S;var J=t.updateQueue;if(J===null){var X=new Set;X.add(v),t.updateQueue=X}else J.add(v);break e}else{if((t&1)===0){Jc(a,S,t),Sl();break e}v=Error(l(426))}}else if(Fe&&m.mode&1){var De=Xc(u);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),eu(De,u,m,a,t),Ta(fr(v,m));break e}}a=v=fr(v,m),Ie!==4&&(Ie=2),io===null?io=[a]:io.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var L=qc(a,v,t);Lc(a,L);break e;case 1:m=v;var y=a.type,_=a.stateNode;if((a.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(pn===null||!pn.has(_)))){a.flags|=65536,t&=-t,a.lanes|=t;var Z=Yc(a,m,t);Lc(a,Z);break e}}a=a.return}while(a!==null)}Nu(n)}catch(te){t=te,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function ju(){var e=gs.current;return gs.current=us,e===null?us:e}function Sl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Be===null||(Fn&268435455)===0&&(vs&268435455)===0||mn(Be,Qe)}function Ls(e,t){var n=Le;Le|=2;var r=ju();(Be!==e||Qe!==t)&&(Qt=null,Rn(e,t));do try{bf();break}catch(o){Cu(e,o)}while(!0);if(Da(),Le=n,gs.current=r,He!==null)throw Error(l(261));return Be=null,Qe=0,Ie}function bf(){for(;He!==null;)Mu(He)}function kf(){for(;He!==null&&!Wd();)Mu(He)}function Mu(e){var t=Pu(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Nu(e):He=t,gl.current=null}function Nu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hf(n,t,pt),n!==null){He=n;return}}else{if(n=mf(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,He=null;return}}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ie===0&&(Ie=5)}function Tn(e,t,n){var r=Ce,o=xt.transition;try{xt.transition=null,Ce=1,Lf(e,t,n,r)}finally{xt.transition=o,Ce=r}return null}function Lf(e,t,n,r){do vr();while(fn!==null);if((Le&6)!==0)throw Error(l(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(np(e,a),e===Be&&(He=Be=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ys||(ys=!0,Ru(zo,function(){return vr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=xt.transition,xt.transition=null;var u=Ce;Ce=1;var m=Le;Le|=4,gl.current=null,vf(e,n),bu(n,e),Ip(Sa),Po=!!_a,Sa=_a=null,e.current=n,xf(n),Qd(),Le=m,Ce=u,xt.transition=a}else e.current=n;if(ys&&(ys=!1,fn=e,ws=o),a=e.pendingLanes,a===0&&(pn=null),qd(n.stateNode),at(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xs)throw xs=!1,e=yl,yl=null,e;return(ws&1)!==0&&e.tag!==0&&vr(),a=e.pendingLanes,(a&1)!==0?e===wl?co++:(co=0,wl=e):co=0,ln(),null}function vr(){if(fn!==null){var e=yi(ws),t=xt.transition,n=Ce;try{if(xt.transition=null,Ce=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,ws=0,(Le&6)!==0)throw Error(l(331));var o=Le;for(Le|=4,q=e.current;q!==null;){var a=q,u=a.child;if((q.flags&16)!==0){var m=a.deletions;if(m!==null){for(var v=0;v<m.length;v++){var S=m[v];for(q=S;q!==null;){var $=q;switch($.tag){case 0:case 11:case 15:ao(8,$,a)}var V=$.child;if(V!==null)V.return=$,q=V;else for(;q!==null;){$=q;var P=$.sibling,G=$.return;if(gu($),$===S){q=null;break}if(P!==null){P.return=G,q=P;break}q=G}}}var J=a.alternate;if(J!==null){var X=J.child;if(X!==null){J.child=null;do{var De=X.sibling;X.sibling=null,X=De}while(X!==null)}}q=a}}if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,q=u;else e:for(;q!==null;){if(a=q,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ao(9,a,a.return)}var L=a.sibling;if(L!==null){L.return=a.return,q=L;break e}q=a.return}}var y=e.current;for(q=y;q!==null;){u=q;var _=u.child;if((u.subtreeFlags&2064)!==0&&_!==null)_.return=u,q=_;else e:for(u=y;q!==null;){if(m=q,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ms(9,m)}}catch(te){Te(m,m.return,te)}if(m===u){q=null;break e}var Z=m.sibling;if(Z!==null){Z.return=m.return,q=Z;break e}q=m.return}}if(Le=o,ln(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{Ce=n,xt.transition=t}}return!1}function Au(e,t,n){t=fr(n,t),t=qc(e,t,1),e=un(e,t,1),t=et(),e!==null&&(Fr(e,1,t),at(e,t))}function Te(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=fr(n,e),e=Yc(t,e,1),t=un(t,e,1),e=et(),t!==null&&(Fr(t,1,e),at(t,e));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Qe&n)===n&&(Ie===4||Ie===3&&(Qe&130023424)===Qe&&500>$e()-xl?Rn(e,0):vl|=n),at(e,t)}function Fu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Mo,Mo<<=1,(Mo&130023424)===0&&(Mo=4194304)));var n=et();e=Bt(e,t),e!==null&&(Fr(e,t,n),at(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fu(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),Fu(e,n)}var Pu;Pu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,ff(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Fe&&(t.flags&1048576)!==0&&fc(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fs(e,t),e=t.pendingProps;var o=sr(t,Ke.current);dr(t,n),o=Ga(null,t,r,e,o,n);var a=qa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(a=!0,Go(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ia(t),o.updater=ds,t.stateNode=o,o._reactInternals=t,nl(t,r,e,n),t=al(null,t,r,!0,a,n)):(t.tag=0,Fe&&a&&Aa(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cf(r),e=Et(r,e),o){case 0:t=sl(null,t,r,e,n);break e;case 1:t=au(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,Et(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),sl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),au(e,t,r,o,n);case 3:e:{if(lu(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,o=a.element,kc(e,t),os(t,r,null,n);var u=t.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=fr(Error(l(423)),t),t=iu(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(l(424)),t),t=iu(e,t,r,n,o);break e}else for(dt=on(t.stateNode.containerInfo.firstChild),ut=t,Fe=!0,St=null,n=wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===o){t=Wt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Sc(t),e===null&&Ra(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,u=o.children,Ea(r,o)?u=null:a!==null&&Ea(r,a)&&(t.flags|=32),su(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&Ra(t),null;case 13:return cu(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),tu(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,u=o.value,Me(ts,r._currentValue),r._currentValue=u,a!==null)if(_t(a.value,u)){if(a.children===o.children&&!nt.current){t=Wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){u=a.child;for(var v=m.firstContext;v!==null;){if(v.context===r){if(a.tag===1){v=Ut(-1,n&-n),v.tag=2;var S=a.updateQueue;if(S!==null){S=S.shared;var $=S.pending;$===null?v.next=v:(v.next=$.next,$.next=v),S.pending=v}}a.lanes|=n,v=a.alternate,v!==null&&(v.lanes|=n),Va(a.return,n,t),m.lanes|=n;break}v=v.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(l(341));u.lanes|=n,m=u.alternate,m!==null&&(m.lanes|=n),Va(u,n,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dr(t,n),o=gt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=Et(r,t.pendingProps),o=Et(r.type,o),nu(e,t,r,o,n);case 15:return ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),fs(e,t),t.tag=1,rt(r)?(e=!0,Go(t)):e=!1,dr(t,n),Kc(t,r,o),nl(t,r,o,n),al(null,t,r,!0,e,n);case 19:return du(e,t,n);case 22:return ou(e,t,n)}throw Error(l(156,t.tag))};function Ru(e,t){return hi(e,t)}function zf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new zf(e,t,n,r)}function El(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cf(e){if(typeof e=="function")return El(e)?1:0;if(e!=null){if(e=e.$$typeof,e===I)return 11;if(e===we)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _s(e,t,n,r,o,a){var u=2;if(r=e,typeof e=="function")El(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case W:return $n(n.children,o,a,t);case he:u=8,o|=8;break;case ue:return e=yt(12,n,t,o|2),e.elementType=ue,e.lanes=a,e;case D:return e=yt(13,n,t,o),e.elementType=D,e.lanes=a,e;case T:return e=yt(19,n,t,o),e.elementType=T,e.lanes=a,e;case pe:return Ss(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:u=10;break e;case ie:u=9;break e;case I:u=11;break e;case we:u=14;break e;case me:u=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(u,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function $n(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Ss(e,t,n,r){return e=yt(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function jl(e,t,n,r,o,a,u,m,v){return e=new jf(e,t,n,m,v),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(a),e}function Mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tu(e){if(!e)return an;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(rt(n))return uc(e,n,t)}return t}function $u(e,t,n,r,o,a,u,m,v){return e=jl(n,r,!0,e,o,a,u,m,v),e.context=Tu(null),n=e.current,r=et(),o=hn(n),a=Ut(r,o),a.callback=t??null,un(n,a,o),e.current.lanes=o,Fr(e,o,r),at(e,r),e}function Es(e,t,n,r){var o=t.current,a=et(),u=hn(o);return n=Tu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(a,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,u),e!==null&&(jt(e,o,u,a),rs(e,o,u)),u}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ml(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function Nf(){return null}var Hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nl(e){this._internalRoot=e}Cs.prototype.render=Nl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Es(e,t,null,null)},Cs.prototype.unmount=Nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Es(null,e,null,null)}),t[Vt]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ki();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Si(e)}};function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Af(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var S=zs(u);a.call(S)}}var u=$u(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=u,e[Vt]=u.current,Qr(e.nodeType===8?e.parentNode:e),Pn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var m=r;r=function(){var S=zs(v);m.call(S)}}var v=jl(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=v,e[Vt]=v.current,Qr(e.nodeType===8?e.parentNode:e),Pn(function(){Es(t,v,n,r)}),v}function Ms(e,t,n,r,o){var a=n._reactRootContainer;if(a){var u=a;if(typeof o=="function"){var m=o;o=function(){var v=zs(u);m.call(v)}}Es(t,u,e,o)}else u=Af(n,t,e,o,r);return zs(u)}wi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(na(t,n|1),at(t,$e()),(Le&6)===0&&(gr=$e()+500,ln()))}break;case 13:Pn(function(){var r=Bt(e,1);if(r!==null){var o=et();jt(r,e,1,o)}}),Ml(e,1)}},ra=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=et();jt(t,e,134217728,n)}Ml(e,134217728)}},bi=function(e){if(e.tag===13){var t=hn(e),n=Bt(e,t);if(n!==null){var r=et();jt(n,e,t,r)}Ml(e,t)}},ki=function(){return Ce},Li=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}},Gs=function(e,t,n){switch(t){case"input":if(Wn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Qo(r);if(!o)throw Error(l(90));yo(r),Wn(r,o)}}}break;case"textarea":Cr(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}},li=Ll,ii=Pn;var Ff={usingClientEntryPoint:!1,Events:[qr,rr,Qo,si,ai,Ll]},uo={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pi(e),e===null?null:e.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{Co=Ns.inject(Pf),Ft=Ns}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Al(t))throw Error(l(200));return Mf(e,t,null,n)},lt.createRoot=function(e,t){if(!Al(e))throw Error(l(299));var n=!1,r="",o=Hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=jl(e,1,!1,null,null,n,!1,r,o),e[Vt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Nl(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=pi(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Pn(e)},lt.hydrate=function(e,t,n){if(!js(t))throw Error(l(200));return Ms(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Al(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",u=Hu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=$u(t,null,e,1,n??null,o,!1,a,u),e[Vt]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Cs(t)},lt.render=function(e,t,n){if(!js(t))throw Error(l(200));return Ms(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!js(e))throw Error(l(40));return e._reactRootContainer?(Pn(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},lt.unstable_batchedUpdates=Ll,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!js(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ms(e,t,n,!1,r)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Ku;function Zf(){if(Ku)return Rl.exports;Ku=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Rl.exports=If(),Rl.exports}var Gu;function Bf(){if(Gu)return As;Gu=1;var s=Zf();return As.createRoot=s.createRoot,As.hydrateRoot=s.hydrateRoot,As}var Uf=Bf();const Wf=Tf(Uf),Qf="modulepreload",Kf=function(s,i){return new URL(s,i).href},qu={},fo=function(i,l,c){let p=Promise.resolve();if(l&&l.length>0){let g=function(C){return Promise.all(C.map(E=>Promise.resolve(E).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};const x=document.getElementsByTagName("link"),k=document.querySelector("meta[property=csp-nonce]"),z=(k==null?void 0:k.nonce)||(k==null?void 0:k.getAttribute("nonce"));p=g(l.map(C=>{if(C=Kf(C,c),C in qu)return;qu[C]=!0;const E=C.endsWith(".css"),j=E?'[rel="stylesheet"]':"";if(!!c)for(let H=x.length-1;H>=0;H--){const Q=x[H];if(Q.href===C&&(!E||Q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${C}"]${j}`))return;const U=document.createElement("link");if(U.rel=E?"stylesheet":Qf,E||(U.as="script"),U.crossOrigin="",U.href=C,z&&U.setAttribute("nonce",z),document.head.appendChild(U),E)return new Promise((H,Q)=>{U.addEventListener("load",H),U.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${C}`)))})}))}function h(g){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=g,window.dispatchEvent(x),!x.defaultPrevented)throw g}return p.then(g=>{for(const x of g||[])x.status==="rejected"&&h(x.reason);return i().catch(h)})},Ul={toggle:()=>fo(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>fo(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>fo(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>fo(()=>import("./press-h_enDfSn.js"),[],import.meta.url),slide:()=>fo(()=>import("./slide-CxPKTNuS.js"),[],import.meta.url)};let yr=null,Yu=!1;const vd=new Set,Hs=new Map,Fs=new Map;function Yl(){if(yr)return yr;const s=window.AudioContext||window.webkitAudioContext;return s?(yr=new s,yr):null}function Jl(s){if(Hs.has(s))return Promise.resolve(Hs.get(s));if(Fs.has(s))return Fs.get(s);const i=Yl();if(!i||!Ul[s])return Promise.resolve(null);const l=Ul[s]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>i.decodeAudioData(c)).then(c=>(Hs.set(s,c),c)).catch(()=>null).finally(()=>Fs.delete(s));return Fs.set(s,l),l}function Gf(){const s=Yl();s&&(s.state==="suspended"&&s.resume(),vd.forEach(Jl))}function qf(s){if(typeof window>"u"||!Ul[s])return;if(vd.add(s),yr&&yr.state!=="suspended"){Jl(s);return}if(Yu)return;Yu=!0;const i={capture:!0,passive:!0},l=()=>{window.removeEventListener("pointerdown",l,i),window.removeEventListener("keydown",l,i),Gf()};window.addEventListener("pointerdown",l,i),window.addEventListener("keydown",l,i)}const Yf=120;function Jf(s,i=1){if(typeof window>"u"||i<=0)return;const l=Yl();if(!l)return;l.state==="suspended"&&l.resume();const c=Hs.get(s);if(!c){const p=performance.now();Jl(s).then(h=>{h&&performance.now()-p<=Yf&&Ju(l,h,i)});return}Ju(l,c,i)}function Ju(s,i,l){const c=s.createBufferSource(),p=s.createGain();p.gain.value=Math.min(1,l),c.buffer=i,c.connect(p).connect(s.destination),c.start()}const xd=.7,yd=d.createContext({enabled:!0,volume:xd});function Xf({enabled:s=!0,volume:i=xd,children:l}){return f.jsx(yd.Provider,{value:{enabled:s,volume:i},children:l})}function xo(s,i=!0){const{enabled:l,volume:c}=d.useContext(yd),p=l&&i;return d.useEffect(()=>{p&&qf(s)},[s,p]),d.useCallback(()=>{p&&Jf(s,c)},[s,p,c])}const e1=`/* ============================================================
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
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
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
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
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
`,Xu=5e-4,t1=6e3,ed=60;function n1({stiffness:s,damping:i,mass:l}){let c=0,p=0;const h=.001,g=[0];let x=0,k=0;for(;x<t1;){const z=(-s*(c-1)-i*p)/l;if(p+=z*h,c+=p*h,x+=1,g.push(c),c>k&&(k=c),Math.abs(c-1)<Xu&&Math.abs(p)<Xu)break}return{trace:g,settleMs:x,overshoot:Math.max(0,k-1)}}function Os(s){const{trace:i,settleMs:l,overshoot:c}=n1(s),p=[];for(let h=0;h<ed;h+=1){const g=Math.round(h/(ed-1)*(i.length-1));p.push(+i[g].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:l,overshoot:c}}const Ps=60,td={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function r1([s,i,l,c],p){const h=(k,z,C)=>3*(1-C)**2*C*k+3*(1-C)*C**2*z+C**3;let g=0,x=1;for(let k=0;k<40;k+=1){const z=(g+x)/2;h(s,l,z)<p?g=z:x=z}return h(i,c,(g+x)/2)}function o1(s){const i=[];for(const l of s.split(",")){const[c,...p]=l.trim().split(/\s+/);p.length||i.push({v:+c,x:null});for(const h of p)i.push({v:+c,x:parseFloat(h)/100})}i[0].x===null&&(i[0].x=0),i.at(-1).x===null&&(i.at(-1).x=1);for(let l=1;l<i.length;l+=1){if(i[l].x!==null){i[l].x=Math.max(i[l].x,i[l-1].x);continue}let c=l;for(;i[c].x===null;)c+=1;const p=(i[c].x-i[l-1].x)/(c-l+1);for(let h=l;h<c;h+=1)i[h].x=i[h-1].x+p}return i}function s1(s,i){for(let l=1;l<s.length;l+=1)if(i<=s[l].x){const c=s[l-1],p=s[l],h=p.x-c.x;return h?c.v+(i-c.x)/h*(p.v-c.v):p.v}return s.at(-1).v}function Xl(s){var p;const i=(s||"ease").trim(),l=i.match(/^linear\((.+)\)$/);if(l){const h=o1(l[1]);return Array.from({length:Ps},(g,x)=>s1(h,x/(Ps-1)))}const c=((p=i.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||td[i]||td.ease;return Array.from({length:Ps},(h,g)=>r1(c,g/(Ps-1)))}function ei(s){const i=s.map((c,p)=>Math.abs(s[Math.min(p+1,s.length-1)]-s[Math.max(p-1,0)]));i[0]=0,i[i.length-1]=0;const l=Math.max(...i)||1;return i.map(c=>c/l)}const a1=s=>(s.endsWith("ms")?parseFloat(s):parseFloat(s)*1e3)||0;function l1(s){const i=[];let l=0,c="";for(const p of s)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c.trim()),c=""):c+=p;return i.push(c.trim()),i}function Ln(s,i){const l=`--sc-motion-${i}`,c=getComputedStyle(s),p=E=>parseFloat(c.getPropertyValue(E))||0,h=document.createElement("span");h.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${l}-travel-duration),var(${l}-press-lean-duration,0ms);transition-timing-function:var(${l}-travel-easing),var(--sc-motion-press-easing);`,s.appendChild(h);const g=getComputedStyle(h),[x,k]=g.transitionDuration.split(",").map(E=>a1(E.trim())),[z,C]=l1(g.transitionTimingFunction);return h.remove(),{travelDur:x,travelEasing:z,leanDur:k,leanEasing:C,stretch:p(`${l}-stretch`),squash:p(`${l}-squash`),lean:p(`${l}-press-lean`)}}const In=s=>!!s&&(s.stretch>0||s.squash>0||s.lean>0),Zn=()=>{var s;return typeof window<"u"&&!!((s=window.matchMedia)!=null&&s.call(window,"(prefers-reduced-motion: reduce)").matches)};function Bn({l:s,r:i,h:l},c,p=!0){return{transform:`translate(${s}px, ${p?(c-l)/2:0}px)`,width:`${i-s}px`,height:`${l}px`}}function _r(s,i,l,c,p=!0){const h=Xl(s.travelEasing),g=ei(h);return h.map((x,k)=>{const z=s.stretch*c*g[k],C=i.l+(l.l-i.l)*x-z/2,E=i.r+(l.r-i.r)*x+z/2;return Bn({l:C,r:E,h:c*(1-s.squash*g[k])},c,p)})}function ti(s,i,l){const c=Math.sign(l.l+l.r-(i.l+i.r)),p=s.lean*.25*Math.abs((l.l+l.r-(i.l+i.r))/2);return c>0?{...i,r:i.r+p}:c<0?{...i,l:i.l-p}:i}function wr(s,i,l,c,{hold:p=!1,onDone:h}={}){s.getAnimations().forEach(x=>x.cancel());const g=s.animate(i,{duration:l,easing:c,fill:"forwards"});return p||(g.onfinish=()=>{g.cancel(),h==null||h()}),g}function At(s){const i=s.getBoundingClientRect(),l=s.currentCSSZoom||1;return{left:i.left/l,right:i.right/l,width:i.width/l,top:i.top/l,height:i.height/l}}function ni(s,i){const l=At(s);return{l:l.left-i.left,r:l.right-i.left}}function i1(s,i){const l=Ln(s,"switch"),c=getComputedStyle(s),p=parseFloat(c.width),h=parseFloat(c.height),g=parseFloat(getComputedStyle(i).height),x=(h-g)/2;return{...l,knob:g,travel:p-g-2*x}}const vo=(s,i)=>({l:i?s.travel:0,r:(i?s.travel:0)+s.knob}),c1=(s,i)=>ti(s,vo(s,i),vo(s,!i)),u1=(s,i,l)=>_r(s,i,l,s.knob,!1),d1=(s,i,l)=>[Bn({...i,h:s.knob},s.knob,!1),Bn({...l,h:s.knob},s.knob,!1)],p1="_field_tf6ns_39",f1="_disabled_tf6ns_49",h1="_controlWrapper_tf6ns_53",m1="_input_tf6ns_59",g1="_track_tf6ns_69",v1="_glyphs_tf6ns_84",x1="_glyphOn_tf6ns_99",y1="_glyphOff_tf6ns_105",w1="_thumb_tf6ns_115",b1="_label_tf6ns_190",Dt={field:p1,disabled:f1,controlWrapper:h1,input:m1,track:g1,glyphs:v1,glyphOn:x1,glyphOff:y1,thumb:w1,label:b1};function k1({checked:s=!1,disabled:i=!1,onChange:l,label:c,sound:p=!0,glyphs:h=!0,className:g=""}){const x=d.useId(),k=xo("toggle",p),z=d.useRef(null),C=d.useRef(null),E=d.useRef(null),j=d.useRef(null),F=d.useRef(null),U=d.useRef(!1),H=()=>{if(i||Zn()||!C.current||!E.current)return null;const O=i1(C.current,E.current);return In(O)?O:null},Q=()=>{var O,W;(O=j.current)==null||O.cancel(),j.current=null,F.current=null,(W=C.current)==null||W.removeAttribute("data-driven")},ee=(O,W,he,ue)=>{var ie;(ie=j.current)==null||ie.cancel(),C.current.setAttribute("data-driven","");const le=E.current.animate(O,{duration:W,easing:he,fill:"forwards"});j.current=le,ue||(le.onfinish=()=>{j.current===le&&Q()})},oe=(O,W,he)=>ee(u1(O,W,vo(O,he)),O.travelDur,"linear",!1),ne=()=>{const O=H();if(!O||O.lean<=0)return;const W=z.current.checked,he=F.current||vo(O,W);F.current=c1(O,W),U.current=!1,ee(d1(O,he,F.current),O.leanDur,O.leanEasing,!0)},Y=()=>{if(!F.current)return;const O=H();if(!O){Q();return}const W=F.current;F.current=null,oe(O,W,z.current.checked)},ce=()=>setTimeout(()=>{U.current||Y()},0);return f.jsxs("label",{htmlFor:x,className:`${Dt.field} ${i?Dt.disabled:""} ${g}`,onPointerDown:ne,onPointerUp:ce,onPointerLeave:Y,onPointerCancel:Y,children:[f.jsxs("span",{className:Dt.controlWrapper,children:[f.jsx("input",{ref:z,id:x,type:"checkbox",role:"switch",className:Dt.input,checked:s,disabled:i,onChange:O=>{k(),U.current=!0;const W=H();if(W){const he=F.current||vo(W,!O.target.checked);F.current=null,oe(W,he,O.target.checked)}else Q();l==null||l(O)}}),f.jsxs("span",{ref:C,className:Dt.track,"aria-hidden":"true",children:[h&&f.jsxs("span",{className:Dt.glyphs,children:[f.jsx("span",{className:Dt.glyphOn}),f.jsx("span",{className:Dt.glyphOff})]}),f.jsx("span",{ref:E,className:Dt.thumb})]})]}),c&&f.jsx("span",{className:Dt.label,children:c})]})}const L1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),d.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),_1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),S1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),d.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),E1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),z1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),d.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),C1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),j1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),d.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),M1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),d.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),N1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),d.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),A1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),F1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),P1=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),R1=d.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ft=d.forwardRef((s,i)=>{const{alt:l,color:c,size:p,weight:h,mirrored:g,children:x,weights:k,...z}=s,{color:C="currentColor",size:E,weight:j="regular",mirrored:F=!1,...U}=d.useContext(R1);return d.createElement("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:p??E,height:p??E,fill:c??C,viewBox:"0 0 256 256",transform:g||F?"scale(-1, 1)":void 0,...U,...z},!!l&&d.createElement("title",null,l),x,k.get(h??j))});ft.displayName="IconBase";const wd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:L1}));wd.displayName="ArrowRightIcon";const T1=wd,bd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:_1}));bd.displayName="CalendarBlankIcon";const $1=bd,kd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:S1}));kd.displayName="CaretDownIcon";const D1=kd,Ld=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:E1}));Ld.displayName="ClockIcon";const H1=Ld,_d=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:z1}));_d.displayName="CopyIcon";const V1=_d,Sd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:C1}));Sd.displayName="EnvelopeSimpleIcon";const O1=Sd,Ed=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:j1}));Ed.displayName="EyeIcon";const I1=Ed,zd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:M1}));zd.displayName="MagnifyingGlassIcon";const Z1=zd,Cd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:N1}));Cd.displayName="MapPinIcon";const B1=Cd,jd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:A1}));jd.displayName="MinusIcon";const U1=jd,Md=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:F1}));Md.displayName="PlusIcon";const W1=Md,Nd=d.forwardRef((s,i)=>d.createElement(ft,{ref:i,...s,weights:P1}));Nd.displayName="XIcon";const Q1=Nd,K1="_icon_1vxzc_2",G1={icon:K1},q1={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Is({glyph:s,weight:i="regular",size:l="1em",label:c,className:p="",...h}){if(!s)return null;const g=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},x=q1[l];return x?f.jsx("span",{className:`${G1.icon} ${p}`.trim(),style:{fontSize:x},children:f.jsx(s,{weight:i,size:"1em",...g,...h})}):f.jsx(s,{weight:i,size:l,className:p,...g,...h})}const Y1="_stepper_1wvfb_28",J1="_button_1wvfb_38",X1="_glyph_1wvfb_79",e0="_readout_1wvfb_101",t0="_digits_1wvfb_123",n0="_disabled_1wvfb_134",xn={stepper:Y1,button:J1,glyph:X1,readout:e0,digits:t0,disabled:n0},r0=400,o0=80;function s0({value:s,onChange:i,min:l=-1/0,max:c=1/0,step:p=1,label:h,disabled:g=!1,sound:x=!0,className:k=""}){const z=xo("tick",x),C=d.useRef(s);C.current=s;const E=d.useRef(null),j=d.useRef(null),F=W=>Math.max(l,Math.min(c,W)),U=W=>{const he=F(C.current+W);he!==C.current&&(C.current=he,i==null||i(he),z())},H=()=>{E.current&&clearTimeout(E.current),j.current&&clearInterval(j.current),E.current=null,j.current=null};d.useEffect(()=>H,[]);const Q=d.useRef(null),ee=d.useRef(null),oe=d.useRef(s);d.useLayoutEffect(()=>{const W=oe.current;oe.current=s;const he=Q.current,ue=ee.current;if(W===s||g||!he||!ue||Zn())return;const le=Ln(he,"stepper"),ie=parseFloat(getComputedStyle(he).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ie>0||In(le)))return;const I=(s>W?1:-1)*ie*At(he).height,D=Xl(le.travelEasing),T=ei(D),we=D.map((me,pe)=>({transform:`translateY(${I*(1-me)}px) scale(${1-.2*le.squash*T[pe]}, ${1+.2*le.stretch*T[pe]})`}));wr(ue,we,le.travelDur,"linear")},[s,g]);const ne=W=>{g||(U(W),H(),E.current=setTimeout(()=>{j.current=setInterval(()=>U(W),o0)},r0))},Y=s<=l,ce=s>=c,O=W=>{g||(W.key==="ArrowUp"?(W.preventDefault(),U(p)):W.key==="ArrowDown"?(W.preventDefault(),U(-p)):W.key==="Home"&&Number.isFinite(l)?(W.preventDefault(),C.current!==l&&z(),C.current=l,i==null||i(l)):W.key==="End"&&Number.isFinite(c)&&(W.preventDefault(),C.current!==c&&z(),C.current=c,i==null||i(c)))};return f.jsxs("div",{className:`${xn.stepper} ${g?xn.disabled:""} ${k}`,children:[f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Decrease ${h}`:"Decrease",disabled:g||Y,onPointerDown:()=>ne(-p),onPointerUp:H,onPointerLeave:H,onPointerCancel:H,children:f.jsx(Is,{glyph:U1,weight:"bold",size:"sm",className:xn.glyph})}),f.jsx("span",{ref:Q,className:xn.readout,role:"spinbutton",tabIndex:g?-1:0,"aria-valuenow":s,"aria-valuemin":Number.isFinite(l)?l:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":h,"aria-disabled":g||void 0,onKeyDown:O,children:f.jsx("span",{ref:ee,className:xn.digits,children:s})}),f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Increase ${h}`:"Increase",disabled:g||ce,onPointerDown:()=>ne(p),onPointerUp:H,onPointerLeave:H,onPointerCancel:H,children:f.jsx(Is,{glyph:W1,weight:"bold",size:"sm",className:xn.glyph})})]})}const a0="_track_s3qo0_27",l0="_indicator_s3qo0_38",i0="_segment_s3qo0_59",c0="_md_s3qo0_74",u0="_sm_s3qo0_84",d0="_lg_s3qo0_94",p0="_count_s3qo0_104",f0="_segmentSelected_s3qo0_113",h0="_disabled_s3qo0_127",yn={track:a0,indicator:l0,segment:i0,md:c0,sm:u0,lg:d0,count:p0,segmentSelected:f0,disabled:h0};function m0({options:s=[],value:i,onChange:l,disabled:c=!1,label:p,size:h="md",sound:g=!0,className:x=""}){const k=xo("select",g),z=I=>{I!==i&&k(),l==null||l(I)},C=d.useRef(null),E=d.useRef({}),j=d.useRef(null),[F,U]=d.useState(null),H=d.useRef(null),Q=d.useRef(null),ee=d.useRef(i);ee.current=i;const oe=I=>{const D=C.current,T=E.current[I];if(!D||!T)return null;const we=At(D),me=At(T);return{l:me.left-we.left-D.clientLeft,r:me.right-we.left-D.clientLeft}},ne=d.useCallback(()=>{const I=oe(i);U(I?{left:I.l,width:I.r-I.l}:null)},[i]);d.useLayoutEffect(()=>{ne()},[ne,s.length,h]);const Y=()=>{if(c||Zn()||!C.current||!j.current)return null;const I=Ln(C.current,"segmented-control");return In(I)?{...I,cap:parseFloat(getComputedStyle(j.current).height)}:null},ce=(I,D,T,we)=>{C.current.setAttribute("data-driven",""),wr(j.current,I,D,T,{hold:we,onDone:()=>{var me;return(me=C.current)==null?void 0:me.removeAttribute("data-driven")}})};d.useLayoutEffect(()=>{if(!F)return;const I={l:F.left,r:F.left+F.width},D=Q.current||H.current;H.current=I,Q.current=null;const T=Y();!T||!D||D.l===I.l&&D.r===I.r||ce(_r(T,D,I,T.cap),T.travelDur,"linear",!1)},[F==null?void 0:F.left,F==null?void 0:F.width]);const O=()=>{if(!Q.current)return;const I=Y(),D=Q.current;Q.current=null,I&&H.current&&ce(_r(I,D,H.current,I.cap),I.travelDur,"linear",!1)},W=I=>{if(I===i||!H.current)return;const D=Y(),T=oe(I);if(!D||D.lean<=0||!T)return;const we=j.current.getAnimations().length?ni(j.current,{left:At(C.current).left+C.current.clientLeft}):H.current;Q.current=ti(D,H.current,T);const me=i,pe=()=>setTimeout(()=>{ee.current===me&&O()},0);window.addEventListener("pointerup",pe,{once:!0}),ce([Bn({...we,h:D.cap},D.cap),Bn({...Q.current,h:D.cap},D.cap)],D.leanDur,D.leanEasing,!0)};d.useEffect(()=>(window.addEventListener("resize",ne),()=>window.removeEventListener("resize",ne)),[ne]);const he=I=>{var D;(D=E.current[I])==null||D.focus()},ue=I=>{if(c||s.length===0)return;const D=(I+s.length)%s.length,T=s[D];T&&(z(T.value),he(T.value))},le=(I,D)=>{if(!c)switch(I.key){case"ArrowRight":case"ArrowDown":I.preventDefault(),ue(D+1);break;case"ArrowLeft":case"ArrowUp":I.preventDefault(),ue(D-1);break;case"Home":I.preventDefault(),ue(0);break;case"End":I.preventDefault(),ue(s.length-1);break}},ie=s.findIndex(I=>I.value===i);return f.jsxs("div",{ref:C,className:`${yn.track} ${yn[h]||yn.md} ${c?yn.disabled:""} ${x}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[F&&f.jsx("span",{ref:j,className:yn.indicator,"aria-hidden":"true",style:{transform:`translateX(${F.left}px)`,width:`${F.width}px`}}),s.map((I,D)=>{const T=I.value===i,we=T||ie===-1&&D===0;return f.jsxs("button",{type:"button",ref:me=>{E.current[I.value]=me},role:"radio","aria-checked":T,tabIndex:c?-1:we?0:-1,disabled:c,className:`${yn.segment} ${T?yn.segmentSelected:""}`,onClick:()=>z(I.value),onPointerDown:()=>W(I.value),onPointerLeave:O,onKeyDown:me=>le(me,D),children:[I.label,I.count!==void 0&&f.jsx("span",{className:yn.count,children:I.count})]},I.value)})]})}const nd=16,Dl=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],g0="_mark_nniye_3",v0="_sm_nniye_24",x0="_md_nniye_1",y0="_lg_nniye_26",w0="_working_nniye_28",b0="_paused_nniye_29",k0="_base_nniye_33",L0="_glint_nniye_34",_0="_spin_nniye_36",S0="_loop_nniye_37",bt={mark:g0,sm:v0,md:x0,lg:y0,working:w0,paused:b0,base:k0,glint:L0,spin:_0,loop:S0},E0={sm:bt.sm,md:bt.md,lg:bt.lg},z0=3.2;function C0(s,i){const l=s%2===0,p=-((l?1:-1)*(360*s)/i),h=p+360*(l?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${h.toFixed(2)} 8 8`}}function j0({working:s=!0,size:i="sm",label:l,className:c="",...p}){const h=`wm${d.useId().replace(/[^a-zA-Z0-9]/g,"")}`,g=Dl.length,x=l?{role:"img","aria-label":l}:{"aria-hidden":!0},k=[bt.mark,E0[i]??bt.sm,s?bt.working:bt.paused,c].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${nd} ${nd}`,className:k,focusable:"false",...x,...p,children:[s&&f.jsx("defs",{children:Dl.map((z,C)=>{const{from:E,to:j}=C0(C,g);return f.jsxs("linearGradient",{id:`${h}-s${C}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:bt.base}),f.jsx("stop",{offset:"0.45",className:bt.base}),f.jsx("stop",{offset:"1",className:bt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:E,to:j,dur:`${z0}s`,repeatCount:"indefinite"})]},C)})}),Dl.map((z,C)=>f.jsx("g",{className:bt.spin,style:{"--wm-i":C},children:f.jsx("path",{d:z,className:bt.loop,style:{"--wm-i":C},stroke:s?`url(#${h}-s${C})`:void 0})},C))]})}const M0="_button_1cn8j_34",N0="_label_1cn8j_74",A0="_arrow_1cn8j_84",F0="_sm_1cn8j_57",P0="_primary_1cn8j_122",R0="_destructive_1cn8j_123",T0="_secondary_1cn8j_157",$0="_tertiary_1cn8j_173",D0="_loading_1cn8j_207",H0="_working_1cn8j_211",Hn={button:M0,label:N0,arrow:A0,sm:F0,primary:P0,destructive:R0,secondary:T0,tertiary:$0,loading:D0,working:H0},V0=["primary","secondary","tertiary","destructive"],O0=["lg","sm"];function I0(){return f.jsx(T1,{weight:"bold",className:Hn.arrow,"aria-hidden":"true"})}function Z0({variant:s="primary",size:i="lg",disabled:l=!1,loading:c=!1,arrow:p=!0,type:h="button",sound:g=!0,children:x,onClick:k,className:z="",...C}){const E=V0.includes(s)?s:"primary",j=O0.includes(i)?i:"lg",F=l||c,U=xo("press",g);return f.jsxs("button",{type:h,className:`${Hn.button} ${Hn[E]} ${j==="sm"?Hn.sm:""} ${c?Hn.loading:""} ${z}`,disabled:F,"aria-busy":c||void 0,onClick:F?void 0:H=>{U(),k==null||k(H)},...C,children:[f.jsx("span",{className:Hn.label,children:x}),c?f.jsx(j0,{className:Hn.working}):p&&f.jsx(I0,{})]})}const B0="_wrapper_1owvf_14",U0="_tooltip_1owvf_19",W0="_open_1owvf_62",Q0="_singleline_1owvf_67",K0="_multiline_1owvf_71",ho={wrapper:B0,tooltip:U0,open:W0,singleline:Q0,multiline:K0};function G0({content:s,multiline:i=!1,open:l,children:c}){const p=d.useId(),[h,g]=d.useState(!1),x=l??h,k=d.useRef(null),z=d.useRef(null);d.useLayoutEffect(()=>{const j=k.current,F=z.current;if(!x||!j||!F||Zn())return;const U=Ln(F,"tooltip");if(!In(U))return;const H=parseFloat(getComputedStyle(F).getPropertyValue("--sc-space-component-gap-sm"))||0,Q=Xl(U.travelEasing),ee=ei(Q),oe=Q.map((Y,ce)=>({transform:`translate(-50%, ${-H*(1-Y)}px) scale(${1-.2*U.squash*ee[ce]}, ${1+.2*U.stretch*ee[ce]})`,opacity:Math.min(1,Math.max(0,Y))}));F.getAnimations().forEach(Y=>Y.cancel()),j.setAttribute("data-driven","");const ne=F.animate(oe,{duration:U.travelDur,easing:"linear"});ne.onfinish=()=>j.removeAttribute("data-driven"),ne.oncancel=()=>j.removeAttribute("data-driven")},[x]);const C=()=>g(!0),E=()=>g(!1);return f.jsxs("span",{ref:k,className:ho.wrapper,onMouseEnter:C,onMouseLeave:E,onFocus:C,onBlur:E,children:[f.jsx("span",{"aria-describedby":x?p:void 0,children:c}),f.jsx("span",{ref:z,role:"tooltip",id:p,className:`${ho.tooltip} ${x?ho.open:""} ${i?ho.multiline:ho.singleline}`,children:s})]})}const q0=Math.PI*2,Y0=new Set(["uskel","uloader","usplash"]),J0=new Set(["ucard"]),X0={uskel:0,uloader:1.96,usplash:0},rd=new Set(["progress","active","current"]);function eh(s){return function(){s|=0,s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function th(s){let i=2166136261;for(const l of String(s))i=Math.imul(i^l.charCodeAt(0),16777619);return i}const nh=(s,i,l,c)=>s.fillRect(i-c,l-c,c*2,c*2),rh=(s,i,l,c)=>{s.beginPath(),s.arc(i,l,c,0,q0),s.fill()},Ad=(s,i,l,c)=>{c*=1.25;const p=Math.max(.7,c*.38);s.fillRect(i-c,l-p/2,c*2,p),s.fillRect(i-p/2,l-c,p,c*2)},oh={plus:Ad,square:nh,round:rh};function wt(s,i,l){const c=i.rng,p=(l.s||5)*i.S,h=l.x2-l.x1,g=l.y2-l.y1,x=Math.hypot(h,g);if(!x)return;const k=h/x,z=g/x,C=-z,E=k,j=l.w,F=l.ext??j*.35,U=l.r??.9,H=l.jit??.7;let Q=0;for(let ee=-F;ee<=x+F;ee+=p,Q++){const oe=l.grid?0:Q%2*p/2;let ne=1;if(l.taper){const Y=(ee+F)/(x+2*F);ne=Math.min(1,(l.fadeEnd?1-Y:Math.min(Y,1-Y))/l.taper)}for(let Y=-j/2+oe;Y<=j/2+.01;Y+=p){const ce=l.crisp?ne:Math.min(1,(j/2-Math.abs(Y))/(p*1.6)+.3)*ne;if(c()>ce)continue;const O=l.x1+k*ee+C*Y+(c()-.5)*H,W=l.y1+z*ee+E*Y+(c()-.5)*H;s.globalAlpha=(l.a??.9)*(l.af?l.af(ee+(l.u0||0),Y,O,W):1),i.dot(s,O,W,U)}}s.globalAlpha=1}function Dn(s,i,l,c,p={}){let h=0;for(let g=0;g<l.length-1;g++)wt(s,i,{x1:l[g][0],y1:l[g][1],x2:l[g+1][0],y2:l[g+1][1],w:c,u0:h,...p}),h+=Math.hypot(l[g+1][0]-l[g][0],l[g+1][1]-l[g][1])}const sh=s=>Math.max(0,Math.min(1,Number.isFinite(+s)?+s:0)),ah={udiv(s,i,l,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),h=7,g=c.opts.fade||"both";wt(s,c,{x1:2,y1:l/2,x2:i-2,y2:l/2,w:(p-1)*h*c.S,s:h,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:g==="none"?0:g==="end"?.7:.22,fadeEnd:g==="end"})},ucardhead(s,i,l,c){wt(s,c,{x1:-20,y1:l*.8,x2:i+20,y2:l*.15,w:44,s:7,r:1.6,ext:0}),wt(s,c,{x1:i*.4,y1:-20,x2:i*.78,y2:l+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(s,i,l,c){const p=12*c.S;for(let h=p/2;h<l;h+=p)for(let g=p/2;g<i;g+=p){let x=.14;c.hover&&(x+=.86*Math.exp(-((g-c.mx)**2+(h-c.my)**2)/5e3)),s.globalAlpha=x,c.dot(s,g,h,1.6)}s.globalAlpha=1},ucta(s,i,l,c){Dn(s,c,[[-.05*i,.1*l],[.22*i,.5*l],[.02*i,1.1*l]],46,{s:7,r:1.6,ext:0}),Dn(s,c,[[1.05*i,-.1*l],[.78*i,.5*l],[.98*i,1.1*l]],46,{s:7,r:1.6,ext:0})},uempty(s,i,l,c){Dn(s,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,h])=>[p*i,h*l]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(s,i,l,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,i-40,10],["r",20,108,i-40,10],["r",20,128,i*.55,10],["r",20,158,i-40,46]],h=6*c.S,g=c.t*240%(i+500)-250;for(let x=h/2;x<l;x+=h)for(let k=h/2;k<i;k+=h){if(!p.some(E=>E[0]==="c"?(k-E[1])**2+(x-E[2])**2<E[3]**2:k>=E[1]&&k<=E[1]+E[3]&&x>=E[2]&&x<=E[2]+E[4]))continue;const C=Math.exp(-((k+x*.5-g)**2)/4050);s.globalAlpha=.16+.6*C,c.dot(s,k,x,1.3)}s.globalAlpha=1},uprog(s,i,l,c){const p=7*c.S,h=Math.max(1,Math.round(+c.opts.rows||1)),g=sh(c.opts.progress),x=l/2-(h-1)*p/2,k=c.teal("progress");for(let z=0;z<h;z++)for(let C=4;C<i;C+=p){const E=C/i<g;s.fillStyle=E?k:c.fg,s.globalAlpha=E?1:.2,c.dot(s,C,x+z*p,1.6)}s.globalAlpha=1,s.fillStyle=c.fg},uloader(s,i,l,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([k,z])=>[k*i,z*l]);let h=0;for(let k=0;k<p.length-1;k++)h+=Math.hypot(p[k+1][0]-p[k][0],p[k+1][1]-p[k][1]);const g=c.t%2.8/2.8,x=Math.min(1,g/.7)*(h+30);Dn(s,c,p,26,{s:6,r:1.3,ext:0,a:1,af:k=>k<x?x-k<18&&g<.7?1:.85:.08})},uline(s,i,l,c){s.fillStyle=c.teal("active"),wt(s,c,{x1:3,y1:l/2,x2:i-3,y2:l/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),s.fillStyle=c.fg},umedia(s,i,l,c){const p=10*c.S;s.globalAlpha=.16;for(let h=p/2;h<l;h+=p)for(let g=p/2;g<i;g+=p)c.dot(s,g,h,1.3);s.globalAlpha=1,wt(s,c,{x1:-20,y1:l*.9,x2:i+20,y2:l*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(s,i,l,c){Dn(s,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,h])=>[p*i,h*l]),72,{s:7,r:1.6,ext:0})},ufooter(s,i,l,c){const h=7*c.S,g=c.rng;s.fillStyle=c.C.page,s.fillRect(0,0,i,90),s.fillStyle=c.C.inverse,s.fillRect(0,90,i,l-90);for(let x=h/2;x<90;x+=h)for(let k=h/2;k<i;k+=h)g()<Math.pow(x/90,1.6)&&c.dot(s,k,x,1.6)},uquote(s,i,l,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},h=24,g=130;wt(s,c,{...p,x1:h,y1:h,x2:h+g,y2:h}),wt(s,c,{...p,x1:h,y1:h,x2:h,y2:h+g}),wt(s,c,{...p,x1:i-h,y1:l-h,x2:i-h-g,y2:l-h}),wt(s,c,{...p,x1:i-h,y1:l-h,x2:i-h,y2:l-h-g})},utime(s,i,l,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),h=Math.round(+c.opts.current||0),g=l/p,x=i/2,k=7*c.S,z=Array.from({length:p},(C,E)=>g*(E+.5));for(let C=z[0];C<=z[p-1];C+=k)z.some(E=>Math.abs(C-E)<15)||(s.globalAlpha=C<z[Math.min(Math.max(h,0),p-1)]?.75:.18,c.dot(s,x,C,1.4));z.forEach((C,E)=>{s.fillStyle=E===h?c.teal("current"):c.fg,s.globalAlpha=E<=h?1:.25;for(let j=-1;j<=1;j++)for(let F=-1;F<=1;F++)c.dot(s,x+j*6,C+F*6,1.5)}),s.globalAlpha=1,s.fillStyle=c.fg},ubullet(s,i,l,c){const p=i/3;c.opts.accent&&(s.fillStyle=c.teal("current"));for(let h=0;h<3;h++)for(let g=0;g<3;g++)c.dot(s,p/2+h*p,p/2+g*p,p*.26);s.fillStyle=c.fg},usep(s,i,l,c){s.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(s,i*(.2+p*.3),l*(.8-p*.3),i*.1);s.globalAlpha=1},uthumb(s,i,l,c){const p=c.rng,h=2+Math.floor(p()*2),g=[];for(let x=0;x<=h;x++)g.push([(x%2?.72+.22*p():.06+.22*p())*i,(.12+x*(.76/h)+(p()-.5)*.08)*l]);p()>.5&&g.forEach(x=>{const k=x[0];x[0]=x[1],x[1]=k}),Dn(s,c,g,i*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(s,i,l,c){wt(s,c,{x1:i*.5,y1:-20,x2:i+30,y2:l*.42,w:42,s:7,r:1.6,ext:0}),wt(s,c,{x1:i*.76,y1:-20,x2:i+30,y2:l*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(s,i,l,c){const p=c.t;Dn(s,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([h,g])=>[h*i,g*l]),50,{s:7,r:1.6,af:h=>.28+.72*Math.pow(.5+.5*Math.sin(h*.016-p*2),2)})},type(s,i,l,c){if(!i||!l||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(i),p.height=Math.ceil(l);const h=p.getContext("2d"),g=c.opts.text||"Crafthouse";h.textAlign="center",h.textBaseline="middle";let x=l*(+c.opts.textScale||.62);h.font=`500 ${x}px ${c.font}`;const k=h.measureText(g).width;k>i*.88&&(x*=i*.88/k,h.font=`500 ${x}px ${c.font}`),h.fillText(g,i/2,l/2);const z=Math.min(9,Math.max(4.2,x/34))*c.S,C=z*.24,E=h.getImageData(0,0,p.width,p.height).data,j=-.14,F=Math.cos(j),U=Math.sin(j),H=Math.hypot(i,l)/2+10;let Q=0;for(let ee=-H;ee<H;ee+=z,Q++)for(let oe=-H+Q%2*z/2;oe<H;oe+=z){const ne=i/2+oe*F-ee*U,Y=l/2+oe*U+ee*F;ne<0||Y<0||ne>=p.width||Y>=p.height||E[((Y|0)*p.width+(ne|0))*4+3]>100&&c.dot(s,ne,Y,C)}}};function lh(s,i){const{art:l,w:c,h:p,dpr:h,colors:g,surface:x="inverse",shape:k="plus",density:z=1,seed:C=0,t:E=0,opts:j={},font:F,pointer:U}=i,H=ah[l];if(!H||!c||!p)return;const{accent:Q,...ee}=g,oe=x==="inverse"?ee.onInverse:ee.text,ne={inverse:ee.inverse,raised:ee.raised,page:ee.page,sunk:ee.sunk};s.setTransform(h,0,0,h,0,0),s.globalAlpha=1,s.clearRect(0,0,c,p),x!=="none"&&(s.fillStyle=ne[x]??ee.inverse,s.fillRect(0,0,c,p)),s.fillStyle=oe;const Y=Math.min(1.6,Math.max(.6,+z||1)),ce=O=>{if(!rd.has(O))throw new Error(`PlusField: teal is reserved for ${[...rd].join(", ")}; "${O}" is not one of them.`);return Q};H(s,c,p,{C:ee,fg:oe,S:1/Y,rng:eh(C),t:E,opts:j,font:F,teal:ce,hover:!!(U!=null&&U.hover),mx:(U==null?void 0:U.x)??0,my:(U==null?void 0:U.y)??0,dot:oh[k]??Ad}),s.globalAlpha=1}const ih="_root_1jtbm_5",ch="_backdrop_1jtbm_17",uh="_canvas_1jtbm_25",dh="_srOnly_1jtbm_35",mo={root:ih,backdrop:ch,canvas:uh,srOnly:dh},ph={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},br=new Set,On=new Set;let kr=0,Vn=null,kt=null,kn=null;const fh=()=>typeof window<"u",hh=()=>!!(kn!=null&&kn.matches);function Fd(s){const i=s/1e3;On.forEach(l=>l.paint(i)),kr=On.size?requestAnimationFrame(Fd):0}function mh(){!kr&&On.size&&(kr=requestAnimationFrame(Fd))}function Wl(){var s,i,l;fh()&&(!Vn&&typeof MutationObserver<"u"&&(Vn=new MutationObserver(()=>br.forEach(c=>c.refresh())),Vn.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!kt&&typeof IntersectionObserver<"u"&&(kt=new IntersectionObserver(c=>c.forEach(p=>{const h=p.target.__plusField;h&&(h.visible=p.isIntersecting,h.syncMotion())}))),!kn&&window.matchMedia&&(kn=window.matchMedia("(prefers-reduced-motion: reduce)"),(s=kn.addEventListener)==null||s.call(kn,"change",()=>br.forEach(c=>c.syncMotion()))),document.fonts&&!Wl.fonts&&(Wl.fonts=!0,(l=(i=document.fonts).addEventListener)==null||l.call(i,"loadingdone",()=>br.forEach(c=>c.refresh()))))}function gh(){br.size||(Vn==null||Vn.disconnect(),Vn=null,kt==null||kt.disconnect(),kt=null,kr&&cancelAnimationFrame(kr),kr=0)}function vh(s,i){const l={root:s,canvas:i,ctx:i.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(s),p=c.color,h={};for(const[g,x]of Object.entries(ph))h[g]=c.getPropertyValue(x).trim()||p;l.colors=h,l.font=c.fontFamily},resize(c,p){l.w=c,l.h=p,l.dpr=Math.min(2,window.devicePixelRatio||1);const h=Math.round(c*l.dpr),g=Math.round(p*l.dpr);i.width!==h&&(i.width=h),i.height!==g&&(i.height=g),l.refresh()},animated(){const c=l.props;return!!c&&Y0.has(c.art)&&c.animate!==!1&&!hh()},syncMotion(){var c;if(l.animated()&&l.visible&&l.w&&l.h){On.add(l),mh();return}On.delete(l),l.paint(l.animated()?l.t:X0[(c=l.props)==null?void 0:c.art]??0)},refresh(){!l.props||!l.w||!l.h||(l.readTokens(),l.syncMotion(),On.has(l)&&l.paint(l.t))},paint(c){const p=l.props;!p||!l.w||!l.h||(l.colors||l.readTokens(),l.t=c,lh(l.ctx,{art:p.art,w:l.w,h:l.h,dpr:l.dpr,colors:l.colors,surface:p.surface,shape:p.shape,density:p.density,seed:th(p.seed??p.art),t:c,opts:p.opts,font:l.font,pointer:l.pointer}))}};return l}const xh=new Set(["inverse","raised","page","sunk","none"]),yh=new Set(["plus","square","round"]);function wh({art:s,surface:i="inverse",shape:l="plus",density:c=1,animate:p=!0,seed:h,rows:g,fade:x,text:k,progress:z,accent:C=!1,steps:E,current:j,textScale:F,backdrop:U=!1,label:H,as:Q="div",className:ee="",...oe}){const ne=d.useRef(null),Y=d.useRef(null),ce=d.useRef(null),O={art:s,surface:xh.has(i)?i:"inverse",shape:yh.has(l)?l:"plus",density:c,animate:p,seed:h,opts:{rows:g,fade:x,text:k,progress:z,accent:C,steps:E,current:j,textScale:F}};d.useEffect(()=>{const ue=ne.current,le=Y.current;if(!ue||!le||!le.getContext)return;Wl();const ie=vh(ue,le);ie.props=O,ce.current=ie,ue.__plusField=ie,br.add(ie);const I=typeof ResizeObserver<"u"?new ResizeObserver(([me])=>{const{width:pe,height:B}=me.contentRect;(pe!==ie.w||B!==ie.h)&&ie.resize(pe,B)}):null;I==null||I.observe(ue),kt==null||kt.observe(ue);const D=J0.has(s)?ue.parentElement||ue:null,T=me=>{const pe=ue.getBoundingClientRect();ie.pointer={hover:!0,x:me.clientX-pe.left,y:me.clientY-pe.top},ie.paint(ie.t)},we=()=>{ie.pointer={hover:!1,x:0,y:0},ie.paint(ie.t)};return D==null||D.addEventListener("pointermove",T),D==null||D.addEventListener("pointerleave",we),()=>{I==null||I.disconnect(),kt==null||kt.unobserve(ue),D==null||D.removeEventListener("pointermove",T),D==null||D.removeEventListener("pointerleave",we),On.delete(ie),br.delete(ie),delete ue.__plusField,ce.current=null,gh()}},[s]),d.useEffect(()=>{const ue=ce.current;ue&&(ue.props=O,ue.refresh())});const W=[mo.root,U?mo.backdrop:"",ee].filter(Boolean).join(" "),he=Math.round(Math.max(0,Math.min(1,Number(z)||0))*100);return f.jsxs(Q,{ref:ne,className:W,...oe,children:[f.jsx("canvas",{ref:Y,className:mo.canvas,"aria-hidden":"true"}),H&&(s==="uloader"||s==="uskel")&&f.jsx("span",{role:"status",className:mo.srOnly,children:H}),s==="uprog"&&f.jsx("span",{role:"progressbar",className:mo.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":he,"aria-label":H})]})}const bh="_underline_w8mvb_3",kh={underline:bh},Hl=new WeakMap,od=s=>{var i;return s.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((i=s.parentElement)==null?void 0:i.parentElement)||null};function Pd({active:s=!0,shape:i,density:l,motion:c="plus-underline",className:p="",...h}){const g=d.useRef(null);return d.useLayoutEffect(()=>{const x=g.current,k=x&&s?od(x):null;if(!k)return;const z=Hl.get(k);if(Hl.set(k,x),!z||z===x||!z.isConnected||Zn())return;const C=Ln(x,c);if(!In(C))return;const E=At(x),j=ni(z,E);z.getAnimations().forEach(F=>F.cancel()),wr(x,_r(C,j,{l:0,r:E.width},E.height),C.travelDur,"linear")},[s,c]),d.useEffect(()=>{var x;s||(x=g.current)==null||x.getAnimations().forEach(k=>k.cancel())},[s]),d.useEffect(()=>{const x=g.current,k=x&&s?od(x):null;if(!k)return;const z=C=>{var ne,Y;const E=(Y=(ne=C.target).closest)==null?void 0:Y.call(ne,'a, button, [role="tab"], [role="radio"]');if(!E||!k.contains(E)||E.contains(x)||Zn())return;const j=Ln(x,c);if(!In(j)||j.lean<=0)return;const F=At(x),U=At(E),H={l:0,r:F.width},Q=ti(j,H,{l:U.left-F.left,r:U.right-F.left});wr(x,[Bn({...H,h:F.height},F.height),Bn({...Q,h:F.height},F.height)],j.leanDur,j.leanEasing,{hold:!0});let ee=!1;const oe=()=>setTimeout(()=>{ee||(ee=!0,!(Hl.get(k)!==x||!x.isConnected)&&wr(x,_r(Ln(x,c),Q,H,F.height),j.travelDur,"linear"))},0);window.addEventListener("pointerup",oe,{once:!0}),E.addEventListener("pointerleave",oe,{once:!0})};return k.addEventListener("pointerdown",z),()=>k.removeEventListener("pointerdown",z)},[s,c]),f.jsx("span",{ref:g,className:`${kh.underline} ${p}`,"aria-hidden":"true",...h,children:s&&f.jsx(wh,{as:"span",art:"uline",surface:"none",shape:i,density:l})})}const Lh="_nav_lg753_18",_h="_row_lg753_26",Sh="_brand_lg753_35",Eh="_links_lg753_44",zh="_linkItem_lg753_51",Ch="_link_lg753_44",jh="_toggle_lg753_79",Mh="_trailing_lg753_84",Nh="_desktop_lg753_93",Ah="_compact_lg753_100",Fh="_menu_lg753_118",Ph="_menuOpen_lg753_128",Je={nav:Lh,row:_h,brand:Sh,links:Eh,linkItem:zh,link:Ch,toggle:jh,trailing:Mh,desktop:Nh,compact:Ah,menu:Fh,menuOpen:Ph};function Rh({brand:s,links:i=[],trailing:l,compact:c=!1,underline:p=!1,className:h=""}){const[g,x]=d.useState(!1);return f.jsxs("nav",{className:`${Je.nav} ${c?Je.compact:Je.desktop} ${h}`,"aria-label":"Primary",children:[f.jsxs("div",{className:Je.row,children:[f.jsx("div",{className:Je.brand,children:s}),c?f.jsx("button",{type:"button",className:Je.toggle,"aria-expanded":g,"aria-controls":"navbar-menu",onClick:()=>x(k=>!k),children:g?"Close":"Menu"}):f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:Je.links,children:i.map(k=>f.jsx("li",{className:Je.linkItem,children:f.jsxs("a",{className:Je.link,href:k.href,"aria-current":k.current?"page":void 0,children:[k.label,p&&f.jsx(Pd,{active:!!k.current,motion:"nav-bar"})]})},k.href))}),l&&f.jsx("div",{className:Je.trailing,children:l})]})]}),c&&f.jsxs("div",{id:"navbar-menu",className:`${Je.menu} ${g?Je.menuOpen:""}`,children:[f.jsx("ul",{className:Je.links,children:i.map(k=>f.jsx("li",{className:Je.linkItem,children:f.jsx("a",{className:Je.link,href:k.href,"aria-current":k.current?"page":void 0,children:k.label})},k.href))}),l&&f.jsx("div",{className:Je.trailing,children:l})]})]})}const Th="_slider_18xic_30",$h="_track_18xic_48",Dh="_fill_18xic_59",Hh="_thumb_18xic_77",Vh="_dragging_18xic_128",Oh="_moving_18xic_138",xr={slider:Th,track:$h,fill:Dh,thumb:Hh,dragging:Vh,moving:Oh};function Ih({value:s=.5,onChange:i,min:l=0,max:c=1,step:p=.01,bigStep:h=.05,label:g,disabled:x=!1,sound:k=!0,className:z=""}){const C=xo("slide",k),E=d.useRef(null),j=d.useRef(null),[F,U]=d.useState(!1),[H,Q]=d.useState(!1),ee=d.useRef(null),oe=d.useCallback(D=>Math.max(l,Math.min(c,D)),[l,c]),ne=(oe(s)-l)/(c-l||1),Y=ne*100,ce=()=>parseFloat(getComputedStyle(E.current).getPropertyValue("--sc-size-slider-thumb"))||0,O=d.useCallback(D=>{const T=E.current;if(!T)return s;const we=At(T),me=ce(),pe=we.width-me,B=D/(T.currentCSSZoom||1),re=pe<=0?0:(B-we.left-me/2)/pe;return oe(l+re*(c-l))},[oe,l,c,s]),W=()=>{const D=E.current,T=j.current;D&&T&&(ee.current=ni(T,At(D)))},he=()=>{var D,T;(D=j.current)==null||D.getAnimations().forEach(we=>we.cancel()),(T=E.current)==null||T.removeAttribute("data-driven")};d.useLayoutEffect(()=>{const D=ee.current;ee.current=null;const T=E.current,we=j.current;if(!D||!T||!we||Zn())return;const me=Ln(we,"slider");if(!In(me))return;const pe=ce(),B=(At(T).width-pe)*ne;if(Math.abs(D.l-B)<.5)return;T.setAttribute("data-driven","");const re=_r(me,{l:D.l-B,r:D.r-B},{l:0,r:pe},pe);wr(we,re,me.travelDur,"linear",{onDone:()=>T.removeAttribute("data-driven")})},[ne]),d.useEffect(()=>he,[]);const ue=D=>{if(x)return;D.currentTarget.setPointerCapture(D.pointerId),U(!0);const T=O(D.clientX);T!==oe(s)&&W(),i==null||i(T)},le=D=>{x||!F||(H||(he(),Q(!0)),i==null||i(O(D.clientX)))},ie=()=>{U(!1),Q(!1)},I=D=>{if(x)return;let T;switch(D.key){case"ArrowRight":case"ArrowUp":T=s+(D.shiftKey?h:p);break;case"ArrowLeft":case"ArrowDown":T=s-(D.shiftKey?h:p);break;case"Home":T=l;break;case"End":T=c;break;default:return}D.preventDefault(),oe(T)!==oe(s)&&(W(),C()),i==null||i(oe(T))};return f.jsx("div",{className:`${xr.slider} ${z}`,role:"slider",tabIndex:x?-1:0,"aria-valuemin":Math.round(l*100),"aria-valuemax":Math.round(c*100),"aria-valuenow":Math.round(Y),"aria-label":g,"aria-disabled":x||void 0,onPointerDown:ue,onPointerMove:le,onPointerUp:ie,onPointerCancel:ie,onKeyDown:I,children:f.jsxs("span",{ref:E,className:`${xr.track} ${F?xr.dragging:""} ${H?xr.moving:""}`,style:{"--value":ne},"aria-hidden":"true",children:[f.jsx("span",{className:xr.fill}),f.jsx("span",{ref:j,className:xr.thumb})]})})}const Zh="_field_iylkk_31",Bh="_label_iylkk_40",Uh="_description_iylkk_49",Wh="_helper_iylkk_50",Qh="_box_iylkk_60",Kh="_input_iylkk_74",Gh="_icon_iylkk_96",qh="_trailing_iylkk_97",Yh="_prefix_iylkk_104",Jh="_suffix_iylkk_105",Xh="_clear_iylkk_128",em="_helperError_iylkk_169",tm="_errored_iylkk_175",nm="_disabled_iylkk_188",it={field:Zh,label:Bh,description:Uh,helper:Wh,box:Qh,input:Kh,icon:Gh,trailing:qh,prefix:Yh,suffix:Jh,clear:Xh,helperError:em,errored:tm,disabled:nm},sd=s=>s&&!d.isValidElement(s)&&typeof s!="string"?f.jsx(Is,{glyph:s,weight:"bold"}):s;function rm({label:s,description:i,helper:l,error:c,disabled:p=!1,type:h="text",value:g,onChange:x,placeholder:k,icon:z,prefix:C,suffix:E,trailing:j,clearable:F=!1,onClear:U,className:H="",...Q}){const ee=d.useId(),oe=`${ee}-description`,ne=`${ee}-helper`,Y=d.useRef(null),ce=!!c,O=[i&&oe,(c||l)&&ne].filter(Boolean).join(" ")||void 0,W=g!==void 0?String(g).length>0:void 0,he=()=>{const ue=Y.current;U?U():ue&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(ue,""),ue.dispatchEvent(new Event("input",{bubbles:!0}))),ue==null||ue.focus()};return f.jsxs("div",{className:`${it.field} ${p?it.disabled:""} ${ce?it.errored:""} ${H}`,children:[s&&f.jsx("label",{htmlFor:ee,className:it.label,children:s}),i&&f.jsx("span",{id:oe,className:it.description,children:i}),f.jsxs("div",{className:it.box,children:[C&&f.jsx("span",{className:it.prefix,children:C}),z&&f.jsx("span",{className:it.icon,"aria-hidden":"true",children:sd(z)}),f.jsx("input",{ref:Y,id:ee,type:h,className:it.input,value:g,onChange:x,placeholder:k,disabled:p,"aria-invalid":ce||void 0,"aria-describedby":O,...Q}),E&&f.jsx("span",{className:it.suffix,children:E}),F&&!p&&W!==!1&&f.jsx("button",{type:"button",className:it.clear,"aria-label":s?`Clear ${s}`:"Clear",onClick:he,children:f.jsx(Is,{glyph:Q1,weight:"bold"})}),j&&f.jsx("span",{className:it.trailing,children:sd(j)})]}),(c||l)&&f.jsx("span",{id:ne,className:`${it.helper} ${ce?it.helperError:""}`,children:c||l})]})}const om=`/* tokens:
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
`,sm=`/* tokens:
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
`,ad=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,am=`/* tokens:
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
`,lm=`/* tokens:
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
`,im=`/* tokens:
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
`,cm=`/* tokens:
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
`,ld=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,um=`/* tokens:
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
`,dm=`/* tokens:
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
`,pm="_app_drnf6_6",fm="_bar_drnf6_18",hm="_brand_drnf6_27",mm="_meta_drnf6_34",gm="_readout_drnf6_35",vm="_values_drnf6_36",xm="_spacer_drnf6_42",ym="_stages_drnf6_46",wm="_stageWrap_drnf6_54",bm="_activeStage_drnf6_61",km="_stageSelect_drnf6_65",Lm="_stageLabel_drnf6_75",_m="_stage_drnf6_46",Sm="_panel_drnf6_94",Em="_group_drnf6_103",zm="_prop_drnf6_121",Cm="_editor_drnf6_122",jm="_token_drnf6_132",Mm="_changed_drnf6_140",Nm="_tokenHead_drnf6_144",Am="_tokenName_drnf6_150",Fm="_num_drnf6_162",Pm="_mini_drnf6_166",Rm="_curve_drnf6_173",Tm="_sounds_drnf6_187",$m="_sound_drnf6_187",Dm="_shippedSound_drnf6_210",Hm="_reset_drnf6_214",Vm="_notes_drnf6_267",Om="_tabs_drnf6_279",Im="_tab_drnf6_279",Zm="_pin_drnf6_308",Bm="_pick_drnf6_313",Um="_propBlock_drnf6_320",Wm="_easing_drnf6_321",Qm="_springRows_drnf6_322",Km="_propLabel_drnf6_328",Gm="_tokenActions_drnf6_332",qm="_motionTiles_drnf6_347",Ym="_motionTile_drnf6_347",Jm="_layers_drnf6_407",Xm="_layer_drnf6_407",eg="_layerHead_drnf6_420",tg="_layerGrid_drnf6_425",ng="_scope_drnf6_430",rg="_steps_drnf6_439",og="_step_drnf6_439",sg="_stepRole_drnf6_473",R={app:pm,bar:fm,brand:hm,meta:mm,readout:gm,values:vm,spacer:xm,stages:ym,stageWrap:wm,activeStage:bm,stageSelect:km,stageLabel:Lm,stage:_m,panel:Sm,group:Em,prop:zm,editor:Cm,token:jm,changed:Mm,tokenHead:Nm,tokenName:Am,num:Fm,mini:Pm,curve:Rm,sounds:Tm,sound:$m,shippedSound:Dm,reset:Hm,notes:Vm,tabs:Om,tab:Im,pin:Zm,pick:Bm,propBlock:Um,easing:Wm,springRows:Qm,propLabel:Km,tokenActions:Gm,motionTiles:qm,motionTile:Ym,layers:Jm,layer:Xm,layerHead:eg,layerGrid:tg,scope:ng,steps:rg,step:og,stepRole:sg},Kt=["day","week","month"],go=["work","studio","journal"],Mt=(s,{press:i=!0}={})=>{const l=`--sc-motion-${s}`;return{jsTokens:[`${l}-stretch`,`${l}-squash`,...i?[`${l}-press-lean`,`${l}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${l}-stretch`]:"0.45",[`${l}-squash`]:"0",...i?{[`${l}-press-lean`]:"0.83",[`${l}-press-lean-duration`]:"150ms"}:{}},springs:{[`${l}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},Ql={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},id=s=>({light:s(Ql.light),dark:s(Ql.dark)}),cd={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}},ud={none:void 0,search:Z1,mail:O1,location:B1},dd={none:void 0,eye:I1,copy:V1,calendar:$1,clock:H1,caret:D1};let Vl=!1;function ag({p:s,ctx:i}){const l=d.useRef(null);return d.useEffect(()=>{var z;const c=[...((z=l.current)==null?void 0:z.children)||[]],p=i.slow||1,h=s.reduced,g=h==="opacity only"?{opacity:s.opacityFrom,transform:"none",filter:"none"}:{opacity:s.opacityFrom,transform:`translateY(${s.distance}px) scale(${s.scaleFrom}) rotate(${s.rotateFrom}deg)`,filter:`blur(${s.blurFrom}px)`},x={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},k=c.map((C,E)=>C.animate([g,x],{duration:h==="none"?0:s.duration*p,delay:h==="none"?0:(s.delay+E*s.stagger)*p,easing:s.easing,fill:"both"}));return()=>k.forEach(C=>C.cancel())},[s,i.replay,i.slow]),f.jsx("div",{className:R.motionTiles,ref:l,children:Array.from({length:s.count},(c,p)=>f.jsx("span",{className:R.motionTile},p))})}const Ol=s=>s.reduced==="none"?0:s.delay+s.stagger*(s.count-1)+s.duration,Lr={Switch:{css:[om],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(s,i)=>i("checked",!s.checked),render:(s,i,l)=>f.jsx(k1,{checked:s.checked,disabled:s.disabled,glyphs:s.glyphs,label:s.label,sound:!1,onChange:c=>{i("checked",c.target.checked),l()}})},Stepper:{css:[sm,ad],jsTokens:[...Mt("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...Mt("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:Mt("stepper",{press:!1}).seed.springs,scoped:id(s=>({"--sc-shadow-stepper-track":s.recess,"--sc-color-stepper-key":s.keyFill,"--sc-color-stepper-key-shade":s.keyShade,"--sc-shadow-stepper-key":s.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(s,i)=>i("value",s.value+s.step>s.max?s.min:s.value+s.step),render:(s,i,l)=>f.jsx(s0,{value:s.value,min:s.min,max:s.max,step:s.step,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{i("value",c),l()}})},SegmentedControl:{css:[am],...Mt("segmented-control"),seed:{...Mt("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Kt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(s,i)=>i("value",Kt[(Kt.indexOf(s.value)+1)%Kt.length]),render:(s,i,l)=>f.jsx(m0,{label:"Range",value:s.value,size:s.size,disabled:s.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==s.value&&l(),i("value",c)}})},Tooltip:{css:[im],...Mt("tooltip",{press:!1}),shippedSound:null,trigger:"ships silent",props:[{name:"open",type:"boolean",default:!0},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(s,i)=>i("open",!s.open),render:s=>f.jsx("span",{style:{display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:f.jsx(G0,{content:s.content,multiline:s.multiline,open:s.open,children:f.jsx("span",{style:{font:"inherit"},children:"Hover or press Play"})})})},NavBar:{css:[cm,ld],...Mt("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:go,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(s,i)=>i("current",go[(go.indexOf(s.current)+1)%go.length]),render:(s,i)=>f.jsx("div",{onClickCapture:l=>{const c=l.target.closest("a");c&&(l.preventDefault(),i("current",c.textContent.trim().toLowerCase()))},children:f.jsx(Rh,{brand:f.jsx("span",{children:"Shokunin"}),underline:s.underline,links:go.map(l=>({href:`#${l}`,label:l[0].toUpperCase()+l.slice(1),current:l===s.current}))})})},PlusUnderline:{css:[ld],...Mt("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Kt,default:"day"}],play:(s,i)=>i("active",Kt[(Kt.indexOf(s.active)+1)%Kt.length]),render:(s,i)=>f.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Kt.map(l=>f.jsxs("button",{type:"button",role:"tab","aria-selected":l===s.active,onClick:()=>i("active",l),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[l[0].toUpperCase()+l.slice(1),f.jsx(Pd,{active:l===s.active})]},l))})},Slider:{css:[um],jsTokens:Mt("slider",{press:!1}).jsTokens,seed:{overrides:{...Mt("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:Mt("slider",{press:!1}).seed.springs,scoped:id(s=>{const i=s===Ql.light?cd.light:cd.dark;return{"--sc-shadow-slider-track":s.recess,"--sc-color-slider-thumb-rim-top":i.rimTop,"--sc-color-slider-thumb-rim-bottom":i.rimBottom,"--sc-color-slider-thumb-face-top":i.faceTop,"--sc-color-slider-thumb-face-bottom":i.faceBottom,"--sc-shadow-slider-thumb":s.key,"--sc-shadow-slider-thumb-pressed":s.keyPressed}})},shippedSound:"drams-009-01.wav",trigger:"a keyboard step that changes the value; a drag is silent",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(s,i)=>i("value",s.value>=.75?.25:.75),render:(s,i,l)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Vl=!0},onKeyUpCapture:()=>{Vl=!1},children:f.jsx(Ih,{value:s.value,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{const p=Math.round(c*100)/100;Vl&&p!==s.value&&l(),i("value",p)}})})},Input:{css:[dm,ad],shippedSound:null,trigger:"ships silent",props:[{name:"label",type:"text",default:"Email address"},{name:"description",type:"text",default:""},{name:"placeholder",type:"text",default:"you@studio.com"},{name:"value",type:"text",default:"levi@levibahn.com"},{name:"icon",type:"enum",options:Object.keys(ud),default:"mail"},{name:"prefix",type:"text",default:""},{name:"suffix",type:"text",default:""},{name:"trailing",type:"enum",options:Object.keys(dd),default:"none"},{name:"clearable",type:"boolean",default:!0},{name:"helper",type:"text",default:""},{name:"error",type:"text",default:""},{name:"disabled",type:"boolean",default:!1}],play:null,render:(s,i)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 4)"},children:f.jsx(rm,{label:s.label,description:s.description||void 0,placeholder:s.placeholder,value:s.value,icon:ud[s.icon],prefix:s.prefix||void 0,suffix:s.suffix||void 0,trailing:dd[s.trailing],clearable:s.clearable,onClear:()=>i("value",""),helper:s.helper||void 0,error:s.error||void 0,disabled:s.disabled,onChange:l=>i("value",l.target.value)})})},Button:{css:[lm],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(s,i,l)=>f.jsx(Z0,{variant:s.variant,size:s.size,disabled:s.disabled,loading:s.loading,arrow:s.arrow,sound:!1,onClick:()=>l(),children:s.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(s,i,l,c)=>f.jsx(ag,{p:s,ctx:c})}},Rd=s=>{var i;return((i=s==null?void 0:s.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:i[1].split(",").map(Number))||null};function lg(s){var c;const i=Rd(s);if(i){const p=[];for(let h=0;h<=40;h+=1){const g=h/40,x=3*(1-g)**2*g*i[0]+3*(1-g)*g**2*i[2]+g**3,k=3*(1-g)**2*g*i[1]+3*(1-g)*g**2*i[3]+g**3;p.push([x,k])}return p}const l=(c=s==null?void 0:s.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return l?l.map((p,h)=>[h/(l.length-1),p]):[[0,0],[1,1]]}function ig(s){const i=lg(s),l=i.map(g=>g[1]),c=Math.min(0,...l),h=Math.max(1,...l)-c||1;return i.map(([g,x],k)=>`${k?"L":"M"}${g.toFixed(3)} ${(1-(x-c)/h).toFixed(3)}`).join(" ")}const Nt=(s,i=2)=>+(+s).toFixed(i),Il=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function Td(s){Il.fillStyle="#000",Il.fillStyle=s;const i=Il.fillStyle;if(i.startsWith("#"))return{hex:i,a:1};const l=i.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return l?{hex:"#"+[l[1],l[2],l[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:l[4]!==void 0?+l[4]:1}:{hex:"#000000",a:1}}function Zs(s,i){if(i>=1)return s.toUpperCase();const l=parseInt(s.slice(1),16);return`rgb(${l>>16&255} ${l>>8&255} ${l&255} / ${+i.toFixed(3)})`}const cg=s=>String(s).endsWith("ms")?parseFloat(s):parseFloat(s)*1e3;function $d({label:s,value:i,spring:l,presets:c,asRef:p,onChange:h}){const[g,x]=d.useState(l?"spring":"bezier"),k=Rd(i)||[.25,.1,.25,1],z=l||{stiffness:260,damping:22,mass:1},C=j=>{const F=Os(j);h(F.easing,j,F.settleMs)},E=l?Os(l):null;return f.jsxs("div",{className:R.easing,children:[f.jsxs("div",{className:R.editor,children:[f.jsx("svg",{className:R.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:ig(i)})}),f.jsxs("select",{"aria-label":`${s} mode`,value:g,onChange:j=>{x(j.target.value),j.target.value==="spring"?C(z):h(`cubic-bezier(${k.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&f.jsxs("select",{"aria-label":`${s} preset`,value:"",onChange:j=>{const F=c.find(U=>U.name===j.target.value);F&&(x("bezier"),h(p?`var(${F.name})`:F.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),c.map(j=>f.jsx("option",{value:j.name,children:j.name.replace("--sc-p-motion-easing-","")},j.name))]})]}),g==="bezier"?f.jsx("div",{className:R.editor,children:k.map((j,F)=>f.jsx("input",{type:"number","aria-label":`${s} bezier point ${F+1}`,className:R.num,step:"0.01",value:j,onChange:U=>{const H=[...k];H[F]=+U.target.value,h(`cubic-bezier(${H.join(", ")})`,null,null)}},F))}):f.jsxs("div",{className:R.springRows,children:[(()=>{const j=2*Math.PI*Math.sqrt(z.mass/z.stiffness),F=1-z.damping*j/(4*Math.PI*z.mass),U=(H,Q)=>C({...z,stiffness:+((2*Math.PI/H)**2*z.mass).toFixed(1),damping:+(4*Math.PI*(1-Q)*z.mass/H).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:R.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${s} spring duration`,min:50,max:2e3,step:10,value:Math.round(j*1e3),onChange:H=>U(+H.target.value/1e3,F)}),f.jsxs("span",{className:R.readout,children:[Math.round(j*1e3),"ms"]})]}),f.jsxs("label",{className:R.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${s} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+F.toFixed(2)),onChange:H=>U(j,+H.target.value)}),f.jsx("span",{className:R.readout,children:F.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([j,F,U,H])=>f.jsxs("label",{className:R.mini,children:[j,f.jsx("input",{type:"range",min:F,max:U,step:H,value:z[j],onChange:Q=>C({...z,[j]:+Q.target.value})}),f.jsx("span",{className:R.readout,children:z[j]})]},j)),E&&f.jsxs("span",{className:R.readout,children:["settles ",E.settleMs,"ms · overshoot ",Math.round(E.overshoot*100),"%"]})]})]})}function ug(s){const i=[];let l=0,c="";for(const p of s||"")p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(c.trim()),c=""):c+=p;return c.trim()&&i.push(c.trim()),i.filter(p=>p&&p!=="none").map(p=>{var j;const h=/\binset\b/.test(p),g=((j=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:j[0])||"rgb(0 0 0 / 0.2)",x=p.replace(g,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(F=>parseFloat(F)||0),[k=0,z=0,C=0,E=0]=x;return{inset:h,x:k,y:z,blur:C,spread:E,color:g}})}const dg=s=>s.map(i=>`${i.inset?"inset ":""}${Nt(i.x)}px ${Nt(i.y)}px ${Nt(i.blur)}px ${Nt(i.spread)}px ${i.color}`).join(", ");function pg({name:s,value:i,onSet:l}){const c=ug(i),p=(h,g)=>l(dg(c.map((x,k)=>k===h?{...x,...g}:x)));return f.jsx("div",{className:R.layers,children:c.map((h,g)=>{const x=Td(h.color),k=h.inset?"inner edge":(h.x<0||h.y<0)&&x.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:R.layer,children:[f.jsxs("span",{className:R.layerHead,children:["layer ",g+1," · ",k]}),f.jsx("div",{className:R.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([z,C,E,j])=>f.jsxs("label",{className:R.mini,children:[z,f.jsx("input",{type:"number",className:R.num,"aria-label":`${s} layer ${g+1} ${z}`,min:C,max:E,step:j,value:Nt(h[z]),onChange:F=>p(g,{[z]:+F.target.value})})]},z))}),f.jsxs("div",{className:R.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} layer ${g+1} colour`,value:x.hex,onChange:z=>p(g,{color:Zs(z.target.value,x.a)})}),f.jsxs("label",{className:R.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${s} layer ${g+1} opacity`,min:"0",max:"1",step:"0.01",value:x.a,onChange:z=>p(g,{color:Zs(x.hex,+z.target.value)})}),f.jsx("span",{className:R.readout,children:Nt(x.a)})]})]})]},g)})})}const fg=[11,12,13,14,16,20].map((s,i)=>[s,["chrome","ui","caption","dense","body","lead"][i],`--sc-p-font-size-${s}`]),hg=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],mg=s=>/^--sc-font-.*-size$/.test(s)?fg:/^--sc-size-.*icon/.test(s)?hg:null;function gg({name:s,kind:i,shipped:l,value:c,override:p,scope:h,adj:g,spring:x,pin:k,refs:z,easingPresets:C,onSet:E,onAdj:j,onSpring:F,onReset:U,onPin:H,restOf:Q,onCopyRest:ee}){const oe=p!==void 0,[ne,Y]=d.useState(!!k);let ce=null;if(i==="color"){const O=Td(c);ce=f.jsxs("div",{className:R.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} colour`,value:O.hex,onChange:W=>E(Zs(W.target.value,O.a))}),f.jsx("input",{type:"range","aria-label":`${s} alpha`,min:"0",max:"1",step:"0.01",value:O.a,onChange:W=>E(Zs(O.hex,+W.target.value))})]})}else if(i==="length"||i==="number"){const O=parseFloat(c)||0,W=Math.abs(parseFloat(l)||1),he=i==="length"?Math.max(64,W*4):Math.max(2,W*2),ue=i==="length"?"px":"",le=i==="length"?.5:.005;ce=f.jsxs("div",{className:R.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:he,step:le,value:O,onChange:I=>E(`${I.target.value}${ue}`)}),f.jsx("input",{type:"number","aria-label":`${s} value`,className:R.num,step:le,value:Nt(O,3),onChange:I=>E(`${I.target.value}${ue}`)})]});const ie=mg(s);ie&&(ce=f.jsxs(f.Fragment,{children:[ce,f.jsx("div",{className:R.steps,role:"group","aria-label":`${s} scale`,children:ie.map(([I,D,T])=>f.jsxs("button",{type:"button",className:R.step,"aria-pressed":O===I,onClick:()=>E(`var(${T})`),children:[I,D&&f.jsx("span",{className:R.stepRole,children:D})]},I))})]}))}else if(i==="time"){const O=cg(c);ce=f.jsxs("div",{className:R.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:"1200",step:"10",value:O,onChange:W=>E(`${W.target.value}ms`)}),f.jsxs("span",{className:R.readout,children:[Math.round(O),"ms"]})]})}else i==="easing"?ce=f.jsx($d,{label:s,value:c,spring:x,presets:C,asRef:!0,onChange:(O,W,he)=>{E(O),F(W,he)}}):i==="shadow"?ce=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:R.editor,children:[f.jsxs("label",{className:R.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(g==null?void 0:g.scale)??1,onChange:O=>j({...g,scale:+O.target.value})})]}),f.jsxs("label",{className:R.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(g==null?void 0:g.strength)??1,onChange:O=>j({...g,strength:+O.target.value})})]})]}),f.jsx(pg,{name:s,value:c,onSet:E})]}):ce=f.jsx("input",{type:"text","aria-label":s,value:c,onChange:O=>E(O.target.value)});return f.jsxs("div",{className:`${R.token} ${oe?R.changed:""}`,children:[f.jsxs("div",{className:R.tokenHead,children:[f.jsxs("code",{className:R.tokenName,children:[s.replace("--sc-",""),oe&&h&&f.jsx("span",{className:R.scope,children:h==="all"?"both modes":`${h} only`})]}),f.jsxs("span",{className:R.tokenActions,children:[Q&&f.jsx("button",{type:"button",className:R.reset,title:`Set to this concept's ${Q.replace("--sc-","")} value`,onClick:ee,children:"copy rest"}),f.jsx("button",{type:"button",className:R.reset,"aria-pressed":ne,onClick:()=>Y(O=>!O),children:"note"}),oe&&f.jsx("button",{type:"button",className:R.reset,onClick:U,"aria-label":`Reset ${s}`,children:"reset"})]})]}),ce,(z==null?void 0:z.length)>0&&i!=="easing"&&f.jsxs("select",{"aria-label":`${s} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:O=>O.target.value&&E(`var(${O.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),z.map(O=>f.jsx("option",{value:O,children:O.replace("--sc-p-","")},O))]}),ne&&f.jsx("input",{type:"text",className:R.pin,"aria-label":`Note on ${s}`,placeholder:"Note on this value…",value:k||"",onChange:O=>H(O.target.value)}),f.jsxs("div",{className:R.values,children:[f.jsxs("span",{title:l,children:["shipped ",l]}),oe&&f.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function vg({def:s,value:i,spring:l,easingPresets:c,onChange:p,onSpring:h}){const g=`prop-${s.name}`;let x;if(s.type==="boolean")x=f.jsx("input",{id:g,type:"checkbox",checked:!!i,onChange:k=>p(k.target.checked)});else if(s.type==="enum")x=f.jsx("select",{id:g,value:i,onChange:k=>p(k.target.value),children:s.options.map(k=>f.jsx("option",{children:k},k))});else if(s.type==="number")x=f.jsx("input",{id:g,type:"number",className:R.num,min:s.min,max:s.max,value:i,onChange:k=>p(+k.target.value)});else if(s.type==="range")x=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:g,type:"range",min:s.min,max:s.max,step:s.step,value:i,onChange:k=>p(+k.target.value)}),f.jsxs("span",{className:R.readout,children:[i,s.unit||""]})]});else{if(s.type==="easing")return f.jsxs("div",{className:R.propBlock,children:[f.jsx("span",{className:R.propLabel,children:f.jsx("code",{children:s.name})}),f.jsx($d,{label:s.name,value:i,spring:l,presets:c,onChange:(k,z,C)=>h(k,z,C)})]});x=f.jsx("input",{id:g,type:"text",value:i,onChange:k=>p(k.target.value)})}return f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:g,children:f.jsx("code",{children:s.name})}),x]})}const wn=!0,xg="./sounds/",yg=3,wg=s=>`sc-tune:v2:${s}`,bg=["all","light","dark"],Dd=s=>/^--sc-(color|shadow)-/.test(s),Rs=(s,i)=>Dd(s)?i:"all",Bs=()=>({all:{},light:{},dark:{}}),Ts=(s,i)=>({...s.overrides.all,...s.overrides[i]}),Zl=["A","B","C","D"],Kl=s=>[...new Set(s)],Vs=Kl(e1.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),kg={color:Vs.filter(s=>s.startsWith("--sc-p-color-")&&!s.endsWith("-rgb")),length:Vs.filter(s=>/^--sc-p-(space|size|radius|border-width)-/.test(s)),time:Vs.filter(s=>s.startsWith("--sc-p-motion-duration-"))},Lg=Vs.filter(s=>s.startsWith("--sc-p-motion-easing-"));function _g(s){var p;const i=s.join(`
`),l=Kl(((p=i.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(h=>h.slice(4)))||[]),c=Kl(i.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:l.sort(),derived:c}}const pd=s=>{var i;return((i=s.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:i[1])||"other"};function $s(s){return s?/^(cubic-bezier|ease|linear|steps)/.test(s)?"easing":/^-?[\d.]+m?s$/.test(s)?"time":/px/.test(s)&&/(rgb|#|hsl|color\(|inset)/.test(s)||/(rgb|#|hsl|color\()/.test(s)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(s.trim())?"shadow":CSS.supports("color",s)?"color":/^-?[\d.]+px$/.test(s)?"length":/^-?[\d.]+$/.test(s)?"number":"text":"text"}const Gl=(s,i)=>{if(!s)return{};const l=getComputedStyle(s);return Object.fromEntries(i.map(c=>[c,l.getPropertyValue(c).trim()]))},Sg=(s,i)=>{if(!s)return{};const l=document.createElement("span");l.style.cssText="position:absolute;visibility:hidden;height:0;",s.appendChild(l);const c=Object.fromEntries(i.map(p=>(l.style.width=`var(${p})`,[p,getComputedStyle(l).width])));return l.remove(),c},fd=(s,i)=>{if(!s)return{};const l=document.createElement("div");l.style.display="none";for(const[p,h]of Object.entries(i))l.style.setProperty(p,h);s.appendChild(l);const c=Gl(l,Object.keys(i));return l.remove(),c};function Eg(s,i,l){return s.replace(/(-?[\d.]+)px/g,(c,p)=>`${Nt(p*i)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,h)=>`rgba(${p}, ${Nt(Math.min(1,h*l),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${Nt(Math.min(1,p*l),3)})`)}let bn=null;const hd=new Map;async function Ds(s,i,l){if(!s)return;bn=bn||new(window.AudioContext||window.webkitAudioContext),bn.state==="suspended"&&await bn.resume();let c=hd.get(s);if(!c){const g=await(await fetch(xg+s)).arrayBuffer();c=await bn.decodeAudioData(g),hd.set(s,c)}const p=bn.createBufferSource(),h=bn.createGain();h.gain.value=i,p.buffer=c,p.playbackRate.value=l,p.connect(h).connect(bn.destination),p.start()}const zg=["rest","hover","focus","active"],Cg={hover:":hover",focus:":focus-visible",active:":active"};function jg(s){var p;const i=Cg[s];if(!i)return"";const l=[],c=(h,g)=>{for(const x of h){if(x.cssRules&&x.media){c(x.cssRules,z=>g(`@media ${x.media.mediaText}{${z}}`));continue}if(!x.selectorText||!x.selectorText.includes(i))continue;const k=x.selectorText.split(",").map(z=>z.trim()).filter(z=>z.includes(i)).map(z=>`[data-force='${s}'] ${z.split(i).join("")}`).join(", ");l.push(g(`${k}{${x.style.cssText}}`))}};for(const h of document.styleSheets)if(((p=h.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(h.cssRules,g=>g)}catch{}return l.join(`
`)}const ri=s=>Object.fromEntries(s.props.map(i=>[i.name,i.default]));function Hd(s,i){var l,c,p;for(const[h,g]of Object.entries(((l=s.seed)==null?void 0:l.overrides)||{}))Object.values(i.overrides).some(x=>h in x)||(i.overrides.all[h]=g);for(const[h,g]of Object.entries(((c=s.seed)==null?void 0:c.scoped)||{}))for(const[x,k]of Object.entries(g))!(x in i.overrides[h])&&!(x in i.overrides.all)&&(i.overrides[h][x]=k);for(const[h,g]of Object.entries(((p=s.seed)==null?void 0:p.springs)||{})){if(i.springs[h]||Object.values(i.overrides).some(k=>h in k))continue;const x=Os(g);i.springs[h]=g,i.overrides.all[h]=x.easing,i.overrides.all[h.replace(/-easing$/,"-duration")]=`${x.settleMs}ms`}return i}const Vd=(s,i)=>Hd(s,{id:i,overrides:Bs(),shadowAdj:Bs(),springs:{},pins:{},notes:"",props:ri(s),sound:{file:s.shippedSound,volume:.7,rate:1}});function Mg(s){const i=Lr[s];return{component:s,notes:"",active:"A",concepts:[Vd(i,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:i.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function md(s){var i;try{const l=JSON.parse(localStorage.getItem(wg(s))||"null");if((l==null?void 0:l.component)===s&&Array.isArray(l.concepts)){for(const c of l.concepts){if(c.props={...ri(Lr[s]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=Bs();for(const[g,x]of Object.entries(c.overrides))p[Dd(g)?"dark":"all"][g]=x;const h=Bs();for(const[g,x]of Object.entries(c.shadowAdj||{}))h.dark[g]=x;c.overrides=p,c.shadowAdj=h}if(s==="Button")for(const p of Object.values(c.overrides))for(const h of Object.keys(p)){if(!h.startsWith("--sc-font-text-label-chrome-"))continue;const g=h.replace("label-chrome-","label-button-lg-");g in p||(p[g]=p[h]),delete p[h]}}((i=l.view)==null?void 0:i.ground)==="#E3DFD8"&&(l.view.ground="--sc-color-surface-page");for(const c of l.concepts)Hd(Lr[s],c);return l}}catch{}return Mg(s)}function Ng(){const s=new URLSearchParams(location.search).get("c"),[i,l]=d.useState(Lr[s]?s:"Switch"),[c,p]=d.useState(()=>md(i)),[h,g]=d.useState(null),[x,k]=d.useState([]),[z,C]=d.useState(!0),[E,j]=d.useState({}),[F,U]=d.useState({}),[H,Q]=d.useState({}),[ee,oe]=d.useState(0),[ne,Y]=d.useState(!1),[ce,O]=d.useState(!1),W=d.useRef(null),he=d.useRef({}),ue=d.useRef(null),le=Lr[i],ie=le.kind==="motion",{tokens:I,derived:D}=d.useMemo(()=>{const w=_g(le.css);return{...w,tokens:[...new Set([...w.tokens,...le.jsTokens||[]])].sort()}},[le]),T=c.concepts.find(w=>w.id===c.active)||c.concepts[0],we=d.useMemo(()=>{const w=getComputedStyle(document.documentElement);return Lg.map(M=>({name:M,value:w.getPropertyValue(M).trim()}))},[]);d.useEffect(()=>{fetch("./spec.json").then(w=>w.json()).then(w=>{l(w.component),p(w.state),g({recorded:w.recorded})})},[]),d.useEffect(()=>{},[]);const me=w=>{l(w),p(md(w)),history.replaceState(null,"",`?c=${w}`)};d.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const pe=c.view.force||"rest";d.useEffect(()=>{let w=document.getElementById("sc-tune-force");w||(w=document.createElement("style"),w.id="sc-tune-force",document.head.appendChild(w)),w.textContent=jg(pe)},[pe]),d.useLayoutEffect(()=>{var N;j(Gl(W.current,I));const w=Gl(W.current,I);he.current[c.view.theme]=w,U({...w,...fd(W.current,Ts(T,c.view.theme))});const M=(N=ue.current)==null?void 0:N.querySelector("[class]");Q(Sg(M?M.closest("label")||M:null,D))},[I,D,T.overrides,c.view.theme,T.props]),d.useEffect(()=>{},[c,i]);const B=d.useCallback(w=>p(M=>M),[]),re=d.useCallback((w,M)=>p(N=>({...N,concepts:N.concepts.map(ye=>ye.id===w?M(ye):ye)})),[]),K=d.useCallback(w=>(M,N)=>re(w,ye=>({...ye,props:{...ye.props,[M]:N}})),[re]),b=w=>B(M=>({...M,concepts:M.concepts.map(N=>N.id===M.active?w(N):N)})),A=c.view.theme,fe=(w,M,N)=>{const ye=Rs(M,A),ge={...w,[ye]:{...w[ye]}};return N===void 0?delete ge[ye][M]:ge[ye][M]=N,ge},ve=(w,M)=>b(N=>({...N,overrides:fe(N.overrides,w,M)})),be=w=>b(M=>{const N={...M.springs};return delete N[w],{...M,overrides:fe(M.overrides,w,void 0),shadowAdj:fe(M.shadowAdj,w,void 0),springs:N}}),ke=(w,M,N)=>b(ye=>{const ge={...ye.springs};let _e=ye.overrides;if(M){ge[w]=M;const tt=w.replace(/-easing$/,"-duration");tt!==w&&I.includes(tt)&&(_e=fe(_e,tt,`${N}ms`))}else delete ge[w];return{...ye,springs:ge,overrides:_e}}),je=(w,M)=>b(N=>({...N,shadowAdj:fe(N.shadowAdj,w,M),overrides:fe(N.overrides,w,Eg(E[w],M.scale??1,M.strength??1))})),Ee=(w,M)=>b(N=>({...N,pins:{...N.pins,[w]:M}})),ze=(w,M)=>b(N=>({...N,sound:{...N.sound,[w]:M}})),Ve=(w,M)=>p(N=>({...N,view:{...N.view,[w]:M}})),Gt=le.props.some(w=>w.name==="disabled"),yo=w=>p(M=>({...M,view:{...M.view,force:w==="disabled"?"rest":w},concepts:Gt?M.concepts.map(N=>({...N,props:{...N.props,disabled:w==="disabled"}})):M.concepts})),_n=w=>B(M=>{const N=Zl.find(_e=>!M.concepts.some(tt=>tt.id===_e));if(!N)return M;const ye=M.concepts.find(_e=>_e.id===M.active),ge=w?{...structuredClone(ye),id:N,notes:""}:Vd(le,N);return{...M,concepts:[...M.concepts,ge],active:N}}),Sr=w=>B(M=>{if(M.concepts.length<2)return M;const N=M.concepts.filter(ye=>ye.id!==w);return{...M,concepts:N,active:N[0].id,pick:M.pick.id===w?{id:null,reason:M.pick.reason}:M.pick}}),wo=()=>p(w=>{const M=!w.view.blind,N=M?[...w.concepts.map(ye=>ye.id)].sort(()=>Math.random()-.5):null;return{...w,view:{...w.view,blind:M,order:N,compare:M?!0:w.view.compare}}}),Un=d.useCallback(()=>{oe(M=>M+1),le.play&&c.concepts.forEach(M=>le.play(M.props,K(M.id)));const w=c.concepts.find(M=>M.id===c.active);w!=null&&w.sound.file&&Ds(w.sound.file,w.sound.volume,w.sound.rate)},[le,c.concepts,c.active,K]),Wn=ie?Math.max(1200,Ol(T.props)*c.view.slow+900):1400*c.view.slow;d.useEffect(()=>{if(!ne)return;const w=setInterval(Un,Wn);return()=>clearInterval(w)},[ne,Un,Wn]);const bo=I.filter(w=>$s(E[w])==="time"),Qn=w=>{const M=c.view.ground,N=M.startsWith("--")?{background:`var(${M})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:M,"--sc-color-surface-page":M},ye={zoom:c.view.zoom,...N,...w};if(c.view.slow!==1)for(const ge of bo)ye[ge]=`calc(${w[ge]??E[ge]} * ${c.view.slow})`;return ye},qt=d.useCallback(()=>{const w=W.current,M=N=>N.id;return{tool:"sc-tune",version:yg,component:i,kind:le.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(N=>{const ye=fd(w,Ts(N,c.view.theme));return{id:M(N),notes:N.notes,props:N.props,sound:{...N.sound,shipped:le.shippedSound,trigger:le.trigger},tokens:bg.flatMap(ge=>Object.keys(N.overrides[ge]).map(_e=>{var _o;const tt=ge==="all"?E:he.current[ge]||{},Ht=N.overrides[ge][_e],Lo=ge==="all"||ge===c.view.theme;return{name:_e,mode:ge,category:pd(_e),kind:$s(tt[_e]||E[_e]),shipped:tt[_e]??null,tuned:Lo?ye[_e]??Ht:Ht,override:Ht,...(_o=N.shadowAdj[ge])!=null&&_o[_e]?{shadowAdjust:N.shadowAdj[ge][_e]}:{},...N.springs[_e]?{spring:{...N.springs[_e],...gd(N.springs[_e])}}:{}}})),pins:Object.fromEntries(Object.entries(N.pins).filter(([,ge])=>ge)),...ie?{motion:{lastFrameMs:Ol(N.props),...N.springs["prop:easing"]?{spring:{...N.springs["prop:easing"],...gd(N.springs["prop:easing"])}}:{}}}:{}}}),derived:H,tokenCount:I.length,state:c}},[i,le,ie,c,E,H,I]);d.useEffect(()=>{window.scTune={export:qt,component:i}},[qt,i]);const Yt=d.useMemo(()=>{var M;const w={};for(const N of I)(w[M=pd(N)]||(w[M]=[])).push(N);return w},[I]),Er=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(w=>c.concepts.find(M=>M.id===w)).filter(Boolean):c.concepts:[T],zr={replay:ee,slow:c.view.slow};x.filter(w=>!z||w.seconds<=1);const Cr=Ts(T,c.view.theme),ko=Object.keys(Cr).length;return f.jsxs("div",{className:R.app,children:[f.jsxs("header",{className:R.bar,children:[f.jsx("span",{className:R.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:i,disabled:wn,onChange:w=>me(w.target.value),children:Object.keys(Lr).map(w=>f.jsx("option",{children:w},w))}),f.jsxs("span",{className:R.meta,children:[ie?"choreography":`${I.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),h&&f.jsxs("span",{className:R.meta,children:["snapshot · recorded ",h.recorded]}),f.jsx("span",{className:R.spacer}),f.jsx("button",{type:"button",onClick:Un,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":ne,onClick:()=>Y(w=>!w),children:ne?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:w=>Ve("slow",+w.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>Ve("compare",!c.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:wo,children:c.view.blind?"Reveal":"Blind"}),!wn]}),f.jsx("main",{className:R.stages,children:f.jsxs(Xf,{enabled:!1,children:[!c.view.blind&&f.jsxs("section",{className:R.stageWrap,"aria-label":ie?"Default":"Shipped",children:[f.jsx("h2",{className:R.stageLabel,children:ie?"Default":"Shipped"}),f.jsx("div",{className:R.stage,style:Qn({}),ref:W,inert:"","data-force":pe,children:le.render(ie?ri(le):T.props,()=>{},()=>{},zr)})]}),c.view.blind&&f.jsx("div",{ref:W,hidden:!0}),Er.map((w,M)=>{const N=c.view.blind?`Concept ${M+1}`:`${w.id}${w.id===c.active?" · editing":""}${c.pick.id===w.id?" · picked":""}`;return f.jsxs("section",{className:`${R.stageWrap} ${w.id===c.active&&!c.view.blind?R.activeStage:""}`,"aria-label":N,children:[f.jsxs("h2",{className:R.stageLabel,children:[c.view.compare&&!c.view.blind?f.jsx("button",{type:"button",className:R.stageSelect,onClick:()=>p(ye=>({...ye,active:w.id})),children:N}):N,ie&&f.jsxs("span",{className:R.readout,children:[" · last frame ",Ol(w.props),"ms"]})]}),f.jsx("div",{className:R.stage,style:Qn(Ts(w,A)),ref:w.id===c.active?ue:void 0,"data-force":pe,children:le.render(w.props,K(w.id),()=>Ds(w.sound.file,w.sound.volume,w.sound.rate),zr)})]},w.id)})]})}),f.jsxs("aside",{className:R.panel,children:[f.jsxs("fieldset",{className:R.group,disabled:wn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:R.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:w=>p(M=>({...M,notes:w.target.value}))})]}),f.jsxs("fieldset",{className:R.group,disabled:wn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:R.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(w=>f.jsx("button",{type:"button",role:"tab","aria-selected":w.id===c.active,className:R.tab,onClick:()=>p(M=>({...M,active:w.id})),children:w.id},w.id)),f.jsx("button",{type:"button",className:R.tab,disabled:c.concepts.length>=Zl.length,onClick:()=>_n(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:R.tab,disabled:c.concepts.length>=Zl.length,onClick:()=>_n(!1),children:"new"}),f.jsxs("button",{type:"button",className:R.tab,disabled:c.concepts.length<2,onClick:()=>Sr(T.id),children:["remove ",T.id]})]}),f.jsx("textarea",{className:R.notes,"aria-label":`Notes on concept ${T.id}`,placeholder:`What concept ${T.id} is trying…`,value:T.notes,onChange:w=>b(M=>({...M,notes:w.target.value}))}),c.concepts.length>1&&f.jsxs("div",{className:R.pick,children:[f.jsx("span",{className:R.propLabel,children:f.jsx("code",{children:"pick"})}),c.concepts.map(w=>f.jsxs("label",{className:R.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===w.id,onChange:()=>p(M=>({...M,pick:{...M.pick,id:w.id}}))})," ",w.id]},w.id)),f.jsx("textarea",{className:R.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:w=>p(M=>({...M,pick:{...M.pick,reason:w.target.value}}))})]})]}),f.jsxs("fieldset",{className:R.group,disabled:wn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:w=>Ve("theme",w.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:w=>Ve("zoom",+w.target.value)}),f.jsxs("span",{className:R.readout,children:[c.view.zoom,"×"]})]}),f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:c.view.ground,onChange:w=>Ve("ground",w.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(w=>f.jsx("option",{value:w,children:w.replace("--sc-color-","")},w))})]})]}),f.jsxs("fieldset",{className:R.group,disabled:wn,children:[f.jsxs("legend",{children:[ie?"Motion":"Props"," · concept ",T.id]}),(()=>{const w=le.props.map(M=>f.jsx(vg,{def:M,value:T.props[M.name],spring:T.springs[`prop:${M.name}`],easingPresets:we,onChange:N=>K(T.id)(M.name,N),onSpring:(N,ye,ge)=>b(_e=>{const tt={..._e.springs},Ht={..._e.props,[M.name]:N};return ye?(tt[`prop:${M.name}`]=ye,M.durationProp&&(Ht[M.durationProp]=ge)):delete tt[`prop:${M.name}`],{..._e,springs:tt,props:Ht}})},M.name));return ie||w.splice(Math.min(3,w.length),0,f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Gt&&T.props.disabled?"disabled":pe,onChange:M=>yo(M.target.value),children:[zg.map(M=>f.jsx("option",{value:M,children:M==="rest"?"default":M},M)),Gt&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),w})()]}),f.jsxs("fieldset",{className:R.group,disabled:wn,children:[f.jsxs("legend",{children:["Sound · ",le.trigger]}),f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:T.sound.volume,onChange:w=>ze("volume",+w.target.value)}),f.jsx("span",{className:R.readout,children:T.sound.volume})]}),f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:T.sound.rate,onChange:w=>ze("rate",+w.target.value)}),f.jsxs("span",{className:R.readout,children:[T.sound.rate,"×"]})]}),f.jsxs("div",{className:R.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:z,onChange:w=>C(w.target.checked)})]}),f.jsxs("ul",{className:R.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:R.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!T.sound.file,onChange:()=>ze("file",null)})," silent"]})}),(T.sound.file?[{file:T.sound.file,seconds:""}]:[]).map(w=>f.jsxs("li",{className:`${R.sound} ${w.file===le.shippedSound?R.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:T.sound.file===w.file,onChange:()=>{ze("file",w.file),Ds(w.file,T.sound.volume,T.sound.rate)}}),w.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:R.readout,children:[w.seconds&&`${w.seconds}s`,w.file===le.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${w.file}`,onClick:()=>Ds(w.file,T.sound.volume,T.sound.rate),children:"play"})]},w.file))]})]}),!ie&&f.jsxs("p",{className:R.meta,children:[ko," of ",I.length," tokens tuned in concept ",T.id,", ",A," mode. Colour and shadow edits apply to ",A," only; size, type and motion apply to both modes."]}),Object.entries(Yt).map(([w,M])=>f.jsxs("fieldset",{className:R.group,disabled:wn,children:[f.jsxs("legend",{children:[w," · ",M.length]}),M.map(N=>{var ye;return f.jsx(gg,{name:N,kind:$s(E[N]),shipped:E[N],value:F[N]||E[N]||"",override:Cr[N],scope:T.overrides[Rs(N,A)][N]!==void 0?Rs(N,A):T.overrides.all[N]!==void 0?"all":null,adj:(ye=T.shadowAdj[Rs(N,A)])==null?void 0:ye[N],spring:T.springs[N],pin:T.pins[N],refs:kg[$s(E[N])],easingPresets:we,onSet:ge=>ve(N,ge),onAdj:ge=>je(N,ge),onSpring:(ge,_e)=>ke(N,ge,_e),onReset:()=>be(N),restOf:N.endsWith("-hover")&&I.includes(N.slice(0,-6))?N.slice(0,-6):null,onCopyRest:()=>ve(N,F[N.slice(0,-6)]||E[N.slice(0,-6)]),onPin:ge=>Ee(N,ge)},`${T.id}${A}${N}`)})]},w)),D.length>0&&f.jsxs("fieldset",{className:R.group,children:[f.jsx("legend",{children:"derived · read-only"}),D.map(w=>f.jsxs("div",{className:R.values,children:[f.jsx("code",{children:w})," ",H[w]]},w))]})]})]})}function gd(s){const i=Os(s);return{settleMs:i.settleMs,overshoot:Nt(i.overshoot,3),framerMotion:{type:"spring",stiffness:s.stiffness,damping:s.damping,mass:s.mass}}}function Ag(){return new URLSearchParams(location.search).get("c"),f.jsx(Ng,{})}const Bl=document.getElementById("root");Bl.dataset.mounted||(Bl.dataset.mounted="true",Wf.createRoot(Bl).render(f.jsx(Ag,{})));
