function addPoints(team, points) {
  let scoreElement = document.getElementById(`score${team}`);
  let currentScore = parseInt(scoreElement.textContent);
  scoreElement.textContent = currentScore + points;
  
}

function startNewGame() {
  let homeTeamScore = document.getElementById("score1")
  let guestTeamScore = document.getElementById("score2")
  homeTeamScore.textContent = 0;
  guestTeamScore.textContent = 0;
}
