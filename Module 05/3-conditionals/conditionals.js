// if else 

if(5 > 7) {
  console.log("if(5 > 7) result is: ", true);
}
else {
  console.log("if(5 > 7) result is: ", false);
}


if(5 === "5") {
  console.log("if(5 === '5') result is: ", true);
}
else {
  console.log("if(5 === '5') result is: ", false);
}

if(5 == "5") {
  console.log("if(5 == '5') result is: ", true);
}
else {
  console.log("if(5 == '5') result is: ", false);
}

if(5 === "5") {
  console.log("if(5 === '5') result is: ", true);
}
else if (5 == "5"){
  console.log("else if(5 == '5') result is: ", false);
}
else {
  console.log("Else statement");
}


// swith case 
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("The switch case day is: ", day);

let message;
switch (new Date().getDay()) {
  case 6:
    message = "Today is Saturday";
    break; 
  case 0:
  message = "Today is Sunday";
    break; 
  default: 
  message = "Looking forward to the Weekend";
}

console.log("The switch case message is: ", message);