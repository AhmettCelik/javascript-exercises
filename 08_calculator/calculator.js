const add = function(firstNum, secondNum) {
	return firstNum + secondNum
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum
};

const sum = function(nums) {
  if(nums == []) return 0;
	let sum = 0;
  nums.forEach(item => sum += item)
  return sum;
};

const multiply = function(nums) {
  let sum = 1;
  nums.forEach(item => sum *= item)
  return sum;
};

const power = function(num, power) {
	let result = 1;
  for(let i = 0; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  while(num > 0) {
    result *= num;
    num--;
  }
  return result;
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
