const gcd = (x, y) => {
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  if (x === y) {
    return x;
  }
  let z = Math.abs(x - y);
    while (z > 0) {
      if ((y % z === 0) && (x % z === 0)) {
        return z;
      }
      z = z - 1;
    }
};
export default gcd;