const convertToCelsius = function(val) {
  let celsius = (val - 32) * 5 / 9;
  if (Math.floor(celsius) === 0) return 0;
  let rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(val) {
  let fahrenheit = (val * 9 / 5 + 32);
  if (Math.floor(fahrenheit) === 0) return 0;
  let rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
