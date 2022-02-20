const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
})

function checkInput() {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (userNameValue === '') {
    setErrorFor(userName, "Ism kiritilmadi")

  } else {
    setSuccesFor(userName)
  }
  if (emailValue === '') {
    setErrorFor(email, "Elektron pochta kiritilmadi")

  } else {
    setSuccesFor(email)
  }
  if (passwordValue === '') {
    setErrorFor(password, "Parol kiritilmadi")

  } else {
    setSuccesFor(password)
  }
  if (password2Value === '') {
    setErrorFor(password2, "Parol tasqidlanmadi")
  } else if(passwordValue !== password2Value) {
    setErrorFor(password2, "Parollar mos emas");
  } else {
    setSuccesFor(password2)
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerHTML = message;
  formControl.className = 'form-control error'
}
function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control succes';
}