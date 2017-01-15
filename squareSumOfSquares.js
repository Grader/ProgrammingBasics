/*
Реализуйте функцию square, которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.
Переиспользуйте ваши функции там где это возможно.
*/
// BEGIN (write your solution here)
const square = x => x*x;
const sumOfSquares = (x, y) => {
  return (square(x) + square(y));
};
const squareSumOfSquares = (x, y) => {
  return square(sumOfSquares(x, y));
};
