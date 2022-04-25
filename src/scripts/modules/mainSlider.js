import * as cards from './cards.js';
import * as globalFunctions from './globalFunctions.js';
import petPopup from './petPopup.js';

const btnLeft = document.querySelectorAll('.our-friends__slider-arrow')[0],
  btnRight = document.querySelectorAll('.our-friends__slider-arrow')[1],
  btnInactiveClass = 'our-friends__slider-arrow_inactive',
  slideClass = 'our-friends__slide',
  slideCurrentClass = 'our-friends__slide_curr',
  slidePreviousClass = 'our-friends__slide_prev',
  slideNextClass = 'our-friends__slide_next';

let globalCardsData = [],
  currentSlidesIndeces = [];

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

  // slides[0].classList.remove(slidePreviousClass);
  // slides[1].classList.remove(slideCurrentClass);
  // slides[2].classList.remove(slideNextClass);
  
}

function swipeRight() {
  const container = cards.getItemsContainer(),
    lastSlideIndeces = currentSlidesIndeces[2],
    newSlideIndeces = newRandomIndeces(lastSlideIndeces, globalCardsData.length - 1),
    newSlideData = newSlideIndeces.map(index => globalCardsData[index]),
    newSlide = createSlide(newSlideData);
  
  currentSlidesIndeces.shift();
  currentSlidesIndeces.push(newSlideIndeces);

  clearSlidesModificators();

  container.removeChild(container.children[0]);
  container.append(newSlide);

  initCurrentSlide();
}

function swipeLeft() {
  const container = cards.getItemsContainer(),
    firstSlideIndeces = currentSlidesIndeces[0],
    newSlideIndeces = newRandomIndeces(firstSlideIndeces, globalCardsData.length - 1),
    newSlideData = newSlideIndeces.map(index => globalCardsData[index]),
    newSlide = createSlide(newSlideData);
  
  currentSlidesIndeces.pop();
  currentSlidesIndeces.unshift(newSlideIndeces);
    
  clearSlidesModificators();
  container.removeChild(container.children[container.children.length - 1]);
  container.insertBefore(newSlide, container.firstChild);

  initCurrentSlide();
}

const btnLeftAction = () => {
  removeBtnActions();
  swipeLeft();
  petPopup();

  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', (e) => {
    if (e.target == document.querySelector('.' + slideCurrentClass)) {
      updateBtnActions();
    }
  });
}

const btnRightAction = () => {
  swipeRight();
  removeBtnActions();
  petPopup();
  
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

function createSlide(cardData) {
  const itemsQuantity = getItemsQuantity(),
  slide = document.createElement('div');

  slide.classList.add(slideClass);

  for (let i = 0; i < itemsQuantity; i++) {
    const card = cards.createCard(cardData[i]);

    slide.append(card);
  }

  return slide;
}

function newRandomIndeces(previousIndeces, maxIndex) {
  const indeces = [],
    itemsQuantity = getItemsQuantity();
  
    for (let i = 0; i < itemsQuantity; i++) {
      let randomIndex = globalFunctions.randomNumber(0, maxIndex - 1);
      
      while ((previousIndeces.includes(randomIndex)) || (indeces.includes(randomIndex))) {
        randomIndex = globalFunctions.randomNumber(0, maxIndex - 1);
      }
      
      indeces.push(randomIndex);
    }
  
  return indeces
}

function createSlides(cardsData) {
  let previousSlideIndeces = [],
    currentSlideIndeces = newRandomIndeces(previousSlideIndeces, cardsData.length - 1),
    slides = [];

  for (let i = 0; i < 3; i ++) {
    const slideData = currentSlideIndeces.map((index) => cardsData[index]),
      slide = createSlide(slideData);

    currentSlidesIndeces.push(currentSlideIndeces);

    slides.push(slide);
    previousSlideIndeces = currentSlideIndeces;
    currentSlideIndeces = newRandomIndeces(previousSlideIndeces, cardsData.length - 1);
  }

  return slides;
}

function buildSlides(cardsData) {
  const container = cards.getItemsContainer(),
    slides = createSlides(cardsData);

  container.append(...slides);

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
      currentSlidesIndeces = [];

      buildSlides(cardsData);
    }
  })
}

function getCurrentSlideIndex() {
  return Math.floor(getSlides().length / 2);
}

async function mainSlider() {
  if (cards.isMainPageContainer()) {
    const cardsData = await cards.getCardsData("./files/pets.json"),
    mixedCardsData = globalFunctions.shuffle(cardsData);
    globalCardsData = mixedCardsData;

    buildSlides(mixedCardsData);
    autoRebuildSlides(mixedCardsData);
  }

  Promise.resolve();
}

export default mainSlider;