// Collect values from the login form and make Post requests
const loginFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Invalid login");
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);