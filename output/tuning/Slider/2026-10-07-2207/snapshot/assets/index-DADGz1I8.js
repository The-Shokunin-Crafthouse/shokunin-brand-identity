(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();function kf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pl={exports:{}},co={},Ml={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function Lf(){if(Ou)return xe;Ou=1;var s=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),E=Symbol.iterator;function C(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,D={};function V(w,R,ce){this.props=w,this.context=R,this.refs=D,this.updater=ce||T}V.prototype.isReactComponent={},V.prototype.setState=function(w,R){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,R,"setState")},V.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function ne(){}ne.prototype=V.prototype;function ue(w,R,ce){this.props=w,this.context=R,this.refs=D,this.updater=ce||T}var re=ue.prototype=new ne;re.constructor=ue,Q(re,V.prototype),re.isPureReactComponent=!0;var X=Array.isArray,pe=Object.prototype.hasOwnProperty,I={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function fe(w,R,ce){var ve,be={},ke=null,Ce=null;if(R!=null)for(ve in R.ref!==void 0&&(Ce=R.ref),R.key!==void 0&&(ke=""+R.key),R)pe.call(R,ve)&&!K.hasOwnProperty(ve)&&(be[ve]=R[ve]);var ze=arguments.length-2;if(ze===1)be.children=ce;else if(1<ze){for(var Ee=Array(ze),Ie=0;Ie<ze;Ie++)Ee[Ie]=arguments[Ie+2];be.children=Ee}if(w&&w.defaultProps)for(ve in ze=w.defaultProps,ze)be[ve]===void 0&&(be[ve]=ze[ve]);return{$$typeof:s,type:w,key:ke,ref:Ce,props:be,_owner:I.current}}function he(w,R){return{$$typeof:s,type:w.type,key:R,ref:w.ref,props:w.props,_owner:w._owner}}function le(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function Z(w){var R={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ce){return R[ce]})}var P=/\/+/g;function U(w,R){return typeof w=="object"&&w!==null&&w.key!=null?Z(""+w.key):R.toString(36)}function H(w,R,ce,ve,be){var ke=typeof w;(ke==="undefined"||ke==="boolean")&&(w=null);var Ce=!1;if(w===null)Ce=!0;else switch(ke){case"string":case"number":Ce=!0;break;case"object":switch(w.$$typeof){case s:case a:Ce=!0}}if(Ce)return Ce=w,be=be(Ce),w=ve===""?"."+U(Ce,0):ve,X(be)?(ce="",w!=null&&(ce=w.replace(P,"$&/")+"/"),H(be,R,ce,"",function(Ie){return Ie})):be!=null&&(le(be)&&(be=he(be,ce+(!be.key||Ce&&Ce.key===be.key?"":(""+be.key).replace(P,"$&/")+"/")+w)),R.push(be)),1;if(Ce=0,ve=ve===""?".":ve+":",X(w))for(var ze=0;ze<w.length;ze++){ke=w[ze];var Ee=ve+U(ke,ze);Ce+=H(ke,R,ce,Ee,be)}else if(Ee=C(w),typeof Ee=="function")for(w=Ee.call(w),ze=0;!(ke=w.next()).done;)ke=ke.value,Ee=ve+U(ke,ze++),Ce+=H(ke,R,ce,Ee,be);else if(ke==="object")throw R=String(w),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return Ce}function we(w,R,ce){if(w==null)return w;var ve=[],be=0;return H(w,ve,"","",function(ke){return R.call(ce,ke,be++)}),ve}function me(w){if(w._status===-1){var R=w._result;R=R(),R.then(function(ce){(w._status===0||w._status===-1)&&(w._status=1,w._result=ce)},function(ce){(w._status===0||w._status===-1)&&(w._status=2,w._result=ce)}),w._status===-1&&(w._status=0,w._result=R)}if(w._status===1)return w._result.default;throw w._result}var de={current:null},W={transition:null},oe={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};function G(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:we,forEach:function(w,R,ce){we(w,function(){R.apply(this,arguments)},ce)},count:function(w){var R=0;return we(w,function(){R++}),R},toArray:function(w){return we(w,function(R){return R})||[]},only:function(w){if(!le(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},xe.Component=V,xe.Fragment=l,xe.Profiler=p,xe.PureComponent=ue,xe.StrictMode=c,xe.Suspense=b,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,xe.act=G,xe.cloneElement=function(w,R,ce){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ve=Q({},w.props),be=w.key,ke=w.ref,Ce=w._owner;if(R!=null){if(R.ref!==void 0&&(ke=R.ref,Ce=I.current),R.key!==void 0&&(be=""+R.key),w.type&&w.type.defaultProps)var ze=w.type.defaultProps;for(Ee in R)pe.call(R,Ee)&&!K.hasOwnProperty(Ee)&&(ve[Ee]=R[Ee]===void 0&&ze!==void 0?ze[Ee]:R[Ee])}var Ee=arguments.length-2;if(Ee===1)ve.children=ce;else if(1<Ee){ze=Array(Ee);for(var Ie=0;Ie<Ee;Ie++)ze[Ie]=arguments[Ie+2];ve.children=ze}return{$$typeof:s,type:w.type,key:be,ref:ke,props:ve,_owner:Ce}},xe.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:f,_context:w},w.Consumer=w},xe.createElement=fe,xe.createFactory=function(w){var R=fe.bind(null,w);return R.type=w,R},xe.createRef=function(){return{current:null}},xe.forwardRef=function(w){return{$$typeof:v,render:w}},xe.isValidElement=le,xe.lazy=function(w){return{$$typeof:j,_payload:{_status:-1,_result:w},_init:me}},xe.memo=function(w,R){return{$$typeof:z,type:w,compare:R===void 0?null:R}},xe.startTransition=function(w){var R=W.transition;W.transition={};try{w()}finally{W.transition=R}},xe.unstable_act=G,xe.useCallback=function(w,R){return de.current.useCallback(w,R)},xe.useContext=function(w){return de.current.useContext(w)},xe.useDebugValue=function(){},xe.useDeferredValue=function(w){return de.current.useDeferredValue(w)},xe.useEffect=function(w,R){return de.current.useEffect(w,R)},xe.useId=function(){return de.current.useId()},xe.useImperativeHandle=function(w,R,ce){return de.current.useImperativeHandle(w,R,ce)},xe.useInsertionEffect=function(w,R){return de.current.useInsertionEffect(w,R)},xe.useLayoutEffect=function(w,R){return de.current.useLayoutEffect(w,R)},xe.useMemo=function(w,R){return de.current.useMemo(w,R)},xe.useReducer=function(w,R,ce){return de.current.useReducer(w,R,ce)},xe.useRef=function(w){return de.current.useRef(w)},xe.useState=function(w){return de.current.useState(w)},xe.useSyncExternalStore=function(w,R,ce){return de.current.useSyncExternalStore(w,R,ce)},xe.useTransition=function(){return de.current.useTransition()},xe.version="18.3.1",xe}var Iu;function Zl(){return Iu||(Iu=1,Ml.exports=Lf()),Ml.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function Sf(){if(Bu)return co;Bu=1;var s=Zl(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(v,b,z){var j,E={},C=null,T=null;z!==void 0&&(C=""+z),b.key!==void 0&&(C=""+b.key),b.ref!==void 0&&(T=b.ref);for(j in b)c.call(b,j)&&!f.hasOwnProperty(j)&&(E[j]=b[j]);if(v&&v.defaultProps)for(j in b=v.defaultProps,b)E[j]===void 0&&(E[j]=b[j]);return{$$typeof:a,type:v,key:C,ref:T,props:E,_owner:p.current}}return co.Fragment=l,co.jsx=m,co.jsxs=m,co}var Hu;function _f(){return Hu||(Hu=1,Pl.exports=Sf()),Pl.exports}var d=_f(),L=Zl(),js={},Rl={exports:{}},lt={},Tl={exports:{}},Fl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function zf(){return Uu||(Uu=1,(function(s){function a(W,oe){var G=W.length;W.push(oe);e:for(;0<G;){var w=G-1>>>1,R=W[w];if(0<p(R,oe))W[w]=oe,W[G]=R,G=w;else break e}}function l(W){return W.length===0?null:W[0]}function c(W){if(W.length===0)return null;var oe=W[0],G=W.pop();if(G!==oe){W[0]=G;e:for(var w=0,R=W.length,ce=R>>>1;w<ce;){var ve=2*(w+1)-1,be=W[ve],ke=ve+1,Ce=W[ke];if(0>p(be,G))ke<R&&0>p(Ce,be)?(W[w]=Ce,W[ke]=G,w=ke):(W[w]=be,W[ve]=G,w=ve);else if(ke<R&&0>p(Ce,G))W[w]=Ce,W[ke]=G,w=ke;else break e}}return oe}function p(W,oe){var G=W.sortIndex-oe.sortIndex;return G!==0?G:W.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var m=Date,v=m.now();s.unstable_now=function(){return m.now()-v}}var b=[],z=[],j=1,E=null,C=3,T=!1,Q=!1,D=!1,V=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(W){for(var oe=l(z);oe!==null;){if(oe.callback===null)c(z);else if(oe.startTime<=W)c(z),oe.sortIndex=oe.expirationTime,a(b,oe);else break;oe=l(z)}}function X(W){if(D=!1,re(W),!Q)if(l(b)!==null)Q=!0,me(pe);else{var oe=l(z);oe!==null&&de(X,oe.startTime-W)}}function pe(W,oe){Q=!1,D&&(D=!1,ne(fe),fe=-1),T=!0;var G=C;try{for(re(oe),E=l(b);E!==null&&(!(E.expirationTime>oe)||W&&!Z());){var w=E.callback;if(typeof w=="function"){E.callback=null,C=E.priorityLevel;var R=w(E.expirationTime<=oe);oe=s.unstable_now(),typeof R=="function"?E.callback=R:E===l(b)&&c(b),re(oe)}else c(b);E=l(b)}if(E!==null)var ce=!0;else{var ve=l(z);ve!==null&&de(X,ve.startTime-oe),ce=!1}return ce}finally{E=null,C=G,T=!1}}var I=!1,K=null,fe=-1,he=5,le=-1;function Z(){return!(s.unstable_now()-le<he)}function P(){if(K!==null){var W=s.unstable_now();le=W;var oe=!0;try{oe=K(!0,W)}finally{oe?U():(I=!1,K=null)}}else I=!1}var U;if(typeof ue=="function")U=function(){ue(P)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,we=H.port2;H.port1.onmessage=P,U=function(){we.postMessage(null)}}else U=function(){V(P,0)};function me(W){K=W,I||(I=!0,U())}function de(W,oe){fe=V(function(){W(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){Q||T||(Q=!0,me(pe))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_getFirstCallbackNode=function(){return l(b)},s.unstable_next=function(W){switch(C){case 1:case 2:case 3:var oe=3;break;default:oe=C}var G=C;C=oe;try{return W()}finally{C=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,oe){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var G=C;C=W;try{return oe()}finally{C=G}},s.unstable_scheduleCallback=function(W,oe,G){var w=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?w+G:w):G=w,W){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=G+R,W={id:j++,callback:oe,priorityLevel:W,startTime:G,expirationTime:R,sortIndex:-1},G>w?(W.sortIndex=G,a(z,W),l(b)===null&&W===l(z)&&(D?(ne(fe),fe=-1):D=!0,de(X,G-w))):(W.sortIndex=R,a(b,W),Q||T||(Q=!0,me(pe))),W},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(W){var oe=C;return function(){var G=C;C=oe;try{return W.apply(this,arguments)}finally{C=G}}}})(Fl)),Fl}var Vu;function Ef(){return Vu||(Vu=1,Tl.exports=zf()),Tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function jf(){if(Wu)return lt;Wu=1;var s=Zl(),a=Ef();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},E={};function C(e){return b.call(E,e)?!0:b.call(j,e)?!1:z.test(e)?E[e]=!0:(j[e]=!0,!1)}function T(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,t,n,r){if(t===null||typeof t>"u"||T(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function D(e,t,n,r,o,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new D(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ne,ue);V[t]=new D(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ne,ue);V[t]=new D(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ne,ue);V[t]=new D(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,n,r){var o=V.hasOwnProperty(t)?V[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q(t,n,o,r)&&(n=null),r||o===null?C(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var X=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),I=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),Z=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),W=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,w;function R(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ce=!1;function ve(e,t){if(!e||ce)return"";ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var o=_.stack.split(`
`),i=r.stack.split(`
`),u=o.length-1,h=i.length-1;1<=u&&0<=h&&o[u]!==i[h];)h--;for(;1<=u&&0<=h;u--,h--)if(o[u]!==i[h]){if(u!==1||h!==1)do if(u--,h--,0>h||o[u]!==i[h]){var g=`
`+o[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=h);break}}}finally{ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function be(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case I:return"Portal";case he:return"Profiler";case fe:return"StrictMode";case U:return"Suspense";case H:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:return(e.displayName||"Context")+".Consumer";case le:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ze(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ie(e){var t=Ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kt(e){e._valueTracker||(e._valueTracker=Ie(e))}function mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lr(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function go(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ze(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Un(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function Vn(e,t){Un(e,t);var n=ze(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wn(e,t.type,ze(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wn(e,t,n){(t!=="number"||kn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zt=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ze(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Sr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _r(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Zt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ze(n)}}function zr(e,t){var n=ze(t.value),r=ze(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function y(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function N(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?y(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var M,ye=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(M=M||document.createElement("div"),M.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=M.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ge(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(e){tt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Se[t]=Se[e]})});function $t(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Se.hasOwnProperty(e)&&Se[e]?(""+t).trim():t+"px"}function yo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$t(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wo=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(wo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Qn=null,Kn=null;function na(e){if(e=Zr(e)){if(typeof Ks!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Uo(t),Ks(e.stateNode,e.type,t))}}function ra(e){Qn?Kn?Kn.push(e):Kn=[e]:Qn=e}function oa(){if(Qn){var e=Qn,t=Kn;if(Kn=Qn=null,na(e),t)for(e=0;e<t.length;e++)na(t[e])}}function sa(e,t){return e(t)}function ia(){}var Zs=!1;function la(e,t,n){if(Zs)return e(t,n);Zs=!0;try{return sa(e,t,n)}finally{Zs=!1,(Qn!==null||Kn!==null)&&(ia(),oa())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Gs=!1;if(v)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Gs=!1}function Ep(e,t,n,r,o,i,u,h,g){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch($){this.onError($)}}var Cr=!1,bo=null,ko=!1,qs=null,jp={onError:function(e){Cr=!0,bo=e}};function Cp(e,t,n,r,o,i,u,h,g){Cr=!1,bo=null,Ep.apply(jp,arguments)}function Np(e,t,n,r,o,i,u,h,g){if(Cp.apply(this,arguments),Cr){if(Cr){var _=bo;Cr=!1,bo=null}else throw Error(l(198));ko||(ko=!0,qs=_)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function aa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ca(e){if(Ln(e)!==e)throw Error(l(188))}function Pp(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ca(o),e;if(i===r)return ca(o),t;i=i.sibling}throw Error(l(188))}if(n.return!==r.return)n=o,r=i;else{for(var u=!1,h=o.child;h;){if(h===n){u=!0,n=o,r=i;break}if(h===r){u=!0,r=o,n=i;break}h=h.sibling}if(!u){for(h=i.child;h;){if(h===n){u=!0,n=i,r=o;break}if(h===r){u=!0,r=i,n=o;break}h=h.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function ua(e){return e=Pp(e),e!==null?pa(e):null}function pa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pa(e);if(t!==null)return t;e=e.sibling}return null}var da=a.unstable_scheduleCallback,fa=a.unstable_cancelCallback,Mp=a.unstable_shouldYield,Rp=a.unstable_requestPaint,$e=a.unstable_now,Tp=a.unstable_getCurrentPriorityLevel,Ys=a.unstable_ImmediatePriority,ha=a.unstable_UserBlockingPriority,Lo=a.unstable_NormalPriority,Fp=a.unstable_LowPriority,ma=a.unstable_IdlePriority,So=null,Pt=null;function Ap(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Op,$p=Math.log,Dp=Math.LN2;function Op(e){return e>>>=0,e===0?32:31-($p(e)/Dp|0)|0}var _o=64,zo=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,u=n&268435455;if(u!==0){var h=u&~o;h!==0?r=Nr(h):(i&=u,i!==0&&(r=Nr(i)))}else u=n&~o,u!==0?r=Nr(u):i!==0&&(r=Nr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ip(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-bt(i),h=1<<u,g=o[u];g===-1?((h&n)===0||(h&r)!==0)&&(o[u]=Ip(h,t)):g<=t&&(e.expiredLanes|=h),i&=~h}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ga(){var e=_o;return _o<<=1,(_o&4194240)===0&&(_o=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Hp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-bt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var je=0;function va(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xa,ti,ya,wa,ba,ni=!1,jo=[],qt=null,Yt=null,Jt=null,Mr=new Map,Rr=new Map,Xt=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vp(e,t,n,r,o){switch(t){case"focusin":return qt=Tr(qt,e,t,n,r,o),!0;case"dragenter":return Yt=Tr(Yt,e,t,n,r,o),!0;case"mouseover":return Jt=Tr(Jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mr.set(i,Tr(Mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,Tr(Rr.get(i)||null,e,t,n,r,o)),!0}return!1}function La(e){var t=Sn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=aa(n),t!==null){e.blockedOn=t,ba(e.priority,function(){ya(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=Zr(n),t!==null&&ti(t),e.blockedOn=n,!1;t.shift()}return!0}function Sa(e,t,n){Co(e)&&n.delete(t)}function Wp(){ni=!1,qt!==null&&Co(qt)&&(qt=null),Yt!==null&&Co(Yt)&&(Yt=null),Jt!==null&&Co(Jt)&&(Jt=null),Mr.forEach(Sa),Rr.forEach(Sa)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,ni||(ni=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Wp)))}function Ar(e){function t(o){return Fr(o,e)}if(0<jo.length){Fr(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Fr(qt,e),Yt!==null&&Fr(Yt,e),Jt!==null&&Fr(Jt,e),Mr.forEach(t),Rr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)La(n),n.blockedOn===null&&Xt.shift()}var Zn=X.ReactCurrentBatchConfig,No=!0;function Qp(e,t,n,r){var o=je,i=Zn.transition;Zn.transition=null;try{je=1,ri(e,t,n,r)}finally{je=o,Zn.transition=i}}function Kp(e,t,n,r){var o=je,i=Zn.transition;Zn.transition=null;try{je=4,ri(e,t,n,r)}finally{je=o,Zn.transition=i}}function ri(e,t,n,r){if(No){var o=oi(e,t,n,r);if(o===null)bi(e,t,r,Po,n),ka(e,r);else if(Vp(o,e,t,n,r))r.stopPropagation();else if(ka(e,r),t&4&&-1<Up.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&xa(i),i=oi(e,t,n,r),i===null&&bi(e,t,r,Po,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else bi(e,t,r,null,n)}}var Po=null;function oi(e,t,n,r){if(Po=null,e=Qs(r),e=Sn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=aa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function _a(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tp()){case Ys:return 1;case ha:return 4;case Lo:case Fp:return 16;case ma:return 536870912;default:return 16}default:return 16}}var en=null,si=null,Mo=null;function za(){if(Mo)return Mo;var e,t=si,n=t.length,r,o="value"in en?en.value:en.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[i-r];r++);return Mo=o.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Ea(){return!1}function at(e){function t(n,r,o,i,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?To:Ea,this.isPropagationStopped=Ea,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=at(Gn),$r=G({},Gn,{view:0,detail:0}),Zp=at($r),li,ai,Dr,Fo=G({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(li=e.screenX-Dr.screenX,ai=e.screenY-Dr.screenY):ai=li=0,Dr=e),li)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),ja=at(Fo),Gp=G({},Fo,{dataTransfer:0}),qp=at(Gp),Yp=G({},$r,{relatedTarget:0}),ci=at(Yp),Jp=G({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=at(Jp),ed=G({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),td=at(ed),nd=G({},Gn,{data:0}),Ca=at(nd),rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sd[e])?!!t[e]:!1}function ui(){return id}var ld=G({},$r,{key:function(e){if(e.key){var t=rd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?od[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ad=at(ld),cd=G({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=at(cd),ud=G({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),pd=at(ud),dd=G({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=at(dd),hd=G({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=at(hd),gd=[9,13,27,32],pi=v&&"CompositionEvent"in window,Or=null;v&&"documentMode"in document&&(Or=document.documentMode);var vd=v&&"TextEvent"in window&&!Or,Pa=v&&(!pi||Or&&8<Or&&11>=Or),Ma=" ",Ra=!1;function Ta(e,t){switch(e){case"keyup":return gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function xd(e,t){switch(e){case"compositionend":return Fa(t);case"keypress":return t.which!==32?null:(Ra=!0,Ma);case"textInput":return e=t.data,e===Ma&&Ra?null:e;default:return null}}function yd(e,t){if(qn)return e==="compositionend"||!pi&&Ta(e,t)?(e=za(),Mo=si=en=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pa&&t.locale!=="ko"?null:t.data;default:return null}}var wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wd[e.type]:t==="textarea"}function $a(e,t,n,r){ra(r),t=Io(t,"onChange"),0<t.length&&(n=new ii("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Br=null;function bd(e){tc(e,0)}function Ao(e){var t=tr(e);if(mo(t))return e}function kd(e,t){if(e==="change")return t}var Da=!1;if(v){var di;if(v){var fi="oninput"in document;if(!fi){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),fi=typeof Oa.oninput=="function"}di=fi}else di=!1;Da=di&&(!document.documentMode||9<document.documentMode)}function Ia(){Ir&&(Ir.detachEvent("onpropertychange",Ba),Br=Ir=null)}function Ba(e){if(e.propertyName==="value"&&Ao(Br)){var t=[];$a(t,Br,e,Qs(e)),la(bd,t)}}function Ld(e,t,n){e==="focusin"?(Ia(),Ir=t,Br=n,Ir.attachEvent("onpropertychange",Ba)):e==="focusout"&&Ia()}function Sd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Br)}function _d(e,t){if(e==="click")return Ao(t)}function zd(e,t){if(e==="input"||e==="change")return Ao(t)}function Ed(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Ed;function Hr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!b.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function Ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ua(e,t){var n=Ha(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ha(n)}}function Va(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Va(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=kn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kn(e.document)}return t}function hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jd(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Va(n.ownerDocument.documentElement,n)){if(r!==null&&hi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ua(n,i);var u=Ua(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cd=v&&"documentMode"in document&&11>=document.documentMode,Yn=null,mi=null,Ur=null,gi=!1;function Qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||Yn==null||Yn!==kn(r)||(r=Yn,"selectionStart"in r&&hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Hr(Ur,r)||(Ur=r,r=Io(mi,"onSelect"),0<r.length&&(t=new ii("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function $o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},vi={},Ka={};v&&(Ka=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Do(e){if(vi[e])return vi[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ka)return vi[e]=t[n];return e}var Za=Do("animationend"),Ga=Do("animationiteration"),qa=Do("animationstart"),Ya=Do("transitionend"),Ja=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Ja.set(e,t),f(t,[e])}for(var xi=0;xi<Xa.length;xi++){var yi=Xa[xi],Nd=yi.toLowerCase(),Pd=yi[0].toUpperCase()+yi.slice(1);tn(Nd,"on"+Pd)}tn(Za,"onAnimationEnd"),tn(Ga,"onAnimationIteration"),tn(qa,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Ya,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Md=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Np(r,t,void 0,e),e.currentTarget=null}function tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var u=r.length-1;0<=u;u--){var h=r[u],g=h.instance,_=h.currentTarget;if(h=h.listener,g!==i&&o.isPropagationStopped())break e;ec(o,h,_),i=g}else for(u=0;u<r.length;u++){if(h=r[u],g=h.instance,_=h.currentTarget,h=h.listener,g!==i&&o.isPropagationStopped())break e;ec(o,h,_),i=g}}}if(ko)throw e=qs,ko=!1,qs=null,e}function Pe(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(nc(t,e,2,!1),n.add(r))}function wi(e,t,n){var r=0;t&&(r|=4),nc(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Oo]){e[Oo]=!0,c.forEach(function(n){n!=="selectionchange"&&(Md.has(n)||wi(n,!1,e),wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,wi("selectionchange",!1,t))}}function nc(e,t,n,r){switch(_a(t)){case 1:var o=Qp;break;case 4:o=Kp;break;default:o=ri}n=o.bind(null,t,n,e),o=void 0,!Gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var h=r.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;u=u.return}for(;h!==null;){if(u=Sn(h),u===null)return;if(g=u.tag,g===5||g===6){r=i=u;continue e}h=h.parentNode}}r=r.return}la(function(){var _=i,$=Qs(n),O=[];e:{var F=Ja.get(e);if(F!==void 0){var q=ii,J=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":q=ad;break;case"focusin":J="focus",q=ci;break;case"focusout":J="blur",q=ci;break;case"beforeblur":case"afterblur":q=ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=pd;break;case Za:case Ga:case qa:q=Xp;break;case Ya:q=fd;break;case"scroll":q=Zp;break;case"wheel":q=md;break;case"copy":case"cut":case"paste":q=td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Na}var ee=(t&4)!==0,De=!ee&&e==="scroll",k=ee?F!==null?F+"Capture":null:F;ee=[];for(var x=_,S;x!==null;){S=x;var B=S.stateNode;if(S.tag===5&&B!==null&&(S=B,k!==null&&(B=Er(x,k),B!=null&&ee.push(Qr(x,B,S)))),De)break;x=x.return}0<ee.length&&(F=new q(F,J,null,n,$),O.push({event:F,listeners:ee}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",F&&n!==Ws&&(J=n.relatedTarget||n.fromElement)&&(Sn(J)||J[Dt]))break e;if((q||F)&&(F=$.window===$?$:(F=$.ownerDocument)?F.defaultView||F.parentWindow:window,q?(J=n.relatedTarget||n.toElement,q=_,J=J?Sn(J):null,J!==null&&(De=Ln(J),J!==De||J.tag!==5&&J.tag!==6)&&(J=null)):(q=null,J=_),q!==J)){if(ee=ja,B="onMouseLeave",k="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Na,B="onPointerLeave",k="onPointerEnter",x="pointer"),De=q==null?F:tr(q),S=J==null?F:tr(J),F=new ee(B,x+"leave",q,n,$),F.target=De,F.relatedTarget=S,B=null,Sn($)===_&&(ee=new ee(k,x+"enter",J,n,$),ee.target=S,ee.relatedTarget=De,B=ee),De=B,q&&J)t:{for(ee=q,k=J,x=0,S=ee;S;S=Xn(S))x++;for(S=0,B=k;B;B=Xn(B))S++;for(;0<x-S;)ee=Xn(ee),x--;for(;0<S-x;)k=Xn(k),S--;for(;x--;){if(ee===k||k!==null&&ee===k.alternate)break t;ee=Xn(ee),k=Xn(k)}ee=null}else ee=null;q!==null&&rc(O,F,q,ee,!1),J!==null&&De!==null&&rc(O,De,J,ee,!0)}}e:{if(F=_?tr(_):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var te=kd;else if(Aa(F))if(Da)te=zd;else{te=Sd;var se=Ld}else(q=F.nodeName)&&q.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(te=_d);if(te&&(te=te(e,_))){$a(O,te,n,$);break e}se&&se(e,F,_),e==="focusout"&&(se=F._wrapperState)&&se.controlled&&F.type==="number"&&Wn(F,"number",F.value)}switch(se=_?tr(_):window,e){case"focusin":(Aa(se)||se.contentEditable==="true")&&(Yn=se,mi=_,Ur=null);break;case"focusout":Ur=mi=Yn=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,Qa(O,n,$);break;case"selectionchange":if(Cd)break;case"keydown":case"keyup":Qa(O,n,$)}var ie;if(pi)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else qn?Ta(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(Pa&&n.locale!=="ko"&&(qn||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&qn&&(ie=za()):(en=$,si="value"in en?en.value:en.textContent,qn=!0)),se=Io(_,ae),0<se.length&&(ae=new Ca(ae,e,null,n,$),O.push({event:ae,listeners:se}),ie?ae.data=ie:(ie=Fa(n),ie!==null&&(ae.data=ie)))),(ie=vd?xd(e,n):yd(e,n))&&(_=Io(_,"onBeforeInput"),0<_.length&&($=new Ca("onBeforeInput","beforeinput",null,n,$),O.push({event:$,listeners:_}),$.data=ie))}tc(O,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Er(e,n),i!=null&&r.unshift(Qr(e,i,o)),i=Er(e,t),i!=null&&r.push(Qr(e,i,o))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rc(e,t,n,r,o){for(var i=t._reactName,u=[];n!==null&&n!==r;){var h=n,g=h.alternate,_=h.stateNode;if(g!==null&&g===r)break;h.tag===5&&_!==null&&(h=_,o?(g=Er(n,i),g!=null&&u.unshift(Qr(n,g,h))):o||(g=Er(n,i),g!=null&&u.push(Qr(n,g,h)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Rd=/\r\n?/g,Td=/\u0000|\uFFFD/g;function oc(e){return(typeof e=="string"?e:""+e).replace(Rd,`
`).replace(Td,"")}function Bo(e,t,n){if(t=oc(t),oc(e)!==t&&n)throw Error(l(425))}function Ho(){}var ki=null,Li=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,Fd=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,Ad=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch($d)}:_i;function $d(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ar(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),Mt="__reactFiber$"+er,Kr="__reactProps$"+er,Dt="__reactContainer$"+er,Ei="__reactEvents$"+er,Dd="__reactListeners$"+er,Od="__reactHandles$"+er;function Sn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[Mt])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[Mt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Uo(e){return e[Kr]||null}var ji=[],nr=-1;function rn(e){return{current:e}}function Me(e){0>nr||(e.current=ji[nr],ji[nr]=null,nr--)}function Ne(e,t){nr++,ji[nr]=e.current,e.current=t}var on={},Ze=rn(on),nt=rn(!1),_n=on;function rr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function Vo(){Me(nt),Me(Ze)}function lc(e,t,n){if(Ze.current!==on)throw Error(l(168));Ne(Ze,t),Ne(nt,n)}function ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(l(108,Ce(e)||"Unknown",o));return G({},n,r)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,_n=Ze.current,Ne(Ze,e),Ne(nt,nt.current),!0}function cc(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=ac(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,Me(nt),Me(Ze),Ne(Ze,e)):Me(nt),Ne(nt,n)}var Ot=null,Qo=!1,Ci=!1;function uc(e){Ot===null?Ot=[e]:Ot.push(e)}function Id(e){Qo=!0,uc(e)}function sn(){if(!Ci&&Ot!==null){Ci=!0;var e=0,t=je;try{var n=Ot;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,Qo=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),da(Ys,sn),o}finally{je=t,Ci=!1}}return null}var or=[],sr=0,Ko=null,Zo=0,dt=[],ft=0,zn=null,It=1,Bt="";function En(e,t){or[sr++]=Zo,or[sr++]=Ko,Ko=e,Zo=t}function pc(e,t,n){dt[ft++]=It,dt[ft++]=Bt,dt[ft++]=zn,zn=e;var r=It;e=Bt;var o=32-bt(r)-1;r&=~(1<<o),n+=1;var i=32-bt(t)+o;if(30<i){var u=o-o%5;i=(r&(1<<u)-1).toString(32),r>>=u,o-=u,It=1<<32-bt(t)+o|n<<o|r,Bt=i+e}else It=1<<i|n<<o|r,Bt=e}function Ni(e){e.return!==null&&(En(e,1),pc(e,1,0))}function Pi(e){for(;e===Ko;)Ko=or[--sr],or[sr]=null,Zo=or[--sr],or[sr]=null;for(;e===zn;)zn=dt[--ft],dt[ft]=null,Bt=dt[--ft],dt[ft]=null,It=dt[--ft],dt[ft]=null}var ct=null,ut=null,Re=!1,Lt=null;function dc(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:It,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if(Re){var t=ut;if(t){var n=t;if(!fc(e,t)){if(Mi(e))throw Error(l(418));t=nn(n.nextSibling);var r=ct;t&&fc(e,t)?dc(r,n):(e.flags=e.flags&-4097|2,Re=!1,ct=e)}}else{if(Mi(e))throw Error(l(418));e.flags=e.flags&-4097|2,Re=!1,ct=e}}}function hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Go(e){if(e!==ct)return!1;if(!Re)return hc(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=ut)){if(Mi(e))throw mc(),Error(l(418));for(;t;)dc(e,t),t=nn(t.nextSibling)}if(hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?nn(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=ut;e;)e=nn(e.nextSibling)}function ir(){ut=ct=null,Re=!1}function Ti(e){Lt===null?Lt=[e]:Lt.push(e)}var Bd=X.ReactCurrentBatchConfig;function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var h=o.refs;u===null?delete h[i]:h[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function qo(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gc(e){var t=e._init;return t(e._payload)}function vc(e){function t(k,x){if(e){var S=k.deletions;S===null?(k.deletions=[x],k.flags|=16):S.push(x)}}function n(k,x){if(!e)return null;for(;x!==null;)t(k,x),x=x.sibling;return null}function r(k,x){for(k=new Map;x!==null;)x.key!==null?k.set(x.key,x):k.set(x.index,x),x=x.sibling;return k}function o(k,x){return k=hn(k,x),k.index=0,k.sibling=null,k}function i(k,x,S){return k.index=S,e?(S=k.alternate,S!==null?(S=S.index,S<x?(k.flags|=2,x):S):(k.flags|=2,x)):(k.flags|=1048576,x)}function u(k){return e&&k.alternate===null&&(k.flags|=2),k}function h(k,x,S,B){return x===null||x.tag!==6?(x=_l(S,k.mode,B),x.return=k,x):(x=o(x,S),x.return=k,x)}function g(k,x,S,B){var te=S.type;return te===K?$(k,x,S.props.children,B,S.key):x!==null&&(x.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===me&&gc(te)===x.type)?(B=o(x,S.props),B.ref=Gr(k,x,S),B.return=k,B):(B=ws(S.type,S.key,S.props,null,k.mode,B),B.ref=Gr(k,x,S),B.return=k,B)}function _(k,x,S,B){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=zl(S,k.mode,B),x.return=k,x):(x=o(x,S.children||[]),x.return=k,x)}function $(k,x,S,B,te){return x===null||x.tag!==7?(x=Fn(S,k.mode,B,te),x.return=k,x):(x=o(x,S),x.return=k,x)}function O(k,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_l(""+x,k.mode,S),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:return S=ws(x.type,x.key,x.props,null,k.mode,S),S.ref=Gr(k,null,x),S.return=k,S;case I:return x=zl(x,k.mode,S),x.return=k,x;case me:var B=x._init;return O(k,B(x._payload),S)}if(Zt(x)||oe(x))return x=Fn(x,k.mode,S,null),x.return=k,x;qo(k,x)}return null}function F(k,x,S,B){var te=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return te!==null?null:h(k,x,""+S,B);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:return S.key===te?g(k,x,S,B):null;case I:return S.key===te?_(k,x,S,B):null;case me:return te=S._init,F(k,x,te(S._payload),B)}if(Zt(S)||oe(S))return te!==null?null:$(k,x,S,B,null);qo(k,S)}return null}function q(k,x,S,B,te){if(typeof B=="string"&&B!==""||typeof B=="number")return k=k.get(S)||null,h(x,k,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case pe:return k=k.get(B.key===null?S:B.key)||null,g(x,k,B,te);case I:return k=k.get(B.key===null?S:B.key)||null,_(x,k,B,te);case me:var se=B._init;return q(k,x,S,se(B._payload),te)}if(Zt(B)||oe(B))return k=k.get(S)||null,$(x,k,B,te,null);qo(x,B)}return null}function J(k,x,S,B){for(var te=null,se=null,ie=x,ae=x=0,We=null;ie!==null&&ae<S.length;ae++){ie.index>ae?(We=ie,ie=null):We=ie.sibling;var _e=F(k,ie,S[ae],B);if(_e===null){ie===null&&(ie=We);break}e&&ie&&_e.alternate===null&&t(k,ie),x=i(_e,x,ae),se===null?te=_e:se.sibling=_e,se=_e,ie=We}if(ae===S.length)return n(k,ie),Re&&En(k,ae),te;if(ie===null){for(;ae<S.length;ae++)ie=O(k,S[ae],B),ie!==null&&(x=i(ie,x,ae),se===null?te=ie:se.sibling=ie,se=ie);return Re&&En(k,ae),te}for(ie=r(k,ie);ae<S.length;ae++)We=q(ie,k,ae,S[ae],B),We!==null&&(e&&We.alternate!==null&&ie.delete(We.key===null?ae:We.key),x=i(We,x,ae),se===null?te=We:se.sibling=We,se=We);return e&&ie.forEach(function(mn){return t(k,mn)}),Re&&En(k,ae),te}function ee(k,x,S,B){var te=oe(S);if(typeof te!="function")throw Error(l(150));if(S=te.call(S),S==null)throw Error(l(151));for(var se=te=null,ie=x,ae=x=0,We=null,_e=S.next();ie!==null&&!_e.done;ae++,_e=S.next()){ie.index>ae?(We=ie,ie=null):We=ie.sibling;var mn=F(k,ie,_e.value,B);if(mn===null){ie===null&&(ie=We);break}e&&ie&&mn.alternate===null&&t(k,ie),x=i(mn,x,ae),se===null?te=mn:se.sibling=mn,se=mn,ie=We}if(_e.done)return n(k,ie),Re&&En(k,ae),te;if(ie===null){for(;!_e.done;ae++,_e=S.next())_e=O(k,_e.value,B),_e!==null&&(x=i(_e,x,ae),se===null?te=_e:se.sibling=_e,se=_e);return Re&&En(k,ae),te}for(ie=r(k,ie);!_e.done;ae++,_e=S.next())_e=q(ie,k,ae,_e.value,B),_e!==null&&(e&&_e.alternate!==null&&ie.delete(_e.key===null?ae:_e.key),x=i(_e,x,ae),se===null?te=_e:se.sibling=_e,se=_e);return e&&ie.forEach(function(bf){return t(k,bf)}),Re&&En(k,ae),te}function De(k,x,S,B){if(typeof S=="object"&&S!==null&&S.type===K&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:e:{for(var te=S.key,se=x;se!==null;){if(se.key===te){if(te=S.type,te===K){if(se.tag===7){n(k,se.sibling),x=o(se,S.props.children),x.return=k,k=x;break e}}else if(se.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===me&&gc(te)===se.type){n(k,se.sibling),x=o(se,S.props),x.ref=Gr(k,se,S),x.return=k,k=x;break e}n(k,se);break}else t(k,se);se=se.sibling}S.type===K?(x=Fn(S.props.children,k.mode,B,S.key),x.return=k,k=x):(B=ws(S.type,S.key,S.props,null,k.mode,B),B.ref=Gr(k,x,S),B.return=k,k=B)}return u(k);case I:e:{for(se=S.key;x!==null;){if(x.key===se)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(k,x.sibling),x=o(x,S.children||[]),x.return=k,k=x;break e}else{n(k,x);break}else t(k,x);x=x.sibling}x=zl(S,k.mode,B),x.return=k,k=x}return u(k);case me:return se=S._init,De(k,x,se(S._payload),B)}if(Zt(S))return J(k,x,S,B);if(oe(S))return ee(k,x,S,B);qo(k,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(k,x.sibling),x=o(x,S),x.return=k,k=x):(n(k,x),x=_l(S,k.mode,B),x.return=k,k=x),u(k)):n(k,x)}return De}var lr=vc(!0),xc=vc(!1),Yo=rn(null),Jo=null,ar=null,Fi=null;function Ai(){Fi=ar=Jo=null}function $i(e){var t=Yo.current;Me(Yo),e._currentValue=t}function Di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Jo=e,Fi=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Fi!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(Jo===null)throw Error(l(308));ar=e,Jo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var jn=null;function Oi(e){jn===null?jn=[e]:jn.push(e)}function yc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Oi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ht(e,n)}return o=r.interleaved,o===null?(t.next=t,Oi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ht(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}function bc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function es(e,t,n,r){var o=e.updateQueue;ln=!1;var i=o.firstBaseUpdate,u=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var g=h,_=g.next;g.next=null,u===null?i=_:u.next=_,u=g;var $=e.alternate;$!==null&&($=$.updateQueue,h=$.lastBaseUpdate,h!==u&&(h===null?$.firstBaseUpdate=_:h.next=_,$.lastBaseUpdate=g))}if(i!==null){var O=o.baseState;u=0,$=_=g=null,h=i;do{var F=h.lane,q=h.eventTime;if((r&F)===F){$!==null&&($=$.next={eventTime:q,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var J=e,ee=h;switch(F=t,q=n,ee.tag){case 1:if(J=ee.payload,typeof J=="function"){O=J.call(q,O,F);break e}O=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ee.payload,F=typeof J=="function"?J.call(q,O,F):J,F==null)break e;O=G({},O,F);break e;case 2:ln=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,F=o.effects,F===null?o.effects=[h]:F.push(h))}else q={eventTime:q,lane:F,tag:h.tag,payload:h.payload,callback:h.callback,next:null},$===null?(_=$=q,g=O):$=$.next=q,u|=F;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;F=h,h=F.next,F.next=null,o.lastBaseUpdate=F,o.shared.pending=null}}while(!0);if($===null&&(g=O),o.baseState=g,o.firstBaseUpdate=_,o.lastBaseUpdate=$,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=u,e.lanes=u,e.memoizedState=O}}function kc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var qr={},Rt=rn(qr),Yr=rn(qr),Jr=rn(qr);function Cn(e){if(e===qr)throw Error(l(174));return e}function Bi(e,t){switch(Ne(Jr,t),Ne(Yr,e),Ne(Rt,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:N(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=N(t,e)}Me(Rt),Ne(Rt,t)}function ur(){Me(Rt),Me(Yr),Me(Jr)}function Lc(e){Cn(Jr.current);var t=Cn(Rt.current),n=N(t,e.type);t!==n&&(Ne(Yr,e),Ne(Rt,n))}function Hi(e){Yr.current===e&&(Me(Rt),Me(Yr))}var Te=rn(0);function ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function Vi(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var ns=X.ReactCurrentDispatcher,Wi=X.ReactCurrentBatchConfig,Nn=0,Fe=null,Be=null,Ue=null,rs=!1,Xr=!1,eo=0,Hd=0;function Ge(){throw Error(l(321))}function Qi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Ki(e,t,n,r,o,i){if(Nn=i,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ns.current=e===null||e.memoizedState===null?Qd:Kd,e=n(r,o),Xr){i=0;do{if(Xr=!1,eo=0,25<=i)throw Error(l(301));i+=1,Ue=Be=null,t.updateQueue=null,ns.current=Zd,e=n(r,o)}while(Xr)}if(ns.current=is,t=Be!==null&&Be.next!==null,Nn=0,Ue=Be=Fe=null,rs=!1,t)throw Error(l(300));return e}function Zi(){var e=eo!==0;return eo=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Fe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function mt(){if(Be===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ue===null?Fe.memoizedState:Ue.next;if(t!==null)Ue=t,Be=e;else{if(e===null)throw Error(l(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ue===null?Fe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function to(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=mt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var u=o.next;o.next=i.next,i.next=u}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var h=u=null,g=null,_=i;do{var $=_.lane;if((Nn&$)===$)g!==null&&(g=g.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var O={lane:$,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};g===null?(h=g=O,u=r):g=g.next=O,Fe.lanes|=$,Pn|=$}_=_.next}while(_!==null&&_!==i);g===null?u=r:g.next=h,kt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Fe.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=mt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do i=e(i,u.action),u=u.next;while(u!==o);kt(i,t.memoizedState)||(ot=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sc(){}function _c(e,t){var n=Fe,r=mt(),o=t(),i=!kt(r.memoizedState,o);if(i&&(r.memoizedState=o,ot=!0),r=r.queue,Yi(jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,no(9,Ec.bind(null,n,r,o,t),void 0,null),Ve===null)throw Error(l(349));(Nn&30)!==0||zc(n,t,o)}return o}function zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ec(e,t,n,r){t.value=n,t.getSnapshot=r,Cc(t)&&Nc(e)}function jc(e,t,n){return n(function(){Cc(t)&&Nc(e)})}function Cc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Nc(e){var t=Ht(e,1);t!==null&&Et(t,e,1,-1)}function Pc(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=Wd.bind(null,Fe,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mc(){return mt().memoizedState}function os(e,t,n,r){var o=Tt();Fe.flags|=e,o.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function ss(e,t,n,r){var o=mt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var u=Be.memoizedState;if(i=u.destroy,r!==null&&Qi(r,u.deps)){o.memoizedState=no(t,n,i,r);return}}Fe.flags|=e,o.memoizedState=no(1|t,n,i,r)}function Rc(e,t){return os(8390656,8,e,t)}function Yi(e,t){return ss(2048,8,e,t)}function Tc(e,t){return ss(4,2,e,t)}function Fc(e,t){return ss(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,n){return n=n!=null?n.concat([e]):null,ss(4,4,Ac.bind(null,t,e),n)}function Ji(){}function Dc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ic(e,t,n){return(Nn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(kt(n,t)||(n=ga(),Fe.lanes|=n,Pn|=n,e.baseState=!0),t)}function Ud(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=Wi.transition;Wi.transition={};try{e(!1),t()}finally{je=n,Wi.transition=r}}function Bc(){return mt().memoizedState}function Vd(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hc(e))Uc(t,n);else if(n=yc(e,t,n,r),n!==null){var o=et();Et(n,e,r,o),Vc(n,t,r)}}function Wd(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hc(e))Uc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,h=i(u,n);if(o.hasEagerState=!0,o.eagerState=h,kt(h,u)){var g=t.interleaved;g===null?(o.next=o,Oi(t)):(o.next=g.next,g.next=o),t.interleaved=o;return}}catch{}finally{}n=yc(e,t,o,r),n!==null&&(o=et(),Et(n,e,r,o),Vc(n,t,r))}}function Hc(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function Uc(e,t){Xr=rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}var is={readContext:ht,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Qd={readContext:ht,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,os(4194308,4,Ac.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){return os(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vd.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:Ji,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=Ud.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,o=Tt();if(Re){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ve===null)throw Error(l(349));(Nn&30)!==0||zc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Rc(jc.bind(null,r,i,e),[e]),r.flags|=2048,no(9,Ec.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ve.identifierPrefix;if(Re){var n=Bt,r=It;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kd={readContext:ht,useCallback:Dc,useContext:ht,useEffect:Yi,useImperativeHandle:$c,useInsertionEffect:Tc,useLayoutEffect:Fc,useMemo:Oc,useReducer:Gi,useRef:Mc,useState:function(){return Gi(to)},useDebugValue:Ji,useDeferredValue:function(e){var t=mt();return Ic(t,Be.memoizedState,e)},useTransition:function(){var e=Gi(to)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:_c,useId:Bc,unstable_isNewReconciler:!1},Zd={readContext:ht,useCallback:Dc,useContext:ht,useEffect:Yi,useImperativeHandle:$c,useInsertionEffect:Tc,useLayoutEffect:Fc,useMemo:Oc,useReducer:qi,useRef:Mc,useState:function(){return qi(to)},useDebugValue:Ji,useDeferredValue:function(e){var t=mt();return Be===null?t.memoizedState=e:Ic(t,Be.memoizedState,e)},useTransition:function(){var e=qi(to)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:_c,useId:Bc,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ls={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=dn(e),i=Ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(Et(t,e,o,r),Xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=dn(e),i=Ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(Et(t,e,o,r),Xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=dn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(Et(t,e,r,n),Xo(t,e,r))}};function Wc(e,t,n,r,o,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,u):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(o,i):!0}function Qc(e,t,n){var r=!1,o=on,i=t.contextType;return typeof i=="object"&&i!==null?i=ht(i):(o=rt(t)?_n:Ze.current,r=t.contextTypes,i=(r=r!=null)?rr(e,o):on),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ls,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function el(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ii(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ht(i):(i=rt(t)?_n:Ze.current,o.context=rr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ls.enqueueReplaceState(o,o.state,null),es(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pr(e,t){try{var n="",r=t;do n+=be(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gd=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hs||(hs=!0,vl=r),nl(e,t)},n}function Gc(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){nl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nl(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=uf.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var qd=X.ReactCurrentOwner,ot=!1;function Xe(e,t,n,r){t.child=e===null?xc(t,null,n,r):lr(t,e.child,n,r)}function Xc(e,t,n,r,o){n=n.render;var i=t.ref;return cr(t,o),r=Ki(e,t,n,r,i,o),n=Zi(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(Re&&n&&Ni(t),t.flags|=1,Xe(e,t,r,o),t.child)}function eu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Sl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,tu(e,t,i,r,o)):(e=ws(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(u,r)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=hn(i,r),e.ref=t.ref,e.return=t,t.child=e}function tu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Hr(i,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return rl(e,t,n,r,o)}function nu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(fr,pt),pt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(fr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(fr,pt),pt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ne(fr,pt),pt|=r;return Xe(e,t,o,n),t.child}function ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rl(e,t,n,r,o){var i=rt(n)?_n:Ze.current;return i=rr(t,i),cr(t,o),n=Ki(e,t,n,r,i,o),r=Zi(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(Re&&r&&Ni(t),t.flags|=1,Xe(e,t,n,o),t.child)}function ou(e,t,n,r,o){if(rt(n)){var i=!0;Wo(t)}else i=!1;if(cr(t,o),t.stateNode===null)cs(e,t),Qc(t,n,r),el(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,h=t.memoizedProps;u.props=h;var g=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=ht(_):(_=rt(n)?_n:Ze.current,_=rr(t,_));var $=n.getDerivedStateFromProps,O=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function";O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==r||g!==_)&&Kc(t,u,r,_),ln=!1;var F=t.memoizedState;u.state=F,es(t,r,u,o),g=t.memoizedState,h!==r||F!==g||nt.current||ln?(typeof $=="function"&&(Xi(t,n,$,r),g=t.memoizedState),(h=ln||Wc(t,n,h,r,F,g,_))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),u.props=r,u.state=g,u.context=_,r=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,wc(e,t),h=t.memoizedProps,_=t.type===t.elementType?h:St(t.type,h),u.props=_,O=t.pendingProps,F=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=ht(g):(g=rt(n)?_n:Ze.current,g=rr(t,g));var q=n.getDerivedStateFromProps;($=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==O||F!==g)&&Kc(t,u,r,g),ln=!1,F=t.memoizedState,u.state=F,es(t,r,u,o);var J=t.memoizedState;h!==O||F!==J||nt.current||ln?(typeof q=="function"&&(Xi(t,n,q,r),J=t.memoizedState),(_=ln||Wc(t,n,_,r,F,J,g)||!1)?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,J,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,J,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=J),u.props=r,u.state=J,u.context=g,r=_):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),r=!1)}return ol(e,t,n,r,i,o)}function ol(e,t,n,r,o,i){ru(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&cc(t,n,!1),Vt(e,t,i);r=t.stateNode,qd.current=t;var h=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,h,i)):Xe(e,t,h,i),t.memoizedState=r.state,o&&cc(t,n,!0),t.child}function su(e){var t=e.stateNode;t.pendingContext?lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lc(e,t.context,!1),Bi(e,t.containerInfo)}function iu(e,t,n,r,o){return ir(),Ti(o),t.flags|=256,Xe(e,t,n,r),t.child}var sl={dehydrated:null,treeContext:null,retryLane:0};function il(e){return{baseLanes:e,cachePool:null,transitions:null}}function lu(e,t,n){var r=t.pendingProps,o=Te.current,i=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ne(Te,o&1),e===null)return Ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,i?(r=t.mode,i=t.child,u={mode:"hidden",children:u},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=bs(u,r,0,null),e=Fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=il(n),t.memoizedState=sl,e):ll(t,u));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return Yd(e,t,u,r,h,o,n);if(i){i=r.fallback,u=t.mode,o=e.child,h=o.sibling;var g={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=hn(o,g),r.subtreeFlags=o.subtreeFlags&14680064),h!==null?i=hn(h,i):(i=Fn(i,u,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,u=e.child.memoizedState,u=u===null?il(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~n,t.memoizedState=sl,r}return i=e.child,e=i.sibling,r=hn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ll(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,r){return r!==null&&Ti(r),lr(t,e.child,null,n),e=ll(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yd(e,t,n,r,o,i,u){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(l(422))),as(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=bs({mode:"visible",children:r.children},o,0,null),i=Fn(i,o,u,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&lr(t,e.child,null,u),t.child.memoizedState=il(u),t.memoizedState=sl,i);if((t.mode&1)===0)return as(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;return r=h,i=Error(l(419)),r=tl(i,r,void 0),as(e,t,u,r)}if(h=(u&e.childLanes)!==0,ot||h){if(r=Ve,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),Et(r,e,o,-1))}return Ll(),r=tl(Error(l(421))),as(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=pf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ut=nn(o.nextSibling),ct=t,Re=!0,Lt=null,e!==null&&(dt[ft++]=It,dt[ft++]=Bt,dt[ft++]=zn,It=e.id,Bt=e.overflow,zn=t),t=ll(t,r.children),t.flags|=4096,t)}function au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Di(e.return,t,n)}function al(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function cu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&au(e,n,t);else if(e.tag===19)au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ts(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),al(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ts(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}al(t,!0,n,null,i);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jd(e,t,n){switch(t.tag){case 3:su(t),ir();break;case 5:Lc(t);break;case 1:rt(t.type)&&Wo(t);break;case 4:Bi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ne(Yo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?lu(e,t,n):(Ne(Te,Te.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);Ne(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return cu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ne(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,nu(e,t,n)}return Vt(e,t,n)}var uu,cl,pu,du;uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},cl=function(){},pu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Cn(Rt.current);var i=null;switch(n){case"input":o=Lr(e,o),r=Lr(e,r),i=[];break;case"select":o=G({},o,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":o=Sr(e,o),r=Sr(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ho)}Us(n,r);var u;n=null;for(_ in o)if(!r.hasOwnProperty(_)&&o.hasOwnProperty(_)&&o[_]!=null)if(_==="style"){var h=o[_];for(u in h)h.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(p.hasOwnProperty(_)?i||(i=[]):(i=i||[]).push(_,null));for(_ in r){var g=r[_];if(h=o!=null?o[_]:void 0,r.hasOwnProperty(_)&&g!==h&&(g!=null||h!=null))if(_==="style")if(h){for(u in h)!h.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&h[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(i||(i=[]),i.push(_,n)),n=g;else _==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(i=i||[]).push(_,g)):_==="children"?typeof g!="string"&&typeof g!="number"||(i=i||[]).push(_,""+g):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(p.hasOwnProperty(_)?(g!=null&&_==="onScroll"&&Pe("scroll",e),i||h===g||(i=[])):(i=i||[]).push(_,g))}n&&(i=i||[]).push("style",n);var _=i;(t.updateQueue=_)&&(t.flags|=4)}},du=function(e,t,n,r){n!==r&&(t.flags|=4)};function ro(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xd(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return rt(t.type)&&Vo(),qe(t),null;case 3:return r=t.stateNode,ur(),Me(nt),Me(Ze),Vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(wl(Lt),Lt=null))),cl(e,t),qe(t),null;case 5:Hi(t);var o=Cn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)pu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=Cn(Rt.current),Go(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Mt]=t,r[Kr]=i,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(o=0;o<Vr.length;o++)Pe(Vr[o],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":go(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":_r(r,i),Pe("invalid",r)}Us(n,i),o=null;for(var u in i)if(i.hasOwnProperty(u)){var h=i[u];u==="children"?typeof h=="string"?r.textContent!==h&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,h,e),o=["children",h]):typeof h=="number"&&r.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,h,e),o=["children",""+h]):p.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Kt(r),vo(r,i,!0);break;case"textarea":Kt(r),xo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ho)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=y(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Mt]=t,e[Kr]=r,uu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Vs(n,r),n){case"dialog":Pe("cancel",e),Pe("close",e),o=r;break;case"iframe":case"object":case"embed":Pe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vr.length;o++)Pe(Vr[o],e);o=r;break;case"source":Pe("error",e),o=r;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),o=r;break;case"details":Pe("toggle",e),o=r;break;case"input":go(e,r),o=Lr(e,r),Pe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),Pe("invalid",e);break;case"textarea":_r(e,r),o=Sr(e,r),Pe("invalid",e);break;default:o=r}Us(n,o),h=o;for(i in h)if(h.hasOwnProperty(i)){var g=h[i];i==="style"?yo(e,g):i==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&ye(e,g)):i==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&ge(e,g):typeof g=="number"&&ge(e,""+g):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?g!=null&&i==="onScroll"&&Pe("scroll",e):g!=null&&re(e,i,g,u))}switch(n){case"input":Kt(e),vo(e,r,!1);break;case"textarea":Kt(e),xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ze(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)du(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=Cn(Jr.current),Cn(Rt.current),Go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return qe(t),null;case 13:if(Me(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)mc(),ir(),t.flags|=98560,i=!1;else if(i=Go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Mt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Lt!==null&&(wl(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?He===0&&(He=3):Ll())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return ur(),cl(e,t),e===null&&Wr(t.stateNode.containerInfo),qe(t),null;case 10:return $i(t.type._context),qe(t),null;case 17:return rt(t.type)&&Vo(),qe(t),null;case 19:if(Me(Te),i=t.memoizedState,i===null)return qe(t),null;if(r=(t.flags&128)!==0,u=i.rendering,u===null)if(r)ro(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ts(e),u!==null){for(t.flags|=128,ro(i,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Te,Te.current&1|2),t.child}e=e.sibling}i.tail!==null&&$e()>hr&&(t.flags|=128,r=!0,ro(i,!1),t.lanes=4194304)}else{if(!r)if(e=ts(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Re)return qe(t),null}else 2*$e()-i.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,ro(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(n=i.last,n!==null?n.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=$e(),t.sibling=null,n=Te.current,Ne(Te,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return kl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function ef(e,t){switch(Pi(t),t.tag){case 1:return rt(t.type)&&Vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),Me(nt),Me(Ze),Vi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Hi(t),null;case 13:if(Me(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Te),null;case 4:return ur(),null;case 10:return $i(t.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var us=!1,Ye=!1,tf=typeof WeakSet=="function"?WeakSet:Set,Y=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function ul(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var fu=!1;function nf(e,t){if(ki=No,e=Wa(),hi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,h=-1,g=-1,_=0,$=0,O=e,F=null;t:for(;;){for(var q;O!==n||o!==0&&O.nodeType!==3||(h=u+o),O!==i||r!==0&&O.nodeType!==3||(g=u+r),O.nodeType===3&&(u+=O.nodeValue.length),(q=O.firstChild)!==null;)F=O,O=q;for(;;){if(O===e)break t;if(F===n&&++_===o&&(h=u),F===i&&++$===r&&(g=u),(q=O.nextSibling)!==null)break;O=F,F=O.parentNode}O=q}n=h===-1||g===-1?null:{start:h,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},No=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var J=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var ee=J.memoizedProps,De=J.memoizedState,k=t.stateNode,x=k.getSnapshotBeforeUpdate(t.elementType===t.type?ee:St(t.type,ee),De);k.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(B){Ae(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return J=fu,fu=!1,J}function oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ul(t,n,i)}o=o.next}while(o!==r)}}function ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hu(e){var t=e.alternate;t!==null&&(e.alternate=null,hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Kr],delete t[Ei],delete t[Dd],delete t[Od])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mu(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ho));else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}var Qe=null,_t=!1;function cn(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:Ye||dr(n,t);case 6:var r=Qe,o=_t;Qe=null,cn(e,t,n),Qe=r,_t=o,Qe!==null&&(_t?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(_t?(e=Qe,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),Ar(e)):zi(Qe,n.stateNode));break;case 4:r=Qe,o=_t,Qe=n.stateNode.containerInfo,_t=!0,cn(e,t,n),Qe=r,_t=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&ul(n,t,u),o=o.next}while(o!==r)}cn(e,t,n);break;case 1:if(!Ye&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(h){Ae(n,t,h)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,cn(e,t,n),Ye=r):cn(e,t,n);break;default:cn(e,t,n)}}function xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tf),t.forEach(function(r){var o=df.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 5:Qe=h.stateNode,_t=!1;break e;case 3:Qe=h.stateNode.containerInfo,_t=!0;break e;case 4:Qe=h.stateNode.containerInfo,_t=!0;break e}h=h.return}if(Qe===null)throw Error(l(160));vu(i,u,o),Qe=null,_t=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(_){Ae(o,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yu(t,e),t=t.sibling}function yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Ft(e),r&4){try{oo(3,e,e.return),ps(3,e)}catch(ee){Ae(e,e.return,ee)}try{oo(5,e,e.return)}catch(ee){Ae(e,e.return,ee)}}break;case 1:zt(t,e),Ft(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(zt(t,e),Ft(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var o=e.stateNode;try{ge(o,"")}catch(ee){Ae(e,e.return,ee)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,u=n!==null?n.memoizedProps:i,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&Un(o,i),Vs(h,u);var _=Vs(h,i);for(u=0;u<g.length;u+=2){var $=g[u],O=g[u+1];$==="style"?yo(o,O):$==="dangerouslySetInnerHTML"?ye(o,O):$==="children"?ge(o,O):re(o,$,O,_)}switch(h){case"input":Vn(o,i);break;case"textarea":zr(o,i);break;case"select":var F=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var q=i.value;q!=null?Gt(o,!!i.multiple,q,!1):F!==!!i.multiple&&(i.defaultValue!=null?Gt(o,!!i.multiple,i.defaultValue,!0):Gt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Kr]=i}catch(ee){Ae(e,e.return,ee)}}break;case 6:if(zt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(ee){Ae(e,e.return,ee)}}break;case 3:if(zt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(ee){Ae(e,e.return,ee)}break;case 4:zt(t,e),Ft(e);break;case 13:zt(t,e),Ft(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(gl=$e())),r&4&&xu(e);break;case 22:if($=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(_=Ye)||$,zt(t,e),Ye=_):zt(t,e),Ft(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!$&&(e.mode&1)!==0)for(Y=e,$=e.child;$!==null;){for(O=Y=$;Y!==null;){switch(F=Y,q=F.child,F.tag){case 0:case 11:case 14:case 15:oo(4,F,F.return);break;case 1:dr(F,F.return);var J=F.stateNode;if(typeof J.componentWillUnmount=="function"){r=F,n=F.return;try{t=r,J.props=t.memoizedProps,J.state=t.memoizedState,J.componentWillUnmount()}catch(ee){Ae(r,n,ee)}}break;case 5:dr(F,F.return);break;case 22:if(F.memoizedState!==null){ku(O);continue}}q!==null?(q.return=F,Y=q):ku(O)}$=$.sibling}e:for($=null,O=e;;){if(O.tag===5){if($===null){$=O;try{o=O.stateNode,_?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=O.stateNode,g=O.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=$t("display",u))}catch(ee){Ae(e,e.return,ee)}}}else if(O.tag===6){if($===null)try{O.stateNode.nodeValue=_?"":O.memoizedProps}catch(ee){Ae(e,e.return,ee)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;$===O&&($=null),O=O.return}$===O&&($=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:zt(t,e),Ft(e),r&4&&xu(e);break;case 21:break;default:zt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ge(o,""),r.flags&=-33);var i=gu(e);fl(e,i,o);break;case 3:case 4:var u=r.stateNode.containerInfo,h=gu(e);dl(e,h,u);break;default:throw Error(l(161))}}catch(g){Ae(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rf(e,t,n){Y=e,wu(e)}function wu(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,i=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||us;if(!u){var h=o.alternate,g=h!==null&&h.memoizedState!==null||Ye;h=us;var _=Ye;if(us=u,(Ye=g)&&!_)for(Y=o;Y!==null;)u=Y,g=u.child,u.tag===22&&u.memoizedState!==null?Lu(o):g!==null?(g.return=u,Y=g):Lu(o);for(;i!==null;)Y=i,wu(i),i=i.sibling;Y=o,us=h,Ye=_}bu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,Y=i):bu(e)}}function bu(e){for(;Y!==null;){var t=Y;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&kc(t,i,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kc(t,u,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var $=_.memoizedState;if($!==null){var O=$.dehydrated;O!==null&&Ar(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||t.flags&512&&pl(t)}catch(F){Ae(t,t.return,F)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function ku(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Lu(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ps(4,t)}catch(g){Ae(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(g){Ae(t,o,g)}}var i=t.return;try{pl(t)}catch(g){Ae(t,i,g)}break;case 5:var u=t.return;try{pl(t)}catch(g){Ae(t,u,g)}}}catch(g){Ae(t,t.return,g)}if(t===e){Y=null;break}var h=t.sibling;if(h!==null){h.return=t.return,Y=h;break}Y=t.return}}var of=Math.ceil,ds=X.ReactCurrentDispatcher,hl=X.ReactCurrentOwner,gt=X.ReactCurrentBatchConfig,Le=0,Ve=null,Oe=null,Ke=0,pt=0,fr=rn(0),He=0,so=null,Pn=0,fs=0,ml=0,io=null,st=null,gl=0,hr=1/0,Wt=null,hs=!1,vl=null,un=null,ms=!1,pn=null,gs=0,lo=0,xl=null,vs=-1,xs=0;function et(){return(Le&6)!==0?$e():vs!==-1?vs:vs=$e()}function dn(e){return(e.mode&1)===0?1:(Le&2)!==0&&Ke!==0?Ke&-Ke:Bd.transition!==null?(xs===0&&(xs=ga()),xs):(e=je,e!==0||(e=window.event,e=e===void 0?16:_a(e.type)),e)}function Et(e,t,n,r){if(50<lo)throw lo=0,xl=null,Error(l(185));Pr(e,n,r),((Le&2)===0||e!==Ve)&&(e===Ve&&((Le&2)===0&&(fs|=n),He===4&&fn(e,Ke)),it(e,r),n===1&&Le===0&&(t.mode&1)===0&&(hr=$e()+500,Qo&&sn()))}function it(e,t){var n=e.callbackNode;Bp(e,t);var r=Eo(e,e===Ve?Ke:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Id(_u.bind(null,e)):uc(_u.bind(null,e)),Ad(function(){(Le&6)===0&&sn()}),n=null;else{switch(va(r)){case 1:n=Ys;break;case 4:n=ha;break;case 16:n=Lo;break;case 536870912:n=ma;break;default:n=Lo}n=Ru(n,Su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Su(e,t){if(vs=-1,xs=0,(Le&6)!==0)throw Error(l(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Eo(e,e===Ve?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ys(e,r);else{t=r;var o=Le;Le|=2;var i=Eu();(Ve!==e||Ke!==t)&&(Wt=null,hr=$e()+500,Rn(e,t));do try{af();break}catch(h){zu(e,h)}while(!0);Ai(),ds.current=i,Le=o,Oe!==null?t=0:(Ve=null,Ke=0,t=He)}if(t!==0){if(t===2&&(o=Js(e),o!==0&&(r=o,t=yl(e,o))),t===1)throw n=so,Rn(e,0),fn(e,r),it(e,$e()),n;if(t===6)fn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!sf(o)&&(t=ys(e,r),t===2&&(i=Js(e),i!==0&&(r=i,t=yl(e,i))),t===1))throw n=so,Rn(e,0),fn(e,r),it(e,$e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:Tn(e,st,Wt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=gl+500-$e(),10<t)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_i(Tn.bind(null,e,st,Wt),t);break}Tn(e,st,Wt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-bt(r);i=1<<u,u=t[u],u>o&&(o=u),r&=~i}if(r=o,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*of(r/1960))-r,10<r){e.timeoutHandle=_i(Tn.bind(null,e,st,Wt),r);break}Tn(e,st,Wt);break;case 5:Tn(e,st,Wt);break;default:throw Error(l(329))}}}return it(e,$e()),e.callbackNode===n?Su.bind(null,e):null}function yl(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=ys(e,t),e!==2&&(t=st,st=n,t!==null&&wl(t)),e}function wl(e){st===null?st=e:st.push.apply(st,e)}function sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~ml,t&=~fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if((Le&6)!==0)throw Error(l(327));mr();var t=Eo(e,0);if((t&1)===0)return it(e,$e()),null;var n=ys(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=yl(e,r))}if(n===1)throw n=so,Rn(e,0),fn(e,t),it(e,$e()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,st,Wt),it(e,$e()),null}function bl(e,t){var n=Le;Le|=1;try{return e(t)}finally{Le=n,Le===0&&(hr=$e()+500,Qo&&sn())}}function Mn(e){pn!==null&&pn.tag===0&&(Le&6)===0&&mr();var t=Le;Le|=1;var n=gt.transition,r=je;try{if(gt.transition=null,je=1,e)return e()}finally{je=r,gt.transition=n,Le=t,(Le&6)===0&&sn()}}function kl(){pt=fr.current,Me(fr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fd(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Pi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:ur(),Me(nt),Me(Ze),Vi();break;case 5:Hi(r);break;case 4:ur();break;case 13:Me(Te);break;case 19:Me(Te);break;case 10:$i(r.type._context);break;case 22:case 23:kl()}n=n.return}if(Ve=e,Oe=e=hn(e.current,null),Ke=pt=t,He=0,so=null,ml=fs=Pn=0,st=io=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var u=i.next;i.next=o,r.next=u}n.pending=r}jn=null}return e}function zu(e,t){do{var n=Oe;try{if(Ai(),ns.current=is,rs){for(var r=Fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}rs=!1}if(Nn=0,Ue=Be=Fe=null,Xr=!1,eo=0,hl.current=null,n===null||n.return===null){He=1,so=t,Oe=null;break}e:{var i=e,u=n.return,h=n,g=t;if(t=Ke,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=g,$=h,O=$.tag;if(($.mode&1)===0&&(O===0||O===11||O===15)){var F=$.alternate;F?($.updateQueue=F.updateQueue,$.memoizedState=F.memoizedState,$.lanes=F.lanes):($.updateQueue=null,$.memoizedState=null)}var q=Yc(u);if(q!==null){q.flags&=-257,Jc(q,u,h,i,t),q.mode&1&&qc(i,_,t),t=q,g=_;var J=t.updateQueue;if(J===null){var ee=new Set;ee.add(g),t.updateQueue=ee}else J.add(g);break e}else{if((t&1)===0){qc(i,_,t),Ll();break e}g=Error(l(426))}}else if(Re&&h.mode&1){var De=Yc(u);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),Jc(De,u,h,i,t),Ti(pr(g,h));break e}}i=g=pr(g,h),He!==4&&(He=2),io===null?io=[i]:io.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var k=Zc(i,g,t);bc(i,k);break e;case 1:h=g;var x=i.type,S=i.stateNode;if((i.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(un===null||!un.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var B=Gc(i,h,t);bc(i,B);break e}}i=i.return}while(i!==null)}Cu(n)}catch(te){t=te,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Eu(){var e=ds.current;return ds.current=is,e===null?is:e}function Ll(){(He===0||He===3||He===2)&&(He=4),Ve===null||(Pn&268435455)===0&&(fs&268435455)===0||fn(Ve,Ke)}function ys(e,t){var n=Le;Le|=2;var r=Eu();(Ve!==e||Ke!==t)&&(Wt=null,Rn(e,t));do try{lf();break}catch(o){zu(e,o)}while(!0);if(Ai(),Le=n,ds.current=r,Oe!==null)throw Error(l(261));return Ve=null,Ke=0,He}function lf(){for(;Oe!==null;)ju(Oe)}function af(){for(;Oe!==null&&!Mp();)ju(Oe)}function ju(e){var t=Mu(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Cu(e):Oe=t,hl.current=null}function Cu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Xd(n,t,pt),n!==null){Oe=n;return}}else{if(n=ef(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);He===0&&(He=5)}function Tn(e,t,n){var r=je,o=gt.transition;try{gt.transition=null,je=1,cf(e,t,n,r)}finally{gt.transition=o,je=r}return null}function cf(e,t,n,r){do mr();while(pn!==null);if((Le&6)!==0)throw Error(l(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hp(e,i),e===Ve&&(Oe=Ve=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ms||(ms=!0,Ru(Lo,function(){return mr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=gt.transition,gt.transition=null;var u=je;je=1;var h=Le;Le|=4,hl.current=null,nf(e,n),yu(n,e),jd(Li),No=!!ki,Li=ki=null,e.current=n,rf(n),Rp(),Le=h,je=u,gt.transition=i}else e.current=n;if(ms&&(ms=!1,pn=e,gs=o),i=e.pendingLanes,i===0&&(un=null),Ap(n.stateNode),it(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(hs)throw hs=!1,e=vl,vl=null,e;return(gs&1)!==0&&e.tag!==0&&mr(),i=e.pendingLanes,(i&1)!==0?e===xl?lo++:(lo=0,xl=e):lo=0,sn(),null}function mr(){if(pn!==null){var e=va(gs),t=gt.transition,n=je;try{if(gt.transition=null,je=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,gs=0,(Le&6)!==0)throw Error(l(331));var o=Le;for(Le|=4,Y=e.current;Y!==null;){var i=Y,u=i.child;if((Y.flags&16)!==0){var h=i.deletions;if(h!==null){for(var g=0;g<h.length;g++){var _=h[g];for(Y=_;Y!==null;){var $=Y;switch($.tag){case 0:case 11:case 15:oo(8,$,i)}var O=$.child;if(O!==null)O.return=$,Y=O;else for(;Y!==null;){$=Y;var F=$.sibling,q=$.return;if(hu($),$===_){Y=null;break}if(F!==null){F.return=q,Y=F;break}Y=q}}}var J=i.alternate;if(J!==null){var ee=J.child;if(ee!==null){J.child=null;do{var De=ee.sibling;ee.sibling=null,ee=De}while(ee!==null)}}Y=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,Y=u;else e:for(;Y!==null;){if(i=Y,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,Y=k;break e}Y=i.return}}var x=e.current;for(Y=x;Y!==null;){u=Y;var S=u.child;if((u.subtreeFlags&2064)!==0&&S!==null)S.return=u,Y=S;else e:for(u=x;Y!==null;){if(h=Y,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ps(9,h)}}catch(te){Ae(h,h.return,te)}if(h===u){Y=null;break e}var B=h.sibling;if(B!==null){B.return=h.return,Y=B;break e}Y=h.return}}if(Le=o,sn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{je=n,gt.transition=t}}return!1}function Nu(e,t,n){t=pr(n,t),t=Zc(e,t,1),e=an(e,t,1),t=et(),e!==null&&(Pr(e,1,t),it(e,t))}function Ae(e,t,n){if(e.tag===3)Nu(e,e,n);else for(;t!==null;){if(t.tag===3){Nu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=pr(n,e),e=Gc(t,e,1),t=an(t,e,1),e=et(),t!==null&&(Pr(t,1,e),it(t,e));break}}t=t.return}}function uf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ke&n)===n&&(He===4||He===3&&(Ke&130023424)===Ke&&500>$e()-gl?Rn(e,0):ml|=n),it(e,t)}function Pu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zo,zo<<=1,(zo&130023424)===0&&(zo=4194304)));var n=et();e=Ht(e,t),e!==null&&(Pr(e,t,n),it(e,n))}function pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pu(e,n)}function df(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),Pu(e,n)}var Mu;Mu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,Jd(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Re&&(t.flags&1048576)!==0&&pc(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cs(e,t),e=t.pendingProps;var o=rr(t,Ze.current);cr(t,n),o=Ki(null,t,r,e,o,n);var i=Zi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,Wo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ii(t),o.updater=ls,t.stateNode=o,o._reactInternals=t,el(t,r,e,n),t=ol(null,t,r,!0,i,n)):(t.tag=0,Re&&i&&Ni(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hf(r),e=St(r,e),o){case 0:t=rl(null,t,r,e,n);break e;case 1:t=ou(null,t,r,e,n);break e;case 11:t=Xc(null,t,r,e,n);break e;case 14:t=eu(null,t,r,St(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),rl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),ou(e,t,r,o,n);case 3:e:{if(su(t),e===null)throw Error(l(387));r=t.pendingProps,i=t.memoizedState,o=i.element,wc(e,t),es(t,r,null,n);var u=t.memoizedState;if(r=u.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=pr(Error(l(423)),t),t=iu(e,t,r,n,o);break e}else if(r!==o){o=pr(Error(l(424)),t),t=iu(e,t,r,n,o);break e}else for(ut=nn(t.stateNode.containerInfo.firstChild),ct=t,Re=!0,Lt=null,n=xc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===o){t=Vt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Ri(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,u=o.children,Si(r,o)?u=null:i!==null&&Si(r,i)&&(t.flags|=32),ru(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&Ri(t),null;case 13:return lu(e,t,n);case 4:return Bi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Xc(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,u=o.value,Ne(Yo,r._currentValue),r._currentValue=u,i!==null)if(kt(i.value,u)){if(i.children===o.children&&!nt.current){t=Vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var h=i.dependencies;if(h!==null){u=i.child;for(var g=h.firstContext;g!==null;){if(g.context===r){if(i.tag===1){g=Ut(-1,n&-n),g.tag=2;var _=i.updateQueue;if(_!==null){_=_.shared;var $=_.pending;$===null?g.next=g:(g.next=$.next,$.next=g),_.pending=g}}i.lanes|=n,g=i.alternate,g!==null&&(g.lanes|=n),Di(i.return,n,t),h.lanes|=n;break}g=g.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(l(341));u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),Di(u,n,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,cr(t,n),o=ht(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=St(r,t.pendingProps),o=St(r.type,o),eu(e,t,r,o,n);case 15:return tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),cs(e,t),t.tag=1,rt(r)?(e=!0,Wo(t)):e=!1,cr(t,n),Qc(t,r,o),el(t,r,o,n),ol(null,t,r,!0,e,n);case 19:return cu(e,t,n);case 22:return nu(e,t,n)}throw Error(l(156,t.tag))};function Ru(e,t){return da(e,t)}function ff(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new ff(e,t,n,r)}function Sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hf(e){if(typeof e=="function")return Sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===P)return 11;if(e===we)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ws(e,t,n,r,o,i){var u=2;if(r=e,typeof e=="function")Sl(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case K:return Fn(n.children,o,i,t);case fe:u=8,o|=8;break;case he:return e=vt(12,n,t,o|2),e.elementType=he,e.lanes=i,e;case U:return e=vt(13,n,t,o),e.elementType=U,e.lanes=i,e;case H:return e=vt(19,n,t,o),e.elementType=H,e.lanes=i,e;case de:return bs(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:u=10;break e;case Z:u=9;break e;case P:u=11;break e;case we:u=14;break e;case me:u=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=vt(u,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Fn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=vt(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function El(e,t,n,r,o,i,u,h,g){return e=new mf(e,t,n,h,g),t===1?(t=1,i===!0&&(t|=8)):t=0,i=vt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ii(i),e}function gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tu(e){if(!e)return on;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(rt(n))return ac(e,n,t)}return t}function Fu(e,t,n,r,o,i,u,h,g){return e=El(n,r,!0,e,o,i,u,h,g),e.context=Tu(null),n=e.current,r=et(),o=dn(n),i=Ut(r,o),i.callback=t??null,an(n,i,o),e.current.lanes=o,Pr(e,o,r),it(e,r),e}function ks(e,t,n,r){var o=t.current,i=et(),u=dn(o);return n=Tu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,u),e!==null&&(Et(e,o,u,i),Xo(e,o,u)),u}function Ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jl(e,t){Au(e,t),(e=e.alternate)&&Au(e,t)}function vf(){return null}var $u=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cl(e){this._internalRoot=e}Ss.prototype.render=Cl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ks(e,t,null,null)},Ss.prototype.unmount=Cl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){ks(null,e,null,null)}),t[Dt]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=wa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&La(e)}};function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function xf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var _=Ls(u);i.call(_)}}var u=Fu(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=u,e[Dt]=u.current,Wr(e.nodeType===8?e.parentNode:e),Mn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var h=r;r=function(){var _=Ls(g);h.call(_)}}var g=El(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=g,e[Dt]=g.current,Wr(e.nodeType===8?e.parentNode:e),Mn(function(){ks(t,g,n,r)}),g}function zs(e,t,n,r,o){var i=n._reactRootContainer;if(i){var u=i;if(typeof o=="function"){var h=o;o=function(){var g=Ls(u);h.call(g)}}ks(t,u,e,o)}else u=xf(n,t,e,o,r);return Ls(u)}xa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(ei(t,n|1),it(t,$e()),(Le&6)===0&&(hr=$e()+500,sn()))}break;case 13:Mn(function(){var r=Ht(e,1);if(r!==null){var o=et();Et(r,e,1,o)}}),jl(e,1)}},ti=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=et();Et(t,e,134217728,n)}jl(e,134217728)}},ya=function(e){if(e.tag===13){var t=dn(e),n=Ht(e,t);if(n!==null){var r=et();Et(n,e,t,r)}jl(e,t)}},wa=function(){return je},ba=function(e,t){var n=je;try{return je=e,t()}finally{je=n}},Ks=function(e,t,n){switch(t){case"input":if(Vn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Uo(r);if(!o)throw Error(l(90));mo(r),Vn(r,o)}}}break;case"textarea":zr(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}},sa=bl,ia=Mn;var yf={usingClientEntryPoint:!1,Events:[Zr,tr,Uo,ra,oa,bl]},ao={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wf={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ua(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{So=Es.inject(wf),Pt=Es}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nl(t))throw Error(l(200));return gf(e,t,null,n)},lt.createRoot=function(e,t){if(!Nl(e))throw Error(l(299));var n=!1,r="",o=$u;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=El(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Cl(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=ua(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Mn(e)},lt.hydrate=function(e,t,n){if(!_s(t))throw Error(l(200));return zs(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Nl(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",u=$u;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Fu(t,null,e,1,n??null,o,!1,i,u),e[Dt]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ss(t)},lt.render=function(e,t,n){if(!_s(t))throw Error(l(200));return zs(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!_s(e))throw Error(l(40));return e._reactRootContainer?(Mn(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},lt.unstable_batchedUpdates=bl,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_s(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return zs(e,t,n,!1,r)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Qu;function Cf(){if(Qu)return Rl.exports;Qu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(a){console.error(a)}}return s(),Rl.exports=jf(),Rl.exports}var Ku;function Nf(){if(Ku)return js;Ku=1;var s=Cf();return js.createRoot=s.createRoot,js.hydrateRoot=s.hydrateRoot,js}var Pf=Nf();const Mf=kf(Pf),Rf="modulepreload",Tf=function(s,a){return new URL(s,a).href},Zu={},Cs=function(a,l,c){let p=Promise.resolve();if(l&&l.length>0){let m=function(j){return Promise.all(j.map(E=>Promise.resolve(E).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};const v=document.getElementsByTagName("link"),b=document.querySelector("meta[property=csp-nonce]"),z=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));p=m(l.map(j=>{if(j=Tf(j,c),j in Zu)return;Zu[j]=!0;const E=j.endsWith(".css"),C=E?'[rel="stylesheet"]':"";if(!!c)for(let D=v.length-1;D>=0;D--){const V=v[D];if(V.href===j&&(!E||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${j}"]${C}`))return;const Q=document.createElement("link");if(Q.rel=E?"stylesheet":Rf,E||(Q.as="script"),Q.crossOrigin="",Q.href=j,z&&Q.setAttribute("nonce",z),document.head.appendChild(Q),E)return new Promise((D,V)=>{Q.addEventListener("load",D),Q.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${j}`)))})}))}function f(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return p.then(m=>{for(const v of m||[])v.status==="rejected"&&f(v.reason);return a().catch(f)})},Ul={toggle:()=>Cs(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>Cs(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>Cs(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>Cs(()=>import("./press-h_enDfSn.js"),[],import.meta.url)};let vr=null,Gu=!1;const dp=new Set,As=new Map,Ns=new Map;function Gl(){if(vr)return vr;const s=window.AudioContext||window.webkitAudioContext;return s?(vr=new s,vr):null}function ql(s){if(As.has(s))return Promise.resolve(As.get(s));if(Ns.has(s))return Ns.get(s);const a=Gl();if(!a||!Ul[s])return Promise.resolve(null);const l=Ul[s]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>a.decodeAudioData(c)).then(c=>(As.set(s,c),c)).catch(()=>null).finally(()=>Ns.delete(s));return Ns.set(s,l),l}function Ff(){const s=Gl();s&&(s.state==="suspended"&&s.resume(),dp.forEach(ql))}function Af(s){if(typeof window>"u"||!Ul[s])return;if(dp.add(s),vr&&vr.state!=="suspended"){ql(s);return}if(Gu)return;Gu=!0;const a={capture:!0,passive:!0},l=()=>{window.removeEventListener("pointerdown",l,a),window.removeEventListener("keydown",l,a),Ff()};window.addEventListener("pointerdown",l,a),window.addEventListener("keydown",l,a)}const $f=120;function Df(s,a=1){if(typeof window>"u"||a<=0)return;const l=Gl();if(!l)return;l.state==="suspended"&&l.resume();const c=As.get(s);if(!c){const p=performance.now();ql(s).then(f=>{f&&performance.now()-p<=$f&&qu(l,f,a)});return}qu(l,c,a)}function qu(s,a,l){const c=s.createBufferSource(),p=s.createGain();p.gain.value=Math.min(1,l),c.buffer=a,c.connect(p).connect(s.destination),c.start()}const fp=.7,hp=L.createContext({enabled:!0,volume:fp});function Of({enabled:s=!0,volume:a=fp,children:l}){return d.jsx(hp.Provider,{value:{enabled:s,volume:a},children:l})}function Bs(s,a=!0){const{enabled:l,volume:c}=L.useContext(hp),p=l&&a;return L.useEffect(()=>{p&&Af(s)},[s,p]),L.useCallback(()=>{p&&Df(s,c)},[s,p,c])}const If=`/* ============================================================
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
  --sc-color-slider-thumb-rim-top: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-slider-thumb-rim-bottom: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-slider-thumb-face-top: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-slider-thumb-face-bottom: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
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
  --sc-shadow-slider-track: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-slider-thumb: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-slider-thumb-pressed: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-motion-slider-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-drag-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-drag-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-stretch: 0;
  --sc-motion-slider-squash: 0;
  --sc-motion-slider-thumb-press-scale: 1;
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
  --sc-size-slider-track: var(--sc-p-space-4);
  --sc-size-slider-track-active: var(--sc-p-space-micro-6);
  --sc-size-slider-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-slider-thumb: 0px;
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
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
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
  --sc-color-slider-thumb-rim-top: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-slider-thumb-rim-bottom: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-slider-thumb-face-top: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-slider-thumb-face-bottom: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
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
  --sc-shadow-slider-track: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-slider-thumb: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-slider-thumb-pressed: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-motion-slider-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-drag-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-slider-drag-easing: var(--sc-p-motion-easing-out);
  --sc-motion-slider-stretch: 0;
  --sc-motion-slider-squash: 0;
  --sc-motion-slider-thumb-press-scale: 1;
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
  --sc-size-slider-track: var(--sc-p-space-4);
  --sc-size-slider-track-active: var(--sc-p-space-micro-6);
  --sc-size-slider-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-slider-thumb: 0px;
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
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}
`,Yu=5e-4,Bf=6e3,Ju=60;function Hf({stiffness:s,damping:a,mass:l}){let c=0,p=0;const f=.001,m=[0];let v=0,b=0;for(;v<Bf;){const z=(-s*(c-1)-a*p)/l;if(p+=z*f,c+=p*f,v+=1,m.push(c),c>b&&(b=c),Math.abs(c-1)<Yu&&Math.abs(p)<Yu)break}return{trace:m,settleMs:v,overshoot:Math.max(0,b-1)}}function Ds(s){const{trace:a,settleMs:l,overshoot:c}=Hf(s),p=[];for(let f=0;f<Ju;f+=1){const m=Math.round(f/(Ju-1)*(a.length-1));p.push(+a[m].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:l,overshoot:c}}const Ps=60,Xu={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function Uf([s,a,l,c],p){const f=(b,z,j)=>3*(1-j)**2*j*b+3*(1-j)*j**2*z+j**3;let m=0,v=1;for(let b=0;b<40;b+=1){const z=(m+v)/2;f(s,l,z)<p?m=z:v=z}return f(a,c,(m+v)/2)}function Vf(s){const a=[];for(const l of s.split(",")){const[c,...p]=l.trim().split(/\s+/);p.length||a.push({v:+c,x:null});for(const f of p)a.push({v:+c,x:parseFloat(f)/100})}a[0].x===null&&(a[0].x=0),a.at(-1).x===null&&(a.at(-1).x=1);for(let l=1;l<a.length;l+=1){if(a[l].x!==null){a[l].x=Math.max(a[l].x,a[l-1].x);continue}let c=l;for(;a[c].x===null;)c+=1;const p=(a[c].x-a[l-1].x)/(c-l+1);for(let f=l;f<c;f+=1)a[f].x=a[f-1].x+p}return a}function Wf(s,a){for(let l=1;l<s.length;l+=1)if(a<=s[l].x){const c=s[l-1],p=s[l],f=p.x-c.x;return f?c.v+(a-c.x)/f*(p.v-c.v):p.v}return s.at(-1).v}function Yl(s){var p;const a=(s||"ease").trim(),l=a.match(/^linear\((.+)\)$/);if(l){const f=Vf(l[1]);return Array.from({length:Ps},(m,v)=>Wf(f,v/(Ps-1)))}const c=((p=a.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||Xu[a]||Xu.ease;return Array.from({length:Ps},(f,m)=>Uf(c,m/(Ps-1)))}function Jl(s){const a=s.map((c,p)=>Math.abs(s[Math.min(p+1,s.length-1)]-s[Math.max(p-1,0)]));a[0]=0,a[a.length-1]=0;const l=Math.max(...a)||1;return a.map(c=>c/l)}const Qf=s=>(s.endsWith("ms")?parseFloat(s):parseFloat(s)*1e3)||0;function Kf(s){const a=[];let l=0,c="";for(const p of s)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(a.push(c.trim()),c=""):c+=p;return a.push(c.trim()),a}function bn(s,a){const l=`--sc-motion-${a}`,c=getComputedStyle(s),p=E=>parseFloat(c.getPropertyValue(E))||0,f=document.createElement("span");f.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${l}-travel-duration),var(${l}-press-lean-duration,0ms);transition-timing-function:var(${l}-travel-easing),var(--sc-motion-press-easing);`,s.appendChild(f);const m=getComputedStyle(f),[v,b]=m.transitionDuration.split(",").map(E=>Qf(E.trim())),[z,j]=Kf(m.transitionTimingFunction);return f.remove(),{travelDur:v,travelEasing:z,leanDur:b,leanEasing:j,stretch:p(`${l}-stretch`),squash:p(`${l}-squash`),lean:p(`${l}-press-lean`)}}const In=s=>!!s&&(s.stretch>0||s.squash>0||s.lean>0),Bn=()=>{var s;return typeof window<"u"&&!!((s=window.matchMedia)!=null&&s.call(window,"(prefers-reduced-motion: reduce)").matches)};function Hn({l:s,r:a,h:l},c,p=!0){return{transform:`translate(${s}px, ${p?(c-l)/2:0}px)`,width:`${a-s}px`,height:`${l}px`}}function kr(s,a,l,c,p=!0){const f=Yl(s.travelEasing),m=Jl(f);return f.map((v,b)=>{const z=s.stretch*c*m[b],j=a.l+(l.l-a.l)*v-z/2,E=a.r+(l.r-a.r)*v+z/2;return Hn({l:j,r:E,h:c*(1-s.squash*m[b])},c,p)})}function Xl(s,a,l){const c=Math.sign(l.l+l.r-(a.l+a.r)),p=s.lean*.25*Math.abs((l.l+l.r-(a.l+a.r))/2);return c>0?{...a,r:a.r+p}:c<0?{...a,l:a.l-p}:a}function xr(s,a,l,c,{hold:p=!1,onDone:f}={}){s.getAnimations().forEach(v=>v.cancel());const m=s.animate(a,{duration:l,easing:c,fill:"forwards"});return p||(m.onfinish=()=>{m.cancel(),f==null||f()}),m}function Nt(s){const a=s.getBoundingClientRect(),l=s.currentCSSZoom||1;return{left:a.left/l,right:a.right/l,width:a.width/l,top:a.top/l,height:a.height/l}}function ea(s,a){const l=Nt(s);return{l:l.left-a.left,r:l.right-a.left}}function Zf(s,a){const l=bn(s,"switch"),c=getComputedStyle(s),p=parseFloat(c.width),f=parseFloat(c.height),m=parseFloat(getComputedStyle(a).height),v=(f-m)/2;return{...l,knob:m,travel:p-m-2*v}}const ho=(s,a)=>({l:a?s.travel:0,r:(a?s.travel:0)+s.knob}),Gf=(s,a)=>Xl(s,ho(s,a),ho(s,!a)),qf=(s,a,l)=>kr(s,a,l,s.knob,!1),Yf=(s,a,l)=>[Hn({...a,h:s.knob},s.knob,!1),Hn({...l,h:s.knob},s.knob,!1)],Jf="_field_tf6ns_39",Xf="_disabled_tf6ns_49",eh="_controlWrapper_tf6ns_53",th="_input_tf6ns_59",nh="_track_tf6ns_69",rh="_glyphs_tf6ns_84",oh="_glyphOn_tf6ns_99",sh="_glyphOff_tf6ns_105",ih="_thumb_tf6ns_115",lh="_label_tf6ns_190",At={field:Jf,disabled:Xf,controlWrapper:eh,input:th,track:nh,glyphs:rh,glyphOn:oh,glyphOff:sh,thumb:ih,label:lh};function ah({checked:s=!1,disabled:a=!1,onChange:l,label:c,sound:p=!0,glyphs:f=!0,className:m=""}){const v=L.useId(),b=Bs("toggle",p),z=L.useRef(null),j=L.useRef(null),E=L.useRef(null),C=L.useRef(null),T=L.useRef(null),Q=L.useRef(!1),D=()=>{if(a||Bn()||!j.current||!E.current)return null;const I=Zf(j.current,E.current);return In(I)?I:null},V=()=>{var I,K;(I=C.current)==null||I.cancel(),C.current=null,T.current=null,(K=j.current)==null||K.removeAttribute("data-driven")},ne=(I,K,fe,he)=>{var Z;(Z=C.current)==null||Z.cancel(),j.current.setAttribute("data-driven","");const le=E.current.animate(I,{duration:K,easing:fe,fill:"forwards"});C.current=le,he||(le.onfinish=()=>{C.current===le&&V()})},ue=(I,K,fe)=>ne(qf(I,K,ho(I,fe)),I.travelDur,"linear",!1),re=()=>{const I=D();if(!I||I.lean<=0)return;const K=z.current.checked,fe=T.current||ho(I,K);T.current=Gf(I,K),Q.current=!1,ne(Yf(I,fe,T.current),I.leanDur,I.leanEasing,!0)},X=()=>{if(!T.current)return;const I=D();if(!I){V();return}const K=T.current;T.current=null,ue(I,K,z.current.checked)},pe=()=>setTimeout(()=>{Q.current||X()},0);return d.jsxs("label",{htmlFor:v,className:`${At.field} ${a?At.disabled:""} ${m}`,onPointerDown:re,onPointerUp:pe,onPointerLeave:X,onPointerCancel:X,children:[d.jsxs("span",{className:At.controlWrapper,children:[d.jsx("input",{ref:z,id:v,type:"checkbox",role:"switch",className:At.input,checked:s,disabled:a,onChange:I=>{b(),Q.current=!0;const K=D();if(K){const fe=T.current||ho(K,!I.target.checked);T.current=null,ue(K,fe,I.target.checked)}else V();l==null||l(I)}}),d.jsxs("span",{ref:j,className:At.track,"aria-hidden":"true",children:[f&&d.jsxs("span",{className:At.glyphs,children:[d.jsx("span",{className:At.glyphOn}),d.jsx("span",{className:At.glyphOff})]}),d.jsx("span",{ref:E,className:At.thumb})]})]}),c&&d.jsx("span",{className:At.label,children:c})]})}const ch=new Map([["bold",L.createElement(L.Fragment,null,L.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",L.createElement(L.Fragment,null,L.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),L.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",L.createElement(L.Fragment,null,L.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",L.createElement(L.Fragment,null,L.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",L.createElement(L.Fragment,null,L.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",L.createElement(L.Fragment,null,L.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),uh=new Map([["bold",L.createElement(L.Fragment,null,L.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",L.createElement(L.Fragment,null,L.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",L.createElement(L.Fragment,null,L.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",L.createElement(L.Fragment,null,L.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",L.createElement(L.Fragment,null,L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",L.createElement(L.Fragment,null,L.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),ph=new Map([["bold",L.createElement(L.Fragment,null,L.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",L.createElement(L.Fragment,null,L.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",L.createElement(L.Fragment,null,L.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",L.createElement(L.Fragment,null,L.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",L.createElement(L.Fragment,null,L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",L.createElement(L.Fragment,null,L.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),dh=L.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Hs=L.forwardRef((s,a)=>{const{alt:l,color:c,size:p,weight:f,mirrored:m,children:v,weights:b,...z}=s,{color:j="currentColor",size:E,weight:C="regular",mirrored:T=!1,...Q}=L.useContext(dh);return L.createElement("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:p??E,height:p??E,fill:c??j,viewBox:"0 0 256 256",transform:m||T?"scale(-1, 1)":void 0,...Q,...z},!!l&&L.createElement("title",null,l),v,b.get(f??C))});Hs.displayName="IconBase";const mp=L.forwardRef((s,a)=>L.createElement(Hs,{ref:a,...s,weights:ch}));mp.displayName="ArrowRightIcon";const fh=mp,gp=L.forwardRef((s,a)=>L.createElement(Hs,{ref:a,...s,weights:uh}));gp.displayName="MinusIcon";const hh=gp,vp=L.forwardRef((s,a)=>L.createElement(Hs,{ref:a,...s,weights:ph}));vp.displayName="PlusIcon";const mh=vp,gh="_icon_1vxzc_2",vh={icon:gh},xh={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function ep({glyph:s,weight:a="regular",size:l="1em",label:c,className:p="",...f}){if(!s)return null;const m=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},v=xh[l];return v?d.jsx("span",{className:`${vh.icon} ${p}`.trim(),style:{fontSize:v},children:d.jsx(s,{weight:a,size:"1em",...m,...f})}):d.jsx(s,{weight:a,size:l,className:p,...m,...f})}const yh="_stepper_1wvfb_28",wh="_button_1wvfb_38",bh="_glyph_1wvfb_79",kh="_readout_1wvfb_101",Lh="_digits_1wvfb_123",Sh="_disabled_1wvfb_134",gn={stepper:yh,button:wh,glyph:bh,readout:kh,digits:Lh,disabled:Sh},_h=400,zh=80;function Eh({value:s,onChange:a,min:l=-1/0,max:c=1/0,step:p=1,label:f,disabled:m=!1,sound:v=!0,className:b=""}){const z=Bs("tick",v),j=L.useRef(s);j.current=s;const E=L.useRef(null),C=L.useRef(null),T=K=>Math.max(l,Math.min(c,K)),Q=K=>{const fe=T(j.current+K);fe!==j.current&&(j.current=fe,a==null||a(fe),z())},D=()=>{E.current&&clearTimeout(E.current),C.current&&clearInterval(C.current),E.current=null,C.current=null};L.useEffect(()=>D,[]);const V=L.useRef(null),ne=L.useRef(null),ue=L.useRef(s);L.useLayoutEffect(()=>{const K=ue.current;ue.current=s;const fe=V.current,he=ne.current;if(K===s||m||!fe||!he||Bn())return;const le=bn(fe,"stepper"),Z=parseFloat(getComputedStyle(fe).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(Z>0||In(le)))return;const P=(s>K?1:-1)*Z*Nt(fe).height,U=Yl(le.travelEasing),H=Jl(U),we=U.map((me,de)=>({transform:`translateY(${P*(1-me)}px) scale(${1-.2*le.squash*H[de]}, ${1+.2*le.stretch*H[de]})`}));xr(he,we,le.travelDur,"linear")},[s,m]);const re=K=>{m||(Q(K),D(),E.current=setTimeout(()=>{C.current=setInterval(()=>Q(K),zh)},_h))},X=s<=l,pe=s>=c,I=K=>{m||(K.key==="ArrowUp"?(K.preventDefault(),Q(p)):K.key==="ArrowDown"?(K.preventDefault(),Q(-p)):K.key==="Home"&&Number.isFinite(l)?(K.preventDefault(),j.current!==l&&z(),j.current=l,a==null||a(l)):K.key==="End"&&Number.isFinite(c)&&(K.preventDefault(),j.current!==c&&z(),j.current=c,a==null||a(c)))};return d.jsxs("div",{className:`${gn.stepper} ${m?gn.disabled:""} ${b}`,children:[d.jsx("button",{type:"button",className:gn.button,"aria-label":f?`Decrease ${f}`:"Decrease",disabled:m||X,onPointerDown:()=>re(-p),onPointerUp:D,onPointerLeave:D,onPointerCancel:D,children:d.jsx(ep,{glyph:hh,weight:"bold",size:"sm",className:gn.glyph})}),d.jsx("span",{ref:V,className:gn.readout,role:"spinbutton",tabIndex:m?-1:0,"aria-valuenow":s,"aria-valuemin":Number.isFinite(l)?l:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":f,"aria-disabled":m||void 0,onKeyDown:I,children:d.jsx("span",{ref:ne,className:gn.digits,children:s})}),d.jsx("button",{type:"button",className:gn.button,"aria-label":f?`Increase ${f}`:"Increase",disabled:m||pe,onPointerDown:()=>re(p),onPointerUp:D,onPointerLeave:D,onPointerCancel:D,children:d.jsx(ep,{glyph:mh,weight:"bold",size:"sm",className:gn.glyph})})]})}const jh="_track_s3qo0_27",Ch="_indicator_s3qo0_38",Nh="_segment_s3qo0_59",Ph="_md_s3qo0_74",Mh="_sm_s3qo0_84",Rh="_lg_s3qo0_94",Th="_count_s3qo0_104",Fh="_segmentSelected_s3qo0_113",Ah="_disabled_s3qo0_127",vn={track:jh,indicator:Ch,segment:Nh,md:Ph,sm:Mh,lg:Rh,count:Th,segmentSelected:Fh,disabled:Ah};function $h({options:s=[],value:a,onChange:l,disabled:c=!1,label:p,size:f="md",sound:m=!0,className:v=""}){const b=Bs("select",m),z=P=>{P!==a&&b(),l==null||l(P)},j=L.useRef(null),E=L.useRef({}),C=L.useRef(null),[T,Q]=L.useState(null),D=L.useRef(null),V=L.useRef(null),ne=L.useRef(a);ne.current=a;const ue=P=>{const U=j.current,H=E.current[P];if(!U||!H)return null;const we=Nt(U),me=Nt(H);return{l:me.left-we.left-U.clientLeft,r:me.right-we.left-U.clientLeft}},re=L.useCallback(()=>{const P=ue(a);Q(P?{left:P.l,width:P.r-P.l}:null)},[a]);L.useLayoutEffect(()=>{re()},[re,s.length,f]);const X=()=>{if(c||Bn()||!j.current||!C.current)return null;const P=bn(j.current,"segmented-control");return In(P)?{...P,cap:parseFloat(getComputedStyle(C.current).height)}:null},pe=(P,U,H,we)=>{j.current.setAttribute("data-driven",""),xr(C.current,P,U,H,{hold:we,onDone:()=>{var me;return(me=j.current)==null?void 0:me.removeAttribute("data-driven")}})};L.useLayoutEffect(()=>{if(!T)return;const P={l:T.left,r:T.left+T.width},U=V.current||D.current;D.current=P,V.current=null;const H=X();!H||!U||U.l===P.l&&U.r===P.r||pe(kr(H,U,P,H.cap),H.travelDur,"linear",!1)},[T==null?void 0:T.left,T==null?void 0:T.width]);const I=()=>{if(!V.current)return;const P=X(),U=V.current;V.current=null,P&&D.current&&pe(kr(P,U,D.current,P.cap),P.travelDur,"linear",!1)},K=P=>{if(P===a||!D.current)return;const U=X(),H=ue(P);if(!U||U.lean<=0||!H)return;const we=C.current.getAnimations().length?ea(C.current,{left:Nt(j.current).left+j.current.clientLeft}):D.current;V.current=Xl(U,D.current,H);const me=a,de=()=>setTimeout(()=>{ne.current===me&&I()},0);window.addEventListener("pointerup",de,{once:!0}),pe([Hn({...we,h:U.cap},U.cap),Hn({...V.current,h:U.cap},U.cap)],U.leanDur,U.leanEasing,!0)};L.useEffect(()=>(window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)),[re]);const fe=P=>{var U;(U=E.current[P])==null||U.focus()},he=P=>{if(c||s.length===0)return;const U=(P+s.length)%s.length,H=s[U];H&&(z(H.value),fe(H.value))},le=(P,U)=>{if(!c)switch(P.key){case"ArrowRight":case"ArrowDown":P.preventDefault(),he(U+1);break;case"ArrowLeft":case"ArrowUp":P.preventDefault(),he(U-1);break;case"Home":P.preventDefault(),he(0);break;case"End":P.preventDefault(),he(s.length-1);break}},Z=s.findIndex(P=>P.value===a);return d.jsxs("div",{ref:j,className:`${vn.track} ${vn[f]||vn.md} ${c?vn.disabled:""} ${v}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[T&&d.jsx("span",{ref:C,className:vn.indicator,"aria-hidden":"true",style:{transform:`translateX(${T.left}px)`,width:`${T.width}px`}}),s.map((P,U)=>{const H=P.value===a,we=H||Z===-1&&U===0;return d.jsxs("button",{type:"button",ref:me=>{E.current[P.value]=me},role:"radio","aria-checked":H,tabIndex:c?-1:we?0:-1,disabled:c,className:`${vn.segment} ${H?vn.segmentSelected:""}`,onClick:()=>z(P.value),onPointerDown:()=>K(P.value),onPointerLeave:I,onKeyDown:me=>le(me,U),children:[P.label,P.count!==void 0&&d.jsx("span",{className:vn.count,children:P.count})]},P.value)})]})}const tp=16,Al=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],Dh="_mark_nniye_3",Oh="_sm_nniye_24",Ih="_md_nniye_1",Bh="_lg_nniye_26",Hh="_working_nniye_28",Uh="_paused_nniye_29",Vh="_base_nniye_33",Wh="_glint_nniye_34",Qh="_spin_nniye_36",Kh="_loop_nniye_37",yt={mark:Dh,sm:Oh,md:Ih,lg:Bh,working:Hh,paused:Uh,base:Vh,glint:Wh,spin:Qh,loop:Kh},Zh={sm:yt.sm,md:yt.md,lg:yt.lg},Gh=3.2;function qh(s,a){const l=s%2===0,p=-((l?1:-1)*(360*s)/a),f=p+360*(l?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${f.toFixed(2)} 8 8`}}function Yh({working:s=!0,size:a="sm",label:l,className:c="",...p}){const f=`wm${L.useId().replace(/[^a-zA-Z0-9]/g,"")}`,m=Al.length,v=l?{role:"img","aria-label":l}:{"aria-hidden":!0},b=[yt.mark,Zh[a]??yt.sm,s?yt.working:yt.paused,c].filter(Boolean).join(" ");return d.jsxs("svg",{viewBox:`0 0 ${tp} ${tp}`,className:b,focusable:"false",...v,...p,children:[s&&d.jsx("defs",{children:Al.map((z,j)=>{const{from:E,to:C}=qh(j,m);return d.jsxs("linearGradient",{id:`${f}-s${j}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[d.jsx("stop",{offset:"0",className:yt.base}),d.jsx("stop",{offset:"0.45",className:yt.base}),d.jsx("stop",{offset:"1",className:yt.glint}),d.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:E,to:C,dur:`${Gh}s`,repeatCount:"indefinite"})]},j)})}),Al.map((z,j)=>d.jsx("g",{className:yt.spin,style:{"--wm-i":j},children:d.jsx("path",{d:z,className:yt.loop,style:{"--wm-i":j},stroke:s?`url(#${f}-s${j})`:void 0})},j))]})}const Jh="_button_1cn8j_34",Xh="_label_1cn8j_74",em="_arrow_1cn8j_84",tm="_sm_1cn8j_57",nm="_primary_1cn8j_122",rm="_destructive_1cn8j_123",om="_secondary_1cn8j_157",sm="_tertiary_1cn8j_173",im="_loading_1cn8j_207",lm="_working_1cn8j_211",$n={button:Jh,label:Xh,arrow:em,sm:tm,primary:nm,destructive:rm,secondary:om,tertiary:sm,loading:im,working:lm},am=["primary","secondary","tertiary","destructive"],cm=["lg","sm"];function um(){return d.jsx(fh,{weight:"bold",className:$n.arrow,"aria-hidden":"true"})}function pm({variant:s="primary",size:a="lg",disabled:l=!1,loading:c=!1,arrow:p=!0,type:f="button",sound:m=!0,children:v,onClick:b,className:z="",...j}){const E=am.includes(s)?s:"primary",C=cm.includes(a)?a:"lg",T=l||c,Q=Bs("press",m);return d.jsxs("button",{type:f,className:`${$n.button} ${$n[E]} ${C==="sm"?$n.sm:""} ${c?$n.loading:""} ${z}`,disabled:T,"aria-busy":c||void 0,onClick:T?void 0:D=>{Q(),b==null||b(D)},...j,children:[d.jsx("span",{className:$n.label,children:v}),c?d.jsx(Yh,{className:$n.working}):p&&d.jsx(um,{})]})}const dm="_wrapper_1owvf_14",fm="_tooltip_1owvf_19",hm="_open_1owvf_62",mm="_singleline_1owvf_67",gm="_multiline_1owvf_71",uo={wrapper:dm,tooltip:fm,open:hm,singleline:mm,multiline:gm};function vm({content:s,multiline:a=!1,open:l,children:c}){const p=L.useId(),[f,m]=L.useState(!1),v=l??f,b=L.useRef(null),z=L.useRef(null);L.useLayoutEffect(()=>{const C=b.current,T=z.current;if(!v||!C||!T||Bn())return;const Q=bn(T,"tooltip");if(!In(Q))return;const D=parseFloat(getComputedStyle(T).getPropertyValue("--sc-space-component-gap-sm"))||0,V=Yl(Q.travelEasing),ne=Jl(V),ue=V.map((X,pe)=>({transform:`translate(-50%, ${-D*(1-X)}px) scale(${1-.2*Q.squash*ne[pe]}, ${1+.2*Q.stretch*ne[pe]})`,opacity:Math.min(1,Math.max(0,X))}));T.getAnimations().forEach(X=>X.cancel()),C.setAttribute("data-driven","");const re=T.animate(ue,{duration:Q.travelDur,easing:"linear"});re.onfinish=()=>C.removeAttribute("data-driven"),re.oncancel=()=>C.removeAttribute("data-driven")},[v]);const j=()=>m(!0),E=()=>m(!1);return d.jsxs("span",{ref:b,className:uo.wrapper,onMouseEnter:j,onMouseLeave:E,onFocus:j,onBlur:E,children:[d.jsx("span",{"aria-describedby":v?p:void 0,children:c}),d.jsx("span",{ref:z,role:"tooltip",id:p,className:`${uo.tooltip} ${v?uo.open:""} ${a?uo.multiline:uo.singleline}`,children:s})]})}const xm=Math.PI*2,ym=new Set(["uskel","uloader","usplash"]),wm=new Set(["ucard"]),bm={uskel:0,uloader:1.96,usplash:0},np=new Set(["progress","active","current"]);function km(s){return function(){s|=0,s=s+1831565813|0;let a=Math.imul(s^s>>>15,1|s);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function Lm(s){let a=2166136261;for(const l of String(s))a=Math.imul(a^l.charCodeAt(0),16777619);return a}const Sm=(s,a,l,c)=>s.fillRect(a-c,l-c,c*2,c*2),_m=(s,a,l,c)=>{s.beginPath(),s.arc(a,l,c,0,xm),s.fill()},xp=(s,a,l,c)=>{c*=1.25;const p=Math.max(.7,c*.38);s.fillRect(a-c,l-p/2,c*2,p),s.fillRect(a-p/2,l-c,p,c*2)},zm={plus:xp,square:Sm,round:_m};function xt(s,a,l){const c=a.rng,p=(l.s||5)*a.S,f=l.x2-l.x1,m=l.y2-l.y1,v=Math.hypot(f,m);if(!v)return;const b=f/v,z=m/v,j=-z,E=b,C=l.w,T=l.ext??C*.35,Q=l.r??.9,D=l.jit??.7;let V=0;for(let ne=-T;ne<=v+T;ne+=p,V++){const ue=l.grid?0:V%2*p/2;let re=1;if(l.taper){const X=(ne+T)/(v+2*T);re=Math.min(1,(l.fadeEnd?1-X:Math.min(X,1-X))/l.taper)}for(let X=-C/2+ue;X<=C/2+.01;X+=p){const pe=l.crisp?re:Math.min(1,(C/2-Math.abs(X))/(p*1.6)+.3)*re;if(c()>pe)continue;const I=l.x1+b*ne+j*X+(c()-.5)*D,K=l.y1+z*ne+E*X+(c()-.5)*D;s.globalAlpha=(l.a??.9)*(l.af?l.af(ne+(l.u0||0),X,I,K):1),a.dot(s,I,K,Q)}}s.globalAlpha=1}function An(s,a,l,c,p={}){let f=0;for(let m=0;m<l.length-1;m++)xt(s,a,{x1:l[m][0],y1:l[m][1],x2:l[m+1][0],y2:l[m+1][1],w:c,u0:f,...p}),f+=Math.hypot(l[m+1][0]-l[m][0],l[m+1][1]-l[m][1])}const Em=s=>Math.max(0,Math.min(1,Number.isFinite(+s)?+s:0)),jm={udiv(s,a,l,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),f=7,m=c.opts.fade||"both";xt(s,c,{x1:2,y1:l/2,x2:a-2,y2:l/2,w:(p-1)*f*c.S,s:f,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:m==="none"?0:m==="end"?.7:.22,fadeEnd:m==="end"})},ucardhead(s,a,l,c){xt(s,c,{x1:-20,y1:l*.8,x2:a+20,y2:l*.15,w:44,s:7,r:1.6,ext:0}),xt(s,c,{x1:a*.4,y1:-20,x2:a*.78,y2:l+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(s,a,l,c){const p=12*c.S;for(let f=p/2;f<l;f+=p)for(let m=p/2;m<a;m+=p){let v=.14;c.hover&&(v+=.86*Math.exp(-((m-c.mx)**2+(f-c.my)**2)/5e3)),s.globalAlpha=v,c.dot(s,m,f,1.6)}s.globalAlpha=1},ucta(s,a,l,c){An(s,c,[[-.05*a,.1*l],[.22*a,.5*l],[.02*a,1.1*l]],46,{s:7,r:1.6,ext:0}),An(s,c,[[1.05*a,-.1*l],[.78*a,.5*l],[.98*a,1.1*l]],46,{s:7,r:1.6,ext:0})},uempty(s,a,l,c){An(s,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,f])=>[p*a,f*l]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(s,a,l,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,a-40,10],["r",20,108,a-40,10],["r",20,128,a*.55,10],["r",20,158,a-40,46]],f=6*c.S,m=c.t*240%(a+500)-250;for(let v=f/2;v<l;v+=f)for(let b=f/2;b<a;b+=f){if(!p.some(E=>E[0]==="c"?(b-E[1])**2+(v-E[2])**2<E[3]**2:b>=E[1]&&b<=E[1]+E[3]&&v>=E[2]&&v<=E[2]+E[4]))continue;const j=Math.exp(-((b+v*.5-m)**2)/4050);s.globalAlpha=.16+.6*j,c.dot(s,b,v,1.3)}s.globalAlpha=1},uprog(s,a,l,c){const p=7*c.S,f=Math.max(1,Math.round(+c.opts.rows||1)),m=Em(c.opts.progress),v=l/2-(f-1)*p/2,b=c.teal("progress");for(let z=0;z<f;z++)for(let j=4;j<a;j+=p){const E=j/a<m;s.fillStyle=E?b:c.fg,s.globalAlpha=E?1:.2,c.dot(s,j,v+z*p,1.6)}s.globalAlpha=1,s.fillStyle=c.fg},uloader(s,a,l,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([b,z])=>[b*a,z*l]);let f=0;for(let b=0;b<p.length-1;b++)f+=Math.hypot(p[b+1][0]-p[b][0],p[b+1][1]-p[b][1]);const m=c.t%2.8/2.8,v=Math.min(1,m/.7)*(f+30);An(s,c,p,26,{s:6,r:1.3,ext:0,a:1,af:b=>b<v?v-b<18&&m<.7?1:.85:.08})},uline(s,a,l,c){s.fillStyle=c.teal("active"),xt(s,c,{x1:3,y1:l/2,x2:a-3,y2:l/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),s.fillStyle=c.fg},umedia(s,a,l,c){const p=10*c.S;s.globalAlpha=.16;for(let f=p/2;f<l;f+=p)for(let m=p/2;m<a;m+=p)c.dot(s,m,f,1.3);s.globalAlpha=1,xt(s,c,{x1:-20,y1:l*.9,x2:a+20,y2:l*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(s,a,l,c){An(s,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,f])=>[p*a,f*l]),72,{s:7,r:1.6,ext:0})},ufooter(s,a,l,c){const f=7*c.S,m=c.rng;s.fillStyle=c.C.page,s.fillRect(0,0,a,90),s.fillStyle=c.C.inverse,s.fillRect(0,90,a,l-90);for(let v=f/2;v<90;v+=f)for(let b=f/2;b<a;b+=f)m()<Math.pow(v/90,1.6)&&c.dot(s,b,v,1.6)},uquote(s,a,l,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},f=24,m=130;xt(s,c,{...p,x1:f,y1:f,x2:f+m,y2:f}),xt(s,c,{...p,x1:f,y1:f,x2:f,y2:f+m}),xt(s,c,{...p,x1:a-f,y1:l-f,x2:a-f-m,y2:l-f}),xt(s,c,{...p,x1:a-f,y1:l-f,x2:a-f,y2:l-f-m})},utime(s,a,l,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),f=Math.round(+c.opts.current||0),m=l/p,v=a/2,b=7*c.S,z=Array.from({length:p},(j,E)=>m*(E+.5));for(let j=z[0];j<=z[p-1];j+=b)z.some(E=>Math.abs(j-E)<15)||(s.globalAlpha=j<z[Math.min(Math.max(f,0),p-1)]?.75:.18,c.dot(s,v,j,1.4));z.forEach((j,E)=>{s.fillStyle=E===f?c.teal("current"):c.fg,s.globalAlpha=E<=f?1:.25;for(let C=-1;C<=1;C++)for(let T=-1;T<=1;T++)c.dot(s,v+C*6,j+T*6,1.5)}),s.globalAlpha=1,s.fillStyle=c.fg},ubullet(s,a,l,c){const p=a/3;c.opts.accent&&(s.fillStyle=c.teal("current"));for(let f=0;f<3;f++)for(let m=0;m<3;m++)c.dot(s,p/2+f*p,p/2+m*p,p*.26);s.fillStyle=c.fg},usep(s,a,l,c){s.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(s,a*(.2+p*.3),l*(.8-p*.3),a*.1);s.globalAlpha=1},uthumb(s,a,l,c){const p=c.rng,f=2+Math.floor(p()*2),m=[];for(let v=0;v<=f;v++)m.push([(v%2?.72+.22*p():.06+.22*p())*a,(.12+v*(.76/f)+(p()-.5)*.08)*l]);p()>.5&&m.forEach(v=>{const b=v[0];v[0]=v[1],v[1]=b}),An(s,c,m,a*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(s,a,l,c){xt(s,c,{x1:a*.5,y1:-20,x2:a+30,y2:l*.42,w:42,s:7,r:1.6,ext:0}),xt(s,c,{x1:a*.76,y1:-20,x2:a+30,y2:l*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(s,a,l,c){const p=c.t;An(s,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([f,m])=>[f*a,m*l]),50,{s:7,r:1.6,af:f=>.28+.72*Math.pow(.5+.5*Math.sin(f*.016-p*2),2)})},type(s,a,l,c){if(!a||!l||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(a),p.height=Math.ceil(l);const f=p.getContext("2d"),m=c.opts.text||"Crafthouse";f.textAlign="center",f.textBaseline="middle";let v=l*(+c.opts.textScale||.62);f.font=`500 ${v}px ${c.font}`;const b=f.measureText(m).width;b>a*.88&&(v*=a*.88/b,f.font=`500 ${v}px ${c.font}`),f.fillText(m,a/2,l/2);const z=Math.min(9,Math.max(4.2,v/34))*c.S,j=z*.24,E=f.getImageData(0,0,p.width,p.height).data,C=-.14,T=Math.cos(C),Q=Math.sin(C),D=Math.hypot(a,l)/2+10;let V=0;for(let ne=-D;ne<D;ne+=z,V++)for(let ue=-D+V%2*z/2;ue<D;ue+=z){const re=a/2+ue*T-ne*Q,X=l/2+ue*Q+ne*T;re<0||X<0||re>=p.width||X>=p.height||E[((X|0)*p.width+(re|0))*4+3]>100&&c.dot(s,re,X,j)}}};function Cm(s,a){const{art:l,w:c,h:p,dpr:f,colors:m,surface:v="inverse",shape:b="plus",density:z=1,seed:j=0,t:E=0,opts:C={},font:T,pointer:Q}=a,D=jm[l];if(!D||!c||!p)return;const{accent:V,...ne}=m,ue=v==="inverse"?ne.onInverse:ne.text,re={inverse:ne.inverse,raised:ne.raised,page:ne.page,sunk:ne.sunk};s.setTransform(f,0,0,f,0,0),s.globalAlpha=1,s.clearRect(0,0,c,p),v!=="none"&&(s.fillStyle=re[v]??ne.inverse,s.fillRect(0,0,c,p)),s.fillStyle=ue;const X=Math.min(1.6,Math.max(.6,+z||1)),pe=I=>{if(!np.has(I))throw new Error(`PlusField: teal is reserved for ${[...np].join(", ")}; "${I}" is not one of them.`);return V};D(s,c,p,{C:ne,fg:ue,S:1/X,rng:km(j),t:E,opts:C,font:T,teal:pe,hover:!!(Q!=null&&Q.hover),mx:(Q==null?void 0:Q.x)??0,my:(Q==null?void 0:Q.y)??0,dot:zm[b]??xp}),s.globalAlpha=1}const Nm="_root_1jtbm_5",Pm="_backdrop_1jtbm_17",Mm="_canvas_1jtbm_25",Rm="_srOnly_1jtbm_35",po={root:Nm,backdrop:Pm,canvas:Mm,srOnly:Rm},Tm={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},yr=new Set,On=new Set;let wr=0,Dn=null,wt=null,wn=null;const Fm=()=>typeof window<"u",Am=()=>!!(wn!=null&&wn.matches);function yp(s){const a=s/1e3;On.forEach(l=>l.paint(a)),wr=On.size?requestAnimationFrame(yp):0}function $m(){!wr&&On.size&&(wr=requestAnimationFrame(yp))}function Vl(){var s,a,l;Fm()&&(!Dn&&typeof MutationObserver<"u"&&(Dn=new MutationObserver(()=>yr.forEach(c=>c.refresh())),Dn.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!wt&&typeof IntersectionObserver<"u"&&(wt=new IntersectionObserver(c=>c.forEach(p=>{const f=p.target.__plusField;f&&(f.visible=p.isIntersecting,f.syncMotion())}))),!wn&&window.matchMedia&&(wn=window.matchMedia("(prefers-reduced-motion: reduce)"),(s=wn.addEventListener)==null||s.call(wn,"change",()=>yr.forEach(c=>c.syncMotion()))),document.fonts&&!Vl.fonts&&(Vl.fonts=!0,(l=(a=document.fonts).addEventListener)==null||l.call(a,"loadingdone",()=>yr.forEach(c=>c.refresh()))))}function Dm(){yr.size||(Dn==null||Dn.disconnect(),Dn=null,wt==null||wt.disconnect(),wt=null,wr&&cancelAnimationFrame(wr),wr=0)}function Om(s,a){const l={root:s,canvas:a,ctx:a.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(s),p=c.color,f={};for(const[m,v]of Object.entries(Tm))f[m]=c.getPropertyValue(v).trim()||p;l.colors=f,l.font=c.fontFamily},resize(c,p){l.w=c,l.h=p,l.dpr=Math.min(2,window.devicePixelRatio||1);const f=Math.round(c*l.dpr),m=Math.round(p*l.dpr);a.width!==f&&(a.width=f),a.height!==m&&(a.height=m),l.refresh()},animated(){const c=l.props;return!!c&&ym.has(c.art)&&c.animate!==!1&&!Am()},syncMotion(){var c;if(l.animated()&&l.visible&&l.w&&l.h){On.add(l),$m();return}On.delete(l),l.paint(l.animated()?l.t:bm[(c=l.props)==null?void 0:c.art]??0)},refresh(){!l.props||!l.w||!l.h||(l.readTokens(),l.syncMotion(),On.has(l)&&l.paint(l.t))},paint(c){const p=l.props;!p||!l.w||!l.h||(l.colors||l.readTokens(),l.t=c,Cm(l.ctx,{art:p.art,w:l.w,h:l.h,dpr:l.dpr,colors:l.colors,surface:p.surface,shape:p.shape,density:p.density,seed:Lm(p.seed??p.art),t:c,opts:p.opts,font:l.font,pointer:l.pointer}))}};return l}const Im=new Set(["inverse","raised","page","sunk","none"]),Bm=new Set(["plus","square","round"]);function Hm({art:s,surface:a="inverse",shape:l="plus",density:c=1,animate:p=!0,seed:f,rows:m,fade:v,text:b,progress:z,accent:j=!1,steps:E,current:C,textScale:T,backdrop:Q=!1,label:D,as:V="div",className:ne="",...ue}){const re=L.useRef(null),X=L.useRef(null),pe=L.useRef(null),I={art:s,surface:Im.has(a)?a:"inverse",shape:Bm.has(l)?l:"plus",density:c,animate:p,seed:f,opts:{rows:m,fade:v,text:b,progress:z,accent:j,steps:E,current:C,textScale:T}};L.useEffect(()=>{const he=re.current,le=X.current;if(!he||!le||!le.getContext)return;Vl();const Z=Om(he,le);Z.props=I,pe.current=Z,he.__plusField=Z,yr.add(Z);const P=typeof ResizeObserver<"u"?new ResizeObserver(([me])=>{const{width:de,height:W}=me.contentRect;(de!==Z.w||W!==Z.h)&&Z.resize(de,W)}):null;P==null||P.observe(he),wt==null||wt.observe(he);const U=wm.has(s)?he.parentElement||he:null,H=me=>{const de=he.getBoundingClientRect();Z.pointer={hover:!0,x:me.clientX-de.left,y:me.clientY-de.top},Z.paint(Z.t)},we=()=>{Z.pointer={hover:!1,x:0,y:0},Z.paint(Z.t)};return U==null||U.addEventListener("pointermove",H),U==null||U.addEventListener("pointerleave",we),()=>{P==null||P.disconnect(),wt==null||wt.unobserve(he),U==null||U.removeEventListener("pointermove",H),U==null||U.removeEventListener("pointerleave",we),On.delete(Z),yr.delete(Z),delete he.__plusField,pe.current=null,Dm()}},[s]),L.useEffect(()=>{const he=pe.current;he&&(he.props=I,he.refresh())});const K=[po.root,Q?po.backdrop:"",ne].filter(Boolean).join(" "),fe=Math.round(Math.max(0,Math.min(1,Number(z)||0))*100);return d.jsxs(V,{ref:re,className:K,...ue,children:[d.jsx("canvas",{ref:X,className:po.canvas,"aria-hidden":"true"}),D&&(s==="uloader"||s==="uskel")&&d.jsx("span",{role:"status",className:po.srOnly,children:D}),s==="uprog"&&d.jsx("span",{role:"progressbar",className:po.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":fe,"aria-label":D})]})}const Um="_underline_w8mvb_3",Vm={underline:Um},$l=new WeakMap,rp=s=>{var a;return s.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((a=s.parentElement)==null?void 0:a.parentElement)||null};function wp({active:s=!0,shape:a,density:l,motion:c="plus-underline",className:p="",...f}){const m=L.useRef(null);return L.useLayoutEffect(()=>{const v=m.current,b=v&&s?rp(v):null;if(!b)return;const z=$l.get(b);if($l.set(b,v),!z||z===v||!z.isConnected||Bn())return;const j=bn(v,c);if(!In(j))return;const E=Nt(v),C=ea(z,E);z.getAnimations().forEach(T=>T.cancel()),xr(v,kr(j,C,{l:0,r:E.width},E.height),j.travelDur,"linear")},[s,c]),L.useEffect(()=>{var v;s||(v=m.current)==null||v.getAnimations().forEach(b=>b.cancel())},[s]),L.useEffect(()=>{const v=m.current,b=v&&s?rp(v):null;if(!b)return;const z=j=>{var re,X;const E=(X=(re=j.target).closest)==null?void 0:X.call(re,'a, button, [role="tab"], [role="radio"]');if(!E||!b.contains(E)||E.contains(v)||Bn())return;const C=bn(v,c);if(!In(C)||C.lean<=0)return;const T=Nt(v),Q=Nt(E),D={l:0,r:T.width},V=Xl(C,D,{l:Q.left-T.left,r:Q.right-T.left});xr(v,[Hn({...D,h:T.height},T.height),Hn({...V,h:T.height},T.height)],C.leanDur,C.leanEasing,{hold:!0});let ne=!1;const ue=()=>setTimeout(()=>{ne||(ne=!0,!($l.get(b)!==v||!v.isConnected)&&xr(v,kr(bn(v,c),V,D,T.height),C.travelDur,"linear"))},0);window.addEventListener("pointerup",ue,{once:!0}),E.addEventListener("pointerleave",ue,{once:!0})};return b.addEventListener("pointerdown",z),()=>b.removeEventListener("pointerdown",z)},[s,c]),d.jsx("span",{ref:m,className:`${Vm.underline} ${p}`,"aria-hidden":"true",...f,children:s&&d.jsx(Hm,{as:"span",art:"uline",surface:"none",shape:a,density:l})})}const Wm="_nav_lg753_18",Qm="_row_lg753_26",Km="_brand_lg753_35",Zm="_links_lg753_44",Gm="_linkItem_lg753_51",qm="_link_lg753_44",Ym="_toggle_lg753_79",Jm="_trailing_lg753_84",Xm="_desktop_lg753_93",eg="_compact_lg753_100",tg="_menu_lg753_118",ng="_menuOpen_lg753_128",Je={nav:Wm,row:Qm,brand:Km,links:Zm,linkItem:Gm,link:qm,toggle:Ym,trailing:Jm,desktop:Xm,compact:eg,menu:tg,menuOpen:ng};function rg({brand:s,links:a=[],trailing:l,compact:c=!1,underline:p=!1,className:f=""}){const[m,v]=L.useState(!1);return d.jsxs("nav",{className:`${Je.nav} ${c?Je.compact:Je.desktop} ${f}`,"aria-label":"Primary",children:[d.jsxs("div",{className:Je.row,children:[d.jsx("div",{className:Je.brand,children:s}),c?d.jsx("button",{type:"button",className:Je.toggle,"aria-expanded":m,"aria-controls":"navbar-menu",onClick:()=>v(b=>!b),children:m?"Close":"Menu"}):d.jsxs(d.Fragment,{children:[d.jsx("ul",{className:Je.links,children:a.map(b=>d.jsx("li",{className:Je.linkItem,children:d.jsxs("a",{className:Je.link,href:b.href,"aria-current":b.current?"page":void 0,children:[b.label,p&&d.jsx(wp,{active:!!b.current,motion:"nav-bar"})]})},b.href))}),l&&d.jsx("div",{className:Je.trailing,children:l})]})]}),c&&d.jsxs("div",{id:"navbar-menu",className:`${Je.menu} ${m?Je.menuOpen:""}`,children:[d.jsx("ul",{className:Je.links,children:a.map(b=>d.jsx("li",{className:Je.linkItem,children:d.jsx("a",{className:Je.link,href:b.href,"aria-current":b.current?"page":void 0,children:b.label})},b.href))}),l&&d.jsx("div",{className:Je.trailing,children:l})]})]})}const og="_slider_18xic_30",sg="_track_18xic_48",ig="_fill_18xic_59",lg="_thumb_18xic_77",ag="_dragging_18xic_128",cg="_moving_18xic_138",gr={slider:og,track:sg,fill:ig,thumb:lg,dragging:ag,moving:cg};function ug({value:s=.5,onChange:a,min:l=0,max:c=1,step:p=.01,bigStep:f=.05,label:m,disabled:v=!1,className:b=""}){const z=L.useRef(null),j=L.useRef(null),[E,C]=L.useState(!1),[T,Q]=L.useState(!1),D=L.useRef(null),V=L.useCallback(Z=>Math.max(l,Math.min(c,Z)),[l,c]),ne=(V(s)-l)/(c-l||1),ue=ne*100,re=()=>parseFloat(getComputedStyle(z.current).getPropertyValue("--sc-size-slider-thumb"))||0,X=L.useCallback(Z=>{const P=z.current;if(!P)return s;const U=Nt(P),H=re(),we=U.width-H,me=Z/(P.currentCSSZoom||1),de=we<=0?0:(me-U.left-H/2)/we;return V(l+de*(c-l))},[V,l,c,s]),pe=()=>{const Z=z.current,P=j.current;Z&&P&&(D.current=ea(P,Nt(Z)))},I=()=>{var Z,P;(Z=j.current)==null||Z.getAnimations().forEach(U=>U.cancel()),(P=z.current)==null||P.removeAttribute("data-driven")};L.useLayoutEffect(()=>{const Z=D.current;D.current=null;const P=z.current,U=j.current;if(!Z||!P||!U||Bn())return;const H=bn(U,"slider");if(!In(H))return;const we=re(),me=(Nt(P).width-we)*ne;if(Math.abs(Z.l-me)<.5)return;P.setAttribute("data-driven","");const de=kr(H,{l:Z.l-me,r:Z.r-me},{l:0,r:we},we);xr(U,de,H.travelDur,"linear",{onDone:()=>P.removeAttribute("data-driven")})},[ne]),L.useEffect(()=>I,[]);const K=Z=>{if(v)return;Z.currentTarget.setPointerCapture(Z.pointerId),C(!0);const P=X(Z.clientX);P!==V(s)&&pe(),a==null||a(P)},fe=Z=>{v||!E||(T||(I(),Q(!0)),a==null||a(X(Z.clientX)))},he=()=>{C(!1),Q(!1)},le=Z=>{if(v)return;let P;switch(Z.key){case"ArrowRight":case"ArrowUp":P=s+(Z.shiftKey?f:p);break;case"ArrowLeft":case"ArrowDown":P=s-(Z.shiftKey?f:p);break;case"Home":P=l;break;case"End":P=c;break;default:return}Z.preventDefault(),V(P)!==V(s)&&pe(),a==null||a(V(P))};return d.jsx("div",{className:`${gr.slider} ${b}`,role:"slider",tabIndex:v?-1:0,"aria-valuemin":Math.round(l*100),"aria-valuemax":Math.round(c*100),"aria-valuenow":Math.round(ue),"aria-label":m,"aria-disabled":v||void 0,onPointerDown:K,onPointerMove:fe,onPointerUp:he,onPointerCancel:he,onKeyDown:le,children:d.jsxs("span",{ref:z,className:`${gr.track} ${E?gr.dragging:""} ${T?gr.moving:""}`,style:{"--value":ne},"aria-hidden":"true",children:[d.jsx("span",{className:gr.fill}),d.jsx("span",{ref:j,className:gr.thumb})]})})}const pg=`/* tokens:
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
`,dg=`/* tokens:
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
`,fg=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,hg=`/* tokens:
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
`,mg=`/* tokens:
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
`,gg=`/* tokens:
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
`,vg=`/* tokens:
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
`,op=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,xg=`/* tokens:
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
`,yg="_app_px5b6_6",wg="_bar_px5b6_18",bg="_brand_px5b6_27",kg="_meta_px5b6_34",Lg="_readout_px5b6_35",Sg="_values_px5b6_36",_g="_spacer_px5b6_42",zg="_stages_px5b6_46",Eg="_stageWrap_px5b6_54",jg="_activeStage_px5b6_61",Cg="_stageSelect_px5b6_65",Ng="_stageLabel_px5b6_75",Pg="_stage_px5b6_46",Mg="_panel_px5b6_94",Rg="_group_px5b6_103",Tg="_prop_px5b6_121",Fg="_editor_px5b6_122",Ag="_token_px5b6_132",$g="_changed_px5b6_140",Dg="_tokenHead_px5b6_144",Og="_tokenName_px5b6_150",Ig="_num_px5b6_162",Bg="_mini_px5b6_166",Hg="_curve_px5b6_173",Ug="_sounds_px5b6_187",Vg="_sound_px5b6_187",Wg="_shippedSound_px5b6_210",Qg="_reset_px5b6_214",Kg="_notes_px5b6_267",Zg="_tabs_px5b6_279",Gg="_tab_px5b6_279",qg="_pin_px5b6_308",Yg="_pick_px5b6_313",Jg="_propBlock_px5b6_320",Xg="_easing_px5b6_321",ev="_springRows_px5b6_322",tv="_propLabel_px5b6_328",nv="_tokenActions_px5b6_332",rv="_motionTiles_px5b6_347",ov="_motionTile_px5b6_347",sv="_layers_px5b6_405",iv="_layer_px5b6_405",lv="_layerHead_px5b6_418",av="_layerGrid_px5b6_423",cv="_scope_px5b6_428",uv="_steps_px5b6_437",pv="_step_px5b6_437",dv="_stepRole_px5b6_471",A={app:yg,bar:wg,brand:bg,meta:kg,readout:Lg,values:Sg,spacer:_g,stages:zg,stageWrap:Eg,activeStage:jg,stageSelect:Cg,stageLabel:Ng,stage:Pg,panel:Mg,group:Rg,prop:Tg,editor:Fg,token:Ag,changed:$g,tokenHead:Dg,tokenName:Og,num:Ig,mini:Bg,curve:Hg,sounds:Ug,sound:Vg,shippedSound:Wg,reset:Qg,notes:Kg,tabs:Zg,tab:Gg,pin:qg,pick:Yg,propBlock:Jg,easing:Xg,springRows:ev,propLabel:tv,tokenActions:nv,motionTiles:rv,motionTile:ov,layers:sv,layer:iv,layerHead:lv,layerGrid:av,scope:cv,steps:uv,step:pv,stepRole:dv},Qt=["day","week","month"],fo=["work","studio","journal"],jt=(s,{press:a=!0}={})=>{const l=`--sc-motion-${s}`;return{jsTokens:[`${l}-stretch`,`${l}-squash`,...a?[`${l}-press-lean`,`${l}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${l}-stretch`]:"0.45",[`${l}-squash`]:"0",...a?{[`${l}-press-lean`]:"0.83",[`${l}-press-lean-duration`]:"150ms"}:{}},springs:{[`${l}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},Wl={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},sp=s=>({light:s(Wl.light),dark:s(Wl.dark)}),ip={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}};let Dl=!1;function fv({p:s,ctx:a}){const l=L.useRef(null);return L.useEffect(()=>{var z;const c=[...((z=l.current)==null?void 0:z.children)||[]],p=a.slow||1,f=s.reduced,m=f==="opacity only"?{opacity:s.opacityFrom,transform:"none",filter:"none"}:{opacity:s.opacityFrom,transform:`translateY(${s.distance}px) scale(${s.scaleFrom}) rotate(${s.rotateFrom}deg)`,filter:`blur(${s.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},b=c.map((j,E)=>j.animate([m,v],{duration:f==="none"?0:s.duration*p,delay:f==="none"?0:(s.delay+E*s.stagger)*p,easing:s.easing,fill:"both"}));return()=>b.forEach(j=>j.cancel())},[s,a.replay,a.slow]),d.jsx("div",{className:A.motionTiles,ref:l,children:Array.from({length:s.count},(c,p)=>d.jsx("span",{className:A.motionTile},p))})}const Ol=s=>s.reduced==="none"?0:s.delay+s.stagger*(s.count-1)+s.duration,br={Switch:{css:[pg],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(s,a)=>a("checked",!s.checked),render:(s,a,l)=>d.jsx(ah,{checked:s.checked,disabled:s.disabled,glyphs:s.glyphs,label:s.label,sound:!1,onChange:c=>{a("checked",c.target.checked),l()}})},Stepper:{css:[dg,fg],jsTokens:[...jt("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...jt("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:jt("stepper",{press:!1}).seed.springs,scoped:sp(s=>({"--sc-shadow-stepper-track":s.recess,"--sc-color-stepper-key":s.keyFill,"--sc-color-stepper-key-shade":s.keyShade,"--sc-shadow-stepper-key":s.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(s,a)=>a("value",s.value+s.step>s.max?s.min:s.value+s.step),render:(s,a,l)=>d.jsx(Eh,{value:s.value,min:s.min,max:s.max,step:s.step,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{a("value",c),l()}})},SegmentedControl:{css:[hg],...jt("segmented-control"),seed:{...jt("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Qt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(s,a)=>a("value",Qt[(Qt.indexOf(s.value)+1)%Qt.length]),render:(s,a,l)=>d.jsx($h,{label:"Range",value:s.value,size:s.size,disabled:s.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==s.value&&l(),a("value",c)}})},Tooltip:{css:[gg],...jt("tooltip",{press:!1}),shippedSound:null,trigger:"ships silent",props:[{name:"open",type:"boolean",default:!0},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(s,a)=>a("open",!s.open),render:s=>d.jsx("span",{style:{display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:d.jsx(vm,{content:s.content,multiline:s.multiline,open:s.open,children:d.jsx("span",{style:{font:"inherit"},children:"Hover or press Play"})})})},NavBar:{css:[vg,op],...jt("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:fo,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(s,a)=>a("current",fo[(fo.indexOf(s.current)+1)%fo.length]),render:(s,a)=>d.jsx("div",{onClickCapture:l=>{const c=l.target.closest("a");c&&(l.preventDefault(),a("current",c.textContent.trim().toLowerCase()))},children:d.jsx(rg,{brand:d.jsx("span",{children:"Shokunin"}),underline:s.underline,links:fo.map(l=>({href:`#${l}`,label:l[0].toUpperCase()+l.slice(1),current:l===s.current}))})})},PlusUnderline:{css:[op],...jt("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Qt,default:"day"}],play:(s,a)=>a("active",Qt[(Qt.indexOf(s.active)+1)%Qt.length]),render:(s,a)=>d.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Qt.map(l=>d.jsxs("button",{type:"button",role:"tab","aria-selected":l===s.active,onClick:()=>a("active",l),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[l[0].toUpperCase()+l.slice(1),d.jsx(wp,{active:l===s.active})]},l))})},Slider:{css:[xg],jsTokens:jt("slider",{press:!1}).jsTokens,seed:{overrides:{...jt("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:jt("slider",{press:!1}).seed.springs,scoped:sp(s=>{const a=s===Wl.light?ip.light:ip.dark;return{"--sc-shadow-slider-track":s.recess,"--sc-color-slider-thumb-rim-top":a.rimTop,"--sc-color-slider-thumb-rim-bottom":a.rimBottom,"--sc-color-slider-thumb-face-top":a.faceTop,"--sc-color-slider-thumb-face-bottom":a.faceBottom,"--sc-shadow-slider-thumb":s.key,"--sc-shadow-slider-thumb-pressed":s.keyPressed}})},shippedSound:null,trigger:"a keyboard step that changes the value (ships silent)",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(s,a)=>a("value",s.value>=.75?.25:.75),render:(s,a,l)=>d.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Dl=!0},onKeyUpCapture:()=>{Dl=!1},children:d.jsx(ug,{value:s.value,disabled:s.disabled,label:s.label,onChange:c=>{const p=Math.round(c*100)/100;Dl&&p!==s.value&&l(),a("value",p)}})})},Button:{css:[mg],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(s,a,l)=>d.jsx(pm,{variant:s.variant,size:s.size,disabled:s.disabled,loading:s.loading,arrow:s.arrow,sound:!1,onClick:()=>l(),children:s.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(s,a,l,c)=>d.jsx(fv,{p:s,ctx:c})}},bp=s=>{var a;return((a=s==null?void 0:s.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:a[1].split(",").map(Number))||null};function hv(s){var c;const a=bp(s);if(a){const p=[];for(let f=0;f<=40;f+=1){const m=f/40,v=3*(1-m)**2*m*a[0]+3*(1-m)*m**2*a[2]+m**3,b=3*(1-m)**2*m*a[1]+3*(1-m)*m**2*a[3]+m**3;p.push([v,b])}return p}const l=(c=s==null?void 0:s.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return l?l.map((p,f)=>[f/(l.length-1),p]):[[0,0],[1,1]]}function mv(s){const a=hv(s),l=a.map(m=>m[1]),c=Math.min(0,...l),f=Math.max(1,...l)-c||1;return a.map(([m,v],b)=>`${b?"L":"M"}${m.toFixed(3)} ${(1-(v-c)/f).toFixed(3)}`).join(" ")}const Ct=(s,a=2)=>+(+s).toFixed(a),Il=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function kp(s){Il.fillStyle="#000",Il.fillStyle=s;const a=Il.fillStyle;if(a.startsWith("#"))return{hex:a,a:1};const l=a.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return l?{hex:"#"+[l[1],l[2],l[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:l[4]!==void 0?+l[4]:1}:{hex:"#000000",a:1}}function Os(s,a){if(a>=1)return s.toUpperCase();const l=parseInt(s.slice(1),16);return`rgb(${l>>16&255} ${l>>8&255} ${l&255} / ${+a.toFixed(3)})`}const gv=s=>String(s).endsWith("ms")?parseFloat(s):parseFloat(s)*1e3;function Lp({label:s,value:a,spring:l,presets:c,asRef:p,onChange:f}){const[m,v]=L.useState(l?"spring":"bezier"),b=bp(a)||[.25,.1,.25,1],z=l||{stiffness:260,damping:22,mass:1},j=C=>{const T=Ds(C);f(T.easing,C,T.settleMs)},E=l?Ds(l):null;return d.jsxs("div",{className:A.easing,children:[d.jsxs("div",{className:A.editor,children:[d.jsx("svg",{className:A.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:d.jsx("path",{d:mv(a)})}),d.jsxs("select",{"aria-label":`${s} mode`,value:m,onChange:C=>{v(C.target.value),C.target.value==="spring"?j(z):f(`cubic-bezier(${b.join(", ")})`,null,null)},children:[d.jsx("option",{value:"bezier",children:"bezier"}),d.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&d.jsxs("select",{"aria-label":`${s} preset`,value:"",onChange:C=>{const T=c.find(Q=>Q.name===C.target.value);T&&(v("bezier"),f(p?`var(${T.name})`:T.value,null,null))},children:[d.jsx("option",{value:"",children:"token…"}),c.map(C=>d.jsx("option",{value:C.name,children:C.name.replace("--sc-p-motion-easing-","")},C.name))]})]}),m==="bezier"?d.jsx("div",{className:A.editor,children:b.map((C,T)=>d.jsx("input",{type:"number","aria-label":`${s} bezier point ${T+1}`,className:A.num,step:"0.01",value:C,onChange:Q=>{const D=[...b];D[T]=+Q.target.value,f(`cubic-bezier(${D.join(", ")})`,null,null)}},T))}):d.jsxs("div",{className:A.springRows,children:[(()=>{const C=2*Math.PI*Math.sqrt(z.mass/z.stiffness),T=1-z.damping*C/(4*Math.PI*z.mass),Q=(D,V)=>j({...z,stiffness:+((2*Math.PI/D)**2*z.mass).toFixed(1),damping:+(4*Math.PI*(1-V)*z.mass/D).toFixed(2)});return d.jsxs(d.Fragment,{children:[d.jsxs("label",{className:A.mini,children:["duration",d.jsx("input",{type:"range","aria-label":`${s} spring duration`,min:50,max:2e3,step:10,value:Math.round(C*1e3),onChange:D=>Q(+D.target.value/1e3,T)}),d.jsxs("span",{className:A.readout,children:[Math.round(C*1e3),"ms"]})]}),d.jsxs("label",{className:A.mini,children:["bounce",d.jsx("input",{type:"range","aria-label":`${s} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+T.toFixed(2)),onChange:D=>Q(C,+D.target.value)}),d.jsx("span",{className:A.readout,children:T.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([C,T,Q,D])=>d.jsxs("label",{className:A.mini,children:[C,d.jsx("input",{type:"range",min:T,max:Q,step:D,value:z[C],onChange:V=>j({...z,[C]:+V.target.value})}),d.jsx("span",{className:A.readout,children:z[C]})]},C)),E&&d.jsxs("span",{className:A.readout,children:["settles ",E.settleMs,"ms · overshoot ",Math.round(E.overshoot*100),"%"]})]})]})}function vv(s){const a=[];let l=0,c="";for(const p of s||"")p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(a.push(c.trim()),c=""):c+=p;return c.trim()&&a.push(c.trim()),a.filter(p=>p&&p!=="none").map(p=>{var C;const f=/\binset\b/.test(p),m=((C=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:C[0])||"rgb(0 0 0 / 0.2)",v=p.replace(m,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(T=>parseFloat(T)||0),[b=0,z=0,j=0,E=0]=v;return{inset:f,x:b,y:z,blur:j,spread:E,color:m}})}const xv=s=>s.map(a=>`${a.inset?"inset ":""}${Ct(a.x)}px ${Ct(a.y)}px ${Ct(a.blur)}px ${Ct(a.spread)}px ${a.color}`).join(", ");function yv({name:s,value:a,onSet:l}){const c=vv(a),p=(f,m)=>l(xv(c.map((v,b)=>b===f?{...v,...m}:v)));return d.jsx("div",{className:A.layers,children:c.map((f,m)=>{const v=kp(f.color),b=f.inset?"inner edge":(f.x<0||f.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return d.jsxs("div",{className:A.layer,children:[d.jsxs("span",{className:A.layerHead,children:["layer ",m+1," · ",b]}),d.jsx("div",{className:A.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([z,j,E,C])=>d.jsxs("label",{className:A.mini,children:[z,d.jsx("input",{type:"number",className:A.num,"aria-label":`${s} layer ${m+1} ${z}`,min:j,max:E,step:C,value:Ct(f[z]),onChange:T=>p(m,{[z]:+T.target.value})})]},z))}),d.jsxs("div",{className:A.editor,children:[d.jsx("input",{type:"color","aria-label":`${s} layer ${m+1} colour`,value:v.hex,onChange:z=>p(m,{color:Os(z.target.value,v.a)})}),d.jsxs("label",{className:A.mini,children:["opacity",d.jsx("input",{type:"range","aria-label":`${s} layer ${m+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:z=>p(m,{color:Os(v.hex,+z.target.value)})}),d.jsx("span",{className:A.readout,children:Ct(v.a)})]})]})]},m)})})}const wv=[11,12,13,14,16,20].map((s,a)=>[s,["chrome","ui","caption","dense","body","lead"][a],`--sc-p-font-size-${s}`]),bv=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],kv=s=>/^--sc-font-.*-size$/.test(s)?wv:/^--sc-size-.*icon/.test(s)?bv:null;function Lv({name:s,kind:a,shipped:l,value:c,override:p,scope:f,adj:m,spring:v,pin:b,refs:z,easingPresets:j,onSet:E,onAdj:C,onSpring:T,onReset:Q,onPin:D,restOf:V,onCopyRest:ne}){const ue=p!==void 0,[re,X]=L.useState(!!b);let pe=null;if(a==="color"){const I=kp(c);pe=d.jsxs("div",{className:A.editor,children:[d.jsx("input",{type:"color","aria-label":`${s} colour`,value:I.hex,onChange:K=>E(Os(K.target.value,I.a))}),d.jsx("input",{type:"range","aria-label":`${s} alpha`,min:"0",max:"1",step:"0.01",value:I.a,onChange:K=>E(Os(I.hex,+K.target.value))})]})}else if(a==="length"||a==="number"){const I=parseFloat(c)||0,K=Math.abs(parseFloat(l)||1),fe=a==="length"?Math.max(64,K*4):Math.max(2,K*2),he=a==="length"?"px":"",le=a==="length"?.5:.005;pe=d.jsxs("div",{className:A.editor,children:[d.jsx("input",{type:"range","aria-label":s,min:"0",max:fe,step:le,value:I,onChange:P=>E(`${P.target.value}${he}`)}),d.jsx("input",{type:"number","aria-label":`${s} value`,className:A.num,step:le,value:Ct(I,3),onChange:P=>E(`${P.target.value}${he}`)})]});const Z=kv(s);Z&&(pe=d.jsxs(d.Fragment,{children:[pe,d.jsx("div",{className:A.steps,role:"group","aria-label":`${s} scale`,children:Z.map(([P,U,H])=>d.jsxs("button",{type:"button",className:A.step,"aria-pressed":I===P,onClick:()=>E(`var(${H})`),children:[P,U&&d.jsx("span",{className:A.stepRole,children:U})]},P))})]}))}else if(a==="time"){const I=gv(c);pe=d.jsxs("div",{className:A.editor,children:[d.jsx("input",{type:"range","aria-label":s,min:"0",max:"1200",step:"10",value:I,onChange:K=>E(`${K.target.value}ms`)}),d.jsxs("span",{className:A.readout,children:[Math.round(I),"ms"]})]})}else a==="easing"?pe=d.jsx(Lp,{label:s,value:c,spring:v,presets:j,asRef:!0,onChange:(I,K,fe)=>{E(I),T(K,fe)}}):a==="shadow"?pe=d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:A.editor,children:[d.jsxs("label",{className:A.mini,children:["scale all",d.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.scale)??1,onChange:I=>C({...m,scale:+I.target.value})})]}),d.jsxs("label",{className:A.mini,children:["strength all",d.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.strength)??1,onChange:I=>C({...m,strength:+I.target.value})})]})]}),d.jsx(yv,{name:s,value:c,onSet:E})]}):pe=d.jsx("input",{type:"text","aria-label":s,value:c,onChange:I=>E(I.target.value)});return d.jsxs("div",{className:`${A.token} ${ue?A.changed:""}`,children:[d.jsxs("div",{className:A.tokenHead,children:[d.jsxs("code",{className:A.tokenName,children:[s.replace("--sc-",""),ue&&f&&d.jsx("span",{className:A.scope,children:f==="all"?"both modes":`${f} only`})]}),d.jsxs("span",{className:A.tokenActions,children:[V&&d.jsx("button",{type:"button",className:A.reset,title:`Set to this concept's ${V.replace("--sc-","")} value`,onClick:ne,children:"copy rest"}),d.jsx("button",{type:"button",className:A.reset,"aria-pressed":re,onClick:()=>X(I=>!I),children:"note"}),ue&&d.jsx("button",{type:"button",className:A.reset,onClick:Q,"aria-label":`Reset ${s}`,children:"reset"})]})]}),pe,(z==null?void 0:z.length)>0&&a!=="easing"&&d.jsxs("select",{"aria-label":`${s} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:I=>I.target.value&&E(`var(${I.target.value})`),children:[d.jsx("option",{value:"",children:"token…"}),z.map(I=>d.jsx("option",{value:I,children:I.replace("--sc-p-","")},I))]}),re&&d.jsx("input",{type:"text",className:A.pin,"aria-label":`Note on ${s}`,placeholder:"Note on this value…",value:b||"",onChange:I=>D(I.target.value)}),d.jsxs("div",{className:A.values,children:[d.jsxs("span",{title:l,children:["shipped ",l]}),ue&&d.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function Sv({def:s,value:a,spring:l,easingPresets:c,onChange:p,onSpring:f}){const m=`prop-${s.name}`;let v;if(s.type==="boolean")v=d.jsx("input",{id:m,type:"checkbox",checked:!!a,onChange:b=>p(b.target.checked)});else if(s.type==="enum")v=d.jsx("select",{id:m,value:a,onChange:b=>p(b.target.value),children:s.options.map(b=>d.jsx("option",{children:b},b))});else if(s.type==="number")v=d.jsx("input",{id:m,type:"number",className:A.num,min:s.min,max:s.max,value:a,onChange:b=>p(+b.target.value)});else if(s.type==="range")v=d.jsxs(d.Fragment,{children:[d.jsx("input",{id:m,type:"range",min:s.min,max:s.max,step:s.step,value:a,onChange:b=>p(+b.target.value)}),d.jsxs("span",{className:A.readout,children:[a,s.unit||""]})]});else{if(s.type==="easing")return d.jsxs("div",{className:A.propBlock,children:[d.jsx("span",{className:A.propLabel,children:d.jsx("code",{children:s.name})}),d.jsx(Lp,{label:s.name,value:a,spring:l,presets:c,onChange:(b,z,j)=>f(b,z,j)})]});v=d.jsx("input",{id:m,type:"text",value:a,onChange:b=>p(b.target.value)})}return d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:m,children:d.jsx("code",{children:s.name})}),v]})}const xn=!0,_v="./sounds/",zv=3,Ev=s=>`sc-tune:v2:${s}`,jv=["all","light","dark"],Sp=s=>/^--sc-(color|shadow)-/.test(s),Ms=(s,a)=>Sp(s)?a:"all",Is=()=>({all:{},light:{},dark:{}}),Rs=(s,a)=>({...s.overrides.all,...s.overrides[a]}),Bl=["A","B","C","D"],Ql=s=>[...new Set(s)],$s=Ql(If.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Cv={color:$s.filter(s=>s.startsWith("--sc-p-color-")&&!s.endsWith("-rgb")),length:$s.filter(s=>/^--sc-p-(space|size|radius|border-width)-/.test(s)),time:$s.filter(s=>s.startsWith("--sc-p-motion-duration-"))},Nv=$s.filter(s=>s.startsWith("--sc-p-motion-easing-"));function Pv(s){var p;const a=s.join(`
`),l=Ql(((p=a.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(f=>f.slice(4)))||[]),c=Ql(a.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:l.sort(),derived:c}}const lp=s=>{var a;return((a=s.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:a[1])||"other"};function Ts(s){return s?/^(cubic-bezier|ease|linear|steps)/.test(s)?"easing":/^-?[\d.]+m?s$/.test(s)?"time":/px/.test(s)&&/(rgb|#|hsl|color\(|inset)/.test(s)||/(rgb|#|hsl|color\()/.test(s)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(s.trim())?"shadow":CSS.supports("color",s)?"color":/^-?[\d.]+px$/.test(s)?"length":/^-?[\d.]+$/.test(s)?"number":"text":"text"}const Kl=(s,a)=>{if(!s)return{};const l=getComputedStyle(s);return Object.fromEntries(a.map(c=>[c,l.getPropertyValue(c).trim()]))},Mv=(s,a)=>{if(!s)return{};const l=document.createElement("span");l.style.cssText="position:absolute;visibility:hidden;height:0;",s.appendChild(l);const c=Object.fromEntries(a.map(p=>(l.style.width=`var(${p})`,[p,getComputedStyle(l).width])));return l.remove(),c},ap=(s,a)=>{if(!s)return{};const l=document.createElement("div");l.style.display="none";for(const[p,f]of Object.entries(a))l.style.setProperty(p,f);s.appendChild(l);const c=Kl(l,Object.keys(a));return l.remove(),c};function Rv(s,a,l){return s.replace(/(-?[\d.]+)px/g,(c,p)=>`${Ct(p*a)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,f)=>`rgba(${p}, ${Ct(Math.min(1,f*l),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${Ct(Math.min(1,p*l),3)})`)}let yn=null;const cp=new Map;async function Fs(s,a,l){if(!s)return;yn=yn||new(window.AudioContext||window.webkitAudioContext),yn.state==="suspended"&&await yn.resume();let c=cp.get(s);if(!c){const m=await(await fetch(_v+s)).arrayBuffer();c=await yn.decodeAudioData(m),cp.set(s,c)}const p=yn.createBufferSource(),f=yn.createGain();f.gain.value=a,p.buffer=c,p.playbackRate.value=l,p.connect(f).connect(yn.destination),p.start()}const Tv=["rest","hover","focus","active"],Fv={hover:":hover",focus:":focus-visible",active:":active"};function Av(s){var p;const a=Fv[s];if(!a)return"";const l=[],c=(f,m)=>{for(const v of f){if(v.cssRules&&v.media){c(v.cssRules,z=>m(`@media ${v.media.mediaText}{${z}}`));continue}if(!v.selectorText||!v.selectorText.includes(a))continue;const b=v.selectorText.split(",").map(z=>z.trim()).filter(z=>z.includes(a)).map(z=>`[data-force='${s}'] ${z.split(a).join("")}`).join(", ");l.push(m(`${b}{${v.style.cssText}}`))}};for(const f of document.styleSheets)if(((p=f.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(f.cssRules,m=>m)}catch{}return l.join(`
`)}const ta=s=>Object.fromEntries(s.props.map(a=>[a.name,a.default]));function _p(s,a){var l,c,p;for(const[f,m]of Object.entries(((l=s.seed)==null?void 0:l.overrides)||{}))Object.values(a.overrides).some(v=>f in v)||(a.overrides.all[f]=m);for(const[f,m]of Object.entries(((c=s.seed)==null?void 0:c.scoped)||{}))for(const[v,b]of Object.entries(m))!(v in a.overrides[f])&&!(v in a.overrides.all)&&(a.overrides[f][v]=b);for(const[f,m]of Object.entries(((p=s.seed)==null?void 0:p.springs)||{})){if(a.springs[f]||Object.values(a.overrides).some(b=>f in b))continue;const v=Ds(m);a.springs[f]=m,a.overrides.all[f]=v.easing,a.overrides.all[f.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return a}const zp=(s,a)=>_p(s,{id:a,overrides:Is(),shadowAdj:Is(),springs:{},pins:{},notes:"",props:ta(s),sound:{file:s.shippedSound,volume:.7,rate:1}});function $v(s){const a=br[s];return{component:s,notes:"",active:"A",concepts:[zp(a,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:a.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function up(s){var a;try{const l=JSON.parse(localStorage.getItem(Ev(s))||"null");if((l==null?void 0:l.component)===s&&Array.isArray(l.concepts)){for(const c of l.concepts){if(c.props={...ta(br[s]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=Is();for(const[m,v]of Object.entries(c.overrides))p[Sp(m)?"dark":"all"][m]=v;const f=Is();for(const[m,v]of Object.entries(c.shadowAdj||{}))f.dark[m]=v;c.overrides=p,c.shadowAdj=f}if(s==="Button")for(const p of Object.values(c.overrides))for(const f of Object.keys(p)){if(!f.startsWith("--sc-font-text-label-chrome-"))continue;const m=f.replace("label-chrome-","label-button-lg-");m in p||(p[m]=p[f]),delete p[f]}}((a=l.view)==null?void 0:a.ground)==="#E3DFD8"&&(l.view.ground="--sc-color-surface-page");for(const c of l.concepts)_p(br[s],c);return l}}catch{}return $v(s)}function Dv(){const s=new URLSearchParams(location.search).get("c"),[a,l]=L.useState(br[s]?s:"Switch"),[c,p]=L.useState(()=>up(a)),[f,m]=L.useState(null),[v,b]=L.useState([]),[z,j]=L.useState(!0),[E,C]=L.useState({}),[T,Q]=L.useState({}),[D,V]=L.useState({}),[ne,ue]=L.useState(0),[re,X]=L.useState(!1),[pe,I]=L.useState(!1),K=L.useRef(null),fe=L.useRef({}),he=L.useRef(null),le=br[a],Z=le.kind==="motion",{tokens:P,derived:U}=L.useMemo(()=>{const y=Pv(le.css);return{...y,tokens:[...new Set([...y.tokens,...le.jsTokens||[]])].sort()}},[le]),H=c.concepts.find(y=>y.id===c.active)||c.concepts[0],we=L.useMemo(()=>{const y=getComputedStyle(document.documentElement);return Nv.map(N=>({name:N,value:y.getPropertyValue(N).trim()}))},[]);L.useEffect(()=>{fetch("./spec.json").then(y=>y.json()).then(y=>{l(y.component),p(y.state),m({recorded:y.recorded})})},[]),L.useEffect(()=>{},[]);const me=y=>{l(y),p(up(y)),history.replaceState(null,"",`?c=${y}`)};L.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const de=c.view.force||"rest";L.useEffect(()=>{let y=document.getElementById("sc-tune-force");y||(y=document.createElement("style"),y.id="sc-tune-force",document.head.appendChild(y)),y.textContent=Av(de)},[de]),L.useLayoutEffect(()=>{var M;C(Kl(K.current,P));const y=Kl(K.current,P);fe.current[c.view.theme]=y,Q({...y,...ap(K.current,Rs(H,c.view.theme))});const N=(M=he.current)==null?void 0:M.querySelector("[class]");V(Mv(N?N.closest("label")||N:null,U))},[P,U,H.overrides,c.view.theme,H.props]),L.useEffect(()=>{},[c,a]);const W=L.useCallback(y=>p(N=>N),[]),oe=L.useCallback((y,N)=>p(M=>({...M,concepts:M.concepts.map(ye=>ye.id===y?N(ye):ye)})),[]),G=L.useCallback(y=>(N,M)=>oe(y,ye=>({...ye,props:{...ye.props,[N]:M}})),[oe]),w=y=>W(N=>({...N,concepts:N.concepts.map(M=>M.id===N.active?y(M):M)})),R=c.view.theme,ce=(y,N,M)=>{const ye=Ms(N,R),ge={...y,[ye]:{...y[ye]}};return M===void 0?delete ge[ye][N]:ge[ye][N]=M,ge},ve=(y,N)=>w(M=>({...M,overrides:ce(M.overrides,y,N)})),be=y=>w(N=>{const M={...N.springs};return delete M[y],{...N,overrides:ce(N.overrides,y,void 0),shadowAdj:ce(N.shadowAdj,y,void 0),springs:M}}),ke=(y,N,M)=>w(ye=>{const ge={...ye.springs};let Se=ye.overrides;if(N){ge[y]=N;const tt=y.replace(/-easing$/,"-duration");tt!==y&&P.includes(tt)&&(Se=ce(Se,tt,`${M}ms`))}else delete ge[y];return{...ye,springs:ge,overrides:Se}}),Ce=(y,N)=>w(M=>({...M,shadowAdj:ce(M.shadowAdj,y,N),overrides:ce(M.overrides,y,Rv(E[y],N.scale??1,N.strength??1))})),ze=(y,N)=>w(M=>({...M,pins:{...M.pins,[y]:N}})),Ee=(y,N)=>w(M=>({...M,sound:{...M.sound,[y]:N}})),Ie=(y,N)=>p(M=>({...M,view:{...M.view,[y]:N}})),Kt=le.props.some(y=>y.name==="disabled"),mo=y=>p(N=>({...N,view:{...N.view,force:y==="disabled"?"rest":y},concepts:Kt?N.concepts.map(M=>({...M,props:{...M.props,disabled:y==="disabled"}})):N.concepts})),kn=y=>W(N=>{const M=Bl.find(Se=>!N.concepts.some(tt=>tt.id===Se));if(!M)return N;const ye=N.concepts.find(Se=>Se.id===N.active),ge=y?{...structuredClone(ye),id:M,notes:""}:zp(le,M);return{...N,concepts:[...N.concepts,ge],active:M}}),Lr=y=>W(N=>{if(N.concepts.length<2)return N;const M=N.concepts.filter(ye=>ye.id!==y);return{...N,concepts:M,active:M[0].id,pick:N.pick.id===y?{id:null,reason:N.pick.reason}:N.pick}}),go=()=>p(y=>{const N=!y.view.blind,M=N?[...y.concepts.map(ye=>ye.id)].sort(()=>Math.random()-.5):null;return{...y,view:{...y.view,blind:N,order:M,compare:N?!0:y.view.compare}}}),Un=L.useCallback(()=>{ue(N=>N+1),le.play&&c.concepts.forEach(N=>le.play(N.props,G(N.id)));const y=c.concepts.find(N=>N.id===c.active);y!=null&&y.sound.file&&Fs(y.sound.file,y.sound.volume,y.sound.rate)},[le,c.concepts,c.active,G]),Vn=Z?Math.max(1200,Ol(H.props)*c.view.slow+900):1400*c.view.slow;L.useEffect(()=>{if(!re)return;const y=setInterval(Un,Vn);return()=>clearInterval(y)},[re,Un,Vn]);const vo=P.filter(y=>Ts(E[y])==="time"),Wn=y=>{const N=c.view.ground,M=N.startsWith("--")?{background:`var(${N})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:N,"--sc-color-surface-page":N},ye={zoom:c.view.zoom,...M,...y};if(c.view.slow!==1)for(const ge of vo)ye[ge]=`calc(${y[ge]??E[ge]} * ${c.view.slow})`;return ye},Zt=L.useCallback(()=>{const y=K.current,N=M=>M.id;return{tool:"sc-tune",version:zv,component:a,kind:le.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(M=>{const ye=ap(y,Rs(M,c.view.theme));return{id:N(M),notes:M.notes,props:M.props,sound:{...M.sound,shipped:le.shippedSound,trigger:le.trigger},tokens:jv.flatMap(ge=>Object.keys(M.overrides[ge]).map(Se=>{var wo;const tt=ge==="all"?E:fe.current[ge]||{},$t=M.overrides[ge][Se],yo=ge==="all"||ge===c.view.theme;return{name:Se,mode:ge,category:lp(Se),kind:Ts(tt[Se]||E[Se]),shipped:tt[Se]??null,tuned:yo?ye[Se]??$t:$t,override:$t,...(wo=M.shadowAdj[ge])!=null&&wo[Se]?{shadowAdjust:M.shadowAdj[ge][Se]}:{},...M.springs[Se]?{spring:{...M.springs[Se],...pp(M.springs[Se])}}:{}}})),pins:Object.fromEntries(Object.entries(M.pins).filter(([,ge])=>ge)),...Z?{motion:{lastFrameMs:Ol(M.props),...M.springs["prop:easing"]?{spring:{...M.springs["prop:easing"],...pp(M.springs["prop:easing"])}}:{}}}:{}}}),derived:D,tokenCount:P.length,state:c}},[a,le,Z,c,E,D,P]);L.useEffect(()=>{window.scTune={export:Zt,component:a}},[Zt,a]);const Gt=L.useMemo(()=>{var N;const y={};for(const M of P)(y[N=lp(M)]||(y[N]=[])).push(M);return y},[P]),Sr=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(y=>c.concepts.find(N=>N.id===y)).filter(Boolean):c.concepts:[H],_r={replay:ne,slow:c.view.slow};v.filter(y=>!z||y.seconds<=1);const zr=Rs(H,c.view.theme),xo=Object.keys(zr).length;return d.jsxs("div",{className:A.app,children:[d.jsxs("header",{className:A.bar,children:[d.jsx("span",{className:A.brand,children:"sc-tune"}),d.jsx("select",{"aria-label":"Subject",value:a,disabled:xn,onChange:y=>me(y.target.value),children:Object.keys(br).map(y=>d.jsx("option",{children:y},y))}),d.jsxs("span",{className:A.meta,children:[Z?"choreography":`${P.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),f&&d.jsxs("span",{className:A.meta,children:["snapshot · recorded ",f.recorded]}),d.jsx("span",{className:A.spacer}),d.jsx("button",{type:"button",onClick:Un,children:"Play"}),d.jsx("button",{type:"button","aria-pressed":re,onClick:()=>X(y=>!y),children:re?"Stop loop":"Loop"}),d.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:y=>Ie("slow",+y.target.value),children:[d.jsx("option",{value:1,children:"1×"}),d.jsx("option",{value:2,children:"½×"}),d.jsx("option",{value:4,children:"¼×"}),d.jsx("option",{value:10,children:"⅒×"})]}),d.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>Ie("compare",!c.view.compare),children:"Compare"}),d.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:go,children:c.view.blind?"Reveal":"Blind"}),!xn]}),d.jsx("main",{className:A.stages,children:d.jsxs(Of,{enabled:!1,children:[!c.view.blind&&d.jsxs("section",{className:A.stageWrap,"aria-label":Z?"Default":"Shipped",children:[d.jsx("h2",{className:A.stageLabel,children:Z?"Default":"Shipped"}),d.jsx("div",{className:A.stage,style:Wn({}),ref:K,inert:"","data-force":de,children:le.render(Z?ta(le):H.props,()=>{},()=>{},_r)})]}),c.view.blind&&d.jsx("div",{ref:K,hidden:!0}),Sr.map((y,N)=>{const M=c.view.blind?`Concept ${N+1}`:`${y.id}${y.id===c.active?" · editing":""}${c.pick.id===y.id?" · picked":""}`;return d.jsxs("section",{className:`${A.stageWrap} ${y.id===c.active&&!c.view.blind?A.activeStage:""}`,"aria-label":M,children:[d.jsxs("h2",{className:A.stageLabel,children:[c.view.compare&&!c.view.blind?d.jsx("button",{type:"button",className:A.stageSelect,onClick:()=>p(ye=>({...ye,active:y.id})),children:M}):M,Z&&d.jsxs("span",{className:A.readout,children:[" · last frame ",Ol(y.props),"ms"]})]}),d.jsx("div",{className:A.stage,style:Wn(Rs(y,R)),ref:y.id===c.active?he:void 0,"data-force":de,children:le.render(y.props,G(y.id),()=>Fs(y.sound.file,y.sound.volume,y.sound.rate),_r)})]},y.id)})]})}),d.jsxs("aside",{className:A.panel,children:[d.jsxs("fieldset",{className:A.group,disabled:xn,children:[d.jsx("legend",{children:"Notes for the build"}),d.jsx("textarea",{className:A.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:y=>p(N=>({...N,notes:y.target.value}))})]}),d.jsxs("fieldset",{className:A.group,disabled:xn,children:[d.jsx("legend",{children:"Concepts"}),d.jsxs("div",{className:A.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(y=>d.jsx("button",{type:"button",role:"tab","aria-selected":y.id===c.active,className:A.tab,onClick:()=>p(N=>({...N,active:y.id})),children:y.id},y.id)),d.jsx("button",{type:"button",className:A.tab,disabled:c.concepts.length>=Bl.length,onClick:()=>kn(!0),children:"duplicate"}),d.jsx("button",{type:"button",className:A.tab,disabled:c.concepts.length>=Bl.length,onClick:()=>kn(!1),children:"new"}),d.jsxs("button",{type:"button",className:A.tab,disabled:c.concepts.length<2,onClick:()=>Lr(H.id),children:["remove ",H.id]})]}),d.jsx("textarea",{className:A.notes,"aria-label":`Notes on concept ${H.id}`,placeholder:`What concept ${H.id} is trying…`,value:H.notes,onChange:y=>w(N=>({...N,notes:y.target.value}))}),c.concepts.length>1&&d.jsxs("div",{className:A.pick,children:[d.jsx("span",{className:A.propLabel,children:d.jsx("code",{children:"pick"})}),c.concepts.map(y=>d.jsxs("label",{className:A.mini,children:[d.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===y.id,onChange:()=>p(N=>({...N,pick:{...N.pick,id:y.id}}))})," ",y.id]},y.id)),d.jsx("textarea",{className:A.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:y=>p(N=>({...N,pick:{...N.pick,reason:y.target.value}}))})]})]}),d.jsxs("fieldset",{className:A.group,disabled:xn,children:[d.jsx("legend",{children:"View"}),d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"v-theme",children:d.jsx("code",{children:"theme"})}),d.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:y=>Ie("theme",y.target.value),children:[d.jsx("option",{children:"light"}),d.jsx("option",{children:"dark"})]})]}),d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"v-zoom",children:d.jsx("code",{children:"zoom"})}),d.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:y=>Ie("zoom",+y.target.value)}),d.jsxs("span",{className:A.readout,children:[c.view.zoom,"×"]})]}),d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"v-ground",children:d.jsx("code",{children:"ground"})}),d.jsx("select",{id:"v-ground",value:c.view.ground,onChange:y=>Ie("ground",y.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(y=>d.jsx("option",{value:y,children:y.replace("--sc-color-","")},y))})]})]}),d.jsxs("fieldset",{className:A.group,disabled:xn,children:[d.jsxs("legend",{children:[Z?"Motion":"Props"," · concept ",H.id]}),(()=>{const y=le.props.map(N=>d.jsx(Sv,{def:N,value:H.props[N.name],spring:H.springs[`prop:${N.name}`],easingPresets:we,onChange:M=>G(H.id)(N.name,M),onSpring:(M,ye,ge)=>w(Se=>{const tt={...Se.springs},$t={...Se.props,[N.name]:M};return ye?(tt[`prop:${N.name}`]=ye,N.durationProp&&($t[N.durationProp]=ge)):delete tt[`prop:${N.name}`],{...Se,springs:tt,props:$t}})},N.name));return Z||y.splice(Math.min(3,y.length),0,d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"p-state",children:d.jsx("code",{children:"state"})}),d.jsxs("select",{id:"p-state",value:Kt&&H.props.disabled?"disabled":de,onChange:N=>mo(N.target.value),children:[Tv.map(N=>d.jsx("option",{value:N,children:N==="rest"?"default":N},N)),Kt&&d.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),y})()]}),d.jsxs("fieldset",{className:A.group,disabled:xn,children:[d.jsxs("legend",{children:["Sound · ",le.trigger]}),d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"s-vol",children:d.jsx("code",{children:"volume"})}),d.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:H.sound.volume,onChange:y=>Ee("volume",+y.target.value)}),d.jsx("span",{className:A.readout,children:H.sound.volume})]}),d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"s-rate",children:d.jsx("code",{children:"pitch"})}),d.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:H.sound.rate,onChange:y=>Ee("rate",+y.target.value)}),d.jsxs("span",{className:A.readout,children:[H.sound.rate,"×"]})]}),d.jsxs("div",{className:A.prop,children:[d.jsx("label",{htmlFor:"s-short",children:d.jsx("code",{children:"under 1 s only"})}),d.jsx("input",{id:"s-short",type:"checkbox",checked:z,onChange:y=>j(y.target.checked)})]}),d.jsxs("ul",{className:A.sounds,"aria-label":"Sound candidates",children:[d.jsx("li",{className:A.sound,children:d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"sound",checked:!H.sound.file,onChange:()=>Ee("file",null)})," silent"]})}),(H.sound.file?[{file:H.sound.file,seconds:""}]:[]).map(y=>d.jsxs("li",{className:`${A.sound} ${y.file===le.shippedSound?A.shippedSound:""}`,children:[d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"sound",checked:H.sound.file===y.file,onChange:()=>{Ee("file",y.file),Fs(y.file,H.sound.volume,H.sound.rate)}}),y.file.replace(/\.(wav|mp3)$/,"")]}),d.jsxs("span",{className:A.readout,children:[y.seconds&&`${y.seconds}s`,y.file===le.shippedSound?" · shipped":""]}),d.jsx("button",{type:"button","aria-label":`Play ${y.file}`,onClick:()=>Fs(y.file,H.sound.volume,H.sound.rate),children:"play"})]},y.file))]})]}),!Z&&d.jsxs("p",{className:A.meta,children:[xo," of ",P.length," tokens tuned in concept ",H.id,", ",R," mode. Colour and shadow edits apply to ",R," only; size, type and motion apply to both modes."]}),Object.entries(Gt).map(([y,N])=>d.jsxs("fieldset",{className:A.group,disabled:xn,children:[d.jsxs("legend",{children:[y," · ",N.length]}),N.map(M=>{var ye;return d.jsx(Lv,{name:M,kind:Ts(E[M]),shipped:E[M],value:T[M]||E[M]||"",override:zr[M],scope:H.overrides[Ms(M,R)][M]!==void 0?Ms(M,R):H.overrides.all[M]!==void 0?"all":null,adj:(ye=H.shadowAdj[Ms(M,R)])==null?void 0:ye[M],spring:H.springs[M],pin:H.pins[M],refs:Cv[Ts(E[M])],easingPresets:we,onSet:ge=>ve(M,ge),onAdj:ge=>Ce(M,ge),onSpring:(ge,Se)=>ke(M,ge,Se),onReset:()=>be(M),restOf:M.endsWith("-hover")&&P.includes(M.slice(0,-6))?M.slice(0,-6):null,onCopyRest:()=>ve(M,T[M.slice(0,-6)]||E[M.slice(0,-6)]),onPin:ge=>ze(M,ge)},`${H.id}${R}${M}`)})]},y)),U.length>0&&d.jsxs("fieldset",{className:A.group,children:[d.jsx("legend",{children:"derived · read-only"}),U.map(y=>d.jsxs("div",{className:A.values,children:[d.jsx("code",{children:y})," ",D[y]]},y))]})]})]})}function pp(s){const a=Ds(s);return{settleMs:a.settleMs,overshoot:Ct(a.overshoot,3),framerMotion:{type:"spring",stiffness:s.stiffness,damping:s.damping,mass:s.mass}}}function Ov(){return new URLSearchParams(location.search).get("c"),d.jsx(Dv,{})}const Hl=document.getElementById("root");Hl.dataset.mounted||(Hl.dataset.mounted="true",Mf.createRoot(Hl).render(d.jsx(Ov,{})));
