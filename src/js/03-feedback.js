import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const LOCALSTORAGE = 'feedback-form';


form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onForm, 500));
 let formData ={};
function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE);
}

function onForm(e) {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE, JSON.stringify(persistedFilters));
}

function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
initForm();