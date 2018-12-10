/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


const quotes = [
{quote:'The key is not the will to win… everybody has that. It is the will to prepare to win that is important.',
source:'Bobby Knight'},
{quote:'I hated every minute of training, but I said, "Don\’t quit. Suffer now and live the rest of your life as a champion."',
source:'Muhammad Ali'},
{quote:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
source:'Mark Caine'},
{quote:'Your pretty empire took so long to build, now, with a snap of history\'s fingers, down it goes.',
source:'Alan Moore',
cite:'V for Vendetta'},
{quote:'Here\'s Johnny!',
source:'Jack Nicholson',
cite: 'The Shining',
year: 1980}
];

// Selects random obj in array
getRandomQuote = () => {
  let r = Math.floor(Math.random() * quotes.length); // selects random number
 const random = quotes[r]; // selects obj in array
return random;
}

const quoteBox = document.getElementById('quote-box');
const paragraph = quoteBox.lastElementChild;
const displayCite = paragraph.firstElementChild; 
const displayYear = paragraph.lastElementChild; 
const body = document.querySelector('body');

// Prints to page
printQuote = () => {

  selectQuote = getRandomQuote(); // assigns random quote obj
  
  const displayQuote = document.querySelector('.quote');
  const displaySource = document.querySelector('.source');
   
  displayQuote.textContent = selectQuote.quote; // selects obj property quote
  displaySource.textContent = selectQuote.source; // selects obj property source


  if (selectQuote.hasOwnProperty('cite')){
    displayCite.textContent = selectQuote.cite;
    paragraph.appendChild(displayCite);
  }
  if(selectQuote.hasOwnProperty('year')){
    displayYear.textContent = selectQuote.year;
    paragraph.appendChild(displayYear);
  }
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/*********************** IGNORE CODE BELOW. COLOR CHANGE FUNCTION ATTEMPTS INCOMPLETE */
//   if(body.style.backgroundColor != '#000'){
//     body.style.backgroundColor = '#000'
//   } else if (body.style.backgroundColor = '#000'){
//     body.style.backgroundColor = '#ee5253'
// }
// }
//  changeColor = () => {
//  if(body.style.backgroundColor != '#000'){
//      body.style.backgroundColor = '#000'
//    } else if (body.style.backgroundColor = '#000'){
//      body.style.backgroundColor = '#ee5253'
//  }
