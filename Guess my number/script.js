'use strict';

/*
// To select from HTML file using class
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 14;
document.querySelector('.score').textContent = 15;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if (!guess) {
      displayMsg('Enter any Number!');
      score--;
    } else {
      if (guess === secretNumber) {
        displayMsg('Correct Number');
        if (score > highScore) {
          highScore = score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
      } else if (guess < 1 || guess > 20) {
        displayMsg('Number is not in the given range!');
        score--;
      } else {
        displayMsg(guess > secretNumber ? 'Number is High' : 'Number is Low');
        score--;
      }
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.score').textContent = score;
  } else {
    displayMsg('Lost the Game');
    document.querySelector('.score').textContent = 0;
  }
});

/*
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMsg('Start guessing...');
  document.querySelector('.guess').value = '';
});
