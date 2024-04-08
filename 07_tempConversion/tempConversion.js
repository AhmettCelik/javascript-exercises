const convertToCelsius = function(fahrenheit) {
  let celsiusFormat = (fahrenheit - 32) / 1.8;
  result = Math.round(celsiusFormat * 10) / 10;
  return result;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitFormat = celsius * 1.8 + 32;
  result = Math.round(fahrenheitFormat * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
