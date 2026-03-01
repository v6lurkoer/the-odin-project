const reg = /[\W\s]/g;

const palindromes = function (str) {
  const str_lower = str.toLowerCase();
  const str_cleaned = str_lower.split(reg);
  const str_concat = "".concat(...str_cleaned);
  const str_arr = str_concat.split("");

  for (let i = 0; i < (str_arr.length / 2); i++) {
    if (!(str_arr[i] === str_arr[str_arr.length - 1 - i])) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
