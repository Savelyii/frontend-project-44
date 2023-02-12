import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGameEven = () => runEngine(rulesEven, makeRound);

export default startGameEven;
