import * as cards from './cards.js';

const btnLeft = document.querySelectorAll('.our-friends__slider-arrow')[0],
  btnRight = document.querySelectorAll('.our-friends__slider-arrow')[1],
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

  btnLeft.removeEventListener('click', btnLeftAction);
  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', () => {
    btnLeft.addEventListener('click', btnLeftAction);
  });
}

const btnRightAction = () => {
  swipeRight();

  btnRight.removeEventListener('click', btnRightAction);
  document.querySelector('.' + slideCurrentClass).addEventListener('transitionend', () => {
    btnRight.addEventListener('click', btnRightAction);
  });
}

function bindBtns() {
  btnLeft.addEventListener('click', btnLeftAction);
  btnRight.addEventListener('click', btnRightAction);
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

function initCurrentSlide() {
  const currentSlideIndex = Math.floor(getSlides().length / 2),
    slides = getSlides();

  slides[currentSlideIndex - 1].classList.add(slidePreviousClass);
  slides[currentSlideIndex].classList.add(slideCurrentClass);
  slides[currentSlideIndex + 1].classList.add(slideNextClass);
}

function buildSlides(cardsData) {
  const itemsQuantity = getItemsQuantity(),
    slide = document.createElement('div');

  slide.classList.add(slideClass);

  for (let i = 0; i < (cardsData.length - (cardsData.length % itemsQuantity)); i = i + itemsQuantity) {
    let currentSlide = slide.cloneNode();

    for (let j = 0; j < itemsQuantity; j++) {
      cards.buildCard(cardsData[i + j], currentSlide);
    }

    cards.getItemsContainer().append(currentSlide);
  }

  initCurrentSlide();
  bindBtns();
}

function autoRebuildSlides(cardsData) {
  let itemsQuantity = getItemsQuantity();

  window.addEventListener('resize', () => {
    if (itemsQuantity != getItemsQuantity()) {
      const container = cards.getItemsContainer();
      itemsQuantity = getItemsQuantity();

      btnLeft.removeEventListener('click', btnLeftAction);
      btnRight.removeEventListener('click', btnRightAction);
      container.innerHTML = '';
      buildSlides(cardsData);
    }
  })
}

function getCurrentSlideIndex() {
  return Math.floor(getSlides().length / 2);
}

function shuffle(array) {
  let remainItems = array.length;

  while (remainItems) {

    let selectedItem = Math.floor(Math.random() * remainItems--);

    let currentItem = array[remainItems];
    array[remainItems] = array[selectedItem];
    array[selectedItem] = currentItem;
  }

  return array;
}

async function mainSlider() {
  if (slider) {
    let cardsData = await cards.getCardsData("./files/pets.json");
    cardsData = shuffle(cardsData);
  
    buildSlides(cardsData);
    autoRebuildSlides(cardsData);
  }

  Promise.resolve();
}

export default mainSlider;