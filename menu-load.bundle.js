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

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n// We are going to create the menu section\nfunction menuPage() {\n  const menuPage = document.createElement('div');\n  const cards = document.createElement('div');\n  const header = document.createElement('h2');\n\n  menuPage.classList.add('menu-page');\n  cards.classList.add('cards');\n\n  header.textContent = 'Greatest Foods from Erzurum'\n\n  for (let i = 0; i < 6; i++) {\n    const card = document.createElement('div');\n    const para = document.createElement('p');\n    const img  = document.createElement('img');\n\n    card.classList.add('card');\n\n    switch (i) {\n      case 0:\n        para.textContent = 'Cag Kebap';\n        img.src = 'img/one-cag.jpg';\n        img.alt = 'cag-kebap';\n        break;\n      \n      case 1:\n        para.textContent = 'Coban Salad';\n        img.src = 'img/coban-salad.jpg';\n        img.alt = 'coban-salad';\n        break;\n      \n      case 2: \n        para.textContent = 'Manda Yogurt'\n        img.src = 'img/manda-yogurt.jpg';\n        img.alt = 'manda-yogurt'\n        break;\n\n      case 3: \n        para.textContent = 'Cemen Salad'\n        img.src = 'img/cemen.jpg';\n        img.alt = 'cemen'\n        break\n        \n      case 4: \n        para.textContent = 'Kadayif Dolmasi'\n        img.src = 'img/kadayif-dolmasi.jpg';\n        img.alt = 'kadayif-dolmasi'\n        break  \n\n      case 5: \n        para.textContent = 'Erzurum Cheese'\n        img.src = 'img/cheese.jpg';\n        img.alt = 'erzurum-cheese'\n        break\n    }\n    card.appendChild(para);\n    card.appendChild(img);\n    cards.appendChild(card);\n    menuPage.appendChild(header);\n    menuPage.appendChild(cards);\n  }\n\n  return menuPage;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/menu-load.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;