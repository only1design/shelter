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

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sideMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sideMenu.js */ \"./src/scripts/modules/sideMenu.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() { \r\n  (0,_modules_sideMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/sideMenu.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/sideMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = document.querySelector('.header__burger'),\r\n  menuLayout = document.querySelector('.side-menu'),\r\n  menuScreen = document.querySelector('.side-menu__screen'),\r\n  headerLogo = document.querySelector('.header__wrapper .logo'),\r\n  html = document.querySelector('html'),\r\n  header = document.querySelector('.header'),\r\n  links = document.querySelectorAll('.side-menu .nav__list-item'),\r\n  hiddenClass = 'hidden',\r\n  fadeInClass = 'fade-in',\r\n  fadeOutClass = 'fade-out',\r\n  slideInClass = 'side-menu__screen_slide-in',\r\n  slideOutClass = 'side-menu__screen_slide-out',\r\n  burgerActiveClass = 'header__burger_active',\r\n  headerStickyClass = 'header_sticky';\r\n\r\nfunction isMenuOpen() {\r\n  return !menuLayout.classList.contains(fadeOutClass);\r\n};\r\n\r\nfunction scrollToTop() {\r\n  window.scrollTo({\r\n    top: 0,\r\n    behavior: \"smooth\"\r\n  });\r\n};\r\n\r\nfunction scrollLock() {\r\n  html.style.overflow = 'hidden';\r\n};\r\n\r\nfunction scrollUnlock() {\r\n  html.style.overflow = '';\r\n};\r\n\r\nfunction showMenuLayout() {\r\n  menuLayout.classList.remove(hiddenClass);\r\n\r\n  menuLayout.classList.add(fadeInClass);\r\n  menuLayout.classList.remove(fadeOutClass);\r\n};\r\n\r\nfunction hideMenuLayout() {\r\n  menuLayout.classList.add(fadeOutClass);\r\n  menuLayout.classList.remove(fadeInClass);\r\n\r\n  setTimeout(() => {\r\n    menuLayout.classList.add(hiddenClass);\r\n  }, 100);\r\n};\r\n\r\nfunction activateBurger() {\r\n  burger.classList.add(burgerActiveClass);\r\n};\r\n\r\nfunction disactivateBurger() {\r\n  burger.classList.remove(burgerActiveClass);\r\n};\r\n\r\nfunction slideInMenu() {\r\n  setTimeout(() => {\r\n    menuScreen.classList.add(slideInClass);\r\n    menuScreen.classList.remove(slideOutClass);\r\n  }, 0);\r\n};\r\n\r\nfunction slideOutMenu() {\r\n  menuScreen.classList.add(slideOutClass);\r\n  menuScreen.classList.remove(slideInClass);\r\n};\r\n\r\nfunction hideHeaderLogo() {\r\n  headerLogo.classList.add(fadeOutClass);\r\n  headerLogo.classList.remove(fadeInClass);\r\n};\r\n\r\nfunction showHeaderLogo() {\r\n  headerLogo.classList.add(fadeInClass);\r\n  headerLogo.classList.remove(fadeOutClass);\r\n};\r\n\r\nfunction autoCloseMenu() {\r\n  window.addEventListener('resize', () => {\r\n    if (window.innerWidth >= 768 && isMenuOpen()) {\r\n      closeMenu();\r\n    } \r\n  });\r\n\r\n  links.forEach(link => {\r\n    link.addEventListener('click', (e) => {\r\n      closeMenu();\r\n    });\r\n  });\r\n};\r\n\r\nfunction openMenu() {\r\n  showMenuLayout();\r\n  slideInMenu();\r\n  activateBurger();\r\n  hideHeaderLogo();\r\n  scrollLock();\r\n  if (!header.classList.contains(headerStickyClass)) {\r\n    scrollToTop();\r\n  };\r\n};\r\n\r\nfunction closeMenu() {\r\n  hideMenuLayout();\r\n  disactivateBurger();\r\n  slideOutMenu();\r\n  showHeaderLogo();\r\n  scrollUnlock();\r\n};\r\n\r\nfunction toggleMenu() {\r\n  if (isMenuOpen()) {\r\n    closeMenu();\r\n  } else {\r\n    openMenu();\r\n  };\r\n};\r\n\r\nfunction sideMenu() {\r\n  burger.addEventListener('click', (e) => {\r\n    toggleMenu();\r\n  });\r\n\r\n  menuLayout.addEventListener('click', (e) => {\r\n    if (e.target === menuLayout) {\r\n      closeMenu();\r\n    };\r\n  });\r\n\r\n  autoCloseMenu();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideMenu);\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/sideMenu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;