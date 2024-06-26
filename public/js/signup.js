// Collect values from the login form and make Post requests
const signupFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Invalid signup");
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);