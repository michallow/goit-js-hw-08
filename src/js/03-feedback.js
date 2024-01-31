import throttle from 'lodash.throttle';

const emailInput = document.querySelector('email');
const messageInput = document.querySelector('message');
const feebackForm = document.querySelector('feedback-form');

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
}

window.addEventListener('DOMContentLoaded', loadFormData);

emailInput.addEventListener('input', saveFormDataWithThrottle);
messageInput.addEventListener('input', saveFormDataWithThrottle);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';

  console.log('Form data submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });
});
