const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;
  const formInfo = {
    formEmail: emailValue,
    formMessage: messageValue,
  };
  const formInfoStringified = JSON.stringify(formInfo);
  localStorage.setItem('feedback-form-state', formInfoStringified);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;

  if (!emailValue.trim() || !messageValue.trim()) {
    alert('Please fill in both the email and message fields');
    return;
  }

  const formData = {
    formEmail: emailValue.trim(),
    formMessage: messageValue.trim(),
  };

 
  console.log(formData);


  form.reset();
  localStorage.removeItem('feedback-form-state');
});

function loadForm() {
  const savedForm = localStorage.getItem('feedback-form-state');
  if (savedForm) {
    const parsedData = JSON.parse(savedForm);
    form.elements.email.value = parsedData.formEmail || '';
    form.elements.message.value = parsedData.formMessage || '';
  }
}


loadForm();





