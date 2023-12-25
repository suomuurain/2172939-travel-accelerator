import Swiper from '../vendor/swiper';

const initToursSwiper = () => {
  const toursSwiper = new Swiper('.tours__swiper', {
    initialSlide: 1,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.tours__swiper-button--next',
      prevEl: '.tours__swiper-button--prev',
      disabledClass: 'tours__swiper-button--disabled',
    },
  });

  return toursSwiper;
};

export {initToursSwiper};
