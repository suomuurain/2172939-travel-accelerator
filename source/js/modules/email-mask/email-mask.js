// регулярное выражение - либо англ, либо рф
const EMAIL_REGEXP = /^[a-zA-Zа-яА-Я_\d][-a-zA-Zа-яА-Я0-9_\.\d]*\@[a-zA-Zа-яА-Я\d][-a-zA-Zа-яА-Я\.\d]*\.[a-zA-Zа-яА-Я]{2,4}$/;

const input = document.querySelector('input[type="email"]');

const isEmailValid = (value) => EMAIL_REGEXP.test(value);

const onInput = () => {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'rgba(2, 102, 193, 0.1)';
  } else {
    input.style.borderColor = '#ff121f';
  }
};

input.addEventListener('input', onInput);
