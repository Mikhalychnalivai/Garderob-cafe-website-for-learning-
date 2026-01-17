// Contact form functionality
const contactForm = document.getElementById('contactFormPage');
const contactSuccessMessage = document.getElementById('contactSuccessMessage');

// Validation functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  if (!phone.trim()) return true; // Optional field
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

function validateMessage(message) {
  return message.trim().length >= 10;
}

// Show/clear error functions
function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + 'Error');
  const inputElement = document.getElementById(fieldId);
  errorElement.textContent = message;
  inputElement.style.borderColor = '#e74c3c';
}

function clearError(fieldId) {
  const errorElement = document.getElementById(fieldId + 'Error');
  const inputElement = document.getElementById(fieldId);
  errorElement.textContent = '';
  inputElement.style.borderColor = '#e0e0e0';
}

// Form submission
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const phone = document.getElementById('contactPhone').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  
  let isValid = true;
  
  // Validate all fields
  if (!validateName(name)) {
    showError('contactName', 'Имя обязательно (минимум 2 символа)');
    isValid = false;
  } else {
    clearError('contactName');
  }
  
  if (!validateEmail(email)) {
    showError('contactEmail', 'Введите корректный email адрес');
    isValid = false;
  } else {
    clearError('contactEmail');
  }
  
  if (!validatePhone(phone)) {
    showError('contactPhone', 'Введите корректный номер телефона');
    isValid = false;
  } else {
    clearError('contactPhone');
  }
  
  if (!subject) {
    showError('contactSubject', 'Выберите тему обращения');
    isValid = false;
  } else {
    clearError('contactSubject');
  }
  
  if (!validateMessage(message)) {
    showError('contactMessage', 'Сообщение обязательно (минимум 10 символов)');
    isValid = false;
  } else {
    clearError('contactMessage');
  }
  
  if (isValid) {
    const submitBtn = contactForm.querySelector('.button--primary');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Отправляется...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      contactForm.reset();
      contactSuccessMessage.classList.add('show');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      setTimeout(() => {
        contactSuccessMessage.classList.remove('show');
      }, 5000);
      
      contactSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  }
});