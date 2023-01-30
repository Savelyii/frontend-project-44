#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const generationRandomnumber = () => Math.round(Math.random() * 100);

const randomNumber1 = generationRandomnumber();
const randomNumber2 = generationRandomnumber();

let correctAnswer = 0;

const arrSimbol = ['+', '-', '*'];
const getRandomSymbol = Math.floor(Math.random() * arrSimbol.length);
switch (arrSimbol[getRandomSymbol]) {
  case '+':
    correctAnswer = randomNumber1 + randomNumber2;
    break;
  case '-':
    correctAnswer = randomNumber1 - randomNumber2;
    break;
  case '*':
    correctAnswer = randomNumber1 * randomNumber2;
    break;
  default:
    break;
}

correctAnswer = String(correctAnswer);

const startGameCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const expression = `${randomNumber1} ${arrSimbol[getRandomSymbol]} ${randomNumber2}`;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

startGameCalc();
