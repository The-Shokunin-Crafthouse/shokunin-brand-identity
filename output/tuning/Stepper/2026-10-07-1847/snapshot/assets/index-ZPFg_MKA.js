(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function i(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=i(p);fetch(p.href,f)}})();function xf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ni={exports:{}},lo={},Pi={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function yf(){if(Fu)return ve;Fu=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),z=Symbol.iterator;function N(w){return w===null||typeof w!="object"?null:(w=z&&w[z]||w["@@iterator"],typeof w=="function"?w:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,O={};function Q(w,M,ce){this.props=w,this.context=M,this.refs=O,this.updater=ce||R}Q.prototype.isReactComponent={},Q.prototype.setState=function(w,M){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,M,"setState")},Q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function oe(){}oe.prototype=Q.prototype;function ue(w,M,ce){this.props=w,this.context=M,this.refs=O,this.updater=ce||R}var se=ue.prototype=new oe;se.constructor=ue,V(se,Q.prototype),se.isPureReactComponent=!0;var ee=Array.isArray,pe=Object.prototype.hasOwnProperty,B={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function fe(w,M,ce){var he,we={},ke=null,Ce=null;if(M!=null)for(he in M.ref!==void 0&&(Ce=M.ref),M.key!==void 0&&(ke=""+M.key),M)pe.call(M,he)&&!W.hasOwnProperty(he)&&(we[he]=M[he]);var _e=arguments.length-2;if(_e===1)we.children=ce;else if(1<_e){for(var ze=Array(_e),Ie=0;Ie<_e;Ie++)ze[Ie]=arguments[Ie+2];we.children=ze}if(w&&w.defaultProps)for(he in _e=w.defaultProps,_e)we[he]===void 0&&(we[he]=_e[he]);return{$$typeof:l,type:w,key:ke,ref:Ce,props:we,_owner:B.current}}function me(w,M){return{$$typeof:l,type:w.type,key:M,ref:w.ref,props:w.props,_owner:w._owner}}function le(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function ae(w){var M={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ce){return M[ce]})}var D=/\/+/g;function K(w,M){return typeof w=="object"&&w!==null&&w.key!=null?ae(""+w.key):M.toString(36)}function U(w,M,ce,he,we){var ke=typeof w;(ke==="undefined"||ke==="boolean")&&(w=null);var Ce=!1;if(w===null)Ce=!0;else switch(ke){case"string":case"number":Ce=!0;break;case"object":switch(w.$$typeof){case l:case a:Ce=!0}}if(Ce)return Ce=w,we=we(Ce),w=he===""?"."+K(Ce,0):he,ee(we)?(ce="",w!=null&&(ce=w.replace(D,"$&/")+"/"),U(we,M,ce,"",function(Ie){return Ie})):we!=null&&(le(we)&&(we=me(we,ce+(!we.key||Ce&&Ce.key===we.key?"":(""+we.key).replace(D,"$&/")+"/")+w)),M.push(we)),1;if(Ce=0,he=he===""?".":he+":",ee(w))for(var _e=0;_e<w.length;_e++){ke=w[_e];var ze=he+K(ke,_e);Ce+=U(ke,M,ce,ze,we)}else if(ze=N(w),typeof ze=="function")for(w=ze.call(w),_e=0;!(ke=w.next()).done;)ke=ke.value,ze=he+K(ke,_e++),Ce+=U(ke,M,ce,ze,we);else if(ke==="object")throw M=String(w),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return Ce}function je(w,M,ce){if(w==null)return w;var he=[],we=0;return U(w,he,"","",function(ke){return M.call(ce,ke,we++)}),he}function ye(w){if(w._status===-1){var M=w._result;M=M(),M.then(function(ce){(w._status===0||w._status===-1)&&(w._status=1,w._result=ce)},function(ce){(w._status===0||w._status===-1)&&(w._status=2,w._result=ce)}),w._status===-1&&(w._status=0,w._result=M)}if(w._status===1)return w._result.default;throw w._result}var ge={current:null},H={transition:null},te={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:H,ReactCurrentOwner:B};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:je,forEach:function(w,M,ce){je(w,function(){M.apply(this,arguments)},ce)},count:function(w){var M=0;return je(w,function(){M++}),M},toArray:function(w){return je(w,function(M){return M})||[]},only:function(w){if(!le(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ve.Component=Q,ve.Fragment=i,ve.Profiler=p,ve.PureComponent=ue,ve.StrictMode=c,ve.Suspense=k,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ve.act=Z,ve.cloneElement=function(w,M,ce){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var he=V({},w.props),we=w.key,ke=w.ref,Ce=w._owner;if(M!=null){if(M.ref!==void 0&&(ke=M.ref,Ce=B.current),M.key!==void 0&&(we=""+M.key),w.type&&w.type.defaultProps)var _e=w.type.defaultProps;for(ze in M)pe.call(M,ze)&&!W.hasOwnProperty(ze)&&(he[ze]=M[ze]===void 0&&_e!==void 0?_e[ze]:M[ze])}var ze=arguments.length-2;if(ze===1)he.children=ce;else if(1<ze){_e=Array(ze);for(var Ie=0;Ie<ze;Ie++)_e[Ie]=arguments[Ie+2];he.children=_e}return{$$typeof:l,type:w.type,key:we,ref:ke,props:he,_owner:Ce}},ve.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:f,_context:w},w.Consumer=w},ve.createElement=fe,ve.createFactory=function(w){var M=fe.bind(null,w);return M.type=w,M},ve.createRef=function(){return{current:null}},ve.forwardRef=function(w){return{$$typeof:v,render:w}},ve.isValidElement=le,ve.lazy=function(w){return{$$typeof:C,_payload:{_status:-1,_result:w},_init:ye}},ve.memo=function(w,M){return{$$typeof:E,type:w,compare:M===void 0?null:M}},ve.startTransition=function(w){var M=H.transition;H.transition={};try{w()}finally{H.transition=M}},ve.unstable_act=Z,ve.useCallback=function(w,M){return ge.current.useCallback(w,M)},ve.useContext=function(w){return ge.current.useContext(w)},ve.useDebugValue=function(){},ve.useDeferredValue=function(w){return ge.current.useDeferredValue(w)},ve.useEffect=function(w,M){return ge.current.useEffect(w,M)},ve.useId=function(){return ge.current.useId()},ve.useImperativeHandle=function(w,M,ce){return ge.current.useImperativeHandle(w,M,ce)},ve.useInsertionEffect=function(w,M){return ge.current.useInsertionEffect(w,M)},ve.useLayoutEffect=function(w,M){return ge.current.useLayoutEffect(w,M)},ve.useMemo=function(w,M){return ge.current.useMemo(w,M)},ve.useReducer=function(w,M,ce){return ge.current.useReducer(w,M,ce)},ve.useRef=function(w){return ge.current.useRef(w)},ve.useState=function(w){return ge.current.useState(w)},ve.useSyncExternalStore=function(w,M,ce){return ge.current.useSyncExternalStore(w,M,ce)},ve.useTransition=function(){return ge.current.useTransition()},ve.version="18.3.1",ve}var $u;function Wi(){return $u||($u=1,Pi.exports=yf()),Pi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function wf(){if(Au)return lo;Au=1;var l=Wi(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(v,k,E){var C,z={},N=null,R=null;E!==void 0&&(N=""+E),k.key!==void 0&&(N=""+k.key),k.ref!==void 0&&(R=k.ref);for(C in k)c.call(k,C)&&!f.hasOwnProperty(C)&&(z[C]=k[C]);if(v&&v.defaultProps)for(C in k=v.defaultProps,k)z[C]===void 0&&(z[C]=k[C]);return{$$typeof:a,type:v,key:N,ref:R,props:z,_owner:p.current}}return lo.Fragment=i,lo.jsx=m,lo.jsxs=m,lo}var Ou;function kf(){return Ou||(Ou=1,Ni.exports=wf()),Ni.exports}var d=kf(),S=Wi(),Es={},Mi={exports:{}},it={},Ri={exports:{}},Ti={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function bf(){return Du||(Du=1,(function(l){function a(H,te){var Z=H.length;H.push(te);e:for(;0<Z;){var w=Z-1>>>1,M=H[w];if(0<p(M,te))H[w]=te,H[Z]=M,Z=w;else break e}}function i(H){return H.length===0?null:H[0]}function c(H){if(H.length===0)return null;var te=H[0],Z=H.pop();if(Z!==te){H[0]=Z;e:for(var w=0,M=H.length,ce=M>>>1;w<ce;){var he=2*(w+1)-1,we=H[he],ke=he+1,Ce=H[ke];if(0>p(we,Z))ke<M&&0>p(Ce,we)?(H[w]=Ce,H[ke]=Z,w=ke):(H[w]=we,H[he]=Z,w=he);else if(ke<M&&0>p(Ce,Z))H[w]=Ce,H[ke]=Z,w=ke;else break e}}return te}function p(H,te){var Z=H.sortIndex-te.sortIndex;return Z!==0?Z:H.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var m=Date,v=m.now();l.unstable_now=function(){return m.now()-v}}var k=[],E=[],C=1,z=null,N=3,R=!1,V=!1,O=!1,Q=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(H){for(var te=i(E);te!==null;){if(te.callback===null)c(E);else if(te.startTime<=H)c(E),te.sortIndex=te.expirationTime,a(k,te);else break;te=i(E)}}function ee(H){if(O=!1,se(H),!V)if(i(k)!==null)V=!0,ye(pe);else{var te=i(E);te!==null&&ge(ee,te.startTime-H)}}function pe(H,te){V=!1,O&&(O=!1,oe(fe),fe=-1),R=!0;var Z=N;try{for(se(te),z=i(k);z!==null&&(!(z.expirationTime>te)||H&&!ae());){var w=z.callback;if(typeof w=="function"){z.callback=null,N=z.priorityLevel;var M=w(z.expirationTime<=te);te=l.unstable_now(),typeof M=="function"?z.callback=M:z===i(k)&&c(k),se(te)}else c(k);z=i(k)}if(z!==null)var ce=!0;else{var he=i(E);he!==null&&ge(ee,he.startTime-te),ce=!1}return ce}finally{z=null,N=Z,R=!1}}var B=!1,W=null,fe=-1,me=5,le=-1;function ae(){return!(l.unstable_now()-le<me)}function D(){if(W!==null){var H=l.unstable_now();le=H;var te=!0;try{te=W(!0,H)}finally{te?K():(B=!1,W=null)}}else B=!1}var K;if(typeof ue=="function")K=function(){ue(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,je=U.port2;U.port1.onmessage=D,K=function(){je.postMessage(null)}}else K=function(){Q(D,0)};function ye(H){W=H,B||(B=!0,K())}function ge(H,te){fe=Q(function(){H(l.unstable_now())},te)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(H){H.callback=null},l.unstable_continueExecution=function(){V||R||(V=!0,ye(pe))},l.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<H?Math.floor(1e3/H):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_getFirstCallbackNode=function(){return i(k)},l.unstable_next=function(H){switch(N){case 1:case 2:case 3:var te=3;break;default:te=N}var Z=N;N=te;try{return H()}finally{N=Z}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(H,te){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=N;N=H;try{return te()}finally{N=Z}},l.unstable_scheduleCallback=function(H,te,Z){var w=l.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?w+Z:w):Z=w,H){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Z+M,H={id:C++,callback:te,priorityLevel:H,startTime:Z,expirationTime:M,sortIndex:-1},Z>w?(H.sortIndex=Z,a(E,H),i(k)===null&&H===i(E)&&(O?(oe(fe),fe=-1):O=!0,ge(ee,Z-w))):(H.sortIndex=M,a(k,H),V||R||(V=!0,ye(pe))),H},l.unstable_shouldYield=ae,l.unstable_wrapCallback=function(H){var te=N;return function(){var Z=N;N=te;try{return H.apply(this,arguments)}finally{N=Z}}}})(Ti)),Ti}var Iu;function Lf(){return Iu||(Iu=1,Ri.exports=bf()),Ri.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function Sf(){if(Bu)return it;Bu=1;var l=Wi(),a=Lf();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},z={};function N(e){return k.call(z,e)?!0:k.call(C,e)?!1:E.test(e)?z[e]=!0:(C[e]=!0,!1)}function R(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||R(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,o,s,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,ue);Q[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,ue);Q[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,ue);Q[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function se(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,o,r)&&(n=null),r||o===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ee=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),B=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),ae=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),H=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,w;function M(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ce=!1;function he(e,t){if(!e||ce)return"";ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var o=_.stack.split(`
`),s=r.stack.split(`
`),u=o.length-1,h=s.length-1;1<=u&&0<=h&&o[u]!==s[h];)h--;for(;1<=u&&0<=h;u--,h--)if(o[u]!==s[h]){if(u!==1||h!==1)do if(u--,h--,0>h||o[u]!==s[h]){var g=`
`+o[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=h);break}}}finally{ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function we(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case B:return"Portal";case me:return"Profiler";case fe:return"StrictMode";case K:return"Suspense";case U:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case le:return(e._context.displayName||"Context")+".Provider";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _e(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ie(e){var t=ze(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){e._valueTracker||(e._valueTracker=Ie(e))}function ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ze(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wr(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_e(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bn(e,t){t=t.checked,t!=null&&se(e,"checked",t,!1)}function Hn(e,t){Bn(e,t);var n=_e(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Un(e,t.type,n):t.hasOwnProperty("defaultValue")&&Un(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function go(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Un(e,t,n){(t!=="number"||kn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qt=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_e(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function kr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function br(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Qt(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_e(n)}}function Lr(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function y(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function j(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?y(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var P,xe=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(P=P||document.createElement("div"),P.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=P.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function de(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(e){tt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Le[t]=Le[e]})});function Ft(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Le.hasOwnProperty(e)&&Le[e]?(""+t).trim():t+"px"}function xo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ft(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var yo=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(yo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Vn=null,Wn=null;function Ji(e){if(e=Wr(e)){if(typeof Qs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Ho(t),Qs(e.stateNode,e.type,t))}}function Xi(e){Vn?Wn?Wn.push(e):Wn=[e]:Vn=e}function ea(){if(Vn){var e=Vn,t=Wn;if(Wn=Vn=null,Ji(e),t)for(e=0;e<t.length;e++)Ji(t[e])}}function ta(e,t){return e(t)}function na(){}var Ks=!1;function ra(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return ta(e,t,n)}finally{Ks=!1,(Vn!==null||Wn!==null)&&(na(),ea())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Zs=!1;if(v)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Zs=!1}function Lp(e,t,n,r,o,s,u,h,g){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch($){this.onError($)}}var zr=!1,wo=null,ko=!1,Gs=null,Sp={onError:function(e){zr=!0,wo=e}};function _p(e,t,n,r,o,s,u,h,g){zr=!1,wo=null,Lp.apply(Sp,arguments)}function zp(e,t,n,r,o,s,u,h,g){if(_p.apply(this,arguments),zr){if(zr){var _=wo;zr=!1,wo=null}else throw Error(i(198));ko||(ko=!0,Gs=_)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function oa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sa(e){if(bn(e)!==e)throw Error(i(188))}function Ep(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return sa(o),e;if(s===r)return sa(o),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=s;else{for(var u=!1,h=o.child;h;){if(h===n){u=!0,n=o,r=s;break}if(h===r){u=!0,r=o,n=s;break}h=h.sibling}if(!u){for(h=s.child;h;){if(h===n){u=!0,n=s,r=o;break}if(h===r){u=!0,r=s,n=o;break}h=h.sibling}if(!u)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function la(e){return e=Ep(e),e!==null?ia(e):null}function ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ia(e);if(t!==null)return t;e=e.sibling}return null}var aa=a.unstable_scheduleCallback,ca=a.unstable_cancelCallback,Cp=a.unstable_shouldYield,jp=a.unstable_requestPaint,Ae=a.unstable_now,Np=a.unstable_getCurrentPriorityLevel,Ys=a.unstable_ImmediatePriority,ua=a.unstable_UserBlockingPriority,bo=a.unstable_NormalPriority,Pp=a.unstable_LowPriority,pa=a.unstable_IdlePriority,Lo=null,jt=null;function Mp(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Fp,Rp=Math.log,Tp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Rp(e)/Tp|0)|0}var So=64,_o=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,u=n&268435455;if(u!==0){var h=u&~o;h!==0?r=Er(h):(s&=u,s!==0&&(r=Er(s)))}else u=n&~o,u!==0?r=Er(u):s!==0&&(r=Er(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),o=1<<n,r|=e[n],t&=~o;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-kt(s),h=1<<u,g=o[u];g===-1?((h&n)===0||(h&r)!==0)&&(o[u]=$p(h,t)):g<=t&&(e.expiredLanes|=h),s&=~h}}function qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function da(){var e=So;return So<<=1,(So&4194240)===0&&(So=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function Op(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-kt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ee=0;function fa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ha,el,ma,ga,va,tl=!1,Eo=[],Zt=null,Gt=null,Yt=null,jr=new Map,Nr=new Map,qt=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function Pr(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Wr(t),t!==null&&el(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ip(e,t,n,r,o){switch(t){case"focusin":return Zt=Pr(Zt,e,t,n,r,o),!0;case"dragenter":return Gt=Pr(Gt,e,t,n,r,o),!0;case"mouseover":return Yt=Pr(Yt,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return jr.set(s,Pr(jr.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Nr.set(s,Pr(Nr.get(s)||null,e,t,n,r,o)),!0}return!1}function ya(e){var t=Ln(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=oa(n),t!==null){e.blockedOn=t,va(e.priority,function(){ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vs=r,n.target.dispatchEvent(r),Vs=null}else return t=Wr(n),t!==null&&el(t),e.blockedOn=n,!1;t.shift()}return!0}function wa(e,t,n){Co(e)&&n.delete(t)}function Bp(){tl=!1,Zt!==null&&Co(Zt)&&(Zt=null),Gt!==null&&Co(Gt)&&(Gt=null),Yt!==null&&Co(Yt)&&(Yt=null),jr.forEach(wa),Nr.forEach(wa)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bp)))}function Rr(e){function t(o){return Mr(o,e)}if(0<Eo.length){Mr(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Mr(Zt,e),Gt!==null&&Mr(Gt,e),Yt!==null&&Mr(Yt,e),jr.forEach(t),Nr.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)ya(n),n.blockedOn===null&&qt.shift()}var Qn=ee.ReactCurrentBatchConfig,jo=!0;function Hp(e,t,n,r){var o=Ee,s=Qn.transition;Qn.transition=null;try{Ee=1,nl(e,t,n,r)}finally{Ee=o,Qn.transition=s}}function Up(e,t,n,r){var o=Ee,s=Qn.transition;Qn.transition=null;try{Ee=4,nl(e,t,n,r)}finally{Ee=o,Qn.transition=s}}function nl(e,t,n,r){if(jo){var o=rl(e,t,n,r);if(o===null)wl(e,t,r,No,n),xa(e,r);else if(Ip(o,e,t,n,r))r.stopPropagation();else if(xa(e,r),t&4&&-1<Dp.indexOf(e)){for(;o!==null;){var s=Wr(o);if(s!==null&&ha(s),s=rl(e,t,n,r),s===null&&wl(e,t,r,No,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var No=null;function rl(e,t,n,r){if(No=null,e=Ws(r),e=Ln(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=oa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case Ys:return 1;case ua:return 4;case bo:case Pp:return 16;case pa:return 536870912;default:return 16}default:return 16}}var Jt=null,ol=null,Po=null;function ba(){if(Po)return Po;var e,t=ol,n=t.length,r,o="value"in Jt?Jt.value:Jt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[s-r];r++);return Po=o.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function La(){return!1}function at(e){function t(n,r,o,s,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ro:La,this.isPropagationStopped=La,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=at(Kn),Tr=Z({},Kn,{view:0,detail:0}),Vp=at(Tr),ll,il,Fr,To=Z({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(ll=e.screenX-Fr.screenX,il=e.screenY-Fr.screenY):il=ll=0,Fr=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:il}}),Sa=at(To),Wp=Z({},To,{dataTransfer:0}),Qp=at(Wp),Kp=Z({},Tr,{relatedTarget:0}),al=at(Kp),Zp=Z({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=at(Zp),Yp=Z({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qp=at(Yp),Jp=Z({},Kn,{data:0}),_a=at(Jp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=td[e])?!!t[e]:!1}function cl(){return nd}var rd=Z({},Tr,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),od=at(rd),sd=Z({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=at(sd),ld=Z({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),id=at(ld),ad=Z({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=at(ad),ud=Z({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=at(ud),dd=[9,13,27,32],ul=v&&"CompositionEvent"in window,$r=null;v&&"documentMode"in document&&($r=document.documentMode);var fd=v&&"TextEvent"in window&&!$r,Ea=v&&(!ul||$r&&8<$r&&11>=$r),Ca=" ",ja=!1;function Na(e,t){switch(e){case"keyup":return dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function hd(e,t){switch(e){case"compositionend":return Pa(t);case"keypress":return t.which!==32?null:(ja=!0,Ca);case"textInput":return e=t.data,e===Ca&&ja?null:e;default:return null}}function md(e,t){if(Zn)return e==="compositionend"||!ul&&Na(e,t)?(e=ba(),Po=ol=Jt=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ea&&t.locale!=="ko"?null:t.data;default:return null}}var gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gd[e.type]:t==="textarea"}function Ra(e,t,n,r){Xi(r),t=Do(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Or=null;function vd(e){qa(e,0)}function Fo(e){var t=Xn(e);if(ho(t))return e}function xd(e,t){if(e==="change")return t}var Ta=!1;if(v){var pl;if(v){var dl="oninput"in document;if(!dl){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),dl=typeof Fa.oninput=="function"}pl=dl}else pl=!1;Ta=pl&&(!document.documentMode||9<document.documentMode)}function $a(){Ar&&(Ar.detachEvent("onpropertychange",Aa),Or=Ar=null)}function Aa(e){if(e.propertyName==="value"&&Fo(Or)){var t=[];Ra(t,Or,e,Ws(e)),ra(vd,t)}}function yd(e,t,n){e==="focusin"?($a(),Ar=t,Or=n,Ar.attachEvent("onpropertychange",Aa)):e==="focusout"&&$a()}function wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Or)}function kd(e,t){if(e==="click")return Fo(t)}function bd(e,t){if(e==="input"||e==="change")return Fo(t)}function Ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Ld;function Dr(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Da(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function Ia(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ia(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ba(){for(var e=window,t=kn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kn(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sd(e){var t=Ba(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ia(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Da(n,s);var u=Da(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _d=v&&"documentMode"in document&&11>=document.documentMode,Gn=null,hl=null,Ir=null,ml=!1;function Ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||Gn==null||Gn!==kn(r)||(r=Gn,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Do(hl,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function $o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},gl={},Ua={};v&&(Ua=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Ao(e){if(gl[e])return gl[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ua)return gl[e]=t[n];return e}var Va=Ao("animationend"),Wa=Ao("animationiteration"),Qa=Ao("animationstart"),Ka=Ao("transitionend"),Za=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Za.set(e,t),f(t,[e])}for(var vl=0;vl<Ga.length;vl++){var xl=Ga[vl],zd=xl.toLowerCase(),Ed=xl[0].toUpperCase()+xl.slice(1);Xt(zd,"on"+Ed)}Xt(Va,"onAnimationEnd"),Xt(Wa,"onAnimationIteration"),Xt(Qa,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Ka,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Ya(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zp(r,t,void 0,e),e.currentTarget=null}function qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var u=r.length-1;0<=u;u--){var h=r[u],g=h.instance,_=h.currentTarget;if(h=h.listener,g!==s&&o.isPropagationStopped())break e;Ya(o,h,_),s=g}else for(u=0;u<r.length;u++){if(h=r[u],g=h.instance,_=h.currentTarget,h=h.listener,g!==s&&o.isPropagationStopped())break e;Ya(o,h,_),s=g}}}if(ko)throw e=Gs,ko=!1,Gs=null,e}function Pe(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(Ja(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),Ja(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Oo]){e[Oo]=!0,c.forEach(function(n){n!=="selectionchange"&&(Cd.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,yl("selectionchange",!1,t))}}function Ja(e,t,n,r){switch(ka(t)){case 1:var o=Hp;break;case 4:o=Up;break;default:o=nl}n=o.bind(null,t,n,e),o=void 0,!Zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var h=r.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;u=u.return}for(;h!==null;){if(u=Ln(h),u===null)return;if(g=u.tag,g===5||g===6){r=s=u;continue e}h=h.parentNode}}r=r.return}ra(function(){var _=s,$=Ws(n),A=[];e:{var T=Za.get(e);if(T!==void 0){var G=sl,q=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":G=od;break;case"focusin":q="focus",G=al;break;case"focusout":q="blur",G=al;break;case"beforeblur":case"afterblur":G=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=id;break;case Va:case Wa:case Qa:G=Gp;break;case Ka:G=cd;break;case"scroll":G=Vp;break;case"wheel":G=pd;break;case"copy":case"cut":case"paste":G=qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=za}var J=(t&4)!==0,Oe=!J&&e==="scroll",b=J?T!==null?T+"Capture":null:T;J=[];for(var x=_,L;x!==null;){L=x;var I=L.stateNode;if(L.tag===5&&I!==null&&(L=I,b!==null&&(I=Sr(x,b),I!=null&&J.push(Ur(x,I,L)))),Oe)break;x=x.return}0<J.length&&(T=new G(T,q,null,n,$),A.push({event:T,listeners:J}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",T&&n!==Vs&&(q=n.relatedTarget||n.fromElement)&&(Ln(q)||q[$t]))break e;if((G||T)&&(T=$.window===$?$:(T=$.ownerDocument)?T.defaultView||T.parentWindow:window,G?(q=n.relatedTarget||n.toElement,G=_,q=q?Ln(q):null,q!==null&&(Oe=bn(q),q!==Oe||q.tag!==5&&q.tag!==6)&&(q=null)):(G=null,q=_),G!==q)){if(J=Sa,I="onMouseLeave",b="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(J=za,I="onPointerLeave",b="onPointerEnter",x="pointer"),Oe=G==null?T:Xn(G),L=q==null?T:Xn(q),T=new J(I,x+"leave",G,n,$),T.target=Oe,T.relatedTarget=L,I=null,Ln($)===_&&(J=new J(b,x+"enter",q,n,$),J.target=L,J.relatedTarget=Oe,I=J),Oe=I,G&&q)t:{for(J=G,b=q,x=0,L=J;L;L=qn(L))x++;for(L=0,I=b;I;I=qn(I))L++;for(;0<x-L;)J=qn(J),x--;for(;0<L-x;)b=qn(b),L--;for(;x--;){if(J===b||b!==null&&J===b.alternate)break t;J=qn(J),b=qn(b)}J=null}else J=null;G!==null&&Xa(A,T,G,J,!1),q!==null&&Oe!==null&&Xa(A,Oe,q,J,!0)}}e:{if(T=_?Xn(_):window,G=T.nodeName&&T.nodeName.toLowerCase(),G==="select"||G==="input"&&T.type==="file")var X=xd;else if(Ma(T))if(Ta)X=bd;else{X=wd;var ne=yd}else(G=T.nodeName)&&G.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(X=kd);if(X&&(X=X(e,_))){Ra(A,X,n,$);break e}ne&&ne(e,T,_),e==="focusout"&&(ne=T._wrapperState)&&ne.controlled&&T.type==="number"&&Un(T,"number",T.value)}switch(ne=_?Xn(_):window,e){case"focusin":(Ma(ne)||ne.contentEditable==="true")&&(Gn=ne,hl=_,Ir=null);break;case"focusout":Ir=hl=Gn=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Ha(A,n,$);break;case"selectionchange":if(_d)break;case"keydown":case"keyup":Ha(A,n,$)}var re;if(ul)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Zn?Na(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(Ea&&n.locale!=="ko"&&(Zn||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Zn&&(re=ba()):(Jt=$,ol="value"in Jt?Jt.value:Jt.textContent,Zn=!0)),ne=Do(_,ie),0<ne.length&&(ie=new _a(ie,e,null,n,$),A.push({event:ie,listeners:ne}),re?ie.data=re:(re=Pa(n),re!==null&&(ie.data=re)))),(re=fd?hd(e,n):md(e,n))&&(_=Do(_,"onBeforeInput"),0<_.length&&($=new _a("onBeforeInput","beforeinput",null,n,$),A.push({event:$,listeners:_}),$.data=re))}qa(A,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Sr(e,n),s!=null&&r.unshift(Ur(e,s,o)),s=Sr(e,t),s!=null&&r.push(Ur(e,s,o))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,o){for(var s=t._reactName,u=[];n!==null&&n!==r;){var h=n,g=h.alternate,_=h.stateNode;if(g!==null&&g===r)break;h.tag===5&&_!==null&&(h=_,o?(g=Sr(n,s),g!=null&&u.unshift(Ur(n,g,h))):o||(g=Sr(n,s),g!=null&&u.push(Ur(n,g,h)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var jd=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(jd,`
`).replace(Nd,"")}function Io(e,t,n){if(t=ec(t),ec(e)!==t&&n)throw Error(i(425))}function Bo(){}var kl=null,bl=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Pd=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(Rd)}:Sl;function Rd(e){setTimeout(function(){throw e})}function _l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Rr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Jn,Vr="__reactProps$"+Jn,$t="__reactContainer$"+Jn,zl="__reactEvents$"+Jn,Td="__reactListeners$"+Jn,Fd="__reactHandles$"+Jn;function Ln(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nc(e);e!==null;){if(n=e[Nt])return n;e=nc(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[Nt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ho(e){return e[Vr]||null}var El=[],er=-1;function tn(e){return{current:e}}function Me(e){0>er||(e.current=El[er],El[er]=null,er--)}function Ne(e,t){er++,El[er]=e.current,e.current=t}var nn={},Ze=tn(nn),nt=tn(!1),Sn=nn;function tr(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function Uo(){Me(nt),Me(Ze)}function rc(e,t,n){if(Ze.current!==nn)throw Error(i(168));Ne(Ze,t),Ne(nt,n)}function oc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(i(108,Ce(e)||"Unknown",o));return Z({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,Sn=Ze.current,Ne(Ze,e),Ne(nt,nt.current),!0}function sc(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=oc(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,Me(nt),Me(Ze),Ne(Ze,e)):Me(nt),Ne(nt,n)}var At=null,Wo=!1,Cl=!1;function lc(e){At===null?At=[e]:At.push(e)}function $d(e){Wo=!0,lc(e)}function rn(){if(!Cl&&At!==null){Cl=!0;var e=0,t=Ee;try{var n=At;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Wo=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),aa(Ys,rn),o}finally{Ee=t,Cl=!1}}return null}var nr=[],rr=0,Qo=null,Ko=0,dt=[],ft=0,_n=null,Ot=1,Dt="";function zn(e,t){nr[rr++]=Ko,nr[rr++]=Qo,Qo=e,Ko=t}function ic(e,t,n){dt[ft++]=Ot,dt[ft++]=Dt,dt[ft++]=_n,_n=e;var r=Ot;e=Dt;var o=32-kt(r)-1;r&=~(1<<o),n+=1;var s=32-kt(t)+o;if(30<s){var u=o-o%5;s=(r&(1<<u)-1).toString(32),r>>=u,o-=u,Ot=1<<32-kt(t)+o|n<<o|r,Dt=s+e}else Ot=1<<s|n<<o|r,Dt=e}function jl(e){e.return!==null&&(zn(e,1),ic(e,1,0))}function Nl(e){for(;e===Qo;)Qo=nr[--rr],nr[rr]=null,Ko=nr[--rr],nr[rr]=null;for(;e===_n;)_n=dt[--ft],dt[ft]=null,Dt=dt[--ft],dt[ft]=null,Ot=dt[--ft],dt[ft]=null}var ct=null,ut=null,Re=!1,Lt=null;function ac(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Ot,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(Re){var t=ut;if(t){var n=t;if(!cc(e,t)){if(Pl(e))throw Error(i(418));t=en(n.nextSibling);var r=ct;t&&cc(e,t)?ac(r,n):(e.flags=e.flags&-4097|2,Re=!1,ct=e)}}else{if(Pl(e))throw Error(i(418));e.flags=e.flags&-4097|2,Re=!1,ct=e}}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Zo(e){if(e!==ct)return!1;if(!Re)return uc(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=ut)){if(Pl(e))throw pc(),Error(i(418));for(;t;)ac(e,t),t=en(t.nextSibling)}if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?en(e.stateNode.nextSibling):null;return!0}function pc(){for(var e=ut;e;)e=en(e.nextSibling)}function or(){ut=ct=null,Re=!1}function Rl(e){Lt===null?Lt=[e]:Lt.push(e)}var Ad=ee.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(u){var h=o.refs;u===null?delete h[s]:h[s]=u},t._stringRef=s,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dc(e){var t=e._init;return t(e._payload)}function fc(e){function t(b,x){if(e){var L=b.deletions;L===null?(b.deletions=[x],b.flags|=16):L.push(x)}}function n(b,x){if(!e)return null;for(;x!==null;)t(b,x),x=x.sibling;return null}function r(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function o(b,x){return b=dn(b,x),b.index=0,b.sibling=null,b}function s(b,x,L){return b.index=L,e?(L=b.alternate,L!==null?(L=L.index,L<x?(b.flags|=2,x):L):(b.flags|=2,x)):(b.flags|=1048576,x)}function u(b){return e&&b.alternate===null&&(b.flags|=2),b}function h(b,x,L,I){return x===null||x.tag!==6?(x=Si(L,b.mode,I),x.return=b,x):(x=o(x,L),x.return=b,x)}function g(b,x,L,I){var X=L.type;return X===W?$(b,x,L.props.children,I,L.key):x!==null&&(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===ye&&dc(X)===x.type)?(I=o(x,L.props),I.ref=Qr(b,x,L),I.return=b,I):(I=ys(L.type,L.key,L.props,null,b.mode,I),I.ref=Qr(b,x,L),I.return=b,I)}function _(b,x,L,I){return x===null||x.tag!==4||x.stateNode.containerInfo!==L.containerInfo||x.stateNode.implementation!==L.implementation?(x=_i(L,b.mode,I),x.return=b,x):(x=o(x,L.children||[]),x.return=b,x)}function $(b,x,L,I,X){return x===null||x.tag!==7?(x=Tn(L,b.mode,I,X),x.return=b,x):(x=o(x,L),x.return=b,x)}function A(b,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Si(""+x,b.mode,L),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:return L=ys(x.type,x.key,x.props,null,b.mode,L),L.ref=Qr(b,null,x),L.return=b,L;case B:return x=_i(x,b.mode,L),x.return=b,x;case ye:var I=x._init;return A(b,I(x._payload),L)}if(Qt(x)||te(x))return x=Tn(x,b.mode,L,null),x.return=b,x;Go(b,x)}return null}function T(b,x,L,I){var X=x!==null?x.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return X!==null?null:h(b,x,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case pe:return L.key===X?g(b,x,L,I):null;case B:return L.key===X?_(b,x,L,I):null;case ye:return X=L._init,T(b,x,X(L._payload),I)}if(Qt(L)||te(L))return X!==null?null:$(b,x,L,I,null);Go(b,L)}return null}function G(b,x,L,I,X){if(typeof I=="string"&&I!==""||typeof I=="number")return b=b.get(L)||null,h(x,b,""+I,X);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case pe:return b=b.get(I.key===null?L:I.key)||null,g(x,b,I,X);case B:return b=b.get(I.key===null?L:I.key)||null,_(x,b,I,X);case ye:var ne=I._init;return G(b,x,L,ne(I._payload),X)}if(Qt(I)||te(I))return b=b.get(L)||null,$(x,b,I,X,null);Go(x,I)}return null}function q(b,x,L,I){for(var X=null,ne=null,re=x,ie=x=0,We=null;re!==null&&ie<L.length;ie++){re.index>ie?(We=re,re=null):We=re.sibling;var Se=T(b,re,L[ie],I);if(Se===null){re===null&&(re=We);break}e&&re&&Se.alternate===null&&t(b,re),x=s(Se,x,ie),ne===null?X=Se:ne.sibling=Se,ne=Se,re=We}if(ie===L.length)return n(b,re),Re&&zn(b,ie),X;if(re===null){for(;ie<L.length;ie++)re=A(b,L[ie],I),re!==null&&(x=s(re,x,ie),ne===null?X=re:ne.sibling=re,ne=re);return Re&&zn(b,ie),X}for(re=r(b,re);ie<L.length;ie++)We=G(re,b,ie,L[ie],I),We!==null&&(e&&We.alternate!==null&&re.delete(We.key===null?ie:We.key),x=s(We,x,ie),ne===null?X=We:ne.sibling=We,ne=We);return e&&re.forEach(function(fn){return t(b,fn)}),Re&&zn(b,ie),X}function J(b,x,L,I){var X=te(L);if(typeof X!="function")throw Error(i(150));if(L=X.call(L),L==null)throw Error(i(151));for(var ne=X=null,re=x,ie=x=0,We=null,Se=L.next();re!==null&&!Se.done;ie++,Se=L.next()){re.index>ie?(We=re,re=null):We=re.sibling;var fn=T(b,re,Se.value,I);if(fn===null){re===null&&(re=We);break}e&&re&&fn.alternate===null&&t(b,re),x=s(fn,x,ie),ne===null?X=fn:ne.sibling=fn,ne=fn,re=We}if(Se.done)return n(b,re),Re&&zn(b,ie),X;if(re===null){for(;!Se.done;ie++,Se=L.next())Se=A(b,Se.value,I),Se!==null&&(x=s(Se,x,ie),ne===null?X=Se:ne.sibling=Se,ne=Se);return Re&&zn(b,ie),X}for(re=r(b,re);!Se.done;ie++,Se=L.next())Se=G(re,b,ie,Se.value,I),Se!==null&&(e&&Se.alternate!==null&&re.delete(Se.key===null?ie:Se.key),x=s(Se,x,ie),ne===null?X=Se:ne.sibling=Se,ne=Se);return e&&re.forEach(function(vf){return t(b,vf)}),Re&&zn(b,ie),X}function Oe(b,x,L,I){if(typeof L=="object"&&L!==null&&L.type===W&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case pe:e:{for(var X=L.key,ne=x;ne!==null;){if(ne.key===X){if(X=L.type,X===W){if(ne.tag===7){n(b,ne.sibling),x=o(ne,L.props.children),x.return=b,b=x;break e}}else if(ne.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===ye&&dc(X)===ne.type){n(b,ne.sibling),x=o(ne,L.props),x.ref=Qr(b,ne,L),x.return=b,b=x;break e}n(b,ne);break}else t(b,ne);ne=ne.sibling}L.type===W?(x=Tn(L.props.children,b.mode,I,L.key),x.return=b,b=x):(I=ys(L.type,L.key,L.props,null,b.mode,I),I.ref=Qr(b,x,L),I.return=b,b=I)}return u(b);case B:e:{for(ne=L.key;x!==null;){if(x.key===ne)if(x.tag===4&&x.stateNode.containerInfo===L.containerInfo&&x.stateNode.implementation===L.implementation){n(b,x.sibling),x=o(x,L.children||[]),x.return=b,b=x;break e}else{n(b,x);break}else t(b,x);x=x.sibling}x=_i(L,b.mode,I),x.return=b,b=x}return u(b);case ye:return ne=L._init,Oe(b,x,ne(L._payload),I)}if(Qt(L))return q(b,x,L,I);if(te(L))return J(b,x,L,I);Go(b,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,x!==null&&x.tag===6?(n(b,x.sibling),x=o(x,L),x.return=b,b=x):(n(b,x),x=Si(L,b.mode,I),x.return=b,b=x),u(b)):n(b,x)}return Oe}var sr=fc(!0),hc=fc(!1),Yo=tn(null),qo=null,lr=null,Tl=null;function Fl(){Tl=lr=qo=null}function $l(e){var t=Yo.current;Me(Yo),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){qo=e,Tl=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(qo===null)throw Error(i(308));lr=e,qo.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var En=null;function Ol(e){En===null?En=[e]:En.push(e)}function mc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ol(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(be&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,Ol(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function vc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var o=e.updateQueue;on=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var g=h,_=g.next;g.next=null,u===null?s=_:u.next=_,u=g;var $=e.alternate;$!==null&&($=$.updateQueue,h=$.lastBaseUpdate,h!==u&&(h===null?$.firstBaseUpdate=_:h.next=_,$.lastBaseUpdate=g))}if(s!==null){var A=o.baseState;u=0,$=_=g=null,h=s;do{var T=h.lane,G=h.eventTime;if((r&T)===T){$!==null&&($=$.next={eventTime:G,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var q=e,J=h;switch(T=t,G=n,J.tag){case 1:if(q=J.payload,typeof q=="function"){A=q.call(G,A,T);break e}A=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,T=typeof q=="function"?q.call(G,A,T):q,T==null)break e;A=Z({},A,T);break e;case 2:on=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,T=o.effects,T===null?o.effects=[h]:T.push(h))}else G={eventTime:G,lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},$===null?(_=$=G,g=A):$=$.next=G,u|=T;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;T=h,h=T.next,T.next=null,o.lastBaseUpdate=T,o.shared.pending=null}}while(!0);if($===null&&(g=A),o.baseState=g,o.firstBaseUpdate=_,o.lastBaseUpdate=$,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);Nn|=u,e.lanes=u,e.memoizedState=A}}function xc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(i(191,o));o.call(r)}}}var Kr={},Pt=tn(Kr),Zr=tn(Kr),Gr=tn(Kr);function Cn(e){if(e===Kr)throw Error(i(174));return e}function Il(e,t){switch(Ne(Gr,t),Ne(Zr,e),Ne(Pt,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:j(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=j(t,e)}Me(Pt),Ne(Pt,t)}function ar(){Me(Pt),Me(Zr),Me(Gr)}function yc(e){Cn(Gr.current);var t=Cn(Pt.current),n=j(t,e.type);t!==n&&(Ne(Zr,e),Ne(Pt,n))}function Bl(e){Zr.current===e&&(Me(Pt),Me(Zr))}var Te=tn(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Ul(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var ts=ee.ReactCurrentDispatcher,Vl=ee.ReactCurrentBatchConfig,jn=0,Fe=null,Be=null,Ue=null,ns=!1,Yr=!1,qr=0,Od=0;function Ge(){throw Error(i(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Ql(e,t,n,r,o,s){if(jn=s,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ts.current=e===null||e.memoizedState===null?Hd:Ud,e=n(r,o),Yr){s=0;do{if(Yr=!1,qr=0,25<=s)throw Error(i(301));s+=1,Ue=Be=null,t.updateQueue=null,ts.current=Vd,e=n(r,o)}while(Yr)}if(ts.current=ss,t=Be!==null&&Be.next!==null,jn=0,Ue=Be=Fe=null,ns=!1,t)throw Error(i(300));return e}function Kl(){var e=qr!==0;return qr=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Fe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function mt(){if(Be===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ue===null?Fe.memoizedState:Ue.next;if(t!==null)Ue=t,Be=e;else{if(e===null)throw Error(i(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ue===null?Fe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Jr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=mt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=Be,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var h=u=null,g=null,_=s;do{var $=_.lane;if((jn&$)===$)g!==null&&(g=g.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var A={lane:$,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};g===null?(h=g=A,u=r):g=g.next=A,Fe.lanes|=$,Nn|=$}_=_.next}while(_!==null&&_!==s);g===null?u=r:g.next=h,bt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,Fe.lanes|=s,Nn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=mt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);bt(s,t.memoizedState)||(ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function wc(){}function kc(e,t){var n=Fe,r=mt(),o=t(),s=!bt(r.memoizedState,o);if(s&&(r.memoizedState=o,ot=!0),r=r.queue,Yl(Sc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Lc.bind(null,n,r,o,t),void 0,null),Ve===null)throw Error(i(349));(jn&30)!==0||bc(n,t,o)}return o}function bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lc(e,t,n,r){t.value=n,t.getSnapshot=r,_c(t)&&zc(e)}function Sc(e,t,n){return n(function(){_c(t)&&zc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function zc(e){var t=It(e,1);t!==null&&Et(t,e,1,-1)}function Ec(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bd.bind(null,Fe,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cc(){return mt().memoizedState}function rs(e,t,n,r){var o=Mt();Fe.flags|=e,o.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function os(e,t,n,r){var o=mt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var u=Be.memoizedState;if(s=u.destroy,r!==null&&Wl(r,u.deps)){o.memoizedState=Xr(t,n,s,r);return}}Fe.flags|=e,o.memoizedState=Xr(1|t,n,s,r)}function jc(e,t){return rs(8390656,8,e,t)}function Yl(e,t){return os(2048,8,e,t)}function Nc(e,t){return os(4,2,e,t)}function Pc(e,t){return os(4,4,e,t)}function Mc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,os(4,4,Mc.bind(null,t,e),n)}function ql(){}function Tc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $c(e,t,n){return(jn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(bt(n,t)||(n=da(),Fe.lanes|=n,Nn|=n,e.baseState=!0),t)}function Dd(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{Ee=n,Vl.transition=r}}function Ac(){return mt().memoizedState}function Id(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oc(e))Dc(t,n);else if(n=mc(e,t,n,r),n!==null){var o=et();Et(n,e,r,o),Ic(n,t,r)}}function Bd(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))Dc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,h=s(u,n);if(o.hasEagerState=!0,o.eagerState=h,bt(h,u)){var g=t.interleaved;g===null?(o.next=o,Ol(t)):(o.next=g.next,g.next=o),t.interleaved=o;return}}catch{}finally{}n=mc(e,t,o,r),n!==null&&(o=et(),Et(n,e,r,o),Ic(n,t,r))}}function Oc(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function Dc(e,t){Yr=ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ic(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var ss={readContext:ht,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Hd={readContext:ht,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:jc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rs(4194308,4,Mc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Id.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:ql,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=Dd.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,o=Mt();if(Re){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ve===null)throw Error(i(349));(jn&30)!==0||bc(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,jc(Sc.bind(null,r,s,e),[e]),r.flags|=2048,Xr(9,Lc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Ve.identifierPrefix;if(Re){var n=Dt,r=Ot;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Od++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ud={readContext:ht,useCallback:Tc,useContext:ht,useEffect:Yl,useImperativeHandle:Rc,useInsertionEffect:Nc,useLayoutEffect:Pc,useMemo:Fc,useReducer:Zl,useRef:Cc,useState:function(){return Zl(Jr)},useDebugValue:ql,useDeferredValue:function(e){var t=mt();return $c(t,Be.memoizedState,e)},useTransition:function(){var e=Zl(Jr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:Ac,unstable_isNewReconciler:!1},Vd={readContext:ht,useCallback:Tc,useContext:ht,useEffect:Yl,useImperativeHandle:Rc,useInsertionEffect:Nc,useLayoutEffect:Pc,useMemo:Fc,useReducer:Gl,useRef:Cc,useState:function(){return Gl(Jr)},useDebugValue:ql,useDeferredValue:function(e){var t=mt();return Be===null?t.memoizedState=e:$c(t,Be.memoizedState,e)},useTransition:function(){var e=Gl(Jr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:Ac,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ls={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=un(e),s=Bt(r,o);s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,o),t!==null&&(Et(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=un(e),s=Bt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,o),t!==null&&(Et(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=un(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=sn(e,o,r),t!==null&&(Et(t,e,r,n),Jo(t,e,r))}};function Bc(e,t,n,r,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,u):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(o,s):!0}function Hc(e,t,n){var r=!1,o=nn,s=t.contextType;return typeof s=="object"&&s!==null?s=ht(s):(o=rt(t)?Sn:Ze.current,r=t.contextTypes,s=(r=r!=null)?tr(e,o):nn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ls,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Dl(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=ht(s):(s=rt(t)?Sn:Ze.current,o.context=tr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Jl(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ls.enqueueReplaceState(o,o.state,null),Xo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=we(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wd=typeof WeakMap=="function"?WeakMap:Map;function Vc(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fs||(fs=!0,gi=r),ti(e,t)},n}function Wc(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ti(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ti(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sf.bind(null,e,t,n),t.then(e,e))}function Kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Qd=ee.ReactCurrentOwner,ot=!1;function Xe(e,t,n,r){t.child=e===null?hc(t,null,n,r):sr(t,e.child,n,r)}function Gc(e,t,n,r,o){n=n.render;var s=t.ref;return ir(t,o),r=Ql(e,t,n,r,s,o),n=Kl(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(Re&&n&&jl(t),t.flags|=1,Xe(e,t,r,o),t.child)}function Yc(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Li(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,qc(e,t,s,r,o)):(e=ys(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(u,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=dn(s,r),e.ref=t.ref,e.return=t,t.child=e}function qc(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Dr(s,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return ni(e,t,n,r,o)}function Jc(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(pr,pt),pt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(pr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ne(pr,pt),pt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ne(pr,pt),pt|=r;return Xe(e,t,o,n),t.child}function Xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ni(e,t,n,r,o){var s=rt(n)?Sn:Ze.current;return s=tr(t,s),ir(t,o),n=Ql(e,t,n,r,s,o),r=Kl(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(Re&&r&&jl(t),t.flags|=1,Xe(e,t,n,o),t.child)}function eu(e,t,n,r,o){if(rt(n)){var s=!0;Vo(t)}else s=!1;if(ir(t,o),t.stateNode===null)as(e,t),Hc(t,n,r),Xl(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,h=t.memoizedProps;u.props=h;var g=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=ht(_):(_=rt(n)?Sn:Ze.current,_=tr(t,_));var $=n.getDerivedStateFromProps,A=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function";A||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==r||g!==_)&&Uc(t,u,r,_),on=!1;var T=t.memoizedState;u.state=T,Xo(t,r,u,o),g=t.memoizedState,h!==r||T!==g||nt.current||on?(typeof $=="function"&&(Jl(t,n,$,r),g=t.memoizedState),(h=on||Bc(t,n,h,r,T,g,_))?(A||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),u.props=r,u.state=g,u.context=_,r=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,gc(e,t),h=t.memoizedProps,_=t.type===t.elementType?h:St(t.type,h),u.props=_,A=t.pendingProps,T=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=ht(g):(g=rt(n)?Sn:Ze.current,g=tr(t,g));var G=n.getDerivedStateFromProps;($=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==A||T!==g)&&Uc(t,u,r,g),on=!1,T=t.memoizedState,u.state=T,Xo(t,r,u,o);var q=t.memoizedState;h!==A||T!==q||nt.current||on?(typeof G=="function"&&(Jl(t,n,G,r),q=t.memoizedState),(_=on||Bc(t,n,_,r,T,q,g)||!1)?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,q,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,q,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=q),u.props=r,u.state=q,u.context=g,r=_):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),r=!1)}return ri(e,t,n,r,s,o)}function ri(e,t,n,r,o,s){Xc(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&sc(t,n,!1),Ht(e,t,s);r=t.stateNode,Qd.current=t;var h=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=sr(t,e.child,null,s),t.child=sr(t,null,h,s)):Xe(e,t,h,s),t.memoizedState=r.state,o&&sc(t,n,!0),t.child}function tu(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),Il(e,t.containerInfo)}function nu(e,t,n,r,o){return or(),Rl(o),t.flags|=256,Xe(e,t,n,r),t.child}var oi={dehydrated:null,treeContext:null,retryLane:0};function si(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,t,n){var r=t.pendingProps,o=Te.current,s=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ne(Te,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,s?(r=t.mode,s=t.child,u={mode:"hidden",children:u},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=ws(u,r,0,null),e=Tn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=si(n),t.memoizedState=oi,e):li(t,u));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return Kd(e,t,u,r,h,o,n);if(s){s=r.fallback,u=t.mode,o=e.child,h=o.sibling;var g={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=dn(o,g),r.subtreeFlags=o.subtreeFlags&14680064),h!==null?s=dn(h,s):(s=Tn(s,u,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,u=e.child.memoizedState,u=u===null?si(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~n,t.memoizedState=oi,r}return s=e.child,e=s.sibling,r=dn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function li(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function is(e,t,n,r){return r!==null&&Rl(r),sr(t,e.child,null,n),e=li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kd(e,t,n,r,o,s,u){if(n)return t.flags&256?(t.flags&=-257,r=ei(Error(i(422))),is(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=ws({mode:"visible",children:r.children},o,0,null),s=Tn(s,o,u,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&sr(t,e.child,null,u),t.child.memoizedState=si(u),t.memoizedState=oi,s);if((t.mode&1)===0)return is(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;return r=h,s=Error(i(419)),r=ei(s,r,void 0),is(e,t,u,r)}if(h=(u&e.childLanes)!==0,ot||h){if(r=Ve,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,It(e,o),Et(r,e,o,-1))}return bi(),r=ei(Error(i(421))),is(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=lf.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,ut=en(o.nextSibling),ct=t,Re=!0,Lt=null,e!==null&&(dt[ft++]=Ot,dt[ft++]=Dt,dt[ft++]=_n,Ot=e.id,Dt=e.overflow,_n=t),t=li(t,r.children),t.flags|=4096,t)}function ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function ii(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function su(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Xe(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,n,t);else if(e.tag===19)ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ii(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&es(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ii(t,!0,n,null,s);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function as(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zd(e,t,n){switch(t.tag){case 3:tu(t),or();break;case 5:yc(t);break;case 1:rt(t.type)&&Vo(t);break;case 4:Il(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ne(Yo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ru(e,t,n):(Ne(Te,Te.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);Ne(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return su(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ne(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Jc(e,t,n)}return Ht(e,t,n)}var lu,ai,iu,au;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ai=function(){},iu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Cn(Pt.current);var s=null;switch(n){case"input":o=wr(e,o),r=wr(e,r),s=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":o=kr(e,o),r=kr(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}Hs(n,r);var u;n=null;for(_ in o)if(!r.hasOwnProperty(_)&&o.hasOwnProperty(_)&&o[_]!=null)if(_==="style"){var h=o[_];for(u in h)h.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(p.hasOwnProperty(_)?s||(s=[]):(s=s||[]).push(_,null));for(_ in r){var g=r[_];if(h=o!=null?o[_]:void 0,r.hasOwnProperty(_)&&g!==h&&(g!=null||h!=null))if(_==="style")if(h){for(u in h)!h.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&h[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(s||(s=[]),s.push(_,n)),n=g;else _==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(s=s||[]).push(_,g)):_==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(_,""+g):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(p.hasOwnProperty(_)?(g!=null&&_==="onScroll"&&Pe("scroll",e),s||h===g||(s=[])):(s=s||[]).push(_,g))}n&&(s=s||[]).push("style",n);var _=s;(t.updateQueue=_)&&(t.flags|=4)}},au=function(e,t,n,r){n!==r&&(t.flags|=4)};function eo(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gd(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&Uo(),Ye(t),null;case 3:return r=t.stateNode,ar(),Me(nt),Me(Ze),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(yi(Lt),Lt=null))),ai(e,t),Ye(t),null;case 5:Bl(t);var o=Cn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)iu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ye(t),null}if(e=Cn(Pt.current),Zo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Nt]=t,r[Vr]=s,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(o=0;o<Br.length;o++)Pe(Br[o],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":mo(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":br(r,s),Pe("invalid",r)}Hs(n,s),o=null;for(var u in s)if(s.hasOwnProperty(u)){var h=s[u];u==="children"?typeof h=="string"?r.textContent!==h&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,h,e),o=["children",h]):typeof h=="number"&&r.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,h,e),o=["children",""+h]):p.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Wt(r),go(r,s,!0);break;case"textarea":Wt(r),vo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=y(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Nt]=t,e[Vr]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Us(n,r),n){case"dialog":Pe("cancel",e),Pe("close",e),o=r;break;case"iframe":case"object":case"embed":Pe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Br.length;o++)Pe(Br[o],e);o=r;break;case"source":Pe("error",e),o=r;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),o=r;break;case"details":Pe("toggle",e),o=r;break;case"input":mo(e,r),o=wr(e,r),Pe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),Pe("invalid",e);break;case"textarea":br(e,r),o=kr(e,r),Pe("invalid",e);break;default:o=r}Hs(n,o),h=o;for(s in h)if(h.hasOwnProperty(s)){var g=h[s];s==="style"?xo(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&xe(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&de(e,g):typeof g=="number"&&de(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?g!=null&&s==="onScroll"&&Pe("scroll",e):g!=null&&se(e,s,g,u))}switch(n){case"input":Wt(e),go(e,r,!1);break;case"textarea":Wt(e),vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_e(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Kt(e,!!r.multiple,s,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(i(166));if(n=Cn(Gr.current),Cn(Pt.current),Zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(s=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Me(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pc(),or(),t.flags|=98560,s=!1;else if(s=Zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(i(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));s[Nt]=t}else or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),s=!1}else Lt!==null&&(yi(Lt),Lt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?He===0&&(He=3):bi())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return ar(),ai(e,t),e===null&&Hr(t.stateNode.containerInfo),Ye(t),null;case 10:return $l(t.type._context),Ye(t),null;case 17:return rt(t.type)&&Uo(),Ye(t),null;case 19:if(Me(Te),s=t.memoizedState,s===null)return Ye(t),null;if(r=(t.flags&128)!==0,u=s.rendering,u===null)if(r)eo(s,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=es(e),u!==null){for(t.flags|=128,eo(s,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Te,Te.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ae()>dr&&(t.flags|=128,r=!0,eo(s,!1),t.lanes=4194304)}else{if(!r)if(e=es(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Re)return Ye(t),null}else 2*Ae()-s.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,eo(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(n=s.last,n!==null?n.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ae(),t.sibling=null,n=Te.current,Ne(Te,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return ki(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Yd(e,t){switch(Nl(t),t.tag){case 1:return rt(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),Me(nt),Me(Ze),Ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bl(t),null;case 13:if(Me(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Te),null;case 4:return ar(),null;case 10:return $l(t.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var cs=!1,qe=!1,qd=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function ci(e,t,n){try{n()}catch(r){$e(e,t,r)}}var cu=!1;function Jd(e,t){if(kl=jo,e=Ba(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,h=-1,g=-1,_=0,$=0,A=e,T=null;t:for(;;){for(var G;A!==n||o!==0&&A.nodeType!==3||(h=u+o),A!==s||r!==0&&A.nodeType!==3||(g=u+r),A.nodeType===3&&(u+=A.nodeValue.length),(G=A.firstChild)!==null;)T=A,A=G;for(;;){if(A===e)break t;if(T===n&&++_===o&&(h=u),T===s&&++$===r&&(g=u),(G=A.nextSibling)!==null)break;A=T,T=A.parentNode}A=G}n=h===-1||g===-1?null:{start:h,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},jo=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var J=q.memoizedProps,Oe=q.memoizedState,b=t.stateNode,x=b.getSnapshotBeforeUpdate(t.elementType===t.type?J:St(t.type,J),Oe);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(I){$e(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return q=cu,cu=!1,q}function to(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ci(t,n,s)}o=o.next}while(o!==r)}}function us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uu(e){var t=e.alternate;t!==null&&(e.alternate=null,uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Vr],delete t[zl],delete t[Td],delete t[Fd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pu(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(di(e,t,n),e=e.sibling;e!==null;)di(e,t,n),e=e.sibling}var Qe=null,_t=!1;function ln(e,t,n){for(n=n.child;n!==null;)fu(e,t,n),n=n.sibling}function fu(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 5:qe||ur(n,t);case 6:var r=Qe,o=_t;Qe=null,ln(e,t,n),Qe=r,_t=o,Qe!==null&&(_t?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(_t?(e=Qe,n=n.stateNode,e.nodeType===8?_l(e.parentNode,n):e.nodeType===1&&_l(e,n),Rr(e)):_l(Qe,n.stateNode));break;case 4:r=Qe,o=_t,Qe=n.stateNode.containerInfo,_t=!0,ln(e,t,n),Qe=r,_t=o;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&ci(n,t,u),o=o.next}while(o!==r)}ln(e,t,n);break;case 1:if(!qe&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(h){$e(n,t,h)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,ln(e,t,n),qe=r):ln(e,t,n);break;default:ln(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qd),t.forEach(function(r){var o=af.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 5:Qe=h.stateNode,_t=!1;break e;case 3:Qe=h.stateNode.containerInfo,_t=!0;break e;case 4:Qe=h.stateNode.containerInfo,_t=!0;break e}h=h.return}if(Qe===null)throw Error(i(160));fu(s,u,o),Qe=null,_t=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(_){$e(o,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Rt(e),r&4){try{to(3,e,e.return),us(3,e)}catch(J){$e(e,e.return,J)}try{to(5,e,e.return)}catch(J){$e(e,e.return,J)}}break;case 1:zt(t,e),Rt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(zt(t,e),Rt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var o=e.stateNode;try{de(o,"")}catch(J){$e(e,e.return,J)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,u=n!==null?n.memoizedProps:s,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&Bn(o,s),Us(h,u);var _=Us(h,s);for(u=0;u<g.length;u+=2){var $=g[u],A=g[u+1];$==="style"?xo(o,A):$==="dangerouslySetInnerHTML"?xe(o,A):$==="children"?de(o,A):se(o,$,A,_)}switch(h){case"input":Hn(o,s);break;case"textarea":Lr(o,s);break;case"select":var T=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var G=s.value;G!=null?Kt(o,!!s.multiple,G,!1):T!==!!s.multiple&&(s.defaultValue!=null?Kt(o,!!s.multiple,s.defaultValue,!0):Kt(o,!!s.multiple,s.multiple?[]:"",!1))}o[Vr]=s}catch(J){$e(e,e.return,J)}}break;case 6:if(zt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(i(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(J){$e(e,e.return,J)}}break;case 3:if(zt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(J){$e(e,e.return,J)}break;case 4:zt(t,e),Rt(e);break;case 13:zt(t,e),Rt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(mi=Ae())),r&4&&hu(e);break;case 22:if($=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(_=qe)||$,zt(t,e),qe=_):zt(t,e),Rt(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!$&&(e.mode&1)!==0)for(Y=e,$=e.child;$!==null;){for(A=Y=$;Y!==null;){switch(T=Y,G=T.child,T.tag){case 0:case 11:case 14:case 15:to(4,T,T.return);break;case 1:ur(T,T.return);var q=T.stateNode;if(typeof q.componentWillUnmount=="function"){r=T,n=T.return;try{t=r,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(J){$e(r,n,J)}}break;case 5:ur(T,T.return);break;case 22:if(T.memoizedState!==null){xu(A);continue}}G!==null?(G.return=T,Y=G):xu(A)}$=$.sibling}e:for($=null,A=e;;){if(A.tag===5){if($===null){$=A;try{o=A.stateNode,_?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=A.stateNode,g=A.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=Ft("display",u))}catch(J){$e(e,e.return,J)}}}else if(A.tag===6){if($===null)try{A.stateNode.nodeValue=_?"":A.memoizedProps}catch(J){$e(e,e.return,J)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;$===A&&($=null),A=A.return}$===A&&($=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:zt(t,e),Rt(e),r&4&&hu(e);break;case 21:break;default:zt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pu(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(de(o,""),r.flags&=-33);var s=du(e);di(e,s,o);break;case 3:case 4:var u=r.stateNode.containerInfo,h=du(e);pi(e,h,u);break;default:throw Error(i(161))}}catch(g){$e(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xd(e,t,n){Y=e,gu(e)}function gu(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,s=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||cs;if(!u){var h=o.alternate,g=h!==null&&h.memoizedState!==null||qe;h=cs;var _=qe;if(cs=u,(qe=g)&&!_)for(Y=o;Y!==null;)u=Y,g=u.child,u.tag===22&&u.memoizedState!==null?yu(o):g!==null?(g.return=u,Y=g):yu(o);for(;s!==null;)Y=s,gu(s),s=s.sibling;Y=o,cs=h,qe=_}vu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,Y=s):vu(e)}}function vu(e){for(;Y!==null;){var t=Y;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&xc(t,s,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xc(t,u,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var $=_.memoizedState;if($!==null){var A=$.dehydrated;A!==null&&Rr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}qe||t.flags&512&&ui(t)}catch(T){$e(t,t.return,T)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function xu(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function yu(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{us(4,t)}catch(g){$e(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(g){$e(t,o,g)}}var s=t.return;try{ui(t)}catch(g){$e(t,s,g)}break;case 5:var u=t.return;try{ui(t)}catch(g){$e(t,u,g)}}}catch(g){$e(t,t.return,g)}if(t===e){Y=null;break}var h=t.sibling;if(h!==null){h.return=t.return,Y=h;break}Y=t.return}}var ef=Math.ceil,ps=ee.ReactCurrentDispatcher,fi=ee.ReactCurrentOwner,gt=ee.ReactCurrentBatchConfig,be=0,Ve=null,De=null,Ke=0,pt=0,pr=tn(0),He=0,no=null,Nn=0,ds=0,hi=0,ro=null,st=null,mi=0,dr=1/0,Ut=null,fs=!1,gi=null,an=null,hs=!1,cn=null,ms=0,oo=0,vi=null,gs=-1,vs=0;function et(){return(be&6)!==0?Ae():gs!==-1?gs:gs=Ae()}function un(e){return(e.mode&1)===0?1:(be&2)!==0&&Ke!==0?Ke&-Ke:Ad.transition!==null?(vs===0&&(vs=da()),vs):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:ka(e.type)),e)}function Et(e,t,n,r){if(50<oo)throw oo=0,vi=null,Error(i(185));Cr(e,n,r),((be&2)===0||e!==Ve)&&(e===Ve&&((be&2)===0&&(ds|=n),He===4&&pn(e,Ke)),lt(e,r),n===1&&be===0&&(t.mode&1)===0&&(dr=Ae()+500,Wo&&rn()))}function lt(e,t){var n=e.callbackNode;Ap(e,t);var r=zo(e,e===Ve?Ke:0);if(r===0)n!==null&&ca(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ca(n),t===1)e.tag===0?$d(ku.bind(null,e)):lc(ku.bind(null,e)),Md(function(){(be&6)===0&&rn()}),n=null;else{switch(fa(r)){case 1:n=Ys;break;case 4:n=ua;break;case 16:n=bo;break;case 536870912:n=pa;break;default:n=bo}n=ju(n,wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wu(e,t){if(gs=-1,vs=0,(be&6)!==0)throw Error(i(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=zo(e,e===Ve?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xs(e,r);else{t=r;var o=be;be|=2;var s=Lu();(Ve!==e||Ke!==t)&&(Ut=null,dr=Ae()+500,Mn(e,t));do try{rf();break}catch(h){bu(e,h)}while(!0);Fl(),ps.current=s,be=o,De!==null?t=0:(Ve=null,Ke=0,t=He)}if(t!==0){if(t===2&&(o=qs(e),o!==0&&(r=o,t=xi(e,o))),t===1)throw n=no,Mn(e,0),pn(e,r),lt(e,Ae()),n;if(t===6)pn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!tf(o)&&(t=xs(e,r),t===2&&(s=qs(e),s!==0&&(r=s,t=xi(e,s))),t===1))throw n=no,Mn(e,0),pn(e,r),lt(e,Ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:Rn(e,st,Ut);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=mi+500-Ae(),10<t)){if(zo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(Rn.bind(null,e,st,Ut),t);break}Rn(e,st,Ut);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-kt(r);s=1<<u,u=t[u],u>o&&(o=u),r&=~s}if(r=o,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ef(r/1960))-r,10<r){e.timeoutHandle=Sl(Rn.bind(null,e,st,Ut),r);break}Rn(e,st,Ut);break;case 5:Rn(e,st,Ut);break;default:throw Error(i(329))}}}return lt(e,Ae()),e.callbackNode===n?wu.bind(null,e):null}function xi(e,t){var n=ro;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=xs(e,t),e!==2&&(t=st,st=n,t!==null&&yi(t)),e}function yi(e){st===null?st=e:st.push.apply(st,e)}function tf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!bt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~hi,t&=~ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function ku(e){if((be&6)!==0)throw Error(i(327));fr();var t=zo(e,0);if((t&1)===0)return lt(e,Ae()),null;var n=xs(e,t);if(e.tag!==0&&n===2){var r=qs(e);r!==0&&(t=r,n=xi(e,r))}if(n===1)throw n=no,Mn(e,0),pn(e,t),lt(e,Ae()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,st,Ut),lt(e,Ae()),null}function wi(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(dr=Ae()+500,Wo&&rn())}}function Pn(e){cn!==null&&cn.tag===0&&(be&6)===0&&fr();var t=be;be|=1;var n=gt.transition,r=Ee;try{if(gt.transition=null,Ee=1,e)return e()}finally{Ee=r,gt.transition=n,be=t,(be&6)===0&&rn()}}function ki(){pt=pr.current,Me(pr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pd(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:ar(),Me(nt),Me(Ze),Ul();break;case 5:Bl(r);break;case 4:ar();break;case 13:Me(Te);break;case 19:Me(Te);break;case 10:$l(r.type._context);break;case 22:case 23:ki()}n=n.return}if(Ve=e,De=e=dn(e.current,null),Ke=pt=t,He=0,no=null,hi=ds=Nn=0,st=ro=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var u=s.next;s.next=o,r.next=u}n.pending=r}En=null}return e}function bu(e,t){do{var n=De;try{if(Fl(),ts.current=ss,ns){for(var r=Fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ns=!1}if(jn=0,Ue=Be=Fe=null,Yr=!1,qr=0,fi.current=null,n===null||n.return===null){He=1,no=t,De=null;break}e:{var s=e,u=n.return,h=n,g=t;if(t=Ke,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=g,$=h,A=$.tag;if(($.mode&1)===0&&(A===0||A===11||A===15)){var T=$.alternate;T?($.updateQueue=T.updateQueue,$.memoizedState=T.memoizedState,$.lanes=T.lanes):($.updateQueue=null,$.memoizedState=null)}var G=Kc(u);if(G!==null){G.flags&=-257,Zc(G,u,h,s,t),G.mode&1&&Qc(s,_,t),t=G,g=_;var q=t.updateQueue;if(q===null){var J=new Set;J.add(g),t.updateQueue=J}else q.add(g);break e}else{if((t&1)===0){Qc(s,_,t),bi();break e}g=Error(i(426))}}else if(Re&&h.mode&1){var Oe=Kc(u);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Zc(Oe,u,h,s,t),Rl(cr(g,h));break e}}s=g=cr(g,h),He!==4&&(He=2),ro===null?ro=[s]:ro.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var b=Vc(s,g,t);vc(s,b);break e;case 1:h=g;var x=s.type,L=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(an===null||!an.has(L)))){s.flags|=65536,t&=-t,s.lanes|=t;var I=Wc(s,h,t);vc(s,I);break e}}s=s.return}while(s!==null)}_u(n)}catch(X){t=X,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Lu(){var e=ps.current;return ps.current=ss,e===null?ss:e}function bi(){(He===0||He===3||He===2)&&(He=4),Ve===null||(Nn&268435455)===0&&(ds&268435455)===0||pn(Ve,Ke)}function xs(e,t){var n=be;be|=2;var r=Lu();(Ve!==e||Ke!==t)&&(Ut=null,Mn(e,t));do try{nf();break}catch(o){bu(e,o)}while(!0);if(Fl(),be=n,ps.current=r,De!==null)throw Error(i(261));return Ve=null,Ke=0,He}function nf(){for(;De!==null;)Su(De)}function rf(){for(;De!==null&&!Cp();)Su(De)}function Su(e){var t=Cu(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?_u(e):De=t,fi.current=null}function _u(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Gd(n,t,pt),n!==null){De=n;return}}else{if(n=Yd(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);He===0&&(He=5)}function Rn(e,t,n){var r=Ee,o=gt.transition;try{gt.transition=null,Ee=1,of(e,t,n,r)}finally{gt.transition=o,Ee=r}return null}function of(e,t,n,r){do fr();while(cn!==null);if((be&6)!==0)throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Op(e,s),e===Ve&&(De=Ve=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||hs||(hs=!0,ju(bo,function(){return fr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var u=Ee;Ee=1;var h=be;be|=4,fi.current=null,Jd(e,n),mu(n,e),Sd(bl),jo=!!kl,bl=kl=null,e.current=n,Xd(n),jp(),be=h,Ee=u,gt.transition=s}else e.current=n;if(hs&&(hs=!1,cn=e,ms=o),s=e.pendingLanes,s===0&&(an=null),Mp(n.stateNode),lt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fs)throw fs=!1,e=gi,gi=null,e;return(ms&1)!==0&&e.tag!==0&&fr(),s=e.pendingLanes,(s&1)!==0?e===vi?oo++:(oo=0,vi=e):oo=0,rn(),null}function fr(){if(cn!==null){var e=fa(ms),t=gt.transition,n=Ee;try{if(gt.transition=null,Ee=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ms=0,(be&6)!==0)throw Error(i(331));var o=be;for(be|=4,Y=e.current;Y!==null;){var s=Y,u=s.child;if((Y.flags&16)!==0){var h=s.deletions;if(h!==null){for(var g=0;g<h.length;g++){var _=h[g];for(Y=_;Y!==null;){var $=Y;switch($.tag){case 0:case 11:case 15:to(8,$,s)}var A=$.child;if(A!==null)A.return=$,Y=A;else for(;Y!==null;){$=Y;var T=$.sibling,G=$.return;if(uu($),$===_){Y=null;break}if(T!==null){T.return=G,Y=T;break}Y=G}}}var q=s.alternate;if(q!==null){var J=q.child;if(J!==null){q.child=null;do{var Oe=J.sibling;J.sibling=null,J=Oe}while(J!==null)}}Y=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,Y=u;else e:for(;Y!==null;){if(s=Y,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Y=b;break e}Y=s.return}}var x=e.current;for(Y=x;Y!==null;){u=Y;var L=u.child;if((u.subtreeFlags&2064)!==0&&L!==null)L.return=u,Y=L;else e:for(u=x;Y!==null;){if(h=Y,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:us(9,h)}}catch(X){$e(h,h.return,X)}if(h===u){Y=null;break e}var I=h.sibling;if(I!==null){I.return=h.return,Y=I;break e}Y=h.return}}if(be=o,rn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Lo,e)}catch{}r=!0}return r}finally{Ee=n,gt.transition=t}}return!1}function zu(e,t,n){t=cr(n,t),t=Vc(e,t,1),e=sn(e,t,1),t=et(),e!==null&&(Cr(e,1,t),lt(e,t))}function $e(e,t,n){if(e.tag===3)zu(e,e,n);else for(;t!==null;){if(t.tag===3){zu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=cr(n,e),e=Wc(t,e,1),t=sn(t,e,1),e=et(),t!==null&&(Cr(t,1,e),lt(t,e));break}}t=t.return}}function sf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ke&n)===n&&(He===4||He===3&&(Ke&130023424)===Ke&&500>Ae()-mi?Mn(e,0):hi|=n),lt(e,t)}function Eu(e,t){t===0&&((e.mode&1)===0?t=1:(t=_o,_o<<=1,(_o&130023424)===0&&(_o=4194304)));var n=et();e=It(e,t),e!==null&&(Cr(e,t,n),lt(e,n))}function lf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eu(e,n)}function af(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}r!==null&&r.delete(t),Eu(e,n)}var Cu;Cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,Zd(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Re&&(t.flags&1048576)!==0&&ic(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;as(e,t),e=t.pendingProps;var o=tr(t,Ze.current);ir(t,n),o=Ql(null,t,r,e,o,n);var s=Kl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(s=!0,Vo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Dl(t),o.updater=ls,t.stateNode=o,o._reactInternals=t,Xl(t,r,e,n),t=ri(null,t,r,!0,s,n)):(t.tag=0,Re&&s&&jl(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(as(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=uf(r),e=St(r,e),o){case 0:t=ni(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=Gc(null,t,r,e,n);break e;case 14:t=Yc(null,t,r,St(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),ni(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),eu(e,t,r,o,n);case 3:e:{if(tu(t),e===null)throw Error(i(387));r=t.pendingProps,s=t.memoizedState,o=s.element,gc(e,t),Xo(t,r,null,n);var u=t.memoizedState;if(r=u.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=cr(Error(i(423)),t),t=nu(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(i(424)),t),t=nu(e,t,r,n,o);break e}else for(ut=en(t.stateNode.containerInfo.firstChild),ct=t,Re=!0,Lt=null,n=hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===o){t=Ht(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return yc(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,u=o.children,Ll(r,o)?u=null:s!==null&&Ll(r,s)&&(t.flags|=32),Xc(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return ru(e,t,n);case 4:return Il(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Gc(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,u=o.value,Ne(Yo,r._currentValue),r._currentValue=u,s!==null)if(bt(s.value,u)){if(s.children===o.children&&!nt.current){t=Ht(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var h=s.dependencies;if(h!==null){u=s.child;for(var g=h.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=Bt(-1,n&-n),g.tag=2;var _=s.updateQueue;if(_!==null){_=_.shared;var $=_.pending;$===null?g.next=g:(g.next=$.next,$.next=g),_.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Al(s.return,n,t),h.lanes|=n;break}g=g.next}}else if(s.tag===10)u=s.type===t.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(i(341));u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),Al(u,n,t),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===t){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ir(t,n),o=ht(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=St(r,t.pendingProps),o=St(r.type,o),Yc(e,t,r,o,n);case 15:return qc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),as(e,t),t.tag=1,rt(r)?(e=!0,Vo(t)):e=!1,ir(t,n),Hc(t,r,o),Xl(t,r,o,n),ri(null,t,r,!0,e,n);case 19:return su(e,t,n);case 22:return Jc(e,t,n)}throw Error(i(156,t.tag))};function ju(e,t){return aa(e,t)}function cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new cf(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uf(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===je)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ys(e,t,n,r,o,s){var u=2;if(r=e,typeof e=="function")Li(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case W:return Tn(n.children,o,s,t);case fe:u=8,o|=8;break;case me:return e=vt(12,n,t,o|2),e.elementType=me,e.lanes=s,e;case K:return e=vt(13,n,t,o),e.elementType=K,e.lanes=s,e;case U:return e=vt(19,n,t,o),e.elementType=U,e.lanes=s,e;case ge:return ws(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:u=10;break e;case ae:u=9;break e;case D:u=11;break e;case je:u=14;break e;case ye:u=16,r=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=vt(u,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Tn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ws(e,t,n,r){return e=vt(22,e,r,t),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function Si(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function _i(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zi(e,t,n,r,o,s,u,h,g){return e=new pf(e,t,n,h,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(s),e}function df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return nn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(rt(n))return oc(e,n,t)}return t}function Pu(e,t,n,r,o,s,u,h,g){return e=zi(n,r,!0,e,o,s,u,h,g),e.context=Nu(null),n=e.current,r=et(),o=un(n),s=Bt(r,o),s.callback=t??null,sn(n,s,o),e.current.lanes=o,Cr(e,o,r),lt(e,r),e}function ks(e,t,n,r){var o=t.current,s=et(),u=un(o);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(s,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(o,t,u),e!==null&&(Et(e,o,u,s),Jo(e,o,u)),u}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ei(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function ff(){return null}var Ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ci(e){this._internalRoot=e}Ls.prototype.render=Ci.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));ks(e,t,null,null)},Ls.prototype.unmount=Ci.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){ks(null,e,null,null)}),t[$t]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=ga();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&ya(e)}};function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function hf(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var _=bs(u);s.call(_)}}var u=Pu(t,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=u,e[$t]=u.current,Hr(e.nodeType===8?e.parentNode:e),Pn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var h=r;r=function(){var _=bs(g);h.call(_)}}var g=zi(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=g,e[$t]=g.current,Hr(e.nodeType===8?e.parentNode:e),Pn(function(){ks(t,g,n,r)}),g}function _s(e,t,n,r,o){var s=n._reactRootContainer;if(s){var u=s;if(typeof o=="function"){var h=o;o=function(){var g=bs(u);h.call(g)}}ks(t,u,e,o)}else u=hf(n,t,e,o,r);return bs(u)}ha=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Er(t.pendingLanes);n!==0&&(Xs(t,n|1),lt(t,Ae()),(be&6)===0&&(dr=Ae()+500,rn()))}break;case 13:Pn(function(){var r=It(e,1);if(r!==null){var o=et();Et(r,e,1,o)}}),Ei(e,1)}},el=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=et();Et(t,e,134217728,n)}Ei(e,134217728)}},ma=function(e){if(e.tag===13){var t=un(e),n=It(e,t);if(n!==null){var r=et();Et(n,e,t,r)}Ei(e,t)}},ga=function(){return Ee},va=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}},Qs=function(e,t,n){switch(t){case"input":if(Hn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ho(r);if(!o)throw Error(i(90));ho(r),Hn(r,o)}}}break;case"textarea":Lr(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}},ta=wi,na=Pn;var mf={usingClientEntryPoint:!1,Events:[Wr,Xn,Ho,Xi,ea,wi]},so={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gf={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=la(e),e===null?null:e.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{Lo=zs.inject(gf),jt=zs}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mf,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ji(t))throw Error(i(200));return df(e,t,null,n)},it.createRoot=function(e,t){if(!ji(e))throw Error(i(299));var n=!1,r="",o=Ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zi(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,Hr(e.nodeType===8?e.parentNode:e),new Ci(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=la(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return Pn(e)},it.hydrate=function(e,t,n){if(!Ss(t))throw Error(i(200));return _s(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!ji(e))throw Error(i(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",u=Ru;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Pu(t,null,e,1,n??null,o,!1,s,u),e[$t]=t.current,Hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ls(t)},it.render=function(e,t,n){if(!Ss(t))throw Error(i(200));return _s(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!Ss(e))throw Error(i(40));return e._reactRootContainer?(Pn(function(){_s(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},it.unstable_batchedUpdates=wi,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ss(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return _s(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var Hu;function _f(){if(Hu)return Mi.exports;Hu=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Mi.exports=Sf(),Mi.exports}var Uu;function zf(){if(Uu)return Es;Uu=1;var l=_f();return Es.createRoot=l.createRoot,Es.hydrateRoot=l.hydrateRoot,Es}var Ef=zf();const Cf=xf(Ef),jf="modulepreload",Nf=function(l,a){return new URL(l,a).href},Vu={},Cs=function(a,i,c){let p=Promise.resolve();if(i&&i.length>0){let m=function(C){return Promise.all(C.map(z=>Promise.resolve(z).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};const v=document.getElementsByTagName("link"),k=document.querySelector("meta[property=csp-nonce]"),E=(k==null?void 0:k.nonce)||(k==null?void 0:k.getAttribute("nonce"));p=m(i.map(C=>{if(C=Nf(C,c),C in Vu)return;Vu[C]=!0;const z=C.endsWith(".css"),N=z?'[rel="stylesheet"]':"";if(!!c)for(let O=v.length-1;O>=0;O--){const Q=v[O];if(Q.href===C&&(!z||Q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${C}"]${N}`))return;const V=document.createElement("link");if(V.rel=z?"stylesheet":jf,z||(V.as="script"),V.crossOrigin="",V.href=C,E&&V.setAttribute("nonce",E),document.head.appendChild(V),z)return new Promise((O,Q)=>{V.addEventListener("load",O),V.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${C}`)))})}))}function f(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return p.then(m=>{for(const v of m||[])v.status==="rejected"&&f(v.reason);return a().catch(f)})},Bi={toggle:()=>Cs(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>Cs(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>Cs(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>Cs(()=>import("./press-h_enDfSn.js"),[],import.meta.url)};let hr=null,Wu=!1;const ip=new Set,Fs=new Map,js=new Map;function Qi(){if(hr)return hr;const l=window.AudioContext||window.webkitAudioContext;return l?(hr=new l,hr):null}function Ki(l){if(Fs.has(l))return Promise.resolve(Fs.get(l));if(js.has(l))return js.get(l);const a=Qi();if(!a||!Bi[l])return Promise.resolve(null);const i=Bi[l]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>a.decodeAudioData(c)).then(c=>(Fs.set(l,c),c)).catch(()=>null).finally(()=>js.delete(l));return js.set(l,i),i}function Pf(){const l=Qi();l&&(l.state==="suspended"&&l.resume(),ip.forEach(Ki))}function Mf(l){if(typeof window>"u"||!Bi[l])return;if(ip.add(l),hr&&hr.state!=="suspended"){Ki(l);return}if(Wu)return;Wu=!0;const a={capture:!0,passive:!0},i=()=>{window.removeEventListener("pointerdown",i,a),window.removeEventListener("keydown",i,a),Pf()};window.addEventListener("pointerdown",i,a),window.addEventListener("keydown",i,a)}const Rf=120;function Tf(l,a=1){if(typeof window>"u"||a<=0)return;const i=Qi();if(!i)return;i.state==="suspended"&&i.resume();const c=Fs.get(l);if(!c){const p=performance.now();Ki(l).then(f=>{f&&performance.now()-p<=Rf&&Qu(i,f,a)});return}Qu(i,c,a)}function Qu(l,a,i){const c=l.createBufferSource(),p=l.createGain();p.gain.value=Math.min(1,i),c.buffer=a,c.connect(p).connect(l.destination),c.start()}const ap=.7,cp=S.createContext({enabled:!0,volume:ap});function Ff({enabled:l=!0,volume:a=ap,children:i}){return d.jsx(cp.Provider,{value:{enabled:l,volume:a},children:i})}function Is(l,a=!0){const{enabled:i,volume:c}=S.useContext(cp),p=i&&a;return S.useEffect(()=>{p&&Mf(l)},[l,p]),S.useCallback(()=>{p&&Tf(l,c)},[l,p,c])}const $f=`/* ============================================================
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
  --sc-color-stepper-key: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-stepper-key-hover: var(--sc-color-control-key-hover-fill);
  --sc-color-stepper-key-hover-ink: var(--sc-color-control-key-hover-ink);
  --sc-color-stepper-key-pressed: var(--sc-color-brand-accent-deep);
  --sc-color-stepper-key-pressed-ink: var(--sc-color-text-on-accent);
  --sc-color-stepper-key-shade: rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-shadow-stepper-track: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-stepper-key: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-stepper-key-hover: var(--sc-shadow-control-key-hover);
  --sc-shadow-stepper-key-pressed: var(--sc-shadow-control-key-pressed);
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
  --sc-motion-stepper-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-stepper-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-stepper-glyph-press-scale: 1;
  --sc-motion-stepper-roll: 0;
  --sc-motion-stepper-stretch: 0;
  --sc-motion-stepper-squash: 0;
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
  --sc-color-stepper-key: rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-color-stepper-key-hover: var(--sc-color-control-key-hover-fill);
  --sc-color-stepper-key-hover-ink: var(--sc-color-control-key-hover-ink);
  --sc-color-stepper-key-pressed: var(--sc-color-brand-accent-deep);
  --sc-color-stepper-key-pressed-ink: var(--sc-color-text-on-accent);
  --sc-color-stepper-key-shade: rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-shadow-stepper-track: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-stepper-key: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-stepper-key-hover: var(--sc-shadow-control-key-hover);
  --sc-shadow-stepper-key-pressed: var(--sc-shadow-control-key-pressed);
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
  --sc-motion-stepper-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-stepper-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-stepper-glyph-press-scale: 1;
  --sc-motion-stepper-roll: 0;
  --sc-motion-stepper-stretch: 0;
  --sc-motion-stepper-squash: 0;
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
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}
`,Ku=5e-4,Af=6e3,Zu=60;function Of({stiffness:l,damping:a,mass:i}){let c=0,p=0;const f=.001,m=[0];let v=0,k=0;for(;v<Af;){const E=(-l*(c-1)-a*p)/i;if(p+=E*f,c+=p*f,v+=1,m.push(c),c>k&&(k=c),Math.abs(c-1)<Ku&&Math.abs(p)<Ku)break}return{trace:m,settleMs:v,overshoot:Math.max(0,k-1)}}function As(l){const{trace:a,settleMs:i,overshoot:c}=Of(l),p=[];for(let f=0;f<Zu;f+=1){const m=Math.round(f/(Zu-1)*(a.length-1));p.push(+a[m].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:i,overshoot:c}}const Ns=60,Gu={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function Df([l,a,i,c],p){const f=(k,E,C)=>3*(1-C)**2*C*k+3*(1-C)*C**2*E+C**3;let m=0,v=1;for(let k=0;k<40;k+=1){const E=(m+v)/2;f(l,i,E)<p?m=E:v=E}return f(a,c,(m+v)/2)}function If(l){const a=[];for(const i of l.split(",")){const[c,...p]=i.trim().split(/\s+/);p.length||a.push({v:+c,x:null});for(const f of p)a.push({v:+c,x:parseFloat(f)/100})}a[0].x===null&&(a[0].x=0),a.at(-1).x===null&&(a.at(-1).x=1);for(let i=1;i<a.length;i+=1){if(a[i].x!==null){a[i].x=Math.max(a[i].x,a[i-1].x);continue}let c=i;for(;a[c].x===null;)c+=1;const p=(a[c].x-a[i-1].x)/(c-i+1);for(let f=i;f<c;f+=1)a[f].x=a[f-1].x+p}return a}function Bf(l,a){for(let i=1;i<l.length;i+=1)if(a<=l[i].x){const c=l[i-1],p=l[i],f=p.x-c.x;return f?c.v+(a-c.x)/f*(p.v-c.v):p.v}return l.at(-1).v}function Zi(l){var p;const a=(l||"ease").trim(),i=a.match(/^linear\((.+)\)$/);if(i){const f=If(i[1]);return Array.from({length:Ns},(m,v)=>Bf(f,v/(Ns-1)))}const c=((p=a.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||Gu[a]||Gu.ease;return Array.from({length:Ns},(f,m)=>Df(c,m/(Ns-1)))}function Gi(l){const a=l.map((c,p)=>Math.abs(l[Math.min(p+1,l.length-1)]-l[Math.max(p-1,0)]));a[0]=0,a[a.length-1]=0;const i=Math.max(...a)||1;return a.map(c=>c/i)}const Hf=l=>(l.endsWith("ms")?parseFloat(l):parseFloat(l)*1e3)||0;function Uf(l){const a=[];let i=0,c="";for(const p of l)p==="("&&(i+=1),p===")"&&(i-=1),p===","&&i===0?(a.push(c.trim()),c=""):c+=p;return a.push(c.trim()),a}function On(l,a){const i=`--sc-motion-${a}`,c=getComputedStyle(l),p=z=>parseFloat(c.getPropertyValue(z))||0,f=document.createElement("span");f.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${i}-travel-duration),var(${i}-press-lean-duration,0ms);transition-timing-function:var(${i}-travel-easing),var(--sc-motion-press-easing);`,l.appendChild(f);const m=getComputedStyle(f),[v,k]=m.transitionDuration.split(",").map(z=>Hf(z.trim())),[E,C]=Uf(m.transitionTimingFunction);return f.remove(),{travelDur:v,travelEasing:E,leanDur:k,leanEasing:C,stretch:p(`${i}-stretch`),squash:p(`${i}-squash`),lean:p(`${i}-press-lean`)}}const xr=l=>!!l&&(l.stretch>0||l.squash>0||l.lean>0),yr=()=>{var l;return typeof window<"u"&&!!((l=window.matchMedia)!=null&&l.call(window,"(prefers-reduced-motion: reduce)").matches)};function In({l,r:a,h:i},c,p=!0){return{transform:`translate(${l}px, ${p?(c-i)/2:0}px)`,width:`${a-l}px`,height:`${i}px`}}function fo(l,a,i,c,p=!0){const f=Zi(l.travelEasing),m=Gi(f);return f.map((v,k)=>{const E=l.stretch*c*m[k],C=a.l+(i.l-a.l)*v-E/2,z=a.r+(i.r-a.r)*v+E/2;return In({l:C,r:z,h:c*(1-l.squash*m[k])},c,p)})}function Yi(l,a,i){const c=Math.sign(i.l+i.r-(a.l+a.r)),p=l.lean*.25*Math.abs((i.l+i.r-(a.l+a.r))/2);return c>0?{...a,r:a.r+p}:c<0?{...a,l:a.l-p}:a}function uo(l,a,i,c,{hold:p=!1,onDone:f}={}){l.getAnimations().forEach(v=>v.cancel());const m=l.animate(a,{duration:i,easing:c,fill:"forwards"});return p||(m.onfinish=()=>{m.cancel(),f==null||f()}),m}function wn(l){const a=l.getBoundingClientRect(),i=l.currentCSSZoom||1;return{left:a.left/i,right:a.right/i,width:a.width/i,top:a.top/i,height:a.height/i}}function up(l,a){const i=wn(l);return{l:i.left-a.left,r:i.right-a.left}}function Vf(l,a){const i=On(l,"switch"),c=getComputedStyle(l),p=parseFloat(c.width),f=parseFloat(c.height),m=parseFloat(getComputedStyle(a).height),v=(f-m)/2;return{...i,knob:m,travel:p-m-2*v}}const po=(l,a)=>({l:a?l.travel:0,r:(a?l.travel:0)+l.knob}),Wf=(l,a)=>Yi(l,po(l,a),po(l,!a)),Qf=(l,a,i)=>fo(l,a,i,l.knob,!1),Kf=(l,a,i)=>[In({...a,h:l.knob},l.knob,!1),In({...i,h:l.knob},l.knob,!1)],Zf="_field_tf6ns_39",Gf="_disabled_tf6ns_49",Yf="_controlWrapper_tf6ns_53",qf="_input_tf6ns_59",Jf="_track_tf6ns_69",Xf="_glyphs_tf6ns_84",eh="_glyphOn_tf6ns_99",th="_glyphOff_tf6ns_105",nh="_thumb_tf6ns_115",rh="_label_tf6ns_190",Tt={field:Zf,disabled:Gf,controlWrapper:Yf,input:qf,track:Jf,glyphs:Xf,glyphOn:eh,glyphOff:th,thumb:nh,label:rh};function oh({checked:l=!1,disabled:a=!1,onChange:i,label:c,sound:p=!0,glyphs:f=!0,className:m=""}){const v=S.useId(),k=Is("toggle",p),E=S.useRef(null),C=S.useRef(null),z=S.useRef(null),N=S.useRef(null),R=S.useRef(null),V=S.useRef(!1),O=()=>{if(a||yr()||!C.current||!z.current)return null;const B=Vf(C.current,z.current);return xr(B)?B:null},Q=()=>{var B,W;(B=N.current)==null||B.cancel(),N.current=null,R.current=null,(W=C.current)==null||W.removeAttribute("data-driven")},oe=(B,W,fe,me)=>{var ae;(ae=N.current)==null||ae.cancel(),C.current.setAttribute("data-driven","");const le=z.current.animate(B,{duration:W,easing:fe,fill:"forwards"});N.current=le,me||(le.onfinish=()=>{N.current===le&&Q()})},ue=(B,W,fe)=>oe(Qf(B,W,po(B,fe)),B.travelDur,"linear",!1),se=()=>{const B=O();if(!B||B.lean<=0)return;const W=E.current.checked,fe=R.current||po(B,W);R.current=Wf(B,W),V.current=!1,oe(Kf(B,fe,R.current),B.leanDur,B.leanEasing,!0)},ee=()=>{if(!R.current)return;const B=O();if(!B){Q();return}const W=R.current;R.current=null,ue(B,W,E.current.checked)},pe=()=>setTimeout(()=>{V.current||ee()},0);return d.jsxs("label",{htmlFor:v,className:`${Tt.field} ${a?Tt.disabled:""} ${m}`,onPointerDown:se,onPointerUp:pe,onPointerLeave:ee,onPointerCancel:ee,children:[d.jsxs("span",{className:Tt.controlWrapper,children:[d.jsx("input",{ref:E,id:v,type:"checkbox",role:"switch",className:Tt.input,checked:l,disabled:a,onChange:B=>{k(),V.current=!0;const W=O();if(W){const fe=R.current||po(W,!B.target.checked);R.current=null,ue(W,fe,B.target.checked)}else Q();i==null||i(B)}}),d.jsxs("span",{ref:C,className:Tt.track,"aria-hidden":"true",children:[f&&d.jsxs("span",{className:Tt.glyphs,children:[d.jsx("span",{className:Tt.glyphOn}),d.jsx("span",{className:Tt.glyphOff})]}),d.jsx("span",{ref:z,className:Tt.thumb})]})]}),c&&d.jsx("span",{className:Tt.label,children:c})]})}const sh=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),S.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),lh=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),ih=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),ah=S.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Bs=S.forwardRef((l,a)=>{const{alt:i,color:c,size:p,weight:f,mirrored:m,children:v,weights:k,...E}=l,{color:C="currentColor",size:z,weight:N="regular",mirrored:R=!1,...V}=S.useContext(ah);return S.createElement("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:p??z,height:p??z,fill:c??C,viewBox:"0 0 256 256",transform:m||R?"scale(-1, 1)":void 0,...V,...E},!!i&&S.createElement("title",null,i),v,k.get(f??N))});Bs.displayName="IconBase";const pp=S.forwardRef((l,a)=>S.createElement(Bs,{ref:a,...l,weights:sh}));pp.displayName="ArrowRightIcon";const ch=pp,dp=S.forwardRef((l,a)=>S.createElement(Bs,{ref:a,...l,weights:lh}));dp.displayName="MinusIcon";const uh=dp,fp=S.forwardRef((l,a)=>S.createElement(Bs,{ref:a,...l,weights:ih}));fp.displayName="PlusIcon";const ph=fp,dh="_icon_1vxzc_2",fh={icon:dh},hh={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Yu({glyph:l,weight:a="regular",size:i="1em",label:c,className:p="",...f}){if(!l)return null;const m=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},v=hh[i];return v?d.jsx("span",{className:`${fh.icon} ${p}`.trim(),style:{fontSize:v},children:d.jsx(l,{weight:a,size:"1em",...m,...f})}):d.jsx(l,{weight:a,size:i,className:p,...m,...f})}const mh="_stepper_2aukh_28",gh="_button_2aukh_38",vh="_glyph_2aukh_79",xh="_readout_2aukh_101",yh="_digits_2aukh_123",wh="_disabled_2aukh_134",hn={stepper:mh,button:gh,glyph:vh,readout:xh,digits:yh,disabled:wh},kh=400,bh=80;function Lh({value:l,onChange:a,min:i=-1/0,max:c=1/0,step:p=1,label:f,disabled:m=!1,sound:v=!0,className:k=""}){const E=Is("tick",v),C=S.useRef(l);C.current=l;const z=S.useRef(null),N=S.useRef(null),R=W=>Math.max(i,Math.min(c,W)),V=W=>{const fe=R(C.current+W);fe!==C.current&&(C.current=fe,a==null||a(fe),E())},O=()=>{z.current&&clearTimeout(z.current),N.current&&clearInterval(N.current),z.current=null,N.current=null};S.useEffect(()=>O,[]);const Q=S.useRef(null),oe=S.useRef(null),ue=S.useRef(l);S.useLayoutEffect(()=>{const W=ue.current;ue.current=l;const fe=Q.current,me=oe.current;if(W===l||m||!fe||!me||yr())return;const le=On(fe,"stepper"),ae=parseFloat(getComputedStyle(fe).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ae>0||xr(le)))return;const D=(l>W?1:-1)*ae*wn(fe).height,K=Zi(le.travelEasing),U=Gi(K),je=K.map((ye,ge)=>({transform:`translateY(${D*(1-ye)}px) scale(${1-.2*le.squash*U[ge]}, ${1+.2*le.stretch*U[ge]})`}));uo(me,je,le.travelDur,"linear")},[l,m]);const se=W=>{m||(V(W),O(),z.current=setTimeout(()=>{N.current=setInterval(()=>V(W),bh)},kh))},ee=l<=i,pe=l>=c,B=W=>{m||(W.key==="ArrowUp"?(W.preventDefault(),V(p)):W.key==="ArrowDown"?(W.preventDefault(),V(-p)):W.key==="Home"&&Number.isFinite(i)?(W.preventDefault(),C.current!==i&&E(),C.current=i,a==null||a(i)):W.key==="End"&&Number.isFinite(c)&&(W.preventDefault(),C.current!==c&&E(),C.current=c,a==null||a(c)))};return d.jsxs("div",{className:`${hn.stepper} ${m?hn.disabled:""} ${k}`,children:[d.jsx("button",{type:"button",className:hn.button,"aria-label":f?`Decrease ${f}`:"Decrease",disabled:m||ee,onPointerDown:()=>se(-p),onPointerUp:O,onPointerLeave:O,onPointerCancel:O,children:d.jsx(Yu,{glyph:uh,weight:"bold",size:"sm",className:hn.glyph})}),d.jsx("span",{ref:Q,className:hn.readout,role:"spinbutton",tabIndex:m?-1:0,"aria-valuenow":l,"aria-valuemin":Number.isFinite(i)?i:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":f,"aria-disabled":m||void 0,onKeyDown:B,children:d.jsx("span",{ref:oe,className:hn.digits,children:l})}),d.jsx("button",{type:"button",className:hn.button,"aria-label":f?`Increase ${f}`:"Increase",disabled:m||pe,onPointerDown:()=>se(p),onPointerUp:O,onPointerLeave:O,onPointerCancel:O,children:d.jsx(Yu,{glyph:ph,weight:"bold",size:"sm",className:hn.glyph})})]})}const Sh="_track_s3qo0_27",_h="_indicator_s3qo0_38",zh="_segment_s3qo0_59",Eh="_md_s3qo0_74",Ch="_sm_s3qo0_84",jh="_lg_s3qo0_94",Nh="_count_s3qo0_104",Ph="_segmentSelected_s3qo0_113",Mh="_disabled_s3qo0_127",mn={track:Sh,indicator:_h,segment:zh,md:Eh,sm:Ch,lg:jh,count:Nh,segmentSelected:Ph,disabled:Mh};function Rh({options:l=[],value:a,onChange:i,disabled:c=!1,label:p,size:f="md",sound:m=!0,className:v=""}){const k=Is("select",m),E=D=>{D!==a&&k(),i==null||i(D)},C=S.useRef(null),z=S.useRef({}),N=S.useRef(null),[R,V]=S.useState(null),O=S.useRef(null),Q=S.useRef(null),oe=S.useRef(a);oe.current=a;const ue=D=>{const K=C.current,U=z.current[D];if(!K||!U)return null;const je=wn(K),ye=wn(U);return{l:ye.left-je.left-K.clientLeft,r:ye.right-je.left-K.clientLeft}},se=S.useCallback(()=>{const D=ue(a);V(D?{left:D.l,width:D.r-D.l}:null)},[a]);S.useLayoutEffect(()=>{se()},[se,l.length,f]);const ee=()=>{if(c||yr()||!C.current||!N.current)return null;const D=On(C.current,"segmented-control");return xr(D)?{...D,cap:parseFloat(getComputedStyle(N.current).height)}:null},pe=(D,K,U,je)=>{C.current.setAttribute("data-driven",""),uo(N.current,D,K,U,{hold:je,onDone:()=>{var ye;return(ye=C.current)==null?void 0:ye.removeAttribute("data-driven")}})};S.useLayoutEffect(()=>{if(!R)return;const D={l:R.left,r:R.left+R.width},K=Q.current||O.current;O.current=D,Q.current=null;const U=ee();!U||!K||K.l===D.l&&K.r===D.r||pe(fo(U,K,D,U.cap),U.travelDur,"linear",!1)},[R==null?void 0:R.left,R==null?void 0:R.width]);const B=()=>{if(!Q.current)return;const D=ee(),K=Q.current;Q.current=null,D&&O.current&&pe(fo(D,K,O.current,D.cap),D.travelDur,"linear",!1)},W=D=>{if(D===a||!O.current)return;const K=ee(),U=ue(D);if(!K||K.lean<=0||!U)return;const je=N.current.getAnimations().length?up(N.current,{left:wn(C.current).left+C.current.clientLeft}):O.current;Q.current=Yi(K,O.current,U);const ye=a,ge=()=>setTimeout(()=>{oe.current===ye&&B()},0);window.addEventListener("pointerup",ge,{once:!0}),pe([In({...je,h:K.cap},K.cap),In({...Q.current,h:K.cap},K.cap)],K.leanDur,K.leanEasing,!0)};S.useEffect(()=>(window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)),[se]);const fe=D=>{var K;(K=z.current[D])==null||K.focus()},me=D=>{if(c||l.length===0)return;const K=(D+l.length)%l.length,U=l[K];U&&(E(U.value),fe(U.value))},le=(D,K)=>{if(!c)switch(D.key){case"ArrowRight":case"ArrowDown":D.preventDefault(),me(K+1);break;case"ArrowLeft":case"ArrowUp":D.preventDefault(),me(K-1);break;case"Home":D.preventDefault(),me(0);break;case"End":D.preventDefault(),me(l.length-1);break}},ae=l.findIndex(D=>D.value===a);return d.jsxs("div",{ref:C,className:`${mn.track} ${mn[f]||mn.md} ${c?mn.disabled:""} ${v}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[R&&d.jsx("span",{ref:N,className:mn.indicator,"aria-hidden":"true",style:{transform:`translateX(${R.left}px)`,width:`${R.width}px`}}),l.map((D,K)=>{const U=D.value===a,je=U||ae===-1&&K===0;return d.jsxs("button",{type:"button",ref:ye=>{z.current[D.value]=ye},role:"radio","aria-checked":U,tabIndex:c?-1:je?0:-1,disabled:c,className:`${mn.segment} ${U?mn.segmentSelected:""}`,onClick:()=>E(D.value),onPointerDown:()=>W(D.value),onPointerLeave:B,onKeyDown:ye=>le(ye,K),children:[D.label,D.count!==void 0&&d.jsx("span",{className:mn.count,children:D.count})]},D.value)})]})}const qu=16,Fi=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],Th="_mark_nniye_3",Fh="_sm_nniye_24",$h="_md_nniye_1",Ah="_lg_nniye_26",Oh="_working_nniye_28",Dh="_paused_nniye_29",Ih="_base_nniye_33",Bh="_glint_nniye_34",Hh="_spin_nniye_36",Uh="_loop_nniye_37",yt={mark:Th,sm:Fh,md:$h,lg:Ah,working:Oh,paused:Dh,base:Ih,glint:Bh,spin:Hh,loop:Uh},Vh={sm:yt.sm,md:yt.md,lg:yt.lg},Wh=3.2;function Qh(l,a){const i=l%2===0,p=-((i?1:-1)*(360*l)/a),f=p+360*(i?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${f.toFixed(2)} 8 8`}}function Kh({working:l=!0,size:a="sm",label:i,className:c="",...p}){const f=`wm${S.useId().replace(/[^a-zA-Z0-9]/g,"")}`,m=Fi.length,v=i?{role:"img","aria-label":i}:{"aria-hidden":!0},k=[yt.mark,Vh[a]??yt.sm,l?yt.working:yt.paused,c].filter(Boolean).join(" ");return d.jsxs("svg",{viewBox:`0 0 ${qu} ${qu}`,className:k,focusable:"false",...v,...p,children:[l&&d.jsx("defs",{children:Fi.map((E,C)=>{const{from:z,to:N}=Qh(C,m);return d.jsxs("linearGradient",{id:`${f}-s${C}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[d.jsx("stop",{offset:"0",className:yt.base}),d.jsx("stop",{offset:"0.45",className:yt.base}),d.jsx("stop",{offset:"1",className:yt.glint}),d.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:z,to:N,dur:`${Wh}s`,repeatCount:"indefinite"})]},C)})}),Fi.map((E,C)=>d.jsx("g",{className:yt.spin,style:{"--wm-i":C},children:d.jsx("path",{d:E,className:yt.loop,style:{"--wm-i":C},stroke:l?`url(#${f}-s${C})`:void 0})},C))]})}const Zh="_button_1cn8j_34",Gh="_label_1cn8j_74",Yh="_arrow_1cn8j_84",qh="_sm_1cn8j_57",Jh="_primary_1cn8j_122",Xh="_destructive_1cn8j_123",em="_secondary_1cn8j_157",tm="_tertiary_1cn8j_173",nm="_loading_1cn8j_207",rm="_working_1cn8j_211",$n={button:Zh,label:Gh,arrow:Yh,sm:qh,primary:Jh,destructive:Xh,secondary:em,tertiary:tm,loading:nm,working:rm},om=["primary","secondary","tertiary","destructive"],sm=["lg","sm"];function lm(){return d.jsx(ch,{weight:"bold",className:$n.arrow,"aria-hidden":"true"})}function im({variant:l="primary",size:a="lg",disabled:i=!1,loading:c=!1,arrow:p=!0,type:f="button",sound:m=!0,children:v,onClick:k,className:E="",...C}){const z=om.includes(l)?l:"primary",N=sm.includes(a)?a:"lg",R=i||c,V=Is("press",m);return d.jsxs("button",{type:f,className:`${$n.button} ${$n[z]} ${N==="sm"?$n.sm:""} ${c?$n.loading:""} ${E}`,disabled:R,"aria-busy":c||void 0,onClick:R?void 0:O=>{V(),k==null||k(O)},...C,children:[d.jsx("span",{className:$n.label,children:v}),c?d.jsx(Kh,{className:$n.working}):p&&d.jsx(lm,{})]})}const am="_wrapper_1owvf_14",cm="_tooltip_1owvf_19",um="_open_1owvf_62",pm="_singleline_1owvf_67",dm="_multiline_1owvf_71",io={wrapper:am,tooltip:cm,open:um,singleline:pm,multiline:dm};function fm({content:l,multiline:a=!1,open:i,children:c}){const p=S.useId(),[f,m]=S.useState(!1),v=i??f,k=S.useRef(null),E=S.useRef(null);S.useLayoutEffect(()=>{const N=k.current,R=E.current;if(!v||!N||!R||yr())return;const V=On(R,"tooltip");if(!xr(V))return;const O=parseFloat(getComputedStyle(R).getPropertyValue("--sc-space-component-gap-sm"))||0,Q=Zi(V.travelEasing),oe=Gi(Q),ue=Q.map((ee,pe)=>({transform:`translate(-50%, ${-O*(1-ee)}px) scale(${1-.2*V.squash*oe[pe]}, ${1+.2*V.stretch*oe[pe]})`,opacity:Math.min(1,Math.max(0,ee))}));R.getAnimations().forEach(ee=>ee.cancel()),N.setAttribute("data-driven","");const se=R.animate(ue,{duration:V.travelDur,easing:"linear"});se.onfinish=()=>N.removeAttribute("data-driven"),se.oncancel=()=>N.removeAttribute("data-driven")},[v]);const C=()=>m(!0),z=()=>m(!1);return d.jsxs("span",{ref:k,className:io.wrapper,onMouseEnter:C,onMouseLeave:z,onFocus:C,onBlur:z,children:[d.jsx("span",{"aria-describedby":v?p:void 0,children:c}),d.jsx("span",{ref:E,role:"tooltip",id:p,className:`${io.tooltip} ${v?io.open:""} ${a?io.multiline:io.singleline}`,children:l})]})}const hm=Math.PI*2,mm=new Set(["uskel","uloader","usplash"]),gm=new Set(["ucard"]),vm={uskel:0,uloader:1.96,usplash:0},Ju=new Set(["progress","active","current"]);function xm(l){return function(){l|=0,l=l+1831565813|0;let a=Math.imul(l^l>>>15,1|l);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function ym(l){let a=2166136261;for(const i of String(l))a=Math.imul(a^i.charCodeAt(0),16777619);return a}const wm=(l,a,i,c)=>l.fillRect(a-c,i-c,c*2,c*2),km=(l,a,i,c)=>{l.beginPath(),l.arc(a,i,c,0,hm),l.fill()},hp=(l,a,i,c)=>{c*=1.25;const p=Math.max(.7,c*.38);l.fillRect(a-c,i-p/2,c*2,p),l.fillRect(a-p/2,i-c,p,c*2)},bm={plus:hp,square:wm,round:km};function xt(l,a,i){const c=a.rng,p=(i.s||5)*a.S,f=i.x2-i.x1,m=i.y2-i.y1,v=Math.hypot(f,m);if(!v)return;const k=f/v,E=m/v,C=-E,z=k,N=i.w,R=i.ext??N*.35,V=i.r??.9,O=i.jit??.7;let Q=0;for(let oe=-R;oe<=v+R;oe+=p,Q++){const ue=i.grid?0:Q%2*p/2;let se=1;if(i.taper){const ee=(oe+R)/(v+2*R);se=Math.min(1,(i.fadeEnd?1-ee:Math.min(ee,1-ee))/i.taper)}for(let ee=-N/2+ue;ee<=N/2+.01;ee+=p){const pe=i.crisp?se:Math.min(1,(N/2-Math.abs(ee))/(p*1.6)+.3)*se;if(c()>pe)continue;const B=i.x1+k*oe+C*ee+(c()-.5)*O,W=i.y1+E*oe+z*ee+(c()-.5)*O;l.globalAlpha=(i.a??.9)*(i.af?i.af(oe+(i.u0||0),ee,B,W):1),a.dot(l,B,W,V)}}l.globalAlpha=1}function Fn(l,a,i,c,p={}){let f=0;for(let m=0;m<i.length-1;m++)xt(l,a,{x1:i[m][0],y1:i[m][1],x2:i[m+1][0],y2:i[m+1][1],w:c,u0:f,...p}),f+=Math.hypot(i[m+1][0]-i[m][0],i[m+1][1]-i[m][1])}const Lm=l=>Math.max(0,Math.min(1,Number.isFinite(+l)?+l:0)),Sm={udiv(l,a,i,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),f=7,m=c.opts.fade||"both";xt(l,c,{x1:2,y1:i/2,x2:a-2,y2:i/2,w:(p-1)*f*c.S,s:f,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:m==="none"?0:m==="end"?.7:.22,fadeEnd:m==="end"})},ucardhead(l,a,i,c){xt(l,c,{x1:-20,y1:i*.8,x2:a+20,y2:i*.15,w:44,s:7,r:1.6,ext:0}),xt(l,c,{x1:a*.4,y1:-20,x2:a*.78,y2:i+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(l,a,i,c){const p=12*c.S;for(let f=p/2;f<i;f+=p)for(let m=p/2;m<a;m+=p){let v=.14;c.hover&&(v+=.86*Math.exp(-((m-c.mx)**2+(f-c.my)**2)/5e3)),l.globalAlpha=v,c.dot(l,m,f,1.6)}l.globalAlpha=1},ucta(l,a,i,c){Fn(l,c,[[-.05*a,.1*i],[.22*a,.5*i],[.02*a,1.1*i]],46,{s:7,r:1.6,ext:0}),Fn(l,c,[[1.05*a,-.1*i],[.78*a,.5*i],[.98*a,1.1*i]],46,{s:7,r:1.6,ext:0})},uempty(l,a,i,c){Fn(l,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,f])=>[p*a,f*i]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(l,a,i,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,a-40,10],["r",20,108,a-40,10],["r",20,128,a*.55,10],["r",20,158,a-40,46]],f=6*c.S,m=c.t*240%(a+500)-250;for(let v=f/2;v<i;v+=f)for(let k=f/2;k<a;k+=f){if(!p.some(z=>z[0]==="c"?(k-z[1])**2+(v-z[2])**2<z[3]**2:k>=z[1]&&k<=z[1]+z[3]&&v>=z[2]&&v<=z[2]+z[4]))continue;const C=Math.exp(-((k+v*.5-m)**2)/4050);l.globalAlpha=.16+.6*C,c.dot(l,k,v,1.3)}l.globalAlpha=1},uprog(l,a,i,c){const p=7*c.S,f=Math.max(1,Math.round(+c.opts.rows||1)),m=Lm(c.opts.progress),v=i/2-(f-1)*p/2,k=c.teal("progress");for(let E=0;E<f;E++)for(let C=4;C<a;C+=p){const z=C/a<m;l.fillStyle=z?k:c.fg,l.globalAlpha=z?1:.2,c.dot(l,C,v+E*p,1.6)}l.globalAlpha=1,l.fillStyle=c.fg},uloader(l,a,i,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([k,E])=>[k*a,E*i]);let f=0;for(let k=0;k<p.length-1;k++)f+=Math.hypot(p[k+1][0]-p[k][0],p[k+1][1]-p[k][1]);const m=c.t%2.8/2.8,v=Math.min(1,m/.7)*(f+30);Fn(l,c,p,26,{s:6,r:1.3,ext:0,a:1,af:k=>k<v?v-k<18&&m<.7?1:.85:.08})},uline(l,a,i,c){l.fillStyle=c.teal("active"),xt(l,c,{x1:3,y1:i/2,x2:a-3,y2:i/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),l.fillStyle=c.fg},umedia(l,a,i,c){const p=10*c.S;l.globalAlpha=.16;for(let f=p/2;f<i;f+=p)for(let m=p/2;m<a;m+=p)c.dot(l,m,f,1.3);l.globalAlpha=1,xt(l,c,{x1:-20,y1:i*.9,x2:a+20,y2:i*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(l,a,i,c){Fn(l,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,f])=>[p*a,f*i]),72,{s:7,r:1.6,ext:0})},ufooter(l,a,i,c){const f=7*c.S,m=c.rng;l.fillStyle=c.C.page,l.fillRect(0,0,a,90),l.fillStyle=c.C.inverse,l.fillRect(0,90,a,i-90);for(let v=f/2;v<90;v+=f)for(let k=f/2;k<a;k+=f)m()<Math.pow(v/90,1.6)&&c.dot(l,k,v,1.6)},uquote(l,a,i,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},f=24,m=130;xt(l,c,{...p,x1:f,y1:f,x2:f+m,y2:f}),xt(l,c,{...p,x1:f,y1:f,x2:f,y2:f+m}),xt(l,c,{...p,x1:a-f,y1:i-f,x2:a-f-m,y2:i-f}),xt(l,c,{...p,x1:a-f,y1:i-f,x2:a-f,y2:i-f-m})},utime(l,a,i,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),f=Math.round(+c.opts.current||0),m=i/p,v=a/2,k=7*c.S,E=Array.from({length:p},(C,z)=>m*(z+.5));for(let C=E[0];C<=E[p-1];C+=k)E.some(z=>Math.abs(C-z)<15)||(l.globalAlpha=C<E[Math.min(Math.max(f,0),p-1)]?.75:.18,c.dot(l,v,C,1.4));E.forEach((C,z)=>{l.fillStyle=z===f?c.teal("current"):c.fg,l.globalAlpha=z<=f?1:.25;for(let N=-1;N<=1;N++)for(let R=-1;R<=1;R++)c.dot(l,v+N*6,C+R*6,1.5)}),l.globalAlpha=1,l.fillStyle=c.fg},ubullet(l,a,i,c){const p=a/3;c.opts.accent&&(l.fillStyle=c.teal("current"));for(let f=0;f<3;f++)for(let m=0;m<3;m++)c.dot(l,p/2+f*p,p/2+m*p,p*.26);l.fillStyle=c.fg},usep(l,a,i,c){l.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(l,a*(.2+p*.3),i*(.8-p*.3),a*.1);l.globalAlpha=1},uthumb(l,a,i,c){const p=c.rng,f=2+Math.floor(p()*2),m=[];for(let v=0;v<=f;v++)m.push([(v%2?.72+.22*p():.06+.22*p())*a,(.12+v*(.76/f)+(p()-.5)*.08)*i]);p()>.5&&m.forEach(v=>{const k=v[0];v[0]=v[1],v[1]=k}),Fn(l,c,m,a*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(l,a,i,c){xt(l,c,{x1:a*.5,y1:-20,x2:a+30,y2:i*.42,w:42,s:7,r:1.6,ext:0}),xt(l,c,{x1:a*.76,y1:-20,x2:a+30,y2:i*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(l,a,i,c){const p=c.t;Fn(l,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([f,m])=>[f*a,m*i]),50,{s:7,r:1.6,af:f=>.28+.72*Math.pow(.5+.5*Math.sin(f*.016-p*2),2)})},type(l,a,i,c){if(!a||!i||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(a),p.height=Math.ceil(i);const f=p.getContext("2d"),m=c.opts.text||"Crafthouse";f.textAlign="center",f.textBaseline="middle";let v=i*(+c.opts.textScale||.62);f.font=`500 ${v}px ${c.font}`;const k=f.measureText(m).width;k>a*.88&&(v*=a*.88/k,f.font=`500 ${v}px ${c.font}`),f.fillText(m,a/2,i/2);const E=Math.min(9,Math.max(4.2,v/34))*c.S,C=E*.24,z=f.getImageData(0,0,p.width,p.height).data,N=-.14,R=Math.cos(N),V=Math.sin(N),O=Math.hypot(a,i)/2+10;let Q=0;for(let oe=-O;oe<O;oe+=E,Q++)for(let ue=-O+Q%2*E/2;ue<O;ue+=E){const se=a/2+ue*R-oe*V,ee=i/2+ue*V+oe*R;se<0||ee<0||se>=p.width||ee>=p.height||z[((ee|0)*p.width+(se|0))*4+3]>100&&c.dot(l,se,ee,C)}}};function _m(l,a){const{art:i,w:c,h:p,dpr:f,colors:m,surface:v="inverse",shape:k="plus",density:E=1,seed:C=0,t:z=0,opts:N={},font:R,pointer:V}=a,O=Sm[i];if(!O||!c||!p)return;const{accent:Q,...oe}=m,ue=v==="inverse"?oe.onInverse:oe.text,se={inverse:oe.inverse,raised:oe.raised,page:oe.page,sunk:oe.sunk};l.setTransform(f,0,0,f,0,0),l.globalAlpha=1,l.clearRect(0,0,c,p),v!=="none"&&(l.fillStyle=se[v]??oe.inverse,l.fillRect(0,0,c,p)),l.fillStyle=ue;const ee=Math.min(1.6,Math.max(.6,+E||1)),pe=B=>{if(!Ju.has(B))throw new Error(`PlusField: teal is reserved for ${[...Ju].join(", ")}; "${B}" is not one of them.`);return Q};O(l,c,p,{C:oe,fg:ue,S:1/ee,rng:xm(C),t:z,opts:N,font:R,teal:pe,hover:!!(V!=null&&V.hover),mx:(V==null?void 0:V.x)??0,my:(V==null?void 0:V.y)??0,dot:bm[k]??hp}),l.globalAlpha=1}const zm="_root_1jtbm_5",Em="_backdrop_1jtbm_17",Cm="_canvas_1jtbm_25",jm="_srOnly_1jtbm_35",ao={root:zm,backdrop:Em,canvas:Cm,srOnly:jm},Nm={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},mr=new Set,Dn=new Set;let gr=0,An=null,wt=null,yn=null;const Pm=()=>typeof window<"u",Mm=()=>!!(yn!=null&&yn.matches);function mp(l){const a=l/1e3;Dn.forEach(i=>i.paint(a)),gr=Dn.size?requestAnimationFrame(mp):0}function Rm(){!gr&&Dn.size&&(gr=requestAnimationFrame(mp))}function Hi(){var l,a,i;Pm()&&(!An&&typeof MutationObserver<"u"&&(An=new MutationObserver(()=>mr.forEach(c=>c.refresh())),An.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!wt&&typeof IntersectionObserver<"u"&&(wt=new IntersectionObserver(c=>c.forEach(p=>{const f=p.target.__plusField;f&&(f.visible=p.isIntersecting,f.syncMotion())}))),!yn&&window.matchMedia&&(yn=window.matchMedia("(prefers-reduced-motion: reduce)"),(l=yn.addEventListener)==null||l.call(yn,"change",()=>mr.forEach(c=>c.syncMotion()))),document.fonts&&!Hi.fonts&&(Hi.fonts=!0,(i=(a=document.fonts).addEventListener)==null||i.call(a,"loadingdone",()=>mr.forEach(c=>c.refresh()))))}function Tm(){mr.size||(An==null||An.disconnect(),An=null,wt==null||wt.disconnect(),wt=null,gr&&cancelAnimationFrame(gr),gr=0)}function Fm(l,a){const i={root:l,canvas:a,ctx:a.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(l),p=c.color,f={};for(const[m,v]of Object.entries(Nm))f[m]=c.getPropertyValue(v).trim()||p;i.colors=f,i.font=c.fontFamily},resize(c,p){i.w=c,i.h=p,i.dpr=Math.min(2,window.devicePixelRatio||1);const f=Math.round(c*i.dpr),m=Math.round(p*i.dpr);a.width!==f&&(a.width=f),a.height!==m&&(a.height=m),i.refresh()},animated(){const c=i.props;return!!c&&mm.has(c.art)&&c.animate!==!1&&!Mm()},syncMotion(){var c;if(i.animated()&&i.visible&&i.w&&i.h){Dn.add(i),Rm();return}Dn.delete(i),i.paint(i.animated()?i.t:vm[(c=i.props)==null?void 0:c.art]??0)},refresh(){!i.props||!i.w||!i.h||(i.readTokens(),i.syncMotion(),Dn.has(i)&&i.paint(i.t))},paint(c){const p=i.props;!p||!i.w||!i.h||(i.colors||i.readTokens(),i.t=c,_m(i.ctx,{art:p.art,w:i.w,h:i.h,dpr:i.dpr,colors:i.colors,surface:p.surface,shape:p.shape,density:p.density,seed:ym(p.seed??p.art),t:c,opts:p.opts,font:i.font,pointer:i.pointer}))}};return i}const $m=new Set(["inverse","raised","page","sunk","none"]),Am=new Set(["plus","square","round"]);function Om({art:l,surface:a="inverse",shape:i="plus",density:c=1,animate:p=!0,seed:f,rows:m,fade:v,text:k,progress:E,accent:C=!1,steps:z,current:N,textScale:R,backdrop:V=!1,label:O,as:Q="div",className:oe="",...ue}){const se=S.useRef(null),ee=S.useRef(null),pe=S.useRef(null),B={art:l,surface:$m.has(a)?a:"inverse",shape:Am.has(i)?i:"plus",density:c,animate:p,seed:f,opts:{rows:m,fade:v,text:k,progress:E,accent:C,steps:z,current:N,textScale:R}};S.useEffect(()=>{const me=se.current,le=ee.current;if(!me||!le||!le.getContext)return;Hi();const ae=Fm(me,le);ae.props=B,pe.current=ae,me.__plusField=ae,mr.add(ae);const D=typeof ResizeObserver<"u"?new ResizeObserver(([ye])=>{const{width:ge,height:H}=ye.contentRect;(ge!==ae.w||H!==ae.h)&&ae.resize(ge,H)}):null;D==null||D.observe(me),wt==null||wt.observe(me);const K=gm.has(l)?me.parentElement||me:null,U=ye=>{const ge=me.getBoundingClientRect();ae.pointer={hover:!0,x:ye.clientX-ge.left,y:ye.clientY-ge.top},ae.paint(ae.t)},je=()=>{ae.pointer={hover:!1,x:0,y:0},ae.paint(ae.t)};return K==null||K.addEventListener("pointermove",U),K==null||K.addEventListener("pointerleave",je),()=>{D==null||D.disconnect(),wt==null||wt.unobserve(me),K==null||K.removeEventListener("pointermove",U),K==null||K.removeEventListener("pointerleave",je),Dn.delete(ae),mr.delete(ae),delete me.__plusField,pe.current=null,Tm()}},[l]),S.useEffect(()=>{const me=pe.current;me&&(me.props=B,me.refresh())});const W=[ao.root,V?ao.backdrop:"",oe].filter(Boolean).join(" "),fe=Math.round(Math.max(0,Math.min(1,Number(E)||0))*100);return d.jsxs(Q,{ref:se,className:W,...ue,children:[d.jsx("canvas",{ref:ee,className:ao.canvas,"aria-hidden":"true"}),O&&(l==="uloader"||l==="uskel")&&d.jsx("span",{role:"status",className:ao.srOnly,children:O}),l==="uprog"&&d.jsx("span",{role:"progressbar",className:ao.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":fe,"aria-label":O})]})}const Dm="_underline_w8mvb_3",Im={underline:Dm},$i=new WeakMap,Xu=l=>{var a;return l.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((a=l.parentElement)==null?void 0:a.parentElement)||null};function gp({active:l=!0,shape:a,density:i,motion:c="plus-underline",className:p="",...f}){const m=S.useRef(null);return S.useLayoutEffect(()=>{const v=m.current,k=v&&l?Xu(v):null;if(!k)return;const E=$i.get(k);if($i.set(k,v),!E||E===v||!E.isConnected||yr())return;const C=On(v,c);if(!xr(C))return;const z=wn(v),N=up(E,z);E.getAnimations().forEach(R=>R.cancel()),uo(v,fo(C,N,{l:0,r:z.width},z.height),C.travelDur,"linear")},[l,c]),S.useEffect(()=>{var v;l||(v=m.current)==null||v.getAnimations().forEach(k=>k.cancel())},[l]),S.useEffect(()=>{const v=m.current,k=v&&l?Xu(v):null;if(!k)return;const E=C=>{var se,ee;const z=(ee=(se=C.target).closest)==null?void 0:ee.call(se,'a, button, [role="tab"], [role="radio"]');if(!z||!k.contains(z)||z.contains(v)||yr())return;const N=On(v,c);if(!xr(N)||N.lean<=0)return;const R=wn(v),V=wn(z),O={l:0,r:R.width},Q=Yi(N,O,{l:V.left-R.left,r:V.right-R.left});uo(v,[In({...O,h:R.height},R.height),In({...Q,h:R.height},R.height)],N.leanDur,N.leanEasing,{hold:!0});let oe=!1;const ue=()=>setTimeout(()=>{oe||(oe=!0,!($i.get(k)!==v||!v.isConnected)&&uo(v,fo(On(v,c),Q,O,R.height),N.travelDur,"linear"))},0);window.addEventListener("pointerup",ue,{once:!0}),z.addEventListener("pointerleave",ue,{once:!0})};return k.addEventListener("pointerdown",E),()=>k.removeEventListener("pointerdown",E)},[l,c]),d.jsx("span",{ref:m,className:`${Im.underline} ${p}`,"aria-hidden":"true",...f,children:l&&d.jsx(Om,{as:"span",art:"uline",surface:"none",shape:a,density:i})})}const Bm="_nav_lg753_18",Hm="_row_lg753_26",Um="_brand_lg753_35",Vm="_links_lg753_44",Wm="_linkItem_lg753_51",Qm="_link_lg753_44",Km="_toggle_lg753_79",Zm="_trailing_lg753_84",Gm="_desktop_lg753_93",Ym="_compact_lg753_100",qm="_menu_lg753_118",Jm="_menuOpen_lg753_128",Je={nav:Bm,row:Hm,brand:Um,links:Vm,linkItem:Wm,link:Qm,toggle:Km,trailing:Zm,desktop:Gm,compact:Ym,menu:qm,menuOpen:Jm};function Xm({brand:l,links:a=[],trailing:i,compact:c=!1,underline:p=!1,className:f=""}){const[m,v]=S.useState(!1);return d.jsxs("nav",{className:`${Je.nav} ${c?Je.compact:Je.desktop} ${f}`,"aria-label":"Primary",children:[d.jsxs("div",{className:Je.row,children:[d.jsx("div",{className:Je.brand,children:l}),c?d.jsx("button",{type:"button",className:Je.toggle,"aria-expanded":m,"aria-controls":"navbar-menu",onClick:()=>v(k=>!k),children:m?"Close":"Menu"}):d.jsxs(d.Fragment,{children:[d.jsx("ul",{className:Je.links,children:a.map(k=>d.jsx("li",{className:Je.linkItem,children:d.jsxs("a",{className:Je.link,href:k.href,"aria-current":k.current?"page":void 0,children:[k.label,p&&d.jsx(gp,{active:!!k.current,motion:"nav-bar"})]})},k.href))}),i&&d.jsx("div",{className:Je.trailing,children:i})]})]}),c&&d.jsxs("div",{id:"navbar-menu",className:`${Je.menu} ${m?Je.menuOpen:""}`,children:[d.jsx("ul",{className:Je.links,children:a.map(k=>d.jsx("li",{className:Je.linkItem,children:d.jsx("a",{className:Je.link,href:k.href,"aria-current":k.current?"page":void 0,children:k.label})},k.href))}),i&&d.jsx("div",{className:Je.trailing,children:i})]})]})}const eg=`/* tokens:
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
`,tg=`/* tokens:
 *   --sc-color-stepper-track        · recessed pill ground (role token, = surface.sunk)
 *   --sc-color-stepper-key          · ± key face at rest (role token; shipped transparent)
 *   --sc-color-stepper-key-hover / -key-hover-ink · hover face and glyph (= Button primary hover: teal.600, white)
 *   --sc-color-stepper-key-pressed / -key-pressed-ink · pressed face and glyph (= brand.accentDeep teal.700, white)
 *   --sc-color-stepper-key-shade    · 135deg face shade on each key (Button key face; shipped transparent)
 *   --sc-shadow-stepper-track       · recess of the pill (shipped zero alpha)
 *   --sc-shadow-stepper-key         · key lift at rest (shipped zero alpha)
 *   --sc-shadow-stepper-key-hover / -key-pressed · hover lift and press (= Button primary: control.keyHover / keyPressed)
 *   --sc-motion-stepper-travel-duration / -easing · readout roll (Stepper.jsx; inert while roll, stretch and squash are 0)
 *   --sc-motion-stepper-roll / -stretch / -squash  · roll distance and numeral stretch/squash (Stepper.jsx; 0 = off)
 *   --sc-motion-stepper-glyph-press-scale · ± glyph's own press scale, on top of the key's (1 = with the key only)
 *   --sc-color-text-primary         · button ink + readout numeral
 *   --sc-color-text-disabled        · disabled button + readout
 *   --sc-color-border-focus         · focus ring
 *   --sc-border-width-focus         · focus ring weight
 *   --sc-border-focus-offset        · focus ring offset
 *   --sc-radius-pill                · control + button radius
 *   --sc-radius-control             · readout focus-ring radius
 *   --sc-size-icon-md               · glyph box (buttons sized off this via calc, no new size token)
 *   --sc-space-component-gap-sm     · control → readout gaps
 *   --sc-space-component-padding-sm · control inset + button hit-area padding
 *   --sc-font-text-mono-body-*      · numeral readout (mono)
 *   --sc-motion-hover-duration / -easing  · key bg/color transition (shadow changes snap)
 *   --sc-motion-press-duration / -easing / -scale  · button press feedback (reuses Button's press pair)
 */

.stepper {
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-sm);
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
  /* A small Drams 036 key: fill, a 135deg face shade, a lift lit from the
     top left. Shipped transparent and flat (today's ghost buttons). */
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
  min-width: calc(2ch + 2 * var(--sc-font-text-mono-body-letter-spacing) + 2 * var(--sc-space-component-gap-sm));
  text-align: center;
  font-variant-numeric: tabular-nums;
  font-family: var(--sc-font-text-mono-body-family);
  font-size: var(--sc-font-text-mono-body-size);
  font-weight: var(--sc-font-text-mono-body-weight);
  line-height: var(--sc-font-text-mono-body-line-height);
  letter-spacing: var(--sc-font-text-mono-body-letter-spacing);
  color: var(--sc-color-text-primary);
  padding-inline: var(--sc-space-component-gap-sm);
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
`,ng=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,rg=`/* tokens:
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
`,og=`/* tokens:
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
`,sg=`/* tokens:
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
`,lg=`/* tokens:
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
`,ep=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,ig="_app_px5b6_6",ag="_bar_px5b6_18",cg="_brand_px5b6_27",ug="_meta_px5b6_34",pg="_readout_px5b6_35",dg="_values_px5b6_36",fg="_spacer_px5b6_42",hg="_stages_px5b6_46",mg="_stageWrap_px5b6_54",gg="_activeStage_px5b6_61",vg="_stageSelect_px5b6_65",xg="_stageLabel_px5b6_75",yg="_stage_px5b6_46",wg="_panel_px5b6_94",kg="_group_px5b6_103",bg="_prop_px5b6_121",Lg="_editor_px5b6_122",Sg="_token_px5b6_132",_g="_changed_px5b6_140",zg="_tokenHead_px5b6_144",Eg="_tokenName_px5b6_150",Cg="_num_px5b6_162",jg="_mini_px5b6_166",Ng="_curve_px5b6_173",Pg="_sounds_px5b6_187",Mg="_sound_px5b6_187",Rg="_shippedSound_px5b6_210",Tg="_reset_px5b6_214",Fg="_notes_px5b6_267",$g="_tabs_px5b6_279",Ag="_tab_px5b6_279",Og="_pin_px5b6_308",Dg="_pick_px5b6_313",Ig="_propBlock_px5b6_320",Bg="_easing_px5b6_321",Hg="_springRows_px5b6_322",Ug="_propLabel_px5b6_328",Vg="_tokenActions_px5b6_332",Wg="_motionTiles_px5b6_347",Qg="_motionTile_px5b6_347",Kg="_layers_px5b6_405",Zg="_layer_px5b6_405",Gg="_layerHead_px5b6_418",Yg="_layerGrid_px5b6_423",qg="_scope_px5b6_428",Jg="_steps_px5b6_437",Xg="_step_px5b6_437",ev="_stepRole_px5b6_471",F={app:ig,bar:ag,brand:cg,meta:ug,readout:pg,values:dg,spacer:fg,stages:hg,stageWrap:mg,activeStage:gg,stageSelect:vg,stageLabel:xg,stage:yg,panel:wg,group:kg,prop:bg,editor:Lg,token:Sg,changed:_g,tokenHead:zg,tokenName:Eg,num:Cg,mini:jg,curve:Ng,sounds:Pg,sound:Mg,shippedSound:Rg,reset:Tg,notes:Fg,tabs:$g,tab:Ag,pin:Og,pick:Dg,propBlock:Ig,easing:Bg,springRows:Hg,propLabel:Ug,tokenActions:Vg,motionTiles:Wg,motionTile:Qg,layers:Kg,layer:Zg,layerHead:Gg,layerGrid:Yg,scope:qg,steps:Jg,step:Xg,stepRole:ev},Vt=["day","week","month"],co=["work","studio","journal"],gn=(l,{press:a=!0}={})=>{const i=`--sc-motion-${l}`;return{jsTokens:[`${i}-stretch`,`${i}-squash`,...a?[`${i}-press-lean`,`${i}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${i}-stretch`]:"0.45",[`${i}-squash`]:"0",...a?{[`${i}-press-lean`]:"0.83",[`${i}-press-lean-duration`]:"150ms"}:{}},springs:{[`${i}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},tp={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},tv=l=>({light:l(tp.light),dark:l(tp.dark)});function nv({p:l,ctx:a}){const i=S.useRef(null);return S.useEffect(()=>{var E;const c=[...((E=i.current)==null?void 0:E.children)||[]],p=a.slow||1,f=l.reduced,m=f==="opacity only"?{opacity:l.opacityFrom,transform:"none",filter:"none"}:{opacity:l.opacityFrom,transform:`translateY(${l.distance}px) scale(${l.scaleFrom}) rotate(${l.rotateFrom}deg)`,filter:`blur(${l.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},k=c.map((C,z)=>C.animate([m,v],{duration:f==="none"?0:l.duration*p,delay:f==="none"?0:(l.delay+z*l.stagger)*p,easing:l.easing,fill:"both"}));return()=>k.forEach(C=>C.cancel())},[l,a.replay,a.slow]),d.jsx("div",{className:F.motionTiles,ref:i,children:Array.from({length:l.count},(c,p)=>d.jsx("span",{className:F.motionTile},p))})}const Ai=l=>l.reduced==="none"?0:l.delay+l.stagger*(l.count-1)+l.duration,vr={Switch:{css:[eg],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(l,a)=>a("checked",!l.checked),render:(l,a,i)=>d.jsx(oh,{checked:l.checked,disabled:l.disabled,glyphs:l.glyphs,label:l.label,sound:!1,onChange:c=>{a("checked",c.target.checked),i()}})},Stepper:{css:[tg,ng],jsTokens:[...gn("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...gn("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:gn("stepper",{press:!1}).seed.springs,scoped:tv(l=>({"--sc-shadow-stepper-track":l.recess,"--sc-color-stepper-key":l.keyFill,"--sc-color-stepper-key-shade":l.keyShade,"--sc-shadow-stepper-key":l.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(l,a)=>a("value",l.value+l.step>l.max?l.min:l.value+l.step),render:(l,a,i)=>d.jsx(Lh,{value:l.value,min:l.min,max:l.max,step:l.step,disabled:l.disabled,label:l.label,sound:!1,onChange:c=>{a("value",c),i()}})},SegmentedControl:{css:[rg],...gn("segmented-control"),seed:{...gn("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Vt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(l,a)=>a("value",Vt[(Vt.indexOf(l.value)+1)%Vt.length]),render:(l,a,i)=>d.jsx(Rh,{label:"Range",value:l.value,size:l.size,disabled:l.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==l.value&&i(),a("value",c)}})},Tooltip:{css:[sg],...gn("tooltip",{press:!1}),shippedSound:null,trigger:"ships silent",props:[{name:"open",type:"boolean",default:!0},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(l,a)=>a("open",!l.open),render:l=>d.jsx("span",{style:{display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:d.jsx(fm,{content:l.content,multiline:l.multiline,open:l.open,children:d.jsx("span",{style:{font:"inherit"},children:"Hover or press Play"})})})},NavBar:{css:[lg,ep],...gn("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:co,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(l,a)=>a("current",co[(co.indexOf(l.current)+1)%co.length]),render:(l,a)=>d.jsx("div",{onClickCapture:i=>{const c=i.target.closest("a");c&&(i.preventDefault(),a("current",c.textContent.trim().toLowerCase()))},children:d.jsx(Xm,{brand:d.jsx("span",{children:"Shokunin"}),underline:l.underline,links:co.map(i=>({href:`#${i}`,label:i[0].toUpperCase()+i.slice(1),current:i===l.current}))})})},PlusUnderline:{css:[ep],...gn("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Vt,default:"day"}],play:(l,a)=>a("active",Vt[(Vt.indexOf(l.active)+1)%Vt.length]),render:(l,a)=>d.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Vt.map(i=>d.jsxs("button",{type:"button",role:"tab","aria-selected":i===l.active,onClick:()=>a("active",i),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[i[0].toUpperCase()+i.slice(1),d.jsx(gp,{active:i===l.active})]},i))})},Button:{css:[og],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(l,a,i)=>d.jsx(im,{variant:l.variant,size:l.size,disabled:l.disabled,loading:l.loading,arrow:l.arrow,sound:!1,onClick:()=>i(),children:l.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(l,a,i,c)=>d.jsx(nv,{p:l,ctx:c})}},vp=l=>{var a;return((a=l==null?void 0:l.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:a[1].split(",").map(Number))||null};function rv(l){var c;const a=vp(l);if(a){const p=[];for(let f=0;f<=40;f+=1){const m=f/40,v=3*(1-m)**2*m*a[0]+3*(1-m)*m**2*a[2]+m**3,k=3*(1-m)**2*m*a[1]+3*(1-m)*m**2*a[3]+m**3;p.push([v,k])}return p}const i=(c=l==null?void 0:l.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return i?i.map((p,f)=>[f/(i.length-1),p]):[[0,0],[1,1]]}function ov(l){const a=rv(l),i=a.map(m=>m[1]),c=Math.min(0,...i),f=Math.max(1,...i)-c||1;return a.map(([m,v],k)=>`${k?"L":"M"}${m.toFixed(3)} ${(1-(v-c)/f).toFixed(3)}`).join(" ")}const Ct=(l,a=2)=>+(+l).toFixed(a),Oi=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function xp(l){Oi.fillStyle="#000",Oi.fillStyle=l;const a=Oi.fillStyle;if(a.startsWith("#"))return{hex:a,a:1};const i=a.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return i?{hex:"#"+[i[1],i[2],i[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:i[4]!==void 0?+i[4]:1}:{hex:"#000000",a:1}}function Os(l,a){if(a>=1)return l.toUpperCase();const i=parseInt(l.slice(1),16);return`rgb(${i>>16&255} ${i>>8&255} ${i&255} / ${+a.toFixed(3)})`}const sv=l=>String(l).endsWith("ms")?parseFloat(l):parseFloat(l)*1e3;function yp({label:l,value:a,spring:i,presets:c,asRef:p,onChange:f}){const[m,v]=S.useState(i?"spring":"bezier"),k=vp(a)||[.25,.1,.25,1],E=i||{stiffness:260,damping:22,mass:1},C=N=>{const R=As(N);f(R.easing,N,R.settleMs)},z=i?As(i):null;return d.jsxs("div",{className:F.easing,children:[d.jsxs("div",{className:F.editor,children:[d.jsx("svg",{className:F.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:d.jsx("path",{d:ov(a)})}),d.jsxs("select",{"aria-label":`${l} mode`,value:m,onChange:N=>{v(N.target.value),N.target.value==="spring"?C(E):f(`cubic-bezier(${k.join(", ")})`,null,null)},children:[d.jsx("option",{value:"bezier",children:"bezier"}),d.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&d.jsxs("select",{"aria-label":`${l} preset`,value:"",onChange:N=>{const R=c.find(V=>V.name===N.target.value);R&&(v("bezier"),f(p?`var(${R.name})`:R.value,null,null))},children:[d.jsx("option",{value:"",children:"token…"}),c.map(N=>d.jsx("option",{value:N.name,children:N.name.replace("--sc-p-motion-easing-","")},N.name))]})]}),m==="bezier"?d.jsx("div",{className:F.editor,children:k.map((N,R)=>d.jsx("input",{type:"number","aria-label":`${l} bezier point ${R+1}`,className:F.num,step:"0.01",value:N,onChange:V=>{const O=[...k];O[R]=+V.target.value,f(`cubic-bezier(${O.join(", ")})`,null,null)}},R))}):d.jsxs("div",{className:F.springRows,children:[(()=>{const N=2*Math.PI*Math.sqrt(E.mass/E.stiffness),R=1-E.damping*N/(4*Math.PI*E.mass),V=(O,Q)=>C({...E,stiffness:+((2*Math.PI/O)**2*E.mass).toFixed(1),damping:+(4*Math.PI*(1-Q)*E.mass/O).toFixed(2)});return d.jsxs(d.Fragment,{children:[d.jsxs("label",{className:F.mini,children:["duration",d.jsx("input",{type:"range","aria-label":`${l} spring duration`,min:50,max:2e3,step:10,value:Math.round(N*1e3),onChange:O=>V(+O.target.value/1e3,R)}),d.jsxs("span",{className:F.readout,children:[Math.round(N*1e3),"ms"]})]}),d.jsxs("label",{className:F.mini,children:["bounce",d.jsx("input",{type:"range","aria-label":`${l} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+R.toFixed(2)),onChange:O=>V(N,+O.target.value)}),d.jsx("span",{className:F.readout,children:R.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([N,R,V,O])=>d.jsxs("label",{className:F.mini,children:[N,d.jsx("input",{type:"range",min:R,max:V,step:O,value:E[N],onChange:Q=>C({...E,[N]:+Q.target.value})}),d.jsx("span",{className:F.readout,children:E[N]})]},N)),z&&d.jsxs("span",{className:F.readout,children:["settles ",z.settleMs,"ms · overshoot ",Math.round(z.overshoot*100),"%"]})]})]})}function lv(l){const a=[];let i=0,c="";for(const p of l||"")p==="("&&(i+=1),p===")"&&(i-=1),p===","&&i===0?(a.push(c.trim()),c=""):c+=p;return c.trim()&&a.push(c.trim()),a.filter(p=>p&&p!=="none").map(p=>{var N;const f=/\binset\b/.test(p),m=((N=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:N[0])||"rgb(0 0 0 / 0.2)",v=p.replace(m,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(R=>parseFloat(R)||0),[k=0,E=0,C=0,z=0]=v;return{inset:f,x:k,y:E,blur:C,spread:z,color:m}})}const iv=l=>l.map(a=>`${a.inset?"inset ":""}${Ct(a.x)}px ${Ct(a.y)}px ${Ct(a.blur)}px ${Ct(a.spread)}px ${a.color}`).join(", ");function av({name:l,value:a,onSet:i}){const c=lv(a),p=(f,m)=>i(iv(c.map((v,k)=>k===f?{...v,...m}:v)));return d.jsx("div",{className:F.layers,children:c.map((f,m)=>{const v=xp(f.color),k=f.inset?"inner edge":(f.x<0||f.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return d.jsxs("div",{className:F.layer,children:[d.jsxs("span",{className:F.layerHead,children:["layer ",m+1," · ",k]}),d.jsx("div",{className:F.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([E,C,z,N])=>d.jsxs("label",{className:F.mini,children:[E,d.jsx("input",{type:"number",className:F.num,"aria-label":`${l} layer ${m+1} ${E}`,min:C,max:z,step:N,value:Ct(f[E]),onChange:R=>p(m,{[E]:+R.target.value})})]},E))}),d.jsxs("div",{className:F.editor,children:[d.jsx("input",{type:"color","aria-label":`${l} layer ${m+1} colour`,value:v.hex,onChange:E=>p(m,{color:Os(E.target.value,v.a)})}),d.jsxs("label",{className:F.mini,children:["opacity",d.jsx("input",{type:"range","aria-label":`${l} layer ${m+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:E=>p(m,{color:Os(v.hex,+E.target.value)})}),d.jsx("span",{className:F.readout,children:Ct(v.a)})]})]})]},m)})})}const cv=[11,12,13,14,16,20].map((l,a)=>[l,["chrome","ui","caption","dense","body","lead"][a],`--sc-p-font-size-${l}`]),uv=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],pv=l=>/^--sc-font-.*-size$/.test(l)?cv:/^--sc-size-.*icon/.test(l)?uv:null;function dv({name:l,kind:a,shipped:i,value:c,override:p,scope:f,adj:m,spring:v,pin:k,refs:E,easingPresets:C,onSet:z,onAdj:N,onSpring:R,onReset:V,onPin:O,restOf:Q,onCopyRest:oe}){const ue=p!==void 0,[se,ee]=S.useState(!!k);let pe=null;if(a==="color"){const B=xp(c);pe=d.jsxs("div",{className:F.editor,children:[d.jsx("input",{type:"color","aria-label":`${l} colour`,value:B.hex,onChange:W=>z(Os(W.target.value,B.a))}),d.jsx("input",{type:"range","aria-label":`${l} alpha`,min:"0",max:"1",step:"0.01",value:B.a,onChange:W=>z(Os(B.hex,+W.target.value))})]})}else if(a==="length"||a==="number"){const B=parseFloat(c)||0,W=Math.abs(parseFloat(i)||1),fe=a==="length"?Math.max(64,W*4):Math.max(2,W*2),me=a==="length"?"px":"",le=a==="length"?.5:.005;pe=d.jsxs("div",{className:F.editor,children:[d.jsx("input",{type:"range","aria-label":l,min:"0",max:fe,step:le,value:B,onChange:D=>z(`${D.target.value}${me}`)}),d.jsx("input",{type:"number","aria-label":`${l} value`,className:F.num,step:le,value:Ct(B,3),onChange:D=>z(`${D.target.value}${me}`)})]});const ae=pv(l);ae&&(pe=d.jsxs(d.Fragment,{children:[pe,d.jsx("div",{className:F.steps,role:"group","aria-label":`${l} scale`,children:ae.map(([D,K,U])=>d.jsxs("button",{type:"button",className:F.step,"aria-pressed":B===D,onClick:()=>z(`var(${U})`),children:[D,K&&d.jsx("span",{className:F.stepRole,children:K})]},D))})]}))}else if(a==="time"){const B=sv(c);pe=d.jsxs("div",{className:F.editor,children:[d.jsx("input",{type:"range","aria-label":l,min:"0",max:"1200",step:"10",value:B,onChange:W=>z(`${W.target.value}ms`)}),d.jsxs("span",{className:F.readout,children:[Math.round(B),"ms"]})]})}else a==="easing"?pe=d.jsx(yp,{label:l,value:c,spring:v,presets:C,asRef:!0,onChange:(B,W,fe)=>{z(B),R(W,fe)}}):a==="shadow"?pe=d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:F.editor,children:[d.jsxs("label",{className:F.mini,children:["scale all",d.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.scale)??1,onChange:B=>N({...m,scale:+B.target.value})})]}),d.jsxs("label",{className:F.mini,children:["strength all",d.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.strength)??1,onChange:B=>N({...m,strength:+B.target.value})})]})]}),d.jsx(av,{name:l,value:c,onSet:z})]}):pe=d.jsx("input",{type:"text","aria-label":l,value:c,onChange:B=>z(B.target.value)});return d.jsxs("div",{className:`${F.token} ${ue?F.changed:""}`,children:[d.jsxs("div",{className:F.tokenHead,children:[d.jsxs("code",{className:F.tokenName,children:[l.replace("--sc-",""),ue&&f&&d.jsx("span",{className:F.scope,children:f==="all"?"both modes":`${f} only`})]}),d.jsxs("span",{className:F.tokenActions,children:[Q&&d.jsx("button",{type:"button",className:F.reset,title:`Set to this concept's ${Q.replace("--sc-","")} value`,onClick:oe,children:"copy rest"}),d.jsx("button",{type:"button",className:F.reset,"aria-pressed":se,onClick:()=>ee(B=>!B),children:"note"}),ue&&d.jsx("button",{type:"button",className:F.reset,onClick:V,"aria-label":`Reset ${l}`,children:"reset"})]})]}),pe,(E==null?void 0:E.length)>0&&a!=="easing"&&d.jsxs("select",{"aria-label":`${l} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:B=>B.target.value&&z(`var(${B.target.value})`),children:[d.jsx("option",{value:"",children:"token…"}),E.map(B=>d.jsx("option",{value:B,children:B.replace("--sc-p-","")},B))]}),se&&d.jsx("input",{type:"text",className:F.pin,"aria-label":`Note on ${l}`,placeholder:"Note on this value…",value:k||"",onChange:B=>O(B.target.value)}),d.jsxs("div",{className:F.values,children:[d.jsxs("span",{title:i,children:["shipped ",i]}),ue&&d.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function fv({def:l,value:a,spring:i,easingPresets:c,onChange:p,onSpring:f}){const m=`prop-${l.name}`;let v;if(l.type==="boolean")v=d.jsx("input",{id:m,type:"checkbox",checked:!!a,onChange:k=>p(k.target.checked)});else if(l.type==="enum")v=d.jsx("select",{id:m,value:a,onChange:k=>p(k.target.value),children:l.options.map(k=>d.jsx("option",{children:k},k))});else if(l.type==="number")v=d.jsx("input",{id:m,type:"number",className:F.num,min:l.min,max:l.max,value:a,onChange:k=>p(+k.target.value)});else if(l.type==="range")v=d.jsxs(d.Fragment,{children:[d.jsx("input",{id:m,type:"range",min:l.min,max:l.max,step:l.step,value:a,onChange:k=>p(+k.target.value)}),d.jsxs("span",{className:F.readout,children:[a,l.unit||""]})]});else{if(l.type==="easing")return d.jsxs("div",{className:F.propBlock,children:[d.jsx("span",{className:F.propLabel,children:d.jsx("code",{children:l.name})}),d.jsx(yp,{label:l.name,value:a,spring:i,presets:c,onChange:(k,E,C)=>f(k,E,C)})]});v=d.jsx("input",{id:m,type:"text",value:a,onChange:k=>p(k.target.value)})}return d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:m,children:d.jsx("code",{children:l.name})}),v]})}const vn=!0,hv="./sounds/",mv=3,gv=l=>`sc-tune:v2:${l}`,vv=["all","light","dark"],wp=l=>/^--sc-(color|shadow)-/.test(l),Ps=(l,a)=>wp(l)?a:"all",Ds=()=>({all:{},light:{},dark:{}}),Ms=(l,a)=>({...l.overrides.all,...l.overrides[a]}),Di=["A","B","C","D"],Ui=l=>[...new Set(l)],$s=Ui($f.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),xv={color:$s.filter(l=>l.startsWith("--sc-p-color-")&&!l.endsWith("-rgb")),length:$s.filter(l=>/^--sc-p-(space|size|radius|border-width)-/.test(l)),time:$s.filter(l=>l.startsWith("--sc-p-motion-duration-"))},yv=$s.filter(l=>l.startsWith("--sc-p-motion-easing-"));function wv(l){var p;const a=l.join(`
`),i=Ui(((p=a.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(f=>f.slice(4)))||[]),c=Ui(a.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:i.sort(),derived:c}}const np=l=>{var a;return((a=l.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:a[1])||"other"};function Rs(l){return l?/^(cubic-bezier|ease|linear|steps)/.test(l)?"easing":/^-?[\d.]+m?s$/.test(l)?"time":/px/.test(l)&&/(rgb|#|hsl|color\(|inset)/.test(l)||/(rgb|#|hsl|color\()/.test(l)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(l.trim())?"shadow":CSS.supports("color",l)?"color":/^-?[\d.]+px$/.test(l)?"length":/^-?[\d.]+$/.test(l)?"number":"text":"text"}const Vi=(l,a)=>{if(!l)return{};const i=getComputedStyle(l);return Object.fromEntries(a.map(c=>[c,i.getPropertyValue(c).trim()]))},kv=(l,a)=>{if(!l)return{};const i=document.createElement("span");i.style.cssText="position:absolute;visibility:hidden;height:0;",l.appendChild(i);const c=Object.fromEntries(a.map(p=>(i.style.width=`var(${p})`,[p,getComputedStyle(i).width])));return i.remove(),c},rp=(l,a)=>{if(!l)return{};const i=document.createElement("div");i.style.display="none";for(const[p,f]of Object.entries(a))i.style.setProperty(p,f);l.appendChild(i);const c=Vi(i,Object.keys(a));return i.remove(),c};function bv(l,a,i){return l.replace(/(-?[\d.]+)px/g,(c,p)=>`${Ct(p*a)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,f)=>`rgba(${p}, ${Ct(Math.min(1,f*i),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${Ct(Math.min(1,p*i),3)})`)}let xn=null;const op=new Map;async function Ts(l,a,i){if(!l)return;xn=xn||new(window.AudioContext||window.webkitAudioContext),xn.state==="suspended"&&await xn.resume();let c=op.get(l);if(!c){const m=await(await fetch(hv+l)).arrayBuffer();c=await xn.decodeAudioData(m),op.set(l,c)}const p=xn.createBufferSource(),f=xn.createGain();f.gain.value=a,p.buffer=c,p.playbackRate.value=i,p.connect(f).connect(xn.destination),p.start()}const Lv=["rest","hover","focus","active"],Sv={hover:":hover",focus:":focus-visible",active:":active"};function _v(l){var p;const a=Sv[l];if(!a)return"";const i=[],c=(f,m)=>{for(const v of f){if(v.cssRules&&v.media){c(v.cssRules,E=>m(`@media ${v.media.mediaText}{${E}}`));continue}if(!v.selectorText||!v.selectorText.includes(a))continue;const k=v.selectorText.split(",").map(E=>E.trim()).filter(E=>E.includes(a)).map(E=>`[data-force='${l}'] ${E.split(a).join("")}`).join(", ");i.push(m(`${k}{${v.style.cssText}}`))}};for(const f of document.styleSheets)if(((p=f.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(f.cssRules,m=>m)}catch{}return i.join(`
`)}const qi=l=>Object.fromEntries(l.props.map(a=>[a.name,a.default]));function kp(l,a){var i,c,p;for(const[f,m]of Object.entries(((i=l.seed)==null?void 0:i.overrides)||{}))Object.values(a.overrides).some(v=>f in v)||(a.overrides.all[f]=m);for(const[f,m]of Object.entries(((c=l.seed)==null?void 0:c.scoped)||{}))for(const[v,k]of Object.entries(m))!(v in a.overrides[f])&&!(v in a.overrides.all)&&(a.overrides[f][v]=k);for(const[f,m]of Object.entries(((p=l.seed)==null?void 0:p.springs)||{})){if(a.springs[f]||Object.values(a.overrides).some(k=>f in k))continue;const v=As(m);a.springs[f]=m,a.overrides.all[f]=v.easing,a.overrides.all[f.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return a}const bp=(l,a)=>kp(l,{id:a,overrides:Ds(),shadowAdj:Ds(),springs:{},pins:{},notes:"",props:qi(l),sound:{file:l.shippedSound,volume:.7,rate:1}});function zv(l){const a=vr[l];return{component:l,notes:"",active:"A",concepts:[bp(a,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:a.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function sp(l){var a;try{const i=JSON.parse(localStorage.getItem(gv(l))||"null");if((i==null?void 0:i.component)===l&&Array.isArray(i.concepts)){for(const c of i.concepts){if(c.props={...qi(vr[l]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=Ds();for(const[m,v]of Object.entries(c.overrides))p[wp(m)?"dark":"all"][m]=v;const f=Ds();for(const[m,v]of Object.entries(c.shadowAdj||{}))f.dark[m]=v;c.overrides=p,c.shadowAdj=f}if(l==="Button")for(const p of Object.values(c.overrides))for(const f of Object.keys(p)){if(!f.startsWith("--sc-font-text-label-chrome-"))continue;const m=f.replace("label-chrome-","label-button-lg-");m in p||(p[m]=p[f]),delete p[f]}}((a=i.view)==null?void 0:a.ground)==="#E3DFD8"&&(i.view.ground="--sc-color-surface-page");for(const c of i.concepts)kp(vr[l],c);return i}}catch{}return zv(l)}function Ev(){const l=new URLSearchParams(location.search).get("c"),[a,i]=S.useState(vr[l]?l:"Switch"),[c,p]=S.useState(()=>sp(a)),[f,m]=S.useState(null),[v,k]=S.useState([]),[E,C]=S.useState(!0),[z,N]=S.useState({}),[R,V]=S.useState({}),[O,Q]=S.useState({}),[oe,ue]=S.useState(0),[se,ee]=S.useState(!1),[pe,B]=S.useState(!1),W=S.useRef(null),fe=S.useRef({}),me=S.useRef(null),le=vr[a],ae=le.kind==="motion",{tokens:D,derived:K}=S.useMemo(()=>{const y=wv(le.css);return{...y,tokens:[...new Set([...y.tokens,...le.jsTokens||[]])].sort()}},[le]),U=c.concepts.find(y=>y.id===c.active)||c.concepts[0],je=S.useMemo(()=>{const y=getComputedStyle(document.documentElement);return yv.map(j=>({name:j,value:y.getPropertyValue(j).trim()}))},[]);S.useEffect(()=>{fetch("./spec.json").then(y=>y.json()).then(y=>{i(y.component),p(y.state),m({recorded:y.recorded})})},[]),S.useEffect(()=>{},[]);const ye=y=>{i(y),p(sp(y)),history.replaceState(null,"",`?c=${y}`)};S.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const ge=c.view.force||"rest";S.useEffect(()=>{let y=document.getElementById("sc-tune-force");y||(y=document.createElement("style"),y.id="sc-tune-force",document.head.appendChild(y)),y.textContent=_v(ge)},[ge]),S.useLayoutEffect(()=>{var P;N(Vi(W.current,D));const y=Vi(W.current,D);fe.current[c.view.theme]=y,V({...y,...rp(W.current,Ms(U,c.view.theme))});const j=(P=me.current)==null?void 0:P.querySelector("[class]");Q(kv(j?j.closest("label")||j:null,K))},[D,K,U.overrides,c.view.theme,U.props]),S.useEffect(()=>{},[c,a]);const H=S.useCallback(y=>p(j=>j),[]),te=S.useCallback((y,j)=>p(P=>({...P,concepts:P.concepts.map(xe=>xe.id===y?j(xe):xe)})),[]),Z=S.useCallback(y=>(j,P)=>te(y,xe=>({...xe,props:{...xe.props,[j]:P}})),[te]),w=y=>H(j=>({...j,concepts:j.concepts.map(P=>P.id===j.active?y(P):P)})),M=c.view.theme,ce=(y,j,P)=>{const xe=Ps(j,M),de={...y,[xe]:{...y[xe]}};return P===void 0?delete de[xe][j]:de[xe][j]=P,de},he=(y,j)=>w(P=>({...P,overrides:ce(P.overrides,y,j)})),we=y=>w(j=>{const P={...j.springs};return delete P[y],{...j,overrides:ce(j.overrides,y,void 0),shadowAdj:ce(j.shadowAdj,y,void 0),springs:P}}),ke=(y,j,P)=>w(xe=>{const de={...xe.springs};let Le=xe.overrides;if(j){de[y]=j;const tt=y.replace(/-easing$/,"-duration");tt!==y&&D.includes(tt)&&(Le=ce(Le,tt,`${P}ms`))}else delete de[y];return{...xe,springs:de,overrides:Le}}),Ce=(y,j)=>w(P=>({...P,shadowAdj:ce(P.shadowAdj,y,j),overrides:ce(P.overrides,y,bv(z[y],j.scale??1,j.strength??1))})),_e=(y,j)=>w(P=>({...P,pins:{...P.pins,[y]:j}})),ze=(y,j)=>w(P=>({...P,sound:{...P.sound,[y]:j}})),Ie=(y,j)=>p(P=>({...P,view:{...P.view,[y]:j}})),Wt=le.props.some(y=>y.name==="disabled"),ho=y=>p(j=>({...j,view:{...j.view,force:y==="disabled"?"rest":y},concepts:Wt?j.concepts.map(P=>({...P,props:{...P.props,disabled:y==="disabled"}})):j.concepts})),kn=y=>H(j=>{const P=Di.find(Le=>!j.concepts.some(tt=>tt.id===Le));if(!P)return j;const xe=j.concepts.find(Le=>Le.id===j.active),de=y?{...structuredClone(xe),id:P,notes:""}:bp(le,P);return{...j,concepts:[...j.concepts,de],active:P}}),wr=y=>H(j=>{if(j.concepts.length<2)return j;const P=j.concepts.filter(xe=>xe.id!==y);return{...j,concepts:P,active:P[0].id,pick:j.pick.id===y?{id:null,reason:j.pick.reason}:j.pick}}),mo=()=>p(y=>{const j=!y.view.blind,P=j?[...y.concepts.map(xe=>xe.id)].sort(()=>Math.random()-.5):null;return{...y,view:{...y.view,blind:j,order:P,compare:j?!0:y.view.compare}}}),Bn=S.useCallback(()=>{ue(j=>j+1),le.play&&c.concepts.forEach(j=>le.play(j.props,Z(j.id)));const y=c.concepts.find(j=>j.id===c.active);y!=null&&y.sound.file&&Ts(y.sound.file,y.sound.volume,y.sound.rate)},[le,c.concepts,c.active,Z]),Hn=ae?Math.max(1200,Ai(U.props)*c.view.slow+900):1400*c.view.slow;S.useEffect(()=>{if(!se)return;const y=setInterval(Bn,Hn);return()=>clearInterval(y)},[se,Bn,Hn]);const go=D.filter(y=>Rs(z[y])==="time"),Un=y=>{const j=c.view.ground,P=j.startsWith("--")?{background:`var(${j})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:j,"--sc-color-surface-page":j},xe={zoom:c.view.zoom,...P,...y};if(c.view.slow!==1)for(const de of go)xe[de]=`calc(${y[de]??z[de]} * ${c.view.slow})`;return xe},Qt=S.useCallback(()=>{const y=W.current,j=P=>P.id;return{tool:"sc-tune",version:mv,component:a,kind:le.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(P=>{const xe=rp(y,Ms(P,c.view.theme));return{id:j(P),notes:P.notes,props:P.props,sound:{...P.sound,shipped:le.shippedSound,trigger:le.trigger},tokens:vv.flatMap(de=>Object.keys(P.overrides[de]).map(Le=>{var yo;const tt=de==="all"?z:fe.current[de]||{},Ft=P.overrides[de][Le],xo=de==="all"||de===c.view.theme;return{name:Le,mode:de,category:np(Le),kind:Rs(tt[Le]||z[Le]),shipped:tt[Le]??null,tuned:xo?xe[Le]??Ft:Ft,override:Ft,...(yo=P.shadowAdj[de])!=null&&yo[Le]?{shadowAdjust:P.shadowAdj[de][Le]}:{},...P.springs[Le]?{spring:{...P.springs[Le],...lp(P.springs[Le])}}:{}}})),pins:Object.fromEntries(Object.entries(P.pins).filter(([,de])=>de)),...ae?{motion:{lastFrameMs:Ai(P.props),...P.springs["prop:easing"]?{spring:{...P.springs["prop:easing"],...lp(P.springs["prop:easing"])}}:{}}}:{}}}),derived:O,tokenCount:D.length,state:c}},[a,le,ae,c,z,O,D]);S.useEffect(()=>{window.scTune={export:Qt,component:a}},[Qt,a]);const Kt=S.useMemo(()=>{var j;const y={};for(const P of D)(y[j=np(P)]||(y[j]=[])).push(P);return y},[D]),kr=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(y=>c.concepts.find(j=>j.id===y)).filter(Boolean):c.concepts:[U],br={replay:oe,slow:c.view.slow};v.filter(y=>!E||y.seconds<=1);const Lr=Ms(U,c.view.theme),vo=Object.keys(Lr).length;return d.jsxs("div",{className:F.app,children:[d.jsxs("header",{className:F.bar,children:[d.jsx("span",{className:F.brand,children:"sc-tune"}),d.jsx("select",{"aria-label":"Subject",value:a,disabled:vn,onChange:y=>ye(y.target.value),children:Object.keys(vr).map(y=>d.jsx("option",{children:y},y))}),d.jsxs("span",{className:F.meta,children:[ae?"choreography":`${D.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),f&&d.jsxs("span",{className:F.meta,children:["snapshot · recorded ",f.recorded]}),d.jsx("span",{className:F.spacer}),d.jsx("button",{type:"button",onClick:Bn,children:"Play"}),d.jsx("button",{type:"button","aria-pressed":se,onClick:()=>ee(y=>!y),children:se?"Stop loop":"Loop"}),d.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:y=>Ie("slow",+y.target.value),children:[d.jsx("option",{value:1,children:"1×"}),d.jsx("option",{value:2,children:"½×"}),d.jsx("option",{value:4,children:"¼×"}),d.jsx("option",{value:10,children:"⅒×"})]}),d.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>Ie("compare",!c.view.compare),children:"Compare"}),d.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:mo,children:c.view.blind?"Reveal":"Blind"}),!vn]}),d.jsx("main",{className:F.stages,children:d.jsxs(Ff,{enabled:!1,children:[!c.view.blind&&d.jsxs("section",{className:F.stageWrap,"aria-label":ae?"Default":"Shipped",children:[d.jsx("h2",{className:F.stageLabel,children:ae?"Default":"Shipped"}),d.jsx("div",{className:F.stage,style:Un({}),ref:W,inert:"","data-force":ge,children:le.render(ae?qi(le):U.props,()=>{},()=>{},br)})]}),c.view.blind&&d.jsx("div",{ref:W,hidden:!0}),kr.map((y,j)=>{const P=c.view.blind?`Concept ${j+1}`:`${y.id}${y.id===c.active?" · editing":""}${c.pick.id===y.id?" · picked":""}`;return d.jsxs("section",{className:`${F.stageWrap} ${y.id===c.active&&!c.view.blind?F.activeStage:""}`,"aria-label":P,children:[d.jsxs("h2",{className:F.stageLabel,children:[c.view.compare&&!c.view.blind?d.jsx("button",{type:"button",className:F.stageSelect,onClick:()=>p(xe=>({...xe,active:y.id})),children:P}):P,ae&&d.jsxs("span",{className:F.readout,children:[" · last frame ",Ai(y.props),"ms"]})]}),d.jsx("div",{className:F.stage,style:Un(Ms(y,M)),ref:y.id===c.active?me:void 0,"data-force":ge,children:le.render(y.props,Z(y.id),()=>Ts(y.sound.file,y.sound.volume,y.sound.rate),br)})]},y.id)})]})}),d.jsxs("aside",{className:F.panel,children:[d.jsxs("fieldset",{className:F.group,disabled:vn,children:[d.jsx("legend",{children:"Notes for the build"}),d.jsx("textarea",{className:F.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:y=>p(j=>({...j,notes:y.target.value}))})]}),d.jsxs("fieldset",{className:F.group,disabled:vn,children:[d.jsx("legend",{children:"Concepts"}),d.jsxs("div",{className:F.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(y=>d.jsx("button",{type:"button",role:"tab","aria-selected":y.id===c.active,className:F.tab,onClick:()=>p(j=>({...j,active:y.id})),children:y.id},y.id)),d.jsx("button",{type:"button",className:F.tab,disabled:c.concepts.length>=Di.length,onClick:()=>kn(!0),children:"duplicate"}),d.jsx("button",{type:"button",className:F.tab,disabled:c.concepts.length>=Di.length,onClick:()=>kn(!1),children:"new"}),d.jsxs("button",{type:"button",className:F.tab,disabled:c.concepts.length<2,onClick:()=>wr(U.id),children:["remove ",U.id]})]}),d.jsx("textarea",{className:F.notes,"aria-label":`Notes on concept ${U.id}`,placeholder:`What concept ${U.id} is trying…`,value:U.notes,onChange:y=>w(j=>({...j,notes:y.target.value}))}),c.concepts.length>1&&d.jsxs("div",{className:F.pick,children:[d.jsx("span",{className:F.propLabel,children:d.jsx("code",{children:"pick"})}),c.concepts.map(y=>d.jsxs("label",{className:F.mini,children:[d.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===y.id,onChange:()=>p(j=>({...j,pick:{...j.pick,id:y.id}}))})," ",y.id]},y.id)),d.jsx("textarea",{className:F.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:y=>p(j=>({...j,pick:{...j.pick,reason:y.target.value}}))})]})]}),d.jsxs("fieldset",{className:F.group,disabled:vn,children:[d.jsx("legend",{children:"View"}),d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"v-theme",children:d.jsx("code",{children:"theme"})}),d.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:y=>Ie("theme",y.target.value),children:[d.jsx("option",{children:"light"}),d.jsx("option",{children:"dark"})]})]}),d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"v-zoom",children:d.jsx("code",{children:"zoom"})}),d.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:y=>Ie("zoom",+y.target.value)}),d.jsxs("span",{className:F.readout,children:[c.view.zoom,"×"]})]}),d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"v-ground",children:d.jsx("code",{children:"ground"})}),d.jsx("select",{id:"v-ground",value:c.view.ground,onChange:y=>Ie("ground",y.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(y=>d.jsx("option",{value:y,children:y.replace("--sc-color-","")},y))})]})]}),d.jsxs("fieldset",{className:F.group,disabled:vn,children:[d.jsxs("legend",{children:[ae?"Motion":"Props"," · concept ",U.id]}),(()=>{const y=le.props.map(j=>d.jsx(fv,{def:j,value:U.props[j.name],spring:U.springs[`prop:${j.name}`],easingPresets:je,onChange:P=>Z(U.id)(j.name,P),onSpring:(P,xe,de)=>w(Le=>{const tt={...Le.springs},Ft={...Le.props,[j.name]:P};return xe?(tt[`prop:${j.name}`]=xe,j.durationProp&&(Ft[j.durationProp]=de)):delete tt[`prop:${j.name}`],{...Le,springs:tt,props:Ft}})},j.name));return ae||y.splice(Math.min(3,y.length),0,d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"p-state",children:d.jsx("code",{children:"state"})}),d.jsxs("select",{id:"p-state",value:Wt&&U.props.disabled?"disabled":ge,onChange:j=>ho(j.target.value),children:[Lv.map(j=>d.jsx("option",{value:j,children:j==="rest"?"default":j},j)),Wt&&d.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),y})()]}),d.jsxs("fieldset",{className:F.group,disabled:vn,children:[d.jsxs("legend",{children:["Sound · ",le.trigger]}),d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"s-vol",children:d.jsx("code",{children:"volume"})}),d.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:U.sound.volume,onChange:y=>ze("volume",+y.target.value)}),d.jsx("span",{className:F.readout,children:U.sound.volume})]}),d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"s-rate",children:d.jsx("code",{children:"pitch"})}),d.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:U.sound.rate,onChange:y=>ze("rate",+y.target.value)}),d.jsxs("span",{className:F.readout,children:[U.sound.rate,"×"]})]}),d.jsxs("div",{className:F.prop,children:[d.jsx("label",{htmlFor:"s-short",children:d.jsx("code",{children:"under 1 s only"})}),d.jsx("input",{id:"s-short",type:"checkbox",checked:E,onChange:y=>C(y.target.checked)})]}),d.jsxs("ul",{className:F.sounds,"aria-label":"Sound candidates",children:[d.jsx("li",{className:F.sound,children:d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"sound",checked:!U.sound.file,onChange:()=>ze("file",null)})," silent"]})}),(U.sound.file?[{file:U.sound.file,seconds:""}]:[]).map(y=>d.jsxs("li",{className:`${F.sound} ${y.file===le.shippedSound?F.shippedSound:""}`,children:[d.jsxs("label",{children:[d.jsx("input",{type:"radio",name:"sound",checked:U.sound.file===y.file,onChange:()=>{ze("file",y.file),Ts(y.file,U.sound.volume,U.sound.rate)}}),y.file.replace(/\.(wav|mp3)$/,"")]}),d.jsxs("span",{className:F.readout,children:[y.seconds&&`${y.seconds}s`,y.file===le.shippedSound?" · shipped":""]}),d.jsx("button",{type:"button","aria-label":`Play ${y.file}`,onClick:()=>Ts(y.file,U.sound.volume,U.sound.rate),children:"play"})]},y.file))]})]}),!ae&&d.jsxs("p",{className:F.meta,children:[vo," of ",D.length," tokens tuned in concept ",U.id,", ",M," mode. Colour and shadow edits apply to ",M," only; size, type and motion apply to both modes."]}),Object.entries(Kt).map(([y,j])=>d.jsxs("fieldset",{className:F.group,disabled:vn,children:[d.jsxs("legend",{children:[y," · ",j.length]}),j.map(P=>{var xe;return d.jsx(dv,{name:P,kind:Rs(z[P]),shipped:z[P],value:R[P]||z[P]||"",override:Lr[P],scope:U.overrides[Ps(P,M)][P]!==void 0?Ps(P,M):U.overrides.all[P]!==void 0?"all":null,adj:(xe=U.shadowAdj[Ps(P,M)])==null?void 0:xe[P],spring:U.springs[P],pin:U.pins[P],refs:xv[Rs(z[P])],easingPresets:je,onSet:de=>he(P,de),onAdj:de=>Ce(P,de),onSpring:(de,Le)=>ke(P,de,Le),onReset:()=>we(P),restOf:P.endsWith("-hover")&&D.includes(P.slice(0,-6))?P.slice(0,-6):null,onCopyRest:()=>he(P,R[P.slice(0,-6)]||z[P.slice(0,-6)]),onPin:de=>_e(P,de)},`${U.id}${M}${P}`)})]},y)),K.length>0&&d.jsxs("fieldset",{className:F.group,children:[d.jsx("legend",{children:"derived · read-only"}),K.map(y=>d.jsxs("div",{className:F.values,children:[d.jsx("code",{children:y})," ",O[y]]},y))]})]})]})}function lp(l){const a=As(l);return{settleMs:a.settleMs,overshoot:Ct(a.overshoot,3),framerMotion:{type:"spring",stiffness:l.stiffness,damping:l.damping,mass:l.mass}}}const Ii=document.getElementById("root");Ii.dataset.mounted||(Ii.dataset.mounted="true",Cf.createRoot(Ii).render(d.jsx(Ev,{})));
