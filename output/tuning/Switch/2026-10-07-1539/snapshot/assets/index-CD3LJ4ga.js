(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const w of h)if(w.type==="childList")for(const b of w.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function a(h){const w={};return h.integrity&&(w.integrity=h.integrity),h.referrerPolicy&&(w.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?w.credentials="include":h.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function u(h){if(h.ep)return;h.ep=!0;const w=a(h);fetch(h.href,w)}})();function If(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ui={exports:{}},Ur={},pi={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function Hf(){if(pu)return ae;pu=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),b=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),F=Symbol.iterator;function O(g){return g===null||typeof g!="object"?null:(g=F&&g[F]||g["@@iterator"],typeof g=="function"?g:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,I={};function Y(g,z,oe){this.props=g,this.context=z,this.refs=I,this.updater=oe||W}Y.prototype.isReactComponent={},Y.prototype.setState=function(g,z){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,z,"setState")},Y.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Fe(){}Fe.prototype=Y.prototype;function Ee(g,z,oe){this.props=g,this.context=z,this.refs=I,this.updater=oe||W}var ne=Ee.prototype=new Fe;ne.constructor=Ee,Z(ne,Y.prototype),ne.isPureReactComponent=!0;var G=Array.isArray,ie=Object.prototype.hasOwnProperty,$={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function be(g,z,oe){var le,pe={},fe=null,ke=null;if(z!=null)for(le in z.ref!==void 0&&(ke=z.ref),z.key!==void 0&&(fe=""+z.key),z)ie.call(z,le)&&!X.hasOwnProperty(le)&&(pe[le]=z[le]);var ge=arguments.length-2;if(ge===1)pe.children=oe;else if(1<ge){for(var ye=Array(ge),Oe=0;Oe<ge;Oe++)ye[Oe]=arguments[Oe+2];pe.children=ye}if(g&&g.defaultProps)for(le in ge=g.defaultProps,ge)pe[le]===void 0&&(pe[le]=ge[le]);return{$$typeof:l,type:g,key:fe,ref:ke,props:pe,_owner:$.current}}function We(g,z){return{$$typeof:l,type:g.type,key:z,ref:g.ref,props:g.props,_owner:g._owner}}function ce(g){return typeof g=="object"&&g!==null&&g.$$typeof===l}function Se(g){var z={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(oe){return z[oe]})}var ve=/\/+/g;function Me(g,z){return typeof g=="object"&&g!==null&&g.key!=null?Se(""+g.key):z.toString(36)}function te(g,z,oe,le,pe){var fe=typeof g;(fe==="undefined"||fe==="boolean")&&(g=null);var ke=!1;if(g===null)ke=!0;else switch(fe){case"string":case"number":ke=!0;break;case"object":switch(g.$$typeof){case l:case c:ke=!0}}if(ke)return ke=g,pe=pe(ke),g=le===""?"."+Me(ke,0):le,G(pe)?(oe="",g!=null&&(oe=g.replace(ve,"$&/")+"/"),te(pe,z,oe,"",function(Oe){return Oe})):pe!=null&&(ce(pe)&&(pe=We(pe,oe+(!pe.key||ke&&ke.key===pe.key?"":(""+pe.key).replace(ve,"$&/")+"/")+g)),z.push(pe)),1;if(ke=0,le=le===""?".":le+":",G(g))for(var ge=0;ge<g.length;ge++){fe=g[ge];var ye=le+Me(fe,ge);ke+=te(fe,z,oe,ye,pe)}else if(ye=O(g),typeof ye=="function")for(g=ye.call(g),ge=0;!(fe=g.next()).done;)fe=fe.value,ye=le+Me(fe,ge++),ke+=te(fe,z,oe,ye,pe);else if(fe==="object")throw z=String(g),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ke}function lt(g,z,oe){if(g==null)return g;var le=[],pe=0;return te(g,le,"","",function(fe){return z.call(oe,fe,pe++)}),le}function Qe(g){if(g._status===-1){var z=g._result;z=z(),z.then(function(oe){(g._status===0||g._status===-1)&&(g._status=1,g._result=oe)},function(oe){(g._status===0||g._status===-1)&&(g._status=2,g._result=oe)}),g._status===-1&&(g._status=0,g._result=z)}if(g._status===1)return g._result.default;throw g._result}var we={current:null},A={transition:null},q={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:A,ReactCurrentOwner:$};function H(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:lt,forEach:function(g,z,oe){lt(g,function(){z.apply(this,arguments)},oe)},count:function(g){var z=0;return lt(g,function(){z++}),z},toArray:function(g){return lt(g,function(z){return z})||[]},only:function(g){if(!ce(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ae.Component=Y,ae.Fragment=a,ae.Profiler=h,ae.PureComponent=Ee,ae.StrictMode=u,ae.Suspense=N,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ae.act=H,ae.cloneElement=function(g,z,oe){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var le=Z({},g.props),pe=g.key,fe=g.ref,ke=g._owner;if(z!=null){if(z.ref!==void 0&&(fe=z.ref,ke=$.current),z.key!==void 0&&(pe=""+z.key),g.type&&g.type.defaultProps)var ge=g.type.defaultProps;for(ye in z)ie.call(z,ye)&&!X.hasOwnProperty(ye)&&(le[ye]=z[ye]===void 0&&ge!==void 0?ge[ye]:z[ye])}var ye=arguments.length-2;if(ye===1)le.children=oe;else if(1<ye){ge=Array(ye);for(var Oe=0;Oe<ye;Oe++)ge[Oe]=arguments[Oe+2];le.children=ge}return{$$typeof:l,type:g.type,key:pe,ref:fe,props:le,_owner:ke}},ae.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ae.createElement=be,ae.createFactory=function(g){var z=be.bind(null,g);return z.type=g,z},ae.createRef=function(){return{current:null}},ae.forwardRef=function(g){return{$$typeof:E,render:g}},ae.isValidElement=ce,ae.lazy=function(g){return{$$typeof:T,_payload:{_status:-1,_result:g},_init:Qe}},ae.memo=function(g,z){return{$$typeof:M,type:g,compare:z===void 0?null:z}},ae.startTransition=function(g){var z=A.transition;A.transition={};try{g()}finally{A.transition=z}},ae.unstable_act=H,ae.useCallback=function(g,z){return we.current.useCallback(g,z)},ae.useContext=function(g){return we.current.useContext(g)},ae.useDebugValue=function(){},ae.useDeferredValue=function(g){return we.current.useDeferredValue(g)},ae.useEffect=function(g,z){return we.current.useEffect(g,z)},ae.useId=function(){return we.current.useId()},ae.useImperativeHandle=function(g,z,oe){return we.current.useImperativeHandle(g,z,oe)},ae.useInsertionEffect=function(g,z){return we.current.useInsertionEffect(g,z)},ae.useLayoutEffect=function(g,z){return we.current.useLayoutEffect(g,z)},ae.useMemo=function(g,z){return we.current.useMemo(g,z)},ae.useReducer=function(g,z,oe){return we.current.useReducer(g,z,oe)},ae.useRef=function(g){return we.current.useRef(g)},ae.useState=function(g){return we.current.useState(g)},ae.useSyncExternalStore=function(g,z,oe){return we.current.useSyncExternalStore(g,z,oe)},ae.useTransition=function(){return we.current.useTransition()},ae.version="18.3.1",ae}var fu;function Si(){return fu||(fu=1,pi.exports=Hf()),pi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du;function Bf(){if(du)return Ur;du=1;var l=Si(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function b(E,N,M){var T,F={},O=null,W=null;M!==void 0&&(O=""+M),N.key!==void 0&&(O=""+N.key),N.ref!==void 0&&(W=N.ref);for(T in N)u.call(N,T)&&!w.hasOwnProperty(T)&&(F[T]=N[T]);if(E&&E.defaultProps)for(T in N=E.defaultProps,N)F[T]===void 0&&(F[T]=N[T]);return{$$typeof:c,type:E,key:O,ref:W,props:F,_owner:h.current}}return Ur.Fragment=a,Ur.jsx=b,Ur.jsxs=b,Ur}var hu;function Uf(){return hu||(hu=1,ui.exports=Bf()),ui.exports}var f=Uf(),L=Si(),ss={},fi={exports:{}},st={},di={exports:{}},hi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu;function Vf(){return mu||(mu=1,(function(l){function c(A,q){var H=A.length;A.push(q);e:for(;0<H;){var g=H-1>>>1,z=A[g];if(0<h(z,q))A[g]=q,A[H]=z,H=g;else break e}}function a(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var q=A[0],H=A.pop();if(H!==q){A[0]=H;e:for(var g=0,z=A.length,oe=z>>>1;g<oe;){var le=2*(g+1)-1,pe=A[le],fe=le+1,ke=A[fe];if(0>h(pe,H))fe<z&&0>h(ke,pe)?(A[g]=ke,A[fe]=H,g=fe):(A[g]=pe,A[le]=H,g=le);else if(fe<z&&0>h(ke,H))A[g]=ke,A[fe]=H,g=fe;else break e}}return q}function h(A,q){var H=A.sortIndex-q.sortIndex;return H!==0?H:A.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var b=Date,E=b.now();l.unstable_now=function(){return b.now()-E}}var N=[],M=[],T=1,F=null,O=3,W=!1,Z=!1,I=!1,Y=typeof setTimeout=="function"?setTimeout:null,Fe=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(A){for(var q=a(M);q!==null;){if(q.callback===null)u(M);else if(q.startTime<=A)u(M),q.sortIndex=q.expirationTime,c(N,q);else break;q=a(M)}}function G(A){if(I=!1,ne(A),!Z)if(a(N)!==null)Z=!0,Qe(ie);else{var q=a(M);q!==null&&we(G,q.startTime-A)}}function ie(A,q){Z=!1,I&&(I=!1,Fe(be),be=-1),W=!0;var H=O;try{for(ne(q),F=a(N);F!==null&&(!(F.expirationTime>q)||A&&!Se());){var g=F.callback;if(typeof g=="function"){F.callback=null,O=F.priorityLevel;var z=g(F.expirationTime<=q);q=l.unstable_now(),typeof z=="function"?F.callback=z:F===a(N)&&u(N),ne(q)}else u(N);F=a(N)}if(F!==null)var oe=!0;else{var le=a(M);le!==null&&we(G,le.startTime-q),oe=!1}return oe}finally{F=null,O=H,W=!1}}var $=!1,X=null,be=-1,We=5,ce=-1;function Se(){return!(l.unstable_now()-ce<We)}function ve(){if(X!==null){var A=l.unstable_now();ce=A;var q=!0;try{q=X(!0,A)}finally{q?Me():($=!1,X=null)}}else $=!1}var Me;if(typeof Ee=="function")Me=function(){Ee(ve)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,lt=te.port2;te.port1.onmessage=ve,Me=function(){lt.postMessage(null)}}else Me=function(){Y(ve,0)};function Qe(A){X=A,$||($=!0,Me())}function we(A,q){be=Y(function(){A(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(A){A.callback=null},l.unstable_continueExecution=function(){Z||W||(Z=!0,Qe(ie))},l.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<A?Math.floor(1e3/A):5},l.unstable_getCurrentPriorityLevel=function(){return O},l.unstable_getFirstCallbackNode=function(){return a(N)},l.unstable_next=function(A){switch(O){case 1:case 2:case 3:var q=3;break;default:q=O}var H=O;O=q;try{return A()}finally{O=H}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=O;O=A;try{return q()}finally{O=H}},l.unstable_scheduleCallback=function(A,q,H){var g=l.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?g+H:g):H=g,A){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,A={id:T++,callback:q,priorityLevel:A,startTime:H,expirationTime:z,sortIndex:-1},H>g?(A.sortIndex=H,c(M,A),a(N)===null&&A===a(M)&&(I?(Fe(be),be=-1):I=!0,we(G,H-g))):(A.sortIndex=z,c(N,A),Z||W||(Z=!0,Qe(ie))),A},l.unstable_shouldYield=Se,l.unstable_wrapCallback=function(A){var q=O;return function(){var H=O;O=q;try{return A.apply(this,arguments)}finally{O=H}}}})(hi)),hi}var vu;function Wf(){return vu||(vu=1,di.exports=Vf()),di.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function Qf(){if(gu)return st;gu=1;var l=Si(),c=Wf();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,h={};function w(e,t){b(e,t),b(e+"Capture",t)}function b(e,t){for(h[e]=t,e=0;e<t.length;e++)u.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},F={};function O(e){return N.call(F,e)?!0:N.call(T,e)?!1:M.test(e)?F[e]=!0:(T[e]=!0,!1)}function W(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z(e,t,n,r){if(t===null||typeof t>"u"||W(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fe=/[\-:]([a-z])/g;function Ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fe,Ee);Y[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fe,Ee);Y[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fe,Ee);Y[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var o=Y.hasOwnProperty(t)?Y[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Z(t,n,o,r)&&(n=null),r||o===null?O(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var G=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),$=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),Se=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),A=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,g;function z(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var oe=!1;function le(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var o=k.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,p=s.length-1;1<=i&&0<=p&&o[i]!==s[p];)p--;for(;1<=i&&0<=p;i--,p--)if(o[i]!==s[p]){if(i!==1||p!==1)do if(i--,p--,0>p||o[i]!==s[p]){var d=`
`+o[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=p);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function pe(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case $:return"Portal";case We:return"Profiler";case be:return"StrictMode";case Me:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Se:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lt:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){e._valueTracker||(e._valueTracker=Oe(e))}function Wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rr(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qr(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ge(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cn(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function jn(e,t){Cn(e,t);var n=ge(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nn(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nn(e,t,n){(t!=="number"||dn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bt=Array.isArray;function Ut(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ge(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function or(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Bt(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ge(n)}}function lr(e,t){var n=ge(t.value),r=ge(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function v(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?v(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _,ue=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_=_||document.createElement("div"),_.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function se(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(he).forEach(function(e){Je.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});function Mt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function Gr(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mt(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Yr=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bs(e,t){if(t){if(Yr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ls(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,Pn=null,Mn=null;function Ci(e){if(e=Cr(e)){if(typeof zs!="function")throw Error(a(280));var t=e.stateNode;t&&(t=wo(t),zs(e.stateNode,e.type,t))}}function ji(e){Pn?Mn?Mn.push(e):Mn=[e]:Pn=e}function Ni(){if(Pn){var e=Pn,t=Mn;if(Mn=Pn=null,Ci(e),t)for(e=0;e<t.length;e++)Ci(t[e])}}function Pi(e,t){return e(t)}function Mi(){}var Es=!1;function Ri(e,t,n){if(Es)return e(t,n);Es=!0;try{return Pi(e,t,n)}finally{Es=!1,(Pn!==null||Mn!==null)&&(Mi(),Ni())}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Cs=!1;if(E)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Cs=!1}function Wu(e,t,n,r,o,s,i,p,d){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(P){this.onError(P)}}var cr=!1,Xr=null,qr=!1,js=null,Qu={onError:function(e){cr=!0,Xr=e}};function Ku(e,t,n,r,o,s,i,p,d){cr=!1,Xr=null,Wu.apply(Qu,arguments)}function Zu(e,t,n,r,o,s,i,p,d){if(Ku.apply(this,arguments),cr){if(cr){var k=Xr;cr=!1,Xr=null}else throw Error(a(198));qr||(qr=!0,js=k)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ti(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fi(e){if(hn(e)!==e)throw Error(a(188))}function Gu(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return Fi(o),e;if(s===r)return Fi(o),t;s=s.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,p=o.child;p;){if(p===n){i=!0,n=o,r=s;break}if(p===r){i=!0,r=o,n=s;break}p=p.sibling}if(!i){for(p=s.child;p;){if(p===n){i=!0,n=s,r=o;break}if(p===r){i=!0,r=s,n=o;break}p=p.sibling}if(!i)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Di(e){return e=Gu(e),e!==null?Oi(e):null}function Oi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oi(e);if(t!==null)return t;e=e.sibling}return null}var $i=c.unstable_scheduleCallback,Ai=c.unstable_cancelCallback,Yu=c.unstable_shouldYield,Xu=c.unstable_requestPaint,Re=c.unstable_now,qu=c.unstable_getCurrentPriorityLevel,Ns=c.unstable_ImmediatePriority,Ii=c.unstable_UserBlockingPriority,Jr=c.unstable_NormalPriority,Ju=c.unstable_LowPriority,Hi=c.unstable_IdlePriority,eo=null,zt=null;function ep(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:rp,tp=Math.log,np=Math.LN2;function rp(e){return e>>>=0,e===0?32:31-(tp(e)/np|0)|0}var to=64,no=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var p=i&~o;p!==0?r=ur(p):(s&=i,s!==0&&(r=ur(s)))}else i=n&~o,i!==0?r=ur(i):s!==0&&(r=ur(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),o=1<<n,r|=e[n],t&=~o;return r}function op(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-yt(s),p=1<<i,d=o[i];d===-1?((p&n)===0||(p&r)!==0)&&(o[i]=op(p,t)):d<=t&&(e.expiredLanes|=p),s&=~p}}function Ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bi(){var e=to;return to<<=1,(to&4194240)===0&&(to=64),e}function Ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function lp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Rs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xe=0;function Ui(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vi,Ts,Wi,Qi,Ki,Fs=!1,oo=[],Vt=null,Wt=null,Qt=null,fr=new Map,dr=new Map,Kt=[],ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zi(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function hr(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Cr(t),t!==null&&Ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ap(e,t,n,r,o){switch(t){case"focusin":return Vt=hr(Vt,e,t,n,r,o),!0;case"dragenter":return Wt=hr(Wt,e,t,n,r,o),!0;case"mouseover":return Qt=hr(Qt,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return fr.set(s,hr(fr.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,dr.set(s,hr(dr.get(s)||null,e,t,n,r,o)),!0}return!1}function Gi(e){var t=mn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ti(n),t!==null){e.blockedOn=t,Ki(e.priority,function(){Wi(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ss=r,n.target.dispatchEvent(r),Ss=null}else return t=Cr(n),t!==null&&Ts(t),e.blockedOn=n,!1;t.shift()}return!0}function Yi(e,t,n){so(e)&&n.delete(t)}function cp(){Fs=!1,Vt!==null&&so(Vt)&&(Vt=null),Wt!==null&&so(Wt)&&(Wt=null),Qt!==null&&so(Qt)&&(Qt=null),fr.forEach(Yi),dr.forEach(Yi)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,cp)))}function vr(e){function t(o){return mr(o,e)}if(0<oo.length){mr(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&mr(Vt,e),Wt!==null&&mr(Wt,e),Qt!==null&&mr(Qt,e),fr.forEach(t),dr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Gi(n),n.blockedOn===null&&Kt.shift()}var Rn=G.ReactCurrentBatchConfig,lo=!0;function up(e,t,n,r){var o=xe,s=Rn.transition;Rn.transition=null;try{xe=1,Ds(e,t,n,r)}finally{xe=o,Rn.transition=s}}function pp(e,t,n,r){var o=xe,s=Rn.transition;Rn.transition=null;try{xe=4,Ds(e,t,n,r)}finally{xe=o,Rn.transition=s}}function Ds(e,t,n,r){if(lo){var o=Os(e,t,n,r);if(o===null)el(e,t,r,io,n),Zi(e,r);else if(ap(o,e,t,n,r))r.stopPropagation();else if(Zi(e,r),t&4&&-1<ip.indexOf(e)){for(;o!==null;){var s=Cr(o);if(s!==null&&Vi(s),s=Os(e,t,n,r),s===null&&el(e,t,r,io,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var io=null;function Os(e,t,n,r){if(io=null,e=_s(r),e=mn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ti(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function Xi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qu()){case Ns:return 1;case Ii:return 4;case Jr:case Ju:return 16;case Hi:return 536870912;default:return 16}default:return 16}}var Zt=null,$s=null,ao=null;function qi(){if(ao)return ao;var e,t=$s,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return ao=o.slice(e,1<r?1-r:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Ji(){return!1}function it(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:Ji,this.isPropagationStopped=Ji,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=it(Tn),gr=H({},Tn,{view:0,detail:0}),fp=it(gr),Is,Hs,yr,po=H({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(Is=e.screenX-yr.screenX,Hs=e.screenY-yr.screenY):Hs=Is=0,yr=e),Is)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),ea=it(po),dp=H({},po,{dataTransfer:0}),hp=it(dp),mp=H({},gr,{relatedTarget:0}),Bs=it(mp),vp=H({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=it(vp),yp=H({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xp=it(yp),wp=H({},Tn,{data:0}),ta=it(wp),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function Us(){return Sp}var _p=H({},gr,{key:function(e){if(e.key){var t=kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=it(_p),Ep=H({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=it(Ep),Cp=H({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),jp=it(Cp),Np=H({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=it(Np),Mp=H({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rp=it(Mp),Tp=[9,13,27,32],Vs=E&&"CompositionEvent"in window,xr=null;E&&"documentMode"in document&&(xr=document.documentMode);var Fp=E&&"TextEvent"in window&&!xr,ra=E&&(!Vs||xr&&8<xr&&11>=xr),oa=" ",sa=!1;function la(e,t){switch(e){case"keyup":return Tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Dp(e,t){switch(e){case"compositionend":return ia(t);case"keypress":return t.which!==32?null:(sa=!0,oa);case"textInput":return e=t.data,e===oa&&sa?null:e;default:return null}}function Op(e,t){if(Fn)return e==="compositionend"||!Vs&&la(e,t)?(e=qi(),ao=$s=Zt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ra&&t.locale!=="ko"?null:t.data;default:return null}}var $p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$p[e.type]:t==="textarea"}function ca(e,t,n,r){ji(r),t=go(t,"onChange"),0<t.length&&(n=new As("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,kr=null;function Ap(e){Ea(e,0)}function fo(e){var t=In(e);if(Wr(t))return e}function Ip(e,t){if(e==="change")return t}var ua=!1;if(E){var Ws;if(E){var Qs="oninput"in document;if(!Qs){var pa=document.createElement("div");pa.setAttribute("oninput","return;"),Qs=typeof pa.oninput=="function"}Ws=Qs}else Ws=!1;ua=Ws&&(!document.documentMode||9<document.documentMode)}function fa(){wr&&(wr.detachEvent("onpropertychange",da),kr=wr=null)}function da(e){if(e.propertyName==="value"&&fo(kr)){var t=[];ca(t,kr,e,_s(e)),Ri(Ap,t)}}function Hp(e,t,n){e==="focusin"?(fa(),wr=t,kr=n,wr.attachEvent("onpropertychange",da)):e==="focusout"&&fa()}function Bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(kr)}function Up(e,t){if(e==="click")return fo(t)}function Vp(e,t){if(e==="input"||e==="change")return fo(t)}function Wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Wp;function br(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!N.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ma(e,t){var n=ha(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ha(n)}}function va(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?va(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ga(){for(var e=window,t=dn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=dn(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qp(e){var t=ga(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&va(n.ownerDocument.documentElement,n)){if(r!==null&&Ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=ma(n,s);var i=ma(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kp=E&&"documentMode"in document&&11>=document.documentMode,Dn=null,Zs=null,Lr=null,Gs=!1;function ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gs||Dn==null||Dn!==dn(r)||(r=Dn,"selectionStart"in r&&Ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&br(Lr,r)||(Lr=r,r=go(Zs,"onSelect"),0<r.length&&(t=new As("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Ys={},xa={};E&&(xa=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function mo(e){if(Ys[e])return Ys[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xa)return Ys[e]=t[n];return e}var wa=mo("animationend"),ka=mo("animationiteration"),ba=mo("animationstart"),La=mo("transitionend"),Sa=new Map,_a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Sa.set(e,t),w(t,[e])}for(var Xs=0;Xs<_a.length;Xs++){var qs=_a[Xs],Zp=qs.toLowerCase(),Gp=qs[0].toUpperCase()+qs.slice(1);Gt(Zp,"on"+Gp)}Gt(wa,"onAnimationEnd"),Gt(ka,"onAnimationIteration"),Gt(ba,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(La,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zu(r,t,void 0,e),e.currentTarget=null}function Ea(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var p=r[i],d=p.instance,k=p.currentTarget;if(p=p.listener,d!==s&&o.isPropagationStopped())break e;za(o,p,k),s=d}else for(i=0;i<r.length;i++){if(p=r[i],d=p.instance,k=p.currentTarget,p=p.listener,d!==s&&o.isPropagationStopped())break e;za(o,p,k),s=d}}}if(qr)throw e=js,qr=!1,js=null,e}function _e(e,t){var n=t[ll];n===void 0&&(n=t[ll]=new Set);var r=e+"__bubble";n.has(r)||(Ca(t,e,2,!1),n.add(r))}function Js(e,t,n){var r=0;t&&(r|=4),Ca(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[vo]){e[vo]=!0,u.forEach(function(n){n!=="selectionchange"&&(Yp.has(n)||Js(n,!1,e),Js(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,Js("selectionchange",!1,t))}}function Ca(e,t,n,r){switch(Xi(t)){case 1:var o=up;break;case 4:o=pp;break;default:o=Ds}n=o.bind(null,t,n,e),o=void 0,!Cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function el(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var p=r.stateNode.containerInfo;if(p===o||p.nodeType===8&&p.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;i=i.return}for(;p!==null;){if(i=mn(p),i===null)return;if(d=i.tag,d===5||d===6){r=s=i;continue e}p=p.parentNode}}r=r.return}Ri(function(){var k=s,P=_s(n),R=[];e:{var C=Sa.get(e);if(C!==void 0){var B=As,V=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":B=zp;break;case"focusin":V="focus",B=Bs;break;case"focusout":V="blur",B=Bs;break;case"beforeblur":case"afterblur":B=Bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=jp;break;case wa:case ka:case ba:B=gp;break;case La:B=Pp;break;case"scroll":B=fp;break;case"wheel":B=Rp;break;case"copy":case"cut":case"paste":B=xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=na}var Q=(t&4)!==0,Te=!Q&&e==="scroll",y=Q?C!==null?C+"Capture":null:C;Q=[];for(var m=k,x;m!==null;){x=m;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,y!==null&&(D=ir(m,y),D!=null&&Q.push(zr(m,D,x)))),Te)break;m=m.return}0<Q.length&&(C=new B(C,V,null,n,P),R.push({event:C,listeners:Q}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",C&&n!==Ss&&(V=n.relatedTarget||n.fromElement)&&(mn(V)||V[Rt]))break e;if((B||C)&&(C=P.window===P?P:(C=P.ownerDocument)?C.defaultView||C.parentWindow:window,B?(V=n.relatedTarget||n.toElement,B=k,V=V?mn(V):null,V!==null&&(Te=hn(V),V!==Te||V.tag!==5&&V.tag!==6)&&(V=null)):(B=null,V=k),B!==V)){if(Q=ea,D="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(Q=na,D="onPointerLeave",y="onPointerEnter",m="pointer"),Te=B==null?C:In(B),x=V==null?C:In(V),C=new Q(D,m+"leave",B,n,P),C.target=Te,C.relatedTarget=x,D=null,mn(P)===k&&(Q=new Q(y,m+"enter",V,n,P),Q.target=x,Q.relatedTarget=Te,D=Q),Te=D,B&&V)t:{for(Q=B,y=V,m=0,x=Q;x;x=$n(x))m++;for(x=0,D=y;D;D=$n(D))x++;for(;0<m-x;)Q=$n(Q),m--;for(;0<x-m;)y=$n(y),x--;for(;m--;){if(Q===y||y!==null&&Q===y.alternate)break t;Q=$n(Q),y=$n(y)}Q=null}else Q=null;B!==null&&ja(R,C,B,Q,!1),V!==null&&Te!==null&&ja(R,Te,V,Q,!0)}}e:{if(C=k?In(k):window,B=C.nodeName&&C.nodeName.toLowerCase(),B==="select"||B==="input"&&C.type==="file")var K=Ip;else if(aa(C))if(ua)K=Vp;else{K=Bp;var J=Hp}else(B=C.nodeName)&&B.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(K=Up);if(K&&(K=K(e,k))){ca(R,K,n,P);break e}J&&J(e,C,k),e==="focusout"&&(J=C._wrapperState)&&J.controlled&&C.type==="number"&&Nn(C,"number",C.value)}switch(J=k?In(k):window,e){case"focusin":(aa(J)||J.contentEditable==="true")&&(Dn=J,Zs=k,Lr=null);break;case"focusout":Lr=Zs=Dn=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,ya(R,n,P);break;case"selectionchange":if(Kp)break;case"keydown":case"keyup":ya(R,n,P)}var ee;if(Vs)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Fn?la(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(ra&&n.locale!=="ko"&&(Fn||re!=="onCompositionStart"?re==="onCompositionEnd"&&Fn&&(ee=qi()):(Zt=P,$s="value"in Zt?Zt.value:Zt.textContent,Fn=!0)),J=go(k,re),0<J.length&&(re=new ta(re,e,null,n,P),R.push({event:re,listeners:J}),ee?re.data=ee:(ee=ia(n),ee!==null&&(re.data=ee)))),(ee=Fp?Dp(e,n):Op(e,n))&&(k=go(k,"onBeforeInput"),0<k.length&&(P=new ta("onBeforeInput","beforeinput",null,n,P),R.push({event:P,listeners:k}),P.data=ee))}Ea(R,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=ir(e,n),s!=null&&r.unshift(zr(e,s,o)),s=ir(e,t),s!=null&&r.push(zr(e,s,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var p=n,d=p.alternate,k=p.stateNode;if(d!==null&&d===r)break;p.tag===5&&k!==null&&(p=k,o?(d=ir(n,s),d!=null&&i.unshift(zr(n,d,p))):o||(d=ir(n,s),d!=null&&i.push(zr(n,d,p)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Xp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function Na(e){return(typeof e=="string"?e:""+e).replace(Xp,`
`).replace(qp,"")}function yo(e,t,n){if(t=Na(t),Na(e)!==t&&n)throw Error(a(425))}function xo(){}var tl=null,nl=null;function rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(tf)}:ol;function tf(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Et="__reactFiber$"+An,Er="__reactProps$"+An,Rt="__reactContainer$"+An,ll="__reactEvents$"+An,nf="__reactListeners$"+An,rf="__reactHandles$"+An;function mn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Et])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Et]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function wo(e){return e[Er]||null}var il=[],Hn=-1;function Xt(e){return{current:e}}function ze(e){0>Hn||(e.current=il[Hn],il[Hn]=null,Hn--)}function Le(e,t){Hn++,il[Hn]=e.current,e.current=t}var qt={},Ke=Xt(qt),et=Xt(!1),vn=qt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function ko(){ze(et),ze(Ke)}function Ra(e,t,n){if(Ke.current!==qt)throw Error(a(168));Le(Ke,t),Le(et,n)}function Ta(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(a(108,ke(e)||"Unknown",o));return H({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,vn=Ke.current,Le(Ke,e),Le(et,et.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ta(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,ze(et),ze(Ke),Le(Ke,e)):ze(et),Le(et,n)}var Tt=null,Lo=!1,al=!1;function Da(e){Tt===null?Tt=[e]:Tt.push(e)}function of(e){Lo=!0,Da(e)}function Jt(){if(!al&&Tt!==null){al=!0;var e=0,t=xe;try{var n=Tt;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Lo=!1}catch(o){throw Tt!==null&&(Tt=Tt.slice(e+1)),$i(Ns,Jt),o}finally{xe=t,al=!1}}return null}var Un=[],Vn=0,So=null,_o=0,pt=[],ft=0,gn=null,Ft=1,Dt="";function yn(e,t){Un[Vn++]=_o,Un[Vn++]=So,So=e,_o=t}function Oa(e,t,n){pt[ft++]=Ft,pt[ft++]=Dt,pt[ft++]=gn,gn=e;var r=Ft;e=Dt;var o=32-yt(r)-1;r&=~(1<<o),n+=1;var s=32-yt(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ft=1<<32-yt(t)+o|n<<o|r,Dt=s+e}else Ft=1<<s|n<<o|r,Dt=e}function cl(e){e.return!==null&&(yn(e,1),Oa(e,1,0))}function ul(e){for(;e===So;)So=Un[--Vn],Un[Vn]=null,_o=Un[--Vn],Un[Vn]=null;for(;e===gn;)gn=pt[--ft],pt[ft]=null,Dt=pt[--ft],pt[ft]=null,Ft=pt[--ft],pt[ft]=null}var at=null,ct=null,Ce=!1,wt=null;function $a(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ct=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:Ft,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ct=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(Ce){var t=ct;if(t){var n=t;if(!Aa(e,t)){if(pl(e))throw Error(a(418));t=Yt(n.nextSibling);var r=at;t&&Aa(e,t)?$a(r,n):(e.flags=e.flags&-4097|2,Ce=!1,at=e)}}else{if(pl(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ce=!1,at=e}}}function Ia(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function zo(e){if(e!==at)return!1;if(!Ce)return Ia(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rl(e.type,e.memoizedProps)),t&&(t=ct)){if(pl(e))throw Ha(),Error(a(418));for(;t;)$a(e,t),t=Yt(t.nextSibling)}if(Ia(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=at?Yt(e.stateNode.nextSibling):null;return!0}function Ha(){for(var e=ct;e;)e=Yt(e.nextSibling)}function Wn(){ct=at=null,Ce=!1}function dl(e){wt===null?wt=[e]:wt.push(e)}var sf=G.ReactCurrentBatchConfig;function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var p=o.refs;i===null?delete p[s]:p[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ba(e){var t=e._init;return t(e._payload)}function Ua(e){function t(y,m){if(e){var x=y.deletions;x===null?(y.deletions=[m],y.flags|=16):x.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function o(y,m){return y=an(y,m),y.index=0,y.sibling=null,y}function s(y,m,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<m?(y.flags|=2,m):x):(y.flags|=2,m)):(y.flags|=1048576,m)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,m,x,D){return m===null||m.tag!==6?(m=oi(x,y.mode,D),m.return=y,m):(m=o(m,x),m.return=y,m)}function d(y,m,x,D){var K=x.type;return K===X?P(y,m,x.props.children,D,x.key):m!==null&&(m.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Qe&&Ba(K)===m.type)?(D=o(m,x.props),D.ref=jr(y,m,x),D.return=y,D):(D=Xo(x.type,x.key,x.props,null,y.mode,D),D.ref=jr(y,m,x),D.return=y,D)}function k(y,m,x,D){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=si(x,y.mode,D),m.return=y,m):(m=o(m,x.children||[]),m.return=y,m)}function P(y,m,x,D,K){return m===null||m.tag!==7?(m=zn(x,y.mode,D,K),m.return=y,m):(m=o(m,x),m.return=y,m)}function R(y,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=oi(""+m,y.mode,x),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ie:return x=Xo(m.type,m.key,m.props,null,y.mode,x),x.ref=jr(y,null,m),x.return=y,x;case $:return m=si(m,y.mode,x),m.return=y,m;case Qe:var D=m._init;return R(y,D(m._payload),x)}if(Bt(m)||q(m))return m=zn(m,y.mode,x,null),m.return=y,m;Eo(y,m)}return null}function C(y,m,x,D){var K=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return K!==null?null:p(y,m,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ie:return x.key===K?d(y,m,x,D):null;case $:return x.key===K?k(y,m,x,D):null;case Qe:return K=x._init,C(y,m,K(x._payload),D)}if(Bt(x)||q(x))return K!==null?null:P(y,m,x,D,null);Eo(y,x)}return null}function B(y,m,x,D,K){if(typeof D=="string"&&D!==""||typeof D=="number")return y=y.get(x)||null,p(m,y,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ie:return y=y.get(D.key===null?x:D.key)||null,d(m,y,D,K);case $:return y=y.get(D.key===null?x:D.key)||null,k(m,y,D,K);case Qe:var J=D._init;return B(y,m,x,J(D._payload),K)}if(Bt(D)||q(D))return y=y.get(x)||null,P(m,y,D,K,null);Eo(m,D)}return null}function V(y,m,x,D){for(var K=null,J=null,ee=m,re=m=0,Be=null;ee!==null&&re<x.length;re++){ee.index>re?(Be=ee,ee=null):Be=ee.sibling;var me=C(y,ee,x[re],D);if(me===null){ee===null&&(ee=Be);break}e&&ee&&me.alternate===null&&t(y,ee),m=s(me,m,re),J===null?K=me:J.sibling=me,J=me,ee=Be}if(re===x.length)return n(y,ee),Ce&&yn(y,re),K;if(ee===null){for(;re<x.length;re++)ee=R(y,x[re],D),ee!==null&&(m=s(ee,m,re),J===null?K=ee:J.sibling=ee,J=ee);return Ce&&yn(y,re),K}for(ee=r(y,ee);re<x.length;re++)Be=B(ee,y,re,x[re],D),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?re:Be.key),m=s(Be,m,re),J===null?K=Be:J.sibling=Be,J=Be);return e&&ee.forEach(function(cn){return t(y,cn)}),Ce&&yn(y,re),K}function Q(y,m,x,D){var K=q(x);if(typeof K!="function")throw Error(a(150));if(x=K.call(x),x==null)throw Error(a(151));for(var J=K=null,ee=m,re=m=0,Be=null,me=x.next();ee!==null&&!me.done;re++,me=x.next()){ee.index>re?(Be=ee,ee=null):Be=ee.sibling;var cn=C(y,ee,me.value,D);if(cn===null){ee===null&&(ee=Be);break}e&&ee&&cn.alternate===null&&t(y,ee),m=s(cn,m,re),J===null?K=cn:J.sibling=cn,J=cn,ee=Be}if(me.done)return n(y,ee),Ce&&yn(y,re),K;if(ee===null){for(;!me.done;re++,me=x.next())me=R(y,me.value,D),me!==null&&(m=s(me,m,re),J===null?K=me:J.sibling=me,J=me);return Ce&&yn(y,re),K}for(ee=r(y,ee);!me.done;re++,me=x.next())me=B(ee,y,re,me.value,D),me!==null&&(e&&me.alternate!==null&&ee.delete(me.key===null?re:me.key),m=s(me,m,re),J===null?K=me:J.sibling=me,J=me);return e&&ee.forEach(function(Af){return t(y,Af)}),Ce&&yn(y,re),K}function Te(y,m,x,D){if(typeof x=="object"&&x!==null&&x.type===X&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ie:e:{for(var K=x.key,J=m;J!==null;){if(J.key===K){if(K=x.type,K===X){if(J.tag===7){n(y,J.sibling),m=o(J,x.props.children),m.return=y,y=m;break e}}else if(J.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Qe&&Ba(K)===J.type){n(y,J.sibling),m=o(J,x.props),m.ref=jr(y,J,x),m.return=y,y=m;break e}n(y,J);break}else t(y,J);J=J.sibling}x.type===X?(m=zn(x.props.children,y.mode,D,x.key),m.return=y,y=m):(D=Xo(x.type,x.key,x.props,null,y.mode,D),D.ref=jr(y,m,x),D.return=y,y=D)}return i(y);case $:e:{for(J=x.key;m!==null;){if(m.key===J)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(y,m.sibling),m=o(m,x.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=si(x,y.mode,D),m.return=y,y=m}return i(y);case Qe:return J=x._init,Te(y,m,J(x._payload),D)}if(Bt(x))return V(y,m,x,D);if(q(x))return Q(y,m,x,D);Eo(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(y,m.sibling),m=o(m,x),m.return=y,y=m):(n(y,m),m=oi(x,y.mode,D),m.return=y,y=m),i(y)):n(y,m)}return Te}var Qn=Ua(!0),Va=Ua(!1),Co=Xt(null),jo=null,Kn=null,hl=null;function ml(){hl=Kn=jo=null}function vl(e){var t=Co.current;ze(Co),e._currentValue=t}function gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){jo=e,hl=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(jo===null)throw Error(a(308));Kn=e,jo.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var xn=null;function yl(e){xn===null?xn=[e]:xn.push(e)}function Wa(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,yl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ot(e,n)}return o=r.interleaved,o===null?(t.next=t,yl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ot(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rs(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var o=e.updateQueue;en=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var d=p,k=d.next;d.next=null,i===null?s=k:i.next=k,i=d;var P=e.alternate;P!==null&&(P=P.updateQueue,p=P.lastBaseUpdate,p!==i&&(p===null?P.firstBaseUpdate=k:p.next=k,P.lastBaseUpdate=d))}if(s!==null){var R=o.baseState;i=0,P=k=d=null,p=s;do{var C=p.lane,B=p.eventTime;if((r&C)===C){P!==null&&(P=P.next={eventTime:B,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var V=e,Q=p;switch(C=t,B=n,Q.tag){case 1:if(V=Q.payload,typeof V=="function"){R=V.call(B,R,C);break e}R=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=Q.payload,C=typeof V=="function"?V.call(B,R,C):V,C==null)break e;R=H({},R,C);break e;case 2:en=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,C=o.effects,C===null?o.effects=[p]:C.push(p))}else B={eventTime:B,lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},P===null?(k=P=B,d=R):P=P.next=B,i|=C;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;C=p,p=C.next,C.next=null,o.lastBaseUpdate=C,o.shared.pending=null}}while(!0);if(P===null&&(d=R),o.baseState=d,o.firstBaseUpdate=k,o.lastBaseUpdate=P,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);bn|=i,e.lanes=i,e.memoizedState=R}}function Za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(a(191,o));o.call(r)}}}var Nr={},Ct=Xt(Nr),Pr=Xt(Nr),Mr=Xt(Nr);function wn(e){if(e===Nr)throw Error(a(174));return e}function wl(e,t){switch(Le(Mr,t),Le(Pr,e),Le(Ct,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:S(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=S(t,e)}ze(Ct),Le(Ct,t)}function Gn(){ze(Ct),ze(Pr),ze(Mr)}function Ga(e){wn(Mr.current);var t=wn(Ct.current),n=S(t,e.type);t!==n&&(Le(Pr,e),Le(Ct,n))}function kl(e){Pr.current===e&&(ze(Ct),ze(Pr))}var je=Xt(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bl=[];function Ll(){for(var e=0;e<bl.length;e++)bl[e]._workInProgressVersionPrimary=null;bl.length=0}var Ro=G.ReactCurrentDispatcher,Sl=G.ReactCurrentBatchConfig,kn=0,Ne=null,$e=null,Ie=null,To=!1,Rr=!1,Tr=0,lf=0;function Ze(){throw Error(a(321))}function _l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function zl(e,t,n,r,o,s){if(kn=s,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?pf:ff,e=n(r,o),Rr){s=0;do{if(Rr=!1,Tr=0,25<=s)throw Error(a(301));s+=1,Ie=$e=null,t.updateQueue=null,Ro.current=df,e=n(r,o)}while(Rr)}if(Ro.current=Oo,t=$e!==null&&$e.next!==null,kn=0,Ie=$e=Ne=null,To=!1,t)throw Error(a(300));return e}function El(){var e=Tr!==0;return Tr=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ne.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function ht(){if($e===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Ie===null?Ne.memoizedState:Ie.next;if(t!==null)Ie=t,$e=e;else{if(e===null)throw Error(a(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ie===null?Ne.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Fr(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=ht(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=$e,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var p=i=null,d=null,k=s;do{var P=k.lane;if((kn&P)===P)d!==null&&(d=d.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var R={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};d===null?(p=d=R,i=r):d=d.next=R,Ne.lanes|=P,bn|=P}k=k.next}while(k!==null&&k!==s);d===null?i=r:d.next=p,xt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,Ne.lanes|=s,bn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jl(e){var t=ht(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);xt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ya(){}function Xa(e,t){var n=Ne,r=ht(),o=t(),s=!xt(r.memoizedState,o);if(s&&(r.memoizedState=o,nt=!0),r=r.queue,Nl(ec.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Dr(9,Ja.bind(null,n,r,o,t),void 0,null),He===null)throw Error(a(349));(kn&30)!==0||qa(n,t,o)}return o}function qa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ja(e,t,n,r){t.value=n,t.getSnapshot=r,tc(t)&&nc(e)}function ec(e,t,n){return n(function(){tc(t)&&nc(e)})}function tc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function nc(e){var t=Ot(e,1);t!==null&&St(t,e,1,-1)}function rc(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,Ne,e),[t.memoizedState,e]}function Dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function oc(){return ht().memoizedState}function Fo(e,t,n,r){var o=jt();Ne.flags|=e,o.memoizedState=Dr(1|t,n,void 0,r===void 0?null:r)}function Do(e,t,n,r){var o=ht();r=r===void 0?null:r;var s=void 0;if($e!==null){var i=$e.memoizedState;if(s=i.destroy,r!==null&&_l(r,i.deps)){o.memoizedState=Dr(t,n,s,r);return}}Ne.flags|=e,o.memoizedState=Dr(1|t,n,s,r)}function sc(e,t){return Fo(8390656,8,e,t)}function Nl(e,t){return Do(2048,8,e,t)}function lc(e,t){return Do(4,2,e,t)}function ic(e,t){return Do(4,4,e,t)}function ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cc(e,t,n){return n=n!=null?n.concat([e]):null,Do(4,4,ac.bind(null,t,e),n)}function Pl(){}function uc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fc(e,t,n){return(kn&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n):(xt(n,t)||(n=Bi(),Ne.lanes|=n,bn|=n,e.baseState=!0),t)}function af(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{xe=n,Sl.transition=r}}function dc(){return ht().memoizedState}function cf(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hc(e))mc(t,n);else if(n=Wa(e,t,n,r),n!==null){var o=qe();St(n,e,r,o),vc(n,t,r)}}function uf(e,t,n){var r=sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hc(e))mc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,p=s(i,n);if(o.hasEagerState=!0,o.eagerState=p,xt(p,i)){var d=t.interleaved;d===null?(o.next=o,yl(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=Wa(e,t,o,r),n!==null&&(o=qe(),St(n,e,r,o),vc(n,t,r))}}function hc(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function mc(e,t){Rr=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rs(e,n)}}var Oo={readContext:dt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},pf={readContext:dt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4194308,4,ac.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fo(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:rc,useDebugValue:Pl,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=rc(!1),t=e[0];return e=af.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,o=jt();if(Ce){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),He===null)throw Error(a(349));(kn&30)!==0||qa(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,sc(ec.bind(null,r,s,e),[e]),r.flags|=2048,Dr(9,Ja.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=jt(),t=He.identifierPrefix;if(Ce){var n=Dt,r=Ft;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:dt,useCallback:uc,useContext:dt,useEffect:Nl,useImperativeHandle:cc,useInsertionEffect:lc,useLayoutEffect:ic,useMemo:pc,useReducer:Cl,useRef:oc,useState:function(){return Cl(Fr)},useDebugValue:Pl,useDeferredValue:function(e){var t=ht();return fc(t,$e.memoizedState,e)},useTransition:function(){var e=Cl(Fr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Ya,useSyncExternalStore:Xa,useId:dc,unstable_isNewReconciler:!1},df={readContext:dt,useCallback:uc,useContext:dt,useEffect:Nl,useImperativeHandle:cc,useInsertionEffect:lc,useLayoutEffect:ic,useMemo:pc,useReducer:jl,useRef:oc,useState:function(){return jl(Fr)},useDebugValue:Pl,useDeferredValue:function(e){var t=ht();return $e===null?t.memoizedState=e:fc(t,$e.memoizedState,e)},useTransition:function(){var e=jl(Fr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Ya,useSyncExternalStore:Xa,useId:dc,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),o=sn(e),s=$t(r,o);s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,o),t!==null&&(St(t,e,o,r),No(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),o=sn(e),s=$t(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,o),t!==null&&(St(t,e,o,r),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=sn(e),o=$t(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(St(t,e,r,n),No(t,e,r))}};function gc(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(o,s):!0}function yc(e,t,n){var r=!1,o=qt,s=t.contextType;return typeof s=="object"&&s!==null?s=dt(s):(o=tt(t)?vn:Ke.current,r=t.contextTypes,s=(r=r!=null)?Bn(e,o):qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xl(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=dt(s):(s=tt(t)?vn:Ke.current,o.context=Bn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ml(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$o.enqueueReplaceState(o,o.state,null),Po(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=pe(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function wc(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,Yl=r),Fl(e,t)},n}function kc(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cf.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var mf=G.ReactCurrentOwner,nt=!1;function Xe(e,t,n,r){t.child=e===null?Va(t,null,n,r):Qn(t,e.child,n,r)}function _c(e,t,n,r,o){n=n.render;var s=t.ref;return Zn(t,o),r=zl(e,t,n,r,s,o),n=El(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(Ce&&n&&cl(t),t.flags|=1,Xe(e,t,r,o),t.child)}function zc(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!ri(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ec(e,t,s,r,o)):(e=Xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:br,n(i,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=an(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ec(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(br(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,At(e,t,o)}return Dl(e,t,n,r,o)}function Cc(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(qn,ut),ut|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(qn,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(qn,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Le(qn,ut),ut|=r;return Xe(e,t,o,n),t.child}function jc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,o){var s=tt(n)?vn:Ke.current;return s=Bn(t,s),Zn(t,o),n=zl(e,t,n,r,s,o),r=El(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(Ce&&r&&cl(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Nc(e,t,n,r,o){if(tt(n)){var s=!0;bo(t)}else s=!1;if(Zn(t,o),t.stateNode===null)Io(e,t),yc(t,n,r),Rl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,p=t.memoizedProps;i.props=p;var d=i.context,k=n.contextType;typeof k=="object"&&k!==null?k=dt(k):(k=tt(n)?vn:Ke.current,k=Bn(t,k));var P=n.getDerivedStateFromProps,R=typeof P=="function"||typeof i.getSnapshotBeforeUpdate=="function";R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p!==r||d!==k)&&xc(t,i,r,k),en=!1;var C=t.memoizedState;i.state=C,Po(t,r,i,o),d=t.memoizedState,p!==r||C!==d||et.current||en?(typeof P=="function"&&(Ml(t,n,P,r),d=t.memoizedState),(p=en||gc(t,n,p,r,C,d,k))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),i.props=r,i.state=d,i.context=k,r=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Qa(e,t),p=t.memoizedProps,k=t.type===t.elementType?p:kt(t.type,p),i.props=k,R=t.pendingProps,C=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=dt(d):(d=tt(n)?vn:Ke.current,d=Bn(t,d));var B=n.getDerivedStateFromProps;(P=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p!==R||C!==d)&&xc(t,i,r,d),en=!1,C=t.memoizedState,i.state=C,Po(t,r,i,o);var V=t.memoizedState;p!==R||C!==V||et.current||en?(typeof B=="function"&&(Ml(t,n,B,r),V=t.memoizedState),(k=en||gc(t,n,k,r,C,V,d)||!1)?(P||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,V,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,V,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=V),i.props=r,i.state=V,i.context=d,r=k):(typeof i.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,s,o)}function Ol(e,t,n,r,o,s){jc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Fa(t,n,!1),At(e,t,s);r=t.stateNode,mf.current=t;var p=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Qn(t,e.child,null,s),t.child=Qn(t,null,p,s)):Xe(e,t,p,s),t.memoizedState=r.state,o&&Fa(t,n,!0),t.child}function Pc(e){var t=e.stateNode;t.pendingContext?Ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(e,t.context,!1),wl(e,t.containerInfo)}function Mc(e,t,n,r,o){return Wn(),dl(o),t.flags|=256,Xe(e,t,n,r),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rc(e,t,n){var r=t.pendingProps,o=je.current,s=!1,i=(t.flags&128)!==0,p;if((p=i)||(p=e!==null&&e.memoizedState===null?!1:(o&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Le(je,o&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=qo(i,r,0,null),e=zn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Al(n),t.memoizedState=$l,e):Il(t,i));if(o=e.memoizedState,o!==null&&(p=o.dehydrated,p!==null))return vf(e,t,i,r,p,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,p=o.sibling;var d={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=an(o,d),r.subtreeFlags=o.subtreeFlags&14680064),p!==null?s=an(p,s):(s=zn(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?Al(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=$l,r}return s=e.child,e=s.sibling,r=an(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Il(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ao(e,t,n,r){return r!==null&&dl(r),Qn(t,e.child,null,n),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error(a(422))),Ao(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=qo({mode:"visible",children:r.children},o,0,null),s=zn(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Qn(t,e.child,null,i),t.child.memoizedState=Al(i),t.memoizedState=$l,s);if((t.mode&1)===0)return Ao(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var p=r.dgst;return r=p,s=Error(a(419)),r=Tl(s,r,void 0),Ao(e,t,i,r)}if(p=(i&e.childLanes)!==0,nt||p){if(r=He,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ot(e,o),St(r,e,o,-1))}return ni(),r=Tl(Error(a(421))),Ao(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jf.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,ct=Yt(o.nextSibling),at=t,Ce=!0,wt=null,e!==null&&(pt[ft++]=Ft,pt[ft++]=Dt,pt[ft++]=gn,Ft=e.id,Dt=e.overflow,gn=t),t=Il(t,r.children),t.flags|=4096,t)}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gl(e.return,t,n)}function Hl(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Fc(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Xe(e,t,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Le(je,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hl(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hl(t,!0,n,null,s);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Pc(t),Wn();break;case 5:Ga(t);break;case 1:tt(t.type)&&bo(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Le(Co,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Le(je,je.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Rc(e,t,n):(Le(je,je.current&1),e=At(e,t,n),e!==null?e.sibling:null);Le(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Le(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,Cc(e,t,n)}return At(e,t,n)}var Dc,Bl,Oc,$c;Dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bl=function(){},Oc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(Ct.current);var s=null;switch(n){case"input":o=rr(e,o),r=rr(e,r),s=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),s=[];break;case"textarea":o=or(e,o),r=or(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}bs(n,r);var i;n=null;for(k in o)if(!r.hasOwnProperty(k)&&o.hasOwnProperty(k)&&o[k]!=null)if(k==="style"){var p=o[k];for(i in p)p.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(h.hasOwnProperty(k)?s||(s=[]):(s=s||[]).push(k,null));for(k in r){var d=r[k];if(p=o!=null?o[k]:void 0,r.hasOwnProperty(k)&&d!==p&&(d!=null||p!=null))if(k==="style")if(p){for(i in p)!p.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&p[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(s||(s=[]),s.push(k,n)),n=d;else k==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,p=p?p.__html:void 0,d!=null&&p!==d&&(s=s||[]).push(k,d)):k==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(k,""+d):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(h.hasOwnProperty(k)?(d!=null&&k==="onScroll"&&_e("scroll",e),s||p===d||(s=[])):(s=s||[]).push(k,d))}n&&(s=s||[]).push("style",n);var k=s;(t.updateQueue=k)&&(t.flags|=4)}},$c=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yf(e,t,n){var r=t.pendingProps;switch(ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return tt(t.type)&&ko(),Ge(t),null;case 3:return r=t.stateNode,Gn(),ze(et),ze(Ke),Ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(Jl(wt),wt=null))),Bl(e,t),Ge(t),null;case 5:kl(t);var o=wn(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)Oc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Ge(t),null}if(e=wn(Ct.current),zo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Et]=t,r[Er]=s,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(o=0;o<Sr.length;o++)_e(Sr[o],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Qr(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":sr(r,s),_e("invalid",r)}bs(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var p=s[i];i==="children"?typeof p=="string"?r.textContent!==p&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,p,e),o=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,p,e),o=["children",""+p]):h.hasOwnProperty(i)&&p!=null&&i==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ht(r),Kr(r,s,!0);break;case"textarea":Ht(r),Zr(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=v(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Et]=t,e[Er]=r,Dc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ls(n,r),n){case"dialog":_e("cancel",e),_e("close",e),o=r;break;case"iframe":case"object":case"embed":_e("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sr.length;o++)_e(Sr[o],e);o=r;break;case"source":_e("error",e),o=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),o=r;break;case"details":_e("toggle",e),o=r;break;case"input":Qr(e,r),o=rr(e,r),_e("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),_e("invalid",e);break;case"textarea":sr(e,r),o=or(e,r),_e("invalid",e);break;default:o=r}bs(n,o),p=o;for(s in p)if(p.hasOwnProperty(s)){var d=p[s];s==="style"?Gr(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ue(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&se(e,d):typeof d=="number"&&se(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(h.hasOwnProperty(s)?d!=null&&s==="onScroll"&&_e("scroll",e):d!=null&&ne(e,s,d,i))}switch(n){case"input":Ht(e),Kr(e,r,!1);break;case"textarea":Ht(e),Zr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ge(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ut(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=wn(Mr.current),wn(Ct.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(s=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ge(t),null;case 13:if(ze(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ha(),Wn(),t.flags|=98560,s=!1;else if(s=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Et]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),s=!1}else wt!==null&&(Jl(wt),wt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(je.current&1)!==0?Ae===0&&(Ae=3):ni())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Gn(),Bl(e,t),e===null&&_r(t.stateNode.containerInfo),Ge(t),null;case 10:return vl(t.type._context),Ge(t),null;case 17:return tt(t.type)&&ko(),Ge(t),null;case 19:if(ze(je),s=t.memoizedState,s===null)return Ge(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Or(s,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mo(e),i!==null){for(t.flags|=128,Or(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Le(je,je.current&1|2),t.child}e=e.sibling}s.tail!==null&&Re()>Jn&&(t.flags|=128,r=!0,Or(s,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!Ce)return Ge(t),null}else 2*Re()-s.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,Or(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Re(),t.sibling=null,n=je.current,Le(je,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return ti(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function xf(e,t){switch(ul(t),t.tag){case 1:return tt(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),ze(et),ze(Ke),Ll(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(ze(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(je),null;case 4:return Gn(),null;case 10:return vl(t.type._context),null;case 22:case 23:return ti(),null;case 24:return null;default:return null}}var Ho=!1,Ye=!1,wf=typeof WeakSet=="function"?WeakSet:Set,U=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Ac=!1;function kf(e,t){if(tl=lo,e=ga(),Ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,p=-1,d=-1,k=0,P=0,R=e,C=null;t:for(;;){for(var B;R!==n||o!==0&&R.nodeType!==3||(p=i+o),R!==s||r!==0&&R.nodeType!==3||(d=i+r),R.nodeType===3&&(i+=R.nodeValue.length),(B=R.firstChild)!==null;)C=R,R=B;for(;;){if(R===e)break t;if(C===n&&++k===o&&(p=i),C===s&&++P===r&&(d=i),(B=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=B}n=p===-1||d===-1?null:{start:p,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(nl={focusedElem:e,selectionRange:n},lo=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var V=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var Q=V.memoizedProps,Te=V.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?Q:kt(t.type,Q),Te);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(D){Pe(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return V=Ac,Ac=!1,V}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Ul(t,n,s)}o=o.next}while(o!==r)}}function Bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ic(e){var t=e.alternate;t!==null&&(e.alternate=null,Ic(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Er],delete t[ll],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}var Ue=null,bt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(eo,n)}catch{}switch(n.tag){case 5:Ye||Xn(n,t);case 6:var r=Ue,o=bt;Ue=null,nn(e,t,n),Ue=r,bt=o,Ue!==null&&(bt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(bt?(e=Ue,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),vr(e)):sl(Ue,n.stateNode));break;case 4:r=Ue,o=bt,Ue=n.stateNode.containerInfo,bt=!0,nn(e,t,n),Ue=r,bt=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&((s&2)!==0||(s&4)!==0)&&Ul(n,t,i),o=o.next}while(o!==r)}nn(e,t,n);break;case 1:if(!Ye&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Pe(n,t,p)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,nn(e,t,n),Ye=r):nn(e,t,n);break;default:nn(e,t,n)}}function Vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var o=Nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,p=i;e:for(;p!==null;){switch(p.tag){case 5:Ue=p.stateNode,bt=!1;break e;case 3:Ue=p.stateNode.containerInfo,bt=!0;break e;case 4:Ue=p.stateNode.containerInfo,bt=!0;break e}p=p.return}if(Ue===null)throw Error(a(160));Uc(s,i,o),Ue=null,bt=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(k){Pe(o,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Nt(e),r&4){try{$r(3,e,e.return),Bo(3,e)}catch(Q){Pe(e,e.return,Q)}try{$r(5,e,e.return)}catch(Q){Pe(e,e.return,Q)}}break;case 1:Lt(t,e),Nt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Lt(t,e),Nt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var o=e.stateNode;try{se(o,"")}catch(Q){Pe(e,e.return,Q)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,p=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Cn(o,s),Ls(p,i);var k=Ls(p,s);for(i=0;i<d.length;i+=2){var P=d[i],R=d[i+1];P==="style"?Gr(o,R):P==="dangerouslySetInnerHTML"?ue(o,R):P==="children"?se(o,R):ne(o,P,R,k)}switch(p){case"input":jn(o,s);break;case"textarea":lr(o,s);break;case"select":var C=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var B=s.value;B!=null?Ut(o,!!s.multiple,B,!1):C!==!!s.multiple&&(s.defaultValue!=null?Ut(o,!!s.multiple,s.defaultValue,!0):Ut(o,!!s.multiple,s.multiple?[]:"",!1))}o[Er]=s}catch(Q){Pe(e,e.return,Q)}}break;case 6:if(Lt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(Q){Pe(e,e.return,Q)}}break;case 3:if(Lt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(Q){Pe(e,e.return,Q)}break;case 4:Lt(t,e),Nt(e);break;case 13:Lt(t,e),Nt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Gl=Re())),r&4&&Vc(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(k=Ye)||P,Lt(t,e),Ye=k):Lt(t,e),Nt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!P&&(e.mode&1)!==0)for(U=e,P=e.child;P!==null;){for(R=U=P;U!==null;){switch(C=U,B=C.child,C.tag){case 0:case 11:case 14:case 15:$r(4,C,C.return);break;case 1:Xn(C,C.return);var V=C.stateNode;if(typeof V.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(Q){Pe(r,n,Q)}}break;case 5:Xn(C,C.return);break;case 22:if(C.memoizedState!==null){Zc(R);continue}}B!==null?(B.return=C,U=B):Zc(R)}P=P.sibling}e:for(P=null,R=e;;){if(R.tag===5){if(P===null){P=R;try{o=R.stateNode,k?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=R.stateNode,d=R.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,p.style.display=Mt("display",i))}catch(Q){Pe(e,e.return,Q)}}}else if(R.tag===6){if(P===null)try{R.stateNode.nodeValue=k?"":R.memoizedProps}catch(Q){Pe(e,e.return,Q)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;P===R&&(P=null),R=R.return}P===R&&(P=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:Lt(t,e),Nt(e),r&4&&Vc(e);break;case 21:break;default:Lt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hc(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(se(o,""),r.flags&=-33);var s=Bc(e);Ql(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,p=Bc(e);Wl(e,p,i);break;default:throw Error(a(161))}}catch(d){Pe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e,t,n){U=e,Qc(e)}function Qc(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ho;if(!i){var p=o.alternate,d=p!==null&&p.memoizedState!==null||Ye;p=Ho;var k=Ye;if(Ho=i,(Ye=d)&&!k)for(U=o;U!==null;)i=U,d=i.child,i.tag===22&&i.memoizedState!==null?Gc(o):d!==null?(d.return=i,U=d):Gc(o);for(;s!==null;)U=s,Qc(s),s=s.sibling;U=o,Ho=p,Ye=k}Kc(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,U=s):Kc(e)}}function Kc(e){for(;U!==null;){var t=U;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||Bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Za(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Za(t,i,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var R=P.dehydrated;R!==null&&vr(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ye||t.flags&512&&Vl(t)}catch(C){Pe(t,t.return,C)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Zc(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Gc(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bo(4,t)}catch(d){Pe(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(d){Pe(t,o,d)}}var s=t.return;try{Vl(t)}catch(d){Pe(t,s,d)}break;case 5:var i=t.return;try{Vl(t)}catch(d){Pe(t,i,d)}}}catch(d){Pe(t,t.return,d)}if(t===e){U=null;break}var p=t.sibling;if(p!==null){p.return=t.return,U=p;break}U=t.return}}var Lf=Math.ceil,Uo=G.ReactCurrentDispatcher,Kl=G.ReactCurrentOwner,mt=G.ReactCurrentBatchConfig,de=0,He=null,De=null,Ve=0,ut=0,qn=Xt(0),Ae=0,Ar=null,bn=0,Vo=0,Zl=0,Ir=null,rt=null,Gl=0,Jn=1/0,It=null,Wo=!1,Yl=null,rn=null,Qo=!1,on=null,Ko=0,Hr=0,Xl=null,Zo=-1,Go=0;function qe(){return(de&6)!==0?Re():Zo!==-1?Zo:Zo=Re()}function sn(e){return(e.mode&1)===0?1:(de&2)!==0&&Ve!==0?Ve&-Ve:sf.transition!==null?(Go===0&&(Go=Bi()),Go):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Xi(e.type)),e)}function St(e,t,n,r){if(50<Hr)throw Hr=0,Xl=null,Error(a(185));pr(e,n,r),((de&2)===0||e!==He)&&(e===He&&((de&2)===0&&(Vo|=n),Ae===4&&ln(e,Ve)),ot(e,r),n===1&&de===0&&(t.mode&1)===0&&(Jn=Re()+500,Lo&&Jt()))}function ot(e,t){var n=e.callbackNode;sp(e,t);var r=ro(e,e===He?Ve:0);if(r===0)n!==null&&Ai(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ai(n),t===1)e.tag===0?of(Xc.bind(null,e)):Da(Xc.bind(null,e)),ef(function(){(de&6)===0&&Jt()}),n=null;else{switch(Ui(r)){case 1:n=Ns;break;case 4:n=Ii;break;case 16:n=Jr;break;case 536870912:n=Hi;break;default:n=Jr}n=su(n,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yc(e,t){if(Zo=-1,Go=0,(de&6)!==0)throw Error(a(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=ro(e,e===He?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Yo(e,r);else{t=r;var o=de;de|=2;var s=Jc();(He!==e||Ve!==t)&&(It=null,Jn=Re()+500,Sn(e,t));do try{zf();break}catch(p){qc(e,p)}while(!0);ml(),Uo.current=s,de=o,De!==null?t=0:(He=null,Ve=0,t=Ae)}if(t!==0){if(t===2&&(o=Ps(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=Ar,Sn(e,0),ln(e,r),ot(e,Re()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Sf(o)&&(t=Yo(e,r),t===2&&(s=Ps(e),s!==0&&(r=s,t=ql(e,s))),t===1))throw n=Ar,Sn(e,0),ln(e,r),ot(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:_n(e,rt,It);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Gl+500-Re(),10<t)){if(ro(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ol(_n.bind(null,e,rt,It),t);break}_n(e,rt,It);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-yt(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=ol(_n.bind(null,e,rt,It),r);break}_n(e,rt,It);break;case 5:_n(e,rt,It);break;default:throw Error(a(329))}}}return ot(e,Re()),e.callbackNode===n?Yc.bind(null,e):null}function ql(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=rt,rt=n,t!==null&&Jl(t)),e}function Jl(e){rt===null?rt=e:rt.push.apply(rt,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!xt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Zl,t&=~Vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Xc(e){if((de&6)!==0)throw Error(a(327));er();var t=ro(e,0);if((t&1)===0)return ot(e,Re()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Ps(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=Ar,Sn(e,0),ln(e,t),ot(e,Re()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,rt,It),ot(e,Re()),null}function ei(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Jn=Re()+500,Lo&&Jt())}}function Ln(e){on!==null&&on.tag===0&&(de&6)===0&&er();var t=de;de|=1;var n=mt.transition,r=xe;try{if(mt.transition=null,xe=1,e)return e()}finally{xe=r,mt.transition=n,de=t,(de&6)===0&&Jt()}}function ti(){ut=qn.current,ze(qn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jp(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:Gn(),ze(et),ze(Ke),Ll();break;case 5:kl(r);break;case 4:Gn();break;case 13:ze(je);break;case 19:ze(je);break;case 10:vl(r.type._context);break;case 22:case 23:ti()}n=n.return}if(He=e,De=e=an(e.current,null),Ve=ut=t,Ae=0,Ar=null,Zl=Vo=bn=0,rt=Ir=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}xn=null}return e}function qc(e,t){do{var n=De;try{if(ml(),Ro.current=Oo,To){for(var r=Ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}To=!1}if(kn=0,Ie=$e=Ne=null,Rr=!1,Tr=0,Kl.current=null,n===null||n.return===null){Ae=1,Ar=t,De=null;break}e:{var s=e,i=n.return,p=n,d=t;if(t=Ve,p.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var k=d,P=p,R=P.tag;if((P.mode&1)===0&&(R===0||R===11||R===15)){var C=P.alternate;C?(P.updateQueue=C.updateQueue,P.memoizedState=C.memoizedState,P.lanes=C.lanes):(P.updateQueue=null,P.memoizedState=null)}var B=Lc(i);if(B!==null){B.flags&=-257,Sc(B,i,p,s,t),B.mode&1&&bc(s,k,t),t=B,d=k;var V=t.updateQueue;if(V===null){var Q=new Set;Q.add(d),t.updateQueue=Q}else V.add(d);break e}else{if((t&1)===0){bc(s,k,t),ni();break e}d=Error(a(426))}}else if(Ce&&p.mode&1){var Te=Lc(i);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),Sc(Te,i,p,s,t),dl(Yn(d,p));break e}}s=d=Yn(d,p),Ae!==4&&(Ae=2),Ir===null?Ir=[s]:Ir.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=wc(s,d,t);Ka(s,y);break e;case 1:p=d;var m=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(rn===null||!rn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var D=kc(s,p,t);Ka(s,D);break e}}s=s.return}while(s!==null)}tu(n)}catch(K){t=K,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Jc(){var e=Uo.current;return Uo.current=Oo,e===null?Oo:e}function ni(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),He===null||(bn&268435455)===0&&(Vo&268435455)===0||ln(He,Ve)}function Yo(e,t){var n=de;de|=2;var r=Jc();(He!==e||Ve!==t)&&(It=null,Sn(e,t));do try{_f();break}catch(o){qc(e,o)}while(!0);if(ml(),de=n,Uo.current=r,De!==null)throw Error(a(261));return He=null,Ve=0,Ae}function _f(){for(;De!==null;)eu(De)}function zf(){for(;De!==null&&!Yu();)eu(De)}function eu(e){var t=ou(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?tu(e):De=t,Kl.current=null}function tu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=yf(n,t,ut),n!==null){De=n;return}}else{if(n=xf(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ae===0&&(Ae=5)}function _n(e,t,n){var r=xe,o=mt.transition;try{mt.transition=null,xe=1,Ef(e,t,n,r)}finally{mt.transition=o,xe=r}return null}function Ef(e,t,n,r){do er();while(on!==null);if((de&6)!==0)throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(lp(e,s),e===He&&(De=He=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Qo||(Qo=!0,su(Jr,function(){return er(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=mt.transition,mt.transition=null;var i=xe;xe=1;var p=de;de|=4,Kl.current=null,kf(e,n),Wc(n,e),Qp(nl),lo=!!tl,nl=tl=null,e.current=n,bf(n),Xu(),de=p,xe=i,mt.transition=s}else e.current=n;if(Qo&&(Qo=!1,on=e,Ko=o),s=e.pendingLanes,s===0&&(rn=null),ep(n.stateNode),ot(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wo)throw Wo=!1,e=Yl,Yl=null,e;return(Ko&1)!==0&&e.tag!==0&&er(),s=e.pendingLanes,(s&1)!==0?e===Xl?Hr++:(Hr=0,Xl=e):Hr=0,Jt(),null}function er(){if(on!==null){var e=Ui(Ko),t=mt.transition,n=xe;try{if(mt.transition=null,xe=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Ko=0,(de&6)!==0)throw Error(a(331));var o=de;for(de|=4,U=e.current;U!==null;){var s=U,i=s.child;if((U.flags&16)!==0){var p=s.deletions;if(p!==null){for(var d=0;d<p.length;d++){var k=p[d];for(U=k;U!==null;){var P=U;switch(P.tag){case 0:case 11:case 15:$r(8,P,s)}var R=P.child;if(R!==null)R.return=P,U=R;else for(;U!==null;){P=U;var C=P.sibling,B=P.return;if(Ic(P),P===k){U=null;break}if(C!==null){C.return=B,U=C;break}U=B}}}var V=s.alternate;if(V!==null){var Q=V.child;if(Q!==null){V.child=null;do{var Te=Q.sibling;Q.sibling=null,Q=Te}while(Q!==null)}}U=s}}if((s.subtreeFlags&2064)!==0&&i!==null)i.return=s,U=i;else e:for(;U!==null;){if(s=U,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:$r(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,U=y;break e}U=s.return}}var m=e.current;for(U=m;U!==null;){i=U;var x=i.child;if((i.subtreeFlags&2064)!==0&&x!==null)x.return=i,U=x;else e:for(i=m;U!==null;){if(p=U,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Bo(9,p)}}catch(K){Pe(p,p.return,K)}if(p===i){U=null;break e}var D=p.sibling;if(D!==null){D.return=p.return,U=D;break e}U=p.return}}if(de=o,Jt(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{xe=n,mt.transition=t}}return!1}function nu(e,t,n){t=Yn(n,t),t=wc(e,t,1),e=tn(e,t,1),t=qe(),e!==null&&(pr(e,1,t),ot(e,t))}function Pe(e,t,n){if(e.tag===3)nu(e,e,n);else for(;t!==null;){if(t.tag===3){nu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Yn(n,e),e=kc(t,e,1),t=tn(t,e,1),e=qe(),t!==null&&(pr(t,1,e),ot(t,e));break}}t=t.return}}function Cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ve&n)===n&&(Ae===4||Ae===3&&(Ve&130023424)===Ve&&500>Re()-Gl?Sn(e,0):Zl|=n),ot(e,t)}function ru(e,t){t===0&&((e.mode&1)===0?t=1:(t=no,no<<=1,(no&130023424)===0&&(no=4194304)));var n=qe();e=Ot(e,t),e!==null&&(pr(e,t,n),ot(e,n))}function jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ru(e,n)}function Nf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),ru(e,n)}var ou;ou=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return nt=!1,gf(e,t,n);nt=(e.flags&131072)!==0}else nt=!1,Ce&&(t.flags&1048576)!==0&&Oa(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var o=Bn(t,Ke.current);Zn(t,n),o=zl(null,t,r,e,o,n);var s=El();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(s=!0,bo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xl(t),o.updater=$o,t.stateNode=o,o._reactInternals=t,Rl(t,r,e,n),t=Ol(null,t,r,!0,s,n)):(t.tag=0,Ce&&s&&cl(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Mf(r),e=kt(r,e),o){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=Nc(null,t,r,e,n);break e;case 11:t=_c(null,t,r,e,n);break e;case 14:t=zc(null,t,r,kt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Nc(e,t,r,o,n);case 3:e:{if(Pc(t),e===null)throw Error(a(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Qa(e,t),Po(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Yn(Error(a(423)),t),t=Mc(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(a(424)),t),t=Mc(e,t,r,n,o);break e}else for(ct=Yt(t.stateNode.containerInfo.firstChild),at=t,Ce=!0,wt=null,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===o){t=At(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Ga(t),e===null&&fl(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,rl(r,o)?i=null:s!==null&&rl(r,s)&&(t.flags|=32),jc(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&fl(t),null;case 13:return Rc(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),_c(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,Le(Co,r._currentValue),r._currentValue=i,s!==null)if(xt(s.value,i)){if(s.children===o.children&&!et.current){t=At(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){i=s.child;for(var d=p.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=$t(-1,n&-n),d.tag=2;var k=s.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?d.next=d:(d.next=P.next,P.next=d),k.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),gl(s.return,n,t),p.lanes|=n;break}d=d.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(a(341));i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),gl(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Zn(t,n),o=dt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),zc(e,t,r,o,n);case 15:return Ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Io(e,t),t.tag=1,tt(r)?(e=!0,bo(t)):e=!1,Zn(t,n),yc(t,r,o),Rl(t,r,o,n),Ol(null,t,r,!0,e,n);case 19:return Fc(e,t,n);case 22:return Cc(e,t,n)}throw Error(a(156,t.tag))};function su(e,t){return $i(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Pf(e,t,n,r)}function ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return ri(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ve)return 11;if(e===lt)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")ri(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case X:return zn(n.children,o,s,t);case be:i=8,o|=8;break;case We:return e=vt(12,n,t,o|2),e.elementType=We,e.lanes=s,e;case Me:return e=vt(13,n,t,o),e.elementType=Me,e.lanes=s,e;case te:return e=vt(19,n,t,o),e.elementType=te,e.lanes=s,e;case we:return qo(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:i=10;break e;case Se:i=9;break e;case ve:i=11;break e;case lt:i=14;break e;case Qe:i=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=vt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function zn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=vt(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ms(0),this.expirationTimes=Ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ms(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function li(e,t,n,r,o,s,i,p,d){return e=new Rf(e,t,n,p,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(s),e}function Tf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lu(e){if(!e)return qt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(tt(n))return Ta(e,n,t)}return t}function iu(e,t,n,r,o,s,i,p,d){return e=li(n,r,!0,e,o,s,i,p,d),e.context=lu(null),n=e.current,r=qe(),o=sn(n),s=$t(r,o),s.callback=t??null,tn(n,s,o),e.current.lanes=o,pr(e,o,r),ot(e,r),e}function Jo(e,t,n,r){var o=t.current,s=qe(),i=sn(o);return n=lu(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,i),e!==null&&(St(e,o,i,s),No(e,o,i)),i}function es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ii(e,t){au(e,t),(e=e.alternate)&&au(e,t)}function Ff(){return null}var cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ai(e){this._internalRoot=e}ts.prototype.render=ai.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Jo(e,t,null,null)},ts.prototype.unmount=ai.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Jo(null,e,null,null)}),t[Rt]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Gi(e)}};function ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function Df(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var k=es(i);s.call(k)}}var i=iu(t,r,e,0,null,!1,!1,"",uu);return e._reactRootContainer=i,e[Rt]=i.current,_r(e.nodeType===8?e.parentNode:e),Ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var p=r;r=function(){var k=es(d);p.call(k)}}var d=li(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=d,e[Rt]=d.current,_r(e.nodeType===8?e.parentNode:e),Ln(function(){Jo(t,d,n,r)}),d}function rs(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var p=o;o=function(){var d=es(i);p.call(d)}}Jo(t,i,e,o)}else i=Df(n,t,e,o,r);return es(i)}Vi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ur(t.pendingLanes);n!==0&&(Rs(t,n|1),ot(t,Re()),(de&6)===0&&(Jn=Re()+500,Jt()))}break;case 13:Ln(function(){var r=Ot(e,1);if(r!==null){var o=qe();St(r,e,1,o)}}),ii(e,1)}},Ts=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=qe();St(t,e,134217728,n)}ii(e,134217728)}},Wi=function(e){if(e.tag===13){var t=sn(e),n=Ot(e,t);if(n!==null){var r=qe();St(n,e,t,r)}ii(e,t)}},Qi=function(){return xe},Ki=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},zs=function(e,t,n){switch(t){case"input":if(jn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(a(90));Wr(r),jn(r,o)}}}break;case"textarea":lr(e,n);break;case"select":t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}},Pi=ei,Mi=Ln;var Of={usingClientEntryPoint:!1,Events:[Cr,In,wo,ji,Ni,ei]},Br={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$f={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Di(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{eo=os.inject($f),zt=os}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of,st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ci(t))throw Error(a(200));return Tf(e,t,null,n)},st.createRoot=function(e,t){if(!ci(e))throw Error(a(299));var n=!1,r="",o=cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=li(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,_r(e.nodeType===8?e.parentNode:e),new ai(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Di(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return Ln(e)},st.hydrate=function(e,t,n){if(!ns(t))throw Error(a(200));return rs(null,e,t,!0,n)},st.hydrateRoot=function(e,t,n){if(!ci(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=cu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=iu(t,null,e,1,n??null,o,!1,s,i),e[Rt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ts(t)},st.render=function(e,t,n){if(!ns(t))throw Error(a(200));return rs(null,e,t,!1,n)},st.unmountComponentAtNode=function(e){if(!ns(e))throw Error(a(40));return e._reactRootContainer?(Ln(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},st.unstable_batchedUpdates=ei,st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return rs(e,t,n,!1,r)},st.version="18.3.1-next-f1338f8080-20240426",st}var yu;function Kf(){if(yu)return fi.exports;yu=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),fi.exports=Qf(),fi.exports}var xu;function Zf(){if(xu)return ss;xu=1;var l=Kf();return ss.createRoot=l.createRoot,ss.hydrateRoot=l.hydrateRoot,ss}var Gf=Zf();const Yf=If(Gf),Xf="modulepreload",qf=function(l,c){return new URL(l,c).href},wu={},ls=function(c,a,u){let h=Promise.resolve();if(a&&a.length>0){let b=function(T){return Promise.all(T.map(F=>Promise.resolve(F).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};const E=document.getElementsByTagName("link"),N=document.querySelector("meta[property=csp-nonce]"),M=(N==null?void 0:N.nonce)||(N==null?void 0:N.getAttribute("nonce"));h=b(a.map(T=>{if(T=qf(T,u),T in wu)return;wu[T]=!0;const F=T.endsWith(".css"),O=F?'[rel="stylesheet"]':"";if(!!u)for(let I=E.length-1;I>=0;I--){const Y=E[I];if(Y.href===T&&(!F||Y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${T}"]${O}`))return;const Z=document.createElement("link");if(Z.rel=F?"stylesheet":Xf,F||(Z.as="script"),Z.crossOrigin="",Z.href=T,M&&Z.setAttribute("nonce",M),document.head.appendChild(Z),F)return new Promise((I,Y)=>{Z.addEventListener("load",I),Z.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${T}`)))})}))}function w(b){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=b,window.dispatchEvent(E),!E.defaultPrevented)throw b}return h.then(b=>{for(const E of b||[])E.status==="rejected"&&w(E.reason);return c().catch(w)})},wi={toggle:()=>ls(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>ls(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>ls(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>ls(()=>import("./press-h_enDfSn.js"),[],import.meta.url)};let tr=null,ku=!1;const Ru=new Set,hs=new Map,is=new Map;function _i(){if(tr)return tr;const l=window.AudioContext||window.webkitAudioContext;return l?(tr=new l,tr):null}function zi(l){if(hs.has(l))return Promise.resolve(hs.get(l));if(is.has(l))return is.get(l);const c=_i();if(!c||!wi[l])return Promise.resolve(null);const a=wi[l]().then(u=>fetch(u.default)).then(u=>u.arrayBuffer()).then(u=>c.decodeAudioData(u)).then(u=>(hs.set(l,u),u)).catch(()=>null).finally(()=>is.delete(l));return is.set(l,a),a}function Jf(){const l=_i();l&&(l.state==="suspended"&&l.resume(),Ru.forEach(zi))}function ed(l){if(typeof window>"u"||!wi[l])return;if(Ru.add(l),tr&&tr.state!=="suspended"){zi(l);return}if(ku)return;ku=!0;const c={capture:!0,passive:!0},a=()=>{window.removeEventListener("pointerdown",a,c),window.removeEventListener("keydown",a,c),Jf()};window.addEventListener("pointerdown",a,c),window.addEventListener("keydown",a,c)}const td=120;function nd(l,c=1){if(typeof window>"u"||c<=0)return;const a=_i();if(!a)return;a.state==="suspended"&&a.resume();const u=hs.get(l);if(!u){const h=performance.now();zi(l).then(w=>{w&&performance.now()-h<=td&&bu(a,w,c)});return}bu(a,u,c)}function bu(l,c,a){const u=l.createBufferSource(),h=l.createGain();h.gain.value=Math.min(1,a),u.buffer=c,u.connect(h).connect(l.destination),u.start()}const Tu=.7,Fu=L.createContext({enabled:!0,volume:Tu});function rd({enabled:l=!0,volume:c=Tu,children:a}){return f.jsx(Fu.Provider,{value:{enabled:l,volume:c},children:a})}function ws(l,c=!0){const{enabled:a,volume:u}=L.useContext(Fu),h=a&&c;return L.useEffect(()=>{h&&ed(l)},[l,h]),L.useCallback(()=>{h&&nd(l,u)},[l,h,u])}const od=`/* ============================================================
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
  --sc-motion-switch-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-switch-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-switch-stretch: 0;
  --sc-motion-switch-squash: 0;
  --sc-motion-switch-press-lean: 0;
  --sc-motion-switch-press-lean-duration: var(--sc-p-motion-duration-press);
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
  --sc-size-switch-track-width: var(--sc-p-space-32);
  --sc-size-switch-track-height: var(--sc-p-space-micro-18);
  --sc-size-switch-thumb: var(--sc-p-space-micro-14);
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
  --sc-color-switch-thumb-rim-top: var(--sc-p-color-warm-gray-200);
  --sc-color-switch-thumb-rim-bottom: var(--sc-p-color-warm-gray-350);
  --sc-color-switch-thumb-face-top: var(--sc-p-color-warm-gray-250);
  --sc-color-switch-thumb-face-bottom: var(--sc-p-color-warm-gray-300);
  --sc-color-switch-glyph-on: var(--sc-p-color-utility-white);
  --sc-color-switch-glyph-off: var(--sc-p-color-dark-text-disabled);
  --sc-color-switch-track-off: var(--sc-p-color-dark-raised2);
  --sc-color-switch-track-off-hover: var(--sc-p-color-dark-raised1);
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
  --sc-motion-switch-travel-duration: var(--sc-p-motion-duration-micro);
  --sc-motion-switch-travel-easing: var(--sc-p-motion-easing-out);
  --sc-motion-switch-stretch: 0;
  --sc-motion-switch-squash: 0;
  --sc-motion-switch-press-lean: 0;
  --sc-motion-switch-press-lean-duration: var(--sc-p-motion-duration-press);
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
  --sc-size-switch-track-width: var(--sc-p-space-32);
  --sc-size-switch-track-height: var(--sc-p-space-micro-18);
  --sc-size-switch-thumb: var(--sc-p-space-micro-14);
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
`,as=60,Lu={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function sd([l,c,a,u],h){const w=(N,M,T)=>3*(1-T)**2*T*N+3*(1-T)*T**2*M+T**3;let b=0,E=1;for(let N=0;N<40;N+=1){const M=(b+E)/2;w(l,a,M)<h?b=M:E=M}return w(c,u,(b+E)/2)}function ld(l){const c=[];for(const a of l.split(",")){const[u,...h]=a.trim().split(/\s+/);h.length||c.push({v:+u,x:null});for(const w of h)c.push({v:+u,x:parseFloat(w)/100})}c[0].x===null&&(c[0].x=0),c.at(-1).x===null&&(c.at(-1).x=1);for(let a=1;a<c.length;a+=1){if(c[a].x!==null){c[a].x=Math.max(c[a].x,c[a-1].x);continue}let u=a;for(;c[u].x===null;)u+=1;const h=(c[u].x-c[a-1].x)/(u-a+1);for(let w=a;w<u;w+=1)c[w].x=c[w-1].x+h}return c}function id(l,c){for(let a=1;a<l.length;a+=1)if(c<=l[a].x){const u=l[a-1],h=l[a],w=h.x-u.x;return w?u.v+(c-u.x)/w*(h.v-u.v):h.v}return l.at(-1).v}function ad(l){var h;const c=(l||"ease").trim(),a=c.match(/^linear\((.+)\)$/);if(a){const w=ld(a[1]);return Array.from({length:as},(b,E)=>id(w,E/(as-1)))}const u=((h=c.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:h[1].split(",").map(Number))||Lu[c]||Lu.ease;return Array.from({length:as},(w,b)=>sd(u,b/(as-1)))}const cd=l=>(l.endsWith("ms")?parseFloat(l):parseFloat(l)*1e3)||0;function ud(l,c){const a=getComputedStyle(l),u=I=>parseFloat(a.getPropertyValue(I))||0,h=document.createElement("span");h.style.cssText="position:absolute;visibility:hidden;transition-duration:var(--sc-motion-switch-travel-duration),var(--sc-motion-switch-press-lean-duration);transition-timing-function:var(--sc-motion-switch-travel-easing),var(--sc-motion-press-easing);",l.appendChild(h);const w=getComputedStyle(h),[b,E]=w.transitionDuration.split(",").map(I=>cd(I.trim())),N=[];let M=0,T="";for(const I of w.transitionTimingFunction)I==="("&&(M+=1),I===")"&&(M-=1),I===","&&M===0?(N.push(T.trim()),T=""):T+=I;N.push(T.trim()),h.remove();const F=parseFloat(a.width),O=parseFloat(a.height),W=parseFloat(getComputedStyle(c).height),Z=(O-W)/2;return{travelDur:b,travelEasing:N[0],leanDur:E,leanEasing:N[1],stretch:u("--sc-motion-switch-stretch"),squash:u("--sc-motion-switch-squash"),lean:u("--sc-motion-switch-press-lean"),knob:W,travel:F-W-2*Z}}const pd=l=>l.stretch>0||l.squash>0||l.lean>0,ms=(l,c)=>({l:c?l.travel:0,r:(c?l.travel:0)+l.knob,h:l.knob});function fd(l,c){const a=l.lean*.25*l.travel,u=ms(l,c);return c?{...u,l:u.l-a}:{...u,r:u.r+a}}const ki=(l,{l:c,r:a,h:u})=>({transform:`translateX(${c}px)`,width:`${a-c}px`,height:`${u}px`});function dd(l,c,a){const u=ad(l.travelEasing),h=u.map((b,E)=>Math.abs(u[Math.min(E+1,u.length-1)]-u[Math.max(E-1,0)])),w=Math.max(...h)||1;return u.map((b,E)=>{const N=h[E]/w,M=l.stretch*l.knob*N,T=c.l+(a.l-c.l)*b-M/2,F=c.r+(a.r-c.r)*b+M/2;return ki(l,{l:T,r:F,h:l.knob*(1-l.squash*N)})})}const hd=(l,c,a)=>[ki(l,c),ki(l,a)],md=()=>{var l;return typeof window<"u"&&((l=window.matchMedia)==null?void 0:l.call(window,"(prefers-reduced-motion: reduce)").matches)},vd="_field_arx6x_39",gd="_disabled_arx6x_49",yd="_controlWrapper_arx6x_53",xd="_input_arx6x_59",wd="_track_arx6x_69",kd="_glyphs_arx6x_84",bd="_glyphOn_arx6x_99",Ld="_glyphOff_arx6x_105",Sd="_thumb_arx6x_115",_d="_label_arx6x_190",Pt={field:vd,disabled:gd,controlWrapper:yd,input:xd,track:wd,glyphs:kd,glyphOn:bd,glyphOff:Ld,thumb:Sd,label:_d};function zd({checked:l=!1,disabled:c=!1,onChange:a,label:u,sound:h=!0,glyphs:w=!0,className:b=""}){const E=L.useId(),N=ws("toggle",h),M=L.useRef(null),T=L.useRef(null),F=L.useRef(null),O=L.useRef(null),W=L.useRef(null),Z=L.useRef(!1),I=()=>{if(c||md()||!T.current||!F.current)return null;const $=ud(T.current,F.current);return pd($)?$:null},Y=()=>{var $,X;($=O.current)==null||$.cancel(),O.current=null,W.current=null,(X=T.current)==null||X.removeAttribute("data-driven")},Fe=($,X,be,We)=>{var Se;(Se=O.current)==null||Se.cancel(),T.current.setAttribute("data-driven","");const ce=F.current.animate($,{duration:X,easing:be,fill:"forwards"});O.current=ce,We||(ce.onfinish=()=>{O.current===ce&&Y()})},Ee=($,X,be)=>Fe(dd($,X,ms($,be)),$.travelDur,"linear",!1),ne=()=>{const $=I();if(!$||$.lean<=0)return;const X=M.current.checked,be=W.current||ms($,X);W.current=fd($,X),Z.current=!1,Fe(hd($,be,W.current),$.leanDur,$.leanEasing,!0)},G=()=>{if(!W.current)return;const $=I();if(!$){Y();return}const X=W.current;W.current=null,Ee($,X,M.current.checked)},ie=()=>setTimeout(()=>{Z.current||G()},0);return f.jsxs("label",{htmlFor:E,className:`${Pt.field} ${c?Pt.disabled:""} ${b}`,onPointerDown:ne,onPointerUp:ie,onPointerLeave:G,onPointerCancel:G,children:[f.jsxs("span",{className:Pt.controlWrapper,children:[f.jsx("input",{ref:M,id:E,type:"checkbox",role:"switch",className:Pt.input,checked:l,disabled:c,onChange:$=>{N(),Z.current=!0;const X=I();if(X){const be=W.current||ms(X,!$.target.checked);W.current=null,Ee(X,be,$.target.checked)}else Y();a==null||a($)}}),f.jsxs("span",{ref:T,className:Pt.track,"aria-hidden":"true",children:[w&&f.jsxs("span",{className:Pt.glyphs,children:[f.jsx("span",{className:Pt.glyphOn}),f.jsx("span",{className:Pt.glyphOff})]}),f.jsx("span",{ref:F,className:Pt.thumb})]})]}),u&&f.jsx("span",{className:Pt.label,children:u})]})}const Ed=new Map([["bold",L.createElement(L.Fragment,null,L.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",L.createElement(L.Fragment,null,L.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),L.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",L.createElement(L.Fragment,null,L.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",L.createElement(L.Fragment,null,L.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",L.createElement(L.Fragment,null,L.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",L.createElement(L.Fragment,null,L.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Cd=new Map([["bold",L.createElement(L.Fragment,null,L.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",L.createElement(L.Fragment,null,L.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",L.createElement(L.Fragment,null,L.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",L.createElement(L.Fragment,null,L.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",L.createElement(L.Fragment,null,L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",L.createElement(L.Fragment,null,L.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),jd=new Map([["bold",L.createElement(L.Fragment,null,L.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",L.createElement(L.Fragment,null,L.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",L.createElement(L.Fragment,null,L.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",L.createElement(L.Fragment,null,L.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",L.createElement(L.Fragment,null,L.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",L.createElement(L.Fragment,null,L.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),Nd=L.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ks=L.forwardRef((l,c)=>{const{alt:a,color:u,size:h,weight:w,mirrored:b,children:E,weights:N,...M}=l,{color:T="currentColor",size:F,weight:O="regular",mirrored:W=!1,...Z}=L.useContext(Nd);return L.createElement("svg",{ref:c,xmlns:"http://www.w3.org/2000/svg",width:h??F,height:h??F,fill:u??T,viewBox:"0 0 256 256",transform:b||W?"scale(-1, 1)":void 0,...Z,...M},!!a&&L.createElement("title",null,a),E,N.get(w??O))});ks.displayName="IconBase";const Du=L.forwardRef((l,c)=>L.createElement(ks,{ref:c,...l,weights:Ed}));Du.displayName="ArrowRightIcon";const Pd=Du,Ou=L.forwardRef((l,c)=>L.createElement(ks,{ref:c,...l,weights:Cd}));Ou.displayName="MinusIcon";const Md=Ou,$u=L.forwardRef((l,c)=>L.createElement(ks,{ref:c,...l,weights:jd}));$u.displayName="PlusIcon";const Rd=$u,Td="_icon_1vxzc_2",Fd={icon:Td},Dd={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Su({glyph:l,weight:c="regular",size:a="1em",label:u,className:h="",...w}){if(!l)return null;const b=u?{"aria-label":u,role:"img"}:{"aria-hidden":!0},E=Dd[a];return E?f.jsx("span",{className:`${Fd.icon} ${h}`.trim(),style:{fontSize:E},children:f.jsx(l,{weight:c,size:"1em",...b,...w})}):f.jsx(l,{weight:c,size:a,className:h,...b,...w})}const Od="_stepper_c7phq_19",$d="_button_c7phq_28",Ad="_readout_c7phq_66",Id="_disabled_c7phq_85",Vr={stepper:Od,button:$d,readout:Ad,disabled:Id},Hd=400,Bd=80;function Ud({value:l,onChange:c,min:a=-1/0,max:u=1/0,step:h=1,label:w,disabled:b=!1,sound:E=!0,className:N=""}){const M=ws("tick",E),T=L.useRef(l);T.current=l;const F=L.useRef(null),O=L.useRef(null),W=G=>Math.max(a,Math.min(u,G)),Z=G=>{const ie=W(T.current+G);ie!==T.current&&(T.current=ie,c==null||c(ie),M())},I=()=>{F.current&&clearTimeout(F.current),O.current&&clearInterval(O.current),F.current=null,O.current=null};L.useEffect(()=>I,[]);const Y=G=>{b||(Z(G),I(),F.current=setTimeout(()=>{O.current=setInterval(()=>Z(G),Bd)},Hd))},Fe=l<=a,Ee=l>=u,ne=G=>{b||(G.key==="ArrowUp"?(G.preventDefault(),Z(h)):G.key==="ArrowDown"?(G.preventDefault(),Z(-h)):G.key==="Home"&&Number.isFinite(a)?(G.preventDefault(),T.current!==a&&M(),T.current=a,c==null||c(a)):G.key==="End"&&Number.isFinite(u)&&(G.preventDefault(),T.current!==u&&M(),T.current=u,c==null||c(u)))};return f.jsxs("div",{className:`${Vr.stepper} ${b?Vr.disabled:""} ${N}`,children:[f.jsx("button",{type:"button",className:Vr.button,"aria-label":w?`Decrease ${w}`:"Decrease",disabled:b||Fe,onPointerDown:()=>Y(-h),onPointerUp:I,onPointerLeave:I,onPointerCancel:I,children:f.jsx(Su,{glyph:Md,weight:"bold",size:"sm"})}),f.jsx("span",{className:Vr.readout,role:"spinbutton",tabIndex:b?-1:0,"aria-valuenow":l,"aria-valuemin":Number.isFinite(a)?a:void 0,"aria-valuemax":Number.isFinite(u)?u:void 0,"aria-label":w,"aria-disabled":b||void 0,onKeyDown:ne,children:l}),f.jsx("button",{type:"button",className:Vr.button,"aria-label":w?`Increase ${w}`:"Increase",disabled:b||Ee,onPointerDown:()=>Y(h),onPointerUp:I,onPointerLeave:I,onPointerCancel:I,children:f.jsx(Su,{glyph:Rd,weight:"bold",size:"sm"})})]})}const Vd="_track_rlqpk_24",Wd="_indicator_rlqpk_34",Qd="_segment_rlqpk_46",Kd="_md_rlqpk_61",Zd="_sm_rlqpk_71",Gd="_lg_rlqpk_81",Yd="_count_rlqpk_91",Xd="_segmentSelected_rlqpk_100",qd="_disabled_rlqpk_114",un={track:Vd,indicator:Wd,segment:Qd,md:Kd,sm:Zd,lg:Gd,count:Yd,segmentSelected:Xd,disabled:qd};function Jd({options:l=[],value:c,onChange:a,disabled:u=!1,label:h,size:w="md",sound:b=!0,className:E=""}){const N=ws("select",b),M=ne=>{ne!==c&&N(),a==null||a(ne)},T=L.useRef(null),F=L.useRef({}),[O,W]=L.useState(null),Z=L.useCallback(()=>{const ne=T.current,G=F.current[c];if(!ne||!G){W(null);return}const ie=ne.getBoundingClientRect(),$=G.getBoundingClientRect();W({left:$.left-ie.left,width:$.width})},[c]);L.useLayoutEffect(()=>{Z()},[Z,l.length,w]),L.useEffect(()=>(window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)),[Z]);const I=ne=>{var G;(G=F.current[ne])==null||G.focus()},Y=ne=>{if(u||l.length===0)return;const G=(ne+l.length)%l.length,ie=l[G];ie&&(M(ie.value),I(ie.value))},Fe=(ne,G)=>{if(!u)switch(ne.key){case"ArrowRight":case"ArrowDown":ne.preventDefault(),Y(G+1);break;case"ArrowLeft":case"ArrowUp":ne.preventDefault(),Y(G-1);break;case"Home":ne.preventDefault(),Y(0);break;case"End":ne.preventDefault(),Y(l.length-1);break}},Ee=l.findIndex(ne=>ne.value===c);return f.jsxs("div",{ref:T,className:`${un.track} ${un[w]||un.md} ${u?un.disabled:""} ${E}`,role:"radiogroup","aria-label":h,"aria-disabled":u||void 0,children:[O&&f.jsx("span",{className:un.indicator,"aria-hidden":"true",style:{transform:`translateX(${O.left}px)`,width:`${O.width}px`}}),l.map((ne,G)=>{const ie=ne.value===c,$=ie||Ee===-1&&G===0;return f.jsxs("button",{type:"button",ref:X=>{F.current[ne.value]=X},role:"radio","aria-checked":ie,tabIndex:u?-1:$?0:-1,disabled:u,className:`${un.segment} ${ie?un.segmentSelected:""}`,onClick:()=>M(ne.value),onKeyDown:X=>Fe(X,G),children:[ne.label,ne.count!==void 0&&f.jsx("span",{className:un.count,children:ne.count})]},ne.value)})]})}const _u=16,mi=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],eh="_mark_nniye_3",th="_sm_nniye_24",nh="_md_nniye_1",rh="_lg_nniye_26",oh="_working_nniye_28",sh="_paused_nniye_29",lh="_base_nniye_33",ih="_glint_nniye_34",ah="_spin_nniye_36",ch="_loop_nniye_37",gt={mark:eh,sm:th,md:nh,lg:rh,working:oh,paused:sh,base:lh,glint:ih,spin:ah,loop:ch},uh={sm:gt.sm,md:gt.md,lg:gt.lg},ph=3.2;function fh(l,c){const a=l%2===0,h=-((a?1:-1)*(360*l)/c),w=h+360*(a?3:7);return{from:`${h.toFixed(2)} 8 8`,to:`${w.toFixed(2)} 8 8`}}function dh({working:l=!0,size:c="sm",label:a,className:u="",...h}){const w=`wm${L.useId().replace(/[^a-zA-Z0-9]/g,"")}`,b=mi.length,E=a?{role:"img","aria-label":a}:{"aria-hidden":!0},N=[gt.mark,uh[c]??gt.sm,l?gt.working:gt.paused,u].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${_u} ${_u}`,className:N,focusable:"false",...E,...h,children:[l&&f.jsx("defs",{children:mi.map((M,T)=>{const{from:F,to:O}=fh(T,b);return f.jsxs("linearGradient",{id:`${w}-s${T}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:gt.base}),f.jsx("stop",{offset:"0.45",className:gt.base}),f.jsx("stop",{offset:"1",className:gt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:F,to:O,dur:`${ph}s`,repeatCount:"indefinite"})]},T)})}),mi.map((M,T)=>f.jsx("g",{className:gt.spin,style:{"--wm-i":T},children:f.jsx("path",{d:M,className:gt.loop,style:{"--wm-i":T},stroke:l?`url(#${w}-s${T})`:void 0})},T))]})}const hh="_button_13jhr_32",mh="_label_13jhr_73",vh="_arrow_13jhr_83",gh="_sm_13jhr_55",yh="_primary_13jhr_121",xh="_destructive_13jhr_122",wh="_secondary_13jhr_156",kh="_tertiary_13jhr_172",bh="_loading_13jhr_206",Lh="_working_13jhr_210",En={button:hh,label:mh,arrow:vh,sm:gh,primary:yh,destructive:xh,secondary:wh,tertiary:kh,loading:bh,working:Lh},Sh=["primary","secondary","tertiary","destructive"],_h=["lg","sm"];function zh(){return f.jsx(Pd,{weight:"bold",className:En.arrow,"aria-hidden":"true"})}function Eh({variant:l="primary",size:c="lg",disabled:a=!1,loading:u=!1,arrow:h=!0,type:w="button",sound:b=!0,children:E,onClick:N,className:M="",...T}){const F=Sh.includes(l)?l:"primary",O=_h.includes(c)?c:"lg",W=a||u,Z=ws("press",b);return f.jsxs("button",{type:w,className:`${En.button} ${En[F]} ${O==="sm"?En.sm:""} ${u?En.loading:""} ${M}`,disabled:W,"aria-busy":u||void 0,onClick:W?void 0:I=>{Z(),N==null||N(I)},...T,children:[f.jsx("span",{className:En.label,children:E}),u?f.jsx(dh,{className:En.working}):h&&f.jsx(zh,{})]})}const Ch=`/* tokens:
 *   --sc-size-switch-track-width   · 32 track
 *   --sc-size-switch-track-height  · 18 track
 *   --sc-size-switch-thumb         · 14 thumb (2 inset)
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
`,jh=`/* tokens:
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
`,Nh=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,Ph=`/* tokens:
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
`,Mh=`/* tokens:
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
`,Rh="_app_px5b6_6",Th="_bar_px5b6_18",Fh="_brand_px5b6_27",Dh="_meta_px5b6_34",Oh="_readout_px5b6_35",$h="_values_px5b6_36",Ah="_spacer_px5b6_42",Ih="_stages_px5b6_46",Hh="_stageWrap_px5b6_54",Bh="_activeStage_px5b6_61",Uh="_stageSelect_px5b6_65",Vh="_stageLabel_px5b6_75",Wh="_stage_px5b6_46",Qh="_panel_px5b6_94",Kh="_group_px5b6_103",Zh="_prop_px5b6_121",Gh="_editor_px5b6_122",Yh="_token_px5b6_132",Xh="_changed_px5b6_140",qh="_tokenHead_px5b6_144",Jh="_tokenName_px5b6_150",em="_num_px5b6_162",tm="_mini_px5b6_166",nm="_curve_px5b6_173",rm="_sounds_px5b6_187",om="_sound_px5b6_187",sm="_shippedSound_px5b6_210",lm="_reset_px5b6_214",im="_notes_px5b6_267",am="_tabs_px5b6_279",cm="_tab_px5b6_279",um="_pin_px5b6_308",pm="_pick_px5b6_313",fm="_propBlock_px5b6_320",dm="_easing_px5b6_321",hm="_springRows_px5b6_322",mm="_propLabel_px5b6_328",vm="_tokenActions_px5b6_332",gm="_motionTiles_px5b6_347",ym="_motionTile_px5b6_347",xm="_layers_px5b6_405",wm="_layer_px5b6_405",km="_layerHead_px5b6_418",bm="_layerGrid_px5b6_423",Lm="_scope_px5b6_428",Sm="_steps_px5b6_437",_m="_step_px5b6_437",zm="_stepRole_px5b6_471",j={app:Rh,bar:Th,brand:Fh,meta:Dh,readout:Oh,values:$h,spacer:Ah,stages:Ih,stageWrap:Hh,activeStage:Bh,stageSelect:Uh,stageLabel:Vh,stage:Wh,panel:Qh,group:Kh,prop:Zh,editor:Gh,token:Yh,changed:Xh,tokenHead:qh,tokenName:Jh,num:em,mini:tm,curve:nm,sounds:rm,sound:om,shippedSound:sm,reset:lm,notes:im,tabs:am,tab:cm,pin:um,pick:pm,propBlock:fm,easing:dm,springRows:hm,propLabel:mm,tokenActions:vm,motionTiles:gm,motionTile:ym,layers:xm,layer:wm,layerHead:km,layerGrid:bm,scope:Lm,steps:Sm,step:_m,stepRole:zm},cs=["day","week","month"];function Em({p:l,ctx:c}){const a=L.useRef(null);return L.useEffect(()=>{var M;const u=[...((M=a.current)==null?void 0:M.children)||[]],h=c.slow||1,w=l.reduced,b=w==="opacity only"?{opacity:l.opacityFrom,transform:"none",filter:"none"}:{opacity:l.opacityFrom,transform:`translateY(${l.distance}px) scale(${l.scaleFrom}) rotate(${l.rotateFrom}deg)`,filter:`blur(${l.blurFrom}px)`},E={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},N=u.map((T,F)=>T.animate([b,E],{duration:w==="none"?0:l.duration*h,delay:w==="none"?0:(l.delay+F*l.stagger)*h,easing:l.easing,fill:"both"}));return()=>N.forEach(T=>T.cancel())},[l,c.replay,c.slow]),f.jsx("div",{className:j.motionTiles,ref:a,children:Array.from({length:l.count},(u,h)=>f.jsx("span",{className:j.motionTile},h))})}const vi=l=>l.reduced==="none"?0:l.delay+l.stagger*(l.count-1)+l.duration,nr={Switch:{css:[Ch],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(l,c)=>c("checked",!l.checked),render:(l,c,a)=>f.jsx(zd,{checked:l.checked,disabled:l.disabled,glyphs:l.glyphs,label:l.label,sound:!1,onChange:u=>{c("checked",u.target.checked),a()}})},Stepper:{css:[jh,Nh],shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(l,c)=>c("value",l.value+l.step>l.max?l.min:l.value+l.step),render:(l,c,a)=>f.jsx(Ud,{value:l.value,min:l.min,max:l.max,step:l.step,disabled:l.disabled,label:l.label,sound:!1,onChange:u=>{c("value",u),a()}})},SegmentedControl:{css:[Ph],shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:cs,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(l,c)=>c("value",cs[(cs.indexOf(l.value)+1)%cs.length]),render:(l,c,a)=>f.jsx(Jd,{label:"Range",value:l.value,size:l.size,disabled:l.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:u=>{u!==l.value&&a(),c("value",u)}})},Button:{css:[Mh],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(l,c,a)=>f.jsx(Eh,{variant:l.variant,size:l.size,disabled:l.disabled,loading:l.loading,arrow:l.arrow,sound:!1,onClick:()=>a(),children:l.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(l,c,a,u)=>f.jsx(Em,{p:l,ctx:u})}},zu=5e-4,Cm=6e3,Eu=60;function jm({stiffness:l,damping:c,mass:a}){let u=0,h=0;const w=.001,b=[0];let E=0,N=0;for(;E<Cm;){const M=(-l*(u-1)-c*h)/a;if(h+=M*w,u+=h*w,E+=1,b.push(u),u>N&&(N=u),Math.abs(u-1)<zu&&Math.abs(h)<zu)break}return{trace:b,settleMs:E,overshoot:Math.max(0,N-1)}}function gs(l){const{trace:c,settleMs:a,overshoot:u}=jm(l),h=[];for(let w=0;w<Eu;w+=1){const b=Math.round(w/(Eu-1)*(c.length-1));h.push(+c[b].toFixed(4))}return h[h.length-1]=1,{easing:`linear(${h.join(", ")})`,settleMs:a,overshoot:u}}const Au=l=>{var c;return((c=l==null?void 0:l.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:c[1].split(",").map(Number))||null};function Nm(l){var u;const c=Au(l);if(c){const h=[];for(let w=0;w<=40;w+=1){const b=w/40,E=3*(1-b)**2*b*c[0]+3*(1-b)*b**2*c[2]+b**3,N=3*(1-b)**2*b*c[1]+3*(1-b)*b**2*c[3]+b**3;h.push([E,N])}return h}const a=(u=l==null?void 0:l.match(/linear\(([^)]+)\)/))==null?void 0:u[1].split(",").map(h=>parseFloat(h));return a?a.map((h,w)=>[w/(a.length-1),h]):[[0,0],[1,1]]}function Pm(l){const c=Nm(l),a=c.map(b=>b[1]),u=Math.min(0,...a),w=Math.max(1,...a)-u||1;return c.map(([b,E],N)=>`${N?"L":"M"}${b.toFixed(3)} ${(1-(E-u)/w).toFixed(3)}`).join(" ")}const _t=(l,c=2)=>+(+l).toFixed(c),gi=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function Iu(l){gi.fillStyle="#000",gi.fillStyle=l;const c=gi.fillStyle;if(c.startsWith("#"))return{hex:c,a:1};const a=c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return a?{hex:"#"+[a[1],a[2],a[3]].map(h=>Math.round(+h).toString(16).padStart(2,"0")).join(""),a:a[4]!==void 0?+a[4]:1}:{hex:"#000000",a:1}}function ys(l,c){if(c>=1)return l.toUpperCase();const a=parseInt(l.slice(1),16);return`rgb(${a>>16&255} ${a>>8&255} ${a&255} / ${+c.toFixed(3)})`}const Mm=l=>String(l).endsWith("ms")?parseFloat(l):parseFloat(l)*1e3;function Hu({label:l,value:c,spring:a,presets:u,asRef:h,onChange:w}){const[b,E]=L.useState(a?"spring":"bezier"),N=Au(c)||[.25,.1,.25,1],M=a||{stiffness:260,damping:22,mass:1},T=O=>{const W=gs(O);w(W.easing,O,W.settleMs)},F=a?gs(a):null;return f.jsxs("div",{className:j.easing,children:[f.jsxs("div",{className:j.editor,children:[f.jsx("svg",{className:j.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:Pm(c)})}),f.jsxs("select",{"aria-label":`${l} mode`,value:b,onChange:O=>{E(O.target.value),O.target.value==="spring"?T(M):w(`cubic-bezier(${N.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(u==null?void 0:u.length)>0&&f.jsxs("select",{"aria-label":`${l} preset`,value:"",onChange:O=>{const W=u.find(Z=>Z.name===O.target.value);W&&(E("bezier"),w(h?`var(${W.name})`:W.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),u.map(O=>f.jsx("option",{value:O.name,children:O.name.replace("--sc-p-motion-easing-","")},O.name))]})]}),b==="bezier"?f.jsx("div",{className:j.editor,children:N.map((O,W)=>f.jsx("input",{type:"number","aria-label":`${l} bezier point ${W+1}`,className:j.num,step:"0.01",value:O,onChange:Z=>{const I=[...N];I[W]=+Z.target.value,w(`cubic-bezier(${I.join(", ")})`,null,null)}},W))}):f.jsxs("div",{className:j.springRows,children:[(()=>{const O=2*Math.PI*Math.sqrt(M.mass/M.stiffness),W=1-M.damping*O/(4*Math.PI*M.mass),Z=(I,Y)=>T({...M,stiffness:+((2*Math.PI/I)**2*M.mass).toFixed(1),damping:+(4*Math.PI*(1-Y)*M.mass/I).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:j.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${l} spring duration`,min:50,max:2e3,step:10,value:Math.round(O*1e3),onChange:I=>Z(+I.target.value/1e3,W)}),f.jsxs("span",{className:j.readout,children:[Math.round(O*1e3),"ms"]})]}),f.jsxs("label",{className:j.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${l} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+W.toFixed(2)),onChange:I=>Z(O,+I.target.value)}),f.jsx("span",{className:j.readout,children:W.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([O,W,Z,I])=>f.jsxs("label",{className:j.mini,children:[O,f.jsx("input",{type:"range",min:W,max:Z,step:I,value:M[O],onChange:Y=>T({...M,[O]:+Y.target.value})}),f.jsx("span",{className:j.readout,children:M[O]})]},O)),F&&f.jsxs("span",{className:j.readout,children:["settles ",F.settleMs,"ms · overshoot ",Math.round(F.overshoot*100),"%"]})]})]})}function Rm(l){const c=[];let a=0,u="";for(const h of l||"")h==="("&&(a+=1),h===")"&&(a-=1),h===","&&a===0?(c.push(u.trim()),u=""):u+=h;return u.trim()&&c.push(u.trim()),c.filter(h=>h&&h!=="none").map(h=>{var O;const w=/\binset\b/.test(h),b=((O=h.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:O[0])||"rgb(0 0 0 / 0.2)",E=h.replace(b,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(W=>parseFloat(W)||0),[N=0,M=0,T=0,F=0]=E;return{inset:w,x:N,y:M,blur:T,spread:F,color:b}})}const Tm=l=>l.map(c=>`${c.inset?"inset ":""}${_t(c.x)}px ${_t(c.y)}px ${_t(c.blur)}px ${_t(c.spread)}px ${c.color}`).join(", ");function Fm({name:l,value:c,onSet:a}){const u=Rm(c),h=(w,b)=>a(Tm(u.map((E,N)=>N===w?{...E,...b}:E)));return f.jsx("div",{className:j.layers,children:u.map((w,b)=>{const E=Iu(w.color),N=w.inset?"inner edge":(w.x<0||w.y<0)&&E.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:j.layer,children:[f.jsxs("span",{className:j.layerHead,children:["layer ",b+1," · ",N]}),f.jsx("div",{className:j.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([M,T,F,O])=>f.jsxs("label",{className:j.mini,children:[M,f.jsx("input",{type:"number",className:j.num,"aria-label":`${l} layer ${b+1} ${M}`,min:T,max:F,step:O,value:_t(w[M]),onChange:W=>h(b,{[M]:+W.target.value})})]},M))}),f.jsxs("div",{className:j.editor,children:[f.jsx("input",{type:"color","aria-label":`${l} layer ${b+1} colour`,value:E.hex,onChange:M=>h(b,{color:ys(M.target.value,E.a)})}),f.jsxs("label",{className:j.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${l} layer ${b+1} opacity`,min:"0",max:"1",step:"0.01",value:E.a,onChange:M=>h(b,{color:ys(E.hex,+M.target.value)})}),f.jsx("span",{className:j.readout,children:_t(E.a)})]})]})]},b)})})}const Dm=[11,12,13,14,16,20].map((l,c)=>[l,["chrome","ui","caption","dense","body","lead"][c],`--sc-p-font-size-${l}`]),Om=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],$m=l=>/^--sc-font-.*-size$/.test(l)?Dm:/^--sc-size-.*icon/.test(l)?Om:null;function Am({name:l,kind:c,shipped:a,value:u,override:h,scope:w,adj:b,spring:E,pin:N,refs:M,easingPresets:T,onSet:F,onAdj:O,onSpring:W,onReset:Z,onPin:I,restOf:Y,onCopyRest:Fe}){const Ee=h!==void 0,[ne,G]=L.useState(!!N);let ie=null;if(c==="color"){const $=Iu(u);ie=f.jsxs("div",{className:j.editor,children:[f.jsx("input",{type:"color","aria-label":`${l} colour`,value:$.hex,onChange:X=>F(ys(X.target.value,$.a))}),f.jsx("input",{type:"range","aria-label":`${l} alpha`,min:"0",max:"1",step:"0.01",value:$.a,onChange:X=>F(ys($.hex,+X.target.value))})]})}else if(c==="length"||c==="number"){const $=parseFloat(u)||0,X=Math.abs(parseFloat(a)||1),be=c==="length"?Math.max(64,X*4):Math.max(2,X*2),We=c==="length"?"px":"",ce=c==="length"?.5:.005;ie=f.jsxs("div",{className:j.editor,children:[f.jsx("input",{type:"range","aria-label":l,min:"0",max:be,step:ce,value:$,onChange:ve=>F(`${ve.target.value}${We}`)}),f.jsx("input",{type:"number","aria-label":`${l} value`,className:j.num,step:ce,value:_t($,3),onChange:ve=>F(`${ve.target.value}${We}`)})]});const Se=$m(l);Se&&(ie=f.jsxs(f.Fragment,{children:[ie,f.jsx("div",{className:j.steps,role:"group","aria-label":`${l} scale`,children:Se.map(([ve,Me,te])=>f.jsxs("button",{type:"button",className:j.step,"aria-pressed":$===ve,onClick:()=>F(`var(${te})`),children:[ve,Me&&f.jsx("span",{className:j.stepRole,children:Me})]},ve))})]}))}else if(c==="time"){const $=Mm(u);ie=f.jsxs("div",{className:j.editor,children:[f.jsx("input",{type:"range","aria-label":l,min:"0",max:"1200",step:"10",value:$,onChange:X=>F(`${X.target.value}ms`)}),f.jsxs("span",{className:j.readout,children:[Math.round($),"ms"]})]})}else c==="easing"?ie=f.jsx(Hu,{label:l,value:u,spring:E,presets:T,asRef:!0,onChange:($,X,be)=>{F($),W(X,be)}}):c==="shadow"?ie=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:j.editor,children:[f.jsxs("label",{className:j.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(b==null?void 0:b.scale)??1,onChange:$=>O({...b,scale:+$.target.value})})]}),f.jsxs("label",{className:j.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(b==null?void 0:b.strength)??1,onChange:$=>O({...b,strength:+$.target.value})})]})]}),f.jsx(Fm,{name:l,value:u,onSet:F})]}):ie=f.jsx("input",{type:"text","aria-label":l,value:u,onChange:$=>F($.target.value)});return f.jsxs("div",{className:`${j.token} ${Ee?j.changed:""}`,children:[f.jsxs("div",{className:j.tokenHead,children:[f.jsxs("code",{className:j.tokenName,children:[l.replace("--sc-",""),Ee&&w&&f.jsx("span",{className:j.scope,children:w==="all"?"both modes":`${w} only`})]}),f.jsxs("span",{className:j.tokenActions,children:[Y&&f.jsx("button",{type:"button",className:j.reset,title:`Set to this concept's ${Y.replace("--sc-","")} value`,onClick:Fe,children:"copy rest"}),f.jsx("button",{type:"button",className:j.reset,"aria-pressed":ne,onClick:()=>G($=>!$),children:"note"}),Ee&&f.jsx("button",{type:"button",className:j.reset,onClick:Z,"aria-label":`Reset ${l}`,children:"reset"})]})]}),ie,(M==null?void 0:M.length)>0&&c!=="easing"&&f.jsxs("select",{"aria-label":`${l} token`,value:h!=null&&h.startsWith("var(")?h.slice(4,-1):"",onChange:$=>$.target.value&&F(`var(${$.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),M.map($=>f.jsx("option",{value:$,children:$.replace("--sc-p-","")},$))]}),ne&&f.jsx("input",{type:"text",className:j.pin,"aria-label":`Note on ${l}`,placeholder:"Note on this value…",value:N||"",onChange:$=>I($.target.value)}),f.jsxs("div",{className:j.values,children:[f.jsxs("span",{title:a,children:["shipped ",a]}),Ee&&f.jsxs("span",{title:u,children:["tuned ",u]})]})]})}function Im({def:l,value:c,spring:a,easingPresets:u,onChange:h,onSpring:w}){const b=`prop-${l.name}`;let E;if(l.type==="boolean")E=f.jsx("input",{id:b,type:"checkbox",checked:!!c,onChange:N=>h(N.target.checked)});else if(l.type==="enum")E=f.jsx("select",{id:b,value:c,onChange:N=>h(N.target.value),children:l.options.map(N=>f.jsx("option",{children:N},N))});else if(l.type==="number")E=f.jsx("input",{id:b,type:"number",className:j.num,min:l.min,max:l.max,value:c,onChange:N=>h(+N.target.value)});else if(l.type==="range")E=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:b,type:"range",min:l.min,max:l.max,step:l.step,value:c,onChange:N=>h(+N.target.value)}),f.jsxs("span",{className:j.readout,children:[c,l.unit||""]})]});else{if(l.type==="easing")return f.jsxs("div",{className:j.propBlock,children:[f.jsx("span",{className:j.propLabel,children:f.jsx("code",{children:l.name})}),f.jsx(Hu,{label:l.name,value:c,spring:a,presets:u,onChange:(N,M,T)=>w(N,M,T)})]});E=f.jsx("input",{id:b,type:"text",value:c,onChange:N=>h(N.target.value)})}return f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:b,children:f.jsx("code",{children:l.name})}),E]})}const pn=!0,Hm="./sounds/",Bm=3,Um=l=>`sc-tune:v2:${l}`,Vm=["all","light","dark"],Bu=l=>/^--sc-(color|shadow)-/.test(l),us=(l,c)=>Bu(l)?c:"all",xs=()=>({all:{},light:{},dark:{}}),ps=(l,c)=>({...l.overrides.all,...l.overrides[c]}),yi=["A","B","C","D"],bi=l=>[...new Set(l)],vs=bi(od.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Wm={color:vs.filter(l=>l.startsWith("--sc-p-color-")&&!l.endsWith("-rgb")),length:vs.filter(l=>/^--sc-p-(space|size|radius|border-width)-/.test(l)),time:vs.filter(l=>l.startsWith("--sc-p-motion-duration-"))},Qm=vs.filter(l=>l.startsWith("--sc-p-motion-easing-"));function Km(l){var h;const c=l.join(`
`),a=bi(((h=c.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:h.map(w=>w.slice(4)))||[]),u=bi(c.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:a.sort(),derived:u}}const Cu=l=>{var c;return((c=l.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:c[1])||"other"};function fs(l){return l?/^(cubic-bezier|ease|linear|steps)/.test(l)?"easing":/^-?[\d.]+m?s$/.test(l)?"time":/px/.test(l)&&/(rgb|#|hsl|color\(|inset)/.test(l)?"shadow":CSS.supports("color",l)?"color":/^-?[\d.]+px$/.test(l)?"length":/^-?[\d.]+$/.test(l)?"number":"text":"text"}const Li=(l,c)=>{if(!l)return{};const a=getComputedStyle(l);return Object.fromEntries(c.map(u=>[u,a.getPropertyValue(u).trim()]))},Zm=(l,c)=>{if(!l)return{};const a=document.createElement("span");a.style.cssText="position:absolute;visibility:hidden;height:0;",l.appendChild(a);const u=Object.fromEntries(c.map(h=>(a.style.width=`var(${h})`,[h,getComputedStyle(a).width])));return a.remove(),u},ju=(l,c)=>{if(!l)return{};const a=document.createElement("div");a.style.display="none";for(const[h,w]of Object.entries(c))a.style.setProperty(h,w);l.appendChild(a);const u=Li(a,Object.keys(c));return a.remove(),u};function Gm(l,c,a){return l.replace(/(-?[\d.]+)px/g,(u,h)=>`${_t(h*c)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(u,h,w)=>`rgba(${h}, ${_t(Math.min(1,w*a),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(u,h)=>`/ ${_t(Math.min(1,h*a),3)})`)}let fn=null;const Nu=new Map;async function ds(l,c,a){if(!l)return;fn=fn||new(window.AudioContext||window.webkitAudioContext),fn.state==="suspended"&&await fn.resume();let u=Nu.get(l);if(!u){const b=await(await fetch(Hm+l)).arrayBuffer();u=await fn.decodeAudioData(b),Nu.set(l,u)}const h=fn.createBufferSource(),w=fn.createGain();w.gain.value=c,h.buffer=u,h.playbackRate.value=a,h.connect(w).connect(fn.destination),h.start()}const Ym=["rest","hover","focus","active"],Xm={hover:":hover",focus:":focus-visible",active:":active"};function qm(l){var h;const c=Xm[l];if(!c)return"";const a=[],u=(w,b)=>{for(const E of w){if(E.cssRules&&E.media){u(E.cssRules,M=>b(`@media ${E.media.mediaText}{${M}}`));continue}if(!E.selectorText||!E.selectorText.includes(c))continue;const N=E.selectorText.split(",").map(M=>M.trim()).filter(M=>M.includes(c)).map(M=>`[data-force='${l}'] ${M.split(c).join("")}`).join(", ");a.push(b(`${N}{${E.style.cssText}}`))}};for(const w of document.styleSheets)if(((h=w.ownerNode)==null?void 0:h.id)!=="sc-tune-force")try{u(w.cssRules,b=>b)}catch{}return a.join(`
`)}const Ei=l=>Object.fromEntries(l.props.map(c=>[c.name,c.default]));function Uu(l,c){var a,u;for(const[h,w]of Object.entries(((a=l.seed)==null?void 0:a.overrides)||{}))Object.values(c.overrides).some(b=>h in b)||(c.overrides.all[h]=w);for(const[h,w]of Object.entries(((u=l.seed)==null?void 0:u.springs)||{})){if(c.springs[h]||Object.values(c.overrides).some(E=>h in E))continue;const b=gs(w);c.springs[h]=w,c.overrides.all[h]=b.easing,c.overrides.all[h.replace(/-easing$/,"-duration")]=`${b.settleMs}ms`}return c}const Vu=(l,c)=>Uu(l,{id:c,overrides:xs(),shadowAdj:xs(),springs:{},pins:{},notes:"",props:Ei(l),sound:{file:l.shippedSound,volume:.7,rate:1}});function Jm(l){const c=nr[l];return{component:l,notes:"",active:"A",concepts:[Vu(c,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:c.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function Pu(l){var c;try{const a=JSON.parse(localStorage.getItem(Um(l))||"null");if((a==null?void 0:a.component)===l&&Array.isArray(a.concepts)){for(const u of a.concepts){if(u.props={...Ei(nr[l]),...u.props},u.springs||(u.springs={}),!u.overrides.all){const h=xs();for(const[b,E]of Object.entries(u.overrides))h[Bu(b)?"dark":"all"][b]=E;const w=xs();for(const[b,E]of Object.entries(u.shadowAdj||{}))w.dark[b]=E;u.overrides=h,u.shadowAdj=w}if(l==="Button")for(const h of Object.values(u.overrides))for(const w of Object.keys(h)){if(!w.startsWith("--sc-font-text-label-chrome-"))continue;const b=w.replace("label-chrome-","label-button-lg-");b in h||(h[b]=h[w]),delete h[w]}}((c=a.view)==null?void 0:c.ground)==="#E3DFD8"&&(a.view.ground="--sc-color-surface-page");for(const u of a.concepts)Uu(nr[l],u);return a}}catch{}return Jm(l)}function ev(){const l=new URLSearchParams(location.search).get("c"),[c,a]=L.useState(nr[l]?l:"Switch"),[u,h]=L.useState(()=>Pu(c)),[w,b]=L.useState(null),[E,N]=L.useState([]),[M,T]=L.useState(!0),[F,O]=L.useState({}),[W,Z]=L.useState({}),[I,Y]=L.useState({}),[Fe,Ee]=L.useState(0),[ne,G]=L.useState(!1),[ie,$]=L.useState(!1),X=L.useRef(null),be=L.useRef({}),We=L.useRef(null),ce=nr[c],Se=ce.kind==="motion",{tokens:ve,derived:Me}=L.useMemo(()=>{const v=Km(ce.css);return{...v,tokens:[...new Set([...v.tokens,...ce.jsTokens||[]])].sort()}},[ce]),te=u.concepts.find(v=>v.id===u.active)||u.concepts[0],lt=L.useMemo(()=>{const v=getComputedStyle(document.documentElement);return Qm.map(S=>({name:S,value:v.getPropertyValue(S).trim()}))},[]);L.useEffect(()=>{fetch("./spec.json").then(v=>v.json()).then(v=>{a(v.component),h(v.state),b({recorded:v.recorded})})},[]),L.useEffect(()=>{},[]);const Qe=v=>{a(v),h(Pu(v)),history.replaceState(null,"",`?c=${v}`)};L.useEffect(()=>{document.documentElement.setAttribute("data-theme",u.view.theme)},[u.view.theme]);const we=u.view.force||"rest";L.useEffect(()=>{let v=document.getElementById("sc-tune-force");v||(v=document.createElement("style"),v.id="sc-tune-force",document.head.appendChild(v)),v.textContent=qm(we)},[we]),L.useLayoutEffect(()=>{var _;O(Li(X.current,ve));const v=Li(X.current,ve);be.current[u.view.theme]=v,Z({...v,...ju(X.current,ps(te,u.view.theme))});const S=(_=We.current)==null?void 0:_.querySelector("[class]");Y(Zm(S?S.closest("label")||S:null,Me))},[ve,Me,te.overrides,u.view.theme,te.props]),L.useEffect(()=>{},[u,c]);const A=L.useCallback(v=>h(S=>S),[]),q=L.useCallback((v,S)=>h(_=>({..._,concepts:_.concepts.map(ue=>ue.id===v?S(ue):ue)})),[]),H=L.useCallback(v=>(S,_)=>q(v,ue=>({...ue,props:{...ue.props,[S]:_}})),[q]),g=v=>A(S=>({...S,concepts:S.concepts.map(_=>_.id===S.active?v(_):_)})),z=u.view.theme,oe=(v,S,_)=>{const ue=us(S,z),se={...v,[ue]:{...v[ue]}};return _===void 0?delete se[ue][S]:se[ue][S]=_,se},le=(v,S)=>g(_=>({..._,overrides:oe(_.overrides,v,S)})),pe=v=>g(S=>{const _={...S.springs};return delete _[v],{...S,overrides:oe(S.overrides,v,void 0),shadowAdj:oe(S.shadowAdj,v,void 0),springs:_}}),fe=(v,S,_)=>g(ue=>{const se={...ue.springs};let he=ue.overrides;if(S){se[v]=S;const Je=v.replace(/-easing$/,"-duration");Je!==v&&ve.includes(Je)&&(he=oe(he,Je,`${_}ms`))}else delete se[v];return{...ue,springs:se,overrides:he}}),ke=(v,S)=>g(_=>({..._,shadowAdj:oe(_.shadowAdj,v,S),overrides:oe(_.overrides,v,Gm(F[v],S.scale??1,S.strength??1))})),ge=(v,S)=>g(_=>({..._,pins:{..._.pins,[v]:S}})),ye=(v,S)=>g(_=>({..._,sound:{..._.sound,[v]:S}})),Oe=(v,S)=>h(_=>({..._,view:{..._.view,[v]:S}})),Ht=ce.props.some(v=>v.name==="disabled"),Wr=v=>h(S=>({...S,view:{...S.view,force:v==="disabled"?"rest":v},concepts:Ht?S.concepts.map(_=>({..._,props:{..._.props,disabled:v==="disabled"}})):S.concepts})),dn=v=>A(S=>{const _=yi.find(he=>!S.concepts.some(Je=>Je.id===he));if(!_)return S;const ue=S.concepts.find(he=>he.id===S.active),se=v?{...structuredClone(ue),id:_,notes:""}:Vu(ce,_);return{...S,concepts:[...S.concepts,se],active:_}}),rr=v=>A(S=>{if(S.concepts.length<2)return S;const _=S.concepts.filter(ue=>ue.id!==v);return{...S,concepts:_,active:_[0].id,pick:S.pick.id===v?{id:null,reason:S.pick.reason}:S.pick}}),Qr=()=>h(v=>{const S=!v.view.blind,_=S?[...v.concepts.map(ue=>ue.id)].sort(()=>Math.random()-.5):null;return{...v,view:{...v.view,blind:S,order:_,compare:S?!0:v.view.compare}}}),Cn=L.useCallback(()=>{Ee(S=>S+1),ce.play&&u.concepts.forEach(S=>ce.play(S.props,H(S.id)));const v=u.concepts.find(S=>S.id===u.active);v!=null&&v.sound.file&&ds(v.sound.file,v.sound.volume,v.sound.rate)},[ce,u.concepts,u.active,H]),jn=Se?Math.max(1200,vi(te.props)*u.view.slow+900):1400*u.view.slow;L.useEffect(()=>{if(!ne)return;const v=setInterval(Cn,jn);return()=>clearInterval(v)},[ne,Cn,jn]);const Kr=ve.filter(v=>fs(F[v])==="time"),Nn=v=>{const S=u.view.ground,_=S.startsWith("--")?{background:`var(${S})`}:u.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:S,"--sc-color-surface-page":S},ue={zoom:u.view.zoom,..._,...v};if(u.view.slow!==1)for(const se of Kr)ue[se]=`calc(${v[se]??F[se]} * ${u.view.slow})`;return ue},Bt=L.useCallback(()=>{const v=X.current,S=_=>_.id;return{tool:"sc-tune",version:Bm,component:c,kind:ce.kind||"component",recorded:new Date().toISOString(),theme:u.view.theme,notes:u.notes,pick:u.pick.id?{concept:u.pick.id,reason:u.pick.reason}:null,concepts:u.concepts.map(_=>{const ue=ju(v,ps(_,u.view.theme));return{id:S(_),notes:_.notes,props:_.props,sound:{..._.sound,shipped:ce.shippedSound,trigger:ce.trigger},tokens:Vm.flatMap(se=>Object.keys(_.overrides[se]).map(he=>{var Yr;const Je=se==="all"?F:be.current[se]||{},Mt=_.overrides[se][he],Gr=se==="all"||se===u.view.theme;return{name:he,mode:se,category:Cu(he),kind:fs(Je[he]||F[he]),shipped:Je[he]??null,tuned:Gr?ue[he]??Mt:Mt,override:Mt,...(Yr=_.shadowAdj[se])!=null&&Yr[he]?{shadowAdjust:_.shadowAdj[se][he]}:{},..._.springs[he]?{spring:{..._.springs[he],...Mu(_.springs[he])}}:{}}})),pins:Object.fromEntries(Object.entries(_.pins).filter(([,se])=>se)),...Se?{motion:{lastFrameMs:vi(_.props),..._.springs["prop:easing"]?{spring:{..._.springs["prop:easing"],...Mu(_.springs["prop:easing"])}}:{}}}:{}}}),derived:I,tokenCount:ve.length,state:u}},[c,ce,Se,u,F,I,ve]);L.useEffect(()=>{window.scTune={export:Bt,component:c}},[Bt,c]);const Ut=L.useMemo(()=>{var S;const v={};for(const _ of ve)(v[S=Cu(_)]||(v[S]=[])).push(_);return v},[ve]),or=u.view.compare?u.view.blind&&u.view.order?u.view.order.map(v=>u.concepts.find(S=>S.id===v)).filter(Boolean):u.concepts:[te],sr={replay:Fe,slow:u.view.slow};E.filter(v=>!M||v.seconds<=1);const lr=ps(te,u.view.theme),Zr=Object.keys(lr).length;return f.jsxs("div",{className:j.app,children:[f.jsxs("header",{className:j.bar,children:[f.jsx("span",{className:j.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:c,disabled:pn,onChange:v=>Qe(v.target.value),children:Object.keys(nr).map(v=>f.jsx("option",{children:v},v))}),f.jsxs("span",{className:j.meta,children:[Se?"choreography":`${ve.length} tokens`," · ",u.concepts.length," concept",u.concepts.length>1?"s":""]}),w&&f.jsxs("span",{className:j.meta,children:["snapshot · recorded ",w.recorded]}),f.jsx("span",{className:j.spacer}),f.jsx("button",{type:"button",onClick:Cn,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":ne,onClick:()=>G(v=>!v),children:ne?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:u.view.slow,onChange:v=>Oe("slow",+v.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":u.view.compare,disabled:u.concepts.length<2,onClick:()=>Oe("compare",!u.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":u.view.blind,disabled:u.concepts.length<2,onClick:Qr,children:u.view.blind?"Reveal":"Blind"}),!pn]}),f.jsx("main",{className:j.stages,children:f.jsxs(rd,{enabled:!1,children:[!u.view.blind&&f.jsxs("section",{className:j.stageWrap,"aria-label":Se?"Default":"Shipped",children:[f.jsx("h2",{className:j.stageLabel,children:Se?"Default":"Shipped"}),f.jsx("div",{className:j.stage,style:Nn({}),ref:X,inert:"","data-force":we,children:ce.render(Se?Ei(ce):te.props,()=>{},()=>{},sr)})]}),u.view.blind&&f.jsx("div",{ref:X,hidden:!0}),or.map((v,S)=>{const _=u.view.blind?`Concept ${S+1}`:`${v.id}${v.id===u.active?" · editing":""}${u.pick.id===v.id?" · picked":""}`;return f.jsxs("section",{className:`${j.stageWrap} ${v.id===u.active&&!u.view.blind?j.activeStage:""}`,"aria-label":_,children:[f.jsxs("h2",{className:j.stageLabel,children:[u.view.compare&&!u.view.blind?f.jsx("button",{type:"button",className:j.stageSelect,onClick:()=>h(ue=>({...ue,active:v.id})),children:_}):_,Se&&f.jsxs("span",{className:j.readout,children:[" · last frame ",vi(v.props),"ms"]})]}),f.jsx("div",{className:j.stage,style:Nn(ps(v,z)),ref:v.id===u.active?We:void 0,"data-force":we,children:ce.render(v.props,H(v.id),()=>ds(v.sound.file,v.sound.volume,v.sound.rate),sr)})]},v.id)})]})}),f.jsxs("aside",{className:j.panel,children:[f.jsxs("fieldset",{className:j.group,disabled:pn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:j.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:u.notes,onChange:v=>h(S=>({...S,notes:v.target.value}))})]}),f.jsxs("fieldset",{className:j.group,disabled:pn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:j.tabs,role:"tablist","aria-label":"Concepts",children:[u.concepts.map(v=>f.jsx("button",{type:"button",role:"tab","aria-selected":v.id===u.active,className:j.tab,onClick:()=>h(S=>({...S,active:v.id})),children:v.id},v.id)),f.jsx("button",{type:"button",className:j.tab,disabled:u.concepts.length>=yi.length,onClick:()=>dn(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:j.tab,disabled:u.concepts.length>=yi.length,onClick:()=>dn(!1),children:"new"}),f.jsxs("button",{type:"button",className:j.tab,disabled:u.concepts.length<2,onClick:()=>rr(te.id),children:["remove ",te.id]})]}),f.jsx("textarea",{className:j.notes,"aria-label":`Notes on concept ${te.id}`,placeholder:`What concept ${te.id} is trying…`,value:te.notes,onChange:v=>g(S=>({...S,notes:v.target.value}))}),u.concepts.length>1&&f.jsxs("div",{className:j.pick,children:[f.jsx("span",{className:j.propLabel,children:f.jsx("code",{children:"pick"})}),u.concepts.map(v=>f.jsxs("label",{className:j.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:u.pick.id===v.id,onChange:()=>h(S=>({...S,pick:{...S.pick,id:v.id}}))})," ",v.id]},v.id)),f.jsx("textarea",{className:j.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:u.pick.reason,onChange:v=>h(S=>({...S,pick:{...S.pick,reason:v.target.value}}))})]})]}),f.jsxs("fieldset",{className:j.group,disabled:pn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:u.view.theme,onChange:v=>Oe("theme",v.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:u.view.zoom,onChange:v=>Oe("zoom",+v.target.value)}),f.jsxs("span",{className:j.readout,children:[u.view.zoom,"×"]})]}),f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:u.view.ground,onChange:v=>Oe("ground",v.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(v=>f.jsx("option",{value:v,children:v.replace("--sc-color-","")},v))})]})]}),f.jsxs("fieldset",{className:j.group,disabled:pn,children:[f.jsxs("legend",{children:[Se?"Motion":"Props"," · concept ",te.id]}),(()=>{const v=ce.props.map(S=>f.jsx(Im,{def:S,value:te.props[S.name],spring:te.springs[`prop:${S.name}`],easingPresets:lt,onChange:_=>H(te.id)(S.name,_),onSpring:(_,ue,se)=>g(he=>{const Je={...he.springs},Mt={...he.props,[S.name]:_};return ue?(Je[`prop:${S.name}`]=ue,S.durationProp&&(Mt[S.durationProp]=se)):delete Je[`prop:${S.name}`],{...he,springs:Je,props:Mt}})},S.name));return Se||v.splice(Math.min(3,v.length),0,f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Ht&&te.props.disabled?"disabled":we,onChange:S=>Wr(S.target.value),children:[Ym.map(S=>f.jsx("option",{value:S,children:S==="rest"?"default":S},S)),Ht&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),v})()]}),f.jsxs("fieldset",{className:j.group,disabled:pn,children:[f.jsxs("legend",{children:["Sound · ",ce.trigger]}),f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:te.sound.volume,onChange:v=>ye("volume",+v.target.value)}),f.jsx("span",{className:j.readout,children:te.sound.volume})]}),f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:te.sound.rate,onChange:v=>ye("rate",+v.target.value)}),f.jsxs("span",{className:j.readout,children:[te.sound.rate,"×"]})]}),f.jsxs("div",{className:j.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:M,onChange:v=>T(v.target.checked)})]}),f.jsxs("ul",{className:j.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:j.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!te.sound.file,onChange:()=>ye("file",null)})," silent"]})}),(te.sound.file?[{file:te.sound.file,seconds:""}]:[]).map(v=>f.jsxs("li",{className:`${j.sound} ${v.file===ce.shippedSound?j.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:te.sound.file===v.file,onChange:()=>{ye("file",v.file),ds(v.file,te.sound.volume,te.sound.rate)}}),v.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:j.readout,children:[v.seconds&&`${v.seconds}s`,v.file===ce.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${v.file}`,onClick:()=>ds(v.file,te.sound.volume,te.sound.rate),children:"play"})]},v.file))]})]}),!Se&&f.jsxs("p",{className:j.meta,children:[Zr," of ",ve.length," tokens tuned in concept ",te.id,", ",z," mode. Colour and shadow edits apply to ",z," only; size, type and motion apply to both modes."]}),Object.entries(Ut).map(([v,S])=>f.jsxs("fieldset",{className:j.group,disabled:pn,children:[f.jsxs("legend",{children:[v," · ",S.length]}),S.map(_=>{var ue;return f.jsx(Am,{name:_,kind:fs(F[_]),shipped:F[_],value:W[_]||F[_]||"",override:lr[_],scope:te.overrides[us(_,z)][_]!==void 0?us(_,z):te.overrides.all[_]!==void 0?"all":null,adj:(ue=te.shadowAdj[us(_,z)])==null?void 0:ue[_],spring:te.springs[_],pin:te.pins[_],refs:Wm[fs(F[_])],easingPresets:lt,onSet:se=>le(_,se),onAdj:se=>ke(_,se),onSpring:(se,he)=>fe(_,se,he),onReset:()=>pe(_),restOf:_.endsWith("-hover")&&ve.includes(_.slice(0,-6))?_.slice(0,-6):null,onCopyRest:()=>le(_,W[_.slice(0,-6)]||F[_.slice(0,-6)]),onPin:se=>ge(_,se)},`${te.id}${z}${_}`)})]},v)),Me.length>0&&f.jsxs("fieldset",{className:j.group,children:[f.jsx("legend",{children:"derived · read-only"}),Me.map(v=>f.jsxs("div",{className:j.values,children:[f.jsx("code",{children:v})," ",I[v]]},v))]})]})]})}function Mu(l){const c=gs(l);return{settleMs:c.settleMs,overshoot:_t(c.overshoot,3),framerMotion:{type:"spring",stiffness:l.stiffness,damping:l.damping,mass:l.mass}}}const xi=document.getElementById("root");xi.dataset.mounted||(xi.dataset.mounted="true",Yf.createRoot(xi).render(f.jsx(ev,{})));
