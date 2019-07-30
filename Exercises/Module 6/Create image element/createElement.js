

function createImage() {
    let appendDiv = document.getElementById("appendHere");
    let imageURL = document.getElementById("imageURL").value;
    let imageDescription = document.getElementById("imageDescription").value;
    let imgElement = document.createElement("img");
    imgElement.src= imageURL;
    imgElement.alt = imageDescription;
    imgElement.setAttribute("style", "margin: 10px; width: 200px; height: auto; display:block;");
    appendDiv.appendChild(imgElement);
}
