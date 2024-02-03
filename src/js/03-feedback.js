const throttle = require('lodash.throttle');

const formInput = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

const saveThrottledInput = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500);

formInput.addEventListener('input', saveThrottledInput);

const loadThrottledInput = () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

loadThrottledInput();

formInput.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  formInput.reset();
});
