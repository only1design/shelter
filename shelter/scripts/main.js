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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sideMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sideMenu.js */ \"./src/scripts/modules/sideMenu.js\");\n/* harmony import */ var _modules_generateCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generateCards.js */ \"./src/scripts/modules/generateCards.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() { \r\n  (0,_modules_sideMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_generateCards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/generateCards.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/generateCards.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalFunctions.js */ \"./src/scripts/modules/globalFunctions.js\");\n\r\n\r\nlet ItemsContainer = false;\r\n\r\nif (isMainPageContainer()) {\r\n  ItemsContainer = document.querySelector('.our-friends__slider-items-container')\r\n} else if (isPetsPageContainer()) {\r\n  ItemsContainer = document.querySelector('.pets__items-container');\r\n}\r\n\r\nfunction isMainPageContainer() {\r\n  if (document.querySelector('.our-friends__slider-items-container')) {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction isPetsPageContainer() {\r\n  if (document.querySelector('.pets__items-container')) {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction readTextFile(file, callback) {\r\n  let rawFile = new XMLHttpRequest();\r\n  rawFile.overrideMimeType(\"application/json\");\r\n  rawFile.open(\"GET\", file, true);\r\n  rawFile.onreadystatechange = function() {\r\n      if (rawFile.readyState === 4 && rawFile.status == \"200\") {\r\n          callback(rawFile.responseText);\r\n      }\r\n  }\r\n  rawFile.send(null);\r\n}\r\n\r\nfunction buildCards(cardsJson) {\r\n  let cardsObj = JSON.parse(cardsJson);\r\n  let itemWrapperClass;\r\n  if (isMainPageContainer()) {\r\n    itemWrapperClass = 'our-friends__slider-item';\r\n  } else if (isPetsPageContainer()) {\r\n    itemWrapperClass = 'pets__item';\r\n  }\r\n\r\n  cardsObj.forEach(cardData => {\r\n    let cardWrapper = document.createElement('div');\r\n    cardWrapper.classList.add(itemWrapperClass);\r\n    cardWrapper.append(createCardItem(cardData));\r\n    cardWrapper.append(createPopupItem(cardData));\r\n\r\n    ItemsContainer.append(cardWrapper);\r\n  });\r\n}\r\n\r\nfunction createCardItem(cardData) {\r\n  const card = document.createElement('div'),\r\n  cardImgWrapper = document.createElement('div'),\r\n  cardImg = document.createElement('img'),\r\n  cardName = document.createElement('p'),\r\n  cardBtn = document.createElement('div');\r\n\r\n  card.classList.add('pet-card');\r\n  cardImgWrapper.classList.add('pet-card__img');\r\n  cardImg.src = cardData.img;\r\n  cardImg.alt = cardData.name;\r\n  cardName.classList.add('pet-card__name');\r\n  cardName.append(cardData.name);\r\n  cardBtn.classList.add('pet-card__btn', 'button-secondary');\r\n  cardBtn.append('Learn more');\r\n\r\n  cardImgWrapper.append(cardImg);\r\n  card.append(cardImgWrapper, cardName, cardBtn);\r\n\r\n  return card;\r\n}\r\n\r\nfunction createPopupItem(cardData) {\r\n  const popup = document.createElement('div'),\r\n  popupScreen = document.createElement('div'),\r\n  popupCloseBtn = document.createElement('div'),\r\n  popupCloseIcon = document.createElement('span'),\r\n  popupImgWrapper = document.createElement('div'),\r\n  popupImg = document.createElement('img'),\r\n  popupDesc = document.createElement('div'),\r\n  popupName = document.createElement('h3'),\r\n  popupType = document.createElement('p'),\r\n  popupInfo = document.createElement('p'),\r\n  popupList = document.createElement('ul'),\r\n  popupListItem = document.createElement('li'),\r\n  popupListItemKey = document.createElement('span'),\r\n  popupListItemValue = document.createElement('span');\r\n\r\n  function createListItem(key, value) {\r\n    const listItem = popupListItem,\r\n    listItemKey = popupListItemKey,\r\n    listItemValue = popupListItemValue;\r\n\r\n    listItemKey.append(key + ': ');\r\n    if (Array.isArray(value)) {\r\n      value.forEach(item => {\r\n        listItemValue.append(item + ', ');\r\n      })\r\n    } else {\r\n      listItemValue.append(value);\r\n    }\r\n\r\n    listItem.append(listItemKey, listItemValue);\r\n\r\n    return listItem;\r\n  }\r\n\r\n  popup.classList.add('pet-popup', 'hidden');\r\n  popupScreen.classList.add('pet-popup__screen');\r\n  popupCloseBtn.classList.add('pet-popup__close-btn');\r\n  popupCloseIcon.classList.add('icon', 'icon-close');\r\n  popupImgWrapper.classList.add('pet-popup__img');\r\n  popupImg.src = cardData.img;\r\n  popupImg.alt = cardData.name;\r\n  popupDesc.classList.add('pet-popup__desc');\r\n  popupName.classList.add('pet-popup__name', 'header-3');\r\n  popupName.append(cardData.name);\r\n  popupType.classList.add('pet-popup__type', 'header-4');\r\n  popupName.append(cardData.type + ' - ' + cardData.breed);\r\n  popupInfo.classList.add('pet-popup__information', 'header-5');\r\n  popupInfo.append(cardData.dascription);\r\n  popupList.classList.add('pet-popup__list');\r\n  popupListItem.classList.add('pet-popup__list-item', 'header-5');\r\n  popupListItemKey.classList.add('pet-popup__record-key', 'header-5_modal-window');\r\n  popupListItemValue.classList.add('pet-popup__record-value');\r\n  \r\n  popupCloseBtn.append(popupCloseIcon);\r\n  popupImgWrapper.append(popupImg);\r\n  popupList.append(createListItem('Age: ', cardData.age));\r\n  popupList.append(createListItem('Inoculations: ', cardData.inoculations));\r\n  popupList.append(createListItem('Diseases: ', cardData.diseases));\r\n  popupList.append(createListItem('Parasites: ', cardData.parasites));\r\n  popupDesc.append(popupName, popupType, popupInfo, popupList);\r\n  popupScreen.append(popupCloseBtn, popupImgWrapper, popupDesc);\r\n  popup.append(popupScreen);\r\n\r\n  return popup;\r\n}\r\n\r\nfunction generateCards() {\r\n  readTextFile(\"../files/pets.json\", buildCards);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCards);\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/generateCards.js?");

