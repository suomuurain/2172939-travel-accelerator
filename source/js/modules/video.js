function findVideos() {
  const videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const link = video.querySelector('.video__link');
  const media = video.querySelector('.video__media');
  const button = video.querySelector('.video__button');
  const poster = video.querySelector('.video__poster');
  const id = parseMediaUrl(media);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    poster.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaUrl(media) {
  const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  const url = media.src;
  const match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateUrl(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateUrl(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${id}${query}`;
}

export {findVideos};
