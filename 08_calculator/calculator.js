const add = function(...args) {
  let sum = 0;
  args.forEach(arg => {
    sum += arg;
  });

  return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
  let sum = 0;

  numbers.forEach(num => {
    sum += num;
  });

  return sum;
};

const multiply = function(nums) {
  let total = 1;

  if (nums.length === 0) {
    total = 0;
  }

  nums.forEach(num => {
    total *= num;
  });

  return total;
};

const power = function(num1, num2) {
  let total = 1;

  for (let index = 0; index < num2; index++) {
    total *= num1;
  }

  return total;
};

const factorial = function(num) {
	let total = 1;

  for (let index = num; index > 0; index--) {
    total *= index;
  }

  return total;

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
