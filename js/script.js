// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [ /* Five quotes stored in a array */
  {
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams',
    source: 'Dr.Suess',
  },
  {
    quote: "Run! Forrest run",
    source: 'Jenny - Forrest Gump',
    year: 1994
  },
  {
    quote: "Free at last! Free at last! Thank God almighty I'm free at last.",
    source: 'Martin Luther King Jr.',
    year: 1963
  },
  {
    quote: "watch your damn mouth",
    source: 'Afro Samurai - Afro Samurai: Resrrction',
    year: 2009
  },
  {
    quote: "I'm just here so I won't get fined.",
    source: 'Marshall Lynch',
    year: 2015
  },
];

//  getRandomQuuote function
function getRandomQuote(array) {
  var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]; /* Selects random quote from array.*/
  return (randomQuotes);/* return quote randomly. */
}

//  printQuote funtion
function printQuote() {
  var actualQuote = getRandomQuote(quotes); /* printQuote function calls getRandomQuote */
  var stringOfQuoteProperties = `<p class='quote'> ${actualQuote.quote} </p> <p class='source'> ${actualQuote.source} </p>`          /* html markup */
  if (actualQuote.hasOwnProperty('year')) {   /* checks Quotes for a quote with year property */
    stringOfQuoteProperties += `<span class='year'> ${actualQuote.year} </span>`;
  } else {
    } /* adds year property of quote, if there is one */
document.write(printQuote)
document.getElementById('quote-box').innerHTML = stringOfQuoteProperties; /* printQuote function should display the completed HTML */
} getRandomQuote();


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
