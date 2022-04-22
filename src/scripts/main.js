"use strict";

import sideMenu from './modules/sideMenu.js';
import generateCards from './modules/generateCards.js';
import petPopup from './modules/petPopup.js';

document.addEventListener("DOMContentLoaded", function() { 
  sideMenu();

  let promise = new Promise((resolve, reject) => {
    generateCards(resolve);
  });
  promise.then(() => {
    petPopup();
  });
});