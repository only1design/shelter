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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sideMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sideMenu.js */ \"./src/scripts/modules/sideMenu.js\");\n/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards.js */ \"./src/scripts/modules/cards.js\");\n/* harmony import */ var _modules_petPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/petPopup.js */ \"./src/scripts/modules/petPopup.js\");\n/* harmony import */ var _modules_mainSlider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainSlider.js */ \"./src/scripts/modules/mainSlider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", async function() { \r\n  (0,_modules_sideMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  await (0,_modules_mainSlider_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  // await cards.generateCards();\r\n  (0,_modules_petPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/cards.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/cards.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildCard\": () => (/* binding */ buildCard),\n/* harmony export */   \"buildCards\": () => (/* binding */ buildCards),\n/* harmony export */   \"createCardItem\": () => (/* binding */ createCardItem),\n/* harmony export */   \"createPopupItem\": () => (/* binding */ createPopupItem),\n/* harmony export */   \"generateCards\": () => (/* binding */ generateCards),\n/* harmony export */   \"getCardsData\": () => (/* binding */ getCardsData),\n/* harmony export */   \"getItemsContainer\": () => (/* binding */ getItemsContainer),\n/* harmony export */   \"isMainPageContainer\": () => (/* binding */ isMainPageContainer),\n/* harmony export */   \"isPetsPageContainer\": () => (/* binding */ isPetsPageContainer),\n/* harmony export */   \"readTextFile\": () => (/* binding */ readTextFile)\n/* harmony export */ });\n/* harmony import */ var _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalFunctions.js */ \"./src/scripts/modules/globalFunctions.js\");\n\r\n\r\nfunction getItemsContainer() {\r\n  let itemsContainer = false;\r\n  \r\n  if (isMainPageContainer()) {\r\n    itemsContainer = document.querySelector('.our-friends__slider-items-container')\r\n  } else if (isPetsPageContainer()) {\r\n    itemsContainer = document.querySelector('.pets__items-container');\r\n  }\r\n  return itemsContainer;\r\n}\r\n\r\nfunction isMainPageContainer() {\r\n  if (document.querySelector('.our-friends__slider-items-container')) {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction isPetsPageContainer() {\r\n  if (document.querySelector('.pets__items-container')) {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nasync function getCardsData(file) {\r\n  return JSON.parse(await readTextFile(file));\r\n}\r\n\r\nfunction buildCards(cardsObj, container) {\r\n  cardsObj.forEach(cardData => {\r\n    buildCard(cardData, container);\r\n  });\r\n}\r\n\r\nfunction buildCard(cardsObj, container) {\r\n  let itemWrapperClass;\r\n  if (isMainPageContainer()) {\r\n    itemWrapperClass = 'our-friends__slider-item';\r\n  } else if (isPetsPageContainer()) {\r\n    itemWrapperClass = 'pets__item';\r\n  }\r\n\r\n  let cardWrapper = document.createElement('div');\r\n  cardWrapper.classList.add(itemWrapperClass);\r\n  cardWrapper.append(createCardItem(cardsObj));\r\n  cardWrapper.append(createPopupItem(cardsObj));\r\n\r\n  container.append(cardWrapper);\r\n}\r\n\r\nfunction createCardItem(cardData) {\r\n  const card = document.createElement('div'),\r\n  cardImgWrapper = document.createElement('div'),\r\n  cardImg = document.createElement('img'),\r\n  cardName = document.createElement('p'),\r\n  cardBtn = document.createElement('div');\r\n\r\n  card.classList.add('pet-card');\r\n  cardImgWrapper.classList.add('pet-card__img');\r\n  cardImg.src = cardData.img;\r\n  cardImg.alt = cardData.name;\r\n  cardName.classList.add('pet-card__name');\r\n  cardName.append(cardData.name);\r\n  cardBtn.classList.add('pet-card__btn', 'button-secondary');\r\n  cardBtn.append('Learn more');\r\n\r\n  cardImgWrapper.append(cardImg);\r\n  card.append(cardImgWrapper, cardName, cardBtn);\r\n\r\n  return card;\r\n}\r\n\r\nfunction createPopupItem(cardData) {\r\n  const popup = document.createElement('div'),\r\n  popupScreen = document.createElement('div'),\r\n  popupCloseBtn = document.createElement('div'),\r\n  popupCloseIcon = document.createElement('span'),\r\n  popupImgWrapper = document.createElement('div'),\r\n  popupImg = document.createElement('img'),\r\n  popupDesc = document.createElement('div'),\r\n  popupName = document.createElement('h3'),\r\n  popupType = document.createElement('p'),\r\n  popupInfo = document.createElement('p'),\r\n  popupList = document.createElement('ul'),\r\n  popupListItem = document.createElement('li'),\r\n  popupListItemKey = document.createElement('span'),\r\n  popupListItemValue = document.createElement('span');\r\n\r\n  function createListItem(key, value) {\r\n    const listItem = popupListItem.cloneNode(),\r\n    listItemKey = popupListItemKey.cloneNode(),\r\n    listItemValue = popupListItemValue.cloneNode();\r\n\r\n    listItemKey.append(key + ': ');\r\n    if (Array.isArray(value)) {\r\n      listItemValue.append(value.join(', '));\r\n    } else {\r\n      listItemValue.append(value);\r\n    }\r\n\r\n    listItem.append(listItemKey, listItemValue);\r\n\r\n    return listItem;\r\n  }\r\n\r\n  popup.classList.add('pet-popup', 'hidden', 'fade-out');\r\n  popupScreen.classList.add('pet-popup__screen');\r\n  popupCloseBtn.classList.add('pet-popup__close-btn');\r\n  popupCloseIcon.classList.add('icon', 'icon-close');\r\n  popupImgWrapper.classList.add('pet-popup__img');\r\n  popupImg.src = cardData.img;\r\n  popupImg.alt = cardData.name;\r\n  popupDesc.classList.add('pet-popup__desc');\r\n  popupName.classList.add('pet-popup__name', 'header-3');\r\n\r\n  popupName.append(cardData.name);\r\n  popupType.classList.add('pet-popup__type', 'header-4');\r\n  popupType.append(cardData.type + ' - ' + cardData.breed);\r\n  popupInfo.classList.add('pet-popup__information', 'header-5');\r\n  popupInfo.append(cardData.description);\r\n  popupList.classList.add('pet-popup__list');\r\n  popupListItem.classList.add('pet-popup__list-item', 'header-5');\r\n  popupListItemKey.classList.add('pet-popup__record-key', 'header-5_modal-window');\r\n  popupListItemValue.classList.add('pet-popup__record-value');\r\n  \r\n  popupCloseBtn.append(popupCloseIcon);\r\n  popupImgWrapper.append(popupImg);\r\n  popupList.append(createListItem('Age', cardData.age));\r\n  popupList.append(createListItem('Inoculations', cardData.inoculations));\r\n  popupList.append(createListItem('Diseases', cardData.diseases));\r\n  popupList.append(createListItem('Parasites', cardData.parasites));\r\n  popupDesc.append(popupName, popupType, popupInfo, popupList);\r\n  popupScreen.append(popupCloseBtn, popupImgWrapper, popupDesc);\r\n  popup.append(popupScreen);\r\n\r\n  return popup;\r\n}\r\n\r\nfunction readTextFile(file) {\r\n  return new Promise((resolve, reject) => {\r\n    let rawFile = new XMLHttpRequest();\r\n    rawFile.overrideMimeType(\"application/json\");\r\n    rawFile.open(\"GET\", file, true);\r\n    rawFile.onreadystatechange = function() {\r\n      if (rawFile.readyState === 4 && rawFile.status == \"200\") {\r\n        resolve(rawFile.responseText);\r\n      }\r\n    }\r\n    rawFile.send(null);\r\n  })\r\n}\r\n\r\nasync function generateCards() {\r\n  let cardData = await getCardsData(\"./files/pets.json\");\r\n  buildCards(cardData, getItemsContainer());\r\n  Promise.resolve();\r\n}\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/cards.js?");

/***/ }),

/***/ "./src/scripts/modules/globalFunctions.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/globalFunctions.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollLock\": () => (/* binding */ scrollLock),\n/* harmony export */   \"scrollUnlock\": () => (/* binding */ scrollUnlock)\n/* harmony export */ });\nconst html = document.querySelector('html');\r\n\r\nfunction scrollLock() {\r\n  html.style.overflow = 'hidden';\r\n};\r\n\r\nfunction scrollUnlock() {\r\n  html.style.overflow = '';\r\n};\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/globalFunctions.js?");

