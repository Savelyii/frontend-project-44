#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const logicGamePrime = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGamePrime = () => runEngine(rulesPrime, logicGamePrime);

export default startGamePrime;
