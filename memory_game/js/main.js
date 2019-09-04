
console.log("Up and running!");
alert('Hello, friends.');
var cards = [
{
rank:"queen",
suit : "hearts"	,
cardImage : 	"images/queen-of-hearts.png"
},
{ rank:"queen" ,
suit:	"diamonds",
cardImage : "images/queen-of-diamonds.png"
},
{
rank: "king" ,
suit: "hearts",
cardImage :"images/king-of-hearts.png"
},
{
rank:"king" ,
suit: "diamonds",
cardImage : "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
function checkForMatch(){
  if ( cardsInPlay.length === 2 ){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}
}

function flipCard(cardsId){
console.log("User flipped " + cardsId.rank)
console.log(cardsId.suit);
console.log(cardsId.cardImage);
cardsInPlay.push(cardsId);
checkForMatch();
}

flipCard(cards[0]);
flipCard(cards[2]);
