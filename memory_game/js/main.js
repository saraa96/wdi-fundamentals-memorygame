
console.log("Up and running!");
alert('Hello, friends.');
const cards =["queen", "queen", "king","king"];
const cardsInPlay = [];
function checkForMatch(){
  if ( cardsInPlay.length === 2 ){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
}



function flipCard(cardsId){
console.log("User flipped "+ cardsId)
cardsInPlay.push(cardsId);
checkForMatch();

}

flipCard(cards[0]);
flipCard(cards[2]);
