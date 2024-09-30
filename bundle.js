/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/elements.js":
/*!*****************************!*\
  !*** ./scripts/elements.js ***!
  \*****************************/
/*! exports provided: form, input, messages, LOCAL_STORAGE_KEY, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messages\", function() { return messages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL_STORAGE_KEY\", function() { return LOCAL_STORAGE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"user\", function() { return user; });\nvar form = document.querySelector('.chat__form');\nvar input = document.querySelector('.chat__form-input');\nvar messages = document.querySelector('.chat__messages-layout');\nvar LOCAL_STORAGE_KEY = 'chat-messages';\nvar user = prompt('Введите имя пользователя');\n\n//# sourceURL=webpack:///./scripts/elements.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./scripts/storage.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./scripts/elements.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener('DOMContentLoaded', renderMessages);\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"form\"].addEventListener('submit', handleSubmit);\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"form\"].addEventListener('keypress', handleKeyPress);\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (_elements__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value.trim()) {\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"saveToLocalStorage\"])(_elements__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value);\n    _elements__WEBPACK_IMPORTED_MODULE_1__[\"input\"].value = '';\n    renderMessages();\n  }\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    _elements__WEBPACK_IMPORTED_MODULE_1__[\"form\"].dispatchEvent(new Event('submit'));\n  }\n}\nfunction renderMessages() {\n  try {\n    var storedMessages = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getFromLocalStorage\"])();\n    _elements__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].innerHTML = '';\n    storedMessages.forEach(function (elem) {\n      var messageDiv = document.createElement('div');\n      messageDiv.classList.add('message', 'sent-message');\n      var messageSender = document.createElement('p'),\n        messageText = document.createElement('p'),\n        messageTime = document.createElement('p');\n      messageSender.innerText = elem.from;\n      messageText.innerText = elem.text;\n      messageTime.innerText = elem.time;\n      messageText.classList.add('message__content--text');\n      [messageSender, messageText, messageTime].forEach(function (dataElem) {\n        dataElem.classList.add('message__content');\n        messageDiv.appendChild(dataElem);\n      });\n      _elements__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].prepend(messageDiv);\n    });\n  } catch (e) {\n    console.warn(e);\n  }\n}\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/storage.js":
/*!****************************!*\
  !*** ./scripts/storage.js ***!
  \****************************/
/*! exports provided: saveToLocalStorage, getFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveToLocalStorage\", function() { return saveToLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFromLocalStorage\", function() { return getFromLocalStorage; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./scripts/elements.js\");\n\nfunction saveToLocalStorage(message) {\n  try {\n    var savedMessages = localStorage.getItem(_elements__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]);\n    var messageToSave = {\n      time: new Date().toLocaleTimeString().substring(0, 5),\n      text: message,\n      from: _elements__WEBPACK_IMPORTED_MODULE_0__[\"user\"]\n    };\n    if (savedMessages) {\n      var messages = JSON.parse(savedMessages);\n      messages.push(messageToSave);\n      localStorage.setItem(_elements__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify(messages));\n      return;\n    }\n    localStorage.setItem(_elements__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify([messageToSave]));\n  } catch (e) {\n    console.warn(e);\n  }\n}\nfunction getFromLocalStorage() {\n  try {\n    var savedMessages = localStorage.getItem(_elements__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]);\n    return JSON.parse(savedMessages);\n  } catch (e) {\n    throw new Error('Can`t get data');\n  }\n}\n\n//# sourceURL=webpack:///./scripts/storage.js?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/index.css?");

/***/ })

/******/ });