import getRandomNumber from './math.js';

const getResult = (a) => {
  const result = [];
  const two = getRandomNumber(1, 10);
  let one = a;
  for (let i = 0; i < 10; i += 1) {
    one += two;
    result.push(one);
  }
  const sekret = getRandomNumber(1, 10);
  const answer = result[sekret];
  result[sekret] = '..';
  const progression = result.join(' ');
  return [progression, answer];
};

export default getResult;