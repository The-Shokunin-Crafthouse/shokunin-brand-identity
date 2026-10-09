(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=l(d);fetch(d.href,h)}})();function Zf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rl={exports:{}},mo={},$l={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function Bf(){if(Uu)return we;Uu=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),_=Symbol.iterator;function j(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,N={};function O(b,T,de){this.props=b,this.context=T,this.refs=N,this.updater=de||M}O.prototype.isReactComponent={},O.prototype.setState=function(b,T){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,T,"setState")},O.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function J(){}J.prototype=O.prototype;function Q(b,T,de){this.props=b,this.context=T,this.refs=N,this.updater=de||M}var ee=Q.prototype=new J;ee.constructor=Q,I(ee,O.prototype),ee.isPureReactComponent=!0;var Y=Array.isArray,le=Object.prototype.hasOwnProperty,P={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function pe(b,T,de){var ae,xe={},be=null,je=null;if(T!=null)for(ae in T.ref!==void 0&&(je=T.ref),T.key!==void 0&&(be=""+T.key),T)le.call(T,ae)&&!W.hasOwnProperty(ae)&&(xe[ae]=T[ae]);var ze=arguments.length-2;if(ze===1)xe.children=de;else if(1<ze){for(var Ee=Array(ze),He=0;He<ze;He++)Ee[He]=arguments[He+2];xe.children=Ee}if(b&&b.defaultProps)for(ae in ze=b.defaultProps,ze)xe[ae]===void 0&&(xe[ae]=ze[ae]);return{$$typeof:s,type:b,key:be,ref:je,props:xe,_owner:P.current}}function ge(b,T){return{$$typeof:s,type:b.type,key:T,ref:b.ref,props:b.props,_owner:b._owner}}function ne(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function ue(b){var T={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(de){return T[de]})}var Z=/\/+/g;function R(b,T){return typeof b=="object"&&b!==null&&b.key!=null?ue(""+b.key):T.toString(36)}function $(b,T,de,ae,xe){var be=typeof b;(be==="undefined"||be==="boolean")&&(b=null);var je=!1;if(b===null)je=!0;else switch(be){case"string":case"number":je=!0;break;case"object":switch(b.$$typeof){case s:case i:je=!0}}if(je)return je=b,xe=xe(je),b=ae===""?"."+R(je,0):ae,Y(xe)?(de="",b!=null&&(de=b.replace(Z,"$&/")+"/"),$(xe,T,de,"",function(He){return He})):xe!=null&&(ne(xe)&&(xe=ge(xe,de+(!xe.key||je&&je.key===xe.key?"":(""+xe.key).replace(Z,"$&/")+"/")+b)),T.push(xe)),1;if(je=0,ae=ae===""?".":ae+":",Y(b))for(var ze=0;ze<b.length;ze++){be=b[ze];var Ee=ae+R(be,ze);je+=$(be,T,de,Ee,xe)}else if(Ee=j(b),typeof Ee=="function")for(b=Ee.call(b),ze=0;!(be=b.next()).done;)be=be.value,Ee=ae+R(be,ze++),je+=$(be,T,de,Ee,xe);else if(be==="object")throw T=String(b),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return je}function ve(b,T,de){if(b==null)return b;var ae=[],xe=0;return $(b,ae,"","",function(be){return T.call(de,be,xe++)}),ae}function he(b){if(b._status===-1){var T=b._result;T=T(),T.then(function(de){(b._status===0||b._status===-1)&&(b._status=1,b._result=de)},function(de){(b._status===0||b._status===-1)&&(b._status=2,b._result=de)}),b._status===-1&&(b._status=0,b._result=T)}if(b._status===1)return b._result.default;throw b._result}var fe={current:null},K={transition:null},se={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:K,ReactCurrentOwner:P};function G(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:ve,forEach:function(b,T,de){ve(b,function(){T.apply(this,arguments)},de)},count:function(b){var T=0;return ve(b,function(){T++}),T},toArray:function(b){return ve(b,function(T){return T})||[]},only:function(b){if(!ne(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},we.Component=O,we.Fragment=l,we.Profiler=d,we.PureComponent=Q,we.StrictMode=c,we.Suspense=y,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,we.act=G,we.cloneElement=function(b,T,de){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ae=I({},b.props),xe=b.key,be=b.ref,je=b._owner;if(T!=null){if(T.ref!==void 0&&(be=T.ref,je=P.current),T.key!==void 0&&(xe=""+T.key),b.type&&b.type.defaultProps)var ze=b.type.defaultProps;for(Ee in T)le.call(T,Ee)&&!W.hasOwnProperty(Ee)&&(ae[Ee]=T[Ee]===void 0&&ze!==void 0?ze[Ee]:T[Ee])}var Ee=arguments.length-2;if(Ee===1)ae.children=de;else if(1<Ee){ze=Array(Ee);for(var He=0;He<Ee;He++)ze[He]=arguments[He+2];ae.children=ze}return{$$typeof:s,type:b.type,key:xe,ref:be,props:ae,_owner:je}},we.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:h,_context:b},b.Consumer=b},we.createElement=pe,we.createFactory=function(b){var T=pe.bind(null,b);return T.type=b,T},we.createRef=function(){return{current:null}},we.forwardRef=function(b){return{$$typeof:v,render:b}},we.isValidElement=ne,we.lazy=function(b){return{$$typeof:z,_payload:{_status:-1,_result:b},_init:he}},we.memo=function(b,T){return{$$typeof:L,type:b,compare:T===void 0?null:T}},we.startTransition=function(b){var T=K.transition;K.transition={};try{b()}finally{K.transition=T}},we.unstable_act=G,we.useCallback=function(b,T){return fe.current.useCallback(b,T)},we.useContext=function(b){return fe.current.useContext(b)},we.useDebugValue=function(){},we.useDeferredValue=function(b){return fe.current.useDeferredValue(b)},we.useEffect=function(b,T){return fe.current.useEffect(b,T)},we.useId=function(){return fe.current.useId()},we.useImperativeHandle=function(b,T,de){return fe.current.useImperativeHandle(b,T,de)},we.useInsertionEffect=function(b,T){return fe.current.useInsertionEffect(b,T)},we.useLayoutEffect=function(b,T){return fe.current.useLayoutEffect(b,T)},we.useMemo=function(b,T){return fe.current.useMemo(b,T)},we.useReducer=function(b,T,de){return fe.current.useReducer(b,T,de)},we.useRef=function(b){return fe.current.useRef(b)},we.useState=function(b){return fe.current.useState(b)},we.useSyncExternalStore=function(b,T,de){return fe.current.useSyncExternalStore(b,T,de)},we.useTransition=function(){return fe.current.useTransition()},we.version="18.3.1",we}var Wu;function ei(){return Wu||(Wu=1,$l.exports=Bf()),$l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku;function Uf(){if(Ku)return mo;Ku=1;var s=ei(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(v,y,L){var z,_={},j=null,M=null;L!==void 0&&(j=""+L),y.key!==void 0&&(j=""+y.key),y.ref!==void 0&&(M=y.ref);for(z in y)c.call(y,z)&&!h.hasOwnProperty(z)&&(_[z]=y[z]);if(v&&v.defaultProps)for(z in y=v.defaultProps,y)_[z]===void 0&&(_[z]=y[z]);return{$$typeof:i,type:v,key:j,ref:M,props:_,_owner:d.current}}return mo.Fragment=l,mo.jsx=m,mo.jsxs=m,mo}var Qu;function Wf(){return Qu||(Qu=1,Rl.exports=Uf()),Rl.exports}var f=Wf(),p=ei(),Ts={},Ol={exports:{}},it={},Dl={exports:{}},Hl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu;function Kf(){return Gu||(Gu=1,(function(s){function i(K,se){var G=K.length;K.push(se);e:for(;0<G;){var b=G-1>>>1,T=K[b];if(0<d(T,se))K[b]=se,K[G]=T,G=b;else break e}}function l(K){return K.length===0?null:K[0]}function c(K){if(K.length===0)return null;var se=K[0],G=K.pop();if(G!==se){K[0]=G;e:for(var b=0,T=K.length,de=T>>>1;b<de;){var ae=2*(b+1)-1,xe=K[ae],be=ae+1,je=K[be];if(0>d(xe,G))be<T&&0>d(je,xe)?(K[b]=je,K[be]=G,b=be):(K[b]=xe,K[ae]=G,b=ae);else if(be<T&&0>d(je,G))K[b]=je,K[be]=G,b=be;else break e}}return se}function d(K,se){var G=K.sortIndex-se.sortIndex;return G!==0?G:K.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,v=m.now();s.unstable_now=function(){return m.now()-v}}var y=[],L=[],z=1,_=null,j=3,M=!1,I=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(K){for(var se=l(L);se!==null;){if(se.callback===null)c(L);else if(se.startTime<=K)c(L),se.sortIndex=se.expirationTime,i(y,se);else break;se=l(L)}}function Y(K){if(N=!1,ee(K),!I)if(l(y)!==null)I=!0,he(le);else{var se=l(L);se!==null&&fe(Y,se.startTime-K)}}function le(K,se){I=!1,N&&(N=!1,J(pe),pe=-1),M=!0;var G=j;try{for(ee(se),_=l(y);_!==null&&(!(_.expirationTime>se)||K&&!ue());){var b=_.callback;if(typeof b=="function"){_.callback=null,j=_.priorityLevel;var T=b(_.expirationTime<=se);se=s.unstable_now(),typeof T=="function"?_.callback=T:_===l(y)&&c(y),ee(se)}else c(y);_=l(y)}if(_!==null)var de=!0;else{var ae=l(L);ae!==null&&fe(Y,ae.startTime-se),de=!1}return de}finally{_=null,j=G,M=!1}}var P=!1,W=null,pe=-1,ge=5,ne=-1;function ue(){return!(s.unstable_now()-ne<ge)}function Z(){if(W!==null){var K=s.unstable_now();ne=K;var se=!0;try{se=W(!0,K)}finally{se?R():(P=!1,W=null)}}else P=!1}var R;if(typeof Q=="function")R=function(){Q(Z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ve=$.port2;$.port1.onmessage=Z,R=function(){ve.postMessage(null)}}else R=function(){O(Z,0)};function he(K){W=K,P||(P=!0,R())}function fe(K,se){pe=O(function(){K(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){I||M||(I=!0,he(le))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return j},s.unstable_getFirstCallbackNode=function(){return l(y)},s.unstable_next=function(K){switch(j){case 1:case 2:case 3:var se=3;break;default:se=j}var G=j;j=se;try{return K()}finally{j=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var G=j;j=K;try{return se()}finally{j=G}},s.unstable_scheduleCallback=function(K,se,G){var b=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?b+G:b):G=b,K){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=G+T,K={id:z++,callback:se,priorityLevel:K,startTime:G,expirationTime:T,sortIndex:-1},G>b?(K.sortIndex=G,i(L,K),l(y)===null&&K===l(L)&&(N?(J(pe),pe=-1):N=!0,fe(Y,G-b))):(K.sortIndex=T,i(y,K),I||M||(I=!0,he(le))),K},s.unstable_shouldYield=ue,s.unstable_wrapCallback=function(K){var se=j;return function(){var G=j;j=se;try{return K.apply(this,arguments)}finally{j=G}}}})(Hl)),Hl}var qu;function Qf(){return qu||(qu=1,Dl.exports=Kf()),Dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu;function Gf(){if(Yu)return it;Yu=1;var s=ei(),i=Qf();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},_={};function j(e){return y.call(_,e)?!0:y.call(z,e)?!1:L.test(e)?_[e]=!0:(z[e]=!0,!1)}function M(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||M(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,n,r,o,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(J,Q);O[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(J,Q);O[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(J,Q);O[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var o=O.hasOwnProperty(t)?O[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,o,r)&&(n=null),r||o===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Y=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),P=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),ue=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),K=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,b;function T(e){if(b===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var de=!1;function ae(e,t){if(!e||de)return"";de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var o=C.stack.split(`
`),a=r.stack.split(`
`),u=o.length-1,g=a.length-1;1<=u&&0<=g&&o[u]!==a[g];)g--;for(;1<=u&&0<=g;u--,g--)if(o[u]!==a[g]){if(u!==1||g!==1)do if(u--,g--,0>g||o[u]!==a[g]){var x=`
`+o[u].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=u&&0<=g);break}}}finally{de=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?T(e):""}function xe(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function be(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case P:return"Portal";case ge:return"Profiler";case pe:return"StrictMode";case R:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ue:return(e.displayName||"Context")+".Consumer";case ne:return(e._context.displayName||"Context")+".Provider";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(t);case 8:return t===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ze(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function He(e){var t=Ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=He(e))}function bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cr(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ze(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kn(e,t){t=t.checked,t!=null&&ee(e,"checked",t,!1)}function Qn(e,t){Kn(e,t);var n=ze(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gn(e,t.type,ze(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _o(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gn(e,t,n){(t!=="number"||Sn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qt=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ze(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function jr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ze(n)}}function Nr(e,t){var n=ze(t.value),r=ze(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function k(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?k(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var F,ke=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(F=F||document.createElement("div"),F.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=F.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ye(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(e){nt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Le[t]=Le[e]})});function Dt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Le.hasOwnProperty(e)&&Le[e]?(""+t).trim():t+"px"}function So(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Dt(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var zo=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(zo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,qn=null,Yn=null;function ii(e){if(e=Xr(e)){if(typeof Js!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Go(t),Js(e.stateNode,e.type,t))}}function ci(e){qn?Yn?Yn.push(e):Yn=[e]:qn=e}function ui(){if(qn){var e=qn,t=Yn;if(Yn=qn=null,ii(e),t)for(e=0;e<t.length;e++)ii(t[e])}}function di(e,t){return e(t)}function pi(){}var Xs=!1;function fi(e,t,n){if(Xs)return e(t,n);Xs=!0;try{return di(e,t,n)}finally{Xs=!1,(qn!==null||Yn!==null)&&(pi(),ui())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var ea=!1;if(v)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ea=!1}function Qd(e,t,n,r,o,a,u,g,x){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(V){this.onError(V)}}var Tr=!1,Eo=null,Co=!1,ta=null,Gd={onError:function(e){Tr=!0,Eo=e}};function qd(e,t,n,r,o,a,u,g,x){Tr=!1,Eo=null,Qd.apply(Gd,arguments)}function Yd(e,t,n,r,o,a,u,g,x){if(qd.apply(this,arguments),Tr){if(Tr){var C=Eo;Tr=!1,Eo=null}else throw Error(l(198));Co||(Co=!0,ta=C)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mi(e){if(zn(e)!==e)throw Error(l(188))}function Jd(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return mi(o),e;if(a===r)return mi(o),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=o,r=a;else{for(var u=!1,g=o.child;g;){if(g===n){u=!0,n=o,r=a;break}if(g===r){u=!0,r=o,n=a;break}g=g.sibling}if(!u){for(g=a.child;g;){if(g===n){u=!0,n=a,r=o;break}if(g===r){u=!0,r=a,n=o;break}g=g.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function gi(e){return e=Jd(e),e!==null?vi(e):null}function vi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vi(e);if(t!==null)return t;e=e.sibling}return null}var xi=i.unstable_scheduleCallback,yi=i.unstable_cancelCallback,Xd=i.unstable_shouldYield,ep=i.unstable_requestPaint,$e=i.unstable_now,tp=i.unstable_getCurrentPriorityLevel,na=i.unstable_ImmediatePriority,wi=i.unstable_UserBlockingPriority,jo=i.unstable_NormalPriority,np=i.unstable_LowPriority,bi=i.unstable_IdlePriority,Mo=null,Ft=null;function rp(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:ap,op=Math.log,sp=Math.LN2;function ap(e){return e>>>=0,e===0?32:31-(op(e)/sp|0)|0}var No=64,Ao=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,u=n&268435455;if(u!==0){var g=u&~o;g!==0?r=Pr(g):(a&=u,a!==0&&(r=Pr(a)))}else u=n&~o,u!==0?r=Pr(u):a!==0&&(r=Pr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),o=1<<n,r|=e[n],t&=~o;return r}function lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ip(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-_t(a),g=1<<u,x=o[u];x===-1?((g&n)===0||(g&r)!==0)&&(o[u]=lp(g,t)):x<=t&&(e.expiredLanes|=g),a&=~g}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ki(){var e=No;return No<<=1,(No&4194240)===0&&(No=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function cp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-_t(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ce=0;function _i(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Li,aa,Si,zi,Ei,la=!1,To=[],Jt=null,Xt=null,en=null,$r=new Map,Or=new Map,tn=[],up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ci(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function Dr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Xr(t),t!==null&&aa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dp(e,t,n,r,o){switch(t){case"focusin":return Jt=Dr(Jt,e,t,n,r,o),!0;case"dragenter":return Xt=Dr(Xt,e,t,n,r,o),!0;case"mouseover":return en=Dr(en,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return $r.set(a,Dr($r.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Or.set(a,Dr(Or.get(a)||null,e,t,n,r,o)),!0}return!1}function ji(e){var t=En(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=hi(n),t!==null){e.blockedOn=t,Ei(e.priority,function(){Si(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qs=r,n.target.dispatchEvent(r),qs=null}else return t=Xr(n),t!==null&&aa(t),e.blockedOn=n,!1;t.shift()}return!0}function Mi(e,t,n){Po(e)&&n.delete(t)}function pp(){la=!1,Jt!==null&&Po(Jt)&&(Jt=null),Xt!==null&&Po(Xt)&&(Xt=null),en!==null&&Po(en)&&(en=null),$r.forEach(Mi),Or.forEach(Mi)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,pp)))}function Vr(e){function t(o){return Hr(o,e)}if(0<To.length){Hr(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Hr(Jt,e),Xt!==null&&Hr(Xt,e),en!==null&&Hr(en,e),$r.forEach(t),Or.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)ji(n),n.blockedOn===null&&tn.shift()}var Jn=Y.ReactCurrentBatchConfig,Ro=!0;function fp(e,t,n,r){var o=Ce,a=Jn.transition;Jn.transition=null;try{Ce=1,ia(e,t,n,r)}finally{Ce=o,Jn.transition=a}}function hp(e,t,n,r){var o=Ce,a=Jn.transition;Jn.transition=null;try{Ce=4,ia(e,t,n,r)}finally{Ce=o,Jn.transition=a}}function ia(e,t,n,r){if(Ro){var o=ca(e,t,n,r);if(o===null)za(e,t,r,$o,n),Ci(e,r);else if(dp(o,e,t,n,r))r.stopPropagation();else if(Ci(e,r),t&4&&-1<up.indexOf(e)){for(;o!==null;){var a=Xr(o);if(a!==null&&Li(a),a=ca(e,t,n,r),a===null&&za(e,t,r,$o,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var $o=null;function ca(e,t,n,r){if($o=null,e=Ys(r),e=En(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function Ni(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tp()){case na:return 1;case wi:return 4;case jo:case np:return 16;case bi:return 536870912;default:return 16}default:return 16}}var nn=null,ua=null,Oo=null;function Ai(){if(Oo)return Oo;var e,t=ua,n=t.length,r,o="value"in nn?nn.value:nn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[a-r];r++);return Oo=o.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function Fi(){return!1}function ct(e){function t(n,r,o,a,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(a):a[g]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ho:Fi,this.isPropagationStopped=Fi,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=ct(Xn),Ir=G({},Xn,{view:0,detail:0}),mp=ct(Ir),pa,fa,Zr,Vo=G({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(pa=e.screenX-Zr.screenX,fa=e.screenY-Zr.screenY):fa=pa=0,Zr=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Ti=ct(Vo),gp=G({},Vo,{dataTransfer:0}),vp=ct(gp),xp=G({},Ir,{relatedTarget:0}),ha=ct(xp),yp=G({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=ct(yp),bp=G({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=ct(bp),_p=G({},Xn,{data:0}),Pi=ct(_p),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zp[e])?!!t[e]:!1}function ma(){return Ep}var Cp=G({},Ir,{key:function(e){if(e.key){var t=Lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=ct(Cp),Mp=G({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ri=ct(Mp),Np=G({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),Ap=ct(Np),Fp=G({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=ct(Fp),Pp=G({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rp=ct(Pp),$p=[9,13,27,32],ga=v&&"CompositionEvent"in window,Br=null;v&&"documentMode"in document&&(Br=document.documentMode);var Op=v&&"TextEvent"in window&&!Br,$i=v&&(!ga||Br&&8<Br&&11>=Br),Oi=" ",Di=!1;function Hi(e,t){switch(e){case"keyup":return $p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Dp(e,t){switch(e){case"compositionend":return Vi(t);case"keypress":return t.which!==32?null:(Di=!0,Oi);case"textInput":return e=t.data,e===Oi&&Di?null:e;default:return null}}function Hp(e,t){if(er)return e==="compositionend"||!ga&&Hi(e,t)?(e=Ai(),Oo=ua=nn=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $i&&t.locale!=="ko"?null:t.data;default:return null}}var Vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vp[e.type]:t==="textarea"}function Zi(e,t,n,r){ci(r),t=Wo(t,"onChange"),0<t.length&&(n=new da("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,Wr=null;function Ip(e){lc(e,0)}function Io(e){var t=sr(e);if(bo(t))return e}function Zp(e,t){if(e==="change")return t}var Bi=!1;if(v){var va;if(v){var xa="oninput"in document;if(!xa){var Ui=document.createElement("div");Ui.setAttribute("oninput","return;"),xa=typeof Ui.oninput=="function"}va=xa}else va=!1;Bi=va&&(!document.documentMode||9<document.documentMode)}function Wi(){Ur&&(Ur.detachEvent("onpropertychange",Ki),Wr=Ur=null)}function Ki(e){if(e.propertyName==="value"&&Io(Wr)){var t=[];Zi(t,Wr,e,Ys(e)),fi(Ip,t)}}function Bp(e,t,n){e==="focusin"?(Wi(),Ur=t,Wr=n,Ur.attachEvent("onpropertychange",Ki)):e==="focusout"&&Wi()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Wr)}function Wp(e,t){if(e==="click")return Io(t)}function Kp(e,t){if(e==="input"||e==="change")return Io(t)}function Qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Qp;function Kr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!y.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function Qi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gi(e,t){var n=Qi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qi(n)}}function qi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yi(){for(var e=window,t=Sn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sn(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gp(e){var t=Yi(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qi(n.ownerDocument.documentElement,n)){if(r!==null&&ya(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Gi(n,a);var u=Gi(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qp=v&&"documentMode"in document&&11>=document.documentMode,tr=null,wa=null,Qr=null,ba=!1;function Ji(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||tr==null||tr!==Sn(r)||(r=tr,"selectionStart"in r&&ya(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Wo(wa,"onSelect"),0<r.length&&(t=new da("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function Zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},ka={},Xi={};v&&(Xi=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Bo(e){if(ka[e])return ka[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xi)return ka[e]=t[n];return e}var ec=Bo("animationend"),tc=Bo("animationiteration"),nc=Bo("animationstart"),rc=Bo("transitionend"),oc=new Map,sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){oc.set(e,t),h(t,[e])}for(var _a=0;_a<sc.length;_a++){var La=sc[_a],Yp=La.toLowerCase(),Jp=La[0].toUpperCase()+La.slice(1);rn(Yp,"on"+Jp)}rn(ec,"onAnimationEnd"),rn(tc,"onAnimationIteration"),rn(nc,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(rc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yd(r,t,void 0,e),e.currentTarget=null}function lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var g=r[u],x=g.instance,C=g.currentTarget;if(g=g.listener,x!==a&&o.isPropagationStopped())break e;ac(o,g,C),a=x}else for(u=0;u<r.length;u++){if(g=r[u],x=g.instance,C=g.currentTarget,g=g.listener,x!==a&&o.isPropagationStopped())break e;ac(o,g,C),a=x}}}if(Co)throw e=ta,Co=!1,ta=null,e}function Ne(e,t){var n=t[Aa];n===void 0&&(n=t[Aa]=new Set);var r=e+"__bubble";n.has(r)||(ic(t,e,2,!1),n.add(r))}function Sa(e,t,n){var r=0;t&&(r|=4),ic(n,e,r,t)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Uo]){e[Uo]=!0,c.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||Sa(n,!1,e),Sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uo]||(t[Uo]=!0,Sa("selectionchange",!1,t))}}function ic(e,t,n,r){switch(Ni(t)){case 1:var o=fp;break;case 4:o=hp;break;default:o=ia}n=o.bind(null,t,n,e),o=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function za(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var g=r.stateNode.containerInfo;if(g===o||g.nodeType===8&&g.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var x=u.tag;if((x===3||x===4)&&(x=u.stateNode.containerInfo,x===o||x.nodeType===8&&x.parentNode===o))return;u=u.return}for(;g!==null;){if(u=En(g),u===null)return;if(x=u.tag,x===5||x===6){r=a=u;continue e}g=g.parentNode}}r=r.return}fi(function(){var C=a,V=Ys(n),B=[];e:{var D=oc.get(e);if(D!==void 0){var q=da,te=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":q=jp;break;case"focusin":te="focus",q=ha;break;case"focusout":te="blur",q=ha;break;case"beforeblur":case"afterblur":q=ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Ap;break;case ec:case tc:case nc:q=wp;break;case rc:q=Tp;break;case"scroll":q=mp;break;case"wheel":q=Rp;break;case"copy":case"cut":case"paste":q=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ri}var re=(t&4)!==0,Oe=!re&&e==="scroll",S=re?D!==null?D+"Capture":null:D;re=[];for(var w=C,E;w!==null;){E=w;var U=E.stateNode;if(E.tag===5&&U!==null&&(E=U,S!==null&&(U=Ar(w,S),U!=null&&re.push(Yr(w,U,E)))),Oe)break;w=w.return}0<re.length&&(D=new q(D,te,null,n,V),B.push({event:D,listeners:re}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",D&&n!==qs&&(te=n.relatedTarget||n.fromElement)&&(En(te)||te[Ht]))break e;if((q||D)&&(D=V.window===V?V:(D=V.ownerDocument)?D.defaultView||D.parentWindow:window,q?(te=n.relatedTarget||n.toElement,q=C,te=te?En(te):null,te!==null&&(Oe=zn(te),te!==Oe||te.tag!==5&&te.tag!==6)&&(te=null)):(q=null,te=C),q!==te)){if(re=Ti,U="onMouseLeave",S="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(re=Ri,U="onPointerLeave",S="onPointerEnter",w="pointer"),Oe=q==null?D:sr(q),E=te==null?D:sr(te),D=new re(U,w+"leave",q,n,V),D.target=Oe,D.relatedTarget=E,U=null,En(V)===C&&(re=new re(S,w+"enter",te,n,V),re.target=E,re.relatedTarget=Oe,U=re),Oe=U,q&&te)t:{for(re=q,S=te,w=0,E=re;E;E=rr(E))w++;for(E=0,U=S;U;U=rr(U))E++;for(;0<w-E;)re=rr(re),w--;for(;0<E-w;)S=rr(S),E--;for(;w--;){if(re===S||S!==null&&re===S.alternate)break t;re=rr(re),S=rr(S)}re=null}else re=null;q!==null&&cc(B,D,q,re,!1),te!==null&&Oe!==null&&cc(B,Oe,te,re,!0)}}e:{if(D=C?sr(C):window,q=D.nodeName&&D.nodeName.toLowerCase(),q==="select"||q==="input"&&D.type==="file")var oe=Zp;else if(Ii(D))if(Bi)oe=Kp;else{oe=Up;var ie=Bp}else(q=D.nodeName)&&q.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(oe=Wp);if(oe&&(oe=oe(e,C))){Zi(B,oe,n,V);break e}ie&&ie(e,D,C),e==="focusout"&&(ie=D._wrapperState)&&ie.controlled&&D.type==="number"&&Gn(D,"number",D.value)}switch(ie=C?sr(C):window,e){case"focusin":(Ii(ie)||ie.contentEditable==="true")&&(tr=ie,wa=C,Qr=null);break;case"focusout":Qr=wa=tr=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,Ji(B,n,V);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":Ji(B,n,V)}var ce;if(ga)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else er?Hi(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&($i&&n.locale!=="ko"&&(er||me!=="onCompositionStart"?me==="onCompositionEnd"&&er&&(ce=Ai()):(nn=V,ua="value"in nn?nn.value:nn.textContent,er=!0)),ie=Wo(C,me),0<ie.length&&(me=new Pi(me,e,null,n,V),B.push({event:me,listeners:ie}),ce?me.data=ce:(ce=Vi(n),ce!==null&&(me.data=ce)))),(ce=Op?Dp(e,n):Hp(e,n))&&(C=Wo(C,"onBeforeInput"),0<C.length&&(V=new Pi("onBeforeInput","beforeinput",null,n,V),B.push({event:V,listeners:C}),V.data=ce))}lc(B,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ar(e,n),a!=null&&r.unshift(Yr(e,a,o)),a=Ar(e,t),a!=null&&r.push(Yr(e,a,o))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cc(e,t,n,r,o){for(var a=t._reactName,u=[];n!==null&&n!==r;){var g=n,x=g.alternate,C=g.stateNode;if(x!==null&&x===r)break;g.tag===5&&C!==null&&(g=C,o?(x=Ar(n,a),x!=null&&u.unshift(Yr(n,x,g))):o||(x=Ar(n,a),x!=null&&u.push(Yr(n,x,g)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var ef=/\r\n?/g,tf=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(ef,`
`).replace(tf,"")}function Ko(e,t,n){if(t=uc(t),uc(e)!==t&&n)throw Error(l(425))}function Qo(){}var Ea=null,Ca=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,rf=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(of)}:Ma;function of(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),Tt="__reactFiber$"+or,Jr="__reactProps$"+or,Ht="__reactContainer$"+or,Aa="__reactEvents$"+or,sf="__reactListeners$"+or,af="__reactHandles$"+or;function En(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pc(e);e!==null;){if(n=e[Tt])return n;e=pc(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[Tt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Go(e){return e[Jr]||null}var Fa=[],ar=-1;function sn(e){return{current:e}}function Ae(e){0>ar||(e.current=Fa[ar],Fa[ar]=null,ar--)}function Me(e,t){ar++,Fa[ar]=e.current,e.current=t}var an={},Qe=sn(an),rt=sn(!1),Cn=an;function lr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ot(e){return e=e.childContextTypes,e!=null}function qo(){Ae(rt),Ae(Qe)}function fc(e,t,n){if(Qe.current!==an)throw Error(l(168));Me(Qe,t),Me(rt,n)}function hc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(l(108,je(e)||"Unknown",o));return G({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,Cn=Qe.current,Me(Qe,e),Me(rt,rt.current),!0}function mc(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=hc(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,Ae(rt),Ae(Qe),Me(Qe,e)):Ae(rt),Me(rt,n)}var Vt=null,Jo=!1,Ta=!1;function gc(e){Vt===null?Vt=[e]:Vt.push(e)}function lf(e){Jo=!0,gc(e)}function ln(){if(!Ta&&Vt!==null){Ta=!0;var e=0,t=Ce;try{var n=Vt;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Jo=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),xi(na,ln),o}finally{Ce=t,Ta=!1}}return null}var ir=[],cr=0,Xo=null,es=0,ht=[],mt=0,jn=null,It=1,Zt="";function Mn(e,t){ir[cr++]=es,ir[cr++]=Xo,Xo=e,es=t}function vc(e,t,n){ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=jn,jn=e;var r=It;e=Zt;var o=32-_t(r)-1;r&=~(1<<o),n+=1;var a=32-_t(t)+o;if(30<a){var u=o-o%5;a=(r&(1<<u)-1).toString(32),r>>=u,o-=u,It=1<<32-_t(t)+o|n<<o|r,Zt=a+e}else It=1<<a|n<<o|r,Zt=e}function Pa(e){e.return!==null&&(Mn(e,1),vc(e,1,0))}function Ra(e){for(;e===Xo;)Xo=ir[--cr],ir[cr]=null,es=ir[--cr],ir[cr]=null;for(;e===jn;)jn=ht[--mt],ht[mt]=null,Zt=ht[--mt],ht[mt]=null,It=ht[--mt],ht[mt]=null}var ut=null,dt=null,Fe=!1,St=null;function xc(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:It,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,dt=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(Fe){var t=dt;if(t){var n=t;if(!yc(e,t)){if($a(e))throw Error(l(418));t=on(n.nextSibling);var r=ut;t&&yc(e,t)?xc(r,n):(e.flags=e.flags&-4097|2,Fe=!1,ut=e)}}else{if($a(e))throw Error(l(418));e.flags=e.flags&-4097|2,Fe=!1,ut=e}}}function wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function ts(e){if(e!==ut)return!1;if(!Fe)return wc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=dt)){if($a(e))throw bc(),Error(l(418));for(;t;)xc(e,t),t=on(t.nextSibling)}if(wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?on(e.stateNode.nextSibling):null;return!0}function bc(){for(var e=dt;e;)e=on(e.nextSibling)}function ur(){dt=ut=null,Fe=!1}function Da(e){St===null?St=[e]:St.push(e)}var cf=Y.ReactCurrentBatchConfig;function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var g=o.refs;u===null?delete g[a]:g[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kc(e){var t=e._init;return t(e._payload)}function _c(e){function t(S,w){if(e){var E=S.deletions;E===null?(S.deletions=[w],S.flags|=16):E.push(w)}}function n(S,w){if(!e)return null;for(;w!==null;)t(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function o(S,w){return S=gn(S,w),S.index=0,S.sibling=null,S}function a(S,w,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<w?(S.flags|=2,w):E):(S.flags|=2,w)):(S.flags|=1048576,w)}function u(S){return e&&S.alternate===null&&(S.flags|=2),S}function g(S,w,E,U){return w===null||w.tag!==6?(w=Ml(E,S.mode,U),w.return=S,w):(w=o(w,E),w.return=S,w)}function x(S,w,E,U){var oe=E.type;return oe===W?V(S,w,E.props.children,U,E.key):w!==null&&(w.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===he&&kc(oe)===w.type)?(U=o(w,E.props),U.ref=eo(S,w,E),U.return=S,U):(U=zs(E.type,E.key,E.props,null,S.mode,U),U.ref=eo(S,w,E),U.return=S,U)}function C(S,w,E,U){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Nl(E,S.mode,U),w.return=S,w):(w=o(w,E.children||[]),w.return=S,w)}function V(S,w,E,U,oe){return w===null||w.tag!==7?(w=On(E,S.mode,U,oe),w.return=S,w):(w=o(w,E),w.return=S,w)}function B(S,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ml(""+w,S.mode,E),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case le:return E=zs(w.type,w.key,w.props,null,S.mode,E),E.ref=eo(S,null,w),E.return=S,E;case P:return w=Nl(w,S.mode,E),w.return=S,w;case he:var U=w._init;return B(S,U(w._payload),E)}if(qt(w)||se(w))return w=On(w,S.mode,E,null),w.return=S,w;ns(S,w)}return null}function D(S,w,E,U){var oe=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return oe!==null?null:g(S,w,""+E,U);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case le:return E.key===oe?x(S,w,E,U):null;case P:return E.key===oe?C(S,w,E,U):null;case he:return oe=E._init,D(S,w,oe(E._payload),U)}if(qt(E)||se(E))return oe!==null?null:V(S,w,E,U,null);ns(S,E)}return null}function q(S,w,E,U,oe){if(typeof U=="string"&&U!==""||typeof U=="number")return S=S.get(E)||null,g(w,S,""+U,oe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case le:return S=S.get(U.key===null?E:U.key)||null,x(w,S,U,oe);case P:return S=S.get(U.key===null?E:U.key)||null,C(w,S,U,oe);case he:var ie=U._init;return q(S,w,E,ie(U._payload),oe)}if(qt(U)||se(U))return S=S.get(E)||null,V(w,S,U,oe,null);ns(w,U)}return null}function te(S,w,E,U){for(var oe=null,ie=null,ce=w,me=w=0,Ue=null;ce!==null&&me<E.length;me++){ce.index>me?(Ue=ce,ce=null):Ue=ce.sibling;var Se=D(S,ce,E[me],U);if(Se===null){ce===null&&(ce=Ue);break}e&&ce&&Se.alternate===null&&t(S,ce),w=a(Se,w,me),ie===null?oe=Se:ie.sibling=Se,ie=Se,ce=Ue}if(me===E.length)return n(S,ce),Fe&&Mn(S,me),oe;if(ce===null){for(;me<E.length;me++)ce=B(S,E[me],U),ce!==null&&(w=a(ce,w,me),ie===null?oe=ce:ie.sibling=ce,ie=ce);return Fe&&Mn(S,me),oe}for(ce=r(S,ce);me<E.length;me++)Ue=q(ce,S,me,E[me],U),Ue!==null&&(e&&Ue.alternate!==null&&ce.delete(Ue.key===null?me:Ue.key),w=a(Ue,w,me),ie===null?oe=Ue:ie.sibling=Ue,ie=Ue);return e&&ce.forEach(function(vn){return t(S,vn)}),Fe&&Mn(S,me),oe}function re(S,w,E,U){var oe=se(E);if(typeof oe!="function")throw Error(l(150));if(E=oe.call(E),E==null)throw Error(l(151));for(var ie=oe=null,ce=w,me=w=0,Ue=null,Se=E.next();ce!==null&&!Se.done;me++,Se=E.next()){ce.index>me?(Ue=ce,ce=null):Ue=ce.sibling;var vn=D(S,ce,Se.value,U);if(vn===null){ce===null&&(ce=Ue);break}e&&ce&&vn.alternate===null&&t(S,ce),w=a(vn,w,me),ie===null?oe=vn:ie.sibling=vn,ie=vn,ce=Ue}if(Se.done)return n(S,ce),Fe&&Mn(S,me),oe;if(ce===null){for(;!Se.done;me++,Se=E.next())Se=B(S,Se.value,U),Se!==null&&(w=a(Se,w,me),ie===null?oe=Se:ie.sibling=Se,ie=Se);return Fe&&Mn(S,me),oe}for(ce=r(S,ce);!Se.done;me++,Se=E.next())Se=q(ce,S,me,Se.value,U),Se!==null&&(e&&Se.alternate!==null&&ce.delete(Se.key===null?me:Se.key),w=a(Se,w,me),ie===null?oe=Se:ie.sibling=Se,ie=Se);return e&&ce.forEach(function(If){return t(S,If)}),Fe&&Mn(S,me),oe}function Oe(S,w,E,U){if(typeof E=="object"&&E!==null&&E.type===W&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case le:e:{for(var oe=E.key,ie=w;ie!==null;){if(ie.key===oe){if(oe=E.type,oe===W){if(ie.tag===7){n(S,ie.sibling),w=o(ie,E.props.children),w.return=S,S=w;break e}}else if(ie.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===he&&kc(oe)===ie.type){n(S,ie.sibling),w=o(ie,E.props),w.ref=eo(S,ie,E),w.return=S,S=w;break e}n(S,ie);break}else t(S,ie);ie=ie.sibling}E.type===W?(w=On(E.props.children,S.mode,U,E.key),w.return=S,S=w):(U=zs(E.type,E.key,E.props,null,S.mode,U),U.ref=eo(S,w,E),U.return=S,S=U)}return u(S);case P:e:{for(ie=E.key;w!==null;){if(w.key===ie)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(S,w.sibling),w=o(w,E.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else t(S,w);w=w.sibling}w=Nl(E,S.mode,U),w.return=S,S=w}return u(S);case he:return ie=E._init,Oe(S,w,ie(E._payload),U)}if(qt(E))return te(S,w,E,U);if(se(E))return re(S,w,E,U);ns(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(S,w.sibling),w=o(w,E),w.return=S,S=w):(n(S,w),w=Ml(E,S.mode,U),w.return=S,S=w),u(S)):n(S,w)}return Oe}var dr=_c(!0),Lc=_c(!1),rs=sn(null),os=null,pr=null,Ha=null;function Va(){Ha=pr=os=null}function Ia(e){var t=rs.current;Ae(rs),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){os=e,Ha=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(os===null)throw Error(l(308));pr=e,os.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Nn=null;function Ba(e){Nn===null?Nn=[e]:Nn.push(e)}function Sc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ba(t)):(n.next=o.next,o.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(_e&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ba(r)):(t.next=o.next,o.next=t),r.interleaved=t,Bt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function Ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=u:a=a.next=u,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function as(e,t,n,r){var o=e.updateQueue;cn=!1;var a=o.firstBaseUpdate,u=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var x=g,C=x.next;x.next=null,u===null?a=C:u.next=C,u=x;var V=e.alternate;V!==null&&(V=V.updateQueue,g=V.lastBaseUpdate,g!==u&&(g===null?V.firstBaseUpdate=C:g.next=C,V.lastBaseUpdate=x))}if(a!==null){var B=o.baseState;u=0,V=C=x=null,g=a;do{var D=g.lane,q=g.eventTime;if((r&D)===D){V!==null&&(V=V.next={eventTime:q,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var te=e,re=g;switch(D=t,q=n,re.tag){case 1:if(te=re.payload,typeof te=="function"){B=te.call(q,B,D);break e}B=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,D=typeof te=="function"?te.call(q,B,D):te,D==null)break e;B=G({},B,D);break e;case 2:cn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,D=o.effects,D===null?o.effects=[g]:D.push(g))}else q={eventTime:q,lane:D,tag:g.tag,payload:g.payload,callback:g.callback,next:null},V===null?(C=V=q,x=B):V=V.next=q,u|=D;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;D=g,g=D.next,D.next=null,o.lastBaseUpdate=D,o.shared.pending=null}}while(!0);if(V===null&&(x=B),o.baseState=x,o.firstBaseUpdate=C,o.lastBaseUpdate=V,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Tn|=u,e.lanes=u,e.memoizedState=B}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var to={},Pt=sn(to),no=sn(to),ro=sn(to);function An(e){if(e===to)throw Error(l(174));return e}function Wa(e,t){switch(Me(ro,t),Me(no,e),Me(Pt,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:A(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=A(t,e)}Ae(Pt),Me(Pt,t)}function hr(){Ae(Pt),Ae(no),Ae(ro)}function jc(e){An(ro.current);var t=An(Pt.current),n=A(t,e.type);t!==n&&(Me(no,e),Me(Pt,n))}function Ka(e){no.current===e&&(Ae(Pt),Ae(no))}var Te=sn(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Ga(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var is=Y.ReactCurrentDispatcher,qa=Y.ReactCurrentBatchConfig,Fn=0,Pe=null,Ve=null,Ze=null,cs=!1,oo=!1,so=0,uf=0;function Ge(){throw Error(l(321))}function Ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Ja(e,t,n,r,o,a){if(Fn=a,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=e===null||e.memoizedState===null?hf:mf,e=n(r,o),oo){a=0;do{if(oo=!1,so=0,25<=a)throw Error(l(301));a+=1,Ze=Ve=null,t.updateQueue=null,is.current=gf,e=n(r,o)}while(oo)}if(is.current=ps,t=Ve!==null&&Ve.next!==null,Fn=0,Ze=Ve=Pe=null,cs=!1,t)throw Error(l(300));return e}function Xa(){var e=so!==0;return so=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Pe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function vt(){if(Ve===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ze===null?Pe.memoizedState:Ze.next;if(t!==null)Ze=t,Ve=e;else{if(e===null)throw Error(l(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ze===null?Pe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ao(e,t){return typeof t=="function"?t(e):t}function el(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Ve,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var u=o.next;o.next=a.next,a.next=u}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var g=u=null,x=null,C=a;do{var V=C.lane;if((Fn&V)===V)x!==null&&(x=x.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var B={lane:V,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};x===null?(g=x=B,u=r):x=x.next=B,Pe.lanes|=V,Tn|=V}C=C.next}while(C!==null&&C!==a);x===null?u=r:x.next=g,Lt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=x,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Pe.lanes|=a,Tn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tl(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do a=e(a,u.action),u=u.next;while(u!==o);Lt(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Mc(){}function Nc(e,t){var n=Pe,r=vt(),o=t(),a=!Lt(r.memoizedState,o);if(a&&(r.memoizedState=o,st=!0),r=r.queue,nl(Tc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,lo(9,Fc.bind(null,n,r,o,t),void 0,null),Be===null)throw Error(l(349));(Fn&30)!==0||Ac(n,t,o)}return o}function Ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,Pc(t)&&Rc(e)}function Tc(e,t,n){return n(function(){Pc(t)&&Rc(e)})}function Pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Rc(e){var t=Bt(e,1);t!==null&&jt(t,e,1,-1)}function $c(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,Pe,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oc(){return vt().memoizedState}function us(e,t,n,r){var o=Rt();Pe.flags|=e,o.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function ds(e,t,n,r){var o=vt();r=r===void 0?null:r;var a=void 0;if(Ve!==null){var u=Ve.memoizedState;if(a=u.destroy,r!==null&&Ya(r,u.deps)){o.memoizedState=lo(t,n,a,r);return}}Pe.flags|=e,o.memoizedState=lo(1|t,n,a,r)}function Dc(e,t){return us(8390656,8,e,t)}function nl(e,t){return ds(2048,8,e,t)}function Hc(e,t){return ds(4,2,e,t)}function Vc(e,t){return ds(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zc(e,t,n){return n=n!=null?n.concat([e]):null,ds(4,4,Ic.bind(null,t,e),n)}function rl(){}function Bc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wc(e,t,n){return(Fn&21)===0?(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n):(Lt(n,t)||(n=ki(),Pe.lanes|=n,Tn|=n,e.baseState=!0),t)}function df(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=qa.transition;qa.transition={};try{e(!1),t()}finally{Ce=n,qa.transition=r}}function Kc(){return vt().memoizedState}function pf(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qc(e))Gc(t,n);else if(n=Sc(e,t,n,r),n!==null){var o=et();jt(n,e,r,o),qc(n,t,r)}}function ff(e,t,n){var r=hn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))Gc(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,g=a(u,n);if(o.hasEagerState=!0,o.eagerState=g,Lt(g,u)){var x=t.interleaved;x===null?(o.next=o,Ba(t)):(o.next=x.next,x.next=o),t.interleaved=o;return}}catch{}finally{}n=Sc(e,t,o,r),n!==null&&(o=et(),jt(n,e,r,o),qc(n,t,r))}}function Qc(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Gc(e,t){oo=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var ps={readContext:gt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},hf={readContext:gt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pf.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:rl,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=df.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=Rt();if(Fe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Be===null)throw Error(l(349));(Fn&30)!==0||Ac(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Dc(Tc.bind(null,r,a,e),[e]),r.flags|=2048,lo(9,Fc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Be.identifierPrefix;if(Fe){var n=Zt,r=It;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mf={readContext:gt,useCallback:Bc,useContext:gt,useEffect:nl,useImperativeHandle:Zc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Uc,useReducer:el,useRef:Oc,useState:function(){return el(ao)},useDebugValue:rl,useDeferredValue:function(e){var t=vt();return Wc(t,Ve.memoizedState,e)},useTransition:function(){var e=el(ao)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:Nc,useId:Kc,unstable_isNewReconciler:!1},gf={readContext:gt,useCallback:Bc,useContext:gt,useEffect:nl,useImperativeHandle:Zc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Uc,useReducer:tl,useRef:Oc,useState:function(){return tl(ao)},useDebugValue:rl,useDeferredValue:function(e){var t=vt();return Ve===null?t.memoizedState=e:Wc(t,Ve.memoizedState,e)},useTransition:function(){var e=tl(ao)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:Nc,useId:Kc,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fs={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=hn(e),a=Ut(r,o);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(jt(t,e,o,r),ss(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=hn(e),a=Ut(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,o),t!==null&&(jt(t,e,o,r),ss(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=hn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(jt(t,e,r,n),ss(t,e,r))}};function Yc(e,t,n,r,o,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(o,a):!0}function Jc(e,t,n){var r=!1,o=an,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(o=ot(t)?Cn:Qe.current,r=t.contextTypes,a=(r=r!=null)?lr(e,o):an),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ua(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=gt(a):(a=ot(t)?Cn:Qe.current,o.context=lr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ol(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fs.enqueueReplaceState(o,o.state,null),as(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var n="",r=t;do n+=xe(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function eu(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ws||(ws=!0,kl=r),ll(e,t)},n}function tu(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ll(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ll(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ou(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xf=Y.ReactCurrentOwner,st=!1;function Xe(e,t,n,r){t.child=e===null?Lc(t,null,n,r):dr(t,e.child,n,r)}function su(e,t,n,r,o){n=n.render;var a=t.ref;return fr(t,o),r=Ja(e,t,n,r,a,o),n=Xa(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&n&&Pa(t),t.flags|=1,Xe(e,t,r,o),t.child)}function au(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,lu(e,t,a,r,o)):(e=zs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var u=a.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(u,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function lu(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Kr(a,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return il(e,t,n,r,o)}function iu(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(vr,pt),pt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(vr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Me(vr,pt),pt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Me(vr,pt),pt|=r;return Xe(e,t,o,n),t.child}function cu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function il(e,t,n,r,o){var a=ot(n)?Cn:Qe.current;return a=lr(t,a),fr(t,o),n=Ja(e,t,n,r,a,o),r=Xa(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&r&&Pa(t),t.flags|=1,Xe(e,t,n,o),t.child)}function uu(e,t,n,r,o){if(ot(n)){var a=!0;Yo(t)}else a=!1;if(fr(t,o),t.stateNode===null)ms(e,t),Jc(t,n,r),sl(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,g=t.memoizedProps;u.props=g;var x=u.context,C=n.contextType;typeof C=="object"&&C!==null?C=gt(C):(C=ot(n)?Cn:Qe.current,C=lr(t,C));var V=n.getDerivedStateFromProps,B=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function";B||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==r||x!==C)&&Xc(t,u,r,C),cn=!1;var D=t.memoizedState;u.state=D,as(t,r,u,o),x=t.memoizedState,g!==r||D!==x||rt.current||cn?(typeof V=="function"&&(ol(t,n,V,r),x=t.memoizedState),(g=cn||Yc(t,n,g,r,D,x,C))?(B||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=x),u.props=r,u.state=x,u.context=C,r=g):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,zc(e,t),g=t.memoizedProps,C=t.type===t.elementType?g:zt(t.type,g),u.props=C,B=t.pendingProps,D=u.context,x=n.contextType,typeof x=="object"&&x!==null?x=gt(x):(x=ot(n)?Cn:Qe.current,x=lr(t,x));var q=n.getDerivedStateFromProps;(V=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==B||D!==x)&&Xc(t,u,r,x),cn=!1,D=t.memoizedState,u.state=D,as(t,r,u,o);var te=t.memoizedState;g!==B||D!==te||rt.current||cn?(typeof q=="function"&&(ol(t,n,q,r),te=t.memoizedState),(C=cn||Yc(t,n,C,r,D,te,x)||!1)?(V||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,te,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,te,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=te),u.props=r,u.state=te,u.context=x,r=C):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),r=!1)}return cl(e,t,n,r,a,o)}function cl(e,t,n,r,o,a){cu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&mc(t,n,!1),Wt(e,t,a);r=t.stateNode,xf.current=t;var g=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=dr(t,e.child,null,a),t.child=dr(t,null,g,a)):Xe(e,t,g,a),t.memoizedState=r.state,o&&mc(t,n,!0),t.child}function du(e){var t=e.stateNode;t.pendingContext?fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fc(e,t.context,!1),Wa(e,t.containerInfo)}function pu(e,t,n,r,o){return ur(),Da(o),t.flags|=256,Xe(e,t,n,r),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function fu(e,t,n){var r=t.pendingProps,o=Te.current,a=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(o&2)!==0),g?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Me(Te,o&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,a?(r=t.mode,a=t.child,u={mode:"hidden",children:u},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=u):a=Es(u,r,0,null),e=On(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=dl(n),t.memoizedState=ul,e):pl(t,u));if(o=e.memoizedState,o!==null&&(g=o.dehydrated,g!==null))return yf(e,t,u,r,g,o,n);if(a){a=r.fallback,u=t.mode,o=e.child,g=o.sibling;var x={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=x,t.deletions=null):(r=gn(o,x),r.subtreeFlags=o.subtreeFlags&14680064),g!==null?a=gn(g,a):(a=On(a,u,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,u=e.child.memoizedState,u=u===null?dl(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=ul,r}return a=e.child,e=a.sibling,r=gn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pl(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&Da(r),dr(t,e.child,null,n),e=pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,n,r,o,a,u){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(l(422))),hs(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Es({mode:"visible",children:r.children},o,0,null),a=On(a,o,u,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&dr(t,e.child,null,u),t.child.memoizedState=dl(u),t.memoizedState=ul,a);if((t.mode&1)===0)return hs(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var g=r.dgst;return r=g,a=Error(l(419)),r=al(a,r,void 0),hs(e,t,u,r)}if(g=(u&e.childLanes)!==0,st||g){if(r=Be,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Bt(e,o),jt(r,e,o,-1))}return Cl(),r=al(Error(l(421))),hs(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Af.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,dt=on(o.nextSibling),ut=t,Fe=!0,St=null,e!==null&&(ht[mt++]=It,ht[mt++]=Zt,ht[mt++]=jn,It=e.id,Zt=e.overflow,jn=t),t=pl(t,r.children),t.flags|=4096,t)}function hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function fl(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function mu(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,n,t);else if(e.tag===19)hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fl(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ls(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fl(t,!0,n,null,a);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:du(t),ur();break;case 5:jc(t);break;case 1:ot(t.type)&&Yo(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Me(rs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?fu(e,t,n):(Me(Te,Te.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Me(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return mu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Me(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,iu(e,t,n)}return Wt(e,t,n)}var gu,hl,vu,xu;gu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},hl=function(){},vu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An(Pt.current);var a=null;switch(n){case"input":o=Cr(e,o),r=Cr(e,r),a=[];break;case"select":o=G({},o,{value:void 0}),r=G({},r,{value:void 0}),a=[];break;case"textarea":o=jr(e,o),r=jr(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Qs(n,r);var u;n=null;for(C in o)if(!r.hasOwnProperty(C)&&o.hasOwnProperty(C)&&o[C]!=null)if(C==="style"){var g=o[C];for(u in g)g.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?a||(a=[]):(a=a||[]).push(C,null));for(C in r){var x=r[C];if(g=o!=null?o[C]:void 0,r.hasOwnProperty(C)&&x!==g&&(x!=null||g!=null))if(C==="style")if(g){for(u in g)!g.hasOwnProperty(u)||x&&x.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in x)x.hasOwnProperty(u)&&g[u]!==x[u]&&(n||(n={}),n[u]=x[u])}else n||(a||(a=[]),a.push(C,n)),n=x;else C==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,g=g?g.__html:void 0,x!=null&&g!==x&&(a=a||[]).push(C,x)):C==="children"?typeof x!="string"&&typeof x!="number"||(a=a||[]).push(C,""+x):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(x!=null&&C==="onScroll"&&Ne("scroll",e),a||g===x||(a=[])):(a=a||[]).push(C,x))}n&&(a=a||[]).push("style",n);var C=a;(t.updateQueue=C)&&(t.flags|=4)}},xu=function(e,t,n,r){n!==r&&(t.flags|=4)};function io(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bf(e,t,n){var r=t.pendingProps;switch(Ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return ot(t.type)&&qo(),qe(t),null;case 3:return r=t.stateNode,hr(),Ae(rt),Ae(Qe),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(Sl(St),St=null))),hl(e,t),qe(t),null;case 5:Ka(t);var o=An(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)vu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=An(Pt.current),ts(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[Jr]=a,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(o=0;o<Gr.length;o++)Ne(Gr[o],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":ko(r,a),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ne("invalid",r);break;case"textarea":Mr(r,a),Ne("invalid",r)}Qs(n,a),o=null;for(var u in a)if(a.hasOwnProperty(u)){var g=a[u];u==="children"?typeof g=="string"?r.textContent!==g&&(a.suppressHydrationWarning!==!0&&Ko(r.textContent,g,e),o=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(a.suppressHydrationWarning!==!0&&Ko(r.textContent,g,e),o=["children",""+g]):d.hasOwnProperty(u)&&g!=null&&u==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Gt(r),_o(r,a,!0);break;case"textarea":Gt(r),Lo(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=k(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Tt]=t,e[Jr]=r,gu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Gs(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),o=r;break;case"iframe":case"object":case"embed":Ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<Gr.length;o++)Ne(Gr[o],e);o=r;break;case"source":Ne("error",e),o=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),o=r;break;case"details":Ne("toggle",e),o=r;break;case"input":ko(e,r),o=Cr(e,r),Ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":Mr(e,r),o=jr(e,r),Ne("invalid",e);break;default:o=r}Qs(n,o),g=o;for(a in g)if(g.hasOwnProperty(a)){var x=g[a];a==="style"?So(e,x):a==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ke(e,x)):a==="children"?typeof x=="string"?(n!=="textarea"||x!=="")&&ye(e,x):typeof x=="number"&&ye(e,""+x):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(d.hasOwnProperty(a)?x!=null&&a==="onScroll"&&Ne("scroll",e):x!=null&&ee(e,a,x,u))}switch(n){case"input":Gt(e),_o(e,r,!1);break;case"textarea":Gt(e),Lo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ze(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Yt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)xu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=An(ro.current),An(Pt.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return qe(t),null;case 13:if(Ae(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)bc(),ur(),t.flags|=98560,a=!1;else if(a=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Tt]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else St!==null&&(Sl(St),St=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?Ie===0&&(Ie=3):Cl())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return hr(),hl(e,t),e===null&&qr(t.stateNode.containerInfo),qe(t),null;case 10:return Ia(t.type._context),qe(t),null;case 17:return ot(t.type)&&qo(),qe(t),null;case 19:if(Ae(Te),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)io(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ls(e),u!==null){for(t.flags|=128,io(a,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Te,Te.current&1|2),t.child}e=e.sibling}a.tail!==null&&$e()>xr&&(t.flags|=128,r=!0,io(a,!1),t.lanes=4194304)}else{if(!r)if(e=ls(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Fe)return qe(t),null}else 2*$e()-a.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,io(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$e(),t.sibling=null,n=Te.current,Me(Te,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return El(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function kf(e,t){switch(Ra(t),t.tag){case 1:return ot(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),Ae(rt),Ae(Qe),Ga(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ka(t),null;case 13:if(Ae(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Te),null;case 4:return hr(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var gs=!1,Ye=!1,_f=typeof WeakSet=="function"?WeakSet:Set,X=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function ml(e,t,n){try{n()}catch(r){Re(e,t,r)}}var yu=!1;function Lf(e,t){if(Ea=Ro,e=Yi(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var u=0,g=-1,x=-1,C=0,V=0,B=e,D=null;t:for(;;){for(var q;B!==n||o!==0&&B.nodeType!==3||(g=u+o),B!==a||r!==0&&B.nodeType!==3||(x=u+r),B.nodeType===3&&(u+=B.nodeValue.length),(q=B.firstChild)!==null;)D=B,B=q;for(;;){if(B===e)break t;if(D===n&&++C===o&&(g=u),D===a&&++V===r&&(x=u),(q=B.nextSibling)!==null)break;B=D,D=B.parentNode}B=q}n=g===-1||x===-1?null:{start:g,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ca={focusedElem:e,selectionRange:n},Ro=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var te=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var re=te.memoizedProps,Oe=te.memoizedState,S=t.stateNode,w=S.getSnapshotBeforeUpdate(t.elementType===t.type?re:zt(t.type,re),Oe);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(U){Re(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return te=yu,yu=!1,te}function co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ml(t,n,a)}o=o.next}while(o!==r)}}function vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Jr],delete t[Aa],delete t[sf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bu(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var We=null,Et=!1;function dn(e,t,n){for(n=n.child;n!==null;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Mo,n)}catch{}switch(n.tag){case 5:Ye||gr(n,t);case 6:var r=We,o=Et;We=null,dn(e,t,n),We=r,Et=o,We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),Vr(e)):Na(We,n.stateNode));break;case 4:r=We,o=Et,We=n.stateNode.containerInfo,Et=!0,dn(e,t,n),We=r,Et=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,u=a.destroy;a=a.tag,u!==void 0&&((a&2)!==0||(a&4)!==0)&&ml(n,t,u),o=o.next}while(o!==r)}dn(e,t,n);break;case 1:if(!Ye&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(g){Re(n,t,g)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,dn(e,t,n),Ye=r):dn(e,t,n);break;default:dn(e,t,n)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _f),t.forEach(function(r){var o=Ff.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,u=t,g=u;e:for(;g!==null;){switch(g.tag){case 5:We=g.stateNode,Et=!1;break e;case 3:We=g.stateNode.containerInfo,Et=!0;break e;case 4:We=g.stateNode.containerInfo,Et=!0;break e}g=g.return}if(We===null)throw Error(l(160));_u(a,u,o),We=null,Et=!1;var x=o.alternate;x!==null&&(x.return=null),o.return=null}catch(C){Re(o,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Su(t,e),t=t.sibling}function Su(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),$t(e),r&4){try{co(3,e,e.return),vs(3,e)}catch(re){Re(e,e.return,re)}try{co(5,e,e.return)}catch(re){Re(e,e.return,re)}}break;case 1:Ct(t,e),$t(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Ct(t,e),$t(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var o=e.stateNode;try{ye(o,"")}catch(re){Re(e,e.return,re)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,u=n!==null?n.memoizedProps:a,g=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{g==="input"&&a.type==="radio"&&a.name!=null&&Kn(o,a),Gs(g,u);var C=Gs(g,a);for(u=0;u<x.length;u+=2){var V=x[u],B=x[u+1];V==="style"?So(o,B):V==="dangerouslySetInnerHTML"?ke(o,B):V==="children"?ye(o,B):ee(o,V,B,C)}switch(g){case"input":Qn(o,a);break;case"textarea":Nr(o,a);break;case"select":var D=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var q=a.value;q!=null?Yt(o,!!a.multiple,q,!1):D!==!!a.multiple&&(a.defaultValue!=null?Yt(o,!!a.multiple,a.defaultValue,!0):Yt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Jr]=a}catch(re){Re(e,e.return,re)}}break;case 6:if(Ct(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(re){Re(e,e.return,re)}}break;case 3:if(Ct(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(re){Re(e,e.return,re)}break;case 4:Ct(t,e),$t(e);break;case 13:Ct(t,e),$t(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(bl=$e())),r&4&&Lu(e);break;case 22:if(V=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(C=Ye)||V,Ct(t,e),Ye=C):Ct(t,e),$t(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!V&&(e.mode&1)!==0)for(X=e,V=e.child;V!==null;){for(B=X=V;X!==null;){switch(D=X,q=D.child,D.tag){case 0:case 11:case 14:case 15:co(4,D,D.return);break;case 1:gr(D,D.return);var te=D.stateNode;if(typeof te.componentWillUnmount=="function"){r=D,n=D.return;try{t=r,te.props=t.memoizedProps,te.state=t.memoizedState,te.componentWillUnmount()}catch(re){Re(r,n,re)}}break;case 5:gr(D,D.return);break;case 22:if(D.memoizedState!==null){Cu(B);continue}}q!==null?(q.return=D,X=q):Cu(B)}V=V.sibling}e:for(V=null,B=e;;){if(B.tag===5){if(V===null){V=B;try{o=B.stateNode,C?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(g=B.stateNode,x=B.memoizedProps.style,u=x!=null&&x.hasOwnProperty("display")?x.display:null,g.style.display=Dt("display",u))}catch(re){Re(e,e.return,re)}}}else if(B.tag===6){if(V===null)try{B.stateNode.nodeValue=C?"":B.memoizedProps}catch(re){Re(e,e.return,re)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;V===B&&(V=null),B=B.return}V===B&&(V=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Ct(t,e),$t(e),r&4&&Lu(e);break;case 21:break;default:Ct(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ye(o,""),r.flags&=-33);var a=ku(e);xl(e,a,o);break;case 3:case 4:var u=r.stateNode.containerInfo,g=ku(e);vl(e,g,u);break;default:throw Error(l(161))}}catch(x){Re(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){X=e,zu(e)}function zu(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var o=X,a=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||gs;if(!u){var g=o.alternate,x=g!==null&&g.memoizedState!==null||Ye;g=gs;var C=Ye;if(gs=u,(Ye=x)&&!C)for(X=o;X!==null;)u=X,x=u.child,u.tag===22&&u.memoizedState!==null?ju(o):x!==null?(x.return=u,X=x):ju(o);for(;a!==null;)X=a,zu(a),a=a.sibling;X=o,gs=g,Ye=C}Eu(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,X=a):Eu(e)}}function Eu(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Cc(t,a,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,u,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&n.focus();break;case"img":x.src&&(n.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var V=C.memoizedState;if(V!==null){var B=V.dehydrated;B!==null&&Vr(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||t.flags&512&&gl(t)}catch(D){Re(t,t.return,D)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Cu(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function ju(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vs(4,t)}catch(x){Re(t,n,x)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(x){Re(t,o,x)}}var a=t.return;try{gl(t)}catch(x){Re(t,a,x)}break;case 5:var u=t.return;try{gl(t)}catch(x){Re(t,u,x)}}}catch(x){Re(t,t.return,x)}if(t===e){X=null;break}var g=t.sibling;if(g!==null){g.return=t.return,X=g;break}X=t.return}}var zf=Math.ceil,xs=Y.ReactCurrentDispatcher,yl=Y.ReactCurrentOwner,xt=Y.ReactCurrentBatchConfig,_e=0,Be=null,De=null,Ke=0,pt=0,vr=sn(0),Ie=0,uo=null,Tn=0,ys=0,wl=0,po=null,at=null,bl=0,xr=1/0,Kt=null,ws=!1,kl=null,pn=null,bs=!1,fn=null,ks=0,fo=0,_l=null,_s=-1,Ls=0;function et(){return(_e&6)!==0?$e():_s!==-1?_s:_s=$e()}function hn(e){return(e.mode&1)===0?1:(_e&2)!==0&&Ke!==0?Ke&-Ke:cf.transition!==null?(Ls===0&&(Ls=ki()),Ls):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Ni(e.type)),e)}function jt(e,t,n,r){if(50<fo)throw fo=0,_l=null,Error(l(185));Rr(e,n,r),((_e&2)===0||e!==Be)&&(e===Be&&((_e&2)===0&&(ys|=n),Ie===4&&mn(e,Ke)),lt(e,r),n===1&&_e===0&&(t.mode&1)===0&&(xr=$e()+500,Jo&&ln()))}function lt(e,t){var n=e.callbackNode;ip(e,t);var r=Fo(e,e===Be?Ke:0);if(r===0)n!==null&&yi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yi(n),t===1)e.tag===0?lf(Nu.bind(null,e)):gc(Nu.bind(null,e)),rf(function(){(_e&6)===0&&ln()}),n=null;else{switch(_i(r)){case 1:n=na;break;case 4:n=wi;break;case 16:n=jo;break;case 536870912:n=bi;break;default:n=jo}n=Du(n,Mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mu(e,t){if(_s=-1,Ls=0,(_e&6)!==0)throw Error(l(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=Fo(e,e===Be?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ss(e,r);else{t=r;var o=_e;_e|=2;var a=Fu();(Be!==e||Ke!==t)&&(Kt=null,xr=$e()+500,Rn(e,t));do try{jf();break}catch(g){Au(e,g)}while(!0);Va(),xs.current=a,_e=o,De!==null?t=0:(Be=null,Ke=0,t=Ie)}if(t!==0){if(t===2&&(o=ra(e),o!==0&&(r=o,t=Ll(e,o))),t===1)throw n=uo,Rn(e,0),mn(e,r),lt(e,$e()),n;if(t===6)mn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Ef(o)&&(t=Ss(e,r),t===2&&(a=ra(e),a!==0&&(r=a,t=Ll(e,a))),t===1))throw n=uo,Rn(e,0),mn(e,r),lt(e,$e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:$n(e,at,Kt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=bl+500-$e(),10<t)){if(Fo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ma($n.bind(null,e,at,Kt),t);break}$n(e,at,Kt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-_t(r);a=1<<u,u=t[u],u>o&&(o=u),r&=~a}if(r=o,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zf(r/1960))-r,10<r){e.timeoutHandle=Ma($n.bind(null,e,at,Kt),r);break}$n(e,at,Kt);break;case 5:$n(e,at,Kt);break;default:throw Error(l(329))}}}return lt(e,$e()),e.callbackNode===n?Mu.bind(null,e):null}function Ll(e,t){var n=po;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Ss(e,t),e!==2&&(t=at,at=n,t!==null&&Sl(t)),e}function Sl(e){at===null?at=e:at.push.apply(at,e)}function Ef(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Lt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~wl,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Nu(e){if((_e&6)!==0)throw Error(l(327));yr();var t=Fo(e,0);if((t&1)===0)return lt(e,$e()),null;var n=Ss(e,t);if(e.tag!==0&&n===2){var r=ra(e);r!==0&&(t=r,n=Ll(e,r))}if(n===1)throw n=uo,Rn(e,0),mn(e,t),lt(e,$e()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,at,Kt),lt(e,$e()),null}function zl(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(xr=$e()+500,Jo&&ln())}}function Pn(e){fn!==null&&fn.tag===0&&(_e&6)===0&&yr();var t=_e;_e|=1;var n=xt.transition,r=Ce;try{if(xt.transition=null,Ce=1,e)return e()}finally{Ce=r,xt.transition=n,_e=t,(_e&6)===0&&ln()}}function El(){pt=vr.current,Ae(vr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nf(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Ra(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:hr(),Ae(rt),Ae(Qe),Ga();break;case 5:Ka(r);break;case 4:hr();break;case 13:Ae(Te);break;case 19:Ae(Te);break;case 10:Ia(r.type._context);break;case 22:case 23:El()}n=n.return}if(Be=e,De=e=gn(e.current,null),Ke=pt=t,Ie=0,uo=null,wl=ys=Tn=0,at=po=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var u=a.next;a.next=o,r.next=u}n.pending=r}Nn=null}return e}function Au(e,t){do{var n=De;try{if(Va(),is.current=ps,cs){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}cs=!1}if(Fn=0,Ze=Ve=Pe=null,oo=!1,so=0,yl.current=null,n===null||n.return===null){Ie=1,uo=t,De=null;break}e:{var a=e,u=n.return,g=n,x=t;if(t=Ke,g.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=x,V=g,B=V.tag;if((V.mode&1)===0&&(B===0||B===11||B===15)){var D=V.alternate;D?(V.updateQueue=D.updateQueue,V.memoizedState=D.memoizedState,V.lanes=D.lanes):(V.updateQueue=null,V.memoizedState=null)}var q=ru(u);if(q!==null){q.flags&=-257,ou(q,u,g,a,t),q.mode&1&&nu(a,C,t),t=q,x=C;var te=t.updateQueue;if(te===null){var re=new Set;re.add(x),t.updateQueue=re}else te.add(x);break e}else{if((t&1)===0){nu(a,C,t),Cl();break e}x=Error(l(426))}}else if(Fe&&g.mode&1){var Oe=ru(u);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),ou(Oe,u,g,a,t),Da(mr(x,g));break e}}a=x=mr(x,g),Ie!==4&&(Ie=2),po===null?po=[a]:po.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var S=eu(a,x,t);Ec(a,S);break e;case 1:g=x;var w=a.type,E=a.stateNode;if((a.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(pn===null||!pn.has(E)))){a.flags|=65536,t&=-t,a.lanes|=t;var U=tu(a,g,t);Ec(a,U);break e}}a=a.return}while(a!==null)}Pu(n)}catch(oe){t=oe,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Fu(){var e=xs.current;return xs.current=ps,e===null?ps:e}function Cl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Be===null||(Tn&268435455)===0&&(ys&268435455)===0||mn(Be,Ke)}function Ss(e,t){var n=_e;_e|=2;var r=Fu();(Be!==e||Ke!==t)&&(Kt=null,Rn(e,t));do try{Cf();break}catch(o){Au(e,o)}while(!0);if(Va(),_e=n,xs.current=r,De!==null)throw Error(l(261));return Be=null,Ke=0,Ie}function Cf(){for(;De!==null;)Tu(De)}function jf(){for(;De!==null&&!Xd();)Tu(De)}function Tu(e){var t=Ou(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Pu(e):De=t,yl.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=bf(n,t,pt),n!==null){De=n;return}}else{if(n=kf(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ie===0&&(Ie=5)}function $n(e,t,n){var r=Ce,o=xt.transition;try{xt.transition=null,Ce=1,Mf(e,t,n,r)}finally{xt.transition=o,Ce=r}return null}function Mf(e,t,n,r){do yr();while(fn!==null);if((_e&6)!==0)throw Error(l(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(cp(e,a),e===Be&&(De=Be=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bs||(bs=!0,Du(jo,function(){return yr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=xt.transition,xt.transition=null;var u=Ce;Ce=1;var g=_e;_e|=4,yl.current=null,Lf(e,n),Su(n,e),Gp(Ca),Ro=!!Ea,Ca=Ea=null,e.current=n,Sf(n),ep(),_e=g,Ce=u,xt.transition=a}else e.current=n;if(bs&&(bs=!1,fn=e,ks=o),a=e.pendingLanes,a===0&&(pn=null),rp(n.stateNode),lt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ws)throw ws=!1,e=kl,kl=null,e;return(ks&1)!==0&&e.tag!==0&&yr(),a=e.pendingLanes,(a&1)!==0?e===_l?fo++:(fo=0,_l=e):fo=0,ln(),null}function yr(){if(fn!==null){var e=_i(ks),t=xt.transition,n=Ce;try{if(xt.transition=null,Ce=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,ks=0,(_e&6)!==0)throw Error(l(331));var o=_e;for(_e|=4,X=e.current;X!==null;){var a=X,u=a.child;if((X.flags&16)!==0){var g=a.deletions;if(g!==null){for(var x=0;x<g.length;x++){var C=g[x];for(X=C;X!==null;){var V=X;switch(V.tag){case 0:case 11:case 15:co(8,V,a)}var B=V.child;if(B!==null)B.return=V,X=B;else for(;X!==null;){V=X;var D=V.sibling,q=V.return;if(wu(V),V===C){X=null;break}if(D!==null){D.return=q,X=D;break}X=q}}}var te=a.alternate;if(te!==null){var re=te.child;if(re!==null){te.child=null;do{var Oe=re.sibling;re.sibling=null,re=Oe}while(re!==null)}}X=a}}if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,X=u;else e:for(;X!==null;){if(a=X,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:co(9,a,a.return)}var S=a.sibling;if(S!==null){S.return=a.return,X=S;break e}X=a.return}}var w=e.current;for(X=w;X!==null;){u=X;var E=u.child;if((u.subtreeFlags&2064)!==0&&E!==null)E.return=u,X=E;else e:for(u=w;X!==null;){if(g=X,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:vs(9,g)}}catch(oe){Re(g,g.return,oe)}if(g===u){X=null;break e}var U=g.sibling;if(U!==null){U.return=g.return,X=U;break e}X=g.return}}if(_e=o,ln(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Mo,e)}catch{}r=!0}return r}finally{Ce=n,xt.transition=t}}return!1}function Ru(e,t,n){t=mr(n,t),t=eu(e,t,1),e=un(e,t,1),t=et(),e!==null&&(Rr(e,1,t),lt(e,t))}function Re(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=mr(n,e),e=tu(t,e,1),t=un(t,e,1),e=et(),t!==null&&(Rr(t,1,e),lt(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ke&n)===n&&(Ie===4||Ie===3&&(Ke&130023424)===Ke&&500>$e()-bl?Rn(e,0):wl|=n),lt(e,t)}function $u(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ao,Ao<<=1,(Ao&130023424)===0&&(Ao=4194304)));var n=et();e=Bt(e,t),e!==null&&(Rr(e,t,n),lt(e,n))}function Af(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function Ff(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),$u(e,n)}var Ou;Ou=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)st=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return st=!1,wf(e,t,n);st=(e.flags&131072)!==0}else st=!1,Fe&&(t.flags&1048576)!==0&&vc(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ms(e,t),e=t.pendingProps;var o=lr(t,Qe.current);fr(t,n),o=Ja(null,t,r,e,o,n);var a=Xa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(a=!0,Yo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ua(t),o.updater=fs,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=cl(null,t,r,!0,a,n)):(t.tag=0,Fe&&a&&Pa(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Pf(r),e=zt(r,e),o){case 0:t=il(null,t,r,e,n);break e;case 1:t=uu(null,t,r,e,n);break e;case 11:t=su(null,t,r,e,n);break e;case 14:t=au(null,t,r,zt(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),il(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),uu(e,t,r,o,n);case 3:e:{if(du(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,o=a.element,zc(e,t),as(t,r,null,n);var u=t.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=mr(Error(l(423)),t),t=pu(e,t,r,n,o);break e}else if(r!==o){o=mr(Error(l(424)),t),t=pu(e,t,r,n,o);break e}else for(dt=on(t.stateNode.containerInfo.firstChild),ut=t,Fe=!0,St=null,n=Lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=Wt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return jc(t),e===null&&Oa(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,u=o.children,ja(r,o)?u=null:a!==null&&ja(r,a)&&(t.flags|=32),cu(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return fu(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),su(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,u=o.value,Me(rs,r._currentValue),r._currentValue=u,a!==null)if(Lt(a.value,u)){if(a.children===o.children&&!rt.current){t=Wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var g=a.dependencies;if(g!==null){u=a.child;for(var x=g.firstContext;x!==null;){if(x.context===r){if(a.tag===1){x=Ut(-1,n&-n),x.tag=2;var C=a.updateQueue;if(C!==null){C=C.shared;var V=C.pending;V===null?x.next=x:(x.next=V.next,V.next=x),C.pending=x}}a.lanes|=n,x=a.alternate,x!==null&&(x.lanes|=n),Za(a.return,n,t),g.lanes|=n;break}x=x.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(l(341));u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),Za(u,n,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fr(t,n),o=gt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=zt(r,t.pendingProps),o=zt(r.type,o),au(e,t,r,o,n);case 15:return lu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),ms(e,t),t.tag=1,ot(r)?(e=!0,Yo(t)):e=!1,fr(t,n),Jc(t,r,o),sl(t,r,o,n),cl(null,t,r,!0,e,n);case 19:return mu(e,t,n);case 22:return iu(e,t,n)}throw Error(l(156,t.tag))};function Du(e,t){return xi(e,t)}function Tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Tf(e,t,n,r)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Z)return 11;if(e===ve)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zs(e,t,n,r,o,a){var u=2;if(r=e,typeof e=="function")jl(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case W:return On(n.children,o,a,t);case pe:u=8,o|=8;break;case ge:return e=yt(12,n,t,o|2),e.elementType=ge,e.lanes=a,e;case R:return e=yt(13,n,t,o),e.elementType=R,e.lanes=a,e;case $:return e=yt(19,n,t,o),e.elementType=$,e.lanes=a,e;case fe:return Es(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:u=10;break e;case ue:u=9;break e;case Z:u=11;break e;case ve:u=14;break e;case he:u=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(u,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function On(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Es(e,t,n,r){return e=yt(22,e,r,t),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ml(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Al(e,t,n,r,o,a,u,g,x){return e=new Rf(e,t,n,g,x),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ua(a),e}function $f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hu(e){if(!e)return an;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ot(n))return hc(e,n,t)}return t}function Vu(e,t,n,r,o,a,u,g,x){return e=Al(n,r,!0,e,o,a,u,g,x),e.context=Hu(null),n=e.current,r=et(),o=hn(n),a=Ut(r,o),a.callback=t??null,un(n,a,o),e.current.lanes=o,Rr(e,o,r),lt(e,r),e}function Cs(e,t,n,r){var o=t.current,a=et(),u=hn(o);return n=Hu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(a,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,u),e!==null&&(jt(e,o,u,a),ss(e,o,u)),u}function js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fl(e,t){Iu(e,t),(e=e.alternate)&&Iu(e,t)}function Of(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tl(e){this._internalRoot=e}Ms.prototype.render=Tl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Cs(e,t,null,null)},Ms.prototype.unmount=Tl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Cs(null,e,null,null)}),t[Ht]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=zi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&ji(e)}};function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function Df(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var C=js(u);a.call(C)}}var u=Vu(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=u,e[Ht]=u.current,qr(e.nodeType===8?e.parentNode:e),Pn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var g=r;r=function(){var C=js(x);g.call(C)}}var x=Al(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=x,e[Ht]=x.current,qr(e.nodeType===8?e.parentNode:e),Pn(function(){Cs(t,x,n,r)}),x}function As(e,t,n,r,o){var a=n._reactRootContainer;if(a){var u=a;if(typeof o=="function"){var g=o;o=function(){var x=js(u);g.call(x)}}Cs(t,u,e,o)}else u=Df(n,t,e,o,r);return js(u)}Li=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(sa(t,n|1),lt(t,$e()),(_e&6)===0&&(xr=$e()+500,ln()))}break;case 13:Pn(function(){var r=Bt(e,1);if(r!==null){var o=et();jt(r,e,1,o)}}),Fl(e,1)}},aa=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=et();jt(t,e,134217728,n)}Fl(e,134217728)}},Si=function(e){if(e.tag===13){var t=hn(e),n=Bt(e,t);if(n!==null){var r=et();jt(n,e,t,r)}Fl(e,t)}},zi=function(){return Ce},Ei=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}},Js=function(e,t,n){switch(t){case"input":if(Qn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Go(r);if(!o)throw Error(l(90));bo(r),Qn(r,o)}}}break;case"textarea":Nr(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}},di=zl,pi=Pn;var Hf={usingClientEntryPoint:!1,Events:[Xr,sr,Go,ci,ui,zl]},ho={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vf={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gi(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{Mo=Fs.inject(Vf),Ft=Fs}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pl(t))throw Error(l(200));return $f(e,t,null,n)},it.createRoot=function(e,t){if(!Pl(e))throw Error(l(299));var n=!1,r="",o=Zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Al(e,1,!1,null,null,n,!1,r,o),e[Ht]=t.current,qr(e.nodeType===8?e.parentNode:e),new Tl(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=gi(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return Pn(e)},it.hydrate=function(e,t,n){if(!Ns(t))throw Error(l(200));return As(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!Pl(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",u=Zu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Vu(t,null,e,1,n??null,o,!1,a,u),e[Ht]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ms(t)},it.render=function(e,t,n){if(!Ns(t))throw Error(l(200));return As(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(l(40));return e._reactRootContainer?(Pn(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1},it.unstable_batchedUpdates=zl,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return As(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var Ju;function qf(){if(Ju)return Ol.exports;Ju=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Ol.exports=Gf(),Ol.exports}var Xu;function Yf(){if(Xu)return Ts;Xu=1;var s=qf();return Ts.createRoot=s.createRoot,Ts.hydrateRoot=s.hydrateRoot,Ts}var Jf=Yf();const Xf=Zf(Jf),e0="modulepreload",t0=function(s,i){return new URL(s,i).href},ed={},go=function(i,l,c){let d=Promise.resolve();if(l&&l.length>0){let m=function(z){return Promise.all(z.map(_=>Promise.resolve(_).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};const v=document.getElementsByTagName("link"),y=document.querySelector("meta[property=csp-nonce]"),L=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=m(l.map(z=>{if(z=t0(z,c),z in ed)return;ed[z]=!0;const _=z.endsWith(".css"),j=_?'[rel="stylesheet"]':"";if(!!c)for(let N=v.length-1;N>=0;N--){const O=v[N];if(O.href===z&&(!_||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${z}"]${j}`))return;const I=document.createElement("link");if(I.rel=_?"stylesheet":e0,_||(I.as="script"),I.crossOrigin="",I.href=z,L&&I.setAttribute("nonce",L),document.head.appendChild(I),_)return new Promise((N,O)=>{I.addEventListener("load",N),I.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${z}`)))})}))}function h(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return d.then(m=>{for(const v of m||[])v.status==="rejected"&&h(v.reason);return i().catch(h)})},ql={toggle:()=>go(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>go(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>go(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>go(()=>import("./press-h_enDfSn.js"),[],import.meta.url),slide:()=>go(()=>import("./slide-CxPKTNuS.js"),[],import.meta.url)};let kr=null,td=!1;const _d=new Set,Is=new Map,Ps=new Map;function ti(){if(kr)return kr;const s=window.AudioContext||window.webkitAudioContext;return s?(kr=new s,kr):null}function ni(s){if(Is.has(s))return Promise.resolve(Is.get(s));if(Ps.has(s))return Ps.get(s);const i=ti();if(!i||!ql[s])return Promise.resolve(null);const l=ql[s]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>i.decodeAudioData(c)).then(c=>(Is.set(s,c),c)).catch(()=>null).finally(()=>Ps.delete(s));return Ps.set(s,l),l}function n0(){const s=ti();s&&(s.state==="suspended"&&s.resume(),_d.forEach(ni))}function r0(s){if(typeof window>"u"||!ql[s])return;if(_d.add(s),kr&&kr.state!=="suspended"){ni(s);return}if(td)return;td=!0;const i={capture:!0,passive:!0},l=()=>{window.removeEventListener("pointerdown",l,i),window.removeEventListener("keydown",l,i),n0()};window.addEventListener("pointerdown",l,i),window.addEventListener("keydown",l,i)}const o0=120;function s0(s,i=1){if(typeof window>"u"||i<=0)return;const l=ti();if(!l)return;l.state==="suspended"&&l.resume();const c=Is.get(s);if(!c){const d=performance.now();ni(s).then(h=>{h&&performance.now()-d<=o0&&nd(l,h,i)});return}nd(l,c,i)}function nd(s,i,l){const c=s.createBufferSource(),d=s.createGain();d.gain.value=Math.min(1,l),c.buffer=i,c.connect(d).connect(s.destination),c.start()}const Ld=.7,Sd=p.createContext({enabled:!0,volume:Ld});function a0({enabled:s=!0,volume:i=Ld,children:l}){return f.jsx(Sd.Provider,{value:{enabled:s,volume:i},children:l})}function wo(s,i=!0){const{enabled:l,volume:c}=p.useContext(Sd),d=l&&i;return p.useEffect(()=>{d&&r0(s)},[s,d]),p.useCallback(()=>{d&&s0(s,c)},[s,d,c])}const l0=`/* ============================================================
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
  --sc-color-tooltip-surface: var(--sc-p-color-warm-gray-800);
  --sc-color-tooltip-text: var(--sc-p-color-warm-gray-50);
  --sc-color-tooltip-glass-tint: rgb(var(--sc-p-color-white-rgb) / 0.24);
  --sc-color-tooltip-glass-text: var(--sc-p-color-warm-gray-800);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-tooltip: var(--sc-p-radius-input);
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
  --sc-shadow-tooltip-plate: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-tooltip-glass-rim: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.30), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.15), 6px 6px 24px 0 rgb(100 91 79 / 0.14);
  --sc-shadow-tooltip-glass-text: 0 0 2px rgb(var(--sc-p-color-white-rgb) / 0.60);
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
  --sc-motion-tooltip-grow-from: 1;
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
  --sc-size-tooltip-arrow: var(--sc-p-space-4);
  --sc-size-tooltip-arrow-tip: 0px;
  --sc-size-tooltip-arrow-fillet: 0px;
  --sc-size-tooltip-lift: var(--sc-p-space-4);
  --sc-size-tooltip-glass-frosted-frost: 9px;
  --sc-size-tooltip-glass-frosted-refraction: 65;
  --sc-size-tooltip-glass-frosted-depth: 68;
  --sc-size-tooltip-glass-frosted-splay: 57;
  --sc-size-tooltip-glass-frosted-saturation: 160;
  --sc-size-tooltip-glass-frosted-light: 30;
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
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-padding-block-tooltip: var(--sc-p-space-8);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-component-gap-tooltip: var(--sc-p-space-8);
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
  --sc-color-tooltip-surface: var(--sc-p-color-warm-gray-50);
  --sc-color-tooltip-text: var(--sc-p-color-warm-gray-800);
  --sc-color-tooltip-glass-tint: rgb(var(--sc-p-color-black-rgb) / 0.32);
  --sc-color-tooltip-glass-text: var(--sc-p-color-dark-text-primary);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-tooltip: var(--sc-p-radius-input);
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
  --sc-shadow-tooltip-plate: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-tooltip-glass-rim: inset 1px 1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.30), inset -1px -1px 0 0 rgb(var(--sc-p-color-white-rgb) / 0.15), 6px 6px 24px 0 rgb(0 0 0 / 0.30);
  --sc-shadow-tooltip-glass-text: 0 0 2px rgb(0 0 0 / 0.70);
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
  --sc-motion-tooltip-grow-from: 1;
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
  --sc-size-tooltip-arrow: var(--sc-p-space-4);
  --sc-size-tooltip-arrow-tip: 0px;
  --sc-size-tooltip-arrow-fillet: 0px;
  --sc-size-tooltip-lift: var(--sc-p-space-4);
  --sc-size-tooltip-glass-frosted-frost: 9px;
  --sc-size-tooltip-glass-frosted-refraction: 65;
  --sc-size-tooltip-glass-frosted-depth: 68;
  --sc-size-tooltip-glass-frosted-splay: 57;
  --sc-size-tooltip-glass-frosted-saturation: 160;
  --sc-size-tooltip-glass-frosted-light: 30;
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
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-padding-block-tooltip: var(--sc-p-space-8);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-component-gap-tooltip: var(--sc-p-space-8);
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}
`,rd=5e-4,i0=6e3,od=60;function c0({stiffness:s,damping:i,mass:l}){let c=0,d=0;const h=.001,m=[0];let v=0,y=0;for(;v<i0;){const L=(-s*(c-1)-i*d)/l;if(d+=L*h,c+=d*h,v+=1,m.push(c),c>y&&(y=c),Math.abs(c-1)<rd&&Math.abs(d)<rd)break}return{trace:m,settleMs:v,overshoot:Math.max(0,y-1)}}function Bs(s){const{trace:i,settleMs:l,overshoot:c}=c0(s),d=[];for(let h=0;h<od;h+=1){const m=Math.round(h/(od-1)*(i.length-1));d.push(+i[m].toFixed(4))}return d[d.length-1]=1,{easing:`linear(${d.join(", ")})`,settleMs:l,overshoot:c}}const Rs=60,sd={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function u0([s,i,l,c],d){const h=(y,L,z)=>3*(1-z)**2*z*y+3*(1-z)*z**2*L+z**3;let m=0,v=1;for(let y=0;y<40;y+=1){const L=(m+v)/2;h(s,l,L)<d?m=L:v=L}return h(i,c,(m+v)/2)}function d0(s){const i=[];for(const l of s.split(",")){const[c,...d]=l.trim().split(/\s+/);d.length||i.push({v:+c,x:null});for(const h of d)i.push({v:+c,x:parseFloat(h)/100})}i[0].x===null&&(i[0].x=0),i.at(-1).x===null&&(i.at(-1).x=1);for(let l=1;l<i.length;l+=1){if(i[l].x!==null){i[l].x=Math.max(i[l].x,i[l-1].x);continue}let c=l;for(;i[c].x===null;)c+=1;const d=(i[c].x-i[l-1].x)/(c-l+1);for(let h=l;h<c;h+=1)i[h].x=i[h-1].x+d}return i}function p0(s,i){for(let l=1;l<s.length;l+=1)if(i<=s[l].x){const c=s[l-1],d=s[l],h=d.x-c.x;return h?c.v+(i-c.x)/h*(d.v-c.v):d.v}return s.at(-1).v}function ri(s){var d;const i=(s||"ease").trim(),l=i.match(/^linear\((.+)\)$/);if(l){const h=d0(l[1]);return Array.from({length:Rs},(m,v)=>p0(h,v/(Rs-1)))}const c=((d=i.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:d[1].split(",").map(Number))||sd[i]||sd.ease;return Array.from({length:Rs},(h,m)=>u0(c,m/(Rs-1)))}function oi(s){const i=s.map((c,d)=>Math.abs(s[Math.min(d+1,s.length-1)]-s[Math.max(d-1,0)]));i[0]=0,i[i.length-1]=0;const l=Math.max(...i)||1;return i.map(c=>c/l)}const f0=s=>(s.endsWith("ms")?parseFloat(s):parseFloat(s)*1e3)||0;function h0(s){const i=[];let l=0,c="";for(const d of s)d==="("&&(l+=1),d===")"&&(l-=1),d===","&&l===0?(i.push(c.trim()),c=""):c+=d;return i.push(c.trim()),i}function Ln(s,i){const l=`--sc-motion-${i}`,c=getComputedStyle(s),d=_=>parseFloat(c.getPropertyValue(_))||0,h=document.createElement("span");h.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${l}-travel-duration),var(${l}-press-lean-duration,0ms);transition-timing-function:var(${l}-travel-easing),var(--sc-motion-press-easing);`,s.appendChild(h);const m=getComputedStyle(h),[v,y]=m.transitionDuration.split(",").map(_=>f0(_.trim())),[L,z]=h0(m.transitionTimingFunction);return h.remove(),{travelDur:v,travelEasing:L,leanDur:y,leanEasing:z,stretch:d(`${l}-stretch`),squash:d(`${l}-squash`),lean:d(`${l}-press-lean`)}}const Bn=s=>!!s&&(s.stretch>0||s.squash>0||s.lean>0),Un=()=>{var s;return typeof window<"u"&&!!((s=window.matchMedia)!=null&&s.call(window,"(prefers-reduced-motion: reduce)").matches)};function Wn({l:s,r:i,h:l},c,d=!0){return{transform:`translate(${s}px, ${d?(c-l)/2:0}px)`,width:`${i-s}px`,height:`${l}px`}}function Er(s,i,l,c,d=!0){const h=ri(s.travelEasing),m=oi(h);return h.map((v,y)=>{const L=s.stretch*c*m[y],z=i.l+(l.l-i.l)*v-L/2,_=i.r+(l.r-i.r)*v+L/2;return Wn({l:z,r:_,h:c*(1-s.squash*m[y])},c,d)})}function si(s,i,l){const c=Math.sign(l.l+l.r-(i.l+i.r)),d=s.lean*.25*Math.abs((l.l+l.r-(i.l+i.r))/2);return c>0?{...i,r:i.r+d}:c<0?{...i,l:i.l-d}:i}function _r(s,i,l,c,{hold:d=!1,onDone:h}={}){s.getAnimations().forEach(v=>v.cancel());const m=s.animate(i,{duration:l,easing:c,fill:"forwards"});return d||(m.onfinish=()=>{m.cancel(),h==null||h()}),m}function At(s){const i=s.getBoundingClientRect(),l=s.currentCSSZoom||1;return{left:i.left/l,right:i.right/l,width:i.width/l,top:i.top/l,height:i.height/l}}function ai(s,i){const l=At(s);return{l:l.left-i.left,r:l.right-i.left}}function m0(s,i){const l=Ln(s,"switch"),c=getComputedStyle(s),d=parseFloat(c.width),h=parseFloat(c.height),m=parseFloat(getComputedStyle(i).height),v=(h-m)/2;return{...l,knob:m,travel:d-m-2*v}}const yo=(s,i)=>({l:i?s.travel:0,r:(i?s.travel:0)+s.knob}),g0=(s,i)=>si(s,yo(s,i),yo(s,!i)),v0=(s,i,l)=>Er(s,i,l,s.knob,!1),x0=(s,i,l)=>[Wn({...i,h:s.knob},s.knob,!1),Wn({...l,h:s.knob},s.knob,!1)],y0="_field_tf6ns_39",w0="_disabled_tf6ns_49",b0="_controlWrapper_tf6ns_53",k0="_input_tf6ns_59",_0="_track_tf6ns_69",L0="_glyphs_tf6ns_84",S0="_glyphOn_tf6ns_99",z0="_glyphOff_tf6ns_105",E0="_thumb_tf6ns_115",C0="_label_tf6ns_190",Ot={field:y0,disabled:w0,controlWrapper:b0,input:k0,track:_0,glyphs:L0,glyphOn:S0,glyphOff:z0,thumb:E0,label:C0};function j0({checked:s=!1,disabled:i=!1,onChange:l,label:c,sound:d=!0,glyphs:h=!0,className:m=""}){const v=p.useId(),y=wo("toggle",d),L=p.useRef(null),z=p.useRef(null),_=p.useRef(null),j=p.useRef(null),M=p.useRef(null),I=p.useRef(!1),N=()=>{if(i||Un()||!z.current||!_.current)return null;const P=m0(z.current,_.current);return Bn(P)?P:null},O=()=>{var P,W;(P=j.current)==null||P.cancel(),j.current=null,M.current=null,(W=z.current)==null||W.removeAttribute("data-driven")},J=(P,W,pe,ge)=>{var ue;(ue=j.current)==null||ue.cancel(),z.current.setAttribute("data-driven","");const ne=_.current.animate(P,{duration:W,easing:pe,fill:"forwards"});j.current=ne,ge||(ne.onfinish=()=>{j.current===ne&&O()})},Q=(P,W,pe)=>J(v0(P,W,yo(P,pe)),P.travelDur,"linear",!1),ee=()=>{const P=N();if(!P||P.lean<=0)return;const W=L.current.checked,pe=M.current||yo(P,W);M.current=g0(P,W),I.current=!1,J(x0(P,pe,M.current),P.leanDur,P.leanEasing,!0)},Y=()=>{if(!M.current)return;const P=N();if(!P){O();return}const W=M.current;M.current=null,Q(P,W,L.current.checked)},le=()=>setTimeout(()=>{I.current||Y()},0);return f.jsxs("label",{htmlFor:v,className:`${Ot.field} ${i?Ot.disabled:""} ${m}`,onPointerDown:ee,onPointerUp:le,onPointerLeave:Y,onPointerCancel:Y,children:[f.jsxs("span",{className:Ot.controlWrapper,children:[f.jsx("input",{ref:L,id:v,type:"checkbox",role:"switch",className:Ot.input,checked:s,disabled:i,onChange:P=>{y(),I.current=!0;const W=N();if(W){const pe=M.current||yo(W,!P.target.checked);M.current=null,Q(W,pe,P.target.checked)}else O();l==null||l(P)}}),f.jsxs("span",{ref:z,className:Ot.track,"aria-hidden":"true",children:[h&&f.jsxs("span",{className:Ot.glyphs,children:[f.jsx("span",{className:Ot.glyphOn}),f.jsx("span",{className:Ot.glyphOff})]}),f.jsx("span",{ref:_,className:Ot.thumb})]})]}),c&&f.jsx("span",{className:Ot.label,children:c})]})}const M0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),p.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),N0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),p.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),A0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),p.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),F0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),p.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),T0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),p.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),P0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),p.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),R0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),p.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),$0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),p.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),O0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),p.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),D0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),p.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),H0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),p.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),V0=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),p.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),I0=p.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ft=p.forwardRef((s,i)=>{const{alt:l,color:c,size:d,weight:h,mirrored:m,children:v,weights:y,...L}=s,{color:z="currentColor",size:_,weight:j="regular",mirrored:M=!1,...I}=p.useContext(I0);return p.createElement("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:d??_,height:d??_,fill:c??z,viewBox:"0 0 256 256",transform:m||M?"scale(-1, 1)":void 0,...I,...L},!!l&&p.createElement("title",null,l),v,y.get(h??j))});ft.displayName="IconBase";const zd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:M0}));zd.displayName="ArrowRightIcon";const Z0=zd,Ed=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:N0}));Ed.displayName="CalendarBlankIcon";const B0=Ed,Cd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:A0}));Cd.displayName="CaretDownIcon";const U0=Cd,jd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:F0}));jd.displayName="ClockIcon";const W0=jd,Md=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:T0}));Md.displayName="CopyIcon";const K0=Md,Nd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:P0}));Nd.displayName="EnvelopeSimpleIcon";const Q0=Nd,Ad=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:R0}));Ad.displayName="EyeIcon";const G0=Ad,Fd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:$0}));Fd.displayName="MagnifyingGlassIcon";const q0=Fd,Td=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:O0}));Td.displayName="MapPinIcon";const Y0=Td,Pd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:D0}));Pd.displayName="MinusIcon";const J0=Pd,Rd=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:H0}));Rd.displayName="PlusIcon";const X0=Rd,$d=p.forwardRef((s,i)=>p.createElement(ft,{ref:i,...s,weights:V0}));$d.displayName="XIcon";const e1=$d,t1="_icon_1vxzc_2",n1={icon:t1},r1={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Us({glyph:s,weight:i="regular",size:l="1em",label:c,className:d="",...h}){if(!s)return null;const m=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},v=r1[l];return v?f.jsx("span",{className:`${n1.icon} ${d}`.trim(),style:{fontSize:v},children:f.jsx(s,{weight:i,size:"1em",...m,...h})}):f.jsx(s,{weight:i,size:l,className:d,...m,...h})}const o1="_stepper_1wvfb_28",s1="_button_1wvfb_38",a1="_glyph_1wvfb_79",l1="_readout_1wvfb_101",i1="_digits_1wvfb_123",c1="_disabled_1wvfb_134",xn={stepper:o1,button:s1,glyph:a1,readout:l1,digits:i1,disabled:c1},u1=400,d1=80;function p1({value:s,onChange:i,min:l=-1/0,max:c=1/0,step:d=1,label:h,disabled:m=!1,sound:v=!0,className:y=""}){const L=wo("tick",v),z=p.useRef(s);z.current=s;const _=p.useRef(null),j=p.useRef(null),M=W=>Math.max(l,Math.min(c,W)),I=W=>{const pe=M(z.current+W);pe!==z.current&&(z.current=pe,i==null||i(pe),L())},N=()=>{_.current&&clearTimeout(_.current),j.current&&clearInterval(j.current),_.current=null,j.current=null};p.useEffect(()=>N,[]);const O=p.useRef(null),J=p.useRef(null),Q=p.useRef(s);p.useLayoutEffect(()=>{const W=Q.current;Q.current=s;const pe=O.current,ge=J.current;if(W===s||m||!pe||!ge||Un())return;const ne=Ln(pe,"stepper"),ue=parseFloat(getComputedStyle(pe).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ue>0||Bn(ne)))return;const Z=(s>W?1:-1)*ue*At(pe).height,R=ri(ne.travelEasing),$=oi(R),ve=R.map((he,fe)=>({transform:`translateY(${Z*(1-he)}px) scale(${1-.2*ne.squash*$[fe]}, ${1+.2*ne.stretch*$[fe]})`}));_r(ge,ve,ne.travelDur,"linear")},[s,m]);const ee=W=>{m||(I(W),N(),_.current=setTimeout(()=>{j.current=setInterval(()=>I(W),d1)},u1))},Y=s<=l,le=s>=c,P=W=>{m||(W.key==="ArrowUp"?(W.preventDefault(),I(d)):W.key==="ArrowDown"?(W.preventDefault(),I(-d)):W.key==="Home"&&Number.isFinite(l)?(W.preventDefault(),z.current!==l&&L(),z.current=l,i==null||i(l)):W.key==="End"&&Number.isFinite(c)&&(W.preventDefault(),z.current!==c&&L(),z.current=c,i==null||i(c)))};return f.jsxs("div",{className:`${xn.stepper} ${m?xn.disabled:""} ${y}`,children:[f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Decrease ${h}`:"Decrease",disabled:m||Y,onPointerDown:()=>ee(-d),onPointerUp:N,onPointerLeave:N,onPointerCancel:N,children:f.jsx(Us,{glyph:J0,weight:"bold",size:"sm",className:xn.glyph})}),f.jsx("span",{ref:O,className:xn.readout,role:"spinbutton",tabIndex:m?-1:0,"aria-valuenow":s,"aria-valuemin":Number.isFinite(l)?l:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":h,"aria-disabled":m||void 0,onKeyDown:P,children:f.jsx("span",{ref:J,className:xn.digits,children:s})}),f.jsx("button",{type:"button",className:xn.button,"aria-label":h?`Increase ${h}`:"Increase",disabled:m||le,onPointerDown:()=>ee(d),onPointerUp:N,onPointerLeave:N,onPointerCancel:N,children:f.jsx(Us,{glyph:X0,weight:"bold",size:"sm",className:xn.glyph})})]})}const f1="_track_s3qo0_27",h1="_indicator_s3qo0_38",m1="_segment_s3qo0_59",g1="_md_s3qo0_74",v1="_sm_s3qo0_84",x1="_lg_s3qo0_94",y1="_count_s3qo0_104",w1="_segmentSelected_s3qo0_113",b1="_disabled_s3qo0_127",yn={track:f1,indicator:h1,segment:m1,md:g1,sm:v1,lg:x1,count:y1,segmentSelected:w1,disabled:b1};function k1({options:s=[],value:i,onChange:l,disabled:c=!1,label:d,size:h="md",sound:m=!0,className:v=""}){const y=wo("select",m),L=Z=>{Z!==i&&y(),l==null||l(Z)},z=p.useRef(null),_=p.useRef({}),j=p.useRef(null),[M,I]=p.useState(null),N=p.useRef(null),O=p.useRef(null),J=p.useRef(i);J.current=i;const Q=Z=>{const R=z.current,$=_.current[Z];if(!R||!$)return null;const ve=At(R),he=At($);return{l:he.left-ve.left-R.clientLeft,r:he.right-ve.left-R.clientLeft}},ee=p.useCallback(()=>{const Z=Q(i);I(Z?{left:Z.l,width:Z.r-Z.l}:null)},[i]);p.useLayoutEffect(()=>{ee()},[ee,s.length,h]);const Y=()=>{if(c||Un()||!z.current||!j.current)return null;const Z=Ln(z.current,"segmented-control");return Bn(Z)?{...Z,cap:parseFloat(getComputedStyle(j.current).height)}:null},le=(Z,R,$,ve)=>{z.current.setAttribute("data-driven",""),_r(j.current,Z,R,$,{hold:ve,onDone:()=>{var he;return(he=z.current)==null?void 0:he.removeAttribute("data-driven")}})};p.useLayoutEffect(()=>{if(!M)return;const Z={l:M.left,r:M.left+M.width},R=O.current||N.current;N.current=Z,O.current=null;const $=Y();!$||!R||R.l===Z.l&&R.r===Z.r||le(Er($,R,Z,$.cap),$.travelDur,"linear",!1)},[M==null?void 0:M.left,M==null?void 0:M.width]);const P=()=>{if(!O.current)return;const Z=Y(),R=O.current;O.current=null,Z&&N.current&&le(Er(Z,R,N.current,Z.cap),Z.travelDur,"linear",!1)},W=Z=>{if(Z===i||!N.current)return;const R=Y(),$=Q(Z);if(!R||R.lean<=0||!$)return;const ve=j.current.getAnimations().length?ai(j.current,{left:At(z.current).left+z.current.clientLeft}):N.current;O.current=si(R,N.current,$);const he=i,fe=()=>setTimeout(()=>{J.current===he&&P()},0);window.addEventListener("pointerup",fe,{once:!0}),le([Wn({...ve,h:R.cap},R.cap),Wn({...O.current,h:R.cap},R.cap)],R.leanDur,R.leanEasing,!0)};p.useEffect(()=>(window.addEventListener("resize",ee),()=>window.removeEventListener("resize",ee)),[ee]);const pe=Z=>{var R;(R=_.current[Z])==null||R.focus()},ge=Z=>{if(c||s.length===0)return;const R=(Z+s.length)%s.length,$=s[R];$&&(L($.value),pe($.value))},ne=(Z,R)=>{if(!c)switch(Z.key){case"ArrowRight":case"ArrowDown":Z.preventDefault(),ge(R+1);break;case"ArrowLeft":case"ArrowUp":Z.preventDefault(),ge(R-1);break;case"Home":Z.preventDefault(),ge(0);break;case"End":Z.preventDefault(),ge(s.length-1);break}},ue=s.findIndex(Z=>Z.value===i);return f.jsxs("div",{ref:z,className:`${yn.track} ${yn[h]||yn.md} ${c?yn.disabled:""} ${v}`,role:"radiogroup","aria-label":d,"aria-disabled":c||void 0,children:[M&&f.jsx("span",{ref:j,className:yn.indicator,"aria-hidden":"true",style:{transform:`translateX(${M.left}px)`,width:`${M.width}px`}}),s.map((Z,R)=>{const $=Z.value===i,ve=$||ue===-1&&R===0;return f.jsxs("button",{type:"button",ref:he=>{_.current[Z.value]=he},role:"radio","aria-checked":$,tabIndex:c?-1:ve?0:-1,disabled:c,className:`${yn.segment} ${$?yn.segmentSelected:""}`,onClick:()=>L(Z.value),onPointerDown:()=>W(Z.value),onPointerLeave:P,onKeyDown:he=>ne(he,R),children:[Z.label,Z.count!==void 0&&f.jsx("span",{className:yn.count,children:Z.count})]},Z.value)})]})}const ad=16,Vl=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],_1="_mark_nniye_3",L1="_sm_nniye_24",S1="_md_nniye_1",z1="_lg_nniye_26",E1="_working_nniye_28",C1="_paused_nniye_29",j1="_base_nniye_33",M1="_glint_nniye_34",N1="_spin_nniye_36",A1="_loop_nniye_37",bt={mark:_1,sm:L1,md:S1,lg:z1,working:E1,paused:C1,base:j1,glint:M1,spin:N1,loop:A1},F1={sm:bt.sm,md:bt.md,lg:bt.lg},T1=3.2;function P1(s,i){const l=s%2===0,d=-((l?1:-1)*(360*s)/i),h=d+360*(l?3:7);return{from:`${d.toFixed(2)} 8 8`,to:`${h.toFixed(2)} 8 8`}}function R1({working:s=!0,size:i="sm",label:l,className:c="",...d}){const h=`wm${p.useId().replace(/[^a-zA-Z0-9]/g,"")}`,m=Vl.length,v=l?{role:"img","aria-label":l}:{"aria-hidden":!0},y=[bt.mark,F1[i]??bt.sm,s?bt.working:bt.paused,c].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${ad} ${ad}`,className:y,focusable:"false",...v,...d,children:[s&&f.jsx("defs",{children:Vl.map((L,z)=>{const{from:_,to:j}=P1(z,m);return f.jsxs("linearGradient",{id:`${h}-s${z}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:bt.base}),f.jsx("stop",{offset:"0.45",className:bt.base}),f.jsx("stop",{offset:"1",className:bt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:_,to:j,dur:`${T1}s`,repeatCount:"indefinite"})]},z)})}),Vl.map((L,z)=>f.jsx("g",{className:bt.spin,style:{"--wm-i":z},children:f.jsx("path",{d:L,className:bt.loop,style:{"--wm-i":z},stroke:s?`url(#${h}-s${z})`:void 0})},z))]})}const $1="_button_1cn8j_34",O1="_label_1cn8j_74",D1="_arrow_1cn8j_84",H1="_sm_1cn8j_57",V1="_primary_1cn8j_122",I1="_destructive_1cn8j_123",Z1="_secondary_1cn8j_157",B1="_tertiary_1cn8j_173",U1="_loading_1cn8j_207",W1="_working_1cn8j_211",Hn={button:$1,label:O1,arrow:D1,sm:H1,primary:V1,destructive:I1,secondary:Z1,tertiary:B1,loading:U1,working:W1},K1=["primary","secondary","tertiary","destructive"],Q1=["lg","sm"];function G1(){return f.jsx(Z0,{weight:"bold",className:Hn.arrow,"aria-hidden":"true"})}function ld({variant:s="primary",size:i="lg",disabled:l=!1,loading:c=!1,arrow:d=!0,type:h="button",sound:m=!0,children:v,onClick:y,className:L="",...z}){const _=K1.includes(s)?s:"primary",j=Q1.includes(i)?i:"lg",M=l||c,I=wo("press",m);return f.jsxs("button",{type:h,className:`${Hn.button} ${Hn[_]} ${j==="sm"?Hn.sm:""} ${c?Hn.loading:""} ${L}`,disabled:M,"aria-busy":c||void 0,onClick:M?void 0:N=>{I(),y==null||y(N)},...z,children:[f.jsx("span",{className:Hn.label,children:v}),c?f.jsx(R1,{className:Hn.working}):d&&f.jsx(G1,{})]})}function q1(){var l,c;if(typeof window>"u"||typeof navigator>"u"||!((c=(l=navigator.userAgentData)==null?void 0:l.brands)==null?void 0:c.some(d=>d.brand==="Chromium")))return!1;const i=d=>{var h;return(h=window.matchMedia)==null?void 0:h.call(window,d).matches};return!i("(prefers-reduced-transparency: reduce)")&&!i("(forced-colors: active)")}function Y1(s,i,l,{depth:c,refraction:d,splay:h}){const m=Math.max(0,c)/100*(Math.min(s,i)/2),v=Math.max(0,d)/100*(m/2),y=1+3*(1-Math.min(100,Math.max(0,h))/100),L=Math.min(l,s/2,i/2),z=new Uint8ClampedArray(s*i*4);for(let _=0;_<i;_+=1)for(let j=0;j<s;j+=1){const M=j+.5-s/2,I=_+.5-i/2,N=Math.abs(M)-(s/2-L),O=Math.abs(I)-(i/2-L),Q=-(Math.hypot(Math.max(N,0),Math.max(O,0))+Math.min(Math.max(N,O),0)-L);let ee=0,Y=0,le=0;if(Q>0&&m>0&&Q<m)if(le=(1-Q/m)**y,N>0&&O>0){const W=Math.hypot(N,O)||1;ee=Math.sign(M)*(N/W),Y=Math.sign(I)*(O/W)}else N>O?ee=Math.sign(M):Y=Math.sign(I);const P=(_*s+j)*4;z[P]=127.5*(1-ee*le),z[P+1]=127.5*(1-Y*le),z[P+2]=128,z[P+3]=255}return{bytes:z,scale:2*v}}function J1(s){const i=getComputedStyle(s),l=c=>parseFloat(i.getPropertyValue(c))||0;return{depth:l("--glass-depth"),refraction:l("--glass-refraction"),splay:l("--glass-splay"),radius:parseFloat(i.borderTopLeftRadius)||0}}function Od(s,i,l){const c=`sc-glass-${p.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,[d,h]=p.useState(null);return p.useEffect(()=>{const m=s.current;if(!i||!m||!q1()){h(null);return}let v="";const y=()=>{const z=Math.round(m.offsetWidth),_=Math.round(m.offsetHeight),{radius:j,...M}=J1(m),I=JSON.stringify([z,_,j,M]);if(I===v||z<2||_<2)return;v=I;const{bytes:N,scale:O}=Y1(z,_,j,M),J=document.createElement("canvas");J.width=z,J.height=_,J.getContext("2d").putImageData(new ImageData(N,z,_),0,0),h({w:z,h:_,scale:O,href:J.toDataURL()})};y();const L=new ResizeObserver(y);return L.observe(m),window.addEventListener("sc-tokens-change",y),()=>{L.disconnect(),window.removeEventListener("sc-tokens-change",y)}},[s,i,l]),{id:c,filter:d}}function X1(s,i=0,l=0,c=0){const d=Math.max(0,s),h=d;if(d===0)return{d:"",width:0,height:0};const m=Math.hypot(h,d),v=Math.PI-Math.atan2(d,h);let y=Math.max(0,i),L=Math.max(0,l),z=y*d/h,_=L/Math.tan(v/2);if(z+_>m){const Q=m/(z+_);y*=Q,L*=Q,z*=Q,_*=Q}const j=h+_,M=h/m,I=d/m,N=Q=>Math.round(Q*1e3)/1e3,O=(Q,ee)=>`${N(j+Q)} ${N(ee)}`;return{d:[`M ${O(-(h+_),-c)}`,`L ${O(-(h+_),0)}`,L?`A ${N(L)} ${N(L)} 0 0 1 ${O(-h+M*_,I*_)}`:"",`L ${O(-M*z,d-I*z)}`,y?`A ${N(y)} ${N(y)} 0 0 0 ${O(M*z,d-I*z)}`:"",`L ${O(h-M*_,I*_)}`,L?`A ${N(L)} ${N(L)} 0 0 1 ${O(h+_,0)}`:"",`L ${O(h+_,-c)}`,"Z"].filter(Boolean).join(" "),width:N(2*j),height:N(d+c)}}const eh=s=>{const i=[];let l=0,c="";for(const d of s)d==="("&&(l+=1),d===")"&&(l-=1),d===","&&l===0?(i.push(c),c=""):c+=d;return c.trim()&&i.push(c),i.map(d=>d.trim()).filter(Boolean)};function th(s){var l;if(!s||s.trim()==="none")return"none";const i=[];for(const c of eh(s)){if(/\binset\b/.test(c))continue;const d=(l=c.match(/(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b|\b(?:transparent|currentcolor|black|white)\b/i))==null?void 0:l[0],h=c.replace(d||""," ").match(/-?\d*\.?\d+(?:px)?/g)||[],[m="0",v="0",y="0"]=h.map(L=>/px$/.test(L)?L:`${L}px`);d&&(/\/\s*0(?:\.0*)?\s*\)$/.test(d)||/^transparent$/i.test(d)||i.push(`drop-shadow(${m} ${v} ${y} ${d})`))}return i.length?i.join(" "):"none"}const nh="_wrapper_gonqd_27",rh="_tooltip_gonqd_32",oh="_arrow_gonqd_68",sh="_open_gonqd_79",ah="_singleline_gonqd_84",lh="_multiline_gonqd_88",ih="_glass_gonqd_99",ch="_defs_gonqd_112",wn={wrapper:nh,tooltip:rh,arrow:oh,open:sh,singleline:ah,multiline:lh,glass:ih,defs:ch};function uh({content:s,multiline:i=!1,open:l,variant:c="solid",children:d}){const h=c==="glass",m=p.useId(),[v,y]=p.useState(!1),L=l??v,z=p.useRef(null),_=p.useRef(null),{id:j,filter:M}=Od(_,h,"frosted"),I=dh(_,L,h),N=p.useRef(L),O=p.useRef(0),J=p.useRef(null);p.useLayoutEffect(()=>{const Y=z.current,le=_.current,P=N.current&&!L;if(N.current=L,!L&&!P||!Y||!le||Un())return;const W=Ln(le,"tooltip"),pe=getComputedStyle(le),ge=parseFloat(pe.getPropertyValue("--sc-motion-tooltip-grow-from")),ne=Number.isFinite(ge)?Math.min(1,Math.max(0,ge)):1;if(!Bn(W)&&ne===1)return;const ue=parseFloat(pe.getPropertyValue("--sc-size-tooltip-lift"))||0;let Z=P?1:0;const R=J.current;if(R&&R.anim.playState==="running"){const ae=Math.min(1,Math.max(0,(R.anim.currentTime||0)/R.duration));Z=R.ys[Math.round(ae*(R.ys.length-1))]}const $=P?0:1;let ve=ri(W.travelEasing),he=W.travelDur;if(P){const ae=ve.findIndex(xe=>xe>=1);ae>0&&(he=Math.round(he*ae/(ve.length-1)),ve=ve.slice(0,ae+1).map(xe=>Math.min(1,xe)))}const fe=Math.abs($-Z),K=oi(ve).map(ae=>ae*fe),se=ve.map(ae=>Z+($-Z)*ae),G=se.map((ae,xe)=>{const be=Math.max(0,ne+(1-ne)*ae);return{transform:`translate(-50%, ${-ue*(1-ae)}px) scale(${be*(1-.2*W.squash*K[xe])}, ${be*(1+.2*W.stretch*K[xe])})`,opacity:Math.min(1,Math.max(0,ae))}});le.getAnimations().forEach(ae=>ae.cancel());const b=++O.current,T=()=>{O.current===b&&Y.removeAttribute("data-driven")};Y.setAttribute("data-driven","");const de=le.animate(G,{duration:he,easing:"linear"});de.onfinish=T,de.oncancel=T,J.current={anim:de,ys:se,duration:he}},[L]);const Q=()=>y(!0),ee=()=>y(!1);return f.jsxs("span",{ref:z,className:wn.wrapper,onMouseEnter:Q,onMouseLeave:ee,onFocus:Q,onBlur:ee,children:[f.jsx("span",{"aria-describedby":L?m:void 0,children:d}),f.jsxs("span",{ref:_,role:"tooltip",id:m,className:`${wn.tooltip} ${h?wn.glass:""} ${L?wn.open:""} ${i?wn.multiline:wn.singleline}`,style:{...M?{"--glass-refract":`url(#${j})`}:{},...I.drop!=="none"?{"--tip-drop":I.drop}:{}},children:[M&&f.jsx("svg",{className:wn.defs,"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:f.jsxs("filter",{id:j,x:"0",y:"0",width:M.w,height:M.h,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[f.jsx("feImage",{href:M.href,x:"0",y:"0",width:M.w,height:M.h,preserveAspectRatio:"none",result:"map"}),f.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:M.scale,xChannelSelector:"R",yChannelSelector:"G"})]})}),s,I.d&&f.jsx("svg",{className:wn.arrow,"aria-hidden":"true",focusable:"false",width:I.width,height:I.height,viewBox:`0 ${-I.overlap} ${I.width} ${I.height}`,style:{top:`calc(100% - ${I.overlap}px)`},children:f.jsx("path",{d:I.d})})]})]})}function dh(s,i,l){const[c,d]=p.useState({d:"",width:0,height:0,overlap:0,drop:"none"});return p.useLayoutEffect(()=>{const h=s.current;if(!h)return;const m=()=>{const v=getComputedStyle(h),y=j=>parseFloat(v.getPropertyValue(j))||0,L=l?0:1,z=X1(y("--sc-size-tooltip-arrow"),y("--sc-size-tooltip-arrow-tip"),y("--sc-size-tooltip-arrow-fillet"),L),_=l?"none":th(v.getPropertyValue("--sc-shadow-tooltip-plate"));d(j=>j.d===z.d&&j.drop===_&&j.overlap===L?j:{...z,overlap:L,drop:_})};return m(),window.addEventListener("sc-tokens-change",m),()=>window.removeEventListener("sc-tokens-change",m)},[s,i,l]),c}const ph=Math.PI*2,fh=new Set(["uskel","uloader","usplash"]),hh=new Set(["ucard"]),mh={uskel:0,uloader:1.96,usplash:0},id=new Set(["progress","active","current"]);function gh(s){return function(){s|=0,s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function vh(s){let i=2166136261;for(const l of String(s))i=Math.imul(i^l.charCodeAt(0),16777619);return i}const xh=(s,i,l,c)=>s.fillRect(i-c,l-c,c*2,c*2),yh=(s,i,l,c)=>{s.beginPath(),s.arc(i,l,c,0,ph),s.fill()},Dd=(s,i,l,c)=>{c*=1.25;const d=Math.max(.7,c*.38);s.fillRect(i-c,l-d/2,c*2,d),s.fillRect(i-d/2,l-c,d,c*2)},wh={plus:Dd,square:xh,round:yh};function wt(s,i,l){const c=i.rng,d=(l.s||5)*i.S,h=l.x2-l.x1,m=l.y2-l.y1,v=Math.hypot(h,m);if(!v)return;const y=h/v,L=m/v,z=-L,_=y,j=l.w,M=l.ext??j*.35,I=l.r??.9,N=l.jit??.7;let O=0;for(let J=-M;J<=v+M;J+=d,O++){const Q=l.grid?0:O%2*d/2;let ee=1;if(l.taper){const Y=(J+M)/(v+2*M);ee=Math.min(1,(l.fadeEnd?1-Y:Math.min(Y,1-Y))/l.taper)}for(let Y=-j/2+Q;Y<=j/2+.01;Y+=d){const le=l.crisp?ee:Math.min(1,(j/2-Math.abs(Y))/(d*1.6)+.3)*ee;if(c()>le)continue;const P=l.x1+y*J+z*Y+(c()-.5)*N,W=l.y1+L*J+_*Y+(c()-.5)*N;s.globalAlpha=(l.a??.9)*(l.af?l.af(J+(l.u0||0),Y,P,W):1),i.dot(s,P,W,I)}}s.globalAlpha=1}function Dn(s,i,l,c,d={}){let h=0;for(let m=0;m<l.length-1;m++)wt(s,i,{x1:l[m][0],y1:l[m][1],x2:l[m+1][0],y2:l[m+1][1],w:c,u0:h,...d}),h+=Math.hypot(l[m+1][0]-l[m][0],l[m+1][1]-l[m][1])}const bh=s=>Math.max(0,Math.min(1,Number.isFinite(+s)?+s:0)),kh={udiv(s,i,l,c){const d=Math.max(1,Math.round(+c.opts.rows||3)),h=7,m=c.opts.fade||"both";wt(s,c,{x1:2,y1:l/2,x2:i-2,y2:l/2,w:(d-1)*h*c.S,s:h,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:m==="none"?0:m==="end"?.7:.22,fadeEnd:m==="end"})},ucardhead(s,i,l,c){wt(s,c,{x1:-20,y1:l*.8,x2:i+20,y2:l*.15,w:44,s:7,r:1.6,ext:0}),wt(s,c,{x1:i*.4,y1:-20,x2:i*.78,y2:l+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(s,i,l,c){const d=12*c.S;for(let h=d/2;h<l;h+=d)for(let m=d/2;m<i;m+=d){let v=.14;c.hover&&(v+=.86*Math.exp(-((m-c.mx)**2+(h-c.my)**2)/5e3)),s.globalAlpha=v,c.dot(s,m,h,1.6)}s.globalAlpha=1},ucta(s,i,l,c){Dn(s,c,[[-.05*i,.1*l],[.22*i,.5*l],[.02*i,1.1*l]],46,{s:7,r:1.6,ext:0}),Dn(s,c,[[1.05*i,-.1*l],[.78*i,.5*l],[.98*i,1.1*l]],46,{s:7,r:1.6,ext:0})},uempty(s,i,l,c){Dn(s,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([d,h])=>[d*i,h*l]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(s,i,l,c){const d=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,i-40,10],["r",20,108,i-40,10],["r",20,128,i*.55,10],["r",20,158,i-40,46]],h=6*c.S,m=c.t*240%(i+500)-250;for(let v=h/2;v<l;v+=h)for(let y=h/2;y<i;y+=h){if(!d.some(_=>_[0]==="c"?(y-_[1])**2+(v-_[2])**2<_[3]**2:y>=_[1]&&y<=_[1]+_[3]&&v>=_[2]&&v<=_[2]+_[4]))continue;const z=Math.exp(-((y+v*.5-m)**2)/4050);s.globalAlpha=.16+.6*z,c.dot(s,y,v,1.3)}s.globalAlpha=1},uprog(s,i,l,c){const d=7*c.S,h=Math.max(1,Math.round(+c.opts.rows||1)),m=bh(c.opts.progress),v=l/2-(h-1)*d/2,y=c.teal("progress");for(let L=0;L<h;L++)for(let z=4;z<i;z+=d){const _=z/i<m;s.fillStyle=_?y:c.fg,s.globalAlpha=_?1:.2,c.dot(s,z,v+L*d,1.6)}s.globalAlpha=1,s.fillStyle=c.fg},uloader(s,i,l,c){const d=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([y,L])=>[y*i,L*l]);let h=0;for(let y=0;y<d.length-1;y++)h+=Math.hypot(d[y+1][0]-d[y][0],d[y+1][1]-d[y][1]);const m=c.t%2.8/2.8,v=Math.min(1,m/.7)*(h+30);Dn(s,c,d,26,{s:6,r:1.3,ext:0,a:1,af:y=>y<v?v-y<18&&m<.7?1:.85:.08})},uline(s,i,l,c){s.fillStyle=c.teal("active"),wt(s,c,{x1:3,y1:l/2,x2:i-3,y2:l/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),s.fillStyle=c.fg},umedia(s,i,l,c){const d=10*c.S;s.globalAlpha=.16;for(let h=d/2;h<l;h+=d)for(let m=d/2;m<i;m+=d)c.dot(s,m,h,1.3);s.globalAlpha=1,wt(s,c,{x1:-20,y1:l*.9,x2:i+20,y2:l*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(s,i,l,c){Dn(s,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([d,h])=>[d*i,h*l]),72,{s:7,r:1.6,ext:0})},ufooter(s,i,l,c){const h=7*c.S,m=c.rng;s.fillStyle=c.C.page,s.fillRect(0,0,i,90),s.fillStyle=c.C.inverse,s.fillRect(0,90,i,l-90);for(let v=h/2;v<90;v+=h)for(let y=h/2;y<i;y+=h)m()<Math.pow(v/90,1.6)&&c.dot(s,y,v,1.6)},uquote(s,i,l,c){const d={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},h=24,m=130;wt(s,c,{...d,x1:h,y1:h,x2:h+m,y2:h}),wt(s,c,{...d,x1:h,y1:h,x2:h,y2:h+m}),wt(s,c,{...d,x1:i-h,y1:l-h,x2:i-h-m,y2:l-h}),wt(s,c,{...d,x1:i-h,y1:l-h,x2:i-h,y2:l-h-m})},utime(s,i,l,c){const d=Math.max(1,Math.round(+c.opts.steps||4)),h=Math.round(+c.opts.current||0),m=l/d,v=i/2,y=7*c.S,L=Array.from({length:d},(z,_)=>m*(_+.5));for(let z=L[0];z<=L[d-1];z+=y)L.some(_=>Math.abs(z-_)<15)||(s.globalAlpha=z<L[Math.min(Math.max(h,0),d-1)]?.75:.18,c.dot(s,v,z,1.4));L.forEach((z,_)=>{s.fillStyle=_===h?c.teal("current"):c.fg,s.globalAlpha=_<=h?1:.25;for(let j=-1;j<=1;j++)for(let M=-1;M<=1;M++)c.dot(s,v+j*6,z+M*6,1.5)}),s.globalAlpha=1,s.fillStyle=c.fg},ubullet(s,i,l,c){const d=i/3;c.opts.accent&&(s.fillStyle=c.teal("current"));for(let h=0;h<3;h++)for(let m=0;m<3;m++)c.dot(s,d/2+h*d,d/2+m*d,d*.26);s.fillStyle=c.fg},usep(s,i,l,c){s.globalAlpha=.6;for(let d=0;d<3;d++)c.dot(s,i*(.2+d*.3),l*(.8-d*.3),i*.1);s.globalAlpha=1},uthumb(s,i,l,c){const d=c.rng,h=2+Math.floor(d()*2),m=[];for(let v=0;v<=h;v++)m.push([(v%2?.72+.22*d():.06+.22*d())*i,(.12+v*(.76/h)+(d()-.5)*.08)*l]);d()>.5&&m.forEach(v=>{const y=v[0];v[0]=v[1],v[1]=y}),Dn(s,c,m,i*(.14+.12*d()),{s:6,r:1.3,ext:0})},unews(s,i,l,c){wt(s,c,{x1:i*.5,y1:-20,x2:i+30,y2:l*.42,w:42,s:7,r:1.6,ext:0}),wt(s,c,{x1:i*.76,y1:-20,x2:i+30,y2:l*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(s,i,l,c){const d=c.t;Dn(s,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([h,m])=>[h*i,m*l]),50,{s:7,r:1.6,af:h=>.28+.72*Math.pow(.5+.5*Math.sin(h*.016-d*2),2)})},type(s,i,l,c){if(!i||!l||typeof document>"u")return;const d=document.createElement("canvas");d.width=Math.ceil(i),d.height=Math.ceil(l);const h=d.getContext("2d"),m=c.opts.text||"Crafthouse";h.textAlign="center",h.textBaseline="middle";let v=l*(+c.opts.textScale||.62);h.font=`500 ${v}px ${c.font}`;const y=h.measureText(m).width;y>i*.88&&(v*=i*.88/y,h.font=`500 ${v}px ${c.font}`),h.fillText(m,i/2,l/2);const L=Math.min(9,Math.max(4.2,v/34))*c.S,z=L*.24,_=h.getImageData(0,0,d.width,d.height).data,j=-.14,M=Math.cos(j),I=Math.sin(j),N=Math.hypot(i,l)/2+10;let O=0;for(let J=-N;J<N;J+=L,O++)for(let Q=-N+O%2*L/2;Q<N;Q+=L){const ee=i/2+Q*M-J*I,Y=l/2+Q*I+J*M;ee<0||Y<0||ee>=d.width||Y>=d.height||_[((Y|0)*d.width+(ee|0))*4+3]>100&&c.dot(s,ee,Y,z)}}};function _h(s,i){const{art:l,w:c,h:d,dpr:h,colors:m,surface:v="inverse",shape:y="plus",density:L=1,seed:z=0,t:_=0,opts:j={},font:M,pointer:I}=i,N=kh[l];if(!N||!c||!d)return;const{accent:O,...J}=m,Q=v==="inverse"?J.onInverse:J.text,ee={inverse:J.inverse,raised:J.raised,page:J.page,sunk:J.sunk};s.setTransform(h,0,0,h,0,0),s.globalAlpha=1,s.clearRect(0,0,c,d),v!=="none"&&(s.fillStyle=ee[v]??J.inverse,s.fillRect(0,0,c,d)),s.fillStyle=Q;const Y=Math.min(1.6,Math.max(.6,+L||1)),le=P=>{if(!id.has(P))throw new Error(`PlusField: teal is reserved for ${[...id].join(", ")}; "${P}" is not one of them.`);return O};N(s,c,d,{C:J,fg:Q,S:1/Y,rng:gh(z),t:_,opts:j,font:M,teal:le,hover:!!(I!=null&&I.hover),mx:(I==null?void 0:I.x)??0,my:(I==null?void 0:I.y)??0,dot:wh[y]??Dd}),s.globalAlpha=1}const Lh="_root_1jtbm_5",Sh="_backdrop_1jtbm_17",zh="_canvas_1jtbm_25",Eh="_srOnly_1jtbm_35",vo={root:Lh,backdrop:Sh,canvas:zh,srOnly:Eh},Ch={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},Lr=new Set,Zn=new Set;let Sr=0,In=null,kt=null,_n=null;const jh=()=>typeof window<"u",Mh=()=>!!(_n!=null&&_n.matches);function Hd(s){const i=s/1e3;Zn.forEach(l=>l.paint(i)),Sr=Zn.size?requestAnimationFrame(Hd):0}function Nh(){!Sr&&Zn.size&&(Sr=requestAnimationFrame(Hd))}function Yl(){var s,i,l;jh()&&(!In&&typeof MutationObserver<"u"&&(In=new MutationObserver(()=>Lr.forEach(c=>c.refresh())),In.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!kt&&typeof IntersectionObserver<"u"&&(kt=new IntersectionObserver(c=>c.forEach(d=>{const h=d.target.__plusField;h&&(h.visible=d.isIntersecting,h.syncMotion())}))),!_n&&window.matchMedia&&(_n=window.matchMedia("(prefers-reduced-motion: reduce)"),(s=_n.addEventListener)==null||s.call(_n,"change",()=>Lr.forEach(c=>c.syncMotion()))),document.fonts&&!Yl.fonts&&(Yl.fonts=!0,(l=(i=document.fonts).addEventListener)==null||l.call(i,"loadingdone",()=>Lr.forEach(c=>c.refresh()))))}function Ah(){Lr.size||(In==null||In.disconnect(),In=null,kt==null||kt.disconnect(),kt=null,Sr&&cancelAnimationFrame(Sr),Sr=0)}function Fh(s,i){const l={root:s,canvas:i,ctx:i.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(s),d=c.color,h={};for(const[m,v]of Object.entries(Ch))h[m]=c.getPropertyValue(v).trim()||d;l.colors=h,l.font=c.fontFamily},resize(c,d){l.w=c,l.h=d,l.dpr=Math.min(2,window.devicePixelRatio||1);const h=Math.round(c*l.dpr),m=Math.round(d*l.dpr);i.width!==h&&(i.width=h),i.height!==m&&(i.height=m),l.refresh()},animated(){const c=l.props;return!!c&&fh.has(c.art)&&c.animate!==!1&&!Mh()},syncMotion(){var c;if(l.animated()&&l.visible&&l.w&&l.h){Zn.add(l),Nh();return}Zn.delete(l),l.paint(l.animated()?l.t:mh[(c=l.props)==null?void 0:c.art]??0)},refresh(){!l.props||!l.w||!l.h||(l.readTokens(),l.syncMotion(),Zn.has(l)&&l.paint(l.t))},paint(c){const d=l.props;!d||!l.w||!l.h||(l.colors||l.readTokens(),l.t=c,_h(l.ctx,{art:d.art,w:l.w,h:l.h,dpr:l.dpr,colors:l.colors,surface:d.surface,shape:d.shape,density:d.density,seed:vh(d.seed??d.art),t:c,opts:d.opts,font:l.font,pointer:l.pointer}))}};return l}const Th=new Set(["inverse","raised","page","sunk","none"]),Ph=new Set(["plus","square","round"]);function Rh({art:s,surface:i="inverse",shape:l="plus",density:c=1,animate:d=!0,seed:h,rows:m,fade:v,text:y,progress:L,accent:z=!1,steps:_,current:j,textScale:M,backdrop:I=!1,label:N,as:O="div",className:J="",...Q}){const ee=p.useRef(null),Y=p.useRef(null),le=p.useRef(null),P={art:s,surface:Th.has(i)?i:"inverse",shape:Ph.has(l)?l:"plus",density:c,animate:d,seed:h,opts:{rows:m,fade:v,text:y,progress:L,accent:z,steps:_,current:j,textScale:M}};p.useEffect(()=>{const ge=ee.current,ne=Y.current;if(!ge||!ne||!ne.getContext)return;Yl();const ue=Fh(ge,ne);ue.props=P,le.current=ue,ge.__plusField=ue,Lr.add(ue);const Z=typeof ResizeObserver<"u"?new ResizeObserver(([he])=>{const{width:fe,height:K}=he.contentRect;(fe!==ue.w||K!==ue.h)&&ue.resize(fe,K)}):null;Z==null||Z.observe(ge),kt==null||kt.observe(ge);const R=hh.has(s)?ge.parentElement||ge:null,$=he=>{const fe=ge.getBoundingClientRect();ue.pointer={hover:!0,x:he.clientX-fe.left,y:he.clientY-fe.top},ue.paint(ue.t)},ve=()=>{ue.pointer={hover:!1,x:0,y:0},ue.paint(ue.t)};return R==null||R.addEventListener("pointermove",$),R==null||R.addEventListener("pointerleave",ve),()=>{Z==null||Z.disconnect(),kt==null||kt.unobserve(ge),R==null||R.removeEventListener("pointermove",$),R==null||R.removeEventListener("pointerleave",ve),Zn.delete(ue),Lr.delete(ue),delete ge.__plusField,le.current=null,Ah()}},[s]),p.useEffect(()=>{const ge=le.current;ge&&(ge.props=P,ge.refresh())});const W=[vo.root,I?vo.backdrop:"",J].filter(Boolean).join(" "),pe=Math.round(Math.max(0,Math.min(1,Number(L)||0))*100);return f.jsxs(O,{ref:ee,className:W,...Q,children:[f.jsx("canvas",{ref:Y,className:vo.canvas,"aria-hidden":"true"}),N&&(s==="uloader"||s==="uskel")&&f.jsx("span",{role:"status",className:vo.srOnly,children:N}),s==="uprog"&&f.jsx("span",{role:"progressbar",className:vo.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":pe,"aria-label":N})]})}const $h="_underline_w8mvb_3",Oh={underline:$h},Il=new WeakMap,cd=s=>{var i;return s.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((i=s.parentElement)==null?void 0:i.parentElement)||null};function Vd({active:s=!0,shape:i,density:l,motion:c="plus-underline",className:d="",...h}){const m=p.useRef(null);return p.useLayoutEffect(()=>{const v=m.current,y=v&&s?cd(v):null;if(!y)return;const L=Il.get(y);if(Il.set(y,v),!L||L===v||!L.isConnected||Un())return;const z=Ln(v,c);if(!Bn(z))return;const _=At(v),j=ai(L,_);L.getAnimations().forEach(M=>M.cancel()),_r(v,Er(z,j,{l:0,r:_.width},_.height),z.travelDur,"linear")},[s,c]),p.useEffect(()=>{var v;s||(v=m.current)==null||v.getAnimations().forEach(y=>y.cancel())},[s]),p.useEffect(()=>{const v=m.current,y=v&&s?cd(v):null;if(!y)return;const L=z=>{var ee,Y;const _=(Y=(ee=z.target).closest)==null?void 0:Y.call(ee,'a, button, [role="tab"], [role="radio"]');if(!_||!y.contains(_)||_.contains(v)||Un())return;const j=Ln(v,c);if(!Bn(j)||j.lean<=0)return;const M=At(v),I=At(_),N={l:0,r:M.width},O=si(j,N,{l:I.left-M.left,r:I.right-M.left});_r(v,[Wn({...N,h:M.height},M.height),Wn({...O,h:M.height},M.height)],j.leanDur,j.leanEasing,{hold:!0});let J=!1;const Q=()=>setTimeout(()=>{J||(J=!0,!(Il.get(y)!==v||!v.isConnected)&&_r(v,Er(Ln(v,c),O,N,M.height),j.travelDur,"linear"))},0);window.addEventListener("pointerup",Q,{once:!0}),_.addEventListener("pointerleave",Q,{once:!0})};return y.addEventListener("pointerdown",L),()=>y.removeEventListener("pointerdown",L)},[s,c]),f.jsx("span",{ref:m,className:`${Oh.underline} ${d}`,"aria-hidden":"true",...h,children:s&&f.jsx(Rh,{as:"span",art:"uline",surface:"none",shape:i,density:l})})}const Dh="_nav_lg753_18",Hh="_row_lg753_26",Vh="_brand_lg753_35",Ih="_links_lg753_44",Zh="_linkItem_lg753_51",Bh="_link_lg753_44",Uh="_toggle_lg753_79",Wh="_trailing_lg753_84",Kh="_desktop_lg753_93",Qh="_compact_lg753_100",Gh="_menu_lg753_118",qh="_menuOpen_lg753_128",Je={nav:Dh,row:Hh,brand:Vh,links:Ih,linkItem:Zh,link:Bh,toggle:Uh,trailing:Wh,desktop:Kh,compact:Qh,menu:Gh,menuOpen:qh};function Yh({brand:s,links:i=[],trailing:l,compact:c=!1,underline:d=!1,className:h=""}){const[m,v]=p.useState(!1);return f.jsxs("nav",{className:`${Je.nav} ${c?Je.compact:Je.desktop} ${h}`,"aria-label":"Primary",children:[f.jsxs("div",{className:Je.row,children:[f.jsx("div",{className:Je.brand,children:s}),c?f.jsx("button",{type:"button",className:Je.toggle,"aria-expanded":m,"aria-controls":"navbar-menu",onClick:()=>v(y=>!y),children:m?"Close":"Menu"}):f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:Je.links,children:i.map(y=>f.jsx("li",{className:Je.linkItem,children:f.jsxs("a",{className:Je.link,href:y.href,"aria-current":y.current?"page":void 0,children:[y.label,d&&f.jsx(Vd,{active:!!y.current,motion:"nav-bar"})]})},y.href))}),l&&f.jsx("div",{className:Je.trailing,children:l})]})]}),c&&f.jsxs("div",{id:"navbar-menu",className:`${Je.menu} ${m?Je.menuOpen:""}`,children:[f.jsx("ul",{className:Je.links,children:i.map(y=>f.jsx("li",{className:Je.linkItem,children:f.jsx("a",{className:Je.link,href:y.href,"aria-current":y.current?"page":void 0,children:y.label})},y.href))}),l&&f.jsx("div",{className:Je.trailing,children:l})]})]})}const Jh="_slider_18xic_30",Xh="_track_18xic_48",em="_fill_18xic_59",tm="_thumb_18xic_77",nm="_dragging_18xic_128",rm="_moving_18xic_138",wr={slider:Jh,track:Xh,fill:em,thumb:tm,dragging:nm,moving:rm};function om({value:s=.5,onChange:i,min:l=0,max:c=1,step:d=.01,bigStep:h=.05,label:m,disabled:v=!1,sound:y=!0,className:L=""}){const z=wo("slide",y),_=p.useRef(null),j=p.useRef(null),[M,I]=p.useState(!1),[N,O]=p.useState(!1),J=p.useRef(null),Q=p.useCallback(R=>Math.max(l,Math.min(c,R)),[l,c]),ee=(Q(s)-l)/(c-l||1),Y=ee*100,le=()=>parseFloat(getComputedStyle(_.current).getPropertyValue("--sc-size-slider-thumb"))||0,P=p.useCallback(R=>{const $=_.current;if(!$)return s;const ve=At($),he=le(),fe=ve.width-he,K=R/($.currentCSSZoom||1),se=fe<=0?0:(K-ve.left-he/2)/fe;return Q(l+se*(c-l))},[Q,l,c,s]),W=()=>{const R=_.current,$=j.current;R&&$&&(J.current=ai($,At(R)))},pe=()=>{var R,$;(R=j.current)==null||R.getAnimations().forEach(ve=>ve.cancel()),($=_.current)==null||$.removeAttribute("data-driven")};p.useLayoutEffect(()=>{const R=J.current;J.current=null;const $=_.current,ve=j.current;if(!R||!$||!ve||Un())return;const he=Ln(ve,"slider");if(!Bn(he))return;const fe=le(),K=(At($).width-fe)*ee;if(Math.abs(R.l-K)<.5)return;$.setAttribute("data-driven","");const se=Er(he,{l:R.l-K,r:R.r-K},{l:0,r:fe},fe);_r(ve,se,he.travelDur,"linear",{onDone:()=>$.removeAttribute("data-driven")})},[ee]),p.useEffect(()=>pe,[]);const ge=R=>{if(v)return;R.currentTarget.setPointerCapture(R.pointerId),I(!0);const $=P(R.clientX);$!==Q(s)&&W(),i==null||i($)},ne=R=>{v||!M||(N||(pe(),O(!0)),i==null||i(P(R.clientX)))},ue=()=>{I(!1),O(!1)},Z=R=>{if(v)return;let $;switch(R.key){case"ArrowRight":case"ArrowUp":$=s+(R.shiftKey?h:d);break;case"ArrowLeft":case"ArrowDown":$=s-(R.shiftKey?h:d);break;case"Home":$=l;break;case"End":$=c;break;default:return}R.preventDefault(),Q($)!==Q(s)&&(W(),z()),i==null||i(Q($))};return f.jsx("div",{className:`${wr.slider} ${L}`,role:"slider",tabIndex:v?-1:0,"aria-valuemin":Math.round(l*100),"aria-valuemax":Math.round(c*100),"aria-valuenow":Math.round(Y),"aria-label":m,"aria-disabled":v||void 0,onPointerDown:ge,onPointerMove:ne,onPointerUp:ue,onPointerCancel:ue,onKeyDown:Z,children:f.jsxs("span",{ref:_,className:`${wr.track} ${M?wr.dragging:""} ${N?wr.moving:""}`,style:{"--value":ee},"aria-hidden":"true",children:[f.jsx("span",{className:wr.fill}),f.jsx("span",{ref:j,className:wr.thumb})]})})}const sm="_field_1a2p2_32",am="_label_1a2p2_41",lm="_description_1a2p2_50",im="_helper_1a2p2_51",cm="_box_1a2p2_61",um="_input_1a2p2_75",dm="_icon_1a2p2_97",pm="_trailing_1a2p2_98",fm="_prefix_1a2p2_105",hm="_suffix_1a2p2_106",mm="_clear_1a2p2_129",gm="_helperError_1a2p2_170",vm="_errored_1a2p2_176",xm="_raised_1a2p2_187",ym="_disabled_1a2p2_193",tt={field:sm,label:am,description:lm,helper:im,box:cm,input:um,icon:dm,trailing:pm,prefix:fm,suffix:hm,clear:mm,helperError:gm,errored:vm,raised:xm,disabled:ym},ud=s=>s&&!p.isValidElement(s)&&typeof s!="string"?f.jsx(Us,{glyph:s,weight:"bold"}):s;function wm({label:s,description:i,helper:l,error:c,disabled:d=!1,type:h="text",value:m,onChange:v,placeholder:y,icon:L,prefix:z,suffix:_,trailing:j,clearable:M=!1,surface:I="page",onClear:N,className:O="",...J}){const Q=p.useId(),ee=`${Q}-description`,Y=`${Q}-helper`,le=p.useRef(null),P=!!c,W=[i&&ee,(c||l)&&Y].filter(Boolean).join(" ")||void 0,pe=m!==void 0?String(m).length>0:void 0,ge=()=>{const ne=le.current;N?N():ne&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(ne,""),ne.dispatchEvent(new Event("input",{bubbles:!0}))),ne==null||ne.focus()};return f.jsxs("div",{className:`${tt.field} ${I==="raised"?tt.raised:""} ${d?tt.disabled:""} ${P?tt.errored:""} ${O}`,children:[s&&f.jsx("label",{htmlFor:Q,className:tt.label,children:s}),i&&f.jsx("span",{id:ee,className:tt.description,children:i}),f.jsxs("div",{className:tt.box,children:[z&&f.jsx("span",{className:tt.prefix,children:z}),L&&f.jsx("span",{className:tt.icon,"aria-hidden":"true",children:ud(L)}),f.jsx("input",{ref:le,id:Q,type:h,className:tt.input,value:m,onChange:v,placeholder:y,disabled:d,"aria-invalid":P||void 0,"aria-describedby":W,...J}),_&&f.jsx("span",{className:tt.suffix,children:_}),M&&!d&&pe!==!1&&f.jsx("button",{type:"button",className:tt.clear,"aria-label":s?`Clear ${s}`:"Clear",onClick:ge,children:f.jsx(Us,{glyph:e1,weight:"bold"})}),j&&f.jsx("span",{className:tt.trailing,children:ud(j)})]}),(c||l)&&f.jsx("span",{id:Y,className:`${tt.helper} ${P?tt.helperError:""}`,children:c||l})]})}const bm="_card_gh9a1_25",km="_defs_gh9a1_38",_m="_flat_gh9a1_47",Lm="_interactive_gh9a1_48",Sm="_clear_gh9a1_51",zm="_frosted_gh9a1_62",Em="_thick_gh9a1_73",Cm="_toneAuto_gh9a1_88",jm="_toneLight_gh9a1_93",Mm="_toneDark_gh9a1_98",Nm="_glass_gh9a1_103",br={card:bm,defs:km,flat:_m,interactive:Lm,clear:Sm,frosted:zm,thick:Em,toneAuto:Cm,toneLight:jm,toneDark:Mm,glass:Nm},Am=["clear","frosted","thick"],dd={auto:"toneAuto",light:"toneLight",dark:"toneDark"};function Fm({variant:s="flat",level:i="frosted",tone:l="auto",interactive:c=!1,as:d="div",onClick:h,children:m,className:v="",style:y,...L}){const z=s==="glass"?"glass":"flat",_=Am.includes(i)?i:"frosted",j=dd[l]??dd.auto,M=z==="glass",I=p.useRef(null),{id:N,filter:O}=Od(I,M,_),J=c?"button":d,Q=[br.card,br[z],M?`${br[_]} ${br[j]}`:"",c?br.interactive:"",v].filter(Boolean).join(" ");return f.jsxs(J,{ref:I,type:c?"button":void 0,className:Q,onClick:c?h:void 0,style:O?{...y,"--glass-refract":`url(#${N})`}:y,...L,children:[O&&f.jsx("svg",{className:br.defs,"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:f.jsxs("filter",{id:N,x:"0",y:"0",width:O.w,height:O.h,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[f.jsx("feImage",{href:O.href,x:"0",y:"0",width:O.w,height:O.h,preserveAspectRatio:"none",result:"map"}),f.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:O.scale,xChannelSelector:"R",yChannelSelector:"G"})]})}),m]})}const Tm=`/* tokens:
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
`,Pm=`/* tokens:
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
`,pd=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,Rm=`/* tokens:
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
`,$m=`/* tokens:
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
`,Om=`/* tokens (role tokens, physical-controls Tier 2; shipped equal to today):
 *   --sc-color-tooltip-surface               · ground (= surface.inverse: ink in light / near-white in dark)
 *   --sc-color-tooltip-text                  · ink (= text-on-inverse)
 *   --sc-shadow-tooltip-plate                · plate shadow, outer layers as a drop-shadow filter (Tooltip.jsx; shipped zero alpha: none)
 *   --sc-space-component-padding-inline-tooltip · 12 inline
 *   --sc-space-component-padding-block-tooltip  · 8 block
 *   --sc-space-component-gap-tooltip         · offset (8) between the trigger and the arrow tip
 *   --sc-size-tooltip-arrow                  · arrow leg (4; 0 drops the arrow)
 *   --sc-size-tooltip-arrow-tip / -fillet    · arrow tip radius, fillet radius where it meets the bubble (Tooltip.jsx; 0 = sharp)
 *   --sc-size-tooltip-lift                   · travel of the open (4)
 *   --sc-radius-tooltip                      · 3 corner
 *   --sc-font-text-caption-*                 · 13 / regular / relaxed
 *   --sc-motion-tooltip-travel-duration / -easing · enter lift (role tokens, = motion.reveal)
 *   --sc-motion-tooltip-stretch / -squash · elastic scale on open (Tooltip.jsx; 0 = off)
 *   --sc-motion-tooltip-grow-from            · start scale of the open, about the arrow tip (Tooltip.jsx; 1 = off)
 *   --sc-border-width-default                · forced-colors edge
 *
 * Glass (variant="glass", concept B in sc-tune; the shipped tooltip is solid):
 *   --sc-color-tooltip-glass-tint / -text    · tint and ink
 *   --sc-shadow-tooltip-glass-rim / -text    · lit rim + floating shade, text halo
 *   --sc-size-tooltip-glass-frosted-frost / -saturation · backdrop blur radius (CSS takes half), saturation %
 *   --sc-size-tooltip-glass-frosted-refraction / -depth / -splay · read by Card/glass.js (Figma units)
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

/* ── glass ── the refraction filter is built per bubble by Card/glass.js and
 * arrives as --glass-refract (Chromium only). The arrow takes the tint. */
.glass {
  --tip-ground: var(--sc-color-tooltip-glass-tint);
  --glass-refraction: var(--sc-size-tooltip-glass-frosted-refraction);
  --glass-depth: var(--sc-size-tooltip-glass-frosted-depth);
  --glass-splay: var(--sc-size-tooltip-glass-frosted-splay);
  color: var(--sc-color-tooltip-glass-text);
  filter: none;
  box-shadow: var(--sc-shadow-tooltip-glass-rim);
  text-shadow: var(--sc-shadow-tooltip-glass-text);
  -webkit-backdrop-filter: blur(calc(var(--sc-size-tooltip-glass-frosted-frost) / 2)) saturate(calc(var(--sc-size-tooltip-glass-frosted-saturation) / 100));
  backdrop-filter: var(--glass-refract, ) blur(calc(var(--sc-size-tooltip-glass-frosted-frost) / 2)) saturate(calc(var(--sc-size-tooltip-glass-frosted-saturation) / 100));
}

.defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .tooltip { transition: none; }
}

/* Opaque fallbacks: glass becomes the solid tooltip when transparency is
 * turned off, when more contrast is asked for, and with no backdrop-filter. */
@media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
  .glass {
    --tip-ground: var(--sc-color-tooltip-surface);
    color: var(--sc-color-tooltip-text);
    box-shadow: none;
    text-shadow: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass {
    --tip-ground: var(--sc-color-tooltip-surface);
    color: var(--sc-color-tooltip-text);
    box-shadow: none;
    text-shadow: none;
  }
}

/* Forced colors drop the ground and the shadow: an inset edge keeps the
 * bubble apart from the page, and the arrow is drawn in the same ink. */
@media (forced-colors: active) {
  .tooltip {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  .tooltip { filter: none; }
  .arrow {
    forced-color-adjust: none;
    fill: CanvasText;
  }
}
`,Dm=`/* tokens:
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
`,fd=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,Hm=`/* tokens:
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
`,Vm=`/* tokens:
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
`,Im=`/* tokens:
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
`,Zm="_app_drnf6_6",Bm="_bar_drnf6_18",Um="_brand_drnf6_27",Wm="_meta_drnf6_34",Km="_readout_drnf6_35",Qm="_values_drnf6_36",Gm="_spacer_drnf6_42",qm="_stages_drnf6_46",Ym="_stageWrap_drnf6_54",Jm="_activeStage_drnf6_61",Xm="_stageSelect_drnf6_65",eg="_stageLabel_drnf6_75",tg="_stage_drnf6_46",ng="_panel_drnf6_94",rg="_group_drnf6_103",og="_prop_drnf6_121",sg="_editor_drnf6_122",ag="_token_drnf6_132",lg="_changed_drnf6_140",ig="_tokenHead_drnf6_144",cg="_tokenName_drnf6_150",ug="_num_drnf6_162",dg="_mini_drnf6_166",pg="_curve_drnf6_173",fg="_sounds_drnf6_187",hg="_sound_drnf6_187",mg="_shippedSound_drnf6_210",gg="_reset_drnf6_214",vg="_notes_drnf6_267",xg="_tabs_drnf6_279",yg="_tab_drnf6_279",wg="_pin_drnf6_308",bg="_pick_drnf6_313",kg="_propBlock_drnf6_320",_g="_easing_drnf6_321",Lg="_springRows_drnf6_322",Sg="_propLabel_drnf6_328",zg="_tokenActions_drnf6_332",Eg="_motionTiles_drnf6_347",Cg="_motionTile_drnf6_347",jg="_layers_drnf6_407",Mg="_layer_drnf6_407",Ng="_layerHead_drnf6_420",Ag="_layerGrid_drnf6_425",Fg="_scope_drnf6_430",Tg="_steps_drnf6_439",Pg="_step_drnf6_439",Rg="_stepRole_drnf6_473",H={app:Zm,bar:Bm,brand:Um,meta:Wm,readout:Km,values:Qm,spacer:Gm,stages:qm,stageWrap:Ym,activeStage:Jm,stageSelect:Xm,stageLabel:eg,stage:tg,panel:ng,group:rg,prop:og,editor:sg,token:ag,changed:lg,tokenHead:ig,tokenName:cg,num:ug,mini:dg,curve:pg,sounds:fg,sound:hg,shippedSound:mg,reset:gg,notes:vg,tabs:xg,tab:yg,pin:wg,pick:bg,propBlock:kg,easing:_g,springRows:Lg,propLabel:Sg,tokenActions:zg,motionTiles:Eg,motionTile:Cg,layers:jg,layer:Mg,layerHead:Ng,layerGrid:Ag,scope:Fg,steps:Tg,step:Pg,stepRole:Rg},Qt=["day","week","month"],xo=["work","studio","journal"],Mt=(s,{press:i=!0}={})=>{const l=`--sc-motion-${s}`;return{jsTokens:[`${l}-stretch`,`${l}-squash`,...i?[`${l}-press-lean`,`${l}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${l}-stretch`]:"0.45",[`${l}-squash`]:"0",...i?{[`${l}-press-lean`]:"0.83",[`${l}-press-lean-duration`]:"150ms"}:{}},springs:{[`${l}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},Vn={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},hd=s=>({light:s(Vn.light),dark:s(Vn.dark)}),md={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}},gd={none:void 0,search:q0,mail:Q0,location:Y0},vd={none:void 0,eye:G0,copy:K0,calendar:B0,clock:W0,caret:U0},Zl={flat:{variant:"flat"},"clear · light":{variant:"glass",level:"clear",tone:"light"},"frosted · light":{variant:"glass",level:"frosted",tone:"light"},"thick · light":{variant:"glass",level:"thick",tone:"light"},"clear · dark":{variant:"glass",level:"clear",tone:"dark"},"frosted · dark":{variant:"glass",level:"frosted",tone:"dark"},"thick · dark":{variant:"glass",level:"thick",tone:"dark"}},Bl={position:"absolute",inset:0,overflow:"hidden",borderRadius:"var(--sc-radius-card)"},$s={"page (follows theme)":f.jsxs("div",{"aria-hidden":"true",style:{...Bl,background:"var(--sc-color-surface-page)"},children:[f.jsx("div",{style:{position:"absolute",inset:"0 50% 0 0",background:"var(--sc-color-surface-sunk)"}}),f.jsx("div",{style:{position:"absolute",inset:"30% 0 30% 25%",background:"var(--sc-color-surface-floating)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),"type and colour":f.jsxs("div",{"aria-hidden":"true",style:Bl,children:[f.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 24px, var(--sc-color-atmosphere-river) 24px 48px, var(--sc-color-atmosphere-lapis) 48px 72px)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),type:f.jsx("div",{"aria-hidden":"true",style:{...Bl,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-title-card)",color:"var(--sc-color-text-primary)",wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"}),none:null};let Ul=!1;function $g({p:s,ctx:i}){const l=p.useRef(null);return p.useEffect(()=>{var L;const c=[...((L=l.current)==null?void 0:L.children)||[]],d=i.slow||1,h=s.reduced,m=h==="opacity only"?{opacity:s.opacityFrom,transform:"none",filter:"none"}:{opacity:s.opacityFrom,transform:`translateY(${s.distance}px) scale(${s.scaleFrom}) rotate(${s.rotateFrom}deg)`,filter:`blur(${s.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},y=c.map((z,_)=>z.animate([m,v],{duration:h==="none"?0:s.duration*d,delay:h==="none"?0:(s.delay+_*s.stagger)*d,easing:s.easing,fill:"both"}));return()=>y.forEach(z=>z.cancel())},[s,i.replay,i.slow]),f.jsx("div",{className:H.motionTiles,ref:l,children:Array.from({length:s.count},(c,d)=>f.jsx("span",{className:H.motionTile},d))})}const Wl=s=>s.reduced==="none"?0:s.delay+s.stagger*(s.count-1)+s.duration,zr={Switch:{css:[Tm],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(s,i)=>i("checked",!s.checked),render:(s,i,l)=>f.jsx(j0,{checked:s.checked,disabled:s.disabled,glyphs:s.glyphs,label:s.label,sound:!1,onChange:c=>{i("checked",c.target.checked),l()}})},Stepper:{css:[Pm,pd],jsTokens:[...Mt("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...Mt("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:Mt("stepper",{press:!1}).seed.springs,scoped:hd(s=>({"--sc-shadow-stepper-track":s.recess,"--sc-color-stepper-key":s.keyFill,"--sc-color-stepper-key-shade":s.keyShade,"--sc-shadow-stepper-key":s.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(s,i)=>i("value",s.value+s.step>s.max?s.min:s.value+s.step),render:(s,i,l)=>f.jsx(p1,{value:s.value,min:s.min,max:s.max,step:s.step,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{i("value",c),l()}})},SegmentedControl:{css:[Rm],...Mt("segmented-control"),seed:{...Mt("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Qt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(s,i)=>i("value",Qt[(Qt.indexOf(s.value)+1)%Qt.length]),render:(s,i,l)=>f.jsx(k1,{label:"Range",value:s.value,size:s.size,disabled:s.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==s.value&&l(),i("value",c)}})},Tooltip:{css:[Om],jsTokens:[...Mt("tooltip",{press:!1}).jsTokens,"--sc-motion-tooltip-grow-from","--sc-shadow-tooltip-plate","--sc-size-tooltip-arrow-tip","--sc-size-tooltip-arrow-fillet",...["refraction","depth","splay"].map(s=>`--sc-size-tooltip-glass-frosted-${s}`)],seed:{overrides:{"--sc-motion-tooltip-grow-from":"0","--sc-motion-tooltip-stretch":"0","--sc-motion-tooltip-squash":"0.15","--sc-size-tooltip-lift":"0px"},springs:{"--sc-motion-tooltip-travel-easing":{stiffness:146,damping:17.88,mass:1}},scoped:{light:{"--sc-color-tooltip-surface":Vn.light.keyFill,"--sc-color-tooltip-text":"#1A1815","--sc-shadow-tooltip-plate":Vn.light.key},dark:{"--sc-color-tooltip-surface":Vn.dark.keyFill,"--sc-color-tooltip-text":"#EAE8E3","--sc-shadow-tooltip-plate":Vn.dark.key}}},shippedSound:null,trigger:"the tooltip opens (pointer enters or focus lands on the trigger)",props:[{name:"show",type:"enum",options:["hover","open","closed"],default:"hover"},{name:"variant",type:"enum",options:["solid","glass"],default:"solid"},{name:"backdrop",type:"enum",options:Object.keys($s),default:"page (follows theme)"},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(s,i)=>i("show",s.show==="open"?"closed":"open"),render:(s,i,l)=>f.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-md) var(--sc-space-layout-stack-sm) var(--sc-space-layout-stack-sm)"},children:[$s[s.backdrop],f.jsx("span",{style:{position:"relative",display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:f.jsx(uh,{content:s.content,multiline:s.multiline,open:s.show==="hover"?void 0:s.show==="open",variant:s.variant,children:f.jsx("span",{style:{display:"inline-block"},onMouseEnter:()=>{s.show==="hover"&&l()},onFocus:()=>{s.show==="hover"&&l()},children:f.jsx(ld,{variant:"primary",size:"sm",arrow:!1,sound:!1,children:"Copy"})})})})]})},NavBar:{css:[Dm,fd],...Mt("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:xo,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(s,i)=>i("current",xo[(xo.indexOf(s.current)+1)%xo.length]),render:(s,i)=>f.jsx("div",{onClickCapture:l=>{const c=l.target.closest("a");c&&(l.preventDefault(),i("current",c.textContent.trim().toLowerCase()))},children:f.jsx(Yh,{brand:f.jsx("span",{children:"Shokunin"}),underline:s.underline,links:xo.map(l=>({href:`#${l}`,label:l[0].toUpperCase()+l.slice(1),current:l===s.current}))})})},PlusUnderline:{css:[fd],...Mt("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Qt,default:"day"}],play:(s,i)=>i("active",Qt[(Qt.indexOf(s.active)+1)%Qt.length]),render:(s,i)=>f.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Qt.map(l=>f.jsxs("button",{type:"button",role:"tab","aria-selected":l===s.active,onClick:()=>i("active",l),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[l[0].toUpperCase()+l.slice(1),f.jsx(Vd,{active:l===s.active})]},l))})},Slider:{css:[Hm],jsTokens:Mt("slider",{press:!1}).jsTokens,seed:{overrides:{...Mt("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:Mt("slider",{press:!1}).seed.springs,scoped:hd(s=>{const i=s===Vn.light?md.light:md.dark;return{"--sc-shadow-slider-track":s.recess,"--sc-color-slider-thumb-rim-top":i.rimTop,"--sc-color-slider-thumb-rim-bottom":i.rimBottom,"--sc-color-slider-thumb-face-top":i.faceTop,"--sc-color-slider-thumb-face-bottom":i.faceBottom,"--sc-shadow-slider-thumb":s.key,"--sc-shadow-slider-thumb-pressed":s.keyPressed}})},shippedSound:"drams-009-01.wav",trigger:"a keyboard step that changes the value; a drag is silent",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(s,i)=>i("value",s.value>=.75?.25:.75),render:(s,i,l)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Ul=!0},onKeyUpCapture:()=>{Ul=!1},children:f.jsx(om,{value:s.value,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{const d=Math.round(c*100)/100;Ul&&d!==s.value&&l(),i("value",d)}})})},Input:{css:[Vm,pd],shippedSound:null,trigger:"ships silent",props:[{name:"label",type:"text",default:"Email address"},{name:"description",type:"text",default:""},{name:"placeholder",type:"text",default:"you@studio.com"},{name:"value",type:"text",default:"levi@levibahn.com"},{name:"icon",type:"enum",options:Object.keys(gd),default:"mail"},{name:"prefix",type:"text",default:""},{name:"suffix",type:"text",default:""},{name:"trailing",type:"enum",options:Object.keys(vd),default:"none"},{name:"clearable",type:"boolean",default:!0},{name:"helper",type:"text",default:""},{name:"error",type:"text",default:""},{name:"disabled",type:"boolean",default:!1},{name:"surface",type:"enum",options:["page","raised"],default:"page"}],play:null,render:(s,i)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 4)",...s.surface==="raised"?{background:"var(--sc-color-surface-raised)",padding:"var(--sc-space-component-padding-md)"}:{}},children:f.jsx(wm,{surface:s.surface,label:s.label,description:s.description||void 0,placeholder:s.placeholder,value:s.value,icon:gd[s.icon],prefix:s.prefix||void 0,suffix:s.suffix||void 0,trailing:vd[s.trailing],clearable:s.clearable,onClear:()=>i("value",""),helper:s.helper||void 0,error:s.error||void 0,disabled:s.disabled,onChange:l=>i("value",l.target.value)})})},Card:{css:[Im],jsTokens:["clear","frosted","thick"].flatMap(s=>["refraction","depth","splay"].map(i=>`--sc-size-card-glass-${s}-${i}`)),shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Zl)],default:"all"},{name:"backdrop",type:"enum",options:Object.keys($s),default:"page (follows theme)"},{name:"interactive",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"title",type:"text",default:"Studio journal"},{name:"body",type:"text",default:"Notes from the bench."}],play:null,render:s=>{const i=s.show==="all"?Object.keys(Zl):[s.show];return f.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-sm)"},children:[$s[s.backdrop],f.jsx("div",{style:{position:"relative",display:"grid",gridTemplateColumns:`repeat(${Math.min(i.length,4)}, calc(var(--sc-space-layout-stack-xl) * 2.5))`,gap:"var(--sc-space-layout-stack-sm)"},children:i.map(l=>[s.show==="all"&&l==="clear · dark"?f.jsx("span",{},"gap"):null,f.jsxs(Fm,{...Zl[l],interactive:s.interactive,disabled:s.interactive?s.disabled:void 0,onClick:()=>{},children:[f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-label-ui)",color:"var(--sc-color-text-secondary)"},children:l}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-default)"},children:s.title}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-dense)",color:"var(--sc-color-text-secondary)"},children:s.body})]},l)])})]})}},Button:{css:[$m],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(s,i,l)=>f.jsx(ld,{variant:s.variant,size:s.size,disabled:s.disabled,loading:s.loading,arrow:s.arrow,sound:!1,onClick:()=>l(),children:s.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(s,i,l,c)=>f.jsx($g,{p:s,ctx:c})}},Id=s=>{var i;return((i=s==null?void 0:s.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:i[1].split(",").map(Number))||null};function Og(s){var c;const i=Id(s);if(i){const d=[];for(let h=0;h<=40;h+=1){const m=h/40,v=3*(1-m)**2*m*i[0]+3*(1-m)*m**2*i[2]+m**3,y=3*(1-m)**2*m*i[1]+3*(1-m)*m**2*i[3]+m**3;d.push([v,y])}return d}const l=(c=s==null?void 0:s.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(d=>parseFloat(d));return l?l.map((d,h)=>[h/(l.length-1),d]):[[0,0],[1,1]]}function Dg(s){const i=Og(s),l=i.map(m=>m[1]),c=Math.min(0,...l),h=Math.max(1,...l)-c||1;return i.map(([m,v],y)=>`${y?"L":"M"}${m.toFixed(3)} ${(1-(v-c)/h).toFixed(3)}`).join(" ")}const Nt=(s,i=2)=>+(+s).toFixed(i),Kl=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function Zd(s){Kl.fillStyle="#000",Kl.fillStyle=s;const i=Kl.fillStyle;if(i.startsWith("#"))return{hex:i,a:1};const l=i.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return l?{hex:"#"+[l[1],l[2],l[3]].map(d=>Math.round(+d).toString(16).padStart(2,"0")).join(""),a:l[4]!==void 0?+l[4]:1}:{hex:"#000000",a:1}}function Ws(s,i){if(i>=1)return s.toUpperCase();const l=parseInt(s.slice(1),16);return`rgb(${l>>16&255} ${l>>8&255} ${l&255} / ${+i.toFixed(3)})`}const Hg=s=>String(s).endsWith("ms")?parseFloat(s):parseFloat(s)*1e3;function Bd({label:s,value:i,spring:l,presets:c,asRef:d,onChange:h}){const[m,v]=p.useState(l?"spring":"bezier"),y=Id(i)||[.25,.1,.25,1],L=l||{stiffness:260,damping:22,mass:1},z=j=>{const M=Bs(j);h(M.easing,j,M.settleMs)},_=l?Bs(l):null;return f.jsxs("div",{className:H.easing,children:[f.jsxs("div",{className:H.editor,children:[f.jsx("svg",{className:H.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:Dg(i)})}),f.jsxs("select",{"aria-label":`${s} mode`,value:m,onChange:j=>{v(j.target.value),j.target.value==="spring"?z(L):h(`cubic-bezier(${y.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&f.jsxs("select",{"aria-label":`${s} preset`,value:"",onChange:j=>{const M=c.find(I=>I.name===j.target.value);M&&(v("bezier"),h(d?`var(${M.name})`:M.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),c.map(j=>f.jsx("option",{value:j.name,children:j.name.replace("--sc-p-motion-easing-","")},j.name))]})]}),m==="bezier"?f.jsx("div",{className:H.editor,children:y.map((j,M)=>f.jsx("input",{type:"number","aria-label":`${s} bezier point ${M+1}`,className:H.num,step:"0.01",value:j,onChange:I=>{const N=[...y];N[M]=+I.target.value,h(`cubic-bezier(${N.join(", ")})`,null,null)}},M))}):f.jsxs("div",{className:H.springRows,children:[(()=>{const j=2*Math.PI*Math.sqrt(L.mass/L.stiffness),M=1-L.damping*j/(4*Math.PI*L.mass),I=(N,O)=>z({...L,stiffness:+((2*Math.PI/N)**2*L.mass).toFixed(1),damping:+(4*Math.PI*(1-O)*L.mass/N).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:H.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${s} spring duration`,min:50,max:2e3,step:10,value:Math.round(j*1e3),onChange:N=>I(+N.target.value/1e3,M)}),f.jsxs("span",{className:H.readout,children:[Math.round(j*1e3),"ms"]})]}),f.jsxs("label",{className:H.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${s} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+M.toFixed(2)),onChange:N=>I(j,+N.target.value)}),f.jsx("span",{className:H.readout,children:M.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([j,M,I,N])=>f.jsxs("label",{className:H.mini,children:[j,f.jsx("input",{type:"range",min:M,max:I,step:N,value:L[j],onChange:O=>z({...L,[j]:+O.target.value})}),f.jsx("span",{className:H.readout,children:L[j]})]},j)),_&&f.jsxs("span",{className:H.readout,children:["settles ",_.settleMs,"ms · overshoot ",Math.round(_.overshoot*100),"%"]})]})]})}function Vg(s){const i=[];let l=0,c="";for(const d of s||"")d==="("&&(l+=1),d===")"&&(l-=1),d===","&&l===0?(i.push(c.trim()),c=""):c+=d;return c.trim()&&i.push(c.trim()),i.filter(d=>d&&d!=="none").map(d=>{var j;const h=/\binset\b/.test(d),m=((j=d.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:j[0])||"rgb(0 0 0 / 0.2)",v=d.replace(m,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(M=>parseFloat(M)||0),[y=0,L=0,z=0,_=0]=v;return{inset:h,x:y,y:L,blur:z,spread:_,color:m}})}const Ig=s=>s.map(i=>`${i.inset?"inset ":""}${Nt(i.x)}px ${Nt(i.y)}px ${Nt(i.blur)}px ${Nt(i.spread)}px ${i.color}`).join(", ");function Zg({name:s,value:i,onSet:l}){const c=Vg(i),d=(h,m)=>l(Ig(c.map((v,y)=>y===h?{...v,...m}:v)));return f.jsx("div",{className:H.layers,children:c.map((h,m)=>{const v=Zd(h.color),y=h.inset?"inner edge":(h.x<0||h.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:H.layer,children:[f.jsxs("span",{className:H.layerHead,children:["layer ",m+1," · ",y]}),f.jsx("div",{className:H.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([L,z,_,j])=>f.jsxs("label",{className:H.mini,children:[L,f.jsx("input",{type:"number",className:H.num,"aria-label":`${s} layer ${m+1} ${L}`,min:z,max:_,step:j,value:Nt(h[L]),onChange:M=>d(m,{[L]:+M.target.value})})]},L))}),f.jsxs("div",{className:H.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} layer ${m+1} colour`,value:v.hex,onChange:L=>d(m,{color:Ws(L.target.value,v.a)})}),f.jsxs("label",{className:H.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${s} layer ${m+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:L=>d(m,{color:Ws(v.hex,+L.target.value)})}),f.jsx("span",{className:H.readout,children:Nt(v.a)})]})]})]},m)})})}const Bg=[11,12,13,14,16,20].map((s,i)=>[s,["chrome","ui","caption","dense","body","lead"][i],`--sc-p-font-size-${s}`]),Ug=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],Wg=s=>/^--sc-font-.*-size$/.test(s)?Bg:/^--sc-size-.*icon/.test(s)?Ug:null;function Kg({name:s,kind:i,shipped:l,value:c,override:d,scope:h,adj:m,spring:v,pin:y,refs:L,easingPresets:z,onSet:_,onAdj:j,onSpring:M,onReset:I,onPin:N,restOf:O,onCopyRest:J}){const Q=d!==void 0,[ee,Y]=p.useState(!!y);let le=null;if(i==="color"){const P=Zd(c);le=f.jsxs("div",{className:H.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} colour`,value:P.hex,onChange:W=>_(Ws(W.target.value,P.a))}),f.jsx("input",{type:"range","aria-label":`${s} alpha`,min:"0",max:"1",step:"0.01",value:P.a,onChange:W=>_(Ws(P.hex,+W.target.value))})]})}else if(i==="length"||i==="number"){const P=parseFloat(c)||0,W=Math.abs(parseFloat(l)||1),pe=i==="length"?Math.max(64,W*4):Math.max(2,W*2),ge=i==="length"?"px":"",ne=i==="length"?.5:.005;le=f.jsxs("div",{className:H.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:pe,step:ne,value:P,onChange:Z=>_(`${Z.target.value}${ge}`)}),f.jsx("input",{type:"number","aria-label":`${s} value`,className:H.num,step:ne,value:Nt(P,3),onChange:Z=>_(`${Z.target.value}${ge}`)})]});const ue=Wg(s);ue&&(le=f.jsxs(f.Fragment,{children:[le,f.jsx("div",{className:H.steps,role:"group","aria-label":`${s} scale`,children:ue.map(([Z,R,$])=>f.jsxs("button",{type:"button",className:H.step,"aria-pressed":P===Z,onClick:()=>_(`var(${$})`),children:[Z,R&&f.jsx("span",{className:H.stepRole,children:R})]},Z))})]}))}else if(i==="time"){const P=Hg(c);le=f.jsxs("div",{className:H.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:"1200",step:"10",value:P,onChange:W=>_(`${W.target.value}ms`)}),f.jsxs("span",{className:H.readout,children:[Math.round(P),"ms"]})]})}else i==="easing"?le=f.jsx(Bd,{label:s,value:c,spring:v,presets:z,asRef:!0,onChange:(P,W,pe)=>{_(P),M(W,pe)}}):i==="shadow"?le=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:H.editor,children:[f.jsxs("label",{className:H.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.scale)??1,onChange:P=>j({...m,scale:+P.target.value})})]}),f.jsxs("label",{className:H.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.strength)??1,onChange:P=>j({...m,strength:+P.target.value})})]})]}),f.jsx(Zg,{name:s,value:c,onSet:_})]}):le=f.jsx("input",{type:"text","aria-label":s,value:c,onChange:P=>_(P.target.value)});return f.jsxs("div",{className:`${H.token} ${Q?H.changed:""}`,children:[f.jsxs("div",{className:H.tokenHead,children:[f.jsxs("code",{className:H.tokenName,children:[s.replace("--sc-",""),Q&&h&&f.jsx("span",{className:H.scope,children:h==="all"?"both modes":`${h} only`})]}),f.jsxs("span",{className:H.tokenActions,children:[O&&f.jsx("button",{type:"button",className:H.reset,title:`Set to this concept's ${O.replace("--sc-","")} value`,onClick:J,children:"copy rest"}),f.jsx("button",{type:"button",className:H.reset,"aria-pressed":ee,onClick:()=>Y(P=>!P),children:"note"}),Q&&f.jsx("button",{type:"button",className:H.reset,onClick:I,"aria-label":`Reset ${s}`,children:"reset"})]})]}),le,(L==null?void 0:L.length)>0&&i!=="easing"&&f.jsxs("select",{"aria-label":`${s} token`,value:d!=null&&d.startsWith("var(")?d.slice(4,-1):"",onChange:P=>P.target.value&&_(`var(${P.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),L.map(P=>f.jsx("option",{value:P,children:P.replace("--sc-p-","")},P))]}),ee&&f.jsx("input",{type:"text",className:H.pin,"aria-label":`Note on ${s}`,placeholder:"Note on this value…",value:y||"",onChange:P=>N(P.target.value)}),f.jsxs("div",{className:H.values,children:[f.jsxs("span",{title:l,children:["shipped ",l]}),Q&&f.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function Qg({def:s,value:i,spring:l,easingPresets:c,onChange:d,onSpring:h}){const m=`prop-${s.name}`;let v;if(s.type==="boolean")v=f.jsx("input",{id:m,type:"checkbox",checked:!!i,onChange:y=>d(y.target.checked)});else if(s.type==="enum")v=f.jsx("select",{id:m,value:i,onChange:y=>d(y.target.value),children:s.options.map(y=>f.jsx("option",{children:y},y))});else if(s.type==="number")v=f.jsx("input",{id:m,type:"number",className:H.num,min:s.min,max:s.max,value:i,onChange:y=>d(+y.target.value)});else if(s.type==="range")v=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:m,type:"range",min:s.min,max:s.max,step:s.step,value:i,onChange:y=>d(+y.target.value)}),f.jsxs("span",{className:H.readout,children:[i,s.unit||""]})]});else{if(s.type==="easing")return f.jsxs("div",{className:H.propBlock,children:[f.jsx("span",{className:H.propLabel,children:f.jsx("code",{children:s.name})}),f.jsx(Bd,{label:s.name,value:i,spring:l,presets:c,onChange:(y,L,z)=>h(y,L,z)})]});v=f.jsx("input",{id:m,type:"text",value:i,onChange:y=>d(y.target.value)})}return f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:m,children:f.jsx("code",{children:s.name})}),v]})}const bn=!0,Gg="./sounds/",qg=3,Yg=s=>`sc-tune:v2:${s}`,Jg=["all","light","dark"],Ud=s=>/^--sc-(color|shadow)-/.test(s),Os=(s,i)=>Ud(s)?i:"all",Ks=()=>({all:{},light:{},dark:{}}),Ds=(s,i)=>({...s.overrides.all,...s.overrides[i]}),Ql=["A","B","C","D"],Jl=s=>[...new Set(s)],Zs=Jl(l0.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Xg={color:Zs.filter(s=>s.startsWith("--sc-p-color-")&&!s.endsWith("-rgb")),length:Zs.filter(s=>/^--sc-p-(space|size|radius|border-width)-/.test(s)),time:Zs.filter(s=>s.startsWith("--sc-p-motion-duration-"))},ev=Zs.filter(s=>s.startsWith("--sc-p-motion-easing-"));function tv(s){var d;const i=s.join(`
`),l=Jl(((d=i.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:d.map(h=>h.slice(4)))||[]),c=Jl(i.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:l.sort(),derived:c}}const xd=s=>{var i;return((i=s.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:i[1])||"other"};function Hs(s){return s?/^(cubic-bezier|ease|linear|steps)/.test(s)?"easing":/^-?[\d.]+m?s$/.test(s)?"time":/px/.test(s)&&/(rgb|#|hsl|color\(|inset)/.test(s)||/(rgb|#|hsl|color\()/.test(s)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(s.trim())?"shadow":CSS.supports("color",s)?"color":/^-?[\d.]+px$/.test(s)?"length":/^-?[\d.]+$/.test(s)?"number":"text":"text"}const Xl=(s,i)=>{if(!s)return{};const l=getComputedStyle(s);return Object.fromEntries(i.map(c=>[c,l.getPropertyValue(c).trim()]))},nv=(s,i)=>{if(!s)return{};const l=document.createElement("span");l.style.cssText="position:absolute;visibility:hidden;height:0;",s.appendChild(l);const c=Object.fromEntries(i.map(d=>(l.style.width=`var(${d})`,[d,getComputedStyle(l).width])));return l.remove(),c},yd=(s,i)=>{if(!s)return{};const l=document.createElement("div");l.style.display="none";for(const[d,h]of Object.entries(i))l.style.setProperty(d,h);s.appendChild(l);const c=Xl(l,Object.keys(i));return l.remove(),c};function rv(s,i,l){return s.replace(/(-?[\d.]+)px/g,(c,d)=>`${Nt(d*i)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,d,h)=>`rgba(${d}, ${Nt(Math.min(1,h*l),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,d)=>`/ ${Nt(Math.min(1,d*l),3)})`)}let kn=null;const wd=new Map;async function Vs(s,i,l){if(!s)return;kn=kn||new(window.AudioContext||window.webkitAudioContext),kn.state==="suspended"&&await kn.resume();let c=wd.get(s);if(!c){const m=await(await fetch(Gg+s)).arrayBuffer();c=await kn.decodeAudioData(m),wd.set(s,c)}const d=kn.createBufferSource(),h=kn.createGain();h.gain.value=i,d.buffer=c,d.playbackRate.value=l,d.connect(h).connect(kn.destination),d.start()}const ov=["rest","hover","focus","active"],sv={hover:":hover",focus:":focus-visible",active:":active"};function av(s){var d;const i=sv[s];if(!i)return"";const l=[],c=(h,m)=>{for(const v of h){if(v.cssRules&&v.media){c(v.cssRules,L=>m(`@media ${v.media.mediaText}{${L}}`));continue}if(!v.selectorText||!v.selectorText.includes(i))continue;const y=v.selectorText.split(",").map(L=>L.trim()).filter(L=>L.includes(i)).map(L=>`[data-force='${s}'] ${L.split(i).join("")}`).join(", ");l.push(m(`${y}{${v.style.cssText}}`))}};for(const h of document.styleSheets)if(((d=h.ownerNode)==null?void 0:d.id)!=="sc-tune-force")try{c(h.cssRules,m=>m)}catch{}return l.join(`
`)}const li=s=>Object.fromEntries(s.props.map(i=>[i.name,i.default]));function Wd(s,i){var l,c,d;for(const[h,m]of Object.entries(((l=s.seed)==null?void 0:l.overrides)||{}))Object.values(i.overrides).some(v=>h in v)||(i.overrides.all[h]=m);for(const[h,m]of Object.entries(((c=s.seed)==null?void 0:c.scoped)||{}))for(const[v,y]of Object.entries(m))!(v in i.overrides[h])&&!(v in i.overrides.all)&&(i.overrides[h][v]=y);for(const[h,m]of Object.entries(((d=s.seed)==null?void 0:d.springs)||{})){if(i.springs[h]||Object.values(i.overrides).some(y=>h in y))continue;const v=Bs(m);i.springs[h]=m,i.overrides.all[h]=v.easing,i.overrides.all[h.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return i}const Kd=(s,i)=>Wd(s,{id:i,overrides:Ks(),shadowAdj:Ks(),springs:{},pins:{},notes:"",props:li(s),sound:{file:s.shippedSound,volume:.7,rate:1}});function lv(s){const i=zr[s];return{component:s,notes:"",active:"A",concepts:[Kd(i,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:i.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function bd(s){var i;try{const l=JSON.parse(localStorage.getItem(Yg(s))||"null");if((l==null?void 0:l.component)===s&&Array.isArray(l.concepts)){for(const c of l.concepts){if(c.props={...li(zr[s]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const d=Ks();for(const[m,v]of Object.entries(c.overrides))d[Ud(m)?"dark":"all"][m]=v;const h=Ks();for(const[m,v]of Object.entries(c.shadowAdj||{}))h.dark[m]=v;c.overrides=d,c.shadowAdj=h}if(s==="Button")for(const d of Object.values(c.overrides))for(const h of Object.keys(d)){if(!h.startsWith("--sc-font-text-label-chrome-"))continue;const m=h.replace("label-chrome-","label-button-lg-");m in d||(d[m]=d[h]),delete d[h]}}((i=l.view)==null?void 0:i.ground)==="#E3DFD8"&&(l.view.ground="--sc-color-surface-page");for(const c of l.concepts)Wd(zr[s],c);return l}}catch{}return lv(s)}function iv(){const s=new URLSearchParams(location.search).get("c"),[i,l]=p.useState(zr[s]?s:"Switch"),[c,d]=p.useState(()=>bd(i)),[h,m]=p.useState(null),[v,y]=p.useState([]),[L,z]=p.useState(!0),[_,j]=p.useState({}),[M,I]=p.useState({}),[N,O]=p.useState({}),[J,Q]=p.useState(0),[ee,Y]=p.useState(!1),[le,P]=p.useState(!1),W=p.useRef(null),pe=p.useRef({}),ge=p.useRef(null),ne=zr[i],ue=ne.kind==="motion",{tokens:Z,derived:R}=p.useMemo(()=>{const k=tv(ne.css);return{...k,tokens:[...new Set([...k.tokens,...ne.jsTokens||[]])].sort()}},[ne]),$=c.concepts.find(k=>k.id===c.active)||c.concepts[0],ve=p.useMemo(()=>{const k=getComputedStyle(document.documentElement);return ev.map(A=>({name:A,value:k.getPropertyValue(A).trim()}))},[]);p.useEffect(()=>{fetch("./spec.json").then(k=>k.json()).then(k=>{l(k.component),d(k.state),m({recorded:k.recorded})})},[]),p.useEffect(()=>{},[]);const he=k=>{l(k),d(bd(k)),history.replaceState(null,"",`?c=${k}`)};p.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const fe=c.view.force||"rest";p.useEffect(()=>{let k=document.getElementById("sc-tune-force");k||(k=document.createElement("style"),k.id="sc-tune-force",document.head.appendChild(k)),k.textContent=av(fe)},[fe]),p.useLayoutEffect(()=>{var F;j(Xl(W.current,Z));const k=Xl(W.current,Z);pe.current[c.view.theme]=k,I({...k,...yd(W.current,Ds($,c.view.theme))});const A=(F=ge.current)==null?void 0:F.querySelector("[class]");O(nv(A?A.closest("label")||A:null,R))},[Z,R,$.overrides,c.view.theme,$.props]),p.useEffect(()=>{},[c,i]);const K=p.useCallback(k=>d(A=>A),[]),se=p.useCallback((k,A)=>d(F=>({...F,concepts:F.concepts.map(ke=>ke.id===k?A(ke):ke)})),[]),G=p.useCallback(k=>(A,F)=>se(k,ke=>({...ke,props:{...ke.props,[A]:F}})),[se]),b=k=>K(A=>({...A,concepts:A.concepts.map(F=>F.id===A.active?k(F):F)})),T=c.view.theme,de=(k,A,F)=>{const ke=Os(A,T),ye={...k,[ke]:{...k[ke]}};return F===void 0?delete ye[ke][A]:ye[ke][A]=F,ye},ae=(k,A)=>b(F=>({...F,overrides:de(F.overrides,k,A)})),xe=k=>b(A=>{const F={...A.springs};return delete F[k],{...A,overrides:de(A.overrides,k,void 0),shadowAdj:de(A.shadowAdj,k,void 0),springs:F}}),be=(k,A,F)=>b(ke=>{const ye={...ke.springs};let Le=ke.overrides;if(A){ye[k]=A;const nt=k.replace(/-easing$/,"-duration");nt!==k&&Z.includes(nt)&&(Le=de(Le,nt,`${F}ms`))}else delete ye[k];return{...ke,springs:ye,overrides:Le}}),je=(k,A)=>b(F=>({...F,shadowAdj:de(F.shadowAdj,k,A),overrides:de(F.overrides,k,rv(_[k],A.scale??1,A.strength??1))})),ze=(k,A)=>b(F=>({...F,pins:{...F.pins,[k]:A}})),Ee=(k,A)=>b(F=>({...F,sound:{...F.sound,[k]:A}})),He=(k,A)=>d(F=>({...F,view:{...F.view,[k]:A}})),Gt=ne.props.some(k=>k.name==="disabled"),bo=k=>d(A=>({...A,view:{...A.view,force:k==="disabled"?"rest":k},concepts:Gt?A.concepts.map(F=>({...F,props:{...F.props,disabled:k==="disabled"}})):A.concepts})),Sn=k=>K(A=>{const F=Ql.find(Le=>!A.concepts.some(nt=>nt.id===Le));if(!F)return A;const ke=A.concepts.find(Le=>Le.id===A.active),ye=k?{...structuredClone(ke),id:F,notes:""}:Kd(ne,F);return{...A,concepts:[...A.concepts,ye],active:F}}),Cr=k=>K(A=>{if(A.concepts.length<2)return A;const F=A.concepts.filter(ke=>ke.id!==k);return{...A,concepts:F,active:F[0].id,pick:A.pick.id===k?{id:null,reason:A.pick.reason}:A.pick}}),ko=()=>d(k=>{const A=!k.view.blind,F=A?[...k.concepts.map(ke=>ke.id)].sort(()=>Math.random()-.5):null;return{...k,view:{...k.view,blind:A,order:F,compare:A?!0:k.view.compare}}}),Kn=p.useCallback(()=>{Q(A=>A+1),ne.play&&c.concepts.forEach(A=>ne.play(A.props,G(A.id)));const k=c.concepts.find(A=>A.id===c.active);k!=null&&k.sound.file&&Vs(k.sound.file,k.sound.volume,k.sound.rate)},[ne,c.concepts,c.active,G]),Qn=ue?Math.max(1200,Wl($.props)*c.view.slow+900):1400*c.view.slow;p.useEffect(()=>{if(!ee)return;const k=setInterval(Kn,Qn);return()=>clearInterval(k)},[ee,Kn,Qn]);const _o=Z.filter(k=>Hs(_[k])==="time"),Gn=k=>{const A=c.view.ground,F=A.startsWith("--")?{background:`var(${A})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:A,"--sc-color-surface-page":A},ke={zoom:c.view.zoom,...F,...k};if(c.view.slow!==1)for(const ye of _o)ke[ye]=`calc(${k[ye]??_[ye]} * ${c.view.slow})`;return ke};p.useEffect(()=>{window.dispatchEvent(new Event("sc-tokens-change"))},[c.concepts,c.view.theme]);const qt=p.useCallback(()=>{const k=W.current,A=F=>F.id;return{tool:"sc-tune",version:qg,component:i,kind:ne.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(F=>{const ke=yd(k,Ds(F,c.view.theme));return{id:A(F),notes:F.notes,props:F.props,sound:{...F.sound,shipped:ne.shippedSound,trigger:ne.trigger},tokens:Jg.flatMap(ye=>Object.keys(F.overrides[ye]).map(Le=>{var zo;const nt=ye==="all"?_:pe.current[ye]||{},Dt=F.overrides[ye][Le],So=ye==="all"||ye===c.view.theme;return{name:Le,mode:ye,category:xd(Le),kind:Hs(nt[Le]||_[Le]),shipped:nt[Le]??null,tuned:So?ke[Le]??Dt:Dt,override:Dt,...(zo=F.shadowAdj[ye])!=null&&zo[Le]?{shadowAdjust:F.shadowAdj[ye][Le]}:{},...F.springs[Le]?{spring:{...F.springs[Le],...kd(F.springs[Le])}}:{}}})),pins:Object.fromEntries(Object.entries(F.pins).filter(([,ye])=>ye)),...ue?{motion:{lastFrameMs:Wl(F.props),...F.springs["prop:easing"]?{spring:{...F.springs["prop:easing"],...kd(F.springs["prop:easing"])}}:{}}}:{}}}),derived:N,tokenCount:Z.length,state:c}},[i,ne,ue,c,_,N,Z]);p.useEffect(()=>{window.scTune={export:qt,component:i}},[qt,i]);const Yt=p.useMemo(()=>{var A;const k={};for(const F of Z)(k[A=xd(F)]||(k[A]=[])).push(F);return k},[Z]),jr=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(k=>c.concepts.find(A=>A.id===k)).filter(Boolean):c.concepts:[$],Mr={replay:J,slow:c.view.slow};v.filter(k=>!L||k.seconds<=1);const Nr=Ds($,c.view.theme),Lo=Object.keys(Nr).length;return f.jsxs("div",{className:H.app,children:[f.jsxs("header",{className:H.bar,children:[f.jsx("span",{className:H.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:i,disabled:bn,onChange:k=>he(k.target.value),children:Object.keys(zr).map(k=>f.jsx("option",{children:k},k))}),f.jsxs("span",{className:H.meta,children:[ue?"choreography":`${Z.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),h&&f.jsxs("span",{className:H.meta,children:["snapshot · recorded ",h.recorded]}),f.jsx("span",{className:H.spacer}),f.jsx("button",{type:"button",onClick:Kn,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":ee,onClick:()=>Y(k=>!k),children:ee?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:k=>He("slow",+k.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>He("compare",!c.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:ko,children:c.view.blind?"Reveal":"Blind"}),!bn]}),f.jsx("main",{className:H.stages,children:f.jsxs(a0,{enabled:!1,children:[!c.view.blind&&f.jsxs("section",{className:H.stageWrap,"aria-label":ue?"Default":"Shipped",children:[f.jsx("h2",{className:H.stageLabel,children:ue?"Default":"Shipped"}),f.jsx("div",{className:H.stage,style:Gn({}),ref:W,inert:"","data-force":fe,children:ne.render(ue?li(ne):$.props,()=>{},()=>{},Mr)})]}),c.view.blind&&f.jsx("div",{ref:W,hidden:!0}),jr.map((k,A)=>{const F=c.view.blind?`Concept ${A+1}`:`${k.id}${k.id===c.active?" · editing":""}${c.pick.id===k.id?" · picked":""}`;return f.jsxs("section",{className:`${H.stageWrap} ${k.id===c.active&&!c.view.blind?H.activeStage:""}`,"aria-label":F,children:[f.jsxs("h2",{className:H.stageLabel,children:[c.view.compare&&!c.view.blind?f.jsx("button",{type:"button",className:H.stageSelect,onClick:()=>d(ke=>({...ke,active:k.id})),children:F}):F,ue&&f.jsxs("span",{className:H.readout,children:[" · last frame ",Wl(k.props),"ms"]})]}),f.jsx("div",{className:H.stage,style:Gn(Ds(k,T)),ref:k.id===c.active?ge:void 0,"data-force":fe,children:ne.render(k.props,G(k.id),()=>Vs(k.sound.file,k.sound.volume,k.sound.rate),Mr)})]},k.id)})]})}),f.jsxs("aside",{className:H.panel,children:[f.jsxs("fieldset",{className:H.group,disabled:bn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:H.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:k=>d(A=>({...A,notes:k.target.value}))})]}),f.jsxs("fieldset",{className:H.group,disabled:bn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:H.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(k=>f.jsx("button",{type:"button",role:"tab","aria-selected":k.id===c.active,className:H.tab,onClick:()=>d(A=>({...A,active:k.id})),children:k.id},k.id)),f.jsx("button",{type:"button",className:H.tab,disabled:c.concepts.length>=Ql.length,onClick:()=>Sn(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:H.tab,disabled:c.concepts.length>=Ql.length,onClick:()=>Sn(!1),children:"new"}),f.jsxs("button",{type:"button",className:H.tab,disabled:c.concepts.length<2,onClick:()=>Cr($.id),children:["remove ",$.id]})]}),f.jsx("textarea",{className:H.notes,"aria-label":`Notes on concept ${$.id}`,placeholder:`What concept ${$.id} is trying…`,value:$.notes,onChange:k=>b(A=>({...A,notes:k.target.value}))}),c.concepts.length>1&&f.jsxs("div",{className:H.pick,children:[f.jsx("span",{className:H.propLabel,children:f.jsx("code",{children:"pick"})}),c.concepts.map(k=>f.jsxs("label",{className:H.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===k.id,onChange:()=>d(A=>({...A,pick:{...A.pick,id:k.id}}))})," ",k.id]},k.id)),f.jsx("textarea",{className:H.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:k=>d(A=>({...A,pick:{...A.pick,reason:k.target.value}}))})]})]}),f.jsxs("fieldset",{className:H.group,disabled:bn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:k=>He("theme",k.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:k=>He("zoom",+k.target.value)}),f.jsxs("span",{className:H.readout,children:[c.view.zoom,"×"]})]}),f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:c.view.ground,onChange:k=>He("ground",k.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(k=>f.jsx("option",{value:k,children:k.replace("--sc-color-","")},k))})]})]}),f.jsxs("fieldset",{className:H.group,disabled:bn,children:[f.jsxs("legend",{children:[ue?"Motion":"Props"," · concept ",$.id]}),(()=>{const k=ne.props.map(A=>f.jsx(Qg,{def:A,value:$.props[A.name],spring:$.springs[`prop:${A.name}`],easingPresets:ve,onChange:F=>G($.id)(A.name,F),onSpring:(F,ke,ye)=>b(Le=>{const nt={...Le.springs},Dt={...Le.props,[A.name]:F};return ke?(nt[`prop:${A.name}`]=ke,A.durationProp&&(Dt[A.durationProp]=ye)):delete nt[`prop:${A.name}`],{...Le,springs:nt,props:Dt}})},A.name));return ue||k.splice(Math.min(3,k.length),0,f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Gt&&$.props.disabled?"disabled":fe,onChange:A=>bo(A.target.value),children:[ov.map(A=>f.jsx("option",{value:A,children:A==="rest"?"default":A},A)),Gt&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),k})()]}),f.jsxs("fieldset",{className:H.group,disabled:bn,children:[f.jsxs("legend",{children:["Sound · ",ne.trigger]}),f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:$.sound.volume,onChange:k=>Ee("volume",+k.target.value)}),f.jsx("span",{className:H.readout,children:$.sound.volume})]}),f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:$.sound.rate,onChange:k=>Ee("rate",+k.target.value)}),f.jsxs("span",{className:H.readout,children:[$.sound.rate,"×"]})]}),f.jsxs("div",{className:H.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:L,onChange:k=>z(k.target.checked)})]}),f.jsxs("ul",{className:H.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:H.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!$.sound.file,onChange:()=>Ee("file",null)})," silent"]})}),($.sound.file?[{file:$.sound.file,seconds:""}]:[]).map(k=>f.jsxs("li",{className:`${H.sound} ${k.file===ne.shippedSound?H.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:$.sound.file===k.file,onChange:()=>{Ee("file",k.file),Vs(k.file,$.sound.volume,$.sound.rate)}}),k.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:H.readout,children:[k.seconds&&`${k.seconds}s`,k.file===ne.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${k.file}`,onClick:()=>Vs(k.file,$.sound.volume,$.sound.rate),children:"play"})]},k.file))]})]}),!ue&&f.jsxs("p",{className:H.meta,children:[Lo," of ",Z.length," tokens tuned in concept ",$.id,", ",T," mode. Colour and shadow edits apply to ",T," only; size, type and motion apply to both modes."]}),Object.entries(Yt).map(([k,A])=>f.jsxs("fieldset",{className:H.group,disabled:bn,children:[f.jsxs("legend",{children:[k," · ",A.length]}),A.map(F=>{var ke;return f.jsx(Kg,{name:F,kind:Hs(_[F]),shipped:_[F],value:M[F]||_[F]||"",override:Nr[F],scope:$.overrides[Os(F,T)][F]!==void 0?Os(F,T):$.overrides.all[F]!==void 0?"all":null,adj:(ke=$.shadowAdj[Os(F,T)])==null?void 0:ke[F],spring:$.springs[F],pin:$.pins[F],refs:Xg[Hs(_[F])],easingPresets:ve,onSet:ye=>ae(F,ye),onAdj:ye=>je(F,ye),onSpring:(ye,Le)=>be(F,ye,Le),onReset:()=>xe(F),restOf:F.endsWith("-hover")&&Z.includes(F.slice(0,-6))?F.slice(0,-6):null,onCopyRest:()=>ae(F,M[F.slice(0,-6)]||_[F.slice(0,-6)]),onPin:ye=>ze(F,ye)},`${$.id}${T}${F}`)})]},k)),R.length>0&&f.jsxs("fieldset",{className:H.group,children:[f.jsx("legend",{children:"derived · read-only"}),R.map(k=>f.jsxs("div",{className:H.values,children:[f.jsx("code",{children:k})," ",N[k]]},k))]})]})]})}function kd(s){const i=Bs(s);return{settleMs:i.settleMs,overshoot:Nt(i.overshoot,3),framerMotion:{type:"spring",stiffness:s.stiffness,damping:s.damping,mass:s.mass}}}function cv(){return new URLSearchParams(location.search).get("c"),f.jsx(iv,{})}const Gl=document.getElementById("root");Gl.dataset.mounted||(Gl.dataset.mounted="true",Xf.createRoot(Gl).render(f.jsx(cv,{})));
