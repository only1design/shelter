import * as global from './globalFunctions.js';

const hiddenClass = 'hidden',
  fadeInClass = 'fade-in',
  fadeOutClass = 'fade-out';

function openPopup(popup) {
  popup.classList.remove(hiddenClass);
}

function closePopup(popup) {
  popup.classList.add(hiddenClass);
}

function bindPopup(card, index) {
  const popupLayouts = document.querySelectorAll('.pet-popup'),
  popupScreens = document.querySelectorAll('.pet-popup__screen'),
  closeBtns = document.querySelectorAll('.pet-popup__close-btn');
  card.addEventListener('click', (e) => {
    openPopup(popupLayouts[index]);
  });
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      closePopup(popupLayouts[index]);
    });
  });
}

function petPopup() {
  const cards = document.querySelectorAll('.pet-card');
  cards.forEach((cardItem, index) => {
    bindPopup(cardItem, index);
  });
}

export default petPopup;