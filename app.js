const rock = document.getElementById("rock");

const paper = document.getElementById("paper");

const scissors = document.getElementById("scissors");

const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");
const totalResult = document.getElementById("totalResult");
const btn = document.querySelectorAll("button");


btn.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.id);
  });
});

function disable() {
  btn.forEach((button) => {
    button.disabled = true;
  });
}

function computerPlay() {
  const result = iconChoices[Math.floor(Math.random() * iconChoices.length)];

  return result;
}
//playRound function
function playRound(playerSelection, computerSelection = computerPlay()) {
  if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    playerScore += 1;
    player.innerHTML = playerScore;
    let output = `<h5 class="text-success"> You win! ${playerSelection} beats ${computerSelection}</h5>`;
    totalResult.innerHTML = output;
    if (playerScore === 5) {
      totalResult.innerHTML = `<h5 class="text-success"> Congratulations player,<br> you won the battle against computer!</h5>`;
      disable();
      setInterval(() => {
        location.reload();
      }, 2000);
    }
  } else if (playerSelection === computerSelection) {
    totalResult.innerHTML = `<h5 class="text-warning">It's a tie! ${playerSelection} = ${computerSelection}</h5>`;
  } else {
    computerScore += 1;
    totalResult.innerHTML = `<h5 class="text-danger">Computer wins! ${computerSelection} beats ${playerSelection}</h5>`;
    computer.innerHTML = computerScore;

    if (computerScore === 5) {
      totalResult.innerHTML = `<h5 class="text-danger"> You lost the battle.</h5>`;
      disable();
      setInterval(() => {
        location.reload();
      }, 2000);
    }
  }
}

//reset btn


let iconChoices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
