//Рекурсия
export const sequenceSum = (begin, end, step) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
  // END
};
