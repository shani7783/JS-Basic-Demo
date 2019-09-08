
let globalVariable = "Global variable";

console.log("The globalVariable value is: ", globalVariable);

function changeTheGlobalVariable(otherVariable) {
    this.globalVariable = otherVariable;
    return this.globalVariable;
}

console.log("The function changed the global variable name to: ", changeTheGlobalVariable("new name"));


function innerVariable() {
    let innerVar = "Inner variable";
}

console.log("The function created innerVariable value is: ", typeof(innerVar));