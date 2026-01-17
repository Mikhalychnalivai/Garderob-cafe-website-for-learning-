// Booking form functionality
const bookingForm = document.getElementById('bookingFormPage');
const bookingSuccessMessage = document.getElementById('bookingSuccessMessage');

// Set minimum date to today
document.getElementById('bookingDate').min = new Date().toISOString().split('T')[0];

// Validation functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validatePhone(phone) {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

function validateDate(date) {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
}

function validateTime(time) {
  const [hours] = time.split(':').map(Number);
  return hours >= 8 && hours < 22;
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
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('bookingName').value;
  const phone = document.getElementById('bookingPhone').value;
  const date = document.getElementById('bookingDate').value;
  const time = document.getElementById('bookingTime').value;
  const table = document.getElementById('bookingTable').value;
  
  let isValid = true;
  
  // Validate all fields
  if (!validateName(name)) {
    showError('bookingName', 'Имя обязательно (минимум 2 символа)');
    isValid = false;
  } else {
    clearError('bookingName');
  }
  
  if (!validatePhone(phone)) {
    showError('bookingPhone', 'Введите корректный номер телефона');
    isValid = false;
  } else {
    clearError('bookingPhone');
  }
  
  if (!validateDate(date)) {
    showError('bookingDate', 'Выберите дату не ранее сегодняшнего дня');
    isValid = false;
  } else {
    clearError('bookingDate');
  }
  
  if (!validateTime(time)) {
    showError('bookingTime', 'Выберите время с 8:00 до 22:00');
    isValid = false;
  } else {
    clearError('bookingTime');
  }
  
  if (!table) {
    showError('bookingTable', 'Выберите столик');
    isValid = false;
  } else {
    clearError('bookingTable');
  }
  
  if (isValid) {
    const submitBtn = bookingForm.querySelector('.button--primary');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Бронируем...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      bookingForm.reset();
      bookingSuccessMessage.classList.add('show');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Set minimum date again after reset
      document.getElementById('bookingDate').min = new Date().toISOString().split('T')[0];
      
      setTimeout(() => {
        bookingSuccessMessage.classList.remove('show');
      }, 5000);
      
      bookingSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  }
});