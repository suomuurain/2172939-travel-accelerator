import Swiper from '../vendor/swiper';

const tablet = window.matchMedia('(max-width: 1199px)');
let advantagesSwiper = null;

const setAdvantagesSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    loop: true,
    slidesPerView: 'auto',
    initialSlide: 0,
    autoHeight: true,

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
};

const breakpointSlider = () => {
  if (tablet.matches && advantagesSwiper) {
    advantagesSwiper.destroy();
  } else if (!advantagesSwiper.initialized) {
    initAdvantagesSwiper();
  }
};

const initAdvantagesSwiper = () => {
  setAdvantagesSwiper();
  breakpointSlider();
  window.addEventListener('resize', breakpointSlider);
};

export {initAdvantagesSwiper};
