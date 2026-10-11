(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(p){if(p.ep)return;p.ep=!0;const h=l(p);fetch(p.href,h)}})();function lf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rl={exports:{}},vs={},Vl={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku;function cf(){if(Ku)return ye;Ku=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),b=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,C={};function $(k,j,de){this.props=k,this.context=j,this.refs=C,this.updater=de||N}$.prototype.isReactComponent={},$.prototype.setState=function(k,j){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,j,"setState")},$.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function X(){}X.prototype=$.prototype;function Q(k,j,de){this.props=k,this.context=j,this.refs=C,this.updater=de||N}var K=Q.prototype=new X;K.constructor=Q,V(K,$.prototype),K.isPureReactComponent=!0;var J=Array.isArray,re=Object.prototype.hasOwnProperty,R={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function ue(k,j,de){var ge,be={},ke=null,Me=null;if(j!=null)for(ge in j.ref!==void 0&&(Me=j.ref),j.key!==void 0&&(ke=""+j.key),j)re.call(j,ge)&&!Y.hasOwnProperty(ge)&&(be[ge]=j[ge]);var Le=arguments.length-2;if(Le===1)be.children=de;else if(1<Le){for(var Ee=Array(Le),De=0;De<Le;De++)Ee[De]=arguments[De+2];be.children=Ee}if(k&&k.defaultProps)for(ge in Le=k.defaultProps,Le)be[ge]===void 0&&(be[ge]=Le[ge]);return{$$typeof:s,type:k,key:ke,ref:Me,props:be,_owner:R.current}}function pe(k,j){return{$$typeof:s,type:k.type,key:j,ref:k.ref,props:k.props,_owner:k._owner}}function te(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function ae(k){var j={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(de){return j[de]})}var I=/\/+/g;function H(k,j){return typeof k=="object"&&k!==null&&k.key!=null?ae(""+k.key):j.toString(36)}function P(k,j,de,ge,be){var ke=typeof k;(ke==="undefined"||ke==="boolean")&&(k=null);var Me=!1;if(k===null)Me=!0;else switch(ke){case"string":case"number":Me=!0;break;case"object":switch(k.$$typeof){case s:case i:Me=!0}}if(Me)return Me=k,be=be(Me),k=ge===""?"."+H(Me,0):ge,J(be)?(de="",k!=null&&(de=k.replace(I,"$&/")+"/"),P(be,j,de,"",function(De){return De})):be!=null&&(te(be)&&(be=pe(be,de+(!be.key||Me&&Me.key===be.key?"":(""+be.key).replace(I,"$&/")+"/")+k)),j.push(be)),1;if(Me=0,ge=ge===""?".":ge+":",J(k))for(var Le=0;Le<k.length;Le++){ke=k[Le];var Ee=ge+H(ke,Le);Me+=P(ke,j,de,Ee,be)}else if(Ee=S(k),typeof Ee=="function")for(k=Ee.call(k),Le=0;!(ke=k.next()).done;)ke=ke.value,Ee=ge+H(ke,Le++),Me+=P(ke,j,de,Ee,be);else if(ke==="object")throw j=String(k),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Me}function xe(k,j,de){if(k==null)return k;var ge=[],be=0;return P(k,ge,"","",function(ke){return j.call(de,ke,be++)}),ge}function q(k){if(k._status===-1){var j=k._result;j=j(),j.then(function(de){(k._status===0||k._status===-1)&&(k._status=1,k._result=de)},function(de){(k._status===0||k._status===-1)&&(k._status=2,k._result=de)}),k._status===-1&&(k._status=0,k._result=j)}if(k._status===1)return k._result.default;throw k._result}var ce={current:null},U={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:U,ReactCurrentOwner:R};function G(){throw Error("act(...) is not supported in production builds of React.")}return ye.Children={map:xe,forEach:function(k,j,de){xe(k,function(){j.apply(this,arguments)},de)},count:function(k){var j=0;return xe(k,function(){j++}),j},toArray:function(k){return xe(k,function(j){return j})||[]},only:function(k){if(!te(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ye.Component=$,ye.Fragment=l,ye.Profiler=p,ye.PureComponent=Q,ye.StrictMode=u,ye.Suspense=x,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ye.act=G,ye.cloneElement=function(k,j,de){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ge=V({},k.props),be=k.key,ke=k.ref,Me=k._owner;if(j!=null){if(j.ref!==void 0&&(ke=j.ref,Me=R.current),j.key!==void 0&&(be=""+j.key),k.type&&k.type.defaultProps)var Le=k.type.defaultProps;for(Ee in j)re.call(j,Ee)&&!Y.hasOwnProperty(Ee)&&(ge[Ee]=j[Ee]===void 0&&Le!==void 0?Le[Ee]:j[Ee])}var Ee=arguments.length-2;if(Ee===1)ge.children=de;else if(1<Ee){Le=Array(Ee);for(var De=0;De<Ee;De++)Le[De]=arguments[De+2];ge.children=Le}return{$$typeof:s,type:k.type,key:be,ref:ke,props:ge,_owner:Me}},ye.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:h,_context:k},k.Consumer=k},ye.createElement=ue,ye.createFactory=function(k){var j=ue.bind(null,k);return j.type=k,j},ye.createRef=function(){return{current:null}},ye.forwardRef=function(k){return{$$typeof:v,render:k}},ye.isValidElement=te,ye.lazy=function(k){return{$$typeof:z,_payload:{_status:-1,_result:k},_init:q}},ye.memo=function(k,j){return{$$typeof:_,type:k,compare:j===void 0?null:j}},ye.startTransition=function(k){var j=U.transition;U.transition={};try{k()}finally{U.transition=j}},ye.unstable_act=G,ye.useCallback=function(k,j){return ce.current.useCallback(k,j)},ye.useContext=function(k){return ce.current.useContext(k)},ye.useDebugValue=function(){},ye.useDeferredValue=function(k){return ce.current.useDeferredValue(k)},ye.useEffect=function(k,j){return ce.current.useEffect(k,j)},ye.useId=function(){return ce.current.useId()},ye.useImperativeHandle=function(k,j,de){return ce.current.useImperativeHandle(k,j,de)},ye.useInsertionEffect=function(k,j){return ce.current.useInsertionEffect(k,j)},ye.useLayoutEffect=function(k,j){return ce.current.useLayoutEffect(k,j)},ye.useMemo=function(k,j){return ce.current.useMemo(k,j)},ye.useReducer=function(k,j,de){return ce.current.useReducer(k,j,de)},ye.useRef=function(k){return ce.current.useRef(k)},ye.useState=function(k){return ce.current.useState(k)},ye.useSyncExternalStore=function(k,j,de){return ce.current.useSyncExternalStore(k,j,de)},ye.useTransition=function(){return ce.current.useTransition()},ye.version="18.3.1",ye}var qu;function oi(){return qu||(qu=1,Vl.exports=cf()),Vl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function uf(){if(Ju)return vs;Ju=1;var s=oi(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(v,x,_){var z,b={},S=null,N=null;_!==void 0&&(S=""+_),x.key!==void 0&&(S=""+x.key),x.ref!==void 0&&(N=x.ref);for(z in x)u.call(x,z)&&!h.hasOwnProperty(z)&&(b[z]=x[z]);if(v&&v.defaultProps)for(z in x=v.defaultProps,x)b[z]===void 0&&(b[z]=x[z]);return{$$typeof:i,type:v,key:S,ref:N,props:b,_owner:p.current}}return vs.Fragment=l,vs.jsx=m,vs.jsxs=m,vs}var Xu;function df(){return Xu||(Xu=1,Rl.exports=uf()),Rl.exports}var f=df(),c=oi(),$o={},Zl={exports:{}},ct={},Dl={exports:{}},Ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function pf(){return ed||(ed=1,(function(s){function i(U,le){var G=U.length;U.push(le);e:for(;0<G;){var k=G-1>>>1,j=U[k];if(0<p(j,le))U[k]=le,U[G]=j,G=k;else break e}}function l(U){return U.length===0?null:U[0]}function u(U){if(U.length===0)return null;var le=U[0],G=U.pop();if(G!==le){U[0]=G;e:for(var k=0,j=U.length,de=j>>>1;k<de;){var ge=2*(k+1)-1,be=U[ge],ke=ge+1,Me=U[ke];if(0>p(be,G))ke<j&&0>p(Me,be)?(U[k]=Me,U[ke]=G,k=ke):(U[k]=be,U[ge]=G,k=ge);else if(ke<j&&0>p(Me,G))U[k]=Me,U[ke]=G,k=ke;else break e}}return le}function p(U,le){var G=U.sortIndex-le.sortIndex;return G!==0?G:U.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,v=m.now();s.unstable_now=function(){return m.now()-v}}var x=[],_=[],z=1,b=null,S=3,N=!1,V=!1,C=!1,$=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(U){for(var le=l(_);le!==null;){if(le.callback===null)u(_);else if(le.startTime<=U)u(_),le.sortIndex=le.expirationTime,i(x,le);else break;le=l(_)}}function J(U){if(C=!1,K(U),!V)if(l(x)!==null)V=!0,q(re);else{var le=l(_);le!==null&&ce(J,le.startTime-U)}}function re(U,le){V=!1,C&&(C=!1,X(ue),ue=-1),N=!0;var G=S;try{for(K(le),b=l(x);b!==null&&(!(b.expirationTime>le)||U&&!ae());){var k=b.callback;if(typeof k=="function"){b.callback=null,S=b.priorityLevel;var j=k(b.expirationTime<=le);le=s.unstable_now(),typeof j=="function"?b.callback=j:b===l(x)&&u(x),K(le)}else u(x);b=l(x)}if(b!==null)var de=!0;else{var ge=l(_);ge!==null&&ce(J,ge.startTime-le),de=!1}return de}finally{b=null,S=G,N=!1}}var R=!1,Y=null,ue=-1,pe=5,te=-1;function ae(){return!(s.unstable_now()-te<pe)}function I(){if(Y!==null){var U=s.unstable_now();te=U;var le=!0;try{le=Y(!0,U)}finally{le?H():(R=!1,Y=null)}}else R=!1}var H;if(typeof Q=="function")H=function(){Q(I)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,xe=P.port2;P.port1.onmessage=I,H=function(){xe.postMessage(null)}}else H=function(){$(I,0)};function q(U){Y=U,R||(R=!0,H())}function ce(U,le){ue=$(function(){U(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_continueExecution=function(){V||N||(V=!0,q(re))},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return l(x)},s.unstable_next=function(U){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var G=S;S=le;try{return U()}finally{S=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(U,le){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=S;S=U;try{return le()}finally{S=G}},s.unstable_scheduleCallback=function(U,le,G){var k=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?k+G:k):G=k,U){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=G+j,U={id:z++,callback:le,priorityLevel:U,startTime:G,expirationTime:j,sortIndex:-1},G>k?(U.sortIndex=G,i(_,U),l(x)===null&&U===l(_)&&(C?(X(ue),ue=-1):C=!0,ce(J,G-k))):(U.sortIndex=j,i(x,U),V||N||(V=!0,q(re))),U},s.unstable_shouldYield=ae,s.unstable_wrapCallback=function(U){var le=S;return function(){var G=S;S=le;try{return U.apply(this,arguments)}finally{S=G}}}})(Ol)),Ol}var td;function ff(){return td||(td=1,Dl.exports=pf()),Dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function hf(){if(nd)return ct;nd=1;var s=oi(),i=ff();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)u.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},b={};function S(e){return x.call(b,e)?!0:x.call(z,e)?!1:_.test(e)?b[e]=!0:(z[e]=!0,!1)}function N(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||N(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,n,r,o,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){$[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){$[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){$[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(X,Q);$[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(X,Q);$[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(X,Q);$[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){$[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),$.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){$[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,n,r){var o=$.hasOwnProperty(t)?$[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,o,r)&&(n=null),r||o===null?S(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var J=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),R=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),ae=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),U=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,k;function j(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var de=!1;function ge(e,t){if(!e||de)return"";de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var r=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){r=M}e.call(t.prototype)}else{try{throw Error()}catch(M){r=M}e()}}catch(M){if(M&&r&&typeof M.stack=="string"){for(var o=M.stack.split(`
`),a=r.stack.split(`
`),d=o.length-1,g=a.length-1;1<=d&&0<=g&&o[d]!==a[g];)g--;for(;1<=d&&0<=g;d--,g--)if(o[d]!==a[g]){if(d!==1||g!==1)do if(d--,g--,0>g||o[d]!==a[g]){var y=`
`+o[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{de=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?j(e):""}function be(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case R:return"Portal";case pe:return"Profiler";case ue:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case te:return(e._context.displayName||"Context")+".Provider";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xe:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function Me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=Ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){r=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kt(e){e._valueTracker||(e._valueTracker=De(e))}function bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jr(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yn(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function Wn(e,t){Yn(e,t);var n=Le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qn(e,t.type,Le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function As(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qn(e,t,n){(t!=="number"||zn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qt=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Le(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Nr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Le(n)}}function Tr(e,t){var n=Le(t.value),r=Le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function A(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function F(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?A(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var T,we=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(T=T||document.createElement("div"),T.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=T.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(e){rt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]})});function Zt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function zs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Zt(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ls=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t){if(t){if(Ls[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,Gn=null,Kn=null;function fi(e){if(e=ns(e)){if(typeof ea!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Gs(t),ea(e.stateNode,e.type,t))}}function hi(e){Gn?Kn?Kn.push(e):Kn=[e]:Gn=e}function mi(){if(Gn){var e=Gn,t=Kn;if(Kn=Gn=null,fi(e),t)for(e=0;e<t.length;e++)fi(t[e])}}function gi(e,t){return e(t)}function vi(){}var ta=!1;function xi(e,t,n){if(ta)return e(t,n);ta=!0;try{return gi(e,t,n)}finally{ta=!1,(Gn!==null||Kn!==null)&&(vi(),mi())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=Gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var na=!1;if(v)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){na=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{na=!1}function fp(e,t,n,r,o,a,d,g,y){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(O){this.onError(O)}}var Hr=!1,Es=null,Ss=!1,ra=null,hp={onError:function(e){Hr=!0,Es=e}};function mp(e,t,n,r,o,a,d,g,y){Hr=!1,Es=null,fp.apply(hp,arguments)}function gp(e,t,n,r,o,a,d,g,y){if(mp.apply(this,arguments),Hr){if(Hr){var M=Es;Hr=!1,Es=null}else throw Error(l(198));Ss||(Ss=!0,ra=M)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wi(e){if(Ln(e)!==e)throw Error(l(188))}function vp(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return wi(o),e;if(a===r)return wi(o),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=o,r=a;else{for(var d=!1,g=o.child;g;){if(g===n){d=!0,n=o,r=a;break}if(g===r){d=!0,r=o,n=a;break}g=g.sibling}if(!d){for(g=a.child;g;){if(g===n){d=!0,n=a,r=o;break}if(g===r){d=!0,r=a,n=o;break}g=g.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function bi(e){return e=vp(e),e!==null?ki(e):null}function ki(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ki(e);if(t!==null)return t;e=e.sibling}return null}var Ai=i.unstable_scheduleCallback,_i=i.unstable_cancelCallback,xp=i.unstable_shouldYield,yp=i.unstable_requestPaint,He=i.unstable_now,wp=i.unstable_getCurrentPriorityLevel,sa=i.unstable_ImmediatePriority,zi=i.unstable_UserBlockingPriority,Ms=i.unstable_NormalPriority,bp=i.unstable_LowPriority,Li=i.unstable_IdlePriority,Cs=null,Ft=null;function kp(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:zp,Ap=Math.log,_p=Math.LN2;function zp(e){return e>>>=0,e===0?32:31-(Ap(e)/_p|0)|0}var js=64,Ns=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~o;g!==0?r=Rr(g):(a&=d,a!==0&&(r=Rr(a)))}else d=n&~o,d!==0?r=Rr(d):a!==0&&(r=Rr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),o=1<<n,r|=e[n],t&=~o;return r}function Lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ep(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-At(a),g=1<<d,y=o[d];y===-1?((g&n)===0||(g&r)!==0)&&(o[d]=Lp(g,t)):y<=t&&(e.expiredLanes|=g),a&=~g}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ei(){var e=js;return js<<=1,(js&4194240)===0&&(js=64),e}function aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function Sp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-At(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function la(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Se=0;function Si(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Mi,ia,Ci,ji,Ni,ca=!1,Ts=[],Xt=null,en=null,tn=null,Zr=new Map,Dr=new Map,nn=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fi(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function Or(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ns(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Cp(e,t,n,r,o){switch(t){case"focusin":return Xt=Or(Xt,e,t,n,r,o),!0;case"dragenter":return en=Or(en,e,t,n,r,o),!0;case"mouseover":return tn=Or(tn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Zr.set(a,Or(Zr.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Dr.set(a,Or(Dr.get(a)||null,e,t,n,r,o)),!0}return!1}function Ti(e){var t=En(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=yi(n),t!==null){e.blockedOn=t,Ni(e.priority,function(){Ci(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jo=r,n.target.dispatchEvent(r),Jo=null}else return t=ns(n),t!==null&&ia(t),e.blockedOn=n,!1;t.shift()}return!0}function $i(e,t,n){$s(e)&&n.delete(t)}function jp(){ca=!1,Xt!==null&&$s(Xt)&&(Xt=null),en!==null&&$s(en)&&(en=null),tn!==null&&$s(tn)&&(tn=null),Zr.forEach($i),Dr.forEach($i)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jp)))}function Br(e){function t(o){return Ir(o,e)}if(0<Ts.length){Ir(Ts[0],e);for(var n=1;n<Ts.length;n++){var r=Ts[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Ir(Xt,e),en!==null&&Ir(en,e),tn!==null&&Ir(tn,e),Zr.forEach(t),Dr.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Ti(n),n.blockedOn===null&&nn.shift()}var qn=J.ReactCurrentBatchConfig,Ps=!0;function Np(e,t,n,r){var o=Se,a=qn.transition;qn.transition=null;try{Se=1,ua(e,t,n,r)}finally{Se=o,qn.transition=a}}function Fp(e,t,n,r){var o=Se,a=qn.transition;qn.transition=null;try{Se=4,ua(e,t,n,r)}finally{Se=o,qn.transition=a}}function ua(e,t,n,r){if(Ps){var o=da(e,t,n,r);if(o===null)Sa(e,t,r,Hs,n),Fi(e,r);else if(Cp(o,e,t,n,r))r.stopPropagation();else if(Fi(e,r),t&4&&-1<Mp.indexOf(e)){for(;o!==null;){var a=ns(o);if(a!==null&&Mi(a),a=da(e,t,n,r),a===null&&Sa(e,t,r,Hs,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Sa(e,t,r,null,n)}}var Hs=null;function da(e,t,n,r){if(Hs=null,e=Xo(r),e=En(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hs=e,null}function Pi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wp()){case sa:return 1;case zi:return 4;case Ms:case bp:return 16;case Li:return 536870912;default:return 16}default:return 16}}var rn=null,pa=null,Rs=null;function Hi(){if(Rs)return Rs;var e,t=pa,n=t.length,r,o="value"in rn?rn.value:rn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===o[a-r];r++);return Rs=o.slice(e,1<r?1-r:void 0)}function Vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function Ri(){return!1}function ut(e){function t(n,r,o,a,d){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(a):a[g]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zs:Ri,this.isPropagationStopped=Ri,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fa=ut(Jn),Ur=G({},Jn,{view:0,detail:0}),Tp=ut(Ur),ha,ma,Yr,Ds=G({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(ha=e.screenX-Yr.screenX,ma=e.screenY-Yr.screenY):ma=ha=0,Yr=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Vi=ut(Ds),$p=G({},Ds,{dataTransfer:0}),Pp=ut($p),Hp=G({},Ur,{relatedTarget:0}),ga=ut(Hp),Rp=G({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=ut(Rp),Zp=G({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=ut(Zp),Op=G({},Jn,{data:0}),Zi=ut(Op),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Up[e])?!!t[e]:!1}function va(){return Yp}var Wp=G({},Ur,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qp=ut(Wp),Gp=G({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Di=ut(Gp),Kp=G({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),qp=ut(Kp),Jp=G({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=ut(Jp),e0=G({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=ut(e0),n0=[9,13,27,32],xa=v&&"CompositionEvent"in window,Wr=null;v&&"documentMode"in document&&(Wr=document.documentMode);var r0=v&&"TextEvent"in window&&!Wr,Oi=v&&(!xa||Wr&&8<Wr&&11>=Wr),Ii=" ",Bi=!1;function Ui(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function s0(e,t){switch(e){case"compositionend":return Yi(t);case"keypress":return t.which!==32?null:(Bi=!0,Ii);case"textInput":return e=t.data,e===Ii&&Bi?null:e;default:return null}}function o0(e,t){if(Xn)return e==="compositionend"||!xa&&Ui(e,t)?(e=Hi(),Rs=pa=rn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oi&&t.locale!=="ko"?null:t.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a0[e.type]:t==="textarea"}function Qi(e,t,n,r){hi(r),t=Ys(t,"onChange"),0<t.length&&(n=new fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,Gr=null;function l0(e){pc(e,0)}function Os(e){var t=sr(e);if(bs(t))return e}function i0(e,t){if(e==="change")return t}var Gi=!1;if(v){var ya;if(v){var wa="oninput"in document;if(!wa){var Ki=document.createElement("div");Ki.setAttribute("oninput","return;"),wa=typeof Ki.oninput=="function"}ya=wa}else ya=!1;Gi=ya&&(!document.documentMode||9<document.documentMode)}function qi(){Qr&&(Qr.detachEvent("onpropertychange",Ji),Gr=Qr=null)}function Ji(e){if(e.propertyName==="value"&&Os(Gr)){var t=[];Qi(t,Gr,e,Xo(e)),xi(l0,t)}}function c0(e,t,n){e==="focusin"?(qi(),Qr=t,Gr=n,Qr.attachEvent("onpropertychange",Ji)):e==="focusout"&&qi()}function u0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Os(Gr)}function d0(e,t){if(e==="click")return Os(t)}function p0(e,t){if(e==="input"||e==="change")return Os(t)}function f0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:f0;function Kr(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!x.call(t,o)||!_t(e[o],t[o]))return!1}return!0}function Xi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var n=Xi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xi(n)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nc(){for(var e=window,t=zn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zn(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h0(e){var t=nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(r!==null&&ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ec(n,a);var d=ec(n,r);o&&d&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m0=v&&"documentMode"in document&&11>=document.documentMode,er=null,ka=null,qr=null,Aa=!1;function rc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||er==null||er!==zn(r)||(r=er,"selectionStart"in r&&ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Kr(qr,r)||(qr=r,r=Ys(ka,"onSelect"),0<r.length&&(t=new fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},_a={},sc={};v&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Bs(e){if(_a[e])return _a[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sc)return _a[e]=t[n];return e}var oc=Bs("animationend"),ac=Bs("animationiteration"),lc=Bs("animationstart"),ic=Bs("transitionend"),cc=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){cc.set(e,t),h(t,[e])}for(var za=0;za<uc.length;za++){var La=uc[za],g0=La.toLowerCase(),v0=La[0].toUpperCase()+La.slice(1);sn(g0,"on"+v0)}sn(oc,"onAnimationEnd"),sn(ac,"onAnimationIteration"),sn(lc,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(ic,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gp(r,t,void 0,e),e.currentTarget=null}function pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var d=r.length-1;0<=d;d--){var g=r[d],y=g.instance,M=g.currentTarget;if(g=g.listener,y!==a&&o.isPropagationStopped())break e;dc(o,g,M),a=y}else for(d=0;d<r.length;d++){if(g=r[d],y=g.instance,M=g.currentTarget,g=g.listener,y!==a&&o.isPropagationStopped())break e;dc(o,g,M),a=y}}}if(Ss)throw e=ra,Ss=!1,ra=null,e}function je(e,t){var n=t[Ta];n===void 0&&(n=t[Ta]=new Set);var r=e+"__bubble";n.has(r)||(fc(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),fc(n,e,r,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Us]){e[Us]=!0,u.forEach(function(n){n!=="selectionchange"&&(x0.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,Ea("selectionchange",!1,t))}}function fc(e,t,n,r){switch(Pi(t)){case 1:var o=Np;break;case 4:o=Fp;break;default:o=ua}n=o.bind(null,t,n,e),o=void 0,!na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Sa(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var g=r.stateNode.containerInfo;if(g===o||g.nodeType===8&&g.parentNode===o)break;if(d===4)for(d=r.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===o||y.nodeType===8&&y.parentNode===o))return;d=d.return}for(;g!==null;){if(d=En(g),d===null)return;if(y=d.tag,y===5||y===6){r=a=d;continue e}g=g.parentNode}}r=r.return}xi(function(){var M=a,O=Xo(n),B=[];e:{var Z=cc.get(e);if(Z!==void 0){var ee=fa,se=e;switch(e){case"keypress":if(Vs(n)===0)break e;case"keydown":case"keyup":ee=Qp;break;case"focusin":se="focus",ee=ga;break;case"focusout":se="blur",ee=ga;break;case"beforeblur":case"afterblur":ee=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Vi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=qp;break;case oc:case ac:case lc:ee=Vp;break;case ic:ee=Xp;break;case"scroll":ee=Tp;break;case"wheel":ee=t0;break;case"copy":case"cut":case"paste":ee=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=Di}var oe=(t&4)!==0,Re=!oe&&e==="scroll",L=oe?Z!==null?Z+"Capture":null:Z;oe=[];for(var w=M,E;w!==null;){E=w;var W=E.stateNode;if(E.tag===5&&W!==null&&(E=W,L!==null&&(W=$r(w,L),W!=null&&oe.push(es(w,W,E)))),Re)break;w=w.return}0<oe.length&&(Z=new ee(Z,se,null,n,O),B.push({event:Z,listeners:oe}))}}if((t&7)===0){e:{if(Z=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",Z&&n!==Jo&&(se=n.relatedTarget||n.fromElement)&&(En(se)||se[Dt]))break e;if((ee||Z)&&(Z=O.window===O?O:(Z=O.ownerDocument)?Z.defaultView||Z.parentWindow:window,ee?(se=n.relatedTarget||n.toElement,ee=M,se=se?En(se):null,se!==null&&(Re=Ln(se),se!==Re||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=M),ee!==se)){if(oe=Vi,W="onMouseLeave",L="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Di,W="onPointerLeave",L="onPointerEnter",w="pointer"),Re=ee==null?Z:sr(ee),E=se==null?Z:sr(se),Z=new oe(W,w+"leave",ee,n,O),Z.target=Re,Z.relatedTarget=E,W=null,En(O)===M&&(oe=new oe(L,w+"enter",se,n,O),oe.target=E,oe.relatedTarget=Re,W=oe),Re=W,ee&&se)t:{for(oe=ee,L=se,w=0,E=oe;E;E=nr(E))w++;for(E=0,W=L;W;W=nr(W))E++;for(;0<w-E;)oe=nr(oe),w--;for(;0<E-w;)L=nr(L),E--;for(;w--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=nr(oe),L=nr(L)}oe=null}else oe=null;ee!==null&&hc(B,Z,ee,oe,!1),se!==null&&Re!==null&&hc(B,Re,se,oe,!0)}}e:{if(Z=M?sr(M):window,ee=Z.nodeName&&Z.nodeName.toLowerCase(),ee==="select"||ee==="input"&&Z.type==="file")var ie=i0;else if(Wi(Z))if(Gi)ie=p0;else{ie=u0;var fe=c0}else(ee=Z.nodeName)&&ee.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(ie=d0);if(ie&&(ie=ie(e,M))){Qi(B,ie,n,O);break e}fe&&fe(e,Z,M),e==="focusout"&&(fe=Z._wrapperState)&&fe.controlled&&Z.type==="number"&&Qn(Z,"number",Z.value)}switch(fe=M?sr(M):window,e){case"focusin":(Wi(fe)||fe.contentEditable==="true")&&(er=fe,ka=M,qr=null);break;case"focusout":qr=ka=er=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,rc(B,n,O);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":rc(B,n,O)}var he;if(xa)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Xn?Ui(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(Oi&&n.locale!=="ko"&&(Xn||me!=="onCompositionStart"?me==="onCompositionEnd"&&Xn&&(he=Hi()):(rn=O,pa="value"in rn?rn.value:rn.textContent,Xn=!0)),fe=Ys(M,me),0<fe.length&&(me=new Zi(me,e,null,n,O),B.push({event:me,listeners:fe}),he?me.data=he:(he=Yi(n),he!==null&&(me.data=he)))),(he=r0?s0(e,n):o0(e,n))&&(M=Ys(M,"onBeforeInput"),0<M.length&&(O=new Zi("onBeforeInput","beforeinput",null,n,O),B.push({event:O,listeners:M}),O.data=he))}pc(B,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ys(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=$r(e,n),a!=null&&r.unshift(es(e,a,o)),a=$r(e,t),a!=null&&r.push(es(e,a,o))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hc(e,t,n,r,o){for(var a=t._reactName,d=[];n!==null&&n!==r;){var g=n,y=g.alternate,M=g.stateNode;if(y!==null&&y===r)break;g.tag===5&&M!==null&&(g=M,o?(y=$r(n,a),y!=null&&d.unshift(es(n,y,g))):o||(y=$r(n,a),y!=null&&d.push(es(n,y,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var y0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function mc(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(w0,"")}function Ws(e,t,n){if(t=mc(t),mc(e)!==t&&n)throw Error(l(425))}function Qs(){}var Ma=null,Ca=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof gc<"u"?function(e){return gc.resolve(null).then(e).catch(A0)}:Na;function A0(e){setTimeout(function(){throw e})}function Fa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Br(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+rr,ts="__reactProps$"+rr,Dt="__reactContainer$"+rr,Ta="__reactEvents$"+rr,_0="__reactListeners$"+rr,z0="__reactHandles$"+rr;function En(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vc(e);e!==null;){if(n=e[Tt])return n;e=vc(e)}return t}e=n,n=e.parentNode}return null}function ns(e){return e=e[Tt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Gs(e){return e[ts]||null}var $a=[],or=-1;function an(e){return{current:e}}function Ne(e){0>or||(e.current=$a[or],$a[or]=null,or--)}function Ce(e,t){or++,$a[or]=e.current,e.current=t}var ln={},Ge=an(ln),st=an(!1),Sn=ln;function ar(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ot(e){return e=e.childContextTypes,e!=null}function Ks(){Ne(st),Ne(Ge)}function xc(e,t,n){if(Ge.current!==ln)throw Error(l(168));Ce(Ge,t),Ce(st,n)}function yc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(l(108,Me(e)||"Unknown",o));return G({},n,r)}function qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Sn=Ge.current,Ce(Ge,e),Ce(st,st.current),!0}function wc(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=yc(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,Ne(st),Ne(Ge),Ce(Ge,e)):Ne(st),Ce(st,n)}var Ot=null,Js=!1,Pa=!1;function bc(e){Ot===null?Ot=[e]:Ot.push(e)}function L0(e){Js=!0,bc(e)}function cn(){if(!Pa&&Ot!==null){Pa=!0;var e=0,t=Se;try{var n=Ot;for(Se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,Js=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),Ai(sa,cn),o}finally{Se=t,Pa=!1}}return null}var lr=[],ir=0,Xs=null,eo=0,ht=[],mt=0,Mn=null,It=1,Bt="";function Cn(e,t){lr[ir++]=eo,lr[ir++]=Xs,Xs=e,eo=t}function kc(e,t,n){ht[mt++]=It,ht[mt++]=Bt,ht[mt++]=Mn,Mn=e;var r=It;e=Bt;var o=32-At(r)-1;r&=~(1<<o),n+=1;var a=32-At(t)+o;if(30<a){var d=o-o%5;a=(r&(1<<d)-1).toString(32),r>>=d,o-=d,It=1<<32-At(t)+o|n<<o|r,Bt=a+e}else It=1<<a|n<<o|r,Bt=e}function Ha(e){e.return!==null&&(Cn(e,1),kc(e,1,0))}function Ra(e){for(;e===Xs;)Xs=lr[--ir],lr[ir]=null,eo=lr[--ir],lr[ir]=null;for(;e===Mn;)Mn=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,It=ht[--mt],ht[mt]=null}var dt=null,pt=null,Fe=!1,zt=null;function Ac(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,pt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:It,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,pt=null,!0):!1;default:return!1}}function Va(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(Fe){var t=pt;if(t){var n=t;if(!_c(e,t)){if(Va(e))throw Error(l(418));t=on(n.nextSibling);var r=dt;t&&_c(e,t)?Ac(r,n):(e.flags=e.flags&-4097|2,Fe=!1,dt=e)}}else{if(Va(e))throw Error(l(418));e.flags=e.flags&-4097|2,Fe=!1,dt=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function to(e){if(e!==dt)return!1;if(!Fe)return zc(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=pt)){if(Va(e))throw Lc(),Error(l(418));for(;t;)Ac(e,t),t=on(t.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=dt?on(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=pt;e;)e=on(e.nextSibling)}function cr(){pt=dt=null,Fe=!1}function Da(e){zt===null?zt=[e]:zt.push(e)}var E0=J.ReactCurrentBatchConfig;function rs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var g=o.refs;d===null?delete g[a]:g[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function Sc(e){function t(L,w){if(e){var E=L.deletions;E===null?(L.deletions=[w],L.flags|=16):E.push(w)}}function n(L,w){if(!e)return null;for(;w!==null;)t(L,w),w=w.sibling;return null}function r(L,w){for(L=new Map;w!==null;)w.key!==null?L.set(w.key,w):L.set(w.index,w),w=w.sibling;return L}function o(L,w){return L=vn(L,w),L.index=0,L.sibling=null,L}function a(L,w,E){return L.index=E,e?(E=L.alternate,E!==null?(E=E.index,E<w?(L.flags|=2,w):E):(L.flags|=2,w)):(L.flags|=1048576,w)}function d(L){return e&&L.alternate===null&&(L.flags|=2),L}function g(L,w,E,W){return w===null||w.tag!==6?(w=Nl(E,L.mode,W),w.return=L,w):(w=o(w,E),w.return=L,w)}function y(L,w,E,W){var ie=E.type;return ie===Y?O(L,w,E.props.children,W,E.key):w!==null&&(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===q&&Ec(ie)===w.type)?(W=o(w,E.props),W.ref=rs(L,w,E),W.return=L,W):(W=Eo(E.type,E.key,E.props,null,L.mode,W),W.ref=rs(L,w,E),W.return=L,W)}function M(L,w,E,W){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Fl(E,L.mode,W),w.return=L,w):(w=o(w,E.children||[]),w.return=L,w)}function O(L,w,E,W,ie){return w===null||w.tag!==7?(w=Rn(E,L.mode,W,ie),w.return=L,w):(w=o(w,E),w.return=L,w)}function B(L,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Nl(""+w,L.mode,E),w.return=L,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case re:return E=Eo(w.type,w.key,w.props,null,L.mode,E),E.ref=rs(L,null,w),E.return=L,E;case R:return w=Fl(w,L.mode,E),w.return=L,w;case q:var W=w._init;return B(L,W(w._payload),E)}if(qt(w)||le(w))return w=Rn(w,L.mode,E,null),w.return=L,w;no(L,w)}return null}function Z(L,w,E,W){var ie=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return ie!==null?null:g(L,w,""+E,W);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case re:return E.key===ie?y(L,w,E,W):null;case R:return E.key===ie?M(L,w,E,W):null;case q:return ie=E._init,Z(L,w,ie(E._payload),W)}if(qt(E)||le(E))return ie!==null?null:O(L,w,E,W,null);no(L,E)}return null}function ee(L,w,E,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return L=L.get(E)||null,g(w,L,""+W,ie);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case re:return L=L.get(W.key===null?E:W.key)||null,y(w,L,W,ie);case R:return L=L.get(W.key===null?E:W.key)||null,M(w,L,W,ie);case q:var fe=W._init;return ee(L,w,E,fe(W._payload),ie)}if(qt(W)||le(W))return L=L.get(E)||null,O(w,L,W,ie,null);no(w,W)}return null}function se(L,w,E,W){for(var ie=null,fe=null,he=w,me=w=0,Ye=null;he!==null&&me<E.length;me++){he.index>me?(Ye=he,he=null):Ye=he.sibling;var ze=Z(L,he,E[me],W);if(ze===null){he===null&&(he=Ye);break}e&&he&&ze.alternate===null&&t(L,he),w=a(ze,w,me),fe===null?ie=ze:fe.sibling=ze,fe=ze,he=Ye}if(me===E.length)return n(L,he),Fe&&Cn(L,me),ie;if(he===null){for(;me<E.length;me++)he=B(L,E[me],W),he!==null&&(w=a(he,w,me),fe===null?ie=he:fe.sibling=he,fe=he);return Fe&&Cn(L,me),ie}for(he=r(L,he);me<E.length;me++)Ye=ee(he,L,me,E[me],W),Ye!==null&&(e&&Ye.alternate!==null&&he.delete(Ye.key===null?me:Ye.key),w=a(Ye,w,me),fe===null?ie=Ye:fe.sibling=Ye,fe=Ye);return e&&he.forEach(function(xn){return t(L,xn)}),Fe&&Cn(L,me),ie}function oe(L,w,E,W){var ie=le(E);if(typeof ie!="function")throw Error(l(150));if(E=ie.call(E),E==null)throw Error(l(151));for(var fe=ie=null,he=w,me=w=0,Ye=null,ze=E.next();he!==null&&!ze.done;me++,ze=E.next()){he.index>me?(Ye=he,he=null):Ye=he.sibling;var xn=Z(L,he,ze.value,W);if(xn===null){he===null&&(he=Ye);break}e&&he&&xn.alternate===null&&t(L,he),w=a(xn,w,me),fe===null?ie=xn:fe.sibling=xn,fe=xn,he=Ye}if(ze.done)return n(L,he),Fe&&Cn(L,me),ie;if(he===null){for(;!ze.done;me++,ze=E.next())ze=B(L,ze.value,W),ze!==null&&(w=a(ze,w,me),fe===null?ie=ze:fe.sibling=ze,fe=ze);return Fe&&Cn(L,me),ie}for(he=r(L,he);!ze.done;me++,ze=E.next())ze=ee(he,L,me,ze.value,W),ze!==null&&(e&&ze.alternate!==null&&he.delete(ze.key===null?me:ze.key),w=a(ze,w,me),fe===null?ie=ze:fe.sibling=ze,fe=ze);return e&&he.forEach(function(af){return t(L,af)}),Fe&&Cn(L,me),ie}function Re(L,w,E,W){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case re:e:{for(var ie=E.key,fe=w;fe!==null;){if(fe.key===ie){if(ie=E.type,ie===Y){if(fe.tag===7){n(L,fe.sibling),w=o(fe,E.props.children),w.return=L,L=w;break e}}else if(fe.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===q&&Ec(ie)===fe.type){n(L,fe.sibling),w=o(fe,E.props),w.ref=rs(L,fe,E),w.return=L,L=w;break e}n(L,fe);break}else t(L,fe);fe=fe.sibling}E.type===Y?(w=Rn(E.props.children,L.mode,W,E.key),w.return=L,L=w):(W=Eo(E.type,E.key,E.props,null,L.mode,W),W.ref=rs(L,w,E),W.return=L,L=W)}return d(L);case R:e:{for(fe=E.key;w!==null;){if(w.key===fe)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(L,w.sibling),w=o(w,E.children||[]),w.return=L,L=w;break e}else{n(L,w);break}else t(L,w);w=w.sibling}w=Fl(E,L.mode,W),w.return=L,L=w}return d(L);case q:return fe=E._init,Re(L,w,fe(E._payload),W)}if(qt(E))return se(L,w,E,W);if(le(E))return oe(L,w,E,W);no(L,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(L,w.sibling),w=o(w,E),w.return=L,L=w):(n(L,w),w=Nl(E,L.mode,W),w.return=L,L=w),d(L)):n(L,w)}return Re}var ur=Sc(!0),Mc=Sc(!1),ro=an(null),so=null,dr=null,Oa=null;function Ia(){Oa=dr=so=null}function Ba(e){var t=ro.current;Ne(ro),e._currentValue=t}function Ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){so=e,Oa=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Oa!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(so===null)throw Error(l(308));dr=e,so.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var jn=null;function Ya(e){jn===null?jn=[e]:jn.push(e)}function Cc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ya(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Ya(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ut(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,la(e,n)}}function Nc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var o=e.updateQueue;un=!1;var a=o.firstBaseUpdate,d=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var y=g,M=y.next;y.next=null,d===null?a=M:d.next=M,d=y;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==d&&(g===null?O.firstBaseUpdate=M:g.next=M,O.lastBaseUpdate=y))}if(a!==null){var B=o.baseState;d=0,O=M=y=null,g=a;do{var Z=g.lane,ee=g.eventTime;if((r&Z)===Z){O!==null&&(O=O.next={eventTime:ee,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var se=e,oe=g;switch(Z=t,ee=n,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){B=se.call(ee,B,Z);break e}B=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,Z=typeof se=="function"?se.call(ee,B,Z):se,Z==null)break e;B=G({},B,Z);break e;case 2:un=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,Z=o.effects,Z===null?o.effects=[g]:Z.push(g))}else ee={eventTime:ee,lane:Z,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(M=O=ee,y=B):O=O.next=ee,d|=Z;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;Z=g,g=Z.next,Z.next=null,o.lastBaseUpdate=Z,o.shared.pending=null}}while(!0);if(O===null&&(y=B),o.baseState=y,o.firstBaseUpdate=M,o.lastBaseUpdate=O,t=o.shared.interleaved,t!==null){o=t;do d|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Tn|=d,e.lanes=d,e.memoizedState=B}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var ss={},$t=an(ss),os=an(ss),as=an(ss);function Nn(e){if(e===ss)throw Error(l(174));return e}function Qa(e,t){switch(Ce(as,t),Ce(os,e),Ce($t,ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:F(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=F(t,e)}Ne($t),Ce($t,t)}function fr(){Ne($t),Ne(os),Ne(as)}function Tc(e){Nn(as.current);var t=Nn($t.current),n=F(t,e.type);t!==n&&(Ce(os,e),Ce($t,n))}function Ga(e){os.current===e&&(Ne($t),Ne(os))}var Te=an(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function qa(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var io=J.ReactCurrentDispatcher,Ja=J.ReactCurrentBatchConfig,Fn=0,$e=null,Oe=null,Be=null,co=!1,ls=!1,is=0,S0=0;function Ke(){throw Error(l(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function el(e,t,n,r,o,a){if(Fn=a,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?N0:F0,e=n(r,o),ls){a=0;do{if(ls=!1,is=0,25<=a)throw Error(l(301));a+=1,Be=Oe=null,t.updateQueue=null,io.current=T0,e=n(r,o)}while(ls)}if(io.current=fo,t=Oe!==null&&Oe.next!==null,Fn=0,Be=Oe=$e=null,co=!1,t)throw Error(l(300));return e}function tl(){var e=is!==0;return is=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?$e.memoizedState=Be=e:Be=Be.next=e,Be}function vt(){if(Oe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Be===null?$e.memoizedState:Be.next;if(t!==null)Be=t,Oe=e;else{if(e===null)throw Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?$e.memoizedState=Be=e:Be=Be.next=e}return Be}function cs(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Oe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var d=o.next;o.next=a.next,a.next=d}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var g=d=null,y=null,M=a;do{var O=M.lane;if((Fn&O)===O)y!==null&&(y=y.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),r=M.hasEagerState?M.eagerState:e(r,M.action);else{var B={lane:O,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};y===null?(g=y=B,d=r):y=y.next=B,$e.lanes|=O,Tn|=O}M=M.next}while(M!==null&&M!==a);y===null?d=r:y.next=g,_t(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=y,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,$e.lanes|=a,Tn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=vt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do a=e(a,d.action),d=d.next;while(d!==o);_t(a,t.memoizedState)||(at=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $c(){}function Pc(e,t){var n=$e,r=vt(),o=t(),a=!_t(r.memoizedState,o);if(a&&(r.memoizedState=o,at=!0),r=r.queue,sl(Vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,us(9,Rc.bind(null,n,r,o,t),void 0,null),Ue===null)throw Error(l(349));(Fn&30)!==0||Hc(n,t,o)}return o}function Hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rc(e,t,n,r){t.value=n,t.getSnapshot=r,Zc(t)&&Dc(e)}function Vc(e,t,n){return n(function(){Zc(t)&&Dc(e)})}function Zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Dc(e){var t=Ut(e,1);t!==null&&Mt(t,e,1,-1)}function Oc(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t.queue=e,e=e.dispatch=j0.bind(null,$e,e),[t.memoizedState,e]}function us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ic(){return vt().memoizedState}function uo(e,t,n,r){var o=Pt();$e.flags|=e,o.memoizedState=us(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var o=vt();r=r===void 0?null:r;var a=void 0;if(Oe!==null){var d=Oe.memoizedState;if(a=d.destroy,r!==null&&Xa(r,d.deps)){o.memoizedState=us(t,n,a,r);return}}$e.flags|=e,o.memoizedState=us(1|t,n,a,r)}function Bc(e,t){return uo(8390656,8,e,t)}function sl(e,t){return po(2048,8,e,t)}function Uc(e,t){return po(4,2,e,t)}function Yc(e,t){return po(4,4,e,t)}function Wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,Wc.bind(null,t,e),n)}function ol(){}function Gc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qc(e,t,n){return(Fn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(_t(n,t)||(n=Ei(),$e.lanes|=n,Tn|=n,e.baseState=!0),t)}function M0(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var r=Ja.transition;Ja.transition={};try{e(!1),t()}finally{Se=n,Ja.transition=r}}function Jc(){return vt().memoizedState}function C0(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xc(e))eu(t,n);else if(n=Cc(e,t,n,r),n!==null){var o=tt();Mt(n,e,r,o),tu(n,t,r)}}function j0(e,t,n){var r=mn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))eu(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,g=a(d,n);if(o.hasEagerState=!0,o.eagerState=g,_t(g,d)){var y=t.interleaved;y===null?(o.next=o,Ya(t)):(o.next=y.next,y.next=o),t.interleaved=o;return}}catch{}finally{}n=Cc(e,t,o,r),n!==null&&(o=tt(),Mt(n,e,r,o),tu(n,t,r))}}function Xc(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function eu(e,t){ls=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,la(e,n)}}var fo={readContext:gt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},N0={readContext:gt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,uo(4194308,4,Wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return uo(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=C0.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Oc,useDebugValue:ol,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Oc(!1),t=e[0];return e=M0.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,o=Pt();if(Fe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ue===null)throw Error(l(349));(Fn&30)!==0||Hc(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Bc(Vc.bind(null,r,a,e),[e]),r.flags|=2048,us(9,Rc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Ue.identifierPrefix;if(Fe){var n=Bt,r=It;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},F0={readContext:gt,useCallback:Gc,useContext:gt,useEffect:sl,useImperativeHandle:Qc,useInsertionEffect:Uc,useLayoutEffect:Yc,useMemo:Kc,useReducer:nl,useRef:Ic,useState:function(){return nl(cs)},useDebugValue:ol,useDeferredValue:function(e){var t=vt();return qc(t,Oe.memoizedState,e)},useTransition:function(){var e=nl(cs)[0],t=vt().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Pc,useId:Jc,unstable_isNewReconciler:!1},T0={readContext:gt,useCallback:Gc,useContext:gt,useEffect:sl,useImperativeHandle:Qc,useInsertionEffect:Uc,useLayoutEffect:Yc,useMemo:Kc,useReducer:rl,useRef:Ic,useState:function(){return rl(cs)},useDebugValue:ol,useDeferredValue:function(e){var t=vt();return Oe===null?t.memoizedState=e:qc(t,Oe.memoizedState,e)},useTransition:function(){var e=rl(cs)[0],t=vt().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Pc,useId:Jc,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),o=mn(e),a=Yt(r,o);a.payload=t,n!=null&&(a.callback=n),t=dn(e,a,o),t!==null&&(Mt(t,e,o,r),oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),o=mn(e),a=Yt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=dn(e,a,o),t!==null&&(Mt(t,e,o,r),oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=mn(e),o=Yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,r),t!==null&&(Mt(t,e,r,n),oo(t,e,r))}};function nu(e,t,n,r,o,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,d):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(o,a):!0}function ru(e,t,n){var r=!1,o=ln,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(o=ot(t)?Sn:Ge.current,r=t.contextTypes,a=(r=r!=null)?ar(e,o):ln),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wa(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=gt(a):(a=ot(t)?Sn:Ge.current,o.context=ar(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(al(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ho.enqueueReplaceState(o,o.state,null),ao(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",r=t;do n+=be(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function ou(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,_l=r),cl(e,t)},n}function au(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){cl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=G0.bind(null,e,t,n),t.then(e,e))}function iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var P0=J.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?Mc(t,null,n,r):ur(t,e.child,n,r)}function uu(e,t,n,r,o){n=n.render;var a=t.ref;return pr(t,o),r=el(e,t,n,r,a,o),n=tl(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&n&&Ha(t),t.flags|=1,et(e,t,r,o),t.child)}function du(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,pu(e,t,a,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(d,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=vn(a,r),e.ref=t.ref,e.return=t,t.child=e}function pu(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Kr(a,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return ul(e,t,n,r,o)}function fu(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(gr,ft),ft|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(gr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ce(gr,ft),ft|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ce(gr,ft),ft|=r;return et(e,t,o,n),t.child}function hu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,n,r,o){var a=ot(n)?Sn:Ge.current;return a=ar(t,a),pr(t,o),n=el(e,t,n,r,a,o),r=tl(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(Fe&&r&&Ha(t),t.flags|=1,et(e,t,n,o),t.child)}function mu(e,t,n,r,o){if(ot(n)){var a=!0;qs(t)}else a=!1;if(pr(t,o),t.stateNode===null)go(e,t),ru(t,n,r),ll(t,n,r,o),r=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,M=n.contextType;typeof M=="object"&&M!==null?M=gt(M):(M=ot(n)?Sn:Ge.current,M=ar(t,M));var O=n.getDerivedStateFromProps,B=typeof O=="function"||typeof d.getSnapshotBeforeUpdate=="function";B||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==r||y!==M)&&su(t,d,r,M),un=!1;var Z=t.memoizedState;d.state=Z,ao(t,r,d,o),y=t.memoizedState,g!==r||Z!==y||st.current||un?(typeof O=="function"&&(al(t,n,O,r),y=t.memoizedState),(g=un||nu(t,n,g,r,Z,y,M))?(B||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=y),d.props=r,d.state=y,d.context=M,r=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,jc(e,t),g=t.memoizedProps,M=t.type===t.elementType?g:Lt(t.type,g),d.props=M,B=t.pendingProps,Z=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=gt(y):(y=ot(n)?Sn:Ge.current,y=ar(t,y));var ee=n.getDerivedStateFromProps;(O=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==B||Z!==y)&&su(t,d,r,y),un=!1,Z=t.memoizedState,d.state=Z,ao(t,r,d,o);var se=t.memoizedState;g!==B||Z!==se||st.current||un?(typeof ee=="function"&&(al(t,n,ee,r),se=t.memoizedState),(M=un||nu(t,n,M,r,Z,se,y)||!1)?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,se,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,se,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=se),d.props=r,d.state=se,d.context=y,r=M):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(t.flags|=1024),r=!1)}return dl(e,t,n,r,a,o)}function dl(e,t,n,r,o,a){hu(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return o&&wc(t,n,!1),Wt(e,t,a);r=t.stateNode,P0.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=ur(t,e.child,null,a),t.child=ur(t,null,g,a)):et(e,t,g,a),t.memoizedState=r.state,o&&wc(t,n,!0),t.child}function gu(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),Qa(e,t.containerInfo)}function vu(e,t,n,r,o){return cr(),Da(o),t.flags|=256,et(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function xu(e,t,n){var r=t.pendingProps,o=Te.current,a=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(o&2)!==0),g?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ce(Te,o&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,a?(r=t.mode,a=t.child,d={mode:"hidden",children:d},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=So(d,r,0,null),e=Rn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=fl(n),t.memoizedState=pl,e):hl(t,d));if(o=e.memoizedState,o!==null&&(g=o.dehydrated,g!==null))return H0(e,t,d,r,g,o,n);if(a){a=r.fallback,d=t.mode,o=e.child,g=o.sibling;var y={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=y,t.deletions=null):(r=vn(o,y),r.subtreeFlags=o.subtreeFlags&14680064),g!==null?a=vn(g,a):(a=Rn(a,d,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,d=e.child.memoizedState,d=d===null?fl(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return a=e.child,e=a.sibling,r=vn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hl(e,t){return t=So({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&Da(r),ur(t,e.child,null,n),e=hl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H0(e,t,n,r,o,a,d){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(l(422))),mo(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=So({mode:"visible",children:r.children},o,0,null),a=Rn(a,o,d,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&ur(t,e.child,null,d),t.child.memoizedState=fl(d),t.memoizedState=pl,a);if((t.mode&1)===0)return mo(e,t,d,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var g=r.dgst;return r=g,a=Error(l(419)),r=il(a,r,void 0),mo(e,t,d,r)}if(g=(d&e.childLanes)!==0,at||g){if(r=Ue,r!==null){switch(d&-d){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|d))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ut(e,o),Mt(r,e,o,-1))}return Cl(),r=il(Error(l(421))),mo(e,t,d,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=K0.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,pt=on(o.nextSibling),dt=t,Fe=!0,zt=null,e!==null&&(ht[mt++]=It,ht[mt++]=Bt,ht[mt++]=Mn,It=e.id,Bt=e.overflow,Mn=t),t=hl(t,r.children),t.flags|=4096,t)}function yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ua(e.return,t,n)}function ml(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function wu(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(et(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yu(e,n,t);else if(e.tag===19)yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ml(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ml(t,!0,n,null,a);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function R0(e,t,n){switch(t.tag){case 3:gu(t),cr();break;case 5:Tc(t);break;case 1:ot(t.type)&&qs(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ce(ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?xu(e,t,n):(Ce(Te,Te.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);Ce(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,fu(e,t,n)}return Wt(e,t,n)}var bu,gl,ku,Au;bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},gl=function(){},ku=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn($t.current);var a=null;switch(n){case"input":o=jr(e,o),r=jr(e,r),a=[];break;case"select":o=G({},o,{value:void 0}),r=G({},r,{value:void 0}),a=[];break;case"textarea":o=Nr(e,o),r=Nr(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qs)}Ko(n,r);var d;n=null;for(M in o)if(!r.hasOwnProperty(M)&&o.hasOwnProperty(M)&&o[M]!=null)if(M==="style"){var g=o[M];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(p.hasOwnProperty(M)?a||(a=[]):(a=a||[]).push(M,null));for(M in r){var y=r[M];if(g=o!=null?o[M]:void 0,r.hasOwnProperty(M)&&y!==g&&(y!=null||g!=null))if(M==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(a||(a=[]),a.push(M,n)),n=y;else M==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(a=a||[]).push(M,y)):M==="children"?typeof y!="string"&&typeof y!="number"||(a=a||[]).push(M,""+y):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(p.hasOwnProperty(M)?(y!=null&&M==="onScroll"&&je("scroll",e),a||g===y||(a=[])):(a=a||[]).push(M,y))}n&&(a=a||[]).push("style",n);var M=a;(t.updateQueue=M)&&(t.flags|=4)}},Au=function(e,t,n,r){n!==r&&(t.flags|=4)};function ds(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function V0(e,t,n){var r=t.pendingProps;switch(Ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return ot(t.type)&&Ks(),qe(t),null;case 3:return r=t.stateNode,fr(),Ne(st),Ne(Ge),qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zt!==null&&(El(zt),zt=null))),gl(e,t),qe(t),null;case 5:Ga(t);var o=Nn(as.current);if(n=t.type,e!==null&&t.stateNode!=null)ku(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=Nn($t.current),to(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[ts]=a,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(o=0;o<Jr.length;o++)je(Jr[o],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":ks(r,a),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},je("invalid",r);break;case"textarea":Fr(r,a),je("invalid",r)}Ko(n,a),o=null;for(var d in a)if(a.hasOwnProperty(d)){var g=a[d];d==="children"?typeof g=="string"?r.textContent!==g&&(a.suppressHydrationWarning!==!0&&Ws(r.textContent,g,e),o=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(a.suppressHydrationWarning!==!0&&Ws(r.textContent,g,e),o=["children",""+g]):p.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&je("scroll",r)}switch(n){case"input":Kt(r),As(r,a,!0);break;case"textarea":Kt(r),_s(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=A(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[Tt]=t,e[ts]=r,bu(e,t,!1,!1),t.stateNode=e;e:{switch(d=qo(n,r),n){case"dialog":je("cancel",e),je("close",e),o=r;break;case"iframe":case"object":case"embed":je("load",e),o=r;break;case"video":case"audio":for(o=0;o<Jr.length;o++)je(Jr[o],e);o=r;break;case"source":je("error",e),o=r;break;case"img":case"image":case"link":je("error",e),je("load",e),o=r;break;case"details":je("toggle",e),o=r;break;case"input":ks(e,r),o=jr(e,r),je("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),je("invalid",e);break;case"textarea":Fr(e,r),o=Nr(e,r),je("invalid",e);break;default:o=r}Ko(n,o),g=o;for(a in g)if(g.hasOwnProperty(a)){var y=g[a];a==="style"?zs(e,y):a==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&we(e,y)):a==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&ve(e,y):typeof y=="number"&&ve(e,""+y):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?y!=null&&a==="onScroll"&&je("scroll",e):y!=null&&K(e,a,y,d))}switch(n){case"input":Kt(e),As(e,r,!1);break;case"textarea":Kt(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Le(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Jt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=Nn(as.current),Nn($t.current),to(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return qe(t),null;case 13:if(Ne(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Lc(),cr(),t.flags|=98560,a=!1;else if(a=to(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Tt]=t}else cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else zt!==null&&(El(zt),zt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?Ie===0&&(Ie=3):Cl())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return fr(),gl(e,t),e===null&&Xr(t.stateNode.containerInfo),qe(t),null;case 10:return Ba(t.type._context),qe(t),null;case 17:return ot(t.type)&&Ks(),qe(t),null;case 19:if(Ne(Te),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,d=a.rendering,d===null)if(r)ds(a,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=lo(e),d!==null){for(t.flags|=128,ds(a,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Te,Te.current&1|2),t.child}e=e.sibling}a.tail!==null&&He()>vr&&(t.flags|=128,r=!0,ds(a,!1),t.lanes=4194304)}else{if(!r)if(e=lo(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ds(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Fe)return qe(t),null}else 2*He()-a.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,ds(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(n=a.last,n!==null?n.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=He(),t.sibling=null,n=Te.current,Ce(Te,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ft&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Z0(e,t){switch(Ra(t),t.tag){case 1:return ot(t.type)&&Ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),Ne(st),Ne(Ge),qa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(Ne(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Te),null;case 4:return fr(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var vo=!1,Je=!1,D0=typeof WeakSet=="function"?WeakSet:Set,ne=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function vl(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var _u=!1;function O0(e,t){if(Ma=Ps,e=nc(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,M=0,O=0,B=e,Z=null;t:for(;;){for(var ee;B!==n||o!==0&&B.nodeType!==3||(g=d+o),B!==a||r!==0&&B.nodeType!==3||(y=d+r),B.nodeType===3&&(d+=B.nodeValue.length),(ee=B.firstChild)!==null;)Z=B,B=ee;for(;;){if(B===e)break t;if(Z===n&&++M===o&&(g=d),Z===a&&++O===r&&(y=d),(ee=B.nextSibling)!==null)break;B=Z,Z=B.parentNode}B=ee}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ca={focusedElem:e,selectionRange:n},Ps=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var se=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,Re=se.memoizedState,L=t.stateNode,w=L.getSnapshotBeforeUpdate(t.elementType===t.type?oe:Lt(t.type,oe),Re);L.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(W){Pe(t,t.return,W)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return se=_u,_u=!1,se}function ps(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&vl(t,n,a)}o=o.next}while(o!==r)}}function xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zu(e){var t=e.alternate;t!==null&&(e.alternate=null,zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[ts],delete t[Ta],delete t[_0],delete t[z0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lu(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qs));else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var We=null,Et=!1;function pn(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Cs,n)}catch{}switch(n.tag){case 5:Je||mr(n,t);case 6:var r=We,o=Et;We=null,pn(e,t,n),We=r,Et=o,We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?Fa(e.parentNode,n):e.nodeType===1&&Fa(e,n),Br(e)):Fa(We,n.stateNode));break;case 4:r=We,o=Et,We=n.stateNode.containerInfo,Et=!0,pn(e,t,n),We=r,Et=o;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&vl(n,t,d),o=o.next}while(o!==r)}pn(e,t,n);break;case 1:if(!Je&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(g){Pe(n,t,g)}pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,pn(e,t,n),Je=r):pn(e,t,n);break;default:pn(e,t,n)}}function Mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D0),t.forEach(function(r){var o=q0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:We=g.stateNode,Et=!1;break e;case 3:We=g.stateNode.containerInfo,Et=!0;break e;case 4:We=g.stateNode.containerInfo,Et=!0;break e}g=g.return}if(We===null)throw Error(l(160));Su(a,d,o),We=null,Et=!1;var y=o.alternate;y!==null&&(y.return=null),o.return=null}catch(M){Pe(o,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cu(t,e),t=t.sibling}function Cu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Ht(e),r&4){try{ps(3,e,e.return),xo(3,e)}catch(oe){Pe(e,e.return,oe)}try{ps(5,e,e.return)}catch(oe){Pe(e,e.return,oe)}}break;case 1:St(t,e),Ht(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(St(t,e),Ht(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var o=e.stateNode;try{ve(o,"")}catch(oe){Pe(e,e.return,oe)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&a.type==="radio"&&a.name!=null&&Yn(o,a),qo(g,d);var M=qo(g,a);for(d=0;d<y.length;d+=2){var O=y[d],B=y[d+1];O==="style"?zs(o,B):O==="dangerouslySetInnerHTML"?we(o,B):O==="children"?ve(o,B):K(o,O,B,M)}switch(g){case"input":Wn(o,a);break;case"textarea":Tr(o,a);break;case"select":var Z=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var ee=a.value;ee!=null?Jt(o,!!a.multiple,ee,!1):Z!==!!a.multiple&&(a.defaultValue!=null?Jt(o,!!a.multiple,a.defaultValue,!0):Jt(o,!!a.multiple,a.multiple?[]:"",!1))}o[ts]=a}catch(oe){Pe(e,e.return,oe)}}break;case 6:if(St(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(oe){Pe(e,e.return,oe)}}break;case 3:if(St(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(oe){Pe(e,e.return,oe)}break;case 4:St(t,e),Ht(e);break;case 13:St(t,e),Ht(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Al=He())),r&4&&Mu(e);break;case 22:if(O=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(M=Je)||O,St(t,e),Je=M):St(t,e),Ht(e),r&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!O&&(e.mode&1)!==0)for(ne=e,O=e.child;O!==null;){for(B=ne=O;ne!==null;){switch(Z=ne,ee=Z.child,Z.tag){case 0:case 11:case 14:case 15:ps(4,Z,Z.return);break;case 1:mr(Z,Z.return);var se=Z.stateNode;if(typeof se.componentWillUnmount=="function"){r=Z,n=Z.return;try{t=r,se.props=t.memoizedProps,se.state=t.memoizedState,se.componentWillUnmount()}catch(oe){Pe(r,n,oe)}}break;case 5:mr(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Fu(B);continue}}ee!==null?(ee.return=Z,ne=ee):Fu(B)}O=O.sibling}e:for(O=null,B=e;;){if(B.tag===5){if(O===null){O=B;try{o=B.stateNode,M?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(g=B.stateNode,y=B.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Zt("display",d))}catch(oe){Pe(e,e.return,oe)}}}else if(B.tag===6){if(O===null)try{B.stateNode.nodeValue=M?"":B.memoizedProps}catch(oe){Pe(e,e.return,oe)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;O===B&&(O=null),B=B.return}O===B&&(O=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:St(t,e),Ht(e),r&4&&Mu(e);break;case 21:break;default:St(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lu(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ve(o,""),r.flags&=-33);var a=Eu(e);wl(e,a,o);break;case 3:case 4:var d=r.stateNode.containerInfo,g=Eu(e);yl(e,g,d);break;default:throw Error(l(161))}}catch(y){Pe(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I0(e,t,n){ne=e,ju(e)}function ju(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var o=ne,a=o.child;if(o.tag===22&&r){var d=o.memoizedState!==null||vo;if(!d){var g=o.alternate,y=g!==null&&g.memoizedState!==null||Je;g=vo;var M=Je;if(vo=d,(Je=y)&&!M)for(ne=o;ne!==null;)d=ne,y=d.child,d.tag===22&&d.memoizedState!==null?Tu(o):y!==null?(y.return=d,ne=y):Tu(o);for(;a!==null;)ne=a,ju(a),a=a.sibling;ne=o,vo=g,Je=M}Nu(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,ne=a):Nu(e)}}function Nu(e){for(;ne!==null;){var t=ne;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fc(t,a,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var O=M.memoizedState;if(O!==null){var B=O.dehydrated;B!==null&&Br(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||t.flags&512&&xl(t)}catch(Z){Pe(t,t.return,Z)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Fu(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Tu(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xo(4,t)}catch(y){Pe(t,n,y)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(y){Pe(t,o,y)}}var a=t.return;try{xl(t)}catch(y){Pe(t,a,y)}break;case 5:var d=t.return;try{xl(t)}catch(y){Pe(t,d,y)}}}catch(y){Pe(t,t.return,y)}if(t===e){ne=null;break}var g=t.sibling;if(g!==null){g.return=t.return,ne=g;break}ne=t.return}}var B0=Math.ceil,yo=J.ReactCurrentDispatcher,bl=J.ReactCurrentOwner,xt=J.ReactCurrentBatchConfig,Ae=0,Ue=null,Ve=null,Qe=0,ft=0,gr=an(0),Ie=0,fs=null,Tn=0,wo=0,kl=0,hs=null,lt=null,Al=0,vr=1/0,Qt=null,bo=!1,_l=null,fn=null,ko=!1,hn=null,Ao=0,ms=0,zl=null,_o=-1,zo=0;function tt(){return(Ae&6)!==0?He():_o!==-1?_o:_o=He()}function mn(e){return(e.mode&1)===0?1:(Ae&2)!==0&&Qe!==0?Qe&-Qe:E0.transition!==null?(zo===0&&(zo=Ei()),zo):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Pi(e.type)),e)}function Mt(e,t,n,r){if(50<ms)throw ms=0,zl=null,Error(l(185));Vr(e,n,r),((Ae&2)===0||e!==Ue)&&(e===Ue&&((Ae&2)===0&&(wo|=n),Ie===4&&gn(e,Qe)),it(e,r),n===1&&Ae===0&&(t.mode&1)===0&&(vr=He()+500,Js&&cn()))}function it(e,t){var n=e.callbackNode;Ep(e,t);var r=Fs(e,e===Ue?Qe:0);if(r===0)n!==null&&_i(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_i(n),t===1)e.tag===0?L0(Pu.bind(null,e)):bc(Pu.bind(null,e)),k0(function(){(Ae&6)===0&&cn()}),n=null;else{switch(Si(r)){case 1:n=sa;break;case 4:n=zi;break;case 16:n=Ms;break;case 536870912:n=Li;break;default:n=Ms}n=Bu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(_o=-1,zo=0,(Ae&6)!==0)throw Error(l(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=Fs(e,e===Ue?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Lo(e,r);else{t=r;var o=Ae;Ae|=2;var a=Ru();(Ue!==e||Qe!==t)&&(Qt=null,vr=He()+500,Pn(e,t));do try{W0();break}catch(g){Hu(e,g)}while(!0);Ia(),yo.current=a,Ae=o,Ve!==null?t=0:(Ue=null,Qe=0,t=Ie)}if(t!==0){if(t===2&&(o=oa(e),o!==0&&(r=o,t=Ll(e,o))),t===1)throw n=fs,Pn(e,0),gn(e,r),it(e,He()),n;if(t===6)gn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!U0(o)&&(t=Lo(e,r),t===2&&(a=oa(e),a!==0&&(r=a,t=Ll(e,a))),t===1))throw n=fs,Pn(e,0),gn(e,r),it(e,He()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:Hn(e,lt,Qt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Al+500-He(),10<t)){if(Fs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Na(Hn.bind(null,e,lt,Qt),t);break}Hn(e,lt,Qt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var d=31-At(r);a=1<<d,d=t[d],d>o&&(o=d),r&=~a}if(r=o,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B0(r/1960))-r,10<r){e.timeoutHandle=Na(Hn.bind(null,e,lt,Qt),r);break}Hn(e,lt,Qt);break;case 5:Hn(e,lt,Qt);break;default:throw Error(l(329))}}}return it(e,He()),e.callbackNode===n?$u.bind(null,e):null}function Ll(e,t){var n=hs;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=Lo(e,t),e!==2&&(t=lt,lt=n,t!==null&&El(t)),e}function El(e){lt===null?lt=e:lt.push.apply(lt,e)}function U0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!_t(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~kl,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if((Ae&6)!==0)throw Error(l(327));xr();var t=Fs(e,0);if((t&1)===0)return it(e,He()),null;var n=Lo(e,t);if(e.tag!==0&&n===2){var r=oa(e);r!==0&&(t=r,n=Ll(e,r))}if(n===1)throw n=fs,Pn(e,0),gn(e,t),it(e,He()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,lt,Qt),it(e,He()),null}function Sl(e,t){var n=Ae;Ae|=1;try{return e(t)}finally{Ae=n,Ae===0&&(vr=He()+500,Js&&cn())}}function $n(e){hn!==null&&hn.tag===0&&(Ae&6)===0&&xr();var t=Ae;Ae|=1;var n=xt.transition,r=Se;try{if(xt.transition=null,Se=1,e)return e()}finally{Se=r,xt.transition=n,Ae=t,(Ae&6)===0&&cn()}}function Ml(){ft=gr.current,Ne(gr)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b0(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Ra(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ks();break;case 3:fr(),Ne(st),Ne(Ge),qa();break;case 5:Ga(r);break;case 4:fr();break;case 13:Ne(Te);break;case 19:Ne(Te);break;case 10:Ba(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(Ue=e,Ve=e=vn(e.current,null),Qe=ft=t,Ie=0,fs=null,kl=wo=Tn=0,lt=hs=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var d=a.next;a.next=o,r.next=d}n.pending=r}jn=null}return e}function Hu(e,t){do{var n=Ve;try{if(Ia(),io.current=fo,co){for(var r=$e.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if(Fn=0,Be=Oe=$e=null,ls=!1,is=0,bl.current=null,n===null||n.return===null){Ie=1,fs=t,Ve=null;break}e:{var a=e,d=n.return,g=n,y=t;if(t=Qe,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var M=y,O=g,B=O.tag;if((O.mode&1)===0&&(B===0||B===11||B===15)){var Z=O.alternate;Z?(O.updateQueue=Z.updateQueue,O.memoizedState=Z.memoizedState,O.lanes=Z.lanes):(O.updateQueue=null,O.memoizedState=null)}var ee=iu(d);if(ee!==null){ee.flags&=-257,cu(ee,d,g,a,t),ee.mode&1&&lu(a,M,t),t=ee,y=M;var se=t.updateQueue;if(se===null){var oe=new Set;oe.add(y),t.updateQueue=oe}else se.add(y);break e}else{if((t&1)===0){lu(a,M,t),Cl();break e}y=Error(l(426))}}else if(Fe&&g.mode&1){var Re=iu(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),cu(Re,d,g,a,t),Da(hr(y,g));break e}}a=y=hr(y,g),Ie!==4&&(Ie=2),hs===null?hs=[a]:hs.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var L=ou(a,y,t);Nc(a,L);break e;case 1:g=y;var w=a.type,E=a.stateNode;if((a.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(fn===null||!fn.has(E)))){a.flags|=65536,t&=-t,a.lanes|=t;var W=au(a,g,t);Nc(a,W);break e}}a=a.return}while(a!==null)}Zu(n)}catch(ie){t=ie,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Ru(){var e=yo.current;return yo.current=fo,e===null?fo:e}function Cl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ue===null||(Tn&268435455)===0&&(wo&268435455)===0||gn(Ue,Qe)}function Lo(e,t){var n=Ae;Ae|=2;var r=Ru();(Ue!==e||Qe!==t)&&(Qt=null,Pn(e,t));do try{Y0();break}catch(o){Hu(e,o)}while(!0);if(Ia(),Ae=n,yo.current=r,Ve!==null)throw Error(l(261));return Ue=null,Qe=0,Ie}function Y0(){for(;Ve!==null;)Vu(Ve)}function W0(){for(;Ve!==null&&!xp();)Vu(Ve)}function Vu(e){var t=Iu(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Zu(e):Ve=t,bl.current=null}function Zu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=V0(n,t,ft),n!==null){Ve=n;return}}else{if(n=Z0(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ve=null;return}}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ie===0&&(Ie=5)}function Hn(e,t,n){var r=Se,o=xt.transition;try{xt.transition=null,Se=1,Q0(e,t,n,r)}finally{xt.transition=o,Se=r}return null}function Q0(e,t,n,r){do xr();while(hn!==null);if((Ae&6)!==0)throw Error(l(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Sp(e,a),e===Ue&&(Ve=Ue=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ko||(ko=!0,Bu(Ms,function(){return xr(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=xt.transition,xt.transition=null;var d=Se;Se=1;var g=Ae;Ae|=4,bl.current=null,O0(e,n),Cu(n,e),h0(Ca),Ps=!!Ma,Ca=Ma=null,e.current=n,I0(n),yp(),Ae=g,Se=d,xt.transition=a}else e.current=n;if(ko&&(ko=!1,hn=e,Ao=o),a=e.pendingLanes,a===0&&(fn=null),kp(n.stateNode),it(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=_l,_l=null,e;return(Ao&1)!==0&&e.tag!==0&&xr(),a=e.pendingLanes,(a&1)!==0?e===zl?ms++:(ms=0,zl=e):ms=0,cn(),null}function xr(){if(hn!==null){var e=Si(Ao),t=xt.transition,n=Se;try{if(xt.transition=null,Se=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,Ao=0,(Ae&6)!==0)throw Error(l(331));var o=Ae;for(Ae|=4,ne=e.current;ne!==null;){var a=ne,d=a.child;if((ne.flags&16)!==0){var g=a.deletions;if(g!==null){for(var y=0;y<g.length;y++){var M=g[y];for(ne=M;ne!==null;){var O=ne;switch(O.tag){case 0:case 11:case 15:ps(8,O,a)}var B=O.child;if(B!==null)B.return=O,ne=B;else for(;ne!==null;){O=ne;var Z=O.sibling,ee=O.return;if(zu(O),O===M){ne=null;break}if(Z!==null){Z.return=ee,ne=Z;break}ne=ee}}}var se=a.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var Re=oe.sibling;oe.sibling=null,oe=Re}while(oe!==null)}}ne=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,ne=d;else e:for(;ne!==null;){if(a=ne,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ps(9,a,a.return)}var L=a.sibling;if(L!==null){L.return=a.return,ne=L;break e}ne=a.return}}var w=e.current;for(ne=w;ne!==null;){d=ne;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,ne=E;else e:for(d=w;ne!==null;){if(g=ne,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:xo(9,g)}}catch(ie){Pe(g,g.return,ie)}if(g===d){ne=null;break e}var W=g.sibling;if(W!==null){W.return=g.return,ne=W;break e}ne=g.return}}if(Ae=o,cn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Cs,e)}catch{}r=!0}return r}finally{Se=n,xt.transition=t}}return!1}function Du(e,t,n){t=hr(n,t),t=ou(e,t,1),e=dn(e,t,1),t=tt(),e!==null&&(Vr(e,1,t),it(e,t))}function Pe(e,t,n){if(e.tag===3)Du(e,e,n);else for(;t!==null;){if(t.tag===3){Du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=hr(n,e),e=au(t,e,1),t=dn(t,e,1),e=tt(),t!==null&&(Vr(t,1,e),it(t,e));break}}t=t.return}}function G0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Qe&n)===n&&(Ie===4||Ie===3&&(Qe&130023424)===Qe&&500>He()-Al?Pn(e,0):kl|=n),it(e,t)}function Ou(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ns,Ns<<=1,(Ns&130023424)===0&&(Ns=4194304)));var n=tt();e=Ut(e,t),e!==null&&(Vr(e,t,n),it(e,n))}function K0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ou(e,n)}function q0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),Ou(e,n)}var Iu;Iu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,R0(e,t,n);at=(e.flags&131072)!==0}else at=!1,Fe&&(t.flags&1048576)!==0&&kc(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var o=ar(t,Ge.current);pr(t,n),o=el(null,t,r,e,o,n);var a=tl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(a=!0,qs(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wa(t),o.updater=ho,t.stateNode=o,o._reactInternals=t,ll(t,r,e,n),t=dl(null,t,r,!0,a,n)):(t.tag=0,Fe&&a&&Ha(t),et(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=X0(r),e=Lt(r,e),o){case 0:t=ul(null,t,r,e,n);break e;case 1:t=mu(null,t,r,e,n);break e;case 11:t=uu(null,t,r,e,n);break e;case 14:t=du(null,t,r,Lt(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),mu(e,t,r,o,n);case 3:e:{if(gu(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,o=a.element,jc(e,t),ao(t,r,null,n);var d=t.memoizedState;if(r=d.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=hr(Error(l(423)),t),t=vu(e,t,r,n,o);break e}else if(r!==o){o=hr(Error(l(424)),t),t=vu(e,t,r,n,o);break e}else for(pt=on(t.stateNode.containerInfo.firstChild),dt=t,Fe=!0,zt=null,n=Mc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===o){t=Wt(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Tc(t),e===null&&Za(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,d=o.children,ja(r,o)?d=null:a!==null&&ja(r,a)&&(t.flags|=32),hu(e,t),et(e,t,d,n),t.child;case 6:return e===null&&Za(t),null;case 13:return xu(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),uu(e,t,r,o,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,d=o.value,Ce(ro,r._currentValue),r._currentValue=d,a!==null)if(_t(a.value,d)){if(a.children===o.children&&!st.current){t=Wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var g=a.dependencies;if(g!==null){d=a.child;for(var y=g.firstContext;y!==null;){if(y.context===r){if(a.tag===1){y=Yt(-1,n&-n),y.tag=2;var M=a.updateQueue;if(M!==null){M=M.shared;var O=M.pending;O===null?y.next=y:(y.next=O.next,O.next=y),M.pending=y}}a.lanes|=n,y=a.alternate,y!==null&&(y.lanes|=n),Ua(a.return,n,t),g.lanes|=n;break}y=y.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),Ua(d,n,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}et(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=gt(o),r=r(o),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,o=Lt(r,t.pendingProps),o=Lt(r.type,o),du(e,t,r,o,n);case 15:return pu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Lt(r,o),go(e,t),t.tag=1,ot(r)?(e=!0,qs(t)):e=!1,pr(t,n),ru(t,r,o),ll(t,r,o,n),dl(null,t,r,!0,e,n);case 19:return wu(e,t,n);case 22:return fu(e,t,n)}throw Error(l(156,t.tag))};function Bu(e,t){return Ai(e,t)}function J0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new J0(e,t,n,r)}function jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X0(e){if(typeof e=="function")return jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===I)return 11;if(e===xe)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,a){var d=2;if(r=e,typeof e=="function")jl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Y:return Rn(n.children,o,a,t);case ue:d=8,o|=8;break;case pe:return e=yt(12,n,t,o|2),e.elementType=pe,e.lanes=a,e;case H:return e=yt(13,n,t,o),e.elementType=H,e.lanes=a,e;case P:return e=yt(19,n,t,o),e.elementType=P,e.lanes=a,e;case ce:return So(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:d=10;break e;case ae:d=9;break e;case I:d=11;break e;case xe:d=14;break e;case q:d=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(d,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Rn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function So(e,t,n,r){return e=yt(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ef(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Tl(e,t,n,r,o,a,d,g,y){return e=new ef(e,t,n,g,y),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(a),e}function tf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uu(e){if(!e)return ln;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ot(n))return yc(e,n,t)}return t}function Yu(e,t,n,r,o,a,d,g,y){return e=Tl(n,r,!0,e,o,a,d,g,y),e.context=Uu(null),n=e.current,r=tt(),o=mn(n),a=Yt(r,o),a.callback=t??null,dn(n,a,o),e.current.lanes=o,Vr(e,o,r),it(e,r),e}function Mo(e,t,n,r){var o=t.current,a=tt(),d=mn(o);return n=Uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(a,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(o,t,d),e!==null&&(Mt(e,o,d,a),oo(e,o,d)),d}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function nf(){return null}var Qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pl(e){this._internalRoot=e}jo.prototype.render=Pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Mo(e,t,null,null)},jo.prototype.unmount=Pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){Mo(null,e,null,null)}),t[Dt]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ji();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&Ti(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function rf(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var M=Co(d);a.call(M)}}var d=Yu(t,r,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=d,e[Dt]=d.current,Xr(e.nodeType===8?e.parentNode:e),$n(),d}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var g=r;r=function(){var M=Co(y);g.call(M)}}var y=Tl(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=y,e[Dt]=y.current,Xr(e.nodeType===8?e.parentNode:e),$n(function(){Mo(t,y,n,r)}),y}function Fo(e,t,n,r,o){var a=n._reactRootContainer;if(a){var d=a;if(typeof o=="function"){var g=o;o=function(){var y=Co(d);g.call(y)}}Mo(t,d,e,o)}else d=rf(n,t,e,o,r);return Co(d)}Mi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(la(t,n|1),it(t,He()),(Ae&6)===0&&(vr=He()+500,cn()))}break;case 13:$n(function(){var r=Ut(e,1);if(r!==null){var o=tt();Mt(r,e,1,o)}}),$l(e,1)}},ia=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=tt();Mt(t,e,134217728,n)}$l(e,134217728)}},Ci=function(e){if(e.tag===13){var t=mn(e),n=Ut(e,t);if(n!==null){var r=tt();Mt(n,e,t,r)}$l(e,t)}},ji=function(){return Se},Ni=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}},ea=function(e,t,n){switch(t){case"input":if(Wn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gs(r);if(!o)throw Error(l(90));bs(r),Wn(r,o)}}}break;case"textarea":Tr(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}},gi=Sl,vi=$n;var sf={usingClientEntryPoint:!1,Events:[ns,sr,Gs,hi,mi,Sl]},gs={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},of={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bi(e),e===null?null:e.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Cs=To.inject(of),Ft=To}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf,ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(t))throw Error(l(200));return tf(e,t,null,n)},ct.createRoot=function(e,t){if(!Hl(e))throw Error(l(299));var n=!1,r="",o=Qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Tl(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new Pl(t)},ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=bi(t),e=e===null?null:e.stateNode,e},ct.flushSync=function(e){return $n(e)},ct.hydrate=function(e,t,n){if(!No(t))throw Error(l(200));return Fo(null,e,t,!0,n)},ct.hydrateRoot=function(e,t,n){if(!Hl(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",d=Qu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Yu(t,null,e,1,n??null,o,!1,a,d),e[Dt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new jo(t)},ct.render=function(e,t,n){if(!No(t))throw Error(l(200));return Fo(null,e,t,!1,n)},ct.unmountComponentAtNode=function(e){if(!No(e))throw Error(l(40));return e._reactRootContainer?($n(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},ct.unstable_batchedUpdates=Sl,ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Fo(e,t,n,!1,r)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var rd;function mf(){if(rd)return Zl.exports;rd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Zl.exports=hf(),Zl.exports}var sd;function gf(){if(sd)return $o;sd=1;var s=mf();return $o.createRoot=s.createRoot,$o.hydrateRoot=s.hydrateRoot,$o}var vf=gf();const xf=lf(vf),yf="modulepreload",wf=function(s,i){return new URL(s,i).href},od={},yr=function(i,l,u){let p=Promise.resolve();if(l&&l.length>0){let m=function(z){return Promise.all(z.map(b=>Promise.resolve(b).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const v=document.getElementsByTagName("link"),x=document.querySelector("meta[property=csp-nonce]"),_=(x==null?void 0:x.nonce)||(x==null?void 0:x.getAttribute("nonce"));p=m(l.map(z=>{if(z=wf(z,u),z in od)return;od[z]=!0;const b=z.endsWith(".css"),S=b?'[rel="stylesheet"]':"";if(!!u)for(let C=v.length-1;C>=0;C--){const $=v[C];if($.href===z&&(!b||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${z}"]${S}`))return;const V=document.createElement("link");if(V.rel=b?"stylesheet":yf,b||(V.as="script"),V.crossOrigin="",V.href=z,_&&V.setAttribute("nonce",_),document.head.appendChild(V),b)return new Promise((C,$)=>{V.addEventListener("load",C),V.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${z}`)))})}))}function h(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return p.then(m=>{for(const v of m||[])v.status==="rejected"&&h(v.reason);return i().catch(h)})},ei={toggle:()=>yr(()=>import("./toggle-Dq7uMppZ.js"),[],import.meta.url),tick:()=>yr(()=>import("./tick-CQa47_MU.js"),[],import.meta.url),select:()=>yr(()=>import("./select-C-tAw5W2.js"),[],import.meta.url),press:()=>yr(()=>import("./press-h_enDfSn.js"),[],import.meta.url),slide:()=>yr(()=>import("./slide-CxPKTNuS.js"),[],import.meta.url),reveal:()=>yr(()=>import("./reveal-DJs7Ppoh.js"),[],import.meta.url)};let _r=null,ad=!1;const Td=new Set,Bo=new Map,Po=new Map;function ai(){if(_r)return _r;const s=window.AudioContext||window.webkitAudioContext;return s?(_r=new s,_r):null}function li(s){if(Bo.has(s))return Promise.resolve(Bo.get(s));if(Po.has(s))return Po.get(s);const i=ai();if(!i||!ei[s])return Promise.resolve(null);const l=ei[s]().then(u=>fetch(u.default)).then(u=>u.arrayBuffer()).then(u=>i.decodeAudioData(u)).then(u=>(Bo.set(s,u),u)).catch(()=>null).finally(()=>Po.delete(s));return Po.set(s,l),l}function bf(){const s=ai();s&&(s.state==="suspended"&&s.resume(),Td.forEach(li))}function kf(s){if(typeof window>"u"||!ei[s])return;if(Td.add(s),_r&&_r.state!=="suspended"){li(s);return}if(ad)return;ad=!0;const i={capture:!0,passive:!0},l=()=>{window.removeEventListener("pointerdown",l,i),window.removeEventListener("keydown",l,i),bf()};window.addEventListener("pointerdown",l,i),window.addEventListener("keydown",l,i)}const Af=120;function _f(s,i=1){if(typeof window>"u"||i<=0)return;const l=ai();if(!l)return;l.state==="suspended"&&l.resume();const u=Bo.get(s);if(!u){const p=performance.now();li(s).then(h=>{h&&performance.now()-p<=Af&&ld(l,h,i)});return}ld(l,u,i)}function ld(s,i,l){const u=s.createBufferSource(),p=s.createGain();p.gain.value=Math.min(1,l),u.buffer=i,u.connect(p).connect(s.destination),u.start()}const $d=.7,Pd=c.createContext({enabled:!0,volume:$d});function zf({enabled:s=!0,volume:i=$d,children:l}){return f.jsx(Pd.Provider,{value:{enabled:s,volume:i},children:l})}function Cr(s,i=!0){const{enabled:l,volume:u}=c.useContext(Pd),p=l&&i;return c.useEffect(()=>{p&&kf(s)},[s,p]),c.useCallback(()=>{p&&_f(s,u)},[s,p,u])}const Lf=`/* ============================================================
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
  --sc-shadow-toast-plate: 0 2px 8px 0 rgb(var(--sc-p-color-ink-rgb) / 0.10), 0 1px 0 0 rgb(var(--sc-p-color-ink-rgb) / 0.04);
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
  --sc-shadow-toast-plate: 0 2px 8px 0 rgb(var(--sc-p-color-ink-rgb) / 0.10), 0 1px 0 0 rgb(var(--sc-p-color-ink-rgb) / 0.04);
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
`,id=5e-4,Ef=6e3,cd=60;function Sf({stiffness:s,damping:i,mass:l}){let u=0,p=0;const h=.001,m=[0];let v=0,x=0;for(;v<Ef;){const _=(-s*(u-1)-i*p)/l;if(p+=_*h,u+=p*h,v+=1,m.push(u),u>x&&(x=u),Math.abs(u-1)<id&&Math.abs(p)<id)break}return{trace:m,settleMs:v,overshoot:Math.max(0,x-1)}}function Yo(s){const{trace:i,settleMs:l,overshoot:u}=Sf(s),p=[];for(let h=0;h<cd;h+=1){const m=Math.round(h/(cd-1)*(i.length-1));p.push(+i[m].toFixed(4))}return p[p.length-1]=1,{easing:`linear(${p.join(", ")})`,settleMs:l,overshoot:u}}const Ho=60,ud={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};function Mf([s,i,l,u],p){const h=(x,_,z)=>3*(1-z)**2*z*x+3*(1-z)*z**2*_+z**3;let m=0,v=1;for(let x=0;x<40;x+=1){const _=(m+v)/2;h(s,l,_)<p?m=_:v=_}return h(i,u,(m+v)/2)}function Cf(s){const i=[];for(const l of s.split(",")){const[u,...p]=l.trim().split(/\s+/);p.length||i.push({v:+u,x:null});for(const h of p)i.push({v:+u,x:parseFloat(h)/100})}i[0].x===null&&(i[0].x=0),i.at(-1).x===null&&(i.at(-1).x=1);for(let l=1;l<i.length;l+=1){if(i[l].x!==null){i[l].x=Math.max(i[l].x,i[l-1].x);continue}let u=l;for(;i[u].x===null;)u+=1;const p=(i[u].x-i[l-1].x)/(u-l+1);for(let h=l;h<u;h+=1)i[h].x=i[h-1].x+p}return i}function jf(s,i){for(let l=1;l<s.length;l+=1)if(i<=s[l].x){const u=s[l-1],p=s[l],h=p.x-u.x;return h?u.v+(i-u.x)/h*(p.v-u.v):p.v}return s.at(-1).v}function ii(s){var p;const i=(s||"ease").trim(),l=i.match(/^linear\((.+)\)$/);if(l){const h=Cf(l[1]);return Array.from({length:Ho},(m,v)=>jf(h,v/(Ho-1)))}const u=((p=i.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:p[1].split(",").map(Number))||ud[i]||ud.ease;return Array.from({length:Ho},(h,m)=>Mf(u,m/(Ho-1)))}function ci(s){const i=s.map((u,p)=>Math.abs(s[Math.min(p+1,s.length-1)]-s[Math.max(p-1,0)]));i[0]=0,i[i.length-1]=0;const l=Math.max(...i)||1;return i.map(u=>u/l)}const Nf=s=>(s.endsWith("ms")?parseFloat(s):parseFloat(s)*1e3)||0;function Ff(s){const i=[];let l=0,u="";for(const p of s)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(u.trim()),u=""):u+=p;return i.push(u.trim()),i}function _n(s,i){const l=`--sc-motion-${i}`,u=getComputedStyle(s),p=b=>parseFloat(u.getPropertyValue(b))||0,h=document.createElement("span");h.style.cssText=`position:absolute;visibility:hidden;transition-duration:var(${l}-travel-duration),var(${l}-press-lean-duration,0ms);transition-timing-function:var(${l}-travel-easing),var(--sc-motion-press-easing);`,s.appendChild(h);const m=getComputedStyle(h),[v,x]=m.transitionDuration.split(",").map(b=>Nf(b.trim())),[_,z]=Ff(m.transitionTimingFunction);return h.remove(),{travelDur:v,travelEasing:_,leanDur:x,leanEasing:z,stretch:p(`${l}-stretch`),squash:p(`${l}-squash`),lean:p(`${l}-press-lean`)}}const In=s=>!!s&&(s.stretch>0||s.squash>0||s.lean>0),Bn=()=>{var s;return typeof window<"u"&&!!((s=window.matchMedia)!=null&&s.call(window,"(prefers-reduced-motion: reduce)").matches)};function Un({l:s,r:i,h:l},u,p=!0){return{transform:`translate(${s}px, ${p?(u-l)/2:0}px)`,width:`${i-s}px`,height:`${l}px`}}function Mr(s,i,l,u,p=!0){const h=ii(s.travelEasing),m=ci(h);return h.map((v,x)=>{const _=s.stretch*u*m[x],z=i.l+(l.l-i.l)*v-_/2,b=i.r+(l.r-i.r)*v+_/2;return Un({l:z,r:b,h:u*(1-s.squash*m[x])},u,p)})}function ui(s,i,l){const u=Math.sign(l.l+l.r-(i.l+i.r)),p=s.lean*.25*Math.abs((l.l+l.r-(i.l+i.r))/2);return u>0?{...i,r:i.r+p}:u<0?{...i,l:i.l-p}:i}function zr(s,i,l,u,{hold:p=!1,onDone:h}={}){s.getAnimations().forEach(v=>v.cancel());const m=s.animate(i,{duration:l,easing:u,fill:"forwards"});return p||(m.onfinish=()=>{m.cancel(),h==null||h()}),m}function Nt(s){const i=s.getBoundingClientRect(),l=s.currentCSSZoom||1;return{left:i.left/l,right:i.right/l,width:i.width/l,top:i.top/l,height:i.height/l}}function di(s,i){const l=Nt(s);return{l:l.left-i.left,r:l.right-i.left}}function Tf(s,i){const l=_n(s,"switch"),u=getComputedStyle(s),p=parseFloat(u.width),h=parseFloat(u.height),m=parseFloat(getComputedStyle(i).height),v=(h-m)/2;return{...l,knob:m,travel:p-m-2*v}}const ws=(s,i)=>({l:i?s.travel:0,r:(i?s.travel:0)+s.knob}),$f=(s,i)=>ui(s,ws(s,i),ws(s,!i)),Pf=(s,i,l)=>Mr(s,i,l,s.knob,!1),Hf=(s,i,l)=>[Un({...i,h:s.knob},s.knob,!1),Un({...l,h:s.knob},s.knob,!1)],Rf="_field_tf6ns_39",Vf="_disabled_tf6ns_49",Zf="_controlWrapper_tf6ns_53",Df="_input_tf6ns_59",Of="_track_tf6ns_69",If="_glyphs_tf6ns_84",Bf="_glyphOn_tf6ns_99",Uf="_glyphOff_tf6ns_105",Yf="_thumb_tf6ns_115",Wf="_label_tf6ns_190",Rt={field:Rf,disabled:Vf,controlWrapper:Zf,input:Df,track:Of,glyphs:If,glyphOn:Bf,glyphOff:Uf,thumb:Yf,label:Wf};function Qf({checked:s=!1,disabled:i=!1,onChange:l,label:u,sound:p=!0,glyphs:h=!0,className:m=""}){const v=c.useId(),x=Cr("toggle",p),_=c.useRef(null),z=c.useRef(null),b=c.useRef(null),S=c.useRef(null),N=c.useRef(null),V=c.useRef(!1),C=()=>{if(i||Bn()||!z.current||!b.current)return null;const R=Tf(z.current,b.current);return In(R)?R:null},$=()=>{var R,Y;(R=S.current)==null||R.cancel(),S.current=null,N.current=null,(Y=z.current)==null||Y.removeAttribute("data-driven")},X=(R,Y,ue,pe)=>{var ae;(ae=S.current)==null||ae.cancel(),z.current.setAttribute("data-driven","");const te=b.current.animate(R,{duration:Y,easing:ue,fill:"forwards"});S.current=te,pe||(te.onfinish=()=>{S.current===te&&$()})},Q=(R,Y,ue)=>X(Pf(R,Y,ws(R,ue)),R.travelDur,"linear",!1),K=()=>{const R=C();if(!R||R.lean<=0)return;const Y=_.current.checked,ue=N.current||ws(R,Y);N.current=$f(R,Y),V.current=!1,X(Hf(R,ue,N.current),R.leanDur,R.leanEasing,!0)},J=()=>{if(!N.current)return;const R=C();if(!R){$();return}const Y=N.current;N.current=null,Q(R,Y,_.current.checked)},re=()=>setTimeout(()=>{V.current||J()},0);return f.jsxs("label",{htmlFor:v,className:`${Rt.field} ${i?Rt.disabled:""} ${m}`,onPointerDown:K,onPointerUp:re,onPointerLeave:J,onPointerCancel:J,children:[f.jsxs("span",{className:Rt.controlWrapper,children:[f.jsx("input",{ref:_,id:v,type:"checkbox",role:"switch",className:Rt.input,checked:s,disabled:i,onChange:R=>{x(),V.current=!0;const Y=C();if(Y){const ue=N.current||ws(Y,!R.target.checked);N.current=null,Q(Y,ue,R.target.checked)}else $();l==null||l(R)}}),f.jsxs("span",{ref:z,className:Rt.track,"aria-hidden":"true",children:[h&&f.jsxs("span",{className:Rt.glyphs,children:[f.jsx("span",{className:Rt.glyphOn}),f.jsx("span",{className:Rt.glyphOff})]}),f.jsx("span",{ref:b,className:Rt.thumb})]})]}),u&&f.jsx("span",{className:Rt.label,children:u})]})}const Gf=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,44H32A20,20,0,0,0,12,64V88a20,20,0,0,0,16,19.6V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V107.6A20,20,0,0,0,244,88V64A20,20,0,0,0,224,44ZM36,68H220V84H36ZM52,188V108H204v80Zm112-52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,136Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z",opacity:"0.2"}),c.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224V88Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,50H32A14,14,0,0,0,18,64V88a14,14,0,0,0,14,14h2v90a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V102h2a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM210,192a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V102H210ZM226,88a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM98,136a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,52H32A12,12,0,0,0,20,64V88a12,12,0,0,0,12,12h4v92a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V100h4a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM212,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V100H212ZM228,88a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM100,136a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,136Z"}))]]),Kf=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),c.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),qf=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"}))]]),Jf=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),c.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),Xf=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),c.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),e1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),c.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),t1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),n1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),c.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),r1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),s1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),c.createElement("path",{d:"M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),a1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),c.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),l1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),c.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),i1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),c1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",opacity:"0.2"}),c.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"}))]]),u1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),d1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",opacity:"0.2"}),c.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"}))]]),p1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z",opacity:"0.2"}),c.createElement("path",{d:"M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0ZM228,91.55v72.9a12,12,0,0,1-3.51,8.49l-51.55,51.55a12,12,0,0,1-8.49,3.51H91.55a12,12,0,0,1-8.49-3.51L31.51,172.94A12,12,0,0,1,28,164.45V91.55a12,12,0,0,1,3.51-8.49L83.06,31.51A12,12,0,0,1,91.55,28h72.9a12,12,0,0,1,8.49,3.51l51.55,51.55A12,12,0,0,1,228,91.55Zm-8,0a4,4,0,0,0-1.17-2.83L167.28,37.17A4.06,4.06,0,0,0,164.45,36H91.55a4.06,4.06,0,0,0-2.83,1.17L37.17,88.72A4,4,0,0,0,36,91.55v72.9a4,4,0,0,0,1.17,2.83l51.55,51.55A4.06,4.06,0,0,0,91.55,220h72.9a4.06,4.06,0,0,0,2.83-1.17l51.55-51.55a4,4,0,0,0,1.17-2.83ZM128,164a8,8,0,1,0,8,8A8,8,0,0,0,128,164Z"}))]]),f1=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),c.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),h1=c.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ze=c.forwardRef((s,i)=>{const{alt:l,color:u,size:p,weight:h,mirrored:m,children:v,weights:x,..._}=s,{color:z="currentColor",size:b,weight:S="regular",mirrored:N=!1,...V}=c.useContext(h1);return c.createElement("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:p??b,height:p??b,fill:u??z,viewBox:"0 0 256 256",transform:m||N?"scale(-1, 1)":void 0,...V,..._},!!l&&c.createElement("title",null,l),v,x.get(h??S))});Ze.displayName="IconBase";const Hd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:Gf}));Hd.displayName="ArchiveIcon";const m1=Hd,Rd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:Kf}));Rd.displayName="ArrowRightIcon";const g1=Rd,Vd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:qf}));Vd.displayName="CalendarBlankIcon";const v1=Vd,Zd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:Jf}));Zd.displayName="CaretDownIcon";const x1=Zd,Dd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:Xf}));Dd.displayName="CheckIcon";const y1=Dd,Od=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:e1}));Od.displayName="CheckCircleIcon";const w1=Od,Id=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:t1}));Id.displayName="ClockIcon";const b1=Id,Bd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:n1}));Bd.displayName="CopyIcon";const k1=Bd,Ud=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:r1}));Ud.displayName="EnvelopeSimpleIcon";const A1=Ud,Yd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:s1}));Yd.displayName="EyeIcon";const _1=Yd,Wd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:o1}));Wd.displayName="InfoIcon";const z1=Wd,Qd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:a1}));Qd.displayName="MagnifyingGlassIcon";const L1=Qd,Gd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:l1}));Gd.displayName="MapPinIcon";const E1=Gd,Kd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:i1}));Kd.displayName="MinusIcon";const S1=Kd,qd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:c1}));qd.displayName="PauseIcon";const M1=qd,Jd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:u1}));Jd.displayName="PlusIcon";const C1=Jd,Xd=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:d1}));Xd.displayName="WarningIcon";const ep=Xd,tp=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:p1}));tp.displayName="WarningOctagonIcon";const j1=tp,np=c.forwardRef((s,i)=>c.createElement(Ze,{ref:i,...s,weights:f1}));np.displayName="XIcon";const rp=np,N1="_icon_1vxzc_2",F1={icon:N1},T1={sm:"var(--sc-size-icon-sm)",md:"var(--sc-size-icon-md)",lg:"var(--sc-size-icon-lg)"};function Wo({glyph:s,weight:i="regular",size:l="1em",label:u,className:p="",...h}){if(!s)return null;const m=u?{"aria-label":u,role:"img"}:{"aria-hidden":!0},v=T1[l];return v?f.jsx("span",{className:`${F1.icon} ${p}`.trim(),style:{fontSize:v},children:f.jsx(s,{weight:i,size:"1em",...m,...h})}):f.jsx(s,{weight:i,size:l,className:p,...m,...h})}const $1="_stepper_1wvfb_28",P1="_button_1wvfb_38",H1="_glyph_1wvfb_79",R1="_readout_1wvfb_101",V1="_digits_1wvfb_123",Z1="_disabled_1wvfb_134",yn={stepper:$1,button:P1,glyph:H1,readout:R1,digits:V1,disabled:Z1},D1=400,O1=80;function I1({value:s,onChange:i,min:l=-1/0,max:u=1/0,step:p=1,label:h,disabled:m=!1,sound:v=!0,className:x=""}){const _=Cr("tick",v),z=c.useRef(s);z.current=s;const b=c.useRef(null),S=c.useRef(null),N=Y=>Math.max(l,Math.min(u,Y)),V=Y=>{const ue=N(z.current+Y);ue!==z.current&&(z.current=ue,i==null||i(ue),_())},C=()=>{b.current&&clearTimeout(b.current),S.current&&clearInterval(S.current),b.current=null,S.current=null};c.useEffect(()=>C,[]);const $=c.useRef(null),X=c.useRef(null),Q=c.useRef(s);c.useLayoutEffect(()=>{const Y=Q.current;Q.current=s;const ue=$.current,pe=X.current;if(Y===s||m||!ue||!pe||Bn())return;const te=_n(ue,"stepper"),ae=parseFloat(getComputedStyle(ue).getPropertyValue("--sc-motion-stepper-roll"))||0;if(!(ae>0||In(te)))return;const I=(s>Y?1:-1)*ae*Nt(ue).height,H=ii(te.travelEasing),P=ci(H),xe=H.map((q,ce)=>({transform:`translateY(${I*(1-q)}px) scale(${1-.2*te.squash*P[ce]}, ${1+.2*te.stretch*P[ce]})`}));zr(pe,xe,te.travelDur,"linear")},[s,m]);const K=Y=>{m||(V(Y),C(),b.current=setTimeout(()=>{S.current=setInterval(()=>V(Y),O1)},D1))},J=s<=l,re=s>=u,R=Y=>{m||(Y.key==="ArrowUp"?(Y.preventDefault(),V(p)):Y.key==="ArrowDown"?(Y.preventDefault(),V(-p)):Y.key==="Home"&&Number.isFinite(l)?(Y.preventDefault(),z.current!==l&&_(),z.current=l,i==null||i(l)):Y.key==="End"&&Number.isFinite(u)&&(Y.preventDefault(),z.current!==u&&_(),z.current=u,i==null||i(u)))};return f.jsxs("div",{className:`${yn.stepper} ${m?yn.disabled:""} ${x}`,children:[f.jsx("button",{type:"button",className:yn.button,"aria-label":h?`Decrease ${h}`:"Decrease",disabled:m||J,onPointerDown:()=>K(-p),onPointerUp:C,onPointerLeave:C,onPointerCancel:C,children:f.jsx(Wo,{glyph:S1,weight:"bold",size:"sm",className:yn.glyph})}),f.jsx("span",{ref:$,className:yn.readout,role:"spinbutton",tabIndex:m?-1:0,"aria-valuenow":s,"aria-valuemin":Number.isFinite(l)?l:void 0,"aria-valuemax":Number.isFinite(u)?u:void 0,"aria-label":h,"aria-disabled":m||void 0,onKeyDown:R,children:f.jsx("span",{ref:X,className:yn.digits,children:s})}),f.jsx("button",{type:"button",className:yn.button,"aria-label":h?`Increase ${h}`:"Increase",disabled:m||re,onPointerDown:()=>K(p),onPointerUp:C,onPointerLeave:C,onPointerCancel:C,children:f.jsx(Wo,{glyph:C1,weight:"bold",size:"sm",className:yn.glyph})})]})}const B1="_track_s3qo0_27",U1="_indicator_s3qo0_38",Y1="_segment_s3qo0_59",W1="_md_s3qo0_74",Q1="_sm_s3qo0_84",G1="_lg_s3qo0_94",K1="_count_s3qo0_104",q1="_segmentSelected_s3qo0_113",J1="_disabled_s3qo0_127",wn={track:B1,indicator:U1,segment:Y1,md:W1,sm:Q1,lg:G1,count:K1,segmentSelected:q1,disabled:J1};function X1({options:s=[],value:i,onChange:l,disabled:u=!1,label:p,size:h="md",sound:m=!0,className:v=""}){const x=Cr("select",m),_=I=>{I!==i&&x(),l==null||l(I)},z=c.useRef(null),b=c.useRef({}),S=c.useRef(null),[N,V]=c.useState(null),C=c.useRef(null),$=c.useRef(null),X=c.useRef(i);X.current=i;const Q=I=>{const H=z.current,P=b.current[I];if(!H||!P)return null;const xe=Nt(H),q=Nt(P);return{l:q.left-xe.left-H.clientLeft,r:q.right-xe.left-H.clientLeft}},K=c.useCallback(()=>{const I=Q(i);V(I?{left:I.l,width:I.r-I.l}:null)},[i]);c.useLayoutEffect(()=>{K()},[K,s.length,h]);const J=()=>{if(u||Bn()||!z.current||!S.current)return null;const I=_n(z.current,"segmented-control");return In(I)?{...I,cap:parseFloat(getComputedStyle(S.current).height)}:null},re=(I,H,P,xe)=>{z.current.setAttribute("data-driven",""),zr(S.current,I,H,P,{hold:xe,onDone:()=>{var q;return(q=z.current)==null?void 0:q.removeAttribute("data-driven")}})};c.useLayoutEffect(()=>{if(!N)return;const I={l:N.left,r:N.left+N.width},H=$.current||C.current;C.current=I,$.current=null;const P=J();!P||!H||H.l===I.l&&H.r===I.r||re(Mr(P,H,I,P.cap),P.travelDur,"linear",!1)},[N==null?void 0:N.left,N==null?void 0:N.width]);const R=()=>{if(!$.current)return;const I=J(),H=$.current;$.current=null,I&&C.current&&re(Mr(I,H,C.current,I.cap),I.travelDur,"linear",!1)},Y=I=>{if(I===i||!C.current)return;const H=J(),P=Q(I);if(!H||H.lean<=0||!P)return;const xe=S.current.getAnimations().length?di(S.current,{left:Nt(z.current).left+z.current.clientLeft}):C.current;$.current=ui(H,C.current,P);const q=i,ce=()=>setTimeout(()=>{X.current===q&&R()},0);window.addEventListener("pointerup",ce,{once:!0}),re([Un({...xe,h:H.cap},H.cap),Un({...$.current,h:H.cap},H.cap)],H.leanDur,H.leanEasing,!0)};c.useEffect(()=>(window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)),[K]);const ue=I=>{var H;(H=b.current[I])==null||H.focus()},pe=I=>{if(u||s.length===0)return;const H=(I+s.length)%s.length,P=s[H];P&&(_(P.value),ue(P.value))},te=(I,H)=>{if(!u)switch(I.key){case"ArrowRight":case"ArrowDown":I.preventDefault(),pe(H+1);break;case"ArrowLeft":case"ArrowUp":I.preventDefault(),pe(H-1);break;case"Home":I.preventDefault(),pe(0);break;case"End":I.preventDefault(),pe(s.length-1);break}},ae=s.findIndex(I=>I.value===i);return f.jsxs("div",{ref:z,className:`${wn.track} ${wn[h]||wn.md} ${u?wn.disabled:""} ${v}`,role:"radiogroup","aria-label":p,"aria-disabled":u||void 0,children:[N&&f.jsx("span",{ref:S,className:wn.indicator,"aria-hidden":"true",style:{transform:`translateX(${N.left}px)`,width:`${N.width}px`}}),s.map((I,H)=>{const P=I.value===i,xe=P||ae===-1&&H===0;return f.jsxs("button",{type:"button",ref:q=>{b.current[I.value]=q},role:"radio","aria-checked":P,tabIndex:u?-1:xe?0:-1,disabled:u,className:`${wn.segment} ${P?wn.segmentSelected:""}`,onClick:()=>_(I.value),onPointerDown:()=>Y(I.value),onPointerLeave:R,onKeyDown:q=>te(q,H),children:[I.label,I.count!==void 0&&f.jsx("span",{className:wn.count,children:I.count})]},I.value)})]})}const dd=16,Il=["M12.34 7.88L12.31 8.49L12.22 9.11L12.07 9.72L11.84 10.33L11.55 10.94L11.17 11.52L10.70 12.06L10.15 12.56L9.50 13.00L8.78 13.34L7.98 13.58L7.12 13.70L6.24 13.67L5.34 13.50L4.46 13.16L3.63 12.67L2.88 12.03L2.24 11.26L1.73 10.38L1.39 9.41L1.21 8.40L1.21 7.36L1.39 6.34L1.73 5.37L2.24 4.49L2.88 3.72L3.63 3.08L4.46 2.59L5.34 2.26L6.24 2.08L7.12 2.06L7.98 2.17L8.78 2.41L9.50 2.76L10.15 3.19L10.70 3.69L11.17 4.24L11.55 4.82L11.84 5.42L12.07 6.03L12.22 6.65L12.31 7.26Z","M15.48 7.88L15.39 8.95L15.14 10.00L14.74 10.99L14.20 11.91L13.54 12.75L12.78 13.48L11.92 14.09L10.99 14.59L10.00 14.94L8.97 15.13L7.92 15.16L6.88 15.03L5.88 14.72L4.95 14.26L4.11 13.65L3.38 12.93L2.77 12.12L2.29 11.24L1.93 10.31L1.69 9.35L1.57 8.37L1.57 7.39L1.70 6.41L1.94 5.45L2.30 4.53L2.79 3.65L3.41 2.85L4.14 2.13L4.97 1.53L5.90 1.07L6.89 0.75L7.92 0.60L8.97 0.61L10.01 0.78L11.02 1.12L11.96 1.60L12.83 2.22L13.60 2.96L14.25 3.80L14.78 4.74L15.17 5.74L15.41 6.80Z","M15.02 7.88L14.96 8.89L14.73 9.88L14.35 10.81L13.83 11.67L13.19 12.43L12.45 13.08L11.64 13.63L10.77 14.06L9.86 14.37L8.91 14.55L7.94 14.61L6.97 14.54L6.02 14.33L5.09 13.99L4.21 13.52L3.38 12.93L2.63 12.23L1.97 11.42L1.42 10.50L0.99 9.50L0.72 8.43L0.62 7.32L0.72 6.19L1.01 5.09L1.49 4.06L2.15 3.15L2.95 2.37L3.87 1.75L4.86 1.31L5.89 1.04L6.92 0.93L7.94 0.97L8.92 1.13L9.85 1.40L10.74 1.77L11.58 2.23L12.36 2.79L13.07 3.43L13.70 4.17L14.24 5.00L14.65 5.90L14.91 6.87Z","M14.05 7.88L13.99 8.74L13.82 9.60L13.55 10.43L13.17 11.23L12.69 11.97L12.09 12.64L11.40 13.22L10.61 13.68L9.77 14.02L8.87 14.22L7.95 14.29L7.03 14.22L6.12 14.02L5.23 13.71L4.38 13.28L3.58 12.73L2.84 12.06L2.20 11.29L1.67 10.41L1.28 9.44L1.04 8.41L0.96 7.34L1.05 6.27L1.31 5.21L1.74 4.21L2.31 3.28L3.02 2.45L3.86 1.74L4.80 1.19L5.81 0.80L6.86 0.60L7.92 0.58L8.96 0.74L9.94 1.07L10.83 1.55L11.63 2.15L12.30 2.85L12.87 3.62L13.31 4.44L13.65 5.28L13.88 6.14L14.01 7.01Z","M15.21 7.88L15.08 8.91L14.79 9.89L14.36 10.82L13.81 11.65L13.13 12.38L12.36 12.97L11.52 13.43L10.64 13.74L9.74 13.91L8.84 13.93L7.97 13.82L7.15 13.59L6.38 13.25L5.68 12.82L5.06 12.30L4.53 11.72L4.09 11.09L3.74 10.41L3.49 9.70L3.33 8.97L3.27 8.24L3.30 7.51L3.41 6.80L3.59 6.09L3.84 5.40L4.16 4.73L4.57 4.07L5.06 3.44L5.64 2.85L6.32 2.33L7.09 1.89L7.96 1.57L8.89 1.39L9.86 1.38L10.84 1.54L11.79 1.89L12.67 2.41L13.45 3.09L14.11 3.90L14.63 4.81L14.98 5.80L15.18 6.83Z","M14.40 7.88L14.15 8.77L13.82 9.60L13.42 10.37L12.96 11.09L12.45 11.75L11.88 12.38L11.24 12.96L10.53 13.48L9.74 13.94L8.88 14.30L7.94 14.55L6.95 14.67L5.91 14.65L4.86 14.45L3.82 14.07L2.84 13.50L1.96 12.76L1.20 11.85L0.61 10.82L0.21 9.68L0.00 8.49L0.00 7.27L0.20 6.07L0.58 4.92L1.12 3.86L1.82 2.89L2.64 2.04L3.56 1.32L4.58 0.75L5.65 0.34L6.77 0.08L7.90 0.00L9.03 0.09L10.12 0.35L11.15 0.79L12.09 1.39L12.90 2.13L13.56 2.99L14.05 3.94L14.38 4.93L14.53 5.94L14.53 6.93Z","M13.77 7.88L13.47 8.67L13.06 9.37L12.56 9.96L12.01 10.44L11.42 10.82L10.82 11.10L10.23 11.29L9.66 11.40L9.11 11.46L8.57 11.47L8.06 11.45L7.54 11.40L7.03 11.32L6.49 11.21L5.94 11.06L5.37 10.84L4.80 10.53L4.23 10.13L3.70 9.62L3.23 9.00L2.85 8.27L2.59 7.46L2.47 6.59L2.52 5.68L2.73 4.77L3.12 3.91L3.67 3.13L4.36 2.46L5.17 1.92L6.05 1.53L6.99 1.29L7.94 1.20L8.90 1.26L9.84 1.46L10.73 1.79L11.56 2.26L12.30 2.85L12.93 3.56L13.43 4.36L13.76 5.22L13.93 6.12L13.93 7.02Z","M15.96 7.88L15.89 9.03L15.65 10.16L15.27 11.25L14.74 12.28L14.07 13.23L13.27 14.08L12.35 14.80L11.33 15.38L10.22 15.78L9.06 15.99L7.89 16.00L6.74 15.81L5.65 15.43L4.64 14.88L3.74 14.18L2.98 13.36L2.35 12.45L1.87 11.47L1.54 10.46L1.36 9.42L1.32 8.39L1.44 7.38L1.69 6.41L2.06 5.50L2.54 4.66L3.11 3.91L3.77 3.23L4.48 2.63L5.26 2.11L6.10 1.67L6.99 1.32L7.94 1.07L8.94 0.94L9.97 0.96L11.01 1.14L12.02 1.49L12.98 2.03L13.85 2.73L14.59 3.58L15.18 4.55L15.61 5.61L15.87 6.73Z","M13.23 7.88L13.11 8.61L12.88 9.31L12.58 9.97L12.21 10.58L11.77 11.14L11.29 11.66L10.75 12.14L10.15 12.57L9.48 12.92L8.76 13.18L7.99 13.32L7.20 13.31L6.41 13.14L5.68 12.81L5.04 12.34L4.50 11.75L4.10 11.08L3.84 10.35L3.71 9.61L3.71 8.89L3.81 8.20L3.99 7.57L4.22 6.98L4.49 6.45L4.79 5.94L5.11 5.47L5.45 5.00L5.84 4.55L6.28 4.12L6.79 3.72L7.37 3.39L8.01 3.14L8.71 3.01L9.44 3.01L10.17 3.14L10.87 3.42L11.51 3.82L12.07 4.34L12.54 4.95L12.89 5.64L13.13 6.37L13.24 7.12Z","M14.59 7.88L14.41 8.81L14.07 9.67L13.58 10.44L12.98 11.09L12.30 11.62L11.57 12.01L10.84 12.29L10.11 12.47L9.39 12.58L8.70 12.62L8.01 12.62L7.33 12.57L6.64 12.46L5.95 12.28L5.27 12.01L4.61 11.64L3.99 11.16L3.44 10.58L2.97 9.90L2.61 9.14L2.35 8.31L2.22 7.43L2.23 6.53L2.36 5.62L2.64 4.72L3.07 3.87L3.63 3.08L4.32 2.39L5.12 1.83L6.01 1.41L6.96 1.15L7.94 1.05L8.92 1.13L9.87 1.35L10.77 1.71L11.60 2.19L12.37 2.78L13.04 3.46L13.63 4.22L14.09 5.07L14.42 5.97L14.59 6.92Z","M16.00 7.88L16.01 9.05L15.80 10.20L15.37 11.30L14.74 12.28L13.94 13.11L13.01 13.77L12.00 14.23L10.96 14.50L9.92 14.60L8.91 14.54L7.95 14.35L7.06 14.05L6.24 13.66L5.48 13.21L4.79 12.69L4.15 12.12L3.57 11.49L3.06 10.80L2.62 10.04L2.27 9.21L2.03 8.33L1.92 7.41L1.96 6.47L2.15 5.53L2.50 4.64L3.00 3.82L3.65 3.10L4.41 2.52L5.24 2.08L6.13 1.78L7.04 1.61L7.96 1.55L8.86 1.60L9.77 1.74L10.66 1.96L11.55 2.28L12.42 2.71L13.27 3.25L14.06 3.93L14.77 4.75L15.35 5.69L15.77 6.74Z"],eh="_mark_nniye_3",th="_sm_nniye_24",nh="_md_nniye_1",rh="_lg_nniye_26",sh="_working_nniye_28",oh="_paused_nniye_29",ah="_base_nniye_33",lh="_glint_nniye_34",ih="_spin_nniye_36",ch="_loop_nniye_37",bt={mark:eh,sm:th,md:nh,lg:rh,working:sh,paused:oh,base:ah,glint:lh,spin:ih,loop:ch},uh={sm:bt.sm,md:bt.md,lg:bt.lg},dh=3.2;function ph(s,i){const l=s%2===0,p=-((l?1:-1)*(360*s)/i),h=p+360*(l?3:7);return{from:`${p.toFixed(2)} 8 8`,to:`${h.toFixed(2)} 8 8`}}function fh({working:s=!0,size:i="sm",label:l,className:u="",...p}){const h=`wm${c.useId().replace(/[^a-zA-Z0-9]/g,"")}`,m=Il.length,v=l?{role:"img","aria-label":l}:{"aria-hidden":!0},x=[bt.mark,uh[i]??bt.sm,s?bt.working:bt.paused,u].filter(Boolean).join(" ");return f.jsxs("svg",{viewBox:`0 0 ${dd} ${dd}`,className:x,focusable:"false",...v,...p,children:[s&&f.jsx("defs",{children:Il.map((_,z)=>{const{from:b,to:S}=ph(z,m);return f.jsxs("linearGradient",{id:`${h}-s${z}`,gradientUnits:"userSpaceOnUse",x1:"8",y1:"8",x2:"16",y2:"8",children:[f.jsx("stop",{offset:"0",className:bt.base}),f.jsx("stop",{offset:"0.45",className:bt.base}),f.jsx("stop",{offset:"1",className:bt.glint}),f.jsx("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:b,to:S,dur:`${dh}s`,repeatCount:"indefinite"})]},z)})}),Il.map((_,z)=>f.jsx("g",{className:bt.spin,style:{"--wm-i":z},children:f.jsx("path",{d:_,className:bt.loop,style:{"--wm-i":z},stroke:s?`url(#${h}-s${z})`:void 0})},z))]})}const hh="_button_1cn8j_34",mh="_label_1cn8j_74",gh="_arrow_1cn8j_84",vh="_sm_1cn8j_57",xh="_primary_1cn8j_122",yh="_destructive_1cn8j_123",wh="_secondary_1cn8j_157",bh="_tertiary_1cn8j_173",kh="_loading_1cn8j_207",Ah="_working_1cn8j_211",Zn={button:hh,label:mh,arrow:gh,sm:vh,primary:xh,destructive:yh,secondary:wh,tertiary:bh,loading:kh,working:Ah},_h=["primary","secondary","tertiary","destructive"],zh=["lg","sm"];function Lh(){return f.jsx(g1,{weight:"bold",className:Zn.arrow,"aria-hidden":"true"})}function pd({variant:s="primary",size:i="lg",disabled:l=!1,loading:u=!1,arrow:p=!0,type:h="button",sound:m=!0,children:v,onClick:x,className:_="",...z}){const b=_h.includes(s)?s:"primary",S=zh.includes(i)?i:"lg",N=l||u,V=Cr("press",m);return f.jsxs("button",{type:h,className:`${Zn.button} ${Zn[b]} ${S==="sm"?Zn.sm:""} ${u?Zn.loading:""} ${_}`,disabled:N,"aria-busy":u||void 0,onClick:N?void 0:C=>{V(),x==null||x(C)},...z,children:[f.jsx("span",{className:Zn.label,children:v}),u?f.jsx(fh,{className:Zn.working}):p&&f.jsx(Lh,{})]})}function Eh(s,i=0,l=0,u=0){const p=Math.max(0,s),h=p;if(p===0)return{d:"",width:0,height:0};const m=Math.hypot(h,p),v=Math.PI-Math.atan2(p,h);let x=Math.max(0,i),_=Math.max(0,l),z=x*p/h,b=_/Math.tan(v/2);if(z+b>m){const Q=m/(z+b);x*=Q,_*=Q,z*=Q,b*=Q}const S=h+b,N=h/m,V=p/m,C=Q=>Math.round(Q*1e3)/1e3,$=(Q,K)=>`${C(S+Q)} ${C(K)}`;return{d:[`M ${$(-(h+b),-u)}`,`L ${$(-(h+b),0)}`,_?`A ${C(_)} ${C(_)} 0 0 1 ${$(-h+N*b,V*b)}`:"",`L ${$(-N*z,p-V*z)}`,x?`A ${C(x)} ${C(x)} 0 0 0 ${$(N*z,p-V*z)}`:"",`L ${$(h-N*b,V*b)}`,_?`A ${C(_)} ${C(_)} 0 0 1 ${$(h+b,0)}`:"",`L ${$(h+b,-u)}`,"Z"].filter(Boolean).join(" "),width:C(2*S),height:C(p+u)}}const Sh=s=>{const i=[];let l=0,u="";for(const p of s)p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(u),u=""):u+=p;return u.trim()&&i.push(u),i.map(p=>p.trim()).filter(Boolean)};function Mh(s){var l;if(!s||s.trim()==="none")return"none";const i=[];for(const u of Sh(s)){if(/\binset\b/.test(u))continue;const p=(l=u.match(/(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b|\b(?:transparent|currentcolor|black|white)\b/i))==null?void 0:l[0],h=u.replace(p||""," ").match(/-?\d*\.?\d+(?:px)?/g)||[],[m="0",v="0",x="0"]=h.map(_=>/px$/.test(_)?_:`${_}px`);p&&(/\/\s*0(?:\.0*)?\s*\)$/.test(p)||/^transparent$/i.test(p)||i.push(`drop-shadow(${m} ${v} ${x} ${p})`))}return i.length?i.join(" "):"none"}const Ch="_wrapper_1y9fh_21",jh="_tooltip_1y9fh_26",Nh="_arrow_1y9fh_62",Fh="_open_1y9fh_73",Th="_singleline_1y9fh_78",$h="_multiline_1y9fh_82",wr={wrapper:Ch,tooltip:jh,arrow:Nh,open:Fh,singleline:Th,multiline:$h};function Ph({content:s,multiline:i=!1,open:l,sound:u=!0,children:p}){const h=c.useId(),[m,v]=c.useState(!1),x=l??m,_=c.useRef(null),z=c.useRef(null),b=Hh(z,x),S=Cr("reveal",u),N=c.useRef(x),V=c.useRef(0),C=c.useRef(null);c.useLayoutEffect(()=>{const Q=_.current,K=z.current,J=N.current&&!x;if(N.current=x,!x&&!J||!Q||!K||Bn())return;const re=_n(K,"tooltip"),R=getComputedStyle(K),Y=parseFloat(R.getPropertyValue("--sc-motion-tooltip-grow-from")),ue=Number.isFinite(Y)?Math.min(1,Math.max(0,Y)):1;if(!In(re)&&ue===1)return;const pe=parseFloat(R.getPropertyValue("--sc-size-tooltip-lift"))||0;let te=J?1:0;const ae=C.current;if(ae&&ae.anim.playState==="running"){const j=Math.min(1,Math.max(0,(ae.anim.currentTime||0)/ae.duration));te=ae.ys[Math.round(j*(ae.ys.length-1))]}const I=J?0:1;let H=ii(re.travelEasing),P=re.travelDur;if(J){const j=H.findIndex(de=>de>=1);j>0&&(P=Math.round(P*j/(H.length-1)),H=H.slice(0,j+1).map(de=>Math.min(1,de)))}const xe=Math.abs(I-te),q=ci(H).map(j=>j*xe),ce=H.map(j=>te+(I-te)*j),U=ce.map((j,de)=>{const ge=Math.max(0,ue+(1-ue)*j);return{transform:`translate(-50%, ${-pe*(1-j)}px) scale(${ge*(1-.2*re.squash*q[de])}, ${ge*(1+.2*re.stretch*q[de])})`,opacity:Math.min(1,Math.max(0,j))}});K.getAnimations().forEach(j=>j.cancel());const le=++V.current,G=()=>{V.current===le&&Q.removeAttribute("data-driven")};Q.setAttribute("data-driven","");const k=K.animate(U,{duration:P,easing:"linear"});k.onfinish=G,k.oncancel=G,C.current={anim:k,ys:ce,duration:P}},[x]);const $=()=>{l===void 0&&!m&&S(),v(!0)},X=()=>v(!1);return f.jsxs("span",{ref:_,className:wr.wrapper,onMouseEnter:$,onMouseLeave:X,onFocus:$,onBlur:X,children:[f.jsx("span",{"aria-describedby":x?h:void 0,children:p}),f.jsxs("span",{ref:z,role:"tooltip",id:h,className:`${wr.tooltip} ${x?wr.open:""} ${i?wr.multiline:wr.singleline}`,style:b.drop!=="none"?{"--tip-drop":b.drop}:void 0,children:[s,b.d&&f.jsx("svg",{className:wr.arrow,"aria-hidden":"true",focusable:"false",width:b.width,height:b.height,viewBox:`0 ${-b.overlap} ${b.width} ${b.height}`,style:{top:`calc(100% - ${b.overlap}px)`},children:f.jsx("path",{d:b.d})})]})]})}function Hh(s,i){const[l,u]=c.useState({d:"",width:0,height:0,overlap:0,drop:"none"});return c.useLayoutEffect(()=>{const p=s.current;if(!p)return;const h=()=>{const m=getComputedStyle(p),v=b=>parseFloat(m.getPropertyValue(b))||0,x=1,_=Eh(v("--sc-size-tooltip-arrow"),v("--sc-size-tooltip-arrow-tip"),v("--sc-size-tooltip-arrow-fillet"),x),z=Mh(m.getPropertyValue("--sc-shadow-tooltip-plate"));u(b=>b.d===_.d&&b.drop===z&&b.overlap===x?b:{..._,overlap:x,drop:z})};return h(),window.addEventListener("sc-tokens-change",h),()=>window.removeEventListener("sc-tokens-change",h)},[s,i]),l}const Rh=Math.PI*2,Vh=new Set(["uskel","uloader","usplash"]),Zh=new Set(["ucard"]),Dh={uskel:0,uloader:1.96,usplash:0},fd=new Set(["progress","active","current"]);function Oh(s){return function(){s|=0,s=s+1831565813|0;let i=Math.imul(s^s>>>15,1|s);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Ih(s){let i=2166136261;for(const l of String(s))i=Math.imul(i^l.charCodeAt(0),16777619);return i}const Bh=(s,i,l,u)=>s.fillRect(i-u,l-u,u*2,u*2),Uh=(s,i,l,u)=>{s.beginPath(),s.arc(i,l,u,0,Rh),s.fill()},sp=(s,i,l,u)=>{u*=1.25;const p=Math.max(.7,u*.38);s.fillRect(i-u,l-p/2,u*2,p),s.fillRect(i-p/2,l-u,p,u*2)},Yh={plus:sp,square:Bh,round:Uh};function wt(s,i,l){const u=i.rng,p=(l.s||5)*i.S,h=l.x2-l.x1,m=l.y2-l.y1,v=Math.hypot(h,m);if(!v)return;const x=h/v,_=m/v,z=-_,b=x,S=l.w,N=l.ext??S*.35,V=l.r??.9,C=l.jit??.7;let $=0;for(let X=-N;X<=v+N;X+=p,$++){const Q=l.grid?0:$%2*p/2;let K=1;if(l.taper){const J=(X+N)/(v+2*N);K=Math.min(1,(l.fadeEnd?1-J:Math.min(J,1-J))/l.taper)}for(let J=-S/2+Q;J<=S/2+.01;J+=p){const re=l.crisp?K:Math.min(1,(S/2-Math.abs(J))/(p*1.6)+.3)*K;if(u()>re)continue;const R=l.x1+x*X+z*J+(u()-.5)*C,Y=l.y1+_*X+b*J+(u()-.5)*C;s.globalAlpha=(l.a??.9)*(l.af?l.af(X+(l.u0||0),J,R,Y):1),i.dot(s,R,Y,V)}}s.globalAlpha=1}function Vn(s,i,l,u,p={}){let h=0;for(let m=0;m<l.length-1;m++)wt(s,i,{x1:l[m][0],y1:l[m][1],x2:l[m+1][0],y2:l[m+1][1],w:u,u0:h,...p}),h+=Math.hypot(l[m+1][0]-l[m][0],l[m+1][1]-l[m][1])}const Wh=s=>Math.max(0,Math.min(1,Number.isFinite(+s)?+s:0)),Qh={udiv(s,i,l,u){const p=Math.max(1,Math.round(+u.opts.rows||3)),h=7,m=u.opts.fade||"both";wt(s,u,{x1:2,y1:l/2,x2:i-2,y2:l/2,w:(p-1)*h*u.S,s:h,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:m==="none"?0:m==="end"?.7:.22,fadeEnd:m==="end"})},ucardhead(s,i,l,u){wt(s,u,{x1:-20,y1:l*.8,x2:i+20,y2:l*.15,w:44,s:7,r:1.6,ext:0}),wt(s,u,{x1:i*.4,y1:-20,x2:i*.78,y2:l+20,w:28,s:7,r:1.6,ext:0,a:.4})},ucard(s,i,l,u){const p=12*u.S;for(let h=p/2;h<l;h+=p)for(let m=p/2;m<i;m+=p){let v=.14;u.hover&&(v+=.86*Math.exp(-((m-u.mx)**2+(h-u.my)**2)/5e3)),s.globalAlpha=v,u.dot(s,m,h,1.6)}s.globalAlpha=1},ucta(s,i,l,u){Vn(s,u,[[-.05*i,.1*l],[.22*i,.5*l],[.02*i,1.1*l]],46,{s:7,r:1.6,ext:0}),Vn(s,u,[[1.05*i,-.1*l],[.78*i,.5*l],[.98*i,1.1*l]],46,{s:7,r:1.6,ext:0})},uempty(s,i,l,u){Vn(s,u,[[.32,.18],[.64,.36],[.36,.62],[.68,.84]].map(([p,h])=>[p*i,h*l]),24,{s:6,r:1.3,a:.55,ext:0})},uskel(s,i,l,u){const p=[["c",40,40,20],["r",76,28,180,12],["r",76,48,110,10],["r",20,88,i-40,10],["r",20,108,i-40,10],["r",20,128,i*.55,10],["r",20,158,i-40,46]],h=6*u.S,m=u.t*240%(i+500)-250;for(let v=h/2;v<l;v+=h)for(let x=h/2;x<i;x+=h){if(!p.some(b=>b[0]==="c"?(x-b[1])**2+(v-b[2])**2<b[3]**2:x>=b[1]&&x<=b[1]+b[3]&&v>=b[2]&&v<=b[2]+b[4]))continue;const z=Math.exp(-((x+v*.5-m)**2)/4050);s.globalAlpha=.16+.6*z,u.dot(s,x,v,1.3)}s.globalAlpha=1},uprog(s,i,l,u){const p=7*u.S,h=Math.max(1,Math.round(+u.opts.rows||1)),m=Wh(u.opts.progress),v=l/2-(h-1)*p/2,x=u.teal("progress");for(let _=0;_<h;_++)for(let z=4;z<i;z+=p){const b=z/i<m;s.fillStyle=b?x:u.fg,s.globalAlpha=b?1:.2,u.dot(s,z,v+_*p,1.6)}s.globalAlpha=1,s.fillStyle=u.fg},uloader(s,i,l,u){const p=[[.26,.2],[.74,.34],[.26,.56],[.74,.8]].map(([x,_])=>[x*i,_*l]);let h=0;for(let x=0;x<p.length-1;x++)h+=Math.hypot(p[x+1][0]-p[x][0],p[x+1][1]-p[x][1]);const m=u.t%2.8/2.8,v=Math.min(1,m/.7)*(h+30);Vn(s,u,p,26,{s:6,r:1.3,ext:0,a:1,af:x=>x<v?v-x<18&&m<.7?1:.85:.08})},uline(s,i,l,u){s.fillStyle=u.teal("active"),wt(s,u,{x1:3,y1:l/2,x2:i-3,y2:l/2,w:5*u.S,s:5,r:1.3,ext:0,jit:0,crisp:!0,grid:!0,a:1}),s.fillStyle=u.fg},umedia(s,i,l,u){const p=10*u.S;s.globalAlpha=.16;for(let h=p/2;h<l;h+=p)for(let m=p/2;m<i;m+=p)u.dot(s,m,h,1.3);s.globalAlpha=1,wt(s,u,{x1:-20,y1:l*.9,x2:i+20,y2:l*.1,w:40,s:7,r:1.6,ext:0,a:.75})},uhero(s,i,l,u){Vn(s,u,[[.6,-.08],[1.06,.3],[.56,.58],[1.06,.96]].map(([p,h])=>[p*i,h*l]),72,{s:7,r:1.6,ext:0})},ufooter(s,i,l,u){const h=7*u.S,m=u.rng;s.fillStyle=u.C.page,s.fillRect(0,0,i,90),s.fillStyle=u.C.inverse,s.fillRect(0,90,i,l-90);for(let v=h/2;v<90;v+=h)for(let x=h/2;x<i;x+=h)m()<Math.pow(v/90,1.6)&&u.dot(s,x,v,1.6)},uquote(s,i,l,u){const p={w:14*u.S,s:7,r:1.6,ext:0,jit:0,crisp:!0,grid:!0,a:1,taper:.55,fadeEnd:!0},h=24,m=130;wt(s,u,{...p,x1:h,y1:h,x2:h+m,y2:h}),wt(s,u,{...p,x1:h,y1:h,x2:h,y2:h+m}),wt(s,u,{...p,x1:i-h,y1:l-h,x2:i-h-m,y2:l-h}),wt(s,u,{...p,x1:i-h,y1:l-h,x2:i-h,y2:l-h-m})},utime(s,i,l,u){const p=Math.max(1,Math.round(+u.opts.steps||4)),h=Math.round(+u.opts.current||0),m=l/p,v=i/2,x=7*u.S,_=Array.from({length:p},(z,b)=>m*(b+.5));for(let z=_[0];z<=_[p-1];z+=x)_.some(b=>Math.abs(z-b)<15)||(s.globalAlpha=z<_[Math.min(Math.max(h,0),p-1)]?.75:.18,u.dot(s,v,z,1.4));_.forEach((z,b)=>{s.fillStyle=b===h?u.teal("current"):u.fg,s.globalAlpha=b<=h?1:.25;for(let S=-1;S<=1;S++)for(let N=-1;N<=1;N++)u.dot(s,v+S*6,z+N*6,1.5)}),s.globalAlpha=1,s.fillStyle=u.fg},ubullet(s,i,l,u){const p=i/3;u.opts.accent&&(s.fillStyle=u.teal("current"));for(let h=0;h<3;h++)for(let m=0;m<3;m++)u.dot(s,p/2+h*p,p/2+m*p,p*.26);s.fillStyle=u.fg},usep(s,i,l,u){s.globalAlpha=.6;for(let p=0;p<3;p++)u.dot(s,i*(.2+p*.3),l*(.8-p*.3),i*.1);s.globalAlpha=1},uthumb(s,i,l,u){const p=u.rng,h=2+Math.floor(p()*2),m=[];for(let v=0;v<=h;v++)m.push([(v%2?.72+.22*p():.06+.22*p())*i,(.12+v*(.76/h)+(p()-.5)*.08)*l]);p()>.5&&m.forEach(v=>{const x=v[0];v[0]=v[1],v[1]=x}),Vn(s,u,m,i*(.14+.12*p()),{s:6,r:1.3,ext:0})},unews(s,i,l,u){wt(s,u,{x1:i*.5,y1:-20,x2:i+30,y2:l*.42,w:42,s:7,r:1.6,ext:0}),wt(s,u,{x1:i*.76,y1:-20,x2:i+30,y2:l*.2,w:22,s:7,r:1.6,ext:0,a:.45})},usplash(s,i,l,u){const p=u.t;Vn(s,u,[[.12,.14],[.88,.3],[.14,.5],[.88,.68]].map(([h,m])=>[h*i,m*l]),50,{s:7,r:1.6,af:h=>.28+.72*Math.pow(.5+.5*Math.sin(h*.016-p*2),2)})},type(s,i,l,u){if(!i||!l||typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.ceil(i),p.height=Math.ceil(l);const h=p.getContext("2d"),m=u.opts.text||"Crafthouse";h.textAlign="center",h.textBaseline="middle";let v=l*(+u.opts.textScale||.62);h.font=`500 ${v}px ${u.font}`;const x=h.measureText(m).width;x>i*.88&&(v*=i*.88/x,h.font=`500 ${v}px ${u.font}`),h.fillText(m,i/2,l/2);const _=Math.min(9,Math.max(4.2,v/34))*u.S,z=_*.24,b=h.getImageData(0,0,p.width,p.height).data,S=-.14,N=Math.cos(S),V=Math.sin(S),C=Math.hypot(i,l)/2+10;let $=0;for(let X=-C;X<C;X+=_,$++)for(let Q=-C+$%2*_/2;Q<C;Q+=_){const K=i/2+Q*N-X*V,J=l/2+Q*V+X*N;K<0||J<0||K>=p.width||J>=p.height||b[((J|0)*p.width+(K|0))*4+3]>100&&u.dot(s,K,J,z)}}};function Gh(s,i){const{art:l,w:u,h:p,dpr:h,colors:m,surface:v="inverse",shape:x="plus",density:_=1,seed:z=0,t:b=0,opts:S={},font:N,pointer:V}=i,C=Qh[l];if(!C||!u||!p)return;const{accent:$,...X}=m,Q=v==="inverse"?X.onInverse:X.text,K={inverse:X.inverse,raised:X.raised,page:X.page,sunk:X.sunk};s.setTransform(h,0,0,h,0,0),s.globalAlpha=1,s.clearRect(0,0,u,p),v!=="none"&&(s.fillStyle=K[v]??X.inverse,s.fillRect(0,0,u,p)),s.fillStyle=Q;const J=Math.min(1.6,Math.max(.6,+_||1)),re=R=>{if(!fd.has(R))throw new Error(`PlusField: teal is reserved for ${[...fd].join(", ")}; "${R}" is not one of them.`);return $};C(s,u,p,{C:X,fg:Q,S:1/J,rng:Oh(z),t:b,opts:S,font:N,teal:re,hover:!!(V!=null&&V.hover),mx:(V==null?void 0:V.x)??0,my:(V==null?void 0:V.y)??0,dot:Yh[x]??sp}),s.globalAlpha=1}const Kh="_root_1jtbm_5",qh="_backdrop_1jtbm_17",Jh="_canvas_1jtbm_25",Xh="_srOnly_1jtbm_35",xs={root:Kh,backdrop:qh,canvas:Jh,srOnly:Xh},em={inverse:"--sc-color-surface-inverse",raised:"--sc-color-surface-raised",page:"--sc-color-surface-page",sunk:"--sc-color-surface-sunk",text:"--sc-color-text-primary",onInverse:"--sc-color-text-on-inverse",accent:"--sc-color-brand-accent"},Lr=new Set,On=new Set;let Er=0,Dn=null,kt=null,An=null;const tm=()=>typeof window<"u",nm=()=>!!(An!=null&&An.matches);function op(s){const i=s/1e3;On.forEach(l=>l.paint(i)),Er=On.size?requestAnimationFrame(op):0}function rm(){!Er&&On.size&&(Er=requestAnimationFrame(op))}function ti(){var s,i,l;tm()&&(!Dn&&typeof MutationObserver<"u"&&(Dn=new MutationObserver(()=>Lr.forEach(u=>u.refresh())),Dn.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),!kt&&typeof IntersectionObserver<"u"&&(kt=new IntersectionObserver(u=>u.forEach(p=>{const h=p.target.__plusField;h&&(h.visible=p.isIntersecting,h.syncMotion())}))),!An&&window.matchMedia&&(An=window.matchMedia("(prefers-reduced-motion: reduce)"),(s=An.addEventListener)==null||s.call(An,"change",()=>Lr.forEach(u=>u.syncMotion()))),document.fonts&&!ti.fonts&&(ti.fonts=!0,(l=(i=document.fonts).addEventListener)==null||l.call(i,"loadingdone",()=>Lr.forEach(u=>u.refresh()))))}function sm(){Lr.size||(Dn==null||Dn.disconnect(),Dn=null,kt==null||kt.disconnect(),kt=null,Er&&cancelAnimationFrame(Er),Er=0)}function om(s,i){const l={root:s,canvas:i,ctx:i.getContext("2d"),w:0,h:0,dpr:1,props:null,colors:null,font:"",visible:!0,t:0,pointer:{hover:!1,x:0,y:0},readTokens(){const u=getComputedStyle(s),p=u.color,h={};for(const[m,v]of Object.entries(em))h[m]=u.getPropertyValue(v).trim()||p;l.colors=h,l.font=u.fontFamily},resize(u,p){l.w=u,l.h=p,l.dpr=Math.min(2,window.devicePixelRatio||1);const h=Math.round(u*l.dpr),m=Math.round(p*l.dpr);i.width!==h&&(i.width=h),i.height!==m&&(i.height=m),l.refresh()},animated(){const u=l.props;return!!u&&Vh.has(u.art)&&u.animate!==!1&&!nm()},syncMotion(){var u;if(l.animated()&&l.visible&&l.w&&l.h){On.add(l),rm();return}On.delete(l),l.paint(l.animated()?l.t:Dh[(u=l.props)==null?void 0:u.art]??0)},refresh(){!l.props||!l.w||!l.h||(l.readTokens(),l.syncMotion(),On.has(l)&&l.paint(l.t))},paint(u){const p=l.props;!p||!l.w||!l.h||(l.colors||l.readTokens(),l.t=u,Gh(l.ctx,{art:p.art,w:l.w,h:l.h,dpr:l.dpr,colors:l.colors,surface:p.surface,shape:p.shape,density:p.density,seed:Ih(p.seed??p.art),t:u,opts:p.opts,font:l.font,pointer:l.pointer}))}};return l}const am=new Set(["inverse","raised","page","sunk","none"]),lm=new Set(["plus","square","round"]);function im({art:s,surface:i="inverse",shape:l="plus",density:u=1,animate:p=!0,seed:h,rows:m,fade:v,text:x,progress:_,accent:z=!1,steps:b,current:S,textScale:N,backdrop:V=!1,label:C,as:$="div",className:X="",...Q}){const K=c.useRef(null),J=c.useRef(null),re=c.useRef(null),R={art:s,surface:am.has(i)?i:"inverse",shape:lm.has(l)?l:"plus",density:u,animate:p,seed:h,opts:{rows:m,fade:v,text:x,progress:_,accent:z,steps:b,current:S,textScale:N}};c.useEffect(()=>{const pe=K.current,te=J.current;if(!pe||!te||!te.getContext)return;ti();const ae=om(pe,te);ae.props=R,re.current=ae,pe.__plusField=ae,Lr.add(ae);const I=typeof ResizeObserver<"u"?new ResizeObserver(([q])=>{const{width:ce,height:U}=q.contentRect;(ce!==ae.w||U!==ae.h)&&ae.resize(ce,U)}):null;I==null||I.observe(pe),kt==null||kt.observe(pe);const H=Zh.has(s)?pe.parentElement||pe:null,P=q=>{const ce=pe.getBoundingClientRect();ae.pointer={hover:!0,x:q.clientX-ce.left,y:q.clientY-ce.top},ae.paint(ae.t)},xe=()=>{ae.pointer={hover:!1,x:0,y:0},ae.paint(ae.t)};return H==null||H.addEventListener("pointermove",P),H==null||H.addEventListener("pointerleave",xe),()=>{I==null||I.disconnect(),kt==null||kt.unobserve(pe),H==null||H.removeEventListener("pointermove",P),H==null||H.removeEventListener("pointerleave",xe),On.delete(ae),Lr.delete(ae),delete pe.__plusField,re.current=null,sm()}},[s]),c.useEffect(()=>{const pe=re.current;pe&&(pe.props=R,pe.refresh())});const Y=[xs.root,V?xs.backdrop:"",X].filter(Boolean).join(" "),ue=Math.round(Math.max(0,Math.min(1,Number(_)||0))*100);return f.jsxs($,{ref:K,className:Y,...Q,children:[f.jsx("canvas",{ref:J,className:xs.canvas,"aria-hidden":"true"}),C&&(s==="uloader"||s==="uskel")&&f.jsx("span",{role:"status",className:xs.srOnly,children:C}),s==="uprog"&&f.jsx("span",{role:"progressbar",className:xs.srOnly,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":ue,"aria-label":C})]})}const cm="_underline_w8mvb_3",um={underline:cm},Bl=new WeakMap,hd=s=>{var i;return s.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol')||((i=s.parentElement)==null?void 0:i.parentElement)||null};function ap({active:s=!0,shape:i,density:l,motion:u="plus-underline",className:p="",...h}){const m=c.useRef(null);return c.useLayoutEffect(()=>{const v=m.current,x=v&&s?hd(v):null;if(!x)return;const _=Bl.get(x);if(Bl.set(x,v),!_||_===v||!_.isConnected||Bn())return;const z=_n(v,u);if(!In(z))return;const b=Nt(v),S=di(_,b);_.getAnimations().forEach(N=>N.cancel()),zr(v,Mr(z,S,{l:0,r:b.width},b.height),z.travelDur,"linear")},[s,u]),c.useEffect(()=>{var v;s||(v=m.current)==null||v.getAnimations().forEach(x=>x.cancel())},[s]),c.useEffect(()=>{const v=m.current,x=v&&s?hd(v):null;if(!x)return;const _=z=>{var K,J;const b=(J=(K=z.target).closest)==null?void 0:J.call(K,'a, button, [role="tab"], [role="radio"]');if(!b||!x.contains(b)||b.contains(v)||Bn())return;const S=_n(v,u);if(!In(S)||S.lean<=0)return;const N=Nt(v),V=Nt(b),C={l:0,r:N.width},$=ui(S,C,{l:V.left-N.left,r:V.right-N.left});zr(v,[Un({...C,h:N.height},N.height),Un({...$,h:N.height},N.height)],S.leanDur,S.leanEasing,{hold:!0});let X=!1;const Q=()=>setTimeout(()=>{X||(X=!0,!(Bl.get(x)!==v||!v.isConnected)&&zr(v,Mr(_n(v,u),$,C,N.height),S.travelDur,"linear"))},0);window.addEventListener("pointerup",Q,{once:!0}),b.addEventListener("pointerleave",Q,{once:!0})};return x.addEventListener("pointerdown",_),()=>x.removeEventListener("pointerdown",_)},[s,u]),f.jsx("span",{ref:m,className:`${um.underline} ${p}`,"aria-hidden":"true",...h,children:s&&f.jsx(im,{as:"span",art:"uline",surface:"none",shape:i,density:l})})}const dm="_nav_lg753_18",pm="_row_lg753_26",fm="_brand_lg753_35",hm="_links_lg753_44",mm="_linkItem_lg753_51",gm="_link_lg753_44",vm="_toggle_lg753_79",xm="_trailing_lg753_84",ym="_desktop_lg753_93",wm="_compact_lg753_100",bm="_menu_lg753_118",km="_menuOpen_lg753_128",Xe={nav:dm,row:pm,brand:fm,links:hm,linkItem:mm,link:gm,toggle:vm,trailing:xm,desktop:ym,compact:wm,menu:bm,menuOpen:km};function Am({brand:s,links:i=[],trailing:l,compact:u=!1,underline:p=!1,className:h=""}){const[m,v]=c.useState(!1);return f.jsxs("nav",{className:`${Xe.nav} ${u?Xe.compact:Xe.desktop} ${h}`,"aria-label":"Primary",children:[f.jsxs("div",{className:Xe.row,children:[f.jsx("div",{className:Xe.brand,children:s}),u?f.jsx("button",{type:"button",className:Xe.toggle,"aria-expanded":m,"aria-controls":"navbar-menu",onClick:()=>v(x=>!x),children:m?"Close":"Menu"}):f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:Xe.links,children:i.map(x=>f.jsx("li",{className:Xe.linkItem,children:f.jsxs("a",{className:Xe.link,href:x.href,"aria-current":x.current?"page":void 0,children:[x.label,p&&f.jsx(ap,{active:!!x.current,motion:"nav-bar"})]})},x.href))}),l&&f.jsx("div",{className:Xe.trailing,children:l})]})]}),u&&f.jsxs("div",{id:"navbar-menu",className:`${Xe.menu} ${m?Xe.menuOpen:""}`,children:[f.jsx("ul",{className:Xe.links,children:i.map(x=>f.jsx("li",{className:Xe.linkItem,children:f.jsx("a",{className:Xe.link,href:x.href,"aria-current":x.current?"page":void 0,children:x.label})},x.href))}),l&&f.jsx("div",{className:Xe.trailing,children:l})]})]})}const _m="_slider_18xic_30",zm="_track_18xic_48",Lm="_fill_18xic_59",Em="_thumb_18xic_77",Sm="_dragging_18xic_128",Mm="_moving_18xic_138",br={slider:_m,track:zm,fill:Lm,thumb:Em,dragging:Sm,moving:Mm};function Cm({value:s=.5,onChange:i,min:l=0,max:u=1,step:p=.01,bigStep:h=.05,label:m,disabled:v=!1,sound:x=!0,className:_=""}){const z=Cr("slide",x),b=c.useRef(null),S=c.useRef(null),[N,V]=c.useState(!1),[C,$]=c.useState(!1),X=c.useRef(null),Q=c.useCallback(H=>Math.max(l,Math.min(u,H)),[l,u]),K=(Q(s)-l)/(u-l||1),J=K*100,re=()=>parseFloat(getComputedStyle(b.current).getPropertyValue("--sc-size-slider-thumb"))||0,R=c.useCallback(H=>{const P=b.current;if(!P)return s;const xe=Nt(P),q=re(),ce=xe.width-q,U=H/(P.currentCSSZoom||1),le=ce<=0?0:(U-xe.left-q/2)/ce;return Q(l+le*(u-l))},[Q,l,u,s]),Y=()=>{const H=b.current,P=S.current;H&&P&&(X.current=di(P,Nt(H)))},ue=()=>{var H,P;(H=S.current)==null||H.getAnimations().forEach(xe=>xe.cancel()),(P=b.current)==null||P.removeAttribute("data-driven")};c.useLayoutEffect(()=>{const H=X.current;X.current=null;const P=b.current,xe=S.current;if(!H||!P||!xe||Bn())return;const q=_n(xe,"slider");if(!In(q))return;const ce=re(),U=(Nt(P).width-ce)*K;if(Math.abs(H.l-U)<.5)return;P.setAttribute("data-driven","");const le=Mr(q,{l:H.l-U,r:H.r-U},{l:0,r:ce},ce);zr(xe,le,q.travelDur,"linear",{onDone:()=>P.removeAttribute("data-driven")})},[K]),c.useEffect(()=>ue,[]);const pe=H=>{if(v)return;H.currentTarget.setPointerCapture(H.pointerId),V(!0);const P=R(H.clientX);P!==Q(s)&&Y(),i==null||i(P)},te=H=>{v||!N||(C||(ue(),$(!0)),i==null||i(R(H.clientX)))},ae=()=>{V(!1),$(!1)},I=H=>{if(v)return;let P;switch(H.key){case"ArrowRight":case"ArrowUp":P=s+(H.shiftKey?h:p);break;case"ArrowLeft":case"ArrowDown":P=s-(H.shiftKey?h:p);break;case"Home":P=l;break;case"End":P=u;break;default:return}H.preventDefault(),Q(P)!==Q(s)&&(Y(),z()),i==null||i(Q(P))};return f.jsx("div",{className:`${br.slider} ${_}`,role:"slider",tabIndex:v?-1:0,"aria-valuemin":Math.round(l*100),"aria-valuemax":Math.round(u*100),"aria-valuenow":Math.round(J),"aria-label":m,"aria-disabled":v||void 0,onPointerDown:pe,onPointerMove:te,onPointerUp:ae,onPointerCancel:ae,onKeyDown:I,children:f.jsxs("span",{ref:b,className:`${br.track} ${N?br.dragging:""} ${C?br.moving:""}`,style:{"--value":K},"aria-hidden":"true",children:[f.jsx("span",{className:br.fill}),f.jsx("span",{ref:S,className:br.thumb})]})})}const jm="_field_1a2p2_32",Nm="_label_1a2p2_41",Fm="_description_1a2p2_50",Tm="_helper_1a2p2_51",$m="_box_1a2p2_61",Pm="_input_1a2p2_75",Hm="_icon_1a2p2_97",Rm="_trailing_1a2p2_98",Vm="_prefix_1a2p2_105",Zm="_suffix_1a2p2_106",Dm="_clear_1a2p2_129",Om="_helperError_1a2p2_170",Im="_errored_1a2p2_176",Bm="_raised_1a2p2_187",Um="_disabled_1a2p2_193",nt={field:jm,label:Nm,description:Fm,helper:Tm,box:$m,input:Pm,icon:Hm,trailing:Rm,prefix:Vm,suffix:Zm,clear:Dm,helperError:Om,errored:Im,raised:Bm,disabled:Um},md=s=>s&&!c.isValidElement(s)&&typeof s!="string"?f.jsx(Wo,{glyph:s,weight:"bold"}):s;function Ym({label:s,description:i,helper:l,error:u,disabled:p=!1,type:h="text",value:m,onChange:v,placeholder:x,icon:_,prefix:z,suffix:b,trailing:S,clearable:N=!1,surface:V="page",onClear:C,className:$="",...X}){const Q=c.useId(),K=`${Q}-description`,J=`${Q}-helper`,re=c.useRef(null),R=!!u,Y=[i&&K,(u||l)&&J].filter(Boolean).join(" ")||void 0,ue=m!==void 0?String(m).length>0:void 0,pe=()=>{const te=re.current;C?C():te&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value").set.call(te,""),te.dispatchEvent(new Event("input",{bubbles:!0}))),te==null||te.focus()};return f.jsxs("div",{className:`${nt.field} ${V==="raised"?nt.raised:""} ${p?nt.disabled:""} ${R?nt.errored:""} ${$}`,children:[s&&f.jsx("label",{htmlFor:Q,className:nt.label,children:s}),i&&f.jsx("span",{id:K,className:nt.description,children:i}),f.jsxs("div",{className:nt.box,children:[z&&f.jsx("span",{className:nt.prefix,children:z}),_&&f.jsx("span",{className:nt.icon,"aria-hidden":"true",children:md(_)}),f.jsx("input",{ref:re,id:Q,type:h,className:nt.input,value:m,onChange:v,placeholder:x,disabled:p,"aria-invalid":R||void 0,"aria-describedby":Y,...X}),b&&f.jsx("span",{className:nt.suffix,children:b}),N&&!p&&ue!==!1&&f.jsx("button",{type:"button",className:nt.clear,"aria-label":s?`Clear ${s}`:"Clear",onClick:pe,children:f.jsx(Wo,{glyph:rp,weight:"bold"})}),S&&f.jsx("span",{className:nt.trailing,children:md(S)})]}),(u||l)&&f.jsx("span",{id:J,className:`${nt.helper} ${R?nt.helperError:""}`,children:u||l})]})}function Wm(){var l,u;if(typeof window>"u"||typeof navigator>"u"||!((u=(l=navigator.userAgentData)==null?void 0:l.brands)==null?void 0:u.some(p=>p.brand==="Chromium")))return!1;const i=p=>{var h;return(h=window.matchMedia)==null?void 0:h.call(window,p).matches};return!i("(prefers-reduced-transparency: reduce)")&&!i("(forced-colors: active)")}function Qm(s,i,l,{depth:u,refraction:p,splay:h}){const m=Math.max(0,u)/100*(Math.min(s,i)/2),v=Math.max(0,p)/100*(m/2),x=1+3*(1-Math.min(100,Math.max(0,h))/100),_=Math.min(l,s/2,i/2),z=new Uint8ClampedArray(s*i*4);for(let b=0;b<i;b+=1)for(let S=0;S<s;S+=1){const N=S+.5-s/2,V=b+.5-i/2,C=Math.abs(N)-(s/2-_),$=Math.abs(V)-(i/2-_),Q=-(Math.hypot(Math.max(C,0),Math.max($,0))+Math.min(Math.max(C,$),0)-_);let K=0,J=0,re=0;if(Q>0&&m>0&&Q<m)if(re=(1-Q/m)**x,C>0&&$>0){const Y=Math.hypot(C,$)||1;K=Math.sign(N)*(C/Y),J=Math.sign(V)*($/Y)}else C>$?K=Math.sign(N):J=Math.sign(V);const R=(b*s+S)*4;z[R]=127.5*(1-K*re),z[R+1]=127.5*(1-J*re),z[R+2]=128,z[R+3]=255}return{bytes:z,scale:2*v}}function Gm(s){const i=getComputedStyle(s),l=u=>parseFloat(i.getPropertyValue(u))||0;return{depth:l("--glass-depth"),refraction:l("--glass-refraction"),splay:l("--glass-splay"),radius:parseFloat(i.borderTopLeftRadius)||0}}function Km(s,i,l){const u=`sc-glass-${c.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,[p,h]=c.useState(null);return c.useEffect(()=>{const m=s.current;if(!i||!m||!Wm()){h(null);return}let v="";const x=()=>{const z=Math.round(m.offsetWidth),b=Math.round(m.offsetHeight),{radius:S,...N}=Gm(m),V=JSON.stringify([z,b,S,N]);if(V===v||z<2||b<2)return;v=V;const{bytes:C,scale:$}=Qm(z,b,S,N),X=document.createElement("canvas");X.width=z,X.height=b,X.getContext("2d").putImageData(new ImageData(C,z,b),0,0),h({w:z,h:b,scale:$,href:X.toDataURL()})};x();const _=new ResizeObserver(x);return _.observe(m),window.addEventListener("sc-tokens-change",x),()=>{_.disconnect(),window.removeEventListener("sc-tokens-change",x)}},[s,i,l]),{id:u,filter:p}}const qm="_card_gh9a1_25",Jm="_defs_gh9a1_38",Xm="_flat_gh9a1_47",eg="_interactive_gh9a1_48",tg="_clear_gh9a1_51",ng="_frosted_gh9a1_62",rg="_thick_gh9a1_73",sg="_toneAuto_gh9a1_88",og="_toneLight_gh9a1_93",ag="_toneDark_gh9a1_98",lg="_glass_gh9a1_103",kr={card:qm,defs:Jm,flat:Xm,interactive:eg,clear:tg,frosted:ng,thick:rg,toneAuto:sg,toneLight:og,toneDark:ag,glass:lg},ig=["clear","frosted","thick"],gd={auto:"toneAuto",light:"toneLight",dark:"toneDark"};function cg({variant:s="flat",level:i="frosted",tone:l="auto",interactive:u=!1,as:p="div",onClick:h,children:m,className:v="",style:x,..._}){const z=s==="glass"?"glass":"flat",b=ig.includes(i)?i:"frosted",S=gd[l]??gd.auto,N=z==="glass",V=c.useRef(null),{id:C,filter:$}=Km(V,N,b),X=u?"button":p,Q=[kr.card,kr[z],N?`${kr[b]} ${kr[S]}`:"",u?kr.interactive:"",v].filter(Boolean).join(" ");return f.jsxs(X,{ref:V,type:u?"button":void 0,className:Q,onClick:u?h:void 0,style:$?{...x,"--glass-refract":`url(#${C})`}:x,..._,children:[$&&f.jsx("svg",{className:kr.defs,"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:f.jsxs("filter",{id:C,x:"0",y:"0",width:$.w,height:$.h,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[f.jsx("feImage",{href:$.href,x:"0",y:"0",width:$.w,height:$.h,preserveAspectRatio:"none",result:"map"}),f.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:$.scale,xChannelSelector:"R",yChannelSelector:"G"})]})}),m]})}const ug="_pill_hlpza_17",dg="_filled_hlpza_38",pg="_progress_hlpza_38",fg="_success_hlpza_39",hg="_warning_hlpza_40",mg="_error_hlpza_41",gg="_info_hlpza_42",vg="_live_hlpza_43",xg="_outline_hlpza_46",yg="_icon_hlpza_53",wg="_neutral_hlpza_60",bg="_dash_hlpza_65",kg="_glow_hlpza_84",Ag="_pulse_hlpza_1",Ar={pill:ug,filled:dg,progress:pg,success:fg,warning:hg,error:mg,info:gg,live:vg,outline:xg,icon:yg,neutral:wg,dash:bg,glow:kg,pulse:Ag},_g=["progress","success","warning","error","info","neutral","live"],zg=["filled","outline"];function Lg(){const s=c.useRef(null),[i,l]=c.useState({w:0,h:0,sw:0,dash:0,gap:0});c.useLayoutEffect(()=>{const V=s.current&&s.current.parentElement;if(!V)return;const C=()=>{const X=getComputedStyle(V),Q=K=>parseFloat(X.getPropertyValue(K))||0;l({w:V.offsetWidth,h:V.offsetHeight,sw:Q("--sc-size-status-pill-dash-width"),dash:Q("--sc-size-status-pill-dash"),gap:Q("--sc-size-status-pill-dash-gap")})};C();const $=new ResizeObserver(C);return $.observe(V),window.addEventListener("sc-tokens-change",C),()=>{$.disconnect(),window.removeEventListener("sc-tokens-change",C)}},[]);const{w:u,h:p,sw:h,dash:m,gap:v}=i,x=Math.max(0,u-h),_=Math.max(0,p-h),z=Math.min(x,_)/2,b=2*(x-2*z)+2*(_-2*z)+2*Math.PI*z,S=m+v,N=S>0?Math.max(1,Math.round(b/S)):1;return f.jsx("svg",{ref:s,className:Ar.dash,width:u,height:p,viewBox:`0 0 ${u} ${p}`,"aria-hidden":"true",focusable:"false",children:u>0?f.jsx("rect",{x:h/2,y:h/2,width:x,height:_,rx:z,ry:z,pathLength:N*S||void 0}):null})}function Eg({tone:s="neutral",emphasis:i="filled",glow:l,icon:u,children:p,className:h=""}){const m=_g.includes(s)?s:"neutral",v=zg.includes(i)?i:"filled",x=l??(m==="progress"||m==="live");return f.jsxs("span",{className:`${Ar.pill} ${Ar[v]} ${Ar[m]} ${x?Ar.glow:""} ${h}`,children:[m==="neutral"?f.jsx(Lg,{}):null,u?f.jsx(u,{className:Ar.icon,weight:"bold","aria-hidden":"true"}):null,p]})}const Sg="_avatar_1gwtr_14",Mg="_xs_1gwtr_24",Cg="_sm_1gwtr_25",jg="_md_1gwtr_26",Ng="_lg_1gwtr_27",Fg="_image_1gwtr_29",Tg="_initials_1gwtr_35",Ro={avatar:Sg,xs:Mg,sm:Cg,md:jg,lg:Ng,image:Fg,initials:Tg},$g=["xs","sm","md","lg"];function Pg(s){if(!s)return"?";const i=s.trim().split(/\s+/);return i.length===1?i[0].slice(0,2).toUpperCase():(i[0][0]+i[i.length-1][0]).toUpperCase()}function Hg({size:s="md",src:i,name:l="",className:u=""}){const p=$g.includes(s)?s:"md",[h,m]=c.useState(!1),v=i&&!h;return f.jsx("span",{className:`${Ro.avatar} ${Ro[p]} ${u}`,role:"img","aria-label":l||"Avatar",children:v?f.jsx("img",{className:Ro.image,src:i,alt:"",onError:()=>m(!0)}):f.jsx("span",{className:Ro.initials,"aria-hidden":"true",children:Pg(l)})})}const Rg="_toast_1u1ow_35",Vg="_inline_1u1ow_49",Zg="_floating_1u1ow_54",Dg="_glass_1u1ow_71",Og="_badge_1u1ow_94",Ig="_success_1u1ow_104",Bg="_error_1u1ow_105",Ug="_warning_1u1ow_106",Yg="_info_1u1ow_107",Wg="_icon_1u1ow_109",Qg="_message_1u1ow_115",Gg="_srOnly_1u1ow_134",Kg="_dismiss_1u1ow_149",qg="_x_1u1ow_193",Vt={toast:Rg,inline:Vg,floating:Zg,glass:Dg,badge:Og,success:Ig,error:Bg,warning:Ug,info:Yg,icon:Wg,message:Qg,srOnly:Gg,dismiss:Kg,x:qg},Jg=["success","error","warning","info"],Xg=["inline","floating"],e2={success:w1,error:j1,warning:ep,info:z1},vd={outline:"bold",fill:"fill"},t2=["flat","glass"],n2={success:"Success",error:"Error",warning:"Warning",info:"Info"};function xd(s){const i=parseFloat(s);return Number.isNaN(i)?0:/\ds$/.test(s.trim())&&!/ms$/.test(s.trim())?i*1e3:i}function r2({tone:s="info",placement:i="inline",surface:l="flat",glyph:u="outline",autoDismiss:p=!0,onDismiss:h,dismissLabel:m="Dismiss notification",dismissDisabled:v=!1,toneLabel:x,children:_,className:z="",...b}){const S=Jg.includes(s)?s:"info",N=Xg.includes(i)?i:"inline",V=N==="floating",C=t2.includes(l)?l:"flat",$=e2[S],X=vd[u]??vd.outline,Q=c.useRef(null),[K,J]=c.useState(V?"enter":"open"),re=c.useRef({id:0,left:0,started:0}),R=c.useRef(!1);c.useEffect(()=>{if(!V)return;let q=requestAnimationFrame(()=>{q=requestAnimationFrame(()=>J(ce=>ce==="enter"?"open":ce))});return()=>cancelAnimationFrame(q)},[V]);const Y=c.useCallback(()=>{R.current||(R.current=!0,J("gone"),h==null||h())},[h]),ue=c.useCallback(()=>{clearTimeout(re.current.id),J(q=>q==="exit"||q==="gone"?q:"exit")},[]);c.useEffect(()=>{if(K!=="exit"||!Q.current)return;const q=Q.current,ce=xd(getComputedStyle(q).getPropertyValue("--sc-motion-toast-travel-duration"))+50,U=G=>{G.target===q&&G.propertyName==="opacity"&&Y()};q.addEventListener("transitionend",U);const le=setTimeout(Y,ce);return()=>{q.removeEventListener("transitionend",U),clearTimeout(le)}},[K,Y]);const pe=c.useRef({pointer:!1,focus:!1}),te=V&&p&&K==="open",ae=c.useCallback(q=>{clearTimeout(re.current.id),re.current={id:setTimeout(ue,q),left:q,started:Date.now()}},[ue]),I=c.useCallback(q=>{pe.current[q]=!0;const ce=re.current;ce.id&&(clearTimeout(ce.id),re.current={id:0,left:Math.max(0,ce.left-(Date.now()-ce.started)),started:0})},[]),H=c.useCallback(q=>{pe.current[q]=!1,!(!te||re.current.id||pe.current.pointer||pe.current.focus)&&ae(re.current.left)},[te,ae]);if(c.useEffect(()=>{if(!te||!Q.current)return;const q=xd(getComputedStyle(Q.current).getPropertyValue("--sc-motion-toast-hold"));return pe.current.pointer||pe.current.focus?re.current={id:0,left:q,started:0}:ae(q),()=>clearTimeout(re.current.id)},[te,ae]),K==="gone")return null;const P=S==="error"||S==="warning"?"alert":"status",xe=V?{onPointerEnter:()=>I("pointer"),onPointerLeave:()=>H("pointer"),onFocus:()=>I("focus"),onBlur:q=>{q.currentTarget.contains(q.relatedTarget)||H("focus")},onKeyDown:q=>{q.key==="Escape"&&!v&&(q.stopPropagation(),ue())}}:{};return f.jsxs("div",{ref:Q,className:`${Vt.toast} ${Vt[N]} ${Vt[C]} ${Vt[S]} ${z}`,role:P,"aria-atomic":"true","data-state":K,...xe,...b,children:[f.jsx("span",{className:Vt.badge,"aria-hidden":"true",children:f.jsx($,{className:Vt.icon,weight:X})}),f.jsxs("div",{className:Vt.message,children:[f.jsxs("span",{className:Vt.srOnly,children:[x??n2[S],": "]}),_]}),V?f.jsx("button",{type:"button",className:Vt.dismiss,"aria-label":m,disabled:v,onClick:ue,children:f.jsx(rp,{className:Vt.x,weight:"bold","aria-hidden":"true"})}):null]})}const s2=`/* tokens:
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
`,o2=`/* tokens:
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
`,yd=`/* Icon — wrapper for token-sized Phosphor icons (scds-v2). Fill-only; no frame. */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;
  flex: none;
}
`,a2=`/* tokens:
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
`,l2=`/* tokens:
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
`,i2=`/* tokens (role tokens, physical-controls Tier 2; record Tooltip 2026-10-08-2007 A):
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
`,c2=`/* tokens:
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
`,wd=`/* PlusUnderline — see PlusUnderline.tokens.md. */

.underline {
  display: block;
  width: 100%;
  height: var(--sc-space-component-gap-lg);
}
`,u2=`/* tokens:
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
`,d2=`/* tokens:
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
`,p2=`/* tokens:
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
`,f2=`/* tokens:
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
`,h2=`/* tokens:
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
`,m2=`/* tokens:
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
 *   --sc-shadow-toast-plate                      · floating shadow (role; Figma elevation/2)
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
`,g2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADqUlEQVR4nOzdMY7CQBAAQd+JHBHw/wcSIF7ABf6AAy/sXlfFTiZpTTBa/25A1u8GZAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhF22ib2ej/eR7663+8+2IPPtzPc9NgAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAI+/iJ4tHzyVFGn2WabyzzncsGAGECAGECAGECAGECAGECAGECAGECAGECAGFTP8boUcmd+ebkUVBgaQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYUueYALnsAFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2GWb2Ov5eB/57nq7L/l/A/PtVp3vP7ABQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNjHTzCPnoeOMvrs1HxjORs+lw0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwqa+qvJo5s58jGIDgDABgDABgDABgDABgDABgDABgDABgDABgDABgDAnmBBmA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwyzax1/PxPvLd9XZf8v8G5tuZ73tsABAmABAmABAmABAmABAmABAmABAmABAmABAmABD28RPFo+eTo4w+yzTfWOY7lw0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwqZ+jNGjkjvzzcmjoMDSBADCBADCBADCBADCBADCBADCBADCBADCBADCljzBBM5hA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwPwAAAP//z4cOmAAAAAZJREFUAwDFAIX+6wDGTwAAAABJRU5ErkJggg==",v2="_app_drnf6_6",x2="_bar_drnf6_18",y2="_brand_drnf6_27",w2="_meta_drnf6_34",b2="_readout_drnf6_35",k2="_values_drnf6_36",A2="_spacer_drnf6_42",_2="_stages_drnf6_46",z2="_stageWrap_drnf6_54",L2="_activeStage_drnf6_61",E2="_stageSelect_drnf6_65",S2="_stageLabel_drnf6_75",M2="_stage_drnf6_46",C2="_panel_drnf6_94",j2="_group_drnf6_103",N2="_prop_drnf6_121",F2="_editor_drnf6_122",T2="_token_drnf6_132",$2="_changed_drnf6_140",P2="_tokenHead_drnf6_144",H2="_tokenName_drnf6_150",R2="_num_drnf6_162",V2="_mini_drnf6_166",Z2="_curve_drnf6_173",D2="_sounds_drnf6_187",O2="_sound_drnf6_187",I2="_shippedSound_drnf6_210",B2="_reset_drnf6_214",U2="_notes_drnf6_267",Y2="_tabs_drnf6_279",W2="_tab_drnf6_279",Q2="_pin_drnf6_308",G2="_pick_drnf6_313",K2="_propBlock_drnf6_320",q2="_easing_drnf6_321",J2="_springRows_drnf6_322",X2="_propLabel_drnf6_328",ev="_tokenActions_drnf6_332",tv="_motionTiles_drnf6_347",nv="_motionTile_drnf6_347",rv="_layers_drnf6_407",sv="_layer_drnf6_407",ov="_layerHead_drnf6_420",av="_layerGrid_drnf6_425",lv="_scope_drnf6_430",iv="_steps_drnf6_439",cv="_step_drnf6_439",uv="_stepRole_drnf6_473",D={app:v2,bar:x2,brand:y2,meta:w2,readout:b2,values:k2,spacer:A2,stages:_2,stageWrap:z2,activeStage:L2,stageSelect:E2,stageLabel:S2,stage:M2,panel:C2,group:j2,prop:N2,editor:F2,token:T2,changed:$2,tokenHead:P2,tokenName:H2,num:R2,mini:V2,curve:Z2,sounds:D2,sound:O2,shippedSound:I2,reset:B2,notes:U2,tabs:Y2,tab:W2,pin:Q2,pick:G2,propBlock:K2,easing:q2,springRows:J2,propLabel:X2,tokenActions:ev,motionTiles:tv,motionTile:nv,layers:rv,layer:sv,layerHead:ov,layerGrid:av,scope:lv,steps:iv,step:cv,stepRole:uv},Gt=["day","week","month"],ys=["work","studio","journal"],Ct=(s,{press:i=!0}={})=>{const l=`--sc-motion-${s}`;return{jsTokens:[`${l}-stretch`,`${l}-squash`,...i?[`${l}-press-lean`,`${l}-press-lean-duration`,"--sc-motion-press-easing"]:[]],seed:{overrides:{[`${l}-stretch`]:"0.45",[`${l}-squash`]:"0",...i?{[`${l}-press-lean`]:"0.83",[`${l}-press-lean-duration`]:"150ms"}:{}},springs:{[`${l}-travel-easing`]:{stiffness:146,damping:24.17,mass:1}}}}},ni={light:{keyFill:"#F1EFEB",key:"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)",keyPressed:"2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)",keyShade:"rgb(26 24 21 / 0.05)",recess:"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)"},dark:{keyFill:"#343A41",key:"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)",keyPressed:"3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)",keyShade:"rgb(26 24 21 / 0.25)",recess:"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)"}},bd=s=>({light:s(ni.light),dark:s(ni.dark)}),kd={light:{rimTop:"#FFFFFF",rimBottom:"#D8D1CC",faceTop:"#F1EFEB",faceBottom:"#E3DFD8"},dark:{rimTop:"#EAE8E3",rimBottom:"#9A9186",faceTop:"#D8D1CC",faceBottom:"#B3B1AD"}},Ad={none:void 0,search:L1,mail:A1,location:E1},_d={none:void 0,eye:_1,copy:k1,calendar:v1,clock:b1,caret:x1},Ul={flat:{variant:"flat"},"clear · light":{variant:"glass",level:"clear",tone:"light"},"frosted · light":{variant:"glass",level:"frosted",tone:"light"},"thick · light":{variant:"glass",level:"thick",tone:"light"},"clear · dark":{variant:"glass",level:"clear",tone:"dark"},"frosted · dark":{variant:"glass",level:"frosted",tone:"dark"},"thick · dark":{variant:"glass",level:"thick",tone:"dark"}},Yl={position:"absolute",inset:0,overflow:"hidden",borderRadius:"var(--sc-radius-card)"},Vo={"page (follows theme)":f.jsxs("div",{"aria-hidden":"true",style:{...Yl,background:"var(--sc-color-surface-page)"},children:[f.jsx("div",{style:{position:"absolute",inset:"0 50% 0 0",background:"var(--sc-color-surface-sunk)"}}),f.jsx("div",{style:{position:"absolute",inset:"30% 0 30% 25%",background:"var(--sc-color-surface-floating)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),"type and colour":f.jsxs("div",{"aria-hidden":"true",style:Yl,children:[f.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 24px, var(--sc-color-atmosphere-river) 24px 48px, var(--sc-color-atmosphere-lapis) 48px 72px)"}}),f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-display-xs)",color:"var(--sc-color-text-primary)",lineHeight:1,wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"})]}),type:f.jsx("div",{"aria-hidden":"true",style:{...Yl,display:"flex",flexWrap:"wrap",alignContent:"center",font:"var(--sc-font-text-title-card)",color:"var(--sc-color-text-primary)",wordBreak:"break-all"},children:"SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE"}),none:null},Wl={progress:"In progress",live:"Live",success:"Complete",warning:"Pending",error:"Failed",info:"Info",neutral:"Planned"},zd={none:void 0,check:y1,pause:M1,archive:m1,warning:ep},dv=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#D9CFC2"/><circle cx="32" cy="26" r="12" fill="#6B5A4A"/><path d="M8 64c0-14 11-22 24-22s24 8 24 22z" fill="#3E4A55"/></svg>')}`,Ld={mark:g2,portrait:dv},Ed=["xs","sm","md","lg"],Ql={success:"Sprint 5 merged and deployed to brand.shokunincrafthouse.com.",info:"The brand site rebuilds on every push to main.",warning:"Two approval gates remain before this can merge.",error:"Token build exited non-zero. The previous deploy is still live."},Sd={light:"2px 2px 6px 0 rgb(100 91 79 / 0.50)",dark:"3px 3px 7px 0 rgb(0 0 0 / 0.50)"};let Gl=!1;function pv({p:s,ctx:i}){const l=c.useRef(null);return c.useEffect(()=>{var _;const u=[...((_=l.current)==null?void 0:_.children)||[]],p=i.slow||1,h=s.reduced,m=h==="opacity only"?{opacity:s.opacityFrom,transform:"none",filter:"none"}:{opacity:s.opacityFrom,transform:`translateY(${s.distance}px) scale(${s.scaleFrom}) rotate(${s.rotateFrom}deg)`,filter:`blur(${s.blurFrom}px)`},v={opacity:1,transform:"translateY(0) scale(1) rotate(0deg)",filter:"blur(0px)"},x=u.map((z,b)=>z.animate([m,v],{duration:h==="none"?0:s.duration*p,delay:h==="none"?0:(s.delay+b*s.stagger)*p,easing:s.easing,fill:"both"}));return()=>x.forEach(z=>z.cancel())},[s,i.replay,i.slow]),f.jsx("div",{className:D.motionTiles,ref:l,children:Array.from({length:s.count},(u,p)=>f.jsx("span",{className:D.motionTile},p))})}const Kl=s=>s.reduced==="none"?0:s.delay+s.stagger*(s.count-1)+s.duration,Sr={Switch:{css:[s2],jsTokens:["--sc-motion-switch-stretch","--sc-motion-switch-squash","--sc-motion-switch-press-lean","--sc-motion-switch-press-lean-duration","--sc-motion-press-easing"],seed:{overrides:{"--sc-motion-switch-stretch":"0.45","--sc-motion-switch-squash":"0","--sc-motion-switch-press-lean":"0.83","--sc-motion-switch-press-lean-duration":"150ms"},springs:{"--sc-motion-switch-travel-easing":{stiffness:146,damping:24.17,mass:1}}},shippedSound:"drams-004-toggle-switch-01.wav",trigger:"every on/off change",props:[{name:"checked",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"glyphs",type:"boolean",default:!0},{name:"label",type:"text",default:"Notifications"}],play:(s,i)=>i("checked",!s.checked),render:(s,i,l)=>f.jsx(Qf,{checked:s.checked,disabled:s.disabled,glyphs:s.glyphs,label:s.label,sound:!1,onChange:u=>{i("checked",u.target.checked),l()}})},Stepper:{css:[o2,yd],jsTokens:[...Ct("stepper",{press:!1}).jsTokens,"--sc-motion-stepper-roll"],seed:{overrides:{...Ct("stepper",{press:!1}).seed.overrides,"--sc-motion-stepper-roll":"1","--sc-motion-stepper-glyph-press-scale":"0.85"},springs:Ct("stepper",{press:!1}).seed.springs,scoped:bd(s=>({"--sc-shadow-stepper-track":s.recess,"--sc-color-stepper-key":s.keyFill,"--sc-color-stepper-key-shade":s.keyShade,"--sc-shadow-stepper-key":s.key}))},shippedSound:"drams-037-01.wav",trigger:"every committed step; silent at a bound",props:[{name:"value",type:"number",default:4,min:-99,max:99},{name:"min",type:"number",default:0,min:-99,max:99},{name:"max",type:"number",default:12,min:-99,max:99},{name:"step",type:"number",default:1,min:1,max:10},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Quantity"}],play:(s,i)=>i("value",s.value+s.step>s.max?s.min:s.value+s.step),render:(s,i,l)=>f.jsx(I1,{value:s.value,min:s.min,max:s.max,step:s.step,disabled:s.disabled,label:s.label,sound:!1,onChange:u=>{i("value",u),l()}})},SegmentedControl:{css:[a2],...Ct("segmented-control"),seed:{...Ct("segmented-control").seed,scoped:{light:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)","--sc-shadow-segmented-control-indicator":"2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.05)"},dark:{"--sc-shadow-segmented-control-track":"inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)","--sc-shadow-segmented-control-indicator":"3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)","--sc-color-segmented-control-indicator-shade":"rgb(26 24 21 / 0.25)"}}},shippedSound:"drams-001-01.wav",trigger:"a change of selection; re-selecting is silent",props:[{name:"value",type:"enum",options:Gt,default:"day"},{name:"size",type:"enum",options:["sm","md","lg"],default:"md"},{name:"disabled",type:"boolean",default:!1}],play:(s,i)=>i("value",Gt[(Gt.indexOf(s.value)+1)%Gt.length]),render:(s,i,l)=>f.jsx(X1,{label:"Range",value:s.value,size:s.size,disabled:s.disabled,sound:!1,options:[{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"}],onChange:u=>{u!==s.value&&l(),i("value",u)}})},Tooltip:{css:[i2],jsTokens:[...Ct("tooltip",{press:!1}).jsTokens,"--sc-motion-tooltip-grow-from","--sc-shadow-tooltip-plate","--sc-size-tooltip-arrow-tip","--sc-size-tooltip-arrow-fillet"],shippedSound:"drams-031-01.wav",trigger:"the tooltip opens (pointer enters or focus lands on the trigger)",props:[{name:"show",type:"enum",options:["hover","open","closed"],default:"hover"},{name:"multiline",type:"boolean",default:!1},{name:"content",type:"text",default:"Copied to clipboard"}],play:(s,i)=>i("show",s.show==="open"?"closed":"open"),render:(s,i,l)=>f.jsx("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-md) var(--sc-space-layout-stack-sm) var(--sc-space-layout-stack-sm)"},children:f.jsx("span",{style:{position:"relative",display:"inline-block",paddingTop:"var(--sc-space-layout-stack-md)"},children:f.jsx(Ph,{content:s.content,multiline:s.multiline,open:s.show==="hover"?void 0:s.show==="open",sound:!1,children:f.jsx("span",{style:{display:"inline-block"},onMouseEnter:()=>{s.show==="hover"&&l()},onFocus:()=>{s.show==="hover"&&l()},children:f.jsx(pd,{variant:"primary",size:"sm",arrow:!1,sound:!1,children:"Copy"})})})})})},NavBar:{css:[c2,wd],...Ct("nav-bar"),shippedSound:null,trigger:"ships silent",props:[{name:"current",type:"enum",options:ys,default:"work"},{name:"underline",type:"boolean",default:!0}],play:(s,i)=>i("current",ys[(ys.indexOf(s.current)+1)%ys.length]),render:(s,i)=>f.jsx("div",{onClickCapture:l=>{const u=l.target.closest("a");u&&(l.preventDefault(),i("current",u.textContent.trim().toLowerCase()))},children:f.jsx(Am,{brand:f.jsx("span",{children:"Shokunin"}),underline:s.underline,links:ys.map(l=>({href:`#${l}`,label:l[0].toUpperCase()+l.slice(1),current:l===s.current}))})})},PlusUnderline:{css:[wd],...Ct("plus-underline"),shippedSound:null,trigger:"ships silent",props:[{name:"active",type:"enum",options:Gt,default:"day"}],play:(s,i)=>i("active",Gt[(Gt.indexOf(s.active)+1)%Gt.length]),render:(s,i)=>f.jsx("div",{role:"tablist","aria-label":"Range",style:{display:"flex",gap:"var(--sc-space-component-gap-lg)"},children:Gt.map(l=>f.jsxs("button",{type:"button",role:"tab","aria-selected":l===s.active,onClick:()=>i("active",l),style:{display:"inline-flex",flexDirection:"column",gap:"var(--sc-space-component-gap-sm)",background:"none",border:0,padding:0,font:"inherit",color:"var(--sc-color-text-primary)",cursor:"pointer"},children:[l[0].toUpperCase()+l.slice(1),f.jsx(ap,{active:l===s.active})]},l))})},Slider:{css:[u2],jsTokens:Ct("slider",{press:!1}).jsTokens,seed:{overrides:{...Ct("slider",{press:!1}).seed.overrides,"--sc-size-slider-thumb":"15px","--sc-motion-slider-thumb-press-scale":"0.985"},springs:Ct("slider",{press:!1}).seed.springs,scoped:bd(s=>{const i=s===ni.light?kd.light:kd.dark;return{"--sc-shadow-slider-track":s.recess,"--sc-color-slider-thumb-rim-top":i.rimTop,"--sc-color-slider-thumb-rim-bottom":i.rimBottom,"--sc-color-slider-thumb-face-top":i.faceTop,"--sc-color-slider-thumb-face-bottom":i.faceBottom,"--sc-shadow-slider-thumb":s.key,"--sc-shadow-slider-thumb-pressed":s.keyPressed}})},shippedSound:"drams-009-01.wav",trigger:"a keyboard step that changes the value; a drag is silent",props:[{name:"value",type:"range",min:0,max:1,step:.01,default:.5},{name:"disabled",type:"boolean",default:!1},{name:"label",type:"text",default:"Volume"}],play:(s,i)=>i("value",s.value>=.75?.25:.75),render:(s,i,l)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2)"},onKeyDownCapture:()=>{Gl=!0},onKeyUpCapture:()=>{Gl=!1},children:f.jsx(Cm,{value:s.value,disabled:s.disabled,label:s.label,sound:!1,onChange:u=>{const p=Math.round(u*100)/100;Gl&&p!==s.value&&l(),i("value",p)}})})},Input:{css:[d2,yd],shippedSound:null,trigger:"ships silent",props:[{name:"label",type:"text",default:"Email address"},{name:"description",type:"text",default:""},{name:"placeholder",type:"text",default:"you@studio.com"},{name:"value",type:"text",default:"levi@levibahn.com"},{name:"icon",type:"enum",options:Object.keys(Ad),default:"mail"},{name:"prefix",type:"text",default:""},{name:"suffix",type:"text",default:""},{name:"trailing",type:"enum",options:Object.keys(_d),default:"none"},{name:"clearable",type:"boolean",default:!0},{name:"helper",type:"text",default:""},{name:"error",type:"text",default:""},{name:"disabled",type:"boolean",default:!1},{name:"surface",type:"enum",options:["page","raised"],default:"page"}],play:null,render:(s,i)=>f.jsx("div",{style:{width:"calc(var(--sc-space-layout-stack-xl) * 2.5)",...s.surface==="raised"?{background:"var(--sc-color-surface-raised)",padding:"var(--sc-space-component-padding-md)"}:{}},children:f.jsx(Ym,{surface:s.surface,label:s.label,description:s.description||void 0,placeholder:s.placeholder,value:s.value,icon:Ad[s.icon],prefix:s.prefix||void 0,suffix:s.suffix||void 0,trailing:_d[s.trailing],clearable:s.clearable,onClear:()=>i("value",""),helper:s.helper||void 0,error:s.error||void 0,disabled:s.disabled,onChange:l=>i("value",l.target.value)})})},Card:{css:[p2],jsTokens:["clear","frosted","thick"].flatMap(s=>["refraction","depth","splay"].map(i=>`--sc-size-card-glass-${s}-${i}`)),shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Ul)],default:"all"},{name:"backdrop",type:"enum",options:Object.keys(Vo),default:"page (follows theme)"},{name:"interactive",type:"boolean",default:!1},{name:"disabled",type:"boolean",default:!1},{name:"title",type:"text",default:"Studio journal"},{name:"body",type:"text",default:"Notes from the bench."}],play:null,render:s=>{const i=s.show==="all"?Object.keys(Ul):[s.show];return f.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-sm)"},children:[Vo[s.backdrop],f.jsx("div",{style:{position:"relative",display:"grid",gridTemplateColumns:`repeat(${Math.min(i.length,4)}, calc(var(--sc-space-layout-stack-xl) * 2.5))`,gap:"var(--sc-space-layout-stack-sm)"},children:i.map(l=>[s.show==="all"&&l==="clear · dark"?f.jsx("span",{},"gap"):null,f.jsxs(cg,{...Ul[l],interactive:s.interactive,disabled:s.interactive?s.disabled:void 0,onClick:()=>{},children:[f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-label-ui)",color:"var(--sc-color-text-secondary)"},children:l}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-default)"},children:s.title}),f.jsx("span",{style:{display:"block",font:"var(--sc-font-text-body-dense)",color:"var(--sc-color-text-secondary)"},children:s.body})]},l)])})]})}},StatusPill:{css:[f2],shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Wl)],default:"all"},{name:"emphasis",type:"enum",options:["filled","outline"],default:"filled"},{name:"glow",type:"enum",options:["by tone","on","off"],default:"by tone"},{name:"icon",type:"enum",options:Object.keys(zd),default:"none"},{name:"content",type:"text",default:"In progress"}],play:(s,i)=>i("glow",s.glow==="off"?"on":"off"),render:s=>{const i=s.show==="all"?Object.keys(Wl):[s.show],l=s.glow==="by tone"?void 0:s.glow==="on";return f.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--sc-space-layout-stack-sm)"},children:i.map(u=>f.jsx(Eg,{tone:u,emphasis:s.emphasis,glow:l,icon:zd[s.icon],children:s.show==="all"?Wl[u]:s.content},u))})}},Avatar:{css:[h2],shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Ed],default:"all"},{name:"content",type:"enum",options:["image","initials"],default:"image"},{name:"image",type:"enum",options:Object.keys(Ld),default:"portrait"},{name:"name",type:"text",default:"Levi Bahn"}],play:(s,i)=>i("content",s.content==="image"?"initials":"image"),render:s=>{const i=s.show==="all"?Ed:[s.show];return f.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--sc-space-component-gap-md)",padding:"var(--sc-space-layout-stack-sm)"},children:i.map(l=>f.jsx(Hg,{size:l,name:s.name,src:s.content==="image"?Ld[s.image]:void 0},l))})}},Toast:{css:[m2],jsTokens:["--sc-motion-toast-hold"],seed:{scoped:{light:{"--sc-shadow-toast-plate":Sd.light},dark:{"--sc-shadow-toast-plate":Sd.dark}}},shippedSound:null,trigger:"ships silent",props:[{name:"show",type:"enum",options:["all",...Object.keys(Ql)],default:"all"},{name:"placement",type:"enum",options:["floating","inline"],default:"floating"},{name:"surface",type:"enum",options:["flat","glass"],default:"flat"},{name:"glyph",type:"enum",options:["outline","fill"],default:"outline"},{name:"backdrop",type:"enum",options:Object.keys(Vo),default:"none"},{name:"autoDismiss",type:"boolean",default:!1},{name:"dismissDisabled",type:"boolean",default:!1},{name:"message",type:"text",default:"Token build exited non-zero after the contrast check failed on three pairs. The previous deploy is still live."}],play:null,render:(s,i,l,u)=>{const p=s.show==="all"?Object.keys(Ql):[s.show];return f.jsxs("div",{style:{position:"relative",padding:"var(--sc-space-layout-stack-md)"},children:[Vo[s.backdrop],f.jsx("div",{style:{position:"relative",display:"grid",justifyItems:"start",gap:"var(--sc-space-layout-stack-md)",inlineSize:s.placement==="inline"?"calc(var(--sc-space-layout-stack-xl) * 6)":void 0,maxInlineSize:"100%"},children:p.map(h=>f.jsx(r2,{tone:h,placement:s.placement,surface:s.surface,glyph:s.glyph,autoDismiss:s.autoDismiss,dismissDisabled:s.dismissDisabled,onDismiss:()=>{},children:s.show==="all"?Ql[h]:s.message},`${h}-${u.replay}`))})]})}},Button:{css:[l2],shippedSound:"drams-029-01.wav",trigger:"every click",props:[{name:"variant",type:"enum",options:["primary","secondary","tertiary","destructive"],default:"primary"},{name:"size",type:"enum",options:["lg","sm"],default:"lg"},{name:"disabled",type:"boolean",default:!1},{name:"loading",type:"boolean",default:!1},{name:"arrow",type:"boolean",default:!0},{name:"children",type:"text",default:"Continue"}],play:null,render:(s,i,l)=>f.jsx(pd,{variant:s.variant,size:s.size,disabled:s.disabled,loading:s.loading,arrow:s.arrow,sound:!1,onClick:()=>l(),children:s.children})},Motion:{kind:"motion",css:[],shippedSound:null,trigger:"each Play (audition only)",props:[{name:"count",type:"range",min:1,max:12,step:1,default:5},{name:"distance",type:"range",min:-200,max:200,step:1,unit:"px",default:24},{name:"scaleFrom",type:"range",min:.5,max:1.5,step:.01,default:.96},{name:"opacityFrom",type:"range",min:0,max:1,step:.01,default:0},{name:"blurFrom",type:"range",min:0,max:20,step:.5,unit:"px",default:0},{name:"rotateFrom",type:"range",min:-45,max:45,step:.5,unit:"deg",default:0},{name:"duration",type:"range",min:0,max:2e3,step:10,unit:"ms",default:380},{name:"delay",type:"range",min:0,max:1e3,step:10,unit:"ms",default:0},{name:"stagger",type:"range",min:0,max:300,step:5,unit:"ms",default:40},{name:"easing",type:"easing",durationProp:"duration",default:"cubic-bezier(0.32, 0.08, 0.12, 1)"},{name:"reduced",type:"enum",options:["full","opacity only","none"],default:"full"}],play:null,render:(s,i,l,u)=>f.jsx(pv,{p:s,ctx:u})}},lp=s=>{var i;return((i=s==null?void 0:s.match(/cubic-bezier\(([^)]+)\)/))==null?void 0:i[1].split(",").map(Number))||null};function fv(s){var u;const i=lp(s);if(i){const p=[];for(let h=0;h<=40;h+=1){const m=h/40,v=3*(1-m)**2*m*i[0]+3*(1-m)*m**2*i[2]+m**3,x=3*(1-m)**2*m*i[1]+3*(1-m)*m**2*i[3]+m**3;p.push([v,x])}return p}const l=(u=s==null?void 0:s.match(/linear\(([^)]+)\)/))==null?void 0:u[1].split(",").map(p=>parseFloat(p));return l?l.map((p,h)=>[h/(l.length-1),p]):[[0,0],[1,1]]}function hv(s){const i=fv(s),l=i.map(m=>m[1]),u=Math.min(0,...l),h=Math.max(1,...l)-u||1;return i.map(([m,v],x)=>`${x?"L":"M"}${m.toFixed(3)} ${(1-(v-u)/h).toFixed(3)}`).join(" ")}const jt=(s,i=2)=>+(+s).toFixed(i),ql=typeof document<"u"?document.createElement("canvas").getContext("2d"):null;function ip(s){ql.fillStyle="#000",ql.fillStyle=s;const i=ql.fillStyle;if(i.startsWith("#"))return{hex:i,a:1};const l=i.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);return l?{hex:"#"+[l[1],l[2],l[3]].map(p=>Math.round(+p).toString(16).padStart(2,"0")).join(""),a:l[4]!==void 0?+l[4]:1}:{hex:"#000000",a:1}}function Qo(s,i){if(i>=1)return s.toUpperCase();const l=parseInt(s.slice(1),16);return`rgb(${l>>16&255} ${l>>8&255} ${l&255} / ${+i.toFixed(3)})`}const mv=s=>String(s).endsWith("ms")?parseFloat(s):parseFloat(s)*1e3;function cp({label:s,value:i,spring:l,presets:u,asRef:p,onChange:h}){const[m,v]=c.useState(l?"spring":"bezier"),x=lp(i)||[.25,.1,.25,1],_=l||{stiffness:260,damping:22,mass:1},z=S=>{const N=Yo(S);h(N.easing,S,N.settleMs)},b=l?Yo(l):null;return f.jsxs("div",{className:D.easing,children:[f.jsxs("div",{className:D.editor,children:[f.jsx("svg",{className:D.curve,viewBox:"-0.05 -0.05 1.1 1.1","aria-hidden":"true",children:f.jsx("path",{d:hv(i)})}),f.jsxs("select",{"aria-label":`${s} mode`,value:m,onChange:S=>{v(S.target.value),S.target.value==="spring"?z(_):h(`cubic-bezier(${x.join(", ")})`,null,null)},children:[f.jsx("option",{value:"bezier",children:"bezier"}),f.jsx("option",{value:"spring",children:"spring"})]}),(u==null?void 0:u.length)>0&&f.jsxs("select",{"aria-label":`${s} preset`,value:"",onChange:S=>{const N=u.find(V=>V.name===S.target.value);N&&(v("bezier"),h(p?`var(${N.name})`:N.value,null,null))},children:[f.jsx("option",{value:"",children:"token…"}),u.map(S=>f.jsx("option",{value:S.name,children:S.name.replace("--sc-p-motion-easing-","")},S.name))]})]}),m==="bezier"?f.jsx("div",{className:D.editor,children:x.map((S,N)=>f.jsx("input",{type:"number","aria-label":`${s} bezier point ${N+1}`,className:D.num,step:"0.01",value:S,onChange:V=>{const C=[...x];C[N]=+V.target.value,h(`cubic-bezier(${C.join(", ")})`,null,null)}},N))}):f.jsxs("div",{className:D.springRows,children:[(()=>{const S=2*Math.PI*Math.sqrt(_.mass/_.stiffness),N=1-_.damping*S/(4*Math.PI*_.mass),V=(C,$)=>z({..._,stiffness:+((2*Math.PI/C)**2*_.mass).toFixed(1),damping:+(4*Math.PI*(1-$)*_.mass/C).toFixed(2)});return f.jsxs(f.Fragment,{children:[f.jsxs("label",{className:D.mini,children:["duration",f.jsx("input",{type:"range","aria-label":`${s} spring duration`,min:50,max:2e3,step:10,value:Math.round(S*1e3),onChange:C=>V(+C.target.value/1e3,N)}),f.jsxs("span",{className:D.readout,children:[Math.round(S*1e3),"ms"]})]}),f.jsxs("label",{className:D.mini,children:["bounce",f.jsx("input",{type:"range","aria-label":`${s} spring bounce`,min:0,max:.95,step:.01,value:Math.max(0,+N.toFixed(2)),onChange:C=>V(S,+C.target.value)}),f.jsx("span",{className:D.readout,children:N.toFixed(2)})]})]})})(),[["stiffness",10,1e3,1],["damping",1,100,.5],["mass",.1,5,.1]].map(([S,N,V,C])=>f.jsxs("label",{className:D.mini,children:[S,f.jsx("input",{type:"range",min:N,max:V,step:C,value:_[S],onChange:$=>z({..._,[S]:+$.target.value})}),f.jsx("span",{className:D.readout,children:_[S]})]},S)),b&&f.jsxs("span",{className:D.readout,children:["settles ",b.settleMs,"ms · overshoot ",Math.round(b.overshoot*100),"%"]})]})]})}function gv(s){const i=[];let l=0,u="";for(const p of s||"")p==="("&&(l+=1),p===")"&&(l-=1),p===","&&l===0?(i.push(u.trim()),u=""):u+=p;return u.trim()&&i.push(u.trim()),i.filter(p=>p&&p!=="none").map(p=>{var S;const h=/\binset\b/.test(p),m=((S=p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i))==null?void 0:S[0])||"rgb(0 0 0 / 0.2)",v=p.replace(m,"").replace("inset","").trim().split(/\s+/).filter(Boolean).map(N=>parseFloat(N)||0),[x=0,_=0,z=0,b=0]=v;return{inset:h,x,y:_,blur:z,spread:b,color:m}})}const vv=s=>s.map(i=>`${i.inset?"inset ":""}${jt(i.x)}px ${jt(i.y)}px ${jt(i.blur)}px ${jt(i.spread)}px ${i.color}`).join(", ");function xv({name:s,value:i,onSet:l}){const u=gv(i),p=(h,m)=>l(vv(u.map((v,x)=>x===h?{...v,...m}:v)));return f.jsx("div",{className:D.layers,children:u.map((h,m)=>{const v=ip(h.color),x=h.inset?"inner edge":(h.x<0||h.y<0)&&v.hex.toUpperCase()==="#FFFFFF"?"highlight":"shade";return f.jsxs("div",{className:D.layer,children:[f.jsxs("span",{className:D.layerHead,children:["layer ",m+1," · ",x]}),f.jsx("div",{className:D.layerGrid,children:[["x",-20,20,.5],["y",-20,20,.5],["blur",0,40,.5],["spread",-10,10,.5]].map(([_,z,b,S])=>f.jsxs("label",{className:D.mini,children:[_,f.jsx("input",{type:"number",className:D.num,"aria-label":`${s} layer ${m+1} ${_}`,min:z,max:b,step:S,value:jt(h[_]),onChange:N=>p(m,{[_]:+N.target.value})})]},_))}),f.jsxs("div",{className:D.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} layer ${m+1} colour`,value:v.hex,onChange:_=>p(m,{color:Qo(_.target.value,v.a)})}),f.jsxs("label",{className:D.mini,children:["opacity",f.jsx("input",{type:"range","aria-label":`${s} layer ${m+1} opacity`,min:"0",max:"1",step:"0.01",value:v.a,onChange:_=>p(m,{color:Qo(v.hex,+_.target.value)})}),f.jsx("span",{className:D.readout,children:jt(v.a)})]})]})]},m)})})}const yv=[11,12,13,14,16,20].map((s,i)=>[s,["chrome","ui","caption","dense","body","lead"][i],`--sc-p-font-size-${s}`]),wv=[[10,"","--sc-p-space-micro-10"],[12,"xs","--sc-p-space-12"],[14,"","--sc-p-space-micro-14"],[16,"sm","--sc-p-space-16"],[18,"","--sc-p-space-micro-18"],[24,"md","--sc-p-space-24"]],bv=s=>/^--sc-font-.*-size$/.test(s)?yv:/^--sc-size-.*icon/.test(s)?wv:null;function kv({name:s,kind:i,shipped:l,value:u,override:p,scope:h,adj:m,spring:v,pin:x,refs:_,easingPresets:z,onSet:b,onAdj:S,onSpring:N,onReset:V,onPin:C,restOf:$,onCopyRest:X}){const Q=p!==void 0,[K,J]=c.useState(!!x);let re=null;if(i==="color"){const R=ip(u);re=f.jsxs("div",{className:D.editor,children:[f.jsx("input",{type:"color","aria-label":`${s} colour`,value:R.hex,onChange:Y=>b(Qo(Y.target.value,R.a))}),f.jsx("input",{type:"range","aria-label":`${s} alpha`,min:"0",max:"1",step:"0.01",value:R.a,onChange:Y=>b(Qo(R.hex,+Y.target.value))})]})}else if(i==="length"||i==="number"){const R=parseFloat(u)||0,Y=Math.abs(parseFloat(l)||1),ue=i==="length"?Math.max(64,Y*4):Math.max(2,Y*2),pe=i==="length"?"px":"",te=i==="length"?.5:.005;re=f.jsxs("div",{className:D.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:ue,step:te,value:R,onChange:I=>b(`${I.target.value}${pe}`)}),f.jsx("input",{type:"number","aria-label":`${s} value`,className:D.num,step:te,value:jt(R,3),onChange:I=>b(`${I.target.value}${pe}`)})]});const ae=bv(s);ae&&(re=f.jsxs(f.Fragment,{children:[re,f.jsx("div",{className:D.steps,role:"group","aria-label":`${s} scale`,children:ae.map(([I,H,P])=>f.jsxs("button",{type:"button",className:D.step,"aria-pressed":R===I,onClick:()=>b(`var(${P})`),children:[I,H&&f.jsx("span",{className:D.stepRole,children:H})]},I))})]}))}else if(i==="time"){const R=mv(u);re=f.jsxs("div",{className:D.editor,children:[f.jsx("input",{type:"range","aria-label":s,min:"0",max:"1200",step:"10",value:R,onChange:Y=>b(`${Y.target.value}ms`)}),f.jsxs("span",{className:D.readout,children:[Math.round(R),"ms"]})]})}else i==="easing"?re=f.jsx(cp,{label:s,value:u,spring:v,presets:z,asRef:!0,onChange:(R,Y,ue)=>{b(R),N(Y,ue)}}):i==="shadow"?re=f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:D.editor,children:[f.jsxs("label",{className:D.mini,children:["scale all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.scale)??1,onChange:R=>S({...m,scale:+R.target.value})})]}),f.jsxs("label",{className:D.mini,children:["strength all",f.jsx("input",{type:"range",min:"0",max:"3",step:"0.05",value:(m==null?void 0:m.strength)??1,onChange:R=>S({...m,strength:+R.target.value})})]})]}),f.jsx(xv,{name:s,value:u,onSet:b})]}):re=f.jsx("input",{type:"text","aria-label":s,value:u,onChange:R=>b(R.target.value)});return f.jsxs("div",{className:`${D.token} ${Q?D.changed:""}`,children:[f.jsxs("div",{className:D.tokenHead,children:[f.jsxs("code",{className:D.tokenName,children:[s.replace("--sc-",""),Q&&h&&f.jsx("span",{className:D.scope,children:h==="all"?"both modes":`${h} only`})]}),f.jsxs("span",{className:D.tokenActions,children:[$&&f.jsx("button",{type:"button",className:D.reset,title:`Set to this concept's ${$.replace("--sc-","")} value`,onClick:X,children:"copy rest"}),f.jsx("button",{type:"button",className:D.reset,"aria-pressed":K,onClick:()=>J(R=>!R),children:"note"}),Q&&f.jsx("button",{type:"button",className:D.reset,onClick:V,"aria-label":`Reset ${s}`,children:"reset"})]})]}),re,(_==null?void 0:_.length)>0&&i!=="easing"&&f.jsxs("select",{"aria-label":`${s} token`,value:p!=null&&p.startsWith("var(")?p.slice(4,-1):"",onChange:R=>R.target.value&&b(`var(${R.target.value})`),children:[f.jsx("option",{value:"",children:"token…"}),_.map(R=>f.jsx("option",{value:R,children:R.replace("--sc-p-","")},R))]}),K&&f.jsx("input",{type:"text",className:D.pin,"aria-label":`Note on ${s}`,placeholder:"Note on this value…",value:x||"",onChange:R=>C(R.target.value)}),f.jsxs("div",{className:D.values,children:[f.jsxs("span",{title:l,children:["shipped ",l]}),Q&&f.jsxs("span",{title:u,children:["tuned ",u]})]})]})}function Av({def:s,value:i,spring:l,easingPresets:u,onChange:p,onSpring:h}){const m=`prop-${s.name}`;let v;if(s.type==="boolean")v=f.jsx("input",{id:m,type:"checkbox",checked:!!i,onChange:x=>p(x.target.checked)});else if(s.type==="enum")v=f.jsx("select",{id:m,value:i,onChange:x=>p(x.target.value),children:s.options.map(x=>f.jsx("option",{children:x},x))});else if(s.type==="number")v=f.jsx("input",{id:m,type:"number",className:D.num,min:s.min,max:s.max,value:i,onChange:x=>p(+x.target.value)});else if(s.type==="range")v=f.jsxs(f.Fragment,{children:[f.jsx("input",{id:m,type:"range",min:s.min,max:s.max,step:s.step,value:i,onChange:x=>p(+x.target.value)}),f.jsxs("span",{className:D.readout,children:[i,s.unit||""]})]});else{if(s.type==="easing")return f.jsxs("div",{className:D.propBlock,children:[f.jsx("span",{className:D.propLabel,children:f.jsx("code",{children:s.name})}),f.jsx(cp,{label:s.name,value:i,spring:l,presets:u,onChange:(x,_,z)=>h(x,_,z)})]});v=f.jsx("input",{id:m,type:"text",value:i,onChange:x=>p(x.target.value)})}return f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:m,children:f.jsx("code",{children:s.name})}),v]})}const bn=!0,_v="./sounds/",zv=3,Lv=s=>`sc-tune:v2:${s}`,Ev=["all","light","dark"],up=s=>/^--sc-(color|shadow)-/.test(s),Zo=(s,i)=>up(s)?i:"all",Go=()=>({all:{},light:{},dark:{}}),Do=(s,i)=>({...s.overrides.all,...s.overrides[i]}),Jl=["A","B","C","D"],ri=s=>[...new Set(s)],Uo=ri(Lf.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g)||[]),Sv={color:Uo.filter(s=>s.startsWith("--sc-p-color-")&&!s.endsWith("-rgb")),length:Uo.filter(s=>/^--sc-p-(space|size|radius|border-width)-/.test(s)),time:Uo.filter(s=>s.startsWith("--sc-p-motion-duration-"))},Mv=Uo.filter(s=>s.startsWith("--sc-p-motion-easing-"));function Cv(s){var p;const i=s.join(`
`),l=ri(((p=i.match(/var\((--sc-[a-z0-9-]+)/g))==null?void 0:p.map(h=>h.slice(4)))||[]),u=ri(i.match(new RegExp("(?<![\\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\\s*:)","g"))||[]);return{tokens:l.sort(),derived:u}}const Md=s=>{var i;return((i=s.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/))==null?void 0:i[1])||"other"};function Oo(s){return s?/^(cubic-bezier|ease|linear|steps)/.test(s)?"easing":/^-?[\d.]+m?s$/.test(s)?"time":/px/.test(s)&&/(rgb|#|hsl|color\(|inset)/.test(s)||/(rgb|#|hsl|color\()/.test(s)&&/^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(s.trim())?"shadow":CSS.supports("color",s)?"color":/^-?[\d.]+px$/.test(s)?"length":/^-?[\d.]+$/.test(s)?"number":"text":"text"}const si=(s,i)=>{if(!s)return{};const l=getComputedStyle(s);return Object.fromEntries(i.map(u=>[u,l.getPropertyValue(u).trim()]))},jv=(s,i)=>{if(!s)return{};const l=document.createElement("span");l.style.cssText="position:absolute;visibility:hidden;height:0;",s.appendChild(l);const u=Object.fromEntries(i.map(p=>(l.style.width=`var(${p})`,[p,getComputedStyle(l).width])));return l.remove(),u},Cd=(s,i)=>{if(!s)return{};const l=document.createElement("div");l.style.display="none";for(const[p,h]of Object.entries(i))l.style.setProperty(p,h);s.appendChild(l);const u=si(l,Object.keys(i));return l.remove(),u};function Nv(s,i,l){return s.replace(/(-?[\d.]+)px/g,(u,p)=>`${jt(p*i)}px`).replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g,(u,p,h)=>`rgba(${p}, ${jt(Math.min(1,h*l),3)})`).replace(/\/\s*([\d.]+)\s*\)/g,(u,p)=>`/ ${jt(Math.min(1,p*l),3)})`)}let kn=null;const jd=new Map;async function Io(s,i,l){if(!s)return;kn=kn||new(window.AudioContext||window.webkitAudioContext),kn.state==="suspended"&&await kn.resume();let u=jd.get(s);if(!u){const m=await(await fetch(_v+s)).arrayBuffer();u=await kn.decodeAudioData(m),jd.set(s,u)}const p=kn.createBufferSource(),h=kn.createGain();h.gain.value=i,p.buffer=u,p.playbackRate.value=l,p.connect(h).connect(kn.destination),p.start()}const Fv=["rest","hover","focus","active"],Tv={hover:":hover",focus:":focus-visible",active:":active"};function $v(s){var p;const i=Tv[s];if(!i)return"";const l=[],u=(h,m)=>{for(const v of h){if(v.cssRules&&v.media){u(v.cssRules,_=>m(`@media ${v.media.mediaText}{${_}}`));continue}if(!v.selectorText||!v.selectorText.includes(i))continue;const x=v.selectorText.split(",").map(_=>_.trim()).filter(_=>_.includes(i)).map(_=>`[data-force='${s}'] ${_.split(i).join("")}`).join(", ");l.push(m(`${x}{${v.style.cssText}}`))}};for(const h of document.styleSheets)if(((p=h.ownerNode)==null?void 0:p.id)!=="sc-tune-force")try{u(h.cssRules,m=>m)}catch{}return l.join(`
`)}const pi=s=>Object.fromEntries(s.props.map(i=>[i.name,i.default]));function dp(s,i){var l,u,p;for(const[h,m]of Object.entries(((l=s.seed)==null?void 0:l.overrides)||{}))Object.values(i.overrides).some(v=>h in v)||(i.overrides.all[h]=m);for(const[h,m]of Object.entries(((u=s.seed)==null?void 0:u.scoped)||{}))for(const[v,x]of Object.entries(m))!(v in i.overrides[h])&&!(v in i.overrides.all)&&(i.overrides[h][v]=x);for(const[h,m]of Object.entries(((p=s.seed)==null?void 0:p.springs)||{})){if(i.springs[h]||Object.values(i.overrides).some(x=>h in x))continue;const v=Yo(m);i.springs[h]=m,i.overrides.all[h]=v.easing,i.overrides.all[h.replace(/-easing$/,"-duration")]=`${v.settleMs}ms`}return i}const pp=(s,i)=>dp(s,{id:i,overrides:Go(),shadowAdj:Go(),springs:{},pins:{},notes:"",props:pi(s),sound:{file:s.shippedSound,volume:.7,rate:1}});function Pv(s){const i=Sr[s];return{component:s,notes:"",active:"A",concepts:[pp(i,"A")],pick:{id:null,reason:""},view:{theme:"light",zoom:i.kind==="motion"?1:2,ground:"--sc-color-surface-page",compare:!1,blind:!1,order:null,slow:1}}}function Nd(s){var i;try{const l=JSON.parse(localStorage.getItem(Lv(s))||"null");if((l==null?void 0:l.component)===s&&Array.isArray(l.concepts)){for(const u of l.concepts){if(u.props={...pi(Sr[s]),...u.props},u.springs||(u.springs={}),!u.overrides.all){const p=Go();for(const[m,v]of Object.entries(u.overrides))p[up(m)?"dark":"all"][m]=v;const h=Go();for(const[m,v]of Object.entries(u.shadowAdj||{}))h.dark[m]=v;u.overrides=p,u.shadowAdj=h}if(s==="Button")for(const p of Object.values(u.overrides))for(const h of Object.keys(p)){if(!h.startsWith("--sc-font-text-label-chrome-"))continue;const m=h.replace("label-chrome-","label-button-lg-");m in p||(p[m]=p[h]),delete p[h]}}((i=l.view)==null?void 0:i.ground)==="#E3DFD8"&&(l.view.ground="--sc-color-surface-page");for(const u of l.concepts)dp(Sr[s],u);return l}}catch{}return Pv(s)}function Hv(){const s=new URLSearchParams(location.search).get("c"),[i,l]=c.useState(Sr[s]?s:"Switch"),[u,p]=c.useState(()=>Nd(i)),[h,m]=c.useState(null),[v,x]=c.useState([]),[_,z]=c.useState(!0),[b,S]=c.useState({}),[N,V]=c.useState({}),[C,$]=c.useState({}),[X,Q]=c.useState(0),[K,J]=c.useState(!1),[re,R]=c.useState(!1),Y=c.useRef(null),ue=c.useRef({}),pe=c.useRef(null),te=Sr[i],ae=te.kind==="motion",{tokens:I,derived:H}=c.useMemo(()=>{const A=Cv(te.css);return{...A,tokens:[...new Set([...A.tokens,...te.jsTokens||[]])].sort()}},[te]),P=u.concepts.find(A=>A.id===u.active)||u.concepts[0],xe=c.useMemo(()=>{const A=getComputedStyle(document.documentElement);return Mv.map(F=>({name:F,value:A.getPropertyValue(F).trim()}))},[]);c.useEffect(()=>{fetch("./spec.json").then(A=>A.json()).then(A=>{l(A.component),p(A.state),m({recorded:A.recorded})})},[]),c.useEffect(()=>{},[]);const q=A=>{l(A),p(Nd(A)),history.replaceState(null,"",`?c=${A}`)};c.useEffect(()=>{document.documentElement.setAttribute("data-theme",u.view.theme)},[u.view.theme]);const ce=u.view.force||"rest";c.useEffect(()=>{let A=document.getElementById("sc-tune-force");A||(A=document.createElement("style"),A.id="sc-tune-force",document.head.appendChild(A)),A.textContent=$v(ce)},[ce]),c.useLayoutEffect(()=>{var T;S(si(Y.current,I));const A=si(Y.current,I);ue.current[u.view.theme]=A,V({...A,...Cd(Y.current,Do(P,u.view.theme))});const F=(T=pe.current)==null?void 0:T.querySelector("[class]");$(jv(F?F.closest("label")||F:null,H))},[I,H,P.overrides,u.view.theme,P.props]),c.useEffect(()=>{},[u,i]);const U=c.useCallback(A=>p(F=>F),[]),le=c.useCallback((A,F)=>p(T=>({...T,concepts:T.concepts.map(we=>we.id===A?F(we):we)})),[]),G=c.useCallback(A=>(F,T)=>le(A,we=>({...we,props:{...we.props,[F]:T}})),[le]),k=A=>U(F=>({...F,concepts:F.concepts.map(T=>T.id===F.active?A(T):T)})),j=u.view.theme,de=(A,F,T)=>{const we=Zo(F,j),ve={...A,[we]:{...A[we]}};return T===void 0?delete ve[we][F]:ve[we][F]=T,ve},ge=(A,F)=>k(T=>({...T,overrides:de(T.overrides,A,F)})),be=A=>k(F=>{const T={...F.springs};return delete T[A],{...F,overrides:de(F.overrides,A,void 0),shadowAdj:de(F.shadowAdj,A,void 0),springs:T}}),ke=(A,F,T)=>k(we=>{const ve={...we.springs};let _e=we.overrides;if(F){ve[A]=F;const rt=A.replace(/-easing$/,"-duration");rt!==A&&I.includes(rt)&&(_e=de(_e,rt,`${T}ms`))}else delete ve[A];return{...we,springs:ve,overrides:_e}}),Me=(A,F)=>k(T=>({...T,shadowAdj:de(T.shadowAdj,A,F),overrides:de(T.overrides,A,Nv(b[A],F.scale??1,F.strength??1))})),Le=(A,F)=>k(T=>({...T,pins:{...T.pins,[A]:F}})),Ee=(A,F)=>k(T=>({...T,sound:{...T.sound,[A]:F}})),De=(A,F)=>p(T=>({...T,view:{...T.view,[A]:F}})),Kt=te.props.some(A=>A.name==="disabled"),bs=A=>p(F=>({...F,view:{...F.view,force:A==="disabled"?"rest":A},concepts:Kt?F.concepts.map(T=>({...T,props:{...T.props,disabled:A==="disabled"}})):F.concepts})),zn=A=>U(F=>{const T=Jl.find(_e=>!F.concepts.some(rt=>rt.id===_e));if(!T)return F;const we=F.concepts.find(_e=>_e.id===F.active),ve=A?{...structuredClone(we),id:T,notes:""}:pp(te,T);return{...F,concepts:[...F.concepts,ve],active:T}}),jr=A=>U(F=>{if(F.concepts.length<2)return F;const T=F.concepts.filter(we=>we.id!==A);return{...F,concepts:T,active:T[0].id,pick:F.pick.id===A?{id:null,reason:F.pick.reason}:F.pick}}),ks=()=>p(A=>{const F=!A.view.blind,T=F?[...A.concepts.map(we=>we.id)].sort(()=>Math.random()-.5):null;return{...A,view:{...A.view,blind:F,order:T,compare:F?!0:A.view.compare}}}),Yn=c.useCallback(()=>{Q(F=>F+1),te.play&&u.concepts.forEach(F=>te.play(F.props,G(F.id)));const A=u.concepts.find(F=>F.id===u.active);A!=null&&A.sound.file&&Io(A.sound.file,A.sound.volume,A.sound.rate)},[te,u.concepts,u.active,G]),Wn=ae?Math.max(1200,Kl(P.props)*u.view.slow+900):1400*u.view.slow;c.useEffect(()=>{if(!K)return;const A=setInterval(Yn,Wn);return()=>clearInterval(A)},[K,Yn,Wn]);const As=I.filter(A=>Oo(b[A])==="time"),Qn=A=>{const F=u.view.ground,T=F.startsWith("--")?{background:`var(${F})`}:u.view.theme==="dark"?{background:"var(--sc-color-surface-page)"}:{background:F,"--sc-color-surface-page":F},we={zoom:u.view.zoom,...T,...A};if(u.view.slow!==1)for(const ve of As)we[ve]=`calc(${A[ve]??b[ve]} * ${u.view.slow})`;return we};c.useEffect(()=>{window.dispatchEvent(new Event("sc-tokens-change"))},[u.concepts,u.view.theme]);const qt=c.useCallback(()=>{const A=Y.current,F=T=>T.id;return{tool:"sc-tune",version:zv,component:i,kind:te.kind||"component",recorded:new Date().toISOString(),theme:u.view.theme,notes:u.notes,pick:u.pick.id?{concept:u.pick.id,reason:u.pick.reason}:null,concepts:u.concepts.map(T=>{const we=Cd(A,Do(T,u.view.theme));return{id:F(T),notes:T.notes,props:T.props,sound:{...T.sound,shipped:te.shippedSound,trigger:te.trigger},tokens:Ev.flatMap(ve=>Object.keys(T.overrides[ve]).map(_e=>{var Ls;const rt=ve==="all"?b:ue.current[ve]||{},Zt=T.overrides[ve][_e],zs=ve==="all"||ve===u.view.theme;return{name:_e,mode:ve,category:Md(_e),kind:Oo(rt[_e]||b[_e]),shipped:rt[_e]??null,tuned:zs?we[_e]??Zt:Zt,override:Zt,...(Ls=T.shadowAdj[ve])!=null&&Ls[_e]?{shadowAdjust:T.shadowAdj[ve][_e]}:{},...T.springs[_e]?{spring:{...T.springs[_e],...Fd(T.springs[_e])}}:{}}})),pins:Object.fromEntries(Object.entries(T.pins).filter(([,ve])=>ve)),...ae?{motion:{lastFrameMs:Kl(T.props),...T.springs["prop:easing"]?{spring:{...T.springs["prop:easing"],...Fd(T.springs["prop:easing"])}}:{}}}:{}}}),derived:C,tokenCount:I.length,state:u}},[i,te,ae,u,b,C,I]);c.useEffect(()=>{window.scTune={export:qt,component:i}},[qt,i]);const Jt=c.useMemo(()=>{var F;const A={};for(const T of I)(A[F=Md(T)]||(A[F]=[])).push(T);return A},[I]),Nr=u.view.compare?u.view.blind&&u.view.order?u.view.order.map(A=>u.concepts.find(F=>F.id===A)).filter(Boolean):u.concepts:[P],Fr={replay:X,slow:u.view.slow};v.filter(A=>!_||A.seconds<=1);const Tr=Do(P,u.view.theme),_s=Object.keys(Tr).length;return f.jsxs("div",{className:D.app,children:[f.jsxs("header",{className:D.bar,children:[f.jsx("span",{className:D.brand,children:"sc-tune"}),f.jsx("select",{"aria-label":"Subject",value:i,disabled:bn,onChange:A=>q(A.target.value),children:Object.keys(Sr).map(A=>f.jsx("option",{children:A},A))}),f.jsxs("span",{className:D.meta,children:[ae?"choreography":`${I.length} tokens`," · ",u.concepts.length," concept",u.concepts.length>1?"s":""]}),h&&f.jsxs("span",{className:D.meta,children:["snapshot · recorded ",h.recorded]}),f.jsx("span",{className:D.spacer}),f.jsx("button",{type:"button",onClick:Yn,children:"Play"}),f.jsx("button",{type:"button","aria-pressed":K,onClick:()=>J(A=>!A),children:K?"Stop loop":"Loop"}),f.jsxs("select",{"aria-label":"Slow motion",value:u.view.slow,onChange:A=>De("slow",+A.target.value),children:[f.jsx("option",{value:1,children:"1×"}),f.jsx("option",{value:2,children:"½×"}),f.jsx("option",{value:4,children:"¼×"}),f.jsx("option",{value:10,children:"⅒×"})]}),f.jsx("button",{type:"button","aria-pressed":u.view.compare,disabled:u.concepts.length<2,onClick:()=>De("compare",!u.view.compare),children:"Compare"}),f.jsx("button",{type:"button","aria-pressed":u.view.blind,disabled:u.concepts.length<2,onClick:ks,children:u.view.blind?"Reveal":"Blind"}),!bn]}),f.jsx("main",{className:D.stages,children:f.jsxs(zf,{enabled:!1,children:[!u.view.blind&&f.jsxs("section",{className:D.stageWrap,"aria-label":ae?"Default":"Shipped",children:[f.jsx("h2",{className:D.stageLabel,children:ae?"Default":"Shipped"}),f.jsx("div",{className:D.stage,style:Qn({}),ref:Y,inert:"","data-force":ce,children:te.render(ae?pi(te):P.props,()=>{},()=>{},Fr)})]}),u.view.blind&&f.jsx("div",{ref:Y,hidden:!0}),Nr.map((A,F)=>{const T=u.view.blind?`Concept ${F+1}`:`${A.id}${A.id===u.active?" · editing":""}${u.pick.id===A.id?" · picked":""}`;return f.jsxs("section",{className:`${D.stageWrap} ${A.id===u.active&&!u.view.blind?D.activeStage:""}`,"aria-label":T,children:[f.jsxs("h2",{className:D.stageLabel,children:[u.view.compare&&!u.view.blind?f.jsx("button",{type:"button",className:D.stageSelect,onClick:()=>p(we=>({...we,active:A.id})),children:T}):T,ae&&f.jsxs("span",{className:D.readout,children:[" · last frame ",Kl(A.props),"ms"]})]}),f.jsx("div",{className:D.stage,style:Qn(Do(A,j)),ref:A.id===u.active?pe:void 0,"data-force":ce,children:te.render(A.props,G(A.id),()=>Io(A.sound.file,A.sound.volume,A.sound.rate),Fr)})]},A.id)})]})}),f.jsxs("aside",{className:D.panel,children:[f.jsxs("fieldset",{className:D.group,disabled:bn,children:[f.jsx("legend",{children:"Notes for the build"}),f.jsx("textarea",{className:D.notes,"aria-label":"Session notes",placeholder:"Context, intent, constraints. Recorded word for word and treated as requirements.",value:u.notes,onChange:A=>p(F=>({...F,notes:A.target.value}))})]}),f.jsxs("fieldset",{className:D.group,disabled:bn,children:[f.jsx("legend",{children:"Concepts"}),f.jsxs("div",{className:D.tabs,role:"tablist","aria-label":"Concepts",children:[u.concepts.map(A=>f.jsx("button",{type:"button",role:"tab","aria-selected":A.id===u.active,className:D.tab,onClick:()=>p(F=>({...F,active:A.id})),children:A.id},A.id)),f.jsx("button",{type:"button",className:D.tab,disabled:u.concepts.length>=Jl.length,onClick:()=>zn(!0),children:"duplicate"}),f.jsx("button",{type:"button",className:D.tab,disabled:u.concepts.length>=Jl.length,onClick:()=>zn(!1),children:"new"}),f.jsxs("button",{type:"button",className:D.tab,disabled:u.concepts.length<2,onClick:()=>jr(P.id),children:["remove ",P.id]})]}),f.jsx("textarea",{className:D.notes,"aria-label":`Notes on concept ${P.id}`,placeholder:`What concept ${P.id} is trying…`,value:P.notes,onChange:A=>k(F=>({...F,notes:A.target.value}))}),u.concepts.length>1&&f.jsxs("div",{className:D.pick,children:[f.jsx("span",{className:D.propLabel,children:f.jsx("code",{children:"pick"})}),u.concepts.map(A=>f.jsxs("label",{className:D.mini,children:[f.jsx("input",{type:"radio",name:"pick",checked:u.pick.id===A.id,onChange:()=>p(F=>({...F,pick:{...F.pick,id:A.id}}))})," ",A.id]},A.id)),f.jsx("textarea",{className:D.notes,"aria-label":"Why this pick",placeholder:"Why this one wins…",value:u.pick.reason,onChange:A=>p(F=>({...F,pick:{...F.pick,reason:A.target.value}}))})]})]}),f.jsxs("fieldset",{className:D.group,disabled:bn,children:[f.jsx("legend",{children:"View"}),f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"v-theme",children:f.jsx("code",{children:"theme"})}),f.jsxs("select",{id:"v-theme",value:u.view.theme,onChange:A=>De("theme",A.target.value),children:[f.jsx("option",{children:"light"}),f.jsx("option",{children:"dark"})]})]}),f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"v-zoom",children:f.jsx("code",{children:"zoom"})}),f.jsx("input",{id:"v-zoom",type:"range",min:"1",max:"8",step:"0.5",value:u.view.zoom,onChange:A=>De("zoom",+A.target.value)}),f.jsxs("span",{className:D.readout,children:[u.view.zoom,"×"]})]}),f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"v-ground",children:f.jsx("code",{children:"ground"})}),f.jsx("select",{id:"v-ground",value:u.view.ground,onChange:A=>De("ground",A.target.value),children:["--sc-color-surface-page","--sc-color-surface-raised","--sc-color-surface-sunk","--sc-color-surface-floating"].map(A=>f.jsx("option",{value:A,children:A.replace("--sc-color-","")},A))})]})]}),f.jsxs("fieldset",{className:D.group,disabled:bn,children:[f.jsxs("legend",{children:[ae?"Motion":"Props"," · concept ",P.id]}),(()=>{const A=te.props.map(F=>f.jsx(Av,{def:F,value:P.props[F.name],spring:P.springs[`prop:${F.name}`],easingPresets:xe,onChange:T=>G(P.id)(F.name,T),onSpring:(T,we,ve)=>k(_e=>{const rt={..._e.springs},Zt={..._e.props,[F.name]:T};return we?(rt[`prop:${F.name}`]=we,F.durationProp&&(Zt[F.durationProp]=ve)):delete rt[`prop:${F.name}`],{..._e,springs:rt,props:Zt}})},F.name));return ae||A.splice(Math.min(3,A.length),0,f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"p-state",children:f.jsx("code",{children:"state"})}),f.jsxs("select",{id:"p-state",value:Kt&&P.props.disabled?"disabled":ce,onChange:F=>bs(F.target.value),children:[Fv.map(F=>f.jsx("option",{value:F,children:F==="rest"?"default":F},F)),Kt&&f.jsx("option",{value:"disabled",children:"disabled"})]})]},"state")),A})()]}),f.jsxs("fieldset",{className:D.group,disabled:bn,children:[f.jsxs("legend",{children:["Sound · ",te.trigger]}),f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"s-vol",children:f.jsx("code",{children:"volume"})}),f.jsx("input",{id:"s-vol",type:"range",min:"0",max:"1",step:"0.05",value:P.sound.volume,onChange:A=>Ee("volume",+A.target.value)}),f.jsx("span",{className:D.readout,children:P.sound.volume})]}),f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"s-rate",children:f.jsx("code",{children:"pitch"})}),f.jsx("input",{id:"s-rate",type:"range",min:"0.5",max:"2",step:"0.05",value:P.sound.rate,onChange:A=>Ee("rate",+A.target.value)}),f.jsxs("span",{className:D.readout,children:[P.sound.rate,"×"]})]}),f.jsxs("div",{className:D.prop,children:[f.jsx("label",{htmlFor:"s-short",children:f.jsx("code",{children:"under 1 s only"})}),f.jsx("input",{id:"s-short",type:"checkbox",checked:_,onChange:A=>z(A.target.checked)})]}),f.jsxs("ul",{className:D.sounds,"aria-label":"Sound candidates",children:[f.jsx("li",{className:D.sound,children:f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:!P.sound.file,onChange:()=>Ee("file",null)})," silent"]})}),(P.sound.file?[{file:P.sound.file,seconds:""}]:[]).map(A=>f.jsxs("li",{className:`${D.sound} ${A.file===te.shippedSound?D.shippedSound:""}`,children:[f.jsxs("label",{children:[f.jsx("input",{type:"radio",name:"sound",checked:P.sound.file===A.file,onChange:()=>{Ee("file",A.file),Io(A.file,P.sound.volume,P.sound.rate)}}),A.file.replace(/\.(wav|mp3)$/,"")]}),f.jsxs("span",{className:D.readout,children:[A.seconds&&`${A.seconds}s`,A.file===te.shippedSound?" · shipped":""]}),f.jsx("button",{type:"button","aria-label":`Play ${A.file}`,onClick:()=>Io(A.file,P.sound.volume,P.sound.rate),children:"play"})]},A.file))]})]}),!ae&&f.jsxs("p",{className:D.meta,children:[_s," of ",I.length," tokens tuned in concept ",P.id,", ",j," mode. Colour and shadow edits apply to ",j," only; size, type and motion apply to both modes."]}),Object.entries(Jt).map(([A,F])=>f.jsxs("fieldset",{className:D.group,disabled:bn,children:[f.jsxs("legend",{children:[A," · ",F.length]}),F.map(T=>{var we;return f.jsx(kv,{name:T,kind:Oo(b[T]),shipped:b[T],value:N[T]||b[T]||"",override:Tr[T],scope:P.overrides[Zo(T,j)][T]!==void 0?Zo(T,j):P.overrides.all[T]!==void 0?"all":null,adj:(we=P.shadowAdj[Zo(T,j)])==null?void 0:we[T],spring:P.springs[T],pin:P.pins[T],refs:Sv[Oo(b[T])],easingPresets:xe,onSet:ve=>ge(T,ve),onAdj:ve=>Me(T,ve),onSpring:(ve,_e)=>ke(T,ve,_e),onReset:()=>be(T),restOf:T.endsWith("-hover")&&I.includes(T.slice(0,-6))?T.slice(0,-6):null,onCopyRest:()=>ge(T,N[T.slice(0,-6)]||b[T.slice(0,-6)]),onPin:ve=>Le(T,ve)},`${P.id}${j}${T}`)})]},A)),H.length>0&&f.jsxs("fieldset",{className:D.group,children:[f.jsx("legend",{children:"derived · read-only"}),H.map(A=>f.jsxs("div",{className:D.values,children:[f.jsx("code",{children:A})," ",C[A]]},A))]})]})]})}function Fd(s){const i=Yo(s);return{settleMs:i.settleMs,overshoot:jt(i.overshoot,3),framerMotion:{type:"spring",stiffness:s.stiffness,damping:s.damping,mass:s.mass}}}function Rv(){return new URLSearchParams(location.search).get("c"),f.jsx(Hv,{})}const Xl=document.getElementById("root");Xl.dataset.mounted||(Xl.dataset.mounted="true",xf.createRoot(Xl).render(f.jsx(Rv,{})));
