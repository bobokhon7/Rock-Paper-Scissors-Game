const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");
const totalResult = document.getElementById("totalResult");
const btn = document.querySelectorAll("button");

//adding click eventlistener
btn.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.id);
  });
});

//disableing the buttons
function disable() {
  btn.forEach((button) => {
    button.disabled = true;
  });
}

//All choices for computerSelection
let iconChoices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

//computerPlay function for random icons
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
    //updating the playerSCore
    player.innerHTML = playerScore;
    let output = `<h5 class="text-success"> You win! ${playerSelection} beats ${computerSelection}</h5>`;
    totalResult.innerHTML = output;

    //add if statment for after 5 match player win
    playerScore === 5 &&
      handleWin(
        "Congratulations player,<br> you won the battle against computer!",
        "success"
      );
  } else if (playerSelection === computerSelection) {
    // <= this tie both equal
    totalResult.innerHTML = `<h5 class="text-warning">It's a tie! ${playerSelection} = ${computerSelection}</h5>`;
  } else {
    // the computerScore win and increase the score of Computer
    computerScore += 1;
    totalResult.innerHTML = `<h5 class="text-danger">Computer wins! ${computerSelection} beats ${playerSelection}</h5>`;
    computer.innerHTML = computerScore;

    //add if statment, after 5 match Computer win
    computerScore === 5 && handleWin("You lost the battle.", "danger");
  }
}

const handleWin = (message, status) => {
  totalResult.innerHTML = `<h5 class="text-${status}"> ${message}</h5>`;
  disable();
  //setInterval for reloadung the web-Page
  setInterval(() => {
    location.reload();
  }, 2000);
};
