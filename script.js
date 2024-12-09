const rules = document.querySelector("#rules");
const rulesIcon = document.querySelector("#icon");
const rulesText = document.querySelector("#rules-text");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const gameplayText = document.querySelector("#gameplay-text");
const results = document.querySelector("#results");

function displayRules() {
  const iconElement = rulesIcon.querySelector("i");
  if (iconElement.classList.contains("fa-arrow-right")) {
    console.log("hello");
    iconElement.classList.replace("fa-arrow-right", "fa-arrow-down");
    rulesText.style.display = "block";
  } else {
    console.log("Bye");
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
  let opponentsChoice = computerChoice();
  if (opponentsChoice === "Paper") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. You win!`;
  } else if (opponentsChoice === "Scissors") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. You lose!`;
  } else if (opponentsChoice === "Rock") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. It's a tie!`;
  }
}

function playPaper() {
  let opponentsChoice = computerChoice();
  if (opponentsChoice === "Paper") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. It's a Tie!`;
  } else if (opponentsChoice === "Scissors") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. You lose!`;
  } else if (opponentsChoice === "Rock") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. You win!`;
  }
}
function playScissors() {
  let opponentsChoice = computerChoice();
  if (opponentsChoice === "Paper") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. You win!`;
  } else if (opponentsChoice === "Scissors") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. It's a tie!`;
  } else if (opponentsChoice === "Rock") {
    gameplayText.innerText = `Computer has played: ${opponentsChoice}. You lose!`;
  }
}

rulesIcon.addEventListener("click", displayRules);
