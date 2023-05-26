import readlineSync from 'readline-sync';
import getRandomNumber from '../math.js';
import logika from '../index.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    console.log(`Question: ${random1}`);
    const otvet = readlineSync.question('Your answer: ');
    const quest = random1 % 2 === 0 ? 'yes' : 'no';
    const attempt = logika(otvet, quest, i);
    if (!attempt) {
      break;
    }
  }
};

export default brainEven;
