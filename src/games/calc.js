#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesCalc = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  let correctAnswer = 0;
  switch (operator) {
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
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
  return correctAnswer;
};
const logicGameCalc = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculation(randomNumber1, randomNumber2, randomOperator));
  return [question, correctAnswer];
};

const startGameCalc = () => runEngine(rulesCalc, logicGameCalc);

export default startGameCalc;
