const repeatString = function(str, num) {
  let hey = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      hey += str;
    }
    return hey;
  }
};

// Do not edit below this line
module.exports = repeatString;
