
console.log("Up and running!");
var score= 0;
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
var cardsInPlay = [];
function checkForMatch(){
  let x ;
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    score++;
alert("You found a match!");
flipAgian();
} else {
alert("Sorry, try again.");
flipAgian();
}
}

function flipCard(){
  var cardsId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardsId]);
this.setAttribute('src', cards[cardsId].cardImage);
if (cardsInPlay.length === 2 ){
checkForMatch();
}
}
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
     cardElement.setAttribute('src', 'images/back.png');
     cardElement.setAttribute('data-id', i);
     cardElement.addEventListener("click", flipCard);
     document.getElementById("game-board").appendChild(cardElement);
  }
}
function flipAgian(){
document.getElementById("game-board").innerHTML = "";
	cardsInPlay = [];
createBoard();
}
function showScore() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
document.getElementById("myPopup").innerHTML = "Your score is " + score;
}

createBoard();