/***/ }),

/***/ "./src/scripts/modules/globalFunctions.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/globalFunctions.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollLock\": () => (/* binding */ scrollLock),\n/* harmony export */   \"scrollUnlock\": () => (/* binding */ scrollUnlock)\n/* harmony export */ });\nconst html = document.querySelector('html');\r\n\r\nfunction scrollLock() {\r\n  html.style.overflow = 'hidden';\r\n};\r\n\r\nfunction scrollUnlock() {\r\n  html.style.overflow = '';\r\n};\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/globalFunctions.js?");

/***/ }),

/***/ "./src/scripts/modules/sideMenu.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/sideMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalFunctions.js */ \"./src/scripts/modules/globalFunctions.js\");\n\r\n\r\nconst burger = document.querySelector('.header__burger'),\r\n  menuLayout = document.querySelector('.side-menu'),\r\n  menuScreen = document.querySelector('.side-menu__screen'),\r\n  headerLogo = document.querySelector('.header__wrapper .logo'),\r\n  header = document.querySelector('.header'),\r\n  links = document.querySelectorAll('.side-menu .nav__list-item'),\r\n  hiddenClass = 'hidden',\r\n  fadeInClass = 'fade-in',\r\n  fadeOutClass = 'fade-out',\r\n  slideInClass = 'side-menu__screen_slide-in',\r\n  slideOutClass = 'side-menu__screen_slide-out',\r\n  burgerActiveClass = 'header__burger_active',\r\n  headerStickyClass = 'header_sticky';\r\n\r\nfunction isMenuOpen() {\r\n  return !menuLayout.classList.contains(fadeOutClass);\r\n};\r\n\r\nfunction scrollToTop() {\r\n  window.scrollTo({\r\n    top: 0,\r\n    behavior: \"smooth\"\r\n  });\r\n};\r\n\r\nfunction showMenuLayout() {\r\n  menuLayout.classList.remove(hiddenClass);\r\n\r\n  menuLayout.classList.add(fadeInClass);\r\n  menuLayout.classList.remove(fadeOutClass);\r\n};\r\n\r\nfunction hideMenuLayout() {\r\n  menuLayout.classList.add(fadeOutClass);\r\n  menuLayout.classList.remove(fadeInClass);\r\n\r\n  setTimeout(() => {\r\n    menuLayout.classList.add(hiddenClass);\r\n  }, 100);\r\n};\r\n\r\nfunction activateBurger() {\r\n  burger.classList.add(burgerActiveClass);\r\n};\r\n\r\nfunction disactivateBurger() {\r\n  burger.classList.remove(burgerActiveClass);\r\n};\r\n\r\nfunction slideInMenu() {\r\n  setTimeout(() => {\r\n    menuScreen.classList.add(slideInClass);\r\n    menuScreen.classList.remove(slideOutClass);\r\n  }, 0);\r\n};\r\n\r\nfunction slideOutMenu() {\r\n  menuScreen.classList.add(slideOutClass);\r\n  menuScreen.classList.remove(slideInClass);\r\n};\r\n\r\nfunction hideHeaderLogo() {\r\n  headerLogo.classList.add(fadeOutClass);\r\n  headerLogo.classList.remove(fadeInClass);\r\n};\r\n\r\nfunction showHeaderLogo() {\r\n  headerLogo.classList.add(fadeInClass);\r\n  headerLogo.classList.remove(fadeOutClass);\r\n};\r\n\r\nfunction autoCloseMenu() {\r\n  window.addEventListener('resize', () => {\r\n    if (window.innerWidth >= 768 && isMenuOpen()) {\r\n      closeMenu();\r\n    } \r\n  });\r\n\r\n  links.forEach(link => {\r\n    link.addEventListener('click', (e) => {\r\n      closeMenu();\r\n    });\r\n  });\r\n};\r\n\r\nfunction openMenu() {\r\n  showMenuLayout();\r\n  slideInMenu();\r\n  activateBurger();\r\n  hideHeaderLogo();\r\n  _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__.scrollLock();\r\n  if (!header.classList.contains(headerStickyClass)) {\r\n    scrollToTop();\r\n  };\r\n};\r\n\r\nfunction closeMenu() {\r\n  hideMenuLayout();\r\n  disactivateBurger();\r\n  slideOutMenu();\r\n  showHeaderLogo();\r\n  _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__.scrollUnlock();\r\n};\r\n\r\nfunction toggleMenu() {\r\n  if (isMenuOpen()) {\r\n    closeMenu();\r\n  } else {\r\n    openMenu();\r\n  };\r\n};\r\n\r\nfunction sideMenu() {\r\n  burger.addEventListener('click', (e) => {\r\n    toggleMenu();\r\n  });\r\n\r\n  menuLayout.addEventListener('click', (e) => {\r\n    if (e.target === menuLayout) {\r\n      closeMenu();\r\n    };\r\n  });\r\n\r\n  autoCloseMenu();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideMenu);\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/sideMenu.js?");

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