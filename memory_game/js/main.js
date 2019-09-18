
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
const cardsInPlay = [];
function checkForMatch(){
  let x ;
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    score++;
x = "You found a match!";

} else {
x = "Sorry, try again.";
}
alert(x);
}

function flipCard(){
  var cardsId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardsId]);
this.setAttribute('src', cards[cardsId].cardImage);
if (cardsInPlay.length === 2 ){
checkForMatch();
}
else if (cardsInPlay.length ===3 ){
  flipAgian();

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
var removeCards = document.getElementById("game-board");
removeCards.innerHTML = "";
for(var i = 2 ; i>=cardsInPlay.length ; i--){
  cardsInPlay[i].pop();
}
createBoard();
}


function showScore() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
document.getElementById("myPopup").innerHTML = "Your score " + score;
}

createBoard();
