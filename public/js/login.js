// Modified code from Module 14 mini project
const loginFormHandler = async (event) => {
  event.preventDefault();
  hideLoginAlert();
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      // This may need to be changed depending upon what we choose the user main page to be called.
      document.location.replace('/profile');
    } else {
      loginAlert();
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  hideSignUpAlert();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if(!name || !email || !password || password.length <8) {signUpAlert()}

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

  // This automatically logs the user in after a successful sign up
  // Again, this page link may need to be changed
    if (response.ok) {
      document.location.replace('/profile');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

const signUpAlert = () => {
  const signUpAlert = document.querySelector('#signUpAlert');
  signUpAlert.style.display = 'block';
}

const hideSignUpAlert = () => {
  const signUpAlert = document.querySelector('#signUpAlert');
  signUpAlert.style.display = 'none';
}

const loginAlert = () => {
  const loginAlert = document.querySelector('#loginAlert');
  loginAlert.style.display = 'block';
}

const hideLoginAlert = () => {
  const loginAlert = document.querySelector('#loginAlert');
  loginAlert.style.display = 'none';
}

