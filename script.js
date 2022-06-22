'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = document.querySelector('.message');
const displayNumber = document.querySelector('.number');
const displayScore = document.querySelector('.score');
const body = document.querySelector('body');
const guessNumber = document.querySelector('.guess');
const again = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const displayHighScore = document.querySelector('.highscore');

checkButton.addEventListener('click', function () {
  const guess = Number(guessNumber.value);

  if (!guess) {
    displayMessage.textContent = 'Please input a number!!';
  } else if (guess === secretNumber) {
    displayMessage.textContent = 'Exactly!';
    body.style.backgroundImage = 'linear-gradient(red, yellow)';
    displayNumber.textContent = secretNumber;
    displayNumber.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      displayHighScore.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage.textContent =
        guess > secretNumber ? 'Lower it!' : 'Go higher!';
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage.textContent = 'You lost buddy!';
      displayScore.textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  displayScore.textContent = score;
  displayMessage.textContent = 'Start guessing...';
  guessNumber.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundImage = 'black';
  displayNumber.style.width = '15rem';
  displayNumber.textContent = '?';
});
