#!/usr/bin/env node

import { getRandomNumber, generalLogic } from '../index.js';

const descriptionProgression = () => console.log('What number is missing in the progression?');

const logicGameProgression = () => {
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

  const progressionArr = getProgression();

  const hiddenPosition = getRandomNumber(1, progressionArr.length - 1);
  const hiddenElement = progressionArr[hiddenPosition];
  progressionArr[hiddenPosition] = '..';
  const question = progressionArr.join(' ');
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};

const startGameProgression = () => generalLogic(descriptionProgression, logicGameProgression);

export default startGameProgression;