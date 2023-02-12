import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesProgression = 'What number is missing in the progression?';

const getProgression = (startNum, step, length) => {
  const arr = [startNum];
  for (let i = 0; arr.length < length; i += 1) {
    arr.push(arr[i] + step);
  }
  return arr;
};

const makeRound = () => {
  const startNum = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(6, 12);
  const progressionArr = getProgression(startNum, step, length);

  const hiddenPosition = getRandomNumber(1, progressionArr.length - 1);
  const hiddenElement = progressionArr[hiddenPosition];
  progressionArr[hiddenPosition] = '..';
  const question = progressionArr.join(' ');
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};

const startGameProgression = () => runEngine(rulesProgression, makeRound);

export default startGameProgression;
