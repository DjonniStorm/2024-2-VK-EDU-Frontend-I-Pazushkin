/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector(".chat__form"),e=document.querySelector(".chat__form-input"),r=document.querySelector(".chat__messages-layout"),n=document.querySelector(".contacts__header-username"),o=document.querySelector(".chat__contact"),a=document.querySelector(".contacts__create-contact-btn"),i=document.querySelector(".contacts__list"),c=document.querySelector(".incorrect"),u=document.querySelector(".contacts"),s=document.querySelector(".chat"),f=document.querySelector(".chats-back"),l=document.querySelector(".contacts__header-search__input"),h=document.querySelector(".contacts__header-search__button"),y=document.querySelector(".chat__header-info-logo");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var e=function(t){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}var m=function(){return t=function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=e,this._date=r,this._from=n},r=[{key:"render",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"received-message",o=document.createElement("div");o.classList.add("message",n);var a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("p");return a.innerText=r,i.innerText=t,c.innerText=e,i.classList.add("message__content--text"),[a,i,c].forEach((function(t){t.classList.add("message__content"),o.appendChild(t)})),o}}],(e=[{key:"messageTime",get:function(){return this._date}},{key:"messageText",get:function(){return this._text}}])&&p(t.prototype,e),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(){b=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:O(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",p="completed",d={};function m(){}function w(){}function _(){}var x={};s(x,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==r&&n.call(E,i)&&(x=E);var k=_.prototype=m.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==g(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(e,r,n);if("normal"===s.type){if(o=n.done?p:y,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=p,n.method="throw",n.arg=s.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(g(e)+" is not iterable")}return w.prototype=_,o(k,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:w,configurable:!0}),w.displayName=s(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},S(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(k),s(k,u,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,e)||x(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=x(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function x(t,e){if(t){if("string"==typeof t)return L(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function k(t){var e=function(t){if("object"!=g(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==g(e)?e:e+""}var S=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._date=new Date,this._buffer=[],this._storage=new Map,this._chatKey=""},e=[{key:"receiveMessage",value:function(t,e){if(this._storage.get(t)){var r=this._storage.get(t);this._storage.delete(t),r.push(new m(e,this._date.toLocaleTimeString().substring(0,5),t)),this._storage.set(t,r)}}},{key:"getChats",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b().mark((function r(){var n,o,a,i,c,u,s,f,l,h;return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=20;break}n=_(t._storage),r.prev=2,n.s();case 4:if((o=n.n()).done){r.next=10;break}return a=w(o.value,2),i=a[0],c=a[1],r.next=8,[i,c];case 8:r.next=4;break;case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),n.e(r.t0);case 15:return r.prev=15,n.f(),r.finish(15);case 18:r.next=38;break;case 20:u=_(t._storage),r.prev=21,u.s();case 23:if((s=u.n()).done){r.next=30;break}if(f=w(s.value,2),l=f[0],h=f[1],!l.startsWith(e)){r.next=28;break}return r.next=28,[l,h];case 28:r.next=23;break;case 30:r.next=35;break;case 32:r.prev=32,r.t1=r.catch(21),u.e(r.t1);case 35:return r.prev=35,u.f(),r.finish(35);case 38:case"end":return r.stop()}}),r,null,[[2,12,15,18],[21,32,35,38]])}))()}},{key:"saveBuffer",value:function(){var t=this._storage.get(this._chatKey);this._storage.delete(this._chatKey),this._buffer.forEach((function(e){return t.push(e)})),this._storage.set(this._chatKey,t),this._buffer=[]}},{key:"getMessages",value:b().mark((function t(){var e,r,n,o,a,i;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._storage.get(this._chatKey)){t.next=18;break}e=_(this._storage.get(this._chatKey)),t.prev=2,e.s();case 4:if((r=e.n()).done){t.next=10;break}return n=r.value,t.next=8,n;case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.e(t.t0);case 15:return t.prev=15,e.f(),t.finish(15);case 18:o=_(this._buffer),t.prev=19,o.s();case 21:if((a=o.n()).done){t.next=27;break}return i=a.value,t.next=25,i;case 25:t.next=21;break;case 27:t.next=32;break;case 29:t.prev=29,t.t1=t.catch(19),o.e(t.t1);case 32:return t.prev=32,o.f(),t.finish(32);case 35:case"end":return t.stop()}}),t,this,[[2,12,15,18],[19,29,32,35]])}))},{key:"stringify",value:function(){var t,e={},r=_(this._storage.entries());try{for(r.s();!(t=r.n()).done;){var n=w(t.value,2),o=n[0],a=n[1];e[o]=a}}catch(t){r.e(t)}finally{r.f()}return e}},{key:"addMessage",value:function(t){this._buffer.push(new m(t,this._date.toLocaleTimeString().substring(0,5),j))}},{key:"updateFromObject",value:function(t){for(var e=0,r=Object.entries(t);e<r.length;e++){var n=w(r[e],2),o=n[0],a=n[1];this._storage.set(o,a)}}},{key:"addChat",value:function(t){this._storage.set(t,[]),this._chatKey=t}},{key:"containsChat",value:function(t){return this._storage.has(t)}},{key:"isEmpty",value:function(){return 0===this._storage.size}},{key:"randomChat",get:function(){var t=Array.from(this._storage.keys());return t[Math.floor(Math.random()*t.length)]}},{key:"chatName",get:function(){return this._chatKey},set:function(t){this._chatKey=t}},{key:"buffer",get:function(){return this._buffer},set:function(t){this._buffer=t}}],e&&E(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),j="Илья",O="chat-messages",T="chatID",P=new S;function C(){return JSON.parse(localStorage.getItem(O))}function N(t){localStorage.setItem(O,JSON.stringify(t))}function A(){var t=C();if(!t){var e={lastChat:P.chatName,buffer:P.buffer,chats:{}};return Object.assign(e.chats,P.stringify()),void N(e)}t.buffer=P.buffer,P.buffer=[],N(t)}function I(){var t={lastChat:P.chatName,buffer:P.buffer,chats:{}};Object.assign(t.chats,P.stringify()),N(t)}function M(){var t=C();t?(t.buffer&&(P.buffer=t.buffer),t.lastChat&&(P.chatName=t.lastChat),P.updateFromObject(t.chats)):I()}function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,F(n.key),n)}}function F(t){var e=function(t){if("object"!=G(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==G(e)?e:e+""}var K=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},e=[{key:"render",value:function(t,e,r){var n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),u=document.createElement("h3"),s=document.createElement("div");return c.classList.add("contacts__list-contact"),s.classList.add("contacts__list-contact-logo"),a.classList.add("contacts__list-contact-info"),u.classList.add("contact__name"),n.classList.add("contact__last-msg"),o.classList.add("contact__last-msg-text"),i.classList.add("contact__last-msg-time"),o.innerText=e,u.innerText=t,i.innerText=r,s.style.backgroundImage='url("https://i.pravatar.cc/60?random='.concat(Math.random(),'")'),n.appendChild(o),n.appendChild(i),a.appendChild(u),a.appendChild(n),c.appendChild(s),c.appendChild(a),c}}],null&&q(t.prototype,null),e&&q(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function Y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=B(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function B(t,e){if(t){if("string"==typeof t)return U(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(t,e):void 0}}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function H(){H=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:S(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",p="completed",d={};function m(){}function g(){}function b(){}var w={};s(w,i,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(C([])));x&&x!==r&&n.call(x,i)&&(w=x);var L=b.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==D(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(e,r,n);if("normal"===s.type){if(o=n.done?p:y,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=p,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(D(e)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,u,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function J(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function $(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){J(a,n,o,i,c,"next",t)}function c(t){J(a,n,o,i,c,"throw",t)}i(void 0)}))}}function z(){l.value?X(l.value):X()}document.addEventListener("DOMContentLoaded",(function(){M(),Q(),n.innerText=j,setInterval($(H().mark((function t(){var e;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!P.isEmpty()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Z();case 5:if(e=t.sent){t.next=8;break}return t.abrupt("return");case 8:P.receiveMessage(P.randomChat,e),I(),Q(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.warn(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),25e3)})),t.addEventListener("submit",(function(t){var r;t.preventDefault(),e.value.trim()&&(P.addMessage(e.value),A(),(r=C())||I(),P.chatName=r.lastChat,P.buffer=r.buffer,r.buffer.length>3&&(P.saveBuffer(),I(),M()),e.value="",V())})),t.addEventListener("keypress",(function(e){13===e.keyCode&&t.dispatchEvent(new Event("submit"))})),a.addEventListener("click",(function(){var t=prompt("Введите название чата")||j+Math.random().toString();P.addChat(t),I(),window.location.href="?".concat(T,"=").concat(t),Q()})),f.addEventListener("click",(function(){P.saveBuffer(),A(),I(),W(R.chats),window.location.href="/",Q()})),l.addEventListener("input",z),h.addEventListener("click",(function(){return z}));var R={chats:1,messages:2,blank:3};function W(t){switch(u.classList.add("none"),c.classList.add("none"),s.classList.add("none"),t){case R.chats:u.classList.remove("none");break;case R.messages:s.classList.remove("none");break;case R.blank:c.classList.remove("none")}console.log(P._storage)}function Q(){var t=new URL(window.location.href);return t.search?P.containsChat(t.searchParams.get(T))?(o.innerText=t.searchParams.get(T),y.style.background='url("https://i.pravatar.cc/60?random='.concat(Math.random(),")"),P.chatName=t.searchParams.get(T),W(R.messages),void V()):void W(R.blank):(X(),void W(R.chats))}function V(){M(),r.innerHTML="";var t,e=Y(P.getMessages());try{for(e.s();!(t=e.n()).done;){var n=t.value,o=n._text,a=n._date,i=n._from;r.prepend(m.render(o,a,i,i===j?"sent-message":void 0))}}catch(t){e.e(t)}finally{e.f()}}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i.innerHTML="";var e,r=Y(P.getChats(t));try{var n=function(){var t,r,n=(t=e.value,r=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,r)||B(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1],c=K.render(o,a.length>0?a[a.length-1]._text:"пусто...",a.length>0?a[a.length-1]._date:" ");c.addEventListener("click",(function(){return function(t){A(),window.location.href="?".concat(T,"=").concat(t),Q()}(o)})),i.prepend(c)};for(r.s();!(e=r.n()).done;)n()}catch(t){r.e(t)}finally{r.f()}}function Z(){return tt.apply(this,arguments)}function tt(){return(tt=$(H().mark((function t(){var e,r;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fish-text.ru/get?format=json");case 3:return e=t.sent,t.next=6,e.json();case 6:if("success"!=(r=t.sent).status){t.next=9;break}return t.abrupt("return",r.text);case 9:return t.abrupt("return","");case 12:throw t.prev=12,t.t0=t.catch(0),new Error(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}})();