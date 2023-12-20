import Swiper from '../vendor/swiper';

const initSwiperAdvantages = () => {

  if (window.innerWidth > 1199) {
    const advantagesSwiper = new Swiper('.advantages__swiper', {
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
  }
};

export {initSwiperAdvantages};
