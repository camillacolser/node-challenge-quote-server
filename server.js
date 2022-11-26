//const { response } = require("express");

const express = require("express");
const app = express();

const quotes = require("./quotes.json");


app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes))
})

function pickFromArray(quotes) {
  const randomNumber = Math.random()
  const totalNumberOfQuotes = quotes.length
  const randomIndex = Math.floor(randomNumber * totalNumberOfQuotes)
  return quotes[randomIndex];
}

let port = 5000;

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});
