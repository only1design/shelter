import * as cards from './cards.js';
import * as globalFunctions from './globalFunctions.js';
import petPopup from './petPopup.js';

const btnPrevious = document.querySelectorAll('.pets__paginator-btn')[1],
  btnNext =  document.querySelectorAll('.pets__paginator-btn')[3],
  btnCurrent =  document.querySelectorAll('.pets__paginator-btn')[2],
  btnFirst =  document.querySelectorAll('.pets__paginator-btn')[0],
  btnLast =  document.querySelectorAll('.pets__paginator-btn')[4],
  paginator = document.querySelector('.pets__paginator'),
  pageClass = 'pets__page',
  pageCurrentClass = 'pets__page_curr',
  pagePreviousClass = 'pets__page_prev',
  pageNextClass = 'pets__page_next',
  pageFirstClass = 'pets__page_first',
  pageLastClass = 'pets__page_last',
  pageSwipedFirstClass = 'pets__page_swiped-first',
  pageSwipedLastClass = 'pets__page_swiped-last',
  btnInactiveClass = 'pets__paginator-btn_inactive',
  btnActiveClass = 'pets__paginator-btn_active';

function getPages() {
  return document.querySelectorAll('.' + pageClass);
}

function clearPagesModificators() {
  let pages = getPages(),
    currentPageIndex = getCurrentPageIndex();
  
  document.querySelector('.' + pageCurrentClass).addEventListener('transitionend', () => {
    pages[currentPageIndex].classList.remove(pageSwipedFirstClass);
    pages[currentPageIndex].classList.remove(pageSwipedLastClass);
  });

  ifPageExist(currentPageIndex - 1, () => {
    pages[currentPageIndex - 1].classList.remove(pagePreviousClass);
  })
  ifPageExist(currentPageIndex, () => {
    pages[currentPageIndex].classList.remove(pageCurrentClass);
  })
  ifPageExist(currentPageIndex + 1, () => {
    pages[currentPageIndex + 1].classList.remove(pageNextClass);
  })
}

function disactivateBtn(btn, action) {
  btn.classList.remove(btnActiveClass);
  btn.classList.add(btnInactiveClass);
  btn.removeEventListener('click', action);
}

function activateBtn(btn, action) {
  btn.classList.remove(btnInactiveClass);
  btn.classList.add(btnActiveClass);
  btn.addEventListener('click', action);
}

function updateCurrentBtnValue() {
  const currentPageIndex = getCurrentPageIndex();

  btnCurrent.innerHTML = currentPageIndex + 1;
}

function updateBtnActions() {
  const currentPageIndex = getCurrentPageIndex(),
    lastPageIndex = getLastPageIndex(),
    firstPageIndex = 0;

  if (currentPageIndex !== firstPageIndex && currentPageIndex !== lastPageIndex) {
    activateBtn(btnPrevious, btnPreviousAction);
    activateBtn(btnNext, btnNextAction);
    activateBtn(btnLast, btnLastAction);
    activateBtn(btnFirst, btnFirstAction);
  } else if (currentPageIndex !== firstPageIndex) {
    activateBtn(btnPrevious, btnPreviousAction);
    activateBtn(btnFirst, btnFirstAction);
  } else if (currentPageIndex !== lastPageIndex) {
    activateBtn(btnNext, btnNextAction);
    activateBtn(btnLast, btnLastAction);
  }

  if (currentPageIndex === lastPageIndex) {
    disactivateBtn(btnNext, btnNextAction);
    disactivateBtn(btnLast, btnLastAction);
  }

  if (currentPageIndex === firstPageIndex) {
    disactivateBtn(btnPrevious, btnNextAction);
    disactivateBtn(btnFirst, btnLastAction);
  }
}

function removeBtnActions() {
  disactivateBtn(btnPrevious, btnPreviousAction);
  disactivateBtn(btnNext, btnNextAction);
  disactivateBtn(btnLast, btnLastAction);
  disactivateBtn(btnFirst, btnFirstAction);
}

function nextPage() {
  const pages = getPages(),
    currentPageIndex = getCurrentPageIndex();

  clearPagesModificators();
  
  ifPageExist(currentPageIndex, () => {
    pages[currentPageIndex].classList.add(pagePreviousClass);
  })
  ifPageExist(currentPageIndex + 1, () => {
    pages[currentPageIndex + 1].classList.add(pageCurrentClass);
  })
  ifPageExist(currentPageIndex + 2, () => {
    pages[currentPageIndex + 2].classList.add(pageNextClass);
  })

}

function previousPage() {
  const pages = getPages(),
    currentPageIndex = getCurrentPageIndex();
  
  clearPagesModificators();

  ifPageExist(currentPageIndex - 2, () => {
    pages[currentPageIndex - 2].classList.add(pagePreviousClass);
  })
  ifPageExist(currentPageIndex - 1, () => {
    pages[currentPageIndex - 1].classList.add(pageCurrentClass);
  })
  ifPageExist(currentPageIndex, () => {
    pages[currentPageIndex].classList.add(pageNextClass);
  })
}

