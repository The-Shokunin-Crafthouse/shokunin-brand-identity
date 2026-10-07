(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const b of g)if(b.type==="childList")for(const L of b.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&p(L)}).observe(document,{childList:!0,subtree:!0});function a(g){const b={};return g.integrity&&(b.integrity=g.integrity),g.referrerPolicy&&(b.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?b.credentials="include":g.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function p(g){if(g.ep)return;g.ep=!0;const b=a(g);fetch(g.href,b)}})();function Ff(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var si={exports:{}},Br={},li={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function Df(){if(iu)return le;iu=1;var i=Symbol.for("react.element"),f=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),L=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),T=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=T&&m[T]||m["@@iterator"],typeof m=="function"?m:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,W={};function q(m,z,te){this.props=m,this.context=z,this.refs=W,this.updater=te||re}q.prototype.isReactComponent={},q.prototype.setState=function(m,z){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,z,"setState")},q.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Be(){}Be.prototype=q.prototype;function je(m,z,te){this.props=m,this.context=z,this.refs=W,this.updater=te||re}var J=je.prototype=new Be;J.constructor=je,ne(J,q.prototype),J.isPureReactComponent=!0;var Y=Array.isArray,ae=Object.prototype.hasOwnProperty,Q={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function Fe(m,z,te){var se,ue={},pe=null,ke=null;if(z!=null)for(se in z.ref!==void 0&&(ke=z.ref),z.key!==void 0&&(pe=""+z.key),z)ae.call(z,se)&&!ce.hasOwnProperty(se)&&(ue[se]=z[se]);var ge=arguments.length-2;if(ge===1)ue.children=te;else if(1<ge){for(var ye=Array(ge),De=0;De<ge;De++)ye[De]=arguments[De+2];ue.children=ye}if(m&&m.defaultProps)for(se in ge=m.defaultProps,ge)ue[se]===void 0&&(ue[se]=ge[se]);return{$$typeof:i,type:m,key:pe,ref:ke,props:ue,_owner:Q.current}}function qe(m,z){return{$$typeof:i,type:m.type,key:z,ref:m.ref,props:m.props,_owner:m._owner}}function de(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function Ce(m){var z={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(te){return z[te]})}var ve=/\/+/g;function Pe(m,z){return typeof m=="object"&&m!==null&&m.key!=null?Ce(""+m.key):z.toString(36)}function X(m,z,te,se,ue){var pe=typeof m;(pe==="undefined"||pe==="boolean")&&(m=null);var ke=!1;if(m===null)ke=!0;else switch(pe){case"string":case"number":ke=!0;break;case"object":switch(m.$$typeof){case i:case f:ke=!0}}if(ke)return ke=m,ue=ue(ke),m=se===""?"."+Pe(ke,0):se,Y(ue)?(te="",m!=null&&(te=m.replace(ve,"$&/")+"/"),X(ue,z,te,"",function(De){return De})):ue!=null&&(de(ue)&&(ue=qe(ue,te+(!ue.key||ke&&ke.key===ue.key?"":(""+ue.key).replace(ve,"$&/")+"/")+m)),z.push(ue)),1;if(ke=0,se=se===""?".":se+":",Y(m))for(var ge=0;ge<m.length;ge++){pe=m[ge];var ye=se+Pe(pe,ge);ke+=X(pe,z,te,ye,ue)}else if(ye=F(m),typeof ye=="function")for(m=ye.call(m),ge=0;!(pe=m.next()).done;)pe=pe.value,ye=se+Pe(pe,ge++),ke+=X(pe,z,te,ye,ue);else if(pe==="object")throw z=String(m),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ke}function lt(m,z,te){if(m==null)return m;var se=[],ue=0;return X(m,se,"","",function(pe){return z.call(te,pe,ue++)}),se}function We(m){if(m._status===-1){var z=m._result;z=z(),z.then(function(te){(m._status===0||m._status===-1)&&(m._status=1,m._result=te)},function(te){(m._status===0||m._status===-1)&&(m._status=2,m._result=te)}),m._status===-1&&(m._status=0,m._result=z)}if(m._status===1)return m._result.default;throw m._result}var we={current:null},D={transition:null},K={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:D,ReactCurrentOwner:Q};function A(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:lt,forEach:function(m,z,te){lt(m,function(){z.apply(this,arguments)},te)},count:function(m){var z=0;return lt(m,function(){z++}),z},toArray:function(m){return lt(m,function(z){return z})||[]},only:function(m){if(!de(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},le.Component=q,le.Fragment=a,le.Profiler=g,le.PureComponent=je,le.StrictMode=p,le.Suspense=M,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,le.act=A,le.cloneElement=function(m,z,te){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var se=ne({},m.props),ue=m.key,pe=m.ref,ke=m._owner;if(z!=null){if(z.ref!==void 0&&(pe=z.ref,ke=Q.current),z.key!==void 0&&(ue=""+z.key),m.type&&m.type.defaultProps)var ge=m.type.defaultProps;for(ye in z)ae.call(z,ye)&&!ce.hasOwnProperty(ye)&&(se[ye]=z[ye]===void 0&&ge!==void 0?ge[ye]:z[ye])}var ye=arguments.length-2;if(ye===1)se.children=te;else if(1<ye){ge=Array(ye);for(var De=0;De<ye;De++)ge[De]=arguments[De+2];se.children=ge}return{$$typeof:i,type:m.type,key:ue,ref:pe,props:se,_owner:ke}},le.createContext=function(m){return m={$$typeof:L,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:b,_context:m},m.Consumer=m},le.createElement=Fe,le.createFactory=function(m){var z=Fe.bind(null,m);return z.type=m,z},le.createRef=function(){return{current:null}},le.forwardRef=function(m){return{$$typeof:P,render:m}},le.isValidElement=de,le.lazy=function(m){return{$$typeof:$,_payload:{_status:-1,_result:m},_init:We}},le.memo=function(m,z){return{$$typeof:O,type:m,compare:z===void 0?null:z}},le.startTransition=function(m){var z=D.transition;D.transition={};try{m()}finally{D.transition=z}},le.unstable_act=A,le.useCallback=function(m,z){return we.current.useCallback(m,z)},le.useContext=function(m){return we.current.useContext(m)},le.useDebugValue=function(){},le.useDeferredValue=function(m){return we.current.useDeferredValue(m)},le.useEffect=function(m,z){return we.current.useEffect(m,z)},le.useId=function(){return we.current.useId()},le.useImperativeHandle=function(m,z,te){return we.current.useImperativeHandle(m,z,te)},le.useInsertionEffect=function(m,z){return we.current.useInsertionEffect(m,z)},le.useLayoutEffect=function(m,z){return we.current.useLayoutEffect(m,z)},le.useMemo=function(m,z){return we.current.useMemo(m,z)},le.useReducer=function(m,z,te){return we.current.useReducer(m,z,te)},le.useRef=function(m){return we.current.useRef(m)},le.useState=function(m){return we.current.useState(m)},le.useSyncExternalStore=function(m,z,te){return we.current.useSyncExternalStore(m,z,te)},le.useTransition=function(){return we.current.useTransition()},le.version="18.3.1",le}var au;function wi(){return au||(au=1,li.exports=Df()),li.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu;function Of(){if(cu)return Br;cu=1;var i=wi(),f=Symbol.for("react.element"),a=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,g=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function L(P,M,O){var $,T={},F=null,re=null;O!==void 0&&(F=""+O),M.key!==void 0&&(F=""+M.key),M.ref!==void 0&&(re=M.ref);for($ in M)p.call(M,$)&&!b.hasOwnProperty($)&&(T[$]=M[$]);if(P&&P.defaultProps)for($ in M=P.defaultProps,M)T[$]===void 0&&(T[$]=M[$]);return{$$typeof:f,type:P,key:F,ref:re,props:T,_owner:g.current}}return Br.Fragment=a,Br.jsx=L,Br.jsxs=L,Br}var uu;function $f(){return uu||(uu=1,si.exports=Of()),si.exports}var u=$f(),S=wi(),os={},ii={exports:{}},st={},ai={exports:{}},ci={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function Af(){return pu||(pu=1,(function(i){function f(D,K){var A=D.length;D.push(K);e:for(;0<A;){var m=A-1>>>1,z=D[m];if(0<g(z,K))D[m]=K,D[A]=z,A=m;else break e}}function a(D){return D.length===0?null:D[0]}function p(D){if(D.length===0)return null;var K=D[0],A=D.pop();if(A!==K){D[0]=A;e:for(var m=0,z=D.length,te=z>>>1;m<te;){var se=2*(m+1)-1,ue=D[se],pe=se+1,ke=D[pe];if(0>g(ue,A))pe<z&&0>g(ke,ue)?(D[m]=ke,D[pe]=A,m=pe):(D[m]=ue,D[se]=A,m=se);else if(pe<z&&0>g(ke,A))D[m]=ke,D[pe]=A,m=pe;else break e}}return K}function g(D,K){var A=D.sortIndex-K.sortIndex;return A!==0?A:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;i.unstable_now=function(){return b.now()}}else{var L=Date,P=L.now();i.unstable_now=function(){return L.now()-P}}var M=[],O=[],$=1,T=null,F=3,re=!1,ne=!1,W=!1,q=typeof setTimeout=="function"?setTimeout:null,Be=typeof clearTimeout=="function"?clearTimeout:null,je=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(D){for(var K=a(O);K!==null;){if(K.callback===null)p(O);else if(K.startTime<=D)p(O),K.sortIndex=K.expirationTime,f(M,K);else break;K=a(O)}}function Y(D){if(W=!1,J(D),!ne)if(a(M)!==null)ne=!0,We(ae);else{var K=a(O);K!==null&&we(Y,K.startTime-D)}}function ae(D,K){ne=!1,W&&(W=!1,Be(Fe),Fe=-1),re=!0;var A=F;try{for(J(K),T=a(M);T!==null&&(!(T.expirationTime>K)||D&&!Ce());){var m=T.callback;if(typeof m=="function"){T.callback=null,F=T.priorityLevel;var z=m(T.expirationTime<=K);K=i.unstable_now(),typeof z=="function"?T.callback=z:T===a(M)&&p(M),J(K)}else p(M);T=a(M)}if(T!==null)var te=!0;else{var se=a(O);se!==null&&we(Y,se.startTime-K),te=!1}return te}finally{T=null,F=A,re=!1}}var Q=!1,ce=null,Fe=-1,qe=5,de=-1;function Ce(){return!(i.unstable_now()-de<qe)}function ve(){if(ce!==null){var D=i.unstable_now();de=D;var K=!0;try{K=ce(!0,D)}finally{K?Pe():(Q=!1,ce=null)}}else Q=!1}var Pe;if(typeof je=="function")Pe=function(){je(ve)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,lt=X.port2;X.port1.onmessage=ve,Pe=function(){lt.postMessage(null)}}else Pe=function(){q(ve,0)};function We(D){ce=D,Q||(Q=!0,Pe())}function we(D,K){Fe=q(function(){D(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){ne||re||(ne=!0,We(ae))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return F},i.unstable_getFirstCallbackNode=function(){return a(M)},i.unstable_next=function(D){switch(F){case 1:case 2:case 3:var K=3;break;default:K=F}var A=F;F=K;try{return D()}finally{F=A}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var A=F;F=D;try{return K()}finally{F=A}},i.unstable_scheduleCallback=function(D,K,A){var m=i.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?m+A:m):A=m,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,D={id:$++,callback:K,priorityLevel:D,startTime:A,expirationTime:z,sortIndex:-1},A>m?(D.sortIndex=A,f(O,D),a(M)===null&&D===a(O)&&(W?(Be(Fe),Fe=-1):W=!0,we(Y,A-m))):(D.sortIndex=z,f(M,D),ne||re||(ne=!0,We(ae))),D},i.unstable_shouldYield=Ce,i.unstable_wrapCallback=function(D){var K=F;return function(){var A=F;F=K;try{return D.apply(this,arguments)}finally{F=A}}}})(ci)),ci}var fu;function If(){return fu||(fu=1,ai.exports=Af()),ai.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du;function Hf(){if(du)return st;du=1;var i=wi(),f=If();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,g={};function b(e,t){L(e,t),L(e+"Capture",t)}function L(e,t){for(g[e]=t,e=0;e<t.length;e++)p.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),M=Object.prototype.hasOwnProperty,O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},T={};function F(e){return M.call(T,e)?!0:M.call($,e)?!1:O.test(e)?T[e]=!0:($[e]=!0,!1)}function re(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,t,n,r){if(t===null||typeof t>"u"||re(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,r,o,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var Be=/[\-:]([a-z])/g;function je(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Be,je);q[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Be,je);q[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Be,je);q[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,t,n,r){var o=q.hasOwnProperty(t)?q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ne(t,n,o,r)&&(n=null),r||o===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Y=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),Q=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),Fe=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),D=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,m;function z(e){if(m===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var te=!1;function se(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),s=r.stack.split(`
`),l=o.length-1,c=s.length-1;1<=l&&0<=c&&o[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(o[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||o[l]!==s[c]){var d=`
`+o[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function ue(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case Q:return"Portal";case qe:return"Profiler";case Fe:return"StrictMode";case Pe:return"Suspense";case X:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ce:return(e.displayName||"Context")+".Consumer";case de:return(e._context.displayName||"Context")+".Provider";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lt:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===Fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){e._valueTracker||(e._valueTracker=De(e))}function Vr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nr(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wr(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ge(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cn(e,t){t=t.checked,t!=null&&J(e,"checked",t,!1)}function Nn(e,t){Cn(e,t);var n=ge(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jn(e,t.type,n):t.hasOwnProperty("defaultValue")&&jn(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jn(e,t,n){(t!=="number"||dn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bt=Array.isArray;function Ut(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ge(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function or(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Bt(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ge(n)}}function sr(e,t){var n=ge(t.value),r=ge(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function v(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function k(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?v(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _,ie=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_=_||document.createElement("div"),_.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(he).forEach(function(e){Je.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});function Rt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function Zr(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rt(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Gr=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gs(e,t){if(t){if(Gr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Pn=null,Rn=null;function Si(e){if(e=Er(e)){if(typeof ks!="function")throw Error(a(280));var t=e.stateNode;t&&(t=xo(t),ks(e.stateNode,e.type,t))}}function _i(e){Pn?Rn?Rn.push(e):Rn=[e]:Pn=e}function zi(){if(Pn){var e=Pn,t=Rn;if(Rn=Pn=null,Si(e),t)for(e=0;e<t.length;e++)Si(t[e])}}function Ei(e,t){return e(t)}function Ci(){}var bs=!1;function Ni(e,t,n){if(bs)return e(t,n);bs=!0;try{return Ei(e,t,n)}finally{bs=!1,(Pn!==null||Rn!==null)&&(Ci(),zi())}}function lr(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Ls=!1;if(P)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{Ls=!1}function Iu(e,t,n,r,o,s,l,c,d){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(C){this.onError(C)}}var ar=!1,Yr=null,Xr=!1,Ss=null,Hu={onError:function(e){ar=!0,Yr=e}};function Bu(e,t,n,r,o,s,l,c,d){ar=!1,Yr=null,Iu.apply(Hu,arguments)}function Uu(e,t,n,r,o,s,l,c,d){if(Bu.apply(this,arguments),ar){if(ar){var w=Yr;ar=!1,Yr=null}else throw Error(a(198));Xr||(Xr=!0,Ss=w)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ji(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pi(e){if(hn(e)!==e)throw Error(a(188))}function Vu(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return Pi(o),e;if(s===r)return Pi(o),t;s=s.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=s;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,r=s;break}if(c===r){l=!0,r=o,n=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===n){l=!0,n=s,r=o;break}if(c===r){l=!0,r=s,n=o;break}c=c.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Ri(e){return e=Vu(e),e!==null?Mi(e):null}function Mi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mi(e);if(t!==null)return t;e=e.sibling}return null}var Ti=f.unstable_scheduleCallback,Fi=f.unstable_cancelCallback,Wu=f.unstable_shouldYield,Qu=f.unstable_requestPaint,Re=f.unstable_now,Ku=f.unstable_getCurrentPriorityLevel,_s=f.unstable_ImmediatePriority,Di=f.unstable_UserBlockingPriority,qr=f.unstable_NormalPriority,Zu=f.unstable_LowPriority,Oi=f.unstable_IdlePriority,Jr=null,zt=null;function Gu(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Jr,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:qu,Yu=Math.log,Xu=Math.LN2;function qu(e){return e>>>=0,e===0?32:31-(Yu(e)/Xu|0)|0}var eo=64,to=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~o;c!==0?r=cr(c):(s&=l,s!==0&&(r=cr(s)))}else l=n&~o,l!==0?r=cr(l):s!==0&&(r=cr(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ep(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-yt(s),c=1<<l,d=o[l];d===-1?((c&n)===0||(c&r)!==0)&&(o[l]=Ju(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $i(){var e=eo;return eo<<=1,(eo&4194240)===0&&(eo=64),e}function Es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function tp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xe=0;function Ai(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ii,Ns,Hi,Bi,Ui,js=!1,ro=[],Vt=null,Wt=null,Qt=null,pr=new Map,fr=new Map,Kt=[],np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vi(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function dr(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Er(t),t!==null&&Ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rp(e,t,n,r,o){switch(t){case"focusin":return Vt=dr(Vt,e,t,n,r,o),!0;case"dragenter":return Wt=dr(Wt,e,t,n,r,o),!0;case"mouseover":return Qt=dr(Qt,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return pr.set(s,dr(pr.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,fr.set(s,dr(fr.get(s)||null,e,t,n,r,o)),!0}return!1}function Wi(e){var t=mn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=ji(n),t!==null){e.blockedOn=t,Ui(e.priority,function(){Hi(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xs=r,n.target.dispatchEvent(r),xs=null}else return t=Er(n),t!==null&&Ns(t),e.blockedOn=n,!1;t.shift()}return!0}function Qi(e,t,n){oo(e)&&n.delete(t)}function op(){js=!1,Vt!==null&&oo(Vt)&&(Vt=null),Wt!==null&&oo(Wt)&&(Wt=null),Qt!==null&&oo(Qt)&&(Qt=null),pr.forEach(Qi),fr.forEach(Qi)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,op)))}function mr(e){function t(o){return hr(o,e)}if(0<ro.length){hr(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&hr(Vt,e),Wt!==null&&hr(Wt,e),Qt!==null&&hr(Qt,e),pr.forEach(t),fr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Wi(n),n.blockedOn===null&&Kt.shift()}var Mn=Y.ReactCurrentBatchConfig,so=!0;function sp(e,t,n,r){var o=xe,s=Mn.transition;Mn.transition=null;try{xe=1,Ps(e,t,n,r)}finally{xe=o,Mn.transition=s}}function lp(e,t,n,r){var o=xe,s=Mn.transition;Mn.transition=null;try{xe=4,Ps(e,t,n,r)}finally{xe=o,Mn.transition=s}}function Ps(e,t,n,r){if(so){var o=Rs(e,t,n,r);if(o===null)Gs(e,t,r,lo,n),Vi(e,r);else if(rp(o,e,t,n,r))r.stopPropagation();else if(Vi(e,r),t&4&&-1<np.indexOf(e)){for(;o!==null;){var s=Er(o);if(s!==null&&Ii(s),s=Rs(e,t,n,r),s===null&&Gs(e,t,r,lo,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else Gs(e,t,r,null,n)}}var lo=null;function Rs(e,t,n,r){if(lo=null,e=ws(r),e=mn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ji(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return lo=e,null}function Ki(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case _s:return 1;case Di:return 4;case qr:case Zu:return 16;case Oi:return 536870912;default:return 16}default:return 16}}var Zt=null,Ms=null,io=null;function Zi(){if(io)return io;var e,t=Ms,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[s-r];r++);return io=o.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function Gi(){return!1}function it(e){function t(n,r,o,s,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:Gi,this.isPropagationStopped=Gi,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=it(Tn),vr=A({},Tn,{view:0,detail:0}),ip=it(vr),Fs,Ds,gr,uo=A({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Fs=e.screenX-gr.screenX,Ds=e.screenY-gr.screenY):Ds=Fs=0,gr=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),Yi=it(uo),ap=A({},uo,{dataTransfer:0}),cp=it(ap),up=A({},vr,{relatedTarget:0}),Os=it(up),pp=A({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=it(pp),dp=A({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=it(dp),mp=A({},Tn,{data:0}),Xi=it(mp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function $s(){return xp}var wp=A({},vr,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=it(wp),bp=A({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qi=it(bp),Lp=A({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),Sp=it(Lp),_p=A({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=it(_p),Ep=A({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=it(Ep),Np=[9,13,27,32],As=P&&"CompositionEvent"in window,yr=null;P&&"documentMode"in document&&(yr=document.documentMode);var jp=P&&"TextEvent"in window&&!yr,Ji=P&&(!As||yr&&8<yr&&11>=yr),ea=" ",ta=!1;function na(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Pp(e,t){switch(e){case"compositionend":return ra(t);case"keypress":return t.which!==32?null:(ta=!0,ea);case"textInput":return e=t.data,e===ea&&ta?null:e;default:return null}}function Rp(e,t){if(Fn)return e==="compositionend"||!As&&na(e,t)?(e=Zi(),io=Ms=Zt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ji&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function sa(e,t,n,r){_i(r),t=vo(t,"onChange"),0<t.length&&(n=new Ts("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,wr=null;function Tp(e){La(e,0)}function po(e){var t=In(e);if(Vr(t))return e}function Fp(e,t){if(e==="change")return t}var la=!1;if(P){var Is;if(P){var Hs="oninput"in document;if(!Hs){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),Hs=typeof ia.oninput=="function"}Is=Hs}else Is=!1;la=Is&&(!document.documentMode||9<document.documentMode)}function aa(){xr&&(xr.detachEvent("onpropertychange",ca),wr=xr=null)}function ca(e){if(e.propertyName==="value"&&po(wr)){var t=[];sa(t,wr,e,ws(e)),Ni(Tp,t)}}function Dp(e,t,n){e==="focusin"?(aa(),xr=t,wr=n,xr.attachEvent("onpropertychange",ca)):e==="focusout"&&aa()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(wr)}function $p(e,t){if(e==="click")return po(t)}function Ap(e,t){if(e==="input"||e==="change")return po(t)}function Ip(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Ip;function kr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!M.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pa(e,t){var n=ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ua(n)}}function fa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function da(){for(var e=window,t=dn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=dn(e.document)}return t}function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hp(e){var t=da(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fa(n.ownerDocument.documentElement,n)){if(r!==null&&Bs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=pa(n,s);var l=pa(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bp=P&&"documentMode"in document&&11>=document.documentMode,Dn=null,Us=null,br=null,Vs=!1;function ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vs||Dn==null||Dn!==dn(r)||(r=Dn,"selectionStart"in r&&Bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&kr(br,r)||(br=r,r=vo(Us,"onSelect"),0<r.length&&(t=new Ts("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Ws={},ma={};P&&(ma=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function ho(e){if(Ws[e])return Ws[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ma)return Ws[e]=t[n];return e}var va=ho("animationend"),ga=ho("animationiteration"),ya=ho("animationstart"),xa=ho("transitionend"),wa=new Map,ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){wa.set(e,t),b(t,[e])}for(var Qs=0;Qs<ka.length;Qs++){var Ks=ka[Qs],Up=Ks.toLowerCase(),Vp=Ks[0].toUpperCase()+Ks.slice(1);Gt(Up,"on"+Vp)}Gt(va,"onAnimationEnd"),Gt(ga,"onAnimationIteration"),Gt(ya,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(xa,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uu(r,t,void 0,e),e.currentTarget=null}function La(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,w=c.currentTarget;if(c=c.listener,d!==s&&o.isPropagationStopped())break e;ba(o,c,w),s=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,w=c.currentTarget,c=c.listener,d!==s&&o.isPropagationStopped())break e;ba(o,c,w),s=d}}}if(Xr)throw e=Ss,Xr=!1,Ss=null,e}function Le(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var r=e+"__bubble";n.has(r)||(Sa(t,e,2,!1),n.add(r))}function Zs(e,t,n){var r=0;t&&(r|=4),Sa(n,e,r,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[mo]){e[mo]=!0,p.forEach(function(n){n!=="selectionchange"&&(Wp.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,Zs("selectionchange",!1,t))}}function Sa(e,t,n,r){switch(Ki(t)){case 1:var o=sp;break;case 4:o=lp;break;default:o=Ps}n=o.bind(null,t,n,e),o=void 0,!Ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Gs(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;c!==null;){if(l=mn(c),l===null)return;if(d=l.tag,d===5||d===6){r=s=l;continue e}c=c.parentNode}}r=r.return}Ni(function(){var w=s,C=ws(n),j=[];e:{var E=wa.get(e);if(E!==void 0){var I=Ts,B=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":I=kp;break;case"focusin":B="focus",I=Os;break;case"focusout":B="blur",I=Os;break;case"beforeblur":case"afterblur":I=Os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Yi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Sp;break;case va:case ga:case ya:I=fp;break;case xa:I=zp;break;case"scroll":I=ip;break;case"wheel":I=Cp;break;case"copy":case"cut":case"paste":I=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=qi}var U=(t&4)!==0,Me=!U&&e==="scroll",y=U?E!==null?E+"Capture":null:E;U=[];for(var h=w,x;h!==null;){x=h;var R=x.stateNode;if(x.tag===5&&R!==null&&(x=R,y!==null&&(R=lr(h,y),R!=null&&U.push(_r(h,R,x)))),Me)break;h=h.return}0<U.length&&(E=new I(E,B,null,n,C),j.push({event:E,listeners:U}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",E&&n!==xs&&(B=n.relatedTarget||n.fromElement)&&(mn(B)||B[Mt]))break e;if((I||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,I?(B=n.relatedTarget||n.toElement,I=w,B=B?mn(B):null,B!==null&&(Me=hn(B),B!==Me||B.tag!==5&&B.tag!==6)&&(B=null)):(I=null,B=w),I!==B)){if(U=Yi,R="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(U=qi,R="onPointerLeave",y="onPointerEnter",h="pointer"),Me=I==null?E:In(I),x=B==null?E:In(B),E=new U(R,h+"leave",I,n,C),E.target=Me,E.relatedTarget=x,R=null,mn(C)===w&&(U=new U(y,h+"enter",B,n,C),U.target=x,U.relatedTarget=Me,R=U),Me=R,I&&B)t:{for(U=I,y=B,h=0,x=U;x;x=$n(x))h++;for(x=0,R=y;R;R=$n(R))x++;for(;0<h-x;)U=$n(U),h--;for(;0<x-h;)y=$n(y),x--;for(;h--;){if(U===y||y!==null&&U===y.alternate)break t;U=$n(U),y=$n(y)}U=null}else U=null;I!==null&&_a(j,E,I,U,!1),B!==null&&Me!==null&&_a(j,Me,B,U,!0)}}e:{if(E=w?In(w):window,I=E.nodeName&&E.nodeName.toLowerCase(),I==="select"||I==="input"&&E.type==="file")var V=Fp;else if(oa(E))if(la)V=Ap;else{V=Op;var Z=Dp}else(I=E.nodeName)&&I.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(V=$p);if(V&&(V=V(e,w))){sa(j,V,n,C);break e}Z&&Z(e,E,w),e==="focusout"&&(Z=E._wrapperState)&&Z.controlled&&E.type==="number"&&jn(E,"number",E.value)}switch(Z=w?In(w):window,e){case"focusin":(oa(Z)||Z.contentEditable==="true")&&(Dn=Z,Us=w,br=null);break;case"focusout":br=Us=Dn=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,ha(j,n,C);break;case"selectionchange":if(Bp)break;case"keydown":case"keyup":ha(j,n,C)}var G;if(As)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Fn?na(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(Ji&&n.locale!=="ko"&&(Fn||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Fn&&(G=Zi()):(Zt=C,Ms="value"in Zt?Zt.value:Zt.textContent,Fn=!0)),Z=vo(w,ee),0<Z.length&&(ee=new Xi(ee,e,null,n,C),j.push({event:ee,listeners:Z}),G?ee.data=G:(G=ra(n),G!==null&&(ee.data=G)))),(G=jp?Pp(e,n):Rp(e,n))&&(w=vo(w,"onBeforeInput"),0<w.length&&(C=new Xi("onBeforeInput","beforeinput",null,n,C),j.push({event:C,listeners:w}),C.data=G))}La(j,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=lr(e,n),s!=null&&r.unshift(_r(e,s,o)),s=lr(e,t),s!=null&&r.push(_r(e,s,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,o){for(var s=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,w=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&w!==null&&(c=w,o?(d=lr(n,s),d!=null&&l.unshift(_r(n,d,c))):o||(d=lr(n,s),d!=null&&l.push(_r(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Qp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(Qp,`
`).replace(Kp,"")}function go(e,t,n){if(t=za(t),za(e)!==t&&n)throw Error(a(425))}function yo(){}var Ys=null,Xs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,Zp=typeof clearTimeout=="function"?clearTimeout:void 0,Ea=typeof Promise=="function"?Promise:void 0,Gp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ea<"u"?function(e){return Ea.resolve(null).then(e).catch(Yp)}:Js;function Yp(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ca(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Et="__reactFiber$"+An,zr="__reactProps$"+An,Mt="__reactContainer$"+An,tl="__reactEvents$"+An,Xp="__reactListeners$"+An,qp="__reactHandles$"+An;function mn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ca(e);e!==null;){if(n=e[Et])return n;e=Ca(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[Et]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function xo(e){return e[zr]||null}var nl=[],Hn=-1;function Xt(e){return{current:e}}function Se(e){0>Hn||(e.current=nl[Hn],nl[Hn]=null,Hn--)}function be(e,t){Hn++,nl[Hn]=e.current,e.current=t}var qt={},Qe=Xt(qt),et=Xt(!1),vn=qt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function wo(){Se(et),Se(Qe)}function Na(e,t,n){if(Qe.current!==qt)throw Error(a(168));be(Qe,t),be(et,n)}function ja(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(a(108,ke(e)||"Unknown",o));return A({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,vn=Qe.current,be(Qe,e),be(et,et.current),!0}function Pa(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=ja(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,Se(et),Se(Qe),be(Qe,e)):Se(et),be(et,n)}var Tt=null,bo=!1,rl=!1;function Ra(e){Tt===null?Tt=[e]:Tt.push(e)}function Jp(e){bo=!0,Ra(e)}function Jt(){if(!rl&&Tt!==null){rl=!0;var e=0,t=xe;try{var n=Tt;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,bo=!1}catch(o){throw Tt!==null&&(Tt=Tt.slice(e+1)),Ti(_s,Jt),o}finally{xe=t,rl=!1}}return null}var Un=[],Vn=0,Lo=null,So=0,pt=[],ft=0,gn=null,Ft=1,Dt="";function yn(e,t){Un[Vn++]=So,Un[Vn++]=Lo,Lo=e,So=t}function Ma(e,t,n){pt[ft++]=Ft,pt[ft++]=Dt,pt[ft++]=gn,gn=e;var r=Ft;e=Dt;var o=32-yt(r)-1;r&=~(1<<o),n+=1;var s=32-yt(t)+o;if(30<s){var l=o-o%5;s=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ft=1<<32-yt(t)+o|n<<o|r,Dt=s+e}else Ft=1<<s|n<<o|r,Dt=e}function ol(e){e.return!==null&&(yn(e,1),Ma(e,1,0))}function sl(e){for(;e===Lo;)Lo=Un[--Vn],Un[Vn]=null,So=Un[--Vn],Un[Vn]=null;for(;e===gn;)gn=pt[--ft],pt[ft]=null,Dt=pt[--ft],pt[ft]=null,Ft=pt[--ft],pt[ft]=null}var at=null,ct=null,_e=!1,wt=null;function Ta(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ct=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:Ft,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ct=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(_e){var t=ct;if(t){var n=t;if(!Fa(e,t)){if(ll(e))throw Error(a(418));t=Yt(n.nextSibling);var r=at;t&&Fa(e,t)?Ta(r,n):(e.flags=e.flags&-4097|2,_e=!1,at=e)}}else{if(ll(e))throw Error(a(418));e.flags=e.flags&-4097|2,_e=!1,at=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function _o(e){if(e!==at)return!1;if(!_e)return Da(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=ct)){if(ll(e))throw Oa(),Error(a(418));for(;t;)Ta(e,t),t=Yt(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=at?Yt(e.stateNode.nextSibling):null;return!0}function Oa(){for(var e=ct;e;)e=Yt(e.nextSibling)}function Wn(){ct=at=null,_e=!1}function al(e){wt===null?wt=[e]:wt.push(e)}var ef=Y.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=o.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $a(e){var t=e._init;return t(e._payload)}function Aa(e){function t(y,h){if(e){var x=y.deletions;x===null?(y.deletions=[h],y.flags|=16):x.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function o(y,h){return y=an(y,h),y.index=0,y.sibling=null,y}function s(y,h,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<h?(y.flags|=2,h):x):(y.flags|=2,h)):(y.flags|=1048576,h)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,h,x,R){return h===null||h.tag!==6?(h=Jl(x,y.mode,R),h.return=y,h):(h=o(h,x),h.return=y,h)}function d(y,h,x,R){var V=x.type;return V===ce?C(y,h,x.props.children,R,x.key):h!==null&&(h.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===We&&$a(V)===h.type)?(R=o(h,x.props),R.ref=Cr(y,h,x),R.return=y,R):(R=Yo(x.type,x.key,x.props,null,y.mode,R),R.ref=Cr(y,h,x),R.return=y,R)}function w(y,h,x,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=ei(x,y.mode,R),h.return=y,h):(h=o(h,x.children||[]),h.return=y,h)}function C(y,h,x,R,V){return h===null||h.tag!==7?(h=zn(x,y.mode,R,V),h.return=y,h):(h=o(h,x),h.return=y,h)}function j(y,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Jl(""+h,y.mode,x),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ae:return x=Yo(h.type,h.key,h.props,null,y.mode,x),x.ref=Cr(y,null,h),x.return=y,x;case Q:return h=ei(h,y.mode,x),h.return=y,h;case We:var R=h._init;return j(y,R(h._payload),x)}if(Bt(h)||K(h))return h=zn(h,y.mode,x,null),h.return=y,h;zo(y,h)}return null}function E(y,h,x,R){var V=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:c(y,h,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ae:return x.key===V?d(y,h,x,R):null;case Q:return x.key===V?w(y,h,x,R):null;case We:return V=x._init,E(y,h,V(x._payload),R)}if(Bt(x)||K(x))return V!==null?null:C(y,h,x,R,null);zo(y,x)}return null}function I(y,h,x,R,V){if(typeof R=="string"&&R!==""||typeof R=="number")return y=y.get(x)||null,c(h,y,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ae:return y=y.get(R.key===null?x:R.key)||null,d(h,y,R,V);case Q:return y=y.get(R.key===null?x:R.key)||null,w(h,y,R,V);case We:var Z=R._init;return I(y,h,x,Z(R._payload),V)}if(Bt(R)||K(R))return y=y.get(x)||null,C(h,y,R,V,null);zo(h,R)}return null}function B(y,h,x,R){for(var V=null,Z=null,G=h,ee=h=0,He=null;G!==null&&ee<x.length;ee++){G.index>ee?(He=G,G=null):He=G.sibling;var me=E(y,G,x[ee],R);if(me===null){G===null&&(G=He);break}e&&G&&me.alternate===null&&t(y,G),h=s(me,h,ee),Z===null?V=me:Z.sibling=me,Z=me,G=He}if(ee===x.length)return n(y,G),_e&&yn(y,ee),V;if(G===null){for(;ee<x.length;ee++)G=j(y,x[ee],R),G!==null&&(h=s(G,h,ee),Z===null?V=G:Z.sibling=G,Z=G);return _e&&yn(y,ee),V}for(G=r(y,G);ee<x.length;ee++)He=I(G,y,ee,x[ee],R),He!==null&&(e&&He.alternate!==null&&G.delete(He.key===null?ee:He.key),h=s(He,h,ee),Z===null?V=He:Z.sibling=He,Z=He);return e&&G.forEach(function(cn){return t(y,cn)}),_e&&yn(y,ee),V}function U(y,h,x,R){var V=K(x);if(typeof V!="function")throw Error(a(150));if(x=V.call(x),x==null)throw Error(a(151));for(var Z=V=null,G=h,ee=h=0,He=null,me=x.next();G!==null&&!me.done;ee++,me=x.next()){G.index>ee?(He=G,G=null):He=G.sibling;var cn=E(y,G,me.value,R);if(cn===null){G===null&&(G=He);break}e&&G&&cn.alternate===null&&t(y,G),h=s(cn,h,ee),Z===null?V=cn:Z.sibling=cn,Z=cn,G=He}if(me.done)return n(y,G),_e&&yn(y,ee),V;if(G===null){for(;!me.done;ee++,me=x.next())me=j(y,me.value,R),me!==null&&(h=s(me,h,ee),Z===null?V=me:Z.sibling=me,Z=me);return _e&&yn(y,ee),V}for(G=r(y,G);!me.done;ee++,me=x.next())me=I(G,y,ee,me.value,R),me!==null&&(e&&me.alternate!==null&&G.delete(me.key===null?ee:me.key),h=s(me,h,ee),Z===null?V=me:Z.sibling=me,Z=me);return e&&G.forEach(function(Tf){return t(y,Tf)}),_e&&yn(y,ee),V}function Me(y,h,x,R){if(typeof x=="object"&&x!==null&&x.type===ce&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ae:e:{for(var V=x.key,Z=h;Z!==null;){if(Z.key===V){if(V=x.type,V===ce){if(Z.tag===7){n(y,Z.sibling),h=o(Z,x.props.children),h.return=y,y=h;break e}}else if(Z.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===We&&$a(V)===Z.type){n(y,Z.sibling),h=o(Z,x.props),h.ref=Cr(y,Z,x),h.return=y,y=h;break e}n(y,Z);break}else t(y,Z);Z=Z.sibling}x.type===ce?(h=zn(x.props.children,y.mode,R,x.key),h.return=y,y=h):(R=Yo(x.type,x.key,x.props,null,y.mode,R),R.ref=Cr(y,h,x),R.return=y,y=R)}return l(y);case Q:e:{for(Z=x.key;h!==null;){if(h.key===Z)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(y,h.sibling),h=o(h,x.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=ei(x,y.mode,R),h.return=y,y=h}return l(y);case We:return Z=x._init,Me(y,h,Z(x._payload),R)}if(Bt(x))return B(y,h,x,R);if(K(x))return U(y,h,x,R);zo(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(y,h.sibling),h=o(h,x),h.return=y,y=h):(n(y,h),h=Jl(x,y.mode,R),h.return=y,y=h),l(y)):n(y,h)}return Me}var Qn=Aa(!0),Ia=Aa(!1),Eo=Xt(null),Co=null,Kn=null,cl=null;function ul(){cl=Kn=Co=null}function pl(e){var t=Eo.current;Se(Eo),e._currentValue=t}function fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Co=e,cl=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Co===null)throw Error(a(308));Kn=e,Co.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var xn=null;function dl(e){xn===null?xn=[e]:xn.push(e)}function Ha(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,dl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ot(e,n)}return o=r.interleaved,o===null?(t.next=t,dl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ot(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var o=e.updateQueue;en=!1;var s=o.firstBaseUpdate,l=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var d=c,w=d.next;d.next=null,l===null?s=w:l.next=w,l=d;var C=e.alternate;C!==null&&(C=C.updateQueue,c=C.lastBaseUpdate,c!==l&&(c===null?C.firstBaseUpdate=w:c.next=w,C.lastBaseUpdate=d))}if(s!==null){var j=o.baseState;l=0,C=w=d=null,c=s;do{var E=c.lane,I=c.eventTime;if((r&E)===E){C!==null&&(C=C.next={eventTime:I,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var B=e,U=c;switch(E=t,I=n,U.tag){case 1:if(B=U.payload,typeof B=="function"){j=B.call(I,j,E);break e}j=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=U.payload,E=typeof B=="function"?B.call(I,j,E):B,E==null)break e;j=A({},j,E);break e;case 2:en=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,E=o.effects,E===null?o.effects=[c]:E.push(c))}else I={eventTime:I,lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},C===null?(w=C=I,d=j):C=C.next=I,l|=E;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;E=c,c=E.next,E.next=null,o.lastBaseUpdate=E,o.shared.pending=null}}while(!0);if(C===null&&(d=j),o.baseState=d,o.firstBaseUpdate=w,o.lastBaseUpdate=C,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);bn|=l,e.lanes=l,e.memoizedState=j}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(a(191,o));o.call(r)}}}var Nr={},Ct=Xt(Nr),jr=Xt(Nr),Pr=Xt(Nr);function wn(e){if(e===Nr)throw Error(a(174));return e}function ml(e,t){switch(be(Pr,t),be(jr,e),be(Ct,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:k(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=k(t,e)}Se(Ct),be(Ct,t)}function Gn(){Se(Ct),Se(jr),Se(Pr)}function Wa(e){wn(Pr.current);var t=wn(Ct.current),n=k(t,e.type);t!==n&&(be(jr,e),be(Ct,n))}function vl(e){jr.current===e&&(Se(Ct),Se(jr))}var ze=Xt(0);function Po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function yl(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Ro=Y.ReactCurrentDispatcher,xl=Y.ReactCurrentBatchConfig,kn=0,Ee=null,Oe=null,Ae=null,Mo=!1,Rr=!1,Mr=0,tf=0;function Ke(){throw Error(a(321))}function wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function kl(e,t,n,r,o,s){if(kn=s,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?sf:lf,e=n(r,o),Rr){s=0;do{if(Rr=!1,Mr=0,25<=s)throw Error(a(301));s+=1,Ae=Oe=null,t.updateQueue=null,Ro.current=af,e=n(r,o)}while(Rr)}if(Ro.current=Do,t=Oe!==null&&Oe.next!==null,kn=0,Ae=Oe=Ee=null,Mo=!1,t)throw Error(a(300));return e}function bl(){var e=Mr!==0;return Mr=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Ee.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ht(){if(Oe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ae===null?Ee.memoizedState:Ae.next;if(t!==null)Ae=t,Oe=e;else{if(e===null)throw Error(a(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ae===null?Ee.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Tr(e,t){return typeof t=="function"?t(e):t}function Ll(e){var t=ht(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Oe,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var l=o.next;o.next=s.next,s.next=l}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var c=l=null,d=null,w=s;do{var C=w.lane;if((kn&C)===C)d!==null&&(d=d.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var j={lane:C,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};d===null?(c=d=j,l=r):d=d.next=j,Ee.lanes|=C,bn|=C}w=w.next}while(w!==null&&w!==s);d===null?l=r:d.next=c,xt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,Ee.lanes|=s,bn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=ht(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do s=e(s,l.action),l=l.next;while(l!==o);xt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qa(){}function Ka(e,t){var n=Ee,r=ht(),o=t(),s=!xt(r.memoizedState,o);if(s&&(r.memoizedState=o,nt=!0),r=r.queue,_l(Ya.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Ga.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(a(349));(kn&30)!==0||Za(n,t,o)}return o}function Za(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Xa(t)&&qa(e)}function Ya(e,t,n){return n(function(){Xa(t)&&qa(e)})}function Xa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function qa(e){var t=Ot(e,1);t!==null&&St(t,e,1,-1)}function Ja(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,Ee,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ec(){return ht().memoizedState}function To(e,t,n,r){var o=Nt();Ee.flags|=e,o.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var o=ht();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var l=Oe.memoizedState;if(s=l.destroy,r!==null&&wl(r,l.deps)){o.memoizedState=Fr(t,n,s,r);return}}Ee.flags|=e,o.memoizedState=Fr(1|t,n,s,r)}function tc(e,t){return To(8390656,8,e,t)}function _l(e,t){return Fo(2048,8,e,t)}function nc(e,t){return Fo(4,2,e,t)}function rc(e,t){return Fo(4,4,e,t)}function oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sc(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,oc.bind(null,t,e),n)}function zl(){}function lc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ic(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ac(e,t,n){return(kn&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n):(xt(n,t)||(n=$i(),Ee.lanes|=n,bn|=n,e.baseState=!0),t)}function nf(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),t()}finally{xe=n,xl.transition=r}}function cc(){return ht().memoizedState}function rf(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uc(e))pc(t,n);else if(n=Ha(e,t,n,r),n!==null){var o=Xe();St(n,e,r,o),fc(n,t,r)}}function of(e,t,n){var r=sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uc(e))pc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(o.hasEagerState=!0,o.eagerState=c,xt(c,l)){var d=t.interleaved;d===null?(o.next=o,dl(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=Ha(e,t,o,r),n!==null&&(o=Xe(),St(n,e,r,o),fc(n,t,r))}}function uc(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function pc(e,t){Rr=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}var Do={readContext:dt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},sf={readContext:dt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,oc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Ja,useDebugValue:zl,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Ja(!1),t=e[0];return e=nf.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,o=Nt();if(_e){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Ie===null)throw Error(a(349));(kn&30)!==0||Za(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,tc(Ya.bind(null,r,s,e),[e]),r.flags|=2048,Fr(9,Ga.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Ie.identifierPrefix;if(_e){var n=Dt,r=Ft;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:dt,useCallback:lc,useContext:dt,useEffect:_l,useImperativeHandle:sc,useInsertionEffect:nc,useLayoutEffect:rc,useMemo:ic,useReducer:Ll,useRef:ec,useState:function(){return Ll(Tr)},useDebugValue:zl,useDeferredValue:function(e){var t=ht();return ac(t,Oe.memoizedState,e)},useTransition:function(){var e=Ll(Tr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Qa,useSyncExternalStore:Ka,useId:cc,unstable_isNewReconciler:!1},af={readContext:dt,useCallback:lc,useContext:dt,useEffect:_l,useImperativeHandle:sc,useInsertionEffect:nc,useLayoutEffect:rc,useMemo:ic,useReducer:Sl,useRef:ec,useState:function(){return Sl(Tr)},useDebugValue:zl,useDeferredValue:function(e){var t=ht();return Oe===null?t.memoizedState=e:ac(t,Oe.memoizedState,e)},useTransition:function(){var e=Sl(Tr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Qa,useSyncExternalStore:Ka,useId:cc,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function El(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=sn(e),s=$t(r,o);s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,o),t!==null&&(St(t,e,o,r),No(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=sn(e),s=$t(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,o),t!==null&&(St(t,e,o,r),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=sn(e),o=$t(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(St(t,e,r,n),No(t,e,r))}};function dc(e,t,n,r,o,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(o,s):!0}function hc(e,t,n){var r=!1,o=qt,s=t.contextType;return typeof s=="object"&&s!==null?s=dt(s):(o=tt(t)?vn:Qe.current,r=t.contextTypes,s=(r=r!=null)?Bn(e,o):qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Cl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},hl(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=dt(s):(s=tt(t)?vn:Qe.current,o.context=Bn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(El(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oo.enqueueReplaceState(o,o.state,null),jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=ue(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function vc(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Wl=r),jl(e,t)},n}function gc(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Lf.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var uf=Y.ReactCurrentOwner,nt=!1;function Ye(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Qn(t,e.child,n,r)}function kc(e,t,n,r,o){n=n.render;var s=t.ref;return Zn(t,o),r=kl(e,t,n,r,s,o),n=bl(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(_e&&n&&ol(t),t.flags|=1,Ye(e,t,r,o),t.child)}function bc(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!ql(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Lc(e,t,s,r,o)):(e=Yo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(l,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=an(s,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(kr(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,At(e,t,o)}return Pl(e,t,n,r,o)}function Sc(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(qn,ut),ut|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(qn,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,be(qn,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,be(qn,ut),ut|=r;return Ye(e,t,o,n),t.child}function _c(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,o){var s=tt(n)?vn:Qe.current;return s=Bn(t,s),Zn(t,o),n=kl(e,t,n,r,s,o),r=bl(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(_e&&r&&ol(t),t.flags|=1,Ye(e,t,n,o),t.child)}function zc(e,t,n,r,o){if(tt(n)){var s=!0;ko(t)}else s=!1;if(Zn(t,o),t.stateNode===null)Ao(e,t),hc(t,n,r),Cl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,w=n.contextType;typeof w=="object"&&w!==null?w=dt(w):(w=tt(n)?vn:Qe.current,w=Bn(t,w));var C=n.getDerivedStateFromProps,j=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function";j||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==w)&&mc(t,l,r,w),en=!1;var E=t.memoizedState;l.state=E,jo(t,r,l,o),d=t.memoizedState,c!==r||E!==d||et.current||en?(typeof C=="function"&&(El(t,n,C,r),d=t.memoizedState),(c=en||dc(t,n,c,r,E,d,w))?(j||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=w,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ba(e,t),c=t.memoizedProps,w=t.type===t.elementType?c:kt(t.type,c),l.props=w,j=t.pendingProps,E=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=dt(d):(d=tt(n)?vn:Qe.current,d=Bn(t,d));var I=n.getDerivedStateFromProps;(C=typeof I=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==j||E!==d)&&mc(t,l,r,d),en=!1,E=t.memoizedState,l.state=E,jo(t,r,l,o);var B=t.memoizedState;c!==j||E!==B||et.current||en?(typeof I=="function"&&(El(t,n,I,r),B=t.memoizedState),(w=en||dc(t,n,w,r,E,B,d)||!1)?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,B,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,B,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),l.props=r,l.state=B,l.context=d,r=w):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,s,o)}function Rl(e,t,n,r,o,s){_c(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Pa(t,n,!1),At(e,t,s);r=t.stateNode,uf.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qn(t,e.child,null,s),t.child=Qn(t,null,c,s)):Ye(e,t,c,s),t.memoizedState=r.state,o&&Pa(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?Na(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Na(e,t.context,!1),ml(e,t.containerInfo)}function Cc(e,t,n,r,o){return Wn(),al(o),t.flags|=256,Ye(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nc(e,t,n){var r=t.pendingProps,o=ze.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(ze,o&1),e===null)return il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Xo(l,r,0,null),e=zn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Tl(n),t.memoizedState=Ml,e):Fl(t,l));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return pf(e,t,l,r,c,o,n);if(s){s=r.fallback,l=t.mode,o=e.child,c=o.sibling;var d={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=an(o,d),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?s=an(c,s):(s=zn(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Tl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return s=e.child,e=s.sibling,r=an(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fl(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $o(e,t,n,r){return r!==null&&al(r),Qn(t,e.child,null,n),e=Fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,r,o,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error(a(422))),$o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Xo({mode:"visible",children:r.children},o,0,null),s=zn(s,o,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Qn(t,e.child,null,l),t.child.memoizedState=Tl(l),t.memoizedState=Ml,s);if((t.mode&1)===0)return $o(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(a(419)),r=Nl(s,r,void 0),$o(e,t,l,r)}if(c=(l&e.childLanes)!==0,nt||c){if(r=Ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ot(e,o),St(r,e,o,-1))}return Xl(),r=Nl(Error(a(421))),$o(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,ct=Yt(o.nextSibling),at=t,_e=!0,wt=null,e!==null&&(pt[ft++]=Ft,pt[ft++]=Dt,pt[ft++]=gn,Ft=e.id,Dt=e.overflow,gn=t),t=Fl(t,r.children),t.flags|=4096,t)}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fl(e.return,t,n)}function Dl(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Pc(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Ye(e,t,r.children,n),r=ze.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(ze,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,s);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Ec(t),Wn();break;case 5:Wa(t);break;case 1:tt(t.type)&&ko(t);break;case 4:ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;be(Eo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(ze,ze.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Nc(e,t,n):(be(ze,ze.current&1),e=At(e,t,n),e!==null?e.sibling:null);be(ze,ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Pc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(ze,ze.current),r)break;return null;case 22:case 23:return t.lanes=0,Sc(e,t,n)}return At(e,t,n)}var Rc,Ol,Mc,Tc;Rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Mc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(Ct.current);var s=null;switch(n){case"input":o=nr(e,o),r=nr(e,r),s=[];break;case"select":o=A({},o,{value:void 0}),r=A({},r,{value:void 0}),s=[];break;case"textarea":o=rr(e,o),r=rr(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}gs(n,r);var l;n=null;for(w in o)if(!r.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var c=o[w];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(g.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in r){var d=r[w];if(c=o!=null?o[w]:void 0,r.hasOwnProperty(w)&&d!==c&&(d!=null||c!=null))if(w==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(w,n)),n=d;else w==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(w,d)):w==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(w,""+d):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(g.hasOwnProperty(w)?(d!=null&&w==="onScroll"&&Le("scroll",e),s||c===d||(s=[])):(s=s||[]).push(w,d))}n&&(s=s||[]).push("style",n);var w=s;(t.updateQueue=w)&&(t.flags|=4)}},Tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dr(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function df(e,t,n){var r=t.pendingProps;switch(sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return tt(t.type)&&wo(),Ze(t),null;case 3:return r=t.stateNode,Gn(),Se(et),Se(Qe),yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(Zl(wt),wt=null))),Ol(e,t),Ze(t),null;case 5:vl(t);var o=wn(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Mc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Ze(t),null}if(e=wn(Ct.current),_o(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Et]=t,r[zr]=s,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)Le(Lr[o],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Wr(r,s),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Le("invalid",r);break;case"textarea":or(r,s),Le("invalid",r)}gs(n,s),o=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&go(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&go(r.textContent,c,e),o=["children",""+c]):g.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&Le("scroll",r)}switch(n){case"input":Ht(r),Qr(r,s,!0);break;case"textarea":Ht(r),Kr(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=v(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Et]=t,e[zr]=r,Rc(e,t,!1,!1),t.stateNode=e;e:{switch(l=ys(n,r),n){case"dialog":Le("cancel",e),Le("close",e),o=r;break;case"iframe":case"object":case"embed":Le("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)Le(Lr[o],e);o=r;break;case"source":Le("error",e),o=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),o=r;break;case"details":Le("toggle",e),o=r;break;case"input":Wr(e,r),o=nr(e,r),Le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=A({},r,{value:void 0}),Le("invalid",e);break;case"textarea":or(e,r),o=rr(e,r),Le("invalid",e);break;default:o=r}gs(n,o),c=o;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Zr(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ie(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&oe(e,d):typeof d=="number"&&oe(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(g.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Le("scroll",e):d!=null&&J(e,s,d,l))}switch(n){case"input":Ht(e),Qr(e,r,!1);break;case"textarea":Ht(e),Kr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ge(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ut(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=wn(Pr.current),wn(Ct.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(s=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ze(t),null;case 13:if(Se(ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Oa(),Wn(),t.flags|=98560,s=!1;else if(s=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Et]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),s=!1}else wt!==null&&(Zl(wt),wt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?$e===0&&($e=3):Xl())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Gn(),Ol(e,t),e===null&&Sr(t.stateNode.containerInfo),Ze(t),null;case 10:return pl(t.type._context),Ze(t),null;case 17:return tt(t.type)&&wo(),Ze(t),null;case 19:if(Se(ze),s=t.memoizedState,s===null)return Ze(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Dr(s,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Po(e),l!==null){for(t.flags|=128,Dr(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(ze,ze.current&1|2),t.child}e=e.sibling}s.tail!==null&&Re()>Jn&&(t.flags|=128,r=!0,Dr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Po(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!_e)return Ze(t),null}else 2*Re()-s.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,Dr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Re(),t.sibling=null,n=ze.current,be(ze,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Yl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function hf(e,t){switch(sl(t),t.tag){case 1:return tt(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),Se(et),Se(Qe),yl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return vl(t),null;case 13:if(Se(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(ze),null;case 4:return Gn(),null;case 10:return pl(t.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var Io=!1,Ge=!1,mf=typeof WeakSet=="function"?WeakSet:Set,H=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var Fc=!1;function vf(e,t){if(Ys=so,e=da(),Bs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,w=0,C=0,j=e,E=null;t:for(;;){for(var I;j!==n||o!==0&&j.nodeType!==3||(c=l+o),j!==s||r!==0&&j.nodeType!==3||(d=l+r),j.nodeType===3&&(l+=j.nodeValue.length),(I=j.firstChild)!==null;)E=j,j=I;for(;;){if(j===e)break t;if(E===n&&++w===o&&(c=l),E===s&&++C===r&&(d=l),(I=j.nextSibling)!==null)break;j=E,E=j.parentNode}j=I}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xs={focusedElem:e,selectionRange:n},so=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var U=B.memoizedProps,Me=B.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?U:kt(t.type,U),Me);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(R){Ne(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return B=Fc,Fc=!1,B}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&$l(t,n,s)}o=o.next}while(o!==r)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dc(e){var t=e.alternate;t!==null&&(e.alternate=null,Dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[zr],delete t[tl],delete t[Xp],delete t[qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var Ue=null,bt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Jr,n)}catch{}switch(n.tag){case 5:Ge||Xn(n,t);case 6:var r=Ue,o=bt;Ue=null,nn(e,t,n),Ue=r,bt=o,Ue!==null&&(bt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(bt?(e=Ue,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),mr(e)):el(Ue,n.stateNode));break;case 4:r=Ue,o=bt,Ue=n.stateNode.containerInfo,bt=!0,nn(e,t,n),Ue=r,bt=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,l=s.destroy;s=s.tag,l!==void 0&&((s&2)!==0||(s&4)!==0)&&$l(n,t,l),o=o.next}while(o!==r)}nn(e,t,n);break;case 1:if(!Ge&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ne(n,t,c)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,nn(e,t,n),Ge=r):nn(e,t,n);break;default:nn(e,t,n)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mf),t.forEach(function(r){var o=_f.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Ue=c.stateNode,bt=!1;break e;case 3:Ue=c.stateNode.containerInfo,bt=!0;break e;case 4:Ue=c.stateNode.containerInfo,bt=!0;break e}c=c.return}if(Ue===null)throw Error(a(160));Ac(s,l,o),Ue=null,bt=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(w){Ne(o,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),jt(e),r&4){try{Or(3,e,e.return),Ho(3,e)}catch(U){Ne(e,e.return,U)}try{Or(5,e,e.return)}catch(U){Ne(e,e.return,U)}}break;case 1:Lt(t,e),jt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Lt(t,e),jt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var o=e.stateNode;try{oe(o,"")}catch(U){Ne(e,e.return,U)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Cn(o,s),ys(c,l);var w=ys(c,s);for(l=0;l<d.length;l+=2){var C=d[l],j=d[l+1];C==="style"?Zr(o,j):C==="dangerouslySetInnerHTML"?ie(o,j):C==="children"?oe(o,j):J(o,C,j,w)}switch(c){case"input":Nn(o,s);break;case"textarea":sr(o,s);break;case"select":var E=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Ut(o,!!s.multiple,I,!1):E!==!!s.multiple&&(s.defaultValue!=null?Ut(o,!!s.multiple,s.defaultValue,!0):Ut(o,!!s.multiple,s.multiple?[]:"",!1))}o[zr]=s}catch(U){Ne(e,e.return,U)}}break;case 6:if(Lt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(U){Ne(e,e.return,U)}}break;case 3:if(Lt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(U){Ne(e,e.return,U)}break;case 4:Lt(t,e),jt(e);break;case 13:Lt(t,e),jt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Vl=Re())),r&4&&Ic(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(w=Ge)||C,Lt(t,e),Ge=w):Lt(t,e),jt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!C&&(e.mode&1)!==0)for(H=e,C=e.child;C!==null;){for(j=H=C;H!==null;){switch(E=H,I=E.child,E.tag){case 0:case 11:case 14:case 15:Or(4,E,E.return);break;case 1:Xn(E,E.return);var B=E.stateNode;if(typeof B.componentWillUnmount=="function"){r=E,n=E.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(U){Ne(r,n,U)}}break;case 5:Xn(E,E.return);break;case 22:if(E.memoizedState!==null){Vc(j);continue}}I!==null?(I.return=E,H=I):Vc(j)}C=C.sibling}e:for(C=null,j=e;;){if(j.tag===5){if(C===null){C=j;try{o=j.stateNode,w?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=j.stateNode,d=j.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Rt("display",l))}catch(U){Ne(e,e.return,U)}}}else if(j.tag===6){if(C===null)try{j.stateNode.nodeValue=w?"":j.memoizedProps}catch(U){Ne(e,e.return,U)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;C===j&&(C=null),j=j.return}C===j&&(C=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Lt(t,e),jt(e),r&4&&Ic(e);break;case 21:break;default:Lt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oc(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(oe(o,""),r.flags&=-33);var s=$c(e);Hl(e,s,o);break;case 3:case 4:var l=r.stateNode.containerInfo,c=$c(e);Il(e,c,l);break;default:throw Error(a(161))}}catch(d){Ne(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gf(e,t,n){H=e,Bc(e)}function Bc(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var o=H,s=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Io;if(!l){var c=o.alternate,d=c!==null&&c.memoizedState!==null||Ge;c=Io;var w=Ge;if(Io=l,(Ge=d)&&!w)for(H=o;H!==null;)l=H,d=l.child,l.tag===22&&l.memoizedState!==null?Wc(o):d!==null?(d.return=l,H=d):Wc(o);for(;s!==null;)H=s,Bc(s),s=s.sibling;H=o,Io=c,Ge=w}Uc(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,H=s):Uc(e)}}function Uc(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||Ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Va(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var C=w.memoizedState;if(C!==null){var j=C.dehydrated;j!==null&&mr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ge||t.flags&512&&Al(t)}catch(E){Ne(t,t.return,E)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Vc(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Wc(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ho(4,t)}catch(d){Ne(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(d){Ne(t,o,d)}}var s=t.return;try{Al(t)}catch(d){Ne(t,s,d)}break;case 5:var l=t.return;try{Al(t)}catch(d){Ne(t,l,d)}}}catch(d){Ne(t,t.return,d)}if(t===e){H=null;break}var c=t.sibling;if(c!==null){c.return=t.return,H=c;break}H=t.return}}var yf=Math.ceil,Bo=Y.ReactCurrentDispatcher,Bl=Y.ReactCurrentOwner,mt=Y.ReactCurrentBatchConfig,fe=0,Ie=null,Te=null,Ve=0,ut=0,qn=Xt(0),$e=0,$r=null,bn=0,Uo=0,Ul=0,Ar=null,rt=null,Vl=0,Jn=1/0,It=null,Vo=!1,Wl=null,rn=null,Wo=!1,on=null,Qo=0,Ir=0,Ql=null,Ko=-1,Zo=0;function Xe(){return(fe&6)!==0?Re():Ko!==-1?Ko:Ko=Re()}function sn(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ve!==0?Ve&-Ve:ef.transition!==null?(Zo===0&&(Zo=$i()),Zo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ki(e.type)),e)}function St(e,t,n,r){if(50<Ir)throw Ir=0,Ql=null,Error(a(185));ur(e,n,r),((fe&2)===0||e!==Ie)&&(e===Ie&&((fe&2)===0&&(Uo|=n),$e===4&&ln(e,Ve)),ot(e,r),n===1&&fe===0&&(t.mode&1)===0&&(Jn=Re()+500,bo&&Jt()))}function ot(e,t){var n=e.callbackNode;ep(e,t);var r=no(e,e===Ie?Ve:0);if(r===0)n!==null&&Fi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fi(n),t===1)e.tag===0?Jp(Kc.bind(null,e)):Ra(Kc.bind(null,e)),Gp(function(){(fe&6)===0&&Jt()}),n=null;else{switch(Ai(r)){case 1:n=_s;break;case 4:n=Di;break;case 16:n=qr;break;case 536870912:n=Oi;break;default:n=qr}n=tu(n,Qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qc(e,t){if(Ko=-1,Zo=0,(fe&6)!==0)throw Error(a(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=no(e,e===Ie?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Go(e,r);else{t=r;var o=fe;fe|=2;var s=Gc();(Ie!==e||Ve!==t)&&(It=null,Jn=Re()+500,Sn(e,t));do try{kf();break}catch(c){Zc(e,c)}while(!0);ul(),Bo.current=s,fe=o,Te!==null?t=0:(Ie=null,Ve=0,t=$e)}if(t!==0){if(t===2&&(o=zs(e),o!==0&&(r=o,t=Kl(e,o))),t===1)throw n=$r,Sn(e,0),ln(e,r),ot(e,Re()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,(r&30)===0&&!xf(o)&&(t=Go(e,r),t===2&&(s=zs(e),s!==0&&(r=s,t=Kl(e,s))),t===1))throw n=$r,Sn(e,0),ln(e,r),ot(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:_n(e,rt,It);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Vl+500-Re(),10<t)){if(no(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Js(_n.bind(null,e,rt,It),t);break}_n(e,rt,It);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-yt(r);s=1<<l,l=t[l],l>o&&(o=l),r&=~s}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Js(_n.bind(null,e,rt,It),r);break}_n(e,rt,It);break;case 5:_n(e,rt,It);break;default:throw Error(a(329))}}}return ot(e,Re()),e.callbackNode===n?Qc.bind(null,e):null}function Kl(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=rt,rt=n,t!==null&&Zl(t)),e}function Zl(e){rt===null?rt=e:rt.push.apply(rt,e)}function xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!xt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Ul,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Kc(e){if((fe&6)!==0)throw Error(a(327));er();var t=no(e,0);if((t&1)===0)return ot(e,Re()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=zs(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=$r,Sn(e,0),ln(e,t),ot(e,Re()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,rt,It),ot(e,Re()),null}function Gl(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Jn=Re()+500,bo&&Jt())}}function Ln(e){on!==null&&on.tag===0&&(fe&6)===0&&er();var t=fe;fe|=1;var n=mt.transition,r=xe;try{if(mt.transition=null,xe=1,e)return e()}finally{xe=r,mt.transition=n,fe=t,(fe&6)===0&&Jt()}}function Yl(){ut=qn.current,Se(qn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zp(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Gn(),Se(et),Se(Qe),yl();break;case 5:vl(r);break;case 4:Gn();break;case 13:Se(ze);break;case 19:Se(ze);break;case 10:pl(r.type._context);break;case 22:case 23:Yl()}n=n.return}if(Ie=e,Te=e=an(e.current,null),Ve=ut=t,$e=0,$r=null,Ul=Uo=bn=0,rt=Ar=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=o,r.next=l}n.pending=r}xn=null}return e}function Zc(e,t){do{var n=Te;try{if(ul(),Ro.current=Do,Mo){for(var r=Ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Mo=!1}if(kn=0,Ae=Oe=Ee=null,Rr=!1,Mr=0,Bl.current=null,n===null||n.return===null){$e=1,$r=t,Te=null;break}e:{var s=e,l=n.return,c=n,d=t;if(t=Ve,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var w=d,C=c,j=C.tag;if((C.mode&1)===0&&(j===0||j===11||j===15)){var E=C.alternate;E?(C.updateQueue=E.updateQueue,C.memoizedState=E.memoizedState,C.lanes=E.lanes):(C.updateQueue=null,C.memoizedState=null)}var I=xc(l);if(I!==null){I.flags&=-257,wc(I,l,c,s,t),I.mode&1&&yc(s,w,t),t=I,d=w;var B=t.updateQueue;if(B===null){var U=new Set;U.add(d),t.updateQueue=U}else B.add(d);break e}else{if((t&1)===0){yc(s,w,t),Xl();break e}d=Error(a(426))}}else if(_e&&c.mode&1){var Me=xc(l);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),wc(Me,l,c,s,t),al(Yn(d,c));break e}}s=d=Yn(d,c),$e!==4&&($e=2),Ar===null?Ar=[s]:Ar.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=vc(s,d,t);Ua(s,y);break e;case 1:c=d;var h=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(rn===null||!rn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var R=gc(s,c,t);Ua(s,R);break e}}s=s.return}while(s!==null)}Xc(n)}catch(V){t=V,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Gc(){var e=Bo.current;return Bo.current=Do,e===null?Do:e}function Xl(){($e===0||$e===3||$e===2)&&($e=4),Ie===null||(bn&268435455)===0&&(Uo&268435455)===0||ln(Ie,Ve)}function Go(e,t){var n=fe;fe|=2;var r=Gc();(Ie!==e||Ve!==t)&&(It=null,Sn(e,t));do try{wf();break}catch(o){Zc(e,o)}while(!0);if(ul(),fe=n,Bo.current=r,Te!==null)throw Error(a(261));return Ie=null,Ve=0,$e}function wf(){for(;Te!==null;)Yc(Te)}function kf(){for(;Te!==null&&!Wu();)Yc(Te)}function Yc(e){var t=eu(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Xc(e):Te=t,Bl.current=null}function Xc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=df(n,t,ut),n!==null){Te=n;return}}else{if(n=hf(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);$e===0&&($e=5)}function _n(e,t,n){var r=xe,o=mt.transition;try{mt.transition=null,xe=1,bf(e,t,n,r)}finally{mt.transition=o,xe=r}return null}function bf(e,t,n,r){do er();while(on!==null);if((fe&6)!==0)throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(tp(e,s),e===Ie&&(Te=Ie=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wo||(Wo=!0,tu(qr,function(){return er(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=mt.transition,mt.transition=null;var l=xe;xe=1;var c=fe;fe|=4,Bl.current=null,vf(e,n),Hc(n,e),Hp(Xs),so=!!Ys,Xs=Ys=null,e.current=n,gf(n),Qu(),fe=c,xe=l,mt.transition=s}else e.current=n;if(Wo&&(Wo=!1,on=e,Qo=o),s=e.pendingLanes,s===0&&(rn=null),Gu(n.stateNode),ot(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Vo)throw Vo=!1,e=Wl,Wl=null,e;return(Qo&1)!==0&&e.tag!==0&&er(),s=e.pendingLanes,(s&1)!==0?e===Ql?Ir++:(Ir=0,Ql=e):Ir=0,Jt(),null}function er(){if(on!==null){var e=Ai(Qo),t=mt.transition,n=xe;try{if(mt.transition=null,xe=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Qo=0,(fe&6)!==0)throw Error(a(331));var o=fe;for(fe|=4,H=e.current;H!==null;){var s=H,l=s.child;if((H.flags&16)!==0){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var w=c[d];for(H=w;H!==null;){var C=H;switch(C.tag){case 0:case 11:case 15:Or(8,C,s)}var j=C.child;if(j!==null)j.return=C,H=j;else for(;H!==null;){C=H;var E=C.sibling,I=C.return;if(Dc(C),C===w){H=null;break}if(E!==null){E.return=I,H=E;break}H=I}}}var B=s.alternate;if(B!==null){var U=B.child;if(U!==null){B.child=null;do{var Me=U.sibling;U.sibling=null,U=Me}while(U!==null)}}H=s}}if((s.subtreeFlags&2064)!==0&&l!==null)l.return=s,H=l;else e:for(;H!==null;){if(s=H,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Or(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,H=y;break e}H=s.return}}var h=e.current;for(H=h;H!==null;){l=H;var x=l.child;if((l.subtreeFlags&2064)!==0&&x!==null)x.return=l,H=x;else e:for(l=h;H!==null;){if(c=H,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Ho(9,c)}}catch(V){Ne(c,c.return,V)}if(c===l){H=null;break e}var R=c.sibling;if(R!==null){R.return=c.return,H=R;break e}H=c.return}}if(fe=o,Jt(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Jr,e)}catch{}r=!0}return r}finally{xe=n,mt.transition=t}}return!1}function qc(e,t,n){t=Yn(n,t),t=vc(e,t,1),e=tn(e,t,1),t=Xe(),e!==null&&(ur(e,1,t),ot(e,t))}function Ne(e,t,n){if(e.tag===3)qc(e,e,n);else for(;t!==null;){if(t.tag===3){qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Yn(n,e),e=gc(t,e,1),t=tn(t,e,1),e=Xe(),t!==null&&(ur(t,1,e),ot(t,e));break}}t=t.return}}function Lf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ve&n)===n&&($e===4||$e===3&&(Ve&130023424)===Ve&&500>Re()-Vl?Sn(e,0):Ul|=n),ot(e,t)}function Jc(e,t){t===0&&((e.mode&1)===0?t=1:(t=to,to<<=1,(to&130023424)===0&&(to=4194304)));var n=Xe();e=Ot(e,t),e!==null&&(ur(e,t,n),ot(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jc(e,n)}function _f(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Jc(e,n)}var eu;eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return nt=!1,ff(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,_e&&(t.flags&1048576)!==0&&Ma(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var o=Bn(t,Qe.current);Zn(t,n),o=kl(null,t,r,e,o,n);var s=bl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(s=!0,ko(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hl(t),o.updater=Oo,t.stateNode=o,o._reactInternals=t,Cl(t,r,e,n),t=Rl(null,t,r,!0,s,n)):(t.tag=0,_e&&s&&ol(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ef(r),e=kt(r,e),o){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=zc(null,t,r,e,n);break e;case 11:t=kc(null,t,r,e,n);break e;case 14:t=bc(null,t,r,kt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Pl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),zc(e,t,r,o,n);case 3:e:{if(Ec(t),e===null)throw Error(a(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Ba(e,t),jo(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Yn(Error(a(423)),t),t=Cc(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(a(424)),t),t=Cc(e,t,r,n,o);break e}else for(ct=Yt(t.stateNode.containerInfo.firstChild),at=t,_e=!0,wt=null,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===o){t=At(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Wa(t),e===null&&il(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,l=o.children,qs(r,o)?l=null:s!==null&&qs(r,s)&&(t.flags|=32),_c(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&il(t),null;case 13:return Nc(e,t,n);case 4:return ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),kc(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,l=o.value,be(Eo,r._currentValue),r._currentValue=l,s!==null)if(xt(s.value,l)){if(s.children===o.children&&!et.current){t=At(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=$t(-1,n&-n),d.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var C=w.pending;C===null?d.next=d:(d.next=C.next,C.next=d),w.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),fl(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(a(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),fl(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Zn(t,n),o=dt(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),bc(e,t,r,o,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Ao(e,t),t.tag=1,tt(r)?(e=!0,ko(t)):e=!1,Zn(t,n),hc(t,r,o),Cl(t,r,o,n),Rl(null,t,r,!0,e,n);case 19:return Pc(e,t,n);case 22:return Sc(e,t,n)}throw Error(a(156,t.tag))};function tu(e,t){return Ti(e,t)}function zf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new zf(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ve)return 11;if(e===lt)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,o,s){var l=2;if(r=e,typeof e=="function")ql(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ce:return zn(n.children,o,s,t);case Fe:l=8,o|=8;break;case qe:return e=vt(12,n,t,o|2),e.elementType=qe,e.lanes=s,e;case Pe:return e=vt(13,n,t,o),e.elementType=Pe,e.lanes=s,e;case X:return e=vt(19,n,t,o),e.elementType=X,e.lanes=s,e;case we:return Xo(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:l=10;break e;case Ce:l=9;break e;case ve:l=11;break e;case lt:l=14;break e;case We:l=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=vt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function zn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Xo(e,t,n,r){return e=vt(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Es(0),this.expirationTimes=Es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Es(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ti(e,t,n,r,o,s,l,c,d){return e=new Cf(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(s),e}function Nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nu(e){if(!e)return qt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(tt(n))return ja(e,n,t)}return t}function ru(e,t,n,r,o,s,l,c,d){return e=ti(n,r,!0,e,o,s,l,c,d),e.context=nu(null),n=e.current,r=Xe(),o=sn(n),s=$t(r,o),s.callback=t??null,tn(n,s,o),e.current.lanes=o,ur(e,o,r),ot(e,r),e}function qo(e,t,n,r){var o=t.current,s=Xe(),l=sn(o);return n=nu(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,l),e!==null&&(St(e,o,l,s),No(e,o,l)),l}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ni(e,t){ou(e,t),(e=e.alternate)&&ou(e,t)}function jf(){return null}var su=typeof reportError=="function"?reportError:function(e){console.error(e)};function ri(e){this._internalRoot=e}es.prototype.render=ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));qo(e,t,null,null)},es.prototype.unmount=ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){qo(null,e,null,null)}),t[Mt]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Wi(e)}};function oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lu(){}function Pf(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var w=Jo(l);s.call(w)}}var l=ru(t,r,e,0,null,!1,!1,"",lu);return e._reactRootContainer=l,e[Mt]=l.current,Sr(e.nodeType===8?e.parentNode:e),Ln(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var w=Jo(d);c.call(w)}}var d=ti(e,0,!1,null,null,!1,!1,"",lu);return e._reactRootContainer=d,e[Mt]=d.current,Sr(e.nodeType===8?e.parentNode:e),Ln(function(){qo(t,d,n,r)}),d}function ns(e,t,n,r,o){var s=n._reactRootContainer;if(s){var l=s;if(typeof o=="function"){var c=o;o=function(){var d=Jo(l);c.call(d)}}qo(t,l,e,o)}else l=Pf(n,t,e,o,r);return Jo(l)}Ii=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(Cs(t,n|1),ot(t,Re()),(fe&6)===0&&(Jn=Re()+500,Jt()))}break;case 13:Ln(function(){var r=Ot(e,1);if(r!==null){var o=Xe();St(r,e,1,o)}}),ni(e,1)}},Ns=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Xe();St(t,e,134217728,n)}ni(e,134217728)}},Hi=function(e){if(e.tag===13){var t=sn(e),n=Ot(e,t);if(n!==null){var r=Xe();St(n,e,t,r)}ni(e,t)}},Bi=function(){return xe},Ui=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},ks=function(e,t,n){switch(t){case"input":if(Nn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xo(r);if(!o)throw Error(a(90));Vr(r),Nn(r,o)}}}break;case"textarea":sr(e,n);break;case"select":t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}},Ei=Gl,Ci=Ln;var Rf={usingClientEntryPoint:!1,Events:[Er,In,xo,_i,zi,Gl]},Hr={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ri(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{Jr=rs.inject(Mf),zt=rs}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf,st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oi(t))throw Error(a(200));return Nf(e,t,null,n)},st.createRoot=function(e,t){if(!oi(e))throw Error(a(299));var n=!1,r="",o=su;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ti(e,1,!1,null,null,n,!1,r,o),e[Mt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new ri(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Ri(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return Ln(e)},st.hydrate=function(e,t,n){if(!ts(t))throw Error(a(200));return ns(null,e,t,!0,n)},st.hydrateRoot=function(e,t,n){if(!oi(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",l=su;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ru(t,null,e,1,n??null,o,!1,s,l),e[Mt]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new es(t)},st.render=function(e,t,n){if(!ts(t))throw Error(a(200));return ns(null,e,t,!1,n)},st.unmountComponentAtNode=function(e){if(!ts(e))throw Error(a(40));return e._reactRootContainer?(Ln(function(){ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},st.unstable_batchedUpdates=Gl,st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ts(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return ns(e,t,n,!1,r)},st.version="18.3.1-next-f1338f8080-20240426",st}var hu;function Bf(){if(hu)return ii.exports;hu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(f){console.error(f)}}return i(),ii.exports=Hf(),ii.exports}var mu;function Uf(){if(mu)return os;mu=1;var i=Bf();return os.createRoot=i.createRoot,os.hydrateRoot=i.hydrateRoot,os}var Vf=Uf();const Wf=Ff(Vf),Qf="modulepreload",Kf=function(i,f){return new URL(i,f).href},vu={},ui=function(f,a,p){let g=Promise.resolve();if(a&&a.length>0){let L=function($){return Promise.all($.map(T=>Promise.resolve(T).then(F=>({status:"fulfilled",value:F}),F=>({status:"rejected",reason:F}))))};const P=document.getElementsByTagName("link"),M=document.querySelector("meta[property=csp-nonce]"),O=(M==null?void 0:M.nonce)||(M==null?void 0:M.getAttribute("nonce"));g=L(a.map($=>{if($=Kf($,p),$ in vu)return;vu[$]=!0;const T=$.endsWith(".css"),F=T?'[rel="stylesheet"]':"";if(!!p)for(let W=P.length-1;W>=0;W--){const q=P[W];if(q.href===$&&(!T||q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${$}"]${F}`))return;const ne=document.createElement("link");if(ne.rel=T?"stylesheet":Qf,T||(ne.as="script"),ne.crossOrigin="",ne.href=$,O&&ne.setAttribute("nonce",O),document.head.appendChild(ne),T)return new Promise((W,q)=>{ne.addEventListener("load",W),ne.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${$}`)))})}))}function b(L){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=L,window.dispatchEvent(P),!P.defaultPrevented)throw L}return g.then(L=>{for(const P of L||[])P.status==="rejected"&&b(P.reason);return f().catch(b)})},vi={toggle:()=>ui(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>ui(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>ui(()=>import("./select-C-tAw5W2.js"),[],import.meta.url)};let tr=null,gu=!1;const Cu=new Set,ps=new Map,ss=new Map;function ki(){if(tr)return tr;const i=window.AudioContext||window.webkitAudioContext;return i?(tr=new i,tr):null}function bi(i){if(ps.has(i))return Promise.resolve(ps.get(i));if(ss.has(i))return ss.get(i);const f=ki();if(!f||!vi[i])return Promise.resolve(null);const a=vi[i]().then(p=>fetch(p.default)).then(p=>p.arrayBuffer()).then(p=>f.decodeAudioData(p)).then(p=>(ps.set(i,p),p)).catch(()=>null).finally(()=>ss.delete(i));return ss.set(i,a),a}function Zf(){const i=ki();i&&(i.state==="suspended"&&i.resume(),Cu.forEach(bi))}function Gf(i){if(typeof window>"u"||!vi[i])return;if(Cu.add(i),tr&&tr.state!=="suspended"){bi(i);return}if(gu)return;gu=!0;const f={capture:!0,passive:!0},a=()=>{window.removeEventListener("pointerdown",a,f),window.removeEventListener("keydown",a,f),Zf()};window.addEventListener("pointerdown",a,f),window.addEventListener("keydown",a,f)}const Yf=120;function Xf(i,f=1){if(typeof window>"u"||f<=0)return;const a=ki();if(!a)return;a.state==="suspended"&&a.resume();const p=ps.get(i);if(!p){const g=performance.now();bi(i).then(b=>{b&&performance.now()-g<=Yf&&yu(a,b,f)});return}yu(a,p,f)}function yu(i,f,a){const p=i.createBufferSource(),g=i.createGain();g.gain.value=Math.min(1,a),p.buffer=f,p.connect(g).connect(i.destination),p.start()}const Nu=.7,ju=S.createContext({enabled:!0,volume:Nu});function qf({enabled:i=!0,volume:f=Nu,children:a}){return u.jsx(ju.Provider,{value:{enabled:i,volume:f},children:a})}function Li(i,f=!0){const{enabled:a,volume:p}=S.useContext(ju),g=a&&f;return S.useEffect(()=>{g&&Gf(i)},[i,g]),S.useCallback(()=>{g&&Xf(i,p)},[i,g,p])}const Jf=`/* ============================================================
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
  --sc-shadow-control-bevel: inset -2px 2px 4px rgb(var(--sc-p-color-white-rgb) / 0.70), inset 2px -2px 4px rgb(var(--sc-p-color-ink-rgb) / 0.06);
  --sc-shadow-control-inset: inset 0 1px 3px rgb(var(--sc-p-color-ink-rgb) / 0.08), inset 0 0 0 1px rgb(var(--sc-p-color-ink-rgb) / 0.06);
  --sc-shadow-control-key: 3px 3px 7px 0 rgb(var(--sc-p-color-ink-rgb) / 0.39), -3px -3px 4px 1px rgb(var(--sc-p-color-white-rgb) / 1);
  --sc-shadow-control-key-hover: 3px 3px 7px 0 rgb(var(--sc-p-color-ink-rgb) / 0.39), -3px -3px 4px 1px rgb(var(--sc-p-color-white-rgb) / 1);
  --sc-shadow-control-key-pressed: 3px 3px 7px 0 rgb(var(--sc-p-color-ink-rgb) / 0.29), -3px -3px 4px 1px rgb(var(--sc-p-color-white-rgb) / 0.90), inset 1px 1px 8px 0 rgb(var(--sc-p-color-white-rgb) / 0.30);
  --sc-shadow-switch-track: inset 0 0.45px 0.9px rgb(var(--sc-p-color-ink-rgb) / 0.25);
  --sc-shadow-switch-thumb: 0 0.37px 0.52px -0.28px rgb(var(--sc-p-color-ink-rgb) / 0.26), 0 0.95px 1.33px -0.56px rgb(var(--sc-p-color-ink-rgb) / 0.25), 0 1.9px 2.66px -0.84px rgb(var(--sc-p-color-ink-rgb) / 0.24), 0 3.6px 5.05px -1.13px rgb(var(--sc-p-color-ink-rgb) / 0.22), 0 7.16px 10.03px -1.41px rgb(var(--sc-p-color-ink-rgb) / 0.18), 0 15.75px 22.05px 0 rgb(var(--sc-p-color-ink-rgb) / 0.09);
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
  --sc-font-text-label-button-sm-family: var(--sc-p-font-text-11-family);
  --sc-font-text-label-button-sm-size: var(--sc-p-font-text-11-size);
  --sc-font-text-label-button-sm-weight: var(--sc-p-font-text-11-weight);
  --sc-font-text-label-button-sm-line-height: var(--sc-p-font-text-11-line-height);
  --sc-font-text-label-button-sm-letter-spacing: var(--sc-p-font-text-11-letter-spacing);
  --sc-font-text-label-button-sm: var(--sc-p-font-text-11);
  --sc-font-text-label-button-lg-family: var(--sc-p-font-text-11-family);
  --sc-font-text-label-button-lg-size: var(--sc-p-font-text-11-size);
  --sc-font-text-label-button-lg-weight: var(--sc-p-font-text-11-weight);
  --sc-font-text-label-button-lg-line-height: var(--sc-p-font-text-11-line-height);
  --sc-font-text-label-button-lg-letter-spacing: var(--sc-p-font-text-11-letter-spacing);
  --sc-font-text-label-button-lg: var(--sc-p-font-text-11);
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
  --sc-size-switch-track-width: var(--sc-p-space-32);
  --sc-size-switch-track-height: var(--sc-p-space-micro-18);
  --sc-size-switch-thumb: var(--sc-p-space-micro-14);
  --sc-size-switch-glyph: var(--sc-p-space-micro-6);
  --sc-size-progress-bar-height: var(--sc-p-space-4);
  --sc-size-progress-circular: var(--sc-p-space-48);
  --sc-size-progress-circular-stroke: var(--sc-p-space-4);
  --sc-size-progress-bar-height-active: var(--sc-p-space-micro-6);
  --sc-size-progress-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-button-icon-lg: var(--sc-p-space-12);
  --sc-size-button-icon-sm: var(--sc-p-space-12);
  --sc-size-touch-target: var(--sc-p-space-48);
  --sc-space-component-padding-sm: var(--sc-p-space-8);
  --sc-space-component-padding-md: var(--sc-p-space-16);
  --sc-space-component-padding-lg: var(--sc-p-space-24);
  --sc-space-component-padding-inline-sm: var(--sc-p-space-micro-6);
  --sc-space-component-padding-inline-md: var(--sc-p-space-12);
  --sc-space-component-padding-inline-lg: var(--sc-p-space-16);
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
  --sc-color-switch-thumb-rim-top: var(--sc-p-color-warm-gray-200);
  --sc-color-switch-thumb-rim-bottom: var(--sc-p-color-warm-gray-350);
  --sc-color-switch-thumb-face-top: var(--sc-p-color-warm-gray-250);
  --sc-color-switch-thumb-face-bottom: var(--sc-p-color-warm-gray-300);
  --sc-color-switch-glyph-on: var(--sc-p-color-utility-white);
  --sc-color-switch-glyph-off: var(--sc-p-color-dark-text-disabled);
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
  --sc-shadow-control-bevel: inset -2px 2px 4px rgb(var(--sc-p-color-white-rgb) / 0.06), inset 2px -2px 4px rgb(0 0 0 / 0.20);
  --sc-shadow-control-inset: inset 0 1px 3px rgb(0 0 0 / 0.40), inset 0 0 0 1px rgb(var(--sc-p-color-white-rgb) / 0.05);
  --sc-shadow-control-key: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(var(--sc-p-color-white-rgb) / 0.06);
  --sc-shadow-control-key-hover: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(var(--sc-p-color-white-rgb) / 0.06);
  --sc-shadow-control-key-pressed: 3px 3px 7px 0 rgb(0 0 0 / 0.38), -3px -3px 4px 1px rgb(var(--sc-p-color-white-rgb) / 0.05), inset 1px 1px 8px 0 rgb(var(--sc-p-color-white-rgb) / 0.06);
  --sc-shadow-switch-track: inset 0 0.45px 0.9px rgb(0 0 0 / 0.45);
  --sc-shadow-switch-thumb: 0 0.37px 0.52px -0.28px rgb(0 0 0 / 0.42), 0 0.95px 1.33px -0.56px rgb(0 0 0 / 0.40), 0 1.9px 2.66px -0.84px rgb(0 0 0 / 0.38), 0 3.6px 5.05px -1.13px rgb(0 0 0 / 0.35), 0 7.16px 10.03px -1.41px rgb(0 0 0 / 0.29), 0 15.75px 22.05px 0 rgb(0 0 0 / 0.14);
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
  --sc-font-text-label-button-sm-family: var(--sc-p-font-text-11-family);
  --sc-font-text-label-button-sm-size: var(--sc-p-font-text-11-size);
  --sc-font-text-label-button-sm-weight: var(--sc-p-font-text-11-weight);
  --sc-font-text-label-button-sm-line-height: var(--sc-p-font-text-11-line-height);
  --sc-font-text-label-button-sm-letter-spacing: var(--sc-p-font-text-11-letter-spacing);
  --sc-font-text-label-button-sm: var(--sc-p-font-text-11);
  --sc-font-text-label-button-lg-family: var(--sc-p-font-text-11-family);
  --sc-font-text-label-button-lg-size: var(--sc-p-font-text-11-size);
  --sc-font-text-label-button-lg-weight: var(--sc-p-font-text-11-weight);
  --sc-font-text-label-button-lg-line-height: var(--sc-p-font-text-11-line-height);
  --sc-font-text-label-button-lg-letter-spacing: var(--sc-p-font-text-11-letter-spacing);
  --sc-font-text-label-button-lg: var(--sc-p-font-text-11);
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
  --sc-size-switch-track-width: var(--sc-p-space-32);
  --sc-size-switch-track-height: var(--sc-p-space-micro-18);
  --sc-size-switch-thumb: var(--sc-p-space-micro-14);
  --sc-size-switch-glyph: var(--sc-p-space-micro-6);
  --sc-size-progress-bar-height: var(--sc-p-space-4);
  --sc-size-progress-circular: var(--sc-p-space-48);
  --sc-size-progress-circular-stroke: var(--sc-p-space-4);
  --sc-size-progress-bar-height-active: var(--sc-p-space-micro-6);
  --sc-size-progress-hit-slop: var(--sc-p-space-micro-22);
  --sc-size-button-icon-lg: var(--sc-p-space-12);
  --sc-size-button-icon-sm: var(--sc-p-space-12);
  --sc-size-touch-target: var(--sc-p-space-48);
  --sc-space-component-padding-sm: var(--sc-p-space-8);
  --sc-space-component-padding-md: var(--sc-p-space-16);
  --sc-space-component-padding-lg: var(--sc-p-space-24);
  --sc-space-component-padding-inline-sm: var(--sc-p-space-micro-6);
  --sc-space-component-padding-inline-md: var(--sc-p-space-12);
  --sc-space-component-padding-inline-lg: var(--sc-p-space-16);
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
`,ed="_field_157db_36",td="_disabled_157db_46",nd="_controlWrapper_157db_50",rd="_input_157db_56",od="_track_157db_66",sd="_glyphs_157db_81",ld="_glyphOn_157db_96",id="_glyphOff_157db_102",ad="_thumb_157db_112",cd="_label_157db_180",Pt={field:ed,disabled:td,controlWrapper:nd,input:rd,track:od,glyphs:sd,glyphOn:ld,glyphOff:id,thumb:ad,label:cd};function ud({checked:i=!1,disabled:f=!1,onChange:a,label:p,sound:g=!0,className:b=""}){const L=S.useId(),P=Li("toggle",g);return u.jsxs("label",{htmlFor:L,className:`${Pt.field} ${f?Pt.disabled:""} ${b}`,children:[u.jsxs("span",{className:Pt.controlWrapper,children:[u.jsx("input",{id:L,type:"checkbox",role:"switch",className:Pt.input,checked:i,disabled:f,onChange:M=>{P(),a==null||a(M)}}),u.jsxs("span",{className:Pt.track,"aria-hidden":"true",children:[u.jsxs("span",{className:Pt.glyphs,children:[u.jsx("span",{className:Pt.glyphOn}),u.jsx("span",{className:Pt.glyphOff})]}),u.jsx("span",{className:Pt.thumb})]})]}),p&&u.jsx("span",{className:Pt.label,children:p})]})}const pd=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),S.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),fd=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),dd=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),hd=S.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),vs=S.forwardRef((i,f)=>{const{alt:a,color:p,size:g,weight:b,mirrored:L,children:P,weights:M,...O}=i,{color:$="currentColor",size:T,weight:F="regular",mirrored:re=!1,...ne}=S.useContext(hd);return S.createElement("svg",{ref:f,xmlns:"http://www.w3.org/2000/svg",width:g??T,height:g??T,fill:p??$,viewBox:"0 0 256 256",transform:L||re?"scale(-1, 1)":void 0,...ne,...O},!!a&&S.createElement("title",null,a),P,M.get(b??F))});vs.displayName="IconBase";const Pu=S.forwardRef((i,f)=>S.createElement(vs,{ref:f,...i,weights:pd}));Pu.displayName="ArrowRightIcon";const md=Pu,Ru=S.forwardRef((i,f)=>S.createElement(vs,{ref:f,...i,weights:fd}));Ru.displayName="MinusIcon";const vd=Ru,Mu=S.forwardRef((i,f)=>S.createElement(vs,{ref:f,...i,weights:dd}));Mu.displayName="PlusIcon";const gd=Mu,yd="_icon_1vxzc_2",xd={icon:yd},wd={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function xu({glyph:i,weight:f="regular",size:a="1em",label:p,className:g="",...b}){if(!i)return null;const L=p?{"aria-label":p,role:"img"}:{"aria-hidden":!0},P=wd[a];return P?u.jsx("span",{className:`${xd.icon} ${g}`.trim(),style:{fontSize:P},children:u.jsx(i,{weight:f,size:"1em",...L,...b})}):u.jsx(i,{weight:f,size:a,className:g,...L,...b})}const kd="_stepper_c7phq_19",bd="_button_c7phq_28",Ld="_readout_c7phq_66",Sd="_disabled_c7phq_85",Ur={stepper:kd,button:bd,readout:Ld,disabled:Sd},_d=400,zd=80;function Ed({value:i,onChange:f,min:a=-1/0,max:p=1/0,step:g=1,label:b,disabled:L=!1,sound:P=!0,className:M=""}){const O=Li("tick",P),$=S.useRef(i);$.current=i;const T=S.useRef(null),F=S.useRef(null),re=Y=>Math.max(a,Math.min(p,Y)),ne=Y=>{const ae=re($.current+Y);ae!==$.current&&($.current=ae,f==null||f(ae),O())},W=()=>{T.current&&clearTimeout(T.current),F.current&&clearInterval(F.current),T.current=null,F.current=null};S.useEffect(()=>W,[]);const q=Y=>{L||(ne(Y),W(),T.current=setTimeout(()=>{F.current=setInterval(()=>ne(Y),zd)},_d))},Be=i<=a,je=i>=p,J=Y=>{L||(Y.key==="ArrowUp"?(Y.preventDefault(),ne(g)):Y.key==="ArrowDown"?(Y.preventDefault(),ne(-g)):Y.key==="Home"&&Number.isFinite(a)?(Y.preventDefault(),$.current!==a&&O(),$.current=a,f==null||f(a)):Y.key==="End"&&Number.isFinite(p)&&(Y.preventDefault(),$.current!==p&&O(),$.current=p,f==null||f(p)))};return u.jsxs("div",{className:`${Ur.stepper} ${L?Ur.disabled:""} ${M}`,children:[u.jsx("button",{type:"button",className:Ur.button,"aria-label":b?`Decrease ${b}`:"Decrease",disabled:L||Be,onPointerDown:()=>q(-g),onPointerUp:W,onPointerLeave:W,onPointerCancel:W,children:u.jsx(xu,{glyph:vd,weight:"bold",size:"sm"})}),u.jsx("span",{className:Ur.readout,role:"spinbutton",tabIndex:L?-1:0,"aria-valuenow":i,"aria-valuemin":Number.isFinite(a)?a:void 0,"aria-valuemax":Number.isFinite(p)?p:void 0,"aria-label":b,"aria-disabled":L||void 0,onKeyDown:J,children:i}),u.jsx("button",{type:"button",className:Ur.button,"aria-label":b?`Increase ${b}`:"Increase",disabled:L||je,onPointerDown:()=>q(g),onPointerUp:W,onPointerLeave:W,onPointerCancel:W,children:u.jsx(xu,{glyph:gd,weight:"bold",size:"sm"})})]})}const Cd="_track_rlqpk_24",Nd="_indicator_rlqpk_34",jd="_segment_rlqpk_46",Pd="_md_rlqpk_61",Rd="_sm_rlqpk_71",Md="_lg_rlqpk_81",Td="_count_rlqpk_91",Fd="_segmentSelected_rlqpk_100",Dd="_disabled_rlqpk_114",un={track:Cd,indicator:Nd,segment:jd,md:Pd,sm:Rd,lg:Md,count:Td,segmentSelected:Fd,disabled:Dd};function Od({options:i=[],value:f,onChange:a,disabled:p=!1,label:g,size:b="md",sound:L=!0,className:P=""}){const M=Li("select",L),O=J=>{J!==f&&M(),a==null||a(J)},$=S.useRef(null),T=S.useRef({}),[F,re]=S.useState(null),ne=S.useCallback(()=>{const J=$.current,Y=T.current[f];if(!J||!Y){re(null);return}const ae=J.getBoundingClientRect(),Q=Y.getBoundingClientRect();re({left:Q.left-ae.left,width:Q.width})},[f]);S.useLayoutEffect(()=>{ne()},[ne,i.length,b]),S.useEffect(()=>(window.addEventListener("resize",ne),()=>window.removeEventListener("resize",ne)),[ne]);const W=J=>{var Y;(Y=T.current[J])==null||Y.focus()},q=J=>{if(p||i.length===0)return;const Y=(J+i.length)%i.length,ae=i[Y];ae&&(O(ae.value),W(ae.value))},Be=(J,Y)=>{if(!p)switch(J.key){case"ArrowRight":case"ArrowDown":J.preventDefault(),q(Y+1);break;case"ArrowLeft":case"ArrowUp":J.preventDefault(),q(Y-1);break;case"Home":J.preventDefault(),q(0);break;case"End":J.preventDefault(),q(i.length-1);break}},je=i.findIndex(J=>J.value===f);return u.jsxs("div",{ref:$,className:`${un.track} ${un[b]||un.md} ${p?un.disabled:""} ${P}`,role:"radiogroup","aria-label":g,"aria-disabled":p||void 0,children:[F&&u.jsx("span",{className:un.indicator,"aria-hidden":"true",style:{transform:`translateX(${F.left}px)`,width:`${F.width}px`}}),i.map((J,Y)=>{const ae=J.value===f,Q=ae||je===-1&&Y===0;return u.jsxs("button",{type:"button",ref:ce=>{T.current[J.value]=ce},role:"radio","aria-checked":ae,tabIndex:p?-1:Q?0:-1,disabled:p,className:`${un.segment} ${ae?un.segmentSelected:""}`,onClick:()=>O(J.value),onKeyDown:ce=>Be(ce,Y),children:[J.label,J.count!==void 0&&u.jsx("span",{className:un.count,children:J.count})]},J.value)})]})}const wu=16,pi=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],$d="_mark_nniye_3",Ad="_sm_nniye_24",Id="_md_nniye_1",Hd="_lg_nniye_26",Bd="_working_nniye_28",Ud="_paused_nniye_29",Vd="_base_nniye_33",Wd="_glint_nniye_34",Qd="_spin_nniye_36",Kd="_loop_nniye_37",gt={mark:$d,sm:Ad,md:Id,lg:Hd,working:Bd,paused:Ud,base:Vd,glint:Wd,spin:Qd,loop:Kd},Zd={sm:gt.sm,md:gt.md,lg:gt.lg},Gd=3.2;function Yd(i,f){const a=i%2===0,g=-((a?1:-1)*(360*i)/f),b=g+360*(a?3:7);return{from:`${g.toFixed(2)} 8 8`,to:`${b.toFixed(2)} 8 8`}}function Xd({working:i=!0,size:f="sm",label:a,className:p="",...g}){const b=`wm${S.useId().replace(/[^a-zA-Z0-9]/g,"")}`,L=pi.length,P=a?{role:"img","aria-label":a}:{"aria-hidden":!0},M=[gt.mark,Zd[f]??gt.sm,i?gt.working:gt.paused,p].filter(Boolean).join(" ");return u.jsxs("svg",{viewBox:`0 0 ${wu} ${wu}`,className:M,focusable:"false",...P,...g,children:[i&&u.jsx("defs",{children:pi.map((O,$)=>{const{from:T,to:F}=Yd($,L);return u.jsxs("linearGradient",{id:`${b}-s${$}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[u.jsx("stop",{offset:"0",className:gt.base}),u.jsx("stop",{offset:"0.45",className:gt.base}),u.jsx("stop",{offset:"1",className:gt.glint}),u.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:T,to:F,dur:`${Gd}s`,repeatCount:"indefinite"})]},$)})}),pi.map((O,$)=>u.jsx("g",{className:gt.spin,style:{"--wm-i":$},children:u.jsx("path",{d:O,className:gt.loop,style:{"--wm-i":$},stroke:i?`url(#${b}-s${$})`:void 0})},$))]})}const qd="_button_ibd1v_33",Jd="_label_ibd1v_74",eh="_arrow_ibd1v_85",th="_sm_ibd1v_56",nh="_primary_ibd1v_122",rh="_destructive_ibd1v_123",oh="_secondary_ibd1v_157",sh="_tertiary_ibd1v_173",lh="_loading_ibd1v_207",ih="_working_ibd1v_211",En={button:qd,label:Jd,arrow:eh,sm:th,primary:nh,destructive:rh,secondary:oh,tertiary:sh,loading:lh,working:ih},ah=["primary","secondary","tertiary","destructive"],ch=["lg","sm"];function uh(){return u.jsx(md,{weight:"bold",className:En.arrow,"aria-hidden":"true"})}function ph({variant:i="primary",size:f="lg",disabled:a=!1,loading:p=!1,arrow:g=!0,type:b="button",children:L,onClick:P,className:M="",...O}){const $=ah.includes(i)?i:"primary",T=ch.includes(f)?f:"lg",F=a||p;return u.jsxs("button",{type:b,className:`${En.button} ${En[$]} ${T==="sm"?En.sm:""} ${p?En.loading:""} ${M}`,disabled:F,"aria-busy":p||void 0,onClick:F?void 0:P,...O,children:[u.jsx("span",{className:En.label,children:L}),p?u.jsx(Xd,{className:En.working}):g&&u.jsx(uh,{})]})}const fh=`/* tokens:
 *   --sc-size-switch-track-width   · 32 track
 *   --sc-size-switch-track-height  · 18 track
 *   --sc-size-switch-thumb         · 14 thumb (2 inset)
 *   --sc-size-switch-glyph         · 6 I bar height / O ring diameter
 *   --sc-radius-pill               · 9999 pill
 *   --sc-color-surface-deep-sunk   · off track ground
 *   --sc-color-surface-hover       · off track ground, hover
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
 *   --sc-motion-reveal-duration / -easing  · knob + glyph travel
 *   --sc-motion-hover-duration / -easing   · track ground change
 *   --sc-motion-press-duration / -easing / -scale · knob press
 *
 * Geometry (all derived, no magic values):
 *   inset  = (track-height − thumb) / 2            → 2
 *   travel = track-width − thumb − 2 × inset       → 14
 *   The I mark sits centred in the free zone left of the knob when on
 *   (inset + travel/2 → 9); the O ring centred in the free zone right of
 *   the knob when off (inset + thumb + travel/2 → 23). Both ride one row
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
  background-color: var(--sc-color-surface-deep-sunk);
  box-shadow: var(--sc-shadow-switch-track);
  display: inline-flex;
  align-items: center;
  position: relative;
  transition: background-color var(--sc-motion-reveal-duration) var(--sc-motion-reveal-easing);
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
  transition: transform var(--sc-motion-reveal-duration) var(--sc-motion-reveal-easing);
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
    transform var(--sc-motion-reveal-duration) var(--sc-motion-reveal-easing),
    scale var(--sc-motion-press-duration) var(--sc-motion-press-easing);
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
  background-color: var(--sc-color-surface-hover);
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
}

.disabled .label {
  color: var(--sc-color-text-disabled);
}

@media (prefers-reduced-motion: reduce) {
  .track, .thumb, .glyphs > span { transition: none; }
  .field:active .input:not(:disabled) ~ .track .thumb { scale: none; }
}
`,dh=`/* tokens:
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
`,hh=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,mh=`/* tokens:
 *   --sc-color-surface-sunk               · track ground
 *   --sc-color-surface-floating           · selected segment fill (raised, fill-only — no border/shadow)
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
 *   --sc-motion-reveal-duration / -easing · indicator slide
 *   --sc-motion-hover-duration / -easing  · text color transition
 */

.track {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--sc-space-component-gap-sm);
  padding: var(--sc-space-component-padding-sm);
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-surface-sunk);
}

.indicator {
  position: absolute;
  top: var(--sc-space-component-padding-sm);
  bottom: var(--sc-space-component-padding-sm);
  left: 0;
  border-radius: var(--sc-radius-pill);
  background-color: var(--sc-color-surface-floating);
  transition:
    transform var(--sc-motion-reveal-duration) var(--sc-motion-reveal-easing),
    width var(--sc-motion-reveal-duration) var(--sc-motion-reveal-easing);
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

@media (prefers-reduced-motion: reduce) {
  .indicator { transition: none; }
  .segment { transition: none; }
}
`,vh=`/* tokens:
 *   --sc-space-component-padding-inline-lg  · inline
 *   --sc-space-component-padding-block-md   · block
 *   --sc-space-component-gap-md             · label ↔ arrow gap
 *   --sc-radius-pill                        · pill corner
 *   --sc-border-width-default               · border
 *   --sc-color-border-focus / -focus-offset · focus ring
 *   --sc-font-text-label-button-lg-*        · 11/medium label (lg)
 *   --sc-font-text-label-button-sm-*        · 11/medium label (sm)
 *   --sc-space-component-padding-inline-md  · sm inline (12)
 *   --sc-space-component-padding-block-button-sm  · sm block (4)
 *   --sc-space-component-padding-block-sm   · sm label ↔ arrow gap (2)
 *   --sc-color-border-strong                · secondary outline
 *   --sc-color-surface-raised               · primary resting fill (neutral)
 *   --sc-color-control-key-shade            · 135° face shade over any fill (Drams OP-1 Keys)
 *   --sc-shadow-control-key                 · resting key: shade down-right, highlight up-left
 *   --sc-shadow-control-key-pressed         · pressed key: softer, with an inner light
 *   --sc-size-button-icon-lg / -sm          · arrow and working mark per size (12, both today)
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
  padding-inline: var(--sc-space-component-padding-inline-lg);
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

/* Trailing arrow — per-size role token, 12px at both sizes today
   (library spec, 2026-10-06); it was 1.4em (15.4px), too heavy against
   the 11px label. Inherits colour. */
.arrow {
  flex: none;
  width: var(--sc-btn-icon);
  height: var(--sc-btn-icon);
}

/* --- Size · sm (ADR scds-button-size-small) ------------------------
   11/medium label, 12 × 4 padding, 2px gap, 12px icon (amended
   2026-10-06 to the library's revised spec). The variants below set
   only colour, so every variant and state carries over unchanged. */
.sm {
  --sc-btn-icon: var(--sc-size-button-icon-sm);
  gap: var(--sc-space-component-padding-block-sm);
  padding-inline: var(--sc-space-component-padding-inline-md);
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
`,gh="_app_px5b6_6",yh="_bar_px5b6_18",xh="_brand_px5b6_27",wh="_meta_px5b6_34",kh="_readout_px5b6_35",bh="_values_px5b6_36",Lh="_spacer_px5b6_42",Sh="_stages_px5b6_46",_h="_stageWrap_px5b6_54",zh="_activeStage_px5b6_61",Eh="_stageSelect_px5b6_65",Ch="_stageLabel_px5b6_75",Nh="_stage_px5b6_46",jh="_panel_px5b6_94",Ph="_group_px5b6_103",Rh="_prop_px5b6_121",Mh="_editor_px5b6_122",Th="_token_px5b6_132",Fh="_changed_px5b6_140",Dh="_tokenHead_px5b6_144",Oh="_tokenName_px5b6_150",$h="_num_px5b6_162",Ah="_mini_px5b6_166",Ih="_curve_px5b6_173",Hh="_sounds_px5b6_187",Bh="_sound_px5b6_187",Uh="_shippedSound_px5b6_210",Vh="_reset_px5b6_214",Wh="_notes_px5b6_267",Qh="_tabs_px5b6_279",Kh="_tab_px5b6_279",Zh="_pin_px5b6_308",Gh="_pick_px5b6_313",Yh="_propBlock_px5b6_320",Xh="_easing_px5b6_321",qh="_springRows_px5b6_322",Jh="_propLabel_px5b6_328",em="_tokenActions_px5b6_332",tm="_motionTiles_px5b6_347",nm="_motionTile_px5b6_347",rm="_layers_px5b6_405",om="_layer_px5b6_405",sm="_layerHead_px5b6_418",lm="_layerGrid_px5b6_423",im="_scope_px5b6_428",am="_steps_px5b6_437",cm="_step_px5b6_437",um="_stepRole_px5b6_471",N={app:gh,bar:yh,brand:xh,meta:wh,readout:kh,values:bh,spacer:Lh,stages:Sh,stageWrap:_h,activeStage:zh,stageSelect:Eh,stageLabel:Ch,stage:Nh,panel:jh,group:Ph,prop:Rh,editor:Mh,token:Th,changed:Fh,tokenHead:Dh,tokenName:Oh,num:$h,mini:Ah,curve:Ih,sounds:Hh,sound:Bh,shippedSound:Uh,reset:Vh,notes:Wh,tabs:Qh,tab:Kh,pin:Zh,pick:Gh,propBlock:Yh,easing:Xh,springRows:qh,propLabel:Jh,tokenActions:em,motionTiles:tm,motionTile:nm,layers:rm,layer:om,layerHead:sm,layerGrid:lm,scope:im,steps:am,step:cm,stepRole:um},ls=["day","week","month"];function pm({p:i,ctx:f}){const a=S.useRef(null);return S.useEffect(()=>{var O;const p=[...((O=a.current)==null?void 0:O.children)||[]],g=f.slow||1,b=i.reduced,L=b==="opacity only"?{opacity:i.opacityFrom,transform:"none",filter:"none"}:{opacity:i.opacityFrom,transform:`translateY(${i.distance}px) scale(${i.scaleFrom}) rotate(${i.rotateFrom}deg)`,filter:`blur(${i.blurFrom}px)`},P={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},M=p.map(($,T)=>$.animate([L,P],{duration:b==="none"?0:i.duration*g,delay:b==="none"?0:(i.delay+T*i.stagger)*g,easing:i.easing,fill:"both"}));return()=>M.forEach($=>$.cancel())},[i,f.replay,f.slow]),u.jsx("div",{className:N.motionTiles,ref:a,children:Array.from({length:i.count},(p,g)=>u.jsx("span",{className:N.motionTile},g))})}const fi=i=>i.reduced==="none"?0:i.delay+i.stagger*(i.count-1)+i.duration,fs={Switch:{css:[fh],shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Notifications"}],play:(i,f)=>f("checked",!i.checked),render:(i,f,a)=>u.jsx(ud,{checked:i.checked,disabled:i.disabled,label:i.label,sound:!1,onChange:p=>{f("checked",p.target.checked),a()}})},Stepper:{css:[dh,hh],shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(i,f)=>f("value",i.value+i.step>i.max?i.min:i.value+i.step),render:(i,f,a)=>u.jsx(Ed,{value:i.value,min:i.min,max:i.max,step:i.step,disabled:i.disabled,label:i.label,sound:!1,onChange:p=>{f("value",p),a()}})},SegmentedControl:{css:[mh],shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:ls,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(i,f)=>f("value",ls[(ls.indexOf(i.value)+1)%ls.length]),render:(i,f,a)=>u.jsx(Od,{label:"Range",value:i.value,size:i.size,disabled:i.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:p=>{p!==i.value&&a(),f("value",p)}})},Button:{css:[vh],shippedSound:null,trigger:"click (audition only; Button ships silent)",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(i,f,a)=>u.jsx(ph,{variant:i.variant,size:i.size,disabled:i.disabled,loading:i.loading,arrow:i.arrow,onClick:()=>a(),children:i.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(i,f,a,p)=>u.jsx(pm,{p:i,ctx:p})}},ku=5e-4,fm=6e3,bu=60;function dm({stiffness:i,damping:f,mass:a}){let p=0,g=0;const b=.001,L=[0];let P=0,M=0;for(;P<fm;){const O=(-i*(p-1)-f*g)/a;if(g+=O*b,p+=g*b,P+=1,L.push(p),p>M&&(M=p),Math.abs(p-1)<ku&&Math.abs(g)<ku)break}return{trace:L,settleMs:P,overshoot:Math.max(0,M-1)}}function gi(i){const{trace:f,settleMs:a,overshoot:p}=dm(i),g=[];for(let b=0;b<bu;b+=1){const L=Math.round(b/(bu-1)*(f.length-1));g.push(+f[L].toFixed(4))}return g[g.length-1]=1,{easing:`linear(${g.join(", ")})`,settleMs:a,overshoot:p}}const Tu=i=>{var f;return((f=i==null?void 0:i.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:f[1].split(",").map(Number))||null};function hm(i){var p;const f=Tu(i);if(f){const g=[];for(let b=0;b<=40;b+=1){const L=b/40,P=3*(1-L)**2*L*f[0]+3*(1-L)*L**2*f[2]+L**3,M=3*(1-L)**2*L*f[1]+3*(1-L)*L**2*f[3]+L**3;g.push([P,M])}return g}const a=(p=i==null?void 0:i.match(/linear\(([^)]+)\)/))==null?void 0:p[1].split(",").map(g=>parseFloat(g));return a?a.map((g,b)=>[b/(a.length-1),g]):[[0,0],[1,1]]}function mm(i){const f=hm(i),a=f.map(L=>L[1]),p=Math.min(0,...a),b=Math.max(1,...a)-p||1;return f.map(([L,P],M)=>`${M?"L":"M"}${L.toFixed(3)} ${(1-(P-p)/b).toFixed(3)}`).join(" ")}const _t=(i,f=2)=>+(+i).toFixed(f),di=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function Fu(i){di.fillStyle="#000",di.fillStyle=i;const f=di.fillStyle;if(f.startsWith("#"))return{hex:f,a:1};const a=f.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return a?{hex:"#"+[a[1],a[2],a[3]].map(g=>Math.round(+g).toString(16).padStart(2,"0")).join(""),a:a[4]!==void 0?+a[4]:1}:{hex:"#000000",a:1}}function hs(i,f){if(f>=1)return i.toUpperCase();const a=parseInt(i.slice(1),16);return`rgb(${a>>16&255} ${a>>8&255} ${a&255} / ${+f.toFixed(3)})`}const vm=i=>String(i).endsWith("ms")?parseFloat(i):parseFloat(i)*1e3;function Du({label:i,value:f,spring:a,presets:p,asRef:g,onChange:b}){const[L,P]=S.useState(a?"spring":"bezier"),M=Tu(f)||[.25,.1,.25,1],O=a||{stiffness:260,damping:22,mass:1},$=F=>{const re=gi(F);b(re.easing,F,re.settleMs)},T=a?gi(a):null;return u.jsxs("div",{className:N.easing,children:[u.jsxs("div",{className:N.editor,children:[u.jsx("svg",{className:N.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:u.jsx("path",{d:mm(f)})}),u.jsxs("select",{"aria-label":`${i} mode`,value:L,onChange:F=>{P(F.target.value),F.target.value==="spring"?$(O):b(`cubic-bezier(${M.join(", ")})`,null,null)},children:[u.jsx("option",{value:"bezier",children:"bezier"}),u.jsx("option",{value:"spring",children:"spring"})]}),(p==null?void 0:p.length)>0&&u.jsxs("select",{"aria-label":`${i} preset`,value:"",onChange:F=>{const re=p.find(ne=>ne.name===F.target.value);re&&(P("bezier"),b(g?`var(${re.name})`:re.value,null,null))},children:[u.jsx("option",{value:"",children:"token…"}),p.map(F=>u.jsx("option",{value:F.name,children:F.name.replace("--sc-p-motion-easing-","")},F.name))]})]}),L==="bezier"?u.jsx("div",{className:N.editor,children:M.map((F,re)=>u.jsx("input",{type:"number","aria-label":`${i} bezier point ${re+1}`,className:N.num,step:"0.01",value:F,onChange:ne=>{const W=[...M];W[re]=+ne.target.value,b(`cubic-bezier(${W.join(", ")})`,null,null)}},re))}):u.jsxs("div",{className:N.springRows,children:[[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([F,re,ne,W])=>u.jsxs("label",{className:N.mini,children:[F,u.jsx("input",{type:"range",min:re,max:ne,step:W,value:O[F],onChange:q=>$({...O,[F]:+q.target.value})}),u.jsx("span",{className:N.readout,children:O[F]})]},F)),T&&u.jsxs("span",{className:N.readout,children:["settles ",T.settleMs,"ms · overshoot ",Math.round(T.overshoot*100),"%"]})]})]})}function gm(i){const f=[];let a=0,p="";for(const g of i||"")g==="("&&(a+=1),g===")"&&(a-=1),g===","&&a===0?(f.push(p.trim()),p=""):p+=g;return p.trim()&&f.push(p.trim()),f.filter(g=>g&&g!=="none").map(g=>{var F;const b=/\binset\b/.test(g),L=((F=g.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:F[0])||"rgb(0 0 0 / 0.2)",P=g.replace(L,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(re=>parseFloat(re)||0),[M=0,O=0,$=0,T=0]=P;return{inset:b,x:M,y:O,blur:$,spread:T,color:L}})}const ym=i=>i.map(f=>`${f.inset?"inset ":""}${_t(f.x)}px ${_t(f.y)}px ${_t(f.blur)}px ${_t(f.spread)}px ${f.color}`).join(", ");function xm({name:i,value:f,onSet:a}){const p=gm(f),g=(b,L)=>a(ym(p.map((P,M)=>M===b?{...P,...L}:P)));return u.jsx("div",{className:N.layers,children:p.map((b,L)=>{const P=Fu(b.color),M=b.inset?"inner edge":(b.x<0||b.y<0)&&P.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return u.jsxs("div",{className:N.layer,children:[u.jsxs("span",{className:N.layerHead,children:["layer ",L+1," · ",M]}),u.jsx("div",{className:N.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([O,$,T,F])=>u.jsxs("label",{className:N.mini,children:[O,u.jsx("input",{type:"number",className:N.num,"aria-label":`${i} layer ${L+1} ${O}`,min:$,max:T,step:F,value:_t(b[O]),onChange:re=>g(L,{[O]:+re.target.value})})]},O))}),u.jsxs("div",{className:N.editor,children:[u.jsx("input",{type:"color","aria-label":`${i} layer ${L+1} colour`,value:P.hex,onChange:O=>g(L,{color:hs(O.target.value,P.a)})}),u.jsxs("label",{className:N.mini,children:["opacity",u.jsx("input",{type:"range","aria-label":`${i} layer ${L+1} opacity`,min:"0",max:"1",step:"0.01",value:P.a,onChange:O=>g(L,{color:hs(P.hex,+O.target.value)})}),u.jsx("span",{className:N.readout,children:_t(P.a)})]})]})]},L)})})}const wm=[11,12,13,14,16,20].map((i,f)=>[i,["chrome","ui","caption","dense","body","lead"][f],`--sc-p-font-size-${i}`]),km=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],bm=i=>/^--sc-font-.*-size$/.test(i)?wm:/^--sc-size-.*icon/.test(i)?km:null;function Lm({name:i,kind:f,shipped:a,value:p,override:g,scope:b,adj:L,spring:P,pin:M,refs:O,easingPresets:$,onSet:T,onAdj:F,onSpring:re,onReset:ne,onPin:W,restOf:q,onCopyRest:Be}){const je=g!==void 0,[J,Y]=S.useState(!!M);let ae=null;if(f==="color"){const Q=Fu(p);ae=u.jsxs("div",{className:N.editor,children:[u.jsx("input",{type:"color","aria-label":`${i} colour`,value:Q.hex,onChange:ce=>T(hs(ce.target.value,Q.a))}),u.jsx("input",{type:"range","aria-label":`${i} alpha`,min:"0",max:"1",step:"0.01",value:Q.a,onChange:ce=>T(hs(Q.hex,+ce.target.value))})]})}else if(f==="length"||f==="number"){const Q=parseFloat(p)||0,ce=Math.abs(parseFloat(a)||1),Fe=f==="length"?Math.max(64,ce*4):Math.max(2,ce*2),qe=f==="length"?"px":"",de=f==="length"?.5:.005;ae=u.jsxs("div",{className:N.editor,children:[u.jsx("input",{type:"range","aria-label":i,min:"0",max:Fe,step:de,value:Q,onChange:ve=>T(`${ve.target.value}${qe}`)}),u.jsx("input",{type:"number","aria-label":`${i} value`,className:N.num,step:de,value:_t(Q,3),onChange:ve=>T(`${ve.target.value}${qe}`)})]});const Ce=bm(i);Ce&&(ae=u.jsxs(u.Fragment,{children:[ae,u.jsx("div",{className:N.steps,role:"group","aria-label":`${i} scale`,children:Ce.map(([ve,Pe,X])=>u.jsxs("button",{type:"button",className:N.step,"aria-pressed":Q===ve,onClick:()=>T(`var(${X})`),children:[ve,Pe&&u.jsx("span",{className:N.stepRole,children:Pe})]},ve))})]}))}else if(f==="time"){const Q=vm(p);ae=u.jsxs("div",{className:N.editor,children:[u.jsx("input",{type:"range","aria-label":i,min:"0",max:"1200",step:"10",value:Q,onChange:ce=>T(`${ce.target.value}ms`)}),u.jsxs("span",{className:N.readout,children:[Math.round(Q),"ms"]})]})}else f==="easing"?ae=u.jsx(Du,{label:i,value:p,spring:P,presets:$,asRef:!0,onChange:(Q,ce,Fe)=>{T(Q),re(ce,Fe)}}):f==="shadow"?ae=u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:N.editor,children:[u.jsxs("label",{className:N.mini,children:["scale all",u.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(L==null?void 0:L.scale)??1,onChange:Q=>F({...L,scale:+Q.target.value})})]}),u.jsxs("label",{className:N.mini,children:["strength all",u.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(L==null?void 0:L.strength)??1,onChange:Q=>F({...L,strength:+Q.target.value})})]})]}),u.jsx(xm,{name:i,value:p,onSet:T})]}):ae=u.jsx("input",{type:"text","aria-label":i,value:p,onChange:Q=>T(Q.target.value)});return u.jsxs("div",{className:`${N.token} ${je?N.changed:""}`,children:[u.jsxs("div",{className:N.tokenHead,children:[u.jsxs("code",{className:N.tokenName,children:[i.replace("--sc-",""),je&&b&&u.jsx("span",{className:N.scope,children:b==="all"?"both modes":`${b} only`})]}),u.jsxs("span",{className:N.tokenActions,children:[q&&u.jsx("button",{type:"button",className:N.reset,title:`Set to this concept's ${q.replace("--sc-","")} value`,onClick:Be,children:"copy rest"}),u.jsx("button",{type:"button",className:N.reset,"aria-pressed":J,onClick:()=>Y(Q=>!Q),children:"note"}),je&&u.jsx("button",{type:"button",className:N.reset,onClick:ne,"aria-label":`Reset ${i}`,children:"reset"})]})]}),ae,(O==null?void 0:O.length)>0&&f!=="easing"&&u.jsxs("select",{"aria-label":`${i} token`,value:g!=null&&g.startsWith("var(")?g.slice(4,-1):"",onChange:Q=>Q.target.value&&T(`var(${Q.target.value})`),children:[u.jsx("option",{value:"",children:"token…"}),O.map(Q=>u.jsx("option",{value:Q,children:Q.replace("--sc-p-","")},Q))]}),J&&u.jsx("input",{type:"text",className:N.pin,"aria-label":`Note on ${i}`,placeholder:"Note on this value…",value:M||"",onChange:Q=>W(Q.target.value)}),u.jsxs("div",{className:N.values,children:[u.jsxs("span",{title:a,children:["shipped ",a]}),je&&u.jsxs("span",{title:p,children:["tuned ",p]})]})]})}function Sm({def:i,value:f,spring:a,easingPresets:p,onChange:g,onSpring:b}){const L=`prop-${i.name}`;let P;if(i.type==="boolean")P=u.jsx("input",{id:L,type:"checkbox",checked:!!f,onChange:M=>g(M.target.checked)});else if(i.type==="enum")P=u.jsx("select",{id:L,value:f,onChange:M=>g(M.target.value),children:i.options.map(M=>u.jsx("option",{children:M},M))});else if(i.type==="number")P=u.jsx("input",{id:L,type:"number",className:N.num,min:i.min,max:i.max,value:f,onChange:M=>g(+M.target.value)});else if(i.type==="range")P=u.jsxs(u.Fragment,{children:[u.jsx("input",{id:L,type:"range",min:i.min,max:i.max,step:i.step,value:f,onChange:M=>g(+M.target.value)}),u.jsxs("span",{className:N.readout,children:[f,i.unit||""]})]});else{if(i.type==="easing")return u.jsxs("div",{className:N.propBlock,children:[u.jsx("span",{className:N.propLabel,children:u.jsx("code",{children:i.name})}),u.jsx(Du,{label:i.name,value:f,spring:a,presets:p,onChange:(M,O,$)=>b(M,O,$)})]});P=u.jsx("input",{id:L,type:"text",value:f,onChange:M=>g(M.target.value)})}return u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:L,children:u.jsx("code",{children:i.name})}),P]})}const pn=!0,_m="./sounds/",zm=3,Em=i=>`sc-tune:v2:${i}`,Cm=["all","light","dark"],Ou=i=>/^--sc-(color|shadow)-/.test(i),is=(i,f)=>Ou(i)?f:"all",ms=()=>({all:{},light:{},dark:{}}),as=(i,f)=>({...i.overrides.all,...i.overrides[f]}),hi=["A","B","C","D"],yi=i=>[...new Set(i)],ds=yi(Jf.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Nm={color:ds.filter(i=>i.startsWith("--sc-p-color-")&&!i.endsWith("-rgb")),length:ds.filter(i=>/^--sc-p-(space|size|radius|border-width)-/.test(i)),time:ds.filter(i=>i.startsWith("--sc-p-motion-duration-"))},jm=ds.filter(i=>i.startsWith("--sc-p-motion-easing-"));function Pm(i){var g;const f=i.join(`
`),a=yi(((g=f.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:g.map(b=>b.slice(4)))||[]),p=yi(f.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:a.sort(),derived:p}}const Lu=i=>{var f;return((f=i.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:f[1])||"other"};function cs(i){return i?/^(cubic-bezier|ease|linear|steps)/.test(i)?"easing":/^-?[\d.]+m?s$/.test(i)?"time":/px/.test(i)&&/(rgb|#|hsl|color\(|inset)/.test(i)?"shadow":CSS.supports("color",i)?"color":/^-?[\d.]+px$/.test(i)?"length":/^-?[\d.]+$/.test(i)?"number":"text":"text"}const xi=(i,f)=>{if(!i)return{};const a=getComputedStyle(i);return Object.fromEntries(f.map(p=>[p,a.getPropertyValue(p).trim()]))},Rm=(i,f)=>{if(!i)return{};const a=document.createElement("span");a.style.cssText="position:absolute;visibility:hidden;height:0;",i.appendChild(a);const p=Object.fromEntries(f.map(g=>(a.style.width=`var(${g})`,[g,getComputedStyle(a).width])));return a.remove(),p},Su=(i,f)=>{if(!i)return{};const a=document.createElement("div");a.style.display="none";for(const[g,b]of Object.entries(f))a.style.setProperty(g,b);i.appendChild(a);const p=xi(a,Object.keys(f));return a.remove(),p};function Mm(i,f,a){return i.replace(/(-?[\d.]+)px/g,(p,g)=>`${_t(g*f)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(p,g,b)=>`rgba(${g}, ${_t(Math.min(1,b*a),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(p,g)=>`/ ${_t(Math.min(1,g*a),3)})`)}let fn=null;const _u=new Map;async function us(i,f,a){if(!i)return;fn=fn||new(window.AudioContext||window.webkitAudioContext),fn.state==="suspended"&&await fn.resume();let p=_u.get(i);if(!p){const L=await(await fetch(_m+i)).arrayBuffer();p=await fn.decodeAudioData(L),_u.set(i,p)}const g=fn.createBufferSource(),b=fn.createGain();b.gain.value=f,g.buffer=p,g.playbackRate.value=a,g.connect(b).connect(fn.destination),g.start()}const Tm=["rest","hover","focus","active"],Fm={hover:":hover",focus:":focus-visible",active:":active"};function Dm(i){var g;const f=Fm[i];if(!f)return"";const a=[],p=(b,L)=>{for(const P of b){if(P.cssRules&&P.media){p(P.cssRules,O=>L(`@media ${P.media.mediaText}{${O}}`));continue}if(!P.selectorText||!P.selectorText.includes(f))continue;const M=P.selectorText.split(",").map(O=>O.trim()).filter(O=>O.includes(f)).map(O=>`[data-force='${i}'] ${O.split(f).join("")}`).join(", ");a.push(L(`${M}{${P.style.cssText}}`))}};for(const b of document.styleSheets)if(((g=b.ownerNode)==null?void 0:g.id)!=="sc-tune-force")try{p(b.cssRules,L=>L)}catch{}return a.join(`
`)}const $u=i=>Object.fromEntries(i.props.map(f=>[f.name,f.default])),Au=(i,f)=>({id:f,overrides:ms(),shadowAdj:ms(),springs:{},pins:{},notes:"",props:$u(i),sound:{file:i.shippedSound,volume:.7,rate:1}});function Om(i){const f=fs[i];return{component:i,notes:"",active:"A",concepts:[Au(f,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:f.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function zu(i){var f;try{const a=JSON.parse(localStorage.getItem(Em(i))||"null");if((a==null?void 0:a.component)===i&&Array.isArray(a.concepts)){for(const p of a.concepts){if(!p.overrides.all){const g=ms();for(const[L,P]of Object.entries(p.overrides))g[Ou(L)?"dark":"all"][L]=P;const b=ms();for(const[L,P]of Object.entries(p.shadowAdj||{}))b.dark[L]=P;p.overrides=g,p.shadowAdj=b}if(i==="Button")for(const g of Object.values(p.overrides))for(const b of Object.keys(g)){if(!b.startsWith("--sc-font-text-label-chrome-"))continue;const L=b.replace("label-chrome-","label-button-lg-");L in g||(g[L]=g[b]),delete g[b]}}return((f=a.view)==null?void 0:f.ground)==="#E3DFD8"&&(a.view.ground="--sc-color-surface-page"),a}}catch{}return Om(i)}function $m(){const i=new URLSearchParams(location.search).get("c"),[f,a]=S.useState(fs[i]?i:"Switch"),[p,g]=S.useState(()=>zu(f)),[b,L]=S.useState(null),[P,M]=S.useState([]),[O,$]=S.useState(!0),[T,F]=S.useState({}),[re,ne]=S.useState({}),[W,q]=S.useState({}),[Be,je]=S.useState(0),[J,Y]=S.useState(!1),[ae,Q]=S.useState(!1),ce=S.useRef(null),Fe=S.useRef({}),qe=S.useRef(null),de=fs[f],Ce=de.kind==="motion",{tokens:ve,derived:Pe}=S.useMemo(()=>Pm(de.css),[de]),X=p.concepts.find(v=>v.id===p.active)||p.concepts[0],lt=S.useMemo(()=>{const v=getComputedStyle(document.documentElement);return jm.map(k=>({name:k,value:v.getPropertyValue(k).trim()}))},[]);S.useEffect(()=>{fetch("./spec.json").then(v=>v.json()).then(v=>{a(v.component),g(v.state),L({recorded:v.recorded})})},[]),S.useEffect(()=>{},[]);const We=v=>{a(v),g(zu(v)),history.replaceState(null,"",`?c=${v}`)};S.useEffect(()=>{document.documentElement.setAttribute("data-theme",p.view.theme)},[p.view.theme]);const we=p.view.force||"rest";S.useEffect(()=>{let v=document.getElementById("sc-tune-force");v||(v=document.createElement("style"),v.id="sc-tune-force",document.head.appendChild(v)),v.textContent=Dm(we)},[we]),S.useLayoutEffect(()=>{var _;F(xi(ce.current,ve));const v=xi(ce.current,ve);Fe.current[p.view.theme]=v,ne({...v,...Su(ce.current,as(X,p.view.theme))});const k=(_=qe.current)==null?void 0:_.querySelector("[class]");q(Rm(k?k.closest("label")||k:null,Pe))},[ve,Pe,X.overrides,p.view.theme,X.props]),S.useEffect(()=>{},[p,f]);const D=S.useCallback(v=>g(k=>k),[]),K=S.useCallback((v,k)=>g(_=>({..._,concepts:_.concepts.map(ie=>ie.id===v?k(ie):ie)})),[]),A=S.useCallback(v=>(k,_)=>K(v,ie=>({...ie,props:{...ie.props,[k]:_}})),[K]),m=v=>D(k=>({...k,concepts:k.concepts.map(_=>_.id===k.active?v(_):_)})),z=p.view.theme,te=(v,k,_)=>{const ie=is(k,z),oe={...v,[ie]:{...v[ie]}};return _===void 0?delete oe[ie][k]:oe[ie][k]=_,oe},se=(v,k)=>m(_=>({..._,overrides:te(_.overrides,v,k)})),ue=v=>m(k=>{const _={...k.springs};return delete _[v],{...k,overrides:te(k.overrides,v,void 0),shadowAdj:te(k.shadowAdj,v,void 0),springs:_}}),pe=(v,k,_)=>m(ie=>{const oe={...ie.springs};let he=ie.overrides;if(k){oe[v]=k;const Je=v.replace(/-easing$/,"-duration");Je!==v&&ve.includes(Je)&&(he=te(he,Je,`${_}ms`))}else delete oe[v];return{...ie,springs:oe,overrides:he}}),ke=(v,k)=>m(_=>({..._,shadowAdj:te(_.shadowAdj,v,k),overrides:te(_.overrides,v,Mm(T[v],k.scale??1,k.strength??1))})),ge=(v,k)=>m(_=>({..._,pins:{..._.pins,[v]:k}})),ye=(v,k)=>m(_=>({..._,sound:{..._.sound,[v]:k}})),De=(v,k)=>g(_=>({..._,view:{..._.view,[v]:k}})),Ht=de.props.some(v=>v.name==="disabled"),Vr=v=>g(k=>({...k,view:{...k.view,force:v==="disabled"?"rest":v},concepts:Ht?k.concepts.map(_=>({..._,props:{..._.props,disabled:v==="disabled"}})):k.concepts})),dn=v=>D(k=>{const _=hi.find(he=>!k.concepts.some(Je=>Je.id===he));if(!_)return k;const ie=k.concepts.find(he=>he.id===k.active),oe=v?{...structuredClone(ie),id:_,notes:""}:Au(de,_);return{...k,concepts:[...k.concepts,oe],active:_}}),nr=v=>D(k=>{if(k.concepts.length<2)return k;const _=k.concepts.filter(ie=>ie.id!==v);return{...k,concepts:_,active:_[0].id,pick:k.pick.id===v?{id:null,reason:k.pick.reason}:k.pick}}),Wr=()=>g(v=>{const k=!v.view.blind,_=k?[...v.concepts.map(ie=>ie.id)].sort(()=>Math.random()-.5):null;return{...v,view:{...v.view,blind:k,order:_,compare:k?!0:v.view.compare}}}),Cn=S.useCallback(()=>{je(k=>k+1),de.play&&p.concepts.forEach(k=>de.play(k.props,A(k.id)));const v=p.concepts.find(k=>k.id===p.active);v!=null&&v.sound.file&&us(v.sound.file,v.sound.volume,v.sound.rate)},[de,p.concepts,p.active,A]),Nn=Ce?Math.max(1200,fi(X.props)*p.view.slow+900):1400*p.view.slow;S.useEffect(()=>{if(!J)return;const v=setInterval(Cn,Nn);return()=>clearInterval(v)},[J,Cn,Nn]);const Qr=ve.filter(v=>cs(T[v])==="time"),jn=v=>{const k=p.view.ground,_=k.startsWith("--")?{background:`var(${k})`}:p.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:k,"--sc-color-surface-page":k},ie={zoom:p.view.zoom,..._,...v};if(p.view.slow!==1)for(const oe of Qr)ie[oe]=`calc(${v[oe]??T[oe]} * ${p.view.slow})`;return ie},Bt=S.useCallback(()=>{const v=ce.current,k=_=>_.id;return{tool:"sc-tune",version:zm,component:f,kind:de.kind||"component",recorded:new Date().toISOString(),theme:p.view.theme,notes:p.notes,pick:p.pick.id?{concept:p.pick.id,reason:p.pick.reason}:null,concepts:p.concepts.map(_=>{const ie=Su(v,as(_,p.view.theme));return{id:k(_),notes:_.notes,props:_.props,sound:{..._.sound,shipped:de.shippedSound,trigger:de.trigger},tokens:Cm.flatMap(oe=>Object.keys(_.overrides[oe]).map(he=>{var Gr;const Je=oe==="all"?T:Fe.current[oe]||{},Rt=_.overrides[oe][he],Zr=oe==="all"||oe===p.view.theme;return{name:he,mode:oe,category:Lu(he),kind:cs(Je[he]||T[he]),shipped:Je[he]??null,tuned:Zr?ie[he]??Rt:Rt,override:Rt,...(Gr=_.shadowAdj[oe])!=null&&Gr[he]?{shadowAdjust:_.shadowAdj[oe][he]}:{},..._.springs[he]?{spring:{..._.springs[he],...Eu(_.springs[he])}}:{}}})),pins:Object.fromEntries(Object.entries(_.pins).filter(([,oe])=>oe)),...Ce?{motion:{lastFrameMs:fi(_.props),..._.springs["prop:easing"]?{spring:{..._.springs["prop:easing"],...Eu(_.springs["prop:easing"])}}:{}}}:{}}}),derived:W,tokenCount:ve.length,state:p}},[f,de,Ce,p,T,W,ve]);S.useEffect(()=>{window.scTune={export:Bt,component:f}},[Bt,f]);const Ut=S.useMemo(()=>{var k;const v={};for(const _ of ve)(v[k=Lu(_)]||(v[k]=[])).push(_);return v},[ve]),rr=p.view.compare?p.view.blind&&p.view.order?p.view.order.map(v=>p.concepts.find(k=>k.id===v)).filter(Boolean):p.concepts:[X],or={replay:Be,slow:p.view.slow};P.filter(v=>!O||v.seconds<=1);const sr=as(X,p.view.theme),Kr=Object.keys(sr).length;return u.jsxs("div",{className:N.app,children:[u.jsxs("header",{className:N.bar,children:[u.jsx("span",{className:N.brand,children:"sc-tune"}),u.jsx("select",{"aria-label":"Subject",value:f,disabled:pn,onChange:v=>We(v.target.value),children:Object.keys(fs).map(v=>u.jsx("option",{children:v},v))}),u.jsxs("span",{className:N.meta,children:[Ce?"choreography":`${ve.length} tokens`," · ",p.concepts.length," concept",p.concepts.length>1?"s":""]}),b&&u.jsxs("span",{className:N.meta,children:["snapshot · recorded ",b.recorded]}),u.jsx("span",{className:N.spacer}),u.jsx("button",{type:"button",onClick:Cn,children:"Play"}),u.jsx("button",{type:"button","aria-pressed":J,onClick:()=>Y(v=>!v),children:J?"Stop loop":"Loop"}),u.jsxs("select",{"aria-label":"Slow motion",value:p.view.slow,onChange:v=>De("slow",+v.target.value),children:[u.jsx("option",{value:1,children:"1×"}),u.jsx("option",{value:2,children:"½×"}),u.jsx("option",{value:4,children:"¼×"}),u.jsx("option",{value:10,children:"⅒×"})]}),u.jsx("button",{type:"button","aria-pressed":p.view.compare,disabled:p.concepts.length<2,onClick:()=>De("compare",!p.view.compare),children:"Compare"}),u.jsx("button",{type:"button","aria-pressed":p.view.blind,disabled:p.concepts.length<2,onClick:Wr,children:p.view.blind?"Reveal":"Blind"}),!pn]}),u.jsx("main",{className:N.stages,children:u.jsxs(qf,{enabled:!1,children:[!p.view.blind&&u.jsxs("section",{className:N.stageWrap,"aria-label":Ce?"Default":"Shipped",children:[u.jsx("h2",{className:N.stageLabel,children:Ce?"Default":"Shipped"}),u.jsx("div",{className:N.stage,style:jn({}),ref:ce,inert:"","data-force":we,children:de.render(Ce?$u(de):X.props,()=>{},()=>{},or)})]}),p.view.blind&&u.jsx("div",{ref:ce,hidden:!0}),rr.map((v,k)=>{const _=p.view.blind?`Concept ${k+1}`:`${v.id}${v.id===p.active?" · editing":""}${p.pick.id===v.id?" · picked":""}`;return u.jsxs("section",{className:`${N.stageWrap} ${v.id===p.active&&!p.view.blind?N.activeStage:""}`,"aria-label":_,children:[u.jsxs("h2",{className:N.stageLabel,children:[p.view.compare&&!p.view.blind?u.jsx("button",{type:"button",className:N.stageSelect,onClick:()=>g(ie=>({...ie,active:v.id})),children:_}):_,Ce&&u.jsxs("span",{className:N.readout,children:[" · last frame ",fi(v.props),"ms"]})]}),u.jsx("div",{className:N.stage,style:jn(as(v,z)),ref:v.id===p.active?qe:void 0,"data-force":we,children:de.render(v.props,A(v.id),()=>us(v.sound.file,v.sound.volume,v.sound.rate),or)})]},v.id)})]})}),u.jsxs("aside",{className:N.panel,children:[u.jsxs("fieldset",{className:N.group,disabled:pn,children:[u.jsx("legend",{children:"Notes for the build"}),u.jsx("textarea",{className:N.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:p.notes,onChange:v=>g(k=>({...k,notes:v.target.value}))})]}),u.jsxs("fieldset",{className:N.group,disabled:pn,children:[u.jsx("legend",{children:"Concepts"}),u.jsxs("div",{className:N.tabs,role:"tablist","aria-label":"Concepts",children:[p.concepts.map(v=>u.jsx("button",{type:"button",role:"tab","aria-selected":v.id===p.active,className:N.tab,onClick:()=>g(k=>({...k,active:v.id})),children:v.id},v.id)),u.jsx("button",{type:"button",className:N.tab,disabled:p.concepts.length>=hi.length,onClick:()=>dn(!0),children:"duplicate"}),u.jsx("button",{type:"button",className:N.tab,disabled:p.concepts.length>=hi.length,onClick:()=>dn(!1),children:"new"}),u.jsxs("button",{type:"button",className:N.tab,disabled:p.concepts.length<2,onClick:()=>nr(X.id),children:["remove ",X.id]})]}),u.jsx("textarea",{className:N.notes,"aria-label":`Notes on concept ${X.id}`,placeholder:`What concept ${X.id} is trying…`,value:X.notes,onChange:v=>m(k=>({...k,notes:v.target.value}))}),p.concepts.length>1&&u.jsxs("div",{className:N.pick,children:[u.jsx("span",{className:N.propLabel,children:u.jsx("code",{children:"pick"})}),p.concepts.map(v=>u.jsxs("label",{className:N.mini,children:[u.jsx("input",{type:"radio",name:"pick",checked:p.pick.id===v.id,onChange:()=>g(k=>({...k,pick:{...k.pick,id:v.id}}))})," ",v.id]},v.id)),u.jsx("textarea",{className:N.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:p.pick.reason,onChange:v=>g(k=>({...k,pick:{...k.pick,reason:v.target.value}}))})]})]}),u.jsxs("fieldset",{className:N.group,disabled:pn,children:[u.jsx("legend",{children:"View"}),u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"v-theme",children:u.jsx("code",{children:"theme"})}),u.jsxs("select",{id:"v-theme",value:p.view.theme,onChange:v=>De("theme",v.target.value),children:[u.jsx("option",{children:"light"}),u.jsx("option",{children:"dark"})]})]}),u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"v-zoom",children:u.jsx("code",{children:"zoom"})}),u.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:p.view.zoom,onChange:v=>De("zoom",+v.target.value)}),u.jsxs("span",{className:N.readout,children:[p.view.zoom,"×"]})]}),u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"v-ground",children:u.jsx("code",{children:"ground"})}),u.jsx("select",{id:"v-ground",value:p.view.ground,onChange:v=>De("ground",v.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(v=>u.jsx("option",{value:v,children:v.replace("--sc-color-","")},v))})]})]}),u.jsxs("fieldset",{className:N.group,disabled:pn,children:[u.jsxs("legend",{children:[Ce?"Motion":"Props"," · concept ",X.id]}),(()=>{const v=de.props.map(k=>u.jsx(Sm,{def:k,value:X.props[k.name],spring:X.springs[`prop:${k.name}`],easingPresets:lt,onChange:_=>A(X.id)(k.name,_),onSpring:(_,ie,oe)=>m(he=>{const Je={...he.springs},Rt={...he.props,[k.name]:_};return ie?(Je[`prop:${k.name}`]=ie,k.durationProp&&(Rt[k.durationProp]=oe)):delete Je[`prop:${k.name}`],{...he,springs:Je,props:Rt}})},k.name));return Ce||v.splice(Math.min(3,v.length),0,u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"p-state",children:u.jsx("code",{children:"state"})}),u.jsxs("select",{id:"p-state",value:Ht&&X.props.disabled?"disabled":we,onChange:k=>Vr(k.target.value),children:[Tm.map(k=>u.jsx("option",{value:k,children:k==="rest"?"default":k},k)),Ht&&u.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),v})()]}),u.jsxs("fieldset",{className:N.group,disabled:pn,children:[u.jsxs("legend",{children:["Sound · ",de.trigger]}),u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"s-vol",children:u.jsx("code",{children:"volume"})}),u.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:X.sound.volume,onChange:v=>ye("volume",+v.target.value)}),u.jsx("span",{className:N.readout,children:X.sound.volume})]}),u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"s-rate",children:u.jsx("code",{children:"pitch"})}),u.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:X.sound.rate,onChange:v=>ye("rate",+v.target.value)}),u.jsxs("span",{className:N.readout,children:[X.sound.rate,"×"]})]}),u.jsxs("div",{className:N.prop,children:[u.jsx("label",{htmlFor:"s-short",children:u.jsx("code",{children:"under 1 s only"})}),u.jsx("input",{id:"s-short",type:"checkbox",checked:O,onChange:v=>$(v.target.checked)})]}),u.jsxs("ul",{className:N.sounds,"aria-label":"Sound candidates",children:[u.jsx("li",{className:N.sound,children:u.jsxs("label",{children:[u.jsx("input",{type:"radio",name:"sound",checked:!X.sound.file,onChange:()=>ye("file",null)})," silent"]})}),(X.sound.file?[{file:X.sound.file,seconds:""}]:[]).map(v=>u.jsxs("li",{className:`${N.sound} ${v.file===de.shippedSound?N.shippedSound:""}`,children:[u.jsxs("label",{children:[u.jsx("input",{type:"radio",name:"sound",checked:X.sound.file===v.file,onChange:()=>{ye("file",v.file),us(v.file,X.sound.volume,X.sound.rate)}}),v.file.replace(/\.(wav|mp3)$/,"")]}),u.jsxs("span",{className:N.readout,children:[v.seconds&&`${v.seconds}s`,v.file===de.shippedSound?" · shipped":""]}),u.jsx("button",{type:"button","aria-label":`Play ${v.file}`,onClick:()=>us(v.file,X.sound.volume,X.sound.rate),children:"play"})]},v.file))]})]}),!Ce&&u.jsxs("p",{className:N.meta,children:[Kr," of ",ve.length," tokens tuned in concept ",X.id,", ",z," mode. Colour and shadow edits apply to ",z," only; size, type and motion apply to both modes."]}),Object.entries(Ut).map(([v,k])=>u.jsxs("fieldset",{className:N.group,disabled:pn,children:[u.jsxs("legend",{children:[v," · ",k.length]}),k.map(_=>{var ie;return u.jsx(Lm,{name:_,kind:cs(T[_]),shipped:T[_],value:re[_]||T[_]||"",override:sr[_],scope:X.overrides[is(_,z)][_]!==void 0?is(_,z):X.overrides.all[_]!==void 0?"all":null,adj:(ie=X.shadowAdj[is(_,z)])==null?void 0:ie[_],spring:X.springs[_],pin:X.pins[_],refs:Nm[cs(T[_])],easingPresets:lt,onSet:oe=>se(_,oe),onAdj:oe=>ke(_,oe),onSpring:(oe,he)=>pe(_,oe,he),onReset:()=>ue(_),restOf:_.endsWith("-hover")&&ve.includes(_.slice(0,-6))?_.slice(0,-6):null,onCopyRest:()=>se(_,re[_.slice(0,-6)]||T[_.slice(0,-6)]),onPin:oe=>ge(_,oe)},`${X.id}${z}${_}`)})]},v)),Pe.length>0&&u.jsxs("fieldset",{className:N.group,children:[u.jsx("legend",{children:"derived · read-only"}),Pe.map(v=>u.jsxs("div",{className:N.values,children:[u.jsx("code",{children:v})," ",W[v]]},v))]})]})]})}function Eu(i){const f=gi(i);return{settleMs:f.settleMs,overshoot:_t(f.overshoot,3),framerMotion:{type:"spring",stiffness:i.stiffness,damping:i.damping,mass:i.mass}}}const mi=document.getElementById("root");mi.dataset.mounted||(mi.dataset.mounted="true",Wf.createRoot(mi).render(u.jsx($m,{})));
