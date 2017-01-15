//Реализуйте функцию которая считает площадь треугольника на основе
// известной стороны и прилегающих к ней углов. Углы задаются в градусах.
// BEGIN (write your solution here)
const sTriangle = (a, b, c) => {
  const ug = 180 - (b + c);
  const rad = (x) => {
    return x * Math.PI / 180;
  };
  return (Math.pow(a, 2)/2 *
  Math.sin(rad(b)) * Math.sin(rad(c)) /
  Math.sin(rad(ug)));
};
export default sTriangle;
// END
