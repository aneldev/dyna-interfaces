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
const IResult_1 = __webpack_require__(1);
exports.EErrorType = IResult_1.EErrorType;
const network_1 = __webpack_require__(3);
exports.ERequestMethod = network_1.ERequestMethod;
const forms_1 = __webpack_require__(2);
exports.EFormMode = forms_1.EFormMode;
exports.EFormControlMode = forms_1.EFormControlMode;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EErrorType;
(function (EErrorType) {
    EErrorType[EErrorType["USER"] = 0] = "USER";
    EErrorType[EErrorType["APP"] = 1] = "APP";
    EErrorType[EErrorType["HW"] = 2] = "HW";
})(EErrorType = exports.EErrorType || (exports.EErrorType = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EFormMode;
(function (EFormMode) {
    EFormMode[EFormMode["CREATE"] = 0] = "CREATE";
    EFormMode[EFormMode["VIEW"] = 1] = "VIEW";
    EFormMode[EFormMode["EDIT"] = 2] = "EDIT";
    EFormMode[EFormMode["DELETE"] = 3] = "DELETE";
})(EFormMode = exports.EFormMode || (exports.EFormMode = {}));
var EFormControlMode;
(function (EFormControlMode) {
    EFormControlMode[EFormControlMode["VIEW"] = 0] = "VIEW";
    EFormControlMode[EFormControlMode["EDIT"] = 1] = "EDIT";
})(EFormControlMode = exports.EFormControlMode || (exports.EFormControlMode = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERequestMethod;
(function (ERequestMethod) {
    // help: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
    ERequestMethod[ERequestMethod["GET"] = 0] = "GET";
    ERequestMethod[ERequestMethod["POST"] = 1] = "POST";
    ERequestMethod[ERequestMethod["PUT"] = 2] = "PUT";
    ERequestMethod[ERequestMethod["DELETE"] = 3] = "DELETE";
})(ERequestMethod = exports.ERequestMethod || (exports.ERequestMethod = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});