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

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n// Contact page create\n\nfunction contactPage() {\n  const contactPage = document.createElement('div')\n  const para1 = document.createElement('p')\n  const para2 = document.createElement('p')\n  const img = document.createElement('img')\n\n  contactPage.classList.add('contact-page')\n  img.src = 'img/contact.png'\n  img.alt = 'contact'\n\n  para1.textContent = 'Phone: 252-252-2525'\n  para2.textContent = 'Email: acar-cag@erzurum.com'\n\n  contactPage.appendChild(para1)\n  contactPage.appendChild(para2)\n  contactPage.appendChild(img)\n\n  return contactPage\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _menu_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load.js */ \"./src/menu-load.js\");\n/* harmony import */ var _contact_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load.js */ \"./src/contact-load.js\");\n\n\n\n\n\n\n(function() {\n  // We should have the content div first\n  const content = document.querySelector('#content')\n\n  // Then the buttons:\n  const homeBtn = document.querySelectorAll('.content .header .buttons button');\n\n  // The page will open as the homepage\n  const home = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n  const menu = (0,_menu_load_js__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n  const contact = (0,_contact_load_js__WEBPACK_IMPORTED_MODULE_2__.contactPage)();\n  content.appendChild(home)\n\n  const removeKid = (first,second) => {\n    if (content.children[1].classList.value == first.classList.value) {\n      console.log('asasdasd')\n      console.log(content.children);\n      content.removeChild(first)\n    } else if (content.children[1].classList.value == second.classList.value) {\n      content.removeChild(second);\n      console.log(content.children);\n    }\n  }\n\n  const openPage = (first,second,appendThis) => {\n    removeKid(first,second);\n    content.appendChild(appendThis);\n  }\n\n  homeBtn.forEach(btn => btn.addEventListener('click', () => {\n    switch (btn.textContent) {\n      case 'Home':\n        console.log('HOME SELECTED');\n        openPage(menu,contact,home);\n        break;\n\n      case 'Menu':\n        console.log('MENU SELECTED');\n        openPage(home,contact,menu);\n        break;\n\n      case 'Contact':\n        console.log('CONTACT SELECTED');\n        openPage(home,menu,contact)\n        break;\n    }\n  }))\n})()\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n// We are going to create the menu section\nfunction menuPage() {\n  const menuPage = document.createElement('div');\n  const cards = document.createElement('div');\n  const header = document.createElement('h2');\n\n  menuPage.classList.add('menu-page');\n  cards.classList.add('cards');\n\n  header.textContent = 'Greatest Foods from Erzurum'\n\n  for (let i = 0; i < 6; i++) {\n    const card = document.createElement('div');\n    const para = document.createElement('p');\n    const img  = document.createElement('img');\n\n    card.classList.add('card');\n\n    switch (i) {\n      case 0:\n        para.textContent = 'Cag Kebap';\n        img.src = 'img/one-cag.jpg';\n        img.alt = 'cag-kebap';\n        break;\n      \n      case 1:\n        para.textContent = 'Coban Salad';\n        img.src = 'img/coban-salad.jpg';\n        img.alt = 'coban-salad';\n        break;\n      \n      case 2: \n        para.textContent = 'Manda Yogurt'\n        img.src = 'img/manda-yogurt.jpg';\n        img.alt = 'manda-yogurt'\n        break;\n\n      case 3: \n        para.textContent = 'Cemen Salad'\n        img.src = 'img/cemen.jpg';\n        img.alt = 'cemen'\n        break\n        \n      case 4: \n        para.textContent = 'Kadayif Dolmasi'\n        img.src = 'img/kadayif-dolmasi.jpg';\n        img.alt = 'kadayif-dolmasi'\n        break  \n\n      case 5: \n        para.textContent = 'Erzurum Cheese'\n        img.src = 'img/cheese.jpg';\n        img.alt = 'erzurum-cheese'\n        break\n    }\n    card.appendChild(para);\n    card.appendChild(img);\n    cards.appendChild(card);\n    menuPage.appendChild(header);\n    menuPage.appendChild(cards);\n  }\n\n  return menuPage;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu-load.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n// Here we are going to create the home page and export it!\nfunction homePage() {\n  const homePage = document.createElement('div');\n  const infoContainer = document.createElement('div');\n  const header = document.createElement('h2');\n  const para1 = document.createElement('p');\n  const img = document.createElement('img');\n  const para2 = document.createElement('p');\n\n  homePage.classList.add('home-page')\n  infoContainer.classList.add('info-container')\n\n  header.textContent = 'What is Cag Kebap'\n  para1.textContent = ' is a horizontally stacked marinated rotating lamb kebab variety, originating in Erzurum Province, Turkey.'\n  para2.textContent = ' Would you like to try our awesome Cag Kebap?'\n\n  img.src = './img/cag.jpg'\n  img.alt = 'cag';\n\n  infoContainer.appendChild(header)\n  infoContainer.appendChild(para1)\n  infoContainer.appendChild(img)\n  infoContainer.appendChild(para2)\n  \n  homePage.appendChild(infoContainer)\n\n  return homePage\n}\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;