import * as global from './globalFunctions.js';

const popupLayouts = document.querySelectorAll('.pet-popup'),
popupScreens = document.querySelectorAll('.pet-popup__screen'),
closeBtns = document.querySelectorAll('.pet-popup__close-btn'),
cards = document.querySelectorAll('.pet-card'),
html = document.querySelector('html'),
hiddenClass = 'hidden',
fadeInClass = 'fade-in',
fadeOutClass = 'fade-out';

function openPopup(popup) {
  popup.classList.remove(hiddenClass);
}

function closePopup(popup) {
  popup.classList.add(hiddenClass);
}

function bindPopup(card, index) {
  card.addEventListener('click', openPopup(popupLayouts[index]));
}

function petPopup() {
  debugger
  cards.forEach((cardItem, index) => {
    bindPopup(cardItem, index);
  });
}

// card = document.querySelectorAll('.pet-card'),
// card.addEventListener('click', openPopup(popupLayouts[index]));


export default petPopup;