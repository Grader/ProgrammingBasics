// BEGIN (write your solution here)
export const smallestDivisor = (x) => {
  const iter = (acc) => {
    if (acc > x) {
      return x;
    }
    if (x % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
};
// END