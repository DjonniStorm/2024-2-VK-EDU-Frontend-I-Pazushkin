/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector(".chat__form"),e=document.querySelector(".chat__form-input"),r=document.querySelector(".chat__messages-layout"),n=document.querySelector(".contacts__header-username-select"),o=document.querySelector(".chat__contact"),a=document.querySelector(".contacts__create-contact-btn"),i=document.querySelector(".contacts__list"),c=document.querySelector(".incorrect"),s=document.querySelector(".contacts"),u=document.querySelector(".chat"),l=document.querySelector(".chats-back"),f=document.querySelector(".contacts__header-search__input"),h=document.querySelector(".contacts__header-search__button"),y=document.querySelector(".chat__header-info-logo");function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function p(t){var e=function(t){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(e)?e:e+""}var m=function(){return t=function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=e,this._date=r,this._from=n},r=[{key:"render",value:function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"received-message",a=document.createElement("div");a.classList.add("message",o);var i=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p");return i.innerText=r,c.innerText=t,s.innerText=e,c.classList.add("message__content--text"),[i,c,s].forEach((function(t){t.classList.add("message__content"),a.appendChild(t)})),n&&a.classList.add("new-message"),a}}],(e=[{key:"messageTime",get:function(){return this._date}},{key:"messageText",get:function(){return this._text}}])&&v(t.prototype,e),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}function w(t){var e=function(t){if("object"!=g(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==g(e)?e:e+""}function _(t,e){return t.get(function(t,e,r){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}(t,e))}var S=new WeakMap,k=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e,r){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.set(t,r)}(this,S,(function(){return Math.floor(256*Math.random())})),this._colors=new Map},(e=[{key:"newUser",value:function(t){this._colors.has(t)||this._colors.set(t,"rgb(".concat(_(S,this).call(this),", ").concat(_(S,this).call(this),", ").concat(_(S,this).call(this),")"))}},{key:"saveColors",value:function(){return Object.fromEntries(this._colors.entries())}},{key:"loadColors",value:function(t){this._colors=new Map(Object.entries(t))}},{key:"getColor",value:function(t){return this._colors.get(t)}}])&&b(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:C(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",y="suspendedYield",d="executing",v="completed",p={};function m(){}function g(){}function b(){}var w={};u(w,i,(function(){return this}));var _=Object.getPrototypeOf,S=_&&_(_(M([])));S&&S!==r&&n.call(S,i)&&(w=S);var k=b.prototype=m.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var s=f(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==L(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function C(e,r,n){var o=h;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:y,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(L(e)+" is not iterable")}return g.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},x(j.prototype),u(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),u(k,s,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=M,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}function x(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=C(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],s=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||C(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){if(t){if("string"==typeof t)return O(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function A(t){var e=function(t){if("object"!=L(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==L(e)?e:e+""}function P(t,e,r){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}var M=new WeakSet,I=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.add(t)}(this,M),this._users={},this._chatKey="",this._unnesesaryAdditions=new k},e=[{key:"updateFromStorage",value:function(t){for(var e={},r=0,n=Object.entries(t);r<n.length;r++){var o=j(n[r],2),a=o[0],i=o[1],c=new Map;if("object"!==L(i)||Array.isArray(i))c.set(a,i);else for(var s=0,u=Object.entries(i);s<u.length;s++){var l=j(u[s],2),f=l[0],h=l[1];c.set(f,h)}e[a]=c}this._users=e}},{key:"addChat",value:function(t){this._chatKey=t,this._users[K]?P(M,this,N).call(this,K,t):(this._unnesesaryAdditions.newUser(K),this._users[K]=(new Map).set(t,[])),this._users[t]?P(M,this,N).call(this,t,K):(this._unnesesaryAdditions.newUser(t),this._users[t]=(new Map).set(K,[]))}},{key:"stringify",value:function(){for(var t={},e=0,r=Object.entries(this._users);e<r.length;e++){var n=j(r[e],2),o=n[0],a=n[1];t[o]={};var i,c=x(a);try{for(c.s();!(i=c.n()).done;){var s=j(i.value,2),u=s[0],l=s[1];t[o][u]=l}}catch(t){c.e(t)}finally{c.f()}}return t}},{key:"getMessages",value:E().mark((function t(){var e,r,n,o;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._users[K]){t.next=2;break}return t.abrupt("return");case 2:if(e=this._users[K].get(this._chatKey)){t.next=5;break}return t.abrupt("return");case 5:r=x(e),t.prev=6,r.s();case 8:if((n=r.n()).done){t.next=14;break}return o=n.value,t.next=12,o;case 12:t.next=8;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),r.e(t.t0);case 19:return t.prev=19,r.f(),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[6,16,19,22]])}))},{key:"addMessage",value:function(t){P(M,this,q).call(this,t,K,this._chatKey,K),P(M,this,q).call(this,t,this._chatKey,K,K)}},{key:"getChats",value:E().mark((function t(){var e,r,n,o,a;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._users[K]){t.next=2;break}return t.abrupt("return");case 2:e=x(this._users[K]),t.prev=3,e.s();case 5:if((r=e.n()).done){t.next=12;break}return n=j(r.value,2),o=n[0],a=n[1],console.log(o,a),t.next=10,[o,a];case 10:t.next=5;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),e.e(t.t0);case 17:return t.prev=17,e.f(),t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[3,14,17,20]])}))},{key:"containsChat",value:function(t){return!(!this._users[K]||!this._users[K].get(t))}},{key:"getAllUsers",value:E().mark((function t(){var e,r,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=x(Object.getOwnPropertyNames(this._users)),t.prev=1,e.s();case 3:if((r=e.n()).done){t.next=9;break}return n=r.value,t.next=7,n;case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.e(t.t0);case 14:return t.prev=14,e.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])}))},{key:"getUserBgColor",value:function(t){return this._unnesesaryAdditions.getColor(t)}},{key:"loadColors",value:function(t){this._unnesesaryAdditions.loadColors(t)}},{key:"saveColors",value:function(){return this._unnesesaryAdditions.saveColors()}},{key:"addUser",value:function(){this._users[K]=new Map}},{key:"chatKey",get:function(){return this._chatKey},set:function(t){this._chatKey=t}}],e&&T(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function q(t,e,r,n){var o=(new Date).toLocaleTimeString().substring(0,5);if(this._users[e]&&this._users[e].get(r)){var a=this._users[e].get(r);return this._users[e].delete(r),a.push(new m(t,o,n)),void this._users[e].set(r,a)}this._users[e].set(this._chatKey,[new m(t,o,n)])}function N(t,e){var r=this._users[t];r.get(e)||(r.set(e,[]),this._users[t]=r)}var U=new I,K=prompt("Введите имя пользователя")||Math.random(),G="chat-messages",F="chatID";function D(){var t=JSON.stringify(U.saveColors());localStorage.setItem("".concat(G,"colors"),t)}function H(){D(),localStorage.setItem(G,JSON.stringify(U.stringify()))}function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,W(n.key),n)}}function W(t){var e=function(t){if("object"!=J(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==J(e)?e:e+""}var z=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},e=[{key:"render",value:function(t,e,r,n){var o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),u=document.createElement("h3"),l=document.createElement("div");s.classList.add("contacts__list-contact"),l.classList.add("contacts__list-contact-logo"),i.classList.add("contacts__list-contact-info"),u.classList.add("contact__name"),o.classList.add("contact__last-msg"),a.classList.add("contact__last-msg-text"),c.classList.add("contact__last-msg-time"),a.innerText=e,u.innerText=t,c.innerText=r;var f=document.createElement("p");return f.innerText=t.charAt(0),l.appendChild(f),l.style.backgroundColor=n,o.appendChild(a),o.appendChild(c),i.appendChild(u),i.appendChild(o),s.appendChild(l),s.appendChild(i),s}}],null&&B(t.prototype,null),e&&B(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function Y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=$(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function $(t,e){if(t){if("string"==typeof t)return R(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function Q(){history.replaceState(null,"","/"),H(),et()}function V(t){if(n.innerHTML="",t){var e=document.createElement("option");return e.value=t,e.textContent=t,void n.appendChild(e)}var r,o=Y(U.getAllUsers());try{for(o.s();!(r=o.n()).done;){var a=r.value,i=document.createElement("option");i.value=a,i.textContent=a,n.appendChild(i)}}catch(t){o.e(t)}finally{o.f()}}function X(){rt(f.value)}document.addEventListener("DOMContentLoaded",(function(){var t;history.replaceState(null,"","/"),(t=JSON.parse(localStorage.getItem(G)))?(function(){var t=JSON.parse(localStorage.getItem("".concat(G,"colors")));t?U.loadColors(t):D()}(),U.updateFromStorage(t)):H(),V(K),et()})),t.addEventListener("submit",(function(t){t.preventDefault(),e.value.trim()&&(U.addMessage(e.value),nt(!0),H(),e.value="")})),t.addEventListener("keydown",(function(e){console.log(e.keyCode),13===e.keyCode&&t.dispatchEvent(new Event("submit")),27===e.keyCode&&(console.log("escape"),Q())})),a.addEventListener("click",(function(){var t=prompt("Введите название чата")||K+Math.random().toString();if(t===K||U.containsChat(t))return confirm("Такой чат уже существует, создать чат: ".concat(t,"2?"))?(U.addChat("".concat(t,"2")),history.replaceState(null,"","?".concat(F,"=").concat(t,"2"))):history.replaceState(null,"","?".concat(F,"=").concat(t)),V(),void et();U.addChat("".concat(t)),history.replaceState(null,"","?".concat(F,"=").concat(t)),et(),V()})),f.addEventListener("input",X),h.addEventListener("click",(function(){return X})),n.addEventListener("change",(function(t){var e=t.target.value;console.log("chna"),K=e,et()})),l.addEventListener("click",Q);var Z={chats:1,messages:2,blank:3};function tt(t){switch(s.classList.add("none"),c.classList.add("none"),u.classList.add("none"),t){case Z.messages:u.classList.remove("none");break;case Z.chats:s.classList.remove("none");break;case Z.blank:c.classList.remove("none")}}function et(){var t=new URL(window.location.href);if(console.log(t.search,t.searchParams.get(F)),console.log(U._users,U.containsChat(t.searchParams.get(F))),!t.search)return rt(),void tt(Z.chats);var e=t.searchParams.get(F);if(U.containsChat(e))return o.innerText=e,U.chatKey=e,y.style.backgroundColor=U.getUserBgColor(e),y.innerHTML="<p>".concat(e.charAt(0),"</p>"),tt(Z.messages),void nt();tt(Z.blank)}function rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i.innerHTML="",console.log("chats clear");var e,r=Y(U.getChats(K));try{var n=function(){var r,n,o=(r=e.value,n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],s=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(r,n)||$(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];if(t&&a.startsWith(t)||!t){var s=z.render(a,c.length>0?c[c.length-1]._text:"пусто...",c.length>0?c[c.length-1]._date:" ",U.getUserBgColor(a));s.addEventListener("click",(function(){return t=a,history.replaceState(null,"","?".concat(F,"=").concat(t)),void et();var t})),i.prepend(s)}};for(r.s();!(e=r.n()).done;)n()}catch(t){r.e(t)}finally{r.f()}}function nt(t){r.innerHTML="";for(var e=U.getMessages(),n=e.next();!n.done;){var o=n.value,a=o._text,i=o._date,c=o._from,s=e.next(),u=!1;s.done&&t&&(u=!0,console.log("Это последний элемент")),r.prepend(m.render(a,i,c,u,c===K?"sent-message":void 0)),n=s}}})();
//# sourceMappingURL=bundle.js.map