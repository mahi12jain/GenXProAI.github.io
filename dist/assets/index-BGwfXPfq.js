(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))m(M);new MutationObserver(M=>{for(const R of M)if(R.type==="childList")for(const V of R.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&m(V)}).observe(document,{childList:!0,subtree:!0});function A(M){const R={};return M.integrity&&(R.integrity=M.integrity),M.referrerPolicy&&(R.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?R.credentials="include":M.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function m(M){if(M.ep)return;M.ep=!0;const R=A(M);fetch(M.href,R)}})();var ns={exports:{}},xn={};var hd;function J0(){if(hd)return xn;hd=1;var N=Symbol.for("react.transitional.element"),q=Symbol.for("react.fragment");function A(m,M,R){var V=null;if(R!==void 0&&(V=""+R),M.key!==void 0&&(V=""+M.key),"key"in M){R={};for(var k in M)k!=="key"&&(R[k]=M[k])}else R=M;return M=R.ref,{$$typeof:N,type:m,key:V,ref:M!==void 0?M:null,props:R}}return xn.Fragment=q,xn.jsx=A,xn.jsxs=A,xn}var gd;function W0(){return gd||(gd=1,ns.exports=J0()),ns.exports}var c=W0(),is={exports:{}},X={};var pd;function $0(){if(pd)return X;pd=1;var N=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),V=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),G=Symbol.iterator;function Ae(f){return f===null||typeof f!="object"?null:(f=G&&f[G]||f["@@iterator"],typeof f=="function"?f:null)}var ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ye=Object.assign,yt={};function pe(f,j,T){this.props=f,this.context=j,this.refs=yt,this.updater=T||ue}pe.prototype.isReactComponent={},pe.prototype.setState=function(f,j){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,j,"setState")},pe.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function ct(){}ct.prototype=pe.prototype;function Ye(f,j,T){this.props=f,this.context=j,this.refs=yt,this.updater=T||ue}var st=Ye.prototype=new ct;st.constructor=Ye,ye(st,pe.prototype),st.isPureReactComponent=!0;var At=Array.isArray;function Xe(){}var I={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function Nt(f,j,T){var w=T.ref;return{$$typeof:N,type:f,key:j,ref:w!==void 0?w:null,props:T}}function Xl(f,j){return Nt(f.type,j,f.props)}function Et(f){return typeof f=="object"&&f!==null&&f.$$typeof===N}function Ze(f){var j={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(T){return j[T]})}var Sl=/\/+/g;function wt(f,j){return typeof f=="object"&&f!==null&&f.key!=null?Ze(""+f.key):j.toString(36)}function xt(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Xe,Xe):(f.status="pending",f.then(function(j){f.status==="pending"&&(f.status="fulfilled",f.value=j)},function(j){f.status==="pending"&&(f.status="rejected",f.reason=j)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function y(f,j,T,w,Q){var K=typeof f;(K==="undefined"||K==="boolean")&&(f=null);var ae=!1;if(f===null)ae=!0;else switch(K){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(f.$$typeof){case N:case q:ae=!0;break;case B:return ae=f._init,y(ae(f._payload),j,T,w,Q)}}if(ae)return Q=Q(f),ae=w===""?"."+wt(f,0):w,At(Q)?(T="",ae!=null&&(T=ae.replace(Sl,"$&/")+"/"),y(Q,j,T,"",function(Ea){return Ea})):Q!=null&&(Et(Q)&&(Q=Xl(Q,T+(Q.key==null||f&&f.key===Q.key?"":(""+Q.key).replace(Sl,"$&/")+"/")+ae)),j.push(Q)),1;ae=0;var Be=w===""?".":w+":";if(At(f))for(var xe=0;xe<f.length;xe++)w=f[xe],K=Be+wt(w,xe),ae+=y(w,j,T,K,Q);else if(xe=Ae(f),typeof xe=="function")for(f=xe.call(f),xe=0;!(w=f.next()).done;)w=w.value,K=Be+wt(w,xe++),ae+=y(w,j,T,K,Q);else if(K==="object"){if(typeof f.then=="function")return y(xt(f),j,T,w,Q);throw j=String(f),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ae}function E(f,j,T){if(f==null)return f;var w=[],Q=0;return y(f,w,"","",function(K){return j.call(T,K,Q++)}),w}function Y(f){if(f._status===-1){var j=f._result;j=j(),j.then(function(T){(f._status===0||f._status===-1)&&(f._status=1,f._result=T)},function(T){(f._status===0||f._status===-1)&&(f._status=2,f._result=T)}),f._status===-1&&(f._status=0,f._result=j)}if(f._status===1)return f._result.default;throw f._result}var ce=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},fe={map:E,forEach:function(f,j,T){E(f,function(){j.apply(this,arguments)},T)},count:function(f){var j=0;return E(f,function(){j++}),j},toArray:function(f){return E(f,function(j){return j})||[]},only:function(f){if(!Et(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return X.Activity=C,X.Children=fe,X.Component=pe,X.Fragment=A,X.Profiler=M,X.PureComponent=Ye,X.StrictMode=m,X.Suspense=O,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,X.__COMPILER_RUNTIME={__proto__:null,c:function(f){return I.H.useMemoCache(f)}},X.cache=function(f){return function(){return f.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(f,j,T){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var w=ye({},f.props),Q=f.key;if(j!=null)for(K in j.key!==void 0&&(Q=""+j.key),j)!Qe.call(j,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&j.ref===void 0||(w[K]=j[K]);var K=arguments.length-2;if(K===1)w.children=T;else if(1<K){for(var ae=Array(K),Be=0;Be<K;Be++)ae[Be]=arguments[Be+2];w.children=ae}return Nt(f.type,Q,w)},X.createContext=function(f){return f={$$typeof:V,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:R,_context:f},f},X.createElement=function(f,j,T){var w,Q={},K=null;if(j!=null)for(w in j.key!==void 0&&(K=""+j.key),j)Qe.call(j,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(Q[w]=j[w]);var ae=arguments.length-2;if(ae===1)Q.children=T;else if(1<ae){for(var Be=Array(ae),xe=0;xe<ae;xe++)Be[xe]=arguments[xe+2];Q.children=Be}if(f&&f.defaultProps)for(w in ae=f.defaultProps,ae)Q[w]===void 0&&(Q[w]=ae[w]);return Nt(f,K,Q)},X.createRef=function(){return{current:null}},X.forwardRef=function(f){return{$$typeof:k,render:f}},X.isValidElement=Et,X.lazy=function(f){return{$$typeof:B,_payload:{_status:-1,_result:f},_init:Y}},X.memo=function(f,j){return{$$typeof:x,type:f,compare:j===void 0?null:j}},X.startTransition=function(f){var j=I.T,T={};I.T=T;try{var w=f(),Q=I.S;Q!==null&&Q(T,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(Xe,ce)}catch(K){ce(K)}finally{j!==null&&T.types!==null&&(j.types=T.types),I.T=j}},X.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},X.use=function(f){return I.H.use(f)},X.useActionState=function(f,j,T){return I.H.useActionState(f,j,T)},X.useCallback=function(f,j){return I.H.useCallback(f,j)},X.useContext=function(f){return I.H.useContext(f)},X.useDebugValue=function(){},X.useDeferredValue=function(f,j){return I.H.useDeferredValue(f,j)},X.useEffect=function(f,j){return I.H.useEffect(f,j)},X.useEffectEvent=function(f){return I.H.useEffectEvent(f)},X.useId=function(){return I.H.useId()},X.useImperativeHandle=function(f,j,T){return I.H.useImperativeHandle(f,j,T)},X.useInsertionEffect=function(f,j){return I.H.useInsertionEffect(f,j)},X.useLayoutEffect=function(f,j){return I.H.useLayoutEffect(f,j)},X.useMemo=function(f,j){return I.H.useMemo(f,j)},X.useOptimistic=function(f,j){return I.H.useOptimistic(f,j)},X.useReducer=function(f,j,T){return I.H.useReducer(f,j,T)},X.useRef=function(f){return I.H.useRef(f)},X.useState=function(f){return I.H.useState(f)},X.useSyncExternalStore=function(f,j,T){return I.H.useSyncExternalStore(f,j,T)},X.useTransition=function(){return I.H.useTransition()},X.version="19.2.0",X}var bd;function rs(){return bd||(bd=1,is.exports=$0()),is.exports}var je=rs(),us={exports:{}},Sn={},cs={exports:{}},ss={};var vd;function F0(){return vd||(vd=1,(function(N){function q(y,E){var Y=y.length;y.push(E);e:for(;0<Y;){var ce=Y-1>>>1,fe=y[ce];if(0<M(fe,E))y[ce]=E,y[Y]=fe,Y=ce;else break e}}function A(y){return y.length===0?null:y[0]}function m(y){if(y.length===0)return null;var E=y[0],Y=y.pop();if(Y!==E){y[0]=Y;e:for(var ce=0,fe=y.length,f=fe>>>1;ce<f;){var j=2*(ce+1)-1,T=y[j],w=j+1,Q=y[w];if(0>M(T,Y))w<fe&&0>M(Q,T)?(y[ce]=Q,y[w]=Y,ce=w):(y[ce]=T,y[j]=Y,ce=j);else if(w<fe&&0>M(Q,Y))y[ce]=Q,y[w]=Y,ce=w;else break e}}return E}function M(y,E){var Y=y.sortIndex-E.sortIndex;return Y!==0?Y:y.id-E.id}if(N.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;N.unstable_now=function(){return R.now()}}else{var V=Date,k=V.now();N.unstable_now=function(){return V.now()-k}}var O=[],x=[],B=1,C=null,G=3,Ae=!1,ue=!1,ye=!1,yt=!1,pe=typeof setTimeout=="function"?setTimeout:null,ct=typeof clearTimeout=="function"?clearTimeout:null,Ye=typeof setImmediate<"u"?setImmediate:null;function st(y){for(var E=A(x);E!==null;){if(E.callback===null)m(x);else if(E.startTime<=y)m(x),E.sortIndex=E.expirationTime,q(O,E);else break;E=A(x)}}function At(y){if(ye=!1,st(y),!ue)if(A(O)!==null)ue=!0,Xe||(Xe=!0,Ze());else{var E=A(x);E!==null&&xt(At,E.startTime-y)}}var Xe=!1,I=-1,Qe=5,Nt=-1;function Xl(){return yt?!0:!(N.unstable_now()-Nt<Qe)}function Et(){if(yt=!1,Xe){var y=N.unstable_now();Nt=y;var E=!0;try{e:{ue=!1,ye&&(ye=!1,ct(I),I=-1),Ae=!0;var Y=G;try{t:{for(st(y),C=A(O);C!==null&&!(C.expirationTime>y&&Xl());){var ce=C.callback;if(typeof ce=="function"){C.callback=null,G=C.priorityLevel;var fe=ce(C.expirationTime<=y);if(y=N.unstable_now(),typeof fe=="function"){C.callback=fe,st(y),E=!0;break t}C===A(O)&&m(O),st(y)}else m(O);C=A(O)}if(C!==null)E=!0;else{var f=A(x);f!==null&&xt(At,f.startTime-y),E=!1}}break e}finally{C=null,G=Y,Ae=!1}E=void 0}}finally{E?Ze():Xe=!1}}}var Ze;if(typeof Ye=="function")Ze=function(){Ye(Et)};else if(typeof MessageChannel<"u"){var Sl=new MessageChannel,wt=Sl.port2;Sl.port1.onmessage=Et,Ze=function(){wt.postMessage(null)}}else Ze=function(){pe(Et,0)};function xt(y,E){I=pe(function(){y(N.unstable_now())},E)}N.unstable_IdlePriority=5,N.unstable_ImmediatePriority=1,N.unstable_LowPriority=4,N.unstable_NormalPriority=3,N.unstable_Profiling=null,N.unstable_UserBlockingPriority=2,N.unstable_cancelCallback=function(y){y.callback=null},N.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<y?Math.floor(1e3/y):5},N.unstable_getCurrentPriorityLevel=function(){return G},N.unstable_next=function(y){switch(G){case 1:case 2:case 3:var E=3;break;default:E=G}var Y=G;G=E;try{return y()}finally{G=Y}},N.unstable_requestPaint=function(){yt=!0},N.unstable_runWithPriority=function(y,E){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var Y=G;G=y;try{return E()}finally{G=Y}},N.unstable_scheduleCallback=function(y,E,Y){var ce=N.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,y){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Y+fe,y={id:B++,callback:E,priorityLevel:y,startTime:Y,expirationTime:fe,sortIndex:-1},Y>ce?(y.sortIndex=Y,q(x,y),A(O)===null&&y===A(x)&&(ye?(ct(I),I=-1):ye=!0,xt(At,Y-ce))):(y.sortIndex=fe,q(O,y),ue||Ae||(ue=!0,Xe||(Xe=!0,Ze()))),y},N.unstable_shouldYield=Xl,N.unstable_wrapCallback=function(y){var E=G;return function(){var Y=G;G=E;try{return y.apply(this,arguments)}finally{G=Y}}}})(ss)),ss}var yd;function I0(){return yd||(yd=1,cs.exports=F0()),cs.exports}var os={exports:{}},qe={};var xd;function P0(){if(xd)return qe;xd=1;var N=rs();function q(O){var x="https://react.dev/errors/"+O;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)x+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+O+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var m={d:{f:A,r:function(){throw Error(q(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},M=Symbol.for("react.portal");function R(O,x,B){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:C==null?null:""+C,children:O,containerInfo:x,implementation:B}}var V=N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(O,x){if(O==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,qe.createPortal=function(O,x){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(q(299));return R(O,x,null,B)},qe.flushSync=function(O){var x=V.T,B=m.p;try{if(V.T=null,m.p=2,O)return O()}finally{V.T=x,m.p=B,m.d.f()}},qe.preconnect=function(O,x){typeof O=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,m.d.C(O,x))},qe.prefetchDNS=function(O){typeof O=="string"&&m.d.D(O)},qe.preinit=function(O,x){if(typeof O=="string"&&x&&typeof x.as=="string"){var B=x.as,C=k(B,x.crossOrigin),G=typeof x.integrity=="string"?x.integrity:void 0,Ae=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;B==="style"?m.d.S(O,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:C,integrity:G,fetchPriority:Ae}):B==="script"&&m.d.X(O,{crossOrigin:C,integrity:G,fetchPriority:Ae,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},qe.preinitModule=function(O,x){if(typeof O=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var B=k(x.as,x.crossOrigin);m.d.M(O,{crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&m.d.M(O)},qe.preload=function(O,x){if(typeof O=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var B=x.as,C=k(B,x.crossOrigin);m.d.L(O,B,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},qe.preloadModule=function(O,x){if(typeof O=="string")if(x){var B=k(x.as,x.crossOrigin);m.d.m(O,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else m.d.m(O)},qe.requestFormReset=function(O){m.d.r(O)},qe.unstable_batchedUpdates=function(O,x){return O(x)},qe.useFormState=function(O,x,B){return V.H.useFormState(O,x,B)},qe.useFormStatus=function(){return V.H.useHostTransitionStatus()},qe.version="19.2.0",qe}var Sd;function eh(){if(Sd)return os.exports;Sd=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(q){console.error(q)}}return N(),os.exports=P0(),os.exports}var zd;function th(){if(zd)return Sn;zd=1;var N=I0(),q=rs(),A=eh();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function V(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(R(e)!==e)throw Error(m(188))}function x(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return O(n),e;if(i===a)return O(n),t;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,s=n.child;s;){if(s===l){u=!0,l=n,a=i;break}if(s===a){u=!0,a=n,l=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===l){u=!0,l=i,a=n;break}if(s===a){u=!0,a=i,l=n;break}s=s.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,G=Symbol.for("react.element"),Ae=Symbol.for("react.transitional.element"),ue=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),Ye=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Nt=Symbol.for("react.activity"),Xl=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var Sl=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case pe:return"Profiler";case yt:return"StrictMode";case At:return"Suspense";case Xe:return"SuspenseList";case Nt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ue:return"Portal";case Ye:return e.displayName||"Context";case ct:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var xt=Array.isArray,y=q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ce=[],fe=-1;function f(e){return{current:e}}function j(e){0>fe||(e.current=ce[fe],ce[fe]=null,fe--)}function T(e,t){fe++,ce[fe]=e.current,e.current=t}var w=f(null),Q=f(null),K=f(null),ae=f(null);function Be(e,t){switch(T(K,t),T(Q,e),T(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Yf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Yf(t),e=qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(w),T(w,e)}function xe(){j(w),j(Q),j(K)}function Ea(e){e.memoizedState!==null&&T(ae,e);var t=w.current,l=qf(t,e.type);t!==l&&(T(Q,e),T(w,l))}function zn(e){Q.current===e&&(j(w),j(Q)),ae.current===e&&(j(ae),pn._currentValue=Y)}var Gi,fs;function zl(e){if(Gi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Gi=t&&t[1]||"",fs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gi+e+fs}var Xi=!1;function Qi(e,t){if(!e||Xi)return"";Xi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(b){var p=b}Reflect.construct(e,[],z)}else{try{z.call()}catch(b){p=b}e.call(z.prototype)}}else{try{throw Error()}catch(b){p=b}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(b){if(b&&p&&typeof b.stack=="string")return[b.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),g=s.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===g.length)for(a=o.length-1,n=g.length-1;1<=a&&0<=n&&o[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==g[n]){var v=`
`+o[a].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=a&&0<=n);break}}}finally{Xi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?zl(l):""}function Nd(e,t){switch(e.tag){case 26:case 27:case 5:return zl(e.type);case 16:return zl("Lazy");case 13:return e.child!==t&&t!==null?zl("Suspense Fallback"):zl("Suspense");case 19:return zl("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return zl("Activity");default:return""}}function ds(e){try{var t="",l=null;do t+=Nd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zi=Object.prototype.hasOwnProperty,Li=N.unstable_scheduleCallback,Vi=N.unstable_cancelCallback,Ed=N.unstable_shouldYield,Td=N.unstable_requestPaint,Fe=N.unstable_now,Od=N.unstable_getCurrentPriorityLevel,ms=N.unstable_ImmediatePriority,hs=N.unstable_UserBlockingPriority,jn=N.unstable_NormalPriority,Md=N.unstable_LowPriority,gs=N.unstable_IdlePriority,_d=N.log,wd=N.unstable_setDisableYieldValue,Ta=null,Ie=null;function $t(e){if(typeof _d=="function"&&wd(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Ta,e)}catch{}}var Pe=Math.clz32?Math.clz32:Ud,Dd=Math.log,Cd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Dd(e)/Cd|0)|0}var An=256,Nn=262144,En=4194304;function jl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=jl(a):(u&=s,u!==0?n=jl(u):l||(l=s&~e,l!==0&&(n=jl(l))))):(s=a&~i,s!==0?n=jl(s):u!==0?n=jl(u):l||(l=a&~e,l!==0&&(n=jl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(){var e=En;return En<<=1,(En&62914560)===0&&(En=4194304),e}function ki(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rd(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,g=e.hiddenUpdates;for(l=u&~l;0<l;){var v=31-Pe(l),z=1<<v;s[v]=0,o[v]=-1;var p=g[v];if(p!==null)for(g[v]=null,v=0;v<p.length;v++){var b=p[v];b!==null&&(b.lane&=-536870913)}l&=~z}a!==0&&bs(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function bs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Pe(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function vs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Pe(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function ys(e,t){var l=t&-t;return l=(l&42)!==0?1:Ki(l),(l&(e.suspendedLanes|t))!==0?0:l}function Ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xs(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:cd(e.type))}function Ss(e,t){var l=E.p;try{return E.p=e,t()}finally{E.p=l}}var Ft=Math.random().toString(36).slice(2),De="__reactFiber$"+Ft,Le="__reactProps$"+Ft,Ql="__reactContainer$"+Ft,Wi="__reactEvents$"+Ft,Yd="__reactListeners$"+Ft,qd="__reactHandles$"+Ft,zs="__reactResources$"+Ft,_a="__reactMarker$"+Ft;function $i(e){delete e[De],delete e[Le],delete e[Wi],delete e[Yd],delete e[qd]}function Zl(e){var t=e[De];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[De]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Vf(e);e!==null;){if(l=e[De])return l;e=Vf(e)}return t}e=l,l=e.parentNode}return null}function Ll(e){if(e=e[De]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Vl(e){var t=e[zs];return t||(t=e[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[_a]=!0}var js=new Set,As={};function Al(e,t){kl(e,t),kl(e+"Capture",t)}function kl(e,t){for(As[e]=t,e=0;e<t.length;e++)js.add(t[e])}var Bd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ns={},Es={};function Gd(e){return Zi.call(Es,e)?!0:Zi.call(Ns,e)?!1:Bd.test(e)?Es[e]=!0:(Ns[e]=!0,!1)}function On(e,t,l){if(Gd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Mn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Dt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=Ts(e)?"checked":"value";e._valueTracker=Xd(e,t,""+e[t])}}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ts(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qd=/[\n"\\]/g;function rt(e){return e.replace(Qd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ii(e,t,l,a,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Pi(e,u,ot(t)):l!=null?Pi(e,u,ot(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+ot(s):e.removeAttribute("name")}function Ms(e,t,l,a,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}l=l!=null?""+ot(l):"",t=t!=null?""+ot(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Fi(e)}function Pi(e,t,l){t==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Kl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ot(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function _s(e,t,l){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ot(l):""}function ws(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(xt(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ot(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Fi(e)}function Jl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Zd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ds(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Zd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Cs(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Ds(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Ds(e,i,t[i])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wn(e){return Vd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ct(){}var tu=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,$l=null;function Us(e){var t=Ll(e);if(t&&(e=t.stateNode)){var l=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ii(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Le]||null;if(!n)throw Error(m(90));Ii(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Os(a)}break e;case"textarea":_s(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Kl(e,!!l.multiple,t,!1)}}}var au=!1;function Hs(e,t,l){if(au)return e(t,l);au=!0;try{var a=e(t);return a}finally{if(au=!1,(Wl!==null||$l!==null)&&(vi(),Wl&&(t=Wl,e=$l,$l=Wl=null,Us(t),e)))for(t=0;t<e.length;t++)Us(e[t])}}function Da(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Le]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Ut)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{nu=!1}var It=null,iu=null,Dn=null;function Rs(){if(Dn)return Dn;var e,t=iu,l=t.length,a,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Dn=n.slice(e,1<a?1-a:void 0)}function Cn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Un(){return!0}function Ys(){return!1}function Ve(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Un:Ys,this.isPropagationStopped=Ys,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Ve(Nl),Ua=C({},Nl,{view:0,detail:0}),kd=Ve(Ua),uu,cu,Ha,Rn=C({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove"?(uu=e.screenX-Ha.screenX,cu=e.screenY-Ha.screenY):cu=uu=0,Ha=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),qs=Ve(Rn),Kd=C({},Rn,{dataTransfer:0}),Jd=Ve(Kd),Wd=C({},Ua,{relatedTarget:0}),su=Ve(Wd),$d=C({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=Ve($d),Id=C({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Ve(Id),em=C({},Nl,{data:0}),Bs=Ve(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function ou(){return nm}var im=C({},Ua,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Ve(im),cm=C({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=Ve(cm),sm=C({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),om=Ve(sm),rm=C({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=Ve(rm),dm=C({},Rn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Ve(dm),hm=C({},Nl,{newState:0,oldState:0}),gm=Ve(hm),pm=[9,13,27,32],ru=Ut&&"CompositionEvent"in window,Ra=null;Ut&&"documentMode"in document&&(Ra=document.documentMode);var bm=Ut&&"TextEvent"in window&&!Ra,Xs=Ut&&(!ru||Ra&&8<Ra&&11>=Ra),Qs=" ",Zs=!1;function Ls(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fl=!1;function vm(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(Zs=!0,Qs);case"textInput":return e=t.data,e===Qs&&Zs?null:e;default:return null}}function ym(e,t){if(Fl)return e==="compositionend"||!ru&&Ls(e,t)?(e=Rs(),Dn=iu=It=null,Fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function Ks(e,t,l,a){Wl?$l?$l.push(a):$l=[a]:Wl=a,t=Ni(t,"onChange"),0<t.length&&(l=new Hn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ya=null,qa=null;function Sm(e){wf(e,0)}function Yn(e){var t=wa(e);if(Os(t))return e}function Js(e,t){if(e==="change")return t}var Ws=!1;if(Ut){var fu;if(Ut){var du="oninput"in document;if(!du){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),du=typeof $s.oninput=="function"}fu=du}else fu=!1;Ws=fu&&(!document.documentMode||9<document.documentMode)}function Fs(){Ya&&(Ya.detachEvent("onpropertychange",Is),qa=Ya=null)}function Is(e){if(e.propertyName==="value"&&Yn(qa)){var t=[];Ks(t,qa,e,lu(e)),Hs(Sm,t)}}function zm(e,t,l){e==="focusin"?(Fs(),Ya=t,qa=l,Ya.attachEvent("onpropertychange",Is)):e==="focusout"&&Fs()}function jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(qa)}function Am(e,t){if(e==="click")return Yn(t)}function Nm(e,t){if(e==="input"||e==="change")return Yn(t)}function Em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Em;function Ba(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zi.call(t,n)||!et(e[n],t[n]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eo(e,t){var l=Ps(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ps(l)}}function to(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?to(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_n(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=_n(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tm=Ut&&"documentMode"in document&&11>=document.documentMode,Il=null,hu=null,Ga=null,gu=!1;function ao(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gu||Il==null||Il!==_n(a)||(a=Il,"selectionStart"in a&&mu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ga&&Ba(Ga,a)||(Ga=a,a=Ni(hu,"onSelect"),0<a.length&&(t=new Hn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Il)))}function El(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Pl={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionrun:El("Transition","TransitionRun"),transitionstart:El("Transition","TransitionStart"),transitioncancel:El("Transition","TransitionCancel"),transitionend:El("Transition","TransitionEnd")},pu={},no={};Ut&&(no=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Tl(e){if(pu[e])return pu[e];if(!Pl[e])return e;var t=Pl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in no)return pu[e]=t[l];return e}var io=Tl("animationend"),uo=Tl("animationiteration"),co=Tl("animationstart"),Om=Tl("transitionrun"),Mm=Tl("transitionstart"),_m=Tl("transitioncancel"),so=Tl("transitionend"),oo=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function St(e,t){oo.set(e,t),Al(t,[e])}var qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],ea=0,vu=0;function Bn(){for(var e=ea,t=vu=ea=0;t<e;){var l=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var n=ft[t];ft[t++]=null;var i=ft[t];if(ft[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&ro(l,n,i)}}function Gn(e,t,l,a){ft[ea++]=e,ft[ea++]=t,ft[ea++]=l,ft[ea++]=a,vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function yu(e,t,l,a){return Gn(e,t,l,a),Xn(e)}function Ol(e,t){return Gn(e,null,null,t),Xn(e)}function ro(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Pe(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Xn(e){if(50<on)throw on=0,Oc=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ta={};function wm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,l,a){return new wm(e,t,l,a)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=tt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function fo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")xu(e)&&(u=1);else if(typeof e=="string")u=R0(e,l,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Nt:return e=tt(31,l,t,n),e.elementType=Nt,e.lanes=i,e;case ye:return Ml(l.children,n,i,t);case yt:u=8,n|=24;break;case pe:return e=tt(12,l,t,n|2),e.elementType=pe,e.lanes=i,e;case At:return e=tt(13,l,t,n),e.elementType=At,e.lanes=i,e;case Xe:return e=tt(19,l,t,n),e.elementType=Xe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ye:u=10;break e;case ct:u=9;break e;case st:u=11;break e;case I:u=14;break e;case Qe:u=16,a=null;break e}u=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=tt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Ml(e,t,l,a){return e=tt(7,e,a,t),e.lanes=l,e}function Su(e,t,l){return e=tt(6,e,null,t),e.lanes=l,e}function mo(e){var t=tt(18,null,null,0);return t.stateNode=e,t}function zu(e,t,l){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ho=new WeakMap;function dt(e,t){if(typeof e=="object"&&e!==null){var l=ho.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ds(t)},ho.set(e,t),t)}return{value:e,source:t,stack:ds(t)}}var la=[],aa=0,Zn=null,Xa=0,mt=[],ht=0,Pt=null,Tt=1,Ot="";function Rt(e,t){la[aa++]=Xa,la[aa++]=Zn,Zn=e,Xa=t}function go(e,t,l){mt[ht++]=Tt,mt[ht++]=Ot,mt[ht++]=Pt,Pt=e;var a=Tt;e=Ot;var n=32-Pe(a)-1;a&=~(1<<n),l+=1;var i=32-Pe(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Tt=1<<32-Pe(t)+n|l<<n|a,Ot=i+e}else Tt=1<<i|l<<n|a,Ot=e}function ju(e){e.return!==null&&(Rt(e,1),go(e,1,0))}function Au(e){for(;e===Zn;)Zn=la[--aa],la[aa]=null,Xa=la[--aa],la[aa]=null;for(;e===Pt;)Pt=mt[--ht],mt[ht]=null,Ot=mt[--ht],mt[ht]=null,Tt=mt[--ht],mt[ht]=null}function po(e,t){mt[ht++]=Tt,mt[ht++]=Ot,mt[ht++]=Pt,Tt=t.id,Ot=t.overflow,Pt=e}var Ce=null,me=null,P=!1,el=null,gt=!1,Nu=Error(m(519));function tl(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(dt(t,e)),Nu}function bo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[De]=e,t[Le]=a,l){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(l=0;l<fn.length;l++)W(fn[l],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Ms(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),ws(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Hf(t.textContent,l)?(a.popover!=null&&(W("beforetoggle",t),W("toggle",t)),a.onScroll!=null&&W("scroll",t),a.onScrollEnd!=null&&W("scrollend",t),a.onClick!=null&&(t.onclick=Ct),t=!0):t=!1,t||tl(e,!0)}function vo(e){for(Ce=e.return;Ce;)switch(Ce.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:Ce=Ce.return}}function na(e){if(e!==Ce)return!1;if(!P)return vo(e),P=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Zc(e.type,e.memoizedProps)),l=!l),l&&me&&tl(e),vo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));me=Lf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));me=Lf(e)}else t===27?(t=me,gl(e.type)?(e=Jc,Jc=null,me=e):me=t):me=Ce?bt(e.stateNode.nextSibling):null;return!0}function _l(){me=Ce=null,P=!1}function Eu(){var e=el;return e!==null&&(We===null?We=e:We.push.apply(We,e),el=null),e}function Qa(e){el===null?el=[e]:el.push(e)}var Tu=f(null),wl=null,Yt=null;function ll(e,t,l){T(Tu,t._currentValue),t._currentValue=l}function qt(e){e._currentValue=Tu.current,j(Tu)}function Ou(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Mu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Ou(i.return,l,e),a||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Ou(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ia(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var s=n.type;et(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===ae.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&Mu(t,e,l,a),t.flags|=262144}function Ln(e){for(e=e.firstContext;e!==null;){if(!et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dl(e){wl=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return yo(wl,e)}function Vn(e,t){return wl===null&&Dl(e),yo(e,t)}function yo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Yt===null){if(e===null)throw Error(m(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return l}var Dm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Cm=N.unstable_scheduleCallback,Um=N.unstable_NormalPriority,Ne={$$typeof:Ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Dm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&Cm(Um,function(){e.controller.abort()})}var La=null,wu=0,ua=0,ca=null;function Hm(e,t){if(La===null){var l=La=[];wu=0,ua=Uc(),ca={status:"pending",value:void 0,then:function(a){l.push(a)}}}return wu++,t.then(xo,xo),t}function xo(){if(--wu===0&&La!==null){ca!==null&&(ca.status="fulfilled");var e=La;La=null,ua=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var So=y.S;y.S=function(e,t){nf=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hm(e,t),So!==null&&So(e,t)};var Cl=f(null);function Du(){var e=Cl.current;return e!==null?e:de.pooledCache}function kn(e,t){t===null?T(Cl,Cl.current):T(Cl,t.pool)}function zo(){var e=Du();return e===null?null:{parent:Ne._currentValue,pool:e}}var sa=Error(m(460)),Cu=Error(m(474)),Kn=Error(m(542)),Jn={then:function(){}};function jo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ao(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ct,Ct),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Eo(e),e;default:if(typeof t.status=="string")t.then(Ct,Ct);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Eo(e),e}throw Hl=t,sa}}function Ul(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,sa):l}}var Hl=null;function No(){if(Hl===null)throw Error(m(459));var e=Hl;return Hl=null,e}function Eo(e){if(e===sa||e===Kn)throw Error(m(483))}var oa=null,Va=0;function Wn(e){var t=Va;return Va+=1,oa===null&&(oa=[]),Ao(oa,e,t)}function ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $n(e,t){throw t.$$typeof===G?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function To(e){function t(d,r){if(e){var h=d.deletions;h===null?(d.deletions=[r],d.flags|=16):h.push(r)}}function l(d,r){if(!e)return null;for(;r!==null;)t(d,r),r=r.sibling;return null}function a(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function n(d,r){return d=Ht(d,r),d.index=0,d.sibling=null,d}function i(d,r,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<r?(d.flags|=67108866,r):h):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function u(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,r,h,S){return r===null||r.tag!==6?(r=Su(h,d.mode,S),r.return=d,r):(r=n(r,h),r.return=d,r)}function o(d,r,h,S){var U=h.type;return U===ye?v(d,r,h.props.children,S,h.key):r!==null&&(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qe&&Ul(U)===r.type)?(r=n(r,h.props),ka(r,h),r.return=d,r):(r=Qn(h.type,h.key,h.props,null,d.mode,S),ka(r,h),r.return=d,r)}function g(d,r,h,S){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=zu(h,d.mode,S),r.return=d,r):(r=n(r,h.children||[]),r.return=d,r)}function v(d,r,h,S,U){return r===null||r.tag!==7?(r=Ml(h,d.mode,S,U),r.return=d,r):(r=n(r,h),r.return=d,r)}function z(d,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Su(""+r,d.mode,h),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ae:return h=Qn(r.type,r.key,r.props,null,d.mode,h),ka(h,r),h.return=d,h;case ue:return r=zu(r,d.mode,h),r.return=d,r;case Qe:return r=Ul(r),z(d,r,h)}if(xt(r)||Ze(r))return r=Ml(r,d.mode,h,null),r.return=d,r;if(typeof r.then=="function")return z(d,Wn(r),h);if(r.$$typeof===Ye)return z(d,Vn(d,r),h);$n(d,r)}return null}function p(d,r,h,S){var U=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:s(d,r,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ae:return h.key===U?o(d,r,h,S):null;case ue:return h.key===U?g(d,r,h,S):null;case Qe:return h=Ul(h),p(d,r,h,S)}if(xt(h)||Ze(h))return U!==null?null:v(d,r,h,S,null);if(typeof h.then=="function")return p(d,r,Wn(h),S);if(h.$$typeof===Ye)return p(d,r,Vn(d,h),S);$n(d,h)}return null}function b(d,r,h,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(h)||null,s(r,d,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ae:return d=d.get(S.key===null?h:S.key)||null,o(r,d,S,U);case ue:return d=d.get(S.key===null?h:S.key)||null,g(r,d,S,U);case Qe:return S=Ul(S),b(d,r,h,S,U)}if(xt(S)||Ze(S))return d=d.get(h)||null,v(r,d,S,U,null);if(typeof S.then=="function")return b(d,r,h,Wn(S),U);if(S.$$typeof===Ye)return b(d,r,h,Vn(r,S),U);$n(r,S)}return null}function _(d,r,h,S){for(var U=null,ee=null,D=r,L=r=0,F=null;D!==null&&L<h.length;L++){D.index>L?(F=D,D=null):F=D.sibling;var te=p(d,D,h[L],S);if(te===null){D===null&&(D=F);break}e&&D&&te.alternate===null&&t(d,D),r=i(te,r,L),ee===null?U=te:ee.sibling=te,ee=te,D=F}if(L===h.length)return l(d,D),P&&Rt(d,L),U;if(D===null){for(;L<h.length;L++)D=z(d,h[L],S),D!==null&&(r=i(D,r,L),ee===null?U=D:ee.sibling=D,ee=D);return P&&Rt(d,L),U}for(D=a(D);L<h.length;L++)F=b(D,d,L,h[L],S),F!==null&&(e&&F.alternate!==null&&D.delete(F.key===null?L:F.key),r=i(F,r,L),ee===null?U=F:ee.sibling=F,ee=F);return e&&D.forEach(function(xl){return t(d,xl)}),P&&Rt(d,L),U}function H(d,r,h,S){if(h==null)throw Error(m(151));for(var U=null,ee=null,D=r,L=r=0,F=null,te=h.next();D!==null&&!te.done;L++,te=h.next()){D.index>L?(F=D,D=null):F=D.sibling;var xl=p(d,D,te.value,S);if(xl===null){D===null&&(D=F);break}e&&D&&xl.alternate===null&&t(d,D),r=i(xl,r,L),ee===null?U=xl:ee.sibling=xl,ee=xl,D=F}if(te.done)return l(d,D),P&&Rt(d,L),U;if(D===null){for(;!te.done;L++,te=h.next())te=z(d,te.value,S),te!==null&&(r=i(te,r,L),ee===null?U=te:ee.sibling=te,ee=te);return P&&Rt(d,L),U}for(D=a(D);!te.done;L++,te=h.next())te=b(D,d,L,te.value,S),te!==null&&(e&&te.alternate!==null&&D.delete(te.key===null?L:te.key),r=i(te,r,L),ee===null?U=te:ee.sibling=te,ee=te);return e&&D.forEach(function(K0){return t(d,K0)}),P&&Rt(d,L),U}function re(d,r,h,S){if(typeof h=="object"&&h!==null&&h.type===ye&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ae:e:{for(var U=h.key;r!==null;){if(r.key===U){if(U=h.type,U===ye){if(r.tag===7){l(d,r.sibling),S=n(r,h.props.children),S.return=d,d=S;break e}}else if(r.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qe&&Ul(U)===r.type){l(d,r.sibling),S=n(r,h.props),ka(S,h),S.return=d,d=S;break e}l(d,r);break}else t(d,r);r=r.sibling}h.type===ye?(S=Ml(h.props.children,d.mode,S,h.key),S.return=d,d=S):(S=Qn(h.type,h.key,h.props,null,d.mode,S),ka(S,h),S.return=d,d=S)}return u(d);case ue:e:{for(U=h.key;r!==null;){if(r.key===U)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){l(d,r.sibling),S=n(r,h.children||[]),S.return=d,d=S;break e}else{l(d,r);break}else t(d,r);r=r.sibling}S=zu(h,d.mode,S),S.return=d,d=S}return u(d);case Qe:return h=Ul(h),re(d,r,h,S)}if(xt(h))return _(d,r,h,S);if(Ze(h)){if(U=Ze(h),typeof U!="function")throw Error(m(150));return h=U.call(h),H(d,r,h,S)}if(typeof h.then=="function")return re(d,r,Wn(h),S);if(h.$$typeof===Ye)return re(d,r,Vn(d,h),S);$n(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(l(d,r.sibling),S=n(r,h),S.return=d,d=S):(l(d,r),S=Su(h,d.mode,S),S.return=d,d=S),u(d)):l(d,r)}return function(d,r,h,S){try{Va=0;var U=re(d,r,h,S);return oa=null,U}catch(D){if(D===sa||D===Kn)throw D;var ee=tt(29,D,null,d.mode);return ee.lanes=S,ee.return=d,ee}finally{}}}var Rl=To(!0),Oo=To(!1),al=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Xn(e),ro(e,null,l),t}return Gn(e,a,t,l),Xn(e)}function Ka(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,vs(e,l)}}function Ru(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Yu=!1;function Ja(){if(Yu){var e=ca;if(e!==null)throw e}}function Wa(e,t,l,a){Yu=!1;var n=e.updateQueue;al=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,g=o.next;o.next=null,u===null?i=g:u.next=g,u=o;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==u&&(s===null?v.firstBaseUpdate=g:s.next=g,v.lastBaseUpdate=o))}if(i!==null){var z=n.baseState;u=0,v=g=o=null,s=i;do{var p=s.lane&-536870913,b=p!==s.lane;if(b?($&p)===p:(a&p)===p){p!==0&&p===ua&&(Yu=!0),v!==null&&(v=v.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var _=e,H=s;p=t;var re=l;switch(H.tag){case 1:if(_=H.payload,typeof _=="function"){z=_.call(re,z,p);break e}z=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=H.payload,p=typeof _=="function"?_.call(re,z,p):_,p==null)break e;z=C({},z,p);break e;case 2:al=!0}}p=s.callback,p!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[p]:b.push(p))}else b={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(g=v=b,o=z):v=v.next=b,u|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);v===null&&(o=z),n.baseState=o,n.firstBaseUpdate=g,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),rl|=u,e.lanes=u,e.memoizedState=z}}function Mo(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function _o(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Mo(l[e],t)}var ra=f(null),Fn=f(0);function wo(e,t){e=Kt,T(Fn,e),T(ra,t),Kt=e|t.baseLanes}function qu(){T(Fn,Kt),T(ra,ra.current)}function Bu(){Kt=Fn.current,j(ra),j(Fn)}var lt=f(null),pt=null;function ul(e){var t=e.alternate;T(Se,Se.current&1),T(lt,e),pt===null&&(t===null||ra.current!==null||t.memoizedState!==null)&&(pt=e)}function Gu(e){T(Se,Se.current),T(lt,e),pt===null&&(pt=e)}function Do(e){e.tag===22?(T(Se,Se.current),T(lt,e),pt===null&&(pt=e)):cl()}function cl(){T(Se,Se.current),T(lt,lt.current)}function at(e){j(lt),pt===e&&(pt=null),j(Se)}var Se=f(0);function In(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||kc(l)||Kc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,Z=null,se=null,Ee=null,Pn=!1,fa=!1,Yl=!1,ei=0,$a=0,da=null,Ym=0;function be(){throw Error(m(321))}function Xu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!et(e[l],t[l]))return!1;return!0}function Qu(e,t,l,a,n,i){return Bt=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?gr:ac,Yl=!1,i=l(a,n),Yl=!1,fa&&(i=Uo(t,l,a,n)),Co(e),i}function Co(e){y.H=Pa;var t=se!==null&&se.next!==null;if(Bt=0,Ee=se=Z=null,Pn=!1,$a=0,da=null,t)throw Error(m(300));e===null||Te||(e=e.dependencies,e!==null&&Ln(e)&&(Te=!0))}function Uo(e,t,l,a){Z=e;var n=0;do{if(fa&&(da=null),$a=0,fa=!1,25<=n)throw Error(m(301));if(n+=1,Ee=se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=pr,i=t(l,a)}while(fa);return i}function qm(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Fa(t):t,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(Z.flags|=1024),t}function Zu(){var e=ei!==0;return ei=0,e}function Lu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Vu(e){if(Pn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pn=!1}Bt=0,Ee=se=Z=null,fa=!1,$a=ei=0,da=null}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?Z.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ze(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=Ee===null?Z.memoizedState:Ee.next;if(t!==null)Ee=t,se=e;else{if(e===null)throw Z.alternate===null?Error(m(467)):Error(m(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Ee===null?Z.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(e){var t=$a;return $a+=1,da===null&&(da=[]),e=Ao(da,e,t),t=Z,(Ee===null?t.memoizedState:Ee.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?gr:ac),e}function li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fa(e);if(e.$$typeof===Ye)return Ue(e)}throw Error(m(438,String(e)))}function ku(e){var t=null,l=Z.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Z.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ti(),Z.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Xl;return t.index++,l}function Gt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=ze();return Ku(t,se,e)}function Ku(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,o=null,g=t,v=!1;do{var z=g.lane&-536870913;if(z!==g.lane?($&z)===z:(Bt&z)===z){var p=g.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),z===ua&&(v=!0);else if((Bt&p)===p){g=g.next,p===ua&&(v=!0);continue}else z={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(s=o=z,u=i):o=o.next=z,Z.lanes|=p,rl|=p;z=g.action,Yl&&l(i,z),i=g.hasEagerState?g.eagerState:l(i,z)}else p={lane:z,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(s=o=p,u=i):o=o.next=p,Z.lanes|=z,rl|=z;g=g.next}while(g!==null&&g!==t);if(o===null?u=i:o.next=s,!et(i,e.memoizedState)&&(Te=!0,v&&(l=ca,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ju(e){var t=ze(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);et(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Ho(e,t,l){var a=Z,n=ze(),i=P;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=t();var u=!et((se||n).memoizedState,l);if(u&&(n.memoizedState=l,Te=!0),n=n.queue,Fu(qo.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Ee!==null&&Ee.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Yo.bind(null,a,n,l,t),null),de===null)throw Error(m(349));i||(Bt&127)!==0||Ro(a,t,l)}return l}function Ro(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Z.updateQueue,t===null?(t=ti(),Z.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Yo(e,t,l,a){t.value=l,t.getSnapshot=a,Bo(t)&&Go(e)}function qo(e,t,l){return l(function(){Bo(t)&&Go(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!et(e,l)}catch{return!0}}function Go(e){var t=Ol(e,2);t!==null&&$e(t,e,2)}function Wu(e){var t=Ge();if(typeof e=="function"){var l=e;if(e=l(),Yl){$t(!0);try{l()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function Xo(e,t,l,a){return e.baseState=l,Ku(e,se,typeof a=="function"?a:Gt)}function Bm(e,t,l,a,n){if(ui(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};y.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Qo(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Qo(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=y.T,u={};y.T=u;try{var s=l(n,a),o=y.S;o!==null&&o(u,s),Zo(e,t,s)}catch(g){$u(e,t,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),y.T=i}}else try{i=l(n,a),Zo(e,t,i)}catch(g){$u(e,t,g)}}function Zo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Lo(e,t,a)},function(a){return $u(e,t,a)}):Lo(e,t,l)}function Lo(e,t,l){t.status="fulfilled",t.value=l,Vo(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Qo(e,l)))}function $u(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Vo(t),t=t.next;while(t!==a)}e.action=null}function Vo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ko(e,t){return t}function Ko(e,t){if(P){var l=de.formState;if(l!==null){e:{var a=Z;if(P){if(me){t:{for(var n=me,i=gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=bt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){me=bt(n.nextSibling),a=n.data==="F!";break e}}tl(a)}a=!1}a&&(t=l[0])}}return l=Ge(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},l.queue=a,l=dr.bind(null,Z,a),a.dispatch=l,a=Wu(!1),i=lc.bind(null,Z,!1,a.queue),a=Ge(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Bm.bind(null,Z,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Jo(e){var t=ze();return Wo(t,se,e)}function Wo(e,t,l){if(t=Ku(e,t,ko)[0],e=ai(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fa(t)}catch(u){throw u===sa?Kn:u}else a=t;t=ze();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(Z.flags|=2048,ma(9,{destroy:void 0},Gm.bind(null,n,l),null)),[a,i,e]}function Gm(e,t){e.action=t}function $o(e){var t=ze(),l=se;if(l!==null)return Wo(t,l,e);ze(),t=t.memoizedState,l=ze();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ma(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Z.updateQueue,t===null&&(t=ti(),Z.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Fo(){return ze().memoizedState}function ni(e,t,l,a){var n=Ge();Z.flags|=e,n.memoizedState=ma(1|t,{destroy:void 0},l,a===void 0?null:a)}function ii(e,t,l,a){var n=ze();a=a===void 0?null:a;var i=n.memoizedState.inst;se!==null&&a!==null&&Xu(a,se.memoizedState.deps)?n.memoizedState=ma(t,i,l,a):(Z.flags|=e,n.memoizedState=ma(1|t,i,l,a))}function Io(e,t){ni(8390656,8,e,t)}function Fu(e,t){ii(2048,8,e,t)}function Xm(e){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=ti(),Z.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Po(e){var t=ze().memoizedState;return Xm({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function er(e,t){return ii(4,2,e,t)}function tr(e,t){return ii(4,4,e,t)}function lr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,l){l=l!=null?l.concat([e]):null,ii(4,4,lr.bind(null,t,e),l)}function Iu(){}function nr(e,t){var l=ze();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Xu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ir(e,t){var l=ze();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Xu(t,a[1]))return a[0];if(a=e(),Yl){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a}function Pu(e,t,l){return l===void 0||(Bt&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=cf(),Z.lanes|=e,rl|=e,l)}function ur(e,t,l,a){return et(l,t)?l:ra.current!==null?(e=Pu(e,l,a),et(e,t)||(Te=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&($&261930)===0?(Te=!0,e.memoizedState=l):(e=cf(),Z.lanes|=e,rl|=e,t)}function cr(e,t,l,a,n){var i=E.p;E.p=i!==0&&8>i?i:8;var u=y.T,s={};y.T=s,lc(e,!1,t,l);try{var o=n(),g=y.S;if(g!==null&&g(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=Rm(o,a);Ia(e,t,v,ut(e))}else Ia(e,t,a,ut(e))}catch(z){Ia(e,t,{then:function(){},status:"rejected",reason:z},ut())}finally{E.p=i,u!==null&&s.types!==null&&(u.types=s.types),y.T=u}}function Qm(){}function ec(e,t,l,a){if(e.tag!==5)throw Error(m(476));var n=sr(e).queue;cr(e,n,t,Y,l===null?Qm:function(){return or(e),l(a)})}function sr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function or(e){var t=sr(e);t.next===null&&(t=e.alternate.memoizedState),Ia(e,t.next.queue,{},ut())}function tc(){return Ue(pn)}function rr(){return ze().memoizedState}function fr(){return ze().memoizedState}function Zm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ut();e=nl(l);var a=il(t,e,l);a!==null&&($e(a,t,l),Ka(a,t,l)),t={cache:_u()},e.payload=t;return}t=t.return}}function Lm(e,t,l){var a=ut();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ui(e)?mr(t,l):(l=yu(e,t,l,a),l!==null&&($e(l,e,a),hr(l,t,a)))}function dr(e,t,l){var a=ut();Ia(e,t,l,a)}function Ia(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ui(e))mr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,l);if(n.hasEagerState=!0,n.eagerState=s,et(s,u))return Gn(e,t,n,0),de===null&&Bn(),!1}catch{}finally{}if(l=yu(e,t,n,a),l!==null)return $e(l,e,a),hr(l,t,a),!0}return!1}function lc(e,t,l,a){if(a={lane:2,revertLane:Uc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ui(e)){if(t)throw Error(m(479))}else t=yu(e,l,a,2),t!==null&&$e(t,e,2)}function ui(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function mr(e,t){fa=Pn=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function hr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,vs(e,l)}}var Pa={readContext:Ue,use:li,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};Pa.useEffectEvent=be;var gr={readContext:Ue,use:li,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Io,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ni(4194308,4,lr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var l=Ge();t=t===void 0?null:t;var a=e();if(Yl){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ge();if(l!==void 0){var n=l(t);if(Yl){$t(!0);try{l(t)}finally{$t(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Lm.bind(null,Z,e),[a.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:function(e){e=Wu(e);var t=e.queue,l=dr.bind(null,Z,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Iu,useDeferredValue:function(e,t){var l=Ge();return Pu(l,e,t)},useTransition:function(){var e=Wu(!1);return e=cr.bind(null,Z,e.queue,!0,!1),Ge().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Z,n=Ge();if(P){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),de===null)throw Error(m(349));($&127)!==0||Ro(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Io(qo.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},Yo.bind(null,a,i,l,t),null),l},useId:function(){var e=Ge(),t=de.identifierPrefix;if(P){var l=Ot,a=Tt;l=(a&~(1<<32-Pe(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ei++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Ym++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:tc,useFormState:Ko,useActionState:Ko,useOptimistic:function(e){var t=Ge();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=lc.bind(null,Z,!0,l),l.dispatch=t,[e,t]},useMemoCache:ku,useCacheRefresh:function(){return Ge().memoizedState=Zm.bind(null,Z)},useEffectEvent:function(e){var t=Ge(),l={impl:e};return t.memoizedState=l,function(){if((le&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},ac={readContext:Ue,use:li,useCallback:nr,useContext:Ue,useEffect:Fu,useImperativeHandle:ar,useInsertionEffect:er,useLayoutEffect:tr,useMemo:ir,useReducer:ai,useRef:Fo,useState:function(){return ai(Gt)},useDebugValue:Iu,useDeferredValue:function(e,t){var l=ze();return ur(l,se.memoizedState,e,t)},useTransition:function(){var e=ai(Gt)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Ho,useId:rr,useHostTransitionStatus:tc,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){var l=ze();return Xo(l,se,e,t)},useMemoCache:ku,useCacheRefresh:fr};ac.useEffectEvent=Po;var pr={readContext:Ue,use:li,useCallback:nr,useContext:Ue,useEffect:Fu,useImperativeHandle:ar,useInsertionEffect:er,useLayoutEffect:tr,useMemo:ir,useReducer:Ju,useRef:Fo,useState:function(){return Ju(Gt)},useDebugValue:Iu,useDeferredValue:function(e,t){var l=ze();return se===null?Pu(l,e,t):ur(l,se.memoizedState,e,t)},useTransition:function(){var e=Ju(Gt)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Ho,useId:rr,useHostTransitionStatus:tc,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var l=ze();return se!==null?Xo(l,se,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:ku,useCacheRefresh:fr};pr.useEffectEvent=Po;function nc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:C({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ic={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ut(),n=nl(a);n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&($e(t,e,a),Ka(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ut(),n=nl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&($e(t,e,a),Ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ut(),a=nl(l);a.tag=2,t!=null&&(a.callback=t),t=il(e,a,l),t!==null&&($e(t,e,l),Ka(t,e,l))}};function br(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ba(l,a)||!Ba(n,i):!0}function vr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&ic.enqueueReplaceState(t,t.state,null)}function ql(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=C({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function yr(e){qn(e)}function xr(e){console.error(e)}function Sr(e){qn(e)}function ci(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function zr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,l){return l=nl(l),l.tag=3,l.payload={element:null},l.callback=function(){ci(e,t)},l}function jr(e){return e=nl(e),e.tag=3,e}function Ar(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){zr(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){zr(t,l,a),typeof n!="function"&&(fl===null?fl=new Set([this]):fl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Vm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ia(t,l,n,!0),l=lt.current,l!==null){switch(l.tag){case 31:case 13:return pt===null?yi():l.alternate===null&&ve===0&&(ve=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Jn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),wc(e,a,n)),!1;case 22:return l.flags|=65536,a===Jn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),wc(e,a,n)),!1}throw Error(m(435,l.tag))}return wc(e,a,n),yi(),!1}if(P)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Nu&&(e=Error(m(422),{cause:a}),Qa(dt(e,l)))):(a!==Nu&&(t=Error(m(423),{cause:a}),Qa(dt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=dt(a,l),n=uc(e.stateNode,a,n),Ru(e,n),ve!==4&&(ve=2)),!1;var i=Error(m(520),{cause:a});if(i=dt(i,l),sn===null?sn=[i]:sn.push(i),ve!==4&&(ve=2),t===null)return!0;a=dt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=uc(l.stateNode,a,e),Ru(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fl===null||!fl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=jr(n),Ar(n,e,l,a),Ru(l,n),!1}l=l.return}while(l!==null);return!1}var cc=Error(m(461)),Te=!1;function He(e,t,l,a){t.child=e===null?Oo(t,null,l,a):Rl(t,e.child,l,a)}function Nr(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Dl(t),a=Qu(e,t,l,u,i,n),s=Zu(),e!==null&&!Te?(Lu(e,t,n),Xt(e,t,n)):(P&&s&&ju(t),t.flags|=1,He(e,t,a,n),t.child)}function Er(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!xu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Tr(e,t,i,a,n)):(e=Qn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!gc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ba,l(u,a)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=Ht(i,a),e.ref=t.ref,e.return=t,t.child=e}function Tr(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ba(i,a)&&e.ref===t.ref)if(Te=!1,t.pendingProps=a=i,gc(e,n))(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return sc(e,t,l,a,n)}function Or(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Mr(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kn(t,i!==null?i.cachePool:null),i!==null?wo(t,i):qu(),Do(t);else return a=t.lanes=536870912,Mr(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(kn(t,i.cachePool),wo(t,i),cl(),t.memoizedState=null):(e!==null&&kn(t,null),qu(),cl());return He(e,t,n,l),t.child}function en(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mr(e,t,l,a,n){var i=Du();return i=i===null?null:{parent:Ne._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&kn(t,null),qu(),Do(t),e!==null&&ia(e,t,a,!0),t.childLanes=n,null}function si(e,t){return t=ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _r(e,t,l){return Rl(t,e.child,null,l),e=si(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function km(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(P){if(a.mode==="hidden")return e=si(t,a),t.lanes=536870912,en(null,e);if(Gu(t),(e=me)?(e=Zf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Tt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=mo(e),l.return=t,t.child=l,Ce=t,me=null)):e=null,e===null)throw tl(t);return t.lanes=536870912,null}return si(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Gu(t),n)if(t.flags&256)t.flags&=-257,t=_r(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Te||ia(e,t,l,!1),n=(l&e.childLanes)!==0,Te||n){if(a=de,a!==null&&(u=ys(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ol(e,u),$e(a,e,u),cc;yi(),t=_r(e,t,l)}else e=i.treeContext,me=bt(u.nextSibling),Ce=t,P=!0,el=null,gt=!1,e!==null&&po(t,e),t=si(t,a),t.flags|=4096;return t}return e=Ht(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function sc(e,t,l,a,n){return Dl(t),l=Qu(e,t,l,a,void 0,n),a=Zu(),e!==null&&!Te?(Lu(e,t,n),Xt(e,t,n)):(P&&a&&ju(t),t.flags|=1,He(e,t,l,n),t.child)}function wr(e,t,l,a,n,i){return Dl(t),t.updateQueue=null,l=Uo(t,a,l,n),Co(e),a=Zu(),e!==null&&!Te?(Lu(e,t,i),Xt(e,t,i)):(P&&a&&ju(t),t.flags|=1,He(e,t,l,i),t.child)}function Dr(e,t,l,a,n){if(Dl(t),t.stateNode===null){var i=ta,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ue(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ic,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Uu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ue(u):ta,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(nc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ic.enqueueReplaceState(i,i.state,null),Wa(t,a,i,n),Ja(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,o=ql(l,s);i.props=o;var g=i.context,v=l.contextType;u=ta,typeof v=="object"&&v!==null&&(u=Ue(v));var z=l.getDerivedStateFromProps;v=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||g!==u)&&vr(t,i,a,u),al=!1;var p=t.memoizedState;i.state=p,Wa(t,a,i,n),Ja(),g=t.memoizedState,s||p!==g||al?(typeof z=="function"&&(nc(t,l,z,a),g=t.memoizedState),(o=al||br(t,l,o,a,p,g,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Hu(e,t),u=t.memoizedProps,v=ql(l,u),i.props=v,z=t.pendingProps,p=i.context,g=l.contextType,o=ta,typeof g=="object"&&g!==null&&(o=Ue(g)),s=l.getDerivedStateFromProps,(g=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||p!==o)&&vr(t,i,a,o),al=!1,p=t.memoizedState,i.state=p,Wa(t,a,i,n),Ja();var b=t.memoizedState;u!==z||p!==b||al||e!==null&&e.dependencies!==null&&Ln(e.dependencies)?(typeof s=="function"&&(nc(t,l,s,a),b=t.memoizedState),(v=al||br(t,l,v,a,p,b,o)||e!==null&&e.dependencies!==null&&Ln(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=o,a=v):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,oi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Rl(t,e.child,null,n),t.child=Rl(t,null,l,n)):He(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Xt(e,t,n),e}function Cr(e,t,l,a){return _l(),t.flags|=256,He(e,t,l,a),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:zo()}}function fc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=it),e}function Ur(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(P){if(n?ul(t):cl(),(e=me)?(e=Zf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Tt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=mo(e),l.return=t,t.child=l,Ce=t,me=null)):e=null,e===null)throw tl(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(cl(),n=t.mode,s=ri({mode:"hidden",children:s},n),a=Ml(a,n,l,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=rc(l),a.childLanes=fc(e,u,l),t.memoizedState=oc,en(null,a)):(ul(t),dc(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(ul(t),t.flags&=-257,t=mc(e,t,l)):t.memoizedState!==null?(cl(),t.child=e.child,t.flags|=128,t=null):(cl(),s=a.fallback,n=t.mode,a=ri({mode:"visible",children:a.children},n),s=Ml(s,n,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Rl(t,e.child,null,l),a=t.child,a.memoizedState=rc(l),a.childLanes=fc(e,u,l),t.memoizedState=oc,t=en(null,a));else if(ul(t),Kc(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var g=u.dgst;u=g,a=Error(m(419)),a.stack="",a.digest=u,Qa({value:a,source:null,stack:null}),t=mc(e,t,l)}else if(Te||ia(e,t,l,!1),u=(l&e.childLanes)!==0,Te||u){if(u=de,u!==null&&(a=ys(u,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Ol(e,a),$e(u,e,a),cc;kc(s)||yi(),t=mc(e,t,l)}else kc(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,me=bt(s.nextSibling),Ce=t,P=!0,el=null,gt=!1,e!==null&&po(t,e),t=dc(t,a.children),t.flags|=4096);return t}return n?(cl(),s=a.fallback,n=t.mode,o=e.child,g=o.sibling,a=Ht(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,g!==null?s=Ht(g,s):(s=Ml(s,n,l,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,en(null,a),a=t.child,s=e.child.memoizedState,s===null?s=rc(l):(n=s.cachePool,n!==null?(o=Ne._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=zo(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=fc(e,u,l),t.memoizedState=oc,en(e.child,a)):(ul(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function dc(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=tt(22,e,null,t),e.lanes=0,e}function mc(e,t,l){return Rl(t,e.child,null,l),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ou(e.return,t,l)}function hc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Rr(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Se.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,T(Se,u),He(e,t,a,l),a=P?Xa:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hr(e,l,t);else if(e.tag===19)Hr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&In(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),hc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&In(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}hc(t,!0,l,null,i,a);break;case"together":hc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Xt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),rl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ia(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ln(e)))}function Km(e,t,l){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),ll(t,Ne,e.memoizedState.cache),_l();break;case 27:case 5:Ea(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:ll(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Ur(e,t,l):(ul(t),e=Xt(e,t,l),e!==null?e.sibling:null);ul(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ia(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Rr(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),T(Se,Se.current),a)break;return null;case 22:return t.lanes=0,Or(e,t,l,t.pendingProps);case 24:ll(t,Ne,e.memoizedState.cache)}return Xt(e,t,l)}function Yr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Te=!0;else{if(!gc(e,l)&&(t.flags&128)===0)return Te=!1,Km(e,t,l);Te=(e.flags&131072)!==0}else Te=!1,P&&(t.flags&1048576)!==0&&go(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ul(t.elementType),t.type=e,typeof e=="function")xu(e)?(a=ql(e,a),t.tag=1,t=Dr(null,t,e,a,l)):(t.tag=0,t=sc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===st){t.tag=11,t=Nr(null,t,e,a,l);break e}else if(n===I){t.tag=14,t=Er(null,t,e,a,l);break e}}throw t=wt(e)||e,Error(m(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ql(a,t.pendingProps),Dr(e,t,a,n,l);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Hu(e,t),Wa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,ll(t,Ne,a),a!==i.cache&&Mu(t,[Ne],l,!0),Ja(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Cr(e,t,a,l);break e}else if(a!==n){n=dt(Error(m(424)),t),Qa(n),t=Cr(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(me=bt(e.firstChild),Ce=t,P=!0,el=null,gt=!0,l=Oo(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(_l(),a===n){t=Xt(e,t,l);break e}He(e,t,a,l)}t=t.child}return t;case 26:return oi(e,t),e===null?(l=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=l:P||(l=t.type,e=t.pendingProps,a=Ei(K.current).createElement(l),a[De]=t,a[Le]=e,Re(a,l,e),_e(a),t.stateNode=a):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ea(t),e===null&&P&&(a=t.stateNode=kf(t.type,t.pendingProps,K.current),Ce=t,gt=!0,n=me,gl(t.type)?(Jc=n,me=bt(a.firstChild)):me=n),He(e,t,t.pendingProps.children,l),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((n=a=me)&&(a=j0(a,t.type,t.pendingProps,gt),a!==null?(t.stateNode=a,Ce=t,me=bt(a.firstChild),gt=!1,n=!0):n=!1),n||tl(t)),Ea(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Zc(n,i)?a=null:u!==null&&Zc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Qu(e,t,qm,null,null,l),pn._currentValue=n),oi(e,t),He(e,t,a,l),t.child;case 6:return e===null&&P&&((e=l=me)&&(l=A0(l,t.pendingProps,gt),l!==null?(t.stateNode=l,Ce=t,me=null,e=!0):e=!1),e||tl(t)),null;case 13:return Ur(e,t,l);case 4:return Be(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Rl(t,null,a,l):He(e,t,a,l),t.child;case 11:return Nr(e,t,t.type,t.pendingProps,l);case 7:return He(e,t,t.pendingProps,l),t.child;case 8:return He(e,t,t.pendingProps.children,l),t.child;case 12:return He(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ll(t,t.type,a.value),He(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Dl(t),n=Ue(n),a=a(n),t.flags|=1,He(e,t,a,l),t.child;case 14:return Er(e,t,t.type,t.pendingProps,l);case 15:return Tr(e,t,t.type,t.pendingProps,l);case 19:return Rr(e,t,l);case 31:return km(e,t,l);case 22:return Or(e,t,l,t.pendingProps);case 24:return Dl(t),a=Ue(Ne),e===null?(n=Du(),n===null&&(n=de,i=_u(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Uu(t),ll(t,Ne,n)):((e.lanes&l)!==0&&(Hu(e,t),Wa(t,null,null,l),Ja()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ll(t,Ne,a)):(a=i.cache,ll(t,Ne,a),a!==n.cache&&Mu(t,[Ne],l,!0))),He(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Qt(e){e.flags|=4}function pc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ff())e.flags|=8192;else throw Hl=Jn,Cu}else e.flags&=-16777217}function qr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ed(t))if(ff())e.flags|=8192;else throw Hl=Jn,Cu}function fi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ps():536870912,e.lanes|=t,ba|=t)}function tn(e,t){if(!P)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Jm(e,t,l){var a=t.pendingProps;switch(Au(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Ne),xe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(na(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Eu())),he(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Qt(t),i!==null?(he(t),qr(t,i)):(he(t),pc(t,n,null,a,l))):i?i!==e.memoizedState?(Qt(t),he(t),qr(t,i)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Qt(t),he(t),pc(t,n,e,a,l)),null;case 27:if(zn(t),l=K.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return he(t),null}e=w.current,na(t)?bo(t):(e=kf(n,a,l),t.stateNode=e,Qt(t))}return he(t),null;case 5:if(zn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return he(t),null}if(i=w.current,na(t))bo(t);else{var u=Ei(K.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[De]=t,i[Le]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Re(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Qt(t)}}return he(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=K.current,na(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Ce,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[De]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Hf(e.nodeValue,l)),e||tl(t,!0)}else e=Ei(e).createTextNode(a),e[De]=t,t.stateNode=e}return he(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=na(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[De]=t}else _l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else l=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(m(558))}return he(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=na(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[De]=t}else _l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),n=!1}else n=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),fi(t,t.updateQueue),he(t),null);case 4:return xe(),e===null&&qc(t.stateNode.containerInfo),he(t),null;case 10:return qt(t.type),he(t),null;case 19:if(j(Se),a=t.memoizedState,a===null)return he(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)tn(a,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=In(e),i!==null){for(t.flags|=128,tn(a,!1),e=i.updateQueue,t.updateQueue=e,fi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)fo(l,e),l=l.sibling;return T(Se,Se.current&1|2),P&&Rt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Fe()>pi&&(t.flags|=128,n=!0,tn(a,!1),t.lanes=4194304)}else{if(!n)if(e=In(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,fi(t,e),tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!P)return he(t),null}else 2*Fe()-a.renderingStartTime>pi&&l!==536870912&&(t.flags|=128,n=!0,tn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Fe(),e.sibling=null,l=Se.current,T(Se,n?l&1|2:l&1),P&&Rt(t,a.treeForkCount),e):(he(t),null);case 22:case 23:return at(t),Bu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),l=t.updateQueue,l!==null&&fi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&j(Cl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(Ne),he(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Wm(e,t){switch(Au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Ne),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(m(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Se),null;case 4:return xe(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Bu(),e!==null&&j(Cl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Ne),null;case 25:return null;default:return null}}function Br(e,t){switch(Au(t),t.tag){case 3:qt(Ne),xe();break;case 26:case 27:case 5:zn(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:j(Se);break;case 10:qt(t.type);break;case 22:case 23:at(t),Bu(),e!==null&&j(Cl);break;case 24:qt(Ne)}}function ln(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(s){ie(t,t.return,s)}}function sl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var o=l,g=s;try{g()}catch(v){ie(n,o,v)}}}a=a.next}while(a!==i)}}catch(v){ie(t,t.return,v)}}function Gr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{_o(t,l)}catch(a){ie(e,e.return,a)}}}function Xr(e,t,l){l.props=ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ie(e,t,a)}}function an(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){ie(e,t,n)}}function Mt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ie(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ie(e,t,n)}else l.current=null}function Qr(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ie(e,e.return,n)}}function bc(e,t,l){try{var a=e.stateNode;b0(a,e.type,l,t),a[Le]=t}catch(n){ie(e,e.return,n)}}function Zr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gl(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ct));else if(a!==4&&(a===27&&gl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(yc(e,t,l),e=e.sibling;e!==null;)yc(e,t,l),e=e.sibling}function di(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&gl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(di(e,t,l),e=e.sibling;e!==null;)di(e,t,l),e=e.sibling}function Lr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Re(t,a,l),t[De]=e,t[Le]=l}catch(i){ie(e,e.return,i)}}var Zt=!1,Oe=!1,xc=!1,Vr=typeof WeakSet=="function"?WeakSet:Set,we=null;function $m(e,t){if(e=e.containerInfo,Xc=Ci,e=lo(e),mu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,s=-1,o=-1,g=0,v=0,z=e,p=null;t:for(;;){for(var b;z!==l||n!==0&&z.nodeType!==3||(s=u+n),z!==i||a!==0&&z.nodeType!==3||(o=u+a),z.nodeType===3&&(u+=z.nodeValue.length),(b=z.firstChild)!==null;)p=z,z=b;for(;;){if(z===e)break t;if(p===l&&++g===n&&(s=u),p===i&&++v===a&&(o=u),(b=z.nextSibling)!==null)break;z=p,p=z.parentNode}z=b}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qc={focusedElem:e,selectionRange:l},Ci=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var _=ql(l.type,n);e=a.getSnapshotBeforeUpdate(_,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(H){ie(l,l.return,H)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Vc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function kr(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Vt(e,l),a&4&&ln(5,l);break;case 1:if(Vt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){ie(l,l.return,u)}else{var n=ql(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ie(l,l.return,u)}}a&64&&Gr(l),a&512&&an(l,l.return);break;case 3:if(Vt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{_o(e,t)}catch(u){ie(l,l.return,u)}}break;case 27:t===null&&a&4&&Lr(l);case 26:case 5:Vt(e,l),t===null&&a&4&&Qr(l),a&512&&an(l,l.return);break;case 12:Vt(e,l);break;case 31:Vt(e,l),a&4&&Wr(e,l);break;case 13:Vt(e,l),a&4&&$r(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=i0.bind(null,l),N0(e,l))));break;case 22:if(a=l.memoizedState!==null||Zt,!a){t=t!==null&&t.memoizedState!==null||Oe,n=Zt;var i=Oe;Zt=a,(Oe=t)&&!i?kt(e,l,(l.subtreeFlags&8772)!==0):Vt(e,l),Zt=n,Oe=i}break;case 30:break;default:Vt(e,l)}}function Kr(e){var t=e.alternate;t!==null&&(e.alternate=null,Kr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,ke=!1;function Lt(e,t,l){for(l=l.child;l!==null;)Jr(e,t,l),l=l.sibling}function Jr(e,t,l){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Ta,l)}catch{}switch(l.tag){case 26:Oe||Mt(l,t),Lt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Oe||Mt(l,t);var a=ge,n=ke;gl(l.type)&&(ge=l.stateNode,ke=!1),Lt(e,t,l),mn(l.stateNode),ge=a,ke=n;break;case 5:Oe||Mt(l,t);case 6:if(a=ge,n=ke,ge=null,Lt(e,t,l),ge=a,ke=n,ge!==null)if(ke)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(l.stateNode)}catch(i){ie(l,t,i)}else try{ge.removeChild(l.stateNode)}catch(i){ie(l,t,i)}break;case 18:ge!==null&&(ke?(e=ge,Xf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Na(e)):Xf(ge,l.stateNode));break;case 4:a=ge,n=ke,ge=l.stateNode.containerInfo,ke=!0,Lt(e,t,l),ge=a,ke=n;break;case 0:case 11:case 14:case 15:sl(2,l,t),Oe||sl(4,l,t),Lt(e,t,l);break;case 1:Oe||(Mt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Xr(l,t,a)),Lt(e,t,l);break;case 21:Lt(e,t,l);break;case 22:Oe=(a=Oe)||l.memoizedState!==null,Lt(e,t,l),Oe=a;break;default:Lt(e,t,l)}}function Wr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Na(e)}catch(l){ie(t,t.return,l)}}}function $r(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(l){ie(t,t.return,l)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vr),t;default:throw Error(m(435,e.tag))}}function mi(e,t){var l=Fm(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=u0.bind(null,e,a);a.then(n,n)}})}function Ke(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(gl(s.type)){ge=s.stateNode,ke=!1;break e}break;case 5:ge=s.stateNode,ke=!1;break e;case 3:case 4:ge=s.stateNode.containerInfo,ke=!0;break e}s=s.return}if(ge===null)throw Error(m(160));Jr(i,u,n),ge=null,ke=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fr(t,e),t=t.sibling}var zt=null;function Fr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ke(t,e),Je(e),a&4&&(sl(3,e,e.return),ln(3,e),sl(5,e,e.return));break;case 1:Ke(t,e),Je(e),a&512&&(Oe||l===null||Mt(l,l.return)),a&64&&Zt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=zt;if(Ke(t,e),Je(e),a&512&&(Oe||l===null||Mt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_a]||i[De]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Re(i,a,l),i[De]=e,_e(i),a=i;break e;case"link":var u=If("link","href",n).get(a+(l.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(a),Re(i,a,l),n.head.appendChild(i);break;case"meta":if(u=If("meta","content",n).get(a+(l.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(s,1);break t}}i=n.createElement(a),Re(i,a,l),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[De]=e,_e(i),a=i}e.stateNode=a}else Pf(n,e.type,e.stateNode);else e.stateNode=Ff(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Pf(n,e.type,e.stateNode):Ff(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&bc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ke(t,e),Je(e),a&512&&(Oe||l===null||Mt(l,l.return)),l!==null&&a&4&&bc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ke(t,e),Je(e),a&512&&(Oe||l===null||Mt(l,l.return)),e.flags&32){n=e.stateNode;try{Jl(n,"")}catch(_){ie(e,e.return,_)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,bc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(xc=!0);break;case 6:if(Ke(t,e),Je(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(_){ie(e,e.return,_)}}break;case 3:if(Mi=null,n=zt,zt=Ti(t.containerInfo),Ke(t,e),zt=n,Je(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(_){ie(e,e.return,_)}xc&&(xc=!1,Ir(e));break;case 4:a=zt,zt=Ti(e.stateNode.containerInfo),Ke(t,e),Je(e),zt=a;break;case 12:Ke(t,e),Je(e);break;case 31:Ke(t,e),Je(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 13:Ke(t,e),Je(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gi=Fe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 22:n=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,g=Zt,v=Oe;if(Zt=g||n,Oe=v||o,Ke(t,e),Oe=v,Zt=g,Je(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||o||Zt||Oe||Bl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var z=o.memoizedProps.style,p=z!=null&&z.hasOwnProperty("display")?z.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(_){ie(o,o.return,_)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(_){ie(o,o.return,_)}}}else if(t.tag===18){if(l===null){o=t;try{var b=o.stateNode;n?Qf(b,!0):Qf(o.stateNode,!1)}catch(_){ie(o,o.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,mi(e,l))));break;case 19:Ke(t,e),Je(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 30:break;case 21:break;default:Ke(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Zr(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,i=vc(e);di(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Jl(u,""),l.flags&=-33);var s=vc(e);di(e,s,u);break;case 3:case 4:var o=l.stateNode.containerInfo,g=vc(e);yc(e,g,o);break;default:throw Error(m(161))}}catch(v){ie(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ir(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ir(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kr(e,t.alternate,t),t=t.sibling}function Bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Bl(t);break;case 1:Mt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Xr(t,t.return,l),Bl(t);break;case 27:mn(t.stateNode);case 26:case 5:Mt(t,t.return),Bl(t);break;case 22:t.memoizedState===null&&Bl(t);break;case 30:Bl(t);break;default:Bl(t)}e=e.sibling}}function kt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:kt(n,i,l),ln(4,i);break;case 1:if(kt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ie(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Mo(o[n],s)}catch(g){ie(a,a.return,g)}}l&&u&64&&Gr(i),an(i,i.return);break;case 27:Lr(i);case 26:case 5:kt(n,i,l),l&&a===null&&u&4&&Qr(i),an(i,i.return);break;case 12:kt(n,i,l);break;case 31:kt(n,i,l),l&&u&4&&Wr(n,i);break;case 13:kt(n,i,l),l&&u&4&&$r(n,i);break;case 22:i.memoizedState===null&&kt(n,i,l),an(i,i.return);break;case 30:break;default:kt(n,i,l)}t=t.sibling}}function Sc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function zc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function jt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pr(e,t,l,a),t=t.sibling}function Pr(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,l,a),n&2048&&ln(9,t);break;case 1:jt(e,t,l,a);break;case 3:jt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){jt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ie(t,t.return,o)}}else jt(e,t,l,a);break;case 31:jt(e,t,l,a);break;case 13:jt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?jt(e,t,l,a):nn(e,t):i._visibility&2?jt(e,t,l,a):(i._visibility|=2,ha(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Sc(u,t);break;case 24:jt(e,t,l,a),n&2048&&zc(t.alternate,t);break;default:jt(e,t,l,a)}}function ha(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=l,o=a,g=u.flags;switch(u.tag){case 0:case 11:case 15:ha(i,u,s,o,n),ln(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?ha(i,u,s,o,n):nn(i,u):(v._visibility|=2,ha(i,u,s,o,n)),n&&g&2048&&Sc(u.alternate,u);break;case 24:ha(i,u,s,o,n),n&&g&2048&&zc(u.alternate,u);break;default:ha(i,u,s,o,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:nn(l,a),n&2048&&Sc(a.alternate,a);break;case 24:nn(l,a),n&2048&&zc(a.alternate,a);break;default:nn(l,a)}t=t.sibling}}var un=8192;function ga(e,t,l){if(e.subtreeFlags&un)for(e=e.child;e!==null;)ef(e,t,l),e=e.sibling}function ef(e,t,l){switch(e.tag){case 26:ga(e,t,l),e.flags&un&&e.memoizedState!==null&&Y0(l,zt,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,l);break;case 3:case 4:var a=zt;zt=Ti(e.stateNode.containerInfo),ga(e,t,l),zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=un,un=16777216,ga(e,t,l),un=a):ga(e,t,l));break;default:ga(e,t,l)}}function tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];we=a,af(a,e)}tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lf(e),e=e.sibling}function lf(e){switch(e.tag){case 0:case 11:case 15:cn(e),e.flags&2048&&sl(9,e,e.return);break;case 3:cn(e);break;case 12:cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hi(e)):cn(e);break;default:cn(e)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];we=a,af(a,e)}tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sl(8,t,t.return),hi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,hi(t));break;default:hi(t)}e=e.sibling}}function af(e,t){for(;we!==null;){var l=we;switch(l.tag){case 0:case 11:case 15:sl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,we=a;else e:for(l=e;we!==null;){a=we;var n=a.sibling,i=a.return;if(Kr(a),a===l){we=null;break e}if(n!==null){n.return=i,we=n;break e}we=i}}}var Im={getCacheForType:function(e){var t=Ue(Ne),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ue(Ne).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,le=0,de=null,J=null,$=0,ne=0,nt=null,ol=!1,pa=!1,jc=!1,Kt=0,ve=0,rl=0,Gl=0,Ac=0,it=0,ba=0,sn=null,We=null,Nc=!1,gi=0,nf=0,pi=1/0,bi=null,fl=null,Me=0,dl=null,va=null,Jt=0,Ec=0,Tc=null,uf=null,on=0,Oc=null;function ut(){return(le&2)!==0&&$!==0?$&-$:y.T!==null?Uc():xs()}function cf(){if(it===0)if(($&536870912)===0||P){var e=Nn;Nn<<=1,(Nn&3932160)===0&&(Nn=262144),it=e}else it=536870912;return e=lt.current,e!==null&&(e.flags|=32),it}function $e(e,t,l){(e===de&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(ya(e,0),ml(e,$,it,!1)),Ma(e,l),((le&2)===0||e!==de)&&(e===de&&((le&2)===0&&(Gl|=l),ve===4&&ml(e,$,it,!1)),_t(e))}function sf(e,t,l){if((le&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),n=a?l0(e,t):_c(e,t,!0),i=a;do{if(n===0){pa&&!a&&ml(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!e0(l)){n=_c(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=sn;var o=s.current.memoizedState.isDehydrated;if(o&&(ya(s,u).flags|=256),u=_c(s,u,!1),u!==2){if(jc&&!o){s.errorRecoveryDisabledLanes|=i,Gl|=i,n=4;break e}i=We,We=n,i!==null&&(We===null?We=i:We.push.apply(We,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ya(e,0),ml(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ml(a,t,it,!ol);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=gi+300-Fe(),10<n)){if(ml(a,t,it,!ol),Tn(a,0,!0)!==0)break e;Jt=t,a.timeoutHandle=Bf(of.bind(null,a,l,We,bi,Nc,t,it,Gl,ba,ol,i,"Throttled",-0,0),n);break e}of(a,l,We,bi,Nc,t,it,Gl,ba,ol,i,null,-0,0)}}break}while(!0);_t(e)}function of(e,t,l,a,n,i,u,s,o,g,v,z,p,b){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ct},ef(t,i,z);var _=(i&62914560)===i?gi-Fe():(i&4194048)===i?nf-Fe():0;if(_=q0(z,_),_!==null){Jt=i,e.cancelPendingCommit=_(bf.bind(null,e,t,i,l,a,n,u,s,o,v,z,null,p,b)),ml(e,i,u,!g);return}}bf(e,t,i,l,a,n,u,s,o)}function e0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!et(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ml(e,t,l,a){t&=~Ac,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-Pe(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&bs(e,l,t)}function vi(){return(le&6)===0?(rn(0),!1):!0}function Mc(){if(J!==null){if(ne===0)var e=J.return;else e=J,Yt=wl=null,Vu(e),oa=null,Va=0,e=J;for(;e!==null;)Br(e.alternate,e),e=e.return;J=null}}function ya(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,x0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Jt=0,Mc(),de=e,J=l=Ht(e.current,null),$=t,ne=0,nt=null,ol=!1,pa=Oa(e,t),jc=!1,ba=it=Ac=Gl=rl=ve=0,We=sn=null,Nc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Pe(a),i=1<<n;t|=e[n],a&=~i}return Kt=t,Bn(),l}function rf(e,t){Z=null,y.H=Pa,t===sa||t===Kn?(t=No(),ne=3):t===Cu?(t=No(),ne=4):ne=t===cc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,J===null&&(ve=1,ci(e,dt(t,e.current)))}function ff(){var e=lt.current;return e===null?!0:($&4194048)===$?pt===null:($&62914560)===$||($&536870912)!==0?e===pt:!1}function df(){var e=y.H;return y.H=Pa,e===null?Pa:e}function mf(){var e=y.A;return y.A=Im,e}function yi(){ve=4,ol||($&4194048)!==$&&lt.current!==null||(pa=!0),(rl&134217727)===0&&(Gl&134217727)===0||de===null||ml(de,$,it,!1)}function _c(e,t,l){var a=le;le|=2;var n=df(),i=mf();(de!==e||$!==t)&&(bi=null,ya(e,t)),t=!1;var u=ve;e:do try{if(ne!==0&&J!==null){var s=J,o=nt;switch(ne){case 8:Mc(),u=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var g=ne;if(ne=0,nt=null,xa(e,s,o,g),l&&pa){u=0;break e}break;default:g=ne,ne=0,nt=null,xa(e,s,o,g)}}t0(),u=ve;break}catch(v){rf(e,v)}while(!0);return t&&e.shellSuspendCounter++,Yt=wl=null,le=a,y.H=n,y.A=i,J===null&&(de=null,$=0,Bn()),u}function t0(){for(;J!==null;)hf(J)}function l0(e,t){var l=le;le|=2;var a=df(),n=mf();de!==e||$!==t?(bi=null,pi=Fe()+500,ya(e,t)):pa=Oa(e,t);e:do try{if(ne!==0&&J!==null){t=J;var i=nt;t:switch(ne){case 1:ne=0,nt=null,xa(e,t,i,1);break;case 2:case 9:if(jo(i)){ne=0,nt=null,gf(t);break}t=function(){ne!==2&&ne!==9||de!==e||(ne=7),_t(e)},i.then(t,t);break e;case 3:ne=7;break e;case 4:ne=5;break e;case 7:jo(i)?(ne=0,nt=null,gf(t)):(ne=0,nt=null,xa(e,t,i,7));break;case 5:var u=null;switch(J.tag){case 26:u=J.memoizedState;case 5:case 27:var s=J;if(u?ed(u):s.stateNode.complete){ne=0,nt=null;var o=s.sibling;if(o!==null)J=o;else{var g=s.return;g!==null?(J=g,xi(g)):J=null}break t}}ne=0,nt=null,xa(e,t,i,5);break;case 6:ne=0,nt=null,xa(e,t,i,6);break;case 8:Mc(),ve=6;break e;default:throw Error(m(462))}}a0();break}catch(v){rf(e,v)}while(!0);return Yt=wl=null,y.H=a,y.A=n,le=l,J!==null?0:(de=null,$=0,Bn(),ve)}function a0(){for(;J!==null&&!Ed();)hf(J)}function hf(e){var t=Yr(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?xi(e):J=t}function gf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=wr(l,t,t.pendingProps,t.type,void 0,$);break;case 11:t=wr(l,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:Vu(t);default:Br(l,t),t=J=fo(t,Kt),t=Yr(l,t,Kt)}e.memoizedProps=e.pendingProps,t===null?xi(e):J=t}function xa(e,t,l,a){Yt=wl=null,Vu(t),oa=null,Va=0;var n=t.return;try{if(Vm(e,n,t,l,$)){ve=1,ci(e,dt(l,e.current)),J=null;return}}catch(i){if(n!==null)throw J=n,i;ve=1,ci(e,dt(l,e.current)),J=null;return}t.flags&32768?(P||a===1?e=!0:pa||($&536870912)!==0?e=!1:(ol=e=!0,(a===2||a===9||a===3||a===6)&&(a=lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),pf(t,e)):xi(t)}function xi(e){var t=e;do{if((t.flags&32768)!==0){pf(t,ol);return}e=t.return;var l=Jm(t.alternate,t,Kt);if(l!==null){J=l;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ve===0&&(ve=5)}function pf(e,t){do{var l=Wm(e.alternate,e);if(l!==null){l.flags&=32767,J=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=l}while(e!==null);ve=6,J=null}function bf(e,t,l,a,n,i,u,s,o){e.cancelPendingCommit=null;do Si();while(Me!==0);if((le&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=vu,Rd(e,l,i,u,s,o),e===de&&(J=de=null,$=0),va=t,dl=e,Jt=l,Ec=i,Tc=n,uf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c0(jn,function(){return zf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,n=E.p,E.p=2,u=le,le|=4;try{$m(e,t,l)}finally{le=u,E.p=n,y.T=a}}Me=1,vf(),yf(),xf()}}function vf(){if(Me===1){Me=0;var e=dl,t=va,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null;var a=E.p;E.p=2;var n=le;le|=4;try{Fr(t,e);var i=Qc,u=lo(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&to(s.ownerDocument.documentElement,s)){if(o!==null&&mu(s)){var g=o.start,v=o.end;if(v===void 0&&(v=g),"selectionStart"in s)s.selectionStart=g,s.selectionEnd=Math.min(v,s.value.length);else{var z=s.ownerDocument||document,p=z&&z.defaultView||window;if(p.getSelection){var b=p.getSelection(),_=s.textContent.length,H=Math.min(o.start,_),re=o.end===void 0?H:Math.min(o.end,_);!b.extend&&H>re&&(u=re,re=H,H=u);var d=eo(s,H),r=eo(s,re);if(d&&r&&(b.rangeCount!==1||b.anchorNode!==d.node||b.anchorOffset!==d.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var h=z.createRange();h.setStart(d.node,d.offset),b.removeAllRanges(),H>re?(b.addRange(h),b.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),b.addRange(h))}}}}for(z=[],b=s;b=b.parentNode;)b.nodeType===1&&z.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<z.length;s++){var S=z[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ci=!!Xc,Qc=Xc=null}finally{le=n,E.p=a,y.T=l}}e.current=t,Me=2}}function yf(){if(Me===2){Me=0;var e=dl,t=va,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=y.T,y.T=null;var a=E.p;E.p=2;var n=le;le|=4;try{kr(e,t.alternate,t)}finally{le=n,E.p=a,y.T=l}}Me=3}}function xf(){if(Me===4||Me===3){Me=0,Td();var e=dl,t=va,l=Jt,a=uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Me=5:(Me=0,va=dl=null,Sf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(fl=null),Ji(l),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Ta,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=y.T,n=E.p,E.p=2,y.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{y.T=t,E.p=n}}(Jt&3)!==0&&Si(),_t(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Oc?on++:(on=0,Oc=e):on=0,rn(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function Si(){return vf(),yf(),xf(),zf()}function zf(){if(Me!==5)return!1;var e=dl,t=Ec;Ec=0;var l=Ji(Jt),a=y.T,n=E.p;try{E.p=32>l?32:l,y.T=null,l=Tc,Tc=null;var i=dl,u=Jt;if(Me=0,va=dl=null,Jt=0,(le&6)!==0)throw Error(m(331));var s=le;if(le|=4,lf(i.current),Pr(i,i.current,u,l),le=s,rn(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Ta,i)}catch{}return!0}finally{E.p=n,y.T=a,Sf(e,t)}}function jf(e,t,l){t=dt(l,t),t=uc(e.stateNode,t,2),e=il(e,t,2),e!==null&&(Ma(e,2),_t(e))}function ie(e,t,l){if(e.tag===3)jf(e,e,l);else for(;t!==null;){if(t.tag===3){jf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fl===null||!fl.has(a))){e=dt(l,e),l=jr(2),a=il(t,l,2),a!==null&&(Ar(l,a,t,e),Ma(a,2),_t(a));break}}t=t.return}}function wc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Pm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(jc=!0,n.add(l),e=n0.bind(null,e,t,l),t.then(e,e))}function n0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,de===e&&($&l)===l&&(ve===4||ve===3&&($&62914560)===$&&300>Fe()-gi?(le&2)===0&&ya(e,0):Ac|=l,ba===$&&(ba=0)),_t(e)}function Af(e,t){t===0&&(t=ps()),e=Ol(e,t),e!==null&&(Ma(e,t),_t(e))}function i0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Af(e,l)}function u0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),Af(e,l)}function c0(e,t){return Li(e,t)}var zi=null,Sa=null,Dc=!1,ji=!1,Cc=!1,hl=0;function _t(e){e!==Sa&&e.next===null&&(Sa===null?zi=Sa=e:Sa=Sa.next=e),ji=!0,Dc||(Dc=!0,o0())}function rn(e,t){if(!Cc&&ji){Cc=!0;do for(var l=!1,a=zi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Pe(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Of(a,i))}else i=$,i=Tn(a,a===de?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(l=!0,Of(a,i));a=a.next}while(l);Cc=!1}}function s0(){Nf()}function Nf(){ji=Dc=!1;var e=0;hl!==0&&y0()&&(e=hl);for(var t=Fe(),l=null,a=zi;a!==null;){var n=a.next,i=Ef(a,t);i===0?(a.next=null,l===null?zi=n:l.next=n,n===null&&(Sa=l)):(l=a,(e!==0||(i&3)!==0)&&(ji=!0)),a=n}Me!==0&&Me!==5||rn(e),hl!==0&&(hl=0)}function Ef(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Pe(i),s=1<<u,o=n[u];o===-1?((s&l)===0||(s&a)!==0)&&(n[u]=Hd(s,t)):o<=t&&(e.expiredLanes|=s),i&=~s}if(t=de,l=$,l=Tn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Oa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Vi(a),Ji(l)){case 2:case 8:l=hs;break;case 32:l=jn;break;case 268435456:l=gs;break;default:l=jn}return a=Tf.bind(null,e),l=Li(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Vi(a),e.callbackPriority=2,e.callbackNode=null,2}function Tf(e,t){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Si()&&e.callbackNode!==l)return null;var a=$;return a=Tn(e,e===de?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(sf(e,a,t),Ef(e,Fe()),e.callbackNode!=null&&e.callbackNode===l?Tf.bind(null,e):null)}function Of(e,t){if(Si())return null;sf(e,t,!0)}function o0(){S0(function(){(le&6)!==0?Li(ms,s0):Nf()})}function Uc(){if(hl===0){var e=ua;e===0&&(e=An,An<<=1,(An&261888)===0&&(An=256)),hl=e}return hl}function Mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wn(""+e)}function _f(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function r0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Mf((n[Le]||null).action),u=a.submitter;u&&(t=(t=u[Le]||null)?Mf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Hn("action","action",null,a,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(hl!==0){var o=u?_f(n,u):new FormData(n);ec(l,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?_f(n,u):new FormData(n),ec(l,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Hc=0;Hc<bu.length;Hc++){var Rc=bu[Hc],f0=Rc.toLowerCase(),d0=Rc[0].toUpperCase()+Rc.slice(1);St(f0,"on"+d0)}St(io,"onAnimationEnd"),St(uo,"onAnimationIteration"),St(co,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Om,"onTransitionRun"),St(Mm,"onTransitionStart"),St(_m,"onTransitionCancel"),St(so,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fn));function wf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var s=a[u],o=s.instance,g=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=g;try{i(n)}catch(v){qn(v)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(s=a[u],o=s.instance,g=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=g;try{i(n)}catch(v){qn(v)}n.currentTarget=null,i=o}}}}function W(e,t){var l=t[Wi];l===void 0&&(l=t[Wi]=new Set);var a=e+"__bubble";l.has(a)||(Df(t,e,2,!1),l.add(a))}function Yc(e,t,l){var a=0;t&&(a|=4),Df(l,e,a,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function qc(e){if(!e[Ai]){e[Ai]=!0,js.forEach(function(l){l!=="selectionchange"&&(m0.has(l)||Yc(l,!1,e),Yc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Yc("selectionchange",!1,t))}}function Df(e,t,l,a){switch(cd(t)){case 2:var n=X0;break;case 8:n=Q0;break;default:n=Pc}l=n.bind(null,t,l,e),n=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Bc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Zl(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue e}s=s.parentNode}}a=a.return}Hs(function(){var g=i,v=lu(l),z=[];e:{var p=oo.get(e);if(p!==void 0){var b=Hn,_=e;switch(e){case"keypress":if(Cn(l)===0)break e;case"keydown":case"keyup":b=um;break;case"focusin":_="focus",b=su;break;case"focusout":_="blur",b=su;break;case"beforeblur":case"afterblur":b=su;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=om;break;case io:case uo:case co:b=Fd;break;case so:b=fm;break;case"scroll":case"scrollend":b=kd;break;case"wheel":b=mm;break;case"copy":case"cut":case"paste":b=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Gs;break;case"toggle":case"beforetoggle":b=gm}var H=(t&4)!==0,re=!H&&(e==="scroll"||e==="scrollend"),d=H?p!==null?p+"Capture":null:p;H=[];for(var r=g,h;r!==null;){var S=r;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||d===null||(S=Da(r,d),S!=null&&H.push(dn(r,S,h))),re)break;r=r.return}0<H.length&&(p=new b(p,_,null,l,v),z.push({event:p,listeners:H}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&l!==tu&&(_=l.relatedTarget||l.fromElement)&&(Zl(_)||_[Ql]))break e;if((b||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,b?(_=l.relatedTarget||l.toElement,b=g,_=_?Zl(_):null,_!==null&&(re=R(_),H=_.tag,_!==re||H!==5&&H!==27&&H!==6)&&(_=null)):(b=null,_=g),b!==_)){if(H=qs,S="onMouseLeave",d="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(H=Gs,S="onPointerLeave",d="onPointerEnter",r="pointer"),re=b==null?p:wa(b),h=_==null?p:wa(_),p=new H(S,r+"leave",b,l,v),p.target=re,p.relatedTarget=h,S=null,Zl(v)===g&&(H=new H(d,r+"enter",_,l,v),H.target=h,H.relatedTarget=re,S=H),re=S,b&&_)t:{for(H=h0,d=b,r=_,h=0,S=d;S;S=H(S))h++;S=0;for(var U=r;U;U=H(U))S++;for(;0<h-S;)d=H(d),h--;for(;0<S-h;)r=H(r),S--;for(;h--;){if(d===r||r!==null&&d===r.alternate){H=d;break t}d=H(d),r=H(r)}H=null}else H=null;b!==null&&Cf(z,p,b,H,!1),_!==null&&re!==null&&Cf(z,re,_,H,!0)}}e:{if(p=g?wa(g):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var ee=Js;else if(ks(p))if(Ws)ee=Nm;else{ee=jm;var D=zm}else b=p.nodeName,!b||b.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&eu(g.elementType)&&(ee=Js):ee=Am;if(ee&&(ee=ee(e,g))){Ks(z,ee,l,v);break e}D&&D(e,p,g),e==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&Pi(p,"number",p.value)}switch(D=g?wa(g):window,e){case"focusin":(ks(D)||D.contentEditable==="true")&&(Il=D,hu=g,Ga=null);break;case"focusout":Ga=hu=Il=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,ao(z,l,v);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":ao(z,l,v)}var L;if(ru)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Fl?Ls(e,l)&&(F="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(F="onCompositionStart");F&&(Xs&&l.locale!=="ko"&&(Fl||F!=="onCompositionStart"?F==="onCompositionEnd"&&Fl&&(L=Rs()):(It=v,iu="value"in It?It.value:It.textContent,Fl=!0)),D=Ni(g,F),0<D.length&&(F=new Bs(F,e,null,l,v),z.push({event:F,listeners:D}),L?F.data=L:(L=Vs(l),L!==null&&(F.data=L)))),(L=bm?vm(e,l):ym(e,l))&&(F=Ni(g,"onBeforeInput"),0<F.length&&(D=new Bs("onBeforeInput","beforeinput",null,l,v),z.push({event:D,listeners:F}),D.data=L)),r0(z,e,g,l,v)}wf(z,t)})}function dn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ni(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Da(e,l),n!=null&&a.unshift(dn(e,n,i)),n=Da(e,t),n!=null&&a.push(dn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function h0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cf(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var s=l,o=s.alternate,g=s.stateNode;if(s=s.tag,o!==null&&o===a)break;s!==5&&s!==26&&s!==27||g===null||(o=g,n?(g=Da(l,i),g!=null&&u.unshift(dn(l,g,o))):n||(g=Da(l,i),g!=null&&u.push(dn(l,g,o)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var g0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(g0,`
`).replace(p0,"")}function Hf(e,t){return t=Uf(t),Uf(e)===t}function oe(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Jl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Jl(e,""+a);break;case"className":Mn(e,"class",a);break;case"tabIndex":Mn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(e,l,a);break;case"style":Cs(e,a,i);break;case"data":if(t!=="object"){Mn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=wn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&oe(e,t,"name",n.name,n,null),oe(e,t,"formEncType",n.formEncType,n,null),oe(e,t,"formMethod",n.formMethod,n,null),oe(e,t,"formTarget",n.formTarget,n,null)):(oe(e,t,"encType",n.encType,n,null),oe(e,t,"method",n.method,n,null),oe(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=wn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ct);break;case"onScroll":a!=null&&W("scroll",e);break;case"onScrollEnd":a!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=wn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":W("beforetoggle",e),W("toggle",e),On(e,"popover",a);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":On(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ld.get(l)||l,On(e,l,a))}}function Gc(e,t,l,a,n,i){switch(l){case"style":Cs(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Jl(e,a):(typeof a=="number"||typeof a=="bigint")&&Jl(e,""+a);break;case"onScroll":a!=null&&W("scroll",e);break;case"onScrollEnd":a!=null&&W("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ct);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!As.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Le]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):On(e,l,a)}}}function Re(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:oe(e,t,i,u,l,null)}}n&&oe(e,t,"srcSet",l.srcSet,l,null),a&&oe(e,t,"src",l.src,l,null);return;case"input":W("invalid",e);var s=i=u=n=null,o=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var v=l[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":o=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:oe(e,t,a,v,l,null)}}Ms(e,i,s,o,g,u,n,!1);return;case"select":W("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:oe(e,t,n,s,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Kl(e,!!a,t,!1):l!=null&&Kl(e,!!a,l,!0);return;case"textarea":W("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(m(91));break;default:oe(e,t,u,s,l,null)}ws(e,a,n,i);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:oe(e,t,o,a,l,null)}return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(a=0;a<fn.length;a++)W(fn[a],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:oe(e,t,g,a,l,null)}return;default:if(eu(t)){for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!==void 0&&Gc(e,t,v,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&oe(e,t,s,a,l,null))}function b0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,g=null,v=null;for(b in l){var z=l[b];if(l.hasOwnProperty(b)&&z!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=z;default:a.hasOwnProperty(b)||oe(e,t,b,null,a,z)}}for(var p in a){var b=a[p];if(z=l[p],a.hasOwnProperty(p)&&(b!=null||z!=null))switch(p){case"type":i=b;break;case"name":n=b;break;case"checked":g=b;break;case"defaultChecked":v=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,t));break;default:b!==z&&oe(e,t,p,b,a,z)}}Ii(e,u,s,o,g,v,i,n);return;case"select":b=u=s=p=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:a.hasOwnProperty(i)||oe(e,t,i,null,a,o)}for(n in a)if(i=a[n],o=l[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&oe(e,t,n,i,a,o)}t=s,l=u,a=b,p!=null?Kl(e,!!l,p,!1):!!a!=!!l&&(t!=null?Kl(e,!!l,t,!0):Kl(e,!!l,l?[]:"",!1));return;case"textarea":b=p=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:oe(e,t,s,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&oe(e,t,u,n,a,i)}_s(e,p,b);return;case"option":for(var _ in l)if(p=l[_],l.hasOwnProperty(_)&&p!=null&&!a.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:oe(e,t,_,null,a,p)}for(o in a)if(p=a[o],b=l[o],a.hasOwnProperty(o)&&p!==b&&(p!=null||b!=null))switch(o){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:oe(e,t,o,p,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in l)p=l[H],l.hasOwnProperty(H)&&p!=null&&!a.hasOwnProperty(H)&&oe(e,t,H,null,a,p);for(g in a)if(p=a[g],b=l[g],a.hasOwnProperty(g)&&p!==b&&(p!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,t));break;default:oe(e,t,g,p,a,b)}return;default:if(eu(t)){for(var re in l)p=l[re],l.hasOwnProperty(re)&&p!==void 0&&!a.hasOwnProperty(re)&&Gc(e,t,re,void 0,a,p);for(v in a)p=a[v],b=l[v],!a.hasOwnProperty(v)||p===b||p===void 0&&b===void 0||Gc(e,t,v,p,a,b);return}}for(var d in l)p=l[d],l.hasOwnProperty(d)&&p!=null&&!a.hasOwnProperty(d)&&oe(e,t,d,null,a,p);for(z in a)p=a[z],b=l[z],!a.hasOwnProperty(z)||p===b||p==null&&b==null||oe(e,t,z,p,a,b)}function Rf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Rf(u)){for(u=0,s=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],g=o.startTime;if(g>s)break;var v=o.transferSize,z=o.initiatorType;v&&Rf(z)&&(o=o.responseEnd,u+=v*(o<s?1:(s-g)/(o-g)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xc=null,Qc=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function Yf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lc=null;function y0(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var Bf=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(e){return Gf.resolve(null).then(e).catch(z0)}:Bf;function z0(e){setTimeout(function(){throw e})}function gl(e){return e==="head"}function Xf(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Na(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")mn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,mn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[_a]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&mn(e.ownerDocument.body);l=n}while(l);Na(t)}function Qf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Vc(l),$i(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function j0(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function A0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=bt(e.nextSibling),e===null))return null;return e}function Zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jc=null;function Lf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return bt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function kf(e,t,l){switch(t=Ei(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$i(e)}var vt=new Map,Kf=new Set;function Ti(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=E.d;E.d={f:E0,r:T0,D:O0,C:M0,L:_0,m:w0,X:C0,S:D0,M:U0};function E0(){var e=Wt.f(),t=vi();return e||t}function T0(e){var t=Ll(e);t!==null&&t.tag===5&&t.type==="form"?or(t):Wt.r(e)}var za=typeof document>"u"?null:document;function Jf(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Kf.has(n)||(Kf.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Re(t,"link",e),_e(t),a.head.appendChild(t)))}}function O0(e){Wt.D(e),Jf("dns-prefetch",e,null)}function M0(e,t){Wt.C(e,t),Jf("preconnect",e,t)}function _0(e,t,l){Wt.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+rt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+rt(l.imageSizes)+'"]')):n+='[href="'+rt(e)+'"]';var i=n;switch(t){case"style":i=ja(e);break;case"script":i=Aa(e)}vt.has(i)||(e=C({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),vt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(hn(i))||t==="script"&&a.querySelector(gn(i))||(t=a.createElement("link"),Re(t,"link",e),_e(t),a.head.appendChild(t)))}}function w0(e,t){Wt.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+rt(a)+'"][href="'+rt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Aa(e)}if(!vt.has(i)&&(e=C({rel:"modulepreload",href:e},t),vt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gn(i)))return}a=l.createElement("link"),Re(a,"link",e),_e(a),l.head.appendChild(a)}}}function D0(e,t,l){Wt.S(e,t,l);var a=za;if(a&&e){var n=Vl(a).hoistableStyles,i=ja(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(hn(i)))s.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},l),(l=vt.get(i))&&Wc(e,l);var o=u=a.createElement("link");_e(o),Re(o,"link",e),o._p=new Promise(function(g,v){o.onload=g,o.onerror=v}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Oi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function C0(e,t){Wt.X(e,t);var l=za;if(l&&e){var a=Vl(l).hoistableScripts,n=Aa(e),i=a.get(n);i||(i=l.querySelector(gn(n)),i||(e=C({src:e,async:!0},t),(t=vt.get(n))&&$c(e,t),i=l.createElement("script"),_e(i),Re(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function U0(e,t){Wt.M(e,t);var l=za;if(l&&e){var a=Vl(l).hoistableScripts,n=Aa(e),i=a.get(n);i||(i=l.querySelector(gn(n)),i||(e=C({src:e,async:!0,type:"module"},t),(t=vt.get(n))&&$c(e,t),i=l.createElement("script"),_e(i),Re(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Wf(e,t,l,a){var n=(n=K.current)?Ti(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ja(l.href),l=Vl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ja(l.href);var i=Vl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(hn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),vt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vt.set(e,l),i||H0(n,e,l,u.state))),t&&a===null)throw Error(m(528,""));return u}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Aa(l),l=Vl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function ja(e){return'href="'+rt(e)+'"'}function hn(e){return'link[rel="stylesheet"]['+e+"]"}function $f(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function H0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Re(t,"link",l),_e(t),e.head.appendChild(t))}function Aa(e){return'[src="'+rt(e)+'"]'}function gn(e){return"script[async]"+e}function Ff(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+rt(l.href)+'"]');if(a)return t.instance=a,_e(a),a;var n=C({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),_e(a),Re(a,"style",n),Oi(a,l.precedence,e),t.instance=a;case"stylesheet":n=ja(l.href);var i=e.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,_e(i),i;a=$f(l),(n=vt.get(n))&&Wc(a,n),i=(e.ownerDocument||e).createElement("link"),_e(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Re(i,"link",a),t.state.loading|=4,Oi(i,l.precedence,e),t.instance=i;case"script":return i=Aa(l.src),(n=e.querySelector(gn(i)))?(t.instance=n,_e(n),n):(a=l,(n=vt.get(i))&&(a=C({},l),$c(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),_e(n),Re(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Oi(a,l.precedence,e));return t.instance}function Oi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mi=null;function If(e,t,l){if(Mi===null){var a=new Map,n=Mi=new Map;n.set(l,a)}else n=Mi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[_a]||i[De]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function Pf(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function R0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Y0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=ja(a.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_i.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,_e(i);return}i=t.ownerDocument||t,a=$f(a),(n=vt.get(n))&&Wc(a,n),i=i.createElement("link"),_e(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Re(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=_i.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Fc=0;function q0(e,t){return e.stylesheets&&e.count===0&&Di(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Di(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Fc===0&&(Fc=62500*v0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Di(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Fc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function _i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Di(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wi=null;function Di(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wi=new Map,t.forEach(B0,e),wi=null,_i.call(e))}function B0(e,t){if(!(t.state.loading&4)){var l=wi.get(e);if(l)var a=l.get(null);else{l=new Map,wi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=_i.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:Ye,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function G0(e,t,l,a,n,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function td(e,t,l,a,n,i,u,s,o,g,v,z){return e=new G0(e,t,l,u,o,g,v,z,s),t=1,i===!0&&(t|=24),i=tt(3,null,null,t),e.current=i,i.stateNode=e,t=_u(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Uu(i),e}function ld(e){return e?(e=ta,e):ta}function ad(e,t,l,a,n,i){n=ld(n),a.context===null?a.context=n:a.pendingContext=n,a=nl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=il(e,a,t),l!==null&&($e(l,e,t),Ka(l,e,t))}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ic(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function id(e){if(e.tag===13||e.tag===31){var t=Ol(e,67108864);t!==null&&$e(t,e,67108864),Ic(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=ut();t=Ki(t);var l=Ol(e,t);l!==null&&$e(l,e,t),Ic(e,t)}}var Ci=!0;function X0(e,t,l,a){var n=y.T;y.T=null;var i=E.p;try{E.p=2,Pc(e,t,l,a)}finally{E.p=i,y.T=n}}function Q0(e,t,l,a){var n=y.T;y.T=null;var i=E.p;try{E.p=8,Pc(e,t,l,a)}finally{E.p=i,y.T=n}}function Pc(e,t,l,a){if(Ci){var n=es(a);if(n===null)Bc(e,t,a,Ui,l),sd(e,a);else if(L0(n,e,t,l,a))a.stopPropagation();else if(sd(e,a),t&4&&-1<Z0.indexOf(e)){for(;n!==null;){var i=Ll(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=jl(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-Pe(u);s.entanglements[1]|=o,u&=~o}_t(i),(le&6)===0&&(pi=Fe()+500,rn(0))}}break;case 31:case 13:s=Ol(i,2),s!==null&&$e(s,i,2),vi(),Ic(i,2)}if(i=es(a),i===null&&Bc(e,t,a,Ui,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Bc(e,t,a,null,l)}}function es(e){return e=lu(e),ts(e)}var Ui=null;function ts(e){if(Ui=null,e=Zl(e),e!==null){var t=R(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=V(t),e!==null)return e;e=null}else if(l===31){if(e=k(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function cd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Od()){case ms:return 2;case hs:return 8;case jn:case Md:return 32;case gs:return 268435456;default:return 32}default:return 32}}var ls=!1,pl=null,bl=null,vl=null,bn=new Map,vn=new Map,yl=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(e,t){switch(e){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":bl=null;break;case"mouseover":case"mouseout":vl=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function yn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ll(t),t!==null&&id(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function L0(e,t,l,a,n){switch(t){case"focusin":return pl=yn(pl,e,t,l,a,n),!0;case"dragenter":return bl=yn(bl,e,t,l,a,n),!0;case"mouseover":return vl=yn(vl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,yn(bn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,vn.set(i,yn(vn.get(i)||null,e,t,l,a,n)),!0}return!1}function od(e){var t=Zl(e.target);if(t!==null){var l=R(t);if(l!==null){if(t=l.tag,t===13){if(t=V(l),t!==null){e.blockedOn=t,Ss(e.priority,function(){ud(l)});return}}else if(t===31){if(t=k(l),t!==null){e.blockedOn=t,Ss(e.priority,function(){ud(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=es(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);tu=a,l.target.dispatchEvent(a),tu=null}else return t=Ll(l),t!==null&&id(t),e.blockedOn=l,!1;t.shift()}return!0}function rd(e,t,l){Hi(e)&&l.delete(t)}function V0(){ls=!1,pl!==null&&Hi(pl)&&(pl=null),bl!==null&&Hi(bl)&&(bl=null),vl!==null&&Hi(vl)&&(vl=null),bn.forEach(rd),vn.forEach(rd)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,N.unstable_scheduleCallback(N.unstable_NormalPriority,V0)))}var Yi=null;function fd(e){Yi!==e&&(Yi=e,N.unstable_scheduleCallback(N.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(ts(a||l)===null)continue;break}var i=Ll(l);i!==null&&(e.splice(t,3),t-=3,ec(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Na(e){function t(o){return Ri(o,e)}pl!==null&&Ri(pl,e),bl!==null&&Ri(bl,e),vl!==null&&Ri(vl,e),bn.forEach(t),vn.forEach(t);for(var l=0;l<yl.length;l++){var a=yl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<yl.length&&(l=yl[0],l.blockedOn===null);)od(l),l.blockedOn===null&&yl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Le]||null;if(typeof i=="function")u||fd(l);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Le]||null)s=u.formAction;else if(ts(n)!==null)continue}else s=u.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),fd(l)}}}function dd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function as(e){this._internalRoot=e}qi.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=ut();ad(l,a,e,t,null,null)},qi.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),vi(),t[Ql]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=xs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<yl.length&&t!==0&&t<yl[l].priority;l++);yl.splice(l,0,e),l===0&&od(e)}};var md=q.version;if(md!=="19.2.0")throw Error(m(527,md,"19.2.0"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=x(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var k0={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Ta=Bi.inject(k0),Ie=Bi}catch{}}return Sn.createRoot=function(e,t){if(!M(e))throw Error(m(299));var l=!1,a="",n=yr,i=xr,u=Sr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=td(e,1,!1,null,null,l,a,null,n,i,u,dd),e[Ql]=t.current,qc(e),new as(t)},Sn.hydrateRoot=function(e,t,l){if(!M(e))throw Error(m(299));var a=!1,n="",i=yr,u=xr,s=Sr,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=td(e,1,!0,t,l??null,a,n,o,i,u,s,dd),t.context=ld(null),l=t.current,a=ut(),a=Ki(a),n=nl(a),n.callback=null,il(l,n,a),l=a,t.current.lanes=l,Ma(t,l),_t(t),e[Ql]=t.current,qc(e),new qi(t)},Sn.version="19.2.0",Sn}var jd;function lh(){if(jd)return us.exports;jd=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(q){console.error(q)}}return N(),us.exports=th(),us.exports}var ah=lh();function nh({onOpenContact:N}){const[q,A]=je.useState(!1);return c.jsxs("header",{className:"header",children:[c.jsxs("div",{className:"container header-container",children:[c.jsxs("div",{className:"logo",children:["GenX pro ",c.jsx("span",{className:"text-gradient",children:"AI"})]}),c.jsx("button",{className:"menu-toggle",onClick:()=>A(!q),children:c.jsx("span",{className:`hamburger ${q?"active":""}`})}),c.jsxs("nav",{className:`nav ${q?"active":""}`,children:[c.jsx("a",{href:"#overview",className:"nav-link",onClick:()=>A(!1),children:"Overview"}),c.jsx("a",{href:"#divisions",className:"nav-link",onClick:()=>A(!1),children:"Divisions"}),c.jsx("a",{href:"#about-us",className:"nav-link",onClick:()=>A(!1),children:"About Us"}),c.jsx("a",{href:"#process",className:"nav-link",onClick:()=>A(!1),children:"Process"})]}),c.jsx("button",{className:"btn btn-primary btn-header",onClick:N,children:"Contact Us"})]}),c.jsx("style",{children:`
        html {
          scroll-behavior: smooth;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding: 0.75rem 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 1rem;
          max-width: 100%;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          flex-shrink: 0;
          white-space: nowrap;
        }

        .menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.75rem;
          z-index: 101;
          margin-left: auto;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hamburger::before,
        .hamburger::after,
        .hamburger span {
          content: '';
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger span {
          width: 20px;
        }

        .hamburger.active::before {
          transform: rotate(45deg) translate(8px, 8px);
          width: 25px;
        }

        .hamburger.active::after {
          transform: rotate(-45deg) translate(7px, -7px);
          width: 25px;
        }

        .hamburger.active span {
          opacity: 0;
        }

        .nav {
          display: none;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
          display: block;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        .btn-header {
          display: none;
        }

        @media (max-width: 767px) {
          .header {
            padding: 0.5rem 0;
          }

          .header-container {
            padding: 0 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .nav {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1.5rem;
            gap: 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            display: none;
            width: 100vw;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .nav.active {
            display: flex;
          }

          .nav-link {
            padding: 0.75rem 1rem;
            font-size: 1rem;
            border-radius: 6px;
            transition: all 0.3s ease;
          }

          .nav-link:active {
            background: rgba(102, 126, 234, 0.1);
          }

          .btn-header {
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            margin-top: 0.5rem;
          }
        }

        @media (min-width: 768px) {
          .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .menu-toggle {
            display: none;
          }

          .nav {
            display: flex;
            flex: 1;
            justify-content: center;
            gap: 2.5rem;
          }

          .btn-header {
            display: block;
            flex-shrink: 0;
          }
        }
      `})]})}const ih="modulepreload",uh=function(N){return"/"+N},Ad={},ch=function(q,A,m){let M=Promise.resolve();if(A&&A.length>0){let O=function(x){return Promise.all(x.map(B=>Promise.resolve(B).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const V=document.querySelector("meta[property=csp-nonce]"),k=V?.nonce||V?.getAttribute("nonce");M=O(A.map(x=>{if(x=uh(x),x in Ad)return;Ad[x]=!0;const B=x.endsWith(".css"),C=B?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${C}`))return;const G=document.createElement("link");if(G.rel=B?"stylesheet":ih,B||(G.as="script"),G.crossOrigin="",G.href=x,k&&G.setAttribute("nonce",k),document.head.appendChild(G),B)return new Promise((Ae,ue)=>{G.addEventListener("load",Ae),G.addEventListener("error",()=>ue(new Error(`Unable to preload CSS for ${x}`)))})}))}function R(V){const k=new Event("vite:preloadError",{cancelable:!0});if(k.payload=V,window.dispatchEvent(k),!k.defaultPrevented)throw V}return M.then(V=>{for(const k of V||[])k.status==="rejected"&&R(k.reason);return q().catch(R)})},sh=je.lazy(()=>ch(()=>import("./react-spline-BkeL5T9t.js").then(N=>N.r),[])),oh=()=>c.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsxs("div",{className:"spinner-container",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{style:{color:"white",marginTop:"1rem",fontSize:"0.9rem",fontWeight:"500"},children:"Loading 3D Scene..."})]})});function rh({onOpenContact:N}){return c.jsxs("section",{className:"hero-section",children:[c.jsxs("div",{className:"hero-content fade-in-up",children:[c.jsxs("h1",{className:"hero-title",children:["Intelligent Automation for the ",c.jsx("span",{className:"text-gradient",children:"Future of Business"})]}),c.jsx("p",{className:"hero-subtitle",children:"GenX pro AI helps businesses harness the power of artificial intelligence to accelerate growth, streamline operations, and deliver superior customer experiences."}),c.jsxs("div",{className:"hero-actions",children:[c.jsx("button",{className:"btn btn-primary",onClick:N,children:"Get Started"}),c.jsx("button",{className:"btn",style:{background:"white",border:"1px solid var(--text-tertiary)"},children:"Learn More"})]})]}),c.jsx("div",{className:"hero-spline",children:c.jsx(je.Suspense,{fallback:c.jsx(oh,{}),children:c.jsx(sh,{scene:"https://prod.spline.design/oiOVyQkjOrar0fRG/scene.splinecode"})})}),c.jsx("style",{children:`
        .hero-section {
        display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 6rem 2rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin-top: 2rem;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions{
          display: flex;
          gap: 8px;
        }

        .hero-spline {
          width: 100%;
          height: 400px;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (min-width: 1024px) {
          .hero-section {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 0 4rem;
          }

          .hero-content {
            width: 50%;
            text-align: left;
            margin-top: 0;
          }

          .hero-subtitle {
            margin-left: 0;
            margin-right: 0;
          }

          .hero-spline {
            width: 50%;
            height: 600px;
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
        }
      `})]})}function fh({visible:N=!0,onClose:q=()=>{}}){const[A,m]=je.useState({name:"",email:"",phone:""}),[M,R]=je.useState(!1),[V,k]=je.useState(null),[O,x]=je.useState({x:0,y:0});if(je.useEffect(()=>{const ue=ye=>{x({x:ye.clientX,y:ye.clientY})};return window.addEventListener("mousemove",ue),()=>window.removeEventListener("mousemove",ue)},[]),!N)return null;const B=ue=>{m({...A,[ue.target.name]:ue.target.value})},C=async()=>{R(!0),k(null);try{if((await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"5ec99ed0-6665-44d3-b9ab-8f669aaa276b",subject:`📞 New Contact Request: ${A.name}`,from_name:A.name,email:A.email,message:`
📞 NEW CONTACT REQUEST

═══════════════════════════════
📊 CONTACT INFORMATION
═══════════════════════════════
👤 Name: ${A.name}
📧 Email: ${A.email}
📱 Phone: ${A.phone}

═══════════════════════════════
⏰ Submitted: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
          `,to:"jainmahi1848@gmail.com"})})).json()).success)k("success"),setTimeout(()=>{q(),m({name:"",email:"",phone:""}),k(null)},3e3);else throw new Error("Failed")}catch{k("error")}finally{R(!1)}},G=O.x/window.innerWidth*100,Ae=O.y/window.innerHeight*100;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }

        .contact-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .contact-modal-container {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .contact-gradient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-out;
          animation: pulse 4s infinite;
          z-index: 0;
        }

        .contact-modal {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .contact-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.25rem;
          color: #64748b;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .contact-header h2 {
          margin: 0 0 0.75rem 0;
          font-size: 1.85rem;
          background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .contact-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .contact-form {
          margin-top: 2rem;
        }

        .contact-input-group {
          margin-bottom: 1.25rem;
        }

        .contact-input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #334155;
          font-size: 0.9rem;
        }

        .contact-input-group input {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.2s;
          font-family: inherit;
          background: white;
        }

        .contact-input-group input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .contact-btn-primary {
          width: 100%;
          padding: 0.95rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        }

        .contact-btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .contact-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .contact-trust-bar {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.85rem;
          color: #64748b;
          flex-wrap: wrap;
        }

        .contact-success-screen {
          text-align: center;
          padding: 2rem 0;
        }

        .contact-success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin: 0 auto 1.5rem;
          animation: slideUp 0.5s ease-out;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
        }

        .contact-success-screen h3 {
          margin: 0 0 0.75rem 0;
          color: #1e293b;
          font-size: 1.5rem;
        }

        .contact-success-screen p {
          color: #64748b;
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }

        .contact-success-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-detail {
          background: #f0f9ff;
          padding: 0.75rem;
          border-radius: 8px;
          color: #0369a1;
          font-weight: 500;
        }

        .contact-error-message {
          background: #fee2e2;
          color: #991b1b;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          border: 1px solid #fca5a5;
        }

        @media (max-width: 640px) {
          .contact-modal {
            padding: 2rem 1.5rem;
          }
          .contact-header h2 {
            font-size: 1.5rem;
          }
          .contact-trust-bar {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}),c.jsx("div",{className:"contact-modal-backdrop",onClick:q,children:c.jsxs("div",{className:"contact-modal-container",onClick:ue=>ue.stopPropagation(),children:[c.jsx("div",{className:"contact-gradient-orb",style:{left:`${G}%`,top:`${Ae}%`}}),c.jsxs("div",{className:"contact-modal",children:[c.jsx("button",{className:"contact-close-btn",onClick:q,children:"✕"}),c.jsxs("div",{className:"contact-header",children:[c.jsx("div",{className:"contact-badge",children:"💬 Quick Contact"}),c.jsx("h2",{children:"Get In Touch With Us"}),c.jsx("p",{children:"We'll get back to you within 24 hours"})]}),V==="success"?c.jsxs("div",{className:"contact-success-screen",children:[c.jsx("div",{className:"contact-success-icon",children:"✓"}),c.jsx("h3",{children:"Message Sent Successfully!"}),c.jsx("p",{children:"Thank you for reaching out. We'll contact you shortly."}),c.jsxs("div",{className:"contact-success-details",children:[c.jsx("div",{className:"contact-detail",children:"📧 Check your inbox"}),c.jsx("div",{className:"contact-detail",children:"📞 We'll call you soon"}),c.jsx("div",{className:"contact-detail",children:"⚡ Quick response guaranteed"})]})]}):c.jsxs("div",{className:"contact-form",children:[c.jsxs("div",{className:"contact-input-group",children:[c.jsx("label",{children:"Your Name *"}),c.jsx("input",{type:"text",name:"name",value:A.name,onChange:B,placeholder:"John Doe",required:!0})]}),c.jsxs("div",{className:"contact-input-group",children:[c.jsx("label",{children:"Email Address *"}),c.jsx("input",{type:"email",name:"email",value:A.email,onChange:B,placeholder:"john@example.com",required:!0})]}),c.jsxs("div",{className:"contact-input-group",children:[c.jsx("label",{children:"Phone Number *"}),c.jsx("input",{type:"tel",name:"phone",value:A.phone,onChange:B,placeholder:"+91 98765 43210",required:!0})]}),V==="error"&&c.jsx("div",{className:"contact-error-message",children:"❌ Failed to send. Please try again or email us directly at jainmahi1848@gmail.com"}),c.jsx("button",{onClick:C,className:"contact-btn-primary",disabled:M||!A.name||!A.email||!A.phone,children:M?"⏳ Sending...":"📤 Send Message"})]}),c.jsxs("div",{className:"contact-trust-bar",children:[c.jsx("span",{children:"🔒 Secure"}),c.jsx("span",{children:"⚡ Fast Response"}),c.jsx("span",{children:"✨ No Spam"})]})]})]})})]})}function dh(){return c.jsxs("section",{id:"overview",className:"section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"glass-card fade-in-up",children:[c.jsxs("h2",{className:"text-center",children:["Company ",c.jsx("span",{className:"text-gradient",children:"Overview"})]}),c.jsx("p",{className:"overview-text",children:"GenX pro AI is a next-generation AI solutions and automation agency that helps businesses harness the power of artificial intelligence to accelerate growth, streamline operations, and deliver superior customer experiences."}),c.jsx("p",{className:"overview-text",children:"We combine strategic consulting, cutting-edge AI tools, and custom integrations to design end-to-end solutions that drive measurable business impact."})]})}),c.jsx("style",{children:`
        .overview-text {
          font-size: 1.125rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          color: var(--text-secondary);
        }
      `})]})}function mh({visible:N=!0,onClose:q=()=>{}}){const[A,m]=je.useState({name:"",email:"",phone:"",company:"",businessType:"",message:"",date:"",time:""}),[M,R]=je.useState(!1),[V,k]=je.useState(null),[O,x]=je.useState(1),[B,C]=je.useState({x:0,y:0});if(je.useEffect(()=>{const pe=ct=>{C({x:ct.clientX,y:ct.clientY})};return window.addEventListener("mousemove",pe),()=>window.removeEventListener("mousemove",pe)},[]),!N)return null;const G=pe=>{m({...A,[pe.target.name]:pe.target.value})},Ae=()=>{O===1&&A.name&&A.email?x(2):O===2&&A.phone&&A.company&&x(3)},ue=async()=>{R(!0),k(null);try{if((await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"5ec99ed0-6665-44d3-b9ab-8f669aaa276b",subject:`🚀 New Consultation Request: ${A.name} from ${A.company}`,from_name:A.name,email:A.email,message:`
🎯 NEW CONSULTATION BOOKING

═══════════════════════════════
📊 CONTACT INFORMATION
═══════════════════════════════
👤 Name: ${A.name}
📧 Email: ${A.email}
📱 Phone: ${A.phone}

═══════════════════════════════
🏢 COMPANY DETAILS
═══════════════════════════════
Company: ${A.company}
Industry: ${A.businessType}

═══════════════════════════════
📅 MEETING PREFERENCES
═══════════════════════════════
Date: ${A.date}
Time: ${A.time}

═══════════════════════════════
💬 REQUIREMENTS
═══════════════════════════════
${A.message||"No additional details provided"}

═══════════════════════════════
⏰ Submitted: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
          `,to:"jainmahi1848@gmail.com"})})).json()).success)k("success"),setTimeout(()=>{q(),m({name:"",email:"",phone:"",company:"",businessType:"",message:"",date:"",time:""}),x(1),k(null)},3e3);else throw new Error("Failed")}catch{k("error")}finally{R(!1)}},ye=B.x/window.innerWidth*100,yt=B.y/window.innerHeight*100;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }

        .consult-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .consult-modal-container {
          position: relative;
          width: 100%;
          max-width: 550px;
        }

        .consult-gradient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-out;
          animation: pulse 4s infinite;
          z-index: 0;
        }

        .consult-modal {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .consult-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.25rem;
          color: #64748b;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .consult-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .consult-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .consult-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .consult-header h2 {
          margin: 0 0 0.75rem 0;
          font-size: 1.85rem;
          background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .consult-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .consult-progress-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
          gap: 0.5rem;
        }

        .consult-progress-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          color: #94a3b8;
          transition: all 0.3s;
        }

        .consult-progress-step.active {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
          transform: scale(1.1);
        }

        .consult-progress-line {
          width: 60px;
          height: 3px;
          background: #e2e8f0;
          transition: all 0.3s;
        }

        .consult-progress-line.active {
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
        }

        .consult-step-content {
          margin-top: 2rem;
        }

        .consult-step-content h3 {
          margin: 0 0 1.5rem 0;
          color: #1e293b;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .consult-input-group {
          margin-bottom: 1.25rem;
        }

        .consult-input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #334155;
          font-size: 0.9rem;
        }

        .consult-input-group input,
        .consult-input-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.2s;
          font-family: inherit;
          background: white;
        }

        .consult-input-group input:focus,
        .consult-input-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .consult-input-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .consult-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .consult-btn-primary,
        .consult-btn-secondary {
          width: 100%;
          padding: 0.95rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }

        .consult-btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        }

        .consult-btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }

        .consult-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .consult-btn-secondary {
          background: white;
          color: #64748b;
          border: 2px solid #e2e8f0;
        }

        .consult-btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .consult-btn-group {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0.75rem;
        }

        .consult-trust-bar {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          font-size: 0.85rem;
          color: #64748b;
          flex-wrap: wrap;
        }

        .consult-success-screen {
          text-align: center;
          padding: 2rem 0;
        }

        .consult-success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin: 0 auto 1.5rem;
          animation: slideUp 0.5s ease-out;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
        }

        .consult-success-screen h3 {
          margin: 0 0 0.75rem 0;
          color: #1e293b;
          font-size: 1.5rem;
        }

        .consult-success-screen p {
          color: #64748b;
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }

        .consult-success-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .consult-detail {
          background: #f0f9ff;
          padding: 0.75rem;
          border-radius: 8px;
          color: #0369a1;
          font-weight: 500;
        }

        .consult-error-message {
          background: #fee2e2;
          color: #991b1b;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          border: 1px solid #fca5a5;
        }

        @media (max-width: 640px) {
          .consult-modal {
            padding: 2rem 1.5rem;
          }
          .consult-header h2 {
            font-size: 1.5rem;
          }
          .consult-input-row {
            grid-template-columns: 1fr;
          }
          .consult-btn-group {
            grid-template-columns: 1fr;
          }
          .consult-trust-bar {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          .consult-progress-line {
            width: 40px;
          }
        }
      `}),c.jsx("div",{className:"consult-modal-backdrop",onClick:q,children:c.jsxs("div",{className:"consult-modal-container",onClick:pe=>pe.stopPropagation(),children:[c.jsx("div",{className:"consult-gradient-orb",style:{left:`${ye}%`,top:`${yt}%`}}),c.jsxs("div",{className:"consult-modal",children:[c.jsx("button",{className:"consult-close-btn",onClick:q,children:"✕"}),c.jsxs("div",{className:"consult-header",children:[c.jsx("div",{className:"consult-badge",children:"🤖 AI Consultation"}),c.jsx("h2",{children:"Book Your Free Strategy Session"}),c.jsx("p",{children:"Join 500+ companies transforming their business with AI automation"}),c.jsxs("div",{className:"consult-progress-bar",children:[c.jsx("div",{className:`consult-progress-step ${O>=1?"active":""}`,children:"1"}),c.jsx("div",{className:`consult-progress-line ${O>=2?"active":""}`}),c.jsx("div",{className:`consult-progress-step ${O>=2?"active":""}`,children:"2"}),c.jsx("div",{className:`consult-progress-line ${O>=3?"active":""}`}),c.jsx("div",{className:`consult-progress-step ${O>=3?"active":""}`,children:"3"})]})]}),V==="success"?c.jsxs("div",{className:"consult-success-screen",children:[c.jsx("div",{className:"consult-success-icon",children:"✓"}),c.jsx("h3",{children:"Consultation Booked Successfully!"}),c.jsx("p",{children:"Check your email for confirmation. Our AI specialist will contact you within 24 hours."}),c.jsxs("div",{className:"consult-success-details",children:[c.jsx("div",{className:"consult-detail",children:"📧 Confirmation email sent"}),c.jsx("div",{className:"consult-detail",children:"📞 Expect our call soon"}),c.jsx("div",{className:"consult-detail",children:"🚀 Get ready to transform"})]})]}):c.jsxs(c.Fragment,{children:[O===1&&c.jsxs("div",{className:"consult-step-content",children:[c.jsx("h3",{children:"👋 Let's Get Started"}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Your Name *"}),c.jsx("input",{type:"text",name:"name",value:A.name,onChange:G,placeholder:"John Doe",required:!0})]}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Work Email *"}),c.jsx("input",{type:"email",name:"email",value:A.email,onChange:G,placeholder:"john@company.com",required:!0})]}),c.jsx("button",{className:"consult-btn-primary",onClick:Ae,disabled:!A.name||!A.email,children:"Continue →"})]}),O===2&&c.jsxs("div",{className:"consult-step-content",children:[c.jsx("h3",{children:"🏢 About Your Company"}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Phone Number *"}),c.jsx("input",{type:"tel",name:"phone",value:A.phone,onChange:G,placeholder:"+91 98765 43210",required:!0})]}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Company Name *"}),c.jsx("input",{type:"text",name:"company",value:A.company,onChange:G,placeholder:"Tech Solutions Pvt Ltd",required:!0})]}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Industry / Business Type"}),c.jsx("input",{type:"text",name:"businessType",value:A.businessType,onChange:G,placeholder:"E-commerce, SaaS, Healthcare..."})]}),c.jsxs("div",{className:"consult-btn-group",children:[c.jsx("button",{className:"consult-btn-secondary",onClick:()=>x(1),children:"← Back"}),c.jsx("button",{className:"consult-btn-primary",onClick:Ae,disabled:!A.phone||!A.company,children:"Continue →"})]})]}),O===3&&c.jsxs("div",{className:"consult-step-content",children:[c.jsx("h3",{children:"📅 Schedule Your Call"}),c.jsxs("div",{className:"consult-input-row",children:[c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Preferred Date *"}),c.jsx("input",{type:"date",name:"date",value:A.date,onChange:G,min:new Date().toISOString().split("T")[0],required:!0})]}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"Preferred Time *"}),c.jsx("input",{type:"time",name:"time",value:A.time,onChange:G,required:!0})]})]}),c.jsxs("div",{className:"consult-input-group",children:[c.jsx("label",{children:"What challenges are you facing? (Optional)"}),c.jsx("textarea",{name:"message",value:A.message,onChange:G,rows:4,placeholder:"e.g., Manual data entry, slow customer response, repetitive tasks..."})]}),V==="error"&&c.jsx("div",{className:"consult-error-message",children:"❌ Failed to send. Please try again or email us directly."}),c.jsxs("div",{className:"consult-btn-group",children:[c.jsx("button",{className:"consult-btn-secondary",onClick:()=>x(2),children:"← Back"}),c.jsx("button",{className:"consult-btn-primary",onClick:ue,disabled:M||!A.date||!A.time,children:M?"⏳ Booking...":"🚀 Book My Consultation"})]})]})]}),c.jsxs("div",{className:"consult-trust-bar",children:[c.jsx("span",{children:"🔒 Secure & Confidential"}),c.jsx("span",{children:"⚡ 24hr Response"}),c.jsx("span",{children:"✨ No Commitment"})]})]})]})})]})}function hh(){const[N,q]=je.useState(null),A=[{icon:"🤖",title:"AI Chatbot Solutions",tagline:"Your 24/7 Digital Employee",shortDesc:"Never miss a customer query. Our AI chatbots handle thousands of conversations, answer instantly, and convert visitors into customers.",impact:"Save 40+ hours/week",stats:{number:"10K+",label:"Messages Daily"},fullDetails:{description:"Imagine having a tireless employee who never sleeps, never takes breaks, and can talk to thousands of customers at once. That's what our AI chatbots do for you.",howItWorks:["We train AI on your business - products, services, FAQs","Deploy on WhatsApp, website, Instagram in 48 hours","Chatbot learns from every conversation","Automatically captures leads and schedules calls"],benefits:["Answer customer questions 24/7 in any language","Handle 1000+ chats simultaneously","Reduce support costs by 70%","Increase conversions by 3x","Free up your team for complex tasks"],realExample:"A clothing store used our chatbot and went from answering 50 queries/day to handling 500+ automatically, increasing sales by 40%."}},{icon:"⚙️",title:"Business Process Automation",tagline:"Stop Doing Repetitive Work",shortDesc:"Automate boring tasks like data entry, email replies, and report generation. Get hours back in your day.",impact:"60% cost reduction",stats:{number:"500+",label:"Hours Saved"},fullDetails:{description:"Think about all the repetitive tasks your team does daily - copying data, sending follow-up emails, updating spreadsheets. What if a robot did all that?",howItWorks:["We map out your current manual processes","Identify what can be automated (usually 70%+)","Build custom automation workflows","Train your team on the new system"],benefits:["Auto-update Excel reports every morning","Send personalized emails to 1000s instantly","Extract data from invoices/documents automatically","Schedule social media posts for weeks ahead","Eliminate human errors completely"],realExample:"An accounting firm automated invoice processing, cutting time from 3 hours to 10 minutes per batch - saving 40 hours weekly."}},{icon:"🎯",title:"AI Strategy & Implementation",tagline:"Your AI Transformation Partner",shortDesc:"Not sure where to start? We analyze your business, find opportunities, and implement AI that actually works.",impact:"3x faster results",stats:{number:"95%",label:"Success Rate"},fullDetails:{description:"Most businesses know they need AI but don't know where to start. We become your AI department - from planning to execution.",howItWorks:["Free AI Audit: We analyze your business operations","Opportunity Report: Show exactly what can be automated","Roadmap: Step-by-step plan for 3, 6, 12 months","Implementation: We build and deploy everything","Training: Make your team AI-confident"],benefits:["No guesswork - clear roadmap from day one","Custom AI models built for your specific needs","Works with your existing software (CRM, ERP, etc.)","Predictive analytics to forecast trends","Computer vision for quality control/monitoring"],realExample:"A manufacturing company used our AI audit to identify 12 automation opportunities, implemented 8 in 6 months, saving $200K annually."}},{icon:"🎨",title:"Creative & Marketing AI",tagline:"Create Content at Lightning Speed",shortDesc:"Generate blog posts, social media content, images, and videos in minutes. Scale your marketing without hiring.",impact:"10x content output",stats:{number:"1000+",label:"Posts Created"},fullDetails:{description:"Creating content is time-consuming. What if you could generate a week's worth of social posts in 10 minutes? Or write a blog post in 5 minutes?",howItWorks:["Connect your brand guidelines and style","AI learns your brand voice and tone","Generate content ideas automatically","Create text, images, videos with one click","Schedule and publish automatically"],benefits:["Write blog posts in 5 minutes vs 3 hours","Create custom images without designers","Generate videos without filming","A/B test 10 ad variations instantly","Optimize content for SEO automatically"],realExample:"A digital agency went from posting 3x/week to daily posts across 5 platforms, growing client reach by 400% with same team size."}},{icon:"🎓",title:"Training & Support",tagline:"Master AI, Don't Fear It",shortDesc:"We teach your team to use AI confidently with hands-on workshops and ongoing support.",impact:"Team AI-ready in 2 weeks",stats:{number:"100+",label:"Teams Trained"},fullDetails:{description:"Technology is useless if your team doesn't know how to use it. We ensure everyone becomes comfortable and confident with AI tools.",howItWorks:["Initial assessment of team's current AI knowledge","Customized training program for your needs","Interactive workshops (not boring lectures)","Hands-on practice with real scenarios","Ongoing support via chat/calls/email"],benefits:["Team learns AI basics in 2-3 days","Custom playbooks for your specific tools","1-on-1 coaching for key team members","Troubleshooting help whenever needed","Regular updates on new AI capabilities"],realExample:"A 50-person sales team went from AI-confused to AI-powered in 2 weeks, with 100% adoption rate and 35% productivity increase."}}],m=()=>{document.getElementById("about-us")?.scrollIntoView({behavior:"smooth"})};return c.jsxs("section",{className:"divisions-section",children:[c.jsx("div",{className:"bg-gradient"}),c.jsx("div",{className:"floating-blob blob-1"}),c.jsx("div",{className:"floating-blob blob-2"}),c.jsx("div",{className:"floating-blob blob-3"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("div",{className:"badge",children:"🚀 Our Expertise"}),c.jsxs("h2",{children:["How We Help Your ",c.jsx("span",{className:"gradient-text",children:"Business Grow"})]}),c.jsx("p",{className:"subtitle",children:"We don't just talk about AI – we make it work for real businesses like yours."})]}),c.jsx("div",{className:`divisions-grid ${N!==null?"has-expanded":""}`,children:A.map((M,R)=>c.jsxs("div",{className:`division-card ${N===R?"expanded":""} ${N!==null&&N!==R?"dimmed":""}`,children:[c.jsxs("div",{className:"card-main",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("div",{className:"icon-wrapper",children:M.icon}),c.jsxs("div",{className:"header-content",children:[c.jsx("h3",{children:M.title}),c.jsx("p",{className:"tagline",children:M.tagline})]})]}),c.jsx("p",{className:"short-description",children:M.shortDesc}),c.jsxs("div",{className:"stats-impact",children:[c.jsxs("div",{className:"impact-badge",children:[c.jsx("span",{className:"impact-icon",children:"⚡"}),c.jsx("span",{children:M.impact})]}),c.jsxs("div",{className:"stats-badge",children:[c.jsx("strong",{children:M.stats.number}),c.jsx("span",{children:M.stats.label})]})]})]}),N===R&&c.jsx("div",{className:"expanded-wrapper",children:c.jsxs("div",{className:"expanded-content",children:[c.jsxs("div",{className:"content-section",children:[c.jsx("h4",{children:"💡 What This Means for You"}),c.jsx("p",{children:M.fullDetails.description})]}),c.jsxs("div",{className:"content-section",children:[c.jsx("h4",{children:"🔧 How It Works"}),c.jsx("ol",{className:"steps-list",children:M.fullDetails.howItWorks.map((V,k)=>c.jsx("li",{children:V},k))})]}),c.jsxs("div",{className:"content-section",children:[c.jsx("h4",{children:"✨ Key Benefits"}),c.jsx("ul",{className:"benefits-list",children:M.fullDetails.benefits.map((V,k)=>c.jsx("li",{children:V},k))})]}),c.jsxs("div",{className:"example-box",children:[c.jsx("div",{className:"example-icon",children:"📊"}),c.jsxs("div",{children:[c.jsx("strong",{children:"Real-World Example"}),c.jsx("p",{children:M.fullDetails.realExample})]})]})]})}),c.jsxs("button",{className:"toggle-btn",onClick:()=>m(),children:[c.jsx("span",{children:N===R?"Show Less":"Learn More"}),c.jsx("span",{className:"arrow",children:N===R?"↑":"→"})]})]},R))})]}),c.jsx("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .divisions-section {
          padding: 5rem 2rem;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .bg-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 50%, #e8f0fe 100%);
          z-index: -2;
        }

        .floating-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: -1;
          animation: float 20s infinite ease-in-out;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          top: -200px;
          left: -200px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          top: 40%;
          right: -150px;
          animation-delay: -7s;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          bottom: -150px;
          left: 20%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          animation: slideDown 0.6s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-header h2 {
          font-size: 3.5rem;
          margin: 0 0 1.5rem 0;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 500;
        }

        .divisions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          transition: all 0.3s ease;
        }

        .divisions-grid.has-expanded {
          grid-template-columns: 1fr;
        }

        .division-card {
          background: white;
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .division-card:hover:not(.dimmed) {
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.08);
          transform: translateY(-4px);
        }

        .division-card.expanded {
          box-shadow: 0 12px 48px rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .division-card.dimmed {
          opacity: 0.5;
          pointer-events: none;
        }

        .card-main {
          flex: 1;
        }

        .card-header {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .icon-wrapper {
          font-size: 2.8rem;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border-radius: 16px;
          flex-shrink: 0;
          border: 2px solid rgba(124, 58, 237, 0.1);
        }

        .header-content h3 {
          margin: 0 0 0.4rem 0;
          color: #0f172a;
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .tagline {
          color: #7c3aed;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .short-description {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.97rem;
          font-weight: 500;
        }

        .stats-impact {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .impact-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(74, 222, 128, 0.08));
          padding: 0.7rem 1.2rem;
          border-radius: 25px;
          border: 1.5px solid rgba(34, 197, 94, 0.2);
          font-size: 0.9rem;
          color: #166534;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s;
        }

        .impact-icon {
          font-size: 1.2rem;
        }

        .stats-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          padding: 0.7rem 1.2rem;
          border-radius: 12px;
          border: 1px solid rgba(124, 58, 237, 0.15);
          min-width: 110px;
        }

        .stats-badge strong {
          font-size: 1.4rem;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.2rem;
        }

        .stats-badge span {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        .expanded-wrapper {
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expanded-content {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(124, 58, 237, 0.1);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .content-section {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.04), rgba(99, 102, 241, 0.04));
          padding: 1.5rem;
          border-radius: 14px;
          border: 1px solid rgba(124, 58, 237, 0.08);
          transition: all 0.3s;
        }

        .content-section:hover {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border-color: rgba(124, 58, 237, 0.15);
        }

        .content-section h4 {
          color: #0f172a;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .content-section p {
          color: #475569;
          line-height: 1.75;
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .steps-list {
          list-style: none;
          counter-reset: step;
        }

        .steps-list li {
          color: #475569;
          padding-left: 2.5rem;
          margin-bottom: 1rem;
          position: relative;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .steps-list li:last-child {
          margin-bottom: 0;
        }

        .steps-list li::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          color: white;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
        }

        .benefits-list {
          list-style: none;
        }

        .benefits-list li {
          color: #475569;
          padding-left: 2rem;
          margin-bottom: 0.8rem;
          position: relative;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .benefits-list li:last-child {
          margin-bottom: 0;
        }

        .benefits-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .example-box {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(124, 58, 237, 0.08));
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          border-radius: 14px;
          padding: 1.8rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .example-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .example-box strong {
          color: #0f172a;
          display: block;
          margin-bottom: 0.6rem;
          font-size: 1rem;
        }

        .example-box p {
          color: #475569;
          line-height: 1.75;
          margin: 0;
          font-size: 0.95rem;
        }

        .toggle-btn {
          align-self: flex-start;
          padding: 0.9rem 1.8rem;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .toggle-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
        }

        .explore-btn {
          margin-top: 0.8rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }

        .arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .toggle-btn:hover .arrow {
          transform: scale(1.2);
        }

        .cta-section {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(99, 102, 241, 0.08));
          border: 2px solid rgba(124, 58, 237, 0.15);
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }

        .cta-section h3 {
          color: #0f172a;
          font-size: 2.2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .cta-section p {
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .cta-button {
          padding: 1.1rem 2.8rem;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(124, 58, 237, 0.35);
        }

        .process-cta {
          margin-top: 5rem;
        }

        .cta-content {
          text-align: center;
          padding: 4rem 3rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%);
          border-radius: 28px;
          border: 2px solid rgba(99, 102, 241, 0.15);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.1);
        }

        .cta-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .cta-text {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: #111827;
          letter-spacing: -0.5px;
          line-height: 1.25;
        }

        .cta-subtext {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .cta-button {
          padding: 1.125rem 3rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.875rem;
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.35);
          letter-spacing: 0.3px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(99, 102, 241, 0.45);
        }

        .button-arrow {
          transition: transform 0.4s ease;
          font-size: 1.25rem;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(6px);
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.938rem;
          color: #4b5563;
          font-weight: 500;
        }

        .feature-item svg {
          color: #10b981;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .cta-text {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .divisions-section {
            padding: 3rem 1rem;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .divisions-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .expanded-content {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
          }

          .cta-section h3 {
            font-size: 1.6rem;
          }

          .card-header {
            gap: 1rem;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
            font-size: 2.2rem;
          }
        }

        /* Protect Modal Styling */
        .modal-backdrop,
        .modal-backdrop * {
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important; 
        }

        .modal-backdrop {
          z-index: 9999 !important;
        }

        .modal-container {
          z-index: 9999 !important;
        }

        .modal {
          width: 100% !important;
          max-width: 550px !important;
          padding: 2.5rem !important;
        }
      `})]})}function gh(){const N=[{number:"50+",label:"AI Projects Delivered"},{number:"30+",label:"Enterprise Clients"},{number:"$10M+",label:"ROI Generated"},{number:"5 yrs",label:"Industry Experience"}],q=[{icon:"🎯",title:"Results-Driven",description:"We measure success by your business outcomes, not by project completion."},{icon:"🚀",title:"Innovation First",description:"Constantly exploring cutting-edge AI technologies to give you competitive advantage."},{icon:"🤝",title:"Partnership Mindset",description:"Your success is our success. We're invested in your long-term growth."},{icon:"💡",title:"Transparency",description:"Clear communication, no hidden costs, and honest recommendations always."}];return c.jsxs("section",{className:"about-us-section",children:[c.jsxs("div",{className:"animated-background",children:[c.jsx("div",{className:"gradient-blob blob-1"}),c.jsx("div",{className:"gradient-blob blob-2"}),c.jsx("div",{className:"gradient-blob blob-3"})]}),c.jsxs("div",{className:"container",children:[c.jsx("div",{className:"about-hero",children:c.jsxs("div",{className:"hero-content",children:[c.jsx("h1",{children:"About GenX pro AI"}),c.jsx("p",{className:"hero-subtitle",children:"We're not just another AI consultancy. We're builders, problem-solvers, and your transformation partner."}),c.jsx("div",{className:"hero-description",children:c.jsx("p",{children:"Founded with a simple mission: make enterprise-grade AI accessible and practical for businesses of all sizes. We believe AI should work for you, not the other way around."})})]})}),c.jsx("div",{className:"stats-grid",children:N.map((A,m)=>c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-number",children:A.number}),c.jsx("div",{className:"stat-label",children:A.label})]},m))}),c.jsxs("div",{className:"story-section",children:[c.jsxs("div",{className:"story-content",children:[c.jsx("h2",{children:"Our Story"}),c.jsx("p",{children:"GenX pro AI was born from frustration. We watched brilliant businesses struggle with AI adoption—not because the technology wasn't powerful, but because it wasn't accessible or practical for real-world operations."}),c.jsx("p",{children:"Our founding team spent years implementing AI in enterprise environments. We saw what worked and what didn't. We learned that successful AI isn't about the fanciest models—it's about solving real business problems with practical, scalable solutions."}),c.jsx("p",{children:"That's why we built GenX pro AI. To bridge the gap between cutting-edge AI and practical business needs. To transform how companies operate. To make AI a competitive advantage, not a complicated experiment."})]}),c.jsx("div",{className:"story-highlight",children:c.jsxs("div",{className:"highlight-box",children:[c.jsx("div",{className:"highlight-icon",children:"💼"}),c.jsx("h3",{children:"Our Approach"}),c.jsx("p",{children:"Audit → Strategy → Implementation → Optimization. Simple. Proven. Effective."})]})})]}),c.jsxs("div",{className:"values-section",children:[c.jsx("h2",{children:"Our Core Values"}),c.jsx("p",{className:"values-intro",children:"These aren't just words on a wall. They guide every decision we make."}),c.jsx("div",{className:"values-grid",children:q.map((A,m)=>c.jsxs("div",{className:"value-card",children:[c.jsx("div",{className:"value-icon",children:A.icon}),c.jsx("h3",{children:A.title}),c.jsx("p",{children:A.description})]},m))})]})]}),c.jsx("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-us-section {
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #fafbff 0%, #f5f7ff 50%, #f0f4ff 100%);
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: float 25s infinite ease-in-out;
        }

        .blob-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          top: -200px;
          left: -200px;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          bottom: 0;
          right: -150px;
          animation-delay: -8s;
        }

        .blob-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #10b981);
          top: 50%;
          left: 5%;
          animation-delay: -16s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Hero Section */
        .about-hero {
          text-align: center;
          margin-bottom: 5rem;
          animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .about-hero h1 {
          font-size: 3.5rem;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #475569;
          margin-bottom: 2rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .hero-description {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-description p {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.8;
          font-weight: 500;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
          padding: 3rem;
          background: white;
          border-radius: 24px;
          border: 1px solid rgba(124, 58, 237, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .stat-card {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: #475569;
          font-weight: 600;
        }

        /* Story Section */
        .story-section {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 6rem;
          padding: 3rem;
          background: white;
          border-radius: 24px;
          border: 1px solid rgba(124, 58, 237, 0.1);
        }

        .story-section h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .story-section p {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .story-section p:last-child {
          margin-bottom: 0;
        }

        .highlight-box {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 2px solid rgba(124, 58, 237, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .highlight-box h3 {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .highlight-box p {
          font-size: 1rem;
          color: #475569;
          margin-bottom: 0;
          font-weight: 500;
        }

        /* Values Section */
        .values-section {
          margin-bottom: 6rem;
        }

        .values-section h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
          text-align: center;
        }

        .values-intro {
          font-size: 1.1rem;
          color: #475569;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: white;
          border: 1.5px solid rgba(124, 58, 237, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .value-card h3 {
          font-size: 1.3rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .value-card p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          font-weight: 500;
        }

        /* Team Section */
        .team-section {
          margin-bottom: 6rem;
        }

        .team-section h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1rem;
          font-weight: 700;
          text-align: center;
        }

        .team-intro {
          font-size: 1.1rem;
          color: #475569;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .team-card {
          background: white;
          border: 1.5px solid rgba(124, 58, 237, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .team-card h3 {
          font-size: 1.2rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .team-experience {
          font-size: 0.9rem;
          color: #7c3aed;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .team-focus {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(99, 102, 241, 0.1));
          border: 2px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2.2rem;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .cta-section p {
          font-size: 1.1rem;
          color: #475569;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .cta-button {
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(124, 58, 237, 0.35);
        }

        @media (max-width: 768px) {
          .about-us-section {
            padding: 4rem 1.5rem;
          }

          .about-hero h1 {
            font-size: 2.3rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 2rem;
            margin-bottom: 4rem;
          }

          .story-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
            margin-bottom: 4rem;
          }

          .story-section h2 {
            font-size: 2rem;
          }

          .values-section h2,
          .team-section h2 {
            font-size: 2rem;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
          }

          .cta-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .about-hero h1 {
            font-size: 1.8rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `})]})}function ph(){const[N,q]=je.useState(!1),A=[{title:"Strategic Discovery",description:"We begin with an in-depth analysis of your business ecosystem, identifying high-impact opportunities where AI can drive measurable transformation and competitive advantage.",icon:"🔍",highlight:"Complimentary Consultation",metric:"2-3 weeks",deliverable:"Opportunity Assessment Report"},{title:"Intelligence Architecture",description:"Our experts design a comprehensive AI blueprint tailored to your objectives, ensuring alignment with your long-term vision and quantifiable ROI milestones.",icon:"🎯",highlight:"Tailored Strategy",metric:"1-2 weeks",deliverable:"AI Roadmap & Business Case"},{title:"Solution Engineering",description:"We architect enterprise-grade systems with cutting-edge technology, prioritizing scalability, security, and seamless integration with your existing infrastructure.",icon:"🎨",highlight:"Enterprise Architecture",metric:"2-4 weeks",deliverable:"Technical Specifications"},{title:"Precision Development",description:"Our agile methodology ensures rapid, iterative delivery with continuous stakeholder engagement, maintaining zero disruption to your operational workflows.",icon:"⚡",highlight:"Agile Sprints",metric:"6-12 weeks",deliverable:"Production-Ready System"},{title:"Launch Excellence",description:"We orchestrate seamless deployment with comprehensive team enablement, ensuring your organization is fully equipped to leverage your new AI capabilities.",icon:"🚀",highlight:"Zero-Friction Launch",metric:"1-2 weeks",deliverable:"Deployment Package"},{title:"Continuous Partnership",description:"Beyond deployment, we provide proactive monitoring, continuous optimization, and strategic consultation to ensure sustained value and competitive edge.",icon:"🛡️",highlight:"Elite Support",metric:"Ongoing",deliverable:"Performance Analytics"}];return c.jsxs("section",{id:"process",className:"process-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("span",{className:"section-label",children:"Our Methodology"}),c.jsxs("h2",{className:"section-title",children:["A Proven Framework for ",c.jsx("span",{className:"text-gradient",children:"Digital Excellence"})]}),c.jsx("p",{className:"section-subtitle",children:"From strategic vision to measurable impact—our systematic approach transforms ambition into achievement, delivering enterprise solutions that drive lasting competitive advantage"})]}),c.jsxs("div",{className:"process-timeline",children:[c.jsx("div",{className:"timeline-line"}),A.map((m,M)=>c.jsxs("div",{className:"process-step fade-in-up",style:{animationDelay:`${M*.15}s`},children:[c.jsxs("div",{className:"step-wrapper",children:[c.jsxs("div",{className:"step-indicator",children:[c.jsx("div",{className:"step-number",children:M+1}),c.jsx("div",{className:"step-icon",children:m.icon})]}),c.jsxs("div",{className:"step-card glass-card",children:[c.jsx("div",{className:"step-badge",children:m.highlight}),c.jsx("h3",{className:"step-title",children:m.title}),c.jsx("p",{className:"step-description",children:m.description}),c.jsxs("div",{className:"step-metrics",children:[c.jsxs("div",{className:"metric-item",children:[c.jsxs("svg",{className:"metric-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),c.jsx("path",{d:"M12 6v6l4 2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),c.jsx("span",{children:m.metric})]}),c.jsxs("div",{className:"metric-item",children:[c.jsx("svg",{className:"metric-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:m.deliverable})]})]}),c.jsx("div",{className:"step-footer",children:c.jsxs("span",{className:"step-duration",children:["Phase ",M+1," of ",A.length]})})]})]}),M<A.length-1&&c.jsx("div",{className:"step-connector",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 12h14m-7-7l7 7-7 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]},M))]}),c.jsx("div",{className:"process-cta",children:c.jsxs("div",{className:"cta-content",children:[c.jsx("div",{className:"cta-badge",children:"Limited Availability"}),c.jsx("p",{className:"cta-text",children:"Ready to Transform Your Business Vision into Reality?"}),c.jsx("p",{className:"cta-subtext",children:"Join industry leaders who trust us to deliver exceptional results"}),c.jsxs("button",{className:"cta-button",onClick:()=>q(!0),children:["Schedule Strategic Consultation",c.jsx("span",{className:"button-arrow",children:"→"})]}),c.jsxs("div",{className:"cta-features",children:[c.jsxs("div",{className:"feature-item",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 13l4 4L19 7",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:"No obligations"})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 13l4 4L19 7",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:"Confidential discussion"})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 13l4 4L19 7",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:"Actionable insights"})]})]})]})})]}),N&&c.jsx(mh,{onClose:()=>q(!1)}),c.jsx("style",{jsx:!0,children:`
                .process-section {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #ffffff 100%);
                    padding: 6rem 1.5rem;
                }

                .process-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 20s ease-in-out infinite;
                }

                .process-section::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    right: -5%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 25s ease-in-out infinite reverse;
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translate(0, 0) rotate(0deg); 
                    }
                    33% { 
                        transform: translate(30px, -30px) rotate(5deg); 
                    }
                    66% { 
                        transform: translate(-20px, 20px) rotate(-5deg); 
                    }
                }

                .container {
                    position: relative;
                    z-index: 1;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 5rem;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .section-label {
                    display: inline-block;
                    padding: 0.625rem 1.5rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
                    border: 1.5px solid rgba(99, 102, 241, 0.25);
                    border-radius: 50px;
                    font-size: 0.813rem;
                    font-weight: 700;
                    color: #6366f1;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 1.5rem;
                    position: relative;
                    overflow: hidden;
                }

                .section-label::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% { 
                        left: -100%; 
                    }
                    100% { 
                        left: 100%; 
                    }
                }

                .section-title {
                    font-size: 2.75rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.15;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    color: #111827;
                }

                .text-gradient {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .section-subtitle {
                    font-size: 1.188rem;
                    color: #4b5563;
                    line-height: 1.75;
                    font-weight: 400;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .process-timeline {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    padding: 2rem 0;
                }

                .timeline-line {
                    display: none;
                }

                .process-step {
                    position: relative;
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .step-wrapper {
                    display: flex;
                    gap: 2rem;
                    align-items: flex-start;
                }

                .step-indicator {
                    flex-shrink: 0;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .step-number {
                    width: 64px;
                    height: 64px;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 1.5rem;
                    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.35), 0 0 0 6px rgba(99, 102, 241, 0.08);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 2;
                }

                .step-number::after {
                    content: '';
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    border: 2px solid rgba(99, 102, 241, 0.15);
                    animation: ripple 3s ease-out infinite;
                }

                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                .step-icon {
                    font-size: 2.25rem;
                    filter: grayscale(30%) brightness(1.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .step-card {
                    flex: 1;
                    padding: 2.5rem;
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1.5px solid rgba(99, 102, 241, 0.12);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
                }

                .step-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .step-card:hover::before {
                    transform: scaleX(1);
                }

                .step-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.15);
                    background: rgba(255, 255, 255, 1);
                    border-color: rgba(99, 102, 241, 0.25);
                }

                .process-step:hover .step-number {
                    transform: scale(1.15) rotate(8deg);
                    box-shadow: 0 15px 50px rgba(99, 102, 241, 0.45), 0 0 0 8px rgba(99, 102, 241, 0.12);
                }

                .process-step:hover .step-icon {
                    transform: scale(1.2) rotate(-5deg);
                    filter: grayscale(0%) brightness(1.2);
                }

                .step-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
                    border: 1.5px solid rgba(99, 102, 241, 0.2);
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #6366f1;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 1.25rem;
                    transition: all 0.3s ease;
                }

                .step-title {
                    font-size: 1.625rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: #111827;
                    line-height: 1.25;
                    letter-spacing: -0.3px;
                }

                .step-description {
                    font-size: 1.0625rem;
                    line-height: 1.8;
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                    font-weight: 400;
                }

                .step-metrics {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                    padding: 1.25rem;
                    background: rgba(99, 102, 241, 0.03);
                    border-radius: 12px;
                    border: 1px solid rgba(99, 102, 241, 0.08);
                }

                .metric-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.938rem;
                    color: #374151;
                    font-weight: 500;
                }

                .metric-icon {
                    color: #6366f1;
                    flex-shrink: 0;
                }

                .step-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1.25rem;
                    border-top: 1.5px solid rgba(99, 102, 241, 0.1);
                }

                .step-duration {
                    font-size: 0.875rem;
                    color: #6b7280;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .step-connector {
                    display: none;
                }

                .process-cta {
                    margin-top: 5rem;
                }

                .cta-content {
                    text-align: center;
                    padding: 4rem 3rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%);
                    border-radius: 28px;
                    border: 2px solid rgba(99, 102, 241, 0.15);
                    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.1);
                }

                .cta-badge {
                    display: inline-block;
                    padding: 0.5rem 1.25rem;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: white;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
                }

                .cta-text {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    color: #111827;
                    letter-spacing: -0.5px;
                    line-height: 1.25;
                }

                .cta-subtext {
                    font-size: 1.125rem;
                    color: #6b7280;
                    margin-bottom: 2rem;
                    font-weight: 400;
                }

                .cta-button {
                    padding: 1.125rem 3rem;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-size: 1.125rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.875rem;
                    transition: all 0.4s ease;
                    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.35);
                    letter-spacing: 0.3px;
                }

                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.45);
                }

                .button-arrow {
                    transition: transform 0.4s ease;
                    font-size: 1.25rem;
                }

                .cta-button:hover .button-arrow {
                    transform: translateX(6px);
                }

                .cta-features {
                    display: flex;
                    justify-content: center;
                    gap: 2.5rem;
                    margin-top: 2rem;
                    flex-wrap: wrap;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    font-size: 0.938rem;
                    color: #4b5563;
                    font-weight: 500;
                }

                .feature-item svg {
                    color: #10b981;
                    flex-shrink: 0;
                }

                @media (min-width: 768px) {
                    .section-title {
                        font-size: 3.5rem;
                    }

                    .step-card {
                        padding: 3rem;
                    }

                    .step-metrics {
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .cta-text {
                        font-size: 2.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .process-timeline {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                        gap: 3rem;
                        padding: 3rem 0;
                    }

                    .timeline-line {
                        display: block;
                        position: absolute;
                        top: 100px;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.5) 30%, rgba(139, 92, 246, 0.5) 70%, rgba(236, 72, 153, 0.15) 100%);
                        z-index: 0;
                    }

                    .step-wrapper {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .step-indicator {
                        margin-bottom: 1.5rem;
                    }

                    .step-card {
                        width: 100%;
                    }

                    .step-metrics {
                        flex-direction: column;
                    }

                    .step-connector {
                        display: block;
                        position: absolute;
                        right: -3rem;
                        top: 100px;
                        color: #6366f1;
                        z-index: 1;
                        animation: pulse 2.5s ease-in-out infinite;
                    }

                    @keyframes pulse {
                        0%, 100% {
                            opacity: 0.4;
                            transform: translateX(0);
                        }
                        50% {
                            opacity: 1;
                            transform: translateX(6px);
                        }
                    }

                    .process-step:last-child .step-connector {
                        display: none;
                    }
                }
            `})]})}function bh(){const N=new Date().getFullYear();return c.jsxs(c.Fragment,{children:[c.jsx("footer",{className:"footer",children:c.jsxs("div",{className:"footer-container",children:[c.jsxs("div",{className:"footer-main",children:[c.jsxs("div",{className:"footer-brand-section",children:[c.jsxs("div",{className:"brand-logo",children:[c.jsx("span",{className:"brand-name",children:"GenX pro"}),c.jsx("span",{className:"brand-ai",children:".AI"})]}),c.jsx("p",{className:"brand-tagline",children:"Intelligent Automation for the Future of Business"}),c.jsx("p",{className:"brand-description",children:"Empowering enterprises with cutting-edge AI solutions that drive innovation, efficiency, and sustainable growth."}),c.jsxs("div",{className:"social-links",children:[c.jsx("a",{href:"#",className:"social-link","aria-label":"LinkedIn",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"Twitter",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"GitHub",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]})]}),c.jsxs("div",{className:"footer-links-grid",children:[c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{className:"column-title",children:"Solutions"}),c.jsx("a",{href:"#divisions",className:"footer-link",children:"AI Automation"}),c.jsx("a",{href:"#divisions",className:"footer-link",children:"Custom Development"}),c.jsx("a",{href:"#divisions",className:"footer-link",children:"Integration Services"}),c.jsx("a",{href:"#divisions",className:"footer-link",children:"Consulting"})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{className:"column-title",children:"Company"}),c.jsx("a",{href:"#overview",className:"footer-link",children:"About Us"}),c.jsx("a",{href:"#why-us",className:"footer-link",children:"Why Choose Us"}),c.jsx("a",{href:"#process",className:"footer-link",children:"Our Process"}),c.jsx("a",{href:"#",className:"footer-link",children:"Case Studies"})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{className:"column-title",children:"Contact"}),c.jsx("a",{href:"#",className:"footer-link",children:"Get Started"}),c.jsx("a",{href:"#",className:"footer-link",children:"Schedule Demo"}),c.jsx("a",{href:"mailto:info@genxproai.com",className:"footer-link",children:"info@genxproai.com"}),c.jsx("a",{href:"tel:+919327178988",className:"footer-link",children:"+91 9327178988"})]})]})]}),c.jsxs("div",{className:"footer-newsletter",children:[c.jsxs("div",{className:"newsletter-content",children:[c.jsx("h4",{className:"newsletter-title",children:"Stay Updated"}),c.jsx("p",{className:"newsletter-description",children:"Get the latest insights on AI automation and business innovation"})]}),c.jsxs("div",{className:"newsletter-form",children:[c.jsx("input",{type:"email",placeholder:"Enter your email",className:"newsletter-input"}),c.jsxs("button",{className:"newsletter-button",children:["Subscribe",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 12h14m-7-7l7 7-7 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),c.jsx("div",{className:"footer-bottom",children:c.jsxs("div",{className:"footer-bottom-content",children:[c.jsxs("p",{className:"copyright",children:["© ",N," GenX pro AI. All rights reserved."]}),c.jsxs("div",{className:"legal-links",children:[c.jsx("a",{href:"#",className:"legal-link",children:"Privacy Policy"}),c.jsx("span",{className:"separator",children:"•"}),c.jsx("a",{href:"#",className:"legal-link",children:"Terms of Service"}),c.jsx("span",{className:"separator",children:"•"}),c.jsx("a",{href:"#",className:"legal-link",children:"Cookie Policy"})]})]})})]})}),c.jsx("style",{children:`
                .footer {
                    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
                    border-top: 1px solid rgba(99, 102, 241, 0.1);
                    padding: 5rem 0 0;
                }

                .footer-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .footer-main {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    padding-bottom: 4rem;
                    border-bottom: 1px solid rgba(99, 102, 241, 0.1);
                }

                @media (min-width: 768px) {
                    .footer-main {
                        grid-template-columns: 1.5fr 2fr;
                        gap: 4rem;
                    }
                }

                .footer-brand-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .brand-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 1.75rem;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    margin-bottom: 0.5rem;
                }

                .brand-name {
                    color: #111827;
                }

                .brand-ai {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .brand-tagline {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0;
                }

                .brand-description {
                    font-size: 0.938rem;
                    line-height: 1.7;
                    color: #6b7280;
                    margin: 0;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: rgba(99, 102, 241, 0.1);
                    color: #6366f1;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    transform: translateY(-2px);
                }

                .footer-links-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2.5rem;
                }

                @media (min-width: 640px) {
                    .footer-links-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                .footer-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .column-title {
                    font-size: 0.938rem;
                    font-weight: 700;
                    color: #111827;
                    margin: 0 0 0.5rem 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .footer-link {
                    font-size: 0.938rem;
                    color: #6b7280;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    font-weight: 500;
                }

                .footer-link:hover {
                    color: #6366f1;
                    transform: translateX(3px);
                }

                .footer-newsletter {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    padding: 3rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
                    border-radius: 24px;
                    border: 1.5px solid rgba(99, 102, 241, 0.1);
                    margin-bottom: 3rem;
                }

                @media (min-width: 768px) {
                    .footer-newsletter {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                }

                .newsletter-content {
                    flex: 1;
                }

                .newsletter-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #111827;
                    margin: 0 0 0.5rem 0;
                }

                .newsletter-description {
                    font-size: 0.938rem;
                    color: #6b7280;
                    margin: 0;
                }

                .newsletter-form {
                    display: flex;
                    gap: 0.75rem;
                    flex: 1;
                    max-width: 400px;
                }

                .newsletter-input {
                    flex: 1;
                    padding: 0.875rem 1.25rem;
                    border: 2px solid #e5e7eb;
                    border-radius: 12px;
                    font-size: 0.938rem;
                    transition: all 0.2s ease;
                    background: white;
                }

                .newsletter-input:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                }

                .newsletter-button {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.75rem;
                    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.938rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .newsletter-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
                }

                .newsletter-button svg {
                    transition: transform 0.3s ease;
                }

                .newsletter-button:hover svg {
                    transform: translateX(3px);
                }

                .footer-bottom {
                    padding: 2rem 0;
                }

                .footer-bottom-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }

                @media (min-width: 768px) {
                    .footer-bottom-content {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }

                .copyright {
                    margin: 0;
                    font-size: 0.875rem;
                    color: #6b7280;
                    font-weight: 500;
                }

                .legal-links {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .legal-link {
                    font-size: 0.875rem;
                    color: #6b7280;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    font-weight: 500;
                }

                .legal-link:hover {
                    color: #6366f1;
                }

                .separator {
                    color: #d1d5db;
                    font-size: 0.875rem;
                }

                @media (max-width: 640px) {
                    .newsletter-form {
                        flex-direction: column;
                        max-width: 100%;
                    }

                    .newsletter-button {
                        justify-content: center;
                    }
                }
            `})]})}function vh(){const[N,q]=je.useState(!1),A=je.useCallback(()=>q(!0),[]),m=je.useCallback(()=>q(!1),[]);return je.useEffect(()=>{const M=()=>A();window.addEventListener("openContact",M);const R=()=>{document.documentElement.style.scrollBehavior="smooth"};return window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("openContact",M),window.removeEventListener("scroll",R)}},[A]),c.jsxs("div",{className:"app",children:[c.jsx(nh,{onOpenContact:A}),c.jsxs("main",{children:[c.jsx(rh,{onOpenContact:A}),c.jsx("div",{id:"overview",children:c.jsx(dh,{})}),c.jsx("div",{id:"divisions",children:c.jsx(hh,{})}),c.jsx("div",{id:"about-us",children:c.jsx(gh,{})}),c.jsx("div",{id:"process",children:c.jsx(ph,{})})]}),c.jsx(bh,{}),c.jsx(fh,{visible:N,onClose:m})]})}ah.createRoot(document.getElementById("root")).render(c.jsx(je.StrictMode,{children:c.jsx(vh,{})}));export{ch as _,c as j,je as r};
