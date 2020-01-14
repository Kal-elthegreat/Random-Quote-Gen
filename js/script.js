/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


const quotes = [
{quote:'The key is not the will to win… everybody has that. It is the will to prepare to win that is important.',
source:'Bobby Knight'},
{quote:'The Marathon Continues.',
source:'Nipsey Hussle'},
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
year: 1980},
{quote:'When failure is not an option success becomes inevitable',
source:'Unknown',
cite: 'Make Real Estate Real',
year: 2020}
];

// select elements to use later
const button = document.querySelector('#loadQuote');
const source = document.querySelector('p.source');
const displayCite = source.firstElementChild; 
const displayYear = source.lastElementChild;

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
  button.style.backgroundColor = rgb;
  document.body.style.backgroundColor = rgb;
}

checkToDisplay = (quoteObj) => {
  if (quoteObj.hasOwnProperty('cite')) {
    displayCite.textContent = quoteObj.cite;
    source.appendChild(displayCite);
  }
  if (quoteObj.hasOwnProperty('year')) {
    displayYear.textContent = quoteObj.year;
    source.appendChild(displayYear);
  }
}


// Prints to page
printQuote = () => {

  changeBackgroundColor();
  selectQuote = getRandomQuote(); // assigns random quote obj
  
  displayQuote = document.querySelector('.quote');
  displaySource = document.querySelector('.source'); 
  displayQuote.textContent = selectQuote.quote; // selects obj property quote
  displaySource.textContent = selectQuote.source; // selects obj property source

  checkToDisplay(selectQuote);
}

window.setInterval(function () {
  printQuote();
},5000);

button.addEventListener("click", printQuote);
