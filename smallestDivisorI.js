export const smallestDivisor = (x) => {
  if (x < 1) {
    return NaN;
  }  
  if (x === 1) {
    return x;
  }
  let y = 2;
  while (x >= y) {
    if (x % y === 0) {
      return y;
    }
    y = y + 1;
  }
};
//V.2
export const smallestDivisor = (x) => {
  if (x < 1) {
    return NaN;
  }  
  if (x === 1) {
    return x;
  }
  let y = 2;
  while (x % y !== 0) {
    y = y + 1;
  }
  return y;
};