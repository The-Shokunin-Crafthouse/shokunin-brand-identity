(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=a(p);fetch(p.href,f)}})();function nf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Li={exports:{}},so={},Ei={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu;function rf(){if(Vu)return _e;Vu=1;var s=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),y=Symbol.iterator;function z(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,N={};function Z(E,j,fe){this.props=E,this.context=j,this.refs=N,this.updater=fe||M}Z.prototype.isReactComponent={},Z.prototype.setState=function(E,j){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,j,"setState")},Z.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function V(){}V.prototype=Z.prototype;function H(E,j,fe){this.props=E,this.context=j,this.refs=N,this.updater=fe||M}var D=H.prototype=new V;D.constructor=H,F(D,Z.prototype),D.isPureReactComponent=!0;var q=Array.isArray,re=Object.prototype.hasOwnProperty,Y={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function pe(E,j,fe){var xe,be={},Ae=null,Ce=null;if(j!=null)for(xe in j.ref!==void 0&&(Ce=j.ref),j.key!==void 0&&(Ae=""+j.key),j)re.call(j,xe)&&!B.hasOwnProperty(xe)&&(be[xe]=j[xe]);var Se=arguments.length-2;if(Se===1)be.children=fe;else if(1<Se){for(var ze=Array(Se),it=0;it<Se;it++)ze[it]=arguments[it+2];be.children=ze}if(E&&E.defaultProps)for(xe in Se=E.defaultProps,Se)be[xe]===void 0&&(be[xe]=Se[xe]);return{$$typeof:s,type:E,key:Ae,ref:Ce,props:be,_owner:Y.current}}function ue(E,j){return{$$typeof:s,type:E.type,key:j,ref:E.ref,props:E.props,_owner:E._owner}}function ye(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function ge(E){var j={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(fe){return j[fe]})}var Q=/\/+/g;function O(E,j){return typeof E=="object"&&E!==null&&E.key!=null?ge(""+E.key):j.toString(36)}function X(E,j,fe,xe,be){var Ae=typeof E;(Ae==="undefined"||Ae==="boolean")&&(E=null);var Ce=!1;if(E===null)Ce=!0;else switch(Ae){case"string":case"number":Ce=!0;break;case"object":switch(E.$$typeof){case s:case o:Ce=!0}}if(Ce)return Ce=E,be=be(Ce),E=xe===""?"."+O(Ce,0):xe,q(be)?(fe="",E!=null&&(fe=E.replace(Q,"$&/")+"/"),X(be,j,fe,"",function(it){return it})):be!=null&&(ye(be)&&(be=ue(be,fe+(!be.key||Ce&&Ce.key===be.key?"":(""+be.key).replace(Q,"$&/")+"/")+E)),j.push(be)),1;if(Ce=0,xe=xe===""?".":xe+":",q(E))for(var Se=0;Se<E.length;Se++){Ae=E[Se];var ze=xe+O(Ae,Se);Ce+=X(Ae,j,fe,ze,be)}else if(ze=z(E),typeof ze=="function")for(E=ze.call(E),Se=0;!(Ae=E.next()).done;)Ae=Ae.value,ze=xe+O(Ae,Se++),Ce+=X(Ae,j,fe,ze,be);else if(Ae==="object")throw j=String(E),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Ce}function ve(E,j,fe){if(E==null)return E;var xe=[],be=0;return X(E,xe,"","",function(Ae){return j.call(fe,Ae,be++)}),xe}function ne(E){if(E._status===-1){var j=E._result;j=j(),j.then(function(fe){(E._status===0||E._status===-1)&&(E._status=1,E._result=fe)},function(fe){(E._status===0||E._status===-1)&&(E._status=2,E._result=fe)}),E._status===-1&&(E._status=0,E._result=j)}if(E._status===1)return E._result.default;throw E._result}var ce={current:null},T={transition:null},ee={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:T,ReactCurrentOwner:Y};function J(){throw Error("act(...) is not supported in production builds of React.")}return _e.Children={map:ve,forEach:function(E,j,fe){ve(E,function(){j.apply(this,arguments)},fe)},count:function(E){var j=0;return ve(E,function(){j++}),j},toArray:function(E){return ve(E,function(j){return j})||[]},only:function(E){if(!ye(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},_e.Component=Z,_e.Fragment=a,_e.Profiler=p,_e.PureComponent=H,_e.StrictMode=c,_e.Suspense=v,_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,_e.act=J,_e.cloneElement=function(E,j,fe){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var xe=F({},E.props),be=E.key,Ae=E.ref,Ce=E._owner;if(j!=null){if(j.ref!==void 0&&(Ae=j.ref,Ce=Y.current),j.key!==void 0&&(be=""+j.key),E.type&&E.type.defaultProps)var Se=E.type.defaultProps;for(ze in j)re.call(j,ze)&&!B.hasOwnProperty(ze)&&(xe[ze]=j[ze]===void 0&&Se!==void 0?Se[ze]:j[ze])}var ze=arguments.length-2;if(ze===1)xe.children=fe;else if(1<ze){Se=Array(ze);for(var it=0;it<ze;it++)Se[it]=arguments[it+2];xe.children=Se}return{$$typeof:s,type:E.type,key:be,ref:Ae,props:xe,_owner:Ce}},_e.createContext=function(E){return E={$$typeof:m,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:f,_context:E},E.Consumer=E},_e.createElement=pe,_e.createFactory=function(E){var j=pe.bind(null,E);return j.type=E,j},_e.createRef=function(){return{current:null}},_e.forwardRef=function(E){return{$$typeof:g,render:E}},_e.isValidElement=ye,_e.lazy=function(E){return{$$typeof:k,_payload:{_status:-1,_result:E},_init:ne}},_e.memo=function(E,j){return{$$typeof:b,type:E,compare:j===void 0?null:j}},_e.startTransition=function(E){var j=T.transition;T.transition={};try{E()}finally{T.transition=j}},_e.unstable_act=J,_e.useCallback=function(E,j){return ce.current.useCallback(E,j)},_e.useContext=function(E){return ce.current.useContext(E)},_e.useDebugValue=function(){},_e.useDeferredValue=function(E){return ce.current.useDeferredValue(E)},_e.useEffect=function(E,j){return ce.current.useEffect(E,j)},_e.useId=function(){return ce.current.useId()},_e.useImperativeHandle=function(E,j,fe){return ce.current.useImperativeHandle(E,j,fe)},_e.useInsertionEffect=function(E,j){return ce.current.useInsertionEffect(E,j)},_e.useLayoutEffect=function(E,j){return ce.current.useLayoutEffect(E,j)},_e.useMemo=function(E,j){return ce.current.useMemo(E,j)},_e.useReducer=function(E,j,fe){return ce.current.useReducer(E,j,fe)},_e.useRef=function(E){return ce.current.useRef(E)},_e.useState=function(E){return ce.current.useState(E)},_e.useSyncExternalStore=function(E,j,fe){return ce.current.useSyncExternalStore(E,j,fe)},_e.useTransition=function(){return ce.current.useTransition()},_e.version="18.3.1",_e}var Ou;function nc(){return Ou||(Ou=1,Ei.exports=rf()),Ei.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function sf(){if(Du)return so;Du=1;var s=nc(),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(g,v,b){var k,y={},z=null,M=null;b!==void 0&&(z=""+b),v.key!==void 0&&(z=""+v.key),v.ref!==void 0&&(M=v.ref);for(k in v)c.call(v,k)&&!f.hasOwnProperty(k)&&(y[k]=v[k]);if(g&&g.defaultProps)for(k in v=g.defaultProps,v)y[k]===void 0&&(y[k]=v[k]);return{$$typeof:o,type:g,key:z,ref:M,props:y,_owner:p.current}}return so.Fragment=a,so.jsx=m,so.jsxs=m,so}var Iu;function of(){return Iu||(Iu=1,Li.exports=sf()),Li.exports}var u=of(),i=nc(),Aa={},Si={exports:{}},ht={},zi={exports:{}},ji={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function af(){return Bu||(Bu=1,(function(s){function o(T,ee){var J=T.length;T.push(ee);e:for(;0<J;){var E=J-1>>>1,j=T[E];if(0<p(j,ee))T[E]=ee,T[J]=j,J=E;else break e}}function a(T){return T.length===0?null:T[0]}function c(T){if(T.length===0)return null;var ee=T[0],J=T.pop();if(J!==ee){T[0]=J;e:for(var E=0,j=T.length,fe=j>>>1;E<fe;){var xe=2*(E+1)-1,be=T[xe],Ae=xe+1,Ce=T[Ae];if(0>p(be,J))Ae<j&&0>p(Ce,be)?(T[E]=Ce,T[Ae]=J,E=Ae):(T[E]=be,T[xe]=J,E=xe);else if(Ae<j&&0>p(Ce,J))T[E]=Ce,T[Ae]=J,E=Ae;else break e}}return ee}function p(T,ee){var J=T.sortIndex-ee.sortIndex;return J!==0?J:T.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();s.unstable_now=function(){return m.now()-g}}var v=[],b=[],k=1,y=null,z=3,M=!1,F=!1,N=!1,Z=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(T){for(var ee=a(b);ee!==null;){if(ee.callback===null)c(b);else if(ee.startTime<=T)c(b),ee.sortIndex=ee.expirationTime,o(v,ee);else break;ee=a(b)}}function q(T){if(N=!1,D(T),!F)if(a(v)!==null)F=!0,ne(re);else{var ee=a(b);ee!==null&&ce(q,ee.startTime-T)}}function re(T,ee){F=!1,N&&(N=!1,V(pe),pe=-1),M=!0;var J=z;try{for(D(ee),y=a(v);y!==null&&(!(y.expirationTime>ee)||T&&!ge());){var E=y.callback;if(typeof E=="function"){y.callback=null,z=y.priorityLevel;var j=E(y.expirationTime<=ee);ee=s.unstable_now(),typeof j=="function"?y.callback=j:y===a(v)&&c(v),D(ee)}else c(v);y=a(v)}if(y!==null)var fe=!0;else{var xe=a(b);xe!==null&&ce(q,xe.startTime-ee),fe=!1}return fe}finally{y=null,z=J,M=!1}}var Y=!1,B=null,pe=-1,ue=5,ye=-1;function ge(){return!(s.unstable_now()-ye<ue)}function Q(){if(B!==null){var T=s.unstable_now();ye=T;var ee=!0;try{ee=B(!0,T)}finally{ee?O():(Y=!1,B=null)}}else Y=!1}var O;if(typeof H=="function")O=function(){H(Q)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ve=X.port2;X.port1.onmessage=Q,O=function(){ve.postMessage(null)}}else O=function(){Z(Q,0)};function ne(T){B=T,Y||(Y=!0,O())}function ce(T,ee){pe=Z(function(){T(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_continueExecution=function(){F||M||(F=!0,ne(re))},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return z},s.unstable_getFirstCallbackNode=function(){return a(v)},s.unstable_next=function(T){switch(z){case 1:case 2:case 3:var ee=3;break;default:ee=z}var J=z;z=ee;try{return T()}finally{z=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(T,ee){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var J=z;z=T;try{return ee()}finally{z=J}},s.unstable_scheduleCallback=function(T,ee,J){var E=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?E+J:E):J=E,T){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=J+j,T={id:k++,callback:ee,priorityLevel:T,startTime:J,expirationTime:j,sortIndex:-1},J>E?(T.sortIndex=J,o(b,T),a(v)===null&&T===a(b)&&(N?(V(pe),pe=-1):N=!0,ce(q,J-E))):(T.sortIndex=j,o(v,T),F||M||(F=!0,ne(re))),T},s.unstable_shouldYield=ge,s.unstable_wrapCallback=function(T){var ee=z;return function(){var J=z;z=ee;try{return T.apply(this,arguments)}finally{z=J}}}})(ji)),ji}var Uu;function lf(){return Uu||(Uu=1,zi.exports=af()),zi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function cf(){if(Wu)return ht;Wu=1;var s=nc(),o=lf();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},y={};function z(e){return v.call(y,e)?!0:v.call(k,e)?!1:b.test(e)?y[e]=!0:(k[e]=!0,!1)}function M(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,n,r){if(t===null||typeof t>"u"||M(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,n,r,l,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Z[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(V,H);Z[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(V,H);Z[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(V,H);Z[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,t,n,r){var l=Z.hasOwnProperty(t)?Z[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,n,l,r)&&(n=null),r||l===null?z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var q=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),Y=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),ge=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),T=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,E;function j(e){if(E===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var fe=!1;function xe(e,t){if(!e||fe)return"";fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var r=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){r=R}e.call(t.prototype)}else{try{throw Error()}catch(R){r=R}e()}}catch(R){if(R&&r&&typeof R.stack=="string"){for(var l=R.stack.split(`
`),d=r.stack.split(`
`),h=l.length-1,w=d.length-1;1<=h&&0<=w&&l[h]!==d[w];)w--;for(;1<=h&&0<=w;h--,w--)if(l[h]!==d[w]){if(h!==1||w!==1)do if(h--,w--,0>w||l[h]!==d[w]){var _=`
`+l[h].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=h&&0<=w);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?j(e):""}function be(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=xe(e.type,!1),e;case 11:return e=xe(e.type.render,!1),e;case 1:return e=xe(e.type,!0),e;default:return""}}function Ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Y:return"Portal";case ue:return"Profiler";case pe:return"StrictMode";case O:return"Suspense";case X:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ge:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(t);case 8:return t===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function it(e){var t=ze(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){r=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(h){r=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=it(e))}function ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ze(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cs(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Se(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _r(e,t){t=t.checked,t!=null&&D(e,"checked",t,!1)}function Wt(e,t){_r(e,t);var n=Se(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hn(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Se(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Wn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ar(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(tn(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Se(n)}}function kt(e,t){var n=Se(t.value),r=Se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mt(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Je(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Je(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gn,go=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gn=gn||document.createElement("div"),gn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oa=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){Oa.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function vo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function Gn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Da=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(e,t){if(t){if(Da[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function ps(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fs=null;function hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ft=null,Yt=null,vn=null;function ms(e){if(e=Is(e)){if(typeof Ft!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Zo(t),Ft(e.stateNode,e.type,t))}}function xo(e){Yt?vn?vn.push(e):vn=[e]:Yt=e}function gs(){if(Yt){var e=Yt,t=vn;if(vn=Yt=null,ms(e),t)for(e=0;e<t.length;e++)ms(t[e])}}function yo(e,t){return e(t)}function Kn(){}var Lr=!1;function wo(e,t,n){if(Lr)return e(t,n);Lr=!0;try{return yo(e,t,n)}finally{Lr=!1,(Yt!==null||vn!==null)&&(Kn(),gs())}}function Tt(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Er=!1;if(g)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){Er=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{Er=!1}function bo(e,t,n,r,l,d,h,w,_){var R=Array.prototype.slice.call(arguments,3);try{t.apply(n,R)}catch(U){this.onError(U)}}var xn=!1,yn=null,Rt=!1,vs=null,Ia={onError:function(e){xn=!0,yn=e}};function Ba(e,t,n,r,l,d,h,w,_){xn=!1,yn=null,bo.apply(Ia,arguments)}function _t(e,t,n,r,l,d,h,w,_){if(Ba.apply(this,arguments),xn){if(xn){var R=yn;xn=!1,yn=null}else throw Error(a(198));Rt||(Rt=!0,vs=R)}}function gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ys(e){if(gt(e)!==e)throw Error(a(188))}function ko(e){var t=e.alternate;if(!t){if(t=gt(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var d=l.alternate;if(d===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===n)return ys(l),e;if(d===r)return ys(l),t;d=d.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=d;else{for(var h=!1,w=l.child;w;){if(w===n){h=!0,n=l,r=d;break}if(w===r){h=!0,r=l,n=d;break}w=w.sibling}if(!h){for(w=d.child;w;){if(w===n){h=!0,n=d,r=l;break}if(w===r){h=!0,r=d,n=l;break}w=w.sibling}if(!h)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function ws(e){return e=ko(e),e!==null?bs(e):null}function bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bs(e);if(t!==null)return t;e=e.sibling}return null}var ks=o.unstable_scheduleCallback,Jn=o.unstable_cancelCallback,_s=o.unstable_shouldYield,Ua=o.unstable_requestPaint,Ne=o.unstable_now,As=o.unstable_getCurrentPriorityLevel,wn=o.unstable_ImmediatePriority,Ls=o.unstable_UserBlockingPriority,Xn=o.unstable_NormalPriority,_o=o.unstable_LowPriority,x=o.unstable_IdlePriority,A=null,P=null;function de(e){if(P&&typeof P.onCommitFiberRoot=="function")try{P.onCommitFiberRoot(A,e,void 0,(e.current.flags&128)===128)}catch{}}var G=Math.clz32?Math.clz32:Ie,ke=Math.log,Pe=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(ke(e)/Pe|0)|0}var Pt=64,rn=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function er(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,d=e.pingedLanes,h=n&268435455;if(h!==0){var w=h&~l;w!==0?r=bn(w):(d&=h,d!==0&&(r=bn(d)))}else h=n&~l,h!==0?r=bn(h):d!==0&&(r=bn(d));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-G(t),l=1<<n,r|=e[n],t&=~l;return r}function b1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-G(d),w=1<<h,_=l[h];_===-1?((w&n)===0||(w&r)!==0)&&(l[h]=b1(w,t)):_<=t&&(e.expiredLanes|=w),d&=~w}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=Pt;return Pt<<=1,(Pt&4194240)===0&&(Pt=64),e}function Ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Es(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-G(t),e[t]=n}function _1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-G(n),d=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~d}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-G(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var je=0;function xc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yc,Ga,wc,bc,kc,Ka=!1,Ao=[],kn=null,_n=null,An=null,Ss=new Map,zs=new Map,Ln=[],A1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _c(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Ss.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(t.pointerId)}}function js(e,t,n,r,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:d,targetContainers:[l]},t!==null&&(t=Is(t),t!==null&&Ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function L1(e,t,n,r,l){switch(t){case"focusin":return kn=js(kn,e,t,n,r,l),!0;case"dragenter":return _n=js(_n,e,t,n,r,l),!0;case"mouseover":return An=js(An,e,t,n,r,l),!0;case"pointerover":var d=l.pointerId;return Ss.set(d,js(Ss.get(d)||null,e,t,n,r,l)),!0;case"gotpointercapture":return d=l.pointerId,zs.set(d,js(zs.get(d)||null,e,t,n,r,l)),!0}return!1}function Ac(e){var t=tr(e.target);if(t!==null){var n=gt(t);if(n!==null){if(t=n.tag,t===13){if(t=xs(n),t!==null){e.blockedOn=t,kc(e.priority,function(){wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fs=r,n.target.dispatchEvent(r),fs=null}else return t=Is(n),t!==null&&Ga(t),e.blockedOn=n,!1;t.shift()}return!0}function Lc(e,t,n){Lo(e)&&n.delete(t)}function E1(){Ka=!1,kn!==null&&Lo(kn)&&(kn=null),_n!==null&&Lo(_n)&&(_n=null),An!==null&&Lo(An)&&(An=null),Ss.forEach(Lc),zs.forEach(Lc)}function Cs(e,t){e.blockedOn===t&&(e.blockedOn=null,Ka||(Ka=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,E1)))}function Ms(e){function t(l){return Cs(l,e)}if(0<Ao.length){Cs(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&Cs(kn,e),_n!==null&&Cs(_n,e),An!==null&&Cs(An,e),Ss.forEach(t),zs.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Ac(n),n.blockedOn===null&&Ln.shift()}var Sr=q.ReactCurrentBatchConfig,Eo=!0;function S1(e,t,n,r){var l=je,d=Sr.transition;Sr.transition=null;try{je=1,qa(e,t,n,r)}finally{je=l,Sr.transition=d}}function z1(e,t,n,r){var l=je,d=Sr.transition;Sr.transition=null;try{je=4,qa(e,t,n,r)}finally{je=l,Sr.transition=d}}function qa(e,t,n,r){if(Eo){var l=Ja(e,t,n,r);if(l===null)ml(e,t,r,So,n),_c(e,r);else if(L1(l,e,t,n,r))r.stopPropagation();else if(_c(e,r),t&4&&-1<A1.indexOf(e)){for(;l!==null;){var d=Is(l);if(d!==null&&yc(d),d=Ja(e,t,n,r),d===null&&ml(e,t,r,So,n),d===l)break;l=d}l!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var So=null;function Ja(e,t,n,r){if(So=null,e=hs(r),e=tr(e),e!==null)if(t=gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function Ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(As()){case wn:return 1;case Ls:return 4;case Xn:case _o:return 16;case x:return 536870912;default:return 16}default:return 16}}var En=null,Xa=null,zo=null;function Sc(){if(zo)return zo;var e,t=Xa,n=t.length,r,l="value"in En?En.value:En.textContent,d=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===l[d-r];r++);return zo=l.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function zc(){return!1}function vt(e){function t(n,r,l,d,h){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Co:zc,this.isPropagationStopped=zc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=vt(zr),Ns=J({},zr,{view:0,detail:0}),j1=vt(Ns),tl,nl,$s,Mo=J({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$s&&($s&&e.type==="mousemove"?(tl=e.screenX-$s.screenX,nl=e.screenY-$s.screenY):nl=tl=0,$s=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),jc=vt(Mo),C1=J({},Mo,{dataTransfer:0}),M1=vt(C1),N1=J({},Ns,{relatedTarget:0}),rl=vt(N1),$1=J({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=vt($1),T1=J({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R1=vt(T1),P1=J({},zr,{data:0}),Cc=vt(P1),H1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V1[e])?!!t[e]:!1}function sl(){return O1}var D1=J({},Ns,{key:function(e){if(e.key){var t=H1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=vt(D1),B1=J({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=vt(B1),U1=J({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),W1=vt(U1),Y1=J({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=vt(Y1),G1=J({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K1=vt(G1),q1=[9,13,27,32],ol=g&&"CompositionEvent"in window,Fs=null;g&&"documentMode"in document&&(Fs=document.documentMode);var J1=g&&"TextEvent"in window&&!Fs,Nc=g&&(!ol||Fs&&8<Fs&&11>=Fs),$c=" ",Fc=!1;function Tc(e,t){switch(e){case"keyup":return q1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function X1(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Fc=!0,$c);case"textInput":return e=t.data,e===$c&&Fc?null:e;default:return null}}function ep(e,t){if(jr)return e==="compositionend"||!ol&&Tc(e,t)?(e=Sc(),zo=Xa=En=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tp[e.type]:t==="textarea"}function Hc(e,t,n,r){xo(r),t=Ro(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ts=null,Rs=null;function np(e){nd(e,0)}function No(e){var t=Fr(e);if(ho(t))return e}function rp(e,t){if(e==="change")return t}var Zc=!1;if(g){var al;if(g){var ll="oninput"in document;if(!ll){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),ll=typeof Vc.oninput=="function"}al=ll}else al=!1;Zc=al&&(!document.documentMode||9<document.documentMode)}function Oc(){Ts&&(Ts.detachEvent("onpropertychange",Dc),Rs=Ts=null)}function Dc(e){if(e.propertyName==="value"&&No(Rs)){var t=[];Hc(t,Rs,e,hs(e)),wo(np,t)}}function sp(e,t,n){e==="focusin"?(Oc(),Ts=t,Rs=n,Ts.attachEvent("onpropertychange",Dc)):e==="focusout"&&Oc()}function op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Rs)}function ap(e,t){if(e==="click")return No(t)}function lp(e,t){if(e==="input"||e==="change")return No(t)}function ip(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:ip;function Ps(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!v.call(t,l)||!Ht(e[l],t[l]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var n=Ic(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ic(n)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wc(){for(var e=window,t=kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kr(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cp(e){var t=Wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uc(n.ownerDocument.documentElement,n)){if(r!==null&&il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,d=Math.min(r.start,l);r=r.end===void 0?d:Math.min(r.end,l),!e.extend&&d>r&&(l=r,r=d,d=l),l=Bc(n,d);var h=Bc(n,r);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>r?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dp=g&&"documentMode"in document&&11>=document.documentMode,Cr=null,cl=null,Hs=null,dl=!1;function Yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||Cr==null||Cr!==kr(r)||(r=Cr,"selectionStart"in r&&il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&Ps(Hs,r)||(Hs=r,r=Ro(cl,"onSelect"),0<r.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function $o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},ul={},Qc={};g&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Fo(e){if(ul[e])return ul[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qc)return ul[e]=t[n];return e}var Gc=Fo("animationend"),Kc=Fo("animationiteration"),qc=Fo("animationstart"),Jc=Fo("transitionend"),Xc=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Xc.set(e,t),f(t,[e])}for(var pl=0;pl<ed.length;pl++){var fl=ed[pl],up=fl.toLowerCase(),pp=fl[0].toUpperCase()+fl.slice(1);Sn(up,"on"+pp)}Sn(Gc,"onAnimationEnd"),Sn(Kc,"onAnimationIteration"),Sn(qc,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(Jc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_t(r,t,void 0,e),e.currentTarget=null}function nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var d=void 0;if(t)for(var h=r.length-1;0<=h;h--){var w=r[h],_=w.instance,R=w.currentTarget;if(w=w.listener,_!==d&&l.isPropagationStopped())break e;td(l,w,R),d=_}else for(h=0;h<r.length;h++){if(w=r[h],_=w.instance,R=w.currentTarget,w=w.listener,_!==d&&l.isPropagationStopped())break e;td(l,w,R),d=_}}}if(Rt)throw e=vs,Rt=!1,vs=null,e}function $e(e,t){var n=t[bl];n===void 0&&(n=t[bl]=new Set);var r=e+"__bubble";n.has(r)||(rd(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),rd(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Vs(e){if(!e[To]){e[To]=!0,c.forEach(function(n){n!=="selectionchange"&&(fp.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,hl("selectionchange",!1,t))}}function rd(e,t,n,r){switch(Ec(t)){case 1:var l=S1;break;case 4:l=z1;break;default:l=qa}n=l.bind(null,t,n,e),l=void 0,!Er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,l){var d=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var w=r.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(h===4)for(h=r.return;h!==null;){var _=h.tag;if((_===3||_===4)&&(_=h.stateNode.containerInfo,_===l||_.nodeType===8&&_.parentNode===l))return;h=h.return}for(;w!==null;){if(h=tr(w),h===null)return;if(_=h.tag,_===5||_===6){r=d=h;continue e}w=w.parentNode}}r=r.return}wo(function(){var R=d,U=hs(n),W=[];e:{var I=Xc.get(e);if(I!==void 0){var se=el,ae=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":se=I1;break;case"focusin":ae="focus",se=rl;break;case"focusout":ae="blur",se=rl;break;case"beforeblur":case"afterblur":se=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=W1;break;case Gc:case Kc:case qc:se=F1;break;case Jc:se=Q1;break;case"scroll":se=j1;break;case"wheel":se=K1;break;case"copy":case"cut":case"paste":se=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Mc}var le=(t&4)!==0,Oe=!le&&e==="scroll",C=le?I!==null?I+"Capture":null:I;le=[];for(var L=R,$;L!==null;){$=L;var K=$.stateNode;if($.tag===5&&K!==null&&($=K,C!==null&&(K=Tt(L,C),K!=null&&le.push(Os(L,K,$)))),Oe)break;L=L.return}0<le.length&&(I=new se(I,ae,null,n,U),W.push({event:I,listeners:le}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",I&&n!==fs&&(ae=n.relatedTarget||n.fromElement)&&(tr(ae)||ae[sn]))break e;if((se||I)&&(I=U.window===U?U:(I=U.ownerDocument)?I.defaultView||I.parentWindow:window,se?(ae=n.relatedTarget||n.toElement,se=R,ae=ae?tr(ae):null,ae!==null&&(Oe=gt(ae),ae!==Oe||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(se=null,ae=R),se!==ae)){if(le=jc,K="onMouseLeave",C="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(le=Mc,K="onPointerLeave",C="onPointerEnter",L="pointer"),Oe=se==null?I:Fr(se),$=ae==null?I:Fr(ae),I=new le(K,L+"leave",se,n,U),I.target=Oe,I.relatedTarget=$,K=null,tr(U)===R&&(le=new le(C,L+"enter",ae,n,U),le.target=$,le.relatedTarget=Oe,K=le),Oe=K,se&&ae)t:{for(le=se,C=ae,L=0,$=le;$;$=Nr($))L++;for($=0,K=C;K;K=Nr(K))$++;for(;0<L-$;)le=Nr(le),L--;for(;0<$-L;)C=Nr(C),$--;for(;L--;){if(le===C||C!==null&&le===C.alternate)break t;le=Nr(le),C=Nr(C)}le=null}else le=null;se!==null&&sd(W,I,se,le,!1),ae!==null&&Oe!==null&&sd(W,Oe,ae,le,!0)}}e:{if(I=R?Fr(R):window,se=I.nodeName&&I.nodeName.toLowerCase(),se==="select"||se==="input"&&I.type==="file")var ie=rp;else if(Pc(I))if(Zc)ie=lp;else{ie=op;var he=sp}else(se=I.nodeName)&&se.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(ie=ap);if(ie&&(ie=ie(e,R))){Hc(W,ie,n,U);break e}he&&he(e,I,R),e==="focusout"&&(he=I._wrapperState)&&he.controlled&&I.type==="number"&&ds(I,"number",I.value)}switch(he=R?Fr(R):window,e){case"focusin":(Pc(he)||he.contentEditable==="true")&&(Cr=he,cl=R,Hs=null);break;case"focusout":Hs=cl=Cr=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Yc(W,n,U);break;case"selectionchange":if(dp)break;case"keydown":case"keyup":Yc(W,n,U)}var me;if(ol)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else jr?Tc(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&(Nc&&n.locale!=="ko"&&(jr||we!=="onCompositionStart"?we==="onCompositionEnd"&&jr&&(me=Sc()):(En=U,Xa="value"in En?En.value:En.textContent,jr=!0)),he=Ro(R,we),0<he.length&&(we=new Cc(we,e,null,n,U),W.push({event:we,listeners:he}),me?we.data=me:(me=Rc(n),me!==null&&(we.data=me)))),(me=J1?X1(e,n):ep(e,n))&&(R=Ro(R,"onBeforeInput"),0<R.length&&(U=new Cc("onBeforeInput","beforeinput",null,n,U),W.push({event:U,listeners:R}),U.data=me))}nd(W,t)})}function Os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Tt(e,n),d!=null&&r.unshift(Os(e,d,l)),d=Tt(e,t),d!=null&&r.push(Os(e,d,l))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,n,r,l){for(var d=t._reactName,h=[];n!==null&&n!==r;){var w=n,_=w.alternate,R=w.stateNode;if(_!==null&&_===r)break;w.tag===5&&R!==null&&(w=R,l?(_=Tt(n,d),_!=null&&h.unshift(Os(n,_,w))):l||(_=Tt(n,d),_!=null&&h.push(Os(n,_,w)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var hp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(mp,"")}function Po(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(a(425))}function Ho(){}var gl=null,vl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,vp=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(xp)}:yl;function xp(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Ms(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Ms(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),Qt="__reactFiber$"+$r,Ds="__reactProps$"+$r,sn="__reactContainer$"+$r,bl="__reactEvents$"+$r,yp="__reactListeners$"+$r,wp="__reactHandles$"+$r;function tr(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[Qt])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function Is(e){return e=e[Qt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Zo(e){return e[Ds]||null}var kl=[],Tr=-1;function jn(e){return{current:e}}function Fe(e){0>Tr||(e.current=kl[Tr],kl[Tr]=null,Tr--)}function Me(e,t){Tr++,kl[Tr]=e.current,e.current=t}var Cn={},Xe=jn(Cn),ct=jn(!1),nr=Cn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in n)l[d]=t[d];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function dt(e){return e=e.childContextTypes,e!=null}function Vo(){Fe(ct),Fe(Xe)}function id(e,t,n){if(Xe.current!==Cn)throw Error(a(168));Me(Xe,t),Me(ct,n)}function cd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(a(108,Ce(e)||"Unknown",l));return J({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,nr=Xe.current,Me(Xe,e),Me(ct,ct.current),!0}function dd(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=cd(e,t,nr),r.__reactInternalMemoizedMergedChildContext=e,Fe(ct),Fe(Xe),Me(Xe,e)):Fe(ct),Me(ct,n)}var on=null,Do=!1,_l=!1;function ud(e){on===null?on=[e]:on.push(e)}function bp(e){Do=!0,ud(e)}function Mn(){if(!_l&&on!==null){_l=!0;var e=0,t=je;try{var n=on;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,Do=!1}catch(l){throw on!==null&&(on=on.slice(e+1)),ks(wn,Mn),l}finally{je=t,_l=!1}}return null}var Pr=[],Hr=0,Io=null,Bo=0,At=[],Lt=0,rr=null,an=1,ln="";function sr(e,t){Pr[Hr++]=Bo,Pr[Hr++]=Io,Io=e,Bo=t}function pd(e,t,n){At[Lt++]=an,At[Lt++]=ln,At[Lt++]=rr,rr=e;var r=an;e=ln;var l=32-G(r)-1;r&=~(1<<l),n+=1;var d=32-G(t)+l;if(30<d){var h=l-l%5;d=(r&(1<<h)-1).toString(32),r>>=h,l-=h,an=1<<32-G(t)+l|n<<l|r,ln=d+e}else an=1<<d|n<<l|r,ln=e}function Al(e){e.return!==null&&(sr(e,1),pd(e,1,0))}function Ll(e){for(;e===Io;)Io=Pr[--Hr],Pr[Hr]=null,Bo=Pr[--Hr],Pr[Hr]=null;for(;e===rr;)rr=At[--Lt],At[Lt]=null,ln=At[--Lt],At[Lt]=null,an=At[--Lt],At[Lt]=null}var xt=null,yt=null,Te=!1,Zt=null;function fd(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,yt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rr!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,yt=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(Te){var t=yt;if(t){var n=t;if(!hd(e,t)){if(El(e))throw Error(a(418));t=zn(n.nextSibling);var r=xt;t&&hd(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,Te=!1,xt=e)}}else{if(El(e))throw Error(a(418));e.flags=e.flags&-4097|2,Te=!1,xt=e}}}function md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Uo(e){if(e!==xt)return!1;if(!Te)return md(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=yt)){if(El(e))throw gd(),Error(a(418));for(;t;)fd(e,t),t=zn(t.nextSibling)}if(md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=xt?zn(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=yt;e;)e=zn(e.nextSibling)}function Zr(){yt=xt=null,Te=!1}function zl(e){Zt===null?Zt=[e]:Zt.push(e)}var kp=q.ReactCurrentBatchConfig;function Bs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var w=l.refs;h===null?delete w[d]:w[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function xd(e){function t(C,L){if(e){var $=C.deletions;$===null?(C.deletions=[L],C.flags|=16):$.push(L)}}function n(C,L){if(!e)return null;for(;L!==null;)t(C,L),L=L.sibling;return null}function r(C,L){for(C=new Map;L!==null;)L.key!==null?C.set(L.key,L):C.set(L.index,L),L=L.sibling;return C}function l(C,L){return C=Zn(C,L),C.index=0,C.sibling=null,C}function d(C,L,$){return C.index=$,e?($=C.alternate,$!==null?($=$.index,$<L?(C.flags|=2,L):$):(C.flags|=2,L)):(C.flags|=1048576,L)}function h(C){return e&&C.alternate===null&&(C.flags|=2),C}function w(C,L,$,K){return L===null||L.tag!==6?(L=yi($,C.mode,K),L.return=C,L):(L=l(L,$),L.return=C,L)}function _(C,L,$,K){var ie=$.type;return ie===B?U(C,L,$.props.children,K,$.key):L!==null&&(L.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ne&&vd(ie)===L.type)?(K=l(L,$.props),K.ref=Bs(C,L,$),K.return=C,K):(K=ga($.type,$.key,$.props,null,C.mode,K),K.ref=Bs(C,L,$),K.return=C,K)}function R(C,L,$,K){return L===null||L.tag!==4||L.stateNode.containerInfo!==$.containerInfo||L.stateNode.implementation!==$.implementation?(L=wi($,C.mode,K),L.return=C,L):(L=l(L,$.children||[]),L.return=C,L)}function U(C,L,$,K,ie){return L===null||L.tag!==7?(L=pr($,C.mode,K,ie),L.return=C,L):(L=l(L,$),L.return=C,L)}function W(C,L,$){if(typeof L=="string"&&L!==""||typeof L=="number")return L=yi(""+L,C.mode,$),L.return=C,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case re:return $=ga(L.type,L.key,L.props,null,C.mode,$),$.ref=Bs(C,null,L),$.return=C,$;case Y:return L=wi(L,C.mode,$),L.return=C,L;case ne:var K=L._init;return W(C,K(L._payload),$)}if(tn(L)||ee(L))return L=pr(L,C.mode,$,null),L.return=C,L;Wo(C,L)}return null}function I(C,L,$,K){var ie=L!==null?L.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return ie!==null?null:w(C,L,""+$,K);if(typeof $=="object"&&$!==null){switch($.$$typeof){case re:return $.key===ie?_(C,L,$,K):null;case Y:return $.key===ie?R(C,L,$,K):null;case ne:return ie=$._init,I(C,L,ie($._payload),K)}if(tn($)||ee($))return ie!==null?null:U(C,L,$,K,null);Wo(C,$)}return null}function se(C,L,$,K,ie){if(typeof K=="string"&&K!==""||typeof K=="number")return C=C.get($)||null,w(L,C,""+K,ie);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case re:return C=C.get(K.key===null?$:K.key)||null,_(L,C,K,ie);case Y:return C=C.get(K.key===null?$:K.key)||null,R(L,C,K,ie);case ne:var he=K._init;return se(C,L,$,he(K._payload),ie)}if(tn(K)||ee(K))return C=C.get($)||null,U(L,C,K,ie,null);Wo(L,K)}return null}function ae(C,L,$,K){for(var ie=null,he=null,me=L,we=L=0,Ge=null;me!==null&&we<$.length;we++){me.index>we?(Ge=me,me=null):Ge=me.sibling;var Ee=I(C,me,$[we],K);if(Ee===null){me===null&&(me=Ge);break}e&&me&&Ee.alternate===null&&t(C,me),L=d(Ee,L,we),he===null?ie=Ee:he.sibling=Ee,he=Ee,me=Ge}if(we===$.length)return n(C,me),Te&&sr(C,we),ie;if(me===null){for(;we<$.length;we++)me=W(C,$[we],K),me!==null&&(L=d(me,L,we),he===null?ie=me:he.sibling=me,he=me);return Te&&sr(C,we),ie}for(me=r(C,me);we<$.length;we++)Ge=se(me,C,we,$[we],K),Ge!==null&&(e&&Ge.alternate!==null&&me.delete(Ge.key===null?we:Ge.key),L=d(Ge,L,we),he===null?ie=Ge:he.sibling=Ge,he=Ge);return e&&me.forEach(function(Vn){return t(C,Vn)}),Te&&sr(C,we),ie}function le(C,L,$,K){var ie=ee($);if(typeof ie!="function")throw Error(a(150));if($=ie.call($),$==null)throw Error(a(151));for(var he=ie=null,me=L,we=L=0,Ge=null,Ee=$.next();me!==null&&!Ee.done;we++,Ee=$.next()){me.index>we?(Ge=me,me=null):Ge=me.sibling;var Vn=I(C,me,Ee.value,K);if(Vn===null){me===null&&(me=Ge);break}e&&me&&Vn.alternate===null&&t(C,me),L=d(Vn,L,we),he===null?ie=Vn:he.sibling=Vn,he=Vn,me=Ge}if(Ee.done)return n(C,me),Te&&sr(C,we),ie;if(me===null){for(;!Ee.done;we++,Ee=$.next())Ee=W(C,Ee.value,K),Ee!==null&&(L=d(Ee,L,we),he===null?ie=Ee:he.sibling=Ee,he=Ee);return Te&&sr(C,we),ie}for(me=r(C,me);!Ee.done;we++,Ee=$.next())Ee=se(me,C,we,Ee.value,K),Ee!==null&&(e&&Ee.alternate!==null&&me.delete(Ee.key===null?we:Ee.key),L=d(Ee,L,we),he===null?ie=Ee:he.sibling=Ee,he=Ee);return e&&me.forEach(function(tf){return t(C,tf)}),Te&&sr(C,we),ie}function Oe(C,L,$,K){if(typeof $=="object"&&$!==null&&$.type===B&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case re:e:{for(var ie=$.key,he=L;he!==null;){if(he.key===ie){if(ie=$.type,ie===B){if(he.tag===7){n(C,he.sibling),L=l(he,$.props.children),L.return=C,C=L;break e}}else if(he.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ne&&vd(ie)===he.type){n(C,he.sibling),L=l(he,$.props),L.ref=Bs(C,he,$),L.return=C,C=L;break e}n(C,he);break}else t(C,he);he=he.sibling}$.type===B?(L=pr($.props.children,C.mode,K,$.key),L.return=C,C=L):(K=ga($.type,$.key,$.props,null,C.mode,K),K.ref=Bs(C,L,$),K.return=C,C=K)}return h(C);case Y:e:{for(he=$.key;L!==null;){if(L.key===he)if(L.tag===4&&L.stateNode.containerInfo===$.containerInfo&&L.stateNode.implementation===$.implementation){n(C,L.sibling),L=l(L,$.children||[]),L.return=C,C=L;break e}else{n(C,L);break}else t(C,L);L=L.sibling}L=wi($,C.mode,K),L.return=C,C=L}return h(C);case ne:return he=$._init,Oe(C,L,he($._payload),K)}if(tn($))return ae(C,L,$,K);if(ee($))return le(C,L,$,K);Wo(C,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,L!==null&&L.tag===6?(n(C,L.sibling),L=l(L,$),L.return=C,C=L):(n(C,L),L=yi($,C.mode,K),L.return=C,C=L),h(C)):n(C,L)}return Oe}var Vr=xd(!0),yd=xd(!1),Yo=jn(null),Qo=null,Or=null,jl=null;function Cl(){jl=Or=Qo=null}function Ml(e){var t=Yo.current;Fe(Yo),e._currentValue=t}function Nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){Qo=e,jl=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ut=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(jl!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(Qo===null)throw Error(a(308));Or=e,Qo.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var or=null;function $l(e){or===null?or=[e]:or.push(e)}function wd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,$l(t)):(n.next=l.next,l.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,cn(e,n)}return l=r.interleaved,l===null?(t.next=t,$l(r)):(t.next=l.next,l.next=t),r.interleaved=t,cn(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function kd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var h={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?l=d=h:d=d.next=h,n=n.next}while(n!==null);d===null?l=d=t:d=d.next=t}else l=d=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ko(e,t,n,r){var l=e.updateQueue;Nn=!1;var d=l.firstBaseUpdate,h=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var _=w,R=_.next;_.next=null,h===null?d=R:h.next=R,h=_;var U=e.alternate;U!==null&&(U=U.updateQueue,w=U.lastBaseUpdate,w!==h&&(w===null?U.firstBaseUpdate=R:w.next=R,U.lastBaseUpdate=_))}if(d!==null){var W=l.baseState;h=0,U=R=_=null,w=d;do{var I=w.lane,se=w.eventTime;if((r&I)===I){U!==null&&(U=U.next={eventTime:se,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ae=e,le=w;switch(I=t,se=n,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){W=ae.call(se,W,I);break e}W=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,I=typeof ae=="function"?ae.call(se,W,I):ae,I==null)break e;W=J({},W,I);break e;case 2:Nn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,I=l.effects,I===null?l.effects=[w]:I.push(w))}else se={eventTime:se,lane:I,tag:w.tag,payload:w.payload,callback:w.callback,next:null},U===null?(R=U=se,_=W):U=U.next=se,h|=I;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;I=w,w=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);if(U===null&&(_=W),l.baseState=_,l.firstBaseUpdate=R,l.lastBaseUpdate=U,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);ir|=h,e.lanes=h,e.memoizedState=W}}function _d(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var Us={},Gt=jn(Us),Ws=jn(Us),Ys=jn(Us);function ar(e){if(e===Us)throw Error(a(174));return e}function Tl(e,t){switch(Me(Ys,t),Me(Ws,e),Me(Gt,Us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mn(t,e)}Fe(Gt),Me(Gt,t)}function Ir(){Fe(Gt),Fe(Ws),Fe(Ys)}function Ad(e){ar(Ys.current);var t=ar(Gt.current),n=mn(t,e.type);t!==n&&(Me(Ws,e),Me(Gt,n))}function Rl(e){Ws.current===e&&(Fe(Gt),Fe(Ws))}var He=jn(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function Hl(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var Jo=q.ReactCurrentDispatcher,Zl=q.ReactCurrentBatchConfig,lr=0,Ze=null,Be=null,Ye=null,Xo=!1,Qs=!1,Gs=0,_p=0;function et(){throw Error(a(321))}function Vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Ol(e,t,n,r,l,d){if(lr=d,Ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=e===null||e.memoizedState===null?Sp:zp,e=n(r,l),Qs){d=0;do{if(Qs=!1,Gs=0,25<=d)throw Error(a(301));d+=1,Ye=Be=null,t.updateQueue=null,Jo.current=jp,e=n(r,l)}while(Qs)}if(Jo.current=na,t=Be!==null&&Be.next!==null,lr=0,Ye=Be=Ze=null,Xo=!1,t)throw Error(a(300));return e}function Dl(){var e=Gs!==0;return Gs=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ze.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function St(){if(Be===null){var e=Ze.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ye===null?Ze.memoizedState:Ye.next;if(t!==null)Ye=t,Be=e;else{if(e===null)throw Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?Ze.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ks(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=St(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Be,l=r.baseQueue,d=n.pending;if(d!==null){if(l!==null){var h=l.next;l.next=d.next,d.next=h}r.baseQueue=l=d,n.pending=null}if(l!==null){d=l.next,r=r.baseState;var w=h=null,_=null,R=d;do{var U=R.lane;if((lr&U)===U)_!==null&&(_=_.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),r=R.hasEagerState?R.eagerState:e(r,R.action);else{var W={lane:U,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};_===null?(w=_=W,h=r):_=_.next=W,Ze.lanes|=U,ir|=U}R=R.next}while(R!==null&&R!==d);_===null?h=r:_.next=w,Ht(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=h,t.baseQueue=_,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do d=l.lane,Ze.lanes|=d,ir|=d,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=St(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,d=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do d=e(d,h.action),h=h.next;while(h!==l);Ht(d,t.memoizedState)||(ut=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,r]}function Ld(){}function Ed(e,t){var n=Ze,r=St(),l=t(),d=!Ht(r.memoizedState,l);if(d&&(r.memoizedState=l,ut=!0),r=r.queue,Ul(jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||d||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,qs(9,zd.bind(null,n,r,l,t),void 0,null),Qe===null)throw Error(a(349));(lr&30)!==0||Sd(n,t,l)}return l}function Sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ze.updateQueue,t===null?(t={lastEffect:null,stores:null},Ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,r){t.value=n,t.getSnapshot=r,Cd(t)&&Md(e)}function jd(e,t,n){return n(function(){Cd(t)&&Md(e)})}function Cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Md(e){var t=cn(e,1);t!==null&&It(t,e,1,-1)}function Nd(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,Ze,e),[t.memoizedState,e]}function qs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ze.updateQueue,t===null?(t={lastEffect:null,stores:null},Ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $d(){return St().memoizedState}function ea(e,t,n,r){var l=Kt();Ze.flags|=e,l.memoizedState=qs(1|t,n,void 0,r===void 0?null:r)}function ta(e,t,n,r){var l=St();r=r===void 0?null:r;var d=void 0;if(Be!==null){var h=Be.memoizedState;if(d=h.destroy,r!==null&&Vl(r,h.deps)){l.memoizedState=qs(t,n,d,r);return}}Ze.flags|=e,l.memoizedState=qs(1|t,n,d,r)}function Fd(e,t){return ea(8390656,8,e,t)}function Ul(e,t){return ta(2048,8,e,t)}function Td(e,t){return ta(4,2,e,t)}function Rd(e,t){return ta(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){return n=n!=null?n.concat([e]):null,ta(4,4,Pd.bind(null,t,e),n)}function Wl(){}function Zd(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vd(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Od(e,t,n){return(lr&21)===0?(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n):(Ht(n,t)||(n=vc(),Ze.lanes|=n,ir|=n,e.baseState=!0),t)}function Ap(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{je=n,Zl.transition=r}}function Dd(){return St().memoizedState}function Lp(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Id(e))Bd(t,n);else if(n=wd(e,t,n,r),n!==null){var l=at();It(n,e,r,l),Ud(n,t,r)}}function Ep(e,t,n){var r=Pn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Bd(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,w=d(h,n);if(l.hasEagerState=!0,l.eagerState=w,Ht(w,h)){var _=t.interleaved;_===null?(l.next=l,$l(t)):(l.next=_.next,_.next=l),t.interleaved=l;return}}catch{}finally{}n=wd(e,t,l,r),n!==null&&(l=at(),It(n,e,r,l),Ud(n,t,r))}}function Id(e){var t=e.alternate;return e===Ze||t!==null&&t===Ze}function Bd(e,t){Qs=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var na={readContext:Et,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Sp={readContext:Et,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ea(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lp.bind(null,Ze,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Nd,useDebugValue:Wl,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Nd(!1),t=e[0];return e=Ap.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ze,l=Kt();if(Te){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Qe===null)throw Error(a(349));(lr&30)!==0||Sd(r,t,n)}l.memoizedState=n;var d={value:n,getSnapshot:t};return l.queue=d,Fd(jd.bind(null,r,d,e),[e]),r.flags|=2048,qs(9,zd.bind(null,r,d,n,t),void 0,null),n},useId:function(){var e=Kt(),t=Qe.identifierPrefix;if(Te){var n=ln,r=an;n=(r&~(1<<32-G(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_p++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:Et,useCallback:Zd,useContext:Et,useEffect:Ul,useImperativeHandle:Hd,useInsertionEffect:Td,useLayoutEffect:Rd,useMemo:Vd,useReducer:Il,useRef:$d,useState:function(){return Il(Ks)},useDebugValue:Wl,useDeferredValue:function(e){var t=St();return Od(t,Be.memoizedState,e)},useTransition:function(){var e=Il(Ks)[0],t=St().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:Ed,useId:Dd,unstable_isNewReconciler:!1},jp={readContext:Et,useCallback:Zd,useContext:Et,useEffect:Ul,useImperativeHandle:Hd,useInsertionEffect:Td,useLayoutEffect:Rd,useMemo:Vd,useReducer:Bl,useRef:$d,useState:function(){return Bl(Ks)},useDebugValue:Wl,useDeferredValue:function(e){var t=St();return Be===null?t.memoizedState=e:Od(t,Be.memoizedState,e)},useTransition:function(){var e=Bl(Ks)[0],t=St().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:Ed,useId:Dd,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),l=Pn(e),d=dn(r,l);d.payload=t,n!=null&&(d.callback=n),t=$n(e,d,l),t!==null&&(It(t,e,l,r),Go(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),l=Pn(e),d=dn(r,l);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=$n(e,d,l),t!==null&&(It(t,e,l,r),Go(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=Pn(e),l=dn(n,r);l.tag=2,t!=null&&(l.callback=t),t=$n(e,l,r),t!==null&&(It(t,e,r,n),Go(t,e,r))}};function Wd(e,t,n,r,l,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,h):t.prototype&&t.prototype.isPureReactComponent?!Ps(n,r)||!Ps(l,d):!0}function Yd(e,t,n){var r=!1,l=Cn,d=t.contextType;return typeof d=="object"&&d!==null?d=Et(d):(l=dt(t)?nr:Xe.current,r=t.contextTypes,d=(r=r!=null)?Rr(e,l):Cn),t=new t(n,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Fl(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=Et(d):(d=dt(t)?nr:Xe.current,l.context=Rr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Yl(e,t,d,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ra.enqueueReplaceState(l,l.state,null),Ko(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var n="",r=t;do n+=be(r),r=r.return;while(r);var l=n}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cp=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){da||(da=!0,ui=r),Kl(e,t)},n}function Kd(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Kl(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){Kl(e,t),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),n}function qd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Bp.bind(null,e,t,n),t.then(e,e))}function Jd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xd(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Mp=q.ReactCurrentOwner,ut=!1;function ot(e,t,n,r){t.child=e===null?yd(t,null,n,r):Vr(t,e.child,n,r)}function eu(e,t,n,r,l){n=n.render;var d=t.ref;return Dr(t,l),r=Ol(e,t,n,r,d,l),n=Dl(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,un(e,t,l)):(Te&&n&&Al(t),t.flags|=1,ot(e,t,r,l),t.child)}function tu(e,t,n,r,l){if(e===null){var d=n.type;return typeof d=="function"&&!xi(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,nu(e,t,d,r,l)):(e=ga(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var h=d.memoizedProps;if(n=n.compare,n=n!==null?n:Ps,n(h,r)&&e.ref===t.ref)return un(e,t,l)}return t.flags|=1,e=Zn(d,r),e.ref=t.ref,e.return=t,t.child=e}function nu(e,t,n,r,l){if(e!==null){var d=e.memoizedProps;if(Ps(d,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,un(e,t,l)}return ql(e,t,n,r,l)}function ru(e,t,n){var r=t.pendingProps,l=r.children,d=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Wr,wt),wt|=n;else{if((n&1073741824)===0)return e=d!==null?d.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Wr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=d!==null?d.baseLanes:n,Me(Wr,wt),wt|=r}else d!==null?(r=d.baseLanes|n,t.memoizedState=null):r=n,Me(Wr,wt),wt|=r;return ot(e,t,l,n),t.child}function su(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,l){var d=dt(n)?nr:Xe.current;return d=Rr(t,d),Dr(t,l),n=Ol(e,t,n,r,d,l),r=Dl(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,un(e,t,l)):(Te&&r&&Al(t),t.flags|=1,ot(e,t,n,l),t.child)}function ou(e,t,n,r,l){if(dt(n)){var d=!0;Oo(t)}else d=!1;if(Dr(t,l),t.stateNode===null)oa(e,t),Yd(t,n,r),Ql(t,n,r,l),r=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var _=h.context,R=n.contextType;typeof R=="object"&&R!==null?R=Et(R):(R=dt(n)?nr:Xe.current,R=Rr(t,R));var U=n.getDerivedStateFromProps,W=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function";W||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==r||_!==R)&&Qd(t,h,r,R),Nn=!1;var I=t.memoizedState;h.state=I,Ko(t,r,h,l),_=t.memoizedState,w!==r||I!==_||ct.current||Nn?(typeof U=="function"&&(Yl(t,n,U,r),_=t.memoizedState),(w=Nn||Wd(t,n,w,r,I,_,R))?(W||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=_),h.props=r,h.state=_,h.context=R,r=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{h=t.stateNode,bd(e,t),w=t.memoizedProps,R=t.type===t.elementType?w:Vt(t.type,w),h.props=R,W=t.pendingProps,I=h.context,_=n.contextType,typeof _=="object"&&_!==null?_=Et(_):(_=dt(n)?nr:Xe.current,_=Rr(t,_));var se=n.getDerivedStateFromProps;(U=typeof se=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==W||I!==_)&&Qd(t,h,r,_),Nn=!1,I=t.memoizedState,h.state=I,Ko(t,r,h,l);var ae=t.memoizedState;w!==W||I!==ae||ct.current||Nn?(typeof se=="function"&&(Yl(t,n,se,r),ae=t.memoizedState),(R=Nn||Wd(t,n,R,r,I,ae,_)||!1)?(U||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,ae,_),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,ae,_)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ae),h.props=r,h.state=ae,h.context=_,r=R):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),r=!1)}return Jl(e,t,n,r,d,l)}function Jl(e,t,n,r,l,d){su(e,t);var h=(t.flags&128)!==0;if(!r&&!h)return l&&dd(t,n,!1),un(e,t,d);r=t.stateNode,Mp.current=t;var w=h&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&h?(t.child=Vr(t,e.child,null,d),t.child=Vr(t,null,w,d)):ot(e,t,w,d),t.memoizedState=r.state,l&&dd(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&id(e,t.context,!1),Tl(e,t.containerInfo)}function lu(e,t,n,r,l){return Zr(),zl(l),t.flags|=256,ot(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,t,n){var r=t.pendingProps,l=He.current,d=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(l&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Me(He,l&1),e===null)return Sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=r.children,e=r.fallback,d?(r=t.mode,d=t.child,h={mode:"hidden",children:h},(r&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=va(h,r,0,null),e=pr(e,r,n,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ei(n),t.memoizedState=Xl,e):ti(t,h));if(l=e.memoizedState,l!==null&&(w=l.dehydrated,w!==null))return Np(e,t,h,r,w,l,n);if(d){d=r.fallback,h=t.mode,l=e.child,w=l.sibling;var _={mode:"hidden",children:r.children};return(h&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=_,t.deletions=null):(r=Zn(l,_),r.subtreeFlags=l.subtreeFlags&14680064),w!==null?d=Zn(w,d):(d=pr(d,h,n,null),d.flags|=2),d.return=t,r.return=t,r.sibling=d,t.child=r,r=d,d=t.child,h=e.child.memoizedState,h=h===null?ei(n):{baseLanes:h.baseLanes|n,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return d=e.child,e=d.sibling,r=Zn(d,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ti(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,n,r){return r!==null&&zl(r),Vr(t,e.child,null,n),e=ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Np(e,t,n,r,l,d,h){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(a(422))),sa(e,t,h,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=r.fallback,l=t.mode,r=va({mode:"visible",children:r.children},l,0,null),d=pr(d,l,h,null),d.flags|=2,r.return=t,d.return=t,r.sibling=d,t.child=r,(t.mode&1)!==0&&Vr(t,e.child,null,h),t.child.memoizedState=ei(h),t.memoizedState=Xl,d);if((t.mode&1)===0)return sa(e,t,h,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var w=r.dgst;return r=w,d=Error(a(419)),r=Gl(d,r,void 0),sa(e,t,h,r)}if(w=(h&e.childLanes)!==0,ut||w){if(r=Qe,r!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|h))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,cn(e,l),It(r,e,l,-1))}return vi(),r=Gl(Error(a(421))),sa(e,t,h,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Up.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,yt=zn(l.nextSibling),xt=t,Te=!0,Zt=null,e!==null&&(At[Lt++]=an,At[Lt++]=ln,At[Lt++]=rr,an=e.id,ln=e.overflow,rr=t),t=ti(t,r.children),t.flags|=4096,t)}function cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nl(e.return,t,n)}function ni(e,t,n,r,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=n,d.tailMode=l)}function du(e,t,n){var r=t.pendingProps,l=r.revealOrder,d=r.tail;if(ot(e,t,r.children,n),r=He.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,n,t);else if(e.tag===19)cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(He,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&qo(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ni(t,!1,l,n,d);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&qo(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ni(t,!0,n,null,d);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $p(e,t,n){switch(t.tag){case 3:au(t),Zr();break;case 5:Ad(t);break;case 1:dt(t.type)&&Oo(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Me(Yo,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(He,He.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?iu(e,t,n):(Me(He,He.current&1),e=un(e,t,n),e!==null?e.sibling:null);Me(He,He.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return du(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Me(He,He.current),r)break;return null;case 22:case 23:return t.lanes=0,ru(e,t,n)}return un(e,t,n)}var uu,ri,pu,fu;uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ri=function(){},pu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,ar(Gt.current);var d=null;switch(n){case"input":l=cs(e,l),r=cs(e,r),d=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),d=[];break;case"textarea":l=Wn(e,l),r=Wn(e,r),d=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ho)}us(n,r);var h;n=null;for(R in l)if(!r.hasOwnProperty(R)&&l.hasOwnProperty(R)&&l[R]!=null)if(R==="style"){var w=l[R];for(h in w)w.hasOwnProperty(h)&&(n||(n={}),n[h]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(p.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in r){var _=r[R];if(w=l!=null?l[R]:void 0,r.hasOwnProperty(R)&&_!==w&&(_!=null||w!=null))if(R==="style")if(w){for(h in w)!w.hasOwnProperty(h)||_&&_.hasOwnProperty(h)||(n||(n={}),n[h]="");for(h in _)_.hasOwnProperty(h)&&w[h]!==_[h]&&(n||(n={}),n[h]=_[h])}else n||(d||(d=[]),d.push(R,n)),n=_;else R==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,w=w?w.__html:void 0,_!=null&&w!==_&&(d=d||[]).push(R,_)):R==="children"?typeof _!="string"&&typeof _!="number"||(d=d||[]).push(R,""+_):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(p.hasOwnProperty(R)?(_!=null&&R==="onScroll"&&$e("scroll",e),d||w===_||(d=[])):(d=d||[]).push(R,_))}n&&(d=d||[]).push("style",n);var R=d;(t.updateQueue=R)&&(t.flags|=4)}},fu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Js(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fp(e,t,n){var r=t.pendingProps;switch(Ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return dt(t.type)&&Vo(),tt(t),null;case 3:return r=t.stateNode,Ir(),Fe(ct),Fe(Xe),Hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zt!==null&&(hi(Zt),Zt=null))),ri(e,t),tt(t),null;case 5:Rl(t);var l=ar(Ys.current);if(n=t.type,e!==null&&t.stateNode!=null)pu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return tt(t),null}if(e=ar(Gt.current),Uo(t)){r=t.stateNode,n=t.type;var d=t.memoizedProps;switch(r[Qt]=t,r[Ds]=d,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(l=0;l<Zs.length;l++)$e(Zs[l],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":mo(r,d),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!d.multiple},$e("invalid",r);break;case"textarea":Ar(r,d),$e("invalid",r)}us(n,d),l=null;for(var h in d)if(d.hasOwnProperty(h)){var w=d[h];h==="children"?typeof w=="string"?r.textContent!==w&&(d.suppressHydrationWarning!==!0&&Po(r.textContent,w,e),l=["children",w]):typeof w=="number"&&r.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&Po(r.textContent,w,e),l=["children",""+w]):p.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&$e("scroll",r)}switch(n){case"input":br(r),hn(r,d,!0);break;case"textarea":br(r),mt(r);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(r.onclick=Ho)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Je(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=h.createElement(n,{is:r.is}):(e=h.createElement(n),n==="select"&&(h=e,r.multiple?h.multiple=!0:r.size&&(h.size=r.size))):e=h.createElementNS(e,n),e[Qt]=t,e[Ds]=r,uu(e,t,!1,!1),t.stateNode=e;e:{switch(h=ps(n,r),n){case"dialog":$e("cancel",e),$e("close",e),l=r;break;case"iframe":case"object":case"embed":$e("load",e),l=r;break;case"video":case"audio":for(l=0;l<Zs.length;l++)$e(Zs[l],e);l=r;break;case"source":$e("error",e),l=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),l=r;break;case"details":$e("toggle",e),l=r;break;case"input":mo(e,r),l=cs(e,r),$e("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),$e("invalid",e);break;case"textarea":Ar(e,r),l=Wn(e,r),$e("invalid",e);break;default:l=r}us(n,l),w=l;for(d in w)if(w.hasOwnProperty(d)){var _=w[d];d==="style"?Gn(e,_):d==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,_!=null&&go(e,_)):d==="children"?typeof _=="string"?(n!=="textarea"||_!=="")&&Yn(e,_):typeof _=="number"&&Yn(e,""+_):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(p.hasOwnProperty(d)?_!=null&&d==="onScroll"&&$e("scroll",e):_!=null&&D(e,d,_,h))}switch(n){case"input":br(e),hn(e,r,!1);break;case"textarea":br(e),mt(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Se(r.value));break;case"select":e.multiple=!!r.multiple,d=r.value,d!=null?nn(e,!!r.multiple,d,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)fu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=ar(Ys.current),ar(Gt.current),Uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(d=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(e.mode&1)!==0)}d&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return tt(t),null;case 13:if(Fe(He),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gd(),Zr(),t.flags|=98560,d=!1;else if(d=Uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[Qt]=t}else Zr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),d=!1}else Zt!==null&&(hi(Zt),Zt=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(He.current&1)!==0?Ue===0&&(Ue=3):vi())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Ir(),ri(e,t),e===null&&Vs(t.stateNode.containerInfo),tt(t),null;case 10:return Ml(t.type._context),tt(t),null;case 17:return dt(t.type)&&Vo(),tt(t),null;case 19:if(Fe(He),d=t.memoizedState,d===null)return tt(t),null;if(r=(t.flags&128)!==0,h=d.rendering,h===null)if(r)Js(d,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=qo(e),h!==null){for(t.flags|=128,Js(d,!1),r=h.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)d=n,e=r,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(He,He.current&1|2),t.child}e=e.sibling}d.tail!==null&&Ne()>Yr&&(t.flags|=128,r=!0,Js(d,!1),t.lanes=4194304)}else{if(!r)if(e=qo(h),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Js(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Te)return tt(t),null}else 2*Ne()-d.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,Js(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(n=d.last,n!==null?n.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Ne(),t.sibling=null,n=He.current,Me(He,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return gi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(wt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Tp(e,t){switch(Ll(t),t.tag){case 1:return dt(t.type)&&Vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),Fe(ct),Fe(Xe),Hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(Fe(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(He),null;case 4:return Ir(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return gi(),null;case 24:return null;default:return null}}var aa=!1,nt=!1,Rp=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function si(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var hu=!1;function Pp(e,t){if(gl=Eo,e=Wc(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var h=0,w=-1,_=-1,R=0,U=0,W=e,I=null;t:for(;;){for(var se;W!==n||l!==0&&W.nodeType!==3||(w=h+l),W!==d||r!==0&&W.nodeType!==3||(_=h+r),W.nodeType===3&&(h+=W.nodeValue.length),(se=W.firstChild)!==null;)I=W,W=se;for(;;){if(W===e)break t;if(I===n&&++R===l&&(w=h),I===d&&++U===r&&(_=h),(se=W.nextSibling)!==null)break;W=I,I=W.parentNode}W=se}n=w===-1||_===-1?null:{start:w,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},Eo=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var ae=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,Oe=ae.memoizedState,C=t.stateNode,L=C.getSnapshotBeforeUpdate(t.elementType===t.type?le:Vt(t.type,le),Oe);C.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(K){Ve(t,t.return,K)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return ae=hu,hu=!1,ae}function Xs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&si(t,n,d)}l=l.next}while(l!==r)}}function la(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[Ds],delete t[bl],delete t[yp],delete t[wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gu(e){return e.tag===5||e.tag===3||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ho));else if(r!==4&&(e=e.child,e!==null))for(ai(e,t,n),e=e.sibling;e!==null;)ai(e,t,n),e=e.sibling}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}var Ke=null,Ot=!1;function Fn(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(P&&typeof P.onCommitFiberUnmount=="function")try{P.onCommitFiberUnmount(A,n)}catch{}switch(n.tag){case 5:nt||Ur(n,t);case 6:var r=Ke,l=Ot;Ke=null,Fn(e,t,n),Ke=r,Ot=l,Ke!==null&&(Ot?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Ot?(e=Ke,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Ms(e)):wl(Ke,n.stateNode));break;case 4:r=Ke,l=Ot,Ke=n.stateNode.containerInfo,Ot=!0,Fn(e,t,n),Ke=r,Ot=l;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var d=l,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&si(n,t,h),l=l.next}while(l!==r)}Fn(e,t,n);break;case 1:if(!nt&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(w){Ve(n,t,w)}Fn(e,t,n);break;case 21:Fn(e,t,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Fn(e,t,n),nt=r):Fn(e,t,n);break;default:Fn(e,t,n)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rp),t.forEach(function(r){var l=Wp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var d=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Ke=w.stateNode,Ot=!1;break e;case 3:Ke=w.stateNode.containerInfo,Ot=!0;break e;case 4:Ke=w.stateNode.containerInfo,Ot=!0;break e}w=w.return}if(Ke===null)throw Error(a(160));xu(d,h,l),Ke=null,Ot=!1;var _=l.alternate;_!==null&&(_.return=null),l.return=null}catch(R){Ve(l,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wu(t,e),t=t.sibling}function wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),qt(e),r&4){try{Xs(3,e,e.return),la(3,e)}catch(le){Ve(e,e.return,le)}try{Xs(5,e,e.return)}catch(le){Ve(e,e.return,le)}}break;case 1:Dt(t,e),qt(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(Dt(t,e),qt(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var l=e.stateNode;try{Yn(l,"")}catch(le){Ve(e,e.return,le)}}if(r&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,h=n!==null?n.memoizedProps:d,w=e.type,_=e.updateQueue;if(e.updateQueue=null,_!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&_r(l,d),ps(w,h);var R=ps(w,d);for(h=0;h<_.length;h+=2){var U=_[h],W=_[h+1];U==="style"?Gn(l,W):U==="dangerouslySetInnerHTML"?go(l,W):U==="children"?Yn(l,W):D(l,U,W,R)}switch(w){case"input":Wt(l,d);break;case"textarea":kt(l,d);break;case"select":var I=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var se=d.value;se!=null?nn(l,!!d.multiple,se,!1):I!==!!d.multiple&&(d.defaultValue!=null?nn(l,!!d.multiple,d.defaultValue,!0):nn(l,!!d.multiple,d.multiple?[]:"",!1))}l[Ds]=d}catch(le){Ve(e,e.return,le)}}break;case 6:if(Dt(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(le){Ve(e,e.return,le)}}break;case 3:if(Dt(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(t.containerInfo)}catch(le){Ve(e,e.return,le)}break;case 4:Dt(t,e),qt(e);break;case 13:Dt(t,e),qt(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(di=Ne())),r&4&&yu(e);break;case 22:if(U=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(R=nt)||U,Dt(t,e),nt=R):Dt(t,e),qt(e),r&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!U&&(e.mode&1)!==0)for(oe=e,U=e.child;U!==null;){for(W=oe=U;oe!==null;){switch(I=oe,se=I.child,I.tag){case 0:case 11:case 14:case 15:Xs(4,I,I.return);break;case 1:Ur(I,I.return);var ae=I.stateNode;if(typeof ae.componentWillUnmount=="function"){r=I,n=I.return;try{t=r,ae.props=t.memoizedProps,ae.state=t.memoizedState,ae.componentWillUnmount()}catch(le){Ve(r,n,le)}}break;case 5:Ur(I,I.return);break;case 22:if(I.memoizedState!==null){_u(W);continue}}se!==null?(se.return=I,oe=se):_u(W)}U=U.sibling}e:for(U=null,W=e;;){if(W.tag===5){if(U===null){U=W;try{l=W.stateNode,R?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=W.stateNode,_=W.memoizedProps.style,h=_!=null&&_.hasOwnProperty("display")?_.display:null,w.style.display=vo("display",h))}catch(le){Ve(e,e.return,le)}}}else if(W.tag===6){if(U===null)try{W.stateNode.nodeValue=R?"":W.memoizedProps}catch(le){Ve(e,e.return,le)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===e)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===e)break e;for(;W.sibling===null;){if(W.return===null||W.return===e)break e;U===W&&(U=null),W=W.return}U===W&&(U=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:Dt(t,e),qt(e),r&4&&yu(e);break;case 21:break;default:Dt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gu(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Yn(l,""),r.flags&=-33);var d=vu(e);li(e,d,l);break;case 3:case 4:var h=r.stateNode.containerInfo,w=vu(e);ai(e,w,h);break;default:throw Error(a(161))}}catch(_){Ve(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hp(e,t,n){oe=e,bu(e)}function bu(e,t,n){for(var r=(e.mode&1)!==0;oe!==null;){var l=oe,d=l.child;if(l.tag===22&&r){var h=l.memoizedState!==null||aa;if(!h){var w=l.alternate,_=w!==null&&w.memoizedState!==null||nt;w=aa;var R=nt;if(aa=h,(nt=_)&&!R)for(oe=l;oe!==null;)h=oe,_=h.child,h.tag===22&&h.memoizedState!==null?Au(l):_!==null?(_.return=h,oe=_):Au(l);for(;d!==null;)oe=d,bu(d),d=d.sibling;oe=l,aa=w,nt=R}ku(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,oe=d):ku(e)}}function ku(e){for(;oe!==null;){var t=oe;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||la(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&_d(t,d,r);break;case 3:var h=t.updateQueue;if(h!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_d(t,h,n)}break;case 5:var w=t.stateNode;if(n===null&&t.flags&4){n=w;var _=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":_.autoFocus&&n.focus();break;case"img":_.src&&(n.src=_.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var U=R.memoizedState;if(U!==null){var W=U.dehydrated;W!==null&&Ms(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}nt||t.flags&512&&oi(t)}catch(I){Ve(t,t.return,I)}}if(t===e){oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,oe=n;break}oe=t.return}}function _u(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,oe=n;break}oe=t.return}}function Au(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{la(4,t)}catch(_){Ve(t,n,_)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(_){Ve(t,l,_)}}var d=t.return;try{oi(t)}catch(_){Ve(t,d,_)}break;case 5:var h=t.return;try{oi(t)}catch(_){Ve(t,h,_)}}}catch(_){Ve(t,t.return,_)}if(t===e){oe=null;break}var w=t.sibling;if(w!==null){w.return=t.return,oe=w;break}oe=t.return}}var Zp=Math.ceil,ia=q.ReactCurrentDispatcher,ii=q.ReactCurrentOwner,zt=q.ReactCurrentBatchConfig,Le=0,Qe=null,De=null,qe=0,wt=0,Wr=jn(0),Ue=0,eo=null,ir=0,ca=0,ci=0,to=null,pt=null,di=0,Yr=1/0,pn=null,da=!1,ui=null,Tn=null,ua=!1,Rn=null,pa=0,no=0,pi=null,fa=-1,ha=0;function at(){return(Le&6)!==0?Ne():fa!==-1?fa:fa=Ne()}function Pn(e){return(e.mode&1)===0?1:(Le&2)!==0&&qe!==0?qe&-qe:kp.transition!==null?(ha===0&&(ha=vc()),ha):(e=je,e!==0||(e=window.event,e=e===void 0?16:Ec(e.type)),e)}function It(e,t,n,r){if(50<no)throw no=0,pi=null,Error(a(185));Es(e,n,r),((Le&2)===0||e!==Qe)&&(e===Qe&&((Le&2)===0&&(ca|=n),Ue===4&&Hn(e,qe)),ft(e,r),n===1&&Le===0&&(t.mode&1)===0&&(Yr=Ne()+500,Do&&Mn()))}function ft(e,t){var n=e.callbackNode;k1(e,t);var r=er(e,e===Qe?qe:0);if(r===0)n!==null&&Jn(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jn(n),t===1)e.tag===0?bp(Eu.bind(null,e)):ud(Eu.bind(null,e)),vp(function(){(Le&6)===0&&Mn()}),n=null;else{switch(xc(r)){case 1:n=wn;break;case 4:n=Ls;break;case 16:n=Xn;break;case 536870912:n=x;break;default:n=Xn}n=Fu(n,Lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lu(e,t){if(fa=-1,ha=0,(Le&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=er(e,e===Qe?qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ma(e,r);else{t=r;var l=Le;Le|=2;var d=zu();(Qe!==e||qe!==t)&&(pn=null,Yr=Ne()+500,dr(e,t));do try{Dp();break}catch(w){Su(e,w)}while(!0);Cl(),ia.current=d,Le=l,De!==null?t=0:(Qe=null,qe=0,t=Ue)}if(t!==0){if(t===2&&(l=Wa(e),l!==0&&(r=l,t=fi(e,l))),t===1)throw n=eo,dr(e,0),Hn(e,r),ft(e,Ne()),n;if(t===6)Hn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Vp(l)&&(t=ma(e,r),t===2&&(d=Wa(e),d!==0&&(r=d,t=fi(e,d))),t===1))throw n=eo,dr(e,0),Hn(e,r),ft(e,Ne()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:ur(e,pt,pn);break;case 3:if(Hn(e,r),(r&130023424)===r&&(t=di+500-Ne(),10<t)){if(er(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yl(ur.bind(null,e,pt,pn),t);break}ur(e,pt,pn);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var h=31-G(r);d=1<<h,h=t[h],h>l&&(l=h),r&=~d}if(r=l,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zp(r/1960))-r,10<r){e.timeoutHandle=yl(ur.bind(null,e,pt,pn),r);break}ur(e,pt,pn);break;case 5:ur(e,pt,pn);break;default:throw Error(a(329))}}}return ft(e,Ne()),e.callbackNode===n?Lu.bind(null,e):null}function fi(e,t){var n=to;return e.current.memoizedState.isDehydrated&&(dr(e,t).flags|=256),e=ma(e,t),e!==2&&(t=pt,pt=n,t!==null&&hi(t)),e}function hi(e){pt===null?pt=e:pt.push.apply(pt,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],d=l.getSnapshot;l=l.value;try{if(!Ht(d(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t){for(t&=~ci,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-G(t),r=1<<n;e[n]=-1,t&=~r}}function Eu(e){if((Le&6)!==0)throw Error(a(327));Qr();var t=er(e,0);if((t&1)===0)return ft(e,Ne()),null;var n=ma(e,t);if(e.tag!==0&&n===2){var r=Wa(e);r!==0&&(t=r,n=fi(e,r))}if(n===1)throw n=eo,dr(e,0),Hn(e,t),ft(e,Ne()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,pt,pn),ft(e,Ne()),null}function mi(e,t){var n=Le;Le|=1;try{return e(t)}finally{Le=n,Le===0&&(Yr=Ne()+500,Do&&Mn())}}function cr(e){Rn!==null&&Rn.tag===0&&(Le&6)===0&&Qr();var t=Le;Le|=1;var n=zt.transition,r=je;try{if(zt.transition=null,je=1,e)return e()}finally{je=r,zt.transition=n,Le=t,(Le&6)===0&&Mn()}}function gi(){wt=Wr.current,Fe(Wr)}function dr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gp(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:Ir(),Fe(ct),Fe(Xe),Hl();break;case 5:Rl(r);break;case 4:Ir();break;case 13:Fe(He);break;case 19:Fe(He);break;case 10:Ml(r.type._context);break;case 22:case 23:gi()}n=n.return}if(Qe=e,De=e=Zn(e.current,null),qe=wt=t,Ue=0,eo=null,ci=ca=ir=0,pt=to=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,d=n.pending;if(d!==null){var h=d.next;d.next=l,r.next=h}n.pending=r}or=null}return e}function Su(e,t){do{var n=De;try{if(Cl(),Jo.current=na,Xo){for(var r=Ze.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xo=!1}if(lr=0,Ye=Be=Ze=null,Qs=!1,Gs=0,ii.current=null,n===null||n.return===null){Ue=1,eo=t,De=null;break}e:{var d=e,h=n.return,w=n,_=t;if(t=qe,w.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){var R=_,U=w,W=U.tag;if((U.mode&1)===0&&(W===0||W===11||W===15)){var I=U.alternate;I?(U.updateQueue=I.updateQueue,U.memoizedState=I.memoizedState,U.lanes=I.lanes):(U.updateQueue=null,U.memoizedState=null)}var se=Jd(h);if(se!==null){se.flags&=-257,Xd(se,h,w,d,t),se.mode&1&&qd(d,R,t),t=se,_=R;var ae=t.updateQueue;if(ae===null){var le=new Set;le.add(_),t.updateQueue=le}else ae.add(_);break e}else{if((t&1)===0){qd(d,R,t),vi();break e}_=Error(a(426))}}else if(Te&&w.mode&1){var Oe=Jd(h);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Xd(Oe,h,w,d,t),zl(Br(_,w));break e}}d=_=Br(_,w),Ue!==4&&(Ue=2),to===null?to=[d]:to.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var C=Gd(d,_,t);kd(d,C);break e;case 1:w=_;var L=d.type,$=d.stateNode;if((d.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Tn===null||!Tn.has($)))){d.flags|=65536,t&=-t,d.lanes|=t;var K=Kd(d,w,t);kd(d,K);break e}}d=d.return}while(d!==null)}Cu(n)}catch(ie){t=ie,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function zu(){var e=ia.current;return ia.current=na,e===null?na:e}function vi(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Qe===null||(ir&268435455)===0&&(ca&268435455)===0||Hn(Qe,qe)}function ma(e,t){var n=Le;Le|=2;var r=zu();(Qe!==e||qe!==t)&&(pn=null,dr(e,t));do try{Op();break}catch(l){Su(e,l)}while(!0);if(Cl(),Le=n,ia.current=r,De!==null)throw Error(a(261));return Qe=null,qe=0,Ue}function Op(){for(;De!==null;)ju(De)}function Dp(){for(;De!==null&&!_s();)ju(De)}function ju(e){var t=$u(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Cu(e):De=t,ii.current=null}function Cu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Fp(n,t,wt),n!==null){De=n;return}}else{if(n=Tp(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ue===0&&(Ue=5)}function ur(e,t,n){var r=je,l=zt.transition;try{zt.transition=null,je=1,Ip(e,t,n,r)}finally{zt.transition=l,je=r}return null}function Ip(e,t,n,r){do Qr();while(Rn!==null);if((Le&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var d=n.lanes|n.childLanes;if(_1(e,d),e===Qe&&(De=Qe=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ua||(ua=!0,Fu(Xn,function(){return Qr(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=zt.transition,zt.transition=null;var h=je;je=1;var w=Le;Le|=4,ii.current=null,Pp(e,n),wu(n,e),cp(vl),Eo=!!gl,vl=gl=null,e.current=n,Hp(n),Ua(),Le=w,je=h,zt.transition=d}else e.current=n;if(ua&&(ua=!1,Rn=e,pa=l),d=e.pendingLanes,d===0&&(Tn=null),de(n.stateNode),ft(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(da)throw da=!1,e=ui,ui=null,e;return(pa&1)!==0&&e.tag!==0&&Qr(),d=e.pendingLanes,(d&1)!==0?e===pi?no++:(no=0,pi=e):no=0,Mn(),null}function Qr(){if(Rn!==null){var e=xc(pa),t=zt.transition,n=je;try{if(zt.transition=null,je=16>e?16:e,Rn===null)var r=!1;else{if(e=Rn,Rn=null,pa=0,(Le&6)!==0)throw Error(a(331));var l=Le;for(Le|=4,oe=e.current;oe!==null;){var d=oe,h=d.child;if((oe.flags&16)!==0){var w=d.deletions;if(w!==null){for(var _=0;_<w.length;_++){var R=w[_];for(oe=R;oe!==null;){var U=oe;switch(U.tag){case 0:case 11:case 15:Xs(8,U,d)}var W=U.child;if(W!==null)W.return=U,oe=W;else for(;oe!==null;){U=oe;var I=U.sibling,se=U.return;if(mu(U),U===R){oe=null;break}if(I!==null){I.return=se,oe=I;break}oe=se}}}var ae=d.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var Oe=le.sibling;le.sibling=null,le=Oe}while(le!==null)}}oe=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,oe=h;else e:for(;oe!==null;){if(d=oe,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Xs(9,d,d.return)}var C=d.sibling;if(C!==null){C.return=d.return,oe=C;break e}oe=d.return}}var L=e.current;for(oe=L;oe!==null;){h=oe;var $=h.child;if((h.subtreeFlags&2064)!==0&&$!==null)$.return=h,oe=$;else e:for(h=L;oe!==null;){if(w=oe,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:la(9,w)}}catch(ie){Ve(w,w.return,ie)}if(w===h){oe=null;break e}var K=w.sibling;if(K!==null){K.return=w.return,oe=K;break e}oe=w.return}}if(Le=l,Mn(),P&&typeof P.onPostCommitFiberRoot=="function")try{P.onPostCommitFiberRoot(A,e)}catch{}r=!0}return r}finally{je=n,zt.transition=t}}return!1}function Mu(e,t,n){t=Br(n,t),t=Gd(e,t,1),e=$n(e,t,1),t=at(),e!==null&&(Es(e,1,t),ft(e,t))}function Ve(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Br(n,e),e=Kd(t,e,1),t=$n(t,e,1),e=at(),t!==null&&(Es(t,1,e),ft(t,e));break}}t=t.return}}function Bp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(qe&n)===n&&(Ue===4||Ue===3&&(qe&130023424)===qe&&500>Ne()-di?dr(e,0):ci|=n),ft(e,t)}function Nu(e,t){t===0&&((e.mode&1)===0?t=1:(t=rn,rn<<=1,(rn&130023424)===0&&(rn=4194304)));var n=at();e=cn(e,t),e!==null&&(Es(e,t,n),ft(e,n))}function Up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function Wp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Nu(e,n)}var $u;$u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ut=!1,$p(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,Te&&(t.flags&1048576)!==0&&pd(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oa(e,t),e=t.pendingProps;var l=Rr(t,Xe.current);Dr(t,n),l=Ol(null,t,r,e,l,n);var d=Dl();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(d=!0,Oo(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fl(t),l.updater=ra,t.stateNode=l,l._reactInternals=t,Ql(t,r,e,n),t=Jl(null,t,r,!0,d,n)):(t.tag=0,Te&&d&&Al(t),ot(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Qp(r),e=Vt(r,e),l){case 0:t=ql(null,t,r,e,n);break e;case 1:t=ou(null,t,r,e,n);break e;case 11:t=eu(null,t,r,e,n);break e;case 14:t=tu(null,t,r,Vt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Vt(r,l),ql(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Vt(r,l),ou(e,t,r,l,n);case 3:e:{if(au(t),e===null)throw Error(a(387));r=t.pendingProps,d=t.memoizedState,l=d.element,bd(e,t),Ko(t,r,null,n);var h=t.memoizedState;if(r=h.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=Br(Error(a(423)),t),t=lu(e,t,r,n,l);break e}else if(r!==l){l=Br(Error(a(424)),t),t=lu(e,t,r,n,l);break e}else for(yt=zn(t.stateNode.containerInfo.firstChild),xt=t,Te=!0,Zt=null,n=yd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===l){t=un(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return Ad(t),e===null&&Sl(t),r=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,h=l.children,xl(r,l)?h=null:d!==null&&xl(r,d)&&(t.flags|=32),su(e,t),ot(e,t,h,n),t.child;case 6:return e===null&&Sl(t),null;case 13:return iu(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Vt(r,l),eu(e,t,r,l,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,d=t.memoizedProps,h=l.value,Me(Yo,r._currentValue),r._currentValue=h,d!==null)if(Ht(d.value,h)){if(d.children===l.children&&!ct.current){t=un(e,t,n);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){h=d.child;for(var _=w.firstContext;_!==null;){if(_.context===r){if(d.tag===1){_=dn(-1,n&-n),_.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var U=R.pending;U===null?_.next=_:(_.next=U.next,U.next=_),R.pending=_}}d.lanes|=n,_=d.alternate,_!==null&&(_.lanes|=n),Nl(d.return,n,t),w.lanes|=n;break}_=_.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(a(341));h.lanes|=n,w=h.alternate,w!==null&&(w.lanes|=n),Nl(h,n,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}ot(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Dr(t,n),l=Et(l),r=r(l),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,l=Vt(r,t.pendingProps),l=Vt(r.type,l),tu(e,t,r,l,n);case 15:return nu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Vt(r,l),oa(e,t),t.tag=1,dt(r)?(e=!0,Oo(t)):e=!1,Dr(t,n),Yd(t,r,l),Ql(t,r,l,n),Jl(null,t,r,!0,e,n);case 19:return du(e,t,n);case 22:return ru(e,t,n)}throw Error(a(156,t.tag))};function Fu(e,t){return ks(e,t)}function Yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new Yp(e,t,n,r)}function xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qp(e){if(typeof e=="function")return xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Q)return 11;if(e===ve)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ga(e,t,n,r,l,d){var h=2;if(r=e,typeof e=="function")xi(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case B:return pr(n.children,l,d,t);case pe:h=8,l|=8;break;case ue:return e=jt(12,n,t,l|2),e.elementType=ue,e.lanes=d,e;case O:return e=jt(13,n,t,l),e.elementType=O,e.lanes=d,e;case X:return e=jt(19,n,t,l),e.elementType=X,e.lanes=d,e;case ce:return va(n,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:h=10;break e;case ge:h=9;break e;case Q:h=11;break e;case ve:h=14;break e;case ne:h=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=jt(h,n,t,l),t.elementType=e,t.type=r,t.lanes=d,t}function pr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function va(e,t,n,r){return e=jt(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function yi(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function wi(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function bi(e,t,n,r,l,d,h,w,_){return e=new Gp(e,t,n,w,_),t===1?(t=1,d===!0&&(t|=8)):t=0,d=jt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(d),e}function Kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tu(e){if(!e)return Cn;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(dt(n))return cd(e,n,t)}return t}function Ru(e,t,n,r,l,d,h,w,_){return e=bi(n,r,!0,e,l,d,h,w,_),e.context=Tu(null),n=e.current,r=at(),l=Pn(n),d=dn(r,l),d.callback=t??null,$n(n,d,l),e.current.lanes=l,Es(e,l,r),ft(e,r),e}function xa(e,t,n,r){var l=t.current,d=at(),h=Pn(l);return n=Tu(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(d,h),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(l,t,h),e!==null&&(It(e,l,h,d),Go(e,l,h)),h}function ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ki(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function qp(){return null}var Hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function _i(e){this._internalRoot=e}wa.prototype.render=_i.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));xa(e,t,null,null)},wa.prototype.unmount=_i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){xa(null,e,null,null)}),t[sn]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=bc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&Ac(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zu(){}function Jp(e,t,n,r,l){if(l){if(typeof r=="function"){var d=r;r=function(){var R=ya(h);d.call(R)}}var h=Ru(t,r,e,0,null,!1,!1,"",Zu);return e._reactRootContainer=h,e[sn]=h.current,Vs(e.nodeType===8?e.parentNode:e),cr(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var w=r;r=function(){var R=ya(_);w.call(R)}}var _=bi(e,0,!1,null,null,!1,!1,"",Zu);return e._reactRootContainer=_,e[sn]=_.current,Vs(e.nodeType===8?e.parentNode:e),cr(function(){xa(t,_,n,r)}),_}function ka(e,t,n,r,l){var d=n._reactRootContainer;if(d){var h=d;if(typeof l=="function"){var w=l;l=function(){var _=ya(h);w.call(_)}}xa(t,h,e,l)}else h=Jp(n,t,e,l,r);return ya(h)}yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&(Qa(t,n|1),ft(t,Ne()),(Le&6)===0&&(Yr=Ne()+500,Mn()))}break;case 13:cr(function(){var r=cn(e,1);if(r!==null){var l=at();It(r,e,1,l)}}),ki(e,1)}},Ga=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=at();It(t,e,134217728,n)}ki(e,134217728)}},wc=function(e){if(e.tag===13){var t=Pn(e),n=cn(e,t);if(n!==null){var r=at();It(n,e,t,r)}ki(e,t)}},bc=function(){return je},kc=function(e,t){var n=je;try{return je=e,t()}finally{je=n}},Ft=function(e,t,n){switch(t){case"input":if(Wt(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Zo(r);if(!l)throw Error(a(90));ho(r),Wt(r,l)}}}break;case"textarea":kt(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}},yo=mi,Kn=cr;var Xp={usingClientEntryPoint:!1,Events:[Is,Fr,Zo,xo,gs,mi]},ro={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ws(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{A=_a.inject(ef),P=_a}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp,ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(t))throw Error(a(200));return Kp(e,t,null,n)},ht.createRoot=function(e,t){if(!Ai(e))throw Error(a(299));var n=!1,r="",l=Hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=bi(e,1,!1,null,null,n,!1,r,l),e[sn]=t.current,Vs(e.nodeType===8?e.parentNode:e),new _i(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=ws(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return cr(e)},ht.hydrate=function(e,t,n){if(!ba(t))throw Error(a(200));return ka(null,e,t,!0,n)},ht.hydrateRoot=function(e,t,n){if(!Ai(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,l=!1,d="",h=Hu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),t=Ru(t,null,e,1,n??null,l,!1,d,h),e[sn]=t.current,Vs(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new wa(t)},ht.render=function(e,t,n){if(!ba(t))throw Error(a(200));return ka(null,e,t,!1,n)},ht.unmountComponentAtNode=function(e){if(!ba(e))throw Error(a(40));return e._reactRootContainer?(cr(function(){ka(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1},ht.unstable_batchedUpdates=mi,ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ba(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return ka(e,t,n,!1,r)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var Yu;function df(){if(Yu)return Si.exports;Yu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),Si.exports=cf(),Si.exports}var Qu;function uf(){if(Qu)return Aa;Qu=1;var s=df();return Aa.createRoot=s.createRoot,Aa.hydrateRoot=s.hydrateRoot,Aa}var pf=uf();const ff=nf(pf),hf="modulepreload",mf=function(s,o){return new URL(s,o).href},Gu={},Gr=function(o,a,c){let p=Promise.resolve();if(a&&a.length>0){let m=function(k){return Promise.all(k.map(y=>Promise.resolve(y).then(z=>({status:"fulfilled",value:z}),z=>({status:"rejected",reason:z}))))};const g=document.getElementsByTagName("link"),v=document.querySelector("meta[property=csp-nonce]"),b=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));p=m(a.map(k=>{if(k=mf(k,c),k in Gu)return;Gu[k]=!0;const y=k.endsWith(".css"),z=y?'[rel="stylesheet"]':"";if(!!c)for(let N=g.length-1;N>=0;N--){const Z=g[N];if(Z.href===k&&(!y||Z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${k}"]${z}`))return;const F=document.createElement("link");if(F.rel=y?"stylesheet":hf,y||(F.as="script"),F.crossOrigin="",F.href=k,b&&F.setAttribute("nonce",b),document.head.appendChild(F),y)return new Promise((N,Z)=>{F.addEventListener("load",N),F.addEventListener("error",()=>Z(new Error(`Unable to preload CSS for ${k}`)))})}))}function f(m){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=m,window.dispatchEvent(g),!g.defaultPrevented)throw m}return p.then(m=>{for(const g of m||[])g.status==="rejected"&&f(g.reason);return o().catch(f)})},Wi={toggle:()=>Gr(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>Gr(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>Gr(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>Gr(()=>import("./press-h_enDfSn.js"),[],import.meta.url),slide:()=>Gr(()=>import("./slide-CxPKTNuS.js"),[],import.meta.url),reveal:()=>Gr(()=>import("./reveal-DJs7Ppoh.js"),[],import.meta.url)};let ts=null,Ku=!1;const F0=new Set,$a=new Map,La=new Map;function rc(){if(ts)return ts;const s=window.AudioContext||window.webkitAudioContext;return s?(ts=new s,ts):null}function sc(s){if($a.has(s))return Promise.resolve($a.get(s));if(La.has(s))return La.get(s);const o=rc();if(!o||!Wi[s])return Promise.resolve(null);const a=Wi[s]().then(c=>fetch(c.default)).then(c=>c.arrayBuffer()).then(c=>o.decodeAudioData(c)).then(c=>($a.set(s,c),c)).catch(()=>null).finally(()=>La.delete(s));return La.set(s,a),a}function gf(){const s=rc();s&&(s.state==="suspended"&&s.resume(),F0.forEach(sc))}function vf(s){if(typeof window>"u"||!Wi[s])return;if(F0.add(s),ts&&ts.state!=="suspended"){sc(s);return}if(Ku)return;Ku=!0;const o={capture:!0,passive:!0},a=()=>{window.removeEventListener("pointerdown",a,o),window.removeEventListener("keydown",a,o),gf()};window.addEventListener("pointerdown",a,o),window.addEventListener("keydown",a,o)}const xf=120;function yf(s,o=1){if(typeof window>"u"||o<=0)return;const a=rc();if(!a)return;a.state==="suspended"&&a.resume();const c=$a.get(s);if(!c){const p=performance.now();sc(s).then(f=>{f&&performance.now()-p<=xf&&qu(a,f,o)});return}qu(a,c,o)}function qu(s,o,a){const c=s.createBufferSource(),p=s.createGain();p.gain.value=Math.min(1,a),c.buffer=o,c.connect(p).connect(s.destination),c.start()}const T0=.7,R0=i.createContext({enabled:!0,volume:T0});function wf({enabled:s=!0,volume:o=T0,children:a}){return u.jsx(R0.Provider,{value:{enabled:s,volume:o},children:a})}function is(s,o=!0){const{enabled:a,volume:c}=i.useContext(R0),p=a&&o;return i.useEffect(()=>{p&&vf(s)},[s,p]),i.useCallback(()=>{p&&yf(s,c)},[s,p,c])}const bf=`/* ============================================================
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
  --sc-p-size-measure-1082: 1082px;
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
  --sc-color-avatar-ground: var(--sc-p-color-warm-gray-200);
  --sc-color-toast-surface: var(--sc-color-surface-raised);
  --sc-color-toast-text: var(--sc-color-text-primary);
  --sc-color-toast-badge-success: var(--sc-color-status-success);
  --sc-color-toast-badge-error: var(--sc-color-status-error);
  --sc-color-toast-badge-warning: var(--sc-color-status-warning);
  --sc-color-toast-badge-info: var(--sc-color-status-info);
  --sc-color-toast-icon: var(--sc-p-color-warm-gray-50);
  --sc-color-toast-glass: var(--sc-color-card-glass-frosted-auto);
  --sc-color-toast-dismiss-surface: var(--sc-color-surface-raised);
  --sc-color-toast-dismiss-hover: var(--sc-color-toast-dismiss-ink);
  --sc-color-toast-dismiss-ink-hover: var(--sc-color-toast-dismiss-surface);
  --sc-color-toast-dismiss-ink: var(--sc-color-brand-accent);
  --sc-color-toast-dismiss-ink-disabled: var(--sc-color-text-disabled);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-toast-plate: var(--sc-radius-pill);
  --sc-radius-toast-badge: var(--sc-radius-pill);
  --sc-radius-toast-dismiss: var(--sc-radius-pill);
  --sc-radius-avatar: var(--sc-radius-pill);
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
  --sc-shadow-toast-plate: 2px 2px 6px 0 rgb(100 91 79 / 0.50);
  --sc-shadow-toast-glass: var(--sc-shadow-card-glass-frosted);
  --sc-shadow-toast-glass-text: var(--sc-shadow-card-glass-text-auto);
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
  --sc-motion-toast-travel-duration: var(--sc-motion-reveal-duration);
  --sc-motion-toast-travel-easing: var(--sc-motion-reveal-easing);
  --sc-motion-toast-hold: 6000ms;
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
  --sc-font-text-toast-message-family: var(--sc-font-text-body-dense-family);
  --sc-font-text-toast-message-size: var(--sc-font-text-body-dense-size);
  --sc-font-text-toast-message-weight: var(--sc-font-text-body-dense-weight);
  --sc-font-text-toast-message-line-height: var(--sc-font-text-body-dense-line-height);
  --sc-font-text-toast-message-letter-spacing: var(--sc-font-text-body-dense-letter-spacing);
  --sc-font-text-toast-message: var(--sc-font-text-body-dense);
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
  --sc-size-toast-width: 380px;
  --sc-size-toast-badge: 50px;
  --sc-size-toast-icon: var(--sc-p-space-20);
  --sc-size-toast-dismiss: var(--sc-p-space-32);
  --sc-size-toast-dismiss-icon: var(--sc-size-icon-sm);
  --sc-size-toast-dismiss-slop: var(--sc-p-space-micro-6);
  --sc-size-toast-lift: var(--sc-p-space-8);
  --sc-size-toast-lines: 2;
  --sc-size-toast-dismiss-offset-block: var(--sc-p-space-micro-18);
  --sc-size-toast-dismiss-offset-inline: var(--sc-p-space-20);
  --sc-size-toast-glass-frost: var(--sc-size-card-glass-frosted-frost);
  --sc-size-toast-glass-saturation: var(--sc-size-card-glass-frosted-saturation);
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
  --sc-space-component-padding-inline-toast-start: var(--sc-space-layout-inset-sm);
  --sc-space-component-padding-inline-toast-end: var(--sc-space-layout-inset-lg);
  --sc-space-component-padding-inline-status-pill: var(--sc-p-space-12);
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-padding-block-tooltip: var(--sc-p-space-8);
  --sc-space-component-padding-block-toast: var(--sc-space-layout-inset-sm);
  --sc-space-component-padding-block-status-pill: var(--sc-p-space-4);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-component-gap-tooltip: var(--sc-p-space-24);
  --sc-space-component-gap-status-pill: var(--sc-p-space-micro-6);
  --sc-space-component-gap-toast: var(--sc-p-space-12);
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
  --sc-color-avatar-ground: var(--sc-p-color-dark-well);
  --sc-color-toast-surface: var(--sc-color-surface-raised);
  --sc-color-toast-text: var(--sc-color-text-primary);
  --sc-color-toast-badge-success: var(--sc-color-status-success);
  --sc-color-toast-badge-error: var(--sc-color-status-error);
  --sc-color-toast-badge-warning: var(--sc-color-status-warning);
  --sc-color-toast-badge-info: var(--sc-color-status-info);
  --sc-color-toast-icon: var(--sc-p-color-dark-well);
  --sc-color-toast-glass: var(--sc-color-card-glass-frosted-auto);
  --sc-color-toast-dismiss-surface: var(--sc-color-surface-raised);
  --sc-color-toast-dismiss-hover: var(--sc-color-toast-dismiss-ink);
  --sc-color-toast-dismiss-ink-hover: var(--sc-color-toast-dismiss-surface);
  --sc-color-toast-dismiss-ink: var(--sc-p-color-teal-200);
  --sc-color-toast-dismiss-ink-disabled: var(--sc-color-text-disabled);
  --sc-border-width-default: var(--sc-p-border-width-hairline);
  --sc-border-width-focus: var(--sc-p-border-width-focus);
  --sc-border-width-accent: var(--sc-p-border-width-accent);
  --sc-border-focus-offset: var(--sc-p-space-micro-2);
  --sc-radius-field: var(--sc-p-radius-default);
  --sc-radius-card: var(--sc-radius-surface);
  --sc-radius-toast-plate: var(--sc-radius-pill);
  --sc-radius-toast-badge: var(--sc-radius-pill);
  --sc-radius-toast-dismiss: var(--sc-radius-pill);
  --sc-radius-avatar: var(--sc-radius-pill);
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
  --sc-shadow-toast-plate: 3px 3px 7px 0 rgb(0 0 0 / 0.50);
  --sc-shadow-toast-glass: var(--sc-shadow-card-glass-frosted);
  --sc-shadow-toast-glass-text: var(--sc-shadow-card-glass-text-auto);
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
  --sc-motion-toast-travel-duration: var(--sc-motion-reveal-duration);
  --sc-motion-toast-travel-easing: var(--sc-motion-reveal-easing);
  --sc-motion-toast-hold: 6000ms;
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
  --sc-font-text-toast-message-family: var(--sc-font-text-body-dense-family);
  --sc-font-text-toast-message-size: var(--sc-font-text-body-dense-size);
  --sc-font-text-toast-message-weight: var(--sc-font-text-body-dense-weight);
  --sc-font-text-toast-message-line-height: var(--sc-font-text-body-dense-line-height);
  --sc-font-text-toast-message-letter-spacing: var(--sc-font-text-body-dense-letter-spacing);
  --sc-font-text-toast-message: var(--sc-font-text-body-dense);
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
  --sc-size-toast-width: 380px;
  --sc-size-toast-badge: 50px;
  --sc-size-toast-icon: var(--sc-p-space-20);
  --sc-size-toast-dismiss: var(--sc-p-space-32);
  --sc-size-toast-dismiss-icon: var(--sc-size-icon-sm);
  --sc-size-toast-dismiss-slop: var(--sc-p-space-micro-6);
  --sc-size-toast-lift: var(--sc-p-space-8);
  --sc-size-toast-lines: 2;
  --sc-size-toast-dismiss-offset-block: var(--sc-p-space-micro-18);
  --sc-size-toast-dismiss-offset-inline: var(--sc-p-space-20);
  --sc-size-toast-glass-frost: var(--sc-size-card-glass-frosted-frost);
  --sc-size-toast-glass-saturation: var(--sc-size-card-glass-frosted-saturation);
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
  --sc-space-component-padding-inline-toast-start: var(--sc-space-layout-inset-sm);
  --sc-space-component-padding-inline-toast-end: var(--sc-space-layout-inset-lg);
  --sc-space-component-padding-inline-status-pill: var(--sc-p-space-12);
  --sc-space-component-padding-block-sm: var(--sc-p-space-micro-2);
  --sc-space-component-padding-block-md: var(--sc-p-space-8);
  --sc-space-component-padding-block-lg: var(--sc-p-space-12);
  --sc-space-component-padding-block-button-sm: var(--sc-p-space-4);
  --sc-space-component-padding-block-input: var(--sc-p-space-12);
  --sc-space-component-padding-block-tooltip: var(--sc-p-space-8);
  --sc-space-component-padding-block-toast: var(--sc-space-layout-inset-sm);
  --sc-space-component-padding-block-status-pill: var(--sc-p-space-4);
  --sc-space-component-gap-sm: var(--sc-p-space-4);
  --sc-space-component-gap-md: var(--sc-p-space-8);
  --sc-space-component-gap-lg: var(--sc-p-space-12);
  --sc-space-component-gap-stepper: var(--sc-p-space-8);
  --sc-space-component-gap-input: var(--sc-p-space-4);
  --sc-space-component-gap-input-inline: var(--sc-p-space-16);
  --sc-space-component-gap-tooltip: var(--sc-p-space-24);
  --sc-space-component-gap-status-pill: var(--sc-p-space-micro-6);
  --sc-space-component-gap-toast: var(--sc-p-space-12);
  --sc-space-layout-stack-sm: var(--sc-p-space-16);
  --sc-space-layout-stack-md: var(--sc-p-space-24);
  --sc-space-layout-stack-lg: var(--sc-p-space-48);
  --sc-space-layout-stack-xl: var(--sc-p-space-80);
  --sc-space-layout-inset-sm: var(--sc-p-space-16);
  --sc-space-layout-inset-md: var(--sc-p-space-24);
  --sc-space-layout-inset-lg: var(--sc-p-space-48);
}
`,Ju=5e-4,kf=6e3,Xu=60;function _f({stiffness:s,damping:o,mass:a}){let c=0,p=0;const f=.001,m=[0];let g=0,v=0;for(;g<kf;){const b=(-s*(c-1)-o*p)/a;if(p+=b*f,c+=p*f,g+=1,m.push(c),c>v&&(v=c),Math.abs(c-1)<Ju&&Math.abs(p)<Ju)break}return{trace:m,settleMs:g,overshoot:Math.max(0,v-1)}}function po(s){const{trace:o,settleMs:a,overshoot:c}=_f(s),p=[];for(let f=0;f<Xu;f+=1){const m=Math.round(f/(Xu-1)*(o.length-1));p.push(+o[m].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:a,overshoot:c}}const Ea=60,e0={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function Af([s,o,a,c],p){const f=(v,b,k)=>3*(1-k)**2*k*v+3*(1-k)*k**2*b+k**3;let m=0,g=1;for(let v=0;v<40;v+=1){const b=(m+g)/2;f(s,a,b)<p?m=b:g=b}return f(o,c,(m+g)/2)}function Lf(s){const o=[];for(const a of s.split(",")){const[c,...p]=a.trim().split(/\s+/);p.length||o.push({v:+c,x:null});for(const f of p)o.push({v:+c,x:parseFloat(f)/100})}o[0].x===null&&(o[0].x=0),o.at(-1).x===null&&(o.at(-1).x=1);for(let a=1;a<o.length;a+=1){if(o[a].x!==null){o[a].x=Math.max(o[a].x,o[a-1].x);continue}let c=a;for(;o[c].x===null;)c+=1;const p=(o[c].x-o[a-1].x)/(c-a+1);for(let f=a;f<c;f+=1)o[f].x=o[f-1].x+p}return o}function Ef(s,o){for(let a=1;a<s.length;a+=1)if(o<=s[a].x){const c=s[a-1],p=s[a],f=p.x-c.x;return f?c.v+(o-c.x)/f*(p.v-c.v):p.v}return s.at(-1).v}function oc(s){var p;const o=(s||"ease").trim(),a=o.match(/^linear\((.+)\)$/);if(a){const f=Lf(a[1]);return Array.from({length:Ea},(m,g)=>Ef(f,g/(Ea-1)))}const c=((p=o.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||e0[o]||e0.ease;return Array.from({length:Ea},(f,m)=>Af(c,m/(Ea-1)))}function ac(s){const o=s.map((c,p)=>Math.abs(s[Math.min(p+1,s.length-1)]-s[Math.max(p-1,0)]));o[0]=0,o[o.length-1]=0;const a=Math.max(...o)||1;return o.map(c=>c/a)}const Sf=s=>(s.endsWith("ms")?parseFloat(s):parseFloat(s)*1e3)||0;function zf(s){const o=[];let a=0,c="";for(const p of s)p==="("&&(a+=1),p===")"&&(a-=1),p===","&&a===0?(o.push(c.trim()),c=""):c+=p;return o.push(c.trim()),o}function Un(s,o){const a=`--sc-motion-${o}`,c=getComputedStyle(s),p=y=>parseFloat(c.getPropertyValue(y))||0,f=document.createElement("span");f.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${a}-travel-duration),var(${a}-press-lean-duration,0ms);transition-timing-function:var(${a}-travel-easing),var(--sc-motion-press-easing);`,s.appendChild(f);const m=getComputedStyle(f),[g,v]=m.transitionDuration.split(",").map(y=>Sf(y.trim())),[b,k]=zf(m.transitionTimingFunction);return f.remove(),{travelDur:g,travelEasing:b,leanDur:v,leanEasing:k,stretch:p(`${a}-stretch`),squash:p(`${a}-squash`),lean:p(`${a}-press-lean`)}}const xr=s=>!!s&&(s.stretch>0||s.squash>0||s.lean>0),yr=()=>{var s;return typeof window<"u"&&!!((s=window.matchMedia)!=null&&s.call(window,"(prefers-reduced-motion: reduce)").matches)};function wr({l:s,r:o,h:a},c,p=!0){return{transform:`translate(${s}px, ${p?(c-a)/2:0}px)`,width:`${o-s}px`,height:`${a}px`}}function as(s,o,a,c,p=!0){const f=oc(s.travelEasing),m=ac(f);return f.map((g,v)=>{const b=s.stretch*c*m[v],k=o.l+(a.l-o.l)*g-b/2,y=o.r+(a.r-o.r)*g+b/2;return wr({l:k,r:y,h:c*(1-s.squash*m[v])},c,p)})}function lc(s,o,a){const c=Math.sign(a.l+a.r-(o.l+o.r)),p=s.lean*.25*Math.abs((a.l+a.r-(o.l+o.r))/2);return c>0?{...o,r:o.r+p}:c<0?{...o,l:o.l-p}:o}function ns(s,o,a,c,{hold:p=!1,onDone:f}={}){s.getAnimations().forEach(g=>g.cancel());const m=s.animate(o,{duration:a,easing:c,fill:"forwards"});return p||(m.onfinish=()=>{m.cancel(),f==null||f()}),m}function Ut(s){const o=s.getBoundingClientRect(),a=s.currentCSSZoom||1;return{left:o.left/a,right:o.right/a,width:o.width/a,top:o.top/a,height:o.height/a}}function ic(s,o){const a=Ut(s);return{l:a.left-o.left,r:a.right-o.left}}function jf(s,o){const a=Un(s,"switch"),c=getComputedStyle(s),p=parseFloat(c.width),f=parseFloat(c.height),m=parseFloat(getComputedStyle(o).height),g=(f-m)/2;return{...a,knob:m,travel:p-m-2*g}}const co=(s,o)=>({l:o?s.travel:0,r:(o?s.travel:0)+s.knob}),Cf=(s,o)=>lc(s,co(s,o),co(s,!o)),Mf=(s,o,a)=>as(s,o,a,s.knob,!1),Nf=(s,o,a)=>[wr({...o,h:s.knob},s.knob,!1),wr({...a,h:s.knob},s.knob,!1)],$f="_field_tf6ns_39",Ff="_disabled_tf6ns_49",Tf="_controlWrapper_tf6ns_53",Rf="_input_tf6ns_59",Pf="_track_tf6ns_69",Hf="_glyphs_tf6ns_84",Zf="_glyphOn_tf6ns_99",Vf="_glyphOff_tf6ns_105",Of="_thumb_tf6ns_115",Df="_label_tf6ns_190",Jt={field:$f,disabled:Ff,controlWrapper:Tf,input:Rf,track:Pf,glyphs:Hf,glyphOn:Zf,glyphOff:Vf,thumb:Of,label:Df};function If({checked:s=!1,disabled:o=!1,onChange:a,label:c,sound:p=!0,glyphs:f=!0,className:m=""}){const g=i.useId(),v=is("toggle",p),b=i.useRef(null),k=i.useRef(null),y=i.useRef(null),z=i.useRef(null),M=i.useRef(null),F=i.useRef(!1),N=()=>{if(o||yr()||!k.current||!y.current)return null;const Y=jf(k.current,y.current);return xr(Y)?Y:null},Z=()=>{var Y,B;(Y=z.current)==null||Y.cancel(),z.current=null,M.current=null,(B=k.current)==null||B.removeAttribute("data-driven")},V=(Y,B,pe,ue)=>{var ge;(ge=z.current)==null||ge.cancel(),k.current.setAttribute("data-driven","");const ye=y.current.animate(Y,{duration:B,easing:pe,fill:"forwards"});z.current=ye,ue||(ye.onfinish=()=>{z.current===ye&&Z()})},H=(Y,B,pe)=>V(Mf(Y,B,co(Y,pe)),Y.travelDur,"linear",!1),D=()=>{const Y=N();if(!Y||Y.lean<=0)return;const B=b.current.checked,pe=M.current||co(Y,B);M.current=Cf(Y,B),F.current=!1,V(Nf(Y,pe,M.current),Y.leanDur,Y.leanEasing,!0)},q=()=>{if(!M.current)return;const Y=N();if(!Y){Z();return}const B=M.current;M.current=null,H(Y,B,b.current.checked)},re=()=>setTimeout(()=>{F.current||q()},0);return u.jsxs("label",{htmlFor:g,className:`${Jt.field} ${o?Jt.disabled:""} ${m}`,onPointerDown:D,onPointerUp:re,onPointerLeave:q,onPointerCancel:q,children:[u.jsxs("span",{className:Jt.controlWrapper,children:[u.jsx("input",{ref:b,id:g,type:"checkbox",role:"switch",className:Jt.input,checked:s,disabled:o,onChange:Y=>{v(),F.current=!0;const B=N();if(B){const pe=M.current||co(B,!Y.target.checked);M.current=null,H(B,pe,Y.target.checked)}else Z();a==null||a(Y)}}),u.jsxs("span",{ref:k,className:Jt.track,"aria-hidden":"true",children:[f&&u.jsxs("span",{className:Jt.glyphs,children:[u.jsx("span",{className:Jt.glyphOn}),u.jsx("span",{className:Jt.glyphOff})]}),u.jsx("span",{ref:y,className:Jt.thumb})]})]}),c&&u.jsx("span",{className:Jt.label,children:c})]})}const Bf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,44H32A20,20,0,0,0,12,64V88a20,20,0,0,0,16,19.6V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V107.6A20,20,0,0,0,244,88V64A20,20,0,0,0,224,44ZM36,68H220V84H36ZM52,188V108H204v80Zm112-52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,136Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z",opacity:"0.2"}),i.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224V88Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,50H32A14,14,0,0,0,18,64V88a14,14,0,0,0,14,14h2v90a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V102h2a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM210,192a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V102H210ZM226,88a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM98,136a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,52H32A12,12,0,0,0,20,64V88a12,12,0,0,0,12,12h4v92a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V100h4a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM212,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V100H212ZM228,88a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM100,136a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,136Z"}))]]),Uf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),i.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Wf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),i.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),Yf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),i.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),Qf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),i.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),Gf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),i.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),Kf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.38,38.05A12,12,0,0,1,101,23.42a108,108,0,0,1,54,0,12,12,0,1,1-6,23.23,84.11,84.11,0,0,0-42,0A12,12,0,0,1,92.38,38.05ZM50.94,52.34a108.1,108.1,0,0,0-27,46.76,12,12,0,0,0,8.37,14.77,12.2,12.2,0,0,0,3.2.43,12,12,0,0,0,11.56-8.8,84,84,0,0,1,21-36.35A12,12,0,1,0,50.94,52.34Zm-3.88,98.14a12,12,0,0,0-23.12,6.42,108,108,0,0,0,27,46.78A12,12,0,0,0,68,186.85,84,84,0,0,1,47.06,150.48ZM149,209.35a84,84,0,0,1-42,0,12,12,0,1,0-6,23.23,108,108,0,0,0,54,0,12,12,0,1,0-6-23.23Zm74.72-67.22A12,12,0,0,0,209,150.5a84,84,0,0,1-21,36.35,12,12,0,0,0,17.12,16.82,108.19,108.19,0,0,0,27-46.77A12,12,0,0,0,223.71,142.13Zm-14.77-36.61a12,12,0,0,0,23.12-6.42,108,108,0,0,0-27-46.78A12,12,0,1,0,188,69.15,84,84,0,0,1,208.94,105.52Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),i.createElement("path",{d:"M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88.09,88.09,0,0,0-44,0A8,8,0,0,1,96.26,37ZM53.79,55.14a104,104,0,0,0-26,45,8,8,0,1,0,15.42,4.26,87.91,87.91,0,0,1,22-38.08A8,8,0,0,0,53.79,55.14ZM43.21,151.55a8,8,0,1,0-15.42,4.28,104,104,0,0,0,26,45,8,8,0,1,0,11.41-11.21A88.14,88.14,0,0,1,43.21,151.55ZM150,213.22a88,88,0,0,1-44,0,8,8,0,1,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49ZM222.65,146a8,8,0,0,0-9.85,5.57,87.88,87.88,0,0,1-22,38.09,8,8,0,1,0,11.42,11.21,104.05,104.05,0,0,0,26-45A8,8,0,0,0,222.65,146Zm-9.86-41.54a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.21A88.14,88.14,0,0,1,212.79,104.45Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm54.59,45a8,8,0,0,1,11.29.7,88,88,0,0,1,17.6,30.47,8,8,0,0,1-15.18,5.08,71.87,71.87,0,0,0-14.4-25A8,8,0,0,1,182.59,69ZM73.41,187.05a8,8,0,0,1-11.29-.7,88,88,0,0,1-17.6-30.47A8,8,0,1,1,59.7,150.8a71.87,71.87,0,0,0,14.4,24.95A8,8,0,0,1,73.41,187.05Zm.69-106.8a71.87,71.87,0,0,0-14.4,25,8,8,0,1,1-15.18-5.08,88,88,0,0,1,17.6-30.47,8,8,0,1,1,12,10.6Zm71.49,134a87.8,87.8,0,0,1-35.18,0,8,8,0,0,1,3.18-15.68,72.08,72.08,0,0,0,28.82,0,8,8,0,0,1,3.18,15.68Zm6.25-163A8,8,0,0,1,144,57.61a7.89,7.89,0,0,1-1.6-.16,72.08,72.08,0,0,0-28.82,0,8,8,0,1,1-3.18-15.68,87.92,87.92,0,0,1,35.18,0A8,8,0,0,1,151.84,51.2Zm59.64,104.68a88,88,0,0,1-17.6,30.47,8,8,0,1,1-12-10.6,71.87,71.87,0,0,0,14.4-24.95,8,8,0,0,1,15.18,5.08Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M98.19,36.54a6,6,0,0,1,4.3-7.31,102.12,102.12,0,0,1,51,0,6,6,0,0,1-3,11.62,90,90,0,0,0-45,0A6,6,0,0,1,98.19,36.54Zm-43,20A102.07,102.07,0,0,0,29.7,100.7a6,6,0,0,0,4.19,7.38,5.88,5.88,0,0,0,1.6.22,6,6,0,0,0,5.78-4.4A90,90,0,0,1,63.78,65a6,6,0,1,0-8.56-8.41ZM41.28,152.09a6,6,0,1,0-11.56,3.2,102,102,0,0,0,25.49,44.18,6,6,0,0,0,8.55-8.41A90.11,90.11,0,0,1,41.28,152.09Zm109.21,63.06a90,90,0,0,1-45,0,6,6,0,1,0-3,11.62,102.16,102.16,0,0,0,51,0,6,6,0,0,0-3-11.62Zm71.62-67.23a6,6,0,0,0-7.38,4.18,90,90,0,0,1-22.51,39,6,6,0,1,0,8.56,8.41A102.12,102.12,0,0,0,226.3,155.3,6,6,0,0,0,222.11,147.92Zm-7.39-44a6,6,0,0,0,5.78,4.4,5.88,5.88,0,0,0,1.6-.22,6,6,0,0,0,4.18-7.38,102,102,0,0,0-25.49-44.18,6,6,0,0,0-8.55,8.41A90.05,90.05,0,0,1,214.72,103.91Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M96.26,37.05A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88.09,88.09,0,0,0-44,0A8,8,0,0,1,96.26,37.05ZM53.79,55.14a104.05,104.05,0,0,0-26,45,8,8,0,0,0,15.42,4.27,88,88,0,0,1,22-38.09A8,8,0,0,0,53.79,55.14ZM43.21,151.55a8,8,0,1,0-15.42,4.28,104.12,104.12,0,0,0,26,45,8,8,0,0,0,11.41-11.22A88.14,88.14,0,0,1,43.21,151.55ZM150,213.22a88,88,0,0,1-44,0,8,8,0,1,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49ZM222.65,146a8,8,0,0,0-9.85,5.58,87.91,87.91,0,0,1-22,38.08,8,8,0,1,0,11.42,11.21,104,104,0,0,0,26-45A8,8,0,0,0,222.65,146Zm-9.86-41.54a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.22A88,88,0,0,1,212.79,104.45Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M155.87,36.06a4,4,0,0,1-3.87,3,4.29,4.29,0,0,1-1-.13,92,92,0,0,0-46,0,4,4,0,0,1-2-7.74,100.09,100.09,0,0,1,50,0A4,4,0,0,1,155.87,36.06ZM56.65,57.94a100.18,100.18,0,0,0-25,43.29,4,4,0,0,0,7.71,2.14,92.06,92.06,0,0,1,23-39.82,4,4,0,1,0-5.7-5.61ZM39.36,152.62a4,4,0,0,0-7.71,2.14,100.08,100.08,0,0,0,25,43.31,4,4,0,1,0,5.71-5.61A91.91,91.91,0,0,1,39.36,152.62ZM151,217.09a92,92,0,0,1-46,0,4,4,0,0,0-2,7.75,100,100,0,0,0,50,0,4,4,0,1,0-2-7.74Zm70.58-67.25a4,4,0,0,0-4.92,2.79,92.12,92.12,0,0,1-23,39.82,4,4,0,1,0,5.7,5.61,100.18,100.18,0,0,0,25-43.29A4,4,0,0,0,221.58,149.84Zm-4.94-46.46a4,4,0,0,0,7.71-2.14,100.08,100.08,0,0,0-25-43.31,4,4,0,1,0-5.71,5.61A91.91,91.91,0,0,1,216.64,103.38Z"}))]]),qf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),Jf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),i.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),Xf=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),i.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),eh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),i.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),th=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),i.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z"}))]]),nh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),i.createElement("path",{d:"M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),rh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),i.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),sh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),i.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),oh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),i.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),ah=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",opacity:"0.2"}),i.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"}))]]),lh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),i.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),ih=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",opacity:"0.2"}),i.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"}))]]),ch=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),i.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),dh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",opacity:"0.2"}),i.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"}))]]),uh=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z",opacity:"0.2"}),i.createElement("path",{d:"M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0ZM228,91.55v72.9a12,12,0,0,1-3.51,8.49l-51.55,51.55a12,12,0,0,1-8.49,3.51H91.55a12,12,0,0,1-8.49-3.51L31.51,172.94A12,12,0,0,1,28,164.45V91.55a12,12,0,0,1,3.51-8.49L83.06,31.51A12,12,0,0,1,91.55,28h72.9a12,12,0,0,1,8.49,3.51l51.55,51.55A12,12,0,0,1,228,91.55Zm-8,0a4,4,0,0,0-1.17-2.83L167.28,37.17A4.06,4.06,0,0,0,164.45,36H91.55a4.06,4.06,0,0,0-2.83,1.17L37.17,88.72A4,4,0,0,0,36,91.55v72.9a4,4,0,0,0,1.17,2.83l51.55,51.55A4.06,4.06,0,0,0,91.55,220h72.9a4.06,4.06,0,0,0,2.83-1.17l51.55-51.55a4,4,0,0,0,1.17-2.83ZM128,164a8,8,0,1,0,8,8A8,8,0,0,0,128,164Z"}))]]),ph=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),i.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),fh=i.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Re=i.forwardRef((s,o)=>{const{alt:a,color:c,size:p,weight:f,mirrored:m,children:g,weights:v,...b}=s,{color:k="currentColor",size:y,weight:z="regular",mirrored:M=!1,...F}=i.useContext(fh);return i.createElement("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",width:p??y,height:p??y,fill:c??k,viewBox:"0 0 256 256",transform:m||M?"scale(-1, 1)":void 0,...F,...b},!!a&&i.createElement("title",null,a),g,v.get(f??z))});Re.displayName="IconBase";const P0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Bf}));P0.displayName="ArchiveIcon";const hh=P0,H0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Uf}));H0.displayName="ArrowRightIcon";const mh=H0,Z0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Wf}));Z0.displayName="CalendarBlankIcon";const gh=Z0,V0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Yf}));V0.displayName="CaretDownIcon";const vh=V0,O0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Qf}));O0.displayName="CheckIcon";const cc=O0,D0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Gf}));D0.displayName="CheckCircleIcon";const xh=D0,I0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Kf}));I0.displayName="CircleDashedIcon";const yh=I0,B0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:qf}));B0.displayName="ClockIcon";const wh=B0,U0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Jf}));U0.displayName="CopyIcon";const bh=U0,W0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:Xf}));W0.displayName="EnvelopeSimpleIcon";const kh=W0,Y0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:eh}));Y0.displayName="EyeIcon";const _h=Y0,Q0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:th}));Q0.displayName="GearIcon";const Ah=Q0,G0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:nh}));G0.displayName="InfoIcon";const Lh=G0,K0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:rh}));K0.displayName="MagnifyingGlassIcon";const Eh=K0,q0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:sh}));q0.displayName="MapPinIcon";const Sh=q0,J0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:oh}));J0.displayName="MinusIcon";const zh=J0,X0=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:ah}));X0.displayName="PauseIcon";const jh=X0,e1=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:lh}));e1.displayName="PlusIcon";const Ch=e1,t1=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:ih}));t1.displayName="SparkleIcon";const Mh=t1,n1=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:ch}));n1.displayName="UserIcon";const Nh=n1,r1=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:dh}));r1.displayName="WarningIcon";const s1=r1,o1=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:uh}));o1.displayName="WarningOctagonIcon";const $h=o1,a1=i.forwardRef((s,o)=>i.createElement(Re,{ref:o,...s,weights:ph}));a1.displayName="XIcon";const l1=a1,Fh="_icon_1vxzc_2",Th={icon:Fh},Rh={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Fa({glyph:s,weight:o="regular",size:a="1em",label:c,className:p="",...f}){if(!s)return null;const m=c?{"aria-label":c,role:"img"}:{"aria-hidden":!0},g=Rh[a];return g?u.jsx("span",{className:`${Th.icon} ${p}`.trim(),style:{fontSize:g},children:u.jsx(s,{weight:o,size:"1em",...m,...f})}):u.jsx(s,{weight:o,size:a,className:p,...m,...f})}const Ph="_stepper_1wvfb_28",Hh="_button_1wvfb_38",Zh="_glyph_1wvfb_79",Vh="_readout_1wvfb_101",Oh="_digits_1wvfb_123",Dh="_disabled_1wvfb_134",On={stepper:Ph,button:Hh,glyph:Zh,readout:Vh,digits:Oh,disabled:Dh},Ih=400,Bh=80;function Uh({value:s,onChange:o,min:a=-1/0,max:c=1/0,step:p=1,label:f,disabled:m=!1,sound:g=!0,className:v=""}){const b=is("tick",g),k=i.useRef(s);k.current=s;const y=i.useRef(null),z=i.useRef(null),M=B=>Math.max(a,Math.min(c,B)),F=B=>{const pe=M(k.current+B);pe!==k.current&&(k.current=pe,o==null||o(pe),b())},N=()=>{y.current&&clearTimeout(y.current),z.current&&clearInterval(z.current),y.current=null,z.current=null};i.useEffect(()=>N,[]);const Z=i.useRef(null),V=i.useRef(null),H=i.useRef(s);i.useLayoutEffect(()=>{const B=H.current;H.current=s;const pe=Z.current,ue=V.current;if(B===s||m||!pe||!ue||yr())return;const ye=Un(pe,"stepper"),ge=parseFloat(getComputedStyle(pe).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ge>0||xr(ye)))return;const Q=(s>B?1:-1)*ge*Ut(pe).height,O=oc(ye.travelEasing),X=ac(O),ve=O.map((ne,ce)=>({transform:`translateY(${Q*(1-ne)}px) scale(${1-.2*ye.squash*X[ce]}, ${1+.2*ye.stretch*X[ce]})`}));ns(ue,ve,ye.travelDur,"linear")},[s,m]);const D=B=>{m||(F(B),N(),y.current=setTimeout(()=>{z.current=setInterval(()=>F(B),Bh)},Ih))},q=s<=a,re=s>=c,Y=B=>{m||(B.key==="ArrowUp"?(B.preventDefault(),F(p)):B.key==="ArrowDown"?(B.preventDefault(),F(-p)):B.key==="Home"&&Number.isFinite(a)?(B.preventDefault(),k.current!==a&&b(),k.current=a,o==null||o(a)):B.key==="End"&&Number.isFinite(c)&&(B.preventDefault(),k.current!==c&&b(),k.current=c,o==null||o(c)))};return u.jsxs("div",{className:`${On.stepper} ${m?On.disabled:""} ${v}`,children:[u.jsx("button",{type:"button",className:On.button,"aria-label":f?`Decrease ${f}`:"Decrease",disabled:m||q,onPointerDown:()=>D(-p),onPointerUp:N,onPointerLeave:N,onPointerCancel:N,children:u.jsx(Fa,{glyph:zh,weight:"bold",size:"sm",className:On.glyph})}),u.jsx("span",{ref:Z,className:On.readout,role:"spinbutton",tabIndex:m?-1:0,"aria-valuenow":s,"aria-valuemin":Number.isFinite(a)?a:void 0,"aria-valuemax":Number.isFinite(c)?c:void 0,"aria-label":f,"aria-disabled":m||void 0,onKeyDown:Y,children:u.jsx("span",{ref:V,className:On.digits,children:s})}),u.jsx("button",{type:"button",className:On.button,"aria-label":f?`Increase ${f}`:"Increase",disabled:m||re,onPointerDown:()=>D(p),onPointerUp:N,onPointerLeave:N,onPointerCancel:N,children:u.jsx(Fa,{glyph:Ch,weight:"bold",size:"sm",className:On.glyph})})]})}const Wh="_track_s3qo0_27",Yh="_indicator_s3qo0_38",Qh="_segment_s3qo0_59",Gh="_md_s3qo0_74",Kh="_sm_s3qo0_84",qh="_lg_s3qo0_94",Jh="_count_s3qo0_104",Xh="_segmentSelected_s3qo0_113",e2="_disabled_s3qo0_127",Dn={track:Wh,indicator:Yh,segment:Qh,md:Gh,sm:Kh,lg:qh,count:Jh,segmentSelected:Xh,disabled:e2};function t2({options:s=[],value:o,onChange:a,disabled:c=!1,label:p,size:f="md",sound:m=!0,className:g=""}){const v=is("select",m),b=Q=>{Q!==o&&v(),a==null||a(Q)},k=i.useRef(null),y=i.useRef({}),z=i.useRef(null),[M,F]=i.useState(null),N=i.useRef(null),Z=i.useRef(null),V=i.useRef(o);V.current=o;const H=Q=>{const O=k.current,X=y.current[Q];if(!O||!X)return null;const ve=Ut(O),ne=Ut(X);return{l:ne.left-ve.left-O.clientLeft,r:ne.right-ve.left-O.clientLeft}},D=i.useCallback(()=>{const Q=H(o);F(Q?{left:Q.l,width:Q.r-Q.l}:null)},[o]);i.useLayoutEffect(()=>{D()},[D,s.length,f]);const q=()=>{if(c||yr()||!k.current||!z.current)return null;const Q=Un(k.current,"segmented-control");return xr(Q)?{...Q,cap:parseFloat(getComputedStyle(z.current).height)}:null},re=(Q,O,X,ve)=>{k.current.setAttribute("data-driven",""),ns(z.current,Q,O,X,{hold:ve,onDone:()=>{var ne;return(ne=k.current)==null?void 0:ne.removeAttribute("data-driven")}})};i.useLayoutEffect(()=>{if(!M)return;const Q={l:M.left,r:M.left+M.width},O=Z.current||N.current;N.current=Q,Z.current=null;const X=q();!X||!O||O.l===Q.l&&O.r===Q.r||re(as(X,O,Q,X.cap),X.travelDur,"linear",!1)},[M==null?void 0:M.left,M==null?void 0:M.width]);const Y=()=>{if(!Z.current)return;const Q=q(),O=Z.current;Z.current=null,Q&&N.current&&re(as(Q,O,N.current,Q.cap),Q.travelDur,"linear",!1)},B=Q=>{if(Q===o||!N.current)return;const O=q(),X=H(Q);if(!O||O.lean<=0||!X)return;const ve=z.current.getAnimations().length?ic(z.current,{left:Ut(k.current).left+k.current.clientLeft}):N.current;Z.current=lc(O,N.current,X);const ne=o,ce=()=>setTimeout(()=>{V.current===ne&&Y()},0);window.addEventListener("pointerup",ce,{once:!0}),re([wr({...ve,h:O.cap},O.cap),wr({...Z.current,h:O.cap},O.cap)],O.leanDur,O.leanEasing,!0)};i.useEffect(()=>(window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)),[D]);const pe=Q=>{var O;(O=y.current[Q])==null||O.focus()},ue=Q=>{if(c||s.length===0)return;const O=(Q+s.length)%s.length,X=s[O];X&&(b(X.value),pe(X.value))},ye=(Q,O)=>{if(!c)switch(Q.key){case"ArrowRight":case"ArrowDown":Q.preventDefault(),ue(O+1);break;case"ArrowLeft":case"ArrowUp":Q.preventDefault(),ue(O-1);break;case"Home":Q.preventDefault(),ue(0);break;case"End":Q.preventDefault(),ue(s.length-1);break}},ge=s.findIndex(Q=>Q.value===o);return u.jsxs("div",{ref:k,className:`${Dn.track} ${Dn[f]||Dn.md} ${c?Dn.disabled:""} ${g}`,role:"radiogroup","aria-label":p,"aria-disabled":c||void 0,children:[M&&u.jsx("span",{ref:z,className:Dn.indicator,"aria-hidden":"true",style:{transform:`translateX(${M.left}px)`,width:`${M.width}px`}}),s.map((Q,O)=>{const X=Q.value===o,ve=X||ge===-1&&O===0;return u.jsxs("button",{type:"button",ref:ne=>{y.current[Q.value]=ne},role:"radio","aria-checked":X,tabIndex:c?-1:ve?0:-1,disabled:c,className:`${Dn.segment} ${X?Dn.segmentSelected:""}`,onClick:()=>b(Q.value),onPointerDown:()=>B(Q.value),onPointerLeave:Y,onKeyDown:ne=>ye(ne,O),children:[Q.label,Q.count!==void 0&&u.jsx("span",{className:Dn.count,children:Q.count})]},Q.value)})]})}const t0=16,Ci=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],n2="_mark_nniye_3",r2="_sm_nniye_24",s2="_md_nniye_1",o2="_lg_nniye_26",a2="_working_nniye_28",l2="_paused_nniye_29",i2="_base_nniye_33",c2="_glint_nniye_34",d2="_spin_nniye_36",u2="_loop_nniye_37",Nt={mark:n2,sm:r2,md:s2,lg:o2,working:a2,paused:l2,base:i2,glint:c2,spin:d2,loop:u2},p2={sm:Nt.sm,md:Nt.md,lg:Nt.lg},f2=3.2;function h2(s,o){const a=s%2===0,p=-((a?1:-1)*(360*s)/o),f=p+360*(a?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${f.toFixed(2)} 8 8`}}function dc({working:s=!0,size:o="sm",label:a,className:c="",...p}){const f=`wm${i.useId().replace(/[^a-zA-Z0-9]/g,"")}`,m=Ci.length,g=a?{role:"img","aria-label":a}:{"aria-hidden":!0},v=[Nt.mark,p2[o]??Nt.sm,s?Nt.working:Nt.paused,c].filter(Boolean).join(" ");return u.jsxs("svg",{viewBox:`0 0 ${t0} ${t0}`,className:v,focusable:"false",...g,...p,children:[s&&u.jsx("defs",{children:Ci.map((b,k)=>{const{from:y,to:z}=h2(k,m);return u.jsxs("linearGradient",{id:`${f}-s${k}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[u.jsx("stop",{offset:"0",className:Nt.base}),u.jsx("stop",{offset:"0.45",className:Nt.base}),u.jsx("stop",{offset:"1",className:Nt.glint}),u.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:y,to:z,dur:`${f2}s`,repeatCount:"indefinite"})]},k)})}),Ci.map((b,k)=>u.jsx("g",{className:Nt.spin,style:{"--wm-i":k},children:u.jsx("path",{d:b,className:Nt.loop,style:{"--wm-i":k},stroke:s?`url(#${f}-s${k})`:void 0})},k))]})}const m2="_button_1cn8j_34",g2="_label_1cn8j_74",v2="_arrow_1cn8j_84",x2="_sm_1cn8j_57",y2="_primary_1cn8j_122",w2="_destructive_1cn8j_123",b2="_secondary_1cn8j_157",k2="_tertiary_1cn8j_173",_2="_loading_1cn8j_207",A2="_working_1cn8j_211",hr={button:m2,label:g2,arrow:v2,sm:x2,primary:y2,destructive:w2,secondary:b2,tertiary:k2,loading:_2,working:A2},L2=["primary","secondary","tertiary","destructive"],E2=["lg","sm"];function S2(){return u.jsx(mh,{weight:"bold",className:hr.arrow,"aria-hidden":"true"})}function n0({variant:s="primary",size:o="lg",disabled:a=!1,loading:c=!1,arrow:p=!0,type:f="button",sound:m=!0,children:g,onClick:v,className:b="",...k}){const y=L2.includes(s)?s:"primary",z=E2.includes(o)?o:"lg",M=a||c,F=is("press",m);return u.jsxs("button",{type:f,className:`${hr.button} ${hr[y]} ${z==="sm"?hr.sm:""} ${c?hr.loading:""} ${b}`,disabled:M,"aria-busy":c||void 0,onClick:M?void 0:N=>{F(),v==null||v(N)},...k,children:[u.jsx("span",{className:hr.label,children:g}),c?u.jsx(dc,{className:hr.working}):p&&u.jsx(S2,{})]})}function z2(s,o=0,a=0,c=0){const p=Math.max(0,s),f=p;if(p===0)return{d:"",width:0,height:0};const m=Math.hypot(f,p),g=Math.PI-Math.atan2(p,f);let v=Math.max(0,o),b=Math.max(0,a),k=v*p/f,y=b/Math.tan(g/2);if(k+y>m){const H=m/(k+y);v*=H,b*=H,k*=H,y*=H}const z=f+y,M=f/m,F=p/m,N=H=>Math.round(H*1e3)/1e3,Z=(H,D)=>`${N(z+H)} ${N(D)}`;return{d:[`M ${Z(-(f+y),-c)}`,`L ${Z(-(f+y),0)}`,b?`A ${N(b)} ${N(b)} 0 0 1 ${Z(-f+M*y,F*y)}`:"",`L ${Z(-M*k,p-F*k)}`,v?`A ${N(v)} ${N(v)} 0 0 0 ${Z(M*k,p-F*k)}`:"",`L ${Z(f-M*y,F*y)}`,b?`A ${N(b)} ${N(b)} 0 0 1 ${Z(f+y,0)}`:"",`L ${Z(f+y,-c)}`,"Z"].filter(Boolean).join(" "),width:N(2*z),height:N(p+c)}}const j2=s=>{const o=[];let a=0,c="";for(const p of s)p==="("&&(a+=1),p===")"&&(a-=1),p===","&&a===0?(o.push(c),c=""):c+=p;return c.trim()&&o.push(c),o.map(p=>p.trim()).filter(Boolean)};function C2(s){var a;if(!s||s.trim()==="none")return"none";const o=[];for(const c of j2(s)){if(/\binset\b/.test(c))continue;const p=(a=c.match(/(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b|\b(?:transparent|currentcolor|black|white)\b/i))==null?void 0:a[0],f=c.replace(p||""," ").match(/-?\d*\.?\d+(?:px)?/g)||[],[m="0",g="0",v="0"]=f.map(b=>/px$/.test(b)?b:`${b}px`);p&&(/\/\s*0(?:\.0*)?\s*\)$/.test(p)||/^transparent$/i.test(p)||o.push(`drop-shadow(${m} ${g} ${v} ${p})`))}return o.length?o.join(" "):"none"}const M2="_wrapper_1y9fh_21",N2="_tooltip_1y9fh_26",$2="_arrow_1y9fh_62",F2="_open_1y9fh_73",T2="_singleline_1y9fh_78",R2="_multiline_1y9fh_82",Kr={wrapper:M2,tooltip:N2,arrow:$2,open:F2,singleline:T2,multiline:R2};function P2({content:s,multiline:o=!1,open:a,sound:c=!0,children:p}){const f=i.useId(),[m,g]=i.useState(!1),v=a??m,b=i.useRef(null),k=i.useRef(null),y=H2(k,v),z=is("reveal",c),M=i.useRef(v),F=i.useRef(0),N=i.useRef(null);i.useLayoutEffect(()=>{const H=b.current,D=k.current,q=M.current&&!v;if(M.current=v,!v&&!q||!H||!D||yr())return;const re=Un(D,"tooltip"),Y=getComputedStyle(D),B=parseFloat(Y.getPropertyValue("--sc-motion-tooltip-grow-from")),pe=Number.isFinite(B)?Math.min(1,Math.max(0,B)):1;if(!xr(re)&&pe===1)return;const ue=parseFloat(Y.getPropertyValue("--sc-size-tooltip-lift"))||0;let ye=q?1:0;const ge=N.current;if(ge&&ge.anim.playState==="running"){const j=Math.min(1,Math.max(0,(ge.anim.currentTime||0)/ge.duration));ye=ge.ys[Math.round(j*(ge.ys.length-1))]}const Q=q?0:1;let O=oc(re.travelEasing),X=re.travelDur;if(q){const j=O.findIndex(fe=>fe>=1);j>0&&(X=Math.round(X*j/(O.length-1)),O=O.slice(0,j+1).map(fe=>Math.min(1,fe)))}const ve=Math.abs(Q-ye),ne=ac(O).map(j=>j*ve),ce=O.map(j=>ye+(Q-ye)*j),T=ce.map((j,fe)=>{const xe=Math.max(0,pe+(1-pe)*j);return{transform:`translate(-50%, ${-ue*(1-j)}px) scale(${xe*(1-.2*re.squash*ne[fe])}, ${xe*(1+.2*re.stretch*ne[fe])})`,opacity:Math.min(1,Math.max(0,j))}});D.getAnimations().forEach(j=>j.cancel());const ee=++F.current,J=()=>{F.current===ee&&H.removeAttribute("data-driven")};H.setAttribute("data-driven","");const E=D.animate(T,{duration:X,easing:"linear"});E.onfinish=J,E.oncancel=J,N.current={anim:E,ys:ce,duration:X}},[v]);const Z=()=>{a===void 0&&!m&&z(),g(!0)},V=()=>g(!1);return u.jsxs("span",{ref:b,className:Kr.wrapper,onMouseEnter:Z,onMouseLeave:V,onFocus:Z,onBlur:V,children:[u.jsx("span",{"aria-describedby":v?f:void 0,children:p}),u.jsxs("span",{ref:k,role:"tooltip",id:f,className:`${Kr.tooltip} ${v?Kr.open:""} ${o?Kr.multiline:Kr.singleline}`,style:y.drop!=="none"?{"--tip-drop":y.drop}:void 0,children:[s,y.d&&u.jsx("svg",{className:Kr.arrow,"aria-hidden":"true",focusable:"false",width:y.width,height:y.height,viewBox:`0 ${-y.overlap} ${y.width} ${y.height}`,style:{top:`calc(100% - ${y.overlap}px)`},children:u.jsx("path",{d:y.d})})]})]})}function H2(s,o){const[a,c]=i.useState({d:"",width:0,height:0,overlap:0,drop:"none"});return i.useLayoutEffect(()=>{const p=s.current;if(!p)return;const f=()=>{const m=getComputedStyle(p),g=y=>parseFloat(m.getPropertyValue(y))||0,v=1,b=z2(g("--sc-size-tooltip-arrow"),g("--sc-size-tooltip-arrow-tip"),g("--sc-size-tooltip-arrow-fillet"),v),k=C2(m.getPropertyValue("--sc-shadow-tooltip-plate"));c(y=>y.d===b.d&&y.drop===k&&y.overlap===v?y:{...b,overlap:v,drop:k})};return f(),window.addEventListener("sc-tokens-change",f),()=>window.removeEventListener("sc-tokens-change",f)},[s,o]),a}const Z2=Math.PI*2,V2=new Set(["uskel","uloader","usplash"]),O2=new Set(["ucard"]),D2={uskel:0,uloader:1.96,usplash:0},r0=new Set(["progress","active","current"]);function I2(s){return function(){s|=0,s=s+1831565813|0;let o=Math.imul(s^s>>>15,1|s);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function B2(s){let o=2166136261;for(const a of String(s))o=Math.imul(o^a.charCodeAt(0),16777619);return o}const U2=(s,o,a,c)=>s.fillRect(o-c,a-c,c*2,c*2),W2=(s,o,a,c)=>{s.beginPath(),s.arc(o,a,c,0,Z2),s.fill()},i1=(s,o,a,c)=>{c*=1.25;const p=Math.max(.7,c*.38);s.fillRect(o-c,a-p/2,c*2,p),s.fillRect(o-p/2,a-c,p,c*2)},Y2={plus:i1,square:U2,round:W2};function Mt(s,o,a){const c=o.rng,p=(a.s||5)*o.S,f=a.x2-a.x1,m=a.y2-a.y1,g=Math.hypot(f,m);if(!g)return;const v=f/g,b=m/g,k=-b,y=v,z=a.w,M=a.ext??z*.35,F=a.r??.9,N=a.jit??.7;let Z=0;for(let V=-M;V<=g+M;V+=p,Z++){const H=a.grid?0:Z%2*p/2;let D=1;if(a.taper){const q=(V+M)/(g+2*M);D=Math.min(1,(a.fadeEnd?1-q:Math.min(q,1-q))/a.taper)}for(let q=-z/2+H;q<=z/2+.01;q+=p){const re=a.crisp?D:Math.min(1,(z/2-Math.abs(q))/(p*1.6)+.3)*D;if(c()>re)continue;const Y=a.x1+v*V+k*q+(c()-.5)*N,B=a.y1+b*V+y*q+(c()-.5)*N;s.globalAlpha=(a.a??.9)*(a.af?a.af(V+(a.u0||0),q,Y,B):1),o.dot(s,Y,B,F)}}s.globalAlpha=1}function fr(s,o,a,c,p={}){let f=0;for(let m=0;m<a.length-1;m++)Mt(s,o,{x1:a[m][0],y1:a[m][1],x2:a[m+1][0],y2:a[m+1][1],w:c,u0:f,...p}),f+=Math.hypot(a[m+1][0]-a[m][0],a[m+1][1]-a[m][1])}const Q2=s=>Math.max(0,Math.min(1,Number.isFinite(+s)?+s:0)),G2={udiv(s,o,a,c){const p=Math.max(1,Math.round(+c.opts.rows||3)),f=7,m=c.opts.fade||"both";Mt(s,c,{x1:2,y1:a/2,x2:o-2,y2:a/2,w:(p-1)*f*c.S,s:f,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:m==="none"?0:m==="end"?.7:.22,fadeEnd:m==="end"})},ucardhead(s,o,a,c){Mt(s,c,{x1:-20,y1:a*.8,x2:o+20,y2:a*.15,w:44,s:7,r:1.6,ext:0}),Mt(s,c,{x1:o*.4,y1:-20,x2:o*.78,y2:a+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(s,o,a,c){const p=12*c.S;for(let f=p/2;f<a;f+=p)for(let m=p/2;m<o;m+=p){let g=.14;c.hover&&(g+=.86*Math.exp(-((m-c.mx)**2+(f-c.my)**2)/5e3)),s.globalAlpha=g,c.dot(s,m,f,1.6)}s.globalAlpha=1},ucta(s,o,a,c){fr(s,c,[[-.05*o,.1*a],[.22*o,.5*a],[.02*o,1.1*a]],46,{s:7,r:1.6,ext:0}),fr(s,c,[[1.05*o,-.1*a],[.78*o,.5*a],[.98*o,1.1*a]],46,{s:7,r:1.6,ext:0})},uempty(s,o,a,c){fr(s,c,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,f])=>[p*o,f*a]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(s,o,a,c){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,o-40,10],["r",20,108,o-40,10],["r",20,128,o*.55,10],["r",20,158,o-40,46]],f=6*c.S,m=c.t*240%(o+500)-250;for(let g=f/2;g<a;g+=f)for(let v=f/2;v<o;v+=f){if(!p.some(y=>y[0]==="c"?(v-y[1])**2+(g-y[2])**2<y[3]**2:v>=y[1]&&v<=y[1]+y[3]&&g>=y[2]&&g<=y[2]+y[4]))continue;const k=Math.exp(-((v+g*.5-m)**2)/4050);s.globalAlpha=.16+.6*k,c.dot(s,v,g,1.3)}s.globalAlpha=1},uprog(s,o,a,c){const p=7*c.S,f=Math.max(1,Math.round(+c.opts.rows||1)),m=Q2(c.opts.progress),g=a/2-(f-1)*p/2,v=c.teal("progress");for(let b=0;b<f;b++)for(let k=4;k<o;k+=p){const y=k/o<m;s.fillStyle=y?v:c.fg,s.globalAlpha=y?1:.2,c.dot(s,k,g+b*p,1.6)}s.globalAlpha=1,s.fillStyle=c.fg},uloader(s,o,a,c){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([v,b])=>[v*o,b*a]);let f=0;for(let v=0;v<p.length-1;v++)f+=Math.hypot(p[v+1][0]-p[v][0],p[v+1][1]-p[v][1]);const m=c.t%2.8/2.8,g=Math.min(1,m/.7)*(f+30);fr(s,c,p,26,{s:6,r:1.3,ext:0,a:1,af:v=>v<g?g-v<18&&m<.7?1:.85:.08})},uline(s,o,a,c){s.fillStyle=c.teal("active"),Mt(s,c,{x1:3,y1:a/2,x2:o-3,y2:a/2,w:5*c.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),s.fillStyle=c.fg},umedia(s,o,a,c){const p=10*c.S;s.globalAlpha=.16;for(let f=p/2;f<a;f+=p)for(let m=p/2;m<o;m+=p)c.dot(s,m,f,1.3);s.globalAlpha=1,Mt(s,c,{x1:-20,y1:a*.9,x2:o+20,y2:a*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(s,o,a,c){fr(s,c,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,f])=>[p*o,f*a]),72,{s:7,r:1.6,ext:0})},ufooter(s,o,a,c){const f=7*c.S,m=c.rng;s.fillStyle=c.C.page,s.fillRect(0,0,o,90),s.fillStyle=c.C.inverse,s.fillRect(0,90,o,a-90);for(let g=f/2;g<90;g+=f)for(let v=f/2;v<o;v+=f)m()<Math.pow(g/90,1.6)&&c.dot(s,v,g,1.6)},uquote(s,o,a,c){const p={w:14*c.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},f=24,m=130;Mt(s,c,{...p,x1:f,y1:f,x2:f+m,y2:f}),Mt(s,c,{...p,x1:f,y1:f,x2:f,y2:f+m}),Mt(s,c,{...p,x1:o-f,y1:a-f,x2:o-f-m,y2:a-f}),Mt(s,c,{...p,x1:o-f,y1:a-f,x2:o-f,y2:a-f-m})},utime(s,o,a,c){const p=Math.max(1,Math.round(+c.opts.steps||4)),f=Math.round(+c.opts.current||0),m=a/p,g=o/2,v=7*c.S,b=Array.from({length:p},(k,y)=>m*(y+.5));for(let k=b[0];k<=b[p-1];k+=v)b.some(y=>Math.abs(k-y)<15)||(s.globalAlpha=k<b[Math.min(Math.max(f,0),p-1)]?.75:.18,c.dot(s,g,k,1.4));b.forEach((k,y)=>{s.fillStyle=y===f?c.teal("current"):c.fg,s.globalAlpha=y<=f?1:.25;for(let z=-1;z<=1;z++)for(let M=-1;M<=1;M++)c.dot(s,g+z*6,k+M*6,1.5)}),s.globalAlpha=1,s.fillStyle=c.fg},ubullet(s,o,a,c){const p=o/3;c.opts.accent&&(s.fillStyle=c.teal("current"));for(let f=0;f<3;f++)for(let m=0;m<3;m++)c.dot(s,p/2+f*p,p/2+m*p,p*.26);s.fillStyle=c.fg},usep(s,o,a,c){s.globalAlpha=.6;for(let p=0;p<3;p++)c.dot(s,o*(.2+p*.3),a*(.8-p*.3),o*.1);s.globalAlpha=1},uthumb(s,o,a,c){const p=c.rng,f=2+Math.floor(p()*2),m=[];for(let g=0;g<=f;g++)m.push([(g%2?.72+.22*p():.06+.22*p())*o,(.12+g*(.76/f)+(p()-.5)*.08)*a]);p()>.5&&m.forEach(g=>{const v=g[0];g[0]=g[1],g[1]=v}),fr(s,c,m,o*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(s,o,a,c){Mt(s,c,{x1:o*.5,y1:-20,x2:o+30,y2:a*.42,w:42,s:7,r:1.6,ext:0}),Mt(s,c,{x1:o*.76,y1:-20,x2:o+30,y2:a*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(s,o,a,c){const p=c.t;fr(s,c,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([f,m])=>[f*o,m*a]),50,{s:7,r:1.6,af:f=>.28+.72*Math.pow(.5+.5*Math.sin(f*.016-p*2),2)})},type(s,o,a,c){if(!o||!a||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(o),p.height=Math.ceil(a);const f=p.getContext("2d"),m=c.opts.text||"Crafthouse";f.textAlign="center",f.textBaseline="middle";let g=a*(+c.opts.textScale||.62);f.font=`500 ${g}px ${c.font}`;const v=f.measureText(m).width;v>o*.88&&(g*=o*.88/v,f.font=`500 ${g}px ${c.font}`),f.fillText(m,o/2,a/2);const b=Math.min(9,Math.max(4.2,g/34))*c.S,k=b*.24,y=f.getImageData(0,0,p.width,p.height).data,z=-.14,M=Math.cos(z),F=Math.sin(z),N=Math.hypot(o,a)/2+10;let Z=0;for(let V=-N;V<N;V+=b,Z++)for(let H=-N+Z%2*b/2;H<N;H+=b){const D=o/2+H*M-V*F,q=a/2+H*F+V*M;D<0||q<0||D>=p.width||q>=p.height||y[((q|0)*p.width+(D|0))*4+3]>100&&c.dot(s,D,q,k)}}};function K2(s,o){const{art:a,w:c,h:p,dpr:f,colors:m,surface:g="inverse",shape:v="plus",density:b=1,seed:k=0,t:y=0,opts:z={},font:M,pointer:F}=o,N=G2[a];if(!N||!c||!p)return;const{accent:Z,...V}=m,H=g==="inverse"?V.onInverse:V.text,D={inverse:V.inverse,raised:V.raised,page:V.page,sunk:V.sunk};s.setTransform(f,0,0,f,0,0),s.globalAlpha=1,s.clearRect(0,0,c,p),g!=="none"&&(s.fillStyle=D[g]??V.inverse,s.fillRect(0,0,c,p)),s.fillStyle=H;const q=Math.min(1.6,Math.max(.6,+b||1)),re=Y=>{if(!r0.has(Y))throw new Error(`PlusField: teal is reserved for ${[...r0].join(", ")}; "${Y}" is not one of them.`);return Z};N(s,c,p,{C:V,fg:H,S:1/q,rng:I2(k),t:y,opts:z,font:M,teal:re,hover:!!(F!=null&&F.hover),mx:(F==null?void 0:F.x)??0,my:(F==null?void 0:F.y)??0,dot:Y2[v]??i1}),s.globalAlpha=1}const q2="_root_1jtbm_5",J2="_backdrop_1jtbm_17",X2="_canvas_1jtbm_25",em="_srOnly_1jtbm_35",oo={root:q2,backdrop:J2,canvas:X2,srOnly:em},tm={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},rs=new Set,gr=new Set;let ss=0,mr=null,$t=null,Bn=null;const nm=()=>typeof window<"u",rm=()=>!!(Bn!=null&&Bn.matches);function c1(s){const o=s/1e3;gr.forEach(a=>a.paint(o)),ss=gr.size?requestAnimationFrame(c1):0}function sm(){!ss&&gr.size&&(ss=requestAnimationFrame(c1))}function Yi(){var s,o,a;nm()&&(!mr&&typeof MutationObserver<"u"&&(mr=new MutationObserver(()=>rs.forEach(c=>c.refresh())),mr.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!$t&&typeof IntersectionObserver<"u"&&($t=new IntersectionObserver(c=>c.forEach(p=>{const f=p.target.__plusField;f&&(f.visible=p.isIntersecting,f.syncMotion())}))),!Bn&&window.matchMedia&&(Bn=window.matchMedia("(prefers-reduced-motion: reduce)"),(s=Bn.addEventListener)==null||s.call(Bn,"change",()=>rs.forEach(c=>c.syncMotion()))),document.fonts&&!Yi.fonts&&(Yi.fonts=!0,(a=(o=document.fonts).addEventListener)==null||a.call(o,"loadingdone",()=>rs.forEach(c=>c.refresh()))))}function om(){rs.size||(mr==null||mr.disconnect(),mr=null,$t==null||$t.disconnect(),$t=null,ss&&cancelAnimationFrame(ss),ss=0)}function am(s,o){const a={root:s,canvas:o,ctx:o.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const c=getComputedStyle(s),p=c.color,f={};for(const[m,g]of Object.entries(tm))f[m]=c.getPropertyValue(g).trim()||p;a.colors=f,a.font=c.fontFamily},resize(c,p){a.w=c,a.h=p,a.dpr=Math.min(2,window.devicePixelRatio||1);const f=Math.round(c*a.dpr),m=Math.round(p*a.dpr);o.width!==f&&(o.width=f),o.height!==m&&(o.height=m),a.refresh()},animated(){const c=a.props;return!!c&&V2.has(c.art)&&c.animate!==!1&&!rm()},syncMotion(){var c;if(a.animated()&&a.visible&&a.w&&a.h){gr.add(a),sm();return}gr.delete(a),a.paint(a.animated()?a.t:D2[(c=a.props)==null?void 0:c.art]??0)},refresh(){!a.props||!a.w||!a.h||(a.readTokens(),a.syncMotion(),gr.has(a)&&a.paint(a.t))},paint(c){const p=a.props;!p||!a.w||!a.h||(a.colors||a.readTokens(),a.t=c,K2(a.ctx,{art:p.art,w:a.w,h:a.h,dpr:a.dpr,colors:a.colors,surface:p.surface,shape:p.shape,density:p.density,seed:B2(p.seed??p.art),t:c,opts:p.opts,font:a.font,pointer:a.pointer}))}};return a}const lm=new Set(["inverse","raised","page","sunk","none"]),im=new Set(["plus","square","round"]);function cm({art:s,surface:o="inverse",shape:a="plus",density:c=1,animate:p=!0,seed:f,rows:m,fade:g,text:v,progress:b,accent:k=!1,steps:y,current:z,textScale:M,backdrop:F=!1,label:N,as:Z="div",className:V="",...H}){const D=i.useRef(null),q=i.useRef(null),re=i.useRef(null),Y={art:s,surface:lm.has(o)?o:"inverse",shape:im.has(a)?a:"plus",density:c,animate:p,seed:f,opts:{rows:m,fade:g,text:v,progress:b,accent:k,steps:y,current:z,textScale:M}};i.useEffect(()=>{const ue=D.current,ye=q.current;if(!ue||!ye||!ye.getContext)return;Yi();const ge=am(ue,ye);ge.props=Y,re.current=ge,ue.__plusField=ge,rs.add(ge);const Q=typeof ResizeObserver<"u"?new ResizeObserver(([ne])=>{const{width:ce,height:T}=ne.contentRect;(ce!==ge.w||T!==ge.h)&&ge.resize(ce,T)}):null;Q==null||Q.observe(ue),$t==null||$t.observe(ue);const O=O2.has(s)?ue.parentElement||ue:null,X=ne=>{const ce=ue.getBoundingClientRect();ge.pointer={hover:!0,x:ne.clientX-ce.left,y:ne.clientY-ce.top},ge.paint(ge.t)},ve=()=>{ge.pointer={hover:!1,x:0,y:0},ge.paint(ge.t)};return O==null||O.addEventListener("pointermove",X),O==null||O.addEventListener("pointerleave",ve),()=>{Q==null||Q.disconnect(),$t==null||$t.unobserve(ue),O==null||O.removeEventListener("pointermove",X),O==null||O.removeEventListener("pointerleave",ve),gr.delete(ge),rs.delete(ge),delete ue.__plusField,re.current=null,om()}},[s]),i.useEffect(()=>{const ue=re.current;ue&&(ue.props=Y,ue.refresh())});const B=[oo.root,F?oo.backdrop:"",V].filter(Boolean).join(" "),pe=Math.round(Math.max(0,Math.min(1,Number(b)||0))*100);return u.jsxs(Z,{ref:D,className:B,...H,children:[u.jsx("canvas",{ref:q,className:oo.canvas,"aria-hidden":"true"}),N&&(s==="uloader"||s==="uskel")&&u.jsx("span",{role:"status",className:oo.srOnly,children:N}),s==="uprog"&&u.jsx("span",{role:"progressbar",className:oo.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":pe,"aria-label":N})]})}const dm="_underline_w8mvb_3",um={underline:dm},Mi=new WeakMap,s0=s=>{var o;return s.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((o=s.parentElement)==null?void 0:o.parentElement)||null};function d1({active:s=!0,shape:o,density:a,motion:c="plus-underline",className:p="",...f}){const m=i.useRef(null);return i.useLayoutEffect(()=>{const g=m.current,v=g&&s?s0(g):null;if(!v)return;const b=Mi.get(v);if(Mi.set(v,g),!b||b===g||!b.isConnected||yr())return;const k=Un(g,c);if(!xr(k))return;const y=Ut(g),z=ic(b,y);b.getAnimations().forEach(M=>M.cancel()),ns(g,as(k,z,{l:0,r:y.width},y.height),k.travelDur,"linear")},[s,c]),i.useEffect(()=>{var g;s||(g=m.current)==null||g.getAnimations().forEach(v=>v.cancel())},[s]),i.useEffect(()=>{const g=m.current,v=g&&s?s0(g):null;if(!v)return;const b=k=>{var D,q;const y=(q=(D=k.target).closest)==null?void 0:q.call(D,'a, button, [role="tab"], [role="radio"]');if(!y||!v.contains(y)||y.contains(g)||yr())return;const z=Un(g,c);if(!xr(z)||z.lean<=0)return;const M=Ut(g),F=Ut(y),N={l:0,r:M.width},Z=lc(z,N,{l:F.left-M.left,r:F.right-M.left});ns(g,[wr({...N,h:M.height},M.height),wr({...Z,h:M.height},M.height)],z.leanDur,z.leanEasing,{hold:!0});let V=!1;const H=()=>setTimeout(()=>{V||(V=!0,!(Mi.get(v)!==g||!g.isConnected)&&ns(g,as(Un(g,c),Z,N,M.height),z.travelDur,"linear"))},0);window.addEventListener("pointerup",H,{once:!0}),y.addEventListener("pointerleave",H,{once:!0})};return v.addEventListener("pointerdown",b),()=>v.removeEventListener("pointerdown",b)},[s,c]),u.jsx("span",{ref:m,className:`${um.underline} ${p}`,"aria-hidden":"true",...f,children:s&&u.jsx(cm,{as:"span",art:"uline",surface:"none",shape:o,density:a})})}const pm="_nav_lg753_18",fm="_row_lg753_26",hm="_brand_lg753_35",mm="_links_lg753_44",gm="_linkItem_lg753_51",vm="_link_lg753_44",xm="_toggle_lg753_79",ym="_trailing_lg753_84",wm="_desktop_lg753_93",bm="_compact_lg753_100",km="_menu_lg753_118",_m="_menuOpen_lg753_128",rt={nav:pm,row:fm,brand:hm,links:mm,linkItem:gm,link:vm,toggle:xm,trailing:ym,desktop:wm,compact:bm,menu:km,menuOpen:_m};function Am({brand:s,links:o=[],trailing:a,compact:c=!1,underline:p=!1,className:f=""}){const[m,g]=i.useState(!1);return u.jsxs("nav",{className:`${rt.nav} ${c?rt.compact:rt.desktop} ${f}`,"aria-label":"Primary",children:[u.jsxs("div",{className:rt.row,children:[u.jsx("div",{className:rt.brand,children:s}),c?u.jsx("button",{type:"button",className:rt.toggle,"aria-expanded":m,"aria-controls":"navbar-menu",onClick:()=>g(v=>!v),children:m?"Close":"Menu"}):u.jsxs(u.Fragment,{children:[u.jsx("ul",{className:rt.links,children:o.map(v=>u.jsx("li",{className:rt.linkItem,children:u.jsxs("a",{className:rt.link,href:v.href,"aria-current":v.current?"page":void 0,children:[v.label,p&&u.jsx(d1,{active:!!v.current,motion:"nav-bar"})]})},v.href))}),a&&u.jsx("div",{className:rt.trailing,children:a})]})]}),c&&u.jsxs("div",{id:"navbar-menu",className:`${rt.menu} ${m?rt.menuOpen:""}`,children:[u.jsx("ul",{className:rt.links,children:o.map(v=>u.jsx("li",{className:rt.linkItem,children:u.jsx("a",{className:rt.link,href:v.href,"aria-current":v.current?"page":void 0,children:v.label})},v.href))}),a&&u.jsx("div",{className:rt.trailing,children:a})]})]})}const Lm="_slider_18xic_30",Em="_track_18xic_48",Sm="_fill_18xic_59",zm="_thumb_18xic_77",jm="_dragging_18xic_128",Cm="_moving_18xic_138",qr={slider:Lm,track:Em,fill:Sm,thumb:zm,dragging:jm,moving:Cm};function Mm({value:s=.5,onChange:o,min:a=0,max:c=1,step:p=.01,bigStep:f=.05,label:m,disabled:g=!1,sound:v=!0,className:b=""}){const k=is("slide",v),y=i.useRef(null),z=i.useRef(null),[M,F]=i.useState(!1),[N,Z]=i.useState(!1),V=i.useRef(null),H=i.useCallback(O=>Math.max(a,Math.min(c,O)),[a,c]),D=(H(s)-a)/(c-a||1),q=D*100,re=()=>parseFloat(getComputedStyle(y.current).getPropertyValue("--sc-size-slider-thumb"))||0,Y=i.useCallback(O=>{const X=y.current;if(!X)return s;const ve=Ut(X),ne=re(),ce=ve.width-ne,T=O/(X.currentCSSZoom||1),ee=ce<=0?0:(T-ve.left-ne/2)/ce;return H(a+ee*(c-a))},[H,a,c,s]),B=()=>{const O=y.current,X=z.current;O&&X&&(V.current=ic(X,Ut(O)))},pe=()=>{var O,X;(O=z.current)==null||O.getAnimations().forEach(ve=>ve.cancel()),(X=y.current)==null||X.removeAttribute("data-driven")};i.useLayoutEffect(()=>{const O=V.current;V.current=null;const X=y.current,ve=z.current;if(!O||!X||!ve||yr())return;const ne=Un(ve,"slider");if(!xr(ne))return;const ce=re(),T=(Ut(X).width-ce)*D;if(Math.abs(O.l-T)<.5)return;X.setAttribute("data-driven","");const ee=as(ne,{l:O.l-T,r:O.r-T},{l:0,r:ce},ce);ns(ve,ee,ne.travelDur,"linear",{onDone:()=>X.removeAttribute("data-driven")})},[D]),i.useEffect(()=>pe,[]);const ue=O=>{if(g)return;O.currentTarget.setPointerCapture(O.pointerId),F(!0);const X=Y(O.clientX);X!==H(s)&&B(),o==null||o(X)},ye=O=>{g||!M||(N||(pe(),Z(!0)),o==null||o(Y(O.clientX)))},ge=()=>{F(!1),Z(!1)},Q=O=>{if(g)return;let X;switch(O.key){case"ArrowRight":case"ArrowUp":X=s+(O.shiftKey?f:p);break;case"ArrowLeft":case"ArrowDown":X=s-(O.shiftKey?f:p);break;case"Home":X=a;break;case"End":X=c;break;default:return}O.preventDefault(),H(X)!==H(s)&&(B(),k()),o==null||o(H(X))};return u.jsx("div",{className:`${qr.slider} ${b}`,role:"slider",tabIndex:g?-1:0,"aria-valuemin":Math.round(a*100),"aria-valuemax":Math.round(c*100),"aria-valuenow":Math.round(q),"aria-label":m,"aria-disabled":g||void 0,onPointerDown:ue,onPointerMove:ye,onPointerUp:ge,onPointerCancel:ge,onKeyDown:Q,children:u.jsxs("span",{ref:y,className:`${qr.track} ${M?qr.dragging:""} ${N?qr.moving:""}`,style:{"--value":D},"aria-hidden":"true",children:[u.jsx("span",{className:qr.fill}),u.jsx("span",{ref:z,className:qr.thumb})]})})}const Nm="_field_1a2p2_32",$m="_label_1a2p2_41",Fm="_description_1a2p2_50",Tm="_helper_1a2p2_51",Rm="_box_1a2p2_61",Pm="_input_1a2p2_75",Hm="_icon_1a2p2_97",Zm="_trailing_1a2p2_98",Vm="_prefix_1a2p2_105",Om="_suffix_1a2p2_106",Dm="_clear_1a2p2_129",Im="_helperError_1a2p2_170",Bm="_errored_1a2p2_176",Um="_raised_1a2p2_187",Wm="_disabled_1a2p2_193",lt={field:Nm,label:$m,description:Fm,helper:Tm,box:Rm,input:Pm,icon:Hm,trailing:Zm,prefix:Vm,suffix:Om,clear:Dm,helperError:Im,errored:Bm,raised:Um,disabled:Wm},o0=s=>s&&!i.isValidElement(s)&&typeof s!="string"?u.jsx(Fa,{glyph:s,weight:"bold"}):s;function Ym({label:s,description:o,helper:a,error:c,disabled:p=!1,type:f="text",value:m,onChange:g,placeholder:v,icon:b,prefix:k,suffix:y,trailing:z,clearable:M=!1,surface:F="page",onClear:N,className:Z="",...V}){const H=i.useId(),D=`${H}-description`,q=`${H}-helper`,re=i.useRef(null),Y=!!c,B=[o&&D,(c||a)&&q].filter(Boolean).join(" ")||void 0,pe=m!==void 0?String(m).length>0:void 0,ue=()=>{const ye=re.current;N?N():ye&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(ye,""),ye.dispatchEvent(new Event("input",{bubbles:!0}))),ye==null||ye.focus()};return u.jsxs("div",{className:`${lt.field} ${F==="raised"?lt.raised:""} ${p?lt.disabled:""} ${Y?lt.errored:""} ${Z}`,children:[s&&u.jsx("label",{htmlFor:H,className:lt.label,children:s}),o&&u.jsx("span",{id:D,className:lt.description,children:o}),u.jsxs("div",{className:lt.box,children:[k&&u.jsx("span",{className:lt.prefix,children:k}),b&&u.jsx("span",{className:lt.icon,"aria-hidden":"true",children:o0(b)}),u.jsx("input",{ref:re,id:H,type:f,className:lt.input,value:m,onChange:g,placeholder:v,disabled:p,"aria-invalid":Y||void 0,"aria-describedby":B,...V}),y&&u.jsx("span",{className:lt.suffix,children:y}),M&&!p&&pe!==!1&&u.jsx("button",{type:"button",className:lt.clear,"aria-label":s?`Clear ${s}`:"Clear",onClick:ue,children:u.jsx(Fa,{glyph:l1,weight:"bold"})}),z&&u.jsx("span",{className:lt.trailing,children:o0(z)})]}),(c||a)&&u.jsx("span",{id:q,className:`${lt.helper} ${Y?lt.helperError:""}`,children:c||a})]})}function Qm(){var a,c;if(typeof window>"u"||typeof navigator>"u"||!((c=(a=navigator.userAgentData)==null?void 0:a.brands)==null?void 0:c.some(p=>p.brand==="Chromium")))return!1;const o=p=>{var f;return(f=window.matchMedia)==null?void 0:f.call(window,p).matches};return!o("(prefers-reduced-transparency: reduce)")&&!o("(forced-colors: active)")}function Gm(s,o,a,{depth:c,refraction:p,splay:f}){const m=Math.max(0,c)/100*(Math.min(s,o)/2),g=Math.max(0,p)/100*(m/2),v=1+3*(1-Math.min(100,Math.max(0,f))/100),b=Math.min(a,s/2,o/2),k=new Uint8ClampedArray(s*o*4);for(let y=0;y<o;y+=1)for(let z=0;z<s;z+=1){const M=z+.5-s/2,F=y+.5-o/2,N=Math.abs(M)-(s/2-b),Z=Math.abs(F)-(o/2-b),H=-(Math.hypot(Math.max(N,0),Math.max(Z,0))+Math.min(Math.max(N,Z),0)-b);let D=0,q=0,re=0;if(H>0&&m>0&&H<m)if(re=(1-H/m)**v,N>0&&Z>0){const B=Math.hypot(N,Z)||1;D=Math.sign(M)*(N/B),q=Math.sign(F)*(Z/B)}else N>Z?D=Math.sign(M):q=Math.sign(F);const Y=(y*s+z)*4;k[Y]=127.5*(1-D*re),k[Y+1]=127.5*(1-q*re),k[Y+2]=128,k[Y+3]=255}return{bytes:k,scale:2*g}}function Km(s){const o=getComputedStyle(s),a=c=>parseFloat(o.getPropertyValue(c))||0;return{depth:a("--glass-depth"),refraction:a("--glass-refraction"),splay:a("--glass-splay"),radius:parseFloat(o.borderTopLeftRadius)||0}}function qm(s,o,a){const c=`sc-glass-${i.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,[p,f]=i.useState(null);return i.useEffect(()=>{const m=s.current;if(!o||!m||!Qm()){f(null);return}let g="";const v=()=>{const k=Math.round(m.offsetWidth),y=Math.round(m.offsetHeight),{radius:z,...M}=Km(m),F=JSON.stringify([k,y,z,M]);if(F===g||k<2||y<2)return;g=F;const{bytes:N,scale:Z}=Gm(k,y,z,M),V=document.createElement("canvas");V.width=k,V.height=y,V.getContext("2d").putImageData(new ImageData(N,k,y),0,0),f({w:k,h:y,scale:Z,href:V.toDataURL()})};v();const b=new ResizeObserver(v);return b.observe(m),window.addEventListener("sc-tokens-change",v),()=>{b.disconnect(),window.removeEventListener("sc-tokens-change",v)}},[s,o,a]),{id:c,filter:p}}const Jm="_card_gh9a1_25",Xm="_defs_gh9a1_38",eg="_flat_gh9a1_47",tg="_interactive_gh9a1_48",ng="_clear_gh9a1_51",rg="_frosted_gh9a1_62",sg="_thick_gh9a1_73",og="_toneAuto_gh9a1_88",ag="_toneLight_gh9a1_93",lg="_toneDark_gh9a1_98",ig="_glass_gh9a1_103",Jr={card:Jm,defs:Xm,flat:eg,interactive:tg,clear:ng,frosted:rg,thick:sg,toneAuto:og,toneLight:ag,toneDark:lg,glass:ig},cg=["clear","frosted","thick"],a0={auto:"toneAuto",light:"toneLight",dark:"toneDark"};function dg({variant:s="flat",level:o="frosted",tone:a="auto",interactive:c=!1,as:p="div",onClick:f,children:m,className:g="",style:v,...b}){const k=s==="glass"?"glass":"flat",y=cg.includes(o)?o:"frosted",z=a0[a]??a0.auto,M=k==="glass",F=i.useRef(null),{id:N,filter:Z}=qm(F,M,y),V=c?"button":p,H=[Jr.card,Jr[k],M?`${Jr[y]} ${Jr[z]}`:"",c?Jr.interactive:"",g].filter(Boolean).join(" ");return u.jsxs(V,{ref:F,type:c?"button":void 0,className:H,onClick:c?f:void 0,style:Z?{...v,"--glass-refract":`url(#${N})`}:v,...b,children:[Z&&u.jsx("svg",{className:Jr.defs,"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:u.jsxs("filter",{id:N,x:"0",y:"0",width:Z.w,height:Z.h,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[u.jsx("feImage",{href:Z.href,x:"0",y:"0",width:Z.w,height:Z.h,preserveAspectRatio:"none",result:"map"}),u.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:Z.scale,xChannelSelector:"R",yChannelSelector:"G"})]})}),m]})}const ug="_pill_hlpza_17",pg="_filled_hlpza_38",fg="_progress_hlpza_38",hg="_success_hlpza_39",mg="_warning_hlpza_40",gg="_error_hlpza_41",vg="_info_hlpza_42",xg="_live_hlpza_43",yg="_outline_hlpza_46",wg="_icon_hlpza_53",bg="_neutral_hlpza_60",kg="_dash_hlpza_65",_g="_glow_hlpza_84",Ag="_pulse_hlpza_1",es={pill:ug,filled:pg,progress:fg,success:hg,warning:mg,error:gg,info:vg,live:xg,outline:yg,icon:wg,neutral:bg,dash:kg,glow:_g,pulse:Ag},Lg=["progress","success","warning","error","info","neutral","live"],Eg=["filled","outline"];function Sg(){const s=i.useRef(null),[o,a]=i.useState({w:0,h:0,sw:0,dash:0,gap:0});i.useLayoutEffect(()=>{const F=s.current&&s.current.parentElement;if(!F)return;const N=()=>{const V=getComputedStyle(F),H=D=>parseFloat(V.getPropertyValue(D))||0;a({w:F.offsetWidth,h:F.offsetHeight,sw:H("--sc-size-status-pill-dash-width"),dash:H("--sc-size-status-pill-dash"),gap:H("--sc-size-status-pill-dash-gap")})};N();const Z=new ResizeObserver(N);return Z.observe(F),window.addEventListener("sc-tokens-change",N),()=>{Z.disconnect(),window.removeEventListener("sc-tokens-change",N)}},[]);const{w:c,h:p,sw:f,dash:m,gap:g}=o,v=Math.max(0,c-f),b=Math.max(0,p-f),k=Math.min(v,b)/2,y=2*(v-2*k)+2*(b-2*k)+2*Math.PI*k,z=m+g,M=z>0?Math.max(1,Math.round(y/z)):1;return u.jsx("svg",{ref:s,className:es.dash,width:c,height:p,viewBox:`0 0 ${c} ${p}`,"aria-hidden":"true",focusable:"false",children:c>0?u.jsx("rect",{x:f/2,y:f/2,width:v,height:b,rx:k,ry:k,pathLength:M*z||void 0}):null})}function zg({tone:s="neutral",emphasis:o="filled",glow:a,icon:c,children:p,className:f=""}){const m=Lg.includes(s)?s:"neutral",g=Eg.includes(o)?o:"filled",v=a??(m==="progress"||m==="live");return u.jsxs("span",{className:`${es.pill} ${es[g]} ${es[m]} ${v?es.glow:""} ${f}`,children:[m==="neutral"?u.jsx(Sg,{}):null,c?u.jsx(c,{className:es.icon,weight:"bold","aria-hidden":"true"}):null,p]})}const jg="_avatar_1gwtr_14",Cg="_xs_1gwtr_24",Mg="_sm_1gwtr_25",Ng="_md_1gwtr_26",$g="_lg_1gwtr_27",Fg="_image_1gwtr_29",Tg="_initials_1gwtr_35",Sa={avatar:jg,xs:Cg,sm:Mg,md:Ng,lg:$g,image:Fg,initials:Tg},Rg=["xs","sm","md","lg"];function Pg(s){if(!s)return"?";const o=s.trim().split(/\s+/);return o.length===1?o[0].slice(0,2).toUpperCase():(o[0][0]+o[o.length-1][0]).toUpperCase()}function Hg({size:s="md",src:o,name:a="",className:c=""}){const p=Rg.includes(s)?s:"md",[f,m]=i.useState(!1),g=o&&!f;return u.jsx("span",{className:`${Sa.avatar} ${Sa[p]} ${c}`,role:"img","aria-label":a||"Avatar",children:g?u.jsx("img",{className:Sa.image,src:o,alt:"",onError:()=>m(!0)}):u.jsx("span",{className:Sa.initials,"aria-hidden":"true",children:Pg(a)})})}const Zg="_toast_jpd2f_35",Vg="_inline_jpd2f_49",Og="_floating_jpd2f_54",Dg="_glass_jpd2f_71",Ig="_badge_jpd2f_94",Bg="_success_jpd2f_104",Ug="_error_jpd2f_105",Wg="_warning_jpd2f_106",Yg="_info_jpd2f_107",Qg="_icon_jpd2f_109",Gg="_message_jpd2f_115",Kg="_srOnly_jpd2f_134",qg="_dismiss_jpd2f_149",Jg="_x_jpd2f_193",Xt={toast:Zg,inline:Vg,floating:Og,glass:Dg,badge:Ig,success:Bg,error:Ug,warning:Wg,info:Yg,icon:Qg,message:Gg,srOnly:Kg,dismiss:qg,x:Jg},Xg=["success","error","warning","info"],ev=["inline","floating"],tv={success:xh,error:$h,warning:s1,info:Lh},l0={outline:"bold",fill:"fill"},nv=["flat","glass"],rv={success:"Success",error:"Error",warning:"Warning",info:"Info"};function i0(s){const o=parseFloat(s);return Number.isNaN(o)?0:/\ds$/.test(s.trim())&&!/ms$/.test(s.trim())?o*1e3:o}function sv({tone:s="info",placement:o="inline",surface:a="flat",glyph:c="outline",autoDismiss:p=!0,onDismiss:f,dismissLabel:m="Dismiss notification",dismissDisabled:g=!1,toneLabel:v,children:b,className:k="",...y}){const z=Xg.includes(s)?s:"info",M=ev.includes(o)?o:"inline",F=M==="floating",N=nv.includes(a)?a:"flat",Z=tv[z],V=l0[c]??l0.outline,H=i.useRef(null),[D,q]=i.useState(F?"enter":"open"),re=i.useRef({id:0,left:0,started:0}),Y=i.useRef(!1);i.useEffect(()=>{if(!F)return;let ne=requestAnimationFrame(()=>{ne=requestAnimationFrame(()=>q(ce=>ce==="enter"?"open":ce))});return()=>cancelAnimationFrame(ne)},[F]);const B=i.useCallback(()=>{Y.current||(Y.current=!0,q("gone"),f==null||f())},[f]),pe=i.useCallback(()=>{clearTimeout(re.current.id),q(ne=>ne==="exit"||ne==="gone"?ne:"exit")},[]);i.useEffect(()=>{if(D!=="exit"||!H.current)return;const ne=H.current,ce=i0(getComputedStyle(ne).getPropertyValue("--sc-motion-toast-travel-duration"))+50,T=J=>{J.target===ne&&J.propertyName==="opacity"&&B()};ne.addEventListener("transitionend",T);const ee=setTimeout(B,ce);return()=>{ne.removeEventListener("transitionend",T),clearTimeout(ee)}},[D,B]);const ue=i.useRef({pointer:!1,focus:!1}),ye=F&&p&&D==="open",ge=i.useCallback(ne=>{clearTimeout(re.current.id),re.current={id:setTimeout(pe,ne),left:ne,started:Date.now()}},[pe]),Q=i.useCallback(ne=>{ue.current[ne]=!0;const ce=re.current;ce.id&&(clearTimeout(ce.id),re.current={id:0,left:Math.max(0,ce.left-(Date.now()-ce.started)),started:0})},[]),O=i.useCallback(ne=>{ue.current[ne]=!1,!(!ye||re.current.id||ue.current.pointer||ue.current.focus)&&ge(re.current.left)},[ye,ge]);if(i.useEffect(()=>{if(!ye||!H.current)return;const ne=i0(getComputedStyle(H.current).getPropertyValue("--sc-motion-toast-hold"));return ue.current.pointer||ue.current.focus?re.current={id:0,left:ne,started:0}:ge(ne),()=>clearTimeout(re.current.id)},[ye,ge]),D==="gone")return null;const X=z==="error"||z==="warning"?"alert":"status",ve=F?{onPointerEnter:()=>Q("pointer"),onPointerLeave:()=>O("pointer"),onFocus:()=>Q("focus"),onBlur:ne=>{ne.currentTarget.contains(ne.relatedTarget)||O("focus")},onKeyDown:ne=>{ne.key==="Escape"&&!g&&(ne.stopPropagation(),pe())}}:{};return u.jsxs("div",{ref:H,className:`${Xt.toast} ${Xt[M]} ${Xt[N]} ${Xt[z]} ${k}`,role:X,"aria-atomic":"true","data-state":D,...ve,...y,children:[u.jsx("span",{className:Xt.badge,"aria-hidden":"true",children:u.jsx(Z,{className:Xt.icon,weight:V})}),u.jsxs("div",{className:Xt.message,children:[u.jsxs("span",{className:Xt.srOnly,children:[v??rv[z],": "]}),b]}),F?u.jsx("button",{type:"button",className:Xt.dismiss,"aria-label":m,disabled:g,onClick:pe,children:u.jsx(l1,{className:Xt.x,weight:"bold","aria-hidden":"true"})}):null]})}const ov=`/* tokens:
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
`,av=`/* tokens:
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
`,Ni=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,lv=`/* tokens:
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
`,iv=`/* tokens:
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
`,cv=`/* tokens (role tokens, physical-controls Tier 2; record Tooltip 2026-10-08-2007 A):
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
`,dv=`/* tokens:
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
`,c0=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,uv=`/* tokens:
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
`,pv=`/* tokens:
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
`,fv=`/* tokens:
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
`,hv=`/* tokens:
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
`,mv=`/* tokens:
 *   --sc-size-avatar-xs / sm / md / lg     · 24 / 32 / 48 / 64
 *   --sc-radius-avatar                     · full circle (role; = radius.pill)
 *   --sc-color-avatar-ground               · initials ground, image ground while it loads (role; = surface.sunk)
 *   --sc-color-text-primary                · initials ink
 *   --sc-font-text-label-chrome-*          · initials font composition
 *   --sc-border-width-default              · forced-colors edge
 *
 * physical-controls Tier 2: Avatar stays flat (Levi, 2026-10-08). An
 * avatar is read, not touched (directive 1); the ground and the corner are
 * its own roles (finding 5) and forced colors draw an edge.
 */

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--sc-radius-avatar);
  background-color: var(--sc-color-avatar-ground);
  flex-shrink: 0;
}

.xs { width: var(--sc-size-avatar-xs); height: var(--sc-size-avatar-xs); }
.sm { width: var(--sc-size-avatar-sm); height: var(--sc-size-avatar-sm); }
.md { width: var(--sc-size-avatar-md); height: var(--sc-size-avatar-md); }
.lg { width: var(--sc-size-avatar-lg); height: var(--sc-size-avatar-lg); }

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.initials {
  font-family: var(--sc-font-text-label-chrome-family);
  font-weight: var(--sc-font-text-label-chrome-weight);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  color: var(--sc-color-text-primary);
  text-transform: uppercase;
  line-height: 1;
  /* Size-relative sizing — initials scale with avatar via inheritance.
     Each size variant resets font-size to ~40% of avatar diameter via
     a sibling rule below. */
}

.xs .initials { font-size: calc(var(--sc-size-avatar-xs) * 0.4); }
.sm .initials { font-size: calc(var(--sc-size-avatar-sm) * 0.4); }
.md .initials { font-size: calc(var(--sc-size-avatar-md) * 0.4); }
.lg .initials { font-size: calc(var(--sc-size-avatar-lg) * 0.4); }

/* High contrast replaces the ground with Canvas, so the circle needs an edge. */
@media (forced-colors: active) {
  .avatar {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
  }
}
`,gv=`/* tokens:
 *   --sc-color-toast-surface                     · plate fill (role; = surface.raised)
 *   --sc-color-toast-text                        · message ink (role; = text.primary; AA, FILL_PAIRS)
 *   --sc-font-text-toast-message-*               · message type (role; = body.dense, 14)
 *   --sc-size-toast-lines                        · two lines max, then an ellipsis
 *   --sc-radius-toast-plate / -badge / -dismiss  · capsule, circle, circle (role; = radius.pill)
 *   --sc-space-component-padding-block-toast     · 16 top and bottom (role; = layout.inset.sm; Figma 24)
 *   --sc-space-component-padding-inline-toast-start / -end · 16 before, 48 after (role; = inset.sm / inset.lg)
 *   --sc-space-component-gap-toast               · 12 between badge, message, dismiss (role; = space.12)
 *   --sc-size-toast-width                        · 380 floating width (role; Figma)
 *   --sc-size-toast-badge / -icon                · 50 badge, 20 glyph (role; Figma)
 *   --sc-color-toast-badge-<tone>                · badge fill per tone (role; = status.*)
 *   --sc-color-toast-icon                        · badge glyph (role; warmGray.50 light, dark.well dark; GRAPHIC_PAIRS)
 *   --sc-size-toast-dismiss / -dismiss-icon / -dismiss-slop · 32 circle, 16 x, 6 hit slop to 44
 *   --sc-size-toast-dismiss-offset-block / -inline · dismiss on the top-right corner (18 up, 20 out)
 *   --sc-color-toast-dismiss-surface / -hover    · dismiss ground at rest; on hover and press (= the x colour)
 *   --sc-color-toast-dismiss-ink-hover           · x on hover and press (= the rest ground): the colours invert
 *   --sc-color-toast-dismiss-ink / -ink-disabled · the x (role; brand.accent light, teal.200 dark; GRAPHIC_PAIRS)
 *   --sc-shadow-toast-plate                      · floating shadow (role; record 2026-10-10-1534: the Tooltip plate shade, top left)
 *   --sc-color-toast-glass, --sc-shadow-toast-glass / -glass-text · glass tint, rim, text halo (= Card frosted, auto)
 *   --sc-size-toast-glass-frost / -glass-saturation · glass backdrop blur and saturation
 *   --sc-size-toast-lift                         · floating rise on enter and exit
 *   --sc-motion-toast-travel-*                   · floating enter and exit time and curve
 *   --sc-motion-toast-hold                       · floating hold before it dismisses itself (read in JS)
 *   --sc-motion-press-*                          · dismiss press scale and timing (shared press)
 *   --sc-border-width-focus, --sc-color-border-focus, --sc-border-focus-offset · dismiss focus ring
 *   --sc-border-width-default                    · forced-colors edges
 *
 * physical-controls Tier 2. Boxes are fills, never strokes (decisions
 * 2026-10-09): the plate separates from its ground by tone, and the floating
 * plate by its shadow. No status LED (Levi, "thats ai slop"). The shadow
 * snaps: only opacity and transform transition (tokens:verify rule 6).
 */

.toast {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--sc-space-component-gap-toast);
  padding-block: var(--sc-space-component-padding-block-toast);
  padding-inline-start: var(--sc-space-component-padding-inline-toast-start);
  padding-inline-end: var(--sc-space-component-padding-inline-toast-end);
  border-radius: var(--sc-radius-toast-plate);
  background-color: var(--sc-color-toast-surface);
  color: var(--sc-color-toast-text);
}

/* Inline: in flow, fills its container, persistent, flat. */
.inline {
  inline-size: 100%;
}

/* Floating: the Figma Toast. 380 wide, never wider than its region. */
.floating {
  inline-size: var(--sc-size-toast-width);
  max-inline-size: 100%;
  box-shadow: var(--sc-shadow-toast-plate);
  transition:
    opacity var(--sc-motion-toast-travel-duration) var(--sc-motion-toast-travel-easing),
    transform var(--sc-motion-toast-travel-duration) var(--sc-motion-toast-travel-easing);
}
.floating[data-state='enter'],
.floating[data-state='exit'] {
  opacity: 0;
  transform: translateY(var(--sc-size-toast-lift));
}

/* Glass: frosted glass over whatever sits behind the toast (Levi,
   2026-10-10: flat or glass). Tint, lit rim and soft shade, text halo.
   Figma frost is a blur radius; CSS blur() takes half. */
.glass {
  background-color: var(--sc-color-toast-glass);
  box-shadow: var(--sc-shadow-toast-glass);
  text-shadow: var(--sc-shadow-toast-glass-text);
  -webkit-backdrop-filter: blur(calc(var(--sc-size-toast-glass-frost) / 2)) saturate(calc(var(--sc-size-toast-glass-saturation) / 100));
  backdrop-filter: blur(calc(var(--sc-size-toast-glass-frost) / 2)) saturate(calc(var(--sc-size-toast-glass-saturation) / 100));
}
/* Opaque fallbacks: a bare tint over unknown content is not readable. */
@media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
  .glass {
    background-color: var(--sc-color-toast-surface);
    text-shadow: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  .inline.glass { box-shadow: none; }
  .floating.glass { box-shadow: var(--sc-shadow-toast-plate); }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background-color: var(--sc-color-toast-surface); text-shadow: none; }
}

/* --- Tone badge --------------------------------------------------- */
.badge {
  flex: none;
  display: grid;
  place-items: center;
  inline-size: var(--sc-size-toast-badge);
  block-size: var(--sc-size-toast-badge);
  border-radius: var(--sc-radius-toast-badge);
  background-color: var(--badge-fill);
  color: var(--sc-color-toast-icon);
}
.success { --badge-fill: var(--sc-color-toast-badge-success); }
.error { --badge-fill: var(--sc-color-toast-badge-error); }
.warning { --badge-fill: var(--sc-color-toast-badge-warning); }
.info { --badge-fill: var(--sc-color-toast-badge-info); }

.icon {
  inline-size: var(--sc-size-toast-icon);
  block-size: var(--sc-size-toast-icon);
}

/* --- Message ------------------------------------------------------ */
.message {
  flex: 1;
  min-inline-size: 0;
  font-family: var(--sc-font-text-toast-message-family);
  font-size: var(--sc-font-text-toast-message-size);
  font-weight: var(--sc-font-text-toast-message-weight);
  line-height: var(--sc-font-text-toast-message-line-height);
  letter-spacing: var(--sc-font-text-toast-message-letter-spacing);
  overflow-wrap: break-word;
  /* Two lines max (Levi, 2026-10-10); the clamp is visual, the whole
     message is still read out. */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--sc-size-toast-lines);
  line-clamp: var(--sc-size-toast-lines);
  overflow: hidden;
}

/* The tone word leads the message for assistive tech only. */
.srOnly {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
/* --- Dismiss: five states ----------------------------------------- */
/* It sits on the plate's top-right corner, out of the flow (Figma layout
   35:9): 18 above the top edge, 20 past the end edge. A floating region
   leaves that much room above and to the end of each toast. */
.dismiss {
  position: absolute;
  inset-block-start: calc(-1 * var(--sc-size-toast-dismiss-offset-block));
  inset-inline-end: calc(-1 * var(--sc-size-toast-dismiss-offset-inline));
  display: grid;
  place-items: center;
  inline-size: var(--sc-size-toast-dismiss);
  block-size: var(--sc-size-toast-dismiss);
  padding: 0;
  border: 0;
  border-radius: var(--sc-radius-toast-dismiss);
  background-color: var(--sc-color-toast-dismiss-surface);
  color: var(--sc-color-toast-dismiss-ink);
  cursor: pointer;
  transition: transform var(--sc-motion-press-release-duration) var(--sc-motion-press-release-easing);
}
/* Hit slop: a 44px target around the 32px circle, not drawn. */
.dismiss::before {
  content: '';
  position: absolute;
  inset: calc(-1 * var(--sc-size-toast-dismiss-slop));
  border-radius: inherit;
}
.dismiss:hover:not(:disabled) {
  background-color: var(--sc-color-toast-dismiss-hover);
  color: var(--sc-color-toast-dismiss-ink-hover);
}
.dismiss:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-focus-offset);
}
.dismiss:active:not(:disabled) {
  background-color: var(--sc-color-toast-dismiss-hover);
  color: var(--sc-color-toast-dismiss-ink-hover);
  transform: scale(var(--sc-motion-press-scale));
  transition-duration: var(--sc-motion-press-duration);
  transition-timing-function: var(--sc-motion-press-easing);
}
/* Disabled is flat (directive 5): no hover ground, no press. */
.dismiss:disabled {
  color: var(--sc-color-toast-dismiss-ink-disabled);
  cursor: not-allowed;
}

.x {
  inline-size: var(--sc-size-toast-dismiss-icon);
  block-size: var(--sc-size-toast-dismiss-icon);
}

/* --- Reduced motion: the rise and the press go. The fade stays; where
   the SCDS reset is loaded it shortens every transition, so the toast
   appears and leaves at once. Either way nothing moves. --------- */
@media (prefers-reduced-motion: reduce) {
  .floating { transition: opacity var(--sc-motion-toast-travel-duration) linear; }
  .floating[data-state='enter'],
  .floating[data-state='exit'] { transform: none; }
  .dismiss { transition: none; }
  .dismiss:active:not(:disabled) { transform: none; }
}

/* --- Forced colors: fills and the shadow drop, so edges carry the shapes.
   The plate, the badge and the dismiss button each draw a system edge; the
   badge glyph and the x take the system text colours. */
@media (forced-colors: active) {
  .toast {
    outline: var(--sc-border-width-default) solid CanvasText;
    outline-offset: calc(-1 * var(--sc-border-width-default));
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  .badge {
    outline: var(--sc-border-width-default) solid CanvasText;
    color: CanvasText;
  }
  .dismiss {
    outline: var(--sc-border-width-default) solid ButtonBorder;
    color: ButtonText;
  }
  .dismiss:focus-visible { outline: var(--sc-border-width-focus) solid Highlight; }
  .dismiss:disabled { color: GrayText; outline-color: GrayText; }
}
`,vv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADqUlEQVR4nOzdMY7CQBAAQd+JHBHw/wcSIF7ABf6AAy/sXlfFTiZpTTBa/25A1u8GZAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhF22ib2ej/eR7663+8+2IPPtzPc9NgAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAI+/iJ4tHzyVFGn2WabyzzncsGAGECAGECAGECAGECAGECAGECAGECAGECAGFTP8boUcmd+ebkUVBgaQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYUueYALnsAFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2GWb2Ov5eB/57nq7L/l/A/PtVp3vP7ABQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNjHTzCPnoeOMvrs1HxjORs+lw0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwqa+qvJo5s58jGIDgDABgDABgDABgDABgDABgDABgDABgDABgDABgDAnmBBmA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwyzax1/PxPvLd9XZf8v8G5tuZ73tsABAmABAmABAmABAmABAmABAmABAmABAmABAmABD28RPFo+eTo4w+yzTfWOY7lw0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwqZ+jNGjkjvzzcmjoMDSBADCBADCBADCBADCBADCBADCBADCBADCBADCljzBBM5hA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwPwAAAP//z4cOmAAAAAZJREFUAwDFAIX+6wDGTwAAAABJRU5ErkJggg==",Qi={"sprint-unit":{title:"Sprint unit",summary:"One unit of a sprint, from contract to merge, with a verifier that is not the builder.",steps:[{id:"contract",title:"Propose the contract",actor:"claude",line:"Say what will be built and how it will be verified.",gate:null,next:[{label:null,to:"approve"}]},{id:"approve",title:"Approve the contract",actor:"you",line:"Approve it. It is written to the sprint CONTEXT.md.",gate:"Contract",next:[{label:null,to:"cut"}]},{id:"cut",title:"Cut the branch",actor:"claude",line:"Cut the branch and commit empty at once, so it never reads as merged.",gate:null,next:[{label:null,to:"red"}]},{id:"red",title:"Commit red tests",actor:"claude",line:"Commit the tests alone. They run red, and the reason is the feature.",gate:null,next:[{label:null,to:"build"}]},{id:"build",title:"Build the unit",actor:"claude",line:"Build inside the ceiling: 80 tool calls to build and dispatch.",gate:null,next:[{label:null,to:"verify"}]},{id:"verify",title:"Verify, fenced",actor:"claude",line:"A Fable verifier in a worktree pinned to the unit's sha grades it.",gate:null,next:[{label:null,to:"plant"}]},{id:"plant",title:"Plant a bug",actor:"claude",line:"The verifier flips one covered line, expects red, restores.",gate:null,next:[{label:"PASS",to:"commit"},{label:"FAIL",to:"build"},{label:"two rounds",to:"park"}]},{id:"park",title:"Park",actor:"claude",line:"Stop at the unit boundary with a resume pointer.",gate:null,next:[{label:null,to:"end"}]},{id:"commit",title:"Commit",actor:"claude",line:"The lead commits and pushes the branch.",gate:null,next:[{label:null,to:"pr"}]},{id:"pr",title:"Open the PR",actor:"claude",line:"Open a PR to main; protected main refuses a direct push.",gate:null,next:[{label:null,to:"merge"}]},{id:"merge",title:"Merge",actor:"you",line:"You merge the PR.",gate:"Merge",next:[{label:null,to:"end"}]}],run:null},stages:{title:"Stages",summary:"Every project: five stages, each closed by a gate that you sign.",steps:[{id:"brief",title:"Brief",actor:"claude",line:"Direction, scope, success criteria, references and risks, in writing.",gate:null,next:[{label:null,to:"gate-1"}]},{id:"gate-1",title:"Concept sign-off",actor:"you",line:"Direction agreed, scope named, risks logged.",gate:"Gate 1",next:[{label:"signed",to:"design"},{label:"not yet",to:"brief"}]},{id:"design",title:"Design",actor:"claude",line:"Type, tokens, screens, motion and states: a specification, not a vibe.",gate:null,next:[{label:null,to:"gate-2"}]},{id:"gate-2",title:"Design sign-off",actor:"you",line:"Type, tokens, breakpoints, motion, dark mode, access and states resolved.",gate:"Gate 2",next:[{label:"signed",to:"build"},{label:"not yet",to:"design"}]},{id:"build",title:"Build",actor:"claude",line:"Implement the design without drift.",gate:null,next:[{label:null,to:"gate-3"}]},{id:"gate-3",title:"Build sign-off",actor:"you",line:"Every state, Web Vitals, keyboard, screen reader, contrast, reduced motion.",gate:"Gate 3",next:[{label:"signed",to:"review"},{label:"not yet",to:"build"}]},{id:"review",title:"Review",actor:"claude",line:"Hold the work against the stage 01 and 02 criteria.",gate:null,next:[{label:null,to:"gate-4"}]},{id:"gate-4",title:"Review sign-off",actor:"you",line:"Punch list closed, performance, access, parity, copy, security, criteria met.",gate:"Gate 4",next:[{label:"signed",to:"launch"},{label:"not yet",to:"review"}]},{id:"launch",title:"Launch",actor:"claude",line:"Ship with observability in place, and hand off.",gate:null,next:[{label:null,to:"close"}]},{id:"close",title:"Close",actor:"you",line:"Handoff accepted, 14-day tail clean, retrospective logged, stage closed.",gate:"Close",next:[{label:null,to:"end"}]}],run:{repo:"studio-pm",branch:"main",current:"review",counts:{done:6,remaining:3,unrecorded:0},travelled:[{from:"brief",to:"gate-1"},{from:"gate-1",to:"design"},{from:"design",to:"gate-2"},{from:"gate-2",to:"build"},{from:"build",to:"gate-3"},{from:"gate-3",to:"review"}],steps:{brief:{state:"done",proof:"manifest stage 04-review"},build:{state:"done",proof:"manifest stage 04-review"},close:{state:"remaining",proof:null},design:{state:"done",proof:"manifest stage 04-review"},"gate-1":{state:"done",proof:"manifest stage 04-review"},"gate-2":{state:"done",proof:"manifest stage 04-review"},"gate-3":{state:"done",proof:"manifest stage 04-review"},"gate-4":{state:"remaining",proof:null},launch:{state:"remaining",proof:null},review:{state:"current",proof:"manifest stage 04-review"}}}},"session-harness":{title:"Session harness",summary:"A long build in three phases: plan, build sprint by sprint, evaluate each sprint.",steps:[{id:"brief",title:"Write the brief",actor:"you",line:"Describe what to build in one to four sentences.",gate:null,next:[{label:null,to:"plan"}]},{id:"plan",title:"Plan the spec",actor:"claude",line:"The Planner turns the brief into a spec with three to six sprints.",gate:null,next:[{label:null,to:"approve-spec"}]},{id:"approve-spec",title:"Approve the spec",actor:"you",line:"Read the spec, edit it, approve it. It is the creative direction.",gate:"Spec",next:[{label:null,to:"open-generator"}]},{id:"open-generator",title:"Start the Generator",actor:"you",line:"Open Claude Code in the project on Opus at xhigh effort.",gate:null,next:[{label:null,to:"contract"}]},{id:"contract",title:"Propose the contract",actor:"claude",line:"The Generator proposes what it will build and how you will verify it.",gate:null,next:[{label:null,to:"approve-contract"}]},{id:"approve-contract",title:"Approve the contract",actor:"you",line:"Approve it. It is written to the sprint CONTEXT.md, Status approved.",gate:"Contract",next:[{label:null,to:"build"}]},{id:"build",title:"Build the sprint",actor:"claude",line:"Build, run the CONTEXT.md audit checklist, then open the PR.",gate:null,next:[{label:null,to:"evaluate"}]},{id:"evaluate",title:"Evaluate the sprint",actor:"claude",line:"A fresh Fable session grades the sprint and returns PASS or FAIL.",gate:null,next:[{label:"PASS",to:"review"},{label:"FAIL",to:"build"}]},{id:"review",title:"Review the report",actor:"you",line:"Read the report and the output. Send the next sprint, or send it back.",gate:"Sprint",next:[{label:"next sprint",to:"contract"},{label:"revise",to:"build"},{label:"last sprint",to:"end"}]}],run:null}},xv="_root_19m3n_5",yv="_head_19m3n_11",wv="_headTitle_19m3n_16",bv="_headMeta_19m3n_17",kv="_runLine_19m3n_17",_v="_board_19m3n_24",Av="_svg_19m3n_25",Lv="_grid_19m3n_26",Ev="_gridSoft_19m3n_32",Sv="_cardShipped_19m3n_40",zv="_chip_19m3n_40",jv="_block_19m3n_40",Cv="_nodeWrap_19m3n_40",Mv="_titleUi_19m3n_56",Nv="_word_19m3n_64",$v="_you_19m3n_70",Fv="_gateTag_19m3n_71",Tv="_chipGlyph_19m3n_71",Rv="_blockTitle_19m3n_71",Pv="_hovered_19m3n_84",Hv="_lineShipped_19m3n_86",Zv="_heavy_19m3n_87",Vv="_rowName_19m3n_88",Ov="_rowNameQuiet_19m3n_88",Dv="_labelPlain_19m3n_98",Iv="_endTag_19m3n_105",Bv="_chipHead_19m3n_132",Uv="_linePipe_19m3n_140",Wv="_dashed_19m3n_141",Yv="_lit_19m3n_142",Qv="_pill_19m3n_143",Gv="_eventChip_19m3n_143",Kv="_signalTag_19m3n_143",qv="_pillLit_19m3n_154",Jv="_lane_19m3n_157",Xv="_laneName_19m3n_165",e8="_blockCheck_19m3n_201",t8="_lineLane_19m3n_213",n8="_laneLit_19m3n_214",r8="_arrowHead_19m3n_215",s8="_node_19m3n_40",o8="_youNode_19m3n_239",a8="_nodeGlyph_19m3n_240",l8="_nodeChip_19m3n_242",i8="_chevron_19m3n_252",c8="_chevronLit_19m3n_253",d8="_arc_19m3n_254",u8="_panel_19m3n_258",p8="_panelTitle_19m3n_271",f8="_panelRow_19m3n_272",h8="_panelFact_19m3n_272",m8="_panelLine_19m3n_273",g8="_panelActions_19m3n_274",v8="_link_19m3n_275",x8="_enterNode_19m3n_284",y8="_enterChevron_19m3n_288",w8="_arcReveal_19m3n_294",b8="_enterFade_19m3n_303",te={root:xv,head:yv,headTitle:wv,headMeta:bv,runLine:kv,board:_v,svg:Av,grid:Lv,gridSoft:Ev,cardShipped:Sv,chip:zv,block:jv,nodeWrap:Cv,titleUi:Mv,word:Nv,you:$v,gateTag:Fv,chipGlyph:Tv,blockTitle:Rv,hovered:Pv,lineShipped:Hv,heavy:Zv,rowName:Vv,rowNameQuiet:Ov,labelPlain:Dv,endTag:Iv,chipHead:Bv,linePipe:Uv,dashed:Wv,lit:Yv,pill:Qv,eventChip:Gv,signalTag:Kv,pillLit:qv,lane:Jv,laneName:Xv,blockCheck:e8,lineLane:t8,laneLit:n8,arrowHead:r8,node:s8,youNode:o8,nodeGlyph:a8,nodeChip:l8,chevron:i8,chevronLit:c8,arc:d8,panel:u8,panelTitle:p8,panelRow:f8,panelFact:h8,panelLine:m8,panelActions:g8,link:v8,enterNode:x8,enterChevron:y8,arcReveal:w8,enterFade:b8},ao=["A · Pipeline","B · Swimlane","C · Signal"],u1={"Sprint unit":"sprint-unit",Stages:"stages","Session harness":"session-harness"},k8=["sample","as read","none"],en=1171,Ra=["You","Claude","Automated"],fo={you:0,claude:1,automated:2},_8={you:Nh,claude:Mh,automated:Ah};function A8(s){const o=s.steps.map(f=>f.id),a=Math.min(5,o.length-2),c={};o.forEach((f,m)=>{c[f]={state:m<a?"done":m===a?"current":"remaining",proof:m<a?"sample":null}});const p=[];for(let f=0;f<a;f++)s.steps[f].next.some(m=>m.to===o[f+1])&&p.push({from:o[f],to:o[f+1]});return{repo:"sample",branch:"feat/sample",current:o[a],counts:{done:a,unrecorded:0,remaining:o.length-a-1},travelled:p,steps:c,sample:!0}}function L8(s,o){const a=s.steps,c=a.length,p=Object.fromEntries(a.map((M,F)=>[M.id,F])),f=o==="none"?null:o==="sample"?s.run||A8(s):s.run,m=new Set(((f==null?void 0:f.travelled)||[]).map(M=>`${p[M.from]}-${p[M.to]}`)),g=[];a.forEach((M,F)=>M.next.forEach(N=>{const Z=N.to==="end"?c:p[N.to];Z!==void 0&&g.push({from:F,to:Z,label:N.label,rail:Z!==F+1,travelled:m.has(`${F}-${Z}`),track:0})}));const v=g.filter(M=>M.rail).sort((M,F)=>Math.abs(F.to-F.from)-Math.abs(M.to-M.from)||M.from-F.from),b=[];for(const M of v){const F=Math.min(M.from,M.to),N=Math.max(M.from,M.to);let Z=0;for(;b.some(V=>V.track===Z&&V.lo<=N&&F<=V.hi);)Z++;M.track=Z,b.push({lo:F,hi:N,track:Z})}const k=Math.max(0,...v.map(M=>M.track+1)),y=[...new Set(a.map(M=>fo[M.actor]))].sort();return{steps:a,n:c,edges:g,tracks:k,lanes:y,run:f,state:M=>{var F,N;return((N=(F=f==null?void 0:f.steps)==null?void 0:F[a[M].id])==null?void 0:N.state)||null},cols:Math.max(9,c)}}const d0={done:"Done",current:"Now",unrecorded:"No record"};function uc(s,o){if(s.length<3||!o)return s.map((p,f)=>`${f?"L":"M"} ${p[0]} ${p[1]}`).join(" ");let a=`M ${s[0][0]} ${s[0][1]}`;for(let p=1;p<s.length-1;p++){const[f,m]=s[p-1],[g,v]=s[p],[b,k]=s[p+1],y=Math.min(o,Math.hypot(g-f,v-m)/2),z=Math.min(o,Math.hypot(b-g,k-v)/2),M=Math.sign(g-f),F=Math.sign(v-m),N=Math.sign(b-g),Z=Math.sign(k-v);a+=` L ${g-M*y} ${v-F*y} Q ${g} ${v} ${g+N*z} ${v+Z*z}`}const c=s[s.length-1];return`${a} L ${c[0]} ${c[1]}`}function pc(s,o){const a=s.edges.some(y=>y.to===s.n&&y.label&&!y.rail)?{...o,trail:o.trail+64}:o,c=(en-a.lead-a.trail-(s.cols-1)*a.gap)/s.cols,p=a.top,f=y=>p+a.label+y*a.trackGap,m=(s.tracks?f(s.tracks-1):p)+a.clear,g=y=>s.lanes.indexOf(y),v=y=>m+g(y)*(a.cardH+a.rowGap),b=y=>{if(y>=s.n){const M=b(s.n-1);return{x:en-a.trail+a.gap,y:M.y+M.h/2-a.label/2,w:a.trail-a.gap,h:a.label,end:!0}}const z=fo[s.steps[y].actor];return{x:a.lead+y*(c+a.gap),y:v(z),w:c,h:a.cardH}},k=m+s.lanes.length*a.cardH+(s.lanes.length-1)*a.rowGap+a.foot;return{colW:c,trackY:f,rowsTop:m,rowY:v,card:b,height:k}}function Pa(s,o,a,c){const p=o.card(a.from),f=o.card(a.to),m=z=>z.y+z.h/2;if(!a.rail){if(f.end||m(p)===m(f))return[[p.x+p.w,m(p)],[f.x,m(p)]];const z=m(f)<m(p),M=f.x+f.w/2;return[[p.x+p.w,m(p)],[M,m(p)],[M,z?f.y+f.h:f.y]]}const g=o.trackY(a.track),v=s.edges.filter(z=>z.rail&&z.from===a.from),b=v.indexOf(a)-(v.length-1)/2,k=p.x+p.w/2-p.w/4+b*c.spread,y=f.end?f.x+c.spread:f.x+f.w/2+f.w/4;return[[k,p.y],[k,g],[y,g],[y,(f.end,f.y)]]}function E8({m:s,i:o,x:a,y:c}){var v,b;const p=s.steps[o],f=Object.fromEntries(s.steps.map(k=>[k.id,k.title])),m=(b=(v=s.run)==null?void 0:v.steps)==null?void 0:b[p.id],g=Math.min(Math.max(0,a),en-264);return u.jsxs("div",{className:te.panel,style:{left:g,top:c},role:"group","aria-label":`Details of ${p.title}`,children:[u.jsx("span",{className:te.panelTitle,children:p.title}),u.jsxs("span",{className:te.panelRow,children:[Ra[fo[p.actor]],p.gate?` · Gate: ${p.gate}`:""]}),u.jsx("span",{className:te.panelLine,children:p.line}),p.next.map(k=>u.jsxs("span",{className:te.panelFact,children:["Next: ",k.to==="end"?"End":f[k.to],k.label?`, if ${k.label}`:""]},k.to+(k.label||""))),m&&m.state!=="remaining"&&u.jsx("span",{className:te.panelFact,children:m.state==="done"?`Done${m.proof?`: ${m.proof}`:""}`:m.state==="current"?"Now":"No record of this step"}),u.jsxs("span",{className:te.panelActions,children:[u.jsx("span",{className:te.link,children:"Copy"}),u.jsx("span",{className:te.link,children:"Open"})]})]})}function S8({m:s,hover:o,setHover:a}){const c={lead:64,trail:44,gap:12,top:0,label:16,trackGap:20,clear:28,cardH:76,rowGap:24,foot:40,spread:8},p=pc(s,c);return u.jsxs(Ha,{height:p.height,m:s,hover:o,g:p,children:[u.jsx("svg",{className:te.svg,width:en,height:p.height,"aria-hidden":"true",children:s.edges.map((f,m)=>u.jsx("path",{d:uc(Pa(s,p,f,c),0),className:`${te.lineShipped} ${f.travelled?te.heavy:""}`},m))}),s.lanes.map(f=>u.jsx("span",{className:te.rowName,style:{top:p.rowY(f),height:c.cardH,width:c.lead-8},children:Ra[f]},f)),u.jsx(fc,{m:s,g:p,o:c,className:te.labelPlain}),s.steps.map((f,m)=>{const g=p.card(m),v=s.state(m);return u.jsxs("button",{type:"button",className:`${te.cardShipped} ${f.actor==="you"?te.you:""} ${o===m?te.hovered:""}`,style:{left:g.x,top:g.y,width:g.w,height:g.h},onPointerEnter:()=>a(m),onPointerLeave:()=>a(null),onFocus:()=>a(m),onBlur:()=>a(null),children:[u.jsx("span",{className:te.titleUi,children:f.title}),d0[v]&&u.jsx("span",{className:te.word,children:d0[v]})]},f.id)}),u.jsx(hc,{g:p,m:s})]})}function u0({m:s,hover:o,setHover:a}){const c={lead:72,trail:48,gap:14,top:4,label:22,trackGap:30,clear:36,cardH:82,rowGap:40,foot:44,spread:10},p=pc(s,c);return u.jsxs(Ha,{height:p.height,m:s,hover:o,g:p,children:[u.jsx("svg",{className:te.svg,width:en,height:p.height,"aria-hidden":"true",children:s.edges.map((f,m)=>u.jsx("path",{d:uc(Pa(s,p,f,c),14),className:`${te.linePipe} ${f.rail?te.dashed:""} ${f.travelled?te.lit:""}`},m))}),s.lanes.map(f=>u.jsx("span",{className:te.rowNameQuiet,style:{top:p.rowY(f),height:c.cardH,width:c.lead-12},children:Ra[f]},f)),u.jsx(fc,{m:s,g:p,o:c,pill:!0}),s.steps.map((f,m)=>{const g=p.card(m),v=s.state(m),b=v==="done"?cc:yh;return u.jsxs("button",{type:"button","data-state":v||"none",className:`${te.chip} ${f.actor==="you"?te.you:""} ${o===m?te.hovered:""}`,style:{left:g.x,top:g.y,width:g.w,height:g.h},onPointerEnter:()=>a(m),onPointerLeave:()=>a(null),onFocus:()=>a(m),onBlur:()=>a(null),children:[u.jsxs("span",{className:te.chipHead,children:[v==="current"?u.jsx(dc,{size:"xs",label:"Working"}):v?u.jsx(b,{className:te.chipGlyph,weight:"bold","aria-hidden":"true"}):null,f.gate&&u.jsx("span",{className:te.gateTag,children:f.gate})]}),u.jsx("span",{className:te.titleUi,children:f.title})]},f.id)}),u.jsx(hc,{g:p,m:s})]})}function z8({m:s,hover:o,setHover:a}){const c={lead:56,trail:48,gap:14,top:4,label:22,trackGap:28,clear:30,cardH:56,rowGap:40,foot:34,spread:10},p=pc(s,c),f=16,m=v=>!v.rail&&v.to<s.n&&fo[s.steps[v.from].actor]!==fo[s.steps[v.to].actor],g=p.height+f;return u.jsxs(Ha,{height:g,m:s,hover:o,g:p,grid:!0,children:[s.lanes.map(v=>u.jsx("div",{className:te.lane,style:{top:p.rowY(v)-f,height:c.cardH+2*f},children:u.jsx("span",{className:te.laneName,style:{width:c.lead-12},children:Ra[v]})},v)),u.jsxs("svg",{className:te.svg,width:en,height:g,"aria-hidden":"true",children:[u.jsx("defs",{children:u.jsx("marker",{id:"wb-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"8",markerHeight:"8",orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",children:u.jsx("path",{d:"M 0 0 L 8 4 L 0 8 z",className:te.arrowHead})})}),s.edges.map((v,b)=>u.jsx("path",{d:uc(Pa(s,p,v,c),10),markerEnd:"url(#wb-arrow)",className:`${te.lineLane} ${v.rail||m(v)?te.dashed:""} ${v.travelled?te.laneLit:""}`},b))]}),u.jsx(fc,{m:s,g:p,o:c,chip:!0,crosses:m}),s.steps.map((v,b)=>{const k=p.card(b),y=s.state(b);return u.jsxs("button",{type:"button","data-state":y||"none",className:`${te.block} ${v.actor==="you"?te.you:""} ${o===b?te.hovered:""}`,style:{left:k.x,top:k.y,width:k.w,height:k.h},onPointerEnter:()=>a(b),onPointerLeave:()=>a(null),onFocus:()=>a(b),onBlur:()=>a(null),children:[u.jsx("span",{className:te.blockTitle,children:v.title}),y==="done"&&u.jsx(cc,{className:te.blockCheck,weight:"bold","aria-label":"Done"})]},v.id)}),u.jsx(hc,{g:p,m:s})]})}function j8({m:s,hover:o,setHover:a,slow:c=1}){const g=(en-24-56)/s.cols,v=40,b=18+Math.max(1,s.tracks)*v,k=V=>24+V*g+g/2,y=b+44/2,z=b+44+8+40+34,M=en-56+12,F=V=>V>=s.n?M:k(V),N=(V,H)=>({"--at":V,"--span":H}),Z=(V,H,D,q)=>{const re=[];for(let Y=V+6;Y<H-8;Y+=11)re.push(Y);return re.map((Y,B)=>u.jsx("path",{d:`M ${Y} ${y-4} L ${Y+5} ${y} L ${Y} ${y+4}`,style:N(q+.5+(B+1)/(re.length+1),0),className:`${te.chevron} ${te.enterChevron} ${D?te.chevronLit:""}`},Y))};return u.jsxs(Ha,{height:z,m:s,hover:o,g:{card:V=>({x:k(V)-g/2+4,y:y+44/2+8,w:g-8,h:40})},grid:!0,soft:!0,style:{"--wb-slow":c},children:[u.jsx("svg",{className:te.svg,width:en,height:z,"aria-hidden":"true",children:s.edges.map((V,H)=>{if(!V.rail)return u.jsx("g",{children:Z(F(V.from)+44/2,F(V.to)-(V.to>=s.n?0:44/2),V.travelled,V.from)},H);const D=F(V.from),q=F(V.to),re=y-44/2-6-(V.track+1)*v+8,Y=`M ${D} ${y-44/2} C ${D} ${re}, ${q} ${re}, ${q} ${V.to>=s.n?y-8:y-44/2}`,B=`wb-arc-${H}`;return u.jsxs("g",{children:[u.jsx("mask",{id:B,maskUnits:"userSpaceOnUse",children:u.jsx("path",{d:Y,pathLength:"1",className:te.arcReveal,style:N(V.from+1,Math.abs(V.to-V.from))})}),u.jsx("path",{d:Y,mask:`url(#${B})`,className:`${te.arc} ${V.travelled?te.chevronLit:""}`})]},H)})}),s.edges.filter(V=>V.label).map((V,H)=>{const D=y-22,q=D-6-(V.track+1)*v+8,re=V.rail?D+.75*(q-D):y+44/2+8+40+14,Y=V.rail?V.from+1+Math.abs(V.to-V.from):V.from+1;return u.jsx("span",{className:`${te.signalTag} ${te.enterFade} ${V.travelled?te.pillLit:""}`,style:{left:(F(V.from)+F(V.to))/2,top:re,...N(Y,0)},children:V.label},H)}),s.steps.map((V,H)=>{const D=s.state(H),q=_8[V.actor];return u.jsxs("button",{type:"button","data-state":D||"none",className:`${te.nodeWrap} ${o===H?te.hovered:""}`,style:{left:k(H)-g/2,top:y-44/2,width:g},onPointerEnter:()=>a(H),onPointerLeave:()=>a(null),onFocus:()=>a(H),onBlur:()=>a(null),children:[u.jsx("span",{className:`${te.node} ${te.enterNode} ${V.actor==="you"?te.youNode:""}`,style:{width:44,height:44,...N(H,0)},children:D==="current"?u.jsx(dc,{size:"sm",label:"Working"}):u.jsx(q,{weight:D==="done"?"fill":"regular",className:te.nodeGlyph,"aria-hidden":"true"})}),u.jsx("span",{className:`${te.nodeChip} ${te.enterNode}`,style:N(H+.35,0),children:V.title})]},V.id)}),u.jsx("span",{className:`${te.endTag} ${te.enterFade}`,style:{left:M,top:y-8,...N(s.n,0)},children:"End"})]})}function Ha({height:s,m:o,hover:a,g:c,grid:p,soft:f,style:m,children:g}){const v=a!=null&&a<o.n?c.card(a):null;return u.jsxs("div",{className:`${te.board} ${p?f?te.gridSoft:te.grid:""}`,style:{width:en,height:s+(v?220:0),...m},children:[g,v&&u.jsx(E8,{m:o,i:a,x:v.x,y:v.y+v.h+10})]})}function fc({m:s,g:o,o:a,pill:c,chip:p,crosses:f,className:m}){return s.edges.filter(g=>g.label||p&&(f==null?void 0:f(g))).map((g,v)=>{const b=Pa(s,o,g,a);let k,y,z="-50%";if(g.rail){const N=b[2][0]>=b[1][0];k=b[1][0]+(N?8:-8),y=b[1][1],z=N?"0%":"-100%"}else if(b.length===2&&g.to===s.n){const N=o.card(s.n);k=N.x,y=N.y+N.h+a.label,z="0%"}else if(b.length===2){const N=o.card(g.from);k=(b[0][0]+b[1][0])/2,y=N.y+N.h+a.label}else k=b[1][0],y=(b[1][1]+b[2][1])/2;const M=g.label||"handoff",F=c?`${te.pill} ${g.travelled?te.pillLit:""}`:p?te.eventChip:m||te.labelPlain;return u.jsx("span",{className:F,style:{left:k,top:y,transform:`translate(${z}, -50%)`},children:M},v)})}function hc({g:s,m:o}){const a=s.card(o.n);return u.jsx("span",{className:te.endTag,style:{left:a.x,top:a.y},children:"End"})}function C8({m:s,wf:o}){var p;const a=s.run;if(!a)return u.jsx("p",{className:te.runLine,children:"Not running in any repo"});const c=(p=o.steps.find(f=>f.id===a.current))==null?void 0:p.title;return u.jsxs("p",{className:te.runLine,children:[a.sample?"Sample run, not read":`Running in ${a.repo} on ${a.branch}`," · ",a.counts.done," done",c?`, on ${c}`:"",", ",a.counts.remaining," remaining"]})}function M8({look:s,workflow:o,run:a,hover:c,shipped:p,replay:f=0,slow:m=1}){const g=Qi[u1[o]]||Qi["sprint-unit"],v=i.useMemo(()=>L8(g,a),[g,a]),[b,k]=i.useState(null),y=g.steps.findIndex(F=>F.title===c),z=b??(y>=0?y:null),M=p?S8:{"A · Pipeline":u0,"B · Swimlane":z8,"C · Signal":j8}[s]||u0;return u.jsxs("div",{className:te.root,children:[u.jsxs("header",{className:te.head,children:[u.jsx("span",{className:te.headTitle,children:g.title}),u.jsx("span",{className:te.headMeta,children:p?"as built":s})]}),u.jsx(C8,{m:v,wf:g}),u.jsx(M,{m:v,hover:z,setHover:k,slow:m},f)]})}const N8=`/* The workflow board's lab looks (WorkflowBoard.jsx). Every ink, fill, radius,
   space, type and motion is an SCDS token, so the lab's panel tunes it.
   Positions and sizes are the board's own geometry, set inline from JS. */

.root {
  display: flex;
  flex-direction: column;
  gap: var(--sc-space-component-gap-md);
  color: var(--sc-color-text-primary);
}
.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.headTitle { font: var(--sc-font-text-title-card); }
.headMeta, .runLine {
  font: var(--sc-font-text-label-chrome);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  color: var(--sc-color-text-secondary);
  margin: 0;
}

.board { position: relative; }
.svg { position: absolute; inset: 0; overflow: visible; pointer-events: none; }
.grid {
  background-image:
    linear-gradient(var(--sc-color-border-subtle) var(--sc-border-width-default), transparent var(--sc-border-width-default)),
    linear-gradient(90deg, var(--sc-color-border-subtle) var(--sc-border-width-default), transparent var(--sc-border-width-default));
  background-size: var(--sc-space-layout-stack-lg) var(--sc-space-layout-stack-lg);
}
.gridSoft {
  background-image:
    linear-gradient(var(--sc-color-border-subtle) var(--sc-border-width-default), transparent var(--sc-border-width-default)),
    linear-gradient(90deg, var(--sc-color-border-subtle) var(--sc-border-width-default), transparent var(--sc-border-width-default));
  background-size: var(--sc-space-layout-stack-xl) var(--sc-space-layout-stack-xl);
}

/* Every step is a button: one tab stop, its panel opens on hover and focus. */
.cardShipped, .chip, .block, .nodeWrap {
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  text-align: start;
  cursor: pointer;
  transition:
    transform var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    background-color var(--sc-motion-hover-duration) var(--sc-motion-hover-easing),
    box-shadow var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}
.cardShipped:focus-visible, .chip:focus-visible, .block:focus-visible, .nodeWrap:focus-visible {
  outline: var(--sc-border-width-focus) solid var(--sc-color-border-focus);
  outline-offset: var(--sc-border-width-focus);
}
.titleUi {
  font: var(--sc-font-text-label-ui);
  letter-spacing: var(--sc-font-text-label-ui-letter-spacing);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.word {
  font: var(--sc-font-text-label-chrome);
  color: var(--sc-color-text-secondary);
}

/* A You step is the gate: yellow, dark teal ink, in every look. */
.you { background: var(--sc-color-signal-progress) !important; color: var(--sc-p-color-teal-800) !important; }
.you .word, .you .gateTag, .you .chipGlyph, .you .blockTitle { color: var(--sc-p-color-teal-800) !important; }

/* ---------- Shipped ---------- */
.cardShipped {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--sc-space-component-padding-block-md) var(--sc-space-component-padding-inline-sm);
  background: var(--sc-color-surface-raised);
  color: var(--sc-color-text-primary);
  border-radius: var(--sc-radius-surface-large);
  box-shadow: var(--sc-shadow-control-raised);
}
.cardShipped.hovered { background: var(--sc-color-brand-accent-fill); color: var(--sc-color-text-on-accent); transform: translateY(calc(-1 * var(--sc-space-component-gap-sm))); }
.cardShipped.hovered .word { color: var(--sc-color-text-on-accent); }
.lineShipped { fill: none; stroke: var(--sc-color-text-primary); stroke-width: var(--sc-border-width-default); }
.heavy { stroke-width: var(--sc-border-width-accent); }
.rowName, .rowNameQuiet {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  font: var(--sc-font-text-label-chrome);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  color: var(--sc-color-text-primary);
}
.rowNameQuiet { color: var(--sc-color-text-tertiary); text-transform: uppercase; }
.labelPlain {
  position: absolute;
  transform: translate(-50%, -50%);
  font: var(--sc-font-text-label-chrome);
  color: var(--sc-color-text-primary);
  white-space: nowrap;
}
.endTag {
  position: absolute;
  font: var(--sc-font-text-label-chrome);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  color: var(--sc-color-text-secondary);
}

/* ---------- A · Pipeline ---------- */
.chip {
  display: flex;
  flex-direction: column;
  gap: var(--sc-space-component-gap-sm);
  padding: var(--sc-space-component-padding-block-sm) var(--sc-space-component-padding-inline-sm);
  background: var(--sc-color-surface-raised);
  color: var(--sc-color-text-primary);
  border-radius: var(--sc-radius-surface);
  box-shadow: inset 0 0 0 var(--sc-border-width-default) var(--sc-color-border-default);
}
.chip[data-state="done"] { box-shadow: inset 0 0 0 var(--sc-border-width-default) var(--sc-color-status-success); }
.chip[data-state="current"] {
  box-shadow: inset 0 0 0 var(--sc-border-width-accent) var(--sc-color-brand-accent), 0 0 var(--sc-space-component-gap-lg) var(--sc-color-brand-accent);
}
.chip[data-state="unrecorded"] { box-shadow: inset 0 0 0 var(--sc-border-width-default) var(--sc-color-status-warning); }
.chip.hovered {
  transform: translateY(calc(-1 * var(--sc-space-component-gap-sm)));
  box-shadow: inset 0 0 0 var(--sc-border-width-accent) var(--sc-color-brand-accent), 0 0 var(--sc-space-layout-stack-sm) var(--sc-color-brand-accent);
}
.chipHead { display: flex; align-items: center; justify-content: space-between; min-height: var(--sc-size-icon-sm); }
.chipGlyph { width: var(--sc-size-icon-sm); height: var(--sc-size-icon-sm); color: var(--sc-color-status-success); }
.chip[data-state="unrecorded"] .chipGlyph { color: var(--sc-color-status-warning); }
.gateTag {
  font: var(--sc-font-text-label-chrome);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  text-transform: uppercase;
}
.linePipe { fill: none; stroke: var(--sc-color-border-strong); stroke-width: var(--sc-border-width-default); }
.dashed { stroke-dasharray: var(--sc-space-component-gap-sm) var(--sc-space-component-gap-sm); }
.lit { stroke: var(--sc-color-signal-progress); stroke-width: var(--sc-border-width-focus); }
.pill, .eventChip, .signalTag {
  position: absolute;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font: var(--sc-font-text-mono-caption);
  padding: var(--sc-space-component-padding-block-status-pill) var(--sc-space-component-padding-inline-status-pill);
  border-radius: var(--sc-radius-status-pill);
  background: var(--sc-color-surface-floating);
  color: var(--sc-color-text-secondary);
  box-shadow: inset 0 0 0 var(--sc-border-width-default) var(--sc-color-border-default);
}
.pillLit { background: var(--sc-color-signal-progress); color: var(--sc-color-signal-on-progress); box-shadow: none; }

/* ---------- B · Swimlane ---------- */
.lane {
  position: absolute;
  left: 0;
  right: 0;
  border-top: var(--sc-border-width-default) solid var(--sc-color-border-default);
  border-bottom: var(--sc-border-width-default) solid var(--sc-color-border-default);
  background: var(--sc-color-surface-sunk);
}
.laneName {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font: var(--sc-font-text-label-chrome);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  text-transform: uppercase;
  color: var(--sc-color-text-tertiary);
}
.block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--sc-space-component-padding-inline-sm);
  border-radius: var(--sc-radius-surface);
  background: var(--sc-color-surface-raised);
  color: var(--sc-color-text-primary);
  text-align: center;
}
.block[data-state="current"] { background: var(--sc-color-brand-accent-fill); color: var(--sc-color-text-on-accent); }
.block.hovered {
  transform: translateY(calc(-1 * var(--sc-space-component-gap-sm)));
  box-shadow: 0 0 0 var(--sc-border-width-accent) var(--sc-color-brand-accent);
}
.blockTitle {
  font: var(--sc-font-text-label-chrome);
  letter-spacing: var(--sc-font-text-label-chrome-letter-spacing);
  text-transform: uppercase;
}
/* Done is a badge on the block's corner, off the title. */
.blockCheck {
  position: absolute;
  top: calc(-1 * var(--sc-space-component-gap-md));
  right: calc(-1 * var(--sc-space-component-gap-md));
  box-sizing: border-box;
  width: var(--sc-size-icon-sm);
  height: var(--sc-size-icon-sm);
  padding: var(--sc-space-component-padding-block-sm);
  border-radius: var(--sc-radius-pill);
  background: var(--sc-color-status-pill-success-fill);
  color: var(--sc-color-status-pill-success-ink);
}
.lineLane { fill: none; stroke: var(--sc-color-text-secondary); stroke-width: var(--sc-border-width-default); }
.laneLit { stroke: var(--sc-color-brand-accent); stroke-width: var(--sc-border-width-focus); }
.arrowHead { fill: var(--sc-color-text-secondary); }
.eventChip { color: var(--sc-color-text-primary); }

/* ---------- C · Signal ---------- */
.nodeWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sc-space-component-gap-md);
  padding: 0;
  background: none;
  color: var(--sc-color-text-primary);
}
.node {
  display: grid;
  place-items: center;
  border-radius: var(--sc-radius-pill);
  background: var(--sc-color-surface-raised);
  box-shadow: inset 0 0 0 var(--sc-border-width-default) var(--sc-color-border-default);
  color: var(--sc-color-text-secondary);
  transition: box-shadow var(--sc-motion-hover-duration) var(--sc-motion-hover-easing), transform var(--sc-motion-hover-duration) var(--sc-motion-hover-easing);
}
.nodeWrap[data-state="done"] .node { background: var(--sc-color-status-pill-success-fill); color: var(--sc-color-status-pill-success-ink); box-shadow: none; }
.nodeWrap[data-state="current"] .node { box-shadow: 0 0 0 var(--sc-border-width-accent) var(--sc-color-brand-accent), 0 0 var(--sc-space-layout-stack-sm) var(--sc-color-brand-accent); }
.youNode { background: var(--sc-color-signal-progress) !important; color: var(--sc-p-color-teal-800) !important; box-shadow: none; }
.nodeGlyph { width: var(--sc-size-icon-md); height: var(--sc-size-icon-md); }
.nodeWrap.hovered .node { transform: scale(1.08); box-shadow: 0 0 0 var(--sc-border-width-accent) var(--sc-color-brand-accent), 0 0 var(--sc-space-layout-stack-sm) var(--sc-color-brand-accent); }
.nodeChip {
  max-width: 100%;
  box-sizing: border-box;
  padding: var(--sc-space-component-padding-block-sm) var(--sc-space-component-padding-inline-sm);
  border-radius: var(--sc-radius-surface);
  background: var(--sc-color-surface-floating);
  box-shadow: var(--sc-shadow-control-raised);
  font: var(--sc-font-text-label-ui);
  text-align: center;
}
.chevron { fill: none; stroke: var(--sc-color-border-strong); stroke-width: var(--sc-border-width-focus); stroke-linecap: round; stroke-linejoin: round; }
.chevronLit { stroke: var(--sc-color-brand-accent); }
.arc { fill: none; stroke: var(--sc-color-border-strong); stroke-width: var(--sc-border-width-default); stroke-dasharray: var(--sc-space-component-gap-sm) var(--sc-space-component-gap-sm); }
.arc.chevronLit { stroke: var(--sc-color-brand-accent); }

/* ---------- the panel, every look ---------- */
.panel {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--sc-space-component-gap-sm);
  width: calc(var(--sc-space-layout-stack-xl) * 5.5);
  box-sizing: border-box;
  padding: var(--sc-space-component-padding-lg);
  border-radius: var(--sc-radius-surface-large);
  background: var(--sc-color-surface-floating);
  box-shadow: inset 0 0 0 var(--sc-border-width-default) var(--sc-color-brand-accent), var(--sc-shadow-control-raised);
}
.panelTitle { font: var(--sc-font-text-body-dense-bold); }
.panelRow, .panelFact { font: var(--sc-font-text-label-chrome); color: var(--sc-color-text-tertiary); }
.panelLine { font: var(--sc-font-text-body-dense); color: var(--sc-color-text-secondary); }
.panelActions { display: flex; gap: var(--sc-space-component-gap-lg); }
.link { font: var(--sc-font-text-label-chrome); color: var(--sc-color-brand-accent-ink); }

/* ---------- C · the entrance ----------
   Cinematic Direction's rack focus (the shell's TileEntrance: out of focus,
   a little back, coming sharp), read left to right. One stagger is a fifth of
   a cut, the Dashboard's own; --at and --span are counted in staggers and
   --wb-slow is the lab's slow motion, all three set inline from JS. The calc
   is written out on each rule, not held in a custom property, so the lab
   reads the motion tokens themselves. */
.enterNode {
  animation: wbRack calc(var(--sc-motion-entrance-duration) * var(--wb-slow, 1)) var(--sc-motion-entrance-easing) both;
  animation-delay: calc(var(--at) * var(--sc-motion-cut-duration) / 5 * var(--wb-slow, 1));
}
.enterChevron {
  transform-box: fill-box;
  transform-origin: center;
  animation: wbChevron calc(var(--sc-motion-hover-duration) * var(--wb-slow, 1)) var(--sc-motion-hover-easing) both;
  animation-delay: calc(var(--at) * var(--sc-motion-cut-duration) / 5 * var(--wb-slow, 1));
}
.arcReveal {
  fill: none;
  stroke: var(--sc-color-text-on-accent);
  stroke-width: var(--sc-space-component-gap-md);
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: wbDraw calc(var(--span) * var(--sc-motion-cut-duration) / 5 * var(--wb-slow, 1)) var(--sc-motion-entrance-easing) forwards;
  animation-delay: calc(var(--at) * var(--sc-motion-cut-duration) / 5 * var(--wb-slow, 1));
}
.enterFade {
  animation: wbFade calc(var(--sc-motion-entrance-duration) * var(--wb-slow, 1)) var(--sc-motion-entrance-easing) both;
  animation-delay: calc(var(--at) * var(--sc-motion-cut-duration) / 5 * var(--wb-slow, 1));
}
@keyframes wbRack {
  from {
    opacity: 0;
    filter: blur(var(--sc-space-component-gap-md));
    transform: translateX(calc(-1 * var(--sc-space-layout-stack-sm))) scale(var(--sc-motion-recede-scale));
  }
  to { opacity: 1; filter: blur(0); transform: none; }
}
@keyframes wbChevron {
  from { opacity: 0; transform: translateX(calc(-1 * var(--sc-space-component-gap-sm))); }
  to { opacity: 1; transform: none; }
}
@keyframes wbDraw { to { stroke-dashoffset: 0; } }
@keyframes wbFade { from { opacity: 0; } to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .enterNode, .enterChevron, .enterFade { animation: none; }
  .arcReveal { animation: none; stroke-dashoffset: 0; }
  .cardShipped, .chip, .block, .nodeWrap, .node { transition: none; }
  .hovered, .nodeWrap.hovered .node { transform: none; }
}
`,$8=`/* WorkingMark — see WorkingMark.tokens.md for every value's source. */

.mark {
  /* The beat. 1600ms is studio-pm motion.md's heartbeat. A component constant, not a
     token, until a second consumer needs it (decisions.md 2026-10-01 working-mark). */
  --wm-beat: 1600ms;
  /* Eleven loops, spread evenly across one beat. */
  --wm-loops: 11;
  /* The pulse floor and the shimmer's peak, both locked by Levi 2026-10-02. */
  --wm-pulse-floor: 0.8;
  --wm-shimmer: 80%;

  display: inline-block;
  flex: none;
  overflow: visible;
  fill: none;
  stroke: currentColor;
  stroke-width: 0.3;
  stroke-linecap: round;
  stroke-linejoin: round;
  vertical-align: middle;
}

.sm { width: var(--sc-size-icon-sm); height: var(--sc-size-icon-sm); }
.md { width: var(--sc-size-icon-md); height: var(--sc-size-icon-md); }
.lg { width: var(--sc-size-icon-lg); height: var(--sc-size-icon-lg); }

.working { color: var(--sc-color-brand-accent); }
.paused  { color: var(--sc-color-text-secondary); }

/* The shimmer gradient's stops: the accent, rising to the accent mixed with the
   on-accent ink at its brightest. */
.base  { stop-color: currentColor; }
.glint { stop-color: color-mix(in srgb, currentColor calc(100% - var(--wm-shimmer)), var(--sc-color-text-on-accent)); }

.spin,
.loop {
  transform-box: view-box;
  transform-origin: 8px 8px; /* the box's centre, in viewBox units */
}

.working .spin { animation: spin var(--wm-beat) linear infinite; }
/* Neighbouring loops turn opposite ways. \`g\` siblings only, so the <defs> does not count. */
.working .spin:nth-of-type(even) { animation-direction: reverse; }
.working .loop { animation: pulse var(--wm-beat) var(--sc-motion-cut-easing) infinite; }

/* Each loop starts part-way through the beat, so the eleven never move together.
   Stated after the shorthands, which reset it. */
.working .spin,
.working .loop { animation-delay: calc(var(--wm-i) * var(--wm-beat) / var(--wm-loops) * -1); }

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(var(--wm-pulse-floor)); }
}

/* Reduced motion: the drawing at rest, flat accent, no shimmer. The stroke rule beats
   the gradient the path names as an attribute. */
@media (prefers-reduced-motion: reduce) {
  .working .spin,
  .working .loop { animation: none; }
  .working .loop { stroke: currentColor; }
}
`,F8="_app_1ahdv_6",T8="_bar_1ahdv_23",R8="_barRow_1ahdv_32",P8="_strip_1ahdv_46",H8="_panel_1ahdv_47",Z8="_brand_1ahdv_59",V8="_meta_1ahdv_68",O8="_readout_1ahdv_74",D8="_values_1ahdv_75",I8="_spacer_1ahdv_81",B8="_main_1ahdv_85",U8="_stripShipped_1ahdv_104",W8="_stages_1ahdv_115",Y8="_stageWrap_1ahdv_125",Q8="_activeStage_1ahdv_134",G8="_stageLabel_1ahdv_138",K8="_stage_1ahdv_115",q8="_handle_1ahdv_162",J8="_group_1ahdv_205",X8="_row_1ahdv_238",e4="_prop_1ahdv_246",t4="_rowLabel_1ahdv_251",n4="_rowControl_1ahdv_259",r4="_rowWide_1ahdv_271",s4="_num_1ahdv_275",o4="_rowReadout_1ahdv_281",a4="_propName_1ahdv_295",l4="_derivedName_1ahdv_299",i4="_token_1ahdv_306",c4="_changed_1ahdv_320",d4="_curveBox_1ahdv_325",u4="_seeded_1ahdv_329",p4="_tokenHead_1ahdv_335",f4="_tokenName_1ahdv_343",h4="_rawHead_1ahdv_357",m4="_shippedValue_1ahdv_363",g4="_tunedValue_1ahdv_367",v4="_mini_1ahdv_375",x4="_curveCell_1ahdv_388",y4="_curve_1ahdv_325",w4="_curveSpring_1ahdv_403",b4="_curveTuned_1ahdv_411",k4="_curveShipped_1ahdv_412",_4="_playhead_1ahdv_427",A4="_sounds_1ahdv_446",L4="_sound_1ahdv_446",E4="_shippedSound_1ahdv_471",S4="_reset_1ahdv_475",z4="_snap_1ahdv_476",j4="_destructive_1ahdv_497",C4="_notes_1ahdv_534",M4="_tabs_1ahdv_546",N4="_tab_1ahdv_546",$4="_pin_1ahdv_580",F4="_pick_1ahdv_585",T4="_propBlock_1ahdv_592",R4="_easing_1ahdv_593",P4="_tokenActions_1ahdv_602",H4="_slot_1ahdv_610",Z4="_sizer_1ahdv_619",V4="_motionTiles_1ahdv_635",O4="_motionTile_1ahdv_635",D4="_layers_1ahdv_697",I4="_layer_1ahdv_697",B4="_layerHead_1ahdv_708",U4="_scope_1ahdv_712",W4="_steps_1ahdv_720",Y4="_step_1ahdv_720",Q4="_stepRole_1ahdv_756",G4="_rail_1ahdv_767",K4="_railChips_1ahdv_780",q4="_filters_1ahdv_786",J4="_filter_1ahdv_786",X4="_chip_1ahdv_797",e6="_chipChanged_1ahdv_837",t6="_disclosure_1ahdv_851",n6="_groupBody_1ahdv_888",r6="_summary_1ahdv_898",s6="_legendRow_1ahdv_910",o6="_cluster_1ahdv_915",a6="_zoom_1ahdv_924",l6="_listHead_1ahdv_928",i6="_themeCtl_1ahdv_936",c6="_note_1ahdv_534",d6="_colorText_1ahdv_1005",u6="_checkRow_1ahdv_1010",p6="_hint_1ahdv_1016",f6="_keysWrap_1ahdv_1026",h6="_keys_1ahdv_1026",S={app:F8,bar:T8,barRow:R8,strip:P8,panel:H8,brand:Z8,meta:V8,readout:O8,values:D8,spacer:I8,main:B8,stripShipped:U8,stages:W8,stageWrap:Y8,activeStage:Q8,stageLabel:G8,stage:K8,handle:q8,group:J8,row:X8,prop:e4,rowLabel:t4,rowControl:n4,rowWide:r4,num:s4,rowReadout:o4,propName:a4,derivedName:l4,token:i4,changed:c4,curveBox:d4,seeded:u4,tokenHead:p4,tokenName:f4,rawHead:h4,shippedValue:m4,tunedValue:g4,mini:v4,curveCell:x4,curve:y4,curveSpring:w4,curveTuned:b4,curveShipped:k4,playhead:_4,sounds:A4,sound:L4,shippedSound:E4,reset:S4,snap:z4,destructive:j4,notes:C4,tabs:M4,tab:N4,pin:$4,pick:F4,propBlock:T4,easing:R4,tokenActions:P4,slot:H4,sizer:Z4,motionTiles:V4,motionTile:O4,layers:D4,layer:I4,layerHead:B4,scope:U4,steps:W4,step:Y4,stepRole:Q4,rail:G4,railChips:K4,filters:q4,filter:J4,chip:X4,chipChanged:e6,disclosure:t6,groupBody:n6,summary:r6,legendRow:s6,cluster:o6,zoom:a6,listHead:l6,themeCtl:i6,note:c6,colorText:d6,checkRow:u6,hint:p6,keysWrap:f6,keys:h6},fn=["day","week","month"],lo=["work","studio","journal"],Bt=(s,{press:o=!0}={})=>{const a=`--sc-motion-${s}`;return{jsTokens:[`${a}-stretch`,`${a}-squash`,...o?[`${a}-press-lean`,`${a}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${a}-stretch`]:"0.45",[`${a}-squash`]:"0",...o?{[`${a}-press-lean`]:"0.83",[`${a}-press-lean-duration`]:"150ms"}:{}},springs:{[`${a}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},Gi={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},p0=s=>({light:s(Gi.light),dark:s(Gi.dark)}),f0={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}},h0={none:void 0,search:Eh,mail:kh,location:Sh},m0={none:void 0,eye:_h,copy:bh,calendar:gh,clock:wh,caret:vh},$i={flat:{variant:"flat"},"clear · light":{variant:"glass",level:"clear",tone:"light"},"frosted · light":{variant:"glass",level:"frosted",tone:"light"},"thick · light":{variant:"glass",level:"thick",tone:"light"},"clear · dark":{variant:"glass",level:"clear",tone:"dark"},"frosted · dark":{variant:"glass",level:"frosted",tone:"dark"},"thick · dark":{variant:"glass",level:"thick",tone:"dark"}},Fi={position:"absolute",inset:0,overflow:"hidden",borderRadius:"var(--sc-radius-card)"},za={"page (follows theme)":u.jsxs("div",{"aria-hidden":"true",style:{...Fi,background:"var(--sc-color-surface-page)"},children:[u.jsx("div",{style:{position:"absolute",inset:"0 50% 0 0",background:"var(--sc-color-surface-sunk)"}}),u.jsx("div",{style:{position:"absolute",inset:"30% 0 30% 25%",background:"var(--sc-color-surface-floating)"}}),u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),"type and colour":u.jsxs("div",{"aria-hidden":"true",style:Fi,children:[u.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 24px, var(--sc-color-atmosphere-river) 24px 48px, var(--sc-color-atmosphere-lapis) 48px 72px)"}}),u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),type:u.jsx("div",{"aria-hidden":"true",style:{...Fi,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-title-card)",color:"var(--sc-color-text-primary)",wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"}),none:null},Ti={progress:"In progress",live:"Live",success:"Complete",warning:"Pending",error:"Failed",info:"Info",neutral:"Planned"},g0={none:void 0,check:cc,pause:jh,archive:hh,warning:s1},m6=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#D9CFC2"/><circle cx="32" cy="26" r="12" fill="#6B5A4A"/><path d="M8 64c0-14 11-22 24-22s24 8 24 22z" fill="#3E4A55"/></svg>')}`,v0={mark:vv,portrait:m6},x0=["xs","sm","md","lg"],Ri={success:"Sprint 5 merged and deployed to brand.shokunincrafthouse.com.",info:"The brand site rebuilds on every push to main.",warning:"Two approval gates remain before this can merge.",error:"Token build exited non-zero. The previous deploy is still live."},y0={light:"2px 2px 6px 0 rgb(100 91 79 / 0.50)",dark:"3px 3px 7px 0 rgb(0 0 0 / 0.50)"};let Pi=!1;function g6({p:s,ctx:o}){const a=i.useRef(null);return i.useEffect(()=>{var b;const c=[...((b=a.current)==null?void 0:b.children)||[]],p=o.slow||1,f=s.reduced,m=f==="opacity only"?{opacity:s.opacityFrom,transform:"none",filter:"none"}:{opacity:s.opacityFrom,transform:`translateY(${s.distance}px) scale(${s.scaleFrom}) rotate(${s.rotateFrom}deg)`,filter:`blur(${s.blurFrom}px)`},g={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},v=c.map((k,y)=>k.animate([m,g],{duration:f==="none"?0:s.duration*p,delay:f==="none"?0:(s.delay+y*s.stagger)*p,easing:s.easing,fill:"both"}));return()=>v.forEach(k=>k.cancel())},[s,o.replay,o.slow]),u.jsx("div",{className:S.motionTiles,ref:a,children:Array.from({length:s.count},(c,p)=>u.jsx("span",{className:S.motionTile},p))})}const Hi=s=>s.reduced==="none"?0:s.delay+s.stagger*(s.count-1)+s.duration,v6=["size","space","radius","border","color","shadow","font","motion","other"],vr={Switch:{css:[ov],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(s,o)=>o("checked",!s.checked),render:(s,o,a)=>u.jsx(If,{checked:s.checked,disabled:s.disabled,glyphs:s.glyphs,label:s.label,sound:!1,onChange:c=>{o("checked",c.target.checked),a()}})},Stepper:{css:[av,Ni],jsTokens:[...Bt("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...Bt("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:Bt("stepper",{press:!1}).seed.springs,scoped:p0(s=>({"--sc-shadow-stepper-track":s.recess,"--sc-color-stepper-key":s.keyFill,"--sc-color-stepper-key-shade":s.keyShade,"--sc-shadow-stepper-key":s.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(s,o)=>o("value",s.value+s.step>s.max?s.min:s.value+s.step),render:(s,o,a)=>u.jsx(Uh,{value:s.value,min:s.min,max:s.max,step:s.step,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{o("value",c),a()}})},SegmentedControl:{css:[lv],...Bt("segmented-control"),seed:{...Bt("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:fn,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(s,o)=>o("value",fn[(fn.indexOf(s.value)+1)%fn.length]),render:(s,o,a)=>u.jsx(t2,{label:"Range",value:s.value,size:s.size,disabled:s.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:c=>{c!==s.value&&a(),o("value",c)}})},Tooltip:{css:[cv],jsTokens:[...Bt("tooltip",{press:!1}).jsTokens,"--sc-motion-tooltip-grow-from","--sc-shadow-tooltip-plate","--sc-size-tooltip-arrow-tip","--sc-size-tooltip-arrow-fillet"],shippedSound:"drams-031-01.wav",trigger:"the tooltip opens (pointer enters or focus lands on the trigger)",props:[{name:"show",type:"enum",options:["hover","open","closed"],default:"hover"},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(s,o)=>o("show",s.show==="open"?"closed":"open"),render:(s,o,a)=>u.jsx("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-md) var(--sc-space-layout-stack-sm) var(--sc-space-layout-stack-sm)"},children:u.jsx("span",{style:{position:"relative",display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:u.jsx(P2,{content:s.content,multiline:s.multiline,open:s.show==="hover"?void 0:s.show==="open",sound:!1,children:u.jsx("span",{style:{display:"inline-block"},onMouseEnter:()=>{s.show==="hover"&&a()},onFocus:()=>{s.show==="hover"&&a()},children:u.jsx(n0,{variant:"primary",size:"sm",arrow:!1,sound:!1,children:"Copy"})})})})})},NavBar:{css:[dv,c0],...Bt("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:lo,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(s,o)=>o("current",lo[(lo.indexOf(s.current)+1)%lo.length]),render:(s,o)=>u.jsx("div",{onClickCapture:a=>{const c=a.target.closest("a");c&&(a.preventDefault(),o("current",c.textContent.trim().toLowerCase()))},children:u.jsx(Am,{brand:u.jsx("span",{children:"Shokunin"}),underline:s.underline,links:lo.map(a=>({href:`#${a}`,label:a[0].toUpperCase()+a.slice(1),current:a===s.current}))})})},PlusUnderline:{css:[c0],...Bt("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:fn,default:"day"}],play:(s,o)=>o("active",fn[(fn.indexOf(s.active)+1)%fn.length]),render:(s,o)=>u.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:fn.map(a=>u.jsxs("button",{type:"button",role:"tab","aria-selected":a===s.active,onClick:()=>o("active",a),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[a[0].toUpperCase()+a.slice(1),u.jsx(d1,{active:a===s.active})]},a))})},Slider:{css:[uv],jsTokens:Bt("slider",{press:!1}).jsTokens,seed:{overrides:{...Bt("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:Bt("slider",{press:!1}).seed.springs,scoped:p0(s=>{const o=s===Gi.light?f0.light:f0.dark;return{"--sc-shadow-slider-track":s.recess,"--sc-color-slider-thumb-rim-top":o.rimTop,"--sc-color-slider-thumb-rim-bottom":o.rimBottom,"--sc-color-slider-thumb-face-top":o.faceTop,"--sc-color-slider-thumb-face-bottom":o.faceBottom,"--sc-shadow-slider-thumb":s.key,"--sc-shadow-slider-thumb-pressed":s.keyPressed}})},shippedSound:"drams-009-01.wav",trigger:"a keyboard step that changes the value; a drag is silent",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(s,o)=>o("value",s.value>=.75?.25:.75),render:(s,o,a)=>u.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Pi=!0},onKeyUpCapture:()=>{Pi=!1},children:u.jsx(Mm,{value:s.value,disabled:s.disabled,label:s.label,sound:!1,onChange:c=>{const p=Math.round(c*100)/100;Pi&&p!==s.value&&a(),o("value",p)}})})},Input:{css:[pv,Ni],shippedSound:null,trigger:"ships silent",props:[{name:"label",type:"text",default:"Email address"},{name:"description",type:"text",default:""},{name:"placeholder",type:"text",default:"you@studio.com"},{name:"value",type:"text",default:"levi@levibahn.com"},{name:"icon",type:"enum",options:Object.keys(h0),default:"mail"},{name:"prefix",type:"text",default:""},{name:"suffix",type:"text",default:""},{name:"trailing",type:"enum",options:Object.keys(m0),default:"none"},{name:"clearable",type:"boolean",default:!0},{name:"helper",type:"text",default:""},{name:"error",type:"text",default:""},{name:"disabled",type:"boolean",default:!1},{name:"surface",type:"enum",options:["page","raised"],default:"page"}],play:null,render:(s,o)=>u.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2.5)",...s.surface==="raised"?{background:"var(--sc-color-surface-raised)",padding:"var(--sc-space-component-padding-md)"}:{}},children:u.jsx(Ym,{surface:s.surface,label:s.label,description:s.description||void 0,placeholder:s.placeholder,value:s.value,icon:h0[s.icon],prefix:s.prefix||void 0,suffix:s.suffix||void 0,trailing:m0[s.trailing],clearable:s.clearable,onClear:()=>o("value",""),helper:s.helper||void 0,error:s.error||void 0,disabled:s.disabled,onChange:a=>o("value",a.target.value)})})},Card:{css:[fv],jsTokens:["clear","frosted","thick"].flatMap(s=>["refraction","depth","splay"].map(o=>`--sc-size-card-glass-${s}-${o}`)),shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys($i)],default:"all"},{name:"backdrop",type:"enum",options:Object.keys(za),default:"page (follows theme)"},{name:"interactive",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"title",type:"text",default:"Studio journal"},{name:"body",type:"text",default:"Notes from the bench."}],play:null,render:s=>{const o=s.show==="all"?Object.keys($i):[s.show];return u.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-sm)"},children:[za[s.backdrop],u.jsx("div",{style:{position:"relative",display:"grid",gridTemplateColumns:`repeat(${Math.min(o.length,4)}, calc(var(--sc-space-layout-stack-xl) * 2.5))`,gap:"var(--sc-space-layout-stack-sm)"},children:o.map(a=>[s.show==="all"&&a==="clear · dark"?u.jsx("span",{},"gap"):null,u.jsxs(dg,{...$i[a],interactive:s.interactive,disabled:s.interactive?s.disabled:void 0,onClick:()=>{},children:[u.jsx("span",{style:{display:"block",font:"var(--sc-font-text-label-ui)",color:"var(--sc-color-text-secondary)"},children:a}),u.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-default)"},children:s.title}),u.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-dense)",color:"var(--sc-color-text-secondary)"},children:s.body})]},a)])})]})}},StatusPill:{css:[hv],shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Ti)],default:"all"},{name:"emphasis",type:"enum",options:["filled","outline"],default:"filled"},{name:"glow",type:"enum",options:["by tone","on","off"],default:"by tone"},{name:"icon",type:"enum",options:Object.keys(g0),default:"none"},{name:"content",type:"text",default:"In progress"}],play:(s,o)=>o("glow",s.glow==="off"?"on":"off"),render:s=>{const o=s.show==="all"?Object.keys(Ti):[s.show],a=s.glow==="by tone"?void 0:s.glow==="on";return u.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--sc-space-layout-stack-sm)"},children:o.map(c=>u.jsx(zg,{tone:c,emphasis:s.emphasis,glow:a,icon:g0[s.icon],children:s.show==="all"?Ti[c]:s.content},c))})}},Avatar:{css:[mv],shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...x0],default:"all"},{name:"content",type:"enum",options:["image","initials"],default:"image"},{name:"image",type:"enum",options:Object.keys(v0),default:"portrait"},{name:"name",type:"text",default:"Levi Bahn"}],play:(s,o)=>o("content",s.content==="image"?"initials":"image"),render:s=>{const o=s.show==="all"?x0:[s.show];return u.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--sc-space-component-gap-md)",padding:"var(--sc-space-layout-stack-sm)"},children:o.map(a=>u.jsx(Hg,{size:a,name:s.name,src:s.content==="image"?v0[s.image]:void 0},a))})}},Toast:{css:[gv],jsTokens:["--sc-motion-toast-hold"],seed:{scoped:{light:{"--sc-shadow-toast-plate":y0.light},dark:{"--sc-shadow-toast-plate":y0.dark}}},shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Ri)],default:"all"},{name:"placement",type:"enum",options:["floating","inline"],default:"floating"},{name:"surface",type:"enum",options:["flat","glass"],default:"flat"},{name:"glyph",type:"enum",options:["outline","fill"],default:"outline"},{name:"backdrop",type:"enum",options:Object.keys(za),default:"none"},{name:"autoDismiss",type:"boolean",default:!1},{name:"dismissDisabled",type:"boolean",default:!1},{name:"message",type:"text",default:"Token build exited non-zero after the contrast check failed on three pairs. The previous deploy is still live."}],play:null,render:(s,o,a,c)=>{const p=s.show==="all"?Object.keys(Ri):[s.show];return u.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-md)"},children:[za[s.backdrop],u.jsx("div",{style:{position:"relative",display:"grid",justifyItems:"start",gap:"var(--sc-space-layout-stack-md)",inlineSize:s.placement==="inline"?"calc(var(--sc-space-layout-stack-xl) * 6)":void 0,maxInlineSize:"100%"},children:p.map(f=>u.jsx(sv,{tone:f,placement:s.placement,surface:s.surface,glyph:s.glyph,autoDismiss:s.autoDismiss,dismissDisabled:s.dismissDisabled,onDismiss:()=>{},children:s.show==="all"?Ri[f]:s.message},`${f}-${c.replay}`))})]})}},Button:{css:[iv],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(s,o,a)=>u.jsx(n0,{variant:s.variant,size:s.size,disabled:s.disabled,loading:s.loading,arrow:s.arrow,sound:!1,onClick:()=>a(),children:s.children})},WorkflowBoard:{css:[N8,$8,Ni],zoom:1,shippedSound:null,trigger:"ships silent",props:[{name:"look",type:"enum",options:ao,default:ao[0]},{name:"workflow",type:"enum",options:Object.keys(u1),default:"Sprint unit"},{name:"run",type:"enum",options:k8,default:"sample"},{name:"hover",type:"enum",options:["none",...new Set(Object.values(Qi).flatMap(s=>s.steps.map(o=>o.title)))],default:"none"}],concepts:[{props:{look:ao[0]},notes:"Pipeline (reference 1, the CI graph): status chips with a glyph, rounded connectors, the travelled path lit in signal yellow, branch labels as pills on the line, return paths dashed."},{props:{look:ao[1]},notes:"Swimlane (reference 3, the ride flow): each actor a band with its name turned, a faint grid, handoffs between lanes dashed with an event chip, arrowheads, the step now in the accent."},{props:{look:ao[2]},notes:"Signal (reference 4): one line of round nodes, the actor as the glyph, the flow as a chevron trail lit up to the step now, branches as dashed arcs above, the title as a chip under each node."}],play:()=>{},render:(s,o,a,c)=>u.jsx(M8,{look:s.look,workflow:s.workflow,run:s.run,hover:s.hover,shipped:!!(c!=null&&c.shipped),replay:c==null?void 0:c.replay,slow:c==null?void 0:c.slow})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(s,o,a,c)=>u.jsx(g6,{p:s,ctx:c})}},p1=s=>{var o;return((o=s==null?void 0:s.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:o[1].split(",").map(Number))||null};function f1(s){var c;const o=p1(s);if(o){const p=[];for(let f=0;f<=40;f+=1){const m=f/40,g=3*(1-m)**2*m*o[0]+3*(1-m)*m**2*o[2]+m**3,v=3*(1-m)**2*m*o[1]+3*(1-m)*m**2*o[3]+m**3;p.push([g,v])}return p}const a=(c=s==null?void 0:s.match(/linear\(([^)]+)\)/))==null?void 0:c[1].split(",").map(p=>parseFloat(p));return a?a.map((p,f)=>[f/(a.length-1),p]):[[0,0],[1,1]]}function w0(s){const o=f1(s),a=o.map(m=>m[1]),c=Math.min(0,...a),f=Math.max(1,...a)-c||1;return o.map(([m,g],v)=>`${v?"L":"M"}${m.toFixed(3)} ${(1-(g-c)/f).toFixed(3)}`).join(" ")}const We=(s,o=2)=>+(+s).toFixed(o),Ki=s=>s.replace(/^--sc-/,""),Zi=s=>s.replace(/^--sc-p-/,""),Vi=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function mc(s){Vi.fillStyle="#000",Vi.fillStyle=s;const o=Vi.fillStyle;if(o.startsWith("#"))return{hex:o,a:1};const a=o.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return a?{hex:"#"+[a[1],a[2],a[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:a[4]!==void 0?+a[4]:1}:{hex:"#000000",a:1}}function ls(s,o){if(o>=1)return s.toUpperCase();const a=parseInt(s.slice(1),16);return`rgb(${a>>16&255} ${a>>8&255} ${a&255} / ${+o.toFixed(3)})`}const Za=s=>String(s).trim().endsWith("ms")?parseFloat(s):parseFloat(s)*1e3,x6=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function st({label:s,children:o,readout:a,wide:c}){return u.jsxs("div",{className:S.row,children:[u.jsx("span",{className:S.rowLabel,children:s}),u.jsx("span",{className:`${S.rowControl} ${c?S.rowWide:""}`,children:o}),!c&&u.jsx("span",{className:S.rowReadout,children:a})]})}const b0=s=>{const o=f1(s).map(p=>p[1]),a=Math.min(0,...o),c=Math.max(1,...o);return`translate(0 ${We(1-c,4)}) scale(1 ${We(c-a||1,4)})`},y6=i.memo(function({value:o,shipped:a,durationMs:c,replay:p,springy:f}){const m=i.useRef(null),g=i.useRef(null),v=i.useRef(p);return i.useEffect(()=>{var y;if(p===v.current||(v.current=p,x6()||!((y=m.current)!=null&&y.animate)))return;const b=Math.max(1,c||0);m.current.animate([{opacity:1,transform:"translateX(0%)"},{opacity:1,transform:"translateX(100%)"}],{duration:b,easing:"linear"});const k=[{transform:"translateY(100%)"},{transform:"translateY(0%)"}];try{g.current.animate(k,{duration:b,easing:o})}catch{g.current.animate(k,{duration:b,easing:"linear"})}},[p,c,o]),u.jsxs("svg",{className:`${S.curve} ${f?S.curveSpring:""}`,viewBox:"0 0 1 1",preserveAspectRatio:"none","aria-hidden":"true","data-curve":"",children:[u.jsx("rect",{className:S.curveBox,x:"0",y:"0",width:"1",height:"1"}),a&&a!==o&&u.jsx("path",{className:S.curveShipped,d:w0(a),transform:b0(a)}),u.jsx("path",{className:S.curveTuned,d:w0(o),transform:b0(o)}),u.jsxs("g",{ref:m,className:S.playhead,"data-playhead":"",children:[u.jsx("line",{x1:"0",x2:"0",y1:"0",y2:"1"}),u.jsx("circle",{ref:g,cx:"0",cy:"0",r:"0.06"})]})]})}),h1=i.memo(function({label:o,value:a,shipped:c,spring:p,presets:f,asRef:m,onChange:g,durationMs:v,replay:b}){const k=p?"spring":"bezier",y=p1(a)||[.25,.1,.25,1],z=p||{stiffness:260,damping:22,mass:1},M=H=>{const D=po(H);g(D.easing,H,D.settleMs)},F=p?po(p):null,N=2*Math.PI*Math.sqrt(z.mass/z.stiffness),Z=1-z.damping*N/(4*Math.PI*z.mass),V=(H,D)=>M({...z,stiffness:+((2*Math.PI/H)**2*z.mass).toFixed(1),damping:+(4*Math.PI*(1-D)*z.mass/H).toFixed(2)});return u.jsxs("div",{className:S.easing,children:[u.jsxs("div",{className:S.row,children:[u.jsx("span",{className:`${S.rowLabel} ${S.curveCell}`,children:u.jsx(y6,{value:a,shipped:c,durationMs:v,replay:b,springy:!!p})}),u.jsxs("span",{className:`${S.rowControl} ${S.rowWide}`,children:[u.jsxs("select",{"aria-label":`${o} mode`,value:k,onChange:H=>{H.target.value==="spring"?M(z):g(`cubic-bezier(${y.join(", ")})`,null,null)},children:[u.jsx("option",{value:"bezier",children:"bezier"}),u.jsx("option",{value:"spring",children:"spring"})]}),(f==null?void 0:f.length)>0&&u.jsxs("select",{"aria-label":`${o} preset`,value:"",onChange:H=>{const D=f.find(q=>q.name===H.target.value);D&&g(m?`var(${D.name})`:D.value,null,null)},children:[u.jsx("option",{value:"",children:"token…"}),f.map(H=>u.jsx("option",{value:H.name,children:H.name.replace("--sc-p-motion-easing-","")},H.name))]})]})]}),k==="bezier"?u.jsx(st,{label:"bezier",wide:!0,children:y.map((H,D)=>u.jsx("input",{type:"number","aria-label":`${o} bezier point ${D+1}`,className:S.num,step:"0.01",value:H,onChange:q=>{const re=[...y];re[D]=+q.target.value,g(`cubic-bezier(${re.join(", ")})`,null,null)}},D))}):u.jsxs(u.Fragment,{children:[u.jsx(st,{label:"duration",readout:`${Math.round(N*1e3)}ms`,children:u.jsx("input",{type:"range","aria-label":`${o} spring duration`,min:50,max:2e3,step:10,value:Math.round(N*1e3),onChange:H=>V(+H.target.value/1e3,Z)})}),u.jsx(st,{label:"bounce",readout:(Math.abs(Z)<.005?0:Z).toFixed(2),children:u.jsx("input",{type:"range","aria-label":`${o} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+Z.toFixed(2)),onChange:H=>V(N,+H.target.value)})}),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([H,D,q,re])=>u.jsx(st,{label:H,readout:z[H],children:u.jsx("input",{type:"range","aria-label":`${o} spring ${H}`,min:D,max:q,step:re,value:z[H],onChange:Y=>M({...z,[H]:+Y.target.value})})},H)),F&&u.jsxs("span",{className:S.readout,children:["settles ",F.settleMs,"ms · overshoot ",Math.round(F.overshoot*100),"%"]})]})]})});function w6(s){const o=[];let a=0,c="";for(const p of s||"")p==="("&&(a+=1),p===")"&&(a-=1),p===","&&a===0?(o.push(c.trim()),c=""):c+=p;return c.trim()&&o.push(c.trim()),o.filter(p=>p&&p!=="none").map(p=>{var z;const f=/\binset\b/.test(p),m=((z=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:z[0])||"rgb(0 0 0 / 0.2)",g=p.replace(m,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(M=>parseFloat(M)||0),[v=0,b=0,k=0,y=0]=g;return{inset:f,x:v,y:b,blur:k,spread:y,color:m}})}const b6=s=>s.map(o=>`${o.inset?"inset ":""}${We(o.x)}px ${We(o.y)}px ${We(o.blur)}px ${We(o.spread)}px ${o.color}`).join(", "),k6=[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]],_6=i.memo(function({name:o,value:a,onAction:c}){const p=w6(a),f=(g,v)=>c(o,"set",b6(p.map((b,k)=>k===g?{...b,...v}:b))),m=Ki(o);return u.jsx("div",{className:S.layers,children:p.map((g,v)=>{const b=mc(g.color),k=g.inset?"inner edge":(g.x<0||g.y<0)&&b.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return u.jsxs("div",{className:S.layer,children:[u.jsxs("span",{className:S.layerHead,children:["layer ",v+1," · ",k]}),k6.map(([y,z,M,F])=>u.jsx(st,{label:y,readout:u.jsx("input",{type:"number",className:S.num,"aria-label":`${m} layer ${v+1} ${y} value`,min:z,max:M,step:F,value:We(g[y]),onChange:N=>f(v,{[y]:+N.target.value})}),children:u.jsx("input",{type:"range","aria-label":`${m} layer ${v+1} ${y}`,min:z,max:M,step:F,value:We(g[y]),onChange:N=>f(v,{[y]:+N.target.value})})},y)),u.jsx(st,{label:"colour",children:u.jsx("input",{type:"color","aria-label":`${m} layer ${v+1} colour`,value:b.hex,onChange:y=>f(v,{color:ls(y.target.value,b.a)})})}),u.jsx(st,{label:"opacity",readout:We(b.a),children:u.jsx("input",{type:"range","aria-label":`${m} layer ${v+1} opacity`,min:"0",max:"1",step:"0.01",value:b.a,onChange:y=>f(v,{color:ls(b.hex,+y.target.value)})})})]},v)})})}),A6=/^(#[0-9a-f]{3,8}|rgba?\(.*\))$/i;function L6({label:s,hex:o,a,onSet:c}){const[p,f]=i.useState(null),m=p??ls(o,a);return u.jsx("input",{type:"text",className:S.colorText,spellCheck:!1,"aria-label":s,value:m,onChange:g=>{const v=g.target.value;if(f(v),A6.test(v.trim())&&CSS.supports("color",v.trim())){const b=mc(v.trim());c(ls(b.hex,b.a))}},onBlur:()=>f(null),onKeyDown:g=>{g.key==="Enter"&&g.currentTarget.blur()}})}const E6=[11,12,13,14,16,20].map((s,o)=>[s,["chrome","ui","caption","dense","body","lead"][o],`--sc-p-font-size-${s}`]),S6=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],m1=s=>/^--sc-font-.*-size$/.test(s)?E6:/^--sc-size-.*icon/.test(s)?S6:null,k0=s=>{var o,a;return(a=(o=s.match(/^--sc-(?:p-)?(space|size|radius|border-width|border|font-size|font|motion-duration|motion)/))==null?void 0:o[1])==null?void 0:a.replace(/^border$/,"border-width").replace(/^font$/,"font-size").replace(/^motion$/,"motion-duration")};function _0(s,o,a,c,p){if(!(c!=null&&c.length)||typeof a=="string"&&a.startsWith("var(--sc-p-"))return null;const f=p==="time"?Za(o):parseFloat(o);if(!Number.isFinite(f))return null;const m=k0(s);let g=null;for(const v of c){const b=Math.abs(v.v-f);if(b<.01)return null;const k=[We(b,4),k0(v.name)===m?0:1,v.v];(!g||k[0]<g.key[0]||k[0]===g.key[0]&&(k[1]<g.key[1]||k[1]===g.key[1]&&k[2]<g.key[2]))&&(g={key:k,p:v})}return g.p}function io({sizer:s,children:o}){return u.jsxs("span",{className:S.slot,children:[u.jsx("span",{className:S.sizer,"aria-hidden":"true",children:s}),o]})}const z6=i.memo(function({name:o,kind:a,shipped:c,value:p,override:f,origin:m,seed:g,scope:v,adj:b,spring:k,pin:y,refs:z,ladder:M,easingPresets:F,restOf:N,durationMs:Z,replay:V,onAction:H}){const D=f!==void 0,q=g!==void 0,re=D&&m==="seed",Y=D&&!re,B=Ki(o),[pe,ue]=i.useState(!!y);i.useEffect(()=>{y&&ue(!0)},[y]);const[ye,ge]=i.useState(!1),Q=T=>H(o,"set",T),O=i.useCallback((T,ee,J)=>H(o,"easing",{easing:T,sp:ee,settle:J}),[o,H]);let X=null,ve=null;if(a==="color"){const T=mc(p);X=u.jsxs(u.Fragment,{children:[u.jsxs(st,{label:"colour",children:[u.jsx("input",{type:"color","aria-label":`${B} colour`,value:T.hex,onChange:ee=>Q(ls(ee.target.value,T.a))}),u.jsx(L6,{label:`${B} colour value`,hex:T.hex,a:T.a,onSet:Q})]}),u.jsx(st,{label:"alpha",readout:We(T.a),children:u.jsx("input",{type:"range","aria-label":`${B} alpha`,min:"0",max:"1",step:"0.01",value:T.a,onChange:ee=>Q(ls(T.hex,+ee.target.value))})})]})}else if(a==="length"||a==="number"){const T=parseFloat(p)||0,ee=Math.abs(parseFloat(c)||1),J=a==="length"?Math.max(64,ee*4):Math.max(2,ee*2),E=a==="length"?"px":"",j=a==="length"?.5:.005,fe=m1(o);X=u.jsxs(u.Fragment,{children:[u.jsx(st,{label:a,readout:u.jsx("input",{type:"number","aria-label":`${B} value`,className:S.num,step:j,value:We(T,3),onChange:xe=>Q(`${xe.target.value}${E}`)}),children:u.jsx("input",{type:"range","aria-label":B,min:"0",max:J,step:j,value:T,onChange:xe=>Q(`${xe.target.value}${E}`)})}),fe&&u.jsx(st,{label:"scale",wide:!0,children:u.jsx("span",{className:S.steps,role:"group","aria-label":`${B} scale`,children:fe.map(([xe,be,Ae])=>u.jsxs("button",{type:"button",className:S.step,"aria-pressed":T===xe,"aria-label":`${xe}${be?` ${be}`:""} step on ${B}`,onClick:()=>Q(`var(${Ae})`),children:[xe,be&&u.jsx("span",{className:S.stepRole,children:be})]},xe))})})]}),a==="length"&&(ve=_0(o,p,f,M,a))}else if(a==="time"){const T=Za(p);X=u.jsx(st,{label:"time",readout:`${Math.round(T)}ms`,children:u.jsx("input",{type:"range","aria-label":B,min:"0",max:"1200",step:"10",value:T,onChange:ee=>Q(`${ee.target.value}ms`)})}),ve=_0(o,p,f,M,a)}else a==="easing"?X=u.jsx(h1,{label:B,value:p,shipped:c,spring:k,presets:F,asRef:!0,onChange:O,durationMs:Z,replay:V}):a==="shadow"?X=u.jsxs(u.Fragment,{children:[u.jsx(st,{label:"scale all",readout:`${We((b==null?void 0:b.scale)??1)}×`,children:u.jsx("input",{type:"range","aria-label":`${B} scale all`,min:"0",max:"3",step:"0.05",value:(b==null?void 0:b.scale)??1,onChange:T=>H(o,"adj",{...b,scale:+T.target.value})})}),u.jsx(st,{label:"strength all",readout:`${We((b==null?void 0:b.strength)??1)}×`,children:u.jsx("input",{type:"range","aria-label":`${B} strength all`,min:"0",max:"3",step:"0.05",value:(b==null?void 0:b.strength)??1,onChange:T=>H(o,"adj",{...b,strength:+T.target.value})})}),u.jsx(_6,{name:o,value:p,onAction:H})]}):X=u.jsx(st,{label:"value",wide:!0,children:u.jsx("input",{type:"text","aria-label":B,value:p,onChange:T=>Q(T.target.value)})});const ne=a==="time"?"ms":"px",ce=u.jsxs(u.Fragment,{children:[u.jsxs("span",{className:S.shippedValue,title:c,children:["shipped ",c]}),D&&u.jsxs("span",{className:S.tunedValue,title:p,children:[re?"seed":"tuned"," ",p]})]});return u.jsxs("div",{className:`${S.token} ${Y?S.changed:re?S.seeded:""}`,"data-token":o,children:[u.jsxs("div",{className:S.tokenHead,children:[u.jsx("code",{className:S.tokenName,children:B}),u.jsxs("span",{className:S.tokenActions,children:[u.jsx(io,{sizer:"both modes",children:D&&v&&u.jsx("span",{className:S.scope,children:v==="all"?"both modes":`${v} only`})}),u.jsx(io,{sizer:"copy rest",children:N&&u.jsx("button",{type:"button",className:S.reset,"aria-label":`Copy rest into ${B}`,title:`Set to this concept's ${Ki(N)} value`,onClick:()=>H(o,"copyRest"),children:"copy rest"})}),u.jsx(io,{sizer:"note",children:u.jsx("button",{type:"button",className:S.reset,"aria-pressed":pe,"aria-label":`Note on ${B}`,onClick:()=>ue(T=>!T),children:"note"})}),u.jsxs(io,{sizer:"shipped",children:[re&&u.jsx("button",{type:"button",className:S.reset,onClick:()=>H(o,"shipped"),"aria-label":`Set shipped value on ${B}`,children:"shipped"}),Y&&u.jsx("button",{type:"button",className:`${S.reset} ${S.destructive}`,onClick:()=>H(o,"reset"),"aria-label":`Reset ${B}`,children:"reset"})]}),q&&u.jsx(io,{sizer:"reseed",children:re&&u.jsx("button",{type:"button",className:S.reset,disabled:f===g,onClick:()=>H(o,"reset"),"aria-label":`Reseed ${B}`,children:"reseed"})})]})]}),X,ve&&u.jsxs("p",{className:S.hint,children:["off ladder · nearest"," ",u.jsx("button",{type:"button",className:S.snap,"aria-label":`Snap to ${Zi(ve.name)} on ${B}`,onClick:()=>Q(`var(${ve.name})`),children:Zi(ve.name)})," ","(",We(ve.v),ne,")"]}),(z==null?void 0:z.length)>0&&a!=="easing"&&u.jsx(st,{label:"token",wide:!0,children:u.jsxs("select",{"aria-label":`${B} token`,value:f!=null&&f.startsWith("var(")?f.slice(4,-1):"",onChange:T=>T.target.value&&Q(`var(${T.target.value})`),children:[u.jsx("option",{value:"",children:"token…"}),z.map(T=>u.jsx("option",{value:T,children:Zi(T)},T))]})}),pe&&u.jsx("input",{type:"text",className:S.pin,"aria-label":`Note text on ${B}`,placeholder:"Note on this value…",value:y||"",onChange:T=>H(o,"pin",T.target.value)}),a==="shadow"||/^linear\(/.test(p)||/^linear\(/.test(c||"")?u.jsxs("div",{className:S.values,children:[u.jsxs("span",{className:S.rawHead,children:[u.jsx("button",{type:"button",className:S.disclosure,"aria-expanded":ye,"aria-label":`Raw values of ${B}`,onClick:()=>ge(T=>!T),children:"raw"}),!ye&&D&&u.jsx("span",{className:S.tunedValue,children:re?"seed":"tuned"})]}),ye&&ce]}):u.jsx("div",{className:S.values,children:ce})]})}),j6=i.memo(function({def:o,value:a,spring:c,easingPresets:p,onProp:f,durationMs:m,replay:g}){const v=`prop-${o.name}`,b=F=>f(o.name,"set",F),k=i.useCallback((F,N,Z)=>f(o.name,"spring",{easing:F,sp:N,settle:Z}),[o.name,f]),y=u.jsx("label",{htmlFor:v,className:S.propName,children:u.jsx("code",{children:o.name})});if(o.type==="boolean")return u.jsxs("label",{className:`${S.row} ${S.prop} ${S.checkRow}`,children:[u.jsx("code",{className:`${S.rowLabel} ${S.propName}`,children:o.name}),u.jsx("span",{className:S.rowControl,children:u.jsx("input",{id:v,type:"checkbox",checked:!!a,onChange:F=>b(F.target.checked)})}),u.jsx("span",{className:S.rowReadout,children:a?"on":"off"})]});if(o.type==="easing")return u.jsxs("div",{className:`${S.propBlock} ${S.prop}`,children:[u.jsx("span",{className:S.propName,children:u.jsx("code",{children:o.name})}),u.jsx(h1,{label:o.name,value:a,spring:c,presets:p,onChange:k,durationMs:m,replay:g})]});let z=null,M=null;return o.type==="enum"?z=u.jsx("select",{id:v,value:a,onChange:F=>b(F.target.value),children:o.options.map(F=>u.jsx("option",{children:F},F))}):o.type==="number"?z=u.jsx("input",{id:v,type:"number",className:S.num,min:o.min,max:o.max,value:a,onChange:F=>b(+F.target.value)}):o.type==="range"?(z=u.jsx("input",{id:v,type:"range",min:o.min,max:o.max,step:o.step,value:a,onChange:F=>b(+F.target.value)}),M=`${a}${o.unit||""}`):z=u.jsx("input",{id:v,type:"text",value:a,onChange:F=>b(F.target.value)}),u.jsxs("div",{className:`${S.row} ${S.prop}`,children:[u.jsx("span",{className:S.rowLabel,children:y}),u.jsx("span",{className:S.rowControl,children:z}),u.jsx("span",{className:S.rowReadout,children:M})]})}),Ct=!0,C6="./sounds/",M6=3,N6=s=>`sc-tune:v2:${s}`,qi=["all","light","dark"],g1=s=>/^--sc-(color|shadow)-/.test(s),Xr=(s,o)=>g1(s)?o:"all",bt=()=>({all:{},light:{},dark:{}}),ja=(s,o)=>({...s.overrides.all,...s.overrides[o]}),Oi=["A","B","C","D"],A0=s=>({notes:s.notes,concepts:s.concepts,pick:s.pick}),$6=3e3,F6=600,Ji=s=>[...new Set(s)],uo=Ji(bf.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Xi={color:uo.filter(s=>s.startsWith("--sc-p-color-")&&!s.endsWith("-rgb")),length:uo.filter(s=>/^--sc-p-(space|size|radius|border-width)-/.test(s)),time:uo.filter(s=>s.startsWith("--sc-p-motion-duration-"))},T6=uo.filter(s=>s.startsWith("--sc-p-motion-easing-")),R6=uo.filter(s=>s.startsWith("--sc-p-font-size-"));let Ca=null;function Ma(){if(Ca)return Ca;const s=getComputedStyle(document.documentElement),o=(a,c)=>a.map(p=>{const f=s.getPropertyValue(p).trim();return{name:p,v:c==="ms"?Za(f):parseFloat(f)}}).filter(p=>Number.isFinite(p.v)&&(c==="ms"||/px$/.test(s.getPropertyValue(p.name).trim())));return Ca={length:o(Xi.length,"px"),time:o(Xi.time,"ms"),font:o(R6,"px")},Ca}const P6=(s,o)=>{if(o==="time")return Ma().time;if(o!=="length")return null;const a=m1(s);return a?/^--sc-font-/.test(s)?Ma().font:Ma().length.filter(c=>a.some(([,,p])=>p===c.name)):Ma().length};function H6(s){var p;const o=s.join(`
`),a=Ji(((p=o.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(f=>f.slice(4)))||[]),c=Ji(o.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:a.sort(),derived:c}}const L0=s=>{var o;return((o=s.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:o[1])||"other"},E0=["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"],Z6=s=>{var o;return(o=s==null?void 0:s.closest)==null?void 0:o.call(s,'input:not([type=range]):not([type=checkbox]):not([type=radio]), textarea, select, [contenteditable="true"]')},V6=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,v1=34,Ta=26,gc=()=>parseFloat(getComputedStyle(document.documentElement).fontSize)||16,ec=()=>Math.max(Ta,window.innerWidth*.5/gc()),Di=s=>Math.min(ec(),Math.max(Ta,s)),O6=()=>(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sc-p-space-16"))||16)/gc();function Ii(s){return s?/^(cubic-bezier|ease|linear|steps)/.test(s)?"easing":/^-?[\d.]+m?s$/.test(s)?"time":/px/.test(s)&&/(rgb|#|hsl|color\(|inset)/.test(s)||/(rgb|#|hsl|color\()/.test(s)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(s.trim())?"shadow":CSS.supports("color",s)?"color":/^-?[\d.]+px$/.test(s)?"length":/^-?[\d.]+$/.test(s)?"number":"text":"text"}const S0=(s,o)=>{const a=Object.keys(s);return a.length===Object.keys(o).length&&a.every(c=>s[c]===o[c])},x1=(s,o)=>{if(!s)return{};const a=getComputedStyle(s);return Object.fromEntries(o.map(c=>[c,a.getPropertyValue(c).trim()]))},D6=(s,o)=>{if(!s)return{};const a=document.createElement("span");a.style.cssText="position:absolute;visibility:hidden;height:0;",s.appendChild(a);const c=Object.fromEntries(o.map(p=>(a.style.width=`var(${p})`,[p,getComputedStyle(a).width])));return a.remove(),c},z0=(s,o)=>{if(!s)return{};const a=document.createElement("div");a.style.display="none";for(const[p,f]of Object.entries(o))a.style.setProperty(p,f);s.appendChild(a);const c=x1(a,Object.keys(o));return a.remove(),c};function I6(s,o,a){return s.replace(/(-?[\d.]+)px/g,(c,p)=>`${We(p*o)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(c,p,f)=>`rgba(${p}, ${We(Math.min(1,f*a),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(c,p)=>`/ ${We(Math.min(1,p*a),3)})`)}let In=null;const j0=new Map;async function Na(s,o,a){if(!s)return;In=In||new(window.AudioContext||window.webkitAudioContext),In.state==="suspended"&&await In.resume();let c=j0.get(s);if(!c){const m=await(await fetch(C6+s)).arrayBuffer();c=await In.decodeAudioData(m),j0.set(s,c)}const p=In.createBufferSource(),f=In.createGain();f.gain.value=o,p.buffer=c,p.playbackRate.value=a,p.connect(f).connect(In.destination),p.start()}const B6=["rest","hover","focus","active"],U6={hover:":hover",focus:":focus-visible",active:":active"},Bi=new Map;function W6(s){const o=`${s}:${document.styleSheets.length}`;return Bi.has(o)||Bi.set(o,Y6(s)),Bi.get(o)}function Y6(s){var p;const o=U6[s];if(!o)return"";const a=[],c=(f,m)=>{for(const g of f){if(g.cssRules&&g.media){c(g.cssRules,b=>m(`@media ${g.media.mediaText}{${b}}`));continue}if(!g.selectorText||!g.selectorText.includes(o))continue;const v=g.selectorText.split(",").map(b=>b.trim()).filter(b=>b.includes(o)).map(b=>`[data-force='${s}'] ${b.split(o).join("")}`).join(", ");a.push(m(`${v}{${g.style.cssText}}`))}};for(const f of document.styleSheets)if(((p=f.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{c(f.cssRules,m=>m)}catch{}return a.join(`
`)}const Va=s=>Object.fromEntries(s.props.map(o=>[o.name,o.default])),C0=(s,o,a)=>{var c,p,f,m,g;return(((c=s.overrides[a])==null?void 0:c[o])!==void 0?(f=(p=s.origin)==null?void 0:p[a])==null?void 0:f[o]:(g=(m=s.origin)==null?void 0:m.all)==null?void 0:g[o])||"user"};function y1(s){var c,p,f;const o=bt(),a={};for(const[m,g]of Object.entries(((c=s.seed)==null?void 0:c.overrides)||{}))o.all[m]=g;for(const[m,g]of Object.entries(((p=s.seed)==null?void 0:p.scoped)||{}))Object.assign(o[m],g);for(const[m,g]of Object.entries(((f=s.seed)==null?void 0:f.springs)||{})){const v=po(g);a[m]=g,o.all[m]=v.easing,o.all[m.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return{values:o,springs:a}}function w1(s,o){var c,p,f;o.origin||(o.origin=bt());const a=(m,g,v)=>{o.overrides[m][g]=v,o.origin[m][g]="seed"};for(const[m,g]of Object.entries(((c=s.seed)==null?void 0:c.overrides)||{}))Object.values(o.overrides).some(v=>m in v)||a("all",m,g);for(const[m,g]of Object.entries(((p=s.seed)==null?void 0:p.scoped)||{}))for(const[v,b]of Object.entries(g))!(v in o.overrides[m])&&!(v in o.overrides.all)&&a(m,v,b);for(const[m,g]of Object.entries(((f=s.seed)==null?void 0:f.springs)||{})){if(o.springs[m]||Object.values(o.overrides).some(b=>m in b))continue;const v=po(g);o.springs[m]=g,a("all",m,v.easing),a("all",m.replace(/-easing$/,"-duration"),`${v.settleMs}ms`)}return o}function Q6(s,o){var c;if(o.origin){for(const p of qi)(c=o.origin)[p]||(c[p]={});return o}const a=y1(s).values;o.origin=bt();for(const p of qi)for(const[f,m]of Object.entries(o.overrides[p]||{})){const g=f.endsWith("-duration")&&o.springs[f.replace(/-duration$/,"-easing")];o.origin[p][f]=a[p][f]===m?"seed":o.springs[f]||g?"spring":"user"}return o}const tc=(s,o)=>w1(s,{id:o,overrides:bt(),origin:bt(),shadowAdj:bt(),springs:{},pins:{},notes:"",props:Va(s),sound:{file:s.shippedSound,volume:.7,rate:1}});function G6(s){const o=vr[s];return{component:s,notes:"",active:"A",concepts:o.concepts?o.concepts.map((a,c)=>({...tc(o,"ABCD"[c]),props:{...Va(o),...a.props},notes:a.notes||""})):[tc(o,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:o.zoom??(o.kind==="motion"?1:2),ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1,collapsed:{},panelWidth:v1}}}function M0(s){var o;try{const a=JSON.parse(localStorage.getItem(N6(s))||"null");if((a==null?void 0:a.component)===s&&Array.isArray(a.concepts)){for(const c of a.concepts){if(c.props={...Va(vr[s]),...c.props},c.springs||(c.springs={}),!c.overrides.all){const p=bt();for(const[m,g]of Object.entries(c.overrides))p[g1(m)?"dark":"all"][m]=g;const f=bt();for(const[m,g]of Object.entries(c.shadowAdj||{}))f.dark[m]=g;c.overrides=p,c.shadowAdj=f}if(s==="Button")for(const p of Object.values(c.overrides))for(const f of Object.keys(p)){if(!f.startsWith("--sc-font-text-label-chrome-"))continue;const m=f.replace("label-chrome-","label-button-lg-");m in p||(p[m]=p[f]),delete p[f]}}((o=a.view)==null?void 0:o.ground)==="#E3DFD8"&&(a.view.ground="--sc-color-surface-page");for(const c of a.concepts)w1(vr[s],Q6(vr[s],c));return a}}catch{}return G6(s)}function K6(){var _o;const s=new URLSearchParams(location.search).get("c"),[o,a]=i.useState(vr[s]?s:"Switch"),[c,p]=i.useState(()=>M0(o)),[f,m]=i.useState(null),[g,v]=i.useState([]),[b,k]=i.useState(!0),[y,z]=i.useState({}),[M,F]=i.useState({}),[N,Z]=i.useState({}),[V,H]=i.useState(0),[D,q]=i.useState(!1),[re,Y]=i.useState(!1),[B,pe]=i.useState(""),[ue,ye]=i.useState(!1),ge=i.useRef(null),Q=i.useRef(null),O=i.useRef(null),X=i.useRef(null),ve=i.useRef(null),ne=i.useRef({}),ce=i.useRef(null),T=vr[o],ee=T.kind==="motion",{tokens:J,derived:E}=i.useMemo(()=>{const x=H6(T.css);return{...x,tokens:[...new Set([...x.tokens,...T.jsTokens||[]])].sort()}},[T]),j=c.concepts.find(x=>x.id===c.active)||c.concepts[0],fe=i.useMemo(()=>{const x=getComputedStyle(document.documentElement);return T6.map(A=>({name:A,value:x.getPropertyValue(A).trim()}))},[]);i.useEffect(()=>{fetch("./spec.json").then(x=>x.json()).then(x=>{a(x.component),p(x.state),m({recorded:x.recorded})})},[]),i.useEffect(()=>{},[]);const xe=x=>{const A=M0(x);a(x),p(A),kr(A),history.replaceState(null,"",`?c=${x}`)};i.useEffect(()=>{document.documentElement.setAttribute("data-theme",c.view.theme)},[c.view.theme]);const be=c.view.force||"rest";i.useEffect(()=>{let x=document.getElementById("sc-tune-force");x||(x=document.createElement("style"),x.id="sc-tune-force",document.head.appendChild(x)),x.textContent=W6(be)},[be]),i.useLayoutEffect(()=>{var de;const x=x1(ve.current,J);z(G=>S0(G,x)?G:x),ne.current[c.view.theme]=x;const A={...x,...z0(ve.current,ja(j,c.view.theme))};F(G=>S0(G,A)?G:A);const P=(de=ce.current)==null?void 0:de.querySelector("[class]");Z(D6(P?P.closest("label")||P:null,E))},[J,E,j.overrides,c.view.theme,j.props]);const[Ae,Ce]=i.useState("saved");i.useEffect(()=>{},[c,o]);const Se=i.useRef(c);Se.current=c;const ze=i.useRef(null);ze.current||(ze.current={past:[],future:[],head:A0(c),transient:!1});const[it,br]=i.useState({undo:0,redo:0}),ho=()=>br({undo:ze.current.past.length,redo:ze.current.future.length}),kr=x=>{ze.current={past:[],future:[],head:A0(x),transient:!1},ho()};i.useEffect(()=>{},[c.notes,c.concepts,c.pick]);const cs=()=>{},mo=()=>{},_r=i.useRef(null);_r.current={undo:cs,redo:mo},i.useEffect(()=>{const x=A=>{var G,ke;if(!(A.metaKey||A.ctrlKey)||A.altKey)return;const P=A.key.toLowerCase(),de=P==="z"&&A.shiftKey||P==="y"&&!A.shiftKey;P!=="z"&&!de||(ke=(G=A.target)==null?void 0:G.matches)!=null&&ke.call(G,"input[type=search]")||(A.preventDefault(),de?_r.current.redo():_r.current.undo())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[]);const[Wt,hn]=i.useState(null);i.useEffect(()=>{if(!Wt)return;const x=setTimeout(()=>hn(null),$6),A=de=>{var G,ke;(ke=(G=de.target).closest)!=null&&ke.call(G,`[data-arm="${Wt}"]`)||hn(null)},P=de=>{de.key==="Escape"&&hn(null)};return document.addEventListener("pointerdown",A,!0),document.addEventListener("keydown",P),()=>{clearTimeout(x),document.removeEventListener("pointerdown",A,!0),document.removeEventListener("keydown",P)}},[Wt]);const ds=(x,A)=>()=>{Wt===x?(hn(null),A()):hn(x)},tn=i.useCallback(x=>p(A=>A),[]),nn=i.useCallback((x,A)=>p(P=>({...P,concepts:P.concepts.map(de=>de.id===x?A(de):de)})),[]),Wn=i.useCallback(x=>(A,P)=>nn(x,de=>({...de,props:{...de.props,[A]:P}})),[nn]),Ar=i.useCallback(x=>(A,P)=>{ze.current.transient=!0,Wn(x)(A,P)},[Wn]),kt=x=>tn(A=>({...A,concepts:A.concepts.map(P=>P.id===A.active?x(P):P)})),mt=c.view.theme,Je=(x,A,P)=>{const de=Xr(A,mt),G={...x,[de]:{...x[de]}};return P===void 0?delete G[de][A]:G[de][A]=P,G},mn=i.useMemo(()=>y1(T),[T]),gn=(x,A,P="user")=>kt(de=>({...de,overrides:Je(de.overrides,x,A),origin:Je(de.origin||bt(),x,P)})),go=x=>kt(A=>{const P=Xr(x,mt),de=mn.values[P][x],G={...A.springs};return delete G[x],de!==void 0&&mn.springs[x]&&(G[x]=mn.springs[x]),{...A,overrides:Je(A.overrides,x,de),origin:Je(A.origin||bt(),x,de===void 0?void 0:"seed"),shadowAdj:Je(A.shadowAdj,x,void 0),springs:G}}),Yn=x=>kt(A=>{const P={...A.springs};return delete P[x],{...A,overrides:Je(A.overrides,x,y[x]),origin:Je(A.origin||bt(),x,"user"),shadowAdj:Je(A.shadowAdj,x,void 0),springs:P}}),Qn=(x,A,P)=>kt(de=>{const G={...de.springs};let ke=de.overrides,Pe=de.origin||bt();if(A){G[x]=A;const Ie=x.replace(/-easing$/,"-duration");Ie!==x&&J.includes(Ie)&&(ke=Je(ke,Ie,`${P}ms`),Pe=Je(Pe,Ie,"spring"))}else delete G[x];return{...de,springs:G,overrides:ke,origin:Pe}}),Oa=(x,A)=>kt(P=>({...P,shadowAdj:Je(P.shadowAdj,x,A),overrides:Je(P.overrides,x,I6(y[x],A.scale??1,A.strength??1)),origin:Je(P.origin||bt(),x,"user")})),vo=(x,A)=>kt(P=>({...P,pins:{...P.pins,[x]:A}})),Gn=(x,A)=>kt(P=>({...P,sound:{...P.sound,[x]:A}})),Da={set:(x,A)=>gn(x,A),adj:(x,A)=>Oa(x,A),easing:(x,{easing:A,sp:P,settle:de})=>{gn(x,A),Qn(x,P,de)},reset:x=>go(x),shipped:x=>Yn(x),copyRest:x=>gn(x,M[x.slice(0,-6)]||y[x.slice(0,-6)],"copy"),pin:(x,A)=>vo(x,A)},us={set:(x,A)=>Wn(j.id)(x,A),spring:(x,{easing:A,sp:P,settle:de})=>kt(G=>{const ke=T.props.find(Pt=>Pt.name===x),Pe={...G.springs},Ie={...G.props,[x]:A};return P?(Pe[`prop:${x}`]=P,ke!=null&&ke.durationProp&&(Ie[ke.durationProp]=de)):delete Pe[`prop:${x}`],{...G,springs:Pe,props:Ie}})},ps=i.useRef(null);ps.current={token:Da,prop:us};const fs=i.useCallback((x,A,P)=>{},[]),hs=i.useCallback((x,A,P)=>{},[]),Ft=(x,A)=>p(P=>({...P,view:{...P.view,[x]:A}})),Yt=T.props.some(x=>x.name==="disabled"),vn=x=>p(A=>({...A,view:{...A.view,force:x==="disabled"?"rest":x},concepts:Yt?A.concepts.map(P=>({...P,props:{...P.props,disabled:x==="disabled"}})):A.concepts})),ms=x=>tn(A=>{const P=Oi.find(ke=>!A.concepts.some(Pe=>Pe.id===ke));if(!P)return A;const de=A.concepts.find(ke=>ke.id===A.active),G=x?{...structuredClone(de),id:P,notes:""}:tc(T,P);return{...A,concepts:[...A.concepts,G],active:P}}),xo=x=>tn(A=>{if(A.concepts.length<2)return A;const P=A.concepts.filter(de=>de.id!==x);return{...A,concepts:P,active:P[0].id,pick:A.pick.id===x?{id:null,reason:A.pick.reason}:A.pick}}),gs=x=>p(A=>({...A,active:x})),yo=()=>p(x=>{const A=!x.view.blind,P=A?[...x.concepts.map(de=>de.id)].sort(()=>Math.random()-.5):null;return{...x,view:{...x.view,blind:A,order:P,compare:A?!0:x.view.compare}}}),Kn=i.useCallback(()=>{H(A=>A+1),T.play&&c.concepts.forEach(A=>T.play(A.props,Ar(A.id)));const x=c.concepts.find(A=>A.id===c.active);x!=null&&x.sound.file&&Na(x.sound.file,x.sound.volume,x.sound.rate)},[T,c.concepts,c.active,Ar]),Lr=ee?Math.max(1200,Hi(j.props)*c.view.slow+900):1400*c.view.slow;i.useEffect(()=>{if(!D)return;const x=setInterval(Kn,Lr);return()=>clearInterval(x)},[D,Kn,Lr]);const wo=J.filter(x=>Ii(y[x])==="time"),Tt=c.view.ground,Er=!Tt.startsWith("--")&&c.view.theme!=="dark",qn=Tt.startsWith("--")?{background:`var(${Tt})`}:Er?{background:Tt}:{background:"var(--sc-color-surface-page)"},bo=x=>{const A={zoom:c.view.zoom,...Er?{"--sc-color-surface-page":Tt}:{},...x};if(c.view.slow!==1)for(const P of wo)A[P]=`calc(${x[P]??y[P]} * ${c.view.slow})`;return A};i.useEffect(()=>{window.dispatchEvent(new Event("sc-tokens-change"))},[c.concepts,c.view.theme]);const xn=i.useCallback(()=>{const x=ve.current,A=P=>P.id;return{tool:"sc-tune",version:M6,component:o,kind:T.kind||"component",recorded:new Date().toISOString(),theme:c.view.theme,notes:c.notes,pick:c.pick.id?{concept:c.pick.id,reason:c.pick.reason}:null,concepts:c.concepts.map(P=>{const de=z0(x,ja(P,c.view.theme));return{id:A(P),notes:P.notes,props:P.props,sound:{...P.sound,shipped:T.shippedSound,trigger:T.trigger},tokens:qi.flatMap(G=>Object.keys(P.overrides[G]).map(ke=>{var rn,bn,er;const Pe=G==="all"?y:ne.current[G]||{},Ie=P.overrides[G][ke],Pt=G==="all"||G===c.view.theme;return{name:ke,mode:G,origin:((bn=(rn=P.origin)==null?void 0:rn[G])==null?void 0:bn[ke])||"user",category:L0(ke),kind:Ii(Pe[ke]||y[ke]),shipped:Pe[ke]??null,tuned:Pt?de[ke]??Ie:Ie,override:Ie,...(er=P.shadowAdj[G])!=null&&er[ke]?{shadowAdjust:P.shadowAdj[G][ke]}:{},...P.springs[ke]?{spring:{...P.springs[ke],...$0(P.springs[ke])}}:{}}})),pins:Object.fromEntries(Object.entries(P.pins).filter(([,G])=>G)),...ee?{motion:{lastFrameMs:Hi(P.props),...P.springs["prop:easing"]?{spring:{...P.springs["prop:easing"],...$0(P.springs["prop:easing"])}}:{}}}:{}}}),derived:N,tokenCount:J.length,state:c}},[o,T,ee,c,y,N,J]);i.useEffect(()=>{window.scTune={export:xn,component:o}},[xn,o]);const yn=i.useMemo(()=>{var A;const x={};for(const P of J)(x[A=L0(P)]||(x[A]=[])).push(P);return v6.filter(P=>x[P]).map(P=>[P,x[P]])},[J]),Rt=Di(c.view.panelWidth??v1),vs=x=>{if(x.button!==0)return;x.preventDefault();const A=x.currentTarget;A.setPointerCapture(x.pointerId);let P=Rt;const de=ke=>{P=Di((O.current.getBoundingClientRect().right-ke.clientX)/gc()),O.current.style.setProperty("--panel-w",`${P}rem`)},G=()=>{A.removeEventListener("pointermove",de),A.removeEventListener("pointerup",G),A.removeEventListener("pointercancel",G),Ft("panelWidth",+P.toFixed(3))};A.addEventListener("pointermove",de),A.addEventListener("pointerup",G),A.addEventListener("pointercancel",G)},Ia=x=>{const A=O6(),P={ArrowLeft:Rt+A,ArrowRight:Rt-A,Home:Ta,End:ec()}[x.key];P!==void 0&&(x.preventDefault(),Ft("panelWidth",+Di(P).toFixed(3)))},Ba=c.view.collapsed||{},_t=x=>!(Ba[x]??x==="sound"),gt=(x,A)=>p(P=>({...P,view:{...P.view,collapsed:{...P.view.collapsed||{},[x]:!A}}})),xs=x=>{gt(x,!0),requestAnimationFrame(()=>requestAnimationFrame(()=>{var Pe,Ie,Pt;const A=Q.current,P=A==null?void 0:A.querySelector(`[data-group="${x}"]`);if(!P)return;const de=V6()?"auto":"smooth",G=((Pe=X.current)==null?void 0:Pe.offsetHeight)||0;if(getComputedStyle(A).overflowY==="visible"){const rn=((Pt=(Ie=O.current)==null?void 0:Ie.querySelector("main"))==null?void 0:Pt.offsetHeight)||0;window.scrollTo({top:window.scrollY+P.getBoundingClientRect().top-rn-G,behavior:de});return}const ke=A.scrollTop+P.getBoundingClientRect().top-A.getBoundingClientRect().top-G;A.scrollTo({top:ke,behavior:de})}))},[ys,ko]=i.useState(!1),ws=i.useRef(null);ws.current=Kn,i.useEffect(()=>{const x=A=>{var P;if(!(A.metaKey||A.ctrlKey||A.altKey||Z6(A.target))){if(A.key==="Escape"){ko(!1);return}if(A.key==="p"||A.key==="P"){A.preventDefault(),ws.current();return}A.key==="/"&&(A.preventDefault(),(P=ge.current)==null||P.focus())}};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[]);const bs=c.view.compare?c.view.blind&&c.view.order?c.view.order.map(x=>c.concepts.find(A=>A.id===x)).filter(Boolean):c.concepts:[j],ks={replay:V,slow:c.view.slow};g.filter(x=>!b||x.seconds<=1);const Jn=ja(j,c.view.theme),_s=x=>Jn[x]!==void 0&&C0(j,x,mt)!=="seed",Ua=Object.keys(Jn).filter(_s).length,Ne=B.trim().toLowerCase(),As=!!Ne||ue,wn=x=>!Ne||x.replace(/^--(sc-)?/,"").toLowerCase().includes(Ne),Ls=x=>wn(x)&&(!ue||_s(x)),Xn=(_o=g.find(x=>x.file===j.sound.file))==null?void 0:_o.seconds;return u.jsxs("div",{className:S.app,ref:O,style:{"--panel-w":`${Rt}rem`},children:[u.jsxs("header",{className:S.bar,children:[u.jsxs("div",{className:S.barRow,children:[u.jsxs("span",{className:S.cluster,children:[u.jsx("h1",{className:S.brand,children:"sc-tune"}),u.jsx("select",{"aria-label":"Subject",value:o,disabled:Ct,onChange:x=>xe(x.target.value),children:Object.keys(vr).map(x=>u.jsx("option",{children:x},x))}),u.jsxs("span",{className:S.meta,children:[ee?"choreography":`${J.length} tokens`," · ",c.concepts.length," concept",c.concepts.length>1?"s":""]}),f&&u.jsxs("span",{className:S.meta,children:["snapshot · recorded ",f.recorded]}),!Ct]}),u.jsx("span",{className:S.spacer}),!Ct,u.jsxs("span",{className:S.keysWrap,children:[u.jsx("button",{type:"button",className:S.keysButton,"aria-expanded":ys,"aria-controls":"sc-tune-keys","aria-label":"Keyboard shortcuts",onClick:()=>ko(x=>!x),children:"?"}),u.jsxs("dl",{id:"sc-tune-keys",className:S.keys,hidden:!ys,children:[u.jsxs("div",{children:[u.jsx("dt",{children:u.jsx("kbd",{children:"/"})}),u.jsx("dd",{children:"filter tokens"})]}),u.jsxs("div",{children:[u.jsxs("dt",{children:[u.jsx("kbd",{children:"⌘Z"})," · ",u.jsx("kbd",{children:"⇧⌘Z"})]}),u.jsx("dd",{children:"undo · redo"})]}),u.jsxs("div",{children:[u.jsx("dt",{children:u.jsx("kbd",{children:"P"})}),u.jsx("dd",{children:"play"})]})]})]})]}),u.jsxs("div",{className:S.barRow,children:[u.jsxs("span",{className:S.cluster,children:[u.jsx("button",{type:"button",onClick:Kn,children:"Play"}),u.jsx("button",{type:"button","aria-pressed":D,onClick:()=>q(x=>!x),children:D?"Stop loop":"Loop"}),u.jsxs("select",{"aria-label":"Slow motion",value:c.view.slow,onChange:x=>Ft("slow",+x.target.value),children:[u.jsx("option",{value:1,children:"1×"}),u.jsx("option",{value:2,children:"½×"}),u.jsx("option",{value:4,children:"¼×"}),u.jsx("option",{value:10,children:"⅒×"})]})]}),u.jsxs("span",{className:S.cluster,children:[u.jsxs("span",{className:S.themeCtl,children:[u.jsxs("select",{"aria-label":"Theme",disabled:Ct,value:c.view.theme,onChange:x=>Ft("theme",x.target.value),children:[u.jsx("option",{children:"light"}),u.jsx("option",{children:"dark"})]}),!ee&&u.jsxs("span",{className:S.note,children:["colour, shadow: ",mt," only · size, type, motion: both"]})]}),u.jsxs("label",{className:S.mini,children:["zoom",u.jsx("input",{type:"range",className:S.zoom,min:"1",max:"8",step:"0.5",disabled:Ct,value:c.view.zoom,onChange:x=>Ft("zoom",+x.target.value)}),u.jsxs("span",{className:S.readout,children:[c.view.zoom,"×"]})]}),u.jsxs("label",{className:S.mini,children:["ground",u.jsxs("select",{disabled:Ct,value:c.view.ground,onChange:x=>Ft("ground",x.target.value),children:[!E0.includes(c.view.ground)&&u.jsx("option",{value:c.view.ground,children:c.view.ground}),E0.map(x=>u.jsx("option",{value:x,children:x.replace("--sc-color-","")},x))]})]}),u.jsx("button",{type:"button","aria-pressed":c.view.compare,disabled:c.concepts.length<2,onClick:()=>Ft("compare",!c.view.compare),children:"Compare"}),u.jsx("button",{type:"button","aria-pressed":c.view.blind,disabled:c.concepts.length<2,onClick:yo,children:c.view.blind?"Reveal":"Blind"})]})]})]}),u.jsxs("main",{className:S.main,children:[!c.view.blind&&u.jsxs("div",{className:S.strip,children:[u.jsx("span",{className:S.stripShipped,children:ee?"Default":"Shipped"}),u.jsx(N0,{label:"Concept on stage",concepts:c.concepts,active:c.active,pickId:c.pick.id,onSelect:gs})]}),u.jsx("div",{className:S.stages,style:qn,children:u.jsxs(wf,{enabled:!1,children:[!c.view.blind&&u.jsxs("section",{className:S.stageWrap,"aria-label":ee?"Default":"Shipped",children:[u.jsx("h2",{className:S.stageLabel,children:ee?"Default":"Shipped"}),u.jsx("div",{className:S.stage,style:bo({}),ref:ve,inert:"","data-force":be,children:T.render(ee?Va(T):j.props,()=>{},()=>{},{...ks,shipped:!0})})]}),c.view.blind&&u.jsx("div",{ref:ve,hidden:!0}),bs.map((x,A)=>{const P=c.view.blind?`Concept ${A+1}`:`${x.id}${x.id===c.active?" · editing":""}${c.pick.id===x.id?" · picked":""}`;return u.jsxs("section",{className:`${S.stageWrap} ${x.id===c.active&&!c.view.blind&&bs.length>1?S.activeStage:""}`,"aria-label":P,children:[u.jsxs("h2",{className:S.stageLabel,children:[P,ee&&u.jsxs("span",{className:S.readout,children:[" · last frame ",Hi(x.props),"ms"]})]}),u.jsx("div",{className:S.stage,style:bo(ja(x,mt)),ref:x.id===c.active?ce:void 0,"data-force":be,children:T.render(x.props,Ar(x.id),()=>Na(x.sound.file,x.sound.volume,x.sound.rate),ks)})]},x.id)})]})})]}),u.jsx("div",{className:S.handle,role:"separator",tabIndex:0,"aria-orientation":"vertical","aria-label":"Panel width","aria-valuemin":Ta,"aria-valuemax":Math.round(ec()),"aria-valuenow":Math.round(Rt),"aria-valuetext":`${+Rt.toFixed(1)} rem`,onPointerDown:vs,onKeyDown:Ia}),u.jsxs("aside",{className:S.panel,ref:Q,children:[(yn.length>0||E.length>0)&&u.jsxs("div",{className:S.rail,ref:X,children:[u.jsxs("nav",{className:S.railChips,"aria-label":"Token groups",children:[yn.map(([x,A])=>{const P=A.filter(_s).length;return u.jsxs("button",{type:"button",className:S.chip,disabled:!A.some(Ls),"aria-label":`${x}, ${A.length} tokens${P?`, ${P} changed`:""}`,onClick:()=>xs(x),children:[x," · ",A.length,P>0&&u.jsxs("span",{className:S.chipChanged,children:[" · ",P]})]},x)}),E.length>0&&u.jsxs("button",{type:"button",className:S.chip,disabled:ue||!E.some(wn),"aria-label":`derived, ${E.length} read-only`,onClick:()=>xs("derived"),children:["derived · ",E.length]})]}),u.jsxs("div",{className:S.filters,children:[u.jsx("input",{ref:ge,type:"search",className:S.filter,"aria-label":"Filter tokens by name",placeholder:"filter tokens  /",value:B,onChange:x=>pe(x.target.value),onKeyDown:x=>{x.key==="Escape"&&(x.preventDefault(),pe(""))}}),u.jsxs(q6,{pressed:ue,onClick:()=>ye(x=>!x),children:["changed · ",Ua]})]})]}),u.jsxs("fieldset",{className:S.group,disabled:Ct,children:[u.jsx("legend",{children:"Notes for the build"}),u.jsx("textarea",{className:S.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:c.notes,onChange:x=>p(A=>({...A,notes:x.target.value}))})]}),u.jsxs("fieldset",{className:S.group,disabled:Ct,children:[u.jsx("legend",{children:"Concepts"}),u.jsxs("div",{className:S.tabs,children:[u.jsx(N0,{label:"Concepts",concepts:c.concepts,active:c.active,pickId:c.pick.id,onSelect:gs}),u.jsx("button",{type:"button",className:S.tab,disabled:c.concepts.length>=Oi.length,onClick:()=>ms(!0),children:"duplicate"}),u.jsx("button",{type:"button",className:S.tab,disabled:c.concepts.length>=Oi.length,onClick:()=>ms(!1),children:"new"}),u.jsx("button",{type:"button",className:S.tab,"data-arm":`remove-${j.id}`,"data-armed":Wt===`remove-${j.id}`||void 0,disabled:c.concepts.length<2,onClick:ds(`remove-${j.id}`,()=>xo(j.id)),children:Wt===`remove-${j.id}`?`Remove ${j.id}?`:`remove ${j.id}`})]}),u.jsx("textarea",{className:S.notes,"aria-label":`Notes on concept ${j.id}`,placeholder:`What concept ${j.id} is trying…`,value:j.notes,onChange:x=>kt(A=>({...A,notes:x.target.value}))}),c.concepts.length>1&&u.jsxs("div",{className:S.pick,children:[u.jsx("span",{className:S.propName,children:u.jsx("code",{children:"pick"})}),c.concepts.map(x=>u.jsxs("label",{className:`${S.mini} ${S.checkRow}`,children:[u.jsx("input",{type:"radio",name:"pick",checked:c.pick.id===x.id,onChange:()=>p(A=>({...A,pick:{...A.pick,id:x.id}}))})," ",x.id]},x.id)),u.jsx("textarea",{className:S.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:c.pick.reason,onChange:x=>p(A=>({...A,pick:{...A.pick,reason:x.target.value}}))})]})]}),u.jsxs("fieldset",{className:S.group,disabled:Ct,children:[u.jsxs("legend",{children:[ee?"Motion":"Props"," · concept ",j.id]}),(()=>{const x=T.props.map(A=>u.jsx(j6,{def:A,value:j.props[A.name],spring:j.springs[`prop:${A.name}`],easingPresets:fe,onProp:hs,...A.type==="easing"?{replay:V,durationMs:(+j.props[A.durationProp]||0)*c.view.slow}:{}},A.name));return ee||x.splice(Math.min(3,x.length),0,u.jsxs("div",{className:`${S.row} ${S.prop}`,children:[u.jsx("span",{className:S.rowLabel,children:u.jsx("label",{htmlFor:"p-state",className:S.propName,children:u.jsx("code",{children:"state"})})}),u.jsx("span",{className:S.rowControl,children:u.jsxs("select",{id:"p-state",value:Yt&&j.props.disabled?"disabled":be,onChange:A=>vn(A.target.value),children:[B6.map(A=>u.jsx("option",{value:A,children:A==="rest"?"default":A},A)),Yt&&u.jsx("option",{value:"disabled",children:"disabled"})]})}),u.jsx("span",{className:S.rowReadout})]},"state")),x})()]}),u.jsxs("fieldset",{className:S.group,disabled:Ct,"data-group":"sound",children:[u.jsxs("legend",{className:S.legendRow,children:[u.jsx("button",{type:"button",className:S.disclosure,"aria-expanded":_t("sound"),"aria-controls":"gb-sound",onClick:()=>gt("sound",!_t("sound")),children:"sound"}),_t("sound")?u.jsxs("span",{className:S.summary,children:["· ",T.trigger]}):u.jsxs(u.Fragment,{children:[u.jsxs("span",{className:S.summary,children:["· ",j.sound.file?j.sound.file.replace(/\.(wav|mp3)$/,""):"silent",Xn?` · ${Xn} s`:""," ·"]}),u.jsx("button",{type:"button",className:S.reset,"aria-label":"Change sound",onClick:()=>gt("sound",!0),children:"change"})]})]}),u.jsx("div",{id:"gb-sound",className:S.groupBody,hidden:!_t("sound"),children:_t("sound")&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`${S.row} ${S.prop}`,children:[u.jsx("span",{className:S.rowLabel,children:u.jsx("label",{htmlFor:"s-vol",className:S.propName,children:u.jsx("code",{children:"volume"})})}),u.jsx("span",{className:S.rowControl,children:u.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:j.sound.volume,onChange:x=>Gn("volume",+x.target.value)})}),u.jsx("span",{className:S.rowReadout,children:j.sound.volume})]}),u.jsxs("div",{className:`${S.row} ${S.prop}`,children:[u.jsx("span",{className:S.rowLabel,children:u.jsx("label",{htmlFor:"s-rate",className:S.propName,children:u.jsx("code",{children:"pitch"})})}),u.jsx("span",{className:S.rowControl,children:u.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:j.sound.rate,onChange:x=>Gn("rate",+x.target.value)})}),u.jsxs("span",{className:S.rowReadout,children:[j.sound.rate,"×"]})]}),u.jsxs("div",{className:S.listHead,children:[u.jsx("span",{className:S.summary,children:"recorded sound"}),!Ct]}),u.jsxs("ul",{className:S.sounds,"aria-label":"Sound candidates",children:[u.jsx("li",{className:S.sound,children:u.jsxs("label",{children:[u.jsx("input",{type:"radio",name:"sound",checked:!j.sound.file,onChange:()=>Gn("file",null)})," silent"]})}),(j.sound.file?[{file:j.sound.file,seconds:""}]:[]).map(x=>u.jsxs("li",{className:`${S.sound} ${x.file===T.shippedSound?S.shippedSound:""}`,children:[u.jsxs("label",{children:[u.jsx("input",{type:"radio",name:"sound",checked:j.sound.file===x.file,onChange:()=>{Gn("file",x.file),Na(x.file,j.sound.volume,j.sound.rate)}}),x.file.replace(/\.(wav|mp3)$/,"")]}),u.jsxs("span",{className:S.readout,children:[x.seconds&&`${x.seconds}s`,x.file===T.shippedSound?" · shipped":""]}),u.jsx("button",{type:"button","aria-label":`Play ${x.file}`,onClick:()=>Na(x.file,j.sound.volume,j.sound.rate),children:"play"})]},x.file))]})]})})]}),yn.map(([x,A])=>{const P=A.filter(Ls);if(!P.length&&As)return null;const de=_t(x);return u.jsxs("fieldset",{className:S.group,disabled:Ct,"data-group":x,children:[u.jsx("legend",{children:u.jsxs("button",{type:"button",className:S.disclosure,"aria-expanded":de,"aria-controls":`gb-${x}`,onClick:()=>gt(x,!de),children:[x," · ",As?`${P.length} of ${A.length}`:A.length]})}),u.jsx("div",{id:`gb-${x}`,className:S.groupBody,hidden:!de,children:de&&P.map(G=>{var Ie;const ke=Ii(y[G]),Pe=G.replace(/-easing$/,"-duration");return u.jsx(z6,{name:G,kind:ke,shipped:y[G],value:M[G]||y[G]||"",override:Jn[G],scope:j.overrides[Xr(G,mt)][G]!==void 0?Xr(G,mt):j.overrides.all[G]!==void 0?"all":null,adj:(Ie=j.shadowAdj[Xr(G,mt)])==null?void 0:Ie[G],spring:j.springs[G],pin:j.pins[G],refs:Xi[ke],ladder:P6(G,ke),easingPresets:fe,origin:Jn[G]!==void 0?C0(j,G,mt):null,seed:mn.values[Xr(G,mt)][G],restOf:G.endsWith("-hover")&&J.includes(G.slice(0,-6))?G.slice(0,-6):null,...ke==="easing"?{replay:V,durationMs:(Pe!==G&&(M[Pe]||y[Pe])?Za(M[Pe]||y[Pe]):F6)*c.view.slow}:{},onAction:fs},G)})})]},x)}),E.length>0&&!(As&&(ue||!E.some(wn)))&&u.jsxs("fieldset",{className:S.group,"data-group":"derived",children:[u.jsx("legend",{children:u.jsx("button",{type:"button",className:S.disclosure,"aria-expanded":_t("derived"),"aria-controls":"gb-derived",onClick:()=>gt("derived",!_t("derived")),children:"derived · read-only"})}),u.jsx("div",{id:"gb-derived",className:S.groupBody,hidden:!_t("derived"),children:_t("derived")&&E.filter(wn).map(x=>u.jsxs("div",{className:`${S.row} ${S.prop}`,children:[u.jsx("code",{className:`${S.rowLabel} ${S.derivedName}`,children:x}),u.jsx("span",{className:`${S.rowControl} ${S.rowWide} ${S.readout}`,children:N[x]})]},x))})]})]})]})}function N0({label:s,concepts:o,active:a,pickId:c,onSelect:p}){return u.jsx("span",{className:S.tabs,role:"group","aria-label":s,children:o.map(f=>u.jsxs("button",{type:"button","aria-pressed":f.id===a,className:S.tab,onClick:()=>p(f.id),children:[f.id,c===f.id&&" · picked"]},f.id))})}function q6({pressed:s,onClick:o,children:a}){return u.jsx("button",{type:"button",className:S.chip,"aria-pressed":s,onClick:o,children:a})}function $0(s){const o=po(s);return{settleMs:o.settleMs,overshoot:We(o.overshoot,3),framerMotion:{type:"spring",stiffness:s.stiffness,damping:s.damping,mass:s.mass}}}const os=[];window.scTuneProfile={reset:()=>{os.length=0},read:()=>os.slice(),p95:()=>{const s=os.map(o=>o.actualDuration).sort((o,a)=>o-a);return s.length?s[Math.min(s.length-1,Math.floor(s.length*.95))]:null}};const J6=(s,o,a,c,p,f)=>{os.length>5e3&&os.shift(),os.push({phase:o,actualDuration:a,commitTime:f})};function X6(){return new URLSearchParams(location.search).get("c"),u.jsx(i.Profiler,{id:"sc-tune",onRender:J6,children:u.jsx(K6,{})})}const Ui=document.getElementById("root");Ui.dataset.mounted||(Ui.dataset.mounted="true",ff.createRoot(Ui).render(u.jsx(X6,{})));
