#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const Username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${Username}!`);
console.log('What number is missing in the progression?');

const startGameProg = () => {
  const getRandomNumber = (min, max) => {
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  };

  const getProgression = () => {
    const begin = getRandomNumber(1, 100);
    const stepProgression = getRandomNumber(2, 10);
    const progressionLength = getRandomNumber(6, 12);
    const arr = [begin];
    for (let i = 0; arr.length < progressionLength; i += 1) {
      arr.push(arr[i] + stepProgression);
    }
    return arr;
  };

  for (let i = 0; i < 3; i += 1) {
    const progressionArr = getProgression();

    const hiddenPosition = getRandomNumber(1, progressionArr.length - 1);
    const hiddenElement = progressionArr[hiddenPosition];
    progressionArr[hiddenPosition] = '..';
    const question = progressionArr.join(' ');
    const correctAnswer = String(hiddenElement);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${Username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${Username}!`);
};

startGameProg();
