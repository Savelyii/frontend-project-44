#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const Username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${Username}!`);
console.log('What number is missing in the progression?');
