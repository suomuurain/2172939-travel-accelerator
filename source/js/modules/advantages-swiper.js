import Swiper from '../vendor/swiper';

// свайпер работает только на десктопе
const desktop = window.matchMedia('(min-width: 1200px)');
let advantagesSwiper = null;

if (desktop.matches) {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    loop: true,
    slidesPerView: 'auto',
    initialSlide: 1,

    navigation: {
      nextEl: '.advantages__swiper-button--next',
      prevEl: '.advantages__swiper-button--prev',
      disabledClass: 'advantages__swiper-button--disabled',
    },

    breakpoints: {
      1200: {
        spaceBetween: 30,
      },
    },
  });
} else {
  advantagesSwiper.destroy();
}

export {advantagesSwiper};
