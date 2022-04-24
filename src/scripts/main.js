"use strict";

import sideMenu from './modules/sideMenu.js';
import * as cards from './modules/cards.js';
import petPopup from './modules/petPopup.js';
import mainSlider from './modules/mainSlider.js';
import petsPaginator from './modules/petsPaginator.js';

document.addEventListener("DOMContentLoaded", async function() { 
  sideMenu();
  await mainSlider();
  // await cards.generateCards();
  await petsPaginator();
  petPopup();
});