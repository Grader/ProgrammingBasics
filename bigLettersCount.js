import * as strings from './strings';

const bigLettersCount = (str) => {
  const iter = (i, acc) => {
    if (i < 0) { 
      return acc;
      } 
      const newAcc = strings.toUpperCase(str[i]) === str[i] ? acc + 1 : acc; 
      return iter(i - 1, newAcc);
	  };
  return iter(strings.length(str) - 1, 0);
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
    if (firstCount > secondCount) {
      return 1;
    }
    else if (firstCount < secondCount) {
      return -1;
    }
    return 0;
};

export const greaterThan = (first, second) => {
  return compare(first, second) === 1;
};

export const lessThan = (first, second) => {
  return compare(first, second) === -1;
};

//for
const bigLettersCount = (str) => {
  let result = 0;
  for (let i = 0; i < strings.length(str); i++) {
    if (strings.toUpperCase(str[i]) === str[i]) {
      result++;
    }
  }
  return result;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
    if (firstCount > secondCount) {
      return 1;
    }
    else if (firstCount < secondCount) {
      return -1;
    }
    return 0;
};

export const greaterThan = (first, second) => {
  return compare(first, second) === 1;
};

export const lessThan = (first, second) => {
  return compare(first, second) === -1;
};
