/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector(".chat__form"),e=document.querySelector(".chat__form-input"),r=document.querySelector(".chat__messages-layout"),n=document.querySelector(".contacts__header-username"),o=document.querySelector(".chat__contact"),a=document.querySelector(".contacts__create-contact-btn"),i=document.querySelector(".contacts__list"),c=document.querySelector(".incorrect"),u=document.querySelector(".contacts"),s=document.querySelector(".chat"),l=document.querySelector(".chats-back");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var e=function(t){if("object"!=f(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:e+""}var v=function(){return t=function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=e,this._date=r,this._from=n},r=[{key:"render",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"received-message",o=document.createElement("div");o.classList.add("message",n);var a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("p");return a.innerText=r,i.innerText=t,c.innerText=e,i.classList.add("message__content--text"),[a,i,c].forEach((function(t){t.classList.add("message__content"),o.appendChild(t)})),o}}],(e=[{key:"messageTime",get:function(){return this._date}},{key:"messageText",get:function(){return this._text}}])&&h(t.prototype,e),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",y="suspendedYield",v="executing",d="completed",g={};function b(){}function w(){}function _(){}var x={};s(x,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==r&&n.call(E,i)&&(x=E);var S=_.prototype=b.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==p(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?d:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(p(e)+" is not iterable")}return w.prototype=_,o(S,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:w,configurable:!0}),w.displayName=s(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},k(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(S),s(S,u,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function g(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=b(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function b(t,e){if(t){if("string"==typeof t)return w(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,x(n.key),n)}}function x(t){var e=function(t){if("object"!=p(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}var L=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._date=new Date,this._buffer=[],this._storage=new Map,this._chatKey=""},e=[{key:"receiveMessage",value:function(t,e){if(this._storage.get(t)){var r=this._storage.get(t);this._storage.delete(t),r.push(new v(e,this._date.toLocaleTimeString().substring(0,5),t)),this._storage.set(t,r)}}},{key:"getMessages",value:m().mark((function t(){var e,r,n,o,a,i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(this._buffer),!this._storage.get(this._chatKey)){t.next=19;break}e=g(this._storage.get(this._chatKey)),t.prev=3,e.s();case 5:if((r=e.n()).done){t.next=11;break}return n=r.value,t.next=9,n;case 9:t.next=5;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),e.e(t.t0);case 16:return t.prev=16,e.f(),t.finish(16);case 19:o=g(this._buffer),t.prev=20,o.s();case 22:if((a=o.n()).done){t.next=29;break}return i=a.value,console.log(i),t.next=27,i;case 27:t.next=22;break;case 29:t.next=34;break;case 31:t.prev=31,t.t1=t.catch(20),o.e(t.t1);case 34:return t.prev=34,o.f(),t.finish(34);case 37:case"end":return t.stop()}}),t,this,[[3,13,16,19],[20,31,34,37]])}))},{key:"saveBuffer",value:function(){var t=this._storage.get(this._chatKey);this._storage.delete(this._chatKey),this._buffer.forEach((function(e){return t.push(e)})),this._storage.set(this._chatKey,t),this._buffer=[]}},{key:"stringify",value:function(){var t,e={},r=g(this._storage.entries());try{for(r.s();!(t=r.n()).done;){var n=d(t.value,2),o=n[0],a=n[1];e[o]=a,console.log(o,a)}}catch(t){r.e(t)}finally{r.f()}return e}},{key:"addMessage",value:function(t){this._buffer.push(new v(t,this._date.toLocaleTimeString().substring(0,5),E)),console.log("values",this._storage)}},{key:"updateFromObject",value:function(t){for(var e=0,r=Object.entries(t);e<r.length;e++){var n=d(r[e],2),o=n[0],a=n[1];console.log("upd",o,a),this._storage.set(o,a)}}},{key:"getChats",value:m().mark((function t(){var e,r,n,o,a;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=g(this._storage),t.prev=1,e.s();case 3:if((r=e.n()).done){t.next=9;break}return n=d(r.value,2),o=n[0],a=n[1],t.next=7,[o,a];case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.e(t.t0);case 14:return t.prev=14,e.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])}))},{key:"addChat",value:function(t){this._storage.set(t,[]),this._chatKey=t}},{key:"containsChat",value:function(t){return this._storage.has(t)}},{key:"isEmpty",value:function(){return 0===this._storage.size}},{key:"randomChat",get:function(){var t=Array.from(this._storage.keys());return t[Math.floor(Math.random()*t.length)]}},{key:"buffer",get:function(){return this._buffer},set:function(t){console.log("buffer value",t),this._buffer=t}},{key:"chatName",get:function(){return this._chatKey},set:function(t){this._chatKey=t}}],e&&_(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),E="Илья",S="chat-messages",k="chatID",j=new L;function O(){return JSON.parse(localStorage.getItem(S))}function T(t){localStorage.setItem(S,JSON.stringify(t))}function P(){var t=O();if(!t){var e={lastChat:j.chatName,buffer:j.buffer,chats:{}};return Object.assign(e.chats,j.stringify()),void T(e)}t.buffer=j.buffer,j.buffer=[],T(t)}function C(){var t={lastChat:j.chatName,buffer:j.buffer,chats:{}};Object.assign(t.chats,j.stringify()),T(t)}function N(){var t=O();t?(console.log(t),console.log("чаты",t.chats),t.buffer&&(j.buffer=t.buffer),t.lastChat&&(j.chatName=t.lastChat),j.updateFromObject(t.chats)):C()}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,M(n.key),n)}}function M(t){var e=function(t){if("object"!=A(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==A(e)?e:e+""}var G=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},e=[{key:"render",value:function(t,e,r){var n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),u=document.createElement("h3"),s=document.createElement("div");return c.classList.add("contacts__list-contact"),s.classList.add("contacts__list-contact-logo"),a.classList.add("contacts__list-contact-info"),u.classList.add("contact__name"),n.classList.add("contact__last-msg"),o.classList.add("contact__last-msg-text"),i.classList.add("contact__last-msg-time"),o.innerText=e,u.innerText=t,i.innerText=r,s.style.backgroundImage='url("https://i.pravatar.cc/60?random='.concat(Math.random(),'")'),n.appendChild(o),n.appendChild(i),a.appendChild(u),a.appendChild(n),c.appendChild(s),c.appendChild(a),console.log("chat div",c),c}}],null&&I(t.prototype,null),e&&I(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function q(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=K(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function K(t,e){if(t){if("string"==typeof t)return D(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(t,e):void 0}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function Y(){Y=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",y="suspendedYield",v="executing",p="completed",d={};function m(){}function g(){}function b(){}var w={};s(w,i,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(C([])));x&&x!==r&&n.call(x,i)&&(w=x);var L=b.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==F(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?p:y,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=p,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(F(e)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,u,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function B(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function H(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){B(a,n,o,i,c,"next",t)}function c(t){B(a,n,o,i,c,"throw",t)}i(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){N(),$(),n.innerText=E,setInterval(H(Y().mark((function t(){var e;return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,console.log("1 return"),console.log(j.isEmpty()),!j.isEmpty()){t.next=5;break}return t.abrupt("return");case 5:return console.log("2 return"),t.next=8,R();case 8:if(e=t.sent,console.log("upd text",e),e){t.next=12;break}return t.abrupt("return");case 12:console.log("3 return"),j.receiveMessage(j.randomChat,e),C(),$(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.warn(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])}))),1e4)})),t.addEventListener("submit",(function(t){var r;t.preventDefault(),e.value.trim()&&(j.addMessage(e.value),P(),(r=O())||C(),j.chatName=r.lastChat,j.buffer=r.buffer,r.buffer.length>3&&(j.saveBuffer(),C(),N()),e.value="",z())})),t.addEventListener("keypress",(function(e){13===e.keyCode&&t.dispatchEvent(new Event("submit"))})),a.addEventListener("click",(function(){var t=prompt("Введите название чата")||E+Math.random().toString();j.addChat(t),C(),window.location.href="?".concat(k,"=").concat(t),$()})),l.addEventListener("click",(function(){j.saveBuffer(),P(),C(),J(U.chats),window.location.href="/",$()}));var U={chats:1,messages:2,blank:3};function J(t){switch(u.classList.add("none"),c.classList.add("none"),s.classList.add("none"),t){case U.chats:u.classList.remove("none");break;case U.messages:s.classList.remove("none");break;case U.blank:c.classList.remove("none")}console.log(j._storage)}function $(){var t=new URL(window.location.href);return t.search?j.containsChat(t.searchParams.get(k))?(o.innerText=t.searchParams.get(k),j.chatName=t.searchParams.get(k),J(U.messages),void z()):void J(U.blank):(function(){i.innerHTML="";var t,e=q(j.getChats());try{var r=function(){var e,r,n=(e=t.value,r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,r)||K(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1],c=G.render(o,a.length>0?a[a.length-1]._text:"пусто (",a.length>0?a[a.length-1]._date:" ");c.addEventListener("click",(function(){return function(t){P(),window.location.href="?".concat(k,"=").concat(t),$()}(o)})),i.prepend(c)};for(e.s();!(t=e.n()).done;)r()}catch(t){e.e(t)}finally{e.f()}}(),void J(U.chats))}function z(){N(),r.innerHTML="",console.log('messages.innerHTML = ""');var t,e=q(j.getMessages());try{for(e.s();!(t=e.n()).done;){var n=t.value;console.log(n);var o=n._text,a=n._date,i=n._from;r.prepend(v.render(o,a,i,i===E?"sent-message":void 0))}}catch(t){e.e(t)}finally{e.f()}}function R(){return Q.apply(this,arguments)}function Q(){return(Q=H(Y().mark((function t(){var e,r;return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("123");case 3:return e=t.sent,t.next=6,e.json();case 6:if(r=t.sent,console.log("text",r.text),"success"!=r.status){t.next=10;break}return t.abrupt("return",r.text);case 10:return t.abrupt("return","");case 13:throw t.prev=13,t.t0=t.catch(0),new Error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}})();