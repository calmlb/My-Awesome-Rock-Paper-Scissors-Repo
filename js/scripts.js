/* ----- constants ------- */

const options = ['R', 'P', 'S']
const winningCombos = ['RS', 'PR', 'SP']
const images = {
    R: "imgs/rock.png"
    P: "imgs/paper.png"
    S: "imgs/scissors.png"
}
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

//  CACHED ELEMENT REFERENCES
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
    playerImage.classList.remove('hidden')
    computerImage.classList.remove('hidden')
}

function choiceSelect(event) {
    playerChoice = event.target.id)
    compSelect()
    checkWinner()
    render()
}
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
        playerImage.classList.add('winner')
    // Computer Wins
    } else {
        scores.comp++
        computerImage.classList.add('winner')
    }
}

function render () {
    playerImage.src = images[playerChoice]
    computerImage.src = images[compChoice]

    playerScore.textContent = scores.player
    tiesScore.textContent = scores.ties
    compScore.textContent = scores.comp
    choices.classList.add('hidden')
    playButton.classList.remove('hidden')
}
