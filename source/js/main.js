import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './modules/menu';
import {initHeroSwiper} from './modules/hero-swiper';
import {initToursSwiper} from './modules/tours-swiper';
import {initEducationSwiper} from './modules/education-swiper';
import {initReviewsSwiper} from './modules/reviews-swiper';
import {initAdvantagesSwiper} from './modules/advantages-swiper';
import {initGallerySwiper} from './modules/gallery-swiper';
import {initVideoSlide} from './modules/video';
import {initPhoneMask} from './modules/phone-mask/phone-mask';
import './modules/email-mask/email-mask';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  initHeroSwiper();
  initVideoSlide();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initPhoneMask();

    initToursSwiper();
    initEducationSwiper();
    initReviewsSwiper();
    initAdvantagesSwiper();
    initGallerySwiper();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
