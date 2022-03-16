// var prompt = require('prompt-sync')();
let playerInput = ''; 
let matchResult = ''; 
let resultsList = document.getElementById('results'); 
let roundCounter = document.getElementById('roundCounter')
let gameResult = document.getElementById('gameResult'); 
let round = 1; 
let roundLimit = 5; 
let roundResults = []; 
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
/* 
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
*/
function playRound (playerMove, rounds = 1){ 
    for (let i = 0; i < rounds; i++) {
        var computerMove = computerPlay(); 
        if (playerMove === computerMove) {
            roundResults.push('Tie.'); 
            return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
            Tie. `; 
        } else if (playerMove === 'rock') {
            if (computerMove === 'paper') {
                roundResults.push('Computer wins.'); 
                return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
                Computer wins.`
            } else if (computerMove === 'scissors') {
                roundResults.push('Player wins.'); 
                return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
                Player wins.`
            }

        } else if (playerMove === 'paper') {
            if (computerMove === 'scissors') {
                roundResults.push('Computer wins.');  
                return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
                Computer wins.`
            } else if (computerMove === 'rock') {
                roundResults.push('Player wins.'); 
                return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
                Player wins.`
            }
        } else if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                roundResults.push('Computer wins.'); 
                return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
                Computer wins.`
            } else if (computerMove === 'paper') {
                roundResults.push('Player wins.'); 
                return `Computer selection is ${computerMove} & player move is ${playerMove}<br> 
                Player wins.`
            }
        }
    }
}

function checkResults (results) {
    let tie = 0; 
    let cWin = 0; 
    let pWin = 0; 
    for (let i = 0; i < results.length; i++) {
        if (results[i] === 'Tie.') {
            tie += 1; 
        } else if (results[i] === 'Computer wins.') {
            cWin += 1; 
        } else if (results[i] === 'Player wins.') {
            pWin += 1; 
        }
    }
    if (cWin == pWin) {
        gameResult.innerHTML = "Tie"; 
    } else if (cWin > pWin) {
        gameResult.innerHTML = "Computer wins game!"; 
    } else if (cWin < pWin) {
        gameResult.innerHTML = "Player wins game!"; 
    }
}

document.getElementById('rock').addEventListener('click', function () {
    if (round <= roundLimit) {
        playerInput = 'rock'; 
        matchResult = playRound(playerInput); 
        console.log(roundResults); 
        resultsList.innerHTML = resultsList.innerHTML + "<br>" + matchResult; 
        roundCounter.innerHTML = "Round: " + round + " of " + roundLimit; 
        round += 1; 
    } else if (round > roundLimit) {
        checkResults(roundResults); 
    }
}) 
document.getElementById('paper').addEventListener('click', function () {
    if (round <= roundLimit) {
        playerInput = 'paper'; 
        matchResult = playRound(playerInput); 
        console.log(roundResults); 
        resultsList.innerHTML = resultsList.innerHTML + "<br>" + matchResult; 
        roundCounter.innerHTML = "Round: " + round + " of " + roundLimit; 
        round += 1; 
    } else if (round > roundLimit) {
        checkResults(roundResults); 
    }
}) 
document.getElementById('scissors').addEventListener('click', function () {
    if (round <= roundLimit) {
        playerInput = 'scissors'; 
        matchResult = playRound(playerInput); 
        console.log(roundResults); 
        resultsList.innerHTML = resultsList.innerHTML + "<br>" + matchResult; 
        roundCounter.innerHTML = "Round: " + round + " of " + roundLimit; 
        round += 1; 
    } else if (round > roundLimit) {
        checkResults(roundResults); 
    }
}) 


/*
const buttons = Array.from(document.querySelectorAll('.button'));  

buttons.forEach(button => button.addEventListener('click', function() {
    console.log('hi'); 
})); 
*/