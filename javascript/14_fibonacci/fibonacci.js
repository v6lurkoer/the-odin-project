const fibonacci = function(n) {
  let x = 1;
  let y = 0;
  let sum = 0;

  if (n < 0) return "OOPS";

  for (let i = 1; i <= n; i++) {
    sum = x + y;
    x = y;
    y = sum;
  }
  return sum;
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
