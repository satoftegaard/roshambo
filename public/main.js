const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const playerIncrement = () => {
  console.log('player wins!')
  const playerScoreText = $('.scores .player').textContent
  // Convert that to a number
  const playerScore = parseInt(playerScoreText) + 1
  // Add one to it
  // Put it back on screen
  $('.scores .player').textContent = playerScore

  $('figure.player').className = 'player win'
  $('figure.computer').className = 'computer lose'

  if (playerScore === 2) {
    gameOver(true)
  }
}

const computerIncrement = () => {
  console.log('computer wins!')
  const computerScoreText = $('.scores .computer').textContent
  const computerScore = parseInt(computerScoreText) + 1
  $('.scores .computer').textContent = computerScore

  $('figure.player').className = 'player lose'
  $('figure.computer').className = 'computer win'

  if (computerScore === 2) {
    gameOver(false)
  }
}

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  console.log('player is', player)
  console.log('computer is', computer)

// if the player clicks rock && the computer randomly selects paper - the computer wins and it's score is incremented by 1
  if (player === 'rock' && computer === 'paper') {
    computerIncrement()
// Get the player score as text
    // const playerScoreText = $('.scores.player').textContent
// Convert that to a number
    // const playerScore = parseInt(playerScoreText)
// Add one to it
    // const newPlayerScore = playerScore + 1
// Put it back on screen
    // $('.scores.player').textContent = newPlayerScore
    // console.log('computer wins')
  }

  if (player === 'rock' && computer === 'scissors') {
    playerIncrement()
  }

  if (player === 'rock' && computer === 'rock') {
    // console.log('game is tied!')
    console.log('it\'s a draw')
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
  }

  if (player === 'paper' && computer === 'paper') {
    // console.log('game is tied!')
    console.log('it\'s a draw')
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
  }

  if (player === 'paper' && computer === 'scissors') {
    computerIncrement()
  }

  if (player === 'paper' && computer === 'rock') {
    playerIncrement()
  }

  if (player === 'scissors' && computer === 'paper') {
    computerIncrement()
  }

  if (player === 'scissors' && computer === 'rock') {
    computerIncrement()
  }

  if (player === 'scissors' && computer === 'scissors') {
    console.log('it\'s a draw')
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
  }

  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'
  $('.scores .player').textContent = 0
  $('.scores .computer').textContent = 0
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
