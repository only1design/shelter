"use strict";

import sideMenu from './modules/sideMenu.js';
import petPopup from './modules/petPopup.js';
import mainSlider from './modules/mainSlider.js';
import petsPaginator from './modules/petsPaginator.js';

document.addEventListener("DOMContentLoaded", async function() { 
  sideMenu();
  await mainSlider();
  await petsPaginator();
  petPopup();
});