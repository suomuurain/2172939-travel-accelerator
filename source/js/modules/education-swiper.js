import Swiper from '../vendor/swiper';

const educationSwiper = new Swiper('.education__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 1,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 1,
    },
  },

  navigation: {
    nextEl: '.education__swiper-button--next',
    prevEl: '.education__swiper-button--prev',
    disabledClass: 'education__swiper-button--disabled',
  },
});

export {educationSwiper};
