const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let s = 0;
  array.forEach((value) => {
    s += value;
  });
  return s;
};

const multiply = function(array) {
  let s = 1;
  array.forEach((value) => {
    s *= value;
  });
  return s;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
  let s = 1;
  for (let i = 0; i < n; i++) {
    s *= (n - i);
  };
  return s;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
