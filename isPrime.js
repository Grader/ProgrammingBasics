export const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
 let y = x - 1;
  while (x % y !== 0) {
    y--;
  }
  if (y > 1) {
    return false;
  }
  else if (y === 1) {
    return true;
  }
};

export const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  let y = x - 1;
  while (x % y !== 0) {
    y--;
  }
  if (y > 1) {
    return false;
  }
  return true;
};