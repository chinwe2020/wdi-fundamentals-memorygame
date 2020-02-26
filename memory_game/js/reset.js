var resetGame = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.querySelector('img');
    cardElement.remove();
    console.log('removeboard' + i);
  }
  score = -1;
  cardsInPlay.length = 0;
  updateScore();
  createBoard();
  statusMessage.textContent = "GAME RESET. TRY AGAIN!"
  resetButton.style.visibility = "hidden";
  flipCount = 0;
}

let updateScore = function() {
  if (score < 2) {
    score++;
    console.log('Score is ' + score);
    document.getElementById('score').textContent = "Score: " + score;
    if (score === 2) {
      statusMessage.textContent = "YOU WIN!";
      resetButton.style.visibility = "visible";
    }
  }
}

resetButton.addEventListener('click', resetGame);