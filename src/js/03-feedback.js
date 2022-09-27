import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onData, 500));
form.addEventListener('submit', onSubmit);

const formData = {};

function onData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form', JSON.stringify(formData));
}

function onSubmit(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form');
}

function dataLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form'));
  const email = document.querySelector('input');
  const message = document.querySelector('textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
dataLocalStorage()