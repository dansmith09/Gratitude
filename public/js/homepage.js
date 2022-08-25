const loginButton = document.querySelector('#loginButton');

const redirectToLoginPage = () => {
    document.location.replace('/login');
}

loginButton.addEventListener('click', redirectToLoginPage);