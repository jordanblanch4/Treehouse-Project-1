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
const quotes = [
  {quote: "All I wanted to do was be a golden millionaire." , source: "Dinesh", citation: "Silicon Valley"},
  {quote: "What’s happening? I’m sorry, what? Mr. Car", source:"Jared", year: "2014"}, 
  {quote: "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.", source: "Morty"}, 
  {quote: 'Weddings are basically funerals with cake.', source: 'Rick'},
  {quote: 'If it was, you could call me Ernest Hemingway.', source: 'Beth'}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quoteList) {
  const randGen = Math.floor(Math.random() * quoteList.length);
  return quoteList[randGen];
};


/***
 * `printQuote` function
***/
let HTML;
function printQuote() {
  var quoteOBJ = getRandomQuote(quotes);
  let HTML = '<p class="quote">'+quoteOBJ.quote+'</p>';
  HTML+= '<p class="source">'+quoteOBJ.source;
  if(quoteOBJ.citation !== undefined) {
    HTML+= '<span class="citation">' + quoteOBJ.citation + '</span>';
  }
    if(quoteOBJ.year !== undefined) {
      HTML+='<span class="year">'+ quoteOBJ.year +'</span>';
  }
    HTML+='</p>';
document.getElementById('quote-box').innerHTML = HTML;
};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
