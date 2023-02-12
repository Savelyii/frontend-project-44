import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const rulesCalc = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const makeRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculation(randomNumber1, randomNumber2, randomOperator));
  return [question, correctAnswer];
};

const startGameCalc = () => runEngine(rulesCalc, makeRound);

export default startGameCalc;
