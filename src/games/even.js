#!/usr/bin/env node

import { getRandomNumber, generalLogic } from '../index.js';

const descriptionEven = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

const logicGameEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGameEven = () => generalLogic(descriptionEven, logicGameEven);

export default startGameEven;
