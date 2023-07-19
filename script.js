// initialize play button and add event listener
// to start the game

const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', playGame);

const display = document.querySelector('.display');
display.textContent = 'Want to play a game?\nClick play to start';

// initialize rock, paper and scissors buttons
/*
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', )
paper.addEventListener('click', )
scissors.addEventListener('click', )
*/
const choices = document.querySelectorAll('.choice');

//rock paper scissors logic below
let playerWins = 0;
let computerWins = 0;
/*
while (true) {
    
    playerWins = 0;
    computerWins = 0;

    //playGame();
    
    let playAgain;// = prompt('Play Again? (type \'y\' or \'n\'');
    if (playAgain == 'n') {
        console.log('Thanks for playing!');
        break;
    }
    
}
*/
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
    display.textContent = 'OK...\nLet\'s Play...First to 5 wins';
    choices.forEach(choice => choice.addEventListener('click', getPlayerChoice));
    while (computerWins < 5 && playerWins < 5) {
        let computerSelection = getComputerChoice();
        let playerSelection = console.log(choice);
        //playerSelection = playerSelection.toLowerCase();
        let result = playRound(computerSelection, playerSelection);
        display.textContent = result;
    }

    if (computerWins == 5) {
        display.textContent = 'Computer Wins!';
    }
    else {
        display.textContent = 'You win!';
    }
}
// rock, paper, scissors logic above

// TODO: complete function
function getPlayerChoice(e) {
    
}

/*
listen for a click on rock, paper, and scissors
assign player choice based on which is clicked
*/