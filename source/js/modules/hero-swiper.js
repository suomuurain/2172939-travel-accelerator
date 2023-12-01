import Swiper from '../vendor/swiper';

const swiperHero = new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // курсор перетаскивая и рукой
  grabCursor: true,

  // автовысота
  autoHeight: true,
});

export {swiperHero};
