const html = document.querySelector('html');

export function scrollLock() {
  html.style.overflow = 'hidden';
};

export function scrollUnlock() {
  html.style.overflow = '';
};

export function shuffle(array) {
  let remainItems = array.length;

  while (remainItems) {

    let selectedItem = Math.floor(Math.random() * remainItems--);

    let currentItem = array[remainItems];
    array[remainItems] = array[selectedItem];
    array[selectedItem] = currentItem;
  }

  return array;
}