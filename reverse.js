import * as strings from './strings';

// BEGIN (write your solution here)
export const reverse = (str) => {
  let x = '';
  let z = strings.length(str) - 1;
    for (z; z >= 0; z--) {
    x += str[z];
  }
  return x;
};
// END