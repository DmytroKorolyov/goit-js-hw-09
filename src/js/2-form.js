  const form = document.querySelector('.feedback-form');

// Завантаження збережених даних з локального сховища
const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.elements['email'].value = savedData.email || '';
form.elements['message'].value = savedData.message || '';

// Слухач подій для змін введених даних
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  // Оновлення поточного стану новим значенням
  currentState[name] = value.trim();

  // Збереження оновленого стану в локальному сховищі
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
});

// Слухач подій для подання форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, message } = form.elements;

  // Перевірка, чи заповнені обидва поля електронної пошти та повідомлення
  if (email.value.trim() && message.value.trim()) {
    // Запис даних у консоль та очищення форми та локального сховища
    console.log({
      email: email.value.trim(),
      message: message.value.trim(),
    });

    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
});
