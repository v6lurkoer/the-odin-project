let first_num = 0;
let second_num = 0;
let operator = 0;

// 1 == add, 2 == subtract, 3 == multiply, 4 == divide
function operate(x, y, o) {
  if (o === 1) return add(x, y);
  if (o === 2) return subtract(x, y);
  if (o === 3) return multiply(x, y);
  if (o === 4) return divide(x, y);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
