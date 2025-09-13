const reverseString = function(str) {
  const arr = str.split("");
  const arrReversed = arr.reverse();
  const reversed = arrReversed.join("");
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
