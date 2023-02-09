#!/usr/bin/env node

import readlineSync from 'readline-sync';

const runEngine = (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const Username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Username}!`);
  console.log(rules);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${Username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${Username}!`);
};

export default runEngine;
