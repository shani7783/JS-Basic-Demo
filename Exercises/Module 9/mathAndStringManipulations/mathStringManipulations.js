function getSquare() {
    let inputText = document.getElementById("userInput").value;
    let outputElement = document.getElementById("output");

    if(outputElement){
        outputElement.innerText = Math.sqrt(parseFloat(inputText));
    }
}

function getCeil() {
    let inputText = document.getElementById("userInput").value;
    let outputElement = document.getElementById("output");

    if(outputElement){
        outputElement.innerText = Math.ceil(parseFloat(inputText));
    }
}

function getFloat() {
    let inputText = document.getElementById("userInput").value;
    let outputElement = document.getElementById("output");

    if(outputElement){
        outputElement.innerText = Math.floor(parseFloat(inputText));
    }
}

function getRound() {
    let inputText = document.getElementById("userInput").value;
    let outputElement = document.getElementById("output");

    if(outputElement){
        outputElement.innerText = Math.round(parseFloat(inputText));
    }
}

function getMinNumber() {
    let inputText1 = document.getElementById("userInput2").value;
    let inputText2 = document.getElementById("userInput3").value;
    let outputElement = document.getElementById("output2");

    if(outputElement){
        outputElement.innerText = Math.min(parseFloat(inputText1), parseFloat(inputText2));
    }
}

function getMaxNumber() {
    let inputText1 = document.getElementById("userInput2").value;
    let inputText2 = document.getElementById("userInput3").value;
    let outputElement = document.getElementById("output2");

    if(outputElement){
        outputElement.innerText = Math.max(parseFloat(inputText1), parseFloat(inputText2));
    }
}

function replaceFirstWord() {
    let inputText = document.getElementById("userInput4").value;
    let outputElement = document.getElementById("output3");

    let splittedText = inputText.split(" ");
    splittedText[0] = "ReplacedWord";
     
    let newText = "";

    for (let i = 0; i < splittedText.length; i++) {
        newText = newText + splittedText[i] + " ";
    }

    if(outputElement){
        outputElement.innerText = newText.trim();
    }
}