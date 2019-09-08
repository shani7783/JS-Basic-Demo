document.addEventListener("DOMContentLoaded", function(){
    let printHrefElement = document.querySelector(".print-href");
    printHrefElement.addEventListener("click", printWindowHref);
    let loadWindowElement = document.querySelector(".load-window");
    loadWindowElement.addEventListener("click", loadWindow);
    let replaceWindowElement = document.querySelector(".replace-window");
    replaceWindowElement.addEventListener("click", replaceWindow);
});

function printWindowHref() {
    document.getElementById("someText").innerHTML = 
"Window location href is: " + window.location.href;
}

function loadWindow() {
    window.location.assign("https://www.sela.co.il/")
}

function replaceWindow() {
    window.location.replace("https://www.sela.co.il/")
}