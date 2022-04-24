export function getItemsContainer() {
  let itemsContainer = false;
  
  if (isMainPageContainer()) {
    itemsContainer = document.querySelector('.our-friends__slider-items-container')
  } else if (isPetsPageContainer()) {
    itemsContainer = document.querySelector('.pets__items-container');
  }
  return itemsContainer;
}

export function isMainPageContainer() {
  if (document.querySelector('.our-friends__slider-items-container')) {
    return true;
  }
  return false;
}

export function isPetsPageContainer() {
  if (document.querySelector('.pets__items-container')) {
    return true;
  }
  return false;
}

export async function getCardsData(file) {
  return JSON.parse(await readTextFile(file));
}

export function buildCards(cardsObj, container) {
  cardsObj.forEach(cardData => {
    buildCard(cardData, container);
  });
}

export function buildCard(cardsObj, container) {
  let itemWrapperClass;
  if (isMainPageContainer()) {
    itemWrapperClass = 'our-friends__slider-item';
  } else if (isPetsPageContainer()) {
    itemWrapperClass = 'pets__item';
  }

  let cardWrapper = document.createElement('div');
  cardWrapper.classList.add(itemWrapperClass);
  cardWrapper.append(createCardItem(cardsObj));
  cardWrapper.append(createPopupItem(cardsObj));

  container.append(cardWrapper);
}

export function createCardItem(cardData) {
  const card = document.createElement('div'),
  cardImgWrapper = document.createElement('div'),
  cardImg = document.createElement('img'),
  cardName = document.createElement('p'),
  cardBtn = document.createElement('div');

  card.classList.add('pet-card');
  cardImgWrapper.classList.add('pet-card__img');
  cardImg.src = cardData.img;
  cardImg.alt = cardData.name;
  cardName.classList.add('pet-card__name');
  cardName.append(cardData.name);
  cardBtn.classList.add('pet-card__btn', 'button-secondary');
  cardBtn.append('Learn more');

  cardImgWrapper.append(cardImg);
  card.append(cardImgWrapper, cardName, cardBtn);

  return card;
}

export function createPopupItem(cardData) {
  const popup = document.createElement('div'),
  popupScreen = document.createElement('div'),
  popupCloseBtn = document.createElement('div'),
  popupCloseIcon = document.createElement('span'),
  popupImgWrapper = document.createElement('div'),
  popupImg = document.createElement('img'),
  popupDesc = document.createElement('div'),
  popupName = document.createElement('h3'),
  popupType = document.createElement('p'),
  popupInfo = document.createElement('p'),
  popupList = document.createElement('ul'),
  popupListItem = document.createElement('li'),
  popupListItemKey = document.createElement('span'),
  popupListItemValue = document.createElement('span');

  function createListItem(key, value) {
    const listItem = popupListItem.cloneNode(),
    listItemKey = popupListItemKey.cloneNode(),
    listItemValue = popupListItemValue.cloneNode();

    listItemKey.append(key + ': ');
    if (Array.isArray(value)) {
      listItemValue.append(value.join(', '));
    } else {
      listItemValue.append(value);
    }

    listItem.append(listItemKey, listItemValue);

    return listItem;
  }

  popup.classList.add('pet-popup', 'hidden', 'fade-out');
  popupScreen.classList.add('pet-popup__screen');
  popupCloseBtn.classList.add('pet-popup__close-btn');
  popupCloseIcon.classList.add('icon', 'icon-close');
  popupImgWrapper.classList.add('pet-popup__img');
  popupImg.src = cardData.img;
  popupImg.alt = cardData.name;
  popupDesc.classList.add('pet-popup__desc');
  popupName.classList.add('pet-popup__name', 'header-3');

  popupName.append(cardData.name);
  popupType.classList.add('pet-popup__type', 'header-4');
  popupType.append(cardData.type + ' - ' + cardData.breed);
  popupInfo.classList.add('pet-popup__information', 'header-5');
  popupInfo.append(cardData.description);
  popupList.classList.add('pet-popup__list');
  popupListItem.classList.add('pet-popup__list-item', 'header-5');
  popupListItemKey.classList.add('pet-popup__record-key', 'header-5_modal-window');
  popupListItemValue.classList.add('pet-popup__record-value');
  
  popupCloseBtn.append(popupCloseIcon);
  popupImgWrapper.append(popupImg);
  popupList.append(createListItem('Age', cardData.age));
  popupList.append(createListItem('Inoculations', cardData.inoculations));
  popupList.append(createListItem('Diseases', cardData.diseases));
  popupList.append(createListItem('Parasites', cardData.parasites));
  popupDesc.append(popupName, popupType, popupInfo, popupList);
  popupScreen.append(popupCloseBtn, popupImgWrapper, popupDesc);
  popup.append(popupScreen);

  return popup;
}

export function readTextFile(file) {
  return new Promise((resolve, reject) => {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        resolve(rawFile.responseText);
      }
    }
    rawFile.send(null);
  })
}

export async function generateCards() {
  let cardData = await getCardsData("./files/pets.json");
  buildCards(cardData, getItemsContainer());
  Promise.resolve();
}