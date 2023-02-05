#!/usr/bin/env node

import { getRandomNumber, generalLogic } from '../index.js';

const descriptionGcd = () => console.log('Find the greatest common divisor of given numbers.');

const logicGameGcd = () => {
  const gcdNumber = (num1, num2) => {
    if (!num2) {
      return num1;
    }

    return gcdNumber(num2, num1 % num2);
  };

  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcdNumber(number1, number2));
  return [question, correctAnswer];
};

const startGameGcd = () => generalLogic(descriptionGcd, logicGameGcd);

export default startGameGcd;
