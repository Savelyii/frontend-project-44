#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

const generalLogic = (description, logicGame) => {
  console.log('Welcome to the Brain Games!');
  const Username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Username}!`);
  description();
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = logicGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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

export default generalLogic;
