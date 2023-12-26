const nav = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.header__menu-btn');
const header = document.querySelector('.header');
const pageMain = document.querySelector('.main');
const pageWrapper = document.querySelector('.wrapper');

nav.classList.remove('navigation__list--nojs');
header.classList.remove('header--nojs');

function menuBtnOnclick() {
  if (nav.classList.contains('navigation__list--closed')) {
    header.classList.add('header__menu-opened');
    pageMain.classList.add('main__menu-opened');
    pageWrapper.classList.add('modal-open');
    nav.classList.remove('navigation__list--closed');
    nav.classList.add('navigation__list--opened');
  } else {
    header.classList.remove('header__menu-opened');
    pageMain.classList.remove('main__menu-opened');
    pageWrapper.classList.remove('modal-open');
    nav.classList.add('navigation__list--closed');
    nav.classList.remove('navigation__list--opened');
  }
}

navToggle.addEventListener('click', menuBtnOnclick);
nav.addEventListener('click', (evt) => {
  if (window.innerWidth < 1200) {
    if (evt.target.classList.contains('navigation__link')) {
      menuBtnOnclick();
    }
  }
});

pageWrapper.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('wrapper')) {
    if (pageWrapper.classList.contains('modal-open')) {
      menuBtnOnclick();
    }
  }
});
