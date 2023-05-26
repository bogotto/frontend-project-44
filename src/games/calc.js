import readlineSync from 'readline-sync';
import getRandomNumber from '../math.js';
import logika from '../index.js';

const brainCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    const sign = '+-*';
    const randomsign = getRandomNumber(0, sign.length - 1);
    const randsign = sign[randomsign];
    let TrueOtvet;
    console.log(`Question: ${random1} ${randsign} ${random2}`);
    const otvet = readlineSync.question('Your answer: ');
    if (randsign === '+') {
      TrueOtvet = String(random1 + random2);
    }
    if (randsign === '-') {
      TrueOtvet = String(random1 - random2);
    }
    if (randsign === '*') {
      TrueOtvet = String(random1 * random2);
    }
    const attempt = logika(otvet, TrueOtvet, i);
    if (!attempt) {
      break;
    }
  }
};

export default brainCalc;