/***/ }),

/***/ "./src/scripts/modules/mainSlider.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/mainSlider.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/modules/cards.js\");\n\r\n\r\nconst btnLeft = document.querySelectorAll('.our-friends__slider-arrow')[0],\r\n  btnRight = document.querySelectorAll('.our-friends__slider-arrow')[1],\r\n  slideClass = 'our-friends__slide',\r\n  slideCurrentClass = 'our-friends__slide_curr',\r\n  slidePreviousClass = 'our-friends__slide_prev',\r\n  slideNextClass = 'our-friends__slide_next',\r\n  swipeLeftClass = 'our-friends__slide_swipe-left',\r\n  swipeRightClass = 'our-friends__slide_swipe-right';\r\n\r\nfunction getSlides() {\r\n  return document.querySelectorAll('.' + slideClass);\r\n}\r\n\r\nfunction clearSlideModificators(slideIndex, swipe) {\r\n  let slides = getSlides();\r\n\r\n  switch (swipe) {\r\n    case 'right':\r\n      slides[slideIndex].classList.remove(slideNextClass)\r\n      slides[slideIndex - 1].classList.remove(slideCurrentClass)\r\n      slides[slideIndex - 2].classList.remove(slidePreviousClass)\r\n      break;\r\n  \r\n    case 'left':\r\n      slides[slideIndex + 2].classList.remove(slideNextClass)\r\n      slides[slideIndex + 1].classList.remove(slideCurrentClass)\r\n      slides[slideIndex].classList.remove(slidePreviousClass)\r\n      break;\r\n  }\r\n}\r\n\r\nfunction swipeRight(currentSlideIndex) {\r\n  let slides = getSlides();\r\n  \r\n  clearSlideModificators(currentSlideIndex, 'right');\r\n  \r\n  slides[currentSlideIndex - 1].classList.add(slidePreviousClass);\r\n  slides[currentSlideIndex].classList.add(slideCurrentClass);\r\n  slides[currentSlideIndex + 1].classList.add(slideNextClass);\r\n \r\n}\r\n\r\nfunction swipeLeft(currentSlideIndex) {\r\n  let slides = getSlides(),\r\n  container = _cards_js__WEBPACK_IMPORTED_MODULE_0__.getItemsContainer()\r\n\r\n  clearSlideModificators(currentSlideIndex, 'left');\r\n\r\n  slides[currentSlideIndex - 1].classList.add(slidePreviousClass);\r\n  slides[currentSlideIndex].classList.add(slideCurrentClass);\r\n  slides[currentSlideIndex + 1].classList.add(slideNextClass);\r\n}\r\n\r\nfunction bindBtns() {\r\n  let currentSlideIndex = makeCurrentSlideIndex();\r\n\r\n  function bind(btn, func) {\r\n    btn.addEventListener('click', (e) => {\r\n      func();\r\n    })\r\n  }\r\n\r\n  bind(btnLeft, () => {\r\n    swipeLeft(currentSlideIndex(-1));\r\n  });\r\n\r\n  bind(btnRight, () => {\r\n    swipeRight(currentSlideIndex(1));\r\n  });\r\n}\r\n\r\nfunction buildSlides(cardsData, slideItemsQuantity) {\r\n  let slide = document.createElement('div');\r\n  slide.classList.add(slideClass);\r\n\r\n  for (let i = 0; i < (cardsData.length - (cardsData.length % slideItemsQuantity)); i = i + slideItemsQuantity) {\r\n    let currentSlide = slide.cloneNode();\r\n    _cards_js__WEBPACK_IMPORTED_MODULE_0__.buildCard(cardsData[i], currentSlide);\r\n    _cards_js__WEBPACK_IMPORTED_MODULE_0__.buildCard(cardsData[i + 1], currentSlide);\r\n    _cards_js__WEBPACK_IMPORTED_MODULE_0__.buildCard(cardsData[i + 2], currentSlide);\r\n\r\n    _cards_js__WEBPACK_IMPORTED_MODULE_0__.getItemsContainer().append(currentSlide);\r\n  }\r\n}\r\n\r\nfunction makeCurrentSlideIndex() {\r\n  let index = Math.floor(getSlides().length / 2)\r\n\r\n  let slides = getSlides();\r\n\r\n  slides[index - 1].classList.add(slidePreviousClass);\r\n  slides[index].classList.add(slideCurrentClass);\r\n  slides[index + 1].classList.add(slideNextClass);\r\n\r\n  return (num = 0) => {\r\n    return index += num;\r\n  }\r\n}\r\n\r\nasync function mainSlider() {\r\n  let cardsData = await _cards_js__WEBPACK_IMPORTED_MODULE_0__.getCardsData(\"./files/pets.json\");\r\n\r\n  buildSlides(cardsData, 3);\r\n\r\n  bindBtns();\r\n  Promise.resolve();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/mainSlider.js?");

