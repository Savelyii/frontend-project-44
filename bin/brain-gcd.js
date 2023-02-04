#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const Username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${Username}!`);
console.log('Find the greatest common divisor of given numbers.');

const getRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

const gcdNumber = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcdNumber(num2, num1 % num2);
};

const startGameGcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(1, 11);
    const number2 = getRandomNumber(1, 11);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(gcdNumber(number1, number2));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${Username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${Username}!`);
};

startGameGcd();
