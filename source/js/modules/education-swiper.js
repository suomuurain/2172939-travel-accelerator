import Swiper from '../vendor/swiper';

const educationSwiper = new Swiper('.education__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.education__swiper-button--next',
    prevEl: '.education__swiper-button--prev',
    disabledClass: 'education__swiper-button--disabled',
  },
});

export {educationSwiper};
