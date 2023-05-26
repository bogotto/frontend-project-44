import game from './cli.js';

const name = game();
const logika = (otvet, TrueOtvet, i) => {
  if (otvet === TrueOtvet) {
    console.log('Correct!');
  } else {
    console.log(`'${otvet}' is wrong answer ;(. Correct answer was '${TrueOtvet}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
  return true;
};

export default logika;