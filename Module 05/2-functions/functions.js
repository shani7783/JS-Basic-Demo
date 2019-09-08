// function with parameters
function addFunc(num1, num2) {
  console.log("The sum of numbers is: ", num1 + num2);
}
addFunc(2, 3);
addFunc(2, 8, 6);

// function with return value
function addFuncReturnsParam(num1, num2) {
  return num1 + num2;
}
let res = addFuncReturnsParam(2, 3);
console.log("Function returns sum of number: ", res);