/***/ }),

/***/ "./src/scripts/modules/petPopup.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/petPopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalFunctions.js */ \"./src/scripts/modules/globalFunctions.js\");\n\r\n\r\nconst hiddenClass = 'hidden',\r\n  fadeInClass = 'fade-in',\r\n  fadeOutClass = 'fade-out',\r\n  closeBtnActiveClass = 'pet-popup__close-btn_active';\r\n\r\nfunction openPopup(popup) {\r\n  _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__.scrollLock();\r\n\r\n  popup.classList.remove(hiddenClass);\r\n  setTimeout(() => {\r\n    popup.classList.add(fadeInClass);\r\n    popup.classList.remove(fadeOutClass);\r\n  }, 0);\r\n}\r\n\r\nfunction closePopup(popup) {\r\n  _globalFunctions_js__WEBPACK_IMPORTED_MODULE_0__.scrollUnlock();\r\n\r\n  popup.classList.add(fadeOutClass);\r\n  popup.classList.remove(fadeInClass);\r\n  setTimeout(() => {\r\n    popup.classList.add(hiddenClass);\r\n  }, 100);\r\n}\r\n\r\nfunction bindPopup(card, index) {\r\n  const popupLayouts = document.querySelectorAll('.pet-popup'),\r\n  closeBtns = document.querySelectorAll('.pet-popup__close-btn');\r\n\r\n  card.addEventListener('click', (e) => {\r\n    openPopup(popupLayouts[index]);\r\n  });\r\n\r\n  closeBtns.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n      closePopup(popupLayouts[index]);\r\n    });\r\n  });\r\n\r\n  popupLayouts.forEach(layout => {\r\n    layout.addEventListener('click', (e) => {\r\n      if (e.target == layout) {\r\n        closePopup(popupLayouts[index]);\r\n      }\r\n    });\r\n\r\n    layout.addEventListener('mouseover', (e) => {\r\n      if (e.target == layout) {\r\n        closeBtns[index].classList.add(closeBtnActiveClass);\r\n      }\r\n    });\r\n\r\n    layout.addEventListener('mouseout', (e) => {\r\n      if (e.target == layout) {\r\n        closeBtns[index].classList.remove(closeBtnActiveClass);\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction petPopup() {\r\n  const cards = document.querySelectorAll('.pet-card');\r\n  cards.forEach((cardItem, index) => {\r\n    bindPopup(cardItem, index);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (petPopup);\n\n//# sourceURL=webpack://rs-school-repo/./src/scripts/modules/petPopup.js?");

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