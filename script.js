const loginForm = document.getElementById('login-form');
const navbarUser = document.getElementById('navbar-user');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value;
  
  // Display the username in the navbar
  navbarUser.textContent = username;
  
  // Reset the login form and hide it
  loginForm.reset();
  loginForm.style.display = 'none';
  overlay.style.display = 'none';
});