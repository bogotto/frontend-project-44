import readlineSync from 'readline-sync';
import logika from '../index.js';
import getRandomNumber from '../math.js';
import getDivisor from '../generalGcd.js';

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    const TrueOtvet = String(getDivisor(random1, random2));
    console.log(`Question: ${random1} ${random2}`);
    const otvet = readlineSync.question('Your answer: ');
    const attempt = logika(otvet, TrueOtvet, i);
    if (!attempt) {
      break;
    }
  }
};

export default brainGcd;