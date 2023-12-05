const DEFAULT_DESKTOP_PADDING = 120;
const DEFAULT_TABLET_PADDING = 47;
const DEFAULT_MOBILE_PADDING = 51;

const nav = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.header__menu-btn');
const header = document.querySelector('.header');
const pageMain = document.querySelector('.main');
const pageWrapper = document.querySelector('.wrapper');
const heroSlide = document.querySelector('.hero__swiper-slide');

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

const setPadding = () => {
  if (window.innerWidth >= 1200) {
    let height = header.clientHeight;
    heroSlide.style.paddingTop = `${DEFAULT_DESKTOP_PADDING + height}px`;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    let height = header.clientHeight;
    heroSlide.style.paddingTop = `${DEFAULT_TABLET_PADDING + height}px`;
  } else if (window.innerWidth < 768) {
    let height = header.clientHeight;
    heroSlide.style.paddingTop = `${DEFAULT_MOBILE_PADDING + height}px`;
  }
};

const observeMutations = () => {
  const target = new MutationObserver(setPadding);

  target.observe(header, {
    childList: true,
    subtree: true,
  });
};

observeMutations();

pageWrapper.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('wrapper')) {
    if (pageWrapper.classList.contains('modal-open')) {
      menuBtnOnclick();
    }
  }
});
