const quoteHTML = document.getElementById('random-quote');

// Get quotes from DB
fetch('/api/quotes')
    .then((response) => response.json())
    .then((data) => {
        const randQuote = data[Math.floor(Math.random() * data.length)].quote;
        quoteHTML.innerHTML = randQuote;
    });