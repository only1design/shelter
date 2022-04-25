import * as global from './globalFunctions.js';

const burger = document.querySelector('.header__burger'),
  menuLayout = document.querySelector('.side-menu'),
  menuScreen = document.querySelector('.side-menu__screen'),
  headerLogo = document.querySelector('.header__wrapper .logo'),
  sideMenuLogo = document.querySelector('.side-menu .logo'),
  header = document.querySelector('.header'),
  links = document.querySelectorAll('.side-menu .nav__list-item'),
  hiddenClass = 'hidden',
  fadeInClass = 'fade-in',
  fadeOutClass = 'fade-out',
  slideInClass = 'side-menu__screen_slide-in',
  slideOutClass = 'side-menu__screen_slide-out',
  burgerActiveClass = 'header__burger_active',
  headerStickyClass = 'header_sticky';

function isMenuOpen() {
  return !menuLayout.classList.contains(fadeOutClass);
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function showMenuLayout() {
  menuLayout.classList.remove(hiddenClass);

  menuLayout.classList.add(fadeInClass);
  menuLayout.classList.remove(fadeOutClass);
};

function hideMenuLayout() {
  menuLayout.classList.add(fadeOutClass);
  menuLayout.classList.remove(fadeInClass);
  
  let addHidenClass = () => {
    menuLayout.classList.add(hiddenClass);
    menuLayout.removeEventListener('transitionend', addHidenClass);
  }
  menuLayout.addEventListener('transitionend', addHidenClass);
};

function activateBurger() {
  burger.classList.add(burgerActiveClass);
};

function disactivateBurger() {
  burger.classList.remove(burgerActiveClass);
};

function slideInMenu() {
  setTimeout(() => {
    menuScreen.classList.add(slideInClass);
    menuScreen.classList.remove(slideOutClass);
  }, 0);
};

function slideOutMenu() {
  menuScreen.classList.add(slideOutClass);
  menuScreen.classList.remove(slideInClass);
};

function hideHeaderLogo() {
  headerLogo.classList.add(fadeOutClass);
  headerLogo.classList.remove(fadeInClass);
};

function showHeaderLogo() {
  headerLogo.classList.add(fadeInClass);
  headerLogo.classList.remove(fadeOutClass);
};

function autoCloseMenu() {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen()) {
      closeMenu();
    } 
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      closeMenu();
    });
  });

  sideMenuLogo.addEventListener('click', (e) => {
    closeMenu();
  });

};

function openMenu() {
  showMenuLayout();
  slideInMenu();
  activateBurger();
  hideHeaderLogo();
  global.scrollLock();
  if (!header.classList.contains(headerStickyClass)) {
    scrollToTop();
  };
};

function closeMenu() {
  hideMenuLayout();
  disactivateBurger();
  slideOutMenu();
  showHeaderLogo();
  global.scrollUnlock();
};

function toggleMenu() {
  if (isMenuOpen()) {
    closeMenu();
  } else {
    openMenu();
  };
  
  burger.removeEventListener('click', toggleMenu);
  menuLayout.addEventListener('transitionend', () => {
    burger.addEventListener('click', toggleMenu);
  });
  
};

function bindSideMenu() {
  burger.addEventListener('click', toggleMenu);
  menuLayout.addEventListener('click', (e) => {
    if (e.target === menuLayout) {
      closeMenu();
    };
  });
  autoCloseMenu();
}

function sideMenu() {
  bindSideMenu();
};

export default sideMenu;