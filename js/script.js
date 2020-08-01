/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

/*
- Created data stucture using an Array and stored in a variable named 'quotes'.
- Added 10 quote objects into array
- Created properties for each object titled: 'quote', 'source', 'citation', 'year'.
*/

const quotes = [];

quotes.push(
  {
    quote: "Well behaved women seldom make history.",
    source: "Laurel Thatcher Ulrich",
    citation: "American Quarterly",
    year: 1976,
  },
  {
    quote: "When the whole world is silent, even one voice becomes powerful.",
    source: "Malala Yousafzai",
  },
  {
    quote: "You cannot shake hands with a clenched fist.",
    source: "Indira Gandhi",
    citation: "Christian Science Monitor",
    year: 1982,
  },
  {
    quote:
      "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
    source: "Jane Austen",
    citation: "Mansfield Park",
  },
  {
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
    source: "Maya Angelou",
  },
  {
    quote:
      "If you find serenity and happiness, some people may be jealous. Be happy anyway.",
    source: "Mother Teresa",
  },
  {
    quote:
      "One is left with the horrible feeling now that war settles nothing; that to win a war is as disastrous as to lose one.",
    source: "Agatha Christie",
    citation: "Autobiography",
    year: 1977,
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    citation: "This Is My Story",
    year: 1937,
  },
  {
    quote: "One can never consent to creep when one feels an impulse to soar.",
    source: "Helen Keller",
  },
  {
    quote:
      "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
    source: "J.K.Rowling",
    citation: "Harry Potter and the Goblet of Fire",
  }
);

/***
 * `getRandomQuote` function
 ***/

/*
 getRandomQuote function assigns a random integer between 0 and 9 to the variable 'randomNumber'.
 randomNumber is used to select an index position on the 'quotes' array.
 randomQuote returns a random object from the 'quotes' array. 
*/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 10);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `printQuote` function
 ***/

/* 
 - The printQuote function calls the getRandomQuote function and stores the random quote object as 'quoteToPrint'.
 - Each property from the quoteToPrint object is referenced and added to the 'html' string.
 - Two 'if' comparisons are used to check if the 'citation' or 'year' property exist in the object.
 - If the object contains the relevant property, it's value is added to the 'html' string.
 - The printQuote function returns a string of html containing the random quote properties.
 */

function printQuote() {
  let quoteToPrint = getRandomQuote();
  let html = `
  <p class="quote"> ${quoteToPrint.quote} </p>
  <p class="source"> ${quoteToPrint.source}
  `;
  if (quoteToPrint.hasOwnProperty("citation")) {
    html += ` <span class="citation"> ${quoteToPrint.citation} </span>`;
  }
  if (quoteToPrint.hasOwnProperty("year")) {
    html += `<span class="year"> ${quoteToPrint.year} </span>`;
  }
  html += `</p>`;
  return html;
}

// I have added this console.log to try and figure out why the button isn't working.
// Sometimes the log matches the quote on the page, sometimes it doesn't?

console.log(printQuote());

document.getElementById("quote-box").innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
