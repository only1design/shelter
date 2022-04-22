"use strict";

import sideMenu from './modules/sideMenu.js';
import generateCards from './modules/generateCards.js';
import petPopup from './modules/petPopup.js';

document.addEventListener("DOMContentLoaded", function() { 
  sideMenu();
  const promise = new Promise((resolve, reject) => {
    // асинхронный код
    generateCards(resolve);
  });
  promise.then(petPopup);
});