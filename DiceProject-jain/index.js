let roll1 = null;
      let roll2 = null;
      let currentPlayer = 1;

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
          document.getElementById("rollBtn").innerText = "Restart Game";
          currentPlayer = 1;
          roll1 = null;
          roll2 = null;
        }
      }

      function displayResult() {
        const result = document.getElementById("result");
        if (roll1 > roll2) {
          result.innerHTML = "🚩 Player 1 Wins!";
        } else if (roll2 > roll1) {
          result.innerHTML = "Player 2 Wins! 🚩";
        } else {
          result.innerHTML = "Draw!";
        }
      }