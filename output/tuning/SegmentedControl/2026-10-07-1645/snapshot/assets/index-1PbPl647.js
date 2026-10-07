(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const d of p)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function i(p){const d={};return p.integrity&&(d.integrity=p.integrity),p.referrerPolicy&&(d.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?d.credentials="include":p.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(p){if(p.ep)return;p.ep=!0;const d=i(p);fetch(p.href,d)}})();function vd(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ni={exports:{}},no={},Mi={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function xd(){if(Ru)return me;Ru=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),z=Symbol.iterator;function N(w){return w===null||typeof w!="object"?null:(w=z&&w[z]||w["@@iterator"],typeof w=="function"?w:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,O={};function Q(w,P,ie){this.props=w,this.context=P,this.refs=O,this.updater=ie||R}Q.prototype.isReactComponent={},Q.prototype.setState=function(w,P){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,P,"setState")},Q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function oe(){}oe.prototype=Q.prototype;function pe(w,P,ie){this.props=w,this.context=P,this.refs=O,this.updater=ie||R}var se=pe.prototype=new oe;se.constructor=pe,U(se,Q.prototype),se.isPureReactComponent=!0;var W=Array.isArray,ae=Object.prototype.hasOwnProperty,B={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function Se(w,P,ie){var de,xe={},ye=null,je=null;if(P!=null)for(de in P.ref!==void 0&&(je=P.ref),P.key!==void 0&&(ye=""+P.key),P)ae.call(P,de)&&!ee.hasOwnProperty(de)&&(xe[de]=P[de]);var _e=arguments.length-2;if(_e===1)xe.children=ie;else if(1<_e){for(var ze=Array(_e),Ie=0;Ie<_e;Ie++)ze[Ie]=arguments[Ie+2];xe.children=ze}if(w&&w.defaultProps)for(de in _e=w.defaultProps,_e)xe[de]===void 0&&(xe[de]=_e[de]);return{$$typeof:l,type:w,key:ye,ref:je,props:xe,_owner:B.current}}function ge(w,P){return{$$typeof:l,type:w.type,key:P,ref:w.ref,props:w.props,_owner:w._owner}}function ce(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function ue(w){var P={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ie){return P[ie]})}var I=/\/+/g;function G(w,P){return typeof w=="object"&&w!==null&&w.key!=null?ue(""+w.key):P.toString(36)}function V(w,P,ie,de,xe){var ye=typeof w;(ye==="undefined"||ye==="boolean")&&(w=null);var je=!1;if(w===null)je=!0;else switch(ye){case"string":case"number":je=!0;break;case"object":switch(w.$$typeof){case l:case a:je=!0}}if(je)return je=w,xe=xe(je),w=de===""?"."+G(je,0):de,W(xe)?(ie="",w!=null&&(ie=w.replace(I,"$&/")+"/"),V(xe,P,ie,"",function(Ie){return Ie})):xe!=null&&(ce(xe)&&(xe=ge(xe,ie+(!xe.key||je&&je.key===xe.key?"":(""+xe.key).replace(I,"$&/")+"/")+w)),P.push(xe)),1;if(je=0,de=de===""?".":de+":",W(w))for(var _e=0;_e<w.length;_e++){ye=w[_e];var ze=de+G(ye,_e);je+=V(ye,P,ie,ze,xe)}else if(ze=N(w),typeof ze=="function")for(w=ze.call(w),_e=0;!(ye=w.next()).done;)ye=ye.value,ze=de+G(ye,_e++),je+=V(ye,P,ie,ze,xe);else if(ye==="object")throw P=String(w),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return je}function Ne(w,P,ie){if(w==null)return w;var de=[],xe=0;return V(w,de,"","",function(ye){return P.call(ie,ye,xe++)}),de}function we(w){if(w._status===-1){var P=w._result;P=P(),P.then(function(ie){(w._status===0||w._status===-1)&&(w._status=1,w._result=ie)},function(ie){(w._status===0||w._status===-1)&&(w._status=2,w._result=ie)}),w._status===-1&&(w._status=0,w._result=P)}if(w._status===1)return w._result.default;throw w._result}var ve={current:null},H={transition:null},te={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:H,ReactCurrentOwner:B};function K(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:Ne,forEach:function(w,P,ie){Ne(w,function(){P.apply(this,arguments)},ie)},count:function(w){var P=0;return Ne(w,function(){P++}),P},toArray:function(w){return Ne(w,function(P){return P})||[]},only:function(w){if(!ce(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},me.Component=Q,me.Fragment=i,me.Profiler=p,me.PureComponent=pe,me.StrictMode=c,me.Suspense=k,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,me.act=K,me.cloneElement=function(w,P,ie){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var de=U({},w.props),xe=w.key,ye=w.ref,je=w._owner;if(P!=null){if(P.ref!==void 0&&(ye=P.ref,je=B.current),P.key!==void 0&&(xe=""+P.key),w.type&&w.type.defaultProps)var _e=w.type.defaultProps;for(ze in P)ae.call(P,ze)&&!ee.hasOwnProperty(ze)&&(de[ze]=P[ze]===void 0&&_e!==void 0?_e[ze]:P[ze])}var ze=arguments.length-2;if(ze===1)de.children=ie;else if(1<ze){_e=Array(ze);for(var Ie=0;Ie<ze;Ie++)_e[Ie]=arguments[Ie+2];de.children=_e}return{$$typeof:l,type:w.type,key:xe,ref:ye,props:de,_owner:je}},me.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:d,_context:w},w.Consumer=w},me.createElement=Se,me.createFactory=function(w){var P=Se.bind(null,w);return P.type=w,P},me.createRef=function(){return{current:null}},me.forwardRef=function(w){return{$$typeof:v,render:w}},me.isValidElement=ce,me.lazy=function(w){return{$$typeof:j,_payload:{_status:-1,_result:w},_init:we}},me.memo=function(w,P){return{$$typeof:E,type:w,compare:P===void 0?null:P}},me.startTransition=function(w){var P=H.transition;H.transition={};try{w()}finally{H.transition=P}},me.unstable_act=K,me.useCallback=function(w,P){return ve.current.useCallback(w,P)},me.useContext=function(w){return ve.current.useContext(w)},me.useDebugValue=function(){},me.useDeferredValue=function(w){return ve.current.useDeferredValue(w)},me.useEffect=function(w,P){return ve.current.useEffect(w,P)},me.useId=function(){return ve.current.useId()},me.useImperativeHandle=function(w,P,ie){return ve.current.useImperativeHandle(w,P,ie)},me.useInsertionEffect=function(w,P){return ve.current.useInsertionEffect(w,P)},me.useLayoutEffect=function(w,P){return ve.current.useLayoutEffect(w,P)},me.useMemo=function(w,P){return ve.current.useMemo(w,P)},me.useReducer=function(w,P,ie){return ve.current.useReducer(w,P,ie)},me.useRef=function(w){return ve.current.useRef(w)},me.useState=function(w){return ve.current.useState(w)},me.useSyncExternalStore=function(w,P,ie){return ve.current.useSyncExternalStore(w,P,ie)},me.useTransition=function(){return ve.current.useTransition()},me.version="18.3.1",me}var Tu;function Wi(){return Tu||(Tu=1,Mi.exports=xd()),Mi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function yd(){if(Fu)return no;Fu=1;var l=Wi(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(v,k,E){var j,z={},N=null,R=null;E!==void 0&&(N=""+E),k.key!==void 0&&(N=""+k.key),k.ref!==void 0&&(R=k.ref);for(j in k)c.call(k,j)&&!d.hasOwnProperty(j)&&(z[j]=k[j]);if(v&&v.defaultProps)for(j in k=v.defaultProps,k)z[j]===void 0&&(z[j]=k[j]);return{$$typeof:a,type:v,key:N,ref:R,props:z,_owner:p.current}}return no.Fragment=i,no.jsx=h,no.jsxs=h,no}var $u;function wd(){return $u||($u=1,Ni.exports=yd()),Ni.exports}var f=wd(),_=Wi(),zs={},Pi={exports:{}},it={},Ri={exports:{}},Ti={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function kd(){return Au||(Au=1,(function(l){function a(H,te){var K=H.length;H.push(te);e:for(;0<K;){var w=K-1>>>1,P=H[w];if(0<p(P,te))H[w]=te,H[K]=P,K=w;else break e}}function i(H){return H.length===0?null:H[0]}function c(H){if(H.length===0)return null;var te=H[0],K=H.pop();if(K!==te){H[0]=K;e:for(var w=0,P=H.length,ie=P>>>1;w<ie;){var de=2*(w+1)-1,xe=H[de],ye=de+1,je=H[ye];if(0>p(xe,K))ye<P&&0>p(je,xe)?(H[w]=je,H[ye]=K,w=ye):(H[w]=xe,H[de]=K,w=de);else if(ye<P&&0>p(je,K))H[w]=je,H[ye]=K,w=ye;else break e}}return te}function p(H,te){var K=H.sortIndex-te.sortIndex;return K!==0?K:H.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,v=h.now();l.unstable_now=function(){return h.now()-v}}var k=[],E=[],j=1,z=null,N=3,R=!1,U=!1,O=!1,Q=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(H){for(var te=i(E);te!==null;){if(te.callback===null)c(E);else if(te.startTime<=H)c(E),te.sortIndex=te.expirationTime,a(k,te);else break;te=i(E)}}function W(H){if(O=!1,se(H),!U)if(i(k)!==null)U=!0,we(ae);else{var te=i(E);te!==null&&ve(W,te.startTime-H)}}function ae(H,te){U=!1,O&&(O=!1,oe(Se),Se=-1),R=!0;var K=N;try{for(se(te),z=i(k);z!==null&&(!(z.expirationTime>te)||H&&!ue());){var w=z.callback;if(typeof w=="function"){z.callback=null,N=z.priorityLevel;var P=w(z.expirationTime<=te);te=l.unstable_now(),typeof P=="function"?z.callback=P:z===i(k)&&c(k),se(te)}else c(k);z=i(k)}if(z!==null)var ie=!0;else{var de=i(E);de!==null&&ve(W,de.startTime-te),ie=!1}return ie}finally{z=null,N=K,R=!1}}var B=!1,ee=null,Se=-1,ge=5,ce=-1;function ue(){return!(l.unstable_now()-ce<ge)}function I(){if(ee!==null){var H=l.unstable_now();ce=H;var te=!0;try{te=ee(!0,H)}finally{te?G():(B=!1,ee=null)}}else B=!1}var G;if(typeof pe=="function")G=function(){pe(I)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Ne=V.port2;V.port1.onmessage=I,G=function(){Ne.postMessage(null)}}else G=function(){Q(I,0)};function we(H){ee=H,B||(B=!0,G())}function ve(H,te){Se=Q(function(){H(l.unstable_now())},te)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(H){H.callback=null},l.unstable_continueExecution=function(){U||R||(U=!0,we(ae))},l.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<H?Math.floor(1e3/H):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_getFirstCallbackNode=function(){return i(k)},l.unstable_next=function(H){switch(N){case 1:case 2:case 3:var te=3;break;default:te=N}var K=N;N=te;try{return H()}finally{N=K}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(H,te){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=N;N=H;try{return te()}finally{N=K}},l.unstable_scheduleCallback=function(H,te,K){var w=l.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?w+K:w):K=w,H){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=K+P,H={id:j++,callback:te,priorityLevel:H,startTime:K,expirationTime:P,sortIndex:-1},K>w?(H.sortIndex=K,a(E,H),i(k)===null&&H===i(E)&&(O?(oe(Se),Se=-1):O=!0,ve(W,K-w))):(H.sortIndex=P,a(k,H),U||R||(U=!0,we(ae))),H},l.unstable_shouldYield=ue,l.unstable_wrapCallback=function(H){var te=N;return function(){var K=N;N=te;try{return H.apply(this,arguments)}finally{N=K}}}})(Ti)),Ti}var Ou;function bd(){return Ou||(Ou=1,Ri.exports=kd()),Ri.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Ld(){if(Du)return it;Du=1;var l=Wi(),a=bd();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},z={};function N(e){return k.call(z,e)?!0:k.call(j,e)?!1:E.test(e)?z[e]=!0:(j[e]=!0,!1)}function R(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,t,n,r){if(t===null||typeof t>"u"||R(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,o,s,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,pe);Q[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,pe);Q[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,pe);Q[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function se(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U(t,n,o,r)&&(n=null),r||o===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var W=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),B=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),ue=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),H=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,w;function P(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ie=!1;function de(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var o=S.stack.split(`
`),s=r.stack.split(`
`),u=o.length-1,m=s.length-1;1<=u&&0<=m&&o[u]!==s[m];)m--;for(;1<=u&&0<=m;u--,m--)if(o[u]!==s[m]){if(u!==1||m!==1)do if(u--,m--,0>m||o[u]!==s[m]){var g=`
`+o[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=m);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function xe(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case B:return"Portal";case ge:return"Profiler";case Se:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ue:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _e(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ie(e){var t=ze(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){e._valueTracker||(e._valueTracker=Ie(e))}function fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ze(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gr(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_e(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function On(e,t){t=t.checked,t!=null&&se(e,"checked",t,!1)}function Dn(e,t){On(e,t);var n=_e(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?In(e,t.type,n):t.hasOwnProperty("defaultValue")&&In(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function In(e,t,n){(t!=="number"||xn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qt=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_e(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(i(92));if(Qt(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_e(n)}}function yr(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function y(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function C(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?y(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var M,he=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(M=M||document.createElement("div"),M.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=M.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(e){tt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]})});function Ft(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function vo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ft(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xo=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(xo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Bn=null,Hn=null;function Yi(e){if(e=Br(e)){if(typeof Qs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Bo(t),Qs(e.stateNode,e.type,t))}}function qi(e){Bn?Hn?Hn.push(e):Hn=[e]:Bn=e}function Ji(){if(Bn){var e=Bn,t=Hn;if(Hn=Bn=null,Yi(e),t)for(e=0;e<t.length;e++)Yi(t[e])}}function Xi(e,t){return e(t)}function ea(){}var Ks=!1;function ta(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return Xi(e,t,n)}finally{Ks=!1,(Bn!==null||Hn!==null)&&(ea(),Ji())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Zs=!1;if(v)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Zs=!1}function bp(e,t,n,r,o,s,u,m,g){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch($){this.onError($)}}var br=!1,yo=null,wo=!1,Gs=null,Lp={onError:function(e){br=!0,yo=e}};function Sp(e,t,n,r,o,s,u,m,g){br=!1,yo=null,bp.apply(Lp,arguments)}function _p(e,t,n,r,o,s,u,m,g){if(Sp.apply(this,arguments),br){if(br){var S=yo;br=!1,yo=null}else throw Error(i(198));wo||(wo=!0,Gs=S)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(yn(e)!==e)throw Error(i(188))}function zp(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return ra(o),e;if(s===r)return ra(o),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=s;else{for(var u=!1,m=o.child;m;){if(m===n){u=!0,n=o,r=s;break}if(m===r){u=!0,r=o,n=s;break}m=m.sibling}if(!u){for(m=s.child;m;){if(m===n){u=!0,n=s,r=o;break}if(m===r){u=!0,r=s,n=o;break}m=m.sibling}if(!u)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function oa(e){return e=zp(e),e!==null?sa(e):null}function sa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sa(e);if(t!==null)return t;e=e.sibling}return null}var la=a.unstable_scheduleCallback,ia=a.unstable_cancelCallback,Ep=a.unstable_shouldYield,jp=a.unstable_requestPaint,Ae=a.unstable_now,Cp=a.unstable_getCurrentPriorityLevel,Ys=a.unstable_ImmediatePriority,aa=a.unstable_UserBlockingPriority,ko=a.unstable_NormalPriority,Np=a.unstable_LowPriority,ca=a.unstable_IdlePriority,bo=null,Ct=null;function Mp(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Tp,Pp=Math.log,Rp=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(Pp(e)/Rp|0)|0}var Lo=64,So=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,u=n&268435455;if(u!==0){var m=u&~o;m!==0?r=Lr(m):(s&=u,s!==0&&(r=Lr(s)))}else u=n&~o,u!==0?r=Lr(u):s!==0&&(r=Lr(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),o=1<<n,r|=e[n],t&=~o;return r}function Fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-kt(s),m=1<<u,g=o[u];g===-1?((m&n)===0||(m&r)!==0)&&(o[u]=Fp(m,t)):g<=t&&(e.expiredLanes|=m),s&=~m}}function qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ua(){var e=Lo;return Lo<<=1,(Lo&4194240)===0&&(Lo=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function Ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-kt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ee=0;function pa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fa,el,da,ma,ha,tl=!1,zo=[],Zt=null,Gt=null,Yt=null,_r=new Map,zr=new Map,qt=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function Er(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Br(t),t!==null&&el(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dp(e,t,n,r,o){switch(t){case"focusin":return Zt=Er(Zt,e,t,n,r,o),!0;case"dragenter":return Gt=Er(Gt,e,t,n,r,o),!0;case"mouseover":return Yt=Er(Yt,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return _r.set(s,Er(_r.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,zr.set(s,Er(zr.get(s)||null,e,t,n,r,o)),!0}return!1}function va(e){var t=wn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=na(n),t!==null){e.blockedOn=t,ha(e.priority,function(){da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vs=r,n.target.dispatchEvent(r),Vs=null}else return t=Br(n),t!==null&&el(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){Eo(e)&&n.delete(t)}function Ip(){tl=!1,Zt!==null&&Eo(Zt)&&(Zt=null),Gt!==null&&Eo(Gt)&&(Gt=null),Yt!==null&&Eo(Yt)&&(Yt=null),_r.forEach(xa),zr.forEach(xa)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ip)))}function Cr(e){function t(o){return jr(o,e)}if(0<zo.length){jr(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&jr(Zt,e),Gt!==null&&jr(Gt,e),Yt!==null&&jr(Yt,e),_r.forEach(t),zr.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)va(n),n.blockedOn===null&&qt.shift()}var Un=W.ReactCurrentBatchConfig,jo=!0;function Bp(e,t,n,r){var o=Ee,s=Un.transition;Un.transition=null;try{Ee=1,nl(e,t,n,r)}finally{Ee=o,Un.transition=s}}function Hp(e,t,n,r){var o=Ee,s=Un.transition;Un.transition=null;try{Ee=4,nl(e,t,n,r)}finally{Ee=o,Un.transition=s}}function nl(e,t,n,r){if(jo){var o=rl(e,t,n,r);if(o===null)wl(e,t,r,Co,n),ga(e,r);else if(Dp(o,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<Op.indexOf(e)){for(;o!==null;){var s=Br(o);if(s!==null&&fa(s),s=rl(e,t,n,r),s===null&&wl(e,t,r,Co,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Co=null;function rl(e,t,n,r){if(Co=null,e=Ws(r),e=wn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function ya(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cp()){case Ys:return 1;case aa:return 4;case ko:case Np:return 16;case ca:return 536870912;default:return 16}default:return 16}}var Jt=null,ol=null,No=null;function wa(){if(No)return No;var e,t=ol,n=t.length,r,o="value"in Jt?Jt.value:Jt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[s-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function ka(){return!1}function at(e){function t(n,r,o,s,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:ka,this.isPropagationStopped=ka,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=at(Vn),Nr=K({},Vn,{view:0,detail:0}),Up=at(Nr),ll,il,Mr,Ro=K({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(ll=e.screenX-Mr.screenX,il=e.screenY-Mr.screenY):il=ll=0,Mr=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:il}}),ba=at(Ro),Vp=K({},Ro,{dataTransfer:0}),Wp=at(Vp),Qp=K({},Nr,{relatedTarget:0}),al=at(Qp),Kp=K({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zp=at(Kp),Gp=K({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=at(Gp),qp=K({},Vn,{data:0}),La=at(qp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function cl(){return tf}var nf=K({},Nr,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=at(nf),of=K({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sa=at(of),sf=K({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),lf=at(sf),af=K({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=at(af),uf=K({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=at(uf),ff=[9,13,27,32],ul=v&&"CompositionEvent"in window,Pr=null;v&&"documentMode"in document&&(Pr=document.documentMode);var df=v&&"TextEvent"in window&&!Pr,_a=v&&(!ul||Pr&&8<Pr&&11>=Pr),za=" ",Ea=!1;function ja(e,t){switch(e){case"keyup":return ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ca(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function mf(e,t){switch(e){case"compositionend":return Ca(t);case"keypress":return t.which!==32?null:(Ea=!0,za);case"textInput":return e=t.data,e===za&&Ea?null:e;default:return null}}function hf(e,t){if(Wn)return e==="compositionend"||!ul&&ja(e,t)?(e=wa(),No=ol=Jt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _a&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function Ma(e,t,n,r){qi(r),t=Oo(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Tr=null;function vf(e){Ga(e,0)}function To(e){var t=Yn(e);if(fo(t))return e}function xf(e,t){if(e==="change")return t}var Pa=!1;if(v){var pl;if(v){var fl="oninput"in document;if(!fl){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),fl=typeof Ra.oninput=="function"}pl=fl}else pl=!1;Pa=pl&&(!document.documentMode||9<document.documentMode)}function Ta(){Rr&&(Rr.detachEvent("onpropertychange",Fa),Tr=Rr=null)}function Fa(e){if(e.propertyName==="value"&&To(Tr)){var t=[];Ma(t,Tr,e,Ws(e)),ta(vf,t)}}function yf(e,t,n){e==="focusin"?(Ta(),Rr=t,Tr=n,Rr.attachEvent("onpropertychange",Fa)):e==="focusout"&&Ta()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Tr)}function kf(e,t){if(e==="click")return To(t)}function bf(e,t){if(e==="input"||e==="change")return To(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Lf;function Fr(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,t){var n=$a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$a(n)}}function Oa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Da(){for(var e=window,t=xn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xn(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=Da(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Oa(n.ownerDocument.documentElement,n)){if(r!==null&&dl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Aa(n,s);var u=Aa(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _f=v&&"documentMode"in document&&11>=document.documentMode,Qn=null,ml=null,$r=null,hl=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||Qn==null||Qn!==xn(r)||(r=Qn,"selectionStart"in r&&dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Fr($r,r)||($r=r,r=Oo(ml,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},gl={},Ba={};v&&(Ba=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function $o(e){if(gl[e])return gl[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ba)return gl[e]=t[n];return e}var Ha=$o("animationend"),Ua=$o("animationiteration"),Va=$o("animationstart"),Wa=$o("transitionend"),Qa=new Map,Ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Qa.set(e,t),d(t,[e])}for(var vl=0;vl<Ka.length;vl++){var xl=Ka[vl],zf=xl.toLowerCase(),Ef=xl[0].toUpperCase()+xl.slice(1);Xt(zf,"on"+Ef)}Xt(Ha,"onAnimationEnd"),Xt(Ua,"onAnimationIteration"),Xt(Va,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Wa,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_p(r,t,void 0,e),e.currentTarget=null}function Ga(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var u=r.length-1;0<=u;u--){var m=r[u],g=m.instance,S=m.currentTarget;if(m=m.listener,g!==s&&o.isPropagationStopped())break e;Za(o,m,S),s=g}else for(u=0;u<r.length;u++){if(m=r[u],g=m.instance,S=m.currentTarget,m=m.listener,g!==s&&o.isPropagationStopped())break e;Za(o,m,S),s=g}}}if(wo)throw e=Gs,wo=!1,Gs=null,e}function Me(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(Ya(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),Ya(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[Ao]){e[Ao]=!0,c.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,yl("selectionchange",!1,t))}}function Ya(e,t,n,r){switch(ya(t)){case 1:var o=Bp;break;case 4:o=Hp;break;default:o=nl}n=o.bind(null,t,n,e),o=void 0,!Zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var m=r.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;u=u.return}for(;m!==null;){if(u=wn(m),u===null)return;if(g=u.tag,g===5||g===6){r=s=u;continue e}m=m.parentNode}}r=r.return}ta(function(){var S=s,$=Ws(n),A=[];e:{var T=Qa.get(e);if(T!==void 0){var Z=sl,q=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":Z=rf;break;case"focusin":q="focus",Z=al;break;case"focusout":q="blur",Z=al;break;case"beforeblur":case"afterblur":Z=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=lf;break;case Ha:case Ua:case Va:Z=Zp;break;case Wa:Z=cf;break;case"scroll":Z=Up;break;case"wheel":Z=pf;break;case"copy":case"cut":case"paste":Z=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Sa}var J=(t&4)!==0,Oe=!J&&e==="scroll",b=J?T!==null?T+"Capture":null:T;J=[];for(var x=S,L;x!==null;){L=x;var D=L.stateNode;if(L.tag===5&&D!==null&&(L=D,b!==null&&(D=wr(x,b),D!=null&&J.push(Dr(x,D,L)))),Oe)break;x=x.return}0<J.length&&(T=new Z(T,q,null,n,$),A.push({event:T,listeners:J}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",T&&n!==Vs&&(q=n.relatedTarget||n.fromElement)&&(wn(q)||q[$t]))break e;if((Z||T)&&(T=$.window===$?$:(T=$.ownerDocument)?T.defaultView||T.parentWindow:window,Z?(q=n.relatedTarget||n.toElement,Z=S,q=q?wn(q):null,q!==null&&(Oe=yn(q),q!==Oe||q.tag!==5&&q.tag!==6)&&(q=null)):(Z=null,q=S),Z!==q)){if(J=ba,D="onMouseLeave",b="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(J=Sa,D="onPointerLeave",b="onPointerEnter",x="pointer"),Oe=Z==null?T:Yn(Z),L=q==null?T:Yn(q),T=new J(D,x+"leave",Z,n,$),T.target=Oe,T.relatedTarget=L,D=null,wn($)===S&&(J=new J(b,x+"enter",q,n,$),J.target=L,J.relatedTarget=Oe,D=J),Oe=D,Z&&q)t:{for(J=Z,b=q,x=0,L=J;L;L=Zn(L))x++;for(L=0,D=b;D;D=Zn(D))L++;for(;0<x-L;)J=Zn(J),x--;for(;0<L-x;)b=Zn(b),L--;for(;x--;){if(J===b||b!==null&&J===b.alternate)break t;J=Zn(J),b=Zn(b)}J=null}else J=null;Z!==null&&qa(A,T,Z,J,!1),q!==null&&Oe!==null&&qa(A,Oe,q,J,!0)}}e:{if(T=S?Yn(S):window,Z=T.nodeName&&T.nodeName.toLowerCase(),Z==="select"||Z==="input"&&T.type==="file")var X=xf;else if(Na(T))if(Pa)X=bf;else{X=wf;var ne=yf}else(Z=T.nodeName)&&Z.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(X=kf);if(X&&(X=X(e,S))){Ma(A,X,n,$);break e}ne&&ne(e,T,S),e==="focusout"&&(ne=T._wrapperState)&&ne.controlled&&T.type==="number"&&In(T,"number",T.value)}switch(ne=S?Yn(S):window,e){case"focusin":(Na(ne)||ne.contentEditable==="true")&&(Qn=ne,ml=S,$r=null);break;case"focusout":$r=ml=Qn=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,Ia(A,n,$);break;case"selectionchange":if(_f)break;case"keydown":case"keyup":Ia(A,n,$)}var re;if(ul)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Wn?ja(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(_a&&n.locale!=="ko"&&(Wn||le!=="onCompositionStart"?le==="onCompositionEnd"&&Wn&&(re=wa()):(Jt=$,ol="value"in Jt?Jt.value:Jt.textContent,Wn=!0)),ne=Oo(S,le),0<ne.length&&(le=new La(le,e,null,n,$),A.push({event:le,listeners:ne}),re?le.data=re:(re=Ca(n),re!==null&&(le.data=re)))),(re=df?mf(e,n):hf(e,n))&&(S=Oo(S,"onBeforeInput"),0<S.length&&($=new La("onBeforeInput","beforeinput",null,n,$),A.push({event:$,listeners:S}),$.data=re))}Ga(A,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=wr(e,n),s!=null&&r.unshift(Dr(e,s,o)),s=wr(e,t),s!=null&&r.push(Dr(e,s,o))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qa(e,t,n,r,o){for(var s=t._reactName,u=[];n!==null&&n!==r;){var m=n,g=m.alternate,S=m.stateNode;if(g!==null&&g===r)break;m.tag===5&&S!==null&&(m=S,o?(g=wr(n,s),g!=null&&u.unshift(Dr(n,g,m))):o||(g=wr(n,s),g!=null&&u.push(Dr(n,g,m)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Cf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Ja(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(Nf,"")}function Do(e,t,n){if(t=Ja(t),Ja(e)!==t&&n)throw Error(i(425))}function Io(){}var kl=null,bl=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Mf=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(Rf)}:Sl;function Rf(e){setTimeout(function(){throw e})}function _l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Gn,Ir="__reactProps$"+Gn,$t="__reactContainer$"+Gn,zl="__reactEvents$"+Gn,Tf="__reactListeners$"+Gn,Ff="__reactHandles$"+Gn;function wn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ec(e);e!==null;){if(n=e[Nt])return n;e=ec(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[Nt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Bo(e){return e[Ir]||null}var El=[],qn=-1;function tn(e){return{current:e}}function Pe(e){0>qn||(e.current=El[qn],El[qn]=null,qn--)}function Ce(e,t){qn++,El[qn]=e.current,e.current=t}var nn={},Ze=tn(nn),nt=tn(!1),kn=nn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function Ho(){Pe(nt),Pe(Ze)}function tc(e,t,n){if(Ze.current!==nn)throw Error(i(168));Ce(Ze,t),Ce(nt,n)}function nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(i(108,je(e)||"Unknown",o));return K({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,kn=Ze.current,Ce(Ze,e),Ce(nt,nt.current),!0}function rc(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=nc(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,Pe(nt),Pe(Ze),Ce(Ze,e)):Pe(nt),Ce(nt,n)}var At=null,Vo=!1,jl=!1;function oc(e){At===null?At=[e]:At.push(e)}function $f(e){Vo=!0,oc(e)}function rn(){if(!jl&&At!==null){jl=!0;var e=0,t=Ee;try{var n=At;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Vo=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),la(Ys,rn),o}finally{Ee=t,jl=!1}}return null}var Xn=[],er=0,Wo=null,Qo=0,ft=[],dt=0,bn=null,Ot=1,Dt="";function Ln(e,t){Xn[er++]=Qo,Xn[er++]=Wo,Wo=e,Qo=t}function sc(e,t,n){ft[dt++]=Ot,ft[dt++]=Dt,ft[dt++]=bn,bn=e;var r=Ot;e=Dt;var o=32-kt(r)-1;r&=~(1<<o),n+=1;var s=32-kt(t)+o;if(30<s){var u=o-o%5;s=(r&(1<<u)-1).toString(32),r>>=u,o-=u,Ot=1<<32-kt(t)+o|n<<o|r,Dt=s+e}else Ot=1<<s|n<<o|r,Dt=e}function Cl(e){e.return!==null&&(Ln(e,1),sc(e,1,0))}function Nl(e){for(;e===Wo;)Wo=Xn[--er],Xn[er]=null,Qo=Xn[--er],Xn[er]=null;for(;e===bn;)bn=ft[--dt],ft[dt]=null,Dt=ft[--dt],ft[dt]=null,Ot=ft[--dt],ft[dt]=null}var ct=null,ut=null,Re=!1,Lt=null;function lc(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ut=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:Ot,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ut=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(Re){var t=ut;if(t){var n=t;if(!ic(e,t)){if(Ml(e))throw Error(i(418));t=en(n.nextSibling);var r=ct;t&&ic(e,t)?lc(r,n):(e.flags=e.flags&-4097|2,Re=!1,ct=e)}}else{if(Ml(e))throw Error(i(418));e.flags=e.flags&-4097|2,Re=!1,ct=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ko(e){if(e!==ct)return!1;if(!Re)return ac(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=ut)){if(Ml(e))throw cc(),Error(i(418));for(;t;)lc(e,t),t=en(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ct?en(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=ut;e;)e=en(e.nextSibling)}function tr(){ut=ct=null,Re=!1}function Rl(e){Lt===null?Lt=[e]:Lt.push(e)}var Af=W.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(u){var m=o.refs;u===null?delete m[s]:m[s]=u},t._stringRef=s,t)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function pc(e){function t(b,x){if(e){var L=b.deletions;L===null?(b.deletions=[x],b.flags|=16):L.push(x)}}function n(b,x){if(!e)return null;for(;x!==null;)t(b,x),x=x.sibling;return null}function r(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function o(b,x){return b=fn(b,x),b.index=0,b.sibling=null,b}function s(b,x,L){return b.index=L,e?(L=b.alternate,L!==null?(L=L.index,L<x?(b.flags|=2,x):L):(b.flags|=2,x)):(b.flags|=1048576,x)}function u(b){return e&&b.alternate===null&&(b.flags|=2),b}function m(b,x,L,D){return x===null||x.tag!==6?(x=Si(L,b.mode,D),x.return=b,x):(x=o(x,L),x.return=b,x)}function g(b,x,L,D){var X=L.type;return X===ee?$(b,x,L.props.children,D,L.key):x!==null&&(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===we&&uc(X)===x.type)?(D=o(x,L.props),D.ref=Hr(b,x,L),D.return=b,D):(D=xs(L.type,L.key,L.props,null,b.mode,D),D.ref=Hr(b,x,L),D.return=b,D)}function S(b,x,L,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==L.containerInfo||x.stateNode.implementation!==L.implementation?(x=_i(L,b.mode,D),x.return=b,x):(x=o(x,L.children||[]),x.return=b,x)}function $(b,x,L,D,X){return x===null||x.tag!==7?(x=Mn(L,b.mode,D,X),x.return=b,x):(x=o(x,L),x.return=b,x)}function A(b,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Si(""+x,b.mode,L),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ae:return L=xs(x.type,x.key,x.props,null,b.mode,L),L.ref=Hr(b,null,x),L.return=b,L;case B:return x=_i(x,b.mode,L),x.return=b,x;case we:var D=x._init;return A(b,D(x._payload),L)}if(Qt(x)||te(x))return x=Mn(x,b.mode,L,null),x.return=b,x;Zo(b,x)}return null}function T(b,x,L,D){var X=x!==null?x.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return X!==null?null:m(b,x,""+L,D);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ae:return L.key===X?g(b,x,L,D):null;case B:return L.key===X?S(b,x,L,D):null;case we:return X=L._init,T(b,x,X(L._payload),D)}if(Qt(L)||te(L))return X!==null?null:$(b,x,L,D,null);Zo(b,L)}return null}function Z(b,x,L,D,X){if(typeof D=="string"&&D!==""||typeof D=="number")return b=b.get(L)||null,m(x,b,""+D,X);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ae:return b=b.get(D.key===null?L:D.key)||null,g(x,b,D,X);case B:return b=b.get(D.key===null?L:D.key)||null,S(x,b,D,X);case we:var ne=D._init;return Z(b,x,L,ne(D._payload),X)}if(Qt(D)||te(D))return b=b.get(L)||null,$(x,b,D,X,null);Zo(x,D)}return null}function q(b,x,L,D){for(var X=null,ne=null,re=x,le=x=0,We=null;re!==null&&le<L.length;le++){re.index>le?(We=re,re=null):We=re.sibling;var Le=T(b,re,L[le],D);if(Le===null){re===null&&(re=We);break}e&&re&&Le.alternate===null&&t(b,re),x=s(Le,x,le),ne===null?X=Le:ne.sibling=Le,ne=Le,re=We}if(le===L.length)return n(b,re),Re&&Ln(b,le),X;if(re===null){for(;le<L.length;le++)re=A(b,L[le],D),re!==null&&(x=s(re,x,le),ne===null?X=re:ne.sibling=re,ne=re);return Re&&Ln(b,le),X}for(re=r(b,re);le<L.length;le++)We=Z(re,b,le,L[le],D),We!==null&&(e&&We.alternate!==null&&re.delete(We.key===null?le:We.key),x=s(We,x,le),ne===null?X=We:ne.sibling=We,ne=We);return e&&re.forEach(function(dn){return t(b,dn)}),Re&&Ln(b,le),X}function J(b,x,L,D){var X=te(L);if(typeof X!="function")throw Error(i(150));if(L=X.call(L),L==null)throw Error(i(151));for(var ne=X=null,re=x,le=x=0,We=null,Le=L.next();re!==null&&!Le.done;le++,Le=L.next()){re.index>le?(We=re,re=null):We=re.sibling;var dn=T(b,re,Le.value,D);if(dn===null){re===null&&(re=We);break}e&&re&&dn.alternate===null&&t(b,re),x=s(dn,x,le),ne===null?X=dn:ne.sibling=dn,ne=dn,re=We}if(Le.done)return n(b,re),Re&&Ln(b,le),X;if(re===null){for(;!Le.done;le++,Le=L.next())Le=A(b,Le.value,D),Le!==null&&(x=s(Le,x,le),ne===null?X=Le:ne.sibling=Le,ne=Le);return Re&&Ln(b,le),X}for(re=r(b,re);!Le.done;le++,Le=L.next())Le=Z(re,b,le,Le.value,D),Le!==null&&(e&&Le.alternate!==null&&re.delete(Le.key===null?le:Le.key),x=s(Le,x,le),ne===null?X=Le:ne.sibling=Le,ne=Le);return e&&re.forEach(function(gd){return t(b,gd)}),Re&&Ln(b,le),X}function Oe(b,x,L,D){if(typeof L=="object"&&L!==null&&L.type===ee&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case ae:e:{for(var X=L.key,ne=x;ne!==null;){if(ne.key===X){if(X=L.type,X===ee){if(ne.tag===7){n(b,ne.sibling),x=o(ne,L.props.children),x.return=b,b=x;break e}}else if(ne.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===we&&uc(X)===ne.type){n(b,ne.sibling),x=o(ne,L.props),x.ref=Hr(b,ne,L),x.return=b,b=x;break e}n(b,ne);break}else t(b,ne);ne=ne.sibling}L.type===ee?(x=Mn(L.props.children,b.mode,D,L.key),x.return=b,b=x):(D=xs(L.type,L.key,L.props,null,b.mode,D),D.ref=Hr(b,x,L),D.return=b,b=D)}return u(b);case B:e:{for(ne=L.key;x!==null;){if(x.key===ne)if(x.tag===4&&x.stateNode.containerInfo===L.containerInfo&&x.stateNode.implementation===L.implementation){n(b,x.sibling),x=o(x,L.children||[]),x.return=b,b=x;break e}else{n(b,x);break}else t(b,x);x=x.sibling}x=_i(L,b.mode,D),x.return=b,b=x}return u(b);case we:return ne=L._init,Oe(b,x,ne(L._payload),D)}if(Qt(L))return q(b,x,L,D);if(te(L))return J(b,x,L,D);Zo(b,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,x!==null&&x.tag===6?(n(b,x.sibling),x=o(x,L),x.return=b,b=x):(n(b,x),x=Si(L,b.mode,D),x.return=b,b=x),u(b)):n(b,x)}return Oe}var nr=pc(!0),fc=pc(!1),Go=tn(null),Yo=null,rr=null,Tl=null;function Fl(){Tl=rr=Yo=null}function $l(e){var t=Go.current;Pe(Go),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Yo=e,Tl=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Yo===null)throw Error(i(308));rr=e,Yo.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var Sn=null;function Ol(e){Sn===null?Sn=[e]:Sn.push(e)}function dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ol(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ke&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,Ol(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var o=e.updateQueue;on=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var g=m,S=g.next;g.next=null,u===null?s=S:u.next=S,u=g;var $=e.alternate;$!==null&&($=$.updateQueue,m=$.lastBaseUpdate,m!==u&&(m===null?$.firstBaseUpdate=S:m.next=S,$.lastBaseUpdate=g))}if(s!==null){var A=o.baseState;u=0,$=S=g=null,m=s;do{var T=m.lane,Z=m.eventTime;if((r&T)===T){$!==null&&($=$.next={eventTime:Z,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var q=e,J=m;switch(T=t,Z=n,J.tag){case 1:if(q=J.payload,typeof q=="function"){A=q.call(Z,A,T);break e}A=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,T=typeof q=="function"?q.call(Z,A,T):q,T==null)break e;A=K({},A,T);break e;case 2:on=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=o.effects,T===null?o.effects=[m]:T.push(m))}else Z={eventTime:Z,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},$===null?(S=$=Z,g=A):$=$.next=Z,u|=T;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;T=m,m=T.next,T.next=null,o.lastBaseUpdate=T,o.shared.pending=null}}while(!0);if($===null&&(g=A),o.baseState=g,o.firstBaseUpdate=S,o.lastBaseUpdate=$,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);En|=u,e.lanes=u,e.memoizedState=A}}function gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(i(191,o));o.call(r)}}}var Ur={},Mt=tn(Ur),Vr=tn(Ur),Wr=tn(Ur);function _n(e){if(e===Ur)throw Error(i(174));return e}function Il(e,t){switch(Ce(Wr,t),Ce(Vr,e),Ce(Mt,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:C(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=C(t,e)}Pe(Mt),Ce(Mt,t)}function sr(){Pe(Mt),Pe(Vr),Pe(Wr)}function vc(e){_n(Wr.current);var t=_n(Mt.current),n=C(t,e.type);t!==n&&(Ce(Vr,e),Ce(Mt,n))}function Bl(e){Vr.current===e&&(Pe(Mt),Pe(Vr))}var Te=tn(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Ul(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var es=W.ReactCurrentDispatcher,Vl=W.ReactCurrentBatchConfig,zn=0,Fe=null,Be=null,Ue=null,ts=!1,Qr=!1,Kr=0,Of=0;function Ge(){throw Error(i(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Ql(e,t,n,r,o,s){if(zn=s,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,es.current=e===null||e.memoizedState===null?Hf:Uf,e=n(r,o),Qr){s=0;do{if(Qr=!1,Kr=0,25<=s)throw Error(i(301));s+=1,Ue=Be=null,t.updateQueue=null,es.current=Vf,e=n(r,o)}while(Qr)}if(es.current=os,t=Be!==null&&Be.next!==null,zn=0,Ue=Be=Fe=null,ts=!1,t)throw Error(i(300));return e}function Kl(){var e=Kr!==0;return Kr=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Fe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function ht(){if(Be===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ue===null?Fe.memoizedState:Ue.next;if(t!==null)Ue=t,Be=e;else{if(e===null)throw Error(i(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ue===null?Fe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Zr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=ht(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=Be,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var m=u=null,g=null,S=s;do{var $=S.lane;if((zn&$)===$)g!==null&&(g=g.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var A={lane:$,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};g===null?(m=g=A,u=r):g=g.next=A,Fe.lanes|=$,En|=$}S=S.next}while(S!==null&&S!==s);g===null?u=r:g.next=m,bt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,Fe.lanes|=s,En|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=ht(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);bt(s,t.memoizedState)||(ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function xc(){}function yc(e,t){var n=Fe,r=ht(),o=t(),s=!bt(r.memoizedState,o);if(s&&(r.memoizedState=o,ot=!0),r=r.queue,Yl(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Gr(9,kc.bind(null,n,r,o,t),void 0,null),Ve===null)throw Error(i(349));(zn&30)!==0||wc(n,t,o)}return o}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,r){t.value=n,t.getSnapshot=r,Lc(t)&&Sc(e)}function bc(e,t,n){return n(function(){Lc(t)&&Sc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function Sc(e){var t=It(e,1);t!==null&&Et(t,e,1,-1)}function _c(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bf.bind(null,Fe,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zc(){return ht().memoizedState}function ns(e,t,n,r){var o=Pt();Fe.flags|=e,o.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var o=ht();r=r===void 0?null:r;var s=void 0;if(Be!==null){var u=Be.memoizedState;if(s=u.destroy,r!==null&&Wl(r,u.deps)){o.memoizedState=Gr(t,n,s,r);return}}Fe.flags|=e,o.memoizedState=Gr(1|t,n,s,r)}function Ec(e,t){return ns(8390656,8,e,t)}function Yl(e,t){return rs(2048,8,e,t)}function jc(e,t){return rs(4,2,e,t)}function Cc(e,t){return rs(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,rs(4,4,Nc.bind(null,t,e),n)}function ql(){}function Pc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tc(e,t,n){return(zn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(bt(n,t)||(n=ua(),Fe.lanes|=n,En|=n,e.baseState=!0),t)}function Df(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{Ee=n,Vl.transition=r}}function Fc(){return ht().memoizedState}function If(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$c(e))Ac(t,n);else if(n=dc(e,t,n,r),n!==null){var o=et();Et(n,e,r,o),Oc(n,t,r)}}function Bf(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($c(e))Ac(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,m=s(u,n);if(o.hasEagerState=!0,o.eagerState=m,bt(m,u)){var g=t.interleaved;g===null?(o.next=o,Ol(t)):(o.next=g.next,g.next=o),t.interleaved=o;return}}catch{}finally{}n=dc(e,t,o,r),n!==null&&(o=et(),Et(n,e,r,o),Oc(n,t,r))}}function $c(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function Ac(e,t){Qr=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var os={readContext:mt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Hf={readContext:mt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ns(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return ns(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=If.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:ql,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=Df.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,o=Pt();if(Re){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ve===null)throw Error(i(349));(zn&30)!==0||wc(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Ec(bc.bind(null,r,s,e),[e]),r.flags|=2048,Gr(9,kc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Ve.identifierPrefix;if(Re){var n=Dt,r=Ot;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uf={readContext:mt,useCallback:Pc,useContext:mt,useEffect:Yl,useImperativeHandle:Mc,useInsertionEffect:jc,useLayoutEffect:Cc,useMemo:Rc,useReducer:Zl,useRef:zc,useState:function(){return Zl(Zr)},useDebugValue:ql,useDeferredValue:function(e){var t=ht();return Tc(t,Be.memoizedState,e)},useTransition:function(){var e=Zl(Zr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:yc,useId:Fc,unstable_isNewReconciler:!1},Vf={readContext:mt,useCallback:Pc,useContext:mt,useEffect:Yl,useImperativeHandle:Mc,useInsertionEffect:jc,useLayoutEffect:Cc,useMemo:Rc,useReducer:Gl,useRef:zc,useState:function(){return Gl(Zr)},useDebugValue:ql,useDeferredValue:function(e){var t=ht();return Be===null?t.memoizedState=e:Tc(t,Be.memoizedState,e)},useTransition:function(){var e=Gl(Zr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:yc,useId:Fc,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ss={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=un(e),s=Bt(r,o);s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,o),t!==null&&(Et(t,e,o,r),qo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=un(e),s=Bt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,o),t!==null&&(Et(t,e,o,r),qo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=un(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=sn(e,o,r),t!==null&&(Et(t,e,r,n),qo(t,e,r))}};function Dc(e,t,n,r,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,u):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(o,s):!0}function Ic(e,t,n){var r=!1,o=nn,s=t.contextType;return typeof s=="object"&&s!==null?s=mt(s):(o=rt(t)?kn:Ze.current,r=t.contextTypes,s=(r=r!=null)?Jn(e,o):nn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Dl(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=mt(s):(s=rt(t)?kn:Ze.current,o.context=Jn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Jl(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ss.enqueueReplaceState(o,o.state,null),Jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=xe(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fs||(fs=!0,gi=r),ti(e,t)},n}function Uc(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ti(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ti(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Vc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sd.bind(null,e,t,n),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Qf=W.ReactCurrentOwner,ot=!1;function Xe(e,t,n,r){t.child=e===null?fc(t,null,n,r):nr(t,e.child,n,r)}function Kc(e,t,n,r,o){n=n.render;var s=t.ref;return or(t,o),r=Ql(e,t,n,r,s,o),n=Kl(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(Re&&n&&Cl(t),t.flags|=1,Xe(e,t,r,o),t.child)}function Zc(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Li(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Gc(e,t,s,r,o)):(e=xs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(u,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=fn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Gc(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Fr(s,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return ni(e,t,n,r,o)}function Yc(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ar,pt),pt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(ar,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(ar,pt),pt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ce(ar,pt),pt|=r;return Xe(e,t,o,n),t.child}function qc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ni(e,t,n,r,o){var s=rt(n)?kn:Ze.current;return s=Jn(t,s),or(t,o),n=Ql(e,t,n,r,s,o),r=Kl(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(Re&&r&&Cl(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Jc(e,t,n,r,o){if(rt(n)){var s=!0;Uo(t)}else s=!1;if(or(t,o),t.stateNode===null)is(e,t),Ic(t,n,r),Xl(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,m=t.memoizedProps;u.props=m;var g=u.context,S=n.contextType;typeof S=="object"&&S!==null?S=mt(S):(S=rt(n)?kn:Ze.current,S=Jn(t,S));var $=n.getDerivedStateFromProps,A=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function";A||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==r||g!==S)&&Bc(t,u,r,S),on=!1;var T=t.memoizedState;u.state=T,Jo(t,r,u,o),g=t.memoizedState,m!==r||T!==g||nt.current||on?(typeof $=="function"&&(Jl(t,n,$,r),g=t.memoizedState),(m=on||Dc(t,n,m,r,T,g,S))?(A||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),u.props=r,u.state=g,u.context=S,r=m):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,mc(e,t),m=t.memoizedProps,S=t.type===t.elementType?m:St(t.type,m),u.props=S,A=t.pendingProps,T=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=mt(g):(g=rt(n)?kn:Ze.current,g=Jn(t,g));var Z=n.getDerivedStateFromProps;($=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==A||T!==g)&&Bc(t,u,r,g),on=!1,T=t.memoizedState,u.state=T,Jo(t,r,u,o);var q=t.memoizedState;m!==A||T!==q||nt.current||on?(typeof Z=="function"&&(Jl(t,n,Z,r),q=t.memoizedState),(S=on||Dc(t,n,S,r,T,q,g)||!1)?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,q,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,q,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=q),u.props=r,u.state=q,u.context=g,r=S):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),r=!1)}return ri(e,t,n,r,s,o)}function ri(e,t,n,r,o,s){qc(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&rc(t,n,!1),Ht(e,t,s);r=t.stateNode,Qf.current=t;var m=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=nr(t,e.child,null,s),t.child=nr(t,null,m,s)):Xe(e,t,m,s),t.memoizedState=r.state,o&&rc(t,n,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tc(e,t.context,!1),Il(e,t.containerInfo)}function eu(e,t,n,r,o){return tr(),Rl(o),t.flags|=256,Xe(e,t,n,r),t.child}var oi={dehydrated:null,treeContext:null,retryLane:0};function si(e){return{baseLanes:e,cachePool:null,transitions:null}}function tu(e,t,n){var r=t.pendingProps,o=Te.current,s=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(o&2)!==0),m?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ce(Te,o&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,s?(r=t.mode,s=t.child,u={mode:"hidden",children:u},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=ys(u,r,0,null),e=Mn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=si(n),t.memoizedState=oi,e):li(t,u));if(o=e.memoizedState,o!==null&&(m=o.dehydrated,m!==null))return Kf(e,t,u,r,m,o,n);if(s){s=r.fallback,u=t.mode,o=e.child,m=o.sibling;var g={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=fn(o,g),r.subtreeFlags=o.subtreeFlags&14680064),m!==null?s=fn(m,s):(s=Mn(s,u,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,u=e.child.memoizedState,u=u===null?si(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~n,t.memoizedState=oi,r}return s=e.child,e=s.sibling,r=fn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function li(e,t){return t=ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ls(e,t,n,r){return r!==null&&Rl(r),nr(t,e.child,null,n),e=li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,o,s,u){if(n)return t.flags&256?(t.flags&=-257,r=ei(Error(i(422))),ls(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=ys({mode:"visible",children:r.children},o,0,null),s=Mn(s,o,u,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&nr(t,e.child,null,u),t.child.memoizedState=si(u),t.memoizedState=oi,s);if((t.mode&1)===0)return ls(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var m=r.dgst;return r=m,s=Error(i(419)),r=ei(s,r,void 0),ls(e,t,u,r)}if(m=(u&e.childLanes)!==0,ot||m){if(r=Ve,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,It(e,o),Et(r,e,o,-1))}return bi(),r=ei(Error(i(421))),ls(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ld.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,ut=en(o.nextSibling),ct=t,Re=!0,Lt=null,e!==null&&(ft[dt++]=Ot,ft[dt++]=Dt,ft[dt++]=bn,Ot=e.id,Dt=e.overflow,bn=t),t=li(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function ii(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function ru(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Xe(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ii(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Xo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ii(t,!0,n,null,s);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function is(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zf(e,t,n){switch(t.tag){case 3:Xc(t),tr();break;case 5:vc(t);break;case 1:rt(t.type)&&Uo(t);break;case 4:Il(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ce(Go,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?tu(e,t,n):(Ce(Te,Te.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);Ce(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ru(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Yc(e,t,n)}return Ht(e,t,n)}var ou,ai,su,lu;ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ai=function(){},su=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,_n(Mt.current);var s=null;switch(n){case"input":o=gr(e,o),r=gr(e,r),s=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),s=[];break;case"textarea":o=vr(e,o),r=vr(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Io)}Hs(n,r);var u;n=null;for(S in o)if(!r.hasOwnProperty(S)&&o.hasOwnProperty(S)&&o[S]!=null)if(S==="style"){var m=o[S];for(u in m)m.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(p.hasOwnProperty(S)?s||(s=[]):(s=s||[]).push(S,null));for(S in r){var g=r[S];if(m=o!=null?o[S]:void 0,r.hasOwnProperty(S)&&g!==m&&(g!=null||m!=null))if(S==="style")if(m){for(u in m)!m.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&m[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(s||(s=[]),s.push(S,n)),n=g;else S==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,m=m?m.__html:void 0,g!=null&&m!==g&&(s=s||[]).push(S,g)):S==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(S,""+g):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(p.hasOwnProperty(S)?(g!=null&&S==="onScroll"&&Me("scroll",e),s||m===g||(s=[])):(s=s||[]).push(S,g))}n&&(s=s||[]).push("style",n);var S=s;(t.updateQueue=S)&&(t.flags|=4)}},lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yr(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gf(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&Ho(),Ye(t),null;case 3:return r=t.stateNode,sr(),Pe(nt),Pe(Ze),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(yi(Lt),Lt=null))),ai(e,t),Ye(t),null;case 5:Bl(t);var o=_n(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)su(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ye(t),null}if(e=_n(Mt.current),Ko(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Nt]=t,r[Ir]=s,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<Ar.length;o++)Me(Ar[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":mo(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":xr(r,s),Me("invalid",r)}Hs(n,s),o=null;for(var u in s)if(s.hasOwnProperty(u)){var m=s[u];u==="children"?typeof m=="string"?r.textContent!==m&&(s.suppressHydrationWarning!==!0&&Do(r.textContent,m,e),o=["children",m]):typeof m=="number"&&r.textContent!==""+m&&(s.suppressHydrationWarning!==!0&&Do(r.textContent,m,e),o=["children",""+m]):p.hasOwnProperty(u)&&m!=null&&u==="onScroll"&&Me("scroll",r)}switch(n){case"input":Wt(r),ho(r,s,!0);break;case"textarea":Wt(r),go(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Io)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=y(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Nt]=t,e[Ir]=r,ou(e,t,!1,!1),t.stateNode=e;e:{switch(u=Us(n,r),n){case"dialog":Me("cancel",e),Me("close",e),o=r;break;case"iframe":case"object":case"embed":Me("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ar.length;o++)Me(Ar[o],e);o=r;break;case"source":Me("error",e),o=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),o=r;break;case"details":Me("toggle",e),o=r;break;case"input":mo(e,r),o=gr(e,r),Me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),Me("invalid",e);break;case"textarea":xr(e,r),o=vr(e,r),Me("invalid",e);break;default:o=r}Hs(n,o),m=o;for(s in m)if(m.hasOwnProperty(s)){var g=m[s];s==="style"?vo(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&he(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&fe(e,g):typeof g=="number"&&fe(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(p.hasOwnProperty(s)?g!=null&&s==="onScroll"&&Me("scroll",e):g!=null&&se(e,s,g,u))}switch(n){case"input":Wt(e),ho(e,r,!1);break;case"textarea":Wt(e),go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_e(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Kt(e,!!r.multiple,s,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(i(166));if(n=_n(Wr.current),_n(Mt.current),Ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(s=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Do(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Do(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Pe(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cc(),tr(),t.flags|=98560,s=!1;else if(s=Ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(i(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));s[Nt]=t}else tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),s=!1}else Lt!==null&&(yi(Lt),Lt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?He===0&&(He=3):bi())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return sr(),ai(e,t),e===null&&Or(t.stateNode.containerInfo),Ye(t),null;case 10:return $l(t.type._context),Ye(t),null;case 17:return rt(t.type)&&Ho(),Ye(t),null;case 19:if(Pe(Te),s=t.memoizedState,s===null)return Ye(t),null;if(r=(t.flags&128)!==0,u=s.rendering,u===null)if(r)Yr(s,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Xo(e),u!==null){for(t.flags|=128,Yr(s,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Te,Te.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ae()>cr&&(t.flags|=128,r=!0,Yr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Xo(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Re)return Ye(t),null}else 2*Ae()-s.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Yr(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(n=s.last,n!==null?n.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ae(),t.sibling=null,n=Te.current,Ce(Te,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return ki(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Yf(e,t){switch(Nl(t),t.tag){case 1:return rt(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),Pe(nt),Pe(Ze),Ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bl(t),null;case 13:if(Pe(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Te),null;case 4:return sr(),null;case 10:return $l(t.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var as=!1,qe=!1,qf=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function ci(e,t,n){try{n()}catch(r){$e(e,t,r)}}var iu=!1;function Jf(e,t){if(kl=jo,e=Da(),dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,m=-1,g=-1,S=0,$=0,A=e,T=null;t:for(;;){for(var Z;A!==n||o!==0&&A.nodeType!==3||(m=u+o),A!==s||r!==0&&A.nodeType!==3||(g=u+r),A.nodeType===3&&(u+=A.nodeValue.length),(Z=A.firstChild)!==null;)T=A,A=Z;for(;;){if(A===e)break t;if(T===n&&++S===o&&(m=u),T===s&&++$===r&&(g=u),(Z=A.nextSibling)!==null)break;A=T,T=A.parentNode}A=Z}n=m===-1||g===-1?null:{start:m,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},jo=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var J=q.memoizedProps,Oe=q.memoizedState,b=t.stateNode,x=b.getSnapshotBeforeUpdate(t.elementType===t.type?J:St(t.type,J),Oe);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(D){$e(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return q=iu,iu=!1,q}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ci(t,n,s)}o=o.next}while(o!==r)}}function cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function au(e){var t=e.alternate;t!==null&&(e.alternate=null,au(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Ir],delete t[zl],delete t[Tf],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cu(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Io));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fi(e,t,n),e=e.sibling;e!==null;)fi(e,t,n),e=e.sibling}var Qe=null,_t=!1;function ln(e,t,n){for(n=n.child;n!==null;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:qe||ir(n,t);case 6:var r=Qe,o=_t;Qe=null,ln(e,t,n),Qe=r,_t=o,Qe!==null&&(_t?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(_t?(e=Qe,n=n.stateNode,e.nodeType===8?_l(e.parentNode,n):e.nodeType===1&&_l(e,n),Cr(e)):_l(Qe,n.stateNode));break;case 4:r=Qe,o=_t,Qe=n.stateNode.containerInfo,_t=!0,ln(e,t,n),Qe=r,_t=o;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&ci(n,t,u),o=o.next}while(o!==r)}ln(e,t,n);break;case 1:if(!qe&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(m){$e(n,t,m)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,ln(e,t,n),qe=r):ln(e,t,n);break;default:ln(e,t,n)}}function fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var o=id.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,u=t,m=u;e:for(;m!==null;){switch(m.tag){case 5:Qe=m.stateNode,_t=!1;break e;case 3:Qe=m.stateNode.containerInfo,_t=!0;break e;case 4:Qe=m.stateNode.containerInfo,_t=!0;break e}m=m.return}if(Qe===null)throw Error(i(160));pu(s,u,o),Qe=null,_t=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(S){$e(o,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)du(t,e),t=t.sibling}function du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Rt(e),r&4){try{qr(3,e,e.return),cs(3,e)}catch(J){$e(e,e.return,J)}try{qr(5,e,e.return)}catch(J){$e(e,e.return,J)}}break;case 1:zt(t,e),Rt(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(zt(t,e),Rt(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var o=e.stateNode;try{fe(o,"")}catch(J){$e(e,e.return,J)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,u=n!==null?n.memoizedProps:s,m=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{m==="input"&&s.type==="radio"&&s.name!=null&&On(o,s),Us(m,u);var S=Us(m,s);for(u=0;u<g.length;u+=2){var $=g[u],A=g[u+1];$==="style"?vo(o,A):$==="dangerouslySetInnerHTML"?he(o,A):$==="children"?fe(o,A):se(o,$,A,S)}switch(m){case"input":Dn(o,s);break;case"textarea":yr(o,s);break;case"select":var T=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var Z=s.value;Z!=null?Kt(o,!!s.multiple,Z,!1):T!==!!s.multiple&&(s.defaultValue!=null?Kt(o,!!s.multiple,s.defaultValue,!0):Kt(o,!!s.multiple,s.multiple?[]:"",!1))}o[Ir]=s}catch(J){$e(e,e.return,J)}}break;case 6:if(zt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(i(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(J){$e(e,e.return,J)}}break;case 3:if(zt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(J){$e(e,e.return,J)}break;case 4:zt(t,e),Rt(e);break;case 13:zt(t,e),Rt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(hi=Ae())),r&4&&fu(e);break;case 22:if($=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(S=qe)||$,zt(t,e),qe=S):zt(t,e),Rt(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!$&&(e.mode&1)!==0)for(Y=e,$=e.child;$!==null;){for(A=Y=$;Y!==null;){switch(T=Y,Z=T.child,T.tag){case 0:case 11:case 14:case 15:qr(4,T,T.return);break;case 1:ir(T,T.return);var q=T.stateNode;if(typeof q.componentWillUnmount=="function"){r=T,n=T.return;try{t=r,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(J){$e(r,n,J)}}break;case 5:ir(T,T.return);break;case 22:if(T.memoizedState!==null){gu(A);continue}}Z!==null?(Z.return=T,Y=Z):gu(A)}$=$.sibling}e:for($=null,A=e;;){if(A.tag===5){if($===null){$=A;try{o=A.stateNode,S?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(m=A.stateNode,g=A.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,m.style.display=Ft("display",u))}catch(J){$e(e,e.return,J)}}}else if(A.tag===6){if($===null)try{A.stateNode.nodeValue=S?"":A.memoizedProps}catch(J){$e(e,e.return,J)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;$===A&&($=null),A=A.return}$===A&&($=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:zt(t,e),Rt(e),r&4&&fu(e);break;case 21:break;default:zt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cu(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fe(o,""),r.flags&=-33);var s=uu(e);fi(e,s,o);break;case 3:case 4:var u=r.stateNode.containerInfo,m=uu(e);pi(e,m,u);break;default:throw Error(i(161))}}catch(g){$e(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,n){Y=e,mu(e)}function mu(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,s=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||as;if(!u){var m=o.alternate,g=m!==null&&m.memoizedState!==null||qe;m=as;var S=qe;if(as=u,(qe=g)&&!S)for(Y=o;Y!==null;)u=Y,g=u.child,u.tag===22&&u.memoizedState!==null?vu(o):g!==null?(g.return=u,Y=g):vu(o);for(;s!==null;)Y=s,mu(s),s=s.sibling;Y=o,as=m,qe=S}hu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,Y=s):hu(e)}}function hu(e){for(;Y!==null;){var t=Y;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||cs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&gc(t,s,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gc(t,u,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var $=S.memoizedState;if($!==null){var A=$.dehydrated;A!==null&&Cr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}qe||t.flags&512&&ui(t)}catch(T){$e(t,t.return,T)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function gu(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function vu(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cs(4,t)}catch(g){$e(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(g){$e(t,o,g)}}var s=t.return;try{ui(t)}catch(g){$e(t,s,g)}break;case 5:var u=t.return;try{ui(t)}catch(g){$e(t,u,g)}}}catch(g){$e(t,t.return,g)}if(t===e){Y=null;break}var m=t.sibling;if(m!==null){m.return=t.return,Y=m;break}Y=t.return}}var ed=Math.ceil,us=W.ReactCurrentDispatcher,di=W.ReactCurrentOwner,gt=W.ReactCurrentBatchConfig,ke=0,Ve=null,De=null,Ke=0,pt=0,ar=tn(0),He=0,Jr=null,En=0,ps=0,mi=0,Xr=null,st=null,hi=0,cr=1/0,Ut=null,fs=!1,gi=null,an=null,ds=!1,cn=null,ms=0,eo=0,vi=null,hs=-1,gs=0;function et(){return(ke&6)!==0?Ae():hs!==-1?hs:hs=Ae()}function un(e){return(e.mode&1)===0?1:(ke&2)!==0&&Ke!==0?Ke&-Ke:Af.transition!==null?(gs===0&&(gs=ua()),gs):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:ya(e.type)),e)}function Et(e,t,n,r){if(50<eo)throw eo=0,vi=null,Error(i(185));Sr(e,n,r),((ke&2)===0||e!==Ve)&&(e===Ve&&((ke&2)===0&&(ps|=n),He===4&&pn(e,Ke)),lt(e,r),n===1&&ke===0&&(t.mode&1)===0&&(cr=Ae()+500,Vo&&rn()))}function lt(e,t){var n=e.callbackNode;$p(e,t);var r=_o(e,e===Ve?Ke:0);if(r===0)n!==null&&ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ia(n),t===1)e.tag===0?$f(yu.bind(null,e)):oc(yu.bind(null,e)),Pf(function(){(ke&6)===0&&rn()}),n=null;else{switch(pa(r)){case 1:n=Ys;break;case 4:n=aa;break;case 16:n=ko;break;case 536870912:n=ca;break;default:n=ko}n=Eu(n,xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xu(e,t){if(hs=-1,gs=0,(ke&6)!==0)throw Error(i(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=_o(e,e===Ve?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=vs(e,r);else{t=r;var o=ke;ke|=2;var s=ku();(Ve!==e||Ke!==t)&&(Ut=null,cr=Ae()+500,Cn(e,t));do try{rd();break}catch(m){wu(e,m)}while(!0);Fl(),us.current=s,ke=o,De!==null?t=0:(Ve=null,Ke=0,t=He)}if(t!==0){if(t===2&&(o=qs(e),o!==0&&(r=o,t=xi(e,o))),t===1)throw n=Jr,Cn(e,0),pn(e,r),lt(e,Ae()),n;if(t===6)pn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!td(o)&&(t=vs(e,r),t===2&&(s=qs(e),s!==0&&(r=s,t=xi(e,s))),t===1))throw n=Jr,Cn(e,0),pn(e,r),lt(e,Ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:Nn(e,st,Ut);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=hi+500-Ae(),10<t)){if(_o(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(Nn.bind(null,e,st,Ut),t);break}Nn(e,st,Ut);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-kt(r);s=1<<u,u=t[u],u>o&&(o=u),r&=~s}if(r=o,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ed(r/1960))-r,10<r){e.timeoutHandle=Sl(Nn.bind(null,e,st,Ut),r);break}Nn(e,st,Ut);break;case 5:Nn(e,st,Ut);break;default:throw Error(i(329))}}}return lt(e,Ae()),e.callbackNode===n?xu.bind(null,e):null}function xi(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=vs(e,t),e!==2&&(t=st,st=n,t!==null&&yi(t)),e}function yi(e){st===null?st=e:st.push.apply(st,e)}function td(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!bt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~mi,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if((ke&6)!==0)throw Error(i(327));ur();var t=_o(e,0);if((t&1)===0)return lt(e,Ae()),null;var n=vs(e,t);if(e.tag!==0&&n===2){var r=qs(e);r!==0&&(t=r,n=xi(e,r))}if(n===1)throw n=Jr,Cn(e,0),pn(e,t),lt(e,Ae()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,st,Ut),lt(e,Ae()),null}function wi(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(cr=Ae()+500,Vo&&rn())}}function jn(e){cn!==null&&cn.tag===0&&(ke&6)===0&&ur();var t=ke;ke|=1;var n=gt.transition,r=Ee;try{if(gt.transition=null,Ee=1,e)return e()}finally{Ee=r,gt.transition=n,ke=t,(ke&6)===0&&rn()}}function ki(){pt=ar.current,Pe(ar)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mf(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:sr(),Pe(nt),Pe(Ze),Ul();break;case 5:Bl(r);break;case 4:sr();break;case 13:Pe(Te);break;case 19:Pe(Te);break;case 10:$l(r.type._context);break;case 22:case 23:ki()}n=n.return}if(Ve=e,De=e=fn(e.current,null),Ke=pt=t,He=0,Jr=null,mi=ps=En=0,st=Xr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var u=s.next;s.next=o,r.next=u}n.pending=r}Sn=null}return e}function wu(e,t){do{var n=De;try{if(Fl(),es.current=os,ts){for(var r=Fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ts=!1}if(zn=0,Ue=Be=Fe=null,Qr=!1,Kr=0,di.current=null,n===null||n.return===null){He=1,Jr=t,De=null;break}e:{var s=e,u=n.return,m=n,g=t;if(t=Ke,m.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var S=g,$=m,A=$.tag;if(($.mode&1)===0&&(A===0||A===11||A===15)){var T=$.alternate;T?($.updateQueue=T.updateQueue,$.memoizedState=T.memoizedState,$.lanes=T.lanes):($.updateQueue=null,$.memoizedState=null)}var Z=Wc(u);if(Z!==null){Z.flags&=-257,Qc(Z,u,m,s,t),Z.mode&1&&Vc(s,S,t),t=Z,g=S;var q=t.updateQueue;if(q===null){var J=new Set;J.add(g),t.updateQueue=J}else q.add(g);break e}else{if((t&1)===0){Vc(s,S,t),bi();break e}g=Error(i(426))}}else if(Re&&m.mode&1){var Oe=Wc(u);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Qc(Oe,u,m,s,t),Rl(lr(g,m));break e}}s=g=lr(g,m),He!==4&&(He=2),Xr===null?Xr=[s]:Xr.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var b=Hc(s,g,t);hc(s,b);break e;case 1:m=g;var x=s.type,L=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(an===null||!an.has(L)))){s.flags|=65536,t&=-t,s.lanes|=t;var D=Uc(s,m,t);hc(s,D);break e}}s=s.return}while(s!==null)}Lu(n)}catch(X){t=X,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function ku(){var e=us.current;return us.current=os,e===null?os:e}function bi(){(He===0||He===3||He===2)&&(He=4),Ve===null||(En&268435455)===0&&(ps&268435455)===0||pn(Ve,Ke)}function vs(e,t){var n=ke;ke|=2;var r=ku();(Ve!==e||Ke!==t)&&(Ut=null,Cn(e,t));do try{nd();break}catch(o){wu(e,o)}while(!0);if(Fl(),ke=n,us.current=r,De!==null)throw Error(i(261));return Ve=null,Ke=0,He}function nd(){for(;De!==null;)bu(De)}function rd(){for(;De!==null&&!Ep();)bu(De)}function bu(e){var t=zu(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Lu(e):De=t,di.current=null}function Lu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Gf(n,t,pt),n!==null){De=n;return}}else{if(n=Yf(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);He===0&&(He=5)}function Nn(e,t,n){var r=Ee,o=gt.transition;try{gt.transition=null,Ee=1,od(e,t,n,r)}finally{gt.transition=o,Ee=r}return null}function od(e,t,n,r){do ur();while(cn!==null);if((ke&6)!==0)throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ap(e,s),e===Ve&&(De=Ve=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ds||(ds=!0,Eu(ko,function(){return ur(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var u=Ee;Ee=1;var m=ke;ke|=4,di.current=null,Jf(e,n),du(n,e),Sf(bl),jo=!!kl,bl=kl=null,e.current=n,Xf(n),jp(),ke=m,Ee=u,gt.transition=s}else e.current=n;if(ds&&(ds=!1,cn=e,ms=o),s=e.pendingLanes,s===0&&(an=null),Mp(n.stateNode),lt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fs)throw fs=!1,e=gi,gi=null,e;return(ms&1)!==0&&e.tag!==0&&ur(),s=e.pendingLanes,(s&1)!==0?e===vi?eo++:(eo=0,vi=e):eo=0,rn(),null}function ur(){if(cn!==null){var e=pa(ms),t=gt.transition,n=Ee;try{if(gt.transition=null,Ee=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ms=0,(ke&6)!==0)throw Error(i(331));var o=ke;for(ke|=4,Y=e.current;Y!==null;){var s=Y,u=s.child;if((Y.flags&16)!==0){var m=s.deletions;if(m!==null){for(var g=0;g<m.length;g++){var S=m[g];for(Y=S;Y!==null;){var $=Y;switch($.tag){case 0:case 11:case 15:qr(8,$,s)}var A=$.child;if(A!==null)A.return=$,Y=A;else for(;Y!==null;){$=Y;var T=$.sibling,Z=$.return;if(au($),$===S){Y=null;break}if(T!==null){T.return=Z,Y=T;break}Y=Z}}}var q=s.alternate;if(q!==null){var J=q.child;if(J!==null){q.child=null;do{var Oe=J.sibling;J.sibling=null,J=Oe}while(J!==null)}}Y=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,Y=u;else e:for(;Y!==null;){if(s=Y,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qr(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Y=b;break e}Y=s.return}}var x=e.current;for(Y=x;Y!==null;){u=Y;var L=u.child;if((u.subtreeFlags&2064)!==0&&L!==null)L.return=u,Y=L;else e:for(u=x;Y!==null;){if(m=Y,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:cs(9,m)}}catch(X){$e(m,m.return,X)}if(m===u){Y=null;break e}var D=m.sibling;if(D!==null){D.return=m.return,Y=D;break e}Y=m.return}}if(ke=o,rn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{Ee=n,gt.transition=t}}return!1}function Su(e,t,n){t=lr(n,t),t=Hc(e,t,1),e=sn(e,t,1),t=et(),e!==null&&(Sr(e,1,t),lt(e,t))}function $e(e,t,n){if(e.tag===3)Su(e,e,n);else for(;t!==null;){if(t.tag===3){Su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=lr(n,e),e=Uc(t,e,1),t=sn(t,e,1),e=et(),t!==null&&(Sr(t,1,e),lt(t,e));break}}t=t.return}}function sd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ke&n)===n&&(He===4||He===3&&(Ke&130023424)===Ke&&500>Ae()-hi?Cn(e,0):mi|=n),lt(e,t)}function _u(e,t){t===0&&((e.mode&1)===0?t=1:(t=So,So<<=1,(So&130023424)===0&&(So=4194304)));var n=et();e=It(e,t),e!==null&&(Sr(e,t,n),lt(e,n))}function ld(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_u(e,n)}function id(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}r!==null&&r.delete(t),_u(e,n)}var zu;zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,Zf(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Re&&(t.flags&1048576)!==0&&sc(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;is(e,t),e=t.pendingProps;var o=Jn(t,Ze.current);or(t,n),o=Ql(null,t,r,e,o,n);var s=Kl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(s=!0,Uo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Dl(t),o.updater=ss,t.stateNode=o,o._reactInternals=t,Xl(t,r,e,n),t=ri(null,t,r,!0,s,n)):(t.tag=0,Re&&s&&Cl(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(is(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cd(r),e=St(r,e),o){case 0:t=ni(null,t,r,e,n);break e;case 1:t=Jc(null,t,r,e,n);break e;case 11:t=Kc(null,t,r,e,n);break e;case 14:t=Zc(null,t,r,St(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),ni(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Jc(e,t,r,o,n);case 3:e:{if(Xc(t),e===null)throw Error(i(387));r=t.pendingProps,s=t.memoizedState,o=s.element,mc(e,t),Jo(t,r,null,n);var u=t.memoizedState;if(r=u.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=lr(Error(i(423)),t),t=eu(e,t,r,n,o);break e}else if(r!==o){o=lr(Error(i(424)),t),t=eu(e,t,r,n,o);break e}else for(ut=en(t.stateNode.containerInfo.firstChild),ct=t,Re=!0,Lt=null,n=fc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===o){t=Ht(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return vc(t),e===null&&Pl(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,u=o.children,Ll(r,o)?u=null:s!==null&&Ll(r,s)&&(t.flags|=32),qc(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&Pl(t),null;case 13:return tu(e,t,n);case 4:return Il(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Kc(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,u=o.value,Ce(Go,r._currentValue),r._currentValue=u,s!==null)if(bt(s.value,u)){if(s.children===o.children&&!nt.current){t=Ht(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var m=s.dependencies;if(m!==null){u=s.child;for(var g=m.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=Bt(-1,n&-n),g.tag=2;var S=s.updateQueue;if(S!==null){S=S.shared;var $=S.pending;$===null?g.next=g:(g.next=$.next,$.next=g),S.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Al(s.return,n,t),m.lanes|=n;break}g=g.next}}else if(s.tag===10)u=s.type===t.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(i(341));u.lanes|=n,m=u.alternate,m!==null&&(m.lanes|=n),Al(u,n,t),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===t){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=mt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=St(r,t.pendingProps),o=St(r.type,o),Zc(e,t,r,o,n);case 15:return Gc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),is(e,t),t.tag=1,rt(r)?(e=!0,Uo(t)):e=!1,or(t,n),Ic(t,r,o),Xl(t,r,o,n),ri(null,t,r,!0,e,n);case 19:return ru(e,t,n);case 22:return Yc(e,t,n)}throw Error(i(156,t.tag))};function Eu(e,t){return la(e,t)}function ad(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new ad(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cd(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===I)return 11;if(e===Ne)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xs(e,t,n,r,o,s){var u=2;if(r=e,typeof e=="function")Li(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ee:return Mn(n.children,o,s,t);case Se:u=8,o|=8;break;case ge:return e=vt(12,n,t,o|2),e.elementType=ge,e.lanes=s,e;case G:return e=vt(13,n,t,o),e.elementType=G,e.lanes=s,e;case V:return e=vt(19,n,t,o),e.elementType=V,e.lanes=s,e;case ve:return ys(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:u=10;break e;case ue:u=9;break e;case I:u=11;break e;case Ne:u=14;break e;case we:u=16,r=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=vt(u,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Mn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ys(e,t,n,r){return e=vt(22,e,r,t),e.elementType=ve,e.lanes=n,e.stateNode={isHidden:!1},e}function Si(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function _i(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ud(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zi(e,t,n,r,o,s,u,m,g){return e=new ud(e,t,n,m,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(s),e}function pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ju(e){if(!e)return nn;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(rt(n))return nc(e,n,t)}return t}function Cu(e,t,n,r,o,s,u,m,g){return e=zi(n,r,!0,e,o,s,u,m,g),e.context=ju(null),n=e.current,r=et(),o=un(n),s=Bt(r,o),s.callback=t??null,sn(n,s,o),e.current.lanes=o,Sr(e,o,r),lt(e,r),e}function ws(e,t,n,r){var o=t.current,s=et(),u=un(o);return n=ju(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(s,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(o,t,u),e!==null&&(Et(e,o,u,s),qo(e,o,u)),u}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ei(e,t){Nu(e,t),(e=e.alternate)&&Nu(e,t)}function fd(){return null}var Mu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ji(e){this._internalRoot=e}bs.prototype.render=ji.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));ws(e,t,null,null)},bs.prototype.unmount=ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){ws(null,e,null,null)}),t[$t]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&va(e)}};function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function dd(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var S=ks(u);s.call(S)}}var u=Cu(t,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=u,e[$t]=u.current,Or(e.nodeType===8?e.parentNode:e),jn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var m=r;r=function(){var S=ks(g);m.call(S)}}var g=zi(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=g,e[$t]=g.current,Or(e.nodeType===8?e.parentNode:e),jn(function(){ws(t,g,n,r)}),g}function Ss(e,t,n,r,o){var s=n._reactRootContainer;if(s){var u=s;if(typeof o=="function"){var m=o;o=function(){var g=ks(u);m.call(g)}}ws(t,u,e,o)}else u=dd(n,t,e,o,r);return ks(u)}fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(Xs(t,n|1),lt(t,Ae()),(ke&6)===0&&(cr=Ae()+500,rn()))}break;case 13:jn(function(){var r=It(e,1);if(r!==null){var o=et();Et(r,e,1,o)}}),Ei(e,1)}},el=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=et();Et(t,e,134217728,n)}Ei(e,134217728)}},da=function(e){if(e.tag===13){var t=un(e),n=It(e,t);if(n!==null){var r=et();Et(n,e,t,r)}Ei(e,t)}},ma=function(){return Ee},ha=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}},Qs=function(e,t,n){switch(t){case"input":if(Dn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bo(r);if(!o)throw Error(i(90));fo(r),Dn(r,o)}}}break;case"textarea":yr(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}},Xi=wi,ea=jn;var md={usingClientEntryPoint:!1,Events:[Br,Yn,Bo,qi,Ji,wi]},to={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hd={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oa(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||fd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{bo=_s.inject(hd),Ct=_s}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=md,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ci(t))throw Error(i(200));return pd(e,t,null,n)},it.createRoot=function(e,t){if(!Ci(e))throw Error(i(299));var n=!1,r="",o=Mu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zi(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,Or(e.nodeType===8?e.parentNode:e),new ji(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=oa(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return jn(e)},it.hydrate=function(e,t,n){if(!Ls(t))throw Error(i(200));return Ss(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!Ci(e))throw Error(i(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",u=Mu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Cu(t,null,e,1,n??null,o,!1,s,u),e[$t]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bs(t)},it.render=function(e,t,n){if(!Ls(t))throw Error(i(200));return Ss(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!Ls(e))throw Error(i(40));return e._reactRootContainer?(jn(function(){Ss(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},it.unstable_batchedUpdates=wi,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ls(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ss(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var Iu;function Sd(){if(Iu)return Pi.exports;Iu=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Pi.exports=Ld(),Pi.exports}var Bu;function _d(){if(Bu)return zs;Bu=1;var l=Sd();return zs.createRoot=l.createRoot,zs.hydrateRoot=l.hydrateRoot,zs}var zd=_d();const Ed=vd(zd),jd="modulepreload",Cd=function(l,a){return new URL(l,a).href},Hu={},Es=function(a,i,c){let p=Promise.resolve();if(i&&i.length>0){let h=function(j){return Promise.all(j.map(z=>Promise.resolve(z).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};const v=document.getElementsByTagName("link"),k=document.querySelector("meta[property=csp-nonce]"),E=(k==null?void 0:k.nonce)||(k==null?void 0:k.getAttribute("nonce"));p=h(i.map(j=>{if(j=Cd(j,c),j in Hu)return;Hu[j]=!0;const z=j.endsWith(".css"),N=z?'[rel="stylesheet"]':"";if(!!c)for(let O=v.length-1;O>=0;O--){const Q=v[O];if(Q.href===j&&(!z||Q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${j}"]${N}`))return;const U=document.createElement("link");if(U.rel=z?"stylesheet":jd,z||(U.as="script"),U.crossOrigin="",U.href=j,E&&U.setAttribute("nonce",E),document.head.appendChild(U),z)return new Promise((O,Q)=>{U.addEventListener("load",O),U.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${j}`)))})}))}function d(h){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=h,window.dispatchEvent(v),!v.defaultPrevented)throw h}return p.then(h=>{for(const v of h||[])v.status==="rejected"&&d(v.reason);return a().catch(d)})},Bi={toggle:()=>Es(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>Es(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>Es(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>Es(()=>import("./press-h_enDfSn.js"),[],import.meta.url)};let pr=null,Uu=!1;const op=new Set,Ts=new Map,js=new Map;function Qi(){if(pr)return pr;const l=window.AudioContext||window.webkitAudioContext;return l?(pr=new l,pr):null}function Ki(l){if(Ts.has(l))return Promise.resolve(Ts.get(l));if(js.has(l))return js.get(l);const a=Qi();if(!a||!Bi[l])return Promise.resolve(null);const i=Bi[l]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>a.decodeAudioData(c)).then(c=>(Ts.set(l,c),c)).catch(()=>null).finally(()=>js.delete(l));return js.set(l,i),i}function Nd(){const l=Qi();l&&(l.state==="suspended"&&l.resume(),op.forEach(Ki))}function Md(l){if(typeof window>"u"||!Bi[l])return;if(op.add(l),pr&&pr.state!=="suspended"){Ki(l);return}if(Uu)return;Uu=!0;const a={capture:!0,passive:!0},i=()=>{window.removeEventListener("pointerdown",i,a),window.removeEventListener("keydown",i,a),Nd()};window.addEventListener("pointerdown",i,a),window.addEventListener("keydown",i,a)}const Pd=120;function Rd(l,a=1){if(typeof window>"u"||a<=0)return;const i=Qi();if(!i)return;i.state==="suspended"&&i.resume();const c=Ts.get(l);if(!c){const p=performance.now();Ki(l).then(d=>{d&&performance.now()-p<=Pd&&Vu(i,d,a)});return}Vu(i,c,a)}function Vu(l,a,i){const c=l.createBufferSource(),p=l.createGain();p.gain.value=Math.min(1,i),c.buffer=a,c.connect(p).connect(l.destination),c.start()}const sp=.7,lp=_.createContext({enabled:!0,volume:sp});function Td({enabled:l=!0,volume:a=sp,children:i}){return f.jsx(lp.Provider,{value:{enabled:l,volume:a},children:i})}function Is(l,a=!0){const{enabled:i,volume:c}=_.useContext(lp),p=i&&a;return _.useEffect(()=>{p&&Md(l)},[l,p]),_.useCallback(()=>{p&&Rd(l,c)},[l,p,c])}const Fd=`/* ============================================================
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
  --sc-p-space-24: 24px;
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
  --sc-color-interactive-hover: var(--sc-p-color-teal-500);
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
  --sc-color-segmented-control-indicator-shade: rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-shadow-segmented-control-track: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-segmented-control-indicator: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-motion-segmented-control-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-segmented-control-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-segmented-control-stretch: 0;
  --sc-motion-segmented-control-squash: 0;
  --sc-motion-segmented-control-press-lean: 0;
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
  --sc-color-segmented-control-indicator-shade: rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-shadow-segmented-control-track: inset 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
  --sc-shadow-segmented-control-indicator: 0 0 0 0 rgb(var(--sc-p-color-ink-rgb) / 0);
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
  --sc-motion-segmented-control-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-segmented-control-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-segmented-control-stretch: 0;
  --sc-motion-segmented-control-squash: 0;
  --sc-motion-segmented-control-press-lean: 0;
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
`,Wu=5e-4,$d=6e3,Qu=60;function Ad({stiffness:l,damping:a,mass:i}){let c=0,p=0;const d=.001,h=[0];let v=0,k=0;for(;v<$d;){const E=(-l*(c-1)-a*p)/i;if(p+=E*d,c+=p*d,v+=1,h.push(c),c>k&&(k=c),Math.abs(c-1)<Wu&&Math.abs(p)<Wu)break}return{trace:h,settleMs:v,overshoot:Math.max(0,k-1)}}function As(l){const{trace:a,settleMs:i,overshoot:c}=Ad(l),p=[];for(let d=0;d<Qu;d+=1){const h=Math.round(d/(Qu-1)*(a.length-1));p.push(+a[h].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:i,overshoot:c}}const Cs=60,Ku={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function Od([l,a,i,c],p){const d=(k,E,j)=>3*(1-j)**2*j*k+3*(1-j)*j**2*E+j**3;let h=0,v=1;for(let k=0;k<40;k+=1){const E=(h+v)/2;d(l,i,E)<p?h=E:v=E}return d(a,c,(h+v)/2)}function Dd(l){const a=[];for(const i of l.split(",")){const[c,...p]=i.trim().split(/\s+/);p.length||a.push({v:+c,x:null});for(const d of p)a.push({v:+c,x:parseFloat(d)/100})}a[0].x===null&&(a[0].x=0),a.at(-1).x===null&&(a.at(-1).x=1);for(let i=1;i<a.length;i+=1){if(a[i].x!==null){a[i].x=Math.max(a[i].x,a[i-1].x);continue}let c=i;for(;a[c].x===null;)c+=1;const p=(a[c].x-a[i-1].x)/(c-i+1);for(let d=i;d<c;d+=1)a[d].x=a[d-1].x+p}return a}function Id(l,a){for(let i=1;i<l.length;i+=1)if(a<=l[i].x){const c=l[i-1],p=l[i],d=p.x-c.x;return d?c.v+(a-c.x)/d*(p.v-c.v):p.v}return l.at(-1).v}function ip(l){var p;const a=(l||"ease").trim(),i=a.match(/^linear\((.+)\)$/);if(i){const d=Dd(i[1]);return Array.from({length:Cs},(h,v)=>Id(d,v/(Cs-1)))}const c=((p=a.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||Ku[a]||Ku.ease;return Array.from({length:Cs},(d,h)=>Od(c,h/(Cs-1)))}function ap(l){const a=l.map((c,p)=>Math.abs(l[Math.min(p+1,l.length-1)]-l[Math.max(p-1,0)]));a[0]=0,a[a.length-1]=0;const i=Math.max(...a)||1;return a.map(c=>c/i)}const Bd=l=>(l.endsWith("ms")?parseFloat(l):parseFloat(l)*1e3)||0;function Hd(l){const a=[];let i=0,c="";for(const p of l)p==="("&&(i+=1),p===")"&&(i-=1),p===","&&i===0?(a.push(c.trim()),c=""):c+=p;return a.push(c.trim()),a}function fr(l,a){const i=`--sc-motion-${a}`,c=getComputedStyle(l),p=z=>parseFloat(c.getPropertyValue(z))||0,d=document.createElement("span");d.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${i}-travel-duration),var(${i}-press-lean-duration,0ms);transition-timing-function:var(${i}-travel-easing),var(--sc-motion-press-easing);`,l.appendChild(d);const h=getComputedStyle(d),[v,k]=h.transitionDuration.split(",").map(z=>Bd(z.trim())),[E,j]=Hd(h.transitionTimingFunction);return d.remove(),{travelDur:v,travelEasing:E,leanDur:k,leanEasing:j,stretch:p(`${i}-stretch`),squash:p(`${i}-squash`),lean:p(`${i}-press-lean`)}}const co=l=>!!l&&(l.stretch>0||l.squash>0||l.lean>0),uo=()=>{var l;return typeof window<"u"&&!!((l=window.matchMedia)!=null&&l.call(window,"(prefers-reduced-motion: reduce)").matches)};function An({l,r:a,h:i},c,p=!0){return{transform:`translate(${l}px, ${p?(c-i)/2:0}px)`,width:`${a-l}px`,height:`${i}px`}}function po(l,a,i,c,p=!0){const d=ip(l.travelEasing),h=ap(d);return d.map((v,k)=>{const E=l.stretch*c*h[k],j=a.l+(i.l-a.l)*v-E/2,z=a.r+(i.r-a.r)*v+E/2;return An({l:j,r:z,h:c*(1-l.squash*h[k])},c,p)})}function Zi(l,a,i){const c=Math.sign(i.l+i.r-(a.l+a.r)),p=l.lean*.25*Math.abs((i.l+i.r-(a.l+a.r))/2);return c>0?{...a,r:a.r+p}:c<0?{...a,l:a.l-p}:a}function Fs(l,a,i,c,{hold:p=!1,onDone:d}={}){l.getAnimations().forEach(v=>v.cancel());const h=l.animate(a,{duration:i,easing:c,fill:"forwards"});return p||(h.onfinish=()=>{h.cancel(),d==null||d()}),h}function Fn(l){const a=l.getBoundingClientRect(),i=l.currentCSSZoom||1;return{left:a.left/i,right:a.right/i,width:a.width/i,top:a.top/i,height:a.height/i}}function cp(l,a){const i=Fn(l);return{l:i.left-a.left,r:i.right-a.left}}function Ud(l,a){const i=fr(l,"switch"),c=getComputedStyle(l),p=parseFloat(c.width),d=parseFloat(c.height),h=parseFloat(getComputedStyle(a).height),v=(d-h)/2;return{...i,knob:h,travel:p-h-2*v}}const ao=(l,a)=>({l:a?l.travel:0,r:(a?l.travel:0)+l.knob}),Vd=(l,a)=>Zi(l,ao(l,a),ao(l,!a)),Wd=(l,a,i)=>po(l,a,i,l.knob,!1),Qd=(l,a,i)=>[An({...a,h:l.knob},l.knob,!1),An({...i,h:l.knob},l.knob,!1)],Kd="_field_plndj_39",Zd="_disabled_plndj_49",Gd="_controlWrapper_plndj_53",Yd="_input_plndj_59",qd="_track_plndj_69",Jd="_glyphs_plndj_84",Xd="_glyphOn_plndj_99",em="_glyphOff_plndj_105",tm="_thumb_plndj_115",nm="_label_plndj_190",Tt={field:Kd,disabled:Zd,controlWrapper:Gd,input:Yd,track:qd,glyphs:Jd,glyphOn:Xd,glyphOff:em,thumb:tm,label:nm};function rm({checked:l=!1,disabled:a=!1,onChange:i,label:c,sound:p=!0,glyphs:d=!0,className:h=""}){const v=_.useId(),k=Is("toggle",p),E=_.useRef(null),j=_.useRef(null),z=_.useRef(null),N=_.useRef(null),R=_.useRef(null),U=_.useRef(!1),O=()=>{if(a||uo()||!j.current||!z.current)return null;const B=Ud(j.current,z.current);return co(B)?B:null},Q=()=>{var B,ee;(B=N.current)==null||B.cancel(),N.current=null,R.current=null,(ee=j.current)==null||ee.removeAttribute("data-driven")},oe=(B,ee,Se,ge)=>{var ue;(ue=N.current)==null||ue.cancel(),j.current.setAttribute("data-driven","");const ce=z.current.animate(B,{duration:ee,easing:Se,fill:"forwards"});N.current=ce,ge||(ce.onfinish=()=>{N.current===ce&&Q()})},pe=(B,ee,Se)=>oe(Wd(B,ee,ao(B,Se)),B.travelDur,"linear",!1),se=()=>{const B=O();if(!B||B.lean<=0)return;const ee=E.current.checked,Se=R.current||ao(B,ee);R.current=Vd(B,ee),U.current=!1,oe(Qd(B,Se,R.current),B.leanDur,B.leanEasing,!0)},W=()=>{if(!R.current)return;const B=O();if(!B){Q();return}const ee=R.current;R.current=null,pe(B,ee,E.current.checked)},ae=()=>setTimeout(()=>{U.current||W()},0);return f.jsxs("label",{htmlFor:v,className:`${Tt.field} ${a?Tt.disabled:""} ${h}`,onPointerDown:se,onPointerUp:ae,onPointerLeave:W,onPointerCancel:W,children:[f.jsxs("span",{className:Tt.controlWrapper,children:[f.jsx("input",{ref:E,id:v,type:"checkbox",role:"switch",className:Tt.input,checked:l,disabled:a,onChange:B=>{k(),U.current=!0;const ee=O();if(ee){const Se=R.current||ao(ee,!B.target.checked);R.current=null,pe(ee,Se,B.target.checked)}else Q();i==null||i(B)}}),f.jsxs("span",{ref:j,className:Tt.track,"aria-hidden":"true",children:[d&&f.jsxs("span",{className:Tt.glyphs,children:[f.jsx("span",{className:Tt.glyphOn}),f.jsx("span",{className:Tt.glyphOff})]}),f.jsx("span",{ref:z,className:Tt.thumb})]})]}),c&&f.jsx("span",{className:Tt.label,children:c})]})}const om=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),_.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),sm=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),lm=new Map([["bold",_.createElement(_.Fragment,null,_.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",_.createElement(_.Fragment,null,_.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",_.createElement(_.Fragment,null,_.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",_.createElement(_.Fragment,null,_.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",_.createElement(_.Fragment,null,_.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",_.createElement(_.Fragment,null,_.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),im=_.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Bs=_.forwardRef((l,a)=>{const{alt:i,color:c,size:p,weight:d,mirrored:h,children:v,weights:k,...E}=l,{color:j="currentColor",size:z,weight:N="regular",mirrored:R=!1,...U}=_.useContext(im);return _.createElement("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:p??z,height:p??z,fill:c??j,viewBox:"0 0 256 256",transform:h||R?"scale(-1, 1)":void 0,...U,...E},!!i&&_.createElement("title",null,i),v,k.get(d??N))});Bs.displayName="IconBase";const up=_.forwardRef((l,a)=>_.createElement(Bs,{ref:a,...l,weights:om}));up.displayName="ArrowRightIcon";const am=up,pp=_.forwardRef((l,a)=>_.createElement(Bs,{ref:a,...l,weights:sm}));pp.displayName="MinusIcon";const cm=pp,fp=_.forwardRef((l,a)=>_.createElement(Bs,{ref:a,...l,weights:lm}));fp.displayName="PlusIcon";const um=fp,pm="_icon_1vxzc_2",fm={icon:pm},dm={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Zu({glyph:l,weight:a="regular",size:i="1em",label:c,className:p="",...d}){if(!l)return null;const h=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},v=dm[i];return v?f.jsx("span",{className:`${fm.icon} ${p}`.trim(),style:{fontSize:v},children:f.jsx(l,{weight:a,size:"1em",...h,...d})}):f.jsx(l,{weight:a,size:i,className:p,...h,...d})}const mm="_stepper_c7phq_19",hm="_button_c7phq_28",gm="_readout_c7phq_66",vm="_disabled_c7phq_85",ro={stepper:mm,button:hm,readout:gm,disabled:vm},xm=400,ym=80;function wm({value:l,onChange:a,min:i=-1/0,max:c=1/0,step:p=1,label:d,disabled:h=!1,sound:v=!0,className:k=""}){const E=Is("tick",v),j=_.useRef(l);j.current=l;const z=_.useRef(null),N=_.useRef(null),R=W=>Math.max(i,Math.min(c,W)),U=W=>{const ae=R(j.current+W);ae!==j.current&&(j.current=ae,a==null||a(ae),E())},O=()=>{z.current&&clearTimeout(z.current),N.current&&clearInterval(N.current),z.current=null,N.current=null};_.useEffect(()=>O,[]);const Q=W=>{h||(U(W),O(),z.current=setTimeout(()=>{N.current=setInterval(()=>U(W),ym)},xm))},oe=l<=i,pe=l>=c,se=W=>{h||(W.key==="ArrowUp"?(W.preventDefault(),U(p)):W.key==="ArrowDown"?(W.preventDefault(),U(-p)):W.key==="Home"&&Number.isFinite(i)?(W.preventDefault(),j.current!==i&&E(),j.current=i,a==null||a(i)):W.key==="End"&&Number.isFinite(c)&&(W.preventDefault(),j.current!==c&&E(),j.current=c,a==null||a(c)))};return f.jsxs("div",{className:`${ro.stepper} ${h?ro.disabled:""} ${k}`,children:[f.jsx("button",{type:"button",className:ro.button,"aria-label":d?`Decrease ${d}`:"Decrease",disabled:h||oe,onPointerDown:()=>Q(-p),onPointerUp:O,onPointerLeave:O,onPointerCancel:O,children:f.jsx(Zu,{glyph:cm,weight:"bold",size:"sm"})}),f.jsx("span",{className:ro.readout,role:"spinbutton",tabIndex:h?-1:0,"aria-valuenow":l,"aria-valuemin":Number.isFinite(i)?i:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":d,"aria-disabled":h||void 0,onKeyDown:se,children:l}),f.jsx("button",{type:"button",className:ro.button,"aria-label":d?`Increase ${d}`:"Increase",disabled:h||pe,onPointerDown:()=>Q(p),onPointerUp:O,onPointerLeave:O,onPointerCancel:O,children:f.jsx(Zu,{glyph:um,weight:"bold",size:"sm"})})]})}const km="_track_5g9hj_27",bm="_indicator_5g9hj_38",Lm="_segment_5g9hj_59",Sm="_md_5g9hj_74",_m="_sm_5g9hj_84",zm="_lg_5g9hj_94",Em="_count_5g9hj_104",jm="_segmentSelected_5g9hj_113",Cm="_disabled_5g9hj_127",mn={track:km,indicator:bm,segment:Lm,md:Sm,sm:_m,lg:zm,count:Em,segmentSelected:jm,disabled:Cm};function Nm({options:l=[],value:a,onChange:i,disabled:c=!1,label:p,size:d="md",sound:h=!0,className:v=""}){const k=Is("select",h),E=I=>{I!==a&&k(),i==null||i(I)},j=_.useRef(null),z=_.useRef({}),N=_.useRef(null),[R,U]=_.useState(null),O=_.useRef(null),Q=_.useRef(null),oe=_.useRef(a);oe.current=a;const pe=I=>{const G=j.current,V=z.current[I];if(!G||!V)return null;const Ne=Fn(G),we=Fn(V);return{l:we.left-Ne.left-G.clientLeft,r:we.right-Ne.left-G.clientLeft}},se=_.useCallback(()=>{const I=pe(a);U(I?{left:I.l,width:I.r-I.l}:null)},[a]);_.useLayoutEffect(()=>{se()},[se,l.length,d]);const W=()=>{if(c||uo()||!j.current||!N.current)return null;const I=fr(j.current,"segmented-control");return co(I)?{...I,cap:parseFloat(getComputedStyle(N.current).height)}:null},ae=(I,G,V,Ne)=>{j.current.setAttribute("data-driven",""),Fs(N.current,I,G,V,{hold:Ne,onDone:()=>{var we;return(we=j.current)==null?void 0:we.removeAttribute("data-driven")}})};_.useLayoutEffect(()=>{if(!R)return;const I={l:R.left,r:R.left+R.width},G=Q.current||O.current;O.current=I,Q.current=null;const V=W();!V||!G||G.l===I.l&&G.r===I.r||ae(po(V,G,I,V.cap),V.travelDur,"linear",!1)},[R==null?void 0:R.left,R==null?void 0:R.width]);const B=()=>{if(!Q.current)return;const I=W(),G=Q.current;Q.current=null,I&&O.current&&ae(po(I,G,O.current,I.cap),I.travelDur,"linear",!1)},ee=I=>{if(I===a||!O.current)return;const G=W(),V=pe(I);if(!G||G.lean<=0||!V)return;const Ne=N.current.getAnimations().length?cp(N.current,{left:Fn(j.current).left+j.current.clientLeft}):O.current;Q.current=Zi(G,O.current,V);const we=a,ve=()=>setTimeout(()=>{oe.current===we&&B()},0);window.addEventListener("pointerup",ve,{once:!0}),ae([An({...Ne,h:G.cap},G.cap),An({...Q.current,h:G.cap},G.cap)],G.leanDur,G.leanEasing,!0)};_.useEffect(()=>(window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)),[se]);const Se=I=>{var G;(G=z.current[I])==null||G.focus()},ge=I=>{if(c||l.length===0)return;const G=(I+l.length)%l.length,V=l[G];V&&(E(V.value),Se(V.value))},ce=(I,G)=>{if(!c)switch(I.key){case"ArrowRight":case"ArrowDown":I.preventDefault(),ge(G+1);break;case"ArrowLeft":case"ArrowUp":I.preventDefault(),ge(G-1);break;case"Home":I.preventDefault(),ge(0);break;case"End":I.preventDefault(),ge(l.length-1);break}},ue=l.findIndex(I=>I.value===a);return f.jsxs("div",{ref:j,className:`${mn.track} ${mn[d]||mn.md} ${c?mn.disabled:""} ${v}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[R&&f.jsx("span",{ref:N,className:mn.indicator,"aria-hidden":"true",style:{transform:`translateX(${R.left}px)`,width:`${R.width}px`}}),l.map((I,G)=>{const V=I.value===a,Ne=V||ue===-1&&G===0;return f.jsxs("button",{type:"button",ref:we=>{z.current[I.value]=we},role:"radio","aria-checked":V,tabIndex:c?-1:Ne?0:-1,disabled:c,className:`${mn.segment} ${V?mn.segmentSelected:""}`,onClick:()=>E(I.value),onPointerDown:()=>ee(I.value),onPointerLeave:B,onKeyDown:we=>ce(we,G),children:[I.label,I.count!==void 0&&f.jsx("span",{className:mn.count,children:I.count})]},I.value)})]})}const Gu=16,Fi=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],Mm="_mark_nniye_3",Pm="_sm_nniye_24",Rm="_md_nniye_1",Tm="_lg_nniye_26",Fm="_working_nniye_28",$m="_paused_nniye_29",Am="_base_nniye_33",Om="_glint_nniye_34",Dm="_spin_nniye_36",Im="_loop_nniye_37",yt={mark:Mm,sm:Pm,md:Rm,lg:Tm,working:Fm,paused:$m,base:Am,glint:Om,spin:Dm,loop:Im},Bm={sm:yt.sm,md:yt.md,lg:yt.lg},Hm=3.2;function Um(l,a){const i=l%2===0,p=-((i?1:-1)*(360*l)/a),d=p+360*(i?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${d.toFixed(2)} 8 8`}}function Vm({working:l=!0,size:a="sm",label:i,className:c="",...p}){const d=`wm${_.useId().replace(/[^a-zA-Z0-9]/g,"")}`,h=Fi.length,v=i?{role:"img","aria-label":i}:{"aria-hidden":!0},k=[yt.mark,Bm[a]??yt.sm,l?yt.working:yt.paused,c].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${Gu} ${Gu}`,className:k,focusable:"false",...v,...p,children:[l&&f.jsx("defs",{children:Fi.map((E,j)=>{const{from:z,to:N}=Um(j,h);return f.jsxs("linearGradient",{id:`${d}-s${j}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:yt.base}),f.jsx("stop",{offset:"0.45",className:yt.base}),f.jsx("stop",{offset:"1",className:yt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:z,to:N,dur:`${Hm}s`,repeatCount:"indefinite"})]},j)})}),Fi.map((E,j)=>f.jsx("g",{className:yt.spin,style:{"--wm-i":j},children:f.jsx("path",{d:E,className:yt.loop,style:{"--wm-i":j},stroke:l?`url(#${d}-s${j})`:void 0})},j))]})}const Wm="_button_13jhr_32",Qm="_label_13jhr_73",Km="_arrow_13jhr_83",Zm="_sm_13jhr_55",Gm="_primary_13jhr_121",Ym="_destructive_13jhr_122",qm="_secondary_13jhr_156",Jm="_tertiary_13jhr_172",Xm="_loading_13jhr_206",eh="_working_13jhr_210",Rn={button:Wm,label:Qm,arrow:Km,sm:Zm,primary:Gm,destructive:Ym,secondary:qm,tertiary:Jm,loading:Xm,working:eh},th=["primary","secondary","tertiary","destructive"],nh=["lg","sm"];function rh(){return f.jsx(am,{weight:"bold",className:Rn.arrow,"aria-hidden":"true"})}function oh({variant:l="primary",size:a="lg",disabled:i=!1,loading:c=!1,arrow:p=!0,type:d="button",sound:h=!0,children:v,onClick:k,className:E="",...j}){const z=th.includes(l)?l:"primary",N=nh.includes(a)?a:"lg",R=i||c,U=Is("press",h);return f.jsxs("button",{type:d,className:`${Rn.button} ${Rn[z]} ${N==="sm"?Rn.sm:""} ${c?Rn.loading:""} ${E}`,disabled:R,"aria-busy":c||void 0,onClick:R?void 0:O=>{U(),k==null||k(O)},...j,children:[f.jsx("span",{className:Rn.label,children:v}),c?f.jsx(Vm,{className:Rn.working}):p&&f.jsx(rh,{})]})}const sh="_wrapper_1owvf_14",lh="_tooltip_1owvf_19",ih="_open_1owvf_62",ah="_singleline_1owvf_67",ch="_multiline_1owvf_71",oo={wrapper:sh,tooltip:lh,open:ih,singleline:ah,multiline:ch};function uh({content:l,multiline:a=!1,open:i,children:c}){const p=_.useId(),[d,h]=_.useState(!1),v=i??d,k=_.useRef(null),E=_.useRef(null);_.useLayoutEffect(()=>{const N=k.current,R=E.current;if(!v||!N||!R||uo())return;const U=fr(R,"tooltip");if(!co(U))return;const O=parseFloat(getComputedStyle(R).getPropertyValue("--sc-space-component-gap-sm"))||0,Q=ip(U.travelEasing),oe=ap(Q),pe=Q.map((W,ae)=>({transform:`translate(-50%, ${-O*(1-W)}px) scale(${1-.2*U.squash*oe[ae]}, ${1+.2*U.stretch*oe[ae]})`,opacity:Math.min(1,Math.max(0,W))}));R.getAnimations().forEach(W=>W.cancel()),N.setAttribute("data-driven","");const se=R.animate(pe,{duration:U.travelDur,easing:"linear"});se.onfinish=()=>N.removeAttribute("data-driven"),se.oncancel=()=>N.removeAttribute("data-driven")},[v]);const j=()=>h(!0),z=()=>h(!1);return f.jsxs("span",{ref:k,className:oo.wrapper,onMouseEnter:j,onMouseLeave:z,onFocus:j,onBlur:z,children:[f.jsx("span",{"aria-describedby":v?p:void 0,children:c}),f.jsx("span",{ref:E,role:"tooltip",id:p,className:`${oo.tooltip} ${v?oo.open:""} ${a?oo.multiline:oo.singleline}`,children:l})]})}const ph=Math.PI*2,fh=new Set(["uskel","uloader","usplash"]),dh=new Set(["ucard"]),mh={uskel:0,uloader:1.96,usplash:0},Yu=new Set(["progress","active","current"]);function hh(l){return function(){l|=0,l=l+1831565813|0;let a=Math.imul(l^l>>>15,1|l);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function gh(l){let a=2166136261;for(const i of String(l))a=Math.imul(a^i.charCodeAt(0),16777619);return a}const vh=(l,a,i,c)=>l.fillRect(a-c,i-c,c*2,c*2),xh=(l,a,i,c)=>{l.beginPath(),l.arc(a,i,c,0,ph),l.fill()},dp=(l,a,i,c)=>{c*=1.25;const p=Math.max(.7,c*.38);l.fillRect(a-c,i-p/2,c*2,p),l.fillRect(a-p/2,i-c,p,c*2)},yh={plus:dp,square:vh,round:xh};function xt(l,a,i){const c=a.rng,p=(i.s||5)*a.S,d=i.x2-i.x1,h=i.y2-i.y1,v=Math.hypot(d,h);if(!v)return;const k=d/v,E=h/v,j=-E,z=k,N=i.w,R=i.ext??N*.35,U=i.r??.9,O=i.jit??.7;let Q=0;for(let oe=-R;oe<=v+R;oe+=p,Q++){const pe=i.grid?0:Q%2*p/2;let se=1;if(i.taper){const W=(oe+R)/(v+2*R);se=Math.min(1,(i.fadeEnd?1-W:Math.min(W,1-W))/i.taper)}for(let W=-N/2+pe;W<=N/2+.01;W+=p){const ae=i.crisp?se:Math.min(1,(N/2-Math.abs(W))/(p*1.6)+.3)*se;if(c()>ae)continue;const B=i.x1+k*oe+j*W+(c()-.5)*O,ee=i.y1+E*oe+z*W+(c()-.5)*O;l.globalAlpha=(i.a??.9)*(i.af?i.af(oe+(i.u0||0),W,B,ee):1),a.dot(l,B,ee,U)}}l.globalAlpha=1}function Pn(l,a,i,c,p={}){let d=0;for(let h=0;h<i.length-1;h++)xt(l,a,{x1:i[h][0],y1:i[h][1],x2:i[h+1][0],y2:i[h+1][1],w:c,u0:d,...p}),d+=Math.hypot(i[h+1][0]-i[h][0],i[h+1][1]-i[h][1])}const wh=l=>Math.max(0,Math.min(1,Number.isFinite(+l)?+l:0)),kh={udiv(l,a,i,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),d=7,h=c.opts.fade||"both";xt(l,c,{x1:2,y1:i/2,x2:a-2,y2:i/2,w:(p-1)*d*c.S,s:d,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:h==="none"?0:h==="end"?.7:.22,fadeEnd:h==="end"})},ucardhead(l,a,i,c){xt(l,c,{x1:-20,y1:i*.8,x2:a+20,y2:i*.15,w:44,s:7,r:1.6,ext:0}),xt(l,c,{x1:a*.4,y1:-20,x2:a*.78,y2:i+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(l,a,i,c){const p=12*c.S;for(let d=p/2;d<i;d+=p)for(let h=p/2;h<a;h+=p){let v=.14;c.hover&&(v+=.86*Math.exp(-((h-c.mx)**2+(d-c.my)**2)/5e3)),l.globalAlpha=v,c.dot(l,h,d,1.6)}l.globalAlpha=1},ucta(l,a,i,c){Pn(l,c,[[-.05*a,.1*i],[.22*a,.5*i],[.02*a,1.1*i]],46,{s:7,r:1.6,ext:0}),Pn(l,c,[[1.05*a,-.1*i],[.78*a,.5*i],[.98*a,1.1*i]],46,{s:7,r:1.6,ext:0})},uempty(l,a,i,c){Pn(l,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,d])=>[p*a,d*i]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(l,a,i,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,a-40,10],["r",20,108,a-40,10],["r",20,128,a*.55,10],["r",20,158,a-40,46]],d=6*c.S,h=c.t*240%(a+500)-250;for(let v=d/2;v<i;v+=d)for(let k=d/2;k<a;k+=d){if(!p.some(z=>z[0]==="c"?(k-z[1])**2+(v-z[2])**2<z[3]**2:k>=z[1]&&k<=z[1]+z[3]&&v>=z[2]&&v<=z[2]+z[4]))continue;const j=Math.exp(-((k+v*.5-h)**2)/4050);l.globalAlpha=.16+.6*j,c.dot(l,k,v,1.3)}l.globalAlpha=1},uprog(l,a,i,c){const p=7*c.S,d=Math.max(1,Math.round(+c.opts.rows||1)),h=wh(c.opts.progress),v=i/2-(d-1)*p/2,k=c.teal("progress");for(let E=0;E<d;E++)for(let j=4;j<a;j+=p){const z=j/a<h;l.fillStyle=z?k:c.fg,l.globalAlpha=z?1:.2,c.dot(l,j,v+E*p,1.6)}l.globalAlpha=1,l.fillStyle=c.fg},uloader(l,a,i,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([k,E])=>[k*a,E*i]);let d=0;for(let k=0;k<p.length-1;k++)d+=Math.hypot(p[k+1][0]-p[k][0],p[k+1][1]-p[k][1]);const h=c.t%2.8/2.8,v=Math.min(1,h/.7)*(d+30);Pn(l,c,p,26,{s:6,r:1.3,ext:0,a:1,af:k=>k<v?v-k<18&&h<.7?1:.85:.08})},uline(l,a,i,c){l.fillStyle=c.teal("active"),xt(l,c,{x1:3,y1:i/2,x2:a-3,y2:i/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),l.fillStyle=c.fg},umedia(l,a,i,c){const p=10*c.S;l.globalAlpha=.16;for(let d=p/2;d<i;d+=p)for(let h=p/2;h<a;h+=p)c.dot(l,h,d,1.3);l.globalAlpha=1,xt(l,c,{x1:-20,y1:i*.9,x2:a+20,y2:i*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(l,a,i,c){Pn(l,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,d])=>[p*a,d*i]),72,{s:7,r:1.6,ext:0})},ufooter(l,a,i,c){const d=7*c.S,h=c.rng;l.fillStyle=c.C.page,l.fillRect(0,0,a,90),l.fillStyle=c.C.inverse,l.fillRect(0,90,a,i-90);for(let v=d/2;v<90;v+=d)for(let k=d/2;k<a;k+=d)h()<Math.pow(v/90,1.6)&&c.dot(l,k,v,1.6)},uquote(l,a,i,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},d=24,h=130;xt(l,c,{...p,x1:d,y1:d,x2:d+h,y2:d}),xt(l,c,{...p,x1:d,y1:d,x2:d,y2:d+h}),xt(l,c,{...p,x1:a-d,y1:i-d,x2:a-d-h,y2:i-d}),xt(l,c,{...p,x1:a-d,y1:i-d,x2:a-d,y2:i-d-h})},utime(l,a,i,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),d=Math.round(+c.opts.current||0),h=i/p,v=a/2,k=7*c.S,E=Array.from({length:p},(j,z)=>h*(z+.5));for(let j=E[0];j<=E[p-1];j+=k)E.some(z=>Math.abs(j-z)<15)||(l.globalAlpha=j<E[Math.min(Math.max(d,0),p-1)]?.75:.18,c.dot(l,v,j,1.4));E.forEach((j,z)=>{l.fillStyle=z===d?c.teal("current"):c.fg,l.globalAlpha=z<=d?1:.25;for(let N=-1;N<=1;N++)for(let R=-1;R<=1;R++)c.dot(l,v+N*6,j+R*6,1.5)}),l.globalAlpha=1,l.fillStyle=c.fg},ubullet(l,a,i,c){const p=a/3;c.opts.accent&&(l.fillStyle=c.teal("current"));for(let d=0;d<3;d++)for(let h=0;h<3;h++)c.dot(l,p/2+d*p,p/2+h*p,p*.26);l.fillStyle=c.fg},usep(l,a,i,c){l.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(l,a*(.2+p*.3),i*(.8-p*.3),a*.1);l.globalAlpha=1},uthumb(l,a,i,c){const p=c.rng,d=2+Math.floor(p()*2),h=[];for(let v=0;v<=d;v++)h.push([(v%2?.72+.22*p():.06+.22*p())*a,(.12+v*(.76/d)+(p()-.5)*.08)*i]);p()>.5&&h.forEach(v=>{const k=v[0];v[0]=v[1],v[1]=k}),Pn(l,c,h,a*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(l,a,i,c){xt(l,c,{x1:a*.5,y1:-20,x2:a+30,y2:i*.42,w:42,s:7,r:1.6,ext:0}),xt(l,c,{x1:a*.76,y1:-20,x2:a+30,y2:i*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(l,a,i,c){const p=c.t;Pn(l,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([d,h])=>[d*a,h*i]),50,{s:7,r:1.6,af:d=>.28+.72*Math.pow(.5+.5*Math.sin(d*.016-p*2),2)})},type(l,a,i,c){if(!a||!i||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(a),p.height=Math.ceil(i);const d=p.getContext("2d"),h=c.opts.text||"Crafthouse";d.textAlign="center",d.textBaseline="middle";let v=i*(+c.opts.textScale||.62);d.font=`500 ${v}px ${c.font}`;const k=d.measureText(h).width;k>a*.88&&(v*=a*.88/k,d.font=`500 ${v}px ${c.font}`),d.fillText(h,a/2,i/2);const E=Math.min(9,Math.max(4.2,v/34))*c.S,j=E*.24,z=d.getImageData(0,0,p.width,p.height).data,N=-.14,R=Math.cos(N),U=Math.sin(N),O=Math.hypot(a,i)/2+10;let Q=0;for(let oe=-O;oe<O;oe+=E,Q++)for(let pe=-O+Q%2*E/2;pe<O;pe+=E){const se=a/2+pe*R-oe*U,W=i/2+pe*U+oe*R;se<0||W<0||se>=p.width||W>=p.height||z[((W|0)*p.width+(se|0))*4+3]>100&&c.dot(l,se,W,j)}}};function bh(l,a){const{art:i,w:c,h:p,dpr:d,colors:h,surface:v="inverse",shape:k="plus",density:E=1,seed:j=0,t:z=0,opts:N={},font:R,pointer:U}=a,O=kh[i];if(!O||!c||!p)return;const{accent:Q,...oe}=h,pe=v==="inverse"?oe.onInverse:oe.text,se={inverse:oe.inverse,raised:oe.raised,page:oe.page,sunk:oe.sunk};l.setTransform(d,0,0,d,0,0),l.globalAlpha=1,l.clearRect(0,0,c,p),v!=="none"&&(l.fillStyle=se[v]??oe.inverse,l.fillRect(0,0,c,p)),l.fillStyle=pe;const W=Math.min(1.6,Math.max(.6,+E||1)),ae=B=>{if(!Yu.has(B))throw new Error(`PlusField: teal is reserved for ${[...Yu].join(", ")}; "${B}" is not one of them.`);return Q};O(l,c,p,{C:oe,fg:pe,S:1/W,rng:hh(j),t:z,opts:N,font:R,teal:ae,hover:!!(U!=null&&U.hover),mx:(U==null?void 0:U.x)??0,my:(U==null?void 0:U.y)??0,dot:yh[k]??dp}),l.globalAlpha=1}const Lh="_root_1jtbm_5",Sh="_backdrop_1jtbm_17",_h="_canvas_1jtbm_25",zh="_srOnly_1jtbm_35",so={root:Lh,backdrop:Sh,canvas:_h,srOnly:zh},Eh={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},dr=new Set,$n=new Set;let mr=0,Tn=null,wt=null,vn=null;const jh=()=>typeof window<"u",Ch=()=>!!(vn!=null&&vn.matches);function mp(l){const a=l/1e3;$n.forEach(i=>i.paint(a)),mr=$n.size?requestAnimationFrame(mp):0}function Nh(){!mr&&$n.size&&(mr=requestAnimationFrame(mp))}function Hi(){var l,a,i;jh()&&(!Tn&&typeof MutationObserver<"u"&&(Tn=new MutationObserver(()=>dr.forEach(c=>c.refresh())),Tn.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!wt&&typeof IntersectionObserver<"u"&&(wt=new IntersectionObserver(c=>c.forEach(p=>{const d=p.target.__plusField;d&&(d.visible=p.isIntersecting,d.syncMotion())}))),!vn&&window.matchMedia&&(vn=window.matchMedia("(prefers-reduced-motion: reduce)"),(l=vn.addEventListener)==null||l.call(vn,"change",()=>dr.forEach(c=>c.syncMotion()))),document.fonts&&!Hi.fonts&&(Hi.fonts=!0,(i=(a=document.fonts).addEventListener)==null||i.call(a,"loadingdone",()=>dr.forEach(c=>c.refresh()))))}function Mh(){dr.size||(Tn==null||Tn.disconnect(),Tn=null,wt==null||wt.disconnect(),wt=null,mr&&cancelAnimationFrame(mr),mr=0)}function Ph(l,a){const i={root:l,canvas:a,ctx:a.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(l),p=c.color,d={};for(const[h,v]of Object.entries(Eh))d[h]=c.getPropertyValue(v).trim()||p;i.colors=d,i.font=c.fontFamily},resize(c,p){i.w=c,i.h=p,i.dpr=Math.min(2,window.devicePixelRatio||1);const d=Math.round(c*i.dpr),h=Math.round(p*i.dpr);a.width!==d&&(a.width=d),a.height!==h&&(a.height=h),i.refresh()},animated(){const c=i.props;return!!c&&fh.has(c.art)&&c.animate!==!1&&!Ch()},syncMotion(){var c;if(i.animated()&&i.visible&&i.w&&i.h){$n.add(i),Nh();return}$n.delete(i),i.paint(i.animated()?i.t:mh[(c=i.props)==null?void 0:c.art]??0)},refresh(){!i.props||!i.w||!i.h||(i.readTokens(),i.syncMotion(),$n.has(i)&&i.paint(i.t))},paint(c){const p=i.props;!p||!i.w||!i.h||(i.colors||i.readTokens(),i.t=c,bh(i.ctx,{art:p.art,w:i.w,h:i.h,dpr:i.dpr,colors:i.colors,surface:p.surface,shape:p.shape,density:p.density,seed:gh(p.seed??p.art),t:c,opts:p.opts,font:i.font,pointer:i.pointer}))}};return i}const Rh=new Set(["inverse","raised","page","sunk","none"]),Th=new Set(["plus","square","round"]);function Fh({art:l,surface:a="inverse",shape:i="plus",density:c=1,animate:p=!0,seed:d,rows:h,fade:v,text:k,progress:E,accent:j=!1,steps:z,current:N,textScale:R,backdrop:U=!1,label:O,as:Q="div",className:oe="",...pe}){const se=_.useRef(null),W=_.useRef(null),ae=_.useRef(null),B={art:l,surface:Rh.has(a)?a:"inverse",shape:Th.has(i)?i:"plus",density:c,animate:p,seed:d,opts:{rows:h,fade:v,text:k,progress:E,accent:j,steps:z,current:N,textScale:R}};_.useEffect(()=>{const ge=se.current,ce=W.current;if(!ge||!ce||!ce.getContext)return;Hi();const ue=Ph(ge,ce);ue.props=B,ae.current=ue,ge.__plusField=ue,dr.add(ue);const I=typeof ResizeObserver<"u"?new ResizeObserver(([we])=>{const{width:ve,height:H}=we.contentRect;(ve!==ue.w||H!==ue.h)&&ue.resize(ve,H)}):null;I==null||I.observe(ge),wt==null||wt.observe(ge);const G=dh.has(l)?ge.parentElement||ge:null,V=we=>{const ve=ge.getBoundingClientRect();ue.pointer={hover:!0,x:we.clientX-ve.left,y:we.clientY-ve.top},ue.paint(ue.t)},Ne=()=>{ue.pointer={hover:!1,x:0,y:0},ue.paint(ue.t)};return G==null||G.addEventListener("pointermove",V),G==null||G.addEventListener("pointerleave",Ne),()=>{I==null||I.disconnect(),wt==null||wt.unobserve(ge),G==null||G.removeEventListener("pointermove",V),G==null||G.removeEventListener("pointerleave",Ne),$n.delete(ue),dr.delete(ue),delete ge.__plusField,ae.current=null,Mh()}},[l]),_.useEffect(()=>{const ge=ae.current;ge&&(ge.props=B,ge.refresh())});const ee=[so.root,U?so.backdrop:"",oe].filter(Boolean).join(" "),Se=Math.round(Math.max(0,Math.min(1,Number(E)||0))*100);return f.jsxs(Q,{ref:se,className:ee,...pe,children:[f.jsx("canvas",{ref:W,className:so.canvas,"aria-hidden":"true"}),O&&(l==="uloader"||l==="uskel")&&f.jsx("span",{role:"status",className:so.srOnly,children:O}),l==="uprog"&&f.jsx("span",{role:"progressbar",className:so.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Se,"aria-label":O})]})}const $h="_underline_w8mvb_3",Ah={underline:$h},$i=new WeakMap,qu=l=>{var a;return l.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((a=l.parentElement)==null?void 0:a.parentElement)||null};function hp({active:l=!0,shape:a,density:i,motion:c="plus-underline",className:p="",...d}){const h=_.useRef(null);return _.useLayoutEffect(()=>{const v=h.current,k=v&&l?qu(v):null;if(!k)return;const E=$i.get(k);if($i.set(k,v),!E||E===v||!E.isConnected||uo())return;const j=fr(v,c);if(!co(j))return;const z=Fn(v),N=cp(E,z);E.getAnimations().forEach(R=>R.cancel()),Fs(v,po(j,N,{l:0,r:z.width},z.height),j.travelDur,"linear")},[l,c]),_.useEffect(()=>{var v;l||(v=h.current)==null||v.getAnimations().forEach(k=>k.cancel())},[l]),_.useEffect(()=>{const v=h.current,k=v&&l?qu(v):null;if(!k)return;const E=j=>{var se,W;const z=(W=(se=j.target).closest)==null?void 0:W.call(se,'a, button, [role="tab"], [role="radio"]');if(!z||!k.contains(z)||z.contains(v)||uo())return;const N=fr(v,c);if(!co(N)||N.lean<=0)return;const R=Fn(v),U=Fn(z),O={l:0,r:R.width},Q=Zi(N,O,{l:U.left-R.left,r:U.right-R.left});Fs(v,[An({...O,h:R.height},R.height),An({...Q,h:R.height},R.height)],N.leanDur,N.leanEasing,{hold:!0});let oe=!1;const pe=()=>setTimeout(()=>{oe||(oe=!0,!($i.get(k)!==v||!v.isConnected)&&Fs(v,po(fr(v,c),Q,O,R.height),N.travelDur,"linear"))},0);window.addEventListener("pointerup",pe,{once:!0}),z.addEventListener("pointerleave",pe,{once:!0})};return k.addEventListener("pointerdown",E),()=>k.removeEventListener("pointerdown",E)},[l,c]),f.jsx("span",{ref:h,className:`${Ah.underline} ${p}`,"aria-hidden":"true",...d,children:l&&f.jsx(Fh,{as:"span",art:"uline",surface:"none",shape:a,density:i})})}const Oh="_nav_lg753_18",Dh="_row_lg753_26",Ih="_brand_lg753_35",Bh="_links_lg753_44",Hh="_linkItem_lg753_51",Uh="_link_lg753_44",Vh="_toggle_lg753_79",Wh="_trailing_lg753_84",Qh="_desktop_lg753_93",Kh="_compact_lg753_100",Zh="_menu_lg753_118",Gh="_menuOpen_lg753_128",Je={nav:Oh,row:Dh,brand:Ih,links:Bh,linkItem:Hh,link:Uh,toggle:Vh,trailing:Wh,desktop:Qh,compact:Kh,menu:Zh,menuOpen:Gh};function Yh({brand:l,links:a=[],trailing:i,compact:c=!1,underline:p=!1,className:d=""}){const[h,v]=_.useState(!1);return f.jsxs("nav",{className:`${Je.nav} ${c?Je.compact:Je.desktop} ${d}`,"aria-label":"Primary",children:[f.jsxs("div",{className:Je.row,children:[f.jsx("div",{className:Je.brand,children:l}),c?f.jsx("button",{type:"button",className:Je.toggle,"aria-expanded":h,"aria-controls":"navbar-menu",onClick:()=>v(k=>!k),children:h?"Close":"Menu"}):f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:Je.links,children:a.map(k=>f.jsx("li",{className:Je.linkItem,children:f.jsxs("a",{className:Je.link,href:k.href,"aria-current":k.current?"page":void 0,children:[k.label,p&&f.jsx(hp,{active:!!k.current,motion:"nav-bar"})]})},k.href))}),i&&f.jsx("div",{className:Je.trailing,children:i})]})]}),c&&f.jsxs("div",{id:"navbar-menu",className:`${Je.menu} ${h?Je.menuOpen:""}`,children:[f.jsx("ul",{className:Je.links,children:a.map(k=>f.jsx("li",{className:Je.linkItem,children:f.jsx("a",{className:Je.link,href:k.href,"aria-current":k.current?"page":void 0,children:k.label})},k.href))}),i&&f.jsx("div",{className:Je.trailing,children:i})]})]})}const qh=`/* tokens:
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

@media (prefers-reduced-motion: reduce) {
  .track, .thumb, .glyphs > span { transition: none; }
  .field:active .input:not(:disabled) ~ .track .thumb { scale: none; }
}
`,Jh=`/* tokens:
 *   --sc-color-surface-sunk         · control ground
 *   --sc-color-surface-deep-sunk    · button hover/active ground
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
 *   --sc-motion-hover-duration / -easing  · button bg/color transition
 *   --sc-motion-press-duration / -easing / -scale  · button press feedback (reuses Button's press pair)
 */

.stepper {
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-sm);
  padding: var(--sc-space-component-padding-sm);
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-surface-sunk);
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
  background-color: transparent;
  color: var(--sc-color-text-primary);
  cursor: pointer;
  transition:
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    transform var(--sc-motion-press-duration) var(--sc-motion-press-easing);
}

.button:hover:not(:disabled) {
  background-color: var(--sc-color-surface-deep-sunk);
}

.button:active:not(:disabled) {
  background-color: var(--sc-color-surface-deep-sunk);
  transform: scale(var(--sc-motion-press-scale));
}

.button:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}

.button:disabled {
  color: var(--sc-color-text-disabled);
  cursor: not-allowed;
}

.readout {
  min-width: 2ch;
  text-align: center;
  font-family: var(--sc-font-text-mono-body-family);
  font-size: var(--sc-font-text-mono-body-size);
  font-weight: var(--sc-font-text-mono-body-weight);
  line-height: var(--sc-font-text-mono-body-line-height);
  letter-spacing: var(--sc-font-text-mono-body-letter-spacing);
  color: var(--sc-color-text-primary);
  padding-inline: var(--sc-space-component-gap-sm);
  user-select: none;
}

.readout:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
  border-radius: var(--sc-radius-control);
}

.disabled {
  opacity: 0.6;
}
.disabled .readout {
  color: var(--sc-color-text-disabled);
}

@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
  .button:active:not(:disabled) { transform: none; }
}
`,Xh=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,eg=`/* tokens:
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

@media (prefers-reduced-motion: reduce) {
  .indicator { transition: none; }
  .segment { transition: none; }
}
`,tg=`/* tokens:
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
 *   --sc-motion-hover-* / -press-*          · transitions
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
    box-shadow var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
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

@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
  .button:active:not(:disabled) { transform: none; }
}
`,ng=`/* tokens:
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
`,rg=`/* tokens:
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
`,Ju=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,og="_app_px5b6_6",sg="_bar_px5b6_18",lg="_brand_px5b6_27",ig="_meta_px5b6_34",ag="_readout_px5b6_35",cg="_values_px5b6_36",ug="_spacer_px5b6_42",pg="_stages_px5b6_46",fg="_stageWrap_px5b6_54",dg="_activeStage_px5b6_61",mg="_stageSelect_px5b6_65",hg="_stageLabel_px5b6_75",gg="_stage_px5b6_46",vg="_panel_px5b6_94",xg="_group_px5b6_103",yg="_prop_px5b6_121",wg="_editor_px5b6_122",kg="_token_px5b6_132",bg="_changed_px5b6_140",Lg="_tokenHead_px5b6_144",Sg="_tokenName_px5b6_150",_g="_num_px5b6_162",zg="_mini_px5b6_166",Eg="_curve_px5b6_173",jg="_sounds_px5b6_187",Cg="_sound_px5b6_187",Ng="_shippedSound_px5b6_210",Mg="_reset_px5b6_214",Pg="_notes_px5b6_267",Rg="_tabs_px5b6_279",Tg="_tab_px5b6_279",Fg="_pin_px5b6_308",$g="_pick_px5b6_313",Ag="_propBlock_px5b6_320",Og="_easing_px5b6_321",Dg="_springRows_px5b6_322",Ig="_propLabel_px5b6_328",Bg="_tokenActions_px5b6_332",Hg="_motionTiles_px5b6_347",Ug="_motionTile_px5b6_347",Vg="_layers_px5b6_405",Wg="_layer_px5b6_405",Qg="_layerHead_px5b6_418",Kg="_layerGrid_px5b6_423",Zg="_scope_px5b6_428",Gg="_steps_px5b6_437",Yg="_step_px5b6_437",qg="_stepRole_px5b6_471",F={app:og,bar:sg,brand:lg,meta:ig,readout:ag,values:cg,spacer:ug,stages:pg,stageWrap:fg,activeStage:dg,stageSelect:mg,stageLabel:hg,stage:gg,panel:vg,group:xg,prop:yg,editor:wg,token:kg,changed:bg,tokenHead:Lg,tokenName:Sg,num:_g,mini:zg,curve:Eg,sounds:jg,sound:Cg,shippedSound:Ng,reset:Mg,notes:Pg,tabs:Rg,tab:Tg,pin:Fg,pick:$g,propBlock:Ag,easing:Og,springRows:Dg,propLabel:Ig,tokenActions:Bg,motionTiles:Hg,motionTile:Ug,layers:Vg,layer:Wg,layerHead:Qg,layerGrid:Kg,scope:Zg,steps:Gg,step:Yg,stepRole:qg},Vt=["day","week","month"],lo=["work","studio","journal"],io=(l,{press:a=!0}={})=>{const i=`--sc-motion-${l}`;return{jsTokens:[`${i}-stretch`,`${i}-squash`,...a?[`${i}-press-lean`,`${i}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${i}-stretch`]:"0.45",[`${i}-squash`]:"0",...a?{[`${i}-press-lean`]:"0.83",[`${i}-press-lean-duration`]:"150ms"}:{}},springs:{[`${i}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}};function Jg({p:l,ctx:a}){const i=_.useRef(null);return _.useEffect(()=>{var E;const c=[...((E=i.current)==null?void 0:E.children)||[]],p=a.slow||1,d=l.reduced,h=d==="opacity only"?{opacity:l.opacityFrom,transform:"none",filter:"none"}:{opacity:l.opacityFrom,transform:`translateY(${l.distance}px) scale(${l.scaleFrom}) rotate(${l.rotateFrom}deg)`,filter:`blur(${l.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},k=c.map((j,z)=>j.animate([h,v],{duration:d==="none"?0:l.duration*p,delay:d==="none"?0:(l.delay+z*l.stagger)*p,easing:l.easing,fill:"both"}));return()=>k.forEach(j=>j.cancel())},[l,a.replay,a.slow]),f.jsx("div",{className:F.motionTiles,ref:i,children:Array.from({length:l.count},(c,p)=>f.jsx("span",{className:F.motionTile},p))})}const Ai=l=>l.reduced==="none"?0:l.delay+l.stagger*(l.count-1)+l.duration,hr={Switch:{css:[qh],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(l,a)=>a("checked",!l.checked),render:(l,a,i)=>f.jsx(rm,{checked:l.checked,disabled:l.disabled,glyphs:l.glyphs,label:l.label,sound:!1,onChange:c=>{a("checked",c.target.checked),i()}})},Stepper:{css:[Jh,Xh],shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(l,a)=>a("value",l.value+l.step>l.max?l.min:l.value+l.step),render:(l,a,i)=>f.jsx(wm,{value:l.value,min:l.min,max:l.max,step:l.step,disabled:l.disabled,label:l.label,sound:!1,onChange:c=>{a("value",c),i()}})},SegmentedControl:{css:[eg],...io("segmented-control"),seed:{...io("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Vt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(l,a)=>a("value",Vt[(Vt.indexOf(l.value)+1)%Vt.length]),render:(l,a,i)=>f.jsx(Nm,{label:"Range",value:l.value,size:l.size,disabled:l.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==l.value&&i(),a("value",c)}})},Tooltip:{css:[ng],...io("tooltip",{press:!1}),shippedSound:null,trigger:"ships silent",props:[{name:"open",type:"boolean",default:!0},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(l,a)=>a("open",!l.open),render:l=>f.jsx("span",{style:{display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:f.jsx(uh,{content:l.content,multiline:l.multiline,open:l.open,children:f.jsx("span",{style:{font:"inherit"},children:"Hover or press Play"})})})},NavBar:{css:[rg,Ju],...io("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:lo,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(l,a)=>a("current",lo[(lo.indexOf(l.current)+1)%lo.length]),render:(l,a)=>f.jsx("div",{onClickCapture:i=>{const c=i.target.closest("a");c&&(i.preventDefault(),a("current",c.textContent.trim().toLowerCase()))},children:f.jsx(Yh,{brand:f.jsx("span",{children:"Shokunin"}),underline:l.underline,links:lo.map(i=>({href:`#${i}`,label:i[0].toUpperCase()+i.slice(1),current:i===l.current}))})})},PlusUnderline:{css:[Ju],...io("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Vt,default:"day"}],play:(l,a)=>a("active",Vt[(Vt.indexOf(l.active)+1)%Vt.length]),render:(l,a)=>f.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Vt.map(i=>f.jsxs("button",{type:"button",role:"tab","aria-selected":i===l.active,onClick:()=>a("active",i),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[i[0].toUpperCase()+i.slice(1),f.jsx(hp,{active:i===l.active})]},i))})},Button:{css:[tg],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(l,a,i)=>f.jsx(oh,{variant:l.variant,size:l.size,disabled:l.disabled,loading:l.loading,arrow:l.arrow,sound:!1,onClick:()=>i(),children:l.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(l,a,i,c)=>f.jsx(Jg,{p:l,ctx:c})}},gp=l=>{var a;return((a=l==null?void 0:l.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:a[1].split(",").map(Number))||null};function Xg(l){var c;const a=gp(l);if(a){const p=[];for(let d=0;d<=40;d+=1){const h=d/40,v=3*(1-h)**2*h*a[0]+3*(1-h)*h**2*a[2]+h**3,k=3*(1-h)**2*h*a[1]+3*(1-h)*h**2*a[3]+h**3;p.push([v,k])}return p}const i=(c=l==null?void 0:l.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return i?i.map((p,d)=>[d/(i.length-1),p]):[[0,0],[1,1]]}function ev(l){const a=Xg(l),i=a.map(h=>h[1]),c=Math.min(0,...i),d=Math.max(1,...i)-c||1;return a.map(([h,v],k)=>`${k?"L":"M"}${h.toFixed(3)} ${(1-(v-c)/d).toFixed(3)}`).join(" ")}const jt=(l,a=2)=>+(+l).toFixed(a),Oi=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function vp(l){Oi.fillStyle="#000",Oi.fillStyle=l;const a=Oi.fillStyle;if(a.startsWith("#"))return{hex:a,a:1};const i=a.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return i?{hex:"#"+[i[1],i[2],i[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:i[4]!==void 0?+i[4]:1}:{hex:"#000000",a:1}}function Os(l,a){if(a>=1)return l.toUpperCase();const i=parseInt(l.slice(1),16);return`rgb(${i>>16&255} ${i>>8&255} ${i&255} / ${+a.toFixed(3)})`}const tv=l=>String(l).endsWith("ms")?parseFloat(l):parseFloat(l)*1e3;function xp({label:l,value:a,spring:i,presets:c,asRef:p,onChange:d}){const[h,v]=_.useState(i?"spring":"bezier"),k=gp(a)||[.25,.1,.25,1],E=i||{stiffness:260,damping:22,mass:1},j=N=>{const R=As(N);d(R.easing,N,R.settleMs)},z=i?As(i):null;return f.jsxs("div",{className:F.easing,children:[f.jsxs("div",{className:F.editor,children:[f.jsx("svg",{className:F.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:ev(a)})}),f.jsxs("select",{"aria-label":`${l} mode`,value:h,onChange:N=>{v(N.target.value),N.target.value==="spring"?j(E):d(`cubic-bezier(${k.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(c==null?void 0:c.length)>0&&f.jsxs("select",{"aria-label":`${l} preset`,value:"",onChange:N=>{const R=c.find(U=>U.name===N.target.value);R&&(v("bezier"),d(p?`var(${R.name})`:R.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),c.map(N=>f.jsx("option",{value:N.name,children:N.name.replace("--sc-p-motion-easing-","")},N.name))]})]}),h==="bezier"?f.jsx("div",{className:F.editor,children:k.map((N,R)=>f.jsx("input",{type:"number","aria-label":`${l} bezier point ${R+1}`,className:F.num,step:"0.01",value:N,onChange:U=>{const O=[...k];O[R]=+U.target.value,d(`cubic-bezier(${O.join(", ")})`,null,null)}},R))}):f.jsxs("div",{className:F.springRows,children:[(()=>{const N=2*Math.PI*Math.sqrt(E.mass/E.stiffness),R=1-E.damping*N/(4*Math.PI*E.mass),U=(O,Q)=>j({...E,stiffness:+((2*Math.PI/O)**2*E.mass).toFixed(1),damping:+(4*Math.PI*(1-Q)*E.mass/O).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:F.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${l} spring duration`,min:50,max:2e3,step:10,value:Math.round(N*1e3),onChange:O=>U(+O.target.value/1e3,R)}),f.jsxs("span",{className:F.readout,children:[Math.round(N*1e3),"ms"]})]}),f.jsxs("label",{className:F.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${l} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+R.toFixed(2)),onChange:O=>U(N,+O.target.value)}),f.jsx("span",{className:F.readout,children:R.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([N,R,U,O])=>f.jsxs("label",{className:F.mini,children:[N,f.jsx("input",{type:"range",min:R,max:U,step:O,value:E[N],onChange:Q=>j({...E,[N]:+Q.target.value})}),f.jsx("span",{className:F.readout,children:E[N]})]},N)),z&&f.jsxs("span",{className:F.readout,children:["settles ",z.settleMs,"ms · overshoot ",Math.round(z.overshoot*100),"%"]})]})]})}function nv(l){const a=[];let i=0,c="";for(const p of l||"")p==="("&&(i+=1),p===")"&&(i-=1),p===","&&i===0?(a.push(c.trim()),c=""):c+=p;return c.trim()&&a.push(c.trim()),a.filter(p=>p&&p!=="none").map(p=>{var N;const d=/\binset\b/.test(p),h=((N=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:N[0])||"rgb(0 0 0 / 0.2)",v=p.replace(h,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(R=>parseFloat(R)||0),[k=0,E=0,j=0,z=0]=v;return{inset:d,x:k,y:E,blur:j,spread:z,color:h}})}const rv=l=>l.map(a=>`${a.inset?"inset ":""}${jt(a.x)}px ${jt(a.y)}px ${jt(a.blur)}px ${jt(a.spread)}px ${a.color}`).join(", ");function ov({name:l,value:a,onSet:i}){const c=nv(a),p=(d,h)=>i(rv(c.map((v,k)=>k===d?{...v,...h}:v)));return f.jsx("div",{className:F.layers,children:c.map((d,h)=>{const v=vp(d.color),k=d.inset?"inner edge":(d.x<0||d.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:F.layer,children:[f.jsxs("span",{className:F.layerHead,children:["layer ",h+1," · ",k]}),f.jsx("div",{className:F.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([E,j,z,N])=>f.jsxs("label",{className:F.mini,children:[E,f.jsx("input",{type:"number",className:F.num,"aria-label":`${l} layer ${h+1} ${E}`,min:j,max:z,step:N,value:jt(d[E]),onChange:R=>p(h,{[E]:+R.target.value})})]},E))}),f.jsxs("div",{className:F.editor,children:[f.jsx("input",{type:"color","aria-label":`${l} layer ${h+1} colour`,value:v.hex,onChange:E=>p(h,{color:Os(E.target.value,v.a)})}),f.jsxs("label",{className:F.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${l} layer ${h+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:E=>p(h,{color:Os(v.hex,+E.target.value)})}),f.jsx("span",{className:F.readout,children:jt(v.a)})]})]})]},h)})})}const sv=[11,12,13,14,16,20].map((l,a)=>[l,["chrome","ui","caption","dense","body","lead"][a],`--sc-p-font-size-${l}`]),lv=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],iv=l=>/^--sc-font-.*-size$/.test(l)?sv:/^--sc-size-.*icon/.test(l)?lv:null;function av({name:l,kind:a,shipped:i,value:c,override:p,scope:d,adj:h,spring:v,pin:k,refs:E,easingPresets:j,onSet:z,onAdj:N,onSpring:R,onReset:U,onPin:O,restOf:Q,onCopyRest:oe}){const pe=p!==void 0,[se,W]=_.useState(!!k);let ae=null;if(a==="color"){const B=vp(c);ae=f.jsxs("div",{className:F.editor,children:[f.jsx("input",{type:"color","aria-label":`${l} colour`,value:B.hex,onChange:ee=>z(Os(ee.target.value,B.a))}),f.jsx("input",{type:"range","aria-label":`${l} alpha`,min:"0",max:"1",step:"0.01",value:B.a,onChange:ee=>z(Os(B.hex,+ee.target.value))})]})}else if(a==="length"||a==="number"){const B=parseFloat(c)||0,ee=Math.abs(parseFloat(i)||1),Se=a==="length"?Math.max(64,ee*4):Math.max(2,ee*2),ge=a==="length"?"px":"",ce=a==="length"?.5:.005;ae=f.jsxs("div",{className:F.editor,children:[f.jsx("input",{type:"range","aria-label":l,min:"0",max:Se,step:ce,value:B,onChange:I=>z(`${I.target.value}${ge}`)}),f.jsx("input",{type:"number","aria-label":`${l} value`,className:F.num,step:ce,value:jt(B,3),onChange:I=>z(`${I.target.value}${ge}`)})]});const ue=iv(l);ue&&(ae=f.jsxs(f.Fragment,{children:[ae,f.jsx("div",{className:F.steps,role:"group","aria-label":`${l} scale`,children:ue.map(([I,G,V])=>f.jsxs("button",{type:"button",className:F.step,"aria-pressed":B===I,onClick:()=>z(`var(${V})`),children:[I,G&&f.jsx("span",{className:F.stepRole,children:G})]},I))})]}))}else if(a==="time"){const B=tv(c);ae=f.jsxs("div",{className:F.editor,children:[f.jsx("input",{type:"range","aria-label":l,min:"0",max:"1200",step:"10",value:B,onChange:ee=>z(`${ee.target.value}ms`)}),f.jsxs("span",{className:F.readout,children:[Math.round(B),"ms"]})]})}else a==="easing"?ae=f.jsx(xp,{label:l,value:c,spring:v,presets:j,asRef:!0,onChange:(B,ee,Se)=>{z(B),R(ee,Se)}}):a==="shadow"?ae=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:F.editor,children:[f.jsxs("label",{className:F.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(h==null?void 0:h.scale)??1,onChange:B=>N({...h,scale:+B.target.value})})]}),f.jsxs("label",{className:F.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(h==null?void 0:h.strength)??1,onChange:B=>N({...h,strength:+B.target.value})})]})]}),f.jsx(ov,{name:l,value:c,onSet:z})]}):ae=f.jsx("input",{type:"text","aria-label":l,value:c,onChange:B=>z(B.target.value)});return f.jsxs("div",{className:`${F.token} ${pe?F.changed:""}`,children:[f.jsxs("div",{className:F.tokenHead,children:[f.jsxs("code",{className:F.tokenName,children:[l.replace("--sc-",""),pe&&d&&f.jsx("span",{className:F.scope,children:d==="all"?"both modes":`${d} only`})]}),f.jsxs("span",{className:F.tokenActions,children:[Q&&f.jsx("button",{type:"button",className:F.reset,title:`Set to this concept's ${Q.replace("--sc-","")} value`,onClick:oe,children:"copy rest"}),f.jsx("button",{type:"button",className:F.reset,"aria-pressed":se,onClick:()=>W(B=>!B),children:"note"}),pe&&f.jsx("button",{type:"button",className:F.reset,onClick:U,"aria-label":`Reset ${l}`,children:"reset"})]})]}),ae,(E==null?void 0:E.length)>0&&a!=="easing"&&f.jsxs("select",{"aria-label":`${l} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:B=>B.target.value&&z(`var(${B.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),E.map(B=>f.jsx("option",{value:B,children:B.replace("--sc-p-","")},B))]}),se&&f.jsx("input",{type:"text",className:F.pin,"aria-label":`Note on ${l}`,placeholder:"Note on this value…",value:k||"",onChange:B=>O(B.target.value)}),f.jsxs("div",{className:F.values,children:[f.jsxs("span",{title:i,children:["shipped ",i]}),pe&&f.jsxs("span",{title:c,children:["tuned ",c]})]})]})}function cv({def:l,value:a,spring:i,easingPresets:c,onChange:p,onSpring:d}){const h=`prop-${l.name}`;let v;if(l.type==="boolean")v=f.jsx("input",{id:h,type:"checkbox",checked:!!a,onChange:k=>p(k.target.checked)});else if(l.type==="enum")v=f.jsx("select",{id:h,value:a,onChange:k=>p(k.target.value),children:l.options.map(k=>f.jsx("option",{children:k},k))});else if(l.type==="number")v=f.jsx("input",{id:h,type:"number",className:F.num,min:l.min,max:l.max,value:a,onChange:k=>p(+k.target.value)});else if(l.type==="range")v=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:h,type:"range",min:l.min,max:l.max,step:l.step,value:a,onChange:k=>p(+k.target.value)}),f.jsxs("span",{className:F.readout,children:[a,l.unit||""]})]});else{if(l.type==="easing")return f.jsxs("div",{className:F.propBlock,children:[f.jsx("span",{className:F.propLabel,children:f.jsx("code",{children:l.name})}),f.jsx(xp,{label:l.name,value:a,spring:i,presets:c,onChange:(k,E,j)=>d(k,E,j)})]});v=f.jsx("input",{id:h,type:"text",value:a,onChange:k=>p(k.target.value)})}return f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:h,children:f.jsx("code",{children:l.name})}),v]})}const hn=!0,uv="./sounds/",pv=3,fv=l=>`sc-tune:v2:${l}`,dv=["all","light","dark"],yp=l=>/^--sc-(color|shadow)-/.test(l),Ns=(l,a)=>yp(l)?a:"all",Ds=()=>({all:{},light:{},dark:{}}),Ms=(l,a)=>({...l.overrides.all,...l.overrides[a]}),Di=["A","B","C","D"],Ui=l=>[...new Set(l)],$s=Ui(Fd.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),mv={color:$s.filter(l=>l.startsWith("--sc-p-color-")&&!l.endsWith("-rgb")),length:$s.filter(l=>/^--sc-p-(space|size|radius|border-width)-/.test(l)),time:$s.filter(l=>l.startsWith("--sc-p-motion-duration-"))},hv=$s.filter(l=>l.startsWith("--sc-p-motion-easing-"));function gv(l){var p;const a=l.join(`
`),i=Ui(((p=a.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(d=>d.slice(4)))||[]),c=Ui(a.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:i.sort(),derived:c}}const Xu=l=>{var a;return((a=l.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:a[1])||"other"};function Ps(l){return l?/^(cubic-bezier|ease|linear|steps)/.test(l)?"easing":/^-?[\d.]+m?s$/.test(l)?"time":/px/.test(l)&&/(rgb|#|hsl|color\(|inset)/.test(l)||/(rgb|#|hsl|color\()/.test(l)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(l.trim())?"shadow":CSS.supports("color",l)?"color":/^-?[\d.]+px$/.test(l)?"length":/^-?[\d.]+$/.test(l)?"number":"text":"text"}const Vi=(l,a)=>{if(!l)return{};const i=getComputedStyle(l);return Object.fromEntries(a.map(c=>[c,i.getPropertyValue(c).trim()]))},vv=(l,a)=>{if(!l)return{};const i=document.createElement("span");i.style.cssText="position:absolute;visibility:hidden;height:0;",l.appendChild(i);const c=Object.fromEntries(a.map(p=>(i.style.width=`var(${p})`,[p,getComputedStyle(i).width])));return i.remove(),c},ep=(l,a)=>{if(!l)return{};const i=document.createElement("div");i.style.display="none";for(const[p,d]of Object.entries(a))i.style.setProperty(p,d);l.appendChild(i);const c=Vi(i,Object.keys(a));return i.remove(),c};function xv(l,a,i){return l.replace(/(-?[\d.]+)px/g,(c,p)=>`${jt(p*a)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,d)=>`rgba(${p}, ${jt(Math.min(1,d*i),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${jt(Math.min(1,p*i),3)})`)}let gn=null;const tp=new Map;async function Rs(l,a,i){if(!l)return;gn=gn||new(window.AudioContext||window.webkitAudioContext),gn.state==="suspended"&&await gn.resume();let c=tp.get(l);if(!c){const h=await(await fetch(uv+l)).arrayBuffer();c=await gn.decodeAudioData(h),tp.set(l,c)}const p=gn.createBufferSource(),d=gn.createGain();d.gain.value=a,p.buffer=c,p.playbackRate.value=i,p.connect(d).connect(gn.destination),p.start()}const yv=["rest","hover","focus","active"],wv={hover:":hover",focus:":focus-visible",active:":active"};function kv(l){var p;const a=wv[l];if(!a)return"";const i=[],c=(d,h)=>{for(const v of d){if(v.cssRules&&v.media){c(v.cssRules,E=>h(`@media ${v.media.mediaText}{${E}}`));continue}if(!v.selectorText||!v.selectorText.includes(a))continue;const k=v.selectorText.split(",").map(E=>E.trim()).filter(E=>E.includes(a)).map(E=>`[data-force='${l}'] ${E.split(a).join("")}`).join(", ");i.push(h(`${k}{${v.style.cssText}}`))}};for(const d of document.styleSheets)if(((p=d.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(d.cssRules,h=>h)}catch{}return i.join(`
`)}const Gi=l=>Object.fromEntries(l.props.map(a=>[a.name,a.default]));function wp(l,a){var i,c,p;for(const[d,h]of Object.entries(((i=l.seed)==null?void 0:i.overrides)||{}))Object.values(a.overrides).some(v=>d in v)||(a.overrides.all[d]=h);for(const[d,h]of Object.entries(((c=l.seed)==null?void 0:c.scoped)||{}))for(const[v,k]of Object.entries(h))!(v in a.overrides[d])&&!(v in a.overrides.all)&&(a.overrides[d][v]=k);for(const[d,h]of Object.entries(((p=l.seed)==null?void 0:p.springs)||{})){if(a.springs[d]||Object.values(a.overrides).some(k=>d in k))continue;const v=As(h);a.springs[d]=h,a.overrides.all[d]=v.easing,a.overrides.all[d.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return a}const kp=(l,a)=>wp(l,{id:a,overrides:Ds(),shadowAdj:Ds(),springs:{},pins:{},notes:"",props:Gi(l),sound:{file:l.shippedSound,volume:.7,rate:1}});function bv(l){const a=hr[l];return{component:l,notes:"",active:"A",concepts:[kp(a,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:a.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function np(l){var a;try{const i=JSON.parse(localStorage.getItem(fv(l))||"null");if((i==null?void 0:i.component)===l&&Array.isArray(i.concepts)){for(const c of i.concepts){if(c.props={...Gi(hr[l]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=Ds();for(const[h,v]of Object.entries(c.overrides))p[yp(h)?"dark":"all"][h]=v;const d=Ds();for(const[h,v]of Object.entries(c.shadowAdj||{}))d.dark[h]=v;c.overrides=p,c.shadowAdj=d}if(l==="Button")for(const p of Object.values(c.overrides))for(const d of Object.keys(p)){if(!d.startsWith("--sc-font-text-label-chrome-"))continue;const h=d.replace("label-chrome-","label-button-lg-");h in p||(p[h]=p[d]),delete p[d]}}((a=i.view)==null?void 0:a.ground)==="#E3DFD8"&&(i.view.ground="--sc-color-surface-page");for(const c of i.concepts)wp(hr[l],c);return i}}catch{}return bv(l)}function Lv(){const l=new URLSearchParams(location.search).get("c"),[a,i]=_.useState(hr[l]?l:"Switch"),[c,p]=_.useState(()=>np(a)),[d,h]=_.useState(null),[v,k]=_.useState([]),[E,j]=_.useState(!0),[z,N]=_.useState({}),[R,U]=_.useState({}),[O,Q]=_.useState({}),[oe,pe]=_.useState(0),[se,W]=_.useState(!1),[ae,B]=_.useState(!1),ee=_.useRef(null),Se=_.useRef({}),ge=_.useRef(null),ce=hr[a],ue=ce.kind==="motion",{tokens:I,derived:G}=_.useMemo(()=>{const y=gv(ce.css);return{...y,tokens:[...new Set([...y.tokens,...ce.jsTokens||[]])].sort()}},[ce]),V=c.concepts.find(y=>y.id===c.active)||c.concepts[0],Ne=_.useMemo(()=>{const y=getComputedStyle(document.documentElement);return hv.map(C=>({name:C,value:y.getPropertyValue(C).trim()}))},[]);_.useEffect(()=>{fetch("./spec.json").then(y=>y.json()).then(y=>{i(y.component),p(y.state),h({recorded:y.recorded})})},[]),_.useEffect(()=>{},[]);const we=y=>{i(y),p(np(y)),history.replaceState(null,"",`?c=${y}`)};_.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const ve=c.view.force||"rest";_.useEffect(()=>{let y=document.getElementById("sc-tune-force");y||(y=document.createElement("style"),y.id="sc-tune-force",document.head.appendChild(y)),y.textContent=kv(ve)},[ve]),_.useLayoutEffect(()=>{var M;N(Vi(ee.current,I));const y=Vi(ee.current,I);Se.current[c.view.theme]=y,U({...y,...ep(ee.current,Ms(V,c.view.theme))});const C=(M=ge.current)==null?void 0:M.querySelector("[class]");Q(vv(C?C.closest("label")||C:null,G))},[I,G,V.overrides,c.view.theme,V.props]),_.useEffect(()=>{},[c,a]);const H=_.useCallback(y=>p(C=>C),[]),te=_.useCallback((y,C)=>p(M=>({...M,concepts:M.concepts.map(he=>he.id===y?C(he):he)})),[]),K=_.useCallback(y=>(C,M)=>te(y,he=>({...he,props:{...he.props,[C]:M}})),[te]),w=y=>H(C=>({...C,concepts:C.concepts.map(M=>M.id===C.active?y(M):M)})),P=c.view.theme,ie=(y,C,M)=>{const he=Ns(C,P),fe={...y,[he]:{...y[he]}};return M===void 0?delete fe[he][C]:fe[he][C]=M,fe},de=(y,C)=>w(M=>({...M,overrides:ie(M.overrides,y,C)})),xe=y=>w(C=>{const M={...C.springs};return delete M[y],{...C,overrides:ie(C.overrides,y,void 0),shadowAdj:ie(C.shadowAdj,y,void 0),springs:M}}),ye=(y,C,M)=>w(he=>{const fe={...he.springs};let be=he.overrides;if(C){fe[y]=C;const tt=y.replace(/-easing$/,"-duration");tt!==y&&I.includes(tt)&&(be=ie(be,tt,`${M}ms`))}else delete fe[y];return{...he,springs:fe,overrides:be}}),je=(y,C)=>w(M=>({...M,shadowAdj:ie(M.shadowAdj,y,C),overrides:ie(M.overrides,y,xv(z[y],C.scale??1,C.strength??1))})),_e=(y,C)=>w(M=>({...M,pins:{...M.pins,[y]:C}})),ze=(y,C)=>w(M=>({...M,sound:{...M.sound,[y]:C}})),Ie=(y,C)=>p(M=>({...M,view:{...M.view,[y]:C}})),Wt=ce.props.some(y=>y.name==="disabled"),fo=y=>p(C=>({...C,view:{...C.view,force:y==="disabled"?"rest":y},concepts:Wt?C.concepts.map(M=>({...M,props:{...M.props,disabled:y==="disabled"}})):C.concepts})),xn=y=>H(C=>{const M=Di.find(be=>!C.concepts.some(tt=>tt.id===be));if(!M)return C;const he=C.concepts.find(be=>be.id===C.active),fe=y?{...structuredClone(he),id:M,notes:""}:kp(ce,M);return{...C,concepts:[...C.concepts,fe],active:M}}),gr=y=>H(C=>{if(C.concepts.length<2)return C;const M=C.concepts.filter(he=>he.id!==y);return{...C,concepts:M,active:M[0].id,pick:C.pick.id===y?{id:null,reason:C.pick.reason}:C.pick}}),mo=()=>p(y=>{const C=!y.view.blind,M=C?[...y.concepts.map(he=>he.id)].sort(()=>Math.random()-.5):null;return{...y,view:{...y.view,blind:C,order:M,compare:C?!0:y.view.compare}}}),On=_.useCallback(()=>{pe(C=>C+1),ce.play&&c.concepts.forEach(C=>ce.play(C.props,K(C.id)));const y=c.concepts.find(C=>C.id===c.active);y!=null&&y.sound.file&&Rs(y.sound.file,y.sound.volume,y.sound.rate)},[ce,c.concepts,c.active,K]),Dn=ue?Math.max(1200,Ai(V.props)*c.view.slow+900):1400*c.view.slow;_.useEffect(()=>{if(!se)return;const y=setInterval(On,Dn);return()=>clearInterval(y)},[se,On,Dn]);const ho=I.filter(y=>Ps(z[y])==="time"),In=y=>{const C=c.view.ground,M=C.startsWith("--")?{background:`var(${C})`}:c.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:C,"--sc-color-surface-page":C},he={zoom:c.view.zoom,...M,...y};if(c.view.slow!==1)for(const fe of ho)he[fe]=`calc(${y[fe]??z[fe]} * ${c.view.slow})`;return he},Qt=_.useCallback(()=>{const y=ee.current,C=M=>M.id;return{tool:"sc-tune",version:pv,component:a,kind:ce.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(M=>{const he=ep(y,Ms(M,c.view.theme));return{id:C(M),notes:M.notes,props:M.props,sound:{...M.sound,shipped:ce.shippedSound,trigger:ce.trigger},tokens:dv.flatMap(fe=>Object.keys(M.overrides[fe]).map(be=>{var xo;const tt=fe==="all"?z:Se.current[fe]||{},Ft=M.overrides[fe][be],vo=fe==="all"||fe===c.view.theme;return{name:be,mode:fe,category:Xu(be),kind:Ps(tt[be]||z[be]),shipped:tt[be]??null,tuned:vo?he[be]??Ft:Ft,override:Ft,...(xo=M.shadowAdj[fe])!=null&&xo[be]?{shadowAdjust:M.shadowAdj[fe][be]}:{},...M.springs[be]?{spring:{...M.springs[be],...rp(M.springs[be])}}:{}}})),pins:Object.fromEntries(Object.entries(M.pins).filter(([,fe])=>fe)),...ue?{motion:{lastFrameMs:Ai(M.props),...M.springs["prop:easing"]?{spring:{...M.springs["prop:easing"],...rp(M.springs["prop:easing"])}}:{}}}:{}}}),derived:O,tokenCount:I.length,state:c}},[a,ce,ue,c,z,O,I]);_.useEffect(()=>{window.scTune={export:Qt,component:a}},[Qt,a]);const Kt=_.useMemo(()=>{var C;const y={};for(const M of I)(y[C=Xu(M)]||(y[C]=[])).push(M);return y},[I]),vr=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(y=>c.concepts.find(C=>C.id===y)).filter(Boolean):c.concepts:[V],xr={replay:oe,slow:c.view.slow};v.filter(y=>!E||y.seconds<=1);const yr=Ms(V,c.view.theme),go=Object.keys(yr).length;return f.jsxs("div",{className:F.app,children:[f.jsxs("header",{className:F.bar,children:[f.jsx("span",{className:F.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:a,disabled:hn,onChange:y=>we(y.target.value),children:Object.keys(hr).map(y=>f.jsx("option",{children:y},y))}),f.jsxs("span",{className:F.meta,children:[ue?"choreography":`${I.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),d&&f.jsxs("span",{className:F.meta,children:["snapshot · recorded ",d.recorded]}),f.jsx("span",{className:F.spacer}),f.jsx("button",{type:"button",onClick:On,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":se,onClick:()=>W(y=>!y),children:se?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:y=>Ie("slow",+y.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>Ie("compare",!c.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:mo,children:c.view.blind?"Reveal":"Blind"}),!hn]}),f.jsx("main",{className:F.stages,children:f.jsxs(Td,{enabled:!1,children:[!c.view.blind&&f.jsxs("section",{className:F.stageWrap,"aria-label":ue?"Default":"Shipped",children:[f.jsx("h2",{className:F.stageLabel,children:ue?"Default":"Shipped"}),f.jsx("div",{className:F.stage,style:In({}),ref:ee,inert:"","data-force":ve,children:ce.render(ue?Gi(ce):V.props,()=>{},()=>{},xr)})]}),c.view.blind&&f.jsx("div",{ref:ee,hidden:!0}),vr.map((y,C)=>{const M=c.view.blind?`Concept ${C+1}`:`${y.id}${y.id===c.active?" · editing":""}${c.pick.id===y.id?" · picked":""}`;return f.jsxs("section",{className:`${F.stageWrap} ${y.id===c.active&&!c.view.blind?F.activeStage:""}`,"aria-label":M,children:[f.jsxs("h2",{className:F.stageLabel,children:[c.view.compare&&!c.view.blind?f.jsx("button",{type:"button",className:F.stageSelect,onClick:()=>p(he=>({...he,active:y.id})),children:M}):M,ue&&f.jsxs("span",{className:F.readout,children:[" · last frame ",Ai(y.props),"ms"]})]}),f.jsx("div",{className:F.stage,style:In(Ms(y,P)),ref:y.id===c.active?ge:void 0,"data-force":ve,children:ce.render(y.props,K(y.id),()=>Rs(y.sound.file,y.sound.volume,y.sound.rate),xr)})]},y.id)})]})}),f.jsxs("aside",{className:F.panel,children:[f.jsxs("fieldset",{className:F.group,disabled:hn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:F.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:y=>p(C=>({...C,notes:y.target.value}))})]}),f.jsxs("fieldset",{className:F.group,disabled:hn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:F.tabs,role:"tablist","aria-label":"Concepts",children:[c.concepts.map(y=>f.jsx("button",{type:"button",role:"tab","aria-selected":y.id===c.active,className:F.tab,onClick:()=>p(C=>({...C,active:y.id})),children:y.id},y.id)),f.jsx("button",{type:"button",className:F.tab,disabled:c.concepts.length>=Di.length,onClick:()=>xn(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:F.tab,disabled:c.concepts.length>=Di.length,onClick:()=>xn(!1),children:"new"}),f.jsxs("button",{type:"button",className:F.tab,disabled:c.concepts.length<2,onClick:()=>gr(V.id),children:["remove ",V.id]})]}),f.jsx("textarea",{className:F.notes,"aria-label":`Notes on concept ${V.id}`,placeholder:`What concept ${V.id} is trying…`,value:V.notes,onChange:y=>w(C=>({...C,notes:y.target.value}))}),c.concepts.length>1&&f.jsxs("div",{className:F.pick,children:[f.jsx("span",{className:F.propLabel,children:f.jsx("code",{children:"pick"})}),c.concepts.map(y=>f.jsxs("label",{className:F.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===y.id,onChange:()=>p(C=>({...C,pick:{...C.pick,id:y.id}}))})," ",y.id]},y.id)),f.jsx("textarea",{className:F.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:y=>p(C=>({...C,pick:{...C.pick,reason:y.target.value}}))})]})]}),f.jsxs("fieldset",{className:F.group,disabled:hn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:c.view.theme,onChange:y=>Ie("theme",y.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:c.view.zoom,onChange:y=>Ie("zoom",+y.target.value)}),f.jsxs("span",{className:F.readout,children:[c.view.zoom,"×"]})]}),f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:c.view.ground,onChange:y=>Ie("ground",y.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(y=>f.jsx("option",{value:y,children:y.replace("--sc-color-","")},y))})]})]}),f.jsxs("fieldset",{className:F.group,disabled:hn,children:[f.jsxs("legend",{children:[ue?"Motion":"Props"," · concept ",V.id]}),(()=>{const y=ce.props.map(C=>f.jsx(cv,{def:C,value:V.props[C.name],spring:V.springs[`prop:${C.name}`],easingPresets:Ne,onChange:M=>K(V.id)(C.name,M),onSpring:(M,he,fe)=>w(be=>{const tt={...be.springs},Ft={...be.props,[C.name]:M};return he?(tt[`prop:${C.name}`]=he,C.durationProp&&(Ft[C.durationProp]=fe)):delete tt[`prop:${C.name}`],{...be,springs:tt,props:Ft}})},C.name));return ue||y.splice(Math.min(3,y.length),0,f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Wt&&V.props.disabled?"disabled":ve,onChange:C=>fo(C.target.value),children:[yv.map(C=>f.jsx("option",{value:C,children:C==="rest"?"default":C},C)),Wt&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),y})()]}),f.jsxs("fieldset",{className:F.group,disabled:hn,children:[f.jsxs("legend",{children:["Sound · ",ce.trigger]}),f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:V.sound.volume,onChange:y=>ze("volume",+y.target.value)}),f.jsx("span",{className:F.readout,children:V.sound.volume})]}),f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:V.sound.rate,onChange:y=>ze("rate",+y.target.value)}),f.jsxs("span",{className:F.readout,children:[V.sound.rate,"×"]})]}),f.jsxs("div",{className:F.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:E,onChange:y=>j(y.target.checked)})]}),f.jsxs("ul",{className:F.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:F.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!V.sound.file,onChange:()=>ze("file",null)})," silent"]})}),(V.sound.file?[{file:V.sound.file,seconds:""}]:[]).map(y=>f.jsxs("li",{className:`${F.sound} ${y.file===ce.shippedSound?F.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:V.sound.file===y.file,onChange:()=>{ze("file",y.file),Rs(y.file,V.sound.volume,V.sound.rate)}}),y.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:F.readout,children:[y.seconds&&`${y.seconds}s`,y.file===ce.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${y.file}`,onClick:()=>Rs(y.file,V.sound.volume,V.sound.rate),children:"play"})]},y.file))]})]}),!ue&&f.jsxs("p",{className:F.meta,children:[go," of ",I.length," tokens tuned in concept ",V.id,", ",P," mode. Colour and shadow edits apply to ",P," only; size, type and motion apply to both modes."]}),Object.entries(Kt).map(([y,C])=>f.jsxs("fieldset",{className:F.group,disabled:hn,children:[f.jsxs("legend",{children:[y," · ",C.length]}),C.map(M=>{var he;return f.jsx(av,{name:M,kind:Ps(z[M]),shipped:z[M],value:R[M]||z[M]||"",override:yr[M],scope:V.overrides[Ns(M,P)][M]!==void 0?Ns(M,P):V.overrides.all[M]!==void 0?"all":null,adj:(he=V.shadowAdj[Ns(M,P)])==null?void 0:he[M],spring:V.springs[M],pin:V.pins[M],refs:mv[Ps(z[M])],easingPresets:Ne,onSet:fe=>de(M,fe),onAdj:fe=>je(M,fe),onSpring:(fe,be)=>ye(M,fe,be),onReset:()=>xe(M),restOf:M.endsWith("-hover")&&I.includes(M.slice(0,-6))?M.slice(0,-6):null,onCopyRest:()=>de(M,R[M.slice(0,-6)]||z[M.slice(0,-6)]),onPin:fe=>_e(M,fe)},`${V.id}${P}${M}`)})]},y)),G.length>0&&f.jsxs("fieldset",{className:F.group,children:[f.jsx("legend",{children:"derived · read-only"}),G.map(y=>f.jsxs("div",{className:F.values,children:[f.jsx("code",{children:y})," ",O[y]]},y))]})]})]})}function rp(l){const a=As(l);return{settleMs:a.settleMs,overshoot:jt(a.overshoot,3),framerMotion:{type:"spring",stiffness:l.stiffness,damping:l.damping,mass:l.mass}}}const Ii=document.getElementById("root");Ii.dataset.mounted||(Ii.dataset.mounted="true",Ed.createRoot(Ii).render(f.jsx(Lv,{})));
