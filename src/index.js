const add = (x, y) => {
  return x + y;
};
console.log(add(10,20));

const subtract = (x, y) => {
  return x - y;
};
console.log(subtract(4,3));

const divide = (x, y) => {
  return x / y;
};
console.log(divide(10,5));

const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(2,3));

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};
console.log(areSameLength('cake','blue'));

const areEqual = (x, y) => {
  return x === y;
};
console.log(areEqual(4,4));

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
console.log(isEven(4));

const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};
console.log(isOdd(2));

const roundNumber = num => {
  return Math.round(num);
};
console.log(roundNumber(5.95));

export {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
};
