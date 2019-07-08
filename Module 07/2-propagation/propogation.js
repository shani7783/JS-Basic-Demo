document.addEventListener("DOMContentLoaded", function() {
    let div = document.querySelector("div");
    let p = document.querySelector("p");
    let span = document.querySelector("span");
    div.addEventListener("click", divClick);
    p.addEventListener("click", pClick);
    span.addEventListener("click", spanClick);

    function divClick(event) {
        console.log("Div was clicked");
    }

    function pClick(event) {
        console.log("P was clicked");
    }

    function spanClick(event) {
        console.log("span was clicked");
        event.stopPropagation();
    }
});