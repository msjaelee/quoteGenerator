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
    tags: "** Inspirational **",
  },
  {
    quote: "You cannot shake hands with a clenched fist.",
    source: "Indira Gandhi",
    citation: "Christian Science Monitor",
    year: 1982,
    tags: "** Wisdom **",
  },
  {
    quote:
      "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
    source: "Jane Austen",
    citation: "Mansfield Park",
    tags: "** Wisdom **",
  },
  {
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
    source: "Maya Angelou",
    tags: "** Inspirational **",
  },
  {
    quote:
      "If you find serenity and happiness, some people may be jealous. Be happy anyway.",
    source: "Mother Teresa",
    tags: "** Wisdom **",
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
    tags: "** Inspirational **",
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
 - The printQuote function returns an html sting that is added to the index.html file using 'document.getElementById'.
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
  if (quoteToPrint.hasOwnProperty("tags")) {
    html += `<span class="year"> ${quoteToPrint.tags} </span>`;
  }
  html += `</p>`;
  return (document.getElementById("quote-box").innerHTML = html);
}

// Uses 'printQuote' function to load first random quote on page

document.getElementById("quote-box").innerHTML = printQuote();

// Sets 7 second interval for quotes to change automatically

setInterval(printQuote, 7000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

// Change background to random color every 7 seconds.

setInterval(function changeColor() {
  let r = Math.floor(Math.random() * 256) + 1;
  let g = Math.floor(Math.random() * 256) + 1;
  let b = Math.floor(Math.random() * 256) + 1;
  newColor = `rgb(${r}, ${g}, ${b})`;
  return (document.body.style.background = newColor);
}, 7000);
