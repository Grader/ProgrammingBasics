/*
Реализуйте функцию которая находит площадь равнобедренного
 треугольника по формуле: S = 1 / 2 * ( a * sqrt(b^2 - a^2 / 4) ),
 где a это основание, а b это сторона равнобедренного треугольника.
Экспортируйте эту функцию по умолчанию.
*/
import sqrt from './sqrt';

// BEGIN (write your solution here)
const sTriangle = (a, b) => {
  return 1/2*(a*sqrt(b*b - a*a/4));
};
export default sTriangle;
// END
