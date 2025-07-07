/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\nconst main = () => {\n  // 等待 DOMContentLoaded 事件，确保 DOM 元素已加载\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])?.();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://disney-animation/./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst size = {\n  width: 597,\n  height: 527\n};\nconst light_height = 50; // 光线的高度\nconst duration = 4400; // 动画持续时间，单位毫秒\nconst speed = size.height / duration; // 每毫秒移动的像素数\nlet played = false;\nfunction castleAnimation() {\n  if (played) return; // 如果动画已经播放过，则不再执行\n  played = true; // 标记动画已播放\n  const $canvas = document.getElementById(\"canvas\");\n  const $castle_light = document.getElementById(\"castle_light\");\n  console.log(\"index\");\n  function castleShow() {\n    if ($canvas.getContext) {\n      const ctx = $canvas.getContext(\"2d\");\n      const img = new Image();\n      img.src = \"./asset/castle.svg\";\n      img.onload = function () {\n        let start; // 动画开始的时间戳\n        // 展示动画\n        function step(timestamp) {\n          //当前时间戳\n          if (start === undefined) {\n            start = timestamp;\n          }\n          const elapsed = timestamp - start; // 计算从开始到现在经过的时间\n          const y = elapsed * speed - light_height; // 计算光线的y坐标\n          if (y <= size.height - light_height) {\n            // 如果光线还没有到达底部\n            updateImg(img, ctx, y, y + light_height);\n            updateCastleBG(y);\n            requestAnimationFrame(step); // 继续下一帧动画\n          } else {\n            // 光照消失\n            $castle_light.style.animationPlayState = \"paused\"; // 停止\n          }\n        }\n        requestAnimationFrame(step); // 继续下一帧动画\n      };\n    }\n  }\n  castleShow();\n  const $castle_bg = document.querySelector(\".castle_bg\");\n  function updateCastleBG() {\n    $castle_bg.style.clipPath = `inset(0 0 ${size.height - (top + light_height)}px 0)`;\n  }\n  function updateImg(img, ctx, top, bottom) {\n    ctx.clearRect(0, 0, size.width, size.height); // 清除整个canvas\n    ctx.drawImage(img, 0, 0); // 重新绘制背景图片\n    clipRect(ctx, top, bottom);\n    exportImg();\n  }\n  function clipRect(ctx, top, bottom) {\n    // 清除canvas的上半部分和下半部分\n    // 这里的top和bottom是相对于canvas的高度\n    ctx.clearRect(0, 0, size.width, top);\n    ctx.clearRect(0, bottom, size.width, size.height);\n  }\n  function exportImg() {\n    // 把canvas的内容转换成dataUrl，并设置给castle_light的背景图片\n    const dataUrl = canvas.toDataURL(\"image/webp\", 0.1);\n    $castle_light.style.backgroundImage = `url(${dataUrl})`;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castleAnimation);\n\n//# sourceURL=webpack://disney-animation/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;