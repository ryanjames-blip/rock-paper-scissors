// initialize play button and add event listener
// to start the game
const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', playGame);

const display = document.querySelector('.display');
display.textContent = 'Want to play a game?\nClick play to start';

//initialize rock, paper, and scissors buttons
const choices = document.querySelectorAll('.choice');

//rock paper scissors logic below
let playerWins = 0;
let computerWins = 0;

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

function getPlayerChoice() {
    let choice;
    choices.forEach(choice => choice.addEventListener('click', function(event) {
        choice = event.target.id;
    } )); 
    return choice;
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
    display.textContent = 'OK...\nLet\'s Play...First to 5 wins';
      
    while (computerWins < 5 && playerWins < 5) {
        display.textContent = 'Make your choice...';
        let computerSelection = getComputerChoice();
        let playerSelection;
        while (playerSelection == undefined) {
            playerSelection = getPlayerChoice();
        }
        let result = playRound(computerSelection, playerSelection);
        display.textContent = result;
        playerSelection = undefined;
    }

    if (computerWins == 5) {
        display.textContent = 'Computer Wins!';
    }
    else if (playerSelection == 5){
        display.textContent = 'You win!';
    }
    console.log('playgame ended');
}


