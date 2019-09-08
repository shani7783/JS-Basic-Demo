function someFunc() {
  for (let index = 1; index < 2; index++) {
    var someVar = index;
    let someLet = index;
  }
  console.log("var someVar value from for loop: ", someVar);
  //throws error
  //console.log("let someLet value from for loop: ", someLet);
}

someFunc();

function someFunc2() {
  var someVar2 = 2;
  console.log("var someVar2 value: ", someVar2);
  let someLet2 = 2;
  console.log("var someVar2 value: ", someVar2);
  //throws error
  //let someLet2 = 5;
}

someFunc2();

let someLetGlobal = "someLetGlobal";
var someVarGlobal = "someVarGlobal";
console.log("var window.someVarGlobal: ", window.someVarGlobal);
// let variables does not set to window object
console.log("let window.someLetGlobal: ", window.someLetGlobal);

for (var i = 0; i < 2; i++) {
  // always be the same value of i'
  console.log("var i in setTimeout function", i);
  setTimeout(() => console.log("var i in setTimeout function", i), 0);
}

for (let j = 0; j < 2; j++) {
  // different values of j
  setTimeout(() => console.log("let j in setTimeout function", j), 0);
}
