const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Zmieniam credentials na domyślne admin/admin
  if (username === 'admin' && password === 'admin') {
    alert('You have successfully logged in.');
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
