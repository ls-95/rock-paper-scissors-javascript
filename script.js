const rules = document.querySelector("#rules");
const rulesIcon = document.querySelector("#icon");
const rulesText = document.querySelector("#rules-text");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

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

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRock() {}
function playPaper() {}
function playScissors() {}

rulesIcon.addEventListener("click", displayRules);
