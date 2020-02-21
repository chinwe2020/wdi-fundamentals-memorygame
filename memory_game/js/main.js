const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

const cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped queen")

const cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped king");

if (cardsInPlay.lenght === 2) {
	console.log("You have selected two cards.");
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
}