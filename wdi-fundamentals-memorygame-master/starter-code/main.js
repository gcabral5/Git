var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards).innerHTML = '<img src="king.png" alt="King of Diamonds" />';

	}
}
var isMatch = function () {

}
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}