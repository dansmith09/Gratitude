const quoteHTML = document.getElementById('random-quote');

// Get quotes from DB
fetch('/api/quotes')
  .then((response) => response.json())
  .then((data) => {
      const randQuote = data[Math.floor(Math.random() * data.length)].quote;
      quoteHTML.innerHTML = randQuote;
});

const login = () => {
  document.location.replace('/login');
}
   
const dashboard = () => {
  document.location.replace('/dashboard');
}

document.querySelector('#login').addEventListener('click', login);
document.querySelector('#userDash').addEventListener('click', dashboard);