

function createPelement() {
    let appendDiv = document.getElementById("appendHere");
    let pElement = document.createElement("p");
    pElement.innerText = "I'm new created 'p' element";
    pElement.setAttribute("style", "background-color: yellow; padding: 10px;");
    
    appendDiv.appendChild(pElement);
}

function createSpanElement() {
    let appendDiv = document.getElementById("appendHere");
    let spanElement = document.createElement("span");
    spanElement.innerText = "I'm new created 'span' element";
    spanElement.setAttribute("style", "background-color: red; padding: 10px;");
    
    appendDiv.appendChild(spanElement);
}