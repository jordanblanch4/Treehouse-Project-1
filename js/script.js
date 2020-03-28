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
  {Quote: "All I wanted to do was be a golden millionaire." , Source: "Dinesh", Citation: "Silicon Valley"},
  {Quote: "What’s happening? I’m sorry, what? Mr. Car", Source:"Jared", Year: "2014"}, 
  {Quote: "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.", Source: "Morty"}, 
  {Quote: 'Weddings are basically funerals with cake.', Source: 'Rick'},
  {Quote: 'If it was, you could call me Ernest Hemingway.', Source: 'Beth'}
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
  let HTML = '<p class="quote">'+quoteOBJ.Quote+'</p>';
  HTML+= '<p class="source">'+quoteOBJ.Source;
  if(quoteOBJ.Citation !== undefined) {
    HTML+= '<span class="citation">' + quoteOBJ.Citation + '</span>';
  }
    if(quoteOBJ.Year !== undefined) {
      HTML+='<span class="year">'+ quoteOBJ.Year +'</span>';
  }
    HTML+='</p>';
document.getElementById('quote-box').innerHTML = HTML;
};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
