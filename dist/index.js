(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-interfaces", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-interfaces"] = factory();
	else
		root["dyna-interfaces"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IResult_1 = __webpack_require__(1);
exports.EErrorType = IResult_1.EErrorType;
var network_1 = __webpack_require__(3);
exports.ERequestMethod = network_1.ERequestMethod;
var forms_1 = __webpack_require__(2);
exports.EFormMode = forms_1.EFormMode;
exports.EFormControlMode = forms_1.EFormControlMode;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EErrorType;
(function (EErrorType) {
    EErrorType["USER"] = "USER_ERROR";
    EErrorType["APP"] = "APP_ERROR";
    EErrorType["HW"] = "HW_ERROR";
})(EErrorType = exports.EErrorType || (exports.EErrorType = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EFormMode;
(function (EFormMode) {
    EFormMode["CREATE"] = "CREATE";
    EFormMode["VIEW"] = "VIEW";
    EFormMode["EDIT"] = "EDIT";
    EFormMode["DELETE"] = "DELETE";
})(EFormMode = exports.EFormMode || (exports.EFormMode = {}));
var EFormControlMode;
(function (EFormControlMode) {
    EFormControlMode["VIEW"] = "VIEW";
    EFormControlMode["EDIT"] = "EDIT";
})(EFormControlMode = exports.EFormControlMode || (exports.EFormControlMode = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERequestMethod;
(function (ERequestMethod) {
    // help: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
    // http://www.restapitutorial.com/lessons/httpmethods.html
    ERequestMethod["GET"] = "GET";
    ERequestMethod["POST"] = "POST";
    ERequestMethod["PUT"] = "PUT";
    ERequestMethod["PATCH"] = "PATCH";
    ERequestMethod["DELETE"] = "DELETE";
})(ERequestMethod = exports.ERequestMethod || (exports.ERequestMethod = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});