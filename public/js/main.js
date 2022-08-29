const quoteHTML = document.getElementById('random-quote');

// Get quotes from DB
fetch('/api/quotes')
  .then((response) => response.json())
  .then((data) => {
      const randQuote = data[Math.floor(Math.random() * data.length)].quote;
      quoteHTML.innerHTML = randQuote;
});

// Redirects user to dashboard page on button click
const dashboard = (event) => {
  event.preventDefault;
  document.location.replace('/');
};

document.querySelector('#userDash').addEventListener('click', dashboard);