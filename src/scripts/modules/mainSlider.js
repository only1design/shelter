import * as cards from './cards.js';

const btnLeft = document.querySelectorAll('.our-friends__slider-arrow')[0],
  btnRight = document.querySelectorAll('.our-friends__slider-arrow')[1],
  slideClass = 'our-friends__slide',
  slideCurrentClass = 'our-friends__slide_curr',
  slidePreviousClass = 'our-friends__slide_prev',
  slideNextClass = 'our-friends__slide_next',
  swipeLeftClass = 'our-friends__slide_swipe-left',
  swipeRightClass = 'our-friends__slide_swipe-right';

function getSlides() {
  return document.querySelectorAll('.' + slideClass);
}

function clearSlideModificators(slideIndex, swipe) {
  let slides = getSlides();

  switch (swipe) {
    case 'right':
      slides[slideIndex].classList.remove(slideNextClass)
      slides[slideIndex - 1].classList.remove(slideCurrentClass)
      slides[slideIndex - 2].classList.remove(slidePreviousClass)
      break;
  
    case 'left':
      slides[slideIndex + 2].classList.remove(slideNextClass)
      slides[slideIndex + 1].classList.remove(slideCurrentClass)
      slides[slideIndex].classList.remove(slidePreviousClass)
      break;
  }
}

function swipeRight(currentSlideIndex) {
  let slides = getSlides();
  
  clearSlideModificators(currentSlideIndex, 'right');
  
  slides[currentSlideIndex - 1].classList.add(slidePreviousClass);
  slides[currentSlideIndex].classList.add(slideCurrentClass);
  slides[currentSlideIndex + 1].classList.add(slideNextClass);
 
}

function swipeLeft(currentSlideIndex) {
  let slides = getSlides(),
  container = cards.getItemsContainer()

  clearSlideModificators(currentSlideIndex, 'left');

  slides[currentSlideIndex - 1].classList.add(slidePreviousClass);
  slides[currentSlideIndex].classList.add(slideCurrentClass);
  slides[currentSlideIndex + 1].classList.add(slideNextClass);
}

function bindBtns() {
  let currentSlideIndex = makeCurrentSlideIndex();

  function bind(btn, func) {
    btn.addEventListener('click', (e) => {
      func();
    })
  }

  bind(btnLeft, () => {
    swipeLeft(currentSlideIndex(-1));
  });

  bind(btnRight, () => {
    swipeRight(currentSlideIndex(1));
  });
}

function buildSlides(cardsData, slideItemsQuantity) {
  let slide = document.createElement('div');
  slide.classList.add(slideClass);

  for (let i = 0; i < (cardsData.length - (cardsData.length % slideItemsQuantity)); i = i + slideItemsQuantity) {
    let currentSlide = slide.cloneNode();
    cards.buildCard(cardsData[i], currentSlide);
    cards.buildCard(cardsData[i + 1], currentSlide);
    cards.buildCard(cardsData[i + 2], currentSlide);

    cards.getItemsContainer().append(currentSlide);
  }
}

function makeCurrentSlideIndex() {
  let index = Math.floor(getSlides().length / 2)

  let slides = getSlides();

  slides[index - 1].classList.add(slidePreviousClass);
  slides[index].classList.add(slideCurrentClass);
  slides[index + 1].classList.add(slideNextClass);

  return (num = 0) => {
    return index += num;
  }
}

async function mainSlider() {
  let cardsData = await cards.getCardsData("./files/pets.json");

  buildSlides(cardsData, 3);

  bindBtns();
  Promise.resolve();
}

export default mainSlider;