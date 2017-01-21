const sum = (n, a, b) => {
  let x = 0;
  for (let i = 1; i <= n - 1; i++) {
    if ((i % a === 0) || (i % b === 0)) {
      x += i;
    }
  }  
  return x;
};
export default sum;