import Swiper from '../vendor/swiper';

const initReviewsSwiper = () => {
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    loop: true,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 120,
      },
    },

    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
      disabledClass: 'reviews__swiper-button--disabled',
    },
  });

  return reviewsSwiper;
};

export {initReviewsSwiper};
