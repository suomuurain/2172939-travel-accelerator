import Swiper from '../vendor/swiper';

const swiperHero = new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    320: {
      grabCursor: true,
    },
    768: {
      grabCursor: true,
    },
    1200: {
      grabCursor: false,
    },
  },

  autoHeight: true,
});

export {swiperHero};
