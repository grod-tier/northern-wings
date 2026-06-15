(function(){"use strict";var kj={env:{NODE_ENV:"development"}};function pb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Xf={exports:{}},Hl={exports:{}};Hl.exports;var gy;function _b(){return gy||(gy=1,(function(i,l){/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var c="18.3.1",_=Symbol.for("react.element"),y=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),ke=Symbol.iterator,he="@@iterator";function Le(p){if(p===null||typeof p!="object")return null;var C=ke&&p[ke]||p[he];return typeof C=="function"?C:null}var Ie={current:null},G={transition:null},de={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},Ae={current:null},ae={},mt=null;function ot(p){mt=p}ae.setExtraStackFrame=function(p){mt=p},ae.getCurrentStack=null,ae.getStackAddendum=function(){var p="";mt&&(p+=mt);var C=ae.getCurrentStack;return C&&(p+=C()||""),p};var nt=!1,Pe=!1,ct=!1,Oe=!1,Qe=!1,Ge={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:G,ReactCurrentOwner:Ae};Ge.ReactDebugCurrentFrame=ae,Ge.ReactCurrentActQueue=de;function Ce(p){{for(var C=arguments.length,W=new Array(C>1?C-1:0),q=1;q<C;q++)W[q-1]=arguments[q];fe("warn",p,W)}}function Ke(p){{for(var C=arguments.length,W=new Array(C>1?C-1:0),q=1;q<C;q++)W[q-1]=arguments[q];fe("error",p,W)}}function fe(p,C,W){{var q=Ge.ReactDebugCurrentFrame,ye=q.getStackAddendum();ye!==""&&(C+="%s",W=W.concat([ye]));var ht=W.map(function(Be){return String(Be)});ht.unshift("Warning: "+C),Function.prototype.apply.call(console[p],console,ht)}}var it={};function Tt(p,C){{var W=p.constructor,q=W&&(W.displayName||W.name)||"ReactClass",ye=q+"."+C;if(it[ye])return;Ke("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",C,q),it[ye]=!0}}var Gt={isMounted:function(p){return!1},enqueueForceUpdate:function(p,C,W){Tt(p,"forceUpdate")},enqueueReplaceState:function(p,C,W,q){Tt(p,"replaceState")},enqueueSetState:function(p,C,W,q){Tt(p,"setState")}},tn=Object.assign,wn={};Object.freeze(wn);function Xn(p,C,W){this.props=p,this.context=C,this.refs=wn,this.updater=W||Gt}Xn.prototype.isReactComponent={},Xn.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},Xn.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};{var tr={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},mr=function(p,C){Object.defineProperty(Xn.prototype,p,{get:function(){Ce("%s(...) is deprecated in plain JavaScript React classes. %s",C[0],C[1])}})};for(var Sn in tr)tr.hasOwnProperty(Sn)&&mr(Sn,tr[Sn])}function Gn(){}Gn.prototype=Xn.prototype;function Un(p,C,W){this.props=p,this.context=C,this.refs=wn,this.updater=W||Gt}var Fn=Un.prototype=new Gn;Fn.constructor=Un,tn(Fn,Xn.prototype),Fn.isPureReactComponent=!0;function mn(){var p={current:null};return Object.seal(p),p}var Xt=Array.isArray;function nn(p){return Xt(p)}function ln(p){{var C=typeof Symbol=="function"&&Symbol.toStringTag,W=C&&p[Symbol.toStringTag]||p.constructor.name||"Object";return W}}function Ln(p){try{return jn(p),!1}catch{return!0}}function jn(p){return""+p}function lr(p){if(Ln(p))return Ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ln(p)),jn(p)}function K(p,C,W){var q=p.displayName;if(q)return q;var ye=C.displayName||C.name||"";return ye!==""?W+"("+ye+")":W}function Ue(p){return p.displayName||"Context"}function lt(p){if(p==null)return null;if(typeof p.tag=="number"&&Ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof p=="function")return p.displayName||p.name||null;if(typeof p=="string")return p;switch(p){case m:return"Fragment";case y:return"Portal";case z:return"Profiler";case f:return"StrictMode";case M:return"Suspense";case A:return"SuspenseList"}if(typeof p=="object")switch(p.$$typeof){case P:var C=p;return Ue(C)+".Consumer";case E:var W=p;return Ue(W._context)+".Provider";case O:return K(p,p.render,"ForwardRef");case H:var q=p.displayName||null;return q!==null?q:lt(p.type)||"Memo";case I:{var ye=p,ht=ye._payload,Be=ye._init;try{return lt(Be(ht))}catch{return null}}}return null}var Ye=Object.prototype.hasOwnProperty,vt={key:!0,ref:!0,__self:!0,__source:!0},ft,Dt,Je;Je={};function Ct(p){if(Ye.call(p,"ref")){var C=Object.getOwnPropertyDescriptor(p,"ref").get;if(C&&C.isReactWarning)return!1}return p.ref!==void 0}function en(p){if(Ye.call(p,"key")){var C=Object.getOwnPropertyDescriptor(p,"key").get;if(C&&C.isReactWarning)return!1}return p.key!==void 0}function Ve(p,C){var W=function(){ft||(ft=!0,Ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",C))};W.isReactWarning=!0,Object.defineProperty(p,"key",{get:W,configurable:!0})}function $(p,C){var W=function(){Dt||(Dt=!0,Ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",C))};W.isReactWarning=!0,Object.defineProperty(p,"ref",{get:W,configurable:!0})}function j(p){if(typeof p.ref=="string"&&Ae.current&&p.__self&&Ae.current.stateNode!==p.__self){var C=lt(Ae.current.type);Je[C]||(Ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C,p.ref),Je[C]=!0)}}var B=function(p,C,W,q,ye,ht,Be){var kt={$$typeof:_,type:p,key:C,ref:W,props:Be,_owner:ht};return kt._store={},Object.defineProperty(kt._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(kt,"_self",{configurable:!1,enumerable:!1,writable:!1,value:q}),Object.defineProperty(kt,"_source",{configurable:!1,enumerable:!1,writable:!1,value:ye}),Object.freeze&&(Object.freeze(kt.props),Object.freeze(kt)),kt};function V(p,C,W){var q,ye={},ht=null,Be=null,kt=null,Yt=null;if(C!=null){Ct(C)&&(Be=C.ref,j(C)),en(C)&&(lr(C.key),ht=""+C.key),kt=C.__self===void 0?null:C.__self,Yt=C.__source===void 0?null:C.__source;for(q in C)Ye.call(C,q)&&!vt.hasOwnProperty(q)&&(ye[q]=C[q])}var hn=arguments.length-2;if(hn===1)ye.children=W;else if(hn>1){for(var Cn=Array(hn),En=0;En<hn;En++)Cn[En]=arguments[En+2];Object.freeze&&Object.freeze(Cn),ye.children=Cn}if(p&&p.defaultProps){var Nt=p.defaultProps;for(q in Nt)ye[q]===void 0&&(ye[q]=Nt[q])}if(ht||Be){var Te=typeof p=="function"?p.displayName||p.name||"Unknown":p;ht&&Ve(ye,Te),Be&&$(ye,Te)}return B(p,ht,Be,kt,Yt,Ae.current,ye)}function ge(p,C){var W=B(p.type,C,p.ref,p._self,p._source,p._owner,p.props);return W}function ve(p,C,W){if(p==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var q,ye=tn({},p.props),ht=p.key,Be=p.ref,kt=p._self,Yt=p._source,hn=p._owner;if(C!=null){Ct(C)&&(Be=C.ref,hn=Ae.current),en(C)&&(lr(C.key),ht=""+C.key);var Cn;p.type&&p.type.defaultProps&&(Cn=p.type.defaultProps);for(q in C)Ye.call(C,q)&&!vt.hasOwnProperty(q)&&(C[q]===void 0&&Cn!==void 0?ye[q]=Cn[q]:ye[q]=C[q])}var En=arguments.length-2;if(En===1)ye.children=W;else if(En>1){for(var Nt=Array(En),Te=0;Te<En;Te++)Nt[Te]=arguments[Te+2];ye.children=Nt}return B(p.type,ht,Be,kt,Yt,hn,ye)}function oe(p){return typeof p=="object"&&p!==null&&p.$$typeof===_}var Ze=".",st=":";function rt(p){var C=/[=:]/g,W={"=":"=0",":":"=2"},q=p.replace(C,function(ye){return W[ye]});return"$"+q}var Ee=!1,_e=/\/+/g;function At(p){return p.replace(_e,"$&/")}function $t(p,C){return typeof p=="object"&&p!==null&&p.key!=null?(lr(p.key),rt(""+p.key)):C.toString(36)}function fn(p,C,W,q,ye){var ht=typeof p;(ht==="undefined"||ht==="boolean")&&(p=null);var Be=!1;if(p===null)Be=!0;else switch(ht){case"string":case"number":Be=!0;break;case"object":switch(p.$$typeof){case _:case y:Be=!0}}if(Be){var kt=p,Yt=ye(kt),hn=q===""?Ze+$t(kt,0):q;if(nn(Yt)){var Cn="";hn!=null&&(Cn=At(hn)+"/"),fn(Yt,C,Cn,"",function(wi){return wi})}else Yt!=null&&(oe(Yt)&&(Yt.key&&(!kt||kt.key!==Yt.key)&&lr(Yt.key),Yt=ge(Yt,W+(Yt.key&&(!kt||kt.key!==Yt.key)?At(""+Yt.key)+"/":"")+hn)),C.push(Yt));return 1}var En,Nt,Te=0,qn=q===""?Ze:q+st;if(nn(p))for(var Do=0;Do<p.length;Do++)En=p[Do],Nt=qn+$t(En,Do),Te+=fn(En,C,W,Nt,ye);else{var rs=Le(p);if(typeof rs=="function"){var Sa=p;rs===Sa.entries&&(Ee||Ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ee=!0);for(var Wa=rs.call(Sa),Lo,Ws=0;!(Lo=Wa.next()).done;)En=Lo.value,Nt=qn+$t(En,Ws++),Te+=fn(En,C,W,Nt,ye)}else if(ht==="object"){var as=String(p);throw new Error("Objects are not valid as a React child (found: "+(as==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":as)+"). If you meant to render a collection of children, use an array instead.")}}return Te}function Re(p,C,W){if(p==null)return p;var q=[],ye=0;return fn(p,q,"","",function(ht){return C.call(W,ht,ye++)}),q}function Ft(p){var C=0;return Re(p,function(){C++}),C}function Lt(p,C,W){Re(p,function(){C.apply(this,arguments)},W)}function Et(p){return Re(p,function(C){return C})||[]}function On(p){if(!oe(p))throw new Error("React.Children.only expected to receive a single React element child.");return p}function et(p){var C={$$typeof:P,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};C.Provider={$$typeof:E,_context:C};var W=!1,q=!1,ye=!1;{var ht={$$typeof:P,_context:C};Object.defineProperties(ht,{Provider:{get:function(){return q||(q=!0,Ke("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),C.Provider},set:function(Be){C.Provider=Be}},_currentValue:{get:function(){return C._currentValue},set:function(Be){C._currentValue=Be}},_currentValue2:{get:function(){return C._currentValue2},set:function(Be){C._currentValue2=Be}},_threadCount:{get:function(){return C._threadCount},set:function(Be){C._threadCount=Be}},Consumer:{get:function(){return W||(W=!0,Ke("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),C.Consumer}},displayName:{get:function(){return C.displayName},set:function(Be){ye||(Ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",Be),ye=!0)}}}),C.Consumer=ht}return C._currentRenderer=null,C._currentRenderer2=null,C}var Ot=-1,un=0,kn=1,Nn=2;function ha(p){if(p._status===Ot){var C=p._result,W=C();if(W.then(function(ht){if(p._status===un||p._status===Ot){var Be=p;Be._status=kn,Be._result=ht}},function(ht){if(p._status===un||p._status===Ot){var Be=p;Be._status=Nn,Be._result=ht}}),p._status===Ot){var q=p;q._status=un,q._result=W}}if(p._status===kn){var ye=p._result;return ye===void 0&&Ke(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,ye),"default"in ye||Ke(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,ye),ye.default}else throw p._result}function Or(p){var C={_status:Ot,_result:p},W={$$typeof:I,_payload:C,_init:ha};{var q,ye;Object.defineProperties(W,{defaultProps:{configurable:!0,get:function(){return q},set:function(ht){Ke("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),q=ht,Object.defineProperty(W,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return ye},set:function(ht){Ke("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),ye=ht,Object.defineProperty(W,"propTypes",{enumerable:!0})}}})}return W}function ur(p){p!=null&&p.$$typeof===H?Ke("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof p!="function"?Ke("forwardRef requires a render function but was given %s.",p===null?"null":typeof p):p.length!==0&&p.length!==2&&Ke("forwardRef render functions accept exactly two parameters: props and ref. %s",p.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),p!=null&&(p.defaultProps!=null||p.propTypes!=null)&&Ke("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var C={$$typeof:O,render:p};{var W;Object.defineProperty(C,"displayName",{enumerable:!1,configurable:!0,get:function(){return W},set:function(q){W=q,!p.name&&!p.displayName&&(p.displayName=q)}})}return C}var k;k=Symbol.for("react.module.reference");function re(p){return!!(typeof p=="string"||typeof p=="function"||p===m||p===z||Qe||p===f||p===M||p===A||Oe||p===le||nt||Pe||ct||typeof p=="object"&&p!==null&&(p.$$typeof===I||p.$$typeof===H||p.$$typeof===E||p.$$typeof===P||p.$$typeof===O||p.$$typeof===k||p.getModuleId!==void 0))}function xe(p,C){re(p)||Ke("memo: The first argument must be a component. Instead received: %s",p===null?"null":typeof p);var W={$$typeof:H,type:p,compare:C===void 0?null:C};{var q;Object.defineProperty(W,"displayName",{enumerable:!1,configurable:!0,get:function(){return q},set:function(ye){q=ye,!p.name&&!p.displayName&&(p.displayName=ye)}})}return W}function Me(){var p=Ie.current;return p===null&&Ke(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),p}function se(p){var C=Me();if(p._context!==void 0){var W=p._context;W.Consumer===p?Ke("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):W.Provider===p&&Ke("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return C.useContext(p)}function ut(p){var C=Me();return C.useState(p)}function Ht(p,C,W){var q=Me();return q.useReducer(p,C,W)}function zt(p){var C=Me();return C.useRef(p)}function Tn(p,C){var W=Me();return W.useEffect(p,C)}function An(p,C){var W=Me();return W.useInsertionEffect(p,C)}function $n(p,C){var W=Me();return W.useLayoutEffect(p,C)}function Rr(p,C){var W=Me();return W.useCallback(p,C)}function xa(p,C){var W=Me();return W.useMemo(p,C)}function ba(p,C,W){var q=Me();return q.useImperativeHandle(p,C,W)}function Mn(p,C){{var W=Me();return W.useDebugValue(p,C)}}function Bt(){var p=Me();return p.useTransition()}function Aa(p){var C=Me();return C.useDeferredValue(p)}function $a(){var p=Me();return p.useId()}function Vo(p,C,W){var q=Me();return q.useSyncExternalStore(p,C,W)}var fr=0,ko,yi,eo,to,no,Wr,gi;function yr(){}yr.__reactDisabledLog=!0;function es(){{if(fr===0){ko=console.log,yi=console.info,eo=console.warn,to=console.error,no=console.group,Wr=console.groupCollapsed,gi=console.groupEnd;var p={configurable:!0,enumerable:!0,value:yr,writable:!0};Object.defineProperties(console,{info:p,log:p,warn:p,error:p,group:p,groupCollapsed:p,groupEnd:p})}fr++}}function za(){{if(fr--,fr===0){var p={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:tn({},p,{value:ko}),info:tn({},p,{value:yi}),warn:tn({},p,{value:eo}),error:tn({},p,{value:to}),group:tn({},p,{value:no}),groupCollapsed:tn({},p,{value:Wr}),groupEnd:tn({},p,{value:gi})})}fr<0&&Ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Co=Ge.ReactCurrentDispatcher,Xo;function Eo(p,C,W){{if(Xo===void 0)try{throw Error()}catch(ye){var q=ye.stack.trim().match(/\n( *(at )?)/);Xo=q&&q[1]||""}return`
`+Xo+p}}var Ro=!1,Qo;{var Ba=typeof WeakMap=="function"?WeakMap:Map;Qo=new Ba}function Yn(p,C){if(!p||Ro)return"";{var W=Qo.get(p);if(W!==void 0)return W}var q;Ro=!0;var ye=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ht;ht=Co.current,Co.current=null,es();try{if(C){var Be=function(){throw Error()};if(Object.defineProperty(Be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Be,[])}catch(qn){q=qn}Reflect.construct(p,[],Be)}else{try{Be.call()}catch(qn){q=qn}p.call(Be.prototype)}}else{try{throw Error()}catch(qn){q=qn}p()}}catch(qn){if(qn&&q&&typeof qn.stack=="string"){for(var kt=qn.stack.split(`
`),Yt=q.stack.split(`
`),hn=kt.length-1,Cn=Yt.length-1;hn>=1&&Cn>=0&&kt[hn]!==Yt[Cn];)Cn--;for(;hn>=1&&Cn>=0;hn--,Cn--)if(kt[hn]!==Yt[Cn]){if(hn!==1||Cn!==1)do if(hn--,Cn--,Cn<0||kt[hn]!==Yt[Cn]){var En=`
`+kt[hn].replace(" at new "," at ");return p.displayName&&En.includes("<anonymous>")&&(En=En.replace("<anonymous>",p.displayName)),typeof p=="function"&&Qo.set(p,En),En}while(hn>=1&&Cn>=0);break}}}finally{Ro=!1,Co.current=ht,za(),Error.prepareStackTrace=ye}var Nt=p?p.displayName||p.name:"",Te=Nt?Eo(Nt):"";return typeof p=="function"&&Qo.set(p,Te),Te}function Ia(p,C,W){return Yn(p,!1)}function pa(p){var C=p.prototype;return!!(C&&C.isReactComponent)}function Qn(p,C,W){if(p==null)return"";if(typeof p=="function")return Yn(p,pa(p));if(typeof p=="string")return Eo(p);switch(p){case M:return Eo("Suspense");case A:return Eo("SuspenseList")}if(typeof p=="object")switch(p.$$typeof){case O:return Ia(p.render);case H:return Qn(p.type,C,W);case I:{var q=p,ye=q._payload,ht=q._init;try{return Qn(ht(ye),C,W)}catch{}}}return""}var Fs={},ts=Ge.ReactDebugCurrentFrame;function rn(p){if(p){var C=p._owner,W=Qn(p.type,p._source,C?C.type:null);ts.setExtraStackFrame(W)}else ts.setExtraStackFrame(null)}function Pt(p,C,W,q,ye){{var ht=Function.call.bind(Ye);for(var Be in p)if(ht(p,Be)){var kt=void 0;try{if(typeof p[Be]!="function"){var Yt=Error((q||"React class")+": "+W+" type `"+Be+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof p[Be]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Yt.name="Invariant Violation",Yt}kt=p[Be](C,Be,q,W,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(hn){kt=hn}kt&&!(kt instanceof Error)&&(rn(ye),Ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",q||"React class",W,Be,typeof kt),rn(null)),kt instanceof Error&&!(kt.message in Fs)&&(Fs[kt.message]=!0,rn(ye),Ke("Failed %s type: %s",W,kt.message),rn(null))}}}function ro(p){if(p){var C=p._owner,W=Qn(p.type,p._source,C?C.type:null);ot(W)}else ot(null)}var dt;dt=!1;function vi(){if(Ae.current){var p=lt(Ae.current.type);if(p)return`

Check the render method of \``+p+"`."}return""}function jr(p){if(p!==void 0){var C=p.fileName.replace(/^.*[\\\/]/,""),W=p.lineNumber;return`

Check your code at `+C+":"+W+"."}return""}function jo(p){return p!=null?jr(p.__source):""}var To={};function Jl(p){var C=vi();if(!C){var W=typeof p=="string"?p:p.displayName||p.name;W&&(C=`

Check the top-level render call using <`+W+">.")}return C}function Hn(p,C){if(!(!p._store||p._store.validated||p.key!=null)){p._store.validated=!0;var W=Jl(C);if(!To[W]){To[W]=!0;var q="";p&&p._owner&&p._owner!==Ae.current&&(q=" It was passed a child from "+lt(p._owner.type)+"."),ro(p),Ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',W,q),ro(null)}}}function It(p,C){if(typeof p=="object"){if(nn(p))for(var W=0;W<p.length;W++){var q=p[W];oe(q)&&Hn(q,C)}else if(oe(p))p._store&&(p._store.validated=!0);else if(p){var ye=Le(p);if(typeof ye=="function"&&ye!==p.entries)for(var ht=ye.call(p),Be;!(Be=ht.next()).done;)oe(Be.value)&&Hn(Be.value,C)}}}function xi(p){{var C=p.type;if(C==null||typeof C=="string")return;var W;if(typeof C=="function")W=C.propTypes;else if(typeof C=="object"&&(C.$$typeof===O||C.$$typeof===H))W=C.propTypes;else return;if(W){var q=lt(C);Pt(W,p.props,"prop",q,p)}else if(C.PropTypes!==void 0&&!dt){dt=!0;var ye=lt(C);Ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",ye||"Unknown")}typeof C.getDefaultProps=="function"&&!C.getDefaultProps.isReactClassApproved&&Ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ea(p){{for(var C=Object.keys(p.props),W=0;W<C.length;W++){var q=C[W];if(q!=="children"&&q!=="key"){ro(p),Ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",q),ro(null);break}}p.ref!==null&&(ro(p),Ke("Invalid attribute `ref` supplied to `React.Fragment`."),ro(null))}}function zn(p,C,W){var q=re(p);if(!q){var ye="";(p===void 0||typeof p=="object"&&p!==null&&Object.keys(p).length===0)&&(ye+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var ht=jo(C);ht?ye+=ht:ye+=vi();var Be;p===null?Be="null":nn(p)?Be="array":p!==void 0&&p.$$typeof===_?(Be="<"+(lt(p.type)||"Unknown")+" />",ye=" Did you accidentally export a JSX literal instead of a component?"):Be=typeof p,Ke("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Be,ye)}var kt=V.apply(this,arguments);if(kt==null)return kt;if(q)for(var Yt=2;Yt<arguments.length;Yt++)It(arguments[Yt],p);return p===m?ea(kt):xi(kt),kt}var gr=!1;function yn(p){var C=zn.bind(null,p);return C.type=p,gr||(gr=!0,Ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(C,"type",{enumerable:!1,get:function(){return Ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:p}),p}}),C}function qo(p,C,W){for(var q=ve.apply(this,arguments),ye=2;ye<arguments.length;ye++)It(arguments[ye],q.type);return xi(q),q}function Ua(p,C){var W=G.transition;G.transition={};var q=G.transition;G.transition._updatedFibers=new Set;try{p()}finally{if(G.transition=W,W===null&&q._updatedFibers){var ye=q._updatedFibers.size;ye>10&&Ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),q._updatedFibers.clear()}}}var bi=!1,wa=null;function Hs(p){if(wa===null)try{var C=("require"+Math.random()).slice(0,7),W=i&&i[C];wa=W.call(i,"timers").setImmediate}catch{wa=function(ye){bi===!1&&(bi=!0,typeof MessageChannel>"u"&&Ke("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var ht=new MessageChannel;ht.port1.onmessage=ye,ht.port2.postMessage(void 0)}}return wa(p)}var Fa=0,Mo=!1;function ao(p){{var C=Fa;Fa++,de.current===null&&(de.current=[]);var W=de.isBatchingLegacy,q;try{if(de.isBatchingLegacy=!0,q=p(),!W&&de.didScheduleLegacyUpdate){var ye=de.current;ye!==null&&(de.didScheduleLegacyUpdate=!1,io(ye))}}catch(Nt){throw Ha(C),Nt}finally{de.isBatchingLegacy=W}if(q!==null&&typeof q=="object"&&typeof q.then=="function"){var ht=q,Be=!1,kt={then:function(Nt,Te){Be=!0,ht.then(function(qn){Ha(C),Fa===0?oo(qn,Nt,Te):Nt(qn)},function(qn){Ha(C),Te(qn)})}};return!Mo&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){Be||(Mo=!0,Ke("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),kt}else{var Yt=q;if(Ha(C),Fa===0){var hn=de.current;hn!==null&&(io(hn),de.current=null);var Cn={then:function(Nt,Te){de.current===null?(de.current=[],oo(Yt,Nt,Te)):Nt(Yt)}};return Cn}else{var En={then:function(Nt,Te){Nt(Yt)}};return En}}}}function Ha(p){p!==Fa-1&&Ke("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Fa=p}function oo(p,C,W){{var q=de.current;if(q!==null)try{io(q),Hs(function(){q.length===0?(de.current=null,C(p)):oo(p,C,W)})}catch(ye){W(ye)}else C(p)}}var Pa=!1;function io(p){if(!Pa){Pa=!0;var C=0;try{for(;C<p.length;C++){var W=p[C];do W=W(!0);while(W!==null)}p.length=0}catch(q){throw p=p.slice(C+1),q}finally{Pa=!1}}}var Ps=zn,so=qo,ta=yn,ns={map:Re,forEach:Lt,count:Ft,toArray:Et,only:On};l.Children=ns,l.Component=Xn,l.Fragment=m,l.Profiler=z,l.PureComponent=Un,l.StrictMode=f,l.Suspense=M,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ge,l.act=ao,l.cloneElement=so,l.createContext=et,l.createElement=Ps,l.createFactory=ta,l.createRef=mn,l.forwardRef=ur,l.isValidElement=oe,l.lazy=Or,l.memo=xe,l.startTransition=Ua,l.unstable_act=ao,l.useCallback=Rr,l.useContext=se,l.useDebugValue=Mn,l.useDeferredValue=Aa,l.useEffect=Tn,l.useId=$a,l.useImperativeHandle=ba,l.useInsertionEffect=An,l.useLayoutEffect=$n,l.useMemo=xa,l.useReducer=Ht,l.useRef=zt,l.useState=ut,l.useSyncExternalStore=Vo,l.useTransition=Bt,l.version=c,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(Hl,Hl.exports)),Hl.exports}var vy;function Qf(){return vy||(vy=1,Xf.exports=_b()),Xf.exports}var w=Qf();const xy=pb(w);var Mc={},qf={exports:{}},fa={},Gf={exports:{}},Kf={},by;function mb(){return by||(by=1,(function(i){/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var l=!1,c=5;function _(j,B){var V=j.length;j.push(B),f(j,B,V)}function y(j){return j.length===0?null:j[0]}function m(j){if(j.length===0)return null;var B=j[0],V=j.pop();return V!==B&&(j[0]=V,z(j,V,0)),B}function f(j,B,V){for(var ge=V;ge>0;){var ve=ge-1>>>1,oe=j[ve];if(E(oe,B)>0)j[ve]=B,j[ge]=oe,ge=ve;else return}}function z(j,B,V){for(var ge=V,ve=j.length,oe=ve>>>1;ge<oe;){var Ze=(ge+1)*2-1,st=j[Ze],rt=Ze+1,Ee=j[rt];if(E(st,B)<0)rt<ve&&E(Ee,st)<0?(j[ge]=Ee,j[rt]=B,ge=rt):(j[ge]=st,j[Ze]=B,ge=Ze);else if(rt<ve&&E(Ee,B)<0)j[ge]=Ee,j[rt]=B,ge=rt;else return}}function E(j,B){var V=j.sortIndex-B.sortIndex;return V!==0?V:j.id-B.id}var P=1,O=2,M=3,A=4,H=5;function I(j,B){}var le=typeof performance=="object"&&typeof performance.now=="function";if(le){var ke=performance;i.unstable_now=function(){return ke.now()}}else{var he=Date,Le=he.now();i.unstable_now=function(){return he.now()-Le}}var Ie=1073741823,G=-1,de=250,Ae=5e3,ae=1e4,mt=Ie,ot=[],nt=[],Pe=1,ct=null,Oe=M,Qe=!1,Ge=!1,Ce=!1,Ke=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,it=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Tt(j){for(var B=y(nt);B!==null;){if(B.callback===null)m(nt);else if(B.startTime<=j)m(nt),B.sortIndex=B.expirationTime,_(ot,B);else return;B=y(nt)}}function Gt(j){if(Ce=!1,Tt(j),!Ge)if(y(ot)!==null)Ge=!0,Je(tn);else{var B=y(nt);B!==null&&Ct(Gt,B.startTime-j)}}function tn(j,B){Ge=!1,Ce&&(Ce=!1,en()),Qe=!0;var V=Oe;try{var ge;if(!l)return wn(j,B)}finally{ct=null,Oe=V,Qe=!1}}function wn(j,B){var V=B;for(Tt(V),ct=y(ot);ct!==null&&!(ct.expirationTime>V&&(!j||K()));){var ge=ct.callback;if(typeof ge=="function"){ct.callback=null,Oe=ct.priorityLevel;var ve=ct.expirationTime<=V,oe=ge(ve);V=i.unstable_now(),typeof oe=="function"?ct.callback=oe:ct===y(ot)&&m(ot),Tt(V)}else m(ot);ct=y(ot)}if(ct!==null)return!0;var Ze=y(nt);return Ze!==null&&Ct(Gt,Ze.startTime-V),!1}function Xn(j,B){switch(j){case P:case O:case M:case A:case H:break;default:j=M}var V=Oe;Oe=j;try{return B()}finally{Oe=V}}function tr(j){var B;switch(Oe){case P:case O:case M:B=M;break;default:B=Oe;break}var V=Oe;Oe=B;try{return j()}finally{Oe=V}}function mr(j){var B=Oe;return function(){var V=Oe;Oe=B;try{return j.apply(this,arguments)}finally{Oe=V}}}function Sn(j,B,V){var ge=i.unstable_now(),ve;if(typeof V=="object"&&V!==null){var oe=V.delay;typeof oe=="number"&&oe>0?ve=ge+oe:ve=ge}else ve=ge;var Ze;switch(j){case P:Ze=G;break;case O:Ze=de;break;case H:Ze=mt;break;case A:Ze=ae;break;case M:default:Ze=Ae;break}var st=ve+Ze,rt={id:Pe++,callback:B,priorityLevel:j,startTime:ve,expirationTime:st,sortIndex:-1};return ve>ge?(rt.sortIndex=ve,_(nt,rt),y(ot)===null&&rt===y(nt)&&(Ce?en():Ce=!0,Ct(Gt,ve-ge))):(rt.sortIndex=st,_(ot,rt),!Ge&&!Qe&&(Ge=!0,Je(tn))),rt}function Gn(){}function Un(){!Ge&&!Qe&&(Ge=!0,Je(tn))}function Fn(){return y(ot)}function mn(j){j.callback=null}function Xt(){return Oe}var nn=!1,ln=null,Ln=-1,jn=c,lr=-1;function K(){var j=i.unstable_now()-lr;return!(j<jn)}function Ue(){}function lt(j){if(j<0||j>125){console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}j>0?jn=Math.floor(1e3/j):jn=c}var Ye=function(){if(ln!==null){var j=i.unstable_now();lr=j;var B=!0,V=!0;try{V=ln(B,j)}finally{V?vt():(nn=!1,ln=null)}}else nn=!1},vt;if(typeof it=="function")vt=function(){it(Ye)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Dt=ft.port2;ft.port1.onmessage=Ye,vt=function(){Dt.postMessage(null)}}else vt=function(){Ke(Ye,0)};function Je(j){ln=j,nn||(nn=!0,vt())}function Ct(j,B){Ln=Ke(function(){j(i.unstable_now())},B)}function en(){fe(Ln),Ln=-1}var Ve=Ue,$=null;i.unstable_IdlePriority=H,i.unstable_ImmediatePriority=P,i.unstable_LowPriority=A,i.unstable_NormalPriority=M,i.unstable_Profiling=$,i.unstable_UserBlockingPriority=O,i.unstable_cancelCallback=mn,i.unstable_continueExecution=Un,i.unstable_forceFrameRate=lt,i.unstable_getCurrentPriorityLevel=Xt,i.unstable_getFirstCallbackNode=Fn,i.unstable_next=tr,i.unstable_pauseExecution=Gn,i.unstable_requestPaint=Ve,i.unstable_runWithPriority=Xn,i.unstable_scheduleCallback=Sn,i.unstable_shouldYield=K,i.unstable_wrapCallback=mr,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(Kf)),Kf}var wy;function yb(){return wy||(wy=1,Gf.exports=mb()),Gf.exports}var Sy;function gb(){if(Sy)return fa;Sy=1;/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var i=Qf(),l=yb(),c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=!1;function y(e){_=e}function m(e){if(!_){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];z("warn",e,n)}}function f(e){if(!_){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];z("error",e,n)}}function z(e,t,n){{var r=c.ReactDebugCurrentFrame,a=r.getStackAddendum();a!==""&&(t+="%s",n=n.concat([a]));var s=n.map(function(u){return String(u)});s.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,s)}}var E=0,P=1,O=2,M=3,A=4,H=5,I=6,le=7,ke=8,he=9,Le=10,Ie=11,G=12,de=13,Ae=14,ae=15,mt=16,ot=17,nt=18,Pe=19,ct=21,Oe=22,Qe=23,Ge=24,Ce=25,Ke=!0,fe=!1,it=!1,Tt=!1,Gt=!1,tn=!0,wn=!0,Xn=!0,tr=!0,mr=new Set,Sn={},Gn={};function Un(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){Sn[e]&&f("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),Sn[e]=t;{var n=e.toLowerCase();Gn[n]=e,e==="onDoubleClick"&&(Gn.ondblclick=e)}for(var r=0;r<t.length;r++)mr.add(t[r])}var mn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xt=Object.prototype.hasOwnProperty;function nn(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function ln(e){try{return Ln(e),!1}catch{return!0}}function Ln(e){return""+e}function jn(e,t){if(ln(e))return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",t,nn(e)),Ln(e)}function lr(e){if(ln(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",nn(e)),Ln(e)}function K(e,t){if(ln(e))return f("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",t,nn(e)),Ln(e)}function Ue(e,t){if(ln(e))return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",t,nn(e)),Ln(e)}function lt(e){if(ln(e))return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",nn(e)),Ln(e)}function Ye(e){if(ln(e))return f("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",nn(e)),Ln(e)}var vt=0,ft=1,Dt=2,Je=3,Ct=4,en=5,Ve=6,$=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",j=$+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",B=new RegExp("^["+$+"]["+j+"]*$"),V={},ge={};function ve(e){return Xt.call(ge,e)?!0:Xt.call(V,e)?!1:B.test(e)?(ge[e]=!0,!0):(V[e]=!0,f("Invalid attribute name: `%s`",e),!1)}function oe(e,t,n){return t!==null?t.type===vt:n?!1:e.length>2&&(e[0]==="o"||e[0]==="O")&&(e[1]==="n"||e[1]==="N")}function Ze(e,t,n,r){if(n!==null&&n.type===vt)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":{if(r)return!1;if(n!==null)return!n.acceptsBooleans;var a=e.toLowerCase().slice(0,5);return a!=="data-"&&a!=="aria-"}default:return!1}}function st(e,t,n,r){if(t===null||typeof t>"u"||Ze(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case Je:return!t;case Ct:return t===!1;case en:return isNaN(t);case Ve:return isNaN(t)||t<1}return!1}function rt(e){return _e.hasOwnProperty(e)?_e[e]:null}function Ee(e,t,n,r,a,s,u){this.acceptsBooleans=t===Dt||t===Je||t===Ct,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var _e={},At=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];At.forEach(function(e){_e[e]=new Ee(e,vt,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],n=e[1];_e[t]=new Ee(t,ft,!1,n,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ee(e,Dt,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ee(e,Dt,!1,e,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){_e[e]=new Ee(e,Je,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ee(e,Je,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_e[e]=new Ee(e,Ct,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_e[e]=new Ee(e,Ve,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_e[e]=new Ee(e,en,!1,e.toLowerCase(),null,!1,!1)});var $t=/[\-\:]([a-z])/g,fn=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace($t,fn);_e[t]=new Ee(t,ft,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace($t,fn);_e[t]=new Ee(t,ft,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($t,fn);_e[t]=new Ee(t,ft,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ee(e,ft,!1,e.toLowerCase(),null,!1,!1)});var Re="xlinkHref";_e[Re]=new Ee("xlinkHref",ft,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_e[e]=new Ee(e,ft,!1,e.toLowerCase(),null,!0,!0)});var Ft=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,Lt=!1;function Et(e){!Lt&&Ft.test(e)&&(Lt=!0,f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}function On(e,t,n,r){if(r.mustUseProperty){var a=r.propertyName;return e[a]}else{jn(n,t),r.sanitizeURL&&Et(""+n);var s=r.attributeName,u=null;if(r.type===Ct){if(e.hasAttribute(s)){var d=e.getAttribute(s);return d===""?!0:st(t,n,r,!1)?d:d===""+n?n:d}}else if(e.hasAttribute(s)){if(st(t,n,r,!1))return e.getAttribute(s);if(r.type===Je)return n;u=e.getAttribute(s)}return st(t,n,r,!1)?u===null?n:u:u===""+n?n:u}}function et(e,t,n,r){{if(!ve(t))return;if(!e.hasAttribute(t))return n===void 0?void 0:null;var a=e.getAttribute(t);return jn(n,t),a===""+n?n:a}}function Ot(e,t,n,r){var a=rt(t);if(!oe(t,a,r)){if(st(t,n,a,r)&&(n=null),r||a===null){if(ve(t)){var s=t;n===null?e.removeAttribute(s):(jn(n,t),e.setAttribute(s,""+n))}return}var u=a.mustUseProperty;if(u){var d=a.propertyName;if(n===null){var h=a.type;e[d]=h===Je?!1:""}else e[d]=n;return}var g=a.attributeName,x=a.attributeNamespace;if(n===null)e.removeAttribute(g);else{var L=a.type,D;L===Je||L===Ct&&n===!0?D="":(jn(n,g),D=""+n,a.sanitizeURL&&Et(D.toString())),x?e.setAttributeNS(x,g,D):e.setAttribute(g,D)}}}var un=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),ha=Symbol.for("react.strict_mode"),Or=Symbol.for("react.profiler"),ur=Symbol.for("react.provider"),k=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Ht=Symbol.for("react.scope"),zt=Symbol.for("react.debug_trace_mode"),Tn=Symbol.for("react.offscreen"),An=Symbol.for("react.legacy_hidden"),$n=Symbol.for("react.cache"),Rr=Symbol.for("react.tracing_marker"),xa=Symbol.iterator,ba="@@iterator";function Mn(e){if(e===null||typeof e!="object")return null;var t=xa&&e[xa]||e[ba];return typeof t=="function"?t:null}var Bt=Object.assign,Aa=0,$a,Vo,fr,ko,yi,eo,to;function no(){}no.__reactDisabledLog=!0;function Wr(){{if(Aa===0){$a=console.log,Vo=console.info,fr=console.warn,ko=console.error,yi=console.group,eo=console.groupCollapsed,to=console.groupEnd;var e={configurable:!0,enumerable:!0,value:no,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Aa++}}function gi(){{if(Aa--,Aa===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Bt({},e,{value:$a}),info:Bt({},e,{value:Vo}),warn:Bt({},e,{value:fr}),error:Bt({},e,{value:ko}),group:Bt({},e,{value:yi}),groupCollapsed:Bt({},e,{value:eo}),groupEnd:Bt({},e,{value:to})})}Aa<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var yr=c.ReactCurrentDispatcher,es;function za(e,t,n){{if(es===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);es=r&&r[1]||""}return`
`+es+e}}var Co=!1,Xo;{var Eo=typeof WeakMap=="function"?WeakMap:Map;Xo=new Eo}function Ro(e,t){if(!e||Co)return"";{var n=Xo.get(e);if(n!==void 0)return n}var r;Co=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=yr.current,yr.current=null,Wr();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(X){r=X}Reflect.construct(e,[],u)}else{try{u.call()}catch(X){r=X}e.call(u.prototype)}}else{try{throw Error()}catch(X){r=X}e()}}catch(X){if(X&&r&&typeof X.stack=="string"){for(var d=X.stack.split(`
`),h=r.stack.split(`
`),g=d.length-1,x=h.length-1;g>=1&&x>=0&&d[g]!==h[x];)x--;for(;g>=1&&x>=0;g--,x--)if(d[g]!==h[x]){if(g!==1||x!==1)do if(g--,x--,x<0||d[g]!==h[x]){var L=`
`+d[g].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&Xo.set(e,L),L}while(g>=1&&x>=0);break}}}finally{Co=!1,yr.current=s,gi(),Error.prepareStackTrace=a}var D=e?e.displayName||e.name:"",Y=D?za(D):"";return typeof e=="function"&&Xo.set(e,Y),Y}function Qo(e,t,n){return Ro(e,!0)}function Ba(e,t,n){return Ro(e,!1)}function Yn(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Ia(e,t,n){if(e==null)return"";if(typeof e=="function")return Ro(e,Yn(e));if(typeof e=="string")return za(e);switch(e){case xe:return za("Suspense");case Me:return za("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case re:return Ba(e.render);case se:return Ia(e.type,t,n);case ut:{var r=e,a=r._payload,s=r._init;try{return Ia(s(a),t,n)}catch{}}}return""}function pa(e){switch(e._debugOwner&&e._debugOwner.type,e._debugSource,e.tag){case H:return za(e.type);case mt:return za("Lazy");case de:return za("Suspense");case Pe:return za("SuspenseList");case E:case O:case ae:return Ba(e.type);case Ie:return Ba(e.type.render);case P:return Qo(e.type);default:return""}}function Qn(e){try{var t="",n=e;do t+=pa(n),n=n.return;while(n);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Fs(e,t,n){var r=e.displayName;if(r)return r;var a=t.displayName||t.name||"";return a!==""?n+"("+a+")":n}function ts(e){return e.displayName||"Context"}function rn(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case kn:return"Portal";case Or:return"Profiler";case ha:return"StrictMode";case xe:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case k:var t=e;return ts(t)+".Consumer";case ur:var n=e;return ts(n._context)+".Provider";case re:return Fs(e,e.render,"ForwardRef");case se:var r=e.displayName||null;return r!==null?r:rn(e.type)||"Memo";case ut:{var a=e,s=a._payload,u=a._init;try{return rn(u(s))}catch{return null}}}return null}function Pt(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(r!==""?n+"("+r+")":n)}function ro(e){return e.displayName||"Context"}function dt(e){var t=e.tag,n=e.type;switch(t){case Ge:return"Cache";case he:var r=n;return ro(r)+".Consumer";case Le:var a=n;return ro(a._context)+".Provider";case nt:return"DehydratedFragment";case Ie:return Pt(n,n.render,"ForwardRef");case le:return"Fragment";case H:return n;case A:return"Portal";case M:return"Root";case I:return"Text";case mt:return rn(n);case ke:return n===ha?"StrictMode":"Mode";case Oe:return"Offscreen";case G:return"Profiler";case ct:return"Scope";case de:return"Suspense";case Pe:return"SuspenseList";case Ce:return"TracingMarker";case P:case E:case ot:case O:case Ae:case ae:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;break}return null}var vi=c.ReactDebugCurrentFrame,jr=null,jo=!1;function To(){{if(jr===null)return null;var e=jr._debugOwner;if(e!==null&&typeof e<"u")return dt(e)}return null}function Jl(){return jr===null?"":Qn(jr)}function Hn(){vi.getCurrentStack=null,jr=null,jo=!1}function It(e){vi.getCurrentStack=e===null?null:Jl,jr=e,jo=!1}function xi(){return jr}function ea(e){jo=e}function zn(e){return""+e}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return Ye(e),e;default:return""}}var yn={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function qo(e,t){yn[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function Ua(e){var t=e.type,n=e.nodeName;return n&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bi(e){return e._valueTracker}function wa(e){e._valueTracker=null}function Hs(e){var t="";return e&&(Ua(e)?t=e.checked?"true":"false":t=e.value),t}function Fa(e){var t=Ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);Ye(e[t]);var r=""+e[t];if(!(e.hasOwnProperty(t)||typeof n>"u"||typeof n.get!="function"||typeof n.set!="function")){var a=n.get,s=n.set;Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){Ye(d),r=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable});var u={getValue:function(){return r},setValue:function(d){Ye(d),r=""+d},stopTracking:function(){wa(e),delete e[t]}};return u}}function Mo(e){bi(e)||(e._valueTracker=Fa(e))}function ao(e){if(!e)return!1;var t=bi(e);if(!t)return!0;var n=t.getValue(),r=Hs(e);return r!==n?(t.setValue(r),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oo=!1,Pa=!1,io=!1,Ps=!1;function so(e){var t=e.type==="checkbox"||e.type==="radio";return t?e.checked!=null:e.value!=null}function ta(e,t){var n=e,r=t.checked,a=Bt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked});return a}function ns(e,t){qo("input",t),t.checked!==void 0&&t.defaultChecked!==void 0&&!Pa&&(f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",To()||"A component",t.type),Pa=!0),t.value!==void 0&&t.defaultValue!==void 0&&!oo&&(f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",To()||"A component",t.type),oo=!0);var n=e,r=t.defaultValue==null?"":t.defaultValue;n._wrapperState={initialChecked:t.checked!=null?t.checked:t.defaultChecked,initialValue:gr(t.value!=null?t.value:r),controlled:so(t)}}function p(e,t){var n=e,r=t.checked;r!=null&&Ot(n,"checked",r,!1)}function C(e,t){var n=e;{var r=so(t);!n._wrapperState.controlled&&r&&!Ps&&(f("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Ps=!0),n._wrapperState.controlled&&!r&&!io&&(f("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),io=!0)}p(e,t);var a=gr(t.value),s=t.type;if(a!=null)s==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=zn(a)):n.value!==zn(a)&&(n.value=zn(a));else if(s==="submit"||s==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?ht(n,t.type,a):t.hasOwnProperty("defaultValue")&&ht(n,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function W(e,t,n){var r=e;if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type,s=a==="submit"||a==="reset";if(s&&(t.value===void 0||t.value===null))return;var u=zn(r._wrapperState.initialValue);n||u!==r.value&&(r.value=u),r.defaultValue=u}var d=r.name;d!==""&&(r.name=""),r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked,d!==""&&(r.name=d)}function q(e,t){var n=e;C(n,t),ye(n,t)}function ye(e,t){var n=t.name;if(t.type==="radio"&&n!=null){for(var r=e;r.parentNode;)r=r.parentNode;jn(n,"name");for(var a=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),s=0;s<a.length;s++){var u=a[s];if(!(u===e||u.form!==e.form)){var d=Ld(u);if(!d)throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");ao(u),C(u,d)}}}}function ht(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=zn(e._wrapperState.initialValue):e.defaultValue!==zn(n)&&(e.defaultValue=zn(n)))}var Be=!1,kt=!1,Yt=!1;function hn(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?i.Children.forEach(t.children,function(n){n!=null&&(typeof n=="string"||typeof n=="number"||kt||(kt=!0,f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):t.dangerouslySetInnerHTML!=null&&(Yt||(Yt=!0,f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))),t.selected!=null&&!Be&&(f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),Be=!0)}function Cn(e,t){t.value!=null&&e.setAttribute("value",zn(gr(t.value)))}var En=Array.isArray;function Nt(e){return En(e)}var Te;Te=!1;function qn(){var e=To();return e?`

Check the render method of \``+e+"`.":""}var Do=["value","defaultValue"];function rs(e){{qo("select",e);for(var t=0;t<Do.length;t++){var n=Do[t];if(e[n]!=null){var r=Nt(e[n]);e.multiple&&!r?f("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,qn()):!e.multiple&&r&&f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,qn())}}}}function Sa(e,t,n,r){var a=e.options;if(t){for(var s=n,u={},d=0;d<s.length;d++)u["$"+s[d]]=!0;for(var h=0;h<a.length;h++){var g=u.hasOwnProperty("$"+a[h].value);a[h].selected!==g&&(a[h].selected=g),g&&r&&(a[h].defaultSelected=!0)}}else{for(var x=zn(gr(n)),L=null,D=0;D<a.length;D++){if(a[D].value===x){a[D].selected=!0,r&&(a[D].defaultSelected=!0);return}L===null&&!a[D].disabled&&(L=a[D])}L!==null&&(L.selected=!0)}}function Wa(e,t){return Bt({},t,{value:void 0})}function Lo(e,t){var n=e;rs(t),n._wrapperState={wasMultiple:!!t.multiple},t.value!==void 0&&t.defaultValue!==void 0&&!Te&&(f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),Te=!0)}function Ws(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;r!=null?Sa(n,!!t.multiple,r,!1):t.defaultValue!=null&&Sa(n,!!t.multiple,t.defaultValue,!0)}function as(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var a=t.value;a!=null?Sa(n,!!t.multiple,a,!1):r!==!!t.multiple&&(t.defaultValue!=null?Sa(n,!!t.multiple,t.defaultValue,!0):Sa(n,!!t.multiple,t.multiple?[]:"",!1))}function wi(e,t){var n=e,r=t.value;r!=null&&Sa(n,!!t.multiple,r,!1)}var Ys=!1;function Vs(e,t){var n=e;if(t.dangerouslySetInnerHTML!=null)throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");var r=Bt({},t,{value:void 0,defaultValue:void 0,children:zn(n._wrapperState.initialValue)});return r}function os(e,t){var n=e;qo("textarea",t),t.value!==void 0&&t.defaultValue!==void 0&&!Ys&&(f("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",To()||"A component"),Ys=!0);var r=t.value;if(r==null){var a=t.children,s=t.defaultValue;if(a!=null){f("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");{if(s!=null)throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Nt(a)){if(a.length>1)throw new Error("<textarea> can only have at most one child.");a=a[0]}s=a}}s==null&&(s=""),r=s}n._wrapperState={initialValue:gr(r)}}function ka(e,t){var n=e,r=gr(t.value),a=gr(t.defaultValue);if(r!=null){var s=zn(r);s!==n.value&&(n.value=s),t.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)}a!=null&&(n.defaultValue=zn(a))}function Vc(e,t){var n=e,r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Zl(e,t){ka(e,t)}var Ca="http://www.w3.org/1999/xhtml",Xs="http://www.w3.org/1998/Math/MathML",eu="http://www.w3.org/2000/svg";function tu(e){switch(e){case"svg":return eu;case"math":return Xs;default:return Ca}}function lo(e,t){return e==null||e===Ca?tu(t):e===eu&&t==="foreignObject"?Ca:e}var nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e},Si,Xc=nu(function(e,t){if(e.namespaceURI===eu&&!("innerHTML"in e)){Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild);return}e.innerHTML=t}),hr=1,Yr=3,nr=8,Ya=9,Qs=11,is=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===Yr){n.nodeValue=t;return}}e.textContent=t},Qc={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function qc(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var Gc=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){Gc.forEach(function(t){ki[qc(t,e)]=ki[e]})});function qs(e,t,n){var r=t==null||typeof t=="boolean"||t==="";return r?"":!n&&typeof t=="number"&&t!==0&&!(ki.hasOwnProperty(e)&&ki[e])?t+"px":(Ue(t,e),(""+t).trim())}var v=/([A-Z])/g,S=/^ms-/;function T(e){return e.replace(v,"-$1").toLowerCase().replace(S,"-ms-")}var R=function(){};{var N=/^(?:webkit|moz|o)[A-Z]/,Q=/^-ms-/,me=/-(.)/g,we=/;\s*$/,be={},qe={},at=!1,xt=!1,Vt=function(e){return e.replace(me,function(t,n){return n.toUpperCase()})},_t=function(e){be.hasOwnProperty(e)&&be[e]||(be[e]=!0,f("Unsupported style property %s. Did you mean %s?",e,Vt(e.replace(Q,"ms-"))))},Fe=function(e){be.hasOwnProperty(e)&&be[e]||(be[e]=!0,f("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},Kn=function(e,t){qe.hasOwnProperty(t)&&qe[t]||(qe[t]=!0,f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,e,t.replace(we,"")))},Bn=function(e,t){at||(at=!0,f("`NaN` is an invalid value for the `%s` css style property.",e))},rr=function(e,t){xt||(xt=!0,f("`Infinity` is an invalid value for the `%s` css style property.",e))};R=function(e,t){e.indexOf("-")>-1?_t(e):N.test(e)?Fe(e):we.test(t)&&Kn(e,t),typeof t=="number"&&(isNaN(t)?Bn(e,t):isFinite(t)||rr(e,t))}}var an=R;function Jn(e){{var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var a=e[r];if(a!=null){var s=r.indexOf("--")===0;t+=n+(s?r:T(r))+":",t+=qs(r,a,s),n=";"}}return t||null}}function wt(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0;a||an(r,t[r]);var s=qs(r,t[r],a);r==="float"&&(r="cssFloat"),a?n.setProperty(r,s):n[r]=s}}function Ut(e){return e==null||typeof e=="boolean"||e===""}function ar(e){var t={};for(var n in e)for(var r=Qc[n]||[n],a=0;a<r.length;a++)t[r[a]]=n;return t}function Pn(e,t){{if(!t)return;var n=ar(e),r=ar(t),a={};for(var s in n){var u=n[s],d=r[s];if(d&&u!==d){var h=u+","+d;if(a[h])continue;a[h]=!0,f("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",Ut(e[u])?"Removing":"Updating",u,d)}}}}var Nr={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},na=Bt({menuitem:!0},Nr),cr="__html";function Go(e,t){if(t){if(na[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw new Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(typeof t.dangerouslySetInnerHTML!="object"||!(cr in t.dangerouslySetInnerHTML))throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&t.children!=null&&f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),t.style!=null&&typeof t.style!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Zn={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},aa={},Ko=new RegExp("^(aria)-["+j+"]*$"),bh=new RegExp("^(aria)[A-Z]["+j+"]*$");function wh(e,t){{if(Xt.call(aa,t)&&aa[t])return!0;if(bh.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=Zn.hasOwnProperty(n)?n:null;if(r==null)return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),aa[t]=!0,!0;if(t!==r)return f("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),aa[t]=!0,!0}if(Ko.test(t)){var a=t.toLowerCase(),s=Zn.hasOwnProperty(a)?a:null;if(s==null)return aa[t]=!0,!1;if(t!==s)return f("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,s),aa[t]=!0,!0}}return!0}function Sh(e,t){{var n=[];for(var r in t){var a=wh(e,r);a||n.push(r)}var s=n.map(function(u){return"`"+u+"`"}).join(", ");n.length===1?f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",s,e):n.length>1&&f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",s,e)}}function kh(e,t){ra(e,t)||Sh(e,t)}var gg=!1;function FS(e,t){{if(e!=="input"&&e!=="textarea"&&e!=="select")return;t!=null&&t.value===null&&!gg&&(gg=!0,e==="select"&&t.multiple?f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}}var vg=function(){};{var oa={},xg=/^on./,HS=/^on[^A-Z]/,PS=new RegExp("^(aria)-["+j+"]*$"),WS=new RegExp("^(aria)[A-Z]["+j+"]*$");vg=function(e,t,n,r){if(Xt.call(oa,t)&&oa[t])return!0;var a=t.toLowerCase();if(a==="onfocusin"||a==="onfocusout")return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),oa[t]=!0,!0;if(r!=null){var s=r.registrationNameDependencies,u=r.possibleRegistrationNames;if(s.hasOwnProperty(t))return!0;var d=u.hasOwnProperty(a)?u[a]:null;if(d!=null)return f("Invalid event handler property `%s`. Did you mean `%s`?",t,d),oa[t]=!0,!0;if(xg.test(t))return f("Unknown event handler property `%s`. It will be ignored.",t),oa[t]=!0,!0}else if(xg.test(t))return HS.test(t)&&f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),oa[t]=!0,!0;if(PS.test(t)||WS.test(t))return!0;if(a==="innerhtml")return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),oa[t]=!0,!0;if(a==="aria")return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),oa[t]=!0,!0;if(a==="is"&&n!==null&&n!==void 0&&typeof n!="string")return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),oa[t]=!0,!0;if(typeof n=="number"&&isNaN(n))return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),oa[t]=!0,!0;var h=rt(t),g=h!==null&&h.type===vt;if(Ea.hasOwnProperty(a)){var x=Ea[a];if(x!==t)return f("Invalid DOM property `%s`. Did you mean `%s`?",t,x),oa[t]=!0,!0}else if(!g&&t!==a)return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,a),oa[t]=!0,!0;return typeof n=="boolean"&&Ze(t,n,h,!1)?(n?f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),oa[t]=!0,!0):g?!0:Ze(t,n,h,!1)?(oa[t]=!0,!1):((n==="false"||n==="true")&&h!==null&&h.type===Je&&(f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),oa[t]=!0),!0)}}var YS=function(e,t,n){{var r=[];for(var a in t){var s=vg(e,a,t[a],n);s||r.push(a)}var u=r.map(function(d){return"`"+d+"`"}).join(", ");r.length===1?f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",u,e):r.length>1&&f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",u,e)}};function VS(e,t,n){ra(e,t)||YS(e,t,n)}var bg=1,Ch=2,ru=4,XS=bg|Ch|ru,au=null;function QS(e){au!==null&&f("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),au=e}function qS(){au===null&&f("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),au=null}function GS(e){return e===au}function Eh(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===Yr?t.parentNode:t}var Rh=null,Gs=null,Ks=null;function wg(e){var t=Oi(e);if(t){if(typeof Rh!="function")throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=t.stateNode;if(n){var r=Ld(n);Rh(t.stateNode,t.type,r)}}}function KS(e){Rh=e}function Sg(e){Gs?Ks?Ks.push(e):Ks=[e]:Gs=e}function JS(){return Gs!==null||Ks!==null}function kg(){if(Gs){var e=Gs,t=Ks;if(Gs=null,Ks=null,wg(e),t)for(var n=0;n<t.length;n++)wg(t[n])}}var Cg=function(e,t){return e(t)},Eg=function(){},jh=!1;function ZS(){var e=JS();e&&(Eg(),kg())}function Rg(e,t,n){if(jh)return e(t,n);jh=!0;try{return Cg(e,t,n)}finally{jh=!1,ZS()}}function ek(e,t,n){Cg=e,Eg=n}function tk(e){return e==="button"||e==="input"||e==="select"||e==="textarea"}function nk(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!!(n.disabled&&tk(t));default:return!1}}function ou(e,t){var n=e.stateNode;if(n===null)return null;var r=Ld(n);if(r===null)return null;var a=r[t];if(nk(t,e.type,r))return null;if(a&&typeof a!="function")throw new Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof a+"` type.");return a}var Th=!1;if(mn)try{var iu={};Object.defineProperty(iu,"passive",{get:function(){Th=!0}}),window.addEventListener("test",iu,iu),window.removeEventListener("test",iu,iu)}catch{Th=!1}function jg(e,t,n,r,a,s,u,d,h){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(x){this.onError(x)}}var Tg=jg;if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof document<"u"&&typeof document.createEvent=="function"){var Mh=document.createElement("react");Tg=function(t,n,r,a,s,u,d,h,g){if(typeof document>"u"||document===null)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var x=document.createEvent("Event"),L=!1,D=!0,Y=window.event,X=Object.getOwnPropertyDescriptor(window,"event");function J(){Mh.removeEventListener(Z,pt,!1),typeof window.event<"u"&&window.hasOwnProperty("event")&&(window.event=Y)}var je=Array.prototype.slice.call(arguments,3);function pt(){L=!0,J(),n.apply(r,je),D=!1}var tt,Zt=!1,Qt=!1;function U(F){if(tt=F.error,Zt=!0,tt===null&&F.colno===0&&F.lineno===0&&(Qt=!0),F.defaultPrevented&&tt!=null&&typeof tt=="object")try{tt._suppressLogging=!0}catch{}}var Z="react-"+(t||"invokeguardedcallback");if(window.addEventListener("error",U),Mh.addEventListener(Z,pt,!1),x.initEvent(Z,!1,!1),Mh.dispatchEvent(x),X&&Object.defineProperty(window,"event",X),L&&D&&(Zt?Qt&&(tt=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):tt=new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`),this.onError(tt)),window.removeEventListener("error",U),!L)return J(),jg.apply(this,arguments)}}var rk=Tg,Js=!1,Kc=null,Jc=!1,Dh=null,ak={onError:function(e){Js=!0,Kc=e}};function Lh(e,t,n,r,a,s,u,d,h){Js=!1,Kc=null,rk.apply(ak,arguments)}function ok(e,t,n,r,a,s,u,d,h){if(Lh.apply(this,arguments),Js){var g=Oh();Jc||(Jc=!0,Dh=g)}}function ik(){if(Jc){var e=Dh;throw Jc=!1,Dh=null,e}}function sk(){return Js}function Oh(){if(Js){var e=Kc;return Js=!1,Kc=null,e}else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}function Zs(e){return e._reactInternals}function lk(e){return e._reactInternals!==void 0}function uk(e,t){e._reactInternals=t}var bt=0,el=1,pr=2,cn=4,ss=16,su=32,Mg=64,dn=128,Jo=256,ls=512,tl=1024,Ci=2048,Zo=4096,us=8192,Nh=16384,ck=32767,Zc=32768,ia=65536,Ah=131072,Dg=1048576,$h=2097152,cs=4194304,zh=8388608,Ei=16777216,Bh=33554432,Ih=cn|tl|0,Uh=pr|cn|ss|su|ls|Zo|us,lu=cn|Mg|ls|us,nl=Ci|ss,ei=cs|zh|$h,dk=c.ReactCurrentOwner;function ds(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{var r=t;do t=r,(t.flags&(pr|Zo))!==bt&&(n=t.return),r=t.return;while(r)}return t.tag===M?n:null}function Lg(e){if(e.tag===de){var t=e.memoizedState;if(t===null){var n=e.alternate;n!==null&&(t=n.memoizedState)}if(t!==null)return t.dehydrated}return null}function Og(e){return e.tag===M?e.stateNode.containerInfo:null}function fk(e){return ds(e)===e}function hk(e){{var t=dk.current;if(t!==null&&t.tag===P){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||f("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",dt(n)||"A component"),r._warnedAboutRefsInRender=!0}}var a=Zs(e);return a?ds(a)===a:!1}function Ng(e){if(ds(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function Ag(e){var t=e.alternate;if(!t){var n=ds(e);if(n===null)throw new Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var r=e,a=t;;){var s=r.return;if(s===null)break;var u=s.alternate;if(u===null){var d=s.return;if(d!==null){r=a=d;continue}break}if(s.child===u.child){for(var h=s.child;h;){if(h===r)return Ng(s),e;if(h===a)return Ng(s),t;h=h.sibling}throw new Error("Unable to find node on an unmounted component.")}if(r.return!==a.return)r=s,a=u;else{for(var g=!1,x=s.child;x;){if(x===r){g=!0,r=s,a=u;break}if(x===a){g=!0,a=s,r=u;break}x=x.sibling}if(!g){for(x=u.child;x;){if(x===r){g=!0,r=u,a=s;break}if(x===a){g=!0,a=u,r=s;break}x=x.sibling}if(!g)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==a)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(r.tag!==M)throw new Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t}function $g(e){var t=Ag(e);return t!==null?zg(t):null}function zg(e){if(e.tag===H||e.tag===I)return e;for(var t=e.child;t!==null;){var n=zg(t);if(n!==null)return n;t=t.sibling}return null}function pk(e){var t=Ag(e);return t!==null?Bg(t):null}function Bg(e){if(e.tag===H||e.tag===I)return e;for(var t=e.child;t!==null;){if(t.tag!==A){var n=Bg(t);if(n!==null)return n}t=t.sibling}return null}var Ig=l.unstable_scheduleCallback,_k=l.unstable_cancelCallback,mk=l.unstable_shouldYield,yk=l.unstable_requestPaint,Tr=l.unstable_now,gk=l.unstable_getCurrentPriorityLevel,ed=l.unstable_ImmediatePriority,Fh=l.unstable_UserBlockingPriority,fs=l.unstable_NormalPriority,vk=l.unstable_LowPriority,Hh=l.unstable_IdlePriority,xk=l.unstable_yieldValue,bk=l.unstable_setDisableYieldValue,rl=null,Vr=null,Ne=null,Oo=!1,uo=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u";function wk(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return f("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{wn&&(e=Bt({},e,{getLaneLabelMap:jk,injectProfilingHooks:Rk})),rl=t.inject(e),Vr=t}catch(n){f("React instrumentation encountered an error: %s.",n)}return!!t.checkDCE}function Sk(e,t){if(Vr&&typeof Vr.onScheduleFiberRoot=="function")try{Vr.onScheduleFiberRoot(rl,e,t)}catch(n){Oo||(Oo=!0,f("React instrumentation encountered an error: %s",n))}}function kk(e,t){if(Vr&&typeof Vr.onCommitFiberRoot=="function")try{var n=(e.current.flags&dn)===dn;if(Xn){var r;switch(t){case Ta:r=ed;break;case ni:r=Fh;break;case ri:r=fs;break;case sd:r=Hh;break;default:r=fs;break}Vr.onCommitFiberRoot(rl,e,r,n)}}catch(a){Oo||(Oo=!0,f("React instrumentation encountered an error: %s",a))}}function Ck(e){if(Vr&&typeof Vr.onPostCommitFiberRoot=="function")try{Vr.onPostCommitFiberRoot(rl,e)}catch(t){Oo||(Oo=!0,f("React instrumentation encountered an error: %s",t))}}function Ek(e){if(Vr&&typeof Vr.onCommitFiberUnmount=="function")try{Vr.onCommitFiberUnmount(rl,e)}catch(t){Oo||(Oo=!0,f("React instrumentation encountered an error: %s",t))}}function Mr(e){if(typeof xk=="function"&&(bk(e),y(e)),Vr&&typeof Vr.setStrictMode=="function")try{Vr.setStrictMode(rl,e)}catch(t){Oo||(Oo=!0,f("React instrumentation encountered an error: %s",t))}}function Rk(e){Ne=e}function jk(){{for(var e=new Map,t=1,n=0;n<Wh;n++){var r=Qk(t);e.set(t,r),t*=2}return e}}function Tk(e){Ne!==null&&typeof Ne.markCommitStarted=="function"&&Ne.markCommitStarted(e)}function Ug(){Ne!==null&&typeof Ne.markCommitStopped=="function"&&Ne.markCommitStopped()}function uu(e){Ne!==null&&typeof Ne.markComponentRenderStarted=="function"&&Ne.markComponentRenderStarted(e)}function al(){Ne!==null&&typeof Ne.markComponentRenderStopped=="function"&&Ne.markComponentRenderStopped()}function Mk(e){Ne!==null&&typeof Ne.markComponentPassiveEffectMountStarted=="function"&&Ne.markComponentPassiveEffectMountStarted(e)}function Dk(){Ne!==null&&typeof Ne.markComponentPassiveEffectMountStopped=="function"&&Ne.markComponentPassiveEffectMountStopped()}function Lk(e){Ne!==null&&typeof Ne.markComponentPassiveEffectUnmountStarted=="function"&&Ne.markComponentPassiveEffectUnmountStarted(e)}function Ok(){Ne!==null&&typeof Ne.markComponentPassiveEffectUnmountStopped=="function"&&Ne.markComponentPassiveEffectUnmountStopped()}function Nk(e){Ne!==null&&typeof Ne.markComponentLayoutEffectMountStarted=="function"&&Ne.markComponentLayoutEffectMountStarted(e)}function Ak(){Ne!==null&&typeof Ne.markComponentLayoutEffectMountStopped=="function"&&Ne.markComponentLayoutEffectMountStopped()}function Fg(e){Ne!==null&&typeof Ne.markComponentLayoutEffectUnmountStarted=="function"&&Ne.markComponentLayoutEffectUnmountStarted(e)}function Hg(){Ne!==null&&typeof Ne.markComponentLayoutEffectUnmountStopped=="function"&&Ne.markComponentLayoutEffectUnmountStopped()}function $k(e,t,n){Ne!==null&&typeof Ne.markComponentErrored=="function"&&Ne.markComponentErrored(e,t,n)}function zk(e,t,n){Ne!==null&&typeof Ne.markComponentSuspended=="function"&&Ne.markComponentSuspended(e,t,n)}function Bk(e){Ne!==null&&typeof Ne.markLayoutEffectsStarted=="function"&&Ne.markLayoutEffectsStarted(e)}function Ik(){Ne!==null&&typeof Ne.markLayoutEffectsStopped=="function"&&Ne.markLayoutEffectsStopped()}function Uk(e){Ne!==null&&typeof Ne.markPassiveEffectsStarted=="function"&&Ne.markPassiveEffectsStarted(e)}function Fk(){Ne!==null&&typeof Ne.markPassiveEffectsStopped=="function"&&Ne.markPassiveEffectsStopped()}function Pg(e){Ne!==null&&typeof Ne.markRenderStarted=="function"&&Ne.markRenderStarted(e)}function Hk(){Ne!==null&&typeof Ne.markRenderYielded=="function"&&Ne.markRenderYielded()}function Wg(){Ne!==null&&typeof Ne.markRenderStopped=="function"&&Ne.markRenderStopped()}function Pk(e){Ne!==null&&typeof Ne.markRenderScheduled=="function"&&Ne.markRenderScheduled(e)}function Wk(e,t){Ne!==null&&typeof Ne.markForceUpdateScheduled=="function"&&Ne.markForceUpdateScheduled(e,t)}function Ph(e,t){Ne!==null&&typeof Ne.markStateUpdateScheduled=="function"&&Ne.markStateUpdateScheduled(e,t)}var yt=0,Kt=1,gn=2,or=8,No=16,Yg=Math.clz32?Math.clz32:Xk,Yk=Math.log,Vk=Math.LN2;function Xk(e){var t=e>>>0;return t===0?32:31-(Yk(t)/Vk|0)|0}var Wh=31,ce=0,Dr=0,Rt=1,ol=2,ti=4,hs=8,Ao=16,cu=32,il=4194240,du=64,Yh=128,Vh=256,Xh=512,Qh=1024,qh=2048,Gh=4096,Kh=8192,Jh=16384,Zh=32768,ep=65536,tp=131072,np=262144,rp=524288,ap=1048576,op=2097152,td=130023424,sl=4194304,ip=8388608,sp=16777216,lp=33554432,up=67108864,Vg=sl,fu=134217728,Xg=268435455,hu=268435456,ps=536870912,Ra=1073741824;function Qk(e){{if(e&Rt)return"Sync";if(e&ol)return"InputContinuousHydration";if(e&ti)return"InputContinuous";if(e&hs)return"DefaultHydration";if(e&Ao)return"Default";if(e&cu)return"TransitionHydration";if(e&il)return"Transition";if(e&td)return"Retry";if(e&fu)return"SelectiveHydration";if(e&hu)return"IdleHydration";if(e&ps)return"Idle";if(e&Ra)return"Offscreen"}}var Wn=-1,nd=du,rd=sl;function pu(e){switch(_s(e)){case Rt:return Rt;case ol:return ol;case ti:return ti;case hs:return hs;case Ao:return Ao;case cu:return cu;case du:case Yh:case Vh:case Xh:case Qh:case qh:case Gh:case Kh:case Jh:case Zh:case ep:case tp:case np:case rp:case ap:case op:return e&il;case sl:case ip:case sp:case lp:case up:return e&td;case fu:return fu;case hu:return hu;case ps:return ps;case Ra:return Ra;default:return f("Should have found matching lanes. This is a bug in React."),e}}function ad(e,t){var n=e.pendingLanes;if(n===ce)return ce;var r=ce,a=e.suspendedLanes,s=e.pingedLanes,u=n&Xg;if(u!==ce){var d=u&~a;if(d!==ce)r=pu(d);else{var h=u&s;h!==ce&&(r=pu(h))}}else{var g=n&~a;g!==ce?r=pu(g):s!==ce&&(r=pu(s))}if(r===ce)return ce;if(t!==ce&&t!==r&&(t&a)===ce){var x=_s(r),L=_s(t);if(x>=L||x===Ao&&(L&il)!==ce)return t}(r&ti)!==ce&&(r|=n&Ao);var D=e.entangledLanes;if(D!==ce)for(var Y=e.entanglements,X=r&D;X>0;){var J=ms(X),je=1<<J;r|=Y[J],X&=~je}return r}function qk(e,t){for(var n=e.eventTimes,r=Wn;t>0;){var a=ms(t),s=1<<a,u=n[a];u>r&&(r=u),t&=~s}return r}function Gk(e,t){switch(e){case Rt:case ol:case ti:return t+250;case hs:case Ao:case cu:case du:case Yh:case Vh:case Xh:case Qh:case qh:case Gh:case Kh:case Jh:case Zh:case ep:case tp:case np:case rp:case ap:case op:return t+5e3;case sl:case ip:case sp:case lp:case up:return Wn;case fu:case hu:case ps:case Ra:return Wn;default:return f("Should have found matching lanes. This is a bug in React."),Wn}}function Kk(e,t){for(var n=e.pendingLanes,r=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,u=n;u>0;){var d=ms(u),h=1<<d,g=s[d];g===Wn?((h&r)===ce||(h&a)!==ce)&&(s[d]=Gk(h,t)):g<=t&&(e.expiredLanes|=h),u&=~h}}function Jk(e){return pu(e.pendingLanes)}function cp(e){var t=e.pendingLanes&~Ra;return t!==ce?t:t&Ra?Ra:ce}function Zk(e){return(e&Rt)!==ce}function dp(e){return(e&Xg)!==ce}function Qg(e){return(e&td)===e}function eC(e){var t=Rt|ti|Ao;return(e&t)===ce}function tC(e){return(e&il)===e}function od(e,t){var n=ol|ti|hs|Ao;return(t&n)!==ce}function nC(e,t){return(t&e.expiredLanes)!==ce}function qg(e){return(e&il)!==ce}function Gg(){var e=nd;return nd<<=1,(nd&il)===ce&&(nd=du),e}function rC(){var e=rd;return rd<<=1,(rd&td)===ce&&(rd=sl),e}function _s(e){return e&-e}function _u(e){return _s(e)}function ms(e){return 31-Yg(e)}function fp(e){return ms(e)}function ja(e,t){return(e&t)!==ce}function ll(e,t){return(e&t)===t}function Wt(e,t){return e|t}function id(e,t){return e&~t}function Kg(e,t){return e&t}function Cj(e){return e}function aC(e,t){return e!==Dr&&e<t?e:t}function hp(e){for(var t=[],n=0;n<Wh;n++)t.push(e);return t}function mu(e,t,n){e.pendingLanes|=t,t!==ps&&(e.suspendedLanes=ce,e.pingedLanes=ce);var r=e.eventTimes,a=fp(t);r[a]=n}function oC(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var n=e.expirationTimes,r=t;r>0;){var a=ms(r),s=1<<a;n[a]=Wn,r&=~s}}function Jg(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function iC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=ce,e.pingedLanes=ce,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var r=e.entanglements,a=e.eventTimes,s=e.expirationTimes,u=n;u>0;){var d=ms(u),h=1<<d;r[d]=ce,a[d]=Wn,s[d]=Wn,u&=~h}}function pp(e,t){for(var n=e.entangledLanes|=t,r=e.entanglements,a=n;a;){var s=ms(a),u=1<<s;u&t|r[s]&t&&(r[s]|=t),a&=~u}}function sC(e,t){var n=_s(t),r;switch(n){case ti:r=ol;break;case Ao:r=hs;break;case du:case Yh:case Vh:case Xh:case Qh:case qh:case Gh:case Kh:case Jh:case Zh:case ep:case tp:case np:case rp:case ap:case op:case sl:case ip:case sp:case lp:case up:r=cu;break;case ps:r=hu;break;default:r=Dr;break}return(r&(e.suspendedLanes|t))!==Dr?Dr:r}function Zg(e,t,n){if(uo)for(var r=e.pendingUpdatersLaneMap;n>0;){var a=fp(n),s=1<<a,u=r[a];u.add(t),n&=~s}}function ev(e,t){if(uo)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;t>0;){var a=fp(t),s=1<<a,u=n[a];u.size>0&&(u.forEach(function(d){var h=d.alternate;(h===null||!r.has(h))&&r.add(d)}),u.clear()),t&=~s}}function tv(e,t){return null}var Ta=Rt,ni=ti,ri=Ao,sd=ps,yu=Dr;function co(){return yu}function Lr(e){yu=e}function lC(e,t){var n=yu;try{return yu=e,t()}finally{yu=n}}function uC(e,t){return e!==0&&e<t?e:t}function cC(e,t){return e>t?e:t}function _p(e,t){return e!==0&&e<t}function nv(e){var t=_s(e);return _p(Ta,t)?_p(ni,t)?dp(t)?ri:sd:ni:Ta}function ld(e){var t=e.current.memoizedState;return t.isDehydrated}var rv;function dC(e){rv=e}function fC(e){rv(e)}var mp;function hC(e){mp=e}var av;function pC(e){av=e}var ov;function _C(e){ov=e}var iv;function mC(e){iv=e}var yp=!1,ud=[],Ri=null,ji=null,Ti=null,gu=new Map,vu=new Map,Mi=[],yC=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput","copy","cut","paste","click","change","contextmenu","reset","submit"];function gC(e){return yC.indexOf(e)>-1}function vC(e,t,n,r,a){return{blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:a,targetContainers:[r]}}function sv(e,t){switch(e){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":{var n=t.pointerId;gu.delete(n);break}case"gotpointercapture":case"lostpointercapture":{var r=t.pointerId;vu.delete(r);break}}}function xu(e,t,n,r,a,s){if(e===null||e.nativeEvent!==s){var u=vC(t,n,r,a,s);if(t!==null){var d=Oi(t);d!==null&&mp(d)}return u}e.eventSystemFlags|=r;var h=e.targetContainers;return a!==null&&h.indexOf(a)===-1&&h.push(a),e}function xC(e,t,n,r,a){switch(t){case"focusin":{var s=a;return Ri=xu(Ri,e,t,n,r,s),!0}case"dragenter":{var u=a;return ji=xu(ji,e,t,n,r,u),!0}case"mouseover":{var d=a;return Ti=xu(Ti,e,t,n,r,d),!0}case"pointerover":{var h=a,g=h.pointerId;return gu.set(g,xu(gu.get(g)||null,e,t,n,r,h)),!0}case"gotpointercapture":{var x=a,L=x.pointerId;return vu.set(L,xu(vu.get(L)||null,e,t,n,r,x)),!0}}return!1}function lv(e){var t=vs(e.target);if(t!==null){var n=ds(t);if(n!==null){var r=n.tag;if(r===de){var a=Lg(n);if(a!==null){e.blockedOn=a,iv(e.priority,function(){av(n)});return}}else if(r===M){var s=n.stateNode;if(ld(s)){e.blockedOn=Og(n);return}}}}e.blockedOn=null}function bC(e){for(var t=ov(),n={blockedOn:null,target:e,priority:t},r=0;r<Mi.length&&_p(t,Mi[r].priority);r++);Mi.splice(r,0,n),r===0&&lv(n)}function cd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;t.length>0;){var n=t[0],r=xp(e.domEventName,e.eventSystemFlags,n,e.nativeEvent);if(r===null){var a=e.nativeEvent,s=new a.constructor(a.type,a);QS(s),a.target.dispatchEvent(s),qS()}else{var u=Oi(r);return u!==null&&mp(u),e.blockedOn=r,!1}t.shift()}return!0}function uv(e,t,n){cd(e)&&n.delete(t)}function wC(){yp=!1,Ri!==null&&cd(Ri)&&(Ri=null),ji!==null&&cd(ji)&&(ji=null),Ti!==null&&cd(Ti)&&(Ti=null),gu.forEach(uv),vu.forEach(uv)}function bu(e,t){e.blockedOn===t&&(e.blockedOn=null,yp||(yp=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,wC)))}function wu(e){if(ud.length>0){bu(ud[0],e);for(var t=1;t<ud.length;t++){var n=ud[t];n.blockedOn===e&&(n.blockedOn=null)}}Ri!==null&&bu(Ri,e),ji!==null&&bu(ji,e),Ti!==null&&bu(Ti,e);var r=function(d){return bu(d,e)};gu.forEach(r),vu.forEach(r);for(var a=0;a<Mi.length;a++){var s=Mi[a];s.blockedOn===e&&(s.blockedOn=null)}for(;Mi.length>0;){var u=Mi[0];if(u.blockedOn!==null)break;lv(u),u.blockedOn===null&&Mi.shift()}}var ul=c.ReactCurrentBatchConfig,gp=!0;function cv(e){gp=!!e}function SC(){return gp}function kC(e,t,n){var r=dv(t),a;switch(r){case Ta:a=CC;break;case ni:a=EC;break;case ri:default:a=vp;break}return a.bind(null,t,n,e)}function CC(e,t,n,r){var a=co(),s=ul.transition;ul.transition=null;try{Lr(Ta),vp(e,t,n,r)}finally{Lr(a),ul.transition=s}}function EC(e,t,n,r){var a=co(),s=ul.transition;ul.transition=null;try{Lr(ni),vp(e,t,n,r)}finally{Lr(a),ul.transition=s}}function vp(e,t,n,r){gp&&RC(e,t,n,r)}function RC(e,t,n,r){var a=xp(e,t,n,r);if(a===null){Np(e,t,r,dd,n),sv(e,r);return}if(xC(a,e,t,n,r)){r.stopPropagation();return}if(sv(e,r),t&ru&&gC(e)){for(;a!==null;){var s=Oi(a);s!==null&&fC(s);var u=xp(e,t,n,r);if(u===null&&Np(e,t,r,dd,n),u===a)break;a=u}a!==null&&r.stopPropagation();return}Np(e,t,r,null,n)}var dd=null;function xp(e,t,n,r){dd=null;var a=Eh(r),s=vs(a);if(s!==null){var u=ds(s);if(u===null)s=null;else{var d=u.tag;if(d===de){var h=Lg(u);if(h!==null)return h;s=null}else if(d===M){var g=u.stateNode;if(ld(g))return Og(u);s=null}else u!==s&&(s=null)}}return dd=s,null}function dv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Ta;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return ni;case"message":{var t=gk();switch(t){case ed:return Ta;case Fh:return ni;case fs:case vk:return ri;case Hh:return sd;default:return ri}}default:return ri}}function jC(e,t,n){return e.addEventListener(t,n,!1),n}function TC(e,t,n){return e.addEventListener(t,n,!0),n}function MC(e,t,n,r){return e.addEventListener(t,n,{capture:!0,passive:r}),n}function DC(e,t,n,r){return e.addEventListener(t,n,{passive:r}),n}var Su=null,bp=null,ku=null;function LC(e){return Su=e,bp=hv(),!0}function OC(){Su=null,bp=null,ku=null}function fv(){if(ku)return ku;var e,t=bp,n=t.length,r,a=hv(),s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===a[s-r];r++);var d=r>1?1-r:void 0;return ku=a.slice(e,d),ku}function hv(){return"value"in Su?Su.value:Su.textContent}function fd(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),t>=32||t===13?t:0}function hd(){return!0}function pv(){return!1}function Ma(e){function t(n,r,a,s,u){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var d in e)if(e.hasOwnProperty(d)){var h=e[d];h?this[d]=h(s):this[d]=s[d]}var g=s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1;return g?this.isDefaultPrevented=hd:this.isDefaultPrevented=pv,this.isPropagationStopped=pv,this}return Bt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hd)},persist:function(){},isPersistent:hd}),t}var cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Ma(cl),Cu=Bt({},cl,{view:0,detail:0}),NC=Ma(Cu),Sp,kp,Eu;function AC(e){e!==Eu&&(Eu&&e.type==="mousemove"?(Sp=e.screenX-Eu.screenX,kp=e.screenY-Eu.screenY):(Sp=0,kp=0),Eu=e)}var pd=Bt({},Cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(AC(e),Sp)},movementY:function(e){return"movementY"in e?e.movementY:kp}}),_v=Ma(pd),$C=Bt({},pd,{dataTransfer:0}),zC=Ma($C),BC=Bt({},Cu,{relatedTarget:0}),Cp=Ma(BC),IC=Bt({},cl,{animationName:0,elapsedTime:0,pseudoElement:0}),UC=Ma(IC),FC=Bt({},cl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),HC=Ma(FC),PC=Bt({},cl,{data:0}),mv=Ma(PC),WC=mv,YC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function XC(e){if(e.key){var t=YC[e.key]||e.key;if(t!=="Unidentified")return t}if(e.type==="keypress"){var n=fd(e);return n===13?"Enter":String.fromCharCode(n)}return e.type==="keydown"||e.type==="keyup"?VC[e.keyCode]||"Unidentified":""}var QC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qC(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=QC[e];return r?!!n[r]:!1}function Ep(e){return qC}var GC=Bt({},Cu,{key:XC,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(e){return e.type==="keypress"?fd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),KC=Ma(GC),JC=Bt({},pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Ma(JC),ZC=Bt({},Cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),e2=Ma(ZC),t2=Bt({},cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),n2=Ma(t2),r2=Bt({},pd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a2=Ma(r2),o2=[9,13,27,32],gv=229,Rp=mn&&"CompositionEvent"in window,Ru=null;mn&&"documentMode"in document&&(Ru=document.documentMode);var i2=mn&&"TextEvent"in window&&!Ru,vv=mn&&(!Rp||Ru&&Ru>8&&Ru<=11),xv=32,bv=String.fromCharCode(xv);function s2(){Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),Un("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),Un("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}var wv=!1;function l2(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function u2(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}function c2(e,t){return e==="keydown"&&t.keyCode===gv}function Sv(e,t){switch(e){case"keyup":return o2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==gv;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kv(e){var t=e.detail;return typeof t=="object"&&"data"in t?t.data:null}function Cv(e){return e.locale==="ko"}var dl=!1;function d2(e,t,n,r,a){var s,u;if(Rp?s=u2(t):dl?Sv(t,r)&&(s="onCompositionEnd"):c2(t,r)&&(s="onCompositionStart"),!s)return null;vv&&!Cv(r)&&(!dl&&s==="onCompositionStart"?dl=LC(a):s==="onCompositionEnd"&&dl&&(u=fv()));var d=vd(n,s);if(d.length>0){var h=new mv(s,t,null,r,a);if(e.push({event:h,listeners:d}),u)h.data=u;else{var g=kv(r);g!==null&&(h.data=g)}}}function f2(e,t){switch(e){case"compositionend":return kv(t);case"keypress":var n=t.which;return n!==xv?null:(wv=!0,bv);case"textInput":var r=t.data;return r===bv&&wv?null:r;default:return null}}function h2(e,t){if(dl){if(e==="compositionend"||!Rp&&Sv(e,t)){var n=fv();return OC(),dl=!1,n}return null}switch(e){case"paste":return null;case"keypress":if(!l2(t)){if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vv&&!Cv(t)?null:t.data;default:return null}}function p2(e,t,n,r,a){var s;if(i2?s=f2(t,r):s=h2(t,r),!s)return null;var u=vd(n,"onBeforeInput");if(u.length>0){var d=new WC("onBeforeInput","beforeinput",null,r,a);e.push({event:d,listeners:u}),d.data=s}}function _2(e,t,n,r,a,s,u){d2(e,t,n,r,a),p2(e,t,n,r,a)}var m2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m2[e.type]:t==="textarea"}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function y2(e){if(!mn)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n=typeof r[t]=="function"}return n}function g2(){Un("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}function Rv(e,t,n,r){Sg(r);var a=vd(t,"onChange");if(a.length>0){var s=new wp("onChange","change",null,n,r);e.push({event:s,listeners:a})}}var ju=null,Tu=null;function v2(e){var t=e.nodeName&&e.nodeName.toLowerCase();return t==="select"||t==="input"&&e.type==="file"}function x2(e){var t=[];Rv(t,Tu,e,Eh(e)),Rg(b2,t)}function b2(e){Yv(e,0)}function _d(e){var t=yl(e);if(ao(t))return e}function w2(e,t){if(e==="change")return t}var jv=!1;mn&&(jv=y2("input")&&(!document.documentMode||document.documentMode>9));function S2(e,t){ju=e,Tu=t,ju.attachEvent("onpropertychange",Mv)}function Tv(){ju&&(ju.detachEvent("onpropertychange",Mv),ju=null,Tu=null)}function Mv(e){e.propertyName==="value"&&_d(Tu)&&x2(e)}function k2(e,t,n){e==="focusin"?(Tv(),S2(t,n)):e==="focusout"&&Tv()}function C2(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _d(Tu)}function E2(e){var t=e.nodeName;return t&&t.toLowerCase()==="input"&&(e.type==="checkbox"||e.type==="radio")}function R2(e,t){if(e==="click")return _d(t)}function j2(e,t){if(e==="input"||e==="change")return _d(t)}function T2(e){var t=e._wrapperState;!t||!t.controlled||e.type!=="number"||ht(e,"number",e.value)}function M2(e,t,n,r,a,s,u){var d=n?yl(n):window,h,g;if(v2(d)?h=w2:Ev(d)?jv?h=j2:(h=C2,g=k2):E2(d)&&(h=R2),h){var x=h(t,n);if(x){Rv(e,x,r,a);return}}g&&g(t,d,n),t==="focusout"&&T2(d)}function D2(){Fn("onMouseEnter",["mouseout","mouseover"]),Fn("onMouseLeave",["mouseout","mouseover"]),Fn("onPointerEnter",["pointerout","pointerover"]),Fn("onPointerLeave",["pointerout","pointerover"])}function L2(e,t,n,r,a,s,u){var d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout";if(d&&!GS(r)){var g=r.relatedTarget||r.fromElement;if(g&&(vs(g)||Wu(g)))return}if(!(!h&&!d)){var x;if(a.window===a)x=a;else{var L=a.ownerDocument;L?x=L.defaultView||L.parentWindow:x=window}var D,Y;if(h){var X=r.relatedTarget||r.toElement;if(D=n,Y=X?vs(X):null,Y!==null){var J=ds(Y);(Y!==J||Y.tag!==H&&Y.tag!==I)&&(Y=null)}}else D=null,Y=n;if(D!==Y){var je=_v,pt="onMouseLeave",tt="onMouseEnter",Zt="mouse";(t==="pointerout"||t==="pointerover")&&(je=yv,pt="onPointerLeave",tt="onPointerEnter",Zt="pointer");var Qt=D==null?x:yl(D),U=Y==null?x:yl(Y),Z=new je(pt,Zt+"leave",D,r,a);Z.target=Qt,Z.relatedTarget=U;var F=null,pe=vs(a);if(pe===n){var ze=new je(tt,Zt+"enter",Y,r,a);ze.target=U,ze.relatedTarget=Qt,F=ze}n6(e,Z,F,D,Y)}}}function O2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Da=typeof Object.is=="function"?Object.is:O2;function Mu(e,t){if(Da(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++){var s=n[a];if(!Xt.call(t,s)||!Da(e[s],t[s]))return!1}return!0}function Dv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function N2(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function Lv(e,t){for(var n=Dv(e),r=0,a=0;n;){if(n.nodeType===Yr){if(a=r+n.textContent.length,r<=t&&a>=t)return{node:n,offset:t-r};r=a}n=Dv(N2(n))}}function A2(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||r.rangeCount===0)return null;var a=r.anchorNode,s=r.anchorOffset,u=r.focusNode,d=r.focusOffset;try{a.nodeType,u.nodeType}catch{return null}return $2(e,a,s,u,d)}function $2(e,t,n,r,a){var s=0,u=-1,d=-1,h=0,g=0,x=e,L=null;e:for(;;){for(var D=null;x===t&&(n===0||x.nodeType===Yr)&&(u=s+n),x===r&&(a===0||x.nodeType===Yr)&&(d=s+a),x.nodeType===Yr&&(s+=x.nodeValue.length),(D=x.firstChild)!==null;)L=x,x=D;for(;;){if(x===e)break e;if(L===t&&++h===n&&(u=s),L===r&&++g===a&&(d=s),(D=x.nextSibling)!==null)break;x=L,L=x.parentNode}x=D}return u===-1||d===-1?null:{start:u,end:d}}function z2(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;if(r.getSelection){var a=r.getSelection(),s=e.textContent.length,u=Math.min(t.start,s),d=t.end===void 0?u:Math.min(t.end,s);if(!a.extend&&u>d){var h=d;d=u,u=h}var g=Lv(e,u),x=Lv(e,d);if(g&&x){if(a.rangeCount===1&&a.anchorNode===g.node&&a.anchorOffset===g.offset&&a.focusNode===x.node&&a.focusOffset===x.offset)return;var L=n.createRange();L.setStart(g.node,g.offset),a.removeAllRanges(),u>d?(a.addRange(L),a.extend(x.node,x.offset)):(L.setEnd(x.node,x.offset),a.addRange(L))}}}function Ov(e){return e&&e.nodeType===Yr}function Nv(e,t){return!e||!t?!1:e===t?!0:Ov(e)?!1:Ov(t)?Nv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1}function B2(e){return e&&e.ownerDocument&&Nv(e.ownerDocument.documentElement,e)}function I2(e){try{return typeof e.contentWindow.location.href=="string"}catch{return!1}}function Av(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){if(I2(t))e=t.contentWindow;else return t;t=Ha(e.document)}return t}function jp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function U2(){var e=Av();return{focusedElem:e,selectionRange:jp(e)?H2(e):null}}function F2(e){var t=Av(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&B2(n)){r!==null&&jp(n)&&P2(n,r);for(var a=[],s=n;s=s.parentNode;)s.nodeType===hr&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});typeof n.focus=="function"&&n.focus();for(var u=0;u<a.length;u++){var d=a[u];d.element.scrollLeft=d.left,d.element.scrollTop=d.top}}}function H2(e){var t;return"selectionStart"in e?t={start:e.selectionStart,end:e.selectionEnd}:t=A2(e),t||{start:0,end:0}}function P2(e,t){var n=t.start,r=t.end;r===void 0&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):z2(e,t)}var W2=mn&&"documentMode"in document&&document.documentMode<=11;function Y2(){Un("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}var fl=null,Tp=null,Du=null,Mp=!1;function V2(e){if("selectionStart"in e&&jp(e))return{start:e.selectionStart,end:e.selectionEnd};var t=e.ownerDocument&&e.ownerDocument.defaultView||window,n=t.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function X2(e){return e.window===e?e.document:e.nodeType===Ya?e:e.ownerDocument}function $v(e,t,n){var r=X2(n);if(!(Mp||fl==null||fl!==Ha(r))){var a=V2(fl);if(!Du||!Mu(Du,a)){Du=a;var s=vd(Tp,"onSelect");if(s.length>0){var u=new wp("onSelect","select",null,t,n);e.push({event:u,listeners:s}),u.target=fl}}}}function Q2(e,t,n,r,a,s,u){var d=n?yl(n):window;switch(t){case"focusin":(Ev(d)||d.contentEditable==="true")&&(fl=d,Tp=n,Du=null);break;case"focusout":fl=null,Tp=null,Du=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,$v(e,r,a);break;case"selectionchange":if(W2)break;case"keydown":case"keyup":$v(e,r,a)}}function md(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hl={animationend:md("Animation","AnimationEnd"),animationiteration:md("Animation","AnimationIteration"),animationstart:md("Animation","AnimationStart"),transitionend:md("Transition","TransitionEnd")},Dp={},zv={};mn&&(zv=document.createElement("div").style,"AnimationEvent"in window||(delete hl.animationend.animation,delete hl.animationiteration.animation,delete hl.animationstart.animation),"TransitionEvent"in window||delete hl.transitionend.transition);function yd(e){if(Dp[e])return Dp[e];if(!hl[e])return e;var t=hl[e];for(var n in t)if(t.hasOwnProperty(n)&&n in zv)return Dp[e]=t[n];return e}var Bv=yd("animationend"),Iv=yd("animationiteration"),Uv=yd("animationstart"),Fv=yd("transitionend"),Hv=new Map,Pv=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];function Di(e,t){Hv.set(e,t),Un(t,[e])}function q2(){for(var e=0;e<Pv.length;e++){var t=Pv[e],n=t.toLowerCase(),r=t[0].toUpperCase()+t.slice(1);Di(n,"on"+r)}Di(Bv,"onAnimationEnd"),Di(Iv,"onAnimationIteration"),Di(Uv,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(Fv,"onTransitionEnd")}function G2(e,t,n,r,a,s,u){var d=Hv.get(t);if(d!==void 0){var h=wp,g=t;switch(t){case"keypress":if(fd(r)===0)return;case"keydown":case"keyup":h=KC;break;case"focusin":g="focus",h=Cp;break;case"focusout":g="blur",h=Cp;break;case"beforeblur":case"afterblur":h=Cp;break;case"click":if(r.button===2)return;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=_v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=zC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=e2;break;case Bv:case Iv:case Uv:h=UC;break;case Fv:h=n2;break;case"scroll":h=NC;break;case"wheel":h=a2;break;case"copy":case"cut":case"paste":h=HC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=yv;break}var x=(s&ru)!==0;{var L=!x&&t==="scroll",D=e6(n,d,r.type,x,L);if(D.length>0){var Y=new h(d,g,null,r,a);e.push({event:Y,listeners:D})}}}}q2(),D2(),g2(),Y2(),s2();function K2(e,t,n,r,a,s,u){G2(e,t,n,r,a,s);var d=(s&XS)===0;d&&(L2(e,t,n,r,a),M2(e,t,n,r,a),Q2(e,t,n,r,a),_2(e,t,n,r,a))}var Lu=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],Lp=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(Lu));function Wv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ok(r,t,void 0,e),e.currentTarget=null}function J2(e,t,n){var r;if(n)for(var a=t.length-1;a>=0;a--){var s=t[a],u=s.instance,d=s.currentTarget,h=s.listener;if(u!==r&&e.isPropagationStopped())return;Wv(e,h,d),r=u}else for(var g=0;g<t.length;g++){var x=t[g],L=x.instance,D=x.currentTarget,Y=x.listener;if(L!==r&&e.isPropagationStopped())return;Wv(e,Y,D),r=L}}function Yv(e,t){for(var n=(t&ru)!==0,r=0;r<e.length;r++){var a=e[r],s=a.event,u=a.listeners;J2(s,u,n)}ik()}function Z2(e,t,n,r,a){var s=Eh(n),u=[];K2(u,e,r,n,s,t),Yv(u,t)}function Vn(e,t){Lp.has(e)||f('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n=!1,r=T4(t),a=r6(e);r.has(a)||(Vv(t,e,Ch,n),r.add(a))}function Op(e,t,n){Lp.has(e)&&!t&&f('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var r=0;t&&(r|=ru),Vv(n,e,r,t)}var gd="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[gd]){e[gd]=!0,mr.forEach(function(n){n!=="selectionchange"&&(Lp.has(n)||Op(n,!1,e),Op(n,!0,e))});var t=e.nodeType===Ya?e:e.ownerDocument;t!==null&&(t[gd]||(t[gd]=!0,Op("selectionchange",!1,t)))}}function Vv(e,t,n,r,a){var s=kC(e,t,n),u=void 0;Th&&(t==="touchstart"||t==="touchmove"||t==="wheel")&&(u=!0),e=e,r?u!==void 0?MC(e,t,s,u):TC(e,t,s):u!==void 0?DC(e,t,s,u):jC(e,t,s)}function Xv(e,t){return e===t||e.nodeType===nr&&e.parentNode===t}function Np(e,t,n,r,a){var s=r;if((t&bg)===0&&(t&Ch)===0){var u=a;if(r!==null){var d=r;e:for(;;){if(d===null)return;var h=d.tag;if(h===M||h===A){var g=d.stateNode.containerInfo;if(Xv(g,u))break;if(h===A)for(var x=d.return;x!==null;){var L=x.tag;if(L===M||L===A){var D=x.stateNode.containerInfo;if(Xv(D,u))return}x=x.return}for(;g!==null;){var Y=vs(g);if(Y===null)return;var X=Y.tag;if(X===H||X===I){d=s=Y;continue e}g=g.parentNode}}d=d.return}}}Rg(function(){return Z2(e,t,n,s)})}function Nu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function e6(e,t,n,r,a,s){for(var u=t!==null?t+"Capture":null,d=r?u:t,h=[],g=e,x=null;g!==null;){var L=g,D=L.stateNode,Y=L.tag;if(Y===H&&D!==null&&(x=D,d!==null)){var X=ou(g,d);X!=null&&h.push(Nu(g,X,x))}if(a)break;g=g.return}return h}function vd(e,t){for(var n=t+"Capture",r=[],a=e;a!==null;){var s=a,u=s.stateNode,d=s.tag;if(d===H&&u!==null){var h=u,g=ou(a,n);g!=null&&r.unshift(Nu(a,g,h));var x=ou(a,t);x!=null&&r.push(Nu(a,x,h))}a=a.return}return r}function pl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==H);return e||null}function t6(e,t){for(var n=e,r=t,a=0,s=n;s;s=pl(s))a++;for(var u=0,d=r;d;d=pl(d))u++;for(;a-u>0;)n=pl(n),a--;for(;u-a>0;)r=pl(r),u--;for(var h=a;h--;){if(n===r||r!==null&&n===r.alternate)return n;n=pl(n),r=pl(r)}return null}function Qv(e,t,n,r,a){for(var s=t._reactName,u=[],d=n;d!==null&&d!==r;){var h=d,g=h.alternate,x=h.stateNode,L=h.tag;if(g!==null&&g===r)break;if(L===H&&x!==null){var D=x;if(a){var Y=ou(d,s);Y!=null&&u.unshift(Nu(d,Y,D))}else if(!a){var X=ou(d,s);X!=null&&u.push(Nu(d,X,D))}}d=d.return}u.length!==0&&e.push({event:t,listeners:u})}function n6(e,t,n,r,a){var s=r&&a?t6(r,a):null;r!==null&&Qv(e,t,r,s,!1),a!==null&&n!==null&&Qv(e,n,a,s,!0)}function r6(e,t){return e+"__bubble"}var _a=!1,Au="dangerouslySetInnerHTML",xd="suppressContentEditableWarning",Li="suppressHydrationWarning",qv="autoFocus",ys="children",gs="style",bd="__html",Ap,wd,$u,Gv,Sd,Kv,Jv;Ap={dialog:!0,webview:!0},wd=function(e,t){kh(e,t),FS(e,t),VS(e,t,{registrationNameDependencies:Sn,possibleRegistrationNames:Gn})},Kv=mn&&!document.documentMode,$u=function(e,t,n){if(!_a){var r=kd(n),a=kd(t);a!==r&&(_a=!0,f("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(a),JSON.stringify(r)))}},Gv=function(e){if(!_a){_a=!0;var t=[];e.forEach(function(n){t.push(n)}),f("Extra attributes from the server: %s",t)}},Sd=function(e,t){t===!1?f("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):f("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},Jv=function(e,t){var n=e.namespaceURI===Ca?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};var a6=/\r\n?/g,o6=/\u0000|\uFFFD/g;function kd(e){lt(e);var t=typeof e=="string"?e:""+e;return t.replace(a6,`
`).replace(o6,"")}function Cd(e,t,n,r){var a=kd(t),s=kd(e);if(s!==a&&(r&&(_a||(_a=!0,f('Text content did not match. Server: "%s" Client: "%s"',s,a))),n&&Ke))throw new Error("Text content does not match server-rendered HTML.")}function Zv(e){return e.nodeType===Ya?e:e.ownerDocument}function i6(){}function Ed(e){e.onclick=i6}function s6(e,t,n,r,a){for(var s in r)if(r.hasOwnProperty(s)){var u=r[s];if(s===gs)u&&Object.freeze(u),wt(t,u);else if(s===Au){var d=u?u[bd]:void 0;d!=null&&Xc(t,d)}else if(s===ys)if(typeof u=="string"){var h=e!=="textarea"||u!=="";h&&is(t,u)}else typeof u=="number"&&is(t,""+u);else s===xd||s===Li||s===qv||(Sn.hasOwnProperty(s)?u!=null&&(typeof u!="function"&&Sd(s,u),s==="onScroll"&&Vn("scroll",t)):u!=null&&Ot(t,s,u,a))}}function l6(e,t,n,r){for(var a=0;a<t.length;a+=2){var s=t[a],u=t[a+1];s===gs?wt(e,u):s===Au?Xc(e,u):s===ys?is(e,u):Ot(e,s,u,r)}}function u6(e,t,n,r){var a,s=Zv(n),u,d=r;if(d===Ca&&(d=tu(e)),d===Ca){if(a=ra(e,t),!a&&e!==e.toLowerCase()&&f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),e==="script"){var h=s.createElement("div");h.innerHTML="<script><\/script>";var g=h.firstChild;u=h.removeChild(g)}else if(typeof t.is=="string")u=s.createElement(e,{is:t.is});else if(u=s.createElement(e),e==="select"){var x=u;t.multiple?x.multiple=!0:t.size&&(x.size=t.size)}}else u=s.createElementNS(d,e);return d===Ca&&!a&&Object.prototype.toString.call(u)==="[object HTMLUnknownElement]"&&!Xt.call(Ap,e)&&(Ap[e]=!0,f("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),u}function c6(e,t){return Zv(t).createTextNode(e)}function d6(e,t,n,r){var a=ra(t,n);wd(t,n);var s;switch(t){case"dialog":Vn("cancel",e),Vn("close",e),s=n;break;case"iframe":case"object":case"embed":Vn("load",e),s=n;break;case"video":case"audio":for(var u=0;u<Lu.length;u++)Vn(Lu[u],e);s=n;break;case"source":Vn("error",e),s=n;break;case"img":case"image":case"link":Vn("error",e),Vn("load",e),s=n;break;case"details":Vn("toggle",e),s=n;break;case"input":ns(e,n),s=ta(e,n),Vn("invalid",e);break;case"option":hn(e,n),s=n;break;case"select":Lo(e,n),s=Wa(e,n),Vn("invalid",e);break;case"textarea":os(e,n),s=Vs(e,n),Vn("invalid",e);break;default:s=n}switch(Go(t,s),s6(t,e,r,s,a),t){case"input":Mo(e),W(e,n,!1);break;case"textarea":Mo(e),Vc(e);break;case"option":Cn(e,n);break;case"select":Ws(e,n);break;default:typeof s.onClick=="function"&&Ed(e);break}}function f6(e,t,n,r,a){wd(t,r);var s=null,u,d;switch(t){case"input":u=ta(e,n),d=ta(e,r),s=[];break;case"select":u=Wa(e,n),d=Wa(e,r),s=[];break;case"textarea":u=Vs(e,n),d=Vs(e,r),s=[];break;default:u=n,d=r,typeof u.onClick!="function"&&typeof d.onClick=="function"&&Ed(e);break}Go(t,d);var h,g,x=null;for(h in u)if(!(d.hasOwnProperty(h)||!u.hasOwnProperty(h)||u[h]==null))if(h===gs){var L=u[h];for(g in L)L.hasOwnProperty(g)&&(x||(x={}),x[g]="")}else h===Au||h===ys||h===xd||h===Li||h===qv||(Sn.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in d){var D=d[h],Y=u!=null?u[h]:void 0;if(!(!d.hasOwnProperty(h)||D===Y||D==null&&Y==null))if(h===gs)if(D&&Object.freeze(D),Y){for(g in Y)Y.hasOwnProperty(g)&&(!D||!D.hasOwnProperty(g))&&(x||(x={}),x[g]="");for(g in D)D.hasOwnProperty(g)&&Y[g]!==D[g]&&(x||(x={}),x[g]=D[g])}else x||(s||(s=[]),s.push(h,x)),x=D;else if(h===Au){var X=D?D[bd]:void 0,J=Y?Y[bd]:void 0;X!=null&&J!==X&&(s=s||[]).push(h,X)}else h===ys?(typeof D=="string"||typeof D=="number")&&(s=s||[]).push(h,""+D):h===xd||h===Li||(Sn.hasOwnProperty(h)?(D!=null&&(typeof D!="function"&&Sd(h,D),h==="onScroll"&&Vn("scroll",e)),!s&&Y!==D&&(s=[])):(s=s||[]).push(h,D))}return x&&(Pn(x,d[gs]),(s=s||[]).push(gs,x)),s}function h6(e,t,n,r,a){n==="input"&&a.type==="radio"&&a.name!=null&&p(e,a);var s=ra(n,r),u=ra(n,a);switch(l6(e,t,s,u),n){case"input":C(e,a);break;case"textarea":ka(e,a);break;case"select":as(e,a);break}}function p6(e){{var t=e.toLowerCase();return Ea.hasOwnProperty(t)&&Ea[t]||null}}function _6(e,t,n,r,a,s,u){var d,h;switch(d=ra(t,n),wd(t,n),t){case"dialog":Vn("cancel",e),Vn("close",e);break;case"iframe":case"object":case"embed":Vn("load",e);break;case"video":case"audio":for(var g=0;g<Lu.length;g++)Vn(Lu[g],e);break;case"source":Vn("error",e);break;case"img":case"image":case"link":Vn("error",e),Vn("load",e);break;case"details":Vn("toggle",e);break;case"input":ns(e,n),Vn("invalid",e);break;case"option":hn(e,n);break;case"select":Lo(e,n),Vn("invalid",e);break;case"textarea":os(e,n),Vn("invalid",e);break}Go(t,n);{h=new Set;for(var x=e.attributes,L=0;L<x.length;L++){var D=x[L].name.toLowerCase();switch(D){case"value":break;case"checked":break;case"selected":break;default:h.add(x[L].name)}}}var Y=null;for(var X in n)if(n.hasOwnProperty(X)){var J=n[X];if(X===ys)typeof J=="string"?e.textContent!==J&&(n[Li]!==!0&&Cd(e.textContent,J,s,u),Y=[ys,J]):typeof J=="number"&&e.textContent!==""+J&&(n[Li]!==!0&&Cd(e.textContent,J,s,u),Y=[ys,""+J]);else if(Sn.hasOwnProperty(X))J!=null&&(typeof J!="function"&&Sd(X,J),X==="onScroll"&&Vn("scroll",e));else if(u&&typeof d=="boolean"){var je=void 0,pt=rt(X);if(n[Li]!==!0){if(!(X===xd||X===Li||X==="value"||X==="checked"||X==="selected")){if(X===Au){var tt=e.innerHTML,Zt=J?J[bd]:void 0;if(Zt!=null){var Qt=Jv(e,Zt);Qt!==tt&&$u(X,tt,Qt)}}else if(X===gs){if(h.delete(X),Kv){var U=Jn(J);je=e.getAttribute("style"),U!==je&&$u(X,je,U)}}else if(d&&!Gt)h.delete(X.toLowerCase()),je=et(e,X,J),J!==je&&$u(X,je,J);else if(!oe(X,pt,d)&&!st(X,J,pt,d)){var Z=!1;if(pt!==null)h.delete(pt.attributeName),je=On(e,X,J,pt);else{var F=r;if(F===Ca&&(F=tu(t)),F===Ca)h.delete(X.toLowerCase());else{var pe=p6(X);pe!==null&&pe!==X&&(Z=!0,h.delete(pe)),h.delete(X)}je=et(e,X,J)}var ze=Gt;!ze&&J!==je&&!Z&&$u(X,je,J)}}}}}switch(u&&h.size>0&&n[Li]!==!0&&Gv(h),t){case"input":Mo(e),W(e,n,!0);break;case"textarea":Mo(e),Vc(e);break;case"select":case"option":break;default:typeof n.onClick=="function"&&Ed(e);break}return Y}function m6(e,t,n){var r=e.nodeValue!==t;return r}function $p(e,t){{if(_a)return;_a=!0,f("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase())}}function zp(e,t){{if(_a)return;_a=!0,f('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase())}}function Bp(e,t,n){{if(_a)return;_a=!0,f("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase())}}function Ip(e,t){{if(t===""||_a)return;_a=!0,f('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())}}function y6(e,t,n){switch(t){case"input":q(e,n);return;case"textarea":Zl(e,n);return;case"select":wi(e,n);return}}var zu=function(){},Bu=function(){};{var g6=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],e0=["applet","caption","html","table","td","th","marquee","object","template","foreignObject","desc","title"],v6=e0.concat(["button"]),x6=["dd","dt","li","option","optgroup","p","rp","rt"],t0={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};Bu=function(e,t){var n=Bt({},e||t0),r={tag:t};return e0.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),v6.indexOf(t)!==-1&&(n.pTagInButtonScope=null),g6.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t==="form"&&(n.formTag=r),t==="a"&&(n.aTagInScope=r),t==="button"&&(n.buttonTagInScope=r),t==="nobr"&&(n.nobrTagInScope=r),t==="p"&&(n.pTagInButtonScope=r),t==="li"&&(n.listItemTagAutoclosing=r),(t==="dd"||t==="dt")&&(n.dlItemTagAutoclosing=r),n};var b6=function(e,t){switch(t){case"select":return e==="option"||e==="optgroup"||e==="#text";case"optgroup":return e==="option"||e==="#text";case"option":return e==="#text";case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return x6.indexOf(t)===-1;case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null}return!0},w6=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},n0={};zu=function(e,t,n){n=n||t0;var r=n.current,a=r&&r.tag;t!=null&&(e!=null&&f("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var s=b6(e,a)?null:r,u=s?null:w6(e,n),d=s||u;if(d){var h=d.tag,g=!!s+"|"+e+"|"+h;if(!n0[g]){n0[g]=!0;var x=e,L="";if(e==="#text"?/\S/.test(t)?x="Text nodes":(x="Whitespace text nodes",L=" Make sure you don't have any extra whitespace between tags on each line of your source code."):x="<"+e+">",s){var D="";h==="table"&&e==="tr"&&(D+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),f("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",x,h,L,D)}else f("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",x,h)}}}}var Rd="suppressHydrationWarning",jd="$",Td="/$",Iu="$?",Uu="$!",S6="style",Up=null,Fp=null;function k6(e){var t,n,r=e.nodeType;switch(r){case Ya:case Qs:{t=r===Ya?"#document":"#fragment";var a=e.documentElement;n=a?a.namespaceURI:lo(null,"");break}default:{var s=r===nr?e.parentNode:e,u=s.namespaceURI||null;t=s.tagName,n=lo(u,t);break}}{var d=t.toLowerCase(),h=Bu(null,d);return{namespace:n,ancestorInfo:h}}}function C6(e,t,n){{var r=e,a=lo(r.namespace,t),s=Bu(r.ancestorInfo,t);return{namespace:a,ancestorInfo:s}}}function Ej(e){return e}function E6(e){Up=SC(),Fp=U2();var t=null;return cv(!1),t}function R6(e){F2(Fp),cv(Up),Up=null,Fp=null}function j6(e,t,n,r,a){var s;{var u=r;if(zu(e,null,u.ancestorInfo),typeof t.children=="string"||typeof t.children=="number"){var d=""+t.children,h=Bu(u.ancestorInfo,e);zu(null,d,h)}s=u.namespace}var g=u6(e,t,n,s);return Pu(a,g),qp(g,t),g}function T6(e,t){e.appendChild(t)}function M6(e,t,n,r,a){switch(d6(e,t,n,r),t){case"button":case"input":case"select":case"textarea":return!!n.autoFocus;case"img":return!0;default:return!1}}function D6(e,t,n,r,a,s){{var u=s;if(typeof r.children!=typeof n.children&&(typeof r.children=="string"||typeof r.children=="number")){var d=""+r.children,h=Bu(u.ancestorInfo,t);zu(null,d,h)}}return f6(e,t,n,r)}function Hp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function L6(e,t,n,r){{var a=n;zu(null,e,a.ancestorInfo)}var s=c6(e,t);return Pu(r,s),s}function O6(){var e=window.event;return e===void 0?ri:dv(e.type)}var Pp=typeof setTimeout=="function"?setTimeout:void 0,N6=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=-1,r0=typeof Promise=="function"?Promise:void 0,A6=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(e){return r0.resolve(null).then(e).catch($6)}:Pp;function $6(e){setTimeout(function(){throw e})}function z6(e,t,n,r){switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();return;case"img":{n.src&&(e.src=n.src);return}}}function B6(e,t,n,r,a,s){h6(e,t,n,r,a),qp(e,a)}function a0(e){is(e,"")}function I6(e,t,n){e.nodeValue=n}function U6(e,t){e.appendChild(t)}function F6(e,t){var n;e.nodeType===nr?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t));var r=e._reactRootContainer;r==null&&n.onclick===null&&Ed(n)}function H6(e,t,n){e.insertBefore(t,n)}function P6(e,t,n){e.nodeType===nr?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)}function W6(e,t){e.removeChild(t)}function Y6(e,t){e.nodeType===nr?e.parentNode.removeChild(t):e.removeChild(t)}function Yp(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===nr){var s=a.data;if(s===Td)if(r===0){e.removeChild(a),wu(t);return}else r--;else(s===jd||s===Iu||s===Uu)&&r++}n=a}while(n);wu(t)}function V6(e,t){e.nodeType===nr?Yp(e.parentNode,t):e.nodeType===hr&&Yp(e,t),wu(e)}function X6(e){e=e;var t=e.style;typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"}function Q6(e){e.nodeValue=""}function q6(e,t){e=e;var n=t[S6],r=n!=null&&n.hasOwnProperty("display")?n.display:null;e.style.display=qs("display",r)}function G6(e,t){e.nodeValue=t}function K6(e){e.nodeType===hr?e.textContent="":e.nodeType===Ya&&e.documentElement&&e.removeChild(e.documentElement)}function J6(e,t,n){return e.nodeType!==hr||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e}function Z6(e,t){return t===""||e.nodeType!==Yr?null:e}function e4(e){return e.nodeType!==nr?null:e}function o0(e){return e.data===Iu}function Vp(e){return e.data===Uu}function t4(e){var t=e.nextSibling&&e.nextSibling.dataset,n,r,a;return t&&(n=t.dgst,r=t.msg,a=t.stck),{message:r,digest:n,stack:a}}function n4(e,t){e._reactRetry=t}function Md(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===hr||t===Yr)break;if(t===nr){var n=e.data;if(n===jd||n===Uu||n===Iu)break;if(n===Td)return null}}return e}function Fu(e){return Md(e.nextSibling)}function r4(e){return Md(e.firstChild)}function a4(e){return Md(e.firstChild)}function o4(e){return Md(e.nextSibling)}function i4(e,t,n,r,a,s,u){Pu(s,e),qp(e,n);var d;{var h=a;d=h.namespace}var g=(s.mode&Kt)!==yt;return _6(e,t,n,d,r,g,u)}function s4(e,t,n,r){return Pu(n,e),n.mode&Kt,m6(e,t)}function l4(e,t){Pu(t,e)}function u4(e){for(var t=e.nextSibling,n=0;t;){if(t.nodeType===nr){var r=t.data;if(r===Td){if(n===0)return Fu(t);n--}else(r===jd||r===Uu||r===Iu)&&n++}t=t.nextSibling}return null}function i0(e){for(var t=e.previousSibling,n=0;t;){if(t.nodeType===nr){var r=t.data;if(r===jd||r===Uu||r===Iu){if(n===0)return t;n--}else r===Td&&n++}t=t.previousSibling}return null}function c4(e){wu(e)}function d4(e){wu(e)}function f4(e){return e!=="head"&&e!=="body"}function h4(e,t,n,r){var a=!0;Cd(t.nodeValue,n,r,a)}function p4(e,t,n,r,a,s){if(t[Rd]!==!0){var u=!0;Cd(r.nodeValue,a,s,u)}}function _4(e,t){t.nodeType===hr?$p(e,t):t.nodeType===nr||zp(e,t)}function m4(e,t){{var n=e.parentNode;n!==null&&(t.nodeType===hr?$p(n,t):t.nodeType===nr||zp(n,t))}}function y4(e,t,n,r,a){(a||t[Rd]!==!0)&&(r.nodeType===hr?$p(n,r):r.nodeType===nr||zp(n,r))}function g4(e,t,n){Bp(e,t)}function v4(e,t){Ip(e,t)}function x4(e,t,n){{var r=e.parentNode;r!==null&&Bp(r,t)}}function b4(e,t){{var n=e.parentNode;n!==null&&Ip(n,t)}}function w4(e,t,n,r,a,s){(s||t[Rd]!==!0)&&Bp(n,r)}function S4(e,t,n,r,a){(a||t[Rd]!==!0)&&Ip(n,r)}function k4(e){f("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.nodeName.toLowerCase())}function C4(e){Ou(e)}var _l=Math.random().toString(36).slice(2),ml="__reactFiber$"+_l,Xp="__reactProps$"+_l,Hu="__reactContainer$"+_l,Qp="__reactEvents$"+_l,E4="__reactListeners$"+_l,R4="__reactHandles$"+_l;function j4(e){delete e[ml],delete e[Xp],delete e[Qp],delete e[E4],delete e[R4]}function Pu(e,t){t[ml]=e}function Dd(e,t){t[Hu]=e}function s0(e){e[Hu]=null}function Wu(e){return!!e[Hu]}function vs(e){var t=e[ml];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hu]||n[ml],t){var r=t.alternate;if(t.child!==null||r!==null&&r.child!==null)for(var a=i0(e);a!==null;){var s=a[ml];if(s)return s;a=i0(a)}return t}e=n,n=e.parentNode}return null}function Oi(e){var t=e[ml]||e[Hu];return t&&(t.tag===H||t.tag===I||t.tag===de||t.tag===M)?t:null}function yl(e){if(e.tag===H||e.tag===I)return e.stateNode;throw new Error("getNodeFromInstance: Invalid argument.")}function Ld(e){return e[Xp]||null}function qp(e,t){e[Xp]=t}function T4(e){var t=e[Qp];return t===void 0&&(t=e[Qp]=new Set),t}var l0={},u0=c.ReactDebugCurrentFrame;function Od(e){if(e){var t=e._owner,n=Ia(e.type,e._source,t?t.type:null);u0.setExtraStackFrame(n)}else u0.setExtraStackFrame(null)}function fo(e,t,n,r,a){{var s=Function.call.bind(Xt);for(var u in e)if(s(e,u)){var d=void 0;try{if(typeof e[u]!="function"){var h=Error((r||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}d=e[u](t,u,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){d=g}d&&!(d instanceof Error)&&(Od(a),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,u,typeof d),Od(null)),d instanceof Error&&!(d.message in l0)&&(l0[d.message]=!0,Od(a),f("Failed %s type: %s",n,d.message),Od(null))}}}var Gp=[],Nd;Nd=[];var ai=-1;function Ni(e){return{current:e}}function Xr(e,t){if(ai<0){f("Unexpected pop.");return}t!==Nd[ai]&&f("Unexpected Fiber popped."),e.current=Gp[ai],Gp[ai]=null,Nd[ai]=null,ai--}function Qr(e,t,n){ai++,Gp[ai]=e.current,Nd[ai]=n,e.current=t}var Kp;Kp={};var La={};Object.freeze(La);var oi=Ni(La),$o=Ni(!1),Jp=La;function gl(e,t,n){return n&&zo(t)?Jp:oi.current}function c0(e,t,n){{var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}}function vl(e,t){{var n=e.type,r=n.contextTypes;if(!r)return La;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var s={};for(var u in r)s[u]=t[u];{var d=dt(e)||"Unknown";fo(r,s,"context",d)}return a&&c0(e,t,s),s}}function Ad(){return $o.current}function zo(e){{var t=e.childContextTypes;return t!=null}}function $d(e){Xr($o,e),Xr(oi,e)}function Zp(e){Xr($o,e),Xr(oi,e)}function d0(e,t,n){{if(oi.current!==La)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");Qr(oi,t,e),Qr($o,n,e)}}function f0(e,t,n){{var r=e.stateNode,a=t.childContextTypes;if(typeof r.getChildContext!="function"){{var s=dt(e)||"Unknown";Kp[s]||(Kp[s]=!0,f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",s,s))}return n}var u=r.getChildContext();for(var d in u)if(!(d in a))throw new Error((dt(e)||"Unknown")+'.getChildContext(): key "'+d+'" is not defined in childContextTypes.');{var h=dt(e)||"Unknown";fo(a,u,"child context",h)}return Bt({},n,u)}}function zd(e){{var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||La;return Jp=oi.current,Qr(oi,n,e),Qr($o,$o.current,e),!0}}function h0(e,t,n){{var r=e.stateNode;if(!r)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){var a=f0(e,t,Jp);r.__reactInternalMemoizedMergedChildContext=a,Xr($o,e),Xr(oi,e),Qr(oi,a,e),Qr($o,n,e)}else Xr($o,e),Qr($o,n,e)}}function M4(e){{if(!fk(e)||e.tag!==P)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case M:return t.stateNode.context;case P:{var n=t.type;if(zo(n))return t.stateNode.__reactInternalMemoizedMergedChildContext;break}}t=t.return}while(t!==null);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}var Ai=0,Bd=1,ii=null,e_=!1,t_=!1;function p0(e){ii===null?ii=[e]:ii.push(e)}function D4(e){e_=!0,p0(e)}function _0(){e_&&$i()}function $i(){if(!t_&&ii!==null){t_=!0;var e=0,t=co();try{var n=!0,r=ii;for(Lr(Ta);e<r.length;e++){var a=r[e];do a=a(n);while(a!==null)}ii=null,e_=!1}catch(s){throw ii!==null&&(ii=ii.slice(e+1)),Ig(ed,$i),s}finally{Lr(t),t_=!1}}return null}var xl=[],bl=0,Id=null,Ud=0,Va=[],Xa=0,xs=null,si=1,li="";function L4(e){return ws(),(e.flags&Dg)!==bt}function O4(e){return ws(),Ud}function N4(){var e=li,t=si,n=t&~A4(t);return n.toString(32)+e}function bs(e,t){ws(),xl[bl++]=Ud,xl[bl++]=Id,Id=e,Ud=t}function m0(e,t,n){ws(),Va[Xa++]=si,Va[Xa++]=li,Va[Xa++]=xs,xs=e;var r=si,a=li,s=Fd(r)-1,u=r&~(1<<s),d=n+1,h=Fd(t)+s;if(h>30){var g=s-s%5,x=(1<<g)-1,L=(u&x).toString(32),D=u>>g,Y=s-g,X=Fd(t)+Y,J=d<<Y,je=J|D,pt=L+a;si=1<<X|je,li=pt}else{var tt=d<<s,Zt=tt|u,Qt=a;si=1<<h|Zt,li=Qt}}function n_(e){ws();var t=e.return;if(t!==null){var n=1,r=0;bs(e,n),m0(e,n,r)}}function Fd(e){return 32-Yg(e)}function A4(e){return 1<<Fd(e)-1}function r_(e){for(;e===Id;)Id=xl[--bl],xl[bl]=null,Ud=xl[--bl],xl[bl]=null;for(;e===xs;)xs=Va[--Xa],Va[Xa]=null,li=Va[--Xa],Va[Xa]=null,si=Va[--Xa],Va[Xa]=null}function $4(){return ws(),xs!==null?{id:si,overflow:li}:null}function z4(e,t){ws(),Va[Xa++]=si,Va[Xa++]=li,Va[Xa++]=xs,si=t.id,li=t.overflow,xs=e}function ws(){$r()||f("Expected to be hydrating. This is a bug in React. Please file an issue.")}var Ar=null,Qa=null,ho=!1,Ss=!1,zi=null;function B4(){ho&&f("We should not be hydrating here. This is a bug in React. Please file a bug.")}function y0(){Ss=!0}function I4(){return Ss}function U4(e){var t=e.stateNode.containerInfo;return Qa=a4(t),Ar=e,ho=!0,zi=null,Ss=!1,!0}function F4(e,t,n){return Qa=o4(t),Ar=e,ho=!0,zi=null,Ss=!1,n!==null&&z4(e,n),!0}function g0(e,t){switch(e.tag){case M:{_4(e.stateNode.containerInfo,t);break}case H:{var n=(e.mode&Kt)!==yt;y4(e.type,e.memoizedProps,e.stateNode,t,n);break}case de:{var r=e.memoizedState;r.dehydrated!==null&&m4(r.dehydrated,t);break}}}function v0(e,t){g0(e,t);var n=YR();n.stateNode=t,n.return=e;var r=e.deletions;r===null?(e.deletions=[n],e.flags|=ss):r.push(n)}function a_(e,t){{if(Ss)return;switch(e.tag){case M:{var n=e.stateNode.containerInfo;switch(t.tag){case H:var r=t.type;t.pendingProps,g4(n,r);break;case I:var a=t.pendingProps;v4(n,a);break}break}case H:{var s=e.type,u=e.memoizedProps,d=e.stateNode;switch(t.tag){case H:{var h=t.type,g=t.pendingProps,x=(e.mode&Kt)!==yt;w4(s,u,d,h,g,x);break}case I:{var L=t.pendingProps,D=(e.mode&Kt)!==yt;S4(s,u,d,L,D);break}}break}case de:{var Y=e.memoizedState,X=Y.dehydrated;if(X!==null)switch(t.tag){case H:var J=t.type;t.pendingProps,x4(X,J);break;case I:var je=t.pendingProps;b4(X,je);break}break}default:return}}}function x0(e,t){t.flags=t.flags&~Zo|pr,a_(e,t)}function b0(e,t){switch(e.tag){case H:{var n=e.type;e.pendingProps;var r=J6(t,n);return r!==null?(e.stateNode=r,Ar=e,Qa=r4(r),!0):!1}case I:{var a=e.pendingProps,s=Z6(t,a);return s!==null?(e.stateNode=s,Ar=e,Qa=null,!0):!1}case de:{var u=e4(t);if(u!==null){var d={dehydrated:u,treeContext:$4(),retryLane:Ra};e.memoizedState=d;var h=VR(u);return h.return=e,e.child=h,Ar=e,Qa=null,!0}return!1}default:return!1}}function o_(e){return(e.mode&Kt)!==yt&&(e.flags&dn)===bt}function i_(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function s_(e){if(ho){var t=Qa;if(!t){o_(e)&&(a_(Ar,e),i_()),x0(Ar,e),ho=!1,Ar=e;return}var n=t;if(!b0(e,t)){o_(e)&&(a_(Ar,e),i_()),t=Fu(n);var r=Ar;if(!t||!b0(e,t)){x0(Ar,e),ho=!1,Ar=e;return}v0(r,n)}}}function H4(e,t,n){var r=e.stateNode,a=!Ss,s=i4(r,e.type,e.memoizedProps,t,n,e,a);return e.updateQueue=s,s!==null}function P4(e){var t=e.stateNode,n=e.memoizedProps,r=s4(t,n,e);if(r){var a=Ar;if(a!==null)switch(a.tag){case M:{var s=a.stateNode.containerInfo,u=(a.mode&Kt)!==yt;h4(s,t,n,u);break}case H:{var d=a.type,h=a.memoizedProps,g=a.stateNode,x=(a.mode&Kt)!==yt;p4(d,h,g,t,n,x);break}}}return r}function W4(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");l4(n,e)}function Y4(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return u4(n)}function w0(e){for(var t=e.return;t!==null&&t.tag!==H&&t.tag!==M&&t.tag!==de;)t=t.return;Ar=t}function Hd(e){if(e!==Ar)return!1;if(!ho)return w0(e),ho=!0,!1;if(e.tag!==M&&(e.tag!==H||f4(e.type)&&!Hp(e.type,e.memoizedProps))){var t=Qa;if(t)if(o_(e))S0(e),i_();else for(;t;)v0(e,t),t=Fu(t)}return w0(e),e.tag===de?Qa=Y4(e):Qa=Ar?Fu(e.stateNode):null,!0}function V4(){return ho&&Qa!==null}function S0(e){for(var t=Qa;t;)g0(e,t),t=Fu(t)}function wl(){Ar=null,Qa=null,ho=!1,Ss=!1}function k0(){zi!==null&&(y1(zi),zi=null)}function $r(){return ho}function l_(e){zi===null?zi=[e]:zi.push(e)}var X4=c.ReactCurrentBatchConfig,Q4=null;function q4(){return X4.transition}var po={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}};{var G4=function(e){for(var t=null,n=e;n!==null;)n.mode&or&&(t=n),n=n.return;return t},ks=function(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")},Yu=[],Vu=[],Xu=[],Qu=[],qu=[],Gu=[],Cs=new Set;po.recordUnsafeLifecycleWarnings=function(e,t){Cs.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&Yu.push(e),e.mode&or&&typeof t.UNSAFE_componentWillMount=="function"&&Vu.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&Xu.push(e),e.mode&or&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&Qu.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&qu.push(e),e.mode&or&&typeof t.UNSAFE_componentWillUpdate=="function"&&Gu.push(e))},po.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;Yu.length>0&&(Yu.forEach(function(D){e.add(dt(D)||"Component"),Cs.add(D.type)}),Yu=[]);var t=new Set;Vu.length>0&&(Vu.forEach(function(D){t.add(dt(D)||"Component"),Cs.add(D.type)}),Vu=[]);var n=new Set;Xu.length>0&&(Xu.forEach(function(D){n.add(dt(D)||"Component"),Cs.add(D.type)}),Xu=[]);var r=new Set;Qu.length>0&&(Qu.forEach(function(D){r.add(dt(D)||"Component"),Cs.add(D.type)}),Qu=[]);var a=new Set;qu.length>0&&(qu.forEach(function(D){a.add(dt(D)||"Component"),Cs.add(D.type)}),qu=[]);var s=new Set;if(Gu.length>0&&(Gu.forEach(function(D){s.add(dt(D)||"Component"),Cs.add(D.type)}),Gu=[]),t.size>0){var u=ks(t);f(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,u)}if(r.size>0){var d=ks(r);f(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,d)}if(s.size>0){var h=ks(s);f(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,h)}if(e.size>0){var g=ks(e);m(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,g)}if(n.size>0){var x=ks(n);m(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,x)}if(a.size>0){var L=ks(a);m(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,L)}};var Pd=new Map,C0=new Set;po.recordLegacyContextWarning=function(e,t){var n=G4(e);if(n===null){f("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}if(!C0.has(e.type)){var r=Pd.get(n);(e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(r===void 0&&(r=[],Pd.set(n,r)),r.push(e))}},po.flushLegacyContextWarning=function(){Pd.forEach(function(e,t){if(e.length!==0){var n=e[0],r=new Set;e.forEach(function(s){r.add(dt(s)||"Component"),C0.add(s.type)});var a=ks(r);try{It(n),f(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,a)}finally{Hn()}}})},po.discardPendingWarnings=function(){Yu=[],Vu=[],Xu=[],Qu=[],qu=[],Gu=[],Pd=new Map}}var u_,c_,d_,f_,h_,E0=function(e,t){};u_=!1,c_=!1,d_={},f_={},h_={},E0=function(e,t){if(!(e===null||typeof e!="object")&&!(!e._store||e._store.validated||e.key!=null)){if(typeof e._store!="object")throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=dt(t)||"Component";f_[n]||(f_[n]=!0,f('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};function K4(e){return e.prototype&&e.prototype.isReactComponent}function Ku(e,t,n){var r=n.ref;if(r!==null&&typeof r!="function"&&typeof r!="object"){if((e.mode&or||tn)&&!(n._owner&&n._self&&n._owner.stateNode!==n._self)&&!(n._owner&&n._owner.tag!==P)&&!(typeof n.type=="function"&&!K4(n.type))&&n._owner){var a=dt(e)||"Component";d_[a]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',a,r),d_[a]=!0)}if(n._owner){var s=n._owner,u;if(s){var d=s;if(d.tag!==P)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");u=d.stateNode}if(!u)throw new Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");var h=u;K(r,"ref");var g=""+r;if(t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===g)return t.ref;var x=function(L){var D=h.refs;L===null?delete D[g]:D[g]=L};return x._stringRef=g,x}else{if(typeof r!="string")throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw new Error("Element ref was specified as a string ("+r+`) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`)}}return r}function Wd(e,t){var n=Object.prototype.toString.call(t);throw new Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}function Yd(e){{var t=dt(e)||"Component";if(h_[t])return;h_[t]=!0,f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function R0(e){var t=e._payload,n=e._init;return n(t)}function j0(e){function t(U,Z){if(e){var F=U.deletions;F===null?(U.deletions=[Z],U.flags|=ss):F.push(Z)}}function n(U,Z){if(!e)return null;for(var F=Z;F!==null;)t(U,F),F=F.sibling;return null}function r(U,Z){for(var F=new Map,pe=Z;pe!==null;)pe.key!==null?F.set(pe.key,pe):F.set(pe.index,pe),pe=pe.sibling;return F}function a(U,Z){var F=Ns(U,Z);return F.index=0,F.sibling=null,F}function s(U,Z,F){if(U.index=F,!e)return U.flags|=Dg,Z;var pe=U.alternate;if(pe!==null){var ze=pe.index;return ze<Z?(U.flags|=pr,Z):ze}else return U.flags|=pr,Z}function u(U){return e&&U.alternate===null&&(U.flags|=pr),U}function d(U,Z,F,pe){if(Z===null||Z.tag!==I){var ze=ly(F,U.mode,pe);return ze.return=U,ze}else{var De=a(Z,F);return De.return=U,De}}function h(U,Z,F,pe){var ze=F.type;if(ze===Nn)return x(U,Z,F.props.children,pe,F.key);if(Z!==null&&(Z.elementType===ze||O1(Z,F)||typeof ze=="object"&&ze!==null&&ze.$$typeof===ut&&R0(ze)===Z.type)){var De=a(Z,F.props);return De.ref=Ku(U,Z,F),De.return=U,De._debugSource=F._source,De._debugOwner=F._owner,De}var St=sy(F,U.mode,pe);return St.ref=Ku(U,Z,F),St.return=U,St}function g(U,Z,F,pe){if(Z===null||Z.tag!==A||Z.stateNode.containerInfo!==F.containerInfo||Z.stateNode.implementation!==F.implementation){var ze=uy(F,U.mode,pe);return ze.return=U,ze}else{var De=a(Z,F.children||[]);return De.return=U,De}}function x(U,Z,F,pe,ze){if(Z===null||Z.tag!==le){var De=Qi(F,U.mode,pe,ze);return De.return=U,De}else{var St=a(Z,F);return St.return=U,St}}function L(U,Z,F){if(typeof Z=="string"&&Z!==""||typeof Z=="number"){var pe=ly(""+Z,U.mode,F);return pe.return=U,pe}if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case un:{var ze=sy(Z,U.mode,F);return ze.ref=Ku(U,null,Z),ze.return=U,ze}case kn:{var De=uy(Z,U.mode,F);return De.return=U,De}case ut:{var St=Z._payload,Mt=Z._init;return L(U,Mt(St),F)}}if(Nt(Z)||Mn(Z)){var xn=Qi(Z,U.mode,F,null);return xn.return=U,xn}Wd(U,Z)}return typeof Z=="function"&&Yd(U),null}function D(U,Z,F,pe){var ze=Z!==null?Z.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ze!==null?null:d(U,Z,""+F,pe);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case un:return F.key===ze?h(U,Z,F,pe):null;case kn:return F.key===ze?g(U,Z,F,pe):null;case ut:{var De=F._payload,St=F._init;return D(U,Z,St(De),pe)}}if(Nt(F)||Mn(F))return ze!==null?null:x(U,Z,F,pe,null);Wd(U,F)}return typeof F=="function"&&Yd(U),null}function Y(U,Z,F,pe,ze){if(typeof pe=="string"&&pe!==""||typeof pe=="number"){var De=U.get(F)||null;return d(Z,De,""+pe,ze)}if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case un:{var St=U.get(pe.key===null?F:pe.key)||null;return h(Z,St,pe,ze)}case kn:{var Mt=U.get(pe.key===null?F:pe.key)||null;return g(Z,Mt,pe,ze)}case ut:var xn=pe._payload,on=pe._init;return Y(U,Z,F,on(xn),ze)}if(Nt(pe)||Mn(pe)){var dr=U.get(F)||null;return x(Z,dr,pe,ze,null)}Wd(Z,pe)}return typeof pe=="function"&&Yd(Z),null}function X(U,Z,F){{if(typeof U!="object"||U===null)return Z;switch(U.$$typeof){case un:case kn:E0(U,F);var pe=U.key;if(typeof pe!="string")break;if(Z===null){Z=new Set,Z.add(pe);break}if(!Z.has(pe)){Z.add(pe);break}f("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",pe);break;case ut:var ze=U._payload,De=U._init;X(De(ze),Z,F);break}}return Z}function J(U,Z,F,pe){for(var ze=null,De=0;De<F.length;De++){var St=F[De];ze=X(St,ze,U)}for(var Mt=null,xn=null,on=Z,dr=0,sn=0,ir=null;on!==null&&sn<F.length;sn++){on.index>sn?(ir=on,on=null):ir=on.sibling;var Gr=D(U,on,F[sn],pe);if(Gr===null){on===null&&(on=ir);break}e&&on&&Gr.alternate===null&&t(U,on),dr=s(Gr,dr,sn),xn===null?Mt=Gr:xn.sibling=Gr,xn=Gr,on=ir}if(sn===F.length){if(n(U,on),$r()){var Pr=sn;bs(U,Pr)}return Mt}if(on===null){for(;sn<F.length;sn++){var Na=L(U,F[sn],pe);Na!==null&&(dr=s(Na,dr,sn),xn===null?Mt=Na:xn.sibling=Na,xn=Na)}if($r()){var ca=sn;bs(U,ca)}return Mt}for(var da=r(U,on);sn<F.length;sn++){var Kr=Y(da,U,sn,F[sn],pe);Kr!==null&&(e&&Kr.alternate!==null&&da.delete(Kr.key===null?sn:Kr.key),dr=s(Kr,dr,sn),xn===null?Mt=Kr:xn.sibling=Kr,xn=Kr)}if(e&&da.forEach(function(Fl){return t(U,Fl)}),$r()){var _i=sn;bs(U,_i)}return Mt}function je(U,Z,F,pe){var ze=Mn(F);if(typeof ze!="function")throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{typeof Symbol=="function"&&F[Symbol.toStringTag]==="Generator"&&(c_||f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),c_=!0),F.entries===ze&&(u_||f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),u_=!0);var De=ze.call(F);if(De)for(var St=null,Mt=De.next();!Mt.done;Mt=De.next()){var xn=Mt.value;St=X(xn,St,U)}}var on=ze.call(F);if(on==null)throw new Error("An iterable object provided no iterator.");for(var dr=null,sn=null,ir=Z,Gr=0,Pr=0,Na=null,ca=on.next();ir!==null&&!ca.done;Pr++,ca=on.next()){ir.index>Pr?(Na=ir,ir=null):Na=ir.sibling;var da=D(U,ir,ca.value,pe);if(da===null){ir===null&&(ir=Na);break}e&&ir&&da.alternate===null&&t(U,ir),Gr=s(da,Gr,Pr),sn===null?dr=da:sn.sibling=da,sn=da,ir=Na}if(ca.done){if(n(U,ir),$r()){var Kr=Pr;bs(U,Kr)}return dr}if(ir===null){for(;!ca.done;Pr++,ca=on.next()){var _i=L(U,ca.value,pe);_i!==null&&(Gr=s(_i,Gr,Pr),sn===null?dr=_i:sn.sibling=_i,sn=_i)}if($r()){var Fl=Pr;bs(U,Fl)}return dr}for(var Tc=r(U,ir);!ca.done;Pr++,ca=on.next()){var Yo=Y(Tc,U,Pr,ca.value,pe);Yo!==null&&(e&&Yo.alternate!==null&&Tc.delete(Yo.key===null?Pr:Yo.key),Gr=s(Yo,Gr,Pr),sn===null?dr=Yo:sn.sibling=Yo,sn=Yo)}if(e&&Tc.forEach(function(Sj){return t(U,Sj)}),$r()){var wj=Pr;bs(U,wj)}return dr}function pt(U,Z,F,pe){if(Z!==null&&Z.tag===I){n(U,Z.sibling);var ze=a(Z,F);return ze.return=U,ze}n(U,Z);var De=ly(F,U.mode,pe);return De.return=U,De}function tt(U,Z,F,pe){for(var ze=F.key,De=Z;De!==null;){if(De.key===ze){var St=F.type;if(St===Nn){if(De.tag===le){n(U,De.sibling);var Mt=a(De,F.props.children);return Mt.return=U,Mt._debugSource=F._source,Mt._debugOwner=F._owner,Mt}}else if(De.elementType===St||O1(De,F)||typeof St=="object"&&St!==null&&St.$$typeof===ut&&R0(St)===De.type){n(U,De.sibling);var xn=a(De,F.props);return xn.ref=Ku(U,De,F),xn.return=U,xn._debugSource=F._source,xn._debugOwner=F._owner,xn}n(U,De);break}else t(U,De);De=De.sibling}if(F.type===Nn){var on=Qi(F.props.children,U.mode,pe,F.key);return on.return=U,on}else{var dr=sy(F,U.mode,pe);return dr.ref=Ku(U,Z,F),dr.return=U,dr}}function Zt(U,Z,F,pe){for(var ze=F.key,De=Z;De!==null;){if(De.key===ze)if(De.tag===A&&De.stateNode.containerInfo===F.containerInfo&&De.stateNode.implementation===F.implementation){n(U,De.sibling);var St=a(De,F.children||[]);return St.return=U,St}else{n(U,De);break}else t(U,De);De=De.sibling}var Mt=uy(F,U.mode,pe);return Mt.return=U,Mt}function Qt(U,Z,F,pe){var ze=typeof F=="object"&&F!==null&&F.type===Nn&&F.key===null;if(ze&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case un:return u(tt(U,Z,F,pe));case kn:return u(Zt(U,Z,F,pe));case ut:var De=F._payload,St=F._init;return Qt(U,Z,St(De),pe)}if(Nt(F))return J(U,Z,F,pe);if(Mn(F))return je(U,Z,F,pe);Wd(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"?u(pt(U,Z,""+F,pe)):(typeof F=="function"&&Yd(U),n(U,Z))}return Qt}var Sl=j0(!0),T0=j0(!1);function J4(e,t){if(e!==null&&t.child!==e.child)throw new Error("Resuming work not yet implemented.");if(t.child!==null){var n=t.child,r=Ns(n,n.pendingProps);for(t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=Ns(n,n.pendingProps),r.return=t;r.sibling=null}}function Z4(e,t){for(var n=e.child;n!==null;)UR(n,t),n=n.sibling}var p_=Ni(null),__;__={};var Vd=null,kl=null,m_=null,Xd=!1;function Qd(){Vd=null,kl=null,m_=null,Xd=!1}function M0(){Xd=!0}function D0(){Xd=!1}function L0(e,t,n){Qr(p_,t._currentValue,e),t._currentValue=n,t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==__&&f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=__}function y_(e,t){var n=p_.current;Xr(p_,t),e._currentValue=n}function g_(e,t,n){for(var r=e;r!==null;){var a=r.alternate;if(ll(r.childLanes,t)?a!==null&&!ll(a.childLanes,t)&&(a.childLanes=Wt(a.childLanes,t)):(r.childLanes=Wt(r.childLanes,t),a!==null&&(a.childLanes=Wt(a.childLanes,t))),r===n)break;r=r.return}r!==n&&f("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function e3(e,t,n){t3(e,t,n)}function t3(e,t,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=void 0,s=r.dependencies;if(s!==null){a=r.child;for(var u=s.firstContext;u!==null;){if(u.context===t){if(r.tag===P){var d=_u(n),h=ui(Wn,d);h.tag=Gd;var g=r.updateQueue;if(g!==null){var x=g.shared,L=x.pending;L===null?h.next=h:(h.next=L.next,L.next=h),x.pending=h}}r.lanes=Wt(r.lanes,n);var D=r.alternate;D!==null&&(D.lanes=Wt(D.lanes,n)),g_(r.return,n,e),s.lanes=Wt(s.lanes,n);break}u=u.next}}else if(r.tag===Le)a=r.type===e.type?null:r.child;else if(r.tag===nt){var Y=r.return;if(Y===null)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");Y.lanes=Wt(Y.lanes,n);var X=Y.alternate;X!==null&&(X.lanes=Wt(X.lanes,n)),g_(Y,n,e),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}var J=a.sibling;if(J!==null){J.return=a.return,a=J;break}a=a.return}r=a}}function Cl(e,t){Vd=e,kl=null,m_=null;var n=e.dependencies;if(n!==null){var r=n.firstContext;r!==null&&(ja(n.lanes,t)&&fc(),n.firstContext=null)}}function _r(e){Xd&&f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=e._currentValue;if(m_!==e){var n={context:e,memoizedValue:t,next:null};if(kl===null){if(Vd===null)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");kl=n,Vd.dependencies={lanes:ce,firstContext:n}}else kl=kl.next=n}return t}var Es=null;function v_(e){Es===null?Es=[e]:Es.push(e)}function n3(){if(Es!==null){for(var e=0;e<Es.length;e++){var t=Es[e],n=t.interleaved;if(n!==null){t.interleaved=null;var r=n.next,a=t.pending;if(a!==null){var s=a.next;a.next=r,n.next=s}t.pending=n}}Es=null}}function O0(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,v_(t)):(n.next=a.next,a.next=n),t.interleaved=n,qd(e,r)}function r3(e,t,n,r){var a=t.interleaved;a===null?(n.next=n,v_(t)):(n.next=a.next,a.next=n),t.interleaved=n}function a3(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,v_(t)):(n.next=a.next,a.next=n),t.interleaved=n,qd(e,r)}function ma(e,t){return qd(e,t)}var o3=qd;function qd(e,t){e.lanes=Wt(e.lanes,t);var n=e.alternate;n!==null&&(n.lanes=Wt(n.lanes,t)),n===null&&(e.flags&(pr|Zo))!==bt&&T1(e);for(var r=e,a=e.return;a!==null;)a.childLanes=Wt(a.childLanes,t),n=a.alternate,n!==null?n.childLanes=Wt(n.childLanes,t):(a.flags&(pr|Zo))!==bt&&T1(e),r=a,a=a.return;if(r.tag===M){var s=r.stateNode;return s}else return null}var N0=0,A0=1,Gd=2,x_=3,Kd=!1,b_,Jd;b_=!1,Jd=null;function w_(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:ce},effects:null};e.updateQueue=t}function $0(e,t){var n=t.updateQueue,r=e.updateQueue;if(n===r){var a={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects};t.updateQueue=a}}function ui(e,t){var n={eventTime:e,lane:t,tag:N0,payload:null,callback:null,next:null};return n}function Bi(e,t,n){var r=e.updateQueue;if(r===null)return null;var a=r.shared;if(Jd===a&&!b_&&(f("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),b_=!0),rR()){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,o3(e,n)}else return a3(e,a,t,n)}function Zd(e,t,n){var r=t.updateQueue;if(r!==null){var a=r.shared;if(qg(n)){var s=a.lanes;s=Kg(s,e.pendingLanes);var u=Wt(s,n);a.lanes=u,pp(e,u)}}}function S_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null){var a=r.updateQueue;if(n===a){var s=null,u=null,d=n.firstBaseUpdate;if(d!==null){var h=d;do{var g={eventTime:h.eventTime,lane:h.lane,tag:h.tag,payload:h.payload,callback:h.callback,next:null};u===null?s=u=g:(u.next=g,u=g),h=h.next}while(h!==null);u===null?s=u=t:(u.next=t,u=t)}else s=u=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:a.shared,effects:a.effects},e.updateQueue=n;return}}var x=n.lastBaseUpdate;x===null?n.firstBaseUpdate=t:x.next=t,n.lastBaseUpdate=t}function i3(e,t,n,r,a,s){switch(n.tag){case A0:{var u=n.payload;if(typeof u=="function"){M0();var d=u.call(s,r,a);{if(e.mode&or){Mr(!0);try{u.call(s,r,a)}finally{Mr(!1)}}D0()}return d}return u}case x_:e.flags=e.flags&~ia|dn;case N0:{var h=n.payload,g;if(typeof h=="function"){M0(),g=h.call(s,r,a);{if(e.mode&or){Mr(!0);try{h.call(s,r,a)}finally{Mr(!1)}}D0()}}else g=h;return g==null?r:Bt({},r,g)}case Gd:return Kd=!0,r}return r}function ef(e,t,n,r){var a=e.updateQueue;Kd=!1,Jd=a.shared;var s=a.firstBaseUpdate,u=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var h=d,g=h.next;h.next=null,u===null?s=g:u.next=g,u=h;var x=e.alternate;if(x!==null){var L=x.updateQueue,D=L.lastBaseUpdate;D!==u&&(D===null?L.firstBaseUpdate=g:D.next=g,L.lastBaseUpdate=h)}}if(s!==null){var Y=a.baseState,X=ce,J=null,je=null,pt=null,tt=s;do{var Zt=tt.lane,Qt=tt.eventTime;if(ll(r,Zt)){if(pt!==null){var Z={eventTime:Qt,lane:Dr,tag:tt.tag,payload:tt.payload,callback:tt.callback,next:null};pt=pt.next=Z}Y=i3(e,a,tt,Y,t,n);var F=tt.callback;if(F!==null&&tt.lane!==Dr){e.flags|=Mg;var pe=a.effects;pe===null?a.effects=[tt]:pe.push(tt)}}else{var U={eventTime:Qt,lane:Zt,tag:tt.tag,payload:tt.payload,callback:tt.callback,next:null};pt===null?(je=pt=U,J=Y):pt=pt.next=U,X=Wt(X,Zt)}if(tt=tt.next,tt===null){if(d=a.shared.pending,d===null)break;var ze=d,De=ze.next;ze.next=null,tt=De,a.lastBaseUpdate=ze,a.shared.pending=null}}while(!0);pt===null&&(J=Y),a.baseState=J,a.firstBaseUpdate=je,a.lastBaseUpdate=pt;var St=a.shared.interleaved;if(St!==null){var Mt=St;do X=Wt(X,Mt.lane),Mt=Mt.next;while(Mt!==St)}else s===null&&(a.shared.lanes=ce);kc(X),e.lanes=X,e.memoizedState=Y}Jd=null}function s3(e,t){if(typeof e!="function")throw new Error("Invalid argument passed as callback. Expected a function. Instead "+("received: "+e));e.call(t)}function z0(){Kd=!1}function tf(){return Kd}function B0(e,t,n){var r=t.effects;if(t.effects=null,r!==null)for(var a=0;a<r.length;a++){var s=r[a],u=s.callback;u!==null&&(s.callback=null,s3(u,n))}}var Ju={},Ii=Ni(Ju),Zu=Ni(Ju),nf=Ni(Ju);function rf(e){if(e===Ju)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function I0(){var e=rf(nf.current);return e}function k_(e,t){Qr(nf,t,e),Qr(Zu,e,e),Qr(Ii,Ju,e);var n=k6(t);Xr(Ii,e),Qr(Ii,n,e)}function El(e){Xr(Ii,e),Xr(Zu,e),Xr(nf,e)}function C_(){var e=rf(Ii.current);return e}function U0(e){rf(nf.current);var t=rf(Ii.current),n=C6(t,e.type);t!==n&&(Qr(Zu,e,e),Qr(Ii,n,e))}function E_(e){Zu.current===e&&(Xr(Ii,e),Xr(Zu,e))}var l3=0,F0=1,H0=1,ec=2,_o=Ni(l3);function R_(e,t){return(e&t)!==0}function Rl(e){return e&F0}function j_(e,t){return e&F0|t}function u3(e,t){return e|t}function Ui(e,t){Qr(_o,t,e)}function jl(e){Xr(_o,e)}function c3(e,t){var n=e.memoizedState;return n!==null?n.dehydrated!==null:(e.memoizedProps,!0)}function af(e){for(var t=e;t!==null;){if(t.tag===de){var n=t.memoizedState;if(n!==null){var r=n.dehydrated;if(r===null||o0(r)||Vp(r))return t}}else if(t.tag===Pe&&t.memoizedProps.revealOrder!==void 0){var a=(t.flags&dn)!==bt;if(a)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=0,vr=1,Bo=2,xr=4,zr=8,T_=[];function M_(){for(var e=0;e<T_.length;e++){var t=T_[e];t._workInProgressVersionPrimary=null}T_.length=0}function d3(e,t){var n=t._getVersion,r=n(t._source);e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r)}var $e=c.ReactCurrentDispatcher,tc=c.ReactCurrentBatchConfig,D_,Tl;D_=new Set;var Rs=ce,vn=null,br=null,wr=null,of=!1,nc=!1,rc=0,f3=0,h3=25,ne=null,qa=null,Fi=-1,L_=!1;function pn(){{var e=ne;qa===null?qa=[e]:qa.push(e)}}function Se(){{var e=ne;qa!==null&&(Fi++,qa[Fi]!==e&&p3(e))}}function Ml(e){e!=null&&!Nt(e)&&f("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",ne,typeof e)}function p3(e){{var t=dt(vn);if(!D_.has(t)&&(D_.add(t),qa!==null)){for(var n="",r=30,a=0;a<=Fi;a++){for(var s=qa[a],u=a===Fi?e:s,d=a+1+". "+s;d.length<r;)d+=" ";d+=u+`
`,n+=d}f(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function qr(){throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function O_(e,t){if(L_)return!1;if(t===null)return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",ne),!1;e.length!==t.length&&f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,ne,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!Da(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,a,s){Rs=s,vn=t,qa=e!==null?e._debugHookTypes:null,Fi=-1,L_=e!==null&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=ce,e!==null&&e.memoizedState!==null?$e.current=cx:qa!==null?$e.current=ux:$e.current=lx;var u=n(r,a);if(nc){var d=0;do{if(nc=!1,rc=0,d>=h3)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");d+=1,L_=!1,br=null,wr=null,t.updateQueue=null,Fi=-1,$e.current=dx,u=n(r,a)}while(nc)}$e.current=vf,t._debugHookTypes=qa;var h=br!==null&&br.next!==null;if(Rs=ce,vn=null,br=null,wr=null,ne=null,qa=null,Fi=-1,e!==null&&(e.flags&ei)!==(t.flags&ei)&&(e.mode&Kt)!==yt&&f("Internal React error: Expected static flag was missing. Please notify the React team."),of=!1,h)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return u}function Ll(){var e=rc!==0;return rc=0,e}function P0(e,t,n){t.updateQueue=e.updateQueue,(t.mode&No)!==yt?t.flags&=-50333701:t.flags&=-2053,e.lanes=id(e.lanes,n)}function W0(){if($e.current=vf,of){for(var e=vn.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}of=!1}Rs=ce,vn=null,br=null,wr=null,qa=null,Fi=-1,ne=null,rx=!1,nc=!1,rc=0}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wr===null?vn.memoizedState=wr=e:wr=wr.next=e,wr}function Ga(){var e;if(br===null){var t=vn.alternate;t!==null?e=t.memoizedState:e=null}else e=br.next;var n;if(wr===null?n=vn.memoizedState:n=wr.next,n!==null)wr=n,n=wr.next,br=e;else{if(e===null)throw new Error("Rendered more hooks than during the previous render.");br=e;var r={memoizedState:br.memoizedState,baseState:br.baseState,baseQueue:br.baseQueue,queue:br.queue,next:null};wr===null?vn.memoizedState=wr=r:wr=wr.next=r}return wr}function Y0(){return{lastEffect:null,stores:null}}function N_(e,t){return typeof t=="function"?t(e):t}function A_(e,t,n){var r=Io(),a;n!==void 0?a=n(t):a=t,r.memoizedState=r.baseState=a;var s={pending:null,interleaved:null,lanes:ce,dispatch:null,lastRenderedReducer:e,lastRenderedState:a};r.queue=s;var u=s.dispatch=g3.bind(null,vn,s);return[r.memoizedState,u]}function $_(e,t,n){var r=Ga(),a=r.queue;if(a===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");a.lastRenderedReducer=e;var s=br,u=s.baseQueue,d=a.pending;if(d!==null){if(u!==null){var h=u.next,g=d.next;u.next=g,d.next=h}s.baseQueue!==u&&f("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),s.baseQueue=u=d,a.pending=null}if(u!==null){var x=u.next,L=s.baseState,D=null,Y=null,X=null,J=x;do{var je=J.lane;if(ll(Rs,je)){if(X!==null){var tt={lane:Dr,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};X=X.next=tt}if(J.hasEagerState)L=J.eagerState;else{var Zt=J.action;L=e(L,Zt)}}else{var pt={lane:je,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};X===null?(Y=X=pt,D=L):X=X.next=pt,vn.lanes=Wt(vn.lanes,je),kc(je)}J=J.next}while(J!==null&&J!==x);X===null?D=L:X.next=Y,Da(L,r.memoizedState)||fc(),r.memoizedState=L,r.baseState=D,r.baseQueue=X,a.lastRenderedState=L}var Qt=a.interleaved;if(Qt!==null){var U=Qt;do{var Z=U.lane;vn.lanes=Wt(vn.lanes,Z),kc(Z),U=U.next}while(U!==Qt)}else u===null&&(a.lanes=ce);var F=a.dispatch;return[r.memoizedState,F]}function z_(e,t,n){var r=Ga(),a=r.queue;if(a===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,d=r.memoizedState;if(u!==null){a.pending=null;var h=u.next,g=h;do{var x=g.action;d=e(d,x),g=g.next}while(g!==h);Da(d,r.memoizedState)||fc(),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,s]}function Rj(e,t,n){}function jj(e,t,n){}function B_(e,t,n){var r=vn,a=Io(),s,u=$r();if(u){if(n===void 0)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");s=n(),Tl||s!==n()&&(f("The result of getServerSnapshot should be cached to avoid an infinite loop"),Tl=!0)}else{if(s=t(),!Tl){var d=t();Da(s,d)||(f("The result of getSnapshot should be cached to avoid an infinite loop"),Tl=!0)}var h=Bf();if(h===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");od(h,Rs)||V0(r,t,s)}a.memoizedState=s;var g={value:s,getSnapshot:t};return a.queue=g,df(Q0.bind(null,r,g,e),[e]),r.flags|=Ci,ac(vr|zr,X0.bind(null,r,g,s,t),void 0,null),s}function sf(e,t,n){var r=vn,a=Ga(),s=t();if(!Tl){var u=t();Da(s,u)||(f("The result of getSnapshot should be cached to avoid an infinite loop"),Tl=!0)}var d=a.memoizedState,h=!Da(d,s);h&&(a.memoizedState=s,fc());var g=a.queue;if(ic(Q0.bind(null,r,g,e),[e]),g.getSnapshot!==t||h||wr!==null&&wr.memoizedState.tag&vr){r.flags|=Ci,ac(vr|zr,X0.bind(null,r,g,s,t),void 0,null);var x=Bf();if(x===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");od(x,Rs)||V0(r,t,s)}return s}function V0(e,t,n){e.flags|=Nh;var r={getSnapshot:t,value:n},a=vn.updateQueue;if(a===null)a=Y0(),vn.updateQueue=a,a.stores=[r];else{var s=a.stores;s===null?a.stores=[r]:s.push(r)}}function X0(e,t,n,r){t.value=n,t.getSnapshot=r,q0(t)&&G0(e)}function Q0(e,t,n){var r=function(){q0(t)&&G0(e)};return n(r)}function q0(e){var t=e.getSnapshot,n=e.value;try{var r=t();return!Da(n,r)}catch{return!0}}function G0(e){var t=ma(e,Rt);t!==null&&Er(t,e,Rt,Wn)}function lf(e){var t=Io();typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e;var n={pending:null,interleaved:null,lanes:ce,dispatch:null,lastRenderedReducer:N_,lastRenderedState:e};t.queue=n;var r=n.dispatch=v3.bind(null,vn,n);return[t.memoizedState,r]}function I_(e){return $_(N_)}function U_(e){return z_(N_)}function ac(e,t,n,r){var a={tag:e,create:t,destroy:n,deps:r,next:null},s=vn.updateQueue;if(s===null)s=Y0(),vn.updateQueue=s,s.lastEffect=a.next=a;else{var u=s.lastEffect;if(u===null)s.lastEffect=a.next=a;else{var d=u.next;u.next=a,a.next=d,s.lastEffect=a}}return a}function F_(e){var t=Io();{var n={current:e};return t.memoizedState=n,n}}function uf(e){var t=Ga();return t.memoizedState}function oc(e,t,n,r){var a=Io(),s=r===void 0?null:r;vn.flags|=e,a.memoizedState=ac(vr|t,n,void 0,s)}function cf(e,t,n,r){var a=Ga(),s=r===void 0?null:r,u=void 0;if(br!==null){var d=br.memoizedState;if(u=d.destroy,s!==null){var h=d.deps;if(O_(s,h)){a.memoizedState=ac(t,n,u,s);return}}}vn.flags|=e,a.memoizedState=ac(vr|t,n,u,s)}function df(e,t){return(vn.mode&No)!==yt?oc(Bh|Ci|zh,zr,e,t):oc(Ci|zh,zr,e,t)}function ic(e,t){return cf(Ci,zr,e,t)}function H_(e,t){return oc(cn,Bo,e,t)}function ff(e,t){return cf(cn,Bo,e,t)}function P_(e,t){var n=cn;return n|=cs,(vn.mode&No)!==yt&&(n|=Ei),oc(n,xr,e,t)}function hf(e,t){return cf(cn,xr,e,t)}function K0(e,t){if(typeof t=="function"){var n=t,r=e();return n(r),function(){n(null)}}else if(t!=null){var a=t;a.hasOwnProperty("current")||f("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(a).join(", ")+"}");var s=e();return a.current=s,function(){a.current=null}}}function W_(e,t,n){typeof t!="function"&&f("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null,a=cn;return a|=cs,(vn.mode&No)!==yt&&(a|=Ei),oc(a,xr,K0.bind(null,t,e),r)}function pf(e,t,n){typeof t!="function"&&f("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null;return cf(cn,xr,K0.bind(null,t,e),r)}function _3(e,t){}var _f=_3;function Y_(e,t){var n=Io(),r=t===void 0?null:t;return n.memoizedState=[e,r],e}function mf(e,t){var n=Ga(),r=t===void 0?null:t,a=n.memoizedState;if(a!==null&&r!==null){var s=a[1];if(O_(r,s))return a[0]}return n.memoizedState=[e,r],e}function V_(e,t){var n=Io(),r=t===void 0?null:t,a=e();return n.memoizedState=[a,r],a}function yf(e,t){var n=Ga(),r=t===void 0?null:t,a=n.memoizedState;if(a!==null&&r!==null){var s=a[1];if(O_(r,s))return a[0]}var u=e();return n.memoizedState=[u,r],u}function X_(e){var t=Io();return t.memoizedState=e,e}function J0(e){var t=Ga(),n=br,r=n.memoizedState;return ex(t,r,e)}function Z0(e){var t=Ga();if(br===null)return t.memoizedState=e,e;var n=br.memoizedState;return ex(t,n,e)}function ex(e,t,n){var r=!eC(Rs);if(r){if(!Da(n,t)){var a=Gg();vn.lanes=Wt(vn.lanes,a),kc(a),e.baseState=!0}return t}else return e.baseState&&(e.baseState=!1,fc()),e.memoizedState=n,n}function m3(e,t,n){var r=co();Lr(uC(r,ni)),e(!0);var a=tc.transition;tc.transition={};var s=tc.transition;tc.transition._updatedFibers=new Set;try{e(!1),t()}finally{if(Lr(r),tc.transition=a,a===null&&s._updatedFibers){var u=s._updatedFibers.size;u>10&&m("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),s._updatedFibers.clear()}}}function Q_(){var e=lf(!1),t=e[0],n=e[1],r=m3.bind(null,n),a=Io();return a.memoizedState=r,[t,r]}function tx(){var e=I_(),t=e[0],n=Ga(),r=n.memoizedState;return[t,r]}function nx(){var e=U_(),t=e[0],n=Ga(),r=n.memoizedState;return[t,r]}var rx=!1;function y3(){return rx}function q_(){var e=Io(),t=Bf(),n=t.identifierPrefix,r;if($r()){var a=N4();r=":"+n+"R"+a;var s=rc++;s>0&&(r+="H"+s.toString(32)),r+=":"}else{var u=f3++;r=":"+n+"r"+u.toString(32)+":"}return e.memoizedState=r,r}function gf(){var e=Ga(),t=e.memoizedState;return t}function g3(e,t,n){typeof arguments[3]=="function"&&f("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=Vi(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(e))ox(t,a);else{var s=O0(e,t,a,r);if(s!==null){var u=ua();Er(s,e,r,u),ix(s,t,r)}}sx(e,r)}function v3(e,t,n){typeof arguments[3]=="function"&&f("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=Vi(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ax(e))ox(t,a);else{var s=e.alternate;if(e.lanes===ce&&(s===null||s.lanes===ce)){var u=t.lastRenderedReducer;if(u!==null){var d;d=$e.current,$e.current=mo;try{var h=t.lastRenderedState,g=u(h,n);if(a.hasEagerState=!0,a.eagerState=g,Da(g,h)){r3(e,t,a,r);return}}catch{}finally{$e.current=d}}}var x=O0(e,t,a,r);if(x!==null){var L=ua();Er(x,e,r,L),ix(x,t,r)}}sx(e,r)}function ax(e){var t=e.alternate;return e===vn||t!==null&&t===vn}function ox(e,t){nc=of=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ix(e,t,n){if(qg(n)){var r=t.lanes;r=Kg(r,e.pendingLanes);var a=Wt(r,n);t.lanes=a,pp(e,a)}}function sx(e,t,n){Ph(e,t)}var vf={readContext:_r,useCallback:qr,useContext:qr,useEffect:qr,useImperativeHandle:qr,useInsertionEffect:qr,useLayoutEffect:qr,useMemo:qr,useReducer:qr,useRef:qr,useState:qr,useDebugValue:qr,useDeferredValue:qr,useTransition:qr,useMutableSource:qr,useSyncExternalStore:qr,useId:qr,unstable_isNewReconciler:fe},lx=null,ux=null,cx=null,dx=null,Uo=null,mo=null,xf=null;{var G_=function(){f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},jt=function(){f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};lx={readContext:function(e){return _r(e)},useCallback:function(e,t){return ne="useCallback",pn(),Ml(t),Y_(e,t)},useContext:function(e){return ne="useContext",pn(),_r(e)},useEffect:function(e,t){return ne="useEffect",pn(),Ml(t),df(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",pn(),Ml(n),W_(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",pn(),Ml(t),H_(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",pn(),Ml(t),P_(e,t)},useMemo:function(e,t){ne="useMemo",pn(),Ml(t);var n=$e.current;$e.current=Uo;try{return V_(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",pn();var r=$e.current;$e.current=Uo;try{return A_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",pn(),F_(e)},useState:function(e){ne="useState",pn();var t=$e.current;$e.current=Uo;try{return lf(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",pn(),void 0},useDeferredValue:function(e){return ne="useDeferredValue",pn(),X_(e)},useTransition:function(){return ne="useTransition",pn(),Q_()},useMutableSource:function(e,t,n){return ne="useMutableSource",pn(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",pn(),B_(e,t,n)},useId:function(){return ne="useId",pn(),q_()},unstable_isNewReconciler:fe},ux={readContext:function(e){return _r(e)},useCallback:function(e,t){return ne="useCallback",Se(),Y_(e,t)},useContext:function(e){return ne="useContext",Se(),_r(e)},useEffect:function(e,t){return ne="useEffect",Se(),df(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",Se(),W_(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",Se(),H_(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",Se(),P_(e,t)},useMemo:function(e,t){ne="useMemo",Se();var n=$e.current;$e.current=Uo;try{return V_(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",Se();var r=$e.current;$e.current=Uo;try{return A_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",Se(),F_(e)},useState:function(e){ne="useState",Se();var t=$e.current;$e.current=Uo;try{return lf(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",Se(),void 0},useDeferredValue:function(e){return ne="useDeferredValue",Se(),X_(e)},useTransition:function(){return ne="useTransition",Se(),Q_()},useMutableSource:function(e,t,n){return ne="useMutableSource",Se(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",Se(),B_(e,t,n)},useId:function(){return ne="useId",Se(),q_()},unstable_isNewReconciler:fe},cx={readContext:function(e){return _r(e)},useCallback:function(e,t){return ne="useCallback",Se(),mf(e,t)},useContext:function(e){return ne="useContext",Se(),_r(e)},useEffect:function(e,t){return ne="useEffect",Se(),ic(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",Se(),pf(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",Se(),ff(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",Se(),hf(e,t)},useMemo:function(e,t){ne="useMemo",Se();var n=$e.current;$e.current=mo;try{return yf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",Se();var r=$e.current;$e.current=mo;try{return $_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",Se(),uf()},useState:function(e){ne="useState",Se();var t=$e.current;$e.current=mo;try{return I_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",Se(),_f()},useDeferredValue:function(e){return ne="useDeferredValue",Se(),J0(e)},useTransition:function(){return ne="useTransition",Se(),tx()},useMutableSource:function(e,t,n){return ne="useMutableSource",Se(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",Se(),sf(e,t)},useId:function(){return ne="useId",Se(),gf()},unstable_isNewReconciler:fe},dx={readContext:function(e){return _r(e)},useCallback:function(e,t){return ne="useCallback",Se(),mf(e,t)},useContext:function(e){return ne="useContext",Se(),_r(e)},useEffect:function(e,t){return ne="useEffect",Se(),ic(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",Se(),pf(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",Se(),ff(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",Se(),hf(e,t)},useMemo:function(e,t){ne="useMemo",Se();var n=$e.current;$e.current=xf;try{return yf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",Se();var r=$e.current;$e.current=xf;try{return z_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",Se(),uf()},useState:function(e){ne="useState",Se();var t=$e.current;$e.current=xf;try{return U_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",Se(),_f()},useDeferredValue:function(e){return ne="useDeferredValue",Se(),Z0(e)},useTransition:function(){return ne="useTransition",Se(),nx()},useMutableSource:function(e,t,n){return ne="useMutableSource",Se(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",Se(),sf(e,t)},useId:function(){return ne="useId",Se(),gf()},unstable_isNewReconciler:fe},Uo={readContext:function(e){return G_(),_r(e)},useCallback:function(e,t){return ne="useCallback",jt(),pn(),Y_(e,t)},useContext:function(e){return ne="useContext",jt(),pn(),_r(e)},useEffect:function(e,t){return ne="useEffect",jt(),pn(),df(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",jt(),pn(),W_(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",jt(),pn(),H_(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",jt(),pn(),P_(e,t)},useMemo:function(e,t){ne="useMemo",jt(),pn();var n=$e.current;$e.current=Uo;try{return V_(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",jt(),pn();var r=$e.current;$e.current=Uo;try{return A_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",jt(),pn(),F_(e)},useState:function(e){ne="useState",jt(),pn();var t=$e.current;$e.current=Uo;try{return lf(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",jt(),pn(),void 0},useDeferredValue:function(e){return ne="useDeferredValue",jt(),pn(),X_(e)},useTransition:function(){return ne="useTransition",jt(),pn(),Q_()},useMutableSource:function(e,t,n){return ne="useMutableSource",jt(),pn(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",jt(),pn(),B_(e,t,n)},useId:function(){return ne="useId",jt(),pn(),q_()},unstable_isNewReconciler:fe},mo={readContext:function(e){return G_(),_r(e)},useCallback:function(e,t){return ne="useCallback",jt(),Se(),mf(e,t)},useContext:function(e){return ne="useContext",jt(),Se(),_r(e)},useEffect:function(e,t){return ne="useEffect",jt(),Se(),ic(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",jt(),Se(),pf(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",jt(),Se(),ff(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",jt(),Se(),hf(e,t)},useMemo:function(e,t){ne="useMemo",jt(),Se();var n=$e.current;$e.current=mo;try{return yf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",jt(),Se();var r=$e.current;$e.current=mo;try{return $_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",jt(),Se(),uf()},useState:function(e){ne="useState",jt(),Se();var t=$e.current;$e.current=mo;try{return I_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",jt(),Se(),_f()},useDeferredValue:function(e){return ne="useDeferredValue",jt(),Se(),J0(e)},useTransition:function(){return ne="useTransition",jt(),Se(),tx()},useMutableSource:function(e,t,n){return ne="useMutableSource",jt(),Se(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",jt(),Se(),sf(e,t)},useId:function(){return ne="useId",jt(),Se(),gf()},unstable_isNewReconciler:fe},xf={readContext:function(e){return G_(),_r(e)},useCallback:function(e,t){return ne="useCallback",jt(),Se(),mf(e,t)},useContext:function(e){return ne="useContext",jt(),Se(),_r(e)},useEffect:function(e,t){return ne="useEffect",jt(),Se(),ic(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",jt(),Se(),pf(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",jt(),Se(),ff(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",jt(),Se(),hf(e,t)},useMemo:function(e,t){ne="useMemo",jt(),Se();var n=$e.current;$e.current=mo;try{return yf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){ne="useReducer",jt(),Se();var r=$e.current;$e.current=mo;try{return z_(e,t,n)}finally{$e.current=r}},useRef:function(e){return ne="useRef",jt(),Se(),uf()},useState:function(e){ne="useState",jt(),Se();var t=$e.current;$e.current=mo;try{return U_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",jt(),Se(),_f()},useDeferredValue:function(e){return ne="useDeferredValue",jt(),Se(),Z0(e)},useTransition:function(){return ne="useTransition",jt(),Se(),nx()},useMutableSource:function(e,t,n){return ne="useMutableSource",jt(),Se(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",jt(),Se(),sf(e,t)},useId:function(){return ne="useId",jt(),Se(),gf()},unstable_isNewReconciler:fe}}var Hi=l.unstable_now,fx=0,bf=-1,sc=-1,wf=-1,K_=!1,Sf=!1;function hx(){return K_}function x3(){Sf=!0}function b3(){K_=!1,Sf=!1}function w3(){K_=Sf,Sf=!1}function px(){return fx}function _x(){fx=Hi()}function J_(e){sc=Hi(),e.actualStartTime<0&&(e.actualStartTime=Hi())}function mx(e){sc=-1}function kf(e,t){if(sc>=0){var n=Hi()-sc;e.actualDuration+=n,t&&(e.selfBaseDuration=n),sc=-1}}function Fo(e){if(bf>=0){var t=Hi()-bf;bf=-1;for(var n=e.return;n!==null;){switch(n.tag){case M:var r=n.stateNode;r.effectDuration+=t;return;case G:var a=n.stateNode;a.effectDuration+=t;return}n=n.return}}}function Z_(e){if(wf>=0){var t=Hi()-wf;wf=-1;for(var n=e.return;n!==null;){switch(n.tag){case M:var r=n.stateNode;r!==null&&(r.passiveEffectDuration+=t);return;case G:var a=n.stateNode;a!==null&&(a.passiveEffectDuration+=t);return}n=n.return}}}function Ho(){bf=Hi()}function em(){wf=Hi()}function tm(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function yo(e,t){if(e&&e.defaultProps){var n=Bt({},t),r=e.defaultProps;for(var a in r)n[a]===void 0&&(n[a]=r[a]);return n}return t}var nm={},rm,am,om,im,sm,yx,Cf,lm,um,cm,lc;{rm=new Set,am=new Set,om=new Set,im=new Set,lm=new Set,sm=new Set,um=new Set,cm=new Set,lc=new Set;var gx=new Set;Cf=function(e,t){if(!(e===null||typeof e=="function")){var n=t+"_"+e;gx.has(n)||(gx.add(n),f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},yx=function(e,t){if(t===void 0){var n=rn(e)||"Component";sm.has(n)||(sm.add(n),f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},Object.defineProperty(nm,"_processChildContext",{enumerable:!1,value:function(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(nm)}function dm(e,t,n,r){var a=e.memoizedState,s=n(r,a);{if(e.mode&or){Mr(!0);try{s=n(r,a)}finally{Mr(!1)}}yx(t,s)}var u=s==null?a:Bt({},a,s);if(e.memoizedState=u,e.lanes===ce){var d=e.updateQueue;d.baseState=u}}var fm={isMounted:hk,enqueueSetState:function(e,t,n){var r=Zs(e),a=ua(),s=Vi(r),u=ui(a,s);u.payload=t,n!=null&&(Cf(n,"setState"),u.callback=n);var d=Bi(r,u,s);d!==null&&(Er(d,r,s,a),Zd(d,r,s)),Ph(r,s)},enqueueReplaceState:function(e,t,n){var r=Zs(e),a=ua(),s=Vi(r),u=ui(a,s);u.tag=A0,u.payload=t,n!=null&&(Cf(n,"replaceState"),u.callback=n);var d=Bi(r,u,s);d!==null&&(Er(d,r,s,a),Zd(d,r,s)),Ph(r,s)},enqueueForceUpdate:function(e,t){var n=Zs(e),r=ua(),a=Vi(n),s=ui(r,a);s.tag=Gd,t!=null&&(Cf(t,"forceUpdate"),s.callback=t);var u=Bi(n,s,a);u!==null&&(Er(u,n,a,r),Zd(u,n,a)),Wk(n,a)}};function vx(e,t,n,r,a,s,u){var d=e.stateNode;if(typeof d.shouldComponentUpdate=="function"){var h=d.shouldComponentUpdate(r,s,u);{if(e.mode&or){Mr(!0);try{h=d.shouldComponentUpdate(r,s,u)}finally{Mr(!1)}}h===void 0&&f("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",rn(t)||"Component")}return h}return t.prototype&&t.prototype.isPureReactComponent?!Mu(n,r)||!Mu(a,s):!0}function S3(e,t,n){var r=e.stateNode;{var a=rn(t)||"Component",s=r.render;s||(t.prototype&&typeof t.prototype.render=="function"?f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",a):f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",a)),r.getInitialState&&!r.getInitialState.isReactClassApproved&&!r.state&&f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",a),r.getDefaultProps&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",a),r.propTypes&&f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",a),r.contextType&&f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",a),t.childContextTypes&&!lc.has(t)&&(e.mode&or)===yt&&(lc.add(t),f(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,a)),t.contextTypes&&!lc.has(t)&&(e.mode&or)===yt&&(lc.add(t),f(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,a)),r.contextTypes&&f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",a),t.contextType&&t.contextTypes&&!um.has(t)&&(um.add(t),f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",a)),typeof r.componentShouldUpdate=="function"&&f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",a),t.prototype&&t.prototype.isPureReactComponent&&typeof r.shouldComponentUpdate<"u"&&f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",rn(t)||"A pure component"),typeof r.componentDidUnmount=="function"&&f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",a),typeof r.componentDidReceiveProps=="function"&&f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",a),typeof r.componentWillRecieveProps=="function"&&f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",a),typeof r.UNSAFE_componentWillRecieveProps=="function"&&f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",a);var u=r.props!==n;r.props!==void 0&&u&&f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",a,a),r.defaultProps&&f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",a,a),typeof r.getSnapshotBeforeUpdate=="function"&&typeof r.componentDidUpdate!="function"&&!om.has(t)&&(om.add(t),f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",rn(t))),typeof r.getDerivedStateFromProps=="function"&&f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",a),typeof r.getDerivedStateFromError=="function"&&f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",a),typeof t.getSnapshotBeforeUpdate=="function"&&f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",a);var d=r.state;d&&(typeof d!="object"||Nt(d))&&f("%s.state: must be set to an object or null",a),typeof r.getChildContext=="function"&&typeof t.childContextTypes!="object"&&f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",a)}}function xx(e,t){t.updater=fm,e.stateNode=t,uk(t,e),t._reactInternalInstance=nm}function bx(e,t,n){var r=!1,a=La,s=La,u=t.contextType;if("contextType"in t){var d=u===null||u!==void 0&&u.$$typeof===k&&u._context===void 0;if(!d&&!cm.has(t)){cm.add(t);var h="";u===void 0?h=" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof u!="object"?h=" However, it is set to a "+typeof u+".":u.$$typeof===ur?h=" Did you accidentally pass the Context.Provider instead?":u._context!==void 0?h=" Did you accidentally pass the Context.Consumer instead?":h=" However, it is set to an object with keys {"+Object.keys(u).join(", ")+"}.",f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",rn(t)||"Component",h)}}if(typeof u=="object"&&u!==null)s=_r(u);else{a=gl(e,t,!0);var g=t.contextTypes;r=g!=null,s=r?vl(e,a):La}var x=new t(n,s);if(e.mode&or){Mr(!0);try{x=new t(n,s)}finally{Mr(!1)}}var L=e.memoizedState=x.state!==null&&x.state!==void 0?x.state:null;xx(e,x);{if(typeof t.getDerivedStateFromProps=="function"&&L===null){var D=rn(t)||"Component";am.has(D)||(am.add(D),f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",D,x.state===null?"null":"undefined",D))}if(typeof t.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"){var Y=null,X=null,J=null;if(typeof x.componentWillMount=="function"&&x.componentWillMount.__suppressDeprecationWarning!==!0?Y="componentWillMount":typeof x.UNSAFE_componentWillMount=="function"&&(Y="UNSAFE_componentWillMount"),typeof x.componentWillReceiveProps=="function"&&x.componentWillReceiveProps.__suppressDeprecationWarning!==!0?X="componentWillReceiveProps":typeof x.UNSAFE_componentWillReceiveProps=="function"&&(X="UNSAFE_componentWillReceiveProps"),typeof x.componentWillUpdate=="function"&&x.componentWillUpdate.__suppressDeprecationWarning!==!0?J="componentWillUpdate":typeof x.UNSAFE_componentWillUpdate=="function"&&(J="UNSAFE_componentWillUpdate"),Y!==null||X!==null||J!==null){var je=rn(t)||"Component",pt=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";im.has(je)||(im.add(je),f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,je,pt,Y!==null?`
  `+Y:"",X!==null?`
  `+X:"",J!==null?`
  `+J:""))}}}return r&&c0(e,a,s),x}function k3(e,t){var n=t.state;typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&(f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",dt(e)||"Component"),fm.enqueueReplaceState(t,t.state,null))}function wx(e,t,n,r){var a=t.state;if(typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==a){{var s=dt(e)||"Component";rm.has(s)||(rm.add(s),f("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",s))}fm.enqueueReplaceState(t,t.state,null)}}function hm(e,t,n,r){S3(e,t,n);var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},w_(e);var s=t.contextType;if(typeof s=="object"&&s!==null)a.context=_r(s);else{var u=gl(e,t,!0);a.context=vl(e,u)}{if(a.state===n){var d=rn(t)||"Component";lm.has(d)||(lm.add(d),f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",d))}e.mode&or&&po.recordLegacyContextWarning(e,a),po.recordUnsafeLifecycleWarnings(e,a)}a.state=e.memoizedState;var h=t.getDerivedStateFromProps;if(typeof h=="function"&&(dm(e,t,h,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps!="function"&&typeof a.getSnapshotBeforeUpdate!="function"&&(typeof a.UNSAFE_componentWillMount=="function"||typeof a.componentWillMount=="function")&&(k3(e,a),ef(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"){var g=cn;g|=cs,(e.mode&No)!==yt&&(g|=Ei),e.flags|=g}}function C3(e,t,n,r){var a=e.stateNode,s=e.memoizedProps;a.props=s;var u=a.context,d=t.contextType,h=La;if(typeof d=="object"&&d!==null)h=_r(d);else{var g=gl(e,t,!0);h=vl(e,g)}var x=t.getDerivedStateFromProps,L=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";!L&&(typeof a.UNSAFE_componentWillReceiveProps=="function"||typeof a.componentWillReceiveProps=="function")&&(s!==n||u!==h)&&wx(e,a,n,h),z0();var D=e.memoizedState,Y=a.state=D;if(ef(e,n,a,r),Y=e.memoizedState,s===n&&D===Y&&!Ad()&&!tf()){if(typeof a.componentDidMount=="function"){var X=cn;X|=cs,(e.mode&No)!==yt&&(X|=Ei),e.flags|=X}return!1}typeof x=="function"&&(dm(e,t,x,n),Y=e.memoizedState);var J=tf()||vx(e,t,s,n,D,Y,h);if(J){if(!L&&(typeof a.UNSAFE_componentWillMount=="function"||typeof a.componentWillMount=="function")&&(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"){var je=cn;je|=cs,(e.mode&No)!==yt&&(je|=Ei),e.flags|=je}}else{if(typeof a.componentDidMount=="function"){var pt=cn;pt|=cs,(e.mode&No)!==yt&&(pt|=Ei),e.flags|=pt}e.memoizedProps=n,e.memoizedState=Y}return a.props=n,a.state=Y,a.context=h,J}function E3(e,t,n,r,a){var s=t.stateNode;$0(e,t);var u=t.memoizedProps,d=t.type===t.elementType?u:yo(t.type,u);s.props=d;var h=t.pendingProps,g=s.context,x=n.contextType,L=La;if(typeof x=="object"&&x!==null)L=_r(x);else{var D=gl(t,n,!0);L=vl(t,D)}var Y=n.getDerivedStateFromProps,X=typeof Y=="function"||typeof s.getSnapshotBeforeUpdate=="function";!X&&(typeof s.UNSAFE_componentWillReceiveProps=="function"||typeof s.componentWillReceiveProps=="function")&&(u!==h||g!==L)&&wx(t,s,r,L),z0();var J=t.memoizedState,je=s.state=J;if(ef(t,r,s,a),je=t.memoizedState,u===h&&J===je&&!Ad()&&!tf()&&!it)return typeof s.componentDidUpdate=="function"&&(u!==e.memoizedProps||J!==e.memoizedState)&&(t.flags|=cn),typeof s.getSnapshotBeforeUpdate=="function"&&(u!==e.memoizedProps||J!==e.memoizedState)&&(t.flags|=tl),!1;typeof Y=="function"&&(dm(t,n,Y,r),je=t.memoizedState);var pt=tf()||vx(t,n,d,r,J,je,L)||it;return pt?(!X&&(typeof s.UNSAFE_componentWillUpdate=="function"||typeof s.componentWillUpdate=="function")&&(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,je,L),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,je,L)),typeof s.componentDidUpdate=="function"&&(t.flags|=cn),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=tl)):(typeof s.componentDidUpdate=="function"&&(u!==e.memoizedProps||J!==e.memoizedState)&&(t.flags|=cn),typeof s.getSnapshotBeforeUpdate=="function"&&(u!==e.memoizedProps||J!==e.memoizedState)&&(t.flags|=tl),t.memoizedProps=r,t.memoizedState=je),s.props=r,s.state=je,s.context=L,pt}function js(e,t){return{value:e,source:t,stack:Qn(t),digest:null}}function pm(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function R3(e,t){return!0}function _m(e,t){try{var n=R3(e,t);if(n===!1)return;var r=t.value,a=t.source,s=t.stack,u=s!==null?s:"";if(r!=null&&r._suppressLogging){if(e.tag===P)return;console.error(r)}var d=a?dt(a):null,h=d?"The above error occurred in the <"+d+"> component:":"The above error occurred in one of your React components:",g;if(e.tag===M)g=`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;else{var x=dt(e)||"Anonymous";g="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+x+".")}var L=h+`
`+u+`

`+(""+g);console.error(L)}catch(D){setTimeout(function(){throw D})}}var j3=typeof WeakMap=="function"?WeakMap:Map;function Sx(e,t,n){var r=ui(Wn,n);r.tag=x_,r.payload={element:null};var a=t.value;return r.callback=function(){xR(a),_m(e,t)},r}function mm(e,t,n){var r=ui(Wn,n);r.tag=x_;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=t.value;r.payload=function(){return a(s)},r.callback=function(){N1(e),_m(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){N1(e),_m(e,t),typeof a!="function"&&gR(this);var h=t.value,g=t.stack;this.componentDidCatch(h,{componentStack:g!==null?g:""}),typeof a!="function"&&(ja(e.lanes,Rt)||f("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",dt(e)||"Unknown"))}),r}function kx(e,t,n){var r=e.pingCache,a;if(r===null?(r=e.pingCache=new j3,a=new Set,r.set(t,a)):(a=r.get(t),a===void 0&&(a=new Set,r.set(t,a))),!a.has(n)){a.add(n);var s=bR.bind(null,e,t,n);uo&&Cc(e,n),t.then(s,s)}}function T3(e,t,n,r){var a=e.updateQueue;if(a===null){var s=new Set;s.add(n),e.updateQueue=s}else a.add(n)}function M3(e,t){var n=e.tag;if((e.mode&Kt)===yt&&(n===E||n===Ie||n===ae)){var r=e.alternate;r?(e.updateQueue=r.updateQueue,e.memoizedState=r.memoizedState,e.lanes=r.lanes):(e.updateQueue=null,e.memoizedState=null)}}function Cx(e){var t=e;do{if(t.tag===de&&c3(t))return t;t=t.return}while(t!==null);return null}function Ex(e,t,n,r,a){if((e.mode&Kt)===yt){if(e===t)e.flags|=ia;else{if(e.flags|=dn,n.flags|=Ah,n.flags&=-52805,n.tag===P){var s=n.alternate;if(s===null)n.tag=ot;else{var u=ui(Wn,Rt);u.tag=Gd,Bi(n,u,Rt)}}n.lanes=Wt(n.lanes,Rt)}return e}return e.flags|=ia,e.lanes=a,e}function D3(e,t,n,r,a){if(n.flags|=Zc,uo&&Cc(e,a),r!==null&&typeof r=="object"&&typeof r.then=="function"){var s=r;M3(n),$r()&&n.mode&Kt&&y0();var u=Cx(t);if(u!==null){u.flags&=~Jo,Ex(u,t,n,e,a),u.mode&Kt&&kx(e,s,a),T3(u,e,s);return}else{if(!Zk(a)){kx(e,s,a),qm();return}var d=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");r=d}}else if($r()&&n.mode&Kt){y0();var h=Cx(t);if(h!==null){(h.flags&ia)===bt&&(h.flags|=Jo),Ex(h,t,n,e,a),l_(js(r,n));return}}r=js(r,n),cR(r);var g=t;do{switch(g.tag){case M:{var x=r;g.flags|=ia;var L=_u(a);g.lanes=Wt(g.lanes,L);var D=Sx(g,x,L);S_(g,D);return}case P:var Y=r,X=g.type,J=g.stateNode;if((g.flags&dn)===bt&&(typeof X.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&!C1(J))){g.flags|=ia;var je=_u(a);g.lanes=Wt(g.lanes,je);var pt=mm(g,Y,je);S_(g,pt);return}break}g=g.return}while(g!==null)}function L3(){return null}var uc=c.ReactCurrentOwner,go=!1,ym,cc,gm,vm,xm,Ts,bm,Ef,dc;ym={},cc={},gm={},vm={},xm={},Ts=!1,bm={},Ef={},dc={};function sa(e,t,n,r){e===null?t.child=T0(t,null,n,r):t.child=Sl(t,e.child,n,r)}function O3(e,t,n,r){t.child=Sl(t,e.child,null,r),t.child=Sl(t,null,n,r)}function Rx(e,t,n,r,a){if(t.type!==t.elementType){var s=n.propTypes;s&&fo(s,r,"prop",rn(n))}var u=n.render,d=t.ref,h,g;Cl(t,a),uu(t);{if(uc.current=t,ea(!0),h=Dl(e,t,u,r,d,a),g=Ll(),t.mode&or){Mr(!0);try{h=Dl(e,t,u,r,d,a),g=Ll()}finally{Mr(!1)}}ea(!1)}return al(),e!==null&&!go?(P0(e,t,a),ci(e,t,a)):($r()&&g&&n_(t),t.flags|=el,sa(e,t,h,a),t.child)}function jx(e,t,n,r,a){if(e===null){var s=n.type;if(BR(s)&&n.compare===null&&n.defaultProps===void 0){var u=s;return u=Ul(s),t.tag=ae,t.type=u,km(t,s),Tx(e,t,u,r,a)}{var d=s.propTypes;if(d&&fo(d,r,"prop",rn(s)),n.defaultProps!==void 0){var h=rn(s)||"Unknown";dc[h]||(f("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.",h),dc[h]=!0)}}var g=iy(n.type,null,r,t,t.mode,a);return g.ref=t.ref,g.return=t,t.child=g,g}{var x=n.type,L=x.propTypes;L&&fo(L,r,"prop",rn(x))}var D=e.child,Y=Mm(e,a);if(!Y){var X=D.memoizedProps,J=n.compare;if(J=J!==null?J:Mu,J(X,r)&&e.ref===t.ref)return ci(e,t,a)}t.flags|=el;var je=Ns(D,r);return je.ref=t.ref,je.return=t,t.child=je,je}function Tx(e,t,n,r,a){if(t.type!==t.elementType){var s=t.elementType;if(s.$$typeof===ut){var u=s,d=u._payload,h=u._init;try{s=h(d)}catch{s=null}var g=s&&s.propTypes;g&&fo(g,r,"prop",rn(s))}}if(e!==null){var x=e.memoizedProps;if(Mu(x,r)&&e.ref===t.ref&&t.type===e.type)if(go=!1,t.pendingProps=r=x,Mm(e,a))(e.flags&Ah)!==bt&&(go=!0);else return t.lanes=e.lanes,ci(e,t,a)}return wm(e,t,n,r,a)}function Mx(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden"||Tt)if((t.mode&Kt)===yt){var u={baseLanes:ce,cachePool:null,transitions:null};t.memoizedState=u,If(t,n)}else if(ja(n,Ra)){var L={baseLanes:ce,cachePool:null,transitions:null};t.memoizedState=L;var D=s!==null?s.baseLanes:n;If(t,D)}else{var d=null,h;if(s!==null){var g=s.baseLanes;h=Wt(g,n)}else h=n;t.lanes=t.childLanes=Ra;var x={baseLanes:h,cachePool:d,transitions:null};return t.memoizedState=x,t.updateQueue=null,If(t,h),null}else{var Y;s!==null?(Y=Wt(s.baseLanes,n),t.memoizedState=null):Y=n,If(t,Y)}return sa(e,t,a,n),t.child}function N3(e,t,n){var r=t.pendingProps;return sa(e,t,r,n),t.child}function A3(e,t,n){var r=t.pendingProps.children;return sa(e,t,r,n),t.child}function $3(e,t,n){{t.flags|=cn;{var r=t.stateNode;r.effectDuration=0,r.passiveEffectDuration=0}}var a=t.pendingProps,s=a.children;return sa(e,t,s,n),t.child}function Dx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=ls,t.flags|=$h)}function wm(e,t,n,r,a){if(t.type!==t.elementType){var s=n.propTypes;s&&fo(s,r,"prop",rn(n))}var u;{var d=gl(t,n,!0);u=vl(t,d)}var h,g;Cl(t,a),uu(t);{if(uc.current=t,ea(!0),h=Dl(e,t,n,r,u,a),g=Ll(),t.mode&or){Mr(!0);try{h=Dl(e,t,n,r,u,a),g=Ll()}finally{Mr(!1)}}ea(!1)}return al(),e!==null&&!go?(P0(e,t,a),ci(e,t,a)):($r()&&g&&n_(t),t.flags|=el,sa(e,t,h,a),t.child)}function Lx(e,t,n,r,a){{switch(ZR(t)){case!1:{var s=t.stateNode,u=t.type,d=new u(t.memoizedProps,s.context),h=d.state;s.updater.enqueueSetState(s,h,null);break}case!0:{t.flags|=dn,t.flags|=ia;var g=new Error("Simulated error coming from DevTools"),x=_u(a);t.lanes=Wt(t.lanes,x);var L=mm(t,js(g,t),x);S_(t,L);break}}if(t.type!==t.elementType){var D=n.propTypes;D&&fo(D,r,"prop",rn(n))}}var Y;zo(n)?(Y=!0,zd(t)):Y=!1,Cl(t,a);var X=t.stateNode,J;X===null?(jf(e,t),bx(t,n,r),hm(t,n,r,a),J=!0):e===null?J=C3(t,n,r,a):J=E3(e,t,n,r,a);var je=Sm(e,t,n,J,Y,a);{var pt=t.stateNode;J&&pt.props!==r&&(Ts||f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",dt(t)||"a component"),Ts=!0)}return je}function Sm(e,t,n,r,a,s){Dx(e,t);var u=(t.flags&dn)!==bt;if(!r&&!u)return a&&h0(t,n,!1),ci(e,t,s);var d=t.stateNode;uc.current=t;var h;if(u&&typeof n.getDerivedStateFromError!="function")h=null,mx();else{uu(t);{if(ea(!0),h=d.render(),t.mode&or){Mr(!0);try{d.render()}finally{Mr(!1)}}ea(!1)}al()}return t.flags|=el,e!==null&&u?O3(e,t,h,s):sa(e,t,h,s),t.memoizedState=d.state,a&&h0(t,n,!0),t.child}function Ox(e){var t=e.stateNode;t.pendingContext?d0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&d0(e,t.context,!1),k_(e,t.containerInfo)}function z3(e,t,n){if(Ox(t),e===null)throw new Error("Should have a current fiber. This is a bug in React.");var r=t.pendingProps,a=t.memoizedState,s=a.element;$0(e,t),ef(t,r,null,n);var u=t.memoizedState;t.stateNode;var d=u.element;if(a.isDehydrated){var h={element:d,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},g=t.updateQueue;if(g.baseState=h,t.memoizedState=h,t.flags&Jo){var x=js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),t);return Nx(e,t,d,n,x)}else if(d!==s){var L=js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t);return Nx(e,t,d,n,L)}else{U4(t);var D=T0(t,null,d,n);t.child=D;for(var Y=D;Y;)Y.flags=Y.flags&~pr|Zo,Y=Y.sibling}}else{if(wl(),d===s)return ci(e,t,n);sa(e,t,d,n)}return t.child}function Nx(e,t,n,r,a){return wl(),l_(a),t.flags|=Jo,sa(e,t,n,r),t.child}function B3(e,t,n){U0(t),e===null&&s_(t);var r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,u=a.children,d=Hp(r,a);return d?u=null:s!==null&&Hp(r,s)&&(t.flags|=su),Dx(e,t),sa(e,t,u,n),t.child}function I3(e,t){return e===null&&s_(t),null}function U3(e,t,n,r){jf(e,t);var a=t.pendingProps,s=n,u=s._payload,d=s._init,h=d(u);t.type=h;var g=t.tag=IR(h),x=yo(h,a),L;switch(g){case E:return km(t,h),t.type=h=Ul(h),L=wm(null,t,h,x,r),L;case P:return t.type=h=ey(h),L=Lx(null,t,h,x,r),L;case Ie:return t.type=h=ty(h),L=Rx(null,t,h,x,r),L;case Ae:{if(t.type!==t.elementType){var D=h.propTypes;D&&fo(D,x,"prop",rn(h))}return L=jx(null,t,h,yo(h.type,x),r),L}}var Y="";throw h!==null&&typeof h=="object"&&h.$$typeof===ut&&(Y=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+h+". "+("Lazy element type must resolve to a class or function."+Y))}function F3(e,t,n,r,a){jf(e,t),t.tag=P;var s;return zo(n)?(s=!0,zd(t)):s=!1,Cl(t,a),bx(t,n,r),hm(t,n,r,a),Sm(null,t,n,!0,s,a)}function H3(e,t,n,r){jf(e,t);var a=t.pendingProps,s;{var u=gl(t,n,!1);s=vl(t,u)}Cl(t,r);var d,h;uu(t);{if(n.prototype&&typeof n.prototype.render=="function"){var g=rn(n)||"Unknown";ym[g]||(f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",g,g),ym[g]=!0)}t.mode&or&&po.recordLegacyContextWarning(t,null),ea(!0),uc.current=t,d=Dl(null,t,n,a,s,r),h=Ll(),ea(!1)}if(al(),t.flags|=el,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0){var x=rn(n)||"Unknown";cc[x]||(f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",x,x,x),cc[x]=!0)}if(typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0){{var L=rn(n)||"Unknown";cc[L]||(f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",L,L,L),cc[L]=!0)}t.tag=P,t.memoizedState=null,t.updateQueue=null;var D=!1;return zo(n)?(D=!0,zd(t)):D=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,w_(t),xx(t,d),hm(t,n,a,r),Sm(null,t,n,!0,D,r)}else{if(t.tag=E,t.mode&or){Mr(!0);try{d=Dl(null,t,n,a,s,r),h=Ll()}finally{Mr(!1)}}return $r()&&h&&n_(t),sa(null,t,d,r),km(t,n),t.child}}function km(e,t){{if(t&&t.childContextTypes&&f("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),e.ref!==null){var n="",r=To();r&&(n+=`

Check the render method of \``+r+"`.");var a=r||"",s=e._debugSource;s&&(a=s.fileName+":"+s.lineNumber),xm[a]||(xm[a]=!0,f("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if(t.defaultProps!==void 0){var u=rn(t)||"Unknown";dc[u]||(f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",u),dc[u]=!0)}if(typeof t.getDerivedStateFromProps=="function"){var d=rn(t)||"Unknown";vm[d]||(f("%s: Function components do not support getDerivedStateFromProps.",d),vm[d]=!0)}if(typeof t.contextType=="object"&&t.contextType!==null){var h=rn(t)||"Unknown";gm[h]||(f("%s: Function components do not support contextType.",h),gm[h]=!0)}}}var Cm={dehydrated:null,treeContext:null,retryLane:Dr};function Em(e){return{baseLanes:e,cachePool:L3(),transitions:null}}function P3(e,t){var n=null;return{baseLanes:Wt(e.baseLanes,t),cachePool:n,transitions:e.transitions}}function W3(e,t,n,r){if(t!==null){var a=t.memoizedState;if(a===null)return!1}return R_(e,ec)}function Y3(e,t){return id(e.childLanes,t)}function Ax(e,t,n){var r=t.pendingProps;ej(t)&&(t.flags|=dn);var a=_o.current,s=!1,u=(t.flags&dn)!==bt;if(u||W3(a,e)?(s=!0,t.flags&=~dn):(e===null||e.memoizedState!==null)&&(a=u3(a,H0)),a=Rl(a),Ui(t,a),e===null){s_(t);var d=t.memoizedState;if(d!==null){var h=d.dehydrated;if(h!==null)return G3(t,h)}var g=r.children,x=r.fallback;if(s){var L=V3(t,g,x,n),D=t.child;return D.memoizedState=Em(n),t.memoizedState=Cm,L}else return Rm(t,g)}else{var Y=e.memoizedState;if(Y!==null){var X=Y.dehydrated;if(X!==null)return K3(e,t,u,r,X,Y,n)}if(s){var J=r.fallback,je=r.children,pt=Q3(e,t,je,J,n),tt=t.child,Zt=e.child.memoizedState;return tt.memoizedState=Zt===null?Em(n):P3(Zt,n),tt.childLanes=Y3(e,n),t.memoizedState=Cm,pt}else{var Qt=r.children,U=X3(e,t,Qt,n);return t.memoizedState=null,U}}}function Rm(e,t,n){var r=e.mode,a={mode:"visible",children:t},s=jm(a,r);return s.return=e,e.child=s,s}function V3(e,t,n,r){var a=e.mode,s=e.child,u={mode:"hidden",children:t},d,h;return(a&Kt)===yt&&s!==null?(d=s,d.childLanes=ce,d.pendingProps=u,e.mode&gn&&(d.actualDuration=0,d.actualStartTime=-1,d.selfBaseDuration=0,d.treeBaseDuration=0),h=Qi(n,a,r,null)):(d=jm(u,a),h=Qi(n,a,r,null)),d.return=e,h.return=e,d.sibling=h,e.child=d,h}function jm(e,t,n){return $1(e,t,ce,null)}function $x(e,t){return Ns(e,t)}function X3(e,t,n,r){var a=e.child,s=a.sibling,u=$x(a,{mode:"visible",children:n});if((t.mode&Kt)===yt&&(u.lanes=r),u.return=t,u.sibling=null,s!==null){var d=t.deletions;d===null?(t.deletions=[s],t.flags|=ss):d.push(s)}return t.child=u,u}function Q3(e,t,n,r,a){var s=t.mode,u=e.child,d=u.sibling,h={mode:"hidden",children:n},g;if((s&Kt)===yt&&t.child!==u){var x=t.child;g=x,g.childLanes=ce,g.pendingProps=h,t.mode&gn&&(g.actualDuration=0,g.actualStartTime=-1,g.selfBaseDuration=u.selfBaseDuration,g.treeBaseDuration=u.treeBaseDuration),t.deletions=null}else g=$x(u,h),g.subtreeFlags=u.subtreeFlags&ei;var L;return d!==null?L=Ns(d,r):(L=Qi(r,s,a,null),L.flags|=pr),L.return=t,g.return=t,g.sibling=L,t.child=g,L}function Rf(e,t,n,r){r!==null&&l_(r),Sl(t,e.child,null,n);var a=t.pendingProps,s=a.children,u=Rm(t,s);return u.flags|=pr,t.memoizedState=null,u}function q3(e,t,n,r,a){var s=t.mode,u={mode:"visible",children:n},d=jm(u,s),h=Qi(r,s,a,null);return h.flags|=pr,d.return=t,h.return=t,d.sibling=h,t.child=d,(t.mode&Kt)!==yt&&Sl(t,e.child,null,a),h}function G3(e,t,n){return(e.mode&Kt)===yt?(f("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=Rt):Vp(t)?e.lanes=hs:e.lanes=Ra,null}function K3(e,t,n,r,a,s,u){if(n)if(t.flags&Jo){t.flags&=~Jo;var U=pm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));return Rf(e,t,u,U)}else{if(t.memoizedState!==null)return t.child=e.child,t.flags|=dn,null;var Z=r.children,F=r.fallback,pe=q3(e,t,Z,F,u),ze=t.child;return ze.memoizedState=Em(u),t.memoizedState=Cm,pe}else{if(B4(),(t.mode&Kt)===yt)return Rf(e,t,u,null);if(Vp(a)){var d,h,g;{var x=t4(a);d=x.digest,h=x.message,g=x.stack}var L;h?L=new Error(h):L=new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");var D=pm(L,d,g);return Rf(e,t,u,D)}var Y=ja(u,e.childLanes);if(go||Y){var X=Bf();if(X!==null){var J=sC(X,u);if(J!==Dr&&J!==s.retryLane){s.retryLane=J;var je=Wn;ma(e,J),Er(X,e,J,je)}}qm();var pt=pm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));return Rf(e,t,u,pt)}else if(o0(a)){t.flags|=dn,t.child=e.child;var tt=wR.bind(null,e);return n4(a,tt),null}else{F4(t,a,s.treeContext);var Zt=r.children,Qt=Rm(t,Zt);return Qt.flags|=Zo,Qt}}}function zx(e,t,n){e.lanes=Wt(e.lanes,t);var r=e.alternate;r!==null&&(r.lanes=Wt(r.lanes,t)),g_(e.return,t,n)}function J3(e,t,n){for(var r=t;r!==null;){if(r.tag===de){var a=r.memoizedState;a!==null&&zx(r,n,e)}else if(r.tag===Pe)zx(r,n,e);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function Z3(e){for(var t=e,n=null;t!==null;){var r=t.alternate;r!==null&&af(r)===null&&(n=t),t=t.sibling}return n}function eE(e){if(e!==void 0&&e!=="forwards"&&e!=="backwards"&&e!=="together"&&!bm[e])if(bm[e]=!0,typeof e=="string")switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{f('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break}case"forward":case"backward":{f('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break}default:f('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e);break}else f('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}function tE(e,t){e!==void 0&&!Ef[e]&&(e!=="collapsed"&&e!=="hidden"?(Ef[e]=!0,f('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):t!=="forwards"&&t!=="backwards"&&(Ef[e]=!0,f('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}function Bx(e,t){{var n=Nt(e),r=!n&&typeof Mn(e)=="function";if(n||r){var a=n?"array":"iterable";return f("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",a,t,a),!1}}return!0}function nE(e,t){if((t==="forwards"||t==="backwards")&&e!==void 0&&e!==null&&e!==!1)if(Nt(e)){for(var n=0;n<e.length;n++)if(!Bx(e[n],n))return}else{var r=Mn(e);if(typeof r=="function"){var a=r.call(e);if(a)for(var s=a.next(),u=0;!s.done;s=a.next()){if(!Bx(s.value,u))return;u++}}else f('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}function Tm(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function Ix(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail,u=r.children;eE(a),tE(s,a),nE(u,a),sa(e,t,u,n);var d=_o.current,h=R_(d,ec);if(h)d=j_(d,ec),t.flags|=dn;else{var g=e!==null&&(e.flags&dn)!==bt;g&&J3(t,t.child,n),d=Rl(d)}if(Ui(t,d),(t.mode&Kt)===yt)t.memoizedState=null;else switch(a){case"forwards":{var x=Z3(t.child),L;x===null?(L=t.child,t.child=null):(L=x.sibling,x.sibling=null),Tm(t,!1,L,x,s);break}case"backwards":{var D=null,Y=t.child;for(t.child=null;Y!==null;){var X=Y.alternate;if(X!==null&&af(X)===null){t.child=Y;break}var J=Y.sibling;Y.sibling=D,D=Y,Y=J}Tm(t,!0,D,null,s);break}case"together":{Tm(t,!1,null,null,void 0);break}default:t.memoizedState=null}return t.child}function rE(e,t,n){k_(t,t.stateNode.containerInfo);var r=t.pendingProps;return e===null?t.child=Sl(t,null,r,n):sa(e,t,r,n),t.child}var Ux=!1;function aE(e,t,n){var r=t.type,a=r._context,s=t.pendingProps,u=t.memoizedProps,d=s.value;{"value"in s||Ux||(Ux=!0,f("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var h=t.type.propTypes;h&&fo(h,s,"prop","Context.Provider")}if(L0(t,a,d),u!==null){var g=u.value;if(Da(g,d)){if(u.children===s.children&&!Ad())return ci(e,t,n)}else e3(t,a,n)}var x=s.children;return sa(e,t,x,n),t.child}var Fx=!1;function oE(e,t,n){var r=t.type;r._context===void 0?r!==r.Consumer&&(Fx||(Fx=!0,f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var a=t.pendingProps,s=a.children;typeof s!="function"&&f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Cl(t,n);var u=_r(r);uu(t);var d;return uc.current=t,ea(!0),d=s(u),ea(!1),al(),t.flags|=el,sa(e,t,d,n),t.child}function fc(){go=!0}function jf(e,t){(t.mode&Kt)===yt&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=pr)}function ci(e,t,n){return e!==null&&(t.dependencies=e.dependencies),mx(),kc(t.lanes),ja(n,t.childLanes)?(J4(e,t),t.child):null}function iE(e,t,n){{var r=t.return;if(r===null)throw new Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var a=r.child;if(a===null)throw new Error("Expected parent to have a child.");for(;a.sibling!==t;)if(a=a.sibling,a===null)throw new Error("Expected to find the previous sibling.");a.sibling=n}var s=r.deletions;return s===null?(r.deletions=[e],r.flags|=ss):s.push(e),n.flags|=pr,n}}function Mm(e,t){var n=e.lanes;return!!ja(n,t)}function sE(e,t,n){switch(t.tag){case M:Ox(t),t.stateNode,wl();break;case H:U0(t);break;case P:{var r=t.type;zo(r)&&zd(t);break}case A:k_(t,t.stateNode.containerInfo);break;case Le:{var a=t.memoizedProps.value,s=t.type._context;L0(t,s,a);break}case G:{var u=ja(n,t.childLanes);u&&(t.flags|=cn);{var d=t.stateNode;d.effectDuration=0,d.passiveEffectDuration=0}}break;case de:{var h=t.memoizedState;if(h!==null){if(h.dehydrated!==null)return Ui(t,Rl(_o.current)),t.flags|=dn,null;var g=t.child,x=g.childLanes;if(ja(n,x))return Ax(e,t,n);Ui(t,Rl(_o.current));var L=ci(e,t,n);return L!==null?L.sibling:null}else Ui(t,Rl(_o.current));break}case Pe:{var D=(e.flags&dn)!==bt,Y=ja(n,t.childLanes);if(D){if(Y)return Ix(e,t,n);t.flags|=dn}var X=t.memoizedState;if(X!==null&&(X.rendering=null,X.tail=null,X.lastEffect=null),Ui(t,_o.current),Y)break;return null}case Oe:case Qe:return t.lanes=ce,Mx(e,t,n)}return ci(e,t,n)}function Hx(e,t,n){if(t._debugNeedsRemount&&e!==null)return iE(e,t,iy(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(e!==null){var r=e.memoizedProps,a=t.pendingProps;if(r!==a||Ad()||t.type!==e.type)go=!0;else{var s=Mm(e,n);if(!s&&(t.flags&dn)===bt)return go=!1,sE(e,t,n);(e.flags&Ah)!==bt?go=!0:go=!1}}else if(go=!1,$r()&&L4(t)){var u=t.index,d=O4();m0(t,d,u)}switch(t.lanes=ce,t.tag){case O:return H3(e,t,t.type,n);case mt:{var h=t.elementType;return U3(e,t,h,n)}case E:{var g=t.type,x=t.pendingProps,L=t.elementType===g?x:yo(g,x);return wm(e,t,g,L,n)}case P:{var D=t.type,Y=t.pendingProps,X=t.elementType===D?Y:yo(D,Y);return Lx(e,t,D,X,n)}case M:return z3(e,t,n);case H:return B3(e,t,n);case I:return I3(e,t);case de:return Ax(e,t,n);case A:return rE(e,t,n);case Ie:{var J=t.type,je=t.pendingProps,pt=t.elementType===J?je:yo(J,je);return Rx(e,t,J,pt,n)}case le:return N3(e,t,n);case ke:return A3(e,t,n);case G:return $3(e,t,n);case Le:return aE(e,t,n);case he:return oE(e,t,n);case Ae:{var tt=t.type,Zt=t.pendingProps,Qt=yo(tt,Zt);if(t.type!==t.elementType){var U=tt.propTypes;U&&fo(U,Qt,"prop",rn(tt))}return Qt=yo(tt.type,Qt),jx(e,t,tt,Qt,n)}case ae:return Tx(e,t,t.type,t.pendingProps,n);case ot:{var Z=t.type,F=t.pendingProps,pe=t.elementType===Z?F:yo(Z,F);return F3(e,t,Z,pe,n)}case Pe:return Ix(e,t,n);case ct:break;case Oe:return Mx(e,t,n)}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Ol(e){e.flags|=cn}function Px(e){e.flags|=ls,e.flags|=$h}var Wx,Dm,Yx,Vx;Wx=function(e,t,n,r){for(var a=t.child;a!==null;){if(a.tag===H||a.tag===I)T6(e,a.stateNode);else if(a.tag!==A){if(a.child!==null){a.child.return=a,a=a.child;continue}}if(a===t)return;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dm=function(e,t){},Yx=function(e,t,n,r,a){var s=e.memoizedProps;if(s!==r){var u=t.stateNode,d=C_(),h=D6(u,n,s,r,a,d);t.updateQueue=h,h&&Ol(t)}},Vx=function(e,t,n,r){n!==r&&Ol(t)};function hc(e,t){if(!$r())switch(e.tailMode){case"hidden":{for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break}case"collapsed":{for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?!t&&e.tail!==null?e.tail.sibling=null:e.tail=null:s.sibling=null;break}}}function Br(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=ce,r=bt;if(t){if((e.mode&gn)!==yt){for(var h=e.selfBaseDuration,g=e.child;g!==null;)n=Wt(n,Wt(g.lanes,g.childLanes)),r|=g.subtreeFlags&ei,r|=g.flags&ei,h+=g.treeBaseDuration,g=g.sibling;e.treeBaseDuration=h}else for(var x=e.child;x!==null;)n=Wt(n,Wt(x.lanes,x.childLanes)),r|=x.subtreeFlags&ei,r|=x.flags&ei,x.return=e,x=x.sibling;e.subtreeFlags|=r}else{if((e.mode&gn)!==yt){for(var a=e.actualDuration,s=e.selfBaseDuration,u=e.child;u!==null;)n=Wt(n,Wt(u.lanes,u.childLanes)),r|=u.subtreeFlags,r|=u.flags,a+=u.actualDuration,s+=u.treeBaseDuration,u=u.sibling;e.actualDuration=a,e.treeBaseDuration=s}else for(var d=e.child;d!==null;)n=Wt(n,Wt(d.lanes,d.childLanes)),r|=d.subtreeFlags,r|=d.flags,d.return=e,d=d.sibling;e.subtreeFlags|=r}return e.childLanes=n,t}function lE(e,t,n){if(V4()&&(t.mode&Kt)!==yt&&(t.flags&dn)===bt)return S0(t),wl(),t.flags|=Jo|Zc|ia,!1;var r=Hd(t);if(n!==null&&n.dehydrated!==null)if(e===null){if(!r)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(W4(t),Br(t),(t.mode&gn)!==yt){var a=n!==null;if(a){var s=t.child;s!==null&&(t.treeBaseDuration-=s.treeBaseDuration)}}return!1}else{if(wl(),(t.flags&dn)===bt&&(t.memoizedState=null),t.flags|=cn,Br(t),(t.mode&gn)!==yt){var u=n!==null;if(u){var d=t.child;d!==null&&(t.treeBaseDuration-=d.treeBaseDuration)}}return!1}else return k0(),!0}function Xx(e,t,n){var r=t.pendingProps;switch(r_(t),t.tag){case O:case mt:case ae:case E:case Ie:case le:case ke:case G:case he:case Ae:return Br(t),null;case P:{var a=t.type;return zo(a)&&$d(t),Br(t),null}case M:{var s=t.stateNode;if(El(t),Zp(t),M_(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),e===null||e.child===null){var u=Hd(t);if(u)Ol(t);else if(e!==null){var d=e.memoizedState;(!d.isDehydrated||(t.flags&Jo)!==bt)&&(t.flags|=tl,k0())}}return Dm(e,t),Br(t),null}case H:{E_(t);var h=I0(),g=t.type;if(e!==null&&t.stateNode!=null)Yx(e,t,g,r,h),e.ref!==t.ref&&Px(t);else{if(!r){if(t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Br(t),null}var x=C_(),L=Hd(t);if(L)H4(t,h,x)&&Ol(t);else{var D=j6(g,r,h,x,t);Wx(D,t,!1,!1),t.stateNode=D,M6(D,g,r,h)&&Ol(t)}t.ref!==null&&Px(t)}return Br(t),null}case I:{var Y=r;if(e&&t.stateNode!=null){var X=e.memoizedProps;Vx(e,t,X,Y)}else{if(typeof Y!="string"&&t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var J=I0(),je=C_(),pt=Hd(t);pt?P4(t)&&Ol(t):t.stateNode=L6(Y,J,je,t)}return Br(t),null}case de:{jl(t);var tt=t.memoizedState;if(e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){var Zt=lE(e,t,tt);if(!Zt)return t.flags&ia?t:null}if((t.flags&dn)!==bt)return t.lanes=n,(t.mode&gn)!==yt&&tm(t),t;var Qt=tt!==null,U=e!==null&&e.memoizedState!==null;if(Qt!==U&&Qt){var Z=t.child;if(Z.flags|=us,(t.mode&Kt)!==yt){var F=e===null&&(t.memoizedProps.unstable_avoidThisFallback!==!0||!0);F||R_(_o.current,H0)?uR():qm()}}var pe=t.updateQueue;if(pe!==null&&(t.flags|=cn),Br(t),(t.mode&gn)!==yt&&Qt){var ze=t.child;ze!==null&&(t.treeBaseDuration-=ze.treeBaseDuration)}return null}case A:return El(t),Dm(e,t),e===null&&C4(t.stateNode.containerInfo),Br(t),null;case Le:var De=t.type._context;return y_(De,t),Br(t),null;case ot:{var St=t.type;return zo(St)&&$d(t),Br(t),null}case Pe:{jl(t);var Mt=t.memoizedState;if(Mt===null)return Br(t),null;var xn=(t.flags&dn)!==bt,on=Mt.rendering;if(on===null)if(xn)hc(Mt,!1);else{var dr=dR()&&(e===null||(e.flags&dn)===bt);if(!dr)for(var sn=t.child;sn!==null;){var ir=af(sn);if(ir!==null){xn=!0,t.flags|=dn,hc(Mt,!1);var Gr=ir.updateQueue;return Gr!==null&&(t.updateQueue=Gr,t.flags|=cn),t.subtreeFlags=bt,Z4(t,n),Ui(t,j_(_o.current,ec)),t.child}sn=sn.sibling}Mt.tail!==null&&Tr()>p1()&&(t.flags|=dn,xn=!0,hc(Mt,!1),t.lanes=Vg)}else{if(!xn){var Pr=af(on);if(Pr!==null){t.flags|=dn,xn=!0;var Na=Pr.updateQueue;if(Na!==null&&(t.updateQueue=Na,t.flags|=cn),hc(Mt,!0),Mt.tail===null&&Mt.tailMode==="hidden"&&!on.alternate&&!$r())return Br(t),null}else Tr()*2-Mt.renderingStartTime>p1()&&n!==Ra&&(t.flags|=dn,xn=!0,hc(Mt,!1),t.lanes=Vg)}if(Mt.isBackwards)on.sibling=t.child,t.child=on;else{var ca=Mt.last;ca!==null?ca.sibling=on:t.child=on,Mt.last=on}}if(Mt.tail!==null){var da=Mt.tail;Mt.rendering=da,Mt.tail=da.sibling,Mt.renderingStartTime=Tr(),da.sibling=null;var Kr=_o.current;return xn?Kr=j_(Kr,ec):Kr=Rl(Kr),Ui(t,Kr),da}return Br(t),null}case ct:break;case Oe:case Qe:{Qm(t);var _i=t.memoizedState,Fl=_i!==null;if(e!==null){var Tc=e.memoizedState,Yo=Tc!==null;Yo!==Fl&&!Tt&&(t.flags|=us)}return!Fl||(t.mode&Kt)===yt?Br(t):ja(Wo,Ra)&&(Br(t),t.subtreeFlags&(pr|cn)&&(t.flags|=us)),null}case Ge:return null;case Ce:return null}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function uE(e,t,n){switch(r_(t),t.tag){case P:{var r=t.type;zo(r)&&$d(t);var a=t.flags;return a&ia?(t.flags=a&~ia|dn,(t.mode&gn)!==yt&&tm(t),t):null}case M:{t.stateNode,El(t),Zp(t),M_();var s=t.flags;return(s&ia)!==bt&&(s&dn)===bt?(t.flags=s&~ia|dn,t):null}case H:return E_(t),null;case de:{jl(t);var u=t.memoizedState;if(u!==null&&u.dehydrated!==null){if(t.alternate===null)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");wl()}var d=t.flags;return d&ia?(t.flags=d&~ia|dn,(t.mode&gn)!==yt&&tm(t),t):null}case Pe:return jl(t),null;case A:return El(t),null;case Le:var h=t.type._context;return y_(h,t),null;case Oe:case Qe:return Qm(t),null;case Ge:return null;default:return null}}function Qx(e,t,n){switch(r_(t),t.tag){case P:{var r=t.type.childContextTypes;r!=null&&$d(t);break}case M:{t.stateNode,El(t),Zp(t),M_();break}case H:{E_(t);break}case A:El(t);break;case de:jl(t);break;case Pe:jl(t);break;case Le:var a=t.type._context;y_(a,t);break;case Oe:case Qe:Qm(t);break}}var qx=null;qx=new Set;var Tf=!1,Ir=!1,cE=typeof WeakSet=="function"?WeakSet:Set,Xe=null,Nl=null,Al=null;function dE(e){Lh(null,function(){throw e}),Oh()}var fE=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,e.mode&gn)try{Ho(),t.componentWillUnmount()}finally{Fo(e)}else t.componentWillUnmount()};function Gx(e,t){try{Pi(xr,e)}catch(n){In(e,t,n)}}function Lm(e,t,n){try{fE(e,n)}catch(r){In(e,t,r)}}function hE(e,t,n){try{n.componentDidMount()}catch(r){In(e,t,r)}}function Kx(e,t){try{Zx(e)}catch(n){In(e,t,n)}}function $l(e,t){var n=e.ref;if(n!==null)if(typeof n=="function"){var r;try{if(Xn&&tr&&e.mode&gn)try{Ho(),r=n(null)}finally{Fo(e)}else r=n(null)}catch(a){In(e,t,a)}typeof r=="function"&&f("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",dt(e))}else n.current=null}function Mf(e,t,n){try{n()}catch(r){In(e,t,r)}}var Jx=!1;function pE(e,t){E6(e.containerInfo),Xe=t,_E();var n=Jx;return Jx=!1,n}function _E(){for(;Xe!==null;){var e=Xe,t=e.child;(e.subtreeFlags&Ih)!==bt&&t!==null?(t.return=e,Xe=t):mE()}}function mE(){for(;Xe!==null;){var e=Xe;It(e);try{yE(e)}catch(n){In(e,e.return,n)}Hn();var t=e.sibling;if(t!==null){t.return=e.return,Xe=t;return}Xe=e.return}}function yE(e){var t=e.alternate,n=e.flags;if((n&tl)!==bt){switch(It(e),e.tag){case E:case Ie:case ae:break;case P:{if(t!==null){var r=t.memoizedProps,a=t.memoizedState,s=e.stateNode;e.type===e.elementType&&!Ts&&(s.props!==e.memoizedProps&&f("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",dt(e)||"instance"),s.state!==e.memoizedState&&f("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",dt(e)||"instance"));var u=s.getSnapshotBeforeUpdate(e.elementType===e.type?r:yo(e.type,r),a);{var d=qx;u===void 0&&!d.has(e.type)&&(d.add(e.type),f("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",dt(e)))}s.__reactInternalSnapshotBeforeUpdate=u}break}case M:{{var h=e.stateNode;K6(h.containerInfo)}break}case H:case I:case A:case ot:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}Hn()}}function vo(e,t,n){var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var s=a.next,u=s;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&((e&zr)!==ya?Lk(t):(e&xr)!==ya&&Fg(t),(e&Bo)!==ya&&Ec(!0),Mf(t,n,d),(e&Bo)!==ya&&Ec(!1),(e&zr)!==ya?Ok():(e&xr)!==ya&&Hg())}u=u.next}while(u!==s)}}function Pi(e,t){var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var a=r.next,s=a;do{if((s.tag&e)===e){(e&zr)!==ya?Mk(t):(e&xr)!==ya&&Nk(t);var u=s.create;(e&Bo)!==ya&&Ec(!0),s.destroy=u(),(e&Bo)!==ya&&Ec(!1),(e&zr)!==ya?Dk():(e&xr)!==ya&&Ak();{var d=s.destroy;if(d!==void 0&&typeof d!="function"){var h=void 0;(s.tag&xr)!==bt?h="useLayoutEffect":(s.tag&Bo)!==bt?h="useInsertionEffect":h="useEffect";var g=void 0;d===null?g=" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof d.then=="function"?g=`

It looks like you wrote `+h+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+h+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`:g=" You returned: "+d,f("%s must not return anything besides a function, which is used for clean-up.%s",h,g)}}}s=s.next}while(s!==a)}}function gE(e,t){if((t.flags&cn)!==bt)switch(t.tag){case G:{var n=t.stateNode.passiveEffectDuration,r=t.memoizedProps,a=r.id,s=r.onPostCommit,u=px(),d=t.alternate===null?"mount":"update";hx()&&(d="nested-update"),typeof s=="function"&&s(a,d,n,u);var h=t.return;e:for(;h!==null;){switch(h.tag){case M:var g=h.stateNode;g.passiveEffectDuration+=n;break e;case G:var x=h.stateNode;x.passiveEffectDuration+=n;break e}h=h.return}break}}}function vE(e,t,n,r){if((n.flags&lu)!==bt)switch(n.tag){case E:case Ie:case ae:{if(!Ir)if(n.mode&gn)try{Ho(),Pi(xr|vr,n)}finally{Fo(n)}else Pi(xr|vr,n);break}case P:{var a=n.stateNode;if(n.flags&cn&&!Ir)if(t===null)if(n.type===n.elementType&&!Ts&&(a.props!==n.memoizedProps&&f("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",dt(n)||"instance"),a.state!==n.memoizedState&&f("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",dt(n)||"instance")),n.mode&gn)try{Ho(),a.componentDidMount()}finally{Fo(n)}else a.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:yo(n.type,t.memoizedProps),u=t.memoizedState;if(n.type===n.elementType&&!Ts&&(a.props!==n.memoizedProps&&f("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",dt(n)||"instance"),a.state!==n.memoizedState&&f("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",dt(n)||"instance")),n.mode&gn)try{Ho(),a.componentDidUpdate(s,u,a.__reactInternalSnapshotBeforeUpdate)}finally{Fo(n)}else a.componentDidUpdate(s,u,a.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&(n.type===n.elementType&&!Ts&&(a.props!==n.memoizedProps&&f("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",dt(n)||"instance"),a.state!==n.memoizedState&&f("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",dt(n)||"instance")),B0(n,d,a));break}case M:{var h=n.updateQueue;if(h!==null){var g=null;if(n.child!==null)switch(n.child.tag){case H:g=n.child.stateNode;break;case P:g=n.child.stateNode;break}B0(n,h,g)}break}case H:{var x=n.stateNode;if(t===null&&n.flags&cn){var L=n.type,D=n.memoizedProps;z6(x,L,D)}break}case I:break;case A:break;case G:{{var Y=n.memoizedProps,X=Y.onCommit,J=Y.onRender,je=n.stateNode.effectDuration,pt=px(),tt=t===null?"mount":"update";hx()&&(tt="nested-update"),typeof J=="function"&&J(n.memoizedProps.id,tt,n.actualDuration,n.treeBaseDuration,n.actualStartTime,pt);{typeof X=="function"&&X(n.memoizedProps.id,tt,je,pt),mR(n);var Zt=n.return;e:for(;Zt!==null;){switch(Zt.tag){case M:var Qt=Zt.stateNode;Qt.effectDuration+=je;break e;case G:var U=Zt.stateNode;U.effectDuration+=je;break e}Zt=Zt.return}}}break}case de:{RE(e,n);break}case Pe:case ot:case ct:case Oe:case Qe:case Ce:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}Ir||n.flags&ls&&Zx(n)}function xE(e){switch(e.tag){case E:case Ie:case ae:{if(e.mode&gn)try{Ho(),Gx(e,e.return)}finally{Fo(e)}else Gx(e,e.return);break}case P:{var t=e.stateNode;typeof t.componentDidMount=="function"&&hE(e,e.return,t),Kx(e,e.return);break}case H:{Kx(e,e.return);break}}}function bE(e,t){for(var n=null,r=e;;){if(r.tag===H){if(n===null){n=r;try{var a=r.stateNode;t?X6(a):q6(r.stateNode,r.memoizedProps)}catch(u){In(e,e.return,u)}}}else if(r.tag===I){if(n===null)try{var s=r.stateNode;t?Q6(s):G6(s,r.memoizedProps)}catch(u){In(e,e.return,u)}}else if(!((r.tag===Oe||r.tag===Qe)&&r.memoizedState!==null&&r!==e)){if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}}function Zx(e){var t=e.ref;if(t!==null){var n=e.stateNode,r;switch(e.tag){case H:r=n;break;default:r=n}if(typeof t=="function"){var a;if(e.mode&gn)try{Ho(),a=t(r)}finally{Fo(e)}else a=t(r);typeof a=="function"&&f("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",dt(e))}else t.hasOwnProperty("current")||f("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",dt(e)),t.current=r}}function wE(e){var t=e.alternate;t!==null&&(t.return=null),e.return=null}function e1(e){var t=e.alternate;t!==null&&(e.alternate=null,e1(t));{if(e.child=null,e.deletions=null,e.sibling=null,e.tag===H){var n=e.stateNode;n!==null&&j4(n)}e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function SE(e){for(var t=e.return;t!==null;){if(t1(t))return t;t=t.return}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function t1(e){return e.tag===H||e.tag===M||e.tag===A}function n1(e){var t=e;e:for(;;){for(;t.sibling===null;){if(t.return===null||t1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==H&&t.tag!==I&&t.tag!==nt;){if(t.flags&pr||t.child===null||t.tag===A)continue e;t.child.return=t,t=t.child}if(!(t.flags&pr))return t.stateNode}}function kE(e){var t=SE(e);switch(t.tag){case H:{var n=t.stateNode;t.flags&su&&(a0(n),t.flags&=~su);var r=n1(e);Nm(e,r,n);break}case M:case A:{var a=t.stateNode.containerInfo,s=n1(e);Om(e,s,a);break}default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Om(e,t,n){var r=e.tag,a=r===H||r===I;if(a){var s=e.stateNode;t?P6(n,s,t):F6(n,s)}else if(r!==A){var u=e.child;if(u!==null){Om(u,t,n);for(var d=u.sibling;d!==null;)Om(d,t,n),d=d.sibling}}}function Nm(e,t,n){var r=e.tag,a=r===H||r===I;if(a){var s=e.stateNode;t?H6(n,s,t):U6(n,s)}else if(r!==A){var u=e.child;if(u!==null){Nm(u,t,n);for(var d=u.sibling;d!==null;)Nm(d,t,n),d=d.sibling}}}var Ur=null,xo=!1;function CE(e,t,n){{var r=t;e:for(;r!==null;){switch(r.tag){case H:{Ur=r.stateNode,xo=!1;break e}case M:{Ur=r.stateNode.containerInfo,xo=!0;break e}case A:{Ur=r.stateNode.containerInfo,xo=!0;break e}}r=r.return}if(Ur===null)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");r1(e,t,n),Ur=null,xo=!1}wE(n)}function Wi(e,t,n){for(var r=n.child;r!==null;)r1(e,t,r),r=r.sibling}function r1(e,t,n){switch(Ek(n),n.tag){case H:Ir||$l(n,t);case I:{{var r=Ur,a=xo;Ur=null,Wi(e,t,n),Ur=r,xo=a,Ur!==null&&(xo?Y6(Ur,n.stateNode):W6(Ur,n.stateNode))}return}case nt:{Ur!==null&&(xo?V6(Ur,n.stateNode):Yp(Ur,n.stateNode));return}case A:{{var s=Ur,u=xo;Ur=n.stateNode.containerInfo,xo=!0,Wi(e,t,n),Ur=s,xo=u}return}case E:case Ie:case Ae:case ae:{if(!Ir){var d=n.updateQueue;if(d!==null){var h=d.lastEffect;if(h!==null){var g=h.next,x=g;do{var L=x,D=L.destroy,Y=L.tag;D!==void 0&&((Y&Bo)!==ya?Mf(n,t,D):(Y&xr)!==ya&&(Fg(n),n.mode&gn?(Ho(),Mf(n,t,D),Fo(n)):Mf(n,t,D),Hg())),x=x.next}while(x!==g)}}}Wi(e,t,n);return}case P:{if(!Ir){$l(n,t);var X=n.stateNode;typeof X.componentWillUnmount=="function"&&Lm(n,t,X)}Wi(e,t,n);return}case ct:{Wi(e,t,n);return}case Oe:{if(n.mode&Kt){var J=Ir;Ir=J||n.memoizedState!==null,Wi(e,t,n),Ir=J}else Wi(e,t,n);break}default:{Wi(e,t,n);return}}}function EE(e){e.memoizedState}function RE(e,t){var n=t.memoizedState;if(n===null){var r=t.alternate;if(r!==null){var a=r.memoizedState;if(a!==null){var s=a.dehydrated;s!==null&&d4(s)}}}}function a1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cE),t.forEach(function(r){var a=SR.bind(null,e,r);if(!n.has(r)){if(n.add(r),uo)if(Nl!==null&&Al!==null)Cc(Al,Nl);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");r.then(a,a)}})}}function jE(e,t,n){Nl=n,Al=e,It(t),o1(t,e),It(t),Nl=null,Al=null}function bo(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var s=r[a];try{CE(e,t,s)}catch(h){In(s,t,h)}}var u=xi();if(t.subtreeFlags&Uh)for(var d=t.child;d!==null;)It(d),o1(d,e),d=d.sibling;It(u)}function o1(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case E:case Ie:case Ae:case ae:{if(bo(t,e),Po(e),a&cn){try{vo(Bo|vr,e,e.return),Pi(Bo|vr,e)}catch(St){In(e,e.return,St)}if(e.mode&gn){try{Ho(),vo(xr|vr,e,e.return)}catch(St){In(e,e.return,St)}Fo(e)}else try{vo(xr|vr,e,e.return)}catch(St){In(e,e.return,St)}}return}case P:{bo(t,e),Po(e),a&ls&&r!==null&&$l(r,r.return);return}case H:{bo(t,e),Po(e),a&ls&&r!==null&&$l(r,r.return);{if(e.flags&su){var s=e.stateNode;try{a0(s)}catch(St){In(e,e.return,St)}}if(a&cn){var u=e.stateNode;if(u!=null){var d=e.memoizedProps,h=r!==null?r.memoizedProps:d,g=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{B6(u,x,g,h,d,e)}catch(St){In(e,e.return,St)}}}}return}case I:{if(bo(t,e),Po(e),a&cn){if(e.stateNode===null)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var L=e.stateNode,D=e.memoizedProps,Y=r!==null?r.memoizedProps:D;try{I6(L,Y,D)}catch(St){In(e,e.return,St)}}return}case M:{if(bo(t,e),Po(e),a&cn&&r!==null){var X=r.memoizedState;if(X.isDehydrated)try{c4(t.containerInfo)}catch(St){In(e,e.return,St)}}return}case A:{bo(t,e),Po(e);return}case de:{bo(t,e),Po(e);var J=e.child;if(J.flags&us){var je=J.stateNode,pt=J.memoizedState,tt=pt!==null;if(je.isHidden=tt,tt){var Zt=J.alternate!==null&&J.alternate.memoizedState!==null;Zt||lR()}}if(a&cn){try{EE(e)}catch(St){In(e,e.return,St)}a1(e)}return}case Oe:{var Qt=r!==null&&r.memoizedState!==null;if(e.mode&Kt){var U=Ir;Ir=U||Qt,bo(t,e),Ir=U}else bo(t,e);if(Po(e),a&us){var Z=e.stateNode,F=e.memoizedState,pe=F!==null,ze=e;if(Z.isHidden=pe,pe&&!Qt&&(ze.mode&Kt)!==yt){Xe=ze;for(var De=ze.child;De!==null;)Xe=De,ME(De),De=De.sibling}bE(ze,pe)}return}case Pe:{bo(t,e),Po(e),a&cn&&a1(e);return}case ct:return;default:{bo(t,e),Po(e);return}}}function Po(e){var t=e.flags;if(t&pr){try{kE(e)}catch(n){In(e,e.return,n)}e.flags&=~pr}t&Zo&&(e.flags&=~Zo)}function TE(e,t,n){Nl=n,Al=t,Xe=e,i1(e,t,n),Nl=null,Al=null}function i1(e,t,n){for(var r=(e.mode&Kt)!==yt;Xe!==null;){var a=Xe,s=a.child;if(a.tag===Oe&&r){var u=a.memoizedState!==null,d=u||Tf;if(d){Am(e,t,n);continue}else{var h=a.alternate,g=h!==null&&h.memoizedState!==null,x=g||Ir,L=Tf,D=Ir;Tf=d,Ir=x,Ir&&!D&&(Xe=a,DE(a));for(var Y=s;Y!==null;)Xe=Y,i1(Y,t,n),Y=Y.sibling;Xe=a,Tf=L,Ir=D,Am(e,t,n);continue}}(a.subtreeFlags&lu)!==bt&&s!==null?(s.return=a,Xe=s):Am(e,t,n)}}function Am(e,t,n){for(;Xe!==null;){var r=Xe;if((r.flags&lu)!==bt){var a=r.alternate;It(r);try{vE(t,a,r,n)}catch(u){In(r,r.return,u)}Hn()}if(r===e){Xe=null;return}var s=r.sibling;if(s!==null){s.return=r.return,Xe=s;return}Xe=r.return}}function ME(e){for(;Xe!==null;){var t=Xe,n=t.child;switch(t.tag){case E:case Ie:case Ae:case ae:{if(t.mode&gn)try{Ho(),vo(xr,t,t.return)}finally{Fo(t)}else vo(xr,t,t.return);break}case P:{$l(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Lm(t,t.return,r);break}case H:{$l(t,t.return);break}case Oe:{var a=t.memoizedState!==null;if(a){s1(e);continue}break}}n!==null?(n.return=t,Xe=n):s1(e)}}function s1(e){for(;Xe!==null;){var t=Xe;if(t===e){Xe=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Xe=n;return}Xe=t.return}}function DE(e){for(;Xe!==null;){var t=Xe,n=t.child;if(t.tag===Oe){var r=t.memoizedState!==null;if(r){l1(e);continue}}n!==null?(n.return=t,Xe=n):l1(e)}}function l1(e){for(;Xe!==null;){var t=Xe;It(t);try{xE(t)}catch(r){In(t,t.return,r)}if(Hn(),t===e){Xe=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Xe=n;return}Xe=t.return}}function LE(e,t,n,r){Xe=t,OE(t,e,n,r)}function OE(e,t,n,r){for(;Xe!==null;){var a=Xe,s=a.child;(a.subtreeFlags&nl)!==bt&&s!==null?(s.return=a,Xe=s):NE(e,t,n,r)}}function NE(e,t,n,r){for(;Xe!==null;){var a=Xe;if((a.flags&Ci)!==bt){It(a);try{AE(t,a,n,r)}catch(u){In(a,a.return,u)}Hn()}if(a===e){Xe=null;return}var s=a.sibling;if(s!==null){s.return=a.return,Xe=s;return}Xe=a.return}}function AE(e,t,n,r){switch(t.tag){case E:case Ie:case ae:{if(t.mode&gn){em();try{Pi(zr|vr,t)}finally{Z_(t)}}else Pi(zr|vr,t);break}}}function $E(e){Xe=e,zE()}function zE(){for(;Xe!==null;){var e=Xe,t=e.child;if((Xe.flags&ss)!==bt){var n=e.deletions;if(n!==null){for(var r=0;r<n.length;r++){var a=n[r];Xe=a,UE(a,e)}{var s=e.alternate;if(s!==null){var u=s.child;if(u!==null){s.child=null;do{var d=u.sibling;u.sibling=null,u=d}while(u!==null)}}}Xe=e}}(e.subtreeFlags&nl)!==bt&&t!==null?(t.return=e,Xe=t):BE()}}function BE(){for(;Xe!==null;){var e=Xe;(e.flags&Ci)!==bt&&(It(e),IE(e),Hn());var t=e.sibling;if(t!==null){t.return=e.return,Xe=t;return}Xe=e.return}}function IE(e){switch(e.tag){case E:case Ie:case ae:{e.mode&gn?(em(),vo(zr|vr,e,e.return),Z_(e)):vo(zr|vr,e,e.return);break}}}function UE(e,t){for(;Xe!==null;){var n=Xe;It(n),HE(n,t),Hn();var r=n.child;r!==null?(r.return=n,Xe=r):FE(e)}}function FE(e){for(;Xe!==null;){var t=Xe,n=t.sibling,r=t.return;if(e1(t),t===e){Xe=null;return}if(n!==null){n.return=r,Xe=n;return}Xe=r}}function HE(e,t){switch(e.tag){case E:case Ie:case ae:{e.mode&gn?(em(),vo(zr,e,t),Z_(e)):vo(zr,e,t);break}}}function PE(e){switch(e.tag){case E:case Ie:case ae:{try{Pi(xr|vr,e)}catch(n){In(e,e.return,n)}break}case P:{var t=e.stateNode;try{t.componentDidMount()}catch(n){In(e,e.return,n)}break}}}function WE(e){switch(e.tag){case E:case Ie:case ae:{try{Pi(zr|vr,e)}catch(t){In(e,e.return,t)}break}}}function YE(e){switch(e.tag){case E:case Ie:case ae:{try{vo(xr|vr,e,e.return)}catch(n){In(e,e.return,n)}break}case P:{var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Lm(e,e.return,t);break}}}function VE(e){switch(e.tag){case E:case Ie:case ae:try{vo(zr|vr,e,e.return)}catch(t){In(e,e.return,t)}}}if(typeof Symbol=="function"&&Symbol.for){var pc=Symbol.for;pc("selector.component"),pc("selector.has_pseudo_class"),pc("selector.role"),pc("selector.test_id"),pc("selector.text")}var XE=[];function QE(){XE.forEach(function(e){return e()})}var qE=c.ReactCurrentActQueue;function GE(e){{var t=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0,n=typeof jest<"u";return n&&t!==!1}}function u1(){{var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return!e&&qE.current!==null&&f("The current testing environment is not configured to support act(...)"),e}}var KE=Math.ceil,$m=c.ReactCurrentDispatcher,zm=c.ReactCurrentOwner,Fr=c.ReactCurrentBatchConfig,wo=c.ReactCurrentActQueue,Sr=0,c1=1,Hr=2,Ka=4,di=0,_c=1,Ms=2,Df=3,mc=4,d1=5,Bm=6,Jt=Sr,la=null,er=null,kr=ce,Wo=ce,Im=Ni(ce),Cr=di,yc=null,Lf=ce,gc=ce,Of=ce,vc=null,ga=null,Um=0,f1=500,h1=1/0,JE=500,fi=null;function xc(){h1=Tr()+JE}function p1(){return h1}var Nf=!1,Fm=null,zl=null,Ds=!1,Yi=null,bc=ce,Hm=[],Pm=null,ZE=50,wc=0,Wm=null,Ym=!1,Af=!1,eR=50,Bl=0,$f=null,Sc=Wn,zf=ce,_1=!1;function Bf(){return la}function ua(){return(Jt&(Hr|Ka))!==Sr?Tr():(Sc!==Wn||(Sc=Tr()),Sc)}function Vi(e){var t=e.mode;if((t&Kt)===yt)return Rt;if((Jt&Hr)!==Sr&&kr!==ce)return _u(kr);var n=q4()!==Q4;if(n){if(Fr.transition!==null){var r=Fr.transition;r._updatedFibers||(r._updatedFibers=new Set),r._updatedFibers.add(e)}return zf===Dr&&(zf=Gg()),zf}var a=co();if(a!==Dr)return a;var s=O6();return s}function tR(e){var t=e.mode;return(t&Kt)===yt?Rt:rC()}function Er(e,t,n,r){CR(),_1&&f("useInsertionEffect must not schedule updates."),Ym&&(Af=!0),mu(e,n,r),(Jt&Hr)!==ce&&e===la?jR(t):(uo&&Zg(e,t,n),TR(t),e===la&&((Jt&Hr)===Sr&&(gc=Wt(gc,n)),Cr===mc&&Xi(e,kr)),va(e,r),n===Rt&&Jt===Sr&&(t.mode&Kt)===yt&&!wo.isBatchingLegacy&&(xc(),_0()))}function nR(e,t,n){var r=e.current;r.lanes=t,mu(e,t,n),va(e,n)}function rR(e){return(Jt&Hr)!==Sr}function va(e,t){var n=e.callbackNode;Kk(e,t);var r=ad(e,e===la?kr:ce);if(r===ce){n!==null&&D1(n),e.callbackNode=null,e.callbackPriority=Dr;return}var a=_s(r),s=e.callbackPriority;if(s===a&&!(wo.current!==null&&n!==Jm)){n==null&&s!==Rt&&f("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}n!=null&&D1(n);var u;if(a===Rt)e.tag===Ai?(wo.isBatchingLegacy!==null&&(wo.didScheduleLegacyUpdate=!0),D4(g1.bind(null,e))):p0(g1.bind(null,e)),wo.current!==null?wo.current.push($i):A6(function(){(Jt&(Hr|Ka))===Sr&&$i()}),u=null;else{var d;switch(nv(r)){case Ta:d=ed;break;case ni:d=Fh;break;case ri:d=fs;break;case sd:d=Hh;break;default:d=fs;break}u=Zm(d,m1.bind(null,e))}e.callbackPriority=a,e.callbackNode=u}function m1(e,t){if(b3(),Sc=Wn,zf=ce,(Jt&(Hr|Ka))!==Sr)throw new Error("Should not already be working.");var n=e.callbackNode,r=pi();if(r&&e.callbackNode!==n)return null;var a=ad(e,e===la?kr:ce);if(a===ce)return null;var s=!od(e,a)&&!nC(e,a)&&!t,u=s?hR(e,a):Uf(e,a);if(u!==di){if(u===Ms){var d=cp(e);d!==ce&&(a=d,u=Vm(e,d))}if(u===_c){var h=yc;throw Ls(e,ce),Xi(e,a),va(e,Tr()),h}if(u===Bm)Xi(e,a);else{var g=!od(e,a),x=e.current.alternate;if(g&&!oR(x)){if(u=Uf(e,a),u===Ms){var L=cp(e);L!==ce&&(a=L,u=Vm(e,L))}if(u===_c){var D=yc;throw Ls(e,ce),Xi(e,a),va(e,Tr()),D}}e.finishedWork=x,e.finishedLanes=a,aR(e,u,a)}}return va(e,Tr()),e.callbackNode===n?m1.bind(null,e):null}function Vm(e,t){var n=vc;if(ld(e)){var r=Ls(e,t);r.flags|=Jo,k4(e.containerInfo)}var a=Uf(e,t);if(a!==Ms){var s=ga;ga=n,s!==null&&y1(s)}return a}function y1(e){ga===null?ga=e:ga.push.apply(ga,e)}function aR(e,t,n){switch(t){case di:case _c:throw new Error("Root did not complete. This is a bug in React.");case Ms:{Os(e,ga,fi);break}case Df:{if(Xi(e,n),Qg(n)&&!L1()){var r=Um+f1-Tr();if(r>10){var a=ad(e,ce);if(a!==ce)break;var s=e.suspendedLanes;if(!ll(s,n)){ua(),Jg(e,s);break}e.timeoutHandle=Pp(Os.bind(null,e,ga,fi),r);break}}Os(e,ga,fi);break}case mc:{if(Xi(e,n),tC(n))break;if(!L1()){var u=qk(e,n),d=u,h=Tr()-d,g=kR(h)-h;if(g>10){e.timeoutHandle=Pp(Os.bind(null,e,ga,fi),g);break}}Os(e,ga,fi);break}case d1:{Os(e,ga,fi);break}default:throw new Error("Unknown root exit status.")}}function oR(e){for(var t=e;;){if(t.flags&Nh){var n=t.updateQueue;if(n!==null){var r=n.stores;if(r!==null)for(var a=0;a<r.length;a++){var s=r[a],u=s.getSnapshot,d=s.value;try{if(!Da(u(),d))return!1}catch{return!1}}}}var h=t.child;if(t.subtreeFlags&Nh&&h!==null){h.return=t,t=h;continue}if(t===e)return!0;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}return!0}function Xi(e,t){t=id(t,Of),t=id(t,gc),oC(e,t)}function g1(e){if(w3(),(Jt&(Hr|Ka))!==Sr)throw new Error("Should not already be working.");pi();var t=ad(e,ce);if(!ja(t,Rt))return va(e,Tr()),null;var n=Uf(e,t);if(e.tag!==Ai&&n===Ms){var r=cp(e);r!==ce&&(t=r,n=Vm(e,r))}if(n===_c){var a=yc;throw Ls(e,ce),Xi(e,t),va(e,Tr()),a}if(n===Bm)throw new Error("Root did not complete. This is a bug in React.");var s=e.current.alternate;return e.finishedWork=s,e.finishedLanes=t,Os(e,ga,fi),va(e,Tr()),null}function iR(e,t){t!==ce&&(pp(e,Wt(t,Rt)),va(e,Tr()),(Jt&(Hr|Ka))===Sr&&(xc(),$i()))}function Xm(e,t){var n=Jt;Jt|=c1;try{return e(t)}finally{Jt=n,Jt===Sr&&!wo.isBatchingLegacy&&(xc(),_0())}}function sR(e,t,n,r,a){var s=co(),u=Fr.transition;try{return Fr.transition=null,Lr(Ta),e(t,n,r,a)}finally{Lr(s),Fr.transition=u,Jt===Sr&&xc()}}function hi(e){Yi!==null&&Yi.tag===Ai&&(Jt&(Hr|Ka))===Sr&&pi();var t=Jt;Jt|=c1;var n=Fr.transition,r=co();try{return Fr.transition=null,Lr(Ta),e?e():void 0}finally{Lr(r),Fr.transition=n,Jt=t,(Jt&(Hr|Ka))===Sr&&$i()}}function v1(){return(Jt&(Hr|Ka))!==Sr}function If(e,t){Qr(Im,Wo,e),Wo=Wt(Wo,t)}function Qm(e){Wo=Im.current,Xr(Im,e)}function Ls(e,t){e.finishedWork=null,e.finishedLanes=ce;var n=e.timeoutHandle;if(n!==Wp&&(e.timeoutHandle=Wp,N6(n)),er!==null)for(var r=er.return;r!==null;){var a=r.alternate;Qx(a,r),r=r.return}la=e;var s=Ns(e.current,null);return er=s,kr=Wo=t,Cr=di,yc=null,Lf=ce,gc=ce,Of=ce,vc=null,ga=null,n3(),po.discardPendingWarnings(),s}function x1(e,t){do{var n=er;try{if(Qd(),W0(),Hn(),zm.current=null,n===null||n.return===null){Cr=_c,yc=t,er=null;return}if(Xn&&n.mode&gn&&kf(n,!0),wn)if(al(),t!==null&&typeof t=="object"&&typeof t.then=="function"){var r=t;zk(n,r,kr)}else $k(n,t,kr);D3(e,n.return,n,t,kr),k1(n)}catch(a){t=a,er===n&&n!==null?(n=n.return,er=n):n=er;continue}return}while(!0)}function b1(){var e=$m.current;return $m.current=vf,e===null?vf:e}function w1(e){$m.current=e}function lR(){Um=Tr()}function kc(e){Lf=Wt(e,Lf)}function uR(){Cr===di&&(Cr=Df)}function qm(){(Cr===di||Cr===Df||Cr===Ms)&&(Cr=mc),la!==null&&(dp(Lf)||dp(gc))&&Xi(la,kr)}function cR(e){Cr!==mc&&(Cr=Ms),vc===null?vc=[e]:vc.push(e)}function dR(){return Cr===di}function Uf(e,t){var n=Jt;Jt|=Hr;var r=b1();if(la!==e||kr!==t){if(uo){var a=e.memoizedUpdaters;a.size>0&&(Cc(e,kr),a.clear()),ev(e,t)}fi=tv(),Ls(e,t)}Pg(t);do try{fR();break}catch(s){x1(e,s)}while(!0);if(Qd(),Jt=n,w1(r),er!==null)throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return Wg(),la=null,kr=ce,Cr}function fR(){for(;er!==null;)S1(er)}function hR(e,t){var n=Jt;Jt|=Hr;var r=b1();if(la!==e||kr!==t){if(uo){var a=e.memoizedUpdaters;a.size>0&&(Cc(e,kr),a.clear()),ev(e,t)}fi=tv(),xc(),Ls(e,t)}Pg(t);do try{pR();break}catch(s){x1(e,s)}while(!0);return Qd(),w1(r),Jt=n,er!==null?(Hk(),di):(Wg(),la=null,kr=ce,Cr)}function pR(){for(;er!==null&&!mk();)S1(er)}function S1(e){var t=e.alternate;It(e);var n;(e.mode&gn)!==yt?(J_(e),n=Gm(t,e,Wo),kf(e,!0)):n=Gm(t,e,Wo),Hn(),e.memoizedProps=e.pendingProps,n===null?k1(e):er=n,zm.current=null}function k1(e){var t=e;do{var n=t.alternate,r=t.return;if((t.flags&Zc)===bt){It(t);var a=void 0;if((t.mode&gn)===yt?a=Xx(n,t,Wo):(J_(t),a=Xx(n,t,Wo),kf(t,!1)),Hn(),a!==null){er=a;return}}else{var s=uE(n,t);if(s!==null){s.flags&=ck,er=s;return}if((t.mode&gn)!==yt){kf(t,!1);for(var u=t.actualDuration,d=t.child;d!==null;)u+=d.actualDuration,d=d.sibling;t.actualDuration=u}if(r!==null)r.flags|=Zc,r.subtreeFlags=bt,r.deletions=null;else{Cr=Bm,er=null;return}}var h=t.sibling;if(h!==null){er=h;return}t=r,er=t}while(t!==null);Cr===di&&(Cr=d1)}function Os(e,t,n){var r=co(),a=Fr.transition;try{Fr.transition=null,Lr(Ta),_R(e,t,n,r)}finally{Fr.transition=a,Lr(r)}return null}function _R(e,t,n,r){do pi();while(Yi!==null);if(ER(),(Jt&(Hr|Ka))!==Sr)throw new Error("Should not already be working.");var a=e.finishedWork,s=e.finishedLanes;if(Tk(s),a===null)return Ug(),null;if(s===ce&&f("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=ce,a===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e.callbackNode=null,e.callbackPriority=Dr;var u=Wt(a.lanes,a.childLanes);iC(e,u),e===la&&(la=null,er=null,kr=ce),((a.subtreeFlags&nl)!==bt||(a.flags&nl)!==bt)&&(Ds||(Ds=!0,Pm=n,Zm(fs,function(){return pi(),null})));var d=(a.subtreeFlags&(Ih|Uh|lu|nl))!==bt,h=(a.flags&(Ih|Uh|lu|nl))!==bt;if(d||h){var g=Fr.transition;Fr.transition=null;var x=co();Lr(Ta);var L=Jt;Jt|=Ka,zm.current=null,pE(e,a),_x(),jE(e,a,s),R6(e.containerInfo),e.current=a,Bk(s),TE(a,e,s),Ik(),yk(),Jt=L,Lr(x),Fr.transition=g}else e.current=a,_x();var D=Ds;if(Ds?(Ds=!1,Yi=e,bc=s):(Bl=0,$f=null),u=e.pendingLanes,u===ce&&(zl=null),D||j1(e.current,!1),kk(a.stateNode,r),uo&&e.memoizedUpdaters.clear(),QE(),va(e,Tr()),t!==null)for(var Y=e.onRecoverableError,X=0;X<t.length;X++){var J=t[X],je=J.stack,pt=J.digest;Y(J.value,{componentStack:je,digest:pt})}if(Nf){Nf=!1;var tt=Fm;throw Fm=null,tt}return ja(bc,Rt)&&e.tag!==Ai&&pi(),u=e.pendingLanes,ja(u,Rt)?(x3(),e===Wm?wc++:(wc=0,Wm=e)):wc=0,$i(),Ug(),null}function pi(){if(Yi!==null){var e=nv(bc),t=cC(ri,e),n=Fr.transition,r=co();try{return Fr.transition=null,Lr(t),yR()}finally{Lr(r),Fr.transition=n}}return!1}function mR(e){Hm.push(e),Ds||(Ds=!0,Zm(fs,function(){return pi(),null}))}function yR(){if(Yi===null)return!1;var e=Pm;Pm=null;var t=Yi,n=bc;if(Yi=null,bc=ce,(Jt&(Hr|Ka))!==Sr)throw new Error("Cannot flush passive effects while already rendering.");Ym=!0,Af=!1,Uk(n);var r=Jt;Jt|=Ka,$E(t.current),LE(t,t.current,n,e);{var a=Hm;Hm=[];for(var s=0;s<a.length;s++){var u=a[s];gE(t,u)}}Fk(),j1(t.current,!0),Jt=r,$i(),Af?t===$f?Bl++:(Bl=0,$f=t):Bl=0,Ym=!1,Af=!1,Ck(t);{var d=t.current.stateNode;d.effectDuration=0,d.passiveEffectDuration=0}return!0}function C1(e){return zl!==null&&zl.has(e)}function gR(e){zl===null?zl=new Set([e]):zl.add(e)}function vR(e){Nf||(Nf=!0,Fm=e)}var xR=vR;function E1(e,t,n){var r=js(n,t),a=Sx(e,r,Rt),s=Bi(e,a,Rt),u=ua();s!==null&&(mu(s,Rt,u),va(s,u))}function In(e,t,n){if(dE(n),Ec(!1),e.tag===M){E1(e,e,n);return}var r=null;for(r=t;r!==null;){if(r.tag===M){E1(r,e,n);return}else if(r.tag===P){var a=r.type,s=r.stateNode;if(typeof a.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&!C1(s)){var u=js(n,e),d=mm(r,u,Rt),h=Bi(r,d,Rt),g=ua();h!==null&&(mu(h,Rt,g),va(h,g));return}}r=r.return}f(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}function bR(e,t,n){var r=e.pingCache;r!==null&&r.delete(t);var a=ua();Jg(e,n),MR(e),la===e&&ll(kr,n)&&(Cr===mc||Cr===Df&&Qg(kr)&&Tr()-Um<f1?Ls(e,ce):Of=Wt(Of,n)),va(e,a)}function R1(e,t){t===Dr&&(t=tR(e));var n=ua(),r=ma(e,t);r!==null&&(mu(r,t,n),va(r,n))}function wR(e){var t=e.memoizedState,n=Dr;t!==null&&(n=t.retryLane),R1(e,n)}function SR(e,t){var n=Dr,r;switch(e.tag){case de:r=e.stateNode;var a=e.memoizedState;a!==null&&(n=a.retryLane);break;case Pe:r=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}r!==null&&r.delete(t),R1(e,n)}function kR(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:KE(e/1960)*1960}function CR(){if(wc>ZE)throw wc=0,Wm=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Bl>eR&&(Bl=0,$f=null,f("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function ER(){po.flushLegacyContextWarning(),po.flushPendingUnsafeLifecycleWarnings()}function j1(e,t){It(e),Ff(e,Ei,YE),t&&Ff(e,Bh,VE),Ff(e,Ei,PE),t&&Ff(e,Bh,WE),Hn()}function Ff(e,t,n){for(var r=e,a=null;r!==null;){var s=r.subtreeFlags&t;r!==a&&r.child!==null&&s!==bt?r=r.child:((r.flags&t)!==bt&&n(r),r.sibling!==null?r=r.sibling:r=a=r.return)}}var Hf=null;function T1(e){{if((Jt&Hr)!==Sr||!(e.mode&Kt))return;var t=e.tag;if(t!==O&&t!==M&&t!==P&&t!==E&&t!==Ie&&t!==Ae&&t!==ae)return;var n=dt(e)||"ReactComponent";if(Hf!==null){if(Hf.has(n))return;Hf.add(n)}else Hf=new Set([n]);var r=jr;try{It(e),f("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{r?It(e):Hn()}}}var Gm;{var RR=null;Gm=function(e,t,n){var r=z1(RR,t);try{return Hx(e,t,n)}catch(s){if(I4()||s!==null&&typeof s=="object"&&typeof s.then=="function")throw s;if(Qd(),W0(),Qx(e,t),z1(t,r),t.mode&gn&&J_(t),Lh(null,Hx,null,e,t,n),sk()){var a=Oh();typeof a=="object"&&a!==null&&a._suppressLogging&&typeof s=="object"&&s!==null&&!s._suppressLogging&&(s._suppressLogging=!0)}throw s}}}var M1=!1,Km;Km=new Set;function jR(e){if(jo&&!y3())switch(e.tag){case E:case Ie:case ae:{var t=er&&dt(er)||"Unknown",n=t;if(!Km.has(n)){Km.add(n);var r=dt(e)||"Unknown";f("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",r,t,t)}break}case P:{M1||(f("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),M1=!0);break}}}function Cc(e,t){if(uo){var n=e.memoizedUpdaters;n.forEach(function(r){Zg(e,r,t)})}}var Jm={};function Zm(e,t){{var n=wo.current;return n!==null?(n.push(t),Jm):Ig(e,t)}}function D1(e){if(e!==Jm)return _k(e)}function L1(){return wo.current!==null}function TR(e){{if(e.mode&Kt){if(!u1())return}else if(!GE()||Jt!==Sr||e.tag!==E&&e.tag!==Ie&&e.tag!==ae)return;if(wo.current===null){var t=jr;try{It(e),f(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,dt(e))}finally{t?It(e):Hn()}}}}function MR(e){e.tag!==Ai&&u1()&&wo.current===null&&f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)}function Ec(e){_1=e}var Ja=null,Il=null,DR=function(e){Ja=e};function Ul(e){{if(Ja===null)return e;var t=Ja(e);return t===void 0?e:t.current}}function ey(e){return Ul(e)}function ty(e){{if(Ja===null)return e;var t=Ja(e);if(t===void 0){if(e!=null&&typeof e.render=="function"){var n=Ul(e.render);if(e.render!==n){var r={$$typeof:re,render:n};return e.displayName!==void 0&&(r.displayName=e.displayName),r}}return e}return t.current}}function O1(e,t){{if(Ja===null)return!1;var n=e.elementType,r=t.type,a=!1,s=typeof r=="object"&&r!==null?r.$$typeof:null;switch(e.tag){case P:{typeof r=="function"&&(a=!0);break}case E:{(typeof r=="function"||s===ut)&&(a=!0);break}case Ie:{(s===re||s===ut)&&(a=!0);break}case Ae:case ae:{(s===se||s===ut)&&(a=!0);break}default:return!1}if(a){var u=Ja(n);if(u!==void 0&&u===Ja(r))return!0}return!1}}function N1(e){{if(Ja===null||typeof WeakSet!="function")return;Il===null&&(Il=new WeakSet),Il.add(e)}}var LR=function(e,t){{if(Ja===null)return;var n=t.staleFamilies,r=t.updatedFamilies;pi(),hi(function(){ny(e.current,r,n)})}},OR=function(e,t){{if(e.context!==La)return;pi(),hi(function(){Rc(t,e,null,null)})}};function ny(e,t,n){{var r=e.alternate,a=e.child,s=e.sibling,u=e.tag,d=e.type,h=null;switch(u){case E:case ae:case P:h=d;break;case Ie:h=d.render;break}if(Ja===null)throw new Error("Expected resolveFamily to be set during hot reload.");var g=!1,x=!1;if(h!==null){var L=Ja(h);L!==void 0&&(n.has(L)?x=!0:t.has(L)&&(u===P?x=!0:g=!0))}if(Il!==null&&(Il.has(e)||r!==null&&Il.has(r))&&(x=!0),x&&(e._debugNeedsRemount=!0),x||g){var D=ma(e,Rt);D!==null&&Er(D,e,Rt,Wn)}a!==null&&!x&&ny(a,t,n),s!==null&&ny(s,t,n)}}var NR=function(e,t){{var n=new Set,r=new Set(t.map(function(a){return a.current}));return ry(e.current,r,n),n}};function ry(e,t,n){{var r=e.child,a=e.sibling,s=e.tag,u=e.type,d=null;switch(s){case E:case ae:case P:d=u;break;case Ie:d=u.render;break}var h=!1;d!==null&&t.has(d)&&(h=!0),h?AR(e,n):r!==null&&ry(r,t,n),a!==null&&ry(a,t,n)}}function AR(e,t){{var n=$R(e,t);if(n)return;for(var r=e;;){switch(r.tag){case H:t.add(r.stateNode);return;case A:t.add(r.stateNode.containerInfo);return;case M:t.add(r.stateNode.containerInfo);return}if(r.return===null)throw new Error("Expected to reach root first.");r=r.return}}}function $R(e,t){for(var n=e,r=!1;;){if(n.tag===H)r=!0,t.add(n.stateNode);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;n.sibling===null;){if(n.return===null||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}var ay;{ay=!1;try{var A1=Object.preventExtensions({})}catch{ay=!0}}function zR(e,t,n,r){this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,this.flags=bt,this.subtreeFlags=bt,this.deletions=null,this.lanes=ce,this.childLanes=ce,this.alternate=null,this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!ay&&typeof Object.preventExtensions=="function"&&Object.preventExtensions(this)}var Oa=function(e,t,n,r){return new zR(e,t,n,r)};function oy(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function BR(e){return typeof e=="function"&&!oy(e)&&e.defaultProps===void 0}function IR(e){if(typeof e=="function")return oy(e)?P:E;if(e!=null){var t=e.$$typeof;if(t===re)return Ie;if(t===se)return Ae}return O}function Ns(e,t){var n=e.alternate;n===null?(n=Oa(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=bt,n.subtreeFlags=bt,n.deletions=null,n.actualDuration=0,n.actualStartTime=-1),n.flags=e.flags&ei,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;var r=e.dependencies;switch(n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case O:case E:case ae:n.type=Ul(e.type);break;case P:n.type=ey(e.type);break;case Ie:n.type=ty(e.type);break}return n}function UR(e,t){e.flags&=ei|pr;var n=e.alternate;if(n===null)e.childLanes=ce,e.lanes=t,e.child=null,e.subtreeFlags=bt,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=bt,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type;var r=n.dependencies;e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}return e}function FR(e,t,n){var r;return e===Bd?(r=Kt,t===!0&&(r|=or,r|=No)):r=yt,uo&&(r|=gn),Oa(M,null,null,r)}function iy(e,t,n,r,a,s){var u=O,d=e;if(typeof e=="function")oy(e)?(u=P,d=ey(d)):d=Ul(d);else if(typeof e=="string")u=H;else e:switch(e){case Nn:return Qi(n.children,a,s,t);case ha:u=ke,a|=or,(a&Kt)!==yt&&(a|=No);break;case Or:return HR(n,a,s,t);case xe:return PR(n,a,s,t);case Me:return WR(n,a,s,t);case Tn:return $1(n,a,s,t);case An:case Ht:case $n:case Rr:case zt:default:{if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ur:u=Le;break e;case k:u=he;break e;case re:u=Ie,d=ty(d);break e;case se:u=Ae;break e;case ut:u=mt,d=null;break e}var h="";{(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(h+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var g=r?dt(r):null;g&&(h+=`

Check the render method of \``+g+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) "+("but got: "+(e==null?e:typeof e)+"."+h))}}var x=Oa(u,n,t,a);return x.elementType=e,x.type=d,x.lanes=s,x._debugOwner=r,x}function sy(e,t,n){var r=null;r=e._owner;var a=e.type,s=e.key,u=e.props,d=iy(a,s,u,r,t,n);return d._debugSource=e._source,d._debugOwner=e._owner,d}function Qi(e,t,n,r){var a=Oa(le,e,r,t);return a.lanes=n,a}function HR(e,t,n,r){typeof e.id!="string"&&f('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id);var a=Oa(G,e,r,t|gn);return a.elementType=Or,a.lanes=n,a.stateNode={effectDuration:0,passiveEffectDuration:0},a}function PR(e,t,n,r){var a=Oa(de,e,r,t);return a.elementType=xe,a.lanes=n,a}function WR(e,t,n,r){var a=Oa(Pe,e,r,t);return a.elementType=Me,a.lanes=n,a}function $1(e,t,n,r){var a=Oa(Oe,e,r,t);a.elementType=Tn,a.lanes=n;var s={isHidden:!1};return a.stateNode=s,a}function ly(e,t,n){var r=Oa(I,e,null,t);return r.lanes=n,r}function YR(){var e=Oa(H,null,null,yt);return e.elementType="DELETED",e}function VR(e){var t=Oa(nt,null,null,yt);return t.stateNode=e,t}function uy(e,t,n){var r=e.children!==null?e.children:[],a=Oa(A,r,e.key,t);return a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function z1(e,t){return e===null&&(e=Oa(O,null,null,yt)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function XR(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=Wp,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=Dr,this.eventTimes=hp(ce),this.expirationTimes=hp(Wn),this.pendingLanes=ce,this.suspendedLanes=ce,this.pingedLanes=ce,this.expiredLanes=ce,this.mutableReadLanes=ce,this.finishedLanes=ce,this.entangledLanes=ce,this.entanglements=hp(ce),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var s=this.pendingUpdatersLaneMap=[],u=0;u<Wh;u++)s.push(new Set)}switch(t){case Bd:this._debugRootType=n?"hydrateRoot()":"createRoot()";break;case Ai:this._debugRootType=n?"hydrate()":"render()";break}}function B1(e,t,n,r,a,s,u,d,h,g){var x=new XR(e,t,n,d,h),L=FR(t,s);x.current=L,L.stateNode=x;{var D={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null};L.memoizedState=D}return w_(L),x}var cy="18.3.1";function QR(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return lr(r),{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}var dy,fy;dy=!1,fy={};function I1(e){if(!e)return La;var t=Zs(e),n=M4(t);if(t.tag===P){var r=t.type;if(zo(r))return f0(t,r,n)}return n}function qR(e,t){{var n=Zs(e);if(n===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var r=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+r)}var a=$g(n);if(a===null)return null;if(a.mode&or){var s=dt(n)||"Component";if(!fy[s]){fy[s]=!0;var u=jr;try{It(a),n.mode&or?f("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,s):f("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,s)}finally{u?It(u):Hn()}}}return a.stateNode}}function U1(e,t,n,r,a,s,u,d){var h=!1,g=null;return B1(e,t,h,g,n,r,a,s,u)}function F1(e,t,n,r,a,s,u,d,h,g){var x=!0,L=B1(n,r,x,e,a,s,u,d,h);L.context=I1(null);var D=L.current,Y=ua(),X=Vi(D),J=ui(Y,X);return J.callback=t??null,Bi(D,J,X),nR(L,X,Y),L}function Rc(e,t,n,r){Sk(t,e);var a=t.current,s=ua(),u=Vi(a);Pk(u);var d=I1(n);t.context===null?t.context=d:t.pendingContext=d,jo&&jr!==null&&!dy&&(dy=!0,f(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,dt(jr)||"Unknown"));var h=ui(s,u);h.payload={element:e},r=r===void 0?null:r,r!==null&&(typeof r!="function"&&f("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),h.callback=r);var g=Bi(a,h,u);return g!==null&&(Er(g,a,u,s),Zd(g,a,u)),u}function Pf(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case H:return t.child.stateNode;default:return t.child.stateNode}}function GR(e){switch(e.tag){case M:{var t=e.stateNode;if(ld(t)){var n=Jk(t);iR(t,n)}break}case de:{hi(function(){var a=ma(e,Rt);if(a!==null){var s=ua();Er(a,e,Rt,s)}});var r=Rt;hy(e,r);break}}}function H1(e,t){var n=e.memoizedState;n!==null&&n.dehydrated!==null&&(n.retryLane=aC(n.retryLane,t))}function hy(e,t){H1(e,t);var n=e.alternate;n&&H1(n,t)}function KR(e){if(e.tag===de){var t=fu,n=ma(e,t);if(n!==null){var r=ua();Er(n,e,t,r)}hy(e,t)}}function JR(e){if(e.tag===de){var t=Vi(e),n=ma(e,t);if(n!==null){var r=ua();Er(n,e,t,r)}hy(e,t)}}function P1(e){var t=pk(e);return t===null?null:t.stateNode}var W1=function(e){return null};function ZR(e){return W1(e)}var Y1=function(e){return!1};function ej(e){return Y1(e)}var V1=null,X1=null,Q1=null,q1=null,G1=null,K1=null,J1=null,Z1=null,eb=null;{var tb=function(e,t,n){var r=t[n],a=Nt(e)?e.slice():Bt({},e);return n+1===t.length?(Nt(a)?a.splice(r,1):delete a[r],a):(a[r]=tb(e[r],t,n+1),a)},nb=function(e,t){return tb(e,t,0)},rb=function(e,t,n,r){var a=t[r],s=Nt(e)?e.slice():Bt({},e);if(r+1===t.length){var u=n[r];s[u]=s[a],Nt(s)?s.splice(a,1):delete s[a]}else s[a]=rb(e[a],t,n,r+1);return s},ab=function(e,t,n){if(t.length!==n.length){m("copyWithRename() expects paths of the same length");return}else for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){m("copyWithRename() expects paths to be the same except for the deepest key");return}return rb(e,t,n,0)},ob=function(e,t,n,r){if(n>=t.length)return r;var a=t[n],s=Nt(e)?e.slice():Bt({},e);return s[a]=ob(e[a],t,n+1,r),s},ib=function(e,t,n){return ob(e,t,0,n)},py=function(e,t){for(var n=e.memoizedState;n!==null&&t>0;)n=n.next,t--;return n};V1=function(e,t,n,r){var a=py(e,t);if(a!==null){var s=ib(a.memoizedState,n,r);a.memoizedState=s,a.baseState=s,e.memoizedProps=Bt({},e.memoizedProps);var u=ma(e,Rt);u!==null&&Er(u,e,Rt,Wn)}},X1=function(e,t,n){var r=py(e,t);if(r!==null){var a=nb(r.memoizedState,n);r.memoizedState=a,r.baseState=a,e.memoizedProps=Bt({},e.memoizedProps);var s=ma(e,Rt);s!==null&&Er(s,e,Rt,Wn)}},Q1=function(e,t,n,r){var a=py(e,t);if(a!==null){var s=ab(a.memoizedState,n,r);a.memoizedState=s,a.baseState=s,e.memoizedProps=Bt({},e.memoizedProps);var u=ma(e,Rt);u!==null&&Er(u,e,Rt,Wn)}},q1=function(e,t,n){e.pendingProps=ib(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=ma(e,Rt);r!==null&&Er(r,e,Rt,Wn)},G1=function(e,t){e.pendingProps=nb(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var n=ma(e,Rt);n!==null&&Er(n,e,Rt,Wn)},K1=function(e,t,n){e.pendingProps=ab(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=ma(e,Rt);r!==null&&Er(r,e,Rt,Wn)},J1=function(e){var t=ma(e,Rt);t!==null&&Er(t,e,Rt,Wn)},Z1=function(e){W1=e},eb=function(e){Y1=e}}function tj(e){var t=$g(e);return t===null?null:t.stateNode}function nj(e){return null}function rj(){return jr}function aj(e){var t=e.findFiberByHostInstance,n=c.ReactCurrentDispatcher;return wk({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:V1,overrideHookStateDeletePath:X1,overrideHookStateRenamePath:Q1,overrideProps:q1,overridePropsDeletePath:G1,overridePropsRenamePath:K1,setErrorHandler:Z1,setSuspenseHandler:eb,scheduleUpdate:J1,currentDispatcherRef:n,findHostInstanceByFiber:tj,findFiberByHostInstance:t||nj,findHostInstancesForRefresh:NR,scheduleRefresh:LR,scheduleRoot:OR,setRefreshHandler:DR,getCurrentFiber:rj,reconcilerVersion:cy})}var sb=typeof reportError=="function"?reportError:function(e){console.error(e)};function _y(e){this._internalRoot=e}Wf.prototype.render=_y.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw new Error("Cannot update an unmounted root.");{typeof arguments[1]=="function"?f("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):Yf(arguments[1])?f("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof arguments[1]<"u"&&f("You passed a second argument to root.render(...) but it only accepts one argument.");var n=t.containerInfo;if(n.nodeType!==nr){var r=P1(t.current);r&&r.parentNode!==n&&f("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}}Rc(e,t,null,null)},Wf.prototype.unmount=_y.prototype.unmount=function(){typeof arguments[0]=="function"&&f("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;v1()&&f("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),hi(function(){Rc(null,e,null,null)}),s0(t)}};function oj(e,t){if(!Yf(e))throw new Error("createRoot(...): Target container is not a DOM element.");lb(e);var n=!1,r=!1,a="",s=sb;t!=null&&(t.hydrate?m("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===un&&f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.transitionCallbacks!==void 0&&t.transitionCallbacks);var u=U1(e,Bd,null,n,r,a,s);Dd(u.current,e);var d=e.nodeType===nr?e.parentNode:e;return Ou(d),new _y(u)}function Wf(e){this._internalRoot=e}function ij(e){e&&bC(e)}Wf.prototype.unstable_scheduleHydration=ij;function sj(e,t,n){if(!Yf(e))throw new Error("hydrateRoot(...): Target container is not a DOM element.");lb(e),t===void 0&&f("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var r=n??null,a=n!=null&&n.hydratedSources||null,s=!1,u=!1,d="",h=sb;n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError));var g=F1(t,null,e,Bd,r,s,u,d,h);if(Dd(g.current,e),Ou(e),a)for(var x=0;x<a.length;x++){var L=a[x];d3(g,L)}return new Wf(g)}function Yf(e){return!!(e&&(e.nodeType===hr||e.nodeType===Ya||e.nodeType===Qs))}function jc(e){return!!(e&&(e.nodeType===hr||e.nodeType===Ya||e.nodeType===Qs||e.nodeType===nr&&e.nodeValue===" react-mount-point-unstable "))}function lb(e){e.nodeType===hr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&f("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),Wu(e)&&(e._reactRootContainer?f("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):f("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}var lj=c.ReactCurrentOwner,ub;ub=function(e){if(e._reactRootContainer&&e.nodeType!==nr){var t=P1(e._reactRootContainer.current);t&&t.parentNode!==e&&f("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=my(e),a=!!(r&&Oi(r));a&&!n&&f("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===hr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&f("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};function my(e){return e?e.nodeType===Ya?e.documentElement:e.firstChild:null}function cb(){}function uj(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var D=Pf(u);s.call(D)}}var u=F1(t,r,e,Ai,null,!1,!1,"",cb);e._reactRootContainer=u,Dd(u.current,e);var d=e.nodeType===nr?e.parentNode:e;return Ou(d),hi(),u}else{for(var h;h=e.lastChild;)e.removeChild(h);if(typeof r=="function"){var g=r;r=function(){var D=Pf(x);g.call(D)}}var x=U1(e,Ai,null,!1,!1,"",cb);e._reactRootContainer=x,Dd(x.current,e);var L=e.nodeType===nr?e.parentNode:e;return Ou(L),hi(function(){Rc(t,x,n,r)}),x}}function cj(e,t){e!==null&&typeof e!="function"&&f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}function Vf(e,t,n,r,a){ub(n),cj(a===void 0?null:a,"render");var s=n._reactRootContainer,u;if(!s)u=uj(n,t,e,a,r);else{if(u=s,typeof a=="function"){var d=a;a=function(){var h=Pf(u);d.call(h)}}Rc(t,u,e,a)}return Pf(u)}var db=!1;function dj(e){{db||(db=!0,f("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));var t=lj.current;if(t!==null&&t.stateNode!==null){var n=t.stateNode._warnedAboutRefsInRender;n||f("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",rn(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}}return e==null?null:e.nodeType===hr?e:qR(e,"findDOMNode")}function fj(e,t,n){if(f("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!jc(t))throw new Error("Target container is not a DOM element.");{var r=Wu(t)&&t._reactRootContainer===void 0;r&&f("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?")}return Vf(null,e,t,!0,n)}function hj(e,t,n){if(f("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!jc(t))throw new Error("Target container is not a DOM element.");{var r=Wu(t)&&t._reactRootContainer===void 0;r&&f("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?")}return Vf(null,e,t,!1,n)}function pj(e,t,n,r){if(f("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!jc(n))throw new Error("Target container is not a DOM element.");if(e==null||!lk(e))throw new Error("parentComponent must be a valid React Component");return Vf(e,t,n,!1,r)}var fb=!1;function _j(e){if(fb||(fb=!0,f("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")),!jc(e))throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");{var t=Wu(e)&&e._reactRootContainer===void 0;t&&f("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?")}if(e._reactRootContainer){{var n=my(e),r=n&&!Oi(n);r&&f("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.")}return hi(function(){Vf(null,null,e,!1,function(){e._reactRootContainer=null,s0(e)})}),!0}else{{var a=my(e),s=!!(a&&Oi(a)),u=e.nodeType===hr&&jc(e.parentNode)&&!!e.parentNode._reactRootContainer;s&&f("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",u?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component.")}return!1}}dC(GR),hC(KR),pC(JR),_C(co),mC(lC),(typeof Map!="function"||Map.prototype==null||typeof Map.prototype.forEach!="function"||typeof Set!="function"||Set.prototype==null||typeof Set.prototype.clear!="function"||typeof Set.prototype.forEach!="function")&&f("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),KS(y6),ek(Xm,sR,hi);function mj(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(t))throw new Error("Target container is not a DOM element.");return QR(e,t,null,n)}function yj(e,t,n,r){return pj(e,t,n,r)}var yy={usingClientEntryPoint:!1,Events:[Oi,yl,Ld,Sg,kg,Xm]};function gj(e,t){return yy.usingClientEntryPoint||f('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),oj(e,t)}function vj(e,t,n){return yy.usingClientEntryPoint||f('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),sj(e,t,n)}function xj(e){return v1()&&f("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),hi(e)}var bj=aj({findFiberByHostInstance:vs,bundleType:1,version:cy,rendererPackageName:"react-dom"});if(!bj&&mn&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&navigator.userAgent.indexOf("Edge")===-1||navigator.userAgent.indexOf("Firefox")>-1)){var hb=window.location.protocol;/^(https?|file):$/.test(hb)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+(hb==="file:"?`
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`:""),"font-weight:bold")}fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy,fa.createPortal=mj,fa.createRoot=gj,fa.findDOMNode=dj,fa.flushSync=xj,fa.hydrate=fj,fa.hydrateRoot=vj,fa.render=hj,fa.unmountComponentAtNode=_j,fa.unstable_batchedUpdates=Xm,fa.unstable_renderSubtreeIntoContainer=yj,fa.version=cy,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})(),fa}var ky;function Cy(){return ky||(ky=1,qf.exports=gb()),qf.exports}var Ey;function vb(){if(Ey)return Mc;Ey=1;var i=Cy();{var l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Mc.createRoot=function(c,_){l.usingClientEntryPoint=!0;try{return i.createRoot(c,_)}finally{l.usingClientEntryPoint=!1}},Mc.hydrateRoot=function(c,_,y){l.usingClientEntryPoint=!0;try{return i.hydrateRoot(c,_,y)}finally{l.usingClientEntryPoint=!1}}}return Mc}var xb=vb(),Ry=Cy(),Jf={exports:{}},Pl={},jy;function bb(){if(jy)return Pl;jy=1;/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){var i=Qf(),l=Symbol.for("react.element"),c=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),z=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),I=Symbol.iterator,le="@@iterator";function ke(k){if(k===null||typeof k!="object")return null;var re=I&&k[I]||k[le];return typeof re=="function"?re:null}var he=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Le(k){{for(var re=arguments.length,xe=new Array(re>1?re-1:0),Me=1;Me<re;Me++)xe[Me-1]=arguments[Me];Ie("error",k,xe)}}function Ie(k,re,xe){{var Me=he.ReactDebugCurrentFrame,se=Me.getStackAddendum();se!==""&&(re+="%s",xe=xe.concat([se]));var ut=xe.map(function(Ht){return String(Ht)});ut.unshift("Warning: "+re),Function.prototype.apply.call(console[k],console,ut)}}var G=!1,de=!1,Ae=!1,ae=!1,mt=!1,ot;ot=Symbol.for("react.module.reference");function nt(k){return!!(typeof k=="string"||typeof k=="function"||k===_||k===m||mt||k===y||k===P||k===O||ae||k===H||G||de||Ae||typeof k=="object"&&k!==null&&(k.$$typeof===A||k.$$typeof===M||k.$$typeof===f||k.$$typeof===z||k.$$typeof===E||k.$$typeof===ot||k.getModuleId!==void 0))}function Pe(k,re,xe){var Me=k.displayName;if(Me)return Me;var se=re.displayName||re.name||"";return se!==""?xe+"("+se+")":xe}function ct(k){return k.displayName||"Context"}function Oe(k){if(k==null)return null;if(typeof k.tag=="number"&&Le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof k=="function")return k.displayName||k.name||null;if(typeof k=="string")return k;switch(k){case _:return"Fragment";case c:return"Portal";case m:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList"}if(typeof k=="object")switch(k.$$typeof){case z:var re=k;return ct(re)+".Consumer";case f:var xe=k;return ct(xe._context)+".Provider";case E:return Pe(k,k.render,"ForwardRef");case M:var Me=k.displayName||null;return Me!==null?Me:Oe(k.type)||"Memo";case A:{var se=k,ut=se._payload,Ht=se._init;try{return Oe(Ht(ut))}catch{return null}}}return null}var Qe=Object.assign,Ge=0,Ce,Ke,fe,it,Tt,Gt,tn;function wn(){}wn.__reactDisabledLog=!0;function Xn(){{if(Ge===0){Ce=console.log,Ke=console.info,fe=console.warn,it=console.error,Tt=console.group,Gt=console.groupCollapsed,tn=console.groupEnd;var k={configurable:!0,enumerable:!0,value:wn,writable:!0};Object.defineProperties(console,{info:k,log:k,warn:k,error:k,group:k,groupCollapsed:k,groupEnd:k})}Ge++}}function tr(){{if(Ge--,Ge===0){var k={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Qe({},k,{value:Ce}),info:Qe({},k,{value:Ke}),warn:Qe({},k,{value:fe}),error:Qe({},k,{value:it}),group:Qe({},k,{value:Tt}),groupCollapsed:Qe({},k,{value:Gt}),groupEnd:Qe({},k,{value:tn})})}Ge<0&&Le("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var mr=he.ReactCurrentDispatcher,Sn;function Gn(k,re,xe){{if(Sn===void 0)try{throw Error()}catch(se){var Me=se.stack.trim().match(/\n( *(at )?)/);Sn=Me&&Me[1]||""}return`
`+Sn+k}}var Un=!1,Fn;{var mn=typeof WeakMap=="function"?WeakMap:Map;Fn=new mn}function Xt(k,re){if(!k||Un)return"";{var xe=Fn.get(k);if(xe!==void 0)return xe}var Me;Un=!0;var se=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ut;ut=mr.current,mr.current=null,Xn();try{if(re){var Ht=function(){throw Error()};if(Object.defineProperty(Ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ht,[])}catch(Mn){Me=Mn}Reflect.construct(k,[],Ht)}else{try{Ht.call()}catch(Mn){Me=Mn}k.call(Ht.prototype)}}else{try{throw Error()}catch(Mn){Me=Mn}k()}}catch(Mn){if(Mn&&Me&&typeof Mn.stack=="string"){for(var zt=Mn.stack.split(`
`),Tn=Me.stack.split(`
`),An=zt.length-1,$n=Tn.length-1;An>=1&&$n>=0&&zt[An]!==Tn[$n];)$n--;for(;An>=1&&$n>=0;An--,$n--)if(zt[An]!==Tn[$n]){if(An!==1||$n!==1)do if(An--,$n--,$n<0||zt[An]!==Tn[$n]){var Rr=`
`+zt[An].replace(" at new "," at ");return k.displayName&&Rr.includes("<anonymous>")&&(Rr=Rr.replace("<anonymous>",k.displayName)),typeof k=="function"&&Fn.set(k,Rr),Rr}while(An>=1&&$n>=0);break}}}finally{Un=!1,mr.current=ut,tr(),Error.prepareStackTrace=se}var xa=k?k.displayName||k.name:"",ba=xa?Gn(xa):"";return typeof k=="function"&&Fn.set(k,ba),ba}function nn(k,re,xe){return Xt(k,!1)}function ln(k){var re=k.prototype;return!!(re&&re.isReactComponent)}function Ln(k,re,xe){if(k==null)return"";if(typeof k=="function")return Xt(k,ln(k));if(typeof k=="string")return Gn(k);switch(k){case P:return Gn("Suspense");case O:return Gn("SuspenseList")}if(typeof k=="object")switch(k.$$typeof){case E:return nn(k.render);case M:return Ln(k.type,re,xe);case A:{var Me=k,se=Me._payload,ut=Me._init;try{return Ln(ut(se),re,xe)}catch{}}}return""}var jn=Object.prototype.hasOwnProperty,lr={},K=he.ReactDebugCurrentFrame;function Ue(k){if(k){var re=k._owner,xe=Ln(k.type,k._source,re?re.type:null);K.setExtraStackFrame(xe)}else K.setExtraStackFrame(null)}function lt(k,re,xe,Me,se){{var ut=Function.call.bind(jn);for(var Ht in k)if(ut(k,Ht)){var zt=void 0;try{if(typeof k[Ht]!="function"){var Tn=Error((Me||"React class")+": "+xe+" type `"+Ht+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof k[Ht]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Tn.name="Invariant Violation",Tn}zt=k[Ht](re,Ht,Me,xe,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(An){zt=An}zt&&!(zt instanceof Error)&&(Ue(se),Le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",Me||"React class",xe,Ht,typeof zt),Ue(null)),zt instanceof Error&&!(zt.message in lr)&&(lr[zt.message]=!0,Ue(se),Le("Failed %s type: %s",xe,zt.message),Ue(null))}}}var Ye=Array.isArray;function vt(k){return Ye(k)}function ft(k){{var re=typeof Symbol=="function"&&Symbol.toStringTag,xe=re&&k[Symbol.toStringTag]||k.constructor.name||"Object";return xe}}function Dt(k){try{return Je(k),!1}catch{return!0}}function Je(k){return""+k}function Ct(k){if(Dt(k))return Le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ft(k)),Je(k)}var en=he.ReactCurrentOwner,Ve={key:!0,ref:!0,__self:!0,__source:!0},$,j;function B(k){if(jn.call(k,"ref")){var re=Object.getOwnPropertyDescriptor(k,"ref").get;if(re&&re.isReactWarning)return!1}return k.ref!==void 0}function V(k){if(jn.call(k,"key")){var re=Object.getOwnPropertyDescriptor(k,"key").get;if(re&&re.isReactWarning)return!1}return k.key!==void 0}function ge(k,re){typeof k.ref=="string"&&en.current}function ve(k,re){{var xe=function(){$||($=!0,Le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",re))};xe.isReactWarning=!0,Object.defineProperty(k,"key",{get:xe,configurable:!0})}}function oe(k,re){{var xe=function(){j||(j=!0,Le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",re))};xe.isReactWarning=!0,Object.defineProperty(k,"ref",{get:xe,configurable:!0})}}var Ze=function(k,re,xe,Me,se,ut,Ht){var zt={$$typeof:l,type:k,key:re,ref:xe,props:Ht,_owner:ut};return zt._store={},Object.defineProperty(zt._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(zt,"_self",{configurable:!1,enumerable:!1,writable:!1,value:Me}),Object.defineProperty(zt,"_source",{configurable:!1,enumerable:!1,writable:!1,value:se}),Object.freeze&&(Object.freeze(zt.props),Object.freeze(zt)),zt};function st(k,re,xe,Me,se){{var ut,Ht={},zt=null,Tn=null;xe!==void 0&&(Ct(xe),zt=""+xe),V(re)&&(Ct(re.key),zt=""+re.key),B(re)&&(Tn=re.ref,ge(re,se));for(ut in re)jn.call(re,ut)&&!Ve.hasOwnProperty(ut)&&(Ht[ut]=re[ut]);if(k&&k.defaultProps){var An=k.defaultProps;for(ut in An)Ht[ut]===void 0&&(Ht[ut]=An[ut])}if(zt||Tn){var $n=typeof k=="function"?k.displayName||k.name||"Unknown":k;zt&&ve(Ht,$n),Tn&&oe(Ht,$n)}return Ze(k,zt,Tn,se,Me,en.current,Ht)}}var rt=he.ReactCurrentOwner,Ee=he.ReactDebugCurrentFrame;function _e(k){if(k){var re=k._owner,xe=Ln(k.type,k._source,re?re.type:null);Ee.setExtraStackFrame(xe)}else Ee.setExtraStackFrame(null)}var At;At=!1;function $t(k){return typeof k=="object"&&k!==null&&k.$$typeof===l}function fn(){{if(rt.current){var k=Oe(rt.current.type);if(k)return`

Check the render method of \``+k+"`."}return""}}function Re(k){return""}var Ft={};function Lt(k){{var re=fn();if(!re){var xe=typeof k=="string"?k:k.displayName||k.name;xe&&(re=`

Check the top-level render call using <`+xe+">.")}return re}}function Et(k,re){{if(!k._store||k._store.validated||k.key!=null)return;k._store.validated=!0;var xe=Lt(re);if(Ft[xe])return;Ft[xe]=!0;var Me="";k&&k._owner&&k._owner!==rt.current&&(Me=" It was passed a child from "+Oe(k._owner.type)+"."),_e(k),Le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',xe,Me),_e(null)}}function On(k,re){{if(typeof k!="object")return;if(vt(k))for(var xe=0;xe<k.length;xe++){var Me=k[xe];$t(Me)&&Et(Me,re)}else if($t(k))k._store&&(k._store.validated=!0);else if(k){var se=ke(k);if(typeof se=="function"&&se!==k.entries)for(var ut=se.call(k),Ht;!(Ht=ut.next()).done;)$t(Ht.value)&&Et(Ht.value,re)}}}function et(k){{var re=k.type;if(re==null||typeof re=="string")return;var xe;if(typeof re=="function")xe=re.propTypes;else if(typeof re=="object"&&(re.$$typeof===E||re.$$typeof===M))xe=re.propTypes;else return;if(xe){var Me=Oe(re);lt(xe,k.props,"prop",Me,k)}else if(re.PropTypes!==void 0&&!At){At=!0;var se=Oe(re);Le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",se||"Unknown")}typeof re.getDefaultProps=="function"&&!re.getDefaultProps.isReactClassApproved&&Le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ot(k){{for(var re=Object.keys(k.props),xe=0;xe<re.length;xe++){var Me=re[xe];if(Me!=="children"&&Me!=="key"){_e(k),Le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",Me),_e(null);break}}k.ref!==null&&(_e(k),Le("Invalid attribute `ref` supplied to `React.Fragment`."),_e(null))}}var un={};function kn(k,re,xe,Me,se,ut){{var Ht=nt(k);if(!Ht){var zt="";(k===void 0||typeof k=="object"&&k!==null&&Object.keys(k).length===0)&&(zt+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Tn=Re();Tn?zt+=Tn:zt+=fn();var An;k===null?An="null":vt(k)?An="array":k!==void 0&&k.$$typeof===l?(An="<"+(Oe(k.type)||"Unknown")+" />",zt=" Did you accidentally export a JSX literal instead of a component?"):An=typeof k,Le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",An,zt)}var $n=st(k,re,xe,se,ut);if($n==null)return $n;if(Ht){var Rr=re.children;if(Rr!==void 0)if(Me)if(vt(Rr)){for(var xa=0;xa<Rr.length;xa++)On(Rr[xa],k);Object.freeze&&Object.freeze(Rr)}else Le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else On(Rr,k)}if(jn.call(re,"key")){var ba=Oe(k),Mn=Object.keys(re).filter(function($a){return $a!=="key"}),Bt=Mn.length>0?"{key: someKey, "+Mn.join(": ..., ")+": ...}":"{key: someKey}";if(!un[ba+Bt]){var Aa=Mn.length>0?"{"+Mn.join(": ..., ")+": ...}":"{}";Le(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Bt,ba,Aa,ba),un[ba+Bt]=!0}}return k===_?Ot($n):et($n),$n}}function Nn(k,re,xe){return kn(k,re,xe,!0)}function ha(k,re,xe){return kn(k,re,xe,!1)}var Or=ha,ur=Nn;Pl.Fragment=_,Pl.jsx=Or,Pl.jsxs=ur})(),Pl}var Ty;function wb(){return Ty||(Ty=1,Jf.exports=bb()),Jf.exports}var o=wb(),Sb=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,kb={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(i)),i.textContent=Sb}var Dn=kb,Cb=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Eb={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-components-icon-transitions");i||(i=document.createElement("style"),i.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(i)),i.textContent=Cb}var Rn=Eb,Rb=({size:i=16})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",children:o.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),jb=({size:i=24,style:l={}})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",style:l,children:[o.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[o.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_list_sparkle",children:o.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Tb=({size:i=20,...l})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[o.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),o.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Mb=({size:i=24,copied:l=!1,tint:c})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",style:c?{color:c,transition:"color 0.3s ease"}:void 0,children:[o.jsxs("g",{className:`${Rn.iconState} ${l?Rn.hiddenScaled:Rn.visibleScaled}`,children:[o.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),o.jsxs("g",{className:`${Rn.iconState} ${l?Rn.visibleScaled:Rn.hiddenScaled}`,children:[o.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Db=({size:i=24,state:l="idle"})=>{const c=l==="idle",_=l==="sent",y=l==="failed",m=l==="sending";return o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("g",{className:`${Rn.iconStateFast} ${c?Rn.visibleScaled:m?Rn.sending:Rn.hiddenScaled}`,children:o.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o.jsxs("g",{className:`${Rn.iconStateFast} ${_?Rn.visibleScaled:Rn.hiddenScaled}`,children:[o.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsxs("g",{className:`${Rn.iconStateFast} ${y?Rn.visibleScaled:Rn.hiddenScaled}`,children:[o.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Lb=({size:i=24,isOpen:l=!0})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[o.jsxs("g",{className:`${Rn.iconFade} ${l?Rn.visible:Rn.hidden}`,children:[o.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsxs("g",{className:`${Rn.iconFade} ${l?Rn.hidden:Rn.visible}`,children:[o.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),o.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Ob=({size:i=24,isPaused:l=!1})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[o.jsxs("g",{className:`${Rn.iconFadeFast} ${l?Rn.hidden:Rn.visible}`,children:[o.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),o.jsx("path",{className:`${Rn.iconFadeFast} ${l?Rn.visible:Rn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Nb=({size:i=16})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Ab=({size:i=16})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:o.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),My=({size:i=16})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[o.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[o.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_2_53",children:o.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),$b=({size:i=24})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:o.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),zb=({size:i=16})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",children:[o.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Bb=({size:i=16})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",children:o.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Ib=({size:i=16})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Ub=({size:i=24})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Fb=({size:i=16})=>o.jsx("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Hb=({size:i=24})=>o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Dy=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Zf=Dy.flatMap(i=>[`:not([${i}])`,`:not([${i}] *)`]).join(""),eh="feedback-freeze-styles",th="__agentation_freeze";function Pb(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:l=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const i=window;return i[th]||(i[th]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),i[th]}var qt=Pb();typeof window<"u"&&!qt.installed&&(qt.origSetTimeout=window.setTimeout.bind(window),qt.origSetInterval=window.setInterval.bind(window),qt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(i,l,...c)=>typeof i=="string"?qt.origSetTimeout(i,l):qt.origSetTimeout((..._)=>{qt.frozen?qt.frozenTimeoutQueue.push(()=>i(..._)):i(..._)},l,...c),window.setInterval=(i,l,...c)=>typeof i=="string"?qt.origSetInterval(i,l):qt.origSetInterval((..._)=>{qt.frozen||i(..._)},l,...c),window.requestAnimationFrame=i=>qt.origRAF(l=>{qt.frozen?qt.frozenRAFQueue.push(i):i(l)}),qt.installed=!0);var gt=qt.origSetTimeout,Wb=qt.origSetInterval,As=qt.origRAF;function Yb(i){return i?Dy.some(l=>{var c;return!!((c=i.closest)!=null&&c.call(i,`[${l}]`))}):!1}function Vb(){if(typeof document>"u"||qt.frozen)return;qt.frozen=!0,qt.frozenTimeoutQueue=[],qt.frozenRAFQueue=[];let i=document.getElementById(eh);i||(i=document.createElement("style"),i.id=eh),i.textContent=`
    *${Zf},
    *${Zf}::before,
    *${Zf}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(i),qt.pausedAnimations=[];try{document.getAnimations().forEach(l=>{var _;if(l.playState!=="running")return;const c=(_=l.effect)==null?void 0:_.target;Yb(c)||(l.pause(),qt.pausedAnimations.push(l))})}catch{}document.querySelectorAll("video").forEach(l=>{l.paused||(l.dataset.wasPaused="false",l.pause())})}function Ly(){var c;if(typeof document>"u"||!qt.frozen)return;qt.frozen=!1;const i=qt.frozenTimeoutQueue;qt.frozenTimeoutQueue=[];for(const _ of i)qt.origSetTimeout(()=>{if(qt.frozen){qt.frozenTimeoutQueue.push(_);return}try{_()}catch(y){console.warn("[agentation] Error replaying queued timeout:",y)}},0);const l=qt.frozenRAFQueue;qt.frozenRAFQueue=[];for(const _ of l)qt.origRAF(y=>{if(qt.frozen){qt.frozenRAFQueue.push(_);return}_(y)});for(const _ of qt.pausedAnimations)try{_.play()}catch(y){console.warn("[agentation] Error resuming animation:",y)}qt.pausedAnimations=[],(c=document.getElementById(eh))==null||c.remove(),document.querySelectorAll("video").forEach(_=>{_.dataset.wasPaused==="false"&&(_.play().catch(()=>{}),delete _.dataset.wasPaused)})}function nh(i){if(!i)return;const l=c=>c.stopImmediatePropagation();document.addEventListener("focusin",l,!0),document.addEventListener("focusout",l,!0);try{i.focus()}finally{document.removeEventListener("focusin",l,!0),document.removeEventListener("focusout",l,!0)}}var Dc=w.forwardRef(function({element:l,timestamp:c,selectedText:_,placeholder:y="What should change?",initialValue:m="",submitLabel:f="Add",onSubmit:z,onCancel:E,onDelete:P,style:O,accentColor:M="#3c82f7",isExiting:A=!1,lightMode:H=!1,computedStyles:I},le){const[ke,he]=w.useState(m),[Le,Ie]=w.useState(!1),[G,de]=w.useState("initial"),[Ae,ae]=w.useState(!1),[mt,ot]=w.useState(!1),nt=w.useRef(null),Pe=w.useRef(null),ct=w.useRef(null),Oe=w.useRef(null);w.useEffect(()=>{A&&G!=="exit"&&de("exit")},[A,G]),w.useEffect(()=>{gt(()=>{de("enter")},0);const it=gt(()=>{de("entered")},200),Tt=gt(()=>{const Gt=nt.current;Gt&&(nh(Gt),Gt.selectionStart=Gt.selectionEnd=Gt.value.length,Gt.scrollTop=Gt.scrollHeight)},50);return()=>{clearTimeout(it),clearTimeout(Tt),ct.current&&clearTimeout(ct.current),Oe.current&&clearTimeout(Oe.current)}},[]);const Qe=w.useCallback(()=>{Oe.current&&clearTimeout(Oe.current),Ie(!0),Oe.current=gt(()=>{Ie(!1),nh(nt.current)},250)},[]);w.useImperativeHandle(le,()=>({shake:Qe}),[Qe]);const Ge=w.useCallback(()=>{de("exit"),ct.current=gt(()=>{E()},150)},[E]),Ce=w.useCallback(()=>{ke.trim()&&z(ke.trim())},[ke,z]),Ke=w.useCallback(it=>{it.stopPropagation(),!it.nativeEvent.isComposing&&(it.key==="Enter"&&!it.shiftKey&&(it.preventDefault(),Ce()),it.key==="Escape"&&Ge())},[Ce,Ge]),fe=[Dn.popup,H?Dn.light:"",G==="enter"?Dn.enter:"",G==="entered"?Dn.entered:"",G==="exit"?Dn.exit:"",Le?Dn.shake:""].filter(Boolean).join(" ");return o.jsxs("div",{ref:Pe,className:fe,"data-annotation-popup":!0,style:O,onClick:it=>it.stopPropagation(),children:[o.jsxs("div",{className:Dn.header,children:[I&&Object.keys(I).length>0?o.jsxs("button",{className:Dn.headerToggle,onClick:()=>{const it=mt;ot(!mt),it&&gt(()=>nh(nt.current),0)},type:"button",children:[o.jsx("svg",{className:`${Dn.chevron} ${mt?Dn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o.jsx("span",{className:Dn.element,children:l})]}):o.jsx("span",{className:Dn.element,children:l}),c&&o.jsx("span",{className:Dn.timestamp,children:c})]}),I&&Object.keys(I).length>0&&o.jsx("div",{className:`${Dn.stylesWrapper} ${mt?Dn.expanded:""}`,children:o.jsx("div",{className:Dn.stylesInner,children:o.jsx("div",{className:Dn.stylesBlock,children:Object.entries(I).map(([it,Tt])=>o.jsxs("div",{className:Dn.styleLine,children:[o.jsx("span",{className:Dn.styleProperty,children:it.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",o.jsx("span",{className:Dn.styleValue,children:Tt}),";"]},it))})})}),_&&o.jsxs("div",{className:Dn.quote,children:["“",_.slice(0,80),_.length>80?"...":"","”"]}),o.jsx("textarea",{ref:nt,className:Dn.textarea,style:{borderColor:Ae?M:void 0},placeholder:y,value:ke,onChange:it=>he(it.target.value),onFocus:()=>ae(!0),onBlur:()=>ae(!1),rows:2,onKeyDown:Ke}),o.jsxs("div",{className:Dn.actions,children:[P&&o.jsx("div",{className:Dn.deleteWrapper,children:o.jsx("button",{className:Dn.deleteButton,onClick:P,type:"button",children:o.jsx(Ub,{size:22})})}),o.jsx("button",{className:Dn.cancel,onClick:Ge,children:"Cancel"}),o.jsx("button",{className:Dn.submit,style:{backgroundColor:M,opacity:ke.trim()?1:.4},onClick:Ce,disabled:!ke.trim(),children:f})]})]})}),Xb=({content:i,children:l,...c})=>{const[_,y]=w.useState(!1),[m,f]=w.useState(!1),[z,E]=w.useState({top:0,right:0}),P=w.useRef(null),O=w.useRef(null),M=w.useRef(null),A=()=>{if(P.current){const le=P.current.getBoundingClientRect();E({top:le.top+le.height/2,right:window.innerWidth-le.left+8})}},H=()=>{f(!0),M.current&&(clearTimeout(M.current),M.current=null),A(),O.current=gt(()=>{y(!0)},500)},I=()=>{O.current&&(clearTimeout(O.current),O.current=null),y(!1),M.current=gt(()=>{f(!1)},150)};return w.useEffect(()=>()=>{O.current&&clearTimeout(O.current),M.current&&clearTimeout(M.current)},[]),o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:P,onMouseEnter:H,onMouseLeave:I,...c,children:l}),m&&Ry.createPortal(o.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:z.top,right:z.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:_?1:0,transition:"opacity 0.15s ease"},children:i}),document.body)]})},Qb=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,qb={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-help-tooltip-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(i)),i.textContent=Qb}var Oy=qb,qi=({content:i})=>o.jsx(Xb,{className:Oy.tooltip,content:i,children:o.jsx(Tb,{className:Oy.tooltipIcon})}),He={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Ny=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...He.navigation},{type:"header",label:"Header",...He.header},{type:"hero",label:"Hero",...He.hero},{type:"section",label:"Section",...He.section},{type:"sidebar",label:"Sidebar",...He.sidebar},{type:"footer",label:"Footer",...He.footer},{type:"modal",label:"Modal",...He.modal},{type:"banner",label:"Banner",...He.banner},{type:"drawer",label:"Drawer",...He.drawer},{type:"popover",label:"Popover",...He.popover},{type:"divider",label:"Divider",...He.divider}]},{section:"Content",items:[{type:"card",label:"Card",...He.card},{type:"text",label:"Text",...He.text},{type:"image",label:"Image",...He.image},{type:"video",label:"Video",...He.video},{type:"table",label:"Table",...He.table},{type:"grid",label:"Grid",...He.grid},{type:"list",label:"List",...He.list},{type:"chart",label:"Chart",...He.chart},{type:"codeBlock",label:"Code Block",...He.codeBlock},{type:"map",label:"Map",...He.map},{type:"timeline",label:"Timeline",...He.timeline},{type:"calendar",label:"Calendar",...He.calendar},{type:"accordion",label:"Accordion",...He.accordion},{type:"carousel",label:"Carousel",...He.carousel},{type:"logo",label:"Logo",...He.logo},{type:"faq",label:"FAQ",...He.faq},{type:"gallery",label:"Gallery",...He.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...He.button},{type:"input",label:"Input",...He.input},{type:"search",label:"Search",...He.search},{type:"form",label:"Form",...He.form},{type:"tabs",label:"Tabs",...He.tabs},{type:"dropdown",label:"Dropdown",...He.dropdown},{type:"toggle",label:"Toggle",...He.toggle},{type:"stepper",label:"Stepper",...He.stepper},{type:"rating",label:"Rating",...He.rating},{type:"fileUpload",label:"File Upload",...He.fileUpload},{type:"checkbox",label:"Checkbox",...He.checkbox},{type:"radio",label:"Radio",...He.radio},{type:"slider",label:"Slider",...He.slider},{type:"datePicker",label:"Date Picker",...He.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...He.avatar},{type:"badge",label:"Badge",...He.badge},{type:"tag",label:"Tag",...He.tag},{type:"breadcrumb",label:"Breadcrumb",...He.breadcrumb},{type:"pagination",label:"Pagination",...He.pagination},{type:"progress",label:"Progress",...He.progress},{type:"alert",label:"Alert",...He.alert},{type:"toast",label:"Toast",...He.toast},{type:"notification",label:"Notification",...He.notification},{type:"tooltip",label:"Tooltip",...He.tooltip},{type:"stat",label:"Stat",...He.stat},{type:"skeleton",label:"Skeleton",...He.skeleton},{type:"chip",label:"Chip",...He.chip},{type:"icon",label:"Icon",...He.icon},{type:"spinner",label:"Spinner",...He.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...He.pricing},{type:"testimonial",label:"Testimonial",...He.testimonial},{type:"cta",label:"CTA",...He.cta},{type:"productCard",label:"Product Card",...He.productCard},{type:"profile",label:"Profile",...He.profile},{type:"feature",label:"Feature",...He.feature},{type:"team",label:"Team",...He.team},{type:"login",label:"Login",...He.login},{type:"contact",label:"Contact",...He.contact}]}],Za={};for(const i of Ny)for(const l of i.items)Za[l.type]=l;function ie({w:i,h:l=3,strong:c}){return o.jsx("div",{style:{width:typeof i=="number"?`${i}px`:i,height:l,borderRadius:2,background:c?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function bn({w:i,h:l,radius:c=3,style:_}){return o.jsx("div",{style:{width:typeof i=="number"?`${i}px`:i,height:typeof l=="number"?`${l}px`:l,borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,..._}})}function Jr({size:i}){return o.jsx("div",{style:{width:i,height:i,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Gb({width:i,height:l}){const c=Math.max(8,l*.2);return o.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${c}px`,gap:i*.02},children:[o.jsx(bn,{w:Math.max(20,l*.5),h:Math.max(12,l*.4),radius:2}),o.jsxs("div",{style:{flex:1,display:"flex",gap:i*.03,marginLeft:i*.04},children:[o.jsx(ie,{w:i*.06}),o.jsx(ie,{w:i*.07}),o.jsx(ie,{w:i*.05}),o.jsx(ie,{w:i*.06})]}),o.jsx(bn,{w:i*.1,h:Math.min(28,l*.5),radius:4})]})}function Kb({width:i,height:l,text:c}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.05},children:[c?o.jsx("span",{style:{fontSize:Math.min(20,l*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:c}):o.jsx(ie,{w:i*.5,h:Math.max(6,l*.04),strong:!0}),o.jsx(ie,{w:i*.6}),o.jsx(ie,{w:i*.4}),o.jsx(bn,{w:Math.min(140,i*.2),h:Math.min(36,l*.12),radius:6,style:{marginTop:l*.06}})]})}function Jb({width:i,height:l}){const c=Math.max(3,Math.floor(l/36));return o.jsxs("div",{style:{padding:i*.08,display:"flex",flexDirection:"column",gap:l*.03},children:[o.jsx(ie,{w:i*.6,h:4,strong:!0}),Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx(bn,{w:10,h:10,radius:2}),o.jsx(ie,{w:i*(.4+y*17%30/100)})]},y))]})}function Zb({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(i/160)));return o.jsx("div",{style:{display:"flex",padding:`${l*.12}px ${i*.03}px`,gap:i*.05},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx(ie,{w:"60%",h:3,strong:!0}),o.jsx(ie,{w:"80%",h:2}),o.jsx(ie,{w:"70%",h:2}),o.jsx(ie,{w:"60%",h:2})]},y))})}function e5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsx(ie,{w:i*.3,h:4,strong:!0}),o.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),o.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[o.jsx(ie,{w:"90%"}),o.jsx(ie,{w:"70%"}),o.jsx(ie,{w:"80%"})]}),o.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[o.jsx(bn,{w:70,h:26,radius:4}),o.jsx(bn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function t5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),o.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[o.jsx(ie,{w:"70%",h:4,strong:!0}),o.jsx(ie,{w:"95%",h:2}),o.jsx(ie,{w:"85%",h:2}),o.jsx(ie,{w:"50%",h:2})]})]})}function n5({width:i,height:l,text:c}){if(c)return o.jsx("div",{style:{padding:4,fontSize:Math.min(14,l*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:c});const _=Math.max(2,Math.floor(l/18));return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[o.jsx(ie,{w:i*.6,h:5,strong:!0}),Array.from({length:_},(y,m)=>o.jsx(ie,{w:`${70+m*13%25}%`,h:2},m))]})}function r5({width:i,height:l}){return o.jsx("div",{style:{height:"100%",position:"relative"},children:o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,preserveAspectRatio:"none",fill:"none",children:[o.jsx("line",{x1:"0",y1:"0",x2:i,y2:l,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("line",{x1:i,y1:"0",x2:"0",y2:l,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("circle",{cx:i*.3,cy:l*.3,r:Math.min(i,l)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function a5({width:i,height:l}){const c=Math.max(2,Math.min(5,Math.floor(i/100))),_=Math.max(2,Math.min(6,Math.floor(l/32)));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:c},(y,m)=>o.jsx("div",{style:{flex:1,padding:"0 8px"},children:o.jsx(ie,{w:"70%",h:3,strong:!0})},m))}),Array.from({length:_},(y,m)=>o.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:c},(f,z)=>o.jsx("div",{style:{flex:1,padding:"0 8px"},children:o.jsx(ie,{w:`${50+(m*7+z*13)%40}%`,h:2})},z))},m))]})}function o5({width:i,height:l}){const c=Math.max(2,Math.floor(l/28));return o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsx(Jr,{size:8}),o.jsx(ie,{w:`${55+y*17%35}%`,h:2})]},y))})}function i5({width:i,height:l,text:c}){return o.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,l/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:c?o.jsx("span",{style:{fontSize:Math.min(13,l*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:c}):o.jsx(ie,{w:Math.max(20,i*.5),h:3,strong:!0})})}function s5({width:i,height:l}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[o.jsx(ie,{w:Math.min(80,i*.3),h:2}),o.jsx("div",{style:{height:Math.min(36,l*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:o.jsx(ie,{w:"40%",h:2})})]})}function l5({width:i,height:l}){const c=Math.max(2,Math.min(5,Math.floor(l/56)));return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:l*.04,padding:8},children:[Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[o.jsx(ie,{w:60+y*17%30,h:2}),o.jsx(bn,{w:"100%",h:28,radius:4})]},y)),o.jsx(bn,{w:Math.min(120,i*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function u5({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(i/120)));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(_,y)=>o.jsx("div",{style:{padding:"8px 12px",borderBottom:y===0?"2px solid var(--agd-bar-strong)":"none"},children:o.jsx(ie,{w:60,h:3,strong:y===0})},y))}),o.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[o.jsx(ie,{w:"80%",h:2}),o.jsx(ie,{w:"65%",h:2}),o.jsx(ie,{w:"75%",h:2})]})]})}function c5({width:i,height:l}){const c=Math.min(i,l)/2;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:[o.jsx("circle",{cx:i/2,cy:l/2,r:c-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),o.jsx("circle",{cx:i/2,cy:l*.38,r:c*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),o.jsx("path",{d:`M${i/2-c*.55} ${l*.78} C${i/2-c*.55} ${l*.55} ${i/2+c*.55} ${l*.55} ${i/2+c*.55} ${l*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function d5({width:i,height:l}){return o.jsx("div",{style:{height:"100%",borderRadius:l/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(ie,{w:Math.max(16,i*.5),h:2,strong:!0})})}function f5({width:i,height:l}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.08},children:[o.jsx(ie,{w:i*.5,h:Math.max(5,l*.06),strong:!0}),o.jsx(ie,{w:i*.35})]})}function h5({width:i,height:l}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:l*.04,padding:i*.04},children:[o.jsx(ie,{w:i*.3,h:4,strong:!0}),o.jsx(ie,{w:i*.7}),o.jsx(ie,{w:i*.5}),o.jsxs("div",{style:{flex:1,display:"flex",gap:i*.03,marginTop:l*.06},children:[o.jsx(bn,{w:"33%",h:"100%",radius:4}),o.jsx(bn,{w:"33%",h:"100%",radius:4}),o.jsx(bn,{w:"33%",h:"100%",radius:4})]})]})}function p5({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(i/140))),_=Math.max(1,Math.min(3,Math.floor(l/120)));return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${_}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:c*_},(y,m)=>o.jsx(bn,{w:"100%",h:"100%",radius:4},m))})}function _5({width:i,height:l}){const c=Math.max(2,Math.floor((l-32)/28));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:o.jsx(ie,{w:i*.5,h:3,strong:!0})}),o.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:c},(_,y)=>o.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:y===0?"var(--agd-fill)":"transparent"},children:o.jsx(ie,{w:`${50+y*17%35}%`,h:2,strong:y===0})},y))})]})}function m5({width:i,height:l}){const c=Math.min(i,l)/2;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:i-2,height:l-2,rx:c,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("circle",{cx:i-c,cy:l/2,r:c*.7,fill:"var(--agd-bar)"})]})}function y5({width:i,height:l}){const c=Math.min(l/2,20);return o.jsxs("div",{style:{height:"100%",borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${c*.6}px`,gap:6},children:[o.jsx(Jr,{size:Math.min(14,l*.4)}),o.jsx(ie,{w:"50%",h:2})]})}function g5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o.jsx(Jr,{size:Math.min(20,l*.5)}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:"60%",h:3,strong:!0}),o.jsx(ie,{w:"80%",h:2})]}),o.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function v5({width:i,height:l}){return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:[o.jsx("rect",{x:"0",y:"0",width:i,height:l,rx:l/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),o.jsx("rect",{x:"1",y:"1",width:i*.65,height:l-2,rx:(l-2)/2,fill:"var(--agd-bar)"})]})}function x5({width:i,height:l}){const c=Math.max(3,Math.min(7,Math.floor(i/50))),_=i/(c*2);return o.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(y,m)=>{const f=30+(m*37+17)%55;return o.jsx(bn,{w:_,h:`${f}%`,radius:2},m)})})}function b5({width:i,height:l}){const c=Math.min(i,l)*.12;return o.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx(bn,{w:"100%",h:"100%",radius:4}),o.jsx("div",{style:{position:"absolute",width:c*2,height:c*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("div",{style:{width:0,height:0,borderLeft:`${c*.6}px solid var(--agd-bar-strong)`,borderTop:`${c*.4}px solid transparent`,borderBottom:`${c*.4}px solid transparent`,marginLeft:c*.15}})})]})}function w5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(ie,{w:"60%",h:2})}),o.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function S5({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(i/80)));return o.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[y>0&&o.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),o.jsx(ie,{w:40+y*13%20,h:2,strong:y===c-1})]},y))})}function k5({width:i,height:l}){const c=Math.max(3,Math.min(5,Math.floor(i/40))),_=Math.min(28,l*.8);return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:c},(y,m)=>o.jsx(bn,{w:_,h:_,radius:4,style:m===1?{background:"var(--agd-bar)"}:void 0},m))})}function C5({width:i}){return o.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:o.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function E5({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(l/40)));return o.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:y===0?2:1},children:[o.jsx(ie,{w:`${40+y*17%25}%`,h:3,strong:!0}),o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:y===0?"▼":"▶"})]},y))})}function R5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[o.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),o.jsx(bn,{w:"100%",h:"100%",radius:4}),o.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[o.jsx(Jr,{size:5}),o.jsx(Jr,{size:5}),o.jsx(Jr,{size:5})]})]})}function j5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:l*.04},children:[o.jsx(ie,{w:i*.4,h:3,strong:!0}),o.jsx(ie,{w:i*.3,h:6,strong:!0}),o.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(c,_)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o.jsx(Jr,{size:5}),o.jsx(ie,{w:`${50+_*17%35}%`,h:2})]},_))}),o.jsx(bn,{w:i*.7,h:Math.min(32,l*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function T5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[o.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx(ie,{w:"90%",h:2}),o.jsx(ie,{w:"75%",h:2}),o.jsx(ie,{w:"60%",h:2})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx(Jr,{size:20}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[o.jsx(ie,{w:60,h:3,strong:!0}),o.jsx(ie,{w:40,h:2})]})]})]})}function M5({width:i,height:l}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.08},children:[o.jsx(ie,{w:i*.5,h:Math.max(4,l*.05),strong:!0}),o.jsx(ie,{w:i*.35}),o.jsx(bn,{w:Math.min(140,i*.25),h:Math.min(32,l*.15),radius:6,style:{marginTop:l*.04,background:"var(--agd-bar)"}})]})}function D5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:"40%",h:3,strong:!0}),o.jsx(ie,{w:"70%",h:2})]})]})}function L5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[o.jsx(ie,{w:i*.4,h:3,strong:!0}),o.jsx(bn,{w:60,h:Math.min(24,l*.6),radius:4})]})}function O5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l*.06},children:[o.jsx(ie,{w:i*.5,h:2}),o.jsx(ie,{w:i*.4,h:Math.max(8,l*.18),strong:!0}),o.jsx(ie,{w:i*.3,h:2})]})}function N5({width:i,height:l}){const c=Math.max(3,Math.min(5,Math.floor(i/100))),_=Math.min(12,l*.35);return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:c},(y,m)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[o.jsx("div",{style:{width:_,height:_,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:m===0?"var(--agd-bar)":"transparent",flexShrink:0}}),m<c-1&&o.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},m))})}function A5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[o.jsx(ie,{w:Math.max(16,i*.5),h:2,strong:!0}),o.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function $5({width:i,height:l}){const _=Math.min(l*.7,i/7.5);return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:_*.2},children:Array.from({length:5},(y,m)=>o.jsx("svg",{width:_,height:_,viewBox:"0 0 16 16",fill:"none",children:o.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:m<3?"var(--agd-bar)":"none"})},m))})}function z5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",style:{position:"absolute",inset:0},children:[o.jsx("line",{x1:0,y1:l*.3,x2:i,y2:l*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),o.jsx("line",{x1:0,y1:l*.6,x2:i,y2:l*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),o.jsx("line",{x1:i*.4,y1:0,x2:i*.6,y2:l,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),o.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:o.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[o.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),o.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function B5({width:i,height:l}){const c=Math.max(3,Math.min(5,Math.floor(l/60)));return o.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[o.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[o.jsx(Jr,{size:8}),y<c-1&&o.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},y))}),o.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:`${35+y*13%25}%`,h:3,strong:!0}),o.jsx(ie,{w:`${50+y*17%30}%`,h:2})]},y))})]})}function I5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l*.06},children:[o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),o.jsx(ie,{w:i*.4,h:2}),o.jsx(ie,{w:i*.25,h:2})]})}function U5({width:i,height:l}){const c=Math.max(3,Math.min(8,Math.floor(l/20)));return o.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[o.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[o.jsx(Jr,{size:6}),o.jsx(Jr,{size:6}),o.jsx(Jr,{size:6})]}),Array.from({length:c},(_,y)=>o.jsx("div",{style:{display:"flex",gap:6,paddingLeft:y>0&&y<c-1?12:0},children:o.jsx(ie,{w:`${25+y*23%50}%`,h:2,strong:y===0})},y))]})}function F5({width:i,height:l}){const y=Math.min((i-16)/7,(l-40)/6);return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),o.jsx(ie,{w:i*.3,h:3,strong:!0}),o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(m,f)=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:y*.6},children:o.jsx(ie,{w:y*.5,h:2})},`h${f}`)),Array.from({length:35},(m,f)=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:y},children:o.jsx("div",{style:{width:y*.6,height:y*.6,borderRadius:"50%",background:f===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:f===12?1:.3}})})},f))]})]})}function H5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o.jsx(Jr,{size:Math.min(32,l*.55)}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:"50%",h:3,strong:!0}),o.jsx(ie,{w:"75%",h:2})]}),o.jsx(ie,{w:30,h:2})]})}function P5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),o.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[o.jsx(ie,{w:"65%",h:4,strong:!0}),o.jsx(ie,{w:"40%",h:3}),o.jsx("div",{style:{flex:1}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsx(ie,{w:"30%",h:5,strong:!0}),o.jsx(bn,{w:Math.min(70,i*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function W5({width:i,height:l}){const c=Math.min(48,l*.3);return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l*.06},children:[o.jsx(Jr,{size:c}),o.jsx(ie,{w:i*.45,h:4,strong:!0}),o.jsx(ie,{w:i*.3,h:2}),o.jsxs("div",{style:{display:"flex",gap:i*.08,marginTop:l*.04},children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(ie,{w:20,h:3,strong:!0}),o.jsx(ie,{w:28,h:2})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(ie,{w:20,h:3,strong:!0}),o.jsx(ie,{w:28,h:2})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(ie,{w:20,h:3,strong:!0}),o.jsx(ie,{w:28,h:2})]})]})]})}function Y5({width:i,height:l}){const c=Math.max(i*.6,80),_=Math.max(3,Math.floor(l/40));return o.jsxs("div",{style:{height:"100%",display:"flex"},children:[o.jsx("div",{style:{width:i-c,background:"var(--agd-fill)",opacity:.3}}),o.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:i*.04},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:l*.06},children:[o.jsx(ie,{w:c*.4,h:4,strong:!0}),o.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:_},(y,m)=>o.jsx("div",{style:{padding:"6px 0"},children:o.jsx(ie,{w:`${50+m*17%35}%`,h:2,strong:m===0})},m))]})]})}function V5({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[o.jsx(ie,{w:"70%",h:3,strong:!0}),o.jsx(ie,{w:"90%",h:2}),o.jsx(ie,{w:"60%",h:2})]}),o.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function X5({width:i,height:l}){const c=Math.min(l*.7,i*.3);return o.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:i*.08},children:[o.jsx(bn,{w:c,h:c,radius:c*.25}),o.jsx(ie,{w:i*.45,h:Math.max(4,l*.2),strong:!0})]})}function Q5({width:i,height:l}){const c=Math.max(2,Math.min(5,Math.floor(l/56)));return o.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:y===0?2:1},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),o.jsx(ie,{w:i*(.3+y*13%25/100),h:3,strong:!0})]}),o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:y===0?"▼":"▶"})]},y))})}function q5({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(i/120))),_=Math.max(1,Math.min(3,Math.floor(l/120)));return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${_}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:c*_},(y,m)=>o.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:o.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[o.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),o.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},m))})}function G5({width:i,height:l}){const c=Math.min(i,l);return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:[o.jsx("rect",{x:"1",y:(l-c+2)/2,width:c-2,height:c-2,rx:c*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o.jsx("path",{d:`M${c*.25} ${l/2}l${c*.2} ${c*.2} ${c*.3}-${c*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function K5({width:i,height:l}){const c=Math.min(i,l)/2-1;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:[o.jsx("circle",{cx:i/2,cy:l/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o.jsx("circle",{cx:i/2,cy:l/2,r:c*.45,fill:"var(--agd-bar)"})]})}function J5({width:i,height:l}){const c=Math.max(2,l*.12),_=Math.min(l*.35,10),y=i*.55;return o.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[o.jsx("div",{style:{width:"100%",height:c,borderRadius:c/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:o.jsx("div",{style:{width:y,height:"100%",borderRadius:c/2,background:"var(--agd-bar)"}})}),o.jsx("div",{style:{position:"absolute",left:y-_,width:_*2,height:_*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Z5({width:i,height:l}){const c=Math.min(36,l*.15),_=7,y=4,m=Math.min((i-16)/_,(l-c-40)/(y+1));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[o.jsxs("div",{style:{height:c,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[o.jsx(ie,{w:"40%",h:2}),o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),o.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[o.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),o.jsx(ie,{w:i*.25,h:2,strong:!0}),o.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${_}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:_*y},(f,z)=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:m},children:o.jsx("div",{style:{width:m*.5,height:m*.5,borderRadius:"50%",background:z===10?"var(--agd-bar)":"transparent"},children:o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:z===10?1:.25}})})})},z))})]})]})}function ew({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:l*.08,padding:4},children:[o.jsx("div",{style:{width:"100%",height:l*.2,borderRadius:4,background:"var(--agd-fill)"}}),o.jsx("div",{style:{width:"70%",height:Math.max(6,l*.1),borderRadius:3,background:"var(--agd-fill)"}}),o.jsx("div",{style:{width:"90%",height:Math.max(4,l*.06),borderRadius:3,background:"var(--agd-fill)"}}),o.jsx("div",{style:{width:"50%",height:Math.max(4,l*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function tw({width:i,height:l}){return o.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:o.jsxs("div",{style:{height:"100%",flex:1,borderRadius:l/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${l*.3}px`,gap:4},children:[o.jsx(ie,{w:"60%",h:2,strong:!0}),o.jsx("div",{style:{width:Math.max(6,l*.3),height:Math.max(6,l*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function nw({width:i,height:l}){const c=Math.min(i,l);return o.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:o.jsx("path",{d:`M${i/2} ${(l-c)/2+c*.1}l${c*.12} ${c*.25} ${c*.28} ${c*.04}-${c*.2} ${c*.2} ${c*.05} ${c*.28}-${c*.25}-${c*.12}-${c*.25} ${c*.12} ${c*.05}-${c*.28}-${c*.2}-${c*.2} ${c*.28}-${c*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function rw({width:i,height:l}){const c=Math.min(i,l)/2-2;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${l}`,fill:"none",children:[o.jsx("circle",{cx:i/2,cy:l/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),o.jsx("path",{d:`M${i/2} ${l/2-c}a${c} ${c} 0 0 1 ${c} ${c}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function aw({width:i,height:l}){const c=Math.min(36,l*.25,i*.12),_=Math.max(1,Math.min(3,Math.floor(l/80)));return o.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:_},(y,m)=>o.jsxs("div",{style:{display:"flex",gap:i*.04,alignItems:"flex-start"},children:[o.jsx(bn,{w:c,h:c,radius:c*.25}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx(ie,{w:`${40+m*13%20}%`,h:3,strong:!0}),o.jsx(ie,{w:`${60+m*17%25}%`,h:2})]})]},m))})}function ow({width:i,height:l}){const c=Math.max(2,Math.min(4,Math.floor(i/120))),_=Math.min(36,l*.25);return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:l*.06,padding:l*.06},children:[o.jsx(ie,{w:i*.3,h:4,strong:!0}),o.jsx("div",{style:{display:"flex",gap:i*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:c},(y,m)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[o.jsx(Jr,{size:_}),o.jsx(ie,{w:i*.12,h:3,strong:!0}),o.jsx(ie,{w:i*.08,h:2})]},m))})]})}function iw({width:i,height:l}){const c=Math.max(2,Math.min(3,Math.floor(l/80)));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:i*.06,gap:l*.04},children:[o.jsx(ie,{w:i*.5,h:Math.max(5,l*.04),strong:!0}),o.jsx(ie,{w:i*.35,h:2}),o.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:l*.03,marginTop:l*.04},children:Array.from({length:c},(_,y)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:Math.min(60,i*.2),h:2}),o.jsx(bn,{w:"100%",h:Math.min(32,l*.1),radius:4})]},y))}),o.jsx(bn,{w:"100%",h:Math.min(36,l*.12),radius:6,style:{marginTop:l*.03,background:"var(--agd-bar)"}}),o.jsx(ie,{w:i*.4,h:2})]})}function sw({width:i,height:l}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:i*.04,gap:l*.03},children:[o.jsx(ie,{w:i*.4,h:4,strong:!0}),o.jsx(ie,{w:i*.6,h:2}),o.jsxs("div",{style:{display:"flex",gap:6,marginTop:l*.03},children:[o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:50,h:2}),o.jsx(bn,{w:"100%",h:Math.min(28,l*.1),radius:4})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:40,h:2}),o.jsx(bn,{w:"100%",h:Math.min(28,l*.1),radius:4})]})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx(ie,{w:50,h:2}),o.jsx(bn,{w:"100%",h:Math.min(28,l*.1),radius:4})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[o.jsx(ie,{w:60,h:2}),o.jsx(bn,{w:"100%",h:"100%",radius:4})]}),o.jsx(bn,{w:Math.min(120,i*.3),h:Math.min(30,l*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var lw={navigation:Gb,hero:Kb,sidebar:Jb,footer:Zb,modal:e5,card:t5,text:n5,image:r5,table:a5,list:o5,button:i5,input:s5,form:l5,tabs:u5,avatar:c5,badge:d5,header:f5,section:h5,grid:p5,dropdown:_5,toggle:m5,search:y5,toast:g5,progress:v5,chart:x5,video:b5,tooltip:w5,breadcrumb:S5,pagination:k5,divider:C5,accordion:E5,carousel:R5,pricing:j5,testimonial:T5,cta:M5,alert:D5,banner:L5,stat:O5,stepper:N5,tag:A5,rating:$5,map:z5,timeline:B5,fileUpload:I5,codeBlock:U5,calendar:F5,notification:H5,productCard:P5,profile:W5,drawer:Y5,popover:V5,logo:X5,faq:Q5,gallery:q5,checkbox:G5,radio:K5,slider:J5,datePicker:Z5,skeleton:ew,chip:tw,icon:nw,spinner:rw,feature:aw,team:ow,login:iw,contact:sw};function uw({type:i,width:l,height:c,text:_}){const y=lw[i];return y?o.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:o.jsx(y,{width:l,height:c,text:_})}):o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:i})})}var cw=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,dw={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-design-mode-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(i)),i.textContent=cw}var te=dw,$s=24,Lc=5;function Ay(i,l,c,_,y){let m=1/0,f=1/0;const z=i.x,E=i.x+i.width,P=i.x+i.width/2,O=i.y,M=i.y+i.height,A=i.y+i.height/2,H=!_,I=H?[z,E,P]:[..._.left?[z]:[],..._.right?[E]:[]],le=H?[O,M,A]:[..._.top?[O]:[],..._.bottom?[M]:[]],ke=[];for(const Pe of l)c.has(Pe.id)||ke.push(Pe);y&&ke.push(...y);for(const Pe of ke){const ct=Pe.x,Oe=Pe.x+Pe.width,Qe=Pe.x+Pe.width/2,Ge=Pe.y,Ce=Pe.y+Pe.height,Ke=Pe.y+Pe.height/2;for(const fe of I)for(const it of[ct,Oe,Qe]){const Tt=it-fe;Math.abs(Tt)<Lc&&Math.abs(Tt)<Math.abs(m)&&(m=Tt)}for(const fe of le)for(const it of[Ge,Ce,Ke]){const Tt=it-fe;Math.abs(Tt)<Lc&&Math.abs(Tt)<Math.abs(f)&&(f=Tt)}}const he=Math.abs(m)<Lc?m:0,Le=Math.abs(f)<Lc?f:0,Ie=[],G=new Set,de=z+he,Ae=E+he,ae=P+he,mt=O+Le,ot=M+Le,nt=A+Le;for(const Pe of ke){const ct=Pe.x,Oe=Pe.x+Pe.width,Qe=Pe.x+Pe.width/2,Ge=Pe.y,Ce=Pe.y+Pe.height,Ke=Pe.y+Pe.height/2;for(const fe of[ct,Qe,Oe])for(const it of[de,ae,Ae])if(Math.abs(it-fe)<.5){const Tt=`x:${Math.round(fe)}`;G.has(Tt)||(G.add(Tt),Ie.push({axis:"x",pos:fe}))}for(const fe of[Ge,Ke,Ce])for(const it of[mt,nt,ot])if(Math.abs(it-fe)<.5){const Tt=`y:${Math.round(fe)}`;G.has(Tt)||(G.add(Tt),Ie.push({axis:"y",pos:fe}))}}return{dx:he,dy:Le,guides:Ie}}function $y(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function fw({placements:i,onChange:l,activeComponent:c,onActiveComponentChange:_,isDarkMode:y,exiting:m,onInteractionChange:f,className:z,passthrough:E,extraSnapRects:P,onSelectionChange:O,deselectSignal:M,onDragMove:A,onDragEnd:H,clearSignal:I,wireframe:le}){const[ke,he]=w.useState(new Set),[Le,Ie]=w.useState(null),[G,de]=w.useState(null),[Ae,ae]=w.useState(null),[mt,ot]=w.useState([]),[nt,Pe]=w.useState(null),[ct,Oe]=w.useState(!1),Qe=w.useRef(!1),[Ge,Ce]=w.useState(new Set),Ke=w.useRef(new Map),fe=w.useRef(null),it=w.useRef(null),Tt=w.useRef(i);Tt.current=i;const Gt=w.useRef(O);Gt.current=O;const tn=w.useRef(A);tn.current=A;const wn=w.useRef(H);wn.current=H;const Xn=w.useRef(M);w.useEffect(()=>{M!==Xn.current&&(Xn.current=M,he(new Set))},[M]);const tr=w.useRef(I);w.useEffect(()=>{if(I!==void 0&&I!==tr.current){tr.current=I;const K=new Set(Tt.current.map(Ue=>Ue.id));K.size>0&&(Ce(K),he(new Set),it.current=null,gt(()=>{l([]),Ce(new Set)},180))}},[I,l]),w.useEffect(()=>{const K=Ue=>{const lt=Ue.target;if(!(lt.tagName==="INPUT"||lt.tagName==="TEXTAREA"||lt.isContentEditable)){if((Ue.key==="Backspace"||Ue.key==="Delete")&&ke.size>0){Ue.preventDefault();const vt=new Set(ke);Ce(vt),he(new Set),gt(()=>{l(Tt.current.filter(ft=>!vt.has(ft.id))),Ce(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Ue.key)&&ke.size>0){Ue.preventDefault();const vt=Ue.shiftKey?20:1,ft=Ue.key==="ArrowLeft"?-vt:Ue.key==="ArrowRight"?vt:0,Dt=Ue.key==="ArrowUp"?-vt:Ue.key==="ArrowDown"?vt:0;l(i.map(Je=>ke.has(Je.id)?{...Je,x:Math.max(0,Je.x+ft),y:Math.max(0,Je.y+Dt)}:Je));return}if(Ue.key==="Escape"){c?_(null):ke.size>0&&he(new Set);return}}};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[ke,c,i,l,_]);const mr=w.useCallback(K=>{if(K.button!==0||E||K.target.closest(`.${te.placement}`))return;K.preventDefault(),K.stopPropagation();const lt=window.scrollY,Ye=K.clientX,vt=K.clientY;if(c){it.current="place",f==null||f(!0);let ft=!1,Dt=Ye,Je=vt;const Ct=Ve=>{Dt=Ve.clientX,Je=Ve.clientY;const $=Math.abs(Dt-Ye),j=Math.abs(Je-vt);if(($>5||j>5)&&(ft=!0),ft){const B=Math.min(Ye,Dt),V=Math.min(vt,Je),ge=Math.abs(Dt-Ye),ve=Math.abs(Je-vt);Ie({x:B,y:V,w:ge,h:ve}),ae({x:Ve.clientX+12,y:Ve.clientY+12,text:`${Math.round(ge)} × ${Math.round(ve)}`})}},en=Ve=>{window.removeEventListener("mousemove",Ct),window.removeEventListener("mouseup",en),Ie(null),ae(null),it.current=null,f==null||f(!1);const $=He[c];let j,B,V,ge;ft?(j=Math.min(Ye,Dt),B=Math.min(vt,Je)+lt,V=Math.max($s,Math.abs(Dt-Ye)),ge=Math.max($s,Math.abs(Je-vt))):(V=$.width,ge=$.height,j=Ye-V/2,B=vt+lt-ge/2),j=Math.max(0,j),B=Math.max(0,B);const ve={id:$y(),type:c,x:j,y:B,width:V,height:ge,scrollY:lt,timestamp:Date.now()},oe=[...i,ve];l(oe),he(new Set([ve.id])),_(null)};window.addEventListener("mousemove",Ct),window.addEventListener("mouseup",en)}else{K.shiftKey||he(new Set),it.current="select";let ft=!1;const Dt=Ct=>{const en=Math.abs(Ct.clientX-Ye),Ve=Math.abs(Ct.clientY-vt);if((en>4||Ve>4)&&(ft=!0),ft){const $=Math.min(Ye,Ct.clientX),j=Math.min(vt,Ct.clientY);de({x:$,y:j,w:Math.abs(Ct.clientX-Ye),h:Math.abs(Ct.clientY-vt)})}},Je=Ct=>{if(window.removeEventListener("mousemove",Dt),window.removeEventListener("mouseup",Je),it.current=null,ft){const en=Math.min(Ye,Ct.clientX),Ve=Math.min(vt,Ct.clientY)+lt,$=Math.abs(Ct.clientX-Ye),j=Math.abs(Ct.clientY-vt),B=new Set(K.shiftKey?ke:new Set);for(const V of i)V.y-lt,V.x+V.width>en&&V.x<en+$&&V.y+V.height>Ve&&V.y<Ve+j&&B.add(V.id);he(B)}de(null)};window.addEventListener("mousemove",Dt),window.addEventListener("mouseup",Je)}},[c,E,i,l,ke]),Sn=w.useCallback((K,Ue)=>{var ve;if(K.button!==0)return;const lt=K.target;if(lt.closest(`.${te.handle}`)||lt.closest(`.${te.deleteButton}`))return;K.preventDefault(),K.stopPropagation();let Ye;K.shiftKey?(Ye=new Set(ke),Ye.has(Ue)?Ye.delete(Ue):Ye.add(Ue)):ke.has(Ue)?Ye=new Set(ke):Ye=new Set([Ue]),he(Ye),(Ye.size!==ke.size||[...Ye].some(oe=>!ke.has(oe)))&&((ve=Gt.current)==null||ve.call(Gt,Ye,K.shiftKey));const ft=K.clientX,Dt=K.clientY,Je=new Map;for(const oe of i)Ye.has(oe.id)&&Je.set(oe.id,{x:oe.x,y:oe.y});it.current="move",f==null||f(!0);let Ct=!1,en=!1,Ve=i,$=0,j=0;const B=new Map;for(const oe of i)Je.has(oe.id)&&B.set(oe.id,{w:oe.width,h:oe.height});const V=oe=>{var On;const Ze=oe.clientX-ft,st=oe.clientY-Dt;if((Math.abs(Ze)>2||Math.abs(st)>2)&&(Ct=!0),!Ct)return;if(oe.altKey&&!en){en=!0;const et=[];for(const Ot of i)Je.has(Ot.id)&&et.push({...Ot,id:$y(),timestamp:Date.now()});Ve=[...i,...et]}let rt=1/0,Ee=1/0,_e=-1/0,At=-1/0;for(const[et,Ot]of Je){const un=B.get(et);un&&(rt=Math.min(rt,Ot.x+Ze),Ee=Math.min(Ee,Ot.y+st),_e=Math.max(_e,Ot.x+Ze+un.w),At=Math.max(At,Ot.y+st+un.h))}const $t={x:rt,y:Ee,width:_e-rt,height:At-Ee},{dx:fn,dy:Re,guides:Ft}=Ay($t,Ve,new Set(Je.keys()),void 0,P);ot(Ft);const Lt=Ze+fn,Et=st+Re;$=Lt,j=Et,l(Ve.map(et=>{const Ot=Je.get(et.id);return Ot?{...et,x:Math.max(0,Ot.x+Lt),y:Math.max(0,Ot.y+Et)}:et})),(On=tn.current)==null||On.call(tn,Lt,Et)},ge=()=>{var oe;window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",ge),it.current=null,f==null||f(!1),ot([]),(oe=wn.current)==null||oe.call(wn,$,j,Ct)};window.addEventListener("mousemove",V),window.addEventListener("mouseup",ge)},[ke,i,l,f]),Gn=w.useCallback((K,Ue,lt)=>{K.preventDefault(),K.stopPropagation();const Ye=i.find(B=>B.id===Ue);if(!Ye)return;he(new Set([Ue])),it.current="resize",f==null||f(!0);const vt=K.clientX,ft=K.clientY,Dt=Ye.width,Je=Ye.height,Ct=Ye.x,en=Ye.y,Ve={left:lt.includes("w"),right:lt.includes("e"),top:lt.includes("n"),bottom:lt.includes("s")},$=B=>{const V=B.clientX-vt,ge=B.clientY-ft;let ve=Dt,oe=Je,Ze=Ct,st=en;lt.includes("e")&&(ve=Math.max($s,Dt+V)),lt.includes("w")&&(ve=Math.max($s,Dt-V),Ze=Ct+Dt-ve),lt.includes("s")&&(oe=Math.max($s,Je+ge)),lt.includes("n")&&(oe=Math.max($s,Je-ge),st=en+Je-oe);const rt={x:Ze,y:st,width:ve,height:oe},{dx:Ee,dy:_e,guides:At}=Ay(rt,Tt.current,new Set([Ue]),Ve,P);ot(At),Ee!==0&&(Ve.right?ve+=Ee:Ve.left&&(Ze+=Ee,ve-=Ee)),_e!==0&&(Ve.bottom?oe+=_e:Ve.top&&(st+=_e,oe-=_e)),l(Tt.current.map($t=>$t.id===Ue?{...$t,x:Ze,y:st,width:ve,height:oe}:$t)),ae({x:B.clientX+12,y:B.clientY+12,text:`${Math.round(ve)} × ${Math.round(oe)}`})},j=()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",j),ae(null),it.current=null,f==null||f(!1),ot([])};window.addEventListener("mousemove",$),window.addEventListener("mouseup",j)},[i,l,f]),Un=w.useCallback(K=>{it.current=null,Ce(Ue=>{const lt=new Set(Ue);return lt.add(K),lt}),he(Ue=>{const lt=new Set(Ue);return lt.delete(K),lt}),gt(()=>{l(Tt.current.filter(Ue=>Ue.id!==K)),Ce(Ue=>{const lt=new Set(Ue);return lt.delete(K),lt})},180)},[l]),Fn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},mn=w.useCallback(K=>{const Ue=i.find(lt=>lt.id===K);Ue&&(Qe.current=!!Ue.text,Pe(K),Oe(!1))},[i]),Xt=w.useCallback(()=>{nt&&(Oe(!0),gt(()=>{Pe(null),Oe(!1)},150))},[nt]);w.useEffect(()=>{m&&nt&&Xt()},[m]);const nn=w.useCallback(K=>{nt&&(l(i.map(Ue=>Ue.id===nt?{...Ue,text:K.trim()||void 0}:Ue)),Xt())},[nt,i,l,Xt]),ln=typeof window<"u"?window.scrollY:0,Ln=["nw","ne","se","sw"],jn=le?"#f97316":"#3c82f7",lr=[{dir:"n",cls:te.edgeN,arrow:o.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:o.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:jn})})},{dir:"e",cls:te.edgeE,arrow:o.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:o.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:jn})})},{dir:"s",cls:te.edgeS,arrow:o.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:o.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:jn})})},{dir:"w",cls:te.edgeW,arrow:o.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:o.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:jn})})}];return o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:fe,className:`${te.overlay} ${y?"":te.light} ${c?te.placing:""} ${E?te.passthrough:""} ${m?te.overlayExiting:""} ${le?te.wireframe:""}${z?` ${z}`:""}`,"data-feedback-toolbar":!0,onMouseDown:mr,children:i.map(K=>{var vt;const Ue=ke.has(K.id),lt=((vt=Za[K.type])==null?void 0:vt.label)||K.type,Ye=K.y-ln;return o.jsxs("div",{"data-design-placement":K.id,className:`${te.placement} ${Ue?te.selected:""} ${Ge.has(K.id)?te.exiting:""}`,style:{left:K.x,top:Ye,width:K.width,height:K.height,position:"fixed"},onMouseDown:ft=>Sn(ft,K.id),onDoubleClick:()=>mn(K.id),children:[o.jsx("span",{className:te.placementLabel,children:lt}),o.jsx("span",{className:`${te.placementAnnotation} ${K.text?te.annotationVisible:""}`,children:(K.text&&Ke.current.set(K.id,K.text),K.text||Ke.current.get(K.id)||"")}),o.jsx("div",{className:te.placementContent,children:o.jsx(uw,{type:K.type,width:K.width,height:K.height,text:K.text})}),o.jsx("div",{className:te.deleteButton,onMouseDown:ft=>ft.stopPropagation(),onClick:()=>Un(K.id),children:"✕"}),Ln.map(ft=>o.jsx("div",{className:`${te.handle} ${te[`handle${ft.charAt(0).toUpperCase()}${ft.slice(1)}`]}`,onMouseDown:Dt=>Gn(Dt,K.id,ft)},ft)),lr.map(({dir:ft,cls:Dt,arrow:Je})=>o.jsx("div",{className:`${te.edgeHandle} ${Dt}`,onMouseDown:Ct=>Gn(Ct,K.id,ft),children:Je},ft))]},K.id)})}),nt&&(()=>{var en;const K=i.find(Ve=>Ve.id===nt);if(!K)return null;const Ue=K.y-ln,lt=K.x+K.width/2,Ye=Ue-8,vt=Ue+K.height+8,ft=Ye>200,Dt=vt<window.innerHeight-100,Je=Math.max(160,Math.min(window.innerWidth-160,lt));let Ct;return ft?Ct={left:Je,bottom:window.innerHeight-Ye}:Dt?Ct={left:Je,top:vt}:Ct={left:Je,top:Math.max(80,window.innerHeight/2-80)},o.jsx(Dc,{element:((en=Za[K.type])==null?void 0:en.label)||K.type,placeholder:Fn[K.type]||"Label or content text",initialValue:K.text??"",submitLabel:Qe.current?"Save":"Set",onSubmit:nn,onCancel:Xt,onDelete:Qe.current?()=>{nn("")}:void 0,isExiting:ct,lightMode:!y,style:Ct})})(),Le&&o.jsx("div",{className:te.drawBox,style:{left:Le.x,top:Le.y,width:Le.w,height:Le.h},"data-feedback-toolbar":!0}),G&&o.jsx("div",{className:te.selectBox,style:{left:G.x,top:G.y,width:G.w,height:G.h},"data-feedback-toolbar":!0}),Ae&&o.jsx("div",{className:te.sizeIndicator,style:{left:Ae.x,top:Ae.y},"data-feedback-toolbar":!0,children:Ae.text}),mt.map((K,Ue)=>o.jsx("div",{className:te.guideLine,style:K.axis==="x"?{position:"fixed",left:K.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:K.pos-ln,right:0,height:1},"data-feedback-toolbar":!0},`${K.axis}-${K.pos}-${Ue}`))]})}function hw(i){if(!i)return"";const l=i.scrollTop>2,c=i.scrollTop+i.clientHeight<i.scrollHeight-2;return`${l?te.fadeTop:""} ${c?te.fadeBottom:""}`}var b="currentColor",ee="0.5";function pw({type:i}){switch(i){case"navigation":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:b,opacity:".4"}),o.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"})]});case"header":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:b,opacity:".35"}),o.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:b,opacity:".15"})]});case"hero":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".35"}),o.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:b,strokeWidth:ee})]});case"section":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".15"})]});case"sidebar":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:b,opacity:".15"})]});case"footer":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:b,opacity:".2"})]});case"modal":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:b,strokeWidth:ee})]});case"divider":return o.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:o.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:b,strokeWidth:"0.5",opacity:".3"})});case"card":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:b,opacity:".04"}),o.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".12"})]});case"text":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"image":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"video":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:b,strokeWidth:ee,fill:b,opacity:".15"})]});case"table":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:b,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:b,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"grid":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:ee})]});case"list":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".2"})]});case"chart":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:b,opacity:".2"}),o.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:b,opacity:".2"})]});case"accordion":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:ee})]});case"carousel":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:b,strokeWidth:ee,opacity:".35"}),o.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:b,strokeWidth:ee,opacity:".35"}),o.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:b,opacity:".35"}),o.jsx("circle",{cx:"10",cy:"14",r:".6",fill:b,opacity:".15"}),o.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:b,opacity:".15"})]});case"button":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"})]});case"input":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"search":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"form":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:b,strokeWidth:ee})]});case"tabs":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:ee})]});case"dropdown":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:b,strokeWidth:ee,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"13",cy:"8",r:"2",fill:b,opacity:".3"})]});case"avatar":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:b,strokeWidth:ee}),o.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:b,strokeWidth:ee})]});case"badge":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"})]});case"breadcrumb":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".3"}),o.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:b,strokeWidth:ee,opacity:".2"}),o.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("path",{d:"M14 7l1 1-1 1",stroke:b,strokeWidth:ee,opacity:".2"}),o.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:b,opacity:".15"})]});case"pagination":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:b,opacity:".15",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:ee})]});case"progress":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:b,opacity:".2"})]});case"toast":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"tooltip":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:b,strokeWidth:ee})]});case"pricing":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),o.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),o.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:b,opacity:".2"})]});case"testimonial":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:b,opacity:".2",fontFamily:"serif",children:"“"}),o.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".12"}),o.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:b,strokeWidth:ee,opacity:".25"}),o.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:b,opacity:".15"})]});case"cta":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:b,strokeWidth:ee})]});case"alert":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:b,strokeWidth:"0.6",opacity:".5"}),o.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:b,opacity:".5"}),o.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".2"})]});case"banner":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:b,strokeWidth:ee})]});case"stat":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:b,opacity:".3"}),o.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"stepper":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"4",cy:"8",r:"2",fill:b,opacity:".2",stroke:b,strokeWidth:ee}),o.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),o.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:b,strokeWidth:ee}),o.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),o.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:b,strokeWidth:ee})]});case"tag":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:b,strokeWidth:ee,opacity:".2"}),o.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:b,strokeWidth:ee,opacity:".2"})]});case"rating":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:b,opacity:".25"}),o.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:b,opacity:".25"}),o.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:b,strokeWidth:ee,opacity:".25"})]});case"map":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:b,strokeWidth:".3",opacity:".15"}),o.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:b,strokeWidth:".3",opacity:".15"}),o.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:b,opacity:".15",stroke:b,strokeWidth:ee})]});case"timeline":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:b,strokeWidth:".4",opacity:".25"}),o.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:b,opacity:".2",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:b,opacity:".15"})]});case"fileUpload":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:ee,strokeDasharray:"2 1"}),o.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"})]});case"codeBlock":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"4",cy:"4",r:".6",fill:b,opacity:".3"}),o.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:b,opacity:".3"}),o.jsx("circle",{cx:"7",cy:"4",r:".6",fill:b,opacity:".3"}),o.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"calendar":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:b,strokeWidth:".4",opacity:".25"}),o.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),o.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),o.jsx("circle",{cx:"7",cy:"9",r:".6",fill:b,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"9",r:".6",fill:b,opacity:".2"}),o.jsx("circle",{cx:"13",cy:"9",r:".6",fill:b,opacity:".3"}),o.jsx("circle",{cx:"7",cy:"12",r:".6",fill:b,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"12",r:".6",fill:b,opacity:".2"})]});case"notification":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:b,strokeWidth:ee,opacity:".25"}),o.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:b,opacity:".12"}),o.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:b,opacity:".25"})]});case"productCard":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:b,opacity:".04"}),o.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:b,strokeWidth:ee})]});case"profile":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"drawer":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:ee,opacity:".15"})]});case"popover":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:b,strokeWidth:ee})]});case"logo":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:b,strokeWidth:ee}),o.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:b,strokeWidth:ee,opacity:".3"}),o.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:b,opacity:".12"})]});case"faq":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),o.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:b,opacity:".12"}),o.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),o.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"gallery":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:ee})]});case"checkbox":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:b,strokeWidth:ee,opacity:".35"})]});case"radio":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:b,strokeWidth:ee}),o.jsx("circle",{cx:"10",cy:"8",r:"2",fill:b,opacity:".3"})]});case"slider":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:b,strokeWidth:ee})]});case"datePicker":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:b,opacity:".12"}),o.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:b,strokeWidth:ee,strokeDasharray:"2 1",opacity:".3"}),o.jsx("circle",{cx:"6",cy:"10",r:".6",fill:b,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"10",r:".6",fill:b,opacity:".3"}),o.jsx("circle",{cx:"14",cy:"10",r:".6",fill:b,opacity:".2"}),o.jsx("circle",{cx:"6",cy:"13",r:".6",fill:b,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"13",r:".6",fill:b,opacity:".2"})]});case"skeleton":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:b,opacity:".08"}),o.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:b,opacity:".08"}),o.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:b,opacity:".08"})]});case"chip":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:b,opacity:".08",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),o.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:b,strokeWidth:ee,opacity:".2"}),o.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:b,strokeWidth:ee,opacity:".2"}),o.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:b,strokeWidth:ee,opacity:".25"})]});case"icon":return o.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:o.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:b,strokeWidth:ee,opacity:".3"})});case"spinner":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:b,strokeWidth:ee,opacity:".12"}),o.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:b,strokeWidth:ee,opacity:".35",strokeLinecap:"round"})]});case"feature":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:b,strokeWidth:ee,opacity:".25"}),o.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"}),o.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"team":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:b,strokeWidth:ee,opacity:".5"}),o.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),o.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:b,opacity:".1"})]});case"login":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),o.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:b,opacity:".2"})]});case"contact":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),o.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:b,strokeWidth:ee}),o.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:b,opacity:".2"})]});default:return null}}function _w({activeType:i,onSelect:l,onDragStart:c,scrollRef:_,fadeClass:y,blankCanvas:m}){return o.jsx("div",{ref:_,className:`${te.placeScroll} ${y||""}`,children:Ny.map(f=>o.jsxs("div",{className:te.paletteSection,children:[o.jsx("div",{className:te.paletteSectionTitle,children:f.section}),f.items.map(z=>o.jsxs("div",{className:`${te.paletteItem} ${i===z.type?te.active:""} ${m?te.wireframe:""}`,onClick:()=>l(z.type),onMouseDown:E=>{E.button===0&&c(z.type,E)},children:[o.jsx("div",{className:te.paletteItemIcon,children:o.jsx(pw,{type:z.type})}),o.jsx("span",{className:te.paletteItemLabel,children:z.label})]},z.type))]},f.section))})}function mw({value:i,suffix:l}){const[c,_]=w.useState(null),[y,m]=w.useState(l),[f,z]=w.useState("up"),E=w.useRef(i),P=w.useRef(l),O=w.useRef(),M=c!==null&&y!==l;return w.useEffect(()=>{if(i!==E.current){if(i===0){E.current=i,P.current=l,_(null);return}z(i>E.current?"up":"down"),_(E.current),m(P.current),E.current=i,P.current=l,clearTimeout(O.current),O.current=gt(()=>_(null),250)}else P.current=l},[i,l]),c===null?o.jsxs(o.Fragment,{children:[i,l?` ${l}`:""]}):M?o.jsxs("span",{className:te.rollingWrap,children:[o.jsxs("span",{style:{visibility:"hidden"},children:[i," ",l]}),o.jsxs("span",{className:`${te.rollingNum} ${f==="up"?te.exitUp:te.exitDown}`,children:[c," ",y]},`o${c}-${i}`),o.jsxs("span",{className:`${te.rollingNum} ${f==="up"?te.enterUp:te.enterDown}`,children:[i," ",l]},`n${i}`)]}):o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:te.rollingWrap,children:[o.jsx("span",{style:{visibility:"hidden"},children:i}),o.jsx("span",{className:`${te.rollingNum} ${f==="up"?te.exitUp:te.exitDown}`,children:c},`o${c}-${i}`),o.jsx("span",{className:`${te.rollingNum} ${f==="up"?te.enterUp:te.enterDown}`,children:i},`n${i}`)]}),l?` ${l}`:""]})}function yw({activeType:i,onSelect:l,isDarkMode:c,sectionCount:_,onDetectSections:y,visible:m,onExited:f,placementCount:z,onClearPlacements:E,onDragStart:P,blankCanvas:O,onBlankCanvasChange:M,wireframePurpose:A,onWireframePurposeChange:H,Tooltip:I}){const[le,ke]=w.useState(!1),[he,Le]=w.useState("exit"),[Ie,G]=w.useState(!1),[de,Ae]=w.useState(!0),ae=w.useRef(0),mt=w.useRef(""),ot=w.useRef(0),nt=w.useRef(),Pe=w.useRef(null),[ct,Oe]=w.useState("");w.useEffect(()=>(m?(ke(!0),clearTimeout(nt.current),cancelAnimationFrame(ot.current),ot.current=As(()=>{ot.current=As(()=>{Le("enter")})})):(cancelAnimationFrame(ot.current),Le("exit"),clearTimeout(nt.current),nt.current=gt(()=>{ke(!1),f==null||f()},200)),()=>cancelAnimationFrame(ot.current)),[m]);const Qe=z>0||_>0,Ge=z+_;return Ge>0&&(ae.current=Ge,mt.current=O?Ge===1?"Component":"Components":Ge===1?"Change":"Changes"),w.useEffect(()=>{if(Qe)Ie?Ae(!1):(Ae(!0),G(!0),As(()=>{As(()=>{Ae(!1)})}));else{Ae(!0);const Ce=gt(()=>G(!1),300);return()=>clearTimeout(Ce)}},[Qe]),w.useEffect(()=>{if(!le)return;const Ce=Pe.current;if(!Ce)return;const Ke=()=>Oe(hw(Ce));Ke(),Ce.addEventListener("scroll",Ke,{passive:!0});const fe=new ResizeObserver(Ke);return fe.observe(Ce),()=>{Ce.removeEventListener("scroll",Ke),fe.disconnect()}},[le]),le?o.jsxs("div",{className:`${te.palette} ${te[he]} ${c?"":te.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Ce=>Ce.stopPropagation(),onMouseDown:Ce=>Ce.stopPropagation(),onTransitionEnd:Ce=>{Ce.target===Ce.currentTarget&&(m||(clearTimeout(nt.current),ke(!1),Le("exit"),f==null||f()))},children:[o.jsxs("div",{className:te.paletteHeader,children:[o.jsx("div",{className:te.paletteHeaderTitle,children:"Layout Mode"}),o.jsxs("div",{className:te.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",o.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),o.jsxs("div",{className:`${te.canvasToggle} ${O?te.active:""}`,onClick:()=>M(!O),children:[o.jsx("span",{className:te.canvasToggleIcon,children:o.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),o.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),o.jsx("span",{className:te.canvasToggleLabel,children:"Wireframe New Page"})]}),o.jsx("div",{className:`${te.wireframePurposeWrap} ${O?"":te.collapsed}`,children:o.jsx("div",{className:te.wireframePurposeInner,children:o.jsx("textarea",{className:te.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:A,onChange:Ce=>H(Ce.target.value),rows:2})})}),o.jsx(_w,{activeType:i,onSelect:l,onDragStart:P,scrollRef:Pe,fadeClass:ct,blankCanvas:O}),Ie&&o.jsx("div",{className:`${te.paletteFooterWrap} ${de?te.footerHidden:""}`,children:o.jsx("div",{className:te.paletteFooterInner,children:o.jsx("div",{className:te.paletteFooterInnerContent,children:o.jsxs("div",{className:te.paletteFooter,children:[o.jsx("span",{className:te.paletteFooterCount,children:o.jsx(mw,{value:ae.current,suffix:mt.current})}),o.jsx("button",{className:te.paletteFooterClear,onClick:E,children:"Clear"})]})})})})]}):null}function zs(i){if(i.parentElement)return i.parentElement;const l=i.getRootNode();return l instanceof ShadowRoot?l.host:null}function Zr(i,l){let c=i;for(;c;){if(c.matches(l))return c;c=zs(c)}return null}function gw(i,l=4){const c=[];let _=i,y=0;for(;_&&y<l;){const m=_.tagName.toLowerCase();if(m==="html"||m==="body")break;let f=m;if(_.id)f=`#${_.id}`;else if(_.className&&typeof _.className=="string"){const E=_.className.split(/\s+/).find(P=>P.length>2&&!P.match(/^[a-z]{1,2}$/)&&!P.match(/[A-Z0-9]{5,}/));E&&(f=`.${E.split("_")[0]}`)}const z=zs(_);!_.parentElement&&z&&(f=`⟨shadow⟩ ${f}`),c.unshift(f),_=z,y++}return c.join(" > ")}function Bs(i){var _,y,m,f,z,E,P,O;const l=gw(i);if(i.dataset.element)return{name:i.dataset.element,path:l};const c=i.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(c)){const M=Zr(i,"svg");if(M){const A=zs(M);if(A instanceof HTMLElement)return{name:`graphic in ${Bs(A).name}`,path:l}}return{name:"graphic element",path:l}}if(c==="svg"){const M=zs(i);if((M==null?void 0:M.tagName.toLowerCase())==="button"){const A=(_=M.textContent)==null?void 0:_.trim();return{name:A?`icon in "${A}" button`:"button icon",path:l}}return{name:"icon",path:l}}if(c==="button"){const M=(y=i.textContent)==null?void 0:y.trim(),A=i.getAttribute("aria-label");return A?{name:`button [${A}]`,path:l}:{name:M?`button "${M.slice(0,25)}"`:"button",path:l}}if(c==="a"){const M=(m=i.textContent)==null?void 0:m.trim(),A=i.getAttribute("href");return M?{name:`link "${M.slice(0,25)}"`,path:l}:A?{name:`link to ${A.slice(0,30)}`,path:l}:{name:"link",path:l}}if(c==="input"){const M=i.getAttribute("type")||"text",A=i.getAttribute("placeholder"),H=i.getAttribute("name");return A?{name:`input "${A}"`,path:l}:H?{name:`input [${H}]`,path:l}:{name:`${M} input`,path:l}}if(["h1","h2","h3","h4","h5","h6"].includes(c)){const M=(f=i.textContent)==null?void 0:f.trim();return{name:M?`${c} "${M.slice(0,35)}"`:c,path:l}}if(c==="p"){const M=(z=i.textContent)==null?void 0:z.trim();return M?{name:`paragraph: "${M.slice(0,40)}${M.length>40?"...":""}"`,path:l}:{name:"paragraph",path:l}}if(c==="span"||c==="label"){const M=(E=i.textContent)==null?void 0:E.trim();return M&&M.length<40?{name:`"${M}"`,path:l}:{name:c,path:l}}if(c==="li"){const M=(P=i.textContent)==null?void 0:P.trim();return M&&M.length<40?{name:`list item: "${M.slice(0,35)}"`,path:l}:{name:"list item",path:l}}if(c==="blockquote")return{name:"blockquote",path:l};if(c==="code"){const M=(O=i.textContent)==null?void 0:O.trim();return M&&M.length<30?{name:`code: \`${M}\``,path:l}:{name:"code",path:l}}if(c==="pre")return{name:"code block",path:l};if(c==="img"){const M=i.getAttribute("alt");return{name:M?`image "${M.slice(0,30)}"`:"image",path:l}}if(c==="video")return{name:"video",path:l};if(["div","section","article","nav","header","footer","aside","main"].includes(c)){const M=i.className,A=i.getAttribute("role"),H=i.getAttribute("aria-label");if(H)return{name:`${c} [${H}]`,path:l};if(A)return{name:`${A}`,path:l};if(typeof M=="string"&&M){const I=M.split(/[\s_-]+/).map(le=>le.replace(/[A-Z0-9]{5,}.*$/,"")).filter(le=>le.length>2&&!/^[a-z]{1,2}$/.test(le)).slice(0,2);if(I.length>0)return{name:I.join(" "),path:l}}return{name:c==="div"?"container":c,path:l}}return{name:c,path:l}}function Wl(i){var m,f,z;const l=[],c=(m=i.textContent)==null?void 0:m.trim();c&&c.length<100&&l.push(c);const _=i.previousElementSibling;if(_){const E=(f=_.textContent)==null?void 0:f.trim();E&&E.length<50&&l.unshift(`[before: "${E.slice(0,40)}"]`)}const y=i.nextElementSibling;if(y){const E=(z=y.textContent)==null?void 0:z.trim();E&&E.length<50&&l.push(`[after: "${E.slice(0,40)}"]`)}return l.join(" ")}function Oc(i){const l=zs(i);if(!l)return"";const y=(i.getRootNode()instanceof ShadowRoot&&i.parentElement?Array.from(i.parentElement.children):Array.from(l.children)).filter(O=>O!==i&&O instanceof HTMLElement);if(y.length===0)return"";const m=y.slice(0,4).map(O=>{var I;const M=O.tagName.toLowerCase(),A=O.className;let H="";if(typeof A=="string"&&A){const le=A.split(/\s+/).map(ke=>ke.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(ke=>ke.length>2&&!/^[a-z]{1,2}$/.test(ke));le&&(H=`.${le}`)}if(M==="button"||M==="a"){const le=(I=O.textContent)==null?void 0:I.trim().slice(0,15);if(le)return`${M}${H} "${le}"`}return`${M}${H}`});let z=l.tagName.toLowerCase();if(typeof l.className=="string"&&l.className){const O=l.className.split(/\s+/).map(M=>M.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M));O&&(z=`.${O}`)}const E=l.children.length,P=E>m.length+1?` (${E} total in ${z})`:"";return m.join(", ")+P}function Yl(i){const l=i.className;return typeof l!="string"||!l?"":l.split(/\s+/).filter(_=>_.length>0).map(_=>{const y=_.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return y?y[1]:_}).filter((_,y,m)=>m.indexOf(_)===y).join(", ")}var zy=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),vw=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),xw=new Set(["input","textarea","select"]),bw=new Set(["img","video","canvas","svg"]),ww=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Nc(i){if(typeof window>"u")return{};const l=window.getComputedStyle(i),c={},_=i.tagName.toLowerCase();let y;vw.has(_)?y=["color","fontSize","fontWeight","fontFamily","lineHeight"]:_==="button"||_==="a"&&i.getAttribute("role")==="button"?y=["backgroundColor","color","padding","borderRadius","fontSize"]:xw.has(_)?y=["backgroundColor","color","padding","borderRadius","fontSize"]:bw.has(_)?y=["width","height","objectFit","borderRadius"]:ww.has(_)?y=["display","padding","margin","gap","backgroundColor"]:y=["color","fontSize","margin","padding","backgroundColor"];for(const m of y){const f=m.replace(/([A-Z])/g,"-$1").toLowerCase(),z=l.getPropertyValue(f);z&&!zy.has(z)&&(c[m]=z)}return c}var Sw=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ac(i){if(typeof window>"u")return"";const l=window.getComputedStyle(i),c=[];for(const _ of Sw){const y=_.replace(/([A-Z])/g,"-$1").toLowerCase(),m=l.getPropertyValue(y);m&&!zy.has(m)&&c.push(`${y}: ${m}`)}return c.join("; ")}function kw(i){if(!i)return;const l={},c=i.split(";").map(_=>_.trim()).filter(Boolean);for(const _ of c){const y=_.indexOf(":");if(y>0){const m=_.slice(0,y).trim(),f=_.slice(y+1).trim();m&&f&&(l[m]=f)}}return Object.keys(l).length>0?l:void 0}function $c(i){const l=[],c=i.getAttribute("role"),_=i.getAttribute("aria-label"),y=i.getAttribute("aria-describedby"),m=i.getAttribute("tabindex"),f=i.getAttribute("aria-hidden");return c&&l.push(`role="${c}"`),_&&l.push(`aria-label="${_}"`),y&&l.push(`aria-describedby="${y}"`),m&&l.push(`tabindex=${m}`),f==="true"&&l.push("aria-hidden"),i.matches("a, button, input, select, textarea, [tabindex]")&&l.push("focusable"),l.join(", ")}function zc(i){const l=[];let c=i;for(;c&&c.tagName.toLowerCase()!=="html";){const _=c.tagName.toLowerCase();let y=_;if(c.id)y=`${_}#${c.id}`;else if(c.className&&typeof c.className=="string"){const f=c.className.split(/\s+/).map(z=>z.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(z=>z.length>2);f&&(y=`${_}.${f}`)}const m=zs(c);!c.parentElement&&m&&(y=`⟨shadow⟩ ${y}`),l.unshift(y),c=m}return l.join(" > ")}var Cw=new Set(["nav","header","main","section","article","footer","aside"]),rh={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},By={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Ew=new Set(["script","style","noscript","link","meta"]),Rw=40;function Iy(i){let l=i;for(;l&&l!==document.body&&l!==document.documentElement;){const c=window.getComputedStyle(l).position;if(c==="fixed"||c==="sticky")return!0;l=l.parentElement}return!1}function Gi(i){const l=i.tagName.toLowerCase();if(["nav","header","footer","main"].includes(l)&&document.querySelectorAll(l).length===1)return l;if(i.id)return`#${CSS.escape(i.id)}`;if(i.className&&typeof i.className=="string"){const y=i.className.split(/\s+/).filter(m=>m.length>0).find(m=>m.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(m)&&!/^[a-z]{1,2}$/.test(m));if(y){const m=`${l}.${CSS.escape(y)}`;if(document.querySelectorAll(m).length===1)return m}}const c=i.parentElement;if(c){const y=Array.from(c.children).indexOf(i)+1;return`${c===document.body?"body":Gi(c)} > ${l}:nth-child(${y})`}return l}function Bc(i){var f;const l=i.tagName.toLowerCase(),c=i.getAttribute("aria-label");if(c)return c;const _=i.getAttribute("role");if(_&&rh[_])return rh[_];if(By[l])return By[l];const y=i.querySelector("h1, h2, h3, h4, h5, h6");if(y){const z=(f=y.textContent)==null?void 0:f.trim();if(z&&z.length<=50)return z;if(z)return z.slice(0,47)+"..."}const{name:m}=Bs(i);return m.charAt(0).toUpperCase()+m.slice(1)}function Uy(i){const l=i.className;return typeof l!="string"||!l?null:l.split(/\s+/).map(_=>_.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(_=>_.length>2&&!/^[a-z]{1,2}$/.test(_))||null}function Fy(i){var _;const l=(_=i.textContent)==null?void 0:_.trim();if(!l)return null;const c=l.replace(/\s+/g," ");return c.length<=30?c:c.slice(0,30)+"…"}function jw(){const i=document.querySelector("main")||document.body,l=Array.from(i.children);let c=l;i!==document.body&&l.length<3&&(c=Array.from(document.body.children));const _=[];return c.forEach((y,m)=>{if(!(y instanceof HTMLElement))return;const f=y.tagName.toLowerCase();if(Ew.has(f)||y.hasAttribute("data-feedback-toolbar")||y.closest("[data-feedback-toolbar]"))return;const z=window.getComputedStyle(y);if(z.display==="none"||z.visibility==="hidden")return;const E=y.getBoundingClientRect();if(E.height<Rw)return;const P=Cw.has(f),O=y.getAttribute("role")&&rh[y.getAttribute("role")],M=f==="div"&&E.height>=60;if(!P&&!O&&!M)return;const A=window.scrollY,H=Iy(y),I={x:E.x,y:H?E.y:E.y+A,width:E.width,height:E.height};_.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Bc(y),tagName:f,selector:Gi(y),role:y.getAttribute("role"),className:Uy(y),textSnippet:Fy(y),originalRect:I,currentRect:{...I},originalIndex:m,isFixed:H})}),_}function Tw(i){const l=window.scrollY,c=i.getBoundingClientRect(),_=Iy(i),y={x:c.x,y:_?c.y:c.y+l,width:c.width,height:c.height},m=i.parentElement;let f=0;return m&&(f=Array.from(m.children).indexOf(i)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Bc(i),tagName:i.tagName.toLowerCase(),selector:Gi(i),role:i.getAttribute("role"),className:Uy(i),textSnippet:Fy(i),originalRect:y,currentRect:{...y},originalIndex:f,isFixed:_}}var Hy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Py=["nw","n","ne","e","se","s","sw","w"],Ic=24,Wy=16,Uc=5;function Yy(i,l,c,_){let y=1/0,m=1/0;const f=i.x,z=i.x+i.width,E=i.x+i.width/2,P=i.y,O=i.y+i.height,M=i.y+i.height/2,A=[];for(const ae of l)c.has(ae.id)||A.push(ae.currentRect);_&&A.push(..._);for(const ae of A){const mt=ae.x,ot=ae.x+ae.width,nt=ae.x+ae.width/2,Pe=ae.y,ct=ae.y+ae.height,Oe=ae.y+ae.height/2;for(const Qe of[f,z,E])for(const Ge of[mt,ot,nt]){const Ce=Ge-Qe;Math.abs(Ce)<Uc&&Math.abs(Ce)<Math.abs(y)&&(y=Ce)}for(const Qe of[P,O,M])for(const Ge of[Pe,ct,Oe]){const Ce=Ge-Qe;Math.abs(Ce)<Uc&&Math.abs(Ce)<Math.abs(m)&&(m=Ce)}}const H=Math.abs(y)<Uc?y:0,I=Math.abs(m)<Uc?m:0,le=[],ke=new Set,he=f+H,Le=z+H,Ie=E+H,G=P+I,de=O+I,Ae=M+I;for(const ae of A){const mt=ae.x,ot=ae.x+ae.width,nt=ae.x+ae.width/2,Pe=ae.y,ct=ae.y+ae.height,Oe=ae.y+ae.height/2;for(const Qe of[mt,nt,ot])for(const Ge of[he,Ie,Le])if(Math.abs(Ge-Qe)<.5){const Ce=`x:${Math.round(Qe)}`;ke.has(Ce)||(ke.add(Ce),le.push({axis:"x",pos:Qe}))}for(const Qe of[Pe,Oe,ct])for(const Ge of[G,Ae,de])if(Math.abs(Ge-Qe)<.5){const Ce=`y:${Math.round(Qe)}`;ke.has(Ce)||(ke.add(Ce),le.push({axis:"y",pos:Qe}))}}return{dx:H,dy:I,guides:le}}var Mw=new Set(["script","style","noscript","link","meta","br","hr"]);function Vy(i){let l=i;for(;l&&l!==document.body&&l!==document.documentElement;){if(l.closest("[data-feedback-toolbar]"))return null;if(Mw.has(l.tagName.toLowerCase())){l=l.parentElement;continue}const c=l.getBoundingClientRect();if(c.width>=Wy&&c.height>=Wy)return l;l=l.parentElement}return null}function Dw({rearrangeState:i,onChange:l,isDarkMode:c,exiting:_,className:y,blankCanvas:m,extraSnapRects:f,onSelectionChange:z,deselectSignal:E,onDragMove:P,onDragEnd:O,clearSignal:M}){const{sections:A}=i,H=w.useRef(i);H.current=i;const[I,le]=w.useState(new Set),[ke,he]=w.useState(!1),Le=w.useRef(M);w.useEffect(()=>{M!==void 0&&M!==Le.current&&(Le.current=M,A.length>0&&he(!0))},[M,A.length]);const Ie=w.useRef(E);w.useEffect(()=>{E!==Ie.current&&(Ie.current=E,le(new Set))},[E]);const[G,de]=w.useState(null),[Ae,ae]=w.useState(!1),mt=w.useRef(!1),ot=w.useCallback($=>{const j=A.find(B=>B.id===$);j&&(mt.current=!!j.note,de($),ae(!1))},[A]),nt=w.useCallback(()=>{G&&(ae(!0),gt(()=>{de(null),ae(!1)},150))},[G]),Pe=w.useCallback($=>{G&&(l({...i,sections:A.map(j=>j.id===G?{...j,note:$.trim()||void 0}:j)}),nt())},[G,A,i,l,nt]);w.useEffect(()=>{_&&G&&nt()},[_]);const[ct,Oe]=w.useState(new Set),Qe=w.useRef(new Map),[Ge,Ce]=w.useState(null),[Ke,fe]=w.useState(null),[it,Tt]=w.useState([]),[Gt,tn]=w.useState(0),wn=w.useRef(null),Xn=w.useRef(new Set),tr=w.useRef(new Map),[mr,Sn]=w.useState(new Map),[Gn,Un]=w.useState(new Map),Fn=w.useRef(new Set),mn=w.useRef(new Map),Xt=w.useRef(z);Xt.current=z;const nn=w.useRef(P);nn.current=P;const ln=w.useRef(O);ln.current=O,w.useEffect(()=>{m&&le(new Set)},[m]);const[Ln,jn]=w.useState(()=>!i.sections.some($=>{const j=$.originalRect,B=$.currentRect;return Math.abs(j.x-B.x)>1||Math.abs(j.y-B.y)>1||Math.abs(j.width-B.width)>1||Math.abs(j.height-B.height)>1}));w.useEffect(()=>{if(!Ln){const $=gt(()=>jn(!0),380);return()=>clearTimeout($)}},[]);const lr=w.useRef(new Set);w.useEffect(()=>{lr.current=new Set(A.map($=>$.selector))},[A]),w.useEffect(()=>{const $=()=>tn(window.scrollY);return $(),window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",$,{passive:!0}),()=>{window.removeEventListener("scroll",$),window.removeEventListener("resize",$)}},[]),w.useEffect(()=>{const $=j=>{if(wn.current){Ce(null);return}const B=document.elementFromPoint(j.clientX,j.clientY);if(!B){Ce(null);return}if(B.closest("[data-feedback-toolbar]")){Ce(null);return}if(B.closest("[data-design-placement]")){Ce(null);return}if(B.closest("[data-annotation-popup]")){Ce(null);return}const V=Vy(B);if(!V){Ce(null);return}for(const ve of lr.current)try{const oe=document.querySelector(ve);if(oe&&(oe===V||V.contains(oe))){Ce(null);return}}catch{}const ge=V.getBoundingClientRect();Ce({x:ge.x,y:ge.y,w:ge.width,h:ge.height})};return document.addEventListener("mousemove",$,{passive:!0}),()=>document.removeEventListener("mousemove",$)},[A]),w.useEffect(()=>{const $=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=$}},[]),w.useEffect(()=>{const $=j=>{var oe,Ze,st,rt;if(wn.current||j.button!==0)return;const B=j.target;if(!B||B.closest("[data-feedback-toolbar]")||B.closest("[data-design-placement]")||B.closest("[data-annotation-popup]"))return;const V=Vy(B);let ge=!1;if(V)for(const Ee of lr.current)try{const _e=document.querySelector(Ee);if(_e&&(_e===V||V.contains(_e))){ge=!0;break}}catch{}const ve=!!(j.shiftKey||j.metaKey||j.ctrlKey);if(V&&!ge){j.preventDefault(),j.stopPropagation();const Ee=Tw(V),_e=[...A,Ee],At=[...i.originalOrder,Ee.id];l({...i,sections:_e,originalOrder:At});const $t=new Set([Ee.id]);le($t),(oe=Xt.current)==null||oe.call(Xt,$t,ve),Ce(null);const fn=j.clientX,Re=j.clientY,Ft={x:Ee.currentRect.x,y:Ee.currentRect.y};Ee.originalRect;let Lt=!1,Et=0,On=0;wn.current="move";const et=un=>{var xe;const kn=un.clientX-fn,Nn=un.clientY-Re;if(!Lt&&(Math.abs(kn)>2||Math.abs(Nn)>2)&&(Lt=!0),!Lt)return;const ha={x:Ft.x+kn,y:Ft.y+Nn,width:Ee.currentRect.width,height:Ee.currentRect.height},Or=Yy(ha,_e,new Set([Ee.id]),f);Tt(Or.guides);const ur=kn+Or.dx,k=Nn+Or.dy;Et=ur,On=k;const re=document.querySelector(`[data-rearrange-section="${Ee.id}"]`);re&&(re.style.transform=`translate(${ur}px, ${k}px)`),Sn(new Map([[Ee.id,{x:Ft.x+ur,y:Ft.y+k,width:Ee.currentRect.width,height:Ee.currentRect.height}]])),(xe=nn.current)==null||xe.call(nn,ur,k)},Ot=()=>{var kn;window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",Ot),wn.current=null,Tt([]),Sn(new Map);const un=document.querySelector(`[data-rearrange-section="${Ee.id}"]`);un&&(un.style.transform=""),Lt&&l({...i,sections:_e.map(Nn=>Nn.id===Ee.id?{...Nn,currentRect:{...Nn.currentRect,x:Math.max(0,Ft.x+Et),y:Math.max(0,Ft.y+On)}}:Nn),originalOrder:At}),(kn=ln.current)==null||kn.call(ln,Et,On,Lt)};window.addEventListener("mousemove",et),window.addEventListener("mouseup",Ot)}else if(ge&&V){j.preventDefault();for(const Ee of A)try{const _e=document.querySelector(Ee.selector);if(_e&&_e===V){const At=new Set([Ee.id]);le(At),(Ze=Xt.current)==null||Ze.call(Xt,At,ve);return}}catch{}ve||(le(new Set),(st=Xt.current)==null||st.call(Xt,new Set,!1))}else ve||(le(new Set),(rt=Xt.current)==null||rt.call(Xt,new Set,!1))};return document.addEventListener("mousedown",$,!0),()=>document.removeEventListener("mousedown",$,!0)},[A,i,l]),w.useEffect(()=>{const $=j=>{const B=j.target;if(!(B.tagName==="INPUT"||B.tagName==="TEXTAREA"||B.isContentEditable)){if((j.key==="Backspace"||j.key==="Delete")&&I.size>0){j.preventDefault();const V=new Set(I);Oe(ge=>{const ve=new Set(ge);for(const oe of V)ve.add(oe);return ve}),le(new Set),gt(()=>{const ge=H.current;l({...ge,sections:ge.sections.filter(ve=>!V.has(ve.id)),originalOrder:ge.originalOrder.filter(ve=>!V.has(ve))}),Oe(ve=>{const oe=new Set(ve);for(const Ze of V)oe.delete(Ze);return oe})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(j.key)&&I.size>0){j.preventDefault();const V=j.shiftKey?20:1,ge=j.key==="ArrowLeft"?-V:j.key==="ArrowRight"?V:0,ve=j.key==="ArrowUp"?-V:j.key==="ArrowDown"?V:0;l({...i,sections:A.map(oe=>I.has(oe.id)?{...oe,currentRect:{...oe.currentRect,x:Math.max(0,oe.currentRect.x+ge),y:Math.max(0,oe.currentRect.y+ve)}}:oe)});return}j.key==="Escape"&&I.size>0&&le(new Set)}};return document.addEventListener("keydown",$),()=>document.removeEventListener("keydown",$)},[I,A,i,l]);const K=w.useCallback(($,j)=>{var fn;if($.button!==0)return;const B=$.target;if(B.closest(`.${te.handle}`)||B.closest(`.${te.deleteButton}`))return;$.preventDefault(),$.stopPropagation();let V;$.shiftKey||$.metaKey||$.ctrlKey?(V=new Set(I),V.has(j)?V.delete(j):V.add(j)):I.has(j)?V=new Set(I):V=new Set([j]),le(V),(V.size!==I.size||[...V].some(Re=>!I.has(Re)))&&((fn=Xt.current)==null||fn.call(Xt,V,!!($.shiftKey||$.metaKey||$.ctrlKey)));const ve=$.clientX,oe=$.clientY,Ze=new Map;for(const Re of A)V.has(Re.id)&&Ze.set(Re.id,{x:Re.currentRect.x,y:Re.currentRect.y});wn.current="move";let st=!1,rt=0,Ee=0;const _e=new Map;for(const Re of A)if(V.has(Re.id)){const Ft=document.querySelector(`[data-rearrange-section="${Re.id}"]`);_e.set(Re.id,{outlineEl:Ft,curW:Re.currentRect.width,curH:Re.currentRect.height})}const At=Re=>{var Or;const Ft=Re.clientX-ve,Lt=Re.clientY-oe;if(Ft===0&&Lt===0)return;st=!0;let Et=1/0,On=1/0,et=-1/0,Ot=-1/0;for(const[ur,{curW:k,curH:re}]of _e){const xe=Ze.get(ur);if(!xe)continue;const Me=xe.x+Ft,se=xe.y+Lt;Et=Math.min(Et,Me),On=Math.min(On,se),et=Math.max(et,Me+k),Ot=Math.max(Ot,se+re)}const un=Yy({x:Et,y:On,width:et-Et,height:Ot-On},A,V,f),kn=Ft+un.dx,Nn=Lt+un.dy;rt=kn,Ee=Nn,Tt(un.guides);for(const[,{outlineEl:ur}]of _e)ur&&(ur.style.transform=`translate(${kn}px, ${Nn}px)`);const ha=new Map;for(const[ur,{curW:k,curH:re}]of _e){const xe=Ze.get(ur);if(xe){const Me={x:Math.max(0,xe.x+kn),y:Math.max(0,xe.y+Nn),width:k,height:re};ha.set(ur,Me)}}Sn(ha),(Or=nn.current)==null||Or.call(nn,kn,Nn)},$t=Re=>{var Ft,Lt;window.removeEventListener("mousemove",At),window.removeEventListener("mouseup",$t),wn.current=null,Tt([]),Sn(new Map);for(const[,{outlineEl:Et}]of _e)Et&&(Et.style.transform="");if(st){const Et=Re.clientX-ve,On=Re.clientY-oe;if(Math.abs(Et)<5&&Math.abs(On)<5)l({...i,sections:A.map(et=>{const Ot=Ze.get(et.id);return Ot?{...et,currentRect:{...et.currentRect,x:Ot.x,y:Ot.y}}:et})});else{l({...i,sections:A.map(et=>{const Ot=Ze.get(et.id);return Ot?{...et,currentRect:{...et.currentRect,x:Math.max(0,Ot.x+rt),y:Math.max(0,Ot.y+Ee)}}:et})}),(Ft=ln.current)==null||Ft.call(ln,rt,Ee,!0);return}}(Lt=ln.current)==null||Lt.call(ln,0,0,!1)};window.addEventListener("mousemove",At),window.addEventListener("mouseup",$t)},[I,A,i,l]),Ue=w.useCallback(($,j,B)=>{$.preventDefault(),$.stopPropagation();const V=A.find(At=>At.id===j);if(!V)return;le(new Set([j])),wn.current="resize";const ge=$.clientX,ve=$.clientY,oe={...V.currentRect};V.originalRect;const Ze=oe.width/oe.height;let st={...oe};const rt=document.querySelector(`[data-rearrange-section="${j}"]`),Ee=At=>{const $t=At.clientX-ge,fn=At.clientY-ve;let Re=oe.x,Ft=oe.y,Lt=oe.width,Et=oe.height;if(B.includes("e")&&(Lt=Math.max(Ic,oe.width+$t)),B.includes("w")&&(Lt=Math.max(Ic,oe.width-$t),Re=oe.x+oe.width-Lt),B.includes("s")&&(Et=Math.max(Ic,oe.height+fn)),B.includes("n")&&(Et=Math.max(Ic,oe.height-fn),Ft=oe.y+oe.height-Et),At.shiftKey)if(B.length===2){const et=Math.abs(Lt-oe.width),Ot=Math.abs(Et-oe.height);et>Ot?Et=Lt/Ze:Lt=Et*Ze,B.includes("w")&&(Re=oe.x+oe.width-Lt),B.includes("n")&&(Ft=oe.y+oe.height-Et)}else B==="e"||B==="w"?Et=Lt/Ze:Lt=Et*Ze,B==="w"&&(Re=oe.x+oe.width-Lt),B==="n"&&(Ft=oe.y+oe.height-Et);st={x:Re,y:Ft,width:Lt,height:Et},rt&&(rt.style.left=`${Re}px`,rt.style.top=`${Ft-Gt}px`,rt.style.width=`${Lt}px`,rt.style.height=`${Et}px`),fe({x:At.clientX+12,y:At.clientY+12,text:`${Math.round(Lt)} × ${Math.round(Et)}`}),Sn(new Map([[j,st]]))},_e=()=>{window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",_e),fe(null),wn.current=null,Sn(new Map),l({...i,sections:A.map(At=>At.id===j?{...At,currentRect:st}:At)})};window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",_e)},[A,i,l,Gt]),lt=w.useCallback($=>{Oe(j=>{const B=new Set(j);return B.add($),B}),le(j=>{const B=new Set(j);return B.delete($),B}),gt(()=>{const j=H.current;l({...j,sections:j.sections.filter(B=>B.id!==$),originalOrder:j.originalOrder.filter(B=>B!==$)}),Oe(B=>{const V=new Set(B);return V.delete($),V})},180)},[l]),Ye=$=>{const j=$.originalRect,B=$.currentRect;return Math.abs(j.x-B.x)>1||Math.abs(j.y-B.y)>1||Math.abs(j.width-B.width)>1||Math.abs(j.height-B.height)>1},vt=$=>{const j=$.originalRect,B=$.currentRect;return Math.abs(j.x-B.x)>1||Math.abs(j.y-B.y)>1},ft=$=>{const j=$.originalRect,B=$.currentRect;return Math.abs(j.width-B.width)>1||Math.abs(j.height-B.height)>1};for(const $ of A)tr.current.has($.id)||(vt($)?tr.current.set($.id,"move"):ft($)&&tr.current.set($.id,"resize"));for(const $ of tr.current.keys())A.some(j=>j.id===$)||tr.current.delete($);const Dt=A.filter($=>{try{if(ct.has($.id)||I.has($.id))return!0;const j=document.querySelector($.selector);if(!j)return!1;const B=j.getBoundingClientRect(),V=$.originalRect;return Math.abs(B.width-V.width)+Math.abs(B.height-V.height)<200}catch{return!1}}),Je=Dt.filter($=>Ye($)),Ct=Dt.filter($=>!Ye($)),en=new Set(Je.map($=>$.id));for(const $ of Xn.current)en.has($)||Xn.current.delete($);const Ve=[...en].sort().join(",");for(const $ of Je)mn.current.set($.id,{currentRect:$.currentRect,originalRect:$.originalRect,isFixed:$.isFixed});return w.useEffect(()=>{const $=Fn.current;Fn.current=en;const j=new Map;for(const B of $)if(!en.has(B)){if(!A.some(ge=>ge.id===B))continue;const V=mn.current.get(B);V&&(j.set(B,{orig:V.originalRect,target:V.currentRect,isFixed:V.isFixed}),mn.current.delete(B))}if(j.size>0){Un(V=>{const ge=new Map(V);for(const[ve,oe]of j)ge.set(ve,oe);return ge});const B=gt(()=>{Un(V=>{const ge=new Map(V);for(const ve of j.keys())ge.delete(ve);return ge})},250);return()=>clearTimeout(B)}},[Ve,A]),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`${te.rearrangeOverlay} ${c?"":te.light} ${_?te.overlayExiting:""}${y?` ${y}`:""}`,"data-feedback-toolbar":!0,children:[Ge&&o.jsx("div",{className:te.hoverHighlight,style:{left:Ge.x,top:Ge.y,width:Ge.w,height:Ge.h}}),Ct.map($=>{const j=$.currentRect,B=$.isFixed?j.y:j.y-Gt,V=Hy,ge=I.has($.id);return o.jsxs("div",{"data-rearrange-section":$.id,className:`${te.sectionOutline} ${ge?te.selected:""} ${ke||_||ct.has($.id)?te.exiting:""}`,style:{left:j.x,top:B,width:j.width,height:j.height,borderColor:V.border,backgroundColor:V.bg,...Ln?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ve=>K(ve,$.id),onDoubleClick:()=>ot($.id),children:[o.jsx("span",{className:te.sectionLabel,style:{backgroundColor:V.pill},children:$.label}),o.jsx("span",{className:`${te.sectionAnnotation} ${$.note?te.annotationVisible:""}`,children:($.note&&Qe.current.set($.id,$.note),$.note||Qe.current.get($.id)||"")}),o.jsxs("span",{className:te.sectionDimensions,children:[Math.round(j.width)," × ",Math.round(j.height)]}),o.jsx("div",{className:te.deleteButton,onMouseDown:ve=>ve.stopPropagation(),onClick:()=>lt($.id),children:"✕"}),Py.map(ve=>o.jsx("div",{className:`${te.handle} ${te[`handle${ve.charAt(0).toUpperCase()}${ve.slice(1)}`]}`,onMouseDown:oe=>Ue(oe,$.id,ve)},ve))]},$.id)}),Je.map($=>{const j=$.currentRect,B=$.isFixed?j.y:j.y-Gt,V=I.has($.id),ge=vt($),ve=ft($);if(m&&!V)return null;const Ze=!Xn.current.has($.id);return Ze&&Xn.current.add($.id),o.jsxs("div",{"data-rearrange-section":$.id,className:`${te.ghostOutline} ${V?te.selected:""} ${ke||_||ct.has($.id)?te.exiting:""}`,style:{left:j.x,top:B,width:j.width,height:j.height,...Ln?{}:{opacity:0,animation:"none",transition:"none"},...Ze?{}:{animation:"none"}},onMouseDown:st=>K(st,$.id),onDoubleClick:()=>ot($.id),children:[o.jsx("span",{className:te.sectionLabel,style:{backgroundColor:Hy.pill},children:$.label}),o.jsx("span",{className:`${te.sectionAnnotation} ${$.note?te.annotationVisible:""}`,children:($.note&&Qe.current.set($.id,$.note),$.note||Qe.current.get($.id)||"")}),o.jsxs("span",{className:te.sectionDimensions,children:[Math.round(j.width)," × ",Math.round(j.height)]}),o.jsx("div",{className:te.deleteButton,onMouseDown:st=>st.stopPropagation(),onClick:()=>lt($.id),children:"✕"}),Py.map(st=>o.jsx("div",{className:`${te.handle} ${te[`handle${st.charAt(0).toUpperCase()}${st.slice(1)}`]}`,onMouseDown:rt=>Ue(rt,$.id,st)},st)),o.jsx("span",{className:te.ghostBadge,children:(()=>{const st=tr.current.get($.id);if(ge&&ve){const[rt,Ee]=st==="resize"?["Resize","Move"]:["Move","Resize"];return o.jsxs(o.Fragment,{children:["Suggested ",rt," ",o.jsxs("span",{className:te.ghostBadgeExtra,children:["& ",Ee]})]})}return`Suggested ${ve?"Resize":"Move"}`})()})]},$.id)})]}),!m&&(()=>{const $=[];for(const j of Je){const B=mr.get(j.id);$.push({id:j.id,orig:j.originalRect,target:B||j.currentRect,isFixed:j.isFixed,isSelected:I.has(j.id),isExiting:ct.has(j.id)})}for(const[j,B]of mr)if(!$.some(V=>V.id===j)){const V=A.find(ge=>ge.id===j);V&&$.push({id:j,orig:V.originalRect,target:B,isFixed:V.isFixed,isSelected:I.has(j)})}for(const[j,B]of Gn)$.some(V=>V.id===j)||$.push({id:j,orig:B.orig,target:B.target,isFixed:B.isFixed,isSelected:!1,isExiting:!0});return $.length===0?null:o.jsxs("svg",{className:`${te.connectorSvg} ${ke||_?te.connectorExiting:""}`,children:[$.map(({id:j,orig:B,target:V,isFixed:ge,isSelected:ve,isExiting:oe})=>{const Ze=B.x+B.width/2,st=(ge?B.y:B.y-Gt)+B.height/2,rt=V.x+V.width/2,Ee=(ge?V.y:V.y-Gt)+V.height/2,_e=rt-Ze,At=Ee-st,$t=Math.sqrt(_e*_e+At*At);if($t<2)return null;const fn=Math.min(1,$t/40),Re=Math.min($t*.3,60),Ft=$t>0?-At/$t:0,Lt=$t>0?_e/$t:0,Et=(Ze+rt)/2+Ft*Re,On=(st+Ee)/2+Lt*Re,et=mr.has(j),Ot=et||ve?1:.4,un=et||ve?1:.5;return o.jsxs("g",{className:oe?te.connectorExiting:"",children:[o.jsx("path",{className:te.connectorLine,d:`M ${Ze} ${st} Q ${Et} ${On} ${rt} ${Ee}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ot*fn}),o.jsx("circle",{className:te.connectorDot,cx:Ze,cy:st,r:4*fn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:un*fn,filter:"url(#connDotShadow)"}),o.jsx("circle",{className:te.connectorDot,cx:rt,cy:Ee,r:4*fn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:un*fn,filter:"url(#connDotShadow)"})]},`conn-${j}`)}),o.jsx("defs",{children:o.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:o.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),G&&(()=>{const $=A.find(Ee=>Ee.id===G);if(!$)return null;const j=$.currentRect,B=$.isFixed?j.y:j.y-Gt,V=j.x+j.width/2,ge=B-8,ve=B+j.height+8,oe=ge>200,Ze=ve<window.innerHeight-100,st=Math.max(160,Math.min(window.innerWidth-160,V));let rt;return oe?rt={left:st,bottom:window.innerHeight-ge}:Ze?rt={left:st,top:ve}:rt={left:st,top:Math.max(80,window.innerHeight/2-80)},o.jsx(Dc,{element:$.label,placeholder:"Add a note about this section",initialValue:$.note??"",submitLabel:mt.current?"Save":"Set",onSubmit:Pe,onCancel:nt,onDelete:mt.current?()=>{Pe("")}:void 0,isExiting:Ae,lightMode:!c,style:rt})})(),Ke&&o.jsx("div",{className:te.sizeIndicator,style:{left:Ke.x,top:Ke.y},"data-feedback-toolbar":!0,children:Ke.text}),it.map(($,j)=>o.jsx("div",{className:te.guideLine,style:$.axis==="x"?{position:"fixed",left:$.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:$.pos-Gt,width:"100vw",height:1}},`${$.axis}-${$.pos}-${j}`))]})}var ah=new Set(["script","style","noscript","link","meta","br","hr"]);function Lw(){const i=document.querySelector("main")||document.body,l=[],c=Array.from(i.children),_=i!==document.body&&c.length<3?Array.from(document.body.children):c;for(const y of _){if(!(y instanceof HTMLElement)||ah.has(y.tagName.toLowerCase())||y.hasAttribute("data-feedback-toolbar"))continue;const m=window.getComputedStyle(y);if(m.display==="none"||m.visibility==="hidden")continue;const f=y.getBoundingClientRect();if(!(f.height<10||f.width<10)){l.push({label:Bc(y),selector:Gi(y),top:f.top,bottom:f.bottom,left:f.left,right:f.right,area:f.width*f.height});for(const z of Array.from(y.children)){if(!(z instanceof HTMLElement)||ah.has(z.tagName.toLowerCase())||z.hasAttribute("data-feedback-toolbar"))continue;const E=window.getComputedStyle(z);if(E.display==="none"||E.visibility==="hidden")continue;const P=z.getBoundingClientRect();P.height<10||P.width<10||l.push({label:Bc(z),selector:Gi(z),top:P.top,bottom:P.bottom,left:P.left,right:P.right,area:P.width*P.height})}}}return l}function Ow(i){const l=window.scrollY;return i.map(({label:c,selector:_,rect:y})=>{const m=y.y-l;return{label:c,selector:_,top:m,bottom:m+y.height,left:y.x,right:y.x+y.width,area:y.width*y.height}})}function Nw(i){const l=window.scrollY,c=i.y-l,_=i.x;return{top:c,bottom:c+i.height,left:_,right:_+i.width,area:i.width*i.height}}function oh(i,l){const c=l?Ow(l):Lw(),_=Nw(i);let y=null,m=null,f=null,z=null,E=null;for(const I of c){if(Math.abs(I.left-_.left)<2&&Math.abs(I.top-_.top)<2&&Math.abs(I.right-I.left-i.width)<2&&Math.abs(I.bottom-I.top-i.height)<2)continue;I.left<=_.left+2&&I.right>=_.right-2&&I.top<=_.top+2&&I.bottom>=_.bottom-2&&I.area>_.area*1.5&&(!E||I.area<E._area)&&(E={label:I.label,selector:I.selector,_area:I.area});const le=_.right>I.left+5&&_.left<I.right-5,ke=_.bottom>I.top+5&&_.top<I.bottom-5;if(le&&I.bottom<=_.top+5){const he=Math.round(_.top-I.bottom);(!y||he<y._dist)&&(y={label:I.label,selector:I.selector,gap:Math.max(0,he),_dist:he})}if(le&&I.top>=_.bottom-5){const he=Math.round(I.top-_.bottom);(!m||he<m._dist)&&(m={label:I.label,selector:I.selector,gap:Math.max(0,he),_dist:he})}if(ke&&I.right<=_.left+5){const he=Math.round(_.left-I.right);(!f||he<f._dist)&&(f={label:I.label,selector:I.selector,gap:Math.max(0,he),_dist:he})}if(ke&&I.left>=_.right-5){const he=Math.round(I.left-_.right);(!z||he<z._dist)&&(z={label:I.label,selector:I.selector,gap:Math.max(0,he),_dist:he})}}const P=window.innerWidth,O=window.innerHeight,M=$w(i,P),A=I=>I?{label:I.label,selector:I.selector,gap:I.gap}:null,H=Aw(_,i,P,O,E?{label:E.label,selector:E.selector,_area:E._area}:null,c);return{above:A(y),below:A(m),left:A(f),right:A(z),alignment:M,containedIn:E?{label:E.label,selector:E.selector}:null,outOfBounds:H}}function Aw(i,l,c,_,y,m){const f={};let z=!1;const E=[];if(i.left<-2&&E.push("left"),i.right>c+2&&E.push("right"),i.top<-2&&E.push("top"),i.bottom>_+2&&E.push("bottom"),E.length>0&&(f.viewport=E,z=!0),y){const P=m.find(O=>O.label===y.label&&O.selector===y.selector&&Math.abs(O.area-y._area)<10);if(P){const O=[];i.left<P.left-2&&O.push("left"),i.right>P.right+2&&O.push("right"),i.top<P.top-2&&O.push("top"),i.bottom>P.bottom+2&&O.push("bottom"),O.length>0&&(f.container={label:y.label,edges:O},z=!0)}}return z?f:null}function $w(i,l){if(i.width/l>.85)return"full-width";const _=i.x+i.width/2,y=l/2,m=_-y,f=l*.08;return Math.abs(m)<f?"center":m<0?"left":"right"}function Xy(i){switch(i){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Qy(i,l={}){const c=[];i.above&&c.push(`Below \`${i.above.label}\`${i.above.gap>0?` (${i.above.gap}px gap)`:""}`),i.below&&c.push(`Above \`${i.below.label}\`${i.below.gap>0?` (${i.below.gap}px gap)`:""}`),l.includeLeftRight&&(i.left&&c.push(`Right of \`${i.left.label}\`${i.left.gap>0?` (${i.left.gap}px gap)`:""}`),i.right&&c.push(`Left of \`${i.right.label}\`${i.right.gap>0?` (${i.right.gap}px gap)`:""}`));const _=Xy(i.alignment);return i.containedIn?c.push(`${_.charAt(0).toUpperCase()+_.slice(1)} in \`${i.containedIn.label}\``):c.push(`${_.charAt(0).toUpperCase()+_.slice(1)} in page`),l.includePixelRef&&l.pixelRef&&c.push(`Pixel ref: \`${l.pixelRef}\``),i.outOfBounds&&(i.outOfBounds.viewport&&c.push(`**Outside viewport** (${i.outOfBounds.viewport.join(", ")} edge${i.outOfBounds.viewport.length>1?"s":""})`),i.outOfBounds.container&&c.push(`**Outside \`${i.outOfBounds.container.label}\`** (${i.outOfBounds.container.edges.join(", ")} edge${i.outOfBounds.container.edges.length>1?"s":""})`)),c}function zw(i,l,c){var m,f;const _=[];i.above&&_.push(`below \`${i.above.label}\``),i.below&&_.push(`above \`${i.below.label}\``),i.left&&_.push(`right of \`${i.left.label}\``),i.right&&_.push(`left of \`${i.right.label}\``),i.containedIn&&_.push(`inside \`${i.containedIn.label}\``),_.push(Xy(i.alignment)),(m=i.outOfBounds)!=null&&m.viewport&&_.push(`**outside viewport** (${i.outOfBounds.viewport.join(", ")})`),(f=i.outOfBounds)!=null&&f.container&&_.push(`**outside \`${i.outOfBounds.container.label}\`** (${i.outOfBounds.container.edges.join(", ")})`);const y=c?`, ${Math.round(c.width)}×${Math.round(c.height)}px`:"";return`at (${Math.round(l.x)}, ${Math.round(l.y)})${y}: ${_.join(", ")}`}var qy=15;function Gy(i){if(i.length<2)return[];const l=[],c=new Set;for(let _=0;_<i.length;_++){if(c.has(_))continue;const y=[_];for(let m=_+1;m<i.length;m++)c.has(m)||Math.abs(i[_].rect.y-i[m].rect.y)<qy&&y.push(m);if(y.length>=2){const m=y.map(E=>i[E]);m.sort((E,P)=>E.rect.x-P.rect.x);const f=[];for(let E=0;E<m.length-1;E++)f.push(Math.round(m[E+1].rect.x-(m[E].rect.x+m[E].rect.width)));const z=Math.round(m.reduce((E,P)=>E+P.rect.y,0)/m.length);l.push({labels:m.map(E=>E.label),type:"row",sharedEdge:z,gaps:f,avgGap:f.length?Math.round(f.reduce((E,P)=>E+P,0)/f.length):0}),y.forEach(E=>c.add(E))}}for(let _=0;_<i.length;_++){if(c.has(_))continue;const y=[_];for(let m=_+1;m<i.length;m++)c.has(m)||Math.abs(i[_].rect.x-i[m].rect.x)<qy&&y.push(m);if(y.length>=2){const m=y.map(E=>i[E]);m.sort((E,P)=>E.rect.y-P.rect.y);const f=[];for(let E=0;E<m.length-1;E++)f.push(Math.round(m[E+1].rect.y-(m[E].rect.y+m[E].rect.height)));const z=Math.round(m.reduce((E,P)=>E+P.rect.x,0)/m.length);l.push({labels:m.map(E=>E.label),type:"column",sharedEdge:z,gaps:f,avgGap:f.length?Math.round(f.reduce((E,P)=>E+P,0)/f.length):0}),y.forEach(E=>c.add(E))}}return l}function Bw(i){if(i.length<2)return[];const l=Gy(i.map(f=>({label:f.label,rect:f.originalRect}))),c=Gy(i.map(f=>({label:f.label,rect:f.currentRect}))),_=[],y=new Set;for(const f of l){const z=new Set(f.labels);let E=null,P=0;for(const O of c){const M=O.labels.filter(A=>z.has(A)).length;M>=2&&M>P&&(E=O,P=M)}if(E){const O=E.labels.filter(A=>z.has(A)),M=O.join(", ");if(E.type!==f.type){const A=f.type==="row"?"y":"x",H=E.type==="row"?"y":"x";_.push(`**${M}**: ${f.type} (${A}≈${f.sharedEdge}, ${f.avgGap}px gaps) → ${E.type} (${H}≈${E.sharedEdge}, ${E.avgGap}px gaps)`)}else if(Math.abs(f.sharedEdge-E.sharedEdge)>20||Math.abs(f.avgGap-E.avgGap)>5){const A=f.type==="row"?"y":"x",H=Math.abs(f.sharedEdge-E.sharedEdge)>20?` ${A}: ${f.sharedEdge} → ${E.sharedEdge}`:"",I=Math.abs(f.avgGap-E.avgGap)>5?` gaps: ${f.avgGap}px → ${E.avgGap}px`:"";_.push(`**${M}**: ${f.type} shifted —${H}${I}`)}O.forEach(A=>y.add(A))}else{const O=f.labels.join(", "),M=f.type==="row"?"y":"x";_.push(`**${O}**: ${f.type} (${M}≈${f.sharedEdge}) dissolved`),f.labels.forEach(A=>y.add(A))}}for(const f of c){if(f.labels.every(P=>y.has(P))||f.labels.filter(P=>!y.has(P)).length<2)continue;if(!l.some(P=>P.labels.filter(M=>f.labels.includes(M)).length>=2)){const P=f.type==="row"?"y":"x";_.push(`**${f.labels.join(", ")}**: new ${f.type} (${P}≈${f.sharedEdge}, ${f.avgGap}px gaps)`),f.labels.forEach(O=>y.add(O))}}const m=i.filter(f=>!y.has(f.label));if(m.length>=2){const f={};for(const z of m){const E=Math.round(z.currentRect.x/5)*5;(f[E]??(f[E]=[])).push(z.label)}for(const[z,E]of Object.entries(f))E.length>=2&&_.push(`**${E.join(", ")}**: shared left edge at x≈${z}`)}return _}function Ky(i){if(typeof document>"u")return{viewport:i,contentArea:null};const l=[],c=new Set,_=z=>{c.has(z)||z instanceof HTMLElement&&(z.hasAttribute("data-feedback-toolbar")||ah.has(z.tagName.toLowerCase())||(c.add(z),l.push(z)))},y=document.querySelector("main");y&&_(y);const m=document.querySelector("[role='main']");m&&_(m);for(const z of Array.from(document.body.children))if(_(z),z.children){for(const E of Array.from(z.children))if(_(E),E.children)for(const P of Array.from(E.children))_(P)}let f=null;for(const z of l){const E=z.getBoundingClientRect();if(E.height<50)continue;const P=getComputedStyle(z);if(P.maxWidth&&P.maxWidth!=="none"&&P.maxWidth!=="0px"){(!f||E.width<f.rect.width)&&(f={el:z,rect:E});continue}!f&&E.width<i.width-20&&E.width>100&&(f={el:z,rect:E})}if(f){const{el:z,rect:E}=f;return{viewport:i,contentArea:{width:Math.round(E.width),left:Math.round(E.left),right:Math.round(E.right),centerX:Math.round(E.left+E.width/2),selector:Gi(z)}}}return{viewport:i,contentArea:null}}function Iw(i){if(typeof document>"u")return null;const l=document.querySelector(i);if(!(l!=null&&l.parentElement))return null;const c=getComputedStyle(l.parentElement),_={parentDisplay:c.display,parentSelector:Gi(l.parentElement)};return c.display.includes("flex")&&(_.flexDirection=c.flexDirection),c.display.includes("grid")&&c.gridTemplateColumns!=="none"&&(_.gridCols=c.gridTemplateColumns),c.gap&&c.gap!=="normal"&&c.gap!=="0px"&&(_.gap=c.gap),_}function Jy(i,l){const c=l.contentArea,_=c?c.width:l.viewport.width,y=c?c.left:0,m=c?c.centerX:Math.round(l.viewport.width/2),f=Math.round(i.x-y),z=Math.round(y+_-(i.x+i.width)),E=(i.width/_*100).toFixed(1),P=i.x+i.width/2,O=Math.abs(P-m)<20,M=i.width/_>.95,A=[];return M?A.push("`width: 100%` of container"):A.push(`left \`${f}px\` in container, right \`${z}px\`, width \`${E}%\` (\`${Math.round(i.width)}px\`)`),O&&!M&&A.push("centered — `margin-inline: auto`"),A.join(" — ")}function Zy(i){const{viewport:l,contentArea:c}=i;let _=`### Reference Frame
`;if(_+=`- Viewport: \`${l.width}×${l.height}px\`
`,c){const y=c;_+=`- Content area: \`${y.width}px\` wide, left edge at \`x=${y.left}\`, right at \`x=${y.right}\` (\`${y.selector}\`)
`,_+=`- Pixel → CSS translation:
`,_+=`  - **Horizontal position in container**: \`element.x - ${y.left}\` → use as \`margin-left\` or \`left\`
`,_+=`  - **Width as % of container**: \`element.width / ${y.width} × 100\` → use as \`width: X%\`
`,_+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",_+=`  - **Centered**: if \`|element.centerX - ${y.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else _+=`- No distinct content container — elements positioned relative to full viewport
`,_+=`- Pixel → CSS translation:
`,_+=`  - **Width as % of viewport**: \`element.width / ${l.width} × 100\` → use as \`width: X%\`
`,_+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(l.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return _+=`
`,_}function Uw(i){const l=Iw(i);if(!l)return null;let c=`\`${l.parentDisplay}\``;return l.flexDirection&&(c+=`, flex-direction: \`${l.flexDirection}\``),l.gridCols&&(c+=`, grid-template-columns: \`${l.gridCols}\``),l.gap&&(c+=`, gap: \`${l.gap}\``),`Parent: ${c} (\`${l.parentSelector}\`)`}function eg(i,l,c,_="standard"){var ke,he,Le,Ie;if(i.length===0)return"";const y=[...i].sort((G,de)=>Math.abs(G.y-de.y)<20?G.x-de.x:G.y-de.y);let m="";if(c!=null&&c.blankCanvas?(m+=`## Wireframe: New Page

`,c.wireframePurpose&&(m+=`> **Purpose:** ${c.wireframePurpose}
>
`),m+=`> ${i.length} component${i.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):m+=`## Design Layout

> ${i.length} component${i.length!==1?"s":""} placed

`,_==="compact")return m+=`### Components
`,y.forEach((G,de)=>{var ae;const Ae=((ae=Za[G.type])==null?void 0:ae.label)||G.type;m+=`${de+1}. **${Ae}** — \`${Math.round(G.width)}×${Math.round(G.height)}px\` at \`(${Math.round(G.x)}, ${Math.round(G.y)})\`
`}),m;const f=Ky(l);m+=Zy(f),m+=`### Components
`,y.forEach((G,de)=>{var ct;const Ae=((ct=Za[G.type])==null?void 0:ct.label)||G.type,ae={x:G.x,y:G.y,width:G.width,height:G.height};m+=`${de+1}. **${Ae}** — \`${Math.round(G.width)}×${Math.round(G.height)}px\` at \`(${Math.round(G.x)}, ${Math.round(G.y)})\`
`;const mt=oh(ae),nt=Qy(mt,{includeLeftRight:_==="detailed"||_==="forensic"});for(const Oe of nt)m+=`   - ${Oe}
`;const Pe=Jy(ae,f);Pe&&(m+=`   - CSS: ${Pe}
`)}),m+=`
### Layout Analysis
`;const z=[];for(const G of y){const de=z.find(Ae=>Math.abs(Ae.y-G.y)<30);de?de.items.push(G):z.push({y:G.y,items:[G]})}if(z.sort((G,de)=>G.y-de.y),z.forEach((G,de)=>{G.items.sort((ae,mt)=>ae.x-mt.x);const Ae=G.items.map(ae=>{var mt;return((mt=Za[ae.type])==null?void 0:mt.label)||ae.type});if(G.items.length===1){const mt=G.items[0].width>l.width*.8;m+=`- Row ${de+1} (y≈${Math.round(G.y)}): ${Ae[0]}${mt?" — full width":""}
`}else m+=`- Row ${de+1} (y≈${Math.round(G.y)}): ${Ae.join(" | ")} — ${G.items.length} items side by side
`}),_==="detailed"||_==="forensic"){m+=`
### Spacing & Gaps
`;for(let G=0;G<y.length-1;G++){const de=y[G],Ae=y[G+1],ae=((ke=Za[de.type])==null?void 0:ke.label)||de.type,mt=((he=Za[Ae.type])==null?void 0:he.label)||Ae.type,ot=Math.round(Ae.y-(de.y+de.height)),nt=Math.round(Ae.x-(de.x+de.width));Math.abs(de.y-Ae.y)<30?m+=`- ${ae} → ${mt}: \`${nt}px\` horizontal gap
`:m+=`- ${ae} → ${mt}: \`${ot}px\` vertical gap
`}if(_==="forensic"&&y.length>2){m+=`
### All Pairwise Gaps
`;for(let G=0;G<y.length;G++)for(let de=G+1;de<y.length;de++){const Ae=y[G],ae=y[de],mt=((Le=Za[Ae.type])==null?void 0:Le.label)||Ae.type,ot=((Ie=Za[ae.type])==null?void 0:Ie.label)||ae.type,nt=Math.round(ae.y-(Ae.y+Ae.height)),Pe=Math.round(ae.x-(Ae.x+Ae.width));m+=`- ${mt} ↔ ${ot}: h=\`${Pe}px\` v=\`${nt}px\`
`}}_==="forensic"&&(m+=`
### Z-Order (placement order)
`,i.forEach((G,de)=>{var ae;const Ae=((ae=Za[G.type])==null?void 0:ae.label)||G.type;m+=`${de}. ${Ae} at \`(${Math.round(G.x)}, ${Math.round(G.y)})\`
`}))}m+=`
### Suggested Implementation
`;const E=y.some(G=>G.type==="navigation"),P=y.some(G=>G.type==="hero"),O=y.some(G=>G.type==="sidebar"),M=y.some(G=>G.type==="footer"),A=y.filter(G=>G.type==="card"),H=y.filter(G=>G.type==="form"),I=y.filter(G=>G.type==="table"),le=y.filter(G=>G.type==="modal");if(E&&(m+=`- Top navigation bar with logo + nav links + CTA
`),P&&(m+=`- Hero section with heading, subtext, and call-to-action
`),O&&(m+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),A.length>1?m+=`- ${A.length}-column card grid — use CSS Grid or Flexbox
`:A.length===1&&(m+=`- Card component with image + content area
`),H.length>0&&(m+=`- ${H.length} form${H.length>1?"s":""} — add proper labels, validation, and submit handling
`),I.length>0&&(m+=`- Data table — consider sortable columns and pagination
`),le.length>0&&(m+=`- Modal dialog — add overlay backdrop and focus trapping
`),M&&(m+=`- Multi-column footer with links
`),_==="detailed"||_==="forensic"){if(m+=`
### CSS Suggestions
`,O){const G=y.find(de=>de.type==="sidebar");m+=`- \`display: grid; grid-template-columns: ${Math.round(G.width)}px 1fr;\`
`}if(A.length>1){const G=Math.round(A[0].width);m+=`- \`display: grid; grid-template-columns: repeat(${A.length}, ${G}px); gap: 16px;\`
`}E&&(m+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return m}function tg(i,l="standard",c){const{sections:_}=i,y=[];for(const O of _){const M=O.originalRect,A=O.currentRect,H=Math.abs(M.x-A.x)>1||Math.abs(M.y-A.y)>1,I=Math.abs(M.width-A.width)>1||Math.abs(M.height-A.height)>1;if(!H&&!I){l==="forensic"&&y.push({section:O,posMoved:!1,sizeChanged:!1});continue}y.push({section:O,posMoved:H,sizeChanged:I})}if(y.length===0||l!=="forensic"&&y.every(O=>!O.posMoved&&!O.sizeChanged))return"";let m=`## Suggested Layout Changes

`;const f=c?c.width:typeof window<"u"?window.innerWidth:0,z=c?c.height:typeof window<"u"?window.innerHeight:0,E=Ky({width:f,height:z});l!=="compact"&&(m+=Zy(E)),l==="forensic"&&(m+=`> Detected at: \`${new Date(i.detectedAt).toISOString()}\`
`,m+=`> Total sections: ${_.length}

`);const P=O=>_.map(M=>({label:M.label,selector:M.selector,rect:O==="original"?M.originalRect:M.currentRect}));m+=`**Changes:**
`;for(const{section:O,posMoved:M,sizeChanged:A}of y){const H=O.originalRect,I=O.currentRect;if(!M&&!A){m+=`- ${O.label} — unchanged at (${Math.round(I.x)}, ${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)}px
`;continue}if(l==="compact"){M&&A?m+=`- Suggested: move **${O.label}** to (${Math.round(I.x)}, ${Math.round(I.y)}) ${Math.round(I.width)}×${Math.round(I.height)}px
`:M?m+=`- Suggested: move **${O.label}** to (${Math.round(I.x)}, ${Math.round(I.y)})
`:m+=`- Suggested: resize **${O.label}** to ${Math.round(I.width)}×${Math.round(I.height)}px
`;continue}if(M&&A?m+=`- Suggested: move and resize **${O.label}**
`:M?m+=`- Suggested: move **${O.label}**
`:m+=`- Suggested: resize **${O.label}** from ${Math.round(H.width)}×${Math.round(H.height)}px to ${Math.round(I.width)}×${Math.round(I.height)}px
`,M){const ke=oh(H,P("original")),he=oh(I,P("current")),Le=A?{width:H.width,height:H.height}:void 0;m+=`  - Currently ${zw(ke,{x:H.x,y:H.y},Le)}
`;const Ie=A?{width:I.width,height:I.height}:void 0,G=`at (${Math.round(I.x)}, ${Math.round(I.y)})`,de=Ie?`, ${Math.round(Ie.width)}×${Math.round(Ie.height)}px`:"",ae=Qy(he,{includeLeftRight:l==="detailed"||l==="forensic"});if(ae.length>0){m+=`  - Suggested position ${G}${de}: ${ae[0]}
`;for(let ot=1;ot<ae.length;ot++)m+=`    ${ae[ot]}
`}else m+=`  - Suggested position ${G}${de}
`;const mt=Jy(I,E);mt&&(m+=`  - CSS: ${mt}
`)}const le=Uw(O.selector);if(le&&(m+=`  - ${le}
`),m+=`  - Selector: \`${O.selector}\`
`,l==="detailed"||l==="forensic"){const ke=O.className?`${O.tagName}.${O.className.split(" ")[0]}`:O.tagName;ke!==O.selector&&(m+=`  - Element: \`${ke}\`
`),O.role&&(m+=`  - Role: \`${O.role}\`
`),l==="forensic"&&O.textSnippet&&(m+=`  - Text: "${O.textSnippet}"
`)}l==="forensic"&&(m+=`  - Original rect: \`{ x: ${Math.round(H.x)}, y: ${Math.round(H.y)}, w: ${Math.round(H.width)}, h: ${Math.round(H.height)} }\`
`,m+=`  - Current rect: \`{ x: ${Math.round(I.x)}, y: ${Math.round(I.y)}, w: ${Math.round(I.width)}, h: ${Math.round(I.height)} }\`
`)}if(l!=="compact"){const O=y.filter(A=>A.posMoved).map(A=>({label:A.section.label,originalRect:A.section.originalRect,currentRect:A.section.currentRect})),M=Bw(O);if(M.length>0){m+=`
### Layout Summary
`;for(const A of M)m+=`- ${A}
`}}if(l!=="compact"&&_.length>1){m+=`
### All Sections (current positions)
`;const O=[..._].sort((M,A)=>Math.abs(M.currentRect.y-A.currentRect.y)<20?M.currentRect.x-A.currentRect.x:M.currentRect.y-A.currentRect.y);for(const M of O){const A=M.currentRect,H=Math.abs(A.x-M.originalRect.x)>1||Math.abs(A.y-M.originalRect.y)>1||Math.abs(A.width-M.originalRect.width)>1||Math.abs(A.height-M.originalRect.height)>1;m+=`- ${M.label}: \`${Math.round(A.width)}×${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`${H?" ← suggested":""}
`}}return m}var ih="feedback-annotations-",ng=7;function Fc(i){return`${ih}${i}`}function sh(i){if(typeof window>"u")return[];try{const l=localStorage.getItem(Fc(i));if(!l)return[];const c=JSON.parse(l),_=Date.now()-ng*24*60*60*1e3;return c.filter(y=>!y.timestamp||y.timestamp>_)}catch{return[]}}function rg(i,l){if(!(typeof window>"u"))try{localStorage.setItem(Fc(i),JSON.stringify(l))}catch{}}function Fw(){const i=new Map;if(typeof window>"u")return i;try{const l=Date.now()-ng*24*60*60*1e3;for(let c=0;c<localStorage.length;c++){const _=localStorage.key(c);if(_!=null&&_.startsWith(ih)){const y=_.slice(ih.length),m=localStorage.getItem(_);if(m){const z=JSON.parse(m).filter(E=>!E.timestamp||E.timestamp>l);z.length>0&&i.set(y,z)}}}}catch{}return i}function Vl(i,l,c){const _=l.map(y=>({...y,_syncedTo:c}));rg(i,_)}var lh="agentation-design-";function Hw(i){if(typeof window>"u")return[];try{const l=localStorage.getItem(`${lh}${i}`);return l?JSON.parse(l):[]}catch{return[]}}function Pw(i,l){if(!(typeof window>"u"))try{localStorage.setItem(`${lh}${i}`,JSON.stringify(l))}catch{}}function Ww(i){if(!(typeof window>"u"))try{localStorage.removeItem(`${lh}${i}`)}catch{}}var uh="agentation-rearrange-";function Yw(i){if(typeof window>"u")return null;try{const l=localStorage.getItem(`${uh}${i}`);return l?JSON.parse(l):null}catch{return null}}function Vw(i,l){if(!(typeof window>"u"))try{localStorage.setItem(`${uh}${i}`,JSON.stringify(l))}catch{}}function Xw(i){if(!(typeof window>"u"))try{localStorage.removeItem(`${uh}${i}`)}catch{}}var ch="agentation-wireframe-";function Qw(i){if(typeof window>"u")return null;try{const l=localStorage.getItem(`${ch}${i}`);return l?JSON.parse(l):null}catch{return null}}function ag(i,l){if(!(typeof window>"u"))try{localStorage.setItem(`${ch}${i}`,JSON.stringify(l))}catch{}}function Hc(i){if(!(typeof window>"u"))try{localStorage.removeItem(`${ch}${i}`)}catch{}}var og="agentation-session-";function dh(i){return`${og}${i}`}function qw(i){if(typeof window>"u")return null;try{return localStorage.getItem(dh(i))}catch{return null}}function fh(i,l){if(!(typeof window>"u"))try{localStorage.setItem(dh(i),l)}catch{}}function Gw(i){if(!(typeof window>"u"))try{localStorage.removeItem(dh(i))}catch{}}var ig=`${og}toolbar-hidden`;function Kw(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ig)==="1"}catch{return!1}}function Jw(i){if(!(typeof window>"u"))try{i&&sessionStorage.setItem(ig,"1")}catch{}}async function hh(i,l){const c=await fetch(`${i}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:l})});if(!c.ok)throw new Error(`Failed to create session: ${c.status}`);return c.json()}async function sg(i,l){const c=await fetch(`${i}/sessions/${l}`);if(!c.ok)throw new Error(`Failed to get session: ${c.status}`);return c.json()}async function Is(i,l,c){const _=await fetch(`${i}/sessions/${l}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!_.ok)throw new Error(`Failed to sync annotation: ${_.status}`);return _.json()}async function lg(i,l,c){const _=await fetch(`${i}/annotations/${l}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!_.ok)throw new Error(`Failed to update annotation: ${_.status}`);return _.json()}async function mi(i,l){const c=await fetch(`${i}/annotations/${l}`,{method:"DELETE"});if(!c.ok)throw new Error(`Failed to delete annotation: ${c.status}`)}var _n={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},ug=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),cg=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Zw=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function eS(i){const l=(i==null?void 0:i.mode)??"filtered";let c=ug;if(i!=null&&i.skipExact){const _=i.skipExact instanceof Set?i.skipExact:new Set(i.skipExact);c=new Set([...ug,..._])}return{maxComponents:(i==null?void 0:i.maxComponents)??6,maxDepth:(i==null?void 0:i.maxDepth)??30,mode:l,skipExact:c,skipPatterns:i!=null&&i.skipPatterns?[...cg,...i.skipPatterns]:cg,userPatterns:(i==null?void 0:i.userPatterns)??Zw,filter:i==null?void 0:i.filter}}function tS(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function nS(i,l=10){const c=new Set;let _=i,y=0;for(;_&&y<l;)_.className&&typeof _.className=="string"&&_.className.split(/\s+/).forEach(m=>{if(m.length>1){const f=m.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();f.length>1&&c.add(f)}}),_=_.parentElement,y++;return c}function rS(i,l){const c=tS(i);for(const _ of l){if(_===c)return!0;const y=c.split("-").filter(f=>f.length>2),m=_.split("-").filter(f=>f.length>2);for(const f of y)for(const z of m)if(f===z||f.includes(z)||z.includes(f))return!0}return!1}function aS(i,l,c,_){if(c.filter)return c.filter(i,l);switch(c.mode){case"all":return!0;case"filtered":return!(c.skipExact.has(i)||c.skipPatterns.some(y=>y.test(i)));case"smart":return c.skipExact.has(i)||c.skipPatterns.some(y=>y.test(i))?!1:!!(_&&rS(i,_)||c.userPatterns.some(y=>y.test(i)));default:return!0}}var Us=null,oS=new WeakMap;function ph(i){return Object.keys(i).some(l=>l.startsWith("__reactFiber$")||l.startsWith("__reactInternalInstance$")||l.startsWith("__reactProps$"))}function iS(){if(Us!==null)return Us;if(typeof document>"u")return!1;if(document.body&&ph(document.body))return Us=!0,!0;const i=["#root","#app","#__next","[data-reactroot]"];for(const l of i){const c=document.querySelector(l);if(c&&ph(c))return Us=!0,!0}if(document.body){for(const l of document.body.children)if(ph(l))return Us=!0,!0}return Us=!1,!1}var Xl={map:oS};function sS(i){return Object.keys(i).find(c=>c.startsWith("__reactFiber$")||c.startsWith("__reactInternalInstance$"))||null}function lS(i){const l=sS(i);return l?i[l]:null}function Ki(i){return i?i.displayName?i.displayName:i.name?i.name:null:null}function uS(i){var y;const{tag:l,type:c,elementType:_}=i;if(l===_n.HostComponent||l===_n.HostText||l===_n.HostHoistable||l===_n.HostSingleton||l===_n.Fragment||l===_n.Mode||l===_n.Profiler||l===_n.DehydratedFragment||l===_n.HostRoot||l===_n.HostPortal||l===_n.ScopeComponent||l===_n.OffscreenComponent||l===_n.LegacyHiddenComponent||l===_n.CacheComponent||l===_n.TracingMarkerComponent||l===_n.Throw||l===_n.ViewTransitionComponent||l===_n.ActivityComponent)return null;if(l===_n.ForwardRef){const m=_;if(m!=null&&m.render){const f=Ki(m.render);if(f)return f}return m!=null&&m.displayName?m.displayName:Ki(c)}if(l===_n.MemoComponent||l===_n.SimpleMemoComponent){const m=_;if(m!=null&&m.type){const f=Ki(m.type);if(f)return f}return m!=null&&m.displayName?m.displayName:Ki(c)}if(l===_n.ContextProvider){const m=c;return(y=m==null?void 0:m._context)!=null&&y.displayName?`${m._context.displayName}.Provider`:null}if(l===_n.ContextConsumer){const m=c;return m!=null&&m.displayName?`${m.displayName}.Consumer`:null}if(l===_n.LazyComponent){const m=_;return(m==null?void 0:m._status)===1&&m._result?Ki(m._result):null}return l===_n.SuspenseComponent||l===_n.SuspenseListComponent?null:l===_n.IncompleteClassComponent||l===_n.IncompleteFunctionComponent||l===_n.FunctionComponent||l===_n.ClassComponent||l===_n.IndeterminateComponent?Ki(c):null}function cS(i){return i.length<=2||i.length<=3&&i===i.toLowerCase()}function dS(i,l){const c=eS(l),_=c.mode==="all";if(_){const E=Xl.map.get(i);if(E!==void 0)return E}if(!iS()){const E={path:null,components:[]};return _&&Xl.map.set(i,E),E}const y=c.mode==="smart"?nS(i):void 0,m=[];try{let E=lS(i),P=0;for(;E&&P<c.maxDepth&&m.length<c.maxComponents;){const O=uS(E);O&&!cS(O)&&aS(O,P,c,y)&&m.push(O),E=E.return,P++}}catch{const E={path:null,components:[]};return _&&Xl.map.set(i,E),E}if(m.length===0){const E={path:null,components:[]};return _&&Xl.map.set(i,E),E}const z={path:m.slice().reverse().map(E=>`<${E}>`).join(" "),components:m};return _&&Xl.map.set(i,z),z}var Ql={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function fS(i){if(!i||typeof i!="object")return null;const l=Object.keys(i),c=l.find(m=>m.startsWith("__reactFiber$"));if(c)return i[c]||null;const _=l.find(m=>m.startsWith("__reactInternalInstance$"));if(_)return i[_]||null;const y=l.find(m=>{if(!m.startsWith("__react"))return!1;const f=i[m];return f&&typeof f=="object"&&"_debugSource"in f});return y&&i[y]||null}function ql(i){if(!i.type||typeof i.type=="string")return null;if(typeof i.type=="object"||typeof i.type=="function"){const l=i.type;if(l.displayName)return l.displayName;if(l.name)return l.name}return null}function hS(i,l=50){var y;let c=i,_=0;for(;c&&_<l;){if(c._debugSource)return{source:c._debugSource,componentName:ql(c)};if((y=c._debugOwner)!=null&&y._debugSource)return{source:c._debugOwner._debugSource,componentName:ql(c._debugOwner)};c=c.return,_++}return null}function pS(i){let l=i,c=0;const _=50;for(;l&&c<_;){const y=l,m=["_debugSource","__source","_source","debugSource"];for(const f of m){const z=y[f];if(z&&typeof z=="object"&&"fileName"in z)return{source:z,componentName:ql(l)}}if(l.memoizedProps){const f=l.memoizedProps;if(f.__source&&typeof f.__source=="object"){const z=f.__source;if(z.fileName&&z.lineNumber)return{source:{fileName:z.fileName,lineNumber:z.lineNumber,columnNumber:z.columnNumber},componentName:ql(l)}}}l=l.return,c++}return null}var Pc=new Map;function _S(i){var y;const l=i.tag,c=i.type,_=i.elementType;if(typeof c=="string"||c==null||typeof c=="function"&&((y=c.prototype)!=null&&y.isReactComponent))return null;if((l===Ql.FunctionComponent||l===Ql.IndeterminateComponent)&&typeof c=="function")return c;if(l===Ql.ForwardRef&&_){const m=_.render;if(typeof m=="function")return m}if((l===Ql.MemoComponent||l===Ql.SimpleMemoComponent)&&_){const m=_.type;if(typeof m=="function")return m}return typeof c=="function"?c:null}function mS(){const i=xy,l=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(l&&"H"in l)return{get:()=>l.H,set:_=>{l.H=_}};const c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(c){const _=c.ReactCurrentDispatcher;if(_&&"current"in _)return{get:()=>_.current,set:y=>{_.current=y}}}return null}function yS(i){const l=i.split(`
`),c=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],_=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,y=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const m of l){const f=m.trim();if(!f||c.some(E=>E.test(f)))continue;const z=_.exec(f)||y.exec(f);if(z)return{fileName:z[1],line:parseInt(z[2],10),column:parseInt(z[3],10)}}return null}function gS(i){let l=i;return l=l.replace(/[?#].*$/,""),l=l.replace(/^turbopack:\/\/\/\[project\]\//,""),l=l.replace(/^webpack-internal:\/\/\/\.\//,""),l=l.replace(/^webpack-internal:\/\/\//,""),l=l.replace(/^webpack:\/\/\/\.\//,""),l=l.replace(/^webpack:\/\/\//,""),l=l.replace(/^turbopack:\/\/\//,""),l=l.replace(/^https?:\/\/[^/]+\//,""),l=l.replace(/^file:\/\/\//,"/"),l=l.replace(/^\([^)]+\)\/\.\//,""),l=l.replace(/^\.\//,""),l}function vS(i){const l=_S(i);if(!l)return null;if(Pc.has(l))return Pc.get(l);const c=mS();if(!c)return Pc.set(l,null),null;const _=c.get();let y=null;try{const m=new Proxy({},{get(){throw new Error("probe")}});c.set(m);try{l({})}catch(f){if(f instanceof Error&&f.message==="probe"&&f.stack){const z=yS(f.stack);z&&(y={fileName:gS(z.fileName),lineNumber:z.line,columnNumber:z.column,componentName:ql(i)||void 0})}}}finally{c.set(_)}return Pc.set(l,y),y}function xS(i,l=15){let c=i,_=0;for(;c&&_<l;){const y=vS(c);if(y)return y;c=c.return,_++}return null}function _h(i){const l=fS(i);if(!l)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let c=hS(l);if(c||(c=pS(l)),c!=null&&c.source)return{found:!0,source:{fileName:c.source.fileName,lineNumber:c.source.lineNumber,columnNumber:c.source.columnNumber,componentName:c.componentName||void 0},isReactApp:!0,isProduction:!1};const _=xS(l);return _?{found:!0,source:_,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function bS(i,l="path"){const{fileName:c,lineNumber:_,columnNumber:y}=i;let m=`${c}:${_}`;return y!==void 0&&(m+=`:${y}`),l==="vscode"?`vscode://file${c.startsWith("/")?"":"/"}${m}`:m}function wS(i,l=10){let c=i,_=0;for(;c&&_<l;){const y=_h(c);if(y.found)return y;c=c.parentElement,_++}return _h(i)}var SS=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,kS={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(i)),i.textContent=SS}var ue=kS,Gl=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function dg(i,l,c="standard"){if(i.length===0)return"";const _=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let y=`## Page Feedback: ${l}
`;return c==="forensic"?(y+=`
**Environment:**
`,y+=`- Viewport: ${_}
`,typeof window<"u"&&(y+=`- URL: ${window.location.href}
`,y+=`- User Agent: ${navigator.userAgent}
`,y+=`- Timestamp: ${new Date().toISOString()}
`,y+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),y+=`
---
`):c!=="compact"&&(y+=`**Viewport:** ${_}
`),y+=`
`,i.forEach((m,f)=>{c==="compact"?(y+=`${f+1}. **${m.element}**${m.sourceFile?` (${m.sourceFile})`:""}: ${m.comment}`,m.selectedText&&(y+=` (re: "${m.selectedText.slice(0,30)}${m.selectedText.length>30?"...":""}")`),y+=`
`):c==="forensic"?(y+=`### ${f+1}. ${m.element}
`,m.isMultiSelect&&m.fullPath&&(y+=`*Forensic data shown for first element of selection*
`),m.fullPath&&(y+=`**Full DOM Path:** ${m.fullPath}
`),m.cssClasses&&(y+=`**CSS Classes:** ${m.cssClasses}
`),m.boundingBox&&(y+=`**Position:** x:${Math.round(m.boundingBox.x)}, y:${Math.round(m.boundingBox.y)} (${Math.round(m.boundingBox.width)}×${Math.round(m.boundingBox.height)}px)
`),y+=`**Annotation at:** ${m.x.toFixed(1)}% from left, ${Math.round(m.y)}px from top
`,m.selectedText&&(y+=`**Selected text:** "${m.selectedText}"
`),m.nearbyText&&!m.selectedText&&(y+=`**Context:** ${m.nearbyText.slice(0,100)}
`),m.computedStyles&&(y+=`**Computed Styles:** ${m.computedStyles}
`),m.accessibility&&(y+=`**Accessibility:** ${m.accessibility}
`),m.nearbyElements&&(y+=`**Nearby Elements:** ${m.nearbyElements}
`),m.sourceFile&&(y+=`**Source:** ${m.sourceFile}
`),m.reactComponents&&(y+=`**React:** ${m.reactComponents}
`),y+=`**Feedback:** ${m.comment}

`):(y+=`### ${f+1}. ${m.element}
`,y+=`**Location:** ${m.elementPath}
`,m.sourceFile&&(y+=`**Source:** ${m.sourceFile}
`),m.reactComponents&&(y+=`**React:** ${m.reactComponents}
`),c==="detailed"&&(m.cssClasses&&(y+=`**Classes:** ${m.cssClasses}
`),m.boundingBox&&(y+=`**Position:** ${Math.round(m.boundingBox.x)}px, ${Math.round(m.boundingBox.y)}px (${Math.round(m.boundingBox.width)}×${Math.round(m.boundingBox.height)}px)
`)),m.selectedText&&(y+=`**Selected text:** "${m.selectedText}"
`),c==="detailed"&&m.nearbyText&&!m.selectedText&&(y+=`**Context:** ${m.nearbyText.slice(0,100)}
`),y+=`**Feedback:** ${m.comment}

`)}),y.trim()}var CS=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,ES={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-annotation-marker-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(i)),i.textContent=CS}var sr=ES;function fg({annotation:i,globalIndex:l,layerIndex:c,layerSize:_,isExiting:y,isClearing:m,isAnimated:f,isHovered:z,isDeleting:E,isEditingAny:P,renumberFrom:O,markerClickBehavior:M,tooltipStyle:A,onHoverEnter:H,onHoverLeave:I,onClick:le,onContextMenu:ke}){const he=(z||E)&&!P,Le=he&&M==="delete",Ie=i.isMultiSelect,G=Ie?"var(--agentation-color-green)":"var(--agentation-color-accent)",de=y?sr.exit:m?sr.clearing:f?"":sr.enter,Ae=y?`${(_-1-c)*20}ms`:`${c*20}ms`;return o.jsxs("div",{className:`${sr.marker} ${Ie?sr.multiSelect:""} ${de} ${Le?sr.hovered:""}`,"data-annotation-marker":!0,style:{left:`${i.x}%`,top:i.y,backgroundColor:Le?void 0:G,animationDelay:Ae},onMouseEnter:()=>H(i),onMouseLeave:I,onClick:ae=>{ae.stopPropagation(),y||le(i)},onContextMenu:ke?ae=>{M==="delete"&&(ae.preventDefault(),ae.stopPropagation(),y||ke(i))}:void 0,children:[he?Le?o.jsx(My,{size:Ie?18:16}):o.jsx(Ib,{size:16}):o.jsx("span",{className:O!==null&&l>=O?sr.renumber:void 0,children:l+1}),z&&!P&&o.jsxs("div",{className:`${sr.markerTooltip} ${sr.enter}`,style:A,children:[o.jsxs("span",{className:sr.markerQuote,children:[i.element,i.selectedText&&` "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}"`]}),o.jsx("span",{className:sr.markerNote,children:i.comment})]})]})}function RS({x:i,y:l,isMultiSelect:c,isExiting:_}){return o.jsx("div",{className:`${sr.marker} ${sr.pending} ${c?sr.multiSelect:""} ${_?sr.exit:sr.enter}`,style:{left:`${i}%`,top:l,backgroundColor:c?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:o.jsx(Rb,{size:12})})}function hg({annotation:i,fixed:l}){const c=i.isMultiSelect;return o.jsx("div",{className:`${sr.marker} ${l?sr.fixed:""} ${sr.hovered} ${c?sr.multiSelect:""} ${sr.exit}`,"data-annotation-marker":!0,style:{left:`${i.x}%`,top:i.y},children:o.jsx(My,{size:c?12:10})})}var jS=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,TS={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-switch-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-switch-styles",document.head.appendChild(i)),i.textContent=jS}var mh=TS,yh=({className:i="",...l})=>o.jsxs("div",{className:`${mh.switchContainer} ${i}`,children:[o.jsx("input",{className:mh.switchInput,type:"checkbox",...l}),o.jsx("div",{className:mh.switchThumb})]}),MS=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,DS={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-checkbox-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(i)),i.textContent=MS}var Wc=DS,LS=({className:i="",...l})=>o.jsxs("div",{className:`${Wc.checkboxContainer} ${i}`,children:[o.jsx("input",{className:Wc.checkboxInput,type:"checkbox",...l}),o.jsx("svg",{className:Wc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:o.jsx("path",{className:Wc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),OS=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,NS={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-checkbox-field-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(i)),i.textContent=OS}var pg=NS,_g=({className:i="",label:l,tooltip:c,checked:_,onChange:y,...m})=>{const f=w.useId();return o.jsxs("div",{className:`${pg.container} ${i}`,...m,children:[o.jsx(LS,{id:f,onChange:y,checked:_}),o.jsx("label",{className:pg.label,htmlFor:f,children:l}),c&&o.jsx(qi,{content:c})]})},AS=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,$S={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-settings-panel-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(i)),i.textContent=AS}var We=$S;function zS({settings:i,onSettingsChange:l,isDarkMode:c,onToggleTheme:_,isDevMode:y,connectionStatus:m,endpoint:f,isVisible:z,toolbarNearBottom:E,settingsPage:P,onSettingsPageChange:O,onHideToolbar:M}){var A;return o.jsx("div",{className:`${We.settingsPanel} ${z?We.enter:We.exit}`,style:E?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:o.jsxs("div",{className:We.settingsPanelContainer,children:[o.jsxs("div",{className:`${We.settingsPage} ${P==="automations"?We.slideLeft:""}`,children:[o.jsxs("div",{className:We.settingsHeader,children:[o.jsx("a",{className:We.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:o.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),o.jsxs("p",{className:We.settingsVersion,children:["v","3.0.2"]}),o.jsx("button",{className:We.themeToggle,onClick:_,title:c?"Switch to light mode":"Switch to dark mode",children:o.jsx("span",{className:We.themeIconWrapper,children:o.jsx("span",{className:We.themeIcon,children:c?o.jsx(zb,{size:20}):o.jsx(Bb,{size:20})},c?"sun":"moon")})})]}),o.jsx("div",{className:We.divider}),o.jsxs("div",{className:We.settingsSection,children:[o.jsxs("div",{className:We.settingsRow,children:[o.jsxs("div",{className:We.settingsLabel,children:["Output Detail",o.jsx(qi,{content:"Controls how much detail is included in the copied output"})]}),o.jsxs("button",{className:We.cycleButton,onClick:()=>{const I=(Gl.findIndex(le=>le.value===i.outputDetail)+1)%Gl.length;l({outputDetail:Gl[I].value})},children:[o.jsx("span",{className:We.cycleButtonText,children:(A=Gl.find(H=>H.value===i.outputDetail))==null?void 0:A.label},i.outputDetail),o.jsx("span",{className:We.cycleDots,children:Gl.map(H=>o.jsx("span",{className:`${We.cycleDot} ${i.outputDetail===H.value?We.active:""}`},H.value))})]})]}),o.jsxs("div",{className:`${We.settingsRow} ${We.settingsRowMarginTop} ${y?"":We.settingsRowDisabled}`,children:[o.jsxs("div",{className:We.settingsLabel,children:["React Components",o.jsx(qi,{content:y?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),o.jsx(yh,{checked:y&&i.reactEnabled,onChange:H=>l({reactEnabled:H.target.checked}),disabled:!y})]}),o.jsxs("div",{className:`${We.settingsRow} ${We.settingsRowMarginTop}`,children:[o.jsxs("div",{className:We.settingsLabel,children:["Hide Until Restart",o.jsx(qi,{content:"Hides the toolbar until you open a new tab"})]}),o.jsx(yh,{checked:!1,onChange:H=>{H.target.checked&&M()}})]})]}),o.jsx("div",{className:We.divider}),o.jsxs("div",{className:We.settingsSection,children:[o.jsx("div",{className:`${We.settingsLabel} ${We.settingsLabelMarker}`,children:"Marker Color"}),o.jsx("div",{className:We.colorOptions,children:Kl.map(H=>o.jsx("button",{className:`${We.colorOption} ${i.annotationColorId===H.id?We.selected:""}`,style:{"--swatch":H.srgb,"--swatch-p3":H.p3},onClick:()=>l({annotationColorId:H.id}),title:H.label,type:"button"},H.id))})]}),o.jsx("div",{className:We.divider}),o.jsxs("div",{className:We.settingsSection,children:[o.jsx(_g,{className:"checkbox-field",label:"Clear on copy/send",checked:i.autoClearAfterCopy,onChange:H=>l({autoClearAfterCopy:H.target.checked}),tooltip:"Automatically clear annotations after copying"}),o.jsx(_g,{className:We.checkboxField,label:"Block page interactions",checked:i.blockInteractions,onChange:H=>l({blockInteractions:H.target.checked})})]}),o.jsx("div",{className:We.divider}),o.jsxs("button",{className:We.settingsNavLink,onClick:()=>O("automations"),children:[o.jsx("span",{children:"Manage MCP & Webhooks"}),o.jsxs("span",{className:We.settingsNavLinkRight,children:[f&&m!=="disconnected"&&o.jsx("span",{className:`${We.mcpNavIndicator} ${We[m]}`}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),o.jsxs("div",{className:`${We.settingsPage} ${We.automationsPage} ${P==="automations"?We.slideIn:""}`,children:[o.jsxs("button",{className:We.settingsBackButton,onClick:()=>O("main"),children:[o.jsx(Fb,{size:16}),o.jsx("span",{children:"Manage MCP & Webhooks"})]}),o.jsx("div",{className:We.divider}),o.jsxs("div",{className:We.settingsSection,children:[o.jsxs("div",{className:We.settingsRow,children:[o.jsxs("span",{className:We.automationHeader,children:["MCP Connection",o.jsx(qi,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),f&&o.jsx("div",{className:`${We.mcpStatusDot} ${We[m]}`,title:m==="connected"?"Connected":m==="connecting"?"Connecting...":"Disconnected"})]}),o.jsxs("p",{className:We.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",o.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:We.learnMoreLink,children:"Learn more"})]})]}),o.jsx("div",{className:We.divider}),o.jsxs("div",{className:`${We.settingsSection} ${We.settingsSectionGrow}`,children:[o.jsxs("div",{className:We.settingsRow,children:[o.jsxs("span",{className:We.automationHeader,children:["Webhooks",o.jsx(qi,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),o.jsxs("div",{className:We.autoSendContainer,children:[o.jsx("label",{htmlFor:"agentation-auto-send",className:`${We.autoSendLabel} ${i.webhooksEnabled?We.active:""} ${i.webhookUrl?"":We.disabled}`,children:"Auto-Send"}),o.jsx(yh,{id:"agentation-auto-send",checked:i.webhooksEnabled,onChange:H=>l({webhooksEnabled:H.target.checked}),disabled:!i.webhookUrl})]})]}),o.jsx("p",{className:We.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),o.jsx("textarea",{className:We.webhookUrlInput,placeholder:"Webhook URL",value:i.webhookUrl,onKeyDown:H=>H.stopPropagation(),onChange:H=>l({webhookUrl:H.target.value})})]})]})]})})}function gh(i,l="filtered"){const{name:c,path:_}=Bs(i);if(l==="off")return{name:c,elementName:c,path:_,reactComponents:null};const y=dS(i,{mode:l});return{name:y.path?`${y.path} ${c}`:c,elementName:c,path:_,reactComponents:y.path}}var mg=!1,vh={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},So=i=>{if(!i||!i.trim())return!1;try{const l=new URL(i.trim());return l.protocol==="http:"||l.protocol==="https:"}catch{return!1}},BS={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},Kl=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],IS=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const i=document.createElement("style");i.id="agentation-color-tokens",i.textContent=[...Kl.map(l=>`
      [data-agentation-accent="${l.id}"] {
        --agentation-color-accent: ${l.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${l.id}"] {
          --agentation-color-accent: ${l.p3};
        }
      }
    `),`:root {
      ${Kl.map(l=>`--agentation-color-${l.id}: ${l.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Kl.map(l=>`--agentation-color-${l.id}: ${l.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(i)};IS();function Ji(i,l){let c=document.elementFromPoint(i,l);if(!c)return null;for(;c!=null&&c.shadowRoot;){const _=c.shadowRoot.elementFromPoint(i,l);if(!_||_===c)break;c=_}return c}function xh(i){let l=i;for(;l&&l!==document.body;){const _=window.getComputedStyle(l).position;if(_==="fixed"||_==="sticky")return!0;l=l.parentElement}return!1}function Zi(i){return i.status!=="resolved"&&i.status!=="dismissed"}function Yc(i){const l=_h(i),c=l.found?l:wS(i);if(c.found&&c.source)return bS(c.source,"path")}function US({demoAnnotations:i,demoDelay:l=1e3,enableDemoMode:c=!1,onAnnotationAdd:_,onAnnotationDelete:y,onAnnotationUpdate:m,onAnnotationsClear:f,onCopy:z,onSubmit:E,copyToClipboard:P=!0,endpoint:O,sessionId:M,onSessionCreated:A,webhookUrl:H,className:I}={}){var is,Qc,ki,qc,Gc,qs;const[le,ke]=w.useState(!1),[he,Le]=w.useState([]),[Ie,G]=w.useState(!0),[de,Ae]=w.useState(()=>Kw()),[ae,mt]=w.useState(!1),ot=w.useRef(null);w.useEffect(()=>{const v=T=>{const R=ot.current;R&&R.contains(T.target)&&T.stopPropagation()},S=["mousedown","click","pointerdown"];return S.forEach(T=>document.body.addEventListener(T,v)),()=>{S.forEach(T=>document.body.removeEventListener(T,v))}},[]);const[nt,Pe]=w.useState(!1),[ct,Oe]=w.useState(!1),[Qe,Ge]=w.useState(null),[Ce,Ke]=w.useState({x:0,y:0}),[fe,it]=w.useState(null),[Tt,Gt]=w.useState(!1),[tn,wn]=w.useState("idle"),[Xn,tr]=w.useState(!1),[mr,Sn]=w.useState(!1),[Gn,Un]=w.useState(null),[Fn,mn]=w.useState(null),[Xt,nn]=w.useState([]),[ln,Ln]=w.useState(null),[jn,lr]=w.useState(null),[K,Ue]=w.useState(null),[lt,Ye]=w.useState(null),[vt,ft]=w.useState([]),[Dt,Je]=w.useState(0),[Ct,en]=w.useState(!1),[Ve,$]=w.useState(!1),[j,B]=w.useState(!1),[V,ge]=w.useState(!1),[ve,oe]=w.useState(!1),[Ze,st]=w.useState("main"),[rt,Ee]=w.useState(!1),[_e,At]=w.useState(!1),[$t,fn]=w.useState(!1),[Re,Ft]=w.useState([]),[Lt,Et]=w.useState(null),On=w.useRef(!1),[et,Ot]=w.useState(!1),[un,kn]=w.useState(!1),[Nn,ha]=w.useState(1),[Or,ur]=w.useState("new-page"),[k,re]=w.useState(""),[xe,Me]=w.useState(!1),[se,ut]=w.useState(null),Ht=w.useRef(!1),zt=w.useRef({rearrange:null,placements:[]}),Tn=w.useRef({rearrange:null,placements:[]}),[An,$n]=w.useState(0),[Rr,xa]=w.useState(0),[ba,Mn]=w.useState(0),[Bt,Aa]=w.useState(0),$a=w.useRef(new Set),Vo=w.useRef(new Set),fr=w.useRef(null),ko=w.useRef(),yi=_e&&le&&!$t&&et;w.useEffect(()=>{if(yi){kn(!1);const v=As(()=>{kn(!0)});return()=>cancelAnimationFrame(v)}else kn(!1)},[yi]);const eo=w.useRef(new Map),to=w.useRef(new Map),no=w.useRef(),[Wr,gi]=w.useState(!1),[yr,es]=w.useState([]),za=w.useRef(yr);za.current=yr;const[Co,Xo]=w.useState(null),Eo=w.useRef(null);w.useRef(!1),w.useRef([]),w.useRef(0),w.useRef(null),w.useRef(null),w.useRef(1);const[Ro,Qo]=w.useState(!1),Ba=w.useRef(null),[Yn,Ia]=w.useState([]),pa=w.useRef({cmd:!1,shift:!1}),Qn=()=>{Ee(!0)},Fs=()=>{Ee(!1)},ts=()=>{Ro||(Ba.current=gt(()=>Qo(!0),850))},rn=()=>{Ba.current&&(clearTimeout(Ba.current),Ba.current=null),Qo(!1),Fs()};w.useEffect(()=>()=>{Ba.current&&clearTimeout(Ba.current)},[]);const[Pt,ro]=w.useState(()=>{try{const v=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...vh,...v,annotationColorId:Kl.find(S=>S.id===v.annotationColorId)?v.annotationColorId:vh.annotationColorId}}catch{return vh}}),[dt,vi]=w.useState(!0),[jr,jo]=w.useState(!1),To=()=>{var v;(v=ot.current)==null||v.classList.add(ue.disableTransitions),vi(S=>!S),As(()=>{var S;(S=ot.current)==null||S.classList.remove(ue.disableTransitions)})},Jl=!0,Hn=Pt.reactEnabled?BS[Pt.outputDetail]:"off",[It,xi]=w.useState(M??null),ea=w.useRef(!1),[zn,gr]=w.useState(O?"connecting":"disconnected"),[yn,qo]=w.useState(null),[Ua,bi]=w.useState(!1),[wa,Hs]=w.useState(null),Fa=w.useRef(!1),[Mo,ao]=w.useState(new Set),[Ha,oo]=w.useState(new Set),[Pa,io]=w.useState(!1),[Ps,so]=w.useState(!1),[ta,ns]=w.useState(!1),p=w.useRef(null),C=w.useRef(null),W=w.useRef(null),q=w.useRef(null),ye=w.useRef(!1),ht=w.useRef(0),Be=w.useRef(null),kt=w.useRef(null),Yt=8,hn=50,Cn=w.useRef(null),En=w.useRef(null),Nt=w.useRef(null),Te=typeof window<"u"?window.location.pathname:"/";w.useEffect(()=>{if(V)oe(!0);else{Ee(!1),st("main");const v=gt(()=>oe(!1),0);return()=>clearTimeout(v)}},[V]);const qn=le&&Ie&&!_e;w.useEffect(()=>{if(qn){Oe(!1),Pe(!0),ao(new Set);const v=gt(()=>{ao(S=>{const T=new Set(S);return he.forEach(R=>T.add(R.id)),T})},350);return()=>clearTimeout(v)}else if(nt){Oe(!0);const v=gt(()=>{Pe(!1),Oe(!1)},250);return()=>clearTimeout(v)}},[qn]),w.useEffect(()=>{$(!0),Je(window.scrollY);const v=sh(Te);Le(v.filter(Zi)),mg||(jo(!0),mg=!0,gt(()=>jo(!1),750));try{const S=localStorage.getItem("feedback-toolbar-theme");S!==null&&vi(S==="dark")}catch{}try{const S=localStorage.getItem("feedback-toolbar-position");if(S){const T=JSON.parse(S);typeof T.x=="number"&&typeof T.y=="number"&&qo(T)}}catch{}},[Te]),w.useEffect(()=>{Ve&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Pt))},[Pt,Ve]),w.useEffect(()=>{Ve&&localStorage.setItem("feedback-toolbar-theme",dt?"dark":"light")},[dt,Ve]);const Do=w.useRef(!1);w.useEffect(()=>{const v=Do.current;Do.current=Ua,v&&!Ua&&yn&&Ve&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(yn))},[Ua,yn,Ve]),w.useEffect(()=>{if(!O||!Ve||ea.current)return;ea.current=!0,gr("connecting"),(async()=>{try{const S=qw(Te),T=M||S;let R=!1;if(T)try{const N=await sg(O,T);xi(N.id),gr("connected"),fh(Te,N.id),R=!0;const Q=sh(Te),me=new Set(N.annotations.map(be=>be.id)),we=Q.filter(be=>!me.has(be.id));if(we.length>0){const qe=`${typeof window<"u"?window.location.origin:""}${Te}`,xt=(await Promise.allSettled(we.map(_t=>Is(O,N.id,{..._t,sessionId:N.id,url:qe})))).map((_t,Fe)=>_t.status==="fulfilled"?_t.value:(console.warn("[Agentation] Failed to sync annotation:",_t.reason),we[Fe])),Vt=[...N.annotations,...xt];Le(Vt.filter(Zi)),Vl(Te,Vt.filter(Zi),N.id)}else Le(N.annotations.filter(Zi)),Vl(Te,N.annotations.filter(Zi),N.id)}catch(N){console.warn("[Agentation] Could not join session, creating new:",N),Gw(Te)}if(!R){const N=typeof window<"u"?window.location.href:"/",Q=await hh(O,N);xi(Q.id),gr("connected"),fh(Te,Q.id),A==null||A(Q.id);const me=Fw(),we=typeof window<"u"?window.location.origin:"",be=[];for(const[qe,at]of me){const xt=at.filter(Fe=>!Fe._syncedTo);if(xt.length===0)continue;const Vt=`${we}${qe}`,_t=qe===Te;be.push((async()=>{try{const Fe=_t?Q:await hh(O,Vt),rr=(await Promise.allSettled(xt.map(an=>Is(O,Fe.id,{...an,sessionId:Fe.id,url:Vt})))).map((an,Jn)=>an.status==="fulfilled"?an.value:(console.warn("[Agentation] Failed to sync annotation:",an.reason),xt[Jn])).filter(Zi);if(Vl(qe,rr,Fe.id),_t){const an=new Set(xt.map(Jn=>Jn.id));Le(Jn=>{const wt=Jn.filter(Ut=>!an.has(Ut.id));return[...rr,...wt]})}}catch(Fe){console.warn(`[Agentation] Failed to sync annotations for ${qe}:`,Fe)}})())}await Promise.allSettled(be)}}catch(S){gr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",S)}})()},[O,M,Ve,A,Te]),w.useEffect(()=>{if(!O||!Ve)return;const v=async()=>{try{(await fetch(`${O}/health`)).ok?gr("connected"):gr("disconnected")}catch{gr("disconnected")}};v();const S=Wb(v,1e4);return()=>clearInterval(S)},[O,Ve]),w.useEffect(()=>{if(!O||!Ve||!It)return;const v=new EventSource(`${O}/sessions/${It}/events`),S=["resolved","dismissed"],T=R=>{var N;try{const Q=JSON.parse(R.data);if(S.includes((N=Q.payload)==null?void 0:N.status)){const me=Q.payload.id,we=Q.payload.kind;if(we==="placement"){for(const[be,qe]of eo.current)if(qe===me){eo.current.delete(be),Ft(at=>at.filter(xt=>xt.id!==be));break}}else if(we==="rearrange"){for(const[be,qe]of to.current)if(qe===me){to.current.delete(be),ut(at=>{if(!at)return null;const xt=at.sections.filter(Vt=>Vt.id!==be);return xt.length===0?null:{...at,sections:xt}});break}}else oo(be=>new Set(be).add(me)),gt(()=>{Le(be=>be.filter(qe=>qe.id!==me)),oo(be=>{const qe=new Set(be);return qe.delete(me),qe})},150)}}catch{}};return v.addEventListener("annotation.updated",T),()=>{v.removeEventListener("annotation.updated",T),v.close()}},[O,Ve,It]),w.useEffect(()=>{if(!O||!Ve)return;const v=kt.current==="disconnected",S=zn==="connected";kt.current=zn,v&&S&&(async()=>{try{const R=sh(Te);if(R.length===0)return;const Q=`${typeof window<"u"?window.location.origin:""}${Te}`;let me=It,we=[];if(me)try{we=(await sg(O,me)).annotations}catch{me=null}me||(me=(await hh(O,Q)).id,xi(me),fh(Te,me));const be=new Set(we.map(at=>at.id)),qe=R.filter(at=>!be.has(at.id));if(qe.length>0){const xt=(await Promise.allSettled(qe.map(Fe=>Is(O,me,{...Fe,sessionId:me,url:Q})))).map((Fe,Kn)=>Fe.status==="fulfilled"?Fe.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Fe.reason),qe[Kn])),_t=[...we,...xt].filter(Zi);Le(_t),Vl(Te,_t,me)}}catch(R){console.warn("[Agentation] Failed to sync on reconnect:",R)}})()},[zn,O,Ve,It,Te]);const rs=w.useCallback(()=>{ae||(mt(!0),ge(!1),ke(!1),gt(()=>{Jw(!0),Ae(!0),mt(!1)},400))},[ae]);w.useEffect(()=>{if(!c||!Ve||!i||i.length===0||he.length>0)return;const v=[];return v.push(gt(()=>{ke(!0)},l-200)),i.forEach((S,T)=>{const R=l+T*300;v.push(gt(()=>{const N=document.querySelector(S.selector);if(!N)return;const Q=N.getBoundingClientRect(),{name:me,path:we}=Bs(N),be={id:`demo-${Date.now()}-${T}`,x:(Q.left+Q.width/2)/window.innerWidth*100,y:Q.top+Q.height/2+window.scrollY,comment:S.comment,element:me,elementPath:we,timestamp:Date.now(),selectedText:S.selectedText,boundingBox:{x:Q.left,y:Q.top+window.scrollY,width:Q.width,height:Q.height},nearbyText:Wl(N),cssClasses:Yl(N)};Le(qe=>[...qe,be])},R))}),()=>{v.forEach(clearTimeout)}},[c,Ve,i,l]),w.useEffect(()=>{const v=()=>{Je(window.scrollY),en(!0),Nt.current&&clearTimeout(Nt.current),Nt.current=gt(()=>{en(!1)},150)};return window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),Nt.current&&clearTimeout(Nt.current)}},[]),w.useEffect(()=>{Ve&&he.length>0?It?Vl(Te,he,It):rg(Te,he):Ve&&he.length===0&&localStorage.removeItem(Fc(Te))},[he,Te,Ve,It]),w.useEffect(()=>{if(Ve&&!On.current){On.current=!0;const v=Hw(Te);v.length>0&&Ft(v)}},[Ve,Te]),w.useEffect(()=>{Ve&&On.current&&!et&&(Re.length>0?Pw(Te,Re):Ww(Te))},[Re,Te,Ve,et]),w.useEffect(()=>{if(Ve&&!Ht.current){Ht.current=!0;const v=Yw(Te);if(v){const S={...v,sections:v.sections.map(T=>({...T,currentRect:T.currentRect??{...T.originalRect}}))};ut(S)}}},[Ve,Te]),w.useEffect(()=>{Ve&&Ht.current&&!et&&(se?Vw(Te,se):Xw(Te))},[se,Te,Ve,et]);const Sa=w.useRef(!1);w.useEffect(()=>{if(Ve&&!Sa.current){Sa.current=!0;const v=Qw(Te);v&&(Tn.current={rearrange:v.rearrange,placements:v.placements||[]},v.purpose&&re(v.purpose))}},[Ve,Te]),w.useEffect(()=>{var S,T,R;if(!Ve||!Sa.current)return;const v=Tn.current;et?(((S=se==null?void 0:se.sections)==null?void 0:S.length)??0)>0||Re.length>0||k?ag(Te,{rearrange:se,placements:Re,purpose:k}):Hc(Te):(((R=(T=v.rearrange)==null?void 0:T.sections)==null?void 0:R.length)??0)>0||v.placements.length>0||k?ag(Te,{rearrange:v.rearrange,placements:v.placements,purpose:k}):Hc(Te)},[se,Re,k,et,Te,Ve]),w.useEffect(()=>{_e&&!se&&ut({sections:[],originalOrder:[],detectedAt:Date.now()})},[_e,se]),w.useEffect(()=>{if(!O||!It)return;const v=eo.current,S=new Set(Re.map(T=>T.id));for(const T of Re){if(v.has(T.id))continue;v.set(T.id,"");const R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Te;Is(O,It,{id:T.id,x:T.x/window.innerWidth*100,y:T.y,comment:`Place ${T.type} at (${Math.round(T.x)}, ${Math.round(T.y)}), ${T.width}×${T.height}px${T.text?` — "${T.text}"`:""}`,element:`[design:${T.type}]`,elementPath:"[placement]",timestamp:T.timestamp,url:R,intent:"change",severity:"important",kind:"placement",placement:{componentType:T.type,width:T.width,height:T.height,scrollY:T.scrollY,text:T.text}}).then(N=>{v.has(T.id)&&v.set(T.id,N.id)}).catch(N=>{console.warn("[Agentation] Failed to sync placement annotation:",N),v.delete(T.id)})}for(const[T,R]of v)S.has(T)||(v.delete(T),R&&mi(O,R).catch(()=>{}))},[Re,O,It,Te]),w.useEffect(()=>{if(!(!O||!It))return no.current&&clearTimeout(no.current),no.current=gt(()=>{const v=to.current;if(!se||se.sections.length===0){for(const[,R]of v)R&&mi(O,R).catch(()=>{});v.clear();return}const S=new Set(se.sections.map(R=>R.id)),T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Te;for(const R of se.sections){const N=R.originalRect,Q=R.currentRect;if(!(Math.abs(N.x-Q.x)>1||Math.abs(N.y-Q.y)>1||Math.abs(N.width-Q.width)>1||Math.abs(N.height-Q.height)>1)){const be=v.get(R.id);be&&(v.delete(R.id),mi(O,be).catch(()=>{}));continue}const we=v.get(R.id);we?lg(O,we,{comment:`Move ${R.label} section (${R.tagName}) — from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}×${Math.round(N.height)} to (${Math.round(Q.x)},${Math.round(Q.y)}) ${Math.round(Q.width)}×${Math.round(Q.height)}`}).catch(be=>{console.warn("[Agentation] Failed to update rearrange annotation:",be)}):(v.set(R.id,""),Is(O,It,{id:R.id,x:Q.x/window.innerWidth*100,y:Q.y,comment:`Move ${R.label} section (${R.tagName}) — from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}×${Math.round(N.height)} to (${Math.round(Q.x)},${Math.round(Q.y)}) ${Math.round(Q.width)}×${Math.round(Q.height)}`,element:R.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:T,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:R.selector,label:R.label,tagName:R.tagName,originalRect:N,currentRect:Q}}).then(be=>{v.has(R.id)&&v.set(R.id,be.id)}).catch(be=>{console.warn("[Agentation] Failed to sync rearrange annotation:",be),v.delete(R.id)}))}for(const[R,N]of v)S.has(R)||(v.delete(R),N&&mi(O,N).catch(()=>{}))},300),()=>{no.current&&clearTimeout(no.current)}},[se,O,It,Te]);const Wa=w.useRef(new Map);w.useLayoutEffect(()=>{const v=(se==null?void 0:se.sections)??[],S=new Set;if((_e||$t)&&le)for(const T of v){S.add(T.id);try{const R=document.querySelector(T.selector);if(!R)continue;if(!Wa.current.has(T.id)){const N={transform:R.style.transform,transformOrigin:R.style.transformOrigin,opacity:R.style.opacity,position:R.style.position,zIndex:R.style.zIndex,display:R.style.display},Q=[];let me=R.parentElement;for(;me&&me!==document.body;){const be=getComputedStyle(me);(be.overflow!=="visible"||be.overflowX!=="visible"||be.overflowY!=="visible")&&(Q.push({el:me,overflow:me.style.overflow}),me.style.overflow="visible"),me=me.parentElement}getComputedStyle(R).display==="inline"&&(R.style.display="inline-block"),Wa.current.set(T.id,{el:R,origStyles:N,ancestors:Q}),R.style.transformOrigin="top left",R.style.zIndex="9999"}}catch{}}for(const[T,R]of Wa.current)if(!S.has(T)){const{el:N,origStyles:Q,ancestors:me}=R;N.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",N.style.transform=Q.transform,N.style.transformOrigin=Q.transformOrigin,N.style.opacity=Q.opacity,N.style.position=Q.position,N.style.zIndex=Q.zIndex,Wa.current.delete(T),gt(()=>{N.style.transition="",N.style.display=Q.display;for(const we of me)we.el.style.overflow=we.overflow},450)}},[se,_e,$t,le]),w.useEffect(()=>()=>{for(const[,v]of Wa.current){const{el:S,origStyles:T,ancestors:R}=v;S.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",S.style.transform=T.transform,S.style.transformOrigin=T.transformOrigin,S.style.opacity=T.opacity,S.style.position=T.position,S.style.zIndex=T.zIndex,gt(()=>{S.style.transition="",S.style.display=T.display;for(const N of R)N.el.style.overflow=N.overflow},450)}Wa.current.clear()},[]);const Lo=w.useCallback(()=>{fn(!0),At(!1),Et(null),clearTimeout(ko.current),ko.current=gt(()=>{fn(!1)},300)},[]),Ws=w.useCallback(()=>{_e&&(fn(!0),At(!1),Et(null),clearTimeout(ko.current),ko.current=gt(()=>{fn(!1)},300)),ke(!1)},[_e]),as=w.useCallback(()=>{j||(Vb(),B(!0))},[j]),wi=w.useCallback(()=>{j&&(Ly(),B(!1))},[j]),Ys=w.useCallback(()=>{j?wi():as()},[j,as,wi]),Vs=w.useCallback(()=>{if(Yn.length===0)return;const v=Yn[0],S=v.element,T=Yn.length>1,R=Yn.map(N=>N.element.getBoundingClientRect());if(T){const N={left:Math.min(...R.map(Fe=>Fe.left)),top:Math.min(...R.map(Fe=>Fe.top)),right:Math.max(...R.map(Fe=>Fe.right)),bottom:Math.max(...R.map(Fe=>Fe.bottom))},Q=Yn.slice(0,5).map(Fe=>Fe.name).join(", "),me=Yn.length>5?` +${Yn.length-5} more`:"",we=R.map(Fe=>({x:Fe.left,y:Fe.top+window.scrollY,width:Fe.width,height:Fe.height})),qe=Yn[Yn.length-1].element,at=R[R.length-1],xt=at.left+at.width/2,Vt=at.top+at.height/2,_t=xh(qe);it({x:xt/window.innerWidth*100,y:_t?Vt:Vt+window.scrollY,clientY:Vt,element:`${Yn.length} elements: ${Q}${me}`,elementPath:"multi-select",boundingBox:{x:N.left,y:N.top+window.scrollY,width:N.right-N.left,height:N.bottom-N.top},isMultiSelect:!0,isFixed:_t,elementBoundingBoxes:we,multiSelectElements:Yn.map(Fe=>Fe.element),targetElement:qe,fullPath:zc(S),accessibility:$c(S),computedStyles:Ac(S),computedStylesObj:Nc(S),nearbyElements:Oc(S),cssClasses:Yl(S),nearbyText:Wl(S),sourceFile:Yc(S)})}else{const N=R[0],Q=xh(S);it({x:N.left/window.innerWidth*100,y:Q?N.top:N.top+window.scrollY,clientY:N.top,element:v.name,elementPath:v.path,boundingBox:{x:N.left,y:Q?N.top:N.top+window.scrollY,width:N.width,height:N.height},isFixed:Q,fullPath:zc(S),accessibility:$c(S),computedStyles:Ac(S),computedStylesObj:Nc(S),nearbyElements:Oc(S),cssClasses:Yl(S),nearbyText:Wl(S),reactComponents:v.reactComponents,sourceFile:Yc(S)})}Ia([]),Ge(null)},[Yn]);w.useEffect(()=>{le||(it(null),Ue(null),Ye(null),ft([]),Ge(null),ge(!1),Ia([]),pa.current={cmd:!1,shift:!1},j&&wi())},[le,j,wi]),w.useEffect(()=>()=>{Ly()},[]),w.useEffect(()=>{if(!le)return;const v=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),S=":not([data-agentation-root]):not([data-agentation-root] *)",T=document.createElement("style");return T.id="feedback-cursor-styles",T.textContent=`
      body ${S} {
        cursor: crosshair !important;
      }

      body :is(${v})${S} {
        cursor: text !important;
      }
    `,document.head.appendChild(T),()=>{const R=document.getElementById("feedback-cursor-styles");R&&R.remove()}},[le]),w.useEffect(()=>{if(Co!==null&&le)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Co,le]),w.useEffect(()=>{if(!le||fe||Wr||_e)return;const v=S=>{const T=S.composedPath()[0]||S.target;if(Zr(T,"[data-feedback-toolbar]")){Ge(null);return}const R=Ji(S.clientX,S.clientY);if(!R||Zr(R,"[data-feedback-toolbar]")){Ge(null);return}const{name:N,elementName:Q,path:me,reactComponents:we}=gh(R,Hn),be=R.getBoundingClientRect();Ge({element:N,elementName:Q,elementPath:me,rect:be,reactComponents:we}),Ke({x:S.clientX,y:S.clientY})};return document.addEventListener("mousemove",v),()=>document.removeEventListener("mousemove",v)},[le,fe,Wr,_e,Hn,yr]);const os=w.useCallback(v=>{var S;if(Ue(v),Un(null),mn(null),nn([]),(S=v.elementBoundingBoxes)!=null&&S.length){const T=[];for(const R of v.elementBoundingBoxes){const N=R.x+R.width/2,Q=R.y+R.height/2-window.scrollY,me=Ji(N,Q);me&&T.push(me)}ft(T),Ye(null)}else if(v.boundingBox){const T=v.boundingBox,R=T.x+T.width/2,N=v.isFixed?T.y+T.height/2:T.y+T.height/2-window.scrollY,Q=Ji(R,N);if(Q){const me=Q.getBoundingClientRect(),we=me.width/T.width,be=me.height/T.height;we<.5||be<.5?Ye(null):Ye(Q)}else Ye(null);ft([])}else Ye(null),ft([])},[]);w.useEffect(()=>{if(!le||Wr||_e)return;const v=S=>{var Bn,rr;if(ye.current){ye.current=!1;return}const T=S.composedPath()[0]||S.target;if(Zr(T,"[data-feedback-toolbar]")||Zr(T,"[data-annotation-popup]")||Zr(T,"[data-annotation-marker]"))return;if(S.metaKey&&S.shiftKey&&!fe&&!K){S.preventDefault(),S.stopPropagation();const an=Ji(S.clientX,S.clientY);if(!an)return;const Jn=an.getBoundingClientRect(),{name:wt,path:Ut,reactComponents:ar}=gh(an,Hn),Pn=Yn.findIndex(Nr=>Nr.element===an);Pn>=0?Ia(Nr=>Nr.filter((na,cr)=>cr!==Pn)):Ia(Nr=>[...Nr,{element:an,rect:Jn,name:wt,path:Ut,reactComponents:ar??void 0}]);return}const R=Zr(T,"button, a, input, select, textarea, [role='button'], [onclick]");if(Pt.blockInteractions&&R&&(S.preventDefault(),S.stopPropagation()),fe){if(R&&!Pt.blockInteractions)return;S.preventDefault(),(Bn=Cn.current)==null||Bn.shake();return}if(K){if(R&&!Pt.blockInteractions)return;S.preventDefault(),(rr=En.current)==null||rr.shake();return}S.preventDefault();const N=Ji(S.clientX,S.clientY);if(!N)return;const{name:Q,path:me,reactComponents:we}=gh(N,Hn),be=N.getBoundingClientRect(),qe=S.clientX/window.innerWidth*100,at=xh(N),xt=at?S.clientY:S.clientY+window.scrollY,Vt=window.getSelection();let _t;Vt&&Vt.toString().trim().length>0&&(_t=Vt.toString().trim().slice(0,500));const Fe=Nc(N),Kn=Ac(N);it({x:qe,y:xt,clientY:S.clientY,element:Q,elementPath:me,selectedText:_t,boundingBox:{x:be.left,y:at?be.top:be.top+window.scrollY,width:be.width,height:be.height},nearbyText:Wl(N),cssClasses:Yl(N),isFixed:at,fullPath:zc(N),accessibility:$c(N),computedStyles:Kn,computedStylesObj:Fe,nearbyElements:Oc(N),reactComponents:we??void 0,sourceFile:Yc(N),targetElement:N}),Ge(null)};return document.addEventListener("click",v,!0),()=>document.removeEventListener("click",v,!0)},[le,Wr,_e,fe,K,Pt.blockInteractions,Hn,Yn]),w.useEffect(()=>{if(!le)return;const v=R=>{R.key==="Meta"&&(pa.current.cmd=!0),R.key==="Shift"&&(pa.current.shift=!0)},S=R=>{const N=pa.current.cmd&&pa.current.shift;R.key==="Meta"&&(pa.current.cmd=!1),R.key==="Shift"&&(pa.current.shift=!1);const Q=pa.current.cmd&&pa.current.shift;N&&!Q&&Yn.length>0&&Vs()},T=()=>{pa.current={cmd:!1,shift:!1},Ia([])};return document.addEventListener("keydown",v),document.addEventListener("keyup",S),window.addEventListener("blur",T),()=>{document.removeEventListener("keydown",v),document.removeEventListener("keyup",S),window.removeEventListener("blur",T)}},[le,Yn,Vs]),w.useEffect(()=>{if(!le||fe||Wr||_e)return;const v=S=>{const T=S.composedPath()[0]||S.target;Zr(T,"[data-feedback-toolbar]")||Zr(T,"[data-annotation-marker]")||Zr(T,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(T.tagName)||T.isContentEditable||(S.preventDefault(),p.current={x:S.clientX,y:S.clientY})};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[le,fe,Wr,_e]),w.useEffect(()=>{if(!le||fe)return;const v=S=>{if(!p.current)return;const T=S.clientX-p.current.x,R=S.clientY-p.current.y,N=T*T+R*R,Q=Yt*Yt;if(!ta&&N>=Q&&(C.current=p.current,ns(!0),S.preventDefault()),(ta||N>=Q)&&C.current){if(W.current){const wt=Math.min(C.current.x,S.clientX),Ut=Math.min(C.current.y,S.clientY),ar=Math.abs(S.clientX-C.current.x),Pn=Math.abs(S.clientY-C.current.y);W.current.style.transform=`translate(${wt}px, ${Ut}px)`,W.current.style.width=`${ar}px`,W.current.style.height=`${Pn}px`}const me=Date.now();if(me-ht.current<hn)return;ht.current=me;const we=C.current.x,be=C.current.y,qe=Math.min(we,S.clientX),at=Math.min(be,S.clientY),xt=Math.max(we,S.clientX),Vt=Math.max(be,S.clientY),_t=(qe+xt)/2,Fe=(at+Vt)/2,Kn=new Set,Bn=[[qe,at],[xt,at],[qe,Vt],[xt,Vt],[_t,Fe],[_t,at],[_t,Vt],[qe,Fe],[xt,Fe]];for(const[wt,Ut]of Bn){const ar=document.elementsFromPoint(wt,Ut);for(const Pn of ar)Pn instanceof HTMLElement&&Kn.add(Pn)}const rr=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const wt of rr)if(wt instanceof HTMLElement){const Ut=wt.getBoundingClientRect(),ar=Ut.left+Ut.width/2,Pn=Ut.top+Ut.height/2,Nr=ar>=qe&&ar<=xt&&Pn>=at&&Pn<=Vt,na=Math.min(Ut.right,xt)-Math.max(Ut.left,qe),cr=Math.min(Ut.bottom,Vt)-Math.max(Ut.top,at),Go=na>0&&cr>0?na*cr:0,ra=Ut.width*Ut.height,Ea=ra>0?Go/ra:0;(Nr||Ea>.5)&&Kn.add(wt)}const an=[],Jn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const wt of Kn){if(Zr(wt,"[data-feedback-toolbar]")||Zr(wt,"[data-annotation-marker]"))continue;const Ut=wt.getBoundingClientRect();if(!(Ut.width>window.innerWidth*.8&&Ut.height>window.innerHeight*.5)&&!(Ut.width<10||Ut.height<10)&&Ut.left<xt&&Ut.right>qe&&Ut.top<Vt&&Ut.bottom>at){const ar=wt.tagName;let Pn=Jn.has(ar);if(!Pn&&(ar==="DIV"||ar==="SPAN")){const Nr=wt.textContent&&wt.textContent.trim().length>0,na=wt.onclick!==null||wt.getAttribute("role")==="button"||wt.getAttribute("role")==="link"||wt.classList.contains("clickable")||wt.hasAttribute("data-clickable");(Nr||na)&&!wt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Pn=!0)}if(Pn){let Nr=!1;for(const na of an)if(na.left<=Ut.left&&na.right>=Ut.right&&na.top<=Ut.top&&na.bottom>=Ut.bottom){Nr=!0;break}Nr||an.push(Ut)}}}if(q.current){const wt=q.current;for(;wt.children.length>an.length;)wt.removeChild(wt.lastChild);an.forEach((Ut,ar)=>{let Pn=wt.children[ar];Pn||(Pn=document.createElement("div"),Pn.className=ue.selectedElementHighlight,wt.appendChild(Pn)),Pn.style.transform=`translate(${Ut.left}px, ${Ut.top}px)`,Pn.style.width=`${Ut.width}px`,Pn.style.height=`${Ut.height}px`})}}};return document.addEventListener("mousemove",v,{passive:!0}),()=>document.removeEventListener("mousemove",v)},[le,fe,ta,Yt]),w.useEffect(()=>{if(!le)return;const v=S=>{const T=ta,R=C.current;if(ta&&R){ye.current=!0;const N=Math.min(R.x,S.clientX),Q=Math.min(R.y,S.clientY),me=Math.max(R.x,S.clientX),we=Math.max(R.y,S.clientY),be=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(_t=>{if(!(_t instanceof HTMLElement)||Zr(_t,"[data-feedback-toolbar]")||Zr(_t,"[data-annotation-marker]"))return;const Fe=_t.getBoundingClientRect();Fe.width>window.innerWidth*.8&&Fe.height>window.innerHeight*.5||Fe.width<10||Fe.height<10||Fe.left<me&&Fe.right>N&&Fe.top<we&&Fe.bottom>Q&&be.push({element:_t,rect:Fe})});const at=be.filter(({element:_t})=>!be.some(({element:Fe})=>Fe!==_t&&_t.contains(Fe))),xt=S.clientX/window.innerWidth*100,Vt=S.clientY+window.scrollY;if(at.length>0){const _t=at.reduce((Jn,{rect:wt})=>({left:Math.min(Jn.left,wt.left),top:Math.min(Jn.top,wt.top),right:Math.max(Jn.right,wt.right),bottom:Math.max(Jn.bottom,wt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Fe=at.slice(0,5).map(({element:Jn})=>Bs(Jn).name).join(", "),Kn=at.length>5?` +${at.length-5} more`:"",Bn=at[0].element,rr=Nc(Bn),an=Ac(Bn);it({x:xt,y:Vt,clientY:S.clientY,element:`${at.length} elements: ${Fe}${Kn}`,elementPath:"multi-select",boundingBox:{x:_t.left,y:_t.top+window.scrollY,width:_t.right-_t.left,height:_t.bottom-_t.top},isMultiSelect:!0,fullPath:zc(Bn),accessibility:$c(Bn),computedStyles:an,computedStylesObj:rr,nearbyElements:Oc(Bn),cssClasses:Yl(Bn),nearbyText:Wl(Bn),sourceFile:Yc(Bn)})}else{const _t=Math.abs(me-N),Fe=Math.abs(we-Q);_t>20&&Fe>20&&it({x:xt,y:Vt,clientY:S.clientY,element:"Area selection",elementPath:`region at (${Math.round(N)}, ${Math.round(Q)})`,boundingBox:{x:N,y:Q+window.scrollY,width:_t,height:Fe},isMultiSelect:!0})}Ge(null)}else T&&(ye.current=!0);p.current=null,C.current=null,ns(!1),q.current&&(q.current.innerHTML="")};return document.addEventListener("mouseup",v),()=>document.removeEventListener("mouseup",v)},[le,ta]);const ka=w.useCallback(async(v,S,T)=>{const R=Pt.webhookUrl||H;if(!R||!Pt.webhooksEnabled&&!T)return!1;try{return(await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:v,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...S})})).ok}catch(N){return console.warn("[Agentation] Webhook failed:",N),!1}},[H,Pt.webhookUrl,Pt.webhooksEnabled]),Vc=w.useCallback(v=>{var T;if(!fe)return;const S={id:Date.now().toString(),x:fe.x,y:fe.y,comment:v,element:fe.element,elementPath:fe.elementPath,timestamp:Date.now(),selectedText:fe.selectedText,boundingBox:fe.boundingBox,nearbyText:fe.nearbyText,cssClasses:fe.cssClasses,isMultiSelect:fe.isMultiSelect,isFixed:fe.isFixed,fullPath:fe.fullPath,accessibility:fe.accessibility,computedStyles:fe.computedStyles,nearbyElements:fe.nearbyElements,reactComponents:fe.reactComponents,sourceFile:fe.sourceFile,elementBoundingBoxes:fe.elementBoundingBoxes,...O&&It?{sessionId:It,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Le(R=>[...R,S]),Be.current=S.id,gt(()=>{Be.current=null},300),gt(()=>{ao(R=>new Set(R).add(S.id))},250),_==null||_(S),ka("annotation.add",{annotation:S}),io(!0),gt(()=>{it(null),io(!1)},150),(T=window.getSelection())==null||T.removeAllRanges(),O&&It&&Is(O,It,S).then(R=>{R.id!==S.id&&(Le(N=>N.map(Q=>Q.id===S.id?{...Q,id:R.id}:Q)),ao(N=>{const Q=new Set(N);return Q.delete(S.id),Q.add(R.id),Q}))}).catch(R=>{console.warn("[Agentation] Failed to sync annotation:",R)})},[fe,_,ka,O,It]),Zl=w.useCallback(()=>{io(!0),gt(()=>{it(null),io(!1)},150)},[]),Ca=w.useCallback(v=>{const S=he.findIndex(R=>R.id===v),T=he[S];(K==null?void 0:K.id)===v&&(so(!0),gt(()=>{Ue(null),Ye(null),ft([]),so(!1)},150)),Ln(v),oo(R=>new Set(R).add(v)),T&&(y==null||y(T),ka("annotation.delete",{annotation:T})),O&&mi(O,v).catch(R=>{console.warn("[Agentation] Failed to delete annotation from server:",R)}),gt(()=>{Le(R=>R.filter(N=>N.id!==v)),oo(R=>{const N=new Set(R);return N.delete(v),N}),Ln(null),S<he.length-1&&(lr(S),gt(()=>lr(null),200))},150)},[he,K,y,ka,O]),Xs=w.useCallback(v=>{var S;if(!v){Un(null),mn(null),nn([]);return}if(Un(v.id),(S=v.elementBoundingBoxes)!=null&&S.length){const T=[];for(const R of v.elementBoundingBoxes){const N=R.x+R.width/2,Q=R.y+R.height/2-window.scrollY,we=document.elementsFromPoint(N,Q).find(be=>!be.closest("[data-annotation-marker]")&&!be.closest("[data-agentation-root]"));we&&T.push(we)}nn(T),mn(null)}else if(v.boundingBox){const T=v.boundingBox,R=T.x+T.width/2,N=v.isFixed?T.y+T.height/2:T.y+T.height/2-window.scrollY,Q=Ji(R,N);if(Q){const me=Q.getBoundingClientRect(),we=me.width/T.width,be=me.height/T.height;we<.5||be<.5?mn(null):mn(Q)}else mn(null);nn([])}else mn(null),nn([])},[]),eu=w.useCallback(v=>{if(!K)return;const S={...K,comment:v};Le(T=>T.map(R=>R.id===K.id?S:R)),m==null||m(S),ka("annotation.update",{annotation:S}),O&&lg(O,K.id,{comment:v}).catch(T=>{console.warn("[Agentation] Failed to update annotation on server:",T)}),so(!0),gt(()=>{Ue(null),Ye(null),ft([]),so(!1)},150)},[K,m,ka,O]),tu=w.useCallback(()=>{so(!0),gt(()=>{Ue(null),Ye(null),ft([]),so(!1)},150)},[]),lo=w.useCallback(()=>{const v=he.length,S=Re.length>0||!!se;if(v===0&&yr.length===0&&!S)return;if(f==null||f(he),ka("annotations.clear",{annotations:he}),O){Promise.all(he.map(N=>mi(O,N.id).catch(Q=>{console.warn("[Agentation] Failed to delete annotation from server:",Q)})));for(const[,N]of eo.current)N&&mi(O,N).catch(()=>{});eo.current.clear();for(const[,N]of to.current)N&&mi(O,N).catch(()=>{});to.current.clear()}Sn(!0),tr(!0),es([]);const T=Eo.current;if(T){const N=T.getContext("2d");N&&N.clearRect(0,0,T.width,T.height)}(Re.length>0||se)&&(Mn(N=>N+1),Aa(N=>N+1),gt(()=>{Ft([]),ut(null)},200)),et&&Ot(!1),k&&re(""),Tn.current={rearrange:null,placements:[]},Hc(Te);const R=v*30+200;gt(()=>{Le([]),ao(new Set),localStorage.removeItem(Fc(Te)),Sn(!1)},R),gt(()=>tr(!1),1500)},[Te,he,yr,Re,se,et,k,f,ka,O]),nu=w.useCallback(async()=>{const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Te,S=_e&&et;let T;if(S){if(Re.length===0&&!se&&!k)return;T=""}else{if(T=dg(he,v,Pt.outputDetail),!T&&yr.length===0&&Re.length===0&&!se)return;T||(T=`## Page Feedback: ${v}
`)}if(!S&&yr.length>0){const R=new Set;for(const we of he)we.drawingIndex!=null&&R.add(we.drawingIndex);const N=Eo.current;N&&(N.style.visibility="hidden");const Q=[],me=window.scrollY;for(let we=0;we<yr.length;we++){if(R.has(we))continue;const be=yr[we];if(be.points.length<2)continue;const qe=be.fixed?be.points:be.points.map(Zn=>({x:Zn.x,y:Zn.y-me}));let at=1/0,xt=1/0,Vt=-1/0,_t=-1/0;for(const Zn of qe)at=Math.min(at,Zn.x),xt=Math.min(xt,Zn.y),Vt=Math.max(Vt,Zn.x),_t=Math.max(_t,Zn.y);const Fe=Vt-at,Kn=_t-xt,Bn=Math.hypot(Fe,Kn),rr=qe[0],an=qe[qe.length-1],Jn=Math.hypot(an.x-rr.x,an.y-rr.y);let wt;const Ut=Jn<Bn*.35,ar=Fe/Math.max(Kn,1);if(Ut&&Bn>20){const Zn=Math.max(Fe,Kn)*.15;let aa=0;for(const Ko of qe){const bh=Ko.x-at<Zn,wh=Vt-Ko.x<Zn,Sh=Ko.y-xt<Zn,kh=_t-Ko.y<Zn;(bh||wh)&&(Sh||kh)&&aa++}wt=aa>qe.length*.15?"box":"circle"}else ar>3&&Kn<40?wt="underline":Jn>Bn*.5?wt="arrow":wt="drawing";const Pn=Math.min(10,qe.length),Nr=Math.max(1,Math.floor(qe.length/Pn)),na=new Set,cr=[],Go=[rr];for(let Zn=Nr;Zn<qe.length-1;Zn+=Nr)Go.push(qe[Zn]);Go.push(an);for(const Zn of Go){const aa=Ji(Zn.x,Zn.y);if(!aa||na.has(aa)||Zr(aa,"[data-feedback-toolbar]"))continue;na.add(aa);const{name:Ko}=Bs(aa);cr.includes(Ko)||cr.push(Ko)}const ra=`${Math.round(at)},${Math.round(xt)} → ${Math.round(Vt)},${Math.round(_t)}`;let Ea;(wt==="circle"||wt==="box")&&cr.length>0?Ea=`${wt==="box"?"Boxed":"Circled"} **${cr[0]}**${cr.length>1?` (and ${cr.slice(1).join(", ")})`:""} (region: ${ra})`:wt==="underline"&&cr.length>0?Ea=`Underlined **${cr[0]}** (${ra})`:wt==="arrow"&&cr.length>=2?Ea=`Arrow from **${cr[0]}** to **${cr[cr.length-1]}** (${Math.round(rr.x)},${Math.round(rr.y)} → ${Math.round(an.x)},${Math.round(an.y)})`:cr.length>0?Ea=`${wt==="arrow"?"Arrow":"Drawing"} near **${cr.join("**, **")}** (region: ${ra})`:Ea=`Drawing at ${ra}`,Q.push(Ea)}N&&(N.style.visibility=""),Q.length>0&&(T+=`
**Drawings:**
`,Q.forEach((we,be)=>{T+=`${be+1}. ${we}
`}))}if((Re.length>0||S&&k)&&(T+=`
`+eg(Re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:et,wireframePurpose:k||void 0},Pt.outputDetail)),se){const R=tg(se,Pt.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(T+=`
`+R)}if(P)try{await navigator.clipboard.writeText(T)}catch{}z==null||z(T),Gt(!0),gt(()=>Gt(!1),2e3),Pt.autoClearAfterCopy&&gt(()=>lo(),500)},[he,yr,Re,se,et,_e,Or,k,Te,Pt.outputDetail,Hn,Pt.autoClearAfterCopy,lo,P,z]),Si=w.useCallback(async()=>{const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Te;let S=dg(he,v,Pt.outputDetail);if(!S&&Re.length===0&&!se)return;if(S||(S=`## Page Feedback: ${v}
`),Re.length>0&&(S+=`
`+eg(Re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:et,wireframePurpose:k||void 0},Pt.outputDetail)),se){const R=tg(se,Pt.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(S+=`
`+R)}E&&E(S,he),wn("sending"),await new Promise(R=>gt(R,150));const T=await ka("submit",{output:S,annotations:he},!0);wn(T?"sent":"failed"),gt(()=>wn("idle"),2500),T&&Pt.autoClearAfterCopy&&gt(()=>lo(),500)},[E,ka,he,Re,se,et,Or,Te,Pt.outputDetail,Hn,Pt.autoClearAfterCopy,lo]);w.useEffect(()=>{if(!wa)return;const v=10,S=R=>{const N=R.clientX-wa.x,Q=R.clientY-wa.y,me=Math.sqrt(N*N+Q*Q);if(!Ua&&me>v&&bi(!0),Ua||me>v){let we=wa.toolbarX+N,be=wa.toolbarY+Q;const qe=20,at=337,xt=44,_t=at-(le?zn==="connected"?297:257:44),Fe=qe-_t,Kn=window.innerWidth-qe-at;we=Math.max(Fe,Math.min(Kn,we)),be=Math.max(qe,Math.min(window.innerHeight-xt-qe,be)),qo({x:we,y:be})}},T=()=>{Ua&&(Fa.current=!0),bi(!1),Hs(null)};return document.addEventListener("mousemove",S),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",T)}},[wa,Ua,le,zn]);const Xc=w.useCallback(v=>{if(v.target.closest("button")||v.target.closest("[data-agentation-settings-panel]"))return;const S=v.currentTarget.parentElement;if(!S)return;const T=S.getBoundingClientRect(),R=(yn==null?void 0:yn.x)??T.left,N=(yn==null?void 0:yn.y)??T.top;Hs({x:v.clientX,y:v.clientY,toolbarX:R,toolbarY:N})},[yn]);if(w.useEffect(()=>{if(!yn)return;const v=()=>{let N=yn.x,Q=yn.y;const be=20-(337-(le?zn==="connected"?297:257:44)),qe=window.innerWidth-20-337;N=Math.max(be,Math.min(qe,N)),Q=Math.max(20,Math.min(window.innerHeight-44-20,Q)),(N!==yn.x||Q!==yn.y)&&qo({x:N,y:Q})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[yn,le,zn]),w.useEffect(()=>{const v=S=>{const T=S.target,R=T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable;if(S.key==="Escape"){if(_e){Lt?Et(null):Lo();return}if(Wr){gi(!1);return}if(Yn.length>0){Ia([]);return}fe||le&&(Qn(),ke(!1))}if((S.metaKey||S.ctrlKey)&&S.shiftKey&&(S.key==="f"||S.key==="F")){S.preventDefault(),Qn(),le?Ws():ke(!0);return}if(!(R||S.metaKey||S.ctrlKey)&&((S.key==="p"||S.key==="P")&&(S.preventDefault(),Qn(),Ys()),(S.key==="l"||S.key==="L")&&(S.preventDefault(),Qn(),Wr&&gi(!1),V&&ge(!1),fe&&Zl(),_e?Lo():At(!0)),(S.key==="h"||S.key==="H")&&he.length>0&&(S.preventDefault(),Qn(),G(N=>!N)),(S.key==="c"||S.key==="C")&&(he.length>0||Re.length>0||se)&&(S.preventDefault(),Qn(),nu()),(S.key==="x"||S.key==="X")&&(he.length>0||Re.length>0||se)&&(S.preventDefault(),Qn(),lo(),Re.length>0&&Ft([]),se&&ut(null)),S.key==="s"||S.key==="S")){const N=So(Pt.webhookUrl)||So(H||"");he.length>0&&N&&tn==="idle"&&(S.preventDefault(),Qn(),Si())}};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[le,Wr,_e,Lt,Re,se,fe,he.length,Pt.webhookUrl,H,tn,Si,Ys,nu,lo,Yn]),!Ve||de)return null;const hr=he.length>0,Yr=he.filter(v=>!Ha.has(v.id)&&v.kind!=="placement"&&v.kind!=="rearrange"),nr=Yr.length>0,Ya=he.filter(v=>Ha.has(v.id)),Qs=v=>{const Q=v.x/100*window.innerWidth,me=typeof v.y=="string"?parseFloat(v.y):v.y,we={};window.innerHeight-me-22-10<80&&(we.top="auto",we.bottom="calc(100% + 10px)");const qe=Q-200/2,at=10;if(qe<at){const xt=at-qe;we.left=`calc(50% + ${xt}px)`}else if(qe+200>window.innerWidth-at){const xt=qe+200-(window.innerWidth-at);we.left=`calc(50% - ${xt}px)`}return we};return Ry.createPortal(o.jsxs("div",{ref:ot,style:{display:"contents"},"data-agentation-theme":dt?"dark":"light","data-agentation-accent":Pt.annotationColorId,"data-agentation-root":"",children:[o.jsx("div",{className:`${ue.toolbar}${I?` ${I}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:yn?{left:yn.x,top:yn.y,right:"auto",bottom:"auto"}:void 0,children:o.jsxs("div",{className:`${ue.toolbarContainer} ${le?ue.expanded:ue.collapsed} ${jr?ue.entrance:""} ${ae?ue.hiding:""} ${!Pt.webhooksEnabled&&(So(Pt.webhookUrl)||So(H||""))?ue.serverConnected:""}`,onClick:le?void 0:v=>{if(Fa.current){Fa.current=!1,v.preventDefault();return}ke(!0)},onMouseDown:Xc,role:le?void 0:"button",tabIndex:le?-1:0,title:le?void 0:"Start feedback mode",children:[o.jsxs("div",{className:`${ue.toggleContent} ${le?ue.hidden:ue.visible}`,children:[o.jsx(jb,{size:24}),nr&&o.jsx("span",{className:`${ue.badge} ${le?ue.fadeOut:""} ${jr?ue.entrance:""}`,children:Yr.length})]}),o.jsxs("div",{className:`${ue.controlsContent} ${le?ue.visible:ue.hidden} ${yn&&yn.y<100?ue.tooltipBelow:""} ${rt||V?ue.tooltipsHidden:""} ${Ro?ue.tooltipsInSession:""}`,onMouseEnter:ts,onMouseLeave:rn,children:[o.jsxs("div",{className:`${ue.buttonWrapper} ${yn&&yn.x<120?ue.buttonWrapperAlignLeft:""}`,children:[o.jsx("button",{className:ue.controlButton,onClick:v=>{v.stopPropagation(),Qn(),Ys()},"data-active":j,children:o.jsx(Ob,{size:24,isPaused:j})}),o.jsxs("span",{className:ue.buttonTooltip,children:[j?"Resume animations":"Pause animations",o.jsx("span",{className:ue.shortcut,children:"P"})]})]}),o.jsxs("div",{className:ue.buttonWrapper,children:[o.jsx("button",{className:`${ue.controlButton} ${dt?"":ue.light}`,onClick:v=>{v.stopPropagation(),Qn(),Wr&&gi(!1),V&&ge(!1),fe&&Zl(),_e?Lo():At(!0)},"data-active":_e,style:_e&&et?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:o.jsx(Hb,{size:21})}),o.jsxs("span",{className:ue.buttonTooltip,children:[_e?"Exit layout mode":"Layout mode",o.jsx("span",{className:ue.shortcut,children:"L"})]})]}),o.jsxs("div",{className:ue.buttonWrapper,children:[o.jsx("button",{className:ue.controlButton,onClick:v=>{v.stopPropagation(),Qn(),G(!Ie)},disabled:!hr||_e,children:o.jsx(Lb,{size:24,isOpen:Ie})}),o.jsxs("span",{className:ue.buttonTooltip,children:[Ie?"Hide markers":"Show markers",o.jsx("span",{className:ue.shortcut,children:"H"})]})]}),o.jsxs("div",{className:ue.buttonWrapper,children:[o.jsx("button",{className:`${ue.controlButton} ${Tt?ue.statusShowing:""}`,onClick:v=>{v.stopPropagation(),Qn(),nu()},disabled:_e&&et?Re.length===0&&!((is=se==null?void 0:se.sections)!=null&&is.length):!hr&&yr.length===0&&Re.length===0&&!((Qc=se==null?void 0:se.sections)!=null&&Qc.length),"data-active":Tt,children:o.jsx(Mb,{size:24,copied:Tt,tint:_e&&et&&(Re.length>0||(ki=se==null?void 0:se.sections)!=null&&ki.length)?"#f97316":void 0})}),o.jsxs("span",{className:ue.buttonTooltip,children:[_e&&et?"Copy layout":"Copy feedback",o.jsx("span",{className:ue.shortcut,children:"C"})]})]}),o.jsxs("div",{className:`${ue.buttonWrapper} ${ue.sendButtonWrapper} ${le&&!Pt.webhooksEnabled&&(So(Pt.webhookUrl)||So(H||""))?ue.sendButtonVisible:""}`,children:[o.jsxs("button",{className:`${ue.controlButton} ${tn==="sent"||tn==="failed"?ue.statusShowing:""}`,onClick:v=>{v.stopPropagation(),Qn(),Si()},disabled:!hr||!So(Pt.webhookUrl)&&!So(H||"")||tn==="sending","data-no-hover":tn==="sent"||tn==="failed",tabIndex:So(Pt.webhookUrl)||So(H||"")?0:-1,children:[o.jsx(Db,{size:24,state:tn}),hr&&tn==="idle"&&o.jsx("span",{className:ue.buttonBadge,children:he.length})]}),o.jsxs("span",{className:ue.buttonTooltip,children:["Send Annotations",o.jsx("span",{className:ue.shortcut,children:"S"})]})]}),o.jsxs("div",{className:ue.buttonWrapper,children:[o.jsx("button",{className:ue.controlButton,onClick:v=>{v.stopPropagation(),Qn(),lo()},disabled:!hr&&yr.length===0&&Re.length===0&&!((qc=se==null?void 0:se.sections)!=null&&qc.length),"data-danger":!0,children:o.jsx(Ab,{size:24})}),o.jsxs("span",{className:ue.buttonTooltip,children:["Clear all",o.jsx("span",{className:ue.shortcut,children:"X"})]})]}),o.jsxs("div",{className:ue.buttonWrapper,children:[o.jsx("button",{className:ue.controlButton,onClick:v=>{v.stopPropagation(),Qn(),_e&&Lo(),ge(!V)},children:o.jsx(Nb,{size:24})}),O&&zn!=="disconnected"&&o.jsx("span",{className:`${ue.mcpIndicator} ${ue[zn]} ${V?ue.hidden:""}`,title:zn==="connected"?"MCP Connected":"MCP Connecting..."}),o.jsx("span",{className:ue.buttonTooltip,children:"Settings"})]}),o.jsx("div",{className:ue.divider}),o.jsxs("div",{className:`${ue.buttonWrapper} ${yn&&typeof window<"u"&&yn.x>window.innerWidth-120?ue.buttonWrapperAlignRight:""}`,children:[o.jsx("button",{className:ue.controlButton,onClick:v=>{v.stopPropagation(),Qn(),Ws()},children:o.jsx($b,{size:24})}),o.jsxs("span",{className:ue.buttonTooltip,children:["Exit",o.jsx("span",{className:ue.shortcut,children:"Esc"})]})]})]}),o.jsx(yw,{visible:_e&&le,activeType:Lt,onSelect:v=>{Et(Lt===v?null:v)},isDarkMode:dt,sectionCount:(se==null?void 0:se.sections.length)??0,onDetectSections:()=>{const v=jw(),S=(se==null?void 0:se.sections)??[],T=new Set(S.map(me=>me.selector)),R=v.filter(me=>!T.has(me.selector)),N=[...S,...R],Q=[...(se==null?void 0:se.originalOrder)??[],...R.map(me=>me.id)];ut({sections:N,originalOrder:Q,detectedAt:Date.now()})},placementCount:Re.length,onClearPlacements:()=>{Mn(v=>v+1),Aa(v=>v+1),gt(()=>{ut({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:et,onBlankCanvasChange:v=>{const S={sections:[],originalOrder:[],detectedAt:Date.now()};v?(zt.current={rearrange:se,placements:Re},ut(Tn.current.rearrange||S),Ft(Tn.current.placements),Et(null)):(Tn.current={rearrange:se,placements:Re},ut(zt.current.rearrange||S),Ft(zt.current.placements)),Ot(v)},wireframePurpose:k,onWireframePurposeChange:re,Tooltip:qi,onDragStart:(v,S)=>{S.preventDefault();const T=He[v];let R=null,N=!1;const Q=S.clientX,me=S.clientY,we=S.target.closest("[data-feedback-toolbar]"),be=(we==null?void 0:we.getBoundingClientRect().top)??window.innerHeight,qe=xt=>{const Vt=xt.clientX-Q,_t=xt.clientY-me;if(!N&&(Math.abs(Vt)>4||Math.abs(_t)>4)&&(N=!0,R=document.createElement("div"),R.className=`${te.dragPreview}${et?` ${te.dragPreviewWireframe}`:""}`,document.body.appendChild(R)),!R)return;const Fe=Math.max(0,be-xt.clientY),Kn=Math.min(1,Fe/180),Bn=1-Math.pow(1-Kn,2),rr=28,an=20,Jn=Math.min(140,T.width*.18),wt=Math.min(90,T.height*.18),Ut=rr+(Jn-rr)*Bn,ar=an+(wt-an)*Bn;R.style.width=`${Ut}px`,R.style.height=`${ar}px`,R.style.left=`${xt.clientX-Ut/2}px`,R.style.top=`${xt.clientY-ar/2}px`,R.style.opacity=`${.5+.5*Bn}`,R.textContent=Bn>.25?v:""},at=xt=>{if(window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",at),R&&document.body.removeChild(R),N){const Vt=T.width,_t=T.height,Fe=window.scrollY,Kn=Math.max(0,xt.clientX-Vt/2),Bn=Math.max(0,xt.clientY+Fe-_t/2),rr={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:v,x:Kn,y:Bn,width:Vt,height:_t,scrollY:Fe,timestamp:Date.now()};Ft(an=>[...an,rr]),Et(null),$a.current=new Set,$n(an=>an+1)}};window.addEventListener("mousemove",qe),window.addEventListener("mouseup",at)}}),o.jsx(zS,{settings:Pt,onSettingsChange:v=>ro(S=>({...S,...v})),isDarkMode:dt,onToggleTheme:To,isDevMode:Jl,connectionStatus:zn,endpoint:O,isVisible:ve,toolbarNearBottom:!!yn&&yn.y<230,settingsPage:Ze,onSettingsPageChange:st,onHideToolbar:rs})]})}),(_e||$t)&&o.jsx("div",{className:`${te.blankCanvas} ${un?te.visible:""} ${xe?te.gridActive:""}`,style:{"--canvas-opacity":Nn},"data-feedback-toolbar":!0}),_e&&et&&un&&o.jsxs("div",{className:te.wireframeNotice,"data-feedback-toolbar":!0,children:[o.jsxs("div",{className:te.wireframeOpacityRow,children:[o.jsx("span",{className:te.wireframeOpacityLabel,children:"Toggle Opacity"}),o.jsx("input",{type:"range",className:te.wireframeOpacitySlider,min:0,max:1,step:.01,value:Nn,onChange:v=>ha(Number(v.target.value))})]}),o.jsxs("div",{className:te.wireframeNoticeTitleRow,children:[o.jsx("span",{className:te.wireframeNoticeTitle,children:"Wireframe Mode"}),o.jsx("span",{className:te.wireframeNoticeDivider}),o.jsx("button",{className:te.wireframeStartOver,onClick:()=>{Mn(v=>v+1),ut({sections:[],originalOrder:[],detectedAt:Date.now()}),Tn.current={rearrange:null,placements:[]},re(""),Hc(Te)},children:"Start Over"})]}),"Drag components onto the canvas.",o.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(_e||$t)&&o.jsx(fw,{placements:Re,onChange:Ft,activeComponent:$t?null:Lt,onActiveComponentChange:Et,isDarkMode:dt,exiting:$t,onInteractionChange:Me,passthrough:!Lt,extraSnapRects:se==null?void 0:se.sections.map(v=>v.currentRect),deselectSignal:An,clearSignal:ba,wireframe:et,onSelectionChange:(v,S)=>{$a.current=v,S||(Vo.current=new Set,xa(T=>T+1))},onDragMove:(v,S)=>{const T=Vo.current;if(!(!T.size||!se)){if(!fr.current){fr.current=new Map;for(const R of se.sections)T.has(R.id)&&fr.current.set(R.id,{x:R.currentRect.x,y:R.currentRect.y})}for(const R of se.sections){if(!T.has(R.id)||!fr.current.get(R.id))continue;const Q=document.querySelector(`[data-rearrange-section="${R.id}"]`);Q&&(Q.style.transform=`translate(${v}px, ${S}px)`)}}},onDragEnd:(v,S,T)=>{const R=Vo.current,N=fr.current;if(fr.current=null,!(!R.size||!se||!N)){for(const Q of R){const me=document.querySelector(`[data-rearrange-section="${Q}"]`);me&&(me.style.transform="")}T&&ut(Q=>Q&&{...Q,sections:Q.sections.map(me=>{const we=N.get(me.id);return we?{...me,currentRect:{...me.currentRect,x:Math.max(0,we.x+v),y:Math.max(0,we.y+S)}}:me})})}}}),(_e||$t)&&se&&o.jsx(Dw,{rearrangeState:se,onChange:ut,isDarkMode:dt,exiting:$t,blankCanvas:et,extraSnapRects:Re.map(v=>({x:v.x,y:v.y,width:v.width,height:v.height})),clearSignal:Bt,deselectSignal:Rr,onSelectionChange:(v,S)=>{Vo.current=v,S||($a.current=new Set,$n(T=>T+1))},onDragMove:(v,S)=>{const T=$a.current;if(T.size){if(!fr.current){fr.current=new Map;for(const R of Re)T.has(R.id)&&fr.current.set(R.id,{x:R.x,y:R.y})}for(const R of T){const N=document.querySelector(`[data-design-placement="${R}"]`);N&&(N.style.transform=`translate(${v}px, ${S}px)`)}}},onDragEnd:(v,S,T)=>{const R=$a.current,N=fr.current;if(fr.current=null,!(!R.size||!N)){for(const Q of R){const me=document.querySelector(`[data-design-placement="${Q}"]`);me&&(me.style.transform="")}T&&Ft(Q=>Q.map(me=>{const we=N.get(me.id);return we?{...me,x:Math.max(0,we.x+v),y:Math.max(0,we.y+S)}:me}))}}}),o.jsx("canvas",{ref:Eo,className:`${ue.drawCanvas} ${Wr?ue.active:""}`,style:{opacity:qn?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),o.jsxs("div",{className:ue.markersLayer,"data-feedback-toolbar":!0,children:[nt&&Yr.filter(v=>!v.isFixed).map((v,S,T)=>o.jsx(fg,{annotation:v,globalIndex:Yr.findIndex(R=>R.id===v.id),layerIndex:S,layerSize:T.length,isExiting:ct,isClearing:mr,isAnimated:Mo.has(v.id),isHovered:!ct&&Gn===v.id,isDeleting:ln===v.id,isEditingAny:!!K,renumberFrom:jn,markerClickBehavior:Pt.markerClickBehavior,tooltipStyle:Qs(v),onHoverEnter:R=>!ct&&R.id!==Be.current&&Xs(R),onHoverLeave:()=>Xs(null),onClick:R=>Pt.markerClickBehavior==="delete"?Ca(R.id):os(R),onContextMenu:os},v.id)),nt&&!ct&&Ya.filter(v=>!v.isFixed).map(v=>o.jsx(hg,{annotation:v},v.id))]}),o.jsxs("div",{className:ue.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[nt&&Yr.filter(v=>v.isFixed).map((v,S,T)=>o.jsx(fg,{annotation:v,globalIndex:Yr.findIndex(R=>R.id===v.id),layerIndex:S,layerSize:T.length,isExiting:ct,isClearing:mr,isAnimated:Mo.has(v.id),isHovered:!ct&&Gn===v.id,isDeleting:ln===v.id,isEditingAny:!!K,renumberFrom:jn,markerClickBehavior:Pt.markerClickBehavior,tooltipStyle:Qs(v),onHoverEnter:R=>!ct&&R.id!==Be.current&&Xs(R),onHoverLeave:()=>Xs(null),onClick:R=>Pt.markerClickBehavior==="delete"?Ca(R.id):os(R),onContextMenu:os},v.id)),nt&&!ct&&Ya.filter(v=>v.isFixed).map(v=>o.jsx(hg,{annotation:v,fixed:!0},v.id))]}),le&&o.jsxs("div",{className:ue.overlay,"data-feedback-toolbar":!0,style:fe||K?{zIndex:99999}:void 0,children:[(Qe==null?void 0:Qe.rect)&&!fe&&!Ct&&!ta&&o.jsx("div",{className:`${ue.hoverHighlight} ${ue.enter}`,style:{left:Qe.rect.left,top:Qe.rect.top,width:Qe.rect.width,height:Qe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Yn.filter(v=>document.contains(v.element)).map((v,S)=>{const T=v.element.getBoundingClientRect(),R=Yn.length>1;return o.jsx("div",{className:R?ue.multiSelectOutline:ue.singleSelectOutline,style:{position:"fixed",left:T.left,top:T.top,width:T.width,height:T.height,...R?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},S)}),Gn&&!fe&&(()=>{var N;const v=he.find(Q=>Q.id===Gn);if(!(v!=null&&v.boundingBox))return null;if((N=v.elementBoundingBoxes)!=null&&N.length)return Xt.length>0?Xt.filter(Q=>document.contains(Q)).map((Q,me)=>{const we=Q.getBoundingClientRect();return o.jsx("div",{className:`${ue.multiSelectOutline} ${ue.enter}`,style:{left:we.left,top:we.top,width:we.width,height:we.height}},`hover-outline-live-${me}`)}):v.elementBoundingBoxes.map((Q,me)=>o.jsx("div",{className:`${ue.multiSelectOutline} ${ue.enter}`,style:{left:Q.x,top:Q.y-Dt,width:Q.width,height:Q.height}},`hover-outline-${me}`));const S=Fn&&document.contains(Fn)?Fn.getBoundingClientRect():null,T=S?{x:S.left,y:S.top,width:S.width,height:S.height}:{x:v.boundingBox.x,y:v.isFixed?v.boundingBox.y:v.boundingBox.y-Dt,width:v.boundingBox.width,height:v.boundingBox.height},R=v.isMultiSelect;return o.jsx("div",{className:`${R?ue.multiSelectOutline:ue.singleSelectOutline} ${ue.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...R?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Qe&&!fe&&!Ct&&!ta&&o.jsxs("div",{className:`${ue.hoverTooltip} ${ue.enter}`,style:{left:Math.max(8,Math.min(Ce.x,window.innerWidth-100)),top:Math.max(Ce.y-(Qe.reactComponents?48:32),8)},children:[Qe.reactComponents&&o.jsx("div",{className:ue.hoverReactPath,children:Qe.reactComponents}),o.jsx("div",{className:ue.hoverElementName,children:Qe.elementName})]}),fe&&o.jsxs(o.Fragment,{children:[(Gc=fe.multiSelectElements)!=null&&Gc.length?fe.multiSelectElements.filter(v=>document.contains(v)).map((v,S)=>{const T=v.getBoundingClientRect();return o.jsx("div",{className:`${ue.multiSelectOutline} ${Pa?ue.exit:ue.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`pending-multi-${S}`)}):fe.targetElement&&document.contains(fe.targetElement)?(()=>{const v=fe.targetElement.getBoundingClientRect();return o.jsx("div",{className:`${ue.singleSelectOutline} ${Pa?ue.exit:ue.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():fe.boundingBox&&o.jsx("div",{className:`${fe.isMultiSelect?ue.multiSelectOutline:ue.singleSelectOutline} ${Pa?ue.exit:ue.enter}`,style:{left:fe.boundingBox.x,top:fe.boundingBox.y-Dt,width:fe.boundingBox.width,height:fe.boundingBox.height,...fe.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const v=fe.x,S=fe.isFixed?fe.y:fe.y-Dt;return o.jsxs(o.Fragment,{children:[o.jsx(RS,{x:v,y:S,isMultiSelect:fe.isMultiSelect,isExiting:Pa}),o.jsx(Dc,{ref:Cn,element:fe.element,selectedText:fe.selectedText,computedStyles:fe.computedStylesObj,placeholder:fe.element==="Area selection"?"What should change in this area?":fe.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Vc,onCancel:Zl,isExiting:Pa,lightMode:!dt,accentColor:fe.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,v/100*window.innerWidth)),...S>window.innerHeight-290?{bottom:window.innerHeight-S+20}:{top:S+20}}})]})})()]}),K&&o.jsxs(o.Fragment,{children:[(qs=K.elementBoundingBoxes)!=null&&qs.length?vt.length>0?vt.filter(v=>document.contains(v)).map((v,S)=>{const T=v.getBoundingClientRect();return o.jsx("div",{className:`${ue.multiSelectOutline} ${ue.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`edit-multi-live-${S}`)}):K.elementBoundingBoxes.map((v,S)=>o.jsx("div",{className:`${ue.multiSelectOutline} ${ue.enter}`,style:{left:v.x,top:v.y-Dt,width:v.width,height:v.height}},`edit-multi-${S}`)):(()=>{const v=lt&&document.contains(lt)?lt.getBoundingClientRect():null,S=v?{x:v.left,y:v.top,width:v.width,height:v.height}:K.boundingBox?{x:K.boundingBox.x,y:K.isFixed?K.boundingBox.y:K.boundingBox.y-Dt,width:K.boundingBox.width,height:K.boundingBox.height}:null;return S?o.jsx("div",{className:`${K.isMultiSelect?ue.multiSelectOutline:ue.singleSelectOutline} ${ue.enter}`,style:{left:S.x,top:S.y,width:S.width,height:S.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),o.jsx(Dc,{ref:En,element:K.element,selectedText:K.selectedText,computedStyles:kw(K.computedStyles),placeholder:"Edit your feedback...",initialValue:K.comment,submitLabel:"Save",onSubmit:eu,onCancel:tu,onDelete:()=>Ca(K.id),isExiting:Ps,lightMode:!dt,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const v=K.isFixed?K.y:K.y-Dt;return{left:Math.max(160,Math.min(window.innerWidth-160,K.x/100*window.innerWidth)),...v>window.innerHeight-290?{bottom:window.innerHeight-v+20}:{top:v+20}}})()})]}),ta&&o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:W,className:ue.dragSelection}),o.jsx("div",{ref:q,className:ue.highlightsContainer})]})]})]}),document.body)}const yg=Object.assign(document.createElement("div"),{id:"__agentation__"});document.body.appendChild(yg),xb.createRoot(yg).render(xy.createElement(US,{endpoint:"http://localhost:4747"}))})();
