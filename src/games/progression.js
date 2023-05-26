import readlineSync from 'readline-sync';
import logika from '../index.js';
import getRandomNumber from '../math.js';
import getresult from '../generalProgression.js';

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    const progress = getresult(random1, random2);
    const TrueOtvet = String(progress[1]);
    console.log(`Question: ${progress[0]}`);
    const otvet = readlineSync.question('Your answer: ');
    const attempt = logika(otvet, TrueOtvet, i);
    if (!attempt) {
      break;
    }
  }
};

export default brainProgression;