import * as cards from './cards.js';
import * as global from './globalFunctions.js';

const btnLeft = document.querySelectorAll('.our-friends__slider-arrow')[0],
  btnRight = document.querySelectorAll('.our-friends__slider-arrow')[1],
  btnInactiveClass = 'our-friends__slider-arrow_inactive',
  slider = document.querySelector('.our-friends__slider'),
  slideClass = 'our-friends__slide',
  slideCurrentClass = 'our-friends__slide_curr',
  slidePreviousClass = 'our-friends__slide_prev',
  slideNextClass = 'our-friends__slide_next';

function getSlides() {
  return document.querySelectorAll('.' + slideClass);
}

function clearSlidesModificators(slideIndex, action) {
  let slides = getSlides();

  switch (action) {
    case 'right':
      slides[slideIndex - 2].classList.remove(slidePreviousClass);
      slides[slideIndex - 1].classList.remove(slideCurrentClass);
      slides[slideIndex].classList.remove(slideNextClass);
      break;
  
    case 'left':
      slides[slideIndex].classList.remove(slidePreviousClass);
      slides[slideIndex + 1].classList.remove(slideCurrentClass);
      slides[slideIndex + 2].classList.remove(slideNextClass);
      break;
  }
}

function swipeRight() {
  const slides = getSlides(),
    container = cards.getItemsContainer(),
    currentSlideIndex = getCurrentSlideIndex();
  
  container.appendChild(slides[0]);
  clearSlidesModificators(currentSlideIndex, 'right');
  
  slides[currentSlideIndex].classList.add(slidePreviousClass);
  slides[currentSlideIndex + 1].classList.add(slideCurrentClass);
  slides[currentSlideIndex + 2].classList.add(slideNextClass);
}

function swipeLeft() {
  const slides = getSlides(),
    container = cards.getItemsContainer(),
    currentSlideIndex = getCurrentSlideIndex();

  container.insertBefore(slides[slides.length - 1], container.firstChild)
  clearSlidesModificators(currentSlideIndex, 'left');

  slides[currentSlideIndex - 2].classList.add(slidePreviousClass);
  slides[currentSlideIndex - 1].classList.add(slideCurrentClass);
  slides[currentSlideIndex].classList.add(slideNextClass);
}

const btnLeftAction = () => {
  swipeLeft();
  removeBtnActions();

  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', () => {
    updateBtnActions();
  });
}

const btnRightAction = () => {
  swipeRight();
  removeBtnActions();

  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', () => {
    updateBtnActions();
  });
}

function removeBtnActions() {
  disactivateBtn(btnLeft, btnLeftAction);
  disactivateBtn(btnRight, btnRightAction);
}

function updateBtnActions() {
  activateBtn(btnLeft, btnLeftAction);
  activateBtn(btnRight, btnRightAction);
}

function disactivateBtn(btn, action) {
  btn.classList.add(btnInactiveClass);
  btn.removeEventListener('click', action);
}

function activateBtn(btn, action) {
  btn.classList.remove(btnInactiveClass);
  btn.addEventListener('click', action);
}

function getItemsQuantity() {
  const width = window.innerWidth;

  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else if (width >= 1280) {
    return 3;
  }
}

function ifSlideExist(slideIndex, func = () => { return true }) {
  const slides = getSlides();
  if (typeof slides[slideIndex] === 'undefined') {
    return false;
  }
  return func();
}

function initCurrentSlide() {
  const currentSlideIndex = Math.floor(getSlides().length / 2),
    slides = getSlides();

  ifSlideExist(currentSlideIndex - 1, () => {
    slides[currentSlideIndex - 1].classList.add(slidePreviousClass);
  });

  ifSlideExist(currentSlideIndex, () => {
    slides[currentSlideIndex].classList.add(slideCurrentClass);
  });

  ifSlideExist(currentSlideIndex + 1, () => {
    slides[currentSlideIndex + 1].classList.add(slideNextClass);
  });
}

function buildSlides(cardsData) {
  const itemsQuantity = getItemsQuantity();

  for (let i = 0; i < (cardsData.length - (cardsData.length % itemsQuantity)); i = i + itemsQuantity) {
    const currentSlide = document.createElement('div');
    currentSlide.classList.add(slideClass);

    for (let j = 0; j < itemsQuantity; j++) {
      cards.buildCard(cardsData[i + j], currentSlide);
    }

    cards.getItemsContainer().append(currentSlide);
  }

  initCurrentSlide();
  updateBtnActions();
}

function autoRebuildSlides(cardsData) {
  let itemsQuantity = getItemsQuantity();

  window.addEventListener('resize', () => {
    if (itemsQuantity != getItemsQuantity()) {
      const container = cards.getItemsContainer();
      itemsQuantity = getItemsQuantity();

      removeBtnActions();

      container.innerHTML = '';
      buildSlides(cardsData);
    }
  })
}

function getCurrentSlideIndex() {
  return Math.floor(getSlides().length / 2);
}

async function mainSlider() {
  if (slider) {
    let cardsData = await cards.getCardsData("./files/pets.json"),
    mixedCardsData = [];

    for (let i = 0; i < 6; i++) {
      mixedCardsData = mixedCardsData.concat(global.shuffle(cardsData));
    }    
  
    buildSlides(mixedCardsData);
    autoRebuildSlides(mixedCardsData);
  }

  Promise.resolve();
}

export default mainSlider;