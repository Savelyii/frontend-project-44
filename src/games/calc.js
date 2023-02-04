#!/usr/bin/env node

import { getRandomNumber, generalLogic } from '../index.js';

const descriptionCalc = () => console.log('What is the result of the expression?');

const logicGameCalc = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
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
  const question = `${randomNumber1} ${arrSimbol[getRandomSymbol]} ${randomNumber2}`;
  return [question, correctAnswer];
};
const startGameCalc = () => generalLogic(descriptionCalc, logicGameCalc);

export default startGameCalc;
