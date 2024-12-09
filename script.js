const rules = document.querySelector("#rules");
const rulesIcon = document.querySelector("#icon");
const rulesText = document.querySelector("#rules-text");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const gameplayText = document.querySelector("#gameplay-text");
const resultsText = document.querySelector("#results");
const replayMessage = document.querySelector("#replay-message");

playerScore.innerText = 0;
computerScore.innerText = 0;

function displayRules() {
  const iconElement = rulesIcon.querySelector("i");
  if (iconElement.classList.contains("fa-arrow-right")) {
    iconElement.classList.replace("fa-arrow-right", "fa-arrow-down");
    rulesText.style.display = "block";
  } else {
    iconElement.classList.replace("fa-arrow-down", "fa-arrow-right");
    rulesText.style.display = "none";
  }
}

function computerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(options[randomNumber]);
  return options[randomNumber];
}

function playRock() {
  const opponentsChoice = computerChoice();
  let result = "";
  if (opponentsChoice === "Paper") {
    gameplayText.innerHTML = `You played: Rock. Computer played: ${opponentsChoice}. <br />You win!`;
    result = gameplayText.innerText;
  } else if (opponentsChoice === "Scissors") {
    gameplayText.innerHTML = `You played: Rock. Computer played: ${opponentsChoice}. <br />You lose!`;
    result = gameplayText.innerText;
  } else if (opponentsChoice === "Rock") {
    gameplayText.innerHTML = `You played: Rock. Computer played: ${opponentsChoice}. <br />It's a tie!`;
    result = gameplayText.innerHTML;
  }
  gameScore(result);
}

function playPaper() {
  let opponentsChoice = computerChoice();
  let result = "";
  if (opponentsChoice === "Paper") {
    gameplayText.innerHTML = `You played: Paper.  Computer played: ${opponentsChoice}.<br />It's a Tie!`;
  } else if (opponentsChoice === "Scissors") {
    gameplayText.innerHTML = `You played: Paper.  Computer played: ${opponentsChoice}.  <br />You lose!`;
  } else if (opponentsChoice === "Rock") {
    gameplayText.innerHTML = `You played: Paper.  Computer played: ${opponentsChoice}.  <br />You win!`;
  }
  result = gameplayText.innerHTML;
  gameScore(result);
}
function playScissors() {
  let opponentsChoice = computerChoice();
  let result = "";
  if (opponentsChoice === "Paper") {
    gameplayText.innerHTML = `You played: Scissors.  Computer played: ${opponentsChoice}.  <br />You win!`;
  } else if (opponentsChoice === "Scissors") {
    gameplayText.innerHTML = `You played: Scissors.  Computer played: ${opponentsChoice}.  <br />It's a tie!`;
  } else if (opponentsChoice === "Rock") {
    gameplayText.innerHTML = `You played: Scissors.  Computer played: ${opponentsChoice}.  <br />You lose!`;
  }
  result = gameplayText.innerHTML;
  gameScore(result);
}

function gameScore(result) {
  let player = parseInt(playerScore.innerText, 10);
  let computer = parseInt(computerScore.innerText, 10);

  if (result.includes("win")) {
    player++;
    playerScore.innerText = player;
  }
  if (result.includes("lose")) {
    computer++;
    computerScore.innerText = computer;
  }

  if (player >= 3) {
    resultsText.innerText = "You won😁";
    replayMessage.innerText =
      "The page will reload in 10 seconds if you wish to play again!";
    endGame();
  }
  if (computer >= 3) {
    resultsText.innerText = "You lose 😭";
    replayMessage.innerText =
      "The page will reload in 10 seconds if you wish to play again!";
    endGame();
  }
}
function endGame() {
  console.log("The game has ended");
  document.getElementById("rock-button").disabled = true;
  document.getElementById("paper-button").disabled = true;
  document.getElementById("scissors-button").disabled = true;
  setTimeout(function () {
    window.location.reload();
  }, 10000);
}

rulesIcon.addEventListener("click", displayRules);
