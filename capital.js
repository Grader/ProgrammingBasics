import * as strings from './strings';

const prop = (str) => {
  const iter = (i, acc) => {
    if (i > strings.length(str) - 2) {
      return acc;
    }
    const newStr = (str[i] === ' ') ? acc +
    (strings.toUpperCase(str[i + 1])) : acc + (str[i + 1]);
    return iter(i + 1, newStr);
  };
  return iter(0, strings.toUpperCase(str[0]));
};
export default prop;
