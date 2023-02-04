#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const Username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${Username}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generationRandomnumber = (number) => Math.round(Math.random() * number);

const startGamePrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generationRandomnumber(50);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${Username}`);
      return;
    }
  }
  console.log(`Congratulations, ${Username}!`);
};

startGamePrime();
