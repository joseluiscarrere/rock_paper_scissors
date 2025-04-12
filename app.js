// function to get  randomized computer choice
const getComputerChoice = function () {
    // get random number from 0 to 1 and save to variable
    const randomNumber = Math.random();
    if (randomNumber >= (2 / 3)) {
        return "Rock"
    }
    else if (randomNumber >= (1 / 3)) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

// initializing variables to keep track of score of player vs computer
let playerScore = 0;
let computerScore = 0;

// declare player and computer selection variables
let playerSelection;
let computerSelection;

// function to play one round of rock paper scissors
function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock,Paper,Scissors; Shoot!");

    // function to capitalize first letter of string that is passed in
    const capitalizeFirstLetter = (string) => {
        string = string.toLowerCase();
        return string[0].toUpperCase() + string.slice(1)
    }

    //function to account for all user inputs
    function userInput() {
        while (true) {
            if (playerSelection === null) {
                console.log("GAME CANCELLED")
                break;
            }
            else if (!playerSelection) {
                playerSelection = prompt("Invalid input. Please choose Rock, Paper, or Scissors.")
            }
            else if ((typeof playerSelection === "string") && (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors")) {
                playerSelection = playerSelection.toLowerCase();
                return playerSelection = capitalizeFirstLetter(playerSelection);
            }
            else if (playerSelection) {
                playerSelection = prompt("Invalid input. Please choose Rock, Paper, or Scissors.")
            }
        }
    }
    userInput();

    // while loop to account for tie
    while (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("TIE!, Replay Round.")
        userInput();
    }

    // conditional for different potential outcomes (when pS !== cS)
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return computerScore++
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return playerScore++
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return playerScore++
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return computerScore++
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return computerScore++
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return playerScore++
    }
}

// function to play best of five game of rock paper scissors
function playGame() {
    // while loop to continue playing rounds of rock paper scissors until either player or computer reaches a score of 3
    while ((playerScore !== 3 && computerScore !== 3) && (playerSelection !== null)) {
        playRound();
        console.log(
            `Player:${playerScore} Computer:${computerScore}`
        )
    }
    // conditional to display either player or computer victory message based on score
    if (playerSelection !== null) {
        if (playerScore > computerScore) {
            console.log(
                `PLAYER WINS!`
            )
        } else if (computerScore > playerScore) {
            console.log(
                `COMPUTER WINS`
            )
        }
    }
}

const button = document.querySelector("button")

// event listener to trigger playgame function upon user click on button
button.addEventListener("click", function (e) {
    playGame();
})













































