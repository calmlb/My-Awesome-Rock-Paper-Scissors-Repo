/* ----- constants ------- */

const options = ['R', 'P', 'S']
const winningCombos = ['RS', 'PR', 'SP']

/* ------ apps state (variables) for state ------- */

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

let choices = document.getElementById('choices')

// Event Listeners
playButton.addEventListener('click', playGame)
resetButton.addEventListener('click', init)
choices.addEventListener('click', choiceSelect())

// Functions
function init() {
    scores = {
        player: 0,
        comp: 0,
        ties: 0
    }
    render();

}

function playGame() {
    choices.classList.remove('hidden')
    playButton.classList.add('hidden')
}

function choiceSelect(event) {
    playerChoice = event.target.id)
    compSelect()
    checkWinner()
    render()
}
    // handle comp choice
    //declare winner
    //give out points
    //play button resumes unhidden
    render()
}

function compSelect () {
compChoice = options[Math.floor(Math.random() * 3)] 
}

function checkWinner () {
    // Tie condition
    if (playerChoice === compChoice) {
    scores.ties++
    // Player Wins
    } else if (winningCombos.includes(playerChoice + compChoice)) {
        scores.player++
    // Computer Wins
    } else {
        scores.comp++
    }
}