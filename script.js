// initialize play button and add event listener
// to start the game
const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', playGame);

const display = document.querySelector('.display');
display.textContent = 'Want to play a game?\nClick play to start';
const scoreDisplay = document.querySelector('.score-display');

//initialize rock, paper, and scissors buttons
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', function(event) {
    getPlayerChoice(event);
} )); 

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

function getPlayerChoice(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
}

//simulate one round of rock, paper, scissors
function playRound(computerSelection, playerSelection) {
    //check for a tie first
    if (computerSelection === playerSelection) {
        display.textContent = 'It\'s a tie!';
    }
    
    if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            playerWins++;
            display.textContent = 'You win! Paper beats Rock';
        }
        else {
            computerWins++;
            display.textContent = 'You lose! Rock beats Scissors';
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            playerWins++;
            display.textContent = 'You win! Scissors beats Paper';
        }
        else {
            computerWins++;
            display.textContent = 'You lose! Paper beats Rock';
        }
    }
    else {
        if (playerSelection == 'rock') {
            playerWins++;
            display.textContent = 'You win! Rock beats Scissors';
        }
        else {
            computerWins++;
            display.textContent = 'You lose! Scissors beats Paper';
        }
    }
    scoreDisplay.textContent = `Player: ${playerWins} Computer: ${computerWins}`;
    checkIfGameWon();
}

//simulate best of 5 match
function playGame() {
    display.textContent = 'OK...\nLet\'s Play...First to 5 wins';
    playerWins = 0;
    computerWins = 0;
    scoreDisplay.textContent = `Player: ${playerWins} Computer: ${computerWins}`;
}

function checkIfGameWon() {
    if (computerWins == 5) {
        display.textContent = 'Computer Wins!';
    }
    else if (playerWins == 5){
        display.textContent = 'You win!';
    }
}
