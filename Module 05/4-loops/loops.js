// for loop 

for(let i = 0; i < 2; i++) {
  console.log("let i = 0; i < 6; i++   result is: ", i);
}

let arr = [4,5,6,7];
for(let i = 0; i < arr.length; i++) {
  console.log("the arr item is", arr[i]);
}


//while loop

let num = 0;
let sum = 0;

while(sum < 5){
  sum += num;
  num++;
  console.log("while(sum < 5) is: ", sum);
}


//do while

let num2 = 0;
let sum2 = 0;

do{
  sum2 += num2;
  num2++;
  console.log("do while(sum2 < 2) is: ", sum2);
} while (sum2 < 2)