//rock paper scissors logic below
let playerWins = 0;
let computerWins = 0;

while (true) {
    
    playerWins = 0;
    computerWins = 0;

    playGame();

    let playAgain = prompt('Play Again? (type \'y\' or \'n\'');
    if (playAgain == 'n') {
        console.log('Thanks for playing!');
        break;
    }
}

// generate a random number 
// use that number to assign either rock, paper, or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    number = number % 3;
    if (number == 0) {
        return 'rock';
    }
    else if (number == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//simulate one round of rock, paper, scissors
function playRound(computerSelection, playerSelection) {
    //check for a tie first
    if (computerSelection === playerSelection) {
        return 'It\'s a tie!';
    }
    
    if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            playerWins++;
            return 'You win! Paper beats Rock';
        }
        else {
            computerWins++;
            return 'You lose! Rock beats Scissors';
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            playerWins++;
            return 'You win! Scissors beats Paper';
        }
        else {
            computerWins++;
            return 'You lose! Paper beats Rock';
        }
    }
    else {
        if (playerSelection == 'rock') {
            playerWins++;
            return 'You win! Rock beats Scissors';
        }
        else {
            computerWins++;
            return 'You lose! Scissors beats Paper';
        }
    }
}

//simulate best of 5 match
function playGame() {
    while (computerWins < 3 && playerWins < 3) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose wisely: ");
        playerSelection = playerSelection.toLowerCase();
        let result = playRound(computerSelection, playerSelection);
        console.log(result);
    }

    if (computerWins == 3) {
        console.log('Computer Wins!');
    }
    else {
        console.log('You win!')
    }
}
// rock, paper, scissors logic above


