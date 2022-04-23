import * as global from './globalFunctions.js';

const hiddenClass = 'hidden',
  fadeInClass = 'fade-in',
  fadeOutClass = 'fade-out',
  closeBtnActiveClass = 'pet-popup__close-btn_active';

function openPopup(popup) {
  global.scrollLock();

  popup.classList.remove(hiddenClass);
  setTimeout(() => {
    popup.classList.add(fadeInClass);
    popup.classList.remove(fadeOutClass);
  }, 0);
}

function closePopup(popup) {
  global.scrollUnlock();

  popup.classList.add(fadeOutClass);
  popup.classList.remove(fadeInClass);
  setTimeout(() => {
    popup.classList.add(hiddenClass);
  }, 100);
}

function bindPopup(card, index) {
  const popupLayouts = document.querySelectorAll('.pet-popup'),
  closeBtns = document.querySelectorAll('.pet-popup__close-btn');

  card.addEventListener('click', (e) => {
    openPopup(popupLayouts[index]);
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      closePopup(popupLayouts[index]);
    });
  });

  popupLayouts.forEach(layout => {
    layout.addEventListener('click', (e) => {
      if (e.target == layout) {
        closePopup(popupLayouts[index]);
      }
    });

    layout.addEventListener('mouseover', (e) => {
      if (e.target == layout) {
        closeBtns[index].classList.add(closeBtnActiveClass);
      }
    });

    layout.addEventListener('mouseout', (e) => {
      if (e.target == layout) {
        closeBtns[index].classList.remove(closeBtnActiveClass);
      }
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