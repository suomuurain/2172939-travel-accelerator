import Swiper from '../vendor/swiper';

const initHeroSwiper = () => {
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
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },

    autoHeight: true,
  });

  return swiperHero;
};

export {initHeroSwiper};
