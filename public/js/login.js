// Modified code from Module 14 mini project
const loginFormHandler = async (event) => {
  event.preventDefault();

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
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

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
    } else {
      alert(response.statusText);
    }
  }
};

// Code that hides login and displays sign up
const showSignup = () => {
  const signup = document.getElementById('signupHidden');
  const login = document.getElementById('loginHidden');

  login.style.display = 'none';
  signup.style.display = 'contents';

}
// Code that hides signup and displays login
const showLogin = () =>{
  const signup = document.getElementById('signupHidden');
  const login = document.getElementById('loginHidden');

  login.style.display = 'contents';
  signup.style.display = 'none';
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('#signup-promptBtn')
  .addEventListener('click', showSignup);

document
  .querySelector('#login-promptBtn')
  .addEventListener('click', showLogin);



