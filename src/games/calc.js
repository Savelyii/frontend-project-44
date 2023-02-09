#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesCalc = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  let correctAnswer = 0;
  const getRandomSymbol = Math.floor(Math.random() * operator.length);
  switch (operator[getRandomSymbol]) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
  }
  return correctAnswer;
};

const logicGameCalc = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNumber(0, operator.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculation(randomNumber1, randomNumber2, randomOperator));
  return [question, correctAnswer];
};

const startGameCalc = () => runEngine(rulesCalc, logicGameCalc);

export default startGameCalc;