function lastPage() {
  const pages = getPages(),
    lastPageIndex = getLastPageIndex(),
    currentPageIndex = getCurrentPageIndex();

  pages[currentPageIndex].classList.add(pageSwipedLastClass);
  
  clearPagesModificators();


  ifPageExist(lastPageIndex - 1, () => {
    pages[lastPageIndex - 1].classList.add(pagePreviousClass);
  });

  ifPageExist(lastPageIndex, () => {
    pages[lastPageIndex].classList.add(pageCurrentClass);
  });
}

function firstPage() {
  const pages = getPages(),
    firstPageIndex = 0,
    currentPageIndex = getCurrentPageIndex();
  
  pages[currentPageIndex].classList.add(pageSwipedFirstClass);

  clearPagesModificators();

  ifPageExist(firstPageIndex, () => {
    pages[firstPageIndex].classList.add(pageCurrentClass);
  });

  ifPageExist(firstPageIndex + 1, () => {
    pages[firstPageIndex + 1].classList.add(pageNextClass);
  });
}

function btnPreviousAction () {
  previousPage();
  updateCurrentBtnValue();
  removeBtnActions();

  btnPrevious.removeEventListener('click', btnPreviousAction);
  document.querySelector('.' + pageCurrentClass).addEventListener('transitionend', () => {
    updateBtnActions();
  });
}

function btnNextAction() {
  nextPage();
  updateCurrentBtnValue();
  removeBtnActions();
  
  btnNext.removeEventListener('click', btnNextAction);
  document.querySelector('.' + pageCurrentClass).addEventListener('transitionend', () => {
    updateBtnActions();
  });
}

function btnLastAction() {
  lastPage();
  updateCurrentBtnValue();
  removeBtnActions();

  document.querySelector('.' + pageCurrentClass).addEventListener('transitionend', () => {
    updateBtnActions();
  });
}

function btnFirstAction() {
  firstPage();
  updateCurrentBtnValue();
  removeBtnActions();

  document.querySelector('.' + pageCurrentClass).addEventListener('transitionend', () => {
    updateBtnActions();
  });
}

function getItemsQuantity() {
  const width = window.innerWidth;

  if (width < 768) {
    return 3;
  } else if (width < 1280) {
    return 6;
  } else if (width >= 1280) {
    return 8;
  }
}

function ifPageExist(pageIndex, func = () => { return true }) {
  const pages = getPages();
  if (typeof pages[pageIndex] === 'undefined') {
    return false;
  }
  return func();
}

function initCurrentPage(pageIndex = 0) {
  const currentPageIndex = pageIndex,
    firstPageIndex = 0,
    lastPageIndex = getLastPageIndex(),
    pages = getPages();
  ifPageExist(currentPageIndex - 1, () => {
    pages[currentPageIndex - 1].classList.add(pagePreviousClass);
  });
  ifPageExist(currentPageIndex, () => {
    pages[currentPageIndex].classList.add(pageCurrentClass);
  });
  ifPageExist(currentPageIndex + 1, () => {
    pages[currentPageIndex + 1].classList.add(pageNextClass);
  });
  
  ifPageExist(firstPageIndex, () => {
    pages[firstPageIndex].classList.add(pageFirstClass);
  });
  ifPageExist(lastPageIndex, () => {
    pages[lastPageIndex].classList.add(pageLastClass);
  });
}

function buildPages(cardsData) {
  const itemsQuantity = getItemsQuantity(),
    page = document.createElement('div');

  page.classList.add(pageClass);

  for (let i = 0; i < (cardsData.length - (cardsData.length % itemsQuantity)); i = i + itemsQuantity) {
    let currentpage = page.cloneNode();

    for (let j = 0; j < itemsQuantity; j++) {
      cards.buildCard(cardsData[i + j], currentpage);
    }

    cards.getItemsContainer().append(currentpage);
  }

  initCurrentPage();
  updateBtnActions();
  updateCurrentBtnValue();
  petPopup();
}

function autoRebuildPages(cardsData) {
  let itemsQuantity = getItemsQuantity();

  window.addEventListener('resize', () => {
    if (itemsQuantity != getItemsQuantity()) {
      const container = cards.getItemsContainer();
      itemsQuantity = getItemsQuantity();

      container.innerHTML = '';
      buildPages(cardsData);
    }
  })
}

function getCurrentPageIndex() {
  let pages = getPages();

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains(pageCurrentClass)) {
      return i;
    }
  }
}

function getLastPageIndex() {
  let pages = getPages();

  return pages.length - 1;
}

async function petsPaginator() {
  if (paginator) {
    let cardsData = await cards.getCardsData("./files/pets.json"),
      mixedCardsData = [];

    for (let i = 0; i < 6; i++) {
      mixedCardsData = mixedCardsData.concat(globalFunctions.shuffle(cardsData));
    }

    buildPages(mixedCardsData);
    autoRebuildPages(mixedCardsData);
  }

  Promise.resolve();
}

export default petsPaginator;