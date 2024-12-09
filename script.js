'use strict';

// PROJECT from 'The Complete JavaScript Course 2024: From Zero to Expert!'

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
let score = 20;

// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Not number inserted it
  if (!guess) {
    document.querySelector('.message').textContent = '💩 No number';
  }

  // Player guess the number
  if (guess === number) {
    displayMessage('Correct number 😒👌');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(highscore);
    }

    // emoji on:
    // windows: win + .
    // mac: CMD + CTRL + Space
  }
  // Player guess the wrong number
  else if (guess !== number) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > number ? 'Decrease it more' : ' Increase it more');
    } else {
      displayMessage('🤡 Sorry, you lost');
      document.querySelector('body').style.backgroundColor = 'Red';
      document.querySelector('.number').textContent = number;
    }
  }
  // // Player put a low number
  // else if (guess > number) {
  //   if (score > 0) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Decrease it more';
  //   } else {
  //     document.querySelector('.message').textContent = '🤡 Sorry, you lost';
  //     document.querySelector('body').style.backgroundColor = 'Red';
  //     document.querySelector('.number').textContent = number;
  //   }
  // }
  console.log(score);
  // else {
  //   document.querySelector('.message').textContent = 'No Number 💀';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = ' ';
});
