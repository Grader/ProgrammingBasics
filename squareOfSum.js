//Реализуйте функцию squareOfSum, которая находит квадрат
// суммы двух чисел по формуле: a^2 + 2ab + b^2
// BEGIN (write your solution here)
const squareOfSum = (a, b) => {
  const qua = Math.pow(a, 2);
  const qub = Math.pow(b, 2);
  return (qua + 2*a*b + qub);
};
// END
//Variant 2
// BEGIN (write your solution here)
const squareOfSum = (a, b) => {
  const qua = (a * a);
  const qub = (b * b);
  return (qua + 2*a*b + qub);
};
// END
