#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const Username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${Username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generationRandomnumber = () => Math.round(Math.random() * 100);
const isEven = (num) => num % 2 === 0;

const startGameEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generationRandomnumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${Username}`);
      return;
    }
  }
  console.log(`Congratulations, ${Username}!`);
};

startGameEven();
