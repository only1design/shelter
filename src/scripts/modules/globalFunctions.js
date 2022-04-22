const html = document.querySelector('html');

export function scrollLock() {
  html.style.overflow = 'hidden';
};

export function scrollUnlock() {
  html.style.overflow = '';
};