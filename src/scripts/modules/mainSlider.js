import * as cards from './cards.js';
import * as globalFunctions from './globalFunctions.js';
import petPopup from './petPopup.js';

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

function clearSlidesModificators() {
  let slides = getSlides();

    slides.forEach(slide => {
      slide.classList.remove(slidePreviousClass);
      slide.classList.remove(slideCurrentClass);
      slide.classList.remove(slideNextClass);
    })
}

function swipeRight() {
  const container = cards.getItemsContainer(),
    slides = getSlides();

  clearSlidesModificators();

  container.appendChild(slides[0]);

  initCurrentSlide();
}

function swipeLeft() {
  const container = cards.getItemsContainer(),
    slides = getSlides();

  clearSlidesModificators();

  container.insertBefore(slides[slides.length - 1], slides[0])

  initCurrentSlide();
}

const btnLeftAction = () => {
  swipeLeft();
  removeBtnActions();
  
  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', (e) => {
    if (e.target == document.querySelector('.' + slideCurrentClass)) {
      updateBtnActions();
    }
  });
}

const btnRightAction = () => {
  swipeRight();
  removeBtnActions();

  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', (e) => {
    if (e.target == document.querySelector('.' + slideCurrentClass)) {
      updateBtnActions();
    }
  });
}

function removeBtnActions() {
  disactivateBtn(btnLeft, btnLeftAction);
  disactivateBtn(btnRight, btnRightAction);
}

function updateBtnActions() {
  activateBtn(btnLeft, btnLeftAction);
  activateBtn(btnRight, btnRightAction);

  if (getSlides().length < 2) {
    removeBtnActions();
  }
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
  const currentSlideIndex = getCurrentSlideIndex(),
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
  const itemsQuantity = getItemsQuantity(),
    container = cards.getItemsContainer();

  for (let i = 0; i < (cardsData.length - (cardsData.length % itemsQuantity)); i = i + itemsQuantity) {
    const currentSlide = document.createElement('div');
    currentSlide.classList.add(slideClass);

    for (let j = 0; j < itemsQuantity; j++) {
      cards.buildCard(cardsData[i + j], currentSlide);
    }

    container.append(currentSlide);
  }

  const slides = getSlides();

  if (slides.length == 2) {
    container.insertBefore(container.lastChild.cloneNode(true), container.firstChild);
    container.insertBefore(slides[0].cloneNode(true), container.firstChild);
  }

  initCurrentSlide();
  updateBtnActions();
  petPopup();
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
    mixedCardsData = globalFunctions.shuffle(cardsData); 

    buildSlides(mixedCardsData);
    autoRebuildSlides(mixedCardsData);
  }

  Promise.resolve();
}

export default mainSlider;