// var prompt = require('prompt-sync')();
function computerPlay() {
    let randNum = Math.floor(Math.random() * 3)
    if (randNum == 0) {
        return 'rock'; 
    } else if (randNum == 1) {
        return 'paper'; 
    } else if (randNum == 2) {
        return 'scissors'; 
    } else {
        return 'Error'; 
    }
}
function getPlayerInput () {
    // var playerInput = prompt("What's your input? (Rock/Paper/Scissors)"); 
    var playerInput = window.prompt("What's your input? (Rock/Paper/Scissors)"); 
    var playerInputValid = false; 
    if (playerInput.toLowerCase() === 'rock' || playerInput.toLowerCase() == 'paper' || playerInput.toLowerCase() == 'scissors') {
        playerInputValid = true; 
    }

    if (!playerInputValid) {
        do {
            var playerInput = window.prompt("Incorrect input. Please try again. (Rock/Paper/Scissors)"); 
            if (playerInput.toLowerCase() === 'rock' || playerInput.toLowerCase() == 'paper' || playerInput.toLowerCase() == 'scissors') {
                playerInputValid = true; 
            }
        } while (playerInputValid === false) 
    }
    
    return playerInput.toLowerCase(); 
}
var computerMove = computerPlay(); 
var playerMove = getPlayerInput(); 
console.log(playerMove); 

function playRound (playerSelection = playerMove, computerSelection = computerMove, rounds = 1){ 
    for (let i = 0; i < rounds; i++) {
        if (playerSelection === computerSelection) {
            console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
            console.log('Tie'); 
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
                console.log('Computer wins.'); 
            } else if (computerSelection === 'scissors') {
                console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
                console.log('Player wins.')
            }

        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
                console.log('Computer wins.'); 
            } else if (computerSelection === 'rock') {
                console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
                console.log('Player wins.')
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
                console.log('Computer wins.'); 
            } else if (computerSelection === 'paper') {
                console.log(`Computer selection is ${computerMove} & player move is ${playerMove}`)
                console.log('Player wins.')
            }
        }
    }
}

playRound()