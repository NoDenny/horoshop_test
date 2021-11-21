const form = document.forms.start_migration;

function inputValidation(input) {
  const urlRe = /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;
  const emailRe = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const error = input.nextElementSibling;
  if (input.value.length < 3) {
    input.classList.add('form__input_invalid');
    error.classList.remove('hidden');
    error.textContent = 'Введите не менее 3 символов';
  } else if (input.value.length > 255) {
    input.classList.add('form__input_invalid');
    error.classList.remove('hidden');
    error.textContent = 'Превышено допустимое количество символов';
  } else if (input.name === 'url') {
      if (!urlRe.test(input.value)) {
      input.classList.add('form__input_invalid');
      error.classList.remove('hidden');
      error.textContent = 'Введите корректный адрес сайта';
      } else {
          input.classList.remove('form__input_invalid');
          error.classList.add('hidden');
          error.textContent = '';
      }
  } else if (input.name === 'email') {
    if (!emailRe.test(input.value)) {
    input.classList.add('form__input_invalid');
    error.classList.remove('hidden');
    error.textContent = 'Введите корректный e-mail';
    } else {
        input.classList.remove('form__input_invalid');
        error.classList.add('hidden');
        error.textContent = '';
    }
  }
}

function formValidation(form) {
  [...form.elements].forEach((elem) => {
    if (elem.getAttribute('type') === 'text') {
      inputValidation(elem);
      }
    }
  );
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formValidation(form);
});