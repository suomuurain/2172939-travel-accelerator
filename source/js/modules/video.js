const playButton = document.querySelector('[data-video-play]');
const video = document.querySelector('[data-video]');
const poster = document.querySelector('[data-poster]');
const swiperPagination = document.querySelector('.hero__swiper-pagination');

const initVideo = () => {
  playButton.addEventListener('click', () => {
    poster.classList.add('is-hidden');
    playButton.classList.add('is-hidden--else');
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1';
  });
};

const disableVideo = () => {
  poster.classList.remove('is-hidden');
  playButton.classList.remove('is-hidden--else');
  video.src = '';
};

const initHeroSwiper = () => {
  initVideo();
  swiperPagination.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('swiper-pagination-bullet')) {
      disableVideo();
    }
  });
};

export {initHeroSwiper};
