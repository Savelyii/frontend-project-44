#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesGcd = 'Find the greatest common divisor of given numbers.';

const gcdNumber = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcdNumber(num2, num1 % num2);
};

const logicGameGcd = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcdNumber(number1, number2));
  return [question, correctAnswer];
};

const startGameGcd = () => runEngine(rulesGcd, logicGameGcd);

export default startGameGcd;
