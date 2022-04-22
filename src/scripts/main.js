"use strict";

import sideMenu from './modules/sideMenu.js';
import generateCards from './modules/generateCards.js';

document.addEventListener("DOMContentLoaded", function() { 
  sideMenu();
  generateCards();
});