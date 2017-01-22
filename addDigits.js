import * as strings from './strings';

export const addDigits = (num) => {
  const str = String(num);
  const iter = (i, acc) => {
    if (i < 0) {
      return acc;
    }
    const newAcc = acc + Number(str[i]);
    return iter(i - 1, newAcc);
  };
  const rezult = iter(strings.length(str) - 1, 0);
  if (strings.length(String(rezult)) === 1) {
    return rezult;
  }
  return addDigits(rezult);
};
