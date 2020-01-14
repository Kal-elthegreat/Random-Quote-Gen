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
};

changeBackgroundColor = () => {
  // generate random rgb color
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  rgb = `rgb(${r},${g},${b})`;

  // assign new color 
  button = document.querySelector('#loadQuote');
  button.style.backgroundColor = rgb;
  document.body.style.backgroundColor = rgb;
}

// select elements to use later
const source = document.querySelector('p.source');
const displayCite = source.firstElementChild; 
const displayYear = source.lastElementChild; 

// Prints to page
printQuote = () => {

  changeBackgroundColor();
  selectQuote = getRandomQuote(); // assigns random quote obj
  
  displayQuote = document.querySelector('.quote');
  displaySource = document.querySelector('.source');
   
  displayQuote.textContent = selectQuote.quote; // selects obj property quote
  displaySource.textContent = selectQuote.source; // selects obj property source

  // Let's make this block more dry
  if (selectQuote.hasOwnProperty('cite')) {
    displayCite.textContent = selectQuote.cite;
    source.appendChild(displayCite);
  } 
  if (selectQuote.hasOwnProperty('year')) {
    displayYear.textContent = selectQuote.year;
    source.appendChild(displayYear);
  }
  //////
}

document.getElementById('loadQuote').addEventListener("click", printQuote);


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
