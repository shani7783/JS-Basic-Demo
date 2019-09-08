//numbers

let numA = 3;
let numB = 5;
let sum = numA + numB;
console.log("Sum of numA and NumB is: ", sum);
sum = "I am string now";
console.log("Sum new type: ", sum);

//strings

let str = "3";
let num = 5;
let sumOfStrAndNum = str + num;
console.log("Sum of str and num is: ", sumOfStrAndNum);

//booleans

let isExist = false;
console.log("isExist property is: ", isExist);

//undefined

let num0;
console.log("num0 is: ", num0);

//number

let num1 = 3;
console.log("num1 = 3 is: ", num1);

// dates

var currentDate = new Date();
var currentDay = currentDate.getDay();
console.log("The current day is: ", currentDay);

//array

let arr1 = [4, 5, 6, 7];
console.log("The arr1 items are: ", arr1);
let arr2 = new Array(4, 5, 6, 7, 8, 9);
console.log("The arr2 items are: ", arr2);
arr1.push(9);
console.log("The arr1 items after push method are: ", arr1);
arr1[6] = 10;
console.log("The arr1 items after arr1[6] = 10 are: ", arr1);
arr1.pop();
console.log("The arr1 items after pop method are: ", arr1);
