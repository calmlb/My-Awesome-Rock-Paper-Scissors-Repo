console.log("")
// Constants

const options = ['R', 'P', 'S']
const winningCombos = ['RS', 'PR', 'SP']

// apps state (variables) for state

let scores = {
    player: 0,
    comp: 0,
    ties: 0
}

scores.comp
scores.player
ties.player

let playerChoice;
let compChoice;


// cached element references
let playerScore = document.getElementById('player-score')
let tiesScore = document.getElementById('ties-score')
let compScore = document.getElementById('computer-score')

// IMAGES
let playerImage = document.getElementById('player-output')
let computerImage = document.getElementById('computer-output')

//BUTTONS
let playButton = document.getElementById('play')
let restButton = document.getElementById('reset')

getElementsByClassName /*never use - always querySelector and querySelectorAll and getElementById */
getElementsById /*always fastest because unique, so fast to search*/
querySelectorAllquerySelectorAll
// event listeners


// functions
