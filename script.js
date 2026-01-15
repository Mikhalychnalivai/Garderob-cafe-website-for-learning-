const data = {
  latte:{title:'Латте',text:'Состав: двойной эспрессо из 100% арабики, горячее молоко, воздушная молочная пена',img:'https://images.unsplash.com/photo-1541167760496-1628856ab772'},
  cappuccino:{title:'Капучино',text:'Состав: эспрессо, горячее молоко и плотная молочная пена в равных пропорциях',img:'https://i-coffee.me/wp-content/uploads/2022/02/Coffee_Cappuccino_Cream_Cup_Saucer_525045_2048x1152.jpg'},
  raf:{title:'Раф',text:'Состав: эспрессо, сливки 10%, ванильный сахар, взбитые до кремовой текстуры',img:'https://images.gastronom.ru/R2tO6aTuXyg6Hsqx6rwSMushYvJIv2VvDEzWfxibgI4/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2JkYjE0OWFlLTIzNzMtNDk5Mi05NTY1LWYwNmJlOTExMjI1OC5qcGc.webp'},
  americano:{title:'Американо',text:'Состав: эспрессо и горячая фильтрованная вода, сохраняющая аромат кофе',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjf5G4uhVhjlUhv2aqziCZ7558Bwxz8hRcQ&s'},
  espresso:{title:'Эспрессо',text:'Состав: молотые зёрна 100% арабики, приготовленные под высоким давлением',img:'https://st8.stblizko.ru/images/product/291/294/024_big.png'},
  flatwhite:{title:'Флэт уайт',text:'Состав: двойной эспрессо и небольшое количество горячего молока с микропеной',img:'https://shop.legend-tea.ru/upload/iblock/7fc/c0xmp2ox7tvkzay851zdppjxl8fa9703/ai-generated-cappuccino-cup-on-saucer-free-photo.jpeg'},
};

const modal = document.getElementById('modal');
document.querySelectorAll('button[data-modal]').forEach(btn=>{
  btn.onclick=()=>{
    const d=data[btn.dataset.modal];
    modal.style.display='flex';
    modal.querySelector('#modal-img').src=d.img;
    modal.querySelector('#modal-title').textContent=d.title;
    modal.querySelector('#modal-text').textContent=d.text;
  }
});

document.querySelector('.close').onclick=()=>modal.style.display='none';
modal.onclick=e=>{ if(e.target===modal) modal.style.display='none'; }

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Validation functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  if (!phone.trim()) return true;
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

function validateMessage(message) {
  return message.trim().length >= 10;
}

// Show error message
function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + 'Error');
  const inputElement = document.getElementById(fieldId);
  errorElement.textContent = message;
  inputElement.style.borderColor = '#e74c3c';
}

// Clear error message
function clearError(fieldId) {
  const errorElement = document.getElementById(fieldId + 'Error');
  const inputElement = document.getElementById(fieldId);
  errorElement.textContent = '';
  inputElement.style.borderColor = '#e0e0e0';
}

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
  if (this.value.trim()) {
    if (validateName(this.value)) {
      clearError('name');
    } else {
      showError('name', 'Имя должно содержать минимум 2 символа');
    }
  } else {
    clearError('name');
  }
});

document.getElementById('email').addEventListener('input', function() {
  if (this.value.trim()) {
    if (validateEmail(this.value)) {
      clearError('email');
    } else {
      showError('email', 'Введите корректный email адрес');
    }
  } else {
    clearError('email');
  }
});

document.getElementById('phone').addEventListener('input', function() {
  if (this.value.trim()) {
    if (validatePhone(this.value)) {
      clearError('phone');
    } else {
      showError('phone', 'Введите корректный номер телефона');
    }
  } else {
    clearError('phone');
  }
});

document.getElementById('message').addEventListener('input', function() {
  if (this.value.trim()) {
    if (validateMessage(this.value)) {
      clearError('message');
    } else {
      showError('message', 'Сообщение должно содержать минимум 10 символов');
    }
  } else {
    clearError('message');
  }
});

// Form submission
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  let isValid = true;
  
  // Validate all fields
  if (!validateName(name)) {
    showError('name', 'Имя обязательно для заполнения (минимум 2 символа)');
    isValid = false;
  } else {
    clearError('name');
  }
  
  if (!validateEmail(email)) {
    showError('email', 'Введите корректный email адрес');
    isValid = false;
  } else {
    clearError('email');
  }
  
  if (!validatePhone(phone)) {
    showError('phone', 'Введите корректный номер телефона');
    isValid = false;
  } else {
    clearError('phone');
  }
  
  if (!validateMessage(message)) {
    showError('message', 'Сообщение обязательно (минимум 10 символов)');
    isValid = false;
  } else {
    clearError('message');
  }
  
  if (isValid) {
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.button--primary');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Отправляется...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      contactForm.reset();
      successMessage.classList.add('show');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  }
});