let roll1 = null;
let roll2 = null;
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const imgPath = `images/dice${randomNumber}.png`;

  if (currentPlayer === 1) {
    document.querySelector(".img1").setAttribute("src", imgPath);
    roll1 = randomNumber;
    document.getElementById("rollBtn").innerText = "Roll Player 2";
    currentPlayer = 2;
  } else {
    document.querySelector(".img2").setAttribute("src", imgPath);
    roll2 = randomNumber;
    displayResult();
    document.getElementById("rollBtn").innerText = "Roll Player 1";
    currentPlayer = 1;
  }
}

function displayResult() {
  const result = document.getElementById("result");
  if (roll1 > roll2) {
    result.innerHTML = "🚩 Player 1 Wins!";
    player1Score++;
  } else if (roll2 > roll1) {
    result.innerHTML = "Player 2 Wins! 🚩";
    player2Score++;
  } else {
    result.innerHTML = "Draw!";
  }
  updateScore();
}

function updateScore() {
  document.getElementById("score1").innerText = `Score: ${player1Score}`;
  document.getElementById("score2").innerText = `Score: ${player2Score}`;
}

function resetScores() {
  player1Score = 0;
  player2Score = 0;
  updateScore();
  document.getElementById("result").innerText = "Click to Start";
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
