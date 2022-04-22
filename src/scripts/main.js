"use strict";

import sideMenu from './modules/sideMenu.js';
import generateCards from './modules/generateCards.js';
import petPopup from './modules/petPopup.js';

document.addEventListener("DOMContentLoaded", async function() { 
  sideMenu();
  await generateCards()
  petPopup();
});