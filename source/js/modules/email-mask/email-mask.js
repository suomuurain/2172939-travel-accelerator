const EMAIL_REGEXP = /[a-zA-Zа-яёА-ЯЁ0-9]{1}([a-zA-Zа-яёА-ЯЁ0-9\-_\.]{1,})?@[a-zA-Zа-яёА-ЯЁ0-9\-]{1}([a-zA-Zа-яёА-ЯЁ0-9.\-]{1,})?[a-zA-Zа-яёА-ЯЁ0-9\-]{1}\.[a-zA-Zа-яёА-ЯЁ]{2,6}/;

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